# git教程

**git submodule如何使用?**

```powershell
在clone的时候
git clone --recursive https://github.com/halo-dev/halo

//第一步，初始化
git init 

//第二步，拉取，后面推荐使用ssh地址
git submodule add （+地址）------
第三步拉取所有的
git submodule update --init --recursive    下拉子模块
```

## 相关操作

```shell
# 更新子模块
git submodule update
```

**如果实在是不小心上传了.idea文件**
**1.在你的项目本地仓库(也就是你代码拉取下来的位置)右击选择git bash here**
**2.然后按照顺序输入命令**

```bash
git rm -r --cached .idea
git commit -m"提交信息"
　　git push
```

**这样你就可以将你上传的库上的.idea文件删除了（不光.idea可以这么删除，其他文件也可以这样删除）**
**​**

**git常用的术语**

- type: commit 的类型
- feat: 新特性
- fix: 修改问题
- refactor: 代码重构
- docs: 文档修改
- style: 代码格式修改, 注意不是 css 修改
- test: 测试用例修改
- chore: 其他修改, 比如构建流程, 依赖管理.
- scope: commit 影响的范围, 比如: route, component, utils, build...
- subject: commit 的概述
- body: commit 具体修改内容, 可以分为多行
- footer: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.
