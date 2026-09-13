import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as _}from"./reference-types-4ftiVeOu.js";import{r as t}from"./index-BxXVWNx3.js";import{L as O}from"./live-region-BFV6xFQp.js";import{c as B}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const p=t.forwardRef(({destination:s,label:P="페이지 나가기",shortcutKey:n="Shift",pressCount:q=3,onExit:o,className:K,...M},R)=>{const x=t.useId(),i=t.useRef(0),a=t.useRef(null),[I,f]=t.useState(""),c=Math.max(1,Math.floor(q)),g=t.useCallback(r=>{o==null||o(r),window.location.replace(s)},[s,o]);return t.useEffect(()=>{const r=()=>{i.current=0,f("")},b=h=>{if(h.repeat||h.key.toLowerCase()!==n.toLowerCase())return;if(i.current+=1,a.current&&clearTimeout(a.current),i.current>=c){r(),g("shortcut");return}const D=c-i.current;f(`${n} 키를 ${D}번 더 누르면 페이지에서 나갑니다.`),a.current=setTimeout(r,1500)};return document.addEventListener("keyup",b),()=>{document.removeEventListener("keyup",b),a.current&&clearTimeout(a.current)}},[g,c,n]),e.jsxs("div",{"data-slot":"exit-this-page",className:"inline-flex flex-col items-start gap-2",children:[e.jsxs("a",{ref:R,href:s,"aria-describedby":x,className:B("inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-krds-danger-base px-5 py-3","text-krds-body-md font-bold text-white shadow-sm transition-colors hover:bg-krds-danger-text","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-krds-danger-border focus-visible:ring-offset-2",K),onClick:r=>{r.preventDefault(),g("button")},...M,children:[e.jsx("span",{children:P}),e.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",className:"size-5 fill-none stroke-current",children:e.jsx("path",{d:"M14 5h5v14h-5M10 8l4 4-4 4M14 12H4",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]}),e.jsxs("p",{id:x,className:"text-krds-body-xs text-krds-gray-70",children:["키보드에서는 ",n," 키를 빠르게 ",c,"번 눌러도 나갈 수 있습니다."]}),e.jsx(O,{children:I})]})});p.displayName="ExitThisPage";p.__docgenInfo={description:"",methods:[],displayName:"ExitThisPage",props:{destination:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'페이지 나가기'",computed:!1}},shortcutKey:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Shift'",computed:!1}},pressCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},onExit:{required:!1,tsType:{name:"signature",type:"function",raw:"(trigger: ExitThisPageTrigger) => void",signature:{arguments:[{type:{name:"union",raw:"'button' | 'shortcut'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'shortcut'"}]},name:"trigger"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const U=_([{library:"GOV.UK Design System",component:"Exit this page",url:"https://design-system.service.gov.uk/components/exit-this-page/",usedFor:["design","behavior","api","accessibility","content"],relation:"adapted",note:"눈에 잘 띄는 이탈 동작, 반복 키보드 단축키, 안전한 대체 링크를 참고했습니다."}]),W={title:"Molecules/Navigation/ExitThisPage",component:p,tags:["autodocs","navigation","accessibility","safety","ref:govuk"],parameters:{references:U,docs:{description:{component:"민감한 서비스 화면에서 사용자가 버튼이나 반복 키보드 입력으로 즉시 안전한 목적지로 이동할 수 있게 하는 opt-in 패턴입니다. 브라우저 기록을 완전히 제거하지는 못하므로 서비스별 안전 지침과 함께 사용해야 합니다."}}},argTypes:{destination:{control:"text",table:{category:"Behavior"}},label:{control:"text",table:{category:"Content"}},shortcutKey:{control:"text",table:{category:"Keyboard"}},pressCount:{control:{type:"number",min:1,step:1},table:{category:"Keyboard"}},onExit:{action:"exit",table:{category:"Events"}}},args:{destination:"#safe-destination-preview",label:"페이지 나가기",shortcutKey:"Shift",pressCount:3}},d={},l={args:{shortcutKey:"Escape",pressCount:2,label:"안전한 페이지로 이동"}},m={render:s=>e.jsxs("section",{className:"relative min-h-[360px] max-w-3xl rounded-xl border border-krds-gray-20 bg-krds-gray-5 p-6",children:[e.jsx("div",{className:"absolute right-4 top-4",children:e.jsx(p,{...s})}),e.jsxs("div",{className:"max-w-md pt-28",children:[e.jsx("p",{className:"text-krds-label-sm font-semibold text-krds-primary-60",children:"민감 정보 지원 서비스"}),e.jsx("h2",{className:"mt-2 text-krds-heading-lg font-bold",children:"도움이 필요한 내용을 확인해 주세요"}),e.jsx("p",{className:"mt-3 text-krds-body-md text-krds-gray-70",children:"이 패턴은 주변 사람에게 화면이 노출될 위험이 있는 서비스에서만 선택적으로 사용합니다."})]})]}),parameters:{controls:{disable:!0}}},u={args:{label:"나가기"},parameters:{viewport:{defaultViewport:"mobile1"}}};var y,v,k;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(k=(v=d.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var w,N,j;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    shortcutKey: 'Escape',
    pressCount: 2,
    label: '안전한 페이지로 이동'
  }
}`,...(j=(N=l.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var T,C,E;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <section className="relative min-h-[360px] max-w-3xl rounded-xl border border-krds-gray-20 bg-krds-gray-5 p-6">
      <div className="absolute right-4 top-4">
        <ExitThisPage {...args} />
      </div>
      <div className="max-w-md pt-28">
        <p className="text-krds-label-sm font-semibold text-krds-primary-60">민감 정보 지원 서비스</p>
        <h2 className="mt-2 text-krds-heading-lg font-bold">도움이 필요한 내용을 확인해 주세요</h2>
        <p className="mt-3 text-krds-body-md text-krds-gray-70">
          이 패턴은 주변 사람에게 화면이 노출될 위험이 있는 서비스에서만 선택적으로 사용합니다.
        </p>
      </div>
    </section>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(E=(C=m.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var S,L,V;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: '나가기'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(V=(L=u.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};const J=["Default","CustomShortcut","InSensitiveContent","NarrowViewport"];export{l as CustomShortcut,d as Default,m as InSensitiveContent,u as NarrowViewport,J as __namedExportsOrder,W as default};
