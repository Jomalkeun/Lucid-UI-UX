import{d as D}from"./reference-types-4ftiVeOu.js";import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{c as z}from"./utils-DCADjnpI.js";import{C as W}from"./circle-check-BKxPZBMl.js";import{C as E}from"./circle-x-DiuoV0Wl.js";import{C as F}from"./circle-alert-APhB8yGJ.js";import{C as O}from"./circle-BrRDsLJZ.js";import"./createLucideIcon-Ct87QT5c.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";const U={idle:"border-krds-gray-30 bg-card text-krds-gray-70",valid:"border-krds-success-30 bg-krds-success-5 text-krds-success-70",invalid:"border-krds-danger-30 bg-krds-danger-5 text-krds-danger-70",warning:"border-krds-warning-30 bg-krds-warning-5 text-krds-warning-70"},X={idle:"text-krds-gray-50",valid:"text-krds-success-60",invalid:"text-krds-danger-60",warning:"text-krds-warning-60"},B={sm:"p-3 text-xs",md:"p-4 text-sm"};function G(s,e){return e&&e!=="idle"?e:s.length===0?e??"idle":s.some(n=>n.valid===!1)?"invalid":s.every(n=>n.valid===!0)?"valid":e??"idle"}function u({status:s}){const e=z("size-4 shrink-0",X[s]);return s==="valid"?a.jsx(W,{"aria-hidden":"true",className:e}):s==="invalid"?a.jsx(E,{"aria-hidden":"true",className:e}):s==="warning"?a.jsx(F,{"aria-hidden":"true",className:e}):a.jsx(O,{"aria-hidden":"true",className:e})}function I({className:s,items:e=[],status:n="idle",message:c,size:R="md",children:T,...q}){const t=G(e,n);return a.jsxs("div",{role:t==="invalid"||t==="warning"?"alert":"status",className:z("grid gap-3 rounded-md border",U[t],B[R],s),...q,children:[c?a.jsxs("div",{className:"flex items-start gap-2 font-medium",children:[a.jsx(u,{status:t}),a.jsx("span",{children:c})]}):null,e.length>0?a.jsx("ul",{className:"grid gap-2",children:e.map((r,A)=>{const _=r.valid===!0?"valid":r.valid===!1?"invalid":"idle";return a.jsxs("li",{className:"flex items-start gap-2 text-krds-gray-80",children:[a.jsx(u,{status:_}),a.jsxs("span",{children:[r.label,r.message?a.jsx("span",{className:"block text-krds-gray-60",children:r.message}):null]})]},r.id??A)})}):null,T]})}I.__docgenInfo={description:"",methods:[],displayName:"Validator",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"ValidationItem"}],raw:"ValidationItem[]"},description:"",defaultValue:{value:"[]",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'idle' | 'valid' | 'invalid' | 'warning'",elements:[{name:"literal",value:"'idle'"},{name:"literal",value:"'valid'"},{name:"literal",value:"'invalid'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'idle'",computed:!1}},message:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const H=[{label:"8자 이상",valid:!0},{label:"영문 대문자 포함",valid:!0},{label:"숫자 포함",valid:!1},{label:"특수문자 포함"}],J=D([{library:"U.S. Web Design System",component:"Validation",url:"https://designsystem.digital.gov/components/validation/",usedFor:["design","behavior","accessibility"],relation:"compared"}]),se={title:"Atoms/Inputs/Validator",component:I,tags:["autodocs","inputs","ref:uswds"],parameters:{references:J,layout:"centered",docs:{description:{component:"입력값의 검증 결과와 규칙별 충족 여부를 사용자에게 안내하는 상태 메시지 컴포넌트입니다."}}},argTypes:{status:{control:"inline-radio",options:["idle","valid","invalid","warning"],table:{category:"State"}},message:{control:"text",table:{category:"Content"}},size:{control:"inline-radio",options:["sm","md"],table:{category:"Appearance"}}},args:{status:"idle",message:"비밀번호 조건을 확인해 주세요.",size:"md",items:H}},i={name:"기본"},l={name:"성공",args:{message:"사용 가능한 값입니다.",items:[{label:"형식이 올바릅니다.",valid:!0},{label:"중복된 값이 없습니다.",valid:!0}]}},d={name:"오류",args:{message:"입력값을 다시 확인해 주세요.",items:[{label:"필수 항목입니다.",valid:!0},{label:"허용되지 않는 문자가 포함되어 있습니다.",valid:!1}]}},o={name:"주의",args:{status:"warning",message:"권장 조건을 일부 충족하지 않았습니다.",items:[{label:"사용은 가능하지만 보안 수준이 낮습니다.",message:"더 긴 비밀번호 사용을 권장합니다."}]}},m={name:"작은 크기",args:{size:"sm"}};var p,g,v;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '기본'
}`,...(v=(g=i.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var f,x,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '성공',
  args: {
    message: '사용 가능한 값입니다.',
    items: [{
      label: '형식이 올바릅니다.',
      valid: true
    }, {
      label: '중복된 값이 없습니다.',
      valid: true
    }]
  }
}`,...(b=(x=l.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var y,w,h;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '오류',
  args: {
    message: '입력값을 다시 확인해 주세요.',
    items: [{
      label: '필수 항목입니다.',
      valid: true
    }, {
      label: '허용되지 않는 문자가 포함되어 있습니다.',
      valid: false
    }]
  }
}`,...(h=(w=d.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var k,j,C;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '주의',
  args: {
    status: 'warning',
    message: '권장 조건을 일부 충족하지 않았습니다.',
    items: [{
      label: '사용은 가능하지만 보안 수준이 낮습니다.',
      message: '더 긴 비밀번호 사용을 권장합니다.'
    }]
  }
}`,...(C=(j=o.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var S,V,N;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '작은 크기',
  args: {
    size: 'sm'
  }
}`,...(N=(V=m.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};const re=["Default","Valid","Invalid","Warning","Compact"];export{m as Compact,i as Default,d as Invalid,l as Valid,o as Warning,re as __namedExportsOrder,se as default};
