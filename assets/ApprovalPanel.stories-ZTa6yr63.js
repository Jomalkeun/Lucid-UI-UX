import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as o}from"./utils-DCADjnpI.js";import{C as L}from"./clock-3-KKgYpl7S.js";import{X as w}from"./x-DsL683-u.js";import{C as A}from"./check-CvnDgXMx.js";import"./createLucideIcon-Ct87QT5c.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";const C=[{id:1,status:"approved",statusLabel:"승인됨",actor:"임태은",description:"배너 등록 요청",timestamp:"06.08 14:20",datetime:"2026-06-08T14:20"},{id:2,status:"rejected",statusLabel:"반려됨",actor:"시스템",description:"문구 기준 미준수",timestamp:"06.08 11:02",datetime:"2026-06-08T11:02"},{id:3,status:"pending",statusLabel:"승인 대기",actor:"임태은",description:"노출 정책 변경",timestamp:"방금",datetime:"2026-06-10T09:00"}],I={approved:{label:"승인됨",className:"bg-krds-success-surface text-krds-success-text",icon:e.jsx(A,{"aria-hidden":"true",className:"size-4"})},rejected:{label:"반려됨",className:"bg-krds-danger-surface text-krds-danger-text",icon:e.jsx(w,{"aria-hidden":"true",className:"size-4"})},pending:{label:"승인 대기",className:"bg-krds-warning-surface text-krds-warning-text",icon:e.jsx(L,{"aria-hidden":"true",className:"size-4"})}};function j({className:N,title:h="승인 이력",items:m=C,onApprove:i,onReject:d,...k}){const c=m.filter(t=>t.status==="pending").length;return e.jsxs("section",{className:o("rounded-md border border-krds-gray-30 bg-white p-4",N),...k,children:[e.jsxs("header",{className:"mb-4 flex items-center justify-between gap-3",children:[e.jsx("h3",{className:"text-base font-semibold text-krds-gray-90",children:h}),c>0?e.jsxs("span",{className:"rounded-full bg-krds-warning-surface px-2.5 py-1 text-xs font-semibold text-krds-warning-text",children:["대기 ",c]}):null]}),e.jsx("ul",{className:"space-y-3",children:m.map((t,T)=>{const s=I[t.status];return e.jsxs("li",{className:"rounded-md border border-krds-gray-20 p-3",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:o("mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full",s.className),children:s.icon}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"text-sm font-semibold text-krds-gray-90",children:t.actor}),e.jsx("span",{className:o("rounded-full px-2 py-0.5 text-xs font-medium",s.className),children:t.statusLabel??s.label})]}),e.jsx("p",{className:"mt-1 text-sm leading-6 text-krds-gray-70",children:t.description}),t.timestamp?e.jsx("time",{dateTime:t.datetime,className:"mt-1 block text-xs text-krds-gray-50",children:t.timestamp}):null]})]}),t.status==="pending"?e.jsxs("div",{className:"mt-3 flex justify-end gap-2",children:[e.jsx("button",{type:"button",onClick:()=>d==null?void 0:d(t),className:"rounded-md border border-krds-gray-30 px-3 py-1.5 text-sm font-semibold text-krds-gray-70",children:"반려"}),e.jsx("button",{type:"button",onClick:()=>i==null?void 0:i(t),className:"rounded-md bg-krds-primary-60 px-3 py-1.5 text-sm font-semibold text-white",children:"승인"})]}):null]},t.id??T)})})]})}j.__docgenInfo={description:"",methods:[],displayName:"ApprovalPanel",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'승인 이력'",computed:!1}},items:{required:!1,tsType:{name:"Array",elements:[{name:"ApprovalItem"}],raw:"ApprovalItem[]"},description:"",defaultValue:{value:`[
  { id: 1, status: 'approved', statusLabel: '승인됨', actor: '임태은', description: '배너 등록 요청', timestamp: '06.08 14:20', datetime: '2026-06-08T14:20' },
  { id: 2, status: 'rejected', statusLabel: '반려됨', actor: '시스템', description: '문구 기준 미준수', timestamp: '06.08 11:02', datetime: '2026-06-08T11:02' },
  { id: 3, status: 'pending', statusLabel: '승인 대기', actor: '임태은', description: '노출 정책 변경', timestamp: '방금', datetime: '2026-06-10T09:00' },
]`,computed:!1}},onApprove:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: ApprovalItem) => void",signature:{arguments:[{type:{name:"ApprovalItem"},name:"item"}],return:{name:"void"}}},description:""},onReject:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: ApprovalItem) => void",signature:{arguments:[{type:{name:"ApprovalItem"},name:"item"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const P=[{id:1,status:"approved",statusLabel:"승인됨",actor:"임태은",description:"배너 등록 요청",timestamp:"06.08 14:20",datetime:"2026-06-08T14:20"},{id:2,status:"rejected",statusLabel:"반려됨",actor:"시스템",description:"문구 기준 미준수",timestamp:"06.08 11:02",datetime:"2026-06-08T11:02"},{id:3,status:"pending",statusLabel:"승인 대기",actor:"임태은",description:"노출 정책 변경",timestamp:"방금",datetime:"2026-06-10T09:00"}],V={title:"Organisms/Operations/ApprovalPanel",component:j,tags:["autodocs","operations"],parameters:{layout:"centered",docs:{description:{component:"콘텐츠 운영 승인 이력과 대기 항목의 승인/반려 액션을 제공하는 패널입니다."}}},argTypes:{title:{control:"text",table:{category:"Content"}},items:{control:"object",table:{category:"Data"}},onApprove:{action:"approved",table:{category:"Events"}},onReject:{action:"rejected",table:{category:"Events"}}},args:{title:"승인 이력",items:P,className:"w-[560px]"}},a={name:"기본"},r={name:"모두 승인",args:{items:[{id:1,status:"approved",statusLabel:"승인됨",actor:"김관리",description:"메인 배너 등록",timestamp:"06.09 10:00",datetime:"2026-06-09T10:00"},{id:2,status:"approved",statusLabel:"승인됨",actor:"이담당",description:"이벤트 노출 시작",timestamp:"06.08 15:30",datetime:"2026-06-08T15:30"}]}},n={name:"대기 항목",args:{items:[{id:1,status:"pending",statusLabel:"승인 대기",actor:"박운영",description:"신규 배너 등록",timestamp:"방금",datetime:"2026-06-10T09:00"}]}};var p,l,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '기본'
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var x,g,b;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '모두 승인',
  args: {
    items: [{
      id: 1,
      status: 'approved',
      statusLabel: '승인됨',
      actor: '김관리',
      description: '메인 배너 등록',
      timestamp: '06.09 10:00',
      datetime: '2026-06-09T10:00'
    }, {
      id: 2,
      status: 'approved',
      statusLabel: '승인됨',
      actor: '이담당',
      description: '이벤트 노출 시작',
      timestamp: '06.08 15:30',
      datetime: '2026-06-08T15:30'
    }]
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,y,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '대기 항목',
  args: {
    items: [{
      id: 1,
      status: 'pending',
      statusLabel: '승인 대기',
      actor: '박운영',
      description: '신규 배너 등록',
      timestamp: '방금',
      datetime: '2026-06-10T09:00'
    }]
  }
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const M=["Default","AllApproved","Pending"];export{r as AllApproved,a as Default,n as Pending,M as __namedExportsOrder,V as default};
