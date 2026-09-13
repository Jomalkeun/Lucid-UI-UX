import{d as z}from"./reference-types-4ftiVeOu.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-BxXVWNx3.js";import{c as h}from"./utils-DCADjnpI.js";import{c as u}from"./createLucideIcon-Ct87QT5c.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],T=u("grip-vertical",M);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"M8 18L12 22L16 18",key:"cskvfv"}],["path",{d:"M12 2V22",key:"r89rzk"}]],E=u("move-down",V);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M8 6L12 2L16 6",key:"1yvkyx"}],["path",{d:"M12 2V22",key:"r89rzk"}]],q=u("move-up",$),S=[{id:"item-1",label:"메인 배너",description:"홈 최상단에 노출되는 대표 배너"},{id:"item-2",label:"추천 상품",description:"개인화 추천 상품 영역"},{id:"item-3",label:"이벤트 구좌",description:"진행 중인 이벤트 묶음"},{id:"item-4",label:"멤버십 혜택",description:"등급별 혜택 안내"}];function F(n,i,o){const r=i+o;if(r<0||r>=n.length)return n;const s=[...n],[m]=s.splice(i,1);return s.splice(r,0,m),s}function _({className:n,items:i=S,title:o="노출 순서",description:r,onOrderChange:s,...m}){const[p,y]=g.useState(i);g.useEffect(()=>{y(i)},[i]);const f=(t,a)=>{const x=F(p,t,a);y(x),s==null||s(x)};return e.jsxs("section",{className:h("rounded-md border border-krds-gray-30 bg-white p-4",n),...m,children:[o||r?e.jsxs("header",{className:"mb-3",children:[o?e.jsx("h3",{className:"text-base font-semibold text-krds-gray-90",children:o}):null,r?e.jsx("p",{className:"mt-1 text-sm text-krds-gray-60",children:r}):null]}):null,e.jsx("ol",{className:"space-y-2",children:p.map((t,a)=>e.jsxs("li",{className:h("flex items-center gap-3 rounded-md border border-krds-gray-20 bg-white p-3",t.disabled&&"opacity-50"),children:[e.jsx("span",{className:"flex size-7 shrink-0 items-center justify-center rounded-full bg-krds-gray-10 text-xs font-semibold text-krds-gray-60",children:a+1}),e.jsx(T,{"aria-hidden":"true",className:"size-4 shrink-0 text-krds-gray-40"}),e.jsxs("span",{className:"min-w-0 flex-1",children:[e.jsx("span",{className:"block truncate text-sm font-semibold text-krds-gray-90",children:t.label}),t.description?e.jsx("span",{className:"mt-1 block text-xs leading-5 text-krds-gray-60",children:t.description}):null]}),e.jsxs("div",{className:"flex shrink-0 gap-1",children:[e.jsx("button",{type:"button","aria-label":`${t.label} 위로 이동`,disabled:a===0||t.disabled,onClick:()=>f(a,-1),className:"inline-flex size-8 items-center justify-center rounded-md border border-krds-gray-30 text-krds-gray-60 disabled:opacity-40",children:e.jsx(q,{"aria-hidden":"true",className:"size-4"})}),e.jsx("button",{type:"button","aria-label":`${t.label} 아래로 이동`,disabled:a===p.length-1||t.disabled,onClick:()=>f(a,1),className:"inline-flex size-8 items-center justify-center rounded-md border border-krds-gray-30 text-krds-gray-60 disabled:opacity-40",children:e.jsx(E,{"aria-hidden":"true",className:"size-4"})})]})]},t.id))})]})}_.__docgenInfo={description:"",methods:[],displayName:"ReorderList",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"ReorderListItem"}],raw:"ReorderListItem[]"},description:"",defaultValue:{value:`[
  { id: 'item-1', label: '메인 배너', description: '홈 최상단에 노출되는 대표 배너' },
  { id: 'item-2', label: '추천 상품', description: '개인화 추천 상품 영역' },
  { id: 'item-3', label: '이벤트 구좌', description: '진행 중인 이벤트 묶음' },
  { id: 'item-4', label: '멤버십 혜택', description: '등급별 혜택 안내' },
]`,computed:!1}},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'노출 순서'",computed:!1}},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onOrderChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(items: ReorderListItem[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"ReorderListItem"}],raw:"ReorderListItem[]"},name:"items"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const b=[{id:"item-1",label:"메인 배너",description:"홈 최상단에 노출되는 대표 배너"},{id:"item-2",label:"추천 상품",description:"개인화 추천 상품 영역"},{id:"item-3",label:"이벤트 구좌",description:"진행 중인 이벤트 묶음"},{id:"item-4",label:"멤버십 혜택",description:"등급별 혜택 안내"}],O=z([{library:"PrimeVue",component:"OrderList",url:"https://primevue.org/orderlist/",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Mantine UI",component:"Drag'n'Drop",url:"https://ui.mantine.dev/category/dnd/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."},{library:"Base Web",component:"Drag and Drop List",url:"https://baseweb.design/components/dnd-list/",usedFor:["behavior","accessibility","api"],relation:"compared"}]),P={title:"Organisms/Data/ReorderList",component:_,tags:["autodocs","data","ref:mantine-ui","ref:primevue","ref:base-web"],parameters:{references:O,layout:"centered",docs:{description:{component:"목록 항목의 표시 순서를 키보드와 버튼으로 변경할 수 있는 재정렬 리스트입니다."}}},argTypes:{title:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},items:{control:"object",table:{category:"Data"}},onOrderChange:{action:"order changed",table:{category:"Events"}}},args:{title:"홈 화면 노출 순서",description:"위/아래 버튼으로 콘텐츠 블록 순서를 조정합니다.",items:b,className:"w-[560px]"}},c={name:"기본"},d={name:"두 항목",args:{items:b.slice(0,2)}},l={name:"고정 항목 포함",args:{items:[{id:"fixed",label:"공지사항",description:"관리자 정책상 첫 번째 위치로 고정됩니다.",disabled:!0},...b]}};var k,j,N;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '기본'
}`,...(N=(j=c.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var I,v,R;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '두 항목',
  args: {
    items: defaultItems.slice(0, 2)
  }
}`,...(R=(v=d.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var w,L,D;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '고정 항목 포함',
  args: {
    items: [{
      id: 'fixed',
      label: '공지사항',
      description: '관리자 정책상 첫 번째 위치로 고정됩니다.',
      disabled: true
    }, ...defaultItems]
  }
}`,...(D=(L=l.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};const H=["Default","TwoItems","WithDisabledItem"];export{c as Default,d as TwoItems,l as WithDisabledItem,H as __namedExportsOrder,P as default};
