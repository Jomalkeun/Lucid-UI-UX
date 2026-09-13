import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as I}from"./reference-types-4ftiVeOu.js";import{r as s}from"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";function p({placement:t="right",width:D="360px",height:j="50vh",title:c="필터 설정",content:R,showFooter:C=!0,closeOnBackdrop:u=!0,defaultOpen:T=!1,open:m,onClose:n,children:V,style:q}){const o=m!==void 0,[z,f]=s.useState(T),r=o?m:z,a=s.useCallback(()=>{o||f(!1),n==null||n()},[o,n]),O=s.useCallback(()=>{o||f(!0)},[o]);s.useEffect(()=>{const y=B=>{B.key==="Escape"&&r&&a()};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[r,a]);const E={position:"absolute",background:"#fff",boxShadow:"0 20px 60px rgba(15,23,42,0.25)",display:"flex",flexDirection:"column",fontFamily:"system-ui, sans-serif",transition:"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",zIndex:10,...t==="left"||t==="right"?{top:0,bottom:0,width:D,...t==="right"?{right:0}:{left:0},transform:r?"translateX(0)":t==="right"?"translateX(100%)":"translateX(-100%)"}:{left:0,right:0,bottom:0,height:j,borderRadius:"16px 16px 0 0",transform:r?"translateY(0)":"translateY(100%)"},...q};return e.jsxs("div",{style:{position:"relative",fontFamily:"system-ui, sans-serif"},children:[!r&&e.jsx("button",{type:"button",onClick:O,style:{padding:"10px 20px",background:"#1a73e8",color:"#fff",border:"none",borderRadius:"8px",fontSize:"14px",fontWeight:600,cursor:"pointer",fontFamily:"system-ui, sans-serif"},children:"드로어 열기"}),e.jsxs("div",{style:{position:"relative",width:"100%",minHeight:r?"420px":0,overflow:"hidden",borderRadius:"12px",border:r?"1px solid #e5e7eb":"none",background:r?"#f8fafc":"transparent",transition:"min-height 0.3s"},children:[r&&e.jsx("div",{"aria-hidden":"true",onClick:u?a:void 0,style:{position:"absolute",inset:0,background:"rgba(15,23,42,0.36)",cursor:u?"pointer":"default"}}),e.jsxs("aside",{role:"dialog","aria-modal":"true","aria-label":c,style:E,children:[e.jsxs("header",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 20px",borderBottom:"1px solid #e5e7eb",flexShrink:0},children:[e.jsx("h2",{style:{margin:0,fontSize:"17px",fontWeight:700,color:"#111827"},children:c}),e.jsx("button",{type:"button","aria-label":"닫기",onClick:a,style:{border:0,background:"transparent",fontSize:"22px",cursor:"pointer",color:"#6b7280",lineHeight:1,padding:"2px 4px"},children:"×"})]}),e.jsx("div",{style:{flex:1,overflow:"auto",padding:"20px",color:"#374151",lineHeight:1.6,fontSize:"14px"},children:V??R??"드로어 본문 내용을 여기에 배치합니다."}),C&&e.jsxs("footer",{style:{flexShrink:0,padding:"14px 20px",borderTop:"1px solid #e5e7eb",background:"#f9fafb",display:"flex",justifyContent:"flex-end",gap:"8px"},children:[e.jsx("button",{type:"button",onClick:a,style:{padding:"8px 16px",borderRadius:"8px",border:"1px solid #d1d5db",background:"#fff",color:"#374151",fontSize:"14px",fontWeight:600,cursor:"pointer",fontFamily:"system-ui"},children:"취소"}),e.jsx("button",{type:"button",style:{padding:"8px 16px",borderRadius:"8px",border:"none",background:"#1a73e8",color:"#fff",fontSize:"14px",fontWeight:600,cursor:"pointer",fontFamily:"system-ui"},children:"적용"})]})]})]})]})}p.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{placement:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'bottom'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'360px'",computed:!1}},height:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'50vh'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'필터 설정'",computed:!1}},content:{required:!1,tsType:{name:"string"},description:""},showFooter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnBackdrop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const A=I([{library:"PatternFly",component:"Drawer",url:"https://www.patternfly.org/components/drawer/",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Ark UI",component:"Drawer",url:"https://ark-ui.com/docs/components/drawer",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Bootstrap",component:"Offcanvas",url:"https://getbootstrap.com/docs/5.3/components/offcanvas/",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"Drawer",url:"https://flowbite.com/docs/components/drawer/",usedFor:["comparison"],relation:"compared"},{library:"daisyUI",component:"Drawer",url:"https://daisyui.com/components/drawer/",usedFor:["comparison"],relation:"compared"},{library:"Ant Design",component:"Drawer",url:"https://ant.design/components/drawer/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Drawer",url:"https://www.chakra-ui.com/docs/components/drawer",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Drawer",url:"https://base-ui.com/react/components/drawer",usedFor:["comparison"],relation:"compared"},{library:"Oracle Redwood",component:"Drawer Template",url:"https://redwood.oracle.com/?pageId=CORE9FC925F4FAAF4B8F886ACEF49C18E510&shell=guideline",usedFor:["behavior","content","comparison"],relation:"compared"}]),_={title:"Organisms/Content/Drawer",component:p,tags:["autodocs","content","custom-ui","ref:chakra-ui","ref:shadcn-ui","ref:ark-ui","ref:daisy-ui","ref:ant-design","ref:flowbite","ref:vuetify","ref:mui","ref:bootstrap","ref:base-ui","ref:patternfly","ref:oracle-redwood"],parameters:{references:A,docs:{description:{component:`
## Drawer / BottomSheet

**화면 가장자리에서 슬라이드되어 나오는** 사이드 패널 또는 바텀 시트입니다.

---

### Drawer vs Modal

| 항목 | Drawer | Modal |
|---|---|---|
| 등장 방향 | 좌/우/하 슬라이드 | 중앙 페이드인 |
| 배경 가림 | 일부 | 전체 |
| 다중 정보 | 적합 | 컴팩트 |
| 모바일 UX | BottomSheet로 활용 | 화면 가득 채움 |

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | \`role="dialog"\`, \`aria-modal="true"\`를 설정하세요. |
| ✅ | 열릴 때 포커스가 패널 내부(주로 닫기 버튼 또는 첫 번째 인터랙티브 요소)로 이동해야 합니다. |
| ✅ | \`Escape\` 키로 닫을 수 있어야 합니다. |
        `}}},argTypes:{placement:{description:"등장 방향",control:{type:"select"},options:["left","right","bottom"],table:{type:{summary:"'left' | 'right' | 'bottom'"},defaultValue:{summary:"'right'"},category:"Appearance"}},width:{description:"너비 (left/right 전용)",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'360px'"},category:"Size"}},height:{description:"높이 (bottom 전용)",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'50vh'"},category:"Size"}},title:{description:"드로어 제목",control:"text",table:{type:{summary:"string"},category:"Content"}},content:{description:"본문 내용",control:"text",table:{type:{summary:"string"},category:"Content"}},showFooter:{description:"푸터 액션 버튼 표시",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"State"}},closeOnBackdrop:{description:"배경 클릭으로 닫기",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"State"}},defaultOpen:{description:"기본 열림",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}}},args:{placement:"right",width:"360px",height:"50vh",title:"필터 설정",content:"검색 조건을 설정하여 결과를 좁히세요. 다양한 필터를 조합할 수 있습니다.",showFooter:!0,closeOnBackdrop:!0,defaultOpen:!0},render:t=>e.jsx(p,{...t,children:t.children??t.label??t.text??void 0})},i={name:"우측 드로어",args:{placement:"right"},parameters:{docs:{description:{story:"우측에서 나타나는 필터·설정 패널입니다."}}}},l={name:"바텀 시트",args:{placement:"bottom",height:"40vh"},parameters:{docs:{description:{story:"모바일에서 아래서 올라오는 바텀 시트입니다."}}}},d={name:"좌측 드로어",args:{placement:"left"},parameters:{docs:{description:{story:"좌측에서 나타나는 내비게이션 패널입니다."}}}};var b,h,g;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '우측 드로어',
  args: {
    placement: 'right'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '우측에서 나타나는 필터·설정 패널입니다.'
      }
    }
  }
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,w,v;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '바텀 시트',
  args: {
    placement: 'bottom',
    height: '40vh'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '모바일에서 아래서 올라오는 바텀 시트입니다.'
      }
    }
  }
}`,...(v=(w=l.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var k,S,F;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '좌측 드로어',
  args: {
    placement: 'left'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '좌측에서 나타나는 내비게이션 패널입니다.'
      }
    }
  }
}`,...(F=(S=d.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const N=["RightDrawer","BottomSheet","LeftDrawer"];export{l as BottomSheet,d as LeftDrawer,i as RightDrawer,N as __namedExportsOrder,_ as default};
