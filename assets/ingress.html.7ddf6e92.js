import{_ as t,r as c,o as l,c as o,a as n,d as e,F as r,b as s,e as p}from"./app.5a40dfb9.js";const u={},i=n("h1",{id:"ingress",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ingress","aria-hidden":"true"},"#"),s(" Ingress")],-1),k=n("p",null,"Ingress \u662F\u4ECE Kubernetes \u96C6\u7FA4\u5916\u90E8\u8BBF\u95EE\u96C6\u7FA4\u5185\u90E8\u670D\u52A1\u7684\u5165\u53E3\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0Cservice \u548C pod \u4EC5\u5728\u96C6\u7FA4\u5185\u90E8\u7F51\u7EDC\u53EF\u4EE5\u901A\u8FC7 IP \u6216\u8005\u57DF\u540D\u8BBF\u95EE\uFF0C",-1),b=n("p",null,"Ingress \u53EF\u4EE5\u914D\u7F6E\u4E0D\u540C\u7684\u8F6C\u53D1\u89C4\u5219\u4EE5\u6839\u636E\u4E0D\u540C\u7684\u89C4\u5219\u8BBE\u7F6E\u8BBF\u95EE\u96C6\u7FA4\u5185\u4E0D\u540C\u7684 Service \u6240\u5BF9\u5E94\u7684\u540E\u7AEF Pods\u3002",-1),m=n("p",null,"\u5355\u7EAF\u7684\u521B\u5EFA Ingress \u6CA1\u6709\u610F\u4E49\uFF0C\u9700\u8981\u4E00\u4E2A Ingress Controller \u6765\u5B9E\u73B0 Ingress",-1),d=s("Kubernetes \u9ED8\u8BA4\u6CA1\u6709 Ingress Controller\uFF0C\u5B98\u65B9\u7EF4\u62A4\u7684\u662F AWS\u3001GCE \u548C Nginx Ingress Controller\uFF0C\u53EF\u4EE5\u5728"),g={href:"https://kubernetes.io/zh/docs/concepts/services-networking/ingress-controllers/",target:"_blank",rel:"noopener noreferrer"},h=s("\u8FD9\u91CC"),y=s("\u627E\u5230\u6240\u6709\u7684\u53EF\u4EE5\u9009\u62E9\u7684\u63A7\u5236\u5668\uFF0C\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528 Nginx Ingress Controller\u3002"),_=p(`<p>\u76F4\u63A5\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u5B89\u88C5\u5373\u53EF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.2/deploy/static/provider/cloud/deploy.yaml
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4F46\u662F\u9700\u8981\u6CE8\u610F\uFF0C\u9ED8\u8BA4\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u6709\u4E00\u4E2A externalTrafficPolicy\uFF0C\u8FD9\u6837\u7684\u8BDD\u5916\u90E8\u53EA\u6709\u8BBF\u95EE Ingress Controller \u88AB\u5206\u914D\u5230\u7684\u8282\u70B9\u7684 IP \u53CA \u7AEF\u53E3\u624D\u80FD\u8BBF\u95EE\uFF0C\u6CE8\u91CA\u6389\u5373\u53EF\u4ECE\u96C6\u7FA4\u4EFB\u610F\u4E00\u4E2A\u8282\u70B9\u8BBF\u95EE\u3002</p><p>\u5B89\u88C5\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u547D\u4EE4\u83B7\u53D6\u7AEF\u53E3\u7684\u6620\u5C04\u5173\u7CFB\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl get <span class="token function">service</span> -n ingress-nginx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CNginx Ingress Controller \u7684 80 \u53CA 443 \u7AEF\u53E3\u4F1A\u88AB\u968F\u673A\u5206\u914D\u4E24\u4E2A\u7AEF\u53E3\u6620\u5C04\uFF0C\u5728\u5916\u90E8\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E24\u4E2A\u7AEF\u53E3\u8FDB\u884C\u8BBF\u95EE\u3002</p><h2 id="\u521B\u5EFA-ingress-\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-ingress-\u8DEF\u7531" aria-hidden="true">#</a> \u521B\u5EFA Ingress \u8DEF\u7531</h2><p>\u4F7F\u7528\u4E0B\u9762\u7684\u914D\u7F6E\u6587\u4EF6\u521B\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684 http \u540E\u53F0 pod \u7684\u8DEF\u7531\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Ingress
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>http<span class="token punctuation">-</span>demo
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> example
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ingressClassName</span><span class="token punctuation">:</span> nginx <span class="token comment"># \u5236\u5B9A\u4F7F\u7528 Nginx Ingress Controller</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> client.com <span class="token comment"># \u5982\u679C\u4F7F\u7528\u8FD9\u4E2A\u57DF\u540D\u8BBF\u95EE\u96C6\u7FA4\uFF0C\u90A3\u4E48\u4F1A\u5BF9\u5E94\u5230\u4E0B\u9762\u7684\u8DEF\u5F84</span>
      <span class="token key atrule">http</span><span class="token punctuation">:</span>
        <span class="token key atrule">paths</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">path</span><span class="token punctuation">:</span> /client <span class="token comment"># \u5982\u679C\u8DEF\u5F84\u4E3A /client \u5C31\u8FDB\u5165\u4E0B\u9762\u7684\u8FD9\u4E2A client-service\uFF0C\u4F8B\u5982\uFF1Ahttp://client.com/client</span>
            <span class="token key atrule">pathType</span><span class="token punctuation">:</span> Prefix <span class="token comment"># \u524D\u7F00\u5339\u914D\u6A21\u5F0F</span>
            <span class="token key atrule">backend</span><span class="token punctuation">:</span>
              <span class="token key atrule">service</span><span class="token punctuation">:</span>
                <span class="token key atrule">name</span><span class="token punctuation">:</span> client<span class="token punctuation">-</span>service <span class="token comment"># \u670D\u52A1\u540D</span>
                <span class="token key atrule">port</span><span class="token punctuation">:</span>
                  <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">8000</span> <span class="token comment"># client-service \u7684\u7AEF\u53E3</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u5E94\u7528\u540E\uFF0C\u5373\u53EF\u901A\u8FC7 Ingress Controller 80 \u7AEF\u53E3\u6620\u5C04\u7684\u7AEF\u53E3\u4ECE\u96C6\u7FA4\u5916\u90E8\u53D1\u8D77 http \u8BF7\u6C42\u4E86\u3002</p><h2 id="\u8DEF\u5F84\u91CD\u5199" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u5F84\u91CD\u5199" aria-hidden="true">#</a> \u8DEF\u5F84\u91CD\u5199</h2><p>\u4FEE\u6539 Ingress \u8D44\u6E90\u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Ingress
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>http<span class="token punctuation">-</span>demo
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> example
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">nginx.ingress.kubernetes.io/rewrite-target</span><span class="token punctuation">:</span> /$1
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ingressClassName</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> client.com
      <span class="token key atrule">http</span><span class="token punctuation">:</span>
        <span class="token key atrule">paths</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">path</span><span class="token punctuation">:</span> /client(/<span class="token punctuation">|</span>$)(.<span class="token important">*)</span>
            <span class="token key atrule">pathType</span><span class="token punctuation">:</span> Prefix
            <span class="token key atrule">backend</span><span class="token punctuation">:</span>
              <span class="token key atrule">service</span><span class="token punctuation">:</span>
                <span class="token key atrule">name</span><span class="token punctuation">:</span> client<span class="token punctuation">-</span>service
                <span class="token key atrule">port</span><span class="token punctuation">:</span>
                  <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">8000</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>Nginx Ingress Controller \u7684\u9AD8\u7EA7\u529F\u80FD\u90FD\u53EF\u4EE5\u901A\u8FC7\u6DFB\u52A0 annotations \u5B9E\u73B0\uFF0C\u4E0A\u9762\u6DFB\u52A0\u4E86\u4E00\u4E2A\u91CD\u5199\u7684 annotation\uFF0C\u8FD9\u6837\u6240\u6709 path \u4E2D\u88AB (.*) \u6355\u83B7\u7684\u5185\u5BB9\u90FD\u4F1A\u88AB\u66FF\u6362\u5230 annotation \u4E2D\u8BBE\u7F6E\u7684 $n \u4E2D\uFF0C\u4F8B\u5982\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u91CD\u5B9A\u5411\u7684\u7ED3\u679C\u793A\u4F8B\u5982\u4E0B\uFF1A</p><ul><li>client.com/client rewrites to client.com/\u3002</li><li>client.com/client/ rewrites to client.com/\u3002</li><li>client.com/client/new rewrites to client.com/new\u3002</li></ul>`,15),v={class:"custom-container tip"},x=n("p",{class:"custom-container-title"},"TIP",-1),f=s("\u5173\u4E8E Nginx Ingress \u7684 annotations \u53CA\u5176\u793A\u4F8B\u53EF\u89C1"),N={href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations",target:"_blank",rel:"noopener noreferrer"},C=s("\u8FD9\u91CC"),I=s("\u3002"),q=s("\u4E00\u4E9B\u9AD8\u7EA7\u7528\u6CD5\u793A\u4F8B\u4E5F\u53EF\u4EE5\u53C2\u8003"),w={href:"https://help.aliyun.com/document_detail/86533.html#section-xsg-g5g-1uy",target:"_blank",rel:"noopener noreferrer"},P=s("\u8FD9\u91CC"),S=s("\u3002"),E=p(`<h2 id="nginx-ingress-grpc" tabindex="-1"><a class="header-anchor" href="#nginx-ingress-grpc" aria-hidden="true">#</a> Nginx Ingress gRPC</h2><p>\u73B0\u5728\u6211\u4EEC\u4F1A\u5C06\u4E00\u4E2A\u5DF2\u7ECF\u5B9E\u73B0\u7684\u7B80\u5355\u7684 gRPC \u670D\u52A1\u901A\u8FC7 Ingress \u66B4\u9732\u51FA\u6765\u5E76\u5728\u5916\u90E8\u4F7F\u7528\u5BA2\u6237\u7AEF\u8FDB\u884C\u8C03\u7528\u3002</p><p>\u5B9E\u73B0\u5E76\u66B4\u9732\u670D\u52A1\u540E\uFF0C\u6211\u4EEC\u9700\u8981\u4E3A\u670D\u52A1\u7AEF\u751F\u6210\u81EA\u7B7E\u540D TLS \u8BC1\u4E66\uFF0C\u56E0\u4E3A Nginx Ingress Controller \u5BF9\u4E8E gRPC \u53EA\u80FD\u901A\u8FC7\u5176 443 \u7AEF\u53E3\u4EE3\u7406\uFF0C\u5E76\u4E14\u9700\u8981\u8BC1\u4E66\u3002</p><p>\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528\u7684\u57DF\u540D\u662F server.com\u3002</p><p>\u9996\u5148\u8BF7\u786E\u4FDD\u7CFB\u7EDF\u4E2D\u5DF2\u5B89\u88C5 OpenSSL\uFF0C\u7136\u540E\u521B\u5EFA\u4E0B\u9762\u7684 /tmp/openssl.cnf \u6587\u4EF6\uFF1A</p><div class="language-cnf ext-cnf line-numbers-mode"><pre class="language-cnf"><code>[ req ]
#default_bits           = 2048
#default_md             = sha256
#default_keyfile        = privkey.pem
distinguished_name      = req_distinguished_name
attributes              = req_attributes
req_extensions          = v3_req

[ req_distinguished_name ]
countryName                     = Country Name (2 letter code)
countryName_min                 = 2
countryName_max                 = 2
stateOrProvinceName             = State or Province Name (full name)
localityName                    = Locality Name (eg, city)
0.organizationName              = Organization Name (eg, company)
organizationalUnitName          = Organizational Unit Name (eg, section)
commonName                      = Common Name (eg, fully qualified host name)
commonName_max                  = 64
emailAddress                    = Email Address
emailAddress_max                = 64

[ req_attributes ]
challengePassword               = A challenge password
challengePassword_min           = 4
challengePassword_max           = 20

[v3_req]
# Extensions to add to a certificate request
basicConstraints = CA:FALSE
keyUsage = nonRepudiation, digitalSignature, keyEncipherment
subjectAltName = @alt_names

[alt_names]
DNS.1 = server.com
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u7B7E\u7F72\u8BC1\u4E66\u8BF7\u6C42\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>openssl req -new -nodes -keyout grpc.key -out grpc.csr -config /tmp/openssl.cnf -subj <span class="token string">&quot;/C=CN/ST=Zhejiang/L=Hangzhou/O=AlibabaCloud/OU=ContainerService/CN=server.com&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u7B7E\u7F72\u8BC1\u4E66\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>openssl x509 -req -days <span class="token number">3650</span> -in grpc.csr -signkey grpc.key -out grpc.crt -extensions v3_req -extfile /tmp/openssl.cnf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6B64\u65F6\u4F1A\u751F\u6210\u4E09\u4E2A\u6587\u4EF6\uFF1Agrpc.crt grpc.csr grpc.key\u3002</p><p>\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u5C06\u8BC1\u4E66\u6DFB\u52A0\u5230\u96C6\u7FA4\u4E2D gRPC \u670D\u52A1\u6240\u5728\u7684 namespace\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl create secret tls grpc-secret --key grpc.key --cert grpc.crt -n example
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u901A\u8FC7\u4E0B\u9762\u7684 Ingress \u914D\u7F6E\u6587\u4EF6\u521B\u5EFA gRPC Ingress\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Ingress
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>grpc<span class="token punctuation">-</span>demo
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> example
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">nginx.ingress.kubernetes.io/backend-protocol</span><span class="token punctuation">:</span> <span class="token string">&quot;GRPC&quot;</span> <span class="token comment"># \u6DFB\u52A0 GRPC \u534F\u8BAE\u652F\u6301\u7684 annotation</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ingressClassName</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> server.com
      <span class="token key atrule">http</span><span class="token punctuation">:</span>
        <span class="token key atrule">paths</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">path</span><span class="token punctuation">:</span> / <span class="token comment"># \u5BF9\u4E8E gRPC \u8FD9\u91CC\u5C31\u4E0D\u8981\u5199\u8DEF\u5F84\u4E86</span>
            <span class="token key atrule">pathType</span><span class="token punctuation">:</span> Prefix
            <span class="token key atrule">backend</span><span class="token punctuation">:</span>
              <span class="token key atrule">service</span><span class="token punctuation">:</span>
                <span class="token key atrule">name</span><span class="token punctuation">:</span> demo<span class="token punctuation">-</span>service
                <span class="token key atrule">port</span><span class="token punctuation">:</span>
                  <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">8000</span>
  <span class="token key atrule">tls</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">secretName</span><span class="token punctuation">:</span> grpc<span class="token punctuation">-</span>secret
      <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> server.com <span class="token comment"># \u8BC1\u4E66\u5BF9\u5E94\u7684\u57DF\u540D</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u5C06\u4E4B\u524D\u751F\u6210\u7684 grpc.crt \u8BC1\u4E66\u6587\u4EF6\u62F7\u8D1D\u5230\u5BA2\u6237\u7AEF\uFF0C\u7F16\u5199\u5BA2\u6237\u7AEF\u542F\u52A8\u51FD\u6570\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">TestDemo</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">,</span> err <span class="token operator">:=</span> credentials<span class="token punctuation">.</span><span class="token function">NewClientTLSFromFile</span><span class="token punctuation">(</span><span class="token string">&quot;../ssl/grpc.crt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;server.com&quot;</span><span class="token punctuation">)</span> <span class="token comment">// \u8BFB\u53D6\u81EA\u7B7E\u540D\u8BC1\u4E66</span>
	assert<span class="token punctuation">.</span><span class="token function">NoError</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	cc<span class="token punctuation">,</span> err <span class="token operator">:=</span> grpc<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;server.com:31837&quot;</span><span class="token punctuation">,</span> grpc<span class="token punctuation">.</span><span class="token function">WithTransportCredentials</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>
	assert<span class="token punctuation">.</span><span class="token function">NoError</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	s <span class="token operator">:=</span> proto<span class="token punctuation">.</span><span class="token function">NewDemoServiceClient</span><span class="token punctuation">(</span>cc<span class="token punctuation">)</span>
	m <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> s<span class="token punctuation">.</span><span class="token function">Demo</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>proto<span class="token punctuation">.</span>Empty<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
		assert<span class="token punctuation">.</span><span class="token function">NoError</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		m<span class="token punctuation">[</span>resp<span class="token punctuation">.</span>Value<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span>
	<span class="token punctuation">}</span>
	assert<span class="token punctuation">.</span><span class="token function">GreaterOrEqual</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// \u8FD9\u91CC\u53EF\u4EE5\u770B\u5230\u662F\u6709\u8D1F\u8F7D\u5747\u8861\u7684</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,17);function T(A,R){const a=c("ExternalLinkIcon");return l(),o(r,null,[i,k,b,m,n("p",null,[d,n("a",g,[h,e(a)]),y]),_,n("div",v,[x,n("p",null,[f,n("a",N,[C,e(a)]),I]),n("p",null,[q,n("a",w,[P,e(a)]),S])]),E],64)}var V=t(u,[["render",T]]);export{V as default};
