import{j as e}from"./jsx-runtime-D_zvdyIk.js";function N({title:t,description:o,error:d,children:j,...n}){return e.jsxs("fieldset",{...n,className:"space-y-4 rounded border p-5 "+(n.className??""),children:[t&&e.jsx("legend",{className:"px-2 font-semibold",children:t}),o&&e.jsx("p",{className:"text-sm text-muted-foreground",children:o}),j,d&&e.jsx("p",{role:"alert",children:d})]})}N.__docgenInfo={description:"",methods:[],displayName:"FormSection",props:{title:{required:!1,tsType:{name:"ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},error:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};const h={title:"Organisms/Forms/FormSection",component:N,tags:["autodocs"],args:{title:"기본 정보",description:"필수 항목을 입력하세요.",children:e.jsxs("label",{children:["이름",e.jsx("input",{className:"ml-3 border",required:!0})]})},parameters:{layout:"padded"}},r={},s={args:{disabled:!0}},a={args:{error:"필수 항목을 확인하세요."}};var c,i,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var l,p,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,x,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    error: '필수 항목을 확인하세요.'
  }
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const b=["Default","Alternate","AdditionalState"];export{a as AdditionalState,s as Alternate,r as Default,b as __namedExportsOrder,h as default};
