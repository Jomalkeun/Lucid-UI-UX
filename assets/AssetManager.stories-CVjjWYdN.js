import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as l}from"./utils-DCADjnpI.js";import{P as A}from"./plus-ClwFJ4cq.js";import{I as m}from"./image-ClQtcmjb.js";import{T as M}from"./trash-2-xZQMnfdL.js";import"./createLucideIcon-Ct87QT5c.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";const T=[{id:"a1",alt:"배너 이미지 1",size:"1280x720",status:"ready"},{id:"a2",alt:"배너 이미지 2",size:"1080x1080",status:"processing"},{id:"a3",alt:"배너 이미지 3",size:"720x480",status:"ready"}],E={ready:"bg-krds-success-surface text-krds-success-text",processing:"bg-krds-warning-surface text-krds-warning-text",error:"bg-krds-danger-surface text-krds-danger-text"},q={ready:"준비됨",processing:"처리 중",error:"오류"};function N({className:k,title:z="에셋 관리",assets:a=T,maxAssets:i=8,onAddAsset:v,onRemoveAsset:d,...w}){const o=a.length>=i;return e.jsxs("section",{className:l("rounded-md border border-krds-gray-30 bg-white p-4",k),...w,children:[e.jsxs("header",{className:"mb-4 flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-semibold text-krds-gray-90",children:z}),e.jsxs("p",{className:"mt-1 text-sm text-krds-gray-60",children:[a.length,"/",i,"개 사용 중"]})]}),e.jsxs("button",{type:"button",onClick:v,disabled:o,className:"inline-flex h-9 items-center gap-1 rounded-md bg-krds-primary-60 px-3 text-sm font-semibold text-white disabled:opacity-50",children:[e.jsx(A,{"aria-hidden":"true",className:"size-4"}),"추가"]})]}),a.length>0?e.jsx("ul",{className:"grid gap-3 sm:grid-cols-2",children:a.map(s=>{const c=s.status??"ready";return e.jsxs("li",{className:"overflow-hidden rounded-md border border-krds-gray-20 bg-white",children:[e.jsx("div",{className:"flex aspect-video items-center justify-center bg-krds-gray-5",children:s.src?e.jsx("img",{src:s.src,alt:s.alt,className:"size-full object-cover"}):e.jsx(m,{"aria-hidden":"true",className:"size-8 text-krds-gray-40"})}),e.jsxs("div",{className:"p-3",children:[e.jsxs("div",{className:"flex items-start justify-between gap-2",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"truncate text-sm font-semibold text-krds-gray-90",children:s.alt}),s.size?e.jsx("p",{className:"mt-1 text-xs text-krds-gray-50",children:s.size}):null]}),e.jsx("span",{className:l("shrink-0 rounded-full px-2 py-0.5 text-xs font-medium",E[c]),children:q[c]})]}),e.jsxs("button",{type:"button",onClick:()=>d==null?void 0:d(s),className:"mt-3 inline-flex h-8 items-center gap-1 rounded-md border border-krds-gray-30 px-2 text-xs font-semibold text-krds-gray-70",children:[e.jsx(M,{"aria-hidden":"true",className:"size-3.5"}),"삭제"]})]})]},s.id)})}):e.jsxs("div",{className:"grid place-items-center rounded-md border border-dashed border-krds-gray-30 px-4 py-10 text-center",children:[e.jsx(m,{"aria-hidden":"true",className:"mb-2 size-8 text-krds-gray-30"}),e.jsx("p",{className:"text-sm text-krds-gray-60",children:"등록된 에셋이 없습니다."})]}),o?e.jsx("p",{className:"mt-3 text-sm text-krds-warning-text",children:"최대 등록 가능 개수에 도달했습니다."}):null]})}N.__docgenInfo={description:"",methods:[],displayName:"AssetManager",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'에셋 관리'",computed:!1}},assets:{required:!1,tsType:{name:"Array",elements:[{name:"ManagedAsset"}],raw:"ManagedAsset[]"},description:"",defaultValue:{value:`[
  { id: 'a1', alt: '배너 이미지 1', size: '1280x720', status: 'ready' },
  { id: 'a2', alt: '배너 이미지 2', size: '1080x1080', status: 'processing' },
  { id: 'a3', alt: '배너 이미지 3', size: '720x480', status: 'ready' },
]`,computed:!1}},maxAssets:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},onAddAsset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onRemoveAsset:{required:!1,tsType:{name:"signature",type:"function",raw:"(asset: ManagedAsset) => void",signature:{arguments:[{type:{name:"ManagedAsset"},name:"asset"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const R=[{id:"a1",alt:"배너 이미지 1",size:"1280x720",status:"ready"},{id:"a2",alt:"배너 이미지 2",size:"1080x1080",status:"processing"},{id:"a3",alt:"배너 이미지 3",size:"720x480",status:"ready"}],L={title:"Organisms/Operations/AssetManager",component:N,tags:["autodocs","operations"],parameters:{layout:"centered",docs:{description:{component:"콘텐츠 운영에 필요한 이미지와 미디어 에셋을 등록, 상태 확인, 삭제하는 관리 그리드입니다."}}},argTypes:{title:{control:"text",table:{category:"Content"}},maxAssets:{control:"number",table:{category:"State"}},assets:{control:"object",table:{category:"Data"}},onAddAsset:{action:"add asset",table:{category:"Events"}},onRemoveAsset:{action:"remove asset",table:{category:"Events"}}},args:{title:"에셋 관리",maxAssets:8,assets:R,className:"w-[620px]"}},t={name:"기본"},r={name:"최대 도달",args:{maxAssets:4,assets:[{id:"a1",alt:"이미지 1",size:"1280x720",status:"ready"},{id:"a2",alt:"이미지 2",size:"1280x720",status:"ready"},{id:"a3",alt:"이미지 3",size:"1280x720",status:"processing"},{id:"a4",alt:"이미지 4",size:"1280x720",status:"error"}]}},n={name:"빈 상태",args:{assets:[]}};var u,x,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '기본'
}`,...(p=(x=t.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};var g,y,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '최대 도달',
  args: {
    maxAssets: 4,
    assets: [{
      id: 'a1',
      alt: '이미지 1',
      size: '1280x720',
      status: 'ready'
    }, {
      id: 'a2',
      alt: '이미지 2',
      size: '1280x720',
      status: 'ready'
    }, {
      id: 'a3',
      alt: '이미지 3',
      size: '1280x720',
      status: 'processing'
    }, {
      id: 'a4',
      alt: '이미지 4',
      size: '1280x720',
      status: 'error'
    }]
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,h,j;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '빈 상태',
  args: {
    assets: []
  }
}`,...(j=(h=n.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const B=["Default","MaxReached","Empty"];export{t as Default,n as Empty,r as MaxReached,B as __namedExportsOrder,L as default};
