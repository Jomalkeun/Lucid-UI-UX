import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{d as N}from"./reference-types-4ftiVeOu.js";import{R as m}from"./index-BxXVWNx3.js";import{c as _}from"./utils-DCADjnpI.js";import{B as O,I as Y}from"./italic-ur5SgAuk.js";import{L as F}from"./list-CoymnDxL.js";import{c as C}from"./createLucideIcon-Ct87QT5c.js";import{L as z}from"./link-CW0KDftW.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]],G=C("list-ordered",B);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],U=C("quote",Q),$=[{label:"굵게",command:"bold",icon:O},{label:"기울임",command:"italic",icon:Y},{label:"글머리 목록",command:"insertUnorderedList",icon:F},{label:"번호 목록",command:"insertOrderedList",icon:G},{label:"인용",command:"formatBlock",value:"blockquote",icon:U}];function p({content:a="<p>여기에 내용을 입력하세요...</p>",minHeight:M="200px",width:q="100%",placeholder:R="내용을 입력하세요.",showWordCount:S=!0,readOnly:n=!1,onChange:d,className:j,style:E,...H}){const o=m.useRef(null),[u,f]=m.useState(a),I=u.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim();m.useEffect(()=>{f(a),o.current&&o.current.innerHTML!==a&&(o.current.innerHTML=a)},[a]);const l=()=>{var r;const e=((r=o.current)==null?void 0:r.innerHTML)??"";f(e),d==null||d(e)},V=(e,r)=>{var y;n||((y=o.current)==null||y.focus(),document.execCommand(e,!1,r),l())},W=()=>{var r;if(n)return;const e=window.prompt("링크 URL을 입력하세요.");e&&((r=o.current)==null||r.focus(),document.execCommand("createLink",!1,e),l())};return t.jsxs("div",{className:_("overflow-hidden rounded-lg border border-krds-gray-20 bg-white text-krds-gray-90 shadow-sm",j),style:{width:q,...E},...H,children:[t.jsxs("div",{className:"flex flex-wrap items-center gap-1 border-b border-krds-gray-20 bg-krds-gray-5 p-2",role:"toolbar","aria-label":"서식 도구",children:[$.map(e=>{const r=e.icon;return t.jsx("button",{type:"button",className:"inline-flex h-8 w-8 items-center justify-center rounded-md text-krds-gray-70 hover:bg-white hover:text-krds-gray-90 focus:outline-none focus:ring-2 focus:ring-krds-primary/30 disabled:cursor-not-allowed disabled:opacity-50","aria-label":e.label,disabled:n,onClick:()=>V(e.command,e.value),children:t.jsx(r,{className:"h-4 w-4"})},`${e.command}-${e.value??"default"}`)}),t.jsx("button",{type:"button",className:"inline-flex h-8 w-8 items-center justify-center rounded-md text-krds-gray-70 hover:bg-white hover:text-krds-gray-90 focus:outline-none focus:ring-2 focus:ring-krds-primary/30 disabled:cursor-not-allowed disabled:opacity-50","aria-label":"링크",disabled:n,onClick:W,children:t.jsx(z,{className:"h-4 w-4"})})]}),t.jsx("div",{ref:o,className:"prose prose-sm max-w-none px-4 py-3 outline-none empty:before:text-krds-gray-50 empty:before:content-[attr(data-placeholder)]",contentEditable:!n,suppressContentEditableWarning:!0,role:"textbox","aria-multiline":"true","aria-readonly":n,"data-placeholder":R,style:{minHeight:M},onInput:l,dangerouslySetInnerHTML:{__html:u}}),S?t.jsxs("div",{className:"border-t border-krds-gray-20 px-4 py-2 text-right text-krds-body-xs text-krds-gray-60",children:[I.length.toLocaleString(),"자"]}):null]})}p.__docgenInfo={description:"",methods:[],displayName:"RichTextEditor",props:{content:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'<p>여기에 내용을 입력하세요...</p>'",computed:!1}},minHeight:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'200px'",computed:!1}},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'100%'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'내용을 입력하세요.'",computed:!1}},showWordCount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(content: string) => void",signature:{arguments:[{type:{name:"string"},name:"content"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const A=N([{library:"Flowbite",component:"WYSIWYG",url:"https://flowbite.com/docs/plugins/wysiwyg/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Rich Text Editor",url:"https://www.chakra-ui.com/docs/components/rich-text-editor",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Editor WYSIWYG",url:"https://quasar.dev/vue-components/editor",usedFor:["comparison"],relation:"compared"}]),ae={title:"Organisms/Forms/RichTextEditor",component:p,tags:["autodocs","form","custom-ui","ref:chakra-ui","ref:flowbite","ref:quasar"],parameters:{references:A,docs:{description:{component:`
## RichTextEditor

**WYSIWYG 방식의 서식 있는 텍스트 편집기**입니다. 굵기·이탤릭·목록·이미지·링크 등의 서식을 지원합니다.

---

### 언제 사용하나요?

- 공지사항·블로그 글 작성
- 이메일 본문 편집
- CMS 콘텐츠 관리

---

### 기술 스택 권장

| 라이브러리 | 특징 |
|---|---|
| Tiptap | Vue 3 지원, 확장성 높음 |
| Quill | 경량, 빠른 도입 |
| ProseMirror | 저수준 제어 가능 |

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | 편집 영역에 \`role="textbox"\`, \`aria-multiline="true"\`를 설정하세요. |
| ✅ | 툴바 버튼에 \`aria-label\`로 기능을 설명하세요. |
        `}}},argTypes:{content:{description:"초기 HTML 콘텐츠",control:"text",table:{type:{summary:"string"},category:"State"}},minHeight:{description:"최소 편집 영역 높이",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'200px'"},category:"Size"}},width:{description:"에디터 너비",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'100%'"},category:"Size"}},showWordCount:{description:"글자 수 표시",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Appearance"}},readOnly:{control:"boolean",table:{category:"State"}},onChange:{action:"change",table:{category:"Events"}}},args:{content:"<p>여기에 내용을 입력하세요...</p>",minHeight:"200px",width:"600px",showWordCount:!0,readOnly:!1},render:a=>t.jsx(p,{...a})},s={name:"기본 에디터",parameters:{docs:{description:{story:"툴바와 편집 영역을 갖춘 기본 리치 텍스트 에디터입니다."}}}},i={name:"컴팩트 에디터",args:{minHeight:"120px",width:"400px",showWordCount:!1},parameters:{docs:{description:{story:"댓글·단문 입력에 적합한 작은 에디터입니다."}}}},c={name:"읽기 전용",args:{content:"<h3>배포 공지</h3><p>오늘 18시에 정기 배포가 진행됩니다.</p>",readOnly:!0}};var h,g,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '기본 에디터',
  parameters: {
    docs: {
      description: {
        story: '툴바와 편집 영역을 갖춘 기본 리치 텍스트 에디터입니다.'
      }
    }
  }
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,k,w;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '컴팩트 에디터',
  args: {
    minHeight: '120px',
    width: '400px',
    showWordCount: false
  },
  parameters: {
    docs: {
      description: {
        story: '댓글·단문 입력에 적합한 작은 에디터입니다.'
      }
    }
  }
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var v,T,L;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '읽기 전용',
  args: {
    content: '<h3>배포 공지</h3><p>오늘 18시에 정기 배포가 진행됩니다.</p>',
    readOnly: true
  }
}`,...(L=(T=c.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};const oe=["Default","Compact","ReadOnly"];export{i as Compact,s as Default,c as ReadOnly,oe as __namedExportsOrder,ae as default};
