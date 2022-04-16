import{_ as n,e as s}from"./app.5a40dfb9.js";const a={},p=s(`<h1 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h1><p>\u5728 Dart \u4E2D\u51FD\u6570\u4E5F\u662F\u5BF9\u8C61\uFF0C\u662F Function \u7C7B\u578B\u3002</p><p>\u51FD\u6570\u53EF\u4EE5\u4E0D\u6307\u5B9A\u8FD4\u56DE\u503C\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\u8FD4\u56DE\u503C\u4E3A dynamic \u7C7B\u578B\uFF1A</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token function">isOdd</span><span class="token punctuation">(</span>int a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a<span class="token punctuation">.</span>isOdd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5982\u679C\u51FD\u6570\u4F53\u4E2D\u53EA\u6709\u4E00\u4E2A<em>\u8868\u8FBE\u5F0F</em>\uFF0C\u53EF\u4EE5\u7B80\u5199\u4E3A\u7BAD\u5934\u51FD\u6570\uFF1A</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token function">isOdd</span><span class="token punctuation">(</span>int a<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> a<span class="token punctuation">.</span>isOdd<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><p>\u51FD\u6570\u6709\u4E24\u79CD\u5F62\u5F0F\u7684\u53C2\u6570\uFF1A<em>\u5FC5\u8981\u53C2\u6570</em>\u548C<em>\u53EF\u9009\u53C2\u6570</em>\uFF0C\u5FC5\u8981\u53C2\u6570\u5B9A\u4E49\u5728\u53C2\u6570\u5217\u8868\u524D\u9762\uFF0C\u53EF\u9009\u53C2\u6570\u5B9A\u4E49\u5728\u5FC5\u8981\u53C2\u6570\u540E\u9762\uFF0C\u53EF\u9009\u53C2\u6570\u53EF\u4EE5\u662F\u547D\u540D\u7684\u6216\u4F4D\u7F6E\u7684\u3002</p><h3 id="\u547D\u540D\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u53C2\u6570" aria-hidden="true">#</a> \u547D\u540D\u53C2\u6570</h3><p>\u547D\u540D\u53C2\u6570\u9ED8\u8BA4\u4E3A\u53EF\u9009\u53C2\u6570\uFF0C\u9664\u975E\u88AB\u6807\u8BB0\u4E3A required\u3002</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token comment">// \u9ED8\u8BA4\u503C 10</span>
<span class="token function">isOdd</span><span class="token punctuation">(</span><span class="token punctuation">{</span>int a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">isOdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u56E0\u4E3A\u662F\u53EF\u9009\u53C2\u6570\u6240\u4EE5\u5982\u679C\u53C2\u6570\u7C7B\u578B\u4E0D\u80FD\u4E3A null\uFF0C\u9700\u8981\u6307\u5B9A\u9ED8\u8BA4\u503C\u6216\u8005\u5728\u7C7B\u578B\u540E\u9762\u52A0\u95EE\u53F7\u3002</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token function">isOdd</span><span class="token punctuation">(</span><span class="token punctuation">{</span>required int a<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">isOdd</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> <span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4F46\u662F\u5982\u679C\u662F\u4F7F\u7528\u4E86 required \u505A\u4E86\u5FC5\u586B\u9650\u5236\uFF0C\u90A3\u4E48\u53EF\u4EE5\u4E0D\u6307\u5B9A\u9ED8\u8BA4\u503C\u3002</p><h3 id="\u53EF\u9009\u7684\u4F4D\u7F6E\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53EF\u9009\u7684\u4F4D\u7F6E\u53C2\u6570" aria-hidden="true">#</a> \u53EF\u9009\u7684\u4F4D\u7F6E\u53C2\u6570</h3><p>\u4F7F\u7528 <code>[]</code> \u5C06\u4E00\u7CFB\u5217\u53C2\u6570\u5305\u88F9\u8D77\u6765\u4F5C\u4E3A\u4F4D\u7F6E\u53C2\u6570\u3002</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token class-name">String</span> <span class="token class-name">Link</span><span class="token punctuation">(</span><span class="token class-name">String</span> a<span class="token punctuation">,</span> <span class="token class-name">String</span> b<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token operator">?</span> c<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token operator">?</span> d<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> result <span class="token operator">=</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> <span class="token string">&quot;$result$c&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>d <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> <span class="token string">&quot;$result$d&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">Link</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">Link</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="\u9ED8\u8BA4\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u53C2\u6570" aria-hidden="true">#</a> \u9ED8\u8BA4\u53C2\u6570</h3><p>\u5728\u547D\u540D\u53C2\u6570\u548C\u4F4D\u7F6E\u53C2\u6570\u540E\u4F7F\u7528\u7B49\u53F7\uFF08\u8001\u7248\u672C\u4F7F\u7528\u5192\u53F7\uFF09\u5B9A\u4E49\u9ED8\u8BA4\u503C\uFF0C\u9ED8\u8BA4\u503C\u5FC5\u987B\u662F\u7F16\u8BD1\u65F6\u5E38\u91CF\uFF0C\u6CA1\u6709\u6307\u5B9A\u9ED8\u8BA4\u503C\u7684\u60C5\u51B5\u4E0B\u9ED8\u8BA4\u503C\u4E3A null\u3002</p><h2 id="main-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#main-\u51FD\u6570" aria-hidden="true">#</a> <code>main()</code> \u51FD\u6570</h2><p>\u6BCF\u4E2A Dart \u7A0B\u5E8F\u90FD\u5FC5\u987B\u6709\u4E00\u4E2A <code>main()</code> \u9876\u7EA7\u51FD\u6570\u4F5C\u4E3A\u7A0B\u5E8F\u7684\u5165\u53E3\uFF0C <code>main()</code> \u51FD\u6570\u8FD4\u56DE\u503C\u4E3A void \u5E76\u4E14\u6709\u4E00\u4E2A <code>List&lt;String&gt;</code> \u7C7B\u578B\u7684\u53EF\u9009\u53C2\u6570\u3002</p><h2 id="\u51FD\u6570\u662F\u4E00\u7EA7\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u662F\u4E00\u7EA7\u5BF9\u8C61" aria-hidden="true">#</a> \u51FD\u6570\u662F\u4E00\u7EA7\u5BF9\u8C61</h2><p>\u51FD\u6570\u53EF\u4EE5\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7ED9\u53E6\u4E00\u4E2A\u53C2\u6570\uFF1A</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token class-name">String</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">callHello</span><span class="token punctuation">(</span><span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> f<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  f<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">callHello</span><span class="token punctuation">(</span>hello<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u8D4B\u503C\u7ED9\u4E00\u4E2A\u53D8\u91CF\uFF1A</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> x <span class="token operator">=</span> hello<span class="token punctuation">;</span>
  <span class="token comment">//var x = (msg) =&gt; print(msg);</span>
  x<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u533F\u540D\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u533F\u540D\u51FD\u6570" aria-hidden="true">#</a> \u533F\u540D\u51FD\u6570</h2><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token punctuation">(</span>msg<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">print</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token punctuation">(</span>int a<span class="token punctuation">,</span> int b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  x<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token function">y</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u8BCD\u6CD5\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u8BCD\u6CD5\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u8BCD\u6CD5\u4F5C\u7528\u57DF</h2><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  int a <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    int a <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 100</span>
  <span class="token punctuation">}</span>
  <span class="token function">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1000</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u8BCD\u6CD5\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u8BCD\u6CD5\u95ED\u5305" aria-hidden="true">#</a> \u8BCD\u6CD5\u95ED\u5305</h2><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token class-name">Function</span><span class="token punctuation">(</span>int<span class="token punctuation">)</span> <span class="token function">test</span><span class="token punctuation">(</span>int a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>int b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> t1 <span class="token operator">=</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> t2 <span class="token operator">=</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>t1<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>
  <span class="token function">print</span><span class="token punctuation">(</span>t2<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 105</span>
  t1 <span class="token operator">=</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>t1<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u8FD4\u56DE\u503C</h2><p>\u6240\u6709\u7684\u51FD\u6570\u90FD\u6709\u8FD4\u56DE\u503C\uFF0C\u6CA1\u6709\u663E\u5F0F\u8FD4\u56DE\u8BED\u53E5\u7684\u51FD\u6570\u6700\u540E\u4E00\u884C\u9ED8\u8BA4\u6267\u884C <code>return null</code>\u3002</p><h2 id="\u51FD\u6570\u76F8\u7B49" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u76F8\u7B49" aria-hidden="true">#</a> \u51FD\u6570\u76F8\u7B49</h2><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// A top-level function</span>

<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// A static method</span>
  <span class="token keyword">void</span> <span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// An instance method</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Function</span> x<span class="token punctuation">;</span>

  <span class="token comment">// Comparing top-level functions.</span>
  x <span class="token operator">=</span> foo<span class="token punctuation">;</span>
  <span class="token keyword">assert</span><span class="token punctuation">(</span>foo <span class="token operator">==</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Comparing static methods.</span>
  x <span class="token operator">=</span> <span class="token class-name">A</span><span class="token punctuation">.</span>bar<span class="token punctuation">;</span>
  <span class="token keyword">assert</span><span class="token punctuation">(</span><span class="token class-name">A</span><span class="token punctuation">.</span>bar <span class="token operator">==</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Comparing instance methods.</span>
  <span class="token keyword">var</span> v <span class="token operator">=</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Instance #1 of A</span>
  <span class="token keyword">var</span> w <span class="token operator">=</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Instance #2 of A</span>
  <span class="token keyword">var</span> y <span class="token operator">=</span> w<span class="token punctuation">;</span>
  x <span class="token operator">=</span> w<span class="token punctuation">.</span>baz<span class="token punctuation">;</span>

  <span class="token comment">// These closures refer to the same instance (#2),</span>
  <span class="token comment">// so they&#39;re equal.</span>
  <span class="token keyword">assert</span><span class="token punctuation">(</span>y<span class="token punctuation">.</span>baz <span class="token operator">==</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// These closures refer to different instances,</span>
  <span class="token comment">// so they&#39;re unequal.</span>
  <span class="token keyword">assert</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>baz <span class="token operator">!=</span> w<span class="token punctuation">.</span>baz<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>`,36);function t(e,c){return p}var l=n(a,[["render",t]]);export{l as default};
