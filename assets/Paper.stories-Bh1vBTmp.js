import{j as e}from"./jsx-runtime-D_zvdyIk.js";const E={0:"none",1:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)",2:"0 3px 6px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)",3:"0 6px 12px rgba(0,0,0,0.12), 0 3px 6px rgba(0,0,0,0.08)",4:"0 8px 16px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.08)",5:"0 10px 20px rgba(0,0,0,0.12), 0 5px 10px rgba(0,0,0,0.08)",6:"0 12px 24px rgba(0,0,0,0.12), 0 6px 12px rgba(0,0,0,0.08)",8:"0 16px 32px rgba(0,0,0,0.14), 0 8px 16px rgba(0,0,0,0.08)",12:"0 20px 40px rgba(0,0,0,0.16), 0 10px 20px rgba(0,0,0,0.1)",16:"0 24px 48px rgba(0,0,0,0.18), 0 12px 24px rgba(0,0,0,0.1)",24:"0 32px 64px rgba(0,0,0,0.22), 0 16px 32px rgba(0,0,0,0.12)"};function a({children:n,elevation:t=1,variant:x="elevation",square:F=!1,component:k="div",padding:i,style:R,className:A}){return e.jsx(k,{className:A,style:{background:"#fff",borderRadius:F?0:"8px",boxShadow:x==="elevation"?E[t]:"none",border:x==="outlined"?"1px solid #e5e7eb":"none",padding:i!==void 0?typeof i=="number"?`${i}px`:i:void 0,overflow:"hidden",...R},children:n})}a.__docgenInfo={description:"",methods:[],displayName:"Paper",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},elevation:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 12 | 16 | 24",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"8"},{name:"literal",value:"12"},{name:"literal",value:"16"},{name:"literal",value:"24"}]},description:"",defaultValue:{value:"1",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'elevation' | 'outlined'",elements:[{name:"literal",value:"'elevation'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'elevation'",computed:!1}},square:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},component:{required:!1,tsType:{name:"ElementType"},description:"",defaultValue:{value:"'div'",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const I={title:"Atoms/Display/Paper",component:a,tags:["autodocs","ref:mui"],parameters:{docs:{description:{component:"\n## Paper\n\nMaterial Design의 물리적 종이를 모사한 표면(Surface) 컨테이너 컴포넌트입니다.\nelevation(그림자 깊이) 레벨로 레이어 계층을 표현하며, 카드·패널·폼 배경 등 다양한 UI 영역에 사용됩니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `elevation` | `0-24` | `1` | 그림자 깊이 |\n| `variant` | `'elevation'\\|'outlined'` | `'elevation'` | 스타일 변형 |\n| `square` | `boolean` | `false` | 직각 모서리 |\n| `padding` | `number\\|string` | - | 내부 여백 |\n| `component` | `ElementType` | `'div'` | 렌더 태그 |\n        "}}},argTypes:{elevation:{control:{type:"range",min:0,max:24},table:{category:"Appearance"}},variant:{control:"select",options:["elevation","outlined"],table:{category:"Appearance"}},square:{control:"boolean",table:{category:"Appearance"}},padding:{control:"number",table:{category:"Appearance"}}},args:{elevation:2,variant:"elevation",square:!1,padding:20}},r={name:"기본 (elevation 2)",render:n=>e.jsxs(a,{...n,style:{maxWidth:"300px",fontFamily:"system-ui"},children:[e.jsx("h3",{style:{margin:"0 0 8px",fontSize:"16px",fontWeight:700},children:"Paper 컴포넌트"}),e.jsx("p",{style:{margin:0,fontSize:"14px",color:"#6b7280",lineHeight:1.6},children:"Material Design의 종이 표면 컴포넌트입니다."})]})},o={name:"Elevation 단계",parameters:{docs:{description:{story:"elevation 0부터 24까지의 그림자 단계 변화입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"20px",padding:"20px",background:"#f5f5f5",fontFamily:"system-ui"},children:[0,1,2,3,4,6,8,12,16,24].map(n=>e.jsxs(a,{elevation:n,padding:16,style:{width:"100px",textAlign:"center"},children:[e.jsx("div",{style:{fontSize:"20px",fontWeight:800,color:"#374151"},children:n}),e.jsx("div",{style:{fontSize:"11px",color:"#9ca3af",marginTop:"4px"},children:"elevation"})]},n))})},l={name:"변형 비교",parameters:{docs:{description:{story:"elevation 그림자 vs outlined 테두리 변형입니다."}}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"20px",fontFamily:"system-ui"},children:[e.jsxs(a,{elevation:3,padding:20,style:{flex:1},children:[e.jsx("div",{style:{fontSize:"13px",color:"#9ca3af",marginBottom:"6px"},children:"variant: elevation"}),e.jsx("div",{style:{fontSize:"16px",fontWeight:700},children:"그림자 스타일"})]}),e.jsxs(a,{variant:"outlined",padding:20,style:{flex:1},children:[e.jsx("div",{style:{fontSize:"13px",color:"#9ca3af",marginBottom:"6px"},children:"variant: outlined"}),e.jsx("div",{style:{fontSize:"16px",fontWeight:700},children:"테두리 스타일"})]})]})},s={name:"카드 활용 예시",parameters:{docs:{description:{story:"Paper를 기반으로 한 다양한 카드 예시입니다."}}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",fontFamily:"system-ui"},children:[e.jsxs(a,{elevation:2,padding:20,style:{maxWidth:"240px"},children:[e.jsx("div",{style:{fontSize:"28px",marginBottom:"8px"},children:"📊"}),e.jsx("h3",{style:{margin:"0 0 6px",fontSize:"16px",fontWeight:700},children:"분석 카드"}),e.jsx("div",{style:{fontSize:"28px",fontWeight:800,color:"#3b82f6"},children:"12,543"}),e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af"},children:"이번 달 방문자"})]}),e.jsxs(a,{elevation:4,padding:20,style:{maxWidth:"240px"},children:[e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",marginBottom:"12px"},children:[e.jsx("div",{style:{width:"44px",height:"44px",borderRadius:"50%",background:"#3b82f6",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:"20px"},children:"👤"}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:700,fontSize:"15px"},children:"김민준"}),e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af"},children:"프런트엔드 개발자"})]})]}),e.jsx("div",{style:{fontSize:"13px",color:"#6b7280",lineHeight:1.5},children:"React, TypeScript, Next.js를 주로 사용합니다."})]}),e.jsxs(a,{variant:"outlined",padding:20,style:{maxWidth:"240px"},children:[e.jsx("h3",{style:{margin:"0 0 10px",fontSize:"15px",fontWeight:700},children:"알림"}),["새 메시지 도착","업데이트 완료","배포 성공"].map((n,t)=>e.jsxs("div",{style:{display:"flex",gap:"8px",padding:"6px 0",borderBottom:"1px solid #f0f0f0",fontSize:"13px",color:"#374151"},children:[e.jsx("span",{children:["💬","⬆️","✅"][t]}),n]},t))]})]})},p={name:"직각 모서리",args:{square:!0,elevation:3},render:n=>e.jsxs("div",{style:{display:"flex",gap:"16px",fontFamily:"system-ui"},children:[e.jsxs(a,{...n,padding:16,style:{width:"140px"},children:[e.jsx("div",{style:{fontSize:"13px",color:"#9ca3af"},children:"square: true"}),e.jsx("div",{style:{fontWeight:700,marginTop:"4px"},children:"직각 모서리"})]}),e.jsxs(a,{elevation:3,padding:16,style:{width:"140px"},children:[e.jsx("div",{style:{fontSize:"13px",color:"#9ca3af"},children:"square: false"}),e.jsx("div",{style:{fontWeight:700,marginTop:"4px"},children:"둥근 모서리"})]})]})},d={name:"폼 배경",parameters:{docs:{description:{story:"Paper를 폼 컨테이너로 사용하는 예시입니다."}}},render:()=>e.jsxs(a,{elevation:4,padding:28,style:{maxWidth:"360px",fontFamily:"system-ui"},children:[e.jsx("h2",{style:{margin:"0 0 20px",fontSize:"20px",fontWeight:800,textAlign:"center"},children:"로그인"}),["이메일","비밀번호"].map(n=>e.jsxs("div",{style:{marginBottom:"12px"},children:[e.jsx("label",{style:{fontSize:"13px",fontWeight:600,color:"#374151",display:"block",marginBottom:"4px"},children:n}),e.jsx("input",{type:n==="비밀번호"?"password":"email",style:{width:"100%",boxSizing:"border-box",padding:"8px 12px",border:"1px solid #d1d5db",borderRadius:"6px",fontSize:"14px",outline:"none"},placeholder:n==="이메일"?"email@example.com":"••••••••"})]},n)),e.jsx("button",{style:{width:"100%",padding:"10px",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"8px",fontSize:"15px",fontWeight:700,cursor:"pointer",marginTop:"8px"},children:"로그인"})]})};var c,m,f;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '기본 (elevation 2)',
  render: args => <Paper {...args} style={{
    maxWidth: '300px',
    fontFamily: 'system-ui'
  }}>
      <h3 style={{
      margin: '0 0 8px',
      fontSize: '16px',
      fontWeight: 700
    }}>Paper 컴포넌트</h3>
      <p style={{
      margin: 0,
      fontSize: '14px',
      color: '#6b7280',
      lineHeight: 1.6
    }}>
        Material Design의 종이 표면 컴포넌트입니다.
      </p>
    </Paper>
}`,...(f=(m=r.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,y,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Elevation 단계',
  parameters: {
    docs: {
      description: {
        story: 'elevation 0부터 24까지의 그림자 단계 변화입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '20px',
    background: '#f5f5f5',
    fontFamily: 'system-ui'
  }}>
      {([0, 1, 2, 3, 4, 6, 8, 12, 16, 24] as const).map(elev => <Paper key={elev} elevation={elev} padding={16} style={{
      width: '100px',
      textAlign: 'center'
    }}>
          <div style={{
        fontSize: '20px',
        fontWeight: 800,
        color: '#374151'
      }}>{elev}</div>
          <div style={{
        fontSize: '11px',
        color: '#9ca3af',
        marginTop: '4px'
      }}>elevation</div>
        </Paper>)}
    </div>
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var u,h,b;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '변형 비교',
  parameters: {
    docs: {
      description: {
        story: 'elevation 그림자 vs outlined 테두리 변형입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    fontFamily: 'system-ui'
  }}>
      <Paper elevation={3} padding={20} style={{
      flex: 1
    }}>
        <div style={{
        fontSize: '13px',
        color: '#9ca3af',
        marginBottom: '6px'
      }}>variant: elevation</div>
        <div style={{
        fontSize: '16px',
        fontWeight: 700
      }}>그림자 스타일</div>
      </Paper>
      <Paper variant="outlined" padding={20} style={{
      flex: 1
    }}>
        <div style={{
        fontSize: '13px',
        color: '#9ca3af',
        marginBottom: '6px'
      }}>variant: outlined</div>
        <div style={{
        fontSize: '16px',
        fontWeight: 700
      }}>테두리 스타일</div>
      </Paper>
    </div>
}`,...(b=(h=l.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var S,j,z;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '카드 활용 예시',
  parameters: {
    docs: {
      description: {
        story: 'Paper를 기반으로 한 다양한 카드 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    fontFamily: 'system-ui'
  }}>
      <Paper elevation={2} padding={20} style={{
      maxWidth: '240px'
    }}>
        <div style={{
        fontSize: '28px',
        marginBottom: '8px'
      }}>📊</div>
        <h3 style={{
        margin: '0 0 6px',
        fontSize: '16px',
        fontWeight: 700
      }}>분석 카드</h3>
        <div style={{
        fontSize: '28px',
        fontWeight: 800,
        color: '#3b82f6'
      }}>12,543</div>
        <div style={{
        fontSize: '12px',
        color: '#9ca3af'
      }}>이번 달 방문자</div>
      </Paper>
      <Paper elevation={4} padding={20} style={{
      maxWidth: '240px'
    }}>
        <div style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        marginBottom: '12px'
      }}>
          <div style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: '#3b82f6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '20px'
        }}>👤</div>
          <div>
            <div style={{
            fontWeight: 700,
            fontSize: '15px'
          }}>김민준</div>
            <div style={{
            fontSize: '12px',
            color: '#9ca3af'
          }}>프런트엔드 개발자</div>
          </div>
        </div>
        <div style={{
        fontSize: '13px',
        color: '#6b7280',
        lineHeight: 1.5
      }}>React, TypeScript, Next.js를 주로 사용합니다.</div>
      </Paper>
      <Paper variant="outlined" padding={20} style={{
      maxWidth: '240px'
    }}>
        <h3 style={{
        margin: '0 0 10px',
        fontSize: '15px',
        fontWeight: 700
      }}>알림</h3>
        {['새 메시지 도착', '업데이트 완료', '배포 성공'].map((item, i) => <div key={i} style={{
        display: 'flex',
        gap: '8px',
        padding: '6px 0',
        borderBottom: '1px solid #f0f0f0',
        fontSize: '13px',
        color: '#374151'
      }}>
            <span>{['💬', '⬆️', '✅'][i]}</span>
            {item}
          </div>)}
      </Paper>
    </div>
}`,...(z=(j=s.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var W,P,w;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '직각 모서리',
  args: {
    square: true,
    elevation: 3
  },
  render: args => <div style={{
    display: 'flex',
    gap: '16px',
    fontFamily: 'system-ui'
  }}>
      <Paper {...args} padding={16} style={{
      width: '140px'
    }}>
        <div style={{
        fontSize: '13px',
        color: '#9ca3af'
      }}>square: true</div>
        <div style={{
        fontWeight: 700,
        marginTop: '4px'
      }}>직각 모서리</div>
      </Paper>
      <Paper elevation={3} padding={16} style={{
      width: '140px'
    }}>
        <div style={{
        fontSize: '13px',
        color: '#9ca3af'
      }}>square: false</div>
        <div style={{
        fontWeight: 700,
        marginTop: '4px'
      }}>둥근 모서리</div>
      </Paper>
    </div>
}`,...(w=(P=p.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var T,q,B;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '폼 배경',
  parameters: {
    docs: {
      description: {
        story: 'Paper를 폼 컨테이너로 사용하는 예시입니다.'
      }
    }
  },
  render: () => <Paper elevation={4} padding={28} style={{
    maxWidth: '360px',
    fontFamily: 'system-ui'
  }}>
      <h2 style={{
      margin: '0 0 20px',
      fontSize: '20px',
      fontWeight: 800,
      textAlign: 'center'
    }}>로그인</h2>
      {['이메일', '비밀번호'].map(label => <div key={label} style={{
      marginBottom: '12px'
    }}>
          <label style={{
        fontSize: '13px',
        fontWeight: 600,
        color: '#374151',
        display: 'block',
        marginBottom: '4px'
      }}>{label}</label>
          <input type={label === '비밀번호' ? 'password' : 'email'} style={{
        width: '100%',
        boxSizing: 'border-box',
        padding: '8px 12px',
        border: '1px solid #d1d5db',
        borderRadius: '6px',
        fontSize: '14px',
        outline: 'none'
      }} placeholder={label === '이메일' ? 'email@example.com' : '••••••••'} />
        </div>)}
      <button style={{
      width: '100%',
      padding: '10px',
      background: '#3b82f6',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      fontSize: '15px',
      fontWeight: 700,
      cursor: 'pointer',
      marginTop: '8px'
    }}>
        로그인
      </button>
    </Paper>
}`,...(B=(q=d.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const V=["Default","ElevationScale","Variants","CardExamples","Square","FormSurface"];export{s as CardExamples,r as Default,o as ElevationScale,d as FormSurface,p as Square,l as Variants,V as __namedExportsOrder,I as default};
