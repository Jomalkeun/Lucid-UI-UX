import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R}from"./index-BxXVWNx3.js";import{d as C,c as p}from"./reference-types-CC3VHbJD.js";import{T as t}from"./Tag-BC7MmZz0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DCADjnpI.js";const V=C([{library:"U.S. Web Design System",component:"Tag",url:"https://designsystem.digital.gov/components/tag/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"GOV.UK Design System",component:"Tag",url:"https://design-system.service.gov.uk/components/tag/",usedFor:["design","accessibility","comparison"],relation:"compared"},{library:"KRDS",component:"Tag",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-tag--docs",usedFor:["design","behavior","api"],relation:"adapted"},p("Ant Design","Tag","https://ant.design/components/tag/"),p("Chakra UI","Tag","https://www.chakra-ui.com/docs/components/tag")]),O={title:"Atoms/Display/Tag",component:t,tags:["autodocs","display","ref:krds","ref:chakra-ui","ref:ant-design","ref:govuk","ref:uswds"],parameters:{references:V,docs:{description:{component:"\n## Tag\n\n**키워드·카테고리·선택값을 시각적으로 표현**하는 태그 컴포넌트입니다.\n삭제 가능한 `deletable` 타입과 링크형 `link` 타입 두 가지를 제공합니다.\n\n---\n\n### variant\n\n| variant | 설명 | 주요 동작 |\n|---|---|---|\n| `deletable` (기본) | 삭제 버튼이 내장된 태그 | `@delete` 이벤트 emit |\n| `link` | 클릭 시 링크로 이동하는 태그 | `href`, `target` prop 사용 |\n\n---\n\n### TagWrap\n\n여러 태그를 나란히 배치할 때 `TagWrap`으로 감쌉니다.\n- `size` prop: `'small'`, `'medium'`(기본), `'large'`\n\n---\n\n### 접근성(A11y) 가이드\n\n| 체크 | 항목 |\n|---|---|\n| ✅ | `deletable` 태그의 삭제 버튼에 스크린리더 전용 \"삭제\" 텍스트가 포함됩니다. |\n| ✅ | `link` 태그는 `<a>` 태그로 렌더링됩니다. |\n| ⚠️ | `deleteDisabled: true`이면 삭제 버튼이 `disabled` 처리됩니다. |\n        "}}},argTypes:{variant:{description:"태그의 타입입니다.",control:{type:"select"},options:["deletable","link"],table:{type:{summary:"'deletable' | 'link'"},defaultValue:{summary:"'deletable'"},category:"Appearance"}},label:{description:"태그 텍스트입니다. (스토리 전용 편의 arg — 실제 컴포넌트는 `default` 슬롯 사용)",control:"text",table:{type:{summary:"string"},category:"Content"}},href:{description:'`variant: "link"` 일 때 이동할 URL입니다.',control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'#'"},category:"Content"}},target:{description:'`variant: "link"` 일 때 링크 타겟입니다.',control:{type:"select"},options:["_self","_blank"],table:{type:{summary:"'_self' | '_blank'"},defaultValue:{summary:"'_self'"},category:"Content"}},deleteDisabled:{description:"`true`이면 삭제 버튼이 비활성화됩니다.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},deleteLabel:{description:"삭제 버튼의 접근 가능한 이름입니다. 항목 맥락을 포함할 수 있습니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'삭제'"},category:"Accessibility"}}},args:{variant:"deletable",label:"5G",deleteDisabled:!1},render:a=>e.jsx(t,{...a,children:a.children??a.label??a.text??void 0})},r={name:"삭제 가능 (Deletable)",args:{variant:"deletable",label:"5G"},parameters:{docs:{description:{story:"**삭제 버튼이 내장된 기본 태그**입니다. 태그 우측의 ✕ 버튼 클릭 시 `@delete` 이벤트가 emit됩니다. 삭제 로직은 부모 컴포넌트에서 처리합니다."}}}},s={name:"삭제 불가 (Delete Disabled)",args:{variant:"deletable",label:"무제한",deleteDisabled:!0},parameters:{docs:{description:{story:"**`deleteDisabled: true`로 삭제 버튼을 비활성화**합니다. 필수 태그나 변경 불가한 항목에 사용합니다."}}}},l={name:"맥락 있는 삭제 이름",args:{variant:"deletable",label:"5G",deleteLabel:"5G 필터 삭제"}},i={name:"링크 태그 (As Link)",args:{variant:"link",label:"이벤트",href:"#"},parameters:{docs:{description:{story:'**`variant: "link"`이면 `<a>` 태그로 렌더링**됩니다. 카테고리 탐색이나 관련 페이지 이동에 사용합니다.'}}}},o={render:()=>{const[a,c]=R.useState(["5G","무제한","멤버십","이벤트","프로모션"]);return e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:[a.map(n=>e.jsx(t,{variant:"deletable",deleteLabel:`${n} 삭제`,onDelete:()=>c(w=>w.filter(_=>_!==n)),children:n},n)),a.length===0&&e.jsx("p",{style:{fontSize:"13px",color:"#999",margin:"0"},children:"모든 태그가 삭제되었습니다."})]})},name:"태그 목록 (Tag List)",parameters:{docs:{description:{story:`
**\`TagWrap\`으로 여러 태그를 묶고 삭제 이벤트를 처리**하는 실무 패턴입니다.
각 태그의 \`@delete\` 이벤트에서 태그를 배열에서 제거합니다.

> 💡 실제 서비스에서는 삭제 후 API 호출과 함께 상태를 업데이트하세요.
        `}},controls:{disable:!0}}},d={render:()=>{const a=({children:c,...n})=>e.jsx("div",{...n,children:c});return e.jsxs(a,{size:"medium",children:[e.jsx(t,{variant:"link",href:"#",children:"5G"}),e.jsx(t,{variant:"link",href:"#",children:"무제한"}),e.jsx(t,{variant:"link",href:"#",children:"멤버십 혜택"}),e.jsx(t,{variant:"link",href:"#",target:"_blank",children:"외부 이벤트"})]})},name:"링크 태그 목록 (Link Tag List)",parameters:{docs:{description:{story:"**링크형 태그 목록**입니다. 검색 결과 연관 키워드, 블로그 태그 등 탐색 경로로 사용합니다."}},controls:{disable:!0}}};var m,g,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var u,y,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var k,v,T;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '맥락 있는 삭제 이름',
  args: {
    variant: 'deletable',
    label: '5G',
    deleteLabel: '5G 필터 삭제'
  } as any
}`,...(T=(v=l.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var h,x,D;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(D=(x=i.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var L,S,j;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = React.useState(['5G', '무제한', '멤버십', '이벤트', '프로모션']);
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    }}>
        {tags.map(tag => <Tag key={tag} variant="deletable" deleteLabel={\`\${tag} 삭제\`} onDelete={() => setTags(current => current.filter(item => item !== tag))}>
            {tag}
          </Tag>)}
        {tags.length === 0 && <p style={{
        fontSize: '13px',
        color: '#999',
        margin: '0'
      }}>
            모든 태그가 삭제되었습니다.
          </p>}
      </div>;
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
}`,...(j=(S=o.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var G,A,W;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const TagWrap = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    return <TagWrap size="medium">
        <Tag variant="link" href="#">
          5G
        </Tag>
        <Tag variant="link" href="#">
          무제한
        </Tag>
        <Tag variant="link" href="#">
          멤버십 혜택
        </Tag>
        <Tag variant="link" href="#" target="_blank">
          외부 이벤트
        </Tag>
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
}`,...(W=(A=d.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};const P=["Deletable","DeletableDisabled","ContextualDeleteLabel","AsLink","TagList","LinkTagList"];export{i as AsLink,l as ContextualDeleteLabel,r as Deletable,s as DeletableDisabled,d as LinkTagList,o as TagList,P as __namedExportsOrder,O as default};
