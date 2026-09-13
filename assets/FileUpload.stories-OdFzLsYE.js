import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{d as ye}from"./reference-types-4ftiVeOu.js";import{r as y}from"./index-BxXVWNx3.js";import{c as x}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";function q(s){return s<1024?`${s}B`:s<1024*1024?`${(s/1024).toFixed(1)}KB`:`${(s/(1024*1024)).toFixed(1)}MB`}function xe({type:s}){const p=s.toLowerCase(),a={pdf:"#e53e3e",doc:"#2b6cb0",docx:"#2b6cb0",hwp:"#2b6cb0",xls:"#276749",xlsx:"#276749",ppt:"#c05621",pptx:"#c05621",jpg:"#805ad5",jpeg:"#805ad5",png:"#805ad5",gif:"#805ad5"}[p]??"#718096";return r.jsx("div",{className:x("flex items-center justify-center w-9 h-9 rounded text-white text-[10px] font-bold flex-shrink-0"),style:{background:a},children:p.toUpperCase().slice(0,4)})}function U({title:s,description:p,uploadText:v="첨부할 파일을 여기에 끌어다 놓거나, 파일 선택 버튼을 눌러 파일을 직접 선택해주세요.",acceptedFileTypes:a,maxFiles:g=10,maxFileSize:b=20971520,disabled:d=!1,allowDelete:V=!0,files:c,onFilesChange:t,onFileDelete:M,onAllFilesDelete:z,onFileUpload:S,className:se,style:ae}){const I=y.useId(),ne=y.useRef(null),[oe,f]=y.useState([]),[ie,P]=y.useState(!1),[$,de]=y.useState([]),m=c??oe,le=a?a.map(e=>`.${e}`).join(","):void 0,pe=e=>{var n;if(b&&e.size>b)return`파일 크기가 너무 큽니다. ${q(b)} 이하의 파일만 업로드할 수 있습니다.`;if(a&&a.length>0){const l=((n=e.name.split(".").pop())==null?void 0:n.toLowerCase())??"";if(!a.includes(l))return`허용되지 않는 파일 형식입니다. (허용: ${a.join(", ")})`}return null},R=y.useCallback(async e=>{if(d)return;const n=[],l=[];for(const o of e){if(m.length+l.length>=g){n.push(`최대 ${g}개까지 업로드할 수 있습니다.`);break}const h=pe(o);if(h){n.push(`${o.name}: ${h}`);continue}l.push({id:`${Date.now()}-${o.name}`,name:o.name,size:o.size,type:o.name.split(".").pop()??"",status:"ready"})}if(de(n),!l.length)return;const B=[...m,...l];c||f(B),t==null||t(B);for(const o of l)if(S){const h=e.find(i=>i.name===o.name);if(!h)continue;const k=B.map(i=>i.id===o.id?{...i,status:"uploading"}:i);c||f(k),t==null||t(k);try{await S(h);const i=k.map(u=>u.id===o.id?{...u,status:"completed"}:u);c||f(i),t==null||t(i)}catch{const i=k.map(u=>u.id===o.id?{...u,status:"error",errorMessage:"업로드 실패"}:u);c||f(i),t==null||t(i)}}},[d,m,g,c,t,S,a,b]),ce=e=>{e.target.files&&R(Array.from(e.target.files)),e.target.value=""},me=e=>{e.preventDefault(),P(!1),!d&&e.dataTransfer.files&&R(Array.from(e.dataTransfer.files))},ue=e=>{const n=m.filter(l=>l.id!==e.id);c||f(n),t==null||t(n),M==null||M(e)},fe=()=>{c||f([]),t==null||t([]),z==null||z()};return r.jsxs("div",{className:x("flex flex-col gap-3 font-sans",se),style:ae,children:[(s||p)&&r.jsxs("div",{children:[s&&r.jsx("p",{className:"text-krds-body-md font-semibold text-krds-gray-90",children:s}),p&&r.jsx("p",{className:"text-krds-body-sm text-krds-gray-50 mt-0.5",children:p})]}),r.jsxs("div",{role:"region","aria-label":"파일 업로드 영역",onDragOver:e=>{e.preventDefault(),d||P(!0)},onDragLeave:()=>P(!1),onDrop:me,className:x("flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed py-8 px-6 text-center transition-colors",ie&&!d?"border-krds-primary-50 bg-krds-primary-5":"border-krds-gray-20 bg-krds-gray-5",d&&"opacity-50 cursor-not-allowed"),children:[r.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none","aria-hidden":"true",children:[r.jsx("path",{d:"M20 8v16M12 16l8-8 8 8",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",className:"text-krds-gray-40"}),r.jsx("path",{d:"M8 28h24v4H8z",rx:"2",fill:"currentColor",className:"text-krds-gray-20"})]}),r.jsx("p",{className:"text-krds-body-sm text-krds-gray-50 leading-relaxed max-w-sm",children:v}),r.jsxs("label",{htmlFor:`${I}-input`,className:x("cursor-pointer",d&&"pointer-events-none"),children:[r.jsx("span",{className:x("inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-krds-primary-50 text-krds-primary-base text-krds-body-sm font-medium transition-colors",!d&&"hover:bg-krds-primary-5 active:bg-krds-primary-10"),children:"파일 선택"}),r.jsx("input",{id:`${I}-input`,ref:ne,type:"file",multiple:!0,disabled:d,accept:le,onChange:ce,className:"sr-only"})]}),a&&r.jsxs("p",{className:"text-krds-body-xs text-krds-gray-40",children:["허용 형식: ",a.join(", ")," · 최대 ",q(b)]})]}),$.length>0&&r.jsx("div",{role:"alert",className:"flex flex-col gap-1",children:$.map((e,n)=>r.jsx("p",{className:"text-krds-body-xs text-krds-danger-text",children:e},n))}),m.length>0&&r.jsxs("div",{className:"flex flex-col gap-1",children:[r.jsxs("div",{className:"flex items-center justify-between mb-1",children:[r.jsxs("span",{className:"text-krds-body-xs text-krds-gray-50",children:[m.length,"개 파일"]}),V&&r.jsx("button",{type:"button",onClick:fe,className:"text-krds-body-xs text-krds-danger-text hover:underline",children:"전체 삭제"})]}),m.map(e=>r.jsxs("div",{className:x("flex items-start gap-3 p-3 rounded-lg border",e.status==="error"?"border-krds-danger-border bg-krds-danger-surface":"border-krds-gray-10 bg-krds-gray-0"),children:[r.jsx(xe,{type:e.type}),r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsx("p",{className:"text-krds-body-sm text-krds-gray-90 truncate leading-snug",children:e.name}),r.jsx("p",{className:"text-krds-body-xs text-krds-gray-40 mt-0.5",children:q(e.size)}),e.status==="uploading"&&r.jsx("div",{className:"mt-1.5 h-1 bg-krds-gray-10 rounded-full overflow-hidden",children:r.jsx("div",{className:"h-full bg-krds-primary-50 rounded-full animate-pulse w-1/2"})}),e.status==="error"&&e.errorMessage&&r.jsx("p",{className:"text-krds-body-xs text-krds-danger-text mt-1 whitespace-pre-line",children:e.errorMessage})]}),r.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0",children:[(e.status==="completed"||e.status==="done")&&r.jsx("span",{className:"text-krds-success-text text-krds-body-xs font-medium",children:"완료"}),e.status==="uploading"&&r.jsx("span",{className:"text-krds-primary-base text-krds-body-xs",children:"업로드 중..."}),e.status==="error"&&r.jsx("span",{className:"text-krds-danger-text text-krds-body-xs font-medium",children:"오류"}),V&&r.jsx("button",{type:"button","aria-label":`${e.name} 삭제`,onClick:()=>ue(e),className:"w-6 h-6 flex items-center justify-center rounded text-krds-gray-40 hover:text-krds-danger-text hover:bg-krds-danger-surface transition-colors",children:r.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M2 2l10 10M12 2L2 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]})]},e.id))]})]})}U.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},uploadText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'첨부할 파일을 여기에 끌어다 놓거나, 파일 선택 버튼을 눌러 파일을 직접 선택해주세요.'",computed:!1}},acceptedFileTypes:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},maxFiles:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},maxFileSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20971520",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},allowDelete:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},files:{required:!1,tsType:{name:"Array",elements:[{name:"UploadFile"}],raw:"UploadFile[]"},description:""},onFilesChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: UploadFile[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"UploadFile"}],raw:"UploadFile[]"},name:"files"}],return:{name:"void"}}},description:""},onFileDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: UploadFile) => void",signature:{arguments:[{type:{name:"UploadFile"},name:"file"}],return:{name:"void"}}},description:""},onAllFilesDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onFileUpload:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File) => Promise<void>",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const ge=ye([{library:"U.S. Web Design System",component:"File input",url:"https://designsystem.digital.gov/components/file-input/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"GOV.UK Design System",component:"File upload",url:"https://design-system.service.gov.uk/components/file-upload/",usedFor:["behavior","accessibility","comparison"],relation:"compared"},{library:"Ark UI",component:"File Upload",url:"https://ark-ui.com/docs/components/file-upload",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"PrimeVue",component:"FileUpload",url:"https://primevue.org/fileupload/",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"KRDS",component:"FileUpload",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-fileupload--docs",usedFor:["design","behavior","api"],relation:"adapted"},{library:"Flowbite",component:"File Input",url:"https://flowbite.com/docs/forms/file-input/",usedFor:["comparison"],relation:"compared"},{library:"Bootstrap",component:"File input",url:"https://getbootstrap.com/docs/5.3/forms/form-control/#file-input",usedFor:["comparison"],relation:"compared"},{library:"daisyUI",component:"File Input",url:"https://daisyui.com/components/file-input/",usedFor:["comparison"],relation:"compared"},{library:"Ant Design",component:"Upload",url:"https://ant.design/components/upload/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"File Upload",url:"https://www.chakra-ui.com/docs/components/file-upload",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Uploader",url:"https://quasar.dev/vue-components/uploader",usedFor:["comparison"],relation:"compared"}]),je={title:"Molecules/Forms/FileUpload",component:U,tags:["autodocs","form","krds-extended","ref:chakra-ui","ref:ark-ui","ref:daisy-ui","ref:ant-design","ref:flowbite","ref:vuetify","ref:mui","ref:bootstrap","ref:quasar","ref:primevue","ref:govuk","ref:uswds"],parameters:{references:ge,docs:{description:{component:`
## FileUploader

드래그 앤 드롭 또는 버튼 클릭으로 **파일을 업로드**하는 컴포넌트입니다.
파일 크기·형식 유효성 검사와 업로드 목록 표시 기능을 내장하고 있습니다.

---

### 사용 지침

- **\`acceptedFileTypes\`**: MIME 타입이 아닌 **확장자 문자열 배열**을 전달합니다. (예: \`['png', 'jpg', 'pdf']\`)
- **\`maxFileSize\`**: 바이트(byte) 단위입니다. 기본값은 20MB(20971520)입니다.
- **\`maxFiles\`**: 최대 업로드 가능 파일 수. 기본값은 10입니다.
- \`v-model:files\` 또는 \`files\` prop + \`@filesChange\`로 파일 목록을 관리합니다.
- **\`onFileUpload\`**: \`(file: File) => Promise<void>\` 형태의 비동기 업로드 핸들러를 전달하면 실제 업로드 흐름을 제어할 수 있습니다.

---

### 이벤트

| 이벤트 | 설명 |
|---|---|
| \`update:files\` | 파일 목록 변경 시 (v-model:files 용) |
| \`filesChange\` | 파일 추가/제거 시 전체 목록 전달 |
| \`fileDelete\` | 개별 파일 삭제 시 |
| \`allFilesDelete\` | 전체 파일 삭제 시 |

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | 업로드 버튼과 파일 입력 필드가 연결됩니다. |
| ✅ | 업로드 진행/완료 상태는 \`role="status"\`로 스크린리더에 알려집니다. |
| ⚠️ | \`title\`을 항상 제공하여 업로드 목적을 명확히 설명하세요. |
        `}}},argTypes:{title:{description:"업로더 영역 상단에 표시되는 제목입니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"(없음)"},category:"Content"}},description:{description:"제목 아래에 표시되는 보조 설명입니다. 허용 형식·용량 안내 등에 사용합니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"(없음)"},category:"Content"}},uploadText:{description:"드래그 앤 드롭 영역에 표시되는 안내 텍스트입니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'첨부할 파일을 여기에 끌어다 놓거나, 파일 선택 버튼을 눌러 파일을 직접 선택해주세요.'"},category:"Content"}},acceptedFileTypes:{description:"허용할 파일 확장자 배열입니다. MIME 타입이 아닌 **확장자 문자열**을 전달합니다. (예: `['png', 'jpg']`)",control:"object",table:{type:{summary:"string[]"},defaultValue:{summary:"(없음, 모든 형식 허용)"},category:"Content"}},maxFiles:{description:"최대 업로드 가능 파일 수입니다.",control:"number",table:{type:{summary:"number"},defaultValue:{summary:"10"},category:"Validation"}},maxFileSize:{description:"허용되는 최대 파일 크기(바이트)입니다. 기본값은 20MB(20971520)입니다.",control:"number",table:{type:{summary:"number"},defaultValue:{summary:"20971520 (20MB)"},category:"Validation"}},disabled:{description:"비활성화 상태입니다. 파일 선택과 드래그 앤 드롭이 모두 차단됩니다.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},allowDelete:{description:"업로드된 파일 목록에서 삭제 버튼 표시 여부입니다.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"State"}}},args:{title:"타이틀영역",description:"컨텐츠 영역",uploadText:"첨부할 파일을 여기에 끌어다 놓거나, 파일 선택 버튼을 눌러 파일을 직접 선택해주세요.",maxFiles:5,maxFileSize:5242880,acceptedFileTypes:["pdf","doc","docx","hwp","jpg","png"],disabled:!1,allowDelete:!0},render:s=>r.jsx(U,{...s,children:s.children??s.label??s.text??void 0})},w={name:"기본 (Default)",args:{title:"이미지 업로드",description:"PNG · JPG · 최대 5MB",acceptedFileTypes:["png","jpg"],maxFileSize:5242880},parameters:{docs:{description:{story:"**비어있는 기본 업로드 영역**입니다. 이미지 파일만 허용하며 최대 5MB로 제한합니다."}}}},j={name:"파일 목록 포함 (With Files)",args:{title:"이미지 업로드",files:[{id:"1",name:"위임장(주민등록법 시행령 별지 제15호의2호서식)",size:17408,type:"hwp",status:"uploading"},{id:"2",name:"위임장(주민등록법 시행령 별지 제15호의2호서식)",size:17408,type:"hwp",status:"completed"},{id:"3",name:"위임장(주민등록법 시행령 별지 제15호의2호서식)",size:17408,type:"hwp",status:"ready"},{id:"4",name:"전입재등록신고서 [주민등록법 시행령 : 별지서식 15, 15호의2]",size:17408,type:"hwp",status:"error",errorMessage:`등록 가능한 파일 용량을 초과하였습니다.
20MB 미만의 파일만 등록할 수 있습니다.`},{id:"5",name:"위임장(주민등록법 시행령 별지 제15호의2호서식)",size:17408,type:"hwp",status:"ready"},{id:"6",name:"업로드 완료된 파일.pdf",size:25600,type:"pdf",status:"completed"}],allowDelete:!0},parameters:{docs:{description:{story:"\n**이미 업로드된 파일 목록이 표시된 상태**입니다.\n`files` prop에 파일 객체 배열을 전달하면 목록이 렌더링됩니다.\n각 파일 객체는 `{ id, name, size, type, status }` 형태이며,\n`status: 'done'`이면 완료, `'error'`이면 오류 표시됩니다.\n        "}}}},N={name:"비활성화 (Disabled)",args:{title:"이미지 업로드",description:"업로드가 비활성화된 상태입니다.",disabled:!0},parameters:{docs:{description:{story:`
**파일 선택이 불가한 비활성화 상태**입니다.
읽기 전용 폼, 권한 없는 사용자, 특정 조건이 미충족된 경우에 사용합니다.
        `}}}},F={name:"삭제 불가 (No Delete)",args:{title:"첨부 파일",files:[{id:"1",name:"contract.pdf",size:512e3,type:"pdf",status:"done"}],allowDelete:!1},parameters:{docs:{description:{story:`
**\`allowDelete: false\`로 파일 삭제 버튼을 숨깁니다.**
이미 제출된 파일이나 변경 불가한 첨부 파일을 표시만 할 때 사용합니다.
        `}}}},D={name:"파일 형식 제한 (Restricted File Types)",args:{title:"문서 업로드",description:"PDF · XLSX · PPTX 형식만 허용합니다. 최대 20MB · 최대 10개",acceptedFileTypes:["pdf","xlsx","pptx"],maxFiles:10,maxFileSize:20971520},parameters:{docs:{description:{story:`
**\`acceptedFileTypes\`로 허용 형식을 제한**한 예시입니다.
지정된 확장자 외의 파일을 선택하면 유효성 오류가 표시됩니다.
문서·보고서 업로드처럼 특정 형식만 받아야 하는 경우에 사용합니다.
        `}}}},T={render:s=>{const p=[],v=async a=>{await new Promise(g=>setTimeout(g,1200))};return r.jsx(U,{...s,"v-modelfiles":p,onFileUpload:v})},name:"인터랙티브 (Interactive)",args:{title:"인터랙티브 파일 업로드",description:"파일을 실제로 추가하고 삭제해 보세요.",maxFiles:5,maxFileSize:5242880,acceptedFileTypes:["png","jpg","pdf"],allowDelete:!0},parameters:{docs:{description:{story:"\n**실제 파일 선택·삭제가 동작하는 인터랙티브 데모**입니다.\n`v-model:files`로 파일 목록을 반응형으로 관리하고,\n`onFileUpload` 핸들러로 1.2초 업로드 지연을 시뮬레이션합니다.\n        "}}}};var L,A,E;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '기본 (Default)',
  args: {
    title: '이미지 업로드',
    description: 'PNG · JPG · 최대 5MB',
    acceptedFileTypes: ['png', 'jpg'],
    maxFileSize: 5242880
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`**비어있는 기본 업로드 영역**입니다. 이미지 파일만 허용하며 최대 5MB로 제한합니다.\`
      }
    }
  }
}`,...(E=(A=w.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var W,X,_;j.parameters={...j.parameters,docs:{...(W=j.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '파일 목록 포함 (With Files)',
  args: {
    title: '이미지 업로드',
    files: [{
      "id": "1",
      "name": "위임장(주민등록법 시행령 별지 제15호의2호서식)",
      "size": 17408,
      "type": "hwp",
      "status": "uploading"
    }, {
      "id": "2",
      "name": "위임장(주민등록법 시행령 별지 제15호의2호서식)",
      "size": 17408,
      "type": "hwp",
      "status": "completed"
    }, {
      "id": "3",
      "name": "위임장(주민등록법 시행령 별지 제15호의2호서식)",
      "size": 17408,
      "type": "hwp",
      "status": "ready"
    }, {
      "id": "4",
      "name": "전입재등록신고서 [주민등록법 시행령 : 별지서식 15, 15호의2]",
      "size": 17408,
      "type": "hwp",
      "status": "error",
      "errorMessage": "등록 가능한 파일 용량을 초과하였습니다.\\n20MB 미만의 파일만 등록할 수 있습니다."
    }, {
      "id": "5",
      "name": "위임장(주민등록법 시행령 별지 제15호의2호서식)",
      "size": 17408,
      "type": "hwp",
      "status": "ready"
    }, {
      "id": "6",
      "name": "업로드 완료된 파일.pdf",
      "size": 25600,
      "type": "pdf",
      "status": "completed"
    }],
    allowDelete: true
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**이미 업로드된 파일 목록이 표시된 상태**입니다.
\\\`files\\\` prop에 파일 객체 배열을 전달하면 목록이 렌더링됩니다.
각 파일 객체는 \\\`{ id, name, size, type, status }\\\` 형태이며,
\\\`status: 'done'\\\`이면 완료, \\\`'error'\\\`이면 오류 표시됩니다.
        \`
      }
    }
  }
}`,...(_=(X=j.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};var G,O,K;N.parameters={...N.parameters,docs:{...(G=N.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '비활성화 (Disabled)',
  args: {
    title: '이미지 업로드',
    description: '업로드가 비활성화된 상태입니다.',
    disabled: true
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**파일 선택이 불가한 비활성화 상태**입니다.
읽기 전용 폼, 권한 없는 사용자, 특정 조건이 미충족된 경우에 사용합니다.
        \`
      }
    }
  }
}`,...(K=(O=N.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var J,H,Q;F.parameters={...F.parameters,docs:{...(J=F.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: '삭제 불가 (No Delete)',
  args: {
    title: '첨부 파일',
    files: [{
      id: '1',
      name: 'contract.pdf',
      size: 512000,
      type: 'pdf',
      status: 'done'
    }],
    allowDelete: false
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**\\\`allowDelete: false\\\`로 파일 삭제 버튼을 숨깁니다.**
이미 제출된 파일이나 변경 불가한 첨부 파일을 표시만 할 때 사용합니다.
        \`
      }
    }
  }
}`,...(Q=(H=F.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var Y,Z,C;D.parameters={...D.parameters,docs:{...(Y=D.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: '파일 형식 제한 (Restricted File Types)',
  args: {
    title: '문서 업로드',
    description: 'PDF · XLSX · PPTX 형식만 허용합니다. 최대 20MB · 최대 10개',
    acceptedFileTypes: ['pdf', 'xlsx', 'pptx'],
    maxFiles: 10,
    maxFileSize: 20971520
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**\\\`acceptedFileTypes\\\`로 허용 형식을 제한**한 예시입니다.
지정된 확장자 외의 파일을 선택하면 유효성 오류가 표시됩니다.
문서·보고서 업로드처럼 특정 형식만 받아야 하는 경우에 사용합니다.
        \`
      }
    }
  }
}`,...(C=(Z=D.parameters)==null?void 0:Z.docs)==null?void 0:C.source}}};var ee,re,te;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: (args: any) => {
    const files = [];
    const handleFileUpload = async _file => {
      await new Promise(resolve => setTimeout(resolve, 1200));
    };
    return <FileUpload {...args} v-modelfiles={files} onFileUpload={handleFileUpload} />;
  },
  name: '인터랙티브 (Interactive)',
  args: {
    title: '인터랙티브 파일 업로드',
    description: '파일을 실제로 추가하고 삭제해 보세요.',
    maxFiles: 5,
    maxFileSize: 5242880,
    acceptedFileTypes: ['png', 'jpg', 'pdf'],
    allowDelete: true
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**실제 파일 선택·삭제가 동작하는 인터랙티브 데모**입니다.
\\\`v-model:files\\\`로 파일 목록을 반응형으로 관리하고,
\\\`onFileUpload\\\` 핸들러로 1.2초 업로드 지연을 시뮬레이션합니다.
        \`
      }
    }
  }
}`,...(te=(re=T.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};const Ne=["Default","WithFiles","Disabled","NoDelete","RestrictedFileTypes","Interactive"];export{w as Default,N as Disabled,T as Interactive,F as NoDelete,D as RestrictedFileTypes,j as WithFiles,Ne as __namedExportsOrder,je as default};
