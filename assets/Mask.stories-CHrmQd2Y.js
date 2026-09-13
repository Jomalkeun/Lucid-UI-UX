import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as F}from"./reference-types-4ftiVeOu.js";const P={circle:"circle(50% at 50% 50%)",squircle:'path("M 0,50 C 0,10 10,0 50,0 90,0 100,10 100,50 100,90 90,100 50,100 10,100 0,90 0,50 Z")',heart:'path("M 50,30 A 20,20,0,0,1,90,30 A 20,20,0,0,1,50,70 A 20,20,0,0,1,10,30 A 20,20,0,0,1,50,30 Z")',hexagon:"polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)","hexagon-2":"polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",decagon:"polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)",pentagon:"polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",diamond:"polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",square:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",star:"polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)","star-2":"polygon(50% 0%, 57% 40%, 98% 35%, 63% 60%, 79% 100%, 50% 75%, 21% 100%, 37% 60%, 2% 35%, 43% 40%)",triangle:"polygon(50% 0%, 0% 100%, 100% 100%)","triangle-2":"polygon(50% 100%, 0% 0%, 100% 0%)","triangle-3":"polygon(0% 0%, 100% 50%, 0% 100%)","triangle-4":"polygon(100% 0%, 100% 100%, 0% 50%)"};function r({shape:n="circle",children:a,size:t=80,style:T,className:D}){const g=P[n];return e.jsx("div",{className:D,style:{width:typeof t=="number"?`${t}px`:t,height:typeof t=="number"?`${t}px`:t,clipPath:g,WebkitClipPath:g,overflow:"hidden",display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,...T},children:a})}r.__docgenInfo={description:"",methods:[],displayName:"Mask",props:{shape:{required:!1,tsType:{name:"union",raw:`| 'circle'
| 'squircle'
| 'heart'
| 'hexagon'
| 'hexagon-2'
| 'decagon'
| 'pentagon'
| 'diamond'
| 'square'
| 'star'
| 'star-2'
| 'triangle'
| 'triangle-2'
| 'triangle-3'
| 'triangle-4'`,elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'squircle'"},{name:"literal",value:"'heart'"},{name:"literal",value:"'hexagon'"},{name:"literal",value:"'hexagon-2'"},{name:"literal",value:"'decagon'"},{name:"literal",value:"'pentagon'"},{name:"literal",value:"'diamond'"},{name:"literal",value:"'square'"},{name:"literal",value:"'star'"},{name:"literal",value:"'star-2'"},{name:"literal",value:"'triangle'"},{name:"literal",value:"'triangle-2'"},{name:"literal",value:"'triangle-3'"},{name:"literal",value:"'triangle-4'"}]},description:"",defaultValue:{value:"'circle'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"80",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const _=F([{library:"daisyUI",component:"Mask",url:"https://daisyui.com/components/mask/",usedFor:["comparison"],relation:"compared"}]),G={title:"Atoms/Display/Mask",component:r,tags:["autodocs","ref:daisy-ui"],parameters:{references:_,docs:{description:{component:"\n## Mask\n\n이미지나 요소에 CSS clip-path 기반의 다양한 형태를 적용하는 컴포넌트입니다.\n아바타, 썸네일, 배지 이미지 등을 원, 하트, 별, 다각형 등으로 잘라서 표시할 때 사용합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `shape` | `MaskShape` | `'circle'` | 마스크 모양 |\n| `size` | `number\\|string` | `80` | 크기(px) |\n| `children` | `ReactNode` | - | 마스크를 적용할 콘텐츠 |\n        "}}},argTypes:{shape:{control:"select",options:["circle","squircle","heart","hexagon","hexagon-2","decagon","pentagon","diamond","square","star","star-2","triangle","triangle-2","triangle-3","triangle-4"],table:{category:"Appearance"}},size:{control:{type:"range",min:40,max:200,step:8},table:{category:"Appearance"}}},args:{shape:"circle",size:80}},i=["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#ec4899","#14b8a6","#f97316"],s={name:"기본 (원형)",render:n=>e.jsx(r,{...n,children:e.jsx("div",{style:{width:"100%",height:"100%",background:"#3b82f6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"32px"},children:"👤"})})},W=["circle","squircle","heart","hexagon","hexagon-2","decagon","pentagon","diamond","square","star","star-2","triangle","triangle-2","triangle-3","triangle-4"],l={name:"모양 갤러리",parameters:{docs:{description:{story:"지원하는 모든 마스크 모양 종류입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px",fontFamily:"system-ui"},children:W.map((n,a)=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(r,{shape:n,size:64,children:e.jsx("div",{style:{width:"100%",height:"100%",background:i[a%i.length],display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:"20px"},children:"★"})}),e.jsx("div",{style:{fontSize:"11px",color:"#9ca3af"},children:n})]},n))})},o={name:"아바타 마스크",parameters:{docs:{description:{story:"다양한 모양으로 마스킹된 아바타입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"16px",alignItems:"center",fontFamily:"system-ui"},children:["circle","squircle","hexagon","star","heart"].map((n,a)=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(r,{shape:n,size:72,children:e.jsx("div",{style:{width:"100%",height:"100%",background:i[a],display:"flex",alignItems:"center",justifyContent:"center",fontSize:"32px"},children:["😀","🤩","😎","🥳","🤗"][a]})}),e.jsx("div",{style:{fontSize:"11px",color:"#9ca3af"},children:n})]},n))})},d={name:"크기 변형",parameters:{docs:{description:{story:"다양한 크기의 마스크입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"20px",fontFamily:"system-ui"},children:[32,48,64,80,100,128].map((n,a)=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[e.jsx(r,{shape:"hexagon",size:n,children:e.jsx("div",{style:{width:"100%",height:"100%",background:i[a%i.length],display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:n*.3},children:"⬡"})}),e.jsxs("div",{style:{fontSize:"11px",color:"#9ca3af"},children:[n,"px"]})]},n))})},c={name:"색상 그라디언트",parameters:{docs:{description:{story:"그라디언트 배경을 마스킹하는 예시입니다."}}},render:()=>e.jsx("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap",fontFamily:"system-ui"},children:[{shape:"circle",gradient:"linear-gradient(135deg, #3b82f6, #8b5cf6)"},{shape:"heart",gradient:"linear-gradient(135deg, #ec4899, #ef4444)"},{shape:"star",gradient:"linear-gradient(135deg, #f59e0b, #ef4444)"},{shape:"hexagon",gradient:"linear-gradient(135deg, #10b981, #3b82f6)"},{shape:"diamond",gradient:"linear-gradient(135deg, #8b5cf6, #ec4899)"}].map(({shape:n,gradient:a})=>e.jsx(r,{shape:n,size:80,children:e.jsx("div",{style:{width:"100%",height:"100%",background:a}})},n))})},p={name:"썸네일 그리드",parameters:{docs:{description:{story:"갤러리형 썸네일에 마스크를 적용한 예시입니다."}}},render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"12px",maxWidth:"320px"},children:Array.from({length:8},(n,a)=>e.jsx(r,{shape:["circle","squircle","hexagon","star","heart","pentagon","diamond","decagon"][a],size:64,children:e.jsx("div",{style:{width:"100%",height:"100%",background:i[a],display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px"},children:["🌸","🌿","🌊","🔥","⭐","🍀","💎","🌙"][a]})},a))})};var m,h,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '기본 (원형)',
  render: args => <Mask {...args}>
      <div style={{
      width: '100%',
      height: '100%',
      background: '#3b82f6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '32px'
    }}>
        👤
      </div>
    </Mask>
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,x,u;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '모양 갤러리',
  parameters: {
    docs: {
      description: {
        story: '지원하는 모든 마스크 모양 종류입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    fontFamily: 'system-ui'
  }}>
      {ALL_SHAPES.map((shape, i) => <div key={shape} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '6px'
    }}>
          <Mask shape={shape} size={64}>
            <div style={{
          width: '100%',
          height: '100%',
          background: colors[i % colors.length],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '20px'
        }}>
              ★
            </div>
          </Mask>
          <div style={{
        fontSize: '11px',
        color: '#9ca3af'
      }}>{shape}</div>
        </div>)}
    </div>
}`,...(u=(x=l.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var v,k,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '아바타 마스크',
  parameters: {
    docs: {
      description: {
        story: '다양한 모양으로 마스킹된 아바타입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    fontFamily: 'system-ui'
  }}>
      {(['circle', 'squircle', 'hexagon', 'star', 'heart'] as MaskShape[]).map((shape, i) => <div key={shape} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '6px'
    }}>
          <Mask shape={shape} size={72}>
            <div style={{
          width: '100%',
          height: '100%',
          background: colors[i],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '32px'
        }}>
              {['😀', '🤩', '😎', '🥳', '🤗'][i]}
            </div>
          </Mask>
          <div style={{
        fontSize: '11px',
        color: '#9ca3af'
      }}>{shape}</div>
        </div>)}
    </div>
}`,...(S=(k=o.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var b,j,M;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '크기 변형',
  parameters: {
    docs: {
      description: {
        story: '다양한 크기의 마스크입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    alignItems: 'flex-end',
    gap: '20px',
    fontFamily: 'system-ui'
  }}>
      {[32, 48, 64, 80, 100, 128].map((size, i) => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px'
    }}>
          <Mask shape="hexagon" size={size}>
            <div style={{
          width: '100%',
          height: '100%',
          background: colors[i % colors.length],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: size * 0.3
        }}>
              ⬡
            </div>
          </Mask>
          <div style={{
        fontSize: '11px',
        color: '#9ca3af'
      }}>{size}px</div>
        </div>)}
    </div>
}`,...(M=(j=d.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var z,I,w;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '색상 그라디언트',
  parameters: {
    docs: {
      description: {
        story: '그라디언트 배경을 마스킹하는 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    fontFamily: 'system-ui'
  }}>
      {[{
      shape: 'circle' as MaskShape,
      gradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
    }, {
      shape: 'heart' as MaskShape,
      gradient: 'linear-gradient(135deg, #ec4899, #ef4444)'
    }, {
      shape: 'star' as MaskShape,
      gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)'
    }, {
      shape: 'hexagon' as MaskShape,
      gradient: 'linear-gradient(135deg, #10b981, #3b82f6)'
    }, {
      shape: 'diamond' as MaskShape,
      gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)'
    }].map(({
      shape,
      gradient
    }) => <Mask key={shape} shape={shape} size={80}>
          <div style={{
        width: '100%',
        height: '100%',
        background: gradient
      }} />
        </Mask>)}
    </div>
}`,...(w=(I=c.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var q,C,A;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '썸네일 그리드',
  parameters: {
    docs: {
      description: {
        story: '갤러리형 썸네일에 마스크를 적용한 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '12px',
    maxWidth: '320px'
  }}>
      {Array.from({
      length: 8
    }, (_, i) => <Mask key={i} shape={(['circle', 'squircle', 'hexagon', 'star', 'heart', 'pentagon', 'diamond', 'decagon'] as MaskShape[])[i]} size={64}>
          <div style={{
        width: '100%',
        height: '100%',
        background: colors[i],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px'
      }}>
            {['🌸', '🌿', '🌊', '🔥', '⭐', '🍀', '💎', '🌙'][i]}
          </div>
        </Mask>)}
    </div>
}`,...(A=(C=p.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const N=["Default","ShapeGrid","AvatarMasks","SizeVariants","ImageMask","ThumbnailGrid"];export{o as AvatarMasks,s as Default,c as ImageMask,l as ShapeGrid,d as SizeVariants,p as ThumbnailGrid,N as __namedExportsOrder,G as default};
