import{d as F}from"./reference-types-4ftiVeOu.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as r}from"./utils-DCADjnpI.js";import{C as _}from"./circle-check-BKxPZBMl.js";import{C as q}from"./clock-3-KKgYpl7S.js";import{C as z}from"./circle-BrRDsLJZ.js";import{c as O}from"./createLucideIcon-Ct87QT5c.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]],U=O("dot",A),u={default:"border-krds-gray-40 bg-white text-krds-gray-60",current:"border-krds-primary-60 bg-krds-primary-10 text-krds-primary-70",success:"border-krds-success-border bg-krds-success-surface text-krds-success-text",warning:"border-krds-warning-border bg-krds-warning-surface text-krds-warning-text",danger:"border-krds-danger-border bg-krds-danger-surface text-krds-danger-text",muted:"border-krds-gray-30 bg-krds-gray-5 text-krds-gray-50"},E=[{id:"draft",title:"콘텐츠 초안 작성",date:"2026.07.01 09:30",datetime:"2026-07-01T09:30:00+09:00",description:"프로모션 문구와 주요 이미지를 등록했습니다.",status:"success",badge:"완료"},{id:"review",title:"접근성 검토",date:"2026.07.02 14:00",datetime:"2026-07-02T14:00:00+09:00",description:"대체 텍스트와 버튼 레이블을 확인하고 있습니다.",status:"current",badge:"진행 중"},{id:"publish",title:"예약 배포",date:"2026.07.05 10:00",datetime:"2026-07-05T10:00:00+09:00",description:"승인 완료 후 예약된 시각에 게시됩니다.",status:"muted",badge:"대기"}];function L({status:s}){return s==="success"?e.jsx(_,{"aria-hidden":"true",className:"size-4"}):s==="current"||s==="warning"?e.jsx(q,{"aria-hidden":"true",className:"size-4"}):s==="muted"?e.jsx(z,{"aria-hidden":"true",className:"size-4"}):e.jsx(U,{"aria-hidden":"true",className:"size-5"})}function I({className:s,items:p=E,title:c,description:o,dense:S=!1,...C}){return e.jsxs("section",{className:"w-full",children:[c||o?e.jsxs("header",{className:"mb-4",children:[c?e.jsx("h3",{className:"text-base font-semibold text-krds-gray-90",children:c}):null,o?e.jsx("p",{className:"mt-1 text-sm text-krds-gray-60",children:o}):null]}):null,e.jsx("ol",{className:r("relative space-y-0",s),...C,children:p.map((t,D)=>{const l=t.status??"default",R=D===p.length-1;return e.jsxs("li",{className:r("relative grid grid-cols-[2rem_1fr] gap-3",t.disabled&&"opacity-50"),children:[e.jsxs("div",{className:"relative flex justify-center",children:[R?null:e.jsx("span",{"aria-hidden":"true",className:"absolute top-8 h-full w-px bg-krds-gray-30"}),e.jsx("span",{className:r("z-10 flex size-8 items-center justify-center rounded-full border-2",u[l]),children:e.jsx(L,{status:l})})]}),e.jsxs("div",{className:r("min-w-0 pb-6",S&&"pb-4"),children:[e.jsxs("div",{className:"flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1",children:[e.jsx("h4",{className:"text-sm font-semibold text-krds-gray-90",children:t.title}),t.badge?e.jsx("span",{className:r("rounded-full px-2 py-0.5 text-xs font-medium",u[l]),children:t.badge}):null]}),t.date||t.meta?e.jsxs("div",{className:"mt-1 flex flex-wrap items-center gap-2 text-xs text-krds-gray-50",children:[t.date?e.jsx("time",{dateTime:t.datetime,children:t.date}):null,t.meta?e.jsx("span",{children:t.meta}):null]}):null,t.description?e.jsx("p",{className:"mt-2 text-sm leading-6 text-krds-gray-70",children:t.description}):null]})]},t.id)})})]})}I.__docgenInfo={description:"",methods:[],displayName:"Timeline",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"TimelineItem"}],raw:"TimelineItem[]"},description:"",defaultValue:{value:`[
  {
    id: 'draft',
    title: '콘텐츠 초안 작성',
    date: '2026.07.01 09:30',
    datetime: '2026-07-01T09:30:00+09:00',
    description: '프로모션 문구와 주요 이미지를 등록했습니다.',
    status: 'success',
    badge: '완료',
  },
  {
    id: 'review',
    title: '접근성 검토',
    date: '2026.07.02 14:00',
    datetime: '2026-07-02T14:00:00+09:00',
    description: '대체 텍스트와 버튼 레이블을 확인하고 있습니다.',
    status: 'current',
    badge: '진행 중',
  },
  {
    id: 'publish',
    title: '예약 배포',
    date: '2026.07.05 10:00',
    datetime: '2026-07-05T10:00:00+09:00',
    description: '승인 완료 후 예약된 시각에 게시됩니다.',
    status: 'muted',
    badge: '대기',
  },
]`,computed:!1}},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},dense:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const m=[{id:"kickoff",title:"요구사항 확정",date:"2026.06.28 10:00",datetime:"2026-06-28T10:00:00+09:00",description:"콘텐츠 운영 정책과 검수 기준을 확정했습니다.",status:"success",badge:"완료"},{id:"design",title:"UI 디자인 반영",date:"2026.07.01 16:30",datetime:"2026-07-01T16:30:00+09:00",description:"KRDS 토큰과 shadcn/ui 구조를 기준으로 주요 화면을 정리했습니다.",status:"success",badge:"완료"},{id:"accessibility",title:"접근성 검수",date:"2026.07.03 11:00",datetime:"2026-07-03T11:00:00+09:00",description:"키보드 이동, 시간 마크업, 상태 레이블을 확인하고 있습니다.",status:"current",badge:"진행 중"},{id:"release",title:"릴리즈 준비",date:"2026.07.08 09:00",datetime:"2026-07-08T09:00:00+09:00",description:"최종 승인 후 문서와 Storybook을 함께 배포합니다.",status:"muted",badge:"예정"}],V=F([{library:"Element Plus",component:"Timeline",url:"https://element-plus.org/en-US/component/timeline",usedFor:["design","content","comparison"],relation:"compared"},{library:"PrimeVue",component:"Timeline",url:"https://primevue.org/timeline/",usedFor:["design","content","comparison"],relation:"compared"},{library:"Ant Design",component:"Timeline",url:"https://ant.design/components/timeline/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Timeline",url:"https://www.chakra-ui.com/docs/components/timeline",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Timeline",url:"https://quasar.dev/vue-components/timeline",usedFor:["comparison"],relation:"compared"},{library:"Salesforce Lightning Design System",component:"Activity Timeline",url:"https://www.lightningdesignsystem.com/components/activity-timeline/",usedFor:["content","behavior","comparison"],relation:"compared"},{library:"Semi Design",component:"Timeline",url:"https://semi.design/en-US/show/timeline",usedFor:["design","content","comparison"],relation:"compared"}]),X={title:"Organisms/Data/Timeline",component:I,tags:["autodocs","data","ref:ant-design","ref:quasar","ref:chakra-ui","ref:element-plus","ref:primevue","ref:lightning-design","ref:semi-design"],parameters:{references:V,layout:"centered",docs:{description:{component:"시간순 히스토리, 로그, 처리 상태를 수직 흐름으로 표시하는 데이터 오거나이즘입니다."}}},argTypes:{title:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},dense:{control:"boolean",table:{category:"Appearance"}},items:{control:"object",table:{category:"Data"}}},args:{title:"프로젝트 진행 이력",description:"주요 단계와 현재 처리 상태를 시간순으로 확인합니다.",items:m,dense:!1,className:"w-[560px]"}},n={name:"기본"},a={name:"좁은 간격",args:{dense:!0,description:"사이드 패널이나 상세 모달에서 사용할 수 있는 간격입니다."}},i={name:"주문 처리 현황",args:{title:"주문 처리 현황",description:"주문부터 배송까지 단계별 상태를 표시합니다.",items:[{id:"ordered",title:"주문 접수",date:"2026.07.01 10:23",datetime:"2026-07-01T10:23:00+09:00",description:"주문번호 #20260701-0042가 접수되었습니다.",status:"success",badge:"완료"},{id:"paid",title:"결제 완료",date:"2026.07.01 10:24",datetime:"2026-07-01T10:24:00+09:00",description:"신용카드 결제가 승인되었습니다.",status:"success",badge:"완료"},{id:"picking",title:"상품 준비 중",date:"2026.07.02 09:00",datetime:"2026-07-02T09:00:00+09:00",description:"물류센터에서 상품을 피킹 중입니다.",status:"current",badge:"진행 중"},{id:"shipping",title:"배송 출발",description:"송장 발행 후 배송 정보가 업데이트됩니다.",status:"muted",badge:"대기"}]}},d={name:"이슈 포함",args:{title:"배포 검수 로그",description:"검수 중 발견된 주의 항목을 함께 표시합니다.",items:[...m.slice(0,2),{id:"contrast",title:"대비 기준 확인 필요",date:"2026.07.03 15:20",datetime:"2026-07-03T15:20:00+09:00",description:"프로모션 배너의 보조 문구 대비가 낮아 수정 요청되었습니다.",status:"warning",badge:"주의"},m[3]]}};var g,b,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '기본'
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,h,y;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '좁은 간격',
  args: {
    dense: true,
    description: '사이드 패널이나 상세 모달에서 사용할 수 있는 간격입니다.'
  }
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var T,k,j;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '주문 처리 현황',
  args: {
    title: '주문 처리 현황',
    description: '주문부터 배송까지 단계별 상태를 표시합니다.',
    items: [{
      id: 'ordered',
      title: '주문 접수',
      date: '2026.07.01 10:23',
      datetime: '2026-07-01T10:23:00+09:00',
      description: '주문번호 #20260701-0042가 접수되었습니다.',
      status: 'success',
      badge: '완료'
    }, {
      id: 'paid',
      title: '결제 완료',
      date: '2026.07.01 10:24',
      datetime: '2026-07-01T10:24:00+09:00',
      description: '신용카드 결제가 승인되었습니다.',
      status: 'success',
      badge: '완료'
    }, {
      id: 'picking',
      title: '상품 준비 중',
      date: '2026.07.02 09:00',
      datetime: '2026-07-02T09:00:00+09:00',
      description: '물류센터에서 상품을 피킹 중입니다.',
      status: 'current',
      badge: '진행 중'
    }, {
      id: 'shipping',
      title: '배송 출발',
      description: '송장 발행 후 배송 정보가 업데이트됩니다.',
      status: 'muted',
      badge: '대기'
    }]
  }
}`,...(j=(k=i.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var w,N,v;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '이슈 포함',
  args: {
    title: '배포 검수 로그',
    description: '검수 중 발견된 주의 항목을 함께 표시합니다.',
    items: [...projectItems.slice(0, 2), {
      id: 'contrast',
      title: '대비 기준 확인 필요',
      date: '2026.07.03 15:20',
      datetime: '2026-07-03T15:20:00+09:00',
      description: '프로모션 배너의 보조 문구 대비가 낮아 수정 요청되었습니다.',
      status: 'warning',
      badge: '주의'
    }, projectItems[3]]
  }
}`,...(v=(N=d.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};const Y=["Default","Dense","OrderStatus","WithIssue"];export{n as Default,a as Dense,i as OrderStatus,d as WithIssue,Y as __namedExportsOrder,X as default};
