import{_ as n,e as a}from"./app.5a40dfb9.js";const s={},p=a(`<h1 id="sleuth" tabindex="-1"><a class="header-anchor" href="#sleuth" aria-hidden="true">#</a> Sleuth</h1><p>Sleuth \u7528\u4E8E\u94FE\u8DEF\u76D1\u63A7\uFF0C\u7ED3\u5408 zipkin \u642D\u5EFA\u53EF\u89C6\u5316\u76D1\u63A7\u9762\u677F\u3002</p><h2 id="\u4E0B\u8F7D-zipkin" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D-zipkin" aria-hidden="true">#</a> \u4E0B\u8F7D Zipkin</h2><p>\u4ECE SpringCloud F \u7248\u672C\u540E\u4E0D\u518D\u9700\u8981\u5355\u72EC\u642D\u5EFA Zipkin\uFF0C\u76F4\u63A5\u5728 Zipkin \u4E0B\u8F7D jar \u5305\u5373\u53EF\u3002</p><p>\u6267\u884C\u547D\u4EE4\uFF1A<code>java -jar zipkin-server-2.23.4-exec.jar</code> \u542F\u52A8 Zipkin\u3002</p><h2 id="\u5F15\u5165\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5165\u4F9D\u8D56" aria-hidden="true">#</a> \u5F15\u5165\u4F9D\u8D56</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-zipkin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.2.8.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> payment<span class="token punctuation">-</span>service
  <span class="token key atrule">zipkin</span><span class="token punctuation">:</span>
    <span class="token key atrule">base-url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//192.168.3.55<span class="token punctuation">:</span><span class="token number">9411</span>
  <span class="token key atrule">sleuth</span><span class="token punctuation">:</span>
    <span class="token key atrule">sampler</span><span class="token punctuation">:</span>
      <span class="token key atrule">probability</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># 0-1\u7684Float\u503C\uFF0C1\u8868\u793A\u5168\u90E8\u8DEF\u5F84\u90FD\u76D1\u63A7</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u65E0\u8BBA\u662F\u751F\u4EA7\u8005\u8FD8\u662F\u6D88\u8D39\u8005\u914D\u7F6E\u90FD\u76F8\u540C\u3002</p>`,10);function t(e,l){return p}var o=n(s,[["render",t]]);export{o as default};
