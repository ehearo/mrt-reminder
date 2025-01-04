const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/FavoritesView.DMJfnXYI.js","assets/js/vendor.C-oNdmMQ.js","assets/js/MapView.XPydiLO0.js","assets/css/MapView.ncHUzQb-.css","assets/js/LinesView.CfwpRgEw.js","assets/css/LinesView.CZHPaLI6.css","assets/js/LineDetailView.DXDLsP7-.js","assets/css/LineDetailView.Bl4dbzuo.css","assets/js/StationDetailView.DMz1qWyR.js","assets/css/StationDetailView.Bzlx-5Ub.css","assets/js/FareView.OkPsXRNX.js","assets/js/NotFoundView.Df7ug-yY.js"])))=>i.map(i=>d[i]);
import{n as e,i as t,v as s,u as i,r as m,w as D,a as T,o as a,b as n,c as o,g as r,d as l,h as c,e as u,F as f,f as d,j as p,s as h,k as y,l as g,m as S,p as b,T as _,q as v,t as O,x as E,y as L,z as R,A as N,B as k,C,D as w,E as j,G as F,H as x,I as P,J as M,K as A,L as I,M as B,N as G,O as $,P as U,Q as H,R as W}from"./vendor.C-oNdmMQ.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const z=new Set(["title","titleTemplate","script","style","noscript"]),J=new Set(["base","meta","link","style","script","noscript"]),V=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),q=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),Y=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),X="undefined"!=typeof window;function K(e){let t=9;for(let s=0;s<e.length;)t=Math.imul(t^e.charCodeAt(s++),9**9);return(65536+(t^t>>>9)).toString(16).substring(1,8).toLowerCase()}function Z(e){if(e._h)return e._h;if(e._d)return K(e._d);let t=`${e.tag}:${e.textContent||e.innerHTML||""}:`;for(const s in e.props)t+=`${s}:${String(e.props[s])},`;return K(t)}function Q(e,t,s,i){const m=i||se("object"!=typeof t||"function"==typeof t||t instanceof Promise?{["script"===e||"noscript"===e||"style"===e?"innerHTML":"textContent"]:t}:{...t},"templateParams"===e||"titleTemplate"===e);if(m instanceof Promise)return m.then((i=>Q(e,t,s,i)));const D={tag:e,props:m};for(const T of Y){const e=void 0!==D.props[T]?D.props[T]:s[T];void 0!==e&&(("innerHTML"!==T&&"textContent"!==T&&"children"!==T||z.has(D.tag))&&(D["children"===T?"innerHTML":T]=e),delete D.props[T])}return D.props.body&&(D.tagPosition="bodyClose",delete D.props.body),"script"===D.tag&&"object"==typeof D.innerHTML&&(D.innerHTML=JSON.stringify(D.innerHTML),D.props.type=D.props.type||"application/json"),Array.isArray(D.props.content)?D.props.content.map((e=>({...D,props:{...D.props,content:e}}))):D}function ee(e,t){var s;const i="class"===e?" ":";";return t&&"object"==typeof t&&!Array.isArray(t)&&(t=Object.entries(t).filter((([,e])=>e)).map((([t,s])=>"style"===e?`${t}:${s}`:t))),null==(s=String(Array.isArray(t)?t.join(i):t))?void 0:s.split(i).filter((e=>Boolean(e.trim()))).join(i)}function te(e,t,s,i){for(let m=i;m<s.length;m+=1){const i=s[m];if("class"!==i&&"style"!==i){if(e[i]instanceof Promise)return e[i].then((D=>(e[i]=D,te(e,t,s,m))));if(!t&&!Y.has(i)){const t=String(e[i]),s=i.startsWith("data-");"true"===t||""===t?e[i]=!s||"true":e[i]||(s&&"false"===t?e[i]="false":delete e[i])}}else e[i]=ee(i,e[i])}}function se(e,t=!1){const s=te(e,t,Object.keys(e),0);return s instanceof Promise?s.then((()=>e)):e}function ie(e,t,s){for(let i=s;i<t.length;i+=1){const s=t[i];if(s instanceof Promise)return s.then((s=>(t[i]=s,ie(e,t,i))));Array.isArray(s)?e.push(...s):e.push(s)}}function me(e){const t=[],s=e.resolvedInput;for(const T in s){if(!Object.prototype.hasOwnProperty.call(s,T))continue;const i=s[T];if(void 0!==i&&V.has(T))if(Array.isArray(i))for(const s of i)t.push(Q(T,s,e));else t.push(Q(T,i,e))}if(0===t.length)return[];const i=[];return D=()=>i.map(((t,s)=>(t._e=e._i,e.mode&&(t._m=e.mode),t._p=(e._i<<10)+s,t))),(m=ie(i,t,0))instanceof Promise?m.then(D):D();var m,D}const De=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),Te={base:-10,title:10},ae={critical:-80,high:-10,low:20};function ne(e){const t=e.tagPriority;if("number"==typeof t)return t;let s=100;return"meta"===e.tag?"content-security-policy"===e.props["http-equiv"]?s=-30:e.props.charset?s=-20:"viewport"===e.props.name&&(s=-15):"link"===e.tag&&"preconnect"===e.props.rel?s=20:e.tag in Te&&(s=Te[e.tag]),t&&t in ae?s+ae[t]:s}const oe=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],re=["name","property","http-equiv"];function le(e){const{props:t,tag:s}=e;if(q.has(s))return s;if("link"===s&&"canonical"===t.rel)return"canonical";if(t.charset)return"charset";if(t.id)return`${s}:id:${t.id}`;for(const i of re)if(void 0!==t[i])return`${s}:${i}:${t[i]}`;return!1}const ce="%separator",ue=new RegExp(`${ce}(?:\\s*${ce})*`,"g");function fe(e,t,s,i=!1){if("string"!=typeof e||!e.includes("%"))return e;let m=e;try{m=decodeURI(e)}catch{}const D=m.match(/%\w+(?:\.\w+)?/g);if(!D)return e;const T=e.includes(ce);return e=e.replace(/%\w+(?:\.\w+)?/g,(e=>{if(e===ce||!D.includes(e))return e;const s=function(e,t,s=!1){var i;let m;if("s"===t||"pageTitle"===t)m=e.pageTitle;else if(t.includes(".")){const s=t.indexOf(".");m=null==(i=e[t.substring(0,s)])?void 0:i[t.substring(s+1)]}else m=e[t];if(void 0!==m)return s?(m||"").replace(/"/g,'\\"'):m||""}(t,e.slice(1),i);return void 0!==s?s:e})).trim(),T&&(e.endsWith(ce)&&(e=e.slice(0,-10)),e.startsWith(ce)&&(e=e.slice(10)),e=e.replace(ue,s).trim()),e}function de(e,t){return null==e?t||null:"function"==typeof e?e(t):e}function pe(e){return t=>{var s,i;const m=(null==(i=null==(s=t.resolvedOptions.document)?void 0:s.head.querySelector('script[id="unhead:payload"]'))?void 0:i.innerHTML)||!1;return m&&t.push(JSON.parse(m)),{mode:"client",hooks:{"entries:updated":t=>{!function(e,t={}){const s=t.delayFn||(e=>setTimeout(e,10));e._domDebouncedUpdatePromise=e._domDebouncedUpdatePromise||new Promise((i=>s((()=>async function(e,t={}){const s=t.document||e.resolvedOptions.document;if(!s||!e.dirty)return;const i={shouldRender:!0,tags:[]};return await e.hooks.callHook("dom:beforeRender",i),i.shouldRender?(e._domUpdatePromise||(e._domUpdatePromise=new Promise((async t=>{var i;const m=(await e.resolveTags()).map((e=>({tag:e,id:J.has(e.tag)?Z(e):e.tag,shouldRender:!0})));let D=e._dom;if(!D){D={elMap:{htmlAttrs:s.documentElement,bodyAttrs:s.body}};const e=new Set;for(const t of["body","head"]){const m=null==(i=s[t])?void 0:i.children;for(const t of m){const s=t.tagName.toLowerCase();if(!J.has(s))continue;const i={tag:s,props:await se(t.getAttributeNames().reduce(((e,s)=>({...e,[s]:t.getAttribute(s)})),{})),innerHTML:t.innerHTML},m=le(i);let T=m,a=1;for(;T&&e.has(T);)T=`${m}:${a++}`;T&&(i._d=T,e.add(T)),D.elMap[t.getAttribute("data-hid")||Z(i)]=t}}}function T(e,t,s){const i=`${e}:${t}`;D.sideEffects[i]=s,delete D.pendingSideEffects[i]}function a({id:e,$el:t,tag:i}){const m=i.tag.endsWith("Attrs");if(D.elMap[e]=t,m||(i.textContent&&i.textContent!==t.textContent&&(t.textContent=i.textContent),i.innerHTML&&i.innerHTML!==t.innerHTML&&(t.innerHTML=i.innerHTML),T(e,"el",(()=>{var t;null==(t=D.elMap[e])||t.remove(),delete D.elMap[e]}))),i._eventHandlers)for(const D in i._eventHandlers)Object.prototype.hasOwnProperty.call(i._eventHandlers,D)&&""!==t.getAttribute(`data-${D}`)&&(("bodyAttrs"===i.tag?s.defaultView:t).addEventListener(D.substring(2),i._eventHandlers[D].bind(t)),t.setAttribute(`data-${D}`,""));for(const s in i.props){if(!Object.prototype.hasOwnProperty.call(i.props,s))continue;const D=i.props[s],a=`attr:${s}`;if("class"===s){if(!D)continue;for(const s of D.split(" "))m&&T(e,`${a}:${s}`,(()=>t.classList.remove(s))),!t.classList.contains(s)&&t.classList.add(s)}else if("style"===s){if(!D)continue;for(const s of D.split(";")){const i=s.indexOf(":"),m=s.substring(0,i).trim(),D=s.substring(i+1).trim();T(e,`${a}:${m}`,(()=>{t.style.removeProperty(m)})),t.style.setProperty(m,D)}}else t.getAttribute(s)!==D&&t.setAttribute(s,!0===D?"":String(D)),m&&T(e,a,(()=>t.removeAttribute(s)))}}D.pendingSideEffects={...D.sideEffects},D.sideEffects={};const n=[],o={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const e of m){const{tag:t,shouldRender:i,id:m}=e;i&&("title"!==t.tag?(e.$el=e.$el||D.elMap[m],e.$el?a(e):J.has(t.tag)&&n.push(e)):s.title=t.textContent)}for(const e of n){const t=e.tag.tagPosition||"head";e.$el=s.createElement(e.tag.tag),a(e),o[t]=o[t]||s.createDocumentFragment(),o[t].appendChild(e.$el)}for(const r of m)await e.hooks.callHook("dom:renderTag",r,s,T);o.head&&s.head.appendChild(o.head),o.bodyOpen&&s.body.insertBefore(o.bodyOpen,s.body.firstChild),o.bodyClose&&s.body.appendChild(o.bodyClose);for(const e in D.pendingSideEffects)D.pendingSideEffects[e]();e._dom=D,await e.hooks.callHook("dom:rendered",{renders:m}),t()})).finally((()=>{e._domUpdatePromise=void 0,e.dirty=!1}))),e._domUpdatePromise):void 0}(e,t).then((()=>{delete e._domDebouncedUpdatePromise,i()}))))))}(t,e)}}}}}function he(e,t={},s){for(const i in e){const m=e[i],D=s?`${s}:${i}`:i;"object"==typeof m&&null!==m?he(m,t,D):"function"==typeof m&&(t[D]=m)}return t}const ye={run:e=>e()},ge=void 0!==console.createTask?console.createTask:()=>ye;function Se(e,t){const s=t.shift(),i=ge(s);return e.reduce(((e,s)=>e.then((()=>i.run((()=>s(...t)))))),Promise.resolve())}function be(e,t){const s=t.shift(),i=ge(s);return Promise.all(e.map((e=>i.run((()=>e(...t))))))}function _e(e,t){for(const s of[...e])s(t)}class ve{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,t,s={}){if(!e||"function"!=typeof t)return()=>{};const i=e;let m;for(;this._deprecatedHooks[e];)m=this._deprecatedHooks[e],e=m.to;if(m&&!s.allowDeprecated){let e=m.message;e||(e=`${i} hook has been deprecated`+(m.to?`, please use ${m.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(e)||this._deprecatedMessages.add(e)}if(!t.name)try{Object.defineProperty(t,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(t),()=>{t&&(this.removeHook(e,t),t=void 0)}}hookOnce(e,t){let s,i=(...e)=>("function"==typeof s&&s(),s=void 0,i=void 0,t(...e));return s=this.hook(e,i),s}removeHook(e,t){if(this._hooks[e]){const s=this._hooks[e].indexOf(t);-1!==s&&this._hooks[e].splice(s,1),0===this._hooks[e].length&&delete this._hooks[e]}}deprecateHook(e,t){this._deprecatedHooks[e]="string"==typeof t?{to:t}:t;const s=this._hooks[e]||[];delete this._hooks[e];for(const i of s)this.hook(e,i)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const t in e)this.deprecateHook(t,e[t])}addHooks(e){const t=he(e),s=Object.keys(t).map((e=>this.hook(e,t[e])));return()=>{for(const e of s.splice(0,s.length))e()}}removeHooks(e){const t=he(e);for(const s in t)this.removeHook(s,t[s])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...t){return t.unshift(e),this.callHookWith(Se,e,...t)}callHookParallel(e,...t){return t.unshift(e),this.callHookWith(be,e,...t)}callHookWith(e,t,...s){const i=this._before||this._after?{name:t,args:s,context:{}}:void 0;this._before&&_e(this._before,i);const m=e(t in this._hooks?[...this._hooks[t]]:[],s);return m instanceof Promise?m.finally((()=>{this._after&&i&&_e(this._after,i)})):(this._after&&i&&_e(this._after,i),m)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(void 0!==this._before){const t=this._before.indexOf(e);-1!==t&&this._before.splice(t,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(void 0!==this._after){const t=this._after.indexOf(e);-1!==t&&this._after.splice(t,1)}}}}const Oe=new Set(["templateParams","htmlAttrs","bodyAttrs"]),Ee={hooks:{"tag:normalise":({tag:e})=>{e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.key&&(e.key=e.props.key,delete e.props.key);const t=le(e);!t||t.startsWith("meta:og:")||t.startsWith("meta:twitter:")||delete e.key;const s=t||!!e.key&&`${e.tag}:${e.key}`;s&&(e._d=s)},"tags:resolve":e=>{const t=Object.create(null);for(const i of e.tags){const e=(i.key?`${i.tag}:${i.key}`:i._d)||Z(i),s=t[e];if(s){let m=null==i?void 0:i.tagDuplicateStrategy;if(!m&&Oe.has(i.tag)&&(m="merge"),"merge"===m){const m=s.props;m.style&&i.props.style&&(";"!==m.style[m.style.length-1]&&(m.style+=";"),i.props.style=`${m.style} ${i.props.style}`),m.class&&i.props.class?i.props.class=`${m.class} ${i.props.class}`:m.class&&(i.props.class=m.class),t[e].props={...m,...i.props};continue}if(i._e===s._e){s._duped=s._duped||[],i._d=`${s._d}:${s._duped.length+1}`,s._duped.push(i);continue}if(ne(i)>ne(s))continue}i.innerHTML||i.textContent||0!==Object.keys(i.props).length||!J.has(i.tag)?t[e]=i:delete t[e]}const s=[];for(const i in t){const e=t[i],m=e._duped;s.push(e),m&&(delete e._duped,s.push(...m))}e.tags=s,e.tags=e.tags.filter((e=>!("meta"===e.tag&&(e.props.name||e.props.property)&&!e.props.content)))}}},Le=new Set(["script","link","bodyAttrs"]),Re=e=>({hooks:{"tags:resolve":t=>{for(const s of t.tags){if(!Le.has(s.tag))continue;const t=s.props;for(const i in t){if("o"!==i[0]||"n"!==i[1])continue;if(!Object.prototype.hasOwnProperty.call(t,i))continue;const m=t[i];"function"==typeof m&&(e.ssr&&De.has(i)?t[i]=`this.dataset.${i}fired = true`:delete t[i],s._eventHandlers=s._eventHandlers||{},s._eventHandlers[i]=m)}e.ssr&&s._eventHandlers&&(s.props.src||s.props.href)&&(s.key=s.key||K(s.props.src||s.props.href))}},"dom:renderTag":({$el:e,tag:t})=>{var s,i;const m=null==e?void 0:e.dataset;if(m)for(const D in m){if(!D.endsWith("fired"))continue;const m=D.slice(0,-5);De.has(m)&&(null==(i=null==(s=t._eventHandlers)?void 0:s[m])||i.call(e,new Event(m.substring(2))))}}}}),Ne=new Set(["link","style","script","noscript"]),ke={hooks:{"tag:normalise":({tag:e})=>{e.key&&Ne.has(e.tag)&&(e.props["data-hid"]=e._h=K(e.key))}}},Ce={mode:"server",hooks:{"tags:beforeResolve":e=>{const t={};let s=!1;for(const i of e.tags)"server"!==i._m||"titleTemplate"!==i.tag&&"templateParams"!==i.tag&&"title"!==i.tag||(t[i.tag]="title"===i.tag||"titleTemplate"===i.tag?i.textContent:i.props,s=!0);s&&e.tags.push({tag:"script",innerHTML:JSON.stringify(t),props:{id:"unhead:payload",type:"application/json"}})}}},we={hooks:{"tags:resolve":e=>{var t;for(const s of e.tags)if("string"==typeof s.tagPriority)for(const{prefix:i,offset:m}of oe){if(!s.tagPriority.startsWith(i))continue;const D=s.tagPriority.substring(i.length),T=null==(t=e.tags.find((e=>e._d===D)))?void 0:t._p;if(void 0!==T){s._p=T+m;break}}e.tags.sort(((e,t)=>{const s=ne(e),i=ne(t);return s<i?-1:s>i?1:e._p-t._p}))}}},je={meta:"content",link:"href",htmlAttrs:"lang"},Fe=["innerHTML","textContent"],xe=e=>({hooks:{"tags:resolve":t=>{var s;const{tags:i}=t;let m;for(let e=0;e<i.length;e+=1)"templateParams"===i[e].tag&&(m=t.tags.splice(e,1)[0].props,e-=1);const D=m||{},T=D.separator||"|";delete D.separator,D.pageTitle=fe(D.pageTitle||(null==(s=i.find((e=>"title"===e.tag)))?void 0:s.textContent)||"",D,T);for(const e of i){if(!1===e.processTemplateParams)continue;const t=je[e.tag];if(t&&"string"==typeof e.props[t])e.props[t]=fe(e.props[t],D,T);else if(e.processTemplateParams||"titleTemplate"===e.tag||"title"===e.tag)for(const s of Fe)"string"==typeof e[s]&&(e[s]=fe(e[s],D,T,"script"===e.tag&&e.props.type.endsWith("json")))}e._templateParams=D,e._separator=T},"tags:afterResolve":({tags:t})=>{let s;for(let e=0;e<t.length;e+=1){const i=t[e];"title"===i.tag&&!1!==i.processTemplateParams&&(s=i)}(null==s?void 0:s.textContent)&&(s.textContent=fe(s.textContent,e._templateParams,e._separator))}}}),Pe={hooks:{"tags:resolve":e=>{const{tags:t}=e;let s,i;for(let m=0;m<t.length;m+=1){const e=t[m];"title"===e.tag?s=e:"titleTemplate"===e.tag&&(i=e)}if(i&&s){const t=de(i.textContent,s.textContent);null!==t?s.textContent=t||s.textContent:e.tags.splice(e.tags.indexOf(s),1)}else if(i){const e=de(i.textContent);null!==e&&(i.textContent=e,i.tag="title",i=void 0)}i&&e.tags.splice(e.tags.indexOf(i),1)}}},Me={hooks:{"tags:afterResolve":e=>{for(const t of e.tags)"string"==typeof t.innerHTML&&(!t.innerHTML||"application/ld+json"!==t.props.type&&"application/json"!==t.props.type?t.innerHTML=t.innerHTML.replace(new RegExp(`</${t.tag}`,"g"),`<\\/${t.tag}`):t.innerHTML=t.innerHTML.replace(/</g,"\\u003C"))}}};let Ae;function Ie(e={}){const t=function(e={}){const t=new ve;t.addHooks(e.hooks||{}),e.document=e.document||(X?document:void 0);const s=!e.document,i=()=>{a.dirty=!0,t.callHook("entries:updated",a)};let m=0,D=[];const T=[],a={plugins:T,dirty:!1,resolvedOptions:e,hooks:t,headEntries:()=>D,use(e){const i="function"==typeof e?e(a):e;i.key&&T.some((e=>e.key===i.key))||(T.push(i),Be(i.mode,s)&&t.addHooks(i.hooks||{}))},push(e,t){null==t||delete t.head;const T={_i:m++,input:e,...t};return Be(T.mode,s)&&(D.push(T),i()),{dispose(){D=D.filter((e=>e._i!==T._i)),i()},patch(e){for(const t of D)t._i===T._i&&(t.input=T.input=e);i()}}},async resolveTags(){const e={tags:[],entries:[...D]};await t.callHook("entries:resolve",e);for(const s of e.entries){const i=s.resolvedInput||s.input;if(s.resolvedInput=await(s.transform?s.transform(i):i),s.resolvedInput)for(const m of await me(s)){const i={tag:m,entry:s,resolvedOptions:a.resolvedOptions};await t.callHook("tag:normalise",i),e.tags.push(i.tag)}}return await t.callHook("tags:beforeResolve",e),await t.callHook("tags:resolve",e),await t.callHook("tags:afterResolve",e),e.tags},ssr:s};return[Ee,Ce,Re,ke,we,xe,Pe,Me,...(null==e?void 0:e.plugins)||[]].forEach((e=>a.use(e))),a.hooks.callHook("init",a),a}(e);return t.use(pe()),Ae=t}function Be(e,t){return!e||"server"===e&&t||"client"===e&&!t}const Ge="3"===s[0];function $e(e){if(e instanceof Promise||e instanceof Date||e instanceof RegExp)return e;const t="function"==typeof(s=e)?s():i(s);var s;if(!e||!t)return t;if(Array.isArray(t))return t.map((e=>$e(e)));if("object"==typeof t){const e={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&("titleTemplate"===s||"o"===s[0]&&"n"===s[1]?e[s]=i(t[s]):e[s]=$e(t[s]));return e}return t}const Ue={hooks:{"entries:resolve":e=>{for(const t of e.entries)t.resolvedInput=$e(t.input)}}},He="usehead";const We="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},ze="__unhead_injection_handler__";function Je(e,s={}){const i=s.head||(ze in We?We[ze]():t(He)||Ae);if(i)return i.ssr?i.push(e,s):function(e,t,s={}){const i=m(!1),l=m({});D((()=>{l.value=i.value?{}:$e(t)}));const c=e.push(l.value,s);return T(l,(e=>{c.patch(e)})),r()&&(a((()=>{c.dispose()})),n((()=>{i.value=!0})),o((()=>{i.value=!1}))),c}(i,e,s)}
/*!
  * shared v9.14.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const Ve="undefined"!=typeof window,qe=(e,t=!1)=>t?Symbol.for(e):Symbol(e),Ye=e=>"number"==typeof e&&isFinite(e),Xe=e=>"[object RegExp]"===ct(e),Ke=e=>ut(e)&&0===Object.keys(e).length,Ze=Object.assign,Qe=Object.create,et=(e=null)=>Qe(e);let tt;const st=()=>tt||(tt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:et());function it(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const mt=Object.prototype.hasOwnProperty;function Dt(e,t){return mt.call(e,t)}const Tt=Array.isArray,at=e=>"function"==typeof e,nt=e=>"string"==typeof e,ot=e=>"boolean"==typeof e,rt=e=>null!==e&&"object"==typeof e,lt=Object.prototype.toString,ct=e=>lt.call(e),ut=e=>{if(!rt(e))return!1;const t=Object.getPrototypeOf(e);return null===t||t.constructor===Object};function ft(e){let t=e;return()=>++t}function dt(e,t){}const pt=e=>!rt(e)||Tt(e);function ht(e,t){if(pt(e)||pt(t))throw new Error("Invalid value");const s=[{src:e,des:t}];for(;s.length;){const{src:e,des:t}=s.pop();Object.keys(e).forEach((i=>{"__proto__"!==i&&(rt(e[i])&&!rt(t[i])&&(t[i]=Array.isArray(e[i])?[]:et()),pt(t[i])||pt(e[i])?t[i]=e[i]:s.push({src:e[i],des:t[i]}))}))}}
/*!
  * message-compiler v9.14.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */function yt(e,t,s){return{start:e,end:t}}const gt=/\{([0-9a-zA-Z]+)\}/g;function St(e,...t){return 1===t.length&&vt(t[0])&&(t=t[0]),t&&t.hasOwnProperty||(t={}),e.replace(gt,((e,s)=>t.hasOwnProperty(s)?t[s]:""))}const bt=Object.assign,_t=e=>"string"==typeof e,vt=e=>null!==e&&"object"==typeof e;function Ot(e,t=""){return e.reduce(((e,s,i)=>0===i?e+s:e+t+s),"")}const Et=1,Lt={[Et]:"Use modulo before '{{0}}'."},Rt=1,Nt=2,kt=3,Ct=4,wt=5,jt=6,Ft=7,xt=8,Pt=9,Mt=10,At=11,It=12,Bt=13,Gt=14,$t=15,Ut=16,Ht={[Rt]:"Expected token: '{0}'",[Nt]:"Invalid token in placeholder: '{0}'",[kt]:"Unterminated single quote in placeholder",[Ct]:"Unknown escape sequence: \\{0}",[wt]:"Invalid unicode escape sequence: {0}",[jt]:"Unbalanced closing brace",[Ft]:"Unterminated closing brace",[xt]:"Empty placeholder",[Pt]:"Not allowed nest placeholder",[Mt]:"Invalid linked format",[At]:"Plural must have messages",[It]:"Unexpected empty linked modifier",[Bt]:"Unexpected empty linked key",[Gt]:"Unexpected lexical analysis in token: '{0}'",[$t]:"unhandled codegen node type: '{0}'",[Ut]:"unhandled mimifier node type: '{0}'"};function Wt(e,t,s={}){const{domain:i,messages:m,args:D}=s,T=St((m||Ht)[e]||"",...D||[]),a=new SyntaxError(String(T));return a.code=e,t&&(a.location=t),a.domain=i,a}function zt(e){throw e}const Jt=" ",Vt="\n",qt=String.fromCharCode(8232),Yt=String.fromCharCode(8233);function Xt(e){const t=e;let s=0,i=1,m=1,D=0;const T=e=>"\r"===t[e]&&t[e+1]===Vt,a=e=>t[e]===Yt,n=e=>t[e]===qt,o=e=>T(e)||a(e)||n(e)?Vt:t[e];function r(){return D=0,(T(e=s)||(e=>t[e]===Vt)(e)||a(e)||n(e))&&(i++,m=0),T(s)&&s++,s++,m++,t[s];var e}return{index:()=>s,line:()=>i,column:()=>m,peekOffset:()=>D,charAt:o,currentChar:()=>o(s),currentPeek:()=>o(s+D),next:r,peek:function(){return T(s+D)&&D++,D++,t[s+D]},reset:function(){s=0,i=1,m=1,D=0},resetPeek:function(e=0){D=e},skipToPeek:function(){const e=s+D;for(;e!==s;)r();D=0}}}const Kt=void 0;function Zt(e,t={}){const s=!1!==t.location,i=Xt(e),m=()=>i.index(),D=()=>({line:i.line(),column:i.column(),offset:i.index()}),T=D(),a=m(),n={currentType:14,offset:a,startLoc:T,endLoc:T,lastType:14,lastOffset:a,lastStartLoc:T,lastEndLoc:T,braceNest:0,inLinked:!1,text:""},o=()=>n,{onError:r}=t;function l(e,t,i,...m){const D=o();if(t.column+=i,t.offset+=i,r){const i=Wt(e,s?yt(D.startLoc,t):null,{domain:"tokenizer",args:m});r(i)}}function c(e,t,i){e.endLoc=D(),e.currentType=t;const m={type:t};return s&&(m.loc=yt(e.startLoc,e.endLoc)),null!=i&&(m.value=i),m}const u=e=>c(e,14);function f(e,t){return e.currentChar()===t?(e.next(),t):(l(1,D(),0,t),"")}function d(e){let t="";for(;e.currentPeek()===Jt||e.currentPeek()===Vt;)t+=e.currentPeek(),e.peek();return t}function p(e){const t=d(e);return e.skipToPeek(),t}function h(e){if(e===Kt)return!1;const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||95===t}function y(e){d(e);const t="|"===e.currentPeek();return e.resetPeek(),t}function g(e,t=!0){const s=(t=!1,i="",m=!1)=>{const D=e.currentPeek();return"{"===D?"%"!==i&&t:"@"!==D&&D?"%"===D?(e.peek(),s(t,"%",!0)):"|"===D?!("%"!==i&&!m&&(i===Jt||i===Vt)):D===Jt?(e.peek(),s(!0,Jt,m)):D!==Vt||(e.peek(),s(!0,Vt,m)):"%"===i||t},i=s();return t&&e.resetPeek(),i}function S(e,t){const s=e.currentChar();return s===Kt?Kt:t(s)?(e.next(),s):null}function b(e){const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||t>=48&&t<=57||95===t||36===t}function _(e){return S(e,b)}function v(e){const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||t>=48&&t<=57||95===t||36===t||45===t}function O(e){return S(e,v)}function E(e){const t=e.charCodeAt(0);return t>=48&&t<=57}function L(e){return S(e,E)}function R(e){const t=e.charCodeAt(0);return t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102}function N(e){return S(e,R)}function k(e){let t="",s="";for(;t=L(e);)s+=t;return s}function C(e){let t="";for(;;){const s=e.currentChar();if("{"===s||"}"===s||"@"===s||"|"===s||!s)break;if("%"===s){if(!g(e))break;t+=s,e.next()}else if(s===Jt||s===Vt)if(g(e))t+=s,e.next();else{if(y(e))break;t+=s,e.next()}else t+=s,e.next()}return t}function w(e){return"'"!==e&&e!==Vt}function j(e){const t=e.currentChar();switch(t){case"\\":case"'":return e.next(),`\\${t}`;case"u":return F(e,t,4);case"U":return F(e,t,6);default:return l(4,D(),0,t),""}}function F(e,t,s){f(e,t);let i="";for(let m=0;m<s;m++){const s=N(e);if(!s){l(5,D(),0,`\\${t}${i}${e.currentChar()}`);break}i+=s}return`\\${t}${i}`}function x(e){return"{"!==e&&"}"!==e&&e!==Jt&&e!==Vt}function P(e){p(e);const t=f(e,"|");return p(e),t}function M(e,t){let s=null;switch(e.currentChar()){case"{":return t.braceNest>=1&&l(9,D(),0),e.next(),s=c(t,2,"{"),p(e),t.braceNest++,s;case"}":return t.braceNest>0&&2===t.currentType&&l(8,D(),0),e.next(),s=c(t,3,"}"),t.braceNest--,t.braceNest>0&&p(e),t.inLinked&&0===t.braceNest&&(t.inLinked=!1),s;case"@":return t.braceNest>0&&l(7,D(),0),s=A(e,t)||u(t),t.braceNest=0,s;default:{let i=!0,m=!0,T=!0;if(y(e))return t.braceNest>0&&l(7,D(),0),s=c(t,1,P(e)),t.braceNest=0,t.inLinked=!1,s;if(t.braceNest>0&&(5===t.currentType||6===t.currentType||7===t.currentType))return l(7,D(),0),t.braceNest=0,I(e,t);if(i=function(e,t){const{currentType:s}=t;if(2!==s)return!1;d(e);const i=h(e.currentPeek());return e.resetPeek(),i}(e,t))return s=c(t,5,function(e){p(e);let t="",s="";for(;t=O(e);)s+=t;return e.currentChar()===Kt&&l(7,D(),0),s}(e)),p(e),s;if(m=function(e,t){const{currentType:s}=t;if(2!==s)return!1;d(e);const i=function(e){if(e===Kt)return!1;const t=e.charCodeAt(0);return t>=48&&t<=57}("-"===e.currentPeek()?e.peek():e.currentPeek());return e.resetPeek(),i}(e,t))return s=c(t,6,function(e){p(e);let t="";return"-"===e.currentChar()?(e.next(),t+=`-${k(e)}`):t+=k(e),e.currentChar()===Kt&&l(7,D(),0),t}(e)),p(e),s;if(T=function(e,t){const{currentType:s}=t;if(2!==s)return!1;d(e);const i="'"===e.currentPeek();return e.resetPeek(),i}(e,t))return s=c(t,7,function(e){p(e),f(e,"'");let t="",s="";for(;t=S(e,w);)s+="\\"===t?j(e):t;const i=e.currentChar();return i===Vt||i===Kt?(l(3,D(),0),i===Vt&&(e.next(),f(e,"'")),s):(f(e,"'"),s)}(e)),p(e),s;if(!i&&!m&&!T)return s=c(t,13,function(e){p(e);let t="",s="";for(;t=S(e,x);)s+=t;return s}(e)),l(2,D(),0,s.value),p(e),s;break}}return s}function A(e,t){const{currentType:s}=t;let i=null;const m=e.currentChar();switch(8!==s&&9!==s&&12!==s&&10!==s||m!==Vt&&m!==Jt||l(10,D(),0),m){case"@":return e.next(),i=c(t,8,"@"),t.inLinked=!0,i;case".":return p(e),e.next(),c(t,9,".");case":":return p(e),e.next(),c(t,10,":");default:return y(e)?(i=c(t,1,P(e)),t.braceNest=0,t.inLinked=!1,i):function(e,t){const{currentType:s}=t;if(8!==s)return!1;d(e);const i="."===e.currentPeek();return e.resetPeek(),i}(e,t)||function(e,t){const{currentType:s}=t;if(8!==s&&12!==s)return!1;d(e);const i=":"===e.currentPeek();return e.resetPeek(),i}(e,t)?(p(e),A(e,t)):function(e,t){const{currentType:s}=t;if(9!==s)return!1;d(e);const i=h(e.currentPeek());return e.resetPeek(),i}(e,t)?(p(e),c(t,12,function(e){let t="",s="";for(;t=_(e);)s+=t;return s}(e))):function(e,t){const{currentType:s}=t;if(10!==s)return!1;const i=()=>{const t=e.currentPeek();return"{"===t?h(e.peek()):!("@"===t||"%"===t||"|"===t||":"===t||"."===t||t===Jt||!t)&&(t===Vt?(e.peek(),i()):g(e,!1))},m=i();return e.resetPeek(),m}(e,t)?(p(e),"{"===m?M(e,t)||i:c(t,11,function(e){const t=s=>{const i=e.currentChar();return"{"!==i&&"%"!==i&&"@"!==i&&"|"!==i&&"("!==i&&")"!==i&&i?i===Jt?s:(s+=i,e.next(),t(s)):s};return t("")}(e))):(8===s&&l(10,D(),0),t.braceNest=0,t.inLinked=!1,I(e,t))}}function I(e,t){let s={type:14};if(t.braceNest>0)return M(e,t)||u(t);if(t.inLinked)return A(e,t)||u(t);switch(e.currentChar()){case"{":return M(e,t)||u(t);case"}":return l(6,D(),0),e.next(),c(t,3,"}");case"@":return A(e,t)||u(t);default:{if(y(e))return s=c(t,1,P(e)),t.braceNest=0,t.inLinked=!1,s;const{isModulo:i,hasSpace:m}=function(e){const t=d(e),s="%"===e.currentPeek()&&"{"===e.peek();return e.resetPeek(),{isModulo:s,hasSpace:t.length>0}}(e);if(i)return m?c(t,0,C(e)):c(t,4,function(e){p(e);const t=e.currentChar();return"%"!==t&&l(1,D(),0,t),e.next(),"%"}(e));if(g(e))return c(t,0,C(e));break}}return s}return{nextToken:function(){const{currentType:e,offset:t,startLoc:s,endLoc:T}=n;return n.lastType=e,n.lastOffset=t,n.lastStartLoc=s,n.lastEndLoc=T,n.offset=m(),n.startLoc=D(),i.currentChar()===Kt?c(n,14):I(i,n)},currentOffset:m,currentPosition:D,context:o}}const Qt=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function es(e,t,s){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const e=parseInt(t||s,16);return e<=55295||e>=57344?String.fromCodePoint(e):"�"}}}function ts(e={}){const t=!1!==e.location,{onError:s,onWarn:i}=e;function m(e,i,m,D,...T){const a=e.currentPosition();if(a.offset+=D,a.column+=D,s){const e=Wt(i,t?yt(m,a):null,{domain:"parser",args:T});s(e)}}function D(e,s,m,D,...T){const a=e.currentPosition();if(a.offset+=D,a.column+=D,i){const e=t?yt(m,a):null;i(function(e,t,...s){const i=St(Lt[e],...s||[]),m={message:String(i),code:e};return t&&(m.location=t),m}(s,e,T))}}function T(e,s,i){const m={type:e};return t&&(m.start=s,m.end=s,m.loc={start:i,end:i}),m}function a(e,s,i,m){t&&(e.end=s,e.loc&&(e.loc.end=i))}function n(e,t){const s=e.context(),i=T(3,s.offset,s.startLoc);return i.value=t,a(i,e.currentOffset(),e.currentPosition()),i}function o(e,t){const s=e.context(),{lastOffset:i,lastStartLoc:m}=s,D=T(5,i,m);return D.index=parseInt(t,10),e.nextToken(),a(D,e.currentOffset(),e.currentPosition()),D}function r(e,t,s){const i=e.context(),{lastOffset:m,lastStartLoc:D}=i,n=T(4,m,D);return n.key=t,!0===s&&(n.modulo=!0),e.nextToken(),a(n,e.currentOffset(),e.currentPosition()),n}function l(e,t){const s=e.context(),{lastOffset:i,lastStartLoc:m}=s,D=T(9,i,m);return D.value=t.replace(Qt,es),e.nextToken(),a(D,e.currentOffset(),e.currentPosition()),D}function c(e){const t=e.context(),s=T(6,t.offset,t.startLoc);let i=e.nextToken();if(9===i.type){const t=function(e){const t=e.nextToken(),s=e.context(),{lastOffset:i,lastStartLoc:D}=s,n=T(8,i,D);return 12!==t.type?(m(e,12,s.lastStartLoc,0),n.value="",a(n,i,D),{nextConsumeToken:t,node:n}):(null==t.value&&m(e,Gt,s.lastStartLoc,0,ss(t)),n.value=t.value||"",a(n,e.currentOffset(),e.currentPosition()),{node:n})}(e);s.modifier=t.node,i=t.nextConsumeToken||e.nextToken()}switch(10!==i.type&&m(e,Gt,t.lastStartLoc,0,ss(i)),i=e.nextToken(),2===i.type&&(i=e.nextToken()),i.type){case 11:null==i.value&&m(e,Gt,t.lastStartLoc,0,ss(i)),s.key=function(e,t){const s=e.context(),i=T(7,s.offset,s.startLoc);return i.value=t,a(i,e.currentOffset(),e.currentPosition()),i}(e,i.value||"");break;case 5:null==i.value&&m(e,Gt,t.lastStartLoc,0,ss(i)),s.key=r(e,i.value||"");break;case 6:null==i.value&&m(e,Gt,t.lastStartLoc,0,ss(i)),s.key=o(e,i.value||"");break;case 7:null==i.value&&m(e,Gt,t.lastStartLoc,0,ss(i)),s.key=l(e,i.value||"");break;default:{m(e,13,t.lastStartLoc,0);const D=e.context(),n=T(7,D.offset,D.startLoc);return n.value="",a(n,D.offset,D.startLoc),s.key=n,a(s,D.offset,D.startLoc),{nextConsumeToken:i,node:s}}}return a(s,e.currentOffset(),e.currentPosition()),{node:s}}function u(e){const t=e.context(),s=T(2,1===t.currentType?e.currentOffset():t.offset,1===t.currentType?t.endLoc:t.startLoc);s.items=[];let i=null,u=null;do{const T=i||e.nextToken();switch(i=null,T.type){case 0:null==T.value&&m(e,Gt,t.lastStartLoc,0,ss(T)),s.items.push(n(e,T.value||""));break;case 6:null==T.value&&m(e,Gt,t.lastStartLoc,0,ss(T)),s.items.push(o(e,T.value||""));break;case 4:u=!0;break;case 5:null==T.value&&m(e,Gt,t.lastStartLoc,0,ss(T)),s.items.push(r(e,T.value||"",!!u)),u&&(D(e,1,t.lastStartLoc,0,ss(T)),u=null);break;case 7:null==T.value&&m(e,Gt,t.lastStartLoc,0,ss(T)),s.items.push(l(e,T.value||""));break;case 8:{const t=c(e);s.items.push(t.node),i=t.nextConsumeToken||null;break}}}while(14!==t.currentType&&1!==t.currentType);return a(s,1===t.currentType?t.lastOffset:e.currentOffset(),1===t.currentType?t.lastEndLoc:e.currentPosition()),s}return{parse:function(s){const i=Zt(s,bt({},e)),D=i.context(),n=T(0,D.offset,D.startLoc);return t&&n.loc&&(n.loc.source=s),n.body=function(e){const t=e.context(),{offset:s,startLoc:i}=t,D=u(e);return 14===t.currentType?D:function(e,t,s,i){const D=e.context();let n=0===i.items.length;const o=T(1,t,s);o.cases=[],o.cases.push(i);do{const t=u(e);n||(n=0===t.items.length),o.cases.push(t)}while(14!==D.currentType);return n&&m(e,11,s,0),a(o,e.currentOffset(),e.currentPosition()),o}(e,s,i,D)}(i),e.onCacheKey&&(n.cacheKey=e.onCacheKey(s)),14!==D.currentType&&m(i,Gt,D.lastStartLoc,0,s[D.offset]||""),a(n,i.currentOffset(),i.currentPosition()),n}}}function ss(e){if(14===e.type)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"…":t}function is(e,t){for(let s=0;s<e.length;s++)ms(e[s],t)}function ms(e,t){switch(e.type){case 1:is(e.cases,t),t.helper("plural");break;case 2:is(e.items,t);break;case 6:ms(e.key,t),t.helper("linked"),t.helper("type");break;case 5:t.helper("interpolate"),t.helper("list");break;case 4:t.helper("interpolate"),t.helper("named")}}function Ds(e){if(1===e.items.length){const t=e.items[0];3!==t.type&&9!==t.type||(e.static=t.value,delete t.value)}else{const t=[];for(let s=0;s<e.items.length;s++){const i=e.items[s];if(3!==i.type&&9!==i.type)break;if(null==i.value)break;t.push(i.value)}if(t.length===e.items.length){e.static=Ot(t);for(let t=0;t<e.items.length;t++){const s=e.items[t];3!==s.type&&9!==s.type||delete s.value}}}}function Ts(e){switch(e.t=e.type,e.type){case 0:{const t=e;Ts(t.body),t.b=t.body,delete t.body;break}case 1:{const t=e,s=t.cases;for(let e=0;e<s.length;e++)Ts(s[e]);t.c=s,delete t.cases;break}case 2:{const t=e,s=t.items;for(let e=0;e<s.length;e++)Ts(s[e]);t.i=s,delete t.items,t.static&&(t.s=t.static,delete t.static);break}case 3:case 9:case 8:case 7:{const t=e;t.value&&(t.v=t.value,delete t.value);break}case 6:{const t=e;Ts(t.key),t.k=t.key,delete t.key,t.modifier&&(Ts(t.modifier),t.m=t.modifier,delete t.modifier);break}case 5:{const t=e;t.i=t.index,delete t.index;break}case 4:{const t=e;t.k=t.key,delete t.key;break}default:throw Wt(16,null,{domain:"minifier",args:[e.type]})}delete e.type}function as(e,t){const{helper:s}=e;switch(t.type){case 0:!function(e,t){t.body?as(e,t.body):e.push("null")}(e,t);break;case 1:!function(e,t){const{helper:s,needIndent:i}=e;if(t.cases.length>1){e.push(`${s("plural")}([`),e.indent(i());const m=t.cases.length;for(let s=0;s<m&&(as(e,t.cases[s]),s!==m-1);s++)e.push(", ");e.deindent(i()),e.push("])")}}(e,t);break;case 2:!function(e,t){const{helper:s,needIndent:i}=e;e.push(`${s("normalize")}([`),e.indent(i());const m=t.items.length;for(let D=0;D<m&&(as(e,t.items[D]),D!==m-1);D++)e.push(", ");e.deindent(i()),e.push("])")}(e,t);break;case 6:!function(e,t){const{helper:s}=e;e.push(`${s("linked")}(`),as(e,t.key),t.modifier?(e.push(", "),as(e,t.modifier),e.push(", _type")):e.push(", undefined, _type"),e.push(")")}(e,t);break;case 8:case 7:case 9:case 3:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${s("interpolate")}(${s("list")}(${t.index}))`,t);break;case 4:e.push(`${s("interpolate")}(${s("named")}(${JSON.stringify(t.key)}))`,t);break;default:throw Wt(15,null,{domain:"parser",args:[t.type]})}}function ns(e,t={}){const s=bt({},t),i=!!s.jit,m=!!s.minify,D=null==s.optimize||s.optimize,T=ts(s).parse(e);return i?(D&&function(e){const t=e.body;2===t.type?Ds(t):t.cases.forEach((e=>Ds(e)))}(T),m&&Ts(T),{ast:T,code:""}):(function(e){const t=function(e){const t={ast:e,helpers:new Set};return{context:()=>t,helper:e=>(t.helpers.add(e),e)}}(e);t.helper("normalize"),e.body&&ms(e.body,t);const s=t.context();e.helpers=Array.from(s.helpers)}(T,s),((e,t={})=>{const s=_t(t.mode)?t.mode:"normal",i=_t(t.filename)?t.filename:"message.intl",m=!!t.sourceMap,D=null!=t.breakLineCode?t.breakLineCode:"arrow"===s?";":"\n",T=t.needIndent?t.needIndent:"arrow"!==s,a=e.helpers||[],n=function(e,t){const{sourceMap:s,filename:i,breakLineCode:m,needIndent:D}=t,T={filename:i,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:m,needIndent:D,indentLevel:0};function a(e,t){T.code+=e}function n(e,t=!0){const s=t?m:"";a(D?s+"  ".repeat(e):s)}return!1!==t.location&&e.loc&&(T.source=e.loc.source),{context:()=>T,push:a,indent:function(e=!0){const t=++T.indentLevel;e&&n(t)},deindent:function(e=!0){const t=--T.indentLevel;e&&n(t)},newline:function(){n(T.indentLevel)},helper:e=>`_${e}`,needIndent:()=>T.needIndent}}(e,{mode:s,filename:i,sourceMap:m,breakLineCode:D,needIndent:T});n.push("normal"===s?"function __msg__ (ctx) {":"(ctx) => {"),n.indent(T),a.length>0&&(n.push(`const { ${Ot(a.map((e=>`${e}: _${e}`)),", ")} } = ctx`),n.newline()),n.push("return "),as(n,e),n.deindent(T),n.push("}"),delete e.helpers;const{code:o,map:r}=n.context();return{ast:e,code:o,map:r?r.toJSON():void 0}})(T,s))}
/*!
  * core-base v9.14.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.