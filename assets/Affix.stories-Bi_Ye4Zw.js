import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as H}from"./reference-types-4ftiVeOu.js";import{r as p}from"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";function t({offsetTop:r,offsetBottom:o,children:i,onChange:s}){const h=p.useRef(null),[d,q]=p.useState(!1),[u,b]=p.useState(null);p.useEffect(()=>{const v=h.current;if(!v)return;const g=()=>{const a=v.getBoundingClientRect(),O=r!==void 0,P=o!==void 0;let n=!1;O&&a.top<=r&&(n=!0),P&&window.innerHeight-a.bottom<=o&&(n=!0),n!==d&&(b(n?{width:a.width,height:a.height}:null),q(n),s==null||s(n))};return window.addEventListener("scroll",g,{passive:!0}),g(),()=>window.removeEventListener("scroll",g)},[r,o,d,s]);const F=d?{position:"fixed",zIndex:100,...r!==void 0?{top:r}:{},...o!==void 0?{bottom:o}:{}}:{};return e.jsxs(e.Fragment,{children:[d&&u&&e.jsx("div",{style:{width:u.width,height:u.height}}),e.jsx("div",{ref:h,style:F,children:i})]})}t.__docgenInfo={description:"",methods:[],displayName:"Affix",props:{offsetTop:{required:!1,tsType:{name:"number"},description:""},offsetBottom:{required:!1,tsType:{name:"number"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},target:{required:!1,tsType:{name:"signature",type:"function",raw:"() => HTMLElement | Window",signature:{arguments:[],return:{name:"union",raw:"HTMLElement | Window",elements:[{name:"HTMLElement"},{name:"Window"}]}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(affixed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"affixed"}],return:{name:"void"}}},description:""}}};const M=H([{library:"Element Plus",component:"Affix",url:"https://element-plus.org/en-US/component/affix",usedFor:["behavior","api","comparison"],relation:"compared"},{library:"Ant Design",component:"Affix",url:"https://ant.design/components/affix/",usedFor:["comparison"],relation:"compared"}]),J={title:"Layout/Primitives/Affix",component:t,tags:["autodocs","ref:ant-design","ref:element-plus"],parameters:{references:M,docs:{description:{component:"\n## Affix\n\n스크롤 시 요소를 뷰포트의 지정된 위치에 고정시키는 래퍼 컴포넌트입니다.\n`offsetTop` / `offsetBottom`을 지정해 상단·하단 기준으로 sticky 포지셔닝을 적용합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `offsetTop` | `number` | - | 상단 고정 오프셋(px) |\n| `offsetBottom` | `number` | - | 하단 고정 오프셋(px) |\n| `children` | `ReactNode` | - | 고정할 요소 |\n| `onChange` | `(affixed: boolean) => void` | - | 고정 상태 변경 콜백 |\n\n---\n\n### 주의사항\n\n- `offsetTop`과 `offsetBottom`을 동시에 사용하면 `offsetTop`이 우선됩니다.\n- Storybook 환경에서는 스크롤 컨테이너가 제한될 수 있습니다.\n        "}}},argTypes:{offsetTop:{control:{type:"number",min:0,max:500},description:"상단 오프셋(px)",table:{category:"Layout"}},offsetBottom:{control:{type:"number",min:0,max:500},description:"하단 오프셋(px)",table:{category:"Layout"}}},args:{offsetTop:0}},y=({label:r="고정 버튼",color:o="#3b82f6"})=>e.jsx("button",{style:{padding:"10px 24px",background:o,color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:600,fontSize:"14px"},children:r}),l={name:"기본 (offsetTop: 0)",parameters:{docs:{description:{story:"페이지 상단에 고정되는 기본 Affix입니다. 스크롤 시 상단에 붙습니다."}}},render:r=>e.jsxs("div",{style:{height:"400px",overflow:"auto",background:"#f8f9fa",padding:"16px",border:"1px solid #dee2e6",borderRadius:"8px"},children:[e.jsx("p",{style:{color:"#666",marginBottom:"100px"},children:"⬇ 아래로 스크롤하세요"}),e.jsx(t,{...r,children:e.jsx(y,{label:"상단 고정 버튼"})}),Array.from({length:20}).map((o,i)=>e.jsxs("p",{style:{padding:"8px 0",borderBottom:"1px solid #eee",color:"#333"},children:["콘텐츠 행 ",i+1]},i))]})},f={name:"상단 100px 오프셋",parameters:{docs:{description:{story:"상단에서 100px 떨어진 위치에 고정됩니다."}}},render:()=>e.jsxs("div",{style:{height:"400px",overflow:"auto",background:"#f8f9fa",padding:"16px",border:"1px solid #dee2e6",borderRadius:"8px"},children:[e.jsx(t,{offsetTop:100,children:e.jsx(y,{label:"100px 오프셋 버튼",color:"#10b981"})}),Array.from({length:20}).map((r,o)=>e.jsxs("p",{style:{padding:"8px 0",color:"#333"},children:["콘텐츠 ",o+1]},o))]})},c={name:"하단 고정",parameters:{docs:{description:{story:"화면 하단에 고정되는 Affix입니다."}}},render:()=>e.jsxs("div",{style:{height:"400px",overflow:"auto",background:"#f8f9fa",padding:"16px",border:"1px solid #dee2e6",borderRadius:"8px"},children:[Array.from({length:20}).map((r,o)=>e.jsxs("p",{style:{padding:"8px 0",color:"#333"},children:["콘텐츠 ",o+1]},o)),e.jsx(t,{offsetBottom:24,children:e.jsx(y,{label:"하단 고정 버튼",color:"#ef4444"})})]})},x={name:"상단 내비게이션 고정",parameters:{docs:{description:{story:"스크롤 시 상단에 고정되는 네비게이션 바입니다."}}},render:()=>e.jsxs("div",{style:{height:"500px",overflow:"auto",border:"1px solid #dee2e6",borderRadius:"8px"},children:[e.jsx("div",{style:{padding:"20px",background:"#1a1a2e",color:"#fff",textAlign:"center"},children:e.jsx("h2",{style:{margin:0},children:"페이지 헤더"})}),e.jsx(t,{offsetTop:0,children:e.jsx("nav",{style:{background:"#fff",borderBottom:"2px solid #3b82f6",padding:"0 20px",display:"flex",gap:"20px"},children:["홈","제품","서비스","문의"].map(r=>e.jsx("a",{href:"#",style:{display:"block",padding:"12px 0",color:"#333",textDecoration:"none",fontSize:"14px",fontWeight:500},children:r},r))})}),Array.from({length:30}).map((r,o)=>e.jsxs("p",{style:{padding:"12px 20px",borderBottom:"1px solid #f0f0f0",color:"#333"},children:["콘텐츠 섹션 ",o+1]},o))]})},m={name:"플로팅 액션 버튼",parameters:{docs:{description:{story:"하단에 고정되는 플로팅 액션 버튼입니다."}}},render:()=>e.jsxs("div",{style:{height:"400px",overflow:"auto",padding:"16px",position:"relative",border:"1px solid #dee2e6",borderRadius:"8px"},children:[Array.from({length:20}).map((r,o)=>e.jsxs("p",{style:{padding:"8px 0",color:"#333"},children:["콘텐츠 ",o+1]},o)),e.jsx(t,{offsetBottom:32,children:e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",paddingRight:"32px"},children:e.jsx("button",{style:{width:"56px",height:"56px",borderRadius:"50%",background:"#3b82f6",color:"#fff",border:"none",cursor:"pointer",fontSize:"24px",boxShadow:"0 4px 16px rgba(59,130,246,0.4)"},children:"+"})})})]})};var A,j,w;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '기본 (offsetTop: 0)',
  parameters: {
    docs: {
      description: {
        story: '페이지 상단에 고정되는 기본 Affix입니다. 스크롤 시 상단에 붙습니다.'
      }
    }
  },
  render: args => <div style={{
    height: '400px',
    overflow: 'auto',
    background: '#f8f9fa',
    padding: '16px',
    border: '1px solid #dee2e6',
    borderRadius: '8px'
  }}>
      <p style={{
      color: '#666',
      marginBottom: '100px'
    }}>⬇ 아래로 스크롤하세요</p>
      <Affix {...args}>
        <SampleButton label="상단 고정 버튼" />
      </Affix>
      {Array.from({
      length: 20
    }).map((_, i) => <p key={i} style={{
      padding: '8px 0',
      borderBottom: '1px solid #eee',
      color: '#333'
    }}>콘텐츠 행 {i + 1}</p>)}
    </div>
}`,...(w=(j=l.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var B,k,R;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '상단 100px 오프셋',
  parameters: {
    docs: {
      description: {
        story: '상단에서 100px 떨어진 위치에 고정됩니다.'
      }
    }
  },
  render: () => <div style={{
    height: '400px',
    overflow: 'auto',
    background: '#f8f9fa',
    padding: '16px',
    border: '1px solid #dee2e6',
    borderRadius: '8px'
  }}>
      <Affix offsetTop={100}>
        <SampleButton label="100px 오프셋 버튼" color="#10b981" />
      </Affix>
      {Array.from({
      length: 20
    }).map((_, i) => <p key={i} style={{
      padding: '8px 0',
      color: '#333'
    }}>콘텐츠 {i + 1}</p>)}
    </div>
}`,...(R=(k=f.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var T,S,_;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '하단 고정',
  parameters: {
    docs: {
      description: {
        story: '화면 하단에 고정되는 Affix입니다.'
      }
    }
  },
  render: () => <div style={{
    height: '400px',
    overflow: 'auto',
    background: '#f8f9fa',
    padding: '16px',
    border: '1px solid #dee2e6',
    borderRadius: '8px'
  }}>
      {Array.from({
      length: 20
    }).map((_, i) => <p key={i} style={{
      padding: '8px 0',
      color: '#333'
    }}>콘텐츠 {i + 1}</p>)}
      <Affix offsetBottom={24}>
        <SampleButton label="하단 고정 버튼" color="#ef4444" />
      </Affix>
    </div>
}`,...(_=(S=c.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var E,L,z;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '상단 내비게이션 고정',
  parameters: {
    docs: {
      description: {
        story: '스크롤 시 상단에 고정되는 네비게이션 바입니다.'
      }
    }
  },
  render: () => <div style={{
    height: '500px',
    overflow: 'auto',
    border: '1px solid #dee2e6',
    borderRadius: '8px'
  }}>
      <div style={{
      padding: '20px',
      background: '#1a1a2e',
      color: '#fff',
      textAlign: 'center'
    }}>
        <h2 style={{
        margin: 0
      }}>페이지 헤더</h2>
      </div>
      <Affix offsetTop={0}>
        <nav style={{
        background: '#fff',
        borderBottom: '2px solid #3b82f6',
        padding: '0 20px',
        display: 'flex',
        gap: '20px'
      }}>
          {['홈', '제품', '서비스', '문의'].map(item => <a key={item} href="#" style={{
          display: 'block',
          padding: '12px 0',
          color: '#333',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: 500
        }}>
              {item}
            </a>)}
        </nav>
      </Affix>
      {Array.from({
      length: 30
    }).map((_, i) => <p key={i} style={{
      padding: '12px 20px',
      borderBottom: '1px solid #f0f0f0',
      color: '#333'
    }}>콘텐츠 섹션 {i + 1}</p>)}
    </div>
}`,...(z=(L=x.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var D,N,W;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '플로팅 액션 버튼',
  parameters: {
    docs: {
      description: {
        story: '하단에 고정되는 플로팅 액션 버튼입니다.'
      }
    }
  },
  render: () => <div style={{
    height: '400px',
    overflow: 'auto',
    padding: '16px',
    position: 'relative',
    border: '1px solid #dee2e6',
    borderRadius: '8px'
  }}>
      {Array.from({
      length: 20
    }).map((_, i) => <p key={i} style={{
      padding: '8px 0',
      color: '#333'
    }}>콘텐츠 {i + 1}</p>)}
      <Affix offsetBottom={32}>
        <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '32px'
      }}>
          <button style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#3b82f6',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          fontSize: '24px',
          boxShadow: '0 4px 16px rgba(59,130,246,0.4)'
        }}>
            +
          </button>
        </div>
      </Affix>
    </div>
}`,...(W=(N=m.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};const K=["Default","OffsetTop100","OffsetBottom","NavigationBar","FloatingButton"];export{l as Default,m as FloatingButton,x as NavigationBar,c as OffsetBottom,f as OffsetTop100,K as __namedExportsOrder,J as default};
