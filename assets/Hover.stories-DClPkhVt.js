import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as W}from"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";function i({children:r,disabled:o=!1,style:s,className:n}){const[z,c]=W.useState(!1);return e.jsx("div",{className:n,style:{display:"contents",...s},onMouseEnter:()=>{o||c(!0)},onMouseLeave:()=>c(!1),children:r(o?!1:z)})}i.__docgenInfo={description:"",methods:[],displayName:"Hover",props:{children:{required:!0,tsType:{name:"signature",type:"function",raw:"(hovered: boolean) => ReactNode",signature:{arguments:[{type:{name:"boolean"},name:"hovered"}],return:{name:"ReactNode"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const T={title:"Atoms/Primitives/Hover",component:i,tags:["autodocs","ref:vuetify"],parameters:{docs:{description:{component:`
## Hover

자식 요소의 호버 상태를 감지하고 슬롯으로 전달하는 헤드리스 유틸리티 컴포넌트입니다.
호버 상태에 따른 조건부 렌더링, 스타일 변경, 애니메이션 트리거 등을 선언적으로 구현합니다.

render prop 패턴을 사용하여 \`children\`이 \`(hovered: boolean) => ReactNode\` 형태입니다.

---

### Props

| Prop | Type | Default | 설명 |
|---|---|---|---|
| \`children\` | \`(hovered: boolean) => ReactNode\` | - | 호버 상태를 받는 렌더 함수 |
| \`disabled\` | \`boolean\` | \`false\` | 호버 감지 비활성화 |
        `}}},argTypes:{disabled:{control:"boolean",table:{category:"Behavior"}}},args:{disabled:!1}},t={name:"기본",render:r=>e.jsx("div",{style:{padding:"32px",fontFamily:"system-ui"},children:e.jsx(i,{...r,children:o=>e.jsx("div",{style:{padding:"24px 32px",background:o?"#3b82f6":"#f3f4f6",color:o?"#fff":"#374151",borderRadius:"12px",transition:"all 0.2s",cursor:"pointer",fontSize:"15px",fontWeight:600},children:o?"🎉 호버 상태입니다!":"🖱️ 여기에 마우스를 올려보세요"})})})},a={name:"카드 호버 효과",parameters:{docs:{description:{story:"카드에 호버 효과를 적용하는 예시입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"16px",padding:"32px",fontFamily:"system-ui",flexWrap:"wrap"},children:[{icon:"🚀",title:"빠른 성능",desc:"Vite 기반의 초고속 빌드"},{icon:"🎨",title:"아름다운 UI",desc:"정교하게 디자인된 컴포넌트"},{icon:"🔒",title:"타입 안전",desc:"TypeScript 완전 지원"}].map(({icon:r,title:o,desc:s})=>e.jsx(i,{children:n=>e.jsxs("div",{style:{width:"180px",padding:"20px",borderRadius:"14px",background:n?"#3b82f6":"#fff",border:`1px solid ${n?"#3b82f6":"#e5e7eb"}`,boxShadow:n?"0 12px 32px rgba(59,130,246,0.3)":"0 2px 8px rgba(0,0,0,0.06)",transform:n?"translateY(-4px)":"none",transition:"all 0.25s",cursor:"pointer"},children:[e.jsx("div",{style:{fontSize:"36px",marginBottom:"10px"},children:r}),e.jsx("div",{style:{fontSize:"15px",fontWeight:700,color:n?"#fff":"#111",marginBottom:"6px"},children:o}),e.jsx("div",{style:{fontSize:"13px",color:n?"rgba(255,255,255,0.85)":"#6b7280"},children:s})]})},o))})},d={name:"이미지 오버레이 리빌",parameters:{docs:{description:{story:"호버 시 이미지 위에 오버레이가 나타나는 예시입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"12px",padding:"32px",fontFamily:"system-ui",flexWrap:"wrap"},children:[{color:"#1e40af",emoji:"🏔️",label:"알프스 산맥"},{color:"#166534",emoji:"🌴",label:"열대 우림"},{color:"#7c2d12",emoji:"🏜️",label:"사막 풍경"}].map(({color:r,emoji:o,label:s})=>e.jsx(i,{children:n=>e.jsxs("div",{style:{position:"relative",width:"180px",height:"140px",borderRadius:"12px",background:r,overflow:"hidden",cursor:"pointer"},children:[e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",fontSize:"56px"},children:o}),e.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.65)",display:"flex",alignItems:"center",justifyContent:"center",opacity:n?1:0,transition:"opacity 0.25s"},children:e.jsx("span",{style:{color:"#fff",fontWeight:700,fontSize:"15px"},children:s})})]})},s))})},p={name:"조건부 렌더링",parameters:{docs:{description:{story:"호버 상태에 따라 다른 요소를 보여주는 예시입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"16px",padding:"32px",fontFamily:"system-ui",flexWrap:"wrap",alignItems:"flex-start"},children:["삭제","편집","공유"].map((r,o)=>{const s=["#ef4444","#3b82f6","#10b981"];return e.jsx(i,{children:n=>e.jsxs("button",{style:{display:"flex",alignItems:"center",gap:n?"6px":"0",padding:"8px",background:n?`${s[o]}15`:"transparent",border:`1px solid ${n?s[o]:"#e5e7eb"}`,borderRadius:"8px",cursor:"pointer",color:n?s[o]:"#9ca3af",transition:"all 0.2s",overflow:"hidden",width:n?"90px":"36px"},children:[e.jsx("span",{children:["🗑️","✏️","🔗"][o]}),e.jsx("span",{style:{fontSize:"13px",fontWeight:600,whiteSpace:"nowrap",opacity:n?1:0,transition:"opacity 0.15s 0.05s"},children:r})]})},r)})})},l={name:"비활성화",parameters:{docs:{description:{story:"disabled=true 시 호버 감지가 비활성화됩니다."}}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",padding:"32px",fontFamily:"system-ui"},children:[e.jsx(i,{disabled:!1,children:r=>e.jsxs("div",{style:{padding:"16px 24px",background:r?"#3b82f6":"#f3f4f6",color:r?"#fff":"#374151",borderRadius:"8px",transition:"all 0.2s"},children:["활성: ",r?"호버됨":"기본"]})}),e.jsx(i,{disabled:!0,children:r=>e.jsxs("div",{style:{padding:"16px 24px",background:"#f3f4f6",color:"#9ca3af",borderRadius:"8px",cursor:"not-allowed"},children:["비활성화: ",r?"호버됨":"항상 기본"]})})]})};var f,x,m;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '기본',
  render: args => <div style={{
    padding: '32px',
    fontFamily: 'system-ui'
  }}>
      <Hover {...args}>
        {hovered => <div style={{
        padding: '24px 32px',
        background: hovered ? '#3b82f6' : '#f3f4f6',
        color: hovered ? '#fff' : '#374151',
        borderRadius: '12px',
        transition: 'all 0.2s',
        cursor: 'pointer',
        fontSize: '15px',
        fontWeight: 600
      }}>
            {hovered ? '🎉 호버 상태입니다!' : '🖱️ 여기에 마우스를 올려보세요'}
          </div>}
      </Hover>
    </div>
}`,...(m=(x=t.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var y,u,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '카드 호버 효과',
  parameters: {
    docs: {
      description: {
        story: '카드에 호버 효과를 적용하는 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    padding: '32px',
    fontFamily: 'system-ui',
    flexWrap: 'wrap'
  }}>
      {[{
      icon: '🚀',
      title: '빠른 성능',
      desc: 'Vite 기반의 초고속 빌드'
    }, {
      icon: '🎨',
      title: '아름다운 UI',
      desc: '정교하게 디자인된 컴포넌트'
    }, {
      icon: '🔒',
      title: '타입 안전',
      desc: 'TypeScript 완전 지원'
    }].map(({
      icon,
      title,
      desc
    }) => <Hover key={title}>
          {hovered => <div style={{
        width: '180px',
        padding: '20px',
        borderRadius: '14px',
        background: hovered ? '#3b82f6' : '#fff',
        border: \`1px solid \${hovered ? '#3b82f6' : '#e5e7eb'}\`,
        boxShadow: hovered ? '0 12px 32px rgba(59,130,246,0.3)' : '0 2px 8px rgba(0,0,0,0.06)',
        transform: hovered ? 'translateY(-4px)' : 'none',
        transition: 'all 0.25s',
        cursor: 'pointer'
      }}>
              <div style={{
          fontSize: '36px',
          marginBottom: '10px'
        }}>{icon}</div>
              <div style={{
          fontSize: '15px',
          fontWeight: 700,
          color: hovered ? '#fff' : '#111',
          marginBottom: '6px'
        }}>{title}</div>
              <div style={{
          fontSize: '13px',
          color: hovered ? 'rgba(255,255,255,0.85)' : '#6b7280'
        }}>{desc}</div>
            </div>}
        </Hover>)}
    </div>
}`,...(v=(u=a.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var g,b,h;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '이미지 오버레이 리빌',
  parameters: {
    docs: {
      description: {
        story: '호버 시 이미지 위에 오버레이가 나타나는 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    padding: '32px',
    fontFamily: 'system-ui',
    flexWrap: 'wrap'
  }}>
      {[{
      color: '#1e40af',
      emoji: '🏔️',
      label: '알프스 산맥'
    }, {
      color: '#166534',
      emoji: '🌴',
      label: '열대 우림'
    }, {
      color: '#7c2d12',
      emoji: '🏜️',
      label: '사막 풍경'
    }].map(({
      color,
      emoji,
      label
    }) => <Hover key={label}>
          {hovered => <div style={{
        position: 'relative',
        width: '180px',
        height: '140px',
        borderRadius: '12px',
        background: color,
        overflow: 'hidden',
        cursor: 'pointer'
      }}>
              <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          fontSize: '56px'
        }}>{emoji}</div>
              <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.65)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.25s'
        }}>
                <span style={{
            color: '#fff',
            fontWeight: 700,
            fontSize: '15px'
          }}>{label}</span>
              </div>
            </div>}
        </Hover>)}
    </div>
}`,...(h=(b=d.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var j,S,w;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '조건부 렌더링',
  parameters: {
    docs: {
      description: {
        story: '호버 상태에 따라 다른 요소를 보여주는 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    padding: '32px',
    fontFamily: 'system-ui',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  }}>
      {['삭제', '편집', '공유'].map((action, i) => {
      const colors = ['#ef4444', '#3b82f6', '#10b981'];
      return <Hover key={action}>
            {hovered => <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: hovered ? '6px' : '0',
          padding: '8px',
          background: hovered ? \`\${colors[i]}15\` : 'transparent',
          border: \`1px solid \${hovered ? colors[i] : '#e5e7eb'}\`,
          borderRadius: '8px',
          cursor: 'pointer',
          color: hovered ? colors[i] : '#9ca3af',
          transition: 'all 0.2s',
          overflow: 'hidden',
          width: hovered ? '90px' : '36px'
        }}>
                <span>{['🗑️', '✏️', '🔗'][i]}</span>
                <span style={{
            fontSize: '13px',
            fontWeight: 600,
            whiteSpace: 'nowrap',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.15s 0.05s'
          }}>{action}</span>
              </button>}
          </Hover>;
    })}
    </div>
}`,...(w=(S=p.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var R,H,k;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '비활성화',
  parameters: {
    docs: {
      description: {
        story: 'disabled=true 시 호버 감지가 비활성화됩니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    padding: '32px',
    fontFamily: 'system-ui'
  }}>
      <Hover disabled={false}>
        {hovered => <div style={{
        padding: '16px 24px',
        background: hovered ? '#3b82f6' : '#f3f4f6',
        color: hovered ? '#fff' : '#374151',
        borderRadius: '8px',
        transition: 'all 0.2s'
      }}>
            활성: {hovered ? '호버됨' : '기본'}
          </div>}
      </Hover>
      <Hover disabled={true}>
        {hovered => <div style={{
        padding: '16px 24px',
        background: '#f3f4f6',
        color: '#9ca3af',
        borderRadius: '8px',
        cursor: 'not-allowed'
      }}>
            비활성화: {hovered ? '호버됨' : '항상 기본'}
          </div>}
      </Hover>
    </div>
}`,...(k=(H=l.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};const N=["Default","CardHover","ImageReveal","ConditionalRender","Disabled"];export{a as CardHover,p as ConditionalRender,t as Default,l as Disabled,d as ImageReveal,N as __namedExportsOrder,T as default};
