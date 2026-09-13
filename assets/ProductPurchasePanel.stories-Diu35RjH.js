import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-BxXVWNx3.js";import{P as a}from"./ProductPurchasePanel-CsoaukFr.js";import"./_commonjsHelpers-CqkleIqs.js";import"./button-B_kt0lNs.js";import"./index-DtBajwEi.js";import"./index-CkIaN0ex.js";import"./utils-DCADjnpI.js";import"./loader-circle-Db56uVXG.js";import"./createLucideIcon-Ct87QT5c.js";import"./ProductOptionGroup-4-XUcv_N.js";import"./ProductPrice-DViHxkmP.js";import"./ProductRating-BLxbG65O.js";import"./star-CebXzFWR.js";import"./QuantitySelector-CpEHY_NY.js";import"./minus-DhOLGSmI.js";import"./plus-ClwFJ4cq.js";import"./heart-DRT3Fu_h.js";const B={title:"Organisms/Commerce/ProductPurchasePanel",component:a,args:{category:"SHOES / NEW ARRIVAL",title:"데일리 컴포트 슈즈",price:"139,000원",originalPrice:"159,000원",discountRate:13,rating:4.8,reviewCount:126,colors:[{value:"black",label:"블랙",swatch:"#111111"},{value:"brown",label:"브라운",swatch:"#7e5d47"}],sizes:["230","240","250"].map(r=>({value:r,label:r}))}},t={render:r=>e.jsx("div",{className:"max-w-md",children:e.jsx(a,{...r})})},s={args:{defaultSize:"250",actionState:"loading"},render:r=>e.jsx("div",{className:"max-w-md",children:e.jsx(a,{...r})})},o={args:{defaultSize:"250",actionState:"error",actionError:"요청을 처리하지 못했습니다. 잠시 후 다시 시도해 주세요."},render:r=>e.jsx("div",{className:"max-w-md",children:e.jsx(a,{...r})})},i={render:r=>{const[z,w]=n.useState(),[f,j]=n.useState(1);return e.jsx("div",{className:"max-w-md",children:e.jsx(a,{...r,size:z,onSizeChange:w,quantity:f,onQuantityChange:j})})}};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <div className="max-w-md"><ProductPurchasePanel {...args} /></div>
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    defaultSize: '250',
    actionState: 'loading'
  },
  render: args => <div className="max-w-md"><ProductPurchasePanel {...args} /></div>
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var g,S,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    defaultSize: '250',
    actionState: 'error',
    actionError: '요청을 처리하지 못했습니다. 잠시 후 다시 시도해 주세요.'
  },
  render: args => <div className="max-w-md"><ProductPurchasePanel {...args} /></div>
}`,...(x=(S=o.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var P,h,v;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    const [size, setSize] = useState<string>();
    const [quantity, setQuantity] = useState(1);
    return <div className="max-w-md"><ProductPurchasePanel {...args} size={size} onSizeChange={setSize} quantity={quantity} onQuantityChange={setQuantity} /></div>;
  }
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const F=["Default","Loading","Error","Controlled"];export{i as Controlled,t as Default,o as Error,s as Loading,F as __namedExportsOrder,B as default};
