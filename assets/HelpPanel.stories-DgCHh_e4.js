import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as w}from"./reference-types-4ftiVeOu.js";function d({children:i,...s}){return e.jsx("div",{...s,children:i})}d.__docgenInfo={description:"",methods:[],displayName:"HelpPanel",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const W=w([{library:"Cloudscape Design System",component:"Help panel",url:"https://cloudscape.design/components/help-panel/",usedFor:["design","behavior","content"],relation:"compared"},{library:"KRDS",component:"HelpPanel",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-helppanel--docs",usedFor:["design","behavior","api"],relation:"adapted"}]),z={title:"Organisms/Navigation/HelpPanel",component:d,tags:["autodocs","navigation","ref:krds","ref:cloudscape"],parameters:{references:W,docs:{story:{height:"600px"},description:{component:`
## HelpPanel

페이지 우측에서 슬라이드로 열리는 **도움말 사이드 패널** 컴포넌트입니다.
\`HelpPanelTrigger\` 클릭 시 열리고, \`HelpPanelClose\` 버튼이나 패널 외부 클릭으로 닫힙니다.

### 컴포넌트 구성

\`HelpPanel\`은 다음 서브 컴포넌트로 구성됩니다:

| 컴포넌트 | 역할 |
|---|---|
| \`HelpPanel\` | 루트 컨테이너, 열림 상태 관리 |
| \`HelpPanelTrigger\` | 패널을 여는 트리거 버튼 (slot: trigger) |
| \`HelpPanelContent\` | 패널 내부 콘텐츠 영역 |
| \`HelpPanelClose\` | 패널 닫기 버튼 |
| \`HelpPanelAction\` | 하단 액션 버튼 영역 |
| \`HelpSection\` | 제목·설명을 포함한 섹션 블록 |
| \`HelpContentArea\` | 일반 콘텐츠 래퍼 영역 |
| \`HelpServiceGroup\` | 관련 서비스 그룹 |
| \`HelpRelatedService\` | 관련 서비스 항목 |
| \`HelpCoachProcess\` | 단계별 가이드 프로세스 목록 |
| \`HelpCoachTask\` | 단계별 가이드 개별 태스크 항목 |
| \`HelpLinkList\` | 도움말 링크 목록 |

---

### 사용 지침

- **isOpen** prop으로 외부에서 열림 상태를 제어하거나 **defaultOpen** 으로 초기값만 설정할 수 있습니다.
- \`#trigger\` 슬롯에 \`HelpPanelTrigger\`를 배치하세요. 패널 내용은 \`default\` 슬롯에 작성합니다.
- 패널이 열릴 때 포커스가 패널 내부로 이동해야 합니다 — 컴포넌트가 자동 처리합니다.
- **제어 모드**: \`v-model:isOpen\` 또는 \`@update:isOpen\` 이벤트로 상태를 직접 관리할 수 있습니다.

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | 패널은 \`role="dialog"\`로 선언됩니다. |
| ✅ | Escape 키로 패널을 닫을 수 있습니다. |
| ✅ | 패널 외부 클릭 시 자동으로 닫힙니다. |
| ✅ | 패널이 닫히면 트리거 버튼으로 포커스가 복귀합니다. |
        `}}},argTypes:{isOpen:{description:"패널의 열림 상태를 외부에서 제어합니다. `v-model:isOpen`으로 양방향 바인딩 가능합니다.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Props"}},defaultOpen:{description:"비제어 모드에서 초기 열림 상태입니다. 이후 상태는 컴포넌트 내부에서 관리됩니다.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Props"}},onOpenChange:{description:"패널 열림 상태가 바뀔 때 발생합니다.",table:{type:{summary:"(isOpen: boolean) => void"},category:"Emits"},action:"openChange"},"onUpdate:isOpen":{description:"`v-model:isOpen` 바인딩을 위한 이벤트입니다.",table:{type:{summary:"(value: boolean) => void"},category:"Emits"}}},args:{isOpen:!1,defaultOpen:!1},render:i=>e.jsx(d,{...i,children:i.children??i.label??i.text??void 0})},c={render:()=>{const i=({children:r,...t})=>e.jsx("div",{...t,children:r}),s=({children:r,...t})=>e.jsx("div",{...t,children:r}),o=({children:r,...t})=>e.jsx("div",{...t,children:r}),p=({children:r,...t})=>e.jsx("div",{...t,children:r});return e.jsx("div",{style:{padding:"24px"},children:e.jsxs(d,{children:[e.jsx(i,{children:"도움말 열기"}),e.jsxs(s,{srOnlyTitle:"도움말 패널",children:[e.jsx(p,{title:"서비스 이용 안내",description:"서비스 이용 중 궁금한 점을 확인하세요."}),e.jsx(o,{})]})]})})},name:"기본 (Default)",parameters:{docs:{description:{story:`
**가장 기본적인 HelpPanel** 구성입니다.
트리거 버튼 클릭 시 우측에서 패널이 슬라이드되어 나타납니다.
        `}},controls:{disable:!0}}},H={render:()=>{const i=({children:r,...t})=>e.jsx("div",{...t,children:r}),s=({children:r,...t})=>e.jsx("div",{...t,children:r}),o=({children:r,...t})=>e.jsx("div",{...t,children:r}),p=({children:r,...t})=>e.jsx("div",{...t,children:r});return e.jsx("div",{style:{padding:"24px"},children:e.jsxs(d,{defaultOpen:!0,children:[e.jsx(i,{children:"도움말"}),e.jsxs(s,{srOnlyTitle:"도움말 패널",children:[e.jsx(p,{title:"처음 오셨나요?",description:"서비스의 주요 기능을 소개합니다. 아래 내용을 확인해 보세요."}),e.jsx(o,{})]})]})})},name:"초기 열림 상태",parameters:{docs:{description:{story:`
**페이지 최초 진입 시 패널이 열린 상태**입니다. \`defaultOpen="true"\`를 설정하면 비제어 모드에서 초기 열림 상태로 렌더링됩니다.
신규 사용자 온보딩 또는 중요 안내 시에 활용할 수 있습니다.
        `}},controls:{disable:!0}}},x={render:()=>{const i=({children:n,...l})=>e.jsx("div",{...l,children:n}),s=({children:n,...l})=>e.jsx("div",{...l,children:n}),o=({children:n,...l})=>e.jsx("div",{...l,children:n}),p=({children:n,...l})=>e.jsx("div",{...l,children:n}),r=({children:n,...l})=>e.jsx("div",{...l,children:n}),t=({children:n,...l})=>e.jsx("div",{...l,children:n}),a=({children:n,...l})=>e.jsx("div",{...l,children:n});return e.jsx("div",{style:{padding:"24px"},children:e.jsxs(d,{children:[e.jsx(i,{children:"도움말"}),e.jsxs(s,{srOnlyTitle:"도움말 패널",children:[e.jsx(r,{title:"자주 묻는 질문",description:"서비스 이용 중 자주 묻는 질문을 확인하세요."}),e.jsxs(t,{title:"관련 서비스",children:[e.jsx(a,{children:"공지사항 바로가기"}),e.jsx(a,{children:"사용 가이드 다운로드"})]}),e.jsx(p,{children:e.jsx("button",{style:{width:"100%",padding:"10px",background:"#0066cc",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"14px"},children:"1:1 문의하기"})}),e.jsx(o,{})]})]})})},name:"섹션 + 액션 구성",parameters:{docs:{description:{story:`
**섹션·관련 서비스·액션 버튼**을 모두 포함한 풀 구성입니다.
실제 도움말 패널에서 가장 많이 사용하는 레이아웃 패턴입니다.
        `}},controls:{disable:!0}}},h={render:()=>{const i=({children:n,...l})=>e.jsx("div",{...l,children:n}),s=({children:n,...l})=>e.jsx("div",{...l,children:n}),o=({children:n,...l})=>e.jsx("div",{...l,children:n}),p=({children:n,...l})=>e.jsx("div",{...l,children:n}),r=({children:n,...l})=>e.jsx("div",{...l,children:n}),t=({children:n,...l})=>e.jsx("div",{...l,children:n}),a=({children:n,...l})=>e.jsx("div",{...l,children:n});return e.jsx("div",{style:{padding:"24px"},children:e.jsxs(d,{children:[e.jsx(i,{children:"도움말"}),e.jsxs(s,{srOnlyTitle:"도움말 패널",children:[e.jsx(p,{title:"서비스 신청 방법",description:"아래 단계를 순서대로 따라 하시면 쉽게 신청할 수 있습니다."}),e.jsx(r,{children:e.jsxs(t,{children:[e.jsx(a,{title:"1단계: 회원 정보 확인",expandText:"단계 펼치기",steps:["본인 인증을 진행하세요.","기관 정보를 확인하세요."]}),e.jsx(a,{title:"2단계: 신청서 작성",isCurrent:!0,expandText:"단계 펼치기",steps:["신청 유형을 선택하세요.","필수 항목을 모두 입력하세요.","첨부 서류를 업로드하세요."]}),e.jsx(a,{title:"3단계: 제출 및 접수 확인",expandText:"단계 펼치기",steps:["작성 내용을 최종 확인하세요.","제출 버튼을 클릭하세요.","접수 번호를 저장해 두세요."]})]})}),e.jsx(o,{})]})]})})},name:"단계별 가이드",parameters:{docs:{description:{story:"\n**단계별 가이드(CoachProcess)** 구성입니다. `HelpCoachProcess` 안에 `HelpCoachTask`를 나열하면 순서형 가이드를 제공할 수 있습니다.\n\n- `isCurrent` prop으로 현재 진행 중인 단계를 표시합니다.\n- `steps` 배열로 각 단계의 세부 안내를 제공합니다.\n- `expandText`는 접힌 상태의 펼치기 버튼 텍스트입니다.\n        "}},controls:{disable:!0}}},v={render:()=>{const i=({children:n,...l})=>e.jsx("div",{...l,children:n}),s=({children:n,...l})=>e.jsx("div",{...l,children:n}),o=({children:n,...l})=>e.jsx("div",{...l,children:n}),p=({children:n,...l})=>e.jsx("div",{...l,children:n}),r=({children:n,...l})=>e.jsx("div",{...l,children:n}),t=({children:n,...l})=>e.jsx("div",{...l,children:n}),a=[{text:"서비스 이용 가이드 PDF",href:"#",target:"_blank"},{text:"자주 묻는 질문 바로가기",href:"#"},{text:"온라인 상담 신청",href:"#",target:"_blank"}];return e.jsx("div",{style:{padding:"24px"},children:e.jsxs(d,{children:[e.jsx(i,{children:"도움말"}),e.jsxs(s,{srOnlyTitle:"도움말 패널",children:[e.jsx(p,{title:"관련 자료",description:"도움이 될 만한 자료 및 링크를 안내합니다."}),e.jsx(r,{children:e.jsx(t,{links:a,iconPosition:"right"})}),e.jsx(o,{})]})]})})},name:"링크 목록 구성",parameters:{docs:{description:{story:"\n**링크 목록(`HelpLinkList`)** 구성입니다. `links` 배열로 도움말 관련 외부 링크를 제공합니다.\n\n| prop | type | 설명 |\n|---|---|---|\n| `links` | `{ text, href, target?, icon? }[]` | 링크 목록 데이터 |\n| `iconPosition` | `'left' \\| 'right'` | 아이콘 위치 (기본값: `'right'`) |\n        "}},controls:{disable:!0}}},u={render:()=>{const i=({children:r,...t})=>e.jsx("div",{...t,children:r}),s=({children:r,...t})=>e.jsx("div",{...t,children:r}),o=({children:r,...t})=>e.jsx("div",{...t,children:r}),p=({children:r,...t})=>e.jsx("div",{...t,children:r});return e.jsxs("div",{style:{padding:"24px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx("button",{onClick:panelOpen=!0,style:{padding:"8px 16px",background:"#0066cc",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer"},children:"외부에서 열기"}),e.jsx("button",{onClick:panelOpen=!1,style:{padding:"8px 16px",background:"#e0e0e0",color:"#333",border:"none",borderRadius:"4px",cursor:"pointer"},children:"외부에서 닫기"}),e.jsxs("span",{style:{fontSize:"13px",color:"#555"},children:["패널 상태: ",panelOpen?"열림":"닫힘"]})]}),e.jsxs(d,{"v-modelisOpen":panelOpen,children:[e.jsx(i,{children:"도움말"}),e.jsxs(s,{srOnlyTitle:"도움말 패널",children:[e.jsx(p,{title:"제어 모드 예시",description:"외부 버튼 또는 트리거를 통해 패널 열림 상태를 제어할 수 있습니다."}),e.jsx(o,{})]})]})]})},name:"제어 모드 (v-model)",parameters:{docs:{description:{story:`
**제어 모드(Controlled)** 예시입니다. \`v-model:isOpen\`을 사용하면 외부에서 패널 상태를 직접 읽고 쓸 수 있습니다.

- 패널 외부 클릭·Escape 키로 닫힐 때도 \`update:isOpen\` 이벤트를 통해 상태가 동기화됩니다.
- 외부 버튼(예: 온보딩 흐름)에서 패널을 제어해야 할 때 사용합니다.
        `}},controls:{disable:!0}}};var g,P,y;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const HelpPanelTrigger = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HelpPanelContent = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HelpPanelClose = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HelpSection = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    return <div style={{
      padding: '24px'
    }}>
        <HelpPanel>
          {/* vue-slot */}
            <HelpPanelTrigger>도움말 열기</HelpPanelTrigger>
          
          <HelpPanelContent srOnlyTitle="도움말 패널">
            <HelpSection title="서비스 이용 안내" description="서비스 이용 중 궁금한 점을 확인하세요." />
            <HelpPanelClose />
          </HelpPanelContent>
        </HelpPanel>
      </div>;
  },
  name: '기본 (Default)',
  parameters: {
    docs: {
      description: {
        story: \`
**가장 기본적인 HelpPanel** 구성입니다.
트리거 버튼 클릭 시 우측에서 패널이 슬라이드되어 나타납니다.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(y=(P=c.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var m,j,C;H.parameters={...H.parameters,docs:{...(m=H.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const HelpPanelTrigger = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HelpPanelContent = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HelpPanelClose = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HelpSection = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    return <div style={{
      padding: '24px'
    }}>
        <HelpPanel defaultOpen={true}>
          {/* vue-slot */}
            <HelpPanelTrigger>도움말</HelpPanelTrigger>
          
          <HelpPanelContent srOnlyTitle="도움말 패널">
            <HelpSection title="처음 오셨나요?" description="서비스의 주요 기능을 소개합니다. 아래 내용을 확인해 보세요." />
            <HelpPanelClose />
          </HelpPanelContent>
        </HelpPanel>
      </div>;
  },
  name: '초기 열림 상태',
  parameters: {
    docs: {
      description: {
        story: \`
**페이지 최초 진입 시 패널이 열린 상태**입니다. \\\`defaultOpen="true"\\\`를 설정하면 비제어 모드에서 초기 열림 상태로 렌더링됩니다.
신규 사용자 온보딩 또는 중요 안내 시에 활용할 수 있습니다.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(C=(j=H.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var f,b,T;x.parameters={...x.parameters,docs:{...(f=x.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const HelpPanelTrigger = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HelpPanelContent = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HelpPanelClose = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HelpPanelAction = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HelpSection = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HelpServiceGroup = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HelpRelatedService = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    return <div style={{
      padding: '24px'
    }}>
        <HelpPanel>
          {/* vue-slot */}
            <HelpPanelTrigger>도움말</HelpPanelTrigger>
          
          <HelpPanelContent srOnlyTitle="도움말 패널">
            <HelpSection title="자주 묻는 질문" description="서비스 이용 중 자주 묻는 질문을 확인하세요." />
            <HelpServiceGroup title="관련 서비스">
              <HelpRelatedService>공지사항 바로가기</HelpRelatedService>
              <HelpRelatedService>사용 가이드 다운로드</HelpRelatedService>
            </HelpServiceGroup>
            <HelpPanelAction>
              <button style={{
              width: '100%',
              padding: '10px',
              background: '#0066cc',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}>
                1:1 문의하기
              </button>
            </HelpPanelAction>
            <HelpPanelClose />
          </HelpPanelContent>
        </HelpPanel>
      </div>;
  },
  name: '섹션 + 액션 구성',
  parameters: {
    docs: {
      description: {
        story: \`
**섹션·관련 서비스·액션 버튼**을 모두 포함한 풀 구성입니다.
실제 도움말 패널에서 가장 많이 사용하는 레이아웃 패턴입니다.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(T=(b=x.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var O,S,k;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const HelpPanelTrigger = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HelpPanelContent = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HelpPanelClose = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HelpSection = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HelpContentArea = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HelpCoachProcess = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HelpCoachTask = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    return <div style={{
      padding: '24px'
    }}>
        <HelpPanel>
          {/* vue-slot */}
            <HelpPanelTrigger>도움말</HelpPanelTrigger>
          
          <HelpPanelContent srOnlyTitle="도움말 패널">
            <HelpSection title="서비스 신청 방법" description="아래 단계를 순서대로 따라 하시면 쉽게 신청할 수 있습니다." />
            <HelpContentArea>
              <HelpCoachProcess>
                <HelpCoachTask title="1단계: 회원 정보 확인" expandText="단계 펼치기" steps={['본인 인증을 진행하세요.', '기관 정보를 확인하세요.']} />
                <HelpCoachTask title="2단계: 신청서 작성" isCurrent={true} expandText="단계 펼치기" steps={['신청 유형을 선택하세요.', '필수 항목을 모두 입력하세요.', '첨부 서류를 업로드하세요.']} />
                <HelpCoachTask title="3단계: 제출 및 접수 확인" expandText="단계 펼치기" steps={['작성 내용을 최종 확인하세요.', '제출 버튼을 클릭하세요.', '접수 번호를 저장해 두세요.']} />
              </HelpCoachProcess>
            </HelpContentArea>
            <HelpPanelClose />
          </HelpPanelContent>
        </HelpPanel>
      </div>;
  },
  name: '단계별 가이드',
  parameters: {
    docs: {
      description: {
        story: \`
**단계별 가이드(CoachProcess)** 구성입니다. \\\`HelpCoachProcess\\\` 안에 \\\`HelpCoachTask\\\`를 나열하면 순서형 가이드를 제공할 수 있습니다.

- \\\`isCurrent\\\` prop으로 현재 진행 중인 단계를 표시합니다.
- \\\`steps\\\` 배열로 각 단계의 세부 안내를 제공합니다.
- \\\`expandText\\\`는 접힌 상태의 펼치기 버튼 텍스트입니다.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(k=(S=h.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var R,L,A;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const HelpPanelTrigger = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HelpPanelContent = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HelpPanelClose = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HelpSection = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HelpContentArea = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HelpLinkList = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const links = [{
      text: '서비스 이용 가이드 PDF',
      href: '#',
      target: '_blank'
    }, {
      text: '자주 묻는 질문 바로가기',
      href: '#'
    }, {
      text: '온라인 상담 신청',
      href: '#',
      target: '_blank'
    }];
    return <div style={{
      padding: '24px'
    }}>
        <HelpPanel>
          {/* vue-slot */}
            <HelpPanelTrigger>도움말</HelpPanelTrigger>
          
          <HelpPanelContent srOnlyTitle="도움말 패널">
            <HelpSection title="관련 자료" description="도움이 될 만한 자료 및 링크를 안내합니다." />
            <HelpContentArea>
              <HelpLinkList links={links} iconPosition="right" />
            </HelpContentArea>
            <HelpPanelClose />
          </HelpPanelContent>
        </HelpPanel>
      </div>;
  },
  name: '링크 목록 구성',
  parameters: {
    docs: {
      description: {
        story: \`
**링크 목록(\\\`HelpLinkList\\\`)** 구성입니다. \\\`links\\\` 배열로 도움말 관련 외부 링크를 제공합니다.

| prop | type | 설명 |
|---|---|---|
| \\\`links\\\` | \\\`{ text, href, target?, icon? }[]\\\` | 링크 목록 데이터 |
| \\\`iconPosition\\\` | \\\`'left' \\\\| 'right'\\\` | 아이콘 위치 (기본값: \\\`'right'\\\`) |
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(A=(L=v.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var D,_,E;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const HelpPanelTrigger = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HelpPanelContent = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HelpPanelClose = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HelpSection = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    return <div style={{
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <div style={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center'
      }}>
          <button onClick={panelOpen = true} style={{
          padding: '8px 16px',
          background: '#0066cc',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
            외부에서 열기
          </button>
          <button onClick={panelOpen = false} style={{
          padding: '8px 16px',
          background: '#e0e0e0',
          color: '#333',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
            외부에서 닫기
          </button>
          <span style={{
          fontSize: '13px',
          color: '#555'
        }}>패널 상태: {panelOpen ? '열림' : '닫힘'}</span>
        </div>
        <HelpPanel v-modelisOpen={panelOpen}>
          {/* vue-slot */}
            <HelpPanelTrigger>도움말</HelpPanelTrigger>
          
          <HelpPanelContent srOnlyTitle="도움말 패널">
            <HelpSection title="제어 모드 예시" description="외부 버튼 또는 트리거를 통해 패널 열림 상태를 제어할 수 있습니다." />
            <HelpPanelClose />
          </HelpPanelContent>
        </HelpPanel>
      </div>;
  },
  name: '제어 모드 (v-model)',
  parameters: {
    docs: {
      description: {
        story: \`
**제어 모드(Controlled)** 예시입니다. \\\`v-model:isOpen\\\`을 사용하면 외부에서 패널 상태를 직접 읽고 쓸 수 있습니다.

- 패널 외부 클릭·Escape 키로 닫힐 때도 \\\`update:isOpen\\\` 이벤트를 통해 상태가 동기화됩니다.
- 외부 버튼(예: 온보딩 흐름)에서 패널을 제어해야 할 때 사용합니다.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const F=["Default","InitiallyOpen","WithSections","WithCoachProcess","WithLinkList","Controlled"];export{u as Controlled,c as Default,H as InitiallyOpen,h as WithCoachProcess,v as WithLinkList,x as WithSections,F as __namedExportsOrder,z as default};
