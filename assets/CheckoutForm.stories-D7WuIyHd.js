import{j as m}from"./jsx-runtime-D_zvdyIk.js";function o({children:e,...p}){return m.jsx("div",{...p,children:e})}o.__docgenInfo={description:"",methods:[],displayName:"CheckoutForm",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const l={title:"Organisms/Forms/CheckoutForm",component:o,tags:["autodocs","form","krds-extended"],parameters:{docs:{description:{component:`
## CheckoutForm

**배송 정보 입력과 결제 방법 선택**을 포함한 결제 전 단계 폼 유기체입니다.

---

### 구성 요소

| 영역 | 컴포넌트 |
|---|---|
| 수령인 정보 | TextInput × 2 (이름, 연락처) |
| 배송 주소 | ZipCode + AddressInput × 2 |
| 배송 메모 | Select |
| 결제 방법 | RadioGroup |

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | 관련 필드를 \`<fieldset>\` + \`<legend>\`로 묶으세요. |
| ✅ | 필수 입력 필드는 \`aria-required="true"\`를 추가하세요. |
| ✅ | 폼 제출 오류는 필드 근처에 인라인으로 표시하세요. |
        `}}},argTypes:{name:{description:"수령인 이름",control:"text",table:{type:{summary:"string"},category:"State"}},phone:{description:"연락처",control:"text",table:{type:{summary:"string"},category:"State"}},zipCode:{description:"우편번호",control:"text",table:{type:{summary:"string"},category:"State"}},address1:{description:"기본 주소",control:"text",table:{type:{summary:"string"},category:"State"}},address2:{description:"상세 주소",control:"text",table:{type:{summary:"string"},category:"State"}},showPayment:{description:"결제 방법 표시",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"State"}}},args:{name:"",phone:"",zipCode:"",address1:"",address2:"",showPayment:!0},render:e=>m.jsx(o,{...e,children:e.children??e.label??e.text??void 0})},t={name:"기본 결제 폼",parameters:{docs:{description:{story:"배송 정보와 결제 방법을 입력하는 전체 폼입니다."}}}},r={name:"배송 정보만",args:{showPayment:!1},parameters:{docs:{description:{story:"결제 방법 없이 배송 정보만 입력하는 폼입니다."}}}};var a,s,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '기본 결제 폼',
  parameters: {
    docs: {
      description: {
        story: '배송 정보와 결제 방법을 입력하는 전체 폼입니다.'
      }
    }
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var c,d,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '배송 정보만',
  args: {
    showPayment: false
  } as any,
  parameters: {
    docs: {
      description: {
        story: '결제 방법 없이 배송 정보만 입력하는 폼입니다.'
      }
    }
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const y=["Default","WithoutPayment"];export{t as Default,r as WithoutPayment,y as __namedExportsOrder,l as default};
