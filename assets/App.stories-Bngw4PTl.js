import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as F}from"./reference-types-4ftiVeOu.js";import{r as D}from"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";const I=D.createContext({});function T(){return D.useContext(I)}function s({children:r,locale:o="ko-KR",theme:a="light",size:n="medium",primaryColor:m="#3b82f6"}){return e.jsx(I.Provider,{value:{locale:o,theme:a,size:n,primaryColor:m},children:e.jsx("div",{"data-theme":a,"data-size":n,style:{fontFamily:"system-ui, -apple-system, sans-serif",colorScheme:a==="system"?"light dark":a},children:r})})}s.__docgenInfo={description:"",methods:[],displayName:"App",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},locale:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'ko-KR'",computed:!1}},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark' | 'system'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'system'"}]},description:"",defaultValue:{value:"'light'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},primaryColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#3b82f6'",computed:!1}}}};const P=F([{library:"Ant Design",component:"App",url:"https://ant.design/components/app/",usedFor:["comparison"],relation:"compared"}]),B={title:"Atoms/Primitives/App",component:s,tags:["autodocs","ref:ant-design"],parameters:{references:P,docs:{description:{component:"\n## App\n\n전역 애플리케이션 설정을 컨텍스트로 제공하는 루트 래퍼 컴포넌트입니다.\nlocale, theme, size, primaryColor 등의 전역 설정을 하위 컴포넌트에서 `useApp()` 훅으로 접근할 수 있습니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `locale` | `string` | `'ko-KR'` | 로케일 |\n| `theme` | `'light' \\| 'dark' \\| 'system'` | `'light'` | 테마 |\n| `size` | `'small' \\| 'medium' \\| 'large'` | `'medium'` | 기본 크기 |\n| `primaryColor` | `string` | `'#3b82f6'` | 기본 색상 |\n| `children` | `ReactNode` | - | 자식 컴포넌트 |\n\n---\n\n### useApp() 훅\n\n```tsx\nfunction MyComponent() {\n  const { locale, theme, primaryColor } = useApp()\n  return <div style={{ color: primaryColor }}>현재 테마: {theme}</div>\n}\n```\n        "}}},argTypes:{locale:{control:"select",options:["ko-KR","en-US","ja-JP","zh-CN"],description:"로케일",table:{category:"Config"}},theme:{control:"select",options:["light","dark","system"],description:"테마",table:{category:"Config"}},size:{control:"select",options:["small","medium","large"],description:"크기",table:{category:"Config"}},primaryColor:{control:"color",description:"주 색상",table:{category:"Config"}}},args:{locale:"ko-KR",theme:"light",size:"medium",primaryColor:"#3b82f6"}};function U(){const{locale:r,theme:o,size:a,primaryColor:n}=T();return e.jsxs("div",{style:{padding:"16px",background:"#f8f9fa",borderRadius:"8px",fontFamily:"monospace",fontSize:"13px",lineHeight:2},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"locale:"})," ",e.jsx("span",{style:{color:"#3b82f6"},children:r})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"theme:"})," ",e.jsx("span",{style:{color:"#3b82f6"},children:o})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"size:"})," ",e.jsx("span",{style:{color:"#3b82f6"},children:a})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"primaryColor:"})," ",e.jsx("span",{style:{color:n,fontWeight:700},children:n})]})]})}function c(){const{primaryColor:r,size:o}=T(),a=o==="small"?"6px 12px":o==="large"?"12px 28px":"8px 20px",n=o==="small"?"12px":o==="large"?"16px":"14px";return e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginTop:"12px"},children:[e.jsx("button",{style:{padding:a,fontSize:n,background:r,color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer"},children:"주요 버튼"}),e.jsx("button",{style:{padding:a,fontSize:n,background:"transparent",color:r,border:`2px solid ${r}`,borderRadius:"8px",cursor:"pointer"},children:"보조 버튼"}),e.jsx("span",{style:{padding:a,fontSize:n,background:`${r}20`,color:r,borderRadius:"999px"},children:"배지"})]})}const l={name:"기본",parameters:{docs:{description:{story:"App 컨텍스트 제공자. 하위에서 useApp()으로 설정을 읽습니다."}}},render:r=>e.jsxs(s,{...r,children:[e.jsx(U,{}),e.jsx(c,{})]})},i={name:"다크 테마",parameters:{docs:{description:{story:"다크 테마 설정의 App입니다."}}},render:()=>e.jsx(s,{theme:"dark",primaryColor:"#818cf8",children:e.jsxs("div",{style:{padding:"16px",background:"#1f2937",borderRadius:"8px",color:"#f9fafb"},children:[e.jsx(U,{}),e.jsx(c,{})]})})},t={name:"로케일 변형",parameters:{docs:{description:{story:"언어별 날짜/숫자 포맷 표시 예시입니다."}}},render:()=>{const r=[{locale:"ko-KR",label:"한국어"},{locale:"en-US",label:"English"},{locale:"ja-JP",label:"日本語"},{locale:"zh-CN",label:"中文"}],o=new Date("2024-01-15"),a=123456789e-2;return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",fontFamily:"system-ui"},children:r.map(({locale:n,label:m})=>e.jsx(s,{locale:n,children:e.jsxs("div",{style:{padding:"12px 16px",background:"#f8f9fa",borderRadius:"8px",display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx("span",{style:{fontWeight:600,color:"#374151",minWidth:"80px"},children:m}),e.jsxs("span",{style:{color:"#6b7280",fontSize:"13px"},children:["날짜: ",o.toLocaleDateString(n)]}),e.jsxs("span",{style:{color:"#6b7280",fontSize:"13px"},children:["숫자: ",a.toLocaleString(n)]})]})},n))})}},p={name:"크기 변형",parameters:{docs:{description:{story:"size prop에 따라 하위 UI 요소 크기가 일관되게 변경됩니다."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",fontFamily:"system-ui"},children:["small","medium","large"].map(r=>e.jsx(s,{size:r,children:e.jsxs("div",{style:{padding:"12px 16px",border:"1px solid #e5e7eb",borderRadius:"8px"},children:[e.jsxs("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"8px"},children:['size="',r,'"']}),e.jsx(c,{})]})},r))})},d={name:"색상 테마",parameters:{docs:{description:{story:"primaryColor만 변경하면 전체 UI 색상이 일관되게 변경됩니다."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",fontFamily:"system-ui"},children:[{color:"#3b82f6",name:"Blue"},{color:"#10b981",name:"Green"},{color:"#8b5cf6",name:"Purple"},{color:"#ef4444",name:"Red"},{color:"#f59e0b",name:"Amber"}].map(({color:r,name:o})=>e.jsx(s,{primaryColor:r,children:e.jsxs("div",{style:{padding:"12px 16px",border:`1px solid ${r}30`,borderRadius:"8px",background:`${r}08`},children:[e.jsxs("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"8px"},children:['primaryColor="',o,'" (',r,")"]}),e.jsx(c,{})]})},r))})};var x,u,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '기본',
  parameters: {
    docs: {
      description: {
        story: 'App 컨텍스트 제공자. 하위에서 useApp()으로 설정을 읽습니다.'
      }
    }
  },
  render: args => <App {...args}>
      <ConfigDisplay />
      <SampleUI />
    </App>
}`,...(f=(u=l.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var y,g,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '다크 테마',
  parameters: {
    docs: {
      description: {
        story: '다크 테마 설정의 App입니다.'
      }
    }
  },
  render: () => <App theme="dark" primaryColor="#818cf8">
      <div style={{
      padding: '16px',
      background: '#1f2937',
      borderRadius: '8px',
      color: '#f9fafb'
    }}>
        <ConfigDisplay />
        <SampleUI />
      </div>
    </App>
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,v,j;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '로케일 변형',
  parameters: {
    docs: {
      description: {
        story: '언어별 날짜/숫자 포맷 표시 예시입니다.'
      }
    }
  },
  render: () => {
    const locales = [{
      locale: 'ko-KR',
      label: '한국어'
    }, {
      locale: 'en-US',
      label: 'English'
    }, {
      locale: 'ja-JP',
      label: '日本語'
    }, {
      locale: 'zh-CN',
      label: '中文'
    }];
    const date = new Date('2024-01-15');
    const num = 1234567.89;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      fontFamily: 'system-ui'
    }}>
        {locales.map(({
        locale,
        label
      }) => <App key={locale} locale={locale}>
            <div style={{
          padding: '12px 16px',
          background: '#f8f9fa',
          borderRadius: '8px',
          display: 'flex',
          gap: '24px',
          alignItems: 'center'
        }}>
              <span style={{
            fontWeight: 600,
            color: '#374151',
            minWidth: '80px'
          }}>{label}</span>
              <span style={{
            color: '#6b7280',
            fontSize: '13px'
          }}>날짜: {date.toLocaleDateString(locale)}</span>
              <span style={{
            color: '#6b7280',
            fontSize: '13px'
          }}>숫자: {num.toLocaleString(locale)}</span>
            </div>
          </App>)}
      </div>;
  }
}`,...(j=(v=t.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var C,z,S;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '크기 변형',
  parameters: {
    docs: {
      description: {
        story: 'size prop에 따라 하위 UI 요소 크기가 일관되게 변경됩니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    fontFamily: 'system-ui'
  }}>
      {(['small', 'medium', 'large'] as const).map(size => <App key={size} size={size}>
          <div style={{
        padding: '12px 16px',
        border: '1px solid #e5e7eb',
        borderRadius: '8px'
      }}>
            <div style={{
          fontSize: '12px',
          color: '#9ca3af',
          marginBottom: '8px'
        }}>size="{size}"</div>
            <SampleUI />
          </div>
        </App>)}
    </div>
}`,...(S=(z=p.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var A,k,R;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '색상 테마',
  parameters: {
    docs: {
      description: {
        story: 'primaryColor만 변경하면 전체 UI 색상이 일관되게 변경됩니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    fontFamily: 'system-ui'
  }}>
      {[{
      color: '#3b82f6',
      name: 'Blue'
    }, {
      color: '#10b981',
      name: 'Green'
    }, {
      color: '#8b5cf6',
      name: 'Purple'
    }, {
      color: '#ef4444',
      name: 'Red'
    }, {
      color: '#f59e0b',
      name: 'Amber'
    }].map(({
      color,
      name
    }) => <App key={color} primaryColor={color}>
          <div style={{
        padding: '12px 16px',
        border: \`1px solid \${color}30\`,
        borderRadius: '8px',
        background: \`\${color}08\`
      }}>
            <div style={{
          fontSize: '12px',
          color: '#9ca3af',
          marginBottom: '8px'
        }}>primaryColor="{name}" ({color})</div>
            <SampleUI />
          </div>
        </App>)}
    </div>
}`,...(R=(k=d.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};const L=["Default","DarkTheme","LocaleVariants","SizeVariants","ColorThemes"];export{d as ColorThemes,i as DarkTheme,l as Default,t as LocaleVariants,p as SizeVariants,L as __namedExportsOrder,B as default};
