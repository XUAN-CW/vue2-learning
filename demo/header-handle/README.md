---
title: header-handle
tags: 
date: 2022-03-03 21:17:06
id: 1646313427006188300
---
# 摘要

 [vue实现部分页面导入底部 vue配置公用头部、底部，可控制显示隐藏.html](assets\references\vue实现部分页面导入底部 vue配置公用头部、底部，可控制显示隐藏.html) 

网页回退就出现bug了，前一页也隐藏了头部，解决方法是加上：

```vue
  beforeDestroy() {
    this.$emit("header", true);
  },
```

# 参考

 [vue脚手架配置公用头部、底部。控制显示隐藏.html](assets\references\vue脚手架配置公用头部、底部。控制显示隐藏.html) 

 [vue实现部分页面导入底部 vue配置公用头部、底部，可控制显示隐藏.html](assets\references\vue实现部分页面导入底部 vue配置公用头部、底部，可控制显示隐藏.html) 
