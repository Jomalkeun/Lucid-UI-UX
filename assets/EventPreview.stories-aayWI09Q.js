import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as l}from"./utils-DCADjnpI.js";import{c as k}from"./createLucideIcon-Ct87QT5c.js";import{E as R}from"./external-link-tAhKjUzZ.js";import{C as E}from"./calendar-days-D0Zu5R9a.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],D=k("smartphone",C),T={full:"w-full",medium:"w-3/4",short:"w-1/2"};function f({className:y,banner:t={title:"여름 데이터 선물",subtitle:"06.10 ~ 06.30 한정 이벤트",badge:"LIVE"},bodyLines:g=["full","full","short"],cta:h="지금 선물 받기",previewDate:v="2026.06.10 기준 미리보기",deviceLabel:w="모바일 이벤트 상세",statusLabel:N="검수용 미리보기",...j}){return e.jsxs("section",{className:l("w-full max-w-[420px] rounded-md border border-krds-gray-30 bg-white shadow-sm",y),...j,children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-krds-gray-20 px-4 py-3",children:[e.jsxs("div",{className:"inline-flex min-w-0 items-center gap-2 text-sm font-semibold text-krds-gray-80",children:[e.jsx(D,{"aria-hidden":"true",className:"size-4 shrink-0 text-krds-primary-60"}),e.jsx("span",{className:"truncate",children:w})]}),e.jsx("span",{className:"rounded-md bg-krds-gray-10 px-2 py-1 text-xs font-medium text-krds-gray-60",children:N})]}),e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"overflow-hidden rounded-md border border-krds-primary-20 bg-krds-primary-5",children:[e.jsxs("div",{className:"bg-krds-primary-60 px-4 py-6 text-white",children:[t.badge?e.jsx("span",{className:"mb-3 inline-flex rounded-md bg-white/15 px-2 py-1 text-xs font-semibold",children:t.badge}):null,e.jsx("h3",{className:"line-clamp-2 text-xl font-bold leading-tight",children:t.title}),t.subtitle?e.jsx("p",{className:"mt-2 text-sm text-white/85",children:t.subtitle}):null]}),e.jsxs("div",{className:"space-y-3 bg-white p-4",children:[g.map((n,L)=>e.jsx("span",{className:l("block h-3 rounded bg-krds-gray-20",T[n])},`${n}-${L}`)),e.jsxs("button",{type:"button",className:"mt-2 inline-flex h-10 w-full items-center justify-center gap-1 rounded-md bg-krds-primary-60 px-4 text-sm font-semibold text-white transition hover:bg-krds-primary-70",children:[h,e.jsx(R,{"aria-hidden":"true",className:"size-3.5"})]})]})]})}),e.jsxs("footer",{className:"flex items-center gap-2 border-t border-krds-gray-20 px-4 py-3 text-xs text-krds-gray-60",children:[e.jsx(E,{"aria-hidden":"true",className:"size-3.5"}),e.jsx("span",{children:v})]})]})}f.__docgenInfo={description:"",methods:[],displayName:"EventPreview",props:{banner:{required:!1,tsType:{name:"EventPreviewBanner"},description:"",defaultValue:{value:"{ title: '여름 데이터 선물', subtitle: '06.10 ~ 06.30 한정 이벤트', badge: 'LIVE' }",computed:!1}},bodyLines:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"'full' | 'medium' | 'short'",elements:[{name:"literal",value:"'full'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'short'"}]}],raw:"EventPreviewBodyLine[]"},description:"",defaultValue:{value:"['full', 'full', 'short']",computed:!1}},cta:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'지금 선물 받기'",computed:!1}},previewDate:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'2026.06.10 기준 미리보기'",computed:!1}},deviceLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'모바일 이벤트 상세'",computed:!1}},statusLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'검수용 미리보기'",computed:!1}}}};const M={title:"Organisms/Operations/EventPreview",component:f,tags:["autodocs","operations"],parameters:{layout:"centered",docs:{description:{component:"운영자가 이벤트 배너, 본문 길이, CTA, 기준일을 한 화면에서 검수할 수 있는 모바일 이벤트 미리보기입니다."}}},argTypes:{banner:{control:"object",table:{category:"Content"}},bodyLines:{control:"object",table:{category:"Content"}},cta:{control:"text",table:{category:"Content"}},previewDate:{control:"text",table:{category:"Content"}},deviceLabel:{control:"text",table:{category:"Content"}},statusLabel:{control:"text",table:{category:"State"}}},args:{banner:{title:"여름 데이터 선물",subtitle:"06.10 ~ 06.30 한정 이벤트",badge:"LIVE"},bodyLines:["full","full","short"],cta:"지금 선물 받기",previewDate:"2026.06.10 기준 미리보기",deviceLabel:"모바일 이벤트 상세",statusLabel:"검수용 미리보기"}},a={name:"기본"},r={name:"긴 제목",args:{banner:{title:"여름 한정 초대형 데이터 선물 이벤트",subtitle:"07.01 ~ 08.31",badge:"예약"},bodyLines:["full","full"],cta:"자세히 보기",previewDate:"2026.07.01 기준 미리보기"}},s={name:"최소 콘텐츠",args:{banner:{title:"멤버십 혜택",subtitle:"상시"},bodyLines:["short"],cta:"혜택 보기",previewDate:"2026.06.10 기준 미리보기"}};var o,i,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '기본'
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,m,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '긴 제목',
  args: {
    banner: {
      title: '여름 한정 초대형 데이터 선물 이벤트',
      subtitle: '07.01 ~ 08.31',
      badge: '예약'
    },
    bodyLines: ['full', 'full'],
    cta: '자세히 보기',
    previewDate: '2026.07.01 기준 미리보기'
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,b,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '최소 콘텐츠',
  args: {
    banner: {
      title: '멤버십 혜택',
      subtitle: '상시'
    },
    bodyLines: ['short'],
    cta: '혜택 보기',
    previewDate: '2026.06.10 기준 미리보기'
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const O=["Default","LongTitle","MinimalContent"];export{a as Default,r as LongTitle,s as MinimalContent,O as __namedExportsOrder,M as default};
