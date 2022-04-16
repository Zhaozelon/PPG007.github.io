import{_ as n,e as a}from"./app.5a40dfb9.js";const s={},e=a(`<h1 id="feign" tabindex="-1"><a class="header-anchor" href="#feign" aria-hidden="true">#</a> Feign</h1><h2 id="\u76F8\u5173\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u4F9D\u8D56" aria-hidden="true">#</a> \u76F8\u5173\u4F9D\u8D56</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-feign<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.4.7.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u4F7F\u7528-feign" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-feign" aria-hidden="true">#</a> \u4F7F\u7528 Feign</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u4E00\u5B9A\u8981\u5C06\u670D\u52A1\u6CE8\u5165 Spring \u4E2D\u3002</p></div><h3 id="\u7F16\u5199\u670D\u52A1\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199\u670D\u52A1\u63A5\u53E3" aria-hidden="true">#</a> \u7F16\u5199\u670D\u52A1\u63A5\u53E3</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@FeignClient</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;SPRINGCLOUD-PROVIDER-DEPT&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">DeptService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/dept/queryAll&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Dept</span><span class="token punctuation">&gt;</span></span> <span class="token function">queryAllDept</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/dept/add&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">int</span> <span class="token function">addDept</span><span class="token punctuation">(</span><span class="token class-name">String</span> dName<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/dept/queryById&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token class-name">Dept</span> <span class="token function">queryDeptById</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="\u542F\u52A8\u7C7B\u5F00\u542F-feign-\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u7C7B\u5F00\u542F-feign-\u652F\u6301" aria-hidden="true">#</a> \u542F\u52A8\u7C7B\u5F00\u542F Feign \u652F\u6301</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//\u786E\u4FDD\u88ABSpring\u626B\u63CF\u5230\u5373\u53EF</span>
<span class="token annotation punctuation">@EnableFeignClients</span><span class="token punctuation">(</span>basePackages <span class="token operator">=</span> <span class="token string">&quot;api&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="feign-\u539F\u7406\u7B80\u8FF0" tabindex="-1"><a class="header-anchor" href="#feign-\u539F\u7406\u7B80\u8FF0" aria-hidden="true">#</a> Feign \u539F\u7406\u7B80\u8FF0</h2><ul><li>\u542F\u52A8\u65F6\uFF0C\u7A0B\u5E8F\u4F1A\u8FDB\u884C\u5305\u626B\u63CF\uFF0C\u626B\u63CF\u6240\u6709\u5305\u4E0B\u6240\u6709 <code>@FeignClient</code> \u6CE8\u89E3\u7684\u7C7B\uFF0C\u5E76\u5C06\u8FD9\u4E9B\u7C7B\u6CE8\u5165\u5230 Spring \u7684 IOC \u5BB9\u5668\u4E2D\u3002\u5F53\u5B9A\u4E49\u7684 Feign \u4E2D\u7684\u63A5\u53E3\u88AB\u8C03\u7528\u65F6\uFF0C\u901A\u8FC7 JDK \u7684\u52A8\u6001\u4EE3\u7406\u6765\u751F\u6210 RequestTemplate\u3002</li><li>RequestTemplate \u4E2D\u5305\u542B\u8BF7\u6C42\u7684\u6240\u6709\u4FE1\u606F\uFF0C\u5982\u8BF7\u6C42\u53C2\u6570\uFF0C\u8BF7\u6C42 URL \u7B49\u3002</li><li>RequestTemplate \u751F\u6210 Request\uFF0C\u7136\u540E\u5C06 Request \u4EA4\u7ED9 client \u5904\u7406\uFF0C\u8FD9\u4E2A client \u9ED8\u8BA4\u662F JDK \u7684 HTTPUrlConnection\uFF0C\u4E5F\u53EF\u4EE5\u662F OKhttp\u3001Apache\u7684HTTPClient \u7B49\u3002</li><li>\u6700\u540E client \u5C01\u88C5\u6210 <code>LoadBaLanceClient</code>\uFF0C\u7ED3\u5408 ribbon \u8D1F\u8F7D\u5747\u8861\u5730\u53D1\u8D77\u8C03\u7528\u3002</li></ul><h2 id="\u5F00\u542F-gzip-\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F-gzip-\u538B\u7F29" aria-hidden="true">#</a> \u5F00\u542F GZIP \u538B\u7F29</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">feign</span><span class="token punctuation">:</span>
  <span class="token key atrule">compression</span><span class="token punctuation">:</span>
    <span class="token key atrule">request</span><span class="token punctuation">:</span> <span class="token comment">#\u8BF7\u6C42</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment">#\u5F00\u542F</span>
      <span class="token key atrule">mime-types</span><span class="token punctuation">:</span> text/xml<span class="token punctuation">,</span>application/xml<span class="token punctuation">,</span>application/json <span class="token comment">#\u5F00\u542F\u652F\u6301\u538B\u7F29\u7684MIME TYPE</span>
      <span class="token key atrule">min-request-size</span><span class="token punctuation">:</span> <span class="token number">2048</span> <span class="token comment">#\u914D\u7F6E\u538B\u7F29\u6570\u636E\u5927\u5C0F\u7684\u4E0B\u9650</span>
    <span class="token key atrule">response</span><span class="token punctuation">:</span> <span class="token comment">#\u54CD\u5E94</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment">#\u5F00\u542F\u54CD\u5E94GZIP\u538B\u7F29</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u7531\u4E8E\u5F00\u542F GZIP \u538B\u7F29\u4E4B\u540E\uFF0CFeign \u4E4B\u95F4\u7684\u8C03\u7528\u6570\u636E\u901A\u8FC7\u4E8C\u8FDB\u5236\u534F\u8BAE\u8FDB\u884C\u4F20\u8F93\uFF0C\u8FD4\u56DE\u503C\u9700\u8981\u4FEE\u6539\u4E3A <code>ResponseEntity&lt;byte[]&gt;</code> \u624D\u53EF\u4EE5\u6B63\u5E38\u663E\u793A\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u670D\u52A1\u4E4B\u95F4\u7684\u8C03\u7528\u4E71\u7801\u3002</p><h2 id="feign-\u5F00\u542F-okhttp" tabindex="-1"><a class="header-anchor" href="#feign-\u5F00\u542F-okhttp" aria-hidden="true">#</a> Feign \u5F00\u542F OkHttp</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">feign</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">config</span><span class="token punctuation">:</span>
      <span class="token key atrule">default</span><span class="token punctuation">:</span>
        <span class="token key atrule">connectTimeout</span><span class="token punctuation">:</span> <span class="token number">5000</span>
        <span class="token key atrule">readTimeout</span><span class="token punctuation">:</span> <span class="token number">5000</span>
        <span class="token key atrule">loggerLevel</span><span class="token punctuation">:</span> basic
  <span class="token key atrule">okhttp</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">hystrix</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,16);function p(t,l){return e}var o=n(s,[["render",p]]);export{o as default};
