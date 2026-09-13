import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as C}from"./reference-types-4ftiVeOu.js";const E={"top-start":{top:0,left:0,transform:"translate(-50%, -50%)"},"top-center":{top:0,left:"50%",transform:"translate(-50%, -50%)"},"top-end":{top:0,right:0,transform:"translate(50%, -50%)"},"middle-start":{top:"50%",left:0,transform:"translate(-50%, -50%)"},"middle-end":{top:"50%",right:0,transform:"translate(50%, -50%)"},"bottom-start":{bottom:0,left:0,transform:"translate(-50%, 50%)"},"bottom-center":{bottom:0,left:"50%",transform:"translate(-50%, 50%)"},"bottom-end":{bottom:0,right:0,transform:"translate(50%, 50%)"}};function o({children:t,indicator:n,placement:a="top-end",offsetX:r=0,offsetY:w=0,inline:T=!1,style:N}){const F=E[a];return e.jsxs("span",{style:{position:"relative",display:T?"inline-block":"block",...N},children:[t,e.jsx("span",{style:{position:"absolute",zIndex:1,...F,marginLeft:r,marginTop:w},children:n})]})}o.__docgenInfo={description:"",methods:[],displayName:"Indicator",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},indicator:{required:!0,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:`| 'top-start' | 'top-center' | 'top-end'
| 'middle-start' | 'middle-end'
| 'bottom-start' | 'bottom-center' | 'bottom-end'`,elements:[{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-center'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'middle-start'"},{name:"literal",value:"'middle-end'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-center'"},{name:"literal",value:"'bottom-end'"}]},description:"",defaultValue:{value:"'top-end'",computed:!1}},offsetX:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},offsetY:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},inline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const A=C([{library:"daisyUI",component:"Indicator",url:"https://daisyui.com/components/indicator/",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"Indicators",url:"https://flowbite.com/docs/components/indicators/",usedFor:["comparison"],relation:"compared"}]),P={title:"Layout/Primitives/Indicator",component:o,tags:["autodocs","ref:daisy-ui","ref:flowbite"],parameters:{references:A,docs:{description:{component:"\n## Indicator\n\n부모 요소의 모서리에 뱃지나 상태 점을 오버레이로 붙이는 레이아웃 컴포넌트입니다.\n알림 수(N), 온라인 상태 점, NEW 뱃지 등을 아이콘·아바타·카드 위에 포지셔닝할 때 사용합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `children` | `ReactNode` | - | 기준 요소 |\n| `indicator` | `ReactNode` | - | 오버레이할 배지/점 |\n| `placement` | `IndicatorPlacement` | `'top-end'` | 위치 |\n| `offsetX` | `number` | `0` | 수평 오프셋 |\n| `offsetY` | `number` | `0` | 수직 오프셋 |\n| `inline` | `boolean` | `false` | 인라인 표시 |\n        "}}},argTypes:{placement:{control:"select",options:["top-start","top-center","top-end","middle-start","middle-end","bottom-start","bottom-center","bottom-end"],table:{category:"Layout"}},inline:{control:"boolean",table:{category:"Layout"}}},args:{placement:"top-end",inline:!0}};function k({count:t,color:n="#ef4444"}){return e.jsx("span",{style:{background:n,color:"#fff",fontSize:"10px",fontWeight:700,minWidth:"18px",height:"18px",borderRadius:"9px",padding:"0 4px",display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid #fff",lineHeight:1},children:t})}function R({color:t="#10b981"}){return e.jsx("span",{style:{width:"10px",height:"10px",borderRadius:"50%",background:t,border:"2px solid #fff",display:"block"}})}const i={name:"기본 (알림 배지)",render:t=>e.jsx("div",{style:{padding:"40px",fontFamily:"system-ui"},children:e.jsx(o,{...t,indicator:e.jsx(k,{count:5}),inline:!0,children:e.jsx("div",{style:{width:"52px",height:"52px",background:"#f3f4f6",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px"},children:"🔔"})})})},s={name:"위치 그리드",parameters:{docs:{description:{story:"8가지 위치에 Indicator를 배치합니다."}}},render:()=>{const t=["top-start","top-center","top-end","middle-start","middle-end","bottom-start","bottom-center","bottom-end"];return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"32px",padding:"32px",maxWidth:"520px",fontFamily:"system-ui"},children:t.map(n=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(o,{placement:n,indicator:e.jsx(R,{color:"#3b82f6"}),inline:!0,children:e.jsx("div",{style:{width:"56px",height:"56px",background:"#f3f4f6",borderRadius:"10px",margin:"0 auto"}})}),e.jsx("div",{style:{fontSize:"10px",color:"#9ca3af",marginTop:"6px"},children:n})]},n))})}},d={name:"아바타 상태",parameters:{docs:{description:{story:"아바타에 온라인/오프라인 상태를 표시합니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"24px",padding:"32px",fontFamily:"system-ui",flexWrap:"wrap"},children:[{name:"김민수",color:"#10b981",label:"온라인",bg:"#3b82f6"},{name:"이지은",color:"#f59e0b",label:"자리비움",bg:"#8b5cf6"},{name:"박철수",color:"#ef4444",label:"방해금지",bg:"#10b981"},{name:"최영희",color:"#9ca3af",label:"오프라인",bg:"#f59e0b"}].map(({name:t,color:n,label:a,bg:r})=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(o,{placement:"bottom-end",indicator:e.jsx(R,{color:n}),inline:!0,children:e.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"50%",background:r,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",fontWeight:700},children:t[0]})}),e.jsx("div",{style:{fontSize:"11px",color:"#374151",marginTop:"8px",fontWeight:600},children:t}),e.jsxs("div",{style:{fontSize:"10px",color:n},children:["⬤ ",a]})]},t))})},l={name:"장바구니 배지",parameters:{docs:{description:{story:"아이콘 위에 개수 배지를 표시하는 예시입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"24px",padding:"32px",fontFamily:"system-ui"},children:[{icon:"🛒",count:3,color:"#3b82f6",label:"장바구니"},{icon:"❤️",count:12,color:"#ef4444",label:"위시리스트"},{icon:"💬",count:99,color:"#10b981",label:"메시지"},{icon:"🔔",count:0,color:"#f59e0b",label:"알림 없음"}].map(({icon:t,count:n,color:a,label:r})=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(o,{indicator:n>0?e.jsx(k,{count:n>99?"99+":n,color:a}):e.jsx("span",{}),inline:!0,children:e.jsx("div",{style:{width:"52px",height:"52px",background:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",cursor:"pointer"},children:t})}),e.jsx("div",{style:{fontSize:"11px",color:"#9ca3af",marginTop:"8px"},children:r})]},r))})},p={name:"NEW 뱃지",parameters:{docs:{description:{story:"새 콘텐츠를 강조하는 NEW 뱃지 예시입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"12px",padding:"32px",fontFamily:"system-ui",flexWrap:"wrap"},children:[{label:"새 기능",img:"⚡"},{label:"업데이트",img:"🔄"},{label:"이벤트",img:"🎉"}].map(({label:t,img:n})=>e.jsx(o,{placement:"top-end",offsetX:-4,offsetY:4,indicator:e.jsx("span",{style:{background:"#ef4444",color:"#fff",fontSize:"10px",fontWeight:800,padding:"2px 5px",borderRadius:"4px",border:"1px solid #fff"},children:"NEW"}),inline:!0,children:e.jsxs("div",{style:{padding:"12px 16px",background:"#fff",border:"1px solid #e5e7eb",borderRadius:"10px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer"},children:[e.jsx("span",{style:{fontSize:"20px"},children:n}),e.jsx("span",{style:{fontSize:"14px",fontWeight:600,color:"#111"},children:t})]})},t))})};var c,m,f;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '기본 (알림 배지)',
  render: args => <div style={{
    padding: '40px',
    fontFamily: 'system-ui'
  }}>
      <Indicator {...args} indicator={<Badge count={5} />} inline>
        <div style={{
        width: '52px',
        height: '52px',
        background: '#f3f4f6',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px'
      }}>🔔</div>
      </Indicator>
    </div>
}`,...(f=(m=i.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var x,u,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '위치 그리드',
  parameters: {
    docs: {
      description: {
        story: '8가지 위치에 Indicator를 배치합니다.'
      }
    }
  },
  render: () => {
    const placements = ['top-start', 'top-center', 'top-end', 'middle-start', 'middle-end', 'bottom-start', 'bottom-center', 'bottom-end'] as const;
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '32px',
      padding: '32px',
      maxWidth: '520px',
      fontFamily: 'system-ui'
    }}>
        {placements.map(p => <div key={p} style={{
        textAlign: 'center'
      }}>
            <Indicator placement={p} indicator={<Dot color="#3b82f6" />} inline>
              <div style={{
            width: '56px',
            height: '56px',
            background: '#f3f4f6',
            borderRadius: '10px',
            margin: '0 auto'
          }} />
            </Indicator>
            <div style={{
          fontSize: '10px',
          color: '#9ca3af',
          marginTop: '6px'
        }}>{p}</div>
          </div>)}
      </div>;
  }
}`,...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var g,y,h;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '아바타 상태',
  parameters: {
    docs: {
      description: {
        story: '아바타에 온라인/오프라인 상태를 표시합니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    padding: '32px',
    fontFamily: 'system-ui',
    flexWrap: 'wrap'
  }}>
      {[{
      name: '김민수',
      color: '#10b981',
      label: '온라인',
      bg: '#3b82f6'
    }, {
      name: '이지은',
      color: '#f59e0b',
      label: '자리비움',
      bg: '#8b5cf6'
    }, {
      name: '박철수',
      color: '#ef4444',
      label: '방해금지',
      bg: '#10b981'
    }, {
      name: '최영희',
      color: '#9ca3af',
      label: '오프라인',
      bg: '#f59e0b'
    }].map(({
      name,
      color,
      label,
      bg
    }) => <div key={name} style={{
      textAlign: 'center'
    }}>
          <Indicator placement="bottom-end" indicator={<Dot color={color} />} inline>
            <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: bg,
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          fontWeight: 700
        }}>
              {name[0]}
            </div>
          </Indicator>
          <div style={{
        fontSize: '11px',
        color: '#374151',
        marginTop: '8px',
        fontWeight: 600
      }}>{name}</div>
          <div style={{
        fontSize: '10px',
        color
      }}>⬤ {label}</div>
        </div>)}
    </div>
}`,...(h=(y=d.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,j,I;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '장바구니 배지',
  parameters: {
    docs: {
      description: {
        story: '아이콘 위에 개수 배지를 표시하는 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    padding: '32px',
    fontFamily: 'system-ui'
  }}>
      {[{
      icon: '🛒',
      count: 3,
      color: '#3b82f6',
      label: '장바구니'
    }, {
      icon: '❤️',
      count: 12,
      color: '#ef4444',
      label: '위시리스트'
    }, {
      icon: '💬',
      count: 99,
      color: '#10b981',
      label: '메시지'
    }, {
      icon: '🔔',
      count: 0,
      color: '#f59e0b',
      label: '알림 없음'
    }].map(({
      icon,
      count,
      color,
      label
    }) => <div key={label} style={{
      textAlign: 'center'
    }}>
          <Indicator indicator={count > 0 ? <Badge count={count > 99 ? '99+' : count} color={color} /> : <span />} inline>
            <div style={{
          width: '52px',
          height: '52px',
          background: '#f9fafb',
          border: '1px solid #e5e7eb',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          cursor: 'pointer'
        }}>
              {icon}
            </div>
          </Indicator>
          <div style={{
        fontSize: '11px',
        color: '#9ca3af',
        marginTop: '8px'
      }}>{label}</div>
        </div>)}
    </div>
}`,...(I=(j=l.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var S,W,z;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'NEW 뱃지',
  parameters: {
    docs: {
      description: {
        story: '새 콘텐츠를 강조하는 NEW 뱃지 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    padding: '32px',
    fontFamily: 'system-ui',
    flexWrap: 'wrap'
  }}>
      {[{
      label: '새 기능',
      img: '⚡'
    }, {
      label: '업데이트',
      img: '🔄'
    }, {
      label: '이벤트',
      img: '🎉'
    }].map(({
      label,
      img
    }) => <Indicator key={label} placement="top-end" offsetX={-4} offsetY={4} indicator={<span style={{
      background: '#ef4444',
      color: '#fff',
      fontSize: '10px',
      fontWeight: 800,
      padding: '2px 5px',
      borderRadius: '4px',
      border: '1px solid #fff'
    }}>NEW</span>} inline>
          <div style={{
        padding: '12px 16px',
        background: '#fff',
        border: '1px solid #e5e7eb',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer'
      }}>
            <span style={{
          fontSize: '20px'
        }}>{img}</span>
            <span style={{
          fontSize: '14px',
          fontWeight: 600,
          color: '#111'
        }}>{label}</span>
          </div>
        </Indicator>)}
    </div>
}`,...(z=(W=p.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};const D=["Default","PlacementGrid","AvatarStatus","CartBadge","NewBadge"];export{d as AvatarStatus,l as CartBadge,i as Default,p as NewBadge,s as PlacementGrid,D as __namedExportsOrder,P as default};
