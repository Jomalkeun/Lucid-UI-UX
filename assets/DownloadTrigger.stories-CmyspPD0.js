import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as ae}from"./reference-types-4ftiVeOu.js";import{r as j}from"./index-BxXVWNx3.js";import{c as se}from"./index-CkIaN0ex.js";import{c as ne}from"./utils-DCADjnpI.js";import{B as re}from"./button-B_kt0lNs.js";import{C as oe}from"./check-CvnDgXMx.js";import{D as te}from"./download-DHeW_uee.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DtBajwEi.js";import"./loader-circle-Db56uVXG.js";import"./createLucideIcon-Ct87QT5c.js";const le={solid:"primary",outline:"secondary",ghost:"text"},ie={sm:"small",md:"medium",lg:"large"},de=se("",{variants:{variant:{solid:"",outline:"bg-transparent",ghost:"hover:no-underline"},done:{true:"",false:""}},compoundVariants:[{variant:"solid",done:!0,class:"bg-krds-success-base hover:bg-krds-success-base active:bg-krds-success-base"},{variant:"outline",done:!0,class:"border-krds-success-base text-krds-success-base hover:bg-krds-success-5 active:bg-krds-success-10"},{variant:"ghost",done:!0,class:"text-krds-success-base hover:bg-krds-success-5 active:bg-krds-success-10"}],defaultVariants:{variant:"solid",done:!1}}),n=j.forwardRef(({href:a,data:s,filename:t="download",mimeType:J="text/plain",children:K,label:_="다운로드",loadingLabel:H="준비 중...",doneLabel:G="완료!",size:Q="md",variant:l="solid",color:o,disabled:h=!1,onDownload:y},X)=>{const[x,b]=j.useState("idle"),Y=async()=>{if(!(h||x!=="idle")){if(b("loading"),await new Promise(r=>setTimeout(r,600)),a){const r=document.createElement("a");r.href=a,r.download=t,r.click()}else if(s){const r=s instanceof Blob?s:new Blob([s],{type:J}),T=URL.createObjectURL(r),v=document.createElement("a");v.href=T,v.download=t,v.click(),URL.revokeObjectURL(T)}y==null||y(),b("done"),setTimeout(()=>b("idle"),2e3)}},w=x==="loading",i=x==="done",Z=K??(w?H:i?G:_),ee=o&&!i?l==="solid"?{backgroundColor:o,borderColor:o}:l==="outline"?{color:o,borderColor:o}:{color:o}:void 0;return e.jsx(re,{ref:X,variant:le[l],size:ie[Q],disabled:h,loading:w,iconLeft:i?e.jsx(oe,{"aria-hidden":"true"}):e.jsx(te,{"aria-hidden":"true"}),onClick:Y,className:ne(de({variant:l,done:i})),style:ee,children:Z})});n.displayName="DownloadTrigger";n.__docgenInfo={description:"",methods:[],displayName:"DownloadTrigger",props:{href:{required:!1,tsType:{name:"string"},description:""},data:{required:!1,tsType:{name:"union",raw:"string | Blob",elements:[{name:"string"},{name:"Blob"}]},description:""},filename:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'download'",computed:!1}},mimeType:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'text/plain'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'다운로드'",computed:!1}},loadingLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'준비 중...'",computed:!1}},doneLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'완료!'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'outline' | 'ghost'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'solid'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ce=ae([{library:"Chakra UI",component:"Download Trigger",url:"https://www.chakra-ui.com/docs/components/download-trigger",usedFor:["comparison"],relation:"compared"}]),je={title:"Atoms/Inputs/DownloadTrigger",component:n,tags:["autodocs","ref:chakra-ui"],parameters:{references:ce,docs:{description:{component:"\n## DownloadTrigger\n\n파일 다운로드를 트리거하는 버튼 컴포넌트입니다.\nURL 또는 Blob 데이터를 받아 브라우저 다운로드를 유발하며, 다운로드 중 로딩 상태를 표시합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `href` | `string` | - | 다운로드 URL |\n| `data` | `string\\|Blob` | - | 다운로드할 데이터 |\n| `filename` | `string` | `'download'` | 저장 파일명 |\n| `mimeType` | `string` | `'text/plain'` | MIME 타입 |\n| `label` | `string` | `'다운로드'` | 버튼 텍스트 |\n| `size` | `'sm'\\|'md'\\|'lg'` | `'md'` | 크기 |\n| `variant` | `'solid'\\|'outline'\\|'ghost'` | `'solid'` | 스타일 |\n| `color` | `string` | `'#3b82f6'` | 색상 |\n| `disabled` | `boolean` | `false` | 비활성화 |\n        "}}},argTypes:{size:{control:"select",options:["sm","md","lg"],table:{category:"Appearance"}},variant:{control:"select",options:["solid","outline","ghost"],table:{category:"Appearance"}},color:{control:"color",table:{category:"Appearance"}},disabled:{control:"boolean",table:{category:"State"}},label:{control:"text",table:{category:"Content"}},filename:{control:"text",table:{category:"Content"}}},args:{label:"파일 다운로드",size:"md",variant:"solid",color:"#3b82f6",disabled:!1,filename:"sample.txt",data:"Hello, World! 이것은 샘플 파일입니다."}},d={name:"기본",render:a=>e.jsx("div",{style:{padding:"24px",fontFamily:"system-ui"},children:e.jsx(n,{...a})})},c={name:"크기 변형",parameters:{docs:{description:{story:"sm, md, lg 크기 비교입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"12px",alignItems:"center",padding:"24px",fontFamily:"system-ui",flexWrap:"wrap"},children:["sm","md","lg"].map(a=>e.jsx(n,{size:a,label:`다운로드 (${a})`,data:"sample",filename:`file-${a}.txt`},a))})},p={name:"변형 비교",parameters:{docs:{description:{story:"solid, outline, ghost 스타일 변형입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"12px",alignItems:"center",padding:"24px",fontFamily:"system-ui",flexWrap:"wrap"},children:["solid","outline","ghost"].map(a=>e.jsx(n,{variant:a,label:a,data:"sample",filename:"file.txt"},a))})},m={name:"색상 변형",parameters:{docs:{description:{story:"다양한 색상의 DownloadTrigger입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"24px",fontFamily:"system-ui"},children:[{color:"#3b82f6",label:"보고서 다운로드",file:"report.txt"},{color:"#10b981",label:"CSV 내보내기",file:"data.csv"},{color:"#ef4444",label:"로그 파일",file:"error.log"},{color:"#f59e0b",label:"설정 백업",file:"config.json"},{color:"#8b5cf6",label:"테마 다운로드",file:"theme.css"}].map(({color:a,label:s,file:t})=>e.jsx(n,{color:a,label:s,filename:t,data:`Sample content for ${t}`},a))})},f={name:"텍스트 데이터 다운로드",parameters:{docs:{description:{story:"문자열 데이터를 직접 다운로드하는 예시입니다."}}},render:()=>e.jsxs("div",{style:{padding:"24px",fontFamily:"system-ui",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(n,{data:"이름,나이,이메일\\n홍길동,30,hong@example.com\\n김철수,25,kim@example.com",filename:"users.csv",mimeType:"text/csv",label:"CSV 파일 다운로드",color:"#10b981"}),e.jsx(n,{data:JSON.stringify({name:"홍길동",version:"1.0.0",settings:{theme:"dark",lang:"ko"}},null,2),filename:"config.json",mimeType:"application/json",label:"JSON 설정 다운로드",color:"#f59e0b"}),e.jsx(n,{data:"# 제목\\n\\n이것은 마크다운 파일입니다.\\n\\n- 항목 1\\n- 항목 2",filename:"README.md",mimeType:"text/markdown",label:"README 다운로드",color:"#8b5cf6"})]})},u={name:"비활성화",parameters:{docs:{description:{story:"비활성화 상태의 DownloadTrigger입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"12px",padding:"24px",fontFamily:"system-ui",flexWrap:"wrap"},children:["solid","outline","ghost"].map(a=>e.jsx(n,{variant:a,disabled:!0,label:`비활성 (${a})`,data:"x"},a))})},g={name:"파일 카드 패널",parameters:{docs:{description:{story:"파일 목록에서 각각 다운로드하는 UI 예시입니다."}}},render:()=>{const a=[{name:"2024 연간 보고서.pdf",size:"2.4 MB",type:"📄",color:"#ef4444",data:"Annual Report 2024"},{name:"사용자 데이터.csv",size:"156 KB",type:"📊",color:"#10b981",data:`id,name
1,홍길동`},{name:"제품 이미지.zip",size:"18.2 MB",type:"📦",color:"#3b82f6",data:"image data"},{name:"백업 설정.json",size:"4 KB",type:"⚙️",color:"#f59e0b",data:'{"version":1}'}];return e.jsx("div",{style:{maxWidth:"480px",display:"flex",flexDirection:"column",gap:"8px",fontFamily:"system-ui"},children:a.map(s=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"12px 16px",background:"#fff",border:"1px solid #e5e7eb",borderRadius:"10px"},children:[e.jsx("span",{style:{fontSize:"24px"},children:s.type}),e.jsxs("div",{style:{flex:1,minWidth:0},children:[e.jsx("div",{style:{fontSize:"14px",fontWeight:600,color:"#111",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:s.name}),e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af"},children:s.size})]}),e.jsx(n,{data:s.data,filename:s.name,label:"받기",size:"sm",color:s.color,variant:"outline"})]},s.name))})}};var D,k,z;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '기본',
  render: args => <div style={{
    padding: '24px',
    fontFamily: 'system-ui'
  }}>
      <DownloadTrigger {...args} />
    </div>
}`,...(z=(k=d.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var S,R,V;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
    gap: '12px',
    alignItems: 'center',
    padding: '24px',
    fontFamily: 'system-ui',
    flexWrap: 'wrap'
  }}>
      {(['sm', 'md', 'lg'] as const).map(size => <DownloadTrigger key={size} size={size} label={\`다운로드 (\${size})\`} data="sample" filename={\`file-\${size}.txt\`} />)}
    </div>
}`,...(V=(R=c.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var C,F,B;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '변형 비교',
  parameters: {
    docs: {
      description: {
        story: 'solid, outline, ghost 스타일 변형입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    padding: '24px',
    fontFamily: 'system-ui',
    flexWrap: 'wrap'
  }}>
      {(['solid', 'outline', 'ghost'] as const).map(variant => <DownloadTrigger key={variant} variant={variant} label={variant} data="sample" filename="file.txt" />)}
    </div>
}`,...(B=(F=p.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var E,q,W;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '색상 변형',
  parameters: {
    docs: {
      description: {
        story: '다양한 색상의 DownloadTrigger입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '24px',
    fontFamily: 'system-ui'
  }}>
      {[{
      color: '#3b82f6',
      label: '보고서 다운로드',
      file: 'report.txt'
    }, {
      color: '#10b981',
      label: 'CSV 내보내기',
      file: 'data.csv'
    }, {
      color: '#ef4444',
      label: '로그 파일',
      file: 'error.log'
    }, {
      color: '#f59e0b',
      label: '설정 백업',
      file: 'config.json'
    }, {
      color: '#8b5cf6',
      label: '테마 다운로드',
      file: 'theme.css'
    }].map(({
      color,
      label,
      file
    }) => <DownloadTrigger key={color} color={color} label={label} filename={file} data={\`Sample content for \${file}\`} />)}
    </div>
}`,...(W=(q=m.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var I,M,A;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '텍스트 데이터 다운로드',
  parameters: {
    docs: {
      description: {
        story: '문자열 데이터를 직접 다운로드하는 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '24px',
    fontFamily: 'system-ui',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <DownloadTrigger data="이름,나이,이메일\\n홍길동,30,hong@example.com\\n김철수,25,kim@example.com" filename="users.csv" mimeType="text/csv" label="CSV 파일 다운로드" color="#10b981" />
      <DownloadTrigger data={JSON.stringify({
      name: '홍길동',
      version: '1.0.0',
      settings: {
        theme: 'dark',
        lang: 'ko'
      }
    }, null, 2)} filename="config.json" mimeType="application/json" label="JSON 설정 다운로드" color="#f59e0b" />
      <DownloadTrigger data="# 제목\\n\\n이것은 마크다운 파일입니다.\\n\\n- 항목 1\\n- 항목 2" filename="README.md" mimeType="text/markdown" label="README 다운로드" color="#8b5cf6" />
    </div>
}`,...(A=(M=f.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var L,N,O;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '비활성화',
  parameters: {
    docs: {
      description: {
        story: '비활성화 상태의 DownloadTrigger입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    padding: '24px',
    fontFamily: 'system-ui',
    flexWrap: 'wrap'
  }}>
      {(['solid', 'outline', 'ghost'] as const).map(variant => <DownloadTrigger key={variant} variant={variant} disabled label={\`비활성 (\${variant})\`} data="x" />)}
    </div>
}`,...(O=(N=u.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var U,$,P;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: '파일 카드 패널',
  parameters: {
    docs: {
      description: {
        story: '파일 목록에서 각각 다운로드하는 UI 예시입니다.'
      }
    }
  },
  render: () => {
    const files = [{
      name: '2024 연간 보고서.pdf',
      size: '2.4 MB',
      type: '📄',
      color: '#ef4444',
      data: 'Annual Report 2024'
    }, {
      name: '사용자 데이터.csv',
      size: '156 KB',
      type: '📊',
      color: '#10b981',
      data: 'id,name\\n1,홍길동'
    }, {
      name: '제품 이미지.zip',
      size: '18.2 MB',
      type: '📦',
      color: '#3b82f6',
      data: 'image data'
    }, {
      name: '백업 설정.json',
      size: '4 KB',
      type: '⚙️',
      color: '#f59e0b',
      data: '{"version":1}'
    }];
    return <div style={{
      maxWidth: '480px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      fontFamily: 'system-ui'
    }}>
        {files.map(f => <div key={f.name} style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 16px',
        background: '#fff',
        border: '1px solid #e5e7eb',
        borderRadius: '10px'
      }}>
            <span style={{
          fontSize: '24px'
        }}>{f.type}</span>
            <div style={{
          flex: 1,
          minWidth: 0
        }}>
              <div style={{
            fontSize: '14px',
            fontWeight: 600,
            color: '#111',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>{f.name}</div>
              <div style={{
            fontSize: '12px',
            color: '#9ca3af'
          }}>{f.size}</div>
            </div>
            <DownloadTrigger data={f.data} filename={f.name} label="받기" size="sm" color={f.color} variant="outline" />
          </div>)}
      </div>;
  }
}`,...(P=($=g.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};const De=["Default","SizeVariants","VariantComparison","ColorVariants","TextData","Disabled","FileCardPanel"];export{m as ColorVariants,d as Default,u as Disabled,g as FileCardPanel,c as SizeVariants,f as TextData,p as VariantComparison,De as __namedExportsOrder,je as default};
