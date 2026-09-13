import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as Y}from"./reference-types-4ftiVeOu.js";import{R as Q}from"./index-BxXVWNx3.js";import{B as v}from"./button-B_kt0lNs.js";import{D as G,e as J,a as X,b as Z,c as $,g as ee,d as oe,f as ne}from"./dialog-COwhifUF.js";import{c as re}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DtBajwEi.js";import"./index-CkIaN0ex.js";import"./loader-circle-Db56uVXG.js";import"./createLucideIcon-Ct87QT5c.js";import"./index-BIfB_hJr.js";import"./index-Cuo70N6w.js";import"./index-BKM4mA3Z.js";import"./index-v38HoRc1.js";import"./index-DnJVWBh-.js";import"./index-BuIYde5q.js";import"./index-DCvtqWl1.js";import"./index-D5tP6kvT.js";import"./Combination-B_oD-4C3.js";import"./index-D_4yO-tZ.js";import"./x-DsL683-u.js";function b({title:r="확인",description:s="이 작업을 계속하시겠습니까?",confirmLabel:l="확인",cancelLabel:i="취소",triggerLabel:d="모달 열기",size:p="lg",variant:t="default",closeOnEsc:a=!1,closeOnOverlayClick:n=!1,onConfirm:o,onCancel:U,children:W,className:_}){const[K,j]=Q.useState(!1);return e.jsxs(G,{open:K,onOpenChange:j,children:[e.jsx(J,{asChild:!0,children:e.jsx(v,{size:"small",children:d})}),e.jsxs(X,{className:re("relative",t==="full"&&"inset-0 translate-x-0 translate-y-0",_),size:t==="full"?"full":p,variant:t==="bottom"?"bottom":"default",onEscapeKeyDown:f=>{a||f.preventDefault()},onPointerDownOutside:f=>{n||f.preventDefault()},children:[e.jsx(Z,{children:e.jsx($,{children:r})}),e.jsx("div",{className:"flex-1 overflow-y-auto px-6 py-5",children:W??e.jsx(ee,{children:s})}),e.jsxs(oe,{children:[e.jsx(ne,{asChild:!0,children:e.jsx(v,{type:"button",variant:"tertiary",size:"small",onClick:U,children:i})}),e.jsx(v,{type:"button",size:"small",onClick:()=>{o==null||o(),j(!1)},children:l})]})]})]})}b.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'확인'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'이 작업을 계속하시겠습니까?'",computed:!1}},confirmLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'확인'",computed:!1}},cancelLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'취소'",computed:!1}},triggerLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'모달 열기'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'lg'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'full' | 'bottom'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'full'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},closeOnEsc:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},closeOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},usePortal:{required:!1,tsType:{name:"boolean"},description:""},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const te=Y([{library:"U.S. Web Design System",component:"Modal",url:"https://designsystem.digital.gov/components/modal/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"Ark UI",component:"Dialog",url:"https://ark-ui.com/docs/components/dialog",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Radix UI",component:"Dialog",url:"https://www.radix-ui.com/primitives/docs/components/dialog",usedFor:["behavior","accessibility","api"],relation:"primitive"},{library:"KRDS",component:"Modal",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-modal--docs",usedFor:["design","behavior","api"],relation:"adapted"},{library:"Bootstrap",component:"Modal",url:"https://getbootstrap.com/docs/5.3/components/modal/",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"Modal",url:"https://flowbite.com/docs/components/modal/",usedFor:["comparison"],relation:"compared"},{library:"daisyUI",component:"Modal",url:"https://daisyui.com/components/modal/",usedFor:["comparison"],relation:"compared"},{library:"Ant Design",component:"Modal",url:"https://ant.design/components/modal/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Dialog",url:"https://www.chakra-ui.com/docs/components/dialog",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Dialog",url:"https://quasar.dev/vue-components/dialog",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Dialog",url:"https://base-ui.com/react/components/dialog",usedFor:["comparison"],relation:"compared"}]),Be={title:"Organisms/Navigation/Modal",component:b,tags:["autodocs","navigation","ref:krds","ref:chakra-ui","ref:shadcn-ui","ref:ark-ui","ref:daisy-ui","ref:ant-design","ref:flowbite","ref:vuetify","ref:mui","ref:bootstrap","ref:quasar","ref:base-ui","ref:radix-ui","ref:uswds"],parameters:{references:te,docs:{story:{height:"800px"},description:{component:'\n## Modal\n\n**사용자의 즉각적인 주의·결정·입력이 필요한 컨텍스트**를 오버레이로 표시하는 컴포넌트입니다.\n`ModalRoot → ModalTrigger + ModalContent` Compound Component 구조로 구성됩니다.\n\n---\n\n### 구성 요소\n\n| 컴포넌트 | 역할 |\n|---|---|\n| `ModalRoot` | 모달 상태·크기·동작 옵션 관리 |\n| `ModalTrigger` | 클릭 시 모달을 여는 버튼 래퍼 |\n| `ModalContent` | 모달 패널 본체 |\n| `ModalHeader` | 제목 영역. `title` prop 또는 default 슬롯 사용 |\n| `ModalBody` | 본문 영역 |\n| `ModalFooter` | 하단 버튼 영역 |\n| `ModalClose` | 클릭 시 모달을 닫는 래퍼. `asChild: true`이면 내부 요소에 닫기 핸들러 위임 |\n\n---\n\n### size 옵션\n\n| size | 설명 |\n|---|---|\n| `sm` | 소형 확인 다이얼로그 |\n| `md` | 중형 |\n| `lg` (기본) | 대형 |\n\n---\n\n### variant 옵션\n\n| variant | 설명 |\n|---|---|\n| `default` (기본) | 일반 모달 |\n| `full` | 전체 화면 |\n| `bottom` | 하단 시트(Bottom Sheet) |\n\n---\n\n### 접근성(A11y) 가이드\n\n| 체크 | 항목 |\n|---|---|\n| ✅ | `ModalContent`에 `role="dialog"`와 `aria-modal="true"`가 자동 선언됩니다. |\n| ✅ | `closeOnEsc: true` 설정 시 Escape 키로 닫을 수 있습니다. |\n| ✅ | `ModalTrigger`는 `<button>` 으로 렌더링됩니다. |\n| ⚠️ | `ModalHeader`의 `titleId` prop과 `ModalContent`의 `id`를 연결하여 `aria-labelledby`를 명시하는 것을 권장합니다. |\n        '}}},argTypes:{title:{description:"모달 헤더에 표시되는 제목입니다.",control:"text",table:{type:{summary:"string"},category:"Content"}},description:{description:"모달 본문에 표시되는 설명 텍스트입니다.",control:"text",table:{type:{summary:"string"},category:"Content"}},confirmLabel:{description:"확인 버튼 텍스트입니다.",control:"text",table:{type:{summary:"string"},category:"Content"}},cancelLabel:{description:"취소 버튼 텍스트입니다.",control:"text",table:{type:{summary:"string"},category:"Content"}},triggerLabel:{description:"모달을 여는 트리거 버튼 텍스트입니다.",control:"text",table:{type:{summary:"string"},category:"Content"}},size:{description:"모달 다이얼로그의 너비 크기입니다.",control:{type:"select"},options:["sm","md","lg"],table:{type:{summary:"'sm' | 'md' | 'lg'"},defaultValue:{summary:"'lg'"},category:"Appearance"}},variant:{description:"모달 표시 방식입니다.",control:{type:"select"},options:["default","full","bottom"],table:{type:{summary:"'default' | 'full' | 'bottom'"},defaultValue:{summary:"'default'"},category:"Appearance"}},closeOnEsc:{description:"`true`이면 Escape 키로 모달을 닫을 수 있습니다.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},closeOnOverlayClick:{description:"`true`이면 오버레이(배경) 클릭 시 모달이 닫힙니다.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},usePortal:{description:"`true`이면 `<Teleport>`를 사용하여 모달을 `<body>`에 포탈합니다.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"State"}}},args:{title:"확인",description:"이 작업을 계속하시겠습니까?",confirmLabel:"확인",cancelLabel:"취소",triggerLabel:"모달 열기",size:"lg",variant:"default",closeOnEsc:!1,closeOnOverlayClick:!1,usePortal:!0},render:r=>e.jsx(b,{...r,children:r.children??r.label??r.text??void 0})},c={name:"Default",args:{size:"md",closeOnOverlayClick:!0,usePortal:!1},parameters:{docs:{description:{story:'기본 모달입니다. `size="md"`, `closeOnOverlayClick`이 활성화된 상태입니다.'}}}},u={name:"Size Sm",args:{size:"sm",usePortal:!1},parameters:{docs:{description:{story:"**소형(`sm`) 모달**입니다. 짧은 확인 메시지나 단순 알림에 적합합니다."}}}},m={name:"Size Md",args:{size:"md",usePortal:!1},parameters:{docs:{description:{story:"**중형(`md`) 모달**입니다. 일반적인 확인·입력 다이얼로그에 사용합니다."}}}},y={name:"Size Lg",args:{size:"lg",usePortal:!1},parameters:{docs:{description:{story:"**대형(`lg`) 모달**입니다. 폼·목록·상세 내용 등 넓은 공간이 필요할 때 사용합니다."}}}},h={render:()=>{const r=({children:n,...o})=>e.jsx("div",{...o,children:n}),s=({children:n,...o})=>e.jsx("div",{...o,children:n}),l=({children:n,...o})=>e.jsx("div",{...o,children:n}),i=({children:n,...o})=>e.jsx("div",{...o,children:n}),d=({children:n,...o})=>e.jsx("div",{...o,children:n}),p=({children:n,...o})=>e.jsx("div",{...o,children:n}),t=({children:n,...o})=>e.jsx("div",{...o,children:n}),a=({children:n,...o})=>e.jsx("div",{...o,children:n});return e.jsxs(r,{variant:"bottom",size:"lg",usePortal:!1,children:[e.jsx(s,{children:"옵션 선택"}),e.jsxs(l,{children:[e.jsx(i,{title:"채널 선택"}),e.jsx(d,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"8px 0"},children:[e.jsx("button",{type:"button",style:{textAlign:"left",padding:"12px",border:"1px solid #e0e0e0",borderRadius:"6px",background:"#fff",cursor:"pointer",fontSize:"14px"},children:"옵션1"}),e.jsx("button",{type:"button",style:{textAlign:"left",padding:"12px",border:"1px solid #e0e0e0",borderRadius:"6px",background:"#fff",cursor:"pointer",fontSize:"14px"},children:"옵션2"}),e.jsx("button",{type:"button",style:{textAlign:"left",padding:"12px",border:"1px solid #e0e0e0",borderRadius:"6px",background:"#fff",cursor:"pointer",fontSize:"14px"},children:"옵션3"})]})}),e.jsx(p,{children:e.jsx(t,{asChild:!0,children:e.jsx(a,{variant:"secondary",children:"닫기"})})})]})]})},name:"Bottom Sheet",parameters:{docs:{description:{story:'**`variant="bottom"`으로 하단에서 올라오는 시트 형태의 모달**입니다. 모바일 환경에서 선택·필터·액션 시트로 자주 사용됩니다.'}},controls:{disable:!0}}},g={name:"With Controls",args:{closeOnEsc:!0,closeOnOverlayClick:!0,size:"lg",usePortal:!0},parameters:{docs:{description:{story:"**Controls 패널에서 모든 옵션을 직접 조작**할 수 있는 스토리입니다. `closeOnEsc`·`closeOnOverlayClick`·`usePortal` 등을 실시간으로 변경해 동작을 확인합니다."}}}},x={render:()=>{const r=({children:n,...o})=>e.jsx("div",{...o,children:n}),s=({children:n,...o})=>e.jsx("div",{...o,children:n}),l=({children:n,...o})=>e.jsx("div",{...o,children:n}),i=({children:n,...o})=>e.jsx("div",{...o,children:n}),d=({children:n,...o})=>e.jsx("div",{...o,children:n}),p=({children:n,...o})=>e.jsx("div",{...o,children:n}),t=({children:n,...o})=>e.jsx("div",{...o,children:n}),a=({children:n,...o})=>e.jsx("div",{...o,children:n});return e.jsxs(r,{size:"md",usePortal:!1,children:[e.jsx(s,{children:"모달 열기"}),e.jsxs(l,{children:[e.jsx(i,{title:"Long Content"}),e.jsx(d,{children:e.jsxs("div",{style:{height:"600px",overflowY:"auto"},children:[e.jsx("p",{children:"내용 줄 1"}),e.jsx("p",{children:"내용 줄 2"}),e.jsx("p",{children:"내용 줄 3"}),e.jsx("p",{children:"내용 줄 4"}),e.jsx("p",{children:"내용 줄 5"}),e.jsx("p",{children:"내용 줄 6"}),e.jsx("p",{children:"내용 줄 7"}),e.jsx("p",{children:"내용 줄 8"}),e.jsx("p",{children:"내용 줄 9"}),e.jsx("p",{children:"내용 줄 10"}),e.jsx("p",{children:"내용 줄 11"}),e.jsx("p",{children:"내용 줄 12"}),e.jsx("p",{children:"내용 줄 13"}),e.jsx("p",{children:"내용 줄 14"}),e.jsx("p",{children:"내용 줄 15"}),e.jsx("p",{children:"내용 줄 16"}),e.jsx("p",{children:"내용 줄 17"}),e.jsx("p",{children:"내용 줄 18"}),e.jsx("p",{children:"내용 줄 19"}),e.jsx("p",{children:"내용 줄 20"}),e.jsx("p",{children:"내용 줄 21"}),e.jsx("p",{children:"내용 줄 22"}),e.jsx("p",{children:"내용 줄 23"}),e.jsx("p",{children:"내용 줄 24"}),e.jsx("p",{children:"내용 줄 25"}),e.jsx("p",{children:"내용 줄 26"}),e.jsx("p",{children:"내용 줄 27"}),e.jsx("p",{children:"내용 줄 28"}),e.jsx("p",{children:"내용 줄 29"}),e.jsx("p",{children:"내용 줄 30"}),e.jsx("p",{children:"내용 줄 31"}),e.jsx("p",{children:"내용 줄 32"}),e.jsx("p",{children:"내용 줄 33"}),e.jsx("p",{children:"내용 줄 34"}),e.jsx("p",{children:"내용 줄 35"}),e.jsx("p",{children:"내용 줄 36"}),e.jsx("p",{children:"내용 줄 37"}),e.jsx("p",{children:"내용 줄 38"}),e.jsx("p",{children:"내용 줄 39"}),e.jsx("p",{children:"내용 줄 40"}),e.jsx("p",{children:"내용 줄 41"}),e.jsx("p",{children:"내용 줄 42"}),e.jsx("p",{children:"내용 줄 43"}),e.jsx("p",{children:"내용 줄 44"}),e.jsx("p",{children:"내용 줄 45"}),e.jsx("p",{children:"내용 줄 46"}),e.jsx("p",{children:"내용 줄 47"}),e.jsx("p",{children:"내용 줄 48"}),e.jsx("p",{children:"내용 줄 49"}),e.jsx("p",{children:"내용 줄 50"})]})}),e.jsxs(p,{children:[e.jsx(t,{asChild:!0,children:e.jsx(a,{variant:"tertiary",children:"아니요"})}),e.jsx(a,{variant:"primary",children:"예"})]})]})]})},name:"Long Content",parameters:{docs:{description:{story:"**본문 내용이 길 때의 스크롤 동작**을 확인하는 스토리입니다. `ModalBody` 내부에 `height: 600px; overflow-y: auto`를 적용하여 콘텐츠가 넘칠 경우 내부 스크롤이 동작합니다."}},controls:{disable:!0}}};var M,C,z;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    size: 'md',
    closeOnOverlayClick: true,
    usePortal: false
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`기본 모달입니다. \\\`size="md"\\\`, \\\`closeOnOverlayClick\\\`이 활성화된 상태입니다.\`
      }
    }
  }
}`,...(z=(C=c.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var S,O,B;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Size Sm',
  args: {
    size: 'sm',
    usePortal: false
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`**소형(\\\`sm\\\`) 모달**입니다. 짧은 확인 메시지나 단순 알림에 적합합니다.\`
      }
    }
  }
}`,...(B=(O=u.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var k,T,D;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Size Md',
  args: {
    size: 'md',
    usePortal: false
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`**중형(\\\`md\\\`) 모달**입니다. 일반적인 확인·입력 다이얼로그에 사용합니다.\`
      }
    }
  }
}`,...(D=(T=m.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var R,w,F;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Size Lg',
  args: {
    size: 'lg',
    usePortal: false
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`**대형(\\\`lg\\\`) 모달**입니다. 폼·목록·상세 내용 등 넓은 공간이 필요할 때 사용합니다.\`
      }
    }
  }
}`,...(F=(w=y.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var P,L,q;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const ModalRoot = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const ModalTrigger = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const ModalContent = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const ModalHeader = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const ModalBody = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const ModalFooter = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const ModalClose = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const Button = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    return <ModalRoot variant="bottom" size="lg" usePortal={false}>
        <ModalTrigger>옵션 선택</ModalTrigger>
        <ModalContent>
          <ModalHeader title="채널 선택" />
          <ModalBody>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            padding: '8px 0'
          }}>
              <button type="button" style={{
              textAlign: 'left',
              padding: '12px',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              background: '#fff',
              cursor: 'pointer',
              fontSize: '14px'
            }}>옵션1</button>
              <button type="button" style={{
              textAlign: 'left',
              padding: '12px',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              background: '#fff',
              cursor: 'pointer',
              fontSize: '14px'
            }}>옵션2</button>
              <button type="button" style={{
              textAlign: 'left',
              padding: '12px',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              background: '#fff',
              cursor: 'pointer',
              fontSize: '14px'
            }}>옵션3</button>
            </div>
          </ModalBody>
          <ModalFooter>
            <ModalClose asChild={true}>
              <Button variant="secondary">닫기</Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </ModalRoot>;
  },
  name: 'Bottom Sheet',
  parameters: {
    docs: {
      description: {
        story: \`**\\\`variant="bottom"\\\`으로 하단에서 올라오는 시트 형태의 모달**입니다. 모바일 환경에서 선택·필터·액션 시트로 자주 사용됩니다.\`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(q=(L=h.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var V,E,A;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'With Controls',
  args: {
    closeOnEsc: true,
    closeOnOverlayClick: true,
    size: 'lg',
    usePortal: true
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`**Controls 패널에서 모든 옵션을 직접 조작**할 수 있는 스토리입니다. \\\`closeOnEsc\\\`·\\\`closeOnOverlayClick\\\`·\\\`usePortal\\\` 등을 실시간으로 변경해 동작을 확인합니다.\`
      }
    }
  }
}`,...(A=(E=g.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var H,I,N;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const ModalRoot = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const ModalTrigger = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const ModalContent = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const ModalHeader = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const ModalBody = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const ModalFooter = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const ModalClose = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const Button = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    return <ModalRoot size="md" usePortal={false}>
        <ModalTrigger>모달 열기</ModalTrigger>
        <ModalContent>
          <ModalHeader title="Long Content" />
          <ModalBody>
            <div style={{
            height: '600px',
            overflowY: 'auto'
          }}>
              <p>내용 줄 1</p>
              <p>내용 줄 2</p>
              <p>내용 줄 3</p>
              <p>내용 줄 4</p>
              <p>내용 줄 5</p>
              <p>내용 줄 6</p>
              <p>내용 줄 7</p>
              <p>내용 줄 8</p>
              <p>내용 줄 9</p>
              <p>내용 줄 10</p>
              <p>내용 줄 11</p>
              <p>내용 줄 12</p>
              <p>내용 줄 13</p>
              <p>내용 줄 14</p>
              <p>내용 줄 15</p>
              <p>내용 줄 16</p>
              <p>내용 줄 17</p>
              <p>내용 줄 18</p>
              <p>내용 줄 19</p>
              <p>내용 줄 20</p>
              <p>내용 줄 21</p>
              <p>내용 줄 22</p>
              <p>내용 줄 23</p>
              <p>내용 줄 24</p>
              <p>내용 줄 25</p>
              <p>내용 줄 26</p>
              <p>내용 줄 27</p>
              <p>내용 줄 28</p>
              <p>내용 줄 29</p>
              <p>내용 줄 30</p>
              <p>내용 줄 31</p>
              <p>내용 줄 32</p>
              <p>내용 줄 33</p>
              <p>내용 줄 34</p>
              <p>내용 줄 35</p>
              <p>내용 줄 36</p>
              <p>내용 줄 37</p>
              <p>내용 줄 38</p>
              <p>내용 줄 39</p>
              <p>내용 줄 40</p>
              <p>내용 줄 41</p>
              <p>내용 줄 42</p>
              <p>내용 줄 43</p>
              <p>내용 줄 44</p>
              <p>내용 줄 45</p>
              <p>내용 줄 46</p>
              <p>내용 줄 47</p>
              <p>내용 줄 48</p>
              <p>내용 줄 49</p>
              <p>내용 줄 50</p>
            </div>
          </ModalBody>
          <ModalFooter>
            <ModalClose asChild={true}>
              <Button variant="tertiary">아니요</Button>
            </ModalClose>
            <Button variant="primary">예</Button>
          </ModalFooter>
        </ModalContent>
      </ModalRoot>;
  },
  name: 'Long Content',
  parameters: {
    docs: {
      description: {
        story: \`**본문 내용이 길 때의 스크롤 동작**을 확인하는 스토리입니다. \\\`ModalBody\\\` 내부에 \\\`height: 600px; overflow-y: auto\\\`를 적용하여 콘텐츠가 넘칠 경우 내부 스크롤이 동작합니다.\`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(N=(I=x.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};const ke=["Default","SizeSm","SizeMd","SizeLg","BottomSheet","WithControls","LongContent"];export{h as BottomSheet,c as Default,x as LongContent,y as SizeLg,m as SizeMd,u as SizeSm,g as WithControls,ke as __namedExportsOrder,Be as default};
