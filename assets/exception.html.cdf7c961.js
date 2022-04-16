import{_ as n,e as s}from"./app.5a40dfb9.js";const a={},p=s(`<h1 id="\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#\u5F02\u5E38" aria-hidden="true">#</a> \u5F02\u5E38</h1><p>\u4E0E Java \u4E0D\u540C\uFF0CDart \u4E2D\u7684\u5F02\u5E38\u90FD\u662F\u975E\u5FC5\u68C0\u5F02\u5E38\uFF0C\u65B9\u6CD5\u4E0D\u5FC5\u58F0\u660E\u4F1A\u629B\u51FA\u54EA\u4E9B\u5F02\u5E38\uFF0C\u4E5F\u4E0D\u5FC5\u6355\u83B7\u4EFB\u4F55\u5F02\u5E38\u3002</p><p>Dart \u63D0\u4F9B\u4E86 Exception \u548C Error \u4E24\u79CD\u7C7B\u578B\u7684\u5F02\u5E38\u4EE5\u53CA\u5B83\u4EEC\u4E00\u7CFB\u5217\u7684\u5B50\u7C7B\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5B9A\u4E49\u81EA\u5DF1\u7684\u5F02\u5E38\u7C7B\u578B\u3002\u4F46\u662F\u5728 Dart \u4E2D\u53EF\u4EE5\u5C06\u4EFB\u4F55\u975E null \u5BF9\u8C61\u4F5C\u4E3A\u5F02\u5E38\u629B\u51FA\u800C\u4E0D\u5C40\u9650\u4E8E Exception \u6216 Error \u7C7B\u578B\u3002</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">exceptionDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token keyword">throw</span> <span class="token string">&quot;wuhu&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">exceptionDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6355\u83B7\u5F02\u5E38\uFF1A</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">exceptionDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token keyword">throw</span> <span class="token string">&quot;wuhu&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token function">exceptionDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">on</span> <span class="token class-name">String</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">,</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;stack info: $s&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">on</span> <span class="token class-name">Error</span> <span class="token punctuation">{</span>
    <span class="token keyword">rethrow</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;finally&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u4F7F\u7528 on \u6765\u6307\u5B9A\u5F02\u5E38\u7C7B\u578B\uFF0C\u4F7F\u7528 catch \u6765\u6355\u83B7\u5F02\u5E38\u5BF9\u8C61\uFF0C\u4E24\u8005\u53EF\u4EE5\u7ED3\u5408\u4F7F\u7528\uFF0Ccatch \u53EF\u4EE5\u63A5\u53D7\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u629B\u51FA\u7684\u5F02\u5E38\u5BF9\u8C61\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u6808\u4FE1\u606F\u3002</p><p>\u53EF\u4EE5\u4F7F\u7528 <code>rethrow</code> \u5C06\u6355\u83B7\u7684\u5F02\u5E38\u518D\u6B21\u629B\u51FA\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u4E0E Java \u4E0D\u540C\uFF0C\u5982\u679C finally \u524D\u6CA1\u6709 catch \u6355\u83B7\u5F02\u5E38\uFF0C\u5219\u5F02\u5E38\u4F1A\u5728\u6267\u884C\u5B8C finally \u540E\u629B\u51FA\u3002</p></div>`,9);function t(o,c){return p}var u=n(a,[["render",t]]);export{u as default};
