import{a,b as s}from"./index.DZ_vYiJZ.js";import{o as e,c as t,a as l,d as r,m as n,g as o,F as c,r as i,p as f,w as p,n as m,t as x}from"./vendor.cVHWZysA.js";const h={class:"page-header"},u=a({},[["render",function(a,r){return e(),t("header",h,r[0]||(r[0]=[l("div",{class:"h-full px-4 flex items-center"},[l("div",{class:"flex items-center gap-3"},[l("img",{src:s,alt:"Metro",class:"h-8 w-8"}),l("h1",{class:"text-lg font-semibold"},"\u53f0\u5317\u6377\u904b")])],-1)]))}]]),d={class:"page-footer"},b={class:"flex justify-around items-center h-14"},g={class:"text-xs"},v=r({__name:"MetroNav",setup(a){const s=n(),r=[{path:"/",label:"\u8def\u7dda",icon:"fas fa-subway"},{path:"/map",label:"\u8def\u7dda\u5716",icon:"fas fa-map"},{path:"/favorites",label:"\u6536\u85cf",icon:"fas fa-star"}],isActive=a=>s.path===a;return(a,s)=>{const n=o("router-link");return e(),t("nav",d,[l("div",b,[(e(),t(c,null,i(r,(a=>f(n,{key:a.path,to:a.path,class:m(["flex flex-col items-center",{"text-metro-blue":isActive(a.path),"text-gray-400":!isActive(a.path)}])},{default:p((()=>[l("i",{class:m(["text-xl mb-1",a.icon])},null,2),l("span",g,x(a.label),1)])),_:2},1032,["to","class"]))),64))])])}}});export{u as M,v as _};
