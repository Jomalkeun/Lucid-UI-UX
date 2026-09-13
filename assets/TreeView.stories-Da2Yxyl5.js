import{d as P}from"./reference-types-4ftiVeOu.js";import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-BxXVWNx3.js";import{c as x}from"./utils-DCADjnpI.js";import{C as W}from"./chevron-right-DtG4w6Mo.js";import{c as B}from"./createLucideIcon-Ct87QT5c.js";import{F as G}from"./folder-aUbEn-4O.js";import{F as $}from"./file-text-DBOcb2Om.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],K=B("folder-open",J),M=[{id:"content",label:"콘텐츠 관리",description:"페이지, 배너, 약관 콘텐츠",badge:"12",children:[{id:"content-pages",label:"페이지",badge:"5"},{id:"content-banners",label:"배너",badge:"4"},{id:"content-terms",label:"약관",badge:"3"}]},{id:"operation",label:"운영 설정",description:"권한과 배포 설정",children:[{id:"operation-permission",label:"권한 그룹"},{id:"operation-release",label:"배포 예약"}]}];function Q(b,l){return new Set(l.filter(n=>b.some(s=>{var o;return s.id===n||((o=s.children)==null?void 0:o.some(r=>r.id===n))})))}function A({className:b,nodes:l=M,title:n,description:s,defaultExpandedIds:o=["content"],selectedId:r,onNodeSelect:u,...S}){const[C,q]=g.useState(()=>Q(l,o)),[D,f]=g.useState(r),F=r??D;g.useEffect(()=>{r!==void 0&&f(r)},[r]);const _=e=>{var i;(i=e.children)!=null&&i.length&&q(d=>{const a=new Set(d);return a.has(e.id)?a.delete(e.id):a.add(e.id),a})},L=e=>{e.disabled||(f(e.id),u==null||u(e))},h=(e,i=0)=>{var y,N;const d=!!((y=e.children)!=null&&y.length),a=C.has(e.id),O=F===e.id,z=d?a?K:G:$;return t.jsxs("li",{children:[t.jsxs("div",{className:x("group flex items-start gap-2 rounded-md px-2 py-2 text-left transition",O?"bg-krds-primary-10 text-krds-primary-70":"text-krds-gray-80 hover:bg-krds-gray-5",e.disabled&&"pointer-events-none opacity-50"),style:{paddingLeft:`${i*1.25+.5}rem`},children:[t.jsx("button",{type:"button","aria-label":a?"하위 항목 접기":"하위 항목 펼치기","aria-expanded":d?a:void 0,disabled:!d,onClick:()=>_(e),className:"mt-0.5 flex size-5 shrink-0 items-center justify-center rounded text-krds-gray-50 disabled:opacity-0",children:t.jsx(W,{"aria-hidden":"true",className:x("size-4 transition-transform",a&&"rotate-90")})}),t.jsxs("button",{type:"button",onClick:()=>L(e),className:"flex min-w-0 flex-1 items-start gap-2 text-left",children:[t.jsx(z,{"aria-hidden":"true",className:"mt-0.5 size-4 shrink-0"}),t.jsxs("span",{className:"min-w-0 flex-1",children:[t.jsxs("span",{className:"flex min-w-0 items-center gap-2",children:[t.jsx("span",{className:"truncate text-sm font-semibold",children:e.label}),e.badge?t.jsx("span",{className:"shrink-0 rounded-full bg-white px-2 py-0.5 text-xs font-medium text-krds-gray-60 ring-1 ring-krds-gray-30",children:e.badge}):null]}),e.description?t.jsx("span",{className:"mt-1 block text-xs leading-5 text-krds-gray-60",children:e.description}):null]})]})]}),d&&a?t.jsx("ul",{className:"mt-1 space-y-1",role:"group",children:(N=e.children)==null?void 0:N.map(H=>h(H,i+1))}):null]},e.id)};return t.jsxs("section",{className:x("rounded-md border border-krds-gray-30 bg-white p-4",b),...S,children:[n||s?t.jsxs("header",{className:"mb-3",children:[n?t.jsx("h3",{className:"text-base font-semibold text-krds-gray-90",children:n}):null,s?t.jsx("p",{className:"mt-1 text-sm text-krds-gray-60",children:s}):null]}):null,t.jsx("ul",{className:"space-y-1",role:"tree","aria-label":typeof n=="string"?n:"트리 목록",children:l.map(e=>h(e))})]})}A.__docgenInfo={description:"",methods:[],displayName:"TreeView",props:{nodes:{required:!1,tsType:{name:"Array",elements:[{name:"TreeViewNode"}],raw:"TreeViewNode[]"},description:"",defaultValue:{value:`[
  {
    id: 'content',
    label: '콘텐츠 관리',
    description: '페이지, 배너, 약관 콘텐츠',
    badge: '12',
    children: [
      { id: 'content-pages', label: '페이지', badge: '5' },
      { id: 'content-banners', label: '배너', badge: '4' },
      { id: 'content-terms', label: '약관', badge: '3' },
    ],
  },
  {
    id: 'operation',
    label: '운영 설정',
    description: '권한과 배포 설정',
    children: [
      { id: 'operation-permission', label: '권한 그룹' },
      { id: 'operation-release', label: '배포 예약' },
    ],
  },
]`,computed:!1}},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultExpandedIds:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"['content']",computed:!1}},selectedId:{required:!1,tsType:{name:"string"},description:""},onNodeSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(node: TreeViewNode) => void",signature:{arguments:[{type:{name:"TreeViewNode"},name:"node"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const U=[{id:"content",label:"콘텐츠 관리",description:"서비스 화면에 노출되는 콘텐츠 묶음",badge:"12",children:[{id:"landing",label:"랜딩 페이지",badge:"3"},{id:"banner",label:"배너",badge:"4"},{id:"terms",label:"약관",badge:"5"}]},{id:"system",label:"운영 시스템",description:"권한, 배포, 알림 설정",badge:"8",children:[{id:"permission",label:"권한 관리",children:[{id:"roles",label:"역할"},{id:"members",label:"멤버"}]},{id:"release",label:"배포 예약"},{id:"notification",label:"알림 템플릿",disabled:!0}]}],X=P([{library:"WAI-ARIA Authoring Practices Guide",component:"Tree View Pattern",url:"https://www.w3.org/WAI/ARIA/apg/patterns/treeview/",usedFor:["behavior","accessibility"],relation:"compared"}]),ie={title:"Organisms/Data/TreeView",component:A,tags:["autodocs","data","ref:w3c-aria-apg"],parameters:{references:X,layout:"centered",docs:{description:{component:"계층형 메뉴, 폴더, 설정 구조를 확장 가능한 트리 목록으로 표시하는 데이터 오거나이즘입니다."}}},argTypes:{title:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},nodes:{control:"object",table:{category:"Data"}},defaultExpandedIds:{control:"object",table:{category:"State"}},selectedId:{control:"text",table:{category:"State"}},onNodeSelect:{action:"node selected",table:{category:"Events"}}},args:{title:"콘텐츠 구조",description:"운영 화면에서 관리하는 주요 정보 구조입니다.",nodes:U,defaultExpandedIds:["content","system","permission"],selectedId:"banner",className:"w-[420px]"}},c={name:"기본"},p={name:"접힌 상태",args:{defaultExpandedIds:[],selectedId:void 0}},m={name:"깊은 계층",args:{title:"사이트맵",defaultExpandedIds:["root","products","mobile"],selectedId:"mobile-detail",nodes:[{id:"root",label:"Lucid 서비스",children:[{id:"products",label:"상품",children:[{id:"mobile",label:"모바일",children:[{id:"mobile-list",label:"목록"},{id:"mobile-detail",label:"상세"}]},{id:"internet",label:"인터넷"}]},{id:"support",label:"고객 지원"}]}]}};var w,I,j;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '기본'
}`,...(j=(I=c.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var k,T,v;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '접힌 상태',
  args: {
    defaultExpandedIds: [],
    selectedId: undefined
  }
}`,...(v=(T=p.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var E,R,V;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(V=(R=m.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};const le=["Default","Collapsed","DeepTree"];export{p as Collapsed,m as DeepTree,c as Default,le as __namedExportsOrder,ie as default};
