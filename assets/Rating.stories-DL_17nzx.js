import{j as y}from"./jsx-runtime-D_zvdyIk.js";import{d as b}from"./reference-types-4ftiVeOu.js";function t({children:e,...g}){return y.jsx("div",{...g,children:e})}t.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const f=b([{library:"Ark UI",component:"Rating Group",url:"https://ark-ui.com/docs/components/rating-group",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Element Plus",component:"Rate",url:"https://element-plus.org/en-US/component/rate",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"PrimeVue",component:"Rating",url:"https://primevue.org/rating/",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Flowbite",component:"Rating",url:"https://flowbite.com/docs/components/rating/",usedFor:["comparison"],relation:"compared"},{library:"daisyUI",component:"Rating",url:"https://daisyui.com/components/rating/",usedFor:["comparison"],relation:"compared"},{library:"Ant Design",component:"Rate",url:"https://ant.design/components/rate/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Rating",url:"https://www.chakra-ui.com/docs/components/rating",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Rating",url:"https://quasar.dev/vue-components/rating",usedFor:["comparison"],relation:"compared"}]),v={title:"Molecules/Forms/Rating",component:t,tags:["autodocs","form","custom-ui","ref:chakra-ui","ref:ark-ui","ref:daisy-ui","ref:ant-design","ref:flowbite","ref:vuetify","ref:mui","ref:quasar","ref:element-plus","ref:primevue"],parameters:{references:f,docs:{description:{component:`
## Rating

**별점으로 만족도나 평가를 입력·표시**하는 컴포넌트입니다.

---

### 언제 사용하나요?

| 용도 | 예시 |
|---|---|
| 만족도 조사 | 서비스 평가, 후기 작성 |
| 상품 평점 | 구매 후기 별점 |
| 난이도 표시 | 학습 콘텐츠 수준 |

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | \`role="radiogroup"\`으로 별점 그룹을 묶고, 각 별에 \`aria-label\`을 제공하세요. |
| ✅ | 읽기 전용은 \`role="img"\`와 \`aria-label="5점 만점 중 4점"\`을 사용하세요. |
        `}}},argTypes:{value:{description:"기본 평점 값",control:{type:"range",min:0,max:5},table:{type:{summary:"number"},defaultValue:{summary:"3"},category:"State"}},max:{description:"최대 별 수",control:{type:"range",min:3,max:10},table:{type:{summary:"number"},defaultValue:{summary:"5"},category:"Appearance"}},size:{description:"별 크기",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"string"},defaultValue:{summary:"'medium'"},category:"Appearance"}},activeColor:{description:"활성 색상",control:"color",table:{type:{summary:"string"},defaultValue:{summary:"'#f59e0b'"},category:"Appearance"}},label:{description:"레이블",control:"text",table:{type:{summary:"string"},category:"Content"}},showLabel:{description:"점수 텍스트 표시",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Appearance"}},readonly:{description:"읽기 전용",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},disabled:{description:"비활성화",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}}},args:{value:3,max:5,size:"medium",activeColor:"#f59e0b",label:"서비스 만족도",showLabel:!0,readonly:!1,disabled:!1},render:e=>y.jsx(t,{...e,children:e.children??e.label??e.text??void 0})},r={name:"기본 별점 입력",parameters:{docs:{description:{story:"별을 클릭해 평점을 입력합니다."}}}},a={name:"읽기 전용",args:{readonly:!0,value:4},parameters:{docs:{description:{story:"평점 표시 전용입니다. 클릭해도 값이 변하지 않습니다."}}}},o={name:"대형 별점",args:{size:"large"},parameters:{docs:{description:{story:"큰 별점으로 중심 콘텐츠에 사용합니다."}}}};var n,s,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '기본 별점 입력',
  parameters: {
    docs: {
      description: {
        story: '별을 클릭해 평점을 입력합니다.'
      }
    }
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var c,l,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '읽기 전용',
  args: {
    readonly: true,
    value: 4
  } as any,
  parameters: {
    docs: {
      description: {
        story: '평점 표시 전용입니다. 클릭해도 값이 변하지 않습니다.'
      }
    }
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,u,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '대형 별점',
  args: {
    size: 'large'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '큰 별점으로 중심 콘텐츠에 사용합니다.'
      }
    }
  }
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const x=["Default","ReadOnly","Large"];export{r as Default,o as Large,a as ReadOnly,x as __namedExportsOrder,v as default};
