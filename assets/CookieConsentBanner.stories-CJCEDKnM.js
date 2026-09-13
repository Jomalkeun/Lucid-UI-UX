import{j as p}from"./jsx-runtime-D_zvdyIk.js";function t({children:e,...m}){return p.jsx("div",{...m,children:e})}t.__docgenInfo={description:"",methods:[],displayName:"CookieConsentBanner",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const u={title:"Organisms/Content/CookieConsentBanner",component:t,tags:["autodocs","content","custom-ui"],parameters:{docs:{description:{component:`
## CookieConsentBanner

**개인정보보호법·GDPR 준수를 위한 쿠키/개인정보 동의 배너**입니다. 화면 하단에 고정 표시됩니다.

---

### 법적 요구사항

- **개인정보보호법 (국내)**: 쿠키 사용 목적 안내 및 동의 획득
- **GDPR (EU)**: 필수·기능·분석·마케팅 쿠키를 구분하여 선택 동의 제공

---

### 동의 유형

| 버튼 | 의미 |
|---|---|
| 모두 동의 | 모든 쿠키 허용 |
| 필수만 동의 | 서비스 운영 필수 쿠키만 허용 |
| 거부 | 선택적 쿠키 차단 |

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | \`role="dialog"\`, \`aria-live="polite"\`로 스크린리더에 알려주세요. |
| ✅ | 배너가 나타날 때 키보드 포커스를 배너 내부로 이동하세요. |
        `}}},argTypes:{title:{description:"배너 제목",control:"text",table:{type:{summary:"string"},category:"Content"}},description:{description:"안내 문구",control:"text",table:{type:{summary:"string"},category:"Content"}},darkMode:{description:"다크 모드",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Appearance"}},fixed:{description:"고정 배치 (fixed)",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Appearance"}}},args:{title:"쿠키 및 개인정보 사용 동의",description:"저희 서비스는 더 나은 경험 제공을 위해 쿠키를 사용합니다. 귀하의 쿠키 설정에 동의하시겠습니까? ",darkMode:!1,fixed:!1},render:e=>p.jsx(t,{...e,children:e.children??e.label??e.text??void 0})},o={name:"기본 동의 배너",parameters:{docs:{description:{story:"라이트 테마의 쿠키 동의 배너입니다."}}}},r={name:"다크 모드",args:{darkMode:!0},parameters:{docs:{description:{story:"다크 테마 쿠키 동의 배너입니다."}}}};var a,n,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '기본 동의 배너',
  parameters: {
    docs: {
      description: {
        story: '라이트 테마의 쿠키 동의 배너입니다.'
      }
    }
  }
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var c,i,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '다크 모드',
  args: {
    darkMode: true
  } as any,
  parameters: {
    docs: {
      description: {
        story: '다크 테마 쿠키 동의 배너입니다.'
      }
    }
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const y=["Default","DarkMode"];export{r as DarkMode,o as Default,y as __namedExportsOrder,u as default};
