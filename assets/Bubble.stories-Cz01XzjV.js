import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as x}from"./reference-types-4ftiVeOu.js";import{B as n,a as v,b as o,c as y}from"./bubble-BKn0yZw4.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DtBajwEi.js";import"./index-CkIaN0ex.js";import"./utils-DCADjnpI.js";const j=x([{library:"shadcn/ui",component:"Bubble",url:"https://ui.shadcn.com/docs/components/bubble",usedFor:["design","behavior","api","accessibility"],relation:"adapted"}]),g=["default","secondary","muted","tinted","outline","ghost","destructive"],S={title:"Molecules/Display/Bubble",component:n,tags:["autodocs","display","ref:shadcn-ui"],parameters:{references:j,layout:"centered"},argTypes:{variant:{control:"select",options:g},align:{control:"inline-radio",options:["start","end"]}},args:{variant:"default",align:"start"},render:r=>e.jsx("div",{className:"w-[32rem]",children:e.jsx(n,{...r,children:e.jsx(o,{children:"This is a conversational bubble."})})})},a={},s={render:()=>e.jsx("div",{className:"grid w-[32rem] gap-4",children:g.map((r,B)=>e.jsx(n,{variant:r,align:B%2?"end":"start",children:e.jsxs(o,{children:[r," bubble content"]})},r))})},t={render:()=>e.jsxs(v,{className:"w-[32rem] gap-5",children:[e.jsx(n,{variant:"muted",children:e.jsx(o,{children:"Can you check the component registry?"})}),e.jsx(n,{align:"end",children:e.jsxs(o,{children:["The new entries are synced.",e.jsx(y,{role:"img","aria-label":"Reactions: thumbs up and fire",children:"👍 🔥 +2"})]})})]})};var i,c,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,u,b;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="grid w-[32rem] gap-4">
      {variants.map((variant, index) => <Bubble key={variant} variant={variant} align={index % 2 ? 'end' : 'start'}>
          <BubbleContent>{variant} bubble content</BubbleContent>
        </Bubble>)}
    </div>
}`,...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var m,p,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <BubbleGroup className="w-[32rem] gap-5">
      <Bubble variant="muted">
        <BubbleContent>Can you check the component registry?</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>
          The new entries are synced.
          <BubbleReactions role="img" aria-label="Reactions: thumbs up and fire">👍 🔥 +2</BubbleReactions>
        </BubbleContent>
      </Bubble>
    </BubbleGroup>
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const A=["Playground","Variants","GroupAndReactions"];export{t as GroupAndReactions,a as Playground,s as Variants,A as __namedExportsOrder,S as default};
