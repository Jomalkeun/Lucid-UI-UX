import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as N}from"./index-BxXVWNx3.js";import{d as k}from"./reference-types-4ftiVeOu.js";import{S as t}from"./SegmentedControl-B00SHzWA.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CkIaN0ex.js";import"./utils-DCADjnpI.js";const a=[{value:"list",label:"목록"},{value:"grid",label:"그리드"},{value:"chart",label:"차트"}],F=k([{library:"Mantine UI",component:"Gradient segmented control",url:"https://ui.mantine.dev/category/inputs/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."},{library:"Ant Design",component:"Segmented",url:"https://ant.design/components/segmented/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Segmented Control",url:"https://www.chakra-ui.com/docs/components/segmented-control",usedFor:["comparison"],relation:"compared"}]),E={title:"Molecules/Forms/SegmentedControl",component:t,tags:["autodocs","ref:ant-design","ref:chakra-ui","ref:mantine-ui"],parameters:{references:F,layout:"centered",docs:{description:{component:`
## SegmentedControl

서로 배타적인 보기/필터 옵션 중 하나를 빠르게 전환하는 컨트롤입니다.
역할이 Radix ToggleGroup과 비슷하지만, 하나 선택 UI에 특화된 자체 구현입니다.
        `}}},argTypes:{value:{control:"select",options:a.map(r=>r.value),table:{category:"State"}},defaultValue:{control:"select",options:a.map(r=>r.value),table:{category:"State"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},variant:{control:"inline-radio",options:["solid","soft","outline"],table:{category:"Appearance"}},fullWidth:{control:"boolean",table:{category:"Layout"}},disabled:{control:"boolean",table:{category:"State"}},ariaLabel:{control:"text",table:{category:"Accessibility"}}},args:{options:a,defaultValue:"list",size:"md",variant:"soft",fullWidth:!1,disabled:!1,ariaLabel:"보기 방식"}},o={name:"기본"},s={name:"제어형",render:r=>{const[d,z]=N.useState("list");return e.jsxs("div",{className:"grid gap-3",children:[e.jsx(t,{...r,value:d,onValueChange:z}),e.jsxs("p",{className:"text-krds-body-xs text-krds-gray-60",children:["선택 값: ",d]})]})}},l={name:"Variant",render:()=>e.jsxs("div",{className:"grid gap-3",children:[e.jsx(t,{options:a,defaultValue:"list",variant:"soft"}),e.jsx(t,{options:a,defaultValue:"grid",variant:"outline"}),e.jsx(t,{options:a,defaultValue:"chart",variant:"solid"})]}),parameters:{controls:{disable:!0}}},n={name:"크기",render:()=>e.jsxs("div",{className:"grid gap-3",children:[e.jsx(t,{options:a,defaultValue:"list",size:"sm"}),e.jsx(t,{options:a,defaultValue:"list",size:"md"}),e.jsx(t,{options:a,defaultValue:"list",size:"lg"})]}),parameters:{controls:{disable:!0}}},i={name:"전체 너비",render:()=>e.jsx("div",{className:"w-96",children:e.jsx(t,{options:a,defaultValue:"list",fullWidth:!0})}),parameters:{controls:{disable:!0}}};var c,m,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '기본'
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '제어형',
  render: args => {
    const [value, setValue] = React.useState('list');
    return <div className="grid gap-3">
        <SegmentedControl {...args} value={value} onValueChange={setValue} />
        <p className="text-krds-body-xs text-krds-gray-60">선택 값: {value}</p>
      </div>;
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,b,x;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Variant',
  render: () => <div className="grid gap-3">
      <SegmentedControl options={options} defaultValue="list" variant="soft" />
      <SegmentedControl options={options} defaultValue="grid" variant="outline" />
      <SegmentedControl options={options} defaultValue="chart" variant="solid" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(x=(b=l.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var S,V,h;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '크기',
  render: () => <div className="grid gap-3">
      <SegmentedControl options={options} defaultValue="list" size="sm" />
      <SegmentedControl options={options} defaultValue="list" size="md" />
      <SegmentedControl options={options} defaultValue="list" size="lg" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(h=(V=n.parameters)==null?void 0:V.docs)==null?void 0:h.source}}};var y,C,j;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '전체 너비',
  render: () => <div className="w-96">
      <SegmentedControl options={options} defaultValue="list" fullWidth />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(j=(C=i.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const L=["Default","Controlled","Variants","Sizes","FullWidth"];export{s as Controlled,o as Default,i as FullWidth,n as Sizes,l as Variants,L as __namedExportsOrder,E as default};
