import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as a}from"./createLucideIcon-Ct87QT5c.js";import{M as g}from"./map-pin-CbKfst1t.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],h=a("log-in",x);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],f=a("package",y);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],j=a("user-round",k);function l({signedIn:m=!1,name:p="고객",onSignOut:u}){return e.jsx("div",{className:"w-56 rounded-xl border border-krds-gray-20 bg-white p-2 shadow-lg",role:"menu","aria-label":"계정 메뉴",children:m?e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"px-3 py-2 text-sm font-bold",children:[p,"님"]}),e.jsxs("a",{role:"menuitem",href:"#orders",className:"flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-krds-gray-5",children:[e.jsx(f,{className:"size-4"})," 주문 내역"]}),e.jsxs("a",{role:"menuitem",href:"#addresses",className:"flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-krds-gray-5",children:[e.jsx(g,{className:"size-4"})," 배송지 관리"]}),e.jsx("button",{role:"menuitem",type:"button",className:"w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-krds-gray-5",onClick:u,children:"로그아웃"})]}):e.jsxs(e.Fragment,{children:[e.jsxs("a",{role:"menuitem",href:"#login",className:"flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold hover:bg-krds-gray-5",children:[e.jsx(h,{className:"size-4"})," 로그인"]}),e.jsxs("a",{role:"menuitem",href:"#signup",className:"flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-krds-gray-5",children:[e.jsx(j,{className:"size-4"})," 회원가입"]})]})})}l.__docgenInfo={description:"",methods:[],displayName:"AccountMenu",props:{signedIn:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'고객'",computed:!1}},onSignOut:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const I={title:"Molecules/Commerce/AccountMenu",component:l},s={},r={args:{signedIn:!0,name:"사용자"}};var n,t,o;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(o=(t=s.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var d,c,i;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    signedIn: true,
    name: '사용자'
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const w=["SignedOut","SignedIn"];export{r as SignedIn,s as SignedOut,w as __namedExportsOrder,I as default};
