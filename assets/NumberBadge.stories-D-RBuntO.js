import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{d as V,c as m}from"./reference-types-CC3VHbJD.js";import{r as w}from"./index-BxXVWNx3.js";import{c as A}from"./index-CkIaN0ex.js";import{c as O}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const T=A("inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[11px] font-semibold leading-none text-krds-white",{variants:{variant:{alert:"bg-[#DC2626]",info:"bg-[#4F46E5]",count:"bg-[#6E6D67]"}},defaultVariants:{variant:"alert"}}),c=w.forwardRef(({className:e,variant:W,count:a,maxCount:t,ariaLabel:R,children:k,...E},B)=>{const p=typeof a=="number"&&t!==void 0&&a>t,d=p?`${t}+`:a!==void 0?a:k,N=R??(p?`${t}개 초과`:String(d??""));return n.jsx("span",{ref:B,role:"img","aria-label":N||void 0,className:O(T({variant:W}),e),...E,children:d})});c.displayName="NumberBadge";c.__docgenInfo={description:"",methods:[],displayName:"NumberBadge",props:{count:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},maxCount:{required:!1,tsType:{name:"number"},description:"Caps numeric counts for compact notification affordances."},ariaLabel:{required:!1,tsType:{name:"string"},description:""}},composes:["VariantProps"]};const _=V([m("MUI","Badge","https://mui.com/material-ui/react-badge/"),m("Chakra UI","Badge","https://chakra-ui.com/docs/components/badge")]),G={title:"Atoms/Display/NumberBadge",component:c,tags:["autodocs","display","custom-ui"],parameters:{references:_,docs:{description:{component:`
## NumberBadge

**숫자 카운트·알림 수를 원형 뱃지로 표시**하는 원자 컴포넌트입니다.
아이콘 버튼, 메뉴 항목, 탭 레이블 옆에 붙여 미확인 건수를 전달합니다.

---

### variant 선택 기준

| variant | 색상 | 용도 |
|---|---|---|
| \`alert\` | 빨강 | 즉시 확인이 필요한 알림·오류 건수 |
| \`info\` | 인디고 | 일반 정보·처리 건수 |
| \`count\` | 회색 | 중립적 수량 (누적·합계) |

---

### 접근성(A11y) 가이드

- 뱃지 숫자만으로 의미를 전달하지 않고 \`aria-label\`로 맥락을 포함하세요.
  예: \`aria-label="미확인 알림 3개"\`
- 99를 초과하는 경우 \`"99+"\` 형태로 표시하고 \`aria-label="100개 이상"\` 등으로 안내합니다.
- 스크린리더가 읽어야 하는 경우 \`role="status"\` 또는 \`aria-live="polite"\`를 부모에 추가하세요.
        `}}},argTypes:{variant:{description:"뱃지 색상 의미",control:{type:"select"},options:["alert","info","count"],table:{type:{summary:"'alert' | 'info' | 'count'"},defaultValue:{summary:"'alert'"},category:"Appearance"}},count:{description:'표시할 숫자 (99 초과 시 "99+" 권장)',control:{type:"number",min:0,max:999},table:{type:{summary:"number"},defaultValue:{summary:"3"},category:"Content"}},maxCount:{description:'숫자 count가 이 값을 초과하면 "maxCount+"로 압축합니다.',control:{type:"number",min:1,max:999},table:{type:{summary:"number"},category:"Content"}},ariaLabel:{description:"스크린리더용 레이블. 미입력 시 숫자 그대로 읽힘",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"(없음)"},category:"Accessibility"}}},args:{variant:"alert",count:3,ariaLabel:"미확인 알림 3개"},render:e=>n.jsx(c,{...e,children:e.children??e.label??e.text??void 0})},r={name:"기본 (알림)",args:{variant:"alert",count:3,ariaLabel:"미확인 알림 3개"}},i={name:"정보 카운트",args:{variant:"info",count:12,ariaLabel:"처리 대기 12건"}},s={name:"중립 카운트 (99+)",args:{variant:"count",count:"99+",ariaLabel:"100개 이상"}},o={name:"최대 수량 표시",args:{variant:"alert",count:128,maxCount:99,ariaLabel:"미확인 알림 128개"}},l={render:()=>n.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center",padding:"16px"},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[n.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:"20px",height:"20px",padding:"0 6px",borderRadius:"999px",fontSize:"11px",fontWeight:"600",background:"#DC2626",color:"#fff"},children:"3"}),n.jsx("span",{style:{fontSize:"11px",color:"#888"},children:"alert"})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[n.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:"20px",height:"20px",padding:"0 6px",borderRadius:"999px",fontSize:"11px",fontWeight:"600",background:"#4F46E5",color:"#fff"},children:"12"}),n.jsx("span",{style:{fontSize:"11px",color:"#888"},children:"info"})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[n.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:"20px",height:"20px",padding:"0 6px",borderRadius:"999px",fontSize:"11px",fontWeight:"600",background:"#6E6D67",color:"#fff"},children:"99+"}),n.jsx("span",{style:{fontSize:"11px",color:"#888"},children:"count"})]})]}),name:"전체 variant 비교",parameters:{controls:{disable:!0}}};var u,f,x;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '기본 (알림)',
  args: {
    variant: 'alert',
    count: 3,
    ariaLabel: '미확인 알림 3개'
  } as any
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var g,y,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '정보 카운트',
  args: {
    variant: 'info',
    count: 12,
    ariaLabel: '처리 대기 12건'
  } as any
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var h,v,j;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '중립 카운트 (99+)',
  args: {
    variant: 'count',
    count: '99+',
    ariaLabel: '100개 이상'
  } as any
}`,...(j=(v=s.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var C,I,S;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '최대 수량 표시',
  args: {
    variant: 'alert',
    count: 128,
    maxCount: 99,
    ariaLabel: '미확인 알림 128개'
  } as any
}`,...(S=(I=o.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var D,z,L;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    padding: '16px'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
        <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '20px',
        height: '20px',
        padding: '0 6px',
        borderRadius: '999px',
        fontSize: '11px',
        fontWeight: '600',
        background: '#DC2626',
        color: '#fff'
      }}>
          3
        </span>
        <span style={{
        fontSize: '11px',
        color: '#888'
      }}>alert</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
        <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '20px',
        height: '20px',
        padding: '0 6px',
        borderRadius: '999px',
        fontSize: '11px',
        fontWeight: '600',
        background: '#4F46E5',
        color: '#fff'
      }}>
          12
        </span>
        <span style={{
        fontSize: '11px',
        color: '#888'
      }}>info</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
        <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '20px',
        height: '20px',
        padding: '0 6px',
        borderRadius: '999px',
        fontSize: '11px',
        fontWeight: '600',
        background: '#6E6D67',
        color: '#fff'
      }}>
          99+
        </span>
        <span style={{
        fontSize: '11px',
        color: '#888'
      }}>count</span>
      </div>
    </div>,
  name: '전체 variant 비교',
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(L=(z=l.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};const H=["Default","Info","Count","OverflowCount","AllVariants"];export{l as AllVariants,s as Count,r as Default,i as Info,o as OverflowCount,H as __namedExportsOrder,G as default};
