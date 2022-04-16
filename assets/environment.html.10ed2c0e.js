import{_ as n,r,o as c,c as d,a as e,d as a,F as s,b as o,e as i}from"./app.5a40dfb9.js";const _={},h=e("h1",{id:"\u73AF\u5883\u51C6\u5907",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u73AF\u5883\u51C6\u5907","aria-hidden":"true"},"#"),o(" \u73AF\u5883\u51C6\u5907")],-1),p=e("h2",{id:"\u6CE8\u518C\u4E2D\u5FC3-zookeeper",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6CE8\u518C\u4E2D\u5FC3-zookeeper","aria-hidden":"true"},"#"),o(" \u6CE8\u518C\u4E2D\u5FC3 ZooKeeper")],-1),l=o("\u4E0B\u8F7D\u5730\u5740\uFF1A"),b={href:"http://zookeeper.apache.org/releases.html",target:"_blank",rel:"noopener noreferrer"},m=o("ZooKeeper"),u=e("p",null,"\u4E0B\u8F7D\u5B8C\u6210\u540E\u89E3\u538B\uFF0C\u5728 conf \u76EE\u5F55\u4E0B\u6709 zoo.cfg \u6587\u4EF6\uFF0C\u5176\u4E2D\u4FDD\u5B58\u7740 ZooKeeper \u7684\u914D\u7F6E\uFF0C\u4F8B\u5982\u7AEF\u53E3\u53F7\u7B49\uFF0C\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u7AEF\u53E3\u53F7\u4E3A 2181\u3002",-1),f=e("p",null,[o("Windows \u73AF\u5883\u4E0B\u53CC\u51FB bin \u76EE\u5F55\u4E0B\u7684 "),e("code",null,"zkServer.cmd"),o(" \u5373\u53EF\u5F00\u542F ZooKeeper\u3002")],-1),k=e("h2",{id:"dubbo-\u53EF\u89C6\u5316\u9762\u677F",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dubbo-\u53EF\u89C6\u5316\u9762\u677F","aria-hidden":"true"},"#"),o(" Dubbo \u53EF\u89C6\u5316\u9762\u677F")],-1),g=o("\u4E0B\u8F7D\u5730\u5740\uFF1A"),v={href:"https://github.com/apache/dubbo-admin/tree/master-0.2.0",target:"_blank",rel:"noopener noreferrer"},x=o("Dubbo-Admin"),j=o("\u3002"),z=i("<p>\u4EE5\u4E0B\u547D\u4EE4\u9700\u8981\u914D\u7F6E Maven \u73AF\u5883\u53D8\u91CF\u53CA Node.js \u73AF\u5883\u53D8\u91CF\uFF1A</p><p>\u9ED8\u8BA4\u5206\u652F\u6700\u65B0\u5DF2\u7ECF\u5207\u6362\u4E3A Vue \u524D\u540E\u7AEF\u5206\u79BB\u7248\uFF0Cmaster-0.2.0 \u5206\u652F\u4ECD\u7136\u662F\u4E0D\u5206\u79BB\u7248\uFF0C\u6B64\u5904\u65B9\u4FBF\u8D77\u89C1\u4F7F\u7528\u4E0D\u5206\u79BB\u7248\u672C\uFF0C\u5982\u679C\u8981\u4F7F\u7528\u524D\u540E\u7AEF\u5206\u79BB\uFF0C\u5219\u5C06\u540E\u53F0\u6253\u5305\u540E\u542F\u52A8\uFF0C\u5728\u524D\u7AEF\u4E2D\u8FD0\u884C <code>npm install</code> \u4E0B\u8F7D\u4F9D\u8D56\u7136\u540E\u8FD0\u884C <code>npm run dev</code> \u542F\u52A8\u524D\u7AEF\uFF0C\u8BBF\u95EE\u5BF9\u5E94\u7AEF\u53E3\u5373\u53EF\u3002</p><p>\u8FDB\u5165 dubbo-admin \u76EE\u5F55\u4E2D\uFF0C\u8FD0\u884C <code>mvn package</code> \u547D\u4EE4\uFF0C\u751F\u6210\u4E00\u4E2A target \u6587\u4EF6\u5939\uFF0C\u4F7F\u7528 <code>java -jar</code> \u547D\u4EE4\u8FD0\u884C\u5176\u4E2D jar \u5305\u5373\u53EF\u3002</p><p>\u8FDB\u5165 dubbo-monitor-simple \u6587\u4EF6\u5939\uFF0C\u8FD0\u884C <code>mvn package</code> \u547D\u4EE4\u751F\u6210 target \u6587\u4EF6\u5939\uFF0C\u89E3\u538B\u5176\u4E2D\u751F\u6210\u7684\u538B\u7F29\u5305\uFF0C\u8FDB\u5165\u89E3\u538B\u540E\u7684\u76EE\u5F55\uFF0C\u5176\u4E2D config \u6587\u4EF6\u4E2D\u7684\u914D\u7F6E\u6587\u4EF6\u914D\u7F6E\u4E86\u76F8\u5173\u7AEF\u53E3\u7B49\uFF0C\u53EF\u81EA\u884C\u4FEE\u6539\uFF0C\u8FD9\u91CC\u4F7F\u7528\u9ED8\u8BA4\u5373\u53EF\uFF0C\u8FDB\u5165 bin \u76EE\u5F55\u8FD0\u884C <code>start.bat</code> \u5373\u53EF\u3002</p>",4);function N(V,K){const t=r("ExternalLinkIcon");return c(),d(s,null,[h,p,e("p",null,[l,e("a",b,[m,a(t)])]),u,f,k,e("p",null,[g,e("a",v,[x,a(t)]),j]),z],64)}var B=n(_,[["render",N]]);export{B as default};
