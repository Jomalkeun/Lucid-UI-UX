import{d as x}from"./reference-types-4ftiVeOu.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as l}from"./utils-DCADjnpI.js";function p({title:f,summary:n,image:i,author:t,date:r,href:a,className:d,...o}){const c=e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"h-44 bg-krds-gray-20",style:i?{backgroundImage:`url(${i})`,backgroundSize:"cover",backgroundPosition:"center"}:void 0}),e.jsxs("div",{className:"flex flex-col gap-2 p-5",children:[e.jsx("h3",{className:"text-krds-title-sm font-semibold text-foreground",children:f}),n?e.jsx("p",{className:"text-krds-body-sm text-muted-foreground",children:n}):null,t||r?e.jsxs("div",{className:"mt-2 flex gap-2 text-krds-body-xs text-krds-gray-50",children:[t?e.jsx("span",{children:t}):null,r?e.jsx("time",{dateTime:r,children:r}):null]}):null]})]});return a?e.jsx("a",{href:a,className:l("block overflow-hidden rounded-lg border border-krds-gray-20 bg-krds-gray-0 transition-shadow hover:shadow-krds-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",d),...o,children:c}):e.jsx("article",{className:l("overflow-hidden rounded-lg border border-krds-gray-20 bg-krds-gray-0",d),...o,children:c})}p.__docgenInfo={description:"",methods:[],displayName:"ArticleCard",props:{title:{required:!0,tsType:{name:"string"},description:""},summary:{required:!1,tsType:{name:"string"},description:""},image:{required:!1,tsType:{name:"string"},description:""},author:{required:!1,tsType:{name:"string"},description:""},date:{required:!1,tsType:{name:"string"},description:""},href:{required:!1,tsType:{name:"string"},description:""}}};const y=x([{library:"Mantine UI",component:"Article cards",url:"https://ui.mantine.dev/category/article-cards/",usedFor:["design","content"],relation:"inspired",note:"콘텐츠 구성과 정보 위계 비교 기준입니다."}]),j={title:"Organisms/Content/ArticleCard",component:p,tags:["autodocs","ref:mantine-ui"],parameters:{references:y,docs:{description:{component:`
## ArticleCard

대표 이미지, 제목, 요약, 작성자와 메타 정보를 조합해 게시물을 소개하는 카드 패턴입니다.
 시스템 콘텐츠 카드 규칙에 맞춘 독립적인 로컬 React 컴포넌트입니다.
        `}}}},s={name:"기본",args:{title:"콘텐츠 운영 가이드",summary:"일관된 콘텐츠 발행을 위한 기본 원칙입니다.",author:"Lucid 팀",date:"2026-09-11"}};var m,u,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '기본',
  args: {
    title: '콘텐츠 운영 가이드',
    summary: '일관된 콘텐츠 발행을 위한 기본 원칙입니다.',
    author: 'Lucid 팀',
    date: '2026-09-11'
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const v=["Default"];export{s as Default,v as __namedExportsOrder,j as default};
