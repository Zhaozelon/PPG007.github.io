import{_ as n,e as s}from"./app.5a40dfb9.js";const a={},p=s(`<h1 id="\u751F\u6210\u5668" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u5668" aria-hidden="true">#</a> \u751F\u6210\u5668</h1><p>\u5F53\u4F60\u9700\u8981\u5EF6\u8FDF\u5730\u751F\u6210\u4E00\u8FDE\u4E32\u7684\u503C\u65F6\uFF0C\u53EF\u4EE5\u8003\u8651\u4F7F\u7528 \u751F\u6210\u5668\u51FD\u6570\u3002Dart \u5185\u7F6E\u652F\u6301\u4E24\u79CD\u5F62\u5F0F\u7684\u751F\u6210\u5668\u65B9\u6CD5\uFF1A</p><ul><li>\u540C\u6B65\u751F\u6210\u5668\uFF1A\u8FD4\u56DE\u4E00\u4E2A Iterable \u5BF9\u8C61\u3002</li><li>\u5F02\u6B65\u751F\u6210\u5668\uFF1A\u8FD4\u56DE\u4E00\u4E2A Stream \u5BF9\u8C61\u3002</li></ul><p>\u901A\u8FC7\u5728\u51FD\u6570\u4E0A\u52A0 sync* \u5173\u952E\u5B57\u5E76\u5C06\u8FD4\u56DE\u503C\u7C7B\u578B\u8BBE\u7F6E\u4E3A Iterable \u6765\u5B9E\u73B0\u4E00\u4E2A \u540C\u6B65 \u751F\u6210\u5668\u51FD\u6570\uFF0C\u5728\u51FD\u6570\u4E2D\u4F7F\u7528 yield \u8BED\u53E5\u6765\u4F20\u9012\u503C\uFF1A</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">&gt;</span></span> <span class="token function">naturalsTo</span><span class="token punctuation">(</span>int n<span class="token punctuation">)</span> <span class="token keyword">sync*</span> <span class="token punctuation">{</span>
  int k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span> k<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token function">naturalsTo</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span>iterator<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>x<span class="token punctuation">.</span><span class="token function">moveNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u5B9E\u73B0 \u5F02\u6B65 \u751F\u6210\u5668\u51FD\u6570\u4E0E\u540C\u6B65\u7C7B\u4F3C\uFF0C\u53EA\u4E0D\u8FC7\u5173\u952E\u5B57\u4E3A async* \u5E76\u4E14\u8FD4\u56DE\u503C\u4E3A Stream\uFF1A</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">&gt;</span></span> <span class="token function">asynchronousNaturalsTo</span><span class="token punctuation">(</span>int n<span class="token punctuation">)</span> <span class="token keyword">async*</span> <span class="token punctuation">{</span>
  int k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span> k<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> args<span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> numbers <span class="token operator">=</span> <span class="token function">asynchronousNaturalsTo</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> x <span class="token keyword">in</span> numbers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u5982\u679C\u751F\u6210\u5668\u662F\u9012\u5F52\u8C03\u7528\u7684\uFF0C\u53EF\u662F\u4F7F\u7528 yield* \u8BED\u53E5\u63D0\u5347\u6267\u884C\u6027\u80FD\uFF1A</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">&gt;</span></span> <span class="token function">naturalsDownFrom</span><span class="token punctuation">(</span>int n<span class="token punctuation">)</span> <span class="token keyword">sync*</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span> n<span class="token punctuation">;</span>
    <span class="token keyword">yield*</span> <span class="token function">naturalsDownFrom</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token function">naturalsDownFrom</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span>iterator<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>x<span class="token punctuation">.</span><span class="token function">moveNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,9);function t(e,c){return p}var l=n(a,[["render",t]]);export{l as default};
