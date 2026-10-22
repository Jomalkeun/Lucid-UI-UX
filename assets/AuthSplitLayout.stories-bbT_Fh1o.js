import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as f}from"./AuthForm-CIulfGbQ.js";import{A as v}from"./AuthPanel-DzrTI8vl.js";import{W as y}from"./WireframeMedia-DAgc5xmV.js";import"./SchemaForm-DoqzW-wl.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./text-field-CADLwk0D.js";import"./index-CkIaN0ex.js";import"./utils-DCADjnpI.js";import"./input-CyTVhyid.js";import"./x-DsL683-u.js";import"./createLucideIcon-Ct87QT5c.js";import"./eye-CPTXERrz.js";import"./button-BRuq28Bc.js";import"./index-CSKKChMh.js";import"./loader-circle-Db56uVXG.js";function g(t){return e.jsxs("section",{className:"grid overflow-hidden bg-white md:grid-cols-[1.2fr_0.8fr]",children:[e.jsx(y,{label:"AUTHENTICATION IMAGE",tone:"cool",className:"min-h-80"}),e.jsx("div",{className:"mx-auto flex w-full max-w-md flex-col justify-center p-8 md:p-14",children:e.jsx(v,{title:t.mode==="signup"?"계정 만들기":t.mode==="reset"?"비밀번호 재설정":"로그인",children:e.jsx(f,{...t})})})]})}g.__docgenInfo={description:"",methods:[],displayName:"AuthSplitLayout",props:{mode:{required:!0,tsType:{name:"union",raw:"'login' | 'signup' | 'reset'",elements:[{name:"literal",value:"'login'"},{name:"literal",value:"'signup'"},{name:"literal",value:"'reset'"}]},description:""},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:`(values: {
  name?: string
  identifier: string
  password?: string
}) => void | Promise<void>`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  name?: string
  identifier: string
  password?: string
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"identifier",value:{name:"string",required:!0}},{key:"password",value:{name:"string",required:!1}}]}},name:"values"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:""},socialAction:{required:!1,tsType:{name:"ReactNode"},description:""},submitting:{required:!1,tsType:{name:"boolean"},description:""},serverError:{required:!1,tsType:{name:"string"},description:""}}};const O={title:"Organisms/Forms/AuthSplitLayout",component:g,args:{mode:"login"},parameters:{layout:"fullscreen"}},r={},s={args:{mode:"signup"}},i={args:{mode:"reset"}};var o,a,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(n=(a=r.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var m,d,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    mode: 'signup'
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,l,c;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    mode: 'reset'
  }
}`,...(c=(l=i.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const U=["Login","SignUp","ResetPassword"];export{r as Login,i as ResetPassword,s as SignUp,U as __namedExportsOrder,O as default};
