import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{d as i}from"./reference-types-4ftiVeOu.js";function a({children:e,...l}){return s.jsx("div",{...l,children:e})}a.__docgenInfo={description:"",methods:[],displayName:"TutorialPanel",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const c=i([{library:"Cloudscape Design System",component:"Tutorial panel",url:"https://cloudscape.design/components/tutorial-panel/",usedFor:["behavior","accessibility","content"],relation:"compared"},{library:"KRDS",component:"TutorialPanel",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-tutorialpanel--docs",usedFor:["design","behavior","api"],relation:"adapted"}]),u={title:"Organisms/Navigation/TutorialPanel",component:a,tags:["autodocs","navigation","ref:krds","ref:cloudscape"],parameters:{references:c,docs:{description:{component:`
## TutorialPanel

**도움말과 튜토리얼을 사이드 패널로 제공**하는 컴포넌트입니다.
\`HelpPanel\`의 확장형으로, 단계별 가이드를 탭으로 구분하여 제공합니다.

---

### 구성 요소

| 컴포넌트 | 역할 |
|---|---|
| \`TutorialPanelRoot\` | 패널 상태 관리 루트 |
| \`TutorialPanelTrigger\` | 패널 열기 트리거 |
| \`TutorialPanelContainer\` | 패널 본체 |
| \`TutorialPanelTabs\` | 탭 컨테이너 |
| \`TutorialPanelTabPanel\` | 각 탭 콘텐츠 패널 |
| \`TutorialPanelClose\` | 닫기 버튼 |

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | 패널이 열릴 때 포커스가 내부로 이동합니다. |
| ✅ | Esc 키로 패널을 닫을 수 있습니다. |
| ✅ | 탭 간 이동은 방향키로 지원됩니다. |
        `}}},argTypes:{helpText:{control:"text",table:{category:"Content"}},tutorialSteps:{control:"object",table:{category:"Content"}}},args:{helpText:'이 화면에서 콘텐츠를 생성하고 채널에 배포할 수 있습니다. 제목과 본문을 작성한 후 "저장" 버튼을 클릭하세요.',tutorialSteps:["제목 입력란에 콘텐츠 제목을 입력합니다.","본문 에디터에서 내용을 작성합니다.","배포 채널을 선택합니다.","예약 발행이 필요하면 날짜를 설정합니다.",'"저장" 버튼을 클릭하여 완료합니다.']},render:e=>s.jsx(a,{...e,children:e.children??e.label??e.text??void 0})},t={name:"기본 (Default)",parameters:{docs:{description:{story:'"도움말 열기" 버튼을 클릭하면 **도움말·튜토리얼 탭이 있는 패널**이 열립니다.'}}}};var o,r,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '기본 (Default)',
  parameters: {
    docs: {
      description: {
        story: '"도움말 열기" 버튼을 클릭하면 **도움말·튜토리얼 탭이 있는 패널**이 열립니다.'
      }
    }
  }
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const m=["Default"];export{t as Default,m as __namedExportsOrder,u as default};
