import{_ as n,e as s}from"./app.5a40dfb9.js";const a={},p=s(`<h1 id="\u72B6\u6001\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u72B6\u6001\u6A21\u5F0F" aria-hidden="true">#</a> \u72B6\u6001\u6A21\u5F0F</h1><h2 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h2><p>\u5F53\u4E00\u4E2A\u5BF9\u8C61\u5185\u5728\u72B6\u6001\u6539\u53D8\u65F6\u5141\u8BB8\u5176\u6539\u53D8\u884C\u4E3A\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u770B\u8D77\u6765\u50CF\u6539\u53D8\u4E86\u5176\u7C7B\u3002</p><p>\u6838\u5FC3\u662F<strong>\u5C01\u88C5</strong>\uFF0C\u72B6\u6001\u7684\u53D8\u66F4\u5F15\u8D77\u884C\u4E3A\u7684\u53D8\u66F4\uFF0C\u4ECE\u5916\u90E8\u770B\u8D77\u6765\u5C31\u597D\u50CF\u8FD9\u4E2A\u5BF9\u8C61\u5BF9\u5E94\u7684\u7C7B\u53D1\u751F\u4E86\u6539\u53D8\u4E00\u6837\u3002</p><h2 id="\u89D2\u8272" tabindex="-1"><a class="header-anchor" href="#\u89D2\u8272" aria-hidden="true">#</a> \u89D2\u8272</h2><ul><li>State \u62BD\u8C61\u72B6\u6001\u89D2\u8272\uFF1A\u63A5\u53E3\u6216\u62BD\u8C61\u7C7B\uFF0C\u8D1F\u8D23\u5BF9\u8C61\u72B6\u6001\u5B9A\u4E49\uFF0C\u5E76\u4E14\u5C01\u88C5\u73AF\u5883\u89D2\u8272\u4EE5\u5B9E\u73B0\u72B6\u6001\u5207\u6362\u3002</li><li>ConcreteState \u5177\u4F53\u72B6\u6001\u89D2\u8272\uFF1A\u6BCF\u4E00\u4E2A\u5177\u4F53\u72B6\u6001\u5FC5\u987B\u5B8C\u6210\u4E24\u4E2A\u804C\u8D23\uFF0C\u672C\u72B6\u6001\u7684\u884C\u4E3A\u7BA1\u7406\u4EE5\u53CA\u8D8B\u5411\u72B6\u6001\u5904\u7406\uFF0C\u5373\u672C\u72B6\u6001\u8981\u505A\u7684\u4E8B\u548C\u5982\u4F55\u8FC7\u6E21\u5230\u5176\u4ED6\u72B6\u6001\u3002</li><li>Context \u73AF\u5883\u89D2\u8272\uFF1A\u5B9A\u4E49\u5BA2\u6237\u7AEF\u9700\u8981\u7684\u63A5\u53E3\uFF0C\u5E76\u4E14\u8D1F\u8D23\u5177\u4F53\u72B6\u6001\u7684\u5207\u6362\u3002</li></ul><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p>\u62BD\u8C61\u72B6\u6001\u89D2\u8272\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>

    <span class="token keyword">protected</span> <span class="token class-name">Context</span> context<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setContext</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>context <span class="token operator">=</span> context<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u884C\u4E3A1
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">handle1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u884C\u4E3A2
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">handle2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u62BD\u8C61\u73AF\u5883\u89D2\u8272\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Context</span><span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">State</span> STATE_1<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ConcreteState1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">State</span> STATE_2<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ConcreteState2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">State</span> currentState<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">State</span> <span class="token function">getCurrentState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> currentState<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCurrentState</span><span class="token punctuation">(</span><span class="token class-name">State</span> currentState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>currentState <span class="token operator">=</span> currentState<span class="token punctuation">;</span>
        <span class="token comment">//\u6BCF\u4E2A\u72B6\u6001\u90FD\u7ED1\u5B9A\u5F53\u524D\u73AF\u5883\u5BF9\u8C61</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>currentState<span class="token punctuation">.</span><span class="token function">setContext</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handle1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>currentState<span class="token punctuation">.</span><span class="token function">handle1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handle2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>currentState<span class="token punctuation">.</span><span class="token function">handle2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u5177\u4F53\u72B6\u6001\u89D2\u8272\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteState1</span> <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handle1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;is handling&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handle2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span><span class="token function">setCurrentState</span><span class="token punctuation">(</span><span class="token class-name">Context</span><span class="token punctuation">.</span>STATE_2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span><span class="token function">handle2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteState2</span> <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handle1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span><span class="token function">setCurrentState</span><span class="token punctuation">(</span><span class="token class-name">Context</span><span class="token punctuation">.</span>STATE_1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span><span class="token function">handle1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handle2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;is handling&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5728\u8C03\u7528\u81EA\u5DF1\u65E0\u6CD5\u5B8C\u6210\u7684\u65B9\u6CD5\u65F6\uFF0C\u8FDB\u884C\u72B6\u6001\u5207\u6362\u5E76\u8C03\u7528\u53EF\u7528\u5B9E\u73B0\u3002</p><p>\u542F\u52A8\u7C7B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Context</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Context</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        context<span class="token punctuation">.</span><span class="token function">setCurrentState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConcreteState1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        context<span class="token punctuation">.</span><span class="token function">handle1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        context<span class="token punctuation">.</span><span class="token function">handle2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u72B6\u6001\u6A21\u5F0F\u7684\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#\u72B6\u6001\u6A21\u5F0F\u7684\u4F18\u70B9" aria-hidden="true">#</a> \u72B6\u6001\u6A21\u5F0F\u7684\u4F18\u70B9</h2><ul><li>\u7ED3\u6784\u6E05\u6670\uFF0C\u907F\u514D\u4E86\u8FC7\u591A\u7684\u5206\u652F\u8BED\u53E5\u3002</li><li>\u9075\u5FAA\u8BBE\u8BA1\u539F\u5219\uFF0C\u5F88\u597D\u7684\u4F53\u73B0\u4E86\u5F00\u95ED\u539F\u5219\u548C\u5355\u4E00\u804C\u8D23\u539F\u5219\u3002</li><li>\u5C01\u88C5\u6027\u597D\uFF0C\u72B6\u6001\u53D8\u6362\u53D1\u751F\u5728\u7C7B\u7684\u5185\u90E8\u3002</li></ul><h2 id="\u72B6\u6001\u6A21\u5F0F\u7684\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u72B6\u6001\u6A21\u5F0F\u7684\u7F3A\u70B9" aria-hidden="true">#</a> \u72B6\u6001\u6A21\u5F0F\u7684\u7F3A\u70B9</h2><p>\u5B50\u7C7B\u592A\u591A\u5BB9\u6613\u51FA\u73B0\u7C7B\u81A8\u80C0\u3002</p><h2 id="\u72B6\u6001\u6A21\u5F0F\u7684\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u72B6\u6001\u6A21\u5F0F\u7684\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u72B6\u6001\u6A21\u5F0F\u7684\u4F7F\u7528\u573A\u666F</h2><ul><li>\u884C\u4E3A\u968F\u72B6\u6001\u6539\u53D8\u800C\u6539\u53D8\u7684\u573A\u666F,\u4F8B\u5982\u6743\u9650\u8BBE\u8BA1\u3002</li><li>\u6761\u4EF6\u3001\u5206\u652F\u5224\u65AD\u8BED\u53E5\u7684\u66FF\u4EE3\u8005\u3002</li></ul><h2 id="\u72B6\u6001\u6A21\u5F0F\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u72B6\u6001\u6A21\u5F0F\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u72B6\u6001\u6A21\u5F0F\u6CE8\u610F\u4E8B\u9879</h2><p>\u4F7F\u7528\u65F6\u5BF9\u8C61\u7684\u72B6\u6001\u6700\u597D\u4E0D\u8981\u8D85\u8FC7\u4E94\u4E2A\u3002</p>`,25);function t(e,c){return p}var l=n(a,[["render",t]]);export{l as default};
