import{_ as t,a as n,b as r,c as e,i as c,d as o,S as f,s as a,e as s,t as u,f as i,g as l,h,j as v,k as p,l as g,m as d,n as m,o as w,q as y,r as R,u as E,v as j,w as N,p as b}from"./client.118cc8b9.js";function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,o=n(t);if(e){var f=n(this).constructor;c=Reflect.construct(o,arguments,f)}else c=o.apply(this,arguments);return r(this,c)}}function x(t,n,r){var e=t.slice();return e[4]=n[r],e}function D(t,n,r){var e=t.slice();return e[1]=n[r],e}function L(t){for(var n,r=t[1].tags,e=[],c=0;c<r.length;c+=1)e[c]=S(x(t,r,c));return{c:function(){for(var t=0;t<e.length;t+=1)e[t].c();n=R()},l:function(t){for(var r=0;r<e.length;r+=1)e[r].l(t);n=R()},m:function(t,r){for(var c=0;c<e.length;c+=1)e[c].m(t,r);m(t,n,r)},p:function(t,c){if(1&c){var o;for(r=t[1].tags,o=0;o<r.length;o+=1){var f=x(t,r,o);e[o]?e[o].p(f,c):(e[o]=S(f),e[o].c(),e[o].m(n.parentNode,n))}for(;o<e.length;o+=1)e[o].d(1);e.length=r.length}},d:function(t){E(e,t),t&&p(n)}}}function S(t){var n,r,e=t[4]+"";return{c:function(){n=u("    "),r=u(e)},l:function(t){n=v(t,"    "),r=v(t,e)},m:function(t,e){m(t,n,e),m(t,r,e)},p:function(t,n){1&n&&e!==(e=t[4]+"")&&y(r,e)},d:function(t){t&&p(n),t&&p(r)}}}function $(t){var n,r,e,c,o,f,a,R,E=t[1].title+"",j=t[1].tags&&L(t);return{c:function(){n=s("li"),r=s("a"),e=u(E),o=i(),f=s("br"),a=i(),j&&j.c(),R=i(),this.h()},l:function(t){n=l(t,"LI",{});var c=h(n);r=l(c,"A",{rel:!0,href:!0});var s=h(r);e=v(s,E),s.forEach(p),o=g(c),f=l(c,"BR",{}),a=g(c),j&&j.l(c),R=g(c),c.forEach(p),this.h()},h:function(){d(r,"rel","prefetch"),d(r,"href",c="news/"+t[1].link)},m:function(t,c){m(t,n,c),w(n,r),w(r,e),w(n,o),w(n,f),w(n,a),j&&j.m(n,null),w(n,R)},p:function(t,o){1&o&&E!==(E=t[1].title+"")&&y(e,E),1&o&&c!==(c="news/"+t[1].link)&&d(r,"href",c),t[1].tags?j?j.p(t,o):((j=L(t)).c(),j.m(n,R)):j&&(j.d(1),j=null)},d:function(t){t&&p(n),j&&j.d()}}}function q(t){for(var n,r,e,c,o,f=t[0],a=[],y=0;y<f.length;y+=1)a[y]=$(D(t,f,y));return{c:function(){n=i(),r=s("h1"),e=u("News"),c=i(),o=s("ul");for(var t=0;t<a.length;t+=1)a[t].c();this.h()},l:function(t){j('[data-svelte="svelte-1sl63pr"]',document.head).forEach(p),n=g(t),r=l(t,"H1",{});var f=h(r);e=v(f,"News"),f.forEach(p),c=g(t),o=l(t,"UL",{class:!0});for(var s=h(o),u=0;u<a.length;u+=1)a[u].l(s);s.forEach(p),this.h()},h:function(){document.title="News",d(o,"class","svelte-1frg2tf")},m:function(t,f){m(t,n,f),m(t,r,f),w(r,e),m(t,c,f),m(t,o,f);for(var s=0;s<a.length;s+=1)a[s].m(o,null)},p:function(t,n){var r=N(n,1)[0];if(1&r){var e;for(f=t[0],e=0;e<f.length;e+=1){var c=D(t,f,e);a[e]?a[e].p(c,r):(a[e]=$(c),a[e].c(),a[e].m(o,null))}for(;e<a.length;e+=1)a[e].d(1);a.length=f.length}},i:b,o:b,d:function(t){t&&p(n),t&&p(r),t&&p(c),t&&p(o),E(a,t)}}}function A(){return this.fetch("news.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function B(t,n,r){var e=n.posts;return t.$$set=function(t){"posts"in t&&r(0,e=t.posts)},[e]}var H=function(n){t(s,f);var r=k(s);function s(t){var n;return e(this,s),n=r.call(this),c(o(n),t,B,q,a,{posts:0}),n}return s}();export default H;export{A as preload};