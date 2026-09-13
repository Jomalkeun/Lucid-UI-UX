import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-BxXVWNx3.js";import{d as P}from"./reference-types-4ftiVeOu.js";import{r as j}from"./index-BuIYde5q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DCvtqWl1.js";function a({children:r,container:o,disabled:t=!1}){const[n,p]=s.useState(null);return s.useEffect(()=>{if(!t&&o!==null)if(typeof o=="string"){const v=document.querySelector(o);p(v??document.body)}else o instanceof HTMLElement?p(o):p(document.body)},[o,t]),t?e.jsx(e.Fragment,{children:r}):n?j.createPortal(r,n):null}a.__docgenInfo={description:"",methods:[],displayName:"Portal",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},container:{required:!1,tsType:{name:"union",raw:"HTMLElement | string | null",elements:[{name:"HTMLElement"},{name:"string"},{name:"null"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const w=P([{library:"Chakra UI",component:"Portal",url:"https://www.chakra-ui.com/docs/components/portal",usedFor:["comparison"],relation:"compared"}]),M={title:"Layout/Primitives/Portal",component:a,tags:["autodocs","ref:chakra-ui"],parameters:{references:w,docs:{description:{component:"\n## Portal\n\n자식 컴포넌트를 DOM 트리 밖(보통 `document.body`)으로 렌더링하는 유틸리티 컴포넌트입니다.\n모달, 툴팁, 드롭다운 등 z-index 스택에서 벗어나야 하는 오버레이에 사용합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `container` | `HTMLElement\\|string\\|null` | `document.body` | 렌더 대상 요소 |\n| `disabled` | `boolean` | `false` | 비활성화 (인라인 렌더) |\n        "}}},argTypes:{disabled:{control:"boolean",table:{category:"Behavior"}}},args:{disabled:!1}};function S(){const[r,o]=s.useState(!1);return e.jsxs("div",{style:{fontFamily:"system-ui"},children:[e.jsx("button",{onClick:()=>o(!0),style:{padding:"9px 20px",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px"},children:"Portal로 모달 열기"}),r&&e.jsx(a,{children:e.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999},onClick:()=>o(!1),children:e.jsxs("div",{style:{background:"#fff",borderRadius:"12px",padding:"24px",maxWidth:"400px",width:"90%"},onClick:t=>t.stopPropagation(),children:[e.jsx("h3",{style:{margin:"0 0 8px",fontSize:"18px",fontWeight:700},children:"Portal 모달"}),e.jsx("p",{style:{margin:"0 0 16px",fontSize:"14px",color:"#6b7280",lineHeight:1.6},children:"이 모달은 Portal을 통해 document.body에 직접 렌더링됩니다. overflow:hidden이 설정된 부모 요소의 영향을 받지 않습니다."}),e.jsx("button",{onClick:()=>o(!1),style:{padding:"8px 20px",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px"},children:"닫기"})]})})})]})}const d={name:"기본 Portal 모달",render:()=>e.jsx(S,{})};function k(){const[r,o]=s.useState(!0),[t,n]=s.useState(!1);return e.jsxs("div",{style:{fontFamily:"system-ui"},children:[e.jsxs("div",{style:{marginBottom:"12px",display:"flex",gap:"8px"},children:[e.jsx("button",{onClick:()=>o(!0),style:{padding:"6px 12px",background:r?"#3b82f6":"#f3f4f6",color:r?"#fff":"#374151",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"13px"},children:"Portal 사용"}),e.jsx("button",{onClick:()=>o(!1),style:{padding:"6px 12px",background:r?"#f3f4f6":"#3b82f6",color:r?"#374151":"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"13px"},children:"Portal 미사용"})]}),e.jsxs("div",{style:{width:"200px",height:"80px",overflow:"hidden",border:"2px solid #e5e7eb",borderRadius:"8px",padding:"16px",position:"relative",background:"#f9fafb"},children:[e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"8px"},children:"overflow: hidden"}),e.jsx("button",{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),style:{padding:"4px 10px",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"12px",position:"relative"},children:"호버해보세요"}),t&&(r?e.jsx(a,{children:e.jsx("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:"#111",color:"#fff",padding:"8px 14px",borderRadius:"8px",fontSize:"13px",zIndex:9999},children:"Portal: overflow 무시! ✓"})}):e.jsx("div",{style:{position:"absolute",background:"#111",color:"#fff",padding:"6px 12px",borderRadius:"6px",fontSize:"12px",top:"100%",left:0,zIndex:10,whiteSpace:"nowrap"},children:"일반: overflow에 잘림 ✗"}))]})]})}const i={name:"Overflow 비교",parameters:{docs:{description:{story:"overflow:hidden 컨테이너에서 Portal 유무에 따른 차이를 확인합니다."}}},render:()=>e.jsx(k,{})},l={name:"비활성화 (인라인)",parameters:{docs:{description:{story:"disabled=true이면 Portal 없이 인라인으로 렌더링됩니다."}}},render:()=>e.jsx("div",{style:{fontFamily:"system-ui",fontSize:"14px",color:"#374151"},children:e.jsx(a,{disabled:!0,children:e.jsx("div",{style:{padding:"12px 16px",background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"8px"},children:"이 요소는 disabled=true이므로 인라인으로 렌더링됩니다."})})})};var c,f,u;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '기본 Portal 모달',
  render: () => <PortalModalDemo />
}`,...(u=(f=d.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var x,m,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Overflow 비교',
  parameters: {
    docs: {
      description: {
        story: 'overflow:hidden 컨테이너에서 Portal 유무에 따른 차이를 확인합니다.'
      }
    }
  },
  render: () => <OverflowDemo />
}`,...(b=(m=i.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var y,g,h;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '비활성화 (인라인)',
  parameters: {
    docs: {
      description: {
        story: 'disabled=true이면 Portal 없이 인라인으로 렌더링됩니다.'
      }
    }
  },
  render: () => <div style={{
    fontFamily: 'system-ui',
    fontSize: '14px',
    color: '#374151'
  }}>
      <Portal disabled>
        <div style={{
        padding: '12px 16px',
        background: '#f0fdf4',
        border: '1px solid #bbf7d0',
        borderRadius: '8px'
      }}>
          이 요소는 disabled=true이므로 인라인으로 렌더링됩니다.
        </div>
      </Portal>
    </div>
}`,...(h=(g=l.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const O=["Default","OverflowComparison","Disabled"];export{d as Default,l as Disabled,i as OverflowComparison,O as __namedExportsOrder,M as default};
