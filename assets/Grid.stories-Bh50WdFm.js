import{j as b}from"./jsx-runtime-D_zvdyIk.js";import{d as F}from"./reference-types-CC3VHbJD.js";import{g as v,b as R}from"./layout-tokens-pKokETSz.js";import{r as S}from"./index-BxXVWNx3.js";import{c as V}from"./index-CkIaN0ex.js";import{c as A}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const N=V("grid",{variants:{columns:R,gap:v},defaultVariants:{columns:"cols-3",gap:"gap-16"}}),n=S.forwardRef(({className:o,columns:x,gap:h,...G},w)=>b.jsx("div",{ref:w,className:A(N({columns:x,gap:h}),o),...G}));n.displayName="Grid";n.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["VariantProps"]};const j=F([{library:"Bootstrap",component:"Grid",url:"https://getbootstrap.com/docs/5.3/layout/grid/",usedFor:["comparison"],relation:"compared"},{library:"Mantine UI",component:"Grids",url:"https://ui.mantine.dev/category/grids/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."},{library:"Ant Design",component:"Grid",url:"https://ant.design/components/grid/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Grid",url:"https://www.chakra-ui.com/docs/components/grid",usedFor:["comparison"],relation:"compared"}]),U={title:"Layout/Primitives/Grid",component:n,tags:["ref:bootstrap","autodocs","layout","custom-ui","ref:chakra-ui","ref:ant-design","ref:mantine-ui"],parameters:{references:j,docs:{description:{component:`
## Grid

**CSS Grid 레이아웃을 추상화**한 컨테이너입니다. 열(column) 기반의 격자 레이아웃을 쉽게 구성합니다.

---

### 언제 사용하나요?

| 용도 | 예시 |
|---|---|
| 카드 그리드 | 상품·컨텐츠 목록 |
| 폼 레이아웃 | 2열 입력 필드 |
| 대시보드 위젯 | 통계 카드 배치 |

---

### 반응형 컬럼 패턴

\`\`\`css
/* cols-auto: 최소 200px, 나머지 채우기 */
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
\`\`\`
        `}}},argTypes:{columns:{description:"열 구성",control:{type:"select"},options:["cols-1","cols-2","cols-3","cols-4","cols-auto"],table:{type:{summary:"'cols-1' | 'cols-2' | 'cols-3' | 'cols-4' | 'cols-auto'"},defaultValue:{summary:"'cols-3'"},category:"Layout"}},gap:{description:"셀 간격",control:{type:"select"},options:["gap-4","gap-8","gap-12","gap-16","gap-24","gap-32"],table:{type:{summary:"'gap-4' | 'gap-8' | 'gap-12' | 'gap-16' | 'gap-24' | 'gap-32'"},defaultValue:{summary:"'gap-16'"},category:"Spacing"}},itemCount:{description:"미리보기 아이템 수 (스토리 전용)",control:{type:"range",min:1,max:12},table:{type:{summary:"number"},defaultValue:{summary:"6"},category:"Preview"}}},args:{columns:"cols-3",gap:"gap-16",itemCount:6},render:o=>b.jsx(n,{...o,children:o.children??o.label??o.text??void 0})},r={name:"3열 그리드 (3-Column)",parameters:{docs:{description:{story:"가장 일반적인 3열 균등 그리드입니다. 카드 목록·통계 위젯에 활용합니다."}}}},e={name:"2열 그리드 (2-Column)",args:{columns:"cols-2",itemCount:4},parameters:{docs:{description:{story:"폼 레이아웃이나 두 개 영역을 나눌 때 사용합니다."}}}},a={name:"4열 그리드 (4-Column)",args:{columns:"cols-4",itemCount:8},parameters:{docs:{description:{story:"대시보드 통계 카드 등 4개 항목을 한 행에 표시할 때 사용합니다."}}}},s={name:"자동 반응형 (Auto-fill)",args:{columns:"cols-auto",itemCount:7},parameters:{docs:{description:{story:"뷰포트 너비에 따라 자동으로 열 수가 조정되는 반응형 그리드입니다."}}}};var t,c,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: '3열 그리드 (3-Column)',
  parameters: {
    docs: {
      description: {
        story: '가장 일반적인 3열 균등 그리드입니다. 카드 목록·통계 위젯에 활용합니다.'
      }
    }
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,p,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '2열 그리드 (2-Column)',
  args: {
    columns: 'cols-2',
    itemCount: 4
  } as any,
  parameters: {
    docs: {
      description: {
        story: '폼 레이아웃이나 두 개 영역을 나눌 때 사용합니다.'
      }
    }
  }
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,d,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '4열 그리드 (4-Column)',
  args: {
    columns: 'cols-4',
    itemCount: 8
  } as any,
  parameters: {
    docs: {
      description: {
        story: '대시보드 통계 카드 등 4개 항목을 한 행에 표시할 때 사용합니다.'
      }
    }
  }
}`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var y,f,C;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '자동 반응형 (Auto-fill)',
  args: {
    columns: 'cols-auto',
    itemCount: 7
  } as any,
  parameters: {
    docs: {
      description: {
        story: '뷰포트 너비에 따라 자동으로 열 수가 조정되는 반응형 그리드입니다.'
      }
    }
  }
}`,...(C=(f=s.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const L=["Default","TwoColumn","FourColumn","AutoFill"];export{s as AutoFill,r as Default,a as FourColumn,e as TwoColumn,L as __namedExportsOrder,U as default};
