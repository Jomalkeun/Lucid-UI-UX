import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as l}from"./utils-DCADjnpI.js";import{d as D}from"./reference-types-4ftiVeOu.js";const O={danger:{wrapper:"bg-krds-danger-surface border-b border-krds-danger-border",icon:"text-krds-danger-text",text:"text-krds-danger-text",link:"text-krds-danger-text underline hover:no-underline font-semibold",ariaLive:"assertive"},ok:{wrapper:"bg-krds-success-surface border-b border-krds-success-border",icon:"text-krds-success-text",text:"text-krds-success-text",link:"text-krds-success-text underline hover:no-underline font-semibold",ariaLive:"polite"},info:{wrapper:"bg-krds-info-surface border-b border-krds-info-border",icon:"text-krds-info-text",text:"text-krds-info-text",link:"text-krds-info-text underline hover:no-underline font-semibold",ariaLive:"polite"}};function B(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]})}function W(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[e.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),e.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})}function M(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]})}const U={danger:B,ok:W,info:M};function t({alerts:d=[],className:S,children:T,...L}){return d.length?e.jsxs("div",{className:l("w-full",S),...L,children:[d.map((r,N)=>{const s=O[r.variant],F=U[r.variant];return e.jsxs("div",{role:"alert","aria-live":s.ariaLive,className:l("flex items-center justify-center gap-2 px-4 py-2.5 text-sm",s.wrapper),children:[e.jsx("span",{className:s.icon,children:e.jsx(F,{})}),e.jsxs("p",{className:l("text-krds-body-sm",s.text),children:[r.message,r.href&&r.linkText&&e.jsxs(e.Fragment,{children:[" ",e.jsx("a",{href:r.href,className:s.link,children:r.linkText})]})]})]},N)}),T]}):null}t.__docgenInfo={description:"",methods:[],displayName:"CriticalAlert",props:{alerts:{required:!1,tsType:{name:"Array",elements:[{name:"CriticalAlertItemProps"}],raw:"CriticalAlertItemProps[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};const I={variant:"info",message:"2026년 6월 15일(일) 02:00~06:00 서버 점검이 예정되어 있습니다."},V=D([{library:"Bootstrap",component:"Alerts",url:"https://getbootstrap.com/docs/5.3/components/alerts/",usedFor:["comparison"],relation:"compared"},{library:"U.S. Web Design System",component:"Site alert",url:"https://designsystem.digital.gov/components/site-alert/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"GOV.UK Design System",component:"Warning text",url:"https://design-system.service.gov.uk/components/warning-text/",usedFor:["design","accessibility","comparison"],relation:"compared"},{library:"KRDS",component:"CriticalAlert",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-criticalalert--docs",usedFor:["design","behavior","api"],relation:"adapted"},{library:"Quasar",component:"Banner",url:"https://quasar.dev/vue-components/banner",usedFor:["comparison"],relation:"compared"}]),R={title:"Molecules/Feedback/CriticalAlert",component:t,tags:["ref:bootstrap","autodocs","feedback","ref:shadcn-ui","ref:quasar","ref:govuk","ref:uswds"],parameters:{references:V,docs:{description:{component:"페이지 상단에 표시되는 시스템 수준의 긴급 공지 배너입니다. 장애, 복구, 점검 안내를 여러 심각도로 노출합니다."}}},argTypes:{alerts:{description:"표시할 알림 목록입니다.",control:"object",table:{type:{summary:"CriticalAlertItemProps[]"},defaultValue:{summary:"[]"},category:"Content"}}},args:{alerts:[I]}},n={name:"정보 공지",args:{alerts:[I]}},a={name:"긴급 장애",args:{alerts:[{variant:"danger",message:"현재 로그인 서비스에 장애가 발생하여 접속이 일시 중단되었습니다.",href:"/notice/123",linkText:"장애 공지 보기"}]}},o={name:"복구 완료",args:{alerts:[{variant:"ok",message:"로그인 서비스 장애가 복구되었습니다. 불편을 드려 죄송합니다."}]}},i={name:"복수 공지",args:{alerts:[{variant:"danger",message:"현재 파일 첨부 기능에 오류가 있습니다.",href:"/notice/124",linkText:"상세 보기"},{variant:"info",message:"6월 20일부터 UI가 개편됩니다. 미리 확인해보세요.",href:"/notice/125",linkText:"개편 안내 보기"}]}},c={name:"전체 상태 비교",render:()=>e.jsxs("div",{className:"grid gap-4 p-6",children:[e.jsx(t,{alerts:[{variant:"info",message:"서버 점검 예정 공지입니다."}]}),e.jsx(t,{alerts:[{variant:"danger",message:"긴급 장애가 발생했습니다.",href:"#",linkText:"공지 보기"}]}),e.jsx(t,{alerts:[{variant:"ok",message:"장애가 복구되었습니다."}]})]}),parameters:{controls:{disable:!0}}};var m,p,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '정보 공지',
  args: {
    alerts: [infoAlert]
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,x,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '긴급 장애',
  args: {
    alerts: [{
      variant: 'danger',
      message: '현재 로그인 서비스에 장애가 발생하여 접속이 일시 중단되었습니다.',
      href: '/notice/123',
      linkText: '장애 공지 보기'
    }]
  }
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var k,h,v;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '복구 완료',
  args: {
    alerts: [{
      variant: 'ok',
      message: '로그인 서비스 장애가 복구되었습니다. 불편을 드려 죄송합니다.'
    }]
  }
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var b,y,j;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '복수 공지',
  args: {
    alerts: [{
      variant: 'danger',
      message: '현재 파일 첨부 기능에 오류가 있습니다.',
      href: '/notice/124',
      linkText: '상세 보기'
    }, {
      variant: 'info',
      message: '6월 20일부터 UI가 개편됩니다. 미리 확인해보세요.',
      href: '/notice/125',
      linkText: '개편 안내 보기'
    }]
  }
}`,...(j=(y=i.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var w,A,C;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '전체 상태 비교',
  render: () => <div className="grid gap-4 p-6">
      <CriticalAlert alerts={[{
      variant: 'info',
      message: '서버 점검 예정 공지입니다.'
    }]} />
      <CriticalAlert alerts={[{
      variant: 'danger',
      message: '긴급 장애가 발생했습니다.',
      href: '#',
      linkText: '공지 보기'
    }]} />
      <CriticalAlert alerts={[{
      variant: 'ok',
      message: '장애가 복구되었습니다.'
    }]} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(C=(A=c.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const E=["Info","Danger","Ok","Multiple","AllStates"];export{c as AllStates,a as Danger,n as Info,i as Multiple,o as Ok,E as __namedExportsOrder,R as default};
