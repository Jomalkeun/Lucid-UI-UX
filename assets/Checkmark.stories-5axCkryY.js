import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as q}from"./reference-types-4ftiVeOu.js";const A={sm:16,md:20,lg:24};function a({checked:n=!1,indeterminate:s=!1,size:r="md",color:o="#3b82f6",disabled:F=!1,variant:m="solid"}){const t=A[r],u=n||s,R=m==="solid"?u?o:"#fff":m==="subtle"&&u?`${o}20`:"#fff",T=u?o:"#d1d5db",f=m==="solid"?"#fff":o;return e.jsxs("div",{role:"presentation","aria-hidden":"true",style:{width:t,height:t,borderRadius:4,border:`2px solid ${T}`,background:R,display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.15s",flexShrink:0,opacity:F?.4:1},children:[s&&e.jsx("div",{style:{width:t*.5,height:2,background:f,borderRadius:1}}),n&&!s&&e.jsx("svg",{width:t*.6,height:t*.6,viewBox:"0 0 12 10",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M1 5L4.5 8.5L11 1.5",stroke:f,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})}a.__docgenInfo={description:"",methods:[],displayName:"Checkmark",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#3b82f6'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'outline' | 'subtle'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'subtle'"}]},description:"",defaultValue:{value:"'solid'",computed:!1}}}};const _=q([{library:"Chakra UI",component:"Checkmark",url:"https://www.chakra-ui.com/docs/components/checkmark",usedFor:["comparison"],relation:"compared"}]),E={title:"Atoms/Primitives/Checkmark",component:a,tags:["autodocs","ref:chakra-ui"],parameters:{references:_,docs:{description:{component:"\n## Checkmark\n\n체크박스의 시각적 체크 아이콘을 독립적으로 렌더링하는 프리미티브입니다.\nCheckbox 컴포넌트 내부에서 사용되며, 커스텀 체크박스 스타일링에 활용합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `checked` | `boolean` | `false` | 체크 상태 |\n| `indeterminate` | `boolean` | `false` | 중간 상태 |\n| `size` | `'sm'\\|'md'\\|'lg'` | `'md'` | 크기 |\n| `color` | `string` | `'#3b82f6'` | 색상 |\n| `disabled` | `boolean` | `false` | 비활성화 |\n| `variant` | `'solid'\\|'outline'\\|'subtle'` | `'solid'` | 변형 |\n        "}}},argTypes:{checked:{control:"boolean",table:{category:"State"}},indeterminate:{control:"boolean",table:{category:"State"}},size:{control:"select",options:["sm","md","lg"],table:{category:"Appearance"}},color:{control:"color",table:{category:"Appearance"}},disabled:{control:"boolean",table:{category:"State"}},variant:{control:"select",options:["solid","outline","subtle"],table:{category:"Appearance"}}},args:{checked:!0,size:"md",color:"#3b82f6",disabled:!1,variant:"solid"}},i={name:"기본",render:n=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",fontFamily:"system-ui",padding:"16px"},children:[e.jsx(a,{...n,checked:!1})," ",e.jsx("span",{style:{fontSize:"13px",color:"#9ca3af"},children:"미체크"}),e.jsx(a,{...n})," ",e.jsx("span",{style:{fontSize:"13px",color:"#374151"},children:"체크됨"}),e.jsx(a,{...n,indeterminate:!0})," ",e.jsx("span",{style:{fontSize:"13px",color:"#374151"},children:"중간"})]})},l={name:"크기 변형",parameters:{docs:{description:{story:"sm, md, lg 크기 비교입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"20px",alignItems:"center",padding:"16px",fontFamily:"system-ui"},children:["sm","md","lg"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{checked:!0,size:n}),e.jsx("span",{style:{fontSize:"11px",color:"#9ca3af"},children:n})]},n))})},d={name:"변형 비교",parameters:{docs:{description:{story:"solid, outline, subtle 변형 비교입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"16px",fontFamily:"system-ui"},children:["solid","outline","subtle"].map(n=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#6b7280",width:"60px"},children:n}),e.jsx(a,{variant:n,checked:!1}),e.jsx(a,{variant:n,checked:!0}),e.jsx(a,{variant:n,indeterminate:!0}),e.jsx(a,{variant:n,disabled:!0,checked:!0})]},n))})},c={name:"색상 변형",parameters:{docs:{description:{story:"다양한 색상의 Checkmark입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",padding:"16px"},children:["#3b82f6","#10b981","#ef4444","#f59e0b","#8b5cf6","#ec4899","#06b6d4"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(a,{checked:!0,color:n}),e.jsx("div",{style:{width:"20px",height:"6px",borderRadius:"3px",background:n}})]},n))})},p={name:"커스텀 체크박스 적용 예시",parameters:{docs:{description:{story:"Checkmark를 이용해 구현한 커스텀 체크박스 목록입니다."}}},render:()=>{const n=["디자인 시스템 구축","Storybook 설정","컴포넌트 테스트","문서 작성"];return e.jsx("div",{style:{fontFamily:"system-ui",display:"flex",flexDirection:"column",gap:"12px",padding:"16px"},children:n.map((s,r)=>e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"10px",cursor:"pointer",padding:"8px 12px",borderRadius:"8px",background:"#f8f9fa",border:"1px solid #e5e7eb"},children:[e.jsx(a,{checked:r<2,color:"#10b981"}),e.jsx("span",{style:{fontSize:"14px",color:"#374151",textDecoration:r<2?"line-through":"none",opacity:r<2?.6:1},children:s})]},s))})}};var x,y,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '기본',
  render: args => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    fontFamily: 'system-ui',
    padding: '16px'
  }}>
      <Checkmark {...args} checked={false} /> <span style={{
      fontSize: '13px',
      color: '#9ca3af'
    }}>미체크</span>
      <Checkmark {...args} /> <span style={{
      fontSize: '13px',
      color: '#374151'
    }}>체크됨</span>
      <Checkmark {...args} indeterminate /> <span style={{
      fontSize: '13px',
      color: '#374151'
    }}>중간</span>
    </div>
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var g,k,b;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '크기 변형',
  parameters: {
    docs: {
      description: {
        story: 'sm, md, lg 크기 비교입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    padding: '16px',
    fontFamily: 'system-ui'
  }}>
      {(['sm', 'md', 'lg'] as const).map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
          <Checkmark checked size={size} />
          <span style={{
        fontSize: '11px',
        color: '#9ca3af'
      }}>{size}</span>
        </div>)}
    </div>
}`,...(b=(k=l.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var v,j,C;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '변형 비교',
  parameters: {
    docs: {
      description: {
        story: 'solid, outline, subtle 변형 비교입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '16px',
    fontFamily: 'system-ui'
  }}>
      {(['solid', 'outline', 'subtle'] as const).map(variant => <div key={variant} style={{
      display: 'flex',
      gap: '12px',
      alignItems: 'center'
    }}>
          <span style={{
        fontSize: '12px',
        color: '#6b7280',
        width: '60px'
      }}>{variant}</span>
          <Checkmark variant={variant} checked={false} />
          <Checkmark variant={variant} checked />
          <Checkmark variant={variant} indeterminate />
          <Checkmark variant={variant} disabled checked />
        </div>)}
    </div>
}`,...(C=(j=d.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var S,z,I;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '색상 변형',
  parameters: {
    docs: {
      description: {
        story: '다양한 색상의 Checkmark입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    padding: '16px'
  }}>
      {['#3b82f6', '#10b981', '#ef4444', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4'].map(color => <div key={color} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '6px'
    }}>
          <Checkmark checked color={color} />
          <div style={{
        width: '20px',
        height: '6px',
        borderRadius: '3px',
        background: color
      }} />
        </div>)}
    </div>
}`,...(I=(z=c.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var w,D,V;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '커스텀 체크박스 적용 예시',
  parameters: {
    docs: {
      description: {
        story: 'Checkmark를 이용해 구현한 커스텀 체크박스 목록입니다.'
      }
    }
  },
  render: () => {
    const items = ['디자인 시스템 구축', 'Storybook 설정', '컴포넌트 테스트', '문서 작성'];
    return <div style={{
      fontFamily: 'system-ui',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      padding: '16px'
    }}>
        {items.map((item, i) => <label key={item} style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        cursor: 'pointer',
        padding: '8px 12px',
        borderRadius: '8px',
        background: '#f8f9fa',
        border: '1px solid #e5e7eb'
      }}>
            <Checkmark checked={i < 2} color="#10b981" />
            <span style={{
          fontSize: '14px',
          color: '#374151',
          textDecoration: i < 2 ? 'line-through' : 'none',
          opacity: i < 2 ? 0.6 : 1
        }}>
              {item}
            </span>
          </label>)}
      </div>;
  }
}`,...(V=(D=p.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};const W=["Default","SizeVariants","VariantComparison","ColorVariants","InCustomCheckbox"];export{c as ColorVariants,i as Default,p as InCustomCheckbox,l as SizeVariants,d as VariantComparison,W as __namedExportsOrder,E as default};
