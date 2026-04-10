# OEM产品LOGO定制化

本文档主旨，是指导客户根据万博提供的标准安装包，自定义成含有自己LOGO的安装包。

## 上传标准安装包到“迁移/容灾“工具宿主机，并解压

创建一个目录OEM\_self

```plain&#x20;text
mkdir /root/OEM_self
cd /root/OEM_self
```

然后把安装包上传到/root/OEM\_self

![](./images/customizationofoemproductlogo-uploadthestandardinstallationpackagetothe_migration_disasterrecovery_toolhostanddecompress-1.png)

解压安装包：

```plain&#x20;text
tar zxvf HyperBDR_release_v5.4.0_20240430-20240511-3091.tar.gz
```

得到installer目录。

## 隐藏登录页面的LOGO图标以及客服图标

### 容灾主页面配置

```plain&#x20;text
cd /root/OEM_self/installer/OEM/newmuse
vi /root/OEM_self/installer/OEM/newmuse/newmuse.json   #输入下列内容(只是示例)
```
```json
{
"oem": true,
"title": "MyDR",
"openOnlineService": false,
"loginPageLogo": false,
"loginPageBanner": false
}
```

```plain text
代码示意：
{
"oem": true,  --> 开启oem功能
"title": "MyDR", --> 浏览器标签页文字
"openOnlineService": false, --> 去掉页面的客服
"loginPageLogo": false, --> 去掉登录主页面右上角的OnePro的LOGO
"loginPageBanner": false --> 去掉登录主页面中间的HyperBDR场景LOGO
}
```

* 浏览器标签页文字

![](./images/customizationofoemproductlogo-hidetheloginpage_slogoiconandcustomerserviceicon-1.png)

* 登录主页面右上角的OnePro LOGO

![](./images/customizationofoemproductlogo-hidetheloginpage_slogoiconandcustomerserviceicon-2.png)

* 登录主页面中间的HyperBDR场景LOGO

![](./images/customizationofoemproductlogo-hidetheloginpage_slogoiconandcustomerserviceicon-3.png)

### 迁移主页面配置

```plain&#x20;text
vi /root/OEM_self/installer/OEM/newmuse-motion/newmuse.json  #输入下列内容(只是示例)
```
```json
{
"oem": true,
"title": "MyMigration",
"openOnlineService": false,
"loginPageLogo": false,
"loginPageBanner": false
}
```

```plain test
代码示意：
{
"oem": true,  --> 开启oem功能
"title": "MyMigration", --> 浏览器标签页文字
"openOnlineService": false, --> 去掉页面的客服
"loginPageLogo": false, --> 去掉登录主页面右上角的OnePro的LOGO
"loginPageBanner": false --> 去掉登录主页面中间的HyperBDR场景LOGO
}
```

* 浏览器标签页文字

![](./images/customizationofoemproductlogo-hidetheloginpage_slogoiconandcustomerserviceicon-4.png)

* 登录主页面右上角的OnePro LOGO

![](./images/customizationofoemproductlogo-hidetheloginpage_slogoiconandcustomerserviceicon-5.png)

* 登录主页面中间的HyperBDR场景LOGO

![](./images/customizationofoemproductlogo-hidetheloginpage_slogoiconandcustomerserviceicon-6.png)

改好之后，安装完成的登录页面显示效果如下：

* 容灾主页面

![](./images/customizationofoemproductlogo-hidetheloginpage_slogoiconandcustomerserviceicon-7.png)

* 迁移主页面

![](./images/customizationofoemproductlogo-hidetheloginpage_slogoiconandcustomerserviceicon-8.png)

## 替换服务商自己的LOGO

```plain&#x20;text
cd /root/OEM_self/installer/OEM/newmuse/static/configImg
ll  #展示如下
```

![](./images/customizationofoemproductlogo-replacetheserviceprovider_sownlogo-1.png)

把准备好的图片文件上传到这个目标，覆盖同名的文件即可（如下面4个文件）。

### 迁移Logo替换说明

* favicon-migration.png

浏览器标签页icon图标显示，**尺寸：32 × 32，类型：png**

![](./images/customizationofoemproductlogo-replacetheserviceprovider_sownlogo-2.png)

* logo-migration.png

登录迁移平台之后，左上角显示LOGO，**尺寸：184 × 56，类型：png**

![](./images/customizationofoemproductlogo-replacetheserviceprovider_sownlogo-3.png)

### 容灾Logo替换说明

* favicon-dr.png

浏览器标签页icon图标显示，**尺寸：32 × 32，类型：png**

![](./images/customizationofoemproductlogo-replacetheserviceprovider_sownlogo-4.png)

* logo-dr.png

登录迁移平台之后，左上角显示LOGO，**尺寸：184 × 56，类型：png**

![](./images/customizationofoemproductlogo-replacetheserviceprovider_sownlogo-5.png)

![](./images/customizationofoemproductlogo-replacetheserviceprovider_sownlogo-6.png)

## 处理浏览器标签刷新时显示
宗旨是解压之后，修改文件内容，然后再重新压缩，具体步骤如下：
```plain&#x20;text
cd  /root/OEM_self/installer/venvs/
tar zxvf newmuse-venv-7.3.2.dev10.tar.gz   # 注意使用当前目录里的文件名，此处只是示例。解压之后得到newmuse-venv目录。
sed -i s/HyperBDR/<标签名称>/g  ./newmuse-venv/index.html   #注意：<标签名称>替换成服务商的工具名称，比如 Migrater
rm -f ./newmuse-venv-7.3.2.dev10.tar.gz
tar zcvf newmuse-venv-7.3.2.dev10.tar.gz ./newmuse-venv 
```
处理完成之后，继续执行安装步骤。

## 自定义OEM LOGO 安装包
### 由客户安装
若MSP伙伴需要制作独有的OEM LOGO 安装包，客户自己拿到后就可以直接安装部署，则需要把处理好的OEM包制作成压缩包，发给客户。
制作压缩包：
```plain&#x20;text
cd /root/OEM_self
tar zcvf Migrater_release_7.3.0-tar.gz ./installer   #压缩包名称自己取名即可
```
> 生成之后的软件包，可以直接上传并提供给客户进行下载执行后续的安装。

客户只需执行如下安装命令(假设客户把安装包放在/root/package目录)：
```plain&#x20;text
cd /root/package/
tar zxvf Migrater_release_7.3.0-tar.gz 
bash ./installer/install.sh -i <服务IP>        # 如果不加“-i <服务IP>”，则会使用主机的第一个IP地址
```
等待安装完成。

### 由MSP伙伴协助客户安装
若MSP伙伴协助客户安装，则在处理好OEM之后，直接执行如下命令即可：
```plain&#x20;text
bash /root/OEM_self/installer/install.sh -i <服务IP>  # 如果不加“-i <服务IP>”，则会使用主机的第一个IP地址
```
等待安装完成。

## 浏览器访问容灾/迁移工具
容灾工具访问：**https://<服务IP>:10443**

迁移工具访问：**https://<服务IP>:20443**