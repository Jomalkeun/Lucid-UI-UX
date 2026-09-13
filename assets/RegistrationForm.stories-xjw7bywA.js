import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{d as c}from"./reference-types-4ftiVeOu.js";function o({children:e,...i}){return s.jsx("div",{...i,children:e})}o.__docgenInfo={description:"",methods:[],displayName:"RegistrationForm",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const d=c([{library:"Mantine UI",component:"Authentication",url:"https://ui.mantine.dev/category/authentication/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."}]),p={title:"Organisms/Forms/RegistrationForm",component:o,tags:["autodocs","form","krds-extended","ref:mantine-ui"],parameters:{references:d,docs:{description:{component:`
## RegistrationForm (패턴)

**새 사용자 계정 생성 폼** 패턴입니다.
이름, 이메일, 역할 선택, 비밀번호, 약관 동의를 포함하며 필수 항목이 모두 채워져야 가입 버튼이 활성화됩니다.

---

### 주요 UX 포인트

- 필수 항목 미입력 시 제출 버튼 비활성화
- 제출 후 성공 메시지 표시 및 폼 비활성화
- 약관 동의를 체크박스로 구현하여 의도적 동의 확인
        `}}},argTypes:{label:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},status:{control:"select",options:["default","success","warning","danger","info"],table:{category:"State"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},disabled:{control:"boolean",table:{category:"State"}},loading:{control:"boolean",table:{category:"State"}},density:{control:"inline-radio",options:["compact","comfortable","spacious"],table:{category:"Layout"}}},args:{label:"RegistrationForm",description:"RegistrationForm 컴포넌트의 기본 상태입니다.",status:"default",size:"md",disabled:!1,loading:!1,density:"comfortable"},render:e=>s.jsx(o,{...e,children:e.children??e.label??e.text??void 0})},t={name:"기본 (Default)",parameters:{docs:{description:{story:'**새 계정 가입 폼**입니다. 필수 항목을 모두 입력하고 약관에 동의해야 "가입 신청" 버튼이 활성화됩니다.'}}}};var a,r,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '기본 (Default)',
  parameters: {
    docs: {
      description: {
        story: '**새 계정 가입 폼**입니다. 필수 항목을 모두 입력하고 약관에 동의해야 "가입 신청" 버튼이 활성화됩니다.'
      }
    }
  }
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const u=["Default"];export{t as Default,u as __namedExportsOrder,p as default};
