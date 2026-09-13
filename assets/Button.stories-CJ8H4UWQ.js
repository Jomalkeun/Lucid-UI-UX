import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as R}from"./reference-types-4ftiVeOu.js";import{B as r}from"./button-B_kt0lNs.js";import{c as F}from"./createLucideIcon-Ct87QT5c.js";import{S as I}from"./search-BiWmW4bk.js";import{P as C}from"./plus-ClwFJ4cq.js";import{T}from"./trash-2-xZQMnfdL.js";import{D as _}from"./download-DHeW_uee.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DtBajwEi.js";import"./index-CkIaN0ex.js";import"./utils-DCADjnpI.js";import"./loader-circle-Db56uVXG.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],q=F("share-2",P);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],U=F("square-pen",A),V=R([{library:"Bootstrap",component:"Buttons",url:"https://getbootstrap.com/docs/5.3/components/buttons/",usedFor:["comparison"],relation:"compared"},{library:"U.S. Web Design System",component:"Button",url:"https://designsystem.digital.gov/components/button/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"GOV.UK Design System",component:"Button",url:"https://design-system.service.gov.uk/components/button/",usedFor:["behavior","accessibility","comparison"],relation:"compared"},{library:"KRDS",component:"Button",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-button--docs",usedFor:["design","behavior","api"],relation:"adapted"},{library:"shadcn/ui",component:"Button",url:"https://ui.shadcn.com/docs/components/button",usedFor:["comparison"],relation:"compared"},{library:"Mantine UI",component:"Buttons",url:"https://ui.mantine.dev/category/buttons/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."},{library:"Ant Design",component:"Button",url:"https://ant.design/components/button/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Button",url:"https://www.chakra-ui.com/docs/components/button",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Button",url:"https://quasar.dev/vue-components/button",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Button",url:"https://base-ui.com/react/components/button",usedFor:["comparison"],relation:"compared"}]),re={title:"Atoms/Inputs/Button",component:r,tags:["ref:bootstrap","autodocs","ref:shadcn-ui","ref:ant-design","ref:quasar","ref:chakra-ui","ref:base-ui","ref:mantine-ui","ref:govuk","ref:uswds"],parameters:{references:V,docs:{description:{component:"\n## Button\n\nKRDS 색상 토큰과 shadcn/ui 스타일의 `cva`, `asChild`, `forwardRef` 패턴을 결합한 기본 버튼입니다.\n주요 액션은 `primary`, 보조 액션은 `secondary`, 위험 액션은 `danger`를 사용합니다.\n\n### 접근성\n\n- 기본 `type`은 `button`입니다.\n- `loading` 상태에서는 `aria-busy`와 `aria-disabled`가 적용됩니다.\n- 아이콘 전용 버튼에는 `aria-label` 또는 `aria-labelledby`를 제공해야 합니다.\n        "}}},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","text","danger","icon"],table:{category:"Appearance"}},size:{control:"select",options:["xsmall","small","medium","large","xlarge"],table:{category:"Appearance"}},fullWidth:{control:"boolean",table:{category:"Layout"}},loading:{control:"boolean",table:{category:"State"}},disabled:{control:"boolean",table:{category:"State"}},children:{control:"text",table:{category:"Content"}}},args:{variant:"primary",size:"large",children:"확인",disabled:!1,loading:!1,fullWidth:!1}},a={name:"기본"},t={name:"Variant",render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3 p-4",children:[e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"tertiary",children:"Tertiary"}),e.jsx(r,{variant:"text",children:"Text"}),e.jsx(r,{variant:"danger",children:"Danger"}),e.jsx(r,{disabled:!0,children:"Disabled"})]}),parameters:{controls:{disable:!0}}},o={name:"Size",render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3 p-4",children:[e.jsx(r,{size:"xsmall",children:"xsmall"}),e.jsx(r,{size:"small",children:"small"}),e.jsx(r,{size:"medium",children:"medium"}),e.jsx(r,{size:"large",children:"large"}),e.jsx(r,{size:"xlarge",children:"xlarge"})]}),parameters:{controls:{disable:!0}}},n={name:"아이콘 포함",render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3 p-4",children:[e.jsx(r,{iconLeft:e.jsx(I,{}),children:"검색"}),e.jsx(r,{iconLeft:e.jsx(C,{}),children:"추가"}),e.jsx(r,{variant:"danger",iconLeft:e.jsx(T,{}),children:"삭제"}),e.jsx(r,{variant:"secondary",iconRight:e.jsx(_,{}),children:"다운로드"}),e.jsx(r,{variant:"secondary",iconRight:e.jsx(q,{}),children:"공유"})]}),parameters:{controls:{disable:!0}}},s={name:"아이콘 전용",render:()=>e.jsxs("div",{className:"flex items-center gap-3 p-4",children:[e.jsx(r,{variant:"icon",size:"small","aria-label":"수정",children:e.jsx(U,{})}),e.jsx(r,{variant:"icon",size:"medium","aria-label":"검색",children:e.jsx(I,{})}),e.jsx(r,{variant:"icon",size:"large","aria-label":"추가",children:e.jsx(C,{})})]}),parameters:{controls:{disable:!0}}},i={name:"로딩",render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3 p-4",children:[e.jsx(r,{loading:!0,children:"저장 중"}),e.jsx(r,{variant:"secondary",loading:!0,children:"처리 중"})]}),parameters:{controls:{disable:!0}}},c={name:"asChild 링크",render:()=>e.jsx(r,{variant:"secondary",asChild:!0,children:e.jsx("a",{href:"https://example.com",target:"_blank",rel:"noreferrer",children:"외부 링크로 이동"})}),parameters:{controls:{disable:!0}}};var l,d,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '기본'
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Variant',
  render: () => <div className="flex flex-wrap items-center gap-3 p-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="text">Text</Button>
      <Button variant="danger">Danger</Button>
      <Button disabled>Disabled</Button>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var x,h,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Size',
  render: () => <div className="flex flex-wrap items-center gap-3 p-4">
      <Button size="xsmall">xsmall</Button>
      <Button size="small">small</Button>
      <Button size="medium">medium</Button>
      <Button size="large">large</Button>
      <Button size="xlarge">xlarge</Button>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var y,B,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '아이콘 포함',
  render: () => <div className="flex flex-wrap items-center gap-3 p-4">
      <Button iconLeft={<Search />}>검색</Button>
      <Button iconLeft={<Plus />}>추가</Button>
      <Button variant="danger" iconLeft={<Trash2 />}>삭제</Button>
      <Button variant="secondary" iconRight={<Download />}>다운로드</Button>
      <Button variant="secondary" iconRight={<Share2 />}>공유</Button>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(f=(B=n.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var v,j,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '아이콘 전용',
  render: () => <div className="flex items-center gap-3 p-4">
      <Button variant="icon" size="small" aria-label="수정">
        <Edit />
      </Button>
      <Button variant="icon" size="medium" aria-label="검색">
        <Search />
      </Button>
      <Button variant="icon" size="large" aria-label="추가">
        <Plus />
      </Button>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(S=(j=s.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var z,k,w;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '로딩',
  render: () => <div className="flex flex-wrap items-center gap-3 p-4">
      <Button loading>저장 중</Button>
      <Button variant="secondary" loading>처리 중</Button>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var D,L,N;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'asChild 링크',
  render: () => <Button variant="secondary" asChild>
      <a href="https://example.com" target="_blank" rel="noreferrer">
        외부 링크로 이동
      </a>
    </Button>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(N=(L=c.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const ae=["Default","Variants","Sizes","WithIcon","IconOnly","Loading","AsChildLink"];export{c as AsChildLink,a as Default,s as IconOnly,i as Loading,o as Sizes,t as Variants,n as WithIcon,ae as __namedExportsOrder,re as default};
