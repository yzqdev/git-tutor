# wsl访问github

## wsl关闭autogen hosts

```bash
# 打开/etc/hosts
# This file was automatically generated by WSL. To stop automatic generation of this file, add the following entry to /etc/wsl.conf:
# [network]
# generateHosts = false
```

添加`/etc/wsl.conf`然后重启电脑(重启wsl)
设置hosts写入权限

```bash

sudo chmod 777 /etc/hosts
```

在~目录添加一个`github.sh`

```bash
sed -i "/# GitHub520 Host Start/Q" /etc/hosts && curl https://raw.hellogithub.com/hosts >> /etc/hosts
```

最后设置cron命令

```bash
crontab -e

# 写入文件
#(每1小时执行一次github.sh)
0 */1 * * *  ~/github.sh

```