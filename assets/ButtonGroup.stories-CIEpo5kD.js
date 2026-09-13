import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as C,R as j}from"./index-BxXVWNx3.js";import{c as n}from"./utils-DCADjnpI.js";import{d as q}from"./reference-types-4ftiVeOu.js";import"./_commonjsHelpers-CqkleIqs.js";function s({name:r,value:d,defaultValue:x,options:l=[],onChange:i,className:u,children:c}){var m;const[w,k]=C.useState(x??((m=l[0])==null?void 0:m.value)??""),p=d!==void 0,G=p?d:w,S=e=>{p||k(e),i==null||i(e)};return c?a.jsx("div",{className:n("inline-flex rounded border border-krds-gray-20 overflow-hidden",u),children:c}):a.jsx("div",{role:"group","aria-label":r,className:n("inline-flex rounded border border-krds-gray-20 overflow-hidden",u),children:l.map((e,B)=>{const v=G===e.value;return a.jsxs(j.Fragment,{children:[B>0&&a.jsx("div",{className:"w-px bg-krds-gray-20 shrink-0","aria-hidden":"true"}),a.jsx("button",{type:"button",disabled:e.disabled,"aria-pressed":v,onClick:()=>!e.disabled&&S(e.value),className:n("px-4 py-2 text-krds-body-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-krds-primary-50",v?"bg-krds-primary-50 text-krds-white":"bg-krds-gray-0 text-krds-gray-70 hover:bg-krds-gray-5",e.disabled&&"opacity-40 cursor-not-allowed"),children:e.label})]},e.value)})})}s.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{name:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"ButtonGroupOption"}],raw:"ButtonGroupOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const F=q([{library:"U.S. Web Design System",component:"Button group",url:"https://designsystem.digital.gov/components/button-group/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"Bootstrap",component:"Button group",url:"https://getbootstrap.com/docs/5.3/components/button-group/",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"Button Group",url:"https://flowbite.com/docs/components/button-group/",usedFor:["comparison"],relation:"compared"},{library:"Mantine UI",component:"Split button",url:"https://ui.mantine.dev/category/buttons/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."},{library:"Quasar",component:"Button Group",url:"https://quasar.dev/vue-components/button-group",usedFor:["comparison"],relation:"compared"}]),E={title:"Molecules/Navigation/ButtonGroup",component:s,tags:["autodocs","krds-extended","ref:shadcn-ui","ref:flowbite","ref:mui","ref:bootstrap","ref:quasar","ref:mantine-ui","ref:uswds"],argTypes:{value:{control:"text"},options:{control:"object"}},args:{name:"view-switch",value:"card",options:[{value:"card",label:"카드"},{value:"list",label:"리스트"},{value:"gallery",label:"갤러리"}]},parameters:{references:F,layout:"centered"},render:r=>a.jsx(s,{...r,children:r.children??r.label??r.text??void 0})},t={render:()=>({v:"card"})},o={render:()=>({v:"all"})};var b,g,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const RadioGroup = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const RadioChip = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const v = 'card';
    return {
      v
    };
    return <RadioGroup value={v} onChange={() => {}} name="view" aria-label="보기 전환">
        <RadioChip id="bg-card" value="card" label="카드" />
        <RadioChip id="bg-list" value="list" label="리스트" />
        <RadioChip id="bg-gallery" value="gallery" label="갤러리" />
      </RadioGroup>;
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,h,R;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const RadioGroup = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const RadioChip = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const v = 'all';
    return {
      v
    };
    return <RadioGroup value={v} onChange={() => {}} name="status" aria-label="상태 필터">
        <RadioChip id="sf-all" value="all" label="전체" />
        <RadioChip id="sf-on" value="active" label="노출중" />
        <RadioChip id="sf-res" value="reserved" label="예약" />
        <RadioChip id="sf-end" value="ended" label="종료" />
      </RadioGroup>;
  }
}`,...(R=(h=o.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};const M=["ViewSwitch","StatusFilter"];export{o as StatusFilter,t as ViewSwitch,M as __namedExportsOrder,E as default};
