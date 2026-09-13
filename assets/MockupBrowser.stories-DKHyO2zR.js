import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as M}from"./reference-types-4ftiVeOu.js";function t({url:o="https://example.com",children:r,width:p="100%",height:d=400,theme:w="light",style:z}){const i=w==="dark",B=i?"#2d2d2d":"#e5e7eb",C=["#ef4444","#f59e0b","#22c55e"];return e.jsxs("div",{style:{width:p,borderRadius:"10px",overflow:"hidden",boxShadow:"0 10px 40px rgba(0,0,0,0.15)",border:`1px solid ${i?"#444":"#d1d5db"}`,fontFamily:"system-ui",display:"flex",flexDirection:"column",...z},children:[e.jsxs("div",{style:{background:B,padding:"10px 14px",display:"flex",alignItems:"center",gap:"10px",flexShrink:0},children:[e.jsx("div",{style:{display:"flex",gap:"6px"},children:C.map(n=>e.jsx("div",{style:{width:"12px",height:"12px",borderRadius:"50%",background:n}},n))}),e.jsxs("div",{style:{flex:1,background:i?"#444":"#fff",border:`1px solid ${i?"#555":"#d1d5db"}`,borderRadius:"20px",padding:"4px 12px",fontSize:"12px",color:i?"#aaa":"#6b7280",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:["🔒 ",o]}),e.jsx("div",{style:{display:"flex",gap:"6px"},children:["←","→","⟳"].map(n=>e.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",color:i?"#aaa":"#6b7280",fontSize:"14px",padding:"0 2px"},children:n},n))})]}),e.jsx("div",{style:{height:typeof d=="number"?`${d}px`:d,background:i?"#1a1a1a":"#fff",overflowY:"auto"},children:r})]})}t.__docgenInfo={description:"",methods:[],displayName:"MockupBrowser",props:{url:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'https://example.com'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"'100%'",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"400",computed:!1}},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"",defaultValue:{value:"'light'",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const R=M([{library:"daisyUI",component:"Browser mockup",url:"https://daisyui.com/components/mockup-browser/",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"Device Mockups",url:"https://flowbite.com/docs/components/device-mockups/",usedFor:["comparison"],relation:"compared"}]),F={title:"Organisms/Mockup/MockupBrowser",component:t,tags:["autodocs","ref:daisy-ui","ref:flowbite"],parameters:{references:R,docs:{description:{component:"\n## MockupBrowser\n\n브라우저 창 UI를 모방한 목업 프레임 컴포넌트입니다.\nURL 바, 탭, 윈도우 컨트롤 버튼이 포함된 브라우저 외형 안에 임의의 콘텐츠를 삽입해 디자인을 시연합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `url` | `string` | `'https://example.com'` | 주소 표시줄 URL |\n| `width` | `number\\|string` | `'100%'` | 프레임 너비 |\n| `height` | `number\\|string` | `400` | 콘텐츠 높이 |\n| `theme` | `'light'\\|'dark'` | `'light'` | 테마 |\n        "}}},argTypes:{url:{control:"text",table:{category:"Content"}},theme:{control:"select",options:["light","dark"],table:{category:"Appearance"}},height:{control:{type:"range",min:200,max:600,step:20},table:{category:"Appearance"}}},args:{url:"https://lucid-ui.dev",theme:"light",height:360}},W=()=>e.jsxs("div",{style:{fontFamily:"system-ui",padding:"32px",background:"linear-gradient(135deg, #eff6ff, #f0fdf4)",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},children:[e.jsx("div",{style:{fontSize:"36px",marginBottom:"12px"},children:"🎨"}),e.jsx("h1",{style:{fontSize:"24px",fontWeight:800,color:"#111",margin:"0 0 8px"},children:"Lucid UI Design System"}),e.jsx("p",{style:{fontSize:"15px",color:"#6b7280",margin:"0 0 20px",maxWidth:"400px",lineHeight:1.6},children:"아름다운 컴포넌트로 빠르게 제품을 만드세요"}),e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx("button",{style:{padding:"10px 24px",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"14px",fontWeight:600},children:"시작하기"}),e.jsx("button",{style:{padding:"10px 24px",background:"#fff",color:"#374151",border:"1px solid #e5e7eb",borderRadius:"8px",cursor:"pointer",fontSize:"14px"},children:"문서 보기"})]})]}),l={name:"기본 (라이트)",render:o=>e.jsx(t,{...o,children:e.jsx(W,{})})},s={name:"다크 테마",args:{theme:"dark",url:"https://code.editor.dev"},render:o=>e.jsx(t,{...o,children:e.jsx("div",{style:{padding:"16px",background:"#0d1117",height:"100%",fontFamily:"monospace",fontSize:"13px"},children:[{line:1,code:'import { useState } from "react"',color:"#c9d1d9"},{line:2,code:"",color:""},{line:3,code:"export function Counter() {",color:"#c9d1d9"},{line:4,code:"  const [count, setCount] = useState(0)",color:"#c9d1d9"},{line:5,code:"  return (",color:"#c9d1d9"},{line:6,code:"    <button onClick={() => setCount(c => c + 1)}>",color:"#79c0ff"},{line:7,code:"      Count: {count}",color:"#a5d6ff"},{line:8,code:"    </button>",color:"#79c0ff"},{line:9,code:"  )",color:"#c9d1d9"},{line:10,code:"}",color:"#c9d1d9"}].map(({line:r,code:p,color:d})=>e.jsxs("div",{style:{display:"flex",gap:"16px",lineHeight:1.8},children:[e.jsx("span",{style:{color:"#484f58",minWidth:"20px",textAlign:"right"},children:r}),e.jsx("span",{style:{color:d},children:p})]},r))})})},a={name:"대시보드",render:()=>e.jsx(t,{url:"https://admin.example.com/dashboard",height:400,children:e.jsxs("div",{style:{display:"flex",height:"100%",fontFamily:"system-ui"},children:[e.jsx("div",{style:{width:"160px",background:"#1e293b",padding:"16px 0",flexShrink:0},children:["대시보드","사용자","상품","분석","설정"].map((o,r)=>e.jsxs("div",{style:{padding:"10px 16px",color:r===0?"#60a5fa":"rgba(255,255,255,0.6)",fontSize:"13px",cursor:"pointer"},children:[["📊","👥","📦","📈","⚙️"][r]," ",o]},o))}),e.jsxs("div",{style:{flex:1,padding:"20px",background:"#f8fafc",overflowY:"auto"},children:[e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"12px",marginBottom:"16px"},children:[{label:"총 사용자",value:"12,543",color:"#dbeafe"},{label:"월 수익",value:"₩8.4M",color:"#dcfce7"},{label:"전환율",value:"3.2%",color:"#fce7f3"}].map(o=>e.jsxs("div",{style:{padding:"14px",background:o.color,borderRadius:"10px"},children:[e.jsx("div",{style:{fontSize:"11px",color:"#6b7280",marginBottom:"4px"},children:o.label}),e.jsx("div",{style:{fontSize:"20px",fontWeight:700,color:"#111"},children:o.value})]},o.label))}),e.jsxs("div",{style:{background:"#fff",borderRadius:"10px",padding:"16px",border:"1px solid #e5e7eb"},children:[e.jsx("div",{style:{fontSize:"13px",fontWeight:600,marginBottom:"10px",color:"#111"},children:"최근 활동"}),["사용자 김민준 가입","새 주문 #1234 생성","서버 배포 완료"].map((o,r)=>e.jsxs("div",{style:{fontSize:"12px",padding:"6px 0",borderBottom:"1px solid #f0f0f0",color:"#374151"},children:["• ",o]},r))]})]})]})})},c={name:"이커머스 페이지",render:()=>e.jsx(t,{url:"https://shop.example.com/products",height:380,children:e.jsxs("div",{style:{fontFamily:"system-ui",padding:"20px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px"},children:[e.jsx("h2",{style:{margin:0,fontSize:"18px",fontWeight:700},children:"신상품"}),e.jsx("div",{style:{fontSize:"13px",color:"#6b7280"},children:"총 24개"})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"12px"},children:[{name:"에어팟",price:"₩199,000",emoji:"🎧",color:"#dbeafe"},{name:"아이패드",price:"₩899,000",emoji:"📱",color:"#dcfce7"},{name:"맥북",price:"₩1,890,000",emoji:"💻",color:"#fce7f3"},{name:"애플워치",price:"₩549,000",emoji:"⌚",color:"#fef3c7"}].map(o=>e.jsxs("div",{style:{border:"1px solid #e5e7eb",borderRadius:"10px",overflow:"hidden"},children:[e.jsx("div",{style:{height:"80px",background:o.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"32px"},children:o.emoji}),e.jsxs("div",{style:{padding:"8px"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:600,color:"#111"},children:o.name}),e.jsx("div",{style:{fontSize:"12px",color:"#3b82f6",fontWeight:700},children:o.price})]})]},o.name))})]})})};var m,f,x;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '기본 (라이트)',
  render: args => <MockupBrowser {...args}>
      <LandingPage />
    </MockupBrowser>
}`,...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var u,g,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '다크 테마',
  args: {
    theme: 'dark',
    url: 'https://code.editor.dev'
  },
  render: args => <MockupBrowser {...args}>
      <div style={{
      padding: '16px',
      background: '#0d1117',
      height: '100%',
      fontFamily: 'monospace',
      fontSize: '13px'
    }}>
        {[{
        line: 1,
        code: 'import { useState } from "react"',
        color: '#c9d1d9'
      }, {
        line: 2,
        code: '',
        color: ''
      }, {
        line: 3,
        code: 'export function Counter() {',
        color: '#c9d1d9'
      }, {
        line: 4,
        code: '  const [count, setCount] = useState(0)',
        color: '#c9d1d9'
      }, {
        line: 5,
        code: '  return (',
        color: '#c9d1d9'
      }, {
        line: 6,
        code: '    <button onClick={() => setCount(c => c + 1)}>',
        color: '#79c0ff'
      }, {
        line: 7,
        code: '      Count: {count}',
        color: '#a5d6ff'
      }, {
        line: 8,
        code: '    </button>',
        color: '#79c0ff'
      }, {
        line: 9,
        code: '  )',
        color: '#c9d1d9'
      }, {
        line: 10,
        code: '}',
        color: '#c9d1d9'
      }].map(({
        line,
        code,
        color
      }) => <div key={line} style={{
        display: 'flex',
        gap: '16px',
        lineHeight: 1.8
      }}>
            <span style={{
          color: '#484f58',
          minWidth: '20px',
          textAlign: 'right'
        }}>{line}</span>
            <span style={{
          color
        }}>{code}</span>
          </div>)}
      </div>
    </MockupBrowser>
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,b,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '대시보드',
  render: () => <MockupBrowser url="https://admin.example.com/dashboard" height={400}>
      <div style={{
      display: 'flex',
      height: '100%',
      fontFamily: 'system-ui'
    }}>
        <div style={{
        width: '160px',
        background: '#1e293b',
        padding: '16px 0',
        flexShrink: 0
      }}>
          {['대시보드', '사용자', '상품', '분석', '설정'].map((item, i) => <div key={item} style={{
          padding: '10px 16px',
          color: i === 0 ? '#60a5fa' : 'rgba(255,255,255,0.6)',
          fontSize: '13px',
          cursor: 'pointer'
        }}>
              {['📊', '👥', '📦', '📈', '⚙️'][i]} {item}
            </div>)}
        </div>
        <div style={{
        flex: 1,
        padding: '20px',
        background: '#f8fafc',
        overflowY: 'auto'
      }}>
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          marginBottom: '16px'
        }}>
            {[{
            label: '총 사용자',
            value: '12,543',
            color: '#dbeafe'
          }, {
            label: '월 수익',
            value: '₩8.4M',
            color: '#dcfce7'
          }, {
            label: '전환율',
            value: '3.2%',
            color: '#fce7f3'
          }].map(card => <div key={card.label} style={{
            padding: '14px',
            background: card.color,
            borderRadius: '10px'
          }}>
                <div style={{
              fontSize: '11px',
              color: '#6b7280',
              marginBottom: '4px'
            }}>{card.label}</div>
                <div style={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#111'
            }}>{card.value}</div>
              </div>)}
          </div>
          <div style={{
          background: '#fff',
          borderRadius: '10px',
          padding: '16px',
          border: '1px solid #e5e7eb'
        }}>
            <div style={{
            fontSize: '13px',
            fontWeight: 600,
            marginBottom: '10px',
            color: '#111'
          }}>최근 활동</div>
            {['사용자 김민준 가입', '새 주문 #1234 생성', '서버 배포 완료'].map((act, i) => <div key={i} style={{
            fontSize: '12px',
            padding: '6px 0',
            borderBottom: '1px solid #f0f0f0',
            color: '#374151'
          }}>• {act}</div>)}
          </div>
        </div>
      </div>
    </MockupBrowser>
}`,...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var j,k,S;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '이커머스 페이지',
  render: () => <MockupBrowser url="https://shop.example.com/products" height={380}>
      <div style={{
      fontFamily: 'system-ui',
      padding: '20px'
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px'
      }}>
          <h2 style={{
          margin: 0,
          fontSize: '18px',
          fontWeight: 700
        }}>신상품</h2>
          <div style={{
          fontSize: '13px',
          color: '#6b7280'
        }}>총 24개</div>
        </div>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '12px'
      }}>
          {[{
          name: '에어팟',
          price: '₩199,000',
          emoji: '🎧',
          color: '#dbeafe'
        }, {
          name: '아이패드',
          price: '₩899,000',
          emoji: '📱',
          color: '#dcfce7'
        }, {
          name: '맥북',
          price: '₩1,890,000',
          emoji: '💻',
          color: '#fce7f3'
        }, {
          name: '애플워치',
          price: '₩549,000',
          emoji: '⌚',
          color: '#fef3c7'
        }].map(p => <div key={p.name} style={{
          border: '1px solid #e5e7eb',
          borderRadius: '10px',
          overflow: 'hidden'
        }}>
              <div style={{
            height: '80px',
            background: p.color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px'
          }}>{p.emoji}</div>
              <div style={{
            padding: '8px'
          }}>
                <div style={{
              fontSize: '12px',
              fontWeight: 600,
              color: '#111'
            }}>{p.name}</div>
                <div style={{
              fontSize: '12px',
              color: '#3b82f6',
              fontWeight: 700
            }}>{p.price}</div>
              </div>
            </div>)}
        </div>
      </div>
    </MockupBrowser>
}`,...(S=(k=c.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const I=["Default","DarkTheme","DashboardMockup","EcommerceMockup"];export{s as DarkTheme,a as DashboardMockup,l as Default,c as EcommerceMockup,I as __namedExportsOrder,F as default};
