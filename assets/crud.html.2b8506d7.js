import{_ as s,e as n}from"./app.5a40dfb9.js";const a={},p=n(`<h1 id="ybatis-crud" tabindex="-1"><a class="header-anchor" href="#ybatis-crud" aria-hidden="true">#</a> ybatis-CRUD</h1><h2 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> select</h2><p>\u901A\u8FC7 xml \u914D\u7F6E\uFF1A</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li>resultMap\uFF1A\u8FD4\u56DE\u96C6\u3002</li><li>resultType\uFF1A\u8FD4\u56DE\u7C7B\u578B\u3002</li><li>parameterType\uFF1A\u53C2\u6570\u7C7B\u578B\u3002</li><li>parameterMap\uFF1A\u53C2\u6570\u96C6\u3002</li></ul></div><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getUserList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userMapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        select * from usertable;
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u901A\u8FC7\u6CE8\u89E3\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select * from usertable where id=#{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="update\u3001insert\u3001delete" tabindex="-1"><a class="header-anchor" href="#update\u3001insert\u3001delete" aria-hidden="true">#</a> update\u3001insert\u3001delete</h2><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u82E5\u6CA1\u6709\u5F00\u542F\u81EA\u52A8\u63D0\u4EA4\uFF0C\u5219\u589E\u5220\u6539\u9700\u8981\u63D0\u4EA4\u4E8B\u52A1\u624D\u80FD\u5B9E\u9645\u4FEE\u6539\u6570\u636E\u3002</p></div><p>\u5F00\u542F\u81EA\u52A8\u63D0\u4EA4\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">SqlSessionFactory</span> sqlSessionFactory<span class="token operator">=</span><span class="token class-name">MybatisUtil</span><span class="token punctuation">.</span><span class="token function">getSqlSessionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> sqlSessionFactory<span class="token punctuation">.</span><span class="token function">openSession</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u82E5\u4E0D\u5F00\u542F\u81EA\u52A8\u63D0\u4EA4\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Insert</span><span class="token punctuation">(</span><span class="token string">&quot;insert into usertable(id,username,password) values(#{id},#{username},#{password})&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">void</span> <span class="token function">addUser</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">SqlSessionFactory</span> sqlSessionFactory<span class="token operator">=</span><span class="token class-name">MybatisUtil</span><span class="token punctuation">.</span><span class="token function">getSqlSessionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> sqlSessionFactory<span class="token punctuation">.</span><span class="token function">openSession</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">UserMapper</span> mapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">UserMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">try</span><span class="token punctuation">{</span>
    mapper<span class="token punctuation">.</span><span class="token function">addUser</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">,</span><span class="token string">&quot;zch&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sqlSession<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5931\u8D25&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sqlSession<span class="token punctuation">.</span><span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
    sqlSession<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,14);function t(e,c){return p}var l=s(a,[["render",t]]);export{l as default};
