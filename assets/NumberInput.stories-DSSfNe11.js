import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-BxXVWNx3.js";import{d as ae}from"./reference-types-4ftiVeOu.js";import{c as h}from"./utils-DCADjnpI.js";import{M as te}from"./minus-DhOLGSmI.js";import{P as se}from"./plus-ClwFJ4cq.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-Ct87QT5c.js";const g=b.forwardRef(({label:a,value:l,defaultValue:B,min:k=0,max:V=100,step:R=1,placeholder:K="",disabled:i=!1,error:t=!1,errorMessage:f,hint:y,id:P,className:G,wrapperClassName:H,onChange:x,...J},L)=>{const Q=b.useId(),r=P??Q,w=l!==void 0,v=Number(k),I=Number(V),j=Number(R),[X,Y]=b.useState(B??v),s=w?l:X,Z=n=>Math.min(I,Math.max(v,n)),N=n=>{const o=Z(n);w||Y(o),x==null||x(o)},ee=n=>{const o=Number(n.target.value);Number.isNaN(o)||N(o)},re=t&&f?`${r}-error`:y?`${r}-hint`:void 0;return e.jsxs("div",{className:h("flex flex-col gap-1",H),children:[a?e.jsx("label",{htmlFor:r,className:"text-krds-body-sm font-medium text-krds-gray-90",children:a}):null,e.jsxs("div",{className:h("inline-flex items-center rounded-lg border bg-krds-gray-0 transition-colors",t?"border-krds-danger-border":"border-krds-gray-30 focus-within:border-krds-primary-50",i&&"cursor-not-allowed bg-krds-gray-10 opacity-50"),children:[e.jsx("button",{type:"button","aria-label":"감소",onClick:()=>N(s-j),disabled:i||s<=v,className:"flex size-10 items-center justify-center rounded-l-lg text-krds-gray-60 transition-colors hover:bg-krds-gray-10 active:bg-krds-gray-20 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",children:e.jsx(te,{"aria-hidden":"true",className:"size-4"})}),e.jsx("input",{ref:L,id:r,type:"number",inputMode:"numeric",value:s,min:k,max:V,step:R,placeholder:K,disabled:i,onChange:ee,"aria-invalid":t||void 0,"aria-describedby":re,className:h("w-16 border-x border-krds-gray-20 bg-transparent text-center text-krds-body-md text-krds-gray-90 outline-none","disabled:cursor-not-allowed [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",G),...J}),e.jsx("button",{type:"button","aria-label":"증가",onClick:()=>N(s+j),disabled:i||s>=I,className:"flex size-10 items-center justify-center rounded-r-lg text-krds-gray-60 transition-colors hover:bg-krds-gray-10 active:bg-krds-gray-20 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",children:e.jsx(se,{"aria-hidden":"true",className:"size-4"})})]}),t&&f?e.jsx("p",{id:`${r}-error`,role:"alert",className:"text-krds-body-xs text-krds-danger-text",children:f}):null,!t&&y?e.jsx("p",{id:`${r}-hint`,className:"text-krds-body-xs text-krds-gray-50",children:y}):null]})});g.displayName="NumberInput";g.__docgenInfo={description:"",methods:[],displayName:"NumberInput",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},value:{required:!1,tsType:{name:"number"},description:""},defaultValue:{required:!1,tsType:{name:"number"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},hint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},min:{defaultValue:{value:"0",computed:!1},required:!1},max:{defaultValue:{value:"100",computed:!1},required:!1},step:{defaultValue:{value:"1",computed:!1},required:!1},placeholder:{defaultValue:{value:"''",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const ne=ae([{library:"Mantine UI",component:"Number input with currency select",url:"https://ui.mantine.dev/category/inputs/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."},{library:"Ant Design",component:"InputNumber",url:"https://ant.design/components/input-number/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Number Input",url:"https://www.chakra-ui.com/docs/components/number-input",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Number Field",url:"https://base-ui.com/react/components/number-field",usedFor:["comparison"],relation:"compared"}]),be={title:"Molecules/Forms/NumberInput",component:g,tags:["autodocs","ref:ant-design","ref:chakra-ui","ref:base-ui","ref:mantine-ui"],parameters:{references:ne,docs:{description:{component:"\n## NumberInput\n\n숫자 값 입력을 위한 KRDS 기반 스테퍼 입력입니다.\n표준 input 속성에 `min`, `max`, `step`을 적용하고, 증감 버튼으로 값을 조절할 수 있습니다.\n        "}}},argTypes:{label:{control:"text",table:{category:"Content"}},value:{control:"number",table:{category:"State"}},defaultValue:{control:"number",table:{category:"State"}},min:{control:"number",table:{category:"Validation"}},max:{control:"number",table:{category:"Validation"}},step:{control:"number",table:{category:"Validation"}},placeholder:{control:"text",table:{category:"Content"}},disabled:{control:"boolean",table:{category:"State"}},error:{control:"boolean",table:{category:"State"}},errorMessage:{control:"text",table:{category:"Validation"}},hint:{control:"text",table:{category:"Content"}}},args:{label:"수량",value:1,min:0,max:100,step:1,disabled:!1,error:!1,errorMessage:"유효한 숫자를 입력하세요.",hint:"0에서 100 사이의 값을 입력하세요."}},d={name:"기본"},c={name:"제어형",render:()=>{const[a,l]=b.useState(3);return e.jsxs("div",{className:"grid gap-3",children:[e.jsx(g,{label:"인원",value:a,min:1,max:10,onChange:l}),e.jsxs("p",{className:"text-krds-body-xs text-krds-gray-60",children:["현재 값: ",a]})]})},parameters:{controls:{disable:!0}}},u={name:"범위 제한",args:{label:"할인율(%)",min:0,max:100,step:5,value:10,hint:"0에서 100% 범위에서 5 단위로 입력합니다."}},m={name:"오류",args:{value:100,error:!0,errorMessage:"허용 범위를 확인하세요."}},p={name:"비활성",args:{disabled:!0,value:5}};var S,q,C;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '기본'
}`,...(C=(q=d.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var M,T,F;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: '제어형',
  render: () => {
    const [value, setValue] = React.useState(3);
    return <div className="grid gap-3">
        <NumberInput label="인원" value={value} min={1} max={10} onChange={setValue} />
        <p className="text-krds-body-xs text-krds-gray-60">현재 값: {value}</p>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(F=(T=c.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var D,E,z;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '범위 제한',
  args: {
    label: '할인율(%)',
    min: 0,
    max: 100,
    step: 5,
    value: 10,
    hint: '0에서 100% 범위에서 5 단위로 입력합니다.'
  }
}`,...(z=(E=u.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var U,_,$;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: '오류',
  args: {
    value: 100,
    error: true,
    errorMessage: '허용 범위를 확인하세요.'
  }
}`,...($=(_=m.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var O,W,A;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '비활성',
  args: {
    disabled: true,
    value: 5
  }
}`,...(A=(W=p.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};const ge=["Default","Controlled","WithRange","ErrorState","Disabled"];export{c as Controlled,d as Default,p as Disabled,m as ErrorState,u as WithRange,ge as __namedExportsOrder,be as default};
