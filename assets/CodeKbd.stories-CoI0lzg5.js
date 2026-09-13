import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as K}from"./reference-types-4ftiVeOu.js";import{R as _}from"./index-BxXVWNx3.js";import{c as u}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const d=_.forwardRef(({type:o="code",text:S,size:s="13px",children:j,className:c,style:p,...i},l)=>{const m=j??S;return o==="keyboard"?e.jsx("kbd",{ref:l,className:u("inline-flex items-center justify-center","font-mono rounded border","bg-krds-gray-5 border-krds-gray-30 text-krds-gray-80","px-1.5 py-0.5","shadow-[0_1px_0_0_var(--color-krds-gray-40)]",c),style:{fontSize:s,...p},...i,children:m}):e.jsx("code",{ref:l,className:u("inline-block font-mono rounded","bg-[#1e1e2e] text-[#cdd6f4]","px-1.5 py-0.5",c),style:{fontSize:s,...p},...i,children:m})});d.displayName="CodeKbd";d.__docgenInfo={description:"",methods:[],displayName:"CodeKbd",props:{type:{required:!1,tsType:{name:"union",raw:"'code' | 'keyboard'",elements:[{name:"literal",value:"'code'"},{name:"literal",value:"'keyboard'"}]},description:"렌더링 유형: 'code' (인라인 코드) | 'keyboard' (키보드 입력)",defaultValue:{value:"'code'",computed:!1}},text:{required:!1,tsType:{name:"string"},description:"표시할 텍스트"},size:{required:!1,tsType:{name:"string"},description:"폰트 크기",defaultValue:{value:"'13px'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const I=K([{library:"Bootstrap",component:"Inline text elements",url:"https://getbootstrap.com/docs/5.3/content/typography/#inline-text-elements",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"KBD",url:"https://flowbite.com/docs/components/kbd/",usedFor:["comparison"],relation:"compared"},{library:"daisyUI",component:"Kbd",url:"https://daisyui.com/components/kbd/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Code",url:"https://www.chakra-ui.com/docs/components/code",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Kbd",url:"https://www.chakra-ui.com/docs/components/kbd",usedFor:["comparison"],relation:"compared"}]),q={title:"Atoms/Typography/CodeKbd",component:d,tags:["autodocs","typography","custom-ui","ref:chakra-ui","ref:shadcn-ui","ref:daisy-ui","ref:flowbite","ref:vuetify","ref:bootstrap"],parameters:{references:I,docs:{description:{component:"\n## Code / Kbd\n\n**인라인 코드**(`<code>`)와 **키보드 입력**(`<kbd>`) 표시를 위한 타이포그래피 컴포넌트입니다.\n\n---\n\n### 언제 사용하나요?\n\n| 컴포넌트 | 용도 | 예시 |\n|---|---|---|\n| `code` | 코드 스니펫, 변수명, 파일 경로 | `npm install`, `index.js` |\n| `kbd` | 키보드 단축키, 사용자 입력 | `Ctrl+C`, `Enter` |\n\n---\n\n### 접근성(A11y) 가이드\n\n| 체크 | 항목 |\n|---|---|\n| ✅ | 시맨틱 태그 `<code>`, `<kbd>`를 사용하세요. |\n| ✅ | 단순 스타일 목적이라면 `<span>` + 클래스를 사용하지 마세요. |\n        "}}},argTypes:{type:{description:"렌더링 유형",control:{type:"radio"},options:["code","keyboard"],table:{type:{summary:"'code' | 'keyboard'"},defaultValue:{summary:"'code'"},category:"Appearance"}},text:{description:"표시할 텍스트",control:"text",table:{type:{summary:"string"},category:"Content"}},size:{description:"폰트 크기",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'13px'"},category:"Appearance"}}},args:{type:"code",text:"npm install krds-vue",size:"13px"},render:o=>e.jsx(d,{...o,children:o.children??o.label??o.text??void 0})},r={name:"인라인 코드",args:{type:"code",text:"npm install krds-vue"},parameters:{docs:{description:{story:"설명 문서·본문 안에 코드를 삽입할 때 사용합니다."}}}},n={name:"키보드 단축키",args:{type:"keyboard",text:"Ctrl + K"},parameters:{docs:{description:{story:"키보드 입력이나 단축키를 시각적으로 표현합니다."}}}},t={name:"파일 경로",args:{type:"code",text:"src/components/Button.vue"},parameters:{docs:{description:{story:"파일 경로·변수명 등 기술 용어를 본문에 삽입합니다."}}}},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"16px",fontSize:"14px",color:"#333"},children:[e.jsxs("p",{children:["명령어를 실행하세요: ",e.jsx("code",{style:{fontFamily:"monospace",background:"#1e1e2e",color:"#cdd6f4",padding:"2px 6px",borderRadius:"4px"},children:"npm run dev"})]}),e.jsxs("p",{children:["저장하려면 ",e.jsx("kbd",{style:{fontFamily:"monospace",background:"#f5f5f5",border:"1px solid #ccc",padding:"2px 6px",borderRadius:"4px",boxShadow:"0 1px 0 #bbb"},children:"Ctrl"})," + ",e.jsx("kbd",{style:{fontFamily:"monospace",background:"#f5f5f5",border:"1px solid #ccc",padding:"2px 6px",borderRadius:"4px",boxShadow:"0 1px 0 #bbb"},children:"S"}),"를 누르세요."]}),e.jsxs("p",{children:["설정 파일은 ",e.jsx("code",{style:{fontFamily:"monospace",background:"#1e1e2e",color:"#cdd6f4",padding:"2px 6px",borderRadius:"4px"},children:".env.local"}),"에 있습니다."]})]}),name:"전체 비교",parameters:{controls:{disable:!0},docs:{description:{story:"실제 문서에서 code와 kbd가 함께 사용되는 예시입니다."}}}};var y,b,x;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '인라인 코드',
  args: {
    type: 'code',
    text: 'npm install krds-vue'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '설명 문서·본문 안에 코드를 삽입할 때 사용합니다.'
      }
    }
  }
}`,...(x=(b=r.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var f,g,k;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '키보드 단축키',
  args: {
    type: 'keyboard',
    text: 'Ctrl + K'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '키보드 입력이나 단축키를 시각적으로 표현합니다.'
      }
    }
  }
}`,...(k=(g=n.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var h,v,w;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '파일 경로',
  args: {
    type: 'code',
    text: 'src/components/Button.vue'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '파일 경로·변수명 등 기술 용어를 본문에 삽입합니다.'
      }
    }
  }
}`,...(w=(v=t.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var C,R,F;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '16px',
    fontSize: '14px',
    color: '#333'
  }}>
        <p>명령어를 실행하세요: <code style={{
        fontFamily: 'monospace',
        background: '#1e1e2e',
        color: '#cdd6f4',
        padding: '2px 6px',
        borderRadius: '4px'
      }}>npm run dev</code></p>
        <p>저장하려면 <kbd style={{
        fontFamily: 'monospace',
        background: '#f5f5f5',
        border: '1px solid #ccc',
        padding: '2px 6px',
        borderRadius: '4px',
        boxShadow: '0 1px 0 #bbb'
      }}>Ctrl</kbd> + <kbd style={{
        fontFamily: 'monospace',
        background: '#f5f5f5',
        border: '1px solid #ccc',
        padding: '2px 6px',
        borderRadius: '4px',
        boxShadow: '0 1px 0 #bbb'
      }}>S</kbd>를 누르세요.</p>
        <p>설정 파일은 <code style={{
        fontFamily: 'monospace',
        background: '#1e1e2e',
        color: '#cdd6f4',
        padding: '2px 6px',
        borderRadius: '4px'
      }}>.env.local</code>에 있습니다.</p>
      </div>,
  name: '전체 비교',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: '실제 문서에서 code와 kbd가 함께 사용되는 예시입니다.'
      }
    }
  }
}`,...(F=(R=a.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};const B=["InlineCode","KeyboardShortcut","FilePath","AllVariants"];export{a as AllVariants,t as FilePath,r as InlineCode,n as KeyboardShortcut,B as __namedExportsOrder,q as default};
