import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as E}from"./index-CkIaN0ex.js";import{c as F}from"./utils-DCADjnpI.js";const C=E("inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-xs font-semibold border",{variants:{status:{granted:"bg-krds-success-surface text-krds-success-text border-krds-success-border",denied:"bg-krds-danger-surface text-krds-danger-text border-krds-danger-border",readonly:"bg-krds-gray-10 text-krds-gray-50 border-krds-gray-20"}},defaultVariants:{status:"granted"}}),z=()=>e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})});function o({status:r="granted",label:d,className:v,children:i,...j}){const w=r==="granted"?"권한 있음":r==="denied"?"권한 없음":"열람 전용";return e.jsxs("span",{role:"status","aria-label":`${w}: ${d??i}`,className:F(C({status:r}),v),...j,children:[e.jsx(z,{}),d??i]})}o.__docgenInfo={description:"",methods:[],displayName:"PermissionTag",props:{label:{required:!1,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"union",raw:"'granted' | 'denied' | 'readonly'",elements:[{name:"literal",value:"'granted'"},{name:"literal",value:"'denied'"},{name:"literal",value:"'readonly'"}]},description:"",defaultValue:{value:"'granted'",computed:!1}}},composes:["VariantProps"]};const A={title:"Molecules/Navigation/PermissionTag",component:o,tags:["autodocs","navigation","custom-ui"],parameters:{docs:{description:{component:`
## PermissionTag

**역할·기능에 대한 권한 보유 여부를 인라인 태그로 표시**하는 분자 컴포넌트입니다.
\`PermissionPanel\` 매트릭스 셀, 사용자 프로필 영역, 운영 메뉴 옆 등에서 사용합니다.
시스템 운영 정책 연관: **3.4 (권한 관리)·3.5 (운영 변경)**.

---

### Props

| Prop | Type | Default | 설명 |
|---|---|---|---|
| \`status\` | \`'granted' \\| 'denied' \\| 'readonly'\` | \`'granted'\` | 권한 상태 |
| \`label\` | \`string\` | \`'배포 권한 있음'\` | 표시 텍스트 |

---

### status 값 의미

| status | 색상 | 의미 |
|---|---|---|
| \`granted\` | 초록 | 해당 기능 권한 보유 |
| \`denied\` | 빨강 | 권한 없음 (접근 불가) |
| \`readonly\` | 회색 | 열람만 가능 |

---

### 접근성(A11y)

- 색상 외에 텍스트 레이블이 상태를 명확히 서술해야 합니다.
- 클릭 가능한 경우 \`button\` 역할과 \`aria-pressed\`를 사용하세요.
        `}}},argTypes:{status:{description:"권한 상태",control:{type:"select"},options:["granted","denied","readonly"],table:{type:{summary:"'granted' | 'denied' | 'readonly'"},defaultValue:{summary:"'granted'"},category:"Appearance"}},label:{description:"표시 텍스트",control:"text",table:{type:{summary:"string"},category:"Content"}}},args:{status:"granted",label:"배포 권한 있음"},render:r=>e.jsx(o,{...r,children:r.children??r.label??r.text??void 0})},n={name:"권한 있음 (granted)",args:{status:"granted",label:"배포 권한 있음"}},a={name:"권한 없음 (denied)",args:{status:"denied",label:"관리자 전용"}},s={name:"열람 전용 (readonly)",args:{status:"readonly",label:"열람 권한"}},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center",flexWrap:"wrap",padding:"16px"},children:[e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"5px",padding:"4px 10px",borderRadius:"6px",fontSize:"12px",fontWeight:"600",background:"#ECFDF5",color:"#0F6E56",border:"1px solid #86EFAC"},children:[e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),"배포 권한 있음"]}),e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"5px",padding:"4px 10px",borderRadius:"6px",fontSize:"12px",fontWeight:"600",background:"#FEF2F2",color:"#DC2626",border:"1px solid #FECACA"},children:[e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),"관리자 전용"]}),e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"5px",padding:"4px 10px",borderRadius:"6px",fontSize:"12px",fontWeight:"600",background:"#F5F4EF",color:"#6E6D67",border:"1px solid #E8E6DE"},children:[e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),"열람 권한"]})]}),name:"전체 상태 비교",parameters:{controls:{disable:!0}}};var l,p,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '권한 있음 (granted)',
  args: {
    status: 'granted',
    label: '배포 권한 있음'
  } as any
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var g,u,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '권한 없음 (denied)',
  args: {
    status: 'denied',
    label: '관리자 전용'
  } as any
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var m,h,y;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '열람 전용 (readonly)',
  args: {
    status: 'readonly',
    label: '열람 권한'
  } as any
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,b,k;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '16px'
  }}>
        <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      padding: '4px 10px',
      borderRadius: '6px',
      fontSize: '12px',
      fontWeight: '600',
      background: '#ECFDF5',
      color: '#0F6E56',
      border: '1px solid #86EFAC'
    }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
          배포 권한 있음
        </span>
        <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      padding: '4px 10px',
      borderRadius: '6px',
      fontSize: '12px',
      fontWeight: '600',
      background: '#FEF2F2',
      color: '#DC2626',
      border: '1px solid #FECACA'
    }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
          관리자 전용
        </span>
        <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      padding: '4px 10px',
      borderRadius: '6px',
      fontSize: '12px',
      fontWeight: '600',
      background: '#F5F4EF',
      color: '#6E6D67',
      border: '1px solid #E8E6DE'
    }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
          열람 권한
        </span>
      </div>,
  name: '전체 상태 비교',
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(k=(b=t.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const I=["Granted","Denied","Readonly","AllStatuses"];export{t as AllStatuses,a as Denied,n as Granted,s as Readonly,I as __namedExportsOrder,A as default};
