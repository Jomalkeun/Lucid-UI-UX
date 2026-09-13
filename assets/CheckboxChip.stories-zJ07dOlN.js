import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as V}from"./index-BxXVWNx3.js";import{C as r}from"./CheckboxChip-cKegvhTi.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DCADjnpI.js";const _={title:"Atoms/Inputs/Checkbox/CheckboxChip",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"\n## CheckboxChip\n\nCheckbox처럼 복수 선택할 수 있는 칩형 입력입니다.\n표준적인 `checked`, `defaultChecked`, `onCheckedChange` API를 지원하며, 기존 `selected`도 호환됩니다.\n        "}}},argTypes:{label:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},variant:{control:"select",options:["default","primary","secondary","success","warning","danger","info"],table:{category:"Appearance"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},checked:{control:"boolean",table:{category:"State"}},selected:{control:"boolean",table:{category:"State"}},disabled:{control:"boolean",table:{category:"State"}},loading:{control:"boolean",table:{category:"State"}}},args:{label:"혜택",variant:"primary",size:"md",checked:!1,disabled:!1,loading:!1}},c={name:"기본"},o={name:"제어형",render:()=>{const[t,w]=V.useState(["benefit","event"]),A=(a,d)=>{w(s=>d?[...s,a]:s.filter(D=>D!==a))};return e.jsxs("div",{className:"grid gap-3",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:[["benefit","혜택"],["event","이벤트"],["notice","공지"],["tip","팁"]].map(([a,d])=>e.jsx(r,{value:a,label:d,checked:t.includes(a),onCheckedChange:s=>A(a,s),variant:"primary"},a))}),e.jsxs("p",{className:"text-krds-body-xs text-krds-gray-60",children:["선택 항목: ",t.join(", ")||"없음"]})]})},parameters:{controls:{disable:!0}}},l={name:"상태",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{label:"기본"}),e.jsx(r,{label:"선택됨",checked:!0}),e.jsx(r,{label:"비활성",disabled:!0}),e.jsx(r,{label:"로딩",loading:!0})]}),parameters:{controls:{disable:!0}}},n={name:"Variant",render:()=>e.jsx("div",{className:"flex flex-wrap gap-2",children:["default","primary","secondary","success","warning","danger","info"].map(t=>e.jsx(r,{variant:t,label:t,checked:!0},t))}),parameters:{controls:{disable:!0}}},i={name:"설명",args:{label:"마케팅",description:"선택",checked:!0}};var p,m,b;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '기본'
}`,...(b=(m=c.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var u,g,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '제어형',
  render: () => {
    const [selected, setSelected] = React.useState(['benefit', 'event']);
    const toggle = (value: string, checked: boolean) => {
      setSelected(current => checked ? [...current, value] : current.filter(item => item !== value));
    };
    return <div className="grid gap-3">
        <div className="flex flex-wrap gap-2">
          {[['benefit', '혜택'], ['event', '이벤트'], ['notice', '공지'], ['tip', '팁']].map(([value, label]) => <CheckboxChip key={value} value={value} label={label} checked={selected.includes(value)} onCheckedChange={checked => toggle(value, checked)} variant="primary" />)}
        </div>
        <p className="text-krds-body-xs text-krds-gray-60">선택 항목: {selected.join(', ') || '없음'}</p>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,k,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '상태',
  render: () => <div className="flex flex-wrap gap-2">
      <CheckboxChip label="기본" />
      <CheckboxChip label="선택됨" checked />
      <CheckboxChip label="비활성" disabled />
      <CheckboxChip label="로딩" loading />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(f=(k=l.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var C,v,y;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Variant',
  render: () => <div className="flex flex-wrap gap-2">
      {(['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info'] as const).map(variant => <CheckboxChip key={variant} variant={variant} label={variant} checked />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var S,j,N;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '설명',
  args: {
    label: '마케팅',
    description: '선택',
    checked: true
  }
}`,...(N=(j=i.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const O=["Default","Controlled","States","Variants","WithDescription"];export{o as Controlled,c as Default,l as States,n as Variants,i as WithDescription,O as __namedExportsOrder,_ as default};
