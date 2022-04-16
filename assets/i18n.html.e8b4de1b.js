import{_ as n,e as a}from"./app.5a40dfb9.js";var s="/SpringBoot/i18n.jpg",t="/SpringBoot/\u56FD\u9645\u5316\u914D\u7F6E.jpg";const p={},e=a('<h1 id="\u56FD\u9645\u5316" tabindex="-1"><a class="header-anchor" href="#\u56FD\u9645\u5316" aria-hidden="true">#</a> \u56FD\u9645\u5316</h1><h2 id="\u901A\u8FC7\u6D4F\u89C8\u5668\u81EA\u52A8\u8FDB\u884C\u56FD\u9645\u5316" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u6D4F\u89C8\u5668\u81EA\u52A8\u8FDB\u884C\u56FD\u9645\u5316" aria-hidden="true">#</a> \u901A\u8FC7\u6D4F\u89C8\u5668\u81EA\u52A8\u8FDB\u884C\u56FD\u9645\u5316</h2><p>\u5728 resources \u76EE\u5F55\u4E0B\u521B\u5EFA i18n \u76EE\u5F55\uFF0C\u5E76\u5728\u5176\u4E2D\u521B\u5EFA properties \u6587\u4EF6\uFF0C\u6587\u4EF6\u547D\u540D\u9700\u8981\u7B26\u5408\u4EE5\u4E0B\u89C4\u8303\uFF1A</p><p><img src="'+s+'" alt="\u56FD\u9645\u5316\u914D\u7F6E\u6587\u4EF6"></p><p>\u82E5\u540D\u79F0\u6B63\u786E\uFF0CIDEA\u4F1A\u63D0\u793A\u51FAResource Bundle\u76EE\u5F55(\u4E0D\u662F\u771F\u5B9E\u5B58\u5728\u7684)\u3002</p><p>IDEA\u4E2D\u53EF\u4EE5\u4F7F\u7528\u53EF\u89C6\u5316\u8FDB\u884C\u591A\u6587\u4EF6\u540C\u6B65\u7F16\u8F91\uFF1A <img src="'+t+`" alt="\u56FD\u9645\u5316\u914D\u7F6E\u6587\u4EF6"></p><p>\u4F7F\u7528\u65F6\u901A\u8FC7 thymeleaf \u7684 <code>#{}</code> \u8868\u8FBE\u5F0F\u83B7\u53D6\u8FD9\u4E9B\u5B9A\u4E49\u5728\u8D44\u6E90\u6587\u4EF6\u4E2D\u7684\u6570\u636E\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nav nav-subnav<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lyear_ui_buttons.html<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#{index.button}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lyear_ui_cards.html<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#{index.card}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lyear_ui_grid.html<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#{index.grille}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u683C\u6805<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lyear_ui_icons.html<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#{index.icon}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u56FE\u6807<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lyear_ui_tables.html<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#{index.table}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u8868\u683C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lyear_ui_modals.html<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#{index.modal_box}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6A21\u6001\u6846<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lyear_ui_tooltips_popover.html<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#{index.tips}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u63D0\u793A / \u5F39\u51FA\u6846<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lyear_ui_alerts.html<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#{index.warning}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u8B66\u544A\u6846<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lyear_ui_pagination.html<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#{index.paging}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5206\u9875<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lyear_ui_progress.html<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#{index.progress_bar}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u8FDB\u5EA6\u6761<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lyear_ui_tabs.html<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#{index.tab}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6807\u7B7E\u9875<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lyear_ui_typography.html<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#{index.typesetting}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6392\u7248<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lyear_ui_step.html<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#{index.step}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6B65\u9AA4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lyear_ui_other.html<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#{index.others}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5176\u4ED6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u4EE5\u4E0A\u65B9\u5F0F\u5728\u754C\u9762\u4E2D\u5E76\u6CA1\u6709\u53EF\u4EE5\u4FEE\u6539\u8BED\u8A00\u7684\u6309\u94AE\u6216\u94FE\u63A5\uFF0C\u53EA\u80FD\u901A\u8FC7\u8BBE\u7F6E\u6D4F\u89C8\u5668\u7684\u8BED\u8A00\uFF0C\u901A\u8FC7\u6D4F\u89C8\u5668\u53D1\u8D77\u8BF7\u6C42\u7684\u5934\u90E8\u4FE1\u606F\u51B3\u5B9A\u8FD4\u56DE\u4F55\u79CD\u8BED\u8A00\u8D44\u6E90\u3002</p><h2 id="\u6DFB\u52A0\u8F6C\u6362\u8BED\u8A00\u7684\u6309\u94AE" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u8F6C\u6362\u8BED\u8A00\u7684\u6309\u94AE" aria-hidden="true">#</a> \u6DFB\u52A0\u8F6C\u6362\u8BED\u8A00\u7684\u6309\u94AE</h2><h3 id="\u4E0D\u4F7F\u7528-ajax" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u4F7F\u7528-ajax" aria-hidden="true">#</a> \u4E0D\u4F7F\u7528 ajax</h3><p>\u9996\u5148\u81EA\u5B9A\u4E49\u533A\u57DF\u89E3\u6790\u5668\uFF0C\u5199\u4E00\u4E2A\u7C7B\u5B9E\u73B0 <code>LocaleResolver</code> \u63A5\u53E3\u5373\u53EF\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyLocaleResolver</span> <span class="token keyword">implements</span> <span class="token class-name">LocaleResolver</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Locale</span> <span class="token function">resolveLocale</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> language <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;language&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Locale</span> locale <span class="token operator">=</span> <span class="token class-name">Locale</span><span class="token punctuation">.</span><span class="token function">getDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>language<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> s <span class="token operator">=</span> language<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;_&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            locale<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Locale</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> locale<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setLocale</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> httpServletRequest<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> httpServletResponse<span class="token punctuation">,</span> <span class="token class-name">Locale</span> locale<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u5C06\u81EA\u5B9A\u4E49\u7C7B\u6CE8\u518C\u5230 IOC \u5BB9\u5668\u4E2D\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">MyLocaleResolver</span> <span class="token function">localeResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyLocaleResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u524D\u7AEF\u754C\u9762\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@{/test(language=<span class="token punctuation">&#39;</span>zh_CN<span class="token punctuation">&#39;</span>)}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4E2D\u6587<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@{/test(language=<span class="token punctuation">&#39;</span>en_US<span class="token punctuation">&#39;</span>)}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>English<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4EE5\u4E0A\u4EE3\u7801\u867D\u7136\u53EF\u4EE5\u5B9E\u73B0\u8BED\u8A00\u8F6C\u6362\uFF0C\u4F46\u662F\u9ED8\u8BA4\u8BED\u8A00\u5E76\u4E0D\u4F1A\u968F\u7740\u6D4F\u89C8\u5668\u8BED\u8A00\u6539\u53D8\u800C\u6539\u53D8\u3002</p><h3 id="\u4F7F\u7528-ajax" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-ajax" aria-hidden="true">#</a> \u4F7F\u7528 ajax</h3><p>\u533A\u57DF\u89E3\u6790\u5668\u6211\u4EEC\u76F4\u63A5\u9009\u62E9 <code>AcceptHeaderLocaleResolver</code>\uFF0C\u8FD9\u4E2A\u7C7B\u53EF\u4EE5\u901A\u8FC7 Request Header \u786E\u5B9A\u533A\u57DF\u3002</p><p>\u9996\u5148\u6CE8\u518C <code>AcceptHeaderLocaleResolver</code> \u5230 IOC \u5BB9\u5668\u4E2D\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">AcceptHeaderLocaleResolver</span> <span class="token function">localeResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">AcceptHeaderLocaleResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u524D\u7AEF\u754C\u9762\u8BBE\u7F6E\u4E24\u4E2A\u6309\u94AE\u5E76\u6DFB\u52A0\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u4F7F\u7528 ajax \u5411\u540E\u7AEF\u53D1\u8D77\u8BF7\u6C42\uFF0CbeforeSend \u4E2D\u8BBE\u7F6E Request Header \u4E2D\u7684 <code>Accept-Language</code> \u4E3A zh_CN \u6216 en_US\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>th</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.thymeleaf.org<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name"><span class="token namespace">th:</span>src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@{/webjars/jquery/3.5.1/jquery.js}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name"><span class="token namespace">th:</span>inline</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                url<span class="token operator">:</span><span class="token comment">/*[[@{/test}]]*/</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function-variable function">beforeSend</span><span class="token operator">:</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">xhr</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Accept-Language&quot;</span><span class="token punctuation">,</span>data<span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;body&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>

            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#{index.others}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">a</span><span class="token punctuation">(</span><span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\u4E2D\u6587<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">a</span><span class="token punctuation">(</span><span class="token string">&#39;en-US&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>English<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>`,24);function o(c,l){return e}var k=n(p,[["render",o]]);export{k as default};
