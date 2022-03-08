# 介绍

Polaris 是一个基于 Vue3、TypeScript 和 TailwindCSS 打造的 Vue 3.0 组件库。

## 快速开始

### 安装组件库

```bash
npm i polaris-ui
yarn add polaris-ui
```

### 引用组件库

> 在 main.js 中引用组件库

```js
// 全部引入
import PolarisUI from 'polaris-ui'
import 'polaris-ui/index.css'

Vue.use(PolarisUI)

// 按需引入
import { Button } from 'polaris-ui'
import 'polaris-ui/index.css'

Vue.use(Button)
```
