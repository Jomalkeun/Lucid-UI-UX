import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as z}from"./reference-types-4ftiVeOu.js";import{R as D}from"./index-BxXVWNx3.js";import{c as I}from"./index-CkIaN0ex.js";import{c as y}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const A=I(["relative inline-flex items-start gap-3","rounded-xl border font-sans","transition-opacity duration-200"],{variants:{variant:{default:"bg-krds-white border-krds-gray-20 text-krds-gray-90",primary:"bg-krds-primary-5 border-krds-primary-50 text-krds-gray-90",secondary:"bg-krds-gray-5 border-krds-gray-30 text-krds-gray-90",success:"bg-krds-success-surface border-krds-success-border text-krds-gray-90",warning:"bg-krds-warning-surface border-krds-warning-border text-krds-gray-90",danger:"bg-krds-danger-surface border-krds-danger-border text-krds-gray-90",info:"bg-krds-info-surface border-krds-info-border text-krds-gray-90"},size:{sm:"p-3 text-krds-body-xs",md:"p-4 text-krds-body-sm",lg:"p-5 text-krds-body-md"}},defaultVariants:{variant:"default",size:"md"}}),k={default:"bg-krds-gray-50",primary:"bg-krds-primary-50",secondary:"bg-krds-gray-40",success:"bg-krds-success-base",warning:"bg-krds-warning-base",danger:"bg-krds-danger-base",info:"bg-krds-info-base"},r=D.forwardRef(({className:a,variant:p="default",size:d="md",label:l,text:i,description:m,selected:u=!1,active:g=!1,disabled:f=!1,loading:c=!1,children:b,...T},W)=>{const _=p??"default";return e.jsxs("div",{ref:W,role:"note","aria-label":l??i??void 0,"aria-disabled":f,"aria-busy":c,"data-selected":u||void 0,"data-active":g||void 0,className:y(A({variant:p,size:d}),(u||g)&&"ring-2 ring-krds-primary-50",f&&"opacity-50 pointer-events-none",a),...T,children:[e.jsx("span",{className:y("shrink-0 mt-1 rounded-full",d==="sm"?"w-2 h-2":d==="lg"?"w-3 h-3":"w-2.5 h-2.5",c?"animate-pulse bg-krds-gray-30":k[_]??k.default),"aria-hidden":"true"}),e.jsxs("div",{className:"flex flex-col gap-1 min-w-0",children:[b?e.jsx("span",{children:b}):e.jsxs(e.Fragment,{children:[(l??i)&&e.jsx("span",{className:"font-semibold leading-snug",children:l??i}),m&&e.jsx("span",{className:"text-krds-gray-50 leading-relaxed text-[0.9em]",children:m})]}),c&&e.jsx("span",{className:"text-krds-gray-40 text-[0.875em]",children:"불러오는 중…"})]})]})});r.displayName="CoachMark";r.__docgenInfo={description:"",methods:[],displayName:"CoachMark",props:{label:{required:!1,tsType:{name:"string"},description:""},text:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{defaultValue:{value:"'default'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1}},composes:["VariantProps"]};const E=z([{library:"KRDS",component:"CoachMark",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-coachmark--docs",usedFor:["design","behavior","api"],relation:"adapted"}]),G={title:"Molecules/Overlay/CoachMark",component:r,tags:["autodocs","ref:krds"],parameters:{references:E,layout:"centered",docs:{description:{component:"React Storybook용으로 재구성한 CoachMark 스토리입니다. 상태, 크기, 변형, 콘텐츠 옵션을 Controls에서 조절합니다."}}},argTypes:{label:{control:"text",table:{category:"Content"}},text:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},variant:{control:"select",options:["default","primary","secondary","success","warning","danger","info"],table:{category:"Appearance"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},selected:{control:"boolean",table:{category:"State"}},active:{control:"boolean",table:{category:"State"}},disabled:{control:"boolean",table:{category:"State"}},loading:{control:"boolean",table:{category:"State"}}},args:{label:"CoachMark",text:"CoachMark",description:"CoachMark 설명 텍스트",variant:"default",size:"md",selected:!1,active:!1,disabled:!1,loading:!1},render:a=>e.jsx(r,{...a,children:a.children??a.label??a.text})},s={name:"기본"},t={name:"상태 비교",render:()=>e.jsxs("div",{style:{display:"grid",gap:12,minWidth:320},children:[e.jsx(r,{label:"기본",children:"기본"}),e.jsx(r,{label:"선택됨",selected:!0,active:!0,children:"선택됨"}),e.jsx(r,{label:"비활성",disabled:!0,children:"비활성"}),e.jsx(r,{label:"로딩",loading:!0,children:"로딩"})]}),parameters:{controls:{disable:!0}}},o={name:"변형 비교",render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,alignItems:"center"},children:["default","primary","secondary","success","warning","danger","info"].map(a=>e.jsx(r,{variant:a,label:a,children:a},a))}),parameters:{controls:{disable:!0}}},n={name:"긴 콘텐츠",args:{label:"긴 텍스트 콘텐츠가 들어간 CoachMark",description:"레이아웃이 긴 텍스트에서도 안정적인지 확인합니다."}};var h,x,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '기본'
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var C,M,w;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '상태 비교',
  render: () => <div style={{
    display: 'grid',
    gap: 12,
    minWidth: 320
  }}>
      <CoachMark label="기본">기본</CoachMark>
      <CoachMark label="선택됨" selected active>선택됨</CoachMark>
      <CoachMark label="비활성" disabled>비활성</CoachMark>
      <CoachMark label="로딩" loading>로딩</CoachMark>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(w=(M=t.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var j,S,V;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '변형 비교',
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    alignItems: 'center'
  }}>
      {['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info'].map(variant => <CoachMark key={variant} variant={variant as any} label={variant}>{variant}</CoachMark>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(V=(S=o.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var R,q,N;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '긴 콘텐츠',
  args: {
    label: '긴 텍스트 콘텐츠가 들어간 CoachMark',
    description: '레이아웃이 긴 텍스트에서도 안정적인지 확인합니다.'
  } as any
}`,...(N=(q=n.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};const H=["Default","States","Variants","LongContent"];export{s as Default,n as LongContent,t as States,o as Variants,H as __namedExportsOrder,G as default};
