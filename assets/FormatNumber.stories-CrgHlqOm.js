import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as E}from"./reference-types-4ftiVeOu.js";import{r as U}from"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";function K(n,r={}){const{locale:a=(typeof navigator<"u"?navigator.language:void 0)??"ko-KR",style:t="decimal",currency:o,unit:m,unitDisplay:T,minimumFractionDigits:P,maximumFractionDigits:q,notation:I}=r;try{return new Intl.NumberFormat(a,{style:t,currency:t==="currency"?o??"KRW":void 0,unit:t==="unit"?m:void 0,unitDisplay:t==="unit"?T:void 0,minimumFractionDigits:P,maximumFractionDigits:q,notation:I}).format(n)}catch{return String(n)}}function i({value:n,as:r="span",...a}){return U.createElement(r,{},K(n,a))}i.__docgenInfo={description:"",methods:[],displayName:"FormatNumber",props:{value:{required:!0,tsType:{name:"number"},description:""},locale:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"union",raw:"'decimal' | 'currency' | 'percent' | 'unit'",elements:[{name:"literal",value:"'decimal'"},{name:"literal",value:"'currency'"},{name:"literal",value:"'percent'"},{name:"literal",value:"'unit'"}]},description:""},currency:{required:!1,tsType:{name:"string"},description:""},unit:{required:!1,tsType:{name:"string"},description:""},unitDisplay:{required:!1,tsType:{name:"union",raw:"'short' | 'long' | 'narrow'",elements:[{name:"literal",value:"'short'"},{name:"literal",value:"'long'"},{name:"literal",value:"'narrow'"}]},description:""},minimumFractionDigits:{required:!1,tsType:{name:"number"},description:""},maximumFractionDigits:{required:!1,tsType:{name:"number"},description:""},notation:{required:!1,tsType:{name:"union",raw:"'standard' | 'scientific' | 'engineering' | 'compact'",elements:[{name:"literal",value:"'standard'"},{name:"literal",value:"'scientific'"},{name:"literal",value:"'engineering'"},{name:"literal",value:"'compact'"}]},description:""},as:{required:!1,tsType:{name:"React.JSX.IntrinsicElements"},description:"",defaultValue:{value:"'span'",computed:!1}}}};const B=E([{library:"Chakra UI",component:"Format Number",url:"https://www.chakra-ui.com/docs/components/format-number",usedFor:["comparison"],relation:"compared"}]),Y={title:"Atoms/Primitives/FormatNumber",component:i,tags:["autodocs","ref:chakra-ui"],parameters:{references:B,docs:{description:{component:"\n## FormatNumber\n\n숫자를 현재 로케일에 맞는 형식으로 렌더링하는 컴포넌트입니다.\n통화, 퍼센트, 단위 포맷을 지원하며 `Intl.NumberFormat` API를 기반으로 합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `value` | `number` | - | 포맷할 숫자 |\n| `locale` | `string` | 브라우저 기본 | 로케일 |\n| `style` | `'decimal'\\|'currency'\\|'percent'\\|'unit'` | `'decimal'` | 포맷 스타일 |\n| `currency` | `string` | `'KRW'` | 통화 코드 (style=currency) |\n| `unit` | `string` | - | 단위 (style=unit) |\n| `notation` | `'standard'\\|'compact'\\|...` | `'standard'` | 표기 방식 |\n        "}}},argTypes:{value:{control:{type:"number"},table:{category:"Core"}},style:{control:"select",options:["decimal","currency","percent","unit"],table:{category:"Formatting"}},notation:{control:"select",options:["standard","compact","scientific","engineering"],table:{category:"Formatting"}},locale:{control:"text",table:{category:"Formatting"}},currency:{control:"text",table:{category:"Formatting"}},unit:{control:"text",table:{category:"Formatting"}}},args:{value:123456789e-2,style:"decimal",locale:"ko-KR"}},l={name:"기본",render:n=>e.jsx("div",{style:{padding:"24px",fontFamily:"system-ui",fontSize:"28px",fontWeight:700,color:"#111"},children:e.jsx(i,{...n})})},s={name:"통화 포맷",parameters:{docs:{description:{story:"여러 국가 통화로 동일한 숫자를 표시합니다."}}},render:()=>{const n=[{locale:"ko-KR",currency:"KRW",label:"한국 원"},{locale:"en-US",currency:"USD",label:"미국 달러"},{locale:"ja-JP",currency:"JPY",label:"일본 엔"},{locale:"de-DE",currency:"EUR",label:"유럽 유로"},{locale:"zh-CN",currency:"CNY",label:"중국 위안"},{locale:"en-GB",currency:"GBP",label:"영국 파운드"}],r=1234567;return e.jsx("div",{style:{fontFamily:"system-ui",padding:"24px",display:"flex",flexDirection:"column",gap:"10px"},children:n.map(({locale:a,currency:t,label:o})=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"10px 16px",background:"#f9fafb",borderRadius:"8px",maxWidth:"360px"},children:[e.jsxs("span",{style:{fontSize:"13px",color:"#6b7280"},children:[o," (",t,")"]}),e.jsx("span",{style:{fontSize:"15px",fontWeight:700,color:"#111"},children:e.jsx(i,{value:r,style:"currency",currency:t,locale:a})})]},t))})}},c={name:"퍼센트 포맷",parameters:{docs:{description:{story:"비율을 퍼센트로 표시합니다."}}},render:()=>e.jsx("div",{style:{fontFamily:"system-ui",padding:"24px",display:"flex",flexDirection:"column",gap:"12px",maxWidth:"360px"},children:[.05,.1234,.5,.7812,.99].map(n=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{flex:1,background:"#e5e7eb",borderRadius:"4px",height:"8px"},children:e.jsx("div",{style:{width:`${n*100}%`,background:"#3b82f6",height:"8px",borderRadius:"4px"}})}),e.jsx("span",{style:{fontSize:"14px",fontWeight:700,color:"#111",width:"52px",textAlign:"right"},children:e.jsx(i,{value:n,style:"percent",maximumFractionDigits:1})})]},n))})},p={name:"컴팩트 표기",parameters:{docs:{description:{story:"큰 숫자를 K, M 단위로 줄여서 표시합니다."}}},render:()=>{const n=[999,1500,12e3,15e4,12e5,5e9];return e.jsx("div",{style:{fontFamily:"system-ui",padding:"24px",display:"flex",flexDirection:"column",gap:"10px",maxWidth:"360px"},children:n.map(r=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"8px 14px",background:"#f9fafb",borderRadius:"6px"},children:[e.jsx("span",{style:{fontSize:"13px",color:"#6b7280"},children:r.toLocaleString()}),e.jsx("span",{style:{fontSize:"15px",fontWeight:700,color:"#3b82f6"},children:e.jsx(i,{value:r,notation:"compact"})})]},r))})}},d={name:"단위 포맷",parameters:{docs:{description:{story:"Intl.NumberFormat의 unit 스타일로 단위를 표시합니다."}}},render:()=>{const n=[{value:180,unit:"centimeter",label:"키"},{value:75,unit:"kilogram",label:"몸무게"},{value:36.5,unit:"celsius",label:"체온"},{value:120,unit:"kilometer-per-hour",label:"속도"}];return e.jsx("div",{style:{fontFamily:"system-ui",padding:"24px",display:"flex",flexDirection:"column",gap:"10px",maxWidth:"320px"},children:n.map(({value:r,unit:a,label:t})=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"10px 14px",background:"#f9fafb",borderRadius:"8px"},children:[e.jsx("span",{style:{fontSize:"13px",color:"#6b7280"},children:t}),e.jsx("span",{style:{fontSize:"15px",fontWeight:700,color:"#111"},children:K(r,{style:"unit",unit:a,unitDisplay:"short",locale:"ko-KR"})})]},a))})}},u={name:"대시보드 통계",parameters:{docs:{description:{story:"대시보드의 통계 카드에 FormatNumber를 활용하는 예시입니다."}}},render:()=>{const n=[{label:"월 매출",value:12854e4,style:"currency",currency:"KRW",color:"#3b82f6",icon:"💰"},{label:"구매 전환율",value:.0324,style:"percent",color:"#10b981",icon:"📈"},{label:"전체 사용자",value:1248392,notation:"compact",color:"#8b5cf6",icon:"👥"},{label:"평균 주문액",value:85200,style:"currency",currency:"KRW",color:"#f59e0b",icon:"🛒"}];return e.jsx("div",{style:{fontFamily:"system-ui",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",maxWidth:"480px",padding:"24px"},children:n.map(({label:r,value:a,color:t,icon:o,...m})=>e.jsxs("div",{style:{padding:"16px",background:"#fff",border:"1px solid #e5e7eb",borderRadius:"12px",borderLeft:`4px solid ${t}`},children:[e.jsx("div",{style:{fontSize:"20px",marginBottom:"8px"},children:o}),e.jsx("div",{style:{fontSize:"20px",fontWeight:800,color:"#111",marginBottom:"4px"},children:e.jsx(i,{value:a,...m})}),e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af"},children:r})]},r))})}};var y,x,f;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '기본',
  render: args => <div style={{
    padding: '24px',
    fontFamily: 'system-ui',
    fontSize: '28px',
    fontWeight: 700,
    color: '#111'
  }}>
      <FormatNumber {...args} />
    </div>
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var b,g,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '통화 포맷',
  parameters: {
    docs: {
      description: {
        story: '여러 국가 통화로 동일한 숫자를 표시합니다.'
      }
    }
  },
  render: () => {
    const currencies = [{
      locale: 'ko-KR',
      currency: 'KRW',
      label: '한국 원'
    }, {
      locale: 'en-US',
      currency: 'USD',
      label: '미국 달러'
    }, {
      locale: 'ja-JP',
      currency: 'JPY',
      label: '일본 엔'
    }, {
      locale: 'de-DE',
      currency: 'EUR',
      label: '유럽 유로'
    }, {
      locale: 'zh-CN',
      currency: 'CNY',
      label: '중국 위안'
    }, {
      locale: 'en-GB',
      currency: 'GBP',
      label: '영국 파운드'
    }];
    const amount = 1234567;
    return <div style={{
      fontFamily: 'system-ui',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
        {currencies.map(({
        locale,
        currency,
        label
      }) => <div key={currency} style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 16px',
        background: '#f9fafb',
        borderRadius: '8px',
        maxWidth: '360px'
      }}>
            <span style={{
          fontSize: '13px',
          color: '#6b7280'
        }}>{label} ({currency})</span>
            <span style={{
          fontSize: '15px',
          fontWeight: 700,
          color: '#111'
        }}>
              <FormatNumber value={amount} style="currency" currency={currency} locale={locale} />
            </span>
          </div>)}
      </div>;
  }
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,F,j;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '퍼센트 포맷',
  parameters: {
    docs: {
      description: {
        story: '비율을 퍼센트로 표시합니다.'
      }
    }
  },
  render: () => <div style={{
    fontFamily: 'system-ui',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '360px'
  }}>
      {[0.05, 0.1234, 0.5, 0.7812, 0.99].map(v => <div key={v} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
          <div style={{
        flex: 1,
        background: '#e5e7eb',
        borderRadius: '4px',
        height: '8px'
      }}>
            <div style={{
          width: \`\${v * 100}%\`,
          background: '#3b82f6',
          height: '8px',
          borderRadius: '4px'
        }} />
          </div>
          <span style={{
        fontSize: '14px',
        fontWeight: 700,
        color: '#111',
        width: '52px',
        textAlign: 'right'
      }}>
            <FormatNumber value={v} style="percent" maximumFractionDigits={1} />
          </span>
        </div>)}
    </div>
}`,...(j=(F=c.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var S,R,k;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '컴팩트 표기',
  parameters: {
    docs: {
      description: {
        story: '큰 숫자를 K, M 단위로 줄여서 표시합니다.'
      }
    }
  },
  render: () => {
    const values = [999, 1500, 12000, 150000, 1200000, 5000000000];
    return <div style={{
      fontFamily: 'system-ui',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      maxWidth: '360px'
    }}>
        {values.map(v => <div key={v} style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px 14px',
        background: '#f9fafb',
        borderRadius: '6px'
      }}>
            <span style={{
          fontSize: '13px',
          color: '#6b7280'
        }}>{v.toLocaleString()}</span>
            <span style={{
          fontSize: '15px',
          fontWeight: 700,
          color: '#3b82f6'
        }}>
              <FormatNumber value={v} notation="compact" />
            </span>
          </div>)}
      </div>;
  }
}`,...(k=(R=p.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var W,D,N;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '단위 포맷',
  parameters: {
    docs: {
      description: {
        story: 'Intl.NumberFormat의 unit 스타일로 단위를 표시합니다.'
      }
    }
  },
  render: () => {
    const units: Array<{
      value: number;
      unit: string;
      label: string;
    }> = [{
      value: 180,
      unit: 'centimeter',
      label: '키'
    }, {
      value: 75,
      unit: 'kilogram',
      label: '몸무게'
    }, {
      value: 36.5,
      unit: 'celsius',
      label: '체온'
    }, {
      value: 120,
      unit: 'kilometer-per-hour',
      label: '속도'
    }];
    return <div style={{
      fontFamily: 'system-ui',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      maxWidth: '320px'
    }}>
        {units.map(({
        value,
        unit,
        label
      }) => <div key={unit} style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 14px',
        background: '#f9fafb',
        borderRadius: '8px'
      }}>
            <span style={{
          fontSize: '13px',
          color: '#6b7280'
        }}>{label}</span>
            <span style={{
          fontSize: '15px',
          fontWeight: 700,
          color: '#111'
        }}>
              {formatNumber(value, {
            style: 'unit',
            unit,
            unitDisplay: 'short',
            locale: 'ko-KR'
          })}
            </span>
          </div>)}
      </div>;
  }
}`,...(N=(D=d.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var z,w,C;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '대시보드 통계',
  parameters: {
    docs: {
      description: {
        story: '대시보드의 통계 카드에 FormatNumber를 활용하는 예시입니다.'
      }
    }
  },
  render: () => {
    const stats = [{
      label: '월 매출',
      value: 128540000,
      style: 'currency' as const,
      currency: 'KRW',
      color: '#3b82f6',
      icon: '💰'
    }, {
      label: '구매 전환율',
      value: 0.0324,
      style: 'percent' as const,
      color: '#10b981',
      icon: '📈'
    }, {
      label: '전체 사용자',
      value: 1248392,
      notation: 'compact' as const,
      color: '#8b5cf6',
      icon: '👥'
    }, {
      label: '평균 주문액',
      value: 85200,
      style: 'currency' as const,
      currency: 'KRW',
      color: '#f59e0b',
      icon: '🛒'
    }];
    return <div style={{
      fontFamily: 'system-ui',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '12px',
      maxWidth: '480px',
      padding: '24px'
    }}>
        {stats.map(({
        label,
        value,
        color,
        icon,
        ...fmt
      }) => <div key={label} style={{
        padding: '16px',
        background: '#fff',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        borderLeft: \`4px solid \${color}\`
      }}>
            <div style={{
          fontSize: '20px',
          marginBottom: '8px'
        }}>{icon}</div>
            <div style={{
          fontSize: '20px',
          fontWeight: 800,
          color: '#111',
          marginBottom: '4px'
        }}>
              <FormatNumber value={value} {...fmt} />
            </div>
            <div style={{
          fontSize: '12px',
          color: '#9ca3af'
        }}>{label}</div>
          </div>)}
      </div>;
  }
}`,...(C=(w=u.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const _=["Default","CurrencyFormats","PercentFormat","CompactNotation","UnitFormat","Dashboard"];export{p as CompactNotation,s as CurrencyFormats,u as Dashboard,l as Default,c as PercentFormat,d as UnitFormat,_ as __namedExportsOrder,Y as default};
