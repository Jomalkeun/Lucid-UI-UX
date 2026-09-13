import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as j}from"./reference-types-4ftiVeOu.js";import{r as T}from"./index-BxXVWNx3.js";import{c as A}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const R={400:"font-normal",500:"font-medium",600:"font-semibold",700:"font-bold",800:"font-extrabold"},o=T.forwardRef(({className:a,level:y="h2",weight:g="700",color:f,style:H,children:x,...v},b)=>{const w=y;return e.jsx(w,{ref:b,className:A(R[g],a),style:{color:f,...H},...v,children:x})});o.displayName="Heading";o.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{level:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"}]},description:"",defaultValue:{value:"'h2'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'400' | '500' | '600' | '700' | '800'",elements:[{name:"literal",value:"'400'"},{name:"literal",value:"'500'"},{name:"literal",value:"'600'"},{name:"literal",value:"'700'"},{name:"literal",value:"'800'"}]},description:"",defaultValue:{value:"'700'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const N=j([{library:"Bootstrap",component:"Headings",url:"https://getbootstrap.com/docs/5.3/content/typography/#headings",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"Headings",url:"https://flowbite.com/docs/typography/headings/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Heading",url:"https://www.chakra-ui.com/docs/components/heading",usedFor:["comparison"],relation:"compared"}]),k={title:"Atoms/Typography/Heading",component:o,tags:["autodocs","typography","custom-ui","ref:chakra-ui","ref:flowbite","ref:vuetify","ref:mui","ref:bootstrap"],parameters:{references:N,docs:{description:{component:`
## Heading

**제목 계층을 표현**하는 타이포그래피 컴포넌트입니다. H1~H6 수준의 시맨틱 태그와 스타일을 결합합니다.

---

### 언제 사용하나요?

| 레벨 | 용도 |
|---|---|
| H1 | 페이지 단위 최상위 제목 (페이지당 1개) |
| H2 | 주요 섹션 제목 |
| H3 | 섹션 내 소제목 |
| H4~H6 | 세부 분류, 카드 제목 등 |

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | 페이지에 H1은 반드시 하나여야 합니다. |
| ✅ | 제목 레벨은 시각적 스타일이 아닌 문서 구조로 결정하세요. |
| ⚠️ | 레벨을 건너뛰지 마세요 (H2 다음 H4 사용 금지). |
        `}}},argTypes:{level:{description:"시맨틱 제목 레벨",control:{type:"select"},options:["h1","h2","h3","h4","h5","h6"],table:{type:{summary:"'h1'|'h2'|'h3'|'h4'|'h5'|'h6'"},defaultValue:{summary:"'h2'"},category:"Appearance"}},weight:{description:"폰트 굵기",control:{type:"select"},options:["400","500","600","700","800"],table:{type:{summary:"string"},defaultValue:{summary:"'700'"},category:"Appearance"}},color:{description:"텍스트 색상",control:"color",table:{type:{summary:"string"},defaultValue:{summary:"'#1a1a1a'"},category:"Appearance"}},text:{description:"제목 텍스트 (스토리 전용)",control:"text",table:{type:{summary:"string"},category:"Content"}}},args:{level:"h2",weight:"700",color:"#1a1a1a",text:"섹션 제목 예시"},render:a=>e.jsx(o,{...a,children:a.children??a.label??a.text??void 0})},r={name:"기본 H2",parameters:{docs:{description:{story:"가장 일반적인 섹션 제목입니다."}}}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",padding:"16px"},children:[e.jsx("h1",{style:{margin:"0",color:"#1a1a1a"},children:"H1 — 페이지 최상위 제목"}),e.jsx("h2",{style:{margin:"0",color:"#1a1a1a"},children:"H2 — 주요 섹션 제목"}),e.jsx("h3",{style:{margin:"0",color:"#1a1a1a"},children:"H3 — 섹션 내 소제목"}),e.jsx("h4",{style:{margin:"0",color:"#1a1a1a"},children:"H4 — 카드·위젯 제목"}),e.jsx("h5",{style:{margin:"0",color:"#1a1a1a"},children:"H5 — 세부 분류"}),e.jsx("h6",{style:{margin:"0",color:"#1a1a1a"},children:"H6 — 최소 단위 제목"})]}),name:"전체 레벨 비교",parameters:{controls:{disable:!0},docs:{description:{story:"H1부터 H6까지 기본 브라우저 크기 계층을 한눈에 비교합니다."}}}},t={name:"페이지 제목 (H1)",args:{level:"h1",text:"공지사항",weight:"800"},parameters:{docs:{description:{story:"페이지 단위 최상위 제목입니다. 페이지당 하나만 사용하세요."}}}};var s,l,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '기본 H2',
  parameters: {
    docs: {
      description: {
        story: '가장 일반적인 섹션 제목입니다.'
      }
    }
  }
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var c,m,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    padding: '16px'
  }}>
        <h1 style={{
      margin: '0',
      color: '#1a1a1a'
    }}>H1 — 페이지 최상위 제목</h1>
        <h2 style={{
      margin: '0',
      color: '#1a1a1a'
    }}>H2 — 주요 섹션 제목</h2>
        <h3 style={{
      margin: '0',
      color: '#1a1a1a'
    }}>H3 — 섹션 내 소제목</h3>
        <h4 style={{
      margin: '0',
      color: '#1a1a1a'
    }}>H4 — 카드·위젯 제목</h4>
        <h5 style={{
      margin: '0',
      color: '#1a1a1a'
    }}>H5 — 세부 분류</h5>
        <h6 style={{
      margin: '0',
      color: '#1a1a1a'
    }}>H6 — 최소 단위 제목</h6>
      </div>,
  name: '전체 레벨 비교',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'H1부터 H6까지 기본 브라우저 크기 계층을 한눈에 비교합니다.'
      }
    }
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,h,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '페이지 제목 (H1)',
  args: {
    level: 'h1',
    text: '공지사항',
    weight: '800'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '페이지 단위 최상위 제목입니다. 페이지당 하나만 사용하세요.'
      }
    }
  }
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const E=["Default","AllLevels","PageTitle"];export{n as AllLevels,r as Default,t as PageTitle,E as __namedExportsOrder,k as default};
