import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as T}from"./reference-types-4ftiVeOu.js";import{I as a}from"./Input-B5Q9mExy.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CkIaN0ex.js";import"./utils-DCADjnpI.js";import"./input-CyTVhyid.js";import"./x-DsL683-u.js";import"./createLucideIcon-Ct87QT5c.js";import"./eye-CPTXERrz.js";const k=T([{library:"Bootstrap",component:"Form controls",url:"https://getbootstrap.com/docs/5.3/forms/form-control/",usedFor:["comparison"],relation:"compared"},{library:"U.S. Web Design System",component:"Text input",url:"https://designsystem.digital.gov/components/text-input/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"GOV.UK Design System",component:"Text input",url:"https://design-system.service.gov.uk/components/text-input/",usedFor:["behavior","accessibility","comparison"],relation:"compared"},{library:"KRDS",component:"TextInput",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-textinput--docs",usedFor:["design","behavior","api"],relation:"adapted"},{library:"shadcn/ui",component:"Input",url:"https://ui.shadcn.com/docs/components/input",usedFor:["comparison"],relation:"compared"},{library:"Ant Design",component:"Input",url:"https://ant.design/components/input/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Input",url:"https://www.chakra-ui.com/docs/components/input",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Input",url:"https://base-ui.com/react/components/input",usedFor:["comparison"],relation:"compared"}]),_={title:"Atoms/Inputs/Input",component:a,tags:["ref:bootstrap","autodocs","ref:shadcn-ui","ref:ant-design","ref:chakra-ui","ref:base-ui","ref:govuk","ref:uswds"],parameters:{references:k,docs:{description:{component:"\n## Input\n\nKRDS 입력 필드 토큰을 shadcn/ui 스타일의 `forwardRef` 컴포넌트로 정리한 기본 텍스트 입력입니다.\n상태 메시지는 `error` > `success` > `information` > `hint` 순서로 표시됩니다.\n\n### 접근성\n\n- `label`을 제공하면 `label`과 `input`이 자동 연결됩니다.\n- 상태 메시지는 `aria-describedby`로 입력 필드와 연결됩니다.\n- 오류 상태에서는 `aria-invalid`가 적용됩니다.\n        "}}},argTypes:{label:{control:"text",table:{category:"Content"}},placeholder:{control:"text",table:{category:"Content"}},hint:{control:"text",table:{category:"Content"}},error:{control:"text",table:{category:"Validation"}},success:{control:"text",table:{category:"Validation"}},information:{control:"text",table:{category:"Validation"}},size:{control:"select",options:["small","medium","large"],table:{category:"Appearance"}},type:{control:"select",options:["text","password","email","number","tel","search"],table:{category:"HTML"}},showClearButton:{control:"boolean",table:{category:"Appearance"}},showPasswordToggle:{control:"boolean",table:{category:"Appearance"}},disabled:{control:"boolean",table:{category:"State"}},readOnly:{control:"boolean",table:{category:"State"}}},args:{label:"콘텐츠 제목",placeholder:"텍스트를 입력하세요",size:"large",type:"text",disabled:!1,readOnly:!1,showClearButton:!1,showPasswordToggle:!1}},r={name:"기본"},o={name:"힌트",args:{label:"채널 코드",placeholder:"채널 코드를 입력하세요",hint:"영문과 숫자만 사용할 수 있습니다."}},t={name:"상태 메시지",render:()=>e.jsxs("div",{className:"grid max-w-md gap-4 p-4",children:[e.jsx(a,{label:"오류",placeholder:"필수 입력",error:"필수 입력 항목입니다."}),e.jsx(a,{label:"성공",defaultValue:"user123",success:"사용 가능한 ID입니다."}),e.jsx(a,{label:"안내",placeholder:"user@example.com",information:"인증 링크가 발송될 이메일 주소입니다."})]}),parameters:{controls:{disable:!0}}},s={name:"크기",render:()=>e.jsxs("div",{className:"grid max-w-md gap-4 p-4",children:[e.jsx(a,{size:"small",label:"small",placeholder:"small"}),e.jsx(a,{size:"medium",label:"medium",placeholder:"medium"}),e.jsx(a,{size:"large",label:"large",placeholder:"large"})]}),parameters:{controls:{disable:!0}}},l={name:"비밀번호",args:{label:"비밀번호",placeholder:"비밀번호를 입력하세요",type:"password",showPasswordToggle:!0}},n={name:"지우기 버튼",args:{label:"검색어",defaultValue:"데이터 샘플",showClearButton:!0}},c={name:"비활성/읽기 전용",render:()=>e.jsxs("div",{className:"grid max-w-md gap-4 p-4",children:[e.jsx(a,{label:"비활성",placeholder:"입력 불가",disabled:!0}),e.jsx(a,{label:"읽기 전용",value:"2026-07-02",readOnly:!0})]}),parameters:{controls:{disable:!0}}};var i,p,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '기본'
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '힌트',
  args: {
    label: '채널 코드',
    placeholder: '채널 코드를 입력하세요',
    hint: '영문과 숫자만 사용할 수 있습니다.'
  }
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var g,h,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '상태 메시지',
  render: () => <div className="grid max-w-md gap-4 p-4">
      <Input label="오류" placeholder="필수 입력" error="필수 입력 항목입니다." />
      <Input label="성공" defaultValue="user123" success="사용 가능한 ID입니다." />
      <Input label="안내" placeholder="user@example.com" information="인증 링크가 발송될 이메일 주소입니다." />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var x,f,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '크기',
  render: () => <div className="grid max-w-md gap-4 p-4">
      <Input size="small" label="small" placeholder="small" />
      <Input size="medium" label="medium" placeholder="medium" />
      <Input size="large" label="large" placeholder="large" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(w=(f=s.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var I,v,S;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '비밀번호',
  args: {
    label: '비밀번호',
    placeholder: '비밀번호를 입력하세요',
    type: 'password',
    showPasswordToggle: true
  }
}`,...(S=(v=l.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var j,D,z;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '지우기 버튼',
  args: {
    label: '검색어',
    defaultValue: '데이터 샘플',
    showClearButton: true
  }
}`,...(z=(D=n.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var C,V,F;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '비활성/읽기 전용',
  render: () => <div className="grid max-w-md gap-4 p-4">
      <Input label="비활성" placeholder="입력 불가" disabled />
      <Input label="읽기 전용" value="2026-07-02" readOnly />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(F=(V=c.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};const G=["Default","WithHint","ValidationStates","Sizes","Password","ClearButton","DisabledAndReadOnly"];export{n as ClearButton,r as Default,c as DisabledAndReadOnly,l as Password,s as Sizes,t as ValidationStates,o as WithHint,G as __namedExportsOrder,_ as default};
