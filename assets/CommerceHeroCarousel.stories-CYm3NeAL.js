import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-BxXVWNx3.js";import{W as v}from"./WireframeMedia-DAgc5xmV.js";import{R as A}from"./ResponsiveHeroLayout-ZzLB38lR.js";import{C as w}from"./chevron-left-CMQDJVKp.js";import{C as E}from"./chevron-right-DtG4w6Mo.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DCADjnpI.js";import"./createLucideIcon-Ct87QT5c.js";function N({slides:t,pagination:j="dots"}){const[s,c]=S.useState(0),e=t[s];if(!e)return null;const d=l=>c(a=>(a+l+t.length)%t.length),L=e.ctaLabel?[{label:e.ctaLabel,href:e.href},...e.secondaryCtaLabel?[{label:e.secondaryCtaLabel,href:e.secondaryHref}]:[]]:[],m=j==="dots"?r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("button",{type:"button","aria-label":"이전 슬라이드",onClick:()=>d(-1),className:"rounded-full border p-2",children:r.jsx(w,{className:"size-4"})}),r.jsx("div",{className:"flex gap-1","aria-label":`${s+1} / ${t.length}`,children:t.map((l,a)=>r.jsx("button",{type:"button","aria-label":`${a+1}번 슬라이드`,"aria-current":a===s?"true":void 0,onClick:()=>c(a),className:`size-2 rounded-full ${a===s?"bg-krds-gray-90":"bg-krds-gray-30"}`},l.id))}),r.jsx("button",{type:"button","aria-label":"다음 슬라이드",onClick:()=>d(1),className:"rounded-full border p-2",children:r.jsx(E,{className:"size-4"})})]}):null;return r.jsx(A,{eyebrow:e.eyebrow,title:e.title,description:e.description,actions:L,mediaPosition:e.mediaPosition,alignment:e.alignment,supportingContent:r.jsxs(r.Fragment,{children:[e.supportingContent?r.jsx("p",{className:"text-sm text-krds-gray-60",children:e.supportingContent}):null,m?r.jsx("div",{className:"mt-6",children:m}):null]}),mediaSlot:e.imageSrc?r.jsx("img",{src:e.imageSrc,alt:"",className:"size-full min-h-64 object-cover"}):r.jsx(v,{label:"HERO CAMPAIGN",tone:"cool",className:"size-full"})})}N.__docgenInfo={description:"",methods:[],displayName:"CommerceHeroCarousel",props:{slides:{required:!0,tsType:{name:"Array",elements:[{name:"CommerceHeroSlide"}],raw:"CommerceHeroSlide[]"},description:""},pagination:{required:!1,tsType:{name:"union",raw:"'dots' | 'none'",elements:[{name:"literal",value:"'dots'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'dots'",computed:!1}}}};const T={title:"Organisms/Commerce/CommerceHeroCarousel",component:N,args:{slides:[{id:"season",eyebrow:"SEASONAL",title:"새로운 계절을 위한 선택",description:"취향에 맞는 상품을 만나보세요.",ctaLabel:"상품 보기"},{id:"benefit",eyebrow:"SPECIAL",title:"한정 혜택",description:"기간 한정 프로모션입니다.",ctaLabel:"혜택 보기"}]},parameters:{layout:"fullscreen"}},n={},o={args:{slides:[{id:"start",eyebrow:"FEATURED",title:"미디어를 먼저 보여주는 히어로",description:"좁은 화면에서는 콘텐츠 우선 순서도 제어합니다.",ctaLabel:"자세히 보기",mediaPosition:"start"}]}},i={args:{pagination:"none",slides:[{id:"centered",eyebrow:"CAMPAIGN",title:"중앙 정렬 캠페인",description:"캐러셀 제어와 레이아웃을 분리했습니다.",ctaLabel:"시작하기",secondaryCtaLabel:"더 알아보기",alignment:"centered"}]}};var p,u,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var g,f,C;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    slides: [{
      id: 'start',
      eyebrow: 'FEATURED',
      title: '미디어를 먼저 보여주는 히어로',
      description: '좁은 화면에서는 콘텐츠 우선 순서도 제어합니다.',
      ctaLabel: '자세히 보기',
      mediaPosition: 'start'
    }]
  }
}`,...(C=(f=o.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var y,x,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    pagination: 'none',
    slides: [{
      id: 'centered',
      eyebrow: 'CAMPAIGN',
      title: '중앙 정렬 캠페인',
      description: '캐러셀 제어와 레이아웃을 분리했습니다.',
      ctaLabel: '시작하기',
      secondaryCtaLabel: '더 알아보기',
      alignment: 'centered'
    }]
  }
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const _=["Default","MediaStart","CenteredNoPagination"];export{i as CenteredNoPagination,n as Default,o as MediaStart,_ as __namedExportsOrder,T as default};
