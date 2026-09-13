import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as U}from"./reference-types-4ftiVeOu.js";import{r as n}from"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";function o({trigger:t,content:T,side:p="bottom",openDelay:W=300,closeDelay:B=200,offset:r=8,maxWidth:F=320}){const[H,f]=n.useState(!1),c=n.useRef(null),x=n.useRef(null),D=n.useRef(null),m=()=>{x.current&&clearTimeout(x.current),c.current=setTimeout(()=>f(!0),W)},y=()=>{c.current&&clearTimeout(c.current),x.current=setTimeout(()=>f(!1),B)},w=()=>{const i={position:"absolute",zIndex:100,maxWidth:F,background:"#fff",border:"1px solid #e5e7eb",borderRadius:"12px",boxShadow:"0 8px 32px rgba(0,0,0,0.12)",padding:"16px",animation:"hoverCardIn 0.15s ease",pointerEvents:"auto"};return p==="bottom"?{...i,top:`calc(100% + ${r}px)`,left:"50%",transform:"translateX(-50%)"}:p==="top"?{...i,bottom:`calc(100% + ${r}px)`,left:"50%",transform:"translateX(-50%)"}:p==="right"?{...i,left:`calc(100% + ${r}px)`,top:"50%",transform:"translateY(-50%)"}:{...i,right:`calc(100% + ${r}px)`,top:"50%",transform:"translateY(-50%)"}};return e.jsxs("span",{style:{position:"relative",display:"inline-block"},onMouseEnter:m,onMouseLeave:y,children:[e.jsx("style",{children:"@keyframes hoverCardIn { from { opacity: 0; transform: translateX(-50%) translateY(-4px) } to { opacity: 1; transform: translateX(-50%) translateY(0) } }"}),e.jsx("span",{ref:D,children:t}),H&&e.jsx("div",{style:w(),onMouseEnter:m,onMouseLeave:y,children:T})]})}o.__docgenInfo={description:"",methods:[],displayName:"HoverCard",props:{trigger:{required:!0,tsType:{name:"ReactNode"},description:""},content:{required:!0,tsType:{name:"ReactNode"},description:""},side:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'bottom'",computed:!1}},openDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},closeDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},maxWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"320",computed:!1}}}};const L=U([{library:"Ark UI",component:"Hover Card",url:"https://ark-ui.com/docs/components/hover-card",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Chakra UI",component:"Hover Card",url:"https://www.chakra-ui.com/docs/components/hover-card",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Preview Card",url:"https://base-ui.com/react/components/preview-card",usedFor:["comparison"],relation:"compared"}]),M={title:"Molecules/Overlay/HoverCard",component:o,tags:["autodocs","ref:chakra-ui","ref:shadcn-ui","ref:ark-ui","ref:mui","ref:base-ui"],parameters:{references:L,docs:{description:{component:"\n## HoverCard\n\n트리거 요소에 마우스를 올렸을 때 리치 콘텐츠를 담은 카드가 표시되는 컴포넌트입니다.\n단순 텍스트 Tooltip과 달리 이미지, 버튼, 링크 등 복잡한 콘텐츠를 포함할 수 있습니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `trigger` | `ReactNode` | - | 트리거 요소 |\n| `content` | `ReactNode` | - | 카드 콘텐츠 |\n| `side` | `'top'\\|'bottom'\\|'left'\\|'right'` | `'bottom'` | 카드 위치 |\n| `openDelay` | `number` | `300` | 열리기까지 지연 (ms) |\n| `closeDelay` | `number` | `200` | 닫히기까지 지연 (ms) |\n| `maxWidth` | `number` | `320` | 카드 최대 너비 |\n        "}}},argTypes:{side:{control:"select",options:["top","bottom","left","right"],table:{category:"Layout"}},openDelay:{control:{type:"range",min:0,max:1e3,step:50},table:{category:"Behavior"}},closeDelay:{control:{type:"range",min:0,max:1e3,step:50},table:{category:"Behavior"}},maxWidth:{control:{type:"range",min:100,max:600,step:20},table:{category:"Appearance"}}},args:{side:"bottom",openDelay:300,closeDelay:200,maxWidth:320}},s={name:"기본 (사용자 카드)",render:t=>e.jsxs("div",{style:{padding:"60px 100px",fontFamily:"system-ui"},children:[e.jsx(o,{...t,trigger:e.jsx("a",{href:"#",style:{color:"#3b82f6",fontWeight:600,textDecoration:"none",borderBottom:"1px dashed #3b82f6"},children:"@홍길동"}),content:e.jsxs("div",{style:{fontFamily:"system-ui"},children:[e.jsxs("div",{style:{display:"flex",gap:"12px",marginBottom:"12px"},children:[e.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"50%",background:"linear-gradient(135deg, #3b82f6, #8b5cf6)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px",flexShrink:0},children:"👤"}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"15px",fontWeight:700,color:"#111",marginBottom:"2px"},children:"홍길동"}),e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af"},children:"@hong_gildong"})]})]}),e.jsx("p",{style:{margin:"0 0 12px",fontSize:"13px",color:"#374151",lineHeight:1.5},children:"프론트엔드 개발자 | React & TypeScript 애호가 ☕ 커피와 코드를 사랑합니다."}),e.jsxs("div",{style:{display:"flex",gap:"16px",fontSize:"12px",color:"#6b7280"},children:[e.jsxs("span",{children:[e.jsx("strong",{style:{color:"#111"},children:"142"})," 팔로잉"]}),e.jsxs("span",{children:[e.jsx("strong",{style:{color:"#111"},children:"3.4K"})," 팔로워"]})]})]})}),e.jsx("span",{style:{marginLeft:"8px",color:"#6b7280",fontSize:"14px"},children:"님의 게시물"})]})},a={name:"상품 미리보기",parameters:{docs:{description:{story:"상품 링크에 호버하면 미리보기 카드가 나타납니다."}}},render:()=>e.jsx("div",{style:{padding:"80px 120px",fontFamily:"system-ui"},children:e.jsxs("p",{style:{fontSize:"14px",color:"#374151",lineHeight:2},children:["인기 상품"," ",e.jsx(o,{trigger:e.jsx("a",{href:"#",style:{color:"#3b82f6",fontWeight:600,textDecoration:"none"},children:"아이폰 15 Pro"}),content:e.jsxs("div",{style:{fontFamily:"system-ui"},children:[e.jsx("div",{style:{width:"100%",height:"120px",background:"linear-gradient(135deg, #1c1c1e, #3a3a3c)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"48px",marginBottom:"12px"},children:"📱"}),e.jsx("div",{style:{fontSize:"16px",fontWeight:700,color:"#111",marginBottom:"4px"},children:"아이폰 15 Pro"}),e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"8px"},children:"Apple • 스마트폰"}),e.jsx("div",{style:{fontSize:"20px",fontWeight:800,color:"#3b82f6",marginBottom:"10px"},children:"₩1,550,000"}),e.jsxs("div",{style:{display:"flex",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"11px",background:"#dcfce7",color:"#166534",padding:"2px 8px",borderRadius:"4px"},children:"재고 있음"}),e.jsx("span",{style:{fontSize:"11px",background:"#dbeafe",color:"#1e40af",padding:"2px 8px",borderRadius:"4px"},children:"무료 배송"})]})]})})," ","과"," ",e.jsx(o,{trigger:e.jsx("a",{href:"#",style:{color:"#3b82f6",fontWeight:600,textDecoration:"none"},children:"에어팟 프로"}),content:e.jsxs("div",{style:{fontFamily:"system-ui"},children:[e.jsx("div",{style:{width:"100%",height:"100px",background:"#f9fafb",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"40px",marginBottom:"12px"},children:"🎧"}),e.jsx("div",{style:{fontSize:"16px",fontWeight:700,color:"#111"},children:"에어팟 프로 (3세대)"}),e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"8px"},children:"Apple • 무선 이어폰"}),e.jsx("div",{style:{fontSize:"18px",fontWeight:800,color:"#3b82f6"},children:"₩389,000"})]})})," ","을 함께 구매하세요."]})})},l={name:"위치 변형",parameters:{docs:{description:{story:"top, bottom, left, right 네 가지 카드 위치 예시입니다."}}},render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"60px",padding:"100px 80px",fontFamily:"system-ui"},children:["top","bottom","left","right"].map(t=>e.jsx("div",{style:{textAlign:"center"},children:e.jsx(o,{side:t,trigger:e.jsx("button",{style:{padding:"8px 16px",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontFamily:"system-ui",fontSize:"13px"},children:t}),content:e.jsxs("div",{style:{fontFamily:"system-ui",fontSize:"13px",color:"#374151"},children:[e.jsx("strong",{children:t})," 방향으로 열리는 HoverCard입니다."]})})},t))})},d={name:"GitHub 저장소 카드",parameters:{docs:{description:{story:"GitHub 링크 호버 시 저장소 정보를 미리 보여주는 예시입니다."}}},render:()=>e.jsx("div",{style:{padding:"80px",fontFamily:"system-ui"},children:e.jsxs("p",{style:{fontSize:"14px",color:"#374151",lineHeight:2},children:["이 컴포넌트는"," ",e.jsx(o,{trigger:e.jsx("a",{href:"#",style:{color:"#3b82f6",fontWeight:600,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"4px"},children:"⭐ Lucid-UI-UX"}),content:e.jsxs("div",{style:{fontFamily:"system-ui"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px"},children:[e.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"8px",background:"#111",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px"},children:"🌙"}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"14px",fontWeight:700,color:"#3b82f6"},children:"totobubu / Lucid-UI-UX"}),e.jsx("div",{style:{fontSize:"11px",color:"#9ca3af"},children:"Public • MIT License"})]})]}),e.jsx("p",{style:{margin:"0 0 10px",fontSize:"13px",color:"#374151"},children:"React + TypeScript 기반의 종합 UI 컴포넌트 라이브러리"}),e.jsxs("div",{style:{display:"flex",gap:"12px",fontSize:"12px",color:"#6b7280"},children:[e.jsx("span",{children:"⭐ 1.2k"}),e.jsx("span",{children:"🍴 234"}),e.jsx("span",{children:"👁️ 89"}),e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[e.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#3b82f6",display:"inline-block"}}),"TypeScript"]})]})]})})," ","저장소를 기반으로 합니다."]})})};var g,u,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '기본 (사용자 카드)',
  render: args => <div style={{
    padding: '60px 100px',
    fontFamily: 'system-ui'
  }}>
      <HoverCard {...args} trigger={<a href="#" style={{
      color: '#3b82f6',
      fontWeight: 600,
      textDecoration: 'none',
      borderBottom: '1px dashed #3b82f6'
    }}>
            @홍길동
          </a>} content={<div style={{
      fontFamily: 'system-ui'
    }}>
            <div style={{
        display: 'flex',
        gap: '12px',
        marginBottom: '12px'
      }}>
              <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '22px',
          flexShrink: 0
        }}>👤</div>
              <div>
                <div style={{
            fontSize: '15px',
            fontWeight: 700,
            color: '#111',
            marginBottom: '2px'
          }}>홍길동</div>
                <div style={{
            fontSize: '12px',
            color: '#9ca3af'
          }}>@hong_gildong</div>
              </div>
            </div>
            <p style={{
        margin: '0 0 12px',
        fontSize: '13px',
        color: '#374151',
        lineHeight: 1.5
      }}>
              프론트엔드 개발자 | React & TypeScript 애호가 ☕ 커피와 코드를 사랑합니다.
            </p>
            <div style={{
        display: 'flex',
        gap: '16px',
        fontSize: '12px',
        color: '#6b7280'
      }}>
              <span><strong style={{
            color: '#111'
          }}>142</strong> 팔로잉</span>
              <span><strong style={{
            color: '#111'
          }}>3.4K</strong> 팔로워</span>
            </div>
          </div>} />
      <span style={{
      marginLeft: '8px',
      color: '#6b7280',
      fontSize: '14px'
    }}>님의 게시물</span>
    </div>
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var v,b,j;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '상품 미리보기',
  parameters: {
    docs: {
      description: {
        story: '상품 링크에 호버하면 미리보기 카드가 나타납니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '80px 120px',
    fontFamily: 'system-ui'
  }}>
      <p style={{
      fontSize: '14px',
      color: '#374151',
      lineHeight: 2
    }}>
        인기 상품{' '}
        <HoverCard trigger={<a href="#" style={{
        color: '#3b82f6',
        fontWeight: 600,
        textDecoration: 'none'
      }}>아이폰 15 Pro</a>} content={<div style={{
        fontFamily: 'system-ui'
      }}>
              <div style={{
          width: '100%',
          height: '120px',
          background: 'linear-gradient(135deg, #1c1c1e, #3a3a3c)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '48px',
          marginBottom: '12px'
        }}>📱</div>
              <div style={{
          fontSize: '16px',
          fontWeight: 700,
          color: '#111',
          marginBottom: '4px'
        }}>아이폰 15 Pro</div>
              <div style={{
          fontSize: '12px',
          color: '#9ca3af',
          marginBottom: '8px'
        }}>Apple • 스마트폰</div>
              <div style={{
          fontSize: '20px',
          fontWeight: 800,
          color: '#3b82f6',
          marginBottom: '10px'
        }}>₩1,550,000</div>
              <div style={{
          display: 'flex',
          gap: '6px'
        }}>
                <span style={{
            fontSize: '11px',
            background: '#dcfce7',
            color: '#166534',
            padding: '2px 8px',
            borderRadius: '4px'
          }}>재고 있음</span>
                <span style={{
            fontSize: '11px',
            background: '#dbeafe',
            color: '#1e40af',
            padding: '2px 8px',
            borderRadius: '4px'
          }}>무료 배송</span>
              </div>
            </div>} />
        {' '}과{' '}
        <HoverCard trigger={<a href="#" style={{
        color: '#3b82f6',
        fontWeight: 600,
        textDecoration: 'none'
      }}>에어팟 프로</a>} content={<div style={{
        fontFamily: 'system-ui'
      }}>
              <div style={{
          width: '100%',
          height: '100px',
          background: '#f9fafb',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '40px',
          marginBottom: '12px'
        }}>🎧</div>
              <div style={{
          fontSize: '16px',
          fontWeight: 700,
          color: '#111'
        }}>에어팟 프로 (3세대)</div>
              <div style={{
          fontSize: '12px',
          color: '#9ca3af',
          marginBottom: '8px'
        }}>Apple • 무선 이어폰</div>
              <div style={{
          fontSize: '18px',
          fontWeight: 800,
          color: '#3b82f6'
        }}>₩389,000</div>
            </div>} />
        {' '}을 함께 구매하세요.
      </p>
    </div>
}`,...(j=(b=a.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var S,z,C;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '위치 변형',
  parameters: {
    docs: {
      description: {
        story: 'top, bottom, left, right 네 가지 카드 위치 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    padding: '100px 80px',
    fontFamily: 'system-ui'
  }}>
      {(['top', 'bottom', 'left', 'right'] as const).map(side => <div key={side} style={{
      textAlign: 'center'
    }}>
          <HoverCard side={side} trigger={<button style={{
        padding: '8px 16px',
        background: '#3b82f6',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontFamily: 'system-ui',
        fontSize: '13px'
      }}>
                {side}
              </button>} content={<div style={{
        fontFamily: 'system-ui',
        fontSize: '13px',
        color: '#374151'
      }}>
                <strong>{side}</strong> 방향으로 열리는 HoverCard입니다.
              </div>} />
        </div>)}
    </div>
}`,...(C=(z=l.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var R,k,I;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'GitHub 저장소 카드',
  parameters: {
    docs: {
      description: {
        story: 'GitHub 링크 호버 시 저장소 정보를 미리 보여주는 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '80px',
    fontFamily: 'system-ui'
  }}>
      <p style={{
      fontSize: '14px',
      color: '#374151',
      lineHeight: 2
    }}>
        이 컴포넌트는{' '}
        <HoverCard trigger={<a href="#" style={{
        color: '#3b82f6',
        fontWeight: 600,
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px'
      }}>⭐ Lucid-UI-UX</a>} content={<div style={{
        fontFamily: 'system-ui'
      }}>
              <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '8px'
        }}>
                <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: '#111',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px'
          }}>🌙</div>
                <div>
                  <div style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#3b82f6'
            }}>totobubu / Lucid-UI-UX</div>
                  <div style={{
              fontSize: '11px',
              color: '#9ca3af'
            }}>Public • MIT License</div>
                </div>
              </div>
              <p style={{
          margin: '0 0 10px',
          fontSize: '13px',
          color: '#374151'
        }}>React + TypeScript 기반의 종합 UI 컴포넌트 라이브러리</p>
              <div style={{
          display: 'flex',
          gap: '12px',
          fontSize: '12px',
          color: '#6b7280'
        }}>
                <span>⭐ 1.2k</span>
                <span>🍴 234</span>
                <span>👁️ 89</span>
                <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px'
          }}><span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#3b82f6',
              display: 'inline-block'
            }} />TypeScript</span>
              </div>
            </div>} />
        {' '}저장소를 기반으로 합니다.
      </p>
    </div>
}`,...(I=(k=d.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const V=["Default","ProductCard","SideVariants","RepositoryCard"];export{s as Default,a as ProductCard,d as RepositoryCard,l as SideVariants,V as __namedExportsOrder,M as default};
