import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    {
      name: 'handle-api-data',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url === '/api/save-data' && req.method === 'POST') {
            let body = ''
            req.on('data', chunk => { body += chunk })
            req.on('end', () => {
              try {
                const data = JSON.parse(body)
                const { lineId, content } = data
                
                // 確保目錄存在
                const apiDataDir = path.resolve(__dirname, 'src/api-data')
                if (!fs.existsSync(apiDataDir)) {
                  fs.mkdirSync(apiDataDir, { recursive: true })
                }
                
                // 寫入檔案
                const filePath = path.resolve(apiDataDir, `${lineId}.json`)
                fs.writeFileSync(filePath, JSON.stringify(content, null, 2))
                
                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ success: true }))
              } catch (error: any) {
                res.writeHead(500, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ error: error.message }))
              }
            })
          } else {
            next()
          }
        })
      }
    },
    {
      name: 'copy-google-verification',
      closeBundle() {
        // 複製 Google 驗證檔案
        fs.copyFileSync(
          'google029c6a69d63c4f47.html',
          'dist/google029c6a69d63c4f47.html'
        )
      }
    }
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    // 設置輸出目錄
    outDir: 'dist',
    // 設置生成文件的目錄
    assetsDir: 'assets',
    // 完全禁用 source map
    sourcemap: false,
    // 禁用生成 .vue.js 文件
    cssCodeSplit: true,
    // 優化建構
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        // 分割 vendor
        manualChunks: {
          'vendor': [
            'vue',
            'vue-router',
            'pinia'
          ]
        },
        // 設定快取策略
        chunkFileNames: 'assets/js/[name].[hash].js',
        entryFileNames: 'assets/js/[name].[hash].js',
        assetFileNames: ({name}) => {
          if (/\.(css)$/.test(name ?? '')) {
            return 'assets/css/[name].[hash][extname]'
          }
          if (/\.(png|jpe?g|gif|svg|ico)$/.test(name ?? '')) {
            return 'assets/img/[name].[hash][extname]'
          }
          return 'assets/[name].[hash][extname]'
        }
      }
    },
    // 壓縮設置
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log'],
        passes: 2
      }
    },
    // 確保 HTML 檔案被正確複製
    copyPublicDir: true
  },
  // 確保靜態檔案處理
  publicDir: 'public',
  // 優化依賴預構建
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia'],
    exclude: ['@vueuse/core']
  }
})
