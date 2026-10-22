import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as Z}from"./index-BxXVWNx3.js";import{within as p,userEvent as h,expect as c,fn as m}from"./index-DH-M5T-F.js";import{d as $,c as f}from"./reference-types-CC3VHbJD.js";import{R as J,T as Q,P as X,C as Y,I as ee}from"./index-WRX73Snt.js";import{B as x}from"./button-BRuq28Bc.js";import{c as S}from"./utils-DCADjnpI.js";import{B as te}from"./ButtonGroup-5ZHsEam2.js";import{C as ae}from"./chevron-down-D49U3Rzo.js";import{c as re}from"./createLucideIcon-Ct87QT5c.js";import{S as oe}from"./save-ZFx1litK.js";import{T as se}from"./trash-2-xZQMnfdL.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BIfB_hJr.js";import"./index-Cuo70N6w.js";import"./index-CSKKChMh.js";import"./index-W0uFi8-r.js";import"./index-BuIYde5q.js";import"./index-DCvtqWl1.js";import"./index-CBIApD1u.js";import"./index-D1FEdIFz.js";import"./index-D5tP6kvT.js";import"./Combination-avlVGtdT.js";import"./index-CIv5at7y.js";import"./index-BjCkHmxr.js";import"./index-D_4yO-tZ.js";import"./index-BrCCJ_wP.js";import"./index-BKM4mA3Z.js";import"./index-CkIaN0ex.js";import"./loader-circle-Db56uVXG.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]],ie=re("file-down",ne);function b({primaryLabel:r,onPrimaryAction:o,items:t,groupLabel:u,menuLabel:F="추가 작업 열기",variant:g="primary",size:y="medium",disabled:v=!1,menuDisabled:M=!1,loading:w=!1,open:V,defaultOpen:G,onOpenChange:H,onCloseAutoFocus:_,align:O="end",className:W,contentClassName:K}){const U=u??(typeof r=="string"?`${r} 작업`:"분할 작업");return e.jsxs(J,{open:V,defaultOpen:G,onOpenChange:H,children:[e.jsxs(te,{"aria-label":U,className:W,children:[e.jsx(x,{variant:g,size:y,disabled:v,loading:w,onClick:o,className:"rounded-none border-0 border-r border-krds-gray-20 focus-visible:z-10",children:r}),e.jsx(Q,{asChild:!0,children:e.jsx(x,{variant:g,size:y,disabled:v||w||M||t.length===0,"aria-label":F,className:"rounded-none border-0 px-3 focus-visible:z-10",children:e.jsx(ae,{"aria-hidden":"true",className:"size-4"})})})]}),e.jsx(X,{children:e.jsx(Y,{align:O,sideOffset:5,onCloseAutoFocus:_,className:S("z-50 min-w-44 rounded-lg border border-border bg-popover p-1 text-popover-foreground shadow-md",K),children:t.map(a=>e.jsxs(ee,{disabled:a.disabled,onSelect:a.onSelect,className:S("flex cursor-pointer select-none items-center gap-2 rounded-md px-3 py-2 text-krds-body-sm outline-none","data-[highlighted]:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-40",a.destructive&&"text-destructive data-[highlighted]:bg-destructive/10"),children:[a.icon?e.jsx("span",{"aria-hidden":"true",children:a.icon}):null,a.label]},a.id))})})]})}b.__docgenInfo={description:"",methods:[],displayName:"SplitButton",props:{primaryLabel:{required:!0,tsType:{name:"ReactNode"},description:""},onPrimaryAction:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"SplitButtonItem"}],raw:"SplitButtonItem[]"},description:""},groupLabel:{required:!1,tsType:{name:"string"},description:""},menuLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'추가 작업 열기'",computed:!1}},variant:{required:!1,tsType:{name:"ButtonProps['variant']",raw:"ButtonProps['variant']"},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"ButtonProps['size']",raw:"ButtonProps['size']"},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},menuDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},onCloseAutoFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"event"}],return:{name:"void"}}},description:""},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:"",defaultValue:{value:"'end'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},contentClassName:{required:!1,tsType:{name:"string"},description:""}}};const le=$([f({library:"SAP Fiori",component:"Split Button",url:"https://www.sap.com/design-system/fiori-design-web/ui-elements/split-button-web-component/",status:"Extended",type:"Component",application:["Composition Applied","Interaction Applied"],target:["SplitButton","ButtonGroup","DropdownMenu"],level:"Molecule",note:"기본 작업과 관련 보조 작업을 두 개의 명확한 클릭 영역으로 분리했습니다."}),f({library:"Material UI",component:"Button Group — Split button",url:"https://mui.com/material-ui/react-button-group/#split-button",status:"Extended",type:"Component",application:["Composition Applied","Variant Applied"],target:["SplitButton","ButtonGroup"],level:"Molecule",note:"기존 ButtonGroup 조합을 독립적인 SplitButton 계약으로 확장했습니다."}),f({library:"WAI-ARIA APG",component:"Menu Button Pattern",url:"https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/",status:"Applied",type:"Accessibility",application:["Accessibility Applied","Interaction Applied"],target:["SplitButton"],level:"Molecule",note:"메뉴 버튼의 키보드 진입, expanded 상태, 메뉴 역할과 포커스 복귀를 Radix primitive로 적용했습니다."})]),Me={title:"Molecules/Navigation/SplitButton",component:b,tags:["autodocs","ref:sap-fiori","ref:mui","ref:w3c-aria-apg"],args:{primaryLabel:"저장",onPrimaryAction:m(),items:[{id:"draft",label:"임시 저장",onSelect:m()},{id:"copy",label:"복사본 저장",onSelect:m()},{id:"disabled",label:"템플릿으로 저장",disabled:!0}]},parameters:{layout:"centered",references:le}},s={},n={args:{primaryLabel:"내보내기",menuLabel:"내보내기 옵션 열기",items:[{id:"pdf",label:"PDF로 내보내기",icon:e.jsx(ie,{className:"size-4"})},{id:"save",label:"내보내기 설정 저장",icon:e.jsx(oe,{className:"size-4"})},{id:"remove",label:"내보내기 설정 삭제",icon:e.jsx(se,{className:"size-4"}),destructive:!0}]}},i={args:{loading:!0}},l={args:{disabled:!0}},d={render:function(){const[o,t]=Z.useState("선택 없음");return e.jsxs("div",{className:"grid gap-4",children:[e.jsx(b,{primaryLabel:"게시",onPrimaryAction:()=>t("지금 게시"),menuLabel:"게시 옵션 열기",items:[{id:"schedule",label:"예약 게시",onSelect:()=>t("예약 게시")},{id:"preview",label:"미리 보기",onSelect:()=>t("미리 보기")}]}),e.jsx("output",{role:"status",children:o})]})},play:async({canvasElement:r})=>{const o=p(r),t=o.getByRole("button",{name:"게시 옵션 열기"});t.focus(),await h.keyboard("{ArrowDown}");const u=await p(document.body).findByRole("menu");await c(p(u).getByRole("menuitem",{name:"예약 게시"})).toHaveFocus(),await h.keyboard("{Enter}"),await c(o.getByRole("status")).toHaveTextContent("예약 게시"),await c(t).toHaveFocus()}};var B,A,T;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:"{}",...(T=(A=s.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var R,q,N;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    primaryLabel: '내보내기',
    menuLabel: '내보내기 옵션 열기',
    items: [{
      id: 'pdf',
      label: 'PDF로 내보내기',
      icon: <FileDown className="size-4" />
    }, {
      id: 'save',
      label: '내보내기 설정 저장',
      icon: <Save className="size-4" />
    }, {
      id: 'remove',
      label: '내보내기 설정 삭제',
      icon: <Trash2 className="size-4" />,
      destructive: true
    }]
  }
}`,...(N=(q=n.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var j,D,C;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(C=(D=i.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var E,I,P;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(P=(I=l.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var L,z,k;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: function Demo() {
    const [result, setResult] = useState('선택 없음');
    return <div className="grid gap-4">
        <SplitButton primaryLabel="게시" onPrimaryAction={() => setResult('지금 게시')} menuLabel="게시 옵션 열기" items={[{
        id: 'schedule',
        label: '예약 게시',
        onSelect: () => setResult('예약 게시')
      }, {
        id: 'preview',
        label: '미리 보기',
        onSelect: () => setResult('미리 보기')
      }]} />
        <output role="status">{result}</output>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: '게시 옵션 열기'
    });
    trigger.focus();
    await userEvent.keyboard('{ArrowDown}');
    const menu = await within(document.body).findByRole('menu');
    await expect(within(menu).getByRole('menuitem', {
      name: '예약 게시'
    })).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(canvas.getByRole('status')).toHaveTextContent('예약 게시');
    await expect(trigger).toHaveFocus();
  }
}`,...(k=(z=d.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};const Ve=["Default","WithIconsAndDestructiveAction","Loading","Disabled","KeyboardAndSelection"];export{s as Default,l as Disabled,d as KeyboardAndSelection,i as Loading,n as WithIconsAndDestructiveAction,Ve as __namedExportsOrder,Me as default};
