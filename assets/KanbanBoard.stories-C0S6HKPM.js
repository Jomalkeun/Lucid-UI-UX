import{d as z}from"./reference-types-4ftiVeOu.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-BxXVWNx3.js";import{c as h}from"./utils-DCADjnpI.js";import{A as G,a as H}from"./arrow-right-BiwQ1n5l.js";import{C as Q}from"./calendar-days-D0Zu5R9a.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-Ct87QT5c.js";const T={gray:"border-krds-gray-30 bg-krds-gray-5 text-krds-gray-70",primary:"border-krds-primary-30 bg-krds-primary-5 text-krds-primary-70",warning:"border-krds-warning-border bg-krds-warning-surface text-krds-warning-text",success:"border-krds-success-border bg-krds-success-surface text-krds-success-text",danger:"border-krds-danger-border bg-krds-danger-surface text-krds-danger-text"},W=[{id:"todo",title:"할 일",tone:"gray",cards:[{id:1,title:"GNB 컴포넌트 개발",tag:"개발",description:"KRDS 가이드라인 기반으로 구현",assignees:["MJ"],due:"07/15"},{id:2,title:"메인 페이지 디자인 시안",tag:"디자인",assignees:["SY","JH"],due:"07/18"}]},{id:"progress",title:"진행 중",tone:"primary",cards:[{id:3,title:"로그인 폼 QA",tag:"QA",description:"크로스브라우저 테스트 포함",assignees:["HW"],due:"07/10"}]},{id:"review",title:"검토 중",tone:"warning",cards:[{id:4,title:"접근성 감사",tag:"A11y",description:"WCAG 2.1 AA 기준 검토",assignees:["AR","MJ"],due:"07/08"}]},{id:"done",title:"완료",tone:"success",cards:[{id:5,title:"Storybook 초기 설정",tag:"인프라",assignees:["MJ"],due:"07/01"},{id:6,title:"Button 컴포넌트",tag:"개발",assignees:["SY"],due:"07/03"}]}];function J({className:D,columns:m=W,title:g,description:u,movable:K=!0,onColumnsChange:p,...M}){const[d,x]=f.useState(m);f.useEffect(()=>{x(m)},[m]);const y=(t,a,b)=>{const s=t+b;if(s<0||s>=d.length)return;const n=d.map((r,i)=>i===t?{...r,cards:r.cards.filter(E=>E.id!==a.id)}:i===s?{...r,cards:[...r.cards,a]}:r);x(n),p==null||p(n)};return e.jsxs("section",{className:h("w-full",D),...M,children:[g||u?e.jsxs("header",{className:"mb-4",children:[g?e.jsx("h3",{className:"text-base font-semibold text-krds-gray-90",children:g}):null,u?e.jsx("p",{className:"mt-1 text-sm text-krds-gray-60",children:u}):null]}):null,e.jsx("div",{className:"grid gap-4 overflow-x-auto pb-2 md:grid-flow-col md:auto-cols-[minmax(16rem,1fr)]",children:d.map((t,a)=>{const b=t.tone??"gray";return e.jsxs("section",{"aria-label":`${t.title} 컬럼`,className:"min-w-64 rounded-md border border-krds-gray-30 bg-white",children:[e.jsxs("header",{className:h("flex items-center justify-between border-b px-4 py-3",T[b]),children:[e.jsx("h4",{className:"text-sm font-semibold",children:t.title}),e.jsx("span",{className:"rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-krds-gray-60 ring-1 ring-krds-gray-30",children:t.cards.length})]}),e.jsx("ul",{className:"space-y-3 p-3",children:t.cards.length>0?t.cards.map(s=>{var n,r;return e.jsxs("li",{className:"rounded-md border border-krds-gray-20 bg-white p-3 shadow-sm",children:[e.jsxs("div",{className:"flex items-start justify-between gap-2",children:[e.jsxs("div",{className:"min-w-0",children:[s.tag?e.jsx("span",{className:"mb-2 inline-flex rounded-full bg-krds-gray-10 px-2 py-0.5 text-xs font-medium text-krds-gray-70",children:s.tag}):null,e.jsx("h5",{className:"text-sm font-semibold leading-6 text-krds-gray-90",children:s.title})]}),K?e.jsxs("div",{className:"flex shrink-0 gap-1",children:[e.jsx("button",{type:"button","aria-label":"이전 컬럼으로 이동",disabled:a===0,onClick:()=>y(a,s,-1),className:"inline-flex size-7 items-center justify-center rounded border border-krds-gray-30 text-krds-gray-60 disabled:opacity-40",children:e.jsx(G,{"aria-hidden":"true",className:"size-3.5"})}),e.jsx("button",{type:"button","aria-label":"다음 컬럼으로 이동",disabled:a===d.length-1,onClick:()=>y(a,s,1),className:"inline-flex size-7 items-center justify-center rounded border border-krds-gray-30 text-krds-gray-60 disabled:opacity-40",children:e.jsx(H,{"aria-hidden":"true",className:"size-3.5"})})]}):null]}),s.description?e.jsx("p",{className:"mt-2 text-sm leading-6 text-krds-gray-60",children:s.description}):null,s.due||(n=s.assignees)!=null&&n.length?e.jsxs("div",{className:"mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-krds-gray-50",children:[s.due?e.jsxs("span",{className:"inline-flex items-center gap-1",children:[e.jsx(Q,{"aria-hidden":"true",className:"size-3.5"}),s.due]}):null,(r=s.assignees)!=null&&r.length?e.jsx("span",{className:"flex -space-x-1",children:s.assignees.map(i=>e.jsx("span",{className:"inline-flex size-6 items-center justify-center rounded-full bg-krds-primary-10 text-[10px] font-semibold text-krds-primary-70 ring-1 ring-white",children:i.slice(0,2)},i))}):null]}):null]},s.id)}):e.jsx("li",{className:"rounded-md border border-dashed border-krds-gray-30 px-3 py-8 text-center text-sm text-krds-gray-50",children:"카드가 없습니다."})})]},t.id)})})]})}J.__docgenInfo={description:"",methods:[],displayName:"KanbanBoard",props:{columns:{required:!1,tsType:{name:"Array",elements:[{name:"KanbanColumn"}],raw:"KanbanColumn[]"},description:"",defaultValue:{value:`[
  {
    id: 'todo',
    title: '할 일',
    tone: 'gray',
    cards: [
      { id: 1, title: 'GNB 컴포넌트 개발', tag: '개발', description: 'KRDS 가이드라인 기반으로 구현', assignees: ['MJ'], due: '07/15' },
      { id: 2, title: '메인 페이지 디자인 시안', tag: '디자인', assignees: ['SY', 'JH'], due: '07/18' },
    ],
  },
  {
    id: 'progress',
    title: '진행 중',
    tone: 'primary',
    cards: [{ id: 3, title: '로그인 폼 QA', tag: 'QA', description: '크로스브라우저 테스트 포함', assignees: ['HW'], due: '07/10' }],
  },
  {
    id: 'review',
    title: '검토 중',
    tone: 'warning',
    cards: [{ id: 4, title: '접근성 감사', tag: 'A11y', description: 'WCAG 2.1 AA 기준 검토', assignees: ['AR', 'MJ'], due: '07/08' }],
  },
  {
    id: 'done',
    title: '완료',
    tone: 'success',
    cards: [
      { id: 5, title: 'Storybook 초기 설정', tag: '인프라', assignees: ['MJ'], due: '07/01' },
      { id: 6, title: 'Button 컴포넌트', tag: '개발', assignees: ['SY'], due: '07/03' },
    ],
  },
]`,computed:!1}},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},movable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onColumnsChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(columns: KanbanColumn[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"KanbanColumn"}],raw:"KanbanColumn[]"},name:"columns"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const B=[{id:"todo",title:"할 일",tone:"gray",cards:[{id:1,title:"GNB 컴포넌트 개발",tag:"개발",description:"KRDS 가이드라인 기반으로 구현",assignees:["MJ"],due:"07/15"},{id:2,title:"메인 페이지 디자인 시안",tag:"디자인",assignees:["SY","JH"],due:"07/18"}]},{id:"progress",title:"진행 중",tone:"primary",cards:[{id:3,title:"로그인 폼 QA",tag:"QA",description:"크로스브라우저 테스트 포함",assignees:["HW"],due:"07/10"}]},{id:"review",title:"검토 중",tone:"warning",cards:[{id:4,title:"접근성 감사",tag:"A11y",description:"WCAG 2.1 AA 기준 검토",assignees:["AR","MJ"],due:"07/08"}]},{id:"done",title:"완료",tone:"success",cards:[{id:5,title:"Storybook 초기 설정",tag:"인프라",assignees:["MJ"],due:"07/01"},{id:6,title:"Button 컴포넌트",tag:"개발",assignees:["SY"],due:"07/03"}]}],Y=z([{library:"Cloudscape Design System",component:"Board",url:"https://cloudscape.design/components/board/",usedFor:["behavior","accessibility","comparison"],relation:"compared"},{library:"Mantine UI",component:"Drag'n'Drop",url:"https://ui.mantine.dev/category/dnd/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."}]),$={title:"Organisms/Data/KanbanBoard",component:J,tags:["autodocs","data","ref:mantine-ui","ref:cloudscape"],parameters:{references:Y,layout:"fullscreen",docs:{description:{component:"카드를 열 기반으로 관리하고 상태 흐름을 추적하는 칸반 보드 오거나이즘입니다."}}},argTypes:{title:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},columns:{control:"object",table:{category:"Data"}},movable:{control:"boolean",table:{category:"Interaction"}},onColumnsChange:{action:"columns changed",table:{category:"Events"}}},args:{title:"콘텐츠 제작 보드",description:"작업 상태를 카드 단위로 추적합니다.",columns:B,movable:!0,className:"p-6"}},o={name:"기본"},l={name:"읽기 전용",args:{movable:!1}},c={name:"빈 컬럼 포함",args:{columns:[...B,{id:"blocked",title:"보류",tone:"danger",cards:[]}]}};var k,j,N;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '기본'
}`,...(N=(j=o.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var w,A,v;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '읽기 전용',
  args: {
    movable: false
  }
}`,...(v=(A=l.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var C,R,S;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '빈 컬럼 포함',
  args: {
    columns: [...columns, {
      id: 'blocked',
      title: '보류',
      tone: 'danger',
      cards: []
    }]
  }
}`,...(S=(R=c.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};const P=["Default","ReadOnly","EmptyColumn"];export{o as Default,c as EmptyColumn,l as ReadOnly,P as __namedExportsOrder,$ as default};
