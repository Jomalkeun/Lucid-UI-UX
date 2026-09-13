import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as j}from"./star-CebXzFWR.js";import{c as N}from"./createLucideIcon-Ct87QT5c.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],k=N("badge-check",S);function b({items:r,variant:i="metrics",tone:o="default",orientation:n="horizontal",className:h=""}){if(!r.length)return null;const y=o==="inverse"?"bg-krds-gray-90 text-white":o==="subtle"?"bg-[var(--commerce-surface-subtle)]":"border border-krds-gray-20 bg-krds-gray-0";return e.jsx("section",{"aria-label":"신뢰 정보",className:`rounded-xl ${y} ${h}`,children:e.jsx("dl",{className:`${n==="vertical"?"grid gap-3 p-5 sm:grid-cols-2":"flex flex-wrap items-stretch justify-around divide-x divide-krds-gray-30 p-4"} ${i==="logos"?"gap-4":""}`,children:r.map(a=>e.jsx("div",{className:`${n==="vertical"?"rounded-lg p-3":"min-w-32 px-5 py-2"} ${i==="logos"?"flex items-center justify-center font-black tracking-[0.14em]":""}`,children:a.logo?e.jsxs("dt",{children:[a.logo,e.jsx("span",{className:"sr-only",children:a.label})]}):e.jsxs(e.Fragment,{children:[e.jsxs("dt",{className:"flex items-center gap-2 text-sm text-krds-gray-60",children:[a.icon?e.jsx("span",{"aria-hidden":"true",children:a.icon}):null,a.label]}),a.value?e.jsx("dd",{className:"mt-1 text-2xl font-black tracking-tight",children:a.value}):null,a.description?e.jsx("p",{className:"mt-1 text-xs text-krds-gray-60",children:a.description}):null]})},a.id))})})}b.__docgenInfo={description:"",methods:[],displayName:"SocialProofStrip",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"SocialProofItem"}],raw:"SocialProofItem[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'metrics' | 'logos' | 'trust-items' | 'rating-summary'",elements:[{name:"literal",value:"'metrics'"},{name:"literal",value:"'logos'"},{name:"literal",value:"'trust-items'"},{name:"literal",value:"'rating-summary'"}]},description:"",defaultValue:{value:"'metrics'",computed:!1}},tone:{required:!1,tsType:{name:"union",raw:"'default' | 'inverse' | 'subtle'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'inverse'"},{name:"literal",value:"'subtle'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const T=[{id:"customers",label:"고객 후기",value:"30,000+"},{id:"rating",label:"평균 평점",value:"4.9 / 5"},{id:"delivery",label:"빠른 배송",value:"98%"}],E={title:"Molecules/Commerce/SocialProofStrip",component:b,args:{items:T}},s={},t={args:{variant:"logos",tone:"inverse",items:["ATELIER","FORM","MONO","STUDIO"].map(r=>({id:r,label:r,logo:r}))}},l={args:{variant:"trust-items",orientation:"vertical",tone:"subtle",items:[{id:"verified",label:"검증된 후기",value:"4.9",icon:e.jsx(j,{className:"size-4"})},{id:"secure",label:"안전한 결제",description:"주문 정보를 안전하게 보호합니다.",icon:e.jsx(k,{className:"size-4"})}]}};var c,d,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'logos',
    tone: 'inverse',
    items: ['ATELIER', 'FORM', 'MONO', 'STUDIO'].map(label => ({
      id: label,
      label,
      logo: label
    }))
  }
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,f,x;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'trust-items',
    orientation: 'vertical',
    tone: 'subtle',
    items: [{
      id: 'verified',
      label: '검증된 후기',
      value: '4.9',
      icon: <Star className="size-4" />
    }, {
      id: 'secure',
      label: '안전한 결제',
      description: '주문 정보를 안전하게 보호합니다.',
      icon: <BadgeCheck className="size-4" />
    }]
  }
}`,...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const _=["Metrics","Logos","TrustItems"];export{t as Logos,s as Metrics,l as TrustItems,_ as __namedExportsOrder,E as default};
