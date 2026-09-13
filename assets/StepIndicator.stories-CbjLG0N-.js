import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as se}from"./index-BxXVWNx3.js";import{d as te}from"./reference-types-4ftiVeOu.js";import{S as y}from"./StepIndicator-DYTCchFk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DCADjnpI.js";const ne=te([{library:"U.S. Web Design System",component:"Step indicator",url:"https://designsystem.digital.gov/components/step-indicator/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"KRDS",component:"StepIndicator",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-stepindicator--docs",usedFor:["design","behavior","api"],relation:"adapted"},{library:"Salesforce Lightning Design System",component:"Path",url:"https://www.lightningdesignsystem.com/components/path/",usedFor:["behavior","content","comparison"],relation:"compared"}]),le={title:"Molecules/Navigation/StepIndicator",component:y,tags:["autodocs","navigation","ref:krds","ref:uswds","ref:lightning-design"],parameters:{references:ne,docs:{description:{component:`
## StepIndicator

**다단계 프로세스의 현재 진행 단계를 시각적으로 표시**하는 컴포넌트입니다.
회원가입, 결제 흐름, 신청 양식처럼 순서가 있는 작업에서 사용합니다.

---

### 언제 사용하나요?

| 상황 | 권장 여부 |
|---|---|
| 3단계 이상의 순차적 프로세스 | **StepIndicator** ✅ |
| 완료·현재·미완료 단계 구분이 필요한 경우 | **StepIndicator** ✅ |
| 2단계 이하의 간단한 전환 | \`Tabs\` 또는 \`Disclosure\` 고려 |

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | 현재 단계에 \`aria-current="step"\`이 선언됩니다. |
| ✅ | 완료된 단계에 체크마크와 함께 "완료" 텍스트를 스크린리더에 제공합니다. |
| ⚠️ | 클릭으로 단계를 이동할 수 있다면 \`<button>\` 요소로 렌더링해야 합니다. |
        `}}},argTypes:{steps:{description:"각 단계의 레이블 배열입니다.",control:"object",table:{category:"Content"}},current:{description:"현재 활성 단계 (1-based index)입니다.",control:{type:"number",min:1},table:{category:"State"}},variant:{description:"스텝 표시 스타일입니다.",control:{type:"select"},options:["default","simple"],table:{category:"Appearance"}}},args:{steps:["기본 정보","약관 동의","본인 인증","완료"],current:2,variant:"default"},render:r=>e.jsx(y,{...r})},s={args:{variant:"simple"}},t={args:{orientation:"vertical"}},n={args:{completed:!0}},a={args:{current:2,steps:["정보 입력",{id:"verify",label:"본인 인증",description:"입력한 인증 코드를 확인하세요.",status:"error"},"완료"]}},o={args:{steps:[]}},c={args:{steps:void 0,children:"기존 children 사용도 유지됩니다."}},p={name:"기본 (Default)",args:{steps:["기본 정보","약관 동의","본인 인증","완료"],current:2},parameters:{docs:{description:{story:"**4단계 중 2번째 단계가 활성화**된 기본 상태입니다. 1단계는 완료, 3~4단계는 미완료 상태입니다."}}}},i={name:"첫 번째 단계 (First Step)",args:{steps:["기본 정보","약관 동의","본인 인증","완료"],current:1},parameters:{docs:{description:{story:"**첫 번째 단계**가 진행 중인 상태입니다. 아직 완료된 단계가 없습니다."}}}},d={name:"마지막 단계 (Last Step)",args:{steps:["기본 정보","약관 동의","본인 인증","완료"],current:4},parameters:{docs:{description:{story:"**마지막 단계가 진행 중**인 상태입니다. 전체 완료는 Completed 예제를 확인하세요."}}}},m={name:"3단계 (Three Steps)",args:{steps:["정보 입력","결제","완료"],current:2},parameters:{docs:{description:{story:"**결제 프로세스처럼 3단계**로 구성된 케이스입니다."}}}},l={name:"5단계 (Five Steps)",args:{steps:["신청서 작성","서류 제출","심사","승인 통보","처리 완료"],current:3},parameters:{docs:{description:{story:"**행정 신청 처리 흐름처럼 5단계**로 구성된 케이스입니다. 심사 중인 상태입니다."}}}},ae=()=>{const r=["정보 입력","약관 동의","인증","완료"],[g,b]=se.useState(1),ee=()=>b(S=>Math.max(1,S-1)),re=()=>b(S=>Math.min(r.length,S+1));return e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(y,{steps:r,current:g}),e.jsxs("div",{className:"flex justify-center gap-3",children:[e.jsx("button",{type:"button",onClick:ee,disabled:g===1,className:"rounded-md border border-border bg-card px-5 py-2 text-sm text-foreground disabled:opacity-50",children:"이전"}),e.jsx("button",{type:"button",onClick:re,disabled:g===r.length,className:"rounded-md border border-krds-primary-50 bg-krds-primary-50 px-5 py-2 text-sm text-primary-foreground disabled:opacity-50",children:"다음"})]})]})},u={render:()=>e.jsx(ae,{}),name:"단계 이동 (Interactive)",parameters:{docs:{description:{story:"**이전/다음 버튼으로 단계를 직접 이동**해볼 수 있는 인터랙티브 예시입니다."}},controls:{disable:!0}}};var h,v,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'simple'
  }
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var x,I,j;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  }
}`,...(j=(I=t.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var F,C,D;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    completed: true
  }
}`,...(D=(C=n.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var k,w,L;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    current: 2,
    steps: ['정보 입력', {
      id: 'verify',
      label: '본인 인증',
      description: '입력한 인증 코드를 확인하세요.',
      status: 'error'
    }, '완료']
  }
}`,...(L=(w=a.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var E,T,N;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    steps: []
  }
}`,...(N=(T=o.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var R,M,A;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    steps: undefined,
    children: '기존 children 사용도 유지됩니다.'
  }
}`,...(A=(M=c.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var V,_,K;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '기본 (Default)',
  args: {
    steps: ['기본 정보', '약관 동의', '본인 인증', '완료'],
    current: 2
  },
  parameters: {
    docs: {
      description: {
        story: '**4단계 중 2번째 단계가 활성화**된 기본 상태입니다. 1단계는 완료, 3~4단계는 미완료 상태입니다.'
      }
    }
  }
}`,...(K=(_=p.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var O,P,U;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '첫 번째 단계 (First Step)',
  args: {
    steps: ['기본 정보', '약관 동의', '본인 인증', '완료'],
    current: 1
  },
  parameters: {
    docs: {
      description: {
        story: '**첫 번째 단계**가 진행 중인 상태입니다. 아직 완료된 단계가 없습니다.'
      }
    }
  }
}`,...(U=(P=i.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var W,q,z;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '마지막 단계 (Last Step)',
  args: {
    steps: ['기본 정보', '약관 동의', '본인 인증', '완료'],
    current: 4
  },
  parameters: {
    docs: {
      description: {
        story: '**마지막 단계가 진행 중**인 상태입니다. 전체 완료는 Completed 예제를 확인하세요.'
      }
    }
  }
}`,...(z=(q=d.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var B,G,H;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '3단계 (Three Steps)',
  args: {
    steps: ['정보 입력', '결제', '완료'],
    current: 2
  },
  parameters: {
    docs: {
      description: {
        story: '**결제 프로세스처럼 3단계**로 구성된 케이스입니다.'
      }
    }
  }
}`,...(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,Q,X;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: '5단계 (Five Steps)',
  args: {
    steps: ['신청서 작성', '서류 제출', '심사', '승인 통보', '처리 완료'],
    current: 3
  },
  parameters: {
    docs: {
      description: {
        story: '**행정 신청 처리 흐름처럼 5단계**로 구성된 케이스입니다. 심사 중인 상태입니다.'
      }
    }
  }
}`,...(X=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <InteractiveDemo />,
  name: '단계 이동 (Interactive)',
  parameters: {
    docs: {
      description: {
        story: '**이전/다음 버튼으로 단계를 직접 이동**해볼 수 있는 인터랙티브 예시입니다.'
      }
    },
    controls: {
      disable: true
    }
  }
}`,...($=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const ue=["Simple","Vertical","Completed","Error","Empty","LegacyChildren","Default","FirstStep","LastStep","ThreeSteps","FiveSteps","Interactive"];export{n as Completed,p as Default,o as Empty,a as Error,i as FirstStep,l as FiveSteps,u as Interactive,d as LastStep,c as LegacyChildren,s as Simple,m as ThreeSteps,t as Vertical,ue as __namedExportsOrder,le as default};
