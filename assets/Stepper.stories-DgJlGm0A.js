import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as y}from"./Stepper-DececPtj.js";import{r as b}from"./index-BxXVWNx3.js";import{within as j,userEvent as k,expect as A}from"./index-DH-M5T-F.js";import"./StepIndicator-3pnnIV5Y.js";import"./utils-DCADjnpI.js";import"./visually-hidden-B2fZoZvR.js";import"./_commonjsHelpers-CqkleIqs.js";const T={title:"Molecules/Navigation/Stepper",component:y,tags:["autodocs"],args:{steps:["정보 입력","검토","완료"],currentStep:0},parameters:{layout:"padded"}},t={},r={args:{currentStep:1}},a={args:{currentStep:3}},s={render:function(o){const[E,h]=b.useState(0);return e.jsxs(e.Fragment,{children:[e.jsx(y,{...o,currentStep:E}),e.jsx("button",{onClick:()=>h(w=>Math.min(3,w+1)),children:"다음 단계"})]})},play:async({canvasElement:n})=>{const o=j(n);await k.click(o.getByRole("button",{name:"다음 단계"})),await A(n.querySelector('[aria-current="step"]')).toHaveTextContent("검토")}};var c,p,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(i=(p=t.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var u,m,l;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    currentStep: 1
  }
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,S,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    currentStep: 3
  }
}`,...(g=(S=a.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var v,x,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: function Demo(args) {
    const [step, setStep] = useState(0);
    return <>
        <Stepper {...args} currentStep={step} />
        <button onClick={() => setStep(n => Math.min(3, n + 1))}>다음 단계</button>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: '다음 단계'
    }));
    await expect(canvasElement.querySelector('[aria-current="step"]')).toHaveTextContent('검토');
  }
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const _=["Default","Alternate","AdditionalState","Interactive"];export{a as AdditionalState,r as Alternate,t as Default,s as Interactive,_ as __namedExportsOrder,T as default};
