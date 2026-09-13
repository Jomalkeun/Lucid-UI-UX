import{d as w}from"./reference-types-4ftiVeOu.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as z}from"./index-BxXVWNx3.js";import{c as n}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const a=z.forwardRef(({items:y=[],layout:s="horizontal",labelWidth:o="140px",width:f="360px",className:h,style:x,children:g,...b},v)=>e.jsx("div",{ref:v,className:n("font-sans",h),style:{width:f,...x},...b,children:e.jsxs("dl",{className:"m-0 p-0",children:[y.map((i,D)=>e.jsxs("div",{className:n("border-b border-krds-gray-20 last:border-b-0",s==="horizontal"?"flex items-baseline py-3 gap-4":"flex flex-col py-3 gap-1"),children:[e.jsx("dt",{className:"text-krds-body-sm font-medium text-krds-gray-50 shrink-0",style:s==="horizontal"?{width:o,minWidth:o}:void 0,children:i.term}),e.jsx("dd",{className:"m-0 text-krds-body-md text-krds-gray-90 flex-1",children:i.description})]},D)),g]})}));a.displayName="DescriptionList";a.__docgenInfo={description:"",methods:[],displayName:"DescriptionList",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"DescriptionItem"}],raw:"DescriptionItem[]"},description:"",defaultValue:{value:"[]",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},labelWidth:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'140px'",computed:!1}},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'360px'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const k=[{term:"이름",description:"홍길동"},{term:"이메일",description:"hong@example.com"},{term:"가입일",description:"2024-01-15"},{term:"권한",description:"관리자"}],N=w([{library:"Ant Design",component:"Descriptions",url:"https://ant.design/components/descriptions/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Data List",url:"https://www.chakra-ui.com/docs/components/data-list",usedFor:["comparison"],relation:"compared"}]),I={title:"Molecules/Data/DescriptionList",component:a,tags:["autodocs","data","ref:ant-design","ref:chakra-ui"],parameters:{references:N,docs:{description:{component:"용어와 설명 쌍을 시맨틱 dl/dt/dd 구조로 표시하는 상세 정보 컴포넌트입니다."}}},argTypes:{layout:{description:"레이아웃 방향",control:"radio",options:["horizontal","vertical"],table:{type:{summary:"horizontal | vertical"},defaultValue:{summary:"'horizontal'"},category:"Appearance"}},labelWidth:{description:"레이블 열 너비",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'140px'"},category:"Appearance"}},width:{description:"컴포넌트 너비",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'360px'"},category:"Size"}},items:{description:"항목 목록",control:"object",table:{type:{summary:"DescriptionItem[]"},category:"Content"}}},args:{layout:"horizontal",labelWidth:"140px",width:"360px",items:k}},t={name:"수평 레이아웃",parameters:{docs:{description:{story:"레이블과 값이 좌우로 나란히 배치되는 기본 형태입니다."}}}},r={name:"수직 레이아웃",args:{layout:"vertical"},parameters:{docs:{description:{story:"레이블 아래에 값이 표시되는 수직 형태입니다. 모바일 화면에 적합합니다."}}}};var c,l,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '수평 레이아웃',
  parameters: {
    docs: {
      description: {
        story: '레이블과 값이 좌우로 나란히 배치되는 기본 형태입니다.'
      }
    }
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '수직 레이아웃',
  args: {
    layout: 'vertical'
  },
  parameters: {
    docs: {
      description: {
        story: '레이블 아래에 값이 표시되는 수직 형태입니다. 모바일 화면에 적합합니다.'
      }
    }
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const L=["Default","Vertical"];export{t as Default,r as Vertical,L as __namedExportsOrder,I as default};
