import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as I}from"./reference-types-CC3VHbJD.js";import{c as f}from"./utils-DCADjnpI.js";const _={sm:{root:"size-12 text-xs",stroke:8},md:{root:"size-16 text-sm",stroke:7},lg:{root:"size-24 text-base",stroke:6}},A={default:"text-krds-primary-50",success:"text-krds-success-60",warning:"text-krds-warning-60",danger:"text-krds-danger-60"};function E(d,r,t){return Math.min(Math.max(d,r),t)}function a({className:d,value:r=0,max:t=100,size:V="md",status:q="default",showValue:T=!0,label:l,valueText:M,indeterminate:s=!1,...R}){const v=t>0?t:100,m=E(r/v*100,0,100),p=42,o=2*Math.PI*p,D=o-m/100*o,g=_[V];return e.jsxs("div",{className:f("inline-grid justify-items-center gap-2 text-krds-gray-90",d),...R,children:[e.jsxs("div",{role:"progressbar","aria-valuemin":0,"aria-valuemax":v,"aria-valuenow":s?void 0:r,"aria-label":typeof l=="string"?l:void 0,"aria-valuetext":s?void 0:M??`${Math.round(m)}%`,className:f("relative inline-flex items-center justify-center",g.root),children:[e.jsxs("svg",{className:"size-full -rotate-90",viewBox:"0 0 100 100","aria-hidden":"true",children:[e.jsx("circle",{cx:"50",cy:"50",r:p,fill:"none",stroke:"currentColor",strokeWidth:g.stroke,className:"text-krds-gray-20"}),e.jsx("circle",{cx:"50",cy:"50",r:p,fill:"none",stroke:"currentColor",strokeWidth:g.stroke,strokeLinecap:"round",strokeDasharray:o,strokeDashoffset:s?o*.25:D,className:f("origin-center transition-all duration-300",A[q],s&&"animate-spin")})]}),T&&!s?e.jsxs("span",{className:"absolute font-semibold tabular-nums",children:[Math.round(m),"%"]}):null]}),l?e.jsx("span",{className:"text-sm text-krds-gray-70",children:l}):null]})}a.__docgenInfo={description:"",methods:[],displayName:"ProgressCircle",props:{value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},showValue:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},valueText:{required:!1,tsType:{name:"string"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const F=I([{library:"Chakra UI",component:"Progress Circle",url:"https://www.chakra-ui.com/docs/components/progress-circle",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Circular Progress",url:"https://quasar.dev/vue-components/circular-progress",usedFor:["comparison"],relation:"compared"}]),L={title:"Atoms/Display/ProgressCircle",component:a,tags:["autodocs","display","ref:quasar","ref:chakra-ui"],parameters:{references:F,layout:"centered",docs:{description:{component:"작업 진행률이나 상태 값을 원형 그래픽으로 표시하는 컴포넌트입니다."}}},argTypes:{value:{control:{type:"range",min:0,max:100,step:1},table:{category:"State"}},max:{control:"number",table:{category:"State"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},status:{control:"inline-radio",options:["default","success","warning","danger"],table:{category:"State"}},showValue:{control:"boolean",table:{category:"Appearance"}},label:{control:"text",table:{category:"Content"}},indeterminate:{control:"boolean",table:{category:"State"}}},args:{value:64,max:100,size:"md",status:"default",showValue:!0,label:"진행률",indeterminate:!1}},n={name:"기본"},i={name:"크기",render:()=>e.jsxs("div",{className:"flex items-end gap-6",children:[e.jsx(a,{value:32,size:"sm",label:"작게"}),e.jsx(a,{value:64,size:"md",label:"보통"}),e.jsx(a,{value:88,size:"lg",label:"크게"})]}),parameters:{controls:{disable:!0}}},c={name:"상태",render:()=>e.jsxs("div",{className:"flex gap-6",children:[e.jsx(a,{value:70,status:"default",label:"기본"}),e.jsx(a,{value:100,status:"success",label:"완료"}),e.jsx(a,{value:45,status:"warning",label:"주의"}),e.jsx(a,{value:12,status:"danger",label:"위험"})]}),parameters:{controls:{disable:!0}}},u={name:"진행 중",args:{indeterminate:!0,showValue:!1,label:"처리 중"}};var x,b,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '기본'
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var h,k,j;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '크기',
  render: () => <div className="flex items-end gap-6">
      <ProgressCircle value={32} size="sm" label="작게" />
      <ProgressCircle value={64} size="md" label="보통" />
      <ProgressCircle value={88} size="lg" label="크게" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(j=(k=i.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var w,C,z;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '상태',
  render: () => <div className="flex gap-6">
      <ProgressCircle value={70} status="default" label="기본" />
      <ProgressCircle value={100} status="success" label="완료" />
      <ProgressCircle value={45} status="warning" label="주의" />
      <ProgressCircle value={12} status="danger" label="위험" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(z=(C=c.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var N,P,S;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '진행 중',
  args: {
    indeterminate: true,
    showValue: false,
    label: '처리 중'
  }
}`,...(S=(P=u.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};const Q=["Default","Sizes","Statuses","Indeterminate"];export{n as Default,u as Indeterminate,i as Sizes,c as Statuses,Q as __namedExportsOrder,L as default};
