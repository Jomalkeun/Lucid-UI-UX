import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as F}from"./reference-types-4ftiVeOu.js";import{r as f}from"./index-BxXVWNx3.js";import{c as t}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const d=f.forwardRef(({label:r,prefix:l,suffix:m,hint:c,disabled:s=!1,placeholder:A,type:N="text",id:R,className:T,...q},C)=>{const L=f.useId(),p=R??L,u=`${p}-hint`,P=!!l,W=!!m;return e.jsxs("div",{className:t("flex flex-col gap-1.5 w-full",T),children:[r&&e.jsx("label",{htmlFor:p,className:t("text-krds-body-sm font-medium",s?"text-krds-gray-40":"text-krds-gray-90"),children:r}),e.jsxs("div",{className:t("flex items-center w-full rounded-md border overflow-hidden transition-colors",s?"border-krds-gray-20 bg-krds-gray-10 opacity-50 cursor-not-allowed":"border-krds-gray-30 focus-within:ring-2 focus-within:ring-krds-primary-50 focus-within:ring-offset-0"),children:[P&&e.jsx("span",{className:t("flex items-center shrink-0 h-10 px-3 text-krds-body-md text-krds-gray-70 bg-krds-gray-5 border-r border-krds-gray-20 select-none whitespace-nowrap"),"aria-hidden":"true",children:l}),e.jsx("input",{ref:C,id:p,type:N,disabled:s,placeholder:A,"aria-describedby":c?u:void 0,className:t("flex-1 min-w-0 h-10 px-3 bg-krds-gray-0 outline-none text-krds-body-md text-krds-gray-90 placeholder:text-krds-gray-40",s&&"cursor-not-allowed bg-krds-gray-10"),...q}),W&&e.jsx("span",{className:t("flex items-center shrink-0 h-10 px-3 text-krds-body-md text-krds-gray-70 bg-krds-gray-5 border-l border-krds-gray-20 select-none whitespace-nowrap"),"aria-hidden":"true",children:m})]}),c&&e.jsx("p",{id:u,className:"text-krds-body-xs text-krds-gray-50",children:c})]})});d.displayName="InputWithAddon";d.__docgenInfo={description:"",methods:[],displayName:"InputWithAddon",props:{label:{required:!1,tsType:{name:"string"},description:""},prefix:{required:!1,tsType:{name:"string"},description:""},suffix:{required:!1,tsType:{name:"string"},description:""},hint:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'text'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const V=F([{library:"U.S. Web Design System",component:"Input prefix/suffix",url:"https://designsystem.digital.gov/components/input-prefix-suffix/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"Bootstrap",component:"Input group",url:"https://getbootstrap.com/docs/5.3/forms/input-group/",usedFor:["comparison"],relation:"compared"}]),D={title:"Molecules/Forms/InputWithAddon",component:d,tags:["autodocs","form","custom-ui","ref:shadcn-ui","ref:bootstrap","ref:uswds"],parameters:{references:V,docs:{description:{component:`
## InputWithAddon

**입력 필드 앞·뒤에 단위·기호·아이콘을 붙인** 조합 입력 컴포넌트입니다.

---

### 언제 사용하나요?

| 위치 | 예시 |
|---|---|
| Prefix (앞) | 통화 기호 (₩, $), URL 도메인, 국가 코드 |
| Suffix (뒤) | 단위 (kg, %, px), 확장자 (.com) |
| 양쪽 동시 | URL 입력 (https:// + .com) |
        `}}},argTypes:{label:{description:"레이블",control:"text",table:{type:{summary:"string"},category:"Content"}},prefix:{description:"앞 단위/기호",control:"text",table:{type:{summary:"string"},category:"Content"}},suffix:{description:"뒤 단위/기호",control:"text",table:{type:{summary:"string"},category:"Content"}},value:{description:"입력값",control:"text",table:{type:{summary:"string"},category:"State"}},placeholder:{description:"플레이스홀더",control:"text",table:{type:{summary:"string"},category:"Content"}},type:{description:"입력 타입",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'text'"},category:"Appearance"}},disabled:{description:"비활성화",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},hint:{description:"힌트",control:"text",table:{type:{summary:"string"},category:"Content"}}},args:{label:"금액",prefix:"₩",suffix:"",value:"",placeholder:"0",type:"number",disabled:!1,hint:""},render:r=>e.jsx(d,{...r,children:r.children??r.label??r.text??void 0})},n={name:"통화 기호 (Prefix)",parameters:{docs:{description:{story:"금액 입력 필드입니다."}}}},a={name:"URL 입력",args:{label:"도메인",prefix:"https://",suffix:".com",placeholder:"example",hint:"서브도메인 없이 입력하세요."},parameters:{docs:{description:{story:"URL 형식 입력 필드입니다."}}}},o={name:"단위 (Suffix)",args:{label:"무게",prefix:"",suffix:"kg",placeholder:"0.0",type:"number"},parameters:{docs:{description:{story:"단위가 뒤에 붙는 입력 필드입니다."}}}},i={name:"앞·뒤 모두",args:{label:"비율",prefix:"최대",suffix:"%",placeholder:"100",type:"number"},parameters:{docs:{description:{story:"앞·뒤 모두 애드온이 붙은 입력 필드입니다."}}}};var y,x,g;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '통화 기호 (Prefix)',
  parameters: {
    docs: {
      description: {
        story: '금액 입력 필드입니다.'
      }
    }
  }
}`,...(g=(x=n.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,b,k;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'URL 입력',
  args: {
    label: '도메인',
    prefix: 'https://',
    suffix: '.com',
    placeholder: 'example',
    hint: '서브도메인 없이 입력하세요.'
  } as any,
  parameters: {
    docs: {
      description: {
        story: 'URL 형식 입력 필드입니다.'
      }
    }
  }
}`,...(k=(b=a.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var w,S,v;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '단위 (Suffix)',
  args: {
    label: '무게',
    prefix: '',
    suffix: 'kg',
    placeholder: '0.0',
    type: 'number'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '단위가 뒤에 붙는 입력 필드입니다.'
      }
    }
  }
}`,...(v=(S=o.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var I,U,j;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '앞·뒤 모두',
  args: {
    label: '비율',
    prefix: '최대',
    suffix: '%',
    placeholder: '100',
    type: 'number'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '앞·뒤 모두 애드온이 붙은 입력 필드입니다.'
      }
    }
  }
}`,...(j=(U=i.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};const M=["CurrencyPrefix","UrlAddon","UnitSuffix","BothAddon"];export{i as BothAddon,n as CurrencyPrefix,o as UnitSuffix,a as UrlAddon,M as __namedExportsOrder,D as default};
