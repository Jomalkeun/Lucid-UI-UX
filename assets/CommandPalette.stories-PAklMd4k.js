import{j as r}from"./jsx-runtime-D_zvdyIk.js";function c({children:e,...s}){return r.jsx("div",{...s,children:e})}c.__docgenInfo={description:"",methods:[],displayName:"CommandPalette",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const i={title:"Organisms/Navigation/CommandPalette",component:c,tags:["autodocs","navigation","custom-ui","ref:shadcn-ui"],parameters:{docs:{description:{component:`
## CommandPalette

**⌘K (Cmd+K)로 열리는 전역 검색·액션 창**입니다. 주요 메뉴·기능에 빠르게 접근할 수 있습니다.

---

### 언제 사용하나요?

- 어드민 대시보드의 전역 기능 실행
- 문서 에디터의 빠른 명령 실행
- 복잡한 IA를 가진 제품의 대안 탐색 경로

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | \`role="dialog"\`, \`aria-modal="true"\`로 모달 영역을 명시하세요. |
| ✅ | 열림 시 포커스가 입력창으로 이동해야 합니다. |
| ✅ | \`Escape\`로 닫기가 가능해야 합니다. |
| ✅ | 결과 목록을 키보드 방향키로 탐색할 수 있어야 합니다. |
        `}}},argTypes:{placeholder:{description:"검색 플레이스홀더",control:"text",table:{type:{summary:"string"},category:"Content"}},commands:{description:"명령 목록",control:"object",table:{type:{summary:"Array"},category:"Content"}},defaultOpen:{description:"기본 열림",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}}},args:{placeholder:"명령 또는 페이지 검색...",defaultOpen:!0,commands:[{label:"새 문서 작성",description:"빈 문서를 새로 만듭니다.",icon:"M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z",iconBg:"#e8f0fe",iconColor:"#1a73e8",shortcut:"⌘N"},{label:"사용자 관리",description:"사용자 목록을 조회하고 관리합니다.",icon:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",iconBg:"#f3e5f5",iconColor:"#7b1fa2",shortcut:""},{label:"통계 대시보드",description:"핵심 지표를 한눈에 확인합니다.",icon:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z",iconBg:"#e8f5e9",iconColor:"#2e7d32",shortcut:"⌘D"},{label:"설정",description:"시스템 설정을 변경합니다.",icon:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z",iconBg:"#fff3e0",iconColor:"#e65100",shortcut:"⌘,"}]},render:e=>r.jsx(c,{...e,children:e.children??e.label??e.text??void 0})},o={name:"기본 커맨드 팔레트",parameters:{docs:{description:{story:"버튼 클릭으로 열거나 ⌘K 단축키를 사용합니다. 텍스트 입력으로 명령을 필터링합니다."}}}};var t,a,n;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: '기본 커맨드 팔레트',
  parameters: {
    docs: {
      description: {
        story: '버튼 클릭으로 열거나 ⌘K 단축키를 사용합니다. 텍스트 입력으로 명령을 필터링합니다.'
      }
    }
  }
}`,...(n=(a=o.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const m=["Default"];export{o as Default,m as __namedExportsOrder,i as default};
