import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as z}from"./reference-types-4ftiVeOu.js";import{r as l}from"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";function t({children:S,fallback:A=null}){const[j,I]=l.useState(!1);return l.useEffect(()=>{I(!0)},[]),j?e.jsx(e.Fragment,{children:S}):e.jsx(e.Fragment,{children:A})}t.__docgenInfo={description:"",methods:[],displayName:"ClientOnly",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},fallback:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"null",computed:!1}}}};const R=z([{library:"Chakra UI",component:"Client Only",url:"https://www.chakra-ui.com/docs/components/client-only",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"No SSR",url:"https://quasar.dev/vue-components/no-ssr",usedFor:["comparison"],relation:"compared"}]),a=[{label:"열",value:3},{label:"간격",value:"16px"},{label:"정렬",value:"Start"}],E={title:"Layout/Primitives/ClientOnly",component:t,tags:["autodocs","layout","ref:quasar","ref:chakra-ui"],parameters:{references:R,layout:"centered",docs:{description:{component:`## ClientOnly

공식 컴포넌트 패턴을 React Storybook에서 조작 가능하도록 재구성한 ClientOnly 컴포넌트입니다.`}}},argTypes:{title:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},variant:{control:"inline-radio",options:["solid","soft","outline","ghost"],table:{category:"Appearance"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},orientation:{control:"inline-radio",options:["horizontal","vertical"],table:{category:"Layout"}},density:{control:"inline-radio",options:["compact","comfortable","spacious"],table:{category:"Layout"}},status:{control:"select",options:["default","success","warning","danger","info"],table:{category:"State"}},disabled:{control:"boolean",table:{category:"State"}},loading:{control:"boolean",table:{category:"State"}},showHeader:{control:"boolean",table:{category:"Display"}},showActions:{control:"boolean",table:{category:"Display"}},color:{control:"color",table:{category:"Appearance"}}},args:{title:"ClientOnly",description:"ClientOnly 컴포넌트의 주요 상태와 옵션을 Controls에서 조절합니다.",items:a,variant:"soft",size:"md",orientation:"vertical",density:"comfortable",status:"default",disabled:!1,loading:!1,showHeader:!0,showActions:!0,color:"#2563eb"}},s={name:"기본"},o={name:"상태 비교",render:()=>e.jsxs("div",{style:{display:"grid",gap:12,width:560},children:[e.jsx(t,{title:"기본",items:a}),e.jsx(t,{title:"로딩",loading:!0,items:a}),e.jsx(t,{title:"비활성",disabled:!0,items:a}),e.jsx(t,{title:"위험 상태",status:"danger",items:a})]}),parameters:{controls:{disable:!0}}},r={name:"스타일 비교",render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(240px, 1fr))",gap:12,width:640},children:[e.jsx(t,{title:"Soft",variant:"soft",showActions:!1,items:a}),e.jsx(t,{title:"Solid",variant:"solid",showActions:!1,items:a}),e.jsx(t,{title:"Outline",variant:"outline",showActions:!1,items:a}),e.jsx(t,{title:"Ghost",variant:"ghost",showActions:!1,items:a})]}),parameters:{controls:{disable:!0}}},n={name:"컴팩트",args:{density:"compact",size:"sm",showActions:!1}},i={name:"가로 배치",args:{orientation:"horizontal",status:"info"}};var c,m,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '기본'
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,u,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '상태 비교',
  render: () => <div style={{
    display: 'grid',
    gap: 12,
    width: 560
  }}>
      <ClientOnly title="기본" items={sampleItems} />
      <ClientOnly title="로딩" loading items={sampleItems} />
      <ClientOnly title="비활성" disabled items={sampleItems} />
      <ClientOnly title="위험 상태" status="danger" items={sampleItems} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(y=(u=o.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,f,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '스타일 비교',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(240px, 1fr))',
    gap: 12,
    width: 640
  }}>
      <ClientOnly title="Soft" variant="soft" showActions={false} items={sampleItems} />
      <ClientOnly title="Solid" variant="solid" showActions={false} items={sampleItems} />
      <ClientOnly title="Outline" variant="outline" showActions={false} items={sampleItems} />
      <ClientOnly title="Ghost" variant="ghost" showActions={false} items={sampleItems} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,v,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '컴팩트',
  args: {
    density: 'compact',
    size: 'sm',
    showActions: false
  }
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var C,w,O;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '가로 배치',
  args: {
    orientation: 'horizontal',
    status: 'info'
  }
}`,...(O=(w=i.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};const F=["Default","States","Variants","Compact","Horizontal"];export{n as Compact,s as Default,i as Horizontal,o as States,r as Variants,F as __namedExportsOrder,E as default};
