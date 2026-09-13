import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as M}from"./reference-types-4ftiVeOu.js";import{r as _}from"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";const q=["B","KB","MB","GB","TB","PB"],A=["b","Kb","Mb","Gb","Tb","Pb"];function T(n,o=2,t="byte"){const i=t==="bit"?A:q,x=t==="bit"?1e3:1024;if(n===0)return`0 ${i[0]}`;const C=Math.abs(n),f=Math.min(Math.floor(Math.log(C)/Math.log(x)),i.length-1);return`${(n/Math.pow(x,f)).toFixed(o).replace(/\.?0+$/,"")} ${i[f]}`}function s({value:n,unit:o="byte",fractionDigits:t=2,as:i="span"}){return _.createElement(i,{},T(n,t,o))}s.__docgenInfo={description:"",methods:[],displayName:"FormatByte",props:{value:{required:!0,tsType:{name:"number"},description:""},locale:{required:!1,tsType:{name:"string"},description:""},unit:{required:!1,tsType:{name:"union",raw:"'byte' | 'bit'",elements:[{name:"literal",value:"'byte'"},{name:"literal",value:"'bit'"}]},description:"",defaultValue:{value:"'byte'",computed:!1}},fractionDigits:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},as:{required:!1,tsType:{name:"React.JSX.IntrinsicElements"},description:"",defaultValue:{value:"'span'",computed:!1}}}};const L=M([{library:"Chakra UI",component:"Format Byte",url:"https://www.chakra-ui.com/docs/components/format-byte",usedFor:["comparison"],relation:"compared"}]),N={title:"Atoms/Primitives/FormatByte",component:s,tags:["autodocs","ref:chakra-ui"],parameters:{references:L,docs:{description:{component:"\n## FormatByte\n\n바이트 크기를 사람이 읽기 쉬운 단위(KB, MB, GB 등)로 변환해 렌더링하는 컴포넌트입니다.\n파일 크기 표시, 스토리지 용량 안내 등에 사용합니다.\n\n`formatBytes(value)` 유틸 함수도 함께 export 되어 계산에 직접 사용할 수 있습니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `value` | `number` | - | 바이트 단위 값 |\n| `unit` | `'byte'\\|'bit'` | `'byte'` | 단위 체계 |\n| `fractionDigits` | `number` | `2` | 소수점 자리수 |\n| `as` | `string` | `'span'` | 렌더링 HTML 태그 |\n        "}}},argTypes:{value:{control:{type:"number"},table:{category:"Core"}},unit:{control:"select",options:["byte","bit"],table:{category:"Core"}},fractionDigits:{control:{type:"number",min:0,max:4},table:{category:"Formatting"}}},args:{value:1536e3,unit:"byte",fractionDigits:2}},a={name:"기본",render:n=>e.jsx("div",{style:{padding:"24px",fontFamily:"system-ui",fontSize:"24px",fontWeight:700,color:"#111"},children:e.jsx(s,{...n})})},r={name:"크기 범위",parameters:{docs:{description:{story:"B부터 PB까지 다양한 파일 크기 표시 예시입니다."}}},render:()=>e.jsx("div",{style:{fontFamily:"system-ui",padding:"24px"},children:e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%",maxWidth:"400px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"#f9fafb"},children:[e.jsx("th",{style:{padding:"8px 14px",textAlign:"left",fontSize:"12px",fontWeight:600,color:"#6b7280",borderBottom:"1px solid #e5e7eb"},children:"바이트 값"}),e.jsx("th",{style:{padding:"8px 14px",textAlign:"right",fontSize:"12px",fontWeight:600,color:"#6b7280",borderBottom:"1px solid #e5e7eb"},children:"포맷 결과"})]})}),e.jsx("tbody",{children:[0,512,1024,1536e3,10485760,1073741824,1099511627776,0x4000000000000].map(n=>e.jsxs("tr",{style:{borderBottom:"1px solid #f0f0f0"},children:[e.jsx("td",{style:{padding:"8px 14px",fontSize:"13px",color:"#6b7280",fontVariantNumeric:"tabular-nums"},children:n.toLocaleString()}),e.jsx("td",{style:{padding:"8px 14px",fontSize:"15px",fontWeight:700,color:"#111",textAlign:"right"},children:e.jsx(s,{value:n})})]},n))})]})})},p={name:"Bit vs Byte",parameters:{docs:{description:{story:"비트(1000 진수)와 바이트(1024 진수) 단위 비교입니다."}}},render:()=>e.jsx("div",{style:{fontFamily:"system-ui",padding:"24px",display:"flex",gap:"24px",flexWrap:"wrap"},children:[1e6,1e7,1e8].map(n=>e.jsxs("div",{style:{background:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"10px",padding:"16px",minWidth:"180px"},children:[e.jsxs("div",{style:{fontSize:"11px",color:"#9ca3af",marginBottom:"8px"},children:[n.toLocaleString()," bytes"]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"4px"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#6b7280"},children:"Byte (1024)"}),e.jsx("span",{style:{fontSize:"14px",fontWeight:700,color:"#3b82f6"},children:e.jsx(s,{value:n,unit:"byte"})})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#6b7280"},children:"Bit (1000)"}),e.jsx("span",{style:{fontSize:"14px",fontWeight:700,color:"#8b5cf6"},children:e.jsx(s,{value:n,unit:"bit"})})]})]},n))})},l={name:"소수점 자리수",parameters:{docs:{description:{story:"fractionDigits로 소수점 자리수를 제어합니다."}}},render:()=>e.jsx("div",{style:{fontFamily:"system-ui",padding:"24px",display:"flex",flexDirection:"column",gap:"10px"},children:[0,1,2,3].map(n=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsxs("span",{style:{fontSize:"12px",color:"#9ca3af",width:"80px"},children:["소수 ",n,"자리"]}),e.jsx("span",{style:{fontSize:"18px",fontWeight:700,color:"#111"},children:e.jsx(s,{value:1536123,fractionDigits:n})})]},n))})},d={name:"파일 목록",parameters:{docs:{description:{story:"파일 크기를 표시하는 실제 활용 예시입니다."}}},render:()=>{const n=[{name:"프레젠테이션.pptx",size:15728640,icon:"📊"},{name:"데이터베이스.sql",size:52428800,icon:"🗄️"},{name:"프로필_사진.jpg",size:204800,icon:"🖼️"},{name:"소스코드.zip",size:8388608,icon:"📦"},{name:"로그파일.txt",size:1024,icon:"📝"},{name:"동영상.mp4",size:1073741824,icon:"🎬"}],o=n.reduce((t,i)=>t+i.size,0);return e.jsxs("div",{style:{fontFamily:"system-ui",maxWidth:"480px"},children:[e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginBottom:"12px"},children:n.map(t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"10px 14px",background:"#fff",border:"1px solid #e5e7eb",borderRadius:"8px"},children:[e.jsx("span",{style:{fontSize:"20px"},children:t.icon}),e.jsx("span",{style:{flex:1,fontSize:"13px",color:"#374151",fontWeight:500},children:t.name}),e.jsx("span",{style:{fontSize:"13px",fontWeight:700,color:"#6b7280"},children:e.jsx(s,{value:t.size})})]},t.name))}),e.jsxs("div",{style:{padding:"10px 14px",background:"#f9fafb",borderRadius:"8px",display:"flex",justifyContent:"space-between",fontSize:"13px"},children:[e.jsx("span",{style:{color:"#6b7280"},children:"총 용량"}),e.jsx("span",{style:{fontWeight:700,color:"#111"},children:T(o)})]})]})}},c={name:"스토리지 사용량",parameters:{docs:{description:{story:"클라우드 스토리지 용량 표시 UI 예시입니다."}}},render:()=>{const t=Math.round(30);return e.jsxs("div",{style:{fontFamily:"system-ui",maxWidth:"360px",padding:"20px",background:"#fff",border:"1px solid #e5e7eb",borderRadius:"12px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"12px"},children:[e.jsx("span",{style:{fontSize:"14px",fontWeight:600,color:"#374151"},children:"저장공간"}),e.jsxs("span",{style:{fontSize:"13px",color:"#9ca3af"},children:[e.jsx(s,{value:32212254720})," / ",e.jsx(s,{value:107374182400})]})]}),e.jsx("div",{style:{background:"#e5e7eb",borderRadius:"6px",height:"8px",marginBottom:"8px"},children:e.jsx("div",{style:{background:t>80?"#ef4444":"#3b82f6",width:`${t}%`,height:"8px",borderRadius:"6px",transition:"width 0.5s"}})}),e.jsxs("div",{style:{fontSize:"12px",color:t>80?"#ef4444":"#9ca3af"},children:[t,"% 사용됨 — 남은 공간: ",e.jsx(s,{value:107374182400-32212254720})]})]})}};var m,y,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '기본',
  render: args => <div style={{
    padding: '24px',
    fontFamily: 'system-ui',
    fontSize: '24px',
    fontWeight: 700,
    color: '#111'
  }}>
      <FormatByte {...args} />
    </div>
}`,...(u=(y=a.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var g,b,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '크기 범위',
  parameters: {
    docs: {
      description: {
        story: 'B부터 PB까지 다양한 파일 크기 표시 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    fontFamily: 'system-ui',
    padding: '24px'
  }}>
      <table style={{
      borderCollapse: 'collapse',
      width: '100%',
      maxWidth: '400px'
    }}>
        <thead>
          <tr style={{
          background: '#f9fafb'
        }}>
            <th style={{
            padding: '8px 14px',
            textAlign: 'left',
            fontSize: '12px',
            fontWeight: 600,
            color: '#6b7280',
            borderBottom: '1px solid #e5e7eb'
          }}>바이트 값</th>
            <th style={{
            padding: '8px 14px',
            textAlign: 'right',
            fontSize: '12px',
            fontWeight: 600,
            color: '#6b7280',
            borderBottom: '1px solid #e5e7eb'
          }}>포맷 결과</th>
          </tr>
        </thead>
        <tbody>
          {[0, 512, 1024, 1536000, 10485760, 1073741824, 1099511627776, 1125899906842624].map(v => <tr key={v} style={{
          borderBottom: '1px solid #f0f0f0'
        }}>
              <td style={{
            padding: '8px 14px',
            fontSize: '13px',
            color: '#6b7280',
            fontVariantNumeric: 'tabular-nums'
          }}>{v.toLocaleString()}</td>
              <td style={{
            padding: '8px 14px',
            fontSize: '15px',
            fontWeight: 700,
            color: '#111',
            textAlign: 'right'
          }}>
                <FormatByte value={v} />
              </td>
            </tr>)}
        </tbody>
      </table>
    </div>
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,B,j;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Bit vs Byte',
  parameters: {
    docs: {
      description: {
        story: '비트(1000 진수)와 바이트(1024 진수) 단위 비교입니다.'
      }
    }
  },
  render: () => <div style={{
    fontFamily: 'system-ui',
    padding: '24px',
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap'
  }}>
      {[1000000, 10000000, 100000000].map(v => <div key={v} style={{
      background: '#f9fafb',
      border: '1px solid #e5e7eb',
      borderRadius: '10px',
      padding: '16px',
      minWidth: '180px'
    }}>
          <div style={{
        fontSize: '11px',
        color: '#9ca3af',
        marginBottom: '8px'
      }}>{v.toLocaleString()} bytes</div>
          <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '4px'
      }}>
            <span style={{
          fontSize: '12px',
          color: '#6b7280'
        }}>Byte (1024)</span>
            <span style={{
          fontSize: '14px',
          fontWeight: 700,
          color: '#3b82f6'
        }}><FormatByte value={v} unit="byte" /></span>
          </div>
          <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
            <span style={{
          fontSize: '12px',
          color: '#6b7280'
        }}>Bit (1000)</span>
            <span style={{
          fontSize: '14px',
          fontWeight: 700,
          color: '#8b5cf6'
        }}><FormatByte value={v} unit="bit" /></span>
          </div>
        </div>)}
    </div>
}`,...(j=(B=p.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var z,S,F;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '소수점 자리수',
  parameters: {
    docs: {
      description: {
        story: 'fractionDigits로 소수점 자리수를 제어합니다.'
      }
    }
  },
  render: () => <div style={{
    fontFamily: 'system-ui',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  }}>
      {[0, 1, 2, 3].map(d => <div key={d} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
          <span style={{
        fontSize: '12px',
        color: '#9ca3af',
        width: '80px'
      }}>소수 {d}자리</span>
          <span style={{
        fontSize: '18px',
        fontWeight: 700,
        color: '#111'
      }}>
            <FormatByte value={1536123} fractionDigits={d} />
          </span>
        </div>)}
    </div>
}`,...(F=(S=l.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var W,w,k;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '파일 목록',
  parameters: {
    docs: {
      description: {
        story: '파일 크기를 표시하는 실제 활용 예시입니다.'
      }
    }
  },
  render: () => {
    const files = [{
      name: '프레젠테이션.pptx',
      size: 15728640,
      icon: '📊'
    }, {
      name: '데이터베이스.sql',
      size: 52428800,
      icon: '🗄️'
    }, {
      name: '프로필_사진.jpg',
      size: 204800,
      icon: '🖼️'
    }, {
      name: '소스코드.zip',
      size: 8388608,
      icon: '📦'
    }, {
      name: '로그파일.txt',
      size: 1024,
      icon: '📝'
    }, {
      name: '동영상.mp4',
      size: 1073741824,
      icon: '🎬'
    }];
    const totalBytes = files.reduce((s, f) => s + f.size, 0);
    return <div style={{
      fontFamily: 'system-ui',
      maxWidth: '480px'
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        marginBottom: '12px'
      }}>
          {files.map(f => <div key={f.name} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '10px 14px',
          background: '#fff',
          border: '1px solid #e5e7eb',
          borderRadius: '8px'
        }}>
              <span style={{
            fontSize: '20px'
          }}>{f.icon}</span>
              <span style={{
            flex: 1,
            fontSize: '13px',
            color: '#374151',
            fontWeight: 500
          }}>{f.name}</span>
              <span style={{
            fontSize: '13px',
            fontWeight: 700,
            color: '#6b7280'
          }}>
                <FormatByte value={f.size} />
              </span>
            </div>)}
        </div>
        <div style={{
        padding: '10px 14px',
        background: '#f9fafb',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '13px'
      }}>
          <span style={{
          color: '#6b7280'
        }}>총 용량</span>
          <span style={{
          fontWeight: 700,
          color: '#111'
        }}>{formatBytes(totalBytes)}</span>
        </div>
      </div>;
  }
}`,...(k=(w=d.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var D,R,I;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '스토리지 사용량',
  parameters: {
    docs: {
      description: {
        story: '클라우드 스토리지 용량 표시 UI 예시입니다.'
      }
    }
  },
  render: () => {
    const used = 32212254720;
    const total = 107374182400;
    const pct = Math.round(used / total * 100);
    return <div style={{
      fontFamily: 'system-ui',
      maxWidth: '360px',
      padding: '20px',
      background: '#fff',
      border: '1px solid #e5e7eb',
      borderRadius: '12px'
    }}>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: '12px'
      }}>
          <span style={{
          fontSize: '14px',
          fontWeight: 600,
          color: '#374151'
        }}>저장공간</span>
          <span style={{
          fontSize: '13px',
          color: '#9ca3af'
        }}>
            <FormatByte value={used} /> / <FormatByte value={total} />
          </span>
        </div>
        <div style={{
        background: '#e5e7eb',
        borderRadius: '6px',
        height: '8px',
        marginBottom: '8px'
      }}>
          <div style={{
          background: pct > 80 ? '#ef4444' : '#3b82f6',
          width: \`\${pct}%\`,
          height: '8px',
          borderRadius: '6px',
          transition: 'width 0.5s'
        }} />
        </div>
        <div style={{
        fontSize: '12px',
        color: pct > 80 ? '#ef4444' : '#9ca3af'
      }}>
          {pct}% 사용됨 — 남은 공간: <FormatByte value={total - used} />
        </div>
      </div>;
  }
}`,...(I=(R=c.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};const G=["Default","SizeRange","BitVsByte","FractionDigits","FileList","StorageUsage"];export{p as BitVsByte,a as Default,d as FileList,l as FractionDigits,r as SizeRange,c as StorageUsage,G as __namedExportsOrder,N as default};
