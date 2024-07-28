(()=>{var e={};e.id=178,e.ids=[178],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7083:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>h,originalPathname:()=>x,pages:()=>c,routeModule:()=>m,tree:()=>n});var s=r(482),l=r(9108),a=r(2563),i=r.n(a),d=r(8300),o={};for(let e in d)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>d[e]);r.d(t,o);let n=["",{children:["profile",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5648)),"E:\\Project_Sharma\\laundry-build\\src\\app\\profile\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,1342)),"E:\\Project_Sharma\\laundry-build\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,8206)),"E:\\Project_Sharma\\laundry-build\\src\\app\\not-found.tsx"]}],c=["E:\\Project_Sharma\\laundry-build\\src\\app\\profile\\page.tsx"],x="/profile/page",h={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:l.x.APP_PAGE,page:"/profile/page",pathname:"/profile",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:n}})},1663:(e,t,r)=>{Promise.resolve().then(r.bind(r,8971))},8971:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var s=r(5344),l=r(3729),a=r(9697);r(5288);var i=r(9337),d=r(6559),o=r(2449),n=r(5951);let c=()=>{let[e,t]=(0,l.useState)([]),[r,a]=(0,l.useState)(!1),[i,c]=(0,l.useState)(!1),[x,h]=(0,l.useState)(0);(0,l.useEffect)(()=>{(async()=>{let e=await d.Z.getOrderByUserId(Number(n.Z.getCurrentUser().id));void 0!==e&&e?.length>0&&(t(e),a(e?.length>0))})().catch(e=>console.error("Failed to fetch orders:",e))},[]);let m=async()=>{t([]),a(!1);let e=await d.Z.getOrderByUserId(Number(n.Z.getCurrentUser().id));void 0!==e&&e?.length>0&&(t(e),a(e?.length>0))};return s.jsx(s.Fragment,{children:(0,s.jsxs)("div",{className:"p-8 rounded-lg shadow-three bg-white dark:bg-gray-dark",children:[s.jsx("h1",{className:"mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight",children:"Orders Management"}),s.jsx("div",{className:"w-full mb-5",children:r?(0,s.jsxs)("table",{className:"w-full border-collapse border border-slate-400 table-auto",children:[s.jsx("thead",{className:"bg-slate-100",children:(0,s.jsxs)("tr",{children:[s.jsx("th",{className:"border border-slate-300 p-3",children:"OrderID"}),s.jsx("th",{className:"border border-slate-300 p-3",children:"CollectionDate"}),s.jsx("th",{className:"border border-slate-300 p-3 ",children:"CollectionTime"}),s.jsx("th",{className:"border border-slate-300 p-3",children:"DeliveryDate"}),s.jsx("th",{className:"border border-slate-300 p-3",children:"DeliveryTime"}),s.jsx("th",{className:"border border-slate-300 p-3",children:"Detail"})]})}),s.jsx("tbody",{children:e.map((e,t)=>(0,s.jsxs)("tr",{children:[s.jsx("td",{className:"border border-slate-300 p-2",children:e.id}),s.jsx("td",{className:"border border-slate-300 p-2",children:new Date(Number(e.collectiondate)).toLocaleDateString("en-US",{weekday:"short",day:"numeric",month:"short"})}),s.jsx("td",{className:"border border-slate-300 p-2",children:e.collectiontime}),s.jsx("td",{className:"border border-slate-300 p-2",children:new Date(Number(e.deliverydate)).toLocaleDateString("en-US",{weekday:"short",day:"numeric",month:"short"})}),s.jsx("td",{className:"border border-slate-300 p-2",children:e.deliverytime}),s.jsx("td",{className:"border border-slate-300 text-center p-2 hover:text-body-color/70",children:s.jsx("button",{onClick:()=>{c(!0),h(e.id)},children:"Detail"})})]},t))})]}):s.jsx("span",{className:"w-full text-red",children:"Loading"})}),s.jsx("div",{className:"flex flex-row items-center justify-end",children:(0,s.jsxs)("button",{onClick:m,className:"rounded-lg bg-slate-200 px-8 py-4 text-base flex items-center justify-center font-semibold text-black duration-300 ease-in-out hover:bg-slate-200/60",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#5f6368",children:s.jsx("path",{d:"M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"})}),"\xa0Reload\xa0\xa0"]})}),i&&s.jsx(o.Z,{isOpen:i,Id:x,onClose:()=>c(!1),children:s.jsx(s.Fragment,{})})]})})},x=()=>{let[e,t]=(0,l.useState)(0);return(0,s.jsxs)(s.Fragment,{children:[s.jsx(a.Ix,{}),s.jsx("section",{className:"overflow-hidden pb-[120px] pt-[180px]",children:s.jsx("div",{className:"container",children:(0,s.jsxs)("div",{className:"-mx-4 flex flex-wrap",children:[(0,s.jsxs)("div",{className:"w-full px-4 lg:w-3/12",children:[(0,s.jsxs)("div",{className:"shadow-three dark:bg-gray-dark mb-10 rounded-md bg-white dark:shadow-none",children:[(0,s.jsxs)("div",{className:"flex items-center justify-left px-8 py-4 pt-8",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#5f6368",children:s.jsx("path",{d:"M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm560 40-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80Zm40-120q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z"})}),s.jsx("button",{onClick:()=>t(0),className:"flex text-base lg:mr-0 lg:inline-flex lg:px-0 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white",children:"\xa0\xa0My Profile"})]}),(0,s.jsxs)("div",{className:"flex items-center justify-left px-8 py-4 pb-8",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#5f6368",children:s.jsx("path",{d:"m480-560-56-56 63-64H320v-80h167l-64-64 57-56 160 160-160 160ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"})}),s.jsx("button",{onClick:()=>t(1),className:"flex text-base lg:mr-0 lg:inline-flex lg:px-0 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white",children:"\xa0\xa0My Orders"})]})]}),(0,s.jsxs)("div",{className:"shadow-three dark:bg-gray-dark mb-10 rounded-md bg-white dark:shadow-none",children:[s.jsx("h3",{className:"border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white",children:"Popular Category"}),(0,s.jsxs)("ul",{className:"px-8 py-6",children:[s.jsx("li",{children:s.jsx("a",{href:"/",className:"mb-3 inline-block text-base font-medium text-body-color hover:text-primary",children:"Home"})}),s.jsx("li",{children:s.jsx("a",{href:"/",className:"mb-3 inline-block text-base font-medium text-body-color hover:text-primary",children:"Feature"})}),s.jsx("li",{children:s.jsx("a",{href:"/",className:"mb-3 inline-block text-base font-medium text-body-color hover:text-primary",children:"Offer"})}),s.jsx("li",{children:s.jsx("a",{href:"/",className:"mb-3 inline-block text-base font-medium text-body-color hover:text-primary",children:"About"})})]})]})]}),(0,s.jsxs)("div",{className:"w-full px-4 lg:w-9/12",children:[s.jsx("div",{className:`${0===e?"block":"hidden"}`,children:s.jsx(i.Z,{})}),s.jsx("div",{className:`${1===e?"block":"hidden"}`,children:s.jsx(c,{})})]})]})})})]})}},5648:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>a,__esModule:()=>l,default:()=>i});let s=(0,r(6843).createProxy)(String.raw`E:\Project_Sharma\laundry-build\src\app\profile\page.tsx`),{__esModule:l,$$typeof:a}=s,i=s.default}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[195,697,381,655],()=>r(7083));module.exports=s})();