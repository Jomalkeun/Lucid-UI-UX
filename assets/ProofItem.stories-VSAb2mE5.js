import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as r}from"./utils-DCADjnpI.js";import{C as N}from"./circle-check-BKxPZBMl.js";import{U as I}from"./users-CWW-bwf6.js";import"./createLucideIcon-Ct87QT5c.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";function y({label:i,value:n,description:l,icon:c,emphasis:j="value",tone:k="default",className:b}){const o=k==="inverse";return e.jsxs("div",{className:r("flex gap-3",j==="value"?"flex-col":"items-start",o?"text-white":"text-krds-gray-90",b),children:[c?e.jsx("span",{className:r("inline-flex size-9 shrink-0 items-center justify-center rounded-full",o?"bg-white/15 text-white":"bg-krds-primary-5 text-krds-primary-60"),"aria-hidden":"true",children:c}):null,e.jsxs("div",{children:[n?e.jsx("p",{className:"text-2xl font-black tracking-tight",children:n}):null,e.jsx("p",{className:r("font-semibold",n&&"mt-1"),children:i}),l?e.jsx("p",{className:r("mt-1 text-sm",o?"text-krds-gray-20":"text-krds-gray-60"),children:l}):null]})]})}y.__docgenInfo={description:"",methods:[],displayName:"ProofItem",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},emphasis:{required:!1,tsType:{name:"union",raw:"'value' | 'icon'",elements:[{name:"literal",value:"'value'"},{name:"literal",value:"'icon'"}]},description:"",defaultValue:{value:"'value'",computed:!1}},tone:{required:!1,tsType:{name:"union",raw:"'default' | 'inverse'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'inverse'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const P={title:"Molecules/Content/ProofItem",component:y,tags:["autodocs"],args:{value:"24k+",label:"검증된 이용자",description:"최근 30일 기준"}},s={},a={args:{value:void 0,label:"안정적으로 운영 중",description:"상태를 지속적으로 확인합니다.",icon:e.jsx(N,{}),emphasis:"icon"}},t={args:{value:"98%",label:"만족도",icon:e.jsx(I,{}),tone:"inverse"},decorators:[i=>e.jsx("div",{className:"bg-krds-gray-90 p-8",children:e.jsx(i,{})})]};var d,m,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,f,v;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: undefined,
    label: '안정적으로 운영 중',
    description: '상태를 지속적으로 확인합니다.',
    icon: <CheckCircle2 />,
    emphasis: 'icon'
  }
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var g,x,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: '98%',
    label: '만족도',
    icon: <Users />,
    tone: 'inverse'
  },
  decorators: [Story => <div className="bg-krds-gray-90 p-8"><Story /></div>]
}`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const U=["Value","Icon","Inverse"];export{a as Icon,t as Inverse,s as Value,U as __namedExportsOrder,P as default};
