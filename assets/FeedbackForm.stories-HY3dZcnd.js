import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{d as i}from"./reference-types-4ftiVeOu.js";function o({children:e,...c}){return s.jsx("div",{...c,children:e})}o.__docgenInfo={description:"",methods:[],displayName:"FeedbackForm",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const d=i([{library:"Mantine UI",component:"Contact us section",url:"https://ui.mantine.dev/category/contact/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."}]),p={title:"Organisms/Forms/FeedbackForm",component:o,tags:["autodocs","form","krds-extended","ref:mantine-ui"],parameters:{references:d,docs:{description:{component:`
## FeedbackForm (패턴)

**서비스 의견 및 문의 접수 폼** 패턴입니다.
별점 평가, 유형 선택, 제목/내용 입력, 답변 이메일을 포함합니다.

---

### 주요 UX 포인트

- 별 아이콘 클릭으로 만족도 평가 (1~5점)
- 필수 항목 미입력 시 제출 버튼 비활성화
- 제출 후 성공 화면으로 전환, 새 문의 작성 가능
        `}}},argTypes:{label:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},status:{control:"select",options:["default","success","warning","danger","info"],table:{category:"State"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},disabled:{control:"boolean",table:{category:"State"}},loading:{control:"boolean",table:{category:"State"}},density:{control:"inline-radio",options:["compact","comfortable","spacious"],table:{category:"Layout"}}},args:{label:"FeedbackForm",description:"FeedbackForm 컴포넌트의 기본 상태입니다.",status:"default",size:"md",disabled:!1,loading:!1,density:"comfortable"},render:e=>s.jsx(o,{...e,children:e.children??e.label??e.text??void 0})},t={name:"기본 (Default)",parameters:{docs:{description:{story:"**서비스 문의·의견 접수 폼**입니다. 별점 클릭으로 만족도를 선택하고 필수 항목을 입력하면 제출 버튼이 활성화됩니다."}}}};var a,n,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '기본 (Default)',
  parameters: {
    docs: {
      description: {
        story: '**서비스 문의·의견 접수 폼**입니다. 별점 클릭으로 만족도를 선택하고 필수 항목을 입력하면 제출 버튼이 활성화됩니다.'
      }
    }
  }
}`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const u=["Default"];export{t as Default,u as __namedExportsOrder,p as default};
