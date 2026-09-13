import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as V}from"./reference-types-4ftiVeOu.js";import{R as W}from"./index-BxXVWNx3.js";import{c as F}from"./index-CkIaN0ex.js";import{c as q}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const B=F("flex items-start gap-3 rounded-lg border px-4 py-3",{variants:{variant:{info:"bg-krds-info-surface border-krds-info-border text-krds-info-text",success:"bg-krds-success-surface border-krds-success-border text-krds-success-text",warning:"bg-krds-warning-surface border-krds-warning-border text-krds-warning-text",danger:"bg-krds-danger-surface border-krds-danger-border text-krds-danger-text"}},defaultVariants:{variant:"info"}});function D(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"mt-0.5 shrink-0",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]})}function T(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"mt-0.5 shrink-0",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})}function _(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"mt-0.5 shrink-0",children:[e.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"}),e.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),e.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]})}function M(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"mt-0.5 shrink-0",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),e.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]})}const E={info:D,success:T,warning:_,danger:M},r=W.forwardRef(({variant:i="info",title:c,message:d,className:A,children:N,...S},L)=>{const C=E[i??"info"],R=i==="warning"?"status":"alert";return e.jsxs("div",{ref:L,role:R,className:q(B({variant:i}),A),...S,children:[e.jsx(C,{}),e.jsxs("div",{className:"flex-1",children:[c&&e.jsx("p",{className:"text-krds-body-sm font-semibold leading-snug",children:c}),d&&e.jsx("p",{className:"text-krds-body-sm leading-relaxed mt-0.5",children:d}),N]})]})});r.displayName="InlineAlert";r.__docgenInfo={description:"",methods:[],displayName:"InlineAlert",props:{title:{required:!1,tsType:{name:"string"},description:""},message:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{defaultValue:{value:"'info'",computed:!1},required:!1}},composes:["VariantProps"]};const O=["info","success","warning","danger"],U=V([{library:"Bootstrap",component:"Alerts",url:"https://getbootstrap.com/docs/5.3/components/alerts/",usedFor:["comparison"],relation:"compared"},{library:"Carbon Design System",component:"Notification",url:"https://carbondesignsystem.com/components/notification/usage/",usedFor:["design","behavior","accessibility","comparison"],relation:"compared"},{library:"U.S. Web Design System",component:"Alert",url:"https://designsystem.digital.gov/components/alert/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"Ant Design",component:"Alert",url:"https://ant.design/components/alert/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Alert",url:"https://www.chakra-ui.com/docs/components/alert",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Banner",url:"https://quasar.dev/vue-components/banner",usedFor:["comparison"],relation:"compared"}]),K={title:"Molecules/Feedback/InlineAlert",component:r,tags:["ref:bootstrap","autodocs","feedback","ref:shadcn-ui","ref:ant-design","ref:quasar","ref:chakra-ui","ref:uswds","ref:carbon"],parameters:{references:U,docs:{description:{component:"폼 내부 또는 콘텐츠 영역에 인라인으로 표시되는 지속형 알림 컴포넌트입니다."}}},argTypes:{variant:{description:"알림의 의미적 색상 유형입니다.",control:"select",options:O,table:{type:{summary:"info | success | warning | danger"},defaultValue:{summary:"info"},category:"Appearance"}},title:{description:"알림 제목입니다.",control:"text",table:{category:"Content"}},message:{description:"알림 본문 메시지입니다.",control:"text",table:{category:"Content"}}},args:{variant:"info",title:"안내",message:"변경 사항은 저장 버튼을 클릭해야 적용됩니다."}},s={name:"안내",args:{variant:"info",title:"안내",message:"변경 사항은 저장 버튼을 클릭해야 적용됩니다."}},n={name:"성공",args:{variant:"success",title:"저장 완료",message:"콘텐츠가 성공적으로 등록되었습니다. 승인 후 노출됩니다."}},a={name:"경고",args:{variant:"warning",title:"만료 임박",message:"현재 플랜이 7일 후 만료됩니다. 서비스 중단을 방지하려면 갱신해 주세요."}},t={name:"오류",args:{variant:"danger",title:"처리 실패",message:"요청을 처리하지 못했습니다. 잠시 후 다시 시도하거나 고객센터로 문의해 주세요."}},o={name:"전체 유형 비교",render:()=>e.jsxs("div",{className:"grid max-w-[520px] gap-3",children:[e.jsx(r,{variant:"info",title:"안내",message:"변경 사항 저장 후 반영됩니다."}),e.jsx(r,{variant:"success",title:"저장 완료",message:"콘텐츠가 등록되었습니다."}),e.jsx(r,{variant:"warning",title:"만료 임박",message:"7일 후 플랜이 만료됩니다."}),e.jsx(r,{variant:"danger",title:"처리 실패",message:"요청을 처리하지 못했습니다."})]}),parameters:{controls:{disable:!0}}};var l,m,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '안내',
  args: {
    variant: 'info',
    title: '안내',
    message: '변경 사항은 저장 버튼을 클릭해야 적용됩니다.'
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,u,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '성공',
  args: {
    variant: 'success',
    title: '저장 완료',
    message: '콘텐츠가 성공적으로 등록되었습니다. 승인 후 노출됩니다.'
  }
}`,...(x=(u=n.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var f,h,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '경고',
  args: {
    variant: 'warning',
    title: '만료 임박',
    message: '현재 플랜이 7일 후 만료됩니다. 서비스 중단을 방지하려면 갱신해 주세요.'
  }
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,b,k;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '오류',
  args: {
    variant: 'danger',
    title: '처리 실패',
    message: '요청을 처리하지 못했습니다. 잠시 후 다시 시도하거나 고객센터로 문의해 주세요.'
  }
}`,...(k=(b=t.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var j,w,I;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '전체 유형 비교',
  render: () => <div className="grid max-w-[520px] gap-3">
      <InlineAlert variant="info" title="안내" message="변경 사항 저장 후 반영됩니다." />
      <InlineAlert variant="success" title="저장 완료" message="콘텐츠가 등록되었습니다." />
      <InlineAlert variant="warning" title="만료 임박" message="7일 후 플랜이 만료됩니다." />
      <InlineAlert variant="danger" title="처리 실패" message="요청을 처리하지 못했습니다." />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(I=(w=o.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};const X=["Info","Success","Warning","Danger","AllVariants"];export{o as AllVariants,t as Danger,s as Info,n as Success,a as Warning,X as __namedExportsOrder,K as default};
