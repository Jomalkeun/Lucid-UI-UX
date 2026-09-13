import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as re}from"./reference-types-4ftiVeOu.js";function a({children:r,...ae}){return e.jsx("div",{...ae,children:r})}a.__docgenInfo={description:"",methods:[],displayName:"DateInput",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const te=re([{library:"U.S. Web Design System",component:"Memorable date",url:"https://designsystem.digital.gov/components/memorable-date/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"GOV.UK Design System",component:"Date input",url:"https://design-system.service.gov.uk/components/date-input/",usedFor:["behavior","accessibility","comparison"],relation:"compared"},{library:"Ark UI",component:"Date Input",url:"https://ark-ui.com/docs/components/date-input",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"KRDS",component:"DateInput",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-dateinput--docs",usedFor:["design","behavior","api"],relation:"adapted"},{library:"Flowbite",component:"Datepicker",url:"https://flowbite.com/docs/components/datepicker/",usedFor:["comparison"],relation:"compared"},{library:"Ant Design",component:"DatePicker",url:"https://ant.design/components/date-picker/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Date Picker",url:"https://www.chakra-ui.com/docs/components/date-picker",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Date Picker",url:"https://quasar.dev/vue-components/date",usedFor:["comparison"],relation:"compared"}]),ne={title:"Molecules/Forms/DateInput",component:a,tags:["autodocs","form","ref:krds","ref:chakra-ui","ref:shadcn-ui","ref:ark-ui","ref:ant-design","ref:flowbite","ref:vuetify","ref:mui","ref:quasar","ref:govuk","ref:uswds"],parameters:{references:te,canvasPadding:"600px 180px",docs:{story:{height:"480px"},description:{component:`
## DateInput

**날짜를 직접 입력하거나 캘린더 팝업으로 선택**할 수 있는 인풋 컴포넌트입니다.
텍스트 직접 입력과 달력 팝업을 모두 지원하며, 유효성 상태(hint / error / success / information)를 표시할 수 있습니다.

---

### 상태 종류

| 상태 | prop | 설명 |
|---|---|---|
| 기본 | — | 빈 입력 필드 |
| 도움말 | \`hint\` | 입력 가이드 메시지 |
| 오류 | \`error\` | 유효성 검사 실패 메시지 |
| 성공 | \`success\` | 유효성 검사 통과 메시지 |
| 정보 | \`information\` | 추가 안내 메시지 |

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | \`label\` prop으로 레이블을 반드시 제공하세요. |
| ✅ | \`placeholder\`에 YYYY-MM-DD 형식을 안내하세요. |
| ✅ | 유효성 검사 실패 시 \`error\` prop으로 오류 메시지를 제공하세요. |
| ⚠️ | 캘린더 버튼 접근성을 위해 \`openButtonLabel\`을 제공하세요. |
        `}}},argTypes:{modelValue:{description:"v-model로 바인딩되는 날짜 값 (YYYY-MM-DD 문자열)입니다.",control:"text",table:{category:"Content"}},label:{description:"입력 필드 레이블입니다.",control:"text",table:{category:"Content"}},placeholder:{description:"빈 입력 필드에 표시되는 힌트 텍스트입니다.",control:"text",table:{category:"Content"}},hint:{description:"입력 필드 하단에 표시되는 도움말 텍스트입니다.",control:"text",table:{category:"Content"}},error:{description:"유효성 검사 실패 시 표시되는 오류 메시지입니다.",control:"text",table:{category:"Content"}},success:{description:"유효성 검사 통과 시 표시되는 성공 메시지입니다.",control:"text",table:{category:"Content"}},information:{description:"추가 정보를 안내하는 메시지입니다.",control:"text",table:{category:"Content"}},size:{description:"입력 필드 크기입니다.",control:{type:"select"},options:["small","medium","large"],table:{category:"Appearance"}},calendarPosition:{description:"캘린더 팝업이 열리는 위치입니다.",control:{type:"select"},options:["top","bottom"],table:{category:"Appearance"}},disabled:{description:"비활성화 여부입니다.",control:"boolean",table:{category:"State"}},readOnly:{description:"읽기 전용 여부입니다.",control:"boolean",table:{category:"State"}},disabledDates:{description:"선택 불가능한 날짜 목록입니다 (YYYY.MM.DD 형식).",control:"object",table:{category:"Data"}},eventDates:{description:"이벤트가 있는 날짜 목록입니다 (YYYY.MM.DD 형식).",control:"object",table:{category:"Data"}}},args:{modelValue:"",label:"날짜",placeholder:"YYYY-MM-DD",hint:"",error:"",success:"",information:"",size:"medium",disabled:!1,readOnly:!1,calendarPosition:"bottom",disabledDates:[],eventDates:[]},render:r=>e.jsx(a,{...r,children:r.children??r.label??r.text??void 0})},t={name:"기본 (Default)",args:{modelValue:"",label:"날짜",placeholder:"YYYY-MM-DD"},parameters:{docs:{description:{story:"**빈 상태의 기본 날짜 입력 필드**입니다."}}}},s={name:"도움말 (With Hint)",args:{modelValue:"",label:"생년월일",placeholder:"YYYY-MM-DD",hint:"생년월일을 YYYY-MM-DD 형식으로 입력해 주세요."},parameters:{docs:{description:{story:"**도움말 텍스트(hint)**가 표시된 상태입니다. 입력 형식이나 조건을 안내할 때 사용합니다."}}}},o={name:"값 입력됨 (With Default Value)",args:{modelValue:"2026-06-11",label:"날짜",placeholder:"YYYY-MM-DD"},parameters:{docs:{description:{story:"**날짜 값이 채워진 상태**입니다."}}}},n={name:"오류 (With Error)",args:{modelValue:"2026-13-45",label:"날짜",placeholder:"YYYY-MM-DD",error:"올바른 날짜 형식이 아닙니다."},parameters:{docs:{description:{story:"**유효성 검사 실패 시 오류 메시지**가 표시된 상태입니다."}}}},l={name:"성공 (With Success)",args:{modelValue:"2026-06-11",label:"날짜",placeholder:"YYYY-MM-DD",success:"사용 가능한 날짜입니다."},parameters:{docs:{description:{story:"**유효성 검사 통과 시 성공 메시지**가 표시된 상태입니다."}}}},i={name:"정보 (With Information)",args:{modelValue:"",label:"예약일",placeholder:"YYYY-MM-DD",information:"예약은 오늘부터 30일 이내만 가능합니다."},parameters:{docs:{description:{story:"**추가 안내 메시지(information)**가 표시된 상태입니다."}}}},c={name:"비활성화 (Disabled)",args:{modelValue:"2026-01-01",label:"날짜",disabled:!0},parameters:{docs:{description:{story:"**비활성화된 날짜 입력 필드**입니다. 읽기 전용 정보 표시 시 사용합니다."}}}},d={name:"읽기 전용 (Read Only)",args:{modelValue:"2026-06-11",label:"날짜",readOnly:!0},parameters:{docs:{description:{story:"**읽기 전용 날짜 필드**입니다. 수정은 불가하지만 포커스와 복사는 가능합니다."}}}},p={render:()=>e.jsx(a,{label:"예약일",placeholder:"YYYY-MM-DD",disabledDates:["2026.06.13","2026.06.14","2026.06.20","2026.06.21"]}),name:"날짜 비활성화 (With Disabled Dates)",parameters:{docs:{description:{story:"**특정 날짜를 선택 불가**하도록 설정한 상태입니다. `disabledDates`에 YYYY.MM.DD 형식으로 날짜를 전달합니다."}},controls:{disable:!0}}},m={render:()=>e.jsx(a,{label:"이벤트 날짜",placeholder:"YYYY-MM-DD",eventDates:["2026.06.15","2026.06.16","2026.06.22"]}),name:"이벤트 날짜 (With Event Dates)",parameters:{docs:{description:{story:"**이벤트가 있는 날짜를 표시**한 상태입니다. `eventDates`에 YYYY.MM.DD 형식으로 날짜를 전달합니다."}},controls:{disable:!0}}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",maxWidth:"360px"},children:[e.jsx(a,{label:"기본",placeholder:"YYYY-MM-DD"}),e.jsx(a,{label:"도움말",placeholder:"YYYY-MM-DD",hint:"날짜를 입력해 주세요."}),e.jsx(a,{label:"오류",modelValue:"2026-13-45",error:"올바른 날짜 형식이 아닙니다."}),e.jsx(a,{label:"성공",modelValue:"2026-06-11",success:"사용 가능한 날짜입니다."}),e.jsx(a,{label:"정보",placeholder:"YYYY-MM-DD",information:"오늘부터 30일 이내만 가능합니다."}),e.jsx(a,{label:"비활성화",modelValue:"2026-01-01",disabled:!0}),e.jsx(a,{label:"읽기 전용",modelValue:"2026-06-11",readOnly:!0})]}),name:"상태 비교 (All States)",parameters:{docs:{description:{story:"**모든 상태를 한눈에 비교**할 수 있는 뷰입니다."}},controls:{disable:!0}}},Y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"320px"},children:[e.jsx(a,{size:"small",label:"소형",placeholder:"YYYY-MM-DD (small)"}),e.jsx(a,{size:"medium",label:"중형",placeholder:"YYYY-MM-DD (medium)"}),e.jsx(a,{size:"large",label:"대형",placeholder:"YYYY-MM-DD (large)"})]}),name:"크기 비교 (All Sizes)",parameters:{docs:{description:{story:"**small · medium · large** 3단계 크기 비교입니다."}},controls:{disable:!0}}},D={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"flex-end",gap:"8px",flexWrap:"wrap"},children:[e.jsx(a,{size:"medium",label:"시작일",modelValue:"2026-06-01",placeholder:"YYYY-MM-DD",style:{width:"160px"}}),e.jsx("span",{style:{color:"#888",fontSize:"13px",paddingBottom:"10px"},children:"~"}),e.jsx(a,{size:"medium",label:"종료일",modelValue:"2026-06-30",placeholder:"YYYY-MM-DD",style:{width:"160px"}})]}),name:"기간 입력 (Date Range)",parameters:{docs:{description:{story:"**두 개의 DateInput으로 기간을 입력**받는 패턴입니다. 단순한 기간 필터에 캘린더 팝업 없이 사용합니다."}},controls:{disable:!0}}};var b,h,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '기본 (Default)',
  args: {
    modelValue: '',
    label: '날짜',
    placeholder: 'YYYY-MM-DD'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '**빈 상태의 기본 날짜 입력 필드**입니다.'
      }
    }
  }
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var M,g,x;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: '도움말 (With Hint)',
  args: {
    modelValue: '',
    label: '생년월일',
    placeholder: 'YYYY-MM-DD',
    hint: '생년월일을 YYYY-MM-DD 형식으로 입력해 주세요.'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '**도움말 텍스트(hint)**가 표시된 상태입니다. 입력 형식이나 조건을 안내할 때 사용합니다.'
      }
    }
  }
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,V,W;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '값 입력됨 (With Default Value)',
  args: {
    modelValue: '2026-06-11',
    label: '날짜',
    placeholder: 'YYYY-MM-DD'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '**날짜 값이 채워진 상태**입니다.'
      }
    }
  }
}`,...(W=(V=o.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var v,S,I;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '오류 (With Error)',
  args: {
    modelValue: '2026-13-45',
    label: '날짜',
    placeholder: 'YYYY-MM-DD',
    error: '올바른 날짜 형식이 아닙니다.'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '**유효성 검사 실패 시 오류 메시지**가 표시된 상태입니다.'
      }
    }
  }
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var j,k,z;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '성공 (With Success)',
  args: {
    modelValue: '2026-06-11',
    label: '날짜',
    placeholder: 'YYYY-MM-DD',
    success: '사용 가능한 날짜입니다.'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '**유효성 검사 통과 시 성공 메시지**가 표시된 상태입니다.'
      }
    }
  }
}`,...(z=(k=l.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var w,R,A;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '정보 (With Information)',
  args: {
    modelValue: '',
    label: '예약일',
    placeholder: 'YYYY-MM-DD',
    information: '예약은 오늘부터 30일 이내만 가능합니다.'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '**추가 안내 메시지(information)**가 표시된 상태입니다.'
      }
    }
  }
}`,...(A=(R=i.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var O,E,F;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '비활성화 (Disabled)',
  args: {
    modelValue: '2026-01-01',
    label: '날짜',
    disabled: true
  } as any,
  parameters: {
    docs: {
      description: {
        story: '**비활성화된 날짜 입력 필드**입니다. 읽기 전용 정보 표시 시 사용합니다.'
      }
    }
  }
}`,...(F=(E=c.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var C,P,H;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '읽기 전용 (Read Only)',
  args: {
    modelValue: '2026-06-11',
    label: '날짜',
    readOnly: true
  } as any,
  parameters: {
    docs: {
      description: {
        story: '**읽기 전용 날짜 필드**입니다. 수정은 불가하지만 포커스와 복사는 가능합니다.'
      }
    }
  }
}`,...(H=(P=d.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var U,_,q;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <DateInput label="예약일" placeholder="YYYY-MM-DD" disabledDates={['2026.06.13', '2026.06.14', '2026.06.20', '2026.06.21']} />,
  name: '날짜 비활성화 (With Disabled Dates)',
  parameters: {
    docs: {
      description: {
        story: '**특정 날짜를 선택 불가**하도록 설정한 상태입니다. \`disabledDates\`에 YYYY.MM.DD 형식으로 날짜를 전달합니다.'
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(q=(_=p.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var B,N,K;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <DateInput label="이벤트 날짜" placeholder="YYYY-MM-DD" eventDates={['2026.06.15', '2026.06.16', '2026.06.22']} />,
  name: '이벤트 날짜 (With Event Dates)',
  parameters: {
    docs: {
      description: {
        story: '**이벤트가 있는 날짜를 표시**한 상태입니다. \`eventDates\`에 YYYY.MM.DD 형식으로 날짜를 전달합니다.'
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(K=(N=m.parameters)==null?void 0:N.docs)==null?void 0:K.source}}};var T,G,L;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '360px'
  }}>
        <DateInput label="기본" placeholder="YYYY-MM-DD" />
        <DateInput label="도움말" placeholder="YYYY-MM-DD" hint="날짜를 입력해 주세요." />
        <DateInput label="오류" modelValue="2026-13-45" error="올바른 날짜 형식이 아닙니다." />
        <DateInput label="성공" modelValue="2026-06-11" success="사용 가능한 날짜입니다." />
        <DateInput label="정보" placeholder="YYYY-MM-DD" information="오늘부터 30일 이내만 가능합니다." />
        <DateInput label="비활성화" modelValue="2026-01-01" disabled={true} />
        <DateInput label="읽기 전용" modelValue="2026-06-11" readOnly={true} />
      </div>,
  name: '상태 비교 (All States)',
  parameters: {
    docs: {
      description: {
        story: '**모든 상태를 한눈에 비교**할 수 있는 뷰입니다.'
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(L=(G=u.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var Q,J,X;Y.parameters={...Y.parameters,docs:{...(Q=Y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '320px'
  }}>
        <DateInput size="small" label="소형" placeholder="YYYY-MM-DD (small)" />
        <DateInput size="medium" label="중형" placeholder="YYYY-MM-DD (medium)" />
        <DateInput size="large" label="대형" placeholder="YYYY-MM-DD (large)" />
      </div>,
  name: '크기 비교 (All Sizes)',
  parameters: {
    docs: {
      description: {
        story: '**small · medium · large** 3단계 크기 비교입니다.'
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(X=(J=Y.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Z,$,ee;D.parameters={...D.parameters,docs:{...(Z=D.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'flex-end',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
        <DateInput size="medium" label="시작일" modelValue="2026-06-01" placeholder="YYYY-MM-DD" style={{
      width: '160px'
    }} />
        <span style={{
      color: '#888',
      fontSize: '13px',
      paddingBottom: '10px'
    }}>~</span>
        <DateInput size="medium" label="종료일" modelValue="2026-06-30" placeholder="YYYY-MM-DD" style={{
      width: '160px'
    }} />
      </div>,
  name: '기간 입력 (Date Range)',
  parameters: {
    docs: {
      description: {
        story: '**두 개의 DateInput으로 기간을 입력**받는 패턴입니다. 단순한 기간 필터에 캘린더 팝업 없이 사용합니다.'
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(ee=($=D.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const le=["Default","WithHint","WithDefaultValue","WithError","WithSuccess","WithInformation","Disabled","ReadOnly","WithDisabledDates","WithEventDates","AllStates","AllSizes","DateRange"];export{Y as AllSizes,u as AllStates,D as DateRange,t as Default,c as Disabled,d as ReadOnly,o as WithDefaultValue,p as WithDisabledDates,n as WithError,m as WithEventDates,s as WithHint,i as WithInformation,l as WithSuccess,le as __namedExportsOrder,ne as default};
