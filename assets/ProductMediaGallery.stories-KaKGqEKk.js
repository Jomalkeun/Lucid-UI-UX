import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-BxXVWNx3.js";import{P as o}from"./ProductMediaGallery-CrZoO4bA.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DCADjnpI.js";import"./WireframeMedia-DAgc5xmV.js";import"./chevron-left-CMQDJVKp.js";import"./createLucideIcon-Ct87QT5c.js";import"./chevron-right-DtG4w6Mo.js";const G={title:"Organisms/Commerce/ProductMediaGallery",component:o,args:{items:[{id:"front",alt:"상품 정면 이미지",tone:"cool"},{id:"detail",alt:"상품 상세 이미지",tone:"warm"}]}},a={render:r=>e.jsx("div",{className:"max-w-2xl",children:e.jsx(o,{...r})})},s={args:{orientation:"horizontal"},render:r=>e.jsx("div",{className:"max-w-2xl",children:e.jsx(o,{...r})})},t={render:r=>{const[g,S]=h.useState(1);return e.jsx("div",{className:"max-w-2xl",children:e.jsx(o,{...r,selectedIndex:g,onSelectedIndexChange:S})})}};var d,n,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div className="max-w-2xl"><ProductMediaGallery {...args} /></div>
}`,...(l=(n=a.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,i,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  },
  render: args => <div className="max-w-2xl"><ProductMediaGallery {...args} /></div>
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var x,p,u;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const [selectedIndex, setSelectedIndex] = useState(1);
    return <div className="max-w-2xl"><ProductMediaGallery {...args} selectedIndex={selectedIndex} onSelectedIndexChange={setSelectedIndex} /></div>;
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const M=["Default","HorizontalThumbnails","Controlled"];export{t as Controlled,a as Default,s as HorizontalThumbnails,M as __namedExportsOrder,G as default};
