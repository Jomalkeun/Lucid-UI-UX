import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as z,c as o}from"./reference-types-CC3VHbJD.js";import{r as x}from"./index-BxXVWNx3.js";import{c as D}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";function t({number:r,children:i,className:s,...a}){return e.jsxs("li",{className:D("flex gap-2 text-krds-body-md text-krds-gray-90",s),...a,children:[r!==void 0&&e.jsxs("span",{className:"shrink-0 font-medium",children:[r,"."]}),e.jsx("span",{children:i})]})}t.displayName="TextListItem";function A(r,i){return x.Children.map(r,(s,a)=>x.isValidElement(s)?i==="dash"?e.jsxs("li",{className:"flex gap-2 text-krds-body-md text-krds-gray-90",children:[e.jsx("span",{className:"shrink-0",children:"—"}),e.jsx("span",{children:s.props.children})]}):i==="hollow"?e.jsxs("li",{className:"flex gap-2 text-krds-body-md text-krds-gray-90",children:[e.jsx("span",{className:"shrink-0",children:"○"}),e.jsx("span",{children:s.props.children})]}):i==="decimal"?e.jsxs("li",{className:"flex gap-2 text-krds-body-md text-krds-gray-90",children:[e.jsxs("span",{className:"shrink-0 font-medium",children:["1.",a+1]}),e.jsx("span",{children:s.props.children})]}):s:s)}function n({type:r="decimal",ariaLabel:i,children:s,className:a,...R}){const W=r==="ordered"?"ol":"ul",O=r==="ordered"?s:A(s,r);return e.jsx(W,{"aria-label":i,className:D("flex flex-col gap-1 pl-0 list-none",a),...R,children:O})}n.displayName="TextList";t.__docgenInfo={description:"",methods:[],displayName:"TextListItem",props:{number:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};n.__docgenInfo={description:"",methods:[],displayName:"TextList",props:{type:{required:!1,tsType:{name:"union",raw:"'decimal' | 'dash' | 'hollow' | 'ordered'",elements:[{name:"literal",value:"'decimal'"},{name:"literal",value:"'dash'"},{name:"literal",value:"'hollow'"},{name:"literal",value:"'ordered'"}]},description:"",defaultValue:{value:"'decimal'",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"Names a list when it appears among several nearby collections."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const _=z([{library:"U.S. Web Design System",component:"List",url:"https://designsystem.digital.gov/components/list/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"KRDS",component:"TextList",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-textlist--docs",usedFor:["design","behavior","api"],relation:"adapted"},o("Bootstrap","Typography","https://getbootstrap.com/docs/5.3/content/typography/#lists"),o("Flowbite","Lists","https://flowbite.com/docs/typography/lists/"),o("daisyUI","List","https://daisyui.com/components/list/"),o("Ant Design","List","https://ant.design/components/list/"),o("Chakra UI","List","https://www.chakra-ui.com/docs/components/list")]),V={title:"Atoms/Display/TextList",component:n,tags:["autodocs","display","ref:krds","ref:chakra-ui","ref:daisy-ui","ref:ant-design","ref:flowbite","ref:bootstrap","ref:uswds"],parameters:{references:_,docs:{description:{component:`
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
        `}}},argTypes:{type:{description:"목록 마커의 스타일 타입입니다.",control:{type:"select"},options:["decimal","dash","hollow","ordered"],table:{type:{summary:"'decimal' | 'dash' | 'hollow' | 'ordered'"},defaultValue:{summary:"'decimal'"},category:"Appearance"}},ariaLabel:{control:"text",table:{category:"Accessibility"}}},args:{type:"decimal"},render:r=>e.jsx(n,{...r,children:r.children??r.label??r.text??void 0})},d={name:"소수점 번호 (Decimal)",args:{type:"decimal"},parameters:{docs:{description:{story:`
**\`decimal\` 타입** — 1.1, 1.2, 1.3 형식의 소수점 번호 마커를 사용합니다.
법령 조항이나 하위 항목이 있는 계층 구조의 목록에서 주로 사용합니다.

기본값(default)이므로 \`type\` prop을 생략하면 이 스타일이 적용됩니다.
        `}}}},l={name:"대시 (Dash)",args:{type:"dash"},parameters:{docs:{description:{story:`
**\`dash\` 타입** — 각 항목 앞에 대시(—) 마커를 표시합니다.
유의사항, 안내 문구, 부연 설명처럼 **순서가 없는** 항목 나열에 가장 많이 사용합니다.
        `}}}},c={name:"빈 원 (Hollow)",args:{type:"hollow"},parameters:{docs:{description:{story:"\n**`hollow` 타입** — 빈 원(○) 마커를 사용합니다.\n`decimal` 목록의 하위 레벨이나 보조 안내 사항을 나타낼 때 사용합니다.\n시각적으로 덜 강조되어 부연 정보임을 자연스럽게 전달합니다.\n        "}}}},p={render:()=>e.jsxs(n,{type:"ordered",children:[e.jsx(t,{number:"1",children:"본인 인증 수단을 선택하세요."}),e.jsx(t,{number:"2",children:"휴대폰 번호를 입력하고 인증번호를 받으세요."}),e.jsx(t,{number:"3",children:"수신한 인증번호 6자리를 입력하세요."}),e.jsx(t,{number:"4",children:"인증이 완료되면 다음 단계로 이동합니다."})]}),name:"순서 있는 번호 (Ordered)",parameters:{docs:{description:{story:"\n**`ordered` 타입** — 1, 2, 3 형식의 순서 있는 번호 마커를 사용합니다.\n단계별 절차나 순서가 명확한 안내에 적합합니다.\n\n`ordered` 타입은 `TextListItem`의 **`number` prop으로 번호를 직접 지정**해야 합니다.\n        "}},controls:{disable:!0}}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",maxWidth:"480px",padding:"24px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"11px",fontWeight:"700",color:"#888",letterSpacing:".08em",margin:"0 0 8px",textTransform:"uppercase"},children:"decimal (기본)"}),e.jsxs(n,{type:"decimal",children:[e.jsx(t,{children:"정기 점검 시 서비스가 일시 중단될 수 있습니다."}),e.jsx(t,{children:"개인정보는 처리 목적 달성 후 즉시 파기합니다."}),e.jsx(t,{children:"문의 사항은 고객센터로 연락하세요."})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"11px",fontWeight:"700",color:"#888",letterSpacing:".08em",margin:"0 0 8px",textTransform:"uppercase"},children:"dash"}),e.jsxs(n,{type:"dash",children:[e.jsx(t,{children:"정기 점검 시 서비스가 일시 중단될 수 있습니다."}),e.jsx(t,{children:"개인정보는 처리 목적 달성 후 즉시 파기합니다."}),e.jsx(t,{children:"문의 사항은 고객센터로 연락하세요."})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"11px",fontWeight:"700",color:"#888",letterSpacing:".08em",margin:"0 0 8px",textTransform:"uppercase"},children:"hollow"}),e.jsxs(n,{type:"hollow",children:[e.jsx(t,{children:"정기 점검 시 서비스가 일시 중단될 수 있습니다."}),e.jsx(t,{children:"개인정보는 처리 목적 달성 후 즉시 파기합니다."}),e.jsx(t,{children:"문의 사항은 고객센터로 연락하세요."})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"11px",fontWeight:"700",color:"#888",letterSpacing:".08em",margin:"0 0 8px",textTransform:"uppercase"},children:"ordered"}),e.jsxs(n,{type:"ordered",children:[e.jsx(t,{number:"1",children:"본인 인증 수단을 선택하세요."}),e.jsx(t,{number:"2",children:"인증번호를 입력하세요."}),e.jsx(t,{number:"3",children:"인증 완료 후 다음 단계로 이동합니다."})]})]})]}),name:"전체 타입 비교 (Overview)",parameters:{docs:{description:{story:`
**TextList의 모든 타입을 한 화면에서 비교**하는 레퍼런스 뷰입니다.
마커 스타일의 차이를 직관적으로 확인하고 적합한 타입을 선택하는 데 활용하세요.
        `}},controls:{disable:!0}}};var h,u,y;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(u=d.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var T,f,g;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var L,b,j;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(j=(b=c.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var I,w,v;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
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
}`,...(v=(w=p.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var S,k,N;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
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
        }}>
            decimal (기본)
          </p>
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
        }}>
            dash
          </p>
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
        }}>
            hollow
          </p>
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
        }}>
            ordered
          </p>
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
}`,...(N=(k=m.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};const B=["Decimal","Dash","Hollow","Ordered","AllTypes"];export{m as AllTypes,l as Dash,d as Decimal,c as Hollow,p as Ordered,B as __namedExportsOrder,V as default};
