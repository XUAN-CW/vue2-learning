---
title: 03.a.ref获取元素
tags: 
date: 2022-02-20 22:32:05
id: 1645367525267195900
---
# 摘要

ref 是用来获取 DOM 元素的。`this.$refs` 与 `document.getElementById()` 有异曲同工之妙

# 代码实现

见 [HelloWorld.vue](src\components\HelloWorld.vue) 

## 添加 ref 属性

```sh
<h1 ref="refTest">hello ref</h1>
```

## 引用

```vue
console.log(this.$refs.refTest);
```

# 参考

- https://cn.vuejs.org/v2/api/#vm-refs 
- https://cn.vuejs.org/v2/api/#ref 
- [Vue refs tutorial_ Accessing DOM elements in a Vue.js app.html](assets\references\Vue refs tutorial_ Accessing DOM elements in a Vue.js app.html)  
- [vue中ref的用法总结.html](assets\references\vue中ref的用法总结.html) 
