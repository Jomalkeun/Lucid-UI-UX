import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{d as m}from"./reference-types-4ftiVeOu.js";function t({children:e,...u}){return d.jsx("div",{...u,children:e})}t.__docgenInfo={description:"",methods:[],displayName:"BarChart",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const p=m([{library:"U.S. Web Design System",component:"Data visualizations",url:"https://designsystem.digital.gov/components/data-visualizations/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"Flowbite",component:"Charts",url:"https://flowbite.com/docs/plugins/charts/",usedFor:["comparison"],relation:"compared"}]),f={title:"Organisms/Charts/BarChart",component:t,tags:["autodocs","custom-ui","ref:shadcn-ui","ref:flowbite","ref:mui","ref:uswds"],argTypes:{title:{control:"text"},color:{control:"color"},data:{control:"object"}},args:{title:"요일별 노출수",color:"#4F46E5",data:[{label:"월",value:50},{label:"화",value:80},{label:"수",value:40},{label:"목",value:90},{label:"금",value:64},{label:"토",value:84}]},parameters:{layout:"centered",references:p},render:e=>d.jsx(t,{...e,children:e.children??e.label??e.text??void 0})},a={},r={args:{title:"채널별 노출",data:[{label:"옵션1",value:128},{label:"옵션2",value:84},{label:"옵션3",value:56}]}};var o,s,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(l=(s=a.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var n,c,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: '채널별 노출',
    data: [{
      label: '옵션1',
      value: 128
    }, {
      label: '옵션2',
      value: 84
    }, {
      label: '옵션3',
      value: 56
    }]
  } as any
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const h=["Default","FewBars"];export{a as Default,r as FewBars,h as __namedExportsOrder,f as default};
