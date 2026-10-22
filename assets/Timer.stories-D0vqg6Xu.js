import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as U,c as F}from"./reference-types-CC3VHbJD.js";import{r as v}from"./index-BxXVWNx3.js";import{c as T}from"./utils-DCADjnpI.js";import{c as G}from"./createLucideIcon-Ct87QT5c.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],J=G("clock",H),K={sm:"text-lg",md:"text-2xl",lg:"text-4xl"};function x(g){const a=Math.max(Math.floor(g),0),r=Math.floor(a/3600),n=Math.floor(a%3600/60),t=a%60;return(r>0?[r,n,t]:[n,t]).map(y=>String(y).padStart(2,"0")).join(":")}function o({className:g,seconds:a=0,mode:r="countdown",running:n=!1,size:t="md",label:s,showIcon:y=!0,onComplete:i,ariaLive:O="off",ariaLabel:W,...P}){const[c,h]=v.useState(a);return v.useEffect(()=>{h(a)},[a]),v.useEffect(()=>{if(!n)return;const w=window.setInterval(()=>{h(b=>r==="countup"?b+1:b<=1?(window.clearInterval(w),i==null||i(),0):b-1)},1e3);return()=>window.clearInterval(w)},[r,i,n]),e.jsxs("div",{role:"timer","aria-live":O,"aria-label":W??(s?`${s} ${x(c)}`:x(c)),className:T("inline-flex items-center gap-3 rounded-md border border-krds-gray-30 bg-white px-4 py-3 text-krds-gray-90",g),...P,children:[y?e.jsx(J,{"aria-hidden":"true",className:"size-5 shrink-0 text-krds-primary-50"}):null,e.jsxs("div",{className:"grid gap-1",children:[s?e.jsx("span",{className:"text-sm text-krds-gray-60",children:s}):null,e.jsx("time",{className:T("font-mono font-semibold tabular-nums leading-none",K[t]),dateTime:`PT${Math.max(c,0)}S`,children:x(c)})]})]})}o.__docgenInfo={description:"",methods:[],displayName:"Timer",props:{seconds:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},mode:{required:!1,tsType:{name:"union",raw:"'countup' | 'countdown'",elements:[{name:"literal",value:"'countup'"},{name:"literal",value:"'countdown'"}]},description:"",defaultValue:{value:"'countdown'",computed:!1}},running:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},ariaLive:{required:!1,tsType:{name:"union",raw:"'off' | 'polite'",elements:[{name:"literal",value:"'off'"},{name:"literal",value:"'polite'"}]},description:"Opt in to announcements for short-lived time-sensitive interactions.",defaultValue:{value:"'off'",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""}}};const Q=U([F("Ark UI","Timer","https://ark-ui.com/docs/components/timer")]),ne={title:"Atoms/Display/Timer",component:o,tags:["autodocs","display","ref:ark-ui"],parameters:{references:Q,layout:"centered",docs:{description:{component:"남은 시간 또는 경과 시간을 시각적으로 표시하는 타이머 컴포넌트입니다."}}},argTypes:{seconds:{control:{type:"range",min:0,max:7200,step:5},table:{category:"State"}},mode:{control:"inline-radio",options:["countup","countdown"],table:{category:"Behavior"}},running:{control:"boolean",table:{category:"Behavior"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},label:{control:"text",table:{category:"Content"}},showIcon:{control:"boolean",table:{category:"Appearance"}},ariaLive:{control:"inline-radio",options:["off","polite"],table:{category:"Accessibility"}},ariaLabel:{control:"text",table:{category:"Accessibility"}}},args:{seconds:300,mode:"countdown",running:!1,size:"md",label:"남은 시간",showIcon:!0}},l={name:"기본"},d={name:"카운트다운 실행",args:{seconds:30,running:!0,label:"인증 만료"}},u={name:"상태 안내 만료 시간",args:{seconds:30,running:!0,label:"인증 만료",ariaLive:"polite",ariaLabel:"인증 코드 만료까지 30초"},parameters:{docs:{description:{story:'짧은 인증·제한 시간에는 `ariaLive="polite"`를 사용해 상태 변경을 안내할 수 있습니다.'}}}},m={name:"카운트업",args:{seconds:0,mode:"countup",running:!0,label:"경과 시간"}},p={name:"크기",render:()=>e.jsxs("div",{className:"grid gap-3",children:[e.jsx(o,{seconds:75,size:"sm",label:"작게"}),e.jsx(o,{seconds:300,size:"md",label:"보통"}),e.jsx(o,{seconds:3661,size:"lg",label:"크게"})]}),parameters:{controls:{disable:!0}}},f={name:"아이콘 없음",args:{showIcon:!1}};var S,I,z;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '기본'
}`,...(z=(I=l.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var j,k,L;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '카운트다운 실행',
  args: {
    seconds: 30,
    running: true,
    label: '인증 만료'
  }
}`,...(L=(k=d.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var N,q,R;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '상태 안내 만료 시간',
  args: {
    seconds: 30,
    running: true,
    label: '인증 만료',
    ariaLive: 'polite',
    ariaLabel: '인증 코드 만료까지 30초'
  },
  parameters: {
    docs: {
      description: {
        story: '짧은 인증·제한 시간에는 \`ariaLive="polite"\`를 사용해 상태 변경을 안내할 수 있습니다.'
      }
    }
  }
}`,...(R=(q=u.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var A,E,V;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '카운트업',
  args: {
    seconds: 0,
    mode: 'countup',
    running: true,
    label: '경과 시간'
  }
}`,...(V=(E=m.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var _,M,C;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(C=(M=p.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var D,$,B;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '아이콘 없음',
  args: {
    showIcon: false
  }
}`,...(B=($=f.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};const se=["Default","RunningCountdown","AnnouncedExpiry","Countup","Sizes","WithoutIcon"];export{u as AnnouncedExpiry,m as Countup,l as Default,d as RunningCountdown,p as Sizes,f as WithoutIcon,se as __namedExportsOrder,ne as default};
