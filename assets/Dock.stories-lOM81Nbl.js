import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as Y}from"./index-BxXVWNx3.js";import{d as ee}from"./reference-types-4ftiVeOu.js";import"./_commonjsHelpers-CqkleIqs.js";const oe={sm:{icon:"20px",label:"10px",padding:"6px 0 4px",gap:"4px",height:"52px"},md:{icon:"24px",label:"11px",padding:"8px 0 6px",gap:"4px",height:"64px"},lg:{icon:"28px",label:"12px",padding:"10px 0 8px",gap:"6px",height:"76px"}};function a({items:o,activeKey:t,defaultActiveKey:v,size:l="md",variant:r="default",color:g="#3b82f6",showLabels:M=!0,onChange:h}){var k;const[U,J]=Y.useState(v??((k=o[0])==null?void 0:k.key)),Q=t??U,X=i=>{J(i),h==null||h(i)},n=oe[l],Z=()=>{const i={display:"flex",alignItems:"stretch",justifyContent:"space-around",width:"100%",minHeight:n.height,padding:"0 8px",boxSizing:"border-box"};return r==="glass"?{...i,background:"rgba(255,255,255,0.7)",backdropFilter:"blur(16px)",borderTop:"1px solid rgba(255,255,255,0.5)",boxShadow:"0 -4px 24px rgba(0,0,0,0.08)"}:r==="filled"?{...i,background:g,boxShadow:"0 -2px 12px rgba(0,0,0,0.15)"}:r==="minimal"?{...i,background:"transparent",borderTop:"1px solid #f0f0f0"}:{...i,background:"#fff",borderTop:"1px solid #e5e7eb",boxShadow:"0 -2px 8px rgba(0,0,0,0.06)"}},$=i=>r==="filled"?i?"#fff":"rgba(255,255,255,0.55)":i?g:"#9ca3af";return e.jsx("div",{style:Z(),children:o.map(i=>{const s=i.key===Q;return e.jsxs("button",{onClick:()=>X(i.key),style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n.gap,padding:n.padding,background:"none",border:"none",cursor:"pointer",color:$(s),transition:"color 0.18s, transform 0.15s",transform:s?"translateY(-2px)":"none",position:"relative"},children:[i.badge!==void 0&&e.jsx("span",{style:{position:"absolute",top:"4px",right:"calc(50% - 14px)",background:"#ef4444",color:"#fff",fontSize:"10px",fontWeight:700,minWidth:"16px",height:"16px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",padding:"0 4px",lineHeight:1},children:i.badge}),e.jsx("span",{style:{fontSize:n.icon,lineHeight:1},children:i.icon}),M&&i.label&&e.jsx("span",{style:{fontSize:n.label,fontWeight:s?600:400,lineHeight:1,fontFamily:"system-ui",whiteSpace:"nowrap"},children:i.label}),s&&r!=="minimal"&&e.jsx("span",{style:{position:"absolute",bottom:"2px",width:"4px",height:"4px",borderRadius:"50%",background:r==="filled"?"#fff":g}})]},i.key)})})}a.__docgenInfo={description:"",methods:[],displayName:"Dock",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"DockItem"}],raw:"DockItem[]"},description:""},activeKey:{required:!1,tsType:{name:"string"},description:""},defaultActiveKey:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:"'bottom' | 'top'",elements:[{name:"literal",value:"'bottom'"},{name:"literal",value:"'top'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'glass' | 'filled' | 'minimal'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'glass'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'minimal'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#3b82f6'",computed:!1}},showLabels:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:""}}};const ie=ee([{library:"PrimeVue",component:"Dock",url:"https://primevue.org/dock/",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"daisyUI",component:"Dock",url:"https://daisyui.com/components/dock/",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"Bottom Navigation",url:"https://flowbite.com/docs/components/bottom-navigation/",usedFor:["comparison"],relation:"compared"}]),se={title:"Molecules/Navigation/Dock",component:a,tags:["autodocs","ref:daisy-ui","ref:flowbite","ref:vuetify","ref:mui","ref:primevue"],parameters:{references:ie,docs:{description:{component:"\n## Dock\n\n모바일 화면 하단에 고정된 탭 내비게이션 바입니다.\niOS/Android 스타일의 하단 독으로, 아이콘과 레이블로 구성된 3~5개의 주요 섹션 이동에 사용합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `items` | `DockItem[]` | - | 탭 아이템 목록 |\n| `activeKey` | `string` | - | 활성 탭 (제어) |\n| `defaultActiveKey` | `string` | - | 초기 활성 탭 (비제어) |\n| `size` | `'sm'\\|'md'\\|'lg'` | `'md'` | 크기 |\n| `variant` | `'default'\\|'glass'\\|'filled'\\|'minimal'` | `'default'` | 스타일 변형 |\n| `color` | `string` | `'#3b82f6'` | 활성 색상 |\n| `showLabels` | `boolean` | `true` | 레이블 표시 |\n| `onChange` | `(key: string) => void` | - | 탭 변경 콜백 |\n        "}}},argTypes:{size:{control:"select",options:["sm","md","lg"],table:{category:"Appearance"}},variant:{control:"select",options:["default","glass","filled","minimal"],table:{category:"Appearance"}},color:{control:"color",table:{category:"Appearance"}},showLabels:{control:"boolean",table:{category:"Appearance"}}},args:{items:[{key:"home",icon:"🏠",label:"홈"},{key:"search",icon:"🔍",label:"검색"},{key:"add",icon:"➕",label:"추가"},{key:"notifications",icon:"🔔",label:"알림"},{key:"profile",icon:"👤",label:"프로필"}],size:"md",variant:"default",color:"#3b82f6",showLabels:!0,defaultActiveKey:"home"}};function u({children:o,bg:t="#f9fafb"}){return e.jsx("div",{style:{width:"360px",height:"640px",border:"8px solid #1f2937",borderRadius:"40px",overflow:"hidden",background:t,display:"flex",flexDirection:"column",boxShadow:"0 24px 64px rgba(0,0,0,0.25)",position:"relative",fontFamily:"system-ui"},children:e.jsx("div",{style:{flex:1,padding:"16px",overflowY:"auto"},children:o})})}const d={name:"기본",render:o=>e.jsxs(u,{children:[e.jsx("div",{style:{marginBottom:"16px",fontSize:"18px",fontWeight:700,color:"#111"},children:"앱 화면"}),e.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0},children:e.jsx(a,{...o})})]})};function ae(){const[o,t]=Y.useState("home"),l={home:{title:"홈",content:"오늘의 피드와 추천 콘텐츠를 확인하세요.",icon:"🏠"},explore:{title:"탐색",content:"새로운 콘텐츠와 트렌드를 탐색하세요.",icon:"🔍"},create:{title:"만들기",content:"새 게시물을 작성하거나 스토리를 만드세요.",icon:"➕"},notifications:{title:"알림",content:"좋아요, 댓글, 팔로우 알림이 있습니다.",icon:"🔔"},profile:{title:"프로필",content:"내 게시물과 팔로워를 확인하세요.",icon:"👤"}}[o];return e.jsxs(u,{children:[e.jsxs("div",{style:{textAlign:"center",paddingTop:"60px"},children:[e.jsx("div",{style:{fontSize:"48px",marginBottom:"12px"},children:l.icon}),e.jsx("div",{style:{fontSize:"22px",fontWeight:700,color:"#111",marginBottom:"8px"},children:l.title}),e.jsx("div",{style:{fontSize:"14px",color:"#6b7280",lineHeight:1.6,maxWidth:"260px",margin:"0 auto"},children:l.content})]}),e.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0},children:e.jsx(a,{items:[{key:"home",icon:"🏠",label:"홈"},{key:"explore",icon:"🔍",label:"탐색"},{key:"create",icon:"➕",label:"만들기"},{key:"notifications",icon:"🔔",label:"알림",badge:3},{key:"profile",icon:"👤",label:"프로필"}],activeKey:o,onChange:t,color:"#3b82f6"})})]})}const c={name:"제어 컴포넌트 (페이지 전환)",parameters:{docs:{description:{story:"탭 클릭 시 콘텐츠가 전환되는 인터랙티브 예시입니다."}}},render:()=>e.jsx(ae,{})},p={name:"변형 비교",parameters:{docs:{description:{story:"default, glass, filled, minimal 네 가지 스타일 변형입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"400px",fontFamily:"system-ui"},children:["default","glass","filled","minimal"].map(o=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"8px",fontWeight:600},children:["variant: ",o]}),e.jsx("div",{style:{border:"1px solid #e5e7eb",borderRadius:"12px",overflow:"hidden",background:o==="glass"?"linear-gradient(135deg, #667eea, #764ba2)":"#f9fafb"},children:e.jsx(a,{items:[{key:"home",icon:"🏠",label:"홈"},{key:"search",icon:"🔍",label:"검색"},{key:"add",icon:"➕",label:"추가"},{key:"profile",icon:"👤",label:"나"}],variant:o,defaultActiveKey:"home",color:"#3b82f6"})})]},o))})},m={name:"크기 변형",parameters:{docs:{description:{story:"sm, md, lg 크기 비교입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"400px",fontFamily:"system-ui"},children:["sm","md","lg"].map(o=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"8px",fontWeight:600},children:["size: ",o]}),e.jsx("div",{style:{border:"1px solid #e5e7eb",borderRadius:"12px",overflow:"hidden"},children:e.jsx(a,{items:[{key:"home",icon:"🏠",label:"홈"},{key:"search",icon:"🔍",label:"검색"},{key:"add",icon:"➕",label:"추가"},{key:"profile",icon:"👤",label:"나"}],size:o,defaultActiveKey:"home"})})]},o))})},f={name:"배지",parameters:{docs:{description:{story:"알림 배지가 있는 탭 아이템입니다."}}},render:()=>e.jsxs(u,{children:[e.jsx("div",{style:{textAlign:"center",paddingTop:"80px",color:"#6b7280",fontSize:"14px"},children:"배지 예시"}),e.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0},children:e.jsx(a,{items:[{key:"home",icon:"🏠",label:"홈"},{key:"messages",icon:"💬",label:"메시지",badge:5},{key:"cart",icon:"🛒",label:"장바구니",badge:12},{key:"notifications",icon:"🔔",label:"알림",badge:"99+"},{key:"profile",icon:"👤",label:"나"}],defaultActiveKey:"home",color:"#ef4444"})})]})},b={name:"레이블 없음",parameters:{docs:{description:{story:"레이블 없이 아이콘만 표시하는 컴팩트 스타일입니다."}}},render:()=>e.jsx("div",{style:{maxWidth:"400px",border:"1px solid #e5e7eb",borderRadius:"12px",overflow:"hidden",fontFamily:"system-ui"},children:e.jsx(a,{items:[{key:"home",icon:"🏠"},{key:"search",icon:"🔍"},{key:"add",icon:"➕"},{key:"heart",icon:"❤️",badge:2},{key:"profile",icon:"👤"}],showLabels:!1,defaultActiveKey:"home",size:"md",color:"#8b5cf6"})})},y={name:"색상 변형",parameters:{docs:{description:{story:"다양한 브랜드 색상의 독 예시입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px",maxWidth:"400px",fontFamily:"system-ui"},children:[{color:"#3b82f6",label:"Blue"},{color:"#10b981",label:"Green"},{color:"#ef4444",label:"Red"},{color:"#f59e0b",label:"Amber"},{color:"#8b5cf6",label:"Purple"}].map(({color:o,label:t})=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"6px"},children:[t," — ",o]}),e.jsx("div",{style:{border:"1px solid #e5e7eb",borderRadius:"12px",overflow:"hidden"},children:e.jsx(a,{items:[{key:"a",icon:"🏠",label:"홈"},{key:"b",icon:"🔍",label:"검색"},{key:"c",icon:"❤️",label:"좋아요"},{key:"d",icon:"👤",label:"나"}],defaultActiveKey:"a",color:o,size:"sm"})})]},o))})},x={name:"이커머스 앱",parameters:{docs:{description:{story:"쇼핑몰 앱 스타일의 독 예시입니다."}}},render:()=>e.jsxs(u,{bg:"#fff",children:[e.jsx("div",{style:{fontSize:"18px",fontWeight:800,color:"#111",marginBottom:"16px"},children:"쇼핑"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},children:["👟 운동화","👗 의류","⌚ 시계","🎒 가방"].map(o=>e.jsx("div",{style:{background:"#f9fafb",borderRadius:"12px",padding:"16px",textAlign:"center",fontSize:"13px",color:"#374151",fontWeight:600},children:o},o))}),e.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0},children:e.jsx(a,{items:[{key:"home",icon:"🏠",label:"홈"},{key:"search",icon:"🔍",label:"검색"},{key:"cart",icon:"🛒",label:"장바구니",badge:3},{key:"heart",icon:"❤️",label:"찜"},{key:"profile",icon:"👤",label:"마이"}],defaultActiveKey:"home",color:"#f59e0b",variant:"filled"})})]})};var j,S,z;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '기본',
  render: args => <PhoneFrame>
      <div style={{
      marginBottom: '16px',
      fontSize: '18px',
      fontWeight: 700,
      color: '#111'
    }}>앱 화면</div>
      <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0
    }}>
        <Dock {...args} />
      </div>
    </PhoneFrame>
}`,...(z=(S=d.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var w,A,D;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '제어 컴포넌트 (페이지 전환)',
  parameters: {
    docs: {
      description: {
        story: '탭 클릭 시 콘텐츠가 전환되는 인터랙티브 예시입니다.'
      }
    }
  },
  render: () => <ControlledDockDemo />
}`,...(D=(A=c.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var W,F,K;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '변형 비교',
  parameters: {
    docs: {
      description: {
        story: 'default, glass, filled, minimal 네 가지 스타일 변형입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: '400px',
    fontFamily: 'system-ui'
  }}>
      {(['default', 'glass', 'filled', 'minimal'] as const).map(variant => <div key={variant}>
          <div style={{
        fontSize: '12px',
        color: '#9ca3af',
        marginBottom: '8px',
        fontWeight: 600
      }}>variant: {variant}</div>
          <div style={{
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        overflow: 'hidden',
        background: variant === 'glass' ? 'linear-gradient(135deg, #667eea, #764ba2)' : '#f9fafb'
      }}>
            <Dock items={[{
          key: 'home',
          icon: '🏠',
          label: '홈'
        }, {
          key: 'search',
          icon: '🔍',
          label: '검색'
        }, {
          key: 'add',
          icon: '➕',
          label: '추가'
        }, {
          key: 'profile',
          icon: '👤',
          label: '나'
        }]} variant={variant} defaultActiveKey="home" color="#3b82f6" />
          </div>
        </div>)}
    </div>
}`,...(K=(F=p.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var T,B,R;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '크기 변형',
  parameters: {
    docs: {
      description: {
        story: 'sm, md, lg 크기 비교입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: '400px',
    fontFamily: 'system-ui'
  }}>
      {(['sm', 'md', 'lg'] as const).map(size => <div key={size}>
          <div style={{
        fontSize: '12px',
        color: '#9ca3af',
        marginBottom: '8px',
        fontWeight: 600
      }}>size: {size}</div>
          <div style={{
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        overflow: 'hidden'
      }}>
            <Dock items={[{
          key: 'home',
          icon: '🏠',
          label: '홈'
        }, {
          key: 'search',
          icon: '🔍',
          label: '검색'
        }, {
          key: 'add',
          icon: '➕',
          label: '추가'
        }, {
          key: 'profile',
          icon: '👤',
          label: '나'
        }]} size={size} defaultActiveKey="home" />
          </div>
        </div>)}
    </div>
}`,...(R=(B=m.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var C,P,V;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '배지',
  parameters: {
    docs: {
      description: {
        story: '알림 배지가 있는 탭 아이템입니다.'
      }
    }
  },
  render: () => <PhoneFrame>
      <div style={{
      textAlign: 'center',
      paddingTop: '80px',
      color: '#6b7280',
      fontSize: '14px'
    }}>배지 예시</div>
      <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0
    }}>
        <Dock items={[{
        key: 'home',
        icon: '🏠',
        label: '홈'
      }, {
        key: 'messages',
        icon: '💬',
        label: '메시지',
        badge: 5
      }, {
        key: 'cart',
        icon: '🛒',
        label: '장바구니',
        badge: 12
      }, {
        key: 'notifications',
        icon: '🔔',
        label: '알림',
        badge: '99+'
      }, {
        key: 'profile',
        icon: '👤',
        label: '나'
      }]} defaultActiveKey="home" color="#ef4444" />
      </div>
    </PhoneFrame>
}`,...(V=(P=f.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var I,q,L;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '레이블 없음',
  parameters: {
    docs: {
      description: {
        story: '레이블 없이 아이콘만 표시하는 컴팩트 스타일입니다.'
      }
    }
  },
  render: () => <div style={{
    maxWidth: '400px',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    overflow: 'hidden',
    fontFamily: 'system-ui'
  }}>
      <Dock items={[{
      key: 'home',
      icon: '🏠'
    }, {
      key: 'search',
      icon: '🔍'
    }, {
      key: 'add',
      icon: '➕'
    }, {
      key: 'heart',
      icon: '❤️',
      badge: 2
    }, {
      key: 'profile',
      icon: '👤'
    }]} showLabels={false} defaultActiveKey="home" size="md" color="#8b5cf6" />
    </div>
}`,...(L=(q=b.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var E,H,N;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '색상 변형',
  parameters: {
    docs: {
      description: {
        story: '다양한 브랜드 색상의 독 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '400px',
    fontFamily: 'system-ui'
  }}>
      {[{
      color: '#3b82f6',
      label: 'Blue'
    }, {
      color: '#10b981',
      label: 'Green'
    }, {
      color: '#ef4444',
      label: 'Red'
    }, {
      color: '#f59e0b',
      label: 'Amber'
    }, {
      color: '#8b5cf6',
      label: 'Purple'
    }].map(({
      color,
      label
    }) => <div key={color}>
          <div style={{
        fontSize: '12px',
        color: '#9ca3af',
        marginBottom: '6px'
      }}>{label} — {color}</div>
          <div style={{
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        overflow: 'hidden'
      }}>
            <Dock items={[{
          key: 'a',
          icon: '🏠',
          label: '홈'
        }, {
          key: 'b',
          icon: '🔍',
          label: '검색'
        }, {
          key: 'c',
          icon: '❤️',
          label: '좋아요'
        }, {
          key: 'd',
          icon: '👤',
          label: '나'
        }]} defaultActiveKey="a" color={color} size="sm" />
          </div>
        </div>)}
    </div>
}`,...(N=(H=y.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var _,G,O;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: '이커머스 앱',
  parameters: {
    docs: {
      description: {
        story: '쇼핑몰 앱 스타일의 독 예시입니다.'
      }
    }
  },
  render: () => <PhoneFrame bg="#fff">
      <div style={{
      fontSize: '18px',
      fontWeight: 800,
      color: '#111',
      marginBottom: '16px'
    }}>쇼핑</div>
      <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '12px'
    }}>
        {['👟 운동화', '👗 의류', '⌚ 시계', '🎒 가방'].map(item => <div key={item} style={{
        background: '#f9fafb',
        borderRadius: '12px',
        padding: '16px',
        textAlign: 'center',
        fontSize: '13px',
        color: '#374151',
        fontWeight: 600
      }}>{item}</div>)}
      </div>
      <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0
    }}>
        <Dock items={[{
        key: 'home',
        icon: '🏠',
        label: '홈'
      }, {
        key: 'search',
        icon: '🔍',
        label: '검색'
      }, {
        key: 'cart',
        icon: '🛒',
        label: '장바구니',
        badge: 3
      }, {
        key: 'heart',
        icon: '❤️',
        label: '찜'
      }, {
        key: 'profile',
        icon: '👤',
        label: '마이'
      }]} defaultActiveKey="home" color="#f59e0b" variant="filled" />
      </div>
    </PhoneFrame>
}`,...(O=(G=x.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};const de=["Default","Controlled","VariantComparison","SizeVariants","WithBadge","NoLabels","ColorVariants","EcommerceApp"];export{y as ColorVariants,c as Controlled,d as Default,x as EcommerceApp,b as NoLabels,m as SizeVariants,p as VariantComparison,f as WithBadge,de as __namedExportsOrder,se as default};
