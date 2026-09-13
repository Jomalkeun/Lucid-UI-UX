import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{d as Q}from"./reference-types-4ftiVeOu.js";import{F as u}from"./FormField-BpZ-cOts.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DCADjnpI.js";const B=Q([{library:"GOV.UK Design System",component:"Error message",url:"https://design-system.service.gov.uk/components/error-message/",usedFor:["behavior","accessibility","comparison"],relation:"compared"},{library:"Ark UI",component:"Field",url:"https://ark-ui.com/docs/components/field",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Flowbite",component:"Input Field",url:"https://flowbite.com/docs/forms/input-field/",usedFor:["comparison"],relation:"compared"},{library:"Bootstrap",component:"Form controls",url:"https://getbootstrap.com/docs/5.3/forms/form-control/",usedFor:["comparison"],relation:"compared"},{library:"Ant Design",component:"Form",url:"https://ant.design/components/form/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Field",url:"https://www.chakra-ui.com/docs/components/field",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Field",url:"https://quasar.dev/vue-components/field",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Field",url:"https://base-ui.com/react/components/field",usedFor:["comparison"],relation:"compared"}]),N={title:"Molecules/Forms/FormField",component:u,tags:["autodocs","form","krds-extended","ref:chakra-ui","ref:shadcn-ui","ref:ark-ui","ref:ant-design","ref:flowbite","ref:vuetify","ref:mui","ref:bootstrap","ref:quasar","ref:base-ui","ref:govuk"],parameters:{references:B,docs:{description:{component:'\n## FormField\n\n사용자로부터 **단일 행의 텍스트 입력**을 받을 때 사용하는 기본 폼 필드 컴포넌트입니다.\n`Label`, `Input`, `HintText`, `ErrorMessage`를 하나의 단위로 묶어 폼 전반의 일관성을 보장합니다.\n\n---\n\n### 언제 사용하나요?\n\n| 입력 유형 | 권장 컴포넌트 |\n|---|---|\n| 단일 행 텍스트 | **FormField (TextInput)** ✅ |\n| 여러 행 텍스트 | `Textarea` |\n| 선택지 중 선택 | `SelectField` |\n| 날짜 선택 | `DatePicker` |\n\n---\n\n### 사용 지침\n\n- **label** 은 항상 필수입니다. 시각적으로 숨기더라도 스크린리더 접근을 위해 반드시 제공하세요.\n- **hint** 는 입력 형식·제약 조건을 사전에 안내할 때 사용합니다 (예: _"영문·숫자 8자 이내"_).\n- **error** 는 유효성 검사 실패 시에만 노출하며, 무엇을 어떻게 수정해야 하는지 구체적으로 안내합니다.\n- `required` 필드에는 레이블 옆 시각적 표시(`*`)와 함께 `aria-required="true"`가 자동으로 적용됩니다.\n\n---\n\n### 접근성(A11y) 가이드\n\n| 체크 | 항목 |\n|---|---|\n| ✅ | `<label>`과 `<input>`이 `for`/`id` 쌍으로 자동 연결됩니다. |\n| ✅ | `error` prop 제공 시 `aria-describedby`로 오류 메시지가 input에 연결됩니다. |\n| ✅ | `disabled` 상태에서는 Tab 포커스에서 제외되며, `aria-disabled="true"`가 선언됩니다. |\n| ⚠️ | 내용 확인만 필요한 경우 `disabled` 대신 `readonly`를 권장합니다 (포커스 접근 가능). |\n| ⚠️ | placeholder 텍스트만으로 레이블을 대체하지 마세요. placeholder는 보조 안내 역할입니다. |\n        '}}},argTypes:{label:{description:"입력 필드의 레이블 텍스트입니다. 스크린리더 접근성을 위해 **항상 필수**입니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"(없음)"},category:"Content"}},placeholder:{description:"입력 전 표시되는 회색 안내 텍스트입니다. 레이블을 대체할 수 없습니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"(없음)"},category:"Content"}},modelValue:{description:"`v-model`로 바인딩되는 입력 값입니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"(없음)"},category:"Content"}},hint:{description:"입력 형식·제약 조건을 사전에 안내할 때 필드 하단에 표시됩니다. `error`가 있으면 숨겨집니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"(없음)"},category:"Validation"}},error:{description:"유효성 검사 실패 시 노출되는 오류 메시지입니다. 값이 있으면 에러 스타일이 활성화됩니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"(없음)"},category:"Validation"}},required:{description:'필수 입력 여부입니다. `true`이면 레이블 옆 `*` 표시와 `aria-required="true"`가 적용됩니다.',control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Validation"}},disabled:{description:"비활성화 상태입니다. 사용자 입력이 완전히 차단되고 Tab 포커스에서 제외됩니다.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},readonly:{description:"읽기 전용 상태입니다. 내용 복사는 허용하되 수정은 불가합니다. `disabled`보다 접근성 친화적입니다.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},size:{description:"필드의 높이(크기) 변형입니다.",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"'small' | 'medium' | 'large'"},defaultValue:{summary:"'medium'"},category:"Appearance"}}},args:{label:"노출 제목",placeholder:"제목을 입력하세요",required:!1,disabled:!1,readonly:!1,size:"medium"},render:e=>r.jsx(u,{...e,children:e.children??e.label??e.text??void 0})},a={name:"기본 (Default)",args:{label:"노출 제목",placeholder:"제목을 입력하세요"},parameters:{docs:{description:{story:"\n**가장 기본적인 FormField 상태**입니다.\n`label`과 `placeholder`만 지정한 최소 구성으로, 폼 설계 시 출발점으로 사용하세요.\n힌트·오류·필수 여부가 모두 없는 중립 상태입니다.\n        "}}}},o={name:"필수 입력 (Required)",args:{label:"노출 제목",placeholder:"제목을 입력하세요",required:!0},parameters:{docs:{description:{story:'\n**사용자가 반드시 입력해야 하는 필드**에 사용합니다.\n`required: true` 설정 시 레이블 옆에 `*` 표시가 노출되고, 내부적으로 `aria-required="true"`가 선언됩니다.\n\n> 💡 폼 제출 전 빈 값 유효성 검사는 별도 로직으로 처리하고, 검사 실패 시 `error` prop을 함께 사용하세요.\n        '}}}},t={name:"힌트 포함 (With Hint)",args:{label:"채널 코드",placeholder:"채널 코드를 입력하세요",hint:"영문·숫자 조합 8자 이내로 입력하세요"},parameters:{docs:{description:{story:"\n**입력 형식이나 제약 조건을 사전에 안내**해야 할 때 사용합니다.\n`hint`는 입력 필드 하단에 보조 텍스트로 표시되며, 에러가 없는 정상 상태에서만 노출됩니다.\n\n> ⚠️ `error`와 `hint`가 동시에 제공될 경우 **`error`가 우선 표시**됩니다.\n        "}}}},n={name:"오류 상태 (Error)",args:{label:"노출 제목",placeholder:"제목을 입력하세요",error:"필수 입력 항목입니다. 내용을 입력해주세요.",modelValue:"",required:!0},parameters:{docs:{description:{story:`
**유효성 검사 실패 후** 사용자에게 수정 방법을 안내하는 상태입니다.
\`error\` prop에 오류 원인과 해결 방법을 구체적으로 담아 전달하세요.
필드 테두리가 강조색으로 변하고, 오류 메시지가 \`aria-describedby\`로 연결되어 스크린리더에서 읽힙니다.

| | 예시 |
|---|---|
| ✅ 올바른 예 | _"이메일 형식이 올바르지 않습니다. (예: user@example.com)"_ |
| ❌ 잘못된 예 | _"오류가 발생했습니다."_ |
        `}}}},l={name:"비활성화 (Disabled)",args:{label:"노출 제목",placeholder:"입력할 수 없습니다",disabled:!0},parameters:{docs:{description:{story:`
**특정 조건이 충족되지 않아 입력 자체가 불가능한 경우**에 사용합니다.
비활성화된 필드는 Tab 포커스에서 제외되고 시각적으로 흐리게 표시됩니다.

> ⚠️ 이미 저장된 데이터를 확인만 해야 하는 경우라면 \`disabled\` 대신 **\`readonly\`를 사용하세요**.
> 스크린리더 사용자도 내용을 인식·복사할 수 있습니다.
        `}}}},s={name:"읽기 전용 (Read Only)",args:{label:"등록일",modelValue:"2026-06-10",readonly:!0},parameters:{docs:{description:{story:`
**이미 확정된 값을 표시만 해야 할 때** 사용합니다.
텍스트 복사는 허용되지만 수정은 불가합니다.
\`disabled\`와 달리 포커스를 받을 수 있어, 값을 확인하거나 복사해야 하는 시나리오에 적합합니다.
        `}}}},d={render:()=>{const e=({children:p,...m})=>r.jsx("div",{...m,children:p});return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",maxWidth:"400px",padding:"24px"},children:[r.jsx(e,{label:"기본 상태",placeholder:"제목을 입력하세요"}),r.jsx(e,{label:"필수 입력",placeholder:"제목을 입력하세요",required:!0}),r.jsx(e,{label:"힌트 포함",hint:"영문·숫자 조합 8자 이내",placeholder:"채널 코드 입력"}),r.jsx(e,{label:"오류 상태",error:"필수 입력 항목입니다.",required:!0,modelValue:""}),r.jsx(e,{label:"비활성화",placeholder:"입력 불가",disabled:!0}),r.jsx(e,{label:"읽기 전용",modelValue:"저장된 값",readonly:!0})]})},name:"전체 상태 비교 (Overview)",parameters:{docs:{description:{story:`
**FormField의 모든 상태를 한 화면에서 비교**하는 레퍼런스 뷰입니다.
디자인 QA 또는 개발 레퍼런스용으로 활용하세요. Controls 패널은 이 스토리에서 비활성화됩니다.
        `}},controls:{disable:!0}}},i={name:"입력 후 오류 검증 (Interaction Test)",args:{label:"이메일 주소",placeholder:"user@example.com",required:!0},parameters:{docs:{description:{story:`
**인터랙션 테스트 참조 스토리**입니다.
\`@storybook/test\` 패키지가 Storybook 10을 지원하면 \`play\` 함수를 추가하여
Interactions 탭에서 아래 시나리오를 자동 실행할 수 있습니다.

실행 순서: **(1) 필드 포커스** → **(2) 잘못된 값 입력** → **(3) blur** → **(4) 오류 메시지 노출 검증**
        `}}}},c={render:()=>{const e=({children:p,...m})=>r.jsx("div",{...m,children:p});return r.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"480px",padding:"24px",border:"1px solid #e0e0e0",borderRadius:"8px"},novalidate:!0,children:[r.jsx("h3",{style:{margin:"0 0 8px",fontSize:"16px",fontWeight:"600",color:"#1a1a1a"},children:"콘텐츠 등록"}),r.jsx(e,{label:"노출 제목",placeholder:"제목을 입력하세요",required:!0,hint:"최대 50자까지 입력 가능합니다"}),r.jsx(e,{label:"담당자 ID",placeholder:"담당자를 검색하세요",hint:"이름 또는 사번으로 검색"}),r.jsx(e,{label:"채널 코드",error:"채널을 선택해주세요",required:!0,modelValue:""}),r.jsx(e,{label:"등록일",modelValue:"2026-06-10",readonly:!0})]})},name:"실무 폼 예시 (Full Form)",parameters:{docs:{description:{story:`
**실제 서비스 폼에서 FormField를 조합하는 예시**입니다.
필수 입력·힌트·오류·읽기 전용 상태가 하나의 폼 안에서 어떻게 구성되는지 확인할 수 있습니다.

- \`novalidate\`로 브라우저 기본 유효성 검사를 비활성화하고 커스텀 로직을 적용합니다.
- 각 필드의 상태는 독립적으로 제어하며, 제출 버튼 클릭 시 일괄 검증 패턴을 권장합니다.
        `}},controls:{disable:!0}}};var b,y,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '기본 (Default)',
  args: {
    label: '노출 제목',
    placeholder: '제목을 입력하세요'
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**가장 기본적인 FormField 상태**입니다.
\\\`label\\\`과 \\\`placeholder\\\`만 지정한 최소 구성으로, 폼 설계 시 출발점으로 사용하세요.
힌트·오류·필수 여부가 모두 없는 중립 상태입니다.
        \`
      }
    }
  }
}`,...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var h,f,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '필수 입력 (Required)',
  args: {
    label: '노출 제목',
    placeholder: '제목을 입력하세요',
    required: true
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**사용자가 반드시 입력해야 하는 필드**에 사용합니다.
\\\`required: true\\\` 설정 시 레이블 옆에 \\\`*\\\` 표시가 노출되고, 내부적으로 \\\`aria-required="true"\\\`가 선언됩니다.

> 💡 폼 제출 전 빈 값 유효성 검사는 별도 로직으로 처리하고, 검사 실패 시 \\\`error\\\` prop을 함께 사용하세요.
        \`
      }
    }
  }
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var F,q,V;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '힌트 포함 (With Hint)',
  args: {
    label: '채널 코드',
    placeholder: '채널 코드를 입력하세요',
    hint: '영문·숫자 조합 8자 이내로 입력하세요'
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**입력 형식이나 제약 조건을 사전에 안내**해야 할 때 사용합니다.
\\\`hint\\\`는 입력 필드 하단에 보조 텍스트로 표시되며, 에러가 없는 정상 상태에서만 노출됩니다.

> ⚠️ \\\`error\\\`와 \\\`hint\\\`가 동시에 제공될 경우 **\\\`error\\\`가 우선 표시**됩니다.
        \`
      }
    }
  }
}`,...(V=(q=t.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var v,I,T;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '오류 상태 (Error)',
  args: {
    label: '노출 제목',
    placeholder: '제목을 입력하세요',
    error: '필수 입력 항목입니다. 내용을 입력해주세요.',
    modelValue: '',
    required: true
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**유효성 검사 실패 후** 사용자에게 수정 방법을 안내하는 상태입니다.
\\\`error\\\` prop에 오류 원인과 해결 방법을 구체적으로 담아 전달하세요.
필드 테두리가 강조색으로 변하고, 오류 메시지가 \\\`aria-describedby\\\`로 연결되어 스크린리더에서 읽힙니다.

| | 예시 |
|---|---|
| ✅ 올바른 예 | _"이메일 형식이 올바르지 않습니다. (예: user@example.com)"_ |
| ❌ 잘못된 예 | _"오류가 발생했습니다."_ |
        \`
      }
    }
  }
}`,...(T=(I=n.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var S,j,D;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '비활성화 (Disabled)',
  args: {
    label: '노출 제목',
    placeholder: '입력할 수 없습니다',
    disabled: true
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**특정 조건이 충족되지 않아 입력 자체가 불가능한 경우**에 사용합니다.
비활성화된 필드는 Tab 포커스에서 제외되고 시각적으로 흐리게 표시됩니다.

> ⚠️ 이미 저장된 데이터를 확인만 해야 하는 경우라면 \\\`disabled\\\` 대신 **\\\`readonly\\\`를 사용하세요**.
> 스크린리더 사용자도 내용을 인식·복사할 수 있습니다.
        \`
      }
    }
  }
}`,...(D=(j=l.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var k,R,_;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '읽기 전용 (Read Only)',
  args: {
    label: '등록일',
    modelValue: '2026-06-10',
    readonly: true
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**이미 확정된 값을 표시만 해야 할 때** 사용합니다.
텍스트 복사는 허용되지만 수정은 불가합니다.
\\\`disabled\\\`와 달리 포커스를 받을 수 있어, 값을 확인하거나 복사해야 하는 시나리오에 적합합니다.
        \`
      }
    }
  }
}`,...(_=(R=s.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var w,E,W;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const TextInput = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      maxWidth: '400px',
      padding: '24px'
    }}>
        <TextInput label="기본 상태" placeholder="제목을 입력하세요" />
        <TextInput label="필수 입력" placeholder="제목을 입력하세요" required={true} />
        <TextInput label="힌트 포함" hint="영문·숫자 조합 8자 이내" placeholder="채널 코드 입력" />
        <TextInput label="오류 상태" error="필수 입력 항목입니다." required={true} modelValue="" />
        <TextInput label="비활성화" placeholder="입력 불가" disabled={true} />
        <TextInput label="읽기 전용" modelValue="저장된 값" readonly={true} />
      </div>;
  },
  name: '전체 상태 비교 (Overview)',
  parameters: {
    docs: {
      description: {
        story: \`
**FormField의 모든 상태를 한 화면에서 비교**하는 레퍼런스 뷰입니다.
디자인 QA 또는 개발 레퍼런스용으로 활용하세요. Controls 패널은 이 스토리에서 비활성화됩니다.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(W=(E=d.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var A,O,C;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '입력 후 오류 검증 (Interaction Test)',
  args: {
    label: '이메일 주소',
    placeholder: 'user@example.com',
    required: true
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**인터랙션 테스트 참조 스토리**입니다.
\\\`@storybook/test\\\` 패키지가 Storybook 10을 지원하면 \\\`play\\\` 함수를 추가하여
Interactions 탭에서 아래 시나리오를 자동 실행할 수 있습니다.

실행 순서: **(1) 필드 포커스** → **(2) 잘못된 값 입력** → **(3) blur** → **(4) 오류 메시지 노출 검증**
        \`
      }
    }
  }
}`,...(C=(O=i.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var H,z,U;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const TextInput = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    return <form style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '480px',
      padding: '24px',
      border: '1px solid #e0e0e0',
      borderRadius: '8px'
    }} novalidate>
        <h3 style={{
        margin: '0 0 8px',
        fontSize: '16px',
        fontWeight: '600',
        color: '#1a1a1a'
      }}>콘텐츠 등록</h3>
        <TextInput label="노출 제목" placeholder="제목을 입력하세요" required={true} hint="최대 50자까지 입력 가능합니다" />
        <TextInput label="담당자 ID" placeholder="담당자를 검색하세요" hint="이름 또는 사번으로 검색" />
        <TextInput label="채널 코드" error="채널을 선택해주세요" required={true} modelValue="" />
        <TextInput label="등록일" modelValue="2026-06-10" readonly={true} />
      </form>;
  },
  name: '실무 폼 예시 (Full Form)',
  parameters: {
    docs: {
      description: {
        story: \`
**실제 서비스 폼에서 FormField를 조합하는 예시**입니다.
필수 입력·힌트·오류·읽기 전용 상태가 하나의 폼 안에서 어떻게 구성되는지 확인할 수 있습니다.

- \\\`novalidate\\\`로 브라우저 기본 유효성 검사를 비활성화하고 커스텀 로직을 적용합니다.
- 각 필드의 상태는 독립적으로 제어하며, 제출 버튼 클릭 시 일괄 검증 패턴을 권장합니다.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(U=(z=c.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};const X=["Default","Required","WithHint","ErrorState","Disabled","ReadOnly","AllStates","ValidationFlow","FullFormExample"];export{d as AllStates,a as Default,l as Disabled,n as ErrorState,c as FullFormExample,s as ReadOnly,o as Required,i as ValidationFlow,t as WithHint,X as __namedExportsOrder,N as default};
