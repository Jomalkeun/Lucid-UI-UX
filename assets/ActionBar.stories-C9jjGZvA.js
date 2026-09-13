import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as M}from"./index-BxXVWNx3.js";import{d as P}from"./reference-types-4ftiVeOu.js";import{c as g}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";function a({isOpen:t=!0,selectedCount:n=0,actions:l=[],onClose:o,position:r="bottom",showCount:i=!0,countLabel:d="항목 선택됨"}){if(!t)return null;const x=r==="bottom"?"bottom-6":"top-6",F={default:"bg-krds-primary-50 text-krds-white hover:bg-krds-primary-60",danger:"bg-krds-danger-base text-krds-white hover:opacity-90",primary:"bg-krds-success-base text-krds-white hover:opacity-90"};return e.jsxs("div",{role:"toolbar","aria-label":"일괄 액션 바",className:g("fixed left-1/2 -translate-x-1/2 z-[1000]","flex items-center gap-3 flex-wrap","bg-krds-gray-90 text-krds-white","rounded-xl px-5 py-3 min-w-80","shadow-[0_8px_32px_rgba(0,0,0,0.3)]",x),children:[i&&e.jsxs("span",{className:"text-krds-body-sm font-semibold whitespace-nowrap",children:[n," ",d]}),e.jsx("div",{className:"flex gap-2 flex-wrap",children:l.map((s,L)=>e.jsxs("button",{onClick:s.onClick,className:g("flex items-center gap-1 px-3.5 py-1.5","rounded-lg text-krds-body-xs font-medium","border-0 cursor-pointer transition-opacity",F[s.variant??"default"]),children:[s.icon&&e.jsx("span",{children:s.icon}),s.label]},L))}),o&&e.jsx("button",{onClick:o,"aria-label":"닫기",className:g("ml-auto bg-transparent border border-krds-white/30","text-krds-white rounded-md px-2.5 py-1","text-krds-body-xs cursor-pointer hover:bg-krds-white/10"),children:"✕"})]})}a.__docgenInfo={description:"",methods:[],displayName:"ActionBar",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},selectedCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},actions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; icon?: string; variant?: 'default' | 'danger' | 'primary'; onClick?: () => void }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:"'default' | 'danger' | 'primary'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'primary'"}],required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"Array<{ label: string; icon?: string; variant?: 'default' | 'danger' | 'primary'; onClick?: () => void }>"},description:"",defaultValue:{value:"[]",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},position:{required:!1,tsType:{name:"union",raw:"'bottom' | 'top'",elements:[{name:"literal",value:"'bottom'"},{name:"literal",value:"'top'"}]},description:"",defaultValue:{value:"'bottom'",computed:!1}},showCount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},countLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'항목 선택됨'",computed:!1}}}};const z=P([{library:"PatternFly",component:"Action list",url:"https://www.patternfly.org/components/action-list/",usedFor:["behavior","accessibility","comparison"],relation:"compared"},{library:"Chakra UI",component:"Action Bar",url:"https://www.chakra-ui.com/docs/components/action-bar",usedFor:["comparison"],relation:"compared"}]),J={title:"Molecules/Overlay/ActionBar",component:a,tags:["autodocs","ref:chakra-ui","ref:patternfly"],parameters:{references:z,docs:{description:{component:"\n## ActionBar\n\n테이블, 리스트에서 항목을 선택했을 때 화면 하단에 떠오르는 일괄 액션 바입니다.\n선택 항목 수 표시와 삭제·이동·내보내기 등 일괄 작업 버튼을 묶어 제공합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `isOpen` | `boolean` | `true` | 표시 여부 |\n| `selectedCount` | `number` | `0` | 선택된 항목 수 |\n| `actions` | `Action[]` | `[]` | 액션 버튼 목록 |\n| `onClose` | `() => void` | - | 닫기 콜백 |\n| `position` | `'bottom' \\| 'top'` | `'bottom'` | 위치 |\n| `showCount` | `boolean` | `true` | 카운트 표시 여부 |\n\n---\n\n### Action 타입\n\n```ts\ninterface Action {\n  label: string\n  icon?: string\n  variant?: 'default' | 'danger' | 'primary'\n  onClick?: () => void\n}\n```\n        "}}},argTypes:{isOpen:{control:"boolean",description:"표시 여부",table:{category:"State"}},selectedCount:{control:{type:"number",min:0,max:100},description:"선택 항목 수",table:{category:"Content"}},position:{control:"select",options:["bottom","top"],description:"위치",table:{category:"Appearance"}},showCount:{control:"boolean",description:"카운트 표시",table:{category:"Appearance"}},countLabel:{control:"text",description:"카운트 레이블",table:{category:"Content"}}},args:{isOpen:!0,selectedCount:3,position:"bottom",showCount:!0,countLabel:"항목 선택됨",actions:[{label:"삭제",icon:"🗑️",variant:"danger"},{label:"이동",icon:"📁",variant:"default"},{label:"내보내기",icon:"⬆️",variant:"primary"}]}},c={name:"기본",parameters:{docs:{description:{story:"기본 액션 바입니다."}}},render:t=>e.jsx("div",{style:{height:"120px",position:"relative"},children:e.jsx(a,{...t})})},p={name:"테이블 행 선택",parameters:{docs:{description:{story:"테이블에서 여러 행 선택 시 나타나는 액션 바입니다."}}},render:()=>{const[t,n]=M.useState([]),l=["상품 A","상품 B","상품 C","상품 D","상품 E"];return e.jsxs("div",{style:{fontFamily:"system-ui",paddingBottom:"80px"},children:[e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"14px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f8f9fa"},children:[e.jsx("th",{style:{padding:"10px",border:"1px solid #dee2e6",width:"40px"},children:e.jsx("input",{type:"checkbox",onChange:o=>n(o.target.checked?l.map((r,i)=>i):[])})}),e.jsx("th",{style:{padding:"10px",border:"1px solid #dee2e6",textAlign:"left"},children:"상품명"}),e.jsx("th",{style:{padding:"10px",border:"1px solid #dee2e6",textAlign:"left"},children:"상태"})]})}),e.jsx("tbody",{children:l.map((o,r)=>e.jsxs("tr",{style:{background:t.includes(r)?"#eff6ff":"#fff"},children:[e.jsx("td",{style:{padding:"10px",border:"1px solid #dee2e6",textAlign:"center"},children:e.jsx("input",{type:"checkbox",checked:t.includes(r),onChange:i=>n(d=>i.target.checked?[...d,r]:d.filter(x=>x!==r))})}),e.jsx("td",{style:{padding:"10px",border:"1px solid #dee2e6"},children:o}),e.jsx("td",{style:{padding:"10px",border:"1px solid #dee2e6"},children:"활성"})]},r))})]}),e.jsx(a,{isOpen:t.length>0,selectedCount:t.length,actions:[{label:"삭제",icon:"🗑️",variant:"danger",onClick:()=>n([])},{label:"복사",icon:"📋",variant:"default"},{label:"내보내기",icon:"⬆️",variant:"primary"}],onClose:()=>n([])})]})}},u={name:"최소 액션 (삭제만)",parameters:{docs:{description:{story:"단일 액션만 포함한 간결한 액션 바입니다."}}},render:()=>e.jsx("div",{style:{height:"120px",position:"relative"},children:e.jsx(a,{isOpen:!0,selectedCount:5,actions:[{label:"선택 삭제",icon:"🗑️",variant:"danger"}],onClose:()=>{}})})},m={name:"다중 액션",parameters:{docs:{description:{story:"여러 액션 버튼이 있는 액션 바입니다."}}},render:()=>e.jsx("div",{style:{height:"120px",position:"relative"},children:e.jsx(a,{isOpen:!0,selectedCount:12,countLabel:"건 선택됨",actions:[{label:"삭제",icon:"🗑️",variant:"danger"},{label:"이동",icon:"📁",variant:"default"},{label:"복사",icon:"📋",variant:"default"},{label:"승인",icon:"✅",variant:"primary"},{label:"내보내기",icon:"⬆️",variant:"primary"}],onClose:()=>{}})})},b={name:"상단 위치",parameters:{docs:{description:{story:"화면 상단에 고정되는 액션 바입니다."}}},render:()=>e.jsx("div",{style:{height:"120px",position:"relative"},children:e.jsx(a,{isOpen:!0,selectedCount:2,position:"top",actions:[{label:"편집",icon:"✏️",variant:"primary"},{label:"삭제",icon:"🗑️",variant:"danger"}],onClose:()=>{}})})},y={name:"카운트 숨김",parameters:{docs:{description:{story:"선택 수를 표시하지 않는 액션 바입니다."}}},render:()=>e.jsx("div",{style:{height:"120px",position:"relative"},children:e.jsx(a,{isOpen:!0,showCount:!1,actions:[{label:"전체 삭제",variant:"danger"},{label:"저장",variant:"primary"}]})})};var h,f,v;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '기본',
  parameters: {
    docs: {
      description: {
        story: '기본 액션 바입니다.'
      }
    }
  },
  render: args => <div style={{
    height: '120px',
    position: 'relative'
  }}>
      <ActionBar {...args} />
    </div>
}`,...(v=(f=c.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var C,k,w;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '테이블 행 선택',
  parameters: {
    docs: {
      description: {
        story: '테이블에서 여러 행 선택 시 나타나는 액션 바입니다.'
      }
    }
  },
  render: () => {
    const [selected, setSelected] = useState<number[]>([]);
    const rows = ['상품 A', '상품 B', '상품 C', '상품 D', '상품 E'];
    return <div style={{
      fontFamily: 'system-ui',
      paddingBottom: '80px'
    }}>
        <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '14px'
      }}>
          <thead>
            <tr style={{
            background: '#f8f9fa'
          }}>
              <th style={{
              padding: '10px',
              border: '1px solid #dee2e6',
              width: '40px'
            }}>
                <input type="checkbox" onChange={e => setSelected(e.target.checked ? rows.map((_, i) => i) : [])} />
              </th>
              <th style={{
              padding: '10px',
              border: '1px solid #dee2e6',
              textAlign: 'left'
            }}>상품명</th>
              <th style={{
              padding: '10px',
              border: '1px solid #dee2e6',
              textAlign: 'left'
            }}>상태</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => <tr key={i} style={{
            background: selected.includes(i) ? '#eff6ff' : '#fff'
          }}>
                <td style={{
              padding: '10px',
              border: '1px solid #dee2e6',
              textAlign: 'center'
            }}>
                  <input type="checkbox" checked={selected.includes(i)} onChange={e => setSelected(p => e.target.checked ? [...p, i] : p.filter(x => x !== i))} />
                </td>
                <td style={{
              padding: '10px',
              border: '1px solid #dee2e6'
            }}>{row}</td>
                <td style={{
              padding: '10px',
              border: '1px solid #dee2e6'
            }}>활성</td>
              </tr>)}
          </tbody>
        </table>
        <ActionBar isOpen={selected.length > 0} selectedCount={selected.length} actions={[{
        label: '삭제',
        icon: '🗑️',
        variant: 'danger',
        onClick: () => setSelected([])
      }, {
        label: '복사',
        icon: '📋',
        variant: 'default'
      }, {
        label: '내보내기',
        icon: '⬆️',
        variant: 'primary'
      }]} onClose={() => setSelected([])} />
      </div>;
  }
}`,...(w=(k=p.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var j,A,S;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '최소 액션 (삭제만)',
  parameters: {
    docs: {
      description: {
        story: '단일 액션만 포함한 간결한 액션 바입니다.'
      }
    }
  },
  render: () => <div style={{
    height: '120px',
    position: 'relative'
  }}>
      <ActionBar isOpen selectedCount={5} actions={[{
      label: '선택 삭제',
      icon: '🗑️',
      variant: 'danger'
    }]} onClose={() => {}} />
    </div>
}`,...(S=(A=u.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var O,B,T;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '다중 액션',
  parameters: {
    docs: {
      description: {
        story: '여러 액션 버튼이 있는 액션 바입니다.'
      }
    }
  },
  render: () => <div style={{
    height: '120px',
    position: 'relative'
  }}>
      <ActionBar isOpen selectedCount={12} countLabel="건 선택됨" actions={[{
      label: '삭제',
      icon: '🗑️',
      variant: 'danger'
    }, {
      label: '이동',
      icon: '📁',
      variant: 'default'
    }, {
      label: '복사',
      icon: '📋',
      variant: 'default'
    }, {
      label: '승인',
      icon: '✅',
      variant: 'primary'
    }, {
      label: '내보내기',
      icon: '⬆️',
      variant: 'primary'
    }]} onClose={() => {}} />
    </div>
}`,...(T=(B=m.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var q,_,N;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '상단 위치',
  parameters: {
    docs: {
      description: {
        story: '화면 상단에 고정되는 액션 바입니다.'
      }
    }
  },
  render: () => <div style={{
    height: '120px',
    position: 'relative'
  }}>
      <ActionBar isOpen selectedCount={2} position="top" actions={[{
      label: '편집',
      icon: '✏️',
      variant: 'primary'
    }, {
      label: '삭제',
      icon: '🗑️',
      variant: 'danger'
    }]} onClose={() => {}} />
    </div>
}`,...(N=(_=b.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var V,D,E;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '카운트 숨김',
  parameters: {
    docs: {
      description: {
        story: '선택 수를 표시하지 않는 액션 바입니다.'
      }
    }
  },
  render: () => <div style={{
    height: '120px',
    position: 'relative'
  }}>
      <ActionBar isOpen showCount={false} actions={[{
      label: '전체 삭제',
      variant: 'danger'
    }, {
      label: '저장',
      variant: 'primary'
    }]} />
    </div>
}`,...(E=(D=y.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const K=["Default","TableSelection","MinimalActions","ManyActions","TopPosition","NoCount"];export{c as Default,m as ManyActions,u as MinimalActions,y as NoCount,p as TableSelection,b as TopPosition,K as __namedExportsOrder,J as default};
