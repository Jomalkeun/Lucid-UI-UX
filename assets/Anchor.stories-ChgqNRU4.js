import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as _}from"./reference-types-4ftiVeOu.js";import{r as I}from"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";function l({items:i,direction:o="vertical",showInkBar:d=!0,targetOffset:v=0,onChange:s}){var S;const[a,g]=I.useState(((S=i[0])==null?void 0:S.href)??"");I.useEffect(()=>{const c=()=>{for(const n of[...i].reverse()){const r=document.querySelector(n.href);if(!r)continue;if(r.getBoundingClientRect().top<=v+80){a!==n.href&&(g(n.href),s==null||s(n.href));return}}};return window.addEventListener("scroll",c,{passive:!0}),()=>window.removeEventListener("scroll",c)},[i,v,s,a]);const R=(c,n)=>{c.preventDefault(),g(n),s==null||s(n);const r=document.querySelector(n);r==null||r.scrollIntoView({behavior:"smooth",block:"start"})},V=o==="horizontal"?{display:"flex",gap:"4px",padding:"4px",borderBottom:"2px solid #e5e7eb"}:{display:"flex",flexDirection:"column",borderLeft:d?"2px solid #e5e7eb":"none"},j=(c,n=0)=>c.map(r=>e.jsxs("div",{children:[e.jsx("a",{href:r.href,onClick:A=>R(A,r.href),style:{display:"block",padding:o==="horizontal"?"6px 12px":`6px 12px 6px ${12+n*16}px`,fontSize:n>0?"13px":"14px",fontWeight:a===r.href?600:400,color:a===r.href?"#3b82f6":"#374151",textDecoration:"none",borderLeft:o==="vertical"&&d?`2px solid ${a===r.href?"#3b82f6":"transparent"}`:"none",marginLeft:o==="vertical"&&d?"-2px":0,transition:"all 0.2s",borderRadius:o==="horizontal"?"6px":0,background:o==="horizontal"&&a===r.href?"#eff6ff":"transparent"},children:r.title}),r.children&&j(r.children,n+1)]},r.href));return e.jsx("div",{style:V,children:j(i)})}l.__docgenInfo={description:"",methods:[],displayName:"Anchor",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"AnchorItem"}],raw:"AnchorItem[]"},description:""},affix:{required:!1,tsType:{name:"boolean"},description:""},offsetTop:{required:!1,tsType:{name:"number"},description:""},direction:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},showInkBar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},targetOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(href: string) => void",signature:{arguments:[{type:{name:"string"},name:"href"}],return:{name:"void"}}},description:""}}};const $=_([{library:"UIkit",component:"Scrollspy navigation",url:"https://getuikit.com/docs/scrollspy-nav",usedFor:["behavior","comparison"],relation:"compared"},{library:"Ant Design",component:"Anchor",url:"https://ant.design/components/anchor/",usedFor:["comparison"],relation:"compared"}]),G={title:"Molecules/Navigation/Anchor",component:l,tags:["autodocs","ref:ant-design","ref:uikit"],parameters:{references:$,docs:{description:{component:"\n## Anchor\n\n긴 페이지의 섹션 간 이동을 위한 앵커 내비게이션 컴포넌트입니다.\n스크롤 위치에 따라 현재 섹션을 하이라이트하며, 클릭 시 해당 섹션으로 부드럽게 이동합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `items` | `AnchorItem[]` | `[]` | 앵커 항목 목록 |\n| `direction` | `'vertical' \\| 'horizontal'` | `'vertical'` | 방향 |\n| `showInkBar` | `boolean` | `true` | 활성 표시 인디케이터 |\n| `targetOffset` | `number` | `0` | 스크롤 오프셋 |\n| `onChange` | `(href: string) => void` | - | 변경 콜백 |\n\n---\n\n### AnchorItem 타입\n\n```ts\ninterface AnchorItem {\n  href: string\n  title: string\n  children?: AnchorItem[]\n}\n```\n        "}}},argTypes:{direction:{control:"select",options:["vertical","horizontal"],description:"방향",table:{category:"Appearance"}},showInkBar:{control:"boolean",description:"인크바 표시",table:{category:"Appearance"}},targetOffset:{control:{type:"number",min:0,max:200},description:"스크롤 오프셋",table:{category:"Behavior"}}},args:{items:[{href:"#section1",title:"시작하기"},{href:"#section2",title:"설치 방법"},{href:"#section3",title:"API 참조"},{href:"#section4",title:"예제"}],direction:"vertical",showInkBar:!0}},u=[{href:"#s1",title:"개요"},{href:"#s2",title:"설치"},{href:"#s3",title:"API"},{href:"#s4",title:"예제"}];function y({children:i}){return e.jsx("div",{style:{display:"flex",gap:"24px",fontFamily:"system-ui",maxHeight:"400px"},children:i})}function t({id:i,title:o,color:d="#f8f9fa"}){return e.jsxs("div",{id:i,style:{background:d,borderRadius:"8px",padding:"24px",marginBottom:"16px",minHeight:"120px"},children:[e.jsx("h3",{style:{margin:"0 0 8px",color:"#1f2937"},children:o}),e.jsxs("p",{style:{margin:0,color:"#6b7280",fontSize:"14px",lineHeight:1.6},children:["이 섹션은 ",o,"에 대한 내용을 담고 있습니다. 스크롤 시 왼쪽 Anchor 컴포넌트에서 현재 섹션이 하이라이트됩니다."]})]})}const f={name:"기본 (세로)",parameters:{docs:{description:{story:"기본 세로 방향 앵커 내비게이션입니다."}}},render:i=>e.jsxs(y,{children:[e.jsx("div",{style:{width:"180px",flexShrink:0},children:e.jsx(l,{...i,items:u})}),e.jsxs("div",{style:{flex:1,overflowY:"auto",maxHeight:"380px"},children:[e.jsx(t,{id:"s1",title:"개요",color:"#eff6ff"}),e.jsx(t,{id:"s2",title:"설치",color:"#f0fdf4"}),e.jsx(t,{id:"s3",title:"API",color:"#fefce8"}),e.jsx(t,{id:"s4",title:"예제",color:"#fdf4ff"})]})]})},p={name:"가로 방향",parameters:{docs:{description:{story:"수평 방향 탭 스타일 앵커입니다."}}},render:()=>e.jsxs("div",{style:{fontFamily:"system-ui"},children:[e.jsx(l,{items:u,direction:"horizontal"}),e.jsxs("div",{style:{marginTop:"16px",overflowY:"auto",maxHeight:"300px"},children:[e.jsx(t,{id:"s1",title:"개요",color:"#eff6ff"}),e.jsx(t,{id:"s2",title:"설치",color:"#f0fdf4"}),e.jsx(t,{id:"s3",title:"API",color:"#fefce8"}),e.jsx(t,{id:"s4",title:"예제",color:"#fdf4ff"})]})]})},m={name:"중첩 항목",parameters:{docs:{description:{story:"계층 구조가 있는 앵커 내비게이션입니다."}}},render:()=>e.jsxs(y,{children:[e.jsx("div",{style:{width:"200px",flexShrink:0},children:e.jsx(l,{items:[{href:"#n1",title:"시작하기",children:[{href:"#n1-1",title:"소개"},{href:"#n1-2",title:"요구사항"}]},{href:"#n2",title:"설치",children:[{href:"#n2-1",title:"npm 설치"},{href:"#n2-2",title:"yarn 설치"}]},{href:"#n3",title:"API 참조"}]})}),e.jsxs("div",{style:{flex:1,overflowY:"auto",maxHeight:"380px"},children:[e.jsx(t,{id:"n1",title:"시작하기",color:"#eff6ff"}),e.jsx(t,{id:"n1-1",title:"소개"}),e.jsx(t,{id:"n1-2",title:"요구사항"}),e.jsx(t,{id:"n2",title:"설치",color:"#f0fdf4"}),e.jsx(t,{id:"n2-1",title:"npm 설치"}),e.jsx(t,{id:"n2-2",title:"yarn 설치"}),e.jsx(t,{id:"n3",title:"API 참조",color:"#fefce8"})]})]})},x={name:"인크바 없음",parameters:{docs:{description:{story:"인디케이터 바 없이 색상만으로 활성 상태를 표시합니다."}}},render:()=>e.jsxs(y,{children:[e.jsx("div",{style:{width:"180px",flexShrink:0},children:e.jsx(l,{items:u,showInkBar:!1})}),e.jsxs("div",{style:{flex:1,overflowY:"auto",maxHeight:"380px"},children:[e.jsx(t,{id:"s1",title:"개요",color:"#eff6ff"}),e.jsx(t,{id:"s2",title:"설치",color:"#f0fdf4"}),e.jsx(t,{id:"s3",title:"API",color:"#fefce8"}),e.jsx(t,{id:"s4",title:"예제",color:"#fdf4ff"})]})]})},h={name:"문서 페이지 스타일",parameters:{docs:{description:{story:"문서 페이지에서 자주 사용하는 오른쪽 목차 스타일입니다."}}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"32px",fontFamily:"system-ui",maxHeight:"440px"},children:[e.jsx("div",{style:{flex:1,overflowY:"auto"},children:["소개","기본 사용법","고급 설정","마이그레이션"].map((i,o)=>e.jsxs("div",{id:`doc${o}`,style:{marginBottom:"32px"},children:[e.jsx("h2",{style:{margin:"0 0 12px",fontSize:"20px",color:"#111"},children:i}),e.jsxs("p",{style:{color:"#374151",lineHeight:1.7},children:[i," 섹션의 내용입니다. 이 문서 레이아웃은 오른쪽 목차(Anchor)와 함께 사용하면 사용자가 페이지 내 위치를 파악하기 쉽습니다."]})]},o))}),e.jsxs("div",{style:{width:"160px",flexShrink:0},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:700,color:"#9ca3af",letterSpacing:"0.05em",marginBottom:"8px",textTransform:"uppercase"},children:"목차"}),e.jsx(l,{items:[{href:"#doc0",title:"소개"},{href:"#doc1",title:"기본 사용법"},{href:"#doc2",title:"고급 설정"},{href:"#doc3",title:"마이그레이션"}]})]})]})};var w,b,k;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '기본 (세로)',
  parameters: {
    docs: {
      description: {
        story: '기본 세로 방향 앵커 내비게이션입니다.'
      }
    }
  },
  render: args => <PageLayout>
      <div style={{
      width: '180px',
      flexShrink: 0
    }}>
        <Anchor {...args} items={sampleItems} />
      </div>
      <div style={{
      flex: 1,
      overflowY: 'auto',
      maxHeight: '380px'
    }}>
        <Section id="s1" title="개요" color="#eff6ff" />
        <Section id="s2" title="설치" color="#f0fdf4" />
        <Section id="s3" title="API" color="#fefce8" />
        <Section id="s4" title="예제" color="#fdf4ff" />
      </div>
    </PageLayout>
}`,...(k=(b=f.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var P,H,z;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '가로 방향',
  parameters: {
    docs: {
      description: {
        story: '수평 방향 탭 스타일 앵커입니다.'
      }
    }
  },
  render: () => <div style={{
    fontFamily: 'system-ui'
  }}>
      <Anchor items={sampleItems} direction="horizontal" />
      <div style={{
      marginTop: '16px',
      overflowY: 'auto',
      maxHeight: '300px'
    }}>
        <Section id="s1" title="개요" color="#eff6ff" />
        <Section id="s2" title="설치" color="#f0fdf4" />
        <Section id="s3" title="API" color="#fefce8" />
        <Section id="s4" title="예제" color="#fdf4ff" />
      </div>
    </div>
}`,...(z=(H=p.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var B,T,L;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '중첩 항목',
  parameters: {
    docs: {
      description: {
        story: '계층 구조가 있는 앵커 내비게이션입니다.'
      }
    }
  },
  render: () => <PageLayout>
      <div style={{
      width: '200px',
      flexShrink: 0
    }}>
        <Anchor items={[{
        href: '#n1',
        title: '시작하기',
        children: [{
          href: '#n1-1',
          title: '소개'
        }, {
          href: '#n1-2',
          title: '요구사항'
        }]
      }, {
        href: '#n2',
        title: '설치',
        children: [{
          href: '#n2-1',
          title: 'npm 설치'
        }, {
          href: '#n2-2',
          title: 'yarn 설치'
        }]
      }, {
        href: '#n3',
        title: 'API 참조'
      }]} />
      </div>
      <div style={{
      flex: 1,
      overflowY: 'auto',
      maxHeight: '380px'
    }}>
        <Section id="n1" title="시작하기" color="#eff6ff" />
        <Section id="n1-1" title="소개" />
        <Section id="n1-2" title="요구사항" />
        <Section id="n2" title="설치" color="#f0fdf4" />
        <Section id="n2-1" title="npm 설치" />
        <Section id="n2-2" title="yarn 설치" />
        <Section id="n3" title="API 참조" color="#fefce8" />
      </div>
    </PageLayout>
}`,...(L=(T=m.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var Y,q,D;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: '인크바 없음',
  parameters: {
    docs: {
      description: {
        story: '인디케이터 바 없이 색상만으로 활성 상태를 표시합니다.'
      }
    }
  },
  render: () => <PageLayout>
      <div style={{
      width: '180px',
      flexShrink: 0
    }}>
        <Anchor items={sampleItems} showInkBar={false} />
      </div>
      <div style={{
      flex: 1,
      overflowY: 'auto',
      maxHeight: '380px'
    }}>
        <Section id="s1" title="개요" color="#eff6ff" />
        <Section id="s2" title="설치" color="#f0fdf4" />
        <Section id="s3" title="API" color="#fefce8" />
        <Section id="s4" title="예제" color="#fdf4ff" />
      </div>
    </PageLayout>
}`,...(D=(q=x.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var F,E,N;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '문서 페이지 스타일',
  parameters: {
    docs: {
      description: {
        story: '문서 페이지에서 자주 사용하는 오른쪽 목차 스타일입니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '32px',
    fontFamily: 'system-ui',
    maxHeight: '440px'
  }}>
      <div style={{
      flex: 1,
      overflowY: 'auto'
    }}>
        {['소개', '기본 사용법', '고급 설정', '마이그레이션'].map((title, i) => <div key={i} id={\`doc\${i}\`} style={{
        marginBottom: '32px'
      }}>
            <h2 style={{
          margin: '0 0 12px',
          fontSize: '20px',
          color: '#111'
        }}>{title}</h2>
            <p style={{
          color: '#374151',
          lineHeight: 1.7
        }}>
              {title} 섹션의 내용입니다. 이 문서 레이아웃은 오른쪽 목차(Anchor)와 함께 사용하면 사용자가 페이지 내 위치를 파악하기 쉽습니다.
            </p>
          </div>)}
      </div>
      <div style={{
      width: '160px',
      flexShrink: 0
    }}>
        <div style={{
        fontSize: '12px',
        fontWeight: 700,
        color: '#9ca3af',
        letterSpacing: '0.05em',
        marginBottom: '8px',
        textTransform: 'uppercase'
      }}>목차</div>
        <Anchor items={[{
        href: '#doc0',
        title: '소개'
      }, {
        href: '#doc1',
        title: '기본 사용법'
      }, {
        href: '#doc2',
        title: '고급 설정'
      }, {
        href: '#doc3',
        title: '마이그레이션'
      }]} />
      </div>
    </div>
}`,...(N=(E=h.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const J=["Default","Horizontal","NestedItems","NoInkBar","DocPageStyle"];export{f as Default,h as DocPageStyle,p as Horizontal,m as NestedItems,x as NoInkBar,J as __namedExportsOrder,G as default};
