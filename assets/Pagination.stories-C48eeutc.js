import{j as E}from"./jsx-runtime-D_zvdyIk.js";import{within as w,userEvent as h,expect as C,fn as b}from"./index-DH-M5T-F.js";import{P as x}from"./Pagination-BvBCsxOA.js";import{r as A}from"./index-BxXVWNx3.js";import"./utils-DCADjnpI.js";import"./chevron-left-CMQDJVKp.js";import"./createLucideIcon-Ct87QT5c.js";import"./chevron-right-DtG4w6Mo.js";import"./_commonjsHelpers-CqkleIqs.js";const _={title:"Molecules/Navigation/Pagination",component:x,tags:["autodocs"],args:{totalPages:100,currentPage:50,onChange:b()},parameters:{layout:"padded"}},e={},a={args:{disabled:!0}},t={args:{totalPages:0}},r={render:function(o){const[S,y]=A.useState(1);return E.jsx(x,{...o,currentPage:S,onChange:y})},play:async({canvasElement:s})=>{const o=w(s);await h.click(o.getByRole("button",{name:"2"})),await C(s.querySelector('[aria-current="page"]')).toHaveTextContent("2")}};var n,c,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,l,d;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    totalPages: 0
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var v,P,f;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: function Demo(args) {
    const [page, setPage] = useState(1);
    return <Pagination {...args} currentPage={page} onChange={setPage} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: '2'
    }));
    await expect(canvasElement.querySelector('[aria-current="page"]')).toHaveTextContent('2');
  }
}`,...(f=(P=r.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};const M=["Default","Alternate","AdditionalState","Interactive"];export{t as AdditionalState,a as Alternate,e as Default,r as Interactive,M as __namedExportsOrder,_ as default};
