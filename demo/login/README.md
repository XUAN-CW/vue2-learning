---
title: login
tags: 
date: 2022-03-03 19:20:13
id: 1646306413163226000
---
# 摘要

# 实现步骤

## 安装

```
npm i element-ui -S
```

## 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

