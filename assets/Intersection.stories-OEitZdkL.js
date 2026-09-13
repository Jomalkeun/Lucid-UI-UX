import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-BxXVWNx3.js";import{d as F}from"./reference-types-4ftiVeOu.js";import"./_commonjsHelpers-CqkleIqs.js";function o({children:n,threshold:t=0,rootMargin:r="0px",once:s=!1,disabled:i=!1}){const f=a.useRef(null),[B,x]=a.useState(!1),[C,Y]=a.useState(null),u=a.useRef(!1);return a.useEffect(()=>{if(i)return;const m=f.current;if(!m)return;const y=new IntersectionObserver(([h])=>{Y(h),!(s&&u.current)&&(h.isIntersecting?(u.current=!0,x(!0)):s||x(!1))},{threshold:t,rootMargin:r});return y.observe(m),()=>y.disconnect()},[t,r,s,i]),e.jsx("div",{ref:f,children:n(i?!0:B,C)})}o.__docgenInfo={description:"",methods:[],displayName:"Intersection",props:{children:{required:!0,tsType:{name:"signature",type:"function",raw:"(inView: boolean, entry: IntersectionObserverEntry | null) => ReactNode",signature:{arguments:[{type:{name:"boolean"},name:"inView"},{type:{name:"union",raw:"IntersectionObserverEntry | null",elements:[{name:"IntersectionObserverEntry"},{name:"null"}]},name:"entry"}],return:{name:"ReactNode"}}},description:""},threshold:{required:!1,tsType:{name:"union",raw:"number | number[]",elements:[{name:"number"},{name:"Array",elements:[{name:"number"}],raw:"number[]"}]},description:"",defaultValue:{value:"0",computed:!1}},rootMargin:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'0px'",computed:!1}},once:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const T=F([{library:"Quasar",component:"Intersection",url:"https://quasar.dev/vue-components/intersection",usedFor:["design","behavior","api"],relation:"adapted"}]),W={title:"Atoms/Primitives/Intersection",component:o,tags:["autodocs","ref:quasar"],parameters:{references:T,docs:{description:{component:"\n## Intersection\n\n요소가 뷰포트에 진입하거나 벗어날 때 콜백을 실행하는 Intersection Observer 래퍼 컴포넌트입니다.\n지연 로딩, 스크롤 애니메이션 트리거, 무한 스크롤 감지 등에 사용됩니다.\n\nrender prop 패턴으로 `children`이 `(inView: boolean, entry) => ReactNode` 형태입니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `children` | `(inView, entry) => ReactNode` | - | 렌더 함수 |\n| `threshold` | `number\\|number[]` | `0` | 교차 비율 임계값 (0~1) |\n| `rootMargin` | `string` | `'0px'` | 루트 마진 |\n| `once` | `boolean` | `false` | 한 번만 감지 |\n| `disabled` | `boolean` | `false` | 옵저버 비활성화 |\n        "}}},argTypes:{threshold:{control:{type:"range",min:0,max:1,step:.1},table:{category:"Behavior"}},once:{control:"boolean",table:{category:"Behavior"}},disabled:{control:"boolean",table:{category:"Behavior"}},rootMargin:{control:"text",table:{category:"Behavior"}}},args:{threshold:0,rootMargin:"0px",once:!1,disabled:!1}},d={name:"기본 (뷰포트 진입 감지)",render:()=>e.jsxs("div",{style:{fontFamily:"system-ui",height:"360px",overflowY:"auto",border:"1px solid #e5e7eb",borderRadius:"8px"},children:[e.jsx("div",{style:{padding:"20px",fontSize:"13px",color:"#9ca3af"},children:"아래로 스크롤하세요"}),e.jsx("div",{style:{height:"300px"}}),e.jsx(o,{threshold:.3,children:n=>e.jsxs("div",{style:{margin:"20px",padding:"24px",background:n?"#dbeafe":"#f9fafb",border:`2px solid ${n?"#3b82f6":"#e5e7eb"}`,borderRadius:"12px",transition:"all 0.4s",textAlign:"center"},children:[e.jsx("div",{style:{fontSize:"32px",marginBottom:"8px"},children:n?"👀":"😴"}),e.jsx("div",{style:{fontSize:"15px",fontWeight:700,color:n?"#1e40af":"#9ca3af"},children:n?"보이는 영역입니다!":"아직 스크롤이 필요합니다"})]})}),e.jsx("div",{style:{height:"200px"}})]})},l={name:"스크롤 페이드 인",parameters:{docs:{description:{story:"요소가 뷰포트에 진입하면 페이드 인 애니메이션이 실행됩니다."}}},render:()=>e.jsxs("div",{style:{fontFamily:"system-ui",height:"420px",overflowY:"auto",border:"1px solid #e5e7eb",borderRadius:"8px",padding:"20px"},children:[e.jsx("div",{style:{fontSize:"13px",color:"#9ca3af",marginBottom:"24px"},children:"아래로 스크롤하면 카드가 나타납니다"}),Array.from({length:5},(n,t)=>e.jsxs("div",{style:{marginBottom:"60px"},children:[e.jsx("div",{style:{height:"40px"}}),e.jsx(o,{once:!0,threshold:.2,children:r=>e.jsxs("div",{style:{padding:"20px 24px",background:"#fff",border:"1px solid #e5e7eb",borderRadius:"12px",transition:"opacity 0.6s ease, transform 0.6s ease",opacity:r?1:0,transform:r?"translateY(0)":"translateY(32px)",display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"10px",background:["#dbeafe","#dcfce7","#fce7f3","#fef3c7","#e0e7ff"][t],display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px"},children:["🚀","🎨","🔐","📊","🌟"][t]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"15px",fontWeight:700,color:"#111"},children:["빠른 성능","아름다운 디자인","보안 강화","데이터 분석","팀 협업"][t]}),e.jsxs("div",{style:{fontSize:"13px",color:"#9ca3af"},children:["카드 ",t+1]})]})]})})]},t))]})},c={name:"지연 이미지 로드",parameters:{docs:{description:{story:"뷰포트에 진입할 때 이미지를 로드하는 Lazy Loading 예시입니다."}}},render:()=>e.jsxs("div",{style:{fontFamily:"system-ui",height:"400px",overflowY:"auto",border:"1px solid #e5e7eb",borderRadius:"8px",padding:"16px"},children:[e.jsx("div",{style:{fontSize:"13px",color:"#9ca3af",marginBottom:"16px"},children:"스크롤하면 이미지가 로드됩니다"}),["sky","forest","city","mountain","beach"].map((n,t)=>e.jsxs("div",{style:{marginBottom:"24px"},children:[t>0&&e.jsx("div",{style:{height:"20px"}}),e.jsx(o,{once:!0,threshold:.1,children:r=>e.jsx("div",{style:{width:"100%",height:"160px",borderRadius:"10px",overflow:"hidden",background:"#f3f4f6",position:"relative"},children:r?e.jsx("div",{style:{width:"100%",height:"100%",background:["#dbeafe","#dcfce7","#e0e7ff","#d1fae5","#fce7f3"][t],display:"flex",alignItems:"center",justifyContent:"center",fontSize:"48px"},children:["☁️","🌲","🏙️","🏔️","🏖️"][t]}):e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",color:"#d1d5db",fontSize:"24px"},children:"🖼️"})})})]},n))]})},p={name:"카운터 애니메이션",parameters:{docs:{description:{story:"통계 수치가 보이는 순간 카운팅 애니메이션이 시작됩니다."}}},render:()=>{function n({value:t,label:r,once:s=!0}){return e.jsx(o,{once:s,threshold:.5,children:i=>e.jsxs("div",{style:{textAlign:"center",padding:"20px"},children:[e.jsx("div",{style:{fontSize:"40px",fontWeight:900,color:"#3b82f6",transition:"opacity 0.6s, transform 0.6s",opacity:i?1:0,transform:i?"scale(1)":"scale(0.5)"},children:i?t:"0"}),e.jsx("div",{style:{fontSize:"13px",color:"#9ca3af",marginTop:"4px"},children:r})]})})}return e.jsxs("div",{style:{fontFamily:"system-ui",height:"380px",overflowY:"auto",border:"1px solid #e5e7eb",borderRadius:"8px"},children:[e.jsx("div",{style:{height:"280px",display:"flex",alignItems:"center",justifyContent:"center",color:"#9ca3af",fontSize:"13px"},children:"↓ 아래로 스크롤하세요"}),e.jsxs("div",{style:{padding:"24px",background:"#f9fafb",display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"8px"},children:[e.jsx(n,{value:"1.2M+",label:"활성 사용자"}),e.jsx(n,{value:"99.9%",label:"가동률"}),e.jsx(n,{value:"4.9/5",label:"평균 평점"})]}),e.jsx("div",{style:{height:"100px"}})]})}};var g,v,b;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '기본 (뷰포트 진입 감지)',
  render: () => <div style={{
    fontFamily: 'system-ui',
    height: '360px',
    overflowY: 'auto',
    border: '1px solid #e5e7eb',
    borderRadius: '8px'
  }}>
      <div style={{
      padding: '20px',
      fontSize: '13px',
      color: '#9ca3af'
    }}>아래로 스크롤하세요</div>
      <div style={{
      height: '300px'
    }} />
      <Intersection threshold={0.3}>
        {inView => <div style={{
        margin: '20px',
        padding: '24px',
        background: inView ? '#dbeafe' : '#f9fafb',
        border: \`2px solid \${inView ? '#3b82f6' : '#e5e7eb'}\`,
        borderRadius: '12px',
        transition: 'all 0.4s',
        textAlign: 'center'
      }}>
            <div style={{
          fontSize: '32px',
          marginBottom: '8px'
        }}>{inView ? '👀' : '😴'}</div>
            <div style={{
          fontSize: '15px',
          fontWeight: 700,
          color: inView ? '#1e40af' : '#9ca3af'
        }}>
              {inView ? '보이는 영역입니다!' : '아직 스크롤이 필요합니다'}
            </div>
          </div>}
      </Intersection>
      <div style={{
      height: '200px'
    }} />
    </div>
}`,...(b=(v=d.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var j,S,w;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '스크롤 페이드 인',
  parameters: {
    docs: {
      description: {
        story: '요소가 뷰포트에 진입하면 페이드 인 애니메이션이 실행됩니다.'
      }
    }
  },
  render: () => <div style={{
    fontFamily: 'system-ui',
    height: '420px',
    overflowY: 'auto',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '20px'
  }}>
      <div style={{
      fontSize: '13px',
      color: '#9ca3af',
      marginBottom: '24px'
    }}>아래로 스크롤하면 카드가 나타납니다</div>
      {Array.from({
      length: 5
    }, (_, i) => <div key={i} style={{
      marginBottom: '60px'
    }}>
          <div style={{
        height: '40px'
      }} />
          <Intersection once threshold={0.2}>
            {inView => <div style={{
          padding: '20px 24px',
          background: '#fff',
          border: '1px solid #e5e7eb',
          borderRadius: '12px',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(32px)',
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
                <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '10px',
            background: ['#dbeafe', '#dcfce7', '#fce7f3', '#fef3c7', '#e0e7ff'][i],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '22px'
          }}>
                  {['🚀', '🎨', '🔐', '📊', '🌟'][i]}
                </div>
                <div>
                  <div style={{
              fontSize: '15px',
              fontWeight: 700,
              color: '#111'
            }}>{['빠른 성능', '아름다운 디자인', '보안 강화', '데이터 분석', '팀 협업'][i]}</div>
                  <div style={{
              fontSize: '13px',
              color: '#9ca3af'
            }}>카드 {i + 1}</div>
                </div>
              </div>}
          </Intersection>
        </div>)}
    </div>
}`,...(w=(S=l.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var I,z,R;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '지연 이미지 로드',
  parameters: {
    docs: {
      description: {
        story: '뷰포트에 진입할 때 이미지를 로드하는 Lazy Loading 예시입니다.'
      }
    }
  },
  render: () => <div style={{
    fontFamily: 'system-ui',
    height: '400px',
    overflowY: 'auto',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '16px'
  }}>
      <div style={{
      fontSize: '13px',
      color: '#9ca3af',
      marginBottom: '16px'
    }}>스크롤하면 이미지가 로드됩니다</div>
      {['sky', 'forest', 'city', 'mountain', 'beach'].map((seed, i) => <div key={seed} style={{
      marginBottom: '24px'
    }}>
          {i > 0 && <div style={{
        height: '20px'
      }} />}
          <Intersection once threshold={0.1}>
            {inView => <div style={{
          width: '100%',
          height: '160px',
          borderRadius: '10px',
          overflow: 'hidden',
          background: '#f3f4f6',
          position: 'relative'
        }}>
                {inView ? <div style={{
            width: '100%',
            height: '100%',
            background: ['#dbeafe', '#dcfce7', '#e0e7ff', '#d1fae5', '#fce7f3'][i],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '48px'
          }}>
                    {['☁️', '🌲', '🏙️', '🏔️', '🏖️'][i]}
                  </div> : <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            color: '#d1d5db',
            fontSize: '24px'
          }}>🖼️</div>}
              </div>}
          </Intersection>
        </div>)}
    </div>
}`,...(R=(z=c.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var V,k,A;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '카운터 애니메이션',
  parameters: {
    docs: {
      description: {
        story: '통계 수치가 보이는 순간 카운팅 애니메이션이 시작됩니다.'
      }
    }
  },
  render: () => {
    function AnimatedStat({
      value,
      label,
      once = true
    }: {
      value: string;
      label: string;
      once?: boolean;
    }) {
      return <Intersection once={once} threshold={0.5}>
          {inView => <div style={{
          textAlign: 'center',
          padding: '20px'
        }}>
              <div style={{
            fontSize: '40px',
            fontWeight: 900,
            color: '#3b82f6',
            transition: 'opacity 0.6s, transform 0.6s',
            opacity: inView ? 1 : 0,
            transform: inView ? 'scale(1)' : 'scale(0.5)'
          }}>
                {inView ? value : '0'}
              </div>
              <div style={{
            fontSize: '13px',
            color: '#9ca3af',
            marginTop: '4px'
          }}>{label}</div>
            </div>}
        </Intersection>;
    }
    return <div style={{
      fontFamily: 'system-ui',
      height: '380px',
      overflowY: 'auto',
      border: '1px solid #e5e7eb',
      borderRadius: '8px'
    }}>
        <div style={{
        height: '280px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#9ca3af',
        fontSize: '13px'
      }}>
          ↓ 아래로 스크롤하세요
        </div>
        <div style={{
        padding: '24px',
        background: '#f9fafb',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '8px'
      }}>
          <AnimatedStat value="1.2M+" label="활성 사용자" />
          <AnimatedStat value="99.9%" label="가동률" />
          <AnimatedStat value="4.9/5" label="평균 평점" />
        </div>
        <div style={{
        height: '100px'
      }} />
      </div>;
  }
}`,...(A=(k=p.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};const _=["Default","FadeIn","LazyImage","CounterAnimation"];export{p as CounterAnimation,d as Default,l as FadeIn,c as LazyImage,_ as __namedExportsOrder,W as default};
