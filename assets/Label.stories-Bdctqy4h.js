import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{d as V}from"./reference-types-4ftiVeOu.js";import{I as _}from"./Input-B5Q9mExy.js";import{r as D}from"./index-BxXVWNx3.js";import{P as k}from"./index-DnJVWBh-.js";import{c as O}from"./index-CkIaN0ex.js";import{c as z}from"./utils-DCADjnpI.js";import"./input-CyTVhyid.js";import"./x-DsL683-u.js";import"./createLucideIcon-Ct87QT5c.js";import"./eye-CPTXERrz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BuIYde5q.js";import"./index-DCvtqWl1.js";import"./index-DtBajwEi.js";var A="Label",I=D.forwardRef((r,c)=>a.jsx(k.label,{...r,ref:c,onMouseDown:e=>{var t;e.target.closest("button, input, select, textarea")||((t=r.onMouseDown)==null||t.call(r,e),!e.defaultPrevented&&e.detail>1&&e.preventDefault())}}));I.displayName=A;var T=I;const C=O("font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",{variants:{size:{sm:"text-krds-body-xs",md:"text-krds-body-sm",lg:"text-krds-body-md"},disabled:{true:"text-muted-foreground",false:"text-foreground"}},defaultVariants:{size:"md",disabled:!1}}),d=D.forwardRef(({className:r,label:c,required:e,optional:m,optionalText:t="(선택)",disabled:p,size:F,children:E,...M},P)=>a.jsxs(T,{ref:P,"data-slot":"label",className:z(C({size:F,disabled:p}),r),"aria-disabled":p||void 0,...M,children:[c??E,e?a.jsx("span",{"aria-hidden":"true",className:"ml-0.5 text-destructive",children:"*"}):null,m&&!e?a.jsx("span",{className:"ml-1 font-normal text-muted-foreground",children:t}):null]}));d.displayName=T.displayName;d.__docgenInfo={description:"",methods:[],props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},optional:{required:!1,tsType:{name:"boolean"},description:""},optionalText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'(선택)'",computed:!1}}},composes:["VariantProps"]};const W=V([{library:"Radix UI",component:"Label",url:"https://www.radix-ui.com/primitives/docs/components/label",usedFor:["behavior","accessibility","api"],relation:"primitive"},{library:"shadcn/ui",component:"Label",url:"https://ui.shadcn.com/docs/components/label",usedFor:["comparison"],relation:"compared"}]),oe={title:"Atoms/Inputs/Label",component:d,tags:["autodocs","ref:shadcn-ui","ref:radix-ui"],parameters:{references:W,layout:"centered",docs:{description:{component:"\n## Label\n\nRadix Label primitive를 KRDS 타이포그래피와 상태 토큰으로 감싼 입력 라벨입니다.\n`required`와 `optional` 보조 표기를 제공하며, `htmlFor`로 입력 요소와 연결합니다.\n        "}}},argTypes:{label:{control:"text",table:{category:"Content"}},htmlFor:{control:"text",table:{category:"HTML"}},required:{control:"boolean",table:{category:"State"}},optional:{control:"boolean",table:{category:"State"}},optionalText:{control:"text",table:{category:"Content"}},disabled:{control:"boolean",table:{category:"State"}}},args:{label:"노출 기간",htmlFor:"input-id",required:!1,optional:!1,disabled:!1}},o={name:"기본"},s={name:"필수",args:{label:"콘텐츠 제목",required:!0}},l={name:"선택",args:{label:"추가 설명",optional:!0}},n={name:"비활성",args:{label:"노출 기간",disabled:!0}},i={name:"입력 필드와 연결",render:()=>a.jsxs("div",{className:"grid w-80 gap-2",children:[a.jsx(d,{htmlFor:"title",required:!0,children:"콘텐츠 제목"}),a.jsx(_,{id:"title",placeholder:"제목을 입력하세요"})]}),parameters:{controls:{disable:!0}}};var u,b,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '기본'
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var g,x,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '필수',
  args: {
    label: '콘텐츠 제목',
    required: true
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var y,R,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '선택',
  args: {
    label: '추가 설명',
    optional: true
  }
}`,...(v=(R=l.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var q,N,w;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '비활성',
  args: {
    label: '노출 기간',
    disabled: true
  }
}`,...(w=(N=n.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var L,j,S;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '입력 필드와 연결',
  render: () => <div className="grid w-80 gap-2">
      <Label htmlFor="title" required>
        콘텐츠 제목
      </Label>
      <Input id="title" placeholder="제목을 입력하세요" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(S=(j=i.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const se=["Default","Required","Optional","Disabled","WithInput"];export{o as Default,n as Disabled,l as Optional,s as Required,i as WithInput,se as __namedExportsOrder,oe as default};
