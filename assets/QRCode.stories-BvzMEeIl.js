import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{d as Y,c as I}from"./reference-types-CC3VHbJD.js";import{r as q}from"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";function Z(r){const t=[];for(let s=0;s<r.length;s++)t.push(r.charCodeAt(s)&255);return t}function ee(r,t,s,p,x){const d=r.getContext("2d");if(!d)return;const l=21,f=s/l,y=Z(t),b=[0,1,0,0],m=y.length;b.push(m>>4&15,m&15);for(const e of y)b.push(e>>4&15,e&15);const c=Array.from({length:l},()=>Array(l).fill(0)),Q=(e,i)=>{for(let a=0;a<7;a++)for(let n=0;n<7;n++)if(e+a<l&&i+n<l){const g=a===0||a===6||n===0||n===6||a>=2&&a<=4&&n>=2&&n<=4;c[e+a][i+n]=g?2:-1}};Q(0,0),Q(0,l-7),Q(l-7,0);for(let e=8;e<l-8;e++)c[6][e]=c[e][6]=e%2===0?3:-1;let w=0;const k=b.map(e=>e.toString(2).padStart(4,"0")).join("");for(let e=l-1;e>=1;e-=2){e===6&&e--;for(let i=0;i<l;i++)for(let a=0;a<=1;a++){const n=e%4<2?l-1-i:i,g=e-a;c[n][g]===0&&(c[n][g]=k[w%k.length]==="1"?1:-2,w++)}}d.fillStyle=x,d.fillRect(0,0,s,s);for(let e=0;e<l;e++)for(let i=0;i<l;i++){const a=c[e][i];(a>0||a===1)&&(d.fillStyle=a===2||a===3||a===1?p:x,d.fillRect(Math.round(i*f),Math.round(e*f),Math.ceil(f),Math.ceil(f)))}}function u({value:r,size:t=160,color:s="#000",bgColor:p="#fff",bordered:x=!0,borderColor:d="#e5e7eb",icon:l,iconSize:f,ariaLabel:y,style:b}){const m=q.useRef(null);q.useEffect(()=>{m.current&&ee(m.current,r,t,s,p)},[r,t,s,p]);const c=f??t*.2;return o.jsxs("div",{style:{display:"inline-block",position:"relative",border:x?`1px solid ${d}`:"none",borderRadius:"8px",padding:x?"8px":0,background:p,lineHeight:0,...b},children:[o.jsx("canvas",{ref:m,width:t,height:t,role:"img","aria-label":y??`QR 코드: ${r}`,style:{display:"block"}}),l&&o.jsx("div",{"aria-hidden":"true",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:c,height:c,background:p,borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:c*.6},children:l})]})}u.__docgenInfo={description:"",methods:[],displayName:"QRCode",props:{value:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"160",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#000'",computed:!1}},bgColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#fff'",computed:!1}},errorLevel:{required:!1,tsType:{name:"union",raw:"'L' | 'M' | 'Q' | 'H'",elements:[{name:"literal",value:"'L'"},{name:"literal",value:"'M'"},{name:"literal",value:"'Q'"},{name:"literal",value:"'H'"}]},description:""},bordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},borderColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#e5e7eb'",computed:!1}},icon:{required:!1,tsType:{name:"string"},description:""},iconSize:{required:!1,tsType:{name:"number"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const re=Y([{library:"Ark UI",component:"QR Code",url:"https://ark-ui.com/docs/components/qr-code",usedFor:["behavior","accessibility","api"],relation:"compared"},I("Flowbite","QR Code","https://flowbite.com/docs/components/qr-code/"),I("Ant Design","QRCode","https://ant.design/components/qr-code/"),I("Chakra UI","QR Code","https://www.chakra-ui.com/docs/components/qr-code")]),se={title:"Atoms/Display/QRCode",component:u,tags:["autodocs","ref:chakra-ui","ref:ark-ui","ref:ant-design","ref:flowbite"],parameters:{references:re,docs:{description:{component:"\n## QRCode\n\nURL 또는 문자열 값을 QR 코드 패턴으로 렌더링하는 컴포넌트입니다.\nCanvas API를 사용한 순수 구현으로, 크기, 색상, 아이콘 오버레이를 지원합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `value` | `string` | - | QR 코드 데이터 |\n| `size` | `number` | `160` | 크기(px) |\n| `color` | `string` | `'#000'` | 전경색 |\n| `bgColor` | `string` | `'#fff'` | 배경색 |\n| `bordered` | `boolean` | `true` | 테두리 표시 |\n| `icon` | `string` | - | 중앙 아이콘 (이모지) |\n| `iconSize` | `number` | - | 아이콘 크기 |\n        "}}},argTypes:{value:{control:"text",table:{category:"Content"}},size:{control:{type:"range",min:80,max:300,step:8},table:{category:"Appearance"}},color:{control:"color",table:{category:"Appearance"}},bgColor:{control:"color",table:{category:"Appearance"}},bordered:{control:"boolean",table:{category:"Appearance"}},icon:{control:"text",table:{category:"Appearance"}},iconSize:{control:"number",table:{category:"Appearance"}},ariaLabel:{control:"text",table:{category:"Accessibility"}}},args:{value:"https://lucid-ui.dev",size:160,color:"#000",bgColor:"#fff",bordered:!0}},v={name:"기본 URL"},h={name:"접근성 설명",args:{value:"https://lucid-ui.dev/install",ariaLabel:"Lucid UI 설치 페이지 QR 코드"}},C={name:"크기 변형",render:()=>o.jsx("div",{style:{display:"flex",gap:"20px",alignItems:"flex-end",flexWrap:"wrap"},children:[80,120,160,200].map(r=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",fontFamily:"system-ui"},children:[o.jsx(u,{value:"https://example.com",size:r}),o.jsxs("div",{style:{fontSize:"12px",color:"#9ca3af"},children:[r,"px"]})]},r))})},R={name:"색상 변형",render:()=>o.jsx("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[{color:"#3b82f6",bgColor:"#eff6ff",label:"블루"},{color:"#10b981",bgColor:"#f0fdf4",label:"그린"},{color:"#8b5cf6",bgColor:"#f5f3ff",label:"퍼플"},{color:"#ef4444",bgColor:"#fef2f2",label:"레드"},{color:"#111",bgColor:"#f9fafb",label:"다크"}].map(({color:r,bgColor:t,label:s})=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",fontFamily:"system-ui"},children:[o.jsx(u,{value:"https://example.com",color:r,bgColor:t,size:120}),o.jsx("div",{style:{fontSize:"12px",color:"#9ca3af"},children:s})]},s))})},S={name:"아이콘 포함",parameters:{docs:{description:{story:"중앙에 아이콘을 삽입해 브랜드 QR 코드를 만듭니다."}}},render:()=>o.jsx("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap"},children:[{icon:"🎨",label:"Lucid UI"},{icon:"🛍️",label:"쇼핑"},{icon:"🔗",label:"링크"},{icon:"📱",label:"모바일"}].map(({icon:r,label:t})=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",fontFamily:"system-ui"},children:[o.jsx(u,{value:"https://example.com",icon:r,size:140}),o.jsx("div",{style:{fontSize:"12px",color:"#9ca3af"},children:t})]},t))})},j={name:"테두리 없음",args:{bordered:!1,size:140}},z={name:"명함 QR",parameters:{docs:{description:{story:"명함에 삽입하는 QR 코드 카드 예시입니다."}}},render:()=>o.jsx("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap",fontFamily:"system-ui"},children:[{name:"김민준",role:"프런트엔드 개발자",url:"https://github.com/kiminjun",color:"#3b82f6"},{name:"이서연",role:"UX 디자이너",url:"https://dribbble.com/lsy",color:"#ec4899"}].map(r=>o.jsxs("div",{style:{padding:"24px",border:"1px solid #e5e7eb",borderRadius:"16px",display:"flex",gap:"20px",alignItems:"center",background:"#fff",boxShadow:"0 4px 12px rgba(0,0,0,0.08)"},children:[o.jsx(u,{value:r.url,color:r.color,size:100,icon:"🔗"}),o.jsxs("div",{children:[o.jsx("div",{style:{fontSize:"18px",fontWeight:800,color:"#111",marginBottom:"4px"},children:r.name}),o.jsx("div",{style:{fontSize:"14px",color:"#6b7280",marginBottom:"8px"},children:r.role}),o.jsx("div",{style:{fontSize:"12px",color:r.color},children:r.url})]})]},r.name))})};var A,L,T;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '기본 URL'
}`,...(T=(L=v.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var D,W,U;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '접근성 설명',
  args: {
    value: 'https://lucid-ui.dev/install',
    ariaLabel: 'Lucid UI 설치 페이지 QR 코드'
  }
}`,...(U=(W=h.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var F,V,B;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(B=(V=C.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var M,E,N;R.parameters={...R.parameters,docs:{...(M=R.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(N=(E=R.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var P,_,H;S.parameters={...S.parameters,docs:{...(P=S.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(H=(_=S.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var X,$,O;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: '테두리 없음',
  args: {
    bordered: false,
    size: 140
  }
}`,...(O=($=j.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var G,J,K;z.parameters={...z.parameters,docs:{...(G=z.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
        }}>
              {card.name}
            </div>
            <div style={{
          fontSize: '14px',
          color: '#6b7280',
          marginBottom: '8px'
        }}>
              {card.role}
            </div>
            <div style={{
          fontSize: '12px',
          color: card.color
        }}>{card.url}</div>
          </div>
        </div>)}
    </div>
}`,...(K=(J=z.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const ie=["Default","DescribedCode","SizeVariants","ColorVariants","WithIcon","NoBorder","BusinessCard"];export{z as BusinessCard,R as ColorVariants,v as Default,h as DescribedCode,j as NoBorder,C as SizeVariants,S as WithIcon,ie as __namedExportsOrder,se as default};
