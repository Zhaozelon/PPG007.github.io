import{_ as i,e as r}from"./app.5a40dfb9.js";var e="/Dubbo/configuration.jpg",a="/Dubbo/dubbo-config-override.jpg",o="/Dubbo/config-load.svg";const n={},d=r('<h1 id="dubbo-\u914D\u7F6E\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#dubbo-\u914D\u7F6E\u89C4\u5219" aria-hidden="true">#</a> Dubbo \u914D\u7F6E\u89C4\u5219</h1><h2 id="\u914D\u7F6E\u8986\u76D6\u4F18\u5148\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u8986\u76D6\u4F18\u5148\u7EA7" aria-hidden="true">#</a> \u914D\u7F6E\u8986\u76D6\u4F18\u5148\u7EA7</h2><p>\u4ECE Dubbo \u652F\u6301\u7684\u914D\u7F6E\u6765\u6E90\u8BF4\u8D77\uFF0C\u9ED8\u8BA4\u6709 6 \u79CD\u914D\u7F6E\u6765\u6E90\uFF1A</p><ul><li>JVM System Properties\uFF1AJVM -D \u53C2\u6570</li><li>System environment\uFF1AJVM \u8FDB\u7A0B\u7684\u73AF\u5883\u53D8\u91CF</li><li>Externalized Configuration\uFF1A\u5916\u90E8\u5316\u914D\u7F6E\uFF0C\u4ECE\u914D\u7F6E\u4E2D\u5FC3\u8BFB\u53D6</li><li>Application Configuration\uFF1A\u5E94\u7528\u7684\u5C5E\u6027\u914D\u7F6E\uFF0C\u4ECE Spring \u5E94\u7528\u7684 Environment \u4E2D\u63D0\u53D6 &quot;dubbo&quot; \u6253\u5934\u7684\u5C5E\u6027\u96C6\u3002</li><li>API\u3001XML\u3001\u6CE8\u89E3\u7B49\u7F16\u7A0B\u63A5\u53E3\u91C7\u96C6\u7684\u914D\u7F6E\u53EF\u4EE5\u88AB\u7406\u89E3\u6210\u914D\u7F6E\u6765\u6E90\u7684\u4E00\u79CD\uFF0C\u662F\u76F4\u63A5\u9762\u5411\u7528\u6237\u7F16\u7A0B\u7684\u914D\u7F6E\u91C7\u96C6\u65B9\u5F0F\u3002</li><li>\u4ECE classpath \u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6\uFF1Adubbo.properties\u3002</li></ul><p><img src="'+e+'" alt="\u8986\u76D6\u5173\u7CFB"></p><p>\u4ECE\u865A\u62DF\u673A\u53C2\u6570\u5230\u672C\u5730\u6587\u4EF6\u4F18\u5148\u7EA7\u4F9D\u6B21\u964D\u4F4E</p><h2 id="\u914D\u7F6E\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u539F\u5219" aria-hidden="true">#</a> \u914D\u7F6E\u539F\u5219</h2><ul><li>\u4F5C\u670D\u52A1\u7684\u63D0\u4F9B\u8005\uFF0C\u6BD4\u670D\u52A1\u4F7F\u7528\u65B9\u66F4\u6E05\u695A\u670D\u52A1\u6027\u80FD\u53C2\u6570\uFF0C\u5982\u8C03\u7528\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5408\u7406\u7684\u91CD\u8BD5\u6B21\u6570\uFF0C\u7B49\u7B49\u3002</li><li>\u5728 Provider \u914D\u7F6E\u540E\uFF0CConsumer \u4E0D\u914D\u7F6E\u5219\u4F1A\u4F7F\u7528 Provider \u7684\u914D\u7F6E\u503C\uFF0C\u5373 Provider \u914D\u7F6E\u53EF\u4EE5\u4F5C\u4E3A Consumer \u7684\u7F3A\u7701\u503C\u3002\u5426\u5219\uFF0CConsumer \u4F1A\u4F7F\u7528 Consumer \u7AEF\u7684\u5168\u5C40\u8BBE\u7F6E\uFF0C\u8FD9\u5BF9\u4E8E Provider \u4E0D\u53EF\u63A7\u7684\uFF0C\u5E76\u4E14\u5F80\u5F80\u662F\u4E0D\u5408\u7406\u7684\u3002</li></ul><h2 id="\u4E0D\u540C\u7C92\u5EA6\u914D\u7F6E\u7684\u8986\u76D6\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u540C\u7C92\u5EA6\u914D\u7F6E\u7684\u8986\u76D6\u5173\u7CFB" aria-hidden="true">#</a> \u4E0D\u540C\u7C92\u5EA6\u914D\u7F6E\u7684\u8986\u76D6\u5173\u7CFB</h2><p><img src="'+a+'" alt="dubbo-config-override"></p><ul><li>\u65B9\u6CD5\u7EA7\u4F18\u5148\uFF0C\u63A5\u53E3\u7EA7\u6B21\u4E4B\uFF0C\u5168\u5C40\u914D\u7F6E\u518D\u6B21\u4E4B\u3002</li><li>\u5982\u679C\u7EA7\u522B\u4E00\u6837\uFF0C\u5219\u6D88\u8D39\u65B9\u4F18\u5148\uFF0C\u63D0\u4F9B\u65B9\u6B21\u4E4B\u3002</li></ul><h2 id="\u914D\u7F6E\u52A0\u8F7D\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u52A0\u8F7D\u6D41\u7A0B" aria-hidden="true">#</a> \u914D\u7F6E\u52A0\u8F7D\u6D41\u7A0B</h2><p><img src="'+o+'" alt="\u914D\u7F6E\u52A0\u8F7D\u6D41\u7A0B"></p>',13);function t(l,s){return d}var h=i(n,[["render",t]]);export{h as default};
