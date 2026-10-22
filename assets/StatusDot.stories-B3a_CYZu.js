import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{d as C}from"./reference-types-CC3VHbJD.js";import{r as z}from"./index-BxXVWNx3.js";import{c as A}from"./index-CkIaN0ex.js";import{c as B}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const F=A("inline-block w-2 h-2 rounded-full flex-shrink-0",{variants:{status:{on:"bg-[#0F6E56] shadow-[0_0_0_2px_rgba(15,110,86,0.18)]",warn:"bg-[#B45309] shadow-[0_0_0_2px_rgba(180,83,9,0.18)]",err:"bg-[#DC2626] shadow-[0_0_0_2px_rgba(220,38,38,0.18)]",off:"bg-[#A19F97]"}},defaultVariants:{status:"on"}}),e=z.forwardRef(({className:s,status:j,ariaLabel:l,decorative:c=!l,...L},I)=>a.jsx("span",{ref:I,role:c?void 0:"img","aria-hidden":c||void 0,"aria-label":c?void 0:l,className:B(F({status:j}),s),...L}));e.displayName="StatusDot";e.__docgenInfo={description:"",methods:[],displayName:"StatusDot",props:{ariaLabel:{required:!1,tsType:{name:"string"},description:""},decorative:{required:!1,tsType:{name:"boolean"},description:"Hide the indicator from assistive technology when adjacent text already expresses its status.",defaultValue:{value:"!ariaLabel",computed:!1}}},composes:["VariantProps"]};const R=C([{library:"Cloudscape Design System",component:"Status indicator",url:"https://cloudscape.design/components/status-indicator/",usedFor:["design","accessibility","content"],relation:"compared"},{library:"daisyUI",component:"Status",url:"https://daisyui.com/components/status/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Status",url:"https://www.chakra-ui.com/docs/components/status",usedFor:["comparison"],relation:"compared"}]),O={title:"Atoms/Display/StatusDot",component:e,tags:["autodocs","display","custom-ui","ref:chakra-ui","ref:daisy-ui","ref:cloudscape"],parameters:{references:R,docs:{description:{component:`
## StatusDot

**연결·동기화·가용성 상태를 색상 점 하나로 표현**하는 최소 원자입니다.
외부 시스템 연동, BSS/CRM 상태, 배포 노드 상태 등 인라인 상태 표시에 사용합니다.

---

### status 값과 시스템 운영 정책 5종 매핑

| status | 색상 | 의미 | 시스템 운영 정책 5종 상태 |
|---|---|---|---|
| \`on\` | 초록 | 정상 연결 | 완료 |
| \`warn\` | 앰버 | 지연·경고 | 만료 임박 |
| \`err\` | 빨강 | 연동 실패 | 실패 |
| \`off\` | 회색 | 비활성·없음 | 제한 |

---

### 접근성(A11y) 가이드

- 색상만으로 의미를 전달하므로 반드시 \`aria-label\`로 상태를 서술하세요.
  예: \`aria-label="CRM 연동 정상"\`
- \`role="img"\`를 사용해 스크린리더가 이미지 요소로 인식하게 합니다.
- 텍스트 레이블과 함께 사용할 때 점과 텍스트를 같은 \`<span>\` 안에 묶어 연관성을 유지하세요.
        `}}},argTypes:{status:{description:"연결·동기화 상태",control:{type:"select"},options:["on","warn","err","off"],table:{type:{summary:"'on' | 'warn' | 'err' | 'off'"},defaultValue:{summary:"'on'"},category:"Appearance"}},ariaLabel:{description:"스크린리더용 상태 설명",control:"text",table:{type:{summary:"string"},category:"Accessibility"}},decorative:{description:"인접한 텍스트가 상태를 이미 설명할 때 점을 스크린리더에서 숨깁니다.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"ariaLabel이 없으면 true"},category:"Accessibility"}}},args:{status:"on",ariaLabel:"BSS 연결 정상"},render:s=>a.jsx(e,{...s,children:s.children??s.label??s.text??void 0})},t={name:"정상 연결 (on)",args:{status:"on",ariaLabel:"BSS 연결 정상"}},r={name:"동기화 지연 (warn)",args:{status:"warn",ariaLabel:"동기화 지연"}},o={name:"연동 실패 (err)",args:{status:"err",ariaLabel:"외부 연동 실패"}},n={name:"비활성 (off)",args:{status:"off",ariaLabel:"비활성"}},i={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",padding:"16px"},children:[a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"13px"},children:[a.jsx(e,{status:"on",decorative:!0})," CRM 연동 정상"]}),a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"13px",color:"#B45309"},children:[a.jsx(e,{status:"warn",decorative:!0})," 쿠폰 서버 동기화 지연 (3,200ms)"]}),a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"13px",color:"#DC2626"},children:[a.jsx(e,{status:"err",decorative:!0})," 결제 게이트웨이 연동 실패"]}),a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"13px",color:"#A19F97"},children:[a.jsx(e,{status:"off",decorative:!0})," 푸시 서버 비활성"]})]}),name:"텍스트 레이블 조합",parameters:{docs:{description:{story:"실제 `SyncStatusPanel`에서 사용하는 텍스트 레이블 조합 패턴입니다."}},controls:{disable:!0}}};var p,d,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '정상 연결 (on)',
  args: {
    status: 'on',
    ariaLabel: 'BSS 연결 정상'
  } as any
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,f,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '동기화 지연 (warn)',
  args: {
    status: 'warn',
    ariaLabel: '동기화 지연'
  } as any
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,g,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '연동 실패 (err)',
  args: {
    status: 'err',
    ariaLabel: '외부 연동 실패'
  } as any
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var S,h,v;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '비활성 (off)',
  args: {
    status: 'off',
    ariaLabel: '비활성'
  } as any
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var w,D,_;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '16px'
  }}>
      <span style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '13px'
    }}>
        <StatusDot status="on" decorative /> CRM 연동 정상
      </span>
      <span style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '13px',
      color: '#B45309'
    }}>
        <StatusDot status="warn" decorative /> 쿠폰 서버 동기화 지연 (3,200ms)
      </span>
      <span style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '13px',
      color: '#DC2626'
    }}>
        <StatusDot status="err" decorative /> 결제 게이트웨이 연동 실패
      </span>
      <span style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '13px',
      color: '#A19F97'
    }}>
        <StatusDot status="off" decorative /> 푸시 서버 비활성
      </span>
    </div>,
  name: '텍스트 레이블 조합',
  parameters: {
    docs: {
      description: {
        story: '실제 \`SyncStatusPanel\`에서 사용하는 텍스트 레이블 조합 패턴입니다.'
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(_=(D=i.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const P=["Default","Warning","Error","Off","WithLabel"];export{t as Default,o as Error,n as Off,r as Warning,i as WithLabel,P as __namedExportsOrder,O as default};
