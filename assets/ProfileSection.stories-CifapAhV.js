import{d as w}from"./reference-types-4ftiVeOu.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as n}from"./utils-DCADjnpI.js";import{M as T}from"./mail-zMGtPqvW.js";import{M as q}from"./message-square-CoaeJFzM.js";import{S as O}from"./settings-BszKLhAt.js";import"./createLucideIcon-Ct87QT5c.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";const z=[{label:"콘텐츠",value:142},{label:"채널",value:8},{label:"팀",value:24}],A=[{label:"메일",icon:e.jsx(T,{"aria-hidden":"true",className:"size-4"})},{label:"메시지",icon:e.jsx(q,{"aria-hidden":"true",className:"size-4"})},{label:"설정",icon:e.jsx(O,{"aria-hidden":"true",className:"size-4"})}];function N({className:v,initials:h="김",name:j="김다룸",role:k="콘텐츠 에디터",department:i="디지털 채널팀",isOnline:t=!0,stats:R=z,skills:o=["콘텐츠 기획","UX Writing","SEO"],actions:d=A,...S}){return e.jsx("section",{className:n("rounded-md border border-krds-gray-30 bg-white p-5",v),...S,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsxs("div",{className:"relative shrink-0",children:[e.jsx("div",{className:"flex size-16 items-center justify-center rounded-full bg-krds-primary-10 text-xl font-bold text-krds-primary-70",children:h}),e.jsx("span",{"aria-label":t?"온라인":"오프라인",className:n("absolute bottom-0 right-0 size-4 rounded-full border-2 border-white",t?"bg-krds-success-text":"bg-krds-gray-40")})]}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-3",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("h3",{className:"truncate text-lg font-semibold text-krds-gray-90",children:j}),e.jsxs("p",{className:"mt-1 text-sm text-krds-gray-60",children:[k,i?e.jsx("span",{className:"mx-1 text-krds-gray-40",children:"/"}):null,i]})]}),e.jsx("span",{className:n("rounded-full px-2 py-0.5 text-xs font-medium",t?"bg-krds-success-surface text-krds-success-text":"bg-krds-gray-10 text-krds-gray-60"),children:t?"온라인":"오프라인"})]}),e.jsx("dl",{className:"mt-4 grid grid-cols-3 divide-x divide-krds-gray-20 rounded-md border border-krds-gray-20",children:R.map(a=>e.jsxs("div",{className:"px-3 py-2 text-center",children:[e.jsx("dt",{className:"text-xs text-krds-gray-50",children:a.label}),e.jsx("dd",{className:"mt-1 text-base font-semibold text-krds-gray-90",children:a.value})]},String(a.label)))}),o.length>0?e.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:o.map(a=>e.jsx("span",{className:"rounded-full bg-krds-gray-10 px-2.5 py-1 text-xs font-medium text-krds-gray-70",children:a},String(a)))}):null,d.length>0?e.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:d.map(a=>e.jsxs("button",{type:"button",onClick:a.onClick,className:"inline-flex h-9 items-center gap-1.5 rounded-md border border-krds-gray-30 px-3 text-sm font-medium text-krds-gray-70 transition hover:bg-krds-gray-5",children:[a.icon,a.label]},String(a.label)))}):null]})]})})}N.__docgenInfo={description:"",methods:[],displayName:"ProfileSection",props:{initials:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'김'",computed:!1}},name:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'김다룸'",computed:!1}},role:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'콘텐츠 에디터'",computed:!1}},department:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'디지털 채널팀'",computed:!1}},isOnline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},stats:{required:!1,tsType:{name:"Array",elements:[{name:"ProfileStat"}],raw:"ProfileStat[]"},description:"",defaultValue:{value:`[
  { label: '콘텐츠', value: 142 },
  { label: '채널', value: 8 },
  { label: '팀', value: 24 },
]`,computed:!1}},skills:{required:!1,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},description:"",defaultValue:{value:"['콘텐츠 기획', 'UX Writing', 'SEO']",computed:!1}},actions:{required:!1,tsType:{name:"Array",elements:[{name:"ProfileAction"}],raw:"ProfileAction[]"},description:"",defaultValue:{value:`[
  { label: '메일', icon: <Mail aria-hidden="true" className="size-4" /> },
  { label: '메시지', icon: <MessageSquare aria-hidden="true" className="size-4" /> },
  { label: '설정', icon: <Settings aria-hidden="true" className="size-4" /> },
]`,computed:!1}}},composes:["Omit"]};const M=[{label:"콘텐츠",value:142},{label:"채널",value:8},{label:"팀",value:24}],V=w([{library:"Mantine UI",component:"User info and controls",url:"https://ui.mantine.dev/category/users/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."}]),F={title:"Organisms/Data/ProfileSection",component:N,tags:["autodocs","data","ref:mantine-ui"],parameters:{references:V,layout:"centered",docs:{description:{component:"아바타, 소속, 활동 통계, 태그, 액션을 묶어 보여주는 사용자 프로필 섹션입니다."}}},argTypes:{initials:{control:"text",table:{category:"Content"}},name:{control:"text",table:{category:"Content"}},role:{control:"text",table:{category:"Content"}},department:{control:"text",table:{category:"Content"}},isOnline:{control:"boolean",table:{category:"State"}},stats:{control:"object",table:{category:"Data"}},skills:{control:"object",table:{category:"Data"}}},args:{initials:"김",name:"김다룸",role:"콘텐츠 에디터",department:"디지털 채널팀",isOnline:!0,stats:M,skills:["콘텐츠 기획","UX Writing","SEO"],className:"w-[520px]"}},s={name:"기본"},r={name:"오프라인",args:{isOnline:!1}},l={name:"관리자 역할",args:{initials:"관",name:"관리자",role:"시스템 관리자",department:"IT 인프라팀",stats:[{label:"콘텐츠",value:0},{label:"채널",value:32},{label:"팀원",value:156}],skills:["시스템 관리","보안","인프라"]}};var c,m,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '기본'
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,f,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '오프라인',
  args: {
    isOnline: false
  }
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var g,b,y;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '관리자 역할',
  args: {
    initials: '관',
    name: '관리자',
    role: '시스템 관리자',
    department: 'IT 인프라팀',
    stats: [{
      label: '콘텐츠',
      value: 0
    }, {
      label: '채널',
      value: 32
    }, {
      label: '팀원',
      value: 156
    }],
    skills: ['시스템 관리', '보안', '인프라']
  }
}`,...(y=(b=l.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const B=["Default","Offline","AdminRole"];export{l as AdminRole,s as Default,r as Offline,B as __namedExportsOrder,F as default};
