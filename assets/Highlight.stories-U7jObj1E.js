import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as P}from"./index-BxXVWNx3.js";import{d as U}from"./reference-types-4ftiVeOu.js";import"./_commonjsHelpers-CqkleIqs.js";function t({query:n,children:i,color:o="#111",background:s="#fef08a",fontWeight:r=700,borderRadius:u="3px",caseSensitive:f=!1,mark:h,style:y}){const x=(Array.isArray(n)?n:[n]).filter(Boolean);if(x.length===0)return e.jsx("span",{style:y,children:i});const M=x.map(a=>a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")),J=new RegExp(`(${M.join("|")})`,f?"g":"gi"),L=i.split(J);return e.jsx("span",{style:y,children:L.map((a,b)=>x.some(v=>f?a===v:a.toLowerCase()===v.toLowerCase())?h?e.jsx("span",{children:h(a)},b):e.jsx("mark",{style:{background:s,color:o,fontWeight:r,borderRadius:u,padding:"0 2px"},children:a},b):a)})}t.__docgenInfo={description:"",methods:[],displayName:"Highlight",props:{query:{required:!0,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},children:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#111'",computed:!1}},background:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#fef08a'",computed:!1}},fontWeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:"700",computed:!1}},borderRadius:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'3px'",computed:!1}},caseSensitive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},mark:{required:!1,tsType:{name:"signature",type:"function",raw:"(text: string) => ReactNode",signature:{arguments:[{type:{name:"string"},name:"text"}],return:{name:"ReactNode"}}},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const _=U([{library:"Ark UI",component:"Highlight",url:"https://ark-ui.com/docs/utilities/highlight",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Chakra UI",component:"Highlight",url:"https://www.chakra-ui.com/docs/components/highlight",usedFor:["comparison"],relation:"compared"}]),X={title:"Atoms/Typography/Highlight",component:t,tags:["autodocs","ref:chakra-ui","ref:ark-ui"],parameters:{references:_,docs:{description:{component:"\n## Highlight\n\n텍스트 내 특정 키워드를 하이라이팅하는 컴포넌트입니다.\n검색 결과의 매칭 텍스트 강조, 중요 키워드 표시 등에 활용합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `query` | `string\\|string[]` | - | 강조할 키워드 |\n| `children` | `string` | - | 원본 텍스트 |\n| `color` | `string` | `'#111'` | 강조 텍스트 색상 |\n| `background` | `string` | `'#fef08a'` | 강조 배경 색상 |\n| `fontWeight` | `string\\|number` | `700` | 강조 폰트 굵기 |\n| `caseSensitive` | `boolean` | `false` | 대소문자 구분 |\n        "}}},argTypes:{background:{control:"color",table:{category:"Appearance"}},color:{control:"color",table:{category:"Appearance"}},fontWeight:{control:"text",table:{category:"Appearance"}},caseSensitive:{control:"boolean",table:{category:"Behavior"}},query:{control:"text",table:{category:"Core"}}},args:{query:"React",children:"React는 UI를 구축하기 위한 JavaScript 라이브러리입니다. React를 사용하면 재사용 가능한 컴포넌트를 만들 수 있습니다.",background:"#fef08a",color:"#111",fontWeight:700,caseSensitive:!1}},l={name:"기본",render:n=>e.jsx("p",{style:{padding:"24px",fontFamily:"system-ui",fontSize:"16px",lineHeight:1.8,color:"#374151",maxWidth:"560px"},children:e.jsx(t,{...n})})},c={name:"다중 키워드",parameters:{docs:{description:{story:"여러 키워드를 동시에 강조합니다."}}},render:()=>e.jsx("div",{style:{padding:"24px",fontFamily:"system-ui",display:"flex",flexDirection:"column",gap:"16px",maxWidth:"560px"},children:e.jsx("p",{style:{fontSize:"15px",lineHeight:1.8,color:"#374151"},children:e.jsx(t,{query:["React","TypeScript","Vite"],children:"이 프로젝트는 React와 TypeScript를 기반으로 하며, Vite를 번들러로 사용합니다. React 컴포넌트를 TypeScript로 작성하고 Vite로 빠르게 빌드합니다."})})})},d={name:"색상 변형",parameters:{docs:{description:{story:"다양한 색상의 하이라이팅 예시입니다."}}},render:()=>{const n="Claude는 Anthropic이 개발한 AI 어시스턴트입니다. 안전하고 유익한 AI를 목표로 합니다.",i=[{background:"#fef08a",color:"#111",label:"노란색 (기본)"},{background:"#dbeafe",color:"#1e40af",label:"파란색"},{background:"#dcfce7",color:"#166534",label:"초록색"},{background:"#fce7f3",color:"#9d174d",label:"분홍색"},{background:"#fef3c7",color:"#92400e",label:"주황색"}];return e.jsx("div",{style:{padding:"24px",fontFamily:"system-ui",display:"flex",flexDirection:"column",gap:"12px",maxWidth:"560px"},children:i.map(({background:o,color:s,label:r})=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"11px",color:"#9ca3af",marginBottom:"4px"},children:r}),e.jsx("p",{style:{margin:0,fontSize:"14px",lineHeight:1.8,color:"#374151"},children:e.jsx(t,{query:["Claude","AI"],background:o,color:s,children:n})})]},r))})}};function N(){const[n,i]=P.useState(""),o=["클로드는 Anthropic이 개발한 AI 어시스턴트입니다.","React는 페이스북이 만든 JavaScript 프레임워크입니다.","TypeScript는 JavaScript의 타입 시스템을 추가한 언어입니다.","Storybook은 UI 컴포넌트를 독립적으로 개발하는 도구입니다.","Vite는 빠른 빌드 도구로 개발 경험을 향상시킵니다.","PandaCSS는 타입 안전한 CSS-in-JS 솔루션입니다."],s=n?o.filter(r=>r.toLowerCase().includes(n.toLowerCase())):o;return e.jsxs("div",{style:{padding:"24px",fontFamily:"system-ui",maxWidth:"560px"},children:[e.jsxs("div",{style:{marginBottom:"16px",display:"flex",gap:"8px"},children:[e.jsx("input",{value:n,onChange:r=>i(r.target.value),placeholder:"검색어 입력...",style:{flex:1,padding:"8px 12px",border:"1px solid #d1d5db",borderRadius:"8px",fontSize:"14px",fontFamily:"system-ui"}}),n&&e.jsx("button",{onClick:()=>i(""),style:{padding:"8px 12px",border:"1px solid #d1d5db",borderRadius:"8px",background:"#f3f4f6",cursor:"pointer"},children:"✕"})]}),e.jsxs("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"10px"},children:[s.length,"개 결과"]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:s.map((r,u)=>e.jsx("div",{style:{padding:"12px 14px",background:"#fff",border:"1px solid #e5e7eb",borderRadius:"8px",fontSize:"14px",lineHeight:1.6,color:"#374151"},children:e.jsx(t,{query:n,children:r})},u))})]})}const p={name:"실시간 검색 하이라이트",parameters:{docs:{description:{story:"검색어 입력 시 일치하는 텍스트가 실시간으로 강조됩니다."}}},render:()=>e.jsx(N,{})},m={name:"커스텀 강조 렌더링",parameters:{docs:{description:{story:"mark prop으로 커스텀 강조 요소를 렌더링합니다."}}},render:()=>e.jsx("div",{style:{padding:"24px",fontFamily:"system-ui",maxWidth:"560px"},children:e.jsx("p",{style:{fontSize:"15px",lineHeight:1.8,color:"#374151"},children:e.jsx(t,{query:["중요","핵심"],mark:n=>e.jsx("span",{style:{background:"linear-gradient(120deg, #a78bfa 0%, #60a5fa 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontWeight:800},children:n}),children:"이 문서의 중요한 내용은 핵심 개념을 이해하는 것입니다. 중요한 것은 실습이며, 핵심은 꾸준함입니다."})})})},g={name:"대소문자 구분",parameters:{docs:{description:{story:"caseSensitive=true로 대소문자를 구분하여 강조합니다."}}},render:()=>{const n="React, react, REACT — 세 가지 표기를 비교합니다.";return e.jsxs("div",{style:{padding:"24px",fontFamily:"system-ui",display:"flex",flexDirection:"column",gap:"16px",maxWidth:"480px"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"6px"},children:"caseSensitive: false (기본)"}),e.jsx("p",{style:{margin:0,fontSize:"15px",lineHeight:1.8,color:"#374151"},children:e.jsx(t,{query:"react",caseSensitive:!1,children:n})})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"6px"},children:"caseSensitive: true (React만 매칭)"}),e.jsx("p",{style:{margin:0,fontSize:"15px",lineHeight:1.8,color:"#374151"},children:e.jsx(t,{query:"React",caseSensitive:!0,children:n})})]})]})}};var S,k,j;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '기본',
  render: args => <p style={{
    padding: '24px',
    fontFamily: 'system-ui',
    fontSize: '16px',
    lineHeight: 1.8,
    color: '#374151',
    maxWidth: '560px'
  }}>
      <Highlight {...args} />
    </p>
}`,...(j=(k=l.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var H,R,C;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '다중 키워드',
  parameters: {
    docs: {
      description: {
        story: '여러 키워드를 동시에 강조합니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '24px',
    fontFamily: 'system-ui',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '560px'
  }}>
      <p style={{
      fontSize: '15px',
      lineHeight: 1.8,
      color: '#374151'
    }}>
        <Highlight query={['React', 'TypeScript', 'Vite']}>
          이 프로젝트는 React와 TypeScript를 기반으로 하며, Vite를 번들러로 사용합니다. React 컴포넌트를 TypeScript로 작성하고 Vite로 빠르게 빌드합니다.
        </Highlight>
      </p>
    </div>
}`,...(C=(R=c.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var T,q,z;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '색상 변형',
  parameters: {
    docs: {
      description: {
        story: '다양한 색상의 하이라이팅 예시입니다.'
      }
    }
  },
  render: () => {
    const text = 'Claude는 Anthropic이 개발한 AI 어시스턴트입니다. 안전하고 유익한 AI를 목표로 합니다.';
    const variants = [{
      background: '#fef08a',
      color: '#111',
      label: '노란색 (기본)'
    }, {
      background: '#dbeafe',
      color: '#1e40af',
      label: '파란색'
    }, {
      background: '#dcfce7',
      color: '#166534',
      label: '초록색'
    }, {
      background: '#fce7f3',
      color: '#9d174d',
      label: '분홍색'
    }, {
      background: '#fef3c7',
      color: '#92400e',
      label: '주황색'
    }];
    return <div style={{
      padding: '24px',
      fontFamily: 'system-ui',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      maxWidth: '560px'
    }}>
        {variants.map(({
        background,
        color,
        label
      }) => <div key={label}>
            <div style={{
          fontSize: '11px',
          color: '#9ca3af',
          marginBottom: '4px'
        }}>{label}</div>
            <p style={{
          margin: 0,
          fontSize: '14px',
          lineHeight: 1.8,
          color: '#374151'
        }}>
              <Highlight query={['Claude', 'AI']} background={background} color={color}>{text}</Highlight>
            </p>
          </div>)}
      </div>;
  }
}`,...(z=(q=d.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var W,A,F;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '실시간 검색 하이라이트',
  parameters: {
    docs: {
      description: {
        story: '검색어 입력 시 일치하는 텍스트가 실시간으로 강조됩니다.'
      }
    }
  },
  render: () => <SearchHighlightDemo />
}`,...(F=(A=p.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var w,V,B;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '커스텀 강조 렌더링',
  parameters: {
    docs: {
      description: {
        story: 'mark prop으로 커스텀 강조 요소를 렌더링합니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '24px',
    fontFamily: 'system-ui',
    maxWidth: '560px'
  }}>
      <p style={{
      fontSize: '15px',
      lineHeight: 1.8,
      color: '#374151'
    }}>
        <Highlight query={['중요', '핵심']} mark={text => <span style={{
        background: 'linear-gradient(120deg, #a78bfa 0%, #60a5fa 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 800
      }}>{text}</span>}>
          이 문서의 중요한 내용은 핵심 개념을 이해하는 것입니다. 중요한 것은 실습이며, 핵심은 꾸준함입니다.
        </Highlight>
      </p>
    </div>
}`,...(B=(V=m.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var D,I,E;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '대소문자 구분',
  parameters: {
    docs: {
      description: {
        story: 'caseSensitive=true로 대소문자를 구분하여 강조합니다.'
      }
    }
  },
  render: () => {
    const text = 'React, react, REACT — 세 가지 표기를 비교합니다.';
    return <div style={{
      padding: '24px',
      fontFamily: 'system-ui',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '480px'
    }}>
        <div>
          <div style={{
          fontSize: '12px',
          color: '#9ca3af',
          marginBottom: '6px'
        }}>caseSensitive: false (기본)</div>
          <p style={{
          margin: 0,
          fontSize: '15px',
          lineHeight: 1.8,
          color: '#374151'
        }}>
            <Highlight query="react" caseSensitive={false}>{text}</Highlight>
          </p>
        </div>
        <div>
          <div style={{
          fontSize: '12px',
          color: '#9ca3af',
          marginBottom: '6px'
        }}>caseSensitive: true (React만 매칭)</div>
          <p style={{
          margin: 0,
          fontSize: '15px',
          lineHeight: 1.8,
          color: '#374151'
        }}>
            <Highlight query="React" caseSensitive={true}>{text}</Highlight>
          </p>
        </div>
      </div>;
  }
}`,...(E=(I=g.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};const Y=["Default","MultipleKeywords","ColorVariants","SearchResult","CustomMark","CaseSensitive"];export{g as CaseSensitive,d as ColorVariants,m as CustomMark,l as Default,c as MultipleKeywords,p as SearchResult,Y as __namedExportsOrder,X as default};
