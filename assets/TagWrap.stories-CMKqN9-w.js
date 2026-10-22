import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as k,c}from"./reference-types-CC3VHbJD.js";import{T as a}from"./Tag-BC7MmZz0.js";import{r as w}from"./index-BxXVWNx3.js";import{c as z}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const A={small:"gap-1",medium:"gap-1.5",large:"gap-2"},r=w.forwardRef(({className:n,size:V="medium",label:d,children:I,...M},R)=>e.jsx("div",{ref:R,role:d?"group":void 0,"aria-label":d,className:z("flex flex-wrap items-center",A[V],n),...M,children:I}));r.displayName="TagWrap";r.__docgenInfo={description:"",methods:[],displayName:"TagWrap",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Gives a collection of tags a navigable, named group for assistive technology."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const D=k([c("Chakra UI","Wrap","https://chakra-ui.com/docs/components/wrap"),c("MUI","Stack","https://mui.com/material-ui/react-stack/")]),G={title:"Atoms/Display/TagWrap",component:r,tags:["autodocs","display","ref:krds"],parameters:{references:D,docs:{description:{component:`
## TagWrap

**여러 개의 \`Tag\`를 감싸는 래퍼** 컴포넌트입니다.
\`TagWrap\`은 태그들이 줄 바꿈·간격 등 레이아웃을 올바르게 유지하도록 도와줍니다.

---

### 구성 방법

\`\`\`html
<TagWrap>
  <Tag>Vue 3</Tag>
  <Tag variant="outline">TypeScript</Tag>
  <Tag variant="filled">Storybook</Tag>
</TagWrap>
\`\`\`

---

### 사용 지침

- 콘텐츠 카드, 검색 결과, 목록 아이템에서 **메타 정보를 태그로 표시**할 때 사용합니다.
- 태그가 3개 이상이면 \`TagWrap\`으로 감싸 자동 줄 바꿈을 적용하세요.
- 제거 가능한 태그(필터 칩)는 \`CheckboxChip\`이나 별도 커스텀 UI를 사용하세요.
        `}}},argTypes:{size:{description:"태그 사이의 간격입니다.",control:{type:"select"},options:["small","medium","large"],table:{category:"Appearance",defaultValue:{summary:"'medium'"}}},label:{description:"태그 그룹의 접근 가능한 이름입니다. 지정하면 group 역할을 사용합니다.",control:"text",table:{category:"Accessibility",type:{summary:"string"}}}},args:{size:"medium",label:"선택한 필터"},render:n=>e.jsx(r,{...n,children:n.children??n.label??n.text??void 0})},s={name:"기본 (Default)",parameters:{docs:{description:{story:"**기본 스타일 태그 묶음**입니다. 콘텐츠 카드의 메타 정보, 게시물 태그 목록에 사용합니다."}}}},t={name:"이름 있는 태그 그룹",render:()=>e.jsxs(r,{label:"선택한 필터",children:[e.jsx(a,{children:"지역: 서울"}),e.jsx(a,{children:"상태: 진행 중"})]})},o={render:()=>e.jsxs(r,{children:[e.jsx(a,{children:"공지"}),e.jsx(a,{children:"이벤트"}),e.jsx(a,{children:"업데이트"}),e.jsx(a,{children:"중요"}),e.jsx(a,{children:"공개"})]}),name:"혼합 variant (Mixed Variants)",parameters:{docs:{description:{story:"**다양한 variant의 태그를 한 TagWrap 안에 혼합**하는 예시입니다. 게시판 목록에서 카테고리·상태·속성을 동시에 표현할 때 사용합니다."}},controls:{disable:!0}}},i={render:()=>e.jsx("div",{style:{maxWidth:"400px"},children:e.jsxs(r,{children:[e.jsx(a,{children:"프론트엔드"}),e.jsx(a,{children:"백엔드"}),e.jsx(a,{children:"디자인"}),e.jsx(a,{children:"기획"}),e.jsx(a,{children:"마케팅"}),e.jsx(a,{children:"데이터"}),e.jsx(a,{children:"Tech"}),e.jsx(a,{children:"DevOps"}),e.jsx(a,{children:"보안"}),e.jsx(a,{children:"QA"})]})}),name:"많은 태그 (Many Tags)",parameters:{docs:{description:{story:"**태그가 많아 줄 바꿈이 발생하는 케이스**입니다. `TagWrap`이 자동으로 flex-wrap을 처리합니다."}},controls:{disable:!0}}},p={render:()=>e.jsxs("div",{style:{width:"320px",border:"1px solid #E8E6DE",borderRadius:"8px",padding:"16px",background:"#fff"},children:[e.jsx("p",{style:{margin:"0 0 4px",fontSize:"11px",color:"#888"},children:"2026-06-10"}),e.jsx("h3",{style:{margin:"0 0 8px",fontSize:"15px",fontWeight:"600",color:"#1B1B19"},children:"Vue 3 컴포지션 API 완벽 가이드"}),e.jsx("p",{style:{margin:"0 0 12px",fontSize:"13px",color:"#555",lineHeight:"1.6"},children:"setup() 함수부터 Composable 패턴까지, 실무에서 바로 쓸 수 있는 Vue 3 최신 패턴을 소개합니다."}),e.jsxs(r,{children:[e.jsx(a,{children:"Vue 3"}),e.jsx(a,{children:"Composition API"}),e.jsx(a,{children:"TypeScript"})]})]}),name:"카드 내 사용 예시 (In Card)",parameters:{docs:{description:{story:"**콘텐츠 카드 하단에 TagWrap을 배치**하는 실무 사용 예시입니다."}},controls:{disable:!0}}};var l,m,g;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '기본 (Default)',
  parameters: {
    docs: {
      description: {
        story: '**기본 스타일 태그 묶음**입니다. 콘텐츠 카드의 메타 정보, 게시물 태그 목록에 사용합니다.'
      }
    }
  }
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var T,u,x;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '이름 있는 태그 그룹',
  render: () => <TagWrap label="선택한 필터">
      <Tag>지역: 서울</Tag>
      <Tag>상태: 진행 중</Tag>
    </TagWrap>
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,f,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    return <TagWrap>
        <Tag>공지</Tag>
        <Tag>이벤트</Tag>
        <Tag>업데이트</Tag>
        <Tag>중요</Tag>
        <Tag>공개</Tag>
      </TagWrap>;
  },
  name: '혼합 variant (Mixed Variants)',
  parameters: {
    docs: {
      description: {
        story: '**다양한 variant의 태그를 한 TagWrap 안에 혼합**하는 예시입니다. 게시판 목록에서 카테고리·상태·속성을 동시에 표현할 때 사용합니다.'
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var j,W,b;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      maxWidth: '400px'
    }}>
        <TagWrap>
          <Tag>프론트엔드</Tag>
          <Tag>백엔드</Tag>
          <Tag>디자인</Tag>
          <Tag>기획</Tag>
          <Tag>마케팅</Tag>
          <Tag>데이터</Tag>
          <Tag>Tech</Tag>
          <Tag>DevOps</Tag>
          <Tag>보안</Tag>
          <Tag>QA</Tag>
        </TagWrap>
      </div>;
  },
  name: '많은 태그 (Many Tags)',
  parameters: {
    docs: {
      description: {
        story: '**태그가 많아 줄 바꿈이 발생하는 케이스**입니다. \`TagWrap\`이 자동으로 flex-wrap을 처리합니다.'
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(b=(W=i.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};var v,S,C;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      width: '320px',
      border: '1px solid #E8E6DE',
      borderRadius: '8px',
      padding: '16px',
      background: '#fff'
    }}>
        <p style={{
        margin: '0 0 4px',
        fontSize: '11px',
        color: '#888'
      }}>2026-06-10</p>
        <h3 style={{
        margin: '0 0 8px',
        fontSize: '15px',
        fontWeight: '600',
        color: '#1B1B19'
      }}>
          Vue 3 컴포지션 API 완벽 가이드
        </h3>
        <p style={{
        margin: '0 0 12px',
        fontSize: '13px',
        color: '#555',
        lineHeight: '1.6'
      }}>
          setup() 함수부터 Composable 패턴까지, 실무에서 바로 쓸 수 있는 Vue 3 최신 패턴을
          소개합니다.
        </p>
        <TagWrap>
          <Tag>Vue 3</Tag>
          <Tag>Composition API</Tag>
          <Tag>TypeScript</Tag>
        </TagWrap>
      </div>;
  },
  name: '카드 내 사용 예시 (In Card)',
  parameters: {
    docs: {
      description: {
        story: '**콘텐츠 카드 하단에 TagWrap을 배치**하는 실무 사용 예시입니다.'
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(C=(S=p.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const O=["Default","NamedGroup","MixedVariants","ManyTags","InCardContext"];export{s as Default,p as InCardContext,i as ManyTags,o as MixedVariants,t as NamedGroup,O as __namedExportsOrder,G as default};
