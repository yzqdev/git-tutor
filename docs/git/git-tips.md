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
