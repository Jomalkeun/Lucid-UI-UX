import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as _}from"./reference-types-4ftiVeOu.js";import{R as A}from"./index-BxXVWNx3.js";import{c as s}from"./utils-DCADjnpI.js";import{c as F}from"./index-CkIaN0ex.js";import"./_commonjsHelpers-CqkleIqs.js";const M=F("inline-flex flex-col items-start rounded-lg border transition-colors",{variants:{variant:{default:"bg-krds-gray-0 border-krds-gray-20 text-krds-gray-90",primary:"bg-krds-primary-5 border-krds-primary-20 text-krds-primary-50",secondary:"bg-krds-gray-10 border-krds-gray-30 text-krds-gray-70",success:"bg-krds-success-surface border-krds-success-border text-krds-success-text",warning:"bg-krds-warning-surface border-krds-warning-border text-krds-warning-text",danger:"bg-krds-danger-surface border-krds-danger-border text-krds-danger-text",info:"bg-krds-info-surface border-krds-info-border text-krds-info-text"},size:{sm:"px-3 py-2 min-w-[100px]",md:"px-4 py-3 min-w-[140px]",lg:"px-5 py-4 min-w-[180px]"}},defaultVariants:{variant:"default",size:"md"}}),a=A.forwardRef(({label:t,text:i,description:c,variant:j="default",size:r="md",selected:V=!1,active:q=!1,disabled:m=!1,loading:R=!1,className:T,style:N,children:p,...C},I)=>{const z={sm:"text-krds-body-xs",md:"text-krds-body-sm",lg:"text-krds-body-md"},D={sm:"text-krds-title-sm",md:"text-krds-title-md",lg:"text-krds-title-lg"},W={sm:"text-krds-body-xs",md:"text-krds-body-xs",lg:"text-krds-body-sm"};return e.jsxs("div",{ref:I,role:"status","aria-disabled":m,className:s(M({variant:j,size:r}),V&&"ring-2 ring-krds-primary-50",q&&"ring-2 ring-krds-primary-40",m&&"opacity-40 cursor-not-allowed pointer-events-none",R&&"animate-pulse",T),style:N,...C,children:[t&&e.jsx("span",{className:s(z[r??"md"],"font-medium opacity-70 mb-1"),children:t}),(i??p)&&e.jsx("span",{className:s(D[r??"md"],"font-bold leading-tight"),children:i??p}),c&&e.jsx("span",{className:s(W[r??"md"],"opacity-60 mt-1"),children:c})]})});a.displayName="StatBox";a.__docgenInfo={description:"",methods:[],displayName:"StatBox",props:{label:{required:!1,tsType:{name:"string"},description:""},text:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{defaultValue:{value:"'default'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1}},composes:["VariantProps"]};const U=["default","primary","secondary","success","warning","danger","info"],E=_([{library:"Mantine UI",component:"Stats",url:"https://ui.mantine.dev/category/stats/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."},{library:"Ant Design",component:"Statistic",url:"https://ant.design/components/statistic/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Stat",url:"https://www.chakra-ui.com/docs/components/stat",usedFor:["comparison"],relation:"compared"}]),K={title:"Molecules/Data/StatBox",component:a,tags:["autodocs","ref:ant-design","ref:chakra-ui","ref:mantine-ui"],parameters:{references:E,layout:"centered",docs:{description:{component:"React Storybook용으로 재구성한 StatBox 스토리입니다. 상태, 크기, 변형, 콘텐츠 옵션을 Controls에서 조절합니다."}}},argTypes:{label:{control:"text",table:{category:"Content"}},text:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},variant:{control:"select",options:["default","primary","secondary","success","warning","danger","info"],table:{category:"Appearance"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},selected:{control:"boolean",table:{category:"State"}},active:{control:"boolean",table:{category:"State"}},disabled:{control:"boolean",table:{category:"State"}},loading:{control:"boolean",table:{category:"State"}}},args:{label:"StatBox",text:"StatBox",description:"StatBox 설명 텍스트",variant:"default",size:"md",selected:!1,active:!1,disabled:!1,loading:!1}},o={name:"기본"},n={name:"상태 비교",render:()=>e.jsxs("div",{style:{display:"grid",gap:12,minWidth:320},children:[e.jsx(a,{label:"기본",children:"기본"}),e.jsx(a,{label:"선택됨",selected:!0,active:!0,children:"선택됨"}),e.jsx(a,{label:"비활성",disabled:!0,children:"비활성"}),e.jsx(a,{label:"로딩",loading:!0,children:"로딩"})]}),parameters:{controls:{disable:!0}}},d={name:"변형 비교",render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,alignItems:"center"},children:U.map(t=>e.jsx(a,{variant:t,label:t,children:t},t))}),parameters:{controls:{disable:!0}}},l={name:"긴 콘텐츠",args:{label:"긴 텍스트 콘텐츠가 들어간 StatBox",description:"레이아웃이 긴 텍스트에서도 안정적인지 확인합니다."}};var u,g,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '기본'
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,b,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '상태 비교',
  render: () => <div style={{
    display: 'grid',
    gap: 12,
    minWidth: 320
  }}>
      <StatBox label="기본">기본</StatBox>
      <StatBox label="선택됨" selected active>선택됨</StatBox>
      <StatBox label="비활성" disabled>비활성</StatBox>
      <StatBox label="로딩" loading>로딩</StatBox>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var k,S,v;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '변형 비교',
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    alignItems: 'center'
  }}>
      {variants.map(variant => <StatBox key={variant} variant={variant} label={variant}>{variant}</StatBox>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(v=(S=d.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var h,B,w;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '긴 콘텐츠',
  args: {
    label: '긴 텍스트 콘텐츠가 들어간 StatBox',
    description: '레이아웃이 긴 텍스트에서도 안정적인지 확인합니다.'
  }
}`,...(w=(B=l.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};const Q=["Default","States","Variants","LongContent"];export{o as Default,l as LongContent,n as States,d as Variants,Q as __namedExportsOrder,K as default};
