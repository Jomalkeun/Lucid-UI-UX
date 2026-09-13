import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as W}from"./reference-types-4ftiVeOu.js";import{r as p}from"./index-BxXVWNx3.js";import{c as K}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";function t({children:F,orientation:n="horizontal",defaultSize:U=50,minSize:l=10,maxSize:c=90,className:_,style:G,onResize:d}){const[x,v]=p.useState(U),b=p.useRef(null),w=p.useRef(!1),O=p.useCallback(s=>{s.preventDefault(),w.current=!0;const S=A=>{if(!w.current||!b.current)return;const m=b.current.getBoundingClientRect();let i;n==="horizontal"?i=(A.clientX-m.left)/m.width*100:i=(A.clientY-m.top)/m.height*100,i=Math.min(c,Math.max(l,i)),v(i),d==null||d(i)},o=()=>{w.current=!1,document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",S),document.addEventListener("mouseup",o)},[n,l,c,d]),a=n==="horizontal",[B,P]=F;return e.jsxs("div",{ref:b,className:K("flex overflow-hidden",a?"flex-row":"flex-col",_),style:{...G},children:[e.jsx("div",{style:{flexBasis:`${x}%`,flexShrink:0,flexGrow:0,overflow:"auto"},children:B}),e.jsx("div",{role:"separator","aria-orientation":n,"aria-valuenow":x,"aria-valuemin":l,"aria-valuemax":c,tabIndex:0,onMouseDown:O,onKeyDown:s=>{s.key===(a?"ArrowLeft":"ArrowUp")?(s.preventDefault(),v(o=>Math.max(l,o-5))):s.key===(a?"ArrowRight":"ArrowDown")&&(s.preventDefault(),v(o=>Math.min(c,o+5)))},style:{flexShrink:0,position:"relative",display:"flex",alignItems:"center",justifyContent:"center",cursor:a?"col-resize":"row-resize",background:"var(--color-krds-gray-20, #e5e7eb)",zIndex:1,...a?{width:4,minHeight:0,alignSelf:"stretch"}:{height:4,minWidth:0,alignSelf:"stretch"}},className:"hover:bg-krds-primary-20 focus-visible:outline-none focus-visible:bg-krds-primary-30 transition-colors",children:e.jsx("span",{style:{borderRadius:9999,background:"var(--color-krds-gray-40, #9ca3af)",...a?{width:2,height:24}:{width:24,height:2}}})}),e.jsx("div",{style:{flex:1,overflow:"auto",minWidth:0,minHeight:0},children:P})]})}t.__docgenInfo={description:"",methods:[],displayName:"Splitter",props:{children:{required:!0,tsType:{name:"tuple",raw:"[ReactNode, ReactNode]",elements:[{name:"ReactNode"},{name:"ReactNode"}]},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},defaultSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50",computed:!1}},minSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},maxSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"90",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},onResize:{required:!1,tsType:{name:"signature",type:"function",raw:"(size: number) => void",signature:{arguments:[{type:{name:"number"},name:"size"}],return:{name:"void"}}},description:""}}};const r=[{label:"열",value:3},{label:"간격",value:"16px"},{label:"정렬",value:"Start"}],Q=W([{library:"Ark UI",component:"Splitter",url:"https://ark-ui.com/docs/components/splitter",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Ant Design",component:"Splitter",url:"https://ant.design/components/splitter/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Splitter",url:"https://www.chakra-ui.com/docs/components/splitter",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Splitter",url:"https://quasar.dev/vue-components/splitter",usedFor:["comparison"],relation:"compared"},{library:"DevUI",component:"Splitter",url:"https://devui.design/components/en-us/splitter/demo",usedFor:["behavior","accessibility","api"],relation:"compared"}]),ee={title:"Layout/Primitives/Splitter",component:t,tags:["autodocs","layout","ref:ant-design","ref:quasar","ref:chakra-ui","ref:ark-ui","ref:devui"],parameters:{references:Q,layout:"centered",docs:{description:{component:`## Splitter

공식 컴포넌트 패턴을 React Storybook에서 조작 가능하도록 재구성한 Splitter 컴포넌트입니다.`}}},argTypes:{title:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},variant:{control:"inline-radio",options:["solid","soft","outline","ghost"],table:{category:"Appearance"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},orientation:{control:"inline-radio",options:["horizontal","vertical"],table:{category:"Layout"}},density:{control:"inline-radio",options:["compact","comfortable","spacious"],table:{category:"Layout"}},status:{control:"select",options:["default","success","warning","danger","info"],table:{category:"State"}},disabled:{control:"boolean",table:{category:"State"}},loading:{control:"boolean",table:{category:"State"}},showHeader:{control:"boolean",table:{category:"Display"}},showActions:{control:"boolean",table:{category:"Display"}},color:{control:"color",table:{category:"Appearance"}}},args:{title:"Splitter",description:"Splitter 컴포넌트의 주요 상태와 옵션을 Controls에서 조절합니다.",items:r,variant:"soft",size:"md",orientation:"vertical",density:"comfortable",status:"default",disabled:!1,loading:!1,showHeader:!0,showActions:!0,color:"#2563eb"}},u={name:"기본"},f={name:"상태 비교",render:()=>e.jsxs("div",{style:{display:"grid",gap:12,width:560},children:[e.jsx(t,{title:"기본",items:r}),e.jsx(t,{title:"로딩",loading:!0,items:r}),e.jsx(t,{title:"비활성",disabled:!0,items:r}),e.jsx(t,{title:"위험 상태",status:"danger",items:r})]}),parameters:{controls:{disable:!0}}},h={name:"스타일 비교",render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(240px, 1fr))",gap:12,width:640},children:[e.jsx(t,{title:"Soft",variant:"soft",showActions:!1,items:r}),e.jsx(t,{title:"Solid",variant:"solid",showActions:!1,items:r}),e.jsx(t,{title:"Outline",variant:"outline",showActions:!1,items:r}),e.jsx(t,{title:"Ghost",variant:"ghost",showActions:!1,items:r})]}),parameters:{controls:{disable:!0}}},g={name:"컴팩트",args:{density:"compact",size:"sm",showActions:!1}},y={name:"가로 배치",args:{orientation:"horizontal",status:"info"}};var j,k,z;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '기본'
}`,...(z=(k=u.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var I,D,C;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '상태 비교',
  render: () => <div style={{
    display: 'grid',
    gap: 12,
    width: 560
  }}>
      <Splitter title="기본" items={sampleItems} />
      <Splitter title="로딩" loading items={sampleItems} />
      <Splitter title="비활성" disabled items={sampleItems} />
      <Splitter title="위험 상태" status="danger" items={sampleItems} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(C=(D=f.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var T,q,R;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '스타일 비교',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(240px, 1fr))',
    gap: 12,
    width: 640
  }}>
      <Splitter title="Soft" variant="soft" showActions={false} items={sampleItems} />
      <Splitter title="Solid" variant="solid" showActions={false} items={sampleItems} />
      <Splitter title="Outline" variant="outline" showActions={false} items={sampleItems} />
      <Splitter title="Ghost" variant="ghost" showActions={false} items={sampleItems} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(R=(q=h.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var L,N,H;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '컴팩트',
  args: {
    density: 'compact',
    size: 'sm',
    showActions: false
  }
}`,...(H=(N=g.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var M,E,V;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: '가로 배치',
  args: {
    orientation: 'horizontal',
    status: 'info'
  }
}`,...(V=(E=y.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};const te=["Default","States","Variants","Compact","Horizontal"];export{g as Compact,u as Default,y as Horizontal,f as States,h as Variants,te as __namedExportsOrder,ee as default};
