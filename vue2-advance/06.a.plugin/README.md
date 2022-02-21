---
title: 06.a.plugin
tags: 
date: 2022-02-21 14:49:53
id: 1645426193698308600
---
# 摘要

# 代码实现

## 开发插件  [HelloPlugin.js](src\plugins\HelloPlugin.js) 

Vue.js 的插件应该暴露一个 `install` 方法。这个方法的第一个参数是 `Vue` 构造器，第二个及后面的第 n 个参数是一个可选的选项对象。这里为了简单起见，我们就定义一个最简单的插件，完成控制台输出一句话即可：

```js
export default {
	install() {
		console.log('hello plugin')
	}
}
```

## 使用插件 

见 [main.js](src\main.js) 

### 引入插件

```vue
import HelloPlugin from './plugins/HelloPlugin'
```

### 使用插件

```vue
Vue.use(HelloPlugin)
```

# 效果

运行程序后，在控制台可见插件中定义输出的 `hello plugin` 

# 参考

https://cn.vuejs.org/v2/guide/plugins.html
