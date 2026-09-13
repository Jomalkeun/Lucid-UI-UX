import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as S}from"./reference-types-4ftiVeOu.js";import{r as h}from"./index-BxXVWNx3.js";import{c as s}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const n=h.forwardRef(({className:r,targetId:a,linkText:f,...g},y)=>e.jsx("div",{ref:y,className:s("absolute top-0 left-0 z-[9999]",r),...g,children:e.jsx("a",{href:a?`#${a}`:"#",className:s("absolute -top-full left-0 block px-4 py-2","bg-krds-primary-50 text-krds-white text-krds-body-md font-medium","focus:top-0 focus:outline-none focus:ring-2 focus:ring-krds-primary-50 focus:ring-offset-2","transition-[top] duration-150"),children:f})}));n.displayName="SkipLink";n.__docgenInfo={description:"",methods:[],displayName:"SkipLink",props:{targetId:{required:!1,tsType:{name:"string"},description:""},linkText:{required:!1,tsType:{name:"string"},description:""}}};const T=S([{library:"GOV.UK Design System",component:"Skip link",url:"https://design-system.service.gov.uk/components/skip-link/",usedFor:["behavior","accessibility","comparison"],relation:"compared"},{library:"KRDS",component:"SkipLink",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-skiplink--docs",usedFor:["design","behavior","api"],relation:"adapted"},{library:"Chakra UI",component:"Skip Nav",url:"https://www.chakra-ui.com/docs/components/skip-nav",usedFor:["comparison"],relation:"compared"}]),R={title:"Atoms/Primitives/SkipLink",component:n,tags:["autodocs","accessibility","ref:krds","ref:chakra-ui","ref:govuk"],parameters:{references:T,docs:{description:{component:`
## SkipLink

키보드·보조기기 사용자가 **반복 내비게이션을 건너뛰고 본문으로 바로 이동**할 수 있게 해주는 접근성 전용 컴포넌트입니다.
평소에는 숨겨져 있다가 포커스를 받으면 화면에 나타납니다.

---

### 언제 사용하나요?

| 상황 | 권장 |
|---|---|
| 페이지마다 반복되는 GNB/헤더 스킵 | **SkipLink** ✅ |
| 사이드바 스킵 | **SkipLink** ✅ |
| 인라인 앵커 링크 | \`<a href="#section">\` 직접 사용 |

---

### 사용 지침

- **targetId** 에 본문 컨테이너의 \`id\` 를 지정하세요. (예: \`main-content\`)
- **linkText** 는 화면낭독기가 안내하는 텍스트입니다. "본문 바로가기" 같이 명확하게 작성하세요.
- 항상 페이지의 **첫 번째 포커스 가능 요소**로 위치해야 합니다.
- 포커스 수신 전에는 \`position: absolute; top: -9999px\` 등으로 시각적으로 숨겨집니다.

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | 포커스 시 화면에 표시됩니다. |
| ✅ | 클릭/Enter 시 \`#targetId\` 앵커로 이동합니다. |
| ✅ | 스크린리더에서 \`linkText\` 내용을 읽습니다. |
| ⚠️ | \`targetId\`에 해당하는 요소에 \`tabindex="-1"\`을 설정해야 포커스 이동이 정상 작동합니다. |
        `}}},argTypes:{targetId:{description:'건너뛰어 이동할 대상 요소의 `id`입니다. (예: `"main-content"`)',control:"text",table:{type:{summary:"string"},defaultValue:{summary:"(없음)"},category:"Content"}},linkText:{description:"링크에 표시되는 텍스트입니다. 스크린리더 사용자를 위해 명확히 작성하세요.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"(없음)"},category:"Content"}}},args:{targetId:"main-content",linkText:"본문 바로가기"},render:r=>e.jsx(n,{...r,children:r.children??r.label??r.text??void 0})},t={name:"기본 (Default)",parameters:{docs:{description:{story:`
**기본 SkipLink** 상태입니다.
포커스를 받기 전에는 화면에 보이지 않으며, Tab 키로 포커스 시 나타납니다.
Storybook에서 확인하려면 캔버스 영역을 클릭한 후 **Tab** 키를 눌러 보세요.
        `}}}},i={name:"사이드바 건너뛰기",args:{targetId:"sidebar",linkText:"사이드바 바로가기"},parameters:{docs:{description:{story:`
**사이드바로 건너뛰는** SkipLink 예시입니다.
본문 이전에 반복되는 사이드 내비게이션이 있을 때 사용합니다.
        `}}}},o={render:()=>e.jsxs("div",{style:{position:"relative",minHeight:"120px",border:"1px dashed #ccc",borderRadius:"8px",padding:"16px"},children:[e.jsx(n,{targetId:"demo-main",linkText:"본문 바로가기"}),e.jsx("nav",{style:{padding:"12px",background:"#f0f0f0",borderRadius:"4px",marginBottom:"12px"},children:e.jsx("span",{style:{fontSize:"13px",color:"#555"},children:"[ GNB 영역 — Tab으로 포커스 시 SkipLink가 상단에 나타납니다 ]"})}),e.jsx("main",{id:"demo-main",tabindex:"-1",style:{padding:"12px",background:"#fff",border:"1px solid #e0e0e0",borderRadius:"4px"},children:e.jsx("span",{style:{fontSize:"13px",color:"#333"},children:'본문 영역 (tabindex="-1" 설정됨)'})})]}),name:"실제 페이지 배치 예시",parameters:{docs:{description:{story:'\n**실제 페이지 레이아웃 배치 예시**입니다.\n`SkipLink`는 GNB 위에 위치해야 하며, 대상 요소(`#demo-main`)에 `tabindex="-1"`이 필요합니다.\nTab 키로 포커스를 이동하면 링크가 화면에 나타납니다.\n        '}},controls:{disable:!0}}};var d,p,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '기본 (Default)',
  parameters: {
    docs: {
      description: {
        story: \`
**기본 SkipLink** 상태입니다.
포커스를 받기 전에는 화면에 보이지 않으며, Tab 키로 포커스 시 나타납니다.
Storybook에서 확인하려면 캔버스 영역을 클릭한 후 **Tab** 키를 눌러 보세요.
        \`
      }
    }
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,l,k;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '사이드바 건너뛰기',
  args: {
    targetId: 'sidebar',
    linkText: '사이드바 바로가기'
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**사이드바로 건너뛰는** SkipLink 예시입니다.
본문 이전에 반복되는 사이드 내비게이션이 있을 때 사용합니다.
        \`
      }
    }
  }
}`,...(k=(l=i.parameters)==null?void 0:l.docs)==null?void 0:k.source}}};var x,u,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    minHeight: '120px',
    border: '1px dashed #ccc',
    borderRadius: '8px',
    padding: '16px'
  }}>
        <SkipLink targetId="demo-main" linkText="본문 바로가기" />
        <nav style={{
      padding: '12px',
      background: '#f0f0f0',
      borderRadius: '4px',
      marginBottom: '12px'
    }}>
          <span style={{
        fontSize: '13px',
        color: '#555'
      }}>[ GNB 영역 — Tab으로 포커스 시 SkipLink가 상단에 나타납니다 ]</span>
        </nav>
        <main id="demo-main" tabindex="-1" style={{
      padding: '12px',
      background: '#fff',
      border: '1px solid #e0e0e0',
      borderRadius: '4px'
    }}>
          <span style={{
        fontSize: '13px',
        color: '#333'
      }}>본문 영역 (tabindex="-1" 설정됨)</span>
        </main>
      </div>,
  name: '실제 페이지 배치 예시',
  parameters: {
    docs: {
      description: {
        story: \`
**실제 페이지 레이아웃 배치 예시**입니다.
\\\`SkipLink\\\`는 GNB 위에 위치해야 하며, 대상 요소(\\\`#demo-main\\\`)에 \\\`tabindex="-1"\\\`이 필요합니다.
Tab 키로 포커스를 이동하면 링크가 화면에 나타납니다.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const w=["Default","SkipToNav","InContext"];export{t as Default,o as InContext,i as SkipToNav,w as __namedExportsOrder,R as default};
