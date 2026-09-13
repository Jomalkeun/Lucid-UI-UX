import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as _}from"./reference-types-4ftiVeOu.js";import{r as s,R as O}from"./index-BxXVWNx3.js";import{c as w}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";function i({before:n,after:q,initialPosition:V=50,orientation:g="horizontal",beforeLabel:y="Before",afterLabel:m="After",handleColor:j="#fff"}){const[r,G]=s.useState(V),z=s.useRef(null),u=s.useRef(!1),d=s.useCallback((t,X)=>{var S;const a=(S=z.current)==null?void 0:S.getBoundingClientRect();if(!a)return;const Y=g==="horizontal"?(t-a.left)/a.width*100:(X-a.top)/a.height*100;G(Math.min(Math.max(Y,0),100))},[g]),b=s.useCallback(t=>{u.current&&d(t.clientX,t.clientY)},[d]),v=s.useCallback(()=>{u.current=!1},[]);O.useEffect(()=>(window.addEventListener("mousemove",b),window.addEventListener("mouseup",v),()=>{window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",v)}),[b,v]);const o=g==="horizontal";return e.jsxs("div",{ref:z,role:"img","aria-label":`${y} 와 ${m} 비교`,onMouseDown:t=>{u.current=!0,d(t.clientX,t.clientY)},onTouchMove:t=>d(t.touches[0].clientX,t.touches[0].clientY),className:w("relative overflow-hidden rounded-lg select-none",o?"cursor-col-resize":"cursor-row-resize"),children:[e.jsx("div",{className:"relative",children:n}),e.jsx("div",{className:"absolute inset-0",style:{clipPath:o?`polygon(${r}% 0, 100% 0, 100% 100%, ${r}% 100%)`:`polygon(0 ${r}%, 100% ${r}%, 100% 100%, 0 100%)`},children:q}),y&&e.jsx("span",{className:"absolute top-3 left-3 bg-krds-gray-90/70 text-krds-white px-2.5 py-0.5 rounded-full text-krds-body-xs font-semibold pointer-events-none",children:y}),m&&e.jsx("span",{className:"absolute top-3 right-3 bg-krds-gray-90/70 text-krds-white px-2.5 py-0.5 rounded-full text-krds-body-xs font-semibold pointer-events-none",children:m}),e.jsx("div",{className:"absolute pointer-events-none",style:{...o?{top:0,bottom:0,left:`${r}%`,width:"2px"}:{left:0,right:0,top:`${r}%`,height:"2px"},background:j,transform:o?"translateX(-50%)":"translateY(-50%)",boxShadow:"0 0 8px rgba(0,0,0,0.3)"},children:e.jsx("div",{className:w("absolute w-9 h-9 rounded-full flex items-center justify-center text-sm text-krds-gray-70 shadow-md pointer-events-auto",o?"cursor-col-resize":"cursor-row-resize"),style:{background:j,...o?{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}:{left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},"aria-hidden":"true",children:o?"⟺":"⟳"})})]})}i.__docgenInfo={description:"",methods:[],displayName:"Diff",props:{before:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},after:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},initialPosition:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},beforeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Before'",computed:!1}},afterLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'After'",computed:!1}},handleColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#fff'",computed:!1}}}};const J=_([{library:"daisyUI",component:"Diff",url:"https://daisyui.com/components/diff/",usedFor:["comparison"],relation:"compared"}]),oe={title:"Molecules/Display/Diff",component:i,tags:["autodocs","ref:daisy-ui"],parameters:{references:J,docs:{description:{component:"\n## Diff\n\n두 이미지 또는 콘텐츠를 슬라이더로 비교하는 Before/After 컴포넌트입니다.\n드래그 핸들로 경계선을 이동하며 이전/이후 상태를 직관적으로 비교할 수 있습니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `before` | `ReactNode` | - | 이전 콘텐츠 |\n| `after` | `ReactNode` | - | 이후 콘텐츠 |\n| `initialPosition` | `number` | `50` | 초기 슬라이더 위치 (0~100%) |\n| `orientation` | `'horizontal'\\|'vertical'` | `'horizontal'` | 슬라이드 방향 |\n| `beforeLabel` | `string` | `'Before'` | 이전 레이블 |\n| `afterLabel` | `string` | `'After'` | 이후 레이블 |\n| `handleColor` | `string` | `'#fff'` | 핸들 색상 |\n        "}}},argTypes:{initialPosition:{control:{type:"range",min:0,max:100,step:1},table:{category:"Behavior"}},orientation:{control:"select",options:["horizontal","vertical"],table:{category:"Appearance"}},beforeLabel:{control:"text",table:{category:"Content"}},afterLabel:{control:"text",table:{category:"Content"}},handleColor:{control:"color",table:{category:"Appearance"}}},args:{initialPosition:50,orientation:"horizontal",beforeLabel:"Before",afterLabel:"After",handleColor:"#fff"}},K=e.jsx("div",{style:{width:"100%",height:"280px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{style:{color:"#fff",fontSize:"32px",fontWeight:800,textShadow:"0 2px 8px rgba(0,0,0,0.3)",fontFamily:"system-ui"},children:"Before"})}),Q=e.jsx("div",{style:{width:"100%",height:"280px",background:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{style:{color:"#fff",fontSize:"32px",fontWeight:800,textShadow:"0 2px 8px rgba(0,0,0,0.3)",fontFamily:"system-ui"},children:"After"})}),l={name:"기본",render:n=>e.jsx("div",{style:{maxWidth:"560px",fontFamily:"system-ui"},children:e.jsx(i,{...n,before:K,after:Q})})},c={name:"사진 편집 비교",parameters:{docs:{description:{story:"사진 필터 전후를 비교하는 예시입니다."}}},render:()=>e.jsx("div",{style:{maxWidth:"560px",fontFamily:"system-ui"},children:e.jsx(i,{before:e.jsxs("div",{style:{width:"100%",height:"300px",background:"#d1d5db",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"8px"},children:[e.jsx("span",{style:{fontSize:"48px"},children:"🖼️"}),e.jsx("span",{style:{fontSize:"14px",color:"#6b7280",fontWeight:600},children:"원본 이미지"}),e.jsx("span",{style:{fontSize:"12px",color:"#9ca3af"},children:"채도: 100% / 밝기: 0"})]}),after:e.jsxs("div",{style:{width:"100%",height:"300px",background:"linear-gradient(to right, #f59e0b22, #ef444422)",filter:"saturate(2) brightness(1.1)",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"8px"},children:[e.jsx("span",{style:{fontSize:"48px"},children:"🌅"}),e.jsx("span",{style:{fontSize:"14px",color:"#92400e",fontWeight:600},children:"보정 후"}),e.jsx("span",{style:{fontSize:"12px",color:"#b45309"},children:"채도: 200% / 밝기: +10%"})]}),beforeLabel:"원본",afterLabel:"보정"})})},p={name:"UI 디자인 비교",parameters:{docs:{description:{story:"리디자인 전후를 비교하는 예시입니다."}}},render:()=>e.jsx("div",{style:{maxWidth:"560px",fontFamily:"system-ui"},children:e.jsx(i,{before:e.jsx("div",{style:{width:"100%",height:"320px",background:"#f3f4f6",padding:"24px",boxSizing:"border-box"},children:e.jsxs("div",{style:{background:"#fff",border:"1px solid #d1d5db",borderRadius:"4px",padding:"16px"},children:[e.jsx("div",{style:{fontSize:"18px",fontWeight:700,color:"#111",marginBottom:"8px"},children:"상품 카드 (구버전)"}),e.jsx("div",{style:{width:"100%",height:"120px",background:"#e5e7eb",borderRadius:"2px",marginBottom:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"#9ca3af",fontSize:"13px"},children:"이미지 영역"}),e.jsx("div",{style:{fontSize:"13px",color:"#374151",marginBottom:"4px"},children:"상품명"}),e.jsx("div",{style:{fontSize:"16px",fontWeight:700,color:"#111"},children:"₩29,900"}),e.jsx("button",{style:{marginTop:"8px",width:"100%",padding:"8px",background:"#374151",color:"#fff",border:"none",cursor:"pointer",borderRadius:"2px",fontSize:"13px"},children:"구매하기"})]})}),after:e.jsx("div",{style:{width:"100%",height:"320px",background:"linear-gradient(135deg, #f0f9ff, #e0f2fe)",padding:"24px",boxSizing:"border-box"},children:e.jsxs("div",{style:{background:"#fff",borderRadius:"16px",padding:"16px",boxShadow:"0 8px 32px rgba(59,130,246,0.12)"},children:[e.jsx("div",{style:{fontSize:"18px",fontWeight:800,color:"#1e40af",marginBottom:"8px"},children:"상품 카드 (신버전)"}),e.jsx("div",{style:{width:"100%",height:"120px",background:"linear-gradient(135deg, #3b82f6, #06b6d4)",borderRadius:"12px",marginBottom:"8px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"32px"},children:"📦"}),e.jsx("div",{style:{fontSize:"13px",color:"#6b7280",marginBottom:"2px"},children:"프리미엄 상품"}),e.jsx("div",{style:{fontSize:"18px",fontWeight:800,color:"#1e40af"},children:"₩29,900"}),e.jsx("button",{style:{marginTop:"8px",width:"100%",padding:"10px",background:"linear-gradient(90deg, #3b82f6, #06b6d4)",color:"#fff",border:"none",cursor:"pointer",borderRadius:"10px",fontSize:"13px",fontWeight:700},children:"구매하기 →"})]})}),beforeLabel:"구버전",afterLabel:"신버전",handleColor:"#3b82f6"})})},f={name:"수직 슬라이더",parameters:{docs:{description:{story:"수직(위/아래) 방향으로 비교하는 예시입니다."}}},render:()=>e.jsx("div",{style:{maxWidth:"400px",fontFamily:"system-ui"},children:e.jsx(i,{orientation:"vertical",before:e.jsx("div",{style:{width:"100%",height:"300px",background:"linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{style:{color:"#94a3b8",fontSize:"18px",fontWeight:700},children:"🌙 다크 테마"})}),after:e.jsx("div",{style:{width:"100%",height:"300px",background:"linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{style:{color:"#334155",fontSize:"18px",fontWeight:700},children:"☀️ 라이트 테마"})}),beforeLabel:"다크",afterLabel:"라이트",handleColor:"#8b5cf6"})})},x={name:"초기 위치 변형",parameters:{docs:{description:{story:"슬라이더 초기 위치를 다르게 설정한 예시입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"560px",fontFamily:"system-ui"},children:[20,50,80].map(n=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"8px"},children:["initialPosition: ",n,"%"]}),e.jsx(i,{initialPosition:n,before:e.jsxs("div",{style:{width:"100%",height:"120px",background:"#dbeafe",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",color:"#1e40af",fontWeight:700},children:["Before (",n,"% 위치)"]}),after:e.jsxs("div",{style:{width:"100%",height:"120px",background:"#dcfce7",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",color:"#166534",fontWeight:700},children:["After (",n,"% 위치)"]})})]},n))})},h={name:"코드 비교",parameters:{docs:{description:{story:"코드 리팩토링 전후 비교 예시입니다."}}},render:()=>e.jsx("div",{style:{maxWidth:"640px",fontFamily:"system-ui"},children:e.jsx(i,{before:e.jsxs("div",{style:{width:"100%",minHeight:"280px",background:"#1e1e1e",padding:"20px",boxSizing:"border-box",fontFamily:"monospace"},children:[e.jsx("div",{style:{color:"#569cd6",marginBottom:"4px"},children:"// Before: 중복 코드"}),e.jsxs("div",{style:{color:"#d4d4d4",lineHeight:1.7,fontSize:"13px"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{color:"#c586c0"},children:"function"})," ",e.jsx("span",{style:{color:"#dcdcaa"},children:"fetchUser"}),"(id) ","{"]}),e.jsxs("div",{children:["  ",e.jsx("span",{style:{color:"#c586c0"},children:"return"})," fetch(",e.jsxs("span",{style:{color:"#ce9178"},children:["`/api/users/$","{","id","}","`"]}),")"]}),e.jsxs("div",{children:["    ",".then(r ","=> ","r.json())"]}),e.jsx("div",{children:"}"}),e.jsxs("div",{style:{marginTop:"8px"},children:[e.jsx("span",{style:{color:"#c586c0"},children:"function"})," ",e.jsx("span",{style:{color:"#dcdcaa"},children:"fetchPost"}),"(id) ","{"]}),e.jsxs("div",{children:["  ",e.jsx("span",{style:{color:"#c586c0"},children:"return"})," fetch(",e.jsxs("span",{style:{color:"#ce9178"},children:["`/api/posts/$","{","id","}","`"]}),")"]}),e.jsxs("div",{children:["    ",".then(r ","=> ","r.json())"]}),e.jsx("div",{children:"}"})]})]}),after:e.jsxs("div",{style:{width:"100%",minHeight:"280px",background:"#1e1e1e",padding:"20px",boxSizing:"border-box",fontFamily:"monospace"},children:[e.jsx("div",{style:{color:"#6a9955",marginBottom:"4px"},children:"// After: 추상화"}),e.jsxs("div",{style:{color:"#d4d4d4",lineHeight:1.7,fontSize:"13px"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{color:"#c586c0"},children:"const"})," ",e.jsx("span",{style:{color:"#dcdcaa"},children:"fetchResource"})," = (type, id) ","=> "]}),e.jsxs("div",{children:["  ","fetch(",e.jsxs("span",{style:{color:"#ce9178"},children:["`/api/$","{","type","}","/$","{","id","}","`"]}),")"]}),e.jsxs("div",{children:["    ",".then(r ","=> ","r.json())"]}),e.jsxs("div",{style:{marginTop:"8px"},children:[e.jsx("span",{style:{color:"#c586c0"},children:"const"})," fetchUser = (id) ","=> "]}),e.jsxs("div",{children:["  ","fetchResource(",e.jsx("span",{style:{color:"#ce9178"},children:"'users'"}),", id)"]}),e.jsxs("div",{children:[e.jsx("span",{style:{color:"#c586c0"},children:"const"})," fetchPost = (id) ","=> "]}),e.jsxs("div",{children:["  ","fetchResource(",e.jsx("span",{style:{color:"#ce9178"},children:"'posts'"}),", id)"]})]})]}),beforeLabel:"리팩토링 전",afterLabel:"리팩토링 후",handleColor:"#f59e0b"})})};var k,C,R;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '기본',
  render: args => <div style={{
    maxWidth: '560px',
    fontFamily: 'system-ui'
  }}>
      <Diff {...args} before={GradientBefore} after={GradientAfter} />
    </div>
}`,...(R=(C=l.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var W,B,D;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '사진 편집 비교',
  parameters: {
    docs: {
      description: {
        story: '사진 필터 전후를 비교하는 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    maxWidth: '560px',
    fontFamily: 'system-ui'
  }}>
      <Diff before={<div style={{
      width: '100%',
      height: '300px',
      background: '#d1d5db',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '8px'
    }}>
            <span style={{
        fontSize: '48px'
      }}>🖼️</span>
            <span style={{
        fontSize: '14px',
        color: '#6b7280',
        fontWeight: 600
      }}>원본 이미지</span>
            <span style={{
        fontSize: '12px',
        color: '#9ca3af'
      }}>채도: 100% / 밝기: 0</span>
          </div>} after={<div style={{
      width: '100%',
      height: '300px',
      background: 'linear-gradient(to right, #f59e0b22, #ef444422)',
      filter: 'saturate(2) brightness(1.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '8px'
    }}>
            <span style={{
        fontSize: '48px'
      }}>🌅</span>
            <span style={{
        fontSize: '14px',
        color: '#92400e',
        fontWeight: 600
      }}>보정 후</span>
            <span style={{
        fontSize: '12px',
        color: '#b45309'
      }}>채도: 200% / 밝기: +10%</span>
          </div>} beforeLabel="원본" afterLabel="보정" />
    </div>
}`,...(D=(B=c.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var I,L,P;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'UI 디자인 비교',
  parameters: {
    docs: {
      description: {
        story: '리디자인 전후를 비교하는 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    maxWidth: '560px',
    fontFamily: 'system-ui'
  }}>
      <Diff before={<div style={{
      width: '100%',
      height: '320px',
      background: '#f3f4f6',
      padding: '24px',
      boxSizing: 'border-box'
    }}>
            <div style={{
        background: '#fff',
        border: '1px solid #d1d5db',
        borderRadius: '4px',
        padding: '16px'
      }}>
              <div style={{
          fontSize: '18px',
          fontWeight: 700,
          color: '#111',
          marginBottom: '8px'
        }}>상품 카드 (구버전)</div>
              <div style={{
          width: '100%',
          height: '120px',
          background: '#e5e7eb',
          borderRadius: '2px',
          marginBottom: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#9ca3af',
          fontSize: '13px'
        }}>이미지 영역</div>
              <div style={{
          fontSize: '13px',
          color: '#374151',
          marginBottom: '4px'
        }}>상품명</div>
              <div style={{
          fontSize: '16px',
          fontWeight: 700,
          color: '#111'
        }}>₩29,900</div>
              <button style={{
          marginTop: '8px',
          width: '100%',
          padding: '8px',
          background: '#374151',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '2px',
          fontSize: '13px'
        }}>구매하기</button>
            </div>
          </div>} after={<div style={{
      width: '100%',
      height: '320px',
      background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
      padding: '24px',
      boxSizing: 'border-box'
    }}>
            <div style={{
        background: '#fff',
        borderRadius: '16px',
        padding: '16px',
        boxShadow: '0 8px 32px rgba(59,130,246,0.12)'
      }}>
              <div style={{
          fontSize: '18px',
          fontWeight: 800,
          color: '#1e40af',
          marginBottom: '8px'
        }}>상품 카드 (신버전)</div>
              <div style={{
          width: '100%',
          height: '120px',
          background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
          borderRadius: '12px',
          marginBottom: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '32px'
        }}>📦</div>
              <div style={{
          fontSize: '13px',
          color: '#6b7280',
          marginBottom: '2px'
        }}>프리미엄 상품</div>
              <div style={{
          fontSize: '18px',
          fontWeight: 800,
          color: '#1e40af'
        }}>₩29,900</div>
              <button style={{
          marginTop: '8px',
          width: '100%',
          padding: '10px',
          background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '10px',
          fontSize: '13px',
          fontWeight: 700
        }}>구매하기 →</button>
            </div>
          </div>} beforeLabel="구버전" afterLabel="신버전" handleColor="#3b82f6" />
    </div>
}`,...(P=(L=p.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var F,T,$;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '수직 슬라이더',
  parameters: {
    docs: {
      description: {
        story: '수직(위/아래) 방향으로 비교하는 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    maxWidth: '400px',
    fontFamily: 'system-ui'
  }}>
      <Diff orientation="vertical" before={<div style={{
      width: '100%',
      height: '300px',
      background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
            <span style={{
        color: '#94a3b8',
        fontSize: '18px',
        fontWeight: 700
      }}>🌙 다크 테마</span>
          </div>} after={<div style={{
      width: '100%',
      height: '300px',
      background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
            <span style={{
        color: '#334155',
        fontSize: '18px',
        fontWeight: 700
      }}>☀️ 라이트 테마</span>
          </div>} beforeLabel="다크" afterLabel="라이트" handleColor="#8b5cf6" />
    </div>
}`,...($=(T=f.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var A,N,E;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '초기 위치 변형',
  parameters: {
    docs: {
      description: {
        story: '슬라이더 초기 위치를 다르게 설정한 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: '560px',
    fontFamily: 'system-ui'
  }}>
      {[20, 50, 80].map(pos => <div key={pos}>
          <div style={{
        fontSize: '12px',
        color: '#9ca3af',
        marginBottom: '8px'
      }}>initialPosition: {pos}%</div>
          <Diff initialPosition={pos} before={<div style={{
        width: '100%',
        height: '120px',
        background: '#dbeafe',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        color: '#1e40af',
        fontWeight: 700
      }}>Before ({pos}% 위치)</div>} after={<div style={{
        width: '100%',
        height: '120px',
        background: '#dcfce7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        color: '#166534',
        fontWeight: 700
      }}>After ({pos}% 위치)</div>} />
        </div>)}
    </div>
}`,...(E=(N=x.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var U,H,M;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: '코드 비교',
  parameters: {
    docs: {
      description: {
        story: '코드 리팩토링 전후 비교 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    maxWidth: '640px',
    fontFamily: 'system-ui'
  }}>
      <Diff before={<div style={{
      width: '100%',
      minHeight: '280px',
      background: '#1e1e1e',
      padding: '20px',
      boxSizing: 'border-box',
      fontFamily: 'monospace'
    }}>
            <div style={{
        color: '#569cd6',
        marginBottom: '4px'
      }}>// Before: 중복 코드</div>
            <div style={{
        color: '#d4d4d4',
        lineHeight: 1.7,
        fontSize: '13px'
      }}>
              <div><span style={{
            color: '#c586c0'
          }}>function</span> <span style={{
            color: '#dcdcaa'
          }}>fetchUser</span>(id) {'{'}</div>
              <div>{'  '}<span style={{
            color: '#c586c0'
          }}>return</span> fetch(<span style={{
            color: '#ce9178'
          }}>\`/api/users/\${'{'}id{'}'}\`</span>)</div>
              <div>{'    '}.then(r {'=> '}r.json())</div>
              <div>{'}'}</div>
              <div style={{
          marginTop: '8px'
        }}><span style={{
            color: '#c586c0'
          }}>function</span> <span style={{
            color: '#dcdcaa'
          }}>fetchPost</span>(id) {'{'}</div>
              <div>{'  '}<span style={{
            color: '#c586c0'
          }}>return</span> fetch(<span style={{
            color: '#ce9178'
          }}>\`/api/posts/\${'{'}id{'}'}\`</span>)</div>
              <div>{'    '}.then(r {'=> '}r.json())</div>
              <div>{'}'}</div>
            </div>
          </div>} after={<div style={{
      width: '100%',
      minHeight: '280px',
      background: '#1e1e1e',
      padding: '20px',
      boxSizing: 'border-box',
      fontFamily: 'monospace'
    }}>
            <div style={{
        color: '#6a9955',
        marginBottom: '4px'
      }}>// After: 추상화</div>
            <div style={{
        color: '#d4d4d4',
        lineHeight: 1.7,
        fontSize: '13px'
      }}>
              <div><span style={{
            color: '#c586c0'
          }}>const</span> <span style={{
            color: '#dcdcaa'
          }}>fetchResource</span> = (type, id) {'=> '}</div>
              <div>{'  '}fetch(<span style={{
            color: '#ce9178'
          }}>\`/api/\${'{'}type{'}'}/\${'{'}id{'}'}\`</span>)</div>
              <div>{'    '}.then(r {'=> '}r.json())</div>
              <div style={{
          marginTop: '8px'
        }}><span style={{
            color: '#c586c0'
          }}>const</span> fetchUser = (id) {'=> '}</div>
              <div>{'  '}fetchResource(<span style={{
            color: '#ce9178'
          }}>'users'</span>, id)</div>
              <div><span style={{
            color: '#c586c0'
          }}>const</span> fetchPost = (id) {'=> '}</div>
              <div>{'  '}fetchResource(<span style={{
            color: '#ce9178'
          }}>'posts'</span>, id)</div>
            </div>
          </div>} beforeLabel="리팩토링 전" afterLabel="리팩토링 후" handleColor="#f59e0b" />
    </div>
}`,...(M=(H=h.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};const re=["Default","PhotoEdit","UIDesignComparison","Vertical","InitialPositions","CodeDiff"];export{h as CodeDiff,l as Default,x as InitialPositions,c as PhotoEdit,p as UIDesignComparison,f as Vertical,re as __namedExportsOrder,oe as default};
