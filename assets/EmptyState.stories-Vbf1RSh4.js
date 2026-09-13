import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{d as u}from"./reference-types-4ftiVeOu.js";import{E as g}from"./EmptyState-BhOSi8Ik.js";import{I as y}from"./inbox-Prp3UTLK.js";import{C as E}from"./circle-alert-APhB8yGJ.js";import{S as b}from"./search-BiWmW4bk.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DCADjnpI.js";import"./button-B_kt0lNs.js";import"./index-DtBajwEi.js";import"./index-CkIaN0ex.js";import"./loader-circle-Db56uVXG.js";import"./createLucideIcon-Ct87QT5c.js";const f=u([{library:"PatternFly",component:"Empty state",url:"https://www.patternfly.org/components/empty-state/",usedFor:["content","accessibility","comparison"],relation:"compared"},{library:"Mantine UI",component:"Error pages",url:"https://ui.mantine.dev/category/error-pages/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."},{library:"Ant Design",component:"Empty",url:"https://ant.design/components/empty/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Empty State",url:"https://www.chakra-ui.com/docs/components/empty-state",usedFor:["comparison"],relation:"compared"}]),v={title:"Organisms/Navigation/EmptyState",component:g,parameters:{references:f,layout:"centered"},args:{title:"표시할 콘텐츠가 없습니다",description:"조건을 바꾸거나 콘텐츠를 등록하세요."}},r={args:{title:"검색 결과가 없습니다",icon:o.jsx(b,{})}},t={args:{title:"등록된 콘텐츠가 없습니다",icon:o.jsx(y,{}),actionLabel:"콘텐츠 등록"}},e={args:{title:"오류가 발생했습니다",icon:o.jsx(E,{}),actionLabel:"다시 시도",role:"alert"}};var a,s,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: '검색 결과가 없습니다',
    icon: <Search />
  }
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var i,c,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: '등록된 콘텐츠가 없습니다',
    icon: <Inbox />,
    actionLabel: '콘텐츠 등록'
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,l,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: '오류가 발생했습니다',
    icon: <AlertCircle />,
    actionLabel: '다시 시도',
    role: 'alert'
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const M=["NoResult","EmptyList","Error"];export{t as EmptyList,e as Error,r as NoResult,M as __namedExportsOrder,v as default};
