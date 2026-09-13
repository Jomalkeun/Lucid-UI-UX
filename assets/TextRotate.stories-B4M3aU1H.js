import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as G}from"./reference-types-4ftiVeOu.js";import{R as L,r as o}from"./index-BxXVWNx3.js";import{c as K}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const P={sm:"text-krds-body-sm",md:"text-krds-body-md",lg:"text-krds-title-sm",xl:"text-krds-title-lg"},U={normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},t=L.forwardRef(({texts:s,interval:p=2e3,animation:d="slide",size:C="md",color:k,weight:q="semibold",className:D,style:V},N)=>{const[E,H]=o.useState(0),[O,u]=o.useState(!1),c=o.useRef(null);o.useEffect(()=>{if(!(!s||s.length<=1))return c.current=setInterval(()=>{u(!0),setTimeout(()=>{H(F=>(F+1)%s.length),u(!1)},300)},p),()=>{c.current&&clearInterval(c.current)}},[s,p]);const _=(s==null?void 0:s[E])??"",M=()=>O?d==="slide"?{transform:"translateY(-100%)",opacity:0}:d==="fade"?{opacity:0}:d==="flip"?{transform:"rotateX(90deg)",opacity:0}:{}:{};return e.jsx("span",{ref:N,className:K("inline-block overflow-hidden align-middle",P[C],U[q],D),style:{color:k,perspective:"400px",...V},"aria-live":"polite","aria-atomic":"true",children:e.jsx("span",{style:{display:"inline-block",transition:"transform 0.3s ease, opacity 0.3s ease",transformStyle:"preserve-3d",...M()},children:_})})});t.displayName="TextRotate";t.__docgenInfo={description:"",methods:[],displayName:"TextRotate",props:{texts:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Array of text strings to rotate through"},interval:{required:!1,tsType:{name:"number"},description:"Rotation interval in milliseconds",defaultValue:{value:"2000",computed:!1}},animation:{required:!1,tsType:{name:"union",raw:"'slide' | 'fade' | 'flip'",elements:[{name:"literal",value:"'slide'"},{name:"literal",value:"'fade'"},{name:"literal",value:"'flip'"}]},description:"Animation type for text transition",defaultValue:{value:"'slide'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Text size variant",defaultValue:{value:"'md'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"Text color (accepts any CSS color value or KRDS token class)"},weight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'semibold' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:"Font weight",defaultValue:{value:"'semibold'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Inline styles"}}};const X=G([{library:"daisyUI",component:"Text Rotate",url:"https://daisyui.com/components/text-rotate/",usedFor:["comparison"],relation:"compared"}]),a=[{label:"표시",value:"ON"},{label:"상태",value:"Ready"},{label:"밀도",value:"MD"}],Z={title:"Atoms/Display/TextRotate",component:t,tags:["autodocs","display"],parameters:{references:X,layout:"centered",docs:{description:{component:`## TextRotate

공식 컴포넌트 패턴을 React Storybook에서 조작 가능하도록 재구성한 TextRotate 컴포넌트입니다.`}}},argTypes:{title:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},variant:{control:"inline-radio",options:["solid","soft","outline","ghost"],table:{category:"Appearance"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},orientation:{control:"inline-radio",options:["horizontal","vertical"],table:{category:"Layout"}},density:{control:"inline-radio",options:["compact","comfortable","spacious"],table:{category:"Layout"}},status:{control:"select",options:["default","success","warning","danger","info"],table:{category:"State"}},disabled:{control:"boolean",table:{category:"State"}},loading:{control:"boolean",table:{category:"State"}},showHeader:{control:"boolean",table:{category:"Display"}},showActions:{control:"boolean",table:{category:"Display"}},color:{control:"color",table:{category:"Appearance"}}},args:{title:"TextRotate",description:"TextRotate 컴포넌트의 주요 상태와 옵션을 Controls에서 조절합니다.",items:a,variant:"soft",size:"md",orientation:"vertical",density:"comfortable",status:"default",disabled:!1,loading:!1,showHeader:!0,showActions:!0,color:"#2563eb"}},r={name:"기본"},i={name:"상태 비교",render:()=>e.jsxs("div",{style:{display:"grid",gap:12,width:560},children:[e.jsx(t,{title:"기본",items:a}),e.jsx(t,{title:"로딩",loading:!0,items:a}),e.jsx(t,{title:"비활성",disabled:!0,items:a}),e.jsx(t,{title:"위험 상태",status:"danger",items:a})]}),parameters:{controls:{disable:!0}}},l={name:"스타일 비교",render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(240px, 1fr))",gap:12,width:640},children:[e.jsx(t,{title:"Soft",variant:"soft",showActions:!1,items:a}),e.jsx(t,{title:"Solid",variant:"solid",showActions:!1,items:a}),e.jsx(t,{title:"Outline",variant:"outline",showActions:!1,items:a}),e.jsx(t,{title:"Ghost",variant:"ghost",showActions:!1,items:a})]}),parameters:{controls:{disable:!0}}},n={name:"컴팩트",args:{density:"compact",size:"sm",showActions:!1}},m={name:"가로 배치",args:{orientation:"horizontal",status:"info"}};var f,g,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '기본'
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var x,b,v;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '상태 비교',
  render: () => <div style={{
    display: 'grid',
    gap: 12,
    width: 560
  }}>
      <TextRotate title="기본" items={sampleItems} />
      <TextRotate title="로딩" loading items={sampleItems} />
      <TextRotate title="비활성" disabled items={sampleItems} />
      <TextRotate title="위험 상태" status="danger" items={sampleItems} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(v=(b=i.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var h,T,w;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '스타일 비교',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(240px, 1fr))',
    gap: 12,
    width: 640
  }}>
      <TextRotate title="Soft" variant="soft" showActions={false} items={sampleItems} />
      <TextRotate title="Solid" variant="solid" showActions={false} items={sampleItems} />
      <TextRotate title="Outline" variant="outline" showActions={false} items={sampleItems} />
      <TextRotate title="Ghost" variant="ghost" showActions={false} items={sampleItems} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(w=(T=l.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var R,S,A;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '컴팩트',
  args: {
    density: 'compact',
    size: 'sm',
    showActions: false
  }
}`,...(A=(S=n.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var I,j,z;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '가로 배치',
  args: {
    orientation: 'horizontal',
    status: 'info'
  }
}`,...(z=(j=m.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};const $=["Default","States","Variants","Compact","Horizontal"];export{n as Compact,r as Default,m as Horizontal,i as States,l as Variants,$ as __namedExportsOrder,Z as default};
