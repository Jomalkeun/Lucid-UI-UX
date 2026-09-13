import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-BxXVWNx3.js";import{C as n}from"./Chip-DraJAJI6.js";import{d as V}from"./reference-types-4ftiVeOu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CkIaN0ex.js";import"./utils-DCADjnpI.js";const D=V([{library:"Quasar",component:"Chip",url:"https://quasar.dev/vue-components/chip",usedFor:["comparison"],relation:"compared"}]),P={title:"Atoms/Display/Chip",component:n,tags:["autodocs","form","ref:krds","ref:vuetify","ref:mui","ref:quasar"],parameters:{references:D,docs:{description:{component:"\n## Chip (CheckboxChip / RadioChip)\n\n**필터·태그 형태로 선택 상태를 표시**하는 칩 컴포넌트입니다.\n복수 선택에는 `CheckboxChip`, 단일 선택에는 `RadioChip`을 사용합니다.\n각각 `CheckboxGroup` / `RadioGroup`으로 묶어 그룹 상태를 관리합니다.\n\n---\n\n### CheckboxChip vs RadioChip\n\n| | CheckboxChip | RadioChip |\n|---|---|---|\n| 선택 방식 | 복수 선택 | 단일 선택 |\n| 그룹 컴포넌트 | `CheckboxGroup` | `RadioGroup` |\n| 값 prop | `name` (그룹 배열에 추가) | `value` (그룹 단일값과 비교) |\n| 그룹 v-model | `string[]` | — |\n| 그룹 value prop | — | `string` (제어 모드) |\n\n> ⚠️ `CheckboxChip`은 **`name`** 으로 값을 식별하고, `RadioChip`은 **`value`** 로 값을 식별합니다. 혼용 주의.\n\n---\n\n### RadioGroup 제어 방식\n\n| prop | 설명 |\n|---|---|\n| `value` | 외부 상태로 제어하는 현재 선택값 (제어 모드) |\n| `defaultValue` | 초기 선택값 (비제어 모드) |\n| `column` | `true`이면 세로 배열 |\n\n---\n\n### 접근성(A11y) 가이드\n\n| 체크 | 항목 |\n|---|---|\n| ✅ | `id`와 `label`이 `<input>`/`<label>` 쌍으로 자동 연결됩니다. |\n| ✅ | `disabled` 상태에서 Tab 포커스에서 제외됩니다. |\n| ⚠️ | `RadioGroup`에 `name` prop을 명시하면 브라우저 기본 라디오 그룹 동작이 보장됩니다. |\n        "}}},argTypes:{label:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},status:{control:"select",options:["default","success","warning","danger","info"],table:{category:"State"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},disabled:{control:"boolean",table:{category:"State"}},loading:{control:"boolean",table:{category:"State"}},density:{control:"inline-radio",options:["compact","comfortable","spacious"],table:{category:"Layout"}},selected:{control:"boolean",table:{category:"State"}}},args:{label:"전체",status:"default",size:"md",selected:!1,disabled:!1,loading:!1},render:a=>o.jsx(n,{...a})},i={render:()=>{const a=["전체","노출중","예약","종료"],[l,r]=s.useState(["전체"]),e=t=>{r(m=>m.includes(t)?m.filter(T=>T!==t):[...m,t])};return o.jsx("div",{role:"group","aria-label":"상태 필터",style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:a.map(t=>o.jsx(n,{label:t,selected:l.includes(t),onClick:()=>e(t)},t))})},name:"복수 선택 필터 (CheckboxChip)",parameters:{docs:{description:{story:"\n**복수 선택이 필요한 필터 칩**입니다.\n`CheckboxGroup`의 `v-model`은 현재 선택된 `name` 값들의 배열을 유지합니다.\n탭 목록·상태 필터처럼 여러 값을 동시에 선택할 수 있어야 하는 경우에 사용합니다.\n        "}},controls:{disable:!0}}},d={render:()=>{const a=[{label:"카드",value:"card"},{label:"리스트",value:"list"},{label:"갤러리",value:"gallery"}],[l,r]=s.useState("card");return o.jsx("div",{role:"radiogroup","aria-label":"보기 방식",style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:a.map(e=>o.jsx(n,{label:e.label,role:"radio","aria-checked":l===e.value,selected:l===e.value,onClick:()=>r(e.value)},e.value))})},name:"단일 선택 필터 (RadioChip)",parameters:{docs:{description:{story:"\n**단일 선택이 필요한 필터 칩**입니다.\n`RadioGroup`의 `value` prop(제어 모드)으로 현재 선택 상태를 외부에서 관리합니다.\n`RadioChip`은 `name`이 아닌 **`value`** prop으로 그룹의 선택값과 비교됩니다.\n\n> 💡 초기값만 설정하고 외부 제어가 불필요하다면 `RadioGroup`의 `defaultValue`를 사용하세요.\n        "}},controls:{disable:!0}}},p={render:()=>{const[a,l]=s.useState("month"),r=[{label:"1주",value:"week"},{label:"1개월",value:"month"},{label:"3개월",value:"3month"},{label:"1년",value:"year"}];return o.jsx("div",{role:"radiogroup","aria-label":"기간",style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:r.map(e=>o.jsx(n,{label:e.label,role:"radio","aria-checked":a===e.value,selected:a===e.value,onClick:()=>l(e.value)},e.value))})},name:"비제어 단일 선택 (Radio Uncontrolled)",parameters:{docs:{description:{story:`
**\`defaultValue\`로 초기 선택값만 지정하는 비제어 모드**입니다.
외부 상태 관리 없이 내부에서 선택 상태를 유지합니다.
단순 기간·범위 선택처럼 선택 결과를 폼 제출 시에만 읽는 경우에 적합합니다.
        `}},controls:{disable:!0}}},c={render:()=>{const[a,l]=s.useState("basic"),r=[{label:"기본",value:"basic",disabled:!1},{label:"스탠다드",value:"standard",disabled:!1},{label:"프리미엄",value:"premium",disabled:!0}];return o.jsx("div",{role:"radiogroup","aria-label":"플랜",style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:r.map(e=>o.jsx(n,{label:e.label,role:"radio","aria-checked":a===e.value,selected:a===e.value,disabled:e.disabled,onClick:()=>l(e.value)},e.value))})},name:"비활성 항목 포함 (With Disabled)",parameters:{docs:{description:{story:`
**\`disabled: true\`로 특정 항목을 비활성화**합니다.
구독하지 않은 플랜, 권한 없는 옵션 등 현재 선택 불가한 항목에 사용합니다.
        `}},controls:{disable:!0}}},u={render:()=>{const[a,l]=s.useState("sms"),r=[{label:"문자(SMS)",value:"sms"},{label:"이메일",value:"email"},{label:"앱 푸시 알림",value:"push"}];return o.jsx("div",{role:"radiogroup","aria-label":"연락 방법",style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"flex-start"},children:r.map(e=>o.jsx(n,{label:e.label,role:"radio","aria-checked":a===e.value,selected:a===e.value,onClick:()=>l(e.value)},e.value))})},name:"세로 배열 (Column Layout)",parameters:{docs:{description:{story:'\n**`RadioGroup`의 `column: true`로 세로 배열**합니다.\n레이블이 길거나 선택지가 많아 가로 배치가 어려운 경우에 사용합니다.\n`CheckboxGroup`은 `type="column"`으로 동일하게 적용합니다.\n        '}},controls:{disable:!0}}};var b,v,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const options = ['전체', '노출중', '예약', '종료'];
    const [selected, setSelected] = useState<string[]>(['전체']);
    const toggleOption = (option: string) => {
      setSelected(current => current.includes(option) ? current.filter(item => item !== option) : [...current, option]);
    };
    return <div role="group" aria-label="상태 필터" style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>
        {options.map(option => <Chip key={option} label={option} selected={selected.includes(option)} onClick={() => toggleOption(option)} />)}
      </div>;
  },
  name: '복수 선택 필터 (CheckboxChip)',
  parameters: {
    docs: {
      description: {
        story: \`
**복수 선택이 필요한 필터 칩**입니다.
\\\`CheckboxGroup\\\`의 \\\`v-model\\\`은 현재 선택된 \\\`name\\\` 값들의 배열을 유지합니다.
탭 목록·상태 필터처럼 여러 값을 동시에 선택할 수 있어야 하는 경우에 사용합니다.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(h=(v=i.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var y,x,C;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      label: '카드',
      value: 'card'
    }, {
      label: '리스트',
      value: 'list'
    }, {
      label: '갤러리',
      value: 'gallery'
    }];
    const [viewType, setViewType] = useState('card');
    return <div role="radiogroup" aria-label="보기 방식" style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>
        {options.map(option => <Chip key={option.value} label={option.label} role="radio" aria-checked={viewType === option.value} selected={viewType === option.value} onClick={() => setViewType(option.value)} />)}
      </div>;
  },
  name: '단일 선택 필터 (RadioChip)',
  parameters: {
    docs: {
      description: {
        story: \`
**단일 선택이 필요한 필터 칩**입니다.
\\\`RadioGroup\\\`의 \\\`value\\\` prop(제어 모드)으로 현재 선택 상태를 외부에서 관리합니다.
\\\`RadioChip\\\`은 \\\`name\\\`이 아닌 **\\\`value\\\`** prop으로 그룹의 선택값과 비교됩니다.

> 💡 초기값만 설정하고 외부 제어가 불필요하다면 \\\`RadioGroup\\\`의 \\\`defaultValue\\\`를 사용하세요.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(C=(x=d.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var g,f,k;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [period, setPeriod] = useState('month');
    const options = [{
      label: '1주',
      value: 'week'
    }, {
      label: '1개월',
      value: 'month'
    }, {
      label: '3개월',
      value: '3month'
    }, {
      label: '1년',
      value: 'year'
    }];
    return <div role="radiogroup" aria-label="기간" style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>
        {options.map(option => <Chip key={option.value} label={option.label} role="radio" aria-checked={period === option.value} selected={period === option.value} onClick={() => setPeriod(option.value)} />)}
      </div>;
  },
  name: '비제어 단일 선택 (Radio Uncontrolled)',
  parameters: {
    docs: {
      description: {
        story: \`
**\\\`defaultValue\\\`로 초기 선택값만 지정하는 비제어 모드**입니다.
외부 상태 관리 없이 내부에서 선택 상태를 유지합니다.
단순 기간·범위 선택처럼 선택 결과를 폼 제출 시에만 읽는 경우에 적합합니다.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(k=(f=p.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var S,R,w;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('basic');
    const options = [{
      label: '기본',
      value: 'basic',
      disabled: false
    }, {
      label: '스탠다드',
      value: 'standard',
      disabled: false
    }, {
      label: '프리미엄',
      value: 'premium',
      disabled: true
    }];
    return <div role="radiogroup" aria-label="플랜" style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>
        {options.map(option => <Chip key={option.value} label={option.label} role="radio" aria-checked={selected === option.value} selected={selected === option.value} disabled={option.disabled} onClick={() => setSelected(option.value)} />)}
      </div>;
  },
  name: '비활성 항목 포함 (With Disabled)',
  parameters: {
    docs: {
      description: {
        story: \`
**\\\`disabled: true\\\`로 특정 항목을 비활성화**합니다.
구독하지 않은 플랜, 권한 없는 옵션 등 현재 선택 불가한 항목에 사용합니다.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(w=(R=c.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var G,j,W;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const [method, setMethod] = useState('sms');
    const options = [{
      label: '문자(SMS)',
      value: 'sms'
    }, {
      label: '이메일',
      value: 'email'
    }, {
      label: '앱 푸시 알림',
      value: 'push'
    }];
    return <div role="radiogroup" aria-label="연락 방법" style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      alignItems: 'flex-start'
    }}>
        {options.map(option => <Chip key={option.value} label={option.label} role="radio" aria-checked={method === option.value} selected={method === option.value} onClick={() => setMethod(option.value)} />)}
      </div>;
  },
  name: '세로 배열 (Column Layout)',
  parameters: {
    docs: {
      description: {
        story: \`
**\\\`RadioGroup\\\`의 \\\`column: true\\\`로 세로 배열**합니다.
레이블이 길거나 선택지가 많아 가로 배치가 어려운 경우에 사용합니다.
\\\`CheckboxGroup\\\`은 \\\`type="column"\\\`으로 동일하게 적용합니다.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(W=(j=u.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};const q=["CheckboxFilter","RadioFilter","RadioUncontrolled","WithDisabled","ColumnLayout"];export{i as CheckboxFilter,u as ColumnLayout,d as RadioFilter,p as RadioUncontrolled,c as WithDisabled,q as __namedExportsOrder,P as default};
