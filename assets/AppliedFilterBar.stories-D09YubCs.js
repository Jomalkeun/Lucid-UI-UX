import{j as f}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./index-BxXVWNx3.js";import{A as m}from"./AppliedFilterBar-CO3antwz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./live-region-BFV6xFQp.js";import"./utils-DCADjnpI.js";import"./x-DsL683-u.js";import"./createLucideIcon-Ct87QT5c.js";const B={title:"Molecules/Commerce/AppliedFilterBar",component:m},F=[{id:"size",label:"사이즈: 250"},{id:"color",label:"색상: 블랙"},{id:"sale",label:"20% 이상 할인"}],e={render:()=>{const[p,t]=C.useState(F);return f.jsx(m,{filters:p,resultCount:128,onRemove:c=>t(d=>d.filter(u=>u.id!==c)),onClear:()=>t([])})}},r={args:{filters:[],resultCount:0}};var s,o,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const [filters, setFilters] = useState(initial);
    return <AppliedFilterBar filters={filters} resultCount={128} onRemove={id => setFilters(all => all.filter(item => item.id !== id))} onClear={() => setFilters([])} />;
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var a,l,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    filters: [],
    resultCount: 0
  }
}`,...(n=(l=r.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const R=["Interactive","Empty"];export{r as Empty,e as Interactive,R as __namedExportsOrder,B as default};
