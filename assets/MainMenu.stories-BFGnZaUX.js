import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{d as v}from"./reference-types-4ftiVeOu.js";function n({children:e,...x}){return a.jsx("div",{...x,children:e})}n.__docgenInfo={description:"",methods:[],displayName:"MainMenu",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const h=v([{library:"KRDS",component:"MainMenu",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-mainmenu--docs",usedFor:["design","behavior","api"],relation:"adapted"}]),w={title:"Organisms/Navigation/MainMenu",component:n,tags:["autodocs","ref:krds"],parameters:{references:h,layout:"centered",docs:{description:{component:"React Storybook용으로 재구성한 MainMenu 스토리입니다. 상태, 크기, 변형, 콘텐츠 옵션을 Controls에서 조절합니다."}}},argTypes:{label:{control:"text",table:{category:"Content"}},text:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},variant:{control:"select",options:["default","primary","secondary","success","warning","danger","info"],table:{category:"Appearance"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},selected:{control:"boolean",table:{category:"State"}},active:{control:"boolean",table:{category:"State"}},disabled:{control:"boolean",table:{category:"State"}},loading:{control:"boolean",table:{category:"State"}}},args:{label:"MainMenu",text:"MainMenu",description:"MainMenu 설명 텍스트",variant:"default",size:"md",selected:!1,active:!1,disabled:!1,loading:!1},render:e=>a.jsx(n,{...e,children:e.children??e.label??e.text})},r={name:"기본"},t={name:"상태 비교",render:()=>a.jsxs("div",{style:{display:"grid",gap:12,minWidth:320},children:[a.jsx(n,{label:"기본",children:"기본"}),a.jsx(n,{label:"선택됨",selected:!0,active:!0,children:"선택됨"}),a.jsx(n,{label:"비활성",disabled:!0,children:"비활성"}),a.jsx(n,{label:"로딩",loading:!0,children:"로딩"})]}),parameters:{controls:{disable:!0}}},o={name:"변형 비교",render:()=>a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,alignItems:"center"},children:["default","primary","secondary","success","warning","danger","info"].map(e=>a.jsx(n,{variant:e,label:e,children:e},e))}),parameters:{controls:{disable:!0}}},s={name:"긴 콘텐츠",args:{label:"긴 텍스트 콘텐츠가 들어간 MainMenu",description:"레이아웃이 긴 텍스트에서도 안정적인지 확인합니다."}};var i,l,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '기본'
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,p,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '상태 비교',
  render: () => <div style={{
    display: 'grid',
    gap: 12,
    minWidth: 320
  }}>
      <MainMenu label="기본">기본</MainMenu>
      <MainMenu label="선택됨" selected active>선택됨</MainMenu>
      <MainMenu label="비활성" disabled>비활성</MainMenu>
      <MainMenu label="로딩" loading>로딩</MainMenu>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,g,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '변형 비교',
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    alignItems: 'center'
  }}>
      {['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info'].map(variant => <MainMenu key={variant} variant={variant as any} label={variant}>{variant}</MainMenu>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var M,y,f;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: '긴 콘텐츠',
  args: {
    label: '긴 텍스트 콘텐츠가 들어간 MainMenu',
    description: '레이아웃이 긴 텍스트에서도 안정적인지 확인합니다.'
  } as any
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const R=["Default","States","Variants","LongContent"];export{r as Default,s as LongContent,t as States,o as Variants,R as __namedExportsOrder,w as default};
