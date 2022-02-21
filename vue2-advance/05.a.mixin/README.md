---
title: 05.a.mixin
tags: 
date: 2022-02-21 14:22:03
id: 1645424524015816800
---
# 摘要

提取公共元素放到一起，方便到处引用

# 代码实现

##  创建 mixin 文件

[mixin.js](src\mixins\mixin.js) 定义方法、数据之类的东西，名字无所谓，后面引用对的上就行

## 引入一个混合

见 [HelloWorld.vue](src\components\HelloWorld.vue) 

### import

用多少个就引入多少个

```vue
import { hello, showNameDemo } from "../mixins/mixin";
```

### export 

```vue
export default {
  mixins: [hello, showNameDemo],
};
```

### 使用

直接使用即可

```vue
    <h2 @click="showName">学校名称：{{ name }}</h2>
```

# 参考

https://cn.vuejs.org/v2/guide/mixins.html



