# learning-shipit


* 配置 shipitfile 文件中的 servers

* 和 servers 配置信任关系(可以通过 ssh-copy-id)

* 全局安装 shipit

```
  npm i shipit-cli -g
```

*  npm install 安装依赖

*  运行部署命令

```
shipit production deploy   生产环境部署
shipit development deploy  测试环境部署
shipit production rollback 生产环节回滚
shipit development rollback  测试环境回滚
```
