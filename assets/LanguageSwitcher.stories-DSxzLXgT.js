import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{d as M}from"./reference-types-4ftiVeOu.js";import{r as i}from"./index-BxXVWNx3.js";import{c as s}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";function o({options:n=[],dropPosition:f="center",isShowCurrent:q=!1,defaultValue:P,value:y,onSelect:m,className:W,...I}){var b;const[g,a]=i.useState(!1),[_,B]=i.useState(P??((b=n[0])==null?void 0:b.value)??""),v=y??_,x=n.find(e=>e.value===v),h=i.useRef(null);i.useEffect(()=>{const e=t=>{h.current&&!h.current.contains(t.target)&&a(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const K=e=>{y||B(e.value),m==null||m(e.value),a(!1),e.href&&(window.location.href=e.href)},F=e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),a(t=>!t)),e.key==="Escape"&&a(!1)},H=f==="right"?"left-0":f==="left"?"right-0":"left-1/2 -translate-x-1/2";return r.jsxs("div",{ref:h,className:s("relative inline-block",W),...I,children:[r.jsxs("button",{type:"button","aria-haspopup":"listbox","aria-expanded":g,"aria-label":"언어 선택",onKeyDown:F,onClick:()=>a(e=>!e),className:s("inline-flex items-center gap-1.5 rounded border border-krds-gray-20 bg-krds-gray-0 px-3 py-1.5","text-krds-body-sm text-krds-gray-70 transition-colors","hover:border-krds-primary-50 hover:text-krds-primary-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-krds-primary-50"),children:[r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),r.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),q&&x&&r.jsx("span",{className:"font-medium",children:x.label}),r.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:s("transition-transform",g&&"rotate-180"),children:r.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),g&&r.jsx("ul",{role:"listbox","aria-label":"언어 목록",className:s("absolute z-50 mt-1 min-w-[120px] overflow-hidden rounded border border-krds-gray-20 bg-krds-gray-0 py-1 shadow-md",H),children:n.map(e=>{const t=e.value===v;return r.jsx("li",{role:"option","aria-selected":t,children:r.jsx("button",{type:"button",title:e.title,onClick:()=>K(e),className:s("w-full px-4 py-2 text-left text-krds-body-sm transition-colors",t?"bg-krds-primary-10 font-semibold text-krds-primary-base":"text-krds-gray-70 hover:bg-krds-gray-10 hover:text-krds-gray-90"),children:e.label})},e.value)})})]})}o.__docgenInfo={description:"",methods:[],displayName:"LanguageSwitcher",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"LanguageOption"}],raw:"LanguageOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},dropPosition:{required:!1,tsType:{name:"union",raw:"'center' | 'left' | 'right'",elements:[{name:"literal",value:"'center'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'center'",computed:!1}},isShowCurrent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultValue:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const G=[{value:"ko",label:"한국어",title:"한국어로 전환"},{value:"en",label:"English",title:"Switch to English"},{value:"zh",label:"中文",title:"切换到中文"}],U=M([{library:"U.S. Web Design System",component:"Language selector",url:"https://designsystem.digital.gov/components/language-selector/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"KRDS",component:"LanguageSwitcher",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-languageswitcher--docs",usedFor:["design","behavior","api"],relation:"adapted"}]),$={title:"Molecules/Navigation/LanguageSwitcher",component:o,tags:["autodocs","navigation","ref:krds","ref:uswds"],parameters:{references:U,docs:{description:{component:`
## LanguageSwitcher

사용자가 사이트 언어를 전환할 수 있는 **드롭다운 언어 선택기**입니다.
선택된 언어를 버튼에 표시하거나 숨길 수 있으며, 드롭다운 위치도 조정 가능합니다.

---

### 언제 사용하나요?

| 상황 | 권장 |
|---|---|
| GNB 헤더 우측 언어 전환 | **LanguageSwitcher** ✅ |
| 단순 텍스트 언어 링크 목록 | 인라인 \`Link\` 컴포넌트 |

---

### 사용 지침

- **options** 는 필수입니다. 각 항목에 \`value\`, \`label\`을 반드시 포함하고, \`title\`로 접근성 레이블을 추가하세요.
- **isShowCurrent** 를 \`true\`로 설정하면 현재 선택 언어가 버튼에 표시됩니다.
- **dropPosition** 으로 드롭다운이 열리는 방향을 제어합니다. 헤더 끝단에서는 \`'right'\`를 사용하세요.
- 언어 전환 시 페이지 리로드가 필요한 경우 \`href\` 속성을, SPA 내부 전환이면 \`@select\` 이벤트를 활용하세요.

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | 드롭다운 트리거 버튼에 \`aria-haspopup\`과 \`aria-expanded\`가 설정됩니다. |
| ✅ | 각 언어 옵션에 \`title\` 속성으로 접근성 레이블을 제공하세요. |
| ✅ | 방향키로 옵션 간 이동, Enter/Space로 선택이 가능합니다. |
        `}}},argTypes:{options:{description:"언어 옵션 목록입니다. `value`, `label`은 필수이며, `title`과 `href`는 선택입니다.",control:"object",table:{type:{summary:"LanguageOption[]"},defaultValue:{summary:"[]"},category:"Content"}},dropPosition:{description:"드롭다운이 열리는 방향입니다.",control:{type:"select"},options:["center","left","right"],table:{type:{summary:"'center' | 'left' | 'right'"},defaultValue:{summary:"'center'"},category:"Appearance"}},isShowCurrent:{description:"현재 선택된 언어를 버튼에 표시할지 여부입니다.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Appearance"}}},args:{options:G,dropPosition:"center",isShowCurrent:!0},render:n=>r.jsx(o,{...n,children:n.children??n.label??n.text??void 0})},l={name:"기본 (Default)",parameters:{docs:{description:{story:`
**기본 LanguageSwitcher** 상태입니다.
버튼 클릭 시 언어 목록 드롭다운이 열립니다. \`isShowCurrent: true\`이면 현재 언어가 버튼에 표시됩니다.
        `}}}},c={name:"현재 언어 레이블 숨김",args:{isShowCurrent:!1},parameters:{docs:{description:{story:`
**현재 선택 언어를 버튼에 표시하지 않는** 상태입니다.
공간이 제한적인 헤더 영역에서 아이콘만 노출할 때 사용하세요.
        `}}}},d={name:"오른쪽 정렬 드롭다운",args:{dropPosition:"right"},parameters:{docs:{description:{story:`
드롭다운이 **오른쪽으로 정렬**되는 상태입니다.
헤더 좌측에 배치될 때 드롭다운이 왼쪽으로 넘치지 않도록 \`'right'\`를 사용하세요.
        `}}}},u={name:"2개 언어",args:{options:[{value:"ko",label:"한국어",title:"한국어로 전환"},{value:"en",label:"English",title:"Switch to English"}],isShowCurrent:!0},parameters:{docs:{description:{story:`
**한국어·영어 2개 언어**만 제공하는 간단 구성입니다.
소규모 서비스에서 가장 많이 사용되는 패턴입니다.
        `}}}},p={render:()=>r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"32px",alignItems:"flex-start",padding:"24px"},children:[r.jsxs("div",{children:[r.jsx("p",{style:{fontSize:"12px",color:"#666",margin:"0 0 8px"},children:"현재 언어 표시"}),r.jsx(o,{options:[{value:"ko",label:"한국어"},{value:"en",label:"English"}],isShowCurrent:!0})]}),r.jsxs("div",{children:[r.jsx("p",{style:{fontSize:"12px",color:"#666",margin:"0 0 8px"},children:"현재 언어 숨김"}),r.jsx(o,{options:[{value:"ko",label:"한국어"},{value:"en",label:"English"}],isShowCurrent:!1})]})]}),name:"전체 상태 비교 (Overview)",parameters:{docs:{description:{story:"**LanguageSwitcher의 표시 방식 변형**을 한 화면에서 비교합니다."}},controls:{disable:!0}}};var w,S,k;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '기본 (Default)',
  parameters: {
    docs: {
      description: {
        story: \`
**기본 LanguageSwitcher** 상태입니다.
버튼 클릭 시 언어 목록 드롭다운이 열립니다. \\\`isShowCurrent: true\\\`이면 현재 언어가 버튼에 표시됩니다.
        \`
      }
    }
  }
}`,...(k=(S=l.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var L,j,C;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '현재 언어 레이블 숨김',
  args: {
    isShowCurrent: false
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**현재 선택 언어를 버튼에 표시하지 않는** 상태입니다.
공간이 제한적인 헤더 영역에서 아이콘만 노출할 때 사용하세요.
        \`
      }
    }
  }
}`,...(C=(j=c.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var E,D,O;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '오른쪽 정렬 드롭다운',
  args: {
    dropPosition: 'right'
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
드롭다운이 **오른쪽으로 정렬**되는 상태입니다.
헤더 좌측에 배치될 때 드롭다운이 왼쪽으로 넘치지 않도록 \\\`'right'\\\`를 사용하세요.
        \`
      }
    }
  }
}`,...(O=(D=d.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var N,T,A;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '2개 언어',
  args: {
    options: [{
      value: 'ko',
      label: '한국어',
      title: '한국어로 전환'
    }, {
      value: 'en',
      label: 'English',
      title: 'Switch to English'
    }],
    isShowCurrent: true
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**한국어·영어 2개 언어**만 제공하는 간단 구성입니다.
소규모 서비스에서 가장 많이 사용되는 패턴입니다.
        \`
      }
    }
  }
}`,...(A=(T=u.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var V,z,R;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '32px',
    alignItems: 'flex-start',
    padding: '24px'
  }}>
        <div>
          <p style={{
        fontSize: '12px',
        color: '#666',
        margin: '0 0 8px'
      }}>현재 언어 표시</p>
          <LanguageSwitcher options={[{
        value: 'ko',
        label: '한국어'
      }, {
        value: 'en',
        label: 'English'
      }]} isShowCurrent={true} />
        </div>
        <div>
          <p style={{
        fontSize: '12px',
        color: '#666',
        margin: '0 0 8px'
      }}>현재 언어 숨김</p>
          <LanguageSwitcher options={[{
        value: 'ko',
        label: '한국어'
      }, {
        value: 'en',
        label: 'English'
      }]} isShowCurrent={false} />
        </div>
      </div>,
  name: '전체 상태 비교 (Overview)',
  parameters: {
    docs: {
      description: {
        story: \`**LanguageSwitcher의 표시 방식 변형**을 한 화면에서 비교합니다.\`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(R=(z=p.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};const ee=["Default","HideCurrentLabel","DropRight","TwoLanguages","AllStates"];export{p as AllStates,l as Default,d as DropRight,c as HideCurrentLabel,u as TwoLanguages,ee as __namedExportsOrder,$ as default};
