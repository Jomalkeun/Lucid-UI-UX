import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{d as j}from"./reference-types-4ftiVeOu.js";import{r as v}from"./index-BxXVWNx3.js";import{c as A}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const t=v.forwardRef(({className:y,keyword:x,background:w="#fff176",color:h="#1a1a1a",italic:S=!1,bold:R=!1,style:T,children:M,...N},q)=>s.jsx("mark",{ref:q,className:A(y),style:{backgroundColor:w,color:h,fontStyle:S?"italic":"normal",fontWeight:R?700:void 0,padding:"0 2px",borderRadius:"2px",...T},...N,children:M??x}));t.displayName="Mark";t.__docgenInfo={description:"",methods:[],displayName:"Mark",props:{keyword:{required:!1,tsType:{name:"string"},description:""},background:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#fff176'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#1a1a1a'",computed:!1}},italic:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},bold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const I=j([{library:"Chakra UI",component:"Mark",url:"https://www.chakra-ui.com/docs/components/mark",usedFor:["comparison"],relation:"compared"}]),D={title:"Atoms/Typography/Mark",component:t,tags:["autodocs","typography","ref:chakra-ui"],parameters:{references:I,layout:"centered",docs:{description:{component:"텍스트 일부를 시맨틱 mark 태그로 강조하는 인라인 타이포그래피 컴포넌트입니다."}}},argTypes:{keyword:{control:"text",table:{category:"Content"}},background:{control:"color",table:{category:"Appearance"}},color:{control:"color",table:{category:"Appearance"}},italic:{control:"boolean",table:{category:"Appearance"}},bold:{control:"boolean",table:{category:"Appearance"}}},args:{keyword:"키워드",background:"#fff176",color:"#1a1a1a",italic:!1,bold:!1}},e={name:"기본"},a={name:"문장 안 강조",render:()=>s.jsxs("p",{className:"max-w-lg text-base leading-7 text-krds-gray-80",children:["검색 결과에서 일치하는 ",s.jsx(t,{background:"#c8e6c9",color:"#1b5e20",bold:!0,children:"디자인 시스템"})," 용어를 빠르게 확인할 수 있습니다."]}),parameters:{controls:{disable:!0}}},r={name:"경고 강조",args:{keyword:"삭제 전 확인",background:"#ffcdd2",color:"#b71c1c",bold:!0}},o={name:"은은한 강조",args:{keyword:"참고 항목",background:"#eef2ff",color:"#3730a3"}};var c,n,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '기본'
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,p,i;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '문장 안 강조',
  render: () => <p className="max-w-lg text-base leading-7 text-krds-gray-80">
      검색 결과에서 일치하는 <Mark background="#c8e6c9" color="#1b5e20" bold>디자인 시스템</Mark> 용어를
      빠르게 확인할 수 있습니다.
    </p>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,u,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '경고 강조',
  args: {
    keyword: '삭제 전 확인',
    background: '#ffcdd2',
    color: '#b71c1c',
    bold: true
  }
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,b,k;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '은은한 강조',
  args: {
    keyword: '참고 항목',
    background: '#eef2ff',
    color: '#3730a3'
  }
}`,...(k=(b=o.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const F=["Default","InSentence","Warning","Subtle"];export{e as Default,a as InSentence,o as Subtle,r as Warning,F as __namedExportsOrder,D as default};
