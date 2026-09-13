import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as w}from"./reference-types-4ftiVeOu.js";function t({children:n,...l}){return e.jsx("div",{...l,children:n})}t.__docgenInfo={description:"",methods:[],displayName:"InPageNavigation",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const d=[{href:"#section-1",label:"개요"},{href:"#section-2",label:"사용 지침"},{href:"#section-3",label:"컴포넌트 명세",active:!0},{href:"#section-4",label:"접근성 가이드"}],S=w([{library:"U.S. Web Design System",component:"In-page navigation",url:"https://designsystem.digital.gov/components/in-page-navigation/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"PatternFly",component:"Jump links",url:"https://www.patternfly.org/components/jump-links/",usedFor:["behavior","accessibility","comparison"],relation:"compared"},{library:"KRDS",component:"InPageNavigation",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-inpagenavigation--docs",usedFor:["design","behavior","api"],relation:"adapted"},{library:"Mantine UI",component:"Table of contents",url:"https://ui.mantine.dev/category/toc/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."}]),A={title:"Molecules/Navigation/InPageNavigation",component:t,tags:["autodocs","navigation","ref:krds","ref:mantine-ui","ref:patternfly","ref:uswds"],parameters:{references:S,docs:{story:{height:"380px"},description:{component:`
## InPageNavigation

긴 단일 페이지에서 **각 섹션으로 빠르게 이동할 수 있는 앵커 링크 목록**을 제공하는 컴포넌트입니다.
페이지 목차 역할을 하며, 스크롤 위치에 따라 현재 섹션이 강조됩니다.

---

### 언제 사용하나요?

| 상황 | 권장 |
|---|---|
| 문서·가이드처럼 섹션이 긴 단일 페이지 | **InPageNavigation** ✅ |
| 멀티 페이지 사이트 내비게이션 | \`SideNavigation\` |
| 탭 전환 방식 콘텐츠 | \`Tabs\` |

---

### 사용 지침

- **items** 배열에 각 섹션의 \`href\`(앵커)와 \`label\`(표시 텍스트)을 설정하세요.
- **caption** 은 목차 영역 위에 표시되는 설명 텍스트입니다.
- **actionText** 를 설정하면 목차 하단에 액션 버튼이 추가됩니다. \`@actionClick\` 이벤트로 처리하세요.
- **scrollDown** 을 \`true\`로 설정하면 스크롤 시 상단 고정 헤더 높이를 보정합니다.
- 각 섹션 요소에 대응하는 \`id\`를 반드시 설정하세요. (예: \`id="section-1"\`)

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | \`<nav>\` 태그로 렌더링되어 랜드마크 역할이 선언됩니다. |
| ✅ | 현재 섹션 링크에 \`aria-current="true"\`가 설정됩니다. |
| ✅ | 키보드 Tab으로 링크 간 이동이 가능합니다. |
        `}}},argTypes:{items:{description:"내비게이션 아이템 목록입니다. `href`(앵커)와 `label`(텍스트)은 필수, `active`는 현재 섹션 표시용입니다.",control:"object",table:{type:{summary:"NavigationItem[]"},defaultValue:{summary:"[]"},category:"Content"}},caption:{description:"목차 영역 위에 표시되는 설명 텍스트입니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"(없음)"},category:"Content"}},title:{description:"페이지 제목 텍스트입니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"(없음)"},category:"Content"}},actionText:{description:"목차 하단에 표시할 액션 버튼 텍스트입니다. 설정 시 버튼이 노출됩니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"(없음)"},category:"Content"}},scrollDown:{description:"스크롤 시 상단 고정 헤더 높이를 보정합니다.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}}},args:{caption:"이 페이지에서는",items:d,scrollDown:!1},render:n=>e.jsx(t,{...n,children:n.children??n.label??n.text??void 0})},a={name:"기본 (Default)",parameters:{docs:{description:{story:"\n**기본 InPageNavigation** 상태입니다.\n`items` 배열의 각 링크를 클릭하면 해당 `id`를 가진 섹션으로 스크롤됩니다.\n`active: true`인 항목이 현재 섹션으로 강조 표시됩니다.\n        "}}}},o={name:"제목 포함",args:{caption:"이 페이지에서는",title:"Button 컴포넌트",items:d},parameters:{docs:{description:{story:"**페이지 제목과 목차를 함께 표시**하는 상태입니다."}}}},r={name:"액션 버튼 포함",args:{caption:"이 페이지에서는",items:d,actionText:"전체 다운로드"},parameters:{docs:{description:{story:`
**목차 하단에 액션 버튼**이 추가된 상태입니다.
PDF 내보내기, 전체 보기 등 페이지 수준의 액션을 연결할 때 사용하세요.
\`@actionClick\` 이벤트로 클릭을 처리합니다.
        `}}}},i={name:"섹션 다수",args:{caption:"문서 목차",items:[{href:"#s1",label:"1. 개요"},{href:"#s2",label:"2. 설치"},{href:"#s3",label:"3. 기본 사용법",active:!0},{href:"#s4",label:"4. Props"},{href:"#s5",label:"5. Events"},{href:"#s6",label:"6. Slots"},{href:"#s7",label:"7. 접근성"}]},parameters:{docs:{description:{story:`
**섹션이 많은 문서 페이지**에 적용한 예시입니다.
목차가 길어질 경우 스크롤 처리 여부를 디자인 단계에서 검토하세요.
        `}}}},s={render:()=>e.jsx(t,{caption:"이 페이지의 구성",title:"장애아동수당",items:officialItems,actionText:"온라인 신청하기",children:"장애아동수당 외 1건"}),name:"정보 텍스트 슬롯",parameters:{docs:{description:{story:"\n**`#infoText` 슬롯**을 사용해 제목 아래 보조 정보를 표시하는 구성입니다.\n`title`, `actionText`와 함께 사용하여 실제 서비스 페이지의 목차 패턴을 구현할 수 있습니다.\n        "}},controls:{disable:!0}}},c={render:()=>{const l=()=>{console.log("온라인 신청하기 클릭")};return e.jsxs("div",{children:[e.jsxs(t,{caption:"이 페이지의 구성",title:"스크롤 기능 테스트",items:officialItems,actionText:"온라인 신청하기",scrollContainerRef:{current:null},onActionClick:l,children:["장애아동수당 외 ",e.jsx("strong",{children:"1건"})]}),e.jsx("div",{style:{borderRadius:"16px",padding:"56px 0",margin:"32px",minHeight:"700px",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#f5f5f5"},children:e.jsxs("div",{ref:"scrollContainerRef",style:{position:"relative",margin:"0 auto",backgroundColor:"white",minHeight:"500px",padding:"32px",overflow:"auto",maxHeight:"400px"},children:[e.jsxs("div",{style:{marginBottom:"32px"},children:[e.jsx("h1",{children:"페이지 제목"}),e.jsx("p",{children:"페이지 내용이 여기에 표시됩니다."})]}),e.jsxs("div",{id:item.href.replace("#",""),style:{height:"200px",marginBottom:"32px",padding:"32px",backgroundColor:"#f0f0f0"},children:[e.jsx("h2",{children:item.label}),e.jsxs("p",{children:[item.label," 내용..."]})]},item.href)]})})]})},name:"스크롤 컨테이너 연동",parameters:{docs:{story:{height:"900px"},description:{story:"\n**스크롤 컨테이너 연동** 예시입니다. `scrollContainerRef`로 특정 스크롤 영역을 지정하면 스크롤 위치에 따라 해당 섹션의 네비게이션 아이템이 자동으로 `active` 상태가 됩니다.\n\n- `@actionClick` 이벤트로 액션 버튼 클릭을 처리합니다.\n- `#infoText` 슬롯으로 제목 아래 보조 정보를 추가합니다.\n        "}},layout:"fullscreen",controls:{disable:!0}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '기본 (Default)',
  parameters: {
    docs: {
      description: {
        story: \`
**기본 InPageNavigation** 상태입니다.
\\\`items\\\` 배열의 각 링크를 클릭하면 해당 \\\`id\\\`를 가진 섹션으로 스크롤됩니다.
\\\`active: true\\\`인 항목이 현재 섹션으로 강조 표시됩니다.
        \`
      }
    }
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,f,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '제목 포함',
  args: {
    caption: '이 페이지에서는',
    title: 'Button 컴포넌트',
    items: defaultItems
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`**페이지 제목과 목차를 함께 표시**하는 상태입니다.\`
      }
    }
  }
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,x,v;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '액션 버튼 포함',
  args: {
    caption: '이 페이지에서는',
    items: defaultItems,
    actionText: '전체 다운로드'
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**목차 하단에 액션 버튼**이 추가된 상태입니다.
PDF 내보내기, 전체 보기 등 페이지 수준의 액션을 연결할 때 사용하세요.
\\\`@actionClick\\\` 이벤트로 클릭을 처리합니다.
        \`
      }
    }
  }
}`,...(v=(x=r.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var b,C,I;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '섹션 다수',
  args: {
    caption: '문서 목차',
    items: [{
      href: '#s1',
      label: '1. 개요'
    }, {
      href: '#s2',
      label: '2. 설치'
    }, {
      href: '#s3',
      label: '3. 기본 사용법',
      active: true
    }, {
      href: '#s4',
      label: '4. Props'
    }, {
      href: '#s5',
      label: '5. Events'
    }, {
      href: '#s6',
      label: '6. Slots'
    }, {
      href: '#s7',
      label: '7. 접근성'
    }]
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**섹션이 많은 문서 페이지**에 적용한 예시입니다.
목차가 길어질 경우 스크롤 처리 여부를 디자인 단계에서 검토하세요.
        \`
      }
    }
  }
}`,...(I=(C=i.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var k,T,j;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <InPageNavigation caption="이 페이지의 구성" title="장애아동수당" items={officialItems} actionText="온라인 신청하기">
        {/* vue-slot */}장애아동수당 외 1건
      </InPageNavigation>,
  name: '정보 텍스트 슬롯',
  parameters: {
    docs: {
      description: {
        story: \`
**\\\`#infoText\\\` 슬롯**을 사용해 제목 아래 보조 정보를 표시하는 구성입니다.
\\\`title\\\`, \\\`actionText\\\`와 함께 사용하여 실제 서비스 페이지의 목차 패턴을 구현할 수 있습니다.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(j=(T=s.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var R,N,P;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const scrollContainerRef = null;
    const handleActionClick = () => {
      console.log('온라인 신청하기 클릭');
    };
    return <div>
        <InPageNavigation caption="이 페이지의 구성" title="스크롤 기능 테스트" items={officialItems} actionText="온라인 신청하기" scrollContainerRef={{
        current: scrollContainerRef
      }} onActionClick={handleActionClick}>
          {/* vue-slot */}
            장애아동수당 외 <strong>1건</strong>
          
        </InPageNavigation>

        <div style={{
        borderRadius: '16px',
        padding: '56px 0',
        margin: '32px',
        minHeight: '700px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5'
      }}>
          <div ref="scrollContainerRef" style={{
          position: 'relative',
          margin: '0 auto',
          backgroundColor: 'white',
          minHeight: '500px',
          padding: '32px',
          overflow: 'auto',
          maxHeight: '400px'
        }}>
            <div style={{
            marginBottom: '32px'
          }}>
              <h1>페이지 제목</h1>
              <p>페이지 내용이 여기에 표시됩니다.</p>
            </div>
            <div key={item.href} id={item.href.replace('#', '')} style={{
            height: '200px',
            marginBottom: '32px',
            padding: '32px',
            backgroundColor: '#f0f0f0'
          }}>
              <h2>{item.label}</h2>
              <p>{item.label} 내용...</p>
            </div>
          </div>
        </div>
      </div>;
  },
  name: '스크롤 컨테이너 연동',
  parameters: {
    docs: {
      story: {
        height: '900px'
      },
      description: {
        story: \`
**스크롤 컨테이너 연동** 예시입니다. \\\`scrollContainerRef\\\`로 특정 스크롤 영역을 지정하면 스크롤 위치에 따라 해당 섹션의 네비게이션 아이템이 자동으로 \\\`active\\\` 상태가 됩니다.

- \\\`@actionClick\\\` 이벤트로 액션 버튼 클릭을 처리합니다.
- \\\`#infoText\\\` 슬롯으로 제목 아래 보조 정보를 추가합니다.
        \`
      }
    },
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  }
}`,...(P=(N=c.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};const B=["Default","WithTitle","WithActionButton","ManyItems","WithInfoText","WithScrollContainer"];export{a as Default,i as ManyItems,r as WithActionButton,s as WithInfoText,c as WithScrollContainer,o as WithTitle,B as __namedExportsOrder,A as default};
