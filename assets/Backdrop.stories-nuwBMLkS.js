import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as V}from"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";function z({open:a=!1,onClick:o,opacity:t=.5,blur:d=!1,color:u="#000",zIndex:s=1e3,children:m,transitionDuration:q=200}){return a?e.jsx("div",{onClick:o,style:{position:"fixed",inset:0,background:`${u}`,opacity:t,backdropFilter:d?"blur(4px)":void 0,zIndex:s,display:"flex",alignItems:"center",justifyContent:"center",cursor:o?"pointer":"default",transition:`opacity ${q}ms ease`},role:"presentation","aria-hidden":!a,children:m&&e.jsx("div",{onClick:w=>w.stopPropagation(),style:{zIndex:s+1},children:m})}):null}z.__docgenInfo={description:"",methods:[],displayName:"Backdrop",props:{open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},opacity:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.5",computed:!1}},blur:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#000'",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1000",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},transitionDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}}}};const O={title:"Atoms/Primitives/Backdrop",component:z,tags:["autodocs","ref:mui"],parameters:{docs:{description:{component:"\n## Backdrop\n\n모달, 드로어 등의 오버레이 뒤에 반투명 어두운 배경을 표시하는 프리미티브 컴포넌트입니다.\n클릭 시 닫힘 이벤트를 전달하며, 포커스 트랩과 함께 사용자 주의를 전면 콘텐츠로 집중시킵니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `open` | `boolean` | `false` | 표시 여부 |\n| `onClick` | `() => void` | - | 클릭 콜백 (닫기) |\n| `opacity` | `number` | `0.5` | 불투명도 (0~1) |\n| `blur` | `boolean` | `false` | 블러 효과 |\n| `color` | `string` | `'#000'` | 배경 색상 |\n| `zIndex` | `number` | `1000` | z-index |\n| `children` | `ReactNode` | - | 위에 표시할 콘텐츠 |\n        "}}},argTypes:{open:{control:"boolean",description:"표시 여부",table:{category:"State"}},opacity:{control:{type:"range",min:0,max:1,step:.05},description:"불투명도",table:{category:"Appearance"}},blur:{control:"boolean",description:"블러 효과",table:{category:"Appearance"}},color:{control:"color",description:"배경 색상",table:{category:"Appearance"}}},args:{open:!1,opacity:.5,blur:!1,color:"#000"}};function r({blur:a=!1,color:o="#000",opacity:t=.5,label:d="백드롭 열기"}){const[u,s]=V.useState(!1);return e.jsxs("div",{style:{fontFamily:"system-ui",height:"200px",display:"flex",alignItems:"center",justifyContent:"center",background:"#f8f9fa",borderRadius:"8px",position:"relative",overflow:"hidden"},children:[e.jsx("button",{onClick:()=>s(!0),style:{padding:"10px 24px",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"14px",fontWeight:600},children:d}),u&&e.jsx("div",{onClick:()=>s(!1),style:{position:"absolute",inset:0,background:o,opacity:t,backdropFilter:a?"blur(4px)":void 0,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:e.jsx("span",{style:{color:"#fff",fontSize:"13px",opacity:1/t*.9,textShadow:"0 1px 4px rgba(0,0,0,0.5)"},children:"클릭하면 닫힙니다"})})]})}function I(){const[a,o]=V.useState(!1);return e.jsxs("div",{style:{fontFamily:"system-ui",height:"280px",display:"flex",alignItems:"center",justifyContent:"center",background:"#f8f9fa",borderRadius:"8px",position:"relative",overflow:"hidden"},children:[e.jsx("button",{onClick:()=>o(!0),style:{padding:"10px 24px",background:"#8b5cf6",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"14px",fontWeight:600},children:"모달과 함께 사용"}),a&&e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:()=>o(!1),style:{position:"absolute",inset:0,background:"#000",opacity:.5}}),e.jsxs("div",{onClick:t=>t.stopPropagation(),style:{position:"absolute",background:"#fff",borderRadius:"12px",padding:"24px",width:"260px",boxShadow:"0 20px 60px rgba(0,0,0,0.3)",zIndex:1},children:[e.jsx("h3",{style:{margin:"0 0 8px",fontSize:"16px",color:"#111"},children:"모달 제목"}),e.jsx("p",{style:{margin:"0 0 16px",fontSize:"13px",color:"#6b7280"},children:"Backdrop 위에 표시되는 모달 콘텐츠입니다."}),e.jsx("button",{onClick:()=>o(!1),style:{width:"100%",padding:"8px",background:"#8b5cf6",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer"},children:"닫기"})]})]})]})}const n={name:"기본",parameters:{docs:{description:{story:"버튼 클릭으로 Backdrop을 열고 클릭으로 닫습니다."}}},render:()=>e.jsx(r,{})},i={name:"블러 효과",parameters:{docs:{description:{story:"backdrop-filter: blur로 뒤 콘텐츠가 흐려집니다."}}},render:()=>e.jsx(r,{blur:!0,label:"블러 백드롭"})},c={name:"불투명도 변형",parameters:{docs:{description:{story:"다양한 불투명도의 Backdrop입니다."}}},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[e.jsx(r,{opacity:.2,label:"opacity=0.2"}),e.jsx(r,{opacity:.5,label:"opacity=0.5"}),e.jsx(r,{opacity:.7,label:"opacity=0.7"}),e.jsx(r,{opacity:.9,label:"opacity=0.9"})]})},l={name:"색상 변형",parameters:{docs:{description:{story:"다양한 색상의 Backdrop입니다."}}},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[e.jsx(r,{color:"#000",label:"Black (기본)"}),e.jsx(r,{color:"#1e3a5f",label:"Navy"}),e.jsx(r,{color:"#1f2937",label:"Dark Gray"}),e.jsx(r,{color:"#7c3aed",label:"Purple"})]})},p={name:"모달과 함께",parameters:{docs:{description:{story:"Backdrop을 모달의 배경으로 사용하는 예시입니다."}}},render:()=>e.jsx(I,{})};var f,y,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '기본',
  parameters: {
    docs: {
      description: {
        story: '버튼 클릭으로 Backdrop을 열고 클릭으로 닫습니다.'
      }
    }
  },
  render: () => <BackdropDemo />
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var x,g,k;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '블러 효과',
  parameters: {
    docs: {
      description: {
        story: 'backdrop-filter: blur로 뒤 콘텐츠가 흐려집니다.'
      }
    }
  },
  render: () => <BackdropDemo blur label="블러 백드롭" />
}`,...(k=(g=i.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var j,h,v;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '불투명도 변형',
  parameters: {
    docs: {
      description: {
        story: '다양한 불투명도의 Backdrop입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px'
  }}>
      <BackdropDemo opacity={0.2} label="opacity=0.2" />
      <BackdropDemo opacity={0.5} label="opacity=0.5" />
      <BackdropDemo opacity={0.7} label="opacity=0.7" />
      <BackdropDemo opacity={0.9} label="opacity=0.9" />
    </div>
}`,...(v=(h=c.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var B,D,C;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '색상 변형',
  parameters: {
    docs: {
      description: {
        story: '다양한 색상의 Backdrop입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px'
  }}>
      <BackdropDemo color="#000" label="Black (기본)" />
      <BackdropDemo color="#1e3a5f" label="Navy" />
      <BackdropDemo color="#1f2937" label="Dark Gray" />
      <BackdropDemo color="#7c3aed" label="Purple" />
    </div>
}`,...(C=(D=l.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var S,T,R;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '모달과 함께',
  parameters: {
    docs: {
      description: {
        story: 'Backdrop을 모달의 배경으로 사용하는 예시입니다.'
      }
    }
  },
  render: () => <ModalDemo />
}`,...(R=(T=p.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};const A=["Default","BlurBackdrop","OpacityVariants","ColorVariants","WithModal"];export{i as BlurBackdrop,l as ColorVariants,n as Default,c as OpacityVariants,p as WithModal,A as __namedExportsOrder,O as default};
