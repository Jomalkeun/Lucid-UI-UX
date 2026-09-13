import{j as x}from"./jsx-runtime-D_zvdyIk.js";import{d as w}from"./reference-types-4ftiVeOu.js";import{r as W}from"./index-BxXVWNx3.js";import{c as v}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const N={sm:"max-w-[600px]",md:"max-w-[960px]",lg:"max-w-[1280px]",xl:"max-w-[1920px]",full:"max-w-full"},o=W.forwardRef(({className:e,maxWidth:f="lg",children:y,...g},h)=>x.jsx("div",{ref:h,className:v("mx-auto w-full px-4",N[f],e),...g,children:y}));o.displayName="Container";o.__docgenInfo={description:"",methods:[],displayName:"Container",props:{maxWidth:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl' | 'full'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'full'"}]},description:"",defaultValue:{value:"'lg'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const C=w([{library:"Bootstrap",component:"Containers",url:"https://getbootstrap.com/docs/5.3/layout/containers/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Container",url:"https://www.chakra-ui.com/docs/components/container",usedFor:["comparison"],relation:"compared"}]),_={title:"Layout/Primitives/Container",component:o,tags:["autodocs","layout","custom-ui","ref:chakra-ui","ref:vuetify","ref:mui","ref:bootstrap"],parameters:{references:C,docs:{description:{component:`
## Container

**반응형 중앙 정렬 래퍼**입니다. 콘텐츠 최대 너비를 제한하고 좌우 여백을 일관되게 유지합니다.

---

### 언제 사용하나요?

| 용도 | 설명 |
|---|---|
| 페이지 최대 너비 제한 | 와이드 화면에서 콘텐츠가 너무 넓게 퍼지지 않도록 |
| 중앙 정렬 | \`margin: 0 auto\`로 항상 가운데 위치 |
| 반응형 패딩 | 좌우 여백 일관 유지 |

---

### 사이즈 가이드

| class | maxWidth |
|---|---|
| \`sm\` | 600px |
| \`md\` | 960px |
| \`lg\` | 1280px |
| \`xl\` | 1920px |
| \`full\` | 100% |
        `}}},argTypes:{maxWidth:{description:"콘텐츠 최대 너비",control:{type:"select"},options:["sm","md","lg","xl","full"],table:{type:{summary:"'sm' | 'md' | 'lg' | 'xl' | 'full'"},defaultValue:{summary:"'lg'"},category:"Size"}}},args:{maxWidth:"lg"},render:e=>x.jsx(o,{...e,children:e.children??e.label??e.text??void 0})},a={name:"기본 (Default)",parameters:{docs:{description:{story:"기본 1280px 최대 너비 컨테이너입니다. 대부분의 페이지 레이아웃에 사용합니다."}}}},r={name:"좁은 컨테이너 (Narrow)",args:{maxWidth:"sm"},parameters:{docs:{description:{story:"로그인·폼 등 포커스 레이아웃에 적합한 좁은 컨테이너입니다."}}}},t={name:"넓은 컨테이너 (Wide)",args:{maxWidth:"xl"},parameters:{docs:{description:{story:"대시보드나 전체 화면 레이아웃에 사용하는 와이드 컨테이너입니다."}}}};var s,n,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '기본 (Default)',
  parameters: {
    docs: {
      description: {
        story: '기본 1280px 최대 너비 컨테이너입니다. 대부분의 페이지 레이아웃에 사용합니다.'
      }
    }
  }
}`,...(m=(n=a.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var i,l,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '좁은 컨테이너 (Narrow)',
  args: {
    maxWidth: 'sm'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '로그인·폼 등 포커스 레이아웃에 적합한 좁은 컨테이너입니다.'
      }
    }
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,p,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '넓은 컨테이너 (Wide)',
  args: {
    maxWidth: 'xl'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '대시보드나 전체 화면 레이아웃에 사용하는 와이드 컨테이너입니다.'
      }
    }
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const k=["Default","Narrow","Wide"];export{a as Default,r as Narrow,t as Wide,k as __namedExportsOrder,_ as default};
