import{j as p}from"./jsx-runtime-D_zvdyIk.js";function s({children:e,...L}){return p.jsx("div",{...L,children:e})}s.__docgenInfo={description:"",methods:[],displayName:"FormSection",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const x={title:"Organisms/Forms/FormSection",component:s,tags:["autodocs","krds-extended"],argTypes:{title:{control:"text"},submitLabel:{control:"text"},cancelLabel:{control:"text"}},args:{title:"배너 등록",submitLabel:"저장",cancelLabel:"취소"},parameters:{layout:"centered"},render:e=>p.jsx(s,{...e,children:e.children??e.label??e.text??void 0})},t={args:{title:"배너 등록",submitLabel:"저장",cancelLabel:"취소"}},a={args:{title:"배너 수정",submitLabel:"수정",cancelLabel:"취소"}},r={args:{title:"이벤트 등록",submitLabel:"등록",cancelLabel:"닫기"}};var n,c,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: '배너 등록',
    submitLabel: '저장',
    cancelLabel: '취소'
  } as any
}`,...(o=(c=t.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var l,i,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: '배너 수정',
    submitLabel: '수정',
    cancelLabel: '취소'
  } as any
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,u,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: '이벤트 등록',
    submitLabel: '등록',
    cancelLabel: '닫기'
  } as any
}`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const f=["Default","Edit","EventRegister"];export{t as Default,a as Edit,r as EventRegister,f as __namedExportsOrder,x as default};
