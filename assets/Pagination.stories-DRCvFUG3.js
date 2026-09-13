import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{d as S}from"./reference-types-4ftiVeOu.js";import{P as c}from"./Pagination-CdYtQaWq.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DCADjnpI.js";import"./chevron-left-CMQDJVKp.js";import"./createLucideIcon-Ct87QT5c.js";import"./chevron-right-DtG4w6Mo.js";const V=S([{library:"U.S. Web Design System",component:"Pagination",url:"https://designsystem.digital.gov/components/pagination/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"GOV.UK Design System",component:"Pagination",url:"https://design-system.service.gov.uk/components/pagination/",usedFor:["behavior","accessibility","comparison"],relation:"compared"},{library:"Ark UI",component:"Pagination",url:"https://ark-ui.com/docs/components/pagination",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"KRDS",component:"Pagination",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-pagination--docs",usedFor:["design","behavior","api"],relation:"adapted"},{library:"Bootstrap",component:"Pagination",url:"https://getbootstrap.com/docs/5.3/components/pagination/",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"Pagination",url:"https://flowbite.com/docs/components/pagination/",usedFor:["comparison"],relation:"compared"},{library:"daisyUI",component:"Pagination",url:"https://daisyui.com/components/pagination/",usedFor:["comparison"],relation:"compared"},{library:"Ant Design",component:"Pagination",url:"https://ant.design/components/pagination/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Pagination",url:"https://www.chakra-ui.com/docs/components/pagination",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Pagination",url:"https://quasar.dev/vue-components/pagination",usedFor:["comparison"],relation:"compared"}]),q={title:"Molecules/Navigation/Pagination",component:c,tags:["autodocs","navigation","ref:krds","ref:chakra-ui","ref:shadcn-ui","ref:ark-ui","ref:daisy-ui","ref:ant-design","ref:flowbite","ref:vuetify","ref:mui","ref:bootstrap","ref:quasar","ref:govuk","ref:uswds"],parameters:{references:V,docs:{description:{component:`
## Pagination

**목록 데이터를 페이지 단위로 탐색**할 수 있는 페이지네이션 컴포넌트입니다.

---

### 제어 방식

| 방식 | 사용 prop | 설명 |
|---|---|---|
| 제어 모드 | \`currentPage\` + \`v-model:currentPage\` | 외부 상태로 현재 페이지 관리 |
| 비제어 모드 | \`defaultPage\` | 초기 페이지만 지정, 내부에서 관리 |

---

### 페이지 번호 표시 범위

- **\`boundaryCount\`**: 첫/마지막 페이지 버튼 수 (기본: 1)
- **\`siblingCount\`**: 현재 페이지 좌우 버튼 수 (기본: 1)

---

### 이벤트

| 이벤트 | 인자 | 설명 |
|---|---|---|
| \`update:currentPage\` | \`number\` | \`v-model:currentPage\` 양방향 바인딩 emit |
| \`page-click\` | \`number\` | 클릭된 페이지 번호 수신 |

---

### 노출 메서드 (Expose)

| 메서드 | 설명 |
|---|---|
| \`goToPage(page)\` | \`ref\`로 컴포넌트 인스턴스를 참조하여 특정 페이지로 이동 |

\`\`\`vue
<Pagination ref="paginationRef" :totalPages="10" v-model:currentPage="page" />
\`\`\`
\`\`\`js
paginationRef.value.goToPage(5);
\`\`\`

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | 이전/다음 버튼은 비활성 시 \`<span>\`으로 변환되며 \`aria-disabled\`가 선언됩니다. |
| ✅ | 현재 페이지 버튼에 스크린리더 전용 "현재페이지" 텍스트가 포함됩니다. |
| ⚠️ | \`prevLabel\` / \`nextLabel\`을 의미 있는 텍스트로 유지하세요. |
        `}}},argTypes:{totalPages:{description:"전체 페이지 수입니다.",control:"number",table:{type:{summary:"number"},defaultValue:{summary:"1"},category:"Content"}},currentPage:{description:"현재 페이지 번호입니다. `v-model:currentPage`로 양방향 바인딩합니다.",control:"number",table:{type:{summary:"number"},defaultValue:{summary:"(없음)"},category:"Content"}},defaultPage:{description:"비제어 모드에서의 초기 페이지 번호입니다.",control:"number",table:{type:{summary:"number"},defaultValue:{summary:"1"},category:"Content"}},prevLabel:{description:"이전 버튼에 표시되는 텍스트입니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'이전'"},category:"Content"}},nextLabel:{description:"다음 버튼에 표시되는 텍스트입니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'다음'"},category:"Content"}},boundaryCount:{description:"처음/마지막 페이지 영역에 표시할 버튼 수입니다.",control:{type:"select"},options:[0,1,2,3],table:{type:{summary:"number"},defaultValue:{summary:"1"},category:"Appearance"}},siblingCount:{description:"현재 페이지 좌우에 표시할 버튼 수입니다.",control:{type:"select"},options:[0,1,2,3],table:{type:{summary:"number"},defaultValue:{summary:"1"},category:"Appearance"}},disabled:{description:"비활성화 상태입니다. 모든 페이지 이동이 차단됩니다.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},"onUpdate:currentPage":{description:"페이지가 변경될 때 발생합니다. `v-model:currentPage` 양방향 바인딩에 사용됩니다.",control:!1,table:{type:{summary:"number"},defaultValue:{summary:"-"},category:"Events"}},"onPage-click":{description:"페이지 번호 버튼을 클릭할 때 발생합니다. 클릭된 페이지 번호를 인자로 전달합니다.",control:!1,table:{type:{summary:"number"},defaultValue:{summary:"-"},category:"Events"}},goToPage:{description:"특정 페이지로 직접 이동하는 노출(expose) 메서드입니다. `ref`로 컴포넌트 인스턴스를 참조하여 호출합니다.",control:!1,table:{type:{summary:"(page: number) => void"},defaultValue:{summary:"-"},category:"Expose"}}},args:{totalPages:10,currentPage:4,defaultPage:1,prevLabel:"이전",nextLabel:"다음",boundaryCount:1,siblingCount:1,disabled:!1},render:e=>a.jsx(c,{...e,children:e.children??e.label??e.text??void 0})},r={name:"기본 (Default)",args:{totalPages:10,currentPage:4},parameters:{docs:{description:{story:"**10페이지, 4페이지 활성 상태**의 기본 Pagination입니다. 이전/다음 버튼이 모두 활성화되고 양쪽에 줄임표(`…`)가 나타나는 일반적인 상태를 보여줍니다."}}}},n={name:"중간 페이지 (Middle Page)",args:{totalPages:10,currentPage:5},parameters:{docs:{description:{story:"**현재 페이지가 중간(5)인 상태**입니다. 양쪽에 줄임표(`…`)가 나타나는 일반적인 패턴입니다."}}}},t={name:"마지막 페이지 (Last Page)",args:{totalPages:10,currentPage:10},parameters:{docs:{description:{story:'**마지막 페이지**에서는 "다음" 버튼이 비활성화되고 `<span aria-disabled>`로 변환됩니다.'}}}},o={name:"적은 페이지 (Few Pages)",args:{totalPages:5,currentPage:2},parameters:{docs:{description:{story:"**총 페이지 수가 적어 줄임표 없이 모두 표시**되는 상태입니다."}}}},s={name:"비활성화 (Disabled)",args:{totalPages:10,currentPage:5,disabled:!0},parameters:{docs:{description:{story:"**모든 페이지 이동이 차단된 비활성화 상태**입니다. 데이터 로딩 중 클릭을 막을 때 사용합니다."}}}},i={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"16px"},children:[a.jsxs("p",{style:{fontSize:"13px",color:"#555"},children:["현재 페이지: ",a.jsx("strong",{style:{color:"#1B1B19"},children:1})," / ",20]}),a.jsx(c,{"v-modelcurrentPage":1,totalPages:20})]}),name:"외부 상태 제어 (Controlled)",parameters:{docs:{description:{story:"\n**`v-model:currentPage`로 현재 페이지를 외부에서 관리**하는 제어 모드입니다.\n페이지 변경 시 `update:currentPage`가 emit되며, `@page-click`으로도 페이지 번호를 수신할 수 있습니다.\n        "}},controls:{disable:!0}}};var l,p,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '기본 (Default)',
  args: {
    totalPages: 10,
    currentPage: 4
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`**10페이지, 4페이지 활성 상태**의 기본 Pagination입니다. 이전/다음 버튼이 모두 활성화되고 양쪽에 줄임표(\\\`…\\\`)가 나타나는 일반적인 상태를 보여줍니다.\`
      }
    }
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '중간 페이지 (Middle Page)',
  args: {
    totalPages: 10,
    currentPage: 5
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`**현재 페이지가 중간(5)인 상태**입니다. 양쪽에 줄임표(\\\`…\\\`)가 나타나는 일반적인 패턴입니다.\`
      }
    }
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,P,b;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '마지막 페이지 (Last Page)',
  args: {
    totalPages: 10,
    currentPage: 10
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`**마지막 페이지**에서는 "다음" 버튼이 비활성화되고 \\\`<span aria-disabled>\\\`로 변환됩니다.\`
      }
    }
  }
}`,...(b=(P=t.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};var f,v,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '적은 페이지 (Few Pages)',
  args: {
    totalPages: 5,
    currentPage: 2
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`**총 페이지 수가 적어 줄임표 없이 모두 표시**되는 상태입니다.\`
      }
    }
  }
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var h,k,C;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '비활성화 (Disabled)',
  args: {
    totalPages: 10,
    currentPage: 5,
    disabled: true
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`**모든 페이지 이동이 차단된 비활성화 상태**입니다. 데이터 로딩 중 클릭을 막을 때 사용합니다.\`
      }
    }
  }
}`,...(C=(k=s.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var F,w,D;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const page = 1;
    const total = 20;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      padding: '16px'
    }}>
        <p style={{
        fontSize: '13px',
        color: '#555'
      }}>
          현재 페이지: <strong style={{
          color: '#1B1B19'
        }}>{page}</strong> / {total}
        </p>
        <Pagination v-modelcurrentPage={page} totalPages={total} />
      </div>;
  },
  name: '외부 상태 제어 (Controlled)',
  parameters: {
    docs: {
      description: {
        story: \`
**\\\`v-model:currentPage\\\`로 현재 페이지를 외부에서 관리**하는 제어 모드입니다.
페이지 변경 시 \\\`update:currentPage\\\`가 emit되며, \\\`@page-click\\\`으로도 페이지 번호를 수신할 수 있습니다.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(D=(w=i.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const z=["Default","MiddlePage","LastPage","FewPages","Disabled","Controlled"];export{i as Controlled,r as Default,s as Disabled,o as FewPages,t as LastPage,n as MiddlePage,z as __namedExportsOrder,q as default};
