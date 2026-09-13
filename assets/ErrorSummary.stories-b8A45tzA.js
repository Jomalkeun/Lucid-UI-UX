import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-BxXVWNx3.js";import{d as z}from"./reference-types-4ftiVeOu.js";import{F as k}from"./FormField-BpZ-cOts.js";import{c as A}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const g=o.forwardRef(({title:n="입력한 내용을 확인해 주세요",errors:a,autoFocus:s=!1,onErrorSelect:y,className:$,...B},i)=>{const x=o.useRef(null),v=o.useId(),L=a.map(({id:r,message:t,fieldId:d})=>`${r}:${d}:${t}`).join("|");o.useEffect(()=>{var r;s&&a.length>0&&((r=x.current)==null||r.focus())},[s,L,a.length]);const O=o.useCallback(r=>{x.current=r,typeof i=="function"?i(r):i&&(i.current=r)},[i]);if(a.length===0)return null;const W=(r,t,d)=>{var h;const m=document.getElementById(t.fieldId);y==null||y(t,d),m&&(r.preventDefault(),(h=m.scrollIntoView)==null||h.call(m,{block:"center"}),m.focus())};return e.jsx("div",{ref:O,"data-slot":"error-summary",tabIndex:-1,"aria-labelledby":v,className:A("rounded-lg border-2 border-krds-danger-border bg-krds-gray-0 p-5 text-krds-gray-90 outline-none","focus-visible:ring-2 focus-visible:ring-krds-danger-border focus-visible:ring-offset-2",$),...B,children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsxs("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",className:"mt-0.5 size-6 shrink-0 fill-none stroke-krds-danger-base",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",strokeWidth:"2"}),e.jsx("path",{d:"M12 7.5v5.25M12 16.5h.01",strokeWidth:"2",strokeLinecap:"round"})]}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("h2",{id:v,className:"text-krds-heading-sm font-bold",children:n}),e.jsx("ul",{className:"mt-3 grid list-disc gap-2 pl-5 text-krds-body-sm",children:a.map((r,t)=>e.jsx("li",{children:e.jsx("a",{href:`#${r.fieldId}`,className:"font-semibold text-krds-danger-text underline underline-offset-4 hover:no-underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-krds-primary-50",onClick:d=>W(d,r,t),children:r.message})},r.id))})]})]})})});g.displayName="ErrorSummary";g.__docgenInfo={description:"",methods:[],displayName:"ErrorSummary",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'입력한 내용을 확인해 주세요'",computed:!1}},errors:{required:!0,tsType:{name:"Array",elements:[{name:"ErrorSummaryItem"}],raw:"ErrorSummaryItem[]"},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onErrorSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: ErrorSummaryItem, index: number) => void",signature:{arguments:[{type:{name:"ErrorSummaryItem"},name:"error"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const G=z([{library:"GOV.UK Design System",component:"Error summary",url:"https://design-system.service.gov.uk/components/error-summary/",usedFor:["design","behavior","api","accessibility","content"],relation:"adapted",note:"오류 요약 포커스와 실제 입력 필드로 이동하는 링크 동작을 참고했습니다."}]),b=[{id:"name-required",message:"이름을 입력해 주세요.",fieldId:"full-name"},{id:"email-invalid",message:"올바른 이메일 주소를 입력해 주세요.",fieldId:"email"}],Y={title:"Molecules/Feedback/ErrorSummary",component:g,tags:["autodocs","feedback","accessibility","ref:govuk"],parameters:{references:G,docs:{description:{component:"폼 제출 오류를 한곳에 모아 안내하고, 각 오류 링크를 통해 실제 입력 필드로 포커스를 이동하는 접근성 피드백 컴포넌트입니다."}}},argTypes:{title:{control:"text",table:{category:"Content"}},errors:{control:"object",table:{category:"Content"}},autoFocus:{control:"boolean",table:{category:"Behavior",defaultValue:{summary:"false"}}},onErrorSelect:{action:"error selected",table:{category:"Events"}}},args:{title:"입력한 내용을 확인해 주세요",errors:b,autoFocus:!1}},l={};function K(){const[n,a]=o.useState([]);return e.jsxs("form",{className:"grid max-w-xl gap-5",noValidate:!0,onSubmit:s=>{s.preventDefault(),a(b)},children:[e.jsx(g,{errors:n,autoFocus:!0}),e.jsx(k,{id:"full-name",label:"이름",required:!0,error:n.some(({fieldId:s})=>s==="full-name")?"이름을 입력해 주세요.":void 0}),e.jsx(k,{id:"email",type:"email",label:"이메일",required:!0,error:n.some(({fieldId:s})=>s==="email")?"올바른 이메일 주소를 입력해 주세요.":void 0}),e.jsx("button",{type:"submit",className:"w-fit rounded-md bg-krds-primary-60 px-4 py-2 font-semibold text-white hover:bg-krds-primary-70",children:"제출하기"})]})}const c={name:"폼 제출 및 포커스 이동",render:()=>e.jsx(K,{}),parameters:{controls:{disable:!0}}},u={args:{errors:[b[0]]}},p={args:{errors:[{id:"password-rule",fieldId:"password",message:"비밀번호는 영문 대문자와 소문자, 숫자, 특수문자를 포함해 10자 이상 입력해 주세요."},{id:"terms-required",fieldId:"terms",message:"서비스 이용을 계속하려면 필수 이용약관과 개인정보 처리방침에 동의해 주세요."}]}},f={args:{errors:[]},parameters:{docs:{description:{story:"오류가 없으면 요약 영역을 렌더링하지 않습니다."}}}};var E,j,I;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(I=(j=l.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var S,N,F;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '폼 제출 및 포커스 이동',
  render: () => <FormValidationDemo />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(F=(N=c.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var w,V,q;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    errors: [defaultErrors[0]]
  }
}`,...(q=(V=u.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var D,R,M;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    errors: [{
      id: 'password-rule',
      fieldId: 'password',
      message: '비밀번호는 영문 대문자와 소문자, 숫자, 특수문자를 포함해 10자 이상 입력해 주세요.'
    }, {
      id: 'terms-required',
      fieldId: 'terms',
      message: '서비스 이용을 계속하려면 필수 이용약관과 개인정보 처리방침에 동의해 주세요.'
    }]
  }
}`,...(M=(R=p.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var T,C,_;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    errors: []
  },
  parameters: {
    docs: {
      description: {
        story: '오류가 없으면 요약 영역을 렌더링하지 않습니다.'
      }
    }
  }
}`,...(_=(C=f.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};const Z=["Default","FormValidation","SingleError","LongMessages","Empty"];export{l as Default,f as Empty,c as FormValidation,p as LongMessages,u as SingleError,Z as __namedExportsOrder,Y as default};
