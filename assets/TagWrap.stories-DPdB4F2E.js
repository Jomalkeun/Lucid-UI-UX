import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as W}from"./index-BxXVWNx3.js";import{c as S}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const C={small:"gap-1",medium:"gap-1.5",large:"gap-2"},t=W.forwardRef(({className:e,size:r="medium",children:n,...j},b)=>a.jsx("div",{ref:b,className:S("flex flex-wrap items-center",C[r],e),...j,children:n}));t.displayName="TagWrap";t.__docgenInfo={description:"",methods:[],displayName:"TagWrap",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const M={title:"Atoms/Display/TagWrap",component:t,tags:["autodocs","display","ref:krds"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{variant:{description:"기본 Tag variant입니다. 개별 Tag에서 재정의 가능합니다.",control:{type:"select"},options:["default","outline","filled"],table:{category:"Appearance"}},tags:{description:"표시할 태그 목록입니다.",control:"object",table:{category:"Content"}}},args:{variant:"default",tags:[{label:"Vue 3"},{label:"TypeScript"},{label:"Storybook"},{label:"KRDS 2.0"}]},render:e=>a.jsx(t,{...e,children:e.children??e.label??e.text??void 0})},s={name:"기본 (Default)",parameters:{docs:{description:{story:"**기본 스타일 태그 묶음**입니다. 콘텐츠 카드의 메타 정보, 게시물 태그 목록에 사용합니다."}}}},i={render:()=>{const e=({children:r,...n})=>a.jsx("div",{...n,children:r});return a.jsxs(t,{children:[a.jsx(e,{variant:"filled",children:"공지"}),a.jsx(e,{variant:"outline",children:"이벤트"}),a.jsx(e,{variant:"default",children:"업데이트"}),a.jsx(e,{variant:"filled",children:"중요"}),a.jsx(e,{variant:"outline",children:"공개"})]})},name:"혼합 variant (Mixed Variants)",parameters:{docs:{description:{story:"**다양한 variant의 태그를 한 TagWrap 안에 혼합**하는 예시입니다. 게시판 목록에서 카테고리·상태·속성을 동시에 표현할 때 사용합니다."}},controls:{disable:!0}}},o={render:()=>{const e=({children:r,...n})=>a.jsx("div",{...n,children:r});return a.jsx("div",{style:{maxWidth:"400px"},children:a.jsxs(t,{children:[a.jsx(e,{children:"프론트엔드"}),a.jsx(e,{children:"백엔드"}),a.jsx(e,{children:"디자인"}),a.jsx(e,{children:"기획"}),a.jsx(e,{children:"마케팅"}),a.jsx(e,{children:"데이터"}),a.jsx(e,{children:"Tech"}),a.jsx(e,{children:"DevOps"}),a.jsx(e,{children:"보안"}),a.jsx(e,{children:"QA"})]})})},name:"많은 태그 (Many Tags)",parameters:{docs:{description:{story:"**태그가 많아 줄 바꿈이 발생하는 케이스**입니다. `TagWrap`이 자동으로 flex-wrap을 처리합니다."}},controls:{disable:!0}}},d={render:()=>{const e=({children:r,...n})=>a.jsx("div",{...n,children:r});return a.jsxs("div",{style:{width:"320px",border:"1px solid #E8E6DE",borderRadius:"8px",padding:"16px",background:"#fff"},children:[a.jsx("p",{style:{margin:"0 0 4px",fontSize:"11px",color:"#888"},children:"2026-06-10"}),a.jsx("h3",{style:{margin:"0 0 8px",fontSize:"15px",fontWeight:"600",color:"#1B1B19"},children:"Vue 3 컴포지션 API 완벽 가이드"}),a.jsx("p",{style:{margin:"0 0 12px",fontSize:"13px",color:"#555",lineHeight:"1.6"},children:"setup() 함수부터 Composable 패턴까지, 실무에서 바로 쓸 수 있는 Vue 3 최신 패턴을 소개합니다."}),a.jsxs(t,{children:[a.jsx(e,{children:"Vue 3"}),a.jsx(e,{children:"Composition API"}),a.jsx(e,{children:"TypeScript"})]})]})},name:"카드 내 사용 예시 (In Card)",parameters:{docs:{description:{story:"**콘텐츠 카드 하단에 TagWrap을 배치**하는 실무 사용 예시입니다."}},controls:{disable:!0}}};var l,p,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '기본 (Default)',
  parameters: {
    docs: {
      description: {
        story: '**기본 스타일 태그 묶음**입니다. 콘텐츠 카드의 메타 정보, 게시물 태그 목록에 사용합니다.'
      }
    }
  }
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var g,T,m;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const Tag = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    return <TagWrap>
        <Tag variant="filled">공지</Tag>
        <Tag variant="outline">이벤트</Tag>
        <Tag variant="default">업데이트</Tag>
        <Tag variant="filled">중요</Tag>
        <Tag variant="outline">공개</Tag>
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
}`,...(m=(T=i.parameters)==null?void 0:T.docs)==null?void 0:m.source}}};var x,u,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const Tag = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
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
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,v,y;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const Tag = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
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
      }}>Vue 3 컴포지션 API 완벽 가이드</h3>
        <p style={{
        margin: '0 0 12px',
        fontSize: '13px',
        color: '#555',
        lineHeight: '1.6'
      }}>
          setup() 함수부터 Composable 패턴까지, 실무에서 바로 쓸 수 있는 Vue 3 최신 패턴을 소개합니다.
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
}`,...(y=(v=d.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const R=["Default","MixedVariants","ManyTags","InCardContext"];export{s as Default,d as InCardContext,o as ManyTags,i as MixedVariants,R as __namedExportsOrder,M as default};
