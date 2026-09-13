import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as A}from"./index-BxXVWNx3.js";import{c as H}from"./utils-DCADjnpI.js";import{c as S}from"./index-CkIaN0ex.js";import{d as P}from"./reference-types-4ftiVeOu.js";import"./_commonjsHelpers-CqkleIqs.js";const U=S("flex items-start gap-3 px-4 py-3 font-sans",{variants:{type:{info:"bg-krds-info-surface border-krds-info-border text-krds-info-text",success:"bg-krds-success-surface border-krds-success-border text-krds-success-text",warning:"bg-krds-warning-surface border-krds-warning-border text-krds-warning-text",error:"bg-krds-danger-surface border-krds-danger-border text-krds-danger-text",promo:"bg-krds-primary-10 border-krds-primary-50 text-krds-primary-base"},position:{inline:"rounded-lg border",top:"border-b fixed top-0 left-0 right-0",bottom:"border-t fixed bottom-0 left-0 right-0"}},defaultVariants:{type:"info",position:"inline"}}),_=S("mt-2 px-3 py-1 rounded-md text-krds-body-xs font-semibold text-krds-white border-0 cursor-pointer",{variants:{type:{info:"bg-krds-info-base",success:"bg-krds-success-base",warning:"bg-krds-warning-base",error:"bg-krds-danger-base",promo:"bg-krds-primary-50"}},defaultVariants:{type:"info"}}),G={info:"ℹ️",success:"✅",warning:"⚠️",error:"❌",promo:"🎉"};function r({message:l,description:u,type:d="info",icon:V,closable:L=!0,position:s="inline",action:p,onClose:m,sticky:I=!1}){const[E,O]=A.useState(!1);if(E)return null;const W=()=>{O(!0),m==null||m()},z=s!=="inline"?I?s==="top"?"sticky top-0 left-0 right-0 border-b z-50":"sticky bottom-0 left-0 right-0 border-t z-50":s==="top"?"fixed top-0 left-0 right-0 border-b z-50":"fixed bottom-0 left-0 right-0 border-t z-50":void 0;return e.jsxs("div",{role:"banner",className:H(U({type:d,position:s}),z),children:[e.jsx("span",{className:"text-lg flex-shrink-0 leading-tight mt-0.5","aria-hidden":"true",children:V??G[d]}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"text-krds-body-sm font-semibold",children:l}),u&&e.jsx("div",{className:"text-krds-body-xs text-krds-gray-70 mt-0.5 leading-relaxed",children:u}),p&&e.jsx("button",{type:"button",onClick:p.onClick,className:_({type:d}),children:p.label})]}),L&&e.jsx("button",{type:"button",onClick:W,"aria-label":"닫기",className:"bg-transparent border-0 cursor-pointer flex-shrink-0 leading-none p-1 opacity-60 hover:opacity-100 transition-opacity",children:"✕"})]})}r.__docgenInfo={description:"",methods:[],displayName:"Banner",props:{message:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error' | 'promo'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'promo'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},closable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},position:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'inline'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'inline'"}]},description:"",defaultValue:{value:"'inline'",computed:!1}},action:{required:!1,tsType:{name:"signature",type:"object",raw:"{ label: string; onClick: () => void }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},sticky:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const M=P([{library:"U.S. Web Design System",component:"Banner",url:"https://designsystem.digital.gov/components/banner/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"GOV.UK Design System",component:"Notification banner",url:"https://design-system.service.gov.uk/components/notification-banner/",usedFor:["behavior","accessibility","comparison"],relation:"compared"},{library:"Flowbite",component:"Banner",url:"https://flowbite.com/docs/components/banner/",usedFor:["comparison"],relation:"compared"},{library:"Mantine UI",component:"Banners",url:"https://ui.mantine.dev/category/banners/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."},{library:"Quasar",component:"Banner",url:"https://quasar.dev/vue-components/banner",usedFor:["comparison"],relation:"compared"}]),$={title:"Molecules/Display/Banner",component:r,tags:["autodocs","ref:flowbite","ref:quasar","ref:mantine-ui","ref:govuk","ref:uswds"],parameters:{references:M,docs:{description:{component:"\n## Banner\n\n페이지 상단 또는 하단에 고정되는 공지/안내 배너 컴포넌트입니다.\n쿠키 동의, 프로모션, 시스템 공지 등을 전체 너비로 표시하며 닫기 버튼을 포함합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `message` | `ReactNode` | - | 주 메시지 |\n| `description` | `ReactNode` | - | 부가 설명 |\n| `type` | `'info'\\|'success'\\|'warning'\\|'error'\\|'promo'` | `'info'` | 유형 |\n| `closable` | `boolean` | `true` | 닫기 버튼 |\n| `position` | `'top'\\|'bottom'\\|'inline'` | `'inline'` | 위치 |\n| `action` | `{label, onClick}` | - | 액션 버튼 |\n        "}}},argTypes:{type:{control:"select",options:["info","success","warning","error","promo"],description:"유형",table:{category:"Appearance"}},closable:{control:"boolean",description:"닫기 버튼",table:{category:"Appearance"}},position:{control:"select",options:["top","bottom","inline"],description:"위치",table:{category:"Layout"}}},args:{message:"새로운 업데이트가 있습니다.",type:"info",closable:!0,position:"inline"}},t={name:"기본 (info)",parameters:{docs:{description:{story:"기본 정보 배너입니다."}}},render:l=>e.jsx(r,{...l})},a={name:"유형 변형 모아보기",parameters:{docs:{description:{story:"모든 유형의 배너를 한눈에 확인합니다."}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",fontFamily:"system-ui"},children:[e.jsx(r,{type:"info",message:"서버 점검이 오늘 오전 2시에 예정되어 있습니다.",description:"점검 시간: 2024-01-20 02:00 ~ 04:00"}),e.jsx(r,{type:"success",message:"파일 업로드가 완료되었습니다.",description:"3개의 파일이 성공적으로 처리되었습니다."}),e.jsx(r,{type:"warning",message:"세션이 곧 만료됩니다.",description:"10분 후 자동으로 로그아웃됩니다. 지금 연장하려면 클릭하세요."}),e.jsx(r,{type:"error",message:"결제 처리 중 오류가 발생했습니다.",description:"신용카드 정보를 확인하고 다시 시도해주세요."}),e.jsx(r,{type:"promo",message:"🎊 신년 프로모션! 전 상품 30% 할인",description:"2024년 1월 31일까지 한정 행사입니다."})]})},n={name:"액션 버튼",parameters:{docs:{description:{story:"액션 버튼이 있는 배너입니다."}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{type:"warning",message:"쿠키 정책 동의가 필요합니다.",description:"저희 서비스는 더 나은 경험을 위해 쿠키를 사용합니다. 계속하려면 동의해주세요.",action:{label:"동의하기",onClick:()=>alert("동의 완료")}}),e.jsx(r,{type:"info",message:"앱 업데이트가 가능합니다.",action:{label:"지금 업데이트",onClick:()=>alert("업데이트 시작")}}),e.jsx(r,{type:"promo",message:"첫 구매 10% 할인 코드: HELLO10",action:{label:"코드 복사",onClick:()=>alert("복사됨: HELLO10")}})]})},o={name:"닫기 없음",parameters:{docs:{description:{story:"닫기 버튼 없이 항상 표시되는 배너입니다."}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{type:"error",message:"계정이 일시 정지되었습니다.",description:"관리자에게 문의하세요.",closable:!1}),e.jsx(r,{type:"warning",message:"구독이 3일 후 만료됩니다.",closable:!1})]})},i={name:"쿠키 동의 배너",parameters:{docs:{description:{story:"GDPR 쿠키 동의 배너 예시입니다."}}},render:()=>e.jsxs("div",{style:{fontFamily:"system-ui"},children:[e.jsx("div",{style:{height:"100px",background:"#f8f9fa",borderRadius:"8px 8px 0 0",display:"flex",alignItems:"center",justifyContent:"center",color:"#6b7280"},children:"페이지 콘텐츠"}),e.jsx(r,{type:"info",icon:"🍪",message:"이 웹사이트는 쿠키를 사용합니다",description:"최적의 서비스 제공을 위해 쿠키를 사용합니다. 계속 이용하시면 쿠키 사용에 동의하게 됩니다. 자세한 내용은 개인정보 처리방침을 참고하세요.",action:{label:"모두 허용",onClick:()=>alert("쿠키 동의")},position:"bottom"})]})},c={name:"시스템 공지",parameters:{docs:{description:{story:"시스템 점검이나 장애 공지 배너입니다."}}},render:()=>e.jsxs("div",{style:{fontFamily:"system-ui"},children:[e.jsx(r,{type:"warning",icon:"🔧",message:"정기 시스템 점검 안내",description:"2024년 1월 20일(토) 새벽 2시~4시 서비스 점검이 예정되어 있습니다. 이 시간 동안 서비스 이용이 제한됩니다.",position:"top",closable:!1}),e.jsx("div",{style:{padding:"16px",background:"#f8f9fa",borderRadius:"0 0 8px 8px",height:"120px",display:"flex",alignItems:"center",justifyContent:"center",color:"#6b7280"},children:"서비스 화면"})]})};var f,y,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '기본 (info)',
  parameters: {
    docs: {
      description: {
        story: '기본 정보 배너입니다.'
      }
    }
  },
  render: args => <Banner {...args} />
}`,...(g=(y=t.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,x,v;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '유형 변형 모아보기',
  parameters: {
    docs: {
      description: {
        story: '모든 유형의 배너를 한눈에 확인합니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    fontFamily: 'system-ui'
  }}>
      <Banner type="info" message="서버 점검이 오늘 오전 2시에 예정되어 있습니다." description="점검 시간: 2024-01-20 02:00 ~ 04:00" />
      <Banner type="success" message="파일 업로드가 완료되었습니다." description="3개의 파일이 성공적으로 처리되었습니다." />
      <Banner type="warning" message="세션이 곧 만료됩니다." description="10분 후 자동으로 로그아웃됩니다. 지금 연장하려면 클릭하세요." />
      <Banner type="error" message="결제 처리 중 오류가 발생했습니다." description="신용카드 정보를 확인하고 다시 시도해주세요." />
      <Banner type="promo" message="🎊 신년 프로모션! 전 상품 30% 할인" description="2024년 1월 31일까지 한정 행사입니다." />
    </div>
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var k,h,j;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '액션 버튼',
  parameters: {
    docs: {
      description: {
        story: '액션 버튼이 있는 배너입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Banner type="warning" message="쿠키 정책 동의가 필요합니다." description="저희 서비스는 더 나은 경험을 위해 쿠키를 사용합니다. 계속하려면 동의해주세요." action={{
      label: '동의하기',
      onClick: () => alert('동의 완료')
    }} />
      <Banner type="info" message="앱 업데이트가 가능합니다." action={{
      label: '지금 업데이트',
      onClick: () => alert('업데이트 시작')
    }} />
      <Banner type="promo" message="첫 구매 10% 할인 코드: HELLO10" action={{
      label: '코드 복사',
      onClick: () => alert('복사됨: HELLO10')
    }} />
    </div>
}`,...(j=(h=n.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var w,B,C;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '닫기 없음',
  parameters: {
    docs: {
      description: {
        story: '닫기 버튼 없이 항상 표시되는 배너입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Banner type="error" message="계정이 일시 정지되었습니다." description="관리자에게 문의하세요." closable={false} />
      <Banner type="warning" message="구독이 3일 후 만료됩니다." closable={false} />
    </div>
}`,...(C=(B=o.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var R,N,D;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '쿠키 동의 배너',
  parameters: {
    docs: {
      description: {
        story: 'GDPR 쿠키 동의 배너 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    fontFamily: 'system-ui'
  }}>
      <div style={{
      height: '100px',
      background: '#f8f9fa',
      borderRadius: '8px 8px 0 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#6b7280'
    }}>
        페이지 콘텐츠
      </div>
      <Banner type="info" icon="🍪" message="이 웹사이트는 쿠키를 사용합니다" description="최적의 서비스 제공을 위해 쿠키를 사용합니다. 계속 이용하시면 쿠키 사용에 동의하게 됩니다. 자세한 내용은 개인정보 처리방침을 참고하세요." action={{
      label: '모두 허용',
      onClick: () => alert('쿠키 동의')
    }} position="bottom" />
    </div>
}`,...(D=(N=i.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var q,T,F;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '시스템 공지',
  parameters: {
    docs: {
      description: {
        story: '시스템 점검이나 장애 공지 배너입니다.'
      }
    }
  },
  render: () => <div style={{
    fontFamily: 'system-ui'
  }}>
      <Banner type="warning" icon="🔧" message="정기 시스템 점검 안내" description="2024년 1월 20일(토) 새벽 2시~4시 서비스 점검이 예정되어 있습니다. 이 시간 동안 서비스 이용이 제한됩니다." position="top" closable={false} />
      <div style={{
      padding: '16px',
      background: '#f8f9fa',
      borderRadius: '0 0 8px 8px',
      height: '120px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#6b7280'
    }}>
        서비스 화면
      </div>
    </div>
}`,...(F=(T=c.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};const ee=["Default","TypeVariants","WithAction","WithoutClose","CookieBanner","SystemNotice"];export{i as CookieBanner,t as Default,c as SystemNotice,a as TypeVariants,n as WithAction,o as WithoutClose,ee as __namedExportsOrder,$ as default};
