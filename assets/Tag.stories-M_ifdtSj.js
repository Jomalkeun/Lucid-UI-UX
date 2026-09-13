import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as G}from"./reference-types-4ftiVeOu.js";import{r as N}from"./index-BxXVWNx3.js";import{c as m}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const f="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-krds-gray-30 bg-krds-gray-5 text-krds-gray-90 text-krds-body-xs font-medium leading-none whitespace-nowrap",r=N.forwardRef(({className:a,variant:n="deletable",deleteDisabled:t=!1,onDelete:s,href:l="#",target:u="_self",children:g,...b},y)=>n==="link"?e.jsx("a",{ref:y,href:l,target:u,rel:u==="_blank"?"noopener noreferrer":void 0,className:m(f,"hover:bg-krds-primary-5 hover:border-krds-primary-30 hover:text-krds-primary-base transition-colors cursor-pointer no-underline",a),...b,children:g}):e.jsxs("span",{ref:y,className:m(f,a),...b,children:[g,e.jsxs("button",{type:"button",disabled:t,onClick:s,"aria-label":"삭제",className:m("inline-flex items-center justify-center w-3.5 h-3.5 rounded-sm text-krds-gray-50 hover:text-krds-gray-90 transition-colors",t&&"opacity-40 cursor-not-allowed pointer-events-none"),children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12",fill:"none","aria-hidden":"true",className:"w-3 h-3",children:e.jsx("path",{d:"M9 3L3 9M3 3l6 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),e.jsx("span",{className:"sr-only",children:"삭제"})]})]}));r.displayName="Tag";r.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{variant:{required:!1,tsType:{name:"union",raw:"'deletable' | 'link'",elements:[{name:"literal",value:"'deletable'"},{name:"literal",value:"'link'"}]},description:"",defaultValue:{value:"'deletable'",computed:!1}},deleteDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},href:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#'",computed:!1}},target:{required:!1,tsType:{name:"union",raw:"'_self' | '_blank'",elements:[{name:"literal",value:"'_self'"},{name:"literal",value:"'_blank'"}]},description:"",defaultValue:{value:"'_self'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const z=G([{library:"U.S. Web Design System",component:"Tag",url:"https://designsystem.digital.gov/components/tag/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"GOV.UK Design System",component:"Tag",url:"https://design-system.service.gov.uk/components/tag/",usedFor:["design","accessibility","comparison"],relation:"compared"},{library:"KRDS",component:"Tag",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-tag--docs",usedFor:["design","behavior","api"],relation:"adapted"},{library:"Ant Design",component:"Tag",url:"https://ant.design/components/tag/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Tag",url:"https://www.chakra-ui.com/docs/components/tag",usedFor:["comparison"],relation:"compared"}]),E={title:"Atoms/Display/Tag",component:r,tags:["autodocs","display","ref:krds","ref:chakra-ui","ref:ant-design","ref:govuk","ref:uswds"],parameters:{references:z,docs:{description:{component:"\n## Tag\n\n**키워드·카테고리·선택값을 시각적으로 표현**하는 태그 컴포넌트입니다.\n삭제 가능한 `deletable` 타입과 링크형 `link` 타입 두 가지를 제공합니다.\n\n---\n\n### variant\n\n| variant | 설명 | 주요 동작 |\n|---|---|---|\n| `deletable` (기본) | 삭제 버튼이 내장된 태그 | `@delete` 이벤트 emit |\n| `link` | 클릭 시 링크로 이동하는 태그 | `href`, `target` prop 사용 |\n\n---\n\n### TagWrap\n\n여러 태그를 나란히 배치할 때 `TagWrap`으로 감쌉니다.\n- `size` prop: `'small'`, `'medium'`(기본), `'large'`\n\n---\n\n### 접근성(A11y) 가이드\n\n| 체크 | 항목 |\n|---|---|\n| ✅ | `deletable` 태그의 삭제 버튼에 스크린리더 전용 \"삭제\" 텍스트가 포함됩니다. |\n| ✅ | `link` 태그는 `<a>` 태그로 렌더링됩니다. |\n| ⚠️ | `deleteDisabled: true`이면 삭제 버튼이 `disabled` 처리됩니다. |\n        "}}},argTypes:{variant:{description:"태그의 타입입니다.",control:{type:"select"},options:["deletable","link"],table:{type:{summary:"'deletable' | 'link'"},defaultValue:{summary:"'deletable'"},category:"Appearance"}},label:{description:"태그 텍스트입니다. (스토리 전용 편의 arg — 실제 컴포넌트는 `default` 슬롯 사용)",control:"text",table:{type:{summary:"string"},category:"Content"}},href:{description:'`variant: "link"` 일 때 이동할 URL입니다.',control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'#'"},category:"Content"}},target:{description:'`variant: "link"` 일 때 링크 타겟입니다.',control:{type:"select"},options:["_self","_blank"],table:{type:{summary:"'_self' | '_blank'"},defaultValue:{summary:"'_self'"},category:"Content"}},deleteDisabled:{description:"`true`이면 삭제 버튼이 비활성화됩니다.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}}},args:{variant:"deletable",label:"5G",deleteDisabled:!1},render:a=>e.jsx(r,{...a,children:a.children??a.label??a.text??void 0})},i={name:"삭제 가능 (Deletable)",args:{variant:"deletable",label:"5G"},parameters:{docs:{description:{story:"**삭제 버튼이 내장된 기본 태그**입니다. 태그 우측의 ✕ 버튼 클릭 시 `@delete` 이벤트가 emit됩니다. 삭제 로직은 부모 컴포넌트에서 처리합니다."}}}},o={name:"삭제 불가 (Delete Disabled)",args:{variant:"deletable",label:"무제한",deleteDisabled:!0},parameters:{docs:{description:{story:"**`deleteDisabled: true`로 삭제 버튼을 비활성화**합니다. 필수 태그나 변경 불가한 항목에 사용합니다."}}}},d={name:"링크 태그 (As Link)",args:{variant:"link",label:"이벤트",href:"#"},parameters:{docs:{description:{story:'**`variant: "link"`이면 `<a>` 태그로 렌더링**됩니다. 카테고리 탐색이나 관련 페이지 이동에 사용합니다.'}}}},c={render:()=>{const a=({children:s,...l})=>e.jsx("div",{...l,children:s}),n=["5G","무제한","멤버십","이벤트","프로모션"],t=s=>{n.value=n.value.filter(l=>l!==s)};return e.jsxs(a,{size:"medium",children:[e.jsx(r,{variant:"deletable",onDelete:t(tag),children:tag},tag),n.length===0&&e.jsx("p",{style:{fontSize:"13px",color:"#999",margin:"0"},children:"모든 태그가 삭제되었습니다."})]})},name:"태그 목록 (Tag List)",parameters:{docs:{description:{story:`
**\`TagWrap\`으로 여러 태그를 묶고 삭제 이벤트를 처리**하는 실무 패턴입니다.
각 태그의 \`@delete\` 이벤트에서 태그를 배열에서 제거합니다.

> 💡 실제 서비스에서는 삭제 후 API 호출과 함께 상태를 업데이트하세요.
        `}},controls:{disable:!0}}},p={render:()=>{const a=({children:n,...t})=>e.jsx("div",{...t,children:n});return e.jsxs(a,{size:"medium",children:[e.jsx(r,{variant:"link",href:"#",children:"5G"}),e.jsx(r,{variant:"link",href:"#",children:"무제한"}),e.jsx(r,{variant:"link",href:"#",children:"멤버십 혜택"}),e.jsx(r,{variant:"link",href:"#",target:"_blank",children:"외부 이벤트"})]})},name:"링크 태그 목록 (Link Tag List)",parameters:{docs:{description:{story:"**링크형 태그 목록**입니다. 검색 결과 연관 키워드, 블로그 태그 등 탐색 경로로 사용합니다."}},controls:{disable:!0}}};var v,k,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '삭제 가능 (Deletable)',
  args: {
    variant: 'deletable',
    label: '5G'
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`**삭제 버튼이 내장된 기본 태그**입니다. 태그 우측의 ✕ 버튼 클릭 시 \\\`@delete\\\` 이벤트가 emit됩니다. 삭제 로직은 부모 컴포넌트에서 처리합니다.\`
      }
    }
  }
}`,...(h=(k=i.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var T,x,D;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '삭제 불가 (Delete Disabled)',
  args: {
    variant: 'deletable',
    label: '무제한',
    deleteDisabled: true
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`**\\\`deleteDisabled: true\\\`로 삭제 버튼을 비활성화**합니다. 필수 태그나 변경 불가한 항목에 사용합니다.\`
      }
    }
  }
}`,...(D=(x=o.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var w,j,L;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '링크 태그 (As Link)',
  args: {
    variant: 'link',
    label: '이벤트',
    href: '#'
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`**\\\`variant: "link"\\\`이면 \\\`<a>\\\` 태그로 렌더링**됩니다. 카테고리 탐색이나 관련 페이지 이동에 사용합니다.\`
      }
    }
  }
}`,...(L=(j=d.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var _,W,S;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const TagWrap = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const tags = ['5G', '무제한', '멤버십', '이벤트', '프로모션'];
    const remove = tag => {
      tags.value = tags.value.filter(t => t !== tag);
    };
    return <TagWrap size="medium">
        <Tag key={tag} variant="deletable" onDelete={remove(tag)}>{tag}</Tag>
        {tags.length === 0 && <p style={{
        fontSize: '13px',
        color: '#999',
        margin: '0'
      }}>모든 태그가 삭제되었습니다.</p>}
      </TagWrap>;
  },
  name: '태그 목록 (Tag List)',
  parameters: {
    docs: {
      description: {
        story: \`
**\\\`TagWrap\\\`으로 여러 태그를 묶고 삭제 이벤트를 처리**하는 실무 패턴입니다.
각 태그의 \\\`@delete\\\` 이벤트에서 태그를 배열에서 제거합니다.

> 💡 실제 서비스에서는 삭제 후 API 호출과 함께 상태를 업데이트하세요.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(S=(W=c.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};var A,R,V;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const TagWrap = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    return <TagWrap size="medium">
        <Tag variant="link" href="#">5G</Tag>
        <Tag variant="link" href="#">무제한</Tag>
        <Tag variant="link" href="#">멤버십 혜택</Tag>
        <Tag variant="link" href="#" target="_blank">외부 이벤트</Tag>
      </TagWrap>;
  },
  name: '링크 태그 목록 (Link Tag List)',
  parameters: {
    docs: {
      description: {
        story: \`**링크형 태그 목록**입니다. 검색 결과 연관 키워드, 블로그 태그 등 탐색 경로로 사용합니다.\`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(V=(R=p.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};const K=["Deletable","DeletableDisabled","AsLink","TagList","LinkTagList"];export{d as AsLink,i as Deletable,o as DeletableDisabled,p as LinkTagList,c as TagList,K as __namedExportsOrder,E as default};
