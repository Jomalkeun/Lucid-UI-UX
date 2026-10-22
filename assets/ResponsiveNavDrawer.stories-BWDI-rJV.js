import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-BxXVWNx3.js";import{X as h}from"./x-DsL683-u.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-Ct87QT5c.js";function u({open:t,title:i="메뉴",items:f,utilitySlot:l,onClose:a}){const o=d.useRef(null);return d.useEffect(()=>{var s;if(!t)return;(s=o.current)==null||s.focus();const r=b=>{b.key==="Escape"&&a()};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[t,a]),t?e.jsxs("div",{className:"fixed inset-0 z-50 md:hidden",children:[e.jsx("button",{type:"button","aria-label":"메뉴 닫기",className:"absolute inset-0 bg-black/40",onClick:a}),e.jsxs("aside",{role:"dialog","aria-modal":"true","aria-label":i,className:"relative h-full w-80 max-w-[85vw] bg-white p-5 shadow-xl",children:[e.jsxs("header",{className:"flex items-center justify-between border-b pb-4",children:[e.jsx("h2",{className:"font-bold",children:i}),e.jsx("button",{ref:o,type:"button","aria-label":"닫기",onClick:a,children:e.jsx(h,{})})]}),e.jsx("nav",{"aria-label":"모바일 내비게이션",className:"py-4",children:e.jsx("ul",{className:"space-y-3",children:f.map(r=>e.jsxs("li",{children:[e.jsx("a",{className:"block font-medium",href:r.href??"#",children:r.label}),r.children?e.jsx("ul",{className:"mt-2 space-y-2 pl-4 text-sm text-krds-gray-60",children:r.children.map(s=>e.jsx("li",{children:e.jsx("a",{href:s.href??"#",children:s.label})},s.id))}):null]},r.id))})}),l?e.jsx("div",{className:"border-t pt-4",children:l}):null]})]}):null}u.__docgenInfo={description:"",methods:[],displayName:"ResponsiveNavDrawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'메뉴'",computed:!1}},items:{required:!0,tsType:{name:"Array",elements:[{name:"ResponsiveNavItem"}],raw:"ResponsiveNavItem[]"},description:""},utilitySlot:{required:!1,tsType:{name:"ReactNode"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const N={title:"Organisms/Navigation/ResponsiveNavDrawer",component:u,parameters:{viewport:{defaultViewport:"mobile1"}}},n={args:{open:!0,onClose:()=>{},items:[{id:"about",label:"소개",href:"#"},{id:"service",label:"서비스",children:[{id:"one",label:"항목 하나",href:"#"}]}]}};var c,m,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: () => undefined,
    items: [{
      id: 'about',
      label: '소개',
      href: '#'
    }, {
      id: 'service',
      label: '서비스',
      children: [{
        id: 'one',
        label: '항목 하나',
        href: '#'
      }]
    }]
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const g=["Open"];export{n as Open,g as __namedExportsOrder,N as default};
