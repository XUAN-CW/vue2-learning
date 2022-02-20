---
title: 01.a.配置文件
tags: 
date: 2022-02-20 21:39:10
id: 1645364350204204800
---
# 摘要

参考 https://cli.vuejs.org/zh/config/ ，修改启动端口

# 实现步骤

## 创建 vue.config.js

`vue.config.js` 是一个可选的配置文件，如果项目的 (和 `package.json` 同级的) 根目录中存在这个文件，那么它会被 `@vue/cli-service` 自动加载。

## 修改端口

在 `vue.config.js` 添加以下内容：

```json
module.exports = {
    devServer: {
        port: 9000
    }
}
```

# 测试

运行下面的命令，可见启动端口被改为 `9000` 

```sh
 npm run serve
```



