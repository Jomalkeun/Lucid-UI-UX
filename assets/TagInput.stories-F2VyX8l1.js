import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{d as b}from"./reference-types-4ftiVeOu.js";function s({children:e,...y}){return g.jsx("div",{...y,children:e})}s.__docgenInfo={description:"",methods:[],displayName:"TagInput",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const T=b([{library:"Ark UI",component:"Tags Input",url:"https://ark-ui.com/docs/components/tags-input",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Chakra UI",component:"Tags Input",url:"https://www.chakra-ui.com/docs/components/tags-input",usedFor:["comparison"],relation:"compared"},{library:"Semi Design",component:"TagInput",url:"https://semi.design/en-US/input/tagInput",usedFor:["behavior","accessibility","api"],relation:"compared"}]),x={title:"Molecules/Forms/TagInput",component:s,tags:["autodocs","form","custom-ui","ref:chakra-ui","ref:ark-ui","ref:semi-design"],parameters:{references:T,docs:{description:{component:`
## TagInput

**텍스트 입력 후 Enter/쉼표로 태그(칩)를 생성**하는 입력 컴포넌트입니다.

---

### 언제 사용하나요?

| 용도 | 예시 |
|---|---|
| 키워드 입력 | 검색 태그, 기술 스택 |
| 이메일 수신자 | 다중 이메일 입력 |
| 카테고리 분류 | 콘텐츠 태그 관리 |

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | 태그 삭제 버튼에 \`aria-label="[태그명] 삭제"\`를 제공하세요. |
| ✅ | 현재 태그 개수를 \`aria-describedby\`로 알려주세요. |
        `}}},argTypes:{label:{description:"레이블",control:"text",table:{type:{summary:"string"},category:"Content"}},placeholder:{description:"플레이스홀더",control:"text",table:{type:{summary:"string"},category:"Content"}},initialTags:{description:"초기 태그 목록",control:"object",table:{type:{summary:"string[]"},category:"State"}},maxTags:{description:"최대 태그 수",control:"number",table:{type:{summary:"number"},defaultValue:{summary:"10"},category:"Validation"}},disabled:{description:"비활성화",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}}},args:{label:"기술 스택",placeholder:"태그 입력 후 Enter",initialTags:["Vue.js","TypeScript"],maxTags:10,disabled:!1},render:e=>g.jsx(s,{...e,children:e.children??e.label??e.text??void 0})},a={name:"기본 태그 입력",parameters:{docs:{description:{story:"Enter 또는 쉼표로 태그를 추가합니다. Backspace로 마지막 태그를 삭제합니다."}}}},r={name:"빈 상태",args:{initialTags:[]},parameters:{docs:{description:{story:"태그가 없는 초기 상태입니다."}}}},t={name:"최대 개수 제한",args:{initialTags:["React","Vue","Angular"],maxTags:3},parameters:{docs:{description:{story:"최대 태그 수에 도달하면 입력창이 숨겨집니다."}}}};var n,o,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '기본 태그 입력',
  parameters: {
    docs: {
      description: {
        story: 'Enter 또는 쉼표로 태그를 추가합니다. Backspace로 마지막 태그를 삭제합니다.'
      }
    }
  }
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '빈 상태',
  args: {
    initialTags: []
  } as any,
  parameters: {
    docs: {
      description: {
        story: '태그가 없는 초기 상태입니다.'
      }
    }
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,l,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '최대 개수 제한',
  args: {
    initialTags: ['React', 'Vue', 'Angular'],
    maxTags: 3
  } as any,
  parameters: {
    docs: {
      description: {
        story: '최대 태그 수에 도달하면 입력창이 숨겨집니다.'
      }
    }
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const I=["Default","Empty","MaxReached"];export{a as Default,r as Empty,t as MaxReached,I as __namedExportsOrder,x as default};
