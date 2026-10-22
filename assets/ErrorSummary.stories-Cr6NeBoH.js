import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-BxXVWNx3.js";import{d as J,c as P}from"./reference-types-CC3VHbJD.js";import{F as I}from"./FormField-BGF7KuNX.js";import{c as Q}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./text-field-CADLwk0D.js";import"./index-CkIaN0ex.js";import"./input-CyTVhyid.js";import"./x-DsL683-u.js";import"./createLucideIcon-Ct87QT5c.js";import"./eye-CPTXERrz.js";const y=a.forwardRef(({title:o="입력한 내용을 확인해 주세요",description:n,errors:s,autoFocus:h=!1,onErrorSelect:x,className:K,...U},i)=>{const v=a.useRef(null),k=a.useId(),E=a.useId(),z=s.map(({id:r,message:t,fieldId:d})=>`${r}:${d}:${t}`).join("|");a.useEffect(()=>{var r;h&&s.length>0&&((r=v.current)==null||r.focus())},[h,z,s.length]);const A=a.useCallback(r=>{v.current=r,typeof i=="function"?i(r):i&&(i.current=r)},[i]);if(s.length===0)return null;const H=(r,t,d)=>{var j;const m=document.getElementById(t.fieldId);x==null||x(t,d),m&&(r.preventDefault(),(j=m.scrollIntoView)==null||j.call(m,{block:"center"}),m.focus())};return e.jsx("div",{ref:A,"data-slot":"error-summary",tabIndex:-1,"aria-labelledby":k,"aria-describedby":n?E:void 0,className:Q("rounded-lg border-2 border-krds-danger-border bg-krds-gray-0 p-5 text-krds-gray-90 outline-none","focus-visible:ring-2 focus-visible:ring-krds-danger-border focus-visible:ring-offset-2",K),...U,children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsxs("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",className:"mt-0.5 size-6 shrink-0 fill-none stroke-krds-danger-base",children:[e.jsx("circle",{cx:"12",cy:"12",r:"9",strokeWidth:"2"}),e.jsx("path",{d:"M12 7.5v5.25M12 16.5h.01",strokeWidth:"2",strokeLinecap:"round"})]}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("h2",{id:k,className:"text-krds-heading-sm font-bold",children:o}),n?e.jsx("p",{id:E,className:"mt-2 text-krds-body-sm text-krds-gray-70",children:n}):null,e.jsx("ul",{className:"mt-3 grid list-disc gap-2 pl-5 text-krds-body-sm",children:s.map((r,t)=>e.jsx("li",{children:e.jsx("a",{href:`#${r.fieldId}`,className:"font-semibold text-krds-danger-text underline underline-offset-4 hover:no-underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-krds-primary-50",onClick:d=>H(d,r,t),children:r.message})},r.id))})]})]})})});y.displayName="ErrorSummary";y.__docgenInfo={description:"",methods:[],displayName:"ErrorSummary",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'입력한 내용을 확인해 주세요'",computed:!1}},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},errors:{required:!0,tsType:{name:"Array",elements:[{name:"ErrorSummaryItem"}],raw:"ErrorSummaryItem[]"},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onErrorSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: ErrorSummaryItem, index: number) => void",signature:{arguments:[{type:{name:"ErrorSummaryItem"},name:"error"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const X=J([{library:"GOV.UK Design System",component:"Error summary",url:"https://design-system.service.gov.uk/components/error-summary/",usedFor:["design","behavior","api","accessibility","content"],relation:"adapted",note:"오류 요약 포커스와 실제 입력 필드로 이동하는 링크 동작을 참고했습니다."},P("GOV.UK Design System","Error summary","https://design-system.service.gov.uk/components/error-summary/")]),b=[{id:"name-required",message:"이름을 입력해 주세요.",fieldId:"full-name"},{id:"email-invalid",message:"올바른 이메일 주소를 입력해 주세요.",fieldId:"email"}],le={title:"Molecules/Feedback/ErrorSummary",component:y,tags:["autodocs","feedback","accessibility","ref:govuk"],parameters:{references:X,docs:{description:{component:"폼 제출 오류를 한곳에 모아 안내하고, 각 오류 링크를 통해 실제 입력 필드로 포커스를 이동하는 접근성 피드백 컴포넌트입니다."}}},argTypes:{title:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},errors:{control:"object",table:{category:"Content"}},autoFocus:{control:"boolean",table:{category:"Behavior",defaultValue:{summary:"false"}}},onErrorSelect:{action:"error selected",table:{category:"Events"}}},args:{title:"입력한 내용을 확인해 주세요",errors:b,autoFocus:!1}},c={};function Y(){const[o,n]=a.useState([]);return e.jsxs("form",{className:"grid max-w-xl gap-5",noValidate:!0,onSubmit:s=>{s.preventDefault(),n(b)},children:[e.jsx(y,{errors:o,autoFocus:!0}),e.jsx(I,{id:"full-name",label:"이름",required:!0,error:o.some(({fieldId:s})=>s==="full-name")?"이름을 입력해 주세요.":void 0}),e.jsx(I,{id:"email",type:"email",label:"이메일",required:!0,error:o.some(({fieldId:s})=>s==="email")?"올바른 이메일 주소를 입력해 주세요.":void 0}),e.jsx("button",{type:"submit",className:"w-fit rounded-md bg-krds-primary-60 px-4 py-2 font-semibold text-white hover:bg-krds-primary-70",children:"제출하기"})]})}const l={name:"폼 제출 및 포커스 이동",render:()=>e.jsx(Y,{}),parameters:{controls:{disable:!0}}},u={args:{errors:[b[0]]}},p={name:"수정 안내 포함",args:{description:"아래 링크를 선택하면 문제가 있는 입력 항목으로 이동합니다.",errors:b}},g={args:{errors:[{id:"password-rule",fieldId:"password",message:"비밀번호는 영문 대문자와 소문자, 숫자, 특수문자를 포함해 10자 이상 입력해 주세요."},{id:"terms-required",fieldId:"terms",message:"서비스 이용을 계속하려면 필수 이용약관과 개인정보 처리방침에 동의해 주세요."}]}},f={args:{errors:[]},parameters:{docs:{description:{story:"오류가 없으면 요약 영역을 렌더링하지 않습니다."}}}};var S,N,F;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(F=(N=c.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var w,R,V;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '폼 제출 및 포커스 이동',
  render: () => <FormValidationDemo />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(V=(R=l.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var q,D,T;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    errors: [defaultErrors[0]]
  }
}`,...(T=(D=u.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var C,M,G;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '수정 안내 포함',
  args: {
    description: '아래 링크를 선택하면 문제가 있는 입력 항목으로 이동합니다.',
    errors: defaultErrors
  }
}`,...(G=(M=p.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var O,W,_;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(_=(W=g.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var $,B,L;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(L=(B=f.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const ue=["Default","FormValidation","SingleError","WithGuidance","LongMessages","Empty"];export{c as Default,f as Empty,l as FormValidation,g as LongMessages,u as SingleError,p as WithGuidance,ue as __namedExportsOrder,le as default};
