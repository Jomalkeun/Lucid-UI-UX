import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as I}from"./reference-types-4ftiVeOu.js";import{c as q}from"./utils-DCADjnpI.js";function N({className:a,content:c="Lucid UI",gap:j=96,rotate:k=-24,opacity:v=.12,color:A="#1d1d1d",fontSize:S=16,children:w,...R}){const t=Math.max(j,48),T={width:t,height:t};return e.jsxs("div",{className:q("relative overflow-hidden rounded-md border border-krds-gray-30 bg-white",a),...R,children:[w,e.jsx("div",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 z-10 grid",style:{gridTemplateColumns:`repeat(auto-fill, minmax(${t}px, 1fr))`,gridAutoRows:`${t}px`},children:Array.from({length:80}).map((E,D)=>e.jsx("span",{className:"flex select-none items-center justify-center whitespace-nowrap font-semibold",style:{...T,color:A,fontSize:S,opacity:v,transform:`rotate(${k}deg)`},children:c},D))})]})}N.__docgenInfo={description:"",methods:[],displayName:"Watermark",props:{content:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'Lucid UI'",computed:!1}},gap:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"96",computed:!1}},rotate:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"-24",computed:!1}},opacity:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.12",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#1d1d1d'",computed:!1}},fontSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"16",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};const z=e.jsxs("div",{className:"grid min-h-72 w-[560px] gap-4 p-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-krds-gray-60",children:"정책 문서"}),e.jsx("h3",{className:"mt-1 text-xl font-semibold text-krds-gray-90",children:"청년 지원 사업 신청 현황"})]}),e.jsx("div",{className:"grid grid-cols-3 gap-3",children:["접수","검토","승인"].map((a,c)=>e.jsxs("div",{className:"rounded-md border border-krds-gray-20 bg-krds-gray-5 p-4",children:[e.jsx("p",{className:"text-sm text-krds-gray-60",children:a}),e.jsx("p",{className:"mt-2 text-2xl font-semibold text-krds-gray-90",children:[128,64,42][c]})]},a))}),e.jsx("p",{className:"text-sm leading-6 text-krds-gray-70",children:"워터마크는 출력물, 미리보기, 내부 검토 화면에서 문서의 상태나 소유 정보를 반복 표시할 때 사용합니다."})]}),C=I([{library:"Element Plus",component:"Watermark",url:"https://element-plus.org/en-US/component/watermark",usedFor:["design","api","comparison"],relation:"compared"},{library:"Ant Design",component:"Watermark",url:"https://ant.design/components/watermark/",usedFor:["comparison"],relation:"compared"}]),_={title:"Atoms/Display/Watermark",component:N,tags:["autodocs","display","ref:ant-design","ref:element-plus"],parameters:{references:C,layout:"centered",docs:{description:{component:"콘텐츠 위에 반복 텍스트를 얹어 문서 상태, 보안 등급, 소유 정보를 표시하는 컴포넌트입니다."}}},argTypes:{content:{control:"text",table:{category:"Content"}},gap:{control:{type:"range",min:48,max:160,step:8},table:{category:"Appearance"}},rotate:{control:{type:"range",min:-45,max:45,step:1},table:{category:"Appearance"}},opacity:{control:{type:"range",min:.04,max:.4,step:.01},table:{category:"Appearance"}},color:{control:"color",table:{category:"Appearance"}},fontSize:{control:{type:"range",min:12,max:28,step:1},table:{category:"Appearance"}}},args:{content:"Lucid UI",gap:96,rotate:-24,opacity:.12,color:"#1d1d1d",fontSize:16,children:z}},r={name:"기본"},n={name:"대외비",args:{content:"CONFIDENTIAL",color:"#d50136",opacity:.16}},o={name:"촘촘한 간격",args:{content:"검토용",gap:64,rotate:-18,opacity:.14}},s={name:"가로 방향",args:{content:"SAMPLE",rotate:0,gap:120,opacity:.1}};var d,i,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '기본'
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,m,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '대외비',
  args: {
    content: 'CONFIDENTIAL',
    color: '#d50136',
    opacity: 0.16
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,f,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '촘촘한 간격',
  args: {
    content: '검토용',
    gap: 64,
    rotate: -18,
    opacity: 0.14
  }
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,h,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '가로 방향',
  args: {
    content: 'SAMPLE',
    rotate: 0,
    gap: 120,
    opacity: 0.1
  }
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const F=["Default","Confidential","Dense","Horizontal"];export{n as Confidential,r as Default,o as Dense,s as Horizontal,F as __namedExportsOrder,_ as default};
