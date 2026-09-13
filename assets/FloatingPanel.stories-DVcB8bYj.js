import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-BxXVWNx3.js";import{d as O}from"./reference-types-4ftiVeOu.js";import"./_commonjsHelpers-CqkleIqs.js";function s({title:o="패널",children:u,defaultPosition:p={x:40,y:40},defaultWidth:b=320,defaultHeight:t=280,minWidth:n=200,minHeight:l=120,collapsible:H=!0,closable:V=!0,resizable:I=!0,onClose:v}){const[d,A]=r.useState(p),[c,E]=r.useState({w:b,h:t}),[f,Y]=r.useState(!1),[L,X]=r.useState(!0),x=r.useRef(!1),j=r.useRef(!1),a=r.useRef({mx:0,my:0,px:0,py:0,w:0,h:0}),N=r.useRef(null),w=r.useCallback(i=>{x.current&&A({x:a.current.px+i.clientX-a.current.mx,y:a.current.py+i.clientY-a.current.my}),j.current&&E({w:Math.max(n,a.current.w+i.clientX-a.current.mx),h:Math.max(l,a.current.h+i.clientY-a.current.my)})},[n,l]),k=r.useCallback(()=>{x.current=!1,j.current=!1},[]);return r.useEffect(()=>(window.addEventListener("mousemove",w),window.addEventListener("mouseup",k),()=>{window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",k)}),[w,k]),L?e.jsxs("div",{ref:N,style:{position:"fixed",left:d.x,top:d.y,zIndex:1e3,width:c.w,background:"#fff",border:"1px solid #d1d5db",borderRadius:"10px",boxShadow:"0 8px 40px rgba(0,0,0,0.18)",overflow:"hidden",fontFamily:"system-ui",userSelect:x.current?"none":"auto"},children:[e.jsxs("div",{onMouseDown:i=>{x.current=!0,a.current={mx:i.clientX,my:i.clientY,px:d.x,py:d.y,w:c.w,h:c.h},i.preventDefault()},style:{display:"flex",alignItems:"center",padding:"10px 14px",background:"#f9fafb",borderBottom:"1px solid #e5e7eb",cursor:"move",gap:"8px"},children:[e.jsxs("div",{style:{display:"flex",gap:"4px"},children:[e.jsx("span",{style:{width:10,height:10,borderRadius:"50%",background:"#fd5f57",display:"block"}}),e.jsx("span",{style:{width:10,height:10,borderRadius:"50%",background:"#febc2e",display:"block"}}),e.jsx("span",{style:{width:10,height:10,borderRadius:"50%",background:"#27c840",display:"block"}})]}),e.jsx("span",{style:{flex:1,fontSize:"13px",fontWeight:600,color:"#374151"},children:o}),e.jsxs("div",{style:{display:"flex",gap:"4px"},children:[H&&e.jsx("button",{onClick:()=>Y(i=>!i),title:f?"펼치기":"접기",style:{width:22,height:22,border:"none",background:"none",cursor:"pointer",fontSize:"14px",color:"#9ca3af",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"4px"},children:f?"▼":"▲"}),V&&e.jsx("button",{onClick:()=>{X(!1),v==null||v()},title:"닫기",style:{width:22,height:22,border:"none",background:"none",cursor:"pointer",fontSize:"14px",color:"#9ca3af",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"4px"},children:"✕"})]})]}),!f&&e.jsx("div",{style:{height:c.h,overflow:"auto",padding:"14px"},children:u}),I&&!f&&e.jsx("div",{onMouseDown:i=>{j.current=!0,a.current={mx:i.clientX,my:i.clientY,px:d.x,py:d.y,w:c.w,h:c.h},i.preventDefault()},style:{position:"absolute",bottom:0,right:0,width:16,height:16,cursor:"nwse-resize",background:"linear-gradient(135deg, transparent 50%, #d1d5db 50%)",borderRadius:"0 0 10px 0"}})]}):null}s.__docgenInfo={description:"",methods:[],displayName:"FloatingPanel",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'패널'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},defaultPosition:{required:!1,tsType:{name:"signature",type:"object",raw:"{ x: number; y: number }",signature:{properties:[{key:"x",value:{name:"number",required:!0}},{key:"y",value:{name:"number",required:!0}}]}},description:"",defaultValue:{value:"{ x: 40, y: 40 }",computed:!1}},defaultWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"320",computed:!1}},defaultHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"280",computed:!1}},minWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}},minHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"120",computed:!1}},collapsible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},resizable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const _=O([{library:"Ark UI",component:"Floating Panel",url:"https://ark-ui.com/docs/components/floating-panel",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"PrimeVue",component:"Popover",url:"https://primevue.org/popover/",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Chakra UI",component:"Floating Panel",url:"https://www.chakra-ui.com/docs/components/floating-panel",usedFor:["comparison"],relation:"compared"}]),Z={title:"Molecules/Overlay/FloatingPanel",component:s,tags:["autodocs","ref:chakra-ui","ref:ark-ui","ref:primevue"],parameters:{references:_,layout:"fullscreen",docs:{description:{component:"\n## FloatingPanel\n\n화면 위에 떠 있는 드래그 가능한 패널 컴포넌트입니다.\n타이틀 바를 드래그하여 위치를 이동하고, 우하단 핸들로 크기를 조절할 수 있습니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `title` | `string` | `'패널'` | 패널 제목 |\n| `defaultPosition` | `{x,y}` | `{x:40,y:40}` | 초기 위치 |\n| `defaultWidth` | `number` | `320` | 초기 너비 |\n| `defaultHeight` | `number` | `280` | 초기 높이 |\n| `collapsible` | `boolean` | `true` | 접기 버튼 |\n| `closable` | `boolean` | `true` | 닫기 버튼 |\n| `resizable` | `boolean` | `true` | 크기 조절 |\n        "}}},argTypes:{collapsible:{control:"boolean",table:{category:"Behavior"}},closable:{control:"boolean",table:{category:"Behavior"}},resizable:{control:"boolean",table:{category:"Behavior"}},title:{control:"text",table:{category:"Content"}}},args:{title:"플로팅 패널",collapsible:!0,closable:!0,resizable:!0,defaultPosition:{x:24,y:60},defaultWidth:320,defaultHeight:240}},m={name:"기본",render:o=>e.jsxs("div",{style:{height:"400px",background:"#f9fafb",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{padding:"20px",color:"#9ca3af",fontSize:"14px",fontFamily:"system-ui"},children:"패널을 드래그하여 이동하거나 우하단에서 크기를 조절하세요"}),e.jsx(s,{...o,children:e.jsxs("div",{style:{fontFamily:"system-ui",fontSize:"14px",color:"#374151",lineHeight:1.6},children:[e.jsx("p",{style:{margin:"0 0 8px"},children:"이 패널은 드래그로 이동할 수 있습니다."}),e.jsx("p",{style:{margin:0},children:"우하단 핸들을 드래그하여 크기를 조절하세요."})]})})]})},y={name:"개발자 도구 스타일",parameters:{docs:{description:{story:"개발자 도구처럼 활용하는 패널 예시입니다."}}},render:()=>e.jsx("div",{style:{height:"500px",background:"#f9fafb",position:"relative",overflow:"hidden"},children:e.jsx(s,{title:"Console",defaultPosition:{x:24,y:24},defaultWidth:440,defaultHeight:280,collapsible:!0,closable:!0,resizable:!0,children:e.jsxs("div",{style:{fontFamily:"monospace",fontSize:"12px",background:"#1e1e1e",color:"#d4d4d4",padding:"12px",borderRadius:"6px",height:"100%",overflowY:"auto",boxSizing:"border-box"},children:[e.jsx("div",{style:{color:"#6a9955"},children:"> App started"}),e.jsx("div",{style:{color:"#9cdcfe"},children:"> Component mounted: Dashboard"}),e.jsx("div",{style:{color:"#ce9178"},children:"> API call: /api/users (200 OK)"}),e.jsx("div",{style:{color:"#f44747"},children:"> Warning: Missing key prop"}),e.jsx("div",{style:{color:"#6a9955"},children:"> Data loaded: 24 items"}),e.jsx("div",{style:{color:"#9cdcfe"},children:"> Render time: 12ms"})]})})})};function U(){const[o,u]=r.useState([{id:1,title:"레이어",x:20,y:20,visible:!0},{id:2,title:"속성",x:360,y:20,visible:!0},{id:3,title:"색상",x:20,y:280,visible:!0}]),p=t=>u(n=>n.map(l=>l.id===t?{...l,visible:!1}:l)),b=()=>u(t=>t.map(n=>({...n,visible:!0})));return e.jsxs("div",{style:{height:"560px",background:"#f1f5f9",position:"relative",overflow:"hidden"},children:[e.jsxs("div",{style:{padding:"12px",fontFamily:"system-ui"},children:[e.jsx("button",{onClick:b,style:{padding:"6px 14px",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"13px"},children:"패널 초기화"}),e.jsxs("span",{style:{marginLeft:"12px",fontSize:"13px",color:"#6b7280"},children:[o.filter(t=>t.visible).length,"/",o.length," 패널 표시 중"]})]}),o[0].visible&&e.jsx(s,{title:"레이어",defaultPosition:{x:20,y:60},defaultWidth:200,defaultHeight:200,onClose:()=>p(1),children:e.jsx("div",{style:{fontFamily:"system-ui",fontSize:"13px"},children:["배경","헤더","콘텐츠","푸터"].map((t,n)=>e.jsxs("div",{style:{padding:"6px 8px",display:"flex",alignItems:"center",gap:"8px",borderRadius:"4px",cursor:"pointer",color:"#374151",marginBottom:"2px"},children:[e.jsx("span",{children:["🗂️","📋","📄","📌"][n]})," ",t]},t))})}),o[1].visible&&e.jsx(s,{title:"속성",defaultPosition:{x:240,y:60},defaultWidth:220,defaultHeight:200,onClose:()=>p(2),children:e.jsx("div",{style:{fontFamily:"system-ui",fontSize:"13px",display:"flex",flexDirection:"column",gap:"10px"},children:[["너비","360px"],["높이","240px"],["X","40"],["Y","80"]].map(([t,n])=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{style:{color:"#9ca3af"},children:t}),e.jsx("input",{defaultValue:n,style:{width:"80px",padding:"3px 6px",border:"1px solid #d1d5db",borderRadius:"4px",fontSize:"12px",textAlign:"right"}})]},t))})}),o[2].visible&&e.jsx(s,{title:"색상",defaultPosition:{x:20,y:280},defaultWidth:200,defaultHeight:160,onClose:()=>p(3),children:e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",fontFamily:"system-ui"},children:["#3b82f6","#10b981","#ef4444","#f59e0b","#8b5cf6","#ec4899","#06b6d4","#84cc16"].map(t=>e.jsx("div",{style:{width:"28px",height:"28px",borderRadius:"6px",background:t,cursor:"pointer",border:"2px solid transparent"},title:t},t))})})]})}const h={name:"다중 패널",parameters:{docs:{description:{story:"여러 FloatingPanel을 동시에 표시하는 예시입니다."}}},render:()=>e.jsx(U,{})},g={name:"미니 미디어 플레이어",parameters:{docs:{description:{story:"음악 플레이어 스타일의 플로팅 패널입니다."}}},render:()=>e.jsx("div",{style:{height:"400px",background:"linear-gradient(135deg, #667eea, #764ba2)",position:"relative",overflow:"hidden"},children:e.jsx(s,{title:"♪ Now Playing",defaultPosition:{x:24,y:24},defaultWidth:300,defaultHeight:180,resizable:!1,children:e.jsxs("div",{style:{fontFamily:"system-ui",textAlign:"center"},children:[e.jsx("div",{style:{fontSize:"32px",marginBottom:"8px"},children:"🎵"}),e.jsx("div",{style:{fontSize:"15px",fontWeight:700,color:"#111",marginBottom:"2px"},children:"Bohemian Rhapsody"}),e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"12px"},children:"Queen"}),e.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"16px",fontSize:"20px",marginBottom:"10px"},children:["⏮","⏸","⏭"].map(o=>e.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",fontSize:"20px"},children:o},o))}),e.jsx("div",{style:{background:"#e5e7eb",borderRadius:"4px",height:"4px"},children:e.jsx("div",{style:{background:"#8b5cf6",width:"45%",height:"4px",borderRadius:"4px"}})})]})})})};var P,z,S;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '기본',
  render: args => <div style={{
    height: '400px',
    background: '#f9fafb',
    position: 'relative',
    overflow: 'hidden'
  }}>
      <div style={{
      padding: '20px',
      color: '#9ca3af',
      fontSize: '14px',
      fontFamily: 'system-ui'
    }}>패널을 드래그하여 이동하거나 우하단에서 크기를 조절하세요</div>
      <FloatingPanel {...args}>
        <div style={{
        fontFamily: 'system-ui',
        fontSize: '14px',
        color: '#374151',
        lineHeight: 1.6
      }}>
          <p style={{
          margin: '0 0 8px'
        }}>이 패널은 드래그로 이동할 수 있습니다.</p>
          <p style={{
          margin: 0
        }}>우하단 핸들을 드래그하여 크기를 조절하세요.</p>
        </div>
      </FloatingPanel>
    </div>
}`,...(S=(z=m.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var F,R,C;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '개발자 도구 스타일',
  parameters: {
    docs: {
      description: {
        story: '개발자 도구처럼 활용하는 패널 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    height: '500px',
    background: '#f9fafb',
    position: 'relative',
    overflow: 'hidden'
  }}>
      <FloatingPanel title="Console" defaultPosition={{
      x: 24,
      y: 24
    }} defaultWidth={440} defaultHeight={280} collapsible closable resizable>
        <div style={{
        fontFamily: 'monospace',
        fontSize: '12px',
        background: '#1e1e1e',
        color: '#d4d4d4',
        padding: '12px',
        borderRadius: '6px',
        height: '100%',
        overflowY: 'auto',
        boxSizing: 'border-box'
      }}>
          <div style={{
          color: '#6a9955'
        }}>{'> App started'}</div>
          <div style={{
          color: '#9cdcfe'
        }}>{'> Component mounted: Dashboard'}</div>
          <div style={{
          color: '#ce9178'
        }}>{'> API call: /api/users (200 OK)'}</div>
          <div style={{
          color: '#f44747'
        }}>{'> Warning: Missing key prop'}</div>
          <div style={{
          color: '#6a9955'
        }}>{'> Data loaded: 24 items'}</div>
          <div style={{
          color: '#9cdcfe'
        }}>{'> Render time: 12ms'}</div>
        </div>
      </FloatingPanel>
    </div>
}`,...(C=(R=y.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var D,M,W;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '다중 패널',
  parameters: {
    docs: {
      description: {
        story: '여러 FloatingPanel을 동시에 표시하는 예시입니다.'
      }
    }
  },
  render: () => <MultiPanelDemo />
}`,...(W=(M=h.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var B,T,q;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '미니 미디어 플레이어',
  parameters: {
    docs: {
      description: {
        story: '음악 플레이어 스타일의 플로팅 패널입니다.'
      }
    }
  },
  render: () => <div style={{
    height: '400px',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    position: 'relative',
    overflow: 'hidden'
  }}>
      <FloatingPanel title="♪ Now Playing" defaultPosition={{
      x: 24,
      y: 24
    }} defaultWidth={300} defaultHeight={180} resizable={false}>
        <div style={{
        fontFamily: 'system-ui',
        textAlign: 'center'
      }}>
          <div style={{
          fontSize: '32px',
          marginBottom: '8px'
        }}>🎵</div>
          <div style={{
          fontSize: '15px',
          fontWeight: 700,
          color: '#111',
          marginBottom: '2px'
        }}>Bohemian Rhapsody</div>
          <div style={{
          fontSize: '12px',
          color: '#9ca3af',
          marginBottom: '12px'
        }}>Queen</div>
          <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          fontSize: '20px',
          marginBottom: '10px'
        }}>
            {['⏮', '⏸', '⏭'].map(c => <button key={c} style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '20px'
          }}>{c}</button>)}
          </div>
          <div style={{
          background: '#e5e7eb',
          borderRadius: '4px',
          height: '4px'
        }}>
            <div style={{
            background: '#8b5cf6',
            width: '45%',
            height: '4px',
            borderRadius: '4px'
          }} />
          </div>
        </div>
      </FloatingPanel>
    </div>
}`,...(q=(T=g.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};const $=["Default","DevTools","MultiPanel","MediaPlayer"];export{m as Default,y as DevTools,g as MediaPlayer,h as MultiPanel,$ as __namedExportsOrder,Z as default};
