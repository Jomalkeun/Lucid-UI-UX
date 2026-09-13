import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as E}from"./reference-types-4ftiVeOu.js";import{r as I}from"./index-BxXVWNx3.js";import{c as F}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const n=I.forwardRef(({className:r,inline:W=!1,children:v,...T},D)=>e.jsx("div",{ref:D,className:F(W?"inline-flex":"flex","items-center justify-center",r),...T,children:v}));n.displayName="Center";n.__docgenInfo={description:"",methods:[],displayName:"Center",props:{inline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const N=E([{library:"Chakra UI",component:"Center",url:"https://www.chakra-ui.com/docs/components/center",usedFor:["comparison"],relation:"compared"}]),O={title:"Layout/Primitives/Center",component:n,tags:["autodocs","ref:chakra-ui"],parameters:{references:N,docs:{description:{component:"\n## Center\n\n자식 요소를 수평·수직 중앙에 배치하는 단순 레이아웃 컴포넌트입니다.\n`display: flex; align-items: center; justify-content: center`를 래핑합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `inline` | `boolean` | `false` | `inline-flex` 사용 |\n| `style` | `CSSProperties` | - | 추가 스타일 |\n        "}}},argTypes:{inline:{control:"boolean",description:"inline-flex 사용",table:{category:"Layout"}}},args:{inline:!1}},t={name:"기본",parameters:{docs:{description:{story:"정사각형 영역 안에서 텍스트를 중앙에 배치합니다."}}},render:r=>e.jsx(n,{...r,style:{width:"200px",height:"120px",background:"#eff6ff",borderRadius:"12px"},children:e.jsx("span",{style:{fontSize:"14px",fontWeight:600,color:"#1d4ed8"},children:"중앙 정렬"})})},s={name:"아이콘 + 텍스트",parameters:{docs:{description:{story:"아이콘과 텍스트를 수직으로 중앙 배치합니다."}}},render:()=>e.jsxs(n,{style:{width:"160px",height:"160px",background:"#f0fdf4",borderRadius:"16px",flexDirection:"column",gap:"8px"},children:[e.jsx("span",{style:{fontSize:"40px"},children:"✅"}),e.jsx("span",{style:{fontSize:"14px",fontWeight:600,color:"#15803d"},children:"완료"})]})},o={name:"로딩 스피너",parameters:{docs:{description:{story:"화면 중앙에 로딩 스피너를 배치합니다."}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"}),e.jsx(n,{style:{height:"200px",background:"#f8f9fa",borderRadius:"12px"},children:e.jsx("div",{style:{width:"40px",height:"40px",border:"4px solid #e5e7eb",borderTopColor:"#3b82f6",borderRadius:"50%",animation:"spin 0.8s linear infinite"}})})]})},i={name:"빈 상태 (Empty State)",parameters:{docs:{description:{story:"데이터가 없을 때 중앙에 표시하는 Empty State입니다."}}},render:()=>e.jsxs(n,{style:{height:"280px",background:"#f8f9fa",borderRadius:"12px",flexDirection:"column",gap:"12px"},children:[e.jsx("span",{style:{fontSize:"48px"},children:"📭"}),e.jsx("span",{style:{fontSize:"18px",fontWeight:700,color:"#374151"},children:"데이터가 없습니다"}),e.jsx("span",{style:{fontSize:"13px",color:"#9ca3af"},children:"첫 번째 항목을 추가해보세요."}),e.jsx("button",{style:{marginTop:"8px",padding:"8px 20px",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"13px",fontWeight:600},children:"항목 추가"})]})},a={name:"inline (배지 활용)",parameters:{docs:{description:{story:"inline-flex 모드로 배지나 아이콘 버튼에 활용합니다."}}},render:()=>e.jsxs("div",{style:{fontFamily:"system-ui",display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(n,{inline:!0,style:{width:"32px",height:"32px",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"12px",fontWeight:700},children:"3"}),e.jsx(n,{inline:!0,style:{width:"36px",height:"36px",background:"#eff6ff",borderRadius:"8px",fontSize:"18px"},children:"🔔"}),e.jsx(n,{inline:!0,style:{padding:"4px 12px",background:"#f0fdf4",borderRadius:"999px",fontSize:"12px",fontWeight:600,color:"#15803d"},children:"활성"})]})},p={name:"그리드 내 Center",parameters:{docs:{description:{story:"그리드 각 셀을 Center로 구성한 레이아웃입니다."}}},render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"12px",fontFamily:"system-ui"},children:["📊 분석","📁 파일","👥 팀원","⚙️ 설정","💬 메시지","🔔 알림"].map(r=>e.jsxs(n,{style:{height:"80px",background:"#f8f9fa",borderRadius:"10px",border:"1px solid #e5e7eb",flexDirection:"column",gap:"4px",cursor:"pointer"},children:[e.jsx("span",{style:{fontSize:"22px"},children:r.split(" ")[0]}),e.jsx("span",{style:{fontSize:"12px",color:"#6b7280"},children:r.split(" ")[1]})]},r))})};var d,c,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '기본',
  parameters: {
    docs: {
      description: {
        story: '정사각형 영역 안에서 텍스트를 중앙에 배치합니다.'
      }
    }
  },
  render: args => <Center {...args} style={{
    width: '200px',
    height: '120px',
    background: '#eff6ff',
    borderRadius: '12px'
  }}>
      <span style={{
      fontSize: '14px',
      fontWeight: 600,
      color: '#1d4ed8'
    }}>중앙 정렬</span>
    </Center>
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var f,x,m;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '아이콘 + 텍스트',
  parameters: {
    docs: {
      description: {
        story: '아이콘과 텍스트를 수직으로 중앙 배치합니다.'
      }
    }
  },
  render: () => <Center style={{
    width: '160px',
    height: '160px',
    background: '#f0fdf4',
    borderRadius: '16px',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <span style={{
      fontSize: '40px'
    }}>✅</span>
      <span style={{
      fontSize: '14px',
      fontWeight: 600,
      color: '#15803d'
    }}>완료</span>
    </Center>
}`,...(m=(x=s.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var u,y,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '로딩 스피너',
  parameters: {
    docs: {
      description: {
        story: '화면 중앙에 로딩 스피너를 배치합니다.'
      }
    }
  },
  render: () => <>
      <style>{\`@keyframes spin { to { transform: rotate(360deg); } }\`}</style>
      <Center style={{
      height: '200px',
      background: '#f8f9fa',
      borderRadius: '12px'
    }}>
        <div style={{
        width: '40px',
        height: '40px',
        border: '4px solid #e5e7eb',
        borderTopColor: '#3b82f6',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite'
      }} />
      </Center>
    </>
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var h,b,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '빈 상태 (Empty State)',
  parameters: {
    docs: {
      description: {
        story: '데이터가 없을 때 중앙에 표시하는 Empty State입니다.'
      }
    }
  },
  render: () => <Center style={{
    height: '280px',
    background: '#f8f9fa',
    borderRadius: '12px',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <span style={{
      fontSize: '48px'
    }}>📭</span>
      <span style={{
      fontSize: '18px',
      fontWeight: 700,
      color: '#374151'
    }}>데이터가 없습니다</span>
      <span style={{
      fontSize: '13px',
      color: '#9ca3af'
    }}>첫 번째 항목을 추가해보세요.</span>
      <button style={{
      marginTop: '8px',
      padding: '8px 20px',
      background: '#3b82f6',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '13px',
      fontWeight: 600
    }}>
        항목 추가
      </button>
    </Center>
}`,...(S=(b=i.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var C,j,R;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'inline (배지 활용)',
  parameters: {
    docs: {
      description: {
        story: 'inline-flex 모드로 배지나 아이콘 버튼에 활용합니다.'
      }
    }
  },
  render: () => <div style={{
    fontFamily: 'system-ui',
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Center inline style={{
      width: '32px',
      height: '32px',
      background: '#ef4444',
      borderRadius: '50%',
      color: '#fff',
      fontSize: '12px',
      fontWeight: 700
    }}>
        3
      </Center>
      <Center inline style={{
      width: '36px',
      height: '36px',
      background: '#eff6ff',
      borderRadius: '8px',
      fontSize: '18px'
    }}>
        🔔
      </Center>
      <Center inline style={{
      padding: '4px 12px',
      background: '#f0fdf4',
      borderRadius: '999px',
      fontSize: '12px',
      fontWeight: 600,
      color: '#15803d'
    }}>
        활성
      </Center>
    </div>
}`,...(R=(j=a.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var k,z,w;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '그리드 내 Center',
  parameters: {
    docs: {
      description: {
        story: '그리드 각 셀을 Center로 구성한 레이아웃입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '12px',
    fontFamily: 'system-ui'
  }}>
      {['📊 분석', '📁 파일', '👥 팀원', '⚙️ 설정', '💬 메시지', '🔔 알림'].map(item => <Center key={item} style={{
      height: '80px',
      background: '#f8f9fa',
      borderRadius: '10px',
      border: '1px solid #e5e7eb',
      flexDirection: 'column',
      gap: '4px',
      cursor: 'pointer'
    }}>
          <span style={{
        fontSize: '22px'
      }}>{item.split(' ')[0]}</span>
          <span style={{
        fontSize: '12px',
        color: '#6b7280'
      }}>{item.split(' ')[1]}</span>
        </Center>)}
    </div>
}`,...(w=(z=p.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};const U=["Default","WithIcon","LoadingSpinner","EmptyState","Inline","GridCenters"];export{t as Default,i as EmptyState,p as GridCenters,a as Inline,o as LoadingSpinner,s as WithIcon,U as __namedExportsOrder,O as default};
