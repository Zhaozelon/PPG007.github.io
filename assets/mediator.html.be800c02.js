import{_ as n,e as s}from"./app.5a40dfb9.js";const a={},p=s(`<h1 id="\u4E2D\u4ECB\u8005\u6A21\u5F0F-\u8C03\u505C\u8005\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u4ECB\u8005\u6A21\u5F0F-\u8C03\u505C\u8005\u6A21\u5F0F" aria-hidden="true">#</a> \u4E2D\u4ECB\u8005\u6A21\u5F0F\uFF08\u8C03\u505C\u8005\u6A21\u5F0F\uFF09</h1><h2 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h2><p>\u7528\u4E00\u4E2A\u4E2D\u4ECB\u5BF9\u8C61\u5C01\u88C5\u4E00\u7CFB\u5217\u7684\u5BF9\u8C61\u4EA4\u4E92\uFF0C\u4E2D\u4ECB\u8005\u4F7F\u5404\u5BF9\u8C61\u4E0D\u9700\u8981\u663E\u5F0F\u5730\u76F8\u4E92\u4F5C\u7528\uFF0C\u4ECE\u800C\u5B9E\u73B0\u89E3\u8026\u5408\u3002</p><h2 id="\u4E09\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#\u4E09\u90E8\u5206" aria-hidden="true">#</a> \u4E09\u90E8\u5206</h2><ul><li>Mediator \u62BD\u8C61\u4E2D\u4ECB\u8005\u89D2\u8272\u3002</li><li>Concrete Mediator \u5177\u4F53\u4E2D\u4ECB\u8005\u89D2\u8272\u3002</li><li>Colleague \u540C\u4E8B\u89D2\u8272\u3002</li></ul><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p>\u62BD\u8C61\u4E2D\u4ECB\u8005\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractMediator</span> <span class="token punctuation">{</span>

    <span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">AbstractColleague</span><span class="token punctuation">&gt;</span></span> colleagueList<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addColleague</span><span class="token punctuation">(</span><span class="token class-name">AbstractColleague</span> colleague<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>colleagueList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>colleague<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">AbstractColleague</span><span class="token punctuation">&gt;</span></span> <span class="token function">getColleagueList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> colleagueList<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractColleague</span><span class="token punctuation">&gt;</span></span> colleague<span class="token punctuation">,</span><span class="token class-name">Object</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u5E95\u5C42\u62BD\u8C61\u540C\u4E8B\u7C7B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractColleague</span> <span class="token punctuation">{</span>

    <span class="token keyword">protected</span> <span class="token class-name">AbstractMediator</span> mediator<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">AbstractColleague</span><span class="token punctuation">(</span><span class="token class-name">AbstractMediator</span> mediator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>mediator <span class="token operator">=</span> mediator<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u62BD\u8C61\u540C\u4E8B\u7C7B\u7684\u4E24\u4E2A\u62BD\u8C61\u5B50\u7C7B\uFF0C\u5206\u522B\u5177\u6709\u5B8C\u6210\u4E00\u4E2A\u529F\u80FD\u7684\u65B9\u6CD5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractInColleague</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractColleague</span><span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">AbstractInColleague</span><span class="token punctuation">(</span><span class="token class-name">AbstractMediator</span> mediator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>mediator<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">in</span><span class="token punctuation">(</span><span class="token keyword">int</span> number<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractOutColleague</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractColleague</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">AbstractOutColleague</span><span class="token punctuation">(</span><span class="token class-name">AbstractMediator</span> mediator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>mediator<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">out</span><span class="token punctuation">(</span><span class="token keyword">int</span> number<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5B9E\u9645\u4E2D\u4ECB\u8005\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Mediator</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractMediator</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractColleague</span><span class="token punctuation">&gt;</span></span> colleague<span class="token punctuation">,</span><span class="token class-name">Object</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">AbstractColleague</span><span class="token punctuation">&gt;</span></span> colleagueList <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>colleagueList<span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> success<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">AbstractColleague</span> abstractColleague <span class="token operator">:</span> colleagueList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>abstractColleague<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>colleague<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">AbstractInColleague</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">isAssignableFrom</span><span class="token punctuation">(</span>colleague<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">AbstractInColleague</span><span class="token punctuation">)</span> abstractColleague<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">in</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    success<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">AbstractOutColleague</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">isAssignableFrom</span><span class="token punctuation">(</span>colleague<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">AbstractOutColleague</span><span class="token punctuation">)</span> abstractColleague<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">out</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    success<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token string">&quot;\u8C03\u7528\u5931\u8D25&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u5B9E\u9645\u540C\u4E8B\u7C7B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Colleague1</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractInColleague</span><span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">Colleague1</span><span class="token punctuation">(</span><span class="token class-name">AbstractMediator</span> mediator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>mediator<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>mediator<span class="token punctuation">.</span><span class="token function">addColleague</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">in</span><span class="token punctuation">(</span><span class="token keyword">int</span> number<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Colleague1\u6B63\u5728\u5904\u7406\u81EA\u5DF1\u7684\u4E8B\u52A1\uFF0C\u5E93\u5B58\u589E\u52A0:&quot;</span><span class="token operator">+</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depMethod</span><span class="token punctuation">(</span><span class="token keyword">int</span> number<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Colleague1\u6B63\u5728\u7533\u8BF7\u51CF\u5C11\u5E93\u5B58:&quot;</span><span class="token operator">+</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>mediator<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">Colleague2</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Colleague2</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractOutColleague</span><span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">Colleague2</span><span class="token punctuation">(</span><span class="token class-name">AbstractMediator</span> mediator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>mediator<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>mediator<span class="token punctuation">.</span><span class="token function">addColleague</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">out</span><span class="token punctuation">(</span><span class="token keyword">int</span> number<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Colleague2\u6B63\u5728\u5904\u7406\u81EA\u5DF1\u7684\u4E8B\u52A1\uFF0C\u5E93\u5B58\u51CF\u5C11:&quot;</span><span class="token operator">+</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depMethod</span><span class="token punctuation">(</span><span class="token keyword">int</span> number<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Colleague2\u7533\u8BF7\u589E\u52A0\u5E93\u5B58:&quot;</span><span class="token operator">+</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>mediator<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">Colleague1</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u542F\u52A8\u7C7B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Mediator</span> mediator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Mediator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Colleague1</span> colleague1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Colleague1</span><span class="token punctuation">(</span>mediator<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Colleague2</span> colleague2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Colleague2</span><span class="token punctuation">(</span>mediator<span class="token punctuation">)</span><span class="token punctuation">;</span>
        colleague1<span class="token punctuation">.</span><span class="token function">depMethod</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        colleague2<span class="token punctuation">.</span><span class="token function">depMethod</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u4E2D\u4ECB\u6A21\u5F0F\u7684\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u4ECB\u6A21\u5F0F\u7684\u4F18\u70B9" aria-hidden="true">#</a> \u4E2D\u4ECB\u6A21\u5F0F\u7684\u4F18\u70B9</h2><p>\u51CF\u5C11\u7C7B\u95F4\u7684\u4F9D\u8D56\uFF0C\u628A\u539F\u6709\u7684\u4E00\u5BF9\u591A\u7684\u4F9D\u8D56\u53D8\u6210\u4E86\u4E00\u5BF9\u4E00\u7684\u4F9D\u8D56\uFF0C\u540C\u4E8B\u7C7B\u53EA\u4F9D\u8D56\u4E2D\u4ECB\u8005\uFF0C\u51CF\u5C11\u4E86\u4F9D\u8D56\uFF0C\u964D\u4F4E\u4E86\u8026\u5408\u5EA6\u3002</p><h2 id="\u4E2D\u4ECB\u6A21\u5F0F\u7684\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u4ECB\u6A21\u5F0F\u7684\u7F3A\u70B9" aria-hidden="true">#</a> \u4E2D\u4ECB\u6A21\u5F0F\u7684\u7F3A\u70B9</h2><p>\u4E2D\u4ECB\u8005\u53EF\u80FD\u4F1A\u81A8\u80C0\u7684\u5F88\u5927\uFF0C\u800C\u4E14\u903B\u8F91\u590D\u6742\uFF0C\u540C\u4E8B\u7C7B\u8D8A\u591A\uFF0C\u4E2D\u4ECB\u8005\u5C31\u8D8A\u590D\u6742\u3002</p><h2 id="\u4E2D\u4ECB\u8005\u6A21\u5F0F\u7684\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u4ECB\u8005\u6A21\u5F0F\u7684\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u4E2D\u4ECB\u8005\u6A21\u5F0F\u7684\u4F7F\u7528\u573A\u666F</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u7C7B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\u662F\u5FC5\u7136\u5B58\u5728\u7684\u3002</p></div><p>\u4E2D\u4ECB\u8005\u6A21\u5F0F\u9002\u7528\u4E8E\u591A\u4E2A\u5BF9\u8C61\u4E4B\u95F4\u7D27\u5BC6\u8026\u5408\u7684\u60C5\u51B5\uFF0C\u4F8B\u5982\u7C7B\u56FE\u4E2D\u51FA\u73B0\u4E86\u7F51\u72B6\u7ED3\u6784\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E2D\u4ECB\u8005\u6A21\u5F0F\u8FDB\u884C\u89E3\u8026\u3002</p>`,27);function t(e,c){return p}var l=n(a,[["render",t]]);export{l as default};
