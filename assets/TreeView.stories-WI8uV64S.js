import{d as m}from"./reference-types-CC3VHbJD.js";import{T as b}from"./TreeView-D3HMSwYD.js";import"./jsx-runtime-D_zvdyIk.js";import"./tree-view-W6JOyIHK.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DCADjnpI.js";import"./chevron-right-DtG4w6Mo.js";import"./createLucideIcon-Ct87QT5c.js";const u=[{id:"content",label:"콘텐츠 관리",description:"서비스 화면에 노출되는 콘텐츠 묶음",badge:"12",children:[{id:"landing",label:"랜딩 페이지",badge:"3"},{id:"banner",label:"배너",badge:"4"},{id:"terms",label:"약관",badge:"5"}]},{id:"system",label:"운영 시스템",description:"권한, 배포, 알림 설정",badge:"8",children:[{id:"permission",label:"권한 관리",children:[{id:"roles",label:"역할"},{id:"members",label:"멤버"}]},{id:"release",label:"배포 예약"},{id:"notification",label:"알림 템플릿",disabled:!0}]}],g=m([{library:"WAI-ARIA Authoring Practices Guide",component:"Tree View Pattern",url:"https://www.w3.org/WAI/ARIA/apg/patterns/treeview/",usedFor:["behavior","accessibility"],relation:"compared"}]),D={title:"Organisms/Data/TreeView",component:b,tags:["autodocs","data","ref:w3c-aria-apg"],parameters:{references:g,layout:"centered",docs:{description:{component:"계층형 메뉴, 폴더, 설정 구조를 확장 가능한 트리 목록으로 표시하는 데이터 오거나이즘입니다."}}},argTypes:{title:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},nodes:{control:"object",table:{category:"Data"}},defaultExpandedIds:{control:"object",table:{category:"State"}},selectedId:{control:"text",table:{category:"State"}},onNodeSelect:{action:"node selected",table:{category:"Events"}}},args:{title:"콘텐츠 구조",description:"운영 화면에서 관리하는 주요 정보 구조입니다.",nodes:u,defaultExpandedIds:["content","system","permission"],selectedId:"banner",className:"w-[420px]"}},e={name:"기본"},t={name:"접힌 상태",args:{defaultExpandedIds:[],selectedId:void 0}},a={name:"깊은 계층",args:{title:"사이트맵",defaultExpandedIds:["root","products","mobile"],selectedId:"mobile-detail",nodes:[{id:"root",label:"Lucid 서비스",children:[{id:"products",label:"상품",children:[{id:"mobile",label:"모바일",children:[{id:"mobile-list",label:"목록"},{id:"mobile-detail",label:"상세"}]},{id:"internet",label:"인터넷"}]},{id:"support",label:"고객 지원"}]}]}};var n,r,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '기본'
}`,...(d=(r=e.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};var o,l,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '접힌 상태',
  args: {
    defaultExpandedIds: [],
    selectedId: undefined
  }
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var s,c,p;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '깊은 계층',
  args: {
    title: '사이트맵',
    defaultExpandedIds: ['root', 'products', 'mobile'],
    selectedId: 'mobile-detail',
    nodes: [{
      id: 'root',
      label: 'Lucid 서비스',
      children: [{
        id: 'products',
        label: '상품',
        children: [{
          id: 'mobile',
          label: '모바일',
          children: [{
            id: 'mobile-list',
            label: '목록'
          }, {
            id: 'mobile-detail',
            label: '상세'
          }]
        }, {
          id: 'internet',
          label: '인터넷'
        }]
      }, {
        id: 'support',
        label: '고객 지원'
      }]
    }]
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const S=["Default","Collapsed","DeepTree"];export{t as Collapsed,a as DeepTree,e as Default,S as __namedExportsOrder,D as default};
