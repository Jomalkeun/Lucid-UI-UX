import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-BxXVWNx3.js";import{d as k}from"./reference-types-4ftiVeOu.js";import{C as r}from"./ColorSwatch-CTYshdjv.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DCADjnpI.js";import"./check-CvnDgXMx.js";import"./createLucideIcon-Ct87QT5c.js";const N=k([{library:"Chakra UI",component:"Color Swatch",url:"https://www.chakra-ui.com/docs/components/color-swatch",usedFor:["comparison"],relation:"compared"}]),n=[{label:"KRDS Primary",color:"#256ef4"},{label:"Success",color:"#008a1e"},{label:"Warning",color:"#ffb724"},{label:"Danger",color:"#d50136"},{label:"Gray",color:"#58616a"}],F={title:"Atoms/Inputs/Color/ColorSwatch",component:r,tags:["autodocs","inputs","ref:chakra-ui"],parameters:{references:N,layout:"centered",docs:{description:{component:"색상 선택 UI에서 단일 색상을 표시하고 선택 상태를 표현하는 버튼형 스와치입니다."}}},argTypes:{color:{control:"color",table:{category:"Appearance"}},label:{control:"text",table:{category:"Content"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},selected:{control:"boolean",table:{category:"State"}},disabled:{control:"boolean",table:{category:"State"}}},args:{color:"#256ef4",label:"KRDS Primary",size:"md",selected:!1,disabled:!1}},a={name:"기본"},t={name:"선택됨",args:{selected:!0}},s={name:"크기",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{color:"#256ef4",label:"작게",size:"sm"}),e.jsx(r,{color:"#256ef4",label:"보통",size:"md",selected:!0}),e.jsx(r,{color:"#256ef4",label:"크게",size:"lg"})]}),parameters:{controls:{disable:!0}}},l={name:"팔레트",render:()=>{const[j,D]=v.useState(n[0].color);return e.jsx("div",{className:"flex items-center gap-3",children:n.map(o=>e.jsx(r,{color:o.color,label:o.label,selected:j===o.color,onSelect:D},o.color))})},parameters:{controls:{disable:!0}}},c={name:"비활성화",args:{disabled:!0}};var m,d,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '기본'
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,u,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '선택됨',
  args: {
    selected: true
  }
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var S,f,g;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '크기',
  render: () => <div className="flex items-center gap-4">
      <ColorSwatch color="#256ef4" label="작게" size="sm" />
      <ColorSwatch color="#256ef4" label="보통" size="md" selected />
      <ColorSwatch color="#256ef4" label="크게" size="lg" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var C,x,h;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '팔레트',
  render: () => {
    const [selectedColor, setSelectedColor] = useState(palette[0].color);
    return <div className="flex items-center gap-3">
        {palette.map(item => <ColorSwatch key={item.color} color={item.color} label={item.label} selected={selectedColor === item.color} onSelect={setSelectedColor} />)}
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(h=(x=l.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var y,w,z;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '비활성화',
  args: {
    disabled: true
  }
}`,...(z=(w=c.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const G=["Default","Selected","Sizes","Palette","Disabled"];export{a as Default,c as Disabled,l as Palette,t as Selected,s as Sizes,G as __namedExportsOrder,F as default};
