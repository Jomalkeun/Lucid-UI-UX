import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as ie,c as le}from"./reference-types-CC3VHbJD.js";import{u as de}from"./useCountdown-B0AmASgx.js";import{R as pe,r as z}from"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";const S={sm:{fs:"28px",lh:"36px",labFs:"10px"},md:{fs:"48px",lh:"60px",labFs:"12px"},lg:{fs:"64px",lh:"80px",labFs:"13px"},xl:{fs:"96px",lh:"112px",labFs:"14px"}},D={days:"일",hours:"시",minutes:"분",seconds:"초"};function ce({value:s,size:n="md",color:t}){const[r,d]=z.useState(s),[p,i]=z.useState(!1),{fs:c,lh:l}=S[n];return z.useEffect(()=>{if(s!==r){i(!0);const j=setTimeout(()=>{d(s),i(!1)},300);return()=>clearTimeout(j)}},[s,r]),e.jsxs("div",{style:{display:"inline-flex",flexDirection:"column",overflow:"hidden",height:l,position:"relative",fontVariantNumeric:"tabular-nums"},children:[e.jsx("span",{style:{fontSize:c,fontWeight:800,color:t??"var(--foreground)",lineHeight:l,transition:"transform 0.3s ease",transform:p?"translateY(-100%)":"translateY(0)"},children:String(r).padStart(2,"0")}),e.jsx("span",{style:{fontSize:c,fontWeight:800,color:t??"var(--foreground)",lineHeight:l,position:"absolute",top:"100%",transition:"transform 0.3s ease",transform:p?"translateY(-100%)":"translateY(0)"},children:String(s).padStart(2,"0")})]})}function a({value:s,to:n,format:t=["hours","minutes","seconds"],size:r="md",color:d,separator:p=":",showLabels:i=!1,onComplete:c,ariaLive:l="off",ariaLabel:j}){const m=de(n,s,c),se=Math.floor(m/86400),ae=Math.floor(m%86400/3600),re=Math.floor(m%3600/60),te=m%60,L={days:se,hours:ae,minutes:re,seconds:te},{labFs:F}=S[r],oe=t.map(o=>`${L[o]}${D[o]}`).join(" ");return e.jsx("div",{role:"timer","aria-label":j??`남은 시간 ${oe}`,"aria-live":l,style:{display:"inline-flex",alignItems:"flex-end",gap:"4px",fontFamily:"system-ui"},children:t.map((o,ne)=>e.jsxs(pe.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(ce,{value:L[o],size:r,color:d}),i&&e.jsx("span",{"aria-hidden":"true",style:{fontSize:F,color:"var(--muted-foreground)",marginTop:"2px"},children:D[o]})]}),ne<t.length-1&&e.jsx("span",{"aria-hidden":"true",style:{fontSize:S[r].fs,fontWeight:800,color:d??"var(--foreground)",paddingBottom:i?F:0,lineHeight:S[r].lh},children:p})]},o))})}a.__docgenInfo={description:"",methods:[],displayName:"Countdown",props:{value:{required:!1,tsType:{name:"number"},description:""},to:{required:!1,tsType:{name:"union",raw:"Date | string",elements:[{name:"Date"},{name:"string"}]},description:""},format:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"('days' | 'hours' | 'minutes' | 'seconds')[]"},description:"",defaultValue:{value:"['hours', 'minutes', 'seconds']",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:""},separator:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"':'",computed:!1}},showLabels:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},ariaLive:{required:!1,tsType:{name:"union",raw:"'off' | 'polite'",elements:[{name:"literal",value:"'off'"},{name:"literal",value:"'polite'"}]},description:"Controls whether changing time is announced by assistive technology.",defaultValue:{value:"'off'",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""}}};const me=ie([le("daisyUI","Countdown","https://daisyui.com/components/countdown/")]),be={title:"Atoms/Display/Countdown",component:a,tags:["autodocs","ref:daisy-ui"],parameters:{references:me,docs:{description:{component:"\n## Countdown\n\n숫자가 롤링 애니메이션으로 바뀌는 카운트다운 표시 컴포넌트입니다.\n각 자릿수가 슬롯머신처럼 전환되는 시각적 효과로 남은 시간을 표현합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `value` | `number` | - | 초 단위 정적 값 |\n| `to` | `Date\\|string` | - | 목표 날짜 (자동 카운트다운) |\n| `format` | `string[]` | `['hours','minutes','seconds']` | 표시 단위 |\n| `size` | `'sm'\\|'md'\\|'lg'\\|'xl'` | `'md'` | 크기 |\n| `color` | `string` | `'#111'` | 텍스트 색상 |\n| `separator` | `string` | `':'` | 구분자 |\n| `showLabels` | `boolean` | `false` | 단위 레이블 표시 |\n        "}}},argTypes:{size:{control:"select",options:["sm","md","lg","xl"],table:{category:"Appearance"}},color:{control:"color",table:{category:"Appearance"}},separator:{control:"text",table:{category:"Appearance"}},showLabels:{control:"boolean",table:{category:"Appearance"}},ariaLive:{control:"select",options:["off","polite"],table:{category:"Accessibility"}},ariaLabel:{control:"text",table:{category:"Accessibility"}}},args:{value:7384,size:"md",color:"#111",separator:":",showLabels:!1,format:["hours","minutes","seconds"]}},ue=new Date(Date.now()+72*3600*1e3).toISOString(),fe=new Date(Date.now()+3661*1e3).toISOString(),u={name:"기본",render:s=>e.jsx("div",{style:{padding:"24px",fontFamily:"system-ui"},children:e.jsx(a,{...s})})},f={name:"크기 변형",parameters:{docs:{description:{story:"sm, md, lg, xl 크기 비교입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"16px",fontFamily:"system-ui",alignItems:"flex-start"},children:["sm","md","lg","xl"].map(s=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#9ca3af",width:"24px"},children:s}),e.jsx(a,{value:7384,size:s})]},s))})},x={name:"레이블 표시",parameters:{docs:{description:{story:"각 자릿수 아래에 단위 레이블이 표시됩니다."}}},render:()=>e.jsx("div",{style:{padding:"24px",fontFamily:"system-ui"},children:e.jsx(a,{value:266584,format:["days","hours","minutes","seconds"],showLabels:!0,size:"lg"})})},y={name:"상태 안내 타이머",args:{value:65,ariaLive:"polite",ariaLabel:"인증 코드 만료까지 1분 5초",showLabels:!0},parameters:{docs:{description:{story:'짧은 제한 시간처럼 변경을 알려야 하는 경우에만 `ariaLive="polite"`를 사용합니다.'}}}},g={name:"모든 단위 (일/시/분/초)",parameters:{docs:{description:{story:"일, 시, 분, 초를 모두 표시합니다."}}},render:()=>e.jsx("div",{style:{padding:"24px",fontFamily:"system-ui"},children:e.jsx(a,{value:266584,format:["days","hours","minutes","seconds"],showLabels:!0,size:"md",separator:":"})})},h={name:"색상 변형",parameters:{docs:{description:{story:"다양한 색상의 카운트다운입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"16px",fontFamily:"system-ui"},children:[{color:"#3b82f6",label:"Blue"},{color:"#10b981",label:"Green"},{color:"#ef4444",label:"Red (긴박감)"},{color:"#f59e0b",label:"Amber"},{color:"#8b5cf6",label:"Purple"}].map(({color:s,label:n})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#9ca3af",width:"100px"},children:n}),e.jsx(a,{value:3661,color:s,size:"sm",showLabels:!0})]},s))})},v={name:"실시간 카운트다운 (1시간 후)",parameters:{docs:{description:{story:"목표 날짜까지 실시간으로 카운트다운합니다."}}},render:()=>e.jsxs("div",{style:{padding:"24px",fontFamily:"system-ui",textAlign:"center"},children:[e.jsx("div",{style:{fontSize:"13px",color:"#9ca3af",marginBottom:"16px"},children:"이벤트 종료까지"}),e.jsx(a,{to:fe,showLabels:!0,size:"lg",color:"#ef4444"})]})},b={name:"세일 타이머",parameters:{docs:{description:{story:"쇼핑몰 타임세일 타이머 활용 예시입니다."}}},render:()=>e.jsxs("div",{style:{padding:"24px",background:"#ef4444",borderRadius:"16px",fontFamily:"system-ui",textAlign:"center",maxWidth:"360px"},children:[e.jsx("div",{style:{fontSize:"14px",color:"rgba(255,255,255,0.85)",marginBottom:"8px",fontWeight:600},children:"⚡ 타임세일 종료까지"}),e.jsx(a,{to:ue,format:["days","hours","minutes","seconds"],showLabels:!0,size:"lg",color:"#fff"}),e.jsx("div",{style:{marginTop:"16px",background:"#fff",color:"#ef4444",padding:"10px 24px",borderRadius:"8px",fontWeight:700,fontSize:"14px",display:"inline-block"},children:"지금 구매하기 →"})]})},w={name:"구분자 변형",parameters:{docs:{description:{story:"다양한 구분자 스타일입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"16px",fontFamily:"system-ui"},children:[":","-","/"," "].map(s=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsxs("span",{style:{fontSize:"12px",color:"#9ca3af",width:"60px"},children:['"',s||"space",'"']}),e.jsx(a,{value:7384,separator:s,size:"sm"})]},s))})};var T,C,A;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '기본',
  render: args => <div style={{
    padding: '24px',
    fontFamily: 'system-ui'
  }}>
      <Countdown {...args} />
    </div>
}`,...(A=(C=u.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var I,V,R;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(R=(V=f.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var W,k,q;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(q=(k=x.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var B,H,P;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '상태 안내 타이머',
  args: {
    value: 65,
    ariaLive: 'polite',
    ariaLabel: '인증 코드 만료까지 1분 5초',
    showLabels: true
  } as any,
  parameters: {
    docs: {
      description: {
        story: '짧은 제한 시간처럼 변경을 알려야 하는 경우에만 \`ariaLive="polite"\`를 사용합니다.'
      }
    }
  }
}`,...(P=(H=y.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var E,Y,_;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(_=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var M,O,U;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(U=(O=h.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var $,G,N;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
    }}>
        이벤트 종료까지
      </div>
      <Countdown to={in1Hour} showLabels size="lg" color="#ef4444" />
    </div>
}`,...(N=(G=v.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
    }}>
        ⚡ 타임세일 종료까지
      </div>
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
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,ee;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
      }}>
            "{sep || 'space'}"
          </span>
          <Countdown value={7384} separator={sep} size="sm" />
        </div>)}
    </div>
}`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const we=["Default","SizeVariants","WithLabels","AnnouncedTimer","AllUnits","ColorVariants","LiveCountdown","SaleTimer","SeparatorVariants"];export{g as AllUnits,y as AnnouncedTimer,h as ColorVariants,u as Default,v as LiveCountdown,b as SaleTimer,w as SeparatorVariants,f as SizeVariants,x as WithLabels,we as __namedExportsOrder,be as default};
