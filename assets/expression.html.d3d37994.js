import{_ as n,e as s}from"./app.5a40dfb9.js";var a="/\u8BBE\u8BA1\u6A21\u5F0F/image-20210921222535749.png";const p={},t=s(`<h1 id="\u89E3\u91CA\u5668\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA\u5668\u6A21\u5F0F" aria-hidden="true">#</a> \u89E3\u91CA\u5668\u6A21\u5F0F</h1><h2 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h2><p>\u7ED9\u5B9A\u4E00\u95E8\u8BED\u8A00\uFF0C\u5B9A\u4E49\u5B83\u7684\u6587\u6CD5\u7684\u4E00\u79CD\u8868\u793A\uFF0C\u5E76\u5B9A\u4E49\u4E00\u4E2A\u89E3\u91CA\u5668\uFF0C\u8BE5\u89E3\u91CA\u5668\u4F7F\u7528\u8BE5\u8868\u793A\u6765\u89E3\u91CA\u8BED\u8A00\u4E2D\u7684\u53E5\u5B50\u3002</p><h2 id="\u89D2\u8272" tabindex="-1"><a class="header-anchor" href="#\u89D2\u8272" aria-hidden="true">#</a> \u89D2\u8272</h2><ul><li>AbstractExpression \u62BD\u8C61\u89E3\u91CA\u5668\u3002</li><li>TerminalExpression \u7EC8\u7ED3\u7B26\u8868\u8FBE\u5F0F\u3002</li><li>NonterminalExpression \u975E\u7EC8\u7ED3\u7B26\u8868\u8FBE\u5F0F\u3002</li><li>Context \u73AF\u5883\u89D2\u8272\u3002</li></ul><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p>\u62BD\u8C61\u89E3\u91CA\u5668\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Expression</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u89E3\u6790\u516C\u5F0F\u548C\u6570\u636E
     * <span class="token keyword">@param</span> <span class="token parameter">var</span> key\u4E3A\u516C\u5F0F\u53C2\u6570\uFF0Cvalue\u4E3A\u5177\u4F53\u7684\u6570\u5B57
     * <span class="token keyword">@return</span> \u6570\u5B57
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">int</span> <span class="token function">interpreter</span><span class="token punctuation">(</span><span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">var</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u53D8\u91CF\u89E3\u6790\u5668\uFF0C\u975E\u7EC8\u7ED3\u7B26\u8868\u8FBE\u5F0F\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VarExpression</span> <span class="token keyword">extends</span> <span class="token class-name">Expression</span><span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> key<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">VarExpression</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> key<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">interpreter</span><span class="token punctuation">(</span><span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">var</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">var</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u62BD\u8C61\u8FD0\u7B97\u7B26\u53F7\u89E3\u6790\u5668\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">SymbolExpression</span> <span class="token keyword">extends</span> <span class="token class-name">Expression</span><span class="token punctuation">{</span>

    <span class="token keyword">protected</span> <span class="token class-name">Expression</span> left<span class="token punctuation">;</span>

    <span class="token keyword">protected</span> <span class="token class-name">Expression</span> right<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">SymbolExpression</span><span class="token punctuation">(</span><span class="token class-name">Expression</span> left<span class="token punctuation">,</span> <span class="token class-name">Expression</span> right<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> left<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u52A0\u6CD5\u89E3\u6790\u5668\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AddExpression</span> <span class="token keyword">extends</span> <span class="token class-name">SymbolExpression</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">AddExpression</span><span class="token punctuation">(</span><span class="token class-name">Expression</span> left<span class="token punctuation">,</span> <span class="token class-name">Expression</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">interpreter</span><span class="token punctuation">(</span><span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">var</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">interpreter</span><span class="token punctuation">(</span><span class="token keyword">var</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token keyword">this</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">interpreter</span><span class="token punctuation">(</span><span class="token keyword">var</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u51CF\u6CD5\u89E3\u6790\u5668\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SubExpression</span> <span class="token keyword">extends</span> <span class="token class-name">SymbolExpression</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">SubExpression</span><span class="token punctuation">(</span><span class="token class-name">Expression</span> left<span class="token punctuation">,</span> <span class="token class-name">Expression</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">interpreter</span><span class="token punctuation">(</span><span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">var</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>left<span class="token punctuation">.</span><span class="token function">interpreter</span><span class="token punctuation">(</span><span class="token keyword">var</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>right<span class="token punctuation">.</span><span class="token function">interpreter</span><span class="token punctuation">(</span><span class="token keyword">var</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5C01\u88C5\u8FD0\u7B97\u5668\u7C7B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Calculator</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Expression</span> expression<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Calculator</span><span class="token punctuation">(</span><span class="token class-name">String</span> expStr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Expression</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars <span class="token operator">=</span> expStr<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Expression</span> left<span class="token punctuation">;</span>

        <span class="token class-name">Expression</span> right<span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> chars<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">switch</span> <span class="token punctuation">(</span>chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">case</span> <span class="token string">&#39;+&#39;</span><span class="token operator">:</span>
                    left<span class="token operator">=</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    right<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">VarExpression</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>chars<span class="token punctuation">[</span><span class="token operator">++</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">AddExpression</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token string">&#39;-&#39;</span><span class="token operator">:</span>
                    left<span class="token operator">=</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    right<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">VarExpression</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>chars<span class="token punctuation">[</span><span class="token operator">++</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SubExpression</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">default</span><span class="token operator">:</span>
                    stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">VarExpression</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>expression<span class="token operator">=</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">var</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>expression<span class="token punctuation">.</span><span class="token function">interpreter</span><span class="token punctuation">(</span><span class="token keyword">var</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>\u542F\u52A8\u7C7B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> expStr<span class="token operator">=</span><span class="token function">getExpStr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">var</span><span class="token operator">=</span><span class="token function">getValue</span><span class="token punctuation">(</span>expStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Calculator</span> calculator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Calculator</span><span class="token punctuation">(</span>expStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FD0\u7B97\u7ED3\u679C\u4E3A\uFF1A&quot;</span><span class="token operator">+</span>calculator<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token keyword">var</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u83B7\u53D6\u516C\u5F0F\u4E2D\u5404\u53D8\u91CF\u7684\u503C</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token class-name">String</span> expStr<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">char</span> c <span class="token operator">:</span> expStr<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>c<span class="token operator">!=</span><span class="token string">&#39;+&#39;</span><span class="token operator">&amp;&amp;</span>c<span class="token operator">!=</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>map<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token class-name">String</span> in<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>in<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> map<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	<span class="token comment">//\u83B7\u53D6\u516C\u5F0F</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getExpStr</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u8868\u8FBE\u5F0F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>\u8F93\u5165\u516C\u5F0F a+b-c\uFF0C\u7136\u540E\u5206\u522B\u8F93\u5165 a\u3001b\u3001c \u7684\u503C\uFF0C\u5F97\u51FA\u7ED3\u679C\u3002</p><p>\u8FC7\u7A0B\u89E3\u6790\uFF1A</p><ul><li><p>\u8C03\u7528 Calculator \u7684\u6784\u9020\u65B9\u6CD5\uFF0C\u56E0\u4E3A\u8868\u8FBE\u5F0F\u7684\u6700\u540E\u4E00\u4E2A\u8FD0\u7B97\u7B26\u4E3A\u51CF\u6CD5\uFF0C\u6240\u4EE5\u89E3\u6790\u540E\u7684 expression \u4E3A SubExpression\uFF0C\u8FD9\u4E2A\u51CF\u6CD5\u8868\u8FBE\u5F0F\u53C8\u7531\u4E00\u4E2A\u52A0\u6CD5\u8868\u8FBE\u5F0F\u548C\u53D8\u91CF\u8868\u8FBE\u5F0F\u7EC4\u6210\uFF1A</p><p><img src="`+a+'" alt="image-20210921222535749"></p></li><li><p>\u8C03\u7528 run \u65B9\u6CD5\u5F00\u59CB\u6267\u884C\u8FD0\u7B97\uFF0C\u5148\u662F\u8C03\u7528\u51CF\u6CD5\u8868\u8FBE\u5F0F\u7684 interpreter \u65B9\u6CD5\uFF0C\u7136\u540E\u53C8\u8C03\u7528\u52A0\u6CD5\u7684 interpreter \u65B9\u6CD5\u548C\u53D8\u91CF\u8868\u8FBE\u5F0F\u7684 interpreter \u65B9\u6CD5\uFF0C\u5C42\u5C42\u5411\u4E0B\uFF0C\u76F4\u5230\u4E24\u7AEF\u64CD\u4F5C\u6570\u90FD\u662F\u53D8\u91CF\u8868\u8FBE\u5F0F\u3002</p></li><li><p>\u5411\u4E0A\u8BA1\u7B97\u5F97\u51FA\u7ED3\u679C\u3002</p></li></ul><h2 id="\u89E3\u91CA\u5668\u6A21\u5F0F\u7684\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA\u5668\u6A21\u5F0F\u7684\u4F18\u70B9" aria-hidden="true">#</a> \u89E3\u91CA\u5668\u6A21\u5F0F\u7684\u4F18\u70B9</h2><p>\u6269\u5C55\u6027\u597D\uFF0C\u82E5\u9700\u8981\u4FEE\u6539\u8BED\u6CD5\u89C4\u5219\u53EA\u9700\u8981\u4FEE\u6539\u76F8\u5E94\u7684\u975E\u7EC8\u7ED3\u7B26\u8868\u8FBE\u5F0F\u5373\u53EF\uFF1B\u82E5\u6269\u5C55\u8BED\u6CD5\u5219\u53EA\u8981\u589E\u52A0\u975E\u7EC8\u7ED3\u7B26\u7C7B\u5373\u53EF\u3002</p><h2 id="\u89E3\u91CA\u5668\u6A21\u5F0F\u7684\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA\u5668\u6A21\u5F0F\u7684\u7F3A\u70B9" aria-hidden="true">#</a> \u89E3\u91CA\u5668\u6A21\u5F0F\u7684\u7F3A\u70B9</h2><ul><li>\u89E3\u91CA\u5668\u6A21\u5F0F\u4F1A\u5F15\u8D77\u7C7B\u81A8\u80C0\uFF1A\u6BCF\u4E2A\u8BED\u6CD5\u90FD\u8981\u4EA7\u751F\u4E00\u4E2A\u975E\u7EC8\u7ED3\u7B26\u8868\u8FBE\u5F0F\u3002</li><li>\u89E3\u91CA\u5668\u6A21\u5F0F\u91C7\u7528\u9012\u5F52\u8C03\u7528\u65B9\u6CD5\uFF1A\u8C03\u8BD5\u590D\u6742\u3002</li><li>\u6548\u7387\u95EE\u9898\uFF1A\u4F7F\u7528\u4E86\u5927\u91CF\u5FAA\u73AF\u548C\u9012\u5F52\u3002</li></ul><h2 id="\u89E3\u91CA\u5668\u6A21\u5F0F\u7684\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA\u5668\u6A21\u5F0F\u7684\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u89E3\u91CA\u5668\u6A21\u5F0F\u7684\u4F7F\u7528\u573A\u666F</h2><ul><li>\u91CD\u590D\u53D1\u751F\u7684\u95EE\u9898\u53EF\u4EE5\u4F7F\u7528\u89E3\u91CA\u5668\u6A21\u5F0F\u3002</li><li>\u4E00\u4E2A\u7B80\u5355\u8BED\u6CD5\u9700\u8981\u89E3\u91CA\u7684\u573A\u666F\u3002</li></ul><h2 id="\u89E3\u91CA\u5668\u6A21\u5F0F\u7684\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA\u5668\u6A21\u5F0F\u7684\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u89E3\u91CA\u5668\u6A21\u5F0F\u7684\u6CE8\u610F\u4E8B\u9879</h2><p>\u5C3D\u91CF\u4E0D\u8981\u5728\u91CD\u8981\u6A21\u5757\u4E2D\u4F7F\u7528\u89E3\u91CA\u5668\u6A21\u5F0F\uFF0C\u7EF4\u62A4\u6210\u672C\u9AD8\u3002</p>',31);function e(c,o){return t}var u=n(p,[["render",e]]);export{u as default};
