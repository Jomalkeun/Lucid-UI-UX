import{j as Q}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-BxXVWNx3.js";import{Q as S}from"./QuantitySelector-CpEHY_NY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./minus-DhOLGSmI.js";import"./createLucideIcon-Ct87QT5c.js";import"./plus-ClwFJ4cq.js";const R={title:"Molecules/Commerce/QuantitySelector",component:S,tags:["autodocs"],args:{value:1,min:1,max:5}},e={},r={args:{value:5}},a={args:{min:1,max:1}},t={render:function(o){const[C,f]=y.useState(o.value);return Q.jsx(S,{...o,value:C,onChange:f})}};var s,n,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(m=(n=e.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var u,c,i;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    value: 5
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,p,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    min: 1,
    max: 1
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,x,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: function Controlled(args) {
    const [value, setValue] = useState(args.value);
    return <QuantitySelector {...args} value={value} onChange={setValue} />;
  }
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const b=["Minimum","Maximum","FixedQuantity","Controlled"];export{t as Controlled,a as FixedQuantity,r as Maximum,e as Minimum,b as __namedExportsOrder,R as default};
