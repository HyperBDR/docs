## 关于本项目

本项目主要用于构建HyperBDR产品官方技术文档。

本项目采用vuepress技术构建，有关vuepress的详细信息请参考[vuepress官方文档](https://vuepress.vuejs.org/guide/)。

本项目已经配置了自动构建任务，文档更新和上传后会自动部署在华为云新加坡区域，方便海外客户访问。

## 如何更新文档

## 目录结构

```
.
├── .github -> Github流程配置目录
│   └── workflows
├── README.md
├── src -> 文档及配置目录
│   ├── index.md -> 文档首页
│   ├── solutions -> 解决方案
│   ├── .vuepress -> 配置文件目录，用于配置布局等
│   └── zh -> 中文文档预留目录
├── tools -> 工具目录
│   └── convert_yuque_markdown.py -> 语雀Markdown辅助转换工具，用于格式化语雀下载的Markdown文件，并且将图片下载到本地目录中
└── yarn.lock
```

## 如何添加英文文档？

目前主要用于产品海外售卖环境中的文档构建，目前暂时只规划了solutions用于存放与售前、实施运维阶段相关的文档，用于辅助Excel中的流程使用。

### 基本结构

```
src
├── index.md -> 文档首页
├── solutions -> 解决方案
│   ├── hyperbdr-vmware-investigation.md -> 解决方案文档之一
│   ├── images -> 用于存放解决方案文档相关图片资源
│   │   ├── ...
│   └── README.md -> 解决方案首页
└── zh -> 中文文档
```

### 如何在解决方案中添加一篇新的文档？

#### 编写文档

目前我们的文档来源主要有两处：

* 语雀上维护的
* 自行编写

从语雀下载的文档可以使用本项目中的convert_yuque_markdown.py进行处理，后续有详细的使用方法介绍。

建议的文档结构：

```
一级标题(#) -> 该部分自动显示在左边侧边栏中

二级辩题(##) -> 该部分也会作为侧边栏显示

...
```

注意： 每一行之间需要有空格，转换语雀文档时会自动进行处理。

#### 添加文档

在solutions添加一篇新的markdown文档，例如：how-to-modify-proxy-network-conf.md。添加后的结构为：

```
src
├── index.md -> 文档首页
├── solutions -> 解决方案
│   ├── hyperbdr-vmware-investigation.md -> 解决方案文档之一
│   ├── how-to-modify-proxy-network-conf.md-> 新增加的一篇文档
│   ├── images -> 用于存放解决方案文档相关图片资源
│   │   ├── ...
│   └── README.md -> 解决方案首页
└── zh -> 中文文档
```

注意：

* 文档的命名规范为全部小写，单词之间使用-进行连接，例如：how-to-modify-proxy-network-conf.md
* 文档中引用的图片命名为文档名称-序号，例如：how-to-modify-proxy-network-conf-1.png, how-to-modify-proxy-network-conf-2.png

#### 在侧边栏显示该文件

修改src/.vuepress/config.js中的sidebar段落。

```
    sidebar: {
      '/solutions/': [
        {
          title: 'Solutions',
          collapsable: false,
          children: [
            /*'',*/
            'hyperbdr-vmware-investigation',
            'how-to-modify-proxy-network-conf',
          ]
        }
      ],
    }
```

注意：目前首页的README.md并没有显示，这里进行了注释了/*'',*/

## 如何添加中文文档？

TODO：目前中文文档只规划了路径，还没有进行文档结构的梳理，可以考虑将现有语雀文档结构平移至此目录中。

## 附录

### 语雀格式化转换工具

从语雀下载的Markdown格式文档无法直接放入本项目中，需要进行转换后才能够使用，所以本项目中提供了tools/convert_yuque_markdown.py用于语雀文档自动转换和图片自动下载。

建议将语雀下载好的文档按照上面的规划完成命名后，放入指定的目录中，例如solutions中。这样执行后的脚本会自动的将图片下载到images路径。

转换完成的文档会自动添加converted，确认无误后，删除原有文档，将converted后缀去掉完成文档修改。

```
tools/convert_yuque_markdown.py </path/to/your/markdown>
```
