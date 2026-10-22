import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as Q}from"./reference-types-CC3VHbJD.js";import{R as a}from"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";function n({children:o,orientation:d="horizontal",attached:j=!0,gap:M=0,style:O}){const v=d==="horizontal",G=i=>a.Children.toArray(i).flatMap(s=>a.isValidElement(s)&&s.type===a.Fragment?G(s.props.children):[s]),g=G(o),B=g.filter(a.isValidElement).length;return e.jsx("div",{style:{display:"inline-flex",flexDirection:v?"row":"column",gap:j?0:M,...O},children:g.map((i,s)=>{if(!a.isValidElement(i))return i;const S=g.slice(0,s).filter(a.isValidElement).length,l=S===0,c=S===B-1,r={};j&&(B===1?r.borderRadius=8:v?(l||(r.borderLeftWidth=0),!l&&!c&&(r.borderRadius=0),l&&(r.borderRadius="8px 0 0 8px"),c&&(r.borderRadius="0 8px 8px 0")):(l||(r.borderTopWidth=0),!l&&!c&&(r.borderRadius=0),l&&(r.borderRadius="8px 8px 0 0"),c&&(r.borderRadius="0 0 8px 8px")));const K=i.props.style??{};return a.cloneElement(i,{key:s,style:{...K,...r}})})})}n.__docgenInfo={description:"",methods:[],displayName:"Group",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},attached:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},gap:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const X=Q([{library:"daisyUI",component:"Join",url:"https://daisyui.com/components/join/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Group",url:"https://www.chakra-ui.com/docs/components/group",usedFor:["comparison"],relation:"compared"}]),te={title:"Layout/Primitives/Group",component:n,tags:["autodocs","ref:chakra-ui","ref:daisy-ui"],parameters:{references:X,docs:{description:{component:"\n## Group\n\n인접한 버튼, 입력 필드, 뱃지 등을 시각적으로 하나의 그룹으로 묶는 컴포넌트입니다.\n내부 요소 사이의 border-radius를 자동으로 조정해 연결된 모양을 만듭니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `orientation` | `'horizontal'\\|'vertical'` | `'horizontal'` | 방향 |\n| `attached` | `boolean` | `true` | 요소를 붙여서 표시 |\n| `gap` | `number` | `0` | 요소 간격 (attached=false 시) |\n        "}}},argTypes:{orientation:{control:"select",options:["horizontal","vertical"],table:{category:"Layout"}},attached:{control:"boolean",table:{category:"Appearance"}},gap:{control:{type:"range",min:0,max:16},table:{category:"Appearance"}}},args:{orientation:"horizontal",attached:!0,gap:0}},t={padding:"8px 16px",border:"1px solid #d1d5db",background:"#fff",cursor:"pointer",fontFamily:"system-ui",fontSize:"14px",color:"#374151",fontWeight:500},p={...t,background:"#3b82f6",color:"#fff",border:"1px solid #3b82f6"},u={name:"버튼 그룹 (Attached)",render:o=>e.jsx("div",{style:{padding:"24px",fontFamily:"system-ui"},children:e.jsxs(n,{...o,children:[e.jsx("button",{style:t,children:"이전"}),e.jsx("button",{style:t,children:"현재"}),e.jsx("button",{style:t,children:"다음"})]})})},b={name:"툴바 버튼 그룹",parameters:{docs:{description:{story:"텍스트 에디터 스타일의 툴바 버튼 그룹입니다."}}},render:()=>e.jsxs("div",{style:{padding:"24px",fontFamily:"system-ui",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs(n,{children:[e.jsx("button",{style:{...t,fontWeight:700},children:"B"}),e.jsx("button",{style:{...t,fontStyle:"italic"},children:"I"}),e.jsx("button",{style:{...t,textDecoration:"underline"},children:"U"})]}),e.jsxs(n,{children:[e.jsx("button",{style:t,children:"←"}),e.jsx("button",{style:t,children:"≡"}),e.jsx("button",{style:t,children:"→"})]}),e.jsxs(n,{children:[e.jsx("button",{style:p,children:"저장"}),e.jsx("button",{style:t,children:"미리보기"}),e.jsx("button",{style:t,children:"취소"})]})]})},y={name:"페이지네이션",parameters:{docs:{description:{story:"Group으로 만든 페이지네이션 컴포넌트입니다."}}},render:()=>e.jsx("div",{style:{padding:"24px",fontFamily:"system-ui",display:"flex",flexDirection:"column",gap:"16px"},children:e.jsxs(n,{children:[e.jsx("button",{style:{...t,fontSize:"16px"},children:"‹"}),[1,2,3,4,5].map(o=>e.jsx("button",{style:o===3?p:t,children:o},o)),e.jsx("button",{style:{...t,fontSize:"16px"},children:"›"})]})})},m={name:"인풋 그룹",parameters:{docs:{description:{story:"인풋과 버튼을 결합한 그룹입니다."}}},render:()=>e.jsxs("div",{style:{padding:"24px",fontFamily:"system-ui",display:"flex",flexDirection:"column",gap:"16px",maxWidth:"480px"},children:[e.jsxs(n,{children:[e.jsx("input",{placeholder:"검색어 입력",style:{...t,outline:"none",width:"260px"}}),e.jsx("button",{style:{...p},children:"🔍 검색"})]}),e.jsxs(n,{children:[e.jsx("span",{style:{...t,background:"#f3f4f6",cursor:"default"},children:"https://"}),e.jsx("input",{placeholder:"도메인 입력",style:{...t,outline:"none",width:"200px"}}),e.jsx("span",{style:{...t,background:"#f3f4f6",cursor:"default"},children:".com"})]})]})},x={name:"수직 그룹",parameters:{docs:{description:{story:"수직 방향 버튼 그룹입니다."}}},render:()=>e.jsxs("div",{style:{padding:"24px",fontFamily:"system-ui",display:"flex",gap:"24px"},children:[e.jsxs(n,{orientation:"vertical",children:[e.jsx("button",{style:t,children:"위로"}),e.jsx("button",{style:t,children:"중간"}),e.jsx("button",{style:t,children:"아래로"})]}),e.jsxs(n,{orientation:"vertical",children:[e.jsx("button",{style:p,children:"설정"}),e.jsx("button",{style:t,children:"내보내기"}),e.jsx("button",{style:{...t,color:"#ef4444",borderColor:"#fca5a5"},children:"삭제"})]})]})},f={name:"분리형 그룹 (Gap)",parameters:{docs:{description:{story:"attached=false 상태의 간격 있는 버튼 그룹입니다."}}},render:()=>e.jsx("div",{style:{padding:"24px",fontFamily:"system-ui",display:"flex",flexDirection:"column",gap:"16px"},children:e.jsxs(n,{attached:!1,gap:8,children:[e.jsx("button",{style:{...t,borderRadius:"8px",border:"1px solid #d1d5db"},children:"취소"}),e.jsx("button",{style:{...t,borderRadius:"8px",border:"1px solid #d1d5db"},children:"임시저장"}),e.jsx("button",{style:{...p,borderRadius:"8px"},children:"게시하기"})]})})},h={name:"색상 선택 그룹",parameters:{docs:{description:{story:"색상 팔레트를 버튼 그룹으로 구성한 예시입니다."}}},render:()=>{const o=["#3b82f6","#10b981","#ef4444","#f59e0b","#8b5cf6"];return e.jsxs("div",{style:{padding:"24px",fontFamily:"system-ui",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"4px"},children:"테마 색상"}),e.jsx(n,{children:o.map(d=>e.jsx("button",{style:{width:"40px",height:"40px",background:d,border:"1px solid rgba(0,0,0,0.1)",cursor:"pointer"},title:d},d))})]})}};var F,D,R;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(R=(D=u.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var z,k,P;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(P=(k=b.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var w,T,V;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(V=(T=y.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var I,C,E;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(C=m.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var W,A,q;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(q=(A=x.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var L,U,_;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(_=(U=f.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var N,H,J;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(J=(H=h.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const ne=["Default","ButtonToolbar","Pagination","InputGroup","Vertical","Detached","ColorGroup"];export{b as ButtonToolbar,h as ColorGroup,u as Default,f as Detached,m as InputGroup,y as Pagination,x as Vertical,ne as __namedExportsOrder,te as default};
