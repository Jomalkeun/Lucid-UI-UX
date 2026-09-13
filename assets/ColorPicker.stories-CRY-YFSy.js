import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as T}from"./index-BxXVWNx3.js";import{c as A}from"./utils-DCADjnpI.js";import{C as E}from"./ColorPicker-BXWCTc91.js";import{C as y}from"./ColorSwatch-CTYshdjv.js";import{c as W}from"./createLucideIcon-Ct87QT5c.js";import{d as G}from"./reference-types-4ftiVeOu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./check-CvnDgXMx.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12",key:"1y3wsu"}],["path",{d:"m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z",key:"110lr1"}],["path",{d:"m2 22 .414-.414",key:"jhxm08"}]],M=W("pipette",F),x=[{label:"KRDS Primary",value:"#256ef4"},{label:"KRDS Secondary",value:"#003675"},{label:"Success",value:"#008a1e"},{label:"Warning",value:"#b75c00"},{label:"Danger",value:"#d50136"},{label:"Gray",value:"#555555"}];function m({className:u,label:s="색상 선택",description:p="시스템 색상 팔레트 또는 직접 입력으로 색상을 선택합니다.",value:f,defaultValue:O=x[0].value,options:b=x,showInput:L=!0,disabled:t=!1,onValueChange:d,..._}){const g=f!==void 0,[K,z]=T.useState(O),r=g?f:K,l=b.find(a=>a.value.toLowerCase()===r.toLowerCase()),v=a=>{g||z(a),d==null||d(a)};return e.jsxs("div",{className:A("grid w-full max-w-sm gap-4 rounded-md border border-krds-gray-30 bg-white p-4 text-krds-gray-90 shadow-sm",t&&"opacity-70",u),..._,children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-krds-primary-5 text-krds-primary-60",children:e.jsx(M,{"aria-hidden":"true",className:"size-4"})}),e.jsxs("div",{className:"min-w-0",children:[s?e.jsx("h3",{className:"text-sm font-semibold leading-6",children:s}):null,p?e.jsx("p",{className:"text-sm leading-6 text-krds-gray-60",children:p}):null]})]}),e.jsxs("div",{className:"flex items-center gap-3 rounded-md bg-krds-gray-5 p-3",children:[e.jsx(y,{color:r,label:(l==null?void 0:l.label)??r,selected:!0,size:"lg",disabled:t}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"truncate text-sm font-medium",children:(l==null?void 0:l.label)??"직접 선택한 색상"}),e.jsx("p",{className:"font-mono text-sm uppercase text-krds-gray-60",children:r})]})]}),e.jsx("div",{className:"grid grid-cols-6 gap-2",role:"listbox","aria-label":"색상 팔레트",children:b.map(a=>e.jsx(y,{color:a.value,label:a.label,selected:a.value.toLowerCase()===r.toLowerCase(),disabled:t,onSelect:v},a.value))}),L?e.jsx(E,{label:"직접 선택",value:r,disabled:t,showValue:!0,onValueChange:v}):null]})}m.__docgenInfo={description:"",methods:[],displayName:"ColorPicker",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'색상 선택'",computed:!1}},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'시스템 색상 팔레트 또는 직접 입력으로 색상을 선택합니다.'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"defaultOptions[0].value",computed:!0}},options:{required:!1,tsType:{name:"Array",elements:[{name:"ColorPickerOption"}],raw:"ColorPickerOption[]"},description:"",defaultValue:{value:`[
  { label: 'KRDS Primary', value: '#256ef4' },
  { label: 'KRDS Secondary', value: '#003675' },
  { label: 'Success', value: '#008a1e' },
  { label: 'Warning', value: '#b75c00' },
  { label: 'Danger', value: '#d50136' },
  { label: 'Gray', value: '#555555' },
]`,computed:!1}},showInput:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const I=[{label:"Primary 50",value:"#256ef4"},{label:"Primary 70",value:"#16408d"},{label:"Secondary 50",value:"#003675"},{label:"Success 50",value:"#008a1e"},{label:"Warning 50",value:"#b75c00"},{label:"Danger 50",value:"#d50136"}],Q=G([{library:"Quasar",component:"Color Picker",url:"https://quasar.dev/vue-components/color-picker",usedFor:["comparison"],relation:"compared"}]),ae={title:"Molecules/Display/ColorPicker",component:m,tags:["autodocs","display","ref:quasar"],parameters:{references:Q,layout:"centered",docs:{description:{component:"KRDS 색상 토큰과 직접 색상 입력을 함께 제공하는 팔레트형 색상 선택 컴포넌트입니다."}}},argTypes:{label:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},value:{control:"color",table:{category:"State"}},defaultValue:{control:"color",table:{category:"State"}},showInput:{control:"boolean",table:{category:"Display"}},disabled:{control:"boolean",table:{category:"State"}}},args:{label:"브랜드 색상",description:"서비스 화면에서 사용할 주요 색상을 선택합니다.",options:I,defaultValue:"#256ef4",showInput:!0,disabled:!1}},o={name:"기본"},n={name:"제어 상태",render:()=>{const[u,s]=T.useState("#003675");return e.jsx(m,{label:"제어형 색상",description:"선택값을 외부 상태에서 관리합니다.",value:u,options:I,onValueChange:s})},parameters:{controls:{disable:!0}}},c={name:"팔레트만 표시",args:{label:"상태 색상",description:"정해진 토큰 안에서만 선택하도록 직접 입력을 숨깁니다.",showInput:!1,defaultValue:"#008a1e"}},i={name:"비활성",args:{disabled:!0,defaultValue:"#16408d"}};var h,S,w;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '기본'
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var C,j,k;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '제어 상태',
  render: () => {
    const [value, setValue] = useState('#003675');
    return <ColorPicker label="제어형 색상" description="선택값을 외부 상태에서 관리합니다." value={value} options={brandOptions} onValueChange={setValue} />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(k=(j=n.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var V,N,P;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '팔레트만 표시',
  args: {
    label: '상태 색상',
    description: '정해진 토큰 안에서만 선택하도록 직접 입력을 숨깁니다.',
    showInput: false,
    defaultValue: '#008a1e'
  }
}`,...(P=(N=c.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var R,D,q;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '비활성',
  args: {
    disabled: true,
    defaultValue: '#16408d'
  }
}`,...(q=(D=i.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};const re=["Default","Controlled","PaletteOnly","Disabled"];export{n as Controlled,o as Default,i as Disabled,c as PaletteOnly,re as __namedExportsOrder,ae as default};
