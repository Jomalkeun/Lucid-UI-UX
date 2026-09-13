import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as N}from"./reference-types-4ftiVeOu.js";import{r as p}from"./index-BxXVWNx3.js";import{c as W}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";function O(t,s){return p.Children.map(t,(r,c)=>p.isValidElement(r)?s==="dash"?e.jsxs("li",{className:"flex gap-2 text-krds-body-md text-krds-gray-90",children:[e.jsx("span",{className:"shrink-0",children:"—"}),e.jsx("span",{children:r.props.children})]}):s==="hollow"?e.jsxs("li",{className:"flex gap-2 text-krds-body-md text-krds-gray-90",children:[e.jsx("span",{className:"shrink-0",children:"○"}),e.jsx("span",{children:r.props.children})]}):s==="decimal"?e.jsxs("li",{className:"flex gap-2 text-krds-body-md text-krds-gray-90",children:[e.jsxs("span",{className:"shrink-0 font-medium",children:["1.",c+1]}),e.jsx("span",{children:r.props.children})]}):r:r)}function n({type:t="decimal",children:s,className:r,...c}){const k=t==="ordered"?"ol":"ul",D=t==="ordered"?s:O(s,t);return e.jsx(k,{className:W("flex flex-col gap-1 pl-0 list-none",r),...c,children:D})}n.displayName="TextList";n.__docgenInfo={description:"",methods:[],displayName:"TextList",props:{type:{required:!1,tsType:{name:"union",raw:"'decimal' | 'dash' | 'hollow' | 'ordered'",elements:[{name:"literal",value:"'decimal'"},{name:"literal",value:"'dash'"},{name:"literal",value:"'hollow'"},{name:"literal",value:"'ordered'"}]},description:"",defaultValue:{value:"'decimal'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const z=N([{library:"U.S. Web Design System",component:"List",url:"https://designsystem.digital.gov/components/list/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"KRDS",component:"TextList",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-textlist--docs",usedFor:["design","behavior","api"],relation:"adapted"},{library:"Bootstrap",component:"Typography",url:"https://getbootstrap.com/docs/5.3/content/typography/#lists",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"Lists",url:"https://flowbite.com/docs/typography/lists/",usedFor:["comparison"],relation:"compared"},{library:"daisyUI",component:"List",url:"https://daisyui.com/components/list/",usedFor:["comparison"],relation:"compared"},{library:"Ant Design",component:"List",url:"https://ant.design/components/list/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"List",url:"https://www.chakra-ui.com/docs/components/list",usedFor:["comparison"],relation:"compared"}]),_={title:"Atoms/Display/TextList",component:n,tags:["autodocs","display","ref:krds","ref:chakra-ui","ref:daisy-ui","ref:ant-design","ref:flowbite","ref:bootstrap","ref:uswds"],parameters:{references:z,docs:{description:{component:`
## TextList

**안내 문구·유의사항·단계별 설명 등을 목록 형태로 제공**하는 텍스트 리스트 컴포넌트입니다.
\`TextList\`와 \`TextListItem\`을 조합하여 사용하며, \`type\` prop으로 마커 스타일을 지정합니다.

---

### 타입별 용도

| type | 마커 | 적합한 상황 |
|---|---|---|
| \`decimal\` | 1.1, 1.2... | 하위 항목이 있는 순서 목록, 법령 조항 형식 |
| \`dash\` | — | 간단한 유의사항·안내 목록 |
| \`hollow\` | ○ | 부연 설명, 보조 안내, 두 번째 수준 목록 |
| \`ordered\` | 1, 2, 3... | 순서가 명확한 단계별 절차 안내 |

---

### 사용 지침

- **정보의 계층 구조**에 따라 마커 타입을 선택하세요.
  - 최상위 목록: \`decimal\` 또는 \`ordered\`
  - 하위(보조) 목록: \`dash\` 또는 \`hollow\`
- \`ordered\` 타입 사용 시 \`TextListItem\`의 **\`number\` prop으로 번호를 직접 지정**해야 합니다.
- 항목 수는 5~7개 이내를 권장합니다. 그 이상은 섹션 분리를 검토하세요.

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | 내부적으로 \`<ul>\` 또는 \`<ol>\` 태그로 렌더링되어 스크린리더가 목록 구조를 인식합니다. |
| ✅ | 각 항목은 \`<li>\`로 렌더링되어 순서 관계가 마크업 수준에서 보장됩니다. |
| ⚠️ | 마커(숫자, 대시)가 내용의 핵심이라면 텍스트 안에도 의미를 포함하세요. |
        `}}},argTypes:{type:{description:"목록 마커의 스타일 타입입니다.",control:{type:"select"},options:["decimal","dash","hollow","ordered"],table:{type:{summary:"'decimal' | 'dash' | 'hollow' | 'ordered'"},defaultValue:{summary:"'decimal'"},category:"Appearance"}}},args:{type:"decimal"},render:t=>e.jsx(n,{...t,children:t.children??t.label??t.text??void 0})},i={name:"소수점 번호 (Decimal)",args:{type:"decimal"},parameters:{docs:{description:{story:`
**\`decimal\` 타입** — 1.1, 1.2, 1.3 형식의 소수점 번호 마커를 사용합니다.
법령 조항이나 하위 항목이 있는 계층 구조의 목록에서 주로 사용합니다.

기본값(default)이므로 \`type\` prop을 생략하면 이 스타일이 적용됩니다.
        `}}}},o={name:"대시 (Dash)",args:{type:"dash"},parameters:{docs:{description:{story:`
**\`dash\` 타입** — 각 항목 앞에 대시(—) 마커를 표시합니다.
유의사항, 안내 문구, 부연 설명처럼 **순서가 없는** 항목 나열에 가장 많이 사용합니다.
        `}}}},a={name:"빈 원 (Hollow)",args:{type:"hollow"},parameters:{docs:{description:{story:"\n**`hollow` 타입** — 빈 원(○) 마커를 사용합니다.\n`decimal` 목록의 하위 레벨이나 보조 안내 사항을 나타낼 때 사용합니다.\n시각적으로 덜 강조되어 부연 정보임을 자연스럽게 전달합니다.\n        "}}}},d={render:()=>{const t=({children:s,...r})=>e.jsx("div",{...r,children:s});return e.jsxs(n,{type:"ordered",children:[e.jsx(t,{number:"1",children:"본인 인증 수단을 선택하세요."}),e.jsx(t,{number:"2",children:"휴대폰 번호를 입력하고 인증번호를 받으세요."}),e.jsx(t,{number:"3",children:"수신한 인증번호 6자리를 입력하세요."}),e.jsx(t,{number:"4",children:"인증이 완료되면 다음 단계로 이동합니다."})]})},name:"순서 있는 번호 (Ordered)",parameters:{docs:{description:{story:"\n**`ordered` 타입** — 1, 2, 3 형식의 순서 있는 번호 마커를 사용합니다.\n단계별 절차나 순서가 명확한 안내에 적합합니다.\n\n`ordered` 타입은 `TextListItem`의 **`number` prop으로 번호를 직접 지정**해야 합니다.\n        "}},controls:{disable:!0}}},l={render:()=>{const t=({children:s,...r})=>e.jsx("div",{...r,children:s});return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",maxWidth:"480px",padding:"24px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"11px",fontWeight:"700",color:"#888",letterSpacing:".08em",margin:"0 0 8px",textTransform:"uppercase"},children:"decimal (기본)"}),e.jsxs(n,{type:"decimal",children:[e.jsx(t,{children:"정기 점검 시 서비스가 일시 중단될 수 있습니다."}),e.jsx(t,{children:"개인정보는 처리 목적 달성 후 즉시 파기합니다."}),e.jsx(t,{children:"문의 사항은 고객센터로 연락하세요."})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"11px",fontWeight:"700",color:"#888",letterSpacing:".08em",margin:"0 0 8px",textTransform:"uppercase"},children:"dash"}),e.jsxs(n,{type:"dash",children:[e.jsx(t,{children:"정기 점검 시 서비스가 일시 중단될 수 있습니다."}),e.jsx(t,{children:"개인정보는 처리 목적 달성 후 즉시 파기합니다."}),e.jsx(t,{children:"문의 사항은 고객센터로 연락하세요."})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"11px",fontWeight:"700",color:"#888",letterSpacing:".08em",margin:"0 0 8px",textTransform:"uppercase"},children:"hollow"}),e.jsxs(n,{type:"hollow",children:[e.jsx(t,{children:"정기 점검 시 서비스가 일시 중단될 수 있습니다."}),e.jsx(t,{children:"개인정보는 처리 목적 달성 후 즉시 파기합니다."}),e.jsx(t,{children:"문의 사항은 고객센터로 연락하세요."})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"11px",fontWeight:"700",color:"#888",letterSpacing:".08em",margin:"0 0 8px",textTransform:"uppercase"},children:"ordered"}),e.jsxs(n,{type:"ordered",children:[e.jsx(t,{number:"1",children:"본인 인증 수단을 선택하세요."}),e.jsx(t,{number:"2",children:"인증번호를 입력하세요."}),e.jsx(t,{number:"3",children:"인증 완료 후 다음 단계로 이동합니다."})]})]})]})},name:"전체 타입 비교 (Overview)",parameters:{docs:{description:{story:`
**TextList의 모든 타입을 한 화면에서 비교**하는 레퍼런스 뷰입니다.
마커 스타일의 차이를 직관적으로 확인하고 적합한 타입을 선택하는 데 활용하세요.
        `}},controls:{disable:!0}}};var m,x,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '소수점 번호 (Decimal)',
  args: {
    type: 'decimal'
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**\\\`decimal\\\` 타입** — 1.1, 1.2, 1.3 형식의 소수점 번호 마커를 사용합니다.
법령 조항이나 하위 항목이 있는 계층 구조의 목록에서 주로 사용합니다.

기본값(default)이므로 \\\`type\\\` prop을 생략하면 이 스타일이 적용됩니다.
        \`
      }
    }
  }
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var u,y,T;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '대시 (Dash)',
  args: {
    type: 'dash'
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**\\\`dash\\\` 타입** — 각 항목 앞에 대시(—) 마커를 표시합니다.
유의사항, 안내 문구, 부연 설명처럼 **순서가 없는** 항목 나열에 가장 많이 사용합니다.
        \`
      }
    }
  }
}`,...(T=(y=o.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var f,L,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '빈 원 (Hollow)',
  args: {
    type: 'hollow'
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**\\\`hollow\\\` 타입** — 빈 원(○) 마커를 사용합니다.
\\\`decimal\\\` 목록의 하위 레벨이나 보조 안내 사항을 나타낼 때 사용합니다.
시각적으로 덜 강조되어 부연 정보임을 자연스럽게 전달합니다.
        \`
      }
    }
  }
}`,...(g=(L=a.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};var j,b,I;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const TextListItem = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    return <TextList type="ordered">
        <TextListItem number="1">본인 인증 수단을 선택하세요.</TextListItem>
        <TextListItem number="2">휴대폰 번호를 입력하고 인증번호를 받으세요.</TextListItem>
        <TextListItem number="3">수신한 인증번호 6자리를 입력하세요.</TextListItem>
        <TextListItem number="4">인증이 완료되면 다음 단계로 이동합니다.</TextListItem>
      </TextList>;
  },
  name: '순서 있는 번호 (Ordered)',
  parameters: {
    docs: {
      description: {
        story: \`
**\\\`ordered\\\` 타입** — 1, 2, 3 형식의 순서 있는 번호 마커를 사용합니다.
단계별 절차나 순서가 명확한 안내에 적합합니다.

\\\`ordered\\\` 타입은 \\\`TextListItem\\\`의 **\\\`number\\\` prop으로 번호를 직접 지정**해야 합니다.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(I=(b=d.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var v,w,S;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const TextListItem = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      maxWidth: '480px',
      padding: '24px'
    }}>
        <div>
          <p style={{
          fontSize: '11px',
          fontWeight: '700',
          color: '#888',
          letterSpacing: '.08em',
          margin: '0 0 8px',
          textTransform: 'uppercase'
        }}>decimal (기본)</p>
          <TextList type="decimal">
            <TextListItem>정기 점검 시 서비스가 일시 중단될 수 있습니다.</TextListItem>
            <TextListItem>개인정보는 처리 목적 달성 후 즉시 파기합니다.</TextListItem>
            <TextListItem>문의 사항은 고객센터로 연락하세요.</TextListItem>
          </TextList>
        </div>
        <div>
          <p style={{
          fontSize: '11px',
          fontWeight: '700',
          color: '#888',
          letterSpacing: '.08em',
          margin: '0 0 8px',
          textTransform: 'uppercase'
        }}>dash</p>
          <TextList type="dash">
            <TextListItem>정기 점검 시 서비스가 일시 중단될 수 있습니다.</TextListItem>
            <TextListItem>개인정보는 처리 목적 달성 후 즉시 파기합니다.</TextListItem>
            <TextListItem>문의 사항은 고객센터로 연락하세요.</TextListItem>
          </TextList>
        </div>
        <div>
          <p style={{
          fontSize: '11px',
          fontWeight: '700',
          color: '#888',
          letterSpacing: '.08em',
          margin: '0 0 8px',
          textTransform: 'uppercase'
        }}>hollow</p>
          <TextList type="hollow">
            <TextListItem>정기 점검 시 서비스가 일시 중단될 수 있습니다.</TextListItem>
            <TextListItem>개인정보는 처리 목적 달성 후 즉시 파기합니다.</TextListItem>
            <TextListItem>문의 사항은 고객센터로 연락하세요.</TextListItem>
          </TextList>
        </div>
        <div>
          <p style={{
          fontSize: '11px',
          fontWeight: '700',
          color: '#888',
          letterSpacing: '.08em',
          margin: '0 0 8px',
          textTransform: 'uppercase'
        }}>ordered</p>
          <TextList type="ordered">
            <TextListItem number="1">본인 인증 수단을 선택하세요.</TextListItem>
            <TextListItem number="2">인증번호를 입력하세요.</TextListItem>
            <TextListItem number="3">인증 완료 후 다음 단계로 이동합니다.</TextListItem>
          </TextList>
        </div>
      </div>;
  },
  name: '전체 타입 비교 (Overview)',
  parameters: {
    docs: {
      description: {
        story: \`
**TextList의 모든 타입을 한 화면에서 비교**하는 레퍼런스 뷰입니다.
마커 스타일의 차이를 직관적으로 확인하고 적합한 타입을 선택하는 데 활용하세요.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(S=(w=l.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const U=["Decimal","Dash","Hollow","Ordered","AllTypes"];export{l as AllTypes,o as Dash,i as Decimal,a as Hollow,d as Ordered,U as __namedExportsOrder,_ as default};
