import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as j}from"./index-BxXVWNx3.js";import{d as X}from"./reference-types-4ftiVeOu.js";import"./_commonjsHelpers-CqkleIqs.js";function M({children:n,height:t=64,background:r="#001529",color:o="#fff",sticky:i=!1,style:a}){return e.jsx("header",{style:{height:t,background:r,color:o,display:"flex",alignItems:"center",padding:"0 24px",flexShrink:0,...i?{position:"sticky",top:0,zIndex:10}:{},...a},children:n})}function $({children:n,width:t=200,collapsedWidth:r=80,collapsed:o=!1,collapsible:i=!1,onCollapse:a,background:b="#001529",color:J="#fff",style:K}){const S=o?r:t;return e.jsxs("aside",{style:{width:S,minWidth:S,maxWidth:S,background:b,color:J,overflow:"hidden",transition:"all 0.2s",display:"flex",flexDirection:"column",position:"relative",...K},children:[e.jsx("div",{style:{flex:1,overflowY:"auto"},children:n}),i?e.jsx("button",{type:"button",onClick:()=>a==null?void 0:a(!o),style:{width:"100%",border:"none",background:"rgba(255,255,255,0.05)",color:"#fff",cursor:"pointer",padding:"10px",fontSize:"14px"},children:o?"▶":"◀"}):null]})}function Q({children:n,padded:t=!1,style:r}){return e.jsx("main",{style:{flex:1,minWidth:0,overflowY:"auto",...t?{padding:"24px"}:{},...r},children:n})}function G({children:n,height:t,background:r="#f0f2f5",color:o="#666",style:i}){return e.jsx("footer",{style:{height:t,background:r,color:o,display:"flex",alignItems:"center",padding:"16px 24px",flexShrink:0,...i},children:n})}const Z={app:{},storefront:{background:"#fff",color:"#171717"},detail:{background:"#f8fafc",color:"#171717"}};function s({children:n,hasSidebar:t=!1,variant:r="app",style:o,className:i}){return e.jsx("div",{className:i,"data-layout-variant":r,style:{display:"flex",flexDirection:t?"row":"column",minHeight:0,flex:1,...Z[r],...o},children:n})}s.Header=M;s.Sidebar=$;s.Content=Q;s.Footer=G;s.__docgenInfo={description:"",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:"{ children, height = 64, background = '#001529', color = '#fff', sticky = false, style }: AppShellHeaderProps",optional:!1,type:{name:"AppShellHeaderProps",alias:"AppShellHeaderProps"}}],returns:null},{name:"Sidebar",docblock:null,modifiers:["static"],params:[{name:"{ children, width = 200, collapsedWidth = 80, collapsed = false, collapsible = false, onCollapse, background = '#001529', color = '#fff', style }: AppShellSidebarProps",optional:!1,type:{name:"AppShellSidebarProps",alias:"AppShellSidebarProps"}}],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[{name:"{ children, padded = false, style }: AppShellContentProps",optional:!1,type:{name:"AppShellContentProps",alias:"AppShellContentProps"}}],returns:null},{name:"Footer",docblock:null,modifiers:["static"],params:[{name:"{ children, height, background = '#f0f2f5', color = '#666', style }: AppShellFooterProps",optional:!1,type:{name:"AppShellFooterProps",alias:"AppShellFooterProps"}}],returns:null}],displayName:"AppShell",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},hasSidebar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'app' | 'storefront' | 'detail'",elements:[{name:"literal",value:"'app'"},{name:"literal",value:"'storefront'"},{name:"literal",value:"'detail'"}]},description:"Establishes the application canvas only; content styling belongs to callers.",defaultValue:{value:"'app'",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};M.__docgenInfo={description:"",methods:[],displayName:"Header",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"64",computed:!1}},background:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#001529'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#fff'",computed:!1}},sticky:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};$.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"200",computed:!1}},collapsedWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"80",computed:!1}},collapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},collapsible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapse:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},background:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#001529'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#fff'",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};Q.__docgenInfo={description:"",methods:[],displayName:"Content",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},padded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};G.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},background:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#f0f2f5'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#666'",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const{Header:l,Sider:v,Content:d,Footer:h}=s,ee=X([{library:"Ant Design",component:"Layout",url:"https://ant.design/components/layout/",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Layout",url:"https://quasar.dev/layout/layout",usedFor:["comparison"],relation:"compared"}]),ie={title:"Layout/Patterns/AppShell",component:s,tags:["autodocs","ref:ant-design","ref:quasar"],parameters:{references:ee,docs:{description:{component:"\n## Layout\n\n페이지 전체 레이아웃을 구성하는 컴포넌트 모음입니다.\n`Layout`, `Header`, `Sider`, `Content`, `Footer` 서브 컴포넌트를 조합하여\n상단 헤더 + 좌측 사이드바 + 메인 콘텐츠 + 하단 푸터 구조를 선언적으로 정의합니다.\n\n---\n\n### Sub-components\n\n| Component | 설명 |\n|---|---|\n| `Layout` | 루트 레이아웃 컨테이너. `hasSider` 로 수평 방향 전환, `variant` 로 캔버스 톤 선택 |\n| `Header` | 상단 헤더 영역. `sticky` 로 스크롤 고정 가능 |\n| `Sider` | 측면 사이드바 (접기/펼치기 지원) |\n| `Content` | 메인 콘텐츠 영역. `padded` 로 표준 여백 적용 |\n| `Footer` | 하단 푸터 영역 |\n        "}}},argTypes:{hasSider:{control:"boolean",table:{category:"Layout"}}}},g=["대시보드","사용자","상품","분석","설정"],k={listStyle:"none",margin:0,padding:"8px 0"},C=n=>({padding:"10px 16px",cursor:"pointer",color:n?"#1677ff":"rgba(255,255,255,0.65)",background:n?"#1677ff22":"transparent",borderRight:n?"3px solid #1677ff":"3px solid transparent",fontSize:"14px",display:"flex",alignItems:"center",gap:"8px"}),p={name:"기본 (상하 레이아웃)",render:()=>e.jsxs(s,{style:{height:"360px",border:"1px solid #e5e7eb",borderRadius:"8px",overflow:"hidden"},children:[e.jsx(l,{children:e.jsx("span",{style:{fontWeight:700,fontSize:"18px",letterSpacing:"0.5px"},children:"Lucid UI"})}),e.jsx(d,{style:{padding:"24px",background:"#f5f5f5"},children:e.jsxs("div",{style:{background:"#fff",borderRadius:"8px",padding:"24px",fontFamily:"system-ui"},children:[e.jsx("h2",{style:{margin:"0 0 12px",fontSize:"20px",fontWeight:700},children:"메인 콘텐츠"}),e.jsx("p",{style:{color:"#6b7280",lineHeight:1.6},children:"Header → Content → Footer 구조의 기본 레이아웃입니다."})]})}),e.jsx(h,{style:{justifyContent:"center",fontSize:"13px"},children:"© 2024 Lucid UI — All rights reserved"})]})};function ne(){const[n,t]=j.useState("대시보드");return e.jsxs(s,{style:{height:"400px",border:"1px solid #e5e7eb",borderRadius:"8px",overflow:"hidden"},children:[e.jsx(l,{children:e.jsx("span",{style:{fontWeight:700,fontSize:"16px"},children:"🎨 Design System"})}),e.jsxs(s,{hasSider:!0,style:{flex:1,minHeight:0},children:[e.jsx(v,{width:180,children:e.jsx("ul",{style:k,children:g.map(r=>e.jsxs("li",{style:C(n===r),onClick:()=>t(r),children:[["📊","👥","📦","📈","⚙️"][g.indexOf(r)]," ",r]},r))})}),e.jsx(d,{style:{padding:"24px",background:"#f5f5f5",overflowY:"auto"},children:e.jsxs("div",{style:{background:"#fff",borderRadius:"8px",padding:"20px",fontFamily:"system-ui"},children:[e.jsx("h2",{style:{margin:"0 0 8px",fontSize:"18px"},children:n}),e.jsxs("p",{style:{color:"#9ca3af",fontSize:"14px"},children:[n," 페이지 콘텐츠입니다."]})]})})]}),e.jsx(h,{style:{justifyContent:"center",fontSize:"12px"},children:"푸터 영역"})]})}const c={name:"사이드바 레이아웃",parameters:{docs:{description:{story:"Header + Sider + Content 구조의 어드민 레이아웃입니다."}}},render:()=>e.jsx(ne,{})};function te(){const[n,t]=j.useState(!1),[r,o]=j.useState("대시보드"),i=["📊","👥","📦","📈","⚙️"];return e.jsxs(s,{style:{height:"400px",border:"1px solid #e5e7eb",borderRadius:"8px",overflow:"hidden"},children:[e.jsxs(l,{style:{justifyContent:"space-between"},children:[e.jsx("span",{style:{fontWeight:700},children:"Admin"}),e.jsx("span",{style:{fontSize:"12px",color:"rgba(255,255,255,0.6)"},children:"v1.0.0"})]}),e.jsxs(s,{hasSider:!0,style:{flex:1,minHeight:0},children:[e.jsx(v,{collapsed:n,collapsible:!0,onCollapse:t,children:e.jsx("ul",{style:k,children:g.map((a,b)=>e.jsxs("li",{style:{...C(r===a),justifyContent:n?"center":"flex-start",padding:n?"10px":"10px 16px"},onClick:()=>o(a),title:n?a:void 0,children:[e.jsx("span",{style:{fontSize:"18px"},children:i[b]}),!n&&e.jsx("span",{style:{fontSize:"14px"},children:a})]},a))})}),e.jsx(d,{style:{padding:"24px",background:"#f5f5f5"},children:e.jsxs("div",{style:{background:"#fff",borderRadius:"8px",padding:"20px",fontFamily:"system-ui"},children:[e.jsx("h2",{style:{margin:"0 0 8px",fontSize:"18px"},children:r}),e.jsx("p",{style:{color:"#9ca3af",fontSize:"14px"},children:"사이드바 ◀ 버튼으로 접을 수 있습니다."})]})})]})]})}const f={name:"접이식 사이드바",parameters:{docs:{description:{story:"사이드바를 접고 펼칠 수 있는 레이아웃입니다."}}},render:()=>e.jsx(te,{})},u={name:"상단 헤더만",render:()=>e.jsxs(s,{style:{height:"300px",border:"1px solid #e5e7eb",borderRadius:"8px",overflow:"hidden"},children:[e.jsxs(l,{style:{justifyContent:"space-between",background:"#fff",borderBottom:"1px solid #e5e7eb",color:"#111"},children:[e.jsx("span",{style:{fontWeight:700,fontSize:"16px"},children:"🔷 App"}),e.jsx("nav",{style:{display:"flex",gap:"24px",fontSize:"14px",color:"#6b7280"},children:["제품","가격","문서","로그인"].map(n=>e.jsx("span",{style:{cursor:"pointer"},children:n},n))})]}),e.jsx(d,{style:{display:"flex",alignItems:"center",justifyContent:"center",background:"#f9fafb"},children:e.jsxs("div",{style:{textAlign:"center",fontFamily:"system-ui"},children:[e.jsx("div",{style:{fontSize:"40px",marginBottom:"8px"},children:"🚀"}),e.jsx("div",{style:{fontSize:"20px",fontWeight:700,color:"#111"},children:"메인 페이지"})]})})]})},x={name:"다크 테마",render:()=>e.jsxs(s,{style:{height:"380px",border:"1px solid #333",borderRadius:"8px",overflow:"hidden",background:"#141414"},children:[e.jsxs(l,{style:{background:"#1f1f1f",borderBottom:"1px solid #333",justifyContent:"space-between"},children:[e.jsx("span",{style:{fontWeight:700},children:"⚡ Dark Admin"}),e.jsx("div",{style:{display:"flex",gap:"8px"},children:["🔔","🔍","👤"].map(n=>e.jsx("span",{style:{cursor:"pointer",fontSize:"18px"},children:n},n))})]}),e.jsxs(s,{hasSider:!0,style:{flex:1,minHeight:0},children:[e.jsx(v,{background:"#1f1f1f",style:{borderRight:"1px solid #333"},children:e.jsx("ul",{style:k,children:g.map((n,t)=>e.jsxs("li",{style:{...C(t===0),borderColor:t===0?"#1677ff":"transparent"},children:[["📊","👥","📦","📈","⚙️"][t]," ",n]},n))})}),e.jsx(d,{style:{padding:"20px",background:"#141414",overflowY:"auto"},children:e.jsxs("div",{style:{background:"#1f1f1f",borderRadius:"8px",padding:"16px",fontFamily:"system-ui",color:"#e5e7eb"},children:[e.jsx("h2",{style:{margin:"0 0 8px",fontSize:"16px",color:"#fff"},children:"대시보드"}),e.jsx("p",{style:{color:"#6b7280",fontSize:"14px"},children:"다크 테마 레이아웃 예시입니다."})]})})]}),e.jsx(h,{style:{background:"#1f1f1f",borderTop:"1px solid #333",color:"#6b7280",justifyContent:"center",fontSize:"12px"},children:"© 2024 Dark Admin"})]})},y={name:"스토어프론트 (전폭 섹션)",parameters:{docs:{description:{story:"StorefrontLandingPage의 헤더 → 히어로 → 컬렉션 → 푸터 리듬을 템플릿 조합으로 분리한 예시입니다."}}},render:()=>e.jsxs(s,{variant:"storefront",style:{height:"520px",border:"1px solid #e5e7eb",borderRadius:"8px",overflow:"auto"},children:[e.jsxs(l,{sticky:!0,background:"#fff",color:"#171717",style:{justifyContent:"space-between",borderBottom:"1px solid #e5e7eb"},children:[e.jsx("strong",{children:"nord."}),e.jsxs("nav",{style:{display:"flex",gap:"20px",fontSize:"13px"},children:[e.jsx("span",{children:"NEW"}),e.jsx("span",{children:"SHOES"}),e.jsx("span",{children:"APPAREL"})]})]}),e.jsxs(d,{children:[e.jsx("section",{style:{minHeight:"190px",padding:"32px",display:"flex",alignItems:"end",background:"linear-gradient(120deg, #dbeafe, #f5f3ff)"},children:e.jsxs("div",{children:[e.jsx("small",{style:{letterSpacing:"0.16em",fontWeight:700},children:"AUTUMN 2026"}),e.jsx("h2",{style:{margin:"8px 0",fontSize:"30px"},children:"Move with purpose."}),e.jsx("button",{style:{border:0,padding:"9px 14px",background:"#171717",color:"#fff"},children:"컬렉션 보기"})]})}),e.jsxs("section",{style:{padding:"24px 32px"},children:[e.jsx("small",{style:{color:"#64748b"},children:"NEW ARRIVALS"}),e.jsx("h3",{style:{margin:"6px 0 16px"},children:"새로 도착한 상품"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"12px"},children:["러너","재킷","티셔츠","캡"].map((n,t)=>e.jsxs("article",{style:{minWidth:0},children:[e.jsx("div",{style:{aspectRatio:"1",background:["#dbeafe","#fde68a","#e5e7eb","#ddd6fe"][t]}}),e.jsx("strong",{style:{display:"block",marginTop:"8px",fontSize:"13px"},children:n})]},n))})]})]}),e.jsxs(h,{background:"#171717",color:"#fff",style:{justifyContent:"space-between"},children:[e.jsx("strong",{children:"nord."}),e.jsx("span",{children:"뉴스레터 · 고객센터 · Instagram"})]})]})},m={name:"상품 상세 (미디어 + 구매 패널)",parameters:{docs:{description:{story:"ProductDetailPage의 갤러리와 구매 결정을 분리한 2열 콘텐츠 레이아웃입니다. 작은 화면에서는 콘텐츠 영역에 맞춰 세로로 쌓아 사용할 수 있습니다."}}},render:()=>e.jsxs(s,{variant:"detail",style:{height:"440px",border:"1px solid #e5e7eb",borderRadius:"8px",overflow:"hidden"},children:[e.jsxs(l,{background:"#fff",color:"#171717",style:{borderBottom:"1px solid #e5e7eb",justifyContent:"space-between"},children:[e.jsx("strong",{children:"nord."}),e.jsx("span",{style:{fontSize:"13px",color:"#64748b"},children:"Shoes / Daily Runner"})]}),e.jsx(d,{padded:!0,children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1.4fr) minmax(210px, .8fr)",gap:"24px",height:"100%"},children:[e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"},children:["#dbeafe","#e0f2fe","#ede9fe","#f1f5f9"].map((n,t)=>e.jsxs("div",{style:{background:n,minHeight:"130px",display:"grid",placeItems:"center",color:"#64748b"},children:["VIEW ",t+1]},n))}),e.jsxs("aside",{style:{background:"#fff",border:"1px solid #e5e7eb",padding:"20px"},children:[e.jsx("small",{style:{color:"#2563eb",fontWeight:700},children:"BEST"}),e.jsx("h2",{style:{margin:"8px 0"},children:"데일리 러너"}),e.jsx("strong",{style:{fontSize:"18px"},children:"139,000원"}),e.jsx("p",{style:{color:"#64748b",fontSize:"13px",lineHeight:1.5},children:"가벼운 착화감의 데일리 스니커즈"}),e.jsx("button",{style:{width:"100%",padding:"11px",border:0,background:"#171717",color:"#fff"},children:"장바구니 담기"})]})]})})]})};var z,w,T;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(T=(w=p.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var H,A,R;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '사이드바 레이아웃',
  parameters: {
    docs: {
      description: {
        story: 'Header + Sider + Content 구조의 어드민 레이아웃입니다.'
      }
    }
  },
  render: () => <SiderLayoutDemo />
}`,...(R=(A=c.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var W,L,q;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '접이식 사이드바',
  parameters: {
    docs: {
      description: {
        story: '사이드바를 접고 펼칠 수 있는 레이아웃입니다.'
      }
    }
  },
  render: () => <CollapsibleSiderDemo />
}`,...(q=(L=f.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var P,I,F;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(F=(I=u.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var D,V,N;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(N=(V=x.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var E,B,_;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(_=(B=y.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var U,O,Y;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(O=m.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};const le=["Default","WithSider","CollapsibleSider","HeaderOnly","DarkTheme","Storefront","ProductDetail"];export{f as CollapsibleSider,x as DarkTheme,p as Default,u as HeaderOnly,m as ProductDetail,y as Storefront,c as WithSider,le as __namedExportsOrder,ie as default};
