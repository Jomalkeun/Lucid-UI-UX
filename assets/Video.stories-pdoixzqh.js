import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as V}from"./index-BxXVWNx3.js";import{c}from"./utils-DCADjnpI.js";import{c as L}from"./createLucideIcon-Ct87QT5c.js";import{d as T}from"./reference-types-4ftiVeOu.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]],z=L("circle-play",_),W={video:"aspect-video",square:"aspect-square",wide:"aspect-[21/9]"},i=V.forwardRef(({className:h,containerClassName:w,title:s,description:n,aspectRatio:q="video",overlayLabel:l,controls:j=!0,children:C,...k},S)=>e.jsxs("figure",{className:c("grid gap-3",w),children:[e.jsxs("div",{className:c("relative overflow-hidden rounded-md border border-krds-gray-30 bg-krds-gray-90",W[q]),children:[e.jsxs("video",{ref:S,controls:j,className:c("size-full object-cover",h),...k,children:[C,"브라우저가 비디오 재생을 지원하지 않습니다."]}),l?e.jsxs("div",{className:"pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-sm bg-black/65 px-2 py-1 text-xs font-medium text-white",children:[e.jsx(z,{"aria-hidden":"true",className:"size-3.5"}),e.jsx("span",{children:l})]}):null]}),s||n?e.jsxs("figcaption",{className:"grid gap-1",children:[s?e.jsx("p",{className:"text-sm font-medium text-krds-gray-90",children:s}):null,n?e.jsx("p",{className:"text-sm text-krds-gray-60",children:n}):null]}):null]}));i.displayName="Video";i.__docgenInfo={description:"",methods:[],displayName:"Video",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},aspectRatio:{required:!1,tsType:{name:"union",raw:"'video' | 'square' | 'wide'",elements:[{name:"literal",value:"'video'"},{name:"literal",value:"'square'"},{name:"literal",value:"'wide'"}]},description:"",defaultValue:{value:"'video'",computed:!1}},overlayLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:""},controls:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["Omit"]};const B="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",D="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.jpg",E=T([{library:"Quasar",component:"Video",url:"https://quasar.dev/vue-components/video",usedFor:["comparison"],relation:"compared"}]),Q={title:"Atoms/Display/Video",component:i,tags:["autodocs","display","ref:quasar"],parameters:{references:E,layout:"centered",docs:{description:{component:"비디오 콘텐츠를 일관된 비율, 캡션, 상태 라벨과 함께 표시하는 미디어 컴포넌트입니다."}}},argTypes:{src:{control:"text",table:{category:"Media"}},poster:{control:"text",table:{category:"Media"}},title:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},overlayLabel:{control:"text",table:{category:"Content"}},aspectRatio:{control:"inline-radio",options:["video","square","wide"],table:{category:"Layout"}},controls:{control:"boolean",table:{category:"Behavior"}},muted:{control:"boolean",table:{category:"Behavior"}},loop:{control:"boolean",table:{category:"Behavior"}}},args:{src:B,poster:D,title:"공공정원 기록 영상",description:"정책 홍보나 안내 콘텐츠에 사용할 수 있는 기본 비디오 표시 예시입니다.",overlayLabel:"동영상",aspectRatio:"video",controls:!0,muted:!0,loop:!1,containerClassName:"w-[560px]"}},a={name:"기본"},t={name:"와이드",args:{aspectRatio:"wide",title:"와이드 영상"}},r={name:"정사각형",args:{aspectRatio:"square",title:"정사각형 영상",containerClassName:"w-[360px]"}},o={name:"캡션 없음",args:{title:"",description:"",overlayLabel:""}};var d,p,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '기본'
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '와이드',
  args: {
    aspectRatio: 'wide',
    title: '와이드 영상'
  }
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,v,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '정사각형',
  args: {
    aspectRatio: 'square',
    title: '정사각형 영상',
    containerClassName: 'w-[360px]'
  }
}`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var b,R,N;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '캡션 없음',
  args: {
    title: '',
    description: '',
    overlayLabel: ''
  }
}`,...(N=(R=o.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};const G=["Default","Wide","Square","WithoutCaption"];export{a as Default,r as Square,t as Wide,o as WithoutCaption,G as __namedExportsOrder,Q as default};
