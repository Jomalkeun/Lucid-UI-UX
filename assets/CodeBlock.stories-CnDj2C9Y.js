import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{d as b}from"./reference-types-4ftiVeOu.js";import{r as k}from"./index-BxXVWNx3.js";import{c as x}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const r=k.forwardRef(({className:e,code:t,children:f,...C},I)=>c.jsx("pre",{ref:I,className:x("overflow-x-auto rounded-md bg-krds-gray-10 px-4 py-3 text-krds-gray-90 text-sm font-mono leading-relaxed",e),tabIndex:0,...C,children:c.jsx("code",{dangerouslySetInnerHTML:t!=null?{__html:t}:void 0,children:t==null?f:void 0})}));r.displayName="CodeBlock";r.__docgenInfo={description:"",methods:[],displayName:"CodeBlock",props:{code:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const N=b([{library:"daisyUI",component:"Code mockup",url:"https://daisyui.com/components/mockup-code/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Code Block",url:"https://www.chakra-ui.com/docs/components/code-block",usedFor:["comparison"],relation:"compared"}]),j={title:"Atoms/Typography/CodeBlock",component:r,tags:["autodocs","typography","custom-ui","ref:chakra-ui","ref:daisy-ui"],parameters:{references:N,docs:{description:{component:`
## CodeBlock

**API 엔드포인트·응답·오류 코드를 모노스페이스 폰트로 표시**하는 원자 컴포넌트입니다.
어드민 내 API 스펙 확인, 오류 원인 코드 표시, 정책 예시 코드 안내에 활용합니다.

---

### 사용 패턴

| 용도 | 예시 |
|---|---|
| API 요청 명세 | \`GET /api/v1/contents/{id}\` + 헤더 |
| 성공 응답 | \`200 OK → content object\` |
| 오류 응답 | \`403 Forbidden → 권한 부족\` |
| 정책 코드 | 상태값·조건 식별자 |

---

### 접근성(A11y) 가이드

- \`<pre>\` + \`<code>\` 구조를 유지해 스크린리더가 코드 블록으로 인식하게 합니다.
- 긴 줄은 \`overflow-x: auto\`로 처리하며, 가로 스크롤 시 포커스가 유지되도록 합니다.
        `}}},argTypes:{code:{description:"표시할 코드 문자열 (HTML 허용: span으로 색상 강조 가능)",control:"text",table:{type:{summary:"string (HTML)"},category:"Content"}}},args:{code:`<span style="color:#6E6D67">GET</span> /api/v1/contents/{id}
<span style="color:#6E6D67">Host:</span> admin-api.global.internal
<span style="color:#6E6D67">Authorization:</span> Bearer &lt;token&gt;

<span style="color:#0F6E56">200 OK</span>
<span style="color:#6E6D67">→ content object</span>`},render:e=>c.jsx(r,{...e,children:e.children??e.label??e.text??void 0})},n={name:"GET 요청 예시",args:{code:`<span style="color:#6E6D67">GET</span> /api/v1/contents/{id}
<span style="color:#6E6D67">Host:</span> admin-api.global.internal
<span style="color:#6E6D67">Authorization:</span> Bearer &lt;token&gt;

<span style="color:#0F6E56">200 OK</span>
<span style="color:#6E6D67">→ content object</span>`}},o={name:"POST 요청 예시",args:{code:`<span style="color:#6E6D67">POST</span> /api/v1/contents
<span style="color:#6E6D67">Content-Type:</span> application/json

{
  "title": "여름 데이터 선물",
  "channel": "옵션1",
  "status": "draft"
}

<span style="color:#0F6E56">201 Created</span>`}},s={name:"오류 응답 예시",args:{code:`<span style="color:#DC2626">403 Forbidden</span>
<span style="color:#6E6D67">→ 권한 부족: 배포 권한이 없습니다.</span>

{
  "error": "PERMISSION_DENIED",
  "required": "DEPLOY",
  "message": "배포 권한이 필요합니다."
}`}},a={name:"일반 텍스트 코드",args:{code:`status IN ('ACTIVE', 'SCHEDULED')
AND channel = '옵션1'
AND priority >= 1`}};var p,l,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'GET 요청 예시',
  args: {
    code: '<span style="color:#6E6D67">GET</span> /api/v1/contents/{id}\\n<span style="color:#6E6D67">Host:</span> admin-api.global.internal\\n<span style="color:#6E6D67">Authorization:</span> Bearer &lt;token&gt;\\n\\n<span style="color:#0F6E56">200 OK</span>\\n<span style="color:#6E6D67">→ content object</span>'
  } as any
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var i,m,y;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'POST 요청 예시',
  args: {
    code: '<span style="color:#6E6D67">POST</span> /api/v1/contents\\n<span style="color:#6E6D67">Content-Type:</span> application/json\\n\\n{\\n  "title": "여름 데이터 선물",\\n  "channel": "옵션1",\\n  "status": "draft"\\n}\\n\\n<span style="color:#0F6E56">201 Created</span>'
  } as any
}`,...(y=(m=o.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var u,E,D;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '오류 응답 예시',
  args: {
    code: '<span style="color:#DC2626">403 Forbidden</span>\\n<span style="color:#6E6D67">→ 권한 부족: 배포 권한이 없습니다.</span>\\n\\n{\\n  "error": "PERMISSION_DENIED",\\n  "required": "DEPLOY",\\n  "message": "배포 권한이 필요합니다."\\n}'
  } as any
}`,...(D=(E=s.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var g,h,T;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '일반 텍스트 코드',
  args: {
    code: 'status IN (\\'ACTIVE\\', \\'SCHEDULED\\')\\nAND channel = \\'옵션1\\'\\nAND priority >= 1'
  } as any
}`,...(T=(h=a.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};const v=["GetRequest","PostRequest","ErrorResponse","Plain"];export{s as ErrorResponse,n as GetRequest,a as Plain,o as PostRequest,v as __namedExportsOrder,j as default};
