import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-BxXVWNx3.js";import{c as v}from"./utils-DCADjnpI.js";import{C as $}from"./check-CvnDgXMx.js";import{X as ee}from"./x-DsL683-u.js";import{M as ae,S as se}from"./sun-DKK-rojq.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-Ct87QT5c.js";const re={sm:{root:"h-8 min-w-16 px-2 text-xs",icon:"size-4"},md:{root:"h-10 min-w-20 px-3 text-sm",icon:"size-4"},lg:{root:"h-12 min-w-24 px-4 text-base",icon:"size-5"}},y={solid:"border-transparent bg-krds-primary-50 text-white hover:bg-krds-primary-60",outline:"border-krds-gray-40 bg-white text-krds-gray-90 hover:bg-krds-gray-5",ghost:"border-transparent bg-transparent text-krds-gray-90 hover:bg-krds-gray-5"},a=f.forwardRef(({className:m,checked:r,defaultChecked:E=!1,onCheckedChange:u,onClick:p,onLabel:M="켜짐",offLabel:G="꺼짐",onIcon:P,offIcon:X,showLabel:B=!0,size:H="md",variant:J="outline",disabled:b,type:K="button",...Q},U)=>{const g=r!==void 0,[W,Y]=f.useState(E),s=g?r:W,t=re[H],Z=h=>{if(p==null||p(h),h.defaultPrevented||b)return;const x=!s;g||Y(x),u==null||u(x)};return e.jsxs("button",{ref:U,type:K,role:"switch","aria-checked":s,disabled:b,onClick:Z,className:v("inline-flex shrink-0 items-center justify-center gap-2 rounded-md border font-medium transition","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-krds-primary-50 focus-visible:ring-offset-2","disabled:cursor-not-allowed disabled:opacity-45",t.root,s?y.solid:y[J],m),...Q,children:[e.jsx("span",{className:v("inline-flex items-center justify-center",t.icon),"aria-hidden":"true",children:s?P??e.jsx($,{className:t.icon}):X??e.jsx(ee,{className:t.icon})}),B?e.jsx("span",{children:s?M:G}):null]})});a.displayName="Swap";a.__docgenInfo={description:"",methods:[],displayName:"Swap",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},onLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'켜짐'",computed:!1}},offLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'꺼짐'",computed:!1}},onIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},offIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'outline' | 'ghost'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'outline'",computed:!1}},type:{defaultValue:{value:"'button'",computed:!1},required:!1}},composes:["Omit"]};const ue={title:"Atoms/Inputs/Swap",component:a,tags:["autodocs","inputs"],parameters:{layout:"centered",docs:{description:{component:"두 상태 사이를 전환하며 현재 상태의 아이콘과 라벨을 표시하는 버튼형 스위치입니다."}}},argTypes:{checked:{control:"boolean",table:{category:"State"}},onLabel:{control:"text",table:{category:"Content"}},offLabel:{control:"text",table:{category:"Content"}},showLabel:{control:"boolean",table:{category:"Appearance"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},variant:{control:"inline-radio",options:["solid","outline","ghost"],table:{category:"Appearance"}},disabled:{control:"boolean",table:{category:"State"}}},args:{checked:!1,onLabel:"활성",offLabel:"비활성",showLabel:!0,size:"md",variant:"outline",disabled:!1}},o={name:"기본"},n={name:"제어 상태",render:()=>{const[m,r]=f.useState(!1);return e.jsx(a,{checked:m,onCheckedChange:r,onLabel:"공개",offLabel:"비공개"})},parameters:{controls:{disable:!0}}},l={name:"아이콘만",args:{showLabel:!1,onIcon:e.jsx(se,{className:"size-4"}),offIcon:e.jsx(ae,{className:"size-4"}),"aria-label":"테마 전환"}},i={name:"크기",render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{size:"sm",onLabel:"ON",offLabel:"OFF"}),e.jsx(a,{size:"md",defaultChecked:!0,onLabel:"ON",offLabel:"OFF"}),e.jsx(a,{size:"lg",onLabel:"ON",offLabel:"OFF"})]}),parameters:{controls:{disable:!0}}},c={name:"스타일",render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{variant:"outline",offLabel:"Outline"}),e.jsx(a,{variant:"ghost",offLabel:"Ghost"}),e.jsx(a,{checked:!0,variant:"solid",onLabel:"Solid"})]}),parameters:{controls:{disable:!0}}},d={name:"비활성화",args:{disabled:!0}};var L,w,S;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '기본'
}`,...(S=(w=o.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var k,N,j;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '제어 상태',
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Swap checked={checked} onCheckedChange={setChecked} onLabel="공개" offLabel="비공개" />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(j=(N=n.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var z,O,R;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '아이콘만',
  args: {
    showLabel: false,
    onIcon: <Sun className="size-4" />,
    offIcon: <Moon className="size-4" />,
    'aria-label': '테마 전환'
  }
}`,...(R=(O=l.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var C,F,q;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '크기',
  render: () => <div className="flex items-center gap-3">
      <Swap size="sm" onLabel="ON" offLabel="OFF" />
      <Swap size="md" defaultChecked onLabel="ON" offLabel="OFF" />
      <Swap size="lg" onLabel="ON" offLabel="OFF" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(q=(F=i.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var I,T,V;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '스타일',
  render: () => <div className="flex items-center gap-3">
      <Swap variant="outline" offLabel="Outline" />
      <Swap variant="ghost" offLabel="Ghost" />
      <Swap checked variant="solid" onLabel="Solid" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(V=(T=c.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var A,D,_;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '비활성화',
  args: {
    disabled: true
  }
}`,...(_=(D=d.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const pe=["Default","Controlled","IconOnly","Sizes","Variants","Disabled"];export{n as Controlled,o as Default,d as Disabled,l as IconOnly,i as Sizes,c as Variants,pe as __namedExportsOrder,ue as default};
