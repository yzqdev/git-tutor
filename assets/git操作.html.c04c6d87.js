import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as l,b as n,d as e,e as s,a as c,r as o}from"./app.6b8cad02.js";const d={},p=n("h1",{id:"git\u6574\u4F53\u6D41\u7A0B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git\u6574\u4F53\u6D41\u7A0B","aria-hidden":"true"},"#"),s(" git\u6574\u4F53\u6D41\u7A0B")],-1),r={href:"https://backlog.com/git-tutorial/cn/",target:"_blank",rel:"noopener noreferrer"},u=s("https://backlog.com/git-tutorial/cn/"),m={href:"https://www.liaoxuefeng.com/wiki/896043488029600/900002180232448",target:"_blank",rel:"noopener noreferrer"},v=s("https://www.liaoxuefeng.com/wiki/896043488029600/900002180232448"),g=c(`<h2 id="\u6574\u4F53\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u6574\u4F53\u6D41\u7A0B" aria-hidden="true">#</a> \u6574\u4F53\u6D41\u7A0B</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u7A7A\u76EE\u5F55</span>
<span class="token function">git</span> init 
<span class="token function">git</span> remote <span class="token function">add</span> origin  <span class="token operator">&lt;</span>your_repo<span class="token operator">&gt;</span>
<span class="token comment"># \u6DFB\u52A0\u6587\u4EF6</span>
<span class="token function">git</span> <span class="token function">add</span> a.txt
<span class="token comment"># \u6DFB\u52A0commit</span>
<span class="token function">git</span> commit -m <span class="token string">&quot;\u6DFB\u52A0commit&quot;</span>

<span class="token comment"># \u4FEE\u6539\u5B8Ca.txt\u4E4B\u540E</span>
<span class="token function">git</span> <span class="token function">add</span> a.txt<span class="token operator">&amp;&amp;</span><span class="token function">git</span> <span class="token function">git</span> commit -m <span class="token string">&quot;\u4FEE\u6539a.txt&quot;</span>
<span class="token comment"># \u6216\u8005</span>
<span class="token function">git</span> commit -am <span class="token string">&quot;\u4FEE\u6539a.txt&quot;</span>
<span class="token comment"># \u63A8\u9001</span>
<span class="token function">git</span> push origin main

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>\u4F7F\u7528\u547D\u4EE4<code>git add &lt;file&gt;</code>\uFF0C\u6CE8\u610F\uFF0C\u53EF\u53CD\u590D\u591A\u6B21\u4F7F\u7528\uFF0C\u6DFB\u52A0\u591A\u4E2A\u6587\u4EF6\uFF1B</p></li><li><p>\u4F7F\u7528\u547D\u4EE4<code>git commit -m &lt;message&gt;</code>\uFF0C\u5B8C\u6210\u3002</p></li><li><p>\u8981\u968F\u65F6\u638C\u63E1\u5DE5\u4F5C\u533A\u7684\u72B6\u6001\uFF0C\u4F7F\u7528git status\u547D\u4EE4\u3002</p></li><li><p>\u5982\u679Cgit status\u544A\u8BC9\u4F60\u6709\u6587\u4EF6\u88AB\u4FEE\u6539\u8FC7\uFF0C\u7528<code>git diff &lt;your_file&gt;</code>\u53EF\u4EE5\u67E5\u770B\u4FEE\u6539\u5185\u5BB9</p></li><li><p>HEAD\u6307\u5411\u7684\u7248\u672C\u5C31\u662F\u5F53\u524D\u7248\u672C\uFF0C\u56E0\u6B64\uFF0CGit\u5141\u8BB8\u6211\u4EEC\u5728\u7248\u672C\u7684\u5386\u53F2\u4E4B\u95F4\u7A7F\u68AD\uFF0C\u4F7F\u7528\u547D\u4EE4git reset --hard commit_id\u3002</p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u8FD4\u56DE\u4E0A\u4E00\u4E2A\u7248\u672C</span>
<span class="token function">git</span> reset --hard HEAD^
<span class="token comment"># \u8FD4\u56DEcommitid\u4E3Ae475afc\u7684\u7248\u672C</span>
<span class="token function">git</span> reset --hard e475afc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7A7F\u68AD\u524D\uFF0C\u7528git log\u53EF\u4EE5\u67E5\u770B\u63D0\u4EA4\u5386\u53F2\uFF0C\u4EE5\u4FBF\u786E\u5B9A\u8981\u56DE\u9000\u5230\u54EA\u4E2A\u7248\u672C ,\u7528<code>--pretty=oneline</code>\u66F4\u597D\u770B\u4E00\u4E9B\u3002</li><li>\u8981\u91CD\u8FD4\u672A\u6765\uFF0C\u7528git reflog\u67E5\u770B\u547D\u4EE4\u5386\u53F2\uFF0C\u4EE5\u4FBF\u786E\u5B9A\u8981\u56DE\u5230\u672A\u6765\u7684\u54EA\u4E2A\u7248\u672C</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> log --pretty<span class="token operator">=</span>oneline
<span class="token comment">#\u4E0B\u9762\u662F\u8FD4\u56DE\u7684\u4FE1\u606F</span>
1094adb7b9b3807259d8cb349e7df1d4d6477073 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> append GPL
e475afc93c209a690c39c13a46716e8fa000c366 <span class="token function">add</span> distributed
eaadf4e385e865d25c48e7ca9c8395c3f7dfaef0 wrote a readme <span class="token function">file</span>



<span class="token function">git</span> reflog
e475afc HEAD@<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>: reset: moving to HEAD^
1094adb <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> HEAD@<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>: commit: append GPL
e475afc HEAD@<span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span>: commit: <span class="token function">add</span> distributed
eaadf4e HEAD@<span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span>: commit <span class="token punctuation">(</span>initial<span class="token punctuation">)</span>: wrote a readme <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5F53\u4F60\u6539\u4E71\u4E86\u5DE5\u4F5C\u533A\u67D0\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9\uFF0C\u60F3\u76F4\u63A5\u4E22\u5F03\u5DE5\u4F5C\u533A\u7684\u4FEE\u6539\u65F6\uFF0C\u7528\u547D\u4EE4<code>git restore &lt;file&gt;</code>\u3002</li><li>\u5F53\u4F60\u4E0D\u4F46\u6539\u4E71\u4E86\u5DE5\u4F5C\u533A\u67D0\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9\uFF0C\u8FD8\u6DFB\u52A0\u5230\u4E86\u6682\u5B58\u533A\u65F6\uFF0C\u60F3\u4E22\u5F03\u4FEE\u6539\uFF0C\u5206\u4E24\u6B65\uFF0C\u7B2C\u4E00\u6B65\u7528\u547D\u4EE4<code>git reset HEAD &lt;file&gt;</code>\uFF0C\u5C31\u56DE\u5230\u4E86\u573A\u666F1\uFF0C\u7B2C\u4E8C\u6B65\u6309\u573A\u666F1\u64CD\u4F5C\u3002</li><li>\u547D\u4EE4<code>git rm &lt;file&gt;</code>\u7528\u4E8E\u5220\u9664\u4E00\u4E2A\u6587\u4EF6</li></ul><p>\u200B</p><p>\u6CE8\u610F:git checkout\u4E0D\u63A8\u8350\u4F7F\u7528\u4E86,\u53EF\u4EE5\u7528git switch \u548Cgit restore</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u521B\u5EFA\u65B0\u5206\u652F
<span class="token function">git</span> switch -b dev

\u67E5\u770B\u5F53\u524D\u5206\u652F
<span class="token function">git</span> branch

\u5982\u4F55\u5408\u5E76\u5206\u652F
\u5728dev\u5206\u652F\u4E0A
<span class="token function">git</span> commit -am <span class="token string">&quot;modify a.txt&quot;</span>
<span class="token function">git</span> switch -c main
<span class="token function">git</span> merge dev
\u5C31\u628Adev\u5408\u5E76\u5230\u4E86main\u5206\u652F

\u5220\u9664\u5206\u652F

<span class="token function">git</span> branch -d dev

\u67E5\u770B\u5206\u652F\uFF1Agit branch
\u521B\u5EFA\u5206\u652F\uFF1Agit branch <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>
\u5207\u6362\u5206\u652F\uFF1Agit checkout <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>\u6216\u8005git switch <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>
\u521B\u5EFA+\u5207\u6362\u5206\u652F\uFF1Agit checkout -b <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>\u6216\u8005git switch -c <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>
\u5408\u5E76\u67D0\u5206\u652F\u5230\u5F53\u524D\u5206\u652F\uFF1Agit merge <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>
\u5220\u9664\u5206\u652F\uFF1Agit branch -d <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>
\u200B\`\`\`

<span class="token comment">## \u591A\u4EBA\u5408\u4F5C</span>

- \u67E5\u770B\u8FDC\u7A0B\u5E93\u4FE1\u606F\uFF0C\u4F7F\u7528git remote -v\uFF1B
- \u672C\u5730\u65B0\u5EFA\u7684\u5206\u652F\u5982\u679C\u4E0D\u63A8\u9001\u5230\u8FDC\u7A0B\uFF0C\u5BF9\u5176\u4ED6\u4EBA\u5C31\u662F\u4E0D\u53EF\u89C1\u7684\uFF1B
- \u4ECE\u672C\u5730\u63A8\u9001\u5206\u652F\uFF0C\u4F7F\u7528git push origin branch-name\uFF0C\u5982\u679C\u63A8\u9001\u5931\u8D25\uFF0C\u5148\u7528git pull\u6293\u53D6\u8FDC\u7A0B\u7684\u65B0\u63D0\u4EA4\uFF1B
- \u5728\u672C\u5730\u521B\u5EFA\u548C\u8FDC\u7A0B\u5206\u652F\u5BF9\u5E94\u7684\u5206\u652F\uFF0C\u4F7F\u7528git switch -c branch-name origin/branch-name\uFF0C\u672C\u5730\u548C\u8FDC\u7A0B\u5206\u652F\u7684\u540D\u79F0\u6700\u597D\u4E00\u81F4\uFF1B
- \u5EFA\u7ACB\u672C\u5730\u5206\u652F\u548C\u8FDC\u7A0B\u5206\u652F\u7684\u5173\u8054\uFF0C\u4F7F\u7528git branch --set-upstream branch-name origin/branch-name\uFF1B
- \u4ECE\u8FDC\u7A0B\u6293\u53D6\u5206\u652F\uFF0C\u4F7F\u7528git pull\uFF0C\u5982\u679C\u6709\u51B2\u7A81\uFF0C\u8981\u5148\u5904\u7406\u51B2\u7A81\u3002

\u200B

<span class="token comment">## tag\u7BA1\u7406</span>

- \u547D\u4EE4git push origin <span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span>\u53EF\u4EE5\u63A8\u9001\u4E00\u4E2A\u672C\u5730\u6807\u7B7E\uFF1B
- \u547D\u4EE4git push origin --tags\u53EF\u4EE5\u63A8\u9001\u5168\u90E8\u672A\u63A8\u9001\u8FC7\u7684\u672C\u5730\u6807\u7B7E\uFF1B
- \u547D\u4EE4git tag -d <span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span>\u53EF\u4EE5\u5220\u9664\u4E00\u4E2A\u672C\u5730\u6807\u7B7E\uFF1B
- \u547D\u4EE4git push origin :refs/tags/<span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span>\u53EF\u4EE5\u5220\u9664\u4E00\u4E2A\u8FDC\u7A0B\u6807\u7B7E\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function b(k,h){const a=o("ExternalLinkIcon");return t(),l("div",null,[p,n("p",null,[n("a",r,[u,e(a)]),n("a",m,[v,e(a)])]),g])}var x=i(d,[["render",b],["__file","git\u64CD\u4F5C.html.vue"]]);export{x as default};
