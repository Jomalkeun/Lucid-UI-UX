import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{d as O}from"./reference-types-4ftiVeOu.js";import{r as d}from"./index-BxXVWNx3.js";import{c as b}from"./utils-DCADjnpI.js";import{c as j}from"./createLucideIcon-Ct87QT5c.js";import{C as R}from"./check-CvnDgXMx.js";import{C as z}from"./copy-C2sh45W5.js";import{T as M}from"./trash-2-xZQMnfdL.js";import{D as q}from"./download-DHeW_uee.js";import{A as S}from"./archive-BZeZolLl.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],W=j("ellipsis",F);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],V=j("pencil",B),G=[{id:"edit",label:"수정",icon:s.jsx(V,{className:"size-4"}),shortcut:"E"},{id:"copy",label:"복사",icon:s.jsx(z,{className:"size-4"}),shortcut:"Ctrl+C"},{id:"delete",label:"삭제",icon:s.jsx(M,{className:"size-4"}),destructive:!0}];function l({className:I,items:A=G,disabled:m,menuLabel:L="컨텍스트 메뉴",onSelect:n,children:T,..._}){const[c,u]=d.useState(!1),[p,D]=d.useState({x:0,y:0}),x=(e,t)=>{m||(D({x:e,y:t}),u(!0))},i=()=>u(!1);return d.useEffect(()=>{if(!c)return;const e=()=>i(),t=P=>{P.key==="Escape"&&i()};return window.addEventListener("click",e),window.addEventListener("keydown",t),()=>{window.removeEventListener("click",e),window.removeEventListener("keydown",t)}},[c]),s.jsxs("div",{className:b("relative inline-block",I),onContextMenu:e=>{e.preventDefault(),x(e.clientX,e.clientY)},..._,children:[T??s.jsxs("button",{type:"button",disabled:m,onClick:e=>{const t=e.currentTarget.getBoundingClientRect();x(t.left,t.bottom+6)},className:"inline-flex items-center gap-2 rounded-md border border-krds-gray-30 bg-white px-3 py-2 text-sm text-krds-gray-80 shadow-sm hover:bg-krds-gray-5",children:[s.jsx(W,{className:"size-4"}),"메뉴 열기"]}),c?s.jsx("div",{role:"menu","aria-label":L,className:"fixed z-50 min-w-48 rounded-md border border-krds-gray-30 bg-white p-1 shadow-lg",style:{left:p.x,top:p.y},onClick:e=>e.stopPropagation(),children:A.map(e=>s.jsxs("button",{type:"button",role:"menuitem",disabled:e.disabled,onClick:()=>{var t;(t=e.onSelect)==null||t.call(e),n==null||n(e),i()},className:b("flex w-full items-center gap-2 rounded-sm px-3 py-2 text-left text-sm transition",e.destructive?"text-krds-danger-60 hover:bg-krds-danger-5":"text-krds-gray-80 hover:bg-krds-gray-5",e.disabled&&"cursor-not-allowed opacity-45"),children:[s.jsx("span",{className:"flex size-4 shrink-0 items-center justify-center",children:e.checked?s.jsx(R,{className:"size-4"}):e.icon}),s.jsx("span",{className:"min-w-0 flex-1 truncate",children:e.label}),e.shortcut?s.jsx("span",{className:"text-xs text-krds-gray-50",children:e.shortcut}):null]},e.id))}):null]})}l.__docgenInfo={description:"",methods:[],displayName:"ContextMenu",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"ContextMenuItem"}],raw:"ContextMenuItem[]"},description:"",defaultValue:{value:`[
  { id: 'edit', label: '수정', icon: <Pencil className="size-4" />, shortcut: 'E' },
  { id: 'copy', label: '복사', icon: <Copy className="size-4" />, shortcut: 'Ctrl+C' },
  { id: 'delete', label: '삭제', icon: <Trash2 className="size-4" />, destructive: true },
]`,computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},menuLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'컨텍스트 메뉴'",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: ContextMenuItem) => void",signature:{arguments:[{type:{name:"ContextMenuItem"},name:"item"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const U=O([{library:"shadcn/ui",component:"Context Menu",url:"https://ui.shadcn.com/docs/components/context-menu",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Context Menu",url:"https://base-ui.com/react/components/context-menu",usedFor:["comparison"],relation:"compared"},{library:"WAI-ARIA Authoring Practices Guide",component:"Menu and Menubar Pattern",url:"https://www.w3.org/WAI/ARIA/apg/patterns/menubar/",usedFor:["behavior","accessibility"],relation:"compared"}]),E=[{id:"copy",label:"복사",icon:s.jsx(z,{className:"size-4"}),shortcut:"Ctrl+C"},{id:"download",label:"다운로드",icon:s.jsx(q,{className:"size-4"})},{id:"archive",label:"보관",icon:s.jsx(S,{className:"size-4"}),checked:!0},{id:"delete",label:"삭제",icon:s.jsx(M,{className:"size-4"}),destructive:!0}],re={title:"Molecules/Navigation/ContextMenu",component:l,tags:["autodocs","navigation","ref:shadcn-ui","ref:base-ui","ref:w3c-aria-apg"],parameters:{references:U,layout:"centered",docs:{description:{component:"우클릭 또는 트리거 클릭으로 열리는 컨텍스트 액션 메뉴 컴포넌트입니다."}}},argTypes:{disabled:{control:"boolean",table:{category:"State"}},menuLabel:{control:"text",table:{category:"Content"}}},args:{items:E,disabled:!1,menuLabel:"문서 메뉴"}},r={name:"기본"},a={name:"카드 영역",render:()=>s.jsx(l,{items:E,children:s.jsx("div",{className:"grid h-40 w-80 place-items-center rounded-md border border-dashed border-krds-gray-40 bg-krds-gray-5 text-sm text-krds-gray-70",children:"이 영역을 우클릭하세요"})}),parameters:{controls:{disable:!0}}},o={name:"비활성화",args:{disabled:!0}};var y,g,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '기본'
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,k,w;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '카드 영역',
  render: () => <ContextMenu items={items}>
      <div className="grid h-40 w-80 place-items-center rounded-md border border-dashed border-krds-gray-40 bg-krds-gray-5 text-sm text-krds-gray-70">
        이 영역을 우클릭하세요
      </div>
    </ContextMenu>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(w=(k=a.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var C,v,N;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '비활성화',
  args: {
    disabled: true
  }
}`,...(N=(v=o.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};const ae=["Default","OnCard","Disabled"];export{r as Default,o as Disabled,a as OnCard,ae as __namedExportsOrder,re as default};
