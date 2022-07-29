import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as l,b as n,d as a,e,a as c,r as d}from"./app.6b8cad02.js";const r={},o=n("h1",{id:"git-\u6280\u5DE7",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git-\u6280\u5DE7","aria-hidden":"true"},"#"),e(" git \u6280\u5DE7")],-1),v=e("\u8F6F\u4EF6 tortoise git "),m={href:"https://www.gitkraken.com/download/windows64",target:"_blank",rel:"noopener noreferrer"},u=e("https://www.gitkraken.com/download/windows64"),p=e(" github desktop \u200B"),b={href:"https://github.com/tj/git-extras/",target:"_blank",rel:"noopener noreferrer"},h=e("https://github.com/tj/git-extras/"),g=c(`<h2 id="\u6E05\u7A7A\u6240\u6709commit\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#\u6E05\u7A7A\u6240\u6709commit\u8BB0\u5F55" aria-hidden="true">#</a> \u6E05\u7A7A\u6240\u6709commit\u8BB0\u5F55</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1.Checkout</span>

<span class="token function">git</span> checkout --orphan latest_branch<span class="token comment"># (\u4E0D\u80FD\u7528switch\u4F1A\u4EC0\u4E48\u6587\u4EF6\u90FD\u6CA1\u6709)</span>

<span class="token comment"># 2. Add all the files</span>

<span class="token function">git</span> <span class="token function">add</span> -A

<span class="token comment"># 3. Commit the changes</span>

<span class="token function">git</span> commit -am <span class="token string">&quot;commit message&quot;</span>


<span class="token comment"># 4. Delete the branch</span>

<span class="token function">git</span> branch -D main

<span class="token comment"># 5.Rename the current branch to master</span>

<span class="token function">git</span> branch -m main

<span class="token comment"># 6.Finally, force update your repository</span>

<span class="token function">git</span> push -f origin main

<span class="token comment"># 7.\u6E05\u7406gc</span>
<span class="token function">git</span> gc --aggressive --prune<span class="token operator">=</span>all 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git\u5206\u652F\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#git\u5206\u652F\u5408\u5E76" aria-hidden="true">#</a> git\u5206\u652F\u5408\u5E76</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5F53\u524D\u662Fdev\u5206\u652F,\u8981\u5408\u5E76\u5230main\u5206\u652F,push\u7136\u540E\u56DE\u5230dev\u5206\u652F</span>
<span class="token function">git</span> switch main

<span class="token function">git</span> merge dev

<span class="token function">git</span> push origin dev

<span class="token function">git</span> switch dev

<span class="token comment"># \u66F4\u7B80\u5355\u7684\u65B9\u6CD5,\u4F7F\u7528rebase(\u5F53\u524D\u662Fdev\u5206\u652F)</span>
<span class="token function">git</span> rebase origin main

<span class="token function">git</span> push origin main <span class="token comment">#\u6B64\u65F6\u8FD8\u5728dev\u5206\u652F</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git\u5220\u9664\u8FDC\u7A0B" tabindex="-1"><a class="header-anchor" href="#git\u5220\u9664\u8FDC\u7A0B" aria-hidden="true">#</a> git\u5220\u9664\u8FDC\u7A0B</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push origin --delete main

<span class="token comment"># \u5220\u9664\u672C\u5730\u7F13\u5B58</span>
<span class="token function">git</span> <span class="token function">rm</span> --cached <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-\u89E3\u9664fork\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#git-\u89E3\u9664fork\u5173\u7CFB" aria-hidden="true">#</a> git \u89E3\u9664fork\u5173\u7CFB</h2><p>\u5B9E\u9645\u505A\u8D77\u6765\u5374\u610F\u5916\u7684\u7B80\u5355\u3002 \u9996\u5148\uFF0C\u628A\u5220\u53BB\u6240\u6709\u4E0E\u672C\u5730\u4ED3\u5E93\u8FDE\u63A5\u7684\u8FDC\u7A0B\u4ED3\u5E93</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>git remote remove origin
git remote remove upstream 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\uFF0C\u628A GitHub \u4E0A\u81EA\u5DF1\u7684\u8FDC\u7A0B\u4ED3\u5E93\u7ED9\u5220\u4E86\u3002 \u6700\u540E\uFF0C\u5728 GitHub \u4E0A\u91CD\u65B0\u5EFA\u7ACB\u540C\u540D\u4ED3\u5E93\uFF0C\u7136\u540E\u628A\u672C\u5730\u4ED3\u5E93\u5173\u8054\u4E0A\u53BB\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>git remote add origin <span class="token generics"><span class="token punctuation">&lt;</span>your repo<span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E8E\u662F\u5C31\u5927\u529F\u544A\u6210\u4E86</p>`,12);function k(f,_){const s=d("ExternalLinkIcon");return t(),l("div",null,[o,n("p",null,[v,n("a",m,[u,a(s)]),p]),n("p",null,[n("a",b,[h,a(s)])]),g])}var j=i(r,[["render",k],["__file","git-snippets.html.vue"]]);export{j as default};
