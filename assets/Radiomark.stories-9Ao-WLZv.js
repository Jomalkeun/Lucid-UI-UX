import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./index-BxXVWNx3.js";import{d as C}from"./reference-types-4ftiVeOu.js";import"./_commonjsHelpers-CqkleIqs.js";const A={sm:14,md:18,lg:22,xl:28};function s({checked:a=!1,disabled:n=!1,invalid:r=!1,size:l="md",color:p="#3b82f6",borderColor:T,style:V}){const m=A[l],f=m*.45,P=T??(r?"#ef4444":a?p:"#d1d5db"),q=a?p:"#fff";return e.jsx("div",{role:"presentation","aria-hidden":"true",style:{width:m,height:m,borderRadius:"50%",border:`2px solid ${P}`,background:q,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all 0.15s",opacity:n?.45:1,boxShadow:r?"0 0 0 2px #fca5a544":a?`0 0 0 2px ${p}22`:"none",...V},children:a&&e.jsx("div",{style:{width:f,height:f,borderRadius:"50%",background:"#fff",transition:"all 0.15s"}})})}s.__docgenInfo={description:"",methods:[],displayName:"Radiomark",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#3b82f6'",computed:!1}},borderColor:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const G=C([{library:"Chakra UI",component:"Radiomark",url:"https://www.chakra-ui.com/docs/components/radiomark",usedFor:["comparison"],relation:"compared"}]),M={title:"Atoms/Primitives/Radiomark",component:s,tags:["autodocs","ref:chakra-ui"],parameters:{references:G,docs:{description:{component:"\n## Radiomark\n\n라디오 버튼의 시각적 선택 표시 원형 아이콘을 독립적으로 렌더링하는 프리미티브입니다.\nRadio 컴포넌트 내부에서 사용되며, 커스텀 라디오 스타일링에 활용합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `checked` | `boolean` | `false` | 선택 상태 |\n| `disabled` | `boolean` | `false` | 비활성화 |\n| `invalid` | `boolean` | `false` | 오류 상태 |\n| `size` | `'sm'\\|'md'\\|'lg'\\|'xl'` | `'md'` | 크기 |\n| `color` | `string` | `'#3b82f6'` | 선택 색상 |\n        "}}},argTypes:{checked:{control:"boolean",table:{category:"State"}},disabled:{control:"boolean",table:{category:"State"}},invalid:{control:"boolean",table:{category:"State"}},size:{control:"select",options:["sm","md","lg","xl"],table:{category:"Appearance"}},color:{control:"color",table:{category:"Appearance"}}},args:{checked:!0,disabled:!1,invalid:!1,size:"md",color:"#3b82f6"}},o={name:"기본",render:a=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",fontFamily:"system-ui"},children:[e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"8px",color:"#111827",fontSize:"14px"},children:[e.jsx(s,{...a}),"선택됨"]}),e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"8px",color:"#6b7280",fontSize:"14px"},children:[e.jsx(s,{...a,checked:!1}),"미선택"]})]})},i={name:"상태 비교",render:()=>e.jsx("div",{style:{display:"flex",gap:"20px",alignItems:"center",fontFamily:"system-ui"},children:[{checked:!1,label:"미선택"},{checked:!0,label:"선택됨"},{checked:!1,disabled:!0,label:"비활성"},{checked:!0,disabled:!0,label:"비활성+선택"},{checked:!1,invalid:!0,label:"오류"}].map(({label:a,...n})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(s,{...n}),e.jsx("div",{style:{fontSize:"11px",color:"#9ca3af"},children:a})]},a))})},t={name:"크기 변형",render:()=>e.jsx("div",{style:{display:"flex",gap:"16px",alignItems:"flex-end",fontFamily:"system-ui"},children:["sm","md","lg","xl"].map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(s,{size:a,checked:!0}),e.jsx("div",{style:{fontSize:"11px",color:"#9ca3af"},children:a})]},a))})},d={name:"색상 변형",render:()=>e.jsx("div",{style:{display:"flex",gap:"16px",alignItems:"center",fontFamily:"system-ui"},children:[{color:"#3b82f6",label:"Blue"},{color:"#10b981",label:"Green"},{color:"#f59e0b",label:"Amber"},{color:"#ef4444",label:"Red"},{color:"#8b5cf6",label:"Purple"}].map(({color:a,label:n})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(s,{color:a,checked:!0,size:"lg"}),e.jsx("div",{style:{fontSize:"11px",color:"#9ca3af"},children:n})]},n))})};function _(){const[a,n]=w.useState("standard"),r=[{value:"free",label:"무료",desc:"기본 기능",price:"₩0"},{value:"standard",label:"Standard",desc:"고급 기능",price:"₩9,900/월"},{value:"pro",label:"Pro",desc:"팀 기능 포함",price:"₩29,900/월"}];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px",maxWidth:"320px",fontFamily:"system-ui"},children:r.map(l=>e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"14px 16px",border:`2px solid ${a===l.value?"#3b82f6":"#e5e7eb"}`,borderRadius:"10px",cursor:"pointer",background:a===l.value?"#eff6ff":"#fff",transition:"all 0.15s"},onClick:()=>n(l.value),children:[e.jsx(s,{checked:a===l.value}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontWeight:600,color:"#111",fontSize:"14px"},children:l.label}),e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af"},children:l.desc})]}),e.jsx("div",{style:{fontSize:"13px",fontWeight:700,color:a===l.value?"#3b82f6":"#374151"},children:l.price})]},l.value))})}const c={name:"라디오 그룹",parameters:{docs:{description:{story:"Radiomark를 사용한 커스텀 라디오 그룹 예시입니다."}}},render:()=>e.jsx(_,{})};var u,x,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '기본',
  render: args => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    fontFamily: 'system-ui'
  }}>
      <label style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      color: '#111827',
      fontSize: '14px'
    }}>
        <Radiomark {...args} />
        선택됨
      </label>
      <label style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      color: '#6b7280',
      fontSize: '14px'
    }}>
        <Radiomark {...args} checked={false} />
        미선택
      </label>
    </div>
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var b,g,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '상태 비교',
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    fontFamily: 'system-ui'
  }}>
      {[{
      checked: false,
      label: '미선택'
    }, {
      checked: true,
      label: '선택됨'
    }, {
      checked: false,
      disabled: true,
      label: '비활성'
    }, {
      checked: true,
      disabled: true,
      label: '비활성+선택'
    }, {
      checked: false,
      invalid: true,
      label: '오류'
    }].map(({
      label,
      ...props
    }) => <div key={label} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '6px'
    }}>
          <Radiomark {...props} />
          <div style={{
        fontSize: '11px',
        color: '#9ca3af'
      }}>{label}</div>
        </div>)}
    </div>
}`,...(v=(g=i.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,k,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '크기 변형',
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-end',
    fontFamily: 'system-ui'
  }}>
      {(['sm', 'md', 'lg', 'xl'] as const).map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '6px'
    }}>
          <Radiomark size={size} checked />
          <div style={{
        fontSize: '11px',
        color: '#9ca3af'
      }}>{size}</div>
        </div>)}
    </div>
}`,...(S=(k=t.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var j,z,R;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '색상 변형',
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    fontFamily: 'system-ui'
  }}>
      {[{
      color: '#3b82f6',
      label: 'Blue'
    }, {
      color: '#10b981',
      label: 'Green'
    }, {
      color: '#f59e0b',
      label: 'Amber'
    }, {
      color: '#ef4444',
      label: 'Red'
    }, {
      color: '#8b5cf6',
      label: 'Purple'
    }].map(({
      color,
      label
    }) => <div key={label} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '6px'
    }}>
          <Radiomark color={color} checked size="lg" />
          <div style={{
        fontSize: '11px',
        color: '#9ca3af'
      }}>{label}</div>
        </div>)}
    </div>
}`,...(R=(z=d.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var I,D,F;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '라디오 그룹',
  parameters: {
    docs: {
      description: {
        story: 'Radiomark를 사용한 커스텀 라디오 그룹 예시입니다.'
      }
    }
  },
  render: () => <RadioGroupDemo />
}`,...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const N=["Default","States","SizeVariants","ColorVariants","RadioGroup"];export{d as ColorVariants,o as Default,c as RadioGroup,t as SizeVariants,i as States,N as __namedExportsOrder,M as default};
