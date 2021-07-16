# el_doc

## 项目介绍

这是一款专门为开发者快速成形的文档系统，部署容易，纯静态文件，响应速度快，非常简单易于部署。使用者只需要面向目录状态树编写对应文档或博客，而不用去配置复杂的侧滑栏，顶部配置，系统会自动根据 Docs 目录下的目录状态树的文档树自动生成侧滑栏导航。支持原生 html,makdown,el 语言编写文档。并且提供版本文档的管理，便于项目文档随程序发布。

## 特性

- 简单易部署
- 支持多种文档语言（原生 html,makdown,el)
- 纯静态文件，响应速度快
- 面向目录树文档编写，侧滑栏，顶部导航自动生成
- 模块化开发，拓展性更强

## 使用

- 克隆本项目

```js
  git clone url地址
```

- 安装依赖

```js
npm install
```

- 启动服务

```js
npm run serve
```

- 打包部署

```js
npm run build
```

## 文档编写

- 由于采用面向目录文档树的编写方式，系统自动截取加载文件或目录名生成侧滑栏导航菜单。因此开发者只需要面向对应目录下或文件编写响应文档即可。
- 工作目录：Docs （如需要自定定义工作目录，请在 src 目录下 el.config.js 文件中配置
