import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-BxXVWNx3.js";import{d as W}from"./reference-types-4ftiVeOu.js";import"./_commonjsHelpers-CqkleIqs.js";function j({loading:r=!1,color:o="#3b82f6",size:s=3,position:a="top",reverse:i=!1}){const[t,l]=n.useState(0),[d,m]=n.useState(!1),c=n.useRef(null),v=n.useRef(null);if(n.useEffect(()=>(r?(m(!0),l(0),c.current=setInterval(()=>{l(p=>{if(p>=90)return p;const E=p<50?8:p<80?3:1;return Math.min(p+E,90)})},150)):(c.current&&clearInterval(c.current),l(100),v.current=setTimeout(()=>{m(!1),l(0)},400)),()=>{c.current&&clearInterval(c.current),v.current&&clearTimeout(v.current)}),[r]),!d&&!r)return null;const F={position:"fixed",[a]:0,left:i?"auto":0,right:i?0:"auto",width:`${t}%`,height:`${s}px`,background:o,zIndex:9999,transition:t===100?"width 0.2s ease, opacity 0.3s ease":"width 0.2s ease",opacity:t===100&&!r?0:1,boxShadow:`0 0 8px ${o}80`};return e.jsx("div",{style:F,role:"progressbar","aria-valuenow":t,"aria-valuemin":0,"aria-valuemax":100})}j.__docgenInfo={description:"",methods:[],displayName:"AjaxBar",props:{loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#3b82f6'",computed:!1}},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},position:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},reverse:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},skipHijack:{required:!1,tsType:{name:"boolean"},description:""}}};const _=W([{library:"Quasar",component:"Ajax Bar",url:"https://quasar.dev/vue-components/ajax-bar",usedFor:["design","behavior","api"],relation:"adapted",note:"화면 가장자리의 진행 표시 방식과 로딩 상태 중심 API를 React로 재구성했습니다."}]),K={title:"Atoms/Display/AjaxBar",component:j,tags:["autodocs","ref:quasar"],parameters:{references:_,docs:{description:{component:"\n## AjaxBar\n\nAJAX 요청이나 페이지 전환 중 화면 상단에 얇은 진행 바를 표시하는 컴포넌트입니다.\nGitHub·YouTube 스타일의 상단 로딩 인디케이터로, 전역 로딩 상태를 시각적으로 알립니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `loading` | `boolean` | `false` | 로딩 상태 |\n| `color` | `string` | `'#3b82f6'` | 바 색상 |\n| `size` | `number` | `3` | 바 두께(px) |\n| `position` | `'top' \\| 'bottom'` | `'top'` | 위치 |\n| `reverse` | `boolean` | `false` | 오른쪽에서 채워짐 |\n\n---\n\n### 동작 방식\n\n1. `loading=true`가 되면 0%에서 90%까지 점진적으로 증가\n2. `loading=false`가 되면 즉시 100%로 채워지고 페이드아웃\n        "}}},argTypes:{loading:{control:"boolean",description:"로딩 상태",table:{category:"State"}},color:{control:"color",description:"색상",table:{category:"Appearance"}},size:{control:{type:"range",min:1,max:10},description:"두께(px)",table:{category:"Appearance"}},position:{control:"select",options:["top","bottom"],description:"위치",table:{category:"Appearance"}},reverse:{control:"boolean",description:"역방향",table:{category:"Appearance"}}},args:{loading:!1,color:"#3b82f6",size:3,position:"top",reverse:!1}};function M(r){const[o,s]=n.useState(!1);return e.jsxs("div",{style:{position:"relative",height:"180px",fontFamily:"system-ui"},children:[e.jsx(j,{...r,loading:o}),e.jsxs("div",{style:{paddingTop:"20px",display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx("button",{onClick:()=>{s(!0),setTimeout(()=>s(!1),2e3)},style:{padding:"8px 20px",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer"},children:"🚀 2초 로딩"}),e.jsx("button",{onClick:()=>{s(!0),setTimeout(()=>s(!1),5e3)},style:{padding:"8px 20px",background:"#10b981",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer"},children:"⏳ 5초 로딩"}),e.jsx("button",{onClick:()=>s(!1),style:{padding:"8px 20px",background:"#ef4444",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer"},children:"✋ 중단"})]}),e.jsxs("p",{style:{marginTop:"16px",color:o?"#3b82f6":"#10b981",fontWeight:600},children:["상태: ",o?"로딩 중...":"완료"]})]})}function u({color:r,label:o}){const[s,a]=n.useState(0),[i,t]=n.useState(!1),l=()=>{t(!0),a(0);let d=0;const m=setInterval(()=>{d=Math.min(d+Math.random()*12,90),a(d)},150);setTimeout(()=>{clearInterval(m),a(100),setTimeout(()=>{t(!1),a(0)},400)},1800)};return e.jsxs("div",{style:{marginBottom:"12px"},children:[e.jsx("div",{style:{fontSize:"12px",color:"#6b7280",marginBottom:"4px"},children:o}),e.jsx("div",{style:{height:"4px",background:"#f3f4f6",borderRadius:"2px",overflow:"hidden",marginBottom:"6px"},children:e.jsx("div",{style:{height:"100%",width:`${s}%`,background:r,transition:"width 0.2s ease",boxShadow:`0 0 6px ${r}80`}})}),e.jsx("button",{onClick:l,disabled:i,style:{padding:"4px 12px",background:r,color:"#fff",border:"none",borderRadius:"4px",cursor:i?"default":"pointer",fontSize:"12px",opacity:i?.7:1},children:i?"로딩 중...":"시작"})]})}function O(){const[r,o]=n.useState(0),[s,a]=n.useState(!1),i=()=>{if(s)return;a(!0);let t=0;const l=setInterval(()=>{t=t<80?t+Math.random()*8:t+.5,o(Math.min(t,90))},200);setTimeout(()=>{clearInterval(l),o(100),setTimeout(()=>{a(!1),o(0)},400)},2500)};return e.jsxs("div",{children:[e.jsx("div",{style:{height:"3px",background:"#e1e4e8",borderRadius:"2px",overflow:"hidden",marginBottom:"16px"},children:s&&e.jsx("div",{style:{height:"100%",width:`${r}%`,background:"linear-gradient(90deg,#1d75fb,#59a3f7)",transition:"width 0.2s ease",boxShadow:"0 0 10px #1d75fb80"}})}),e.jsx("button",{onClick:i,style:{padding:"8px 20px",background:"#24292e",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px"},children:"GitHub 스타일 로딩 시작"})]})}function J(){const[r,o]=n.useState(0),[s,a]=n.useState(!1),i=()=>{if(s)return;a(!0);let t=0;const l=setInterval(()=>{t+=Math.random()*4,o(Math.min(t,90))},200);setTimeout(()=>{clearInterval(l),o(100),setTimeout(()=>{a(!1),o(0)},400)},3e3)};return e.jsxs("div",{children:[e.jsx("div",{style:{height:"3px",background:"transparent",marginBottom:"16px",position:"relative"},children:s&&e.jsx("div",{style:{position:"absolute",top:0,left:0,height:"100%",width:`${r}%`,background:"#ff0000",transition:"width 0.2s ease"},children:e.jsx("div",{style:{position:"absolute",right:"-4px",top:"-4px",width:"11px",height:"11px",borderRadius:"50%",background:"#ff0000",boxShadow:"0 0 8px #ff000080"}})})}),e.jsx("button",{onClick:i,style:{padding:"8px 20px",background:"#ff0000",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"14px"},children:"▶ YouTube 스타일 로딩"})]})}const f={name:"기본 (토글 데모)",parameters:{docs:{description:{story:"버튼 클릭으로 로딩 상태를 토글하는 기본 AjaxBar입니다."}}},render:r=>e.jsx(M,{...r})},x={name:"색상 변형",parameters:{docs:{description:{story:"다양한 색상의 AjaxBar 프리뷰입니다. 각 버튼을 눌러 로딩을 시뮬레이션하세요."}}},render:()=>e.jsxs("div",{style:{padding:"16px",fontFamily:"system-ui",maxWidth:"400px"},children:[e.jsx(u,{color:"#3b82f6",label:"Blue (기본)"}),e.jsx(u,{color:"#ef4444",label:"Red (에러)"}),e.jsx(u,{color:"#10b981",label:"Green (성공)"}),e.jsx(u,{color:"#8b5cf6",label:"Purple"}),e.jsx(u,{color:"#f59e0b",label:"Orange"})]})},b={name:"두께 변형",parameters:{docs:{description:{story:"1px~8px 두께 비교입니다."}}},render:()=>e.jsx("div",{style:{padding:"16px",fontFamily:"system-ui",display:"flex",flexDirection:"column",gap:"16px"},children:[1,2,3,4,6,8].map(r=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:"12px",color:"#6b7280",marginBottom:"4px"},children:["size=",r,"px"]}),e.jsx("div",{style:{height:`${r}px`,background:"#3b82f6",borderRadius:`${r/2}px`,boxShadow:"0 0 6px #3b82f680"}})]},r))})},g={name:"GitHub 스타일",parameters:{docs:{description:{story:"GitHub의 페이지 전환 로딩 바와 유사한 스타일입니다."}}},render:()=>e.jsx(O,{})},h={name:"YouTube 스타일",parameters:{docs:{description:{story:"YouTube의 빨간색 진행 바 스타일입니다."}}},render:()=>e.jsx(J,{})},y={name:"하단 위치",parameters:{docs:{description:{story:"화면 하단에 표시되는 AjaxBar입니다."}}},render:r=>e.jsx(M,{...r,position:"bottom",color:"#10b981"})};var S,T,k;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '기본 (토글 데모)',
  parameters: {
    docs: {
      description: {
        story: '버튼 클릭으로 로딩 상태를 토글하는 기본 AjaxBar입니다.'
      }
    }
  },
  render: args => <DefaultDemo {...args} />
}`,...(k=(T=f.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var A,B,D;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '색상 변형',
  parameters: {
    docs: {
      description: {
        story: '다양한 색상의 AjaxBar 프리뷰입니다. 각 버튼을 눌러 로딩을 시뮬레이션하세요.'
      }
    }
  },
  render: () => <div style={{
    padding: '16px',
    fontFamily: 'system-ui',
    maxWidth: '400px'
  }}>
      <ColorDemo color="#3b82f6" label="Blue (기본)" />
      <ColorDemo color="#ef4444" label="Red (에러)" />
      <ColorDemo color="#10b981" label="Green (성공)" />
      <ColorDemo color="#8b5cf6" label="Purple" />
      <ColorDemo color="#f59e0b" label="Orange" />
    </div>
}`,...(D=(B=x.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var w,R,z;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '두께 변형',
  parameters: {
    docs: {
      description: {
        story: '1px~8px 두께 비교입니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '16px',
    fontFamily: 'system-ui',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      {[1, 2, 3, 4, 6, 8].map(size => <div key={size}>
          <div style={{
        fontSize: '12px',
        color: '#6b7280',
        marginBottom: '4px'
      }}>size={size}px</div>
          <div style={{
        height: \`\${size}px\`,
        background: '#3b82f6',
        borderRadius: \`\${size / 2}px\`,
        boxShadow: '0 0 6px #3b82f680'
      }} />
        </div>)}
    </div>
}`,...(z=(R=b.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var C,G,I;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'GitHub 스타일',
  parameters: {
    docs: {
      description: {
        story: 'GitHub의 페이지 전환 로딩 바와 유사한 스타일입니다.'
      }
    }
  },
  render: () => <GitHubDemo />
}`,...(I=(G=g.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var H,P,$;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'YouTube 스타일',
  parameters: {
    docs: {
      description: {
        story: 'YouTube의 빨간색 진행 바 스타일입니다.'
      }
    }
  },
  render: () => <YouTubeDemo />
}`,...($=(P=h.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var V,Y,q;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '하단 위치',
  parameters: {
    docs: {
      description: {
        story: '화면 하단에 표시되는 AjaxBar입니다.'
      }
    }
  },
  render: args => <DefaultDemo {...args} position="bottom" color="#10b981" />
}`,...(q=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};const U=["Default","ColorVariants","ThicknessVariants","GitHubStyle","YouTubeStyle","BottomPosition"];export{y as BottomPosition,x as ColorVariants,f as Default,g as GitHubStyle,b as ThicknessVariants,h as YouTubeStyle,U as __namedExportsOrder,K as default};
