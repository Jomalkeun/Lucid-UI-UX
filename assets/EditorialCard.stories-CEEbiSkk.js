import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{c as l}from"./utils-DCADjnpI.js";import{W as z}from"./WireframeMedia-DAgc5xmV.js";import{A as T}from"./arrow-up-right-RirGPaQe.js";import"./createLucideIcon-Ct87QT5c.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";const A={square:"aspect-square",landscape:"aspect-[4/3]",portrait:"aspect-[3/4]"};function r({item:e,variant:i="standard",metaSlot:n,actionSlot:y,mediaAspect:E="landscape"}){const c=a.jsxs(a.Fragment,{children:[a.jsx("div",{className:l("overflow-hidden bg-muted",i==="horizontal"?"aspect-[4/3] sm:w-2/5":A[E]),children:e.imageSrc?a.jsx("img",{src:e.imageSrc,alt:e.imageAlt??e.title,className:"size-full object-cover"}):a.jsx(z,{label:e.category??"EDITORIAL IMAGE",tone:e.tone})}),a.jsxs("div",{className:"flex flex-1 flex-col p-5",children:[a.jsx("p",{className:"text-xs font-semibold tracking-wide text-krds-primary-base",children:e.category??"EDITORIAL"}),a.jsx("h3",{className:"mt-2 text-xl font-bold leading-snug",children:e.title}),e.summary?a.jsx("p",{className:"mt-3 text-sm leading-6 text-muted-foreground",children:e.summary}):null,a.jsxs("div",{className:"mt-auto flex items-center justify-between gap-3 pt-5 text-xs text-muted-foreground",children:[n??e.meta?a.jsx("span",{children:n??e.meta}):a.jsx("span",{}),y??(e.href?a.jsx(T,{"aria-hidden":"true",className:"size-4"}):null)]})]})]});return e.href?a.jsx("a",{href:e.href,className:l("group block overflow-hidden border border-border bg-card transition hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",i==="horizontal"&&"sm:flex"),children:c}):a.jsx("article",{className:l("overflow-hidden border border-border bg-card",i==="horizontal"&&"sm:flex"),children:c})}r.__docgenInfo={description:"",methods:[],displayName:"EditorialCard",props:{item:{required:!0,tsType:{name:"EditorialCardItem"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'featured' | 'standard' | 'horizontal'",elements:[{name:"literal",value:"'featured'"},{name:"literal",value:"'standard'"},{name:"literal",value:"'horizontal'"}]},description:"",defaultValue:{value:"'standard'",computed:!1}},metaSlot:{required:!1,tsType:{name:"ReactNode"},description:""},actionSlot:{required:!1,tsType:{name:"ReactNode"},description:""},mediaAspect:{required:!1,tsType:{name:"union",raw:"'square' | 'landscape' | 'portrait'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'landscape'"},{name:"literal",value:"'portrait'"}]},description:"",defaultValue:{value:"'landscape'",computed:!1}}}};const _={title:"Molecules/Content/EditorialCard",component:r,args:{item:{id:"coast",category:"TRAVEL NOTES",title:"느린 속도로 만나는 해안의 하루",summary:"지역의 리듬과 풍경을 따라가는 짧은 여행 기록입니다.",meta:"4 min read",tone:"cool",href:"#story"}}},s={render:e=>a.jsx("div",{className:"w-80",children:a.jsx(r,{...e})})},t={args:{variant:"featured",mediaAspect:"portrait"},render:e=>a.jsx("div",{className:"max-w-md",children:a.jsx(r,{...e})})},o={args:{variant:"horizontal"},render:e=>a.jsx("div",{className:"max-w-2xl",children:a.jsx(r,{...e})})},d={args:{item:{id:"long",title:"계절과 도시의 표정을 따라 천천히 걷는 주말 여행에 관한 아주 긴 제목",summary:"긴 요약도 레이아웃을 무너뜨리지 않아야 합니다.",tone:"warm"}},render:e=>a.jsx("div",{className:"w-80",children:a.jsx(r,{...e})})};var m,u,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div className="w-80"><EditorialCard {...args} /></div>
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,x,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'featured',
    mediaAspect: 'portrait'
  },
  render: args => <div className="max-w-md"><EditorialCard {...args} /></div>
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var h,v,j;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'horizontal'
  },
  render: args => <div className="max-w-2xl"><EditorialCard {...args} /></div>
}`,...(j=(v=o.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var N,b,w;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    item: {
      id: 'long',
      title: '계절과 도시의 표정을 따라 천천히 걷는 주말 여행에 관한 아주 긴 제목',
      summary: '긴 요약도 레이아웃을 무너뜨리지 않아야 합니다.',
      tone: 'warm'
    }
  },
  render: args => <div className="w-80"><EditorialCard {...args} /></div>
}`,...(w=(b=d.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const k=["Standard","Featured","Horizontal","LongTitle"];export{t as Featured,o as Horizontal,d as LongTitle,s as Standard,k as __namedExportsOrder,_ as default};
