import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as D}from"./reference-types-4ftiVeOu.js";import{r as d}from"./index-BxXVWNx3.js";import{B as S}from"./button-B_kt0lNs.js";import{C as W}from"./checkbox-BOrDudnk.js";import{I as y}from"./Input-B5Q9mExy.js";import{c as _}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DtBajwEi.js";import"./index-CkIaN0ex.js";import"./loader-circle-Db56uVXG.js";import"./createLucideIcon-Ct87QT5c.js";import"./index-Cuo70N6w.js";import"./index-BIfB_hJr.js";import"./index-D63pzw-_.js";import"./index-BjCkHmxr.js";import"./index-D_4yO-tZ.js";import"./index-DnJVWBh-.js";import"./index-BuIYde5q.js";import"./index-DCvtqWl1.js";import"./check-CvnDgXMx.js";import"./input-CyTVhyid.js";import"./x-DsL683-u.js";import"./eye-CPTXERrz.js";function m({title:a="로그인",description:l,identifierLabel:q="이메일 또는 아이디",identifierPlaceholder:T,error:p,defaultValues:r,forgotPasswordHref:u,signupHref:f,signupLabel:E="회원가입",submitLabel:k="로그인",submitting:g=!1,onSubmit:n,socialSlot:x,className:L,...F}){const[i,C]=d.useState((r==null?void 0:r.identifier)??""),[c,I]=d.useState((r==null?void 0:r.password)??""),[h,P]=d.useState((r==null?void 0:r.remember)??!1);return e.jsxs("form",{className:_("w-full space-y-5",L),noValidate:!0,onSubmit:t=>{t.preventDefault(),n==null||n({identifier:i,password:c,remember:h})},...F,children:[e.jsxs("header",{className:"space-y-2",children:[e.jsx("h1",{className:"text-2xl font-bold text-krds-gray-90",children:a}),l?e.jsx("p",{className:"text-sm text-krds-gray-60",children:l}):null]}),p?e.jsx("div",{role:"alert",className:"rounded-lg border border-krds-danger-border bg-krds-danger-surface px-4 py-3 text-sm text-krds-danger-text",children:p}):null,e.jsxs("div",{className:"space-y-4",children:[e.jsx(y,{label:q,placeholder:T,value:i,onChange:t=>C(t.target.value),autoComplete:"username",required:!0}),e.jsx(y,{label:"비밀번호",type:"password",value:c,onChange:t=>I(t.target.value),autoComplete:"current-password",showPasswordToggle:!0,required:!0})]}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("label",{className:"inline-flex items-center gap-2 text-sm text-krds-gray-70",children:[e.jsx(W,{checked:h,onCheckedChange:t=>P(t===!0)})," 로그인 상태 유지"]}),u?e.jsx("a",{className:"text-sm font-medium underline underline-offset-4",href:u,children:"비밀번호 찾기"}):null]}),e.jsx(S,{type:"submit",className:"w-full",disabled:g||!i||!c,children:g?"로그인 중…":k}),x?e.jsx("div",{children:x}):null,f?e.jsxs("p",{className:"text-center text-sm text-krds-gray-60",children:["계정이 없으신가요? ",e.jsx("a",{className:"font-semibold underline underline-offset-4",href:f,children:E})]}):null]})}m.__docgenInfo={description:"",methods:[],displayName:"LoginForm",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'로그인'",computed:!1}},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},identifierLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'이메일 또는 아이디'",computed:!1}},identifierPlaceholder:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultValues:{required:!1,tsType:{name:"Partial",elements:[{name:"LoginFormValues"}],raw:"Partial<LoginFormValues>"},description:""},forgotPasswordHref:{required:!1,tsType:{name:"string"},description:""},signupHref:{required:!1,tsType:{name:"string"},description:""},signupLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'회원가입'",computed:!1}},submitLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'로그인'",computed:!1}},submitting:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: LoginFormValues) => void",signature:{arguments:[{type:{name:"LoginFormValues"},name:"values"}],return:{name:"void"}}},description:""},socialSlot:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};const O=D([{library:"Mantine UI",component:"Authentication",url:"https://ui.mantine.dev/category/authentication/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."}]),de={title:"Organisms/Forms/LoginForm",component:m,tags:["autodocs","form","krds-extended","ref:mantine-ui"],parameters:{references:O,docs:{description:{component:`
## LoginForm (패턴)

**이메일·비밀번호 기반의 로그인 폼** 패턴입니다.
비밀번호 보기/숨기기, 로그인 유지, 오류 메시지, 비밀번호 찾기 링크를 포함합니다.

---

### 구성 요소

- **헤더** — 서비스 브랜딩
- **오류 메시지** — \`role="alert"\`으로 스크린리더에 즉시 전달
- **이메일 필드** — \`autocomplete="username"\`
- **비밀번호 필드** — 보기/숨기기 토글 + \`autocomplete="current-password"\`
- **로그인 유지** — Checkbox 컴포넌트
- **제출 버튼** — Primary 버튼
- **보조 링크** — 비밀번호 찾기, 회원가입

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | 오류 메시지에 \`role="alert"\`을 사용합니다. |
| ✅ | \`autocomplete\` 속성으로 브라우저 자동완성을 지원합니다. |
| ✅ | 모든 인풋에 연결된 \`<label>\`이 있습니다. |
        `}}},argTypes:{showError:{description:"로그인 실패 오류 메시지를 표시합니다.",control:"boolean",table:{category:"State"}}},args:{showError:!1},render:a=>e.jsx(m,{...a,children:a.children??a.label??a.text??void 0})},s={name:"기본 (Default)",args:{showError:!1},parameters:{docs:{description:{story:"**빈 상태의 기본 로그인 폼**입니다."}}}},o={name:"오류 상태 (With Error)",args:{showError:!0},parameters:{docs:{description:{story:"**인증 실패 시 오류 메시지가 표시**된 상태입니다."}}}};var R,w,N;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '기본 (Default)',
  args: {
    showError: false
  } as any,
  parameters: {
    docs: {
      description: {
        story: '**빈 상태의 기본 로그인 폼**입니다.'
      }
    }
  }
}`,...(N=(w=s.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var b,j,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '오류 상태 (With Error)',
  args: {
    showError: true
  } as any,
  parameters: {
    docs: {
      description: {
        story: '**인증 실패 시 오류 메시지가 표시**된 상태입니다.'
      }
    }
  }
}`,...(v=(j=o.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const me=["Default","WithError"];export{s as Default,o as WithError,me as __namedExportsOrder,de as default};
