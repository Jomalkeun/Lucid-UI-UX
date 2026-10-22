import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{c as a}from"./utils-DCADjnpI.js";import{C as p}from"./chevron-right-DtG4w6Mo.js";const x={default:"bg-krds-gray-10 text-krds-gray-70",primary:"bg-krds-primary-10 text-krds-primary-70",success:"bg-krds-success-surface text-krds-success-text",warning:"bg-krds-warning-surface text-krds-warning-text",danger:"bg-krds-danger-surface text-krds-danger-text",gray:"bg-krds-gray-10 text-krds-gray-60"},g=[{id:"summer-data",title:"여름 데이터 선물",description:"옵션1 홈 배너와 알림톡에 노출되는 캠페인입니다.",meta:"옵션1 · 06.10~06.30 · 클릭 3.4%",status:"success",statusLabel:"노출중"},{id:"coupon",title:"리필 쿠폰 배너",description:"옵션2 쿠폰 영역 예약 콘텐츠입니다.",meta:"옵션2 · 예약 · 06.18 시작",status:"primary",statusLabel:"예약"},{id:"subscription",title:"구독 프로모션",description:"종료된 옵션3 프로모션 아카이브 항목입니다.",meta:"옵션3 · 종료 · 06.30 만료",status:"gray",statusLabel:"종료"}];function b({className:n,items:d=g,emptyText:u="표시할 항목이 없습니다.",selectable:c=!1,selectedId:o,onItemClick:t,...i}){return d.length===0?s.jsx("div",{role:"status",className:a("rounded-md border border-dashed border-krds-gray-30 bg-krds-gray-5 px-6 py-10 text-center text-sm text-krds-gray-60",n),...i,children:u}):s.jsx("div",{className:a("overflow-hidden rounded-md border border-krds-gray-30 bg-white",n),...i,children:s.jsx("ul",{className:"divide-y divide-krds-gray-20",children:d.map((e,m)=>{const l=o===e.id,r=!!t&&!e.disabled;return s.jsx("li",{children:s.jsxs("button",{type:"button",disabled:e.disabled,"aria-current":l?"true":void 0,onClick:()=>t==null?void 0:t(e,m),className:a("flex w-full items-center gap-3 px-4 py-3 text-left transition",r&&"hover:bg-krds-gray-5",l&&"bg-krds-primary-5",e.disabled&&"cursor-not-allowed opacity-50",!r&&!c&&"cursor-default"),children:[e.leading?s.jsx("span",{className:"shrink-0",children:e.leading}):null,s.jsxs("span",{className:"min-w-0 flex-1",children:[s.jsxs("span",{className:"flex min-w-0 items-center gap-2",children:[s.jsx("span",{className:"truncate text-sm font-semibold text-krds-gray-90",children:e.title}),e.statusLabel?s.jsx("span",{className:a("shrink-0 rounded-full px-2 py-0.5 text-xs font-medium",x[e.status??"default"]),children:e.statusLabel}):null]}),e.description?s.jsx("span",{className:"mt-1 block line-clamp-2 text-sm leading-6 text-krds-gray-60",children:e.description}):null,e.meta?s.jsx("span",{className:"mt-1 block truncate text-xs text-krds-gray-50",children:e.meta}):null]}),e.trailing??(r?s.jsx(p,{"aria-hidden":"true",className:"size-4 shrink-0 text-krds-gray-40"}):null)]})},e.id)})})})}b.__docgenInfo={description:"",methods:[],displayName:"ListView",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"ListViewItem"}],raw:"ListViewItem[]"},description:"",defaultValue:{value:`[
  {
    id: 'summer-data',
    title: '여름 데이터 선물',
    description: '옵션1 홈 배너와 알림톡에 노출되는 캠페인입니다.',
    meta: '옵션1 · 06.10~06.30 · 클릭 3.4%',
    status: 'success',
    statusLabel: '노출중',
  },
  {
    id: 'coupon',
    title: '리필 쿠폰 배너',
    description: '옵션2 쿠폰 영역 예약 콘텐츠입니다.',
    meta: '옵션2 · 예약 · 06.18 시작',
    status: 'primary',
    statusLabel: '예약',
  },
  {
    id: 'subscription',
    title: '구독 프로모션',
    description: '종료된 옵션3 프로모션 아카이브 항목입니다.',
    meta: '옵션3 · 종료 · 06.30 만료',
    status: 'gray',
    statusLabel: '종료',
  },
]`,computed:!1}},emptyText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'표시할 항목이 없습니다.'",computed:!1}},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectedId:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: ListViewItem, index: number) => void",signature:{arguments:[{type:{name:"ListViewItem"},name:"item"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};export{b as L};
