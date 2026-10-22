import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as k,c as m}from"./reference-types-CC3VHbJD.js";import{R as A}from"./index-BxXVWNx3.js";import{c as a}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const i=A.forwardRef(({items:v=[],layout:n="horizontal",labelWidth:c="140px",width:w="360px",className:j,style:D,children:N,density:l="comfortable",...R},z)=>e.jsx("div",{ref:z,className:a("font-sans",j),style:{width:w,...D},...R,children:e.jsxs("dl",{className:"m-0 p-0",children:[v.map((t,V)=>e.jsxs("div",{className:a("border-b border-krds-gray-20 last:border-b-0",n==="horizontal"?a("flex items-baseline gap-4",l==="compact"?"py-2":"py-3"):a("flex flex-col gap-1",l==="compact"?"py-2":"py-3")),children:[e.jsx("dt",{className:"text-krds-body-sm font-medium text-krds-gray-50 shrink-0",style:n==="horizontal"?{width:c,minWidth:c}:void 0,children:t.term}),e.jsxs("dd",{className:"m-0 flex flex-1 items-baseline justify-between gap-3 text-krds-body-md text-krds-gray-90",children:[e.jsx("span",{className:"min-w-0",children:t.description}),t.action?e.jsx("span",{className:"shrink-0",children:t.action}):null]})]},V)),N]})}));i.displayName="DescriptionList";i.__docgenInfo={description:"",methods:[],displayName:"DescriptionList",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"DescriptionItem"}],raw:"DescriptionItem[]"},description:"",defaultValue:{value:"[]",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},labelWidth:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'140px'",computed:!1}},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'360px'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},density:{required:!1,tsType:{name:"union",raw:"'compact' | 'comfortable'",elements:[{name:"literal",value:"'compact'"},{name:"literal",value:"'comfortable'"}]},description:"",defaultValue:{value:"'comfortable'",computed:!1}}}};const I=[{term:"이름",description:"홍길동"},{term:"이메일",description:"hong@example.com"},{term:"가입일",description:"2024-01-15"},{term:"권한",description:"관리자"}],T=k([m("Ant Design","Descriptions","https://ant.design/components/descriptions/"),m("Chakra UI","Data List","https://www.chakra-ui.com/docs/components/data-list")]),C={title:"Molecules/Data/DescriptionList",component:i,tags:["autodocs","data","ref:ant-design","ref:chakra-ui"],parameters:{references:T,docs:{description:{component:"용어와 설명 쌍을 시맨틱 dl/dt/dd 구조로 표시하는 상세 정보 컴포넌트입니다."}}},argTypes:{layout:{description:"레이아웃 방향",control:"radio",options:["horizontal","vertical"],table:{type:{summary:"horizontal | vertical"},defaultValue:{summary:"'horizontal'"},category:"Appearance"}},labelWidth:{description:"레이블 열 너비",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'140px'"},category:"Appearance"}},width:{description:"컴포넌트 너비",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'360px'"},category:"Size"}},items:{description:"항목 목록",control:"object",table:{type:{summary:"DescriptionItem[]"},category:"Content"}},density:{description:"행 간격",control:"radio",options:["compact","comfortable"],table:{type:{summary:"compact | comfortable"},defaultValue:{summary:"'comfortable'"},category:"Appearance"}}},args:{layout:"horizontal",labelWidth:"140px",width:"360px",items:I}},r={name:"수평 레이아웃",parameters:{docs:{description:{story:"레이블과 값이 좌우로 나란히 배치되는 기본 형태입니다."}}}},s={name:"수직 레이아웃",args:{layout:"vertical"},parameters:{docs:{description:{story:"레이블 아래에 값이 표시되는 수직 형태입니다. 모바일 화면에 적합합니다."}}}},o={name:"행별 보조 액션",args:{items:[{term:"이메일",description:"hong@example.com",action:e.jsx("a",{className:"underline",href:"#edit-email",children:"수정"})},{term:"API 키",description:"마지막 변경 2026-09-14",action:e.jsx("button",{type:"button",children:"재발급"})}],density:"compact"},parameters:{controls:{disable:!0}}};var d,p,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '수평 레이아웃',
  parameters: {
    docs: {
      description: {
        story: '레이블과 값이 좌우로 나란히 배치되는 기본 형태입니다.'
      }
    }
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var y,f,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,b,g;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '행별 보조 액션',
  args: {
    items: [{
      term: '이메일',
      description: 'hong@example.com',
      action: <a className="underline" href="#edit-email">
            수정
          </a>
    }, {
      term: 'API 키',
      description: '마지막 변경 2026-09-14',
      action: <button type="button">재발급</button>
    }],
    density: 'compact'
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const E=["Default","Vertical","WithRowActions"];export{r as Default,s as Vertical,o as WithRowActions,E as __namedExportsOrder,C as default};
