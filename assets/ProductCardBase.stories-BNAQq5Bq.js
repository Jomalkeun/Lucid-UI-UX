import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{within as n,userEvent as u,expect as d,fn as k}from"./index-DH-M5T-F.js";import{P as E}from"./ProductCardBase-BHkddnqh.js";import{P as e}from"./ProductCard-CdPZKlAD.js";import{C as a}from"./CommerceProductCard-BWoLxURb.js";import"./ProductMedia-CpzsUhUO.js";import"./utils-DCADjnpI.js";import"./WireframeMedia-DAgc5xmV.js";import"./ProductPrice-DViHxkmP.js";import"./ProductRating-BLxbG65O.js";import"./star-CebXzFWR.js";import"./createLucideIcon-Ct87QT5c.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./heart-DRT3Fu_h.js";import"./ProductAvailabilityNotice-B6rs4-l-.js";import"./bell-DxdOSpa8.js";import"./clock-3-KKgYpl7S.js";import"./package-check-CcXDl18K.js";import"./ProductBadgeGroup-DIwaTuWO.js";const o={id:"comparison",title:"데일리 슈즈",price:"99,000원",description:"가볍고 편안한 일상용 신발",badge:"SALE",rating:4.5,reviewCount:12,colorCount:3},Y={title:"Molecules/Commerce/ProductCardBase",component:E,tags:["autodocs"],args:{product:o,presentation:{root:"w-64",media:"aspect-square bg-muted",body:"pt-3",title:"font-semibold",description:"text-sm text-muted-foreground",price:"mt-2"}}},r={},i={render:()=>t.jsxs("div",{className:"grid max-w-4xl gap-8 sm:grid-cols-2",children:[t.jsxs("section",{"aria-label":"기존 ProductCard",children:[t.jsx("h2",{className:"mb-4 font-bold",children:"ProductCard · listing"}),t.jsx(e,{product:o,layout:"listing",showRating:!0,showColorCount:!0})]}),t.jsxs("section",{"aria-label":"기존 CommerceProductCard",children:[t.jsx("h2",{className:"mb-4 font-bold",children:"CommerceProductCard · standard"}),t.jsx(a,{...o})]})]})},c={render:()=>t.jsxs("div",{className:"grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3",children:[t.jsxs("section",{children:[t.jsx("h2",{children:"Listing · 기본 관심 버튼"}),t.jsx(e,{product:o,layout:"listing"})]}),t.jsxs("section",{children:[t.jsx("h2",{children:"Compact · 고정 문구"}),t.jsx(e,{product:o,compact:!0})]}),t.jsxs("section",{children:[t.jsx("h2",{children:"Storefront · 평점 숨김"}),t.jsx(e,{product:o,imageRatio:"storefront",showRating:!1})]}),t.jsxs("section",{children:[t.jsx("h2",{children:"가로형 · 이미지 없음"}),t.jsx(a,{...o,layout:"horizontal"})]}),t.jsxs("section",{children:[t.jsx("h2",{children:"품절 · compact"}),t.jsx(a,{...o,density:"compact",availability:"sold-out"})]}),t.jsxs("section",{children:[t.jsx("h2",{children:"Editorial · 세로 이미지"}),t.jsx(a,{...o,variant:"editorial",mediaRatio:"portrait"})]})]})},p=k(),g=k(),s={render:()=>t.jsxs("div",{className:"grid max-w-3xl gap-8 sm:grid-cols-2",children:[t.jsx("section",{"aria-label":"상품 카드",children:t.jsx(e,{product:o,layout:"listing",actionSlot:t.jsx("button",{type:"button",onClick:p,children:"미디어 액션"})})}),t.jsx("section",{"aria-label":"커머스 카드",children:t.jsx(a,{...o,mediaActionSlot:t.jsx("button",{type:"button",children:"관심상품"}),actionSlot:t.jsx("button",{type:"button",onClick:g,children:"본문 액션"})})})]}),play:async({canvasElement:S})=>{const l=n(S),m=n(l.getByRole("region",{name:"상품 카드"})),N=n(l.getByRole("region",{name:"커머스 카드"}));await u.click(m.getByRole("button",{name:"미디어 액션"})),await u.click(N.getByRole("button",{name:"본문 액션"})),await d(p).toHaveBeenCalledOnce(),await d(g).toHaveBeenCalledOnce(),await d(m.queryByRole("button",{name:"데일리 슈즈 관심상품"})).toBeNull()}};var h,C,x;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(x=(C=r.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var b,y,j;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="grid max-w-4xl gap-8 sm:grid-cols-2">
  <section aria-label="기존 ProductCard"><h2 className="mb-4 font-bold">ProductCard · listing</h2><ProductCard product={product} layout="listing" showRating showColorCount /></section>
  <section aria-label="기존 CommerceProductCard"><h2 className="mb-4 font-bold">CommerceProductCard · standard</h2><CommerceProductCard {...product} /></section>
  </div>
}`,...(j=(y=i.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var v,w,P;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
  <section><h2>Listing · 기본 관심 버튼</h2><ProductCard product={product} layout="listing" /></section>
  <section><h2>Compact · 고정 문구</h2><ProductCard product={product} compact /></section>
  <section><h2>Storefront · 평점 숨김</h2><ProductCard product={product} imageRatio="storefront" showRating={false} /></section>
  <section><h2>가로형 · 이미지 없음</h2><CommerceProductCard {...product} layout="horizontal" /></section>
  <section><h2>품절 · compact</h2><CommerceProductCard {...product} density="compact" availability="sold-out" /></section>
  <section><h2>Editorial · 세로 이미지</h2><CommerceProductCard {...product} variant="editorial" mediaRatio="portrait" /></section>
  </div>
}`,...(P=(w=c.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var f,R,B;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="grid max-w-3xl gap-8 sm:grid-cols-2">
    <section aria-label="상품 카드"><ProductCard product={product} layout="listing" actionSlot={<button type="button" onClick={mediaClick}>미디어 액션</button>} /></section>
    <section aria-label="커머스 카드"><CommerceProductCard {...product} mediaActionSlot={<button type="button">관심상품</button>} actionSlot={<button type="button" onClick={bodyClick}>본문 액션</button>} /></section>
  </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const legacy = within(canvas.getByRole('region', {
      name: '상품 카드'
    }));
    const commerce = within(canvas.getByRole('region', {
      name: '커머스 카드'
    }));
    await userEvent.click(legacy.getByRole('button', {
      name: '미디어 액션'
    }));
    await userEvent.click(commerce.getByRole('button', {
      name: '본문 액션'
    }));
    await expect(mediaClick).toHaveBeenCalledOnce();
    await expect(bodyClick).toHaveBeenCalledOnce();
    await expect(legacy.queryByRole('button', {
      name: '데일리 슈즈 관심상품'
    })).toBeNull();
  }
}`,...(B=(R=s.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const Z=["Default","AdapterComparison","CompatibilityMatrix","ActionPlacement"];export{s as ActionPlacement,i as AdapterComparison,c as CompatibilityMatrix,r as Default,Z as __namedExportsOrder,Y as default};
