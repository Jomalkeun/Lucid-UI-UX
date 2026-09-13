import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-BxXVWNx3.js";import{d as D}from"./reference-types-4ftiVeOu.js";import{S as V}from"./switch-BlMD-Qvg.js";import{c as p}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BIfB_hJr.js";import"./index-Cuo70N6w.js";import"./index-DtBajwEi.js";import"./index-D63pzw-_.js";import"./index-BjCkHmxr.js";import"./index-DnJVWBh-.js";import"./index-BuIYde5q.js";import"./index-DCvtqWl1.js";import"./index-CkIaN0ex.js";const r=l.forwardRef(({id:a,label:o,checked:S,modelValue:T,defaultChecked:F,size:j="medium",disabled:n=!1,className:O,wrapperClassName:R,...I},z)=>{const q=l.useId(),i=a??q,m=S??T;return e.jsxs("div",{className:p("flex items-center gap-2",R),children:[e.jsx(V,{ref:z,id:i,size:j,disabled:n,checked:m,defaultChecked:m===void 0?F:void 0,className:O,...I}),o?e.jsx("label",{htmlFor:i,className:p("cursor-pointer select-none text-krds-body-md text-foreground",n&&"cursor-not-allowed opacity-50"),children:o}):null]})});r.displayName="Toggle";r.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},modelValue:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'large'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const A=D([{library:"Bootstrap",component:"Button toggle states",url:"https://getbootstrap.com/docs/5.3/components/buttons/#toggle-states",usedFor:["comparison"],relation:"compared"},{library:"KRDS",component:"ToggleSwitch",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-toggleswitch--docs",usedFor:["design","behavior","api"],relation:"adapted"},{library:"shadcn/ui",component:"Switch",url:"https://ui.shadcn.com/docs/components/switch",usedFor:["comparison"],relation:"compared"},{library:"Mantine UI",component:"Custom switch",url:"https://ui.mantine.dev/category/inputs/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."},{library:"Ant Design",component:"Switch",url:"https://ant.design/components/switch/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Switch",url:"https://www.chakra-ui.com/docs/components/switch",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Toggle",url:"https://quasar.dev/vue-components/toggle",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Toggle",url:"https://base-ui.com/react/components/toggle",usedFor:["comparison"],relation:"compared"}]),Z={title:"Atoms/Inputs/Toggle/Toggle",component:r,tags:["ref:bootstrap","autodocs","ref:shadcn-ui","ref:ant-design","ref:quasar","ref:chakra-ui","ref:base-ui","ref:mantine-ui"],parameters:{references:A,docs:{description:{component:"\n## Toggle\n\nRadix Switch primitive를 KRDS 토큰으로 감싼 이진 설정 컴포넌트입니다.\n즉시 반영되는 ON/OFF 설정에 사용하고, 제출 전 동의나 다중 선택에는 Checkbox를 사용합니다.\n\n표준 `checked`, `defaultChecked`, `onCheckedChange` API를 사용하며 기존 호환을 위해 `modelValue`도 지원합니다.\n        "}}},argTypes:{label:{control:"text",table:{category:"Content"}},checked:{control:"boolean",table:{category:"State"}},modelValue:{control:"boolean",table:{category:"State"}},disabled:{control:"boolean",table:{category:"State"}},size:{control:"select",options:["medium","large"],table:{category:"Appearance"}}},args:{label:"알림 수신 허용",size:"medium",checked:!0,disabled:!1}},t={name:"기본"},s={name:"제어형",render:()=>{const[a,o]=l.useState(!0);return e.jsxs("div",{className:"grid gap-3",children:[e.jsx(r,{checked:a,onCheckedChange:o,label:"알림 수신 허용"}),e.jsxs("p",{className:"text-krds-body-xs text-krds-gray-60",children:["현재 상태: ",a?"ON":"OFF"]})]})},parameters:{controls:{disable:!0}}},c={name:"크기",render:()=>e.jsxs("div",{className:"grid gap-4",children:[e.jsx(r,{label:"medium",size:"medium",defaultChecked:!0}),e.jsx(r,{label:"large",size:"large",defaultChecked:!0})]}),parameters:{controls:{disable:!0}}},d={name:"비활성",render:()=>e.jsxs("div",{className:"grid gap-4",children:[e.jsx(r,{label:"비활성 ON",checked:!0,disabled:!0}),e.jsx(r,{label:"비활성 OFF",checked:!1,disabled:!0})]}),parameters:{controls:{disable:!0}}};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '기본'
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,f,k;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '제어형',
  render: () => {
    const [checked, setChecked] = React.useState(true);
    return <div className="grid gap-3">
        <Toggle checked={checked} onCheckedChange={setChecked} label="알림 수신 허용" />
        <p className="text-krds-body-xs text-krds-gray-60">현재 상태: {checked ? 'ON' : 'OFF'}</p>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(k=(f=s.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var x,y,w;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '크기',
  render: () => <div className="grid gap-4">
      <Toggle label="medium" size="medium" defaultChecked />
      <Toggle label="large" size="large" defaultChecked />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(w=(y=c.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var C,v,N;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '비활성',
  render: () => <div className="grid gap-4">
      <Toggle label="비활성 ON" checked disabled />
      <Toggle label="비활성 OFF" checked={false} disabled />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(N=(v=d.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};const $=["Default","Controlled","Sizes","Disabled"];export{s as Controlled,t as Default,d as Disabled,c as Sizes,$ as __namedExportsOrder,Z as default};
