import{_ as n,e as a}from"./app.5a40dfb9.js";const s={},t=a(`<h1 id="\u6CE8\u89E3\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u89E3\u7684\u5C5E\u6027" aria-hidden="true">#</a> \u6CE8\u89E3\u7684\u5C5E\u6027</h1><p>\u6CE8\u89E3\u7684\u5C5E\u6027\u5176\u5B9E\u548C\u7C7B\u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF\u6709\u5F02\u66F2\u540C\u5DE5\u4E4B\u5904\uFF0C\u53EA\u662F\u6CE8\u89E3\u4E2D\u7684\u53D8\u91CF\u90FD\u662F\u6210\u5458\u53D8\u91CF\uFF08\u5C5E\u6027\uFF09\uFF0C\u5E76\u4E14<strong>\u6CE8\u89E3\u4E2D\u662F\u6CA1\u6709\u65B9\u6CD5</strong>\u7684\uFF0C\u53EA\u6709\u6210\u5458\u53D8\u91CF\uFF0C\u53D8\u91CF\u540D\u5C31\u662F\u4F7F\u7528\u6CE8\u89E3\u62EC\u53F7\u4E2D\u5BF9\u5E94\u7684\u53C2\u6570\u540D\uFF0C\u53D8\u91CF\u8FD4\u56DE\u503C\u6CE8\u89E3\u62EC\u53F7\u4E2D\u5BF9\u5E94\u53C2\u6570\u7C7B\u578B\u3002\u76F8\u4FE1\u8FD9\u4F1A\u4F60\u5E94\u8BE5\u4F1A\u5BF9\u4E0A\u9762\u7684\u4F8B\u5B50\u6709\u4E00\u4E2A\u66F4\u6DF1\u7684\u8BA4\u8BC6\u3002\u800C <code>@Repeatable</code> \u6CE8\u89E3\u4E2D\u7684\u53D8\u91CF\u5219\u7C7B\u578B\u5219\u662F\u5BF9\u5E94 Annotation\uFF08\u63A5\u53E3\uFF09\u7684\u6CDB\u578B Class\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>ANNOTATION_TYPE<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Repeatable</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Indicates the <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">&gt;</span></span>containing annotation type<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span> for the
     * repeatable annotation type.
     * <span class="token keyword">@return</span> the containing annotation type
     */</span>
    <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Annotation</span><span class="token punctuation">&gt;</span></span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,3);function e(p,o){return t}var l=n(s,[["render",e]]);export{l as default};
