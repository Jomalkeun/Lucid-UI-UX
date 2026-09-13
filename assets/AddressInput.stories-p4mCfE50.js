import{j as e}from"./jsx-runtime-D_zvdyIk.js";function i({children:t,...r}){return e.jsx("div",{...r,children:t})}i.__docgenInfo={description:"",methods:[],displayName:"AddressInput",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const v={title:"Molecules/Forms/AddressInput",component:i,tags:["autodocs","form","krds-extended"],parameters:{docs:{description:{component:`
## AddressInput (패턴)

**우편번호 검색 + 기본 주소 + 상세 주소**로 구성된 국내 주소 입력 패턴입니다.
일반적으로 주소 검색 버튼을 클릭하면 Daum 우편번호 API나 내부 주소 검색 모달을 열어 우편번호와 기본 주소를 자동으로 채웁니다.

---

### 구성 요소

| 필드 | 역할 | 편집 가능 여부 |
|---|---|---|
| 우편번호 | API로 자동 입력 | ❌ (readonly) |
| 기본 주소 | API로 자동 입력 | ❌ (readonly) |
| 상세 주소 | 사용자가 직접 입력 | ✅ |

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | 각 인풋에 시각적·연결된 레이블(\`<label>\`)을 제공하세요. |
| ✅ | 주소 검색 버튼은 \`type="button"\`으로 지정합니다. |
| ⚠️ | 검색 결과 모달이 열릴 때 포커스를 모달 내부로 이동시키세요. |
        `}}},argTypes:{label:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},status:{control:"select",options:["default","success","warning","danger","info"],table:{category:"State"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},disabled:{control:"boolean",table:{category:"State"}},loading:{control:"boolean",table:{category:"State"}},density:{control:"inline-radio",options:["compact","comfortable","spacious"],table:{category:"Layout"}}},args:{label:"AddressInput",description:"AddressInput 컴포넌트의 기본 상태입니다.",status:"default",size:"md",disabled:!1,loading:!1,density:"comfortable"},render:t=>e.jsx(i,{...t,children:t.children??t.label??t.text??void 0})},a={name:"기본 (Default)",parameters:{docs:{description:{story:'**빈 상태의 주소 입력 패턴**입니다. "주소 검색" 버튼 클릭으로 우편번호·기본 주소가 채워집니다.'}}}},d={render:()=>{const t=({children:l,...o})=>e.jsx("div",{...o,children:l}),r=({children:l,...o})=>e.jsx("div",{...o,children:l});return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",width:"400px"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(t,{placeholder:"우편번호",modelValue:"03000",style:{width:"120px",flexShrink:"0"},readonly:!0}),e.jsx(r,{variant:"secondary",size:"medium",children:"주소 재검색"})]}),e.jsx(t,{placeholder:"기본 주소",modelValue:"서울특별시 종로구 세종대로 209",readonly:!0}),e.jsx(t,{placeholder:"상세 주소를 입력하세요",modelValue:"정부서울청사 13층"})]})},name:"입력 완료 (Filled)",parameters:{docs:{description:{story:"**주소 검색 후 모든 필드가 채워진 상태**입니다. 상세 주소만 사용자가 직접 수정할 수 있습니다."}},controls:{disable:!0}}},s={render:()=>{const t=({children:l,...o})=>e.jsx("div",{...o,children:l}),r=({children:l,...o})=>e.jsx("div",{...o,children:l});return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"400px"},children:[e.jsxs("div",{children:[e.jsxs("label",{style:{display:"block",fontSize:"13px",fontWeight:"500",color:"#333",marginBottom:"4px"},children:["우편번호 ",e.jsx("span",{style:{color:"#C32F2F"},children:"*"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(t,{id:"postal",placeholder:"우편번호",style:{width:"120px",flexShrink:"0"},readonly:!0}),e.jsx(r,{variant:"secondary",size:"medium",children:"주소 검색"})]})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"13px",fontWeight:"500",color:"#333",marginBottom:"4px"},children:"기본 주소"}),e.jsx(t,{id:"addr-base",placeholder:"주소 검색 후 자동 입력됩니다",readonly:!0})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"13px",fontWeight:"500",color:"#333",marginBottom:"4px"},children:"상세 주소"}),e.jsx(t,{id:"addr-detail",placeholder:"동·호수·층 등을 입력하세요"})]})]})},name:"레이블 포함 (With Labels)",parameters:{docs:{description:{story:"**각 필드에 레이블과 필수 표시(*)를 추가**한 완성형 패턴입니다. 실제 회원가입·배송지 등록 폼에서 사용합니다."}},controls:{disable:!0}}};var n,c,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '기본 (Default)',
  parameters: {
    docs: {
      description: {
        story: '**빈 상태의 주소 입력 패턴**입니다. "주소 검색" 버튼 클릭으로 우편번호·기본 주소가 채워집니다.'
      }
    }
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var x,u,m;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const TextInput = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const Button = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      width: '400px'
    }}>
        <div style={{
        display: 'flex',
        gap: '8px'
      }}>
          <TextInput placeholder="우편번호" modelValue="03000" style={{
          width: '120px',
          flexShrink: '0'
        }} readonly />
          <Button variant="secondary" size="medium">주소 재검색</Button>
        </div>
        <TextInput placeholder="기본 주소" modelValue="서울특별시 종로구 세종대로 209" readonly />
        <TextInput placeholder="상세 주소를 입력하세요" modelValue="정부서울청사 13층" />
      </div>;
  },
  name: '입력 완료 (Filled)',
  parameters: {
    docs: {
      description: {
        story: '**주소 검색 후 모든 필드가 채워진 상태**입니다. 상세 주소만 사용자가 직접 수정할 수 있습니다.'
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(m=(u=d.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var y,h,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const TextInput = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const Button = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      width: '400px'
    }}>
        <div>
          <label style={{
          display: 'block',
          fontSize: '13px',
          fontWeight: '500',
          color: '#333',
          marginBottom: '4px'
        }}>
            우편번호 <span style={{
            color: '#C32F2F'
          }}>*</span>
          </label>
          <div style={{
          display: 'flex',
          gap: '8px'
        }}>
            <TextInput id="postal" placeholder="우편번호" style={{
            width: '120px',
            flexShrink: '0'
          }} readonly />
            <Button variant="secondary" size="medium">주소 검색</Button>
          </div>
        </div>
        <div>
          <label style={{
          display: 'block',
          fontSize: '13px',
          fontWeight: '500',
          color: '#333',
          marginBottom: '4px'
        }}>기본 주소</label>
          <TextInput id="addr-base" placeholder="주소 검색 후 자동 입력됩니다" readonly />
        </div>
        <div>
          <label style={{
          display: 'block',
          fontSize: '13px',
          fontWeight: '500',
          color: '#333',
          marginBottom: '4px'
        }}>상세 주소</label>
          <TextInput id="addr-detail" placeholder="동·호수·층 등을 입력하세요" />
        </div>
      </div>;
  },
  name: '레이블 포함 (With Labels)',
  parameters: {
    docs: {
      description: {
        story: '**각 필드에 레이블과 필수 표시(*)를 추가**한 완성형 패턴입니다. 실제 회원가입·배송지 등록 폼에서 사용합니다.'
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const g=["Default","Filled","WithLabels"];export{a as Default,d as Filled,s as WithLabels,g as __namedExportsOrder,v as default};
