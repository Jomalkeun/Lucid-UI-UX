import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as _}from"./reference-types-4ftiVeOu.js";import{R as D,r as s}from"./index-BxXVWNx3.js";import{c as d}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";function O(r){const[g,i]=r.split(" "),n={position:"absolute",zIndex:9999};return g==="top"?n.bottom="calc(100% + 8px)":n.top="calc(100% + 8px)",i==="left"?n.left=0:i==="right"?n.right=0:(n.left="50%",n.transform="translateX(-50%)"),n}const t=D.forwardRef(({className:r,label:g="도움말",title:i,content:n,linkHref:v,linkLabel:M="더 알아보기",position:q="bottom right",children:k,...F},a)=>{const[l,y]=s.useState(!1),b=s.useRef(null),p=s.useId();s.useEffect(()=>{const o=h=>{b.current&&!b.current.contains(h.target)&&y(!1)};return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[]),s.useEffect(()=>{if(!l)return;const o=h=>{h.key==="Escape"&&y(!1)};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[l]);const P=O(q);return e.jsxs("div",{ref:o=>{b.current=o,typeof a=="function"?a(o):a&&(a.current=o)},className:d("relative inline-block",r),...F,children:[e.jsx("button",{type:"button","aria-label":g,"aria-expanded":l,"aria-controls":p,onClick:()=>y(o=>!o),className:d("inline-flex items-center justify-center","w-5 h-5 rounded-full","text-krds-body-xs font-bold leading-none","border border-krds-gray-30 text-krds-gray-60","bg-krds-white hover:bg-krds-gray-5 hover:border-krds-primary-50 hover:text-krds-primary-50","transition-colors duration-150 cursor-pointer",l&&"border-krds-primary-50 text-krds-primary-50 bg-krds-primary-5"),children:"?"}),l&&e.jsxs("div",{id:p,role:"dialog","aria-modal":"false","aria-labelledby":i?`${p}-title`:void 0,style:P,className:d("w-72 rounded-xl","bg-krds-white border border-krds-gray-20","shadow-[0_8px_32px_rgba(0,0,0,0.12)]","p-4"),children:[i&&e.jsx("p",{id:`${p}-title`,className:"m-0 mb-2 text-krds-title-xs text-krds-gray-90 font-bold",children:i}),k?e.jsx("div",{className:"text-krds-body-sm text-krds-gray-70 leading-relaxed",children:k}):n?e.jsx("p",{className:"m-0 text-krds-body-sm text-krds-gray-70 leading-relaxed",children:n}):null,v&&e.jsxs("a",{href:v,className:d("mt-3 inline-flex items-center gap-1","text-krds-body-xs text-krds-primary-50 font-medium","hover:underline"),children:[M,e.jsx("span",{"aria-hidden":"true",children:"→"})]})]})]})});t.displayName="ContextualHelp";t.__docgenInfo={description:"",methods:[],displayName:"ContextualHelp",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'도움말'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},content:{required:!1,tsType:{name:"string"},description:""},linkHref:{required:!1,tsType:{name:"string"},description:""},linkLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'더 알아보기'",computed:!1}},position:{required:!1,tsType:{name:"union",raw:`| 'top left'
| 'top center'
| 'top right'
| 'bottom left'
| 'bottom center'
| 'bottom right'`,elements:[{name:"literal",value:"'top left'"},{name:"literal",value:"'top center'"},{name:"literal",value:"'top right'"},{name:"literal",value:"'bottom left'"},{name:"literal",value:"'bottom center'"},{name:"literal",value:"'bottom right'"}]},description:"",defaultValue:{value:"'bottom right'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const B=_([{library:"KRDS",component:"ContextualHelp",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-contextualhelp--docs",usedFor:["design","behavior","api"],relation:"adapted"}]),G={title:"Molecules/Overlay/ContextualHelp",component:t,tags:["autodocs","overlay","ref:krds"],parameters:{references:B,canvasPadding:"160px 180px",docs:{description:{component:`
## ContextualHelp

UI 요소 옆에 배치하여 **물음표 버튼 클릭 시 팝오버로 상세 도움말을 제공**하는 컴포넌트입니다.
제목·본문·선택적 링크로 구성된 팝오버가 버튼 위치를 기준으로 6가지 방향에 표시됩니다.

---

### 언제 사용하나요?

| 상황 | 권장 |
|---|---|
| 폼 레이블 옆 용어 설명 | **ContextualHelp** ✅ |
| 간단한 마우스오버 툴팁 | \`Tooltip\` |
| 단계별 기능 안내 | \`CoachMark\` |

---

### 사용 지침

- **title** 은 팝오버의 제목 영역입니다. 15자 이내로 간결하게 작성하세요.
- **content** 는 상세 설명입니다. 2~3문장 이내로 작성을 권장합니다. \`default\` 슬롯으로 HTML을 직접 넣을 수도 있습니다.
- **linkHref** + **linkLabel** 을 제공하면 팝오버 하단에 "더 알아보기" 링크가 추가됩니다.
- **position** 으로 팝오버가 열리는 방향을 제어합니다. 화면 가장자리 요소에 맞게 조정하세요.

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | 트리거 버튼에 \`aria-label\`이 자동 설정됩니다. |
| ✅ | 팝오버는 \`role="dialog"\`로 선언되어 스크린리더가 인식합니다. |
| ✅ | Escape 키로 팝오버를 닫을 수 있습니다. |
| ✅ | 팝오버 외부 클릭 시 자동으로 닫힙니다. |
        `},story:{height:"420px"}}},argTypes:{label:{description:"트리거 버튼의 접근성 레이블입니다. 화면에는 보이지 않지만 스크린리더에서 읽힙니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"(없음)"},category:"Content"}},title:{description:"팝오버 제목입니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"(없음)"},category:"Content"}},content:{description:"팝오버 본문 설명입니다. `default` 슬롯을 사용하면 이 prop을 대신해 HTML을 직접 넣을 수 있습니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"(없음)"},category:"Content"}},linkHref:{description:"팝오버 하단 링크 URL입니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"(없음)"},category:"Content"}},linkLabel:{description:"팝오버 하단 링크 텍스트입니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"더 알아보기"},category:"Content"}},position:{description:"팝오버가 열리는 방향입니다.",control:{type:"select"},options:["top left","top center","top right","bottom left","bottom center","bottom right"],table:{type:{summary:"'top left' | 'top center' | 'top right' | 'bottom left' | 'bottom center' | 'bottom right'"},defaultValue:{summary:"'bottom right'"},category:"Appearance"}}},args:{label:"도움말",title:"채널 코드란?",content:"서비스 채널을 구분하는 고유 코드입니다. 관리자로부터 발급받은 코드를 입력해 주세요.",position:"bottom right"},render:r=>e.jsx(t,{...r,children:r.children??r.label??r.text??void 0})},c={name:"기본 — 팝오버만",parameters:{docs:{description:{story:`
**가장 기본적인 ContextualHelp** 상태입니다.
트리거 버튼 클릭 시 제목과 본문만 있는 팝오버가 표시됩니다.
        `}}}},m={name:"링크 포함 (With Link)",args:{title:"채널 코드란?",content:"서비스 채널을 구분하는 고유 코드입니다.",linkHref:"/help/channel-code",linkLabel:"채널 코드 발급 안내 보기"},parameters:{docs:{description:{story:`
**팝오버 하단에 링크를 추가**한 상태입니다.
도움말만으로 부족할 때 외부 가이드 문서나 FAQ 페이지로 연결하세요.
        `}}}},x={render:()=>e.jsxs(t,{label:"슬롯 도움말",title:"슬롯 사용 예시",position:"bottom right",children:[e.jsxs("p",{style:{margin:"0 0 8px"},children:["본문을 ",e.jsx("strong",{children:"HTML 슬롯"}),"으로 직접 넣을 수 있습니다."]}),e.jsxs("ul",{style:{margin:"0",paddingLeft:"16px"},children:[e.jsx("li",{children:"항목 1: 첫 번째 안내"}),e.jsx("li",{children:"항목 2: 두 번째 안내"})]})]}),name:"슬롯 사용 (With Slot)",parameters:{docs:{description:{story:"\n`content` prop 대신 **`default` 슬롯**을 사용하면 팝오버 본문에 HTML을 자유롭게 넣을 수 있습니다.\n목록, 강조 텍스트 등 리치 콘텐츠가 필요할 때 활용하세요.\n        "}},controls:{disable:!0}}},u={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"48px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"13px"},children:["top left ",e.jsx(t,{title:"top left",content:"팝오버 예시입니다.",position:"top left"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"13px"},children:["top center ",e.jsx(t,{title:"top center",content:"팝오버 예시입니다.",position:"top center"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"13px"},children:["top right ",e.jsx(t,{title:"top right",content:"팝오버 예시입니다.",position:"top right"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"13px"},children:["bottom left ",e.jsx(t,{title:"bottom left",content:"팝오버 예시입니다.",position:"bottom left"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"13px"},children:["bottom center ",e.jsx(t,{title:"bottom center",content:"팝오버 예시입니다.",position:"bottom center"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"13px"},children:["bottom right ",e.jsx(t,{title:"bottom right",content:"팝오버 예시입니다.",position:"bottom right"})]})]}),name:"전체 위치 비교 (All Positions)",parameters:{docs:{description:{story:"**6가지 팝오버 위치**를 한 화면에서 비교합니다. 요소의 화면 위치에 맞게 선택하세요."},story:{height:"520px"}},controls:{disable:!0}}},f={render:()=>e.jsxs("div",{style:{padding:"24px",maxWidth:"400px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginBottom:"6px"},children:[e.jsx("label",{style:{fontSize:"14px",fontWeight:"500",color:"#1a1a1a"},children:"채널 코드"}),e.jsx(t,{label:"채널 코드 도움말",title:"채널 코드란?",content:"서비스 채널을 구분하는 고유 코드입니다. 관리자로부터 발급받은 코드를 입력해 주세요.",linkHref:"/help/channel",linkLabel:"자세히 보기",position:"bottom right"})]}),e.jsx("input",{type:"text",placeholder:"채널 코드를 입력하세요",style:{width:"100%",padding:"8px 12px",border:"1px solid #ccc",borderRadius:"4px",fontSize:"14px",boxSizing:"border-box"}})]}),name:"폼 레이블과 조합",parameters:{docs:{description:{story:`
**폼 레이블 옆에 ContextualHelp를 배치**하는 실무 예시입니다.
사용자가 레이블 의미를 이해하기 어려울 때 물음표 버튼으로 추가 설명을 제공하세요.
        `}},controls:{disable:!0}}};var j,H,S;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '기본 — 팝오버만',
  parameters: {
    docs: {
      description: {
        story: \`
**가장 기본적인 ContextualHelp** 상태입니다.
트리거 버튼 클릭 시 제목과 본문만 있는 팝오버가 표시됩니다.
        \`
      }
    }
  }
}`,...(S=(H=c.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var C,L,I;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '링크 포함 (With Link)',
  args: {
    title: '채널 코드란?',
    content: '서비스 채널을 구분하는 고유 코드입니다.',
    linkHref: '/help/channel-code',
    linkLabel: '채널 코드 발급 안내 보기'
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**팝오버 하단에 링크를 추가**한 상태입니다.
도움말만으로 부족할 때 외부 가이드 문서나 FAQ 페이지로 연결하세요.
        \`
      }
    }
  }
}`,...(I=(L=m.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var z,w,T;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <ContextualHelp label="슬롯 도움말" title="슬롯 사용 예시" position="bottom right">
        <p style={{
      margin: '0 0 8px'
    }}>본문을 <strong>HTML 슬롯</strong>으로 직접 넣을 수 있습니다.</p>
        <ul style={{
      margin: '0',
      paddingLeft: '16px'
    }}>
          <li>항목 1: 첫 번째 안내</li>
          <li>항목 2: 두 번째 안내</li>
        </ul>
      </ContextualHelp>,
  name: '슬롯 사용 (With Slot)',
  parameters: {
    docs: {
      description: {
        story: \`
\\\`content\\\` prop 대신 **\\\`default\\\` 슬롯**을 사용하면 팝오버 본문에 HTML을 자유롭게 넣을 수 있습니다.
목록, 강조 텍스트 등 리치 콘텐츠가 필요할 때 활용하세요.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(T=(w=x.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var R,W,E;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '48px'
  }}>
        <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '13px'
    }}>
          top left <ContextualHelp title="top left" content="팝오버 예시입니다." position="top left" />
        </div>
        <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '13px'
    }}>
          top center <ContextualHelp title="top center" content="팝오버 예시입니다." position="top center" />
        </div>
        <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '13px'
    }}>
          top right <ContextualHelp title="top right" content="팝오버 예시입니다." position="top right" />
        </div>
        <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '13px'
    }}>
          bottom left <ContextualHelp title="bottom left" content="팝오버 예시입니다." position="bottom left" />
        </div>
        <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '13px'
    }}>
          bottom center <ContextualHelp title="bottom center" content="팝오버 예시입니다." position="bottom center" />
        </div>
        <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '13px'
    }}>
          bottom right <ContextualHelp title="bottom right" content="팝오버 예시입니다." position="bottom right" />
        </div>
      </div>,
  name: '전체 위치 비교 (All Positions)',
  parameters: {
    docs: {
      description: {
        story: \`**6가지 팝오버 위치**를 한 화면에서 비교합니다. 요소의 화면 위치에 맞게 선택하세요.\`
      },
      story: {
        height: '520px'
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(E=(W=u.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var N,A,V;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '24px',
    maxWidth: '400px'
  }}>
        <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      marginBottom: '6px'
    }}>
          <label style={{
        fontSize: '14px',
        fontWeight: '500',
        color: '#1a1a1a'
      }}>채널 코드</label>
          <ContextualHelp label="채널 코드 도움말" title="채널 코드란?" content="서비스 채널을 구분하는 고유 코드입니다. 관리자로부터 발급받은 코드를 입력해 주세요." linkHref="/help/channel" linkLabel="자세히 보기" position="bottom right" />
        </div>
        <input type="text" placeholder="채널 코드를 입력하세요" style={{
      width: '100%',
      padding: '8px 12px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '14px',
      boxSizing: 'border-box'
    }} />
      </div>,
  name: '폼 레이블과 조합',
  parameters: {
    docs: {
      description: {
        story: \`
**폼 레이블 옆에 ContextualHelp를 배치**하는 실무 예시입니다.
사용자가 레이블 의미를 이해하기 어려울 때 물음표 버튼으로 추가 설명을 제공하세요.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(V=(A=f.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};const J=["Default","WithLink","WithSlot","AllPositions","InFormField"];export{u as AllPositions,c as Default,f as InFormField,m as WithLink,x as WithSlot,J as __namedExportsOrder,G as default};
