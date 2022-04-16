import{_ as n,e as s}from"./app.5a40dfb9.js";const a={},e=s(`<h1 id="druid" tabindex="-1"><a class="header-anchor" href="#druid" aria-hidden="true">#</a> Druid</h1><h2 id="\u57FA\u672C\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u914D\u7F6E" aria-hidden="true">#</a> \u57FA\u672C\u914D\u7F6E</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306<span class="token punctuation">?</span>serverTimezone=UTC
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> com.alibaba.druid.pool.DruidDataSource
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u5728-spring-\u914D\u7F6E-druid" tabindex="-1"><a class="header-anchor" href="#\u5728-spring-\u914D\u7F6E-druid" aria-hidden="true">#</a> \u5728 Spring \u914D\u7F6E Druid</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DruidConfig</span> <span class="token punctuation">{</span>

    <span class="token comment">// \u6CE8\u518CDruidDataSource\u5230IOC\uFF0C\u901A\u8FC7yml\u8BFB\u53D6\u914D\u7F6E</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;spring.datasource.druid&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">DruidDataSource</span> <span class="token function">druidDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DruidDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u6DFB\u52A0\u76D1\u63A7\u7684servlet\uFF0C\u5BF9\u5E94\u5730\u5740\u4E3A/druid</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">ServletRegistrationBean</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">StatViewServlet</span><span class="token punctuation">&gt;</span></span> <span class="token function">registrationBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">ServletRegistrationBean</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">StatViewServlet</span><span class="token punctuation">&gt;</span></span> servletRegistrationBean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServletRegistrationBean</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">StatViewServlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;/druid/*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> stringStringHashMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u8BBE\u7F6E\u7528\u6237\u540D\u3001\u5BC6\u7801\u3001\u7981\u6B62\u8BBF\u95EE\u7684ip\u7B49\u4FE1\u606F</span>
        stringStringHashMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;loginUsername&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stringStringHashMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;loginPassword&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        stringStringHashMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;ppg&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;112.126.61.130&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        servletRegistrationBean<span class="token punctuation">.</span><span class="token function">setInitParameters</span><span class="token punctuation">(</span>stringStringHashMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> servletRegistrationBean<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="druid-\u76D1\u63A7\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#druid-\u76D1\u63A7\u914D\u7F6E" aria-hidden="true">#</a> druid \u76D1\u63A7\u914D\u7F6E</h2><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u901A\u8FC7 yaml \u914D\u7F6E\u65F6\uFF0C\u82E5 <code>@ConfigurationProperties</code> \u4E2D\u7684 prefix \u4E3A <code>spring.datasource</code> \u5219\u4E0D\u9700\u8981\u5728 yaml \u4E2D\u6DFB\u52A0 <code>druid:*</code>\uFF0C\u82E5\u4E3A properties \u914D\u7F6E\uFF0C\u9700\u8981\u4F7F\u7528 <code>spring.datasource.druid=</code> \u8FDB\u884C\u914D\u7F6E\u3002</p></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">druid</span><span class="token punctuation">:</span>
<span class="token comment">#\u521D\u59CB\u5316\u5927\u5C0F</span>
  <span class="token key atrule">initialSize</span><span class="token punctuation">:</span> <span class="token number">5</span>
  <span class="token comment">#\u6700\u5C0F\u503C</span>
  <span class="token key atrule">minIdle</span><span class="token punctuation">:</span> <span class="token number">5</span>
  <span class="token comment">#\u6700\u5927\u503C</span>
  <span class="token key atrule">maxActive</span><span class="token punctuation">:</span> <span class="token number">20</span>
  <span class="token comment">#\u6700\u5927\u7B49\u5F85\u65F6\u95F4\uFF0C\u914D\u7F6E\u83B7\u53D6\u8FDE\u63A5\u7B49\u5F85\u8D85\u65F6\uFF0C\u65F6\u95F4\u5355\u4F4D\u90FD\u662F\u6BEB\u79D2ms</span>
  <span class="token key atrule">maxWait</span><span class="token punctuation">:</span> <span class="token number">60000</span>
  <span class="token comment">#\u914D\u7F6E\u95F4\u9694\u591A\u4E45\u624D\u8FDB\u884C\u4E00\u6B21\u68C0\u6D4B\uFF0C\u68C0\u6D4B\u9700\u8981\u5173\u95ED\u7684\u7A7A\u95F2\u8FDE\u63A5</span>
  <span class="token key atrule">timeBetweenEvictionRunsMillis</span><span class="token punctuation">:</span> <span class="token number">60000</span>
  <span class="token comment">#\u914D\u7F6E\u4E00\u4E2A\u8FDE\u63A5\u5728\u6C60\u4E2D\u6700\u5C0F\u751F\u5B58\u7684\u65F6\u95F4</span>
  <span class="token key atrule">minEvictableIdleTimeMillis</span><span class="token punctuation">:</span> <span class="token number">300000</span>
  <span class="token key atrule">validationQuery</span><span class="token punctuation">:</span> SELECT 1 FROM DUAL
  <span class="token key atrule">testWhileIdle</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">testOnBorrow</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">testOnReturn</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">poolPreparedStatements</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment"># \u914D\u7F6E\u76D1\u63A7\u7EDF\u8BA1\u62E6\u622A\u7684filters\uFF0C\u53BB\u6389\u540E\u76D1\u63A7\u754C\u9762sql\u65E0\u6CD5\u7EDF\u8BA1\uFF0C</span>
  <span class="token comment">#&#39;wall&#39;\u7528\u4E8E\u9632\u706B\u5899\uFF0CSpringBoot\u4E2D\u6CA1\u6709log4j\uFF0C\u6211\u6539\u6210\u4E86log4j2</span>
  <span class="token key atrule">filters</span><span class="token punctuation">:</span> stat<span class="token punctuation">,</span>wall<span class="token punctuation">,</span>log4j2
  <span class="token comment">#\u6700\u5927PSCache\u8FDE\u63A5</span>
  <span class="token key atrule">maxPoolPreparedStatementPerConnectionSize</span><span class="token punctuation">:</span> <span class="token number">20</span>
  <span class="token key atrule">useGlobalDataSourceStat</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment"># \u901A\u8FC7connectProperties\u5C5E\u6027\u6765\u6253\u5F00mergeSql\u529F\u80FD\uFF1B\u6162SQL\u8BB0\u5F55</span>
  <span class="token key atrule">connectionProperties</span><span class="token punctuation">:</span> druid.stat.mergeSql=true;druid.stat.slowSqlMillis=500
  <span class="token key atrule">username</span><span class="token punctuation">:</span> root
  <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
  <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306<span class="token punctuation">?</span>serverTimezone=UTC
  <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
  <span class="token comment"># # \u914D\u7F6EStatFilter</span>
  <span class="token comment"># web-stat-filter:</span>
  <span class="token comment">#   #\u9ED8\u8BA4\u4E3Afalse\uFF0C\u8BBE\u7F6E\u4E3Atrue\u542F\u52A8</span>
  <span class="token comment">#   enabled: true</span>
  <span class="token comment">#   url-pattern: &quot;/*&quot;</span>
  <span class="token comment">#   exclusions: &quot;*.js,*.gif,*.jpg,*.bmp,*.png,*.css,*.ico,/druid/*&quot;</span>
  <span class="token comment"># #\u914D\u7F6EStatViewServlet</span>
  <span class="token comment"># stat-view-servlet:</span>
  <span class="token comment">#   url-pattern: &quot;/druid/*&quot;</span>
  <span class="token comment">#   #\u5141\u8BB8\u90A3\u4E9Bip</span>
  <span class="token comment">#   allow: 127.0.0.1</span>
  <span class="token comment">#   login-username: admin</span>
  <span class="token comment">#   login-password: 123456</span>
  <span class="token comment">#   #\u7981\u6B62\u90A3\u4E9Bip</span>
  <span class="token comment">#   deny: 192.168.1.102</span>
  <span class="token comment">#   #\u662F\u5426\u53EF\u4EE5\u91CD\u7F6E</span>
  <span class="token comment">#   reset-enable: true</span>
  <span class="token comment">#   #\u542F\u7528</span>
  <span class="token comment">#   enabled: true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div>`,8);function p(t,l){return e}var o=n(a,[["render",p]]);export{o as default};
