import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as V}from"./reference-types-4ftiVeOu.js";import{r as n}from"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";function m({slides:t=[],showControls:F=!0,showDots:S=!0,aspectRatio:I="16/9",width:f="560px",autoPlay:b=!1,autoPlayInterval:y=5e3,children:g,style:x,...h}){const[s,d]=n.useState(0),r=t.length,p=n.useRef(null),T=n.useCallback(()=>{d(i=>(i-1+r)%r)},[r]),u=n.useCallback(()=>{d(i=>(i+1)%r)},[r]);if(n.useEffect(()=>{if(!(!b||r===0))return p.current=setInterval(u,y),()=>{p.current&&clearInterval(p.current)}},[b,y,u,r]),g||r===0)return e.jsx("div",{role:"region","aria-roledescription":"carousel","aria-label":"캐러셀",style:{width:f,...x},...h,children:g});const o=t[s];return e.jsxs("div",{role:"region","aria-roledescription":"carousel","aria-label":"캐러셀",style:{width:f,maxWidth:"100%",...x},...h,children:[e.jsxs("div",{style:{position:"relative",width:"100%",aspectRatio:I,overflow:"hidden",borderRadius:"12px",background:o.bg??"#1a73e8",userSelect:"none"},"aria-live":"polite","aria-atomic":"true",children:[e.jsx("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"24px 32px",boxSizing:"border-box",textAlign:"center"},children:o.content??e.jsxs(e.Fragment,{children:[o.title&&e.jsx("h2",{style:{margin:"0 0 10px",fontSize:"22px",fontWeight:800,color:"#fff",fontFamily:"system-ui, sans-serif",lineHeight:1.2},children:o.title}),o.description&&e.jsx("p",{style:{margin:0,fontSize:"14px",color:"rgba(255,255,255,0.85)",fontFamily:"system-ui, sans-serif",lineHeight:1.6,maxWidth:"360px"},children:o.description}),o.image&&e.jsx("div",{style:{marginTop:"16px"},children:o.image})]})}),F&&r>1&&e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button","aria-label":"이전 슬라이드",onClick:T,style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",width:"36px",height:"36px",borderRadius:"50%",border:"2px solid rgba(255,255,255,0.5)",background:"rgba(0,0,0,0.35)",color:"#fff",fontSize:"18px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",lineHeight:1,transition:"background 0.15s"},children:"‹"}),e.jsx("button",{type:"button","aria-label":"다음 슬라이드",onClick:u,style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",width:"36px",height:"36px",borderRadius:"50%",border:"2px solid rgba(255,255,255,0.5)",background:"rgba(0,0,0,0.35)",color:"#fff",fontSize:"18px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",lineHeight:1,transition:"background 0.15s"},children:"›"})]}),e.jsxs("div",{"aria-hidden":"true",style:{position:"absolute",top:"12px",right:"12px",background:"rgba(0,0,0,0.45)",color:"#fff",fontSize:"12px",fontFamily:"system-ui",padding:"2px 8px",borderRadius:"999px"},children:[s+1," / ",r]})]}),S&&r>1&&e.jsx("div",{role:"tablist","aria-label":"슬라이드 선택",style:{display:"flex",justifyContent:"center",gap:"8px",marginTop:"12px"},children:t.map((i,a)=>e.jsx("button",{type:"button",role:"tab","aria-selected":a===s,"aria-label":`슬라이드 ${a+1}`,onClick:()=>d(a),style:{width:a===s?"24px":"8px",height:"8px",borderRadius:"999px",border:"none",background:a===s?"#1a73e8":"#d1d5db",cursor:"pointer",padding:0,transition:"all 0.2s"}},a))})]})}m.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{slides:{required:!1,tsType:{name:"Array",elements:[{name:"CarouselSlide"}],raw:"CarouselSlide[]"},description:"",defaultValue:{value:"[]",computed:!1}},showControls:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showDots:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},aspectRatio:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'16/9'",computed:!1}},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'560px'",computed:!1}},autoPlay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autoPlayInterval:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5000",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};const q=V([{library:"Ark UI",component:"Carousel",url:"https://ark-ui.com/docs/components/carousel",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Bootstrap",component:"Carousel",url:"https://getbootstrap.com/docs/5.3/components/carousel/",usedFor:["comparison"],relation:"compared"},{library:"daisyUI",component:"Carousel",url:"https://daisyui.com/components/carousel/",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"Carousel",url:"https://flowbite.com/docs/components/carousel/",usedFor:["comparison"],relation:"compared"},{library:"Mantine UI",component:"Carousels",url:"https://ui.mantine.dev/category/carousels/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."},{library:"Ant Design",component:"Carousel",url:"https://ant.design/components/carousel/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Carousel",url:"https://www.chakra-ui.com/docs/components/carousel",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Carousel",url:"https://quasar.dev/vue-components/carousel",usedFor:["comparison"],relation:"compared"}]),U={title:"Organisms/Content/Carousel",component:m,tags:["autodocs","content","custom-ui","ref:chakra-ui","ref:shadcn-ui","ref:ark-ui","ref:daisy-ui","ref:ant-design","ref:flowbite","ref:bootstrap","ref:quasar","ref:mantine-ui"],parameters:{references:q,docs:{description:{component:`
## Carousel / Slider

**이미지나 카드를 좌우로 넘겨보는** 슬라이드 컨테이너 유기체입니다.

---

### 언제 사용하나요?

| 용도 | 예시 |
|---|---|
| 메인 배너 | 홈 히어로 이미지 순환 |
| 상품 이미지 | 상품 상세의 이미지 갤러리 |
| 추천 콘텐츠 | 관련 기사·포스트 |

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | \`role="region"\`, \`aria-roledescription="carousel"\`을 설정하세요. |
| ✅ | 자동 재생이 있다면 정지 버튼을 제공하고 5초 이상 전환 간격을 권장합니다. |
| ✅ | 이전/다음 버튼에 \`aria-label\`을 반드시 제공하세요. |
| ⚠️ | 자동 재생은 모션 감도 설정(\`prefers-reduced-motion\`)을 확인하세요. |
        `}}},argTypes:{slides:{description:"슬라이드 목록",control:"object",table:{type:{summary:"Array"},category:"Content"}},showControls:{description:"이전/다음 버튼 표시",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Appearance"}},showDots:{description:"도트 인디케이터 표시",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Appearance"}},aspectRatio:{description:"종횡비",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'16/9'"},category:"Appearance"}},width:{description:"너비",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'560px'"},category:"Size"}}},args:{width:"560px",aspectRatio:"16/9",showControls:!0,showDots:!0,slides:[{title:"여름 시즌 이벤트",description:"지금 바로 혜택을 확인하세요!",bg:"linear-gradient(135deg,#1a73e8,#0d47a1)"},{title:"신규 서비스 출시",description:"더 빠르고 스마트한 경험을 만나보세요.",bg:"linear-gradient(135deg,#e91e63,#880e4f)"},{title:"무료 체험 신청",description:"지금 가입하면 30일 무료 이용 가능합니다.",bg:"linear-gradient(135deg,#2e7d32,#1b5e20)"}]},render:t=>e.jsx(m,{...t,children:t.children??t.label??t.text??void 0})},l={name:"기본 캐러셀",parameters:{docs:{description:{story:"좌우 화살표와 도트 인디케이터를 갖춘 기본 슬라이더입니다."}}}},c={name:"도트만 표시",args:{showControls:!1},parameters:{docs:{description:{story:"방향 버튼 없이 도트로만 탐색하는 캐러셀입니다."}}}};var C,v,w;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '기본 캐러셀',
  parameters: {
    docs: {
      description: {
        story: '좌우 화살표와 도트 인디케이터를 갖춘 기본 슬라이더입니다.'
      }
    }
  }
}`,...(w=(v=l.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var j,k,R;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '도트만 표시',
  args: {
    showControls: false
  } as any,
  parameters: {
    docs: {
      description: {
        story: '방향 버튼 없이 도트로만 탐색하는 캐러셀입니다.'
      }
    }
  }
}`,...(R=(k=c.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};const _=["Default","NoControls"];export{l as Default,c as NoControls,_ as __namedExportsOrder,U as default};
