import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{d as W}from"./reference-types-4ftiVeOu.js";function r({children:e,color:i="#1f2937",width:t=280,style:k}){const z=t*2.05,o=t*.04,l=t*.12;return n.jsx("div",{style:{display:"inline-block",...k},children:n.jsxs("div",{style:{width:t,height:z,background:i,borderRadius:l,padding:o,boxSizing:"border-box",position:"relative",boxShadow:"inset 0 0 0 1px rgba(255,255,255,0.1), 0 24px 60px rgba(0,0,0,0.3)",fontFamily:"system-ui"},children:[n.jsxs("div",{style:{position:"absolute",top:o*1.5,left:"50%",transform:"translateX(-50%)",width:t*.3,height:t*.055,background:i,borderRadius:t*.03,zIndex:10,display:"flex",alignItems:"center",justifyContent:"flex-end",paddingRight:"6px",gap:"4px"},children:[n.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#374151"}}),n.jsx("div",{style:{width:"4px",height:"4px",borderRadius:"50%",background:"#374151"}})]}),n.jsx("div",{style:{position:"absolute",right:-o*.8,top:"25%",width:o*.8,height:t*.12,background:i,borderRadius:`0 ${o}px ${o}px 0`}}),[.18,.29].map((I,w)=>n.jsx("div",{style:{position:"absolute",left:-o*.8,top:`${I*100}%`,width:o*.8,height:t*.08,background:i,borderRadius:`${o}px 0 0 ${o}px`}},w)),n.jsxs("div",{style:{width:"100%",height:"100%",borderRadius:l-o,overflow:"hidden",background:"#fff",position:"relative"},children:[n.jsxs("div",{style:{height:"28px",background:"transparent",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",paddingTop:"6px",fontSize:"11px",color:"#111",position:"relative",zIndex:5},children:[n.jsx("span",{style:{fontWeight:700},children:"9:41"}),n.jsx("span",{children:"📶 🔋"})]}),n.jsx("div",{style:{height:"calc(100% - 28px)",overflowY:"auto"},children:e}),n.jsx("div",{style:{position:"absolute",bottom:"6px",left:"50%",transform:"translateX(-50%)",width:"40%",height:"4px",background:"#111",borderRadius:"2px"}})]})]})})}r.__docgenInfo={description:"",methods:[],displayName:"MockupPhone",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#1f2937'",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"280",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const P=W([{library:"daisyUI",component:"Phone mockup",url:"https://daisyui.com/components/mockup-phone/",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"Device Mockups",url:"https://flowbite.com/docs/components/device-mockups/",usedFor:["comparison"],relation:"compared"}]),F={title:"Organisms/Mockup/MockupPhone",component:r,tags:["autodocs","ref:daisy-ui","ref:flowbite"],parameters:{references:P,docs:{description:{component:`
## MockupPhone

스마트폰 외형을 모방한 목업 프레임 컴포넌트입니다.
노치, 버튼, 화면 베젤이 포함된 폰 프레임 안에 모바일 UI를 삽입해 반응형 디자인을 시연합니다.

---

### Props

| Prop | Type | Default | 설명 |
|---|---|---|---|
| \`color\` | \`string\` | \`'#1f2937'\` | 폰 케이스 색상 |
| \`width\` | \`number\` | \`280\` | 폰 너비(px) |
        `}}},argTypes:{color:{control:"color",table:{category:"Appearance"}},width:{control:{type:"range",min:200,max:400,step:10},table:{category:"Appearance"}}},args:{color:"#1f2937",width:260}},s={name:"기본 (다크)",render:e=>n.jsx(r,{...e,children:n.jsxs("div",{style:{padding:"20px 16px",fontFamily:"system-ui",background:"linear-gradient(135deg, #3b82f6, #8b5cf6)",minHeight:"100%",color:"#fff",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"12px"},children:[n.jsx("div",{style:{fontSize:"48px"},children:"🎨"}),n.jsx("h2",{style:{margin:0,fontSize:"20px",fontWeight:800},children:"Lucid UI"}),n.jsx("p",{style:{margin:0,fontSize:"13px",opacity:.8,textAlign:"center",lineHeight:1.5},children:"아름다운 모바일 UI를 빠르게 구축하세요"}),n.jsx("button",{style:{padding:"10px 24px",background:"#fff",color:"#3b82f6",border:"none",borderRadius:"24px",fontSize:"14px",fontWeight:700,cursor:"pointer",marginTop:"8px"},children:"시작하기"})]})})},d={name:"화이트 폰",args:{color:"#e5e7eb",width:260},render:e=>n.jsx(r,{...e,children:n.jsxs("div",{style:{fontFamily:"system-ui",background:"#fff"},children:[n.jsx("div",{style:{padding:"12px",background:"#f3f4f6",fontSize:"13px",fontWeight:700,color:"#111",borderBottom:"1px solid #e5e7eb"},children:"💬 메시지"}),[{from:"other",text:"안녕하세요!",time:"오후 2:31"},{from:"me",text:"네 안녕하세요 😊",time:"오후 2:32"},{from:"other",text:"오늘 미팅 괜찮으신가요?",time:"오후 2:33"},{from:"me",text:"네, 3시에 뵙겠습니다!",time:"오후 2:34"}].map((i,t)=>n.jsxs("div",{style:{padding:"8px 12px",display:"flex",flexDirection:"column",alignItems:i.from==="me"?"flex-end":"flex-start"},children:[n.jsx("div",{style:{maxWidth:"75%",padding:"8px 12px",background:i.from==="me"?"#3b82f6":"#fff",color:i.from==="me"?"#fff":"#374151",borderRadius:i.from==="me"?"16px 16px 2px 16px":"16px 16px 16px 2px",fontSize:"13px",boxShadow:"0 1px 2px rgba(0,0,0,0.1)"},children:i.text}),n.jsx("div",{style:{fontSize:"10px",color:"#9ca3af",marginTop:"2px"},children:i.time})]},t))]})})},p={name:"크기 변형",parameters:{docs:{description:{story:"다양한 크기의 폰 목업입니다."}}},render:()=>n.jsx("div",{style:{display:"flex",gap:"24px",alignItems:"flex-end",fontFamily:"system-ui"},children:[200,240,280].map(e=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[n.jsx(r,{width:e,color:["#374151","#1e40af","#6d28d9"][[200,240,280].indexOf(e)],children:n.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",background:"#f9fafb",fontSize:"32px"},children:"📱"})}),n.jsxs("div",{style:{fontSize:"12px",color:"#9ca3af"},children:[e,"px"]})]},e))})},a={name:"앱 쇼케이스",parameters:{docs:{description:{story:"모바일 앱 소개 페이지에 활용하는 예시입니다."}}},render:()=>n.jsxs("div",{style:{display:"flex",gap:"40px",alignItems:"center",padding:"20px",fontFamily:"system-ui"},children:[n.jsx(r,{width:240,children:n.jsxs("div",{style:{fontFamily:"system-ui",background:"#fff"},children:[n.jsxs("div",{style:{background:"#10b981",padding:"20px 16px 30px",color:"#fff"},children:[n.jsx("div",{style:{fontSize:"12px",opacity:.8,marginBottom:"4px"},children:"안녕하세요, 민준님 👋"}),n.jsx("div",{style:{fontSize:"20px",fontWeight:700},children:"₩ 1,234,567"}),n.jsx("div",{style:{fontSize:"11px",opacity:.7},children:"이번 달 잔액"})]}),n.jsx("div",{style:{padding:"12px",display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"8px",textAlign:"center"},children:["송금","결제","저축","투자"].map((e,i)=>n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"22px",marginBottom:"4px"},children:["💸","💳","🏦","📈"][i]}),n.jsx("div",{style:{fontSize:"10px",color:"#6b7280"},children:e})]},e))}),n.jsxs("div",{style:{padding:"0 12px"},children:[n.jsx("div",{style:{fontSize:"12px",fontWeight:600,color:"#111",marginBottom:"8px"},children:"최근 거래"}),[{name:"스타벅스",amount:"-₩5,900",icon:"☕"},{name:"급여",amount:"+₩3,200,000",icon:"💼"},{name:"넷플릭스",amount:"-₩17,000",icon:"🎬"}].map(e=>n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:"1px solid #f0f0f0",fontSize:"12px"},children:[n.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[n.jsx("span",{children:e.icon}),n.jsx("span",{style:{color:"#374151"},children:e.name})]}),n.jsx("span",{style:{fontWeight:600,color:e.amount.startsWith("+")?"#10b981":"#374151"},children:e.amount})]},e.name))]})]})}),n.jsxs("div",{children:[n.jsx("h2",{style:{fontSize:"24px",fontWeight:800,color:"#111",marginBottom:"8px"},children:"간편한 금융 관리"}),n.jsx("p",{style:{fontSize:"15px",color:"#6b7280",lineHeight:1.6,marginBottom:"16px",maxWidth:"280px"},children:"모든 금융 거래를 한 곳에서 관리하세요. 실시간 잔액 확인, 송금, 투자까지 가능합니다."}),n.jsxs("div",{style:{display:"flex",gap:"10px"},children:[n.jsx("div",{style:{padding:"8px 16px",background:"#111",color:"#fff",borderRadius:"8px",fontSize:"13px",display:"flex",alignItems:"center",gap:"6px",cursor:"pointer"},children:"🍎 App Store"}),n.jsx("div",{style:{padding:"8px 16px",background:"#111",color:"#fff",borderRadius:"8px",fontSize:"13px",display:"flex",alignItems:"center",gap:"6px",cursor:"pointer"},children:"▶ Google Play"})]})]})]})};var x,c,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '기본 (다크)',
  render: args => <MockupPhone {...args}>
      <div style={{
      padding: '20px 16px',
      fontFamily: 'system-ui',
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      minHeight: '100%',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px'
    }}>
        <div style={{
        fontSize: '48px'
      }}>🎨</div>
        <h2 style={{
        margin: 0,
        fontSize: '20px',
        fontWeight: 800
      }}>Lucid UI</h2>
        <p style={{
        margin: 0,
        fontSize: '13px',
        opacity: 0.8,
        textAlign: 'center',
        lineHeight: 1.5
      }}>아름다운 모바일 UI를 빠르게 구축하세요</p>
        <button style={{
        padding: '10px 24px',
        background: '#fff',
        color: '#3b82f6',
        border: 'none',
        borderRadius: '24px',
        fontSize: '14px',
        fontWeight: 700,
        cursor: 'pointer',
        marginTop: '8px'
      }}>
          시작하기
        </button>
      </div>
    </MockupPhone>
}`,...(f=(c=s.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var m,g,y;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '화이트 폰',
  args: {
    color: '#e5e7eb',
    width: 260
  },
  render: args => <MockupPhone {...args}>
      <div style={{
      fontFamily: 'system-ui',
      background: '#fff'
    }}>
        {/* Chat UI */}
        <div style={{
        padding: '12px',
        background: '#f3f4f6',
        fontSize: '13px',
        fontWeight: 700,
        color: '#111',
        borderBottom: '1px solid #e5e7eb'
      }}>
          💬 메시지
        </div>
        {[{
        from: 'other',
        text: '안녕하세요!',
        time: '오후 2:31'
      }, {
        from: 'me',
        text: '네 안녕하세요 😊',
        time: '오후 2:32'
      }, {
        from: 'other',
        text: '오늘 미팅 괜찮으신가요?',
        time: '오후 2:33'
      }, {
        from: 'me',
        text: '네, 3시에 뵙겠습니다!',
        time: '오후 2:34'
      }].map((msg, i) => <div key={i} style={{
        padding: '8px 12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: msg.from === 'me' ? 'flex-end' : 'flex-start'
      }}>
            <div style={{
          maxWidth: '75%',
          padding: '8px 12px',
          background: msg.from === 'me' ? '#3b82f6' : '#fff',
          color: msg.from === 'me' ? '#fff' : '#374151',
          borderRadius: msg.from === 'me' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
          fontSize: '13px',
          boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
        }}>
              {msg.text}
            </div>
            <div style={{
          fontSize: '10px',
          color: '#9ca3af',
          marginTop: '2px'
        }}>{msg.time}</div>
          </div>)}
      </div>
    </MockupPhone>
}`,...(y=(g=d.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var u,h,v;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '크기 변형',
  parameters: {
    docs: {
      description: {
        story: '다양한 크기의 폰 목업입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'flex-end',
    fontFamily: 'system-ui'
  }}>
      {([200, 240, 280] as const).map(width => <div key={width} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
          <MockupPhone width={width} color={['#374151', '#1e40af', '#6d28d9'][[200, 240, 280].indexOf(width)]}>
            <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          background: '#f9fafb',
          fontSize: '32px'
        }}>📱</div>
          </MockupPhone>
          <div style={{
        fontSize: '12px',
        color: '#9ca3af'
      }}>{width}px</div>
        </div>)}
    </div>
}`,...(v=(h=p.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var b,j,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '앱 쇼케이스',
  parameters: {
    docs: {
      description: {
        story: '모바일 앱 소개 페이지에 활용하는 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '40px',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'system-ui'
  }}>
      <MockupPhone width={240}>
        <div style={{
        fontFamily: 'system-ui',
        background: '#fff'
      }}>
          <div style={{
          background: '#10b981',
          padding: '20px 16px 30px',
          color: '#fff'
        }}>
            <div style={{
            fontSize: '12px',
            opacity: 0.8,
            marginBottom: '4px'
          }}>안녕하세요, 민준님 👋</div>
            <div style={{
            fontSize: '20px',
            fontWeight: 700
          }}>₩ 1,234,567</div>
            <div style={{
            fontSize: '11px',
            opacity: 0.7
          }}>이번 달 잔액</div>
          </div>
          <div style={{
          padding: '12px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '8px',
          textAlign: 'center'
        }}>
            {['송금', '결제', '저축', '투자'].map((item, i) => <div key={item}>
                <div style={{
              fontSize: '22px',
              marginBottom: '4px'
            }}>{['💸', '💳', '🏦', '📈'][i]}</div>
                <div style={{
              fontSize: '10px',
              color: '#6b7280'
            }}>{item}</div>
              </div>)}
          </div>
          <div style={{
          padding: '0 12px'
        }}>
            <div style={{
            fontSize: '12px',
            fontWeight: 600,
            color: '#111',
            marginBottom: '8px'
          }}>최근 거래</div>
            {[{
            name: '스타벅스',
            amount: '-₩5,900',
            icon: '☕'
          }, {
            name: '급여',
            amount: '+₩3,200,000',
            icon: '💼'
          }, {
            name: '넷플릭스',
            amount: '-₩17,000',
            icon: '🎬'
          }].map(t => <div key={t.name} style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '8px 0',
            borderBottom: '1px solid #f0f0f0',
            fontSize: '12px'
          }}>
                <div style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center'
            }}>
                  <span>{t.icon}</span>
                  <span style={{
                color: '#374151'
              }}>{t.name}</span>
                </div>
                <span style={{
              fontWeight: 600,
              color: t.amount.startsWith('+') ? '#10b981' : '#374151'
            }}>{t.amount}</span>
              </div>)}
          </div>
        </div>
      </MockupPhone>
      <div>
        <h2 style={{
        fontSize: '24px',
        fontWeight: 800,
        color: '#111',
        marginBottom: '8px'
      }}>간편한 금융 관리</h2>
        <p style={{
        fontSize: '15px',
        color: '#6b7280',
        lineHeight: 1.6,
        marginBottom: '16px',
        maxWidth: '280px'
      }}>
          모든 금융 거래를 한 곳에서 관리하세요. 실시간 잔액 확인, 송금, 투자까지 가능합니다.
        </p>
        <div style={{
        display: 'flex',
        gap: '10px'
      }}>
          <div style={{
          padding: '8px 16px',
          background: '#111',
          color: '#fff',
          borderRadius: '8px',
          fontSize: '13px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          cursor: 'pointer'
        }}>
            🍎 App Store
          </div>
          <div style={{
          padding: '8px 16px',
          background: '#111',
          color: '#fff',
          borderRadius: '8px',
          fontSize: '13px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          cursor: 'pointer'
        }}>
            ▶ Google Play
          </div>
        </div>
      </div>
    </div>
}`,...(S=(j=a.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const M=["Default","WhitePhone","SizeVariants","AppShowcase"];export{a as AppShowcase,s as Default,p as SizeVariants,d as WhitePhone,M as __namedExportsOrder,F as default};
