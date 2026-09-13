import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as C}from"./reference-types-4ftiVeOu.js";import{R as c}from"./RadioGroup-C-XoJIpr.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./radio-group-KAscZpEI.js";import"./index-BIfB_hJr.js";import"./index-Cuo70N6w.js";import"./index-DtBajwEi.js";import"./index-DnJVWBh-.js";import"./index-BuIYde5q.js";import"./index-DCvtqWl1.js";import"./index-D95NAxrO.js";import"./index-DTo5Pt6F.js";import"./index-BKM4mA3Z.js";import"./index-D5tP6kvT.js";import"./index-BjCkHmxr.js";import"./index-D63pzw-_.js";import"./index-D_4yO-tZ.js";import"./index-CkIaN0ex.js";import"./utils-DCADjnpI.js";const G=C([{library:"Bootstrap",component:"Checks and radios",url:"https://getbootstrap.com/docs/5.3/forms/checks-radios/",usedFor:["comparison"],relation:"compared"},{library:"U.S. Web Design System",component:"Radio buttons",url:"https://designsystem.digital.gov/components/radio-buttons/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"GOV.UK Design System",component:"Radios",url:"https://design-system.service.gov.uk/components/radios/",usedFor:["behavior","accessibility","comparison"],relation:"compared"},{library:"Ark UI",component:"Radio Group",url:"https://ark-ui.com/docs/components/radio-group",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Radix UI",component:"Radio Group",url:"https://www.radix-ui.com/primitives/docs/components/radio-group",usedFor:["behavior","accessibility","api"],relation:"primitive"},{library:"Chakra UI",component:"Radio",url:"https://www.chakra-ui.com/docs/components/radio",usedFor:["comparison"],relation:"compared"}]),Q={title:"Molecules/Forms/RadioGroup",component:c,tags:["ref:bootstrap","autodocs","form","ref:krds","ref:chakra-ui","ref:shadcn-ui","ref:ark-ui","ref:radix-ui","ref:govuk","ref:uswds"],parameters:{references:G,docs:{description:{component:`
## RadioGroup

**단일 선택을 강제하는 라디오 버튼 묶음** 컴포넌트입니다.
\`RadioGroup\` 안에 \`Radio\`를 배치하면 배타적 선택이 자동으로 관리됩니다.

---

### CheckboxGroup과의 차이

| 항목 | RadioGroup | CheckboxGroup |
|---|---|---|
| 선택 수 | 반드시 하나 | 0개 이상 |
| 의미 | 상호 배타적 옵션 | 독립적 설정 항목 |
| 예시 | 계정 유형, 성별, 노출 방식 | 알림 유형, 관심 카테고리 |

---

### 사용 지침

- 선택지가 **2~5개**이고 서로 배타적일 때 사용합니다.
- 선택지가 6개 이상이면 \`Select\`(드롭다운)을 사용하는 편이 낫습니다.
- \`type: 'row'\` — 가로 나열. 짧은 레이블의 2~3개 옵션에 권장합니다.
- \`type: 'column'\` — 세로 나열(기본값). 레이블이 길거나 선택지가 많을 때 적합합니다.

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | 같은 \`name\` 속성으로 라디오 버튼을 묶으면 브라우저가 자동으로 단일 선택을 강제합니다. |
| ✅ | 방향키(↑↓ 또는 ←→)로 선택 항목을 변경할 수 있습니다. |
| ✅ | 각 라디오는 \`<label>\`과 연결되어 클릭 영역이 확장됩니다. |
| ⚠️ | 그룹 전체에 \`<fieldset>\`/\`<legend>\` 또는 \`aria-labelledby\`로 그룹 레이블을 제공하세요. |
        `}}},argTypes:{type:{description:"라디오 항목의 나열 방향입니다.",control:{type:"select"},options:["column","row"],table:{type:{summary:"'column' | 'row'"},defaultValue:{summary:"'column'"},category:"Appearance"}},disabled:{description:"그룹 전체를 비활성화합니다.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}}},args:{type:"column",disabled:!1},render:o=>e.jsx(c,{...o,children:o.children??o.label??o.text??void 0})},a={name:"기본 (Default)",args:{type:"column",disabled:!1},parameters:{docs:{description:{story:"**세로 나열 기본 라디오 그룹**입니다. 계정 유형, 요금제 선택 등 배타적 옵션에 사용합니다."}}}},s={name:"가로 나열 (Row)",args:{type:"row",disabled:!1},parameters:{docs:{description:{story:"**가로로 나란히 배치**됩니다. 성별, 동의 여부처럼 선택지가 2~3개이고 레이블이 짧을 때 공간 효율이 높습니다."}}}},n={name:"비활성화 (Disabled)",args:{type:"column",disabled:!0},parameters:{docs:{description:{story:"**전체 라디오 그룹이 비활성화**된 상태입니다. 읽기 전용 폼 또는 조건 미충족 시 사용합니다."}}}},t={render:()=>{const o=({children:r,...d})=>e.jsx("div",{...d,children:r});return e.jsxs(c,{type:"column",children:[e.jsx(o,{value:"personal",name:"account-type2",checked:!1,children:"개인"}),e.jsx(o,{value:"business",name:"account-type2",checked:!0,children:"법인·사업자"}),e.jsx(o,{value:"government",name:"account-type2",checked:!1,children:"공공기관"})]})},name:"기본 선택 설정 (With Default)",parameters:{docs:{description:{story:"**초기 선택 값이 지정**된 상태입니다. 폼 수정 화면에서 기존 설정값을 미리 채울 때 사용합니다."}},controls:{disable:!0}}},i={render:()=>{const o=({children:d,...D})=>e.jsx("div",{...D,children:d}),r="personal";return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs(c,{type:"row",children:[e.jsx(o,{value:"personal",name:"account-ctrl",checked:r==="personal",onChange:()=>{},children:"개인"}),e.jsx(o,{value:"business",name:"account-ctrl",checked:r==="business",onChange:()=>{},children:"법인·사업자"}),e.jsx(o,{value:"government",name:"account-ctrl",checked:r==="government",onChange:()=>{},children:"공공기관"})]}),e.jsxs("p",{style:{fontSize:"12px",color:"#888",margin:"0"},children:["선택된 계정 유형: ",e.jsx("strong",{children:r})]})]})},name:"외부 상태 제어 (Controlled)",parameters:{docs:{description:{story:"**외부 `ref`로 선택 상태를 직접 관리**하는 제어 모드 예시입니다. 선택된 값이 실시간으로 표시됩니다."}},controls:{disable:!0}}};var l,p,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '기본 (Default)',
  args: {
    type: 'column',
    disabled: false
  } as any,
  parameters: {
    docs: {
      description: {
        story: '**세로 나열 기본 라디오 그룹**입니다. 계정 유형, 요금제 선택 등 배타적 옵션에 사용합니다.'
      }
    }
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,y,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '가로 나열 (Row)',
  args: {
    type: 'row',
    disabled: false
  } as any,
  parameters: {
    docs: {
      description: {
        story: '**가로로 나란히 배치**됩니다. 성별, 동의 여부처럼 선택지가 2~3개이고 레이블이 짧을 때 공간 효율이 높습니다.'
      }
    }
  }
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var b,f,g;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '비활성화 (Disabled)',
  args: {
    type: 'column',
    disabled: true
  } as any,
  parameters: {
    docs: {
      description: {
        story: '**전체 라디오 그룹이 비활성화**된 상태입니다. 읽기 전용 폼 또는 조건 미충족 시 사용합니다.'
      }
    }
  }
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,R,x;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const Radio = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    return <RadioGroup type="column">
        <Radio value="personal" name="account-type2" checked={false}>개인</Radio>
        <Radio value="business" name="account-type2" checked={true}>법인·사업자</Radio>
        <Radio value="government" name="account-type2" checked={false}>공공기관</Radio>
      </RadioGroup>;
  },
  name: '기본 선택 설정 (With Default)',
  parameters: {
    docs: {
      description: {
        story: '**초기 선택 값이 지정**된 상태입니다. 폼 수정 화면에서 기존 설정값을 미리 채울 때 사용합니다.'
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(x=(R=t.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var k,w,j;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const Radio = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const selected = 'personal';
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <RadioGroup type="row">
          <Radio value="personal" name="account-ctrl" checked={selected === 'personal'} onChange={() => undefined}>개인</Radio>
          <Radio value="business" name="account-ctrl" checked={selected === 'business'} onChange={() => undefined}>법인·사업자</Radio>
          <Radio value="government" name="account-ctrl" checked={selected === 'government'} onChange={() => undefined}>공공기관</Radio>
        </RadioGroup>
        <p style={{
        fontSize: '12px',
        color: '#888',
        margin: '0'
      }}>선택된 계정 유형: <strong>{selected}</strong></p>
      </div>;
  },
  name: '외부 상태 제어 (Controlled)',
  parameters: {
    docs: {
      description: {
        story: '**외부 \`ref\`로 선택 상태를 직접 관리**하는 제어 모드 예시입니다. 선택된 값이 실시간으로 표시됩니다.'
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(j=(w=i.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};const X=["Default","RowLayout","Disabled","WithDefault","Controlled"];export{i as Controlled,a as Default,n as Disabled,s as RowLayout,t as WithDefault,X as __namedExportsOrder,Q as default};
