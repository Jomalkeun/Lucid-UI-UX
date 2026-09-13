import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{P as b}from"./ProductQuickAdd-BQA3sywI.js";import{C as a}from"./CommerceProductCard-BWoLxURb.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./button-B_kt0lNs.js";import"./index-DtBajwEi.js";import"./index-CkIaN0ex.js";import"./utils-DCADjnpI.js";import"./loader-circle-Db56uVXG.js";import"./createLucideIcon-Ct87QT5c.js";import"./ProductOptionGroup-4-XUcv_N.js";import"./ProductCardBase-BHkddnqh.js";import"./ProductMedia-CpzsUhUO.js";import"./WireframeMedia-DAgc5xmV.js";import"./ProductPrice-DViHxkmP.js";import"./ProductRating-BLxbG65O.js";import"./star-CebXzFWR.js";import"./ProductAvailabilityNotice-B6rs4-l-.js";import"./bell-DxdOSpa8.js";import"./clock-3-KKgYpl7S.js";import"./package-check-CcXDl18K.js";import"./ProductBadgeGroup-DIwaTuWO.js";const F={title:"Molecules/Commerce/CommerceProductCard",component:a,args:{title:"데일리 컴포트 슈즈",price:"139,000원",originalPrice:"159,000원",discountRate:13,rating:4.8,reviewCount:126,badges:[{id:"new",label:"신상품"},{id:"sale",label:"할인",tone:"sale"}]}},o={render:e=>r.jsx("div",{className:"w-72",children:r.jsx(a,{...e})})},t={render:e=>r.jsx("div",{className:"w-72",children:r.jsx(a,{...e,availability:"low-stock",actionSlot:r.jsx(b,{title:e.title,options:[{value:"250",label:"250"},{value:"260",label:"260"}]})})})},i={args:{density:"compact",availability:"sold-out",description:"긴 상품 설명도 카드의 정보 계층을 유지합니다.",colorCount:8},render:e=>r.jsx("div",{className:"w-72",children:r.jsx(a,{...e})})},s={args:{layout:"horizontal",imageSrc:void 0,imageAlt:void 0,rating:void 0,reviewCount:void 0},render:e=>r.jsx("div",{className:"max-w-md",children:r.jsx(a,{...e})})};var d,c,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div className="w-72"><CommerceProductCard {...args} /></div>
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,n,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <div className="w-72"><CommerceProductCard {...args} availability="low-stock" actionSlot={<ProductQuickAdd title={args.title} options={[{
      value: '250',
      label: '250'
    }, {
      value: '260',
      label: '260'
    }]} />} /></div>
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var u,v,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    density: 'compact',
    availability: 'sold-out',
    description: '긴 상품 설명도 카드의 정보 계층을 유지합니다.',
    colorCount: 8
  },
  render: args => <div className="w-72"><CommerceProductCard {...args} /></div>
}`,...(g=(v=i.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var C,x,w;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    layout: 'horizontal',
    imageSrc: undefined,
    imageAlt: undefined,
    rating: undefined,
    reviewCount: undefined
  },
  render: args => <div className="max-w-md"><CommerceProductCard {...args} /></div>
}`,...(w=(x=s.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const G=["Vertical","QuickAdd","CompactUnavailable","HorizontalNoImage"];export{i as CompactUnavailable,s as HorizontalNoImage,t as QuickAdd,o as Vertical,G as __namedExportsOrder,F as default};
