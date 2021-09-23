# heytea项目说明
Dian团队2021夏令营web方向前端任务，一个模仿喜茶小程序的单页面应用

------

[![](https://img.shields.io/badge/React-%5E17.0.2-blue)](https://www.npmjs.com/package/react) [![](https://img.shields.io/badge/axios-%5E0.21.1-blueviolet)](https://www.npmjs.com/package/axios) [![](https://img.shields.io/badge/qs-%5E6.10.1-green)](https://www.npmjs.com/package/qs) [![](https://img.shields.io/badge/react--redux-%5E7.2.5-orange)](https://www.npmjs.com/package/react-redux) [![](https://img.shields.io/badge/redux--thunk-%5E2.3.0-red)](https://www.npmjs.com/package/redux-thunk)

## 目录

- [安装与启动](#安装与启动)

- [项目目录结构说明](#项目目录结构说明)

## 安装与启动

启动方式：

打开终端，进入项目目录，运行以下命令(需要安装[Node.js](https://nodejs.org/en/))

```
npm start
```

## 项目目录结构说明

├─README.md
├─public                               // 静态资源文件夹
│  │  favicon.ico
│  │  index.html
│  │  logo192.png
│  │  logo512.png
│  │  manifest.json
│  │  robots.txt
│  └─img
└─src                               		// 源码文件夹
    │  App copy.js
    │  App.css
    │  App.js
    │  App.test.js
    │  index.css
    │  index.js
    │  reportWebVitals.js
    │  setupTests.js  
    ├─components                  // 一般组件文件夹
    │  ├─MyNavLink
    │  ├─ReplaceTabbar
    │  ├─Slideshow
    │  └─Tabbar
    ├─http
    ├─images
    ├─pages                     // 路由组件文件夹
    │  ├─Home
    │  ├─Index
    │  │  └─CommodityDetail
    │  ├─Login
    │  ├─Mart
    │  ├─Mine
    │  ├─Order
    │  │  ├─CurrentOrder
    │  │  ├─HistoricalOrder
    │  │  └─OrderItem
    │  └─Register
    │      └─RegistrationTerms
    └─redux
        │  store.js
        ├─actions
        │  │  index.js  
        │  ├─Login
        │  ├─Mine
        │  └─Register
        ├─constants
        ├─containers
        │  ├─Login
        │  ├─Mine
        │  └─Register
        └─reducers
                index.js
                login.js
                mine.js
                register.js
