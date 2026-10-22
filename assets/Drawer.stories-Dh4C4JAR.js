import{j as y}from"./jsx-runtime-D_zvdyIk.js";import{d as h}from"./reference-types-CC3VHbJD.js";import{D as a}from"./Drawer-DON1Hq8z.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Panel-CjOae9Tx.js";import"./dialog-4InejCSB.js";import"./index-BIfB_hJr.js";import"./index-Cuo70N6w.js";import"./index-CSKKChMh.js";import"./index-BKM4mA3Z.js";import"./index-D1FEdIFz.js";import"./index-W0uFi8-r.js";import"./index-BuIYde5q.js";import"./index-DCvtqWl1.js";import"./index-D5tP6kvT.js";import"./Combination-avlVGtdT.js";import"./index-D_4yO-tZ.js";import"./index-CkIaN0ex.js";import"./utils-DCADjnpI.js";import"./x-DsL683-u.js";import"./createLucideIcon-Ct87QT5c.js";import"./button-BRuq28Bc.js";import"./loader-circle-Db56uVXG.js";const f=h([{library:"PatternFly",component:"Drawer",url:"https://www.patternfly.org/components/drawer/",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Ark UI",component:"Drawer",url:"https://ark-ui.com/docs/components/drawer",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Bootstrap",component:"Offcanvas",url:"https://getbootstrap.com/docs/5.3/components/offcanvas/",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"Drawer",url:"https://flowbite.com/docs/components/drawer/",usedFor:["comparison"],relation:"compared"},{library:"daisyUI",component:"Drawer",url:"https://daisyui.com/components/drawer/",usedFor:["comparison"],relation:"compared"},{library:"Ant Design",component:"Drawer",url:"https://ant.design/components/drawer/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Drawer",url:"https://www.chakra-ui.com/docs/components/drawer",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Drawer",url:"https://base-ui.com/react/components/drawer",usedFor:["comparison"],relation:"compared"},{library:"Oracle Redwood",component:"Drawer Template",url:"https://redwood.oracle.com/?pageId=CORE9FC925F4FAAF4B8F886ACEF49C18E510&shell=guideline",usedFor:["behavior","content","comparison"],relation:"compared"}]),P={title:"Organisms/Content/Drawer",component:a,tags:["autodocs","content","custom-ui","ref:chakra-ui","ref:shadcn-ui","ref:ark-ui","ref:daisy-ui","ref:ant-design","ref:flowbite","ref:vuetify","ref:mui","ref:bootstrap","ref:base-ui","ref:patternfly","ref:oracle-redwood"],parameters:{references:f,docs:{description:{component:`
## Drawer / BottomSheet

**화면 가장자리에서 슬라이드되어 나오는** 사이드 패널 또는 바텀 시트입니다.

---

### Drawer vs Modal

| 항목 | Drawer | Modal |
|---|---|---|
| 등장 방향 | 좌/우/하 슬라이드 | 중앙 페이드인 |
| 배경 가림 | 일부 | 전체 |
| 다중 정보 | 적합 | 컴팩트 |
| 모바일 UX | BottomSheet로 활용 | 화면 가득 채움 |

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | \`role="dialog"\`, \`aria-modal="true"\`를 설정하세요. |
| ✅ | 열릴 때 포커스가 패널 내부(주로 닫기 버튼 또는 첫 번째 인터랙티브 요소)로 이동해야 합니다. |
| ✅ | \`Escape\` 키로 닫을 수 있어야 합니다. |
        `}}},argTypes:{placement:{description:"등장 방향",control:{type:"select"},options:["left","right","bottom"],table:{type:{summary:"'left' | 'right' | 'bottom'"},defaultValue:{summary:"'right'"},category:"Appearance"}},width:{description:"너비 (left/right 전용)",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'360px'"},category:"Size"}},height:{description:"높이 (bottom 전용)",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'50vh'"},category:"Size"}},title:{description:"드로어 제목",control:"text",table:{type:{summary:"string"},category:"Content"}},content:{description:"본문 내용",control:"text",table:{type:{summary:"string"},category:"Content"}},showFooter:{description:"푸터 액션 버튼 표시",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"State"}},closeOnBackdrop:{description:"배경 클릭으로 닫기",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"State"}},defaultOpen:{description:"기본 열림",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}}},args:{placement:"right",width:"360px",height:"50vh",title:"필터 설정",content:"검색 조건을 설정하여 결과를 좁히세요. 다양한 필터를 조합할 수 있습니다.",showFooter:!0,closeOnBackdrop:!0,defaultOpen:!0},render:e=>y.jsx(a,{...e,children:e.children??e.label??e.text??void 0})},r={name:"우측 드로어",args:{placement:"right"},parameters:{docs:{description:{story:"우측에서 나타나는 필터·설정 패널입니다."}}}},t={name:"바텀 시트",args:{placement:"bottom",height:"40vh"},parameters:{docs:{description:{story:"모바일에서 아래서 올라오는 바텀 시트입니다."}}}},o={name:"좌측 드로어",args:{placement:"left"},parameters:{docs:{description:{story:"좌측에서 나타나는 내비게이션 패널입니다."}}}};var n,s,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '우측 드로어',
  args: {
    placement: 'right'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '우측에서 나타나는 필터·설정 패널입니다.'
      }
    }
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var m,c,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '바텀 시트',
  args: {
    placement: 'bottom',
    height: '40vh'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '모바일에서 아래서 올라오는 바텀 시트입니다.'
      }
    }
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,d,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '좌측 드로어',
  args: {
    placement: 'left'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '좌측에서 나타나는 내비게이션 패널입니다.'
      }
    }
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const X=["RightDrawer","BottomSheet","LeftDrawer"];export{t as BottomSheet,o as LeftDrawer,r as RightDrawer,X as __namedExportsOrder,P as default};
