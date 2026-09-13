import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{d as C}from"./reference-types-4ftiVeOu.js";import{r as L}from"./index-BxXVWNx3.js";import{c as F}from"./index-CkIaN0ex.js";import{c as I}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const A=F("inline-block w-2 h-2 rounded-full flex-shrink-0",{variants:{status:{on:"bg-[#0F6E56] shadow-[0_0_0_2px_rgba(15,110,86,0.18)]",warn:"bg-[#B45309] shadow-[0_0_0_2px_rgba(180,83,9,0.18)]",err:"bg-[#DC2626] shadow-[0_0_0_2px_rgba(220,38,38,0.18)]",off:"bg-[#A19F97]"}},defaultVariants:{status:"on"}}),i=L.forwardRef(({className:e,status:D,ariaLabel:R,..._},j)=>a.jsx("span",{ref:j,role:"img","aria-label":R,className:I(A({status:D}),e),..._}));i.displayName="StatusDot";i.__docgenInfo={description:"",methods:[],displayName:"StatusDot",props:{ariaLabel:{required:!1,tsType:{name:"string"},description:""}},composes:["VariantProps"]};const B=C([{library:"Cloudscape Design System",component:"Status indicator",url:"https://cloudscape.design/components/status-indicator/",usedFor:["design","accessibility","content"],relation:"compared"},{library:"daisyUI",component:"Status",url:"https://daisyui.com/components/status/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Status",url:"https://www.chakra-ui.com/docs/components/status",usedFor:["comparison"],relation:"compared"}]),N={title:"Atoms/Display/StatusDot",component:i,tags:["autodocs","display","custom-ui","ref:chakra-ui","ref:daisy-ui","ref:cloudscape"],parameters:{references:B,docs:{description:{component:`
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
        `}}},argTypes:{status:{description:"연결·동기화 상태",control:{type:"select"},options:["on","warn","err","off"],table:{type:{summary:"'on' | 'warn' | 'err' | 'off'"},defaultValue:{summary:"'on'"},category:"Appearance"}},ariaLabel:{description:"스크린리더용 상태 설명",control:"text",table:{type:{summary:"string"},category:"Accessibility"}}},args:{status:"on",ariaLabel:"BSS 연결 정상"},render:e=>a.jsx(i,{...e,children:e.children??e.label??e.text??void 0})},r={name:"정상 연결 (on)",args:{status:"on",ariaLabel:"BSS 연결 정상"}},s={name:"동기화 지연 (warn)",args:{status:"warn",ariaLabel:"동기화 지연"}},t={name:"연동 실패 (err)",args:{status:"err",ariaLabel:"외부 연동 실패"}},o={name:"비활성 (off)",args:{status:"off",ariaLabel:"비활성"}},n={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",padding:"16px"},children:[a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"13px"},children:[a.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#0F6E56",flexShrink:"0",boxShadow:"0 0 0 2px rgba(15,110,86,0.18)"},role:"img","aria-label":"CRM 연동 정상"}),"CRM 연동"]}),a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"13px",color:"#B45309"},children:[a.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#B45309",flexShrink:"0",boxShadow:"0 0 0 2px rgba(180,83,9,0.18)"},role:"img","aria-label":"쿠폰 서버 동기화 지연"}),"쿠폰 서버 (지연 3,200ms)"]}),a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"13px",color:"#DC2626"},children:[a.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#DC2626",flexShrink:"0",boxShadow:"0 0 0 2px rgba(220,38,38,0.18)"},role:"img","aria-label":"결제 게이트웨이 연동 실패"}),"결제 게이트웨이 (연동 오류)"]}),a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"13px",color:"#A19F97"},children:[a.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#A19F97",flexShrink:"0"},role:"img","aria-label":"푸시 서버 비활성"}),"푸시 서버 (비활성)"]})]}),name:"텍스트 레이블 조합",parameters:{docs:{description:{story:"실제 `SyncStatusPanel`에서 사용하는 텍스트 레이블 조합 패턴입니다."}},controls:{disable:!0}}};var p,l,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '정상 연결 (on)',
  args: {
    status: 'on',
    ariaLabel: 'BSS 연결 정상'
  } as any
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,m,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '동기화 지연 (warn)',
  args: {
    status: 'warn',
    ariaLabel: '동기화 지연'
  } as any
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,g,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '연동 실패 (err)',
  args: {
    status: 'err',
    ariaLabel: '외부 연동 실패'
  } as any
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,y,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '비활성 (off)',
  args: {
    status: 'off',
    ariaLabel: '비활성'
  } as any
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var S,w,k;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
          <span style={{
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: '#0F6E56',
        flexShrink: '0',
        boxShadow: '0 0 0 2px rgba(15,110,86,0.18)'
      }} role="img" aria-label="CRM 연동 정상"></span>
          CRM 연동
        </span>
        <span style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '13px',
      color: '#B45309'
    }}>
          <span style={{
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: '#B45309',
        flexShrink: '0',
        boxShadow: '0 0 0 2px rgba(180,83,9,0.18)'
      }} role="img" aria-label="쿠폰 서버 동기화 지연"></span>
          쿠폰 서버 (지연 3,200ms)
        </span>
        <span style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '13px',
      color: '#DC2626'
    }}>
          <span style={{
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: '#DC2626',
        flexShrink: '0',
        boxShadow: '0 0 0 2px rgba(220,38,38,0.18)'
      }} role="img" aria-label="결제 게이트웨이 연동 실패"></span>
          결제 게이트웨이 (연동 오류)
        </span>
        <span style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '13px',
      color: '#A19F97'
    }}>
          <span style={{
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: '#A19F97',
        flexShrink: '0'
      }} role="img" aria-label="푸시 서버 비활성"></span>
          푸시 서버 (비활성)
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
}`,...(k=(w=n.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const O=["Default","Warning","Error","Off","WithLabel"];export{r as Default,t as Error,o as Off,s as Warning,n as WithLabel,O as __namedExportsOrder,N as default};
