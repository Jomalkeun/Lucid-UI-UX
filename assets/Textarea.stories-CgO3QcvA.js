import{d as v}from"./reference-types-4ftiVeOu.js";import{T as k}from"./Textarea-qhtOpWTL.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DCADjnpI.js";const O=v([{library:"Bootstrap",component:"Form controls",url:"https://getbootstrap.com/docs/5.3/forms/form-control/",usedFor:["comparison"],relation:"compared"},{library:"GOV.UK Design System",component:"Textarea",url:"https://design-system.service.gov.uk/components/textarea/",usedFor:["behavior","accessibility","comparison"],relation:"compared"},{library:"KRDS",component:"Textarea",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-textarea--docs",usedFor:["design","behavior","api"],relation:"adapted"},{library:"shadcn/ui",component:"Textarea",url:"https://ui.shadcn.com/docs/components/textarea",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Textarea",url:"https://www.chakra-ui.com/docs/components/textarea",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Input Textfield",url:"https://quasar.dev/vue-components/input",usedFor:["comparison"],relation:"compared"}]),K={title:"Atoms/Inputs/Textarea",component:k,tags:["ref:bootstrap","autodocs","ref:shadcn-ui","ref:quasar","ref:chakra-ui","ref:govuk"],parameters:{references:O,docs:{description:{component:`
## Textarea

여러 줄 텍스트를 입력받는 KRDS 기반 textarea입니다.
shadcn/ui 컴포넌트처럼 표준 textarea 속성을 그대로 전달하며, 라벨, 힌트, 오류 메시지, 글자 수 카운터를 제공합니다.
        `}}},argTypes:{label:{control:"text",table:{category:"Content"}},placeholder:{control:"text",table:{category:"Content"}},hint:{control:"text",table:{category:"Content"}},error:{control:"text",table:{category:"Validation"}},status:{control:"select",options:["default","error"],table:{category:"Validation"}},maxLength:{control:"number",table:{category:"Content"}},showCount:{control:"boolean",table:{category:"Appearance"}},disabled:{control:"boolean",table:{category:"State"}},readOnly:{control:"boolean",table:{category:"State"}}},args:{label:"이벤트 설명",placeholder:"내용을 입력하세요",status:"default",showCount:!0,maxLength:200,disabled:!1,readOnly:!1}},e={name:"기본"},a={name:"힌트",args:{label:"공지 내용",hint:"사용자에게 노출되는 문구입니다.",maxLength:500}},r={name:"카운터 없음",args:{label:"메모",placeholder:"자유롭게 입력하세요",showCount:!1}},o={name:"오류",args:{label:"이벤트 설명",error:"필수 입력 항목입니다."}},t={name:"비활성",args:{label:"이벤트 설명",placeholder:"입력 불가",disabled:!0}},n={name:"읽기 전용",args:{label:"이벤트 설명",value:"여름 지정 데이터 샘플 이벤트입니다. 기간 중 선택한 사용자에게 혜택이 제공됩니다.",readOnly:!0,showCount:!1}};var s,c,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '기본'
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '힌트',
  args: {
    label: '공지 내용',
    hint: '사용자에게 노출되는 문구입니다.',
    maxLength: 500
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var i,u,b;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '카운터 없음',
  args: {
    label: '메모',
    placeholder: '자유롭게 입력하세요',
    showCount: false
  }
}`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var g,h,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '오류',
  args: {
    label: '이벤트 설명',
    error: '필수 입력 항목입니다.'
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,x,C;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '비활성',
  args: {
    label: '이벤트 설명',
    placeholder: '입력 불가',
    disabled: true
  }
}`,...(C=(x=t.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var w,S,T;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '읽기 전용',
  args: {
    label: '이벤트 설명',
    value: '여름 지정 데이터 샘플 이벤트입니다. 기간 중 선택한 사용자에게 혜택이 제공됩니다.',
    readOnly: true,
    showCount: false
  }
}`,...(T=(S=n.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const V=["Default","WithHint","NoCounter","Error","Disabled","ReadOnly"];export{e as Default,t as Disabled,o as Error,r as NoCounter,n as ReadOnly,a as WithHint,V as __namedExportsOrder,K as default};
