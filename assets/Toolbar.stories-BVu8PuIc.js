import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as n}from"./utils-DCADjnpI.js";import{d as q}from"./reference-types-4ftiVeOu.js";import{S as V}from"./search-BiWmW4bk.js";import{L as _}from"./link-CW0KDftW.js";import{c as L}from"./createLucideIcon-Ct87QT5c.js";import{B as I,I as A}from"./italic-ur5SgAuk.js";import{U as M}from"./underline-tKWdHv5C.js";import{L as B}from"./list-CoymnDxL.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],U=L("save",C),D={sm:"size-8",md:"size-10"};function c({className:l,actions:r,orientation:m="horizontal",size:N="md",children:T,"aria-label":S="도구 모음",...w}){return e.jsxs("div",{role:"toolbar","aria-label":S,"aria-orientation":m,className:n("inline-flex rounded-md border border-krds-gray-30 bg-white p-1 shadow-sm",m==="horizontal"?"items-center gap-1":"flex-col gap-1",l),...w,children:[r==null?void 0:r.map(a=>e.jsx("button",{type:"button",disabled:a.disabled,"aria-label":a.label,"aria-pressed":a.active,title:a.label,onClick:a.onClick,className:n("inline-flex items-center justify-center rounded-sm text-krds-gray-70 transition","hover:bg-krds-gray-5 hover:text-krds-gray-90","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-krds-primary-50 focus-visible:ring-offset-2","disabled:cursor-not-allowed disabled:opacity-45",a.active&&"bg-krds-primary-5 text-krds-primary-70",D[N]),children:a.icon??e.jsx("span",{className:"text-xs font-semibold",children:a.label.slice(0,2)})},a.id)),T]})}function j({className:l,orientation:r="vertical"}){return e.jsx("span",{"aria-hidden":"true",className:n(r==="vertical"?"mx-1 h-6 w-px":"my-1 h-px w-6","bg-krds-gray-30",l)})}c.__docgenInfo={description:"",methods:[],displayName:"Toolbar",props:{actions:{required:!1,tsType:{name:"Array",elements:[{name:"ToolbarAction"}],raw:"ToolbarAction[]"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'도구 모음'",computed:!1}}}};j.__docgenInfo={description:"",methods:[],displayName:"ToolbarSeparator",props:{className:{required:!1,tsType:{name:"string"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}}}};const E=[{id:"bold",label:"굵게",icon:e.jsx(I,{className:"size-4"}),active:!0},{id:"italic",label:"기울임",icon:e.jsx(A,{className:"size-4"})},{id:"underline",label:"밑줄",icon:e.jsx(M,{className:"size-4"})},{id:"list",label:"목록",icon:e.jsx(B,{className:"size-4"})}],F=q([{library:"Quasar",component:"Toolbar",url:"https://quasar.dev/vue-components/toolbar",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Toolbar",url:"https://base-ui.com/react/components/toolbar",usedFor:["comparison"],relation:"compared"}]),Z={title:"Molecules/Navigation/Toolbar",component:c,tags:["autodocs","navigation","ref:quasar","ref:base-ui"],parameters:{references:F,layout:"centered",docs:{description:{component:"반복 작업 버튼을 묶어 제공하는 접근 가능한 도구 모음 컴포넌트입니다."}}},argTypes:{orientation:{control:"inline-radio",options:["horizontal","vertical"],table:{category:"Layout"}},size:{control:"inline-radio",options:["sm","md"],table:{category:"Appearance"}}},args:{actions:E,orientation:"horizontal",size:"md"}},s={name:"기본"},t={name:"구분선 포함",render:()=>e.jsxs(c,{"aria-label":"편집 도구",children:[e.jsx("button",{className:"inline-flex size-10 items-center justify-center rounded-sm text-krds-gray-70 hover:bg-krds-gray-5","aria-label":"검색",children:e.jsx(V,{className:"size-4"})}),e.jsx(j,{}),e.jsx("button",{className:"inline-flex size-10 items-center justify-center rounded-sm text-krds-gray-70 hover:bg-krds-gray-5","aria-label":"링크",children:e.jsx(_,{className:"size-4"})}),e.jsx("button",{className:"inline-flex size-10 items-center justify-center rounded-sm text-krds-gray-70 hover:bg-krds-gray-5","aria-label":"저장",children:e.jsx(U,{className:"size-4"})})]}),parameters:{controls:{disable:!0}}},o={name:"세로",args:{orientation:"vertical"}},i={name:"작은 크기",args:{size:"sm"}};var d,u,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '기본'
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var b,f,g;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '구분선 포함',
  render: () => <Toolbar aria-label="편집 도구">
      <button className="inline-flex size-10 items-center justify-center rounded-sm text-krds-gray-70 hover:bg-krds-gray-5" aria-label="검색">
        <Search className="size-4" />
      </button>
      <ToolbarSeparator />
      <button className="inline-flex size-10 items-center justify-center rounded-sm text-krds-gray-70 hover:bg-krds-gray-5" aria-label="링크">
        <Link className="size-4" />
      </button>
      <button className="inline-flex size-10 items-center justify-center rounded-sm text-krds-gray-70 hover:bg-krds-gray-5" aria-label="저장">
        <Save className="size-4" />
      </button>
    </Toolbar>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,v,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '세로',
  args: {
    orientation: 'vertical'
  }
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var h,z,k;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '작은 크기',
  args: {
    size: 'sm'
  }
}`,...(k=(z=i.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};const $=["Default","WithSeparator","Vertical","Small"];export{s as Default,i as Small,o as Vertical,t as WithSeparator,$ as __namedExportsOrder,Z as default};
