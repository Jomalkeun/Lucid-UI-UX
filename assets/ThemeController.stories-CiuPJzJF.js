import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-BxXVWNx3.js";import{S as F}from"./SegmentedControl-B00SHzWA.js";import{S as I,M as A}from"./sun-DKK-rojq.js";import{c as R}from"./createLucideIcon-Ct87QT5c.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CkIaN0ex.js";import"./utils-DCADjnpI.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],G=R("monitor",B),H=[{value:"light",label:e.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[e.jsx(I,{"aria-hidden":"true",className:"size-4"}),"라이트"]})},{value:"dark",label:e.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[e.jsx(A,{"aria-hidden":"true",className:"size-4"}),"다크"]})},{value:"system",label:e.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[e.jsx(G,{"aria-hidden":"true",className:"size-4"}),"시스템"]})}];function f({value:t,defaultValue:d="light",size:q="md",variant:E="soft",disabled:W=!1,fullWidth:z=!1,applyToDocument:h=!1,ariaLabel:L="테마 선택",className:_,onValueChange:u}){const g=t!==void 0,[M,D]=p.useState(d),l=g?t:M;p.useEffect(()=>{if(!h||typeof document>"u")return;const s=document.documentElement,r=a=>{s.classList.toggle("dark",a==="dark"),s.style.colorScheme=a};if(s.dataset.theme=l,l==="system"){const a=window.matchMedia("(prefers-color-scheme: dark)"),c=()=>r(a.matches?"dark":"light");return c(),a.addEventListener("change",c),()=>a.removeEventListener("change",c)}r(l)},[h,l]);const O=s=>{const r=s;g||D(r),u==null||u(r)};return e.jsx(F,{ariaLabel:L,className:_,disabled:W,fullWidth:z,options:H,size:q,value:l,variant:E,onValueChange:O})}f.__docgenInfo={description:"",methods:[],displayName:"ThemeController",props:{value:{required:!1,tsType:{name:"union",raw:"'light' | 'dark' | 'system'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'system'"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"'light' | 'dark' | 'system'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'system'"}]},description:"",defaultValue:{value:"'light'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'soft' | 'outline' | 'solid'",elements:[{name:"literal",value:"'soft'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'solid'"}]},description:"",defaultValue:{value:"'soft'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},applyToDocument:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'테마 선택'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ThemeControllerValue) => void",signature:{arguments:[{type:{name:"union",raw:"'light' | 'dark' | 'system'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'system'"}]},name:"value"}],return:{name:"void"}}},description:""}}};const $={title:"Molecules/Forms/ThemeController",component:f,tags:["autodocs","primitives"],parameters:{layout:"centered",docs:{description:{component:"라이트, 다크, 시스템 테마 값을 선택하는 segmented control 기반 primitive입니다."}}},argTypes:{value:{control:"inline-radio",options:["light","dark","system"],table:{category:"State"}},defaultValue:{control:"inline-radio",options:["light","dark","system"],table:{category:"State"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},variant:{control:"inline-radio",options:["soft","outline","solid"],table:{category:"Appearance"}},disabled:{control:"boolean",table:{category:"State"}},fullWidth:{control:"boolean",table:{category:"Layout"}},applyToDocument:{control:"boolean",table:{category:"Behavior"}}},args:{defaultValue:"light",size:"md",variant:"soft",disabled:!1,fullWidth:!1,applyToDocument:!1}},n={name:"기본"},o={name:"제어 상태",render:()=>{const[t,d]=p.useState("system");return e.jsxs("div",{className:"grid gap-3",children:[e.jsx(f,{value:t,onValueChange:d}),e.jsxs("p",{className:"text-sm text-krds-gray-60",children:["선택된 테마: ",t]})]})},parameters:{controls:{disable:!0}}},i={name:"외곽선",args:{variant:"outline",defaultValue:"dark"}},m={name:"전체 너비",args:{fullWidth:!0,className:"w-96"}};var v,y,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '기본'
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var T,b,k;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '제어 상태',
  render: () => {
    const [theme, setTheme] = useState<ThemeControllerValue>('system');
    return <div className="grid gap-3">
        <ThemeController value={theme} onValueChange={setTheme} />
        <p className="text-sm text-krds-gray-60">선택된 테마: {theme}</p>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(k=(b=o.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var V,N,S;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '외곽선',
  args: {
    variant: 'outline',
    defaultValue: 'dark'
  }
}`,...(S=(N=i.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var j,w,C;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '전체 너비',
  args: {
    fullWidth: true,
    className: 'w-96'
  }
}`,...(C=(w=m.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const ee=["Default","Controlled","Outline","FullWidth"];export{o as Controlled,n as Default,m as FullWidth,i as Outline,ee as __namedExportsOrder,$ as default};
