import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-BxXVWNx3.js";import{d as Z}from"./reference-types-4ftiVeOu.js";import"./_commonjsHelpers-CqkleIqs.js";const c=[{code:"KR",dialCode:"+82",flag:"🇰🇷",name:"한국"},{code:"US",dialCode:"+1",flag:"🇺🇸",name:"United States"},{code:"JP",dialCode:"+81",flag:"🇯🇵",name:"日本"},{code:"CN",dialCode:"+86",flag:"🇨🇳",name:"中国"},{code:"GB",dialCode:"+44",flag:"🇬🇧",name:"United Kingdom"},{code:"DE",dialCode:"+49",flag:"🇩🇪",name:"Deutschland"},{code:"FR",dialCode:"+33",flag:"🇫🇷",name:"France"},{code:"AU",dialCode:"+61",flag:"🇦🇺",name:"Australia"},{code:"CA",dialCode:"+1",flag:"🇨🇦",name:"Canada"},{code:"IN",dialCode:"+91",flag:"🇮🇳",name:"India"},{code:"BR",dialCode:"+55",flag:"🇧🇷",name:"Brazil"},{code:"SG",dialCode:"+65",flag:"🇸🇬",name:"Singapore"}];function r({value:t,defaultCountry:s="KR",onChange:o,disabled:i=!1,placeholder:h,size:b="md",style:J}){const[d,_]=a.useState(()=>c.find(n=>n.code===s)??c[0]),[z,O]=a.useState(t??""),[$,S]=a.useState(!1),[l,C]=a.useState(""),v=a.useRef(null),M=l?c.filter(n=>n.name.toLowerCase().includes(l.toLowerCase())||n.dialCode.includes(l)):c;a.useEffect(()=>{const n=p=>{v.current&&!v.current.contains(p.target)&&S(!1)};return document.addEventListener("mousedown",n),()=>document.removeEventListener("mousedown",n)},[]);const H={sm:{height:"32px",fontSize:"13px",padding:"0 10px"},md:{height:"40px",fontSize:"14px",padding:"0 12px"},lg:{height:"48px",fontSize:"16px",padding:"0 16px"}},{height:j,fontSize:R,padding:Y}=H[b],Q=n=>{_(n),S(!1),C(""),o==null||o(z,n)},X=n=>{const p=n.replace(/[^\d\s\-()]/g,"");O(p),o==null||o(p,d)};return e.jsxs("div",{ref:v,style:{position:"relative",display:"inline-flex",width:"100%",...J},children:[e.jsxs("div",{style:{display:"flex",border:"1px solid #d1d5db",borderRadius:"8px",overflow:"visible",width:"100%",fontFamily:"system-ui"},children:[e.jsxs("button",{onClick:()=>{i||S(n=>!n)},disabled:i,style:{display:"flex",alignItems:"center",gap:"6px",padding:"0 10px",height:j,background:"#f9fafb",border:"none",borderRight:"1px solid #d1d5db",cursor:i?"not-allowed":"pointer",flexShrink:0,fontSize:R,borderRadius:"8px 0 0 8px"},children:[e.jsx("span",{style:{fontSize:"18px"},children:d.flag}),e.jsx("span",{style:{color:"#374151",fontWeight:600},children:d.dialCode}),e.jsx("span",{style:{fontSize:"10px",color:"#9ca3af"},children:"▼"})]}),e.jsx("input",{type:"tel",value:z,onChange:n=>X(n.target.value),placeholder:h??`${d.dialCode} 전화번호`,disabled:i,style:{flex:1,height:j,padding:Y,border:"none",outline:"none",fontSize:R,color:"#374151",background:"transparent",borderRadius:"0 8px 8px 0",opacity:i?.5:1}})]}),$&&e.jsxs("div",{style:{position:"absolute",top:"100%",left:0,marginTop:"4px",zIndex:1e3,background:"#fff",border:"1px solid #e5e7eb",borderRadius:"8px",boxShadow:"0 8px 24px rgba(0,0,0,0.12)",width:"260px"},children:[e.jsx("div",{style:{padding:"8px"},children:e.jsx("input",{autoFocus:!0,value:l,onChange:n=>C(n.target.value),placeholder:"국가 검색...",style:{width:"100%",boxSizing:"border-box",padding:"6px 10px",border:"1px solid #e5e7eb",borderRadius:"6px",fontSize:"13px",outline:"none"}})}),e.jsx("div",{style:{maxHeight:"200px",overflowY:"auto"},children:M.map(n=>e.jsxs("button",{onClick:()=>Q(n),style:{display:"flex",alignItems:"center",gap:"10px",width:"100%",padding:"8px 12px",border:"none",background:n.code===d.code?"#eff6ff":"transparent",cursor:"pointer",textAlign:"left",fontSize:"13px"},children:[e.jsx("span",{style:{fontSize:"18px"},children:n.flag}),e.jsx("span",{style:{flex:1,color:"#374151"},children:n.name}),e.jsx("span",{style:{color:"#9ca3af"},children:n.dialCode})]},`${n.code}-${n.dialCode}`))})]})]})}r.__docgenInfo={description:"",methods:[],displayName:"PhoneInput",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultCountry:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'KR'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(phone: string, country: CountryCode) => void",signature:{arguments:[{type:{name:"string"},name:"phone"},{type:{name:"CountryCode"},name:"country"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const ee=Z([{library:"Flowbite",component:"Phone Input",url:"https://flowbite.com/docs/forms/phone-input/",usedFor:["comparison"],relation:"compared"}]),re={title:"Molecules/Forms/PhoneInput",component:r,tags:["autodocs","ref:flowbite"],parameters:{references:ee,docs:{description:{component:"\n## PhoneInput\n\n국가 코드 선택 드롭다운과 전화번호 입력 필드가 결합된 컴포넌트입니다.\n국제 전화번호 입력, 국기 아이콘 표시, 국가 코드를 지원합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `defaultCountry` | `string` | `'KR'` | 기본 국가 코드 |\n| `size` | `'sm'\\|'md'\\|'lg'` | `'md'` | 크기 |\n| `disabled` | `boolean` | `false` | 비활성화 |\n| `onChange` | `(phone, country) => void` | - | 값 변경 콜백 |\n        "}}},argTypes:{defaultCountry:{control:"select",options:["KR","US","JP","CN","GB","DE","FR"],table:{category:"Locale"}},size:{control:"select",options:["sm","md","lg"],table:{category:"Appearance"}},disabled:{control:"boolean",table:{category:"State"}},placeholder:{control:"text",table:{category:"Content"}}},args:{defaultCountry:"KR",size:"md",disabled:!1}},x={name:"기본 (한국)"};function ne(){const[t,s]=a.useState(""),[o,i]=a.useState(null);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",fontFamily:"system-ui",maxWidth:"400px"},children:[e.jsx(r,{onChange:(h,b)=>{s(h),i(b)}}),(t||o)&&e.jsxs("div",{style:{padding:"12px",background:"#f9fafb",borderRadius:"8px",fontSize:"13px",color:"#374151"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"번호:"})," ",o==null?void 0:o.dialCode," ",t]}),e.jsxs("div",{children:[e.jsx("strong",{children:"국가:"})," ",o==null?void 0:o.flag," ",o==null?void 0:o.name]})]})]})}const m={name:"제어 컴포넌트",parameters:{docs:{description:{story:"onChange로 선택된 국가와 번호를 수신합니다."}}},render:()=>e.jsx(ne,{})},u={name:"크기 변형",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"380px",fontFamily:"system-ui"},children:["sm","md","lg"].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsxs("div",{style:{fontSize:"12px",color:"#9ca3af",fontWeight:600},children:["Size: ",t]}),e.jsx(r,{size:t})]},t))})},f={name:"기본 국가 변형",parameters:{docs:{description:{story:"다른 국가를 기본값으로 설정한 예시입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px",maxWidth:"380px",fontFamily:"system-ui"},children:[{country:"KR",label:"한국"},{country:"US",label:"United States"},{country:"JP",label:"日本"},{country:"GB",label:"United Kingdom"}].map(({country:t,label:s})=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"4px"},children:s}),e.jsx(r,{defaultCountry:t})]},t))})},y={name:"비활성화",args:{disabled:!0}},g={name:"연락처 폼",parameters:{docs:{description:{story:"PhoneInput을 폼에 통합한 예시입니다."}}},render:()=>e.jsxs("div",{style:{maxWidth:"400px",fontFamily:"system-ui"},children:[e.jsx("h3",{style:{margin:"0 0 20px",fontSize:"18px",fontWeight:700},children:"연락처 정보"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:"13px",fontWeight:600,color:"#374151",display:"block",marginBottom:"6px"},children:"이름"}),e.jsx("input",{style:{width:"100%",boxSizing:"border-box",padding:"9px 12px",border:"1px solid #d1d5db",borderRadius:"8px",fontSize:"14px",outline:"none"},placeholder:"홍길동"})]}),e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:"13px",fontWeight:600,color:"#374151",display:"block",marginBottom:"6px"},children:"이메일"}),e.jsx("input",{type:"email",style:{width:"100%",boxSizing:"border-box",padding:"9px 12px",border:"1px solid #d1d5db",borderRadius:"8px",fontSize:"14px",outline:"none"},placeholder:"email@example.com"})]}),e.jsxs("div",{children:[e.jsx("label",{style:{fontSize:"13px",fontWeight:600,color:"#374151",display:"block",marginBottom:"6px"},children:"전화번호"}),e.jsx(r,{})]}),e.jsx("button",{style:{padding:"10px",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"8px",fontSize:"14px",fontWeight:700,cursor:"pointer"},children:"저장"})]})]})};var w,D,P;x.parameters={...x.parameters,docs:{...(w=x.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '기본 (한국)'
}`,...(P=(D=x.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var W,k,F;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '제어 컴포넌트',
  parameters: {
    docs: {
      description: {
        story: 'onChange로 선택된 국가와 번호를 수신합니다.'
      }
    }
  },
  render: () => <ControlledDemo />
}`,...(F=(k=m.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var I,B,U;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '크기 변형',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '380px',
    fontFamily: 'system-ui'
  }}>
      {(['sm', 'md', 'lg'] as const).map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }}>
          <div style={{
        fontSize: '12px',
        color: '#9ca3af',
        fontWeight: 600
      }}>Size: {size}</div>
          <PhoneInput size={size} />
        </div>)}
    </div>
}`,...(U=(B=u.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var K,T,E;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: '기본 국가 변형',
  parameters: {
    docs: {
      description: {
        story: '다른 국가를 기본값으로 설정한 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '380px',
    fontFamily: 'system-ui'
  }}>
      {[{
      country: 'KR',
      label: '한국'
    }, {
      country: 'US',
      label: 'United States'
    }, {
      country: 'JP',
      label: '日本'
    }, {
      country: 'GB',
      label: 'United Kingdom'
    }].map(({
      country,
      label
    }) => <div key={country}>
          <div style={{
        fontSize: '12px',
        color: '#9ca3af',
        marginBottom: '4px'
      }}>{label}</div>
          <PhoneInput defaultCountry={country} />
        </div>)}
    </div>
}`,...(E=(T=f.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var q,A,G;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '비활성화',
  args: {
    disabled: true
  }
}`,...(G=(A=y.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var L,N,V;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '연락처 폼',
  parameters: {
    docs: {
      description: {
        story: 'PhoneInput을 폼에 통합한 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    maxWidth: '400px',
    fontFamily: 'system-ui'
  }}>
      <h3 style={{
      margin: '0 0 20px',
      fontSize: '18px',
      fontWeight: 700
    }}>연락처 정보</h3>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }}>
        <div>
          <label style={{
          fontSize: '13px',
          fontWeight: 600,
          color: '#374151',
          display: 'block',
          marginBottom: '6px'
        }}>이름</label>
          <input style={{
          width: '100%',
          boxSizing: 'border-box',
          padding: '9px 12px',
          border: '1px solid #d1d5db',
          borderRadius: '8px',
          fontSize: '14px',
          outline: 'none'
        }} placeholder="홍길동" />
        </div>
        <div>
          <label style={{
          fontSize: '13px',
          fontWeight: 600,
          color: '#374151',
          display: 'block',
          marginBottom: '6px'
        }}>이메일</label>
          <input type="email" style={{
          width: '100%',
          boxSizing: 'border-box',
          padding: '9px 12px',
          border: '1px solid #d1d5db',
          borderRadius: '8px',
          fontSize: '14px',
          outline: 'none'
        }} placeholder="email@example.com" />
        </div>
        <div>
          <label style={{
          fontSize: '13px',
          fontWeight: 600,
          color: '#374151',
          display: 'block',
          marginBottom: '6px'
        }}>전화번호</label>
          <PhoneInput />
        </div>
        <button style={{
        padding: '10px',
        background: '#3b82f6',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: 700,
        cursor: 'pointer'
      }}>
          저장
        </button>
      </div>
    </div>
}`,...(V=(N=g.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};const se=["Default","Controlled","SizeVariants","DefaultCountries","Disabled","ContactForm"];export{g as ContactForm,m as Controlled,x as Default,f as DefaultCountries,y as Disabled,u as SizeVariants,se as __namedExportsOrder,re as default};
