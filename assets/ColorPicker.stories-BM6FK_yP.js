import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as V}from"./index-BxXVWNx3.js";import{d as w}from"./reference-types-4ftiVeOu.js";import{C as r}from"./ColorPicker-BXWCTc91.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DCADjnpI.js";import"./ColorSwatch-CTYshdjv.js";import"./check-CvnDgXMx.js";import"./createLucideIcon-Ct87QT5c.js";const D=w([{library:"Ark UI",component:"Color Picker",url:"https://ark-ui.com/docs/components/color-picker",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Element Plus",component:"Color Picker",url:"https://element-plus.org/en-US/component/color-picker",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Ant Design",component:"ColorPicker",url:"https://ant.design/components/color-picker/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Color Picker",url:"https://www.chakra-ui.com/docs/components/color-picker",usedFor:["comparison"],relation:"compared"}]),W={title:"Molecules/Forms/ColorPicker",component:r,tags:["autodocs","inputs","ref:ant-design","ref:chakra-ui","ref:ark-ui","ref:element-plus"],parameters:{references:D,layout:"centered",docs:{description:{component:"브랜드, 테마, 차트 등에서 HEX 색상을 선택하는 입력 컴포넌트입니다."}}},argTypes:{label:{control:"text",table:{category:"Content"}},value:{control:"color",table:{category:"State"}},size:{control:"inline-radio",options:["small","medium","large"],table:{category:"Appearance"}},showValue:{control:"boolean",table:{category:"Appearance"}},disabled:{control:"boolean",table:{category:"State"}},hint:{control:"text",table:{category:"Content"}},error:{control:"text",table:{category:"Content"}}},args:{label:"브랜드 색상",value:"#256ef4",size:"medium",showValue:!0,disabled:!1,hint:"",error:""}},a={name:"기본"},o={name:"힌트 포함",args:{label:"포인트 색상",value:"#d50136",hint:"브랜드 아이덴티티 색상을 선택하세요."}},s={name:"제어 상태",render:()=>{const[c,E]=V.useState("#008a1e");return e.jsx(r,{label:"차트 색상",value:c,onValueChange:E,hint:`현재 선택값: ${c.toUpperCase()}`})},parameters:{controls:{disable:!0}}},t={name:"크기",render:()=>e.jsxs("div",{className:"grid gap-3",children:[e.jsx(r,{label:"Small",value:"#256ef4",size:"small"}),e.jsx(r,{label:"Medium",value:"#008a1e",size:"medium"}),e.jsx(r,{label:"Large",value:"#d50136",size:"large"})]}),parameters:{controls:{disable:!0}}},n={name:"비활성화",args:{disabled:!0}},l={name:"오류",args:{error:"사용할 수 없는 색상입니다."}};var i,m,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '기본'
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,d,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '힌트 포함',
  args: {
    label: '포인트 색상',
    value: '#d50136',
    hint: '브랜드 아이덴티티 색상을 선택하세요.'
  }
}`,...(b=(d=o.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var g,h,C;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '제어 상태',
  render: () => {
    const [value, setValue] = useState('#008a1e');
    return <ColorPicker label="차트 색상" value={value} onValueChange={setValue} hint={\`현재 선택값: \${value.toUpperCase()}\`} />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(C=(h=s.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var k,v,f;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '크기',
  render: () => <div className="grid gap-3">
      <ColorPicker label="Small" value="#256ef4" size="small" />
      <ColorPicker label="Medium" value="#008a1e" size="medium" />
      <ColorPicker label="Large" value="#d50136" size="large" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,S,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '비활성화',
  args: {
    disabled: true
  }
}`,...(x=(S=n.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var P,z,j;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '오류',
  args: {
    error: '사용할 수 없는 색상입니다.'
  }
}`,...(j=(z=l.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};const _=["Default","WithHint","Controlled","Sizes","Disabled","Error"];export{s as Controlled,a as Default,n as Disabled,l as Error,t as Sizes,o as WithHint,_ as __namedExportsOrder,W as default};
