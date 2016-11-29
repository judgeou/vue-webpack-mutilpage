# 前言

就是想嵌入已有的项目

# 教程

## 创建一个全新的页面

### config/html.js

首先我们先修这个js的内容。

这里我们添加一个接下来需要进行开发的html页面的文件地址，注意文件名不能带后缀。

`'index'`可以替换为其他字符串，但注意不要和此对象下面其他的属性名重复，实际开发推荐填写地址。

```javascript
var htmls = {
    'index': './index'
}

module.exports = htmls;
```

### index.html

创建一个index.html，在根目录

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>index</title>
  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```

### index.js 

创建一个index.js。文件名必须和html相同，并且处在同一目录

注意el部分必须绑定一个非body的DOM节点，这里我们对应index.html里面的 `<div id="app"></div>`

```javascript
import Vue from 'vue'
import App from './src/App' // 这里我们import的是一个vue文件，省略了后缀名，稍后我们再编写这个vue文件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
```

### src/App.vue

在src文件夹下面创建App.vue，实际开发你可以选择任意目录

```html
<template>
  <div class="app">
    <img src="./assets/logo.png">
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style scoped>
div.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```

这样我们就可以通过编写vue组件的方式来编写我们的页面了

参考资料
> * [vue教程](https://vuefe.cn/v2/guide/)
> * [vue组件](https://vuefe.cn/v2/guide/components.html)
> * [关于vue文件](https://vuefe.cn/v2/guide/single-file-components.html)

## 如何进行开发工作

```bash
# 启动http服务，默认端口8088
npm run dev
```
使用以上方式通过8088端口访问网页，热部署和webpack的自动打包将会很好的工作，带来革命性的效率提升。

每当我们修改vue文件时，将会自动实现局部刷新，若修改的是html或者js则会自动刷新整个页面。

ESLint 将会对vue文件生效，一旦vue文件发生语法错误或者触发ESLint规则都会即时在页面提示
![](http://i1.piimg.com/567571/68f47863698323f7.jpg)

## 如何进行生产发布

```bash
npm run build
```
执行完毕后，将会在html文件的目录下生成一个"文件名+_build.html"的html文件，正式生产环境应把链接地址替换成此文件。

之所以采取这种方式，是因为能够良好的兼容一些已经存在的项目，这些项目的页面往往需要很多额外的js，css等文件的引入，
为了使用相对地址的同时网页不受影响，必须把_build.html文件放在与原文件同一目录。

# 配置

把html页面的地址写进这里config/html.js

然后设置config/index.js里面的proxyTable，用来反向代理后端请求

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
