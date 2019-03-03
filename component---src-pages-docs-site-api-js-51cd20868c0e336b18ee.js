(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(a,n,s){"use strict";s.r(n);var t=s(9),e=s(160),o=(s(0),s(151)),c=s(157),i=s(155),p="1147515358";n.default=function(){return Object(t.b)(c.a,null,Object(t.b)(i.a,{title:"SPQL API"}),Object(t.b)(o.b,{query:p,render:function(a){return a.allMarkdownRemark.edges.map(function(a){return Object(t.b)("div",{key:a.node.id},Object(t.b)("h1",null,a.node.frontmatter.title),Object(t.b)("div",{dangerouslySetInnerHTML:{__html:a.node.html}}))})},data:e}))}},151:function(a,n,s){"use strict";s.d(n,"b",function(){return u});var t=s(9),e=s(0),o=s.n(e),c=s(4),i=s.n(c),p=s(35),r=s.n(p);s.d(n,"a",function(){return r.a});s(152);var l=o.a.createContext({}),u=function(a){return Object(t.b)(l.Consumer,null,function(n){return a.data||n[a.query]&&n[a.query].data?(a.render||a.children)(a.data?a.data.data:n[a.query].data):Object(t.b)("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(a,n,s){var t;a.exports=(t=s(154))&&t.default||t},153:function(a){a.exports={data:{site:{siteMetadata:{title:"SPQL"}}}}},154:function(a,n,s){"use strict";s.r(n);s(57);var t=s(0),e=s.n(t),o=s(4),c=s.n(o),i=s(58),p=s(2),r=function(a){var n=a.location,s=p.default.getResourcesForPathnameSync(n.pathname);return e.a.createElement(i.a,Object.assign({location:n,pageResources:s},s.json))};r.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},n.default=r},155:function(a,n,s){"use strict";var t=s(9),e=s(156),o=(s(0),s(4)),c=s.n(o),i=s(159),p=s.n(i),r=s(151);function l(a){var n=a.description,s=a.lang,o=a.meta,c=a.keywords,i=a.title;return Object(t.b)(r.b,{query:u,render:function(a){var e=n||a.site.siteMetadata.description;return Object(t.b)(p.a,{htmlAttributes:{lang:s},title:i,titleTemplate:"%s | "+a.site.siteMetadata.title,meta:[{name:"description",content:e},{property:"og:title",content:i},{property:"og:description",content:e},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:e}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(o)})},data:e})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},n.a=l;var u="1025518380"},156:function(a){a.exports={data:{site:{siteMetadata:{title:"SPQL",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},157:function(a,n,s){"use strict";var t=s(9),e=s(153),o=s(0),c=s.n(o),i=s(4),p=s.n(i),r=s(151),l=s(27),u={name:"ifnyry",styles:"height:50px;box-shadow:inset 0 -1px 0 0px rgba(0, 0, 0, 0.1);position:fixed;top:0;width:100%;background:#fff;"},d={name:"wi2fqu",styles:"display:inline-block;flex:1;"},g={name:"yy3s1s",styles:"list-style:none;margin:0;display:flex;"},m={name:"0",styles:""},k={name:"2ah7zc",styles:"text-decoration:none;color:#282936;&:hover{color:#ff7e5f;opacity:.8;}margin:0 1.5em;"},h={name:"0",styles:""},b={name:"12z0hop",styles:"text-decoration:none;color:#282936;&:hover{color:#ff7e5f;opacity:.8;}flex:1;"},f=function(a){var n=a.siteTitle;return Object(t.b)("header",{css:u},Object(t.b)("div",{css:Object(l.a)({display:"flex",alignItems:"center",margin:"0 auto",maxWidth:1200,padding:"0 1rem"})},Object(t.b)(r.a,{to:"/",style:{color:"#ff7e5f",textDecoration:"none",fontSize:"40px"}},n),Object(t.b)("nav",{css:d},Object(t.b)("ul",{css:g},Object(t.b)("li",{css:m},Object(t.b)(r.a,{to:"/getting-started",css:k,activeStyle:{color:"#ff7e5f"}},"Getting Started")),Object(t.b)("li",{css:h},Object(t.b)(r.a,{to:"/docs",css:b,activeStyle:{color:"#ff7e5f"}},"Docs"))))))};f.propTypes={siteTitle:p.a.string},f.defaultProps={siteTitle:""};var v=f,y=(s(158),{name:"qzrti0",styles:'@import url(\'https://fonts.googleapis.com/css?family=Source+Sans+Pro\');html{font:calc(1vw + 0.5em) \'Source Sans Pro\',sans-serif;box-sizing:border-box;overflow-y:scroll;color:#282936;}body{margin:0;margin-top:50px;}*{box-sizing:inherit;}*:before{box-sizing:inherit;}*:after{box-sizing:inherit;}pre{margin-left:0;margin-right:0;margin-top:0;margin-bottom:1.45rem;font-size:0.85rem;line-height:1.42;background:hsla(0,0%,0%,0.04);border-radius:3px;overflow:auto;word-wrap:normal;padding:.5rem 1rem !important;}code{font-size:0.8rem;padding:.5rem line-height:1.45rem;}code{background-color:hsla(0,0%,0%,0.04);border-radius:3px;font-family:"SFMono-Regular",Consolas,"Roboto Mono","Droid Sans Mono","Liberation Mono",Menlo,Courier,monospace;padding:0;padding-top:0.2em;padding-bottom:0.2em;}pre code{background:none;line-height:1.42;}code:before,code:after,tt:before,tt:after{letter-spacing:-0.2em;content:" ";}pre code:before,pre code:after,pre tt:before,pre tt:after{content:"";}h1{font-size:2.2rem;}h2{font-size:1.6rem;font-weight:500;margin-bottom:.6em;}'}),j=function(a){var n=a.children;return Object(t.b)(r.b,{query:"755544856",render:function(a){return Object(t.b)(c.a.Fragment,null,Object(t.b)(t.a,{styles:y}),Object(t.b)(v,{siteTitle:a.site.siteMetadata.title}),Object(t.b)("div",{style:{margin:"0 auto",maxWidth:1200,padding:"1.0875rem 1.45rem"}},Object(t.b)("main",null,n)))},data:e})};j.propTypes={children:p.a.node.isRequired};n.a=j},160:function(a){a.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Site"},id:"796f9c65-8fdb-5ebc-9914-491a8a83cf76",html:'<p>Connecting to a SharePoint Site</p>\n<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> spql <span class="token keyword">from</span> <span class="token string">\'spql\'</span>\n\n<span class="token keyword">const</span> SPSite <span class="token operator">=</span> spql<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">\'/\'</span><span class="token punctuation">)</span></code></pre></div>\n<h2>getListCollectionInfo</h2>\n<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">SPSite<span class="token punctuation">.</span><span class="token function">getListCollectionInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">// => {Promise,&lt;Array>} The Site\'s List Info {id, name, siteUrl, description, createdBy, created, modified, itemCount, defaultViewUrl, isDocumentList, isHidden}</span></code></pre></div>\n<h2>uploadDocument</h2>\n<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">SPSite<span class="token punctuation">.</span><span class="token function">uploadDocument</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  fileStream<span class="token punctuation">:</span> <span class="token punctuation">[</span>Bytes<span class="token punctuation">]</span><span class="token punctuation">,</span>\n  fileName<span class="token punctuation">:</span> String<span class="token punctuation">,</span>\n  destination<span class="token punctuation">:</span> String<span class="token punctuation">,</span>\n  fields<span class="token punctuation">:</span> <span class="token punctuation">[</span>Field<span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">// => {Promise,&lt;Object>} Results {isSuccess, error}</span></code></pre></div>\n<p>Uploads a document to a document libary under the site.</p>\n<p><strong>Field</strong></p>\n<p>{displayName, staticName, type, value}</p>\n<h2>getUserById</h2>\n<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">SPSite<span class="token punctuation">.</span><span class="token function">getUserById</span><span class="token punctuation">(</span>UserID<span class="token punctuation">)</span>\n<span class="token comment">// => {Promise,&lt;?Object>} The User {id, account, displayName, email}</span></code></pre></div>\n<h2>getCurrentUser</h2>\n<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">SPSite<span class="token punctuation">.</span><span class="token function">getCurrentUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">// => {Promise,&lt;?Object>} The Current User {id, account, displayName, email}</span></code></pre></div>\n<h2>getGroupsFromUser</h2>\n<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">SPSite<span class="token punctuation">.</span><span class="token function">getGroupsFromUser</span><span class="token punctuation">(</span>userLoginName<span class="token punctuation">)</span>\n<span class="token comment">// => {Promise,&lt;Array>} The User\'s Groups {id, name, description}</span></code></pre></div>\n<h2>getUsersInGroup</h2>\n<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">SPSite<span class="token punctuation">.</span><span class="token function">getUsersInGroup</span><span class="token punctuation">(</span>groupName<span class="token punctuation">)</span>\n<span class="token comment">// => {Promise,&lt;Array>} The Users in Group {id, account, displayName, email}</span></code></pre></div>\n<h2>createGroup</h2>\n<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">SPSite<span class="token punctuation">.</span><span class="token function">createGroup</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token punctuation">,</span>\n  description<span class="token punctuation">,</span>\n  ownerLoginName<span class="token punctuation">,</span>\n  ownerIsGroup<span class="token punctuation">,</span>\n  defaultUserLoginName\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">// => {Promise,&lt;Object>} Results {isSuccess, error}</span></code></pre></div>\n<h2>deleteGroup</h2>\n<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">SPSite<span class="token punctuation">.</span><span class="token function">deleteGroup</span><span class="token punctuation">(</span>groupName<span class="token punctuation">)</span>\n<span class="token comment">// => {Promise,&lt;Object>} Results {isSuccess, error}</span></code></pre></div>\n<h2>addUsersToGroup</h2>\n<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">SPSite<span class="token punctuation">.</span><span class="token function">addUserToGroup</span><span class="token punctuation">(</span>groupName<span class="token punctuation">,</span> userLoginName<span class="token operator">|</span><span class="token punctuation">[</span>userLoginName<span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token comment">// => {Promise,&lt;Object>} Results {isSuccess, error}</span></code></pre></div>\n<h2>deleteUsersFromGroup</h2>\n<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">SPSite<span class="token punctuation">.</span><span class="token function">deleteUserFromGroup</span><span class="token punctuation">(</span>groupName<span class="token punctuation">,</span> userLoginName<span class="token operator">|</span><span class="token punctuation">[</span>userLoginName<span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token comment">// => {Promise,&lt;Object>} Results {isSuccess, error}</span></code></pre></div>\n<h2>isUserInGroup</h2>\n<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">SPSite<span class="token punctuation">.</span><span class="token function">isUserInGroup</span><span class="token punctuation">(</span>userId<span class="token punctuation">,</span> groupId<span class="token operator">|</span><span class="token punctuation">[</span>groupId<span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token comment">// => {Promise,&lt;boolean>}</span></code></pre></div>\n<h2>isCurrentUserInGroup</h2>\n<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">SPSite<span class="token punctuation">.</span><span class="token function">isCurrentUserInGroup</span><span class="token punctuation">(</span>groupId<span class="token operator">|</span><span class="token punctuation">[</span>groupId<span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token comment">// => {Promise,&lt;boolean>}</span></code></pre></div>'}}]}}}}}]);
//# sourceMappingURL=component---src-pages-docs-site-api-js-51cd20868c0e336b18ee.js.map