import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{d as I}from"./reference-types-4ftiVeOu.js";import{P as r}from"./PasswordInput-DqgvI27g.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CkIaN0ex.js";import"./utils-DCADjnpI.js";const x=I([{library:"GOV.UK Design System",component:"Password input",url:"https://design-system.service.gov.uk/components/password-input/",usedFor:["behavior","accessibility","comparison"],relation:"compared"},{library:"Mantine UI",component:"Password with strength meter",url:"https://ui.mantine.dev/category/inputs/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."},{library:"Chakra UI",component:"Password Input",url:"https://www.chakra-ui.com/docs/components/password-input",usedFor:["comparison"],relation:"compared"}]),F={title:"Molecules/Forms/PasswordInput",component:r,tags:["autodocs","ref:chakra-ui","ref:mantine-ui","ref:govuk"],parameters:{references:x,layout:"centered",docs:{description:{component:"React Storybook용으로 재구성한 PasswordInput 스토리입니다. 상태, 크기, 변형, 콘텐츠 옵션을 Controls에서 조절합니다."}}},argTypes:{label:{control:"text",table:{category:"Content"}},text:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},variant:{control:"select",options:["default","primary","secondary","success","warning","danger","info"],table:{category:"Appearance"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},selected:{control:"boolean",table:{category:"State"}},active:{control:"boolean",table:{category:"State"}},disabled:{control:"boolean",table:{category:"State"}},loading:{control:"boolean",table:{category:"State"}}},args:{label:"PasswordInput",text:"PasswordInput",description:"PasswordInput 설명 텍스트",variant:"default",size:"md",selected:!1,active:!1,disabled:!1,loading:!1},render:e=>a.jsx(r,{...e,children:e.children??e.label??e.text})},t={name:"기본"},s={name:"상태 비교",render:()=>a.jsxs("div",{style:{display:"grid",gap:12,minWidth:320},children:[a.jsx(r,{label:"기본",children:"기본"}),a.jsx(r,{label:"선택됨",selected:!0,active:!0,children:"선택됨"}),a.jsx(r,{label:"비활성",disabled:!0,children:"비활성"}),a.jsx(r,{label:"로딩",loading:!0,children:"로딩"})]}),parameters:{controls:{disable:!0}}},n={name:"변형 비교",render:()=>a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,alignItems:"center"},children:["default","primary","secondary","success","warning","danger","info"].map(e=>a.jsx(r,{variant:e,label:e,children:e},e))}),parameters:{controls:{disable:!0}}},o={name:"긴 콘텐츠",args:{label:"긴 텍스트 콘텐츠가 들어간 PasswordInput",description:"레이아웃이 긴 텍스트에서도 안정적인지 확인합니다."}};var l,i,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '기본'
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,p,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '상태 비교',
  render: () => <div style={{
    display: 'grid',
    gap: 12,
    minWidth: 320
  }}>
      <PasswordInput label="기본">기본</PasswordInput>
      <PasswordInput label="선택됨" selected active>선택됨</PasswordInput>
      <PasswordInput label="비활성" disabled>비활성</PasswordInput>
      <PasswordInput label="로딩" loading>로딩</PasswordInput>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '변형 비교',
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    alignItems: 'center'
  }}>
      {['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info'].map(variant => <PasswordInput key={variant} variant={variant as any} label={variant}>{variant}</PasswordInput>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,w,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '긴 콘텐츠',
  args: {
    label: '긴 텍스트 콘텐츠가 들어간 PasswordInput',
    description: '레이아웃이 긴 텍스트에서도 안정적인지 확인합니다.'
  } as any
}`,...(f=(w=o.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};const U=["Default","States","Variants","LongContent"];export{t as Default,o as LongContent,s as States,n as Variants,U as __namedExportsOrder,F as default};
