import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as L,c as a}from"./reference-types-CC3VHbJD.js";import{r as R}from"./index-BxXVWNx3.js";import{c as _}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const c=R.forwardRef(({className:t,variant:l="rect",width:A="300px",height:j="20px",ariaLabel:T="로딩 중",animate:q=!0,decorative:d=!1,style:I,...C},D)=>e.jsx("div",{ref:D,role:"status","aria-label":d?void 0:T,"aria-hidden":d||void 0,className:_("bg-krds-gray-20",q&&"animate-pulse",l==="circle"?"rounded-full":l==="text"?"rounded":"rounded-md",t),style:{width:A,height:j,...I},...C}));c.displayName="Skeleton";c.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{variant:{required:!1,tsType:{name:"union",raw:"'rect' | 'text' | 'circle'",elements:[{name:"literal",value:"'rect'"},{name:"literal",value:"'text'"},{name:"literal",value:"'circle'"}]},description:"",defaultValue:{value:"'rect'",computed:!1}},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'300px'",computed:!1}},height:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'20px'",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'로딩 중'",computed:!1}},animate:{required:!1,tsType:{name:"boolean"},description:"Stops the pulse for reduced-motion contexts or visual regression snapshots.",defaultValue:{value:"true",computed:!1}},decorative:{required:!1,tsType:{name:"boolean"},description:"Hides an individual decorative placeholder from assistive technology.",defaultValue:{value:"false",computed:!1}}}};const E=L([a("Bootstrap","Placeholders","https://getbootstrap.com/docs/5.3/components/placeholders/"),a("Flowbite","Skeleton","https://flowbite.com/docs/components/skeleton/"),a("daisyUI","Skeleton","https://daisyui.com/components/skeleton/"),a("Ant Design","Skeleton","https://ant.design/components/skeleton/"),a("Chakra UI","Skeleton","https://www.chakra-ui.com/docs/components/skeleton"),a("Quasar","Skeleton","https://quasar.dev/vue-components/skeleton")]),H={title:"Atoms/Display/Skeleton",component:c,tags:["autodocs","display","custom-ui","ref:chakra-ui","ref:shadcn-ui","ref:daisy-ui","ref:ant-design","ref:flowbite","ref:vuetify","ref:mui","ref:bootstrap","ref:quasar"],parameters:{references:E,docs:{description:{component:`
## Skeleton

**콘텐츠가 로딩되기 전 뼈대 UI**를 표시하는 플레이스홀더 컴포넌트입니다.

---

### 언제 사용하나요?

- API 응답 대기 중 레이아웃 이동(CLS) 방지
- 사용자에게 콘텐츠 로딩 중임을 시각적으로 전달

---

### variant 가이드

| variant | 용도 |
|---|---|
| \`rect\` | 이미지, 카드, 배너 영역 |
| \`text\` | 텍스트 한 줄 |
| \`circle\` | 아바타, 아이콘 |

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | \`role="status"\`와 \`aria-label="로딩 중"\`을 추가하세요. |
| ✅ | 로딩 완료 후 실제 콘텐츠로 대체되어야 합니다. |
        `}}},argTypes:{variant:{description:"뼈대 모양",control:{type:"select"},options:["rect","text","circle"],table:{type:{summary:"'rect' | 'text' | 'circle'"},defaultValue:{summary:"'rect'"},category:"Appearance"}},width:{description:"너비",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'300px'"},category:"Size"}},height:{description:"높이",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'20px'"},category:"Size"}},ariaLabel:{description:"aria-label",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'로딩 중'"},category:"A11y"}},animate:{description:"pulse 애니메이션 사용 여부",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Accessibility"}},decorative:{description:"개별 장식 플레이스홀더를 보조기기에서 숨깁니다.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Accessibility"}}},args:{variant:"rect",width:"300px",height:"20px",ariaLabel:"로딩 중"},render:t=>e.jsx(c,{...t,children:t.children??t.label??t.text??void 0})},s={name:"텍스트 한 줄",args:{variant:"text",width:"240px",height:"16px"},parameters:{docs:{description:{story:"텍스트 한 줄이 로딩될 자리입니다."}}}},r={name:"이미지 영역",args:{variant:"rect",width:"300px",height:"180px"},parameters:{docs:{description:{story:"이미지나 배너가 로딩될 사각형 영역입니다."}}}},o={name:"아바타 원형",args:{variant:"circle",width:"48px",height:"48px"},parameters:{docs:{description:{story:"아바타나 프로필 이미지가 로딩될 원형 영역입니다."}}}},i={name:"정적 장식 플레이스홀더",args:{variant:"text",width:"240px",height:"16px",animate:!1,decorative:!0}},n={render:()=>e.jsxs("div",{className:"custom-ui-box p-md bordered radius-md bg-white",style:{width:"300px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx("div",{className:"custom-ui-skeleton rect",style:{width:"100%",height:"160px"},role:"status","aria-hidden":"true"}),e.jsx("div",{className:"custom-ui-skeleton text",style:{width:"80%"}}),e.jsx("div",{className:"custom-ui-skeleton text",style:{width:"60%",height:"12px"}}),e.jsx("div",{className:"custom-ui-skeleton text",style:{width:"40%",height:"12px"}})]}),name:"카드 뼈대",parameters:{controls:{disable:!0},docs:{description:{story:"카드 컴포넌트 전체 로딩 뼈대 예시입니다."}}}};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '텍스트 한 줄',
  args: {
    variant: 'text',
    width: '240px',
    height: '16px'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '텍스트 한 줄이 로딩될 자리입니다.'
      }
    }
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,x,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '이미지 영역',
  args: {
    variant: 'rect',
    width: '300px',
    height: '180px'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '이미지나 배너가 로딩될 사각형 영역입니다.'
      }
    }
  }
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,g,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '아바타 원형',
  args: {
    variant: 'circle',
    width: '48px',
    height: '48px'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '아바타나 프로필 이미지가 로딩될 원형 영역입니다.'
      }
    }
  }
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,w,k;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '정적 장식 플레이스홀더',
  args: {
    variant: 'text',
    width: '240px',
    height: '16px',
    animate: false,
    decorative: true
  } as any
}`,...(k=(w=i.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var S,N,V;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="custom-ui-box p-md bordered radius-md bg-white" style={{
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <div className="custom-ui-skeleton rect" style={{
      width: '100%',
      height: '160px'
    }} role="status" aria-hidden="true"></div>
      <div className="custom-ui-skeleton text" style={{
      width: '80%'
    }}></div>
      <div className="custom-ui-skeleton text" style={{
      width: '60%',
      height: '12px'
    }}></div>
      <div className="custom-ui-skeleton text" style={{
      width: '40%',
      height: '12px'
    }}></div>
    </div>,
  name: '카드 뼈대',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: '카드 컴포넌트 전체 로딩 뼈대 예시입니다.'
      }
    }
  }
}`,...(V=(N=n.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};const O=["TextLine","ImageRect","CircleAvatar","StaticDecorative","CardSkeleton"];export{n as CardSkeleton,o as CircleAvatar,r as ImageRect,i as StaticDecorative,s as TextLine,O as __namedExportsOrder,H as default};
