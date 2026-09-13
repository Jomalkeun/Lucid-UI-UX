import{j}from"./jsx-runtime-D_zvdyIk.js";import{d as R}from"./reference-types-4ftiVeOu.js";import{r as V}from"./index-BxXVWNx3.js";import{c as k}from"./index-CkIaN0ex.js";import{c as B}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const L=k("flex",{variants:{direction:{row:"flex-row",column:"flex-col","row-reverse":"flex-row-reverse","column-reverse":"flex-col-reverse"},justify:{"justify-start":"justify-start","justify-end":"justify-end","justify-center":"justify-center","justify-between":"justify-between","justify-around":"justify-around","justify-evenly":"justify-evenly"},align:{"align-stretch":"items-stretch","align-start":"items-start","align-end":"items-end","align-center":"items-center","align-baseline":"items-baseline"},wrap:{nowrap:"flex-nowrap",wrap:"flex-wrap","wrap-reverse":"flex-wrap-reverse"},gap:{"gap-4":"gap-1","gap-8":"gap-2","gap-12":"gap-3","gap-16":"gap-4","gap-24":"gap-6","gap-32":"gap-8"}},defaultVariants:{direction:"row",justify:"justify-start",align:"align-center",wrap:"nowrap",gap:"gap-8"}}),s=V.forwardRef(({className:e,direction:x,justify:b,align:v,wrap:h,gap:C,...F},S)=>j.jsx("div",{ref:S,className:B(L({direction:x,justify:b,align:v,wrap:h,gap:C}),e),...F}));s.displayName="Flex";s.__docgenInfo={description:"",methods:[],displayName:"Flex",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["VariantProps"]};const N=R([{library:"Bootstrap",component:"Flex",url:"https://getbootstrap.com/docs/5.3/utilities/flex/",usedFor:["comparison"],relation:"compared"},{library:"Ant Design",component:"Flex",url:"https://ant.design/components/flex/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Flex",url:"https://www.chakra-ui.com/docs/components/flex",usedFor:["comparison"],relation:"compared"}]),q={title:"Layout/Primitives/Flex",component:s,tags:["ref:bootstrap","autodocs","layout","custom-ui","ref:chakra-ui","ref:ant-design"],parameters:{references:N,docs:{description:{component:`
## Flex

**CSS Flexbox 레이아웃을 추상화**한 컨테이너입니다. 자식 요소를 수평·수직으로 자유롭게 배치할 수 있습니다.

---

### 언제 사용하나요?

| 용도 | 예시 |
|---|---|
| 수평 나열 | 아이콘 + 텍스트, 버튼 그룹 |
| 중앙 정렬 | 카드 내 콘텐츠 수직 중앙 |
| 균등 분배 | 내비게이션 메뉴 아이템 |

---

### direction 선택 기준

| direction | 설명 |
|---|---|
| \`row\` | 수평 배치 (기본) |
| \`column\` | 수직 배치 |
| \`row-reverse\` / \`column-reverse\` | 역방향 |
        `}}},argTypes:{direction:{description:"주축 방향",control:{type:"select"},options:["row","column","row-reverse","column-reverse"],table:{type:{summary:"'row' | 'column' | 'row-reverse' | 'column-reverse'"},defaultValue:{summary:"'row'"},category:"Layout"}},justify:{description:"주축 정렬 (justify-content)",control:{type:"select"},options:["justify-start","justify-end","justify-center","justify-between","justify-around","justify-evenly"],table:{type:{summary:"'justify-start' | 'justify-end' | 'justify-center' | ..."},defaultValue:{summary:"'justify-start'"},category:"Layout"}},align:{description:"교차축 정렬 (align-items)",control:{type:"select"},options:["align-stretch","align-start","align-end","align-center","align-baseline"],table:{type:{summary:"'align-stretch' | 'align-start' | 'align-end' | 'align-center' | 'align-baseline'"},defaultValue:{summary:"'align-center'"},category:"Layout"}},wrap:{description:"줄바꿈 (flex-wrap)",control:{type:"select"},options:["nowrap","wrap","wrap-reverse"],table:{type:{summary:"'nowrap' | 'wrap' | 'wrap-reverse'"},defaultValue:{summary:"'nowrap'"},category:"Layout"}},gap:{description:"자식 간 간격",control:{type:"select"},options:["gap-4","gap-8","gap-12","gap-16","gap-24","gap-32"],table:{type:{summary:"'gap-4' | 'gap-8' | 'gap-12' | 'gap-16' | 'gap-24' | 'gap-32'"},defaultValue:{summary:"'gap-8'"},category:"Spacing"}},itemCount:{description:"미리보기 아이템 수 (스토리 전용)",control:{type:"range",min:1,max:8},table:{type:{summary:"number"},defaultValue:{summary:"3"},category:"Preview"}}},args:{direction:"row",justify:"justify-start",align:"align-center",wrap:"nowrap",gap:"gap-8",itemCount:3},render:e=>j.jsx(s,{...e,children:e.children??e.label??e.text??void 0})},r={name:"기본 수평 배치 (Row)",parameters:{docs:{description:{story:"기본 수평 Flex 컨테이너입니다. 버튼 그룹, 아이콘+텍스트 조합에 활용합니다."}}}},t={name:"수직 배치 (Column)",args:{direction:"column",gap:"gap-12"},parameters:{docs:{description:{story:"자식 요소를 수직으로 쌓습니다. Stack과 유사하지만 더 세밀한 제어가 가능합니다."}}}},a={name:"양끝 정렬 (Space Between)",args:{justify:"justify-between",itemCount:3},parameters:{docs:{description:{story:"자식 요소를 양끝과 균등 간격으로 배치합니다. 헤더 레이아웃에 자주 사용합니다."}}}},n={name:"중앙 정렬 (Centered)",args:{justify:"justify-center",align:"align-center"},parameters:{docs:{description:{story:"가로·세로 모두 중앙 정렬합니다. 빈 상태 화면이나 카드 내 아이콘 배치에 활용합니다."}}}};var o,i,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '기본 수평 배치 (Row)',
  parameters: {
    docs: {
      description: {
        story: '기본 수평 Flex 컨테이너입니다. 버튼 그룹, 아이콘+텍스트 조합에 활용합니다.'
      }
    }
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,l,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '수직 배치 (Column)',
  args: {
    direction: 'column',
    gap: 'gap-12'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '자식 요소를 수직으로 쌓습니다. Stack과 유사하지만 더 세밀한 제어가 가능합니다.'
      }
    }
  }
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,d,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '양끝 정렬 (Space Between)',
  args: {
    justify: 'justify-between',
    itemCount: 3
  } as any,
  parameters: {
    docs: {
      description: {
        story: '자식 요소를 양끝과 균등 간격으로 배치합니다. 헤더 레이아웃에 자주 사용합니다.'
      }
    }
  }
}`,...(y=(d=a.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var g,f,w;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '중앙 정렬 (Centered)',
  args: {
    justify: 'justify-center',
    align: 'align-center'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '가로·세로 모두 중앙 정렬합니다. 빈 상태 화면이나 카드 내 아이콘 배치에 활용합니다.'
      }
    }
  }
}`,...(w=(f=n.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};const A=["Default","Column","SpaceBetween","Centered"];export{n as Centered,t as Column,r as Default,a as SpaceBetween,A as __namedExportsOrder,q as default};
