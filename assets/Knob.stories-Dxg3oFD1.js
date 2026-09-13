import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-BxXVWNx3.js";import{d as ze}from"./reference-types-4ftiVeOu.js";import"./_commonjsHelpers-CqkleIqs.js";function a({value:r,defaultValue:l=0,min:t=0,max:s=100,step:u=1,size:c=80,color:p="#3b82f6",trackColor:m="#e5e7eb",thumbColor:fe="#fff",disabled:z=!1,showValue:be=!0,label:L,decimals:ye=0,startAngle:E=-135,rangeAngle:P=270,onChange:f}){const[xe,ge]=o.useState(l),b=r??xe,k=o.useRef(!1),G=o.useRef(0),X=o.useRef(b),ve=o.useRef(null),$=(b-t)/(s-t),y=c/2,x=c/2,i=c*.38,w=c*.12,F=n=>n*Math.PI/180,T=F(E),q=T+F(P*$),U=(n,d)=>{const I=y+i*Math.cos(n),R=x+i*Math.sin(n),g=y+i*Math.cos(d),Me=x+i*Math.sin(d),Ke=d-n>Math.PI?1:0;return`M ${I} ${R} A ${i} ${i} 0 ${Ke} 1 ${g} ${Me}`},Ve=n=>Math.max(t,Math.min(s,n)),he=n=>Math.round(n/u)*u,C=o.useCallback(n=>{if(!k.current)return;const d=G.current-n.clientY,I=s-t,R=d/200*I,g=Ve(he(X.current+R));ge(g),f==null||f(g)},[s,t,u,f]),D=o.useCallback(()=>{k.current=!1},[]);o.useEffect(()=>(window.addEventListener("mousemove",C),window.addEventListener("mouseup",D),()=>{window.removeEventListener("mousemove",C),window.removeEventListener("mouseup",D)}),[C,D]);const Ae=y+i*Math.cos(q),je=x+i*Math.sin(q),Se=F(E+P);return e.jsxs("div",{style:{display:"inline-flex",flexDirection:"column",alignItems:"center",gap:"6px",fontFamily:"system-ui"},children:[e.jsxs("svg",{ref:ve,width:c,height:c,style:{cursor:z?"not-allowed":"ns-resize",userSelect:"none",opacity:z?.5:1},onMouseDown:n=>{z||(k.current=!0,G.current=n.clientY,X.current=b)},children:[e.jsx("path",{d:U(T,Se),fill:"none",stroke:m,strokeWidth:w,strokeLinecap:"round"}),$>0&&e.jsx("path",{d:U(T,q),fill:"none",stroke:p,strokeWidth:w,strokeLinecap:"round"}),e.jsx("circle",{cx:Ae,cy:je,r:w*.7,fill:fe,stroke:p,strokeWidth:2}),be&&e.jsx("text",{x:y,y:x+5,textAnchor:"middle",fontSize:c*.18,fontWeight:"700",fill:"#111",fontFamily:"system-ui",children:b.toFixed(ye)})]}),L&&e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",fontWeight:600},children:L})]})}a.__docgenInfo={description:"",methods:[],displayName:"Knob",props:{value:{required:!1,tsType:{name:"number"},description:""},defaultValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"80",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#3b82f6'",computed:!1}},trackColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#e5e7eb'",computed:!1}},thumbColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#fff'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showValue:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},decimals:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},startAngle:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"-135",computed:!1}},rangeAngle:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"270",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""}}};const ke=ze([{library:"Quasar",component:"Knob",url:"https://quasar.dev/vue-components/knob",usedFor:["design","behavior","api"],relation:"adapted"}]),Ie={title:"Atoms/Inputs/Slider/Knob",component:a,tags:["autodocs","ref:quasar"],parameters:{references:ke,docs:{description:{component:"\n## Knob\n\nSVG 기반의 원형 회전 다이얼 입력 컴포넌트입니다. 드래그(상하 이동)로 값을 조절하며,\n오디오 믹서, 게임 컨트롤러, 파라미터 조정 UI 등에 활용됩니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `value` | `number` | - | 제어 값 |\n| `defaultValue` | `number` | `0` | 초기값 (비제어) |\n| `min` | `number` | `0` | 최솟값 |\n| `max` | `number` | `100` | 최댓값 |\n| `step` | `number` | `1` | 단계 |\n| `size` | `number` | `80` | 크기(px) |\n| `color` | `string` | `'#3b82f6'` | 진행 색상 |\n| `trackColor` | `string` | `'#e5e7eb'` | 트랙 색상 |\n| `disabled` | `boolean` | `false` | 비활성화 |\n| `showValue` | `boolean` | `true` | 값 표시 |\n| `label` | `string` | - | 하단 레이블 |\n| `decimals` | `number` | `0` | 소수점 자릿수 |\n| `startAngle` | `number` | `-135` | 시작 각도 |\n| `rangeAngle` | `number` | `270` | 범위 각도 |\n        "}}},argTypes:{value:{control:{type:"range",min:0,max:100},table:{category:"Value"}},defaultValue:{control:{type:"range",min:0,max:100},table:{category:"Value"}},min:{control:"number",table:{category:"Value"}},max:{control:"number",table:{category:"Value"}},step:{control:"number",table:{category:"Value"}},decimals:{control:{type:"range",min:0,max:4},table:{category:"Value"}},size:{control:{type:"range",min:40,max:200,step:8},table:{category:"Appearance"}},color:{control:"color",table:{category:"Appearance"}},trackColor:{control:"color",table:{category:"Appearance"}},thumbColor:{control:"color",table:{category:"Appearance"}},disabled:{control:"boolean",table:{category:"State"}},showValue:{control:"boolean",table:{category:"Appearance"}},label:{control:"text",table:{category:"Appearance"}},startAngle:{control:{type:"range",min:-180,max:0},table:{category:"Geometry"}},rangeAngle:{control:{type:"range",min:90,max:360},table:{category:"Geometry"}}},args:{defaultValue:50,min:0,max:100,step:1,size:80,color:"#3b82f6",trackColor:"#e5e7eb",thumbColor:"#fff",disabled:!1,showValue:!0,decimals:0,startAngle:-135,rangeAngle:270}},v={name:"기본"};function we(){const[r,l]=o.useState(60);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"16px",fontFamily:"system-ui"},children:[e.jsx(a,{value:r,onChange:l,size:100,color:"#8b5cf6",label:"VOLUME"}),e.jsx("input",{type:"range",min:0,max:100,value:r,onChange:t=>l(Number(t.target.value)),style:{width:"160px"}}),e.jsxs("div",{style:{fontSize:"14px",color:"#6b7280"},children:["값: ",r]})]})}const V={name:"제어 컴포넌트",parameters:{docs:{description:{story:"외부 슬라이더와 Knob이 동기화됩니다."}}},render:()=>e.jsx(we,{})},h={name:"크기 변형",parameters:{docs:{description:{story:"xs부터 xl까지 다양한 크기의 Knob입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"24px",fontFamily:"system-ui"},children:[40,56,80,112,150].map((r,l)=>e.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:e.jsx(a,{defaultValue:60,size:r,label:["XS","SM","MD","LG","XL"][l]})},r))})},A={name:"색상 변형",parameters:{docs:{description:{story:"다양한 색상 조합의 Knob입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap",fontFamily:"system-ui"},children:[{color:"#3b82f6",label:"Blue",val:70},{color:"#10b981",label:"Green",val:40},{color:"#f59e0b",label:"Amber",val:85},{color:"#ef4444",label:"Red",val:55},{color:"#8b5cf6",label:"Purple",val:65},{color:"#ec4899",label:"Pink",val:30}].map(({color:r,label:l,val:t})=>e.jsx(a,{defaultValue:t,color:r,label:l,size:70},l))})};function Fe(){const r=[{name:"BASS",color:"#ef4444",init:60},{name:"DRUM",color:"#f59e0b",init:75},{name:"LEAD",color:"#3b82f6",init:50},{name:"PAD",color:"#8b5cf6",init:40},{name:"VOX",color:"#10b981",init:85},{name:"FX",color:"#ec4899",init:30}],[l,t]=o.useState(r.map(s=>s.init));return e.jsx("div",{style:{background:"#1a1a2e",borderRadius:"16px",padding:"24px",display:"inline-flex",gap:"20px",fontFamily:"monospace"},children:r.map((s,u)=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{value:l[u],onChange:c=>t(p=>{const m=[...p];return m[u]=c,m}),size:60,color:s.color,trackColor:"#333",thumbColor:"#fff",label:s.name}),e.jsx("div",{style:{fontSize:"10px",color:s.color},children:l[u]})]},s.name))})}const j={name:"오디오 믹서",parameters:{docs:{description:{story:"오디오 채널 믹서 UI에 적용한 예시입니다."}}},render:()=>e.jsx(Fe,{})},S={name:"단계 변형",parameters:{docs:{description:{story:"다른 step 값으로 세밀도가 다른 Knob입니다."}}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",fontFamily:"system-ui"},children:[e.jsx(a,{defaultValue:50,step:10,label:"step:10",size:80,color:"#3b82f6"}),e.jsx(a,{defaultValue:50,step:5,label:"step:5",size:80,color:"#10b981"}),e.jsx(a,{defaultValue:.5,min:0,max:1,step:.1,decimals:1,label:"step:0.1",size:80,color:"#8b5cf6"})]})},M={name:"비활성화",render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px"},children:[e.jsx(a,{defaultValue:60,label:"활성"}),e.jsx(a,{defaultValue:60,disabled:!0,label:"비활성"})]})},K={name:"전체 원형",parameters:{docs:{description:{story:"startAngle과 rangeAngle로 다양한 호(arc)를 만들 수 있습니다."}}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",fontFamily:"system-ui"},children:[e.jsx(a,{defaultValue:50,startAngle:-90,rangeAngle:360,label:"Full",size:80,color:"#3b82f6"}),e.jsx(a,{defaultValue:50,startAngle:-90,rangeAngle:270,label:"270°",size:80,color:"#10b981"}),e.jsx(a,{defaultValue:50,startAngle:-135,rangeAngle:270,label:"Default",size:80,color:"#8b5cf6"})]})};var W,Y,_;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '기본'
}`,...(_=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var B,O,N;V.parameters={...V.parameters,docs:{...(B=V.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '제어 컴포넌트',
  parameters: {
    docs: {
      description: {
        story: '외부 슬라이더와 Knob이 동기화됩니다.'
      }
    }
  },
  render: () => <ControlledKnob />
}`,...(N=(O=V.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var Q,H,J;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: '크기 변형',
  parameters: {
    docs: {
      description: {
        story: 'xs부터 xl까지 다양한 크기의 Knob입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    alignItems: 'flex-end',
    gap: '24px',
    fontFamily: 'system-ui'
  }}>
      {([40, 56, 80, 112, 150] as const).map((s, i) => <div key={s} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '6px'
    }}>
          <Knob defaultValue={60} size={s} label={['XS', 'SM', 'MD', 'LG', 'XL'][i]} />
        </div>)}
    </div>
}`,...(J=(H=h.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Z,ee,ae;A.parameters={...A.parameters,docs:{...(Z=A.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: '색상 변형',
  parameters: {
    docs: {
      description: {
        story: '다양한 색상 조합의 Knob입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    fontFamily: 'system-ui'
  }}>
      {[{
      color: '#3b82f6',
      label: 'Blue',
      val: 70
    }, {
      color: '#10b981',
      label: 'Green',
      val: 40
    }, {
      color: '#f59e0b',
      label: 'Amber',
      val: 85
    }, {
      color: '#ef4444',
      label: 'Red',
      val: 55
    }, {
      color: '#8b5cf6',
      label: 'Purple',
      val: 65
    }, {
      color: '#ec4899',
      label: 'Pink',
      val: 30
    }].map(({
      color,
      label,
      val
    }) => <Knob key={label} defaultValue={val} color={color} label={label} size={70} />)}
    </div>
}`,...(ae=(ee=A.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,ne,le;j.parameters={...j.parameters,docs:{...(re=j.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: '오디오 믹서',
  parameters: {
    docs: {
      description: {
        story: '오디오 채널 믹서 UI에 적용한 예시입니다.'
      }
    }
  },
  render: () => <Mixer />
}`,...(le=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var te,se,oe;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: '단계 변형',
  parameters: {
    docs: {
      description: {
        story: '다른 step 값으로 세밀도가 다른 Knob입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    fontFamily: 'system-ui'
  }}>
      <Knob defaultValue={50} step={10} label="step:10" size={80} color="#3b82f6" />
      <Knob defaultValue={50} step={5} label="step:5" size={80} color="#10b981" />
      <Knob defaultValue={0.5} min={0} max={1} step={0.1} decimals={1} label="step:0.1" size={80} color="#8b5cf6" />
    </div>
}`,...(oe=(se=S.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ce,ie,ue;M.parameters={...M.parameters,docs:{...(ce=M.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: '비활성화',
  render: () => <div style={{
    display: 'flex',
    gap: '24px'
  }}>
      <Knob defaultValue={60} label="활성" />
      <Knob defaultValue={60} disabled label="비활성" />
    </div>
}`,...(ue=(ie=M.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var de,pe,me;K.parameters={...K.parameters,docs:{...(de=K.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: '전체 원형',
  parameters: {
    docs: {
      description: {
        story: 'startAngle과 rangeAngle로 다양한 호(arc)를 만들 수 있습니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    fontFamily: 'system-ui'
  }}>
      <Knob defaultValue={50} startAngle={-90} rangeAngle={360} label="Full" size={80} color="#3b82f6" />
      <Knob defaultValue={50} startAngle={-90} rangeAngle={270} label="270°" size={80} color="#10b981" />
      <Knob defaultValue={50} startAngle={-135} rangeAngle={270} label="Default" size={80} color="#8b5cf6" />
    </div>
}`,...(me=(pe=K.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};const Re=["Default","Controlled","SizeVariants","ColorVariants","AudioMixer","StepVariants","Disabled","FullCircle"];export{j as AudioMixer,A as ColorVariants,V as Controlled,v as Default,M as Disabled,K as FullCircle,h as SizeVariants,S as StepVariants,Re as __namedExportsOrder,Ie as default};
