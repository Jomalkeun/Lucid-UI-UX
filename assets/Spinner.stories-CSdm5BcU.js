import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as D,c as r}from"./reference-types-CC3VHbJD.js";import{r as R}from"./index-BxXVWNx3.js";import{c as A}from"./index-CkIaN0ex.js";import{c as F}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const V=A("inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent",{variants:{size:{sm:"h-4 w-4",md:"h-5 w-5",lg:"h-6 w-6"}},defaultVariants:{size:"md"}}),s=R.forwardRef(({className:n,size:L,label:c,ariaLabel:z,...I},N)=>{const l=z??c??"로딩 중";return e.jsxs("div",{ref:N,role:"status","aria-label":l,className:F("inline-flex items-center gap-2 text-krds-primary-50",n),...I,children:[e.jsx("span",{className:V({size:L}),"aria-hidden":"true"}),e.jsx("span",{className:"sr-only",children:l}),c&&e.jsx("span",{className:"text-krds-body-sm text-krds-gray-70","aria-hidden":"true",children:c})]})});s.displayName="Spinner";s.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{label:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"Announces a contextual loading message without changing visible copy."}},composes:["VariantProps"]};const q=D([{library:"KRDS",component:"Spinner",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-spinner--docs",usedFor:["design","behavior","api"],relation:"adapted"},r("Bootstrap","Spinners","https://getbootstrap.com/docs/5.3/components/spinners/"),r("Flowbite","Spinner","https://flowbite.com/docs/components/spinner/"),r("daisyUI","Loading","https://daisyui.com/components/loading/"),r("Ant Design","Spin","https://ant.design/components/spin/"),r("Chakra UI","Spinner","https://www.chakra-ui.com/docs/components/spinner"),r("Quasar","Spinners","https://quasar.dev/vue-components/spinners")]),U={title:"Atoms/Display/Spinner",component:s,tags:["autodocs","display","ref:krds","ref:chakra-ui","ref:shadcn-ui","ref:daisy-ui","ref:ant-design","ref:flowbite","ref:bootstrap","ref:quasar"],parameters:{references:q,docs:{description:{component:`
## Spinner

**비동기 작업의 진행 중 상태**를 시각적으로 표현하는 로딩 인디케이터 컴포넌트입니다.

---

### 사용 지침

- **\`label\` prop**: 스피너 옆에 표시되는 텍스트입니다. 생략하면 스피너만 표시됩니다.
- 스피너 내부에는 항상 스크린리더 전용 "로딩 중" 텍스트(\`<span class="sr-only">\`)가 포함됩니다.
- 긴 작업에는 Spinner와 함께 진행 상태(퍼센트/단계)를 안내하는 것을 권장합니다.

---

### 언제 사용하나요?

| 상황 | 권장 |
|---|---|
| 데이터 조회 중 | **Spinner** ✅ |
| 파일 업로드 진행 | ProgressBar 병행 권장 |
| 전체 페이지 로딩 | Spinner + 오버레이 |
| 버튼 클릭 후 처리 중 | 버튼 내 소형 Spinner |

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | 스크린리더 전용 "로딩 중" 텍스트가 항상 포함됩니다. |
| ✅ | \`label\` prop으로 추가 맥락("데이터를 불러오는 중입니다")을 제공할 수 있습니다. |
| ⚠️ | Spinner가 사라진 후 포커스가 적절한 요소로 이동하도록 관리하세요. |
        `}}},argTypes:{size:{description:"스피너 아이콘 크기",control:{type:"select"},options:["sm","md","lg"],table:{type:{summary:"'sm' | 'md' | 'lg'"},defaultValue:{summary:"'md'"},category:"Appearance"}},label:{description:"스피너 옆에 표시되는 텍스트입니다. 생략하면 스피너 아이콘만 렌더링됩니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"''"},category:"Content"}},ariaLabel:{description:'스크린리더에 알릴 로딩 상태. 생략하면 label 또는 "로딩 중"을 사용합니다.',control:"text",table:{type:{summary:"string"},category:"Accessibility"}}},args:{label:"로딩 중"},render:n=>e.jsx(s,{...n,children:n.children??n.label??n.text??void 0})},a={name:"기본 (Default)",args:{label:"로딩 중"},parameters:{docs:{description:{story:"**기본 스피너**입니다. `label` prop으로 로딩 상태를 텍스트로 함께 안내합니다."}}}},t={name:"레이블 없음 (No Label)",args:{label:""},parameters:{docs:{description:{story:`
**아이콘만 표시**되는 스피너입니다.
공간이 좁거나 버튼 내부처럼 텍스트가 불필요한 컨텍스트에 사용합니다.
스크린리더 전용 "로딩 중" 텍스트는 항상 내부에 유지됩니다.
        `}}}},o={name:"상세 메시지 (Custom Label)",args:{label:"데이터를 불러오는 중입니다..."},parameters:{docs:{description:{story:"**시간이 걸릴 수 있는 작업**에서는 구체적인 메시지로 사용자 불안을 줄이세요."}}}},i={name:"접근성 상태 안내",args:{label:"파일을 업로드하는 중입니다",ariaLabel:"파일 3개를 업로드하는 중입니다",size:"sm"}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsxs("section",{children:[e.jsx("p",{style:{margin:"0 0 12px",fontSize:"12px",fontWeight:"600",color:"#888"},children:"전체 영역 로딩"}),e.jsx("div",{style:{width:"100%",height:"120px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid #e0e0e0",borderRadius:"8px",background:"#fafafa"},children:e.jsx(s,{label:"데이터를 불러오는 중입니다"})})]}),e.jsxs("section",{children:[e.jsx("p",{style:{margin:"0 0 12px",fontSize:"12px",fontWeight:"600",color:"#888"},children:"버튼 내 소형 스피너"}),e.jsxs("button",{type:"button",style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"8px 16px",background:"#0064FF",color:"#fff",border:"none",borderRadius:"4px",fontSize:"14px",cursor:"default"},children:[e.jsx(s,{}),"저장 중..."]})]})]}),name:"사용 맥락 예시 (In Context)",parameters:{docs:{description:{story:"**실제 사용 맥락에서의 Spinner 배치 패턴**입니다. 전체 영역 로딩과 버튼 내 인라인 로딩을 비교합니다."}},controls:{disable:!0}}};var d,m,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '기본 (Default)',
  args: {
    label: '로딩 중'
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`**기본 스피너**입니다. \\\`label\\\` prop으로 로딩 상태를 텍스트로 함께 안내합니다.\`
      }
    }
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var b,x,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '레이블 없음 (No Label)',
  args: {
    label: ''
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**아이콘만 표시**되는 스피너입니다.
공간이 좁거나 버튼 내부처럼 텍스트가 불필요한 컨텍스트에 사용합니다.
스크린리더 전용 "로딩 중" 텍스트는 항상 내부에 유지됩니다.
        \`
      }
    }
  }
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var g,y,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '상세 메시지 (Custom Label)',
  args: {
    label: '데이터를 불러오는 중입니다...'
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`**시간이 걸릴 수 있는 작업**에서는 구체적인 메시지로 사용자 불안을 줄이세요.\`
      }
    }
  }
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var S,j,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '접근성 상태 안내',
  args: {
    label: '파일을 업로드하는 중입니다',
    ariaLabel: '파일 3개를 업로드하는 중입니다',
    size: 'sm'
  } as any
}`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var k,v,C;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px'
  }}>
      <section>
        <p style={{
        margin: '0 0 12px',
        fontSize: '12px',
        fontWeight: '600',
        color: '#888'
      }}>
          전체 영역 로딩
        </p>
        <div style={{
        width: '100%',
        height: '120px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        background: '#fafafa'
      }}>
          <Spinner label="데이터를 불러오는 중입니다" />
        </div>
      </section>

      <section>
        <p style={{
        margin: '0 0 12px',
        fontSize: '12px',
        fontWeight: '600',
        color: '#888'
      }}>
          버튼 내 소형 스피너
        </p>
        <button type="button" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        background: '#0064FF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        fontSize: '14px',
        cursor: 'default'
      }}>
          <Spinner />
          저장 중...
        </button>
      </section>
    </div>,
  name: '사용 맥락 예시 (In Context)',
  parameters: {
    docs: {
      description: {
        story: \`**실제 사용 맥락에서의 Spinner 배치 패턴**입니다. 전체 영역 로딩과 버튼 내 인라인 로딩을 비교합니다.\`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(C=(v=p.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};const K=["Default","NoLabel","CustomLabel","ContextualAnnouncement","InContext"];export{i as ContextualAnnouncement,o as CustomLabel,a as Default,p as InContext,t as NoLabel,K as __namedExportsOrder,U as default};
