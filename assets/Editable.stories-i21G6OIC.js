import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-BxXVWNx3.js";import{d as le}from"./reference-types-4ftiVeOu.js";import{c as I}from"./utils-DCADjnpI.js";import{B as R}from"./button-B_kt0lNs.js";import{I as de}from"./input-CyTVhyid.js";import{C as pe}from"./check-CvnDgXMx.js";import{X as ce}from"./x-DsL683-u.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DtBajwEi.js";import"./index-CkIaN0ex.js";import"./loader-circle-Db56uVXG.js";import"./createLucideIcon-Ct87QT5c.js";function a({value:r,defaultValue:t="",placeholder:n="클릭하여 편집...",disabled:o=!1,readOnly:l=!1,maxLength:h,fontSize:k="16px",fontWeight:O="normal",color:S,editOnFocus:w=!0,selectOnFocus:T=!1,submitOnBlur:ne=!0,submitOnEnter:oe=!0,onChange:s,onSubmit:j,onCancel:z}){const[V,B]=i.useState(!1),[ie,se]=i.useState(t),[c,F]=i.useState(t),u=i.useRef(null),d=r??ie;i.useEffect(()=>{V&&u.current&&(u.current.focus(),T&&u.current.select())},[V,T]);const W=()=>{o||l||(F(d),B(!0))},E=()=>{B(!1),se(c),s==null||s(c),j==null||j(c)},q=()=>{B(!1),F(d),z==null||z()},D={fontSize:k,fontWeight:O,...S?{color:S}:{}};return V?e.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[e.jsx(de,{ref:u,size:"small",value:c,maxLength:h,onChange:p=>{F(p.target.value),s==null||s(p.target.value)},onKeyDown:p=>{oe&&p.key==="Enter"&&E(),p.key==="Escape"&&q()},onBlur:()=>{ne&&E()},className:I("inline-flex h-auto w-auto min-w-[120px] rounded-md border-2 border-krds-primary-50","bg-krds-primary-5 px-2 py-0.5 leading-normal"),style:D}),e.jsx(R,{variant:"icon",size:"xsmall","aria-label":"확인",onClick:E,className:"text-krds-primary-base",children:e.jsx(pe,{})}),e.jsx(R,{variant:"icon",size:"xsmall","aria-label":"취소",onClick:q,children:e.jsx(ce,{})})]}):e.jsx("span",{onClick:w?W:void 0,onFocus:w?W:void 0,tabIndex:o||l?-1:0,title:o?"":"클릭하여 편집",className:I("inline-block min-w-20 rounded-md border-2 border-transparent px-2 py-0.5 leading-normal transition-colors","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",o?"cursor-default":l?"cursor-text":"cursor-pointer hover:border-border hover:bg-muted",d?S?void 0:"text-foreground":"text-muted-foreground"),style:d?D:{fontSize:k,fontWeight:O},children:d||n})}a.__docgenInfo={description:"",methods:[],displayName:"Editable",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'클릭하여 편집...'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},maxLength:{required:!1,tsType:{name:"number"},description:""},fontSize:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'16px'",computed:!1}},fontWeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:"'normal'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:""},editOnFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},selectOnFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},submitOnBlur:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},submitOnEnter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ue=le([{library:"PatternFly",component:"Inline edit",url:"https://www.patternfly.org/components/inline-edit/",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Ark UI",component:"Editable",url:"https://ark-ui.com/docs/components/editable",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Chakra UI",component:"Editable",url:"https://www.chakra-ui.com/docs/components/editable",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Popup Edit",url:"https://quasar.dev/vue-components/popup-edit",usedFor:["comparison"],relation:"compared"}]),Ee={title:"Molecules/Forms/Editable",component:a,tags:["autodocs","ref:chakra-ui","ref:ark-ui","ref:quasar","ref:patternfly"],parameters:{references:ue,docs:{description:{component:"\n## Editable\n\n클릭하면 즉시 편집 가능한 인라인 텍스트 컴포넌트입니다.\n일반 텍스트로 표시되다가 포커스 시 입력 필드로 전환되어, 별도의 편집 버튼 없이 인라인 수정 UX를 제공합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `defaultValue` | `string` | `''` | 초기값 |\n| `placeholder` | `string` | `'클릭하여 편집...'` | 빈 값 플레이스홀더 |\n| `disabled` | `boolean` | `false` | 비활성화 |\n| `readOnly` | `boolean` | `false` | 읽기 전용 |\n| `maxLength` | `number` | - | 최대 입력 길이 |\n| `fontSize` | `string` | `'16px'` | 폰트 크기 |\n| `submitOnBlur` | `boolean` | `true` | 포커스 아웃 시 제출 |\n| `submitOnEnter` | `boolean` | `true` | Enter 키 제출 |\n| `selectOnFocus` | `boolean` | `false` | 포커스 시 전체 선택 |\n        "}}},argTypes:{disabled:{control:"boolean",table:{category:"State"}},readOnly:{control:"boolean",table:{category:"State"}},submitOnBlur:{control:"boolean",table:{category:"Behavior"}},submitOnEnter:{control:"boolean",table:{category:"Behavior"}},selectOnFocus:{control:"boolean",table:{category:"Behavior"}},fontSize:{control:"text",table:{category:"Appearance"}},color:{control:"color",table:{category:"Appearance"}},placeholder:{control:"text",table:{category:"Content"}}},args:{defaultValue:"클릭해서 편집해보세요",placeholder:"텍스트를 입력하세요...",disabled:!1,readOnly:!1,submitOnBlur:!0,submitOnEnter:!0,selectOnFocus:!1}},f={name:"기본",render:r=>e.jsxs("div",{style:{padding:"24px",fontFamily:"system-ui"},children:[e.jsx("p",{style:{fontSize:"13px",color:"#9ca3af",marginBottom:"12px"},children:"아래 텍스트를 클릭하여 편집하세요"}),e.jsx(a,{...r})]})},m={name:"제출 콜백",parameters:{docs:{description:{story:"onSubmit 콜백으로 변경 사항을 감지하는 예시입니다."}}},render:()=>{const[r,t]=i.useState([]);return e.jsxs("div",{style:{padding:"24px",fontFamily:"system-ui"},children:[e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsx("label",{style:{fontSize:"12px",color:"#9ca3af",display:"block",marginBottom:"4px"},children:"할 일"}),e.jsx(a,{defaultValue:"마케팅 보고서 작성",onSubmit:n=>t(o=>[`제출: "${n}"`,...o.slice(0,4)]),onCancel:()=>t(n=>["취소됨",...n.slice(0,4)]),fontSize:"18px",fontWeight:700})]}),r.length>0&&e.jsxs("div",{style:{padding:"12px",background:"#f9fafb",borderRadius:"8px",fontSize:"12px",color:"#6b7280"},children:[e.jsx("div",{style:{fontWeight:700,marginBottom:"4px"},children:"이벤트 로그"}),r.map((n,o)=>e.jsxs("div",{children:["• ",n]},o))]})]})}},x={name:"폰트 크기",parameters:{docs:{description:{story:"다양한 폰트 크기의 편집 가능한 텍스트입니다."}}},render:()=>e.jsx("div",{style:{padding:"24px",fontFamily:"system-ui",display:"flex",flexDirection:"column",gap:"20px"},children:[{label:"H1",fontSize:"32px",fontWeight:800,defaultValue:"문서 제목"},{label:"H2",fontSize:"24px",fontWeight:700,defaultValue:"섹션 제목"},{label:"H3",fontSize:"18px",fontWeight:600,defaultValue:"소제목"},{label:"Body",fontSize:"14px",fontWeight:"normal",defaultValue:"본문 텍스트를 클릭해서 바꿔보세요"}].map(({label:r,fontSize:t,fontWeight:n,defaultValue:o})=>e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"12px"},children:[e.jsx("span",{style:{fontSize:"11px",color:"#9ca3af",width:"36px",flexShrink:0},children:r}),e.jsx(a,{fontSize:t,fontWeight:n,defaultValue:o})]},r))})},y={name:"읽기 전용 / 비활성화",parameters:{docs:{description:{story:"읽기 전용과 비활성화 상태를 비교합니다."}}},render:()=>e.jsxs("div",{style:{padding:"24px",fontFamily:"system-ui",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"4px"},children:"기본 (편집 가능)"}),e.jsx(a,{defaultValue:"이 텍스트는 편집 가능합니다"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"4px"},children:"readOnly"}),e.jsx(a,{defaultValue:"이 텍스트는 읽기 전용입니다",readOnly:!0,color:"#6b7280"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"4px"},children:"disabled"}),e.jsx(a,{defaultValue:"이 텍스트는 비활성화 상태입니다",disabled:!0,color:"#9ca3af"})]})]})};function fe(){const[r,t]=i.useState("김철수"),[n,o]=i.useState("프론트엔드 개발자"),[l,h]=i.useState("React와 TypeScript를 좋아합니다.");return e.jsxs("div",{style:{padding:"24px",fontFamily:"system-ui",maxWidth:"400px"},children:[e.jsxs("div",{style:{background:"#fff",border:"1px solid #e5e7eb",borderRadius:"16px",padding:"24px",textAlign:"center"},children:[e.jsx("div",{style:{width:"64px",height:"64px",borderRadius:"50%",background:"linear-gradient(135deg, #3b82f6, #8b5cf6)",margin:"0 auto 12px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"28px"},children:"👤"}),e.jsx("div",{style:{marginBottom:"4px"},children:e.jsx(a,{value:r,onChange:t,fontSize:"20px",fontWeight:700,color:"#111"})}),e.jsx("div",{style:{marginBottom:"12px"},children:e.jsx(a,{value:n,onChange:o,fontSize:"13px",color:"#6b7280"})}),e.jsxs("div",{style:{borderTop:"1px solid #f0f0f0",paddingTop:"12px",textAlign:"left"},children:[e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"4px"},children:"소개"}),e.jsx(a,{value:l,onChange:h,fontSize:"13px",color:"#374151"})]})]}),e.jsxs("div",{style:{marginTop:"12px",padding:"10px",background:"#f9fafb",borderRadius:"8px",fontSize:"12px",color:"#6b7280"},children:["현재 값: ",r," / ",n]})]})}const g={name:"프로필 카드 (제어)",parameters:{docs:{description:{story:"프로필 카드의 이름, 직책, 소개를 인라인으로 편집하는 예시입니다."}}},render:()=>e.jsx(fe,{})},b={name:"포커스 시 전체 선택",parameters:{docs:{description:{story:"selectOnFocus=true 시 편집 시작 때 텍스트가 자동 선택됩니다."}}},render:()=>e.jsxs("div",{style:{padding:"24px",fontFamily:"system-ui",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"4px"},children:"selectOnFocus: false (기본)"}),e.jsx(a,{defaultValue:"수정하면 커서가 끝에 위치합니다",selectOnFocus:!1})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"4px"},children:"selectOnFocus: true"}),e.jsx(a,{defaultValue:"수정하면 전체 선택됩니다",selectOnFocus:!0})]})]})},v={name:"인라인 테이블 편집",parameters:{docs:{description:{story:"테이블 셀을 인라인으로 편집하는 예시입니다."}}},render:()=>{const r=[{id:1,name:"홍길동",dept:"개발팀",salary:"5,000만원"},{id:2,name:"김철수",dept:"디자인팀",salary:"4,500만원"},{id:3,name:"이영희",dept:"마케팅팀",salary:"4,200만원"}];return e.jsxs("div",{style:{fontFamily:"system-ui",overflowX:"auto"},children:[e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%",minWidth:"480px"},children:[e.jsx("thead",{children:e.jsx("tr",{style:{background:"#f9fafb"},children:["ID","이름","부서","연봉"].map(t=>e.jsx("th",{style:{padding:"10px 16px",textAlign:"left",fontSize:"13px",fontWeight:600,color:"#6b7280",borderBottom:"1px solid #e5e7eb"},children:t},t))})}),e.jsx("tbody",{children:r.map(t=>e.jsxs("tr",{style:{borderBottom:"1px solid #f0f0f0"},children:[e.jsx("td",{style:{padding:"10px 16px",fontSize:"13px",color:"#9ca3af"},children:t.id}),e.jsx("td",{style:{padding:"6px 8px"},children:e.jsx(a,{defaultValue:t.name,fontSize:"14px"})}),e.jsx("td",{style:{padding:"6px 8px"},children:e.jsx(a,{defaultValue:t.dept,fontSize:"14px"})}),e.jsx("td",{style:{padding:"6px 8px"},children:e.jsx(a,{defaultValue:t.salary,fontSize:"14px"})})]},t.id))})]}),e.jsx("p",{style:{fontSize:"12px",color:"#9ca3af",marginTop:"8px"},children:"셀을 클릭하여 인라인으로 편집하세요"})]})}};var C,A,P;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '기본',
  render: args => <div style={{
    padding: '24px',
    fontFamily: 'system-ui'
  }}>
      <p style={{
      fontSize: '13px',
      color: '#9ca3af',
      marginBottom: '12px'
    }}>아래 텍스트를 클릭하여 편집하세요</p>
      <Editable {...args} />
    </div>
}`,...(P=(A=f.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var H,L,N;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '제출 콜백',
  parameters: {
    docs: {
      description: {
        story: 'onSubmit 콜백으로 변경 사항을 감지하는 예시입니다.'
      }
    }
  },
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    return <div style={{
      padding: '24px',
      fontFamily: 'system-ui'
    }}>
        <div style={{
        marginBottom: '16px'
      }}>
          <label style={{
          fontSize: '12px',
          color: '#9ca3af',
          display: 'block',
          marginBottom: '4px'
        }}>할 일</label>
          <Editable defaultValue="마케팅 보고서 작성" onSubmit={v => setLog(p => [\`제출: "\${v}"\`, ...p.slice(0, 4)])} onCancel={() => setLog(p => ['취소됨', ...p.slice(0, 4)])} fontSize="18px" fontWeight={700} />
        </div>
        {log.length > 0 && <div style={{
        padding: '12px',
        background: '#f9fafb',
        borderRadius: '8px',
        fontSize: '12px',
        color: '#6b7280'
      }}>
            <div style={{
          fontWeight: 700,
          marginBottom: '4px'
        }}>이벤트 로그</div>
            {log.map((l, i) => <div key={i}>• {l}</div>)}
          </div>}
      </div>;
  }
}`,...(N=(L=m.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var X,_,U;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: '폰트 크기',
  parameters: {
    docs: {
      description: {
        story: '다양한 폰트 크기의 편집 가능한 텍스트입니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '24px',
    fontFamily: 'system-ui',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      {[{
      label: 'H1',
      fontSize: '32px',
      fontWeight: 800,
      defaultValue: '문서 제목'
    }, {
      label: 'H2',
      fontSize: '24px',
      fontWeight: 700,
      defaultValue: '섹션 제목'
    }, {
      label: 'H3',
      fontSize: '18px',
      fontWeight: 600,
      defaultValue: '소제목'
    }, {
      label: 'Body',
      fontSize: '14px',
      fontWeight: 'normal',
      defaultValue: '본문 텍스트를 클릭해서 바꿔보세요'
    }].map(({
      label,
      fontSize,
      fontWeight,
      defaultValue
    }) => <div key={label} style={{
      display: 'flex',
      alignItems: 'baseline',
      gap: '12px'
    }}>
          <span style={{
        fontSize: '11px',
        color: '#9ca3af',
        width: '36px',
        flexShrink: 0
      }}>{label}</span>
          <Editable fontSize={fontSize} fontWeight={fontWeight} defaultValue={defaultValue} />
        </div>)}
    </div>
}`,...(U=(_=x.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var $,K,M;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: '읽기 전용 / 비활성화',
  parameters: {
    docs: {
      description: {
        story: '읽기 전용과 비활성화 상태를 비교합니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '24px',
    fontFamily: 'system-ui',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div>
        <div style={{
        fontSize: '12px',
        color: '#9ca3af',
        marginBottom: '4px'
      }}>기본 (편집 가능)</div>
        <Editable defaultValue="이 텍스트는 편집 가능합니다" />
      </div>
      <div>
        <div style={{
        fontSize: '12px',
        color: '#9ca3af',
        marginBottom: '4px'
      }}>readOnly</div>
        <Editable defaultValue="이 텍스트는 읽기 전용입니다" readOnly color="#6b7280" />
      </div>
      <div>
        <div style={{
        fontSize: '12px',
        color: '#9ca3af',
        marginBottom: '4px'
      }}>disabled</div>
        <Editable defaultValue="이 텍스트는 비활성화 상태입니다" disabled color="#9ca3af" />
      </div>
    </div>
}`,...(M=(K=y.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Q,G,J;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: '프로필 카드 (제어)',
  parameters: {
    docs: {
      description: {
        story: '프로필 카드의 이름, 직책, 소개를 인라인으로 편집하는 예시입니다.'
      }
    }
  },
  render: () => <ControlledEditableDemo />
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Y,Z,ee;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: '포커스 시 전체 선택',
  parameters: {
    docs: {
      description: {
        story: 'selectOnFocus=true 시 편집 시작 때 텍스트가 자동 선택됩니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '24px',
    fontFamily: 'system-ui',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <div>
        <div style={{
        fontSize: '12px',
        color: '#9ca3af',
        marginBottom: '4px'
      }}>selectOnFocus: false (기본)</div>
        <Editable defaultValue="수정하면 커서가 끝에 위치합니다" selectOnFocus={false} />
      </div>
      <div>
        <div style={{
        fontSize: '12px',
        color: '#9ca3af',
        marginBottom: '4px'
      }}>selectOnFocus: true</div>
        <Editable defaultValue="수정하면 전체 선택됩니다" selectOnFocus={true} />
      </div>
    </div>
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,re;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: '인라인 테이블 편집',
  parameters: {
    docs: {
      description: {
        story: '테이블 셀을 인라인으로 편집하는 예시입니다.'
      }
    }
  },
  render: () => {
    const rows = [{
      id: 1,
      name: '홍길동',
      dept: '개발팀',
      salary: '5,000만원'
    }, {
      id: 2,
      name: '김철수',
      dept: '디자인팀',
      salary: '4,500만원'
    }, {
      id: 3,
      name: '이영희',
      dept: '마케팅팀',
      salary: '4,200만원'
    }];
    return <div style={{
      fontFamily: 'system-ui',
      overflowX: 'auto'
    }}>
        <table style={{
        borderCollapse: 'collapse',
        width: '100%',
        minWidth: '480px'
      }}>
          <thead>
            <tr style={{
            background: '#f9fafb'
          }}>
              {['ID', '이름', '부서', '연봉'].map(h => <th key={h} style={{
              padding: '10px 16px',
              textAlign: 'left',
              fontSize: '13px',
              fontWeight: 600,
              color: '#6b7280',
              borderBottom: '1px solid #e5e7eb'
            }}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map(row => <tr key={row.id} style={{
            borderBottom: '1px solid #f0f0f0'
          }}>
                <td style={{
              padding: '10px 16px',
              fontSize: '13px',
              color: '#9ca3af'
            }}>{row.id}</td>
                <td style={{
              padding: '6px 8px'
            }}><Editable defaultValue={row.name} fontSize="14px" /></td>
                <td style={{
              padding: '6px 8px'
            }}><Editable defaultValue={row.dept} fontSize="14px" /></td>
                <td style={{
              padding: '6px 8px'
            }}><Editable defaultValue={row.salary} fontSize="14px" /></td>
              </tr>)}
          </tbody>
        </table>
        <p style={{
        fontSize: '12px',
        color: '#9ca3af',
        marginTop: '8px'
      }}>셀을 클릭하여 인라인으로 편집하세요</p>
      </div>;
  }
}`,...(re=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const ke=["Default","WithSubmitCallback","FontSizeVariants","ReadOnlyAndDisabled","ProfileCard","SelectOnFocus","InlineTableEdit"];export{f as Default,x as FontSizeVariants,v as InlineTableEdit,g as ProfileCard,y as ReadOnlyAndDisabled,b as SelectOnFocus,m as WithSubmitCallback,ke as __namedExportsOrder,Ee as default};
