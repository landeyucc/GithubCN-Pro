# GithubCN-Pro

这是一款Github网页版的中文汉化的浏览器插件。可以对其github网页版在不使用机翻（主要翻译出错了。那就很尴尬了）的情况下稳定加载相对应的语言。

## 声明与优化

这是基于原作者 [JQiue](https://github.com/JQiue) 制作的项目 [GithubCN](https://github.com/JQiue/githubCN) 进行修改的，由于原作者已不再维护此项目，导致许多内容无法得到更新。

个人在无意中发现此项目，并决定对其优化并维护，在测试的过程中我整理了原译文的数组内容进行分区以便于维护，还将加载方式由同步加载修改为异步加载译文，否则在大量的译文同步加载会造成浏览器线程堵塞（即页面无响应）。

翻译虽说是一件非常简单的事情，但不可否认的是大量的数据与专有名词的翻译的准确性是机翻无可替代的，还是需要人为的进行维护以提升工作效率。

## 安装与使用
以下是原项目的安装地址，待此项目优化完成后也会提供安装方式，敬请期待。

支持的浏览器|使用方式
---|---
Microsoft Edge|[Edge 应用商店](<https://microsoftedge.microsoft.com/addons/detail/githubcn/onlodfoebaobhmlhgcbddjngjbkdbfaj>)
Google Chrome|下载源代码拖放至扩展页

## 如何补充翻译词条？

所有的翻译内容都在在`src/js/content.js`中

```js
const allData = [
  [`English`, `英文`],
]
```
