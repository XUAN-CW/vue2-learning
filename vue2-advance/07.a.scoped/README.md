---
title: 07.a.scoped
tags: 
date: 2022-02-21 15:17:38
id: 1645427858507269900
---
# 摘要

scoped 解决了样式选择器重名的问题

# 代码实现

## 同名选择器组件

 [Student.vue](src\components\Student.vue) 、 [School.vue](src\components\School.vue) 两个组件都有 `demo` 选择器，`style` 标签带上了 `scoped` 

## 使用组件

在 [App.vue](src\App.vue) 中使用上面两个组件

# 测试

1. 运行后发现两个组件样式正确
2. 删除两个组件 `style` 标签带上的 `scoped` 后，两个组件颜色一样。这是因为 [App.vue](src\App.vue) 中后引入组件 [School.vue](src\components\School.vue) 的 `demo` 选择器覆盖了前面引入 [Student.vue](src\components\Student.vue) 组件的 `demo` 选择器





