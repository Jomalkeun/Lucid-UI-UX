import{d as E}from"./reference-types-4ftiVeOu.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as d}from"./utils-DCADjnpI.js";import{C as V}from"./circle-x-DiuoV0Wl.js";import{C as _}from"./circle-alert-APhB8yGJ.js";import{I as B}from"./info-DdzkXfgT.js";import{C as L}from"./circle-check-BKxPZBMl.js";import"./createLucideIcon-Ct87QT5c.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";const M=[{variant:"ok",message:"배포가 완료되었습니다."}],R={ok:"border-krds-success-border bg-krds-success-surface text-krds-success-text",success:"border-krds-success-border bg-krds-success-surface text-krds-success-text",danger:"border-krds-danger-border bg-krds-danger-surface text-krds-danger-text",error:"border-krds-danger-border bg-krds-danger-surface text-krds-danger-text",info:"border-krds-info-border bg-krds-info-surface text-krds-info-text",warning:"border-krds-warning-border bg-krds-warning-surface text-krds-warning-text"},U={"top-right":"fixed right-6 top-6","top-left":"fixed left-6 top-6","bottom-right":"fixed bottom-6 right-6","bottom-left":"fixed bottom-6 left-6",inline:"relative"};function W({variant:a}){return a==="danger"||a==="error"?e.jsx(V,{"aria-hidden":"true",className:"size-4 shrink-0"}):a==="warning"?e.jsx(_,{"aria-hidden":"true",className:"size-4 shrink-0"}):a==="info"?e.jsx(B,{"aria-hidden":"true",className:"size-4 shrink-0"}):e.jsx(L,{"aria-hidden":"true",className:"size-4 shrink-0"})}function A({className:a,alerts:I=M,placement:q="inline",dismissible:S=!1,onDismiss:l,...F}){return e.jsx("div",{className:d("z-[1100] grid w-[min(360px,calc(100vw-32px))] gap-2",U[q],a),...F,children:I.map((r,m)=>{const s=r.variant??"info",z=s==="danger"||s==="error";return e.jsxs("div",{role:z?"alert":"status",className:d("flex items-start gap-2 rounded-md border px-4 py-3 text-sm shadow-sm",R[s]),children:[e.jsx(W,{variant:s}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("p",{className:"m-0 leading-5",children:r.message}),r.href&&r.linkText?e.jsx("a",{href:r.href,className:"mt-1 inline-flex text-sm font-semibold underline underline-offset-2",children:r.linkText}):null]}),S?e.jsx("button",{type:"button","aria-label":"알림 닫기",onClick:()=>l==null?void 0:l(r,m),className:"rounded-sm px-1 text-current opacity-70 hover:opacity-100",children:"×"}):null]},r.id??m)})})}A.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{alerts:{required:!1,tsType:{name:"Array",elements:[{name:"ToastAlert"}],raw:"ToastAlert[]"},description:"",defaultValue:{value:"[{ variant: 'ok', message: '배포가 완료되었습니다.' }]",computed:!1}},placement:{required:!1,tsType:{name:"union",raw:"'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'inline'",elements:[{name:"literal",value:"'top-right'"},{name:"literal",value:"'top-left'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'inline'"}]},description:"",defaultValue:{value:"'inline'",computed:!1}},dismissible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"(alert: ToastAlert, index: number) => void",signature:{arguments:[{type:{name:"ToastAlert"},name:"alert"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const O=E([{library:"Bootstrap",component:"Toasts",url:"https://getbootstrap.com/docs/5.3/components/toasts/",usedFor:["comparison"],relation:"compared"},{library:"PrimeVue",component:"Toast",url:"https://primevue.org/toast/",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Chakra UI",component:"Toast",url:"https://www.chakra-ui.com/docs/components/toast",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Notify",url:"https://quasar.dev/quasar-plugins/notify",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Toast",url:"https://base-ui.com/react/components/toast",usedFor:["comparison"],relation:"compared"}]),D={title:"Molecules/Feedback/Toast",component:A,tags:["ref:bootstrap","autodocs","feedback","ref:shadcn-ui","ref:quasar","ref:chakra-ui","ref:base-ui","ref:primevue"],parameters:{references:O,layout:"centered",docs:{description:{component:"작업 결과나 시스템 상태를 짧게 알리는 토스트 알림 목록입니다."}}},argTypes:{alerts:{control:"object",table:{category:"Content"}},placement:{control:"select",options:["top-right","top-left","bottom-right","bottom-left","inline"],table:{category:"Layout"}},dismissible:{control:"boolean",table:{category:"Behavior"}},onDismiss:{action:"dismissed",table:{category:"Events"}}},args:{placement:"inline",dismissible:!1,alerts:[{variant:"ok",message:"배포가 완료되었습니다."}]}},t={args:{alerts:[{variant:"ok",message:"배포 완료 · 반영되었습니다."}]}},o={args:{alerts:[{variant:"danger",message:"배포 실패 · 승인 권한이 없습니다."}]}},n={args:{alerts:[{variant:"info",message:"예약 배포가 등록되었습니다."}]}},i={args:{alerts:[{variant:"ok",message:"배너 등록 완료"},{variant:"danger",message:"이미지 업로드 실패"}]}},c={args:{alerts:[{variant:"info",message:"약관 내용이 업데이트되었습니다.",href:"#",linkText:"확인하기"}]}};var p,u,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    alerts: [{
      variant: 'ok',
      message: '배포 완료 · 반영되었습니다.'
    }]
  }
}`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,b,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    alerts: [{
      variant: 'danger',
      message: '배포 실패 · 승인 권한이 없습니다.'
    }]
  }
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,k,v;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    alerts: [{
      variant: 'info',
      message: '예약 배포가 등록되었습니다.'
    }]
  }
}`,...(v=(k=n.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var y,T,w;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    alerts: [{
      variant: 'ok',
      message: '배너 등록 완료'
    }, {
      variant: 'danger',
      message: '이미지 업로드 실패'
    }]
  }
}`,...(w=(T=i.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var j,C,N;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    alerts: [{
      variant: 'info',
      message: '약관 내용이 업데이트되었습니다.',
      href: '#',
      linkText: '확인하기'
    }]
  }
}`,...(N=(C=c.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};const ee=["Success","Error","Info","Multiple","WithLink"];export{o as Error,n as Info,i as Multiple,t as Success,c as WithLink,ee as __namedExportsOrder,D as default};
