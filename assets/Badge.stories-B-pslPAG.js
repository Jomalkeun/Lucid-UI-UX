import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as P}from"./reference-types-4ftiVeOu.js";import{B as a}from"./Badge-D_EghROS.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CkIaN0ex.js";import"./utils-DCADjnpI.js";const n=(r,i,o)=>({library:r,component:i,url:o,usedFor:["comparison"],relation:"compared",note:"동일하거나 유사한 컴포넌트의 제공 범위와 명명 방식을 비교했습니다."}),_=P([{library:"KRDS",component:"Badge",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-badge--docs",usedFor:["design","behavior","api"],relation:"adapted"},n("Chakra UI","Badge","https://chakra-ui.com/docs/components/badge"),n("shadcn/ui","Badge","https://ui.shadcn.com/docs/components/badge"),n("daisyUI","Badge","https://daisyui.com/components/badge/"),n("Ant Design","Badge","https://ant.design/components/badge/"),n("Flowbite","Badge","https://flowbite.com/docs/components/badge/"),n("Vuetify","Badge","https://vuetifyjs.com/en/components/badges/"),n("MUI","Badge","https://mui.com/material-ui/react-badge/"),n("Bootstrap","Badge","https://getbootstrap.com/docs/5.3/components/badge/"),n("Quasar","Badge","https://quasar.dev/vue-components/badge/"),{library:"Chakra UI",component:"Badge",url:"https://www.chakra-ui.com/docs/components/badge",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Badge",url:"https://quasar.dev/vue-components/badge",usedFor:["comparison"],relation:"compared"}]),Y={title:"Atoms/Display/Badge",component:a,tags:["autodocs","display","ref:krds","ref:chakra-ui","ref:shadcn-ui","ref:daisy-ui","ref:ant-design","ref:flowbite","ref:vuetify","ref:mui","ref:bootstrap","ref:quasar"],parameters:{references:_,docs:{description:{component:`
## Badge

**상태·분류·수량 등 짧은 정보를 강조**하여 전달하는 인라인 레이블 컴포넌트입니다.
콘텐츠 행 안에 삽입하거나, \`BadgeWrapper\`로 묶어 여러 뱃지를 나란히 배치할 수 있습니다.

---

### 언제 사용하나요?

| 용도 | 예시 |
|---|---|
| 처리 상태 표시 | 처리중 / 완료 / 실패 |
| 콘텐츠 분류 | 공지 / 이벤트 / 신규 |
| 수량·카운트 | 3 / 99+ |
| 중요도·우선순위 | 긴급 / 높음 |

---

### variant 선택 기준

| variant | 설명 | 권장 상황 |
|---|---|---|
| \`outline\` (기본) | 테두리만 표시, 배경 없음 | 본문과 동일한 시각적 무게가 필요할 때 |
| \`light\` | 연한 배경색 | 상태 레이블처럼 부드럽게 강조할 때 |
| \`filled\` | 진한 단색 배경 | 중요도가 높거나 강한 강조가 필요할 때 |

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | 뱃지 텍스트는 색상에만 의존하지 않고, 내용 자체로 의미를 전달해야 합니다. |
| ✅ | 아이콘만 사용할 경우 \`aria-label\`을 부모 요소에 추가하세요. |
| ⚠️ | 수량 뱃지(\`rounded\`)는 주변 맥락과 함께 읽혔을 때 의미가 명확해야 합니다. (예: "알림 3개") |
| ⚠️ | 클릭 가능한 뱃지라면 \`@click\` emit을 활용하되, 포커스·키보드 접근성을 별도로 보장하세요. |
        `}}},argTypes:{variant:{description:"뱃지의 채우기 방식을 결정합니다.",control:{type:"select"},options:["outline","light","filled"],table:{type:{summary:"'outline' | 'light' | 'filled'"},defaultValue:{summary:"'outline'"},category:"Appearance"}},color:{description:"뱃지의 색상 테마입니다. 상태·의미에 맞는 색상을 선택하세요.",control:{type:"select"},options:["primary","secondary","gray","danger","warning","success","information","disabled"],table:{type:{summary:"'primary' | 'secondary' | 'gray' | 'danger' | 'warning' | 'success' | 'information' | 'disabled'"},defaultValue:{summary:"'primary'"},category:"Appearance"}},size:{description:"뱃지의 크기입니다.",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"'small' | 'medium' | 'large'"},defaultValue:{summary:"'medium'"},category:"Appearance"}},rounded:{description:"`true`이면 완전히 둥근 pill 형태로 렌더링됩니다. 숫자·카운트 뱃지에 사용합니다.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Appearance"}},label:{description:"뱃지 안에 표시할 텍스트입니다. (스토리 전용 편의 arg — 실제 컴포넌트는 `default` 슬롯 사용)",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"(없음)"},category:"Content"}}},args:{variant:"outline",color:"primary",size:"medium",rounded:!1,label:"공지"},render:r=>e.jsx(a,{...r,children:r.children??r.label??r.text??void 0})},l={name:"기본 (Default)",args:{variant:"outline",color:"primary",size:"medium",rounded:!1,label:"공지"},parameters:{docs:{description:{story:"\n**가장 기본적인 Badge 상태**입니다.\n`variant: 'outline'`, `color: 'primary'`, `size: 'medium'`, `rounded: false`가 모두 기본값인 중립 상태입니다.\n뱃지 텍스트는 `default` 슬롯으로 전달합니다.\n        "}}}},s={name:"채운 스타일 (Filled)",args:{variant:"filled",color:"primary",label:"긴급"},parameters:{docs:{description:{story:`
**진한 단색 배경으로 강하게 강조**할 때 사용합니다.
중요도·우선순위가 높은 상태나, 시각적으로 즉시 눈에 띄어야 하는 레이블에 적합합니다.

> ⚠️ 남용하면 주의 집중 효과가 희석됩니다. 페이지 내 \`filled\` 뱃지는 최소한으로 유지하세요.
        `}}}},d={name:"연한 스타일 (Light)",args:{variant:"light",color:"success",label:"완료"},parameters:{docs:{description:{story:`
**연한 배경색으로 부드럽게 상태를 표현**합니다.
목록·테이블의 상태 컬럼처럼 여러 뱃지가 나란히 나타나는 환경에서 가독성이 가장 좋습니다.
        `}}}},t={name:"외곽선 스타일 (Outline)",args:{variant:"outline",color:"gray",label:"제한"},parameters:{docs:{description:{story:'\n**테두리만 표시하여 배경과 동일한 시각적 무게**를 유지합니다.\n본문 흐름을 방해하지 않으면서 분류 정보를 덧붙일 때 사용합니다.\n`disabled`나 `gray` 계열 색상과 함께 "비활성" 상태를 나타내는 데 자주 쓰입니다.\n        '}}}},c={name:"수량 뱃지 (Rounded)",args:{variant:"filled",color:"danger",size:"small",rounded:!0,label:"3"},parameters:{docs:{description:{story:"\n**`rounded: true`를 적용한 Pill(캡슐) 형태의 수량 뱃지**입니다.\n알림 수·미처리 건수 등 숫자 값을 아이콘이나 메뉴 항목 옆에 붙여 표시할 때 사용합니다.\n\n**권장 조합:** `variant: 'filled'` + `size: 'small'` + `color: 'danger'`\n\n> ⚠️ 스크린리더는 시각적 위치를 인식하지 못합니다. 주변 요소에 `aria-label=\"알림 3개\"`처럼 맥락을 포함한 레이블을 제공하세요.\n        "}}}},g={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"16px"},children:[e.jsx(a,{size:"small",variant:"light",color:"primary",children:"small"}),e.jsx(a,{size:"medium",variant:"light",color:"primary",children:"medium"}),e.jsx(a,{size:"large",variant:"light",color:"primary",children:"large"})]}),name:"크기 비교 (Sizes)",parameters:{docs:{description:{story:"\n**`small` / `medium` / `large` 세 가지 크기**를 비교합니다.\n주변 텍스트나 UI 요소의 크기와 맞춰 선택하세요.\n\n- `small`: 테이블 셀·컴팩트 목록 내부\n- `medium`: 기본값, 대부분의 상황에 적합\n- `large`: 제목 옆 강조 레이블·히어로 영역\n        "}},controls:{disable:!0}}},p={render:()=>{const r=({children:i,...o})=>e.jsx("div",{...o,children:i});return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 8px",fontSize:"12px",color:"#888",fontWeight:"600"},children:"light"}),e.jsxs(r,{children:[e.jsx(a,{variant:"light",color:"primary",children:"primary"}),e.jsx(a,{variant:"light",color:"secondary",children:"secondary"}),e.jsx(a,{variant:"light",color:"success",children:"success"}),e.jsx(a,{variant:"light",color:"danger",children:"danger"}),e.jsx(a,{variant:"light",color:"warning",children:"warning"}),e.jsx(a,{variant:"light",color:"information",children:"information"}),e.jsx(a,{variant:"light",color:"gray",children:"gray"}),e.jsx(a,{variant:"light",color:"disabled",children:"disabled"})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 8px",fontSize:"12px",color:"#888",fontWeight:"600"},children:"filled"}),e.jsxs(r,{children:[e.jsx(a,{variant:"filled",color:"primary",children:"primary"}),e.jsx(a,{variant:"filled",color:"secondary",children:"secondary"}),e.jsx(a,{variant:"filled",color:"success",children:"success"}),e.jsx(a,{variant:"filled",color:"danger",children:"danger"}),e.jsx(a,{variant:"filled",color:"warning",children:"warning"}),e.jsx(a,{variant:"filled",color:"information",children:"information"}),e.jsx(a,{variant:"filled",color:"gray",children:"gray"}),e.jsx(a,{variant:"filled",color:"disabled",children:"disabled"})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 8px",fontSize:"12px",color:"#888",fontWeight:"600"},children:"outline"}),e.jsxs(r,{children:[e.jsx(a,{variant:"outline",color:"primary",children:"primary"}),e.jsx(a,{variant:"outline",color:"secondary",children:"secondary"}),e.jsx(a,{variant:"outline",color:"success",children:"success"}),e.jsx(a,{variant:"outline",color:"danger",children:"danger"}),e.jsx(a,{variant:"outline",color:"warning",children:"warning"}),e.jsx(a,{variant:"outline",color:"information",children:"information"}),e.jsx(a,{variant:"outline",color:"gray",children:"gray"}),e.jsx(a,{variant:"outline",color:"disabled",children:"disabled"})]})]})]})},name:"상태별 색상 (Status Colors)",parameters:{docs:{description:{story:"\n**모든 `color` 값을 3가지 `variant`와 함께 비교**하는 레퍼런스 뷰입니다.\n\n| color | 권장 의미 |\n|---|---|\n| `primary` | 일반·기본 상태 |\n| `secondary` | 보조·부가 정보 |\n| `success` | 완료·정상·승인 |\n| `danger` | 오류·실패·삭제 |\n| `warning` | 경고·주의·만료 임박 |\n| `information` | 안내·참고 |\n| `gray` | 비활성·보류·중립 |\n| `disabled` | 사용 불가 상태 |\n        "}},controls:{disable:!0}}},m={render:()=>{const r=({children:i,...o})=>e.jsx("div",{...o,children:i});return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"24px"},children:[e.jsx("span",{style:{fontSize:"13px",color:"#555",width:"60px"},children:"처리 상태"}),e.jsxs(r,{children:[e.jsx(a,{variant:"light",color:"primary",children:"처리중"}),e.jsx(a,{variant:"light",color:"success",children:"완료"}),e.jsx(a,{variant:"light",color:"danger",children:"실패"})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"24px"},children:[e.jsx("span",{style:{fontSize:"13px",color:"#555",width:"60px"},children:"콘텐츠"}),e.jsxs(r,{children:[e.jsx(a,{variant:"outline",color:"primary",children:"공지"}),e.jsx(a,{variant:"outline",color:"secondary",children:"이벤트"}),e.jsx(a,{variant:"filled",color:"danger",size:"small",children:"NEW"})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"24px"},children:[e.jsx("span",{style:{fontSize:"13px",color:"#555",width:"60px"},children:"중요도"}),e.jsxs(r,{children:[e.jsx(a,{variant:"filled",color:"danger",children:"긴급"}),e.jsx(a,{variant:"light",color:"warning",children:"높음"}),e.jsx(a,{variant:"light",color:"gray",children:"보통"})]})]})]})},name:"복수 배치 — BadgeWrapper",parameters:{docs:{description:{story:'\n여러 `Badge`를 한 줄에 나란히 배치할 때는 `BadgeWrapper`로 감쌉니다.\n`BadgeWrapper`는 `display: flex; gap: var(--krds-badge--wrap-gap)` 스타일의 `<div>`로,\n내부 `Badge` 사이 간격을 디자인 시스템 토큰으로 자동 관리합니다.\n\n```html\n<BadgeWrapper>\n  <Badge color="success">완료</Badge>\n  <Badge color="warning">대기</Badge>\n  <Badge color="danger">실패</Badge>\n</BadgeWrapper>\n```\n        '}},controls:{disable:!0}}},u={render:()=>{const r=({children:i,...o})=>e.jsx("div",{...o,children:i});return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"24px"},children:[e.jsxs("section",{children:[e.jsx("p",{style:{margin:"0 0 8px",fontSize:"13px",fontWeight:"600",color:"#333"},children:"처리 상태"}),e.jsxs(r,{children:[e.jsx(a,{variant:"light",color:"primary",children:"처리중"}),e.jsx(a,{variant:"light",color:"success",children:"완료"}),e.jsx(a,{variant:"light",color:"danger",children:"실패"}),e.jsx(a,{variant:"light",color:"warning",children:"만료 임박"}),e.jsx(a,{variant:"light",color:"information",children:"안내"}),e.jsx(a,{variant:"light",color:"gray",children:"제한"})]})]}),e.jsxs("section",{children:[e.jsx("p",{style:{margin:"0 0 8px",fontSize:"13px",fontWeight:"600",color:"#333"},children:"콘텐츠 분류"}),e.jsxs(r,{children:[e.jsx(a,{variant:"outline",color:"primary",children:"공지"}),e.jsx(a,{variant:"outline",color:"secondary",children:"이벤트"}),e.jsx(a,{variant:"filled",color:"danger",size:"small",children:"NEW"})]})]}),e.jsxs("section",{children:[e.jsx("p",{style:{margin:"0 0 8px",fontSize:"13px",fontWeight:"600",color:"#333"},children:"수량 (rounded)"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsxs("span",{style:{fontSize:"14px",color:"#333"},children:["알림",e.jsx(a,{variant:"filled",color:"danger",size:"small",rounded:!0,children:"3"})]}),e.jsxs("span",{style:{fontSize:"14px",color:"#333"},children:["메시지",e.jsx(a,{variant:"filled",color:"primary",size:"small",rounded:!0,children:"12"})]}),e.jsxs("span",{style:{fontSize:"14px",color:"#333"},children:["대기",e.jsx(a,{variant:"filled",color:"gray",size:"small",rounded:!0,children:"99+"})]})]})]})]})},name:"전체 상태 비교 (Overview)",parameters:{docs:{description:{story:`
**Badge의 주요 사용 패턴을 한 화면에서 비교**하는 레퍼런스 뷰입니다.
디자인 QA 및 개발 레퍼런스용으로 활용하세요. Controls 패널은 이 스토리에서 비활성화됩니다.
        `}},controls:{disable:!0}}};var y,h,x;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '기본 (Default)',
  args: {
    variant: 'outline',
    color: 'primary',
    size: 'medium',
    rounded: false,
    label: '공지'
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**가장 기본적인 Badge 상태**입니다.
\\\`variant: 'outline'\\\`, \\\`color: 'primary'\\\`, \\\`size: 'medium'\\\`, \\\`rounded: false\\\`가 모두 기본값인 중립 상태입니다.
뱃지 텍스트는 \\\`default\\\` 슬롯으로 전달합니다.
        \`
      }
    }
  }
}`,...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var v,B,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '채운 스타일 (Filled)',
  args: {
    variant: 'filled',
    color: 'primary',
    label: '긴급'
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**진한 단색 배경으로 강하게 강조**할 때 사용합니다.
중요도·우선순위가 높은 상태나, 시각적으로 즉시 눈에 띄어야 하는 레이블에 적합합니다.

> ⚠️ 남용하면 주의 집중 효과가 희석됩니다. 페이지 내 \\\`filled\\\` 뱃지는 최소한으로 유지하세요.
        \`
      }
    }
  }
}`,...(f=(B=s.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var j,b,z;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '연한 스타일 (Light)',
  args: {
    variant: 'light',
    color: 'success',
    label: '완료'
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**연한 배경색으로 부드럽게 상태를 표현**합니다.
목록·테이블의 상태 컬럼처럼 여러 뱃지가 나란히 나타나는 환경에서 가독성이 가장 좋습니다.
        \`
      }
    }
  }
}`,...(z=(b=d.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var W,S,w;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '외곽선 스타일 (Outline)',
  args: {
    variant: 'outline',
    color: 'gray',
    label: '제한'
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**테두리만 표시하여 배경과 동일한 시각적 무게**를 유지합니다.
본문 흐름을 방해하지 않으면서 분류 정보를 덧붙일 때 사용합니다.
\\\`disabled\\\`나 \\\`gray\\\` 계열 색상과 함께 "비활성" 상태를 나타내는 데 자주 쓰입니다.
        \`
      }
    }
  }
}`,...(w=(S=t.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var I,D,k;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '수량 뱃지 (Rounded)',
  args: {
    variant: 'filled',
    color: 'danger',
    size: 'small',
    rounded: true,
    label: '3'
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**\\\`rounded: true\\\`를 적용한 Pill(캡슐) 형태의 수량 뱃지**입니다.
알림 수·미처리 건수 등 숫자 값을 아이콘이나 메뉴 항목 옆에 붙여 표시할 때 사용합니다.

**권장 조합:** \\\`variant: 'filled'\\\` + \\\`size: 'small'\\\` + \\\`color: 'danger'\\\`

> ⚠️ 스크린리더는 시각적 위치를 인식하지 못합니다. 주변 요소에 \\\`aria-label="알림 3개"\\\`처럼 맥락을 포함한 레이블을 제공하세요.
        \`
      }
    }
  }
}`,...(k=(D=c.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var A,C,F;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px'
  }}>
        <Badge size="small" variant="light" color="primary">small</Badge>
        <Badge size="medium" variant="light" color="primary">medium</Badge>
        <Badge size="large" variant="light" color="primary">large</Badge>
      </div>,
  name: '크기 비교 (Sizes)',
  parameters: {
    docs: {
      description: {
        story: \`
**\\\`small\\\` / \\\`medium\\\` / \\\`large\\\` 세 가지 크기**를 비교합니다.
주변 텍스트나 UI 요소의 크기와 맞춰 선택하세요.

- \\\`small\\\`: 테이블 셀·컴팩트 목록 내부
- \\\`medium\\\`: 기본값, 대부분의 상황에 적합
- \\\`large\\\`: 제목 옆 강조 레이블·히어로 영역
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(F=(C=g.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var R,O,E;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const BadgeWrapper = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '16px'
    }}>
        <div>
          <p style={{
          margin: '0 0 8px',
          fontSize: '12px',
          color: '#888',
          fontWeight: '600'
        }}>light</p>
          <BadgeWrapper>
            <Badge variant="light" color="primary">primary</Badge>
            <Badge variant="light" color="secondary">secondary</Badge>
            <Badge variant="light" color="success">success</Badge>
            <Badge variant="light" color="danger">danger</Badge>
            <Badge variant="light" color="warning">warning</Badge>
            <Badge variant="light" color="information">information</Badge>
            <Badge variant="light" color="gray">gray</Badge>
            <Badge variant="light" color="disabled">disabled</Badge>
          </BadgeWrapper>
        </div>
        <div>
          <p style={{
          margin: '0 0 8px',
          fontSize: '12px',
          color: '#888',
          fontWeight: '600'
        }}>filled</p>
          <BadgeWrapper>
            <Badge variant="filled" color="primary">primary</Badge>
            <Badge variant="filled" color="secondary">secondary</Badge>
            <Badge variant="filled" color="success">success</Badge>
            <Badge variant="filled" color="danger">danger</Badge>
            <Badge variant="filled" color="warning">warning</Badge>
            <Badge variant="filled" color="information">information</Badge>
            <Badge variant="filled" color="gray">gray</Badge>
            <Badge variant="filled" color="disabled">disabled</Badge>
          </BadgeWrapper>
        </div>
        <div>
          <p style={{
          margin: '0 0 8px',
          fontSize: '12px',
          color: '#888',
          fontWeight: '600'
        }}>outline</p>
          <BadgeWrapper>
            <Badge variant="outline" color="primary">primary</Badge>
            <Badge variant="outline" color="secondary">secondary</Badge>
            <Badge variant="outline" color="success">success</Badge>
            <Badge variant="outline" color="danger">danger</Badge>
            <Badge variant="outline" color="warning">warning</Badge>
            <Badge variant="outline" color="information">information</Badge>
            <Badge variant="outline" color="gray">gray</Badge>
            <Badge variant="outline" color="disabled">disabled</Badge>
          </BadgeWrapper>
        </div>
      </div>;
  },
  name: '상태별 색상 (Status Colors)',
  parameters: {
    docs: {
      description: {
        story: \`
**모든 \\\`color\\\` 값을 3가지 \\\`variant\\\`와 함께 비교**하는 레퍼런스 뷰입니다.

| color | 권장 의미 |
|---|---|
| \\\`primary\\\` | 일반·기본 상태 |
| \\\`secondary\\\` | 보조·부가 정보 |
| \\\`success\\\` | 완료·정상·승인 |
| \\\`danger\\\` | 오류·실패·삭제 |
| \\\`warning\\\` | 경고·주의·만료 임박 |
| \\\`information\\\` | 안내·참고 |
| \\\`gray\\\` | 비활성·보류·중립 |
| \\\`disabled\\\` | 사용 불가 상태 |
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(E=(O=p.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var U,V,L;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const BadgeWrapper = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '16px'
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px'
      }}>
          <span style={{
          fontSize: '13px',
          color: '#555',
          width: '60px'
        }}>처리 상태</span>
          <BadgeWrapper>
            <Badge variant="light" color="primary">처리중</Badge>
            <Badge variant="light" color="success">완료</Badge>
            <Badge variant="light" color="danger">실패</Badge>
          </BadgeWrapper>
        </div>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px'
      }}>
          <span style={{
          fontSize: '13px',
          color: '#555',
          width: '60px'
        }}>콘텐츠</span>
          <BadgeWrapper>
            <Badge variant="outline" color="primary">공지</Badge>
            <Badge variant="outline" color="secondary">이벤트</Badge>
            <Badge variant="filled" color="danger" size="small">NEW</Badge>
          </BadgeWrapper>
        </div>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px'
      }}>
          <span style={{
          fontSize: '13px',
          color: '#555',
          width: '60px'
        }}>중요도</span>
          <BadgeWrapper>
            <Badge variant="filled" color="danger">긴급</Badge>
            <Badge variant="light" color="warning">높음</Badge>
            <Badge variant="light" color="gray">보통</Badge>
          </BadgeWrapper>
        </div>
      </div>;
  },
  name: '복수 배치 — BadgeWrapper',
  parameters: {
    docs: {
      description: {
        story: \`
여러 \\\`Badge\\\`를 한 줄에 나란히 배치할 때는 \\\`BadgeWrapper\\\`로 감쌉니다.
\\\`BadgeWrapper\\\`는 \\\`display: flex; gap: var(--krds-badge--wrap-gap)\\\` 스타일의 \\\`<div>\\\`로,
내부 \\\`Badge\\\` 사이 간격을 디자인 시스템 토큰으로 자동 관리합니다.

\\\`\\\`\\\`html
<BadgeWrapper>
  <Badge color="success">완료</Badge>
  <Badge color="warning">대기</Badge>
  <Badge color="danger">실패</Badge>
</BadgeWrapper>
\\\`\\\`\\\`
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(L=(V=m.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var N,Q,q;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const BadgeWrapper = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '24px'
    }}>

        <section>
          <p style={{
          margin: '0 0 8px',
          fontSize: '13px',
          fontWeight: '600',
          color: '#333'
        }}>처리 상태</p>
          <BadgeWrapper>
            <Badge variant="light" color="primary">처리중</Badge>
            <Badge variant="light" color="success">완료</Badge>
            <Badge variant="light" color="danger">실패</Badge>
            <Badge variant="light" color="warning">만료 임박</Badge>
            <Badge variant="light" color="information">안내</Badge>
            <Badge variant="light" color="gray">제한</Badge>
          </BadgeWrapper>
        </section>

        <section>
          <p style={{
          margin: '0 0 8px',
          fontSize: '13px',
          fontWeight: '600',
          color: '#333'
        }}>콘텐츠 분류</p>
          <BadgeWrapper>
            <Badge variant="outline" color="primary">공지</Badge>
            <Badge variant="outline" color="secondary">이벤트</Badge>
            <Badge variant="filled" color="danger" size="small">NEW</Badge>
          </BadgeWrapper>
        </section>

        <section>
          <p style={{
          margin: '0 0 8px',
          fontSize: '13px',
          fontWeight: '600',
          color: '#333'
        }}>수량 (rounded)</p>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
            <span style={{
            fontSize: '14px',
            color: '#333'
          }}>알림
              <Badge variant="filled" color="danger" size="small" rounded={true}>3</Badge>
            </span>
            <span style={{
            fontSize: '14px',
            color: '#333'
          }}>메시지
              <Badge variant="filled" color="primary" size="small" rounded={true}>12</Badge>
            </span>
            <span style={{
            fontSize: '14px',
            color: '#333'
          }}>대기
              <Badge variant="filled" color="gray" size="small" rounded={true}>99+</Badge>
            </span>
          </div>
        </section>

      </div>;
  },
  name: '전체 상태 비교 (Overview)',
  parameters: {
    docs: {
      description: {
        story: \`
**Badge의 주요 사용 패턴을 한 화면에서 비교**하는 레퍼런스 뷰입니다.
디자인 QA 및 개발 레퍼런스용으로 활용하세요. Controls 패널은 이 스토리에서 비활성화됩니다.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(q=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:q.source}}};const Z=["Default","Filled","Light","Outline","Rounded","Sizes","StatusColors","WithBadgeWrapper","AllStates"];export{u as AllStates,l as Default,s as Filled,d as Light,t as Outline,c as Rounded,g as Sizes,p as StatusColors,m as WithBadgeWrapper,Z as __namedExportsOrder,Y as default};
