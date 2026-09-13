import{d as p}from"./reference-types-4ftiVeOu.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as u}from"./utils-DCADjnpI.js";function c({title:r,description:n,features:d,className:l,...m}){return e.jsxs("section",{className:u("space-y-8",l),...m,children:[r||n?e.jsxs("header",{className:"max-w-2xl space-y-2",children:[r?e.jsx("h2",{className:"text-krds-title-lg font-semibold",children:r}):null,n?e.jsx("p",{className:"text-krds-body-md text-muted-foreground",children:n}):null]}):null,e.jsx("div",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:d.map(t=>e.jsxs("article",{className:"rounded-lg border border-krds-gray-20 p-5",children:[e.jsx("div",{className:"mb-3 text-krds-primary-50",children:t.icon}),e.jsx("h3",{className:"font-semibold",children:t.title}),e.jsx("p",{className:"mt-2 text-krds-body-sm text-muted-foreground",children:t.description})]},t.title))})]})}c.__docgenInfo={description:"",methods:[],displayName:"FeaturesSection",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},features:{required:!0,tsType:{name:"Array",elements:[{name:"Feature"}],raw:"Feature[]"},description:""}},composes:["Omit"]};const x=p([{library:"Mantine UI",component:"Features section",url:"https://ui.mantine.dev/category/features/",usedFor:["design","content"],relation:"inspired",note:"콘텐츠 구성과 정보 위계 비교 기준입니다."}]),N={title:"Organisms/Content/FeaturesSection",component:c,tags:["autodocs","ref:mantine-ui"],parameters:{references:x,docs:{description:{component:`
## FeaturesSection

제품이나 서비스의 핵심 기능을 아이콘, 제목, 설명과 함께 묶어 소개하는 반응형 페이지 섹션입니다.
 시스템 그리드와 토큰을 따르는 독립적인 로컬 React 컴포넌트입니다.
        `}}}},s={name:"기본",args:{title:"핵심 기능",description:"업무 흐름을 간결하게 만듭니다.",features:[{title:"빠른 설정",description:"필요한 설정을 한 곳에서 관리합니다."},{title:"접근성",description:"키보드와 보조 기술을 지원합니다."},{title:"확장성",description:"조합 가능한 API를 제공합니다."}]}};var a,i,o;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '기본',
  args: {
    title: '핵심 기능',
    description: '업무 흐름을 간결하게 만듭니다.',
    features: [{
      title: '빠른 설정',
      description: '필요한 설정을 한 곳에서 관리합니다.'
    }, {
      title: '접근성',
      description: '키보드와 보조 기술을 지원합니다.'
    }, {
      title: '확장성',
      description: '조합 가능한 API를 제공합니다.'
    }]
  }
}`,...(o=(i=s.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const y=["Default"];export{s as Default,y as __namedExportsOrder,N as default};
