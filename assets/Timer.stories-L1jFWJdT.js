import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as D}from"./reference-types-4ftiVeOu.js";import{r as b}from"./index-BxXVWNx3.js";import{c as v}from"./utils-DCADjnpI.js";import{c as B}from"./createLucideIcon-Ct87QT5c.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],F=B("clock",W),L={sm:"text-lg",md:"text-2xl",lg:"text-4xl"};function O(m){const a=Math.max(Math.floor(m),0),r=Math.floor(a/3600),s=Math.floor(a%3600/60),o=a%60;return(r>0?[r,s,o]:[s,o]).map(g=>String(g).padStart(2,"0")).join(":")}function n({className:m,seconds:a=0,mode:r="countdown",running:s=!1,size:o="md",label:p,showIcon:g=!0,onComplete:t,...C}){const[y,x]=b.useState(a);return b.useEffect(()=>{x(a)},[a]),b.useEffect(()=>{if(!s)return;const h=window.setInterval(()=>{x(f=>r==="countup"?f+1:f<=1?(window.clearInterval(h),t==null||t(),0):f-1)},1e3);return()=>window.clearInterval(h)},[r,t,s]),e.jsxs("div",{className:v("inline-flex items-center gap-3 rounded-md border border-krds-gray-30 bg-white px-4 py-3 text-krds-gray-90",m),...C,children:[g?e.jsx(F,{"aria-hidden":"true",className:"size-5 shrink-0 text-krds-primary-50"}):null,e.jsxs("div",{className:"grid gap-1",children:[p?e.jsx("span",{className:"text-sm text-krds-gray-60",children:p}):null,e.jsx("time",{className:v("font-mono font-semibold tabular-nums leading-none",L[o]),dateTime:`PT${Math.max(y,0)}S`,children:O(y)})]})]})}n.__docgenInfo={description:"",methods:[],displayName:"Timer",props:{seconds:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},mode:{required:!1,tsType:{name:"union",raw:"'countup' | 'countdown'",elements:[{name:"literal",value:"'countup'"},{name:"literal",value:"'countdown'"}]},description:"",defaultValue:{value:"'countdown'",computed:!1}},running:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const P=D([{library:"Ark UI",component:"Timer",url:"https://ark-ui.com/docs/components/timer",usedFor:["behavior","accessibility","api"],relation:"compared"}]),Q={title:"Atoms/Display/Timer",component:n,tags:["autodocs","display","ref:ark-ui"],parameters:{references:P,layout:"centered",docs:{description:{component:"남은 시간 또는 경과 시간을 시각적으로 표시하는 타이머 컴포넌트입니다."}}},argTypes:{seconds:{control:{type:"range",min:0,max:7200,step:5},table:{category:"State"}},mode:{control:"inline-radio",options:["countup","countdown"],table:{category:"Behavior"}},running:{control:"boolean",table:{category:"Behavior"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},label:{control:"text",table:{category:"Content"}},showIcon:{control:"boolean",table:{category:"Appearance"}}},args:{seconds:300,mode:"countdown",running:!1,size:"md",label:"남은 시간",showIcon:!0}},c={name:"기본"},i={name:"카운트다운 실행",args:{seconds:30,running:!0,label:"인증 만료"}},l={name:"카운트업",args:{seconds:0,mode:"countup",running:!0,label:"경과 시간"}},d={name:"크기",render:()=>e.jsxs("div",{className:"grid gap-3",children:[e.jsx(n,{seconds:75,size:"sm",label:"작게"}),e.jsx(n,{seconds:300,size:"md",label:"보통"}),e.jsx(n,{seconds:3661,size:"lg",label:"크게"})]}),parameters:{controls:{disable:!0}}},u={name:"아이콘 없음",args:{showIcon:!1}};var w,T,S;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '기본'
}`,...(S=(T=c.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var I,z,j;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '카운트다운 실행',
  args: {
    seconds: 30,
    running: true,
    label: '인증 만료'
  }
}`,...(j=(z=i.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var k,N,R;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '카운트업',
  args: {
    seconds: 0,
    mode: 'countup',
    running: true,
    label: '경과 시간'
  }
}`,...(R=(N=l.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var q,_,E;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '크기',
  render: () => <div className="grid gap-3">
      <Timer seconds={75} size="sm" label="작게" />
      <Timer seconds={300} size="md" label="보통" />
      <Timer seconds={3661} size="lg" label="크게" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(E=(_=d.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var M,V,A;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: '아이콘 없음',
  args: {
    showIcon: false
  }
}`,...(A=(V=u.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};const X=["Default","RunningCountdown","Countup","Sizes","WithoutIcon"];export{l as Countup,c as Default,i as RunningCountdown,d as Sizes,u as WithoutIcon,X as __namedExportsOrder,Q as default};
