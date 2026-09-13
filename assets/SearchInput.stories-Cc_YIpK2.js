import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as z}from"./reference-types-4ftiVeOu.js";import{r as u}from"./index-BxXVWNx3.js";import{c as g}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const c=u.forwardRef(({modelValue:r,disabled:s=!1,placeholder:m="검색",onSearch:t,className:V,onChange:p,...C},M)=>{const N=u.useId(),[h,x]=u.useState(r??""),o=r!==void 0,f=o?r:h,R=a=>{o||x(a.target.value),p==null||p(a)},T=a=>{a.key==="Enter"&&(t==null||t(f??""))},q=()=>{o||x(""),t==null||t("")};return e.jsxs("div",{role:"search",className:g("relative flex items-center w-full rounded-md border bg-krds-gray-0 transition-colors h-10",s?"border-krds-gray-20 bg-krds-gray-10 opacity-50 cursor-not-allowed":"border-krds-gray-30 focus-within:ring-2 focus-within:ring-krds-primary-50",V),children:[e.jsx("span",{className:"pl-3 flex items-center text-krds-gray-50 shrink-0","aria-hidden":"true",children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"11",cy:"11",r:"7"}),e.jsx("path",{d:"M21 21l-4.3-4.3"})]})}),e.jsx("input",{ref:M,id:N,type:"search",value:o?r??"":h,placeholder:m,disabled:s,"aria-label":m,onChange:R,onKeyDown:T,className:g("flex-1 min-w-0 bg-transparent outline-none px-2 text-krds-body-md text-krds-gray-90 placeholder:text-krds-gray-40",s&&"cursor-not-allowed"),...C}),f&&!s&&e.jsx("button",{type:"button","aria-label":"검색어 지우기",onClick:q,className:"pr-3 flex items-center text-krds-gray-40 hover:text-krds-gray-70 transition-colors",children:e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M12 4L4 12M4 4l8 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]})});c.displayName="SearchInput";c.__docgenInfo={description:"",methods:[],displayName:"SearchInput",props:{modelValue:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'검색'",computed:!1}},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const F=z([{library:"U.S. Web Design System",component:"Search",url:"https://designsystem.digital.gov/components/search/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"Flowbite",component:"Search Input",url:"https://flowbite.com/docs/forms/search-input/",usedFor:["comparison"],relation:"compared"}]),U={title:"Molecules/Forms/SearchInput",component:c,tags:["autodocs","krds-extended","ref:flowbite","ref:uswds"],argTypes:{placeholder:{control:"text"},modelValue:{control:"text"},disabled:{control:"boolean"}},args:{placeholder:"콘텐츠 검색",disabled:!1},parameters:{layout:"centered",references:F},render:r=>e.jsx(c,{...r,children:r.children??r.label??r.text??void 0})},n={args:{placeholder:"콘텐츠 검색"}},i={args:{placeholder:"콘텐츠 검색",modelValue:"여름 데이터"}},l={args:{placeholder:"검색 불가",disabled:!0}},d={render:()=>e.jsxs("div",{role:"search",style:{position:"relative",maxWidth:"320px"},children:[e.jsx("span",{style:{position:"absolute",left:"11px",top:"50%",transform:"translateY(-50%)",color:"#6E6D67",pointerEvents:"none"},"aria-hidden":"true",children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.75","stroke-linecap":"round","stroke-linejoin":"round",children:[e.jsx("circle",{cx:"11",cy:"11",r:"7"}),e.jsx("path",{d:"M21 21l-4.3-4.3"})]})}),e.jsx("input",{type:"search",placeholder:"콘텐츠 검색","aria-label":"콘텐츠 검색",style:{width:"100%",padding:"8px 11px 8px 34px",border:"1px solid #D9D7CD",borderRadius:"7px",fontSize:"13px",background:"#fff",color:"#1B1B19",boxSizing:"border-box"}})]})};var y,b,k;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    placeholder: '콘텐츠 검색'
  } as any
}`,...(k=(b=n.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var v,w,j;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    placeholder: '콘텐츠 검색',
    modelValue: '여름 데이터'
  } as any
}`,...(j=(w=i.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var D,I,S;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    placeholder: '검색 불가',
    disabled: true
  } as any
}`,...(S=(I=l.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var W,B,E;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div role="search" style={{
    position: 'relative',
    maxWidth: '320px'
  }}>
        <span style={{
      position: 'absolute',
      left: '11px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#6E6D67',
      pointerEvents: 'none'
    }} aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
          </svg>
        </span>
        <input type="search" placeholder="콘텐츠 검색" aria-label="콘텐츠 검색" style={{
      width: '100%',
      padding: '8px 11px 8px 34px',
      border: '1px solid #D9D7CD',
      borderRadius: '7px',
      fontSize: '13px',
      background: '#fff',
      color: '#1B1B19',
      boxSizing: 'border-box'
    }} />
      </div>
}`,...(E=(B=d.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};const A=["Default","WithValue","Disabled","WithInlineIcon"];export{n as Default,l as Disabled,d as WithInlineIcon,i as WithValue,A as __namedExportsOrder,U as default};
