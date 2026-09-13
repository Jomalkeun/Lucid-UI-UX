import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as h}from"./reference-types-4ftiVeOu.js";import{D as i}from"./Divider-Dgk99Rqd.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DnJVWBh-.js";import"./index-BuIYde5q.js";import"./index-DCvtqWl1.js";import"./index-DtBajwEi.js";import"./utils-DCADjnpI.js";const b=h([{library:"Radix UI",component:"Separator",url:"https://www.radix-ui.com/primitives/docs/components/separator",usedFor:["behavior","accessibility","api"],relation:"primitive"},{library:"Bootstrap",component:"Horizontal rules",url:"https://getbootstrap.com/docs/5.3/content/typography/#horizontal-rules",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"HR",url:"https://flowbite.com/docs/typography/hr/",usedFor:["comparison"],relation:"compared"},{library:"daisyUI",component:"Divider",url:"https://daisyui.com/components/divider/",usedFor:["comparison"],relation:"compared"},{library:"Ant Design",component:"Divider",url:"https://ant.design/components/divider/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Separator",url:"https://www.chakra-ui.com/docs/components/separator",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Separator",url:"https://quasar.dev/vue-components/separator",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Separator",url:"https://base-ui.com/react/components/separator",usedFor:["comparison"],relation:"compared"}]),z={title:"Atoms/Primitives/Divider",component:i,tags:["autodocs","custom-ui","ref:chakra-ui","ref:shadcn-ui","ref:daisy-ui","ref:ant-design","ref:flowbite","ref:vuetify","ref:mui","ref:bootstrap","ref:quasar","ref:base-ui","ref:radix-ui"],argTypes:{variant:{control:{type:"select"},options:["plain","labeled"]},label:{control:"text"},decorative:{control:"boolean"}},args:{variant:"plain",label:"OR",decorative:!0},parameters:{references:b,layout:"centered"},render:r=>e.jsx(i,{...r,children:r.children??r.label??r.text??void 0})},a={args:{variant:"plain",decorative:!0}},o={args:{variant:"labeled",label:"OR"}},t={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",padding:"16px"},children:[e.jsx("span",{style:{fontSize:"14px"},children:"항목 A"}),e.jsx("span",{style:{width:"1px",height:"16px",background:"#D9D7CD",display:"inline-block"},"aria-hidden":"true"}),e.jsx("span",{style:{fontSize:"14px"},children:"항목 B"}),e.jsx("span",{style:{width:"1px",height:"16px",background:"#D9D7CD",display:"inline-block"},"aria-hidden":"true"}),e.jsx("span",{style:{fontSize:"14px"},children:"항목 C"})]})};var s,n,p;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: 'plain',
    decorative: true
  } as any
}`,...(p=(n=a.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var l,c,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'labeled',
    label: 'OR'
  } as any
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,u,y;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px'
  }}>
        <span style={{
      fontSize: '14px'
    }}>항목 A</span>
        <span style={{
      width: '1px',
      height: '16px',
      background: '#D9D7CD',
      display: 'inline-block'
    }} aria-hidden="true"></span>
        <span style={{
      fontSize: '14px'
    }}>항목 B</span>
        <span style={{
      width: '1px',
      height: '16px',
      background: '#D9D7CD',
      display: 'inline-block'
    }} aria-hidden="true"></span>
        <span style={{
      fontSize: '14px'
    }}>항목 C</span>
      </div>
}`,...(y=(u=t.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const C=["Plain","Labeled","Vertical"];export{o as Labeled,a as Plain,t as Vertical,C as __namedExportsOrder,z as default};
