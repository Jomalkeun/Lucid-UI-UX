import{j as F}from"./jsx-runtime-D_zvdyIk.js";import{d as z}from"./reference-types-4ftiVeOu.js";function o({children:e,...x}){return F.jsx("div",{...x,children:e})}o.__docgenInfo={description:"",methods:[],displayName:"FileUploadArea",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const M=z([{library:"Mantine UI",component:"Dropzone with button",url:"https://ui.mantine.dev/category/dropzones/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."}]),U={title:"Organisms/Forms/FileUploadArea",component:o,tags:["autodocs","form","custom-ui","ref:mantine-ui"],parameters:{references:M,docs:{description:{component:'\n## FileUploadArea\n\n**실제 XHR 업로드 진행률(0–100%)을 시각화**하는 파일 업로드 영역입니다.\nKRDS `<FileUpload>`가 상태(`uploading / completed`) 기반 스피너만 제공하는 것과 달리,\n이 컴포넌트는 **퍼센트 단위 프로그레스바**가 필요한 상황을 위해 설계된 Components 커스텀 패턴입니다.\n\n---\n\n### FileUpload(KRDS) vs FileUploadArea(Components)\n\n| 항목 | FileUpload | FileUploadArea |\n|---|---|---|\n| 출처 | `krds-vue` 공식 | Components 커스텀 |\n| 업로드 중 표시 | 인디터미넌트 스피너 | **퍼센트 프로그레스바** |\n| 파일 상태 | `ready / uploading / completed / error` | `progress: 0–100` |\n| 언제 쓸까 | 일반 폼 첨부 | 대용량 파일, 진행률 실시간 피드백 |\n\n---\n\n### 사용 지침\n\n- `initialFiles`는 스토리 전용 prop입니다. 실제 사용 시 `data.files`를 직접 관리하세요.\n- 실제 업로드는 `addFiles()` 내부에서 XHR `progress` 이벤트로 `item.progress`를 갱신하세요.\n- `accept`는 MIME 문자열(`\'image/*,.pdf\'`) 또는 확장자(`\'.png,.jpg\'`) 모두 허용합니다.\n\n---\n\n### 접근성(A11y) 가이드\n\n| 체크 | 항목 |\n|---|---|\n| ✅ | 드롭존에 `role="region"` + `aria-label` 제공 |\n| ✅ | 파일 선택 영역에 `role="button"` + 키보드(`Enter`/`Space`) 지원 |\n| ✅ | 프로그레스바에 `role="progressbar"` + `aria-valuenow/min/max` 제공 |\n| ✅ | 진행률 텍스트에 `aria-live="polite"`로 스크린리더 알림 |\n| ✅ | 삭제 버튼에 `aria-label="[파일명] 삭제"` 제공 |\n| ✅ | 파일 목록에 `role="list"` + 각 항목에 `role="listitem"` 제공 |\n        '}}},argTypes:{multiple:{description:"다중 파일 선택 허용 여부",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Validation"}},accept:{description:"허용 파일 형식 (MIME 또는 확장자 문자열)",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"'image/*,.pdf,.docx'"},category:"Validation"}},disabled:{description:"비활성화 상태",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},hint:{description:"드롭존 하단에 표시되는 파일 제한 안내 텍스트",control:"text",table:{type:{summary:"string"},category:"Content"}},initialFiles:{description:"초기 파일 목록 (스토리 전용). `{ name, size, progress }` 배열.",control:"object",table:{type:{summary:"Array<{ name: string, size: string, progress: number }>"},category:"State"}}},args:{multiple:!0,accept:"image/*,.pdf,.docx",disabled:!1,hint:"PNG, JPG, PDF · 최대 10MB · 최대 5개",initialFiles:[{name:"design_spec.pdf",size:"2.4 MB",progress:100},{name:"mockup_v2.png",size:"1.1 MB",progress:65},{name:"report_draft.docx",size:"840 KB",progress:30}]},render:e=>F.jsx(o,{...e,children:e.children??e.label??e.text??void 0})},r={name:"기본 (Default)",parameters:{docs:{description:{story:"파일 3개가 각각 완료·진행·초기 상태로 표시됩니다. 실제 파일을 드래그하거나 버튼을 눌러 업로드 시뮬레이션을 확인하세요."}}}},s={name:"빈 상태 (Empty)",args:{initialFiles:[]},parameters:{docs:{description:{story:"업로드된 파일이 없는 초기 상태입니다."}}}},a={name:"비활성화 (Disabled)",args:{disabled:!0,initialFiles:[]},parameters:{docs:{description:{story:"드래그 드롭과 파일 선택 버튼이 모두 비활성화된 상태입니다."}}}},n={name:"업로드 진행 중 (In Progress)",args:{initialFiles:[{name:"video_intro.mp4",size:"48.2 MB",progress:12},{name:"thumbnail.jpg",size:"320 KB",progress:55},{name:"script.pdf",size:"1.2 MB",progress:88}]},parameters:{docs:{description:{story:"**퍼센트 단위 프로그레스바**가 차별점입니다. 실제 XHR `progress` 이벤트로 `item.progress`를 갱신하면 바가 실시간으로 채워집니다."}}}};var t,i,p;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: '기본 (Default)',
  parameters: {
    docs: {
      description: {
        story: '파일 3개가 각각 완료·진행·초기 상태로 표시됩니다. 실제 파일을 드래그하거나 버튼을 눌러 업로드 시뮬레이션을 확인하세요.'
      }
    }
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var l,d,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '빈 상태 (Empty)',
  args: {
    initialFiles: []
  } as any,
  parameters: {
    docs: {
      description: {
        story: '업로드된 파일이 없는 초기 상태입니다.'
      }
    }
  }
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,g,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '비활성화 (Disabled)',
  args: {
    disabled: true,
    initialFiles: []
  } as any,
  parameters: {
    docs: {
      description: {
        story: '드래그 드롭과 파일 선택 버튼이 모두 비활성화된 상태입니다.'
      }
    }
  }
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,b,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '업로드 진행 중 (In Progress)',
  args: {
    initialFiles: [{
      name: 'video_intro.mp4',
      size: '48.2 MB',
      progress: 12
    }, {
      name: 'thumbnail.jpg',
      size: '320 KB',
      progress: 55
    }, {
      name: 'script.pdf',
      size: '1.2 MB',
      progress: 88
    }]
  } as any,
  parameters: {
    docs: {
      description: {
        story: '**퍼센트 단위 프로그레스바**가 차별점입니다. 실제 XHR \`progress\` 이벤트로 \`item.progress\`를 갱신하면 바가 실시간으로 채워집니다.'
      }
    }
  }
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const h=["Default","Empty","Disabled","InProgress"];export{r as Default,a as Disabled,s as Empty,n as InProgress,h as __namedExportsOrder,U as default};
