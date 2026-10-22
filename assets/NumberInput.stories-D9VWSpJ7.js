import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./index-BxXVWNx3.js";import{d as V}from"./reference-types-CC3VHbJD.js";import{N}from"./NumberInput-D9_a203z.js";import"./_commonjsHelpers-CqkleIqs.js";import"./numeric-DcYt7Gyg.js";const k=V([{library:"Mantine UI",component:"Number input with currency select",url:"https://ui.mantine.dev/category/inputs/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."},{library:"Ant Design",component:"InputNumber",url:"https://ant.design/components/input-number/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Number Input",url:"https://www.chakra-ui.com/docs/components/number-input",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Number Field",url:"https://base-ui.com/react/components/number-field",usedFor:["comparison"],relation:"compared"}]),w={title:"Molecules/Forms/NumberInput",component:N,tags:["autodocs","ref:ant-design","ref:chakra-ui","ref:base-ui","ref:mantine-ui"],parameters:{references:k,docs:{description:{component:"\n## NumberInput\n\n숫자 값 입력을 위한 KRDS 기반 스테퍼 입력입니다.\n표준 input 속성에 `min`, `max`, `step`을 적용하고, 증감 버튼으로 값을 조절할 수 있습니다.\n        "}}},argTypes:{label:{control:"text",table:{category:"Content"}},value:{control:"number",table:{category:"State"}},defaultValue:{control:"number",table:{category:"State"}},min:{control:"number",table:{category:"Validation"}},max:{control:"number",table:{category:"Validation"}},step:{control:"number",table:{category:"Validation"}},placeholder:{control:"text",table:{category:"Content"}},disabled:{control:"boolean",table:{category:"State"}},error:{control:"boolean",table:{category:"State"}},errorMessage:{control:"text",table:{category:"Validation"}},hint:{control:"text",table:{category:"Content"}}},args:{label:"수량",value:1,min:0,max:100,step:1,disabled:!1,error:!1,errorMessage:"유효한 숫자를 입력하세요.",hint:"0에서 100 사이의 값을 입력하세요."}},e={name:"기본"},r={name:"제어형",render:()=>{const[s,I]=C.useState(3);return n.jsxs("div",{className:"grid gap-3",children:[n.jsx(N,{label:"인원",value:s,min:1,max:10,onChange:I}),n.jsxs("p",{className:"text-krds-body-xs text-krds-gray-60",children:["현재 값: ",s]})]})},parameters:{controls:{disable:!0}}},a={name:"범위 제한",args:{label:"할인율(%)",min:0,max:100,step:5,value:10,hint:"0에서 100% 범위에서 5 단위로 입력합니다."}},t={name:"오류",args:{value:100,error:!0,errorMessage:"허용 범위를 확인하세요."}},o={name:"비활성",args:{disabled:!0,value:5}};var l,c,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '기본'
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,u,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '제어형',
  render: () => {
    const [value, setValue] = React.useState(3);
    return <div className="grid gap-3">
        <NumberInput label="인원" value={value} min={1} max={10} onChange={setValue} />
        <p className="text-krds-body-xs text-krds-gray-60">현재 값: {value}</p>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,b,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '범위 제한',
  args: {
    label: '할인율(%)',
    min: 0,
    max: 100,
    step: 5,
    value: 10,
    hint: '0에서 100% 범위에서 5 단위로 입력합니다.'
  }
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var x,y,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '오류',
  args: {
    value: 100,
    error: true,
    errorMessage: '허용 범위를 확인하세요.'
  }
}`,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var f,v,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '비활성',
  args: {
    disabled: true,
    value: 5
  }
}`,...(S=(v=o.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const U=["Default","Controlled","WithRange","ErrorState","Disabled"];export{r as Controlled,e as Default,o as Disabled,t as ErrorState,a as WithRange,U as __namedExportsOrder,w as default};
