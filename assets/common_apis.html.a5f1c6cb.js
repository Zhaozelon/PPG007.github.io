import{_ as p,r as e,o as t,c as o,a as n,d as c,F as r,e as s,b as l}from"./app.5a40dfb9.js";const u={},i=s(`<h1 id="\u5E38\u7528-api" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528-api" aria-hidden="true">#</a> \u5E38\u7528 API</h1><h2 id="axios-url-config" tabindex="-1"><a class="header-anchor" href="#axios-url-config" aria-hidden="true">#</a> axios(url[, config])</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> param<span class="token operator">=</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token string">&#39;PPG&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span><span class="token number">21</span><span class="token punctuation">,</span>
    sex<span class="token operator">:</span><span class="token string">&#39;male&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> url<span class="token operator">=</span><span class="token string">&#39;http://localhost/paramsTest&#39;</span><span class="token punctuation">;</span>
<span class="token function">axios</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span><span class="token punctuation">{</span>
    params<span class="token operator">:</span><span class="token punctuation">{</span>
        param
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,3),k={href:"https://github.com/axios/axios#request-config",target:"_blank",rel:"noopener noreferrer"},b=l("\u53EF\u9009\u914D\u7F6E\u9879"),m=s(`<div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u4F7F\u7528\u914D\u7F6E\u5BF9\u8C61\u65F6\uFF1A</p><p>\u4F7F\u7528 GET \u8BF7\u6C42\u65F6\uFF0C\u4F20\u9012\u7684\u53C2\u6570\u53EA\u80FD\u662F <code>params</code>\uFF0C\u5373\u914D\u7F6E\u5BF9\u8C61\u4E2D\u8981\u4F7F\u7528 <code>params:{}</code> \u5F62\u5F0F\u800C\u4E0D\u662F <code>data</code> \u5F62\u5F0F\u3002 \u4F7F\u7528 POST \u8BF7\u6C42\u65F6\uFF0C\u4F20\u9012\u7684\u53C2\u6570\u65E2\u53EF\u4EE5\u662F <code>params</code> \u4E5F\u53EF\u4EE5\u662F <code>data</code>\u3002</p></div><h2 id="axios-request-config" tabindex="-1"><a class="header-anchor" href="#axios-request-config" aria-hidden="true">#</a> axios.request(config)</h2><p>\u9ED8\u8BA4\u8BF7\u6C42\u65B9\u6CD5\u4E3A <strong>GET</strong>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> param<span class="token operator">=</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token string">&#39;PPG&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span><span class="token number">21</span><span class="token punctuation">,</span>
    sex<span class="token operator">:</span><span class="token string">&#39;male&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">//get\u65B9\u5F0F</span>
axios<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span>url<span class="token punctuation">,</span>
    params<span class="token operator">:</span><span class="token punctuation">{</span>
        param
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//POST\u65B9\u5F0F</span>
<span class="token comment">//query\u53C2\u6570</span>
axios<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span>url<span class="token punctuation">,</span>
    method<span class="token operator">:</span><span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
    params<span class="token operator">:</span><span class="token punctuation">{</span>
        param
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//body\u53C2\u6570</span>
axios<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span>url1<span class="token punctuation">,</span>
    method<span class="token operator">:</span><span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
    data<span class="token operator">:</span><span class="token punctuation">{</span>
        param
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="axios-get-url-config" tabindex="-1"><a class="header-anchor" href="#axios-get-url-config" aria-hidden="true">#</a> axios.get(url[, config])</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> param<span class="token operator">=</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token string">&#39;PPG&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span><span class="token number">21</span><span class="token punctuation">,</span>
    sex<span class="token operator">:</span><span class="token string">&#39;male&#39;</span>
<span class="token punctuation">}</span>
axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url1<span class="token punctuation">,</span><span class="token punctuation">{</span>
    params<span class="token operator">:</span><span class="token punctuation">{</span>
        param
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="axios-post-url-data-config" tabindex="-1"><a class="header-anchor" href="#axios-post-url-data-config" aria-hidden="true">#</a> axios.post(url[, data[, config]])</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> param<span class="token operator">=</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token string">&#39;PPG&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span><span class="token number">21</span><span class="token punctuation">,</span>
    sex<span class="token operator">:</span><span class="token string">&#39;male&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">// params \u914D\u7F6E\u9879</span>
axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span>url1<span class="token punctuation">,</span>
    method<span class="token operator">:</span><span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
    params<span class="token operator">:</span><span class="token punctuation">{</span>
        param
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// data \u914D\u7F6E\u9879</span>
axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span>url1<span class="token punctuation">,</span>
    method<span class="token operator">:</span><span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
    data<span class="token operator">:</span><span class="token punctuation">{</span>
        param
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u65E0\u8BBA\u4F7F\u7528\u54EA\u79CD\u4F20\u53C2\u914D\u7F6E\u9879\uFF0C\u90FD\u662Fbody\u4F20\u53C2\uFF0C\u53EA\u662F\u5916\u5C42\u4E0D\u540C\uFF0C\u4F7F\u7528 SpringBoot <code>@RequestBody</code> \u540E\u53F0\u6536\u5230\u5982\u4E0B\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;param&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;PPG&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;age&quot;</span><span class="token operator">:</span><span class="token number">21</span><span class="token punctuation">,</span><span class="token property">&quot;sex&quot;</span><span class="token operator">:</span><span class="token string">&quot;male&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token comment">//\u6216\u8005</span>
<span class="token punctuation">{</span><span class="token property">&quot;params&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;param&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;PPG&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;age&quot;</span><span class="token operator">:</span><span class="token number">21</span><span class="token punctuation">,</span><span class="token property">&quot;sex&quot;</span><span class="token operator">:</span><span class="token string">&quot;male&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u76F8\u6BD4\u975E\u522B\u540D\u65B9\u6CD5\uFF0C\u589E\u52A0\u4E86\u4E00\u5C42</p></div><h2 id="axios-delete-url-config" tabindex="-1"><a class="header-anchor" href="#axios-delete-url-config" aria-hidden="true">#</a> axios.delete(url[, config])</h2><p>\u4E0E <code>axios.get(url[, config])</code> \u7C7B\u4F3C\u3002</p><h2 id="axios-head-url-config" tabindex="-1"><a class="header-anchor" href="#axios-head-url-config" aria-hidden="true">#</a> axios.head(url[, config])</h2><p>\u4E0E <code>axios.get(url[, config])</code> \u7C7B\u4F3C\u3002</p><h2 id="axios-options-url-config" tabindex="-1"><a class="header-anchor" href="#axios-options-url-config" aria-hidden="true">#</a> axios.options(url[, config])</h2><p>\u4E0E <code>axios.get(url[, config])</code> \u7C7B\u4F3C\u3002</p><h2 id="axios-put-url-data-config" tabindex="-1"><a class="header-anchor" href="#axios-put-url-data-config" aria-hidden="true">#</a> axios.put(url[, data[, config]])</h2><p>\u4E0E <code>axios.post(url[, data[, config]])</code> \u7C7B\u4F3C\u3002</p><h2 id="axios-patch-url-data-config" tabindex="-1"><a class="header-anchor" href="#axios-patch-url-data-config" aria-hidden="true">#</a> axios.patch(url[, data[, config]])</h2><p>\u4E0E <code>axios.post(url[, data[, config]])</code> \u7C7B\u4F3C\u3002</p>`,19);function d(g,h){const a=e("ExternalLinkIcon");return t(),o(r,null,[i,n("p",null,[n("a",k,[b,c(a)])]),m],64)}var f=p(u,[["render",d]]);export{f as default};
