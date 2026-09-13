import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as A}from"./reference-types-4ftiVeOu.js";function r({children:a,color:b,fontStyle:W="italic",fontWeight:z,textDecoration:H,fontSize:D,style:T,className:F}){return e.jsx("em",{className:F,style:{color:b,fontStyle:W,fontWeight:z,textDecoration:H,fontSize:D,...T},children:a})}r.__docgenInfo={description:"",methods:[],displayName:"Em",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},color:{required:!1,tsType:{name:"string"},description:""},fontStyle:{required:!1,tsType:{name:"union",raw:"'italic' | 'normal'",elements:[{name:"literal",value:"'italic'"},{name:"literal",value:"'normal'"}]},description:"",defaultValue:{value:"'italic'",computed:!1}},fontWeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},textDecoration:{required:!1,tsType:{name:"string"},description:""},fontSize:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const q=A([{library:"Chakra UI",component:"Em",url:"https://www.chakra-ui.com/docs/components/em",usedFor:["comparison"],relation:"compared"}]),I={title:"Atoms/Typography/Em",component:r,tags:["autodocs","ref:chakra-ui"],parameters:{references:q,docs:{description:{component:"\n## Em\n\n텍스트 강조를 위한 인라인 컴포넌트입니다.\nHTML `<em>` 태그를 기반으로 하며, 시맨틱 강조와 함께 스타일(기울임꼴 등)을 일관되게 적용합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `children` | `ReactNode` | - | 강조할 텍스트 |\n| `color` | `string` | - | 텍스트 색상 |\n| `fontStyle` | `'italic'\\|'normal'` | `'italic'` | 글꼴 스타일 |\n| `fontWeight` | `string\\|number` | - | 글꼴 굵기 |\n| `textDecoration` | `string` | - | 텍스트 장식 |\n| `fontSize` | `string` | - | 폰트 크기 |\n        "}}},argTypes:{color:{control:"color",table:{category:"Appearance"}},fontStyle:{control:"select",options:["italic","normal"],table:{category:"Appearance"}},fontWeight:{control:"text",table:{category:"Appearance"}},textDecoration:{control:"text",table:{category:"Appearance"}},fontSize:{control:"text",table:{category:"Appearance"}}},args:{children:"강조된 텍스트",fontStyle:"italic"}},t={name:"기본",render:a=>e.jsxs("p",{style:{fontSize:"16px",fontFamily:"system-ui",color:"#374151",lineHeight:1.8},children:["이것은 ",e.jsx(r,{...a})," 예시입니다."]})},o={name:"문단 내 강조",parameters:{docs:{description:{story:"문단 안에서 Em을 사용하는 예시입니다."}}},render:()=>e.jsxs("div",{style:{fontFamily:"system-ui",maxWidth:"560px",color:"#374151",lineHeight:1.8,fontSize:"15px"},children:[e.jsxs("p",{children:["Claude는 Anthropic이 개발한 ",e.jsx(r,{children:"AI 어시스턴트"}),"입니다. 사용자의 질문에 ",e.jsx(r,{color:"#3b82f6",children:"정확하고 유용한"})," 답변을 제공하도록 설계되었으며, 특히 ",e.jsx(r,{fontWeight:700,children:"안전성"}),"과 ",e.jsx(r,{fontWeight:700,children:"유익성"}),"을 핵심 가치로 삼습니다."]}),e.jsxs("p",{children:[e.jsx(r,{fontStyle:"normal",color:"#ef4444",fontWeight:600,children:"주의:"})," 이 컴포넌트는 시맨틱 마크업과 시각적 강조 두 가지 목적을 함께 수행합니다."]})]})},n={name:"스타일 변형",parameters:{docs:{description:{story:"다양한 스타일 조합의 Em 강조 텍스트입니다."}}},render:()=>e.jsxs("div",{style:{fontFamily:"system-ui",display:"flex",flexDirection:"column",gap:"16px",fontSize:"16px",color:"#374151",lineHeight:2},children:[e.jsxs("div",{children:["기본: ",e.jsx(r,{children:"이탤릭 강조"})]}),e.jsxs("div",{children:["색상: ",e.jsx(r,{color:"#3b82f6",children:"파란색 강조"})]}),e.jsxs("div",{children:["굵게: ",e.jsx(r,{fontWeight:700,children:"굵은 강조"})]}),e.jsxs("div",{children:["밑줄: ",e.jsx(r,{textDecoration:"underline",children:"밑줄 강조"})]}),e.jsxs("div",{children:["일반체: ",e.jsx(r,{fontStyle:"normal",color:"#ef4444",children:"일반체 + 색상 강조"})]}),e.jsxs("div",{children:["큰 글씨: ",e.jsx(r,{fontSize:"20px",color:"#8b5cf6",children:"크기 강조"})]}),e.jsxs("div",{children:["복합: ",e.jsx(r,{fontWeight:700,color:"#10b981",fontStyle:"normal",textDecoration:"underline",children:"복합 강조"})]})]})},i={name:"색상 강조",parameters:{docs:{description:{story:"색상으로 의미를 전달하는 Em 활용 예시입니다."}}},render:()=>e.jsxs("div",{style:{fontFamily:"system-ui",fontSize:"15px",lineHeight:2,color:"#374151",maxWidth:"480px"},children:[e.jsxs("p",{children:["시스템 상태: ",e.jsx(r,{color:"#10b981",fontWeight:600,fontStyle:"normal",children:"정상 운영 중"}),"입니다."]}),e.jsxs("p",{children:["주의: ",e.jsx(r,{color:"#f59e0b",fontWeight:600,fontStyle:"normal",children:"점검 예정"})," — 2026년 7월 1일 02:00"]}),e.jsxs("p",{children:["오류: ",e.jsx(r,{color:"#ef4444",fontWeight:600,fontStyle:"normal",children:"서비스 중단"})," 발생 시 고객센터로 연락하세요."]}),e.jsxs("p",{children:["새 기능: ",e.jsx(r,{color:"#3b82f6",fontWeight:600,fontStyle:"normal",children:"다크 모드"}),"가 추가되었습니다!"]})]})},s={name:"마케팅 카피",parameters:{docs:{description:{story:"마케팅 카피에서 핵심 문구를 강조하는 예시입니다."}}},render:()=>e.jsxs("div",{style:{fontFamily:"system-ui",maxWidth:"480px",padding:"24px",background:"#f9fafb",borderRadius:"12px"},children:[e.jsxs("h2",{style:{margin:"0 0 12px",fontSize:"24px",fontWeight:800,color:"#111",lineHeight:1.3},children:[e.jsx(r,{fontStyle:"normal",color:"#3b82f6",children:"더 빠르게"}),", 더 스마트하게."]}),e.jsxs("p",{style:{margin:0,fontSize:"15px",color:"#6b7280",lineHeight:1.7},children:["우리 플랫폼은 당신의 업무를 ",e.jsx(r,{color:"#3b82f6",children:"3배 더 빠르게"})," 처리합니다.",e.jsx(r,{fontWeight:700,fontStyle:"normal",children:"지금 바로 무료로"})," 시작하세요."]})]})};var l,c,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '기본',
  render: args => <p style={{
    fontSize: '16px',
    fontFamily: 'system-ui',
    color: '#374151',
    lineHeight: 1.8
  }}>
      이것은 <Em {...args} /> 예시입니다.
    </p>
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,p,f;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '문단 내 강조',
  parameters: {
    docs: {
      description: {
        story: '문단 안에서 Em을 사용하는 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    fontFamily: 'system-ui',
    maxWidth: '560px',
    color: '#374151',
    lineHeight: 1.8,
    fontSize: '15px'
  }}>
      <p>
        Claude는 Anthropic이 개발한 <Em>AI 어시스턴트</Em>입니다.
        사용자의 질문에 <Em color="#3b82f6">정확하고 유용한</Em> 답변을 제공하도록 설계되었으며,
        특히 <Em fontWeight={700}>안전성</Em>과 <Em fontWeight={700}>유익성</Em>을 핵심 가치로 삼습니다.
      </p>
      <p>
        <Em fontStyle="normal" color="#ef4444" fontWeight={600}>주의:</Em> 이 컴포넌트는 시맨틱 마크업과 시각적 강조 두 가지 목적을 함께 수행합니다.
      </p>
    </div>
}`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var h,x,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '스타일 변형',
  parameters: {
    docs: {
      description: {
        story: '다양한 스타일 조합의 Em 강조 텍스트입니다.'
      }
    }
  },
  render: () => <div style={{
    fontFamily: 'system-ui',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    fontSize: '16px',
    color: '#374151',
    lineHeight: 2
  }}>
      <div>기본: <Em>이탤릭 강조</Em></div>
      <div>색상: <Em color="#3b82f6">파란색 강조</Em></div>
      <div>굵게: <Em fontWeight={700}>굵은 강조</Em></div>
      <div>밑줄: <Em textDecoration="underline">밑줄 강조</Em></div>
      <div>일반체: <Em fontStyle="normal" color="#ef4444">일반체 + 색상 강조</Em></div>
      <div>큰 글씨: <Em fontSize="20px" color="#8b5cf6">크기 강조</Em></div>
      <div>복합: <Em fontWeight={700} color="#10b981" fontStyle="normal" textDecoration="underline">복합 강조</Em></div>
    </div>
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var g,u,E;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '색상 강조',
  parameters: {
    docs: {
      description: {
        story: '색상으로 의미를 전달하는 Em 활용 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    fontFamily: 'system-ui',
    fontSize: '15px',
    lineHeight: 2,
    color: '#374151',
    maxWidth: '480px'
  }}>
      <p>시스템 상태: <Em color="#10b981" fontWeight={600} fontStyle="normal">정상 운영 중</Em>입니다.</p>
      <p>주의: <Em color="#f59e0b" fontWeight={600} fontStyle="normal">점검 예정</Em> — 2026년 7월 1일 02:00</p>
      <p>오류: <Em color="#ef4444" fontWeight={600} fontStyle="normal">서비스 중단</Em> 발생 시 고객센터로 연락하세요.</p>
      <p>새 기능: <Em color="#3b82f6" fontWeight={600} fontStyle="normal">다크 모드</Em>가 추가되었습니다!</p>
    </div>
}`,...(E=(u=i.parameters)==null?void 0:u.docs)==null?void 0:E.source}}};var S,j,v;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '마케팅 카피',
  parameters: {
    docs: {
      description: {
        story: '마케팅 카피에서 핵심 문구를 강조하는 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    fontFamily: 'system-ui',
    maxWidth: '480px',
    padding: '24px',
    background: '#f9fafb',
    borderRadius: '12px'
  }}>
      <h2 style={{
      margin: '0 0 12px',
      fontSize: '24px',
      fontWeight: 800,
      color: '#111',
      lineHeight: 1.3
    }}>
        <Em fontStyle="normal" color="#3b82f6">더 빠르게</Em>, 더 스마트하게.
      </h2>
      <p style={{
      margin: 0,
      fontSize: '15px',
      color: '#6b7280',
      lineHeight: 1.7
    }}>
        우리 플랫폼은 당신의 업무를 <Em color="#3b82f6">3배 더 빠르게</Em> 처리합니다.
        <Em fontWeight={700} fontStyle="normal">지금 바로 무료로</Em> 시작하세요.
      </p>
    </div>
}`,...(v=(j=s.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const R=["Default","InParagraph","StyleVariants","ColorVariants","MarketingCopy"];export{i as ColorVariants,t as Default,o as InParagraph,s as MarketingCopy,n as StyleVariants,R as __namedExportsOrder,I as default};
