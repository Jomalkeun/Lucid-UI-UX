import{d as G}from"./reference-types-4ftiVeOu.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as y}from"./utils-DCADjnpI.js";const Q={primary:"bg-krds-primary-60",success:"bg-krds-success-text",warning:"bg-krds-warning-text",danger:"bg-krds-danger-text",gray:"bg-krds-gray-50"},W=[{id:1,label:"요구사항 분석",start:1,end:2,tone:"primary",owner:"기획",progress:100},{id:2,label:"UI/UX 디자인",start:2,end:4,tone:"warning",owner:"디자인",progress:80},{id:3,label:"컴포넌트 개발",start:4,end:7,tone:"success",owner:"개발",progress:55},{id:4,label:"QA 및 테스트",start:7,end:9,tone:"danger",owner:"QA",progress:10},{id:5,label:"배포 및 운영",start:9,end:10,tone:"gray",owner:"운영",progress:0}];function g(d,c,s){return Math.min(Math.max(d,c),s)}function k({className:d,tasks:c=W,title:s="프로젝트 일정",description:i,totalWeeks:p=10,labelWidth:v="180px",...R}){const b=Array.from({length:p},(r,t)=>t+1);return e.jsxs("section",{className:y("rounded-md border border-krds-gray-30 bg-white",d),...R,children:[s||i?e.jsxs("header",{className:"border-b border-krds-gray-20 px-4 py-3",children:[s?e.jsx("h3",{className:"text-base font-semibold text-krds-gray-90",children:s}):null,i?e.jsx("p",{className:"mt-1 text-sm text-krds-gray-60",children:i}):null]}):null,e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full border-collapse text-sm",children:[e.jsxs("caption",{className:"sr-only",children:[s," 간트 차트"]}),e.jsx("thead",{children:e.jsxs("tr",{className:"bg-krds-gray-5 text-krds-gray-70",children:[e.jsx("th",{scope:"col",style:{width:v},className:"sticky left-0 z-10 border-b border-r border-krds-gray-20 bg-krds-gray-5 px-4 py-3 text-left font-semibold",children:"작업"}),b.map(r=>e.jsxs("th",{scope:"col",className:"min-w-20 border-b border-krds-gray-20 px-3 py-3 text-center font-semibold",children:[r,"주"]},r))]})}),e.jsx("tbody",{children:c.map(r=>{const t=g(r.start,1,p),m=g(r.end,t,p),u=g(r.progress??0,0,100),A=r.tone??"primary";return e.jsxs("tr",{className:"hover:bg-krds-gray-5",children:[e.jsxs("th",{scope:"row",className:"sticky left-0 z-10 border-b border-r border-krds-gray-20 bg-white px-4 py-3 text-left",children:[e.jsx("span",{className:"block text-sm font-semibold text-krds-gray-90",children:r.label}),r.owner?e.jsx("span",{className:"mt-1 block text-xs font-normal text-krds-gray-50",children:r.owner}):null]}),b.map(n=>{const T=n>=t&&n<=m,a=n===t,U=n===m,C=`${t}주부터 ${m}주까지, 진행률 ${u}%`;return e.jsx("td",{className:"border-b border-krds-gray-20 px-0 py-3",children:e.jsx("div",{className:"h-8 px-1",children:T?e.jsx("div",{role:a?"img":void 0,"aria-label":a?`${r.label} ${C}`:void 0,className:y("relative h-full overflow-hidden",Q[A],a?"rounded-l-full":"",U?"rounded-r-full":""),children:a?e.jsx("span",{className:"absolute inset-y-0 left-0 bg-white/30",style:{width:`${u}%`}}):null}):null})},n)})]},r.id)})})]})})]})}k.__docgenInfo={description:"",methods:[],displayName:"GanttChart",props:{tasks:{required:!1,tsType:{name:"Array",elements:[{name:"GanttTask"}],raw:"GanttTask[]"},description:"",defaultValue:{value:`[
  { id: 1, label: '요구사항 분석', start: 1, end: 2, tone: 'primary', owner: '기획', progress: 100 },
  { id: 2, label: 'UI/UX 디자인', start: 2, end: 4, tone: 'warning', owner: '디자인', progress: 80 },
  { id: 3, label: '컴포넌트 개발', start: 4, end: 7, tone: 'success', owner: '개발', progress: 55 },
  { id: 4, label: 'QA 및 테스트', start: 7, end: 9, tone: 'danger', owner: 'QA', progress: 10 },
  { id: 5, label: '배포 및 운영', start: 9, end: 10, tone: 'gray', owner: '운영', progress: 0 },
]`,computed:!1}},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'프로젝트 일정'",computed:!1}},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},totalWeeks:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},labelWidth:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'180px'",computed:!1}}},composes:["Omit"]};const $=[{id:1,label:"요구사항 분석",start:1,end:2,tone:"primary",owner:"기획",progress:100},{id:2,label:"UI/UX 디자인",start:2,end:4,tone:"warning",owner:"디자인",progress:80},{id:3,label:"컴포넌트 개발",start:4,end:7,tone:"success",owner:"개발",progress:55},{id:4,label:"QA 및 테스트",start:7,end:9,tone:"danger",owner:"QA",progress:10},{id:5,label:"배포 및 운영",start:9,end:10,tone:"gray",owner:"운영",progress:0}],q=G([{library:"DevUI",component:"Gantt",url:"https://devui.design/components/en-us/gantt/demo",usedFor:["behavior","api","comparison"],relation:"compared"}]),V={title:"Organisms/Data/GanttChart",component:k,tags:["autodocs","data","ref:devui"],parameters:{references:q,layout:"centered",docs:{description:{component:"일정과 프로젝트 진행 상황을 주차 기반 시간축 위에 표시하는 간트 차트 오거나이즘입니다."}}},argTypes:{title:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},totalWeeks:{control:{type:"range",min:4,max:16},table:{category:"Appearance"}},labelWidth:{control:"text",table:{category:"Appearance"}},tasks:{control:"object",table:{category:"Data"}}},args:{title:"프로젝트 일정",description:"주차별 작업 기간과 진행률을 함께 확인합니다.",totalWeeks:10,labelWidth:"180px",tasks:$,className:"w-[920px]"}},o={name:"기본"},l={name:"16주 로드맵",args:{totalWeeks:16,tasks:[{id:1,label:"리서치",start:1,end:3,tone:"primary",owner:"기획",progress:100},{id:2,label:"디자인 시스템 확장",start:3,end:8,tone:"warning",owner:"디자인",progress:65},{id:3,label:"컴포넌트 개발",start:6,end:12,tone:"success",owner:"개발",progress:45},{id:4,label:"문서화",start:10,end:14,tone:"gray",owner:"문서",progress:20},{id:5,label:"릴리즈",start:15,end:16,tone:"danger",owner:"운영",progress:0}]}};var x,h,w;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '기본'
}`,...(w=(h=o.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var f,N,j;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '16주 로드맵',
  args: {
    totalWeeks: 16,
    tasks: [{
      id: 1,
      label: '리서치',
      start: 1,
      end: 3,
      tone: 'primary',
      owner: '기획',
      progress: 100
    }, {
      id: 2,
      label: '디자인 시스템 확장',
      start: 3,
      end: 8,
      tone: 'warning',
      owner: '디자인',
      progress: 65
    }, {
      id: 3,
      label: '컴포넌트 개발',
      start: 6,
      end: 12,
      tone: 'success',
      owner: '개발',
      progress: 45
    }, {
      id: 4,
      label: '문서화',
      start: 10,
      end: 14,
      tone: 'gray',
      owner: '문서',
      progress: 20
    }, {
      id: 5,
      label: '릴리즈',
      start: 15,
      end: 16,
      tone: 'danger',
      owner: '운영',
      progress: 0
    }]
  }
}`,...(j=(N=l.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};const E=["Default","LongRoadmap"];export{o as Default,l as LongRoadmap,E as __namedExportsOrder,V as default};
