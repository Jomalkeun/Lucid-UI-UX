import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-BxXVWNx3.js";import{d as D}from"./reference-types-4ftiVeOu.js";import{c as O}from"./index-CkIaN0ex.js";import{c as W}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const _=O(["inline-flex items-center justify-center rounded-md shrink-0 font-bold leading-none transition-colors duration-150","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1","disabled:cursor-not-allowed"].join(" "),{variants:{size:{xs:"w-5 h-5 text-[10px]",sm:"w-6 h-6 text-xs",md:"w-8 h-8 text-sm",lg:"w-10 h-10 text-lg"},variant:{subtle:"bg-transparent text-krds-gray-50 hover:bg-krds-gray-20 disabled:bg-krds-gray-10 disabled:text-krds-gray-30",ghost:"bg-transparent text-krds-gray-50 hover:text-krds-gray-70 disabled:text-krds-gray-30",solid:"bg-krds-gray-70 text-krds-white hover:bg-krds-gray-80 disabled:bg-krds-gray-20 disabled:text-krds-gray-40"}},defaultVariants:{size:"md",variant:"subtle"}}),s=x.forwardRef(({size:n,variant:o,disabled:t=!1,"aria-label":c="닫기",className:m,...V},A)=>e.jsx("button",{ref:A,type:"button","aria-label":c,disabled:t,className:W(_({size:n,variant:o}),m),...V,children:"✕"}));s.displayName="CloseButton";s.__docgenInfo={description:"",methods:[],displayName:"CloseButton",props:{"aria-label":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'닫기'",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["VariantProps"]};const $=D([{library:"Bootstrap",component:"Close button",url:"https://getbootstrap.com/docs/5.3/components/close-button/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Close Button",url:"https://www.chakra-ui.com/docs/components/close-button",usedFor:["comparison"],relation:"compared"}]),M={title:"Atoms/Inputs/CloseButton",component:s,tags:["autodocs","ref:chakra-ui","ref:bootstrap"],parameters:{references:$,docs:{description:{component:"\n## CloseButton\n\n닫기(✕) 아이콘 전용 버튼입니다. 모달, 토스트, 알림 등 닫기 액션에 특화된 컴포넌트로,\n범용 IconButton과 달리 닫기 의미론에 맞는 기본 스타일과 `aria-label`을 제공합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `size` | `'xs'\\|'sm'\\|'md'\\|'lg'` | `'md'` | 크기 |\n| `variant` | `'subtle'\\|'ghost'\\|'solid'` | `'subtle'` | 변형 |\n| `disabled` | `boolean` | `false` | 비활성화 |\n| `onClick` | `() => void` | - | 클릭 콜백 |\n        "}}},argTypes:{size:{control:"select",options:["xs","sm","md","lg"],table:{category:"Appearance"}},variant:{control:"select",options:["subtle","ghost","solid"],table:{category:"Appearance"}},disabled:{control:"boolean",table:{category:"State"}}},args:{size:"md",variant:"subtle",disabled:!1}},r={name:"기본",render:n=>e.jsx("div",{style:{padding:"16px"},children:e.jsx(s,{...n,onClick:()=>alert("닫기 클릭")})})},a={name:"크기 변형",parameters:{docs:{description:{story:"xs, sm, md, lg 크기 비교입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"12px",alignItems:"center",padding:"16px",fontFamily:"system-ui"},children:["xs","sm","md","lg"].map(n=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(s,{size:n}),e.jsx("div",{style:{fontSize:"11px",color:"#9ca3af",marginTop:"6px"},children:n})]},n))})},i={name:"변형 비교",parameters:{docs:{description:{story:"subtle, ghost, solid 변형 비교입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"12px",alignItems:"center",padding:"16px",fontFamily:"system-ui"},children:["subtle","ghost","solid"].map(n=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(s,{variant:n}),e.jsx("div",{style:{fontSize:"11px",color:"#9ca3af",marginTop:"6px"},children:n})]},n))})},d={name:"모달 내 활용",parameters:{docs:{description:{story:"모달 헤더에 CloseButton을 배치한 예시입니다."}}},render:()=>{const[n,o]=x.useState(!0);return e.jsxs("div",{style:{fontFamily:"system-ui"},children:[!n&&e.jsx("button",{onClick:()=>o(!0),style:{padding:"8px 16px",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer"},children:"모달 다시 열기"}),n&&e.jsxs("div",{style:{border:"1px solid #e5e7eb",borderRadius:"12px",overflow:"hidden",maxWidth:"360px",boxShadow:"0 8px 32px rgba(0,0,0,0.12)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px",borderBottom:"1px solid #f0f0f0"},children:[e.jsx("h3",{style:{margin:0,fontSize:"16px",fontWeight:700,color:"#111"},children:"모달 제목"}),e.jsx(s,{onClick:()=>o(!1)})]}),e.jsx("div",{style:{padding:"16px",fontSize:"14px",color:"#6b7280",lineHeight:1.6},children:"CloseButton은 모달, 드로어, 팝오버의 닫기 버튼으로 사용됩니다."})]})]})}},l={name:"토스트 내 활용",parameters:{docs:{description:{story:"토스트 알림에 CloseButton을 배치한 예시입니다."}}},render:()=>{const[n,o]=x.useState([{id:1,msg:"파일이 성공적으로 저장되었습니다.",color:"#10b981"},{id:2,msg:"네트워크 오류가 발생했습니다.",color:"#ef4444"},{id:3,msg:"새 업데이트가 있습니다.",color:"#3b82f6"}]);return e.jsxs("div",{style:{fontFamily:"system-ui",display:"flex",flexDirection:"column",gap:"8px"},children:[n.map(t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"12px 14px",background:"#fff",border:`1px solid ${t.color}30`,borderLeft:`4px solid ${t.color}`,borderRadius:"8px",boxShadow:"0 2px 8px rgba(0,0,0,0.08)"},children:[e.jsx("span",{style:{fontSize:"13px",color:"#374151",flex:1},children:t.msg}),e.jsx(s,{size:"sm",onClick:()=>o(c=>c.filter(m=>m.id!==t.id))})]},t.id)),n.length===0&&e.jsx("p",{style:{color:"#9ca3af",fontSize:"13px"},children:"모든 토스트가 닫혔습니다."})]})}},p={name:"비활성화",parameters:{docs:{description:{story:"비활성화 상태의 CloseButton입니다."}}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",padding:"16px"},children:[e.jsx(s,{disabled:!0}),e.jsx(s,{disabled:!0,size:"lg",variant:"solid"})]})};var u,g,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '기본',
  render: args => <div style={{
    padding: '16px'
  }}>
      <CloseButton {...args} onClick={() => alert('닫기 클릭')} />
    </div>
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,b,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '크기 변형',
  parameters: {
    docs: {
      description: {
        story: 'xs, sm, md, lg 크기 비교입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    padding: '16px',
    fontFamily: 'system-ui'
  }}>
      {(['xs', 'sm', 'md', 'lg'] as const).map(size => <div key={size} style={{
      textAlign: 'center'
    }}>
          <CloseButton size={size} />
          <div style={{
        fontSize: '11px',
        color: '#9ca3af',
        marginTop: '6px'
      }}>{size}</div>
        </div>)}
    </div>
}`,...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var h,C,j;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '변형 비교',
  parameters: {
    docs: {
      description: {
        story: 'subtle, ghost, solid 변형 비교입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    padding: '16px',
    fontFamily: 'system-ui'
  }}>
      {(['subtle', 'ghost', 'solid'] as const).map(variant => <div key={variant} style={{
      textAlign: 'center'
    }}>
          <CloseButton variant={variant} />
          <div style={{
        fontSize: '11px',
        color: '#9ca3af',
        marginTop: '6px'
      }}>{variant}</div>
        </div>)}
    </div>
}`,...(j=(C=i.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var k,S,z;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '모달 내 활용',
  parameters: {
    docs: {
      description: {
        story: '모달 헤더에 CloseButton을 배치한 예시입니다.'
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(true);
    return <div style={{
      fontFamily: 'system-ui'
    }}>
        {!open && <button onClick={() => setOpen(true)} style={{
        padding: '8px 16px',
        background: '#3b82f6',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>
            모달 다시 열기
          </button>}
        {open && <div style={{
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        overflow: 'hidden',
        maxWidth: '360px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.12)'
      }}>
            <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px',
          borderBottom: '1px solid #f0f0f0'
        }}>
              <h3 style={{
            margin: 0,
            fontSize: '16px',
            fontWeight: 700,
            color: '#111'
          }}>모달 제목</h3>
              <CloseButton onClick={() => setOpen(false)} />
            </div>
            <div style={{
          padding: '16px',
          fontSize: '14px',
          color: '#6b7280',
          lineHeight: 1.6
        }}>
              CloseButton은 모달, 드로어, 팝오버의 닫기 버튼으로 사용됩니다.
            </div>
          </div>}
      </div>;
  }
}`,...(z=(S=d.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var B,w,I;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '토스트 내 활용',
  parameters: {
    docs: {
      description: {
        story: '토스트 알림에 CloseButton을 배치한 예시입니다.'
      }
    }
  },
  render: () => {
    const [toasts, setToasts] = useState([{
      id: 1,
      msg: '파일이 성공적으로 저장되었습니다.',
      color: '#10b981'
    }, {
      id: 2,
      msg: '네트워크 오류가 발생했습니다.',
      color: '#ef4444'
    }, {
      id: 3,
      msg: '새 업데이트가 있습니다.',
      color: '#3b82f6'
    }]);
    return <div style={{
      fontFamily: 'system-ui',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        {toasts.map(t => <div key={t.id} style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '12px 14px',
        background: '#fff',
        border: \`1px solid \${t.color}30\`,
        borderLeft: \`4px solid \${t.color}\`,
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
      }}>
            <span style={{
          fontSize: '13px',
          color: '#374151',
          flex: 1
        }}>{t.msg}</span>
            <CloseButton size="sm" onClick={() => setToasts(p => p.filter(x => x.id !== t.id))} />
          </div>)}
        {toasts.length === 0 && <p style={{
        color: '#9ca3af',
        fontSize: '13px'
      }}>모든 토스트가 닫혔습니다.</p>}
      </div>;
  }
}`,...(I=(w=l.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var T,F,R;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '비활성화',
  parameters: {
    docs: {
      description: {
        story: '비활성화 상태의 CloseButton입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    padding: '16px'
  }}>
      <CloseButton disabled />
      <CloseButton disabled size="lg" variant="solid" />
    </div>
}`,...(R=(F=p.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};const U=["Default","SizeVariants","VariantComparison","InModal","InToast","Disabled"];export{r as Default,p as Disabled,d as InModal,l as InToast,a as SizeVariants,i as VariantComparison,U as __namedExportsOrder,M as default};
