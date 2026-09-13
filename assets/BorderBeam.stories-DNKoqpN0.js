import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as O}from"./reference-types-4ftiVeOu.js";import{r as u}from"./index-BxXVWNx3.js";import{c as I}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";function o({children:r,size:n=150,duration:a=2,borderWidth:t=2,colorFrom:i="#3b82f6",colorTo:s="#8b5cf6",delay:y=0,borderRadius:b="12px",className:D,style:E}){const g=u.useRef(null);u.useEffect(()=>{const d=g.current;d&&(d.style.setProperty("--border-beam-size",`${n}px`),d.style.setProperty("--border-beam-duration",`${a}s`),d.style.setProperty("--border-beam-from",i),d.style.setProperty("--border-beam-to",s),d.style.setProperty("--border-beam-delay",`${y}s`))},[n,a,i,s,y]);const N={position:"relative",borderRadius:b,border:`${t}px solid transparent`,backgroundClip:"padding-box",overflow:"hidden",...E};return e.jsxs("div",{className:I(D),style:N,ref:g,children:[e.jsx("style",{children:`
    @keyframes border-beam-travel {
      0% { offset-distance: 0%; }
      100% { offset-distance: 100%; }
    }
  `}),e.jsx("div",{style:{position:"absolute",inset:0,borderRadius:b,padding:`${t}px`,background:`linear-gradient(#fff, #fff) padding-box, linear-gradient(to right, ${i}, ${s}, ${i}) border-box`,zIndex:0,pointerEvents:"none"}}),e.jsx("div",{style:{position:"absolute",inset:0,borderRadius:b,zIndex:0,pointerEvents:"none",overflow:"hidden"},children:e.jsx("div",{style:{position:"absolute",width:`${n}px`,height:`${t*2}px`,background:`linear-gradient(90deg, transparent, ${i}, ${s}, transparent)`,top:0,left:`-${n}px`,animation:`border-beam-linear ${a}s linear ${y}s infinite`,boxShadow:`0 0 ${t*3}px ${i}`}})}),e.jsx("style",{children:`
        @keyframes border-beam-linear {
          0% { transform: translateX(0); left: -${n}px; top: 0; }
          25% { transform: none; left: calc(100% + ${n}px); top: 0; }
          25.001% { left: calc(100% + ${n}px); top: 0; }
          50% { left: calc(100% + ${n}px); top: calc(100% - ${t*2}px); }
          50.001% { left: calc(100% + ${n}px); top: calc(100% - ${t*2}px); }
          75% { left: -${n}px; top: calc(100% - ${t*2}px); }
          75.001% { left: -${n}px; top: calc(100% - ${t*2}px); }
          100% { left: -${n}px; top: 0; }
        }
      `}),e.jsx("div",{style:{position:"relative",zIndex:1},children:r})]})}o.__docgenInfo={description:"",methods:[],displayName:"BorderBeam",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"150",computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},borderWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},colorFrom:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#3b82f6'",computed:!1}},colorTo:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#8b5cf6'",computed:!1}},delay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},borderRadius:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:"'12px'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const _=O([{library:"Ant Design",component:"BorderBeam",url:"https://ant.design/components/border-beam/",usedFor:["comparison"],relation:"compared"}]),M={title:"Atoms/Display/BorderBeam",component:o,tags:["autodocs","ref:ant-design"],parameters:{references:_,docs:{description:{component:"\n## BorderBeam\n\n요소의 테두리를 따라 빛이 흐르는 애니메이션 효과를 적용하는 컴포넌트입니다.\n카드, 버튼, 컨테이너에 시선을 끄는 글로우(glow) 테두리 효과를 더할 때 사용합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `size` | `number` | `150` | 빔 길이(px) |\n| `duration` | `number` | `2` | 애니메이션 지속(초) |\n| `borderWidth` | `number` | `2` | 테두리 두께(px) |\n| `colorFrom` | `string` | `'#3b82f6'` | 시작 색상 |\n| `colorTo` | `string` | `'#8b5cf6'` | 종료 색상 |\n| `delay` | `number` | `0` | 시작 지연(초) |\n| `borderRadius` | `string` | `'12px'` | 모서리 반경 |\n        "}}},argTypes:{size:{control:{type:"range",min:50,max:300},description:"빔 길이(px)",table:{category:"Appearance"}},duration:{control:{type:"range",min:.5,max:6,step:.5},description:"속도(초)",table:{category:"Animation"}},borderWidth:{control:{type:"range",min:1,max:6},description:"두께(px)",table:{category:"Appearance"}},colorFrom:{control:"color",description:"시작 색상",table:{category:"Appearance"}},colorTo:{control:"color",description:"종료 색상",table:{category:"Appearance"}},delay:{control:{type:"number",min:0,max:5},description:"지연(초)",table:{category:"Animation"}}},args:{size:150,duration:2,borderWidth:2,colorFrom:"#3b82f6",colorTo:"#8b5cf6",delay:0}},G=()=>e.jsxs("div",{style:{padding:"24px",fontFamily:"system-ui"},children:[e.jsx("h3",{style:{margin:"0 0 8px",fontSize:"16px",color:"#111"},children:"BorderBeam 카드"}),e.jsx("p",{style:{margin:0,fontSize:"13px",color:"#6b7280",lineHeight:1.6},children:"테두리를 따라 빛이 흐릅니다. 프리미엄 카드나 중요한 CTA 요소에 사용하세요."})]}),p={name:"기본",parameters:{docs:{description:{story:"기본 BorderBeam 카드입니다. 테두리를 따라 파란색 빔이 흐릅니다."}}},render:r=>e.jsx("div",{style:{padding:"24px"},children:e.jsx(o,{...r,style:{background:"#fff",maxWidth:"320px"},children:e.jsx(G,{})})})},l={name:"색상 변형",parameters:{docs:{description:{story:"다양한 색상 조합의 BorderBeam입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"20px",padding:"20px",fontFamily:"system-ui"},children:[{from:"#3b82f6",to:"#8b5cf6",label:"Blue → Purple"},{from:"#10b981",to:"#06b6d4",label:"Green → Cyan"},{from:"#f59e0b",to:"#ef4444",label:"Amber → Red"},{from:"#ec4899",to:"#8b5cf6",label:"Pink → Purple"},{from:"#06b6d4",to:"#3b82f6",label:"Cyan → Blue"},{from:"#f97316",to:"#eab308",label:"Orange → Yellow"}].map(({from:r,to:n,label:a})=>e.jsx(o,{colorFrom:r,colorTo:n,style:{background:"#fff",width:"180px"},children:e.jsxs("div",{style:{padding:"16px",textAlign:"center"},children:[e.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",background:`linear-gradient(135deg, ${r}, ${n})`,margin:"0 auto 8px"}}),e.jsx("div",{style:{fontSize:"12px",color:"#374151",fontWeight:500},children:a})]})},a))})},c={name:"속도 변형",parameters:{docs:{description:{story:"애니메이션 속도별 비교입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"20px",padding:"20px",fontFamily:"system-ui"},children:[.5,1,2,4,6].map(r=>e.jsx(o,{duration:r,style:{background:"#fff",width:"150px"},children:e.jsxs("div",{style:{padding:"16px",textAlign:"center"},children:[e.jsx("div",{style:{fontSize:"20px",marginBottom:"4px"},children:"⚡"}),e.jsxs("div",{style:{fontSize:"12px",color:"#374151"},children:[r,"초"]})]})},r))})},f={name:"두께 변형",parameters:{docs:{description:{story:"borderWidth별 시각적 차이입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"20px",padding:"20px",fontFamily:"system-ui"},children:[1,2,3,4,6].map(r=>e.jsx(o,{borderWidth:r,style:{background:"#fff",width:"150px"},children:e.jsx("div",{style:{padding:"16px",textAlign:"center"},children:e.jsxs("div",{style:{fontSize:"12px",color:"#374151"},children:["두께 ",r,"px"]})})},r))})},x={name:"프라이싱 카드 활용",parameters:{docs:{description:{story:"추천 요금제 카드에 BorderBeam을 적용한 예시입니다."}}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"20px",padding:"20px",fontFamily:"system-ui",flexWrap:"wrap"},children:[e.jsxs("div",{style:{background:"#fff",borderRadius:"12px",border:"1px solid #e5e7eb",padding:"24px",width:"180px"},children:[e.jsx("div",{style:{fontSize:"13px",color:"#6b7280",marginBottom:"4px"},children:"기본"}),e.jsxs("div",{style:{fontSize:"24px",fontWeight:800,color:"#111",marginBottom:"16px"},children:["₩0",e.jsx("span",{style:{fontSize:"13px",fontWeight:400},children:"/월"})]}),e.jsx("button",{style:{width:"100%",padding:"8px",border:"1px solid #e5e7eb",borderRadius:"8px",background:"#fff",cursor:"pointer",fontSize:"13px"},children:"시작하기"})]}),e.jsx(o,{colorFrom:"#3b82f6",colorTo:"#8b5cf6",borderWidth:2,style:{background:"#fff",width:"180px"},children:e.jsxs("div",{style:{padding:"24px"},children:[e.jsx("div",{style:{fontSize:"13px",color:"#3b82f6",fontWeight:700,marginBottom:"4px"},children:"⭐ PRO 추천"}),e.jsxs("div",{style:{fontSize:"24px",fontWeight:800,color:"#111",marginBottom:"16px"},children:["₩9,900",e.jsx("span",{style:{fontSize:"13px",fontWeight:400},children:"/월"})]}),e.jsx("button",{style:{width:"100%",padding:"8px",border:"none",borderRadius:"8px",background:"#3b82f6",color:"#fff",cursor:"pointer",fontSize:"13px",fontWeight:600},children:"업그레이드"})]})}),e.jsxs("div",{style:{background:"#fff",borderRadius:"12px",border:"1px solid #e5e7eb",padding:"24px",width:"180px"},children:[e.jsx("div",{style:{fontSize:"13px",color:"#6b7280",marginBottom:"4px"},children:"엔터프라이즈"}),e.jsx("div",{style:{fontSize:"24px",fontWeight:800,color:"#111",marginBottom:"16px"},children:"문의"}),e.jsx("button",{style:{width:"100%",padding:"8px",border:"1px solid #e5e7eb",borderRadius:"8px",background:"#fff",cursor:"pointer",fontSize:"13px"},children:"문의하기"})]})]})},m={name:"순차 지연 효과",parameters:{docs:{description:{story:"각 카드마다 지연(delay)을 다르게 주어 순차적으로 빔이 흐릅니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"16px",padding:"20px",flexWrap:"wrap",fontFamily:"system-ui"},children:[0,.5,1,1.5,2].map((r,n)=>e.jsx(o,{delay:r,duration:3,style:{background:"#fff",width:"120px"},children:e.jsxs("div",{style:{padding:"16px",textAlign:"center"},children:[e.jsx("div",{style:{fontSize:"20px",marginBottom:"4px"},children:"★".repeat(n+1)}),e.jsxs("div",{style:{fontSize:"11px",color:"#9ca3af"},children:["delay=",r,"s"]})]})},r))})};var h,v,B;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '기본',
  parameters: {
    docs: {
      description: {
        story: '기본 BorderBeam 카드입니다. 테두리를 따라 파란색 빔이 흐릅니다.'
      }
    }
  },
  render: args => <div style={{
    padding: '24px'
  }}>
      <BorderBeam {...args} style={{
      background: '#fff',
      maxWidth: '320px'
    }}>
        <CardContent />
      </BorderBeam>
    </div>
}`,...(B=(v=p.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var S,j,w;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '색상 변형',
  parameters: {
    docs: {
      description: {
        story: '다양한 색상 조합의 BorderBeam입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '20px',
    fontFamily: 'system-ui'
  }}>
      {[{
      from: '#3b82f6',
      to: '#8b5cf6',
      label: 'Blue → Purple'
    }, {
      from: '#10b981',
      to: '#06b6d4',
      label: 'Green → Cyan'
    }, {
      from: '#f59e0b',
      to: '#ef4444',
      label: 'Amber → Red'
    }, {
      from: '#ec4899',
      to: '#8b5cf6',
      label: 'Pink → Purple'
    }, {
      from: '#06b6d4',
      to: '#3b82f6',
      label: 'Cyan → Blue'
    }, {
      from: '#f97316',
      to: '#eab308',
      label: 'Orange → Yellow'
    }].map(({
      from,
      to,
      label
    }) => <BorderBeam key={label} colorFrom={from} colorTo={to} style={{
      background: '#fff',
      width: '180px'
    }}>
          <div style={{
        padding: '16px',
        textAlign: 'center'
      }}>
            <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: \`linear-gradient(135deg, \${from}, \${to})\`,
          margin: '0 auto 8px'
        }} />
            <div style={{
          fontSize: '12px',
          color: '#374151',
          fontWeight: 500
        }}>{label}</div>
          </div>
        </BorderBeam>)}
    </div>
}`,...(w=(j=l.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var k,z,$;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '속도 변형',
  parameters: {
    docs: {
      description: {
        story: '애니메이션 속도별 비교입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '20px',
    fontFamily: 'system-ui'
  }}>
      {[0.5, 1, 2, 4, 6].map(dur => <BorderBeam key={dur} duration={dur} style={{
      background: '#fff',
      width: '150px'
    }}>
          <div style={{
        padding: '16px',
        textAlign: 'center'
      }}>
            <div style={{
          fontSize: '20px',
          marginBottom: '4px'
        }}>⚡</div>
            <div style={{
          fontSize: '12px',
          color: '#374151'
        }}>{dur}초</div>
          </div>
        </BorderBeam>)}
    </div>
}`,...($=(z=c.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var W,R,T;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '두께 변형',
  parameters: {
    docs: {
      description: {
        story: 'borderWidth별 시각적 차이입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '20px',
    fontFamily: 'system-ui'
  }}>
      {[1, 2, 3, 4, 6].map(bw => <BorderBeam key={bw} borderWidth={bw} style={{
      background: '#fff',
      width: '150px'
    }}>
          <div style={{
        padding: '16px',
        textAlign: 'center'
      }}>
            <div style={{
          fontSize: '12px',
          color: '#374151'
        }}>두께 {bw}px</div>
          </div>
        </BorderBeam>)}
    </div>
}`,...(T=(R=f.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var A,P,C;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '프라이싱 카드 활용',
  parameters: {
    docs: {
      description: {
        story: '추천 요금제 카드에 BorderBeam을 적용한 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    padding: '20px',
    fontFamily: 'system-ui',
    flexWrap: 'wrap'
  }}>
      <div style={{
      background: '#fff',
      borderRadius: '12px',
      border: '1px solid #e5e7eb',
      padding: '24px',
      width: '180px'
    }}>
        <div style={{
        fontSize: '13px',
        color: '#6b7280',
        marginBottom: '4px'
      }}>기본</div>
        <div style={{
        fontSize: '24px',
        fontWeight: 800,
        color: '#111',
        marginBottom: '16px'
      }}>₩0<span style={{
          fontSize: '13px',
          fontWeight: 400
        }}>/월</span></div>
        <button style={{
        width: '100%',
        padding: '8px',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        background: '#fff',
        cursor: 'pointer',
        fontSize: '13px'
      }}>시작하기</button>
      </div>
      <BorderBeam colorFrom="#3b82f6" colorTo="#8b5cf6" borderWidth={2} style={{
      background: '#fff',
      width: '180px'
    }}>
        <div style={{
        padding: '24px'
      }}>
          <div style={{
          fontSize: '13px',
          color: '#3b82f6',
          fontWeight: 700,
          marginBottom: '4px'
        }}>⭐ PRO 추천</div>
          <div style={{
          fontSize: '24px',
          fontWeight: 800,
          color: '#111',
          marginBottom: '16px'
        }}>₩9,900<span style={{
            fontSize: '13px',
            fontWeight: 400
          }}>/월</span></div>
          <button style={{
          width: '100%',
          padding: '8px',
          border: 'none',
          borderRadius: '8px',
          background: '#3b82f6',
          color: '#fff',
          cursor: 'pointer',
          fontSize: '13px',
          fontWeight: 600
        }}>업그레이드</button>
        </div>
      </BorderBeam>
      <div style={{
      background: '#fff',
      borderRadius: '12px',
      border: '1px solid #e5e7eb',
      padding: '24px',
      width: '180px'
    }}>
        <div style={{
        fontSize: '13px',
        color: '#6b7280',
        marginBottom: '4px'
      }}>엔터프라이즈</div>
        <div style={{
        fontSize: '24px',
        fontWeight: 800,
        color: '#111',
        marginBottom: '16px'
      }}>문의</div>
        <button style={{
        width: '100%',
        padding: '8px',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        background: '#fff',
        cursor: 'pointer',
        fontSize: '13px'
      }}>문의하기</button>
      </div>
    </div>
}`,...(C=(P=x.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var F,V,q;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '순차 지연 효과',
  parameters: {
    docs: {
      description: {
        story: '각 카드마다 지연(delay)을 다르게 주어 순차적으로 빔이 흐릅니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    padding: '20px',
    flexWrap: 'wrap',
    fontFamily: 'system-ui'
  }}>
      {[0, 0.5, 1, 1.5, 2].map((delay, i) => <BorderBeam key={delay} delay={delay} duration={3} style={{
      background: '#fff',
      width: '120px'
    }}>
          <div style={{
        padding: '16px',
        textAlign: 'center'
      }}>
            <div style={{
          fontSize: '20px',
          marginBottom: '4px'
        }}>{'★'.repeat(i + 1)}</div>
            <div style={{
          fontSize: '11px',
          color: '#9ca3af'
        }}>delay={delay}s</div>
          </div>
        </BorderBeam>)}
    </div>
}`,...(q=(V=m.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};const Q=["Default","ColorVariants","SpeedVariants","ThicknessVariants","PricingCard","StaggeredDelay"];export{l as ColorVariants,p as Default,x as PricingCard,c as SpeedVariants,m as StaggeredDelay,f as ThicknessVariants,Q as __namedExportsOrder,M as default};
