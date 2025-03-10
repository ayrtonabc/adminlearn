import{A as M,r as v,B as b,C as x,c as r,o,a as e,F as c,y,p as _,t as g,f as $,l as P,n as S,d as V,q as j,j as C}from"./index-BVeZGJWa.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";const L={class:"flex gap-2"},A=["disabled"],N=["onClick"],H=["disabled"],I={__name:"Pagination",props:M({items:Array,itemsPerPage:Number},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(d){const m=d,u=v(1),a=b(d,"modelValue");return x(()=>{u.value=Math.ceil(m.items.length/m.itemsPerPage)}),(h,l)=>(o(),r("div",L,[e("button",{disabled:a.value==1,onClick:l[0]||(l[0]=n=>a.value--),class:"bg-transparent rounded-md flex justify-center items-center w-8 h-8 text-gray-800 dark:text-gray-200 disabled:text-gray-400"},l[2]||(l[2]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-arrow-left-short",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"})],-1)]),8,A),(o(!0),r(c,null,y(u.value,n=>(o(),r("button",{onClick:p=>a.value=n,class:_([{"main-gradient":n==a.value,"text-gray-200":n==a.value,"bg-transparent":n!=a.value},"rounded-md flex justify-center items-center w-8 h-8 text-gray-800 dark:text-gray-200"])},g(n),11,N))),256)),e("button",{disabled:a.value==u.value,onClick:l[1]||(l[1]=n=>a.value++),class:"bg-transparent rounded-md flex justify-center items-center w-8 h-8 text-gray-800 dark:text-gray-200 disabled:text-gray-400"},l[3]||(l[3]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-arrow-right-short",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"})],-1)]),8,H)]))}},z=B(I,[["__scopeId","data-v-7efa75c8"]]),D={class:"flex flex-col md:flex-row justify-between gap-4 items-center mb-4"},E={class:"flex items-center gap-2"},F=["value"],U={class:"flex items-center gap-2"},W={class:"w-full overflow-auto custom-scroll"},q={class:"w-full"},T={key:0},G={class:"flex flex-col-reverse md:flex-row items-center justify-between gap-2 mt-4"},J={class:"text-gray-700 dark:text-gray-300"},R={__name:"TableComponent",props:M({columns:Array,items:Array},{page:{},pageModifiers:{},"items-per-page":{},"items-per-pageModifiers":{},modelValue:{},modelModifiers:{}}),emits:["update:page","update:items-per-page","update:modelValue"],setup(d){const m=d,u=b(d,"page"),a=b(d,"items-per-page"),h=b(d,"modelValue"),l=v([]),n=v([]);x(()=>{l.value=m.items});const p=v(0),w=v(0);return x(()=>{p.value=(Number(u.value)-1)*a.value,w.value=Math.min(p.value+a.value,l.value.length),n.value=l.value.slice(p.value,w.value)}),x(()=>{const f=h.value,s=m.items.filter(t=>{let i=!1;for(let k of m.columns)if(k.value!=null&&k.value(t).toLowerCase().includes(f.toLowerCase())){i=!0;break}return i});l.value=s.slice()}),(f,s)=>(o(),r("div",null,[e("div",D,[e("div",E,[s[3]||(s[3]=e("span",{class:"text-gray-800 dark:text-gray-200"},"Show",-1)),$(e("select",{"aria-label":"Items per page","onUpdate:modelValue":s[0]||(s[0]=t=>a.value=t),class:"select-dark custom-autocomplete text-[#009688] placeholder:text-gray-500 transition-all outline-none focus:outline-none border border-[#797979] dark:border-[#1b2e4b] focus:border-gray-600 px-3 py-1 rounded-md bg-[#ebedf07a] dark:bg-[#1b2e4b] w-full"},[(o(),r(c,null,y([5,10,25,50,100],t=>e("option",{value:t},g(t),9,F)),64))],512),[[P,a.value]]),s[4]||(s[4]=e("span",{class:"text-gray-800 dark:text-gray-200"},"entries",-1))]),e("div",U,[s[5]||(s[5]=e("span",{class:"text-gray-800 dark:text-gray-200"},"Search ",-1)),e("input",{placeholder:"",type:"text","aria-label":"Search",onInput:s[1]||(s[1]=t=>h.value=t.target.value),class:"custom-autocomplete text-[#009688] placeholder:text-gray-500 transition-all outline-none focus:outline-none border border-[#797979] dark:border-[#1b2e4b] focus:border-gray-600 px-3 py-1 rounded-md bg-[#ebedf07a] dark:bg-[#1b2e4b] w-full"},null,32)])]),e("div",W,[e("table",q,[e("thead",null,[e("tr",null,[(o(!0),r(c,null,y(d.columns,(t,i)=>(o(),r(c,{key:i},[t.hidden?V("",!0):(o(),r("th",{key:0,style:j({minWidth:`${t.minWidth||200}px`}),class:"text-gray-900 dark:text-gray-100 font-semibold px-2 py-3 text-start border-t border-t-[#d8d8d82a]"},g(t.name),5))],64))),128))])]),e("tbody",null,[(o(!0),r(c,null,y(n.value,(t,i)=>(o(),r(c,{key:i},[C(f.$slots,"row",{item:t,index:i}),t._expand?(o(),r("tr",T,[C(f.$slots,"details",{item:t,index:i})])):V("",!0)],64))),128))])])]),e("div",G,[e("div",null,[e("span",J,"Show "+g(p.value+1)+" to "+g(w.value)+" of "+g(d.items.length)+" entries",1)]),e("div",null,[S(z,{items:l.value,"items-per-page":a.value,modelValue:u.value,"onUpdate:modelValue":s[2]||(s[2]=t=>u.value=t)},null,8,["items","items-per-page","modelValue"])])])]))}};export{R as _};
