import{j as z}from"./jsx-runtime-D_zvdyIk.js";import{d as h}from"./reference-types-4ftiVeOu.js";import{r as x}from"./index-BxXVWNx3.js";import{c as v}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const w={"size-4":"h-1 w-1","size-8":"h-2 w-2","size-12":"h-3 w-3","size-16":"h-4 w-4","size-24":"h-6 w-6","size-32":"h-8 w-8","size-48":"h-12 w-12","size-64":"h-16 w-16"},i=x.forwardRef(({className:e,size:f="size-24",visible:y=!1,...S},g)=>z.jsx("div",{ref:g,"aria-hidden":"true",className:v("flex-shrink-0",w[f],y&&"bg-krds-primary-20 opacity-50",e),...S}));i.displayName="Spacer";i.__docgenInfo={description:"",methods:[],displayName:"Spacer",props:{size:{required:!1,tsType:{name:"union",raw:"'size-4' | 'size-8' | 'size-12' | 'size-16' | 'size-24' | 'size-32' | 'size-48' | 'size-64'",elements:[{name:"literal",value:"'size-4'"},{name:"literal",value:"'size-8'"},{name:"literal",value:"'size-12'"},{name:"literal",value:"'size-16'"},{name:"literal",value:"'size-24'"},{name:"literal",value:"'size-32'"},{name:"literal",value:"'size-48'"},{name:"literal",value:"'size-64'"}]},description:"",defaultValue:{value:"'size-24'",computed:!1}},visible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const b=h([{library:"Chakra UI",component:"Spacer",url:"https://www.chakra-ui.com/docs/components/flex",usedFor:["comparison"],relation:"compared",note:"Chakra UI Flex 문서의 Spacer 예제를 비교 기준으로 사용합니다."},{library:"Ant Design",component:"Space",url:"https://ant.design/components/space/",usedFor:["comparison"],relation:"compared"}]),V={title:"Layout/Primitives/Spacer",component:i,tags:["autodocs","layout","custom-ui","ref:chakra-ui","ref:ant-design"],parameters:{references:b,docs:{description:{component:`
## Spacer

**여백 전용 컴포넌트**입니다. 인접 요소 사이에 지정한 크기의 빈 공간을 삽입합니다.

---

### 언제 사용하나요?

- CSS gap이 없는 레거시 레이아웃에서 형제 요소 간격 조정
- Flex/Stack 외부에서 단독으로 여백이 필요한 경우
- 디자인 토큰 기반 spacing 값을 코드에서 명시적으로 표현할 때

---

### 주의사항

> ⚠️ Stack/Flex의 \`gap\` 속성으로 해결 가능한 경우에는 Spacer 대신 gap을 우선 사용하세요.
        `}}},argTypes:{size:{description:"여백 크기",control:{type:"select"},options:["size-4","size-8","size-12","size-16","size-24","size-32","size-48","size-64"],table:{type:{summary:"'size-4' | 'size-8' | 'size-12' | 'size-16' | 'size-24' | 'size-32' | 'size-48' | 'size-64'"},defaultValue:{summary:"'size-24'"},category:"Size"}},visible:{description:"여백 영역 시각화 (스토리 전용)",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Preview"}}},args:{size:"size-24",visible:!0},render:e=>z.jsx(i,{...e,children:e.children??e.label??e.text??void 0})},s={name:"기본 (Default)",parameters:{docs:{description:{story:"24px 수직 여백입니다. 파란 영역이 실제 Spacer의 크기를 시각화합니다."}}}},a={name:"작은 여백 (Small)",args:{size:"size-8"},parameters:{docs:{description:{story:"8px 여백으로 밀집된 요소 사이 미세 간격을 추가합니다."}}}},r={name:"큰 여백 (Large)",args:{size:"size-64"},parameters:{docs:{description:{story:"64px 여백으로 섹션 간 큰 구분을 만듭니다."}}}};var t,n,o;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: '기본 (Default)',
  parameters: {
    docs: {
      description: {
        story: '24px 수직 여백입니다. 파란 영역이 실제 Spacer의 크기를 시각화합니다.'
      }
    }
  }
}`,...(o=(n=s.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var c,p,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '작은 여백 (Small)',
  args: {
    size: 'size-8'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '8px 여백으로 밀집된 요소 사이 미세 간격을 추가합니다.'
      }
    }
  }
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,d,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '큰 여백 (Large)',
  args: {
    size: 'size-64'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '64px 여백으로 섹션 간 큰 구분을 만듭니다.'
      }
    }
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const _=["Default","Small","Large"];export{s as Default,r as Large,a as Small,_ as __namedExportsOrder,V as default};
