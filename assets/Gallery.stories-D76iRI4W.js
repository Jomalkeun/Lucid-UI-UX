import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as M}from"./reference-types-4ftiVeOu.js";import{r as N}from"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";function a({items:n,columns:y=3,gap:r=8,masonry:g=!1,lightbox:v=!0,showCaptions:P=!1,rounded:h=!0,onItemClick:c}){const[l,s]=N.useState(null),H=(t,o)=>{c==null||c(t,o),v&&s(o)},L=h===!0?"8px":h===!1?"0":h,i=l!==null?n[l]:null;return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:g?{columnCount:y,columnGap:r}:{display:"grid",gridTemplateColumns:`repeat(${y}, 1fr)`,gap:r},children:n.map((t,o)=>{const E=t.aspectRatio??1;return e.jsxs("div",{onClick:()=>H(t,o),style:{position:"relative",overflow:"hidden",borderRadius:L,cursor:v||c?"pointer":"default",breakInside:"avoid",marginBottom:g?r:0,background:t.color??"#e5e7eb",aspectRatio:g?void 0:String(E)},children:[t.src?e.jsx("img",{src:t.src,alt:t.alt??"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):t.content?e.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:t.content}):e.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"80px"},children:e.jsx("span",{style:{color:"rgba(255,255,255,0.6)",fontSize:"28px"},children:"🖼️"})}),P&&t.caption&&e.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"8px 10px",background:"linear-gradient(transparent, rgba(0,0,0,0.65))",color:"#fff",fontSize:"12px",fontFamily:"system-ui",lineHeight:1.3},children:t.caption})]},t.id)})}),i!==null&&l!==null&&e.jsxs("div",{onClick:()=>s(null),style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.9)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"},children:[e.jsx("button",{onClick:t=>{t.stopPropagation(),s(o=>o===0?n.length-1:(o??0)-1)},style:{position:"absolute",left:20,background:"rgba(255,255,255,0.15)",border:"none",color:"#fff",width:44,height:44,borderRadius:"50%",cursor:"pointer",fontSize:"22px",display:"flex",alignItems:"center",justifyContent:"center"},children:"‹"}),e.jsxs("div",{onClick:t=>t.stopPropagation(),style:{maxWidth:"80vw",maxHeight:"80vh",position:"relative"},children:[i.src?e.jsx("img",{src:i.src,alt:i.alt??"",style:{maxWidth:"80vw",maxHeight:"75vh",objectFit:"contain",borderRadius:"8px"}}):e.jsx("div",{style:{width:"400px",height:"300px",background:i.color??"#374151",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"80px"},children:i.content??"🖼️"}),i.caption&&e.jsx("div",{style:{textAlign:"center",color:"rgba(255,255,255,0.8)",fontSize:"13px",marginTop:"12px",fontFamily:"system-ui"},children:i.caption}),e.jsxs("div",{style:{textAlign:"center",color:"rgba(255,255,255,0.4)",fontSize:"12px",marginTop:"6px",fontFamily:"system-ui"},children:[l+1," / ",n.length]})]}),e.jsx("button",{onClick:t=>{t.stopPropagation(),s(o=>((o??0)+1)%n.length)},style:{position:"absolute",right:20,background:"rgba(255,255,255,0.15)",border:"none",color:"#fff",width:44,height:44,borderRadius:"50%",cursor:"pointer",fontSize:"22px",display:"flex",alignItems:"center",justifyContent:"center"},children:"›"}),e.jsx("button",{onClick:()=>s(null),style:{position:"absolute",top:20,right:20,background:"rgba(255,255,255,0.15)",border:"none",color:"#fff",width:36,height:36,borderRadius:"50%",cursor:"pointer",fontSize:"16px"},children:"✕"})]})]})}a.__docgenInfo={description:"",methods:[],displayName:"Gallery",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"GalleryItem"}],raw:"GalleryItem[]"},description:""},columns:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},gap:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},masonry:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},lightbox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCaptions:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},rounded:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"",defaultValue:{value:"true",computed:!1}},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: GalleryItem, index: number) => void",signature:{arguments:[{type:{name:"GalleryItem"},name:"item"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const O=M([{library:"Flowbite",component:"Gallery",url:"https://flowbite.com/docs/components/gallery/",usedFor:["comparison"],relation:"compared"}]),U={title:"Molecules/Display/Gallery",component:a,tags:["autodocs","ref:flowbite","ref:mui"],parameters:{references:O,docs:{description:{component:"\n## Gallery\n\n이미지 그리드/마소리 레이아웃으로 사진 컬렉션을 표시하는 갤러리 컴포넌트입니다.\n클릭 시 라이트박스로 확대 보기, 열 수 조절, 캡션 표시 등을 지원합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `items` | `GalleryItem[]` | - | 갤러리 아이템 목록 |\n| `columns` | `number` | `3` | 열 수 |\n| `gap` | `number` | `8` | 간격(px) |\n| `masonry` | `boolean` | `false` | 마소리 레이아웃 |\n| `lightbox` | `boolean` | `true` | 클릭 시 라이트박스 |\n| `showCaptions` | `boolean` | `false` | 캡션 표시 |\n        "}}},argTypes:{columns:{control:{type:"range",min:1,max:6,step:1},table:{category:"Layout"}},gap:{control:{type:"range",min:0,max:32,step:2},table:{category:"Layout"}},masonry:{control:"boolean",table:{category:"Layout"}},lightbox:{control:"boolean",table:{category:"Behavior"}},showCaptions:{control:"boolean",table:{category:"Appearance"}},rounded:{control:"boolean",table:{category:"Appearance"}}},args:{columns:3,gap:8,masonry:!1,lightbox:!0,showCaptions:!1,rounded:!0}},b=[{id:1,color:"#3b82f6",caption:"파란 하늘",content:"🌊",aspectRatio:4/3},{id:2,color:"#10b981",caption:"초록 숲",content:"🌳",aspectRatio:4/3},{id:3,color:"#ef4444",caption:"붉은 노을",content:"🌅",aspectRatio:4/3},{id:4,color:"#f59e0b",caption:"황금 들판",content:"🌾",aspectRatio:4/3},{id:5,color:"#8b5cf6",caption:"보라 꽃밭",content:"💜",aspectRatio:4/3},{id:6,color:"#ec4899",caption:"분홍 벚꽃",content:"🌸",aspectRatio:4/3},{id:7,color:"#06b6d4",caption:"청록 바다",content:"🐠",aspectRatio:4/3},{id:8,color:"#84cc16",caption:"연두 봄",content:"🌿",aspectRatio:4/3},{id:9,color:"#f97316",caption:"주황 가을",content:"🍂",aspectRatio:4/3}],d={name:"기본 3열 그리드",render:n=>e.jsx("div",{style:{maxWidth:"560px",padding:"16px",fontFamily:"system-ui"},children:e.jsx(a,{...n,items:b})})},p={name:"캡션 표시",parameters:{docs:{description:{story:"이미지 위에 캡션을 오버레이하는 예시입니다."}}},render:()=>e.jsx("div",{style:{maxWidth:"560px",padding:"16px",fontFamily:"system-ui"},children:e.jsx(a,{items:b,showCaptions:!0,columns:3})})},m={name:"열 수 변형",parameters:{docs:{description:{story:"2열, 3열, 4열 레이아웃 비교입니다."}}},render:()=>e.jsx("div",{style:{fontFamily:"system-ui",display:"flex",flexDirection:"column",gap:"32px"},children:[2,3,4].map(n=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"8px",fontWeight:600},children:["columns: ",n]}),e.jsx(a,{items:b.slice(0,6),columns:n})]},n))})},f={name:"마소리 레이아웃",parameters:{docs:{description:{story:"CSS column을 사용한 마소리 레이아웃입니다."}}},render:()=>{const n=[{id:1,color:"#3b82f6",content:"🌊",aspectRatio:1},{id:2,color:"#10b981",content:"🌳",aspectRatio:1.7777777777777777},{id:3,color:"#ef4444",content:"🌅",aspectRatio:.75},{id:4,color:"#f59e0b",content:"🌾",aspectRatio:.5},{id:5,color:"#8b5cf6",content:"💜",aspectRatio:1.3333333333333333},{id:6,color:"#ec4899",content:"🌸",aspectRatio:.6666666666666666},{id:7,color:"#06b6d4",content:"🐠",aspectRatio:1},{id:8,color:"#84cc16",content:"🌿",aspectRatio:1.5}];return e.jsx("div",{style:{maxWidth:"560px",padding:"16px"},children:e.jsx(a,{items:n,masonry:!0,columns:3,gap:8,showCaptions:!0})})}},x={name:"2열 (블로그 스타일)",parameters:{docs:{description:{story:"블로그 썸네일 그리드 스타일입니다."}}},render:()=>{const n=[{id:1,color:"#1e40af",content:e.jsxs("div",{style:{textAlign:"center",padding:"20px",color:"#fff"},children:[e.jsx("div",{style:{fontSize:"28px"},children:"🚀"}),e.jsx("div",{style:{fontSize:"14px",fontWeight:700,marginTop:"8px"},children:"React 19 새 기능"})]}),caption:"React 19 새 기능",aspectRatio:1.7777777777777777},{id:2,color:"#166534",content:e.jsxs("div",{style:{textAlign:"center",padding:"20px",color:"#fff"},children:[e.jsx("div",{style:{fontSize:"28px"},children:"🎨"}),e.jsx("div",{style:{fontSize:"14px",fontWeight:700,marginTop:"8px"},children:"디자인 시스템 구축"})]}),caption:"디자인 시스템 구축",aspectRatio:1.7777777777777777},{id:3,color:"#7c2d12",content:e.jsxs("div",{style:{textAlign:"center",padding:"20px",color:"#fff"},children:[e.jsx("div",{style:{fontSize:"28px"},children:"⚡"}),e.jsx("div",{style:{fontSize:"14px",fontWeight:700,marginTop:"8px"},children:"성능 최적화 전략"})]}),caption:"성능 최적화 전략",aspectRatio:1.7777777777777777},{id:4,color:"#4c1d95",content:e.jsxs("div",{style:{textAlign:"center",padding:"20px",color:"#fff"},children:[e.jsx("div",{style:{fontSize:"28px"},children:"🔐"}),e.jsx("div",{style:{fontSize:"14px",fontWeight:700,marginTop:"8px"},children:"인증 보안 가이드"})]}),caption:"인증 보안 가이드",aspectRatio:1.7777777777777777}];return e.jsx("div",{style:{maxWidth:"560px",padding:"16px",fontFamily:"system-ui"},children:e.jsx(a,{items:n,columns:2,gap:12,showCaptions:!0,rounded:"12px"})})}},u={name:"Instagram 그리드",parameters:{docs:{description:{story:"정사각형 3열 Instagram 스타일 갤러리입니다."}}},render:()=>{const n=Array.from({length:12},(y,r)=>({id:r+1,color:["#3b82f6","#10b981","#ef4444","#f59e0b","#8b5cf6","#ec4899","#06b6d4","#84cc16","#f97316","#6366f1","#14b8a6","#a855f7"][r],content:["🏖️","🌄","🍕","☕","🎸","🌺","🐱","🌮","🏔️","🎭","🌈","🦋"][r],aspectRatio:1}));return e.jsxs("div",{style:{maxWidth:"400px",fontFamily:"system-ui"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"12px",padding:"0 4px"},children:[e.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"50%",background:"linear-gradient(135deg, #f59e0b, #ef4444, #8b5cf6)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px"},children:"📸"}),e.jsx("span",{style:{fontSize:"14px",fontWeight:700,color:"#111"},children:"my_gallery"})]}),e.jsx(a,{items:n,columns:3,gap:2,rounded:!1})]})}};var j,R,S;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '기본 3열 그리드',
  render: args => <div style={{
    maxWidth: '560px',
    padding: '16px',
    fontFamily: 'system-ui'
  }}>
      <Gallery {...args} items={colorItems} />
    </div>
}`,...(S=(R=d.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var I,z,C;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '캡션 표시',
  parameters: {
    docs: {
      description: {
        story: '이미지 위에 캡션을 오버레이하는 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    maxWidth: '560px',
    padding: '16px',
    fontFamily: 'system-ui'
  }}>
      <Gallery items={colorItems} showCaptions columns={3} />
    </div>
}`,...(C=(z=p.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var w,W,T;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '열 수 변형',
  parameters: {
    docs: {
      description: {
        story: '2열, 3열, 4열 레이아웃 비교입니다.'
      }
    }
  },
  render: () => <div style={{
    fontFamily: 'system-ui',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      {[2, 3, 4].map(cols => <div key={cols}>
          <div style={{
        fontSize: '12px',
        color: '#9ca3af',
        marginBottom: '8px',
        fontWeight: 600
      }}>columns: {cols}</div>
          <Gallery items={colorItems.slice(0, 6)} columns={cols} />
        </div>)}
    </div>
}`,...(T=(W=m.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var F,G,k;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '마소리 레이아웃',
  parameters: {
    docs: {
      description: {
        story: 'CSS column을 사용한 마소리 레이아웃입니다.'
      }
    }
  },
  render: () => {
    const masonryItems = [{
      id: 1,
      color: '#3b82f6',
      content: '🌊',
      aspectRatio: 1
    }, {
      id: 2,
      color: '#10b981',
      content: '🌳',
      aspectRatio: 16 / 9
    }, {
      id: 3,
      color: '#ef4444',
      content: '🌅',
      aspectRatio: 3 / 4
    }, {
      id: 4,
      color: '#f59e0b',
      content: '🌾',
      aspectRatio: 1 / 2
    }, {
      id: 5,
      color: '#8b5cf6',
      content: '💜',
      aspectRatio: 4 / 3
    }, {
      id: 6,
      color: '#ec4899',
      content: '🌸',
      aspectRatio: 2 / 3
    }, {
      id: 7,
      color: '#06b6d4',
      content: '🐠',
      aspectRatio: 1
    }, {
      id: 8,
      color: '#84cc16',
      content: '🌿',
      aspectRatio: 3 / 2
    }];
    return <div style={{
      maxWidth: '560px',
      padding: '16px'
    }}>
        <Gallery items={masonryItems} masonry columns={3} gap={8} showCaptions />
      </div>;
  }
}`,...(k=(G=f.parameters)==null?void 0:G.docs)==null?void 0:k.source}}};var A,q,V;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '2열 (블로그 스타일)',
  parameters: {
    docs: {
      description: {
        story: '블로그 썸네일 그리드 스타일입니다.'
      }
    }
  },
  render: () => {
    const blogItems = [{
      id: 1,
      color: '#1e40af',
      content: <div style={{
        textAlign: 'center',
        padding: '20px',
        color: '#fff'
      }}><div style={{
          fontSize: '28px'
        }}>🚀</div><div style={{
          fontSize: '14px',
          fontWeight: 700,
          marginTop: '8px'
        }}>React 19 새 기능</div></div>,
      caption: 'React 19 새 기능',
      aspectRatio: 16 / 9
    }, {
      id: 2,
      color: '#166534',
      content: <div style={{
        textAlign: 'center',
        padding: '20px',
        color: '#fff'
      }}><div style={{
          fontSize: '28px'
        }}>🎨</div><div style={{
          fontSize: '14px',
          fontWeight: 700,
          marginTop: '8px'
        }}>디자인 시스템 구축</div></div>,
      caption: '디자인 시스템 구축',
      aspectRatio: 16 / 9
    }, {
      id: 3,
      color: '#7c2d12',
      content: <div style={{
        textAlign: 'center',
        padding: '20px',
        color: '#fff'
      }}><div style={{
          fontSize: '28px'
        }}>⚡</div><div style={{
          fontSize: '14px',
          fontWeight: 700,
          marginTop: '8px'
        }}>성능 최적화 전략</div></div>,
      caption: '성능 최적화 전략',
      aspectRatio: 16 / 9
    }, {
      id: 4,
      color: '#4c1d95',
      content: <div style={{
        textAlign: 'center',
        padding: '20px',
        color: '#fff'
      }}><div style={{
          fontSize: '28px'
        }}>🔐</div><div style={{
          fontSize: '14px',
          fontWeight: 700,
          marginTop: '8px'
        }}>인증 보안 가이드</div></div>,
      caption: '인증 보안 가이드',
      aspectRatio: 16 / 9
    }];
    return <div style={{
      maxWidth: '560px',
      padding: '16px',
      fontFamily: 'system-ui'
    }}>
        <Gallery items={blogItems} columns={2} gap={12} showCaptions rounded="12px" />
      </div>;
  }
}`,...(V=(q=x.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var _,B,D;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Instagram 그리드',
  parameters: {
    docs: {
      description: {
        story: '정사각형 3열 Instagram 스타일 갤러리입니다.'
      }
    }
  },
  render: () => {
    const igItems = Array.from({
      length: 12
    }, (_, i) => ({
      id: i + 1,
      color: ['#3b82f6', '#10b981', '#ef4444', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16', '#f97316', '#6366f1', '#14b8a6', '#a855f7'][i],
      content: ['🏖️', '🌄', '🍕', '☕', '🎸', '🌺', '🐱', '🌮', '🏔️', '🎭', '🌈', '🦋'][i],
      aspectRatio: 1
    }));
    return <div style={{
      maxWidth: '400px',
      fontFamily: 'system-ui'
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '12px',
        padding: '0 4px'
      }}>
          <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #f59e0b, #ef4444, #8b5cf6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px'
        }}>📸</div>
          <span style={{
          fontSize: '14px',
          fontWeight: 700,
          color: '#111'
        }}>my_gallery</span>
        </div>
        <Gallery items={igItems} columns={3} gap={2} rounded={false} />
      </div>;
  }
}`,...(D=(B=u.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const X=["Default","WithCaptions","ColumnVariants","Masonry","TwoColumn","InstagramStyle"];export{m as ColumnVariants,d as Default,u as InstagramStyle,f as Masonry,x as TwoColumn,p as WithCaptions,X as __namedExportsOrder,U as default};
