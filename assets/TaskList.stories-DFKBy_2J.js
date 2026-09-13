import{d as V}from"./reference-types-4ftiVeOu.js";import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{c as p}from"./utils-DCADjnpI.js";const C={"not-started":"시작 전","in-progress":"진행 중",completed:"완료",blocked:"수행 불가"},D={"not-started":"bg-krds-gray-10 text-krds-gray-70","in-progress":"bg-krds-info-surface text-krds-info-text",completed:"bg-krds-success-surface text-krds-success-text",blocked:"bg-krds-danger-surface text-krds-danger-text"};function g({items:a,getItemHref:u,onItemSelect:r}){return s.jsx("ol",{className:"divide-y divide-krds-gray-20 border-y border-krds-gray-30",children:a.map(e=>{const n=`${e.id}-description`,o=`${e.id}-disabled-reason`,t=!!e.disabledReason||e.status==="blocked",b=[e.description?n:null,e.disabledReason?o:null].filter(Boolean).join(" ");return s.jsxs("li",{"data-status":e.status,className:"grid gap-3 py-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-5",children:[s.jsxs("div",{className:"min-w-0",children:[t?s.jsx("span",{"aria-disabled":"true","aria-describedby":b||void 0,className:"font-semibold text-krds-gray-60",children:e.title}):s.jsx("a",{href:u(e),"aria-describedby":b||void 0,className:"font-semibold text-krds-primary-70 underline underline-offset-4 hover:no-underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-krds-primary-50",onClick:()=>r==null?void 0:r(e),children:e.title}),e.description?s.jsx("p",{id:n,className:"mt-1 text-krds-body-sm text-krds-gray-70",children:e.description}):null,e.disabledReason?s.jsx("p",{id:o,className:"mt-1 text-krds-body-xs text-krds-danger-text",children:e.disabledReason}):null]}),s.jsx("span",{className:p("w-fit rounded-md px-2.5 py-1 text-krds-label-xs font-semibold sm:max-w-44 sm:text-right",D[e.status]),children:e.statusLabel??C[e.status]})]},e.id)})})}function R({items:a=[],groups:u=[],getItemHref:r,onItemSelect:e,className:n,...o}){return s.jsxs("section",{"data-slot":"task-list",className:p("grid gap-7",n),...o,children:[a.length>0?s.jsx(g,{items:a,getItemHref:r,onItemSelect:e}):null,u.map(t=>s.jsxs("section",{"aria-labelledby":t.title?`${t.id}-title`:void 0,children:[t.title?s.jsx("h2",{id:`${t.id}-title`,className:"text-krds-heading-sm font-bold text-krds-gray-90",children:t.title}):null,t.description?s.jsx("p",{className:"mt-1 text-krds-body-sm text-krds-gray-70",children:t.description}):null,s.jsx("div",{className:p((t.title||t.description)&&"mt-3"),children:s.jsx(g,{items:t.items,getItemHref:r,onItemSelect:e})})]},t.id))]})}R.__docgenInfo={description:"",methods:[],displayName:"TaskList",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"TaskListItem"}],raw:"TaskListItem[]"},description:"",defaultValue:{value:"[]",computed:!1}},groups:{required:!1,tsType:{name:"Array",elements:[{name:"TaskListGroup"}],raw:"TaskListGroup[]"},description:"",defaultValue:{value:"[]",computed:!1}},getItemHref:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: TaskListItem) => string",signature:{arguments:[{type:{name:"TaskListItem"},name:"item"}],return:{name:"string"}}},description:""},onItemSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: TaskListItem) => void",signature:{arguments:[{type:{name:"TaskListItem"},name:"item"}],return:{name:"void"}}},description:""}}};const G=V([{library:"GOV.UK Design System",component:"Task list",url:"https://design-system.service.gov.uk/components/task-list/",usedFor:["design","behavior","api","accessibility","content"],relation:"adapted",note:"작업 링크와 상태를 분리하고 모바일에서 상태가 아래로 쌓이는 정보 구조를 참고했습니다."}]),i=[{id:"account",title:"신청자 정보",description:"이름과 연락처를 확인합니다.",status:"completed"},{id:"service",title:"서비스 선택",description:"필요한 지원 서비스를 선택합니다.",status:"in-progress"},{id:"documents",title:"증빙 서류 제출",status:"not-started"},{id:"review",title:"신청 내용 검토",status:"blocked",disabledReason:"증빙 서류를 먼저 제출해야 합니다."}],q={title:"Organisms/Data/TaskList",component:R,tags:["autodocs","data","navigation","accessibility","ref:govuk"],parameters:{references:G,docs:{description:{component:"여러 단계의 작업 이름, 설명, 이동 링크, 진행 상태와 수행 불가 사유를 한 목록에서 제공하는 작업 전용 컴포넌트입니다."}}},argTypes:{items:{control:"object",table:{category:"Content"}},groups:{control:"object",table:{category:"Content"}},getItemHref:{control:!1,table:{category:"Navigation"}},onItemSelect:{action:"item selected",table:{category:"Events"}}},args:{items:i,getItemHref:a=>`#task-${a.id}`}},d={},l={args:{items:[{...i[0],statusLabel:"확인 완료"},{...i[1],statusLabel:"작성 중"},{...i[2],statusLabel:"작성 필요"}]}},c={args:{items:[],groups:[{id:"about",title:"1. 기본 정보",items:i.slice(0,2)},{id:"submit",title:"2. 제출 준비",description:"필수 항목을 완료한 뒤 최종 검토를 진행합니다.",items:i.slice(2)}]}},m={parameters:{viewport:{defaultViewport:"mobile1"}}};var f,k,x;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(x=(k=d.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var y,v,h;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    items: [{
      ...items[0],
      statusLabel: '확인 완료'
    }, {
      ...items[1],
      statusLabel: '작성 중'
    }, {
      ...items[2],
      statusLabel: '작성 필요'
    }]
  }
}`,...(h=(v=l.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var L,j,T;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    items: [],
    groups: [{
      id: 'about',
      title: '1. 기본 정보',
      items: items.slice(0, 2)
    }, {
      id: 'submit',
      title: '2. 제출 준비',
      description: '필수 항목을 완료한 뒤 최종 검토를 진행합니다.',
      items: items.slice(2)
    }]
  }
}`,...(T=(j=c.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var w,N,I;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(I=(N=m.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};const B=["Default","CustomStatusLabels","Grouped","NarrowViewport"];export{l as CustomStatusLabels,d as Default,c as Grouped,m as NarrowViewport,B as __namedExportsOrder,q as default};
