import{j as t}from"./jsx-runtime-D_zvdyIk.js";function a({children:e,...N}){return t.jsx("div",{...N,children:e})}a.__docgenInfo={description:"",methods:[],displayName:"BottomNavigationItem",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const I={title:"Molecules/Navigation/BottomNavigationItem",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"React Storybook용으로 재구성한 BottomNavigationItem 스토리입니다. 상태, 크기, 변형, 콘텐츠 옵션을 Controls에서 조절합니다."}}},argTypes:{label:{control:"text",table:{category:"Content"}},text:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},variant:{control:"select",options:["default","primary","secondary","success","warning","danger","info"],table:{category:"Appearance"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},selected:{control:"boolean",table:{category:"State"}},active:{control:"boolean",table:{category:"State"}},disabled:{control:"boolean",table:{category:"State"}},loading:{control:"boolean",table:{category:"State"}}},args:{label:"BottomNavigationItem",text:"BottomNavigationItem",description:"BottomNavigationItem 설명 텍스트",variant:"default",size:"md",selected:!1,active:!1,disabled:!1,loading:!1},render:e=>t.jsx(a,{...e,children:e.children??e.label??e.text})},o={name:"기본"},n={name:"상태 비교",render:()=>t.jsxs("div",{style:{display:"grid",gap:12,minWidth:320},children:[t.jsx(a,{label:"기본",children:"기본"}),t.jsx(a,{label:"선택됨",selected:!0,active:!0,children:"선택됨"}),t.jsx(a,{label:"비활성",disabled:!0,children:"비활성"}),t.jsx(a,{label:"로딩",loading:!0,children:"로딩"})]}),parameters:{controls:{disable:!0}}},r={name:"변형 비교",render:()=>t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,alignItems:"center"},children:["default","primary","secondary","success","warning","danger","info"].map(e=>t.jsx(a,{variant:e,label:e,children:e},e))}),parameters:{controls:{disable:!0}}},i={name:"긴 콘텐츠",args:{label:"긴 텍스트 콘텐츠가 들어간 BottomNavigationItem",description:"레이아웃이 긴 텍스트에서도 안정적인지 확인합니다."}};var s,l,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '기본'
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,m,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '상태 비교',
  render: () => <div style={{
    display: 'grid',
    gap: 12,
    minWidth: 320
  }}>
      <BottomNavigationItem label="기본">기본</BottomNavigationItem>
      <BottomNavigationItem label="선택됨" selected active>선택됨</BottomNavigationItem>
      <BottomNavigationItem label="비활성" disabled>비활성</BottomNavigationItem>
      <BottomNavigationItem label="로딩" loading>로딩</BottomNavigationItem>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,b,u;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '변형 비교',
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    alignItems: 'center'
  }}>
      {['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info'].map(variant => <BottomNavigationItem key={variant} variant={variant as any} label={variant}>{variant}</BottomNavigationItem>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(u=(b=r.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var v,y,x;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '긴 콘텐츠',
  args: {
    label: '긴 텍스트 콘텐츠가 들어간 BottomNavigationItem',
    description: '레이아웃이 긴 텍스트에서도 안정적인지 확인합니다.'
  } as any
}`,...(x=(y=i.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const B=["Default","States","Variants","LongContent"];export{o as Default,i as LongContent,n as States,r as Variants,B as __namedExportsOrder,I as default};
