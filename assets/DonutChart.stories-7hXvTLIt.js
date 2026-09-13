import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{d as m}from"./reference-types-4ftiVeOu.js";function o({children:e,...u}){return d.jsx("div",{...u,children:e})}o.__docgenInfo={description:"",methods:[],displayName:"DonutChart",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const p=m([{library:"U.S. Web Design System",component:"Data visualizations",url:"https://designsystem.digital.gov/components/data-visualizations/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"Cloudscape Design System",component:"Pie and donut charts",url:"https://cloudscape.design/components/pie-chart/",usedFor:["design","accessibility","comparison"],relation:"compared"},{library:"Flowbite",component:"Charts",url:"https://flowbite.com/docs/plugins/charts/",usedFor:["comparison"],relation:"compared"}]),f={title:"Organisms/Charts/DonutChart",component:o,tags:["autodocs","custom-ui","ref:shadcn-ui","ref:flowbite","ref:mui","ref:cloudscape","ref:uswds"],argTypes:{title:{control:"text"},centerLabel:{control:"text"},centerValue:{control:"text"},segments:{control:"object"}},args:{title:"채널별 노출 구성비",centerLabel:"총 노출",centerValue:"128K",segments:[{label:"옵션1",value:45,color:"#4F46E5"},{label:"옵션2",value:30,color:"#0F6E56"},{label:"기타",value:25,color:"#B45309"}]},parameters:{layout:"centered",references:p},render:e=>d.jsx(o,{...e,children:e.children??e.label??e.text??void 0})},t={},r={args:{title:"노출 비율",centerValue:"64K",centerLabel:"총 노출",segments:[{label:"옵션1",value:60,color:"#4F46E5"},{label:"옵션2",value:40,color:"#0F6E56"}]}};var a,s,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var c,l,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: '노출 비율',
    centerValue: '64K',
    centerLabel: '총 노출',
    segments: [{
      label: '옵션1',
      value: 60,
      color: '#4F46E5'
    }, {
      label: '옵션2',
      value: 40,
      color: '#0F6E56'
    }]
  } as any
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const h=["Default","TwoSlices"];export{t as Default,r as TwoSlices,h as __namedExportsOrder,f as default};
