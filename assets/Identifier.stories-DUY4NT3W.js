import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as v}from"./reference-types-4ftiVeOu.js";import{r as j}from"./index-BxXVWNx3.js";import{c as A}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const t=j.forwardRef(({className:r,text:n,logoAlt:a="",logoSrc:d,...b},h)=>e.jsxs("div",{ref:h,className:A("inline-flex items-center gap-2",r),...b,children:[d?e.jsx("img",{src:d,alt:a,className:"h-8 w-auto"}):e.jsx("span",{"aria-label":a,role:"img",className:"inline-flex items-center justify-center h-8 w-8 rounded bg-krds-primary-50 text-krds-white text-krds-body-xs font-bold shrink-0",children:"정부"}),n&&e.jsx("span",{className:"text-krds-body-sm font-semibold text-krds-gray-90",children:n})]}));t.displayName="Identifier";t.__docgenInfo={description:"",methods:[],displayName:"Identifier",props:{text:{required:!1,tsType:{name:"string"},description:""},logoAlt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},logoSrc:{required:!1,tsType:{name:"string"},description:""}}};const I=v([{library:"U.S. Web Design System",component:"Identifier",url:"https://designsystem.digital.gov/components/identifier/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"KRDS",component:"Identifier",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-identifier--docs",usedFor:["design","behavior","api"],relation:"adapted"}]),z={title:"Atoms/Primitives/Identifier",component:t,tags:["autodocs","branding","ref:krds","ref:uswds"],parameters:{references:I,docs:{description:{component:`
## Identifier

정부 웹사이트의 **공식 식별 마크**를 표시하는 컴포넌트입니다.
로고 이미지와 기관명 텍스트를 함께 제공하여 사이트 출처를 명확히 합니다.

---

### 언제 사용하나요?

| 상황 | 권장 |
|---|---|
| 페이지 푸터에서 공식 기관 브랜딩 표시 | **Identifier** ✅ |
| 헤더 로고 영역 | \`Header > HeaderBranding\` |
| 단순 텍스트 기관명 | \`Typography\` |

---

### 사용 지침

- **text** 는 화면에 표시되는 기관명입니다. 생략 시 기본 텍스트가 노출됩니다.
- **logoAlt** 는 로고 이미지의 \`alt\` 텍스트로, 스크린리더 접근성을 위해 명확히 설정하세요.
- 배경색에 따라 명도 대비가 충분한지 확인하세요.

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | 로고 이미지에 \`alt\` 속성이 자동 적용됩니다. |
| ✅ | 텍스트는 스크린리더에서 바로 읽힙니다. |
| ⚠️ | 배경 대비비 4.5:1 이상을 유지하세요. |
        `}}},argTypes:{text:{description:"화면에 표시되는 기관명 텍스트입니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"(없음)"},category:"Content"}},logoAlt:{description:"로고 이미지의 `alt` 텍스트입니다. 스크린리더 접근성을 위해 명확히 입력하세요.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"(없음)"},category:"Content"}}},args:{text:"대한민국 정부",logoAlt:"대한민국 정부 로고"},render:r=>e.jsx(t,{...r,children:r.children??r.label??r.text??void 0})},s={name:"기본 (Default)",parameters:{docs:{description:{story:"\n**기본 Identifier** 상태입니다.\n`text`와 `logoAlt`를 설정한 최소 구성으로, 푸터 또는 공식 기관 마크 영역에 사용하세요.\n        "}}}},o={name:"커스텀 기관명",args:{text:"행정안전부",logoAlt:"행정안전부 로고"},parameters:{docs:{description:{story:`
**기관명을 커스터마이징**한 상태입니다.
부처·기관별로 \`text\` prop을 변경하여 공식 식별 마크를 재사용하세요.
        `}}}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px",background:"#f8f8f8",borderRadius:"8px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"12px",color:"#666",margin:"0 0 8px"},children:"기본"}),e.jsx(t,{text:"대한민국 정부",logoAlt:"대한민국 정부 로고"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"12px",color:"#666",margin:"0 0 8px"},children:"커스텀 기관명"}),e.jsx(t,{text:"행정안전부",logoAlt:"행정안전부 로고"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"12px",color:"#666",margin:"0 0 8px"},children:"텍스트 생략"}),e.jsx(t,{logoAlt:"정부 로고"})]})]}),name:"전체 상태 비교 (Overview)",parameters:{docs:{description:{story:"**Identifier의 모든 구성 변형**을 한 화면에서 비교합니다."}},controls:{disable:!0}}};var l,p,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '기본 (Default)',
  parameters: {
    docs: {
      description: {
        story: \`
**기본 Identifier** 상태입니다.
\\\`text\\\`와 \\\`logoAlt\\\`를 설정한 최소 구성으로, 푸터 또는 공식 기관 마크 영역에 사용하세요.
        \`
      }
    }
  }
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,x,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '커스텀 기관명',
  args: {
    text: '행정안전부',
    logoAlt: '행정안전부 로고'
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**기관명을 커스터마이징**한 상태입니다.
부처·기관별로 \\\`text\\\` prop을 변경하여 공식 식별 마크를 재사용하세요.
        \`
      }
    }
  }
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var g,u,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px',
    background: '#f8f8f8',
    borderRadius: '8px'
  }}>
        <div>
          <p style={{
        fontSize: '12px',
        color: '#666',
        margin: '0 0 8px'
      }}>기본</p>
          <Identifier text="대한민국 정부" logoAlt="대한민국 정부 로고" />
        </div>
        <div>
          <p style={{
        fontSize: '12px',
        color: '#666',
        margin: '0 0 8px'
      }}>커스텀 기관명</p>
          <Identifier text="행정안전부" logoAlt="행정안전부 로고" />
        </div>
        <div>
          <p style={{
        fontSize: '12px',
        color: '#666',
        margin: '0 0 8px'
      }}>텍스트 생략</p>
          <Identifier logoAlt="정부 로고" />
        </div>
      </div>,
  name: '전체 상태 비교 (Overview)',
  parameters: {
    docs: {
      description: {
        story: \`**Identifier의 모든 구성 변형**을 한 화면에서 비교합니다.\`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(y=(u=i.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const N=["Default","CustomText","AllStates"];export{i as AllStates,o as CustomText,s as Default,N as __namedExportsOrder,z as default};
