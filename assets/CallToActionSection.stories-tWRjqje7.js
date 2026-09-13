import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as g}from"./button-B_kt0lNs.js";import{W as N}from"./WireframeMedia-DAgc5xmV.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DtBajwEi.js";import"./index-CkIaN0ex.js";import"./utils-DCADjnpI.js";import"./loader-circle-Db56uVXG.js";import"./createLucideIcon-Ct87QT5c.js";function x({eyebrow:y,title:b,description:s,actions:i=[],media:n,mediaPosition:v="end",surface:o="muted",align:l="start"}){const h={plain:"bg-krds-gray-0",muted:"bg-krds-gray-5",dark:"bg-krds-gray-90 text-white"}[o],T=o==="dark"?"text-white/75":"text-krds-gray-60",w=e.jsxs("div",{className:`flex-1 ${l==="center"?"text-center":""}`,children:[e.jsx("p",{className:"text-sm font-semibold text-krds-primary-50",children:y}),e.jsx("h2",{className:"mt-2 text-3xl font-bold tracking-tight",children:b}),s?e.jsx("div",{className:`mt-4 max-w-2xl text-sm leading-6 ${T} ${l==="center"?"mx-auto":""}`,children:s}):null,i.length?e.jsx("div",{className:`mt-6 flex flex-wrap gap-3 ${l==="center"?"justify-center":""}`,children:i.map(a=>a.href?e.jsx("a",{href:a.href,className:a.variant==="secondary"?"rounded-md border px-4 py-2 text-sm font-semibold":"rounded-md bg-krds-primary-50 px-4 py-2 text-sm font-semibold text-white",children:a.label},a.label):e.jsx(g,{onClick:a.onClick,children:a.label},a.label))}):null]});return e.jsx("section",{className:h,children:e.jsxs("div",{className:`mx-auto flex max-w-screen-xl flex-col gap-8 px-5 py-14 md:flex-row md:items-center ${v==="start"?"md:flex-row-reverse":""}`,children:[w,n?e.jsx("div",{className:"min-h-48 flex-1 overflow-hidden rounded-xl",children:n}):null]})})}x.__docgenInfo={description:"",methods:[],displayName:"CallToActionSection",props:{eyebrow:{required:!1,tsType:{name:"ReactNode"},description:""},title:{required:!0,tsType:{name:"ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"CallToAction"}],raw:"CallToAction[]"},description:"",defaultValue:{value:"[]",computed:!1}},media:{required:!1,tsType:{name:"ReactNode"},description:""},mediaPosition:{required:!1,tsType:{name:"union",raw:"'start' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:"",defaultValue:{value:"'end'",computed:!1}},surface:{required:!1,tsType:{name:"union",raw:"'plain' | 'muted' | 'dark'",elements:[{name:"literal",value:"'plain'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'dark'"}]},description:"",defaultValue:{value:"'muted'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"}]},description:"",defaultValue:{value:"'start'",computed:!1}}}};const M={title:"Organisms/Content/CallToActionSection",component:x,parameters:{layout:"fullscreen"}},t={args:{eyebrow:"NEXT STEP",title:"다음 단계를 시작해 보세요",description:"설명과 행동, 미디어를 독립적으로 조합하는 CTA 섹션입니다.",actions:[{label:"시작하기"},{label:"더 알아보기",variant:"secondary"}],media:e.jsx(N,{label:"CTA media"})}},r={...t,parameters:{viewport:{defaultViewport:"mobile1"}}};var d,m,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    eyebrow: 'NEXT STEP',
    title: '다음 단계를 시작해 보세요',
    description: '설명과 행동, 미디어를 독립적으로 조합하는 CTA 섹션입니다.',
    actions: [{
      label: '시작하기'
    }, {
      label: '더 알아보기',
      variant: 'secondary'
    }],
    media: <WireframeMedia label="CTA media" />
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,u,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const _=["Default","MobileStack"];export{t as Default,r as MobileStack,_ as __namedExportsOrder,M as default};
