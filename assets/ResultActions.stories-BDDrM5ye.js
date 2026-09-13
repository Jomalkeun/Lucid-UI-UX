import{within as v,expect as s,userEvent as f,fn as R}from"./index-DH-M5T-F.js";import{R as w}from"./ResultActions-tHXV7Kte.js";import"./jsx-runtime-D_zvdyIk.js";const g=R(),b={title:"Molecules/Feedback/ResultActions",component:w,tags:["autodocs"],args:{actions:[{label:"다시 시도",variant:"primary",onClick:g},{label:"도움말",href:"#help"}]}},e={play:async({canvasElement:y})=>{const n=v(y);await s(n.getByRole("link",{name:"도움말"}).querySelector("button")).toBeNull(),await f.click(n.getByRole("button",{name:"다시 시도"})),await s(g).toHaveBeenCalledOnce()}},a={args:{align:"left"}},t={args:{actions:[]}};var o,r,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('link', {
      name: '도움말'
    }).querySelector('button')).toBeNull();
    await userEvent.click(canvas.getByRole('button', {
      name: '다시 시도'
    }));
    await expect(onRetry).toHaveBeenCalledOnce();
  }
}`,...(c=(r=e.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var l,i,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    align: 'left'
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,u,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    actions: []
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const k=["Mixed","LeftAligned","Empty"];export{t as Empty,a as LeftAligned,e as Mixed,k as __namedExportsOrder,b as default};
