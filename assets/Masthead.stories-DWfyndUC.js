import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as x}from"./reference-types-4ftiVeOu.js";import{r as h}from"./index-BxXVWNx3.js";import{c as f}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const a=h.forwardRef(({className:r,text:p="공식 정부 웹사이트입니다",...l},u)=>e.jsx("div",{ref:u,role:"banner",className:f("w-full bg-krds-gray-10 border-b border-krds-gray-20",r),...l,children:e.jsxs("div",{className:"mx-auto max-w-screen-xl px-4 py-1 flex items-center gap-2",children:[e.jsxs("svg",{"aria-hidden":"true",focusable:"false",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"shrink-0 text-krds-gray-70",children:[e.jsx("circle",{cx:"8",cy:"8",r:"7",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M8 4v4l2.5 2.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsx("span",{className:"text-krds-body-xs text-krds-gray-70",children:p})]})}));a.displayName="Masthead";a.__docgenInfo={description:"",methods:[],displayName:"Masthead",props:{text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'공식 정부 웹사이트입니다'",computed:!1}}}};const y=x([{library:"KRDS",component:"Masthead",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-masthead--docs",usedFor:["design","behavior","api"],relation:"adapted"}]),M={title:"Atoms/Primitives/Masthead",component:a,tags:["autodocs","branding","ref:krds"],parameters:{references:y,docs:{description:{component:`
## Masthead

페이지 최상단에 위치하는 **공식 정부 웹사이트 확인 배너**입니다.
방문자에게 현재 페이지가 공식 정부 사이트임을 알리는 최소 단위 컴포넌트입니다.

---

### 언제 사용하나요?

| 상황 | 권장 |
|---|---|
| 모든 정부 공식 웹사이트 최상단 | **Masthead** ✅ |
| 사이트 헤더 브랜딩 | \`Header > HeaderBranding\` |

---

### 사용 지침

- **text** 는 배너에 표시되는 안내 문구입니다. 기본값은 라이브러리가 설정합니다.
- 페이지 레이아웃의 최상단, \`<Header>\` 위에 배치하는 것이 원칙입니다.
- 숨기거나 제거하지 않도록 하세요. 정부 공식 사이트 지침을 준수해야 합니다.

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | 충분한 색상 대비를 유지합니다. |
| ✅ | 스크린리더에서 텍스트 내용이 읽힙니다. |
        `}}},argTypes:{text:{description:"배너에 표시할 안내 문구입니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"공식 정부 웹사이트입니다"},category:"Content"}}},args:{text:"공식 정부 웹사이트입니다"},render:r=>e.jsx(a,{...r,children:r.children??r.label??r.text??void 0})},t={name:"기본 (Default)",parameters:{docs:{description:{story:`
**기본 Masthead** 상태입니다.
모든 정부 공식 웹사이트 최상단에 배치되어야 하는 공식 배너입니다.
        `}}}},s={name:"커스텀 문구",args:{text:"이 웹사이트는 대한민국 공식 정부 사이트입니다."},parameters:{docs:{description:{story:`
**안내 문구를 커스터마이징**한 상태입니다.
기관별 필요에 따라 문구를 조정할 수 있지만, KRDS 가이드라인 내 표준 문구 사용을 권장합니다.
        `}}}};var o,n,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '기본 (Default)',
  parameters: {
    docs: {
      description: {
        story: \`
**기본 Masthead** 상태입니다.
모든 정부 공식 웹사이트 최상단에 배치되어야 하는 공식 배너입니다.
        \`
      }
    }
  }
}`,...(d=(n=t.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var c,i,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '커스텀 문구',
  args: {
    text: '이 웹사이트는 대한민국 공식 정부 사이트입니다.'
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**안내 문구를 커스터마이징**한 상태입니다.
기관별 필요에 따라 문구를 조정할 수 있지만, KRDS 가이드라인 내 표준 문구 사용을 권장합니다.
        \`
      }
    }
  }
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const j=["Default","CustomText"];export{s as CustomText,t as Default,j as __namedExportsOrder,M as default};
