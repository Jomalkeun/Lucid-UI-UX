import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{d as N}from"./reference-types-4ftiVeOu.js";function t({children:e,...f}){return a.jsx("div",{...f,children:e})}t.__docgenInfo={description:"",methods:[],displayName:"SideNavigation",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const h=N([{library:"U.S. Web Design System",component:"Side navigation",url:"https://designsystem.digital.gov/components/side-navigation/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"KRDS",component:"SideNavigation",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-sidenavigation--docs",usedFor:["design","behavior","api"],relation:"adapted"},{library:"shadcn/ui",component:"Sidebar",url:"https://ui.shadcn.com/docs/components/sidebar",usedFor:["comparison"],relation:"compared"},{library:"Mantine UI",component:"Navbars",url:"https://ui.mantine.dev/category/navbars/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."},{library:"Quasar",component:"Layout Drawer",url:"https://quasar.dev/layout/drawer",usedFor:["comparison"],relation:"compared"}]),j={title:"Organisms/Navigation/SideNavigation",component:t,tags:["autodocs","ref:shadcn-ui","ref:quasar","ref:mantine-ui","ref:uswds"],parameters:{references:h,layout:"centered",docs:{description:{component:"React Storybook용으로 재구성한 SideNavigation 스토리입니다. 상태, 크기, 변형, 콘텐츠 옵션을 Controls에서 조절합니다."}}},argTypes:{label:{control:"text",table:{category:"Content"}},text:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},variant:{control:"select",options:["default","primary","secondary","success","warning","danger","info"],table:{category:"Appearance"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},selected:{control:"boolean",table:{category:"State"}},active:{control:"boolean",table:{category:"State"}},disabled:{control:"boolean",table:{category:"State"}},loading:{control:"boolean",table:{category:"State"}}},args:{label:"SideNavigation",text:"SideNavigation",description:"SideNavigation 설명 텍스트",variant:"default",size:"md",selected:!1,active:!1,disabled:!1,loading:!1},render:e=>a.jsx(t,{...e,children:e.children??e.label??e.text})},r={name:"기본"},n={name:"상태 비교",render:()=>a.jsxs("div",{style:{display:"grid",gap:12,minWidth:320},children:[a.jsx(t,{label:"기본",children:"기본"}),a.jsx(t,{label:"선택됨",selected:!0,active:!0,children:"선택됨"}),a.jsx(t,{label:"비활성",disabled:!0,children:"비활성"}),a.jsx(t,{label:"로딩",loading:!0,children:"로딩"})]}),parameters:{controls:{disable:!0}}},o={name:"변형 비교",render:()=>a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,alignItems:"center"},children:["default","primary","secondary","success","warning","danger","info"].map(e=>a.jsx(t,{variant:e,label:e,children:e},e))}),parameters:{controls:{disable:!0}}},i={name:"긴 콘텐츠",args:{label:"긴 텍스트 콘텐츠가 들어간 SideNavigation",description:"레이아웃이 긴 텍스트에서도 안정적인지 확인합니다."}};var s,d,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '기본'
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,p,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '상태 비교',
  render: () => <div style={{
    display: 'grid',
    gap: 12,
    minWidth: 320
  }}>
      <SideNavigation label="기본">기본</SideNavigation>
      <SideNavigation label="선택됨" selected active>선택됨</SideNavigation>
      <SideNavigation label="비활성" disabled>비활성</SideNavigation>
      <SideNavigation label="로딩" loading>로딩</SideNavigation>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,u,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '변형 비교',
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    alignItems: 'center'
  }}>
      {['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info'].map(variant => <SideNavigation key={variant} variant={variant as any} label={variant}>{variant}</SideNavigation>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var v,y,S;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '긴 콘텐츠',
  args: {
    label: '긴 텍스트 콘텐츠가 들어간 SideNavigation',
    description: '레이아웃이 긴 텍스트에서도 안정적인지 확인합니다.'
  } as any
}`,...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const R=["Default","States","Variants","LongContent"];export{r as Default,i as LongContent,n as States,o as Variants,R as __namedExportsOrder,j as default};
