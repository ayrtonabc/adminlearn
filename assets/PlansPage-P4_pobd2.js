import{c as p,o as f,a as e,j as A,f as w,k as _,w as U,m as $,r as c,g as P,s as g,h as N,i as h,n as V,F as z,y as D,t as v,d as y,e as M,z as H,U as m,S as W}from"./index-BVeZGJWa.js";import{M as F}from"./MainLayout-9wRzYlNW.js";import{_ as O}from"./TableComponent-BYphbJy_.js";import{M as q}from"./ModalComponent-eCPLUFrI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const I="/assets/plans-B0Ggcrgd.png",G={class:"md:grid grid-cols-1 gap-x-6 gap-y-2"},J={class:"flex flex-col"},Y={class:"flex flex-col"},Z={class:"flex flex-col"},K={__name:"PlanForm",props:{item:Object},emits:["send"],setup(b,{emit:k}){const C=k;function o(l){C("send",l)}return(l,s)=>(f(),p("form",{id:"plan-form",onSubmit:U(o,["prevent"]),class:"rounded-xl p-5 bg-[#aaaaaa] dark:bg-slate-900"},[e("div",G,[e("div",J,[s[3]||(s[3]=e("label",{class:"text-gray-800 dark:text-gray-200 mb-1",for:"icon"}," SVG Icon ",-1)),w(e("input",{"onUpdate:modelValue":s[0]||(s[0]=d=>b.item.icon=d),placeholder:"",type:"text","aria-label":"Icon",name:"icon",id:"icon",class:"custom-autocomplete text-[#009688] placeholder:text-gray-500 transition-all outline-none focus:outline-none border border-[#797979] dark:border-[#1b2e4b] focus:border-gray-600 px-5 py-3 rounded-md bg-[#ebedf07a] dark:bg-[#1b2e4b] w-full mb-4"},null,512),[[_,b.item.icon]])]),e("div",Y,[s[4]||(s[4]=e("label",{class:"text-gray-800 dark:text-gray-200 mb-1",for:"lessons"},"Lessons",-1)),w(e("input",{"onUpdate:modelValue":s[1]||(s[1]=d=>b.item.lessons=d),placeholder:"",type:"text","aria-label":"Lessons",name:"lessons",id:"lessons",class:"custom-autocomplete text-[#009688] placeholder:text-gray-500 transition-all outline-none focus:outline-none border border-[#797979] dark:border-[#1b2e4b] focus:border-gray-600 px-5 py-3 rounded-md bg-[#ebedf07a] dark:bg-[#1b2e4b] w-full mb-4"},null,512),[[_,b.item.lessons]])]),e("div",Z,[s[5]||(s[5]=e("label",{class:"text-gray-800 dark:text-gray-200 mb-1",for:"cost"},"Cost",-1)),w(e("input",{"onUpdate:modelValue":s[2]||(s[2]=d=>b.item.cost=d),placeholder:"",type:"text","aria-label":"Cost",name:"cost",id:"cost",class:"custom-autocomplete text-[#009688] placeholder:text-gray-500 transition-all outline-none focus:outline-none border border-[#797979] dark:border-[#1b2e4b] focus:border-gray-600 px-5 py-3 rounded-md bg-[#ebedf07a] dark:bg-[#1b2e4b] w-full mb-4"},null,512),[[_,b.item.cost]])])]),A(l.$slots,"default")],32))}},Q={class:"p-6"},R={class:"grid grid-cols-3 gap-2"},X={class:"flex flex-col"},ee={class:"text-gray-800 dark:text-gray-200 mb-1",for:"title"},te=["onUpdate:modelValue","name","id"],ae={class:"flex justify-between gap-2"},oe=["disabled"],se={key:0,class:"spinner"},re=["disabled"],le={key:0,class:"spinner"},ne={class:"table-row"},ie={class:"text-gray-800 dark:text-gray-200"},de={class:"text-gray-800 dark:text-gray-200"},ue=["innerHTML"],ce={class:"text-gray-800 dark:text-gray-200"},me={class:"text-gray-800 dark:text-gray-200"},fe={class:"text-gray-800 dark:text-gray-200"},be={class:"flex gap-2 items-center"},pe=["onClick"],ge=["onClick"],ve={key:0,class:"max-h-[70vh] overflow-auto custom-scroll"},xe={class:"flex justify-end gap-2 p-4 w-full"},he=["disabled"],ye={key:0,class:"spinner"},Me={__name:"PlansPage",setup(b){const k=$(()=>[{name:"#",minWidth:10},{name:"Icon",minWidth:50},{name:"Lessons",value:n=>n.lessons.toString(),minWidth:120},{name:"Cost",minWidth:60},{name:"Created at",minWidth:100},{name:"Actions",minWidth:20}]),C=c(k),o=c(!1),l=c([]),s=c([]),d=c(1),L=c(5),S=c(""),i=c({edit:!1,remove:!1,item:{}});function B(){i.value.item={},i.value.edit=!0}async function T(n){const a=new FormData(n.target),t=i.value.item;o.value=!0;const u=Object.fromEntries(a.entries());t.id==null?g.from("plans").insert(u).select().then(r=>{r.error?(m.notify("Error",r.error.message,"error"),console.error("Error adding stuent:",r.error)):(l.value.unshift(r.data[0]),m.notify("Congratulations","The plan has been added."))}):g.from("plans").update(u).eq("id",t.id).select().then(r=>{if(r.error)console.error("Error updating feature:",r.error),m.notify("Error",r.error.message,"error");else for(let x in l.value)if(l.value[x].id==t.id){l.value[x]=r.data[0],m.notify("Congratulations","Plan's data has been updated.");break}}),i.value={edit:!1,remove:!1,item:{}},o.value=!1}async function E(n){const a=new FormData(n.target);o.value=!0;try{for(const[t,u]of a.entries()){const{error:r}=await g.from("texts").update({content:u}).eq("id",t);r&&(console.error("Error updating feature:",r),m.notify("Error",r.message,"error"))}}catch(t){console.error("Unexpected error:",t),m.notify("Error","Unexpected error occurred","error")}o.value=!1}function j(n){o.value=!0,W.fire({title:"Confirm",text:"Are you sure you want to delete the plan?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it",cancelButtonText:"Cancel"}).then(a=>{a.isConfirmed&&g.from("plans").delete().eq("id",n.id).then(()=>{m.notify("Congratulations","The plan has been deleted"),o.value=!1;for(let t in l.value)if(l.value[t].id==n.id){l.value.splice(t,1);break}}).catch(t=>{console.error("Error deleting the item:",t),o.value=!1})})}return P(()=>{o.value=!0,g.from("texts").select("*").then(n=>{s.value=n.data,g.from("plans").select("*").then(a=>{l.value=a.data,o.value=!1}).catch(a=>{console.log(a),o.value=!1})}).catch(n=>{console.log(n),o.value=!1})}),(n,a)=>(f(),N(F,null,{default:h(()=>[e("div",Q,[a[9]||(a[9]=e("img",{src:I,class:"w-full rounded-lg mb-4"},null,-1)),e("form",{onSubmit:U(E,["prevent"]),class:"mb-4"},[e("div",R,[(f(!0),p(z,null,D(s.value.filter(t=>t.type=="six"),t=>(f(),p("div",X,[e("label",ee,"Text "+v(t.index),1),w(e("input",{"onUpdate:modelValue":u=>t.content=u,placeholder:"",type:"text","aria-label":"Title",name:t.id,id:t.id,class:"custom-autocomplete text-[#009688] placeholder:text-gray-500 transition-all outline-none focus:outline-none border border-[#797979] dark:border-[#1b2e4b] focus:border-gray-600 px-5 py-3 rounded-md bg-[#ebedf07a] dark:bg-[#1b2e4b] w-full mb-4"},null,8,te),[[_,t.content]])]))),256))]),e("div",ae,[e("button",{type:"submit",disabled:o.value,class:"duration-300 px-4 disabled:opacity-80 transition-transform flex gap-2 justify-center items-center bg-[#058beb] text-white py-[0.4rem] rounded-md shadow-lg shadow-[#00000060] hover:translate-y-[-0.2rem]"},[o.value?(f(),p("div",se)):y("",!0),a[4]||(a[4]=M(" Save "))],8,oe),e("button",{disabled:o.value,onClick:B,type:"button",class:"duration-300 px-4 disabled:opacity-80 mb-2 transition-transform flex gap-2 justify-center items-center bg-[#058beb] text-white py-[0.4rem] rounded-md shadow-lg shadow-[#00000060] hover:translate-y-[-0.2rem]"},[o.value?(f(),p("div",le)):y("",!0),a[5]||(a[5]=M(" Add plan "))],8,re)])],32),V(O,{columns:C.value,items:l.value,page:d.value,"onUpdate:page":a[0]||(a[0]=t=>d.value=t),"items-per-page":L.value,"onUpdate:itemsPerPage":a[1]||(a[1]=t=>L.value=t),modelValue:S.value,"onUpdate:modelValue":a[2]||(a[2]=t=>S.value=t)},{row:h(({item:t,index:u,internal:r})=>[e("tr",ne,[e("td",ie,v(Number(u)+1),1),e("td",de,[e("div",{innerHTML:t.icon},null,8,ue)]),e("td",ce,v(t.lessons)+" Lessons",1),e("td",me,v(t.cost),1),e("td",fe,v(H(m).toDateTimeText(t.created_at)),1),e("td",null,[e("div",be,[e("button",{onClick:x=>i.value={edit:!0,remove:!1,item:JSON.parse(JSON.stringify(t))},class:"bg-transparent transition-all text-orange-400 hover:text-orange-600 hover:scale-125 p-1 border-none focus:border-none"},a[6]||(a[6]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil-square",viewBox:"0 0 16 16"},[e("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),e("path",{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"})],-1)]),8,pe),e("button",{onClick:x=>j(t),class:"bg-transparent transition-all text-red-400 hover:text-red-600 hover:scale-125 p-1 border-none focus:border-none"},a[7]||(a[7]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash3",viewBox:"0 0 16 16"},[e("path",{d:"M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"})],-1)]),8,ge)])])])]),_:1},8,["columns","items","page","items-per-page","modelValue"]),V(q,{modelValue:i.value.edit,"onUpdate:modelValue":a[3]||(a[3]=t=>i.value.edit=t),title:i.value.item.id==null?"Add unit":"Edit plan",subtitle:i.value.item.id==null?"Complete the form to add a new unit":"Complete the form to update plan data"},{footer:h(()=>[e("div",xe,[e("button",{form:"plan-form",type:"submit",disabled:o.value,class:"duration-300 px-4 disabled:opacity-80 transition-transform flex gap-2 justify-center items-center bg-[#058beb] text-white py-[0.4rem] rounded-md shadow-lg shadow-[#00000060] hover:translate-y-[-0.2rem]"},[o.value?(f(),p("div",ye)):y("",!0),a[8]||(a[8]=M(" Save "))],8,he)])]),default:h(()=>[i.value.edit?(f(),p("div",ve,[V(K,{item:i.value.item,onSend:T},null,8,["item"])])):y("",!0)]),_:1},8,["modelValue","title","subtitle"])])]),_:1}))}};export{Me as default};
