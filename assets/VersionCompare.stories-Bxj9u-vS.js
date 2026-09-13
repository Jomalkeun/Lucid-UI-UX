import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c}from"./utils-DCADjnpI.js";import{P as h}from"./plus-ClwFJ4cq.js";import{M as N}from"./minus-DhOLGSmI.js";import"./createLucideIcon-Ct87QT5c.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";const j=[{id:"title",text:"제목 · 여름 혜택",status:"same"},{id:"period",text:"기간 · ~06.20",status:"del"},{id:"channel",text:"채널 · 옵션1",status:"same"}],k=[{id:"title",text:"제목 · 여름 혜택",status:"same"},{id:"period",text:"기간 · ~06.30",status:"add"},{id:"channel",text:"채널 · 옵션1",status:"same"}],v={same:"border-krds-gray-20 bg-white text-krds-gray-70",add:"border-krds-success-border bg-krds-success-surface text-krds-success-text",del:"border-krds-danger-border bg-krds-danger-surface text-krds-danger-text",changed:"border-krds-warning-border bg-krds-warning-surface text-krds-warning-text"};function m({label:n,items:a,side:o}){return e.jsxs("section",{className:"min-w-0 rounded-md border border-krds-gray-30 bg-white",children:[e.jsx("header",{className:"border-b border-krds-gray-20 px-4 py-3",children:e.jsx("h4",{className:"text-sm font-semibold text-krds-gray-90",children:n})}),e.jsx("ul",{className:"space-y-2 p-3",children:a.map((s,i)=>{const t=s.status??"same",l=t==="add"?e.jsx(h,{"aria-hidden":"true",className:"size-4"}):t==="del"?e.jsx(N,{"aria-hidden":"true",className:"size-4"}):null;return e.jsxs("li",{className:c("flex items-start gap-2 rounded-md border px-3 py-2 text-sm",v[t]),children:[e.jsx("span",{className:"mt-0.5 flex size-4 shrink-0 items-center justify-center",children:l}),e.jsx("span",{className:c("min-w-0 flex-1",o==="before"&&t==="del"&&"line-through"),children:s.text})]},s.id??i)})})]})}function y({className:n,title:a="버전 비교",beforeLabel:o="v1.2 (이전)",afterLabel:s="v1.3 (현재)",before:i=j,after:t=k,...l}){return e.jsxs("section",{className:c("rounded-md border border-krds-gray-30 bg-krds-gray-5 p-4",n),...l,children:[a?e.jsx("h3",{className:"mb-3 text-base font-semibold text-krds-gray-90",children:a}):null,e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsx(m,{label:o,items:i,side:"before"}),e.jsx(m,{label:s,items:t,side:"after"})]})]})}y.__docgenInfo={description:"",methods:[],displayName:"VersionCompare",props:{beforeLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'v1.2 (이전)'",computed:!1}},afterLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'v1.3 (현재)'",computed:!1}},before:{required:!1,tsType:{name:"Array",elements:[{name:"VersionCompareItem"}],raw:"VersionCompareItem[]"},description:"",defaultValue:{value:`[
  { id: 'title', text: '제목 · 여름 혜택', status: 'same' },
  { id: 'period', text: '기간 · ~06.20', status: 'del' },
  { id: 'channel', text: '채널 · 옵션1', status: 'same' },
]`,computed:!1}},after:{required:!1,tsType:{name:"Array",elements:[{name:"VersionCompareItem"}],raw:"VersionCompareItem[]"},description:"",defaultValue:{value:`[
  { id: 'title', text: '제목 · 여름 혜택', status: 'same' },
  { id: 'period', text: '기간 · ~06.30', status: 'add' },
  { id: 'channel', text: '채널 · 옵션1', status: 'same' },
]`,computed:!1}},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'버전 비교'",computed:!1}}},composes:["Omit"]};const w=[{id:"title",text:"제목 · 여름 혜택",status:"same"},{id:"period",text:"기간 · ~06.20",status:"del"},{id:"channel",text:"채널 · 옵션1",status:"same"}],R=[{id:"title",text:"제목 · 여름 혜택",status:"same"},{id:"period",text:"기간 · ~06.30",status:"add"},{id:"channel",text:"채널 · 옵션1",status:"same"}],I={title:"Organisms/Operations/VersionCompare",component:y,tags:["autodocs","operations"],parameters:{layout:"centered",docs:{description:{component:"이전 버전과 현재 버전의 항목 변경 상태를 나란히 비교하는 운영 컴포넌트입니다."}}},argTypes:{title:{control:"text",table:{category:"Content"}},beforeLabel:{control:"text",table:{category:"Content"}},afterLabel:{control:"text",table:{category:"Content"}},before:{control:"object",table:{category:"Data"}},after:{control:"object",table:{category:"Data"}}},args:{title:"콘텐츠 변경 비교",beforeLabel:"v1.2 (이전)",afterLabel:"v1.3 (현재)",before:w,after:R,className:"w-[760px]"}},r={name:"기본"},d={name:"추가 항목",args:{beforeLabel:"v1.0",afterLabel:"v1.1",before:[{id:"title",text:"제목 · 여름 이벤트",status:"same"}],after:[{id:"title",text:"제목 · 여름 이벤트",status:"same"},{id:"desc",text:"설명 · 추가 문구",status:"add"}]}};var u,p,x;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '기본'
}`,...(x=(p=r.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var f,b,g;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '추가 항목',
  args: {
    beforeLabel: 'v1.0',
    afterLabel: 'v1.1',
    before: [{
      id: 'title',
      text: '제목 · 여름 이벤트',
      status: 'same'
    }],
    after: [{
      id: 'title',
      text: '제목 · 여름 이벤트',
      status: 'same'
    }, {
      id: 'desc',
      text: '설명 · 추가 문구',
      status: 'add'
    }]
  }
}`,...(g=(b=d.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const D=["Default","OnlyAdditions"];export{r as Default,d as OnlyAdditions,D as __namedExportsOrder,I as default};
