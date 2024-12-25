declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 聲明靜態資源模組
declare module '*.svg' {
  const content: string
  export default content
}

declare module '*.json' {
  const value: any
  export default value
}