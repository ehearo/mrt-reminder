# 台北捷運即時資訊

一個簡潔的台北捷運即時資訊網頁應用，提供車站時刻表查詢和收藏功能。

## 功能特色

- 🚇 依路線瀏覽車站
- 🕒 即時車站時刻表
- 🔍 站點搜尋功能
- ⭐ 收藏常用車站
- 📱 行動裝置優化
- 🌙 iOS Safari 安全區域支援

## 支援路線

- 淡水信義線
- 板南線
- 松山新店線
- 中和新蘆線

## 技術架構

- Vue 3 + TypeScript
- Vite
- Tailwind CSS
- Pinia 狀態管理
- Vue Router

## 開發設定

### 安裝相依套件

```bash
npm install
```

### 開發環境運行

```bash
npm run dev
```

### 建置專案

```bash
npm run build
```

### 資料轉換指令

在專案根目錄執行以下指令來轉換車站資料：

```bash
python src/api-data/convert_to_stations.py
```

## 💻 瀏覽器支援

- Chrome/Edge >= 90
- Safari >= 14
- Firefox >= 90
- iOS Safari >= 14

## 🚀 部署資訊

本專案使用 GitHub Pages 部署，自動化部署流程：
- 推送到 main 分支會觸發部署
- 使用 GitHub Actions 自動建置
- 部署到 gh-pages 分支

訪問網址：https://metro-taipei.site

## 📝 授權說明

本專案採用 MIT 授權條款。

## 👨‍💻 開發者

- ehearo