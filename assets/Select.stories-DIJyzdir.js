import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as R}from"./reference-types-4ftiVeOu.js";import{N as c}from"./native-select-CDOp0YqN.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DCADjnpI.js";import"./chevron-down-D49U3Rzo.js";import"./createLucideIcon-Ct87QT5c.js";const i=[{value:"",label:"선택하세요"},{value:"tworld",label:"옵션1"},{value:"tmembership",label:"옵션2"},{value:"tuniverse",label:"옵션3"}],k=R([{library:"Bootstrap",component:"Select",url:"https://getbootstrap.com/docs/5.3/forms/select/",usedFor:["comparison"],relation:"compared"},{library:"React Aria",component:"Select",url:"https://react-spectrum.adobe.com/react-aria/Select.html",usedFor:["behavior","api","accessibility"],relation:"compared"},{library:"U.S. Web Design System",component:"Select",url:"https://designsystem.digital.gov/components/select/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"GOV.UK Design System",component:"Select",url:"https://design-system.service.gov.uk/components/select/",usedFor:["behavior","accessibility","comparison"],relation:"compared"},{library:"KRDS",component:"Select",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-select--docs",usedFor:["design","behavior","api"],relation:"adapted"},{library:"shadcn/ui",component:"Native Select",url:"https://ui.shadcn.com/docs/components/native-select",usedFor:["comparison"],relation:"compared"},{library:"Ant Design",component:"Select",url:"https://ant.design/components/select/",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Select",url:"https://quasar.dev/vue-components/select",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Select",url:"https://base-ui.com/react/components/select",usedFor:["comparison"],relation:"compared"},{library:"Open UI",component:"Select Research",url:"https://open-ui.org/components/select.research/",usedFor:["behavior","accessibility","comparison"],relation:"compared"}]),B={title:"Atoms/Inputs/Select",component:c,tags:["ref:bootstrap","autodocs","ref:shadcn-ui","ref:ant-design","ref:quasar","ref:base-ui","ref:govuk","ref:uswds","ref:open-ui","ref:react-aria"],parameters:{references:k,docs:{description:{component:'\n## Select\n\nKRDS 토큰으로 스타일링한 native select입니다.\n표준 `value`, `defaultValue`, `onChange` API를 사용하며, 기존 호환을 위해 `modelValue`도 지원합니다.\n\n`variant="sort"`는 라벨 없이 정렬/필터 제어로 사용할 때 사용합니다.\n        '}}},argTypes:{label:{control:"text",table:{category:"Content"}},title:{control:"text",table:{category:"Content"}},options:{control:"object",table:{category:"Content"}},hint:{control:"text",table:{category:"Content"}},errorMessage:{control:"text",table:{category:"Validation"}},status:{control:"select",options:["default","error","completed"],table:{category:"Validation"}},variant:{control:"select",options:["default","sort"],table:{category:"Appearance"}},size:{control:"select",options:["small","medium","large"],table:{category:"Appearance"}},disabled:{control:"boolean",table:{category:"State"}}},args:{label:"노출 채널",title:"채널 선택",options:i,hint:"",size:"large",variant:"default",status:"default",disabled:!1}},t={name:"기본"},a={name:"힌트",args:{hint:"채널별 노출 규칙이 다르게 적용됩니다."}},r={name:"오류",args:{status:"error",errorMessage:"채널을 선택하세요."}},o={name:"완료",args:{status:"completed",value:"tworld"}},s={name:"크기",render:()=>e.jsxs("div",{className:"grid w-80 gap-4",children:[e.jsx(c,{label:"small",size:"small",title:"small 선택",options:i}),e.jsx(c,{label:"medium",size:"medium",title:"medium 선택",options:i}),e.jsx(c,{label:"large",size:"large",title:"large 선택",options:i})]}),parameters:{controls:{disable:!0}}},l={name:"정렬",args:{variant:"sort",title:"정렬 기준 선택",options:[{value:"latest",label:"최신순"},{value:"oldest",label:"등록순"},{value:"name",label:"이름순"}],defaultValue:"latest"}},n={name:"비활성",args:{disabled:!0}};var m,p,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '기본'
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,b,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '힌트',
  args: {
    hint: '채널별 노출 규칙이 다르게 적용됩니다.'
  }
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var v,S,h;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '오류',
  args: {
    status: 'error',
    errorMessage: '채널을 선택하세요.'
  }
}`,...(h=(S=r.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var y,f,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '완료',
  args: {
    status: 'completed',
    value: 'tworld'
  }
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var z,F,w;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '크기',
  render: () => <div className="grid w-80 gap-4">
      <Select label="small" size="small" title="small 선택" options={sampleOptions} />
      <Select label="medium" size="medium" title="medium 선택" options={sampleOptions} />
      <Select label="large" size="large" title="large 선택" options={sampleOptions} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(w=(F=s.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var D,V,j;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '정렬',
  args: {
    variant: 'sort',
    title: '정렬 기준 선택',
    options: [{
      value: 'latest',
      label: '최신순'
    }, {
      value: 'oldest',
      label: '등록순'
    }, {
      value: 'name',
      label: '이름순'
    }],
    defaultValue: 'latest'
  }
}`,...(j=(V=l.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var C,O,A;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '비활성',
  args: {
    disabled: true
  }
}`,...(A=(O=n.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const H=["Default","WithHint","Error","Completed","Sizes","SortVariant","Disabled"];export{o as Completed,t as Default,n as Disabled,r as Error,s as Sizes,l as SortVariant,a as WithHint,H as __namedExportsOrder,B as default};
