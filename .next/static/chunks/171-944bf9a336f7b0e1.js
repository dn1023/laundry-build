"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[171],{8816:function(e,r,o){o.d(r,{Z:function(){return t}});function t(){let e=localStorage.getItem("user"),r=e?JSON.parse(e):null;return r&&r.accessToken?{"x-access-token":r.accessToken}:{}}},6652:function(e,r,o){var t=o(8816);let s="https://api.welovelaundry.com/api/auth/";class a{static getInstance(){return a.instance||(a.instance=new a),a.instance}async login(e,r){return fetch("".concat(s,"signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:r})}).then(e=>e.json()).then(e=>(e.accessToken&&localStorage.setItem("user",JSON.stringify(e)),e))}async update(e,r,o,a,d,l,n,i,c){return fetch("".concat(s,"update"),{method:"POST",headers:{"Content-Type":"application/json",...(0,t.Z)()},body:JSON.stringify({userid:e,username:r,firstname:o,lastname:a,email:d,phone:l,password:n,roles:i,accessToken:c})}).then(e=>e.json()).then(e=>(console.log(e),e.accessToken&&localStorage.setItem("user",JSON.stringify(e)),e))}logout(){localStorage.removeItem("user")}async register(e,r,o){return fetch("".concat(s,"signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,email:r,password:o})}).then(e=>e.json()).catch(e=>console.error("Error registering:",e))}getCurrentUser(){let e=localStorage.getItem("user");return e?JSON.parse(e):null}constructor(){}}r.Z=a.getInstance()},5816:function(e,r,o){var t=o(8816);let s="https://api.welovelaundry.com/api/order/";class a{static getInstance(){return a.instance||(a.instance=new a),a.instance}async register(e,r,o,a,d,l){return fetch("".concat(s,"register"),{method:"POST",headers:{"Content-Type":"application/json",...(0,t.Z)()},body:JSON.stringify({userid:e,addressdata:r,orderlist:o,preferences:a,collectiondelivery:d,coupon:l})}).then(e=>e.json()).catch(e=>console.error("Error registering:",e))}async getAllOrders(){return fetch("".concat(s,"all"),{method:"GET",headers:{...(0,t.Z)()}}).then(e=>e.json())}async getAllOrdersByDate(e){return fetch("".concat(s,"allbydate"),{method:"POST",headers:{"Content-Type":"application/json",...(0,t.Z)()},body:JSON.stringify({date:e})}).then(e=>e.json())}async getAllOrdersByCollectionDate(e){return console.log(e),fetch("".concat(s,"allbycollectiondate"),{method:"POST",headers:{"Content-Type":"application/json",...(0,t.Z)()},body:JSON.stringify({date:e})}).then(e=>e.json())}async getAllOrdersByDeliveryDate(e){return fetch("".concat(s,"allbydeliverydate"),{method:"POST",headers:{"Content-Type":"application/json",...(0,t.Z)()},body:JSON.stringify({date:e})}).then(e=>e.json())}async getOrderById(e){return fetch("".concat(s,"orderbyid"),{method:"POST",headers:{"Content-Type":"application/json",...(0,t.Z)()},body:JSON.stringify({id:e})}).then(e=>e.json())}async getOrderByUserId(e){return fetch("".concat(s,"orderbyuserid"),{method:"POST",headers:{"Content-Type":"application/json",...(0,t.Z)()},body:JSON.stringify({id:e})}).then(e=>e.json())}constructor(){}}r.Z=a.getInstance()},8861:function(e,r,o){var t=o(3827),s=o(4090),a=o(5816);r.Z=e=>{var r,o,d,l,n,i,c,u,m,h,b,p,x,v,f,y,g,k,j,N,w,S,C,O,T,D,A,I,E,P,Z,B,J,F,U;let{isOpen:L,Id:R,onClose:M,children:W}=e,[_,H]=(0,s.useState)(null),[q,z]=(0,s.useState)(!1),G=async()=>{let e=await a.Z.getOrderById(R);void 0!==e&&e&&(H(e),z(!0))};return(0,s.useEffect)(()=>{G().catch(e=>console.error("Failed to fetch orders:",e))},[]),(0,t.jsx)("div",{className:"fixed z-[99999] inset-0 overflow-y-auto",children:(0,t.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[(0,t.jsx)("div",{className:"fixed inset-0 transition-opacity","aria-hidden":"true",children:(0,t.jsx)("div",{className:"absolute inset-0 duration-300 ease-in-out bg-gray-200 dark:bg-gray-dark opacity-75"})}),(0,t.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"​"}),(0,t.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[(0,t.jsxs)("div",{className:"bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-dark dark:text-body-color-dark",children:[W,(0,t.jsxs)("div",{className:"text-3xl leading-6 font-medium mb-3 mt-3 text-center",children:["OrderID:  ",null==_?void 0:null===(r=_.order)||void 0===r?void 0:r.id]}),(0,t.jsx)("div",{className:"font-bold",children:"Address:"}),(0,t.jsxs)("div",{className:"mt-2 space-y-2",children:[(null==_?void 0:null===(o=_.order)||void 0===o?void 0:o.postcode)!=""&&(0,t.jsxs)("p",{className:"",children:["Post Code: ",null==_?void 0:null===(d=_.order)||void 0===d?void 0:d.postcode]}),(null==_?void 0:null===(l=_.order)||void 0===l?void 0:l.address)!=""&&(0,t.jsxs)("p",{className:"",children:["Address: ",null==_?void 0:null===(n=_.order)||void 0===n?void 0:n.address]}),(null==_?void 0:null===(i=_.order)||void 0===i?void 0:i.manual)!=""&&(0,t.jsxs)("p",{className:"",children:["Address: ",null==_?void 0:null===(c=_.order)||void 0===c?void 0:c.manual]}),(null==_?void 0:null===(u=_.order)||void 0===u?void 0:u.detail)!=""&&(0,t.jsxs)("p",{className:"",children:["Address: ",null==_?void 0:null===(m=_.order)||void 0===m?void 0:m.detail]}),(0,t.jsxs)("p",{className:"",children:["Type: ",null==_?void 0:null===(h=_.order)||void 0===h?void 0:h.type]}),(null==_?void 0:null===(b=_.order)||void 0===b?void 0:b.hotelname)!=""&&(0,t.jsxs)("p",{className:"",children:["Hotel Name: ",null==_?void 0:null===(p=_.order)||void 0===p?void 0:p.hotelname]}),(null==_?void 0:null===(x=_.order)||void 0===x?void 0:x.hotelnumber)!=""&&(0,t.jsxs)("p",{className:"",children:["Hotel Number: ",null==_?void 0:null===(v=_.order)||void 0===v?void 0:v.hotelnumber]}),(null==_?void 0:null===(f=_.order)||void 0===f?void 0:f.positionchecked)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{className:"",children:["Lat: ",null==_?void 0:null===(y=_.order)||void 0===y?void 0:y.lat]}),(0,t.jsxs)("p",{className:"",children:["Lng: ",null==_?void 0:null===(g=_.order)||void 0===g?void 0:g.lng]})]}),(0,t.jsx)("div",{className:"font-bold",children:"Preferences:"}),(0,t.jsxs)("p",{className:"",children:["Wash Mode: ",null==_?void 0:null===(k=_.order)||void 0===k?void 0:k.washmode]}),(0,t.jsxs)("p",{className:"",children:["Detergent: ",null==_?void 0:null===(j=_.order)||void 0===j?void 0:j.detergent]}),(0,t.jsxs)("p",{className:"",children:["Fabric Softener: ",null==_?void 0:null===(N=_.order)||void 0===N?void 0:N.fabricsoftener]}),(0,t.jsxs)("p",{className:"",children:["White: ",null==_?void 0:null===(w=_.order)||void 0===w?void 0:w.white]}),(0,t.jsxs)("p",{className:"",children:["Color & Dirt Collector: ",null==_?void 0:null===(S=_.order)||void 0===S?void 0:S.coloranddirtcollector]}),(0,t.jsxs)("p",{className:"",children:["Number Of Loads: ",null==_?void 0:null===(C=_.order)||void 0===C?void 0:C.numberofloads]}),(0,t.jsxs)("p",{className:"",children:["Tumble Dryer: ",null==_?void 0:null===(O=_.order)||void 0===O?void 0:O.tumbledryer]}),(0,t.jsxs)("p",{className:"",children:["Finishing ",null==_?void 0:null===(T=_.order)||void 0===T?void 0:T.finishing]}),(0,t.jsxs)("p",{className:"",children:["Starch On Shirts: ",null==_?void 0:null===(D=_.order)||void 0===D?void 0:D.starchonshirts]}),(0,t.jsx)("div",{className:"font-bold",children:"Collection & Delivery:"}),(0,t.jsxs)("p",{className:"",children:["Collection Date: ",new Date(Number(null==_?void 0:null===(A=_.order)||void 0===A?void 0:A.collectiondate)).toLocaleDateString("en-US",{weekday:"short",day:"numeric",month:"short"})]}),(0,t.jsxs)("p",{className:"",children:["Collection Time: ",null==_?void 0:null===(I=_.order)||void 0===I?void 0:I.collectiontime]}),(0,t.jsxs)("p",{className:"",children:["Delivery Date: ",new Date(Number(null==_?void 0:null===(E=_.order)||void 0===E?void 0:E.deliverydate)).toLocaleDateString("en-US",{weekday:"short",day:"numeric",month:"short"})]}),(0,t.jsxs)("p",{className:"",children:["Delivery Time: ",null==_?void 0:null===(P=_.order)||void 0===P?void 0:P.deliverytime]}),(0,t.jsxs)("p",{className:"",children:["Frequencies: ",null==_?void 0:null===(Z=_.order)||void 0===Z?void 0:Z.frequencies]}),(null==_?void 0:null===(B=_.order)||void 0===B?void 0:B.orderinstructions)&&(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("p",{className:"",children:["Order Instructions: ",null==_?void 0:null===(J=_.order)||void 0===J?void 0:J.orderinstructions]})}),(0,t.jsx)("div",{className:"font-bold",children:"Coupon Information:"}),(0,t.jsxs)("p",{className:"",children:["Coupon Code: ",null==_?void 0:null===(F=_.order)||void 0===F?void 0:F.coupon]}),(0,t.jsx)("div",{className:"font-bold",children:"Order Items:"}),null==_?void 0:null===(U=_.items)||void 0===U?void 0:U.map((e,r)=>(0,t.jsxs)("div",{className:"flex flex-row",children:[(0,t.jsx)("p",{className:"grow ",children:e.name}),(0,t.jsx)("p",{className:"w-[25px] self-end ",children:e.count}),(0,t.jsxs)("p",{className:"w-[70px] self-end ",children:["\xa3",Number(e.count*e.price).toFixed(2)]})]},r))]})]}),(0,t.jsx)("div",{className:"bg-white dark:bg-black px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:(0,t.jsx)("button",{type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-7 py-3 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:M,children:"Close"})})]})]})})}},1110:function(e,r,o){var t=o(3827),s=o(4090),a=o(6123);o(2666);var d=o(6652);r.Z=()=>{let[e,r]=(0,s.useState)(""),[o,l]=(0,s.useState)(""),[n,i]=(0,s.useState)(""),[c,u]=(0,s.useState)(""),[m,h]=(0,s.useState)(""),[b,p]=(0,s.useState)(""),[x,v]=(0,s.useState)(""),[f,y]=(0,s.useState)(!1),[g,k]=(0,s.useState)("");(0,s.useEffect)(()=>{let e=d.Z.getCurrentUser();r(e.username),l(e.firstname),i(e.lastname),u(e.email),h(e.phone)},[]);let j=async()=>{if(""==e||""==o||""==n||""==m||""==c||""==b)a.Am.warn("Please check fields correctly.");else{y(!0);let r=d.Z.getCurrentUser();try{let t=await d.Z.update(r.id,e,o,n,c,m,b,r.roles,r.accessToken);void 0!==t&&((null==t?void 0:t.message)?a.Am.warn("Please try again."):a.Am.success("User registered successfully!"))}catch(e){k(e.response&&e.response.data&&e.response.data.message||e.message||e.toString())}finally{y(!1)}}};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"p-8 rounded-lg shadow-three bg-white dark:bg-gray-dark",children:[(0,t.jsx)("h1",{className:"mb-8 text-3xl font-bold leading-tight text-black dark:text-body-color-dark sm:text-4xl sm:leading-tight",children:"Profile"}),(0,t.jsxs)("div",{className:"w-full mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10",children:[(0,t.jsx)("h3",{className:"pb-2 font-bold leading-tight text-black dark:text-body-color-dark",children:"USER NAME"}),(0,t.jsx)("input",{type:"text",value:e,onChange:e=>r(e.target.value),placeholder:"Enter first name",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"})]}),(0,t.jsxs)("div",{className:"w-full mb-5 grid grid-cols-1 md:grid-cols-2 sm:gap-4",children:[(0,t.jsxs)("div",{className:"mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10",children:[(0,t.jsx)("h3",{className:"pb-2 font-bold leading-tight text-black dark:text-body-color-dark",children:"FIRST NAME"}),(0,t.jsx)("input",{type:"text",value:o,onChange:e=>l(e.target.value),placeholder:"Enter first name",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"})]}),(0,t.jsxs)("div",{className:"mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10",children:[(0,t.jsx)("h3",{className:"pb-2 font-bold leading-tight text-black dark:text-body-color-dark",children:"LAST NAME"}),(0,t.jsx)("input",{type:"text",value:n,onChange:e=>i(e.target.value),placeholder:"Enter last name",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"})]}),(0,t.jsxs)("div",{className:"mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10",children:[(0,t.jsx)("h3",{className:"pb-2 font-bold leading-tight text-black dark:text-body-color-dark",children:"EMAIL ADDRESS"}),(0,t.jsx)("input",{type:"email",value:c,onChange:e=>u(e.target.value),placeholder:"Enter email address",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"})]}),(0,t.jsxs)("div",{className:"mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10",children:[(0,t.jsx)("h3",{className:"pb-2 font-bold leading-tight text-black dark:text-body-color-dark",children:"PHONE"}),(0,t.jsx)("input",{type:"telephone",value:m,onChange:e=>h(e.target.value),placeholder:"79xxxxxxxx",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"})]}),(0,t.jsxs)("div",{className:"mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10",children:[(0,t.jsx)("h3",{className:"pb-2 font-bold leading-tight text-black dark:text-body-color-dark",children:"PASSWORD"}),(0,t.jsx)("input",{type:"password",value:b,onChange:e=>p(e.target.value),placeholder:"Create your password",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"})]}),(0,t.jsxs)("div",{className:"mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10",children:[(0,t.jsx)("h3",{className:"pb-2 font-bold leading-tight text-black dark:text-body-color-dark",children:"CONFIRM PASSWORD"}),(0,t.jsx)("input",{type:"password",value:x,onChange:e=>v(e.target.value),placeholder:"Re-enter your password",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"})]})]}),(0,t.jsx)("div",{className:"flex flex-row items-center justify-end space-x-2",children:(0,t.jsx)("button",{onClick:j,className:"rounded-lg bg-amber-500 px-7 py-3 text-base text-center font-semibold text-white duration-300 ease-in-out hover:bg-amber-500/60",children:"\xa0\xa0Save\xa0\xa0"})})]})})}}}]);