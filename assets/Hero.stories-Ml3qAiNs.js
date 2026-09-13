import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as Z}from"./reference-types-4ftiVeOu.js";const ee={sm:{title:"28px",sub:"16px",desc:"14px",padding:"48px 32px"},md:{title:"40px",sub:"18px",desc:"15px",padding:"72px 48px"},lg:{title:"56px",sub:"22px",desc:"16px",padding:"96px 64px"},xl:{title:"72px",sub:"26px",desc:"18px",padding:"128px 80px"}};function a({title:r,subtitle:j,description:k,actions:H=[],image:i,imagePosition:l="right",stackAt:h="md",align:n="left",size:$="md",background:E="#1e293b",textColor:s="#fff",color:v="#3b82f6",minHeight:J,contentMaxWidth:K,mediaAspectRatio:Q,style:X}){const c=ee[$],d=l==="right"||l==="left",p=l==="background",S=(t="primary")=>{const o={padding:"12px 28px",borderRadius:"8px",fontWeight:700,fontSize:"15px",cursor:"pointer",border:"2px solid",fontFamily:"system-ui",transition:"opacity 0.15s",textDecoration:"none",display:"inline-block"};return t==="primary"?{...o,background:v,color:"#fff",borderColor:v}:t==="secondary"?{...o,background:"rgba(255,255,255,0.15)",color:s,borderColor:"rgba(255,255,255,0.3)"}:t==="outline"?{...o,background:"transparent",color:s,borderColor:s}:{...o,background:"transparent",color:s,borderColor:"transparent"}},Y=e.jsxs("div",{style:{flex:1,maxWidth:K,textAlign:n==="center"?"center":n==="right"?"right":"left",zIndex:p?1:void 0,position:p?"relative":void 0},children:[j&&e.jsx("div",{style:{fontSize:c.sub,color:v,fontWeight:700,marginBottom:"8px",letterSpacing:"0.05em",textTransform:"uppercase",fontFamily:"system-ui"},children:j}),e.jsx("h1",{style:{margin:"0 0 16px",fontSize:c.title,fontWeight:900,color:s,lineHeight:1.15,fontFamily:"system-ui"},children:r}),k&&e.jsx("p",{style:{margin:"0 0 28px",fontSize:c.desc,color:`${s}cc`,lineHeight:1.7,maxWidth:"560px",fontFamily:"system-ui",...n==="center"?{margin:"0 auto 28px"}:{}},children:k}),H.length>0&&e.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",justifyContent:n==="center"?"center":n==="right"?"flex-end":"flex-start"},children:H.map((t,o)=>t.href?e.jsx("a",{href:t.href,style:S(t.variant),children:t.label},o):e.jsx("button",{onClick:t.onClick,style:S(t.variant),children:t.label},o))})]});return e.jsxs("section",{style:{background:E,padding:c.padding,minHeight:J,position:"relative",overflow:"hidden",...X},children:[p&&i&&e.jsx("div",{style:{position:"absolute",inset:0,zIndex:0},children:i}),e.jsxs("div",{style:{display:d?"flex":"block",flexWrap:h==="never"?"nowrap":"wrap",alignItems:d?"center":void 0,gap:d?"48px":void 0,flexDirection:l==="left"?"row-reverse":void 0,maxWidth:"1200px",margin:"0 auto"},children:[Y,d&&i&&e.jsx("div",{style:{flex:h==="never"?"0 0 auto":"1 1 320px",maxWidth:h==="never"?"50%":"100%",aspectRatio:Q},children:i}),!d&&!p&&l!=="none"&&i&&e.jsx("div",{style:{marginTop:"32px",textAlign:n==="center"?"center":"left"},children:i})]})]})}a.__docgenInfo={description:"",methods:[],displayName:"Hero",props:{title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"HeroAction"}],raw:"HeroAction[]"},description:"",defaultValue:{value:"[]",computed:!1}},image:{required:!1,tsType:{name:"ReactNode"},description:""},imagePosition:{required:!1,tsType:{name:"union",raw:"'right' | 'left' | 'background' | 'none'",elements:[{name:"literal",value:"'right'"},{name:"literal",value:"'left'"},{name:"literal",value:"'background'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},stackAt:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'never'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'never'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},background:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#1e293b'",computed:!1}},textColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#fff'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#3b82f6'",computed:!1}},overlayOpacity:{required:!1,tsType:{name:"number"},description:""},minHeight:{required:!1,tsType:{name:"string"},description:""},contentMaxWidth:{required:!1,tsType:{name:"string"},description:""},mediaAspectRatio:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const re=Z([{library:"daisyUI",component:"Hero",url:"https://daisyui.com/components/hero/",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"Jumbotron",url:"https://flowbite.com/docs/components/jumbotron/",usedFor:["comparison"],relation:"compared"},{library:"Mantine UI",component:"Hero headers",url:"https://ui.mantine.dev/category/hero/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."}]),ie={title:"Organisms/Content/Hero",component:a,tags:["autodocs","ref:daisy-ui","ref:flowbite","ref:mantine-ui"],parameters:{references:re,layout:"fullscreen",docs:{description:{component:"\n## Hero\n\n페이지 상단에 위치하는 대형 히어로 섹션 컴포넌트입니다.\n배경 이미지/영상, 메인 타이틀, 서브 텍스트, CTA 버튼을 수직/수평으로 배치하여 랜딩 페이지의 핵심 메시지를 전달합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `title` | `string` | - | 메인 타이틀 |\n| `subtitle` | `string` | - | 서브타이틀 |\n| `description` | `string` | - | 설명 텍스트 |\n| `actions` | `HeroAction[]` | `[]` | CTA 버튼 목록 |\n| `imagePosition` | `'right'\\|'left'\\|'background'\\|'none'` | `'right'` | 이미지 위치 |\n| `align` | `'left'\\|'center'\\|'right'` | `'left'` | 텍스트 정렬 |\n| `size` | `'sm'\\|'md'\\|'lg'\\|'xl'` | `'md'` | 크기 |\n| `color` | `string` | `'#3b82f6'` | 강조 색상 |\n        "}}},argTypes:{align:{control:"select",options:["left","center","right"],table:{category:"Layout"}},imagePosition:{control:"select",options:["right","left","background","none"],table:{category:"Layout"}},size:{control:"select",options:["sm","md","lg","xl"],table:{category:"Appearance"}},background:{control:"color",table:{category:"Appearance"}},textColor:{control:"color",table:{category:"Appearance"}},color:{control:"color",table:{category:"Appearance"}},title:{control:"text",table:{category:"Content"}},subtitle:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}}},args:{title:"더 나은 경험을 만드세요",subtitle:"디자인 시스템",description:"일관된 UI 컴포넌트로 빠르게 구축하고, 뛰어난 사용자 경험을 제공하세요.",size:"md",align:"left",imagePosition:"right",background:"#1e293b",textColor:"#fff",color:"#3b82f6",actions:[{label:"시작하기",variant:"primary"},{label:"더 알아보기",variant:"secondary"}]}},te=e.jsx("div",{style:{width:"320px",height:"240px",background:"linear-gradient(135deg, #3b82f622, #8b5cf622)",border:"1px solid #3b82f630",borderRadius:"16px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"80px"},children:"🚀"}),m={name:"기본",render:r=>e.jsx(a,{...r,image:te})},u={name:"중앙 정렬",parameters:{docs:{description:{story:"텍스트와 버튼이 가운데 정렬된 히어로입니다."}}},render:()=>e.jsx(a,{title:"세상을 바꾸는 아이디어",subtitle:"무엇이든 가능합니다",description:"혁신적인 기술과 창의적인 디자인으로 당신의 비전을 현실로 만들어 드립니다.",align:"center",imagePosition:"none",background:"linear-gradient(135deg, #1e1b4b, #312e81)",color:"#a78bfa",size:"lg",actions:[{label:"무료로 시작하기",variant:"primary"},{label:"데모 보기",variant:"outline"}]})},g={name:"좌우 분할",parameters:{docs:{description:{story:"텍스트와 이미지가 좌우로 나뉘는 분할 히어로입니다."}}},render:()=>e.jsx(a,{title:"개발자를 위한 최고의 도구",subtitle:"프로덕티비티",description:"코드 작성부터 배포까지, 모든 단계를 더 빠르고 스마트하게.",imagePosition:"right",background:"#0f172a",color:"#06b6d4",image:e.jsxs("div",{style:{width:"100%",maxWidth:"380px",background:"#1e293b",border:"1px solid #334155",borderRadius:"12px",padding:"16px",fontFamily:"monospace",fontSize:"12px"},children:[e.jsx("div",{style:{color:"#6a9955",marginBottom:"4px"},children:"// Hello World"}),e.jsxs("div",{style:{color:"#569cd6"},children:["const ",e.jsx("span",{style:{color:"#9cdcfe"},children:"app"}),e.jsx("span",{style:{color:"#d4d4d4"},children:" = "}),e.jsx("span",{style:{color:"#dcdcaa"},children:"createApp"}),e.jsx("span",{style:{color:"#d4d4d4"},children:"()"})]}),e.jsxs("div",{style:{color:"#d4d4d4",marginTop:"8px"},children:["app",e.jsx("span",{style:{color:"#d4d4d4"},children:"."}),e.jsx("span",{style:{color:"#dcdcaa"},children:"mount"}),e.jsx("span",{style:{color:"#d4d4d4"},children:"("}),e.jsx("span",{style:{color:"#ce9178"},children:"'#app'"}),e.jsx("span",{style:{color:"#d4d4d4"},children:")"})]})]}),actions:[{label:"문서 보기",variant:"primary"},{label:"GitHub",variant:"secondary"}]})},f={name:"그라디언트 배경",parameters:{docs:{description:{story:"화려한 그라디언트 배경의 히어로입니다."}}},render:()=>e.jsx(a,{title:"디자인의 미래를 경험하세요",subtitle:"New Release",description:"아름다운 컴포넌트와 직관적인 API로 멋진 인터페이스를 빠르게 구축하세요.",align:"center",imagePosition:"none",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"#fbbf24",size:"lg",actions:[{label:"지금 사용해보기",variant:"primary"},{label:"스크린샷 보기",variant:"ghost"}]})},b={name:"라이트 테마",parameters:{docs:{description:{story:"밝은 배경의 히어로입니다."}}},render:()=>e.jsx(a,{title:"비즈니스를 성장시키세요",subtitle:"올인원 플랫폼",description:"마케팅, 분석, 고객 관리를 하나의 플랫폼에서 관리하세요. 지금 바로 무료로 시작할 수 있습니다.",align:"left",imagePosition:"right",background:"#f8fafc",textColor:"#0f172a",color:"#3b82f6",image:e.jsx("div",{style:{width:"320px",height:"200px",background:"linear-gradient(135deg, #dbeafe, #e0e7ff)",borderRadius:"16px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"56px",boxShadow:"0 20px 60px rgba(59,130,246,0.15)"},children:"📊"}),actions:[{label:"무료 체험 시작",variant:"primary"},{label:"요금제 보기",variant:"outline"}]})},x={name:"크기 변형",parameters:{docs:{description:{story:"sm, md, lg, xl 크기 비교입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:["sm","md","lg"].map(r=>e.jsx(a,{title:`히어로 (${r})`,description:"배경과 텍스트 크기가 다릅니다.",imagePosition:"none",size:r,background:r==="sm"?"#1e293b":r==="md"?"#1e1b4b":"#14532d",color:r==="sm"?"#3b82f6":r==="md"?"#8b5cf6":"#10b981",actions:[{label:"CTA 버튼",variant:"primary"}]},r))})},y={name:"반응형 적층",render:()=>e.jsx(a,{title:"좁은 화면에서도 읽기 쉬운 구성",description:"콘텐츠와 미디어가 충분한 폭을 확보하지 못하면 자연스럽게 다음 줄로 이동합니다.",imagePosition:"right",stackAt:"md",background:"#f8fafc",textColor:"#0f172a",image:e.jsx("div",{style:{minHeight:"220px",background:"#dbeafe",borderRadius:"12px"}}),actions:[{label:"확인하기",variant:"primary"}]})};var T,z,w;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '기본',
  render: args => <Hero {...args} image={IllustrationImg} />
}`,...(w=(z=m.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var C,A,R;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '중앙 정렬',
  parameters: {
    docs: {
      description: {
        story: '텍스트와 버튼이 가운데 정렬된 히어로입니다.'
      }
    }
  },
  render: () => <Hero title="세상을 바꾸는 아이디어" subtitle="무엇이든 가능합니다" description="혁신적인 기술과 창의적인 디자인으로 당신의 비전을 현실로 만들어 드립니다." align="center" imagePosition="none" background="linear-gradient(135deg, #1e1b4b, #312e81)" color="#a78bfa" size="lg" actions={[{
    label: '무료로 시작하기',
    variant: 'primary'
  }, {
    label: '데모 보기',
    variant: 'outline'
  }]} />
}`,...(R=(A=u.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var q,I,P;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '좌우 분할',
  parameters: {
    docs: {
      description: {
        story: '텍스트와 이미지가 좌우로 나뉘는 분할 히어로입니다.'
      }
    }
  },
  render: () => <Hero title="개발자를 위한 최고의 도구" subtitle="프로덕티비티" description="코드 작성부터 배포까지, 모든 단계를 더 빠르고 스마트하게." imagePosition="right" background="#0f172a" color="#06b6d4" image={<div style={{
    width: '100%',
    maxWidth: '380px',
    background: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '12px',
    padding: '16px',
    fontFamily: 'monospace',
    fontSize: '12px'
  }}>
          <div style={{
      color: '#6a9955',
      marginBottom: '4px'
    }}>{'// Hello World'}</div>
          <div style={{
      color: '#569cd6'
    }}>{'const '}<span style={{
        color: '#9cdcfe'
      }}>app</span><span style={{
        color: '#d4d4d4'
      }}>{' = '}</span><span style={{
        color: '#dcdcaa'
      }}>createApp</span><span style={{
        color: '#d4d4d4'
      }}>{'()'}</span></div>
          <div style={{
      color: '#d4d4d4',
      marginTop: '8px'
    }}>app<span style={{
        color: '#d4d4d4'
      }}>.</span><span style={{
        color: '#dcdcaa'
      }}>{'mount'}</span><span style={{
        color: '#d4d4d4'
      }}>{'('}</span><span style={{
        color: '#ce9178'
      }}>{'\\'#app\\''}</span><span style={{
        color: '#d4d4d4'
      }}>{')'}</span></div>
        </div>} actions={[{
    label: '문서 보기',
    variant: 'primary'
  }, {
    label: 'GitHub',
    variant: 'secondary'
  }]} />
}`,...(P=(I=g.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var W,F,V;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '그라디언트 배경',
  parameters: {
    docs: {
      description: {
        story: '화려한 그라디언트 배경의 히어로입니다.'
      }
    }
  },
  render: () => <Hero title="디자인의 미래를 경험하세요" subtitle="New Release" description="아름다운 컴포넌트와 직관적인 API로 멋진 인터페이스를 빠르게 구축하세요." align="center" imagePosition="none" background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" color="#fbbf24" size="lg" actions={[{
    label: '지금 사용해보기',
    variant: 'primary'
  }, {
    label: '스크린샷 보기',
    variant: 'ghost'
  }]} />
}`,...(V=(F=f.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var D,L,B;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '라이트 테마',
  parameters: {
    docs: {
      description: {
        story: '밝은 배경의 히어로입니다.'
      }
    }
  },
  render: () => <Hero title="비즈니스를 성장시키세요" subtitle="올인원 플랫폼" description="마케팅, 분석, 고객 관리를 하나의 플랫폼에서 관리하세요. 지금 바로 무료로 시작할 수 있습니다." align="left" imagePosition="right" background="#f8fafc" textColor="#0f172a" color="#3b82f6" image={<div style={{
    width: '320px',
    height: '200px',
    background: 'linear-gradient(135deg, #dbeafe, #e0e7ff)',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '56px',
    boxShadow: '0 20px 60px rgba(59,130,246,0.15)'
  }}>📊</div>} actions={[{
    label: '무료 체험 시작',
    variant: 'primary'
  }, {
    label: '요금제 보기',
    variant: 'outline'
  }]} />
}`,...(B=(L=b.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var G,N,U;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
    gap: '2px'
  }}>
      {(['sm', 'md', 'lg'] as const).map(size => <Hero key={size} title={\`히어로 (\${size})\`} description="배경과 텍스트 크기가 다릅니다." imagePosition="none" size={size} background={size === 'sm' ? '#1e293b' : size === 'md' ? '#1e1b4b' : '#14532d'} color={size === 'sm' ? '#3b82f6' : size === 'md' ? '#8b5cf6' : '#10b981'} actions={[{
      label: 'CTA 버튼',
      variant: 'primary'
    }]} />)}
    </div>
}`,...(U=(N=x.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var _,M,O;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: '반응형 적층',
  render: () => <Hero title="좁은 화면에서도 읽기 쉬운 구성" description="콘텐츠와 미디어가 충분한 폭을 확보하지 못하면 자연스럽게 다음 줄로 이동합니다." imagePosition="right" stackAt="md" background="#f8fafc" textColor="#0f172a" image={<div style={{
    minHeight: '220px',
    background: '#dbeafe',
    borderRadius: '12px'
  }} />} actions={[{
    label: '확인하기',
    variant: 'primary'
  }]} />
}`,...(O=(M=y.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const ne=["Default","Centered","SplitLayout","GradientHero","LightHero","SizeVariants","ResponsiveStack"];export{u as Centered,m as Default,f as GradientHero,b as LightHero,y as ResponsiveStack,x as SizeVariants,g as SplitLayout,ne as __namedExportsOrder,ie as default};
