import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as O}from"./reference-types-4ftiVeOu.js";import{r as o}from"./index-BxXVWNx3.js";import{c as M}from"./utils-DCADjnpI.js";import{L as X}from"./loader-circle-Db56uVXG.js";import{C as B}from"./circle-x-DiuoV0Wl.js";import{C as H}from"./circle-alert-APhB8yGJ.js";import{C as J}from"./circle-check-BKxPZBMl.js";import{I as K}from"./info-DdzkXfgT.js";import{X as Q}from"./x-DsL683-u.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-Ct87QT5c.js";const V=o.createContext(null),U={info:K,success:J,warning:H,error:B,loading:X},W={info:"border-krds-info-border bg-krds-info-surface text-krds-info-text",success:"border-krds-success-border bg-krds-success-surface text-krds-success-text",warning:"border-krds-warning-border bg-krds-warning-surface text-krds-warning-text",error:"border-krds-danger-border bg-krds-danger-surface text-krds-danger-text",loading:"border-krds-gray-30 bg-white text-krds-gray-80"};function $(){const n=o.useContext(V);if(!n)throw new Error("useMessage must be used inside MessageProvider");return n}function k({children:n,maxCount:a=5,top:t=16}){const[v,l]=o.useState([]),g=o.useRef(0),c=o.useRef(new Map),m=o.useCallback(r=>{const s=c.current.get(r);s&&(window.clearTimeout(s),c.current.delete(r)),l(u=>u.filter(p=>p.id!==r))},[]),d=o.useCallback((r,s,u=3e3)=>{const p=`message-${g.current+1}`;if(g.current+=1,l(h=>[...h,{id:p,type:r,content:s,duration:u}].slice(-a)),u>0){const h=window.setTimeout(()=>m(p),u);c.current.set(p,h)}},[a,m]);o.useEffect(()=>()=>{c.current.forEach(r=>window.clearTimeout(r)),c.current.clear()},[]);const L=o.useMemo(()=>({open:d,success:(r,s)=>d("success",r,s),error:(r,s)=>d("error",r,s),warning:(r,s)=>d("warning",r,s),info:(r,s)=>d("info",r,s),loading:(r,s)=>d("loading",r,s)}),[d]);return e.jsxs(V.Provider,{value:L,children:[n,e.jsx("div",{className:"pointer-events-none fixed left-1/2 z-[9999] flex -translate-x-1/2 flex-col items-center gap-2",style:{top:typeof t=="number"?`${t}px`:t},children:v.map(r=>e.jsx(i,{type:r.type,content:r.content,onClose:()=>m(r.id),className:"pointer-events-auto min-w-60 max-w-[min(480px,calc(100vw-32px))] shadow-lg"},r.id))})]})}const i=o.forwardRef(({className:n,type:a="info",content:t,children:v,onClose:l,...g},c)=>{const m=U[a];return e.jsxs("div",{ref:c,role:a==="error"?"alert":"status",className:M("inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium","animate-in fade-in slide-in-from-top-2 duration-200",W[a],n),...g,children:[e.jsx(m,{"aria-hidden":"true",className:M("size-4 shrink-0",a==="loading"&&"animate-spin")}),e.jsx("span",{className:"min-w-0 flex-1",children:v??t}),l?e.jsx("button",{type:"button","aria-label":"메시지 닫기",onClick:l,className:"ml-1 inline-flex size-5 shrink-0 items-center justify-center rounded-sm opacity-70 hover:bg-black/5 hover:opacity-100",children:e.jsx(Q,{"aria-hidden":"true",className:"size-3.5"})}):null]})});i.displayName="Message";k.__docgenInfo={description:"",methods:[],displayName:"MessageProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},maxCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},top:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"16",computed:!1}}}};i.__docgenInfo={description:"",methods:[],displayName:"Message",props:{type:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error' | 'loading'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'loading'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},content:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["Omit"]};const F=["info","success","warning","error","loading"],Y=O([{library:"Ant Design",component:"Message",url:"https://ant.design/components/message/",usedFor:["comparison"],relation:"compared"}]),pe={title:"Molecules/Feedback/Message",component:i,tags:["autodocs","feedback","ref:ant-design"],parameters:{references:Y,layout:"centered",docs:{description:{component:"화면 상단 중앙에 짧게 표시되는 전역 메시지와 인라인 메시지 표현을 제공합니다."}}},argTypes:{type:{control:"select",options:F,table:{category:"Appearance"}},content:{control:"text",table:{category:"Content"}}},args:{type:"info",content:"메시지 내용입니다."}},f={name:"기본"},x={name:"상태",render:()=>e.jsxs("div",{className:"grid gap-2",children:[e.jsx(i,{type:"info",content:"일반 정보 메시지입니다."}),e.jsx(i,{type:"success",content:"작업이 성공적으로 완료되었습니다."}),e.jsx(i,{type:"warning",content:"주의가 필요한 상황입니다."}),e.jsx(i,{type:"error",content:"오류가 발생했습니다. 다시 시도해주세요."}),e.jsx(i,{type:"loading",content:"처리 중입니다."})]}),parameters:{controls:{disable:!0}}};function Z(){const n=$(),a={info:"정보",success:"성공",warning:"경고",error:"오류",loading:"로딩"};return e.jsx("div",{className:"flex flex-wrap gap-2",children:F.map(t=>e.jsxs("button",{type:"button",onClick:()=>n[t](`${a[t]} 메시지입니다.`,t==="loading"?0:3e3),className:"rounded-md border border-krds-gray-30 bg-white px-3 py-2 text-sm font-semibold text-krds-gray-80 hover:bg-krds-gray-5",children:[a[t]," 메시지"]},t))})}const b={name:"전역 메시지",render:()=>e.jsx(k,{children:e.jsx(Z,{})}),parameters:{controls:{disable:!0}}};function ee(){const n=$();return e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:()=>{n.loading("데이터를 불러오는 중입니다.",1200),window.setTimeout(()=>n.success("데이터 로딩이 완료되었습니다."),1300)},className:"rounded-md bg-krds-primary-50 px-4 py-2 text-sm font-semibold text-white hover:bg-krds-primary-60",children:"로딩 후 완료"}),e.jsx("button",{type:"button",onClick:()=>{n.warning("저장하지 않은 변경사항이 있습니다."),window.setTimeout(()=>n.error("저장에 실패했습니다."),1200)},className:"rounded-md border border-krds-gray-30 bg-white px-4 py-2 text-sm font-semibold text-krds-gray-80 hover:bg-krds-gray-5",children:"연속 메시지"})]})}const y={name:"순차 호출",render:()=>e.jsx(k,{children:e.jsx(ee,{})}),parameters:{controls:{disable:!0}}},w={name:"닫기 버튼",args:{type:"success",content:"수동으로 닫을 수 있는 메시지입니다.",onClose:()=>{}}};var j,C,N;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '기본'
}`,...(N=(C=f.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var R,T,q;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '상태',
  render: () => <div className="grid gap-2">
      <Message type="info" content="일반 정보 메시지입니다." />
      <Message type="success" content="작업이 성공적으로 완료되었습니다." />
      <Message type="warning" content="주의가 필요한 상황입니다." />
      <Message type="error" content="오류가 발생했습니다. 다시 시도해주세요." />
      <Message type="loading" content="처리 중입니다." />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(q=(T=x.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var S,P,D;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '전역 메시지',
  render: () => <MessageProvider>
      <GlobalMessageDemo />
    </MessageProvider>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(D=(P=b.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var I,E,_;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '순차 호출',
  render: () => <MessageProvider>
      <SequentialDemo />
    </MessageProvider>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(_=(E=y.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var z,G,A;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '닫기 버튼',
  args: {
    type: 'success',
    content: '수동으로 닫을 수 있는 메시지입니다.',
    onClose: () => undefined
  }
}`,...(A=(G=w.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};const ge=["Default","Types","GlobalMessage","Sequential","Closable"];export{w as Closable,f as Default,b as GlobalMessage,y as Sequential,x as Types,ge as __namedExportsOrder,pe as default};
