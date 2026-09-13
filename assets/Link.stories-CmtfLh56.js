import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as B}from"./reference-types-4ftiVeOu.js";import{r as C}from"./index-BxXVWNx3.js";import{c as H}from"./index-CkIaN0ex.js";import{c as N}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const U=H("inline-flex items-center gap-1 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-krds-primary-50",{variants:{variant:{default:"text-krds-primary-base hover:text-krds-primary-70",basic:"text-krds-gray-90 hover:text-krds-gray-70",unstyled:"text-inherit hover:text-inherit"},underline:{always:"underline underline-offset-2",hover:"no-underline hover:underline hover:underline-offset-2",none:"no-underline"},size:{xsmall:"text-krds-body-xs",small:"text-krds-body-sm",medium:"text-krds-body-md",large:"text-krds-body-lg",xlarge:"text-krds-title-xs"}},defaultVariants:{variant:"default",underline:"always",size:"medium"}}),r=C.forwardRef(({href:a="#",label:D,external:d,disabled:n,variant:I,underline:T,size:_,preserveColorOnHover:F,className:q,children:E,onClick:p,...c},A)=>{const R=m=>{if(n){m.preventDefault();return}p==null||p(m)};return e.jsxs("a",{ref:A,href:n?void 0:a,target:d?"_blank":c.target,rel:d?"noopener noreferrer":c.rel,"aria-disabled":n||void 0,tabIndex:n?-1:void 0,onClick:R,className:N(U({variant:I,underline:T,size:_}),F&&"hover:text-inherit",n&&"opacity-40 cursor-not-allowed pointer-events-none",q),...c,children:[E??D,d&&!n&&e.jsx("svg",{"aria-hidden":"true",focusable:"false",width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M11 3h6v6M17 3l-9 9M8 5H4a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-4"})})]})});r.displayName="Link";r.__docgenInfo={description:"",methods:[],displayName:"Link",props:{href:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},external:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},preserveColorOnHover:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit","VariantProps"]};const O=B([{library:"U.S. Web Design System",component:"Link",url:"https://designsystem.digital.gov/components/link/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"KRDS",component:"Link",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-link--docs",usedFor:["design","behavior","api"],relation:"adapted"},{library:"Bootstrap",component:"Link",url:"https://getbootstrap.com/docs/5.3/utilities/link/",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"Links",url:"https://flowbite.com/docs/typography/links/",usedFor:["comparison"],relation:"compared"},{library:"daisyUI",component:"Link",url:"https://daisyui.com/components/link/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Link",url:"https://www.chakra-ui.com/docs/components/link",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Components",url:"https://quasar.dev/components",usedFor:["comparison"],relation:"compared"}]),J={title:"Atoms/Primitives/Link",component:r,tags:["autodocs","navigation","ref:krds","ref:chakra-ui","ref:daisy-ui","ref:flowbite","ref:vuetify","ref:mui","ref:bootstrap","ref:quasar","ref:uswds"],parameters:{references:O,docs:{description:{component:`
## Link

텍스트 기반 **하이퍼링크**를 렌더링하는 기본 컴포넌트입니다.
\`variant\`, \`underline\`, \`size\` prop으로 스타일을 제어하고,
\`external\` prop으로 외부 링크 속성(\`target="_blank"\`, \`rel\`)을 자동 처리합니다.

---

### 언제 사용하나요?

| 상황 | 권장 |
|---|---|
| 단독 인라인 텍스트 링크 | **Link** ✅ |
| 버튼처럼 생긴 클릭 액션 | \`Button\` |
| 내비게이션 메뉴 링크 | \`SideNavigationLink\` / \`GNB\` |
| 브레드크럼 링크 | \`Breadcrumb\` |

---

### 사용 지침

- **href** 는 항상 유효한 URL 또는 앵커를 사용하세요. \`#\`만 있는 경우 스크린리더가 의미를 파악하기 어렵습니다.
- **external** 을 \`true\`로 설정하면 \`target="_blank"\`와 \`rel="noopener noreferrer"\`가 자동 적용됩니다.
- **disabled** 상태에서는 Tab 포커스가 제거되고 클릭이 차단됩니다.
- 링크 텍스트만으로 목적지를 이해할 수 있어야 합니다. "여기를 클릭" 같은 텍스트는 지양하세요.

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | \`<a>\` 태그로 렌더링되어 키보드 탐색이 보장됩니다. |
| ✅ | 외부 링크에 \`rel="noopener noreferrer"\`가 자동 추가됩니다. |
| ✅ | \`disabled\` 시 \`aria-disabled="true"\`와 포커스 차단이 적용됩니다. |
| ⚠️ | 링크 텍스트가 단독으로 목적지를 설명해야 합니다. |
        `}}},argTypes:{label:{description:"링크에 표시되는 텍스트입니다. (slot 내용)",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"(없음)"},category:"Content"}},href:{description:"링크 URL입니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"#"},category:"Content"}},variant:{description:"링크 스타일 타입입니다.",control:{type:"select"},options:["default","basic","unstyled"],table:{type:{summary:"'default' | 'basic' | 'unstyled'"},defaultValue:{summary:"'default'"},category:"Appearance"}},underline:{description:"밑줄 표시 시점입니다.",control:{type:"select"},options:["always","hover","none"],table:{type:{summary:"'always' | 'hover' | 'none'"},defaultValue:{summary:"'always'"},category:"Appearance"}},size:{description:"링크 텍스트 크기입니다.",control:{type:"select"},options:["xsmall","small","medium","large","xlarge"],table:{type:{summary:"'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'"},defaultValue:{summary:"'medium'"},category:"Appearance"}},preserveColorOnHover:{description:"호버 시 색상을 유지할지 여부입니다.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Appearance"}},external:{description:'외부 링크 여부입니다. `true`이면 `target="_blank"`와 `rel="noopener noreferrer"`가 자동 적용됩니다.',control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},disabled:{description:"비활성화 상태입니다. 클릭이 차단되고 Tab 포커스에서 제외됩니다.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},target:{description:"`<a>` 태그의 `target` 속성입니다. `external` prop과 별도로 직접 지정할 수 있습니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"(없음)"},category:"State"}}},args:{label:"상세 보기",href:"#",variant:"default",underline:"always",size:"medium",external:!1,disabled:!1},render:a=>e.jsx(r,{...a,children:a.children??a.label??a.text??void 0})},t={name:"기본 (Default)",parameters:{docs:{description:{story:"**가장 기본적인 Link** 상태입니다. 내부 페이지 이동 시 사용하세요."}}}},s={name:"외부 링크 (External)",args:{label:"정부24 바로가기",href:"https://www.gov.kr",external:!0},parameters:{docs:{description:{story:'\n**외부 사이트로 이동하는 링크**입니다.\n`external: true` 설정 시 `target="_blank"`와 `rel="noopener noreferrer"`가 자동 적용됩니다.\n아이콘이 함께 표시되어 외부 링크임을 시각적으로 안내합니다.\n        '}}}},i={name:"비활성화 (Disabled)",args:{label:"비활성 링크",href:"#",disabled:!0},parameters:{docs:{description:{story:`
**클릭이 불가능한 링크** 상태입니다.
\`disabled: true\` 설정 시 시각적으로 흐리게 표시되고, Tab 포커스에서도 제외됩니다.

> ⚠️ 링크를 영구적으로 제거해야 한다면 \`disabled\` 대신 렌더링 자체를 조건부로 처리하세요.
        `}}}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px"},children:[e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(r,{href:"#",variant:"default",children:"default 스타일"}),e.jsx(r,{href:"#",variant:"basic",children:"basic 스타일"}),e.jsx(r,{href:"#",variant:"unstyled",children:"unstyled 스타일"})]}),e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(r,{href:"#",underline:"always",children:"항상 밑줄"}),e.jsx(r,{href:"#",underline:"hover",children:"호버 시 밑줄"}),e.jsx(r,{href:"#",underline:"none",children:"밑줄 없음"})]}),e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(r,{href:"#",size:"xsmall",children:"xsmall"}),e.jsx(r,{href:"#",size:"small",children:"small"}),e.jsx(r,{href:"#",size:"medium",children:"medium"}),e.jsx(r,{href:"#",size:"large",children:"large"}),e.jsx(r,{href:"#",size:"xlarge",children:"xlarge"})]})]}),name:"스타일 변형 비교 (Variants)",parameters:{docs:{description:{story:"**variant, underline, size** 조합을 한 화면에서 비교합니다."}},controls:{disable:!0}}},l={render:()=>e.jsxs("p",{style:{fontSize:"15px",lineHeight:"1.8",maxWidth:"480px",padding:"16px"},children:["이벤트 자세한 내용은 ",e.jsx(r,{href:"#",children:"공지사항"}),"에서 확인하세요. 외부 서비스 이용은 ",e.jsx(r,{href:"https://www.gov.kr",external:!0,children:"정부24"}),"로 이동합니다."]}),name:"문단 내 인라인 사용",parameters:{docs:{description:{story:`
**문단(paragraph) 안에서 인라인으로 사용하는 예시**입니다.
링크 텍스트가 문장 내에서 자연스럽게 어우러지는지 확인하세요.
        `}},controls:{disable:!0}}};var u,f,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '기본 (Default)',
  parameters: {
    docs: {
      description: {
        story: \`**가장 기본적인 Link** 상태입니다. 내부 페이지 이동 시 사용하세요.\`
      }
    }
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var h,x,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '외부 링크 (External)',
  args: {
    label: '정부24 바로가기',
    href: 'https://www.gov.kr',
    external: true
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**외부 사이트로 이동하는 링크**입니다.
\\\`external: true\\\` 설정 시 \\\`target="_blank"\\\`와 \\\`rel="noopener noreferrer"\\\`가 자동 적용됩니다.
아이콘이 함께 표시되어 외부 링크임을 시각적으로 안내합니다.
        \`
      }
    }
  }
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var b,k,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '비활성화 (Disabled)',
  args: {
    label: '비활성 링크',
    href: '#',
    disabled: true
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**클릭이 불가능한 링크** 상태입니다.
\\\`disabled: true\\\` 설정 시 시각적으로 흐리게 표시되고, Tab 포커스에서도 제외됩니다.

> ⚠️ 링크를 영구적으로 제거해야 한다면 \\\`disabled\\\` 대신 렌더링 자체를 조건부로 처리하세요.
        \`
      }
    }
  }
}`,...(v=(k=i.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var L,w,j;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px'
  }}>
        <div style={{
      display: 'flex',
      gap: '24px',
      alignItems: 'center'
    }}>
          <Link href="#" variant="default">default 스타일</Link>
          <Link href="#" variant="basic">basic 스타일</Link>
          <Link href="#" variant="unstyled">unstyled 스타일</Link>
        </div>
        <div style={{
      display: 'flex',
      gap: '24px',
      alignItems: 'center'
    }}>
          <Link href="#" underline="always">항상 밑줄</Link>
          <Link href="#" underline="hover">호버 시 밑줄</Link>
          <Link href="#" underline="none">밑줄 없음</Link>
        </div>
        <div style={{
      display: 'flex',
      gap: '24px',
      alignItems: 'center'
    }}>
          <Link href="#" size="xsmall">xsmall</Link>
          <Link href="#" size="small">small</Link>
          <Link href="#" size="medium">medium</Link>
          <Link href="#" size="large">large</Link>
          <Link href="#" size="xlarge">xlarge</Link>
        </div>
      </div>,
  name: '스타일 변형 비교 (Variants)',
  parameters: {
    docs: {
      description: {
        story: \`**variant, underline, size** 조합을 한 화면에서 비교합니다.\`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(j=(w=o.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var z,V,S;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <p style={{
    fontSize: '15px',
    lineHeight: '1.8',
    maxWidth: '480px',
    padding: '16px'
  }}>
        이벤트 자세한 내용은 <Link href="#">공지사항</Link>에서 확인하세요.
        외부 서비스 이용은 <Link href="https://www.gov.kr" external={true}>정부24</Link>로 이동합니다.
      </p>,
  name: '문단 내 인라인 사용',
  parameters: {
    docs: {
      description: {
        story: \`
**문단(paragraph) 안에서 인라인으로 사용하는 예시**입니다.
링크 텍스트가 문장 내에서 자연스럽게 어우러지는지 확인하세요.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(S=(V=l.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};const X=["Default","External","Disabled","Variants","InParagraph"];export{t as Default,i as Disabled,s as External,l as InParagraph,o as Variants,X as __namedExportsOrder,J as default};
