import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-BxXVWNx3.js";import{d as ye}from"./reference-types-4ftiVeOu.js";import"./_commonjsHelpers-CqkleIqs.js";function o({options:a,value:d,defaultValue:c,multiple:i=!1,disabled:u=!1,size:z="md",variant:W="outline",color:T="#3b82f6",height:C,label:I,onChange:x,style:se}){const F=b.useId(),ie=c??(i?[]:""),[oe,de]=b.useState(ie),p=d??oe,D=b.useRef(null),[y,L]=b.useState(-1),ce=e=>Array.isArray(p)?p.includes(e):p===e,q=b.useCallback(e=>{if(u)return;let r;if(i){const n=Array.isArray(p)?p:[];r=n.includes(e)?n.filter(s=>s!==e):[...n,e]}else r=e;de(r),x==null||x(r)},[u,i,p,x]),ue={sm:{fontSize:"13px",padding:"6px 10px",gap:"8px"},md:{fontSize:"14px",padding:"8px 12px",gap:"10px"},lg:{fontSize:"16px",padding:"10px 16px",gap:"12px"}},{fontSize:pe,padding:me,gap:be}=ue[z],m=a.filter(e=>!e.disabled),fe=e=>{if(u)return;const r=m.length;e.key==="ArrowDown"?(e.preventDefault(),L(n=>{var v;const s=(n+1)%r,f=m[s],t=(v=D.current)==null?void 0:v.querySelector(`[data-value="${f.value}"]`);return t==null||t.focus(),s})):e.key==="ArrowUp"?(e.preventDefault(),L(n=>{var v;const s=(n-1+r)%r,f=m[s],t=(v=D.current)==null?void 0:v.querySelector(`[data-value="${f.value}"]`);return t==null||t.focus(),s})):(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),y>=0&&y<m.length&&q(m[y].value))},ve=W==="outline"?"1px solid #d1d5db":"none",xe=W==="filled"?"#f3f4f6":"#fff";return l.jsxs("div",{style:{display:"inline-flex",flexDirection:"column",gap:"6px",fontFamily:"system-ui",...se},children:[I&&l.jsx("label",{id:`${F}-label`,style:{fontSize:"13px",fontWeight:600,color:"#374151"},children:I}),l.jsx("div",{ref:D,role:"listbox","aria-labelledby":I?`${F}-label`:void 0,"aria-multiselectable":i,tabIndex:0,onKeyDown:fe,style:{border:ve,background:xe,borderRadius:"8px",overflow:"hidden",outline:"none",height:C,overflowY:C?"auto":void 0},children:a.map((e,r)=>{const n=ce(e.value),s=m.indexOf(e),f=y===s&&!e.disabled;return l.jsxs("div",{role:"option","aria-selected":n,"aria-disabled":e.disabled,"data-value":e.value,tabIndex:e.disabled?-1:0,onClick:()=>!e.disabled&&q(e.value),onFocus:()=>!e.disabled&&L(s),onKeyDown:t=>{(t.key==="Enter"||t.key===" ")&&!e.disabled&&(t.preventDefault(),q(e.value))},style:{display:"flex",alignItems:"center",gap:be,padding:me,fontSize:pe,cursor:e.disabled?"not-allowed":"pointer",background:n?`${T}18`:f?"#f9fafb":"transparent",color:e.disabled?"#d1d5db":n?T:"#374151",borderBottom:r<a.length-1?"1px solid #f0f0f0":"none",outline:"none",userSelect:"none",transition:"background 0.15s",opacity:e.disabled?.6:1},children:[e.icon&&l.jsx("span",{style:{flexShrink:0},children:e.icon}),l.jsxs("div",{style:{flex:1,minWidth:0},children:[l.jsx("div",{style:{fontWeight:n?600:400},children:e.label}),e.description&&l.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginTop:"2px"},children:e.description})]}),n&&l.jsx("span",{style:{flexShrink:0,color:T,fontWeight:700,fontSize:"16px"},children:"✓"})]},e.value)})})]})}o.__docgenInfo={description:"",methods:[],displayName:"Listbox",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"ListboxOption"}],raw:"ListboxOption[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'outline' | 'filled' | 'ghost'",elements:[{name:"literal",value:"'outline'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'outline'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#3b82f6'",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const ge=ye([{library:"Ark UI",component:"Listbox",url:"https://ark-ui.com/docs/components/listbox",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Chakra UI",component:"Listbox",url:"https://www.chakra-ui.com/docs/components/listbox",usedFor:["comparison"],relation:"compared"}]),Ae={title:"Molecules/Forms/Listbox",component:o,tags:["autodocs","ref:chakra-ui","ref:ark-ui"],parameters:{references:ge,docs:{description:{component:"\n## Listbox\n\n접근성(ARIA listbox)을 완전히 지원하는 선택 가능한 목록 컴포넌트입니다.\nSelect와 달리 항상 펼쳐진 상태로 표시되며, 단일/다중 선택, 키보드 내비게이션을 지원합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `options` | `ListboxOption[]` | - | 옵션 목록 |\n| `value` | `string\\|string[]` | - | 제어 값 |\n| `multiple` | `boolean` | `false` | 다중 선택 |\n| `disabled` | `boolean` | `false` | 전체 비활성화 |\n| `size` | `'sm'\\|'md'\\|'lg'` | `'md'` | 크기 |\n| `variant` | `'outline'\\|'filled'\\|'ghost'` | `'outline'` | 스타일 변형 |\n| `color` | `string` | `'#3b82f6'` | 선택 색상 |\n| `height` | `number\\|string` | - | 높이 (스크롤) |\n| `label` | `string` | - | 레이블 |\n        "}}},argTypes:{multiple:{control:"boolean",table:{category:"Behavior"}},disabled:{control:"boolean",table:{category:"State"}},size:{control:"select",options:["sm","md","lg"],table:{category:"Appearance"}},variant:{control:"select",options:["outline","filled","ghost"],table:{category:"Appearance"}},color:{control:"color",table:{category:"Appearance"}},height:{control:"text",table:{category:"Appearance"}},label:{control:"text",table:{category:"Appearance"}}},args:{options:[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"svelte",label:"Svelte"},{value:"angular",label:"Angular"}],multiple:!1,disabled:!1,size:"md",variant:"outline",color:"#3b82f6"}},g={name:"기본 단일 선택"},h={name:"다중 선택",parameters:{docs:{description:{story:"multiple=true로 여러 항목을 선택할 수 있습니다."}}},args:{multiple:!0,defaultValue:["react","vue"],options:[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"svelte",label:"Svelte"},{value:"angular",label:"Angular"},{value:"solid",label:"Solid"}]}},S={name:"아이콘 포함",parameters:{docs:{description:{story:"각 항목에 아이콘과 설명을 추가한 예시입니다."}}},render:()=>l.jsx(o,{label:"언어 선택",options:[{value:"ts",label:"TypeScript",icon:"🔷",description:"정적 타입 JavaScript 슈퍼셋"},{value:"py",label:"Python",icon:"🐍",description:"범용 프로그래밍 언어"},{value:"rs",label:"Rust",icon:"⚙️",description:"시스템 프로그래밍 언어"},{value:"go",label:"Go",icon:"🐹",description:"Google 오픈소스 언어"},{value:"swift",label:"Swift",icon:"🦅",description:"Apple 플랫폼 언어",disabled:!0}],defaultValue:"ts",style:{minWidth:"280px"}})},j={name:"크기 변형",parameters:{docs:{description:{story:"sm / md / lg 세 가지 크기 변형입니다."}}},render:()=>l.jsx("div",{style:{display:"flex",gap:"24px",alignItems:"flex-start",fontFamily:"system-ui"},children:["sm","md","lg"].map(a=>l.jsx(o,{label:`Size: ${a}`,size:a,options:[{value:"a",label:"옵션 A"},{value:"b",label:"옵션 B"},{value:"c",label:"옵션 C"}],defaultValue:"a",style:{minWidth:"140px"}},a))})},w={name:"변형 비교",parameters:{docs:{description:{story:"outline / filled / ghost 세 가지 스타일 변형입니다."}}},render:()=>l.jsx("div",{style:{display:"flex",gap:"24px",fontFamily:"system-ui"},children:["outline","filled","ghost"].map(a=>l.jsx(o,{label:`Variant: ${a}`,variant:a,options:[{value:"1",label:"항목 1"},{value:"2",label:"항목 2"},{value:"3",label:"항목 3"}],defaultValue:"1",style:{minWidth:"140px"}},a))})},V={name:"비활성 옵션",render:()=>l.jsx(o,{label:"구독 플랜",options:[{value:"free",label:"무료",description:"기본 기능",icon:"🆓"},{value:"pro",label:"Pro",description:"고급 기능 포함",icon:"⭐"},{value:"team",label:"Team",description:"팀 기능 + 관리자",icon:"👥"},{value:"enterprise",label:"Enterprise",description:"준비 중",icon:"🏢",disabled:!0}],color:"#8b5cf6",defaultValue:"free",style:{minWidth:"260px"}})};function he(){const[a,d]=b.useState([]),c=[{value:"seoul",label:"서울",icon:"🏙️"},{value:"busan",label:"부산",icon:"🌊"},{value:"incheon",label:"인천",icon:"✈️"},{value:"daegu",label:"대구",icon:"🏔️"},{value:"gwangju",label:"광주",icon:"🌿"},{value:"daejeon",label:"대전",icon:"🔬"}];return l.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"flex-start",fontFamily:"system-ui"},children:[l.jsx(o,{label:"방문하고 싶은 도시 (복수 선택)",options:c,value:a,multiple:!0,onChange:i=>d(i),height:"220px",style:{minWidth:"240px"},color:"#10b981"}),l.jsxs("div",{style:{minWidth:"160px"},children:[l.jsx("div",{style:{fontSize:"13px",fontWeight:600,color:"#374151",marginBottom:"8px"},children:"선택된 도시:"}),a.length===0?l.jsx("div",{style:{fontSize:"13px",color:"#9ca3af"},children:"없음"}):l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:a.map(i=>{const u=c.find(z=>z.value===i);return l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"14px"},children:[l.jsx("span",{children:u.icon}),l.jsx("span",{style:{color:"#374151"},children:u.label})]},i)})}),l.jsx("button",{onClick:()=>d([]),style:{marginTop:"12px",background:"none",border:"1px solid #e5e7eb",borderRadius:"6px",padding:"4px 10px",cursor:"pointer",fontSize:"12px",color:"#6b7280"},children:"초기화"})]})]})}const A={name:"제어 컴포넌트 (도시 선택)",parameters:{docs:{description:{story:"외부 상태와 연동되는 제어 컴포넌트 예시입니다."}}},render:()=>l.jsx(he,{})},k={name:"색상 변형",parameters:{docs:{description:{story:"다양한 선택 색상 변형입니다."}}},render:()=>l.jsx("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",fontFamily:"system-ui"},children:[{color:"#3b82f6",label:"Blue",val:"a"},{color:"#10b981",label:"Green",val:"b"},{color:"#8b5cf6",label:"Purple",val:"c"},{color:"#f59e0b",label:"Amber",val:"d"}].map(({color:a,label:d,val:c})=>l.jsx(o,{label:d,color:a,options:[{value:"a",label:"항목 A"},{value:"b",label:"항목 B"},{value:"c",label:"항목 C"}],defaultValue:c,style:{minWidth:"120px"}},d))})};var R,B,P;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '기본 단일 선택'
}`,...(P=(B=g.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var $,E,O;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: '다중 선택',
  parameters: {
    docs: {
      description: {
        story: 'multiple=true로 여러 항목을 선택할 수 있습니다.'
      }
    }
  },
  args: {
    multiple: true,
    defaultValue: ['react', 'vue'],
    options: [{
      value: 'react',
      label: 'React'
    }, {
      value: 'vue',
      label: 'Vue'
    }, {
      value: 'svelte',
      label: 'Svelte'
    }, {
      value: 'angular',
      label: 'Angular'
    }, {
      value: 'solid',
      label: 'Solid'
    }]
  }
}`,...(O=(E=h.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var G,M,_;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '아이콘 포함',
  parameters: {
    docs: {
      description: {
        story: '각 항목에 아이콘과 설명을 추가한 예시입니다.'
      }
    }
  },
  render: () => <Listbox label="언어 선택" options={[{
    value: 'ts',
    label: 'TypeScript',
    icon: '🔷',
    description: '정적 타입 JavaScript 슈퍼셋'
  }, {
    value: 'py',
    label: 'Python',
    icon: '🐍',
    description: '범용 프로그래밍 언어'
  }, {
    value: 'rs',
    label: 'Rust',
    icon: '⚙️',
    description: '시스템 프로그래밍 언어'
  }, {
    value: 'go',
    label: 'Go',
    icon: '🐹',
    description: 'Google 오픈소스 언어'
  }, {
    value: 'swift',
    label: 'Swift',
    icon: '🦅',
    description: 'Apple 플랫폼 언어',
    disabled: true
  }]} defaultValue="ts" style={{
    minWidth: '280px'
  }} />
}`,...(_=(M=S.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var K,U,J;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: '크기 변형',
  parameters: {
    docs: {
      description: {
        story: 'sm / md / lg 세 가지 크기 변형입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'flex-start',
    fontFamily: 'system-ui'
  }}>
      {(['sm', 'md', 'lg'] as const).map(size => <Listbox key={size} label={\`Size: \${size}\`} size={size} options={[{
      value: 'a',
      label: '옵션 A'
    }, {
      value: 'b',
      label: '옵션 B'
    }, {
      value: 'c',
      label: '옵션 C'
    }]} defaultValue="a" style={{
      minWidth: '140px'
    }} />)}
    </div>
}`,...(J=(U=j.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var N,Y,H;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '변형 비교',
  parameters: {
    docs: {
      description: {
        story: 'outline / filled / ghost 세 가지 스타일 변형입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    fontFamily: 'system-ui'
  }}>
      {(['outline', 'filled', 'ghost'] as const).map(variant => <Listbox key={variant} label={\`Variant: \${variant}\`} variant={variant} options={[{
      value: '1',
      label: '항목 1'
    }, {
      value: '2',
      label: '항목 2'
    }, {
      value: '3',
      label: '항목 3'
    }]} defaultValue="1" style={{
      minWidth: '140px'
    }} />)}
    </div>
}`,...(H=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:H.source}}};var Q,X,Z;V.parameters={...V.parameters,docs:{...(Q=V.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: '비활성 옵션',
  render: () => <Listbox label="구독 플랜" options={[{
    value: 'free',
    label: '무료',
    description: '기본 기능',
    icon: '🆓'
  }, {
    value: 'pro',
    label: 'Pro',
    description: '고급 기능 포함',
    icon: '⭐'
  }, {
    value: 'team',
    label: 'Team',
    description: '팀 기능 + 관리자',
    icon: '👥'
  }, {
    value: 'enterprise',
    label: 'Enterprise',
    description: '준비 중',
    icon: '🏢',
    disabled: true
  }]} color="#8b5cf6" defaultValue="free" style={{
    minWidth: '260px'
  }} />
}`,...(Z=(X=V.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,le,ae;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: '제어 컴포넌트 (도시 선택)',
  parameters: {
    docs: {
      description: {
        story: '외부 상태와 연동되는 제어 컴포넌트 예시입니다.'
      }
    }
  },
  render: () => <ControlledListboxDemo />
}`,...(ae=(le=A.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var ne,te,re;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: '색상 변형',
  parameters: {
    docs: {
      description: {
        story: '다양한 선택 색상 변형입니다.'
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
      color: '#3b82f6',
      label: 'Blue',
      val: 'a'
    }, {
      color: '#10b981',
      label: 'Green',
      val: 'b'
    }, {
      color: '#8b5cf6',
      label: 'Purple',
      val: 'c'
    }, {
      color: '#f59e0b',
      label: 'Amber',
      val: 'd'
    }].map(({
      color,
      label,
      val
    }) => <Listbox key={label} label={label} color={color} options={[{
      value: 'a',
      label: '항목 A'
    }, {
      value: 'b',
      label: '항목 B'
    }, {
      value: 'c',
      label: '항목 C'
    }]} defaultValue={val} style={{
      minWidth: '120px'
    }} />)}
    </div>
}`,...(re=(te=k.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const ke=["Default","Multiple","WithIcons","SizeVariants","VariantComparison","WithDisabledOptions","Controlled","ColorVariants"];export{k as ColorVariants,A as Controlled,g as Default,h as Multiple,j as SizeVariants,w as VariantComparison,V as WithDisabledOptions,S as WithIcons,ke as __namedExportsOrder,Ae as default};
