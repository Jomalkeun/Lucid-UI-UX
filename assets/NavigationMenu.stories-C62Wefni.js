import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-BxXVWNx3.js";import{d as W}from"./reference-types-4ftiVeOu.js";import"./_commonjsHelpers-CqkleIqs.js";function l({items:s,onLinkClick:t,style:u}){const[x,a]=i.useState(null),p=i.useRef(null),[M,R]=i.useState(0);return i.useEffect(()=>{const n=r=>{p.current&&!p.current.contains(r.target)&&a(null)};return document.addEventListener("mousedown",n),()=>document.removeEventListener("mousedown",n)},[]),e.jsxs("nav",{ref:p,style:{position:"relative",display:"inline-flex",fontFamily:"system-ui",...u},children:[e.jsx("ul",{style:{display:"flex",listStyle:"none",margin:0,padding:"0 4px",gap:"2px",alignItems:"center"},children:s.map(n=>{const r=x===n.key,o=!!n.children||!!n.content;return e.jsx("li",{style:{position:"relative"},children:e.jsxs("button",{onMouseEnter:I=>{if(o){a(n.key);const N=I.currentTarget.getBoundingClientRect(),z=p.current.getBoundingClientRect();R(N.left-z.left)}},onClick:()=>{n.href&&!o?(t==null||t(n.href),a(null)):o&&a(r?null:n.key)},style:{display:"flex",alignItems:"center",gap:"4px",padding:"8px 12px",background:r?"#f3f4f6":"transparent",border:"none",cursor:"pointer",fontSize:"14px",color:"#374151",borderRadius:"6px",outline:"none",fontWeight:500},children:[n.label,o&&e.jsx("span",{style:{fontSize:"10px",color:"#9ca3af",transition:"transform 0.15s",transform:r?"rotate(180deg)":"none"},children:"▼"})]})},n.key)})}),s.map(n=>x!==n.key||!n.children&&!n.content?null:e.jsxs("div",{onMouseLeave:()=>a(null),style:{position:"absolute",top:"100%",left:M,marginTop:"8px",zIndex:1e3,background:"#fff",border:"1px solid #e5e7eb",borderRadius:"12px",boxShadow:"0 12px 40px rgba(0,0,0,0.12)",padding:"12px",minWidth:n.children?"480px":"240px",animation:"navMenuIn 0.15s ease"},children:[e.jsx("style",{children:"@keyframes navMenuIn { from { opacity: 0; transform: translateY(-6px) } to { opacity: 1; transform: translateY(0) } }"}),n.content??e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"4px"},children:n.children.map(r=>e.jsxs("a",{href:r.href,onClick:o=>{o.preventDefault(),t==null||t(r.href),a(null)},style:{display:"flex",alignItems:"flex-start",gap:"10px",padding:"10px 12px",borderRadius:"8px",textDecoration:"none",color:"#374151",transition:"background 0.15s"},onMouseEnter:o=>o.currentTarget.style.background="#f9fafb",onMouseLeave:o=>o.currentTarget.style.background="transparent",children:[r.icon&&e.jsx("span",{style:{fontSize:"20px",flexShrink:0,marginTop:"2px"},children:r.icon}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"14px",fontWeight:600,color:"#111",marginBottom:"2px"},children:r.label}),r.description&&e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",lineHeight:1.4},children:r.description})]})]},r.href))})]},n.key))]})}l.__docgenInfo={description:"",methods:[],displayName:"NavigationMenu",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"NavigationMenuItem"}],raw:"NavigationMenuItem[]"},description:""},onLinkClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(href: string) => void",signature:{arguments:[{type:{name:"string"},name:"href"}],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const T=W([{library:"Ant Design",component:"Menu",url:"https://ant.design/components/menu/",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Navigation Menu",url:"https://base-ui.com/react/components/navigation-menu",usedFor:["comparison"],relation:"compared"}]),O={title:"Molecules/Navigation/NavigationMenu",component:l,tags:["autodocs","ref:shadcn-ui","ref:mui","ref:ant-design","ref:base-ui"],parameters:{references:T,docs:{description:{component:`
## NavigationMenu

접근성을 완전히 지원하는 수평형 사이트 네비게이션 메뉴 컴포넌트입니다.
상단 GNB의 링크, 드롭다운, 메가 메뉴를 구성하는 프리미티브입니다.

---

### Props

| Prop | Type | 설명 |
|---|---|---|
| \`items\` | \`NavigationMenuItem[]\` | 메뉴 항목 목록 |
| \`onLinkClick\` | \`(href: string) => void\` | 링크 클릭 콜백 |
        `}}}},D=[{key:"products",label:"제품",children:[{href:"/analytics",label:"분석",description:"데이터 기반 인사이트",icon:"📊"},{href:"/automation",label:"자동화",description:"워크플로우 자동화",icon:"⚡"},{href:"/security",label:"보안",description:"엔터프라이즈급 보안",icon:"🔒"},{href:"/integrations",label:"통합",description:"200+ 앱과 연동",icon:"🔌"}]},{key:"solutions",label:"솔루션",children:[{href:"/startup",label:"스타트업",description:"빠른 성장을 위한 솔루션",icon:"🚀"},{href:"/enterprise",label:"엔터프라이즈",description:"대규모 팀을 위한 도구",icon:"🏢"},{href:"/freelancer",label:"프리랜서",description:"개인 생산성 극대화",icon:"💼"}]},{key:"docs",label:"문서",href:"/docs"},{key:"pricing",label:"가격",href:"/pricing"}];function w(){const[s,t]=i.useState(null);return e.jsxs("div",{style:{fontFamily:"system-ui"},children:[e.jsxs("div",{style:{padding:"12px 20px",background:"#fff",border:"1px solid #e5e7eb",borderRadius:"10px",display:"inline-flex",alignItems:"center",gap:"24px"},children:[e.jsx("span",{style:{fontWeight:800,fontSize:"16px",color:"#111"},children:"🎨 Lucid"}),e.jsx(l,{items:D,onLinkClick:u=>t(u)}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("button",{style:{padding:"7px 14px",background:"none",border:"1px solid #e5e7eb",borderRadius:"6px",cursor:"pointer",fontSize:"13px",color:"#374151"},children:"로그인"}),e.jsx("button",{style:{padding:"7px 14px",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"13px"},children:"시작하기"})]})]}),s&&e.jsxs("div",{style:{marginTop:"10px",fontSize:"13px",color:"#6b7280"},children:["클릭: ",s]})]})}const d={name:"기본 GNB",render:()=>e.jsx(w,{})},c={name:"메가 메뉴",parameters:{docs:{description:{story:"content prop으로 완전히 커스텀한 드롭다운을 구성합니다."}}},render:()=>e.jsx("div",{style:{fontFamily:"system-ui"},children:e.jsxs("div",{style:{padding:"10px 20px",background:"#fff",border:"1px solid #e5e7eb",borderRadius:"10px",display:"inline-flex",alignItems:"center",gap:"20px"},children:[e.jsx("span",{style:{fontWeight:800,fontSize:"16px"},children:"⚡ App"}),e.jsx(l,{items:[{key:"components",label:"컴포넌트",content:e.jsxs("div",{style:{minWidth:"560px"},children:[e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",fontWeight:600,marginBottom:"8px",textTransform:"uppercase",letterSpacing:"0.05em"},children:"카테고리"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"6px"},children:["Atoms","Molecules","Organisms","입력","표시","내비게이션","피드백","레이아웃","오버레이"].map((s,t)=>e.jsxs("div",{style:{padding:"8px 10px",background:"#f9fafb",borderRadius:"6px",fontSize:"13px",fontWeight:500,color:"#374151",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{children:"🧱📦🏗️🎛️🖼️🧭💬📐🪟".slice(t*2,t*2+2)}),s]},s))})]})},{key:"docs",label:"문서",href:"/docs"},{key:"blog",label:"블로그",href:"/blog"}]})]})})},f={name:"단순 링크",parameters:{docs:{description:{story:"드롭다운 없이 단순 링크만 있는 내비게이션입니다."}}},render:()=>e.jsxs("div",{style:{padding:"10px 20px",background:"#1e293b",borderRadius:"10px",display:"inline-flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{style:{fontWeight:700,color:"#fff",fontSize:"16px",marginRight:"8px"},children:"🌙 Dark Nav"}),e.jsx(l,{items:[{key:"home",label:"홈",href:"/"},{key:"about",label:"소개",href:"/about"},{key:"works",label:"작업물",href:"/works"},{key:"contact",label:"연락처",href:"/contact"}],style:{background:"transparent"}})]})};var g,m,y;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '기본 GNB',
  render: () => <NavMenuDemo />
}`,...(y=(m=d.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var h,b,v;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '메가 메뉴',
  parameters: {
    docs: {
      description: {
        story: 'content prop으로 완전히 커스텀한 드롭다운을 구성합니다.'
      }
    }
  },
  render: () => <div style={{
    fontFamily: 'system-ui'
  }}>
      <div style={{
      padding: '10px 20px',
      background: '#fff',
      border: '1px solid #e5e7eb',
      borderRadius: '10px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '20px'
    }}>
        <span style={{
        fontWeight: 800,
        fontSize: '16px'
      }}>⚡ App</span>
        <NavigationMenu items={[{
        key: 'components',
        label: '컴포넌트',
        content: <div style={{
          minWidth: '560px'
        }}>
                  <div style={{
            fontSize: '12px',
            color: '#9ca3af',
            fontWeight: 600,
            marginBottom: '8px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>카테고리</div>
                  <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '6px'
          }}>
                    {['Atoms', 'Molecules', 'Organisms', '입력', '표시', '내비게이션', '피드백', '레이아웃', '오버레이'].map((cat, i) => <div key={cat} style={{
              padding: '8px 10px',
              background: '#f9fafb',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: 500,
              color: '#374151',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
                        <span>{'🧱📦🏗️🎛️🖼️🧭💬📐🪟'.slice(i * 2, i * 2 + 2)}</span>
                        {cat}
                      </div>)}
                  </div>
                </div>
      }, {
        key: 'docs',
        label: '문서',
        href: '/docs'
      }, {
        key: 'blog',
        label: '블로그',
        href: '/blog'
      }]} />
      </div>
    </div>
}`,...(v=(b=c.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var j,k,S;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '단순 링크',
  parameters: {
    docs: {
      description: {
        story: '드롭다운 없이 단순 링크만 있는 내비게이션입니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '10px 20px',
    background: '#1e293b',
    borderRadius: '10px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px'
  }}>
      <span style={{
      fontWeight: 700,
      color: '#fff',
      fontSize: '16px',
      marginRight: '8px'
    }}>🌙 Dark Nav</span>
      <NavigationMenu items={[{
      key: 'home',
      label: '홈',
      href: '/'
    }, {
      key: 'about',
      label: '소개',
      href: '/about'
    }, {
      key: 'works',
      label: '작업물',
      href: '/works'
    }, {
      key: 'contact',
      label: '연락처',
      href: '/contact'
    }]} style={{
      background: 'transparent'
    }} />
    </div>
}`,...(S=(k=f.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const _=["Default","WithMegaMenu","SimpleLinks"];export{d as Default,f as SimpleLinks,c as WithMegaMenu,_ as __namedExportsOrder,O as default};
