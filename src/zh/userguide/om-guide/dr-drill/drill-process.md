
# 演练流程

## **触发灾难场景**

* 人工或脚本模拟故障，例如停止源端服务器、电源中断、网络隔离等。

* 确认监控告警正常触发，HyperBDR 控制台是否实时显示故障信息。

## **启动容灾演练流程**

* 在 HyperBDR 控制台选择对应的容灾主机，点击“容灾演练”，选择恢复时间点，一键恢复容灾主机到目标环境。

![](./image/drillprocess-startdisasterrecoverydrillprocess-1.png)

![](./image/drillprocess-startdisasterrecoverydrillprocess-2.png)

系统会根据预先配置的资源编排（计算、存储、网络等）自动化创建或启动目标端实例，等待启动完成，即可登录到目标平台进行验证配置及业务演练。

![](./image/drillprocess-startdisasterrecoverydrillprocess-3.png)

监控恢复进度，确保在预期 RTO 内完成关键业务的演练。

## **业务验证**

* 恢复完成后，检查应用服务、数据库、负载均衡等是否正常工作。

* 执行数据一致性校验，确认业务功能完整可用。