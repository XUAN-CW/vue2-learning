---
title: 自定义组件
tags: 
date: 2022-02-20 22:07:11
id: 1645366031877928800
---
# 摘要

# 代码实现

## 创建组件

vue-cli 中的所有组件都是存放在 components 文件夹下面的，所以在components文件夹下面创建一个名为  [First.vue](src\components\First.vue)  的自定义组件

## import 组件

哪里要用这个组件就在哪里 import ，这里我在  [App.vue](src\App.vue) 里引用。在 `<script>` 标签里面使用 import 导入自定义的标签：

```sh
import First from "./components/First"
```

## components 添加组件

编辑 [App.vue](src\App.vue) ，在 components  里添加自定义组件：

```vue
  components: {
    First,
  },
```

## 使用组件

编辑 [App.vue](src\App.vue) ，添加组件对应标签，即可看到使用组件的效果

```vue
<First></First>
```

# 参考

 [如何在vue-cli中创建并引入自定义组件.html](assets\references\如何在vue-cli中创建并引入自定义组件.html) 
