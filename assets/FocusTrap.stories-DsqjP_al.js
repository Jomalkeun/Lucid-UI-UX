import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-BxXVWNx3.js";import{d as B}from"./reference-types-4ftiVeOu.js";import"./_commonjsHelpers-CqkleIqs.js";const D=["a[href]","button:not([disabled])","textarea:not([disabled])","input:not([disabled])","select:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(", ");function t({children:r,active:d=!0,restoreFocus:x=!0}){const u=p.useRef(null),l=p.useRef(null);return p.useEffect(()=>{if(!d)return;l.current=document.activeElement;const f=()=>{var o;return Array.from(((o=u.current)==null?void 0:o.querySelectorAll(D))??[])},c=f()[0];c==null||c.focus();const b=o=>{if(o.key!=="Tab")return;const s=f();if(s.length===0){o.preventDefault();return}const m=s[0],y=s[s.length-1];o.shiftKey?document.activeElement===m&&(o.preventDefault(),y.focus()):document.activeElement===y&&(o.preventDefault(),m.focus())};return document.addEventListener("keydown",b),()=>{document.removeEventListener("keydown",b),x&&l.current instanceof HTMLElement&&l.current.focus()}},[d,x]),e.jsx("div",{ref:u,"data-focus-trap":d?"true":void 0,children:r})}t.__docgenInfo={description:"",methods:[],displayName:"FocusTrap",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},restoreFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const E=B([{library:"Ark UI",component:"Focus Trap",url:"https://ark-ui.com/docs/utilities/focus-trap",usedFor:["behavior","accessibility","api"],relation:"compared"}]),M={title:"Layout/Primitives/FocusTrap",component:t,tags:["autodocs","ref:ark-ui"],parameters:{references:E,docs:{description:{component:"\n## FocusTrap\n\n포커스를 특정 DOM 영역 안에 가두는 접근성 유틸리티 컴포넌트입니다.\n모달, 다이얼로그, 드로어 등 오버레이가 열린 동안 Tab 키 포커스가 외부로 빠져나가지 않도록 합니다.\n\n`active` prop이 `true`일 때만 포커스를 트랩하며, `false`로 바꾸면 이전 포커스로 자동 복원됩니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `active` | `boolean` | `true` | 포커스 트랩 활성화 여부 |\n| `restoreFocus` | `boolean` | `true` | 비활성화 시 이전 포커스 복원 |\n| `children` | `ReactNode` | - | 포커스를 가둘 내용 |\n        "}}},argTypes:{active:{control:"boolean",table:{category:"Behavior"}},restoreFocus:{control:"boolean",table:{category:"Behavior"}}},args:{active:!0,restoreFocus:!0}},i={name:"기본",render:r=>e.jsxs("div",{style:{fontFamily:"system-ui",padding:"24px"},children:[e.jsxs("p",{style:{fontSize:"13px",color:"#6b7280",marginBottom:"16px"},children:["active=",String(r.active)," 상태일 때 Tab 키를 누르면 포커스가 아래 영역 안에서만 순환합니다."]}),e.jsx("input",{placeholder:"바깥 입력 (포커스 탈출 테스트)",style:{padding:"8px 12px",border:"1px solid #d1d5db",borderRadius:"6px",marginBottom:"16px",display:"block",width:"240px",fontFamily:"system-ui"}}),e.jsxs("div",{style:{border:"2px dashed #3b82f6",borderRadius:"10px",padding:"20px",background:"#f0f7ff"},children:[e.jsx("div",{style:{fontSize:"12px",color:"#3b82f6",fontWeight:600,marginBottom:"12px"},children:"FocusTrap 영역"}),e.jsx(t,{...r,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx("input",{placeholder:"첫 번째 입력",style:{padding:"8px 12px",border:"1px solid #d1d5db",borderRadius:"6px",fontFamily:"system-ui"}}),e.jsx("input",{placeholder:"두 번째 입력",style:{padding:"8px 12px",border:"1px solid #d1d5db",borderRadius:"6px",fontFamily:"system-ui"}}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("button",{style:{padding:"8px 16px",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontFamily:"system-ui"},children:"확인"}),e.jsx("button",{style:{padding:"8px 16px",background:"#f3f4f6",color:"#374151",border:"1px solid #d1d5db",borderRadius:"6px",cursor:"pointer",fontFamily:"system-ui"},children:"취소"})]})]})})]})]})};function z(){const[r,d]=p.useState(!1);return e.jsxs("div",{style:{fontFamily:"system-ui",padding:"24px"},children:[e.jsxs("div",{style:{marginBottom:"12px"},children:[e.jsx("input",{placeholder:"페이지 외부 입력 (Tab으로 포커스 이동 시험)",style:{padding:"8px 12px",border:"1px solid #d1d5db",borderRadius:"6px",marginRight:"8px",fontFamily:"system-ui",width:"300px"}}),e.jsx("button",{onClick:()=>d(!0),style:{padding:"8px 16px",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer"},children:"모달 열기"})]}),r&&e.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},children:e.jsx(t,{active:r,restoreFocus:!0,children:e.jsxs("div",{style:{background:"#fff",borderRadius:"16px",padding:"28px",width:"360px",boxShadow:"0 24px 64px rgba(0,0,0,0.3)"},children:[e.jsx("h3",{style:{margin:"0 0 8px",fontSize:"18px",fontWeight:700,color:"#111"},children:"포커스 트랩 데모"}),e.jsx("p",{style:{margin:"0 0 20px",fontSize:"13px",color:"#6b7280"},children:"Tab 키를 눌러도 포커스가 이 모달 안에서만 순환합니다."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginBottom:"20px"},children:[e.jsx("input",{placeholder:"이름",style:{padding:"10px 12px",border:"1px solid #d1d5db",borderRadius:"8px",fontSize:"14px",fontFamily:"system-ui"}}),e.jsx("input",{placeholder:"이메일",style:{padding:"10px 12px",border:"1px solid #d1d5db",borderRadius:"8px",fontSize:"14px",fontFamily:"system-ui"}}),e.jsxs("select",{style:{padding:"10px 12px",border:"1px solid #d1d5db",borderRadius:"8px",fontSize:"14px",fontFamily:"system-ui"},children:[e.jsx("option",{children:"역할 선택"}),e.jsx("option",{children:"개발자"}),e.jsx("option",{children:"디자이너"})]})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[e.jsx("button",{onClick:()=>d(!1),style:{padding:"10px 20px",background:"#f3f4f6",color:"#374151",border:"1px solid #d1d5db",borderRadius:"8px",cursor:"pointer",fontFamily:"system-ui",fontWeight:600},children:"취소"}),e.jsx("button",{onClick:()=>d(!1),style:{padding:"10px 20px",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontFamily:"system-ui",fontWeight:600},children:"저장"})]})]})})})]})}const a={name:"모달 포커스 트랩",parameters:{docs:{description:{story:"모달이 열리면 포커스가 내부에 갇히고, 닫히면 이전 포커스로 복원됩니다."}}},render:()=>e.jsx(z,{})},n={name:"비활성 (포커스 자유)",parameters:{docs:{description:{story:"active=false 상태에서는 포커스가 자유롭게 이동합니다."}}},render:()=>e.jsxs("div",{style:{fontFamily:"system-ui",padding:"24px"},children:[e.jsx("input",{placeholder:"외부 입력",style:{padding:"8px 12px",border:"1px solid #d1d5db",borderRadius:"6px",marginBottom:"16px",display:"block",fontFamily:"system-ui"}}),e.jsxs("div",{style:{border:"2px dashed #d1d5db",borderRadius:"10px",padding:"20px",background:"#fafafa"},children:[e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",fontWeight:600,marginBottom:"12px"},children:"FocusTrap (active=false)"}),e.jsx(t,{active:!1,children:e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("input",{placeholder:"내부 입력",style:{padding:"8px 12px",border:"1px solid #d1d5db",borderRadius:"6px",fontFamily:"system-ui"}}),e.jsx("button",{style:{padding:"8px 14px",background:"#6b7280",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",fontFamily:"system-ui"},children:"버튼"})]})})]}),e.jsx("input",{placeholder:"또 다른 외부 입력",style:{padding:"8px 12px",border:"1px solid #d1d5db",borderRadius:"6px",marginTop:"16px",display:"block",fontFamily:"system-ui"}})]})};var g,h,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '기본',
  render: args => <div style={{
    fontFamily: 'system-ui',
    padding: '24px'
  }}>
      <p style={{
      fontSize: '13px',
      color: '#6b7280',
      marginBottom: '16px'
    }}>
        active={String(args.active)} 상태일 때 Tab 키를 누르면 포커스가 아래 영역 안에서만 순환합니다.
      </p>
      <input placeholder="바깥 입력 (포커스 탈출 테스트)" style={{
      padding: '8px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      marginBottom: '16px',
      display: 'block',
      width: '240px',
      fontFamily: 'system-ui'
    }} />
      <div style={{
      border: '2px dashed #3b82f6',
      borderRadius: '10px',
      padding: '20px',
      background: '#f0f7ff'
    }}>
        <div style={{
        fontSize: '12px',
        color: '#3b82f6',
        fontWeight: 600,
        marginBottom: '12px'
      }}>FocusTrap 영역</div>
        <FocusTrap {...args}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
            <input placeholder="첫 번째 입력" style={{
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            fontFamily: 'system-ui'
          }} />
            <input placeholder="두 번째 입력" style={{
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            fontFamily: 'system-ui'
          }} />
            <div style={{
            display: 'flex',
            gap: '8px'
          }}>
              <button style={{
              padding: '8px 16px',
              background: '#3b82f6',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontFamily: 'system-ui'
            }}>확인</button>
              <button style={{
              padding: '8px 16px',
              background: '#f3f4f6',
              color: '#374151',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              cursor: 'pointer',
              fontFamily: 'system-ui'
            }}>취소</button>
            </div>
          </div>
        </FocusTrap>
      </div>
    </div>
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var F,j,R;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '모달 포커스 트랩',
  parameters: {
    docs: {
      description: {
        story: '모달이 열리면 포커스가 내부에 갇히고, 닫히면 이전 포커스로 복원됩니다.'
      }
    }
  },
  render: () => <ModalDemo />
}`,...(R=(j=a.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var k,T,S;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '비활성 (포커스 자유)',
  parameters: {
    docs: {
      description: {
        story: 'active=false 상태에서는 포커스가 자유롭게 이동합니다.'
      }
    }
  },
  render: () => <div style={{
    fontFamily: 'system-ui',
    padding: '24px'
  }}>
      <input placeholder="외부 입력" style={{
      padding: '8px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      marginBottom: '16px',
      display: 'block',
      fontFamily: 'system-ui'
    }} />
      <div style={{
      border: '2px dashed #d1d5db',
      borderRadius: '10px',
      padding: '20px',
      background: '#fafafa'
    }}>
        <div style={{
        fontSize: '12px',
        color: '#9ca3af',
        fontWeight: 600,
        marginBottom: '12px'
      }}>FocusTrap (active=false)</div>
        <FocusTrap active={false}>
          <div style={{
          display: 'flex',
          gap: '8px'
        }}>
            <input placeholder="내부 입력" style={{
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            fontFamily: 'system-ui'
          }} />
            <button style={{
            padding: '8px 14px',
            background: '#6b7280',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontFamily: 'system-ui'
          }}>버튼</button>
          </div>
        </FocusTrap>
      </div>
      <input placeholder="또 다른 외부 입력" style={{
      padding: '8px 12px',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      marginTop: '16px',
      display: 'block',
      fontFamily: 'system-ui'
    }} />
    </div>
}`,...(S=(T=n.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};const L=["Default","ModalFocusTrap","Inactive"];export{i as Default,n as Inactive,a as ModalFocusTrap,L as __namedExportsOrder,M as default};
