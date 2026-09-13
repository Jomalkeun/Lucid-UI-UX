import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as P}from"./reference-types-4ftiVeOu.js";import{T as u}from"./Tabs-B2PBRafd.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BIfB_hJr.js";import"./index-Cuo70N6w.js";import"./index-D95NAxrO.js";import"./index-DTo5Pt6F.js";import"./index-DtBajwEi.js";import"./index-BKM4mA3Z.js";import"./index-DnJVWBh-.js";import"./index-BuIYde5q.js";import"./index-DCvtqWl1.js";import"./index-D5tP6kvT.js";import"./index-D_4yO-tZ.js";import"./index-CkIaN0ex.js";import"./utils-DCADjnpI.js";const C=P([{library:"GOV.UK Design System",component:"Tabs",url:"https://design-system.service.gov.uk/components/tabs/",usedFor:["behavior","accessibility","comparison"],relation:"compared"},{library:"Ark UI",component:"Tabs",url:"https://ark-ui.com/docs/components/tabs",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Radix UI",component:"Tabs",url:"https://www.radix-ui.com/primitives/docs/components/tabs",usedFor:["behavior","accessibility","api"],relation:"primitive"},{library:"KRDS",component:"Tab",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-tab--docs",usedFor:["design","behavior","api"],relation:"adapted"},{library:"Bootstrap",component:"Navs and tabs",url:"https://getbootstrap.com/docs/5.3/components/navs-tabs/",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"Tabs",url:"https://flowbite.com/docs/components/tabs/",usedFor:["comparison"],relation:"compared"},{library:"daisyUI",component:"Tabs",url:"https://daisyui.com/components/tabs/",usedFor:["comparison"],relation:"compared"},{library:"Ant Design",component:"Tabs",url:"https://ant.design/components/tabs/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Tabs",url:"https://www.chakra-ui.com/docs/components/tabs",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Tabs",url:"https://quasar.dev/vue-components/tabs",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Tabs",url:"https://base-ui.com/react/components/tabs",usedFor:["comparison"],relation:"compared"}]),M={title:"Molecules/Navigation/Tabs",component:u,tags:["autodocs","navigation","ref:krds","ref:chakra-ui","ref:shadcn-ui","ref:ark-ui","ref:daisy-ui","ref:ant-design","ref:flowbite","ref:vuetify","ref:mui","ref:bootstrap","ref:quasar","ref:base-ui","ref:radix-ui","ref:govuk"],parameters:{references:C,docs:{description:{component:"\n## Tabs\n\n**관련 콘텐츠를 탭으로 전환**하는 컴포넌트입니다.\n`Tab → TabList + TabContent` 구조에 `TabTrigger`와 `TabPanel`을 조합합니다.\n\n---\n\n### 구성 요소\n\n| 컴포넌트 | 역할 |\n|---|---|\n| `Tab` | 탭 상태 관리 루트. `variant`, `size`, `value`/`defaultValue` 설정 |\n| `TabList` | 탭 트리거 목록 래퍼 |\n| `TabTrigger` | 개별 탭 버튼. `value` prop 필수 |\n| `TabContent` | 탭 패널 목록 래퍼 |\n| `TabPanel` | 개별 탭 콘텐츠. `value` prop이 활성 탭과 일치할 때 표시 |\n\n---\n\n### 제어 방식\n\n| 방식 | 사용 prop |\n|---|---|\n| 비제어 (기본) | `defaultValue` — 초기 탭만 지정 |\n| 제어 | `value` + `v-model:value` — 외부 상태와 동기화 |\n\n---\n\n### variant / size\n\n| prop | 옵션 | 기본값 |\n|---|---|---|\n| `variant` | `'line'` | `'line'` |\n| `size` | `'full'`, `'auto'` 등 | `'full'` |\n\n---\n\n### 접근성(A11y) 가이드\n\n| 체크 | 항목 |\n|---|---|\n| ✅ | `TabTrigger`에 `role=\"tab\"`, `aria-selected`가 자동 선언됩니다. |\n| ✅ | `TabPanel`에 `role=\"tabpanel\"`, `aria-labelledby`가 자동 연결됩니다. |\n| ✅ | 키보드 `←`/`→` 화살표로 탭 간 이동이 지원됩니다. |\n        "}}},argTypes:{defaultValue:{description:"비제어 모드에서 초기 활성 탭의 `value`입니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"''"},category:"Content"}},items:{description:"탭 항목 배열입니다. `{ id, label, content }` 형태입니다.",control:"object",table:{type:{summary:"{ id: string; label: string; content: string }[]"},category:"Content"}},variant:{description:"탭 스타일 변형입니다.",control:{type:"select"},options:["line"],table:{type:{summary:"'line'"},defaultValue:{summary:"'line'"},category:"Appearance"}},size:{description:"탭 리스트의 너비 동작입니다.",control:{type:"select"},options:["full","auto"],table:{type:{summary:"'full' | 'auto'"},defaultValue:{summary:"'full'"},category:"Appearance"}}},args:{defaultValue:"all",variant:"line",size:"full",items:[{id:"all",label:"전체",content:"전체 목록입니다."},{id:"active",label:"노출중",content:"현재 노출 중인 콘텐츠입니다."},{id:"reserved",label:"예약",content:"예약된 콘텐츠입니다."},{id:"ended",label:"종료",content:"종료된 콘텐츠입니다."}]},render:n=>e.jsx(u,{...n,children:n.children??n.label??n.text??void 0})},s={name:"기본 (Default)",args:{defaultValue:"all",items:[{id:"all",label:"전체",content:"전체 목록입니다."},{id:"active",label:"노출중",content:"현재 노출 중인 콘텐츠입니다."},{id:"reserved",label:"예약",content:"예약된 콘텐츠입니다."},{id:"ended",label:"종료",content:"종료된 콘텐츠입니다."}]},parameters:{docs:{description:{story:"**4개 탭의 기본 상태**입니다. `defaultValue`로 초기 활성 탭을 지정합니다."}}}},l={name:"2개 탭 (Two Tabs)",args:{defaultValue:"active",items:[{id:"active",label:"노출중",content:"현재 노출 중인 콘텐츠입니다."},{id:"ended",label:"종료",content:"종료된 콘텐츠입니다."}]},parameters:{docs:{description:{story:"**2개 탭** 구성입니다. 탭이 2개 이하인 경우 `Radio` 또는 `Toggle`의 사용도 고려하세요."}}}},d={render:()=>{const n=({children:r,...a})=>e.jsx("div",{...a,children:r}),p=({children:r,...a})=>e.jsx("div",{...a,children:r}),i=({children:r,...a})=>e.jsx("div",{...a,children:r}),o=({children:r,...a})=>e.jsx("div",{...a,children:r}),b=({children:r,...a})=>e.jsx("div",{...a,children:r});return e.jsxs(n,{"default-value":"active",children:[e.jsxs(p,{children:[e.jsx(i,{value:"active",children:"노출중"}),e.jsx(i,{value:"reserved",children:"예약"}),e.jsx(i,{value:"ended",disabled:!0,children:"종료 (비활성)"})]}),e.jsxs(b,{children:[e.jsx(o,{value:"active",children:e.jsx("div",{style:{padding:"16px",fontSize:"13px",color:"#6E6D67"},children:"노출 중인 콘텐츠입니다."})}),e.jsx(o,{value:"reserved",children:e.jsx("div",{style:{padding:"16px",fontSize:"13px",color:"#6E6D67"},children:"예약된 콘텐츠입니다."})}),e.jsx(o,{value:"ended",children:e.jsx("div",{style:{padding:"16px",fontSize:"13px",color:"#6E6D67"},children:"종료된 콘텐츠입니다."})})]})]})},name:"비활성 탭 포함 (With Disabled Tab)",parameters:{docs:{description:{story:"**`TabTrigger`에 `disabled: true`를 설정하면 해당 탭 클릭이 차단**됩니다."}},controls:{disable:!0}}},c={render:()=>{const n=({children:a,...t})=>e.jsx("div",{...t,children:a}),p=({children:a,...t})=>e.jsx("div",{...t,children:a}),i=({children:a,...t})=>e.jsx("div",{...t,children:a}),o=({children:a,...t})=>e.jsx("div",{...t,children:a}),b=({children:a,...t})=>e.jsx("div",{...t,children:a}),r="active";return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"16px"},children:[e.jsxs("p",{style:{fontSize:"13px",color:"#555"},children:["활성 탭: ",e.jsx("strong",{style:{color:"#1B1B19"},children:r})]}),e.jsxs(n,{"v-modelvalue":r,children:[e.jsxs(p,{children:[e.jsx(i,{value:"active",children:"노출중"}),e.jsx(i,{value:"reserved",children:"예약"}),e.jsx(i,{value:"ended",children:"종료"})]}),e.jsxs(b,{children:[e.jsx(o,{value:"active",children:e.jsx("div",{style:{padding:"16px",fontSize:"13px",color:"#6E6D67"},children:"노출 중인 콘텐츠입니다."})}),e.jsx(o,{value:"reserved",children:e.jsx("div",{style:{padding:"16px",fontSize:"13px",color:"#6E6D67"},children:"예약된 콘텐츠입니다."})}),e.jsx(o,{value:"ended",children:e.jsx("div",{style:{padding:"16px",fontSize:"13px",color:"#6E6D67"},children:"종료된 콘텐츠입니다."})})]})]})]})},name:"외부 상태 제어 (Controlled)",parameters:{docs:{description:{story:"\n**`v-model:value`로 활성 탭을 외부 상태와 동기화**합니다.\nURL 파라미터·라우터와 탭 상태를 연동하거나, 외부 버튼으로 프로그래밍적으로 탭을 변경할 때 사용합니다.\n\n> ⚠️ `v-model`이 아닌 `v-model:value`를 사용해야 합니다. Tab의 업데이트 이벤트는 `update:value`입니다.\n        "}},controls:{disable:!0}}};var v,m,T;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '기본 (Default)',
  args: {
    defaultValue: 'all',
    items: [{
      id: 'all',
      label: '전체',
      content: '전체 목록입니다.'
    }, {
      id: 'active',
      label: '노출중',
      content: '현재 노출 중인 콘텐츠입니다.'
    }, {
      id: 'reserved',
      label: '예약',
      content: '예약된 콘텐츠입니다.'
    }, {
      id: 'ended',
      label: '종료',
      content: '종료된 콘텐츠입니다.'
    }]
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`**4개 탭의 기본 상태**입니다. \\\`defaultValue\\\`로 초기 활성 탭을 지정합니다.\`
      }
    }
  }
}`,...(T=(m=s.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};var g,x,y;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '2개 탭 (Two Tabs)',
  args: {
    defaultValue: 'active',
    items: [{
      id: 'active',
      label: '노출중',
      content: '현재 노출 중인 콘텐츠입니다.'
    }, {
      id: 'ended',
      label: '종료',
      content: '종료된 콘텐츠입니다.'
    }]
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`**2개 탭** 구성입니다. 탭이 2개 이하인 경우 \\\`Radio\\\` 또는 \\\`Toggle\\\`의 사용도 고려하세요.\`
      }
    }
  }
}`,...(y=(x=l.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var h,f,j;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const Tab = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const TabList = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const TabTrigger = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const TabPanel = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const TabContent = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    return <Tab default-value="active">
        <TabList>
          <TabTrigger value="active">노출중</TabTrigger>
          <TabTrigger value="reserved">예약</TabTrigger>
          <TabTrigger value="ended" disabled={true}>종료 (비활성)</TabTrigger>
        </TabList>
        <TabContent>
          <TabPanel value="active">
            <div style={{
            padding: '16px',
            fontSize: '13px',
            color: '#6E6D67'
          }}>노출 중인 콘텐츠입니다.</div>
          </TabPanel>
          <TabPanel value="reserved">
            <div style={{
            padding: '16px',
            fontSize: '13px',
            color: '#6E6D67'
          }}>예약된 콘텐츠입니다.</div>
          </TabPanel>
          <TabPanel value="ended">
            <div style={{
            padding: '16px',
            fontSize: '13px',
            color: '#6E6D67'
          }}>종료된 콘텐츠입니다.</div>
          </TabPanel>
        </TabContent>
      </Tab>;
  },
  name: '비활성 탭 포함 (With Disabled Tab)',
  parameters: {
    docs: {
      description: {
        story: \`**\\\`TabTrigger\\\`에 \\\`disabled: true\\\`를 설정하면 해당 탭 클릭이 차단**됩니다.\`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(j=(f=d.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var D,S,z;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const Tab = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const TabList = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const TabTrigger = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const TabPanel = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const TabContent = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const activeTab = 'active';
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      padding: '16px'
    }}>
        <p style={{
        fontSize: '13px',
        color: '#555'
      }}>
          활성 탭: <strong style={{
          color: '#1B1B19'
        }}>{activeTab}</strong>
        </p>
        <Tab v-modelvalue={activeTab}>
          <TabList>
            <TabTrigger value="active">노출중</TabTrigger>
            <TabTrigger value="reserved">예약</TabTrigger>
            <TabTrigger value="ended">종료</TabTrigger>
          </TabList>
          <TabContent>
            <TabPanel value="active">
              <div style={{
              padding: '16px',
              fontSize: '13px',
              color: '#6E6D67'
            }}>노출 중인 콘텐츠입니다.</div>
            </TabPanel>
            <TabPanel value="reserved">
              <div style={{
              padding: '16px',
              fontSize: '13px',
              color: '#6E6D67'
            }}>예약된 콘텐츠입니다.</div>
            </TabPanel>
            <TabPanel value="ended">
              <div style={{
              padding: '16px',
              fontSize: '13px',
              color: '#6E6D67'
            }}>종료된 콘텐츠입니다.</div>
            </TabPanel>
          </TabContent>
        </Tab>
      </div>;
  },
  name: '외부 상태 제어 (Controlled)',
  parameters: {
    docs: {
      description: {
        story: \`
**\\\`v-model:value\\\`로 활성 탭을 외부 상태와 동기화**합니다.
URL 파라미터·라우터와 탭 상태를 연동하거나, 외부 버튼으로 프로그래밍적으로 탭을 변경할 때 사용합니다.

> ⚠️ \\\`v-model\\\`이 아닌 \\\`v-model:value\\\`를 사용해야 합니다. Tab의 업데이트 이벤트는 \\\`update:value\\\`입니다.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(z=(S=c.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};const Q=["Default","TwoTabs","WithDisabledTab","Controlled"];export{c as Controlled,s as Default,l as TwoTabs,d as WithDisabledTab,Q as __namedExportsOrder,M as default};
