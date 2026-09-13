import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{d as F}from"./reference-types-4ftiVeOu.js";import{r as D}from"./index-BxXVWNx3.js";import{c as x}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";function y({buttonText:s="드롭다운",buttonClassName:p,items:d=[],children:t,className:i}){const[r,e]=D.useState(!1),a=D.useRef(null);return D.useEffect(()=>{const o=b=>{a.current&&!a.current.contains(b.target)&&e(!1)};return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[]),n.jsxs("div",{ref:a,className:x("relative inline-block",i),children:[n.jsxs("button",{type:"button","aria-haspopup":"menu","aria-expanded":r,onClick:()=>e(o=>!o),onKeyDown:o=>{o.key==="Escape"&&e(!1),o.key==="ArrowDown"&&(o.preventDefault(),e(!0))},className:x(p?void 0:"inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md border border-krds-gray-20 bg-krds-gray-0 text-krds-gray-90 hover:bg-krds-gray-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-krds-primary-50 transition-colors",p),children:[s,n.jsx("span",{"aria-hidden":"true",style:{fontSize:10,transition:"transform 0.15s",transform:r?"rotate(180deg)":"none"},children:"▼"})]}),r&&n.jsx("div",{role:"menu","aria-label":s,className:"absolute left-0 top-full z-50 mt-1 min-w-[140px] rounded-lg border border-krds-gray-10 bg-krds-gray-0 py-1 shadow-lg",style:{boxShadow:"0 8px 24px rgba(0,0,0,0.12)"},children:t||d.map((o,b)=>n.jsxs("button",{role:"menuitem",type:"button",disabled:o.disabled,"aria-current":o.isActive?!0:void 0,onClick:()=>{var v;o.disabled||((v=o.onClick)==null||v.call(o),e(!1))},className:x("flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors",o.disabled?"cursor-not-allowed text-krds-gray-30":"cursor-pointer text-krds-gray-90 hover:bg-krds-gray-5"),children:[n.jsx("span",{className:"flex-1",children:o.label}),o.isActive&&n.jsx("span",{className:"sr-only",children:"선택됨"})]},b))})]})}y.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{buttonText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'드롭다운'",computed:!1}},buttonClassName:{required:!1,tsType:{name:"string"},description:""},items:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownMenuItem"}],raw:"DropdownMenuItem[]"},description:"",defaultValue:{value:"[]",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const R=F([{library:"Ark UI",component:"Menu",url:"https://ark-ui.com/docs/components/menu",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Bootstrap",component:"Dropdowns",url:"https://getbootstrap.com/docs/5.3/components/dropdowns/",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"Dropdowns",url:"https://flowbite.com/docs/components/dropdowns/",usedFor:["comparison"],relation:"compared"},{library:"daisyUI",component:"Dropdown",url:"https://daisyui.com/components/dropdown/",usedFor:["comparison"],relation:"compared"},{library:"Ant Design",component:"Dropdown",url:"https://ant.design/components/dropdown/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Menu",url:"https://www.chakra-ui.com/docs/components/menu",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Menu",url:"https://quasar.dev/vue-components/menu",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Menu",url:"https://base-ui.com/react/components/menu",usedFor:["comparison"],relation:"compared"}]),U={title:"Molecules/Navigation/DropdownMenu",component:y,tags:["autodocs","navigation","ref:krds","ref:chakra-ui","ref:shadcn-ui","ref:ark-ui","ref:daisy-ui","ref:ant-design","ref:flowbite","ref:vuetify","ref:mui","ref:bootstrap","ref:quasar","ref:base-ui"],parameters:{references:R,canvasPadding:"40px 80px 300px",docs:{story:{height:"380px"},description:{component:'\n## DropdownMenu\n\n트리거 버튼 클릭 시 **메뉴 목록을 팝업으로 표시**하는 컴포넌트입니다.\n`Dropdown → DropdownList → DropdownItem` Compound Component 구조로 구성됩니다.\n\n---\n\n### 구성 요소\n\n| 컴포넌트 | 역할 |\n|---|---|\n| `Dropdown` | 트리거 버튼 + 팝업 컨테이너. `v-model:isOpen`으로 열림 상태 제어 가능 |\n| `DropdownTopSection` | 메뉴 상단 구분 영역 (`<div class="drop-top">`). 사용자 이름 등 헤더 정보 표시 |\n| `DropdownList` | 메뉴 목록 래퍼 (`<ul>`) |\n| `DropdownItem` | 개별 메뉴 항목 (`<li><button>`). `isActive: true`이면 스크린리더에 "선택됨" 읽힘 (시각 변화 없음) |\n| `DropdownBottomSection` | 메뉴 하단 구분 영역 (`<div class="drop-bottom">`). 로그아웃 등 분리된 액션 배치 |\n\n---\n\n### 사용 지침\n\n- **`buttonText`** prop으로 트리거 버튼 텍스트를 지정합니다.\n- **`button` 슬롯**으로 트리거 버튼 내용을 완전히 교체할 수 있습니다.\n- 외부 클릭 시 자동으로 닫힙니다.\n- **`buttonClassName`** prop으로 트리거 버튼의 CSS 클래스를 교체할 수 있습니다.\n- **`DropdownTopSection`** / **`DropdownBottomSection`**으로 메뉴를 시각적으로 구분할 수 있습니다.\n\n---\n\n### 접근성(A11y) 가이드\n\n| 체크 | 항목 |\n|---|---|\n| ✅ | 트리거 버튼에 `aria-expanded`가 자동으로 선언됩니다. |\n| ✅ | `DropdownItem`의 `isActive: true`이면 `sr-only` span이 삽입되어 스크린리더에 "선택됨"이 읽힙니다. 시각적 강조는 없습니다. |\n| ⚠️ | 메뉴 항목에 파괴적 액션(삭제 등)이 포함될 경우 별도 확인 모달과 연계하세요. |\n        '}}},argTypes:{buttonText:{description:"트리거 버튼에 표시되는 텍스트입니다. `button` 슬롯을 사용하면 무시됩니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'드롭다운'"},category:"Content"}},items:{description:"메뉴 항목 배열입니다. 각 항목은 `{ label, isActive? }` 형태입니다.",control:"object",table:{type:{summary:"{ label: string; isActive?: boolean }[]"},defaultValue:{summary:"[]"},category:"Content"}},buttonClassName:{description:"트리거 버튼의 CSS 클래스입니다. 기본값은 KRDS 소형 텍스트 드롭 버튼입니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'krds-btn small text drop-btn'"},category:"Appearance"}}},args:{buttonText:"더보기",buttonClassName:"krds-btn small text drop-btn",items:[{label:"수정"},{label:"복제"},{label:"삭제"}]},render:s=>n.jsx(y,{...s,children:s.children??s.label??s.text??void 0})},c={name:"기본 (Default)",args:{buttonText:"더보기",items:[{label:"수정"},{label:"복제"},{label:"삭제"}]},parameters:{docs:{description:{story:'**가장 일반적인 컨텍스트 메뉴 패턴**입니다. 목록 행의 "더보기" 버튼에 연결하여 수정·복제·삭제 액션을 제공합니다.'}}}},l={render:()=>{const s=({children:r,...e})=>n.jsx("div",{...e,children:r}),p=({children:r,...e})=>n.jsx("div",{...e,children:r}),d=({children:r,...e})=>n.jsx("div",{...e,children:r}),t=({children:r,...e})=>n.jsx("div",{...e,children:r}),i=({children:r,...e})=>n.jsx("div",{...e,children:r});return n.jsxs(s,{buttonText:"사용자 메뉴",children:[n.jsx(p,{children:"홍길동님"}),n.jsxs(d,{children:[n.jsx(t,{children:"내 정보"}),n.jsx(t,{children:"설정"}),n.jsx(t,{children:"알림"})]}),n.jsx(i,{children:n.jsx(d,{children:n.jsx(t,{children:"로그아웃"})})})]})},name:"섹션 구분 (With Sections)",parameters:{docs:{description:{story:"\n**`DropdownTopSection`과 `DropdownBottomSection`으로 메뉴를 시각적으로 구분**하는 패턴입니다.\n헤더 영역에 사용자 이름 등 컨텍스트 정보를 표시하고, 하단 영역에 로그아웃처럼 분리가 필요한 액션을 배치합니다.\n        "}},controls:{disable:!0}}},m={name:"선택된 항목 포함 (With Active Item)",args:{buttonText:"정렬",items:[{label:"최신순",isActive:!0},{label:"등록순"},{label:"이름순"}]},parameters:{docs:{description:{story:'\n**현재 선택된 항목을 스크린리더에 알리는** 패턴입니다.\n`DropdownItem`의 `isActive: true` 설정 시 `<span class="sr-only">선택됨</span>`이 삽입되어 스크린리더에 "선택됨"이 읽힙니다.\n시각적 강조는 없으며 **접근성(A11y) 전용** prop입니다.\n        '}}}},u={render:()=>{const s=({children:t,...i})=>n.jsx("div",{...i,children:t}),p=({children:t,...i})=>n.jsx("div",{...i,children:t}),d=({children:t,...i})=>n.jsx("div",{...i,children:t});return n.jsxs(s,{children:["⚙️ 설정",n.jsxs(p,{children:[n.jsx(d,{children:"프로필 수정"}),n.jsx(d,{children:"알림 설정"}),n.jsx(d,{children:"로그아웃"})]})]})},name:"커스텀 트리거 (Custom Trigger)",parameters:{docs:{description:{story:"\n**`button` 슬롯으로 트리거 버튼 내용을 완전히 교체**합니다.\n기본 `buttonText` prop 대신 아이콘·이미지·커스텀 마크업을 트리거로 사용할 때 활용합니다.\n        "}},controls:{disable:!0}}},w={render:()=>{const s=({children:e,...a})=>n.jsx("div",{...a,children:e}),p=({children:e,...a})=>n.jsx("div",{...a,children:e}),d=({children:e,...a})=>n.jsx("div",{...a,children:e}),r=e=>{"".value=e,(!1).value=!1};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"16px"},children:[n.jsxs("p",{style:{fontSize:"13px",color:"#555"},children:["선택된 항목: ",n.jsx("strong",{style:{color:"#1B1B19"},children:"(없음)"})]}),n.jsx(s,{"v-modelisOpen":!1,buttonText:"작업 선택",children:n.jsxs(p,{children:[n.jsx(d,{onClick:r("수정"),children:"수정"}),n.jsx(d,{onClick:r("복제"),children:"복제"}),n.jsx(d,{onClick:r("삭제"),children:"삭제"})]})})]})},name:"외부 상태 제어 (Controlled)",parameters:{docs:{description:{story:`
**\`v-model:isOpen\`으로 열림 상태를 외부에서 제어**하는 패턴입니다.
항목 선택 시 선택값을 외부 상태에 반영하고 드롭다운을 닫습니다.
        `}},controls:{disable:!0}}};var h,f,g;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '기본 (Default)',
  args: {
    buttonText: '더보기',
    items: [{
      label: '수정'
    }, {
      label: '복제'
    }, {
      label: '삭제'
    }]
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`**가장 일반적인 컨텍스트 메뉴 패턴**입니다. 목록 행의 "더보기" 버튼에 연결하여 수정·복제·삭제 액션을 제공합니다.\`
      }
    }
  }
}`,...(g=(f=c.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var j,I,S;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const Dropdown = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const DropdownTopSection = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const DropdownList = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const DropdownItem = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const DropdownBottomSection = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    return <Dropdown buttonText="사용자 메뉴">
        <DropdownTopSection>홍길동님</DropdownTopSection>
        <DropdownList>
          <DropdownItem>내 정보</DropdownItem>
          <DropdownItem>설정</DropdownItem>
          <DropdownItem>알림</DropdownItem>
        </DropdownList>
        <DropdownBottomSection>
          <DropdownList>
            <DropdownItem>로그아웃</DropdownItem>
          </DropdownList>
        </DropdownBottomSection>
      </Dropdown>;
  },
  name: '섹션 구분 (With Sections)',
  parameters: {
    docs: {
      description: {
        story: \`
**\\\`DropdownTopSection\\\`과 \\\`DropdownBottomSection\\\`으로 메뉴를 시각적으로 구분**하는 패턴입니다.
헤더 영역에 사용자 이름 등 컨텍스트 정보를 표시하고, 하단 영역에 로그아웃처럼 분리가 필요한 액션을 배치합니다.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(S=(I=l.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var k,T,C;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '선택된 항목 포함 (With Active Item)',
  args: {
    buttonText: '정렬',
    items: [{
      label: '최신순',
      isActive: true
    }, {
      label: '등록순'
    }, {
      label: '이름순'
    }]
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**현재 선택된 항목을 스크린리더에 알리는** 패턴입니다.
\\\`DropdownItem\\\`의 \\\`isActive: true\\\` 설정 시 \\\`<span class="sr-only">선택됨</span>\\\`이 삽입되어 스크린리더에 "선택됨"이 읽힙니다.
시각적 강조는 없으며 **접근성(A11y) 전용** prop입니다.
        \`
      }
    }
  }
}`,...(C=(T=m.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var A,L,B;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const Dropdown = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const DropdownList = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const DropdownItem = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    return <Dropdown>
        {/* vue-slot */}
          ⚙️ 설정
        
        <DropdownList>
          <DropdownItem>프로필 수정</DropdownItem>
          <DropdownItem>알림 설정</DropdownItem>
          <DropdownItem>로그아웃</DropdownItem>
        </DropdownList>
      </Dropdown>;
  },
  name: '커스텀 트리거 (Custom Trigger)',
  parameters: {
    docs: {
      description: {
        story: \`
**\\\`button\\\` 슬롯으로 트리거 버튼 내용을 완전히 교체**합니다.
기본 \\\`buttonText\\\` prop 대신 아이콘·이미지·커스텀 마크업을 트리거로 사용할 때 활용합니다.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(B=(L=u.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var N,O,M;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const Dropdown = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const DropdownList = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const DropdownItem = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const isOpen = false;
    const selected = '';
    const select = label => {
      selected.value = label;
      isOpen.value = false;
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      padding: '16px'
    }}>
        <p style={{
        fontSize: '13px',
        color: '#555'
      }}>
          선택된 항목: <strong style={{
          color: '#1B1B19'
        }}>{selected || '(없음)'}</strong>
        </p>
        <Dropdown v-modelisOpen={isOpen} buttonText="작업 선택">
          <DropdownList>
            <DropdownItem onClick={select('수정')}>수정</DropdownItem>
            <DropdownItem onClick={select('복제')}>복제</DropdownItem>
            <DropdownItem onClick={select('삭제')}>삭제</DropdownItem>
          </DropdownList>
        </Dropdown>
      </div>;
  },
  name: '외부 상태 제어 (Controlled)',
  parameters: {
    docs: {
      description: {
        story: \`
**\\\`v-model:isOpen\\\`으로 열림 상태를 외부에서 제어**하는 패턴입니다.
항목 선택 시 선택값을 외부 상태에 반영하고 드롭다운을 닫습니다.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(M=(O=w.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};const _=["Default","WithSections","WithActiveItem","CustomTrigger","Controlled"];export{w as Controlled,u as CustomTrigger,c as Default,m as WithActiveItem,l as WithSections,_ as __namedExportsOrder,U as default};
