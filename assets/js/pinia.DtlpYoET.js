import{m as t,p as e,q as n,s,v as c,x as o,y as r,z as a,A as i,B as u,C as p,D as f,E as l,G as h,H as b,g as d}from"./vue.vEg_Pv0G.js";let S;const setActivePinia=t=>S=t,g=Symbol();function isPlainObject(t){return t&&"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!=typeof t.toJSON}var y,v;function createPinia(){const c=n(!0),o=c.run((()=>t({})));let r=[],a=[];const i=e({install(t){setActivePinia(i),i._a=t,t.provide(g,i),t.config.globalProperties.$pinia=i,a.forEach((t=>r.push(t))),a=[]},use(t){return this._a||s?r.push(t):a.push(t),this},_p:r,_a:null,_e:c,_s:new Map,state:o});return i}(v=y||(y={})).direct="direct",v.patchObject="patch object",v.patchFunction="patch function";const noop=()=>{};function addSubscription(t,e,n,s=noop){t.push(e);const removeSubscription=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),s())};return!n&&f()&&l(removeSubscription),removeSubscription}function triggerSubscriptions(t,...e){t.slice().forEach((t=>{t(...e)}))}const fallbackRunWithContext=t=>t(),j=Symbol(),O=Symbol();function mergeReactiveObjects(t,e){t instanceof Map&&e instanceof Map?e.forEach(((e,n)=>t.set(n,e))):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],c=t[n];isPlainObject(c)&&isPlainObject(s)&&t.hasOwnProperty(n)&&!a(s)&&!i(s)?t[n]=mergeReactiveObjects(c,s):t[n]=s}return t}const _=Symbol(),{assign:m}=Object;function createSetupStore(e,s,c={},p,f,l){let b;const d=m({actions:{}},c),S={deep:!0};let g,v,$,P=[],E=[];const w=p.state.value[e];let x;function $patch(t){let n;g=v=!1,"function"==typeof t?(t(p.state.value[e]),n={type:y.patchFunction,storeId:e,events:$}):(mergeReactiveObjects(p.state.value[e],t),n={type:y.patchObject,payload:t,storeId:e,events:$});const s=x=Symbol();h().then((()=>{x===s&&(g=!0)})),v=!0,triggerSubscriptions(P,n,p.state.value[e])}l||w||(p.state.value[e]={}),t({});const R=l?function(){const{state:t}=c,e=t?t():{};this.$patch((t=>{m(t,e)}))}:noop,action=(t,n="")=>{if(j in t)return t[O]=n,t;const wrappedAction=function(){setActivePinia(p);const n=Array.from(arguments),s=[],c=[];let o;triggerSubscriptions(E,{args:n,name:wrappedAction[O],store:I,after:function(t){s.push(t)},onError:function(t){c.push(t)}});try{o=t.apply(this&&this.$id===e?this:I,n)}catch(r){throw triggerSubscriptions(c,r),r}return o instanceof Promise?o.then((t=>(triggerSubscriptions(s,t),t))).catch((t=>(triggerSubscriptions(c,t),Promise.reject(t)))):(triggerSubscriptions(s,o),o)};return wrappedAction[j]=!0,wrappedAction[O]=n,wrappedAction},A={_p:p,$id:e,$onAction:addSubscription.bind(null,E),$patch:$patch,$reset:R,$subscribe(t,n={}){const s=addSubscription(P,t,n.detached,(()=>c())),c=b.run((()=>o((()=>p.state.value[e]),(s=>{("sync"===n.flush?v:g)&&t({storeId:e,type:y.direct,events:$},s)}),m({},S,n))));return s},$dispose:function(){b.stop(),P=[],E=[],p._s.delete(e)}},I=r(A);p._s.set(e,I);const M=(p._a&&p._a.runWithContext||fallbackRunWithContext)((()=>p._e.run((()=>(b=n()).run((()=>s({action:action})))))));for(const t in M){const n=M[t];if(a(n)&&(!a(F=n)||!F.effect)||i(n))l||(!w||isPlainObject(C=n)&&C.hasOwnProperty(_)||(a(n)?n.value=w[t]:mergeReactiveObjects(n,w[t])),p.state.value[e][t]=n);else if("function"==typeof n){const e=action(n,t);M[t]=e,d.actions[t]=n}}var C,F;return m(I,M),m(u(I),M),Object.defineProperty(I,"$state",{get:()=>p.state.value[e],set:t=>{$patch((e=>{m(e,t)}))}}),p._p.forEach((t=>{m(I,b.run((()=>t({store:I,app:p._a,pinia:p,options:d}))))})),w&&l&&c.hydrate&&c.hydrate(I.$state,w),g=!0,v=!0,I}function defineStore(t,n,s){let o,r;const a="function"==typeof n;function useStore(t,s){const i=p();return(t=t||(i?c(g,null):null))&&setActivePinia(t),(t=S)._s.has(o)||(a?createSetupStore(o,n,r,t):function(t,n,s){const{state:c,actions:o,getters:r}=n,a=s.state.value[t];let i;i=createSetupStore(t,(function(){a||(s.state.value[t]=c?c():{});const n=b(s.state.value[t]);return m(n,o,Object.keys(r||{}).reduce(((n,c)=>(n[c]=e(d((()=>{setActivePinia(s);const e=s._s.get(t);return r[c].call(e,e)}))),n)),{}))}),n,s,0,!0)}(o,r,t)),t._s.get(o)}return o=t,r=a?s:n,useStore.$id=o,useStore}export{createPinia as c,defineStore as d};
