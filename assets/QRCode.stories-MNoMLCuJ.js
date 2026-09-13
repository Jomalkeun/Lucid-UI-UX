import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{d as O}from"./reference-types-4ftiVeOu.js";import{r as I}from"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";function $(o){const t=[];for(let s=0;s<o.length;s++)t.push(o.charCodeAt(s)&255);return t}function G(o,t,s,p,b){const c=o.getContext("2d");if(!c)return;const l=21,f=s/l,y=$(t),d=[0,1,0,0],m=y.length;d.push(m>>4&15,m&15);for(const e of y)d.push(e>>4&15,e&15);const u=Array.from({length:l},()=>Array(l).fill(0)),z=(e,i)=>{for(let a=0;a<7;a++)for(let n=0;n<7;n++)if(e+a<l&&i+n<l){const g=a===0||a===6||n===0||n===6||a>=2&&a<=4&&n>=2&&n<=4;u[e+a][i+n]=g?2:-1}};z(0,0),z(0,l-7),z(l-7,0);for(let e=8;e<l-8;e++)u[6][e]=u[e][6]=e%2===0?3:-1;let Q=0;const w=d.map(e=>e.toString(2).padStart(4,"0")).join("");for(let e=l-1;e>=1;e-=2){e===6&&e--;for(let i=0;i<l;i++)for(let a=0;a<=1;a++){const n=e%4<2?l-1-i:i,g=e-a;u[n][g]===0&&(u[n][g]=w[Q%w.length]==="1"?1:-2,Q++)}}c.fillStyle=b,c.fillRect(0,0,s,s);for(let e=0;e<l;e++)for(let i=0;i<l;i++){const a=u[e][i];(a>0||a===1)&&(c.fillStyle=a===2||a===3||a===1?p:b,c.fillRect(Math.round(i*f),Math.round(e*f),Math.ceil(f),Math.ceil(f)))}}function x({value:o,size:t=160,color:s="#000",bgColor:p="#fff",bordered:b=!0,borderColor:c="#e5e7eb",icon:l,iconSize:f,style:y}){const d=I.useRef(null);I.useEffect(()=>{d.current&&G(d.current,o,t,s,p)},[o,t,s,p]);const m=f??t*.2;return r.jsxs("div",{style:{display:"inline-block",position:"relative",border:b?`1px solid ${c}`:"none",borderRadius:"8px",padding:b?"8px":0,background:p,lineHeight:0,...y},children:[r.jsx("canvas",{ref:d,width:t,height:t,style:{display:"block"}}),l&&r.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:m,height:m,background:p,borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:m*.6},children:l})]})}x.__docgenInfo={description:"",methods:[],displayName:"QRCode",props:{value:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"160",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#000'",computed:!1}},bgColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#fff'",computed:!1}},errorLevel:{required:!1,tsType:{name:"union",raw:"'L' | 'M' | 'Q' | 'H'",elements:[{name:"literal",value:"'L'"},{name:"literal",value:"'M'"},{name:"literal",value:"'Q'"},{name:"literal",value:"'H'"}]},description:""},bordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},borderColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#e5e7eb'",computed:!1}},icon:{required:!1,tsType:{name:"string"},description:""},iconSize:{required:!1,tsType:{name:"number"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const J=O([{library:"Ark UI",component:"QR Code",url:"https://ark-ui.com/docs/components/qr-code",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Flowbite",component:"QR Code",url:"https://flowbite.com/docs/components/qr-code/",usedFor:["comparison"],relation:"compared"},{library:"Ant Design",component:"QRCode",url:"https://ant.design/components/qr-code/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"QR Code",url:"https://www.chakra-ui.com/docs/components/qr-code",usedFor:["comparison"],relation:"compared"}]),oe={title:"Atoms/Display/QRCode",component:x,tags:["autodocs","ref:chakra-ui","ref:ark-ui","ref:ant-design","ref:flowbite"],parameters:{references:J,docs:{description:{component:"\n## QRCode\n\nURL 또는 문자열 값을 QR 코드 패턴으로 렌더링하는 컴포넌트입니다.\nCanvas API를 사용한 순수 구현으로, 크기, 색상, 아이콘 오버레이를 지원합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `value` | `string` | - | QR 코드 데이터 |\n| `size` | `number` | `160` | 크기(px) |\n| `color` | `string` | `'#000'` | 전경색 |\n| `bgColor` | `string` | `'#fff'` | 배경색 |\n| `bordered` | `boolean` | `true` | 테두리 표시 |\n| `icon` | `string` | - | 중앙 아이콘 (이모지) |\n| `iconSize` | `number` | - | 아이콘 크기 |\n        "}}},argTypes:{value:{control:"text",table:{category:"Content"}},size:{control:{type:"range",min:80,max:300,step:8},table:{category:"Appearance"}},color:{control:"color",table:{category:"Appearance"}},bgColor:{control:"color",table:{category:"Appearance"}},bordered:{control:"boolean",table:{category:"Appearance"}},icon:{control:"text",table:{category:"Appearance"}},iconSize:{control:"number",table:{category:"Appearance"}}},args:{value:"https://lucid-ui.dev",size:160,color:"#000",bgColor:"#fff",bordered:!0}},v={name:"기본 URL"},h={name:"크기 변형",render:()=>r.jsx("div",{style:{display:"flex",gap:"20px",alignItems:"flex-end",flexWrap:"wrap"},children:[80,120,160,200].map(o=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",fontFamily:"system-ui"},children:[r.jsx(x,{value:"https://example.com",size:o}),r.jsxs("div",{style:{fontSize:"12px",color:"#9ca3af"},children:[o,"px"]})]},o))})},C={name:"색상 변형",render:()=>r.jsx("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[{color:"#3b82f6",bgColor:"#eff6ff",label:"블루"},{color:"#10b981",bgColor:"#f0fdf4",label:"그린"},{color:"#8b5cf6",bgColor:"#f5f3ff",label:"퍼플"},{color:"#ef4444",bgColor:"#fef2f2",label:"레드"},{color:"#111",bgColor:"#f9fafb",label:"다크"}].map(({color:o,bgColor:t,label:s})=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",fontFamily:"system-ui"},children:[r.jsx(x,{value:"https://example.com",color:o,bgColor:t,size:120}),r.jsx("div",{style:{fontSize:"12px",color:"#9ca3af"},children:s})]},s))})},R={name:"아이콘 포함",parameters:{docs:{description:{story:"중앙에 아이콘을 삽입해 브랜드 QR 코드를 만듭니다."}}},render:()=>r.jsx("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap"},children:[{icon:"🎨",label:"Lucid UI"},{icon:"🛍️",label:"쇼핑"},{icon:"🔗",label:"링크"},{icon:"📱",label:"모바일"}].map(({icon:o,label:t})=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",fontFamily:"system-ui"},children:[r.jsx(x,{value:"https://example.com",icon:o,size:140}),r.jsx("div",{style:{fontSize:"12px",color:"#9ca3af"},children:t})]},t))})},S={name:"테두리 없음",args:{bordered:!1,size:140}},j={name:"명함 QR",parameters:{docs:{description:{story:"명함에 삽입하는 QR 코드 카드 예시입니다."}}},render:()=>r.jsx("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap",fontFamily:"system-ui"},children:[{name:"김민준",role:"프런트엔드 개발자",url:"https://github.com/kiminjun",color:"#3b82f6"},{name:"이서연",role:"UX 디자이너",url:"https://dribbble.com/lsy",color:"#ec4899"}].map(o=>r.jsxs("div",{style:{padding:"24px",border:"1px solid #e5e7eb",borderRadius:"16px",display:"flex",gap:"20px",alignItems:"center",background:"#fff",boxShadow:"0 4px 12px rgba(0,0,0,0.08)"},children:[r.jsx(x,{value:o.url,color:o.color,size:100,icon:"🔗"}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"18px",fontWeight:800,color:"#111",marginBottom:"4px"},children:o.name}),r.jsx("div",{style:{fontSize:"14px",color:"#6b7280",marginBottom:"8px"},children:o.role}),r.jsx("div",{style:{fontSize:"12px",color:o.color},children:o.url})]})]},o.name))})};var k,q,A;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '기본 URL'
}`,...(A=(q=v.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var F,T,W;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '크기 변형',
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-end',
    flexWrap: 'wrap'
  }}>
      {[80, 120, 160, 200].map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'system-ui'
    }}>
          <QRCode value="https://example.com" size={size} />
          <div style={{
        fontSize: '12px',
        color: '#9ca3af'
      }}>{size}px</div>
        </div>)}
    </div>
}`,...(W=(T=h.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var D,U,V;C.parameters={...C.parameters,docs:{...(D=C.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '색상 변형',
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      {[{
      color: '#3b82f6',
      bgColor: '#eff6ff',
      label: '블루'
    }, {
      color: '#10b981',
      bgColor: '#f0fdf4',
      label: '그린'
    }, {
      color: '#8b5cf6',
      bgColor: '#f5f3ff',
      label: '퍼플'
    }, {
      color: '#ef4444',
      bgColor: '#fef2f2',
      label: '레드'
    }, {
      color: '#111',
      bgColor: '#f9fafb',
      label: '다크'
    }].map(({
      color,
      bgColor,
      label
    }) => <div key={label} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'system-ui'
    }}>
          <QRCode value="https://example.com" color={color} bgColor={bgColor} size={120} />
          <div style={{
        fontSize: '12px',
        color: '#9ca3af'
      }}>{label}</div>
        </div>)}
    </div>
}`,...(V=(U=C.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var B,L,M;R.parameters={...R.parameters,docs:{...(B=R.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '아이콘 포함',
  parameters: {
    docs: {
      description: {
        story: '중앙에 아이콘을 삽입해 브랜드 QR 코드를 만듭니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap'
  }}>
      {[{
      icon: '🎨',
      label: 'Lucid UI'
    }, {
      icon: '🛍️',
      label: '쇼핑'
    }, {
      icon: '🔗',
      label: '링크'
    }, {
      icon: '📱',
      label: '모바일'
    }].map(({
      icon,
      label
    }) => <div key={label} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'system-ui'
    }}>
          <QRCode value="https://example.com" icon={icon} size={140} />
          <div style={{
        fontSize: '12px',
        color: '#9ca3af'
      }}>{label}</div>
        </div>)}
    </div>
}`,...(M=(L=R.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var E,N,P;S.parameters={...S.parameters,docs:{...(E=S.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '테두리 없음',
  args: {
    bordered: false,
    size: 140
  }
}`,...(P=(N=S.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var _,H,X;j.parameters={...j.parameters,docs:{...(_=j.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: '명함 QR',
  parameters: {
    docs: {
      description: {
        story: '명함에 삽입하는 QR 코드 카드 예시입니다.'
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
      name: '김민준',
      role: '프런트엔드 개발자',
      url: 'https://github.com/kiminjun',
      color: '#3b82f6'
    }, {
      name: '이서연',
      role: 'UX 디자이너',
      url: 'https://dribbble.com/lsy',
      color: '#ec4899'
    }].map(card => <div key={card.name} style={{
      padding: '24px',
      border: '1px solid #e5e7eb',
      borderRadius: '16px',
      display: 'flex',
      gap: '20px',
      alignItems: 'center',
      background: '#fff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
    }}>
          <QRCode value={card.url} color={card.color} size={100} icon="🔗" />
          <div>
            <div style={{
          fontSize: '18px',
          fontWeight: 800,
          color: '#111',
          marginBottom: '4px'
        }}>{card.name}</div>
            <div style={{
          fontSize: '14px',
          color: '#6b7280',
          marginBottom: '8px'
        }}>{card.role}</div>
            <div style={{
          fontSize: '12px',
          color: card.color
        }}>{card.url}</div>
          </div>
        </div>)}
    </div>
}`,...(X=(H=j.parameters)==null?void 0:H.docs)==null?void 0:X.source}}};const re=["Default","SizeVariants","ColorVariants","WithIcon","NoBorder","BusinessCard"];export{j as BusinessCard,C as ColorVariants,v as Default,S as NoBorder,h as SizeVariants,R as WithIcon,re as __namedExportsOrder,oe as default};
