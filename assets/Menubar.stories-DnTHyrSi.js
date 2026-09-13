import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-BxXVWNx3.js";import{d as R}from"./reference-types-4ftiVeOu.js";import"./_commonjsHelpers-CqkleIqs.js";function p({menus:r,onSelect:l,style:u}){const[a,s]=c.useState(null),d=c.useRef(null);c.useEffect(()=>{const t=o=>{d.current&&!d.current.contains(o.target)&&s(null)};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[]);const b=(t,o)=>{if((t.key==="Enter"||t.key===" ")&&(t.preventDefault(),s(e=>e===o?null:o)),t.key==="Escape"&&s(null),t.key==="ArrowRight"){const e=r.findIndex(i=>i.key===o);e<r.length-1&&s(r[e+1].key)}if(t.key==="ArrowLeft"){const e=r.findIndex(i=>i.key===o);e>0&&s(r[e-1].key)}};return n.jsx("div",{ref:d,role:"menubar",style:{display:"inline-flex",alignItems:"stretch",background:"#fff",border:"1px solid #e5e7eb",borderRadius:"6px",fontFamily:"system-ui",fontSize:"14px",overflow:"visible",...u},children:r.map(t=>{const o=a===t.key;return n.jsxs("div",{style:{position:"relative"},children:[n.jsx("button",{role:"menuitem","aria-haspopup":"menu","aria-expanded":o,tabIndex:0,onClick:()=>s(o?null:t.key),onMouseEnter:()=>{a!==null&&s(t.key)},onKeyDown:e=>b(e,t.key),style:{padding:"6px 12px",border:"none",background:o?"#f3f4f6":"transparent",cursor:"pointer",fontSize:"14px",color:"#374151",borderRadius:"4px",outline:"none",whiteSpace:"nowrap"},children:t.label}),o&&n.jsx("div",{role:"menu",style:{position:"absolute",top:"100%",left:0,marginTop:"4px",zIndex:1e3,background:"#fff",border:"1px solid #e5e7eb",borderRadius:"8px",boxShadow:"0 8px 24px rgba(0,0,0,0.12)",minWidth:"200px",padding:"4px"},children:t.items.map(e=>e.separator?n.jsx("div",{style:{height:"1px",background:"#f0f0f0",margin:"4px 8px"}},e.key):n.jsxs("button",{role:"menuitem",disabled:e.disabled,onClick:()=>{e.disabled||(l==null||l(t.key,e.key),s(null))},style:{display:"flex",alignItems:"center",gap:"8px",width:"100%",padding:"7px 10px",border:"none",background:"transparent",cursor:e.disabled?"not-allowed":"pointer",fontSize:"13px",color:e.disabled?"#d1d5db":"#374151",textAlign:"left",borderRadius:"5px",outline:"none"},onMouseEnter:i=>{e.disabled||(i.currentTarget.style.background="#f3f4f6")},onMouseLeave:i=>{i.currentTarget.style.background="transparent"},children:[e.icon&&n.jsx("span",{style:{flexShrink:0,fontSize:"14px"},children:e.icon}),n.jsx("span",{style:{flex:1},children:e.label}),e.shortcut&&n.jsx("span",{style:{color:"#9ca3af",fontSize:"12px",marginLeft:"16px"},children:e.shortcut})]},e.key))})]},t.key)})})}p.__docgenInfo={description:"",methods:[],displayName:"Menubar",props:{menus:{required:!0,tsType:{name:"Array",elements:[{name:"MenubarMenu"}],raw:"MenubarMenu[]"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(menuKey: string, itemKey: string) => void",signature:{arguments:[{type:{name:"string"},name:"menuKey"},{type:{name:"string"},name:"itemKey"}],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const T=R([{library:"Base UI",component:"Menubar",url:"https://base-ui.com/react/components/menubar",usedFor:["comparison"],relation:"compared"}]),I={title:"Molecules/Navigation/Menubar",component:p,tags:["autodocs","ref:shadcn-ui","ref:mui","ref:base-ui"],parameters:{references:T,docs:{description:{component:`
## Menubar

데스크톱 애플리케이션의 메뉴 바를 구현하는 컴포넌트입니다.
File, Edit, View 등 최상위 메뉴가 가로로 나열되고, 각 항목 클릭 시 드롭다운 서브메뉴가 표시됩니다.
키보드로 좌우 메뉴 이동 및 항목 선택이 가능합니다.

---

### Props

| Prop | Type | 설명 |
|---|---|---|
| \`menus\` | \`MenubarMenu[]\` | 메뉴 목록 |
| \`onSelect\` | \`(menuKey, itemKey) => void\` | 항목 선택 콜백 |
        `}}}},E=[{key:"file",label:"파일",items:[{key:"new",label:"새로 만들기",icon:"📄",shortcut:"⌘N"},{key:"open",label:"열기",icon:"📂",shortcut:"⌘O"},{key:"sep1",label:"",separator:!0},{key:"save",label:"저장",icon:"💾",shortcut:"⌘S"},{key:"saveas",label:"다른 이름으로 저장",icon:"📋",shortcut:"⇧⌘S"},{key:"sep2",label:"",separator:!0},{key:"close",label:"닫기",shortcut:"⌘W"}]},{key:"edit",label:"편집",items:[{key:"undo",label:"실행 취소",icon:"↩️",shortcut:"⌘Z"},{key:"redo",label:"다시 실행",icon:"↪️",shortcut:"⇧⌘Z"},{key:"sep",label:"",separator:!0},{key:"cut",label:"잘라내기",icon:"✂️",shortcut:"⌘X"},{key:"copy",label:"복사",icon:"📋",shortcut:"⌘C"},{key:"paste",label:"붙여넣기",icon:"📌",shortcut:"⌘V"},{key:"sep2",label:"",separator:!0},{key:"find",label:"찾기",icon:"🔍",shortcut:"⌘F"}]},{key:"view",label:"보기",items:[{key:"zoom-in",label:"확대",shortcut:"⌘+"},{key:"zoom-out",label:"축소",shortcut:"⌘-"},{key:"reset-zoom",label:"기본 크기로",shortcut:"⌘0"},{key:"sep",label:"",separator:!0},{key:"sidebar",label:"사이드바 표시",shortcut:"⌘B"},{key:"terminal",label:"터미널",shortcut:"⌃`"}]},{key:"help",label:"도움말",items:[{key:"docs",label:"문서",icon:"📚"},{key:"shortcuts",label:"키보드 단축키",shortcut:"⌘K⌘S"},{key:"sep",label:"",separator:!0},{key:"about",label:"정보"}]}];function F(){const[r,l]=c.useState(null);return n.jsxs("div",{style:{fontFamily:"system-ui"},children:[n.jsx(p,{menus:E,onSelect:(u,a)=>l(`${u} > ${a}`)}),r&&n.jsxs("div",{style:{marginTop:"12px",fontSize:"13px",color:"#6b7280"},children:["선택: ",r]})]})}const y={name:"기본 (에디터 메뉴바)",render:()=>n.jsx(F,{})},f={name:"브라우저 스타일",render:()=>n.jsx("div",{style:{fontFamily:"system-ui"},children:n.jsx(p,{menus:[{key:"file",label:"File",items:[{key:"new-tab",label:"New Tab",shortcut:"⌘T"},{key:"new-window",label:"New Window",shortcut:"⌘N"},{key:"sep",label:"",separator:!0},{key:"save",label:"Save Page As...",shortcut:"⌘S"},{key:"print",label:"Print...",shortcut:"⌘P"}]},{key:"edit",label:"Edit",items:[{key:"cut",label:"Cut",shortcut:"⌘X"},{key:"copy",label:"Copy",shortcut:"⌘C"},{key:"paste",label:"Paste",shortcut:"⌘V"},{key:"sep",label:"",separator:!0},{key:"find",label:"Find...",shortcut:"⌘F"}]},{key:"view",label:"View",items:[{key:"reload",label:"Reload",shortcut:"⌘R"},{key:"hard-reload",label:"Hard Reload",shortcut:"⇧⌘R"},{key:"sep",label:"",separator:!0},{key:"devtools",label:"Developer Tools",shortcut:"⌥⌘I",disabled:!1}]}],style:{background:"#f9fafb"}})})},k={name:"앱 메뉴바",parameters:{docs:{description:{story:"실제 데스크톱 앱처럼 사용하는 예시입니다."}}},render:()=>{function r(){const[l,u]=c.useState("메뉴를 클릭해보세요."),[a,s]=c.useState("light");return n.jsxs("div",{style:{border:"1px solid #e5e7eb",borderRadius:"8px",overflow:"hidden",fontFamily:"system-ui"},children:[n.jsxs("div",{style:{background:a==="dark"?"#1f2937":"#f9fafb",padding:"8px 12px",borderBottom:"1px solid #e5e7eb",display:"flex",alignItems:"center",gap:"16px"},children:[n.jsx("span",{style:{fontSize:"16px",fontWeight:700,color:a==="dark"?"#fff":"#111"},children:"✏️ MyEditor"}),n.jsx(p,{menus:[{key:"file",label:"파일",items:[{key:"new",label:"새 파일",icon:"📄"},{key:"sep",label:"",separator:!0},{key:"exit",label:"종료",shortcut:"⌘Q"}]},{key:"view",label:"보기",items:[{key:"dark",label:a==="dark"?"라이트 모드로":"다크 모드로",icon:a==="dark"?"☀️":"🌙"}]}],onSelect:(d,b)=>{d==="file"&&b==="new"&&u("새 파일이 생성되었습니다."),d==="view"&&b==="dark"&&s(t=>t==="dark"?"light":"dark")},style:{background:"transparent",border:"none"}})]}),n.jsx("div",{style:{padding:"24px",background:a==="dark"?"#111827":"#fff",minHeight:"120px",color:a==="dark"?"#e5e7eb":"#374151",fontSize:"14px"},children:l})]})}return n.jsx(r,{})}};var m,h,x;y.parameters={...y.parameters,docs:{...(m=y.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '기본 (에디터 메뉴바)',
  render: () => <MenubarDemo />
}`,...(x=(h=y.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var g,v,w;f.parameters={...f.parameters,docs:{...(g=f.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '브라우저 스타일',
  render: () => <div style={{
    fontFamily: 'system-ui'
  }}>
      <Menubar menus={[{
      key: 'file',
      label: 'File',
      items: [{
        key: 'new-tab',
        label: 'New Tab',
        shortcut: '⌘T'
      }, {
        key: 'new-window',
        label: 'New Window',
        shortcut: '⌘N'
      }, {
        key: 'sep',
        label: '',
        separator: true
      }, {
        key: 'save',
        label: 'Save Page As...',
        shortcut: '⌘S'
      }, {
        key: 'print',
        label: 'Print...',
        shortcut: '⌘P'
      }]
    }, {
      key: 'edit',
      label: 'Edit',
      items: [{
        key: 'cut',
        label: 'Cut',
        shortcut: '⌘X'
      }, {
        key: 'copy',
        label: 'Copy',
        shortcut: '⌘C'
      }, {
        key: 'paste',
        label: 'Paste',
        shortcut: '⌘V'
      }, {
        key: 'sep',
        label: '',
        separator: true
      }, {
        key: 'find',
        label: 'Find...',
        shortcut: '⌘F'
      }]
    }, {
      key: 'view',
      label: 'View',
      items: [{
        key: 'reload',
        label: 'Reload',
        shortcut: '⌘R'
      }, {
        key: 'hard-reload',
        label: 'Hard Reload',
        shortcut: '⇧⌘R'
      }, {
        key: 'sep',
        label: '',
        separator: true
      }, {
        key: 'devtools',
        label: 'Developer Tools',
        shortcut: '⌥⌘I',
        disabled: false
      }]
    }]} style={{
      background: '#f9fafb'
    }} />
    </div>
}`,...(w=(v=f.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var S,M,j;k.parameters={...k.parameters,docs:{...(S=k.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '앱 메뉴바',
  parameters: {
    docs: {
      description: {
        story: '실제 데스크톱 앱처럼 사용하는 예시입니다.'
      }
    }
  },
  render: () => {
    function AppDemo() {
      const [content, setContent] = useState('메뉴를 클릭해보세요.');
      const [theme, setTheme] = useState('light');
      return <div style={{
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        overflow: 'hidden',
        fontFamily: 'system-ui'
      }}>
          <div style={{
          background: theme === 'dark' ? '#1f2937' : '#f9fafb',
          padding: '8px 12px',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
            <span style={{
            fontSize: '16px',
            fontWeight: 700,
            color: theme === 'dark' ? '#fff' : '#111'
          }}>✏️ MyEditor</span>
            <Menubar menus={[{
            key: 'file',
            label: '파일',
            items: [{
              key: 'new',
              label: '새 파일',
              icon: '📄'
            }, {
              key: 'sep',
              label: '',
              separator: true
            }, {
              key: 'exit',
              label: '종료',
              shortcut: '⌘Q'
            }]
          }, {
            key: 'view',
            label: '보기',
            items: [{
              key: 'dark',
              label: theme === 'dark' ? '라이트 모드로' : '다크 모드로',
              icon: theme === 'dark' ? '☀️' : '🌙'
            }]
          }]} onSelect={(m, i) => {
            if (m === 'file' && i === 'new') setContent('새 파일이 생성되었습니다.');
            if (m === 'view' && i === 'dark') setTheme(t => t === 'dark' ? 'light' : 'dark');
          }} style={{
            background: 'transparent',
            border: 'none'
          }} />
          </div>
          <div style={{
          padding: '24px',
          background: theme === 'dark' ? '#111827' : '#fff',
          minHeight: '120px',
          color: theme === 'dark' ? '#e5e7eb' : '#374151',
          fontSize: '14px'
        }}>
            {content}
          </div>
        </div>;
    }
    return <AppDemo />;
  }
}`,...(j=(M=k.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};const K=["Default","BrowserMenubar","AppMenubar"];export{k as AppMenubar,f as BrowserMenubar,y as Default,K as __namedExportsOrder,I as default};
