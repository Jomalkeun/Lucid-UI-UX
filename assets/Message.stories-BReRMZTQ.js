import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as y}from"./reference-types-4ftiVeOu.js";import{B as o,b as i}from"./bubble-BKn0yZw4.js";import{M as a,a as l,b as d,c as m,d as f,e as C}from"./message-VMh8ZcsV.js";import{C as A}from"./copy-C2sh45W5.js";import{R as B}from"./refresh-ccw-BcCsIUng.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DtBajwEi.js";import"./index-CkIaN0ex.js";import"./utils-DCADjnpI.js";import"./createLucideIcon-Ct87QT5c.js";const N=y([{library:"shadcn/ui",component:"Message",url:"https://ui.shadcn.com/docs/components/message",usedFor:["design","behavior","api","accessibility"],relation:"adapted"}]),c=({children:s})=>e.jsx("span",{className:"grid size-full place-items-center bg-muted text-xs font-semibold",children:s}),_={title:"Molecules/Display/Message",component:a,tags:["autodocs","display","ref:shadcn-ui"],parameters:{references:N,layout:"centered"},argTypes:{align:{control:"inline-radio",options:["start","end"]}},args:{align:"start"},render:s=>e.jsx("div",{className:"w-[34rem]",children:e.jsxs(a,{...s,children:[e.jsx(l,{children:e.jsx(c,{children:"CN"})}),e.jsxs(d,{children:[e.jsx(C,{children:"shadcn"}),e.jsx(o,{variant:s.align==="end"?"default":"muted",align:s.align,children:e.jsx(i,{children:"How can I help you today?"})}),e.jsx(m,{children:"Just now"})]})]})})},r={},n={render:()=>e.jsxs(f,{className:"w-[34rem]",children:[e.jsxs(a,{children:[e.jsx(l,{children:e.jsx(c,{children:"R"})}),e.jsxs(d,{children:[e.jsx(C,{children:"Reviewer"}),e.jsx(o,{variant:"muted",children:e.jsx(i,{children:"The build failed during dependency installation."})})]})]}),e.jsxs(a,{align:"end",children:[e.jsx(l,{children:e.jsx(c,{children:"ME"})}),e.jsxs(d,{children:[e.jsx(o,{align:"end",children:e.jsx(i,{children:"Can you share the exact error?"})}),e.jsx(m,{children:"Read · 10:42"})]})]})]})},t={render:()=>e.jsx("div",{className:"w-[34rem]",children:e.jsxs(a,{children:[e.jsx(l,{children:e.jsx(c,{children:"AI"})}),e.jsxs(d,{children:[e.jsx(o,{variant:"ghost",children:e.jsx(i,{children:"The install failure is coming from the workspace package."})}),e.jsxs(m,{children:[e.jsx("button",{type:"button","aria-label":"Copy message",className:"rounded p-1 hover:bg-muted",children:e.jsx(A,{className:"size-4"})}),e.jsx("button",{type:"button","aria-label":"Retry message",className:"rounded p-1 hover:bg-muted",children:e.jsx(B,{className:"size-4"})})]})]})]})})};var u,g,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(p=(g=r.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var h,b,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <MessageGroup className="w-[34rem]">
      <Message>
        <MessageAvatar><Avatar>R</Avatar></MessageAvatar>
        <MessageContent>
          <MessageHeader>Reviewer</MessageHeader>
          <Bubble variant="muted"><BubbleContent>The build failed during dependency installation.</BubbleContent></Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageAvatar><Avatar>ME</Avatar></MessageAvatar>
        <MessageContent>
          <Bubble align="end"><BubbleContent>Can you share the exact error?</BubbleContent></Bubble>
          <MessageFooter>Read · 10:42</MessageFooter>
        </MessageContent>
      </Message>
    </MessageGroup>
}`,...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var j,M,v;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="w-[34rem]">
      <Message>
        <MessageAvatar><Avatar>AI</Avatar></MessageAvatar>
        <MessageContent>
          <Bubble variant="ghost"><BubbleContent>The install failure is coming from the workspace package.</BubbleContent></Bubble>
          <MessageFooter>
            <button type="button" aria-label="Copy message" className="rounded p-1 hover:bg-muted"><Copy className="size-4" /></button>
            <button type="button" aria-label="Retry message" className="rounded p-1 hover:bg-muted"><RefreshCcw className="size-4" /></button>
          </MessageFooter>
        </MessageContent>
      </Message>
    </div>
}`,...(v=(M=t.parameters)==null?void 0:M.docs)==null?void 0:v.source}}};const D=["Playground","Conversation","Actions"];export{t as Actions,n as Conversation,r as Playground,D as __namedExportsOrder,_ as default};
