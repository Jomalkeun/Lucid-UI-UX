import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{d as N}from"./reference-types-4ftiVeOu.js";function t(e){if(e!==void 0)return typeof e=="number"?`${-e}px`:e.startsWith("-")?e:`-${e}`}function r({children:e,inline:i,block:c,inlineStart:C,inlineEnd:T,blockStart:I,blockEnd:R}){const L=t(C??i),q=t(T??i),D=t(I??c),E=t(R??c);return n.jsx("div",{style:{marginLeft:L,marginRight:q,marginTop:D,marginBottom:E},children:e})}r.__docgenInfo={description:"",methods:[],displayName:"Bleed",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},inline:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},block:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},inlineStart:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},inlineEnd:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},blockStart:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},blockEnd:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""}}};const W=N([{library:"Chakra UI",component:"Bleed",url:"https://www.chakra-ui.com/docs/components/bleed",usedFor:["comparison"],relation:"compared"}]),_={title:"Layout/Primitives/Bleed",component:r,tags:["autodocs","ref:chakra-ui"],parameters:{references:W,docs:{description:{component:"\n## Bleed\n\n부모 컨테이너의 padding을 의도적으로 넘쳐 full-width로 확장하는 레이아웃 컴포넌트입니다.\n카드 내부 이미지나 구분선을 padding 바깥까지 확장할 때 사용합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `inline` | `number \\| string` | - | 좌우 음수 마진 |\n| `block` | `number \\| string` | - | 상하 음수 마진 |\n| `inlineStart` | `number \\| string` | - | 왼쪽 음수 마진 |\n| `inlineEnd` | `number \\| string` | - | 오른쪽 음수 마진 |\n| `blockStart` | `number \\| string` | - | 위쪽 음수 마진 |\n| `blockEnd` | `number \\| string` | - | 아래쪽 음수 마진 |\n\n---\n\n### 사용 원리\n\n`Bleed`는 내부적으로 음수 마진(negative margin)을 적용합니다.\n부모의 `padding: 24px`이 있으면 `<Bleed inline={24}>`로 좌우 패딩을 돌파합니다.\n        "}}},argTypes:{inline:{control:{type:"number"},description:"좌우 블리드(px)",table:{category:"Layout"}},block:{control:{type:"number"},description:"상하 블리드(px)",table:{category:"Layout"}}},args:{inline:24}},p=({children:e,padding:i=24})=>n.jsx("div",{style:{background:"#fff",borderRadius:"12px",padding:i,border:"1px solid #e5e7eb",fontFamily:"system-ui",maxWidth:"360px",overflow:"hidden"},children:e}),o={name:"기본 (이미지 full-width)",parameters:{docs:{description:{story:"카드 padding을 넘어 이미지가 full-width로 표시됩니다."}}},render:e=>n.jsxs(p,{children:[n.jsx(r,{...e,block:24,children:n.jsx("div",{style:{height:"120px",background:"linear-gradient(135deg, #3b82f6, #8b5cf6)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:"14px"},children:"full-width 이미지 영역"})}),n.jsxs("div",{style:{paddingTop:"16px"},children:[n.jsx("h3",{style:{margin:"0 0 8px",fontSize:"16px",color:"#111"},children:"카드 제목"}),n.jsx("p",{style:{margin:0,fontSize:"13px",color:"#6b7280"},children:"Bleed를 사용하면 이미지가 카드 padding을 넘어 full-width로 표시됩니다."})]})]})},d={name:"좌우 블리드 (구분선)",parameters:{docs:{description:{story:"구분선이 카드 좌우 padding을 넘어 확장됩니다."}}},render:()=>n.jsxs(p,{children:[n.jsx("p",{style:{margin:"0 0 16px",fontSize:"14px",color:"#374151"},children:"카드 상단 콘텐츠"}),n.jsx(r,{inline:24,children:n.jsx("hr",{style:{border:"none",borderTop:"2px solid #3b82f6",margin:0}})}),n.jsx("p",{style:{margin:"16px 0 0",fontSize:"14px",color:"#374151"},children:"카드 하단 콘텐츠"})]})},s={name:"히어로 이미지 블리드",parameters:{docs:{description:{story:"카드 상단에 full-bleed 히어로 이미지입니다."}}},render:()=>n.jsxs(p,{padding:20,children:[n.jsx(r,{inline:20,blockStart:20,children:n.jsx("div",{style:{height:"160px",background:"linear-gradient(135deg, #667eea, #764ba2)",borderRadius:"12px 12px 0 0",position:"relative",overflow:"hidden"},children:n.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"#fff"},children:[n.jsx("div",{style:{fontSize:"32px",marginBottom:"4px"},children:"🏔️"}),n.jsx("div",{style:{fontSize:"14px",fontWeight:600},children:"히어로 이미지"})]})})}),n.jsxs("div",{style:{paddingTop:"16px"},children:[n.jsx("h3",{style:{margin:"0 0 6px",fontSize:"16px",color:"#111"},children:"산책로 안내"}),n.jsx("p",{style:{margin:0,fontSize:"13px",color:"#6b7280",lineHeight:1.6},children:"히어로 이미지가 카드 상단과 좌우를 가득 채웁니다."})]})]})},a={name:"컬러 밴드",parameters:{docs:{description:{story:"카드 내부에 색상 밴드를 full-width로 삽입합니다."}}},render:()=>n.jsxs(p,{children:[n.jsx("p",{style:{margin:"0 0 12px",fontSize:"14px",color:"#374151"},children:"일반 텍스트 영역"}),n.jsx(r,{inline:24,children:n.jsx("div",{style:{background:"#fef3c7",padding:"12px 24px",borderLeft:"4px solid #f59e0b"},children:n.jsx("p",{style:{margin:0,fontSize:"13px",color:"#92400e",fontWeight:500},children:"⚠️ 중요 안내: 이 내용은 full-width 강조 밴드입니다."})})}),n.jsx("p",{style:{margin:"12px 0 0",fontSize:"14px",color:"#374151"},children:"이후 일반 텍스트 영역"})]})},l={name:"음수 마진 시각화",parameters:{docs:{description:{story:"다양한 bleed 크기를 비교합니다."}}},render:()=>n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",fontFamily:"system-ui"},children:[8,16,24,32].map(e=>n.jsxs("div",{style:{background:"#f8f9fa",padding:"24px",borderRadius:"8px",border:"1px solid #e5e7eb",overflow:"hidden"},children:[n.jsxs("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"8px"},children:["inline=",e," (padding 24px 컨테이너)"]}),n.jsx(r,{inline:e,children:n.jsxs("div",{style:{background:`hsl(${e*8}, 70%, 85%)`,height:"32px",display:"flex",alignItems:"center",paddingLeft:"24px",fontSize:"12px",color:"#374151"},children:["블리드 ",e,"px"]})})]},e))})};var m,x,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '기본 (이미지 full-width)',
  parameters: {
    docs: {
      description: {
        story: '카드 padding을 넘어 이미지가 full-width로 표시됩니다.'
      }
    }
  },
  render: args => <Card>
      <Bleed {...args} block={24}>
        <div style={{
        height: '120px',
        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: '14px'
      }}>
          full-width 이미지 영역
        </div>
      </Bleed>
      <div style={{
      paddingTop: '16px'
    }}>
        <h3 style={{
        margin: '0 0 8px',
        fontSize: '16px',
        color: '#111'
      }}>카드 제목</h3>
        <p style={{
        margin: 0,
        fontSize: '13px',
        color: '#6b7280'
      }}>Bleed를 사용하면 이미지가 카드 padding을 넘어 full-width로 표시됩니다.</p>
      </div>
    </Card>
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var g,u,y;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '좌우 블리드 (구분선)',
  parameters: {
    docs: {
      description: {
        story: '구분선이 카드 좌우 padding을 넘어 확장됩니다.'
      }
    }
  },
  render: () => <Card>
      <p style={{
      margin: '0 0 16px',
      fontSize: '14px',
      color: '#374151'
    }}>카드 상단 콘텐츠</p>
      <Bleed inline={24}>
        <hr style={{
        border: 'none',
        borderTop: '2px solid #3b82f6',
        margin: 0
      }} />
      </Bleed>
      <p style={{
      margin: '16px 0 0',
      fontSize: '14px',
      color: '#374151'
    }}>카드 하단 콘텐츠</p>
    </Card>
}`,...(y=(u=d.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var h,b,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '히어로 이미지 블리드',
  parameters: {
    docs: {
      description: {
        story: '카드 상단에 full-bleed 히어로 이미지입니다.'
      }
    }
  },
  render: () => <Card padding={20}>
      <Bleed inline={20} blockStart={20}>
        <div style={{
        height: '160px',
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        borderRadius: '12px 12px 0 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
          <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff'
        }}>
            <div style={{
            fontSize: '32px',
            marginBottom: '4px'
          }}>🏔️</div>
            <div style={{
            fontSize: '14px',
            fontWeight: 600
          }}>히어로 이미지</div>
          </div>
        </div>
      </Bleed>
      <div style={{
      paddingTop: '16px'
    }}>
        <h3 style={{
        margin: '0 0 6px',
        fontSize: '16px',
        color: '#111'
      }}>산책로 안내</h3>
        <p style={{
        margin: 0,
        fontSize: '13px',
        color: '#6b7280',
        lineHeight: 1.6
      }}>히어로 이미지가 카드 상단과 좌우를 가득 채웁니다.</p>
      </div>
    </Card>
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var j,S,z;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '컬러 밴드',
  parameters: {
    docs: {
      description: {
        story: '카드 내부에 색상 밴드를 full-width로 삽입합니다.'
      }
    }
  },
  render: () => <Card>
      <p style={{
      margin: '0 0 12px',
      fontSize: '14px',
      color: '#374151'
    }}>일반 텍스트 영역</p>
      <Bleed inline={24}>
        <div style={{
        background: '#fef3c7',
        padding: '12px 24px',
        borderLeft: '4px solid #f59e0b'
      }}>
          <p style={{
          margin: 0,
          fontSize: '13px',
          color: '#92400e',
          fontWeight: 500
        }}>⚠️ 중요 안내: 이 내용은 full-width 강조 밴드입니다.</p>
        </div>
      </Bleed>
      <p style={{
      margin: '12px 0 0',
      fontSize: '14px',
      color: '#374151'
    }}>이후 일반 텍스트 영역</p>
    </Card>
}`,...(z=(S=a.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var w,B,k;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '음수 마진 시각화',
  parameters: {
    docs: {
      description: {
        story: '다양한 bleed 크기를 비교합니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    fontFamily: 'system-ui'
  }}>
      {[8, 16, 24, 32].map(v => <div key={v} style={{
      background: '#f8f9fa',
      padding: '24px',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      overflow: 'hidden'
    }}>
          <div style={{
        fontSize: '12px',
        color: '#9ca3af',
        marginBottom: '8px'
      }}>inline={v} (padding 24px 컨테이너)</div>
          <Bleed inline={v}>
            <div style={{
          background: \`hsl(\${v * 8}, 70%, 85%)\`,
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '24px',
          fontSize: '12px',
          color: '#374151'
        }}>
              블리드 {v}px
            </div>
          </Bleed>
        </div>)}
    </div>
}`,...(k=(B=l.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};const $=["Default","InlineBleed","HeroImage","ColorBand","NegativeMarginVisualized"];export{a as ColorBand,o as Default,s as HeroImage,d as InlineBleed,l as NegativeMarginVisualized,$ as __namedExportsOrder,_ as default};
