import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{d as j}from"./reference-types-4ftiVeOu.js";import{r as q}from"./index-BxXVWNx3.js";import{c as S}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const T={"ratio-16x9":"56.25%","ratio-4x3":"75%","ratio-1x1":"100%","ratio-3x2":"66.67%","ratio-2x3":"133.33%"},V={"bg-subtle":"#f8fafc","bg-muted":"#f1f5f9","bg-info":"#eff6ff","bg-success":"#f0fdf4","bg-warning":"#fffbeb","bg-danger":"#fef2f2"},s=q.forwardRef(({children:e,ratio:f="ratio-16x9",width:x="100%",background:i="bg-subtle",label:y,className:v,style:w,...R},h)=>{const k=T[f]??"56.25%",A=V[i]??i;return o.jsx("div",{ref:h,style:{width:x,...w},className:S(v),...R,children:o.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:k,background:A,overflow:"hidden",borderRadius:8},children:o.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:"#64748b",fontSize:14,fontFamily:"system-ui, sans-serif"},children:e??y})})})});s.displayName="AspectRatio";s.__docgenInfo={description:"",methods:[],displayName:"AspectRatio",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},ratio:{required:!1,tsType:{name:"union",raw:"'ratio-16x9' | 'ratio-4x3' | 'ratio-1x1' | 'ratio-3x2' | 'ratio-2x3'",elements:[{name:"literal",value:"'ratio-16x9'"},{name:"literal",value:"'ratio-4x3'"},{name:"literal",value:"'ratio-1x1'"},{name:"literal",value:"'ratio-3x2'"},{name:"literal",value:"'ratio-2x3'"}]},description:"",defaultValue:{value:"'ratio-16x9'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:"'100%'",computed:!1}},background:{required:!1,tsType:{name:"union",raw:"BackgroundKey | string",elements:[{name:"union",raw:"'bg-subtle' | 'bg-muted' | 'bg-info' | 'bg-success' | 'bg-warning' | 'bg-danger'",elements:[{name:"literal",value:"'bg-subtle'"},{name:"literal",value:"'bg-muted'"},{name:"literal",value:"'bg-info'"},{name:"literal",value:"'bg-success'"},{name:"literal",value:"'bg-warning'"},{name:"literal",value:"'bg-danger'"}]},{name:"string"}]},description:"",defaultValue:{value:"'bg-subtle'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Story preview label"}}};const N=j([{library:"Bootstrap",component:"Ratios",url:"https://getbootstrap.com/docs/5.3/helpers/ratio/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Aspect Ratio",url:"https://www.chakra-ui.com/docs/components/aspect-ratio",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Responsive",url:"https://quasar.dev/vue-components/responsive",usedFor:["comparison"],relation:"compared"}]),I={title:"Layout/Primitives/AspectRatio",component:s,tags:["autodocs","layout","custom-ui","ref:chakra-ui","ref:shadcn-ui","ref:vuetify","ref:mui","ref:bootstrap","ref:quasar"],parameters:{references:N,docs:{description:{component:`
## AspectRatio

**비율을 고정**하여 자식 콘텐츠를 감싸는 컨테이너입니다. 이미지·영상·지도 등 종횡비가 중요한 미디어에 사용합니다.

---

### 주요 비율

| class | padding-bottom | 용도 |
|---|---|---|
| \`ratio-16x9\` | 56.25% | 동영상, 유튜브 임베드 |
| \`ratio-4x3\` | 75% | 일반 이미지, 슬라이드 |
| \`ratio-1x1\` | 100% | 프로필 이미지, 아이콘 |
| \`ratio-3x2\` | 66.67% | 사진, 썸네일 |
| \`ratio-2x3\` | 133.33% | 세로형 포스터 |

---

### 구현 방식

padding-bottom trick을 사용합니다.
\`\`\`html
<div class="custom-ui-aspect-ratio ratio-16x9">
  <iframe ...></iframe>
</div>
\`\`\`
        `}}},argTypes:{ratio:{description:"비율",control:{type:"select"},options:["ratio-16x9","ratio-4x3","ratio-1x1","ratio-3x2","ratio-2x3"],table:{type:{summary:"'ratio-16x9' | 'ratio-4x3' | 'ratio-1x1' | 'ratio-3x2' | 'ratio-2x3'"},defaultValue:{summary:"'ratio-16x9'"},category:"Appearance"}},width:{description:"컨테이너 너비",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'100%'"},category:"Size"}},background:{description:"배경색",control:{type:"select"},options:["bg-subtle","bg-muted","bg-info","bg-success","bg-warning","bg-danger"],table:{type:{summary:"'bg-subtle' | 'bg-muted' | 'bg-info' | ..."},defaultValue:{summary:"'bg-subtle'"},category:"Appearance"}},label:{description:"내부 레이블 (스토리 전용)",control:"text",table:{type:{summary:"string"},category:"Preview"}}},args:{ratio:"ratio-16x9",width:"100%",background:"bg-subtle",label:"16:9 비율 영역"},render:e=>o.jsx(s,{...e,children:e.children??e.label??e.text??void 0})},a={name:"16:9 (동영상)",args:{ratio:"ratio-16x9",label:"16:9 — 동영상·유튜브 임베드"},parameters:{docs:{description:{story:"표준 동영상 비율입니다. iframe·video 태그 래퍼로 사용합니다."}}}},r={name:"1:1 (정사각형)",args:{ratio:"ratio-1x1",label:"1:1 — 프로필·아이콘",background:"bg-success"},parameters:{docs:{description:{story:"정사각형 비율입니다. 프로필 이미지, 아바타 래퍼에 활용합니다."}}}},t={name:"4:3 (이미지)",args:{ratio:"ratio-4x3",label:"4:3 — 일반 이미지·슬라이드",background:"bg-warning"},parameters:{docs:{description:{story:"전통적인 이미지 비율입니다. 썸네일·슬라이드 이미지 래퍼에 사용합니다."}}}};var n,c,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '16:9 (동영상)',
  args: {
    ratio: 'ratio-16x9',
    label: '16:9 — 동영상·유튜브 임베드'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '표준 동영상 비율입니다. iframe·video 태그 래퍼로 사용합니다.'
      }
    }
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '1:1 (정사각형)',
  args: {
    ratio: 'ratio-1x1',
    label: '1:1 — 프로필·아이콘',
    background: 'bg-success'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '정사각형 비율입니다. 프로필 이미지, 아바타 래퍼에 활용합니다.'
      }
    }
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,b,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '4:3 (이미지)',
  args: {
    ratio: 'ratio-4x3',
    label: '4:3 — 일반 이미지·슬라이드',
    background: 'bg-warning'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '전통적인 이미지 비율입니다. 썸네일·슬라이드 이미지 래퍼에 사용합니다.'
      }
    }
  }
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const z=["Ratio16x9","Ratio1x1","Ratio4x3"];export{a as Ratio16x9,r as Ratio1x1,t as Ratio4x3,z as __namedExportsOrder,I as default};
