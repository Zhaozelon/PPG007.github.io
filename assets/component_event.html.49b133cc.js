import{_ as n,e as s}from"./app.5a40dfb9.js";const a={},p=s(`<h1 id="\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u4E8B\u4EF6" aria-hidden="true">#</a> \u7EC4\u4EF6\u81EA\u5B9A\u4E49\u4E8B\u4EF6</h1><h2 id="\u7ED1\u5B9A\u81EA\u5B9A\u4E49\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7ED1\u5B9A\u81EA\u5B9A\u4E49\u4E8B\u4EF6" aria-hidden="true">#</a> \u7ED1\u5B9A\u81EA\u5B9A\u4E49\u4E8B\u4EF6</h2><p>\u7236\u7EC4\u4EF6\u5B9A\u4E49\u4E00\u4E2A\u65B9\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">f1</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7236\u7EC4\u4EF6\u4E3A\u5B50\u7EC4\u4EF6\u7ED1\u5B9A\u4E8B\u4EF6\uFF1A</p><p>\u5199\u6CD5\u4E00\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Start</span> <span class="token attr-name">:send</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>receive<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">v-on:</span>event</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>f1<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5B50\u7EC4\u4EF6\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo-header<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myEvent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Start&quot;</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">myEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u8C03\u7528 <code>$emit()</code> \u65B9\u6CD5\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u7236\u7EC4\u4EF6\u7ED9\u5B50\u7EC4\u4EF6\u7ED1\u5B9A\u7684\u4E8B\u4EF6\u7684\u540D\u5B57\uFF0C\u540E\u9762\u53C2\u6570\u4E3A\u8981\u4F20\u9012\u7ED9\u7236\u7EC4\u4EF6\u4E2D\u5B9A\u4E49\u7684\u65B9\u6CD5\u7684\u53C2\u6570\u3002</p><p>\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4FEE\u9970\u7B26\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>@event.once=&quot;f1&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5199\u6CD5\u4E8C,\u4F7F\u7528 <code>ref</code> \u5C5E\u6027\uFF1A</p><p>\u7236\u7EC4\u4EF6\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Start</span> <span class="token attr-name">:send</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>receive<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ref1<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> temp <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&quot;todos&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>todos<span class="token operator">=</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">.</span>todos<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>ref1<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>f1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4F7F\u7528\u4FEE\u9970\u7B26\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>ref1<span class="token punctuation">.</span><span class="token function">$once</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>f1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5199\u6CD5\u4E8C\u867D\u7136\u590D\u6742\uFF0C\u4F46\u662F\u66F4\u52A0\u7075\u6D3B\uFF0C\u53EF\u4EE5\u63A7\u5236\u7ED1\u5B9A\u7684\u65F6\u673A\u7B49\u7B49\u3002</p><h2 id="\u89E3\u7ED1\u81EA\u5B9A\u4E49\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u89E3\u7ED1\u81EA\u5B9A\u4E49\u4E8B\u4EF6" aria-hidden="true">#</a> \u89E3\u7ED1\u81EA\u5B9A\u4E49\u4E8B\u4EF6</h2><h3 id="\u89E3\u7ED1\u5355\u4E2A\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u89E3\u7ED1\u5355\u4E2A\u4E8B\u4EF6" aria-hidden="true">#</a> \u89E3\u7ED1\u5355\u4E2A\u4E8B\u4EF6</h3><p>\u5B50\u7EC4\u4EF6\u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u89E3\u7ED1\u4E86&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>10\u79D2\u540E\u4E8B\u4EF6\u88AB\u89E3\u7ED1</p><h3 id="\u89E3\u7ED1\u591A\u4E2A\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u89E3\u7ED1\u591A\u4E2A\u4E8B\u4EF6" aria-hidden="true">#</a> \u89E3\u7ED1\u591A\u4E2A\u4E8B\u4EF6</h3><p>\u5B50\u7EC4\u4EF6\u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;event1&#39;</span><span class="token punctuation">,</span> &#39;event2<span class="token punctuation">]</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u89E3\u7ED1\u4E86&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4F7F\u7528\u6570\u7EC4\u4F20\u9012\u6240\u6709\u8981\u89E3\u7ED1\u7684\u4E8B\u4EF6\u3002</p><h3 id="\u89E3\u7ED1\u6240\u6709\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u89E3\u7ED1\u6240\u6709\u4E8B\u4EF6" aria-hidden="true">#</a> \u89E3\u7ED1\u6240\u6709\u4E8B\u4EF6</h3><p>\u5B50\u7EC4\u4EF6\u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u89E3\u7ED1\u4E86&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u89E3\u7ED1\u7684\u662F\u6240\u6709\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF0C\u539F\u6709\u7684\u9F20\u6807\u70B9\u51FB\u4E8B\u4EF6\u7B49\u4E0D\u4F1A\u89E3\u7ED1</p><h2 id="\u7ED9\u7EC4\u4EF6\u7ED1\u5B9A\u539F\u751F\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7ED9\u7EC4\u4EF6\u7ED1\u5B9A\u539F\u751F\u4E8B\u4EF6" aria-hidden="true">#</a> \u7ED9\u7EC4\u4EF6\u7ED1\u5B9A\u539F\u751F\u4E8B\u4EF6</h2><p>\u4F7F\u7528 <code>native</code> \u4FEE\u9970\u7B26\uFF0C\u7ED1\u5B9A\u7684\u539F\u751F\u4E8B\u4EF6\u89E3\u7ED1\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u540E\u4ECD\u7136\u6709\u6548\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Start</span> <span class="token attr-name">:send</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>receive<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click.native</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo(<span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF1A</p><ul><li><p>\u4E00\u79CD\u7EC4\u4EF6\u95F4\u901A\u4FE1\u65B9\u5F0F(\u5B50\u7EC4\u4EF6\u4F20\u9012\u6570\u636E\u5230\u7236\u7EC4\u4EF6)\u3002</p></li><li><p>\u4F7F\u7528\u573A\u666F\uFF1AA \u662F\u7236\u7EC4\u4EF6\uFF0CB \u662F\u5B50\u7EC4\u4EF6\uFF0CB \u60F3\u7ED9 A \u4F20\u9012\u6570\u636E\uFF0C\u5C31\u8981\u5728 A \u4E2D\u4E3A B \u7ED1\u5B9A\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF0C\u4E8B\u4EF6\u56DE\u8C03\u5728 A \u4E2D\u5B9A\u4E49\u3002</p></li><li><p>\u7ED1\u5B9A\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF1A</p><ul><li><p>\u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF1A</p><p>\u5728\u7236\u7EC4\u4EF6\u4E2D\u4F7F\u7528 <code>&lt;Component v-on:\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u540D=&quot;\u56DE\u8C03\u51FD\u6570&quot;&gt;&lt;/Component&gt;</code>\u3002</p></li><li><p>\u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF1A \u5728\u7236\u7EC4\u4EF6\u4E2D\u4F7F\u7528 ref \u5C5E\u6027\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Start</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>demo<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;demo&#39;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>demo<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul></li><li><p>\u5982\u679C\u60F3\u8BA9\u4E8B\u4EF6\u53EA\u89E6\u53D1\u4E00\u6B21\u6216\u5176\u4ED6\u9650\u5236\uFF0C\u4F7F\u7528 <code>.once</code> \u4FEE\u9970\u7B26\u6216 <code>$once()</code> \u65B9\u6CD5\u6216\u5176\u4ED6\u4FEE\u9970\u7B26\u6216\u65B9\u6CD5\u3002</p></li><li><p>\u5B50\u7EC4\u4EF6\u89E6\u53D1\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF1A</p><p>\u5B9A\u4E49\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u4F7F\u7528\u539F\u751F\u4E8B\u4EF6\u89E6\u53D1\u8FD9\u4E2A\u4E8B\u4EF6\u5E76\u5728\u8FD9\u4E2A\u65B9\u6CD5\u4E2D\u8C03\u7528\u81EA\u5B9A\u4E49\u7684\u4E8B\u4EF6\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">myEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;demo&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>\u89E3\u7ED1\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF1A</p><p>\u5B50\u7EC4\u4EF6\u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u89E3\u7ED1\u4E00\u4E2A\u4E8B\u4EF6</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">&#39;demo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u89E3\u7ED1\u591A\u4E2A\u4E8B\u4EF6</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;demo&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;demo2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u89E3\u7ED1\u6240\u6709\u81EA\u5B9A\u4E49\u4E8B\u4EF6</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li><p>\u7EC4\u4EF6\u7ED1\u5B9A\u539F\u751F DOM \u4E8B\u4EF6\uFF1A\u4F7F\u7528 <code>.native</code> \u4FEE\u9970\u7B26\u3002</p></li></ul><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u901A\u8FC7 <code>this.$refs.xxx.$on(&#39;event&#39;,callback)</code> \u7ED1\u5B9A\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u65F6\uFF0C\u5982\u679C\u628A callback \u76F4\u63A5\u5199\u6210\u51FD\u6570\uFF0C\u8981\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\uFF0C\u8FD9\u6837\u56DE\u8C03\u65B9\u6CD5\u4E2D this \u624D\u662F\u5F53\u524D\u7EC4\u4EF6\u5BF9\u8C61\uFF0C\u5982\u679C\u662F\u666E\u901A\u51FD\u6570\uFF0Cthis \u6307\u5411\u7684\u662F\u89E6\u53D1\u8FD9\u4E2A\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u7684\u7EC4\u4EF6\u5BF9\u8C61\uFF0C\u5373\u7236\u7EC4\u4EF6\u5BF9\u8C61\uFF0C\u6216\u8005\u5728 methods \u4E2D\u5B9A\u4E49\u56DE\u8C03\u51FD\u6570\u3002</p></div>`,39);function t(e,c){return p}var l=n(a,[["render",t]]);export{l as default};
