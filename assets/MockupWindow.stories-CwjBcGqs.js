import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as I}from"./reference-types-4ftiVeOu.js";function o({title:t="Window",children:n,width:i="100%",height:u=320,theme:s="macos",style:D}){const r=s==="dark",x=s==="macos"||s==="light",a=s==="windows",z=r?"#2d2d2d":a?"#0078d4":"#e5e7eb",F=a?"#fff":r?"#ccc":"#374151";return e.jsxs("div",{style:{width:i,borderRadius:x?"10px":"4px",overflow:"hidden",boxShadow:"0 8px 30px rgba(0,0,0,0.15)",border:`1px solid ${r?"#444":"#d1d5db"}`,fontFamily:"system-ui",display:"flex",flexDirection:"column",...D},children:[e.jsxs("div",{style:{background:z,padding:"8px 12px",display:"flex",alignItems:"center",gap:"10px",flexShrink:0,userSelect:"none"},children:[x&&e.jsx("div",{style:{display:"flex",gap:"6px"},children:["#ef4444","#f59e0b","#22c55e"].map(d=>e.jsx("div",{style:{width:"12px",height:"12px",borderRadius:"50%",background:d}},d))}),a&&e.jsx("div",{style:{width:"14px",height:"14px",background:"rgba(255,255,255,0.3)",borderRadius:"2px"}}),e.jsx("div",{style:{flex:1,textAlign:"center",fontSize:"13px",fontWeight:600,color:F},children:t}),a&&e.jsx("div",{style:{display:"flex",gap:"2px"},children:["─","□","✕"].map((d,g)=>e.jsx("div",{style:{width:"28px",height:"20px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",color:"#fff",cursor:"pointer",background:g===2?"#c42b1c":"transparent"},children:d},g))})]}),e.jsx("div",{style:{height:typeof u=="number"?`${u}px`:u,background:r?"#1a1a1a":"#fff",overflowY:"auto"},children:n})]})}o.__docgenInfo={description:"",methods:[],displayName:"MockupWindow",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Window'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"'100%'",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"320",computed:!1}},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark' | 'macos' | 'windows'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'macos'"},{name:"literal",value:"'windows'"}]},description:"",defaultValue:{value:"'macos'",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const C=I([{library:"daisyUI",component:"Window mockup",url:"https://daisyui.com/components/mockup-window/",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"Device Mockups",url:"https://flowbite.com/docs/components/device-mockups/",usedFor:["comparison"],relation:"compared"}]),E={title:"Organisms/Mockup/MockupWindow",component:o,tags:["autodocs","ref:daisy-ui","ref:flowbite"],parameters:{references:C,docs:{description:{component:"\n## MockupWindow\n\nOS 데스크톱 창 UI를 모방한 목업 프레임 컴포넌트입니다.\n타이틀 바와 윈도우 컨트롤(닫기/최소화/최대화) 버튼이 포함된 OS 창 외형 안에 콘텐츠를 시연합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `title` | `string` | `'Window'` | 창 제목 |\n| `theme` | `'macos'\\|'windows'\\|'light'\\|'dark'` | `'macos'` | OS 스타일 |\n| `width` | `number\\|string` | `'100%'` | 너비 |\n| `height` | `number\\|string` | `320` | 높이 |\n        "}}},argTypes:{title:{control:"text",table:{category:"Content"}},theme:{control:"select",options:["macos","windows","light","dark"],table:{category:"Appearance"}},height:{control:{type:"range",min:160,max:500,step:20},table:{category:"Appearance"}}},args:{title:"My App",theme:"macos",height:280}},l={name:"macOS 스타일",render:t=>e.jsx(o,{...t,title:"Finder",children:e.jsx("div",{style:{padding:"20px",fontFamily:"system-ui"},children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"12px"},children:["📁 Documents","🖼️ Images","🎵 Music","🎬 Movies","💾 Downloads","🗑️ Trash","💻 Desktop","☁️ iCloud"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px",padding:"12px",borderRadius:"8px",cursor:"pointer",fontSize:"12px",color:"#374151"},onMouseEnter:i=>i.currentTarget.style.background="#f3f4f6",onMouseLeave:i=>i.currentTarget.style.background="transparent",children:[e.jsx("span",{style:{fontSize:"28px"},children:n.split(" ")[0]}),e.jsx("span",{children:n.split(" ").slice(1).join(" ")})]},n))})})})},p={name:"Windows 스타일",args:{theme:"windows",title:"File Explorer",height:280},render:t=>e.jsx(o,{...t,children:e.jsxs("div",{style:{fontFamily:"system-ui",fontSize:"13px"},children:[e.jsx("div",{style:{background:"#f3f3f3",padding:"4px 8px",borderBottom:"1px solid #e5e7eb",display:"flex",gap:"8px"},children:["새 폴더","이름 변경","삭제","공유"].map(n=>e.jsx("button",{style:{padding:"3px 8px",background:"none",border:"1px solid #d1d5db",borderRadius:"3px",cursor:"pointer",fontSize:"12px"},children:n},n))}),e.jsx("div",{style:{padding:"8px",display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:"8px"},children:["📁 내 PC","📁 다운로드","📁 문서","🖼️ 사진","🎵 음악","🎬 동영상","💾 바탕화면","☁️ OneDrive"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"3px",padding:"8px",borderRadius:"4px",cursor:"pointer",fontSize:"11px",color:"#374151"},onMouseEnter:i=>i.currentTarget.style.background="#e5f0ff",onMouseLeave:i=>i.currentTarget.style.background="transparent",children:[e.jsx("span",{style:{fontSize:"24px"},children:n.split(" ")[0]}),e.jsx("span",{style:{textAlign:"center"},children:n.split(" ").slice(1).join(" ")})]},n))})]})})},c={name:"다크 테마",args:{theme:"dark",title:"Terminal",height:240},render:t=>e.jsx(o,{...t,children:e.jsxs("div",{style:{padding:"16px",fontFamily:"monospace",fontSize:"13px",background:"#0d1117",height:"100%",lineHeight:1.6},children:[[{prompt:"~/project",cmd:"npm run dev",color:"#22c55e"},{output:"> vite"},{output:""},{output:"VITE v6.0.0  ready in 312ms",color:"#22c55e"},{output:""},{output:"  ➜  Local:   http://localhost:5173/",color:"#60a5fa"},{output:"  ➜  Network: use --host to expose",color:"#9ca3af"}].map((n,i)=>e.jsx("div",{style:{color:n.color??"#c9d1d9"},children:"prompt"in n?e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{color:"#22c55e"},children:"❯ "}),e.jsxs("span",{style:{color:"#9ca3af"},children:[n.prompt," "]}),e.jsx("span",{style:{color:"#60a5fa"},children:"$ "}),e.jsx("span",{children:n.cmd})]}):n.output},i)),e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("span",{style:{color:"#22c55e"},children:"❯ "}),e.jsx("span",{style:{background:"#c9d1d9",width:"8px",height:"16px",display:"inline-block",marginLeft:"4px",animation:"blink 1s step-end infinite"}}),e.jsx("style",{children:"@keyframes blink { 50% { opacity: 0 } }"})]})]})})},m={name:"테마 비교",parameters:{docs:{description:{story:"macOS, Windows, 다크 테마를 나란히 비교합니다."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[{theme:"macos",title:"macOS Style"},{theme:"windows",title:"Windows Style"},{theme:"dark",title:"Dark Style"}].map(({theme:t,title:n})=>e.jsx(o,{theme:t,title:n,height:120,children:e.jsxs("div",{style:{padding:"16px",fontFamily:"system-ui",fontSize:"14px",color:t==="dark"?"#c9d1d9":"#374151"},children:[n," 창 예시입니다."]})},t))})};var y,f,h;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'macOS 스타일',
  render: args => <MockupWindow {...args} title="Finder">
      <div style={{
      padding: '20px',
      fontFamily: 'system-ui'
    }}>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '12px'
      }}>
          {['📁 Documents', '🖼️ Images', '🎵 Music', '🎬 Movies', '💾 Downloads', '🗑️ Trash', '💻 Desktop', '☁️ iCloud'].map(item => <div key={item} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          padding: '12px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '12px',
          color: '#374151'
        }} onMouseEnter={e => e.currentTarget.style.background = '#f3f4f6'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
              <span style={{
            fontSize: '28px'
          }}>{item.split(' ')[0]}</span>
              <span>{item.split(' ').slice(1).join(' ')}</span>
            </div>)}
        </div>
      </div>
    </MockupWindow>
}`,...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var k,v,b;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Windows 스타일',
  args: {
    theme: 'windows',
    title: 'File Explorer',
    height: 280
  },
  render: args => <MockupWindow {...args}>
      <div style={{
      fontFamily: 'system-ui',
      fontSize: '13px'
    }}>
        <div style={{
        background: '#f3f3f3',
        padding: '4px 8px',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        gap: '8px'
      }}>
          {['새 폴더', '이름 변경', '삭제', '공유'].map(item => <button key={item} style={{
          padding: '3px 8px',
          background: 'none',
          border: '1px solid #d1d5db',
          borderRadius: '3px',
          cursor: 'pointer',
          fontSize: '12px'
        }}>{item}</button>)}
        </div>
        <div style={{
        padding: '8px',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '8px'
      }}>
          {['📁 내 PC', '📁 다운로드', '📁 문서', '🖼️ 사진', '🎵 음악', '🎬 동영상', '💾 바탕화면', '☁️ OneDrive'].map(item => <div key={item} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3px',
          padding: '8px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '11px',
          color: '#374151'
        }} onMouseEnter={e => e.currentTarget.style.background = '#e5f0ff'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
              <span style={{
            fontSize: '24px'
          }}>{item.split(' ')[0]}</span>
              <span style={{
            textAlign: 'center'
          }}>{item.split(' ').slice(1).join(' ')}</span>
            </div>)}
        </div>
      </div>
    </MockupWindow>
}`,...(b=(v=p.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var w,j,S;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '다크 테마',
  args: {
    theme: 'dark',
    title: 'Terminal',
    height: 240
  },
  render: args => <MockupWindow {...args}>
      <div style={{
      padding: '16px',
      fontFamily: 'monospace',
      fontSize: '13px',
      background: '#0d1117',
      height: '100%',
      lineHeight: 1.6
    }}>
        {[{
        prompt: '~/project',
        cmd: 'npm run dev',
        color: '#22c55e'
      }, {
        output: '> vite'
      }, {
        output: ''
      }, {
        output: 'VITE v6.0.0  ready in 312ms',
        color: '#22c55e'
      }, {
        output: ''
      }, {
        output: '  ➜  Local:   http://localhost:5173/',
        color: '#60a5fa'
      }, {
        output: '  ➜  Network: use --host to expose',
        color: '#9ca3af'
      }].map((line, i) => <div key={i} style={{
        color: line.color ?? '#c9d1d9'
      }}>
            {'prompt' in line ? <><span style={{
            color: '#22c55e'
          }}>❯ </span><span style={{
            color: '#9ca3af'
          }}>{line.prompt} </span><span style={{
            color: '#60a5fa'
          }}>$ </span><span>{line.cmd}</span></> : line.output}
          </div>)}
        <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
          <span style={{
          color: '#22c55e'
        }}>❯ </span>
          <span style={{
          background: '#c9d1d9',
          width: '8px',
          height: '16px',
          display: 'inline-block',
          marginLeft: '4px',
          animation: 'blink 1s step-end infinite'
        }} />
          <style>{\`@keyframes blink { 50% { opacity: 0 } }\`}</style>
        </div>
      </div>
    </MockupWindow>
}`,...(S=(j=c.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var T,M,W;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '테마 비교',
  parameters: {
    docs: {
      description: {
        story: 'macOS, Windows, 다크 테마를 나란히 비교합니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      {[{
      theme: 'macos' as const,
      title: 'macOS Style'
    }, {
      theme: 'windows' as const,
      title: 'Windows Style'
    }, {
      theme: 'dark' as const,
      title: 'Dark Style'
    }].map(({
      theme,
      title
    }) => <MockupWindow key={theme} theme={theme} title={title} height={120}>
          <div style={{
        padding: '16px',
        fontFamily: 'system-ui',
        fontSize: '14px',
        color: theme === 'dark' ? '#c9d1d9' : '#374151'
      }}>
            {title} 창 예시입니다.
          </div>
        </MockupWindow>)}
    </div>
}`,...(W=(M=m.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};const L=["Default","WindowsTheme","DarkTheme","ThemeComparison"];export{c as DarkTheme,l as Default,m as ThemeComparison,p as WindowsTheme,L as __namedExportsOrder,E as default};
