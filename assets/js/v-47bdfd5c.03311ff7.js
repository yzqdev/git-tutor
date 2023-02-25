"use strict";(self.webpackChunkgit_tutor=self.webpackChunkgit_tutor||[]).push([[4315],{8958:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-47bdfd5c","path":"/git/gitLFS.html","title":"Git Large File Storage","lang":"zh-CN","frontmatter":{"index":15,"icon":"Github","category":["Git"],"tag":["Git","软件"]},"headers":[{"level":2,"title":"Getting Started","slug":"getting-started","link":"#getting-started","children":[]}],"git":{"createdTime":1661668844000,"updatedTime":1661668844000,"contributors":[{"name":"yzqdev","email":"yzqdev@outlook.com","commits":1}]},"readingTime":{"minutes":0.43,"words":130},"filePathRelative":"git/gitLFS.md","localizedDate":"2022年8月28日","excerpt":""}')},4242:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r});var a=i(6808);const s=[(0,a.uE)('<h1 id="git-large-file-storage" tabindex="-1"><a class="header-anchor" href="#git-large-file-storage" aria-hidden="true">#</a> Git Large File Storage</h1><p>Git Large File Storage (LFS) replaces large files such as audio samples, videos, datasets, and graphics with text pointers inside Git, while storing the file contents on a remote server like GitHub.com or GitHub Enterprise.</p><h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h2><ol><li><p>Download and install the Git command-line extension. Once downloaded and installed, set up Git LFS and its respective hooks by running:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> lfs <span class="token function">install</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You’ll need to run this in your repository directory, once per repository.</p></li><li><p>Select the file types you’d like Git LFS to manage (or directly edit your .gitattributes). You can configure file extensions at anytime.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> lfs track <span class="token string">&quot;*.psd&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Make sure to track <code>.gitattributes</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> .gitattributes\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>',4)],n={},r=(0,i(8580).Z)(n,[["render",function(e,t){return(0,a.wg)(),(0,a.iD)("div",null,s)}]])},8580:(e,t)=>{t.Z=(e,t)=>{const i=e.__vccOpts||e;for(const[e,a]of t)i[e]=a;return i}}}]);