import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{d as u}from"./reference-types-4ftiVeOu.js";function n({children:e,...p}){return l.jsx("div",{...p,children:e})}n.__docgenInfo={description:"",methods:[],displayName:"ConditionBuilder",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const m=u([{library:"Cloudscape Design System",component:"Property filter",url:"https://cloudscape.design/components/property-filter/",usedFor:["behavior","accessibility","api"],relation:"compared"}]),v={title:"Organisms/Forms/ConditionBuilder",component:n,tags:["autodocs","krds-extended","ref:cloudscape"],argTypes:{conditions:{control:"object"}},args:{conditions:[{field:"grade",operator:"eq",value:"VIP"},{field:"product",operator:"contains",value:"5G"}]},parameters:{layout:"centered",references:m},render:e=>l.jsx(n,{...e,children:e.children??e.label??e.text??void 0})},o={args:{conditions:[{field:"grade",operator:"eq",value:"VIP"}]}},r={args:{conditions:[{field:"grade",operator:"eq",value:"VIP"},{field:"product",operator:"contains",value:"5G"}]}};var t,a,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    conditions: [{
      field: 'grade',
      operator: 'eq',
      value: 'VIP'
    }]
  } as any
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var s,d,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    conditions: [{
      field: 'grade',
      operator: 'eq',
      value: 'VIP'
    }, {
      field: 'product',
      operator: 'contains',
      value: '5G'
    }]
  } as any
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const y=["SingleCondition","MultipleConditions"];export{r as MultipleConditions,o as SingleCondition,y as __namedExportsOrder,v as default};
