import{_ as n,e as s}from"./app.5a40dfb9.js";const a={},p=s(`<h1 id="golang-traps" tabindex="-1"><a class="header-anchor" href="#golang-traps" aria-hidden="true">#</a> Golang Traps</h1><ul><li><p>\u53EF\u53D8\u53C2\u6570\u662F\u7A7A\u63A5\u53E3\u7C7B\u578B\u65F6\uFF0C\u4F20\u5165\u7A7A\u63A5\u53E3\u7684\u5207\u7247\u8981\u6CE8\u610F\u53C2\u6570\u5C55\u5F00\u95EE\u9898\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token operator">...</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>\u6570\u7EC4\u662F\u503C\u4F20\u9012\uFF0C\u5982\u679C\u6570\u7EC4\u505A\u51FD\u6570\u53C2\u6570\u90A3\u4E48\u5728\u51FD\u6570\u4E2D\u7684\u4FEE\u6539\u5C06\u4E0D\u8D77\u4F5C\u7528\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5207\u7247\u3002</p></li><li><p>map \u7684\u904D\u5386\u987A\u5E8F\u662F\u4E0D\u56FA\u5B9A\u7684\uFF0C\u6BCF\u6B21\u904D\u5386\u987A\u5E8F\u53EF\u80FD\u90FD\u4E0D\u4E00\u6837\u3002</p></li><li><p>recover \u5FC5\u987B\u5728 defer \u8BED\u53E5\u4E2D\uFF0C\u4E14\u8FD9\u4E2A\u8BED\u53E5\u662F\u4E00\u4E2A\u51FD\u6570\u7684\u6267\u884C\u3002</p></li><li><p>\u5E76\u53D1\u65F6\u6CE8\u610F\u4E3B\u7EBF\u7A0B\u9000\u51FA\u5BFC\u81F4\u5176\u4ED6\u7EBF\u7A0B\u7ED3\u675F\u3002</p></li><li><p>\u4E0D\u540C goroutine \u4E4B\u95F4\u4E0D\u6EE1\u8DB3\u987A\u5E8F\u4E00\u81F4\u6027\u5185\u5B58\u6A21\u578B\u3002</p></li><li><p>\u95ED\u5305\u9519\u8BEF\u5730\u5F15\u7528\u540C\u4E00\u4E2A\u53D8\u91CF\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> <span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token comment">// \u5168\u90E8\u662F 5\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6BCF\u8F6E\u5FAA\u73AF\u751F\u6210\u4E00\u4E2A\u5C40\u90E8\u53D8\u91CF\u6216\u8005\u901A\u8FC7\u51FD\u6570\u53C2\u6570\u4F20\u5165\u89E3\u51B3\u3002</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li><li><p>defer \u8BED\u53E5\u5728\u51FD\u6570\u9000\u51FA\u65F6\u624D\u4F1A\u6267\u884C\uFF0C\u5982\u679C\u5728\u5FAA\u73AF\u4F53\u4E2D\u4F7F\u7528 defer \u8BED\u53E5\u5C06\u4F1A\u5728\u5FAA\u73AF\u7ED3\u675F\u540E\u6267\u884C\uFF0C\u5982\u679C\u5E0C\u671B\u6BCF\u6B21\u5FAA\u73AF\u540E\u6267\u884C\u53EF\u4EE5\u53BB\u6389 defer \u5E76\u5C06\u8BED\u53E5\u653E\u5728\u5FAA\u73AF\u4F53\u6700\u540E\u6216\u8005\u5C06 defer \u540E\u8BED\u53E5\u5C01\u88C5\u4E3A\u4E00\u4E2A\u51FD\u6570\u3002</p></li></ul><h2 id="\u7A7A\u63A5\u53E3\u548C-nil-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u63A5\u53E3\u548C-nil-\u7684\u533A\u522B" aria-hidden="true">#</a> \u7A7A\u63A5\u53E3\u548C nil \u7684\u533A\u522B</h2><p>\u58F0\u660E\u4E00\u4E2A interface{} \u7C7B\u578B\u7684\u53D8\u91CF\u4F46\u4E0D\u8FDB\u884C\u521D\u59CB\u5316\uFF0C\u8FD9\u65F6\u8FD9\u4E2A\u53D8\u91CF\u503C\u4E3A nil\uFF0C\u672C\u8EAB\u4E5F\u662F nil\uFF0C\u5982\u679C\u5C06\u4E00\u4E2A\u7ED3\u6784\u4F53\u7684 nil \u6307\u9488\u53D8\u91CF\u8D4B\u503C\u7ED9\u8FD9\u4E2A\u7A7A\u63A5\u53E3\u53D8\u91CF\uFF0C\u5219\u8FD9\u4E2A\u7A7A\u63A5\u53E3\u53D8\u91CF\u7684\u503C\u662F nil\uFF0C\u4F46\u662F\u672C\u8EAB\u4E0D\u662F nil\uFF0C\u6240\u4EE5\u5982\u679C\u6253\u5370\u8FD9\u4E2A\u53D8\u91CF\u4F1A\u8F93\u51FA nil\uFF0C\u4F46\u662F\u5982\u679C\u5BF9\u5176\u8FDB\u884C <code>if != nil</code> \u4F1A\u8FD4\u56DE false\u3002</p><p>\u4E00\u4E2A interface{} \u53D8\u91CF\u5305\u542B\u4E86\u4E24\u4E2A\u6307\u9488\uFF0C\u4E00\u4E2A\u6307\u9488\u6307\u5411\u503C\u5728\u7F16\u8BD1\u65F6\u786E\u5B9A\u7684\u7C7B\u578B\uFF0C\u4E00\u4E2A\u6307\u9488\u6307\u5411\u5B9E\u9645\u7684\u503C\uFF0C\u6240\u4EE5\u503C\u4E3A nil \u4E0D\u4EE3\u8868\u8FD9\u4E2A\u53D8\u91CF\u662F nil\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;log&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> DemoInterface <span class="token keyword">interface</span><span class="token punctuation">{</span>
	<span class="token function">Demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> DemoImpl <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	message <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d DemoImpl<span class="token punctuation">)</span> <span class="token function">Demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> d<span class="token punctuation">.</span>message
<span class="token punctuation">}</span>

<span class="token keyword">var</span> di <span class="token operator">*</span>DemoImpl
<span class="token keyword">var</span> d DemoInterface

<span class="token keyword">func</span> <span class="token function">demoImplFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>DemoImpl <span class="token punctuation">{</span>
	<span class="token keyword">return</span> di
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	d <span class="token operator">=</span> <span class="token function">demoImplFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> d <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">Demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>\u5728\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C<code>d = di</code> \u8FD9\u884C\u4EE3\u7801\u662F\u5C06\u4E00\u4E2A\u63A5\u53E3\u7684\u4E3A nil \u7684\u5B9E\u73B0\u8D4B\u503C\u7ED9\u8FD9\u4E2A\u63A5\u53E3\u7684\u4E00\u4E2A\u53D8\u91CF\uFF0C\u6B64\u65F6 d \u5C31\u662F\u4E00\u4E2A\u7A7A\u63A5\u53E3\uFF0C\u503C\u4E3A nil \u4F46\u662F\u7C7B\u578B\u6307\u9488\u6307\u5411\u5B9E\u73B0\u7ED3\u6784\u4F53\u6240\u4EE5 <code>if d != nil</code> \u4F1A\u8FD4\u56DE true\uFF0C\u4F46\u662F\u4E00\u65E6\u8C03\u7528\u63A5\u53E3\u7684\u65B9\u6CD5\u4F1A\u7531\u4E8E\u503C\u4E3A nil \u51FA\u73B0\u7A7A\u6307\u9488 panic\u3002</p><p>\u4F46\u662F\u5982\u679C\u662F <code>d := demoImplFunc()</code>\uFF0C\u76F8\u5F53\u4E8E\u65B0\u5B9A\u4E49\u4E86\u4E00\u4E2A\u4E34\u65F6\u53D8\u91CF\uFF0C\u7C7B\u578B\u5C31\u662F\u5B9E\u73B0\u7C7B\uFF0C\u56E0\u6B64 <code>if d != nil</code> \u4F1A\u8FD4\u56DE false\uFF0C\u4E5F\u5C31\u4E0D\u4F1A panic\u3002</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u53EA\u8981\u6D89\u53CA\u5230\u5B9E\u73B0\u548C\u63A5\u53E3\u7684\u8F6C\u6362\u5C31\u5B58\u5728\u8FD9\u4E2A\u95EE\u9898\u3002</p></div><div class="custom-container tip"><p class="custom-container-title">\u89E3\u51B3\u65B9\u6CD5</p><ul><li>\u5728\u53D1\u751F\u63A5\u53E3\u548C\u5B9E\u73B0\u8F6C\u6362\u65F6\u8FDB\u884C\u5224\u7A7A\u64CD\u4F5C\u3002\u4F8B\u5982\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u4E34\u65F6\u53D8\u91CF\u63A5\u6536\u51FD\u6570\u7684\u8FD4\u56DE\u503C\uFF0C\u518D\u5224\u65AD\u8FD9\u4E2A\u8FD4\u56DE\u503C\u662F\u5426\u4E3A\u7A7A\uFF0C\u518D\u51B3\u5B9A\u662F\u5426\u8F6C\u6362\u3002</li><li>\u4F7F\u7528\u5177\u4F53\u7684\u5B9E\u73B0\u53D8\u91CF\u4ECE\u800C\u675C\u7EDD\u5B9E\u73B0\u548C\u63A5\u53E3\u7684\u8F6C\u6362\u3002\u4F46\u662F\u8FD9\u4E48\u505A\u4F1A\u7834\u574F\u4EE3\u7801\u7684\u62BD\u8C61\u6027\u3002</li></ul></div>`,10);function e(t,c){return p}var l=n(a,[["render",e]]);export{l as default};
