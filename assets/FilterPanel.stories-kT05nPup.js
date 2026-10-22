import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-BxXVWNx3.js";import{c as _}from"./utils-DCADjnpI.js";import{S as O}from"./search-BiWmW4bk.js";import{R as A}from"./rotate-ccw-IYslft4e.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-Ct87QT5c.js";const z=[{key:"status",label:"상태",options:[{value:"",label:"전체 상태"},{value:"active",label:"노출중"},{value:"reserved",label:"예약"},{value:"ended",label:"종료"}]},{key:"channel",label:"채널",options:[{value:"",label:"전체 채널"},{value:"tworld",label:"옵션1"},{value:"tmembership",label:"옵션2"}]}];function v(u,s){return u.reduce((n,a)=>{var t,o;return n[a.key]=((t=s==null?void 0:s.filters)==null?void 0:t[a.key])??((o=a.options[0])==null?void 0:o.value)??"",n},{})}function D({className:u,title:s="검색 조건",searchPlaceholder:n="콘텐츠 검색",filters:a=z,defaultValue:t,submitLabel:o="검색",resetLabel:T="초기화",onSubmit:p,onReset:b,...q}){const[h,f]=i.useState((t==null?void 0:t.search)??""),[g,y]=i.useState(()=>v(a,t));i.useEffect(()=>{y(v(a,t))},[a,t]);const V=i.useMemo(()=>({search:h,filters:g}),[g,h]),C=r=>{r.preventDefault(),p==null||p(V)},E=()=>{f(""),y(v(a)),b==null||b()};return e.jsxs("form",{className:_("rounded-md border border-krds-gray-30 bg-white p-4",u),onSubmit:C,...q,children:[s?e.jsx("h3",{className:"mb-3 text-base font-semibold text-krds-gray-90",children:s}):null,e.jsxs("div",{className:"grid gap-3 md:grid-cols-[minmax(16rem,1fr)_repeat(auto-fit,minmax(10rem,12rem))_auto] md:items-end",children:[e.jsxs("label",{className:"grid gap-1.5",children:[e.jsx("span",{className:"text-sm font-medium text-krds-gray-70",children:"검색어"}),e.jsxs("span",{className:"relative",children:[e.jsx(O,{"aria-hidden":"true",className:"absolute left-3 top-1/2 size-4 -translate-y-1/2 text-krds-gray-40"}),e.jsx("input",{value:h,onChange:r=>f(r.target.value),placeholder:n,className:"h-10 w-full rounded-md border border-krds-gray-30 bg-white pl-9 pr-3 text-sm outline-none transition focus:border-krds-primary-60"})]})]}),a.map(r=>e.jsxs("label",{className:"grid gap-1.5",children:[e.jsx("span",{className:"text-sm font-medium text-krds-gray-70",children:r.label}),e.jsx("select",{value:g[r.key]??"",onChange:l=>y(L=>({...L,[r.key]:l.target.value})),className:"h-10 rounded-md border border-krds-gray-30 bg-white px-3 text-sm text-krds-gray-80 outline-none transition focus:border-krds-primary-60",children:r.options.map(l=>e.jsx("option",{value:l.value,children:l.label},l.value))})]},r.key)),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{type:"submit",className:"h-10 rounded-md bg-krds-primary-60 px-4 text-sm font-semibold text-white transition hover:bg-krds-primary-70",children:o}),e.jsxs("button",{type:"button",onClick:E,className:"inline-flex h-10 items-center gap-1 rounded-md border border-krds-gray-30 px-3 text-sm font-semibold text-krds-gray-70 transition hover:bg-krds-gray-5",children:[e.jsx(A,{"aria-hidden":"true",className:"size-3.5"}),T]})]})]})]})}D.__docgenInfo={description:"",methods:[],displayName:"FilterPanel",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'검색 조건'",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'콘텐츠 검색'",computed:!1}},filters:{required:!1,tsType:{name:"Array",elements:[{name:"FilterDefinition"}],raw:"FilterDefinition[]"},description:"",defaultValue:{value:`[
  {
    key: 'status',
    label: '상태',
    options: [
      { value: '', label: '전체 상태' },
      { value: 'active', label: '노출중' },
      { value: 'reserved', label: '예약' },
      { value: 'ended', label: '종료' },
    ],
  },
  {
    key: 'channel',
    label: '채널',
    options: [
      { value: '', label: '전체 채널' },
      { value: 'tworld', label: '옵션1' },
      { value: 'tmembership', label: '옵션2' },
    ],
  },
]`,computed:!1}},defaultValue:{required:!1,tsType:{name:"Partial",elements:[{name:"FilterPanelValue"}],raw:"Partial<FilterPanelValue>"},description:""},submitLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'검색'",computed:!1}},resetLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'초기화'",computed:!1}},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: FilterPanelValue) => void",signature:{arguments:[{type:{name:"FilterPanelValue"},name:"value"}],return:{name:"void"}}},description:""},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["Omit"]};const I=[{key:"status",label:"상태",options:[{value:"",label:"전체 상태"},{value:"active",label:"노출중"},{value:"reserved",label:"예약"},{value:"ended",label:"종료"}]},{key:"channel",label:"채널",options:[{value:"",label:"전체 채널"},{value:"tworld",label:"옵션1"},{value:"tmembership",label:"옵션2"}]}],Q={title:"Organisms/Data/FilterPanel",component:D,tags:["autodocs","data"],parameters:{layout:"centered",docs:{description:{component:"검색어와 여러 필터를 조합해 데이터 목록의 조회 조건을 구성하는 패널입니다."}}},argTypes:{title:{control:"text",table:{category:"Content"}},searchPlaceholder:{control:"text",table:{category:"Content"}},filters:{control:"object",table:{category:"Data"}},submitLabel:{control:"text",table:{category:"Action"}},resetLabel:{control:"text",table:{category:"Action"}},onSubmit:{action:"submitted",table:{category:"Events"}},onReset:{action:"reset",table:{category:"Events"}}},args:{title:"콘텐츠 검색",searchPlaceholder:"콘텐츠명 또는 담당자 검색",filters:I,submitLabel:"검색",resetLabel:"초기화",className:"w-[780px]"}},c={name:"기본"},d={name:"검색만 사용",args:{title:"담당자 검색",searchPlaceholder:"담당자 이름 검색",filters:[],className:"w-[480px]"}},m={name:"기본값 포함",args:{defaultValue:{search:"이벤트",filters:{status:"active",channel:"tworld"}}}};var x,k,N;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '기본'
}`,...(N=(k=c.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var w,j,P;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '검색만 사용',
  args: {
    title: '담당자 검색',
    searchPlaceholder: '담당자 이름 검색',
    filters: [],
    className: 'w-[480px]'
  }
}`,...(P=(j=d.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var R,F,S;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '기본값 포함',
  args: {
    defaultValue: {
      search: '이벤트',
      filters: {
        status: 'active',
        channel: 'tworld'
      }
    }
  }
}`,...(S=(F=m.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};const U=["Default","SearchOnly","WithDefaults"];export{c as Default,d as SearchOnly,m as WithDefaults,U as __namedExportsOrder,Q as default};
