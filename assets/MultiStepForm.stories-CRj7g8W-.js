import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-BxXVWNx3.js";import{I as o}from"./input-CyTVhyid.js";import{O as j}from"./OtpCodeInput-BzF3eCSn.js";import{M as x}from"./MultiStepForm-RQGW9jNG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CkIaN0ex.js";import"./utils-DCADjnpI.js";import"./button-B_kt0lNs.js";import"./index-DtBajwEi.js";import"./loader-circle-Db56uVXG.js";import"./createLucideIcon-Ct87QT5c.js";import"./StepIndicator-DYTCchFk.js";import"./chevron-left-CMQDJVKp.js";const I=[{id:"phone",title:"전화번호를 입력해 주세요",description:"인증 코드를 보내 드립니다.",content:e.jsx(o,{type:"tel",placeholder:"010-0000-0000","aria-label":"전화번호"}),nextLabel:"인증 코드 받기"},{id:"otp",title:"인증 코드를 입력해 주세요",description:"문자로 받은 6자리 코드를 입력해 주세요.",content:e.jsx(j,{})},{id:"profile",title:"기본 정보를 알려 주세요",content:e.jsxs("div",{className:"space-y-3",children:[e.jsx(o,{placeholder:"이름","aria-label":"이름"}),e.jsx(o,{type:"email",placeholder:"이메일","aria-label":"이메일"})]})}],N={title:"Organisms/Forms/MultiStepForm",component:x,tags:["autodocs","form"],args:{steps:I,showProgress:!0}},r={name:"인증-프로필 흐름"},t={name:"재사용 단계 표시",args:{progressVariant:"steps"}},s={name:"제어형",render:g=>{const[S,f]=h.useState(0);return e.jsx(x,{...g,value:S,onChange:f})}};var a,n,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '인증-프로필 흐름'
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var i,m,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '재사용 단계 표시',
  args: {
    progressVariant: 'steps'
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var l,d,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '제어형',
  render: args => {
    const [index, setIndex] = useState(0);
    return <MultiStepForm {...args} value={index} onChange={setIndex} />;
  }
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const R=["Default","StepProgress","Controlled"];export{s as Controlled,r as Default,t as StepProgress,R as __namedExportsOrder,N as default};
