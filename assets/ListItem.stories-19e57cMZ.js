import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as F}from"./index-BxXVWNx3.js";import{c as a}from"./utils-DCADjnpI.js";import{U}from"./user-DN0mH_zk.js";import{C as M}from"./chevron-right-DtG4w6Mo.js";import{d as O}from"./reference-types-CC3VHbJD.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-Ct87QT5c.js";const c=F.forwardRef(({title:l,description:m,leading:j=!0,trailing:S=!1,trailingText:u,chevron:V=!1,selected:r=!1,hover:w=!1,clickable:t=!0,leadingIcon:I,className:L,style:C,children:p,onClick:d,...W},_)=>{const D=t?"button":"div",z=t?E=>d==null?void 0:d(E):void 0;return e.jsx("div",{ref:_,className:a("relative w-full",L),style:C,...W,children:e.jsxs(D,{type:t?"button":void 0,onClick:z,"aria-selected":r,"aria-current":r?"true":void 0,className:a("w-full flex items-center gap-3 px-4 py-3 text-left transition-colors",t&&"cursor-pointer",!t&&"cursor-default",r?"bg-krds-primary-5 border-l-2 border-krds-primary-50":w?"bg-krds-gray-5":"bg-krds-gray-0",t&&!r&&"hover:bg-krds-gray-5","rounded"),children:[j&&e.jsx("span",{"aria-hidden":"true",className:a("flex items-center justify-center w-9 h-9 rounded-full shrink-0 text-krds-white",r?"bg-krds-primary-50":"bg-krds-gray-30"),children:I??e.jsx(U,{size:18})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[l&&e.jsx("div",{className:a("text-krds-body-md font-medium truncate",r?"text-krds-primary-50":"text-krds-gray-90"),children:l}),m&&e.jsx("div",{className:"text-krds-body-sm text-krds-gray-50 truncate mt-0.5",children:m}),p&&!l&&p]}),S&&u&&e.jsx("span",{className:"text-krds-body-sm text-krds-gray-50 shrink-0",children:u}),V&&e.jsx(M,{size:16,"aria-hidden":"true",className:"text-krds-gray-30 shrink-0"})]})})});c.displayName="ListItem";c.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},leading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},trailing:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},trailingText:{required:!1,tsType:{name:"string"},description:""},chevron:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},clickable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Q=O([{library:"shadcn/ui",component:"Item",url:"https://ui.shadcn.com/docs/components/item",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"List and List Items",url:"https://quasar.dev/vue-components/list-and-list-items",usedFor:["comparison"],relation:"compared"}]),Y={title:"Molecules/Data/ListItem",component:c,tags:["autodocs","data","ref:shadcn-ui","ref:quasar"],parameters:{references:Q,docs:{description:{component:"리스트의 단일 항목을 구성하는 컴포넌트입니다. 아이콘, 텍스트, 트레일링 정보, 선택 상태를 조합합니다."}}},argTypes:{title:{description:"항목 제목",control:"text",table:{type:{summary:"string"},category:"Content"}},description:{description:"보조 설명",control:"text",table:{type:{summary:"string"},category:"Content"}},leading:{description:"왼쪽 아이콘 표시",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"State"}},trailing:{description:"오른쪽 텍스트 표시",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},trailingText:{description:"트레일링 텍스트",control:"text",table:{type:{summary:"string"},category:"Content"}},chevron:{description:"화살표 아이콘",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},selected:{description:"선택 상태",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},hover:{description:"호버 상태",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},clickable:{description:"클릭 가능",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"State"}}},args:{title:"홍길동",description:"hong@example.com",leading:!0,trailing:!1,trailingText:"관리자",chevron:!1,selected:!1,hover:!1,clickable:!0}},s={name:"기본",parameters:{docs:{description:{story:"아이콘, 제목, 설명의 기본 리스트 항목입니다."}}}},o={name:"선택됨",args:{selected:!0},parameters:{docs:{description:{story:"선택된 상태의 리스트 항목입니다."}}}},n={name:"트레일링 텍스트",args:{trailing:!0,trailingText:"관리자"},parameters:{docs:{description:{story:"오른쪽에 역할이나 상태 텍스트를 추가한 항목입니다."}}}},i={name:"화살표",args:{chevron:!0,clickable:!0},parameters:{docs:{description:{story:"클릭 시 상세 페이지로 이동하는 항목입니다."}}}};var y,f,g;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '기본',
  parameters: {
    docs: {
      description: {
        story: '아이콘, 제목, 설명의 기본 리스트 항목입니다.'
      }
    }
  }
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var b,h,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '선택됨',
  args: {
    selected: true
  },
  parameters: {
    docs: {
      description: {
        story: '선택된 상태의 리스트 항목입니다.'
      }
    }
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var v,T,k;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '트레일링 텍스트',
  args: {
    trailing: true,
    trailingText: '관리자'
  },
  parameters: {
    docs: {
      description: {
        story: '오른쪽에 역할이나 상태 텍스트를 추가한 항목입니다.'
      }
    }
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var N,R,q;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '화살표',
  args: {
    chevron: true,
    clickable: true
  },
  parameters: {
    docs: {
      description: {
        story: '클릭 시 상세 페이지로 이동하는 항목입니다.'
      }
    }
  }
}`,...(q=(R=i.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const Z=["Default","Selected","WithTrailing","WithChevron"];export{s as Default,o as Selected,i as WithChevron,n as WithTrailing,Z as __namedExportsOrder,Y as default};
