import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as K}from"./reference-types-4ftiVeOu.js";import{R as f}from"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";function n({children:r,orientation:a="horizontal",attached:h=!0,gap:N=0,style:H}){const g=a==="horizontal",j=f.Children.toArray(r),J=j.length;return e.jsx("div",{style:{display:"inline-flex",flexDirection:g?"row":"column",gap:h?0:N,...H},children:j.map((l,v)=>{if(!f.isValidElement(l))return l;const s=v===0,d=v===J-1,o={};h&&(g?(s||(o.borderLeftWidth=0),!s&&!d&&(o.borderRadius=0),s&&(o.borderRadius="8px 0 0 8px"),d&&(o.borderRadius="0 8px 8px 0")):(s||(o.borderTopWidth=0),!s&&!d&&(o.borderRadius=0),s&&(o.borderRadius="8px 8px 0 0"),d&&(o.borderRadius="0 0 8px 8px")));const O=l.props.style??{};return f.cloneElement(l,{style:{...O,...o}})})})}n.__docgenInfo={description:"",methods:[],displayName:"Group",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},attached:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},gap:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const M=K([{library:"daisyUI",component:"Join",url:"https://daisyui.com/components/join/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Group",url:"https://www.chakra-ui.com/docs/components/group",usedFor:["comparison"],relation:"compared"}]),$={title:"Layout/Primitives/Group",component:n,tags:["autodocs","ref:chakra-ui","ref:daisy-ui"],parameters:{references:M,docs:{description:{component:"\n## Group\n\n인접한 버튼, 입력 필드, 뱃지 등을 시각적으로 하나의 그룹으로 묶는 컴포넌트입니다.\n내부 요소 사이의 border-radius를 자동으로 조정해 연결된 모양을 만듭니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `orientation` | `'horizontal'\\|'vertical'` | `'horizontal'` | 방향 |\n| `attached` | `boolean` | `true` | 요소를 붙여서 표시 |\n| `gap` | `number` | `0` | 요소 간격 (attached=false 시) |\n        "}}},argTypes:{orientation:{control:"select",options:["horizontal","vertical"],table:{category:"Layout"}},attached:{control:"boolean",table:{category:"Appearance"}},gap:{control:{type:"range",min:0,max:16},table:{category:"Appearance"}}},args:{orientation:"horizontal",attached:!0,gap:0}},t={padding:"8px 16px",border:"1px solid #d1d5db",background:"#fff",cursor:"pointer",fontFamily:"system-ui",fontSize:"14px",color:"#374151",fontWeight:500},i={...t,background:"#3b82f6",color:"#fff",border:"1px solid #3b82f6"},p={name:"버튼 그룹 (Attached)",render:r=>e.jsx("div",{style:{padding:"24px",fontFamily:"system-ui"},children:e.jsxs(n,{...r,children:[e.jsx("button",{style:t,children:"이전"}),e.jsx("button",{style:t,children:"현재"}),e.jsx("button",{style:t,children:"다음"})]})})},c={name:"툴바 버튼 그룹",parameters:{docs:{description:{story:"텍스트 에디터 스타일의 툴바 버튼 그룹입니다."}}},render:()=>e.jsxs("div",{style:{padding:"24px",fontFamily:"system-ui",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs(n,{children:[e.jsx("button",{style:{...t,fontWeight:700},children:"B"}),e.jsx("button",{style:{...t,fontStyle:"italic"},children:"I"}),e.jsx("button",{style:{...t,textDecoration:"underline"},children:"U"})]}),e.jsxs(n,{children:[e.jsx("button",{style:t,children:"←"}),e.jsx("button",{style:t,children:"≡"}),e.jsx("button",{style:t,children:"→"})]}),e.jsxs(n,{children:[e.jsx("button",{style:i,children:"저장"}),e.jsx("button",{style:t,children:"미리보기"}),e.jsx("button",{style:t,children:"취소"})]})]})},u={name:"페이지네이션",parameters:{docs:{description:{story:"Group으로 만든 페이지네이션 컴포넌트입니다."}}},render:()=>e.jsx("div",{style:{padding:"24px",fontFamily:"system-ui",display:"flex",flexDirection:"column",gap:"16px"},children:e.jsxs(n,{children:[e.jsx("button",{style:{...t,fontSize:"16px"},children:"‹"}),[1,2,3,4,5].map(r=>e.jsx("button",{style:r===3?i:t,children:r},r)),e.jsx("button",{style:{...t,fontSize:"16px"},children:"›"})]})})},b={name:"인풋 그룹",parameters:{docs:{description:{story:"인풋과 버튼을 결합한 그룹입니다."}}},render:()=>e.jsxs("div",{style:{padding:"24px",fontFamily:"system-ui",display:"flex",flexDirection:"column",gap:"16px",maxWidth:"480px"},children:[e.jsxs(n,{children:[e.jsx("input",{placeholder:"검색어 입력",style:{...t,outline:"none",width:"260px"}}),e.jsx("button",{style:{...i},children:"🔍 검색"})]}),e.jsxs(n,{children:[e.jsx("span",{style:{...t,background:"#f3f4f6",cursor:"default"},children:"https://"}),e.jsx("input",{placeholder:"도메인 입력",style:{...t,outline:"none",width:"200px"}}),e.jsx("span",{style:{...t,background:"#f3f4f6",cursor:"default"},children:".com"})]})]})},y={name:"수직 그룹",parameters:{docs:{description:{story:"수직 방향 버튼 그룹입니다."}}},render:()=>e.jsxs("div",{style:{padding:"24px",fontFamily:"system-ui",display:"flex",gap:"24px"},children:[e.jsxs(n,{orientation:"vertical",children:[e.jsx("button",{style:t,children:"위로"}),e.jsx("button",{style:t,children:"중간"}),e.jsx("button",{style:t,children:"아래로"})]}),e.jsxs(n,{orientation:"vertical",children:[e.jsx("button",{style:i,children:"설정"}),e.jsx("button",{style:t,children:"내보내기"}),e.jsx("button",{style:{...t,color:"#ef4444",borderColor:"#fca5a5"},children:"삭제"})]})]})},m={name:"분리형 그룹 (Gap)",parameters:{docs:{description:{story:"attached=false 상태의 간격 있는 버튼 그룹입니다."}}},render:()=>e.jsx("div",{style:{padding:"24px",fontFamily:"system-ui",display:"flex",flexDirection:"column",gap:"16px"},children:e.jsxs(n,{attached:!1,gap:8,children:[e.jsx("button",{style:{...t,borderRadius:"8px",border:"1px solid #d1d5db"},children:"취소"}),e.jsx("button",{style:{...t,borderRadius:"8px",border:"1px solid #d1d5db"},children:"임시저장"}),e.jsx("button",{style:{...i,borderRadius:"8px"},children:"게시하기"})]})})},x={name:"색상 선택 그룹",parameters:{docs:{description:{story:"색상 팔레트를 버튼 그룹으로 구성한 예시입니다."}}},render:()=>{const r=["#3b82f6","#10b981","#ef4444","#f59e0b","#8b5cf6"];return e.jsxs("div",{style:{padding:"24px",fontFamily:"system-ui",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"4px"},children:"테마 색상"}),e.jsx(n,{children:r.map(a=>e.jsx("button",{style:{width:"40px",height:"40px",background:a,border:"1px solid rgba(0,0,0,0.1)",cursor:"pointer"},title:a},a))})]})}};var G,B,S;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '버튼 그룹 (Attached)',
  render: args => <div style={{
    padding: '24px',
    fontFamily: 'system-ui'
  }}>
      <Group {...args}>
        <button style={btnBase}>이전</button>
        <button style={btnBase}>현재</button>
        <button style={btnBase}>다음</button>
      </Group>
    </div>
}`,...(S=(B=p.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var D,F,R;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '툴바 버튼 그룹',
  parameters: {
    docs: {
      description: {
        story: '텍스트 에디터 스타일의 툴바 버튼 그룹입니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '24px',
    fontFamily: 'system-ui',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Group>
        <button style={{
        ...btnBase,
        fontWeight: 700
      }}>B</button>
        <button style={{
        ...btnBase,
        fontStyle: 'italic'
      }}>I</button>
        <button style={{
        ...btnBase,
        textDecoration: 'underline'
      }}>U</button>
      </Group>
      <Group>
        <button style={btnBase}>←</button>
        <button style={btnBase}>≡</button>
        <button style={btnBase}>→</button>
      </Group>
      <Group>
        <button style={btnPrimary}>저장</button>
        <button style={btnBase}>미리보기</button>
        <button style={btnBase}>취소</button>
      </Group>
    </div>
}`,...(R=(F=c.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var z,k,P;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '페이지네이션',
  parameters: {
    docs: {
      description: {
        story: 'Group으로 만든 페이지네이션 컴포넌트입니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '24px',
    fontFamily: 'system-ui',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Group>
        <button style={{
        ...btnBase,
        fontSize: '16px'
      }}>‹</button>
        {[1, 2, 3, 4, 5].map(n => <button key={n} style={n === 3 ? btnPrimary : btnBase}>{n}</button>)}
        <button style={{
        ...btnBase,
        fontSize: '16px'
      }}>›</button>
      </Group>
    </div>
}`,...(P=(k=u.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var w,T,C;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '인풋 그룹',
  parameters: {
    docs: {
      description: {
        story: '인풋과 버튼을 결합한 그룹입니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '24px',
    fontFamily: 'system-ui',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '480px'
  }}>
      <Group>
        <input placeholder="검색어 입력" style={{
        ...btnBase,
        outline: 'none',
        width: '260px'
      }} />
        <button style={{
        ...btnPrimary
      }}>🔍 검색</button>
      </Group>
      <Group>
        <span style={{
        ...btnBase,
        background: '#f3f4f6',
        cursor: 'default'
      }}>https://</span>
        <input placeholder="도메인 입력" style={{
        ...btnBase,
        outline: 'none',
        width: '200px'
      }} />
        <span style={{
        ...btnBase,
        background: '#f3f4f6',
        cursor: 'default'
      }}>.com</span>
      </Group>
    </div>
}`,...(C=(T=b.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var I,W,A;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '수직 그룹',
  parameters: {
    docs: {
      description: {
        story: '수직 방향 버튼 그룹입니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '24px',
    fontFamily: 'system-ui',
    display: 'flex',
    gap: '24px'
  }}>
      <Group orientation="vertical">
        <button style={btnBase}>위로</button>
        <button style={btnBase}>중간</button>
        <button style={btnBase}>아래로</button>
      </Group>
      <Group orientation="vertical">
        <button style={btnPrimary}>설정</button>
        <button style={btnBase}>내보내기</button>
        <button style={{
        ...btnBase,
        color: '#ef4444',
        borderColor: '#fca5a5'
      }}>삭제</button>
      </Group>
    </div>
}`,...(A=(W=y.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var V,q,E;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '분리형 그룹 (Gap)',
  parameters: {
    docs: {
      description: {
        story: 'attached=false 상태의 간격 있는 버튼 그룹입니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '24px',
    fontFamily: 'system-ui',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Group attached={false} gap={8}>
        <button style={{
        ...btnBase,
        borderRadius: '8px',
        border: '1px solid #d1d5db'
      }}>취소</button>
        <button style={{
        ...btnBase,
        borderRadius: '8px',
        border: '1px solid #d1d5db'
      }}>임시저장</button>
        <button style={{
        ...btnPrimary,
        borderRadius: '8px'
      }}>게시하기</button>
      </Group>
    </div>
}`,...(E=(q=m.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var L,U,_;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '색상 선택 그룹',
  parameters: {
    docs: {
      description: {
        story: '색상 팔레트를 버튼 그룹으로 구성한 예시입니다.'
      }
    }
  },
  render: () => {
    const colors = ['#3b82f6', '#10b981', '#ef4444', '#f59e0b', '#8b5cf6'];
    return <div style={{
      padding: '24px',
      fontFamily: 'system-ui',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <div style={{
        fontSize: '12px',
        color: '#9ca3af',
        marginBottom: '4px'
      }}>테마 색상</div>
        <Group>
          {colors.map(c => <button key={c} style={{
          width: '40px',
          height: '40px',
          background: c,
          border: '1px solid rgba(0,0,0,0.1)',
          cursor: 'pointer'
        }} title={c} />)}
        </Group>
      </div>;
  }
}`,...(_=(U=x.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};const ee=["Default","ButtonToolbar","Pagination","InputGroup","Vertical","Detached","ColorGroup"];export{c as ButtonToolbar,x as ColorGroup,p as Default,m as Detached,b as InputGroup,u as Pagination,y as Vertical,ee as __namedExportsOrder,$ as default};
