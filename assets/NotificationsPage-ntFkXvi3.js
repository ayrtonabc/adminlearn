import{M as $}from"./MainLayout-CEmonEtD.js";import{_ as C}from"./TableComponent-B8pkeUEz.js";import{M as j}from"./ModalComponent-BVjXJSti.js";import{c as x,o as g,a as e,k as M,f as u,l as m,m as N,w as A,n as T,r as b,g as P,s as W,h as B,i as p,j as h,d as k,e as U,t as f,U as L}from"./index-Cz9qMU4q.js";import{a as E}from"./index-C88pvD_q.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const D={class:"md:grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2"},I={class:"flex flex-col"},O={class:"flex flex-col"},z={class:"flex flex-col md:col-span-2"},F={class:"flex flex-col"},G={class:"flex flex-col"},J={class:"flex flex-col md:col-span-2"},H={class:"flex flex-col"},_={class:"flex flex-col"},q={__name:"NotificationsForm",props:{item:Object},emits:["send"],setup(n,{emit:v}){const y=v;function s(c){y("send",c)}return(c,t)=>(g(),x("form",{id:"notification-form",onSubmit:A(s,["prevent"]),class:"rounded-xl p-5 bg-[#aaaaaa] dark:bg-slate-900"},[e("div",D,[e("div",I,[t[8]||(t[8]=e("label",{class:"text-gray-800 dark:text-gray-200 mb-1",for:"subject"},"Subject",-1)),u(e("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>n.item.subject=l),placeholder:"",type:"text","aria-label":"Subject",name:"subject",id:"subject",class:"custom-autocomplete text-[#009688] placeholder:text-gray-500 transition-all outline-none focus:outline-none border border-[#797979] dark:border-[#1b2e4b] focus:border-gray-600 px-5 py-3 rounded-md bg-[#ebedf07a] dark:bg-[#1b2e4b] w-full mb-4"},null,512),[[m,n.item.subject]])]),e("div",O,[t[9]||(t[9]=e("label",{class:"text-gray-800 dark:text-gray-200 mb-1",for:"name"},"Greeting",-1)),u(e("input",{"onUpdate:modelValue":t[1]||(t[1]=l=>n.item.greeting=l),placeholder:"",type:"text","aria-label":"Greeting",name:"greeting",id:"greeting",class:"custom-autocomplete text-[#009688] placeholder:text-gray-500 transition-all outline-none focus:outline-none border border-[#797979] dark:border-[#1b2e4b] focus:border-gray-600 px-5 py-3 rounded-md bg-[#ebedf07a] dark:bg-[#1b2e4b] w-full mb-4"},null,512),[[m,n.item.greeting]])]),e("div",z,[t[10]||(t[10]=e("label",{class:"text-gray-800 dark:text-gray-200 mb-1",for:"introLines"},"Introduction lines",-1)),u(e("textarea",{"onUpdate:modelValue":t[2]||(t[2]=l=>n.item.introLines_text=l),placeholder:"",type:"text","aria-label":"Introduction lines",name:"introLines_text",id:"introLines",class:"custom-autocomplete text-[#009688] placeholder:text-gray-500 transition-all outline-none focus:outline-none border border-[#797979] dark:border-[#1b2e4b] focus:border-gray-600 px-5 py-3 rounded-md bg-[#ebedf07a] dark:bg-[#1b2e4b] w-full mb-4"},null,512),[[m,n.item.introLines_text]])]),e("div",F,[t[11]||(t[11]=e("label",{class:"text-gray-800 dark:text-gray-200 mb-1",for:"actionText"},"Action text",-1)),u(e("input",{"onUpdate:modelValue":t[3]||(t[3]=l=>n.item.actionText=l),placeholder:"",type:"text","aria-label":"Action text",name:"actionText",id:"actionText",class:"custom-autocomplete text-[#009688] placeholder:text-gray-500 transition-all outline-none focus:outline-none border border-[#797979] dark:border-[#1b2e4b] focus:border-gray-600 px-5 py-3 rounded-md bg-[#ebedf07a] dark:bg-[#1b2e4b] w-full mb-4"},null,512),[[m,n.item.actionText]])]),e("div",G,[t[12]||(t[12]=e("label",{class:"text-gray-800 dark:text-gray-200 mb-1",for:"name"},"Action url",-1)),u(e("input",{"onUpdate:modelValue":t[4]||(t[4]=l=>n.item.actionUrl=l),placeholder:"",type:"url","aria-label":"Action url",name:"actionUrl",id:"actionUrl",class:"custom-autocomplete text-[#009688] placeholder:text-gray-500 transition-all outline-none focus:outline-none border border-[#797979] dark:border-[#1b2e4b] focus:border-gray-600 px-5 py-3 rounded-md bg-[#ebedf07a] dark:bg-[#1b2e4b] w-full mb-4"},null,512),[[m,n.item.actionUrl]])]),e("div",J,[t[13]||(t[13]=e("label",{class:"text-gray-800 dark:text-gray-200 mb-1",for:"outroLines"},"Content lines",-1)),u(e("textarea",{"onUpdate:modelValue":t[5]||(t[5]=l=>n.item.outroLines_text=l),placeholder:"",type:"text","aria-label":"Content lines",name:"outroLines_text",id:"outroLines",class:"custom-autocomplete text-[#009688] placeholder:text-gray-500 transition-all outline-none focus:outline-none border border-[#797979] dark:border-[#1b2e4b] focus:border-gray-600 px-5 py-3 rounded-md bg-[#ebedf07a] dark:bg-[#1b2e4b] w-full mb-4"},null,512),[[m,n.item.outroLines_text]])]),e("div",H,[t[14]||(t[14]=e("label",{class:"text-gray-800 dark:text-gray-200 mb-1",for:"salutation"},"Salutation",-1)),u(e("input",{"onUpdate:modelValue":t[6]||(t[6]=l=>n.item.salutation=l),placeholder:"",type:"text","aria-label":"Salutation",name:"salutation",id:"salutation",class:"custom-autocomplete text-[#009688] placeholder:text-gray-500 transition-all outline-none focus:outline-none border border-[#797979] dark:border-[#1b2e4b] focus:border-gray-600 px-5 py-3 rounded-md bg-[#ebedf07a] dark:bg-[#1b2e4b] w-full mb-4"},null,512),[[m,n.item.salutation]])]),e("div",_,[t[16]||(t[16]=e("label",{class:"text-gray-800 dark:text-gray-200 mb-1",for:"level"},"Level",-1)),u(e("select",{"onUpdate:modelValue":t[7]||(t[7]=l=>n.item.level=l),"aria-label":"Level",name:"level",id:"level",class:"select-dark custom-autocomplete text-[#009688] placeholder:text-gray-500 transition-all outline-none focus:outline-none border border-[#797979] dark:border-[#1b2e4b] focus:border-gray-600 px-5 py-3 rounded-md bg-[#ebedf07a] dark:bg-[#1b2e4b] w-full mb-4"},t[15]||(t[15]=[e("option",{value:"success"},"Success",-1),e("option",{value:"error"},"Error",-1),e("option",{value:"warning"},"Warning",-1),e("option",{value:"info"},"Info",-1)]),512),[[N,n.item.level]])])]),M(c.$slots,"default")],32))}},K={class:"p-6"},Q=["disabled"],R={key:0,class:"spinner"},X={class:"table-row"},Y={class:"text-gray-800 dark:text-gray-200"},Z={class:"flex gap-2 items-center"},ee={class:"text-gray-800 dark:text-gray-200"},te={class:"text-gray-700 dark:text-gray-300 text-sm"},ae={class:"text-gray-800 dark:text-gray-200"},oe={class:"text-gray-800 dark:text-gray-200"},le={class:"text-gray-800 dark:text-gray-200"},ne={class:"flex gap-2 items-center"},re=["onClick"],se={key:0,class:"max-h-[70vh] overflow-auto custom-scroll"},ie={class:"flex justify-end gap-2 p-4 w-full"},de=["disabled"],ue={key:0,class:"spinner"},ye={__name:"NotificationsPage",setup(n){const v=T(()=>[{name:"#",minWidth:10},{name:"Name",value:r=>r.name,minWidth:250},{name:"Plan",value:r=>r.name,minWidth:100},{name:"Email",value:r=>r.email},{name:"Phone",hidden:!0,value:r=>r.phone,minWidth:100},{name:"Actions",hidden:!0,minWidth:20}]),y=b(v),s=b(!1),c=b([]),t=b(1),l=b(5),w=b(""),i=b({edit:!1,remove:!1,item:{}});function V(){i.value.item={},i.value.edit=!0}async function S(r){const a=new FormData(r.target);s.value=!0,a.append("displayableActionUrl",a.get("actionUrl")),a.append("email",i.value.item.email);let o=a.get("introLines_text").split(`
`);for(let d in o)a.append(`introLines[${d}]`,o[d]);o=a.get("outroLines_text").split(`
`);for(let d in o)a.append(`outroLines[${d}]`,o[d]);E.post("https://email-api.msomnium.com/api/send-mail",a).then(d=>{L.notify("Congratulations","The notification has been sent."),s.value=!1}).catch(()=>{L.notify("Error","An error occurred while sending the email.","error"),s.value=!1})}return P(()=>{s.value=!0,W.from("students").select("*").then(r=>{c.value=r.data,s.value=!1}).catch(r=>{s.value=!1,console.console.log(r)})}),(r,a)=>(g(),B($,null,{default:p(()=>[e("div",K,[e("button",{disabled:s.value,onClick:V,class:"duration-300 px-4 disabled:opacity-80 mb-2 transition-transform flex gap-2 justify-center items-center bg-[#058beb] text-white py-[0.4rem] rounded-md shadow-lg shadow-[#00000060] hover:translate-y-[-0.2rem]"},[s.value?(g(),x("div",R)):k("",!0),a[4]||(a[4]=U(" Add student "))],8,Q),h(C,{columns:y.value,items:c.value,page:t.value,"onUpdate:page":a[0]||(a[0]=o=>t.value=o),"items-per-page":l.value,"onUpdate:itemsPerPage":a[1]||(a[1]=o=>l.value=o),modelValue:w.value,"onUpdate:modelValue":a[2]||(a[2]=o=>w.value=o)},{row:p(({item:o,index:d,internal:me})=>[e("tr",X,[e("td",Y,f(Number(d)+1),1),e("td",null,[e("div",Z,[e("div",null,[e("p",ee,f(o.name),1),e("p",te,f(o.name),1)])])]),e("td",ae,f(o.plan),1),e("td",oe,f(o.email),1),e("td",le,f(o.phone),1),e("td",null,[e("div",ne,[e("button",{onClick:be=>i.value={edit:!0,remove:!1,item:JSON.parse(JSON.stringify(o))},class:"bg-transparent transition-all text-orange-400 hover:text-orange-600 hover:scale-125 p-1 border-none focus:border-none"},a[5]||(a[5]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-send-plus-fill",viewBox:"0 0 16 16"},[e("path",{d:"M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"}),e("path",{d:"M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5"})],-1)]),8,re)])])])]),_:1},8,["columns","items","page","items-per-page","modelValue"]),h(j,{modelValue:i.value.edit,"onUpdate:modelValue":a[3]||(a[3]=o=>i.value.edit=o),title:(i.value.item.id==null,"Send notification"),subtitle:(i.value.item.id==null,"Complete the form to send a new notification")},{footer:p(()=>[e("div",ie,[e("button",{form:"notification-form",type:"submit",disabled:s.value,class:"duration-300 px-4 disabled:opacity-80 transition-transform flex gap-2 justify-center items-center bg-[#058beb] text-white py-[0.4rem] rounded-md shadow-lg shadow-[#00000060] hover:translate-y-[-0.2rem]"},[s.value?(g(),x("div",ue)):k("",!0),a[6]||(a[6]=U(" Send "))],8,de)])]),default:p(()=>[i.value.edit?(g(),x("div",se,[h(q,{item:i.value.item,onSend:S},null,8,["item"])])):k("",!0)]),_:1},8,["modelValue","title","subtitle"])])]),_:1}))}};export{ye as default};
