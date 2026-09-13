import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-BxXVWNx3.js";import{d as _}from"./reference-types-4ftiVeOu.js";import{c as v}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";function M({open:r=!1,onClose:t,title:n,children:d,height:s="50vh",showHandle:o=!0,closeOnBackdrop:c=!0}){const i=a.useRef(null),b=a.useRef(0),y=a.useRef(0);a.useEffect(()=>(r?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[r]);const V=p=>{b.current=p.touches[0].clientY},A=p=>{y.current=p.touches[0].clientY;const g=y.current-b.current;g>0&&i.current&&(i.current.style.transform=`translateY(${g}px)`)},O=()=>{y.current-b.current>100?t==null||t():i.current&&(i.current.style.transform="translateY(0)")},Y=typeof s=="number"?`${s}px`:s;return e.jsxs(e.Fragment,{children:[e.jsx("div",{"aria-hidden":"true",onClick:c?t:void 0,className:v("fixed inset-0 bg-krds-black/50 z-[1000]","transition-opacity duration-200",r?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none")}),e.jsxs("div",{ref:i,role:"dialog","aria-modal":"true","aria-label":n,onTouchStart:V,onTouchMove:A,onTouchEnd:O,className:v("fixed bottom-0 left-0 right-0 z-[1001]","bg-krds-white rounded-t-[20px]","shadow-[0_-8px_32px_rgba(0,0,0,0.15)]","flex flex-col overflow-hidden","transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",r?"translate-y-0":"translate-y-full"),style:{height:Y},children:[o&&e.jsx("div",{className:"flex justify-center pt-3 shrink-0",children:e.jsx("div",{className:"w-10 h-1 rounded-full bg-krds-gray-20"})}),n&&e.jsxs("div",{className:"flex items-center justify-between px-5 py-3 border-b border-krds-gray-10 shrink-0",children:[e.jsx("h2",{className:"m-0 text-krds-title-sm text-krds-gray-90 font-bold",children:n}),e.jsx("button",{onClick:t,"aria-label":"닫기",className:"bg-transparent border-0 cursor-pointer text-krds-gray-50 text-xl p-1 hover:text-krds-gray-70",children:"✕"})]}),e.jsx("div",{className:"flex-1 overflow-y-auto px-5 py-4",children:d})]})]})}M.__docgenInfo={description:"",methods:[],displayName:"BottomSheet",props:{open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:"'50vh'",computed:!1}},snapPoints:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},showHandle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnBackdrop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const E=_([{library:"Framework7",component:"Sheet Modal",url:"https://framework7.io/docs/sheet-modal",usedFor:["behavior","api","comparison"],relation:"compared"},{library:"Vuetify",component:"Bottom sheets",url:"https://vuetifyjs.com/en/components/bottom-sheets/",usedFor:["design","behavior","comparison"],relation:"compared"}]),G={title:"Molecules/Overlay/BottomSheet",component:M,tags:["autodocs","ref:vuetify","ref:framework7"],parameters:{references:E,docs:{description:{component:"\n## BottomSheet\n\n화면 하단에서 슬라이드업으로 등장하는 모달 패널 컴포넌트입니다.\n모바일 UX 패턴으로, 보조 액션 메뉴, 공유 옵션, 필터 패널 등을 화면 하단에 오버레이합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `open` | `boolean` | `false` | 열림 여부 |\n| `onClose` | `() => void` | - | 닫기 콜백 |\n| `title` | `string` | - | 헤더 제목 |\n| `height` | `string \\| number` | `'50vh'` | 시트 높이 |\n| `showHandle` | `boolean` | `true` | 상단 핸들 표시 |\n| `closeOnBackdrop` | `boolean` | `true` | 백드롭 클릭 닫기 |\n        "}}},argTypes:{open:{control:"boolean",table:{category:"State"}},title:{control:"text",table:{category:"Content"}},height:{control:"text",table:{category:"Appearance"}},showHandle:{control:"boolean",table:{category:"Appearance"}},closeOnBackdrop:{control:"boolean",table:{category:"Behavior"}}},args:{open:!1,title:"바텀 시트",height:"50vh",showHandle:!0,closeOnBackdrop:!0}};function l({title:r="기본 바텀 시트",height:t="50vh",label:n="바텀 시트 열기",children:d}){const[s,o]=a.useState(!1);return e.jsxs("div",{style:{height:"280px",position:"relative",overflow:"hidden",background:"#f8f9fa",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"system-ui"},children:[e.jsx("button",{onClick:()=>o(!0),style:{padding:"10px 24px",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:600},children:n}),s&&e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:()=>o(!1),style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.5)",zIndex:10}}),e.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:t,background:"#fff",borderRadius:"16px 16px 0 0",zIndex:11,display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"10px 0"},children:e.jsx("div",{style:{width:"36px",height:"4px",borderRadius:"2px",background:"#d1d5db"}})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 16px 12px",borderBottom:"1px solid #f0f0f0"},children:[e.jsx("h3",{style:{margin:0,fontSize:"15px",fontWeight:700},children:r}),e.jsx("button",{onClick:()=>o(!1),style:{background:"none",border:"none",cursor:"pointer",color:"#9ca3af",fontSize:"18px"},children:"✕"})]}),e.jsx("div",{style:{flex:1,overflowY:"auto",padding:"12px 16px"},children:d})]})]})]})}const f={name:"기본",parameters:{docs:{description:{story:"기본 BottomSheet입니다."}}},render:()=>e.jsx(l,{title:"기본 바텀 시트",children:e.jsx("p",{style:{color:"#374151",fontSize:"14px",lineHeight:1.6},children:"바텀 시트 내용입니다. 드래그로 닫거나 ✕ 버튼, 백드롭을 클릭해서 닫을 수 있습니다."})})},u={name:"공유 시트",parameters:{docs:{description:{story:"소셜 공유 옵션을 담은 바텀 시트입니다."}}},render:()=>e.jsx(l,{title:"공유하기",label:"공유",height:"45%",children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"16px",padding:"8px 0"},children:[{icon:"📋",label:"링크 복사"},{icon:"💬",label:"카카오톡"},{icon:"📸",label:"인스타그램"},{icon:"🐦",label:"X (트위터)"},{icon:"📘",label:"페이스북"},{icon:"✉️",label:"이메일"},{icon:"📩",label:"SMS"},{icon:"📲",label:"더보기"}].map(({icon:r,label:t})=>e.jsxs("div",{style:{textAlign:"center",cursor:"pointer"},children:[e.jsx("div",{style:{width:"52px",height:"52px",borderRadius:"50%",background:"#f3f4f6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px",margin:"0 auto 6px"},children:r}),e.jsx("div",{style:{fontSize:"11px",color:"#6b7280"},children:t})]},t))})})},m={name:"필터 시트",parameters:{docs:{description:{story:"검색 필터를 담은 바텀 시트입니다."}}},render:()=>{const r=()=>{const[t,n]=a.useState([]),d=["전자기기","의류","음식","도서","가구","스포츠"],s=o=>n(c=>c.includes(o)?c.filter(i=>i!==o):[...c,o]);return e.jsxs("div",{style:{fontFamily:"system-ui"},children:[e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsx("div",{style:{fontSize:"13px",fontWeight:600,color:"#374151",marginBottom:"8px"},children:"카테고리"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:d.map(o=>e.jsx("button",{onClick:()=>s(o),style:{padding:"5px 12px",borderRadius:"999px",border:`1px solid ${t.includes(o)?"#3b82f6":"#e5e7eb"}`,background:t.includes(o)?"#eff6ff":"#fff",color:t.includes(o)?"#1d4ed8":"#374151",cursor:"pointer",fontSize:"12px"},children:o},o))})]}),e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsx("div",{style:{fontSize:"13px",fontWeight:600,color:"#374151",marginBottom:"8px"},children:"가격 범위"}),e.jsx("input",{type:"range",min:0,max:1e5,step:1e3,defaultValue:5e4,style:{width:"100%"}}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"12px",color:"#6b7280",marginTop:"4px"},children:[e.jsx("span",{children:"₩0"}),e.jsx("span",{children:"₩100,000"})]})]}),e.jsx("button",{style:{width:"100%",padding:"12px",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"10px",cursor:"pointer",fontWeight:600},children:"필터 적용"})]})};return e.jsx(l,{title:"필터",label:"필터 열기",height:"60%",children:e.jsx(r,{})})}},x={name:"액션 메뉴",parameters:{docs:{description:{story:"컨텍스트 액션 메뉴를 담은 바텀 시트입니다."}}},render:()=>e.jsx(l,{title:"더보기",label:"액션 메뉴",height:"42%",children:e.jsx("div",{style:{fontFamily:"system-ui"},children:[{icon:"✏️",label:"수정하기",color:"#374151"},{icon:"📋",label:"복사하기",color:"#374151"},{icon:"📤",label:"공유하기",color:"#374151"},{icon:"⭐",label:"즐겨찾기 추가",color:"#374151"},{icon:"🗑️",label:"삭제하기",color:"#ef4444"}].map(({icon:r,label:t,color:n})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",padding:"12px 0",borderBottom:"1px solid #f9fafb",cursor:"pointer"},children:[e.jsx("span",{style:{fontSize:"18px"},children:r}),e.jsx("span",{style:{fontSize:"14px",color:n,fontWeight:500},children:t})]},t))})})},h={name:"높이 변형",parameters:{docs:{description:{story:"다양한 높이의 BottomSheet입니다."}}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(l,{title:"25%",height:"25%",label:"작게 (25%)",children:e.jsx("p",{style:{fontSize:"13px",color:"#6b7280"},children:"낮은 바텀 시트입니다."})}),e.jsx(l,{title:"50%",height:"50%",label:"중간 (50%)",children:e.jsx("p",{style:{fontSize:"13px",color:"#6b7280"},children:"중간 바텀 시트입니다."})}),e.jsx(l,{title:"80%",height:"80%",label:"높게 (80%)",children:e.jsx("p",{style:{fontSize:"13px",color:"#6b7280"},children:"높은 바텀 시트입니다."})})]})};var j,S,k;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '기본',
  parameters: {
    docs: {
      description: {
        story: '기본 BottomSheet입니다.'
      }
    }
  },
  render: () => <Demo title="기본 바텀 시트">
      <p style={{
      color: '#374151',
      fontSize: '14px',
      lineHeight: 1.6
    }}>바텀 시트 내용입니다. 드래그로 닫거나 ✕ 버튼, 백드롭을 클릭해서 닫을 수 있습니다.</p>
    </Demo>
}`,...(k=(S=f.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var w,z,B;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '공유 시트',
  parameters: {
    docs: {
      description: {
        story: '소셜 공유 옵션을 담은 바텀 시트입니다.'
      }
    }
  },
  render: () => <Demo title="공유하기" label="공유" height="45%">
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '16px',
      padding: '8px 0'
    }}>
        {[{
        icon: '📋',
        label: '링크 복사'
      }, {
        icon: '💬',
        label: '카카오톡'
      }, {
        icon: '📸',
        label: '인스타그램'
      }, {
        icon: '🐦',
        label: 'X (트위터)'
      }, {
        icon: '📘',
        label: '페이스북'
      }, {
        icon: '✉️',
        label: '이메일'
      }, {
        icon: '📩',
        label: 'SMS'
      }, {
        icon: '📲',
        label: '더보기'
      }].map(({
        icon,
        label
      }) => <div key={label} style={{
        textAlign: 'center',
        cursor: 'pointer'
      }}>
            <div style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: '#f3f4f6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '22px',
          margin: '0 auto 6px'
        }}>{icon}</div>
            <div style={{
          fontSize: '11px',
          color: '#6b7280'
        }}>{label}</div>
          </div>)}
      </div>
    </Demo>
}`,...(B=(z=u.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var T,R,D;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '필터 시트',
  parameters: {
    docs: {
      description: {
        story: '검색 필터를 담은 바텀 시트입니다.'
      }
    }
  },
  render: () => {
    const FilterContent = () => {
      const [selected, setSelected] = useState<string[]>([]);
      const categories = ['전자기기', '의류', '음식', '도서', '가구', '스포츠'];
      const toggle = (c: string) => setSelected(p => p.includes(c) ? p.filter(x => x !== c) : [...p, c]);
      return <div style={{
        fontFamily: 'system-ui'
      }}>
          <div style={{
          marginBottom: '16px'
        }}>
            <div style={{
            fontSize: '13px',
            fontWeight: 600,
            color: '#374151',
            marginBottom: '8px'
          }}>카테고리</div>
            <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px'
          }}>
              {categories.map(c => <button key={c} onClick={() => toggle(c)} style={{
              padding: '5px 12px',
              borderRadius: '999px',
              border: \`1px solid \${selected.includes(c) ? '#3b82f6' : '#e5e7eb'}\`,
              background: selected.includes(c) ? '#eff6ff' : '#fff',
              color: selected.includes(c) ? '#1d4ed8' : '#374151',
              cursor: 'pointer',
              fontSize: '12px'
            }}>
                  {c}
                </button>)}
            </div>
          </div>
          <div style={{
          marginBottom: '16px'
        }}>
            <div style={{
            fontSize: '13px',
            fontWeight: 600,
            color: '#374151',
            marginBottom: '8px'
          }}>가격 범위</div>
            <input type="range" min={0} max={100000} step={1000} defaultValue={50000} style={{
            width: '100%'
          }} />
            <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '12px',
            color: '#6b7280',
            marginTop: '4px'
          }}>
              <span>₩0</span><span>₩100,000</span>
            </div>
          </div>
          <button style={{
          width: '100%',
          padding: '12px',
          background: '#3b82f6',
          color: '#fff',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          fontWeight: 600
        }}>
            필터 적용
          </button>
        </div>;
    };
    return <Demo title="필터" label="필터 열기" height="60%"><FilterContent /></Demo>;
  }
}`,...(D=(R=m.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var C,F,W;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '액션 메뉴',
  parameters: {
    docs: {
      description: {
        story: '컨텍스트 액션 메뉴를 담은 바텀 시트입니다.'
      }
    }
  },
  render: () => <Demo title="더보기" label="액션 메뉴" height="42%">
      <div style={{
      fontFamily: 'system-ui'
    }}>
        {[{
        icon: '✏️',
        label: '수정하기',
        color: '#374151'
      }, {
        icon: '📋',
        label: '복사하기',
        color: '#374151'
      }, {
        icon: '📤',
        label: '공유하기',
        color: '#374151'
      }, {
        icon: '⭐',
        label: '즐겨찾기 추가',
        color: '#374151'
      }, {
        icon: '🗑️',
        label: '삭제하기',
        color: '#ef4444'
      }].map(({
        icon,
        label,
        color
      }) => <div key={label} style={{
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        padding: '12px 0',
        borderBottom: '1px solid #f9fafb',
        cursor: 'pointer'
      }}>
            <span style={{
          fontSize: '18px'
        }}>{icon}</span>
            <span style={{
          fontSize: '14px',
          color,
          fontWeight: 500
        }}>{label}</span>
          </div>)}
      </div>
    </Demo>
}`,...(W=(F=x.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var N,I,q;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '높이 변형',
  parameters: {
    docs: {
      description: {
        story: '다양한 높이의 BottomSheet입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>
      <Demo title="25%" height="25%" label="작게 (25%)">
        <p style={{
        fontSize: '13px',
        color: '#6b7280'
      }}>낮은 바텀 시트입니다.</p>
      </Demo>
      <Demo title="50%" height="50%" label="중간 (50%)">
        <p style={{
        fontSize: '13px',
        color: '#6b7280'
      }}>중간 바텀 시트입니다.</p>
      </Demo>
      <Demo title="80%" height="80%" label="높게 (80%)">
        <p style={{
        fontSize: '13px',
        color: '#6b7280'
      }}>높은 바텀 시트입니다.</p>
      </Demo>
    </div>
}`,...(q=(I=h.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const J=["Default","ShareSheet","FilterSheet","ActionMenu","TallSheet"];export{x as ActionMenu,f as Default,m as FilterSheet,u as ShareSheet,h as TallSheet,J as __namedExportsOrder,G as default};
