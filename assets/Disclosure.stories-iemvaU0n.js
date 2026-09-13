import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as z}from"./reference-types-4ftiVeOu.js";import{R as W}from"./index-BxXVWNx3.js";import{c}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const _={default:"border-krds-gray-20 bg-krds-gray-0 text-krds-gray-90",primary:"border-krds-primary-50 bg-krds-primary-5 text-krds-primary-base",secondary:"border-krds-gray-40 bg-krds-gray-10 text-krds-gray-90",success:"border-krds-success-border bg-krds-success-surface text-krds-success-text",warning:"border-krds-warning-border bg-krds-warning-surface text-krds-warning-text",danger:"border-krds-danger-border bg-krds-danger-surface text-krds-danger-text",info:"border-krds-info-border bg-krds-info-surface text-krds-info-text"},L={sm:{wrapper:"px-3 py-2 rounded-md text-xs gap-1.5",label:"text-xs font-semibold",desc:"text-xs"},md:{wrapper:"px-4 py-3 rounded-lg text-sm gap-2",label:"text-sm font-semibold",desc:"text-sm"},lg:{wrapper:"px-5 py-4 rounded-xl text-base gap-2.5",label:"text-base font-semibold",desc:"text-sm"}},r=W.forwardRef(({label:a,text:R,description:p,variant:T="default",size:q="md",selected:n=!1,active:i=!1,disabled:m=!1,loading:u=!1,children:b,className:V,...F},I)=>{const d=L[q],g=a??R;return e.jsx("div",{ref:I,role:"group","aria-selected":n||i,"aria-disabled":m,"aria-busy":u,className:c("flex flex-col border transition-colors",d.wrapper,_[T],(n||i)&&"ring-2 ring-krds-primary-50 ring-offset-1",m&&"pointer-events-none opacity-50",V),...F,children:u?e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("div",{className:"h-3 w-3/4 animate-pulse rounded bg-krds-gray-20"}),e.jsx("div",{className:"h-2.5 w-1/2 animate-pulse rounded bg-krds-gray-10"})]}):e.jsxs(e.Fragment,{children:[g&&e.jsxs("span",{className:c(d.label),children:[g,(n||i)&&e.jsx("span",{className:"sr-only",children:"선택됨"})]}),p&&e.jsx("span",{className:c(d.desc,"opacity-70"),children:p}),b&&e.jsx("div",{className:"mt-1",children:b})]})})});r.displayName="Disclosure";r.__docgenInfo={description:"",methods:[],displayName:"Disclosure",props:{label:{required:!1,tsType:{name:"string"},description:""},text:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};const O=z([{library:"Bootstrap",component:"Collapse",url:"https://getbootstrap.com/docs/5.3/components/collapse/",usedFor:["comparison"],relation:"compared"},{library:"GOV.UK Design System",component:"Details",url:"https://design-system.service.gov.uk/components/details/",usedFor:["behavior","accessibility","comparison"],relation:"compared"},{library:"KRDS",component:"Disclosure",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-disclosure--docs",usedFor:["design","behavior","api"],relation:"adapted"},{library:"shadcn/ui",component:"Collapsible",url:"https://ui.shadcn.com/docs/components/collapsible",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Collapsible",url:"https://www.chakra-ui.com/docs/components/collapsible",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Collapsible",url:"https://base-ui.com/react/components/collapsible",usedFor:["comparison"],relation:"compared"}]),G={title:"Molecules/Navigation/Disclosure",component:r,tags:["ref:bootstrap","autodocs","ref:shadcn-ui","ref:chakra-ui","ref:base-ui","ref:govuk"],parameters:{references:O,layout:"centered",docs:{description:{component:"React Storybook용으로 재구성한 Disclosure 스토리입니다. 상태, 크기, 변형, 콘텐츠 옵션을 Controls에서 조절합니다."}}},argTypes:{label:{control:"text",table:{category:"Content"}},text:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},variant:{control:"select",options:["default","primary","secondary","success","warning","danger","info"],table:{category:"Appearance"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},selected:{control:"boolean",table:{category:"State"}},active:{control:"boolean",table:{category:"State"}},disabled:{control:"boolean",table:{category:"State"}},loading:{control:"boolean",table:{category:"State"}}},args:{label:"Disclosure",text:"Disclosure",description:"Disclosure 설명 텍스트",variant:"default",size:"md",selected:!1,active:!1,disabled:!1,loading:!1},render:a=>e.jsx(r,{...a,children:a.children??a.label??a.text})},s={name:"기본"},t={name:"상태 비교",render:()=>e.jsxs("div",{style:{display:"grid",gap:12,minWidth:320},children:[e.jsx(r,{label:"기본",children:"기본"}),e.jsx(r,{label:"선택됨",selected:!0,active:!0,children:"선택됨"}),e.jsx(r,{label:"비활성",disabled:!0,children:"비활성"}),e.jsx(r,{label:"로딩",loading:!0,children:"로딩"})]}),parameters:{controls:{disable:!0}}},o={name:"변형 비교",render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,alignItems:"center"},children:["default","primary","secondary","success","warning","danger","info"].map(a=>e.jsx(r,{variant:a,label:a,children:a},a))}),parameters:{controls:{disable:!0}}},l={name:"긴 콘텐츠",args:{label:"긴 텍스트 콘텐츠가 들어간 Disclosure",description:"레이아웃이 긴 텍스트에서도 안정적인지 확인합니다."}};var f,y,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '기본'
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var v,h,k;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '상태 비교',
  render: () => <div style={{
    display: 'grid',
    gap: 12,
    minWidth: 320
  }}>
      <Disclosure label="기본">기본</Disclosure>
      <Disclosure label="선택됨" selected active>선택됨</Disclosure>
      <Disclosure label="비활성" disabled>비활성</Disclosure>
      <Disclosure label="로딩" loading>로딩</Disclosure>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(k=(h=t.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var w,D,j;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '변형 비교',
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    alignItems: 'center'
  }}>
      {['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info'].map(variant => <Disclosure key={variant} variant={variant as any} label={variant}>{variant}</Disclosure>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(j=(D=o.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var S,N,C;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '긴 콘텐츠',
  args: {
    label: '긴 텍스트 콘텐츠가 들어간 Disclosure',
    description: '레이아웃이 긴 텍스트에서도 안정적인지 확인합니다.'
  } as any
}`,...(C=(N=l.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};const M=["Default","States","Variants","LongContent"];export{s as Default,l as LongContent,t as States,o as Variants,M as __namedExportsOrder,G as default};
