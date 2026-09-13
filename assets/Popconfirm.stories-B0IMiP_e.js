import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-BxXVWNx3.js";import{d as U}from"./reference-types-4ftiVeOu.js";import"./_commonjsHelpers-CqkleIqs.js";function i({title:t,description:r,confirmText:a="확인",cancelText:o="취소",icon:d="⚠️",confirmColor:y="#ef4444",cancelColor:$,placement:s="top",disabled:S=!1,children:L,onConfirm:h,onCancel:v,style:M}){const[O,p]=l.useState(!1),j=l.useRef(null);l.useEffect(()=>{const c=H=>{j.current&&!j.current.contains(H.target)&&p(!1)};return document.addEventListener("mousedown",c),()=>document.removeEventListener("mousedown",c)},[]);const n={position:"absolute",zIndex:1e3,background:"#fff",border:"1px solid #e5e7eb",borderRadius:"10px",boxShadow:"0 8px 24px rgba(0,0,0,0.12)",padding:"12px 16px",minWidth:"220px",maxWidth:"320px",fontFamily:"system-ui",animation:"popIn 0.15s ease"};return s.startsWith("top")?(n.bottom="100%",n.marginBottom="8px"):s.startsWith("bottom")?(n.top="100%",n.marginTop="8px"):s==="left"?(n.right="100%",n.marginRight="8px",n.top="0"):s==="right"&&(n.left="100%",n.marginLeft="8px",n.top="0"),s==="top-end"||s==="bottom-end"?n.right=0:s!=="right"&&s!=="left"&&(n.left=0),e.jsxs("div",{ref:j,style:{position:"relative",display:"inline-block",...M},children:[e.jsx("style",{children:"@keyframes popIn { from { opacity: 0; transform: scale(0.9) } to { opacity: 1; transform: scale(1) } }"}),e.jsx("div",{onClick:()=>{S||p(c=>!c)},style:{display:"inline-block",cursor:S?"default":"pointer"},children:L}),O&&e.jsxs("div",{style:n,children:[e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"flex-start",marginBottom:r?"8px":"12px"},children:[d&&e.jsx("span",{style:{fontSize:"16px",flexShrink:0,marginTop:"1px"},children:d}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"14px",fontWeight:600,color:"#111",lineHeight:1.4},children:t}),r&&e.jsx("div",{style:{fontSize:"13px",color:"#6b7280",marginTop:"4px",lineHeight:1.4},children:r})]})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[e.jsx("button",{onClick:()=>{p(!1),v==null||v()},style:{padding:"5px 12px",background:$??"#f3f4f6",color:"#374151",border:"1px solid #e5e7eb",borderRadius:"6px",cursor:"pointer",fontSize:"13px",fontWeight:500},children:o}),e.jsx("button",{onClick:()=>{p(!1),h==null||h()},style:{padding:"5px 12px",background:y,color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"13px",fontWeight:600},children:a})]})]})]})}i.__docgenInfo={description:"",methods:[],displayName:"Popconfirm",props:{title:{required:!0,tsType:{name:"ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},confirmText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'확인'",computed:!1}},cancelText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'취소'",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'⚠️'",computed:!1}},confirmColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#ef4444'",computed:!1}},cancelColor:{required:!1,tsType:{name:"string"},description:""},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const G=U([{library:"Element Plus",component:"Popconfirm",url:"https://element-plus.org/en-US/component/popconfirm",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"PrimeVue",component:"ConfirmPopup",url:"https://primevue.org/confirmpopup/",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"shadcn/ui",component:"Alert Dialog",url:"https://ui.shadcn.com/docs/components/alert-dialog",usedFor:["comparison"],relation:"compared"},{library:"Ant Design",component:"Popconfirm",url:"https://ant.design/components/popconfirm/",usedFor:["comparison"],relation:"compared"}]),Z={title:"Molecules/Overlay/Popconfirm",component:i,tags:["autodocs","ref:shadcn-ui","ref:ant-design","ref:element-plus","ref:primevue"],parameters:{references:G,docs:{description:{component:"\n## Popconfirm\n\n위험하거나 되돌릴 수 없는 작업 전 인라인 확인을 요청하는 팝오버 컴포넌트입니다.\n별도 모달 없이 트리거 요소 근처에 확인/취소를 표시합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `title` | `ReactNode` | - | 확인 제목 |\n| `description` | `ReactNode` | - | 보조 설명 |\n| `confirmText` | `string` | `'확인'` | 확인 버튼 텍스트 |\n| `cancelText` | `string` | `'취소'` | 취소 버튼 텍스트 |\n| `confirmColor` | `string` | `'#ef4444'` | 확인 버튼 색상 |\n| `placement` | `string` | `'top'` | 팝오버 위치 |\n| `disabled` | `boolean` | `false` | 비활성화 |\n        "}}},argTypes:{placement:{control:"select",options:["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end"],table:{category:"Positioning"}},confirmColor:{control:"color",table:{category:"Appearance"}},disabled:{control:"boolean",table:{category:"State"}},icon:{control:"text",table:{category:"Content"}}},args:{title:"정말 삭제하시겠습니까?",confirmText:"삭제",cancelText:"취소",confirmColor:"#ef4444",placement:"top",icon:"⚠️",disabled:!1}};function J(){const[t,r]=l.useState(!1);return e.jsxs("div",{style:{fontFamily:"system-ui",display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(i,{title:"이 항목을 삭제하시겠습니까?",description:"이 작업은 되돌릴 수 없습니다.",onConfirm:()=>r(!0),onCancel:()=>{},children:e.jsx("button",{style:{padding:"8px 16px",background:t?"#f3f4f6":"#ef4444",color:t?"#9ca3af":"#fff",border:"none",borderRadius:"6px",cursor:t?"default":"pointer",fontSize:"14px"},children:t?"삭제됨":"🗑️ 삭제"})}),t&&e.jsx("button",{onClick:()=>r(!1),style:{padding:"6px 12px",background:"#f3f4f6",border:"1px solid #e5e7eb",borderRadius:"6px",cursor:"pointer",fontSize:"12px",color:"#6b7280"},children:"되돌리기"})]})}const f={name:"기본 삭제 확인",render:()=>e.jsx(J,{})},m={name:"위치 변형",parameters:{docs:{description:{story:"다양한 위치에서 팝오버를 표시합니다."}}},render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"12px",padding:"60px 20px",fontFamily:"system-ui"},children:["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end"].map(t=>e.jsx(i,{title:"확인하시겠습니까?",placement:t,onConfirm:()=>{},children:e.jsx("button",{style:{padding:"6px 12px",background:"#f3f4f6",border:"1px solid #e5e7eb",borderRadius:"6px",cursor:"pointer",fontSize:"12px",color:"#374151",width:"100%"},children:t})},t))})},u={name:"아이콘 변형",render:()=>e.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",fontFamily:"system-ui"},children:[{icon:"⚠️",title:"경고",color:"#f59e0b",label:"경고"},{icon:"❓",title:"확인",color:"#3b82f6",label:"확인"},{icon:"🗑️",title:"삭제",color:"#ef4444",label:"삭제"},{icon:"📤",title:"전송",color:"#10b981",label:"전송"}].map(({icon:t,title:r,color:a,label:o})=>e.jsx(i,{title:`${r}하시겠습니까?`,icon:t,confirmColor:a,confirmText:o,onConfirm:()=>{},children:e.jsxs("button",{style:{padding:"8px 14px",background:a,color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"13px"},children:[t," ",o]})},o))})},x={name:"설명 포함",render:()=>e.jsx(i,{title:"계정을 삭제하시겠습니까?",description:"모든 데이터, 설정, 결제 정보가 영구적으로 삭제됩니다.",confirmText:"계정 삭제",cancelText:"유지",icon:"⚠️",confirmColor:"#ef4444",onConfirm:()=>{},children:e.jsx("button",{style:{padding:"9px 18px",background:"#ef4444",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontFamily:"system-ui",fontSize:"14px",fontWeight:600},children:"계정 삭제"})})},b={name:"테이블 액션",parameters:{docs:{description:{story:"데이터 테이블의 삭제 버튼에 활용하는 예시입니다."}}},render:()=>{function t(){const[r,a]=l.useState([{id:1,name:"김민준",role:"개발자",status:"활성"},{id:2,name:"이서연",role:"디자이너",status:"활성"},{id:3,name:"박지호",role:"PM",status:"비활성"}]);return e.jsx("div",{style:{fontFamily:"system-ui",fontSize:"14px"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsx("tr",{style:{background:"#f9fafb"},children:["이름","역할","상태","작업"].map(o=>e.jsx("th",{style:{padding:"10px 14px",textAlign:"left",color:"#374151",fontWeight:600,fontSize:"13px",borderBottom:"1px solid #e5e7eb"},children:o},o))})}),e.jsx("tbody",{children:r.map(o=>e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"10px 14px",borderBottom:"1px solid #f0f0f0"},children:o.name}),e.jsx("td",{style:{padding:"10px 14px",borderBottom:"1px solid #f0f0f0",color:"#6b7280"},children:o.role}),e.jsx("td",{style:{padding:"10px 14px",borderBottom:"1px solid #f0f0f0"},children:e.jsx("span",{style:{padding:"2px 8px",background:o.status==="활성"?"#dcfce7":"#f3f4f6",color:o.status==="활성"?"#15803d":"#9ca3af",borderRadius:"10px",fontSize:"12px"},children:o.status})}),e.jsx("td",{style:{padding:"10px 14px",borderBottom:"1px solid #f0f0f0"},children:e.jsx(i,{title:`${o.name}을 삭제하시겠습니까?`,onConfirm:()=>a(d=>d.filter(y=>y.id!==o.id)),children:e.jsx("button",{style:{background:"none",border:"1px solid #fca5a5",color:"#ef4444",borderRadius:"4px",padding:"3px 8px",cursor:"pointer",fontSize:"12px"},children:"삭제"})})})]},o.id))})]})})}return e.jsx(t,{})}},g={name:"비활성화",render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",fontFamily:"system-ui"},children:[e.jsx(i,{title:"삭제하시겠습니까?",disabled:!0,onConfirm:()=>{},children:e.jsx("button",{style:{padding:"8px 16px",background:"#f3f4f6",color:"#9ca3af",border:"none",borderRadius:"6px",cursor:"not-allowed",fontSize:"14px"},children:"비활성 버튼"})}),e.jsx(i,{title:"삭제하시겠습니까?",onConfirm:()=>{},children:e.jsx("button",{style:{padding:"8px 16px",background:"#ef4444",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px"},children:"활성 버튼"})})]})};var T,k,R;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '기본 삭제 확인',
  render: () => <DeleteButton />
}`,...(R=(k=f.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var C,P,z;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '위치 변형',
  parameters: {
    docs: {
      description: {
        story: '다양한 위치에서 팝오버를 표시합니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '12px',
    padding: '60px 20px',
    fontFamily: 'system-ui'
  }}>
      {(['top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end'] as const).map(placement => <Popconfirm key={placement} title="확인하시겠습니까?" placement={placement} onConfirm={() => {}}>
          <button style={{
        padding: '6px 12px',
        background: '#f3f4f6',
        border: '1px solid #e5e7eb',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '12px',
        color: '#374151',
        width: '100%'
      }}>
            {placement}
          </button>
        </Popconfirm>)}
    </div>
}`,...(z=(P=m.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var w,D,F;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '아이콘 변형',
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    fontFamily: 'system-ui'
  }}>
      {[{
      icon: '⚠️',
      title: '경고',
      color: '#f59e0b',
      label: '경고'
    }, {
      icon: '❓',
      title: '확인',
      color: '#3b82f6',
      label: '확인'
    }, {
      icon: '🗑️',
      title: '삭제',
      color: '#ef4444',
      label: '삭제'
    }, {
      icon: '📤',
      title: '전송',
      color: '#10b981',
      label: '전송'
    }].map(({
      icon,
      title,
      color,
      label
    }) => <Popconfirm key={label} title={\`\${title}하시겠습니까?\`} icon={icon} confirmColor={color} confirmText={label} onConfirm={() => {}}>
          <button style={{
        padding: '8px 14px',
        background: color,
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '13px'
      }}>
            {icon} {label}
          </button>
        </Popconfirm>)}
    </div>
}`,...(F=(D=u.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var W,B,q;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '설명 포함',
  render: () => <Popconfirm title="계정을 삭제하시겠습니까?" description="모든 데이터, 설정, 결제 정보가 영구적으로 삭제됩니다." confirmText="계정 삭제" cancelText="유지" icon="⚠️" confirmColor="#ef4444" onConfirm={() => {}}>
      <button style={{
      padding: '9px 18px',
      background: '#ef4444',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontFamily: 'system-ui',
      fontSize: '14px',
      fontWeight: 600
    }}>
        계정 삭제
      </button>
    </Popconfirm>
}`,...(q=(B=x.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var V,I,A;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '테이블 액션',
  parameters: {
    docs: {
      description: {
        story: '데이터 테이블의 삭제 버튼에 활용하는 예시입니다.'
      }
    }
  },
  render: () => {
    function TableDemo() {
      const [rows, setRows] = useState([{
        id: 1,
        name: '김민준',
        role: '개발자',
        status: '활성'
      }, {
        id: 2,
        name: '이서연',
        role: '디자이너',
        status: '활성'
      }, {
        id: 3,
        name: '박지호',
        role: 'PM',
        status: '비활성'
      }]);
      return <div style={{
        fontFamily: 'system-ui',
        fontSize: '14px'
      }}>
          <table style={{
          width: '100%',
          borderCollapse: 'collapse'
        }}>
            <thead>
              <tr style={{
              background: '#f9fafb'
            }}>
                {['이름', '역할', '상태', '작업'].map(h => <th key={h} style={{
                padding: '10px 14px',
                textAlign: 'left',
                color: '#374151',
                fontWeight: 600,
                fontSize: '13px',
                borderBottom: '1px solid #e5e7eb'
              }}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map(row => <tr key={row.id}>
                  <td style={{
                padding: '10px 14px',
                borderBottom: '1px solid #f0f0f0'
              }}>{row.name}</td>
                  <td style={{
                padding: '10px 14px',
                borderBottom: '1px solid #f0f0f0',
                color: '#6b7280'
              }}>{row.role}</td>
                  <td style={{
                padding: '10px 14px',
                borderBottom: '1px solid #f0f0f0'
              }}>
                    <span style={{
                  padding: '2px 8px',
                  background: row.status === '활성' ? '#dcfce7' : '#f3f4f6',
                  color: row.status === '활성' ? '#15803d' : '#9ca3af',
                  borderRadius: '10px',
                  fontSize: '12px'
                }}>{row.status}</span>
                  </td>
                  <td style={{
                padding: '10px 14px',
                borderBottom: '1px solid #f0f0f0'
              }}>
                    <Popconfirm title={\`\${row.name}을 삭제하시겠습니까?\`} onConfirm={() => setRows(prev => prev.filter(r => r.id !== row.id))}>
                      <button style={{
                    background: 'none',
                    border: '1px solid #fca5a5',
                    color: '#ef4444',
                    borderRadius: '4px',
                    padding: '3px 8px',
                    cursor: 'pointer',
                    fontSize: '12px'
                  }}>삭제</button>
                    </Popconfirm>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>;
    }
    return <TableDemo />;
  }
}`,...(A=(I=b.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var E,N,_;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '비활성화',
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    fontFamily: 'system-ui'
  }}>
      <Popconfirm title="삭제하시겠습니까?" disabled onConfirm={() => {}}>
        <button style={{
        padding: '8px 16px',
        background: '#f3f4f6',
        color: '#9ca3af',
        border: 'none',
        borderRadius: '6px',
        cursor: 'not-allowed',
        fontSize: '14px'
      }}>비활성 버튼</button>
      </Popconfirm>
      <Popconfirm title="삭제하시겠습니까?" onConfirm={() => {}}>
        <button style={{
        padding: '8px 16px',
        background: '#ef4444',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px'
      }}>활성 버튼</button>
      </Popconfirm>
    </div>
}`,...(_=(N=g.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};const ee=["Default","PlacementVariants","DifferentIcons","WithDescription","TableActions","Disabled"];export{f as Default,u as DifferentIcons,g as Disabled,m as PlacementVariants,b as TableActions,x as WithDescription,ee as __namedExportsOrder,Z as default};
