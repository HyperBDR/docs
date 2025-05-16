# 日常运维

## 日常检查

### **系统健康检查**

* **控制台状态**：登录 HyperBDR 运维管理平台，检查各个模块的运行状态、CPU/内存/存储等关键资源使用率是否正常。

![](https://tcnquu760t2x.feishu.cn/space/api/box/stream/download/asynccode/?code=NGZmMjY1ZWRiYmU5OWQwMDdmMWI1ZDVlNzBjZGViZmFfalJROUo5V3ozNVphM256UEkwbEZORjBwUWhabVpPTWVfVG9rZW46VlJXd2JnOVZZb3VlOUp4Q0ltOGNUWEpXbmliXzE3NDcyOTUyMjQ6MTc0NzI5ODgyNF9WNA)

* **备份任务列表**：查看所有备份任务执行情况，确认是否有失败或延迟过高的任务。

![](https://tcnquu760t2x.feishu.cn/space/api/box/stream/download/asynccode/?code=NDMxYjlmNTk1ZDliYjJkMjM5YWYyYzhkZDRiMDJlZDZfdHlSaTZpVFJtUTRWcFhWUEpzWkJEeUlGYjVDUk91YmpfVG9rZW46QnJzNmJVREI0b2lMald4bnQzcWNVQ3hHbjljXzE3NDcyOTUyMjQ6MTc0NzI5ODgyNF9WNA)

* **日志与告警**：通过日志管理模块日志平台检查是否存在异常告警、错误日志。

![](https://tcnquu760t2x.feishu.cn/space/api/box/stream/download/asynccode/?code=MzVhZTU3YzBiNzM2MDE4ZGRlMTQyZDI5YzU0N2E1ZWJfSk1kcjJKZkFYU0ZQUUpvaWpSOGo3eDdSYzFRSVJEVVlfVG9rZW46UE5aV2I2ZHNIb2FOS1R4cVZ3SmM1ckZDbndkXzE3NDcyOTUyMjQ6MTc0NzI5ODgyNF9WNA)

### **网络连通性**

* 确保源端（生产环境）与目标端（容灾环境或云平台）之间的网络连接稳定、带宽充足。

* 若使用 VPN、专线或 VPC Endpoint，需定期检查隧道状态是否正常。

![](https://tcnquu760t2x.feishu.cn/space/api/box/stream/download/asynccode/?code=OWQ2ZTJhODA0M2QyZjhmYTAxZjQxZjYxZTI4ZmExNjlfb3ZiSjZ5eGlucEpFdGNPOGZ0OXQ2MnVFUThVd2s1OUdfVG9rZW46WFNwMmJuMnJlb1VYd1p4QzdPU2NVZ0xvbmdjXzE3NDcyOTUyMjQ6MTc0NzI5ODgyNF9WNA)

#### 3.1.1.3 **云账户与授权**

* 定期验证云平台账户的有效性、密钥是否过期。

* 检查账户权限，避免过度授权或缺少关键权限导致备份/恢复失败。

![](https://tcnquu760t2x.feishu.cn/space/api/box/stream/download/asynccode/?code=YTIzOGY2NmY4MTVhZWE2NmQyZDEwNjM0MWU3MTczZDVfWGR1TVR4QmVUWVZ5bTl6U3ZTUU9UMTFqTWZPbGM4bWNfVG9rZW46WVIzdGJRYTdBb2ZrSHd4NDU0TmNFV0Fabm5jXzE3NDcyOTUyMjQ6MTc0NzI5ODgyNF9WNA)

## 资源监控与备份任务检查

### **资源监控**

* **存储空间**：查看对象存储、块存储、数据库存储的剩余容量。若空间不足，需及时扩容或清理历史快照。

![](https://tcnquu760t2x.feishu.cn/space/api/box/stream/download/asynccode/?code=N2Y4ODEyNGMwMzMxYWM3MzU1ZjNjNzk3ZTkyZWVjMzZfSkRpQ1FCbW9tcmdnWGtrY2dJbDNMYmUzaWc4WHRQV3lfVG9rZW46TEFsVGJOZlk3b3d6Yld4UW5qRmNwMWVsbjViXzE3NDcyOTUyMjQ6MTc0NzI5ODgyNF9WNA)

* **网络吞吐量**：关注备份高峰期的带宽使用，必要时进行带宽升级或错峰备份策略。

![](https://tcnquu760t2x.feishu.cn/space/api/box/stream/download/asynccode/?code=MGMwZTcxM2U2NzFlYmIzMTgzZTY5MzgzYTBiYmZjMDRfSXc0Y3A5VlNFTE9Vek04dGkzMWk5cUY5RUY2ZnZZSlpfVG9rZW46Q0dGTmJzMlNQb1dVbE94M09WR2NISWJwblVjXzE3NDcyOTUyMjQ6MTc0NzI5ODgyNF9WNA)

#### 3.1.2.2 **备份任务检查**

* **备份策略**：每周或每月审查一次备份策略（全量/增量），根据业务变化及时调整备份频率与保留周期。

![](https://tcnquu760t2x.feishu.cn/space/api/box/stream/download/asynccode/?code=MjI2NGNkNzU5N2E2ZjA3ZjE1OGMxZWU3MTk4NjdjYzZfYmxXYkFmWXVWWjRPZm1aOE9wdUdTS1ZKN0tKcHRPd1FfVG9rZW46V29yd2J6NW5Pb1l6RGV4WEhwMWNueXUzbmJiXzE3NDcyOTUyMjQ6MTc0NzI5ODgyNF9WNA)

* **数据一致性校验**：定期对备份数据进行校验或抽样恢复测试，确认数据完整可用。

![](https://tcnquu760t2x.feishu.cn/space/api/box/stream/download/asynccode/?code=MjMwZDFhZDRjOTU4ODcwNTE0YTQ2NGNiYzc3ZDA2OGFfYmladWpyZlFTYms5NTBINk5xM3c0OG5hdjlockJEUURfVG9rZW46V01vVGJMbzA5b3dmOTZ4UWs5MGN4NENOblBmXzE3NDcyOTUyMjQ6MTc0NzI5ODgyNF9WNA)

* **异常任务处理**：针对备份失败的任务，分析失败原因（网络、权限、存储空间等），及时修复并重新执行。

![](https://tcnquu760t2x.feishu.cn/space/api/box/stream/download/asynccode/?code=OWJmYTE2NWZkMTk4NjQxZDZjYjJkZmYwOWI3OGQyOGVfbTd0WWk5dG9VWWlrOTJIcHNhUFpHN1JhVkVYUlJManRfVG9rZW46QklZd2J6NmhLb3M0S1p4eDJhZ2NKamJObmhnXzE3NDcyOTUyMjQ6MTc0NzI5ODgyNF9WNA)

## 日志的导出

日志管理功能，可以在出现问题后，第一时间通过日志收集功能，收集服务组件的日志进一步分析定位问题。

* 控制台

* 源端同步代理

* Linux主机

* Windows主机

![](https://tcnquu760t2x.feishu.cn/space/api/box/stream/download/asynccode/?code=Y2YwZTJhZGZkNDMwNzAzYzUyNDk0NDA2MjZhMjdjODdfZHU2ZG1NTGhiOHpZaEZXWDQzZFVqbWxhNnpDVmFzVTJfVG9rZW46SkdPQmJNN2lMbzdRQUl4eEZoeGNKSnVxbnFlXzE3NDcyOTUyMjQ6MTc0NzI5ODgyNF9WNA)