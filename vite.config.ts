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
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': [
            'vue',
            'vue-router',
            'pinia',
            '@vueuse/core'
          ],
          'app': [
            './src/App.vue',
            './src/main.ts',
            './src/router/index.ts',
            './src/stores/favorite.ts'
          ]
        },
        // 將所有 JS 文件輸出到 wwwroot/js 目錄
        entryFileNames: 'assets/js/[name].[hash].js',
        chunkFileNames: 'assets/js/[name].[hash].js',
        assetFileNames: ({ name = '' }) => {
          if (name.endsWith('.css')) return 'assets/css/[name].[hash][extname]'
          if (/\.(png|jpe?g|gif|svg|ico)$/i.test(name)) {
            return 'assets/img/[name][extname]'
          }
          if (/\.(woff2?|eot|ttf|otf)$/.test(name)) return 'assets/fonts/[name].[hash][extname]'
          return 'assets/[name].[hash][extname]'
        }
      }
    },
    // 壓縮設置
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      format: {
        comments: false
      }
    },
    // 確保 HTML 檔案被正確複製
    copyPublicDir: true
  },
  // 確保靜態檔案處理
  publicDir: 'public'
})
