import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as L}from"./index-BxXVWNx3.js";import{c as m}from"./utils-DCADjnpI.js";import{I as R}from"./image-ClQtcmjb.js";import{c}from"./createLucideIcon-Ct87QT5c.js";import{F as A}from"./file-text-DBOcb2Om.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],P=c("chart-column",E);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],B=c("headphones",S);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],$=c("layout-dashboard",F),O=[{id:"service",label:"서비스",description:"대표 서비스 화면",color:"#256ef4"},{id:"data",label:"데이터",description:"지표와 데이터 시각화",color:"#008a1e"},{id:"policy",label:"정책",description:"안내와 정책 콘텐츠",color:"#b75c00"},{id:"support",label:"지원",description:"고객 지원 접점",color:"#d50136"}];function I({className:q,items:H=O,height:d=280,gap:V=8,expandRatio:_=3,orientation:T="horizontal",rounded:G=!0,onItemSelect:i,...M}){const[p,t]=L.useState(null),l=T==="horizontal";return a.jsx("div",{className:m("flex",l?"flex-row":"flex-col",q),style:{gap:V,height:l?d:void 0,width:l?void 0:d},...M,children:H.map((e,C)=>{const u=p===e.id,D=p!==null&&!u;return a.jsxs("button",{type:"button",onMouseEnter:()=>t(e.id),onMouseLeave:()=>t(null),onFocus:()=>t(e.id),onBlur:()=>t(null),onClick:()=>i==null?void 0:i(e,C),className:m("group relative min-h-24 min-w-16 overflow-hidden border border-krds-gray-30 text-left shadow-sm transition-[flex,opacity,transform] duration-300 ease-out","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-krds-primary-50 focus-visible:ring-offset-2",G&&"rounded-md",D&&"opacity-70"),style:{flex:u?_:1,backgroundColor:e.color??"#555555"},children:[e.src?a.jsx("img",{src:e.src,alt:e.alt??"",className:"size-full object-cover"}):e.content?a.jsx("div",{className:"flex size-full items-center justify-center p-4 text-white",children:e.content}):a.jsx("div",{className:"flex size-full items-center justify-center text-white/80",children:a.jsx(R,{"aria-hidden":"true",className:"size-8"})}),e.label||e.description?a.jsxs("div",{className:"absolute inset-x-0 bottom-0 grid gap-1 bg-gradient-to-t from-black/75 to-transparent p-3 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100",children:[e.label?a.jsx("span",{className:"text-sm font-semibold",children:e.label}):null,e.description?a.jsx("span",{className:"text-xs leading-5 text-white/80",children:e.description}):null]}):null]},e.id)})})}I.__docgenInfo={description:"",methods:[],displayName:"HoverGallery",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"HoverGalleryItem"}],raw:"HoverGalleryItem[]"},description:"",defaultValue:{value:`[
  { id: 'service', label: '서비스', description: '대표 서비스 화면', color: '#256ef4' },
  { id: 'data', label: '데이터', description: '지표와 데이터 시각화', color: '#008a1e' },
  { id: 'policy', label: '정책', description: '안내와 정책 콘텐츠', color: '#b75c00' },
  { id: 'support', label: '지원', description: '고객 지원 접점', color: '#d50136' },
]`,computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"280",computed:!1}},gap:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},expandRatio:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},rounded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onItemSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: HoverGalleryItem, index: number) => void",signature:{arguments:[{type:{name:"HoverGalleryItem"},name:"item"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const W=[{id:"dashboard",label:"대시보드",description:"운영 현황과 핵심 지표",color:"#256ef4",content:a.jsx($,{className:"size-10"})},{id:"analytics",label:"분석",description:"데이터 흐름과 추세",color:"#008a1e",content:a.jsx(P,{className:"size-10"})},{id:"document",label:"문서",description:"정책과 안내 콘텐츠",color:"#b75c00",content:a.jsx(A,{className:"size-10"})},{id:"support",label:"지원",description:"문의와 상담 관리",color:"#d50136",content:a.jsx(B,{className:"size-10"})}],J=[{id:"blue",label:"Blue Surface",src:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",alt:"밝은 사무실 공간"},{id:"green",label:"Green Space",src:"https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80",alt:"건축 패턴 이미지"},{id:"orange",label:"Warm Desk",src:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",alt:"노트북이 있는 업무 공간"}],ae={title:"Molecules/Display/HoverGallery",component:I,tags:["autodocs","display"],parameters:{layout:"centered",docs:{description:{component:"hover 또는 focus된 항목을 확장해 콘텐츠를 강조하는 인터랙티브 갤러리입니다."}}},argTypes:{height:{control:{type:"range",min:160,max:420,step:10},table:{category:"Layout"}},gap:{control:{type:"range",min:0,max:24,step:1},table:{category:"Layout"}},expandRatio:{control:{type:"range",min:1,max:6,step:.5},table:{category:"Behavior"}},orientation:{control:"inline-radio",options:["horizontal","vertical"],table:{category:"Layout"}},rounded:{control:"boolean",table:{category:"Appearance"}}},args:{items:W,height:280,gap:8,expandRatio:3,orientation:"horizontal",rounded:!0,className:"w-[680px]"}},o={name:"기본"},r={name:"세로 배치",args:{orientation:"vertical",height:420,className:"h-[420px]"}},s={name:"이미지 패널",args:{items:J,height:320,className:"w-[720px]"}},n={name:"좁은 간격",args:{gap:2,expandRatio:4}};var h,f,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '기본'
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var g,x,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '세로 배치',
  args: {
    orientation: 'vertical',
    height: 420,
    className: 'h-[420px]'
  }
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var v,w,N;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '이미지 패널',
  args: {
    items: photoItems,
    height: 320,
    className: 'w-[720px]'
  }
}`,...(N=(w=s.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var j,z,k;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '좁은 간격',
  args: {
    gap: 2,
    expandRatio: 4
  }
}`,...(k=(z=n.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};const te=["Default","Vertical","PhotoPanels","Compact"];export{n as Compact,o as Default,s as PhotoPanels,r as Vertical,te as __namedExportsOrder,ae as default};
