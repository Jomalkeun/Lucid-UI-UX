import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-BxXVWNx3.js";import{d as N}from"./reference-types-4ftiVeOu.js";import"./_commonjsHelpers-CqkleIqs.js";function p({children:s,onRefresh:r,pullDistance:o=80,refreshDistance:a=60,loadingContent:t,pullContent:l,releaseContent:k,height:F="100%",disabled:d=!1,style:B}){const[u,f]=n.useState(0),[i,m]=n.useState("idle"),v=n.useRef(0),b=n.useRef(null),Y=n.useCallback(g=>{if(d)return;const c=b.current;!c||c.scrollTop>0||(v.current=g.touches[0].clientY)},[d]),I=n.useCallback(g=>{if(d||i==="loading")return;const c=g.touches[0].clientY-v.current;if(c<=0)return;const R=Math.min(c*.5,o);f(R),m(R>=a?"release":"pulling")},[d,i,o,a]),W=n.useCallback(async()=>{d||(i==="release"?(m("loading"),f(50),await r(),f(0),m("idle")):(f(0),m("idle")))},[d,i,r]),A=i==="loading"?t??e.jsx("span",{style:{display:"inline-block",animation:"spin 1s linear infinite",fontSize:"20px"},children:"⟳"}):i==="release"?k??e.jsx("span",{style:{fontSize:"14px",fontWeight:600},children:"↑ 새로고침"}):l??e.jsx("span",{style:{fontSize:"14px"},children:"↓ 당겨서 새로고침"});return e.jsxs("div",{style:{position:"relative",height:F,overflow:"hidden",...B},children:[e.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg) } }"}),e.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,zIndex:10,display:"flex",alignItems:"center",justifyContent:"center",height:`${u}px`,overflow:"hidden",transition:i==="idle"?"height 0.3s":"none",background:"#f9fafb",color:"#6b7280",fontFamily:"system-ui",fontSize:"14px",borderBottom:u>0?"1px solid #e5e7eb":"none"},children:u>10&&A}),e.jsx("div",{ref:b,onTouchStart:Y,onTouchMove:I,onTouchEnd:W,style:{height:"100%",overflowY:"auto",transform:`translateY(${u}px)`,transition:i==="idle"?"transform 0.3s":"none"},children:s})]})}p.__docgenInfo={description:"",methods:[],displayName:"PullToRefresh",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},onRefresh:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Promise<void> | void",signature:{arguments:[],return:{name:"union",raw:"Promise<void> | void",elements:[{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"},{name:"void"}]}}},description:""},pullDistance:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"80",computed:!1}},refreshDistance:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"60",computed:!1}},loadingContent:{required:!1,tsType:{name:"ReactNode"},description:""},pullContent:{required:!1,tsType:{name:"ReactNode"},description:""},releaseContent:{required:!1,tsType:{name:"ReactNode"},description:""},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"'100%'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const _=N([{library:"Quasar",component:"Pull to Refresh",url:"https://quasar.dev/vue-components/pull-to-refresh",usedFor:["design","behavior","api"],relation:"adapted"},{library:"Ionic",component:"Refresher",url:"https://ionicframework.com/docs/api/refresher",usedFor:["behavior","accessibility","api"],relation:"compared"}]),O={title:"Molecules/Display/PullToRefresh",component:p,tags:["autodocs","ref:quasar","ref:ionic"],parameters:{references:_,docs:{description:{component:"\n## PullToRefresh\n\n모바일에서 화면을 아래로 당겨 새로고침을 트리거하는 컴포넌트입니다.\n터치 디바이스에서 동작하며, 스토리북에서는 터치 이벤트 시뮬레이션이 필요합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `onRefresh` | `() => Promise<void>` | - | 새로고침 콜백 |\n| `pullDistance` | `number` | `80` | 최대 당김 거리(px) |\n| `refreshDistance` | `number` | `60` | 새로고침 발동 거리(px) |\n| `height` | `number\\|string` | `'100%'` | 컨테이너 높이 |\n        "}}},argTypes:{pullDistance:{control:{type:"range",min:40,max:160,step:10},table:{category:"Behavior"}},refreshDistance:{control:{type:"range",min:30,max:120,step:10},table:{category:"Behavior"}},disabled:{control:"boolean",table:{category:"State"}}},args:{pullDistance:80,refreshDistance:60,disabled:!1}};function E({count:s}){const r=["#dbeafe","#dcfce7","#fce7f3","#fef3c7"],o=["📰","🎨","💡","🚀"];return e.jsx("div",{style:{fontFamily:"system-ui"},children:Array.from({length:s},(a,t)=>e.jsxs("div",{style:{padding:"14px 16px",borderBottom:"1px solid #f0f0f0",display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{width:"44px",height:"44px",borderRadius:"10px",background:r[t%4],display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",flexShrink:0},children:o[t%4]}),e.jsxs("div",{children:[e.jsxs("div",{style:{fontWeight:600,fontSize:"14px",color:"#111",marginBottom:"2px"},children:["게시물 #",s-t]}),e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af"},children:"방금 업데이트됨"})]})]},t))})}function V(){const[s,r]=n.useState(8),[o,a]=n.useState(0),t=async()=>{await new Promise(l=>setTimeout(l,1500)),r(l=>l+3),a(l=>l+1)};return e.jsxs("div",{style:{width:"360px",border:"1px solid #e5e7eb",borderRadius:"12px",overflow:"hidden"},children:[e.jsx("div",{style:{padding:"12px 16px",background:"#f9fafb",borderBottom:"1px solid #e5e7eb",fontFamily:"system-ui",fontSize:"13px",color:"#9ca3af"},children:"📱 모바일 뷰 — 위로 스와이프해서 새로고침"}),e.jsx(p,{onRefresh:t,height:"320px",children:e.jsx(E,{count:s},o)})]})}const h={name:"기본",parameters:{docs:{description:{story:"터치 디바이스나 개발자 도구 모바일 모드에서 위로 스와이프하면 새로고침됩니다."}}},render:()=>e.jsx(V,{})},x={name:"커스텀 인디케이터",render:()=>{function s(){const[r,o]=n.useState(0),a=async()=>{await new Promise(t=>setTimeout(t,1e3)),o(t=>t+1)};return e.jsx("div",{style:{width:"320px",border:"1px solid #e5e7eb",borderRadius:"12px",overflow:"hidden"},children:e.jsx(p,{onRefresh:a,height:"280px",pullContent:e.jsx("span",{style:{fontSize:"12px",color:"#9ca3af"},children:"↓ 당기세요"}),releaseContent:e.jsx("span",{style:{fontSize:"12px",color:"#3b82f6",fontWeight:600},children:"↑ 놓으세요!"}),loadingContent:e.jsx("span",{style:{fontSize:"12px",color:"#6b7280"},children:"🔄 새로고침 중..."}),children:e.jsxs("div",{style:{padding:"20px",textAlign:"center",fontFamily:"system-ui"},children:[e.jsx("div",{style:{fontSize:"32px",marginBottom:"8px"},children:"🎉"}),e.jsxs("div",{style:{fontWeight:700,fontSize:"16px"},children:["새로고침 횟수: ",r]})]})})})}return e.jsx(s,{})}},y={name:"비활성화",render:()=>e.jsx(p,{onRefresh:async()=>{},disabled:!0,height:"160px",children:e.jsx("div",{style:{padding:"20px",fontFamily:"system-ui",color:"#9ca3af",textAlign:"center",fontSize:"14px"},children:"비활성화 — 새로고침 불가"})})};var S,j,T;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '기본',
  parameters: {
    docs: {
      description: {
        story: '터치 디바이스나 개발자 도구 모바일 모드에서 위로 스와이프하면 새로고침됩니다.'
      }
    }
  },
  render: () => <PTRDemo />
}`,...(T=(j=h.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var C,P,w;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '커스텀 인디케이터',
  render: () => {
    function CustomPTRDemo() {
      const [refreshCount, setRefreshCount] = useState(0);
      const handleRefresh = async () => {
        await new Promise<void>(r => setTimeout(r, 1000));
        setRefreshCount(c => c + 1);
      };
      return <div style={{
        width: '320px',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        overflow: 'hidden'
      }}>
          <PullToRefresh onRefresh={handleRefresh} height="280px" pullContent={<span style={{
          fontSize: '12px',
          color: '#9ca3af'
        }}>↓ 당기세요</span>} releaseContent={<span style={{
          fontSize: '12px',
          color: '#3b82f6',
          fontWeight: 600
        }}>↑ 놓으세요!</span>} loadingContent={<span style={{
          fontSize: '12px',
          color: '#6b7280'
        }}>🔄 새로고침 중...</span>}>
            <div style={{
            padding: '20px',
            textAlign: 'center',
            fontFamily: 'system-ui'
          }}>
              <div style={{
              fontSize: '32px',
              marginBottom: '8px'
            }}>🎉</div>
              <div style={{
              fontWeight: 700,
              fontSize: '16px'
            }}>새로고침 횟수: {refreshCount}</div>
            </div>
          </PullToRefresh>
        </div>;
    }
    return <CustomPTRDemo />;
  }
}`,...(w=(P=x.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var z,D,q;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '비활성화',
  render: () => <PullToRefresh onRefresh={async () => {}} disabled height="160px">
      <div style={{
      padding: '20px',
      fontFamily: 'system-ui',
      color: '#9ca3af',
      textAlign: 'center',
      fontSize: '14px'
    }}>
        비활성화 — 새로고침 불가
      </div>
    </PullToRefresh>
}`,...(q=(D=y.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};const Q=["Default","CustomContent","Disabled"];export{x as CustomContent,h as Default,y as Disabled,Q as __namedExportsOrder,O as default};
