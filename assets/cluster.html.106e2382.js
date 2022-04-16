import{_ as l,r as n,o as r,c,a,d as e,w as i,F as u,b as s,e as t}from"./app.5a40dfb9.js";const k={},d=a("h1",{id:"\u96C6\u7FA4",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u96C6\u7FA4","aria-hidden":"true"},"#"),s(" \u96C6\u7FA4")],-1),m=a("ul",null,[a("li",null,[s("\u4E09\u79CD\u96C6\u7FA4\u65B9\u5F0F\uFF1A "),a("ul",null,[a("li",null,"\u57FA\u4E8E sharedFileSystem \u5171\u4EAB\u6587\u4EF6\u7CFB\u7EDF\u3002"),a("li",null,"\u57FA\u4E8E JDBC\u3002"),a("li",null,"\u57FA\u4E8E\u53EF\u590D\u5236\u7684 LevelDB\u3002")])])],-1),v=a("h2",{id:"\u914D\u7F6E-zookeeper-leveldb-\u96C6\u7FA4",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u914D\u7F6E-zookeeper-leveldb-\u96C6\u7FA4","aria-hidden":"true"},"#"),s(" \u914D\u7F6E ZooKeeper+LevelDB \u96C6\u7FA4")],-1),b=s("\u9996\u5148\u8981\u6709\u4E00\u4E2A ZooKeeper \u96C6\u7FA4\uFF0C\u914D\u7F6E\u65B9\u6CD5\u53C2\u8003\uFF1A"),h=s("ZooKeeper"),q=t(`<ul><li>\u4F7F\u7528 ZooKeeper \u96C6\u7FA4\u6CE8\u518C\u6240\u6709\u7684 ActiveMQ Broker \u4F46\u53EA\u6709\u5176\u4E2D\u7684\u4E00\u4E2A Broker \u53EF\u4EE5\u63D0\u4F9B\u670D\u52A1\u5B83\u5C06\u88AB\u89C6\u4E3A Master,\u5176\u4ED6\u7684 Broker \u5904\u4E8E\u5F85\u673A\u72B6\u6001\u88AB\u89C6\u4E3A Slave\u3002\u5982\u679C Master \u56E0\u6545\u969C\u800C\u4E0D\u80FD\u63D0\u4F9B\u670D\u52A1 ZooKeeper \u4F1A\u4ECE Slave \u4E2D\u9009\u4E3E\u51FA\u4E00\u4E2A Broker \u5145\u5F53 Master\u3002</li><li>Slave \u8FDE\u63A5 Master \u5E76\u540C\u6B65\u4ED6\u4EEC\u7684\u5B58\u50A8\u72B6\u6001, <em>Slave\u4E0D\u63A5\u53D7\u5BA2\u6237\u7AEF\u8FDE\u63A5</em>\u3002\u6240\u6709\u7684\u5B58\u50A8\u64CD\u4F5C\u90FD\u5C06\u88AB\u590D\u5236\u5230\u8FDE\u63A5\u81F3 Master \u7684 Slaves\u3002\u5982\u679C Master \u5B95\u673A\u5F97\u5230\u4E86\u6700\u65B0\u66F4\u65B0\u7684 Slave \u4F1A\u6210\u4E3A Master\u3002\u6545\u969C\u8282\u70B9\u5728\u6062\u590D\u540E\u4F1A\u91CD\u65B0\u52A0\u5165\u5230\u96C6\u7FA4\u4E2D\u5E76\u63A5 Master \u8FDB\u5165 Slave \u6A21\u5F0F\u3002\u6240\u6709\u9700\u8981\u540C\u6B65\u7684\u6D88\u606F\u64CD\u4F5C\u90FD\u5C06\u7B49\u5F85\u5B58\u50A8\u72B6\u6001\u88AB\u590D\u5236\u5230\u5176\u4ED6\u6CD5\u5B9A\u8282\u70B9\u7684\u64CD\u4F5C\u5B8C\u6210\u624D\u80FD\u5B8C\u6210\u3002\u6240\u4EE5,\u5982\u679C\u4F60\u914D\u7F6E\u4E86 replicas=3,\u90A3\u4E48\u6CD5\u5B9A\u5927\u5C0F\u662F(3/2)+1=2\u3002 Master \u5C06\u4F1A\u5B58\u50A8\u5E76\u66F4\u65B0\u7136\u540E\u7B49\u5F85(2-1)=1 \u4E2A Save \u5B58\u50A8\u548C\u66F4\u65B0\u5B8C\u6210\u624D\u6C47\u62A5 success\u3002</li><li>\u6709\u4E00\u4E2A node \u8981\u4F5C\u4E3A\u89C2\u5BDF\u8005\u5B58\u5728\u3002\u5F53\u4E00\u4E2A\u65B0\u7684 Master \u88AB\u9009\u4E2D,\u4F60\u9700\u8981\u81F3\u5C11\u4FDD\u969C\u4E00\u4E2A\u6CD5\u5B9A node \u5728\u7EBF\u4EE5\u80FD\u591F\u627E\u5230\u62E5\u6709\u6700\u65B0\u72B6\u6001\u7684 node\u3002\u8FD9\u4E2A node \u624D\u53EF\u4EE5\u6210\u4E3A\u65B0\u7684 Master\u3002</li><li>\u56E0\u6B64,\u63A8\u8350\u8FD0\u884C\u81F3\u5C11 3 \u4E2A replica nodes \u4EE5\u9632\u6B62\u4E00\u4E2A node \u5931\u8D25\u540E\u670D\u52A1\u4E2D\u65AD\u3002</li></ul><h3 id="\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</h3><p>\u9996\u5148\u4FEE\u6539 <code>broker</code> \u6807\u7B7E\u7684 name \u5C5E\u6027\uFF0C\u96C6\u7FA4\u4E2D\u6240\u6709\u7684 ActiveMQ \u540C\u540D\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>broker</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://activemq.apache.org/schema/core<span class="token punctuation">&quot;</span></span> <span class="token attr-name">brokerName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ppgmq<span class="token punctuation">&quot;</span></span> <span class="token attr-name">dataDirectory</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${activemq.data}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4FEE\u6539\u6301\u4E45\u5316\u914D\u7F6E\uFF0C\u8FD9\u91CC\u6240\u6709 ActiveMQ \u90FD\u76F8\u540C\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>persistenceAdapter</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>replicatedLevelDB</span>
    <span class="token attr-name">directory</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${activemq.data}/leveldb<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">replicas</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tcp://0.0.0.0:61619<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">zkAddress</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>150.158.153.216:2181,39.107.112.172:2181,115.28.211.227:2181<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>local_disk<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">zkPath</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/activemq/leveldb-stores<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>persistenceAdapter</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>replicas\uFF1A\u96C6\u7FA4\u4E2D\u5C06\u5B58\u5728\u7684\u8282\u70B9\u6570\u3002\u81F3\u5C11 (replicas/2)+1 \u4E2A\u8282\u70B9\u5FC5\u987B\u5728\u7EBF\u4EE5\u907F\u514D\u670D\u52A1\u4E2D\u65AD\u3002</li><li>bind\uFF1A\u5F53\u8FD9\u4E2A\u8282\u70B9\u6210\u4E3A\u4E3B\u8282\u70B9\u65F6\uFF0C\u5B83\u5C06\u7ED1\u5B9A\u914D\u7F6E\u7684\u5730\u5740\u548C\u7AEF\u53E3\u6765\u4E3A\u590D\u5236\u534F\u8BAE\u63D0\u4F9B\u670D\u52A1\u3002</li><li>zkAddress\uFF1AZooKeeper \u670D\u52A1\u5668\u7684\u9017\u53F7\u5206\u9694\u5217\u8868\u3002</li><li>zkPath\uFF1A Zookeeper \u4E0A\u5B58\u653E MQServer \u4E3B\u4ECE\u9009\u4E3E\u4FE1\u606F\u7684\u8282\u70B9\u4F4D\u7F6E\u3002</li><li>sync\uFF1AMQ \u8282\u70B9\u95F4\u7684\u6570\u636E\u540C\u6B65\u7B56\u7565\u3002\u53EF\u9009\u9879\u5982\u4E0B\uFF1Alocal_mem\u3001local_disk\u3001remote_mem\u3001remote_disk\u3001quorum_mem\u3001quorum_disk\uFF1B\u5EFA\u8BAE\uFF1Aquorum_mem\u3002</li></ul>`,7),_={href:"https://activemq.apache.org/replicated-leveldb-store",target:"_blank",rel:"noopener noreferrer"},g=s("\u914D\u7F6E\u53C2\u8003"),M=t(`<h3 id="\u542F\u52A8\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u96C6\u7FA4" aria-hidden="true">#</a> \u542F\u52A8\u96C6\u7FA4</h3><p>\u5206\u522B\u542F\u52A8\u4E09\u53F0\u670D\u52A1\u5668\u4E0A\u7684 ActiveMQ \u5373\u53EF\u3002</p><h3 id="\u4F7F\u7528\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u96C6\u7FA4" aria-hidden="true">#</a> \u4F7F\u7528\u96C6\u7FA4</h3><p>\u5BF9\u4E8E Java \u7A0B\u5E8F\uFF0C\u53EA\u8981\u4FEE\u6539\u8BBF\u95EEURL\u5373\u53EF</p><p>ActiveMQ \u7684\u5BA2\u6237\u7AEF\u53EA\u80FD\u8BBF\u95EE Master \u7684 Broker\uFF0C\u5176\u4ED6\u5904\u4E8E Slave\u7684Broker \u4E0D\u80FD\u8BBF\u95EE\uFF0C\u6240\u4EE5\u5BA2\u6237\u7AEF\u8FDE\u63A5\u7684 Broker \u5E94\u8BE5\u4F7F\u7528 <strong>failover \u534F\u8BAE</strong>(\u8F6C\u79FB\u5931\u8D25)</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> URL<span class="token operator">=</span><span class="token string">&quot;failover:(&quot;</span> <span class="token operator">+</span>
        <span class="token string">&quot;tcp://39.107.112.172:61616&quot;</span> <span class="token operator">+</span>
        <span class="token string">&quot;,tcp://150.158.153.216:61616&quot;</span> <span class="token operator">+</span>
        <span class="token string">&quot;,tcp://115.28.211.227:61616)&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898" aria-hidden="true">#</a> \u95EE\u9898</h3><ul><li>ActiveMQ \u7684\u5BA2\u6237\u7AEF\u53EA\u80FD\u8BBF\u95EE Master \u7684 Broker\uFF0C\u5176\u4ED6\u5904\u4E8E Slave \u7684 Broker \u4E0D\u80FD\u8BBF\u95EE\uFF0C\u6240\u4EE5\u5BA2\u6237\u7AEF\u8FDE\u63A5\u7684 Broker \u5E94\u8BE5\u4F7F\u7528 <strong>failover \u534F\u8BAE</strong>(\u8F6C\u79FB\u5931\u8D25)\u3002</li><li>\u5F53\u4E00\u4E2A ActiveMQ \u8282\u70B9\u6302\u6389\u6216\u8005\u4E00\u4E2A Zookeeper \u8282\u70B9\u6302\u6389\uFF0CActiveMQ \u670D\u52A1\u4F9D\u7136\u6B63\u5E38\u8FD0\u8F6C\uFF0C\u5982\u679C\u4EC5\u5269\u4E00\u4E2A ActiveMQ \u8282\u70B9\uFF0C\u7531\u4E8E\u4E0D\u80FD\u9009\u4E3E Master\uFF0C\u6240\u4EE5 ActiveMQ \u4E0D\u80FD\u6B63\u5E38\u8FD0\u884C\u3002</li><li>\u540C\u6837\u7684\uFF0C\u5982\u679C Zookeeper \u4EC5\u5269\u4E00\u4E2A\u8282\u70B9\u6D3B\u52A8\uFF0C\u4E0D\u7BA1 ActiveMQ \u5404\u8282\u70B9\u5B58\u6D3B\uFF0CActiveMQ \u4E5F\u4E0D\u80FD\u6B63\u5E38\u63D0\u4F9B\u670D\u52A1\u3002(ActiveMQ \u96C6\u7FA4\u7684\u9AD8\u53EF\u7528\uFF0C\u4F9D\u8D56\u4E8E Zookeeper \u96C6\u7FA4\u7684\u9AD8\u53EF\u7528)\u3002</li><li>\u5982\u679C\u4F7F\u7528 sync \u8BBE\u7F6E\u4E3A local_disk\uFF0C\u5982\u679C\u5411\u96C6\u7FA4\u6295\u9012\u4E86\u6D88\u606F\uFF0C\u90A3\u4E48\u5728\u505C\u6B62\u96C6\u7FA4\u53C8\u91CD\u542F\u540E\u96C6\u7FA4\u5C06\u4E0D\u53EF\u7528\uFF0C\u56E0\u4E3A levelDB \u7684\u810F\u6570\u636E\u95EE\u9898\uFF0C\u9700\u8981\u5220\u9664\u6240\u6709 ActiveMQ \u7684 data \u76EE\u5F55\u4E0B\u7684 leveldb \u6587\u4EF6\u5939\u3002</li></ul>`,8);function x(f,A){const o=n("RouterLink"),p=n("ExternalLinkIcon");return r(),c(u,null,[d,m,v,a("p",null,[b,e(o,{to:"/ZooKeeper.html"},{default:i(()=>[h]),_:1})]),q,a("p",null,[a("a",_,[g,e(p)])]),M],64)}var Q=l(k,[["render",x]]);export{Q as default};
