import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{d as q}from"./reference-types-4ftiVeOu.js";import{r as K}from"./index-BxXVWNx3.js";import{c as m}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const A={sm:"가",md:"가",lg:"가",xlg:"가",xxlg:"가"},I={sm:"11px",md:"13px",lg:"15px",xlg:"17px",xxlg:"19px"},F=["sm","md","lg","xlg","xxlg"];function i({modelValue:e,buttonText:d,resetText:c,labels:L,onUpdate:a,className:V,...w}){const[j,g]=K.useState(e??"md"),z=e??j,C={...A,...L},N=r=>{e||g(r),a==null||a(r)},_=()=>{e||g("md"),a==null||a("md")};return t.jsxs("div",{className:m("inline-flex items-center gap-2",V),role:"group","aria-label":"글자 크기 조절",...w,children:[d&&t.jsx("span",{className:"text-krds-body-sm text-krds-gray-70 font-medium",children:d}),t.jsx("div",{className:"inline-flex items-center rounded border border-krds-gray-20 bg-krds-gray-0 overflow-hidden",children:F.map((r,D)=>{const x=r===z;return t.jsx("button",{type:"button","aria-label":`글자 크기 ${r}`,"aria-pressed":x,onClick:()=>N(r),className:m("flex items-center justify-center px-3 py-1.5 transition-colors",D>0&&"border-l border-krds-gray-20",x?"bg-krds-primary-50 text-krds-white font-semibold":"bg-transparent text-krds-gray-70 hover:bg-krds-gray-10 hover:text-krds-gray-90"),style:{fontSize:I[r]},children:C[r]},r)})}),c&&t.jsx("button",{type:"button","aria-label":"글자 크기 초기화",onClick:_,className:m("rounded border border-krds-gray-20 bg-krds-gray-0 px-3 py-1.5","text-krds-body-sm text-krds-gray-50 transition-colors","hover:border-krds-gray-40 hover:text-krds-gray-70"),children:c})]})}i.__docgenInfo={description:"",methods:[],displayName:"Resize",props:{modelValue:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xlg' | 'xxlg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xlg'"},{name:"literal",value:"'xxlg'"}]},description:""},buttonText:{required:!1,tsType:{name:"string"},description:""},resetText:{required:!1,tsType:{name:"string"},description:""},labels:{required:!1,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'sm' | 'md' | 'lg' | 'xlg' | 'xxlg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xlg'"},{name:"literal",value:"'xxlg'"}]},{name:"string"}],raw:"Record<SizeKey, string>"}],raw:"Partial<Record<SizeKey, string>>"},description:""},onUpdate:{required:!1,tsType:{name:"signature",type:"function",raw:"(size: SizeKey) => void",signature:{arguments:[{type:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xlg' | 'xxlg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xlg'"},{name:"literal",value:"'xxlg'"}]},name:"size"}],return:{name:"void"}}},description:""}}};const P=q([{library:"KRDS",component:"Resize",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-resize--docs",usedFor:["design","behavior","api"],relation:"adapted"}]),H={title:"Molecules/Navigation/Resize",component:i,tags:["autodocs","accessibility","ref:krds","ref:shadcn-ui"],parameters:{references:P,docs:{description:{component:`
## Resize

사용자가 **페이지 글자 크기를 직접 조절**할 수 있는 접근성 툴바 컴포넌트입니다.
5단계(\`sm\` ~ \`xxlg\`)의 크기 옵션과 초기화 버튼을 제공합니다.

---

### 언제 사용하나요?

| 상황 | 권장 |
|---|---|
| 헤더·유틸리티 영역 글자 크기 조절 | **Resize** ✅ |
| 개별 텍스트 스타일 변경 | CSS / Typography prop |

---

### 사용 지침

- **modelValue** (v-model)로 현재 선택 크기를 제어합니다. 기본값은 \`'md'\`입니다.
- **buttonText** 와 **resetText** 로 버튼 내 레이블을 커스터마이징할 수 있습니다.
- **labels** 객체로 각 단계 레이블(\`sm\`, \`md\`, \`lg\`, \`xlg\`, \`xxlg\`)을 재정의할 수 있습니다.
- 선택된 크기 값을 전역 상태(Pinia 등)에 저장하고 루트 HTML 요소에 클래스를 적용하는 패턴을 권장합니다.

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | 각 버튼에 \`aria-label\`이 자동으로 설정됩니다. |
| ✅ | 현재 선택 크기 버튼은 \`aria-pressed="true"\`로 표시됩니다. |
| ✅ | 키보드(Tab/Enter/Space)로 완전히 조작 가능합니다. |
        `}}},argTypes:{modelValue:{description:"현재 선택된 글자 크기입니다. `v-model`로 바인딩하세요.",control:{type:"select"},options:["sm","md","lg","xlg","xxlg"],table:{type:{summary:"'sm' | 'md' | 'lg' | 'xlg' | 'xxlg'"},defaultValue:{summary:"'md'"},category:"Content"}},buttonText:{description:"글자 크기 조절 버튼 영역 레이블입니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"(없음)"},category:"Content"}},resetText:{description:"초기화 버튼 텍스트입니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"(없음)"},category:"Content"}},labels:{description:"각 단계 버튼 레이블 객체입니다. `{ sm, md, lg, xlg, xxlg }` 형태.",control:"object",table:{type:{summary:"{ sm: string; md: string; lg: string; xlg: string; xxlg: string }"},defaultValue:{summary:"(없음)"},category:"Content"}}},args:{modelValue:"md",buttonText:"글자크기",resetText:"초기화"},render:e=>t.jsx(i,{...e,children:e.children??e.label??e.text??void 0})},s={name:"기본 (Default)",parameters:{docs:{description:{story:"\n**기본 Resize** 상태입니다. 중간 크기(`md`)가 선택된 상태로 표시됩니다.\n버튼을 클릭하면 `modelValue`가 변경되고, 초기화 버튼으로 `'md'`로 돌아옵니다.\n        "}}}},n={name:"크게 선택 (Large)",args:{modelValue:"lg"},parameters:{docs:{description:{story:"**큰 글자 크기(`lg`)가 선택**된 상태입니다."}}}},l={name:"매우 크게 (xxlg)",args:{modelValue:"xxlg"},parameters:{docs:{description:{story:`
**최대 글자 크기(\`xxlg\`)가 선택**된 상태입니다.
저시력 사용자를 위한 최대 확대 단계입니다.
        `}}}},o={name:"커스텀 레이블",args:{labels:{sm:"작게",md:"보통",lg:"크게",xlg:"아주 크게",xxlg:"최대"},buttonText:"텍스트 크기",resetText:"기본으로"},parameters:{docs:{description:{story:`
**커스텀 레이블**을 적용한 상태입니다.
서비스 언어 설정 또는 UX 문구 가이드에 맞게 각 단계 레이블을 재정의할 수 있습니다.
        `}}}};var u,p,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '기본 (Default)',
  parameters: {
    docs: {
      description: {
        story: \`
**기본 Resize** 상태입니다. 중간 크기(\\\`md\\\`)가 선택된 상태로 표시됩니다.
버튼을 클릭하면 \\\`modelValue\\\`가 변경되고, 초기화 버튼으로 \\\`'md'\\\`로 돌아옵니다.
        \`
      }
    }
  }
}`,...(y=(p=s.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var b,f,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '크게 선택 (Large)',
  args: {
    modelValue: 'lg'
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`**큰 글자 크기(\\\`lg\\\`)가 선택**된 상태입니다.\`
      }
    }
  }
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var k,h,S;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '매우 크게 (xxlg)',
  args: {
    modelValue: 'xxlg'
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**최대 글자 크기(\\\`xxlg\\\`)가 선택**된 상태입니다.
저시력 사용자를 위한 최대 확대 단계입니다.
        \`
      }
    }
  }
}`,...(S=(h=l.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var T,R,E;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '커스텀 레이블',
  args: {
    labels: {
      sm: '작게',
      md: '보통',
      lg: '크게',
      xlg: '아주 크게',
      xxlg: '최대'
    },
    buttonText: '텍스트 크기',
    resetText: '기본으로'
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**커스텀 레이블**을 적용한 상태입니다.
서비스 언어 설정 또는 UX 문구 가이드에 맞게 각 단계 레이블을 재정의할 수 있습니다.
        \`
      }
    }
  }
}`,...(E=(R=o.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};const Y=["Default","LargeSelected","ExtraExtraLarge","CustomLabels"];export{o as CustomLabels,s as Default,l as ExtraExtraLarge,n as LargeSelected,Y as __namedExportsOrder,H as default};
