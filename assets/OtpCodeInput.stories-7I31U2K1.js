import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-BxXVWNx3.js";import{O as I}from"./OtpCodeInput-BzF3eCSn.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DCADjnpI.js";const b={title:"Molecules/Forms/OtpCodeInput",component:I,tags:["autodocs","form"],args:{length:6},argTypes:{length:{control:{type:"range",min:4,max:8,step:1}},invalid:{control:"boolean"},disabled:{control:"boolean"}}},e={name:"빈 코드"},a={name:"입력 완료",args:{value:"126388"}},r={name:"오류",args:{value:"126388",invalid:!0}},s={name:"상호작용",render:h=>{const[o,y]=S.useState("");return t.jsxs("div",{className:"max-w-sm space-y-3",children:[t.jsx(I,{...h,value:o,onChange:y}),t.jsxs("p",{className:"text-sm text-muted-foreground","aria-live":"polite",children:["입력된 코드: ",o||"없음"]})]})}};var n,m,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '빈 코드'
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var l,p,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '입력 완료',
  args: {
    value: '126388'
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var i,d,v;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '오류',
  args: {
    value: '126388',
    invalid: true
  }
}`,...(v=(d=r.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var g,x,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '상호작용',
  render: args => {
    const [value, setValue] = useState('');
    return <div className="max-w-sm space-y-3"><OtpCodeInput {...args} value={value} onChange={setValue} /><p className="text-sm text-muted-foreground" aria-live="polite">입력된 코드: {value || '없음'}</p></div>;
  }
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const F=["Empty","Filled","Invalid","Interactive"];export{e as Empty,a as Filled,s as Interactive,r as Invalid,F as __namedExportsOrder,b as default};
