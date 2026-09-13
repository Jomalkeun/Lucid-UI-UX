import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-BxXVWNx3.js";import{d as K}from"./reference-types-4ftiVeOu.js";import{c as X}from"./index-CkIaN0ex.js";import{c as h}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const Z=X(["flex shrink-0 cursor-pointer select-none items-center justify-center gap-2 rounded-full","bg-krds-primary-50 font-bold text-primary-foreground shadow-lg","transition-[transform,box-shadow] duration-150","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"].join(" "),{variants:{size:{sm:"text-xl",md:"text-2xl",lg:"text-[28px]"},variant:{circular:"p-0",extended:"px-5"}},compoundVariants:[{size:"sm",variant:"circular",class:"size-11"},{size:"md",variant:"circular",class:"size-14"},{size:"lg",variant:"circular",class:"size-[68px]"},{size:"sm",variant:"extended",class:"h-11"},{size:"md",variant:"extended",class:"h-14"},{size:"lg",variant:"extended",class:"h-[68px]"}],defaultVariants:{size:"md",variant:"circular"}}),ee={sm:"size-9 text-base",md:"size-10 text-lg",lg:"size-12 text-xl"},r=v.forwardRef(({icon:o="➕",label:a,color:i,size:k="md",position:s="bottom-right",actions:B=[],variant:$="circular",onClick:x},G)=>{const[b,F]=v.useState(!1),y=B.length>0,g=$==="extended"&&!!a,H=()=>{y?F(t=>!t):x==null||x()},A=t=>e.jsx("span",{className:"whitespace-nowrap rounded-md bg-black/75 px-2.5 py-1 text-krds-body-xs font-semibold text-primary-foreground",children:t.label});return e.jsxs("div",{className:h("absolute bottom-6 z-50 flex flex-col gap-2.5",s==="bottom-right"&&"right-6 items-end",s==="bottom-left"&&"left-6 items-start",s==="bottom-center"&&"left-1/2 -translate-x-1/2 items-center"),children:[b&&B.map((t,J)=>e.jsxs("div",{className:"flex items-center gap-2.5",style:{animation:`fabIn 0.2s ease ${J*.04}s both`},children:[t.label&&s!=="bottom-left"&&A(t),e.jsx("button",{type:"button",onClick:()=>{var j;(j=t.onClick)==null||j.call(t),F(!1)},"aria-label":t.label??t.key,className:h("flex shrink-0 cursor-pointer items-center justify-center rounded-full bg-card shadow-md","transition-transform duration-150","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",ee[k]),style:t.color?{backgroundColor:t.color}:void 0,children:t.icon}),t.label&&s==="bottom-left"&&A(t)]},t.key)),e.jsx("style",{children:"@keyframes fabIn { from { opacity: 0; transform: translateY(12px) scale(0.8) } to { opacity: 1; transform: translateY(0) scale(1) } }"}),e.jsxs("button",{ref:G,type:"button",onClick:H,"aria-label":g?void 0:a??"플로팅 액션","aria-expanded":y?b:void 0,className:h(Z({size:k,variant:g?"extended":"circular"}),b&&y&&"rotate-45"),style:i?{backgroundColor:i}:void 0,children:[e.jsx("span",{children:o}),g&&e.jsx("span",{className:"text-krds-body-sm",children:a})]})]})});r.displayName="FAB";r.__docgenInfo={description:"",methods:[],displayName:"FAB",props:{icon:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'➕'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},position:{required:!1,tsType:{name:"union",raw:"'bottom-right' | 'bottom-left' | 'bottom-center'",elements:[{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-center'"}]},description:"",defaultValue:{value:"'bottom-right'",computed:!1}},actions:{required:!1,tsType:{name:"Array",elements:[{name:"FABAction"}],raw:"FABAction[]"},description:"",defaultValue:{value:"[]",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'circular' | 'extended'",elements:[{name:"literal",value:"'circular'"},{name:"literal",value:"'extended'"}]},description:"",defaultValue:{value:"'circular'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const oe=K([{library:"Flowbite",component:"Speed Dial",url:"https://flowbite.com/docs/components/speed-dial/",usedFor:["comparison"],relation:"compared"},{library:"daisyUI",component:"FAB / Speed Dial",url:"https://daisyui.com/components/fab/",usedFor:["comparison"],relation:"compared"},{library:"Ant Design",component:"FloatButton",url:"https://ant.design/components/float-button/",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Floating Action Button",url:"https://quasar.dev/vue-components/floating-action-button",usedFor:["comparison"],relation:"compared"},{library:"Ionic",component:"Floating Action Button",url:"https://ionicframework.com/docs/api/fab",usedFor:["behavior","accessibility","api"],relation:"compared"}]),ce={title:"Atoms/Inputs/FAB",component:r,tags:["autodocs","ref:daisy-ui","ref:ant-design","ref:flowbite","ref:vuetify","ref:mui","ref:quasar","ref:ionic"],parameters:{references:oe,docs:{description:{component:"\n## FAB / Speed Dial\n\n화면 우하단에 고정된 플로팅 액션 버튼(FAB)입니다.\n단일 FAB는 페이지의 주요 액션을 나타내며, Speed Dial 형태로 확장하면 연관 액션들을 펼쳐 보여줍니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `icon` | `string` | `'➕'` | 메인 아이콘 |\n| `color` | `string` | `'#3b82f6'` | 배경 색상 |\n| `size` | `'sm'\\|'md'\\|'lg'` | `'md'` | 크기 |\n| `position` | `'bottom-right'\\|'bottom-left'\\|'bottom-center'` | `'bottom-right'` | 위치 |\n| `variant` | `'circular'\\|'extended'` | `'circular'` | 모양 |\n| `actions` | `FABAction[]` | `[]` | Speed Dial 액션 목록 |\n        "}}},argTypes:{size:{control:"select",options:["sm","md","lg"],table:{category:"Appearance"}},variant:{control:"select",options:["circular","extended"],table:{category:"Appearance"}},position:{control:"select",options:["bottom-right","bottom-left","bottom-center"],table:{category:"Layout"}},color:{control:"color",table:{category:"Appearance"}},icon:{control:"text",table:{category:"Content"}},label:{control:"text",table:{category:"Content"}}},args:{icon:"➕",color:"#3b82f6",size:"md",position:"bottom-right",variant:"circular"}};function n({children:o,height:a=220}){return e.jsx("div",{style:{position:"relative",width:"100%",maxWidth:"480px",height:a,background:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px",overflow:"hidden"},children:o})}const l={name:"기본 FAB",render:o=>e.jsxs(n,{children:[e.jsx("div",{style:{padding:"20px",fontFamily:"system-ui",color:"#6b7280",fontSize:"14px"},children:"우하단 FAB를 클릭해보세요"}),e.jsx(r,{...o,onClick:()=>alert("FAB 클릭!")})]})},c={name:"Speed Dial",parameters:{docs:{description:{story:"FAB를 클릭하면 연관 액션들이 펼쳐지는 Speed Dial입니다."}}},render:()=>e.jsxs(n,{height:300,children:[e.jsx("div",{style:{padding:"20px",fontFamily:"system-ui",color:"#6b7280",fontSize:"14px"},children:"+ 버튼을 클릭하세요"}),e.jsx(r,{icon:"➕",color:"#3b82f6",actions:[{key:"photo",icon:"📷",label:"사진",color:"#fff",onClick:()=>alert("사진")},{key:"file",icon:"📄",label:"파일",color:"#fff",onClick:()=>alert("파일")},{key:"link",icon:"🔗",label:"링크",color:"#fff",onClick:()=>alert("링크")}]})]})},d={name:"Extended FAB",parameters:{docs:{description:{story:"아이콘 + 텍스트 레이블이 있는 Extended FAB입니다."}}},render:()=>e.jsx(n,{children:e.jsx(r,{icon:"✏️",label:"새 게시물 작성",variant:"extended",color:"#10b981"})})},p={name:"크기 변형",parameters:{docs:{description:{story:"sm, md, lg 크기 비교입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",padding:"16px"},children:["sm","md","lg"].map(o=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{position:"relative",width:"100px",height:"100px",background:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px",marginBottom:"8px"},children:e.jsx(r,{size:o,color:"#8b5cf6"})}),e.jsx("span",{style:{fontSize:"12px",color:"#9ca3af",fontFamily:"system-ui"},children:o})]},o))})},m={name:"색상 변형",parameters:{docs:{description:{story:"다양한 색상의 FAB입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",padding:"16px"},children:[{color:"#3b82f6",icon:"✉️"},{color:"#10b981",icon:"✅"},{color:"#ef4444",icon:"❤️"},{color:"#f59e0b",icon:"⭐"},{color:"#8b5cf6",icon:"🎵"}].map(({color:o,icon:a})=>e.jsx("div",{style:{position:"relative",width:"88px",height:"88px",background:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:e.jsx(r,{color:o,icon:a,size:"sm"})},o))})};function te(){const[o,a]=v.useState("bottom-right");return e.jsxs("div",{style:{fontFamily:"system-ui"},children:[e.jsx("div",{style:{display:"flex",gap:"8px",marginBottom:"12px"},children:["bottom-right","bottom-left","bottom-center"].map(i=>e.jsx("button",{onClick:()=>a(i),style:{padding:"4px 10px",fontSize:"12px",background:o===i?"#3b82f6":"#f3f4f6",color:o===i?"#fff":"#374151",border:"none",borderRadius:"6px",cursor:"pointer",fontFamily:"system-ui"},children:i},i))}),e.jsx(n,{height:240,children:e.jsx(r,{position:o,color:"#3b82f6",icon:"🏠"})})]})}const f={name:"위치 변형",parameters:{docs:{description:{story:"FAB의 위치를 bottom-right, bottom-left, bottom-center로 설정합니다."}}},render:()=>e.jsx(te,{})},u={name:"소셜 앱 예시",parameters:{docs:{description:{story:"소셜 앱 스타일의 Speed Dial FAB입니다."}}},render:()=>e.jsxs(n,{height:320,children:[e.jsxs("div",{style:{padding:"20px",fontFamily:"system-ui"},children:[e.jsx("div",{style:{fontSize:"16px",fontWeight:700,color:"#111",marginBottom:"8px"},children:"타임라인"}),["게시물 1","게시물 2","게시물 3"].map(o=>e.jsx("div",{style:{padding:"10px",background:"#fff",borderRadius:"8px",marginBottom:"8px",fontSize:"13px",color:"#6b7280",border:"1px solid #e5e7eb"},children:o},o))]}),e.jsx(r,{icon:"✏️",color:"#1da1f2",actions:[{key:"photo",icon:"🖼️",label:"이미지",color:"#10b981",onClick:()=>alert("이미지 업로드")},{key:"video",icon:"🎬",label:"동영상",color:"#ef4444",onClick:()=>alert("동영상 업로드")},{key:"poll",icon:"📊",label:"설문",color:"#f59e0b",onClick:()=>alert("설문 만들기")},{key:"write",icon:"✍️",label:"글쓰기",color:"#8b5cf6",onClick:()=>alert("글쓰기")}]})]})};var S,z,w;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '기본 FAB',
  render: args => <DemoBox>
      <div style={{
      padding: '20px',
      fontFamily: 'system-ui',
      color: '#6b7280',
      fontSize: '14px'
    }}>우하단 FAB를 클릭해보세요</div>
      <FAB {...args} onClick={() => alert('FAB 클릭!')} />
    </DemoBox>
}`,...(w=(z=l.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var D,C,R;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Speed Dial',
  parameters: {
    docs: {
      description: {
        story: 'FAB를 클릭하면 연관 액션들이 펼쳐지는 Speed Dial입니다.'
      }
    }
  },
  render: () => <DemoBox height={300}>
      <div style={{
      padding: '20px',
      fontFamily: 'system-ui',
      color: '#6b7280',
      fontSize: '14px'
    }}>+ 버튼을 클릭하세요</div>
      <FAB icon="➕" color="#3b82f6" actions={[{
      key: 'photo',
      icon: '📷',
      label: '사진',
      color: '#fff',
      onClick: () => alert('사진')
    }, {
      key: 'file',
      icon: '📄',
      label: '파일',
      color: '#fff',
      onClick: () => alert('파일')
    }, {
      key: 'link',
      icon: '🔗',
      label: '링크',
      color: '#fff',
      onClick: () => alert('링크')
    }]} />
    </DemoBox>
}`,...(R=(C=c.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var V,q,T;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Extended FAB',
  parameters: {
    docs: {
      description: {
        story: '아이콘 + 텍스트 레이블이 있는 Extended FAB입니다.'
      }
    }
  },
  render: () => <DemoBox>
      <FAB icon="✏️" label="새 게시물 작성" variant="extended" color="#10b981" />
    </DemoBox>
}`,...(T=(q=d.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var E,N,P;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '크기 변형',
  parameters: {
    docs: {
      description: {
        story: 'sm, md, lg 크기 비교입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    padding: '16px'
  }}>
      {(['sm', 'md', 'lg'] as const).map(size => <div key={size} style={{
      textAlign: 'center'
    }}>
          <div style={{
        position: 'relative',
        width: '100px',
        height: '100px',
        background: '#f9fafb',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        marginBottom: '8px'
      }}>
            <FAB size={size} color="#8b5cf6" />
          </div>
          <span style={{
        fontSize: '12px',
        color: '#9ca3af',
        fontFamily: 'system-ui'
      }}>{size}</span>
        </div>)}
    </div>
}`,...(P=(N=p.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var W,I,_;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '색상 변형',
  parameters: {
    docs: {
      description: {
        story: '다양한 색상의 FAB입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    padding: '16px'
  }}>
      {[{
      color: '#3b82f6',
      icon: '✉️'
    }, {
      color: '#10b981',
      icon: '✅'
    }, {
      color: '#ef4444',
      icon: '❤️'
    }, {
      color: '#f59e0b',
      icon: '⭐'
    }, {
      color: '#8b5cf6',
      icon: '🎵'
    }].map(({
      color,
      icon
    }) => <div key={color} style={{
      position: 'relative',
      width: '88px',
      height: '88px',
      background: '#f9fafb',
      border: '1px solid #e5e7eb',
      borderRadius: '12px'
    }}>
          <FAB color={color} icon={icon} size="sm" />
        </div>)}
    </div>
}`,...(_=(I=m.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var L,O,Y;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '위치 변형',
  parameters: {
    docs: {
      description: {
        story: 'FAB의 위치를 bottom-right, bottom-left, bottom-center로 설정합니다.'
      }
    }
  },
  render: () => <PositionDemo />
}`,...(Y=(O=f.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var M,Q,U;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: '소셜 앱 예시',
  parameters: {
    docs: {
      description: {
        story: '소셜 앱 스타일의 Speed Dial FAB입니다.'
      }
    }
  },
  render: () => <DemoBox height={320}>
      <div style={{
      padding: '20px',
      fontFamily: 'system-ui'
    }}>
        <div style={{
        fontSize: '16px',
        fontWeight: 700,
        color: '#111',
        marginBottom: '8px'
      }}>타임라인</div>
        {['게시물 1', '게시물 2', '게시물 3'].map(t => <div key={t} style={{
        padding: '10px',
        background: '#fff',
        borderRadius: '8px',
        marginBottom: '8px',
        fontSize: '13px',
        color: '#6b7280',
        border: '1px solid #e5e7eb'
      }}>{t}</div>)}
      </div>
      <FAB icon="✏️" color="#1da1f2" actions={[{
      key: 'photo',
      icon: '🖼️',
      label: '이미지',
      color: '#10b981',
      onClick: () => alert('이미지 업로드')
    }, {
      key: 'video',
      icon: '🎬',
      label: '동영상',
      color: '#ef4444',
      onClick: () => alert('동영상 업로드')
    }, {
      key: 'poll',
      icon: '📊',
      label: '설문',
      color: '#f59e0b',
      onClick: () => alert('설문 만들기')
    }, {
      key: 'write',
      icon: '✍️',
      label: '글쓰기',
      color: '#8b5cf6',
      onClick: () => alert('글쓰기')
    }]} />
    </DemoBox>
}`,...(U=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const de=["Default","SpeedDial","Extended","SizeVariants","ColorVariants","PositionVariants","SocialApp"];export{m as ColorVariants,l as Default,d as Extended,f as PositionVariants,p as SizeVariants,u as SocialApp,c as SpeedDial,de as __namedExportsOrder,ce as default};
