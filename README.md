# 2026 曼谷＋芭達雅 7天6夜 家族查閱手冊

這是一包可直接上 GitHub Pages 的靜態網站檔案。

## 檔案說明

- `index.html`：網站主頁
- `style.css`：版面與手機樣式
- `script.js`：渲染每日行程、SPA、備案卡片
- `data.js`：所有行程資料，可直接修改文字
- `assets/original-guide.pdf`：原始行程 PDF

## 本機預覽

直接打開 `index.html` 即可。

## 上傳 GitHub Pages

1. 建立新的 GitHub repository。
2. 將整包檔案上傳到 repository 根目錄。
3. 到 Settings → Pages。
4. Source 選 `Deploy from a branch`。
5. Branch 選 `main`，資料夾選 `/root`。
6. 儲存後等待 GitHub 產生網址。

## 修改行程

只要編輯 `data.js` 裡的 `days`、`spas`、`extras` 內容即可。
