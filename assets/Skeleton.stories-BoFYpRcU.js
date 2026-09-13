import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as A}from"./reference-types-4ftiVeOu.js";import{r as V}from"./index-BxXVWNx3.js";import{c as F}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const i=V.forwardRef(({className:t,variant:n="rect",width:b="300px",height:k="20px",ariaLabel:w="로딩 중",style:S,...N},j)=>e.jsx("div",{ref:j,role:"status","aria-label":w,className:F("animate-pulse bg-krds-gray-20",n==="circle"?"rounded-full":n==="text"?"rounded":"rounded-md",t),style:{width:b,height:k,...S},...N}));i.displayName="Skeleton";i.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{variant:{required:!1,tsType:{name:"union",raw:"'rect' | 'text' | 'circle'",elements:[{name:"literal",value:"'rect'"},{name:"literal",value:"'text'"},{name:"literal",value:"'circle'"}]},description:"",defaultValue:{value:"'rect'",computed:!1}},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'300px'",computed:!1}},height:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'20px'",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'로딩 중'",computed:!1}}}};const I=A([{library:"Bootstrap",component:"Placeholders",url:"https://getbootstrap.com/docs/5.3/components/placeholders/",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"Skeleton",url:"https://flowbite.com/docs/components/skeleton/",usedFor:["comparison"],relation:"compared"},{library:"daisyUI",component:"Skeleton",url:"https://daisyui.com/components/skeleton/",usedFor:["comparison"],relation:"compared"},{library:"Ant Design",component:"Skeleton",url:"https://ant.design/components/skeleton/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Skeleton",url:"https://www.chakra-ui.com/docs/components/skeleton",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Skeleton",url:"https://quasar.dev/vue-components/skeleton",usedFor:["comparison"],relation:"compared"}]),D={title:"Atoms/Display/Skeleton",component:i,tags:["autodocs","display","custom-ui","ref:chakra-ui","ref:shadcn-ui","ref:daisy-ui","ref:ant-design","ref:flowbite","ref:vuetify","ref:mui","ref:bootstrap","ref:quasar"],parameters:{references:I,docs:{description:{component:`
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
        `}}},argTypes:{variant:{description:"뼈대 모양",control:{type:"select"},options:["rect","text","circle"],table:{type:{summary:"'rect' | 'text' | 'circle'"},defaultValue:{summary:"'rect'"},category:"Appearance"}},width:{description:"너비",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'300px'"},category:"Size"}},height:{description:"높이",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'20px'"},category:"Size"}},ariaLabel:{description:"aria-label",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'로딩 중'"},category:"A11y"}}},args:{variant:"rect",width:"300px",height:"20px",ariaLabel:"로딩 중"},render:t=>e.jsx(i,{...t,children:t.children??t.label??t.text??void 0})},r={name:"텍스트 한 줄",args:{variant:"text",width:"240px",height:"16px"},parameters:{docs:{description:{story:"텍스트 한 줄이 로딩될 자리입니다."}}}},a={name:"이미지 영역",args:{variant:"rect",width:"300px",height:"180px"},parameters:{docs:{description:{story:"이미지나 배너가 로딩될 사각형 영역입니다."}}}},s={name:"아바타 원형",args:{variant:"circle",width:"48px",height:"48px"},parameters:{docs:{description:{story:"아바타나 프로필 이미지가 로딩될 원형 영역입니다."}}}},o={render:()=>e.jsxs("div",{className:"custom-ui-box p-md bordered radius-md bg-white",style:{width:"300px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx("div",{className:"custom-ui-skeleton rect",style:{width:"100%",height:"160px"},role:"status","aria-hidden":"true"}),e.jsx("div",{className:"custom-ui-skeleton text",style:{width:"80%"}}),e.jsx("div",{className:"custom-ui-skeleton text",style:{width:"60%",height:"12px"}}),e.jsx("div",{className:"custom-ui-skeleton text",style:{width:"40%",height:"12px"}})]}),name:"카드 뼈대",parameters:{controls:{disable:!0},docs:{description:{story:"카드 컴포넌트 전체 로딩 뼈대 예시입니다."}}}};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,x,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var g,f,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const _=["TextLine","ImageRect","CircleAvatar","CardSkeleton"];export{o as CardSkeleton,s as CircleAvatar,a as ImageRect,r as TextLine,_ as __namedExportsOrder,D as default};
