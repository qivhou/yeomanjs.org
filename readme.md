# Yeomanjs.org

yeoman中文社区，由[Yeoman.io](https://github.com/yeoman/yeoman.io) fork而来,
并且对原有site做了中文化。

## 注意

如果你想要创建一个有关于Yeoman中文社区的问题，你找对地方了！

如果在浏览的过程中发现翻译有不妥的地方请在[yeoman-cn](https://github.com/qivhou/yeoman-cn/issues)中报告问题，如果你可以直接提pull request将问题修复，那是再好不过的了。

但是如果这个问题是关于Yeoman的源码的，请查看[yeoman/yeoman repository](https://github.com/yeoman/yeoman)。

## 新手上路

此站由[Jekyll](https://github.com/mojombo/jekyll/)搭建，Jekyll是一个Ruby语言环境的静态网页生成器。它也使用了[redcarpet](https://github.com/vmg/redcarpet) 来处理本站中所有用到的markdown文件。

安装 Jekyll 和 Redcarpet 的最好方式是通过 RubyGems：

```
gem install jekyll redcarpet
```

一旦Jekyll安装完毕，你只需要clone当前项目：

```
git clone --recursive git@github.com:qivhou/yeomanjs.org.git
```

然后到到达项目目录：

```
cd yeomanjs.org
```

如果你正在使用 Git 1.6.4 或者更早的版本，你将需要手动的初始化 submodules:

```
git submodule update --init
```

你现在应该已经有了本站源码的一份拷贝，它正在等待着你的修补。

## Jekyll 命令

Jekyll 在这个项目中被使用了三个基本的命令：

生成网站并且用一个server来运行它，你可以通过`http://localhost:4000`来访问它，运行：

```
jekyll server
```

只要你编辑和保存文件就重新生成网站，运行：

```
jekyll server --watch
```

生成一个静态版本的网站，这个版本用来上传到一个服务器（它将创建一个文件夹叫做_site）,运行：

```
jekyll build
```

## 注意
 - 如果你正在添加一个youtube的嵌入iframe，请把这个iframe封装在一个class为```video-container``` 的div中来使得本站可快速响应。


## 感谢


> 期待着您的加入！！！
