import{j as E}from"./jsx-runtime-D_zvdyIk.js";import{r as F}from"./index-BxXVWNx3.js";import{d as j}from"./reference-types-4ftiVeOu.js";import{T as I}from"./TreeView-CeEovgEI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DCADjnpI.js";import"./chevron-right-DtG4w6Mo.js";import"./createLucideIcon-Ct87QT5c.js";import"./folder-aUbEn-4O.js";const v=[{id:"service",label:"민원 서비스",description:"신청, 접수, 처리",children:[{id:"service-apply",label:"신청서 작성",description:"온라인 민원 신청"},{id:"service-status",label:"처리 현황",description:"진행 상태 확인"}]},{id:"policy",label:"정책 자료",children:[{id:"policy-youth",label:"청년 정책",children:[{id:"policy-youth-housing",label:"주거 지원"},{id:"policy-youth-job",label:"일자리 지원"}]},{id:"policy-welfare",label:"복지 정책"}]},{id:"archive",label:"보관함",disabled:!0}],k=j([{library:"PatternFly",component:"Tree view",url:"https://www.patternfly.org/components/tree-view/",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Ark UI",component:"Tree View",url:"https://ark-ui.com/docs/components/tree-view",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Element Plus",component:"Tree",url:"https://element-plus.org/en-US/component/tree",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Ant Design",component:"Tree",url:"https://ant.design/components/tree/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Tree View",url:"https://www.chakra-ui.com/docs/components/tree-view",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Tree",url:"https://quasar.dev/vue-components/tree",usedFor:["comparison"],relation:"compared"}]),R={title:"Molecules/Data/TreeView",component:I,tags:["autodocs","data","ref:ant-design","ref:quasar","ref:chakra-ui","ref:ark-ui","ref:element-plus","ref:patternfly"],parameters:{references:k,layout:"centered",docs:{description:{component:"계층 구조 데이터를 확장 가능한 트리 형태로 표시하고 항목 선택을 지원하는 컴포넌트입니다."}}},argTypes:{selectedId:{control:"text",table:{category:"State"}},showIcons:{control:"boolean",table:{category:"Appearance"}},emptyMessage:{control:"text",table:{category:"Content"}}},args:{items:v,selectedId:"service-apply",showIcons:!0,emptyMessage:"표시할 항목이 없습니다.",className:"w-[360px]"}},e={name:"기본"},r={name:"제어 상태",render:()=>{const[S,x]=F.useState("policy-youth-job");return E.jsx(I,{className:"w-[360px]",items:v,selectedId:S,onSelect:T=>x(T.id)})},parameters:{controls:{disable:!0}}},t={name:"접힌 상태",args:{defaultExpandedIds:[]}},o={name:"아이콘 없음",args:{showIcons:!1}},a={name:"빈 상태",args:{items:[]}};var s,n,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '기본'
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,l,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '제어 상태',
  render: () => {
    const [selectedId, setSelectedId] = useState('policy-youth-job');
    return <TreeView className="w-[360px]" items={treeItems} selectedId={selectedId} onSelect={item => setSelectedId(item.id)} />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,m,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '접힌 상태',
  args: {
    defaultExpandedIds: []
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var y,b,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '아이콘 없음',
  args: {
    showIcons: false
  }
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var g,f,w;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '빈 상태',
  args: {
    items: []
  }
}`,...(w=(f=a.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};const W=["Default","Controlled","Collapsed","WithoutIcons","Empty"];export{t as Collapsed,r as Controlled,e as Default,a as Empty,o as WithoutIcons,W as __namedExportsOrder,R as default};
