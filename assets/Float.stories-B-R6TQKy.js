import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as B}from"./reference-types-4ftiVeOu.js";const A={"top-start":{top:0,left:0,transform:"translate(-50%, -50%)"},"top-center":{top:0,left:"50%",transform:"translate(-50%, -50%)"},"top-end":{top:0,right:0,transform:"translate(50%, -50%)"},"middle-start":{top:"50%",left:0,transform:"translate(-50%, -50%)"},"middle-center":{top:"50%",left:"50%",transform:"translate(-50%, -50%)"},"middle-end":{top:"50%",right:0,transform:"translate(50%, -50%)"},"bottom-start":{bottom:0,left:0,transform:"translate(-50%, 50%)"},"bottom-center":{bottom:0,left:"50%",transform:"translate(-50%, 50%)"},"bottom-end":{bottom:0,right:0,transform:"translate(50%, 50%)"}};function r({children:t,placement:o="top-end",offsetX:n=0,offsetY:a=0,style:c}){const R=A[o];return e.jsx("span",{style:{position:"absolute",zIndex:1,...R,marginLeft:n,marginTop:a,...c},children:t})}r.__docgenInfo={description:"",methods:[],displayName:"Float",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:`| 'top-start' | 'top-center' | 'top-end'
| 'middle-start' | 'middle-center' | 'middle-end'
| 'bottom-start' | 'bottom-center' | 'bottom-end'`,elements:[{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-center'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'middle-start'"},{name:"literal",value:"'middle-center'"},{name:"literal",value:"'middle-end'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-center'"},{name:"literal",value:"'bottom-end'"}]},description:"",defaultValue:{value:"'top-end'",computed:!1}},offsetX:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"0",computed:!1}},offsetY:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"0",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const T=B([{library:"Bootstrap",component:"Float",url:"https://getbootstrap.com/docs/5.3/utilities/float/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Float",url:"https://www.chakra-ui.com/docs/components/float",usedFor:["comparison"],relation:"compared"}]),q={title:"Layout/Primitives/Float",component:r,tags:["autodocs","ref:chakra-ui","ref:bootstrap"],parameters:{references:T,docs:{description:{component:"\n## Float\n\n부모 요소의 모서리나 측면에 자식 요소를 오버레이 형태로 고정하는 컴포넌트입니다.\n뱃지, 알림 수, 상태 점 등을 아바타나 카드 위에 겹쳐 표시할 때 사용합니다.\n\n부모 요소에 `position: relative`가 필요합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `placement` | `FloatPlacement` | `'top-end'` | 고정 위치 |\n| `offsetX` | `number\\|string` | `0` | 수평 오프셋 |\n| `offsetY` | `number\\|string` | `0` | 수직 오프셋 |\n\n#### FloatPlacement 값\n`top-start` `top-center` `top-end` `middle-start` `middle-center` `middle-end` `bottom-start` `bottom-center` `bottom-end`\n        "}}},argTypes:{placement:{control:"select",options:["top-start","top-center","top-end","middle-start","middle-center","middle-end","bottom-start","bottom-center","bottom-end"],table:{category:"Layout"}}},args:{placement:"top-end"}};function m({count:t,color:o="#ef4444"}){return e.jsx("span",{style:{minWidth:"20px",height:"20px",borderRadius:"10px",background:o,color:"#fff",fontSize:"11px",fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 4px",border:"2px solid #fff",lineHeight:1},children:t??""})}function I({color:t="#10b981",size:o=12}){return e.jsx("span",{style:{width:o,height:o,borderRadius:"50%",background:t,border:"2px solid #fff",display:"block"}})}function z({name:t,size:o=56}){const n=["#3b82f6","#8b5cf6","#10b981","#f59e0b","#ef4444"],a=n[t.charCodeAt(0)%n.length];return e.jsx("div",{style:{width:o,height:o,borderRadius:"50%",background:a,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:o*.4,fontWeight:700,fontFamily:"system-ui"},children:t[0]})}const i={name:"기본 (배지)",render:t=>e.jsx("div",{style:{padding:"40px",fontFamily:"system-ui",display:"inline-block"},children:e.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[e.jsx(z,{name:"홍"}),e.jsx(r,{...t,children:e.jsx(m,{count:3})})]})})},s={name:"위치 그리드",parameters:{docs:{description:{story:"9가지 배치 위치를 한눈에 볼 수 있는 예시입니다."}}},render:()=>{const t=["top-start","top-center","top-end","middle-start","middle-center","middle-end","bottom-start","bottom-center","bottom-end"];return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"32px",padding:"32px",maxWidth:"480px",fontFamily:"system-ui"},children:t.map(o=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{position:"relative",width:"64px",height:"64px",background:"#f3f4f6",borderRadius:"12px",margin:"0 auto 8px"},children:e.jsx(r,{placement:o,children:e.jsx(m,{count:9})})}),e.jsx("div",{style:{fontSize:"10px",color:"#9ca3af"},children:o})]},o))})}},l={name:"아바타 상태 표시",parameters:{docs:{description:{story:"아바타에 온라인/오프라인 상태를 표시하는 예시입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"24px",padding:"32px",fontFamily:"system-ui",flexWrap:"wrap"},children:[{name:"김민수",status:"#10b981",label:"온라인"},{name:"이지은",status:"#f59e0b",label:"자리비움"},{name:"박철수",status:"#6b7280",label:"오프라인"},{name:"최영희",status:"#ef4444",label:"방해금지"}].map(({name:t,status:o,label:n})=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsxs("div",{style:{position:"relative",display:"inline-block",marginBottom:"6px"},children:[e.jsx(z,{name:t}),e.jsx(r,{placement:"bottom-end",children:e.jsx(I,{color:o})})]}),e.jsx("div",{style:{fontSize:"12px",color:"#374151",fontWeight:600},children:t}),e.jsx("div",{style:{fontSize:"11px",color:"#9ca3af"},children:n})]},t))})},d={name:"알림 배지",parameters:{docs:{description:{story:"알림 아이콘에 배지를 오버레이하는 예시입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"32px",padding:"32px",fontFamily:"system-ui"},children:[{icon:"🔔",count:5,color:"#ef4444",label:"알림"},{icon:"💬",count:12,color:"#3b82f6",label:"메시지"},{icon:"📧",count:99,color:"#10b981",label:"이메일"},{icon:"🛒",count:2,color:"#f59e0b",label:"장바구니"}].map(({icon:t,count:o,color:n,label:a})=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsxs("div",{style:{position:"relative",display:"inline-block",marginBottom:"6px"},children:[e.jsx("div",{style:{width:"48px",height:"48px",background:"#f3f4f6",borderRadius:"12px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px"},children:t}),e.jsx(r,{placement:"top-end",children:e.jsx(m,{count:o>99?99:o,color:n})})]}),e.jsx("div",{style:{fontSize:"11px",color:"#9ca3af"},children:a})]},a))})},p={name:"카드 위 배지",parameters:{docs:{description:{story:"제품 카드에 할인율 배지를 오버레이하는 예시입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"16px",padding:"24px",fontFamily:"system-ui",flexWrap:"wrap"},children:[{name:"무선 이어폰",price:"₩89,000",discount:"30%",img:"🎧"},{name:"스마트워치",price:"₩199,000",discount:"NEW",img:"⌚",badgeColor:"#10b981"},{name:"블루투스 스피커",price:"₩59,000",discount:"50%",img:"🔊",badgeColor:"#ef4444"}].map(({name:t,price:o,discount:n,img:a,badgeColor:c})=>e.jsxs("div",{style:{position:"relative",background:"#fff",border:"1px solid #e5e7eb",borderRadius:"12px",overflow:"visible",width:"160px"},children:[e.jsx(r,{placement:"top-start",offsetX:8,offsetY:8,children:e.jsx("span",{style:{background:c??"#3b82f6",color:"#fff",fontSize:"11px",fontWeight:700,padding:"2px 8px",borderRadius:"6px"},children:n})}),e.jsx("div",{style:{height:"100px",background:"#f9fafb",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"40px",borderRadius:"12px 12px 0 0"},children:a}),e.jsxs("div",{style:{padding:"10px"},children:[e.jsx("div",{style:{fontSize:"13px",fontWeight:600,color:"#111",marginBottom:"4px"},children:t}),e.jsx("div",{style:{fontSize:"14px",fontWeight:700,color:"#3b82f6"},children:o})]})]},t))})};var f,u,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '기본 (배지)',
  render: args => <div style={{
    padding: '40px',
    fontFamily: 'system-ui',
    display: 'inline-block'
  }}>
      <div style={{
      position: 'relative',
      display: 'inline-block'
    }}>
        <Avatar name="홍" />
        <Float {...args}>
          <Badge count={3} />
        </Float>
      </div>
    </div>
}`,...(x=(u=i.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var b,y,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '위치 그리드',
  parameters: {
    docs: {
      description: {
        story: '9가지 배치 위치를 한눈에 볼 수 있는 예시입니다.'
      }
    }
  },
  render: () => {
    const placements = ['top-start', 'top-center', 'top-end', 'middle-start', 'middle-center', 'middle-end', 'bottom-start', 'bottom-center', 'bottom-end'] as const;
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '32px',
      padding: '32px',
      maxWidth: '480px',
      fontFamily: 'system-ui'
    }}>
        {placements.map(p => <div key={p} style={{
        textAlign: 'center'
      }}>
            <div style={{
          position: 'relative',
          width: '64px',
          height: '64px',
          background: '#f3f4f6',
          borderRadius: '12px',
          margin: '0 auto 8px'
        }}>
              <Float placement={p}>
                <Badge count={9} />
              </Float>
            </div>
            <div style={{
          fontSize: '10px',
          color: '#9ca3af'
        }}>{p}</div>
          </div>)}
      </div>;
  }
}`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var v,h,j;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '아바타 상태 표시',
  parameters: {
    docs: {
      description: {
        story: '아바타에 온라인/오프라인 상태를 표시하는 예시입니다.'
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
      status: '#10b981',
      label: '온라인'
    }, {
      name: '이지은',
      status: '#f59e0b',
      label: '자리비움'
    }, {
      name: '박철수',
      status: '#6b7280',
      label: '오프라인'
    }, {
      name: '최영희',
      status: '#ef4444',
      label: '방해금지'
    }].map(({
      name,
      status,
      label
    }) => <div key={name} style={{
      textAlign: 'center'
    }}>
          <div style={{
        position: 'relative',
        display: 'inline-block',
        marginBottom: '6px'
      }}>
            <Avatar name={name} />
            <Float placement="bottom-end">
              <StatusDot color={status} />
            </Float>
          </div>
          <div style={{
        fontSize: '12px',
        color: '#374151',
        fontWeight: 600
      }}>{name}</div>
          <div style={{
        fontSize: '11px',
        color: '#9ca3af'
      }}>{label}</div>
        </div>)}
    </div>
}`,...(j=(h=l.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var S,F,k;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '알림 배지',
  parameters: {
    docs: {
      description: {
        story: '알림 아이콘에 배지를 오버레이하는 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '32px',
    padding: '32px',
    fontFamily: 'system-ui'
  }}>
      {[{
      icon: '🔔',
      count: 5,
      color: '#ef4444',
      label: '알림'
    }, {
      icon: '💬',
      count: 12,
      color: '#3b82f6',
      label: '메시지'
    }, {
      icon: '📧',
      count: 99,
      color: '#10b981',
      label: '이메일'
    }, {
      icon: '🛒',
      count: 2,
      color: '#f59e0b',
      label: '장바구니'
    }].map(({
      icon,
      count,
      color,
      label
    }) => <div key={label} style={{
      textAlign: 'center'
    }}>
          <div style={{
        position: 'relative',
        display: 'inline-block',
        marginBottom: '6px'
      }}>
            <div style={{
          width: '48px',
          height: '48px',
          background: '#f3f4f6',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '22px'
        }}>
              {icon}
            </div>
            <Float placement="top-end">
              <Badge count={count > 99 ? 99 : count} color={color} />
            </Float>
          </div>
          <div style={{
        fontSize: '11px',
        color: '#9ca3af'
      }}>{label}</div>
        </div>)}
    </div>
}`,...(k=(F=d.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var W,w,C;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '카드 위 배지',
  parameters: {
    docs: {
      description: {
        story: '제품 카드에 할인율 배지를 오버레이하는 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    padding: '24px',
    fontFamily: 'system-ui',
    flexWrap: 'wrap'
  }}>
      {[{
      name: '무선 이어폰',
      price: '₩89,000',
      discount: '30%',
      img: '🎧'
    }, {
      name: '스마트워치',
      price: '₩199,000',
      discount: 'NEW',
      img: '⌚',
      badgeColor: '#10b981'
    }, {
      name: '블루투스 스피커',
      price: '₩59,000',
      discount: '50%',
      img: '🔊',
      badgeColor: '#ef4444'
    }].map(({
      name,
      price,
      discount,
      img,
      badgeColor
    }) => <div key={name} style={{
      position: 'relative',
      background: '#fff',
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      overflow: 'visible',
      width: '160px'
    }}>
          <Float placement="top-start" offsetX={8} offsetY={8}>
            <span style={{
          background: badgeColor ?? '#3b82f6',
          color: '#fff',
          fontSize: '11px',
          fontWeight: 700,
          padding: '2px 8px',
          borderRadius: '6px'
        }}>{discount}</span>
          </Float>
          <div style={{
        height: '100px',
        background: '#f9fafb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '40px',
        borderRadius: '12px 12px 0 0'
      }}>{img}</div>
          <div style={{
        padding: '10px'
      }}>
            <div style={{
          fontSize: '13px',
          fontWeight: 600,
          color: '#111',
          marginBottom: '4px'
        }}>{name}</div>
            <div style={{
          fontSize: '14px',
          fontWeight: 700,
          color: '#3b82f6'
        }}>{price}</div>
          </div>
        </div>)}
    </div>
}`,...(C=(w=p.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const D=["Default","PlacementGrid","AvatarWithStatus","NotificationBadge","CardWithBadge"];export{l as AvatarWithStatus,p as CardWithBadge,i as Default,d as NotificationBadge,s as PlacementGrid,D as __namedExportsOrder,q as default};
