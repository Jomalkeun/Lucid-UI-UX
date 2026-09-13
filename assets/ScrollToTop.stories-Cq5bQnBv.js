import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as V}from"./reference-types-4ftiVeOu.js";const A={sm:36,md:44,lg:52};function t({visible:i=!0,label:d="상단으로 이동",icon:j="↑",position:p="bottom-right",variant:r="solid",size:z="md",offset:c=24,targetId:m,onClick:l,style:q}){if(!i)return null;const I={position:"fixed",[p.includes("bottom")?"bottom":"top"]:c,[p.includes("right")?"right":"left"]:c},n=A[z],u=r==="solid";return e.jsx("button",{type:"button","aria-label":d,title:d,onClick:()=>{l==null||l();const f=m?document.getElementById(m):null;f?f.scrollIntoView({behavior:"smooth",block:"start"}):typeof window<"u"&&window.scrollTo({top:0,behavior:"smooth"})},style:{...I,zIndex:50,width:n,height:n,borderRadius:999,border:r==="outline"?"1px solid #2563eb":"1px solid transparent",background:u?"#2563eb":r==="soft"?"#dbeafe":"#fff",color:u?"#fff":"#2563eb",boxShadow:"0 12px 24px rgba(15, 23, 42, 0.18)",cursor:"pointer",fontSize:n*.48,fontWeight:800,lineHeight:1,display:"grid",placeItems:"center",...q},children:j})}t.__docgenInfo={description:"",methods:[],displayName:"ScrollToTop",props:{visible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'상단으로 이동'",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'↑'",computed:!1}},position:{required:!1,tsType:{name:"union",raw:"'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'",elements:[{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'top-left'"}]},description:"",defaultValue:{value:"'bottom-right'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'soft' | 'outline'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'soft'"},{name:"literal",value:"'outline'"}]},description:"",defaultValue:{value:"'solid'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"24",computed:!1}},targetId:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const R=V([{library:"Quasar",component:"Page Scroller",url:"https://quasar.dev/layout/page-scroller",usedFor:["design","behavior","api"],relation:"adapted"}]),H={title:"Atoms/Primitives/ScrollToTop",component:t,tags:["autodocs","ref:quasar"],parameters:{references:R,layout:"centered",docs:{description:{component:`
## ScrollToTop

일정 높이 이상 스크롤 시 나타나는 페이지 상단으로 이동 버튼 컴포넌트입니다.
긴 페이지에서 사용자가 빠르게 최상단으로 돌아갈 수 있도록 하는 FAB 형태의 네비게이션 보조 도구입니다.
        `}}},argTypes:{visible:{control:"boolean",table:{category:"State"}},label:{control:"text",table:{category:"Accessibility"}},position:{control:"select",options:["bottom-right","bottom-left","top-right","top-left"],table:{category:"Layout"}},variant:{control:"inline-radio",options:["solid","soft","outline"],table:{category:"Appearance"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},offset:{control:{type:"range",min:8,max:80,step:4},table:{category:"Layout"}}},args:{visible:!0,label:"상단으로 이동",position:"bottom-right",variant:"solid",size:"md",offset:24},render:i=>e.jsxs("div",{id:"scroll-preview-top",style:{position:"relative",width:520,minHeight:340,border:"1px solid #e5e7eb",borderRadius:12,padding:24,overflow:"hidden"},children:[e.jsx("p",{style:{margin:0,color:"#374151",lineHeight:1.7},children:"실제 페이지에서는 스크롤 임계값 이후 고정 버튼으로 나타납니다. 이 미리보기에서는 Controls로 위치와 스타일을 확인합니다."}),e.jsx(t,{...i,style:{position:"absolute"},targetId:"scroll-preview-top"})]})},o={name:"기본"},s={name:"스타일 비교",render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(t,{variant:"solid",style:{position:"static"}}),e.jsx(t,{variant:"soft",style:{position:"static"}}),e.jsx(t,{variant:"outline",style:{position:"static"}})]}),parameters:{controls:{disable:!0}}},a={name:"크기 비교",render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(t,{size:"sm",style:{position:"static"}}),e.jsx(t,{size:"md",style:{position:"static"}}),e.jsx(t,{size:"lg",style:{position:"static"}})]}),parameters:{controls:{disable:!0}}};var g,y,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '기본'
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var v,h,T;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '스타일 비교',
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <ScrollToTop variant="solid" style={{
      position: 'static'
    }} />
      <ScrollToTop variant="soft" style={{
      position: 'static'
    }} />
      <ScrollToTop variant="outline" style={{
      position: 'static'
    }} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(T=(h=s.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var x,S,w;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '크기 비교',
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <ScrollToTop size="sm" style={{
      position: 'static'
    }} />
      <ScrollToTop size="md" style={{
      position: 'static'
    }} />
      <ScrollToTop size="lg" style={{
      position: 'static'
    }} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(w=(S=a.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const P=["Default","Variants","Sizes"];export{o as Default,a as Sizes,s as Variants,P as __namedExportsOrder,H as default};
