import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as U}from"./reference-types-4ftiVeOu.js";import{r as X}from"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";function n({children:a,speed:t=40,direction:r="left",pauseOnHover:x=!0,gap:g=16,repeat:N=4,gradient:B=!0,gradientColor:h="#fff",gradientWidth:O=80,vertical:E=!1,style:H}){const o=E||r==="up"||r==="down",b=r==="right"||r==="down",i=X.useRef(null),y=`marquee-${o?"v":"h"}-${b?"r":"f"}`,L=b?"reverse":"normal",_=o?`@keyframes ${y} { from { transform: translateY(0) } to { transform: translateY(-50%) } }`:`@keyframes ${y} { from { transform: translateX(0) } to { transform: translateX(-50%) } }`,G={display:"flex",flexDirection:o?"column":"row",gap:typeof g=="number"?`${g}px`:g,animation:`${y} ${t}s linear infinite ${L}`,willChange:"transform",width:o?void 0:"max-content"},Q={overflow:"hidden",position:"relative",display:"flex",flexDirection:o?"column":"row",...H},v=s=>{if(!B)return{display:"none"};const d=`${O}px`;return{position:"absolute",zIndex:1,pointerEvents:"none",...o?{left:0,right:0,height:d,[s==="start"?"top":"bottom"]:0,background:`linear-gradient(${s==="start"?"to bottom":"to top"}, ${h}, transparent)`}:{top:0,bottom:0,width:d,[s==="start"?"left":"right"]:0,background:`linear-gradient(${s==="start"?"to right":"to left"}, ${h}, transparent)`}}};return e.jsxs("div",{style:Q,onMouseEnter:()=>{x&&i.current&&(i.current.style.animationPlayState="paused")},onMouseLeave:()=>{x&&i.current&&(i.current.style.animationPlayState="running")},children:[e.jsx("style",{children:_}),e.jsx("div",{style:v("start")}),e.jsx("div",{ref:i,style:G,children:Array.from({length:N},(s,d)=>e.jsx("div",{style:{display:"contents"},children:a},d))}),e.jsx("div",{style:v("end")})]})}n.__docgenInfo={description:"",methods:[],displayName:"Marquee",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},speed:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"40",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'up' | 'down'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'up'"},{name:"literal",value:"'down'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},gap:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"16",computed:!1}},repeat:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},gradient:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},gradientColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#fff'",computed:!1}},gradientWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"80",computed:!1}},vertical:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const J=U([{library:"Ark UI",component:"Marquee",url:"https://ark-ui.com/docs/components/marquee",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Chakra UI",component:"Marquee",url:"https://www.chakra-ui.com/docs/components/marquee",usedFor:["comparison"],relation:"compared"}]),re={title:"Atoms/Display/Marquee",component:n,tags:["autodocs","ref:chakra-ui","ref:ark-ui"],parameters:{references:J,docs:{description:{component:"\n## Marquee\n\n콘텐츠가 자동 스크롤되는 무한 루프 배너 컴포넌트입니다.\n로고, 공지, 피처 목록 등을 연속으로 흐르게 표시할 때 사용합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `speed` | `number` | `40` | 애니메이션 지속 시간(초, 낮을수록 빠름) |\n| `direction` | `'left'\\|'right'\\|'up'\\|'down'` | `'left'` | 스크롤 방향 |\n| `pauseOnHover` | `boolean` | `true` | 마우스 오버 시 일시정지 |\n| `gap` | `number\\|string` | `16` | 항목 간격 |\n| `repeat` | `number` | `4` | 반복 횟수 |\n| `gradient` | `boolean` | `true` | 양끝 그라디언트 |\n| `gradientColor` | `string` | `'#fff'` | 그라디언트 색상 |\n        "}}},argTypes:{speed:{control:{type:"range",min:5,max:100,step:5},table:{category:"Animation"}},direction:{control:"select",options:["left","right","up","down"],table:{category:"Animation"}},pauseOnHover:{control:"boolean",table:{category:"Behavior"}},gap:{control:"number",table:{category:"Appearance"}},repeat:{control:{type:"range",min:2,max:8},table:{category:"Behavior"}},gradient:{control:"boolean",table:{category:"Appearance"}},gradientColor:{control:"color",table:{category:"Appearance"}},gradientWidth:{control:{type:"range",min:20,max:200},table:{category:"Appearance"}}},args:{speed:30,direction:"left",pauseOnHover:!0,gap:16,repeat:4,gradient:!0,gradientColor:"#fff",gradientWidth:80}},K=["⚛️ React","🔷 TypeScript","⚡ Vite","📖 Storybook","🐼 PandaCSS","🎨 Figma","🚀 Vercel","🌊 Tailwind"],l={name:"기본 로고 마퀴",render:()=>e.jsx(n,{speed:30,style:{padding:"8px 0"},children:K.map(a=>e.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"8px 20px",background:"#f3f4f6",borderRadius:"20px",fontSize:"14px",fontFamily:"system-ui",fontWeight:600,color:"#374151",whiteSpace:"nowrap"},children:a},a))})},p={name:"우측 방향",parameters:{docs:{description:{story:"오른쪽에서 왼쪽 대신 왼쪽에서 오른쪽으로 흐릅니다."}}},render:()=>e.jsx(n,{direction:"right",speed:25,children:["🌍 글로벌","🔒 보안","📊 분석","🤖 AI","☁️ 클라우드","📱 모바일"].map(a=>e.jsx("span",{style:{display:"inline-block",padding:"6px 16px",background:"#dbeafe",color:"#1e40af",borderRadius:"20px",fontSize:"13px",fontFamily:"system-ui",fontWeight:600,whiteSpace:"nowrap"},children:a},a))})},c={name:"그라디언트 없음",parameters:{docs:{description:{story:"gradient=false로 양끝 페이드 효과를 제거합니다."}}},render:()=>e.jsx(n,{gradient:!1,speed:20,style:{background:"#1e293b",padding:"12px 0"},children:["React","TypeScript","Node.js","GraphQL","Docker","Kubernetes","PostgreSQL","Redis"].map(a=>e.jsx("span",{style:{display:"inline-block",padding:"4px 14px",border:"1px solid #334155",color:"#94a3b8",borderRadius:"4px",fontSize:"13px",fontFamily:"monospace",whiteSpace:"nowrap"},children:a},a))})},m={name:"카드 마퀴",parameters:{docs:{description:{story:"텍스트가 포함된 카드 형태의 마퀴입니다."}}},render:()=>{const a=[{name:"김민준",role:"개발자",text:"정말 훌륭한 디자인 시스템입니다!",avatar:"👨‍💻"},{name:"이서연",role:"UX 디자이너",text:"컴포넌트 퀄리티가 최고예요.",avatar:"👩‍🎨"},{name:"박지호",role:"PM",text:"팀 생산성이 2배 향상됐어요.",avatar:"👨‍💼"},{name:"최유진",role:"스타트업 CTO",text:"처음부터 이걸 썼더라면!",avatar:"👩‍💼"}];return e.jsx(n,{speed:40,gap:12,gradient:!0,gradientWidth:60,children:a.map(t=>e.jsxs("div",{style:{display:"inline-flex",flexDirection:"column",gap:"10px",padding:"16px",border:"1px solid #e5e7eb",borderRadius:"12px",width:"220px",background:"#fff",flexShrink:0,fontFamily:"system-ui"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx("span",{style:{fontSize:"28px"},children:t.avatar}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:700,fontSize:"14px",color:"#111"},children:t.name}),e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af"},children:t.role})]})]}),e.jsxs("div",{style:{fontSize:"13px",color:"#374151",lineHeight:1.5},children:['"',t.text,'"']})]},t.name))})}},u={name:"이중 행",parameters:{docs:{description:{story:"두 줄이 서로 반대 방향으로 흐르는 마퀴입니다."}}},render:()=>{const a=["🎸 Rock","🎹 Jazz","🎺 Blues","🥁 Funk","🎻 Classical","🎷 Soul"],t=["🌸 봄","☀️ 여름","🍂 가을","❄️ 겨울","🌈 무지개","🌙 달빛"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(n,{direction:"left",speed:25,gradient:!0,gradientWidth:40,children:a.map(r=>e.jsx("span",{style:{display:"inline-block",padding:"6px 16px",background:"#fce7f3",color:"#be185d",borderRadius:"20px",fontSize:"13px",fontFamily:"system-ui",fontWeight:600,whiteSpace:"nowrap"},children:r},r))}),e.jsx(n,{direction:"right",speed:20,gradient:!0,gradientWidth:40,children:t.map(r=>e.jsx("span",{style:{display:"inline-block",padding:"6px 16px",background:"#dbeafe",color:"#1d4ed8",borderRadius:"20px",fontSize:"13px",fontFamily:"system-ui",fontWeight:600,whiteSpace:"nowrap"},children:r},r))})]})}},f={name:"공지 배너",parameters:{docs:{description:{story:"사이트 상단 공지 배너에 활용하는 예시입니다."}}},render:()=>e.jsx("div",{style:{background:"#1e40af",padding:"8px 0"},children:e.jsx(n,{speed:15,gradient:!1,gap:48,children:["🎉 대규모 업데이트 출시 · 지금 확인하세요!","🔔 신규 기능: 다크 모드 지원","💬 커뮤니티에서 최신 소식을 받아보세요"].map(a=>e.jsx("span",{style:{display:"inline-block",fontSize:"13px",color:"#fff",fontFamily:"system-ui",whiteSpace:"nowrap"},children:a},a))})})};var S,k,w;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '기본 로고 마퀴',
  render: () => <Marquee speed={30} style={{
    padding: '8px 0'
  }}>
      {logos.map(logo => <div key={logo} style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '8px 20px',
      background: '#f3f4f6',
      borderRadius: '20px',
      fontSize: '14px',
      fontFamily: 'system-ui',
      fontWeight: 600,
      color: '#374151',
      whiteSpace: 'nowrap'
    }}>
          {logo}
        </div>)}
    </Marquee>
}`,...(w=(k=l.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var q,j,R;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '우측 방향',
  parameters: {
    docs: {
      description: {
        story: '오른쪽에서 왼쪽 대신 왼쪽에서 오른쪽으로 흐릅니다.'
      }
    }
  },
  render: () => <Marquee direction="right" speed={25}>
      {['🌍 글로벌', '🔒 보안', '📊 분석', '🤖 AI', '☁️ 클라우드', '📱 모바일'].map(tag => <span key={tag} style={{
      display: 'inline-block',
      padding: '6px 16px',
      background: '#dbeafe',
      color: '#1e40af',
      borderRadius: '20px',
      fontSize: '13px',
      fontFamily: 'system-ui',
      fontWeight: 600,
      whiteSpace: 'nowrap'
    }}>
          {tag}
        </span>)}
    </Marquee>
}`,...(R=(j=p.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var z,M,F;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '그라디언트 없음',
  parameters: {
    docs: {
      description: {
        story: 'gradient=false로 양끝 페이드 효과를 제거합니다.'
      }
    }
  },
  render: () => <Marquee gradient={false} speed={20} style={{
    background: '#1e293b',
    padding: '12px 0'
  }}>
      {['React', 'TypeScript', 'Node.js', 'GraphQL', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis'].map(tech => <span key={tech} style={{
      display: 'inline-block',
      padding: '4px 14px',
      border: '1px solid #334155',
      color: '#94a3b8',
      borderRadius: '4px',
      fontSize: '13px',
      fontFamily: 'monospace',
      whiteSpace: 'nowrap'
    }}>
          {tech}
        </span>)}
    </Marquee>
}`,...(F=(M=c.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var T,W,D;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '카드 마퀴',
  parameters: {
    docs: {
      description: {
        story: '텍스트가 포함된 카드 형태의 마퀴입니다.'
      }
    }
  },
  render: () => {
    const testimonials = [{
      name: '김민준',
      role: '개발자',
      text: '정말 훌륭한 디자인 시스템입니다!',
      avatar: '👨‍💻'
    }, {
      name: '이서연',
      role: 'UX 디자이너',
      text: '컴포넌트 퀄리티가 최고예요.',
      avatar: '👩‍🎨'
    }, {
      name: '박지호',
      role: 'PM',
      text: '팀 생산성이 2배 향상됐어요.',
      avatar: '👨‍💼'
    }, {
      name: '최유진',
      role: '스타트업 CTO',
      text: '처음부터 이걸 썼더라면!',
      avatar: '👩‍💼'
    }];
    return <Marquee speed={40} gap={12} gradient gradientWidth={60}>
        {testimonials.map(t => <div key={t.name} style={{
        display: 'inline-flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '16px',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        width: '220px',
        background: '#fff',
        flexShrink: 0,
        fontFamily: 'system-ui'
      }}>
            <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
              <span style={{
            fontSize: '28px'
          }}>{t.avatar}</span>
              <div>
                <div style={{
              fontWeight: 700,
              fontSize: '14px',
              color: '#111'
            }}>{t.name}</div>
                <div style={{
              fontSize: '12px',
              color: '#9ca3af'
            }}>{t.role}</div>
              </div>
            </div>
            <div style={{
          fontSize: '13px',
          color: '#374151',
          lineHeight: 1.5
        }}>"{t.text}"</div>
          </div>)}
      </Marquee>;
  }
}`,...(D=(W=m.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var A,C,$;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '이중 행',
  parameters: {
    docs: {
      description: {
        story: '두 줄이 서로 반대 방향으로 흐르는 마퀴입니다.'
      }
    }
  },
  render: () => {
    const row1 = ['🎸 Rock', '🎹 Jazz', '🎺 Blues', '🥁 Funk', '🎻 Classical', '🎷 Soul'];
    const row2 = ['🌸 봄', '☀️ 여름', '🍂 가을', '❄️ 겨울', '🌈 무지개', '🌙 달빛'];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <Marquee direction="left" speed={25} gradient gradientWidth={40}>
          {row1.map(item => <span key={item} style={{
          display: 'inline-block',
          padding: '6px 16px',
          background: '#fce7f3',
          color: '#be185d',
          borderRadius: '20px',
          fontSize: '13px',
          fontFamily: 'system-ui',
          fontWeight: 600,
          whiteSpace: 'nowrap'
        }}>{item}</span>)}
        </Marquee>
        <Marquee direction="right" speed={20} gradient gradientWidth={40}>
          {row2.map(item => <span key={item} style={{
          display: 'inline-block',
          padding: '6px 16px',
          background: '#dbeafe',
          color: '#1d4ed8',
          borderRadius: '20px',
          fontSize: '13px',
          fontFamily: 'system-ui',
          fontWeight: 600,
          whiteSpace: 'nowrap'
        }}>{item}</span>)}
        </Marquee>
      </div>;
  }
}`,...($=(C=u.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var V,I,P;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '공지 배너',
  parameters: {
    docs: {
      description: {
        story: '사이트 상단 공지 배너에 활용하는 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    background: '#1e40af',
    padding: '8px 0'
  }}>
      <Marquee speed={15} gradient={false} gap={48}>
        {['🎉 대규모 업데이트 출시 · 지금 확인하세요!', '🔔 신규 기능: 다크 모드 지원', '💬 커뮤니티에서 최신 소식을 받아보세요'].map(msg => <span key={msg} style={{
        display: 'inline-block',
        fontSize: '13px',
        color: '#fff',
        fontFamily: 'system-ui',
        whiteSpace: 'nowrap'
      }}>{msg}</span>)}
      </Marquee>
    </div>
}`,...(P=(I=f.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const te=["Default","RightDirection","NoGradient","CardMarquee","DualRow","AnnouncementBanner"];export{f as AnnouncementBanner,m as CardMarquee,l as Default,u as DualRow,c as NoGradient,p as RightDirection,te as __namedExportsOrder,re as default};
