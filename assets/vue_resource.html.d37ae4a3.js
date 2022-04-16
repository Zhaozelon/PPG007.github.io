import{_ as e,r as t,o,c as p,a as s,d as c,F as r,e as u,b as n}from"./app.5a40dfb9.js";const l={},i=u(`<h1 id="vue-resource" tabindex="-1"><a class="header-anchor" href="#vue-resource" aria-hidden="true">#</a> vue-resource</h1><h2 id="\u5B89\u88C5-vue-resource" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-vue-resource" aria-hidden="true">#</a> \u5B89\u88C5 vue-resource</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vue-resource
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u4F7F\u7528-vue-resource" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-vue-resource" aria-hidden="true">#</a> \u4F7F\u7528 vue-resource</h2><p>\u6CE8\u518C\u63D2\u4EF6\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>vueResource<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u53D1\u8D77\u8BF7\u6C42\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:90/api/getAllStudents&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
          <span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,8),d=n("vue-resource \u4E0E "),k={href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"},h=n("Axios"),b=n(" \u4F7F\u7528\u65B9\u6CD5\u57FA\u672C\u4E00\u81F4\uFF0C\u53D1\u9001\u8BF7\u6C42\u8981\u901A\u8FC7 "),m=s("code",null,"$http",-1),v=n(" \u5BF9\u8C61\u5B8C\u6210\uFF0C\u4F46\u662F vue-resource \u7EF4\u62A4\u9891\u7387\u4F4E\uFF0C\u63A8\u8350\u4F7F\u7528 Axios\u3002");function _(g,f){const a=t("ExternalLinkIcon");return o(),p(r,null,[i,s("p",null,[d,s("a",k,[h,c(a)]),b,m,v])],64)}var j=e(l,[["render",_]]);export{j as default};
