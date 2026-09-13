import{j as k}from"./jsx-runtime-D_zvdyIk.js";import{d as T}from"./reference-types-4ftiVeOu.js";import{r as q}from"./index-BxXVWNx3.js";import{c as C}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const O={"p-none":"p-0","p-xs":"p-1","p-sm":"p-2","p-md":"p-4","p-lg":"p-6","p-xl":"p-8"},j={"bg-white":"bg-white","bg-subtle":"bg-krds-gray-5","bg-muted":"bg-krds-gray-10","bg-info":"bg-krds-info-base","bg-success":"bg-krds-success-base","bg-warning":"bg-krds-warning-base","bg-danger":"bg-krds-danger-base"},M={"radius-none":"rounded-none","radius-sm":"rounded-sm","radius-md":"rounded-md","radius-lg":"rounded-lg","radius-full":"rounded-full"},N={bordered:"border border-krds-gray-20","bordered-primary":"border border-krds-primary-50","bordered-strong":"border-2 border-krds-gray-70"},n=q.forwardRef(({className:e,padding:i="p-lg",margin:t,background:l="bg-subtle",borderRadius:u="radius-md",border:m="bordered",width:o,height:d,style:B,children:R,...V},S)=>{const p={...t&&t!=="0"?{margin:t}:{},...o&&o!=="auto"?{width:o}:{},...d&&d!=="auto"?{height:d}:{},...B};return k.jsx("div",{ref:S,className:C(i&&O[i],l&&j[l],u&&M[u],m&&N[m],e),style:Object.keys(p).length?p:void 0,...V,children:R})});n.displayName="Box";n.__docgenInfo={description:"",methods:[],displayName:"Box",props:{padding:{required:!1,tsType:{name:"union",raw:"'p-none' | 'p-xs' | 'p-sm' | 'p-md' | 'p-lg' | 'p-xl'",elements:[{name:"literal",value:"'p-none'"},{name:"literal",value:"'p-xs'"},{name:"literal",value:"'p-sm'"},{name:"literal",value:"'p-md'"},{name:"literal",value:"'p-lg'"},{name:"literal",value:"'p-xl'"}]},description:"",defaultValue:{value:"'p-lg'",computed:!1}},margin:{required:!1,tsType:{name:"string"},description:""},background:{required:!1,tsType:{name:"union",raw:"'' | 'bg-white' | 'bg-subtle' | 'bg-muted' | 'bg-info' | 'bg-success' | 'bg-warning' | 'bg-danger'",elements:[{name:"literal",value:"''"},{name:"literal",value:"'bg-white'"},{name:"literal",value:"'bg-subtle'"},{name:"literal",value:"'bg-muted'"},{name:"literal",value:"'bg-info'"},{name:"literal",value:"'bg-success'"},{name:"literal",value:"'bg-warning'"},{name:"literal",value:"'bg-danger'"}]},description:"",defaultValue:{value:"'bg-subtle'",computed:!1}},borderRadius:{required:!1,tsType:{name:"union",raw:"'radius-none' | 'radius-sm' | 'radius-md' | 'radius-lg' | 'radius-full'",elements:[{name:"literal",value:"'radius-none'"},{name:"literal",value:"'radius-sm'"},{name:"literal",value:"'radius-md'"},{name:"literal",value:"'radius-lg'"},{name:"literal",value:"'radius-full'"}]},description:"",defaultValue:{value:"'radius-md'",computed:!1}},border:{required:!1,tsType:{name:"union",raw:"'' | 'bordered' | 'bordered-primary' | 'bordered-strong'",elements:[{name:"literal",value:"''"},{name:"literal",value:"'bordered'"},{name:"literal",value:"'bordered-primary'"},{name:"literal",value:"'bordered-strong'"}]},description:"",defaultValue:{value:"'bordered'",computed:!1}},width:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const z=T([{library:"Chakra UI",component:"Box",url:"https://www.chakra-ui.com/docs/components/box",usedFor:["comparison"],relation:"compared"}]),L={title:"Layout/Primitives/Box",component:n,tags:["autodocs","layout","custom-ui","ref:chakra-ui","ref:vuetify","ref:mui"],parameters:{references:z,docs:{description:{component:`
## Box

**가장 기본적인 레이아웃 컨테이너**입니다. \`div\` 래퍼에 spacing, border, background 등 시각적 속성을 클래스로 전달합니다.

---

### 언제 사용하나요?

| 용도 | 예시 |
|---|---|
| 카드·섹션 래퍼 | 배경색·패딩이 필요한 영역 |
| 간격 조정 | margin/padding 단독 적용 |
| 시각적 구분 | 테두리·배경 강조 영역 |

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | 의미 있는 콘텐츠 그룹이라면 \`role\`이나 시맨틱 HTML 태그를 검토하세요. |
| ✅ | 장식용 배경이라면 스크린리더가 무시하도록 \`aria-hidden="true"\`를 추가하세요. |
        `}}},argTypes:{padding:{description:"안쪽 여백",control:{type:"select"},options:["p-none","p-xs","p-sm","p-md","p-lg","p-xl"],table:{type:{summary:"'p-none' | 'p-xs' | 'p-sm' | 'p-md' | 'p-lg' | 'p-xl'"},defaultValue:{summary:"'p-lg'"},category:"Spacing"}},margin:{description:"바깥 여백 (CSS 값)",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'0'"},category:"Spacing"}},background:{description:"배경색",control:{type:"select"},options:["","bg-white","bg-subtle","bg-muted","bg-info","bg-success","bg-warning","bg-danger"],table:{type:{summary:"'bg-white' | 'bg-subtle' | 'bg-muted' | 'bg-info' | ..."},defaultValue:{summary:"'bg-subtle'"},category:"Appearance"}},borderRadius:{description:"모서리 반경",control:{type:"select"},options:["radius-none","radius-sm","radius-md","radius-lg","radius-full"],table:{type:{summary:"'radius-none' | 'radius-sm' | 'radius-md' | 'radius-lg' | 'radius-full'"},defaultValue:{summary:"'radius-md'"},category:"Appearance"}},border:{description:"테두리 스타일",control:{type:"select"},options:["","bordered","bordered-primary","bordered-strong"],table:{type:{summary:"'' | 'bordered' | 'bordered-primary' | 'bordered-strong'"},defaultValue:{summary:"'bordered'"},category:"Appearance"}},width:{description:"너비",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'auto'"},category:"Size"}},height:{description:"높이",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'auto'"},category:"Size"}},content:{description:"내부 텍스트 (스토리 전용)",control:"text",table:{type:{summary:"string"},category:"Content"}}},args:{padding:"p-lg",margin:"0",background:"bg-subtle",borderRadius:"radius-md",border:"bordered",width:"auto",height:"auto",content:"Box 내부 콘텐츠"},render:e=>k.jsx(n,{...e,children:e.children??e.label??e.text??void 0})},r={name:"기본 (Default)",args:{label:"Box",description:"Box 컴포넌트의 기본 상태입니다.",status:"default",size:"md",disabled:!1,loading:!1,density:"comfortable"},parameters:{docs:{description:{story:"기본 Box 컨테이너입니다. 패딩·배경·테두리가 적용된 영역을 만들 때 사용합니다."}}}},a={name:"테두리 박스 (Outlined)",args:{background:"bg-white",border:"bordered-strong",borderRadius:"radius-sm",content:"테두리 강조 영역"},parameters:{docs:{description:{story:"배경 없이 테두리만으로 영역을 구분할 때 사용합니다."}}}},s={name:"색상 배경 (Colored)",args:{background:"bg-info",border:"bordered",content:"정보 강조 영역"},parameters:{docs:{description:{story:"정보·경고·성공 등 의미에 맞는 배경색을 적용합니다."}}}};var c,g,b;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '기본 (Default)',
  args: {
    label: 'Box',
    description: 'Box 컴포넌트의 기본 상태입니다.',
    status: 'default',
    size: 'md',
    disabled: false,
    loading: false,
    density: 'comfortable'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '기본 Box 컨테이너입니다. 패딩·배경·테두리가 적용된 영역을 만들 때 사용합니다.'
      }
    }
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,f,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '테두리 박스 (Outlined)',
  args: {
    background: 'bg-white',
    border: 'bordered-strong',
    borderRadius: 'radius-sm',
    content: '테두리 강조 영역'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '배경 없이 테두리만으로 영역을 구분할 때 사용합니다.'
      }
    }
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,w,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '색상 배경 (Colored)',
  args: {
    background: 'bg-info',
    border: 'bordered',
    content: '정보 강조 영역'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '정보·경고·성공 등 의미에 맞는 배경색을 적용합니다.'
      }
    }
  }
}`,...(h=(w=s.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};const F=["Default","Outlined","Colored"];export{s as Colored,r as Default,a as Outlined,F as __namedExportsOrder,L as default};
