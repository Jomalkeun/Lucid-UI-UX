import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as j}from"./index-BxXVWNx3.js";import{c as B}from"./index-CkIaN0ex.js";import{c as a}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const F=B("flex items-start gap-2.5 rounded-lg border-l-[3px] px-3.5 py-2.5 text-krds-black",{variants:{type:{info:"bg-krds-info-surface border-krds-info-border",warn:"bg-krds-warning-surface border-krds-warning-border"}},defaultVariants:{type:"info"}});function N({className:r}){return e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:a("shrink-0 mt-0.5 text-krds-info-text",r),children:e.jsx("path",{d:"M18 8a6 6 0 10-12 0c0 7-3 8-3 8h18s-3-1-3-8M13.7 21a2 2 0 01-3.4 0"})})}function I({className:r}){return e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:a("shrink-0 mt-0.5 text-krds-warning-text",r),children:e.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"})})}const o=j.forwardRef(({type:r="info",title:i,message:d,className:y,children:k,...v},b)=>{const w=r==="warn"?"alert":"status";return e.jsxs("div",{ref:b,role:w,className:a(F({type:r}),y),...v,children:[r==="warn"?e.jsx(I,{}):e.jsx(N,{}),e.jsxs("div",{className:"flex-1",children:[i&&e.jsx("strong",{className:"block text-krds-body-sm font-semibold mb-0.5 text-krds-black",children:i}),d&&e.jsx("span",{className:"text-krds-body-sm text-krds-gray-70",children:d}),k]})]})});o.displayName="InlineNotice";o.__docgenInfo={description:"",methods:[],displayName:"InlineNotice",props:{type:{required:!1,tsType:{name:"union",raw:"'info' | 'warn'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'warn'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},message:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit","VariantProps"]};const E={title:"Molecules/Feedback/InlineNotice",component:o,tags:["autodocs","feedback","custom-ui"],parameters:{docs:{description:{component:`
## InlineNotice

**운영 공지·정책 변경을 화면 상단 또는 섹션 안에 배너 형태로 안내**하는 분자 컴포넌트입니다.
Notification(카운트 뱃지)과 달리, 고정 텍스트로 시스템 상태나 정책 변경을 전달합니다.
시스템 운영 정책 연관: **3.4 (운영 공지)·2.8 (폴백)**.

---

### type 선택 기준

| type | 의미 | ARIA role |
|---|---|---|
| \`info\` | 일반 운영 공지·안내 | \`role="status"\` (비방해적) |
| \`warn\` | 정책 변경·주의 필요 | \`role="alert"\` (즉시 읽힘) |

---

### 접근성(A11y) 가이드

- \`warn\` 타입은 \`role="alert"\`이어야 스크린리더가 즉시 읽습니다.
- \`info\` 타입은 \`role="status"\`로 현재 작업을 방해하지 않습니다.
- 아이콘은 \`aria-hidden="true"\`로 처리하고 텍스트로만 의미를 전달합니다.
        `}}},argTypes:{type:{description:"공지 종류",control:{type:"radio"},options:["info","warn"],table:{type:{summary:"'info' | 'warn'"},defaultValue:{summary:"'info'"},category:"Appearance"}},title:{description:"공지 제목",control:"text",table:{type:{summary:"string"},category:"Content"}},message:{description:"공지 본문",control:"text",table:{type:{summary:"string"},category:"Content"}}},args:{type:"info",title:"운영 공지",message:"금일 22:00~23:00 배포 게이트 점검 예정입니다."},render:r=>e.jsx(o,{...r,children:r.children??r.label??r.text??void 0})},t={name:"일반 공지 (info)",args:{type:"info",title:"운영 공지",message:"금일 22:00~23:00 배포 게이트 점검 예정입니다."}},n={name:"정책 변경 경고 (warn)",args:{type:"warn",title:"정책 변경",message:"배너 최대 노출 건수가 5→3건으로 변경됩니다. 기존 초과 항목을 정리해 주세요."}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",padding:"16px",maxWidth:"480px"},children:[e.jsxs("div",{role:"status",style:{display:"flex",alignItems:"flex-start",gap:"10px",padding:"11px 14px",borderRadius:"8px",background:"#EFF6FF",borderLeft:"3px solid #4F46E5",fontSize:"13px",color:"#1B1B19"},children:[e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#4F46E5","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",style:{flexShrink:"0",marginTop:"1px"},"aria-hidden":"true",children:e.jsx("path",{d:"M18 8a6 6 0 10-12 0c0 7-3 8-3 8h18s-3-1-3-8M13.7 21a2 2 0 01-3.4 0"})}),e.jsxs("div",{children:[e.jsx("strong",{style:{display:"block",marginBottom:"3px"},children:"운영 공지"}),e.jsx("span",{style:{fontSize:"12.5px",color:"#4B4A44"},children:"금일 22:00~23:00 배포 게이트 점검 예정입니다."})]})]}),e.jsxs("div",{role:"alert",style:{display:"flex",alignItems:"flex-start",gap:"10px",padding:"11px 14px",borderRadius:"8px",background:"#FFFBEB",borderLeft:"3px solid #B45309",fontSize:"13px",color:"#1B1B19"},children:[e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#B45309","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",style:{flexShrink:"0",marginTop:"1px"},"aria-hidden":"true",children:e.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"})}),e.jsxs("div",{children:[e.jsx("strong",{style:{display:"block",marginBottom:"3px"},children:"정책 변경"}),e.jsx("span",{style:{fontSize:"12.5px",color:"#4B4A44"},children:"배너 최대 노출 건수가 5→3건으로 변경됩니다."})]})]})]}),name:"두 종류 비교",parameters:{controls:{disable:!0}}};var l,p,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '일반 공지 (info)',
  args: {
    type: 'info',
    title: '운영 공지',
    message: '금일 22:00~23:00 배포 게이트 점검 예정입니다.'
  } as any
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var x,m,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '정책 변경 경고 (warn)',
  args: {
    type: 'warn',
    title: '정책 변경',
    message: '배너 최대 노출 건수가 5→3건으로 변경됩니다. 기존 초과 항목을 정리해 주세요.'
  } as any
}`,...(f=(m=n.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,u,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '16px',
    maxWidth: '480px'
  }}>
        <div role="status" style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px',
      padding: '11px 14px',
      borderRadius: '8px',
      background: '#EFF6FF',
      borderLeft: '3px solid #4F46E5',
      fontSize: '13px',
      color: '#1B1B19'
    }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{
        flexShrink: '0',
        marginTop: '1px'
      }} aria-hidden="true"><path d="M18 8a6 6 0 10-12 0c0 7-3 8-3 8h18s-3-1-3-8M13.7 21a2 2 0 01-3.4 0" /></svg>
          <div><strong style={{
          display: 'block',
          marginBottom: '3px'
        }}>운영 공지</strong><span style={{
          fontSize: '12.5px',
          color: '#4B4A44'
        }}>금일 22:00~23:00 배포 게이트 점검 예정입니다.</span></div>
        </div>
        <div role="alert" style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px',
      padding: '11px 14px',
      borderRadius: '8px',
      background: '#FFFBEB',
      borderLeft: '3px solid #B45309',
      fontSize: '13px',
      color: '#1B1B19'
    }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B45309" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{
        flexShrink: '0',
        marginTop: '1px'
      }} aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01" /></svg>
          <div><strong style={{
          display: 'block',
          marginBottom: '3px'
        }}>정책 변경</strong><span style={{
          fontSize: '12.5px',
          color: '#4B4A44'
        }}>배너 최대 노출 건수가 5→3건으로 변경됩니다.</span></div>
        </div>
      </div>,
  name: '두 종류 비교',
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const T=["Info","Warning","Both"];export{s as Both,t as Info,n as Warning,T as __namedExportsOrder,E as default};
