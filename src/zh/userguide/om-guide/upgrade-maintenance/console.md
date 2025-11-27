# 控制台

控制台支持在线升级，过程平滑，配置文件和数据保留，适用于日常版本维护、功能增强及问题修复，确保系统持续稳定运行。

## 升级准备

### 整体升级

在开始操作前，请务必联系项目负责人或直接访问 OnePro 线上docs官网获取最新安装包，以完成后续升级。
[点击获取安装包](../../../userguide/installation/quick-installation.md#_2-获取安装包)

* 将安装包上传至服务器

* 解压至指定目录，例如：

```plain&#x20;text
tar zxvf <更新包>.tar.gz -C /更新包解压路径
```
### 单个模块升级

开始之前请联系项目负责人获取最新模块包以完成后续升级操作。

* 将安装包上传至服务器

* 创建更新包目录

```plain&#x20;text
mkdir -p /root/upgrade_$(date +%Y%m%d)
```
* 上传更新包到新创建目录下


## 执行升级

### 整体升级

* 执行升级命令，系统将自动加载更新内容至运行目录 `/opt/installer/production/venvs`：

```plain&#x20;text
cd /opt/installer/production/scripts
./hmctl upgrade /更新包解压路径/installer/venvs
```

### 单个模块升级

* 执行升级命令，系统将自动加载更新内容至运行目录 `/opt/installer/production/venvs`：

```plain&#x20;text
cd /opt/installer/production/scripts
./hmctl upgrade /root/upgrade_$(date +%Y%m%d)/
```