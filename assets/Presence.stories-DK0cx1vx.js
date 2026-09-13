import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-BxXVWNx3.js";import{d as F}from"./reference-types-4ftiVeOu.js";import"./_commonjsHelpers-CqkleIqs.js";const I={fade:{from:{opacity:0},to:{opacity:1}},scale:{from:{opacity:0,transform:"scale(0.85)"},to:{opacity:1,transform:"scale(1)"}},"slide-up":{from:{opacity:0,transform:"translateY(16px)"},to:{opacity:1,transform:"translateY(0)"}},"slide-down":{from:{opacity:0,transform:"translateY(-16px)"},to:{opacity:1,transform:"translateY(0)"}},"slide-left":{from:{opacity:0,transform:"translateX(16px)"},to:{opacity:1,transform:"translateX(0)"}},"slide-right":{from:{opacity:0,transform:"translateX(-16px)"},to:{opacity:1,transform:"translateX(0)"}},none:{from:{},to:{}}},q={fade:{opacity:0},scale:{opacity:0,transform:"scale(0.85)"},"slide-up":{opacity:0,transform:"translateY(-16px)"},"slide-down":{opacity:0,transform:"translateY(16px)"},"slide-left":{opacity:0,transform:"translateX(-16px)"},"slide-right":{opacity:0,transform:"translateX(16px)"},none:{}};function a({present:n,children:r,enterAnimation:t="fade",exitAnimation:o="fade",duration:s=200,style:m,onExitComplete:d}){const[T,b]=i.useState(n),[C,x]=i.useState({}),y=i.useRef(null);return i.useEffect(()=>{if(n){b(!0);const l=I[t];x({...l.from,transition:`all ${s}ms ease`}),requestAnimationFrame(()=>{requestAnimationFrame(()=>x({...l.to,transition:`all ${s}ms ease`}))})}else{const l=q[o];x({...l,transition:`all ${s}ms ease`}),y.current=setTimeout(()=>{b(!1),d==null||d()},s)}return()=>{y.current&&clearTimeout(y.current)}},[n,t,o,s,d]),T?e.jsx("div",{style:{...C,...m},children:r}):null}a.__docgenInfo={description:"",methods:[],displayName:"Presence",props:{present:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},enterAnimation:{required:!1,tsType:{name:"union",raw:"'fade' | 'scale' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'none'",elements:[{name:"literal",value:"'fade'"},{name:"literal",value:"'scale'"},{name:"literal",value:"'slide-up'"},{name:"literal",value:"'slide-down'"},{name:"literal",value:"'slide-left'"},{name:"literal",value:"'slide-right'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'fade'",computed:!1}},exitAnimation:{required:!1,tsType:{name:"union",raw:"'fade' | 'scale' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'none'",elements:[{name:"literal",value:"'fade'"},{name:"literal",value:"'scale'"},{name:"literal",value:"'slide-up'"},{name:"literal",value:"'slide-down'"},{name:"literal",value:"'slide-left'"},{name:"literal",value:"'slide-right'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'fade'",computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""},onExitComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Y=F([{library:"Ark UI",component:"Presence",url:"https://ark-ui.com/docs/utilities/presence",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Chakra UI",component:"Presence",url:"https://www.chakra-ui.com/docs/components/presence",usedFor:["comparison"],relation:"compared"}]),_={title:"Layout/Primitives/Presence",component:a,tags:["autodocs","ref:chakra-ui","ref:ark-ui"],parameters:{references:Y,docs:{description:{component:"\n## Presence\n\n컴포넌트의 마운트/언마운트 애니메이션을 관리하는 유틸리티 컴포넌트입니다.\n언마운트 전 exit 애니메이션이 완료될 때까지 DOM에 유지시켜 부드러운 퇴장 효과를 구현합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `present` | `boolean` | - | 표시/숨김 상태 |\n| `enterAnimation` | `PresenceAnimation` | `'fade'` | 진입 애니메이션 |\n| `exitAnimation` | `PresenceAnimation` | `'fade'` | 퇴장 애니메이션 |\n| `duration` | `number` | `200` | 애니메이션 지속 시간(ms) |\n| `onExitComplete` | `() => void` | - | 퇴장 완료 콜백 |\n        "}}},argTypes:{present:{control:"boolean",table:{category:"State"}},enterAnimation:{control:"select",options:["fade","scale","slide-up","slide-down","slide-left","slide-right","none"],table:{category:"Animation"}},exitAnimation:{control:"select",options:["fade","scale","slide-up","slide-down","slide-left","slide-right","none"],table:{category:"Animation"}},duration:{control:{type:"range",min:50,max:1e3,step:50},table:{category:"Animation"}}},args:{present:!0,enterAnimation:"fade",exitAnimation:"fade",duration:200}};function M({anim:n}){const[r,t]=i.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"flex-start"},children:[e.jsx("button",{onClick:()=>t(o=>!o),style:{padding:"6px 14px",background:r?"#ef4444":"#3b82f6",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"13px"},children:r?"숨기기":"보이기"}),e.jsx(a,{present:r,enterAnimation:n,exitAnimation:n,duration:300,children:e.jsxs("div",{style:{padding:"12px 16px",background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"8px",fontSize:"14px",color:"#15803d",fontFamily:"system-ui"},children:[n," 애니메이션"]})})]})}const c={name:"기본 페이드",render:n=>{function r(){const[t,o]=i.useState(!0);return e.jsxs("div",{style:{fontFamily:"system-ui",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx("button",{onClick:()=>o(s=>!s),style:{padding:"8px 20px",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",width:"fit-content"},children:t?"숨기기":"보이기"}),e.jsx(a,{...n,present:t,children:e.jsx("div",{style:{padding:"20px",background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:"10px",fontSize:"14px",color:"#1e40af"},children:"Presence 컴포넌트입니다. 부드럽게 나타나고 사라집니다."})})]})}return e.jsx(r,{})}},p={name:"애니메이션 변형",parameters:{docs:{description:{story:"6가지 애니메이션 유형을 모두 확인합니다."}}},render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px",fontFamily:"system-ui"},children:["fade","scale","slide-up","slide-down","slide-left","slide-right"].map(n=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"6px"},children:n}),e.jsx(M,{anim:n})]},n))})},u={name:"모달 애니메이션",parameters:{docs:{description:{story:"Presence로 모달 진입/퇴장 애니메이션을 구현합니다."}}},render:()=>{function n(){const[r,t]=i.useState(!1);return e.jsxs("div",{style:{fontFamily:"system-ui"},children:[e.jsx("button",{onClick:()=>t(!0),style:{padding:"9px 20px",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px"},children:"모달 열기"}),e.jsx(a,{present:r,enterAnimation:"scale",exitAnimation:"scale",duration:250,style:{position:"fixed",inset:0,zIndex:1e3},children:e.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center"},onClick:()=>t(!1),children:e.jsxs("div",{style:{background:"#fff",borderRadius:"12px",padding:"24px",minWidth:"360px"},onClick:o=>o.stopPropagation(),children:[e.jsx("h3",{style:{margin:"0 0 8px",fontSize:"18px",fontWeight:700},children:"Scale 애니메이션 모달"}),e.jsx("p",{style:{margin:"0 0 16px",fontSize:"14px",color:"#6b7280"},children:"Presence로 scale 진입/퇴장 효과를 적용했습니다."}),e.jsx("button",{onClick:()=>t(!1),style:{padding:"8px 20px",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px"},children:"닫기"})]})})})]})}return e.jsx(n,{})}},f={name:"지속 시간 변형",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",fontFamily:"system-ui"},children:[100,300,600,1e3].map(n=>{function r({d:t}){const[o,s]=i.useState(!1);return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsxs("div",{style:{minWidth:"60px",fontSize:"12px",color:"#9ca3af"},children:[t,"ms"]}),e.jsx("button",{onClick:()=>s(m=>!m),style:{padding:"5px 12px",background:"#f3f4f6",border:"1px solid #e5e7eb",borderRadius:"6px",cursor:"pointer",fontSize:"12px"},children:"토글"}),e.jsx(a,{present:o,duration:t,children:e.jsx("div",{style:{padding:"6px 12px",background:"#dbeafe",borderRadius:"6px",fontSize:"13px",color:"#1d4ed8"},children:"콘텐츠"})})]})}return e.jsx(r,{d:n},n)})})};var g,h,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '기본 페이드',
  render: args => {
    function Demo() {
      const [show, setShow] = useState(true);
      return <div style={{
        fontFamily: 'system-ui',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <button onClick={() => setShow(s => !s)} style={{
          padding: '8px 20px',
          background: '#3b82f6',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          width: 'fit-content'
        }}>
            {show ? '숨기기' : '보이기'}
          </button>
          <Presence {...args} present={show}>
            <div style={{
            padding: '20px',
            background: '#eff6ff',
            border: '1px solid #bfdbfe',
            borderRadius: '10px',
            fontSize: '14px',
            color: '#1e40af'
          }}>
              Presence 컴포넌트입니다. 부드럽게 나타나고 사라집니다.
            </div>
          </Presence>
        </div>;
    }
    return <Demo />;
  }
}`,...(v=(h=c.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var S,w,k;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '애니메이션 변형',
  parameters: {
    docs: {
      description: {
        story: '6가지 애니메이션 유형을 모두 확인합니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    fontFamily: 'system-ui'
  }}>
      {(['fade', 'scale', 'slide-up', 'slide-down', 'slide-left', 'slide-right'] as PresenceAnimation[]).map(anim => <div key={anim}>
          <div style={{
        fontSize: '12px',
        color: '#9ca3af',
        marginBottom: '6px'
      }}>{anim}</div>
          <PresenceToggle anim={anim} />
        </div>)}
    </div>
}`,...(k=(w=p.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var j,P,A;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '모달 애니메이션',
  parameters: {
    docs: {
      description: {
        story: 'Presence로 모달 진입/퇴장 애니메이션을 구현합니다.'
      }
    }
  },
  render: () => {
    function ModalDemo() {
      const [show, setShow] = useState(false);
      return <div style={{
        fontFamily: 'system-ui'
      }}>
          <button onClick={() => setShow(true)} style={{
          padding: '9px 20px',
          background: '#3b82f6',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px'
        }}>
            모달 열기
          </button>
          <Presence present={show} enterAnimation="scale" exitAnimation="scale" duration={250} style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1000
        }}>
            <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }} onClick={() => setShow(false)}>
              <div style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '24px',
              minWidth: '360px'
            }} onClick={e => e.stopPropagation()}>
                <h3 style={{
                margin: '0 0 8px',
                fontSize: '18px',
                fontWeight: 700
              }}>Scale 애니메이션 모달</h3>
                <p style={{
                margin: '0 0 16px',
                fontSize: '14px',
                color: '#6b7280'
              }}>Presence로 scale 진입/퇴장 효과를 적용했습니다.</p>
                <button onClick={() => setShow(false)} style={{
                padding: '8px 20px',
                background: '#3b82f6',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px'
              }}>닫기</button>
              </div>
            </div>
          </Presence>
        </div>;
    }
    return <ModalDemo />;
  }
}`,...(A=(P=u.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var D,z,R;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '지속 시간 변형',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    fontFamily: 'system-ui'
  }}>
      {[100, 300, 600, 1000].map(duration => {
      function DurationDemo({
        d
      }: {
        d: number;
      }) {
        const [show, setShow] = useState(false);
        return <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
              <div style={{
            minWidth: '60px',
            fontSize: '12px',
            color: '#9ca3af'
          }}>{d}ms</div>
              <button onClick={() => setShow(s => !s)} style={{
            padding: '5px 12px',
            background: '#f3f4f6',
            border: '1px solid #e5e7eb',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '12px'
          }}>토글</button>
              <Presence present={show} duration={d}>
                <div style={{
              padding: '6px 12px',
              background: '#dbeafe',
              borderRadius: '6px',
              fontSize: '13px',
              color: '#1d4ed8'
            }}>콘텐츠</div>
              </Presence>
            </div>;
      }
      return <DurationDemo key={duration} d={duration} />;
    })}
    </div>
}`,...(R=(z=f.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};const L=["Default","AnimationVariants","ModalAnimation","DurationVariants"];export{p as AnimationVariants,c as Default,f as DurationVariants,u as ModalAnimation,L as __namedExportsOrder,_ as default};
