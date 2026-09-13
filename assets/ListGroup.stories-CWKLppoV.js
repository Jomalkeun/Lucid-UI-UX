import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as $}from"./index-BxXVWNx3.js";import{d as H}from"./reference-types-4ftiVeOu.js";import"./_commonjsHelpers-CqkleIqs.js";function i({items:a,variant:r="default",size:o="md",color:s="#3b82f6",numbered:l=!1,style:t}){const q={sm:{fontSize:"13px",padding:"8px 12px",gap:"8px"},md:{fontSize:"14px",padding:"11px 16px",gap:"10px"},lg:{fontSize:"15px",padding:"14px 20px",gap:"12px"}},{fontSize:E,padding:P,gap:_}=q[o],N={fontFamily:"system-ui",borderRadius:r==="flush"?0:"8px",border:r==="bordered"||r==="default"?"1px solid #e5e7eb":"none",overflow:r==="separated"?"visible":"hidden",display:"flex",flexDirection:"column",gap:r==="separated"?"6px":0,...t};return n.jsx("ul",{role:"list",style:{listStyle:"none",margin:0,padding:0,...N},children:a.map((e,y)=>{const O=e.href?"a":"li",M=y===a.length-1;return n.jsxs(O,{href:e.href,onClick:e.disabled?void 0:e.onClick,role:e.onClick?"button":void 0,"aria-current":e.active?"true":void 0,"aria-disabled":e.disabled,style:{display:"flex",alignItems:"center",gap:_,padding:P,fontSize:E,textDecoration:"none",background:e.active?`${s}18`:"transparent",color:e.disabled?"#d1d5db":e.active?s:"#374151",borderBottom:!M&&r!=="separated"?"1px solid #f0f0f0":"none",cursor:e.disabled?"not-allowed":e.onClick||e.href?"pointer":"default",opacity:e.disabled?.6:1,border:r==="separated"?"1px solid #e5e7eb":void 0,borderRadius:r==="separated"?"6px":void 0,fontWeight:e.active?600:400,transition:"background 0.15s"},children:[l&&n.jsx("span",{style:{minWidth:"20px",height:"20px",borderRadius:"50%",background:e.active?s:"#e5e7eb",color:e.active?"#fff":"#6b7280",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:700,flexShrink:0},children:y+1}),e.icon&&n.jsx("span",{style:{flexShrink:0,fontSize:"16px"},children:e.icon}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.label}),e.description&&n.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginTop:"2px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.description})]}),e.badge!==void 0&&n.jsx("span",{style:{background:e.active?s:"#e5e7eb",color:e.active?"#fff":"#374151",borderRadius:"10px",padding:"1px 7px",fontSize:"12px",fontWeight:600,flexShrink:0},children:e.badge}),(e.href||e.onClick)&&!e.disabled&&n.jsx("span",{style:{color:"#d1d5db",flexShrink:0},children:"›"})]},e.key)})})}i.__docgenInfo={description:"",methods:[],displayName:"ListGroup",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"ListGroupItem"}],raw:"ListGroupItem[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'flush' | 'bordered' | 'separated'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'flush'"},{name:"literal",value:"'bordered'"},{name:"literal",value:"'separated'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#3b82f6'",computed:!1}},numbered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const J=H([{library:"Bootstrap",component:"List group",url:"https://getbootstrap.com/docs/5.3/components/list-group/",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"List Group",url:"https://flowbite.com/docs/components/list-group/",usedFor:["comparison"],relation:"compared"}]),ee={title:"Molecules/Data/ListGroup",component:i,tags:["autodocs","ref:flowbite","ref:vuetify","ref:bootstrap"],parameters:{references:J,docs:{description:{component:"\n## ListGroup\n\n테두리와 구분선이 있는 스타일드 리스트 그룹 컴포넌트입니다.\n설정 메뉴, 항목 선택 목록, 링크 목록 등에 사용되며 활성 상태와 비활성 상태를 시각적으로 구분합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `items` | `ListGroupItem[]` | - | 목록 항목 |\n| `variant` | `'default'\\|'flush'\\|'bordered'\\|'separated'` | `'default'` | 스타일 변형 |\n| `size` | `'sm'\\|'md'\\|'lg'` | `'md'` | 크기 |\n| `color` | `string` | `'#3b82f6'` | 활성 색상 |\n| `numbered` | `boolean` | `false` | 번호 표시 |\n        "}}},argTypes:{variant:{control:"select",options:["default","flush","bordered","separated"],table:{category:"Appearance"}},size:{control:"select",options:["sm","md","lg"],table:{category:"Appearance"}},color:{control:"color",table:{category:"Appearance"}},numbered:{control:"boolean",table:{category:"Appearance"}}},args:{variant:"default",size:"md",color:"#3b82f6",numbered:!1}},K=[{key:"home",label:"홈",icon:"🏠",active:!0},{key:"profile",label:"프로필",icon:"👤"},{key:"settings",label:"설정",icon:"⚙️"},{key:"billing",label:"결제",icon:"💳"},{key:"logout",label:"로그아웃",icon:"🚪"}],d={name:"기본",args:{items:K,style:{maxWidth:"280px"}}},p={name:"변형 비교",parameters:{docs:{description:{story:"default / flush / bordered / separated 네 가지 변형입니다."}}},render:()=>n.jsx("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",fontFamily:"system-ui"},children:["default","flush","bordered","separated"].map(a=>n.jsxs("div",{style:{minWidth:"200px"},children:[n.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"8px",fontWeight:600},children:a}),n.jsx(i,{variant:a,items:[{key:"1",label:"항목 A",active:!0},{key:"2",label:"항목 B"},{key:"3",label:"항목 C"}]})]},a))})},c={name:"배지 포함",parameters:{docs:{description:{story:"알림 수, 상태 등 배지를 표시합니다."}}},args:{items:[{key:"inbox",label:"받은 편지함",icon:"📥",badge:23,active:!0},{key:"sent",label:"보낸 편지함",icon:"📤",badge:0},{key:"draft",label:"임시저장",icon:"📝",badge:5},{key:"spam",label:"스팸",icon:"🚫",badge:12},{key:"trash",label:"휴지통",icon:"🗑️",badge:3,disabled:!0}],style:{maxWidth:"280px"}}},m={name:"설명 포함",parameters:{docs:{description:{story:"항목에 보조 설명이 있는 목록입니다."}}},args:{items:[{key:"free",label:"무료 플랜",description:"기본 기능 제공",icon:"🆓",active:!0},{key:"pro",label:"Pro 플랜",description:"월 ₩9,900 · 고급 기능",icon:"⭐"},{key:"team",label:"Team 플랜",description:"월 ₩29,900 · 팀 기능",icon:"👥"},{key:"enterprise",label:"Enterprise",description:"문의 필요",icon:"🏢",disabled:!0}],style:{maxWidth:"300px"}}},u={name:"번호 목록",parameters:{docs:{description:{story:"numbered=true로 순서 번호를 표시합니다."}}},args:{numbered:!0,items:[{key:"1",label:"React 설치",active:!0},{key:"2",label:"프로젝트 구조 설정"},{key:"3",label:"컴포넌트 작성"},{key:"4",label:"테스트 작성"},{key:"5",label:"배포"}],style:{maxWidth:"260px"}}},b={name:"크기 변형",render:()=>n.jsx("div",{style:{display:"flex",gap:"24px",fontFamily:"system-ui"},children:["sm","md","lg"].map(a=>n.jsxs("div",{style:{minWidth:"160px"},children:[n.jsxs("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"8px",fontWeight:600},children:["Size: ",a]}),n.jsx(i,{size:a,items:[{key:"a",label:"항목 A",active:!0},{key:"b",label:"항목 B"},{key:"c",label:"항목 C"}]})]},a))})};function Q(){var s,l;const[a,r]=$.useState("dashboard"),o=[{key:"dashboard",label:"대시보드",icon:"📊"},{key:"users",label:"사용자",icon:"👥",badge:5},{key:"products",label:"상품",icon:"📦",badge:23},{key:"orders",label:"주문",icon:"🛍️",badge:2},{key:"analytics",label:"분석",icon:"📈"},{key:"settings",label:"설정",icon:"⚙️"}];return n.jsxs("div",{style:{display:"flex",gap:"24px",fontFamily:"system-ui"},children:[n.jsx(i,{items:o.map(t=>({...t,active:t.key===a,onClick:()=>r(t.key)})),style:{minWidth:"220px"},color:"#3b82f6"}),n.jsx("div",{style:{padding:"20px",background:"#f9fafb",borderRadius:"8px",flex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx("div",{style:{fontSize:"32px",marginBottom:"8px"},children:(s=o.find(t=>t.key===a))==null?void 0:s.icon}),n.jsx("div",{style:{fontSize:"16px",fontWeight:700,color:"#111"},children:(l=o.find(t=>t.key===a))==null?void 0:l.label}),n.jsx("div",{style:{fontSize:"13px",color:"#9ca3af",marginTop:"4px"},children:"페이지 콘텐츠"})]})})]})}const f={name:"인터랙티브 네비게이션",parameters:{docs:{description:{story:"클릭으로 활성 항목을 변경하는 네비게이션 예시입니다."}}},render:()=>n.jsx(Q,{})};var x,g,h;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '기본',
  args: {
    items: navItems,
    style: {
      maxWidth: '280px'
    }
  }
}`,...(h=(g=d.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,k,S;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '변형 비교',
  parameters: {
    docs: {
      description: {
        story: 'default / flush / bordered / separated 네 가지 변형입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    fontFamily: 'system-ui'
  }}>
      {(['default', 'flush', 'bordered', 'separated'] as const).map(variant => <div key={variant} style={{
      minWidth: '200px'
    }}>
          <div style={{
        fontSize: '12px',
        color: '#9ca3af',
        marginBottom: '8px',
        fontWeight: 600
      }}>{variant}</div>
          <ListGroup variant={variant} items={[{
        key: '1',
        label: '항목 A',
        active: true
      }, {
        key: '2',
        label: '항목 B'
      }, {
        key: '3',
        label: '항목 C'
      }]} />
        </div>)}
    </div>
}`,...(S=(k=p.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var j,W,z;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '배지 포함',
  parameters: {
    docs: {
      description: {
        story: '알림 수, 상태 등 배지를 표시합니다.'
      }
    }
  },
  args: {
    items: [{
      key: 'inbox',
      label: '받은 편지함',
      icon: '📥',
      badge: 23,
      active: true
    }, {
      key: 'sent',
      label: '보낸 편지함',
      icon: '📤',
      badge: 0
    }, {
      key: 'draft',
      label: '임시저장',
      icon: '📝',
      badge: 5
    }, {
      key: 'spam',
      label: '스팸',
      icon: '🚫',
      badge: 12
    }, {
      key: 'trash',
      label: '휴지통',
      icon: '🗑️',
      badge: 3,
      disabled: true
    }],
    style: {
      maxWidth: '280px'
    }
  }
}`,...(z=(W=c.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var w,C,L;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '설명 포함',
  parameters: {
    docs: {
      description: {
        story: '항목에 보조 설명이 있는 목록입니다.'
      }
    }
  },
  args: {
    items: [{
      key: 'free',
      label: '무료 플랜',
      description: '기본 기능 제공',
      icon: '🆓',
      active: true
    }, {
      key: 'pro',
      label: 'Pro 플랜',
      description: '월 ₩9,900 · 고급 기능',
      icon: '⭐'
    }, {
      key: 'team',
      label: 'Team 플랜',
      description: '월 ₩29,900 · 팀 기능',
      icon: '👥'
    }, {
      key: 'enterprise',
      label: 'Enterprise',
      description: '문의 필요',
      icon: '🏢',
      disabled: true
    }],
    style: {
      maxWidth: '300px'
    }
  }
}`,...(L=(C=m.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var B,I,T;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '번호 목록',
  parameters: {
    docs: {
      description: {
        story: 'numbered=true로 순서 번호를 표시합니다.'
      }
    }
  },
  args: {
    numbered: true,
    items: [{
      key: '1',
      label: 'React 설치',
      active: true
    }, {
      key: '2',
      label: '프로젝트 구조 설정'
    }, {
      key: '3',
      label: '컴포넌트 작성'
    }, {
      key: '4',
      label: '테스트 작성'
    }, {
      key: '5',
      label: '배포'
    }],
    style: {
      maxWidth: '260px'
    }
  }
}`,...(T=(I=u.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var G,A,D;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '크기 변형',
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    fontFamily: 'system-ui'
  }}>
      {(['sm', 'md', 'lg'] as const).map(size => <div key={size} style={{
      minWidth: '160px'
    }}>
          <div style={{
        fontSize: '12px',
        color: '#9ca3af',
        marginBottom: '8px',
        fontWeight: 600
      }}>Size: {size}</div>
          <ListGroup size={size} items={[{
        key: 'a',
        label: '항목 A',
        active: true
      }, {
        key: 'b',
        label: '항목 B'
      }, {
        key: 'c',
        label: '항목 C'
      }]} />
        </div>)}
    </div>
}`,...(D=(A=b.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var F,R,V;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '인터랙티브 네비게이션',
  parameters: {
    docs: {
      description: {
        story: '클릭으로 활성 항목을 변경하는 네비게이션 예시입니다.'
      }
    }
  },
  render: () => <InteractiveListGroupDemo />
}`,...(V=(R=f.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};const ne=["Default","VariantComparison","WithBadges","WithDescriptions","Numbered","SizeVariants","Interactive"];export{d as Default,f as Interactive,u as Numbered,b as SizeVariants,p as VariantComparison,c as WithBadges,m as WithDescriptions,ne as __namedExportsOrder,ee as default};
