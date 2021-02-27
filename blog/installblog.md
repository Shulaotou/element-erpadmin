---
slug: installblog
title: 安装Docusaurus个人博客系统
author: 宇宙第一帅老舒
data: 2021年2月26日
author_title: Docusaurus Core Team
author_url: https://github.com/shulaotou
author_image_url: https://avatars.githubusercontent.com/u/46835713?s=400&u=f405dcb615802cf2e0c8d4855fd15f65886380fb&v=4
tags: [前端]
---

![douc](https://www.docusaurus.cn/assets/images/docusaurus-slash-first-birthday-71e4f41412bd9df66b30df131ce8dc67.svg)

:::note

在这之前没有打算做自己博客系统的，像国内CSDN这些平台都足够了，但是无意间看了几个大佬的视频又想建个自己的Blog。

今天分享一下使用FB开源的[Docusaurus](https://www.docusaurus.cn)的Node项目创建一个自己的博客系统

:::

开始吧！Lt's Go

<!--truncate-->

## 准备步骤

### 首先安装Node & npm 工具

NodeJS安装包及源码下载地址为：https://nodejs.org/en/download/

windows按照下载好的包，直接安装就可以

Mac可以用[brewhome](https://brew.sh)安装

``` shell
brew install node
```

Linux安装下面安装步骤

```shell
sudo git clone https://github.com/nodejs/node.git
sudo chmod -R 755 node
cd node 
sudo ./configure
sudo make 
sudo make install
```

这里是使用Ubuntu源码安装

也可以使用apt-get安装

```shell
sudo apt-get install nodejs
sudo apt-get install npm
```



## 使用npm安装Docusaurus

首先我们去到Docusaurus中文官网里面有文档

> 任何项目看帮助文档是最稳的解决方式

OK开始吧

``` shell
npx @docusaurus/init@latest init [项目名] [模版名]
```

例如：

``` shell
npx @docusaurus/init@latest init my-website classic
```

### 启动项目

上面安装好后

``` shell
cd my-website
npm start
```

