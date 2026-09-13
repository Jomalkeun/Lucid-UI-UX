import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as S}from"./reference-types-4ftiVeOu.js";function t({children:n,style:o,className:p}){return e.jsx("div",{className:p,style:{position:"relative",...o},children:n})}function r({children:n,isExternal:o,style:p,...i}){return e.jsxs("a",{...i,target:o?"_blank":i.target,rel:o?i.rel??"noopener noreferrer":i.rel,style:{position:"static",...p},children:[e.jsx("span",{style:{position:"absolute",inset:0,zIndex:0,cursor:"pointer",display:"block"},"aria-hidden":"true"}),e.jsx("span",{style:{position:"relative",zIndex:1},children:n})]})}t.__docgenInfo={description:"",methods:[],displayName:"LinkBox",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};r.__docgenInfo={description:"",methods:[],displayName:"LinkOverlay",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},isExternal:{required:!1,tsType:{name:"boolean"},description:""}},composes:["AnchorHTMLAttributes"]};const z=S([{library:"Bootstrap",component:"Stretched link",url:"https://getbootstrap.com/docs/5.3/helpers/stretched-link/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Link Overlay",url:"https://www.chakra-ui.com/docs/components/link-overlay",usedFor:["comparison"],relation:"compared"}]),B={title:"Atoms/Primitives/LinkOverlay",component:r,tags:["autodocs","ref:chakra-ui","ref:bootstrap"],parameters:{references:z,docs:{description:{component:"\n## LinkOverlay\n\n카드나 컨테이너 전체를 클릭 가능한 링크 영역으로 만드는 컴포넌트입니다.\n내부에 중첩된 다른 인터랙티브 요소(버튼, 링크)는 독립적으로 동작합니다.\n\n`LinkBox`로 컨테이너를 감싸고, `LinkOverlay`로 주 링크를 지정하면 됩니다.\n\n---\n\n### Props\n\n| Prop | Type | 설명 |\n|---|---|---|\n| `LinkBox.children` | `ReactNode` | 카드 내용 |\n| `LinkOverlay.href` | `string` | 링크 URL |\n| `LinkOverlay.isExternal` | `boolean` | 새 탭으로 열기 |\n| `LinkOverlay.children` | `ReactNode` | 링크 텍스트 |\n        "}}}},a={name:"기본 카드",render:()=>e.jsxs(t,{style:{border:"1px solid #e5e7eb",borderRadius:"12px",padding:"20px",cursor:"pointer",fontFamily:"system-ui",maxWidth:"320px",transition:"box-shadow 0.2s"},children:[e.jsx("div",{style:{fontSize:"13px",color:"#9ca3af",marginBottom:"6px"},children:"블로그 포스트"}),e.jsx("h3",{style:{margin:"0 0 8px",fontSize:"18px",fontWeight:700},children:e.jsx(r,{href:"#",style:{textDecoration:"none",color:"#111"},children:"React 19의 새로운 기능들"})}),e.jsx("p",{style:{margin:"0 0 16px",fontSize:"14px",color:"#6b7280",lineHeight:1.5},children:"Concurrent Features, Suspense 개선, 새로운 훅들에 대해 알아봅니다."}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#9ca3af"},children:"2024.01.15"}),e.jsx("button",{onClick:n=>{n.preventDefault(),alert("좋아요!")},style:{position:"relative",zIndex:2,background:"none",border:"1px solid #e5e7eb",borderRadius:"20px",padding:"4px 12px",cursor:"pointer",fontSize:"13px",color:"#6b7280"},children:"♥ 좋아요"})]})]})},s={name:"상품 카드",parameters:{docs:{description:{story:"상품 카드 전체가 링크로 동작하면서 내부 버튼은 독립적입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",fontFamily:"system-ui"},children:[{name:"무선 헤드폰",price:"89,000원",emoji:"🎧",color:"#dbeafe"},{name:"스마트워치",price:"299,000원",emoji:"⌚",color:"#dcfce7"},{name:"블루투스 스피커",price:"149,000원",emoji:"🔊",color:"#fce7f3"}].map(n=>e.jsxs(t,{style:{border:"1px solid #e5e7eb",borderRadius:"12px",overflow:"hidden",width:"180px",cursor:"pointer"},children:[e.jsx("div",{style:{height:"120px",background:n.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"48px"},children:n.emoji}),e.jsxs("div",{style:{padding:"12px"},children:[e.jsx(r,{href:"#",style:{textDecoration:"none",display:"block",fontWeight:700,color:"#111",fontSize:"14px",marginBottom:"4px"},children:n.name}),e.jsx("div",{style:{fontSize:"15px",fontWeight:700,color:"#3b82f6",marginBottom:"10px"},children:n.price}),e.jsx("button",{onClick:o=>{o.preventDefault(),alert(`${n.name} 장바구니 추가`)},style:{position:"relative",zIndex:2,width:"100%",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"6px",padding:"6px",cursor:"pointer",fontSize:"13px"},children:"장바구니"})]})]},n.name))})},l={name:"뉴스 카드",parameters:{docs:{description:{story:"뉴스 카드와 외부 링크 예시입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"480px",fontFamily:"system-ui"},children:[{category:"기술",title:"AI 시대의 프런트엔드 개발",desc:"AI 도구가 개발 방식을 어떻게 바꾸고 있는지 알아봅니다.",time:"2시간 전"},{category:"디자인",title:"2024 UI 트렌드 총정리",desc:"미니멀리즘부터 뉴모피즘까지, 올해의 디자인 트렌드를 분석합니다.",time:"4시간 전"},{category:"비즈니스",title:"스타트업 투자 트렌드",desc:"AI, 핀테크, 헬스케어 분야의 투자 동향을 살펴봅니다.",time:"6시간 전"}].map(n=>e.jsxs(t,{style:{display:"flex",gap:"12px",padding:"14px",border:"1px solid #e5e7eb",borderRadius:"10px",cursor:"pointer"},children:[e.jsx("div",{style:{width:"60px",height:"60px",borderRadius:"8px",background:"#f3f4f6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",flexShrink:0},children:n.category==="기술"?"💻":n.category==="디자인"?"🎨":"💼"}),e.jsxs("div",{style:{flex:1,minWidth:0},children:[e.jsx("div",{style:{fontSize:"11px",color:"#3b82f6",fontWeight:600,marginBottom:"3px"},children:n.category}),e.jsx(r,{href:"#",isExternal:!0,style:{textDecoration:"none",display:"block",fontSize:"14px",fontWeight:700,color:"#111",marginBottom:"4px",lineHeight:1.3},children:n.title}),e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"4px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.desc}),e.jsx("div",{style:{fontSize:"11px",color:"#d1d5db"},children:n.time})]})]},n.title))})},d={name:"프로필 카드",parameters:{docs:{description:{story:"사용자 프로필 카드 전체가 클릭 가능한 링크입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",fontFamily:"system-ui"},children:[{name:"김민준",role:"프런트엔드 개발자",avatar:"👨‍💻",color:"#3b82f6",followers:"1.2k"},{name:"이서연",role:"UX 디자이너",avatar:"👩‍🎨",color:"#ec4899",followers:"3.4k"},{name:"박지호",role:"풀스택 개발자",avatar:"👨‍🔬",color:"#10b981",followers:"876"}].map(n=>e.jsxs(t,{style:{border:"1px solid #e5e7eb",borderRadius:"12px",padding:"20px",width:"160px",textAlign:"center",cursor:"pointer"},children:[e.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"50%",background:`${n.color}22`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"28px",margin:"0 auto 10px"},children:n.avatar}),e.jsx(r,{href:"#",style:{textDecoration:"none",display:"block",fontWeight:700,color:"#111",fontSize:"15px",marginBottom:"4px"},children:n.name}),e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"10px"},children:n.role}),e.jsxs("div",{style:{fontSize:"12px",color:n.color,fontWeight:600},children:[n.followers," 팔로워"]}),e.jsx("button",{onClick:o=>{o.preventDefault(),alert(`${n.name} 팔로우`)},style:{position:"relative",zIndex:2,marginTop:"10px",width:"100%",background:n.color,color:"#fff",border:"none",borderRadius:"20px",padding:"5px",cursor:"pointer",fontSize:"12px"},children:"팔로우"})]},n.name))})};var c,x,f;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '기본 카드',
  render: () => <LinkBox style={{
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    padding: '20px',
    cursor: 'pointer',
    fontFamily: 'system-ui',
    maxWidth: '320px',
    transition: 'box-shadow 0.2s'
  }}>
      <div style={{
      fontSize: '13px',
      color: '#9ca3af',
      marginBottom: '6px'
    }}>블로그 포스트</div>
      <h3 style={{
      margin: '0 0 8px',
      fontSize: '18px',
      fontWeight: 700
    }}>
        <LinkOverlay href="#" style={{
        textDecoration: 'none',
        color: '#111'
      }}>
          React 19의 새로운 기능들
        </LinkOverlay>
      </h3>
      <p style={{
      margin: '0 0 16px',
      fontSize: '14px',
      color: '#6b7280',
      lineHeight: 1.5
    }}>
        Concurrent Features, Suspense 개선, 새로운 훅들에 대해 알아봅니다.
      </p>
      <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
        <span style={{
        fontSize: '12px',
        color: '#9ca3af'
      }}>2024.01.15</span>
        <button onClick={e => {
        e.preventDefault();
        alert('좋아요!');
      }} style={{
        position: 'relative',
        zIndex: 2,
        background: 'none',
        border: '1px solid #e5e7eb',
        borderRadius: '20px',
        padding: '4px 12px',
        cursor: 'pointer',
        fontSize: '13px',
        color: '#6b7280'
      }}>
          ♥ 좋아요
        </button>
      </div>
    </LinkBox>
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var m,y,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '상품 카드',
  parameters: {
    docs: {
      description: {
        story: '상품 카드 전체가 링크로 동작하면서 내부 버튼은 독립적입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    fontFamily: 'system-ui'
  }}>
      {[{
      name: '무선 헤드폰',
      price: '89,000원',
      emoji: '🎧',
      color: '#dbeafe'
    }, {
      name: '스마트워치',
      price: '299,000원',
      emoji: '⌚',
      color: '#dcfce7'
    }, {
      name: '블루투스 스피커',
      price: '149,000원',
      emoji: '🔊',
      color: '#fce7f3'
    }].map(product => <LinkBox key={product.name} style={{
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      overflow: 'hidden',
      width: '180px',
      cursor: 'pointer'
    }}>
          <div style={{
        height: '120px',
        background: product.color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '48px'
      }}>
            {product.emoji}
          </div>
          <div style={{
        padding: '12px'
      }}>
            <LinkOverlay href="#" style={{
          textDecoration: 'none',
          display: 'block',
          fontWeight: 700,
          color: '#111',
          fontSize: '14px',
          marginBottom: '4px'
        }}>
              {product.name}
            </LinkOverlay>
            <div style={{
          fontSize: '15px',
          fontWeight: 700,
          color: '#3b82f6',
          marginBottom: '10px'
        }}>{product.price}</div>
            <button onClick={e => {
          e.preventDefault();
          alert(\`\${product.name} 장바구니 추가\`);
        }} style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          background: '#3b82f6',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          padding: '6px',
          cursor: 'pointer',
          fontSize: '13px'
        }}>
              장바구니
            </button>
          </div>
        </LinkBox>)}
    </div>
}`,...(u=(y=s.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var h,g,b;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '뉴스 카드',
  parameters: {
    docs: {
      description: {
        story: '뉴스 카드와 외부 링크 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '480px',
    fontFamily: 'system-ui'
  }}>
      {[{
      category: '기술',
      title: 'AI 시대의 프런트엔드 개발',
      desc: 'AI 도구가 개발 방식을 어떻게 바꾸고 있는지 알아봅니다.',
      time: '2시간 전'
    }, {
      category: '디자인',
      title: '2024 UI 트렌드 총정리',
      desc: '미니멀리즘부터 뉴모피즘까지, 올해의 디자인 트렌드를 분석합니다.',
      time: '4시간 전'
    }, {
      category: '비즈니스',
      title: '스타트업 투자 트렌드',
      desc: 'AI, 핀테크, 헬스케어 분야의 투자 동향을 살펴봅니다.',
      time: '6시간 전'
    }].map(news => <LinkBox key={news.title} style={{
      display: 'flex',
      gap: '12px',
      padding: '14px',
      border: '1px solid #e5e7eb',
      borderRadius: '10px',
      cursor: 'pointer'
    }}>
          <div style={{
        width: '60px',
        height: '60px',
        borderRadius: '8px',
        background: '#f3f4f6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        flexShrink: 0
      }}>
            {news.category === '기술' ? '💻' : news.category === '디자인' ? '🎨' : '💼'}
          </div>
          <div style={{
        flex: 1,
        minWidth: 0
      }}>
            <div style={{
          fontSize: '11px',
          color: '#3b82f6',
          fontWeight: 600,
          marginBottom: '3px'
        }}>{news.category}</div>
            <LinkOverlay href="#" isExternal style={{
          textDecoration: 'none',
          display: 'block',
          fontSize: '14px',
          fontWeight: 700,
          color: '#111',
          marginBottom: '4px',
          lineHeight: 1.3
        }}>
              {news.title}
            </LinkOverlay>
            <div style={{
          fontSize: '12px',
          color: '#9ca3af',
          marginBottom: '4px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>{news.desc}</div>
            <div style={{
          fontSize: '11px',
          color: '#d1d5db'
        }}>{news.time}</div>
          </div>
        </LinkBox>)}
    </div>
}`,...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,k,j;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '프로필 카드',
  parameters: {
    docs: {
      description: {
        story: '사용자 프로필 카드 전체가 클릭 가능한 링크입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    fontFamily: 'system-ui'
  }}>
      {[{
      name: '김민준',
      role: '프런트엔드 개발자',
      avatar: '👨‍💻',
      color: '#3b82f6',
      followers: '1.2k'
    }, {
      name: '이서연',
      role: 'UX 디자이너',
      avatar: '👩‍🎨',
      color: '#ec4899',
      followers: '3.4k'
    }, {
      name: '박지호',
      role: '풀스택 개발자',
      avatar: '👨‍🔬',
      color: '#10b981',
      followers: '876'
    }].map(user => <LinkBox key={user.name} style={{
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      padding: '20px',
      width: '160px',
      textAlign: 'center',
      cursor: 'pointer'
    }}>
          <div style={{
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: \`\${user.color}22\`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '28px',
        margin: '0 auto 10px'
      }}>
            {user.avatar}
          </div>
          <LinkOverlay href="#" style={{
        textDecoration: 'none',
        display: 'block',
        fontWeight: 700,
        color: '#111',
        fontSize: '15px',
        marginBottom: '4px'
      }}>
            {user.name}
          </LinkOverlay>
          <div style={{
        fontSize: '12px',
        color: '#9ca3af',
        marginBottom: '10px'
      }}>{user.role}</div>
          <div style={{
        fontSize: '12px',
        color: user.color,
        fontWeight: 600
      }}>{user.followers} 팔로워</div>
          <button onClick={e => {
        e.preventDefault();
        alert(\`\${user.name} 팔로우\`);
      }} style={{
        position: 'relative',
        zIndex: 2,
        marginTop: '10px',
        width: '100%',
        background: user.color,
        color: '#fff',
        border: 'none',
        borderRadius: '20px',
        padding: '5px',
        cursor: 'pointer',
        fontSize: '12px'
      }}>
            팔로우
          </button>
        </LinkBox>)}
    </div>
}`,...(j=(k=d.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};const I=["Default","ProductCard","NewsCard","UserProfileCard"];export{a as Default,l as NewsCard,s as ProductCard,d as UserProfileCard,I as __namedExportsOrder,B as default};
