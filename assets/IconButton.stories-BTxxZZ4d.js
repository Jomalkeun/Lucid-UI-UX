import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as U}from"./reference-types-4ftiVeOu.js";import{r as G}from"./index-BxXVWNx3.js";import{c as H}from"./index-CkIaN0ex.js";import{c as J}from"./utils-DCADjnpI.js";import{L as M}from"./loader-circle-Db56uVXG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-Ct87QT5c.js";const Q=H(["inline-flex shrink-0 select-none items-center justify-center border-2 transition-all duration-150","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1","disabled:cursor-not-allowed disabled:opacity-45"].join(" "),{variants:{variant:{solid:"border-transparent bg-krds-primary-50 text-primary-foreground hover:bg-krds-primary-60 active:bg-krds-primary-70",outline:"border-krds-primary-50 bg-transparent text-krds-primary-base hover:bg-krds-primary-5 active:bg-krds-primary-10",ghost:"border-transparent bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground active:bg-krds-gray-20",subtle:"border-transparent bg-krds-primary-10 text-krds-primary-base hover:bg-krds-primary-20 active:bg-krds-primary-30"},size:{xs:"size-6 text-xs",sm:"size-8 text-sm",md:"size-10 text-lg",lg:"size-12 text-xl",xl:"size-14 text-2xl"},rounded:{sm:"rounded",md:"rounded-lg",lg:"rounded-xl",full:"rounded-full"}},defaultVariants:{variant:"ghost",size:"md",rounded:"md"}}),a=G.forwardRef(({icon:o,"aria-label":r,size:i,variant:q,color:m,rounded:D,disabled:N=!1,loading:x=!1,title:_,className:E,style:L,type:P="button",...O},$)=>{const K=m?{"--color-krds-primary-50":m,"--color-krds-primary-base":m}:void 0;return e.jsx("button",{ref:$,"data-slot":"icon-button","aria-label":r,"aria-busy":x||void 0,title:_??r,type:P,disabled:N||x,style:{...K,...L},className:J(Q({variant:q,size:i,rounded:D}),E),...O,children:x?e.jsx(M,{"aria-hidden":"true",className:"size-[1em] animate-spin"}):o})});a.displayName="IconButton";a.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{icon:{required:!0,tsType:{name:"string"},description:""},"aria-label":{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:"지정 시 강조색을 오버라이드. 미지정 시 KRDS primary 토큰"},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:"'button'",computed:!1},required:!1}},composes:["Omit","VariantProps"]};const X=U([{library:"Chakra UI",component:"Icon Button",url:"https://www.chakra-ui.com/docs/components/icon-button",usedFor:["comparison"],relation:"compared"}]),te={title:"Atoms/Inputs/IconButton",component:a,tags:["autodocs","ref:chakra-ui","ref:mui"],parameters:{references:X,docs:{description:{component:"\n## IconButton\n\n텍스트 없이 아이콘만으로 구성된 버튼 컴포넌트입니다.\nButton의 모든 variant와 size를 지원하며, 접근성을 위해 `aria-label`이 필수입니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `icon` | `string` | - | 버튼 아이콘 |\n| `aria-label` | `string` | - | 접근성 레이블 (필수) |\n| `size` | `'xs'\\|'sm'\\|'md'\\|'lg'\\|'xl'` | `'md'` | 크기 |\n| `variant` | `'solid'\\|'outline'\\|'ghost'\\|'subtle'` | `'ghost'` | 스타일 |\n| `color` | `string` | `'#3b82f6'` | 색상 |\n| `rounded` | `'sm'\\|'md'\\|'lg'\\|'full'` | `'md'` | 모서리 |\n| `disabled` | `boolean` | `false` | 비활성화 |\n| `loading` | `boolean` | `false` | 로딩 상태 |\n        "}}},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"],table:{category:"Appearance"}},variant:{control:"select",options:["solid","outline","ghost","subtle"],table:{category:"Appearance"}},color:{control:"color",table:{category:"Appearance"}},rounded:{control:"select",options:["sm","md","lg","full"],table:{category:"Appearance"}},disabled:{control:"boolean",table:{category:"State"}},loading:{control:"boolean",table:{category:"State"}},icon:{control:"text",table:{category:"Content"}}},args:{icon:"❤️","aria-label":"좋아요",size:"md",variant:"ghost",color:"#3b82f6",rounded:"md",disabled:!1,loading:!1}},l={name:"기본",render:o=>e.jsx("div",{style:{padding:"24px",fontFamily:"system-ui"},children:e.jsx(a,{...o,onClick:()=>alert(`${o["aria-label"]} 클릭`)})})},t={name:"크기 변형",parameters:{docs:{description:{story:"xs ~ xl 크기 비교입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"16px",alignItems:"center",padding:"24px",flexWrap:"wrap"},children:["xs","sm","md","lg","xl"].map(o=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(a,{icon:"🔔","aria-label":"알림",size:o,variant:"solid",color:"#3b82f6"}),e.jsx("div",{style:{fontSize:"11px",color:"#9ca3af",marginTop:"4px",fontFamily:"system-ui"},children:o})]},o))})},s={name:"변형 비교",parameters:{docs:{description:{story:"solid, outline, ghost, subtle 변형 비교입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"12px",alignItems:"center",padding:"24px",flexWrap:"wrap"},children:["solid","outline","ghost","subtle"].map(o=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(a,{icon:"✉️","aria-label":"메일",variant:o,color:"#8b5cf6",size:"lg"}),e.jsx("div",{style:{fontSize:"11px",color:"#9ca3af",marginTop:"6px",fontFamily:"system-ui"},children:o})]},o))})},n={name:"모서리 변형",parameters:{docs:{description:{story:"다양한 모서리 스타일의 IconButton입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"12px",alignItems:"center",padding:"24px",flexWrap:"wrap"},children:["sm","md","lg","full"].map(o=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(a,{icon:"⚙️","aria-label":"설정",rounded:o,variant:"solid",color:"#10b981",size:"lg"}),e.jsx("div",{style:{fontSize:"11px",color:"#9ca3af",marginTop:"6px",fontFamily:"system-ui"},children:o})]},o))})},c={name:"색상 변형",parameters:{docs:{description:{story:"다양한 색상의 IconButton입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"10px",alignItems:"center",padding:"24px",flexWrap:"wrap"},children:[{color:"#3b82f6",icon:"🔗",label:"링크"},{color:"#10b981",icon:"✅",label:"완료"},{color:"#ef4444",icon:"🗑️",label:"삭제"},{color:"#f59e0b",icon:"⭐",label:"즐겨찾기"},{color:"#8b5cf6",icon:"📌",label:"고정"},{color:"#ec4899",icon:"❤️",label:"좋아요"}].map(({color:o,icon:r,label:i})=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(a,{icon:r,"aria-label":i,color:o,variant:"solid",rounded:"full"}),e.jsx("div",{style:{fontSize:"10px",color:"#9ca3af",marginTop:"4px",fontFamily:"system-ui"},children:i})]},i))})},d={name:"툴바 예시",parameters:{docs:{description:{story:"텍스트 에디터 스타일의 아이콘 버튼 툴바입니다."}}},render:()=>e.jsx("div",{style:{padding:"24px",fontFamily:"system-ui"},children:e.jsx("div",{style:{display:"inline-flex",gap:"2px",padding:"4px",background:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"10px",flexWrap:"wrap"},children:[{icon:"⬆️",label:"굵게",color:"#374151"},{icon:"↗️",label:"기울임",color:"#374151"},{icon:"⬇️",label:"밑줄",color:"#374151"},{icon:"✂️",label:"가위",color:"#374151"},{icon:"📋",label:"붙여넣기",color:"#374151"},{icon:"🔗",label:"링크",color:"#3b82f6"},{icon:"🖼️",label:"이미지",color:"#3b82f6"},{icon:"↩️",label:"실행취소",color:"#374151"},{icon:"↪️",label:"다시실행",color:"#374151"}].map(({icon:o,label:r,color:i})=>e.jsx(a,{icon:o,"aria-label":r,variant:"ghost",color:i,size:"sm"},r))})})},p={name:"로딩 / 비활성화",parameters:{docs:{description:{story:"로딩과 비활성화 상태의 IconButton입니다."}}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",padding:"24px",fontFamily:"system-ui"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(a,{icon:"✉️","aria-label":"메일",variant:"solid",color:"#3b82f6",size:"lg"}),e.jsx("div",{style:{fontSize:"11px",color:"#9ca3af",marginTop:"6px"},children:"기본"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(a,{icon:"✉️","aria-label":"메일",variant:"solid",color:"#3b82f6",size:"lg",loading:!0}),e.jsx("div",{style:{fontSize:"11px",color:"#9ca3af",marginTop:"6px"},children:"로딩"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(a,{icon:"✉️","aria-label":"메일",variant:"solid",color:"#3b82f6",size:"lg",disabled:!0}),e.jsx("div",{style:{fontSize:"11px",color:"#9ca3af",marginTop:"6px"},children:"비활성화"})]})]})};var b,u,g;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '기본',
  render: args => <div style={{
    padding: '24px',
    fontFamily: 'system-ui'
  }}>
      <IconButton {...args} onClick={() => alert(\`\${args['aria-label']} 클릭\`)} />
    </div>
}`,...(g=(u=l.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,y,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '크기 변형',
  parameters: {
    docs: {
      description: {
        story: 'xs ~ xl 크기 비교입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    padding: '24px',
    flexWrap: 'wrap'
  }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <div key={size} style={{
      textAlign: 'center'
    }}>
          <IconButton icon="🔔" aria-label="알림" size={size} variant="solid" color="#3b82f6" />
          <div style={{
        fontSize: '11px',
        color: '#9ca3af',
        marginTop: '4px',
        fontFamily: 'system-ui'
      }}>{size}</div>
        </div>)}
    </div>
}`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var h,z,j;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '변형 비교',
  parameters: {
    docs: {
      description: {
        story: 'solid, outline, ghost, subtle 변형 비교입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    padding: '24px',
    flexWrap: 'wrap'
  }}>
      {(['solid', 'outline', 'ghost', 'subtle'] as const).map(variant => <div key={variant} style={{
      textAlign: 'center'
    }}>
          <IconButton icon="✉️" aria-label="메일" variant={variant} color="#8b5cf6" size="lg" />
          <div style={{
        fontSize: '11px',
        color: '#9ca3af',
        marginTop: '6px',
        fontFamily: 'system-ui'
      }}>{variant}</div>
        </div>)}
    </div>
}`,...(j=(z=s.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var I,k,S;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '모서리 변형',
  parameters: {
    docs: {
      description: {
        story: '다양한 모서리 스타일의 IconButton입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    padding: '24px',
    flexWrap: 'wrap'
  }}>
      {(['sm', 'md', 'lg', 'full'] as const).map(r => <div key={r} style={{
      textAlign: 'center'
    }}>
          <IconButton icon="⚙️" aria-label="설정" rounded={r} variant="solid" color="#10b981" size="lg" />
          <div style={{
        fontSize: '11px',
        color: '#9ca3af',
        marginTop: '6px',
        fontFamily: 'system-ui'
      }}>{r}</div>
        </div>)}
    </div>
}`,...(S=(k=n.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var B,T,A;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '색상 변형',
  parameters: {
    docs: {
      description: {
        story: '다양한 색상의 IconButton입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    padding: '24px',
    flexWrap: 'wrap'
  }}>
      {[{
      color: '#3b82f6',
      icon: '🔗',
      label: '링크'
    }, {
      color: '#10b981',
      icon: '✅',
      label: '완료'
    }, {
      color: '#ef4444',
      icon: '🗑️',
      label: '삭제'
    }, {
      color: '#f59e0b',
      icon: '⭐',
      label: '즐겨찾기'
    }, {
      color: '#8b5cf6',
      icon: '📌',
      label: '고정'
    }, {
      color: '#ec4899',
      icon: '❤️',
      label: '좋아요'
    }].map(({
      color,
      icon,
      label
    }) => <div key={label} style={{
      textAlign: 'center'
    }}>
          <IconButton icon={icon} aria-label={label} color={color} variant="solid" rounded="full" />
          <div style={{
        fontSize: '10px',
        color: '#9ca3af',
        marginTop: '4px',
        fontFamily: 'system-ui'
      }}>{label}</div>
        </div>)}
    </div>
}`,...(A=(T=c.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var w,F,V;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '툴바 예시',
  parameters: {
    docs: {
      description: {
        story: '텍스트 에디터 스타일의 아이콘 버튼 툴바입니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '24px',
    fontFamily: 'system-ui'
  }}>
      <div style={{
      display: 'inline-flex',
      gap: '2px',
      padding: '4px',
      background: '#f9fafb',
      border: '1px solid #e5e7eb',
      borderRadius: '10px',
      flexWrap: 'wrap'
    }}>
        {[{
        icon: '⬆️',
        label: '굵게',
        color: '#374151'
      }, {
        icon: '↗️',
        label: '기울임',
        color: '#374151'
      }, {
        icon: '⬇️',
        label: '밑줄',
        color: '#374151'
      }, {
        icon: '✂️',
        label: '가위',
        color: '#374151'
      }, {
        icon: '📋',
        label: '붙여넣기',
        color: '#374151'
      }, {
        icon: '🔗',
        label: '링크',
        color: '#3b82f6'
      }, {
        icon: '🖼️',
        label: '이미지',
        color: '#3b82f6'
      }, {
        icon: '↩️',
        label: '실행취소',
        color: '#374151'
      }, {
        icon: '↪️',
        label: '다시실행',
        color: '#374151'
      }].map(({
        icon,
        label,
        color
      }) => <IconButton key={label} icon={icon} aria-label={label} variant="ghost" color={color} size="sm" />)}
      </div>
    </div>
}`,...(V=(F=d.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var W,C,R;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '로딩 / 비활성화',
  parameters: {
    docs: {
      description: {
        story: '로딩과 비활성화 상태의 IconButton입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    padding: '24px',
    fontFamily: 'system-ui'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <IconButton icon="✉️" aria-label="메일" variant="solid" color="#3b82f6" size="lg" />
        <div style={{
        fontSize: '11px',
        color: '#9ca3af',
        marginTop: '6px'
      }}>기본</div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <IconButton icon="✉️" aria-label="메일" variant="solid" color="#3b82f6" size="lg" loading />
        <div style={{
        fontSize: '11px',
        color: '#9ca3af',
        marginTop: '6px'
      }}>로딩</div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <IconButton icon="✉️" aria-label="메일" variant="solid" color="#3b82f6" size="lg" disabled />
        <div style={{
        fontSize: '11px',
        color: '#9ca3af',
        marginTop: '6px'
      }}>비활성화</div>
      </div>
    </div>
}`,...(R=(C=p.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};const se=["Default","SizeVariants","VariantComparison","RoundedVariants","ColorVariants","Toolbar","LoadingAndDisabled"];export{c as ColorVariants,l as Default,p as LoadingAndDisabled,n as RoundedVariants,t as SizeVariants,d as Toolbar,s as VariantComparison,se as __namedExportsOrder,te as default};
