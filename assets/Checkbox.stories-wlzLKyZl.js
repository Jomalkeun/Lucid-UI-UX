import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as j}from"./index-BxXVWNx3.js";import{d as F}from"./reference-types-4ftiVeOu.js";import{C as r}from"./checkbox-BOrDudnk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DtBajwEi.js";import"./index-Cuo70N6w.js";import"./index-BIfB_hJr.js";import"./index-D63pzw-_.js";import"./index-BjCkHmxr.js";import"./index-D_4yO-tZ.js";import"./index-DnJVWBh-.js";import"./index-BuIYde5q.js";import"./index-DCvtqWl1.js";import"./index-CkIaN0ex.js";import"./utils-DCADjnpI.js";import"./loader-circle-Db56uVXG.js";import"./createLucideIcon-Ct87QT5c.js";import"./check-CvnDgXMx.js";const N=F([{library:"Bootstrap",component:"Checks and radios",url:"https://getbootstrap.com/docs/5.3/forms/checks-radios/",usedFor:["comparison"],relation:"compared"},{library:"U.S. Web Design System",component:"Checkbox",url:"https://designsystem.digital.gov/components/checkbox/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"GOV.UK Design System",component:"Checkboxes",url:"https://design-system.service.gov.uk/components/checkboxes/",usedFor:["behavior","accessibility","comparison"],relation:"compared"},{library:"Radix UI",component:"Checkbox",url:"https://www.radix-ui.com/primitives/docs/components/checkbox",usedFor:["behavior","accessibility","api"],relation:"primitive"},{library:"KRDS",component:"Checkbox",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-checkbox--docs",usedFor:["design","behavior","api"],relation:"adapted"},{library:"shadcn/ui",component:"Checkbox",url:"https://ui.shadcn.com/docs/components/checkbox",usedFor:["comparison"],relation:"compared"},{library:"Mantine UI",component:"Checkbox with image",url:"https://ui.mantine.dev/category/inputs/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."},{library:"Ant Design",component:"Checkbox",url:"https://ant.design/components/checkbox/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Checkbox",url:"https://www.chakra-ui.com/docs/components/checkbox",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Checkbox",url:"https://quasar.dev/vue-components/checkbox",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Checkbox",url:"https://base-ui.com/react/components/checkbox",usedFor:["comparison"],relation:"compared"}]),W={title:"Atoms/Inputs/Checkbox/Checkbox",component:r,tags:["ref:bootstrap","autodocs","ref:shadcn-ui","ref:ant-design","ref:quasar","ref:chakra-ui","ref:base-ui","ref:mantine-ui","ref:radix-ui","ref:govuk","ref:uswds"],parameters:{references:N,layout:"centered",docs:{description:{component:"\n## Checkbox\n\nRadix Checkbox primitive를 KRDS 상태 토큰과 shadcn/ui 스타일의 variant API로 감싼 체크박스입니다.\n`checked`, `defaultChecked`, `onCheckedChange`를 그대로 사용할 수 있고, 기존 호환을 위해 `selected`도 지원합니다.\n        "}}},argTypes:{label:{control:"text",table:{category:"Content"}},text:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},variant:{control:"select",options:["default","primary","secondary","success","warning","danger","info"],table:{category:"Appearance"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},checked:{control:"boolean",table:{category:"State"}},selected:{control:"boolean",table:{category:"State"}},disabled:{control:"boolean",table:{category:"State"}},loading:{control:"boolean",table:{category:"State"}}},args:{label:"이용 약관에 동의합니다",description:"서비스 이용을 위해 필수로 확인해야 합니다.",variant:"primary",size:"md",disabled:!1,loading:!1}},o={name:"기본"},t={name:"제어형",render:()=>{const[a,w]=j.useState(!1);return e.jsxs("div",{className:"grid gap-3",children:[e.jsx(r,{checked:a,onCheckedChange:S=>w(S===!0),label:"마케팅 수신 동의"}),e.jsxs("p",{className:"text-krds-body-xs text-krds-gray-60",children:["현재 상태: ",a?"동의":"미동의"]})]})},parameters:{controls:{disable:!0}}},s={name:"상태",render:()=>e.jsxs("div",{className:"grid min-w-80 gap-3",children:[e.jsx(r,{label:"기본"}),e.jsx(r,{label:"선택됨",defaultChecked:!0}),e.jsx(r,{label:"비활성",disabled:!0}),e.jsx(r,{label:"로딩",loading:!0,defaultChecked:!0})]}),parameters:{controls:{disable:!0}}},c={name:"Variant",render:()=>e.jsx("div",{className:"flex flex-wrap items-center gap-3",children:["default","primary","secondary","success","warning","danger","info"].map(a=>e.jsx(r,{variant:a,label:a,defaultChecked:!0},a))}),parameters:{controls:{disable:!0}}},n={name:"긴 설명",args:{label:"개인정보 수집 및 이용에 동의합니다",description:"선택한 서비스 제공과 상담 이력 관리를 위해 필요한 범위 안에서 개인정보를 수집합니다."}};var i,d,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '기본'
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '제어형',
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return <div className="grid gap-3">
        <Checkbox checked={checked} onCheckedChange={value => setChecked(value === true)} label="마케팅 수신 동의" />
        <p className="text-krds-body-xs text-krds-gray-60">현재 상태: {checked ? '동의' : '미동의'}</p>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var b,h,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '상태',
  render: () => <div className="grid min-w-80 gap-3">
      <Checkbox label="기본" />
      <Checkbox label="선택됨" defaultChecked />
      <Checkbox label="비활성" disabled />
      <Checkbox label="로딩" loading defaultChecked />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var k,x,C;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Variant',
  render: () => <div className="flex flex-wrap items-center gap-3">
      {(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info'] as const).map(variant => <Checkbox key={variant} variant={variant} label={variant} defaultChecked />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(C=(x=c.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var y,f,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '긴 설명',
  args: {
    label: '개인정보 수집 및 이용에 동의합니다',
    description: '선택한 서비스 제공과 상담 이력 관리를 위해 필요한 범위 안에서 개인정보를 수집합니다.'
  }
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const H=["Default","Controlled","States","Variants","LongContent"];export{t as Controlled,o as Default,n as LongContent,s as States,c as Variants,H as __namedExportsOrder,W as default};
