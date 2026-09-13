import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{d as w}from"./reference-types-4ftiVeOu.js";import{r as N}from"./index-BxXVWNx3.js";import{c as V}from"./index-CkIaN0ex.js";import{c as j}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const v=V("flex",{variants:{horizontal:{true:"flex-row",false:"flex-col"},spacing:{"spacing-4":"gap-1","spacing-8":"gap-2","spacing-12":"gap-3","spacing-16":"gap-4","spacing-24":"gap-6","spacing-32":"gap-8"},align:{"align-stretch":"items-stretch","align-start":"items-start","align-end":"items-end","align-center":"items-center"}},defaultVariants:{horizontal:!1,spacing:"spacing-16",align:"align-stretch"}}),t=N.forwardRef(({className:o,horizontal:a,spacing:x,align:b,...z},R)=>c.jsx("div",{ref:R,className:j(v({horizontal:a,spacing:x,align:b}),o),...z}));t.displayName="Stack";t.__docgenInfo={description:"",methods:[],displayName:"Stack",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["VariantProps"]};const L=w([{library:"Bootstrap",component:"Stacks",url:"https://getbootstrap.com/docs/5.3/helpers/stacks/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Stack",url:"https://www.chakra-ui.com/docs/components/stack",usedFor:["comparison"],relation:"compared"}]),T=["콘텐츠 A","콘텐츠 B","콘텐츠 C"],F={title:"Layout/Primitives/Stack",component:t,tags:["ref:bootstrap","autodocs","layout","ref:chakra-ui"],parameters:{references:L,docs:{description:{component:"일정한 간격으로 자식 요소를 수직 또는 수평으로 쌓는 레이아웃 컴포넌트입니다."}}},argTypes:{spacing:{description:"자식 요소 간 간격",control:"select",options:["spacing-4","spacing-8","spacing-12","spacing-16","spacing-24","spacing-32"],table:{type:{summary:"spacing-4 | spacing-8 | spacing-12 | spacing-16 | spacing-24 | spacing-32"},defaultValue:{summary:"spacing-16"},category:"Spacing"}},horizontal:{description:"수평 방향으로 쌓기",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Layout"}},align:{description:"교차축 정렬",control:"select",options:["align-stretch","align-start","align-end","align-center"],table:{type:{summary:"align-stretch | align-start | align-end | align-center"},defaultValue:{summary:"align-stretch"},category:"Layout"}}},args:{spacing:"spacing-16",horizontal:!1,align:"align-stretch"},render:o=>c.jsx(t,{...o,children:T.map(a=>c.jsx("div",{className:"rounded-md border border-krds-gray-20 bg-krds-gray-5 px-4 py-3 text-sm text-krds-gray-80",children:a},a))})},s={name:"수직 스택"},e={name:"수평 스택",args:{horizontal:!0,spacing:"spacing-8"}},r={name:"좁은 간격",args:{spacing:"spacing-4"}},n={name:"넓은 간격",args:{spacing:"spacing-32"}};var i,p,g;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '수직 스택'
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,l,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '수평 스택',
  args: {
    horizontal: true,
    spacing: 'spacing-8'
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,f,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '좁은 간격',
  args: {
    spacing: 'spacing-4'
  }
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var h,k,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '넓은 간격',
  args: {
    spacing: 'spacing-32'
  }
}`,...(S=(k=n.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const H=["Default","Horizontal","TightSpacing","LooseSpacing"];export{s as Default,e as Horizontal,n as LooseSpacing,r as TightSpacing,H as __namedExportsOrder,F as default};
