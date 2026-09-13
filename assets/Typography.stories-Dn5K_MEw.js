import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as E}from"./reference-types-4ftiVeOu.js";import{r as x}from"./index-BxXVWNx3.js";import{c as N}from"./index-CkIaN0ex.js";import{c as A}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const O=N("",{variants:{variant:{h1:"scroll-m-20 text-4xl font-bold tracking-tight",h2:"scroll-m-20 text-3xl font-bold tracking-tight",h3:"scroll-m-20 text-2xl font-semibold tracking-tight",h4:"scroll-m-20 text-xl font-semibold tracking-tight",p:"leading-7",span:"",caption:"text-sm text-krds-gray-50",label:"text-sm font-medium leading-none",overline:"text-xs uppercase tracking-widest font-semibold text-krds-gray-50"},size:{xs:"text-krds-body-xs",sm:"text-krds-body-sm",md:"text-krds-body-md",lg:"text-krds-body-lg","title-xs":"text-krds-title-xs","title-sm":"text-krds-title-sm","title-md":"text-krds-title-md","title-lg":"text-krds-title-lg","title-xl":"text-krds-title-xl"},truncate:{true:"overflow-hidden whitespace-nowrap text-ellipsis",false:""}},defaultVariants:{truncate:!1}}),_={h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",span:"span",caption:"span",label:"span",overline:"span"},r=x.forwardRef(({as:a,variant:s,size:T,truncate:B,className:j,fontSize:l,fontWeight:p,lineHeight:d,color:c,text:W,children:R,style:D,...F},q)=>{const C=a??(s?_[s]??"p":"p"),m={...l?{fontSize:l}:{},...p?{fontWeight:p}:{},...d?{lineHeight:d}:{},...c?{color:c}:{},...D};return x.createElement(C,{ref:q,className:A(O({variant:s,size:T,truncate:B}),j),style:Object.keys(m).length?m:void 0,...F},R??W)});r.displayName="Typography";r.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{as:{required:!1,tsType:{name:"React.JSX.IntrinsicElements"},description:""},fontSize:{required:!1,tsType:{name:"string"},description:'Inline font size (e.g. "24px") — used when you need a precise value outside token scale'},fontWeight:{required:!1,tsType:{name:"union",raw:"'400' | '500' | '600' | '700' | number",elements:[{name:"literal",value:"'400'"},{name:"literal",value:"'500'"},{name:"literal",value:"'600'"},{name:"literal",value:"'700'"},{name:"number"}]},description:""},lineHeight:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},color:{required:!1,tsType:{name:"string"},description:""},text:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Shorthand text content (useful for Storybook controls)"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit","VariantProps"]};const I=E([{library:"U.S. Web Design System",component:"Typography",url:"https://designsystem.digital.gov/components/typography/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"Bootstrap",component:"Typography",url:"https://getbootstrap.com/docs/5.3/content/typography/",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"Text",url:"https://flowbite.com/docs/typography/text/",usedFor:["comparison"],relation:"compared"},{library:"Ant Design",component:"Typography",url:"https://ant.design/components/typography/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Text",url:"https://www.chakra-ui.com/docs/components/text",usedFor:["comparison"],relation:"compared"}]),J={title:"Atoms/Primitives/Typography",component:r,tags:["autodocs","custom-ui","ref:shadcn-ui","ref:ant-design","ref:flowbite","ref:mui","ref:bootstrap","ref:chakra-ui","ref:uswds"],argTypes:{as:{control:{type:"select"},options:["h1","h2","h3","h4","p","span"]},fontSize:{control:"text"},fontWeight:{control:{type:"select"},options:["400","500","600","700"]},lineHeight:{control:"text"},color:{control:"color"},text:{control:"text"}},args:{as:"h2",fontSize:"24px",fontWeight:"600",lineHeight:"1.2",color:"#1B1B19",text:"통합 플랫폼 어드민"},parameters:{references:I,layout:"centered"},render:a=>e.jsx(r,{...a})},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"16px"},children:[e.jsx("h1",{style:{fontSize:"32px",fontWeight:"700",lineHeight:"1.1",margin:"0"},children:"Heading 1 · 32px Bold"}),e.jsx("h2",{style:{fontSize:"24px",fontWeight:"700",lineHeight:"1.2",margin:"0"},children:"Heading 2 · 24px Bold"}),e.jsx("h3",{style:{fontSize:"20px",fontWeight:"600",lineHeight:"1.3",margin:"0"},children:"Heading 3 · 20px SemiBold"}),e.jsx("h4",{style:{fontSize:"16px",fontWeight:"600",lineHeight:"1.4",margin:"0"},children:"Heading 4 · 16px SemiBold"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",padding:"16px"},children:[e.jsx("p",{style:{fontSize:"16px",lineHeight:"1.6",margin:"0"},children:"Body Large · 16px / 1.6 — 본문 내용이 들어가는 영역입니다."}),e.jsx("p",{style:{fontSize:"14px",lineHeight:"1.6",margin:"0"},children:"Body Medium · 14px / 1.6 — 기본 본문 텍스트입니다."}),e.jsx("p",{style:{fontSize:"13px",lineHeight:"1.6",margin:"0"},children:"Body Small · 13px / 1.6 — 보조 텍스트 영역입니다."})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",padding:"16px"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#6E6D67",display:"block"},children:"Caption · 12px — 보조 설명 및 메타 정보"}),e.jsx("span",{style:{fontSize:"11px",color:"#A19F97",display:"block"},children:"Caption Small · 11px — 타임스탬프·단위 텍스트"})]})},o={render:()=>e.jsx("div",{style:{padding:"16px",maxWidth:"280px"},children:e.jsx("p",{style:{fontSize:"14px",margin:"0",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:"여름 한정 데이터 선물 이벤트 — 이 텍스트는 너무 길어서 말줄임표로 처리됩니다."})})};var g,h,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '16px'
  }}>
        <h1 style={{
      fontSize: '32px',
      fontWeight: '700',
      lineHeight: '1.1',
      margin: '0'
    }}>Heading 1 · 32px Bold</h1>
        <h2 style={{
      fontSize: '24px',
      fontWeight: '700',
      lineHeight: '1.2',
      margin: '0'
    }}>Heading 2 · 24px Bold</h2>
        <h3 style={{
      fontSize: '20px',
      fontWeight: '600',
      lineHeight: '1.3',
      margin: '0'
    }}>Heading 3 · 20px SemiBold</h3>
        <h4 style={{
      fontSize: '16px',
      fontWeight: '600',
      lineHeight: '1.4',
      margin: '0'
    }}>Heading 4 · 16px SemiBold</h4>
      </div>
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,u,S;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '16px'
  }}>
        <p style={{
      fontSize: '16px',
      lineHeight: '1.6',
      margin: '0'
    }}>Body Large · 16px / 1.6 — 본문 내용이 들어가는 영역입니다.</p>
        <p style={{
      fontSize: '14px',
      lineHeight: '1.6',
      margin: '0'
    }}>Body Medium · 14px / 1.6 — 기본 본문 텍스트입니다.</p>
        <p style={{
      fontSize: '13px',
      lineHeight: '1.6',
      margin: '0'
    }}>Body Small · 13px / 1.6 — 보조 텍스트 영역입니다.</p>
      </div>
}`,...(S=(u=t.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var b,v,k;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    padding: '16px'
  }}>
        <span style={{
      fontSize: '12px',
      color: '#6E6D67',
      display: 'block'
    }}>Caption · 12px — 보조 설명 및 메타 정보</span>
        <span style={{
      fontSize: '11px',
      color: '#A19F97',
      display: 'block'
    }}>Caption Small · 11px — 타임스탬프·단위 텍스트</span>
      </div>
}`,...(k=(v=i.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var H,w,z;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '16px',
    maxWidth: '280px'
  }}>
        <p style={{
      fontSize: '14px',
      margin: '0',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    }}>
          여름 한정 데이터 선물 이벤트 — 이 텍스트는 너무 길어서 말줄임표로 처리됩니다.
        </p>
      </div>
}`,...(z=(w=o.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const X=["HeadingScale","BodyScale","CaptionScale","Truncation"];export{t as BodyScale,i as CaptionScale,n as HeadingScale,o as Truncation,X as __namedExportsOrder,J as default};
