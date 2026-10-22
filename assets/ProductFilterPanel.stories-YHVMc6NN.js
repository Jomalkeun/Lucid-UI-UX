import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-BxXVWNx3.js";import{P as l}from"./ProductFilterPanel-9NI6LGuc.js";import"./_commonjsHelpers-CqkleIqs.js";import"./facet-filter-0b6QgDys.js";import"./CheckboxChip-cKegvhTi.js";import"./utils-DCADjnpI.js";import"./button-BRuq28Bc.js";import"./index-CSKKChMh.js";import"./index-CkIaN0ex.js";import"./loader-circle-Db56uVXG.js";import"./createLucideIcon-Ct87QT5c.js";const N={title:"Molecules/Commerce/ProductFilterPanel",component:l,args:{title:"상품 필터"},parameters:{docs:{description:{component:"상품 카탈로그와 같은 facet value를 사용하는 제어형 필터 preset입니다. 정적 예시나 가짜 가격 상태를 소유하지 않습니다."}}}},e={render:a=>{const[s,o]=p.useState({});return t.jsx("div",{className:"w-72",children:t.jsx(l,{...a,value:s,onValueChange:o})})}},r={render:a=>{const[s,o]=p.useState({size:["250"],color:["블랙"]});return t.jsx("div",{className:"w-72",children:t.jsx(l,{...a,value:s,onValueChange:o})})}};var n,u,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ProductFilterValue>({});
    return <div className="w-72"><ProductFilterPanel {...args} value={value} onValueChange={setValue} /></div>;
  }
}`,...(c=(u=e.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var i,m,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ProductFilterValue>({
      size: ['250'],
      color: ['블랙']
    });
    return <div className="w-72"><ProductFilterPanel {...args} value={value} onValueChange={setValue} /></div>;
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const E=["Playground","AppliedFilters"];export{r as AppliedFilters,e as Playground,E as __namedExportsOrder,N as default};
