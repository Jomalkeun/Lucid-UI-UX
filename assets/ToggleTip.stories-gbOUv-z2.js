import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./index-BxXVWNx3.js";import{d as M}from"./reference-types-4ftiVeOu.js";import{c as p}from"./utils-DCADjnpI.js";import{c as V}from"./createLucideIcon-Ct87QT5c.js";import{X as D}from"./x-DsL683-u.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],F=V("circle-help",P),H={top:"bottom-full left-1/2 mb-2 -translate-x-1/2",right:"left-full top-1/2 ml-2 -translate-y-1/2",bottom:"left-1/2 top-full mt-2 -translate-x-1/2",left:"right-full top-1/2 mr-2 -translate-y-1/2"};function t({className:i,title:r,content:d,open:m,defaultOpen:q=!1,disabled:S,placement:L="top",triggerLabel:_="도움말 열기",onOpenChange:c,children:z,...B}){const u=m!==void 0,[I,E]=C.useState(q),a=u?m:I,g=f=>{u||E(f),c==null||c(f)};return e.jsxs("div",{className:p("relative inline-flex items-center gap-2",i),...B,children:[z,e.jsx("button",{type:"button",disabled:S,"aria-label":_,"aria-expanded":a,onClick:()=>g(!a),className:p("inline-flex size-8 items-center justify-center rounded-full text-krds-gray-60 transition","hover:bg-krds-gray-5 hover:text-krds-gray-90","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-krds-primary-50 focus-visible:ring-offset-2","disabled:cursor-not-allowed disabled:opacity-45",a&&"bg-krds-primary-5 text-krds-primary-70"),children:e.jsx(F,{"aria-hidden":"true",className:"size-4"})}),a?e.jsx("div",{role:"dialog",className:p("absolute z-30 w-72 rounded-md border border-krds-gray-30 bg-white p-4 text-sm text-krds-gray-80 shadow-lg",H[L]),children:e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"grid gap-1",children:[r?e.jsx("p",{className:"font-semibold text-krds-gray-90",children:r}):null,d?e.jsx("div",{className:"leading-6 text-krds-gray-70",children:d}):null]}),e.jsx("button",{type:"button","aria-label":"도움말 닫기",onClick:()=>g(!1),className:"inline-flex size-6 shrink-0 items-center justify-center rounded-sm text-krds-gray-50 hover:bg-krds-gray-5 hover:text-krds-gray-90",children:e.jsx(D,{"aria-hidden":"true",className:"size-4"})})]})}):null]})}t.__docgenInfo={description:"",methods:[],displayName:"ToggleTip",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},content:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},triggerLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'도움말 열기'",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const U=M([{library:"Chakra UI",component:"Toggle Tip",url:"https://www.chakra-ui.com/docs/components/toggle-tip",usedFor:["comparison"],relation:"compared"}]),Y={title:"Molecules/Overlay/ToggleTip",component:t,tags:["autodocs","overlay","ref:chakra-ui"],parameters:{references:U,layout:"centered",docs:{description:{component:"아이콘 버튼으로 열고 닫는 보충 설명 레이어입니다. tooltip보다 긴 안내나 닫기 액션이 필요한 경우에 사용합니다."}}},argTypes:{title:{control:"text",table:{category:"Content"}},content:{control:"text",table:{category:"Content"}},placement:{control:"inline-radio",options:["top","right","bottom","left"],table:{category:"Layout"}},disabled:{control:"boolean",table:{category:"State"}}},args:{title:"입력 도움말",content:"사업자등록번호는 하이픈 없이 숫자 10자리로 입력해 주세요.",placement:"top",disabled:!1,children:e.jsx("span",{className:"text-sm font-medium text-krds-gray-90",children:"사업자등록번호"})}},o={name:"기본"},s={name:"열림",args:{defaultOpen:!0}},n={name:"제어 상태",render:()=>{const[i,r]=C.useState(!0);return e.jsx(t,{open:i,onOpenChange:r,title:"제출 전 확인",content:"첨부파일과 필수 동의 항목을 모두 확인한 뒤 제출할 수 있습니다.",placement:"bottom",children:e.jsx("button",{className:"rounded-md border border-krds-gray-30 px-3 py-2 text-sm",children:"신청서 제출"})})},parameters:{controls:{disable:!0}}},l={name:"위치",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-12 p-16",children:[e.jsx(t,{title:"Top",content:"위쪽에 표시됩니다.",placement:"top",defaultOpen:!0,children:e.jsx("span",{children:"Top"})}),e.jsx(t,{title:"Right",content:"오른쪽에 표시됩니다.",placement:"right",defaultOpen:!0,children:e.jsx("span",{children:"Right"})}),e.jsx(t,{title:"Left",content:"왼쪽에 표시됩니다.",placement:"left",defaultOpen:!0,children:e.jsx("span",{children:"Left"})}),e.jsx(t,{title:"Bottom",content:"아래쪽에 표시됩니다.",placement:"bottom",defaultOpen:!0,children:e.jsx("span",{children:"Bottom"})})]}),parameters:{controls:{disable:!0}}};var b,y,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '기본'
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var h,T,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '열림',
  args: {
    defaultOpen: true
  }
}`,...(v=(T=s.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var j,k,N;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '제어 상태',
  render: () => {
    const [open, setOpen] = useState(true);
    return <ToggleTip open={open} onOpenChange={setOpen} title="제출 전 확인" content="첨부파일과 필수 동의 항목을 모두 확인한 뒤 제출할 수 있습니다." placement="bottom">
        <button className="rounded-md border border-krds-gray-30 px-3 py-2 text-sm">신청서 제출</button>
      </ToggleTip>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(N=(k=n.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var O,R,w;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '위치',
  render: () => <div className="grid grid-cols-2 gap-12 p-16">
      <ToggleTip title="Top" content="위쪽에 표시됩니다." placement="top" defaultOpen>
        <span>Top</span>
      </ToggleTip>
      <ToggleTip title="Right" content="오른쪽에 표시됩니다." placement="right" defaultOpen>
        <span>Right</span>
      </ToggleTip>
      <ToggleTip title="Left" content="왼쪽에 표시됩니다." placement="left" defaultOpen>
        <span>Left</span>
      </ToggleTip>
      <ToggleTip title="Bottom" content="아래쪽에 표시됩니다." placement="bottom" defaultOpen>
        <span>Bottom</span>
      </ToggleTip>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(w=(R=l.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};const Z=["Default","Open","Controlled","Placement"];export{n as Controlled,o as Default,s as Open,l as Placement,Z as __namedExportsOrder,Y as default};
