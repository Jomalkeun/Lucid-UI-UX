import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-BxXVWNx3.js";import{d as I}from"./reference-types-4ftiVeOu.js";import"./_commonjsHelpers-CqkleIqs.js";function t({background:n,backgroundImage:r,backgroundOverlay:l="#000",backgroundOverlayOpacity:i=.4,speed:u=.5,height:c=400,children:P,style:R}){const p=y.useRef(null),f=y.useRef(null);y.useEffect(()=>{const x=()=>{if(!p.current||!f.current)return;const g=p.current.getBoundingClientRect(),h=window.innerHeight;if(g.bottom<0||g.top>h)return;const B=g.top/h*100*u;f.current.style.transform=`translateY(${B}px)`};return window.addEventListener("scroll",x,{passive:!0}),x(),()=>window.removeEventListener("scroll",x)},[u]);const T=typeof c=="number"?`${c}px`:c;return e.jsxs("div",{ref:p,style:{position:"relative",height:T,overflow:"hidden",fontFamily:"system-ui",...R},children:[e.jsxs("div",{ref:f,style:{position:"absolute",inset:"-20%",willChange:"transform"},children:[r?e.jsx("div",{style:{width:"100%",height:"100%",backgroundImage:`url(${r})`,backgroundSize:"cover",backgroundPosition:"center"}}):n?e.jsx("div",{style:{width:"100%",height:"100%"},children:n}):e.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(135deg, #3b82f6, #8b5cf6)"}}),i>0&&e.jsx("div",{style:{position:"absolute",inset:0,background:l,opacity:i}})]}),e.jsx("div",{style:{position:"relative",zIndex:1,height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:P})]})}t.__docgenInfo={description:"",methods:[],displayName:"Parallax",props:{background:{required:!1,tsType:{name:"ReactNode"},description:""},backgroundImage:{required:!1,tsType:{name:"string"},description:""},backgroundOverlay:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#000'",computed:!1}},backgroundOverlayOpacity:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.4",computed:!1}},speed:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.5",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"400",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const q=I([{library:"Quasar",component:"Parallax",url:"https://quasar.dev/vue-components/parallax",usedFor:["design","behavior","api"],relation:"adapted"}]),E={title:"Organisms/Content/Parallax",component:t,tags:["autodocs","ref:quasar"],parameters:{references:q,docs:{description:{component:"\n## Parallax\n\n스크롤 속도 차이로 깊이감을 주는 패럴랙스 섹션 컴포넌트입니다.\n배경 레이어가 콘텐츠보다 느리게(또는 빠르게) 스크롤되어 3D 레이어 효과를 만듭니다.\n스크롤 가능한 컨테이너 안에 배치하면 효과를 확인할 수 있습니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `background` | `ReactNode` | - | 배경 콘텐츠 (ReactNode) |\n| `backgroundImage` | `string` | - | 배경 이미지 URL |\n| `backgroundOverlay` | `string` | `'#000'` | 오버레이 색상 |\n| `backgroundOverlayOpacity` | `number` | `0.4` | 오버레이 불투명도 |\n| `speed` | `number` | `0.5` | 패럴랙스 속도 배율 |\n| `height` | `number\\|string` | `400` | 섹션 높이 |\n        "}}},argTypes:{speed:{control:{type:"range",min:0,max:1,step:.1},table:{category:"Animation"}},backgroundOverlayOpacity:{control:{type:"range",min:0,max:1,step:.05},table:{category:"Appearance"}},backgroundOverlay:{control:"color",table:{category:"Appearance"}},height:{control:{type:"range",min:200,max:600,step:20},table:{category:"Appearance"}}},args:{speed:.5,backgroundOverlayOpacity:.4,height:360}},o={name:"기본 (그라디언트 배경)",render:n=>e.jsxs("div",{style:{height:"600px",overflowY:"auto",fontFamily:"system-ui"},children:[e.jsx("div",{style:{height:"200px",display:"flex",alignItems:"center",justifyContent:"center",color:"#9ca3af",fontSize:"14px"},children:"↓ 아래로 스크롤하세요"}),e.jsx(t,{...n,children:e.jsxs("div",{style:{textAlign:"center",color:"#fff"},children:[e.jsx("div",{style:{fontSize:"40px",marginBottom:"12px"},children:"🌟"}),e.jsx("h2",{style:{margin:"0 0 8px",fontSize:"28px",fontWeight:800},children:"패럴랙스 효과"}),e.jsx("p",{style:{margin:0,fontSize:"15px",opacity:.85},children:"스크롤하면 배경이 다르게 움직입니다"})]})}),e.jsx("div",{style:{height:"300px",background:"#f9fafb",display:"flex",alignItems:"center",justifyContent:"center",color:"#9ca3af"},children:"페이지 콘텐츠"})]})},a={name:"히어로 섹션",parameters:{docs:{description:{story:"히어로 배너로 사용하는 예시입니다."}}},render:()=>e.jsxs("div",{style:{height:"700px",overflowY:"auto",fontFamily:"system-ui"},children:[e.jsx(t,{background:e.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(160deg, #0ea5e9, #3b82f6, #8b5cf6)"}}),backgroundOverlayOpacity:.2,height:400,speed:.4,children:e.jsxs("div",{style:{textAlign:"center",color:"#fff",padding:"0 20px"},children:[e.jsx("div",{style:{fontSize:"14px",letterSpacing:"0.2em",opacity:.8,marginBottom:"12px",textTransform:"uppercase"},children:"Design System"}),e.jsx("h1",{style:{margin:"0 0 16px",fontSize:"48px",fontWeight:900,lineHeight:1.1},children:"Lucid UI"}),e.jsx("p",{style:{margin:"0 0 28px",fontSize:"18px",opacity:.85,maxWidth:"480px"},children:"아름답고 접근 가능한 컴포넌트로 빠르게 제품을 만드세요"}),e.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center"},children:[e.jsx("button",{style:{padding:"12px 28px",background:"#fff",color:"#3b82f6",border:"none",borderRadius:"8px",fontSize:"15px",fontWeight:700,cursor:"pointer"},children:"시작하기"}),e.jsx("button",{style:{padding:"12px 28px",background:"rgba(255,255,255,0.15)",color:"#fff",border:"1px solid rgba(255,255,255,0.4)",borderRadius:"8px",fontSize:"15px",cursor:"pointer"},children:"GitHub"})]})]})}),e.jsx("div",{style:{padding:"60px 24px",display:"flex",gap:"20px",justifyContent:"center"},children:["200+ 컴포넌트","접근성 지원","다크 모드","TypeScript"].map((n,r)=>e.jsxs("div",{style:{textAlign:"center",padding:"20px",background:"#fff",border:"1px solid #e5e7eb",borderRadius:"12px",width:"140px"},children:[e.jsx("div",{style:{fontSize:"28px",marginBottom:"8px"},children:["🧩","♿","🌙","🔷"][r]}),e.jsx("div",{style:{fontSize:"13px",fontWeight:600,color:"#374151"},children:n})]},n))})]})},s={name:"섹션 구분자",parameters:{docs:{description:{story:"페이지 섹션 사이의 시각적 구분자로 활용합니다."}}},render:()=>e.jsxs("div",{style:{fontFamily:"system-ui",height:"800px",overflowY:"auto"},children:[e.jsxs("div",{style:{padding:"60px 24px",background:"#fff",textAlign:"center"},children:[e.jsx("h2",{style:{fontSize:"28px",fontWeight:800,marginBottom:"8px"},children:"첫 번째 섹션"}),e.jsx("p",{style:{color:"#6b7280",fontSize:"15px"},children:"페이지의 첫 번째 콘텐츠 영역입니다."})]}),e.jsx(t,{background:e.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(135deg, #1e293b, #334155)"}}),backgroundOverlayOpacity:0,height:200,speed:.3,children:e.jsx("div",{style:{textAlign:"center",color:"#fff"},children:e.jsx("div",{style:{fontSize:"18px",fontWeight:700,letterSpacing:"0.1em"},children:"✨ 아름다운 디자인 시스템"})})}),e.jsxs("div",{style:{padding:"60px 24px",background:"#f9fafb",textAlign:"center"},children:[e.jsx("h2",{style:{fontSize:"28px",fontWeight:800,marginBottom:"8px"},children:"두 번째 섹션"}),e.jsx("p",{style:{color:"#6b7280",fontSize:"15px"},children:"다음 콘텐츠 영역입니다."})]}),e.jsx(t,{background:e.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(135deg, #7c3aed, #db2777)"}}),backgroundOverlayOpacity:.1,height:240,speed:.6,children:e.jsxs("div",{style:{textAlign:"center",color:"#fff"},children:[e.jsx("div",{style:{fontSize:"36px",marginBottom:"8px"},children:"🚀"}),e.jsx("div",{style:{fontSize:"20px",fontWeight:700},children:"지금 시작하세요"})]})}),e.jsx("div",{style:{height:"200px",background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",color:"#9ca3af"},children:"푸터 영역"})]})},d={name:"속도 비교",parameters:{docs:{description:{story:"speed 값이 다른 세 섹션을 비교합니다."}}},render:()=>e.jsx("div",{style:{height:"700px",overflowY:"auto",fontFamily:"system-ui"},children:[{speed:.2,color:"#dbeafe",textColor:"#1e40af",label:"Speed: 0.2 (느림)"},{speed:.5,color:"#dcfce7",textColor:"#15803d",label:"Speed: 0.5 (기본)"},{speed:.8,color:"#fce7f3",textColor:"#be185d",label:"Speed: 0.8 (빠름)"}].map(({speed:n,color:r,textColor:l,label:i})=>e.jsx(t,{background:e.jsx("div",{style:{width:"100%",height:"100%",background:r}}),backgroundOverlayOpacity:0,height:200,speed:n,children:e.jsx("div",{style:{textAlign:"center",color:l},children:e.jsx("div",{style:{fontSize:"16px",fontWeight:700},children:i})})},i))})};var m,v,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '기본 (그라디언트 배경)',
  render: args => <div style={{
    height: '600px',
    overflowY: 'auto',
    fontFamily: 'system-ui'
  }}>
      <div style={{
      height: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#9ca3af',
      fontSize: '14px'
    }}>
        ↓ 아래로 스크롤하세요
      </div>
      <Parallax {...args}>
        <div style={{
        textAlign: 'center',
        color: '#fff'
      }}>
          <div style={{
          fontSize: '40px',
          marginBottom: '12px'
        }}>🌟</div>
          <h2 style={{
          margin: '0 0 8px',
          fontSize: '28px',
          fontWeight: 800
        }}>패럴랙스 효과</h2>
          <p style={{
          margin: 0,
          fontSize: '15px',
          opacity: 0.85
        }}>스크롤하면 배경이 다르게 움직입니다</p>
        </div>
      </Parallax>
      <div style={{
      height: '300px',
      background: '#f9fafb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#9ca3af'
    }}>
        페이지 콘텐츠
      </div>
    </div>
}`,...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var S,j,k;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '히어로 섹션',
  parameters: {
    docs: {
      description: {
        story: '히어로 배너로 사용하는 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    height: '700px',
    overflowY: 'auto',
    fontFamily: 'system-ui'
  }}>
      <Parallax background={<div style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(160deg, #0ea5e9, #3b82f6, #8b5cf6)'
    }} />} backgroundOverlayOpacity={0.2} height={400} speed={0.4}>
        <div style={{
        textAlign: 'center',
        color: '#fff',
        padding: '0 20px'
      }}>
          <div style={{
          fontSize: '14px',
          letterSpacing: '0.2em',
          opacity: 0.8,
          marginBottom: '12px',
          textTransform: 'uppercase'
        }}>Design System</div>
          <h1 style={{
          margin: '0 0 16px',
          fontSize: '48px',
          fontWeight: 900,
          lineHeight: 1.1
        }}>Lucid UI</h1>
          <p style={{
          margin: '0 0 28px',
          fontSize: '18px',
          opacity: 0.85,
          maxWidth: '480px'
        }}>
            아름답고 접근 가능한 컴포넌트로 빠르게 제품을 만드세요
          </p>
          <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center'
        }}>
            <button style={{
            padding: '12px 28px',
            background: '#fff',
            color: '#3b82f6',
            border: 'none',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: 700,
            cursor: 'pointer'
          }}>시작하기</button>
            <button style={{
            padding: '12px 28px',
            background: 'rgba(255,255,255,0.15)',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.4)',
            borderRadius: '8px',
            fontSize: '15px',
            cursor: 'pointer'
          }}>GitHub</button>
          </div>
        </div>
      </Parallax>
      <div style={{
      padding: '60px 24px',
      display: 'flex',
      gap: '20px',
      justifyContent: 'center'
    }}>
        {['200+ 컴포넌트', '접근성 지원', '다크 모드', 'TypeScript'].map((f, i) => <div key={f} style={{
        textAlign: 'center',
        padding: '20px',
        background: '#fff',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        width: '140px'
      }}>
            <div style={{
          fontSize: '28px',
          marginBottom: '8px'
        }}>{['🧩', '♿', '🌙', '🔷'][i]}</div>
            <div style={{
          fontSize: '13px',
          fontWeight: 600,
          color: '#374151'
        }}>{f}</div>
          </div>)}
      </div>
    </div>
}`,...(k=(j=a.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var z,w,O;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '섹션 구분자',
  parameters: {
    docs: {
      description: {
        story: '페이지 섹션 사이의 시각적 구분자로 활용합니다.'
      }
    }
  },
  render: () => <div style={{
    fontFamily: 'system-ui',
    height: '800px',
    overflowY: 'auto'
  }}>
      <div style={{
      padding: '60px 24px',
      background: '#fff',
      textAlign: 'center'
    }}>
        <h2 style={{
        fontSize: '28px',
        fontWeight: 800,
        marginBottom: '8px'
      }}>첫 번째 섹션</h2>
        <p style={{
        color: '#6b7280',
        fontSize: '15px'
      }}>페이지의 첫 번째 콘텐츠 영역입니다.</p>
      </div>
      <Parallax background={<div style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #1e293b, #334155)'
    }} />} backgroundOverlayOpacity={0} height={200} speed={0.3}>
        <div style={{
        textAlign: 'center',
        color: '#fff'
      }}>
          <div style={{
          fontSize: '18px',
          fontWeight: 700,
          letterSpacing: '0.1em'
        }}>✨ 아름다운 디자인 시스템</div>
        </div>
      </Parallax>
      <div style={{
      padding: '60px 24px',
      background: '#f9fafb',
      textAlign: 'center'
    }}>
        <h2 style={{
        fontSize: '28px',
        fontWeight: 800,
        marginBottom: '8px'
      }}>두 번째 섹션</h2>
        <p style={{
        color: '#6b7280',
        fontSize: '15px'
      }}>다음 콘텐츠 영역입니다.</p>
      </div>
      <Parallax background={<div style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #7c3aed, #db2777)'
    }} />} backgroundOverlayOpacity={0.1} height={240} speed={0.6}>
        <div style={{
        textAlign: 'center',
        color: '#fff'
      }}>
          <div style={{
          fontSize: '36px',
          marginBottom: '8px'
        }}>🚀</div>
          <div style={{
          fontSize: '20px',
          fontWeight: 700
        }}>지금 시작하세요</div>
        </div>
      </Parallax>
      <div style={{
      height: '200px',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#9ca3af'
    }}>
        푸터 영역
      </div>
    </div>
}`,...(O=(w=s.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var C,A,W;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '속도 비교',
  parameters: {
    docs: {
      description: {
        story: 'speed 값이 다른 세 섹션을 비교합니다.'
      }
    }
  },
  render: () => <div style={{
    height: '700px',
    overflowY: 'auto',
    fontFamily: 'system-ui'
  }}>
      {[{
      speed: 0.2,
      color: '#dbeafe',
      textColor: '#1e40af',
      label: 'Speed: 0.2 (느림)'
    }, {
      speed: 0.5,
      color: '#dcfce7',
      textColor: '#15803d',
      label: 'Speed: 0.5 (기본)'
    }, {
      speed: 0.8,
      color: '#fce7f3',
      textColor: '#be185d',
      label: 'Speed: 0.8 (빠름)'
    }].map(({
      speed,
      color,
      textColor,
      label
    }) => <Parallax key={label} background={<div style={{
      width: '100%',
      height: '100%',
      background: color
    }} />} backgroundOverlayOpacity={0} height={200} speed={speed}>
          <div style={{
        textAlign: 'center',
        color: textColor
      }}>
            <div style={{
          fontSize: '16px',
          fontWeight: 700
        }}>{label}</div>
          </div>
        </Parallax>)}
    </div>
}`,...(W=(A=d.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};const L=["Default","HeroSection","DividerSection","SpeedComparison"];export{o as Default,s as DividerSection,a as HeroSection,d as SpeedComparison,L as __namedExportsOrder,E as default};
