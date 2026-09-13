import{j as x}from"./jsx-runtime-D_zvdyIk.js";import{d as k}from"./reference-types-4ftiVeOu.js";import{r as L}from"./index-BxXVWNx3.js";import{c as W}from"./index-CkIaN0ex.js";import{c as D}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const S=W("flex flex-wrap",{variants:{gap:{"gap-4":"gap-1","gap-8":"gap-2","gap-12":"gap-3","gap-16":"gap-4","gap-24":"gap-6","gap-32":"gap-8"},align:{start:"items-start",center:"items-center",end:"items-end",stretch:"items-stretch",baseline:"items-baseline"},justify:{start:"justify-start",center:"justify-center",end:"justify-end",between:"justify-between"},direction:{row:"flex-row","row-reverse":"flex-row-reverse"}},defaultVariants:{gap:"gap-12",align:"start",justify:"start",direction:"row"}}),o=L.forwardRef(({className:e,gap:b,align:j,justify:h,direction:v,...R},N)=>x.jsx("div",{ref:N,className:D(S({gap:b,align:j,justify:h,direction:v}),e),...R}));o.displayName="Wrap";o.__docgenInfo={description:"",methods:[],displayName:"Wrap",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["VariantProps"]};const _=k([{library:"Chakra UI",component:"Wrap",url:"https://www.chakra-ui.com/docs/components/wrap",usedFor:["comparison"],relation:"compared"}]),C=["접수","검토 중","승인 대기","보완 요청","완료","반려","임시 저장"],F={title:"Layout/Primitives/Wrap",component:o,tags:["autodocs","layout","ref:chakra-ui"],parameters:{references:_,layout:"centered",docs:{description:{component:"자식 요소를 여러 줄로 자연스럽게 감싸는 flex-wrap 레이아웃 primitive입니다."}}},argTypes:{gap:{control:"inline-radio",options:["gap-4","gap-8","gap-12","gap-16","gap-24","gap-32"],table:{category:"Layout"}},align:{control:"inline-radio",options:["start","center","end","stretch","baseline"],table:{category:"Layout"}},justify:{control:"inline-radio",options:["start","center","end","between"],table:{category:"Layout"}},direction:{control:"inline-radio",options:["row","row-reverse"],table:{category:"Layout"}}},args:{gap:"gap-12",align:"start",justify:"start",direction:"row",className:"w-[360px]",children:C.map(e=>x.jsx("span",{className:"rounded-full border border-krds-gray-30 bg-white px-3 py-1 text-sm font-medium text-krds-gray-70",children:e},e))}},r={name:"기본"},a={name:"가운데 정렬",args:{justify:"center",align:"center"}},t={name:"역방향",args:{direction:"row-reverse"}},s={name:"좁은 간격",args:{gap:"gap-4"}};var n,i,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '기본'
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,m,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '가운데 정렬',
  args: {
    justify: 'center',
    align: 'center'
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,l,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '역방향',
  args: {
    direction: 'row-reverse'
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var f,y,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '좁은 간격',
  args: {
    gap: 'gap-4'
  }
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const O=["Default","Centered","Reverse","Dense"];export{a as Centered,r as Default,s as Dense,t as Reverse,O as __namedExportsOrder,F as default};
