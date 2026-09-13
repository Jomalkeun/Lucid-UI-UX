import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as N}from"./reference-types-4ftiVeOu.js";import{r as _}from"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";function r({value:a,timeout:n=2e3,children:f,label:v="복사",copiedLabel:g="복사됨!",variant:h="button",size:i="md"}){const[o,t]=_.useState(!1),s=async()=>{try{await navigator.clipboard.writeText(a),t(!0),setTimeout(()=>t(!1),n)}catch{const l=document.createElement("textarea");l.value=a,document.body.appendChild(l),l.select(),document.execCommand("copy"),document.body.removeChild(l),t(!0),setTimeout(()=>t(!1),n)}};if(f)return e.jsx(e.Fragment,{children:f({copied:o,copy:s,value:a})});const C=i==="sm"?"4px 10px":i==="lg"?"10px 20px":"6px 14px",b=i==="sm"?"12px":i==="lg"?"15px":"13px";return h==="input"?e.jsxs("div",{style:{display:"flex",border:"1px solid #d1d5db",borderRadius:"8px",overflow:"hidden",fontFamily:"system-ui"},children:[e.jsx("input",{readOnly:!0,value:a,style:{flex:1,padding:"8px 12px",border:"none",outline:"none",fontSize:b,color:"#374151",background:"#f9fafb"}}),e.jsx("button",{onClick:s,style:{padding:C,background:o?"#10b981":"#3b82f6",color:"#fff",border:"none",cursor:"pointer",fontSize:b,fontWeight:500,flexShrink:0,transition:"background 0.2s"},children:o?g:v})]}):h==="icon"?e.jsx("button",{onClick:s,"aria-label":o?"복사됨":"클립보드에 복사",style:{background:"none",border:"none",cursor:"pointer",padding:"4px",color:o?"#10b981":"#6b7280",fontSize:"16px",transition:"color 0.2s"},children:o?"✅":"📋"}):e.jsxs("button",{onClick:s,style:{padding:C,fontSize:b,fontFamily:"system-ui",background:o?"#10b981":"#3b82f6",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:500,transition:"background 0.2s",display:"inline-flex",alignItems:"center",gap:"6px"},children:[o?"✅":"📋"," ",o?g:v]})}r.__docgenInfo={description:"",methods:[],displayName:"Clipboard",props:{value:{required:!0,tsType:{name:"string"},description:""},timeout:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2000",computed:!1}},children:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: { copied: boolean; copy: () => void; value: string }) => React.ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ copied: boolean; copy: () => void; value: string }",signature:{properties:[{key:"copied",value:{name:"boolean",required:!0}},{key:"copy",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"value",value:{name:"string",required:!0}}]}},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'복사'",computed:!1}},copiedLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'복사됨!'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'button' | 'input' | 'icon'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'input'"},{name:"literal",value:"'icon'"}]},description:"",defaultValue:{value:"'button'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const H=N([{library:"PatternFly",component:"Clipboard copy",url:"https://www.patternfly.org/components/clipboard-copy/",usedFor:["behavior","accessibility","content"],relation:"compared"},{library:"Ark UI",component:"Clipboard",url:"https://ark-ui.com/docs/components/clipboard",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Cloudscape Design System",component:"Copy to clipboard",url:"https://cloudscape.design/components/copy-to-clipboard/",usedFor:["behavior","accessibility","content"],relation:"compared"},{library:"Flowbite",component:"Clipboard",url:"https://flowbite.com/docs/components/clipboard/",usedFor:["comparison"],relation:"compared"},{library:"Mantine UI",component:"Copy to clipboard button",url:"https://ui.mantine.dev/category/buttons/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."},{library:"Chakra UI",component:"Clipboard",url:"https://www.chakra-ui.com/docs/components/clipboard",usedFor:["comparison"],relation:"compared"}]),J={title:"Atoms/Display/Clipboard",component:r,tags:["autodocs","ref:chakra-ui","ref:ark-ui","ref:flowbite","ref:mantine-ui","ref:cloudscape","ref:patternfly"],parameters:{references:H,docs:{description:{component:"\n## Clipboard\n\n텍스트를 클립보드에 복사하는 인터랙션 컴포넌트입니다.\n복사 버튼, 복사 상태 피드백(아이콘 전환), 복사할 값을 함께 구성합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `value` | `string` | - | 복사할 텍스트 |\n| `timeout` | `number` | `2000` | 복사 피드백 지속(ms) |\n| `variant` | `'button'\\|'input'\\|'icon'` | `'button'` | 변형 |\n| `size` | `'sm'\\|'md'\\|'lg'` | `'md'` | 크기 |\n| `label` | `string` | `'복사'` | 버튼 레이블 |\n| `copiedLabel` | `string` | `'복사됨!'` | 복사 후 레이블 |\n        "}}},argTypes:{variant:{control:"select",options:["button","input","icon"],table:{category:"Appearance"}},size:{control:"select",options:["sm","md","lg"],table:{category:"Appearance"}},value:{control:"text",table:{category:"Content"}},timeout:{control:{type:"number",min:500,max:5e3,step:500},table:{category:"Behavior"}}},args:{value:"npm install @lucid/ui",variant:"button",size:"md",label:"복사",copiedLabel:"복사됨!"}},d={name:"기본 버튼",render:a=>e.jsx("div",{style:{padding:"16px",fontFamily:"system-ui"},children:e.jsx(r,{...a})})},p={name:"입력창 + 복사 버튼",parameters:{docs:{description:{story:"읽기전용 입력창에 복사 버튼이 붙은 형태입니다."}}},render:()=>e.jsxs("div",{style:{padding:"16px",fontFamily:"system-ui",display:"flex",flexDirection:"column",gap:"12px",maxWidth:"400px"},children:[e.jsx(r,{value:"npm install lucid-ui",variant:"input",label:"복사"}),e.jsx(r,{value:"https://example.com/invite/abc123xyz",variant:"input",label:"링크 복사"}),e.jsx(r,{value:"PROMO-2024-SUMMER-50",variant:"input",label:"코드 복사",copiedLabel:"✓"})]})},c={name:"아이콘 버튼",parameters:{docs:{description:{story:"아이콘만 있는 최소한의 복사 버튼입니다."}}},render:()=>e.jsx("div",{style:{padding:"16px",fontFamily:"system-ui"},children:e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",background:"#1f2937",color:"#f9fafb",padding:"10px 14px",borderRadius:"8px",fontFamily:"monospace",fontSize:"13px"},children:[e.jsx("span",{children:"npm install lucid-ui"}),e.jsx(r,{value:"npm install lucid-ui",variant:"icon"})]})})},u={name:"크기 변형",parameters:{docs:{description:{story:"sm, md, lg 크기 비교입니다."}}},render:()=>e.jsxs("div",{style:{padding:"16px",fontFamily:"system-ui",display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(r,{value:"small",size:"sm"}),e.jsx(r,{value:"medium",size:"md"}),e.jsx(r,{value:"large",size:"lg"})]})},m={name:"코드 블록 복사",parameters:{docs:{description:{story:"코드 블록 우측 상단에 복사 버튼을 배치한 패턴입니다."}}},render:()=>{const a=`import { Button } from '@lucid/ui'

function App() {
  return <Button variant="solid">Click me</Button>
}`;return e.jsxs("div",{style:{position:"relative",fontFamily:"monospace",maxWidth:"480px"},children:[e.jsx("div",{style:{background:"#1e1e2e",borderRadius:"10px",padding:"16px",paddingTop:"40px"},children:e.jsx("pre",{style:{margin:0,fontSize:"13px",color:"#cdd6f4",lineHeight:1.6,whiteSpace:"pre",overflowX:"auto"},children:a})}),e.jsx("div",{style:{position:"absolute",top:"10px",right:"10px"},children:e.jsx(r,{value:a,variant:"icon"})})]})}},x={name:"커스텀 렌더 (children 패턴)",parameters:{docs:{description:{story:"children 함수로 완전히 커스텀한 복사 버튼입니다."}}},render:()=>e.jsx("div",{style:{padding:"16px",fontFamily:"system-ui"},children:e.jsx(r,{value:"custom-api-key-12345",children:({copied:a,copy:n})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"10px 14px",border:`1px solid ${a?"#10b981":"#e5e7eb"}`,borderRadius:"8px",cursor:"pointer",transition:"border-color 0.2s",background:a?"#f0fdf4":"#fff"},onClick:n,children:[e.jsx("span",{style:{fontFamily:"monospace",fontSize:"13px",color:"#374151"},children:"sk-proj-abc123..."}),e.jsx("span",{style:{marginLeft:"auto",fontSize:"13px",color:a?"#10b981":"#6b7280"},children:a?"✓ 복사됨":"클릭하여 복사"})]})})})},y={name:"API 키 패널",parameters:{docs:{description:{story:"API 키 표시 패널에 Clipboard를 적용한 예시입니다."}}},render:()=>e.jsxs("div",{style:{fontFamily:"system-ui",maxWidth:"440px",border:"1px solid #e5e7eb",borderRadius:"12px",overflow:"hidden"},children:[e.jsx("div",{style:{padding:"16px",borderBottom:"1px solid #f0f0f0"},children:e.jsx("h4",{style:{margin:0,fontSize:"14px",fontWeight:700,color:"#111"},children:"API 키"})}),[{label:"개발 키",value:"sk-dev-abc123xyz456"},{label:"프로덕션 키",value:"sk-prod-xyz789abc012"}].map(({label:a,value:n})=>e.jsxs("div",{style:{padding:"12px 16px",borderBottom:"1px solid #f9fafb"},children:[e.jsx("div",{style:{fontSize:"11px",color:"#9ca3af",marginBottom:"6px"},children:a}),e.jsx(r,{value:n,variant:"input",label:"복사"})]},a))]})};var j,k,S;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '기본 버튼',
  render: args => <div style={{
    padding: '16px',
    fontFamily: 'system-ui'
  }}>
      <Clipboard {...args} />
    </div>
}`,...(S=(k=d.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var z,F,w;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '입력창 + 복사 버튼',
  parameters: {
    docs: {
      description: {
        story: '읽기전용 입력창에 복사 버튼이 붙은 형태입니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '16px',
    fontFamily: 'system-ui',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '400px'
  }}>
      <Clipboard value="npm install lucid-ui" variant="input" label="복사" />
      <Clipboard value="https://example.com/invite/abc123xyz" variant="input" label="링크 복사" />
      <Clipboard value="PROMO-2024-SUMMER-50" variant="input" label="코드 복사" copiedLabel="✓" />
    </div>
}`,...(w=(F=p.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var R,I,B;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '아이콘 버튼',
  parameters: {
    docs: {
      description: {
        story: '아이콘만 있는 최소한의 복사 버튼입니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '16px',
    fontFamily: 'system-ui'
  }}>
      <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: '#1f2937',
      color: '#f9fafb',
      padding: '10px 14px',
      borderRadius: '8px',
      fontFamily: 'monospace',
      fontSize: '13px'
    }}>
        <span>npm install lucid-ui</span>
        <Clipboard value="npm install lucid-ui" variant="icon" />
      </div>
    </div>
}`,...(B=(I=c.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var A,T,P;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '크기 변형',
  parameters: {
    docs: {
      description: {
        story: 'sm, md, lg 크기 비교입니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '16px',
    fontFamily: 'system-ui',
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Clipboard value="small" size="sm" />
      <Clipboard value="medium" size="md" />
      <Clipboard value="large" size="lg" />
    </div>
}`,...(P=(T=u.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var W,V,q;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '코드 블록 복사',
  parameters: {
    docs: {
      description: {
        story: '코드 블록 우측 상단에 복사 버튼을 배치한 패턴입니다.'
      }
    }
  },
  render: () => {
    const code = \`import { Button } from '@lucid/ui'

function App() {
  return <Button variant="solid">Click me</Button>
}\`;
    return <div style={{
      position: 'relative',
      fontFamily: 'monospace',
      maxWidth: '480px'
    }}>
        <div style={{
        background: '#1e1e2e',
        borderRadius: '10px',
        padding: '16px',
        paddingTop: '40px'
      }}>
          <pre style={{
          margin: 0,
          fontSize: '13px',
          color: '#cdd6f4',
          lineHeight: 1.6,
          whiteSpace: 'pre',
          overflowX: 'auto'
        }}>{code}</pre>
        </div>
        <div style={{
        position: 'absolute',
        top: '10px',
        right: '10px'
      }}>
          <Clipboard value={code} variant="icon" />
        </div>
      </div>;
  }
}`,...(q=(V=m.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var M,D,E;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: '커스텀 렌더 (children 패턴)',
  parameters: {
    docs: {
      description: {
        story: 'children 함수로 완전히 커스텀한 복사 버튼입니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '16px',
    fontFamily: 'system-ui'
  }}>
      <Clipboard value="custom-api-key-12345">
        {({
        copied,
        copy
      }) => <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px 14px',
        border: \`1px solid \${copied ? '#10b981' : '#e5e7eb'}\`,
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'border-color 0.2s',
        background: copied ? '#f0fdf4' : '#fff'
      }} onClick={copy}>
            <span style={{
          fontFamily: 'monospace',
          fontSize: '13px',
          color: '#374151'
        }}>sk-proj-abc123...</span>
            <span style={{
          marginLeft: 'auto',
          fontSize: '13px',
          color: copied ? '#10b981' : '#6b7280'
        }}>
              {copied ? '✓ 복사됨' : '클릭하여 복사'}
            </span>
          </div>}
      </Clipboard>
    </div>
}`,...(E=(D=x.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var L,O,U;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'API 키 패널',
  parameters: {
    docs: {
      description: {
        story: 'API 키 표시 패널에 Clipboard를 적용한 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    fontFamily: 'system-ui',
    maxWidth: '440px',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    overflow: 'hidden'
  }}>
      <div style={{
      padding: '16px',
      borderBottom: '1px solid #f0f0f0'
    }}>
        <h4 style={{
        margin: 0,
        fontSize: '14px',
        fontWeight: 700,
        color: '#111'
      }}>API 키</h4>
      </div>
      {[{
      label: '개발 키',
      value: 'sk-dev-abc123xyz456'
    }, {
      label: '프로덕션 키',
      value: 'sk-prod-xyz789abc012'
    }].map(({
      label,
      value
    }) => <div key={label} style={{
      padding: '12px 16px',
      borderBottom: '1px solid #f9fafb'
    }}>
          <div style={{
        fontSize: '11px',
        color: '#9ca3af',
        marginBottom: '6px'
      }}>{label}</div>
          <Clipboard value={value} variant="input" label="복사" />
        </div>)}
    </div>
}`,...(U=(O=y.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const Q=["Default","InputVariant","IconVariant","SizeVariants","CodeBlock","CustomRender","ApiKeyPanel"];export{y as ApiKeyPanel,m as CodeBlock,x as CustomRender,d as Default,c as IconVariant,p as InputVariant,u as SizeVariants,Q as __namedExportsOrder,J as default};
