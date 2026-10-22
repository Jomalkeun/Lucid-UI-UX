import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as h}from"./utils-DCADjnpI.js";const _={default:"text-krds-primary-50",success:"text-krds-success-60",warning:"text-krds-warning-60",danger:"text-krds-danger-60"};function B(t,o,s){const r=Math.min(...t),p=Math.max(...t)-r||1,g=t.length>1?o/(t.length-1):o;return t.map((n,f)=>({value:n,x:f*g,y:s-(n-r)/p*s}))}function l({className:t,data:o=[18,26,22,38,34,52,47,64],width:s=180,height:r=56,variant:m="line",status:p="default",showDots:g=!1,label:n,...f}){const b=o.length>0?o:[0],x=B(b,s,r),v=x.map(a=>`${a.x},${a.y}`).join(" "),L=`${v} ${s},${r} 0,${r}`,k=Math.max(s/b.length-4,2);return e.jsxs("div",{className:h("inline-grid gap-2 text-krds-gray-90",t),...f,children:[n?e.jsx("span",{className:"text-sm font-medium text-krds-gray-70",children:n}):null,e.jsx("svg",{role:"img","aria-label":typeof n=="string"?n:"Sparkline",width:s,height:r,viewBox:`0 0 ${s} ${r}`,className:h("overflow-visible",_[p]),children:m==="bar"?x.map((a,y)=>e.jsx("rect",{x:a.x-k/2,y:a.y,width:k,height:r-a.y,rx:"2",fill:"currentColor",opacity:"0.8"},`${a.x}-${y}`)):e.jsxs(e.Fragment,{children:[m==="area"?e.jsx("polygon",{points:L,fill:"currentColor",opacity:"0.14"}):null,e.jsx("polyline",{points:v,fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),g?x.map((a,y)=>e.jsx("circle",{cx:a.x,cy:a.y,r:"3",fill:"currentColor"},`${a.x}-${y}`)):null]})})]})}l.__docgenInfo={description:"",methods:[],displayName:"Sparkline",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"",defaultValue:{value:"[18, 26, 22, 38, 34, 52, 47, 64]",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"180",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"56",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'line' | 'area' | 'bar'",elements:[{name:"literal",value:"'line'"},{name:"literal",value:"'area'"},{name:"literal",value:"'bar'"}]},description:"",defaultValue:{value:"'line'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},showDots:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const W={title:"Atoms/Display/Sparkline",component:l,tags:["autodocs","display"],parameters:{layout:"centered",docs:{description:{component:"작은 영역에서 수치 변화의 흐름을 간결하게 보여주는 미니 차트 컴포넌트입니다."}}},argTypes:{width:{control:{type:"range",min:80,max:320,step:10},table:{category:"Layout"}},height:{control:{type:"range",min:32,max:120,step:4},table:{category:"Layout"}},variant:{control:"inline-radio",options:["line","area","bar"],table:{category:"Appearance"}},status:{control:"inline-radio",options:["default","success","warning","danger"],table:{category:"State"}},showDots:{control:"boolean",table:{category:"Appearance"}},label:{control:"text",table:{category:"Content"}}},args:{data:[18,26,22,38,34,52,47,64],width:180,height:56,variant:"line",status:"default",showDots:!1,label:"방문 추이"}},c={name:"기본"},i={name:"영역",args:{variant:"area",showDots:!0}},u={name:"막대",args:{variant:"bar",status:"success"}},d={name:"상태",render:()=>e.jsxs("div",{className:"grid gap-4",children:[e.jsx(l,{label:"기본",status:"default",data:[12,18,16,24,28,36]}),e.jsx(l,{label:"상승",status:"success",data:[8,12,18,26,34,48]}),e.jsx(l,{label:"주의",status:"warning",data:[40,36,42,30,28,22]}),e.jsx(l,{label:"하락",status:"danger",data:[54,42,36,28,18,12]})]}),parameters:{controls:{disable:!0}}};var j,w,S;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '기본'
}`,...(S=(w=c.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var $,D,N;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: '영역',
  args: {
    variant: 'area',
    showDots: true
  }
}`,...(N=(D=i.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var T,q,A;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '막대',
  args: {
    variant: 'bar',
    status: 'success'
  }
}`,...(A=(q=u.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var C,V,R;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '상태',
  render: () => <div className="grid gap-4">
      <Sparkline label="기본" status="default" data={[12, 18, 16, 24, 28, 36]} />
      <Sparkline label="상승" status="success" data={[8, 12, 18, 26, 34, 48]} />
      <Sparkline label="주의" status="warning" data={[40, 36, 42, 30, 28, 22]} />
      <Sparkline label="하락" status="danger" data={[54, 42, 36, 28, 18, 12]} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(R=(V=d.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};const z=["Default","Area","Bar","Statuses"];export{i as Area,u as Bar,c as Default,d as Statuses,z as __namedExportsOrder,W as default};
