(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{524:function(e,t,r){Promise.resolve().then(r.bind(r,3393))},3393:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var s=r(3827),l=r(4090),a=r(6123);r(2666);var d=r(743),o=r(8816);let n="https://api.welovelaundry.uk/api/test/";class i{static getInstance(){return i.instance||(i.instance=new i),i.instance}async getPublicContent(){return fetch("".concat(n,"all"),{method:"GET",headers:{...(0,o.Z)()}}).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()})}async getAllEmployeeContent(){return fetch("".concat(n,"allEmployee"),{method:"GET",headers:{...(0,o.Z)()}}).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()})}getUserBoard(){return fetch("".concat(n,"user"),{method:"GET",headers:{...(0,o.Z)()}}).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()})}getModeratorBoard(){return fetch("".concat(n,"mod"),{method:"GET",headers:{...(0,o.Z)()}}).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()})}getAdminBoard(){return fetch("".concat(n,"admin"),{method:"GET",headers:{...(0,o.Z)()}}).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()})}async convertEmployee(e){return fetch("".concat(n,"updatetoemployee"),{method:"POST",headers:{"Content-Type":"application/json",...(0,o.Z)()},body:JSON.stringify({userid:e})}).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()})}async convertUser(e){return fetch("".concat(n,"updatetouser"),{method:"POST",headers:{"Content-Type":"application/json",...(0,o.Z)()},body:JSON.stringify({userid:e})}).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()})}async delete(e){return fetch("".concat(n,"delete"),{method:"POST",headers:{"Content-Type":"application/json",...(0,o.Z)()},body:JSON.stringify({userid:e})}).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()})}constructor(){}}var c=i.getInstance(),h=()=>{let[e,t]=(0,l.useState)([]),[r,d]=(0,l.useState)(!1);(0,l.useEffect)(()=>{(async()=>{let e=await c.getPublicContent();void 0!==e&&(null==e?void 0:e.length)>0&&(t(e),d((null==e?void 0:e.length)>0))})().catch(e=>console.error("Failed to fetch users:",e))},[]);let o=async()=>{let e=await c.getPublicContent();void 0!==e&&(null==e?void 0:e.length)>0&&(t(e),d((null==e?void 0:e.length)>0),a.Am.success("Reloaded successfully!"))},n=async e=>{let t=await c.convertEmployee(e);void 0!==t&&((null==t?void 0:t.message)=="User converted successfully!"?a.Am.success("Converted successfully!"):a.Am.warn(null==t?void 0:t.message))},i=async e=>{let t=await c.delete(e);void 0!==t&&((null==t?void 0:t.message)=="User deleted successfully!"?a.Am.success("Deleted successfully!"):a.Am.warn(null==t?void 0:t.message))};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"p-8 rounded-lg shadow-three bg-white dark:bg-gray-dark",children:[(0,s.jsx)("h1",{className:"mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight",children:"User Management"}),(0,s.jsx)("div",{className:"w-full mb-5",children:r?(0,s.jsxs)("table",{className:"w-full border-collapse border border-slate-400 table-auto",children:[(0,s.jsx)("thead",{className:"bg-slate-100",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"border border-slate-300 p-3",children:"UserName"}),(0,s.jsx)("th",{className:"border border-slate-300 p-3",children:"FirstName"}),(0,s.jsx)("th",{className:"border border-slate-300 p-3",children:"LastName"}),(0,s.jsx)("th",{className:"border border-slate-300 p-3",children:"Email"}),(0,s.jsx)("th",{className:"border border-slate-300 p-3",children:"Phone"}),(0,s.jsx)("th",{className:"border border-slate-300 p-3",children:"To Employee"}),(0,s.jsx)("th",{className:"border border-slate-300 p-3",children:"Delete"})]})}),(0,s.jsx)("tbody",{children:e.map((e,t)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"border border-slate-300 p-2",children:e.username}),(0,s.jsx)("td",{className:"border border-slate-300 p-2",children:e.firstname}),(0,s.jsx)("td",{className:"border border-slate-300 p-2",children:e.lastname}),(0,s.jsx)("td",{className:"border border-slate-300 p-2",children:e.email}),(0,s.jsx)("td",{className:"border border-slate-300 p-2",children:e.phone}),(0,s.jsx)("td",{className:"border border-slate-300 text-center p-2 hover:text-body-color/70",children:(0,s.jsx)("button",{onClick:()=>n(e.id),children:"Convert"})}),(0,s.jsx)("td",{className:"border border-slate-300 text-center p-2 hover:text-body-color/70",children:(0,s.jsx)("button",{onClick:()=>i(e.id),children:"Delete"})})]},t))})]}):(0,s.jsx)("span",{className:"w-full text-red",children:"Loading"})}),(0,s.jsx)("div",{className:"flex flex-row items-center justify-end",children:(0,s.jsxs)("button",{onClick:o,className:"rounded-lg bg-slate-200 px-8 py-4 text-base flex items-center justify-center font-semibold text-black duration-300 ease-in-out hover:bg-slate-200/60",children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#5f6368",children:(0,s.jsx)("path",{d:"M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"})}),"\xa0Reload\xa0\xa0"]})})]})})},x=()=>{let[e,t]=(0,l.useState)([]),[r,d]=(0,l.useState)(!1);(0,l.useEffect)(()=>{(async()=>{let e=await c.getAllEmployeeContent();void 0!==e&&(null==e?void 0:e.length)>0&&(t(e),d((null==e?void 0:e.length)>0))})().catch(e=>console.error("Failed to fetch users:",e))},[]);let o=async()=>{t([]),d(!1);let e=await c.getAllEmployeeContent();void 0!==e&&(null==e?void 0:e.length)>0&&(t(e),d((null==e?void 0:e.length)>0),a.Am.success("Reloaded successfully!"))},n=async e=>{let t=await c.convertUser(e);void 0!==t&&((null==t?void 0:t.message)=="User converted successfully!"?a.Am.success("Converted successfully!"):a.Am.warn(null==t?void 0:t.message))};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"p-8 rounded-lg shadow-three bg-white dark:bg-gray-dark",children:[(0,s.jsx)("h1",{className:"mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight",children:"Employee Management"}),(0,s.jsx)("div",{className:"w-full mb-5",children:r?(0,s.jsxs)("table",{className:"w-full border-collapse border border-slate-400 table-auto",children:[(0,s.jsx)("thead",{className:"bg-slate-100",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"border border-slate-300 p-3",children:"UserName"}),(0,s.jsx)("th",{className:"border border-slate-300 p-3",children:"FirstName"}),(0,s.jsx)("th",{className:"border border-slate-300 p-3 ",children:"LastName"}),(0,s.jsx)("th",{className:"border border-slate-300 p-3",children:"Email"}),(0,s.jsx)("th",{className:"border border-slate-300 p-3",children:"Phone"}),(0,s.jsx)("th",{className:"border border-slate-300 p-3",children:"To User"})]})}),(0,s.jsx)("tbody",{children:e.map((e,t)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"border border-slate-300 p-2",children:e.username}),(0,s.jsx)("td",{className:"border border-slate-300 p-2",children:e.firstname}),(0,s.jsx)("td",{className:"border border-slate-300 p-2",children:e.lastname}),(0,s.jsx)("td",{className:"border border-slate-300 p-2",children:e.email}),(0,s.jsx)("td",{className:"border border-slate-300 p-2",children:e.phone}),(0,s.jsx)("td",{className:"border border-slate-300 text-center p-2 hover:text-body-color/70",children:(0,s.jsx)("button",{onClick:()=>n(e.id),children:"Convert"})})]},t))})]}):(0,s.jsx)("span",{className:"w-full text-red",children:"Loading"})}),(0,s.jsx)("div",{className:"flex flex-row items-center justify-end",children:(0,s.jsxs)("button",{onClick:o,className:"rounded-lg bg-slate-200 px-8 py-4 text-base flex items-center justify-center font-semibold text-black duration-300 ease-in-out hover:bg-slate-200/60",children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#5f6368",children:(0,s.jsx)("path",{d:"M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"})}),"\xa0Reload\xa0\xa0"]})})]})})},m=r(5816),b=r(8861),u=()=>{let[e,t]=(0,l.useState)([]),[r,d]=(0,l.useState)(!1),[o,n]=(0,l.useState)(!1),[i,c]=(0,l.useState)(0);(0,l.useEffect)(()=>{(async()=>{let e=await m.Z.getAllOrders();void 0!==e&&(null==e?void 0:e.length)>0&&(t(e),d((null==e?void 0:e.length)>0))})().catch(e=>console.error("Failed to fetch orders:",e))},[]);let h=async()=>{t([]),d(!1);let e=await m.Z.getAllOrders();void 0!==e&&((null==e?void 0:e.length)>0?(t(e),d((null==e?void 0:e.length)>0),a.Am.success("Reloaded successfully!")):a.Am.warn(e))};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"p-8 rounded-lg shadow-three bg-white dark:bg-gray-dark",children:[(0,s.jsx)("h1",{className:"mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight",children:"Orders Management"}),(0,s.jsx)("div",{className:"w-full mb-5",children:r?(0,s.jsxs)("table",{className:"w-full border-collapse border border-slate-400 table-auto",children:[(0,s.jsx)("thead",{className:"bg-slate-100",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"border border-slate-300 p-3",children:"OrderID"}),(0,s.jsx)("th",{className:"border border-slate-300 p-3",children:"CollectionDate"}),(0,s.jsx)("th",{className:"border border-slate-300 p-3 ",children:"CollectionTime"}),(0,s.jsx)("th",{className:"border border-slate-300 p-3",children:"DeliveryDate"}),(0,s.jsx)("th",{className:"border border-slate-300 p-3",children:"DeliveryTime"}),(0,s.jsx)("th",{className:"border border-slate-300 p-3",children:"Detail"})]})}),(0,s.jsx)("tbody",{children:e.map((e,t)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"border border-slate-300 p-2",children:e.id}),(0,s.jsx)("td",{className:"border border-slate-300 p-2",children:new Date(Number(e.collectiondate)).toLocaleDateString("en-US",{weekday:"short",day:"numeric",month:"short"})}),(0,s.jsx)("td",{className:"border border-slate-300 p-2",children:e.collectiontime}),(0,s.jsx)("td",{className:"border border-slate-300 p-2",children:new Date(Number(e.deliverydate)).toLocaleDateString("en-US",{weekday:"short",day:"numeric",month:"short"})}),(0,s.jsx)("td",{className:"border border-slate-300 p-2",children:e.deliverytime}),(0,s.jsx)("td",{className:"border border-slate-300 text-center p-2 hover:text-body-color/70",children:(0,s.jsx)("button",{onClick:()=>{n(!0),c(e.id)},children:"Detail"})})]},t))})]}):(0,s.jsx)("span",{className:"w-full text-red",children:"Loading"})}),(0,s.jsx)("div",{className:"flex flex-row items-center justify-end",children:(0,s.jsxs)("button",{onClick:h,className:"rounded-lg bg-slate-200 px-8 py-4 text-base flex items-center justify-center font-semibold text-black duration-300 ease-in-out hover:bg-slate-200/60",children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#5f6368",children:(0,s.jsx)("path",{d:"M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"})}),"\xa0Reload\xa0\xa0"]})}),o&&(0,s.jsx)(b.Z,{isOpen:o,Id:i,onClose:()=>n(!1),children:(0,s.jsx)(s.Fragment,{})})]})})},p=()=>{let[e,t]=(0,l.useState)([]),[r,d]=(0,l.useState)([]),[o,n]=(0,l.useState)(!1),[i,c]=(0,l.useState)(!1),[h,x]=(0,l.useState)(!1),[u,p]=(0,l.useState)(0),[j,g]=(0,l.useState)(new Date().toISOString().slice(0,10)),[w,v]=(0,l.useState)(new Date().toISOString().slice(0,10));(0,l.useEffect)(()=>{let e=async()=>{let e=await m.Z.getAllOrdersByDeliveryDate(new Date(w).getTime());void 0!==e&&(null==e?void 0:e.length)>0&&(d(e),c((null==e?void 0:e.length)>0))};(async()=>{let e=await m.Z.getAllOrdersByCollectionDate(new Date(j).getTime());void 0!==e&&(null==e?void 0:e.length)>0&&(t(e),n((null==e?void 0:e.length)>0))})().catch(e=>console.error("Failed to fetch orders:",e)),e().catch(e=>console.error("Failed to fetch orders:",e))},[]);let f=e=>{g(e.target.value)},N=e=>{v(e.target.value)},y=async()=>{t([]),n(!1);let e=new Date(j).getTime(),r=await m.Z.getAllOrdersByCollectionDate(e);void 0!==r&&((null==r?void 0:r.length)>0?(t(r),n((null==r?void 0:r.length)>0),a.Am.success("Reloaded successfully!")):a.Am.warn(r))},k=async()=>{d([]),c(!1);let e=new Date(w).getTime(),t=await m.Z.getAllOrdersByDeliveryDate(e);void 0!==t&&((null==t?void 0:t.length)>0?(d(t),c((null==t?void 0:t.length)>0),a.Am.success("Reloaded successfully!")):a.Am.warn(t))};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"p-8 rounded-lg shadow-three bg-white dark:bg-gray-dark",children:[(0,s.jsx)("h1",{className:"mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight",children:"Schedule Management"}),(0,s.jsxs)("div",{className:"mb-5 flex w-full md:w-[300px] flex-wrap items-center justify-between dark:border-white dark:border-opacity-10",children:[(0,s.jsx)("h3",{className:"pb-2 font-bold leading-tight text-black dark:text-white",children:"COLLECTION DATE"}),(0,s.jsx)("input",{type:"date",id:"date-input",onChange:e=>f(e),value:j,className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",name:"date"})]}),(0,s.jsx)("div",{className:"w-full mb-5",children:o?(0,s.jsxs)("table",{className:"w-full border-collapse border border-slate-400 table-auto",children:[(0,s.jsx)("thead",{className:"bg-slate-100",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"border border-slate-300 p-3",children:"OrderID"}),(0,s.jsx)("th",{className:"border border-slate-300 p-3",children:"CollectionDate"}),(0,s.jsx)("th",{className:"border border-slate-300 p-3 ",children:"CollectionTime"}),(0,s.jsx)("th",{className:"border border-slate-300 p-3",children:"DeliveryDate"}),(0,s.jsx)("th",{className:"border border-slate-300 p-3",children:"DeliveryTime"}),(0,s.jsx)("th",{className:"border border-slate-300 p-3",children:"Detail"})]})}),(0,s.jsx)("tbody",{children:e.map((e,t)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"border border-slate-300 p-2",children:e.id}),(0,s.jsx)("td",{className:"border border-slate-300 p-2",children:new Date(Number(e.collectiondate)).toLocaleDateString("en-US",{weekday:"short",day:"numeric",month:"short"})}),(0,s.jsx)("td",{className:"border border-slate-300 p-2",children:e.collectiontime}),(0,s.jsx)("td",{className:"border border-slate-300 p-2",children:new Date(Number(e.deliverydate)).toLocaleDateString("en-US",{weekday:"short",day:"numeric",month:"short"})}),(0,s.jsx)("td",{className:"border border-slate-300 p-2",children:e.deliverytime}),(0,s.jsx)("td",{className:"border border-slate-300 text-center p-2 hover:text-body-color/70",children:(0,s.jsx)("button",{onClick:()=>{x(!0),p(e.id)},children:"Detail"})})]},t))})]}):(0,s.jsx)("span",{className:"w-full text-red",children:"Loading"})}),(0,s.jsx)("div",{className:"flex flex-row items-center justify-end mb-10",children:(0,s.jsxs)("button",{onClick:y,className:"rounded-lg bg-slate-200 px-8 py-4 text-base flex items-center justify-center font-semibold text-black duration-300 ease-in-out hover:bg-slate-200/60",children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#5f6368",children:(0,s.jsx)("path",{d:"M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"})}),"\xa0Reload\xa0\xa0"]})}),(0,s.jsxs)("div",{className:"mb-5 flex w-full md:w-[300px] flex-wrap items-center justify-between dark:border-white dark:border-opacity-10",children:[(0,s.jsx)("h3",{className:"pb-2 font-bold leading-tight text-black dark:text-white",children:"DELIVERY DATE"}),(0,s.jsx)("input",{type:"date",id:"date-input",onChange:e=>N(e),value:w,className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",name:"date"})]}),(0,s.jsx)("div",{className:"w-full mb-5",children:i?(0,s.jsxs)("table",{className:"w-full border-collapse border border-slate-400 table-auto",children:[(0,s.jsx)("thead",{className:"bg-slate-100",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"border border-slate-300 p-3",children:"OrderID"}),(0,s.jsx)("th",{className:"border border-slate-300 p-3",children:"CollectionDate"}),(0,s.jsx)("th",{className:"border border-slate-300 p-3 ",children:"CollectionTime"}),(0,s.jsx)("th",{className:"border border-slate-300 p-3",children:"DeliveryDate"}),(0,s.jsx)("th",{className:"border border-slate-300 p-3",children:"DeliveryTime"}),(0,s.jsx)("th",{className:"border border-slate-300 p-3",children:"Detail"})]})}),(0,s.jsx)("tbody",{children:r.map((e,t)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"border border-slate-300 p-2",children:e.id}),(0,s.jsx)("td",{className:"border border-slate-300 p-2",children:new Date(Number(e.collectiondate)).toLocaleDateString("en-US",{weekday:"short",day:"numeric",month:"short"})}),(0,s.jsx)("td",{className:"border border-slate-300 p-2",children:e.collectiontime}),(0,s.jsx)("td",{className:"border border-slate-300 p-2",children:new Date(Number(e.deliverydate)).toLocaleDateString("en-US",{weekday:"short",day:"numeric",month:"short"})}),(0,s.jsx)("td",{className:"border border-slate-300 p-2",children:e.deliverytime}),(0,s.jsx)("td",{className:"border border-slate-300 text-center p-2 hover:text-body-color/70",children:(0,s.jsx)("button",{onClick:()=>{x(!0),p(e.id)},children:"Detail"})})]},t))})]}):(0,s.jsx)("span",{className:"w-full text-red",children:"Loading"})}),(0,s.jsx)("div",{className:"flex flex-row items-center justify-end",children:(0,s.jsxs)("button",{onClick:k,className:"rounded-lg bg-slate-200 px-8 py-4 text-base flex items-center justify-center font-semibold text-black duration-300 ease-in-out hover:bg-slate-200/60",children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#5f6368",children:(0,s.jsx)("path",{d:"M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"})}),"\xa0Reload\xa0\xa0"]})}),h&&(0,s.jsx)(b.Z,{isOpen:h,Id:u,onClose:()=>x(!1),children:(0,s.jsx)(s.Fragment,{})})]})})},j=()=>{let[e,t]=(0,l.useState)(""),[r,a]=(0,l.useState)(!1),[d,o]=(0,l.useState)("");return(0,l.useEffect)(()=>{},[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"p-8 rounded-lg shadow-three bg-white dark:bg-gray-dark",children:[(0,s.jsx)("h1",{className:"mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight",children:"Payment Management"}),(0,s.jsxs)("div",{className:"w-full mb-5 flex flex-wrap items-center justify-between dark:border-white dark:border-opacity-10",children:[(0,s.jsx)("h3",{className:"pb-2 font-bold leading-tight text-black dark:text-white",children:"Token"}),(0,s.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value),placeholder:"Enter token",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"})]})]})})},g=()=>{let[e,t]=(0,l.useState)(0);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Ix,{}),(0,s.jsx)("section",{className:"overflow-hidden pb-[120px] pt-[180px]",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"-mx-4 flex flex-wrap",children:[(0,s.jsxs)("div",{className:"w-full px-4 lg:w-3/12",children:[(0,s.jsxs)("div",{className:"shadow-three dark:bg-gray-dark mb-10 rounded-md bg-white dark:shadow-none",children:[(0,s.jsxs)("div",{className:"flex items-center justify-left border-b border-body-color border-opacity-10 px-8 py-8",children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#5f6368",children:(0,s.jsx)("path",{d:"M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm560 40-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80Zm40-120q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z"})}),(0,s.jsx)("button",{onClick:()=>t(0),className:"flex text-base lg:mr-0 lg:inline-flex lg:px-0 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white",children:"\xa0\xa0Profile"})]}),(0,s.jsxs)("ul",{className:"p-8",children:[(0,s.jsxs)("li",{className:"mb-6 pb-6 flex items-center justify-left",children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#5f6368",children:(0,s.jsx)("path",{d:"M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"})}),(0,s.jsx)("button",{onClick:()=>t(1),className:"flex text-base lg:mr-0 lg:inline-flex lg:px-0 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white",children:"\xa0\xa0User Mangement"})]}),(0,s.jsxs)("li",{className:"mb-6 pb-6 flex items-center justify-left",children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#5f6368",children:(0,s.jsx)("path",{d:"M560-680v-80h320v80H560Zm0 160v-80h320v80H560Zm0 160v-80h320v80H560Zm-240-40q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-160v-76q0-21 10-40t28-30q45-27 95.5-40.5T320-360q56 0 106.5 13.5T522-306q18 11 28 30t10 40v76H80Zm86-80h308q-35-20-74-30t-80-10q-41 0-80 10t-74 30Zm154-240q17 0 28.5-11.5T360-520q0-17-11.5-28.5T320-560q-17 0-28.5 11.5T280-520q0 17 11.5 28.5T320-480Zm0-40Zm0 280Z"})}),(0,s.jsx)("button",{onClick:()=>t(2),className:"flex text-base lg:mr-0 lg:inline-flex lg:px-0 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white",children:"\xa0\xa0Employee Mangement"})]}),(0,s.jsxs)("li",{className:"mb-6 pb-6 flex items-center justify-left",children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#5f6368",children:(0,s.jsx)("path",{d:"m480-560-56-56 63-64H320v-80h167l-64-64 57-56 160 160-160 160ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"})}),(0,s.jsx)("button",{onClick:()=>t(3),className:"flex text-base lg:mr-0 lg:inline-flex lg:px-0 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white",children:"\xa0\xa0Order Mangement"})]}),(0,s.jsxs)("li",{className:"mb-6 pb-6 flex items-center justify-left",children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#5f6368",children:(0,s.jsx)("path",{d:"M200-640h560v-80H200v80Zm0 0v-80 80Zm0 560q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v227q-19-9-39-15t-41-9v-43H200v400h252q7 22 16.5 42T491-80H200Zm520 40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm67-105 28-28-75-75v-112h-40v128l87 87Z"})}),(0,s.jsx)("button",{onClick:()=>t(4),className:"flex text-base lg:mr-0 lg:inline-flex lg:px-0 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white",children:"\xa0\xa0Schedule Mangement"})]}),(0,s.jsxs)("li",{className:"flex items-center justify-left",children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#5f6368",children:(0,s.jsx)("path",{d:"M160-240v-320 13-173 480Zm0-400h640v-80H160v80Zm303 480H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v213q-35-25-76.5-39T716-560q-57 0-107.5 21.5T520-480H160v240h279q3 21 9 41t15 39Zm213 80-12-60q-12-5-22.5-10.5T620-164l-58 18-40-68 46-40q-2-13-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T664-420l12-60h80l12 60q12 5 22.5 10.5T812-396l58-18 40 68-46 40q2 13 2 26t-2 26l46 40-40 68-58-18q-11 8-21.5 13.5T768-140l-12 60h-80Zm40-120q33 0 56.5-23.5T796-280q0-33-23.5-56.5T716-360q-33 0-56.5 23.5T636-280q0 33 23.5 56.5T716-200Z"})}),(0,s.jsx)("button",{onClick:()=>t(5),className:"flex text-base lg:mr-0 lg:inline-flex lg:px-0 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white",children:"\xa0\xa0Payment Mangement"})]})]})]}),(0,s.jsxs)("div",{className:"shadow-three dark:bg-gray-dark mb-10 rounded-md bg-white dark:shadow-none",children:[(0,s.jsx)("h3",{className:"border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white",children:"Popular Category"}),(0,s.jsxs)("ul",{className:"px-8 py-6",children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#0",className:"mb-3 inline-block text-base font-medium text-body-color hover:text-primary",children:"Home"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#0",className:"mb-3 inline-block text-base font-medium text-body-color hover:text-primary",children:"Feature"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#0",className:"mb-3 inline-block text-base font-medium text-body-color hover:text-primary",children:"Offer"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#0",className:"mb-3 inline-block text-base font-medium text-body-color hover:text-primary",children:"About"})})]})]})]}),(0,s.jsxs)("div",{className:"w-full px-4 lg:w-9/12",children:[(0,s.jsx)("div",{className:"".concat(0===e?"block":"hidden"),children:(0,s.jsx)(d.Z,{})}),(0,s.jsx)("div",{className:"".concat(1===e?"block":"hidden"),children:(0,s.jsx)(h,{})}),(0,s.jsx)("div",{className:"".concat(2===e?"block":"hidden"),children:(0,s.jsx)(x,{})}),(0,s.jsx)("div",{className:"".concat(3===e?"block":"hidden"),children:(0,s.jsx)(u,{})}),(0,s.jsx)("div",{className:"".concat(4===e?"block":"hidden"),children:(0,s.jsx)(p,{})}),(0,s.jsx)("div",{className:"".concat(5===e?"block":"hidden"),children:(0,s.jsx)(j,{})})]})]})})})]})}}},function(e){e.O(0,[645,171,971,69,744],function(){return e(e.s=524)}),_N_E=e.O()}]);