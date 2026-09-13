import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as E}from"./reference-types-4ftiVeOu.js";import{B as U}from"./button-B_kt0lNs.js";import{C as u}from"./checkbox-BOrDudnk.js";import{I as a}from"./Input-B5Q9mExy.js";import{r as h}from"./index-BxXVWNx3.js";import{c as g}from"./utils-DCADjnpI.js";import"./index-DtBajwEi.js";import"./index-CkIaN0ex.js";import"./loader-circle-Db56uVXG.js";import"./createLucideIcon-Ct87QT5c.js";import"./index-Cuo70N6w.js";import"./index-BIfB_hJr.js";import"./index-D63pzw-_.js";import"./index-BjCkHmxr.js";import"./index-D_4yO-tZ.js";import"./index-DnJVWBh-.js";import"./index-BuIYde5q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DCvtqWl1.js";import"./check-CvnDgXMx.js";import"./input-CyTVhyid.js";import"./x-DsL683-u.js";import"./eye-CPTXERrz.js";const r=h.forwardRef(({className:c,legend:x,helperText:M,errorText:n,disabled:p=!1,invalid:l=!1,required:D=!1,children:B,...Y},_)=>{const b=`${h.useId()}-message`,m=l&&n?n:M;return e.jsxs("fieldset",{ref:_,disabled:p,"aria-invalid":l||void 0,"aria-describedby":m?b:void 0,className:g("m-0 rounded-lg border px-5 py-4",l?"border-krds-danger-border":"border-krds-gray-30",p&&"opacity-55",c),...Y,children:[x?e.jsxs("legend",{className:g("px-2 text-krds-body-sm font-semibold",l?"text-krds-danger-text":p?"text-krds-gray-40":"text-krds-gray-90"),children:[x,D?e.jsx("span",{"aria-hidden":"true",className:"ml-0.5 text-krds-danger-base",children:"*"}):null]}):null,B,m?e.jsx("p",{id:b,className:g("mt-3 text-krds-body-xs leading-snug",l&&n?"text-krds-danger-text":"text-krds-gray-50"),children:m}):null]})});r.displayName="Fieldset";r.__docgenInfo={description:"",methods:[],displayName:"Fieldset",props:{legend:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},helperText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},errorText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const K=E([{library:"GOV.UK Design System",component:"Fieldset",url:"https://design-system.service.gov.uk/components/fieldset/",usedFor:["behavior","accessibility","comparison"],relation:"compared"},{library:"Chakra UI",component:"Fieldset",url:"https://www.chakra-ui.com/docs/components/fieldset",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Fieldset",url:"https://base-ui.com/react/components/fieldset",usedFor:["comparison"],relation:"compared"}]),me={title:"Molecules/Forms/Fieldset",component:r,tags:["autodocs","ref:chakra-ui","ref:base-ui","ref:govuk"],parameters:{references:K,docs:{description:{component:`
## Fieldset

관련 입력 필드를 의미적으로 묶는 \`fieldset\` / \`legend\` 기반 컴포넌트입니다.
KRDS 테두리, 필수 표시, 도움말, 오류 메시지 상태를 제공합니다.
        `}}},argTypes:{disabled:{control:"boolean",table:{category:"State"}},invalid:{control:"boolean",table:{category:"State"}},required:{control:"boolean",table:{category:"State"}},legend:{control:"text",table:{category:"Content"}},helperText:{control:"text",table:{category:"Content"}},errorText:{control:"text",table:{category:"Content"}}},args:{legend:"기본 정보",helperText:"아래 필드를 모두 작성하세요.",disabled:!1,invalid:!1,required:!1}},s={name:"기본",render:c=>e.jsx("div",{className:"w-96",children:e.jsx(r,{...c,children:e.jsxs("div",{className:"grid gap-3",children:[e.jsx(a,{label:"이름",placeholder:"홍길동"}),e.jsx(a,{label:"이메일",placeholder:"hong@example.com"})]})})})},d={name:"필수 그룹",render:()=>e.jsx("div",{className:"w-96",children:e.jsx(r,{legend:"배송지 정보",required:!0,helperText:"구매를 위해 배송지 정보를 입력해야 합니다.",children:e.jsxs("div",{className:"grid gap-3",children:[e.jsx(a,{label:"주소",placeholder:"서울시 강남구 테헤란로"}),e.jsx(a,{label:"상세 주소",placeholder:"101호"}),e.jsx(a,{label:"우편번호",placeholder:"06100"})]})})})},t={name:"오류",render:()=>e.jsx("div",{className:"w-96",children:e.jsx(r,{legend:"카드 정보",invalid:!0,errorText:"카드 번호 또는 유효기간이 올바르지 않습니다.",children:e.jsxs("div",{className:"grid gap-3",children:[e.jsx(a,{label:"카드 번호",defaultValue:"1234 5678",error:"카드 번호를 확인하세요."}),e.jsx(a,{label:"유효기간",placeholder:"MM/YY"})]})})})},o={name:"비활성",render:()=>e.jsx("div",{className:"w-96",children:e.jsx(r,{legend:"계정 정보",disabled:!0,helperText:"관리자 권한이 없으면 편집할 수 없습니다.",children:e.jsxs("div",{className:"grid gap-3",children:[e.jsx(a,{label:"사용자 이름",defaultValue:"admin"}),e.jsx(a,{label:"역할",defaultValue:"관리자"})]})})})},i={name:"복합 폼",render:()=>e.jsxs("div",{className:"grid w-[30rem] gap-5",children:[e.jsx(r,{legend:"기본 정보",required:!0,children:e.jsxs("div",{className:"grid gap-3",children:[e.jsx(a,{label:"이름",placeholder:"홍길동"}),e.jsx(a,{label:"이메일",placeholder:"hong@example.com"}),e.jsx(a,{label:"전화번호",placeholder:"010-0000-0000"})]})}),e.jsx(r,{legend:"알림 설정",helperText:"필요한 알림 채널을 선택하세요.",children:e.jsxs("div",{className:"grid gap-2",children:[e.jsx(u,{label:"이메일 알림",defaultChecked:!0}),e.jsx(u,{label:"SMS 알림"}),e.jsx(u,{label:"마케팅 정보 수신"})]})}),e.jsx(U,{children:"저장하기"})]}),parameters:{controls:{disable:!0}}};var f,v,j;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '기본',
  render: args => <div className="w-96">
      <Fieldset {...args}>
        <div className="grid gap-3">
          <Input label="이름" placeholder="홍길동" />
          <Input label="이메일" placeholder="hong@example.com" />
        </div>
      </Fieldset>
    </div>
}`,...(j=(v=s.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var N,y,F;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '필수 그룹',
  render: () => <div className="w-96">
      <Fieldset legend="배송지 정보" required helperText="구매를 위해 배송지 정보를 입력해야 합니다.">
        <div className="grid gap-3">
          <Input label="주소" placeholder="서울시 강남구 테헤란로" />
          <Input label="상세 주소" placeholder="101호" />
          <Input label="우편번호" placeholder="06100" />
        </div>
      </Fieldset>
    </div>
}`,...(F=(y=d.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var I,k,R;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '오류',
  render: () => <div className="w-96">
      <Fieldset legend="카드 정보" invalid errorText="카드 번호 또는 유효기간이 올바르지 않습니다.">
        <div className="grid gap-3">
          <Input label="카드 번호" defaultValue="1234 5678" error="카드 번호를 확인하세요." />
          <Input label="유효기간" placeholder="MM/YY" />
        </div>
      </Fieldset>
    </div>
}`,...(R=(k=t.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var w,T,q;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '비활성',
  render: () => <div className="w-96">
      <Fieldset legend="계정 정보" disabled helperText="관리자 권한이 없으면 편집할 수 없습니다.">
        <div className="grid gap-3">
          <Input label="사용자 이름" defaultValue="admin" />
          <Input label="역할" defaultValue="관리자" />
        </div>
      </Fieldset>
    </div>
}`,...(q=(T=o.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var S,C,V;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '복합 폼',
  render: () => <div className="grid w-[30rem] gap-5">
      <Fieldset legend="기본 정보" required>
        <div className="grid gap-3">
          <Input label="이름" placeholder="홍길동" />
          <Input label="이메일" placeholder="hong@example.com" />
          <Input label="전화번호" placeholder="010-0000-0000" />
        </div>
      </Fieldset>
      <Fieldset legend="알림 설정" helperText="필요한 알림 채널을 선택하세요.">
        <div className="grid gap-2">
          <Checkbox label="이메일 알림" defaultChecked />
          <Checkbox label="SMS 알림" />
          <Checkbox label="마케팅 정보 수신" />
        </div>
      </Fieldset>
      <Button>저장하기</Button>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(V=(C=i.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};const ue=["Default","Required","Invalid","Disabled","ComplexForm"];export{i as ComplexForm,s as Default,o as Disabled,t as Invalid,d as Required,ue as __namedExportsOrder,me as default};
