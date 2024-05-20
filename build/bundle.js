var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function s(e){e.forEach(t)}function a(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let r,o;function i(e,t){return r||(r=document.createElement("a")),r.href=t,e===r.href}function c(e){return null==e?"":e}function u(e,t){e.appendChild(t)}function g(e,t,n){e.insertBefore(t,n||null)}function f(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function m(){return p(" ")}function $(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function v(e,t){t=""+t,e.data!==t&&(e.data=t)}function h(e,t,n,s){null==n?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}function b(e){o=e}const y=[],w=[];let x=[];const k=[],C=Promise.resolve();let _=!1;function M(e){x.push(e)}const L=new Set;let S=0;function B(){if(0!==S)return;const e=o;do{try{for(;S<y.length;){const e=y[S];S++,b(e),E(e.$$)}}catch(e){throw y.length=0,S=0,e}for(b(null),y.length=0,S=0;w.length;)w.pop()();for(let e=0;e<x.length;e+=1){const t=x[e];L.has(t)||(L.add(t),t())}x.length=0}while(y.length);for(;k.length;)k.pop()();_=!1,L.clear(),b(e)}function E(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(M)}}const R=new Set;let A;function P(){A={r:0,c:[],p:A}}function T(){A.r||s(A.c),A=A.p}function H(e,t){e&&e.i&&(R.delete(e),e.i(t))}function N(e,t,n,s){if(e&&e.o){if(R.has(e))return;R.add(e),A.c.push((()=>{R.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}else s&&s()}function z(e){e&&e.c()}function I(e,n,l,r){const{fragment:o,after_update:i}=e.$$;o&&o.m(n,l),r||M((()=>{const n=e.$$.on_mount.map(t).filter(a);e.$$.on_destroy?e.$$.on_destroy.push(...n):s(n),e.$$.on_mount=[]})),i.forEach(M)}function W(e,t){const n=e.$$;null!==n.fragment&&(!function(e){const t=[],n=[];x.forEach((s=>-1===e.indexOf(s)?t.push(s):n.push(s))),n.forEach((e=>e())),x=t}(n.after_update),s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function j(e,t){-1===e.$$.dirty[0]&&(y.push(e),_||(_=!0,C.then(B)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function q(t,a,l,r,i,c,u,g=[-1]){const d=o;b(t);const p=t.$$={fragment:null,ctx:[],props:c,update:e,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(d?d.$$.context:[])),callbacks:n(),dirty:g,skip_bound:!1,root:a.target||d.$$.root};u&&u(p.root);let m=!1;if(p.ctx=l?l(t,a.props||{},((e,n,...s)=>{const a=s.length?s[0]:n;return p.ctx&&i(p.ctx[e],p.ctx[e]=a)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](a),m&&j(t,e)),n})):[],p.update(),m=!0,s(p.before_update),p.fragment=!!r&&r(p.ctx),a.target){if(a.hydrate){const e=function(e){return Array.from(e.childNodes)}(a.target);p.fragment&&p.fragment.l(e),e.forEach(f)}else p.fragment&&p.fragment.c();a.intro&&H(t.$$.fragment),I(t,a.target,a.anchor,a.customElement),B()}b(d)}class O{$destroy(){W(this,1),this.$destroy=e}$on(t,n){if(!a(n))return e;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const e=s.indexOf(n);-1!==e&&s.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function G(t){let n,s,a,l,r,o,c,p,v,h,b,y,w,x,k,C,_,M,L,S,B;return{c(){n=d("header"),s=d("div"),a=d("div"),l=d("div"),r=m(),o=d("div"),c=d("img"),v=m(),h=d("div"),b=d("h1"),b.innerHTML='Hello, I&#39;m <span class="name svelte-1l3x9wh">Christian Reyes</span>. \n                Welcome to my page!',y=m(),w=d("br"),x=m(),k=d("p"),k.textContent="I'm a software developer with an interest in fullstack and cloud development. My other interests include running, gaming, and cooking.",C=m(),_=d("div"),M=d("a"),L=d("span"),L.textContent="Download CV",S=m(),B=d("span"),B.innerHTML='<i class="fas fa-download"></i>',$(l,"class","h-shape svelte-1l3x9wh"),i(c.src,p=F)||$(c,"src",p),$(c,"alt",""),$(c,"class","portrait svelte-1l3x9wh"),$(o,"class","image"),$(a,"class","left-header svelte-1l3x9wh"),$(b,"class","title svelte-1l3x9wh"),$(k,"class","describe svelte-1l3x9wh"),$(L,"class","btn-text svelte-1l3x9wh"),$(B,"class","btn-icon svelte-1l3x9wh"),$(M,"href",D),$(M,"download","ReyesCV"),$(M,"class","main-btn svelte-1l3x9wh"),$(_,"class","btn-con svelte-1l3x9wh"),$(h,"class","right-header svelte-1l3x9wh"),$(s,"class","header-content svelte-1l3x9wh"),$(n,"class","section sec1 header active svelte-1l3x9wh")},m(e,t){g(e,n,t),u(n,s),u(s,a),u(a,l),u(a,r),u(a,o),u(o,c),u(s,v),u(s,h),u(h,b),u(h,y),u(h,w),u(h,x),u(h,k),u(h,C),u(h,_),u(_,M),u(M,L),u(M,S),u(M,B)},p:e,i:e,o:e,d(e){e&&f(n)}}}let F="./images/Face_Shote.jpg",D="./Docs/Christian_ReyesCV.pdf";class V extends O{constructor(e){super(),q(this,e,null,G,l,{})}}function J(t){let n,s,a,l,r,o,i,b,y,w,x,k;return{c(){n=d("div"),s=d("div"),a=d("p"),l=p(t[0]),r=m(),o=d("div"),i=d("p"),b=p(t[1]),y=m(),w=d("div"),x=d("span"),$(a,"class","prog-title svelte-sf8znv"),$(i,"class","prog-text svelte-sf8znv"),$(x,"class",k=c(t[0])+" svelte-sf8znv"),h(x,"width",t[1]),$(w,"class","progress svelte-sf8znv"),$(o,"class","progress-con svelte-sf8znv"),$(s,"class","progress-bar svelte-sf8znv"),$(n,"class","progress-bars svelte-sf8znv")},m(e,t){g(e,n,t),u(n,s),u(s,a),u(a,l),u(s,r),u(s,o),u(o,i),u(i,b),u(o,y),u(o,w),u(w,x)},p(e,[t]){1&t&&v(l,e[0]),2&t&&v(b,e[1]),1&t&&k!==(k=c(e[0])+" svelte-sf8znv")&&$(x,"class",k),2&t&&h(x,"width",e[1])},i:e,o:e,d(e){e&&f(n)}}}function Q(e,t,n){let{language:s}=t,{prog:a}=t;return e.$$set=e=>{"language"in e&&n(0,s=e.language),"prog"in e&&n(1,a=e.prog)},[s,a]}class Y extends O{constructor(e){super(),q(this,e,Q,J,l,{language:0,prog:1})}}function K(t){let n,s,a,l;return{c(){n=d("div"),s=p(t[0]),a=p(" - "),l=p(t[1]),$(n,"class","langBox svelte-11lnolt")},m(e,t){g(e,n,t),u(n,s),u(n,a),u(n,l)},p(e,[t]){1&t&&v(s,e[0]),2&t&&v(l,e[1])},i:e,o:e,d(e){e&&f(n)}}}function U(e,t,n){let{language:s}=t,{level:a}=t;return e.$$set=e=>{"language"in e&&n(0,s=e.language),"level"in e&&n(1,a=e.level)},[s,a]}class X extends O{constructor(e){super(),q(this,e,U,K,l,{language:0,level:1})}}function Z(t){let n,s,a,l,r,o,i,c,p,v,h,b,y,w,x,k,C,_,M,L,S,B,E,R,A,P,T,j,q,O,G,F,D,V,J,Q,K,U,Z,ee,te;return p=new Y({props:{language:"HTML",prog:"90%"}}),h=new Y({props:{language:"CSS",prog:"90%"}}),y=new Y({props:{language:"React",prog:"60%"}}),x=new Y({props:{language:"MongoDB",prog:"75%"}}),C=new Y({props:{language:"SpringBoot",prog:"60%"}}),M=new Y({props:{language:"Express",prog:"70%"}}),S=new Y({props:{language:"Python",prog:"80%"}}),E=new Y({props:{language:"Java",prog:"75%"}}),A=new Y({props:{language:"SQL",prog:"70%"}}),T=new Y({props:{language:"Bootstrap",prog:"75%"}}),q=new Y({props:{language:"C++",prog:"50%"}}),G=new Y({props:{language:"Svelte",prog:"50%"}}),Q=new X({props:{language:"English",level:"Native"}}),U=new X({props:{language:"Mandarin",level:"Intermediate"}}),ee=new X({props:{language:"Japanese",level:"Beginner"}}),{c(){n=d("section"),s=d("div"),s.innerHTML='<h2>About <span>me</span><span class="bg-text">my stats</span></h2>',a=m(),l=d("div"),l.innerHTML='<div class="left-about svelte-1d0y7do"><h4 class="svelte-1d0y7do">Information About Me</h4> \n            <p class="svelte-1d0y7do">Graduated from Lake Forest College with a double major in Computer Science and Asian Studies.\n                Along with learning programming languages and tech stacks, I also pursue learning multiple \n                languages.</p></div> \n        <div class="right-about svelte-1d0y7do"><div class="about-item svelte-1d0y7do"><div class="abt-text svelte-1d0y7do"><p class="large-text svelte-1d0y7do">5+</p> \n                    <p class="small-text svelte-1d0y7do">Projects <br/> Completed</p></div></div> \n            <div class="about-item svelte-1d0y7do"><div class="abt-text svelte-1d0y7do"><p class="large-text svelte-1d0y7do">2</p> \n                    <p class="small-text svelte-1d0y7do">Years of <br/> Experience</p></div></div> \n            <div class="about-item svelte-1d0y7do"><div class="abt-text svelte-1d0y7do"><p class="large-text svelte-1d0y7do">2</p> \n                    <p class="small-text svelte-1d0y7do">Languages <br/> Learning</p></div></div></div>',r=m(),o=d("div"),i=d("h4"),i.textContent="My Skills",c=m(),z(p.$$.fragment),v=m(),z(h.$$.fragment),b=m(),z(y.$$.fragment),w=m(),z(x.$$.fragment),k=m(),z(C.$$.fragment),_=m(),z(M.$$.fragment),L=m(),z(S.$$.fragment),B=m(),z(E.$$.fragment),R=m(),z(A.$$.fragment),P=m(),z(T.$$.fragment),j=m(),z(q.$$.fragment),O=m(),z(G.$$.fragment),F=m(),D=d("div"),V=d("h4"),V.textContent="My Languages",J=m(),z(Q.$$.fragment),K=m(),z(U.$$.fragment),Z=m(),z(ee.$$.fragment),$(s,"class","main-title"),$(l,"class","about-container svelte-1d0y7do"),$(i,"class","stat-title"),$(o,"class","about-stats svelte-1d0y7do"),$(V,"class","stat-title"),$(D,"class","lang-stats"),$(n,"class","section sec2 about svelte-1d0y7do")},m(e,t){g(e,n,t),u(n,s),u(n,a),u(n,l),u(n,r),u(n,o),u(o,i),u(o,c),I(p,o,null),u(o,v),I(h,o,null),u(o,b),I(y,o,null),u(o,w),I(x,o,null),u(o,k),I(C,o,null),u(o,_),I(M,o,null),u(o,L),I(S,o,null),u(o,B),I(E,o,null),u(o,R),I(A,o,null),u(o,P),I(T,o,null),u(o,j),I(q,o,null),u(o,O),I(G,o,null),u(n,F),u(n,D),u(D,V),u(D,J),I(Q,D,null),u(D,K),I(U,D,null),u(D,Z),I(ee,D,null),te=!0},p:e,i(e){te||(H(p.$$.fragment,e),H(h.$$.fragment,e),H(y.$$.fragment,e),H(x.$$.fragment,e),H(C.$$.fragment,e),H(M.$$.fragment,e),H(S.$$.fragment,e),H(E.$$.fragment,e),H(A.$$.fragment,e),H(T.$$.fragment,e),H(q.$$.fragment,e),H(G.$$.fragment,e),H(Q.$$.fragment,e),H(U.$$.fragment,e),H(ee.$$.fragment,e),te=!0)},o(e){N(p.$$.fragment,e),N(h.$$.fragment,e),N(y.$$.fragment,e),N(x.$$.fragment,e),N(C.$$.fragment,e),N(M.$$.fragment,e),N(S.$$.fragment,e),N(E.$$.fragment,e),N(A.$$.fragment,e),N(T.$$.fragment,e),N(q.$$.fragment,e),N(G.$$.fragment,e),N(Q.$$.fragment,e),N(U.$$.fragment,e),N(ee.$$.fragment,e),te=!1},d(e){e&&f(n),W(p),W(h),W(y),W(x),W(C),W(M),W(S),W(E),W(A),W(T),W(q),W(G),W(Q),W(U),W(ee)}}}class ee extends O{constructor(e){super(),q(this,e,null,Z,l,{})}}function te(t){let n,s,a,l,r,o,c,h,b,y,w,x,k,C,_;return{c(){n=d("div"),s=d("div"),a=d("img"),r=m(),o=d("div"),c=d("a"),h=d("h3"),h.textContent="Open Site",b=m(),y=d("div"),w=d("a"),x=d("i"),k=m(),C=d("h3"),_=p(t[3]),i(a.src,l=t[0])||$(a,"src",l),$(a,"alt",""),$(a,"class","svelte-t43378"),$(s,"class","images"),$(h,"class","svelte-t43378"),$(c,"href",t[1]),$(c,"target","_blank"),$(x,"class","fab fa-github svelte-t43378"),$(w,"class","icon svelte-t43378"),$(w,"href",t[2]),$(w,"target","_blank"),$(y,"class","icons svelte-t43378"),$(o,"class","hover-item svelte-t43378"),$(C,"class","description svelte-t43378"),$(n,"class","portfolio-item svelte-t43378")},m(e,t){g(e,n,t),u(n,s),u(s,a),u(n,r),u(n,o),u(o,c),u(c,h),u(o,b),u(o,y),u(y,w),u(w,x),u(n,k),u(n,C),u(C,_)},p(e,[t]){1&t&&!i(a.src,l=e[0])&&$(a,"src",l),2&t&&$(c,"href",e[1]),4&t&&$(w,"href",e[2]),8&t&&v(_,e[3])},i:e,o:e,d(e){e&&f(n)}}}function ne(e,t,n){let{img:s}=t,{link:a}=t,{linkref:l}=t,{desc:r}=t;return e.$$set=e=>{"img"in e&&n(0,s=e.img),"link"in e&&n(1,a=e.link),"linkref"in e&&n(2,l=e.linkref),"desc"in e&&n(3,r=e.desc)},[s,a,l,r]}class se extends O{constructor(e){super(),q(this,e,ne,te,l,{img:0,link:1,linkref:2,desc:3})}}function ae(t){let n,s,a,l,r,o,i,c,p,v,h,b,y,w,x,k,C;return i=new se({props:{img:le,link:"https://printrat6962.github.io/RestaurantWebite/",linkref:"https://github.com/PrintRat6962/RestaurantWebite",desc:"Ramen Site"}}),p=new se({props:{img:re,link:"https://printrat6962.github.io/BikeWebsite/",linkref:"https://github.com/PrintRat6962/BikeWebsite",desc:"Bike Shop Site"}}),w=new se({props:{img:oe,link:"https://printrat6962.github.io/AirBNBClone/",linkref:"https://github.com/PrintRat6962/AirBNBClone",desc:"AirBNB Clone Site"}}),k=new se({props:{img:ie,link:"https://printrat6962.github.io/MemeGeneratorReact/",linkref:"https://github.com/PrintRat6962/MemeGeneratorReact",desc:"Meme Generator"}}),{c(){n=d("section"),s=d("div"),s.innerHTML='<h2>My <span>Portfolio</span><span class="bg-text">My Work</span></h2>',a=m(),l=d("h3"),l.textContent="HTML & CSS",r=m(),o=d("div"),z(i.$$.fragment),c=m(),z(p.$$.fragment),v=m(),h=d("h3"),h.textContent="React",b=m(),y=d("div"),z(w.$$.fragment),x=m(),z(k.$$.fragment),$(s,"class","main-title"),$(l,"class","sec-title svelte-8rkq0c"),$(o,"class","port-sec svelte-8rkq0c"),$(h,"class","sec-title svelte-8rkq0c"),$(y,"class","port-sec svelte-8rkq0c"),$(n,"class","section sec3 portfolio svelte-8rkq0c")},m(e,t){g(e,n,t),u(n,s),u(n,a),u(n,l),u(n,r),u(n,o),I(i,o,null),u(o,c),I(p,o,null),u(n,v),u(n,h),u(n,b),u(n,y),I(w,y,null),u(y,x),I(k,y,null),C=!0},p:e,i(e){C||(H(i.$$.fragment,e),H(p.$$.fragment,e),H(w.$$.fragment,e),H(k.$$.fragment,e),C=!0)},o(e){N(i.$$.fragment,e),N(p.$$.fragment,e),N(w.$$.fragment,e),N(k.$$.fragment,e),C=!1},d(e){e&&f(n),W(i),W(p),W(w),W(k)}}}let le="./images/ramen_site.png",re="./images/bike_site.png",oe="./images/airBNBclone.png",ie="./images/memeGen.png";class ce extends O{constructor(e){super(),q(this,e,null,ae,l,{})}}function ue(t){let n,s,a,l,r,o,i,h,b,y;return{c(){n=d("div"),s=d("div"),a=d("i"),r=m(),o=p(t[1]),i=p(":"),h=m(),b=d("p"),y=p(t[2]),$(a,"class",l=c(t[0])+" svelte-gnhyev"),$(s,"class","icon svelte-gnhyev"),$(b,"class","svelte-gnhyev"),$(n,"class","contact-item svelte-gnhyev")},m(e,t){g(e,n,t),u(n,s),u(s,a),u(s,r),u(s,o),u(s,i),u(n,h),u(n,b),u(b,y)},p(e,[t]){1&t&&l!==(l=c(e[0])+" svelte-gnhyev")&&$(a,"class",l),2&t&&v(o,e[1]),4&t&&v(y,e[2])},i:e,o:e,d(e){e&&f(n)}}}function ge(e,t,n){let{icon:s}=t,{item:a}=t,{ans:l}=t;return e.$$set=e=>{"icon"in e&&n(0,s=e.icon),"item"in e&&n(1,a=e.item),"ans"in e&&n(2,l=e.ans)},[s,a,l]}class fe extends O{constructor(e){super(),q(this,e,ge,ue,l,{icon:0,item:1,ans:2})}}function de(t){let n,s,a,l,r,o,i,c,p,v,h,b,y,w,x,k,C;return b=new fe({props:{icon:"fas fa-envelope",item:"Email",ans:"xtianericreyes@gmail.com"}}),w=new fe({props:{icon:"fas fa-user-graduate",item:"Education",ans:"Lake Forest College, IL"}}),k=new fe({props:{icon:"fas fa-location-pin",item:"Location",ans:"Chicago, IL"}}),{c(){n=d("section"),s=d("div"),a=d("div"),a.innerHTML='<h2>Contact <span>Me</span><span class="bg-text">Let&#39;s Talk</span></h2>',l=m(),r=d("div"),o=d("div"),i=d("h4"),i.textContent="Info On Me",c=m(),p=d("p"),p.textContent="Want to keep in touch? Feel free to reach out with the email below!",v=m(),h=d("div"),z(b.$$.fragment),y=m(),z(w.$$.fragment),x=m(),z(k.$$.fragment),$(a,"class","main-title"),$(i,"class","svelte-1ary2b9"),$(p,"class","description svelte-1ary2b9"),$(h,"class","contact-info svelte-1ary2b9"),$(o,"class","left-contact svelte-1ary2b9"),$(r,"class","contact-content-con svelte-1ary2b9"),$(s,"class","contact-container"),$(n,"class","section sec4 contact svelte-1ary2b9")},m(e,t){g(e,n,t),u(n,s),u(s,a),u(s,l),u(s,r),u(r,o),u(o,i),u(o,c),u(o,p),u(o,v),u(o,h),I(b,h,null),u(h,y),I(w,h,null),u(h,x),I(k,h,null),C=!0},p:e,i(e){C||(H(b.$$.fragment,e),H(w.$$.fragment,e),H(k.$$.fragment,e),C=!0)},o(e){N(b.$$.fragment,e),N(w.$$.fragment,e),N(k.$$.fragment,e),C=!1},d(e){e&&f(n),W(b),W(w),W(k)}}}class pe extends O{constructor(e){super(),q(this,e,null,de,l,{})}}function me(e,t,n){const s=e.slice();return s[3]=t[n],s}function $e(e){let t,n;return t=new V({}),{c(){z(t.$$.fragment)},m(e,s){I(t,e,s),n=!0},i(e){n||(H(t.$$.fragment,e),n=!0)},o(e){N(t.$$.fragment,e),n=!1},d(e){W(t,e)}}}function ve(e){let t,n;return t=new pe({}),{c(){z(t.$$.fragment)},m(e,s){I(t,e,s),n=!0},i(e){n||(H(t.$$.fragment,e),n=!0)},o(e){N(t.$$.fragment,e),n=!1},d(e){W(t,e)}}}function he(e){let t,n;return t=new ce({}),{c(){z(t.$$.fragment)},m(e,s){I(t,e,s),n=!0},i(e){n||(H(t.$$.fragment,e),n=!0)},o(e){N(t.$$.fragment,e),n=!1},d(e){W(t,e)}}}function be(e){let t,n;return t=new ee({}),{c(){z(t.$$.fragment)},m(e,s){I(t,e,s),n=!0},i(e){n||(H(t.$$.fragment,e),n=!0)},o(e){N(t.$$.fragment,e),n=!1},d(e){W(t,e)}}}function ye(e){let t;return{c(){t=d("i"),$(t,"class","fa-regular fa-envelope svelte-3wokn0")},m(e,n){g(e,t,n)},d(e){e&&f(t)}}}function we(e){let t;return{c(){t=d("i"),$(t,"class","fa-solid fa-briefcase svelte-3wokn0")},m(e,n){g(e,t,n)},d(e){e&&f(t)}}}function xe(e){let t;return{c(){t=d("i"),$(t,"class","fa-solid fa-user svelte-3wokn0")},m(e,n){g(e,t,n)},d(e){e&&f(t)}}}function ke(e){let t;return{c(){t=d("i"),$(t,"class","fa-solid fa-house svelte-3wokn0")},m(e,n){g(e,t,n)},d(e){e&&f(t)}}}function Ce(e){let t,n,s,a,l;let r=function(e,t){return 1===e[3]?ke:2===e[3]?xe:3===e[3]?we:ye}(e),o=r(e);function i(){return e[2](e[3])}return{c(){t=d("div"),o.c(),n=m(),$(t,"class",s="control "+(e[3]===e[0]+1&&"active-btn")+" svelte-3wokn0"),$(t,"data-id",e[3])},m(e,s){var r,c,f,d;g(e,t,s),o.m(t,null),u(t,n),a||(c="click",f=i,(r=t).addEventListener(c,f,d),l=()=>r.removeEventListener(c,f,d),a=!0)},p(n,a){e=n,1&a&&s!==(s="control "+(e[3]===e[0]+1&&"active-btn")+" svelte-3wokn0")&&$(t,"class",s)},d(e){e&&f(t),o.d(),a=!1,l()}}}function _e(e){let t,n,s,a,l,r,o,i,c=0===e[0]&&$e();const p=[be,he,ve],v=[];function h(e,t){return 1===e[0]?0:2===e[0]?1:3===e[0]?2:-1}~(a=h(e))&&(l=v[a]=p[a](e));let b=Array.from({length:4},Me),y=[];for(let t=0;t<b.length;t+=1)y[t]=Ce(me(e,b,t));return{c(){t=d("main"),c&&c.c(),n=m(),s=d("main"),l&&l.c(),r=m(),o=d("div");for(let e=0;e<y.length;e+=1)y[e].c();$(o,"class","controls svelte-3wokn0")},m(e,l){g(e,t,l),c&&c.m(t,null),u(t,n),u(t,s),~a&&v[a].m(s,null),u(t,r),u(t,o);for(let e=0;e<y.length;e+=1)y[e]&&y[e].m(o,null);i=!0},p(e,[r]){0===e[0]?c?1&r&&H(c,1):(c=$e(),c.c(),H(c,1),c.m(t,n)):c&&(P(),N(c,1,1,(()=>{c=null})),T());let i=a;if(a=h(e),a!==i&&(l&&(P(),N(v[i],1,1,(()=>{v[i]=null})),T()),~a?(l=v[a],l||(l=v[a]=p[a](e),l.c()),H(l,1),l.m(s,null)):l=null),3&r){let t;for(b=Array.from({length:4},Me),t=0;t<b.length;t+=1){const n=me(e,b,t);y[t]?y[t].p(n,r):(y[t]=Ce(n),y[t].c(),y[t].m(o,null))}for(;t<y.length;t+=1)y[t].d(1);y.length=b.length}},i(e){i||(H(c),H(l),i=!0)},o(e){N(c),N(l),i=!1},d(e){e&&f(t),c&&c.d(),~a&&v[a].d(),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(y,e)}}}const Me=(e,t)=>t+1;function Le(e,t,n){let s=0;const a=e=>{n(0,s=e),console.log(s)};return[s,a,e=>a(e-1)]}return new class extends O{constructor(e){super(),q(this,e,Le,_e,l,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
