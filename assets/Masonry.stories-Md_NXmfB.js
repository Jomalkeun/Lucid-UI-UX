import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{d as L}from"./reference-types-4ftiVeOu.js";import{r as l}from"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";function t({children:s,columns:e=3,gap:r=16,style:d,className:O}){const h=l.useRef(null),[j,x]=l.useState(e);l.useEffect(()=>{const a=h.current;if(!a)return;const o=new ResizeObserver(([A])=>{const v=A.contentRect.width;v<480?x(1):v<768?x(Math.min(2,e)):x(e)});return o.observe(a),()=>o.disconnect()},[e]);const W=l.Children.toArray(s),b=Array.from({length:j},()=>[]);return W.forEach((a,o)=>b[o%j].push(a)),n.jsx("div",{ref:h,className:O,style:{display:"flex",gap:`${r}px`,alignItems:"flex-start",...d},children:b.map((a,o)=>n.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:`${r}px`,minWidth:0},children:a},o))})}t.__docgenInfo={description:"",methods:[],displayName:"Masonry",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},columns:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},gap:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"16",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const N=L([{library:"Ant Design",component:"Masonry",url:"https://ant.design/components/masonry/",usedFor:["comparison"],relation:"compared"}]),V={title:"Layout/Primitives/Masonry",component:t,tags:["autodocs","ref:ant-design"],parameters:{references:N,docs:{description:{component:"\n## Masonry\n\n높이가 제각각인 아이템을 Pinterest 스타일로 빈틈없이 배치하는 그리드 레이아웃 컴포넌트입니다.\ncolumn 수와 간격을 지정하면 아이템 높이에 따라 자동으로 열 방향으로 배치됩니다.\nResizeObserver로 반응형 컬럼 조정도 지원합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `columns` | `number` | `3` | 열 수 |\n| `gap` | `number` | `16` | 항목 간격(px) |\n| `children` | `ReactNode` | - | 카드 등 항목들 |\n        "}}},argTypes:{columns:{control:{type:"range",min:1,max:6},table:{category:"Layout"}},gap:{control:{type:"range",min:0,max:40,step:4},table:{category:"Appearance"}}},args:{columns:3,gap:16}},y=[180,120,220,160,200,140,260,110,190,150,230,170],i=["#dbeafe","#dcfce7","#fce7f3","#fef3c7","#e0e7ff","#fce7f3","#f0fdf4","#fff7ed","#f5f3ff","#fef2f2","#ecfdf5","#fefce8"],c=["🌸","🌊","🔥","⭐","🍀","🌙","🌈","💎","🦋","🎨","🚀","🎯"],p={name:"기본 (3열)",render:s=>n.jsx(t,{...s,children:y.map((e,r)=>n.jsx("div",{style:{height:`${e}px`,background:i[r],borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"32px"},children:c[r]},r))})},m={name:"2열",args:{columns:2,gap:12},render:s=>n.jsx(t,{...s,children:y.slice(0,8).map((e,r)=>n.jsx("div",{style:{height:`${e}px`,background:i[r],borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"32px"},children:c[r]},r))})},u={name:"4열",args:{columns:4,gap:12},render:s=>n.jsx(t,{...s,children:y.map((e,r)=>n.jsx("div",{style:{height:`${e}px`,background:i[r],borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"28px"},children:c[r]},r))})},f={name:"카드 레이아웃",parameters:{docs:{description:{story:"다양한 높이의 콘텐츠 카드를 마소너리로 배치합니다."}}},render:()=>{const s=[{title:"자연 속 산책",desc:"도시를 벗어나 자연 속에서 치유의 시간을 갖는 방법을 소개합니다.",emoji:"🌲",tags:["자연","힐링"],extra:!0},{title:"UI 트렌드 2024",desc:"올해 주목해야 할 디자인 트렌드를 정리했습니다.",emoji:"🎨",tags:["디자인"]},{title:"React 최적화 가이드",desc:"useMemo, useCallback, 코드 스플리팅 등 React 성능 최적화 기법을 알아봅니다. 실제 프로젝트에서 적용 가능한 사례와 함께 설명합니다.",emoji:"⚛️",tags:["개발","React"],extra:!0},{title:"카페 투어",desc:"서울 숨은 카페들을 소개합니다.",emoji:"☕",tags:["카페"]},{title:"생산성 앱 TOP 5",desc:"업무 효율을 높여주는 앱 5가지를 엄선했습니다. 각 앱의 핵심 기능과 사용법을 상세히 다룹니다.",emoji:"⚡",tags:["생산성","앱"]},{title:"여행 준비 체크리스트",desc:"빠짐없는 여행 준비를 위한 완벽한 가이드입니다.",emoji:"✈️",tags:["여행"]}];return n.jsx(t,{columns:3,gap:16,children:s.map((e,r)=>n.jsxs("div",{style:{background:"#fff",border:"1px solid #e5e7eb",borderRadius:"12px",overflow:"hidden",fontFamily:"system-ui"},children:[n.jsx("div",{style:{height:e.extra?"120px":"80px",background:i[r],display:"flex",alignItems:"center",justifyContent:"center",fontSize:"36px"},children:e.emoji}),n.jsxs("div",{style:{padding:"14px"},children:[n.jsx("h3",{style:{margin:"0 0 6px",fontSize:"15px",fontWeight:700,color:"#111"},children:e.title}),n.jsx("p",{style:{margin:"0 0 10px",fontSize:"13px",color:"#6b7280",lineHeight:1.6},children:e.desc}),n.jsx("div",{style:{display:"flex",gap:"4px",flexWrap:"wrap"},children:e.tags.map(d=>n.jsx("span",{style:{padding:"2px 8px",background:"#f3f4f6",borderRadius:"10px",fontSize:"11px",color:"#374151"},children:d},d))})]})]},r))})}},g={name:"이미지 갤러리",parameters:{docs:{description:{story:"불규칙한 높이의 이미지 갤러리 예시입니다."}}},render:()=>n.jsx(t,{columns:4,gap:8,children:[100,160,140,200,130,180,110,190,150,220,120,170].map((s,e)=>n.jsx("div",{style:{height:`${s}px`,background:i[e%i.length],borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"28px",cursor:"pointer"},children:c[e%c.length]},e))})};var R,S,C;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '기본 (3열)',
  render: args => <Masonry {...args}>
      {heights.map((h, i) => <div key={i} style={{
      height: \`\${h}px\`,
      background: colors[i],
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '32px'
    }}>
          {emojis[i]}
        </div>)}
    </Masonry>
}`,...(C=(S=p.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var k,z,M;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '2열',
  args: {
    columns: 2,
    gap: 12
  },
  render: args => <Masonry {...args}>
      {heights.slice(0, 8).map((h, i) => <div key={i} style={{
      height: \`\${h}px\`,
      background: colors[i],
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '32px'
    }}>
          {emojis[i]}
        </div>)}
    </Masonry>
}`,...(M=(z=m.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var I,T,$;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '4열',
  args: {
    columns: 4,
    gap: 12
  },
  render: args => <Masonry {...args}>
      {heights.map((h, i) => <div key={i} style={{
      height: \`\${h}px\`,
      background: colors[i],
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '28px'
    }}>
          {emojis[i]}
        </div>)}
    </Masonry>
}`,...($=(T=u.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var w,P,q;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '카드 레이아웃',
  parameters: {
    docs: {
      description: {
        story: '다양한 높이의 콘텐츠 카드를 마소너리로 배치합니다.'
      }
    }
  },
  render: () => {
    const cards = [{
      title: '자연 속 산책',
      desc: '도시를 벗어나 자연 속에서 치유의 시간을 갖는 방법을 소개합니다.',
      emoji: '🌲',
      tags: ['자연', '힐링'],
      extra: true
    }, {
      title: 'UI 트렌드 2024',
      desc: '올해 주목해야 할 디자인 트렌드를 정리했습니다.',
      emoji: '🎨',
      tags: ['디자인']
    }, {
      title: 'React 최적화 가이드',
      desc: 'useMemo, useCallback, 코드 스플리팅 등 React 성능 최적화 기법을 알아봅니다. 실제 프로젝트에서 적용 가능한 사례와 함께 설명합니다.',
      emoji: '⚛️',
      tags: ['개발', 'React'],
      extra: true
    }, {
      title: '카페 투어',
      desc: '서울 숨은 카페들을 소개합니다.',
      emoji: '☕',
      tags: ['카페']
    }, {
      title: '생산성 앱 TOP 5',
      desc: '업무 효율을 높여주는 앱 5가지를 엄선했습니다. 각 앱의 핵심 기능과 사용법을 상세히 다룹니다.',
      emoji: '⚡',
      tags: ['생산성', '앱']
    }, {
      title: '여행 준비 체크리스트',
      desc: '빠짐없는 여행 준비를 위한 완벽한 가이드입니다.',
      emoji: '✈️',
      tags: ['여행']
    }];
    return <Masonry columns={3} gap={16}>
        {cards.map((card, i) => <div key={i} style={{
        background: '#fff',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        overflow: 'hidden',
        fontFamily: 'system-ui'
      }}>
            <div style={{
          height: card.extra ? '120px' : '80px',
          background: colors[i],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '36px'
        }}>
              {card.emoji}
            </div>
            <div style={{
          padding: '14px'
        }}>
              <h3 style={{
            margin: '0 0 6px',
            fontSize: '15px',
            fontWeight: 700,
            color: '#111'
          }}>{card.title}</h3>
              <p style={{
            margin: '0 0 10px',
            fontSize: '13px',
            color: '#6b7280',
            lineHeight: 1.6
          }}>{card.desc}</p>
              <div style={{
            display: 'flex',
            gap: '4px',
            flexWrap: 'wrap'
          }}>
                {card.tags.map(tag => <span key={tag} style={{
              padding: '2px 8px',
              background: '#f3f4f6',
              borderRadius: '10px',
              fontSize: '11px',
              color: '#374151'
            }}>{tag}</span>)}
              </div>
            </div>
          </div>)}
      </Masonry>;
  }
}`,...(q=(P=f.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var D,E,F;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '이미지 갤러리',
  parameters: {
    docs: {
      description: {
        story: '불규칙한 높이의 이미지 갤러리 예시입니다.'
      }
    }
  },
  render: () => <Masonry columns={4} gap={8}>
      {[100, 160, 140, 200, 130, 180, 110, 190, 150, 220, 120, 170].map((h, i) => <div key={i} style={{
      height: \`\${h}px\`,
      background: colors[i % colors.length],
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '28px',
      cursor: 'pointer'
    }}>
          {emojis[i % emojis.length]}
        </div>)}
    </Masonry>
}`,...(F=(E=g.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const B=["Default","TwoColumn","FourColumn","CardLayout","ImageGallery"];export{f as CardLayout,p as Default,u as FourColumn,g as ImageGallery,m as TwoColumn,B as __namedExportsOrder,V as default};
