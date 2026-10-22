import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-BxXVWNx3.js";import{P as i}from"./PriceRangeFilter-CA3q1IxF.js";import"./_commonjsHelpers-CqkleIqs.js";import"./NumberInput-D9_a203z.js";import"./numeric-DcYt7Gyg.js";const C={title:"Molecules/Commerce/PriceRangeFilter",component:i,args:{bounds:{min:0,max:2e5,step:1e3,unit:"원"},onChange:()=>{}}},e={render:function(m){const[u,l]=d.useState([1e4,15e4]);return p.jsx(i,{...m,value:u,onChange:l})}},r={args:{disabled:!0}};var a,t,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: function Demo(args) {
    const [value, setValue] = useState<PriceRange>([10000, 150000]);
    return <PriceRangeFilter {...args} value={value} onChange={setValue} />;
  }
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var o,n,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const D=["Interactive","Disabled"];export{r as Disabled,e as Interactive,D as __namedExportsOrder,C as default};
