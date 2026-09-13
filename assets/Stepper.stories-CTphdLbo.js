import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as R}from"./reference-types-4ftiVeOu.js";function i({children:t,...c}){return e.jsx("div",{...c,children:t})}i.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const P=R([{library:"U.S. Web Design System",component:"Process list",url:"https://designsystem.digital.gov/components/process-list/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"PatternFly",component:"Progress stepper",url:"https://www.patternfly.org/components/progress-stepper/",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Ark UI",component:"Steps",url:"https://ark-ui.com/docs/components/steps",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Element Plus",component:"Steps",url:"https://element-plus.org/en-US/component/steps",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"PrimeVue",component:"Stepper",url:"https://primevue.org/stepper/",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Flowbite",component:"Stepper",url:"https://flowbite.com/docs/components/stepper/",usedFor:["comparison"],relation:"compared"},{library:"daisyUI",component:"Steps",url:"https://daisyui.com/components/steps/",usedFor:["comparison"],relation:"compared"},{library:"Ant Design",component:"Steps",url:"https://ant.design/components/steps/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Steps",url:"https://www.chakra-ui.com/docs/components/steps",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Stepper",url:"https://quasar.dev/vue-components/stepper",usedFor:["comparison"],relation:"compared"}]),V={title:"Molecules/Navigation/Stepper",component:i,tags:["autodocs","navigation","krds-extended","ref:chakra-ui","ref:ark-ui","ref:daisy-ui","ref:ant-design","ref:flowbite","ref:vuetify","ref:mui","ref:quasar","ref:element-plus","ref:primevue","ref:patternfly","ref:uswds"],parameters:{references:P,docs:{description:{component:`
## Stepper (StepIndicator)

**다단계 프로세스의 현재 진행 위치**를 시각적으로 나타내는 컴포넌트입니다.

---

### currentStep 동작 방식

\`currentStep\`은 **0-based 인덱스**입니다.

| currentStep | 의미 |
|---|---|
| \`0\` | 첫 번째 단계 활성 |
| \`1\` | 두 번째 단계 활성, 첫 번째 완료 표시 |
| steps.length | 모든 단계 완료 |

> ⚠️ \`v-model:currentStep\`으로 단계를 제어합니다. 단순 prop 바인딩(\`:currentStep\`)도 가능합니다.

---

### pageTitle

\`pageTitle\` prop을 설정하면 스텝 인디케이터 위에 페이지 제목 \`<h2>\`가 함께 렌더링됩니다.

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | 활성 단계에 \`currentStepText\`가 스크린리더 전용으로 선언됩니다. |
| ✅ | 완료 단계(\`done\`)와 활성 단계(\`active\`)가 CSS 클래스로 구분됩니다. |
        `}}},argTypes:{steps:{description:"단계 배열입니다. 각 항목은 `{ step: string, title: string }` 형태입니다.",control:"object",table:{type:{summary:"{ step: string; title: string }[]"},defaultValue:{summary:"(없음)"},category:"Content"}},currentStepText:{description:"현재 활성 단계에 스크린리더로 읽히는 보조 텍스트입니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'현재 단계'"},category:"Content"}},pageTitle:{description:"스텝 인디케이터 위에 표시되는 페이지 제목입니다. 제공 시 `<h2>` 태그로 렌더링됩니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"(없음)"},category:"Content"}},currentStep:{description:"현재 활성 단계의 **0-based 인덱스**입니다. `v-model:currentStep`으로 제어합니다.",control:"number",table:{type:{summary:"number"},defaultValue:{summary:"0"},category:"State"}}},args:{currentStep:1,currentStepText:"현재 단계",steps:[{step:"1",title:"등록"},{step:"2",title:"승인"},{step:"3",title:"배포"}]},render:t=>e.jsx(i,{...t,children:t.children??t.label??t.text??void 0})},n={name:"1단계 활성 (Step 1)",args:{currentStep:0,currentStepText:"진행 중",steps:[{step:"1",title:"등록"},{step:"2",title:"승인"},{step:"3",title:"배포"}]},parameters:{docs:{description:{story:"**`currentStep: 0`** — 첫 번째 단계가 활성화된 상태입니다. 아직 완료된 단계는 없습니다."}}}},s={name:"2단계 활성 (Step 2)",args:{currentStep:1,currentStepText:"진행 중",steps:[{step:"1",title:"등록"},{step:"2",title:"승인"},{step:"3",title:"배포"}]},parameters:{docs:{description:{story:"**`currentStep: 1`** — 두 번째 단계가 활성화되고 첫 번째 단계는 완료(done) 표시됩니다."}}}},p={name:"전체 완료 (Completed)",args:{currentStep:3,currentStepText:"완료",steps:[{step:"1",title:"등록"},{step:"2",title:"승인"},{step:"3",title:"배포"}]},parameters:{docs:{description:{story:"**`currentStep`을 `steps.length`로 설정**하면 모든 단계가 완료 표시됩니다."}}}},o={name:"페이지 제목 포함 (With Page Title)",args:{currentStep:1,currentStepText:"진행 중",pageTitle:"콘텐츠 등록",steps:[{step:"1",title:"기본 정보"},{step:"2",title:"상세 설정"},{step:"3",title:"검토 및 배포"}]},parameters:{docs:{description:{story:"**`pageTitle` prop을 설정하면 스텝 위에 `<h2>` 제목이 렌더링**됩니다. 페이지 컨텍스트를 명확히 해야 하는 경우에 사용합니다."}}}},a={render:()=>{const t=({children:I,...w})=>e.jsx("div",{...w,children:I}),r=[{step:"1",title:"기본 정보"},{step:"2",title:"약관 동의"},{step:"3",title:"완료 확인"}],C=()=>{0 .value>0&&0 .value--},j=()=>{0 .value<r.length&&0 .value++};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"16px"},children:[e.jsx(t,{"v-modelcurrentStep":0,steps:r,currentStepText:"진행 중"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("button",{type:"button",disabled:!0,style:{padding:"8px 16px",border:"1px solid #ccc",borderRadius:"4px",background:"#fff",cursor:"pointer",fontSize:"13px"},onClick:C,children:"이전"}),e.jsx("button",{type:"button",disabled:0>=r.length,style:{padding:"8px 16px",border:"none",borderRadius:"4px",background:"#0064FF",color:"#fff",cursor:"pointer",fontSize:"13px"},onClick:j,children:0>=r.length?"완료":"다음"})]}),e.jsxs("p",{style:{fontSize:"12px",color:"#888"},children:["currentStep: ",0]})]})},name:"인터랙티브 진행 (Interactive)",parameters:{docs:{description:{story:"**이전/다음 버튼으로 단계를 이동하는 인터랙티브 예시**입니다. `v-model:currentStep`이 0-based 인덱스로 동작하는 것을 확인할 수 있습니다."}},controls:{disable:!0}}};var l,d,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '1단계 활성 (Step 1)',
  args: {
    currentStep: 0,
    currentStepText: '진행 중',
    steps: [{
      step: '1',
      title: '등록'
    }, {
      step: '2',
      title: '승인'
    }, {
      step: '3',
      title: '배포'
    }]
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`**\\\`currentStep: 0\\\`** — 첫 번째 단계가 활성화된 상태입니다. 아직 완료된 단계는 없습니다.\`
      }
    }
  }
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,S,y;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '2단계 활성 (Step 2)',
  args: {
    currentStep: 1,
    currentStepText: '진행 중',
    steps: [{
      step: '1',
      title: '등록'
    }, {
      step: '2',
      title: '승인'
    }, {
      step: '3',
      title: '배포'
    }]
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`**\\\`currentStep: 1\\\`** — 두 번째 단계가 활성화되고 첫 번째 단계는 완료(done) 표시됩니다.\`
      }
    }
  }
}`,...(y=(S=s.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var g,x,b;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '전체 완료 (Completed)',
  args: {
    currentStep: 3,
    currentStepText: '완료',
    steps: [{
      step: '1',
      title: '등록'
    }, {
      step: '2',
      title: '승인'
    }, {
      step: '3',
      title: '배포'
    }]
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`**\\\`currentStep\\\`을 \\\`steps.length\\\`로 설정**하면 모든 단계가 완료 표시됩니다.\`
      }
    }
  }
}`,...(b=(x=p.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,h,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '페이지 제목 포함 (With Page Title)',
  args: {
    currentStep: 1,
    currentStepText: '진행 중',
    pageTitle: '콘텐츠 등록',
    steps: [{
      step: '1',
      title: '기본 정보'
    }, {
      step: '2',
      title: '상세 설정'
    }, {
      step: '3',
      title: '검토 및 배포'
    }]
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`**\\\`pageTitle\\\` prop을 설정하면 스텝 위에 \\\`<h2>\\\` 제목이 렌더링**됩니다. 페이지 컨텍스트를 명확히 해야 하는 경우에 사용합니다.\`
      }
    }
  }
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var T,F,k;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const StepIndicator = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const currentStep = 0;
    const steps = [{
      step: '1',
      title: '기본 정보'
    }, {
      step: '2',
      title: '약관 동의'
    }, {
      step: '3',
      title: '완료 확인'
    }];
    const prev = () => {
      if (currentStep.value > 0) currentStep.value--;
    };
    const next = () => {
      if (currentStep.value < steps.length) currentStep.value++;
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      padding: '16px'
    }}>
        <StepIndicator v-modelcurrentStep={currentStep} steps={steps} currentStepText="진행 중" />
        <div style={{
        display: 'flex',
        gap: '8px'
      }}>
          <button type="button" disabled={currentStep <= 0} style={{
          padding: '8px 16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          background: '#fff',
          cursor: 'pointer',
          fontSize: '13px'
        }} onClick={prev}>이전</button>
          <button type="button" disabled={currentStep >= steps.length} style={{
          padding: '8px 16px',
          border: 'none',
          borderRadius: '4px',
          background: '#0064FF',
          color: '#fff',
          cursor: 'pointer',
          fontSize: '13px'
        }} onClick={next}>{currentStep >= steps.length ? '완료' : '다음'}</button>
        </div>
        <p style={{
        fontSize: '12px',
        color: '#888'
      }}>currentStep: {currentStep}</p>
      </div>;
  },
  name: '인터랙티브 진행 (Interactive)',
  parameters: {
    docs: {
      description: {
        story: \`**이전/다음 버튼으로 단계를 이동하는 인터랙티브 예시**입니다. \\\`v-model:currentStep\\\`이 0-based 인덱스로 동작하는 것을 확인할 수 있습니다.\`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(k=(F=a.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};const W=["Step1","Step2","Completed","WithPageTitle","Interactive"];export{p as Completed,a as Interactive,n as Step1,s as Step2,o as WithPageTitle,W as __namedExportsOrder,V as default};
