import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{d as k}from"./reference-types-4ftiVeOu.js";function n({when:e=!0,fallback:b=null,children:y,inline:g=!1,preserveSpace:S=!1,style:w}){const l=e?y:b;return!l&&!S?null:a.jsx("span",{"data-visible":e?"true":"false",style:{display:g?"inline":"block",visibility:l?"visible":"hidden",...w},children:l})}n.__docgenInfo={description:"",methods:[],displayName:"Show",props:{when:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},fallback:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"null",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},preserveSpace:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const v=k([{library:"Chakra UI",component:"Show",url:"https://www.chakra-ui.com/docs/components/show",usedFor:["comparison"],relation:"compared"}]),T={title:"Layout/Primitives/Show",component:n,tags:["autodocs","ref:chakra-ui"],parameters:{references:v,layout:"centered",docs:{description:{component:"조건에 따라 children 또는 fallback을 렌더링하는 표시 제어 컴포넌트입니다."}}},argTypes:{when:{control:"boolean",table:{category:"State"}},inline:{control:"boolean",table:{category:"Layout"}},preserveSpace:{control:"boolean",table:{category:"Layout"}}},args:{when:!0,inline:!1,preserveSpace:!1},render:e=>a.jsx(n,{...e,fallback:a.jsx("span",{style:{color:"#dc2626"},children:"권한이 없습니다."}),children:a.jsx("span",{style:{color:"#16a34a",fontWeight:700},children:"표시되는 콘텐츠입니다."})})},r={name:"기본"},s={name:"Fallback",args:{when:!1}},o={name:"인라인",args:{inline:!0},render:e=>a.jsxs("p",{children:["주문 상태: ",a.jsx(n,{...e,fallback:"대기",children:"완료"})]})};var t,c,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: '기본'
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,p,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Fallback',
  args: {
    when: false
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,f,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '인라인',
  args: {
    inline: true
  },
  render: args => <p>주문 상태: <Show {...args} fallback="대기">완료</Show></p>
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const q=["Default","WithFallback","Inline"];export{r as Default,o as Inline,s as WithFallback,q as __namedExportsOrder,T as default};
