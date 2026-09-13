import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as I}from"./reference-types-4ftiVeOu.js";import{r as F}from"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";const K={locale:"ko-KR",dir:"ltr",dateFormat:"YYYY.MM.DD",timeFormat:"HH:mm",currency:"KRW"},D=F.createContext(K);function a({locale:r,dir:n,dateFormat:o,timeFormat:p,currency:m,messages:u,children:x}){const t=n??(r.startsWith("ar")||r.startsWith("he")||r.startsWith("fa")?"rtl":"ltr"),l={locale:r,dir:t,dateFormat:o,timeFormat:p,currency:m,messages:u};return e.jsx(D.Provider,{value:l,children:e.jsx("div",{dir:t,lang:r,children:x})})}function f(){return F.useContext(D)}a.__docgenInfo={description:"",methods:[],displayName:"LocaleProvider",props:{locale:{required:!0,tsType:{name:"string"},description:""},dir:{required:!1,tsType:{name:"union",raw:"'ltr' | 'rtl'",elements:[{name:"literal",value:"'ltr'"},{name:"literal",value:"'rtl'"}]},description:""},dateFormat:{required:!1,tsType:{name:"string"},description:""},timeFormat:{required:!1,tsType:{name:"string"},description:""},currency:{required:!1,tsType:{name:"string"},description:""},messages:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const U=I([{library:"Ark UI",component:"Locale",url:"https://ark-ui.com/docs/utilities/locale",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Chakra UI",component:"Locale Provider",url:"https://www.chakra-ui.com/docs/components/locale-provider",usedFor:["comparison"],relation:"compared"}]),A={title:"Atoms/Primitives/LocaleProvider",component:a,tags:["autodocs","ref:chakra-ui","ref:ark-ui","ref:vuetify"],parameters:{references:U,docs:{description:{component:"\n## LocaleProvider\n\n하위 컴포넌트에 로케일(언어/지역) 컨텍스트를 주입하는 프로바이더입니다.\nDatePicker, NumberInput 등 로케일에 의존하는 컴포넌트의 포맷 및 방향(RTL/LTR)을 일괄 설정합니다.\n\n---\n\n### Props\n\n| Prop | Type | 설명 |\n|---|---|---|\n| `locale` | `string` | BCP 47 로케일 코드 (예: 'ko-KR', 'en-US', 'ar-SA') |\n| `dir` | `'ltr'\\|'rtl'` | 텍스트 방향 (생략 시 로케일에서 자동 추론) |\n| `currency` | `string` | 통화 코드 (예: 'KRW', 'USD') |\n| `dateFormat` | `string` | 날짜 형식 |\n| `messages` | `Record<string, string>` | i18n 메시지 맵 |\n        "}}},argTypes:{locale:{control:"select",options:["ko-KR","en-US","ja-JP","zh-CN","ar-SA","de-DE","fr-FR"],table:{category:"Locale"}},dir:{control:"select",options:["ltr","rtl"],table:{category:"Locale"}},currency:{control:"text",table:{category:"Locale"}},dateFormat:{control:"text",table:{category:"Locale"}}},args:{locale:"ko-KR",currency:"KRW",dateFormat:"YYYY.MM.DD"}};function k(){const{locale:r,dir:n,currency:o,dateFormat:p}=f(),m=new Date,u=new Intl.DateTimeFormat(r,{year:"numeric",month:"long",day:"numeric"}).format(m),x=new Intl.NumberFormat(r,{style:"currency",currency:o??"USD"}).format(123456.78),t=new Intl.NumberFormat(r,{style:"percent",minimumFractionDigits:1}).format(.854);return e.jsxs("div",{style:{padding:"20px",border:"1px solid #e5e7eb",borderRadius:"10px",fontFamily:"system-ui",minWidth:"260px"},children:[e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"12px"},children:"로케일 컨텍스트"}),[{label:"로케일",value:r},{label:"방향",value:n??"ltr"},{label:"날짜",value:u},{label:"통화",value:x},{label:"퍼센트",value:t},{label:"날짜 포맷",value:p??"-"}].map(({label:l,value:C})=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:"1px solid #f0f0f0",fontSize:"14px"},children:[e.jsx("span",{style:{color:"#6b7280"},children:l}),e.jsx("span",{style:{fontWeight:600,color:"#111"},children:C})]},l))]})}const s={name:"기본 (한국어)",render:r=>e.jsx(a,{...r,children:e.jsx(k,{})})},i={name:"다국어 비교",parameters:{docs:{description:{story:"같은 컴포넌트가 다른 로케일에서 다르게 렌더링됩니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",fontFamily:"system-ui"},children:[{locale:"ko-KR",currency:"KRW",label:"한국어"},{locale:"en-US",currency:"USD",label:"English"},{locale:"ja-JP",currency:"JPY",label:"日本語"},{locale:"de-DE",currency:"EUR",label:"Deutsch"}].map(({locale:r,currency:n,label:o})=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"6px",fontWeight:600},children:o}),e.jsx(a,{locale:r,currency:n,children:e.jsx(k,{})})]},r))})};function z(){const{locale:r,dir:n}=f();return e.jsxs("div",{style:{padding:"20px",border:"1px solid #e5e7eb",borderRadius:"10px",fontFamily:"system-ui"},children:[e.jsxs("div",{style:{fontSize:"13px",color:"#9ca3af",marginBottom:"8px"},children:["dir: ",n]}),e.jsx("div",{style:{fontSize:"16px",fontWeight:700,marginBottom:"8px"},children:r==="ar-SA"?"مرحباً بالعالم":r==="he-IL"?"שלום עולם":"안녕하세요"}),e.jsx("div",{style:{fontSize:"14px",color:"#374151",lineHeight:1.6},children:r==="ar-SA"?"هذا مثال على النص العربي مع اتجاه من اليمين إلى اليسار.":r==="he-IL"?"זהו טקסט עברי לדוגמה עם כיוון מימין לשמאל.":"이것은 LTR 언어의 예시 텍스트입니다."})]})}const c={name:"RTL 지원 (아랍어/히브리어)",parameters:{docs:{description:{story:"아랍어, 히브리어 등 RTL 언어는 dir이 자동으로 설정됩니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[{locale:"ko-KR",label:"한국어 (LTR)"},{locale:"ar-SA",label:"عربي (RTL)"},{locale:"he-IL",label:"עברית (RTL)"}].map(({locale:r,label:n})=>e.jsxs("div",{style:{minWidth:"240px"},children:[e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"6px",fontFamily:"system-ui"},children:n}),e.jsx(a,{locale:r,children:e.jsx(z,{})})]},r))})};function y(){const{messages:r}=f(),n=o=>(r==null?void 0:r[o])??o;return e.jsxs("div",{style:{padding:"20px",border:"1px solid #e5e7eb",borderRadius:"10px",fontFamily:"system-ui",minWidth:"200px"},children:[e.jsx("h3",{style:{margin:"0 0 12px",fontSize:"16px"},children:n("welcome")}),e.jsx("p",{style:{margin:"0 0 8px",fontSize:"14px",color:"#6b7280"},children:n("description")}),e.jsx("button",{style:{background:"#3b82f6",color:"#fff",border:"none",borderRadius:"6px",padding:"6px 14px",cursor:"pointer",fontSize:"13px"},children:n("button")})]})}const d={name:"i18n 메시지",parameters:{docs:{description:{story:"messages prop으로 i18n 텍스트를 주입합니다."}}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(a,{locale:"ko-KR",messages:{welcome:"안녕하세요!",description:"한국어 메시지입니다.",button:"시작하기"},children:e.jsx(y,{})}),e.jsx(a,{locale:"en-US",messages:{welcome:"Hello!",description:"This is English.",button:"Get Started"},children:e.jsx(y,{})}),e.jsx(a,{locale:"ja-JP",messages:{welcome:"こんにちは！",description:"日本語のメッセージです。",button:"始める"},children:e.jsx(y,{})})]})};var g,h,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '기본 (한국어)',
  render: args => <LocaleProvider {...args}>
      <LocaleCard />
    </LocaleProvider>
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var b,L,R;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '다국어 비교',
  parameters: {
    docs: {
      description: {
        story: '같은 컴포넌트가 다른 로케일에서 다르게 렌더링됩니다.'
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
      locale: 'ko-KR',
      currency: 'KRW',
      label: '한국어'
    }, {
      locale: 'en-US',
      currency: 'USD',
      label: 'English'
    }, {
      locale: 'ja-JP',
      currency: 'JPY',
      label: '日本語'
    }, {
      locale: 'de-DE',
      currency: 'EUR',
      label: 'Deutsch'
    }].map(({
      locale,
      currency,
      label
    }) => <div key={locale}>
          <div style={{
        fontSize: '12px',
        color: '#9ca3af',
        marginBottom: '6px',
        fontWeight: 600
      }}>{label}</div>
          <LocaleProvider locale={locale} currency={currency}>
            <LocaleCard />
          </LocaleProvider>
        </div>)}
    </div>
}`,...(R=(L=i.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var j,S,P;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'RTL 지원 (아랍어/히브리어)',
  parameters: {
    docs: {
      description: {
        story: '아랍어, 히브리어 등 RTL 언어는 dir이 자동으로 설정됩니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      {[{
      locale: 'ko-KR',
      label: '한국어 (LTR)'
    }, {
      locale: 'ar-SA',
      label: 'عربي (RTL)'
    }, {
      locale: 'he-IL',
      label: 'עברית (RTL)'
    }].map(({
      locale,
      label
    }) => <div key={locale} style={{
      minWidth: '240px'
    }}>
          <div style={{
        fontSize: '12px',
        color: '#9ca3af',
        marginBottom: '6px',
        fontFamily: 'system-ui'
      }}>{label}</div>
          <LocaleProvider locale={locale}>
            <RTLCard />
          </LocaleProvider>
        </div>)}
    </div>
}`,...(P=(S=c.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var T,w,W;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'i18n 메시지',
  parameters: {
    docs: {
      description: {
        story: 'messages prop으로 i18n 텍스트를 주입합니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <LocaleProvider locale="ko-KR" messages={{
      welcome: '안녕하세요!',
      description: '한국어 메시지입니다.',
      button: '시작하기'
    }}>
        <I18NCard />
      </LocaleProvider>
      <LocaleProvider locale="en-US" messages={{
      welcome: 'Hello!',
      description: 'This is English.',
      button: 'Get Started'
    }}>
        <I18NCard />
      </LocaleProvider>
      <LocaleProvider locale="ja-JP" messages={{
      welcome: 'こんにちは！',
      description: '日本語のメッセージです。',
      button: '始める'
    }}>
        <I18NCard />
      </LocaleProvider>
    </div>
}`,...(W=(w=d.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};const M=["Default","MultiLocale","RTLSupport","WithMessages"];export{s as Default,i as MultiLocale,c as RTLSupport,d as WithMessages,M as __namedExportsOrder,A as default};
