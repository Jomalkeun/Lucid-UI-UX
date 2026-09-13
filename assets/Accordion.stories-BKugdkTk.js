import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as M}from"./reference-types-4ftiVeOu.js";import{A as m}from"./Accordion-BEZs-f9s.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DCADjnpI.js";import"./chevron-down-D49U3Rzo.js";import"./createLucideIcon-Ct87QT5c.js";const k=M([{library:"U.S. Web Design System",component:"Accordion",url:"https://designsystem.digital.gov/components/accordion/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"GOV.UK Design System",component:"Accordion",url:"https://design-system.service.gov.uk/components/accordion/",usedFor:["behavior","accessibility","comparison"],relation:"compared"},{library:"Ark UI",component:"Accordion",url:"https://ark-ui.com/docs/components/accordion",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"KRDS",component:"Accordion",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-accordion--docs",usedFor:["design","behavior","api"],relation:"adapted"},{library:"Bootstrap",component:"Accordion",url:"https://getbootstrap.com/docs/5.3/components/accordion/",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"Accordion",url:"https://flowbite.com/docs/components/accordion/",usedFor:["comparison"],relation:"compared"},{library:"daisyUI",component:"Accordion",url:"https://daisyui.com/components/accordion/",usedFor:["comparison"],relation:"compared"},{library:"Mantine UI",component:"Frequently asked questions",url:"https://ui.mantine.dev/category/faq/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."},{library:"Ant Design",component:"Collapse",url:"https://ant.design/components/collapse/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Accordion",url:"https://www.chakra-ui.com/docs/components/accordion",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Expansion Item",url:"https://quasar.dev/vue-components/expansion-item",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Accordion",url:"https://base-ui.com/react/components/accordion",usedFor:["comparison"],relation:"compared"}]),q={title:"Molecules/Navigation/Accordion",component:m,tags:["autodocs","navigation","ref:krds","ref:chakra-ui","ref:shadcn-ui","ref:ark-ui","ref:daisy-ui","ref:flowbite","ref:vuetify","ref:mui","ref:bootstrap","ref:quasar","ref:ant-design","ref:base-ui","ref:mantine-ui","ref:govuk","ref:uswds"],parameters:{references:k,docs:{description:{component:`
## Accordion

**여러 섹션의 콘텐츠를 접고 펼치는** 디스클로저(Disclosure) 패턴 컴포넌트입니다.
\`Accordion → AccordionItem → AccordionHeader + AccordionPanel\`의 Compound Component 구조로 구성됩니다.

---

### 언제 사용하나요?

| 상황 | 권장 여부 |
|---|---|
| 콘텐츠 양이 많아 화면을 길게 만드는 경우 | **Accordion** ✅ |
| FAQ, 공지사항, 약관 등 선택적으로 읽는 콘텐츠 | **Accordion** ✅ |
| 항상 전체 내용을 표시해야 하는 경우 | 일반 섹션/카드 사용 |
| 2개 이하의 탭 형태로 콘텐츠를 전환할 때 | \`Tabs\` 사용 |

---

### 사용 지침

- **variant: 'default'** — 박스 형태. 섹션 간 구분이 명확해야 하는 경우 사용합니다.
- **variant: 'line'** — 라인 형태. 여백이 좁거나 가볍게 표현할 때 사용합니다.
- **allowMultiple: true** (기본값) — 여러 항목을 동시에 열 수 있습니다. FAQ처럼 항목 간 비교가 필요한 경우 적합합니다.
- **allowMultiple: false** — 한 번에 하나만 열립니다. 단계별 안내처럼 순차적으로 읽어야 하는 경우 적합합니다.

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | \`AccordionHeader\` 내부의 \`<button>\`은 \`aria-expanded\`로 열림 상태를 선언합니다. |
| ✅ | 버튼과 패널이 \`aria-controls\` / \`id\` 쌍으로 자동 연결됩니다. |
| ✅ | \`Enter\` · \`Space\` 키로 키보드 토글이 지원됩니다. |
| ⚠️ | AccordionHeader 슬롯에 충분히 설명적인 텍스트를 제공하세요. 아이콘만 사용하면 스크린리더가 인식하지 못합니다. |
        `}}},argTypes:{variant:{description:"아코디언의 시각적 스타일을 결정합니다. `default`는 박스형, `line`은 구분선만 표시합니다.",control:{type:"select"},options:["default","line"],table:{type:{summary:"'default' | 'line'"},defaultValue:{summary:"'default'"},category:"Appearance"}},allowMultiple:{description:"`true`이면 여러 항목을 동시에 열 수 있고, `false`이면 하나만 열립니다.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"State"}},items:{description:"아코디언 아이템 목록. `value`(고유 식별자)·`header`(제목)·`panel`(내용)을 자유롭게 편집해 동작을 테스트할 수 있습니다.",control:"object",table:{type:{summary:"{ value: string; header: string; panel: string }[]"},category:"Content"}},defaultValue:{description:"초기에 열린 상태로 표시할 `AccordionItem`의 `value` 배열입니다. (스토리 마운트 시 1회 적용)",control:"object",table:{type:{summary:"string[]"},defaultValue:{summary:"[]"},category:"Content"}},modelValue:{description:"`v-model`로 바인딩되는 열린 항목의 `value` 배열입니다. 제어 모드(Controlled)에서 사용합니다.",control:!1,table:{type:{summary:"string[]"},defaultValue:{summary:"[]"},category:"Content"}}},args:{variant:"default",allowMultiple:!0,defaultValue:[],items:[{value:"item-1",header:"공지사항 안내",panel:"서비스 이용과 관련된 공지사항을 확인할 수 있습니다. 중요한 변경 사항이 있을 경우 사전에 공지드립니다."},{value:"item-2",header:"이용 약관",panel:"본 서비스 이용 시 아래 약관에 동의한 것으로 간주합니다. 약관의 주요 변경 사항은 30일 전 공지합니다."},{value:"item-3",header:"자주 묻는 질문",panel:"이용 중 불편하신 점이 있으시면 고객센터로 문의해 주세요. 운영 시간은 평일 09:00 ~ 18:00입니다."}]},render:o=>e.jsx(m,{...o,children:o.children??o.label??o.text??void 0})},s={name:"기본 (Default)",args:{variant:"default",allowMultiple:!0,defaultValue:[]},parameters:{docs:{description:{story:"\n**가장 기본적인 아코디언 상태**입니다.\n모든 항목이 닫힌 채로 시작하며, 사용자가 항목을 클릭하면 해당 패널이 펼쳐집니다.\n`allowMultiple`이 `true`(기본값)이므로 여러 항목을 동시에 열 수 있습니다.\n\n> 💡 `defaultValue`에 열어 둘 항목의 `value`를 배열로 지정하면 초기 열림 상태를 설정할 수 있습니다.\n        "}}}},c={name:"단일 선택 (Single Selection)",args:{variant:"default",allowMultiple:!1,defaultValue:["item-1"]},parameters:{docs:{description:{story:`
**한 번에 하나의 항목만 열리는 모드**입니다.
다른 항목을 클릭하면 이전에 열린 항목이 자동으로 닫힙니다.

**언제 사용하나요?**
- 단계별 안내처럼 내용을 순서대로 읽어야 하는 경우
- 항목 간 내용이 상호 배타적인 경우 (예: 플랜 비교, 카테고리 필터)

> ⚠️ 사용자가 여러 항목을 비교해야 한다면 \`allowMultiple: true\`(기본값)를 사용하세요.
        `}}}},p={name:"라인 스타일 (Line Variant)",args:{variant:"line",allowMultiple:!0,defaultValue:[]},parameters:{docs:{description:{story:`
**구분선(라인)만 표시하는 경량 스타일**입니다.
\`variant: 'line'\`을 적용하면 박스 테두리 없이 하단 구분선만 렌더링됩니다.

**언제 사용하나요?**
- 페이지 여백이 좁거나 배경이 있는 영역에 삽입할 때
- 시각적으로 가볍게 표현해야 하는 보조 정보 섹션 (예: 사이드바 필터, 설정 패널)

> 💡 \`default\` 스타일은 카드형 UI처럼 강조된 박스 영역이 필요할 때, \`line\` 스타일은 콘텐츠와 자연스럽게 어울려야 할 때 사용하세요.
        `}}}},u={render:()=>{const o=({children:t,...i})=>e.jsx("div",{...i,children:t}),n=({children:t,...i})=>e.jsx("div",{...i,children:t}),r=({children:t,...i})=>e.jsx("div",{...i,children:t}),l=[];return e.jsxs(m,{value:l,onChange:()=>{},variant:"default",allowMultiple:!0,children:[e.jsxs(o,{value:"terms",children:[e.jsx(n,{children:"서비스 이용 약관"}),e.jsxs(r,{children:[e.jsx("p",{style:{margin:"0 0 12px",fontSize:"14px",color:"#333"},children:e.jsx("strong",{children:"제1조 (목적)"})}),e.jsx("p",{style:{margin:"0 0 16px",fontSize:"13px",color:"#555",lineHeight:"1.7"},children:"본 약관은 회사가 제공하는 서비스의 이용에 관한 조건 및 절차, 회사와 이용자 간의 권리·의무 및 책임사항, 기타 필요한 사항을 규정합니다."}),e.jsx("p",{style:{margin:"0 0 8px",fontSize:"14px",color:"#333"},children:e.jsx("strong",{children:"제2조 (서비스 범위)"})}),e.jsxs("ul",{style:{margin:"0",paddingLeft:"20px",fontSize:"13px",color:"#555",lineHeight:"2"},children:[e.jsx("li",{children:"콘텐츠 등록·수정·삭제"}),e.jsx("li",{children:"채널 관리 및 예약 발행"}),e.jsx("li",{children:"통계 및 리포트 조회"}),e.jsx("li",{children:"API 연동 서비스"})]})]})]}),e.jsxs(o,{value:"privacy",children:[e.jsx(n,{children:"개인정보 처리 방침"}),e.jsxs(r,{children:[e.jsx("p",{style:{margin:"0 0 12px",fontSize:"13px",color:"#555",lineHeight:"1.7"},children:"회사는 개인정보 보호법 및 관련 법령을 준수하며, 수집된 개인정보를 아래 목적 이외의 용도로 사용하지 않습니다."}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"12px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f5f5f5"},children:[e.jsx("th",{style:{padding:"8px 12px",border:"1px solid #ddd",textAlign:"left"},children:"수집 항목"}),e.jsx("th",{style:{padding:"8px 12px",border:"1px solid #ddd",textAlign:"left"},children:"수집 목적"}),e.jsx("th",{style:{padding:"8px 12px",border:"1px solid #ddd",textAlign:"left"},children:"보유 기간"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px 12px",border:"1px solid #ddd"},children:"이름, 이메일"}),e.jsx("td",{style:{padding:"8px 12px",border:"1px solid #ddd"},children:"회원 식별"}),e.jsx("td",{style:{padding:"8px 12px",border:"1px solid #ddd"},children:"탈퇴 후 30일"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px 12px",border:"1px solid #ddd"},children:"접속 로그"}),e.jsx("td",{style:{padding:"8px 12px",border:"1px solid #ddd"},children:"서비스 안정성"}),e.jsx("td",{style:{padding:"8px 12px",border:"1px solid #ddd"},children:"3개월"})]})]})]})]})]}),e.jsxs(o,{value:"faq",children:[e.jsx(n,{children:"자주 묻는 질문"}),e.jsx(r,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:"13px",fontWeight:"600",color:"#333"},children:"Q. 비밀번호를 잊어버렸어요."}),e.jsxs("p",{style:{margin:"0",fontSize:"13px",color:"#555",lineHeight:"1.6"},children:["로그인 화면의 ",e.jsx("strong",{children:"비밀번호 찾기"}),"를 클릭하면 등록된 이메일로 재설정 링크를 보내드립니다."]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:"13px",fontWeight:"600",color:"#333"},children:"Q. 서비스 이용 요금은 어떻게 되나요?"}),e.jsxs("p",{style:{margin:"0",fontSize:"13px",color:"#555",lineHeight:"1.6"},children:["기본 플랜은 ",e.jsx("strong",{children:"무료"}),"이며, 고급 기능은 프로 플랜(월 9,900원)에서 제공합니다."]})]})]})})]})]})},name:"복잡한 콘텐츠 (With Complex Content)",parameters:{docs:{description:{story:`
**슬롯 안에 복잡한 마크업을 삽입하는 시나리오**입니다.
\`AccordionPanel\`의 기본 슬롯은 자유롭게 HTML 요소를 받을 수 있어, 목록·표·단락 등 다양한 콘텐츠를 수용합니다.

**활용 예시:**
- 약관 본문 (제목 + 문단 + 목록)
- 개인정보 처리 방침 테이블
- FAQ 형태의 질문·답변 블록

> ⚠️ 패널 내부에 인터랙티브 요소(버튼·링크)를 넣을 경우, Tab 포커스 순서가 올바르게 흐르는지 반드시 검토하세요.
        `}},controls:{disable:!0}}},x={render:()=>{const o=({children:d,...a})=>e.jsx("div",{...a,children:d}),n=({children:d,...a})=>e.jsx("div",{...a,children:d}),r=({children:d,...a})=>e.jsx("div",{...a,children:d}),l=["step-1"],t=()=>{l.value=["step-1","step-2","step-3"]},i=()=>{l.value=[]};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("button",{type:"button",style:{padding:"6px 14px",fontSize:"13px",border:"1px solid #0064FF",borderRadius:"4px",background:"#0064FF",color:"#fff",cursor:"pointer"},onClick:t,children:"전체 열기"}),e.jsx("button",{type:"button",style:{padding:"6px 14px",fontSize:"13px",border:"1px solid #ccc",borderRadius:"4px",background:"#fff",color:"#333",cursor:"pointer"},onClick:i,children:"전체 닫기"}),e.jsxs("span",{style:{marginLeft:"8px",fontSize:"12px",color:"#888",alignSelf:"center"},children:["열린 항목: ",l.join(", ")||"(없음)"]})]}),e.jsxs(m,{value:l,onChange:()=>{},variant:"default",allowMultiple:!0,children:[e.jsxs(o,{value:"step-1",children:[e.jsx(n,{children:"1단계 — 기본 정보 입력"}),e.jsx(r,{children:"이름, 이메일, 연락처 등 기본 정보를 입력합니다."})]}),e.jsxs(o,{value:"step-2",children:[e.jsx(n,{children:"2단계 — 약관 동의"}),e.jsx(r,{children:"서비스 이용 약관과 개인정보 처리 방침에 동의합니다."})]}),e.jsxs(o,{value:"step-3",children:[e.jsx(n,{children:"3단계 — 완료 확인"}),e.jsx(r,{children:"입력한 정보를 최종 확인하고 제출합니다."})]})]})]})},name:"외부 상태 제어 (Controlled)",parameters:{docs:{description:{story:`
**v-model로 열림/닫힘 상태를 외부에서 제어하는 제어 모드(Controlled Mode)** 스토리입니다.
"전체 열기" / "전체 닫기" 버튼이 \`openItems\` ref를 직접 변경하면, 아코디언이 그 값에 따라 동기화됩니다.

**언제 사용하나요?**
- 부모 컴포넌트에서 특정 비즈니스 로직에 따라 패널을 프로그래밍적으로 열어야 할 때
- URL 파라미터나 전역 상태(Pinia 등)와 아코디언 열림 상태를 동기화해야 할 때
- 폼 유효성 검사 실패 시 해당 섹션을 자동으로 펼쳐야 할 때

> 💡 비제어 모드(Uncontrolled)가 필요하면 \`v-model\` 대신 \`defaultValue\` prop으로 초기값만 지정하세요.
        `}},controls:{disable:!0}}};var f,g,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '기본 (Default)',
  args: {
    variant: 'default',
    allowMultiple: true,
    defaultValue: []
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**가장 기본적인 아코디언 상태**입니다.
모든 항목이 닫힌 채로 시작하며, 사용자가 항목을 클릭하면 해당 패널이 펼쳐집니다.
\\\`allowMultiple\\\`이 \\\`true\\\`(기본값)이므로 여러 항목을 동시에 열 수 있습니다.

> 💡 \\\`defaultValue\\\`에 열어 둘 항목의 \\\`value\\\`를 배열로 지정하면 초기 열림 상태를 설정할 수 있습니다.
        \`
      }
    }
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,v,A;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '단일 선택 (Single Selection)',
  args: {
    variant: 'default',
    allowMultiple: false,
    defaultValue: ['item-1']
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**한 번에 하나의 항목만 열리는 모드**입니다.
다른 항목을 클릭하면 이전에 열린 항목이 자동으로 닫힙니다.

**언제 사용하나요?**
- 단계별 안내처럼 내용을 순서대로 읽어야 하는 경우
- 항목 간 내용이 상호 배타적인 경우 (예: 플랜 비교, 카테고리 필터)

> ⚠️ 사용자가 여러 항목을 비교해야 한다면 \\\`allowMultiple: true\\\`(기본값)를 사용하세요.
        \`
      }
    }
  }
}`,...(A=(v=c.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var b,j,S;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '라인 스타일 (Line Variant)',
  args: {
    variant: 'line',
    allowMultiple: true,
    defaultValue: []
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**구분선(라인)만 표시하는 경량 스타일**입니다.
\\\`variant: 'line'\\\`을 적용하면 박스 테두리 없이 하단 구분선만 렌더링됩니다.

**언제 사용하나요?**
- 페이지 여백이 좁거나 배경이 있는 영역에 삽입할 때
- 시각적으로 가볍게 표현해야 하는 보조 정보 섹션 (예: 사이드바 필터, 설정 패널)

> 💡 \\\`default\\\` 스타일은 카드형 UI처럼 강조된 박스 영역이 필요할 때, \\\`line\\\` 스타일은 콘텐츠와 자연스럽게 어울려야 할 때 사용하세요.
        \`
      }
    }
  }
}`,...(S=(j=p.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var I,C,H;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const AccordionItem = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const AccordionHeader = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const AccordionPanel = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const openItems = [];
    return <Accordion value={openItems} onChange={() => {}} variant="default" allowMultiple={true}>
        <AccordionItem value="terms">
          <AccordionHeader>서비스 이용 약관</AccordionHeader>
          <AccordionPanel>
            <p style={{
            margin: '0 0 12px',
            fontSize: '14px',
            color: '#333'
          }}>
              <strong>제1조 (목적)</strong>
            </p>
            <p style={{
            margin: '0 0 16px',
            fontSize: '13px',
            color: '#555',
            lineHeight: '1.7'
          }}>
              본 약관은 회사가 제공하는 서비스의 이용에 관한 조건 및 절차,
              회사와 이용자 간의 권리·의무 및 책임사항, 기타 필요한 사항을 규정합니다.
            </p>
            <p style={{
            margin: '0 0 8px',
            fontSize: '14px',
            color: '#333'
          }}>
              <strong>제2조 (서비스 범위)</strong>
            </p>
            <ul style={{
            margin: '0',
            paddingLeft: '20px',
            fontSize: '13px',
            color: '#555',
            lineHeight: '2'
          }}>
              <li>콘텐츠 등록·수정·삭제</li>
              <li>채널 관리 및 예약 발행</li>
              <li>통계 및 리포트 조회</li>
              <li>API 연동 서비스</li>
            </ul>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value="privacy">
          <AccordionHeader>개인정보 처리 방침</AccordionHeader>
          <AccordionPanel>
            <p style={{
            margin: '0 0 12px',
            fontSize: '13px',
            color: '#555',
            lineHeight: '1.7'
          }}>
              회사는 개인정보 보호법 및 관련 법령을 준수하며,
              수집된 개인정보를 아래 목적 이외의 용도로 사용하지 않습니다.
            </p>
            <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '12px'
          }}>
              <thead>
                <tr style={{
                background: '#f5f5f5'
              }}>
                  <th style={{
                  padding: '8px 12px',
                  border: '1px solid #ddd',
                  textAlign: 'left'
                }}>수집 항목</th>
                  <th style={{
                  padding: '8px 12px',
                  border: '1px solid #ddd',
                  textAlign: 'left'
                }}>수집 목적</th>
                  <th style={{
                  padding: '8px 12px',
                  border: '1px solid #ddd',
                  textAlign: 'left'
                }}>보유 기간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{
                  padding: '8px 12px',
                  border: '1px solid #ddd'
                }}>이름, 이메일</td>
                  <td style={{
                  padding: '8px 12px',
                  border: '1px solid #ddd'
                }}>회원 식별</td>
                  <td style={{
                  padding: '8px 12px',
                  border: '1px solid #ddd'
                }}>탈퇴 후 30일</td>
                </tr>
                <tr>
                  <td style={{
                  padding: '8px 12px',
                  border: '1px solid #ddd'
                }}>접속 로그</td>
                  <td style={{
                  padding: '8px 12px',
                  border: '1px solid #ddd'
                }}>서비스 안정성</td>
                  <td style={{
                  padding: '8px 12px',
                  border: '1px solid #ddd'
                }}>3개월</td>
                </tr>
              </tbody>
            </table>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value="faq">
          <AccordionHeader>자주 묻는 질문</AccordionHeader>
          <AccordionPanel>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
              <div>
                <p style={{
                margin: '0 0 4px',
                fontSize: '13px',
                fontWeight: '600',
                color: '#333'
              }}>Q. 비밀번호를 잊어버렸어요.</p>
                <p style={{
                margin: '0',
                fontSize: '13px',
                color: '#555',
                lineHeight: '1.6'
              }}>
                  로그인 화면의 <strong>비밀번호 찾기</strong>를 클릭하면 등록된 이메일로 재설정 링크를 보내드립니다.
                </p>
              </div>
              <div>
                <p style={{
                margin: '0 0 4px',
                fontSize: '13px',
                fontWeight: '600',
                color: '#333'
              }}>Q. 서비스 이용 요금은 어떻게 되나요?</p>
                <p style={{
                margin: '0',
                fontSize: '13px',
                color: '#555',
                lineHeight: '1.6'
              }}>
                  기본 플랜은 <strong>무료</strong>이며, 고급 기능은 프로 플랜(월 9,900원)에서 제공합니다.
                </p>
              </div>
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>;
  },
  name: '복잡한 콘텐츠 (With Complex Content)',
  parameters: {
    docs: {
      description: {
        story: \`
**슬롯 안에 복잡한 마크업을 삽입하는 시나리오**입니다.
\\\`AccordionPanel\\\`의 기본 슬롯은 자유롭게 HTML 요소를 받을 수 있어, 목록·표·단락 등 다양한 콘텐츠를 수용합니다.

**활용 예시:**
- 약관 본문 (제목 + 문단 + 목록)
- 개인정보 처리 방침 테이블
- FAQ 형태의 질문·답변 블록

> ⚠️ 패널 내부에 인터랙티브 요소(버튼·링크)를 넣을 경우, Tab 포커스 순서가 올바르게 흐르는지 반드시 검토하세요.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(H=(C=u.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var w,z,F;x.parameters={...x.parameters,docs:{...(w=x.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const AccordionItem = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const AccordionHeader = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const AccordionPanel = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const openItems = ['step-1'];
    const openAll = () => {
      openItems.value = ['step-1', 'step-2', 'step-3'];
    };
    const closeAll = () => {
      openItems.value = [];
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <div style={{
        display: 'flex',
        gap: '8px'
      }}>
          <button type="button" style={{
          padding: '6px 14px',
          fontSize: '13px',
          border: '1px solid #0064FF',
          borderRadius: '4px',
          background: '#0064FF',
          color: '#fff',
          cursor: 'pointer'
        }} onClick={openAll}>
            전체 열기
          </button>
          <button type="button" style={{
          padding: '6px 14px',
          fontSize: '13px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          background: '#fff',
          color: '#333',
          cursor: 'pointer'
        }} onClick={closeAll}>
            전체 닫기
          </button>
          <span style={{
          marginLeft: '8px',
          fontSize: '12px',
          color: '#888',
          alignSelf: 'center'
        }}>
            열린 항목: {openItems.join(', ') || '(없음)'}
          </span>
        </div>

        <Accordion value={openItems} onChange={() => {}} variant="default" allowMultiple={true}>
          <AccordionItem value="step-1">
            <AccordionHeader>1단계 — 기본 정보 입력</AccordionHeader>
            <AccordionPanel>
              이름, 이메일, 연락처 등 기본 정보를 입력합니다.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="step-2">
            <AccordionHeader>2단계 — 약관 동의</AccordionHeader>
            <AccordionPanel>
              서비스 이용 약관과 개인정보 처리 방침에 동의합니다.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="step-3">
            <AccordionHeader>3단계 — 완료 확인</AccordionHeader>
            <AccordionPanel>
              입력한 정보를 최종 확인하고 제출합니다.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>;
  },
  name: '외부 상태 제어 (Controlled)',
  parameters: {
    docs: {
      description: {
        story: \`
**v-model로 열림/닫힘 상태를 외부에서 제어하는 제어 모드(Controlled Mode)** 스토리입니다.
"전체 열기" / "전체 닫기" 버튼이 \\\`openItems\\\` ref를 직접 변경하면, 아코디언이 그 값에 따라 동기화됩니다.

**언제 사용하나요?**
- 부모 컴포넌트에서 특정 비즈니스 로직에 따라 패널을 프로그래밍적으로 열어야 할 때
- URL 파라미터나 전역 상태(Pinia 등)와 아코디언 열림 상태를 동기화해야 할 때
- 폼 유효성 검사 실패 시 해당 섹션을 자동으로 펼쳐야 할 때

> 💡 비제어 모드(Uncontrolled)가 필요하면 \\\`v-model\\\` 대신 \\\`defaultValue\\\` prop으로 초기값만 지정하세요.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(F=(z=x.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};const T=["Default","SingleSelection","LineVariant","WithComplexContent","Controlled"];export{x as Controlled,s as Default,p as LineVariant,c as SingleSelection,u as WithComplexContent,T as __namedExportsOrder,q as default};
