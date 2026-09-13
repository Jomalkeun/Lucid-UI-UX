import{j as u}from"./jsx-runtime-D_zvdyIk.js";function n({children:e,...d}){return u.jsx("div",{...d,children:e})}n.__docgenInfo={description:"",methods:[],displayName:"RankingBar",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const p={title:"Organisms/Charts/RankingBar",component:n,tags:["autodocs","custom-ui"],argTypes:{title:{control:"text"},unit:{control:"text"},items:{control:"object"}},args:{title:"콘텐츠 성과 순위",unit:"%",items:[{label:"데이터 선물",value:3.4},{label:"리필 쿠폰",value:2.6},{label:"구독 상품",value:1.8},{label:"멤버십",value:1.2}]},parameters:{layout:"centered"},render:e=>u.jsx(n,{...e,children:e.children??e.label??e.text??void 0})},a={},t={args:{title:"채널별 노출수",unit:"K",items:[{label:"옵션1",value:128},{label:"옵션2",value:84},{label:"옵션3",value:56}]}};var r,l,s;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(s=(l=a.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var o,i,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: '채널별 노출수',
    unit: 'K',
    items: [{
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
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const b=["Default","CountUnit"];export{t as CountUnit,a as Default,b as __namedExportsOrder,p as default};
