function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function f(t,e,n,r,o,s,i){const f=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(f){const o=c(e,n,r,i);t.p(o,f)}}function a(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function m(){return d("")}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function _(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):p(e)}function y(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return d(e)}function b(t){return y(t," ")}function v(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let S;function E(t){S=t}function x(){if(!S)throw new Error("Function called outside component initialization");return S}const w=[],P=[],N=[],j=[],R=Promise.resolve();let C=!1;function A(t){N.push(t)}let O=!1;const I=new Set;function T(){if(!O){O=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];E(e),L(e.$$)}for(E(null),w.length=0;P.length;)P.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];I.has(e)||(I.add(e),e())}N.length=0}while(w.length);for(;j.length;)j.pop()();C=!1,O=!1,I.clear()}}function L(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const q=new Set;let U;function k(){U={r:0,c:[],p:U}}function J(){U.r||o(U.c),U=U.p}function B(t,e){t&&t.i&&(q.delete(t),t.i(e))}function K(t,e,n,r){if(t&&t.o){if(q.has(t))return;q.add(t),U.c.push(()=>{q.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function M(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=e[s];if(c){for(const t in i)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in i)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function V(t){return"object"==typeof t&&null!==t?t:{}}function D(t){t&&t.c()}function H(t,e){t&&t.l(e)}function Y(t,e,r){const{fragment:i,on_mount:c,on_destroy:f,after_update:a}=t.$$;i&&i.m(e,r),A(()=>{const e=c.map(n).filter(s);f?f.push(...e):o(e),t.$$.on_mount=[]}),a.forEach(A)}function z(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(t,e){-1===t.$$.dirty[0]&&(w.push(t),C||(C=!0,R.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(e,n,s,i,c,f,a=[-1]){const u=S;E(e);const p=n.props||{},d=e.$$={fragment:null,ctx:null,props:f,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:a,skip_bound:!1};let h=!1;if(d.ctx=s?s(e,p,(t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),h&&F(e,t)),n}):[],d.update(),h=!0,o(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){const t=$(n.target);d.fragment&&d.fragment.l(t),t.forEach(l)}else d.fragment&&d.fragment.c();n.intro&&B(e.$$.fragment),Y(e,n.target,n.anchor),T()}E(u)}class W{$destroy(){z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const X=[];function Q(e,n=t){let r;const o=[];function s(t){if(i(e,t)&&(e=t,r)){const t=!X.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),X.push(n,e)}if(t){for(let t=0;t<X.length;t+=2)X[t][0](X[t+1]);X.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,c=t){const f=[i,c];return o.push(f),1===o.length&&(r=n(s)||t),i(e),()=>{const t=o.indexOf(f);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const Z={};function tt(t){let e;const n=t[1].default,r=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(n,t,t[0],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,[e]){r&&r.p&&1&e&&f(r,n,t,t[0],e,null,null)},i(t){e||(B(r,t),e=!0)},o(t){K(r,t),e=!1},d(t){r&&r.d(t)}}}function et(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class nt extends W{constructor(t){super(),G(this,t,et,tt,i,{})}}function rt(e){let n,r,o,s,i,c,f,g=e[0].message+"";return{c(){n=p("h1"),r=d(e[1]),o=h(),s=p("p"),i=d(g),c=h(),f=m()},l(t){n=_(t,"H1",{});var a=$(n);r=y(a,e[1]),a.forEach(l),o=b(t),s=_(t,"P",{});var u=$(s);i=y(u,g),u.forEach(l),c=b(t),f=m()},m(t,e){u(t,n,e),a(n,r),u(t,o,e),u(t,s,e),a(s,i),u(t,c,e),u(t,f,e)},p(t,[e]){2&e&&v(r,t[1]),1&e&&g!==(g=t[0].message+"")&&v(i,g)},i:t,o:t,d(t){t&&l(n),t&&l(o),t&&l(s),t&&l(c),t&&l(f)}}}function ot(t,e,n){let{error:r}=e,{status:o}=e;return t.$$set=t=>{"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status)},[r,o]}class st extends W{constructor(t){super(),G(this,t,ot,rt,i,{error:0,status:1})}}function it(t){let n,r,o;const s=[t[4].props];var i=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return i&&(n=new i(c())),{c(){n&&D(n.$$.fragment),r=m()},l(t){n&&H(n.$$.fragment,t),r=m()},m(t,e){n&&Y(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?M(s,[V(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){k();const t=n;K(t.$$.fragment,1,0,()=>{z(t,1)}),J()}i?(n=new i(c()),D(n.$$.fragment),B(n.$$.fragment,1),Y(n,r.parentNode,r)):n=null}else i&&n.$set(o)},i(t){o||(n&&B(n.$$.fragment,t),o=!0)},o(t){n&&K(n.$$.fragment,t),o=!1},d(t){t&&l(r),n&&z(n,t)}}}function ct(t){let e,n;return e=new st({props:{error:t[0],status:t[1]}}),{c(){D(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,r){Y(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){K(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function ft(t){let e,n,r,o;const s=[ct,it],i=[];function c(t,e){return t[0]?0:1}return e=c(t),n=i[e]=s[e](t),{c(){n.c(),r=m()},l(t){n.l(t),r=m()},m(t,n){i[e].m(t,n),u(t,r,n),o=!0},p(t,o){let f=e;e=c(t),e===f?i[e].p(t,o):(k(),K(i[f],1,1,()=>{i[f]=null}),J(),n=i[e],n||(n=i[e]=s[e](t),n.c()),B(n,1),n.m(r.parentNode,r))},i(t){o||(B(n),o=!0)},o(t){K(n),o=!1},d(t){i[e].d(t),t&&l(r)}}}function at(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[ft]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new nt({props:s}),{c(){D(n.$$.fragment)},l(t){H(n.$$.fragment,t)},m(t,e){Y(n,t,e),r=!0},p(t,[e]){const r=12&e?M(o,[4&e&&{segment:t[2][0]},8&e&&V(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(B(n.$$.fragment,t),r=!0)},o(t){K(n.$$.fragment,t),r=!1},d(t){z(n,t)}}}function ut(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:i}=e,{level0:c}=e,{level1:f=null}=e,{notify:a}=e;var u,l,p;return u=a,x().$$.after_update.push(u),l=Z,p=r,x().$$.context.set(l,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,f=t.level1),"notify"in t&&n(6,a=t.notify)},[o,s,i,c,f,r,a]}class lt extends W{constructor(t){super(),G(this,t,ut,at,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const pt=[],dt=[{js:()=>Promise.all([import("./index.7ade45a8.js"),]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./groundsat.75efdd54.js"),]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./github.25d0378e.js"),]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./arap.d10c37c9.js"),]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./faq.d695a370.js"),]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./ttj.d6e7390a.js"),]).then((function(t){return t[0]}))}],ht=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/groundsat\/?$/,parts:[{i:1}]},{pattern:/^\/github\/?$/,parts:[{i:2}]},{pattern:/^\/arap\/?$/,parts:[{i:3}]},{pattern:/^\/faq\/?$/,parts:[{i:4}]},{pattern:/^\/ttj\/?$/,parts:[{i:5}]}];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function mt(t,e,n,r){return new(n||(n=Promise))((function(o,s){function i(t){try{f(r.next(t))}catch(t){s(t)}}function c(t){try{f(r.throw(t))}catch(t){s(t)}}function f(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}f((r=r.apply(t,e||[])).next())}))}function gt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let $t,_t=1;const yt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},bt={};let vt,St;function Et(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function xt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(vt))return null;let e=t.pathname.slice(vt.length);if(""===e&&(e="/"),!pt.some(t=>t.test(e)))for(let n=0;n<ht.length;n+=1){const r=ht[n],o=r.pattern.exec(e);if(o){const n=Et(t.search),s=r.parts[r.parts.length-1],i=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:i};return{href:t.href,route:r,match:o,page:c}}}}function wt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=gt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=xt(o);if(s){jt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),yt.pushState({id:$t},"",o.href)}}function Pt(){return{x:pageXOffset,y:pageYOffset}}function Nt(t){if(bt[$t]=Pt(),t.state){const e=xt(new URL(location.href));e?jt(e,t.state.id):location.href=location.href}else _t=_t+1,function(t){$t=t}(_t),yt.replaceState({id:$t},"",location.href)}function jt(t,e,n,r){return mt(this,void 0,void 0,(function*(){const o=!!e;if(o)$t=e;else{const t=Pt();bt[$t]=t,$t=e=++_t,bt[$t]=n?t:{x:0,y:0}}if(yield St(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=bt[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),bt[$t]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Rt(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Ct,At=null;function Ot(t){const e=gt(t.target);e&&"prefetch"===e.rel&&function(t){const e=xt(new URL(t,Rt(document)));if(e)At&&t===At.href||(At={href:t,promise:Gt(e)}),At.promise}(e.href)}function It(t){clearTimeout(Ct),Ct=setTimeout(()=>{Ot(t)},20)}function Tt(t,e={noscroll:!1,replaceState:!1}){const n=xt(new URL(t,Rt(document)));return n?(yt[e.replaceState?"replaceState":"pushState"]({id:$t},"",t),jt(n,null,e.noscroll)):(location.href=t,new Promise(()=>{}))}const Lt="undefined"!=typeof __SAPPER__&&__SAPPER__;let qt,Ut,kt,Jt=!1,Bt=[],Kt="{}";const Mt={page:function(t){const e=Q(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:Q(null),session:Q(Lt&&Lt.session)};let Vt,Dt,Ht;function Yt(t,e){const{error:n}=t;return Object.assign({error:n},e)}function zt(t){return mt(this,void 0,void 0,(function*(){qt&&Mt.preloading.set(!0);const e=function(t){return At&&At.href===t.href?At.promise:Gt(t)}(t),n=Ut={},r=yield e,{redirect:o}=r;if(n===Ut)if(o)yield Tt(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield Ft(n,e,Yt(e,t.page))}}))}function Ft(t,e,n){return mt(this,void 0,void 0,(function*(){Mt.page.set(n),Mt.preloading.set(!1),qt?qt.$set(e):(e.stores={page:{subscribe:Mt.page.subscribe},preloading:{subscribe:Mt.preloading.subscribe},session:Mt.session},e.level0={props:yield kt},e.notify=Mt.page.notify,qt=new lt({target:Ht,props:e,hydrate:!0})),Bt=t,Kt=JSON.stringify(n.query),Jt=!0,Dt=!1}))}function Gt(t){return mt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!kt){const t=()=>({});kt=Lt.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Vt)}let c,f=1;try{const o=JSON.stringify(n.query),a=e.pattern.exec(n.path);let u=!1;c=yield Promise.all(e.parts.map((e,c)=>mt(this,void 0,void 0,(function*(){const l=r[c];if(function(t,e,n,r){if(r!==Kt)return!0;const o=Bt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,l,a,o)&&(u=!0),s.segments[f]=r[c+1],!e)return{segment:l};const p=f++;if(!Dt&&!u&&Bt[c]&&Bt[c].part===e.i)return Bt[c];u=!1;const{default:d,preload:h}=yield dt[e.i].js();let m;return m=Jt||!Lt.preloaded[c+1]?h?yield h.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Vt):{}:Lt.preloaded[c+1],s["level"+p]={component:d,props:m,segment:l,match:a,part:e.i}}))))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}))}var Wt,Xt,Qt;Mt.session.subscribe(t=>mt(void 0,void 0,void 0,(function*(){if(Vt=t,!Jt)return;Dt=!0;const e=xt(new URL(location.href)),n=Ut={},{redirect:r,props:o,branch:s}=yield Gt(e);n===Ut&&(r?yield Tt(r.location,{replaceState:!0}):yield Ft(s,o,Yt(o,e.page)))}))),Wt={target:document.querySelector("#sapper")},Xt=Wt.target,Ht=Xt,Qt=Lt.baseUrl,vt=Qt,St=zt,"scrollRestoration"in yt&&(yt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{yt.scrollRestoration="auto"}),addEventListener("load",()=>{yt.scrollRestoration="manual"}),addEventListener("click",wt),addEventListener("popstate",Nt),addEventListener("touchstart",Ot),addEventListener("mousemove",It),Lt.error?Promise.resolve().then(()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:i}=Lt;kt||(kt=o&&o[0]);const c={error:i,status:s,session:r,level0:{props:kt},level1:{props:{status:s,error:i},component:st},segments:o},f=Et(n);Ft([],c,{host:t,path:e,query:f,params:{},error:i})}()):Promise.resolve().then(()=>{const{hash:t,href:e}=location;yt.replaceState({id:_t},"",e);const n=xt(new URL(location.href));if(n)return jt(n,_t,!0,t)});export{W as S,h as a,$ as b,_ as c,y as d,p as e,l as f,b as g,g as h,G as i,u as j,a as k,t as n,i as s,d as t};
