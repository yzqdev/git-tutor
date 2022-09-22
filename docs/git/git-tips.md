# git-tips

## git push force如何pull

```powershell
git fetch origin
git checkout -b tmp
git branch -D main
git checout -b main origin/main
git branch -D tmp
```

## 设置自动跟踪remote

```powershell

git config --global --add --bool push.autoSetupRemote true

```

## 如何使用git命令回滚到指定版本以及返回到新版本

:::tip
1.git branch:查看当前分支，如果在后面加-a则表示查看所有分支。

2.git log:查看提交历史，在commit id这一项中可以看到提交的历史版本id。

3.git reflog:查看每一次命令的记录

4.git reset --soft:回退到某个版本，只回退了commit的信息。

5.git reset --mixed:为默认方式，不带任何参数的git reset，即时这种方式，它回退到某个版本，只保留源码，回退commit和index信息。

6.git reset --hard:彻底回退到某个版本，本地的源码也会变为上一个版本的内容，撤销的commit中所包含的更改被冲掉。
:::

### 1.回滚到指定版本

首先进入项目根目录下，使用git log 命令，找到需要返回的commit id 号，使用`git reset --hard` 后跟你需要的commit id号，这样你就回到了指定的版本，注意`git reset --hard`与`git reset  --soft`的区别：

`git reset –-soft`：回退到某个版本，只回退了commit的信息，不会恢复到index file一级。通常使用在当你git commit -m "注释"提交了你修改的内容，但内容有点问题想撤销，又还要提交，就使用soft，相当于软着路；

git reset -–hard：彻底回退到某个版本，本地的源码也会变为上一个版本的内容，撤销的commit中所包含的更改被冲掉，相当于硬着路，回滚最彻底。

### 2.返回到最新版本

当你发现需要回滚到最新版本时，可以采用以下指今步骤

`git log`：查看历史提交

`git reflog`：查看每一次命令记录
通过git reflog命令查看到之后，我们再利用 git reset 来返回到相应的版本即可，HEAD前面的一串字符为我们简写的ID，所以最后输入

`git reset --hard ca936c3`即回滚到了最新的版本号了

## amend操作

:::warn
但是不能是已经 push 的提交
:::
修改文件后

git add file

用法

git commit --amend

合并缓存的修改和上一次的提交，用新的快照替换上一个提交。缓存区没有文件时运行这个命令可以用来编辑上次提交的提交信息，而不会更改快照。

修改提交信息

```shell
git commit --amend -m 'amend message'
```

//修改提交信息操作 force

```shell
git push --force-with-lease origin main
```

### 如果只是添加了一些文件,不想改commit

适用场景：上一次提交遗漏了一些文件，需要补交，但不想多一次commit

```shell
git commit -m 'initial commit'
git add forgotten_file
git commit --amend --no-edit
```

该操作会修改上一次提交的内容，但不会要求你编辑提交信息，仍保持上一次commit的message
