---
title: todo-list
tags: 
date: 2022-02-21 15:51:14
id: 1645429874272429600
---
# 摘要

以 todo-list 为艾米莉讲述组件化编码流程：

1. 实现静态组件：抽取组件，使用组件实现静态页面效果
2. 展示动态数据：
   1. 数据的类型、名称是什么？
   2.  数据保存在哪个组件？
3. 交互——从绑定事件监听开始

# 代码实现

## 创建项目

```sh
# 创建项目
vue create todo-list
# 进入项目
cd todo-list
# 安装依赖
npm install --save nanoid@3.1.23
```

## 打代码

不废话了，自己看吧

1.  [MyHeader.vue](src\components\MyHeader.vue) 
2.  [MyItem.vue](src\components\MyItem.vue) 
3.  [MyList.vue](src\components\MyList.vue) 
4.  [MyFooter.vue](src\components\MyFooter.vue) 
5.  [App.vue](src\App.vue) 

# 运行

```sh
npm run serve
```

# 总结

实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：

1. 一个组件在用:放在组件自身即可
2. 一些组件在用:放在他们共同的父组件上(状态提升)

---

props适用于:

1. 父组件 ==> 子组件通信
2. 子组件 ==> 父组件通信 (要求父先给子一个函数)

# 参考

 https://github.com/ai/nanoid 

 [尚硅谷Vue2.0+Vue3.0全套教程丨vuejs从入门到精通]( https://www.bilibili.com/video/BV1Zy4y1K7SH?p=70) 
