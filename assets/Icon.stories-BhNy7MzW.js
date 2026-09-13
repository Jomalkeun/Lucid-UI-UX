import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{d as W}from"./reference-types-4ftiVeOu.js";import{r as _}from"./index-BxXVWNx3.js";import{c as z}from"./index-CkIaN0ex.js";import{c as A}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const D=z("inline-flex items-center justify-center rounded transition-colors",{variants:{variant:{default:"text-krds-gray-70",primary:"text-krds-primary-base",secondary:"text-krds-gray-50",success:"text-krds-success-base",warning:"text-krds-warning-base",danger:"text-krds-danger-base",info:"text-krds-info-base"},size:{sm:"text-[16px] w-4 h-4",md:"text-[20px] w-5 h-5",lg:"text-[24px] w-6 h-6"}},defaultVariants:{variant:"default",size:"md"}}),r=_.forwardRef(({className:e,variant:S,size:j,label:i,text:k,description:E,selected:c,active:T,disabled:l,loading:d,children:q,...C},V)=>a.jsx("span",{ref:V,"aria-label":i,"aria-disabled":l||void 0,"aria-busy":d||void 0,"aria-selected":c||void 0,"data-active":T||void 0,className:A(D({variant:S,size:j}),c&&"opacity-100 font-semibold",l&&"opacity-40 cursor-not-allowed pointer-events-none",d&&"animate-pulse opacity-60",e),...C,children:q??k??i}));r.displayName="Icon";r.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{label:{required:!1,tsType:{name:"string"},description:""},text:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""}},composes:["VariantProps"]};const R=W([{library:"U.S. Web Design System",component:"Icon",url:"https://designsystem.digital.gov/components/icon/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"Ant Design",component:"Icon",url:"https://ant.design/components/icon/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Icon",url:"https://www.chakra-ui.com/docs/components/icon",usedFor:["comparison"],relation:"compared"}]),B={title:"Atoms/Primitives/Icon",component:r,tags:["autodocs","ref:ant-design","ref:chakra-ui","ref:uswds"],parameters:{references:R,layout:"centered",docs:{description:{component:"React Storybook용으로 재구성한 Icon 스토리입니다. 상태, 크기, 변형, 콘텐츠 옵션을 Controls에서 조절합니다."}}},argTypes:{label:{control:"text",table:{category:"Content"}},text:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},variant:{control:"select",options:["default","primary","secondary","success","warning","danger","info"],table:{category:"Appearance"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},selected:{control:"boolean",table:{category:"State"}},active:{control:"boolean",table:{category:"State"}},disabled:{control:"boolean",table:{category:"State"}},loading:{control:"boolean",table:{category:"State"}}},args:{label:"Icon",text:"Icon",description:"Icon 설명 텍스트",variant:"default",size:"md",selected:!1,active:!1,disabled:!1,loading:!1},render:e=>a.jsx(r,{...e,children:e.children??e.label??e.text})},t={name:"기본"},n={name:"상태 비교",render:()=>a.jsxs("div",{style:{display:"grid",gap:12,minWidth:320},children:[a.jsx(r,{label:"기본",children:"기본"}),a.jsx(r,{label:"선택됨",selected:!0,active:!0,children:"선택됨"}),a.jsx(r,{label:"비활성",disabled:!0,children:"비활성"}),a.jsx(r,{label:"로딩",loading:!0,children:"로딩"})]}),parameters:{controls:{disable:!0}}},o={name:"변형 비교",render:()=>a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,alignItems:"center"},children:["default","primary","secondary","success","warning","danger","info"].map(e=>a.jsx(r,{variant:e,label:e,children:e},e))}),parameters:{controls:{disable:!0}}},s={name:"긴 콘텐츠",args:{label:"긴 텍스트 콘텐츠가 들어간 Icon",description:"레이아웃이 긴 텍스트에서도 안정적인지 확인합니다."}};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '기본'
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var b,g,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '상태 비교',
  render: () => <div style={{
    display: 'grid',
    gap: 12,
    minWidth: 320
  }}>
      <Icon label="기본">기본</Icon>
      <Icon label="선택됨" selected active>선택됨</Icon>
      <Icon label="비활성" disabled>비활성</Icon>
      <Icon label="로딩" loading>로딩</Icon>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,x,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '변형 비교',
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    alignItems: 'center'
  }}>
      {['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info'].map(variant => <Icon key={variant} variant={variant as any} label={variant}>{variant}</Icon>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var I,h,w;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '긴 콘텐츠',
  args: {
    label: '긴 텍스트 콘텐츠가 들어간 Icon',
    description: '레이아웃이 긴 텍스트에서도 안정적인지 확인합니다.'
  } as any
}`,...(w=(h=s.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const G=["Default","States","Variants","LongContent"];export{t as Default,s as LongContent,n as States,o as Variants,G as __namedExportsOrder,B as default};
