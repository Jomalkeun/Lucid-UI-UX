import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-BxXVWNx3.js";import{d as q}from"./reference-types-CC3VHbJD.js";import{A as t}from"./AppShell-QkFuM0-6.js";import"./_commonjsHelpers-CqkleIqs.js";const{Header:o,Sider:m,Content:i,Footer:h}=t,_=q([{library:"Ant Design",component:"Layout",url:"https://ant.design/components/layout/",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Layout",url:"https://quasar.dev/layout/layout",usedFor:["comparison"],relation:"compared"}]),ee={title:"Layout/Patterns/AppShell",component:t,tags:["autodocs","ref:ant-design","ref:quasar"],parameters:{references:_,docs:{description:{component:"\n## Layout\n\n페이지 전체 레이아웃을 구성하는 컴포넌트 모음입니다.\n`Layout`, `Header`, `Sider`, `Content`, `Footer` 서브 컴포넌트를 조합하여\n상단 헤더 + 좌측 사이드바 + 메인 콘텐츠 + 하단 푸터 구조를 선언적으로 정의합니다.\n\n---\n\n### Sub-components\n\n| Component | 설명 |\n|---|---|\n| `Layout` | 루트 레이아웃 컨테이너. `hasSider` 로 수평 방향 전환, `variant` 로 캔버스 톤 선택 |\n| `Header` | 상단 헤더 영역. `sticky` 로 스크롤 고정 가능 |\n| `Sider` | 측면 사이드바 (접기/펼치기 지원) |\n| `Content` | 메인 콘텐츠 영역. `padded` 로 표준 여백 적용 |\n| `Footer` | 하단 푸터 영역 |\n        "}}},argTypes:{hasSider:{control:"boolean",table:{category:"Layout"}}}},g=["대시보드","사용자","상품","분석","설정"],b={listStyle:"none",margin:0,padding:"8px 0"},j=n=>({padding:"10px 16px",cursor:"pointer",color:n?"#1677ff":"rgba(255,255,255,0.65)",background:n?"#1677ff22":"transparent",borderRight:n?"3px solid #1677ff":"3px solid transparent",fontSize:"14px",display:"flex",alignItems:"center",gap:"8px"}),a={name:"기본 (상하 레이아웃)",render:()=>e.jsxs(t,{style:{height:"360px",border:"1px solid #e5e7eb",borderRadius:"8px",overflow:"hidden"},children:[e.jsx(o,{children:e.jsx("span",{style:{fontWeight:700,fontSize:"18px",letterSpacing:"0.5px"},children:"Lucid UI"})}),e.jsx(i,{style:{padding:"24px",background:"#f5f5f5"},children:e.jsxs("div",{style:{background:"#fff",borderRadius:"8px",padding:"24px",fontFamily:"system-ui"},children:[e.jsx("h2",{style:{margin:"0 0 12px",fontSize:"20px",fontWeight:700},children:"메인 콘텐츠"}),e.jsx("p",{style:{color:"#6b7280",lineHeight:1.6},children:"Header → Content → Footer 구조의 기본 레이아웃입니다."})]})}),e.jsx(h,{style:{justifyContent:"center",fontSize:"13px"},children:"© 2024 Lucid UI — All rights reserved"})]})};function Q(){const[n,r]=u.useState("대시보드");return e.jsxs(t,{style:{height:"400px",border:"1px solid #e5e7eb",borderRadius:"8px",overflow:"hidden"},children:[e.jsx(o,{children:e.jsx("span",{style:{fontWeight:700,fontSize:"16px"},children:"🎨 Design System"})}),e.jsxs(t,{hasSider:!0,style:{flex:1,minHeight:0},children:[e.jsx(m,{width:180,children:e.jsx("ul",{style:b,children:g.map(s=>e.jsxs("li",{style:j(n===s),onClick:()=>r(s),children:[["📊","👥","📦","📈","⚙️"][g.indexOf(s)]," ",s]},s))})}),e.jsx(i,{style:{padding:"24px",background:"#f5f5f5",overflowY:"auto"},children:e.jsxs("div",{style:{background:"#fff",borderRadius:"8px",padding:"20px",fontFamily:"system-ui"},children:[e.jsx("h2",{style:{margin:"0 0 8px",fontSize:"18px"},children:n}),e.jsxs("p",{style:{color:"#9ca3af",fontSize:"14px"},children:[n," 페이지 콘텐츠입니다."]})]})})]}),e.jsx(h,{style:{justifyContent:"center",fontSize:"12px"},children:"푸터 영역"})]})}const l={name:"사이드바 레이아웃",parameters:{docs:{description:{story:"Header + Sider + Content 구조의 어드민 레이아웃입니다."}}},render:()=>e.jsx(Q,{})};function G(){const[n,r]=u.useState(!1),[s,M]=u.useState("대시보드"),V=["📊","👥","📦","📈","⚙️"];return e.jsxs(t,{style:{height:"400px",border:"1px solid #e5e7eb",borderRadius:"8px",overflow:"hidden"},children:[e.jsxs(o,{style:{justifyContent:"space-between"},children:[e.jsx("span",{style:{fontWeight:700},children:"Admin"}),e.jsx("span",{style:{fontSize:"12px",color:"rgba(255,255,255,0.6)"},children:"v1.0.0"})]}),e.jsxs(t,{hasSider:!0,style:{flex:1,minHeight:0},children:[e.jsx(m,{collapsed:n,collapsible:!0,onCollapse:r,children:e.jsx("ul",{style:b,children:g.map((d,Y)=>e.jsxs("li",{style:{...j(s===d),justifyContent:n?"center":"flex-start",padding:n?"10px":"10px 16px"},onClick:()=>M(d),title:n?d:void 0,children:[e.jsx("span",{style:{fontSize:"18px"},children:V[Y]}),!n&&e.jsx("span",{style:{fontSize:"14px"},children:d})]},d))})}),e.jsx(i,{style:{padding:"24px",background:"#f5f5f5"},children:e.jsxs("div",{style:{background:"#fff",borderRadius:"8px",padding:"20px",fontFamily:"system-ui"},children:[e.jsx("h2",{style:{margin:"0 0 8px",fontSize:"18px"},children:s}),e.jsx("p",{style:{color:"#9ca3af",fontSize:"14px"},children:"사이드바 ◀ 버튼으로 접을 수 있습니다."})]})})]})]})}const p={name:"접이식 사이드바",parameters:{docs:{description:{story:"사이드바를 접고 펼칠 수 있는 레이아웃입니다."}}},render:()=>e.jsx(G,{})},c={name:"상단 헤더만",render:()=>e.jsxs(t,{style:{height:"300px",border:"1px solid #e5e7eb",borderRadius:"8px",overflow:"hidden"},children:[e.jsxs(o,{style:{justifyContent:"space-between",background:"#fff",borderBottom:"1px solid #e5e7eb",color:"#111"},children:[e.jsx("span",{style:{fontWeight:700,fontSize:"16px"},children:"🔷 App"}),e.jsx("nav",{style:{display:"flex",gap:"24px",fontSize:"14px",color:"#6b7280"},children:["제품","가격","문서","로그인"].map(n=>e.jsx("span",{style:{cursor:"pointer"},children:n},n))})]}),e.jsx(i,{style:{display:"flex",alignItems:"center",justifyContent:"center",background:"#f9fafb"},children:e.jsxs("div",{style:{textAlign:"center",fontFamily:"system-ui"},children:[e.jsx("div",{style:{fontSize:"40px",marginBottom:"8px"},children:"🚀"}),e.jsx("div",{style:{fontSize:"20px",fontWeight:700,color:"#111"},children:"메인 페이지"})]})})]})},x={name:"다크 테마",render:()=>e.jsxs(t,{style:{height:"380px",border:"1px solid #333",borderRadius:"8px",overflow:"hidden",background:"#141414"},children:[e.jsxs(o,{style:{background:"#1f1f1f",borderBottom:"1px solid #333",justifyContent:"space-between"},children:[e.jsx("span",{style:{fontWeight:700},children:"⚡ Dark Admin"}),e.jsx("div",{style:{display:"flex",gap:"8px"},children:["🔔","🔍","👤"].map(n=>e.jsx("span",{style:{cursor:"pointer",fontSize:"18px"},children:n},n))})]}),e.jsxs(t,{hasSider:!0,style:{flex:1,minHeight:0},children:[e.jsx(m,{background:"#1f1f1f",style:{borderRight:"1px solid #333"},children:e.jsx("ul",{style:b,children:g.map((n,r)=>e.jsxs("li",{style:{...j(r===0),borderColor:r===0?"#1677ff":"transparent"},children:[["📊","👥","📦","📈","⚙️"][r]," ",n]},n))})}),e.jsx(i,{style:{padding:"20px",background:"#141414",overflowY:"auto"},children:e.jsxs("div",{style:{background:"#1f1f1f",borderRadius:"8px",padding:"16px",fontFamily:"system-ui",color:"#e5e7eb"},children:[e.jsx("h2",{style:{margin:"0 0 8px",fontSize:"16px",color:"#fff"},children:"대시보드"}),e.jsx("p",{style:{color:"#6b7280",fontSize:"14px"},children:"다크 테마 레이아웃 예시입니다."})]})})]}),e.jsx(h,{style:{background:"#1f1f1f",borderTop:"1px solid #333",color:"#6b7280",justifyContent:"center",fontSize:"12px"},children:"© 2024 Dark Admin"})]})},f={name:"스토어프론트 (전폭 섹션)",parameters:{docs:{description:{story:"StorefrontLandingPage의 헤더 → 히어로 → 컬렉션 → 푸터 리듬을 템플릿 조합으로 분리한 예시입니다."}}},render:()=>e.jsxs(t,{variant:"storefront",style:{height:"520px",border:"1px solid #e5e7eb",borderRadius:"8px",overflow:"auto"},children:[e.jsxs(o,{sticky:!0,background:"#fff",color:"#171717",style:{justifyContent:"space-between",borderBottom:"1px solid #e5e7eb"},children:[e.jsx("strong",{children:"nord."}),e.jsxs("nav",{style:{display:"flex",gap:"20px",fontSize:"13px"},children:[e.jsx("span",{children:"NEW"}),e.jsx("span",{children:"SHOES"}),e.jsx("span",{children:"APPAREL"})]})]}),e.jsxs(i,{children:[e.jsx("section",{style:{minHeight:"190px",padding:"32px",display:"flex",alignItems:"end",background:"linear-gradient(120deg, #dbeafe, #f5f3ff)"},children:e.jsxs("div",{children:[e.jsx("small",{style:{letterSpacing:"0.16em",fontWeight:700},children:"AUTUMN 2026"}),e.jsx("h2",{style:{margin:"8px 0",fontSize:"30px"},children:"Move with purpose."}),e.jsx("button",{style:{border:0,padding:"9px 14px",background:"#171717",color:"#fff"},children:"컬렉션 보기"})]})}),e.jsxs("section",{style:{padding:"24px 32px"},children:[e.jsx("small",{style:{color:"#64748b"},children:"NEW ARRIVALS"}),e.jsx("h3",{style:{margin:"6px 0 16px"},children:"새로 도착한 상품"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"12px"},children:["러너","재킷","티셔츠","캡"].map((n,r)=>e.jsxs("article",{style:{minWidth:0},children:[e.jsx("div",{style:{aspectRatio:"1",background:["#dbeafe","#fde68a","#e5e7eb","#ddd6fe"][r]}}),e.jsx("strong",{style:{display:"block",marginTop:"8px",fontSize:"13px"},children:n})]},n))})]})]}),e.jsxs(h,{background:"#171717",color:"#fff",style:{justifyContent:"space-between"},children:[e.jsx("strong",{children:"nord."}),e.jsx("span",{children:"뉴스레터 · 고객센터 · Instagram"})]})]})},y={name:"상품 상세 (미디어 + 구매 패널)",parameters:{docs:{description:{story:"ProductDetailPage의 갤러리와 구매 결정을 분리한 2열 콘텐츠 레이아웃입니다. 작은 화면에서는 콘텐츠 영역에 맞춰 세로로 쌓아 사용할 수 있습니다."}}},render:()=>e.jsxs(t,{variant:"detail",style:{height:"440px",border:"1px solid #e5e7eb",borderRadius:"8px",overflow:"hidden"},children:[e.jsxs(o,{background:"#fff",color:"#171717",style:{borderBottom:"1px solid #e5e7eb",justifyContent:"space-between"},children:[e.jsx("strong",{children:"nord."}),e.jsx("span",{style:{fontSize:"13px",color:"#64748b"},children:"Shoes / Daily Runner"})]}),e.jsx(i,{padded:!0,children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1.4fr) minmax(210px, .8fr)",gap:"24px",height:"100%"},children:[e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"},children:["#dbeafe","#e0f2fe","#ede9fe","#f1f5f9"].map((n,r)=>e.jsxs("div",{style:{background:n,minHeight:"130px",display:"grid",placeItems:"center",color:"#64748b"},children:["VIEW ",r+1]},n))}),e.jsxs("aside",{style:{background:"#fff",border:"1px solid #e5e7eb",padding:"20px"},children:[e.jsx("small",{style:{color:"#2563eb",fontWeight:700},children:"BEST"}),e.jsx("h2",{style:{margin:"8px 0"},children:"데일리 러너"}),e.jsx("strong",{style:{fontSize:"18px"},children:"139,000원"}),e.jsx("p",{style:{color:"#64748b",fontSize:"13px",lineHeight:1.5},children:"가벼운 착화감의 데일리 스니커즈"}),e.jsx("button",{style:{width:"100%",padding:"11px",border:0,background:"#171717",color:"#fff"},children:"장바구니 담기"})]})]})})]})};var S,v,k;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '기본 (상하 레이아웃)',
  render: () => <Layout style={{
    height: '360px',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    overflow: 'hidden'
  }}>
      <Header>
        <span style={{
        fontWeight: 700,
        fontSize: '18px',
        letterSpacing: '0.5px'
      }}>Lucid UI</span>
      </Header>
      <Content style={{
      padding: '24px',
      background: '#f5f5f5'
    }}>
        <div style={{
        background: '#fff',
        borderRadius: '8px',
        padding: '24px',
        fontFamily: 'system-ui'
      }}>
          <h2 style={{
          margin: '0 0 12px',
          fontSize: '20px',
          fontWeight: 700
        }}>메인 콘텐츠</h2>
          <p style={{
          color: '#6b7280',
          lineHeight: 1.6
        }}>Header → Content → Footer 구조의 기본 레이아웃입니다.</p>
        </div>
      </Content>
      <Footer style={{
      justifyContent: 'center',
      fontSize: '13px'
    }}>
        © 2024 Lucid UI — All rights reserved
      </Footer>
    </Layout>
}`,...(k=(v=a.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var C,z,H;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '사이드바 레이아웃',
  parameters: {
    docs: {
      description: {
        story: 'Header + Sider + Content 구조의 어드민 레이아웃입니다.'
      }
    }
  },
  render: () => <SiderLayoutDemo />
}`,...(H=(z=l.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var R,w,L;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '접이식 사이드바',
  parameters: {
    docs: {
      description: {
        story: '사이드바를 접고 펼칠 수 있는 레이아웃입니다.'
      }
    }
  },
  render: () => <CollapsibleSiderDemo />
}`,...(L=(w=p.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var A,W,F;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '상단 헤더만',
  render: () => <Layout style={{
    height: '300px',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    overflow: 'hidden'
  }}>
      <Header style={{
      justifyContent: 'space-between',
      background: '#fff',
      borderBottom: '1px solid #e5e7eb',
      color: '#111'
    }}>
        <span style={{
        fontWeight: 700,
        fontSize: '16px'
      }}>🔷 App</span>
        <nav style={{
        display: 'flex',
        gap: '24px',
        fontSize: '14px',
        color: '#6b7280'
      }}>
          {['제품', '가격', '문서', '로그인'].map(n => <span key={n} style={{
          cursor: 'pointer'
        }}>{n}</span>)}
        </nav>
      </Header>
      <Content style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f9fafb'
    }}>
        <div style={{
        textAlign: 'center',
        fontFamily: 'system-ui'
      }}>
          <div style={{
          fontSize: '40px',
          marginBottom: '8px'
        }}>🚀</div>
          <div style={{
          fontSize: '20px',
          fontWeight: 700,
          color: '#111'
        }}>메인 페이지</div>
        </div>
      </Content>
    </Layout>
}`,...(F=(W=c.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var I,D,T;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '다크 테마',
  render: () => <Layout style={{
    height: '380px',
    border: '1px solid #333',
    borderRadius: '8px',
    overflow: 'hidden',
    background: '#141414'
  }}>
      <Header style={{
      background: '#1f1f1f',
      borderBottom: '1px solid #333',
      justifyContent: 'space-between'
    }}>
        <span style={{
        fontWeight: 700
      }}>⚡ Dark Admin</span>
        <div style={{
        display: 'flex',
        gap: '8px'
      }}>
          {['🔔', '🔍', '👤'].map(icon => <span key={icon} style={{
          cursor: 'pointer',
          fontSize: '18px'
        }}>{icon}</span>)}
        </div>
      </Header>
      <Layout hasSider style={{
      flex: 1,
      minHeight: 0
    }}>
        <Sider background="#1f1f1f" style={{
        borderRight: '1px solid #333'
      }}>
          <ul style={menuStyle}>
            {navItems.map((item, i) => <li key={item} style={{
            ...menuItemStyle(i === 0),
            borderColor: i === 0 ? '#1677ff' : 'transparent'
          }}>
                {['📊', '👥', '📦', '📈', '⚙️'][i]} {item}
              </li>)}
          </ul>
        </Sider>
        <Content style={{
        padding: '20px',
        background: '#141414',
        overflowY: 'auto'
      }}>
          <div style={{
          background: '#1f1f1f',
          borderRadius: '8px',
          padding: '16px',
          fontFamily: 'system-ui',
          color: '#e5e7eb'
        }}>
            <h2 style={{
            margin: '0 0 8px',
            fontSize: '16px',
            color: '#fff'
          }}>대시보드</h2>
            <p style={{
            color: '#6b7280',
            fontSize: '14px'
          }}>다크 테마 레이아웃 예시입니다.</p>
          </div>
        </Content>
      </Layout>
      <Footer style={{
      background: '#1f1f1f',
      borderTop: '1px solid #333',
      color: '#6b7280',
      justifyContent: 'center',
      fontSize: '12px'
    }}>
        © 2024 Dark Admin
      </Footer>
    </Layout>
}`,...(T=(D=x.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var E,P,B;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '스토어프론트 (전폭 섹션)',
  parameters: {
    docs: {
      description: {
        story: 'StorefrontLandingPage의 헤더 → 히어로 → 컬렉션 → 푸터 리듬을 템플릿 조합으로 분리한 예시입니다.'
      }
    }
  },
  render: () => <Layout variant="storefront" style={{
    height: '520px',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    overflow: 'auto'
  }}>
      <Header sticky background="#fff" color="#171717" style={{
      justifyContent: 'space-between',
      borderBottom: '1px solid #e5e7eb'
    }}>
        <strong>nord.</strong><nav style={{
        display: 'flex',
        gap: '20px',
        fontSize: '13px'
      }}><span>NEW</span><span>SHOES</span><span>APPAREL</span></nav>
      </Header>
      <Content>
        <section style={{
        minHeight: '190px',
        padding: '32px',
        display: 'flex',
        alignItems: 'end',
        background: 'linear-gradient(120deg, #dbeafe, #f5f3ff)'
      }}>
          <div><small style={{
            letterSpacing: '0.16em',
            fontWeight: 700
          }}>AUTUMN 2026</small><h2 style={{
            margin: '8px 0',
            fontSize: '30px'
          }}>Move with purpose.</h2><button style={{
            border: 0,
            padding: '9px 14px',
            background: '#171717',
            color: '#fff'
          }}>컬렉션 보기</button></div>
        </section>
        <section style={{
        padding: '24px 32px'
      }}><small style={{
          color: '#64748b'
        }}>NEW ARRIVALS</small><h3 style={{
          margin: '6px 0 16px'
        }}>새로 도착한 상품</h3><div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '12px'
        }}>{['러너', '재킷', '티셔츠', '캡'].map((name, index) => <article key={name} style={{
            minWidth: 0
          }}><div style={{
              aspectRatio: '1',
              background: ['#dbeafe', '#fde68a', '#e5e7eb', '#ddd6fe'][index]
            }} /><strong style={{
              display: 'block',
              marginTop: '8px',
              fontSize: '13px'
            }}>{name}</strong></article>)}</div></section>
      </Content>
      <Footer background="#171717" color="#fff" style={{
      justifyContent: 'space-between'
    }}><strong>nord.</strong><span>뉴스레터 · 고객센터 · Instagram</span></Footer>
    </Layout>
}`,...(B=(P=f.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var U,N,O;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: '상품 상세 (미디어 + 구매 패널)',
  parameters: {
    docs: {
      description: {
        story: 'ProductDetailPage의 갤러리와 구매 결정을 분리한 2열 콘텐츠 레이아웃입니다. 작은 화면에서는 콘텐츠 영역에 맞춰 세로로 쌓아 사용할 수 있습니다.'
      }
    }
  },
  render: () => <Layout variant="detail" style={{
    height: '440px',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    overflow: 'hidden'
  }}>
      <Header background="#fff" color="#171717" style={{
      borderBottom: '1px solid #e5e7eb',
      justifyContent: 'space-between'
    }}><strong>nord.</strong><span style={{
        fontSize: '13px',
        color: '#64748b'
      }}>Shoes / Daily Runner</span></Header>
      <Content padded>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.4fr) minmax(210px, .8fr)',
        gap: '24px',
        height: '100%'
      }}>
          <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '8px'
        }}>{['#dbeafe', '#e0f2fe', '#ede9fe', '#f1f5f9'].map((background, index) => <div key={background} style={{
            background,
            minHeight: '130px',
            display: 'grid',
            placeItems: 'center',
            color: '#64748b'
          }}>VIEW {index + 1}</div>)}</div>
          <aside style={{
          background: '#fff',
          border: '1px solid #e5e7eb',
          padding: '20px'
        }}><small style={{
            color: '#2563eb',
            fontWeight: 700
          }}>BEST</small><h2 style={{
            margin: '8px 0'
          }}>데일리 러너</h2><strong style={{
            fontSize: '18px'
          }}>139,000원</strong><p style={{
            color: '#64748b',
            fontSize: '13px',
            lineHeight: 1.5
          }}>가벼운 착화감의 데일리 스니커즈</p><button style={{
            width: '100%',
            padding: '11px',
            border: 0,
            background: '#171717',
            color: '#fff'
          }}>장바구니 담기</button></aside>
        </div>
      </Content>
    </Layout>
}`,...(O=(N=y.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const ne=["Default","WithSider","CollapsibleSider","HeaderOnly","DarkTheme","Storefront","ProductDetail"];export{p as CollapsibleSider,x as DarkTheme,a as Default,c as HeaderOnly,y as ProductDetail,f as Storefront,l as WithSider,ne as __namedExportsOrder,ee as default};
