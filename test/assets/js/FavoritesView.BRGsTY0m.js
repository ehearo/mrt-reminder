import{u as a,_ as t,g as e,a as s,b as n,c as o}from"./app.DMcV15yp.js";import{d as r,k as i,A as l,B as c,a as u,h as d,f as g,F as p,g as v,o as f,c as x,q as m}from"./vendor.BUG6lqQ0.js";const y={class:"page-container safe-area"},w={class:"page-content"},h={key:0,class:"space-y-3"},C={key:1,class:"text-center py-12"},b=r({__name:"FavoritesView",setup(r){const b=a(),k=i((()=>b.getFavoriteStations)),F={red:"#E3002C",blue:"#0070BD",green:"#008659",orange:"#F8B61C","":"#000000"};function S(a){const t=o(a);return F[t]}let j;return l((()=>{j=window.setInterval((()=>{k.value.length>0&&b.$patch({stations:[...b.stations]})}),3e4)})),c((()=>{j&&window.clearInterval(j)})),(a,o)=>(f(),u("div",y,[d(t),g("main",w,[k.value.length?(f(),u("div",h,[(f(!0),u(p,null,v(k.value,(a=>(f(),x(s,{key:a.StationCode,station:a,"line-color":S(a.StationCode),"next-trains":m(e)(a.StationCode)},null,8,["station","line-color","next-trains"])))),128))])):(f(),u("div",C,o[0]||(o[0]=[g("div",{class:"bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"},[g("i",{class:"fas fa-star text-2xl text-gray-400"})],-1),g("p",{class:"text-gray-500"},"尚未收藏任何站點",-1)])))]),d(n)]))}});export{b as default};
