import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as ne}from"./reference-types-4ftiVeOu.js";import{r as s}from"./index-BxXVWNx3.js";import{c as se}from"./index-CkIaN0ex.js";import{c as r}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const de=se(["w-full text-foreground transition-colors","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1","disabled:cursor-not-allowed disabled:opacity-50","aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive"].join(" "),{variants:{variant:{outlined:"rounded-lg border border-input bg-card",filled:"rounded-t-lg border-0 border-b-2 border-input bg-muted",standard:"rounded-none border-0 border-b-2 border-input bg-transparent px-0.5"},size:{sm:"pb-2 pt-[18px] text-[13px]",md:"pb-2.5 pt-[22px] text-sm",lg:"pb-3 pt-[26px] text-base"}},compoundVariants:[{variant:["outlined","filled"],size:"sm",class:"px-3"},{variant:["outlined","filled"],size:"md",class:"px-3.5"},{variant:["outlined","filled"],size:"lg",class:"px-4"}],defaultVariants:{variant:"outlined",size:"md"}}),pe={outlined:{sm:"left-3",md:"left-3.5",lg:"left-4"},filled:{sm:"left-3",md:"left-3.5",lg:"left-4"},standard:{sm:"left-0.5",md:"left-0.5",lg:"left-0.5"}},ce={sm:"text-[13px]",md:"text-sm",lg:"text-base"},me={sm:"text-[11px]",md:"text-[11px]",lg:"text-xs"},t=s.forwardRef(({label:a,helperText:b,errorText:g,invalid:o=!1,size:i="md",variant:y="outlined",color:v,disabled:G,defaultValue:J,value:Q,onChange:h,onFocus:F,onBlur:j,id:X,className:Y,...Z},ee)=>{const ae=s.useId(),S=X??ae,[te,T]=s.useState(!1),[le,re]=s.useState(J??""),n=Q??le,oe=te||n!==""&&n!==void 0&&n!==null,L=o&&g?g:b,W=L?`${S}-description`:void 0,ie=v?{"--color-krds-primary-base":v,"--ring":v}:void 0;return e.jsxs("div",{"data-slot":"floating-label",style:ie,className:"relative inline-flex w-full flex-col",children:[e.jsxs("div",{className:"relative",children:[e.jsx("input",{ref:ee,id:S,disabled:G,value:n,"aria-invalid":o||void 0,"aria-describedby":W,onChange:l=>{re(l.target.value),h==null||h(l)},onFocus:l=>{T(!0),F==null||F(l)},onBlur:l=>{T(!1),j==null||j(l)},className:r(de({variant:y,size:i}),Y),...Z}),e.jsx("label",{htmlFor:S,className:r("pointer-events-none absolute transition-all duration-200",pe[y][i],oe?r(me[i],"font-semibold",o?"text-destructive":"text-krds-primary-base",y==="outlined"?"-top-2.5 bg-card px-1":"top-1"):r(ce[i],"top-1/2 -translate-y-1/2 font-normal text-muted-foreground")),children:a})]}),L&&e.jsx("span",{id:W,className:r("mt-1 pl-0.5 text-xs",o&&g?"text-destructive":"text-muted-foreground"),children:L})]})});t.displayName="FloatingLabel";t.__docgenInfo={description:"",methods:[],displayName:"FloatingLabel",props:{label:{required:!0,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},errorText:{required:!1,tsType:{name:"string"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'outlined' | 'filled' | 'standard'",elements:[{name:"literal",value:"'outlined'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'standard'"}]},description:"",defaultValue:{value:"'outlined'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"지정 시 포커스/플로팅 라벨 강조색을 오버라이드. 미지정 시 KRDS primary 토큰"}},composes:["Omit"]};const xe=ne([{library:"Bootstrap",component:"Floating labels",url:"https://getbootstrap.com/docs/5.3/forms/floating-labels/",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"Floating Label",url:"https://flowbite.com/docs/forms/floating-label/",usedFor:["comparison"],relation:"compared"},{library:"Mantine UI",component:"Input with floating label",url:"https://ui.mantine.dev/category/inputs/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."}]),he={title:"Molecules/Forms/FloatingLabel",component:t,tags:["autodocs","ref:flowbite","ref:bootstrap","ref:mantine-ui"],parameters:{references:xe,docs:{description:{component:"\n## FloatingLabel\n\n입력 포커스 시 레이블이 위로 떠오르는 플로팅 레이블 인풋 컴포넌트입니다.\nMaterial Design 스타일의 애니메이션 레이블로, placeholder와 label을 하나로 통합하여 공간 효율을 높입니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `label` | `string` | - | 플로팅 레이블 텍스트 |\n| `helperText` | `string` | - | 도움말 텍스트 |\n| `errorText` | `string` | - | 오류 메시지 |\n| `invalid` | `boolean` | `false` | 오류 상태 |\n| `size` | `'sm'\\|'md'\\|'lg'` | `'md'` | 크기 |\n| `variant` | `'outlined'\\|'filled'\\|'standard'` | `'outlined'` | 스타일 |\n| `color` | `string` | `'#3b82f6'` | 포커스 색상 |\n        "}}},argTypes:{size:{control:"select",options:["sm","md","lg"],table:{category:"Appearance"}},variant:{control:"select",options:["outlined","filled","standard"],table:{category:"Appearance"}},color:{control:"color",table:{category:"Appearance"}},invalid:{control:"boolean",table:{category:"State"}},disabled:{control:"boolean",table:{category:"State"}},label:{control:"text",table:{category:"Content"}},helperText:{control:"text",table:{category:"Content"}},errorText:{control:"text",table:{category:"Content"}}},args:{label:"이름",size:"md",variant:"outlined",color:"#3b82f6",invalid:!1,disabled:!1}},d={name:"기본",render:a=>e.jsx("div",{style:{padding:"32px",maxWidth:"300px",fontFamily:"system-ui"},children:e.jsx(t,{...a})})},p={name:"변형 비교",parameters:{docs:{description:{story:"outlined, filled, standard 세 가지 변형을 비교합니다."}}},render:()=>e.jsx("div",{style:{padding:"32px",display:"flex",flexDirection:"column",gap:"32px",maxWidth:"320px",fontFamily:"system-ui"},children:["outlined","filled","standard"].map(a=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"8px"},children:a}),e.jsx(t,{label:"이메일 주소",variant:a})]},a))})},c={name:"크기 변형",parameters:{docs:{description:{story:"sm, md, lg 크기 비교입니다."}}},render:()=>e.jsx("div",{style:{padding:"32px",display:"flex",flexDirection:"column",gap:"32px",maxWidth:"320px",fontFamily:"system-ui"},children:["sm","md","lg"].map(a=>e.jsx(t,{label:`${a} 크기 입력`,size:a},a))})},m={name:"색상 변형",parameters:{docs:{description:{story:"포커스 색상을 다양하게 적용한 예시입니다."}}},render:()=>e.jsx("div",{style:{padding:"32px",display:"flex",flexDirection:"column",gap:"32px",maxWidth:"320px",fontFamily:"system-ui"},children:[{color:"#3b82f6",label:"이름 (파란색)"},{color:"#10b981",label:"이메일 (초록색)"},{color:"#8b5cf6",label:"전화번호 (보라색)"},{color:"#f59e0b",label:"주소 (노란색)"}].map(({color:a,label:b})=>e.jsx(t,{label:b,color:a},a))})},x={name:"도움말 및 오류",parameters:{docs:{description:{story:"도움말 텍스트와 오류 상태를 보여줍니다."}}},render:()=>e.jsxs("div",{style:{padding:"32px",display:"flex",flexDirection:"column",gap:"32px",maxWidth:"320px",fontFamily:"system-ui"},children:[e.jsx(t,{label:"비밀번호",type:"password",helperText:"8자 이상, 숫자 포함"}),e.jsx(t,{label:"이메일",defaultValue:"invalid-email",invalid:!0,errorText:"올바른 이메일 형식이 아닙니다."}),e.jsx(t,{label:"사용자 이름",defaultValue:"john_doe",helperText:"3~20자, 영문/숫자만 가능"})]})},u={name:"비활성화",parameters:{docs:{description:{story:"비활성화 상태의 FloatingLabel입니다."}}},render:()=>e.jsxs("div",{style:{padding:"32px",display:"flex",flexDirection:"column",gap:"32px",maxWidth:"320px",fontFamily:"system-ui"},children:[e.jsx(t,{label:"비활성화 (비어있음)",disabled:!0}),e.jsx(t,{label:"비활성화 (값 있음)",defaultValue:"홍길동",disabled:!0})]})},f={name:"로그인 폼",parameters:{docs:{description:{story:"FloatingLabel을 사용한 로그인 폼 예시입니다."}}},render:()=>e.jsx("div",{style:{padding:"32px",maxWidth:"360px",fontFamily:"system-ui"},children:e.jsxs("div",{style:{background:"#fff",border:"1px solid #e5e7eb",borderRadius:"16px",padding:"32px",boxShadow:"0 4px 24px rgba(0,0,0,0.06)"},children:[e.jsx("h2",{style:{margin:"0 0 24px",fontSize:"22px",fontWeight:800,color:"#111"},children:"로그인"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(t,{label:"이메일",type:"email",color:"#3b82f6"}),e.jsx(t,{label:"비밀번호",type:"password",color:"#3b82f6",helperText:"비밀번호를 잊으셨나요?"})]}),e.jsx("button",{style:{marginTop:"28px",width:"100%",padding:"14px",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"10px",fontSize:"15px",fontWeight:700,cursor:"pointer"},children:"로그인"}),e.jsxs("p",{style:{textAlign:"center",marginTop:"16px",fontSize:"13px",color:"#6b7280"},children:["계정이 없으신가요? ",e.jsx("a",{href:"#",style:{color:"#3b82f6",fontWeight:600},children:"회원가입"})]})]})})};var z,V,D;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '기본',
  render: args => <div style={{
    padding: '32px',
    maxWidth: '300px',
    fontFamily: 'system-ui'
  }}>
      <FloatingLabel {...args} />
    </div>
}`,...(D=(V=d.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var w,k,R;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '변형 비교',
  parameters: {
    docs: {
      description: {
        story: 'outlined, filled, standard 세 가지 변형을 비교합니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    maxWidth: '320px',
    fontFamily: 'system-ui'
  }}>
      {(['outlined', 'filled', 'standard'] as const).map(variant => <div key={variant}>
          <div style={{
        fontSize: '12px',
        color: '#9ca3af',
        marginBottom: '8px'
      }}>{variant}</div>
          <FloatingLabel label="이메일 주소" variant={variant} />
        </div>)}
    </div>
}`,...(R=(k=p.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var I,q,A;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '크기 변형',
  parameters: {
    docs: {
      description: {
        story: 'sm, md, lg 크기 비교입니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    maxWidth: '320px',
    fontFamily: 'system-ui'
  }}>
      {(['sm', 'md', 'lg'] as const).map(size => <FloatingLabel key={size} label={\`\${size} 크기 입력\`} size={size} />)}
    </div>
}`,...(A=(q=c.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var N,_,E;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '색상 변형',
  parameters: {
    docs: {
      description: {
        story: '포커스 색상을 다양하게 적용한 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    maxWidth: '320px',
    fontFamily: 'system-ui'
  }}>
      {[{
      color: '#3b82f6',
      label: '이름 (파란색)'
    }, {
      color: '#10b981',
      label: '이메일 (초록색)'
    }, {
      color: '#8b5cf6',
      label: '전화번호 (보라색)'
    }, {
      color: '#f59e0b',
      label: '주소 (노란색)'
    }].map(({
      color,
      label
    }) => <FloatingLabel key={color} label={label} color={color} />)}
    </div>
}`,...(E=(_=m.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var C,M,$;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '도움말 및 오류',
  parameters: {
    docs: {
      description: {
        story: '도움말 텍스트와 오류 상태를 보여줍니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    maxWidth: '320px',
    fontFamily: 'system-ui'
  }}>
      <FloatingLabel label="비밀번호" type="password" helperText="8자 이상, 숫자 포함" />
      <FloatingLabel label="이메일" defaultValue="invalid-email" invalid errorText="올바른 이메일 형식이 아닙니다." />
      <FloatingLabel label="사용자 이름" defaultValue="john_doe" helperText="3~20자, 영문/숫자만 가능" />
    </div>
}`,...($=(M=x.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var H,O,P;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '비활성화',
  parameters: {
    docs: {
      description: {
        story: '비활성화 상태의 FloatingLabel입니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    maxWidth: '320px',
    fontFamily: 'system-ui'
  }}>
      <FloatingLabel label="비활성화 (비어있음)" disabled />
      <FloatingLabel label="비활성화 (값 있음)" defaultValue="홍길동" disabled />
    </div>
}`,...(P=(O=u.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var U,K,B;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: '로그인 폼',
  parameters: {
    docs: {
      description: {
        story: 'FloatingLabel을 사용한 로그인 폼 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '32px',
    maxWidth: '360px',
    fontFamily: 'system-ui'
  }}>
      <div style={{
      background: '#fff',
      border: '1px solid #e5e7eb',
      borderRadius: '16px',
      padding: '32px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.06)'
    }}>
        <h2 style={{
        margin: '0 0 24px',
        fontSize: '22px',
        fontWeight: 800,
        color: '#111'
      }}>로그인</h2>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <FloatingLabel label="이메일" type="email" color="#3b82f6" />
          <FloatingLabel label="비밀번호" type="password" color="#3b82f6" helperText="비밀번호를 잊으셨나요?" />
        </div>
        <button style={{
        marginTop: '28px',
        width: '100%',
        padding: '14px',
        background: '#3b82f6',
        color: '#fff',
        border: 'none',
        borderRadius: '10px',
        fontSize: '15px',
        fontWeight: 700,
        cursor: 'pointer'
      }}>로그인</button>
        <p style={{
        textAlign: 'center',
        marginTop: '16px',
        fontSize: '13px',
        color: '#6b7280'
      }}>계정이 없으신가요? <a href="#" style={{
          color: '#3b82f6',
          fontWeight: 600
        }}>회원가입</a></p>
      </div>
    </div>
}`,...(B=(K=f.parameters)==null?void 0:K.docs)==null?void 0:B.source}}};const Fe=["Default","VariantComparison","SizeVariants","ColorVariants","WithHelperAndError","Disabled","LoginForm"];export{m as ColorVariants,d as Default,u as Disabled,f as LoginForm,c as SizeVariants,p as VariantComparison,x as WithHelperAndError,Fe as __namedExportsOrder,he as default};
