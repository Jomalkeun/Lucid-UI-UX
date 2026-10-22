import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as B}from"./reference-types-CC3VHbJD.js";import{c as k}from"./utils-DCADjnpI.js";import{C as D}from"./chevron-right-DtG4w6Mo.js";import"./createLucideIcon-Ct87QT5c.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";function i({items:a=[],ariaLabel:x="현재 경로",className:y,children:g}){return e.jsxs("nav",{"aria-label":x,className:k("flex",y),children:[e.jsx("ol",{className:"flex items-center flex-wrap gap-1 text-krds-body-sm",children:a.map((r,o)=>{const v=o===a.length-1&&!r.href;return e.jsxs("li",{className:"flex items-center gap-1",children:[o>0&&e.jsx(D,{className:"w-4 h-4 text-krds-gray-40 shrink-0","aria-hidden":"true"}),r.disabled?e.jsx("span",{"aria-disabled":"true",className:"text-krds-gray-40 cursor-not-allowed",children:r.text}):v?e.jsx("span",{"aria-current":"page",className:"text-krds-gray-90 font-medium",children:r.text}):r.href?e.jsx("a",{href:r.href,className:"text-krds-gray-60 hover:text-krds-primary-base hover:underline transition-colors",children:r.text}):e.jsx("span",{className:"text-krds-gray-90 font-medium",children:r.text})]},o)})}),g]})}i.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:"",defaultValue:{value:"[]",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'현재 경로'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const w=B([{library:"U.S. Web Design System",component:"Breadcrumb",url:"https://designsystem.digital.gov/components/breadcrumb/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"GOV.UK Design System",component:"Breadcrumbs",url:"https://design-system.service.gov.uk/components/breadcrumbs/",usedFor:["behavior","accessibility","comparison"],relation:"compared"},{library:"KRDS",component:"Breadcrumb",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-breadcrumb--docs",usedFor:["design","behavior","api"],relation:"adapted"},{library:"Bootstrap",component:"Breadcrumb",url:"https://getbootstrap.com/docs/5.3/components/breadcrumb/",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"Breadcrumb",url:"https://flowbite.com/docs/components/breadcrumb/",usedFor:["comparison"],relation:"compared"},{library:"daisyUI",component:"Breadcrumbs",url:"https://daisyui.com/components/breadcrumbs/",usedFor:["comparison"],relation:"compared"},{library:"Ant Design",component:"Breadcrumb",url:"https://ant.design/components/breadcrumb/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Breadcrumb",url:"https://www.chakra-ui.com/docs/components/breadcrumb",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Breadcrumbs",url:"https://quasar.dev/vue-components/breadcrumbs",usedFor:["comparison"],relation:"compared"}]),I={title:"Molecules/Navigation/Breadcrumb",component:i,tags:["autodocs","navigation","ref:krds","ref:chakra-ui","ref:shadcn-ui","ref:daisy-ui","ref:ant-design","ref:flowbite","ref:vuetify","ref:mui","ref:bootstrap","ref:quasar","ref:govuk","ref:uswds"],parameters:{references:w,docs:{description:{component:`
## Breadcrumb

사용자가 **현재 페이지의 위치**를 계층 구조로 파악할 수 있도록 돕는 탐색 보조 컴포넌트입니다.

---

### 사용 지침

- 최상위(홈)부터 현재 페이지까지의 경로를 \`items\` 배열로 전달합니다.
- **마지막 아이템**은 현재 페이지로, \`href\`를 생략하거나 \`disabled: true\`를 지정합니다.
- 경로가 2단계 이하라면 Breadcrumb 생략을 권장합니다.

> ⚠️ 아이템 텍스트는 \`label\`이 아닌 **\`text\`** 필드를 사용합니다.

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | \`<nav>\` 랜드마크에 \`ariaLabel\`이 자동으로 적용됩니다. |
| ✅ | 현재 페이지 아이템에 \`aria-current="page"\`가 자동으로 선언됩니다. |
| ✅ | \`disabled\` 아이템은 \`aria-disabled="true"\`로 처리됩니다. |
| ⚠️ | 페이지에 여러 \`<nav>\`가 있다면 \`ariaLabel\`로 구분해 주세요. |
        `}}},argTypes:{items:{description:"경로 아이템 배열입니다. 각 아이템은 `{ text, href, disabled }` 형태입니다.\n- `text`: 표시 텍스트 (필수)\n- `href`: 링크 URL. 현재 페이지는 생략합니다.\n- `disabled`: `true`이면 클릭이 비활성화됩니다.",control:"object",table:{type:{summary:"{ text: string; href?: string; disabled?: boolean }[]"},defaultValue:{summary:"[]"},category:"Content"}},ariaLabel:{description:"`<nav>` 랜드마크에 적용되는 접근성 레이블입니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'현재 경로'"},category:"Appearance"}}},args:{ariaLabel:"현재 경로",items:[{text:"홈",href:"/"},{text:"전시 관리",href:"/display"},{text:"배너"}]},render:a=>e.jsx(i,{...a,children:a.children??a.label??a.text??void 0})},t={name:"기본 (Default)",args:{ariaLabel:"현재 경로",items:[{text:"홈",href:"/"},{text:"전시 관리",href:"/display"},{text:"배너"}]},parameters:{docs:{description:{story:'\n**3단계 계층의 기본 Breadcrumb**입니다.\n마지막 아이템(`배너`)은 현재 페이지이므로 `href`를 생략하여 링크 없이 표시합니다.\n`aria-current="page"`가 자동으로 적용됩니다.\n        '}}}},s={name:"깊은 경로 (Deep)",args:{ariaLabel:"현재 경로",items:[{text:"홈",href:"/"},{text:"콘텐츠",href:"/content"},{text:"이벤트",href:"/content/event"},{text:"여름 이벤트"}]},parameters:{docs:{description:{story:`
**4단계 이상의 깊은 경로**에서의 Breadcrumb입니다.
하위 카테고리가 많은 콘텐츠 관리·상품 카탈로그 등에서 활용합니다.
        `}}}},n={name:"비활성 항목 포함 (With Disabled)",args:{ariaLabel:"현재 경로",items:[{text:"홈",href:"/"},{text:"운영 관리",disabled:!0},{text:"권한 설정"}]},parameters:{docs:{description:{story:`
**접근 불가한 중간 단계 경로**를 표시할 때 사용합니다.
\`disabled: true\`를 설정하면 해당 아이템은 클릭 불가 상태로 렌더링되고, \`aria-disabled="true"\`가 선언됩니다.

> 💡 권한이 없거나 아직 구현되지 않은 중간 경로 페이지가 있을 때 활용하세요.
        `}}}};var c,d,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '기본 (Default)',
  args: {
    ariaLabel: '현재 경로',
    items: [{
      text: '홈',
      href: '/'
    }, {
      text: '전시 관리',
      href: '/display'
    }, {
      text: '배너'
    }]
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**3단계 계층의 기본 Breadcrumb**입니다.
마지막 아이템(\\\`배너\\\`)은 현재 페이지이므로 \\\`href\\\`를 생략하여 링크 없이 표시합니다.
\\\`aria-current="page"\\\`가 자동으로 적용됩니다.
        \`
      }
    }
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,p,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '깊은 경로 (Deep)',
  args: {
    ariaLabel: '현재 경로',
    items: [{
      text: '홈',
      href: '/'
    }, {
      text: '콘텐츠',
      href: '/content'
    }, {
      text: '이벤트',
      href: '/content/event'
    }, {
      text: '여름 이벤트'
    }]
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**4단계 이상의 깊은 경로**에서의 Breadcrumb입니다.
하위 카테고리가 많은 콘텐츠 관리·상품 카탈로그 등에서 활용합니다.
        \`
      }
    }
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,f,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '비활성 항목 포함 (With Disabled)',
  args: {
    ariaLabel: '현재 경로',
    items: [{
      text: '홈',
      href: '/'
    }, {
      text: '운영 관리',
      disabled: true
    }, {
      text: '권한 설정'
    }]
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**접근 불가한 중간 단계 경로**를 표시할 때 사용합니다.
\\\`disabled: true\\\`를 설정하면 해당 아이템은 클릭 불가 상태로 렌더링되고, \\\`aria-disabled="true"\\\`가 선언됩니다.

> 💡 권한이 없거나 아직 구현되지 않은 중간 경로 페이지가 있을 때 활용하세요.
        \`
      }
    }
  }
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const T=["Default","Deep","WithDisabled"];export{s as Deep,t as Default,n as WithDisabled,T as __namedExportsOrder,I as default};
