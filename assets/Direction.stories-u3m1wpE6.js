import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as D}from"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";const W=D.createContext("ltr");function z(){return D.useContext(W)}function t({dir:r,children:i}){return e.jsx(W.Provider,{value:r,children:e.jsx("div",{dir:r,style:{direction:r},children:i})})}t.__docgenInfo={description:"",methods:[],displayName:"Direction",props:{dir:{required:!0,tsType:{name:"union",raw:"'ltr' | 'rtl'",elements:[{name:"literal",value:"'ltr'"},{name:"literal",value:"'rtl'"}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const k={title:"Atoms/Primitives/Direction",component:t,tags:["autodocs","ref:shadcn-ui"],parameters:{docs:{description:{component:`
## Direction

텍스트 방향(LTR / RTL)을 하위 컴포넌트에 주입하는 컨텍스트 프로바이더입니다.
아랍어, 히브리어 등 RTL 언어를 지원할 때 전체 레이아웃 방향을 일괄 전환합니다.

\`useDirection()\` 훅으로 하위 컴포넌트가 현재 방향을 읽을 수 있습니다.

---

### Props

| Prop | Type | Default | 설명 |
|---|---|---|---|
| \`dir\` | \`'ltr'\\|'rtl'\` | - | 텍스트 방향 |
| \`children\` | \`ReactNode\` | - | 자식 요소 |
        `}}},argTypes:{dir:{control:"select",options:["ltr","rtl"],table:{category:"Core"}}},args:{dir:"ltr"}};function l(){const r=z();return e.jsxs("div",{style:{padding:"16px",background:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"8px",fontFamily:"system-ui"},children:[e.jsxs("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"8px"},children:["현재 방향: ",e.jsx("strong",{children:r.toUpperCase()})]}),e.jsx("div",{style:{fontSize:"15px",color:"#111",lineHeight:1.6},children:r==="rtl"?"مرحبا بك في تطبيقنا. هذا النص يسير من اليمين إلى اليسار.":"Welcome to our application. This text flows left to right."}),e.jsxs("div",{style:{marginTop:"12px",display:"flex",gap:"8px",justifyContent:r==="rtl"?"flex-end":"flex-start"},children:[e.jsx("button",{style:{padding:"6px 14px",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"13px"},children:r==="rtl"?"موافق":"Confirm"}),e.jsx("button",{style:{padding:"6px 14px",background:"#f3f4f6",color:"#374151",border:"1px solid #d1d5db",borderRadius:"6px",cursor:"pointer",fontSize:"13px"},children:r==="rtl"?"إلغاء":"Cancel"})]})]})}const o={name:"기본 (LTR)",render:r=>e.jsx("div",{style:{fontFamily:"system-ui",maxWidth:"480px"},children:e.jsx(t,{...r,children:e.jsx(l,{})})})},n={name:"RTL (오른쪽→왼쪽)",parameters:{docs:{description:{story:"아랍어/히브리어 등 RTL 레이아웃 예시입니다."}}},render:()=>e.jsx("div",{style:{fontFamily:"system-ui",maxWidth:"480px"},children:e.jsx(t,{dir:"rtl",children:e.jsx(l,{})})})},s={name:"LTR vs RTL 비교",parameters:{docs:{description:{story:"LTR과 RTL 레이아웃을 나란히 비교합니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"16px",fontFamily:"system-ui"},children:["ltr","rtl"].map(r=>e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:700,color:"#6b7280",marginBottom:"8px",textTransform:"uppercase"},children:r}),e.jsx(t,{dir:r,children:e.jsx(l,{})})]},r))})};function p({dir:r}){return e.jsx(t,{dir:r,children:e.jsxs("div",{style:{padding:"20px",background:"#fff",border:"1px solid #e5e7eb",borderRadius:"12px",display:"flex",flexDirection:"column",gap:"12px",fontFamily:"system-ui"},children:[e.jsx("h3",{style:{margin:0,fontSize:"16px",fontWeight:700,color:"#111"},children:r==="rtl"?"إنشاء حساب":"Create Account"}),[{label:r==="rtl"?"الاسم الأول":"First Name",placeholder:r==="rtl"?"أدخل اسمك":"Enter your name"},{label:r==="rtl"?"البريد الإلكتروني":"Email",placeholder:r==="rtl"?"أدخل بريدك":"Enter your email"}].map(i=>e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"13px",fontWeight:600,color:"#374151",marginBottom:"4px"},children:i.label}),e.jsx("input",{placeholder:i.placeholder,style:{width:"100%",padding:"8px 12px",border:"1px solid #d1d5db",borderRadius:"6px",fontSize:"13px",boxSizing:"border-box",textAlign:r==="rtl"?"right":"left"},readOnly:!0})]},i.label)),e.jsx("button",{style:{padding:"10px",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:600,fontSize:"14px"},children:r==="rtl"?"تسجيل":"Register"})]})})}const a={name:"폼 레이아웃",parameters:{docs:{description:{story:"폼 요소에서 LTR/RTL 방향 전환 예시입니다."}}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap"},children:[e.jsxs("div",{style:{minWidth:"260px"},children:[e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"8px"},children:"LTR (영어)"}),e.jsx(p,{dir:"ltr"})]}),e.jsxs("div",{style:{minWidth:"260px"},children:[e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"8px"},children:"RTL (아랍어)"}),e.jsx(p,{dir:"rtl"})]})]})},d={name:"RTL 내비게이션",parameters:{docs:{description:{story:"RTL 언어용 내비게이션 바 레이아웃 예시입니다."}}},render:()=>e.jsx("div",{style:{fontFamily:"system-ui",maxWidth:"600px"},children:e.jsx(t,{dir:"rtl",children:e.jsxs("div",{style:{background:"#1e40af",padding:"12px 16px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx("nav",{style:{display:"flex",gap:"16px"},children:["الرئيسية","المنتجات","الاتصال"].map(r=>e.jsx("a",{href:"#",style:{color:"rgba(255,255,255,0.85)",textDecoration:"none",fontSize:"14px",fontWeight:500},children:r},r))}),e.jsx("div",{style:{color:"#fff",fontWeight:800,fontSize:"18px"},children:"🌙 متجر"})]})})})};var c,x,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '기본 (LTR)',
  render: args => <div style={{
    fontFamily: 'system-ui',
    maxWidth: '480px'
  }}>
      <Direction {...args}>
        <DirAwareCard />
      </Direction>
    </div>
}`,...(m=(x=o.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var f,y,u;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'RTL (오른쪽→왼쪽)',
  parameters: {
    docs: {
      description: {
        story: '아랍어/히브리어 등 RTL 레이아웃 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    fontFamily: 'system-ui',
    maxWidth: '480px'
  }}>
      <Direction dir="rtl">
        <DirAwareCard />
      </Direction>
    </div>
}`,...(u=(y=n.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var h,g,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'LTR vs RTL 비교',
  parameters: {
    docs: {
      description: {
        story: 'LTR과 RTL 레이아웃을 나란히 비교합니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    fontFamily: 'system-ui'
  }}>
      {(['ltr', 'rtl'] as const).map(dir => <div key={dir} style={{
      flex: 1
    }}>
          <div style={{
        fontSize: '12px',
        fontWeight: 700,
        color: '#6b7280',
        marginBottom: '8px',
        textTransform: 'uppercase'
      }}>{dir}</div>
          <Direction dir={dir}>
            <DirAwareCard />
          </Direction>
        </div>)}
    </div>
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,j,R;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '폼 레이아웃',
  parameters: {
    docs: {
      description: {
        story: '폼 요소에서 LTR/RTL 방향 전환 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap'
  }}>
      <div style={{
      minWidth: '260px'
    }}>
        <div style={{
        fontSize: '12px',
        color: '#9ca3af',
        marginBottom: '8px'
      }}>LTR (영어)</div>
        <FormExample dir="ltr" />
      </div>
      <div style={{
      minWidth: '260px'
    }}>
        <div style={{
        fontSize: '12px',
        color: '#9ca3af',
        marginBottom: '8px'
      }}>RTL (아랍어)</div>
        <FormExample dir="rtl" />
      </div>
    </div>
}`,...(R=(j=a.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var T,L,S;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'RTL 내비게이션',
  parameters: {
    docs: {
      description: {
        story: 'RTL 언어용 내비게이션 바 레이아웃 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    fontFamily: 'system-ui',
    maxWidth: '600px'
  }}>
      <Direction dir="rtl">
        <div style={{
        background: '#1e40af',
        padding: '12px 16px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
          <nav style={{
          display: 'flex',
          gap: '16px'
        }}>
            {['الرئيسية', 'المنتجات', 'الاتصال'].map(item => <a key={item} href="#" style={{
            color: 'rgba(255,255,255,0.85)',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 500
          }}>{item}</a>)}
          </nav>
          <div style={{
          color: '#fff',
          fontWeight: 800,
          fontSize: '18px'
        }}>🌙 متجر</div>
        </div>
      </Direction>
    </div>
}`,...(S=(L=d.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const B=["Default","RTL","SideBySide","FormLayout","NavigationRTL"];export{o as Default,a as FormLayout,d as NavigationRTL,n as RTL,s as SideBySide,B as __namedExportsOrder,k as default};
