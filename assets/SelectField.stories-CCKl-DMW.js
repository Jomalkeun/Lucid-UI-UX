import{j as y}from"./jsx-runtime-D_zvdyIk.js";import{d as k}from"./reference-types-4ftiVeOu.js";function n({children:e,...x}){return y.jsx("div",{...x,children:e})}n.__docgenInfo={description:"",methods:[],displayName:"SelectField",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const S=k([{library:"Ark UI",component:"Field",url:"https://ark-ui.com/docs/components/field",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Chakra UI",component:"Select (Native)",url:"https://www.chakra-ui.com/docs/components/native-select",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Select",url:"https://www.chakra-ui.com/docs/components/select",usedFor:["comparison"],relation:"compared"}]),t=[{label:"홈",value:"home"},{label:"검색",value:"search"},{label:"이벤트",value:"event"}],R={title:"Molecules/Forms/SelectField",component:n,tags:["autodocs","krds-extended","ref:chakra-ui","ref:shadcn-ui","ref:ark-ui"],argTypes:{label:{control:"text"},hint:{control:"text"},errorMessage:{control:"text"},disabled:{control:"boolean"}},args:{label:"노출 채널",options:[{value:"",label:"선택하세요"},{value:"tworld",label:"옵션1"},{value:"tmembership",label:"옵션2"},{value:"tuniverse",label:"옵션3"}],hint:"채널별 노출 구좌가 달라집니다",disabled:!1},parameters:{references:S,layout:"centered"},render:e=>y.jsx(n,{...e,children:e.children??e.label??e.text??void 0})},r={args:{label:"노출 채널",options:t}},a={args:{label:"노출 채널",options:t,hint:"채널별 노출 구좌가 달라집니다"}},o={args:{label:"노출 채널",options:t,errorMessage:"채널을 선택해주세요"}},s={args:{label:"노출 채널",options:t,disabled:!0}};var l,c,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: '노출 채널',
    options: opts
  } as any
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,p,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: '노출 채널',
    options: opts,
    hint: '채널별 노출 구좌가 달라집니다'
  } as any
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,b,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: '노출 채널',
    options: opts,
    errorMessage: '채널을 선택해주세요'
  } as any
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var f,g,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: '노출 채널',
    options: opts,
    disabled: true
  } as any
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const j=["Default","WithHint","Error","Disabled"];export{r as Default,s as Disabled,o as Error,a as WithHint,j as __namedExportsOrder,R as default};
