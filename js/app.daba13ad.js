(function(t){function e(e){for(var s,n,a=e[0],c=e[1],o=e[2],b=0,h=[];b<a.length;b++)n=a[b],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&h.push(r[n][0]),r[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(h.length)h.shift()();return l.push.apply(l,o||[]),i()}function i(){for(var t,e=0;e<l.length;e++){for(var i=l[e],s=!0,a=1;a<i.length;a++){var c=i[a];0!==r[c]&&(s=!1)}s&&(l.splice(e--,1),t=n(n.s=i[0]))}return t}var s={},r={app:0},l=[];function n(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=s,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/wikist/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var o=0;o<a.length;o++)e(a[o]);var u=c;l.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},1309:function(t,e,i){},"2c7e":function(t){t.exports=JSON.parse('{"profile":{"name":"Lucka","avatar":"https://s.gravatar.com/avatar/f03d18971cd558e09f51ad19923bf077?s=180","babels":[{"lang":"zh","level":"N"},{"lang":"en","level":2}]},"wikis":[{"url":"https://wiki.52poke.com","user":"卢卡","tags":["pokemon"]},{"url":"https://zh.wikipedia.org/w","user":"卢卡"},{"url":"https://zh.moegirl.org.cn","user":"卢卡","logo":"https://upload.wikimedia.org/wikipedia/zh/1/1d/Moegirlpedia_logo(2015).png"},{"url":"https://thwiki.cc","user":"卢卡","tags":["touhou"]},{"url":"https://wiki.llsif.moe","user":"Lucka","title":"LoveLive School Idol Festival Wiki","base":"https://wiki.llsif.moe/%E9%A6%96%E9%A1%B5","logo":"https://www.llsif.moe/SIF_50MDL.png","server":"https://wiki.llsif.moe","articlePath":"/$1","uid":79,"registration":1520507202000,"edits":70,"lastEdit":1544796913000,"tags":["lovelive"],"forceRefresh":false}],"project":[{"publicPath":"/wikist/"}]}')},"347a":function(t,e,i){"use strict";i("a56f")},6011:function(t,e,i){"use strict";i("b777")},"752b":function(t,e,i){"use strict";i("1309")},a56f:function(t,e,i){},b777:function(t,e,i){},c145:function(t,e,i){},cd49:function(t,e,i){"use strict";i.r(e);var s=i("7a23");const r=Object(s["f"])("header",null,[Object(s["f"])("h1",null,"Wikist")],-1),l=Object(s["f"])("div",{class:"header-adjust"},null,-1);function n(t,e,i,n,a,c){const o=Object(s["k"])("status"),u=Object(s["k"])("wiki-list");return Object(s["g"])(),Object(s["d"])(s["a"],null,[r,l,Object(s["f"])(o,{profile:t.profile,wikis:t.wikis},null,8,["profile","wikis"]),Object(s["f"])(u,{wikis:t.wikis,loading:t.loading},null,8,["wikis","loading"])],64)}var a=i("9ab4"),c=i("ce1f"),o=i("2c7e");const u={TIME_ACTIVE:2592e6,REGEXP_URL:/^https?;\/\//i};class b{constructor(){this.url="",this.user="",this.title="",this.base="",this.logo="",this.server="",this.articlePath="",this.uid=0,this.registration=0,this.edits=0,this.lastEdit=0,this.tags=[],this.forceRefresh=!1}query(t){const e=this.title.length>0&&u.REGEXP_URL.test(this.base)&&u.REGEXP_URL.test(this.logo)&&u.REGEXP_URL.test(this.server)&&this.articlePath.length>0,i=this.uid>0&&this.registration>0;if(e&&i&&!this.forceRefresh)return void t(!0);const s=!i||this.forceRefresh,r=this.url+"/api.php?action=query"+(e?"":"&meta=siteinfo&siprop=general")+(s?"&list=users|usercontribs":"")+(s?`&ususers=${this.user}&usprop=editcount`:"")+(i?"":"|registration")+(s?`&ucuser=${this.user}&uclimit=1&ucprop=timestamp`:"")+"&format=json&origin=*";fetch(r).then(t=>t.json()).then(r=>{if(!e){const t=r.query.general;this.title||(this.title=t.sitename),this.base||(this.base=t.base),this.logo||(this.logo=t.logo),this.server||(this.server=t.server),/^\/\//.test(this.server)&&(this.server="https:"+this.server),this.articlePath||(this.articlePath=t.articlepath)}if(s){const t=r.query.users[0];if(i||(this.uid||(this.uid=t.userid),this.registration||(this.registration=Date.parse(t.registration))),this.edits=t.editcount,r.query.usercontribs.length>0){const t=r.query.usercontribs[0];this.lastEdit=Date.parse(t.timestamp)}}Date.now()-this.lastEdit<u.TIME_ACTIVE&&this.tags.unshift("active"),t(!0)}).catch(()=>{t(e&&i&&this.forceRefresh)})}get lastEditDate(){return new Date(this.lastEdit).toLocaleDateString()}get since(){return new Date(this.registration).toLocaleDateString()}get userPage(){return this.getArticlePath("User:"+this.user)}getArticlePath(t){return`${this.server}${this.articlePath.replace("$1",t)}`}static parse(t){const e=new b;return e.url=t.url,e.user=t.user,t.title&&(e.title=t.title),t.base&&(e.base=t.base),t.logo&&(e.logo=t.logo),t.server&&(e.server=t.server),t.articlePath&&(e.articlePath=t.articlePath),t.uid&&(e.uid=t.uid),t.registration&&(e.registration=t.registration),t.edits&&(e.edits=t.edits),t.lastEdit&&(e.lastEdit=t.lastEdit),t.tags&&(e.tags=t.tags),t.forceUpdate&&(e.forceRefresh=t.forceUpdate),e}}const h={class:"status"},f={key:0},p={key:1},j=Object(s["f"])("span",null,"Since",-1),d={key:2},g=Object(s["f"])("span",null,"Edits",-1),O={key:3},k={class:"list"};function w(t,e,i,r,l,n){return Object(s["g"])(),Object(s["d"])("div",h,[Object(s["f"])("img",{src:t.profile.avatar,alt:"Avatar"},null,8,["src"]),Object(s["f"])("div",null,[Object(s["f"])("h2",null,Object(s["l"])(t.profile.name),1),t.wikis.length>0?(Object(s["g"])(),Object(s["d"])("span",f,[Object(s["f"])("span",null,"Wiki"+Object(s["l"])(t.wikis.length>1?"s":""),1),Object(s["f"])("span",null,Object(s["l"])(t.wikis.length),1)])):Object(s["e"])("",!0),t.wikis.length>0?(Object(s["g"])(),Object(s["d"])("span",p,[j,Object(s["f"])("span",null,Object(s["l"])(t.since),1)])):Object(s["e"])("",!0),t.wikis.length>0?(Object(s["g"])(),Object(s["d"])("span",d,[g,Object(s["f"])("span",null,Object(s["l"])(Number(t.edits).toLocaleString()),1)])):Object(s["e"])("",!0),t.profile.babels&&t.profile.babels.length>0?(Object(s["g"])(),Object(s["d"])("span",O,[Object(s["f"])("span",null,"Babel"+Object(s["l"])(t.profile.babels.length>1?"s":""),1),Object(s["f"])("span",k,[(Object(s["g"])(!0),Object(s["d"])(s["a"],null,Object(s["j"])(t.profile.babels,t=>(Object(s["g"])(),Object(s["d"])("span",{key:t.lang},Object(s["l"])(t.lang)+"-"+Object(s["l"])(t.level),1))),128))])])):Object(s["e"])("",!0)])])}let v=class extends c["b"]{get since(){const t=this.wikis.reduce((t,e)=>Math.min(t,e.registration),Date.now());return new Date(t).getFullYear()}get edits(){return this.wikis.reduce((t,e)=>t+e.edits,0)}};v=Object(a["a"])([Object(c["a"])({props:{profile:Object,wikis:Array}})],v);var m=v;i("752b");m.render=w;var y=m;const E={class:"wiki-list"},P={key:0,class:"loading"};function L(t,e,i,r,l,n){const a=Object(s["k"])("wiki-list-item");return Object(s["g"])(),Object(s["d"])("div",E,[Object(s["f"])(s["b"],{name:"wiki-list"},{default:Object(s["m"])(()=>[(Object(s["g"])(!0),Object(s["d"])(s["a"],null,Object(s["j"])(t.wikis,t=>(Object(s["g"])(),Object(s["d"])(a,{wiki:t,key:t.title},null,8,["wiki"]))),128)),t.loading?(Object(s["g"])(),Object(s["d"])("span",P,"Loading...")):Object(s["e"])("",!0)]),_:1})])}const _={class:"wiki-list-item"},S={key:0,class:"tags"},R=Object(s["f"])("span",null,"Since",-1),D={key:1},x=Object(s["f"])("span",null,"Last Edit",-1);function A(t,e,i,r,l,n){return Object(s["g"])(),Object(s["d"])("div",_,[Object(s["f"])("a",{href:t.wiki.base,title:"Homepage",target:"_blank",rel:"noopener",class:"logo"},[Object(s["f"])("img",{src:t.wiki.logo,alt:t.wiki.title},null,8,["src","alt"])],8,["href"]),Object(s["f"])("div",null,[Object(s["f"])("h2",null,Object(s["l"])(t.wiki.title),1),t.wiki.tags.length>0?(Object(s["g"])(),Object(s["d"])("span",S,[(Object(s["g"])(!0),Object(s["d"])(s["a"],null,Object(s["j"])(t.wiki.tags,t=>(Object(s["g"])(),Object(s["d"])("span",{key:t},"#"+Object(s["l"])(t),1))),128))])):Object(s["e"])("",!0),Object(s["f"])("span",null,[Object(s["f"])("a",{href:t.wiki.userPage,title:"User Page",target:"_blank",rel:"noopener"},Object(s["l"])(t.wiki.user),9,["href"]),Object(s["f"])("span",null,"#"+Object(s["l"])(t.wiki.uid),1)]),Object(s["f"])("span",null,[R,Object(s["f"])("span",null,Object(s["l"])(t.wiki.since),1)]),Object(s["f"])("span",null,[Object(s["f"])("span",null,"Edit"+Object(s["l"])(t.wiki.edits>1?"s":""),1),Object(s["f"])("span",null,Object(s["l"])(Number(t.wiki.edits).toLocaleString()),1)]),t.wiki.lastEdit>0?(Object(s["g"])(),Object(s["d"])("span",D,[x,Object(s["f"])("span",null,Object(s["l"])(t.wiki.lastEditDate),1)])):Object(s["e"])("",!0)])])}let M=class extends c["b"]{};M=Object(a["a"])([Object(c["a"])({props:{wiki:b}})],M);var U=M;i("f984");U.render=A;var q=U;let I=class extends c["b"]{};I=Object(a["a"])([Object(c["a"])({props:{loading:Boolean,wikis:Array},components:{WikiListItem:q}})],I);var T=I;i("6011");T.render=L;var $=T;let W=class extends c["b"]{constructor(){super(...arguments),this.profile=o.profile,this.wikis=[],this.loading=!0}mounted(){this.wikis.length=0;let t=0;for(const e of o.wikis){const i=b.parse(e);i.query(e=>{e&&(this.wikis.push(i),this.wikis.sort((t,e)=>e.edits-t.edits)),t+=1,t===o.wikis.length&&(this.loading=!1)})}}};W=Object(a["a"])([Object(c["a"])({components:{Status:y,WikiList:$}})],W);var z=W;i("347a");z.render=n;var G=z;Object(s["c"])(G).mount(".app")},f984:function(t,e,i){"use strict";i("c145")}});
//# sourceMappingURL=app.daba13ad.js.map