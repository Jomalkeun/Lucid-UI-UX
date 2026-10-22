import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{P as A}from"./Panel-CjOae9Tx.js";import{within as p,userEvent as d,expect as S}from"./index-DH-M5T-F.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./dialog-4InejCSB.js";import"./index-BIfB_hJr.js";import"./index-Cuo70N6w.js";import"./index-CSKKChMh.js";import"./index-BKM4mA3Z.js";import"./index-D1FEdIFz.js";import"./index-W0uFi8-r.js";import"./index-BuIYde5q.js";import"./index-DCvtqWl1.js";import"./index-D5tP6kvT.js";import"./Combination-avlVGtdT.js";import"./index-D_4yO-tZ.js";import"./index-CkIaN0ex.js";import"./utils-DCADjnpI.js";import"./x-DsL683-u.js";import"./createLucideIcon-Ct87QT5c.js";function E({isOpen:c,open:m,onOpenChange:r,onClose:e,topics:k=[],children:q,title:P="도움말",...R}){return a.jsxs(A,{...R,title:P,open:m??c,onOpenChange:t=>{r==null||r(t),t||e==null||e()},children:[k.map(t=>a.jsxs("details",{className:"border-b py-3",children:[a.jsx("summary",{children:t.title}),a.jsx("p",{className:"py-3",children:t.content})]},t.id)),q]})}E.__docgenInfo={description:"",methods:[],displayName:"HelpPanel",props:{isOpen:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},topics:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: string; title: string; content: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"content",value:{name:"string",required:!0}}]}}],raw:"Array<{ id: string; title: string; content: string }>"},description:"",defaultValue:{value:"[]",computed:!1}},title:{defaultValue:{value:"'도움말'",computed:!1},required:!1}},composes:["PanelProps"]};const $={title:"Organisms/Navigation/HelpPanel",component:E,tags:["autodocs"],args:{title:"도움말",trigger:a.jsx("button",{type:"button",children:"도움말 열기"}),topics:[{id:"save",title:"저장 방법",content:"저장 버튼을 누르면 변경 사항이 반영됩니다."}]},parameters:{layout:"padded"}},n={},s={args:{topics:[]}},o={args:{side:"left"}},i={play:async({canvasElement:c})=>{const m=p(c);await d.click(m.getByRole("button",{name:"도움말 열기"}));const e=await p(document.body).findByRole("dialog",{name:"도움말"});await d.click(p(e).getByRole("button",{name:"닫기"})),await S(e).not.toBeInTheDocument()}};var l,u,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,f,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    topics: []
  }
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,w,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    side: 'left'
  }
}`,...(x=(w=o.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var h,j,B;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: '도움말 열기'
    }));
    const body = within(document.body);
    const dialog = await body.findByRole('dialog', {
      name: '도움말'
    });
    await userEvent.click(within(dialog).getByRole('button', {
      name: '닫기'
    }));
    await expect(dialog).not.toBeInTheDocument();
  }
}`,...(B=(j=i.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const C=["Default","Alternate","AdditionalState","Interactive"];export{o as AdditionalState,s as Alternate,n as Default,i as Interactive,C as __namedExportsOrder,$ as default};
