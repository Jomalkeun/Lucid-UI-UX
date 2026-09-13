import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as se}from"./reference-types-4ftiVeOu.js";import{r as c,R as ae}from"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";const j={sm:{fs:"28px",lh:"36px",labFs:"10px"},md:{fs:"48px",lh:"60px",labFs:"12px"},lg:{fs:"64px",lh:"80px",labFs:"13px"},xl:{fs:"96px",lh:"112px",labFs:"14px"}},te={days:"일",hours:"시",minutes:"분",seconds:"초"};function re({value:s,size:t="md",color:d="#111"}){const[r,m]=c.useState(s),[u,p]=c.useState(!1),{fs:o,lh:i}=j[t];return c.useEffect(()=>{if(s!==r){p(!0);const l=setTimeout(()=>{m(s),p(!1)},300);return()=>clearTimeout(l)}},[s,r]),e.jsxs("div",{style:{display:"inline-flex",flexDirection:"column",overflow:"hidden",height:i,position:"relative",fontVariantNumeric:"tabular-nums"},children:[e.jsx("span",{style:{fontSize:o,fontWeight:800,color:d,lineHeight:i,transition:"transform 0.3s ease",transform:u?"translateY(-100%)":"translateY(0)"},children:String(r).padStart(2,"0")}),e.jsx("span",{style:{fontSize:o,fontWeight:800,color:d,lineHeight:i,position:"absolute",top:"100%",transition:"transform 0.3s ease",transform:u?"translateY(-100%)":"translateY(0)"},children:String(s).padStart(2,"0")})]})}function a({value:s,to:t,format:d=["hours","minutes","seconds"],size:r="md",color:m="#111",separator:u=":",showLabels:p=!1,onComplete:o}){const i=()=>{if(t){const n=new Date(t).getTime()-Date.now();return Math.max(0,Math.floor(n/1e3))}return s??0},[l,K]=c.useState(i);c.useEffect(()=>{if(t){const n=setInterval(()=>{const f=i();K(f),f===0&&(clearInterval(n),o==null||o())},1e3);return()=>clearInterval(n)}},[t]);const Q=Math.floor(l/86400),X=Math.floor(l%86400/3600),Z=Math.floor(l%3600/60),$=l%60,ee={days:Q,hours:X,minutes:Z,seconds:$},{labFs:z}=j[r];return e.jsx("div",{style:{display:"inline-flex",alignItems:"flex-end",gap:"4px",fontFamily:"system-ui"},children:d.map((n,f)=>e.jsxs(ae.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(re,{value:ee[n],size:r,color:m}),p&&e.jsx("span",{style:{fontSize:z,color:"#9ca3af",marginTop:"2px"},children:te[n]})]}),f<d.length-1&&e.jsx("span",{style:{fontSize:j[r].fs,fontWeight:800,color:m,paddingBottom:p?z:0,lineHeight:j[r].lh},children:u})]},n))})}a.__docgenInfo={description:"",methods:[],displayName:"Countdown",props:{value:{required:!1,tsType:{name:"number"},description:""},to:{required:!1,tsType:{name:"union",raw:"Date | string",elements:[{name:"Date"},{name:"string"}]},description:""},format:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"('days' | 'hours' | 'minutes' | 'seconds')[]"},description:"",defaultValue:{value:"['hours', 'minutes', 'seconds']",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#111'",computed:!1}},separator:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"':'",computed:!1}},showLabels:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ne=se([{library:"daisyUI",component:"Countdown",url:"https://daisyui.com/components/countdown/",usedFor:["comparison"],relation:"compared"}]),me={title:"Atoms/Display/Countdown",component:a,tags:["autodocs","ref:daisy-ui"],parameters:{references:ne,docs:{description:{component:"\n## Countdown\n\n숫자가 롤링 애니메이션으로 바뀌는 카운트다운 표시 컴포넌트입니다.\n각 자릿수가 슬롯머신처럼 전환되는 시각적 효과로 남은 시간을 표현합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `value` | `number` | - | 초 단위 정적 값 |\n| `to` | `Date\\|string` | - | 목표 날짜 (자동 카운트다운) |\n| `format` | `string[]` | `['hours','minutes','seconds']` | 표시 단위 |\n| `size` | `'sm'\\|'md'\\|'lg'\\|'xl'` | `'md'` | 크기 |\n| `color` | `string` | `'#111'` | 텍스트 색상 |\n| `separator` | `string` | `':'` | 구분자 |\n| `showLabels` | `boolean` | `false` | 단위 레이블 표시 |\n        "}}},argTypes:{size:{control:"select",options:["sm","md","lg","xl"],table:{category:"Appearance"}},color:{control:"color",table:{category:"Appearance"}},separator:{control:"text",table:{category:"Appearance"}},showLabels:{control:"boolean",table:{category:"Appearance"}}},args:{value:7384,size:"md",color:"#111",separator:":",showLabels:!1,format:["hours","minutes","seconds"]}},oe=new Date(Date.now()+72*3600*1e3).toISOString(),ie=new Date(Date.now()+3661*1e3).toISOString(),x={name:"기본",render:s=>e.jsx("div",{style:{padding:"24px",fontFamily:"system-ui"},children:e.jsx(a,{...s})})},y={name:"크기 변형",parameters:{docs:{description:{story:"sm, md, lg, xl 크기 비교입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"16px",fontFamily:"system-ui",alignItems:"flex-start"},children:["sm","md","lg","xl"].map(s=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#9ca3af",width:"24px"},children:s}),e.jsx(a,{value:7384,size:s})]},s))})},g={name:"레이블 표시",parameters:{docs:{description:{story:"각 자릿수 아래에 단위 레이블이 표시됩니다."}}},render:()=>e.jsx("div",{style:{padding:"24px",fontFamily:"system-ui"},children:e.jsx(a,{value:266584,format:["days","hours","minutes","seconds"],showLabels:!0,size:"lg"})})},h={name:"모든 단위 (일/시/분/초)",parameters:{docs:{description:{story:"일, 시, 분, 초를 모두 표시합니다."}}},render:()=>e.jsx("div",{style:{padding:"24px",fontFamily:"system-ui"},children:e.jsx(a,{value:266584,format:["days","hours","minutes","seconds"],showLabels:!0,size:"md",separator:":"})})},v={name:"색상 변형",parameters:{docs:{description:{story:"다양한 색상의 카운트다운입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"16px",fontFamily:"system-ui"},children:[{color:"#3b82f6",label:"Blue"},{color:"#10b981",label:"Green"},{color:"#ef4444",label:"Red (긴박감)"},{color:"#f59e0b",label:"Amber"},{color:"#8b5cf6",label:"Purple"}].map(({color:s,label:t})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#9ca3af",width:"100px"},children:t}),e.jsx(a,{value:3661,color:s,size:"sm",showLabels:!0})]},s))})},b={name:"실시간 카운트다운 (1시간 후)",parameters:{docs:{description:{story:"목표 날짜까지 실시간으로 카운트다운합니다."}}},render:()=>e.jsxs("div",{style:{padding:"24px",fontFamily:"system-ui",textAlign:"center"},children:[e.jsx("div",{style:{fontSize:"13px",color:"#9ca3af",marginBottom:"16px"},children:"이벤트 종료까지"}),e.jsx(a,{to:ie,showLabels:!0,size:"lg",color:"#ef4444"})]})},w={name:"세일 타이머",parameters:{docs:{description:{story:"쇼핑몰 타임세일 타이머 활용 예시입니다."}}},render:()=>e.jsxs("div",{style:{padding:"24px",background:"#ef4444",borderRadius:"16px",fontFamily:"system-ui",textAlign:"center",maxWidth:"360px"},children:[e.jsx("div",{style:{fontSize:"14px",color:"rgba(255,255,255,0.85)",marginBottom:"8px",fontWeight:600},children:"⚡ 타임세일 종료까지"}),e.jsx(a,{to:oe,format:["days","hours","minutes","seconds"],showLabels:!0,size:"lg",color:"#fff"}),e.jsx("div",{style:{marginTop:"16px",background:"#fff",color:"#ef4444",padding:"10px 24px",borderRadius:"8px",fontWeight:700,fontSize:"14px",display:"inline-block"},children:"지금 구매하기 →"})]})},S={name:"구분자 변형",parameters:{docs:{description:{story:"다양한 구분자 스타일입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"16px",fontFamily:"system-ui"},children:[":","-","/"," "].map(s=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsxs("span",{style:{fontSize:"12px",color:"#9ca3af",width:"60px"},children:['"',s||"space",'"']}),e.jsx(a,{value:7384,separator:s,size:"sm"})]},s))})};var D,F,T;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '기본',
  render: args => <div style={{
    padding: '24px',
    fontFamily: 'system-ui'
  }}>
      <Countdown {...args} />
    </div>
}`,...(T=(F=x.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var I,L,A;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '크기 변형',
  parameters: {
    docs: {
      description: {
        story: 'sm, md, lg, xl 크기 비교입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '16px',
    fontFamily: 'system-ui',
    alignItems: 'flex-start'
  }}>
      {(['sm', 'md', 'lg', 'xl'] as const).map(size => <div key={size} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
          <span style={{
        fontSize: '12px',
        color: '#9ca3af',
        width: '24px'
      }}>{size}</span>
          <Countdown value={7384} size={size} />
        </div>)}
    </div>
}`,...(A=(L=y.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var C,R,V;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '레이블 표시',
  parameters: {
    docs: {
      description: {
        story: '각 자릿수 아래에 단위 레이블이 표시됩니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '24px',
    fontFamily: 'system-ui'
  }}>
      <Countdown value={259200 + 7384} format={['days', 'hours', 'minutes', 'seconds']} showLabels size="lg" />
    </div>
}`,...(V=(R=g.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var W,k,q;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '모든 단위 (일/시/분/초)',
  parameters: {
    docs: {
      description: {
        story: '일, 시, 분, 초를 모두 표시합니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '24px',
    fontFamily: 'system-ui'
  }}>
      <Countdown value={259200 + 7384} format={['days', 'hours', 'minutes', 'seconds']} showLabels size="md" separator=":" />
    </div>
}`,...(q=(k=h.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var B,E,H;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '색상 변형',
  parameters: {
    docs: {
      description: {
        story: '다양한 색상의 카운트다운입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '16px',
    fontFamily: 'system-ui'
  }}>
      {[{
      color: '#3b82f6',
      label: 'Blue'
    }, {
      color: '#10b981',
      label: 'Green'
    }, {
      color: '#ef4444',
      label: 'Red (긴박감)'
    }, {
      color: '#f59e0b',
      label: 'Amber'
    }, {
      color: '#8b5cf6',
      label: 'Purple'
    }].map(({
      color,
      label
    }) => <div key={color} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '20px'
    }}>
          <span style={{
        fontSize: '12px',
        color: '#9ca3af',
        width: '100px'
      }}>{label}</span>
          <Countdown value={3661} color={color} size="sm" showLabels />
        </div>)}
    </div>
}`,...(H=(E=v.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var M,P,Y;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: '실시간 카운트다운 (1시간 후)',
  parameters: {
    docs: {
      description: {
        story: '목표 날짜까지 실시간으로 카운트다운합니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '24px',
    fontFamily: 'system-ui',
    textAlign: 'center'
  }}>
      <div style={{
      fontSize: '13px',
      color: '#9ca3af',
      marginBottom: '16px'
    }}>이벤트 종료까지</div>
      <Countdown to={in1Hour} showLabels size="lg" color="#ef4444" />
    </div>
}`,...(Y=(P=b.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var _,O,U;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: '세일 타이머',
  parameters: {
    docs: {
      description: {
        story: '쇼핑몰 타임세일 타이머 활용 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '24px',
    background: '#ef4444',
    borderRadius: '16px',
    fontFamily: 'system-ui',
    textAlign: 'center',
    maxWidth: '360px'
  }}>
      <div style={{
      fontSize: '14px',
      color: 'rgba(255,255,255,0.85)',
      marginBottom: '8px',
      fontWeight: 600
    }}>⚡ 타임세일 종료까지</div>
      <Countdown to={in3Days} format={['days', 'hours', 'minutes', 'seconds']} showLabels size="lg" color="#fff" />
      <div style={{
      marginTop: '16px',
      background: '#fff',
      color: '#ef4444',
      padding: '10px 24px',
      borderRadius: '8px',
      fontWeight: 700,
      fontSize: '14px',
      display: 'inline-block'
    }}>
        지금 구매하기 →
      </div>
    </div>
}`,...(U=(O=w.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var G,N,J;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '구분자 변형',
  parameters: {
    docs: {
      description: {
        story: '다양한 구분자 스타일입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '16px',
    fontFamily: 'system-ui'
  }}>
      {[':', '-', '/', ' '].map(sep => <div key={sep} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
          <span style={{
        fontSize: '12px',
        color: '#9ca3af',
        width: '60px'
      }}>"{sep || 'space'}"</span>
          <Countdown value={7384} separator={sep} size="sm" />
        </div>)}
    </div>
}`,...(J=(N=S.parameters)==null?void 0:N.docs)==null?void 0:J.source}}};const ue=["Default","SizeVariants","WithLabels","AllUnits","ColorVariants","LiveCountdown","SaleTimer","SeparatorVariants"];export{h as AllUnits,v as ColorVariants,x as Default,b as LiveCountdown,w as SaleTimer,S as SeparatorVariants,y as SizeVariants,g as WithLabels,ue as __namedExportsOrder,me as default};
