import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as g}from"./reference-types-CC3VHbJD.js";import{D as r}from"./Divider-B3UUxvQ4.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-W0uFi8-r.js";import"./index-BuIYde5q.js";import"./index-DCvtqWl1.js";import"./index-CSKKChMh.js";import"./utils-DCADjnpI.js";const f=g([{library:"Radix UI",component:"Separator",url:"https://www.radix-ui.com/primitives/docs/components/separator",usedFor:["behavior","accessibility","api"],relation:"primitive"},{library:"Bootstrap",component:"Horizontal rules",url:"https://getbootstrap.com/docs/5.3/content/typography/#horizontal-rules",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"HR",url:"https://flowbite.com/docs/typography/hr/",usedFor:["comparison"],relation:"compared"},{library:"daisyUI",component:"Divider",url:"https://daisyui.com/components/divider/",usedFor:["comparison"],relation:"compared"},{library:"Ant Design",component:"Divider",url:"https://ant.design/components/divider/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Separator",url:"https://www.chakra-ui.com/docs/components/separator",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Separator",url:"https://quasar.dev/vue-components/separator",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Separator",url:"https://base-ui.com/react/components/separator",usedFor:["comparison"],relation:"compared"}]),I={title:"Atoms/Primitives/Divider",component:r,tags:["autodocs","custom-ui","ref:chakra-ui","ref:shadcn-ui","ref:daisy-ui","ref:ant-design","ref:flowbite","ref:vuetify","ref:mui","ref:bootstrap","ref:quasar","ref:base-ui","ref:radix-ui"],argTypes:{variant:{control:{type:"select"},options:["plain","labeled"]},label:{control:"text"},decorative:{control:"boolean"},labelPosition:{control:{type:"select"},options:["start","center","end"]}},args:{variant:"plain",label:"OR",decorative:!0},parameters:{references:f,layout:"centered"},render:a=>e.jsx(r,{...a,children:a.children??a.label??a.text??void 0})},t={args:{variant:"plain",decorative:!0}},o={args:{variant:"labeled",label:"OR"}},i={render:()=>e.jsxs("div",{style:{display:"grid",gap:"16px",width:"420px"},children:[e.jsx(r,{variant:"labeled",label:"시작",labelPosition:"start"}),e.jsx(r,{variant:"labeled",label:"중앙",labelPosition:"center"}),e.jsx(r,{variant:"labeled",label:"끝",labelPosition:"end"})]}),parameters:{controls:{disable:!0}}},s={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",padding:"16px"},children:[e.jsx("span",{style:{fontSize:"14px"},children:"항목 A"}),e.jsx("span",{style:{width:"1px",height:"16px",background:"#D9D7CD",display:"inline-block"},"aria-hidden":"true"}),e.jsx("span",{style:{fontSize:"14px"},children:"항목 B"}),e.jsx("span",{style:{width:"1px",height:"16px",background:"#D9D7CD",display:"inline-block"},"aria-hidden":"true"}),e.jsx("span",{style:{fontSize:"14px"},children:"항목 C"})]})};var n,l,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: 'plain',
    decorative: true
  } as any
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,c,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'labeled',
    label: 'OR'
  } as any
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,b,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '16px',
    width: '420px'
  }}>
      <Divider variant="labeled" label="시작" labelPosition="start" />
      <Divider variant="labeled" label="중앙" labelPosition="center" />
      <Divider variant="labeled" label="끝" labelPosition="end" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var x,h,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const A=["Plain","Labeled","LabelPositions","Vertical"];export{i as LabelPositions,o as Labeled,t as Plain,s as Vertical,A as __namedExportsOrder,I as default};
