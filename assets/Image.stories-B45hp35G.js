import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{d as q}from"./reference-types-4ftiVeOu.js";import{r as A}from"./index-BxXVWNx3.js";import{c as D}from"./index-CkIaN0ex.js";import{c as d}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const N=D("overflow-hidden block",{variants:{radius:{none:"rounded-none",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg"},rounded:{true:"rounded-full",false:""}},defaultVariants:{radius:"md",rounded:!1}}),s=A.forwardRef(({className:e,src:x,alt:I,width:n=300,height:i=200,objectFit:S="cover",rounded:m,radius:V,style:C,...R},T)=>{const k=N({radius:m?void 0:V,rounded:m});return c.jsx("span",{className:d(k,"inline-block"),style:{width:n,height:i},children:c.jsx("img",{ref:T,src:x,alt:I,width:typeof n=="number"?n:void 0,height:typeof i=="number"?i:void 0,className:d("w-full h-full",e),style:{objectFit:S,display:"block",...C},...R})})});s.displayName="Image";s.__docgenInfo={description:"",methods:[],displayName:"Image",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:"300",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:"200",computed:!1}},objectFit:{required:!1,tsType:{name:"ReactCSSProperties['objectFit']",raw:"React.CSSProperties['objectFit']"},description:"",defaultValue:{value:"'cover'",computed:!1}}},composes:["Omit","VariantProps"]};const _=q([{library:"Bootstrap",component:"Image",url:"https://getbootstrap.com/docs/5.3/content/images/",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"Images",url:"https://flowbite.com/docs/typography/images/",usedFor:["comparison"],relation:"compared"},{library:"Ant Design",component:"Image",url:"https://ant.design/components/image/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Image",url:"https://www.chakra-ui.com/docs/components/image",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Img",url:"https://quasar.dev/vue-components/img",usedFor:["comparison"],relation:"compared"}]),B={title:"Atoms/Display/Image",component:s,tags:["autodocs","display","custom-ui","ref:chakra-ui","ref:ant-design","ref:flowbite","ref:vuetify","ref:mui","ref:bootstrap","ref:quasar"],parameters:{references:_,docs:{description:{component:`
## Image

**접근성 속성이 강제된 이미지 컴포넌트**입니다. \`alt\` 텍스트와 적절한 크기를 함께 관리합니다.

---

### 언제 사용하나요?

| 용도 | 예시 |
|---|---|
| 콘텐츠 이미지 | 기사 대표 이미지, 제품 사진 |
| 썸네일 | 리스트·카드 내 미리보기 이미지 |
| 아이콘 대용 | 브랜드 로고, SVG 이미지 |

---

### objectFit 가이드

| 값 | 설명 | 권장 용도 |
|---|---|---|
| \`cover\` | 비율 유지, 영역 채움 (잘릴 수 있음) | 썸네일, 배너 |
| \`contain\` | 비율 유지, 영역 내 완전 표시 | 로고, 아이콘 |
| \`fill\` | 비율 무시, 영역 채움 | 배경 채우기 |

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | 의미 있는 이미지에는 반드시 설명적인 \`alt\` 텍스트를 제공하세요. |
| ✅ | 장식용 이미지는 \`alt=""\`로 스크린리더가 무시하도록 하세요. |
| ⚠️ | \`width\`와 \`height\`를 명시하면 CLS(레이아웃 이동)를 방지합니다. |
        `}}},argTypes:{src:{description:"이미지 URL",control:"text",table:{type:{summary:"string"},category:"Content"}},alt:{description:"대체 텍스트 (필수)",control:"text",table:{type:{summary:"string"},category:"A11y"}},width:{description:"너비",control:"text",table:{type:{summary:"string | number"},defaultValue:{summary:"300"},category:"Size"}},height:{description:"높이",control:"text",table:{type:{summary:"string | number"},defaultValue:{summary:"200"},category:"Size"}},objectFit:{description:"이미지 맞춤 방식",control:{type:"select"},options:["cover","contain","fill","none","scale-down"],table:{type:{summary:"'cover' | 'contain' | 'fill' | 'none' | 'scale-down'"},defaultValue:{summary:"'cover'"},category:"Appearance"}},rounded:{description:"원형 (프로필 사진)",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Appearance"}},radius:{description:"모서리 반경",control:{type:"select"},options:["none","sm","md","lg"],table:{type:{summary:"'none' | 'sm' | 'md' | 'lg'"},defaultValue:{summary:"'md'"},category:"Appearance"}}},args:{src:"https://picsum.photos/seed/krds/300/200",alt:"샘플 콘텐츠 이미지",width:300,height:200,objectFit:"cover",rounded:!1,radius:"md"},render:e=>c.jsx(s,{...e,children:e.children??e.label??e.text??void 0})},r={name:"기본 이미지",parameters:{docs:{description:{story:"기본 콘텐츠 이미지입니다."}}}},t={name:"원형 (프로필)",args:{src:"https://picsum.photos/seed/profile/200/200",width:80,height:80,rounded:!0,objectFit:"cover",alt:"사용자 프로필 사진"},parameters:{docs:{description:{story:"프로필 이미지처럼 원형으로 잘라낼 때 사용합니다."}}}},o={name:"썸네일",args:{width:120,height:80,radius:"sm",alt:"기사 썸네일 이미지"},parameters:{docs:{description:{story:"리스트·카드 내 소형 썸네일 이미지입니다."}}}},a={name:"Contain (로고)",args:{src:"https://picsum.photos/seed/logo/200/100",objectFit:"contain",width:200,height:80,radius:"none",alt:"서비스 로고"},parameters:{docs:{description:{story:"로고처럼 비율을 유지하며 영역 안에 완전히 보이게 할 때 사용합니다."}}}};var p,l,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '기본 이미지',
  parameters: {
    docs: {
      description: {
        story: '기본 콘텐츠 이미지입니다.'
      }
    }
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,y,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '원형 (프로필)',
  args: {
    src: 'https://picsum.photos/seed/profile/200/200',
    width: 80,
    height: 80,
    rounded: true,
    objectFit: 'cover',
    alt: '사용자 프로필 사진'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '프로필 이미지처럼 원형으로 잘라낼 때 사용합니다.'
      }
    }
  }
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,b,w;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '썸네일',
  args: {
    width: 120,
    height: 80,
    radius: 'sm',
    alt: '기사 썸네일 이미지'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '리스트·카드 내 소형 썸네일 이미지입니다.'
      }
    }
  }
}`,...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var v,F,j;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Contain (로고)',
  args: {
    src: 'https://picsum.photos/seed/logo/200/100',
    objectFit: 'contain',
    width: 200,
    height: 80,
    radius: 'none',
    alt: '서비스 로고'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '로고처럼 비율을 유지하며 영역 안에 완전히 보이게 할 때 사용합니다.'
      }
    }
  }
}`,...(j=(F=a.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};const G=["Default","Rounded","Thumbnail","Contain"];export{a as Contain,r as Default,t as Rounded,o as Thumbnail,G as __namedExportsOrder,B as default};
