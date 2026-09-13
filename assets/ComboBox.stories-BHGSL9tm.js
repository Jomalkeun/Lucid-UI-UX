import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{d as G}from"./reference-types-4ftiVeOu.js";import{r as t}from"./index-BxXVWNx3.js";import{c as p}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const H={sm:{height:"h-8",text:"text-krds-body-sm",px:"px-3"},md:{height:"h-10",text:"text-krds-body-md",px:"px-3"},lg:{height:"h-12",text:"text-krds-body-lg",px:"px-4"}},J={default:"border-krds-gray-20 focus-within:border-krds-primary-50",success:"border-krds-success-border",warning:"border-krds-warning-border",danger:"border-krds-danger-border",info:"border-krds-info-border"};function q({label:s,placeholder:A="선택 또는 입력...",options:E=[],value:v,defaultValue:b=null,disabled:h=!1,loading:F=!1,notFoundContent:I="결과 없음",size:R="md",status:$="default",onChange:k,onSearch:w,className:V,style:U}){const i=t.useId(),[z,W]=t.useState(b),[C,c]=t.useState((b==null?void 0:b.label)??""),[f,n]=t.useState(!1),[l,d]=t.useState(-1),j=t.useRef(null),D=t.useRef(null),_=t.useRef(null),a=v!==void 0?v:z,u=E.filter(e=>e.label.toLowerCase().includes(C.toLowerCase())||e.value.toLowerCase().includes(C.toLowerCase()));t.useEffect(()=>{const e=o=>{j.current&&!j.current.contains(o.target)&&(n(!1),c((a==null?void 0:a.label)??""))};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[a]);const x=e=>{v||W(e),c((e==null?void 0:e.label)??""),k==null||k(e),n(!1),d(-1)},K=e=>{const o=e.target.value;c(o),w==null||w(o),n(!0),d(-1),o===""&&x(null)},P=e=>{if(!f){(e.key==="ArrowDown"||e.key==="Enter")&&(n(!0),d(0));return}const o=u.length;e.key==="ArrowDown"?(e.preventDefault(),d(m=>Math.min(m+1,o-1))):e.key==="ArrowUp"?(e.preventDefault(),d(m=>Math.max(m-1,0))):e.key==="Enter"?(e.preventDefault(),l>=0&&u[l]&&!u[l].disabled&&x(u[l])):e.key==="Escape"?(n(!1),c((a==null?void 0:a.label)??"")):e.key==="Tab"&&n(!1)},B=H[R];return r.jsxs("div",{ref:j,className:p("flex flex-col gap-1.5 font-sans",V),style:U,children:[s&&r.jsx("label",{htmlFor:`${i}-input`,className:"text-krds-body-sm font-semibold text-krds-gray-90",children:s}),r.jsxs("div",{className:p("relative",h&&"opacity-50 pointer-events-none"),children:[r.jsxs("div",{className:p("flex items-center gap-2 rounded-md border bg-krds-gray-0 transition-colors",B.height,B.px,B.text,J[$]),children:[r.jsx("input",{id:`${i}-input`,ref:D,role:"combobox","aria-expanded":f,"aria-autocomplete":"list","aria-controls":`${i}-listbox`,"aria-activedescendant":l>=0?`${i}-opt-${l}`:void 0,type:"text",value:C,placeholder:A,disabled:h,onChange:K,onKeyDown:P,onFocus:()=>n(!0),className:"flex-1 bg-transparent outline-none text-krds-gray-90 placeholder:text-krds-gray-30 min-w-0"}),a&&!h&&r.jsx("button",{type:"button","aria-label":"선택 초기화",onClick:()=>{var e;x(null),c(""),(e=D.current)==null||e.focus()},className:"text-krds-gray-30 hover:text-krds-gray-70 flex-shrink-0 transition-colors",children:r.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M2 2l10 10M12 2L2 12",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})})}),r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",className:p("text-krds-gray-40 flex-shrink-0 transition-transform",f&&"rotate-180"),children:r.jsx("path",{d:"M4 6l4 4 4-4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),f&&r.jsx("ul",{id:`${i}-listbox`,ref:_,role:"listbox","aria-label":s,className:"absolute left-0 right-0 top-full mt-1 z-50 bg-krds-gray-0 border border-krds-gray-10 rounded-lg shadow-lg max-h-56 overflow-y-auto py-1",children:F?r.jsx("li",{className:"px-3 py-2 text-krds-body-sm text-krds-gray-40",children:"불러오는 중..."}):u.length===0?r.jsx("li",{className:"px-3 py-2 text-krds-body-sm text-krds-gray-40",children:I}):u.map((e,o)=>r.jsxs("li",{id:`${i}-opt-${o}`,role:"option","aria-selected":(a==null?void 0:a.value)===e.value,"aria-disabled":e.disabled,onMouseDown:m=>{m.preventDefault(),e.disabled||x(e)},onMouseEnter:()=>d(o),className:p("flex items-center gap-2 px-3 py-2 cursor-pointer text-krds-body-sm transition-colors",e.disabled?"text-krds-gray-30 cursor-not-allowed":"text-krds-gray-90",o===l&&!e.disabled&&"bg-krds-primary-5",(a==null?void 0:a.value)===e.value&&"bg-krds-primary-5 font-semibold"),children:[r.jsx("span",{className:"flex-1",children:e.label}),(a==null?void 0:a.value)===e.value&&r.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",className:"text-krds-primary-base flex-shrink-0",children:r.jsx("path",{d:"M2 7l4 4 6-7",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]},e.value))})]})]})}q.__docgenInfo={description:"",methods:[],displayName:"ComboBox",props:{label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'선택 또는 입력...'",computed:!1}},options:{required:!1,tsType:{name:"Array",elements:[{name:"ComboBoxOption"}],raw:"ComboBoxOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"ComboBoxOption | null",elements:[{name:"ComboBoxOption"},{name:"null"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"ComboBoxOption | null",elements:[{name:"ComboBoxOption"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},notFoundContent:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'결과 없음'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'danger' | 'info'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ComboBoxOption | null) => void",signature:{arguments:[{type:{name:"union",raw:"ComboBoxOption | null",elements:[{name:"ComboBoxOption"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const Q=G([{library:"U.S. Web Design System",component:"Combo box",url:"https://designsystem.digital.gov/components/combo-box/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"Ark UI",component:"Combobox",url:"https://ark-ui.com/docs/components/combobox",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Ant Design",component:"AutoComplete",url:"https://ant.design/components/auto-complete/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Combobox",url:"https://www.chakra-ui.com/docs/components/combobox",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Combobox",url:"https://base-ui.com/react/components/combobox",usedFor:["comparison"],relation:"compared"}]),ae={title:"Molecules/Forms/ComboBox",component:q,tags:["autodocs","form","custom-ui","ref:chakra-ui","ref:shadcn-ui","ref:ark-ui","ref:ant-design","ref:base-ui","ref:uswds"],parameters:{references:Q,docs:{description:{component:`
## ComboBox / Autocomplete

**텍스트를 입력하면 일치하는 옵션을 필터링**하여 드롭다운으로 보여주는 검색 가능한 선택 컴포넌트입니다.

---

### 언제 사용하나요?

| 용도 | 예시 |
|---|---|
| 대용량 선택 | 도시, 국가 선택 |
| 자동 완성 | 주소 입력, 사용자 검색 |
| 태그 추가 | 기존 태그에서 선택 |

---

### Select vs ComboBox

| 상황 | 권장 |
|---|---|
| 옵션이 10개 이하 | \`Select\` |
| 옵션이 많고 검색이 필요한 경우 | **ComboBox** |
| 자유 입력 + 제안 모두 허용 | **ComboBox (free)** |

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | \`role="combobox"\`, \`aria-expanded\`, \`aria-autocomplete\`를 설정하세요. |
| ✅ | 키보드 방향키로 옵션을 탐색할 수 있어야 합니다. |
        `}}},argTypes:{label:{description:"레이블",control:"text",table:{type:{summary:"string"},category:"Content"}},placeholder:{description:"플레이스홀더",control:"text",table:{type:{summary:"string"},category:"Content"}},value:{description:"선택된 값",control:"object",table:{type:{summary:"object | null"},category:"State"}},options:{description:"옵션 목록",control:"object",table:{type:{summary:"Array<{value, label}>"},category:"Content"}},disabled:{description:"비활성화",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}}},args:{label:"도시 선택",placeholder:"도시 이름 검색...",value:null,disabled:!1,options:[{value:"seoul",label:"서울특별시"},{value:"busan",label:"부산광역시"},{value:"daegu",label:"대구광역시"},{value:"incheon",label:"인천광역시"},{value:"gwangju",label:"광주광역시"},{value:"daejeon",label:"대전광역시"},{value:"ulsan",label:"울산광역시"},{value:"sejong",label:"세종특별자치시"}]},render:s=>r.jsx(q,{...s,children:s.children??s.label??s.text??void 0})},y={name:"기본 자동완성",parameters:{docs:{description:{story:"클릭하거나 텍스트를 입력하면 옵션이 필터링됩니다."}}}},g={name:"비활성화",args:{disabled:!0},parameters:{docs:{description:{story:"비활성화된 콤보박스입니다."}}}};var T,N,S;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '기본 자동완성',
  parameters: {
    docs: {
      description: {
        story: '클릭하거나 텍스트를 입력하면 옵션이 필터링됩니다.'
      }
    }
  }
}`,...(S=(N=y.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var L,M,O;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '비활성화',
  args: {
    disabled: true
  } as any,
  parameters: {
    docs: {
      description: {
        story: '비활성화된 콤보박스입니다.'
      }
    }
  }
}`,...(O=(M=g.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const oe=["Default","Disabled"];export{y as Default,g as Disabled,oe as __namedExportsOrder,ae as default};
