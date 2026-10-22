import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{within as p,userEvent as l,expect as q,fn as N}from"./index-DH-M5T-F.js";import{R as I,T as M,P as A,C as B,I as O}from"./index-WRX73Snt.js";import{r as _}from"./index-BxXVWNx3.js";import"./index-BIfB_hJr.js";import"./index-Cuo70N6w.js";import"./index-CSKKChMh.js";import"./index-W0uFi8-r.js";import"./index-BuIYde5q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DCvtqWl1.js";import"./index-CBIApD1u.js";import"./index-D1FEdIFz.js";import"./index-D5tP6kvT.js";import"./Combination-avlVGtdT.js";import"./index-CIv5at7y.js";import"./index-BjCkHmxr.js";import"./index-D_4yO-tZ.js";import"./index-BrCCJ_wP.js";import"./index-BKM4mA3Z.js";function d({buttonText:a="드롭다운",buttonClassName:t,items:c=[],children:j,className:C,open:D,defaultOpen:R,onOpenChange:E}){return e.jsx("div",{className:C,children:e.jsxs(I,{open:D,defaultOpen:R,onOpenChange:E,children:[e.jsx(M,{className:t??"rounded border px-3 py-2",children:a}),e.jsx(A,{children:e.jsxs(B,{className:"z-50 min-w-40 rounded border bg-popover p-1 text-popover-foreground shadow-md",sideOffset:5,children:[c.map((r,k)=>e.jsxs(O,{disabled:r.disabled,onSelect:r.onClick,className:"cursor-pointer rounded p-2 outline-none data-[highlighted]:bg-accent data-[disabled]:opacity-40",children:[r.isActive?"✓ ":"",r.label]},k)),j]})})]})})}d.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{buttonText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'드롭다운'",computed:!1}},buttonClassName:{required:!1,tsType:{name:"string"},description:""},items:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownMenuItem"}],raw:"DropdownMenuItem[]"},description:"",defaultValue:{value:"[]",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const oe={title:"Molecules/Navigation/DropdownMenu",component:d,tags:["autodocs"],args:{items:[{label:"수정",onClick:N()},{label:"삭제",disabled:!0}]},parameters:{layout:"padded"}},o={},s={args:{items:[]}},n={args:{buttonText:"작업 메뉴"}},i={render:function(){const[t,c]=_.useState("");return e.jsxs(e.Fragment,{children:[e.jsx(d,{buttonText:"작업",items:[{label:"수정",onClick:()=>c("수정됨")}]}),e.jsx("output",{role:"status",children:t})]})},play:async({canvasElement:a})=>{const t=p(a);await l.click(t.getByRole("button",{name:"작업"})),await l.click(await p(document.body).findByRole("menuitem",{name:"수정"})),await q(t.getByRole("status")).toHaveTextContent("수정됨")}};var m,u,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,b,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    items: []
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var x,v,w;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    buttonText: '작업 메뉴'
  }
}`,...(w=(v=n.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var h,T,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: function Demo() {
    const [selected, setSelected] = useState('');
    return <>
        <DropdownMenu buttonText="작업" items={[{
        label: '수정',
        onClick: () => setSelected('수정됨')
      }]} />
        <output role="status">{selected}</output>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: '작업'
    }));
    await userEvent.click(await within(document.body).findByRole('menuitem', {
      name: '수정'
    }));
    await expect(canvas.getByRole('status')).toHaveTextContent('수정됨');
  }
}`,...(S=(T=i.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};const se=["Default","Alternate","AdditionalState","Interactive"];export{n as AdditionalState,s as Alternate,o as Default,i as Interactive,se as __namedExportsOrder,oe as default};
