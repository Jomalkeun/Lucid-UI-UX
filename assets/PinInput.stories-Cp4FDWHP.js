import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-BxXVWNx3.js";import{d as he}from"./reference-types-4ftiVeOu.js";import{c as Se}from"./index-CkIaN0ex.js";import{c as w}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const ze=Se(["text-center font-bold text-foreground caret-krds-primary-50 transition-all","placeholder:text-muted-foreground","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring","disabled:cursor-not-allowed disabled:opacity-50","aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/20"].join(" "),{variants:{size:{sm:"size-8 text-sm",md:"size-10 text-lg",lg:"size-[52px] text-[22px]"},variant:{outline:"rounded-lg border border-input bg-card",filled:"rounded-lg border border-transparent bg-muted",flushed:"rounded-none border-0 border-b-2 border-input bg-transparent"},active:{true:"",false:""}},compoundVariants:[{variant:"outline",active:!0,class:"border-krds-primary-50 ring-2 ring-krds-primary-50/20"},{variant:"filled",active:!0,class:"ring-2 ring-krds-primary-50/20"},{variant:"flushed",active:!0,class:"border-krds-primary-50"}],defaultVariants:{size:"md",variant:"outline",active:!1}}),l=u.forwardRef(({length:r=6,value:i,type:s="number",mask:f=!1,placeholder:P="○",disabled:k=!1,invalid:ie=!1,size:oe="md",variant:le="outline",color:T,otp:ce=!1,onChange:F,onComplete:V,className:pe,style:de},ue)=>{const[me,fe]=u.useState(""),ye=i??me,m=Array.from({length:r},(t,n)=>ye[n]??""),p=u.useRef([]),C=t=>s==="number"?/^\d$/.test(t):s==="alphabetic"?/^[a-zA-Z]$/.test(t):/^[a-zA-Z0-9]$/.test(t),y=t=>{const n=t.join("");fe(n),F==null||F(n),n.length===r&&(V==null||V(n))},xe=(t,n)=>{var o;const a=n.slice(-1);if(!C(a)&&a!=="")return;const c=[...m];c[t]=a.toUpperCase(),y(c),a&&t<r-1&&((o=p.current[t+1])==null||o.focus())},ge=(t,n)=>{var a,c,o;if(n.key==="Backspace"){if(m[t]){const d=[...m];d[t]="",y(d)}else if(t>0){const d=[...m];d[t-1]="",y(d),(a=p.current[t-1])==null||a.focus()}}else n.key==="ArrowLeft"&&t>0?(c=p.current[t-1])==null||c.focus():n.key==="ArrowRight"&&t<r-1&&((o=p.current[t+1])==null||o.focus())},ve=t=>{var o;t.preventDefault();const n=t.clipboardData.getData("text").replace(/[^a-zA-Z0-9]/g,"").toUpperCase(),a=Array.from({length:r},(d,D)=>(C(n[D]??"")?n[D]:"")??"");y(a);const c=Math.min(n.length-1,r-1);(o=p.current[c])==null||o.focus()},be=T?{"--color-krds-primary-50":T,"--ring":T}:void 0;return e.jsx("div",{ref:ue,"data-slot":"pin-input",className:w("inline-flex gap-2",pe),style:{...be,...de},children:m.map((t,n)=>e.jsx("input",{ref:a=>{p.current[n]=a},type:f?"password":"text",inputMode:s==="number"?"numeric":"text",autoComplete:ce?"one-time-code":"off",maxLength:1,value:t,placeholder:P,disabled:k,"aria-invalid":ie||void 0,"aria-label":`${n+1}번째 자리`,onChange:a=>xe(n,a.target.value),onKeyDown:a=>ge(n,a),onPaste:ve,onFocus:a=>a.target.select(),className:w(ze({size:oe,variant:le,active:!!t}))},n))})});l.displayName="PinInput";l.__docgenInfo={description:"",methods:[],displayName:"PinInput",props:{length:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"6",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'number' | 'alphanumeric' | 'alphabetic'",elements:[{name:"literal",value:"'number'"},{name:"literal",value:"'alphanumeric'"},{name:"literal",value:"'alphabetic'"}]},description:"",defaultValue:{value:"'number'",computed:!1}},mask:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'○'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'outline' | 'filled' | 'flushed'",elements:[{name:"literal",value:"'outline'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'flushed'"}]},description:"",defaultValue:{value:"'outline'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"지정 시 활성 셀 강조색을 오버라이드. 미지정 시 KRDS primary 토큰"},otp:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const je=he([{library:"Ark UI",component:"Pin Input",url:"https://ark-ui.com/docs/components/pin-input",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Chakra UI",component:"Pin Input",url:"https://www.chakra-ui.com/docs/components/pin-input",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"OTP Field",url:"https://base-ui.com/react/components/otp-field",usedFor:["comparison"],relation:"compared"}]),De={title:"Molecules/Forms/PinInput",component:l,tags:["autodocs","ref:chakra-ui","ref:shadcn-ui","ref:ark-ui","ref:vuetify","ref:mui","ref:base-ui"],parameters:{references:je,docs:{description:{component:"\n## PinInput\n\nOTP, PIN 코드 등 고정 자릿수 입력을 위한 컴포넌트입니다.\n각 자리별 독립 입력 필드로 구성되며, 입력 완료 시 자동으로 다음 필드로 포커스가 이동합니다.\n붙여넣기로 전체 코드를 한 번에 입력할 수 있습니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `length` | `number` | `6` | 자릿수 |\n| `type` | `'number'\\|'alphanumeric'\\|'alphabetic'` | `'number'` | 입력 타입 |\n| `mask` | `boolean` | `false` | 마스크 (비밀번호 스타일) |\n| `size` | `'sm'\\|'md'\\|'lg'` | `'md'` | 크기 |\n| `variant` | `'outline'\\|'filled'\\|'flushed'` | `'outline'` | 스타일 변형 |\n| `otp` | `boolean` | `false` | OTP 자동완성 힌트 |\n| `onComplete` | `(value: string) => void` | - | 입력 완료 콜백 |\n        "}}},argTypes:{length:{control:{type:"range",min:3,max:8},table:{category:"Input"}},type:{control:"select",options:["number","alphanumeric","alphabetic"],table:{category:"Input"}},mask:{control:"boolean",table:{category:"Input"}},disabled:{control:"boolean",table:{category:"State"}},invalid:{control:"boolean",table:{category:"State"}},size:{control:"select",options:["sm","md","lg"],table:{category:"Appearance"}},variant:{control:"select",options:["outline","filled","flushed"],table:{category:"Appearance"}},color:{control:"color",table:{category:"Appearance"}}},args:{length:6,type:"number",mask:!1,disabled:!1,invalid:!1,size:"md",variant:"outline",color:"#3b82f6"}},x={name:"기본 OTP 입력"};function Ie(){const[r,i]=u.useState(""),[s,f]=u.useState("idle"),P=k=>{f("verifying"),setTimeout(()=>f(k==="123456"?"success":"error"),1500)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"16px",fontFamily:"system-ui"},children:[e.jsx("div",{style:{fontSize:"14px",color:"#6b7280"},children:"인증 코드를 입력하세요 (123456으로 테스트)"}),e.jsx(l,{otp:!0,onChange:i,onComplete:P,invalid:s==="error",color:s==="success"?"#10b981":s==="error"?"#ef4444":"#3b82f6"}),s==="verifying"&&e.jsx("div",{style:{color:"#9ca3af",fontSize:"13px"},children:"확인 중..."}),s==="success"&&e.jsx("div",{style:{color:"#10b981",fontSize:"13px",fontWeight:600},children:"✓ 인증 완료!"}),s==="error"&&e.jsx("div",{style:{color:"#ef4444",fontSize:"13px"},children:"✗ 코드가 올바르지 않습니다"}),e.jsxs("div",{style:{fontSize:"12px",color:"#d1d5db"},children:["입력값: ",r||"-"]})]})}const g={name:"OTP 인증",parameters:{docs:{description:{story:'6자리 인증 코드를 입력하면 자동으로 검증합니다. "123456"이 정답입니다.'}}},render:()=>e.jsx(Ie,{})},v={name:"크기 변형",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",fontFamily:"system-ui"},children:["sm","md","lg"].map(r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("div",{style:{minWidth:"40px",fontSize:"12px",color:"#9ca3af"},children:r}),e.jsx(l,{length:4,size:r})]},r))})},b={name:"변형 비교",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",fontFamily:"system-ui"},children:["outline","filled","flushed"].map(r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("div",{style:{minWidth:"60px",fontSize:"12px",color:"#9ca3af"},children:r}),e.jsx(l,{length:4,variant:r})]},r))})},h={name:"마스크 (PIN)",parameters:{docs:{description:{story:"mask=true로 PIN 코드처럼 숨깁니다."}}},args:{mask:!0,length:4,placeholder:"•"}},S={name:"영숫자 입력",parameters:{docs:{description:{story:"숫자 외 영문도 입력할 수 있는 변형입니다."}}},args:{type:"alphanumeric",length:6,color:"#8b5cf6"}},z={name:"색상 변형",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[["#3b82f6","블루"],["#10b981","그린"],["#8b5cf6","퍼플"],["#ef4444","레드"]].map(([r,i])=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",fontFamily:"system-ui"},children:[e.jsx("span",{style:{minWidth:"40px",fontSize:"12px",color:"#9ca3af"},children:i}),e.jsx(l,{length:4,color:r})]},i))})},j={name:"오류 상태",args:{invalid:!0,color:"#ef4444"}},I={name:"보안 코드 폼",parameters:{docs:{description:{story:"결제 시 보안 코드를 입력하는 UI 예시입니다."}}},render:()=>{function r(){const[i,s]=u.useState("pin");return e.jsx("div",{style:{maxWidth:"320px",padding:"24px",border:"1px solid #e5e7eb",borderRadius:"12px",fontFamily:"system-ui",textAlign:"center"},children:i==="pin"?e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{fontSize:"32px",marginBottom:"12px"},children:"🔐"}),e.jsx("h3",{style:{margin:"0 0 6px",fontSize:"18px",fontWeight:700},children:"결제 확인"}),e.jsx("p",{style:{margin:"0 0 20px",fontSize:"13px",color:"#9ca3af"},children:"6자리 보안 코드를 입력하세요"}),e.jsx(l,{length:6,mask:!0,otp:!0,size:"md",color:"#3b82f6",onComplete:()=>s("success"),style:{justifyContent:"center"}})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{fontSize:"32px",marginBottom:"12px"},children:"✅"}),e.jsx("h3",{style:{margin:"0 0 6px",fontSize:"18px",fontWeight:700,color:"#10b981"},children:"결제 완료!"}),e.jsx("p",{style:{margin:"0",fontSize:"13px",color:"#9ca3af"},children:"인증이 성공했습니다"}),e.jsx("button",{onClick:()=>s("pin"),style:{marginTop:"16px",padding:"8px 20px",background:"#f3f4f6",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"13px"},children:"다시 시도"})]})})}return e.jsx(r,{})}};var q,A,R;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '기본 OTP 입력'
}`,...(R=(A=x.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var W,N,O;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'OTP 인증',
  parameters: {
    docs: {
      description: {
        story: '6자리 인증 코드를 입력하면 자동으로 검증합니다. "123456"이 정답입니다.'
      }
    }
  },
  render: () => <OTPDemo />
}`,...(O=(N=g.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var B,U,_;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '크기 변형',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    fontFamily: 'system-ui'
  }}>
      {(['sm', 'md', 'lg'] as const).map(size => <div key={size} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
          <div style={{
        minWidth: '40px',
        fontSize: '12px',
        color: '#9ca3af'
      }}>{size}</div>
          <PinInput length={4} size={size} />
        </div>)}
    </div>
}`,...(_=(U=v.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var M,$,E;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: '변형 비교',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    fontFamily: 'system-ui'
  }}>
      {(['outline', 'filled', 'flushed'] as const).map(variant => <div key={variant} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
          <div style={{
        minWidth: '60px',
        fontSize: '12px',
        color: '#9ca3af'
      }}>{variant}</div>
          <PinInput length={4} variant={variant} />
        </div>)}
    </div>
}`,...(E=($=b.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var K,Z,L;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: '마스크 (PIN)',
  parameters: {
    docs: {
      description: {
        story: 'mask=true로 PIN 코드처럼 숨깁니다.'
      }
    }
  },
  args: {
    mask: true,
    length: 4,
    placeholder: '•'
  }
}`,...(L=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:L.source}}};var G,H,J;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '영숫자 입력',
  parameters: {
    docs: {
      description: {
        story: '숫자 외 영문도 입력할 수 있는 변형입니다.'
      }
    }
  },
  args: {
    type: 'alphanumeric',
    length: 6,
    color: '#8b5cf6'
  }
}`,...(J=(H=S.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,X,Y;z.parameters={...z.parameters,docs:{...(Q=z.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: '색상 변형',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      {[['#3b82f6', '블루'], ['#10b981', '그린'], ['#8b5cf6', '퍼플'], ['#ef4444', '레드']].map(([color, label]) => <div key={label} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontFamily: 'system-ui'
    }}>
          <span style={{
        minWidth: '40px',
        fontSize: '12px',
        color: '#9ca3af'
      }}>{label}</span>
          <PinInput length={4} color={color} />
        </div>)}
    </div>
}`,...(Y=(X=z.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,te,ne;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: '오류 상태',
  args: {
    invalid: true,
    color: '#ef4444'
  }
}`,...(ne=(te=j.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,ae,se;I.parameters={...I.parameters,docs:{...(re=I.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: '보안 코드 폼',
  parameters: {
    docs: {
      description: {
        story: '결제 시 보안 코드를 입력하는 UI 예시입니다.'
      }
    }
  },
  render: () => {
    function PinForm() {
      const [step, setStep] = useState<'pin' | 'success'>('pin');
      return <div style={{
        maxWidth: '320px',
        padding: '24px',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        fontFamily: 'system-ui',
        textAlign: 'center'
      }}>
          {step === 'pin' ? <>
              <div style={{
            fontSize: '32px',
            marginBottom: '12px'
          }}>🔐</div>
              <h3 style={{
            margin: '0 0 6px',
            fontSize: '18px',
            fontWeight: 700
          }}>결제 확인</h3>
              <p style={{
            margin: '0 0 20px',
            fontSize: '13px',
            color: '#9ca3af'
          }}>6자리 보안 코드를 입력하세요</p>
              <PinInput length={6} mask otp size="md" color="#3b82f6" onComplete={() => setStep('success')} style={{
            justifyContent: 'center'
          }} />
            </> : <>
              <div style={{
            fontSize: '32px',
            marginBottom: '12px'
          }}>✅</div>
              <h3 style={{
            margin: '0 0 6px',
            fontSize: '18px',
            fontWeight: 700,
            color: '#10b981'
          }}>결제 완료!</h3>
              <p style={{
            margin: '0',
            fontSize: '13px',
            color: '#9ca3af'
          }}>인증이 성공했습니다</p>
              <button onClick={() => setStep('pin')} style={{
            marginTop: '16px',
            padding: '8px 20px',
            background: '#f3f4f6',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '13px'
          }}>다시 시도</button>
            </>}
        </div>;
    }
    return <PinForm />;
  }
}`,...(se=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};const we=["Default","OTPVerification","SizeVariants","VariantComparison","Masked","AlphaNumeric","ColorVariants","InvalidState","SecurityCodeForm"];export{S as AlphaNumeric,z as ColorVariants,x as Default,j as InvalidState,h as Masked,g as OTPVerification,I as SecurityCodeForm,v as SizeVariants,b as VariantComparison,we as __namedExportsOrder,De as default};
