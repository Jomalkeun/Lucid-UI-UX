import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{N as I}from"./NavigationItem-CFUBLGbj.js";import"./utils-DCADjnpI.js";function g({items:f=[],label:v="이 페이지에서",children:N,...x}){return e.jsxs("nav",{...x,"aria-label":v,children:[e.jsx("ul",{className:"grid gap-1",children:f.map((s,b)=>e.jsx("li",{children:e.jsx(I,{...s})},s.id??b))}),N]})}g.__docgenInfo={description:"",methods:[],displayName:"InPageNavigation",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"NavigationItemProps"}],raw:"NavigationItemProps[]"},description:"",defaultValue:{value:"[]",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'이 페이지에서'",computed:!1}}},composes:["HTMLAttributes"]};const y={title:"Molecules/Navigation/InPageNavigation",component:g,tags:["autodocs"],args:{items:[{id:"intro",label:"소개",href:"#intro",active:!0},{id:"details",label:"상세",href:"#details"}]},parameters:{layout:"padded"}},a={},r={args:{items:[]}},t={args:{label:"목차"}};var o,i,n;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(n=(i=a.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var l,d,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    items: []
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,p,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: '목차'
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const P=["Default","Alternate","AdditionalState"];export{t as AdditionalState,r as Alternate,a as Default,P as __namedExportsOrder,y as default};
