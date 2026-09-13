import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as z}from"./reference-types-4ftiVeOu.js";import{R as D}from"./index-BxXVWNx3.js";import{c as W}from"./utils-DCADjnpI.js";import{c as _}from"./index-CkIaN0ex.js";import"./_commonjsHelpers-CqkleIqs.js";const A=_("inline-flex items-center gap-2 rounded-lg border font-medium transition-opacity",{variants:{variant:{default:"bg-krds-gray-5 border-krds-gray-20 text-krds-gray-90",primary:"bg-krds-primary-10 border-krds-primary-50 text-krds-primary-base",secondary:"bg-krds-gray-10 border-krds-gray-30 text-krds-gray-70",success:"bg-krds-success-surface border-krds-success-border text-krds-success-text",warning:"bg-krds-warning-surface border-krds-warning-border text-krds-warning-text",danger:"bg-krds-danger-surface border-krds-danger-border text-krds-danger-text",info:"bg-krds-info-surface border-krds-info-border text-krds-info-text"},size:{sm:"px-2 py-1 text-krds-body-xs",md:"px-3 py-2 text-krds-body-sm",lg:"px-4 py-3 text-krds-body-md"}},defaultVariants:{variant:"default",size:"md"}}),r=D.forwardRef(({className:a,variant:w,size:S,label:R,text:T,description:d,selected:i=!1,active:l=!1,disabled:c=!1,loading:p=!1,children:V,...q},C)=>e.jsxs("div",{ref:C,role:"status","aria-live":"polite","aria-disabled":c,"aria-selected":i,"data-active":l||void 0,"data-selected":i||void 0,className:W(A({variant:w,size:S}),i&&"ring-2 ring-offset-1 ring-krds-primary-50",l&&"brightness-95",c&&"opacity-50 pointer-events-none",p&&"animate-pulse",a),...q,children:[p&&e.jsx("span",{"aria-hidden":"true",className:"inline-block h-3 w-3 rounded-full border-2 border-current border-t-transparent animate-spin"}),e.jsxs("span",{className:"flex flex-col min-w-0",children:[V??T??R,d&&e.jsx("span",{className:"text-krds-body-xs opacity-70 font-normal mt-0.5",children:d})]})]}));r.displayName="Notification";r.__docgenInfo={description:"",methods:[],displayName:"Notification",props:{label:{required:!1,tsType:{name:"string"},description:""},text:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["VariantProps"]};const I=z([{library:"Ant Design",component:"Notification",url:"https://ant.design/components/notification/",usedFor:["comparison"],relation:"compared"}]),B={title:"Molecules/Display/Notification",component:r,tags:["autodocs","ref:ant-design"],parameters:{references:I,layout:"centered",docs:{description:{component:"React Storybook용으로 재구성한 Notification 스토리입니다. 상태, 크기, 변형, 콘텐츠 옵션을 Controls에서 조절합니다."}}},argTypes:{label:{control:"text",table:{category:"Content"}},text:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},variant:{control:"select",options:["default","primary","secondary","success","warning","danger","info"],table:{category:"Appearance"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},selected:{control:"boolean",table:{category:"State"}},active:{control:"boolean",table:{category:"State"}},disabled:{control:"boolean",table:{category:"State"}},loading:{control:"boolean",table:{category:"State"}}},args:{label:"Notification",text:"Notification",description:"Notification 설명 텍스트",variant:"default",size:"md",selected:!1,active:!1,disabled:!1,loading:!1},render:a=>e.jsx(r,{...a,children:a.children??a.label??a.text})},t={name:"기본"},s={name:"상태 비교",render:()=>e.jsxs("div",{style:{display:"grid",gap:12,minWidth:320},children:[e.jsx(r,{label:"기본",children:"기본"}),e.jsx(r,{label:"선택됨",selected:!0,active:!0,children:"선택됨"}),e.jsx(r,{label:"비활성",disabled:!0,children:"비활성"}),e.jsx(r,{label:"로딩",loading:!0,children:"로딩"})]}),parameters:{controls:{disable:!0}}},n={name:"변형 비교",render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,alignItems:"center"},children:["default","primary","secondary","success","warning","danger","info"].map(a=>e.jsx(r,{variant:a,label:a,children:a},a))}),parameters:{controls:{disable:!0}}},o={name:"긴 콘텐츠",args:{label:"긴 텍스트 콘텐츠가 들어간 Notification",description:"레이아웃이 긴 텍스트에서도 안정적인지 확인합니다."}};var m,f,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '기본'
}`,...(u=(f=t.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var b,g,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '상태 비교',
  render: () => <div style={{
    display: 'grid',
    gap: 12,
    minWidth: 320
  }}>
      <Notification label="기본">기본</Notification>
      <Notification label="선택됨" selected active>선택됨</Notification>
      <Notification label="비활성" disabled>비활성</Notification>
      <Notification label="로딩" loading>로딩</Notification>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var x,k,v;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '변형 비교',
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    alignItems: 'center'
  }}>
      {['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info'].map(variant => <Notification key={variant} variant={variant as any} label={variant}>{variant}</Notification>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(v=(k=n.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var N,h,j;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '긴 콘텐츠',
  args: {
    label: '긴 텍스트 콘텐츠가 들어간 Notification',
    description: '레이아웃이 긴 텍스트에서도 안정적인지 확인합니다.'
  } as any
}`,...(j=(h=o.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const G=["Default","States","Variants","LongContent"];export{t as Default,o as LongContent,s as States,n as Variants,G as __namedExportsOrder,B as default};
