import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{P as i}from"./ProductBadgeGroup-DIwaTuWO.js";import"./utils-DCADjnpI.js";const p={title:"Molecules/Commerce/ProductBadgeGroup",component:i},e={args:{badges:[{id:"new",label:"신상품"},{id:"sale",label:"20% 할인",tone:"sale"},{id:"stock",label:"재고 임박",tone:"warning"},{id:"soldout",label:"품절",tone:"disabled"}]}},a={args:{placement:"media",maxVisible:2,badges:[{id:"new",label:"신상품"},{id:"sale",label:"할인",tone:"sale"},{id:"delivery",label:"무료 배송",tone:"success"}]},render:c=>s.jsx("div",{className:"relative h-48 w-72 bg-muted",children:s.jsx(i,{...c})})};var r,l,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    badges: [{
      id: 'new',
      label: '신상품'
    }, {
      id: 'sale',
      label: '20% 할인',
      tone: 'sale'
    }, {
      id: 'stock',
      label: '재고 임박',
      tone: 'warning'
    }, {
      id: 'soldout',
      label: '품절',
      tone: 'disabled'
    }]
  }
}`,...(o=(l=e.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var d,n,t;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placement: 'media',
    maxVisible: 2,
    badges: [{
      id: 'new',
      label: '신상품'
    }, {
      id: 'sale',
      label: '할인',
      tone: 'sale'
    }, {
      id: 'delivery',
      label: '무료 배송',
      tone: 'success'
    }]
  },
  render: args => <div className="relative h-48 w-72 bg-muted"><ProductBadgeGroup {...args} /></div>
}`,...(t=(n=a.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const g=["Matrix","MediaOverflow"];export{e as Matrix,a as MediaOverflow,g as __namedExportsOrder,p as default};
