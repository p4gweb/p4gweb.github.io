import{S as t,i as s,s as e,e as l,t as n,c as r,b as o,d as a,f as h,h as c,j as f,k as i,l as u,a as p,q as g,g as d,n as m,m as v}from"./client.0314445b.js";function w(t,s,e){const l=t.slice();return l[1]=s[e],l}function E(t){let s,e,p,g,d=t[1].title+"";return{c(){s=l("li"),e=l("a"),p=n(d),this.h()},l(t){s=r(t,"LI",{});var l=o(s);e=r(l,"A",{rel:!0,href:!0});var n=o(e);p=a(n,d),n.forEach(h),l.forEach(h),this.h()},h(){c(e,"rel","prefetch"),c(e,"href",g="news/"+t[1].link)},m(t,l){f(t,s,l),i(s,e),i(e,p)},p(t,s){1&s&&d!==(d=t[1].title+"")&&u(p,d),1&s&&g!==(g="news/"+t[1].link)&&c(e,"href",g)},d(t){t&&h(s)}}}function j(t){let s,e,u,j,k,x=t[0],N=[];for(let s=0;s<x.length;s+=1)N[s]=E(w(t,x,s));return{c(){s=p(),e=l("h1"),u=n("News"),j=p(),k=l("ul");for(let t=0;t<N.length;t+=1)N[t].c();this.h()},l(t){g('[data-svelte="svelte-1sl63pr"]',document.head).forEach(h),s=d(t),e=r(t,"H1",{});var l=o(e);u=a(l,"News"),l.forEach(h),j=d(t),k=r(t,"UL",{class:!0});var n=o(k);for(let t=0;t<N.length;t+=1)N[t].l(n);n.forEach(h),this.h()},h(){document.title="News",c(k,"class","svelte-1frg2tf")},m(t,l){f(t,s,l),f(t,e,l),i(e,u),f(t,j,l),f(t,k,l);for(let t=0;t<N.length;t+=1)N[t].m(k,null)},p(t,[s]){if(1&s){let e;for(x=t[0],e=0;e<x.length;e+=1){const l=w(t,x,e);N[e]?N[e].p(l,s):(N[e]=E(l),N[e].c(),N[e].m(k,null))}for(;e<N.length;e+=1)N[e].d(1);N.length=x.length}},i:m,o:m,d(t){t&&h(s),t&&h(e),t&&h(j),t&&h(k),v(N,t)}}}function k(){return this.fetch("news.json").then(t=>t.json()).then(t=>({posts:t}))}function x(t,s,e){let{posts:l}=s;return console.log(l),t.$$set=t=>{"posts"in t&&e(0,l=t.posts)},[l]}export default class extends t{constructor(t){super(),s(this,t,x,j,e,{posts:0})}}export{k as preload};
