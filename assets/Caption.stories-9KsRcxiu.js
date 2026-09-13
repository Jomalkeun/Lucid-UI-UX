import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-BxXVWNx3.js";import{c as q}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const s=S.forwardRef(({className:v,text:b,size:h="12px",color:C="#767676",italic:N=!1,style:T,children:j,...A},R)=>o.jsx("small",{ref:R,className:q("block",v),style:{fontSize:h,color:C,fontStyle:N?"italic":"normal",lineHeight:1.5,...T},...A,children:j??b}));s.displayName="Caption";s.__docgenInfo={description:"",methods:[],displayName:"Caption",props:{text:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'10px' | '11px' | '12px' | '13px'",elements:[{name:"literal",value:"'10px'"},{name:"literal",value:"'11px'"},{name:"literal",value:"'12px'"},{name:"literal",value:"'13px'"}]},description:"",defaultValue:{value:"'12px'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#767676'",computed:!1}},italic:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const _={title:"Atoms/Typography/Caption",component:s,tags:["autodocs","typography"],parameters:{layout:"centered",docs:{description:{component:"이미지, 표, 차트, 폼 입력 아래에 부가 설명을 제공하는 작은 텍스트 컴포넌트입니다."}}},argTypes:{text:{control:"text",table:{category:"Content"}},size:{control:"inline-radio",options:["10px","11px","12px","13px"],table:{category:"Appearance"}},color:{control:"color",table:{category:"Appearance"}},italic:{control:"boolean",table:{category:"Appearance"}}},args:{text:"그림 1. 월별 신규 가입자 추이",size:"12px",color:"#767676",italic:!1}},e={name:"기본"},a={name:"폼 힌트",args:{text:"영문 대소문자, 숫자, 특수문자를 포함하여 8자 이상 입력하세요.",color:"#555555"}},r={name:"이미지 캡션",render:()=>o.jsxs("figure",{className:"grid w-80 gap-2",children:[o.jsx("div",{className:"aspect-video rounded-md bg-krds-gray-10"}),o.jsx(s,{text:"그림 1. 서비스 대시보드 화면 예시"})]}),parameters:{controls:{disable:!0}}},t={name:"저작권",args:{text:"© 2026 Lucid UI UX. All rights reserved.",italic:!0,color:"#999999"}};var n,i,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '기본'
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,p,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '폼 힌트',
  args: {
    text: '영문 대소문자, 숫자, 특수문자를 포함하여 8자 이상 입력하세요.',
    color: '#555555'
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '이미지 캡션',
  render: () => <figure className="grid w-80 gap-2">
      <div className="aspect-video rounded-md bg-krds-gray-10" />
      <Caption text="그림 1. 서비스 대시보드 화면 예시" />
    </figure>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,f,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '저작권',
  args: {
    text: '© 2026 Lucid UI UX. All rights reserved.',
    italic: true,
    color: '#999999'
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const k=["Default","FormHint","FigureCaption","Copyright"];export{t as Copyright,e as Default,r as FigureCaption,a as FormHint,k as __namedExportsOrder,_ as default};
