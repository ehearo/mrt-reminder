import{a as s,b as a}from"./index.DQOPrq9h.js";import{o as e,h as t,i as l,d as n,j as i,r,F as o,k as c,l as d,w as u,n as m,t as f,m as p,p as x}from"./vendor.DWZsJF8m.js";import{u as v}from"./app.DQstgp2O.js";const g={class:"page-header"},h=s({},[["render",function(s,n){return e(),t("header",g,n[0]||(n[0]=[l("div",{class:"h-full px-4 flex items-center"},[l("div",{class:"flex items-center gap-3"},[l("img",{src:a,alt:"Metro",class:"h-8 w-8"}),l("h1",{class:"text-lg font-semibold"},"\u53f0\u5317\u6377\u904b")])],-1)]))}]]),b={class:"page-footer"},y={class:"flex justify-around items-center h-14"},k={class:"text-xs"},C=n({__name:"MetroNav",setup(s){const a=i(),n=[{path:"/",label:"\u8def\u7dda",icon:"fas fa-subway"},{path:"/map",label:"\u8def\u7dda\u5716",icon:"fas fa-map"},{path:"/favorites",label:"\u6536\u85cf",icon:"fas fa-star"}],p=s=>a.path===s;return(s,a)=>{const i=r("router-link");return e(),t("nav",b,[l("div",y,[(e(),t(o,null,c(n,(s=>d(i,{key:s.path,to:s.path,class:m(["flex flex-col items-center",{"text-metro-blue":p(s.path),"text-gray-400":!p(s.path)}])},{default:u((()=>[l("i",{class:m(["text-xl mb-1",s.icon])},null,2),l("span",k,f(s.label),1)])),_:2},1032,["to","class"]))),64))])])}}}),T={class:"grid grid-cols-2 gap-3"},w=["onClick"],_={class:"font-medium"},j=n({__name:"LineSelector",props:{lines:{},modelValue:{}},emits:["select"],setup:s=>(s,a)=>(e(),t("div",T,[(e(!0),t(o,null,c(s.lines,(a=>(e(),t("button",{key:a.id,onClick:e=>s.$emit("select",a.id),class:m(["card flex items-center gap-3 transition-all",{"ring-2 ring-offset-2":s.modelValue===a.id,[`ring-metro-${a.id}`]:s.modelValue===a.id}])},[l("div",{class:"w-3 h-3 rounded-full",style:p({backgroundColor:a.color})},null,4),l("span",_,f(a.name),1)],10,w)))),128))]))}),S={class:"card p-4"},$={class:"flex justify-between items-start"},F={class:"flex-1"},M={class:"flex items-center gap-3 mb-2"},V={class:"font-medium"},N={class:"mt-3 pt-3 border-t border-gray-100"},L={class:"grid grid-cols-3 gap-4 text-sm text-gray-500"},q={class:"text-xs"},z={class:"truncate"},A=n({__name:"StationCard",props:{station:{},lineColor:{},nextTrains:{}},setup(s){const a=s,n=v(),i=x((()=>n.isFavorite(a.station.StationCode)));function r(){n.toggleFavorite(a.station)}const d=x((()=>{var s;return"\u5373\u5c07\u5230\u7ad9"===(null==(s=a.nextTrains[0])?void 0:s.arrivalTime)})),u=x((()=>{if(!a.nextTrains.length)return"\u76ee\u524d\u7121\u73ed\u6b21";const s=a.nextTrains[0];return`\u5f80${s.destination} - ${s.arrivalTime}`}));return(s,a)=>(e(),t("div",S,[l("div",$,[l("div",F,[l("div",M,[l("div",{class:"w-2 h-2 rounded-full",style:p({backgroundColor:s.lineColor})},null,4),l("h3",V,f(s.station.StationName),1)]),l("div",{class:m(["flex items-center gap-2 text-sm",{"text-green-600":d.value}])},[a[0]||(a[0]=l("i",{class:"fas fa-train"},null,-1)),l("span",null,f(u.value),1)],2)]),l("button",{class:m(["p-2 transition-colors",i.value?"text-yellow-500":"text-gray-400 hover:text-yellow-500"]),onClick:r},a[1]||(a[1]=[l("i",{class:"fas fa-star"},null,-1)]),2)]),l("div",N,[l("div",L,[(e(!0),t(o,null,c(s.nextTrains,(s=>(e(),t("div",{key:s.Time},[l("div",q,f(s.Time),1),l("div",z,"\u5f80"+f(s.destination),1)])))),128))])])]))}});export{h as M,A as _,C as a,j as b};