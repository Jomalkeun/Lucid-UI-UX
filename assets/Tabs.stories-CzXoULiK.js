import{j as E}from"./jsx-runtime-D_zvdyIk.js";import{T as b}from"./Tabs-DxL2iHOH.js";import{r as S}from"./index-BxXVWNx3.js";import{within as T,userEvent as R,expect as h}from"./index-DH-M5T-F.js";import"./index-BIfB_hJr.js";import"./index-Cuo70N6w.js";import"./index-BrCCJ_wP.js";import"./index-CBIApD1u.js";import"./index-CSKKChMh.js";import"./index-BKM4mA3Z.js";import"./index-W0uFi8-r.js";import"./index-BuIYde5q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DCvtqWl1.js";import"./index-D5tP6kvT.js";import"./index-D_4yO-tZ.js";import"./index-CkIaN0ex.js";import"./utils-DCADjnpI.js";const K={title:"Molecules/Navigation/Tabs",component:b,tags:["autodocs"],args:{defaultValue:"one",items:[{id:"one",label:"정보",content:"기본 정보"},{id:"two",label:"기록",content:"활동 기록"}]},parameters:{layout:"padded"}},t={},a={args:{items:[]}},r={args:{value:"two"}},o={render:function(e){const[w,y]=S.useState("one");return E.jsx(b,{...e,value:w,onChange:y})},play:async({canvasElement:n})=>{const e=T(n);await R.click(e.getByRole("tab",{name:"기록"})),await h(e.getByRole("tabpanel")).toHaveTextContent("활동 기록")}};var s,c,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,p,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    items: []
  }
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,d,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    value: 'two'
  }
}`,...(v=(d=r.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var g,x,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: function Demo(args) {
    const [value, setValue] = useState('one');
    return <Tabs {...args} value={value} onChange={setValue} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('tab', {
      name: '기록'
    }));
    await expect(canvas.getByRole('tabpanel')).toHaveTextContent('활동 기록');
  }
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const L=["Default","Alternate","AdditionalState","Interactive"];export{r as AdditionalState,a as Alternate,t as Default,o as Interactive,L as __namedExportsOrder,K as default};
