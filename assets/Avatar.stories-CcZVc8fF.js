import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as K}from"./reference-types-4ftiVeOu.js";import{r as d}from"./index-BxXVWNx3.js";import{u as D,c as G}from"./index-Cuo70N6w.js";import{u as Q}from"./index-D5tP6kvT.js";import{P as y}from"./index-DnJVWBh-.js";import{c as w}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BuIYde5q.js";import"./index-DCvtqWl1.js";import"./index-DtBajwEi.js";var h="Avatar",[$]=G(h),H=[0,()=>{}],[X,M]=$(h),q=d.forwardRef((a,s)=>{const{__scopeAvatar:r,...i}=a,[o,t]=d.useState("idle"),[l,n]=Z();return e.jsx(X,{scope:r,imageLoadingStatus:o,setImageLoadingStatus:t,imageCount:l,setImageCount:n,children:e.jsx(y.span,{...i,ref:s})})});q.displayName=h;var U="AvatarImage",O=d.forwardRef((a,s)=>{const{__scopeAvatar:r,src:i,onLoadingStatusChange:o,...t}=a,l=M(U,r);ee(l.setImageCount);const n=Y(i,{referrerPolicy:t.referrerPolicy,crossOrigin:t.crossOrigin,loadingStatus:l.imageLoadingStatus,setLoadingStatus:l.setImageLoadingStatus}),p=Q(m=>{o==null||o(m)}),u=d.useRef(n);return D(()=>{const m=u.current;u.current=n,n!==m&&p(n)},[n,p]),n==="loaded"?e.jsx(y.img,{...t,ref:s,src:i}):null});O.displayName=U;var J="AvatarFallback",V=d.forwardRef((a,s)=>{const{__scopeAvatar:r,delayMs:i,...o}=a,t=M(J,r),[l,n]=d.useState(i===void 0);return d.useEffect(()=>{if(i!==void 0){const p=window.setTimeout(()=>n(!0),i);return()=>window.clearTimeout(p)}},[i]),l&&t.imageLoadingStatus!=="loaded"?e.jsx(y.span,{...o,ref:s}):null});V.displayName=J;function Y(a,{loadingStatus:s,setLoadingStatus:r,referrerPolicy:i,crossOrigin:o}){return D(()=>{if(!a){r("error");return}const t=new window.Image,l=p=>{const u=p.currentTarget;r(S(u))},n=()=>r("error");return t.addEventListener("load",l),t.addEventListener("error",n),i&&(t.referrerPolicy=i),t.crossOrigin=o??null,t.src=a,r(S(t)),()=>{t.removeEventListener("load",l),t.removeEventListener("error",n),r("idle")}},[a,o,i,r]),s}function S(a){return a.complete?a.naturalWidth>0?"loaded":"error":"loading"}function Z(){let a=H;{a=d.useState(0);const[s]=a,r=d.useRef(!1);d.useEffect(()=>{s>1&&!r.current&&(r.current=!0,console.warn("Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior."))},[s])}return a}function ee(a){d.useEffect(()=>(a(s=>s+1),()=>{a(s=>s-1)}),[a])}const ae={none:"",online:"bg-krds-success-base",offline:"bg-krds-gray-40",away:"bg-krds-warning-base",busy:"bg-krds-danger-base"},c=d.forwardRef(({src:a,initials:s,size:r=40,bg:i,ariaLabel:o,status:t="none",className:l,style:n,...p},u)=>{const m=Math.round(r*.4),A=Math.max(8,Math.round(r*.22));return e.jsxs(q,{ref:u,role:"img","aria-label":o,className:w("relative inline-flex shrink-0 select-none items-center justify-center rounded-full overflow-hidden",l),style:{width:r,height:r,background:i??"var(--krds-color-light-gray-10)",...n},...p,children:[a?e.jsx(O,{src:a,alt:o??"",className:"h-full w-full object-cover"}):null,e.jsx(V,{className:"flex h-full w-full items-center justify-center font-medium text-krds-white",style:{fontSize:m},children:s?e.jsx("span",{children:s}):e.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"text-gray-400",style:{width:r*.6,height:r*.6},children:e.jsx("path",{d:"M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"})})}),t&&t!=="none"&&e.jsx("span",{"aria-hidden":"true",className:w("absolute rounded-full border-2 border-white",ae[t]),style:{width:A,height:A,bottom:0,right:0}})]})});c.displayName="Avatar";c.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:""},initials:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"40",computed:!1}},bg:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"union",raw:"'none' | 'online' | 'offline' | 'away' | 'busy'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'online'"},{name:"literal",value:"'offline'"},{name:"literal",value:"'away'"},{name:"literal",value:"'busy'"}]},description:"",defaultValue:{value:"'none'",computed:!1}}}};const re=K([{library:"Ark UI",component:"Avatar",url:"https://ark-ui.com/docs/components/avatar",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Radix UI",component:"Avatar",url:"https://www.radix-ui.com/primitives/docs/components/avatar",usedFor:["behavior","accessibility","api"],relation:"primitive"},{library:"Flowbite",component:"Avatar",url:"https://flowbite.com/docs/components/avatar/",usedFor:["comparison"],relation:"compared"},{library:"daisyUI",component:"Avatar",url:"https://daisyui.com/components/avatar/",usedFor:["comparison"],relation:"compared"},{library:"Ant Design",component:"Avatar",url:"https://ant.design/components/avatar/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Avatar",url:"https://www.chakra-ui.com/docs/components/avatar",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Avatar",url:"https://quasar.dev/vue-components/avatar",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Avatar",url:"https://base-ui.com/react/components/avatar",usedFor:["comparison"],relation:"compared"}]),fe={title:"Atoms/Primitives/Avatar",component:c,tags:["autodocs","custom-ui","ref:chakra-ui","ref:shadcn-ui","ref:ark-ui","ref:daisy-ui","ref:flowbite","ref:vuetify","ref:mui","ref:quasar","ref:ant-design","ref:base-ui","ref:radix-ui"],argTypes:{size:{control:"number",table:{category:"Appearance"}},initials:{control:"text",table:{category:"Content"}},src:{control:"text",table:{category:"Content"}},ariaLabel:{control:"text",table:{category:"Accessibility"}},bg:{control:"color",table:{category:"Appearance"}},status:{description:"아바타 우하단에 표시할 온라인 상태 점",control:{type:"select"},options:["none","online","offline","away","busy"],table:{type:{summary:"'none' | 'online' | 'offline' | 'away' | 'busy'"},defaultValue:{summary:"'none'"},category:"Status"}}},args:{size:40,initials:"관",ariaLabel:"관리자 프로필",bg:"#534AB7",status:"none"},parameters:{layout:"centered"},render:a=>e.jsx(c,{...a,children:a.children??a.label??a.text??void 0})},f={name:"이니셜 (한글)",args:{initials:"관",ariaLabel:"관리자",bg:"#534AB7"}},g={name:"이니셜 (영문)",args:{initials:"JW",ariaLabel:"JW 사용자",bg:"#0F6E56"}},b={name:"이미지 없음 (Placeholder)",args:{initials:"",src:"",ariaLabel:"프로필 이미지 없음",bg:"#EFEEE8"}},v={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",padding:"16px"},children:[e.jsx(c,{ariaLabel:"관리자",bg:"#534AB7",initials:"관",size:24}),e.jsx(c,{ariaLabel:"관리자",bg:"#534AB7",initials:"관",size:32}),e.jsx(c,{ariaLabel:"관리자",bg:"#534AB7",initials:"관",size:40}),e.jsx(c,{ariaLabel:"관리자",bg:"#534AB7",initials:"관",size:56})]}),name:"크기 비교",parameters:{controls:{disable:!0}}},x={render:()=>e.jsxs("div",{style:{display:"flex",gap:"28px",alignItems:"flex-end",padding:"16px",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(c,{initials:"김",bg:"#4F46E5",ariaLabel:"김",status:"online"}),e.jsx("span",{style:{fontSize:"11px",color:"#888"},children:"온라인"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(c,{initials:"이",bg:"#888",ariaLabel:"이",status:"offline"}),e.jsx("span",{style:{fontSize:"11px",color:"#888"},children:"오프라인"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(c,{initials:"박",bg:"#C54B1A",ariaLabel:"박",status:"away"}),e.jsx("span",{style:{fontSize:"11px",color:"#888"},children:"자리 비움"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(c,{initials:"최",bg:"#B91C1C",ariaLabel:"최",status:"busy"}),e.jsx("span",{style:{fontSize:"11px",color:"#888"},children:"바쁨"})]})]}),name:"온라인 상태 (With Status)",parameters:{references:re,docs:{description:{story:"\n`status` prop으로 아바타 우하단에 상태 점(Status Dot)을 표시합니다.\nControls에서 `status` 옵션을 변경하면 기본 스토리에서도 확인할 수 있습니다.\n        "}},controls:{disable:!0}}};var L,I,j;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '이니셜 (한글)',
  args: {
    initials: '관',
    ariaLabel: '관리자',
    bg: '#534AB7'
  } as any
}`,...(j=(I=f.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var E,C,z;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '이니셜 (영문)',
  args: {
    initials: 'JW',
    ariaLabel: 'JW 사용자',
    bg: '#0F6E56'
  } as any
}`,...(z=(C=g.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var T,k,B;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '이미지 없음 (Placeholder)',
  args: {
    initials: '',
    src: '',
    ariaLabel: '프로필 이미지 없음',
    bg: '#EFEEE8'
  } as any
}`,...(B=(k=b.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var F,R,_;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px'
  }}>
        <Avatar ariaLabel="관리자" bg="#534AB7" initials="관" size={24} />
        <Avatar ariaLabel="관리자" bg="#534AB7" initials="관" size={32} />
        <Avatar ariaLabel="관리자" bg="#534AB7" initials="관" size={40} />
        <Avatar ariaLabel="관리자" bg="#534AB7" initials="관" size={56} />
      </div>,
  name: '크기 비교',
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(_=(R=v.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var N,P,W;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '28px',
    alignItems: 'flex-end',
    padding: '16px',
    flexWrap: 'wrap'
  }}>
        <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '6px'
    }}>
          <Avatar initials="김" bg="#4F46E5" ariaLabel="김" status="online" />
          <span style={{
        fontSize: '11px',
        color: '#888'
      }}>온라인</span>
        </div>
        <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '6px'
    }}>
          <Avatar initials="이" bg="#888" ariaLabel="이" status="offline" />
          <span style={{
        fontSize: '11px',
        color: '#888'
      }}>오프라인</span>
        </div>
        <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '6px'
    }}>
          <Avatar initials="박" bg="#C54B1A" ariaLabel="박" status="away" />
          <span style={{
        fontSize: '11px',
        color: '#888'
      }}>자리 비움</span>
        </div>
        <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '6px'
    }}>
          <Avatar initials="최" bg="#B91C1C" ariaLabel="최" status="busy" />
          <span style={{
        fontSize: '11px',
        color: '#888'
      }}>바쁨</span>
        </div>
      </div>,
  name: '온라인 상태 (With Status)',
  parameters: {
    references,
    docs: {
      description: {
        story: \`
\\\`status\\\` prop으로 아바타 우하단에 상태 점(Status Dot)을 표시합니다.
Controls에서 \\\`status\\\` 옵션을 변경하면 기본 스토리에서도 확인할 수 있습니다.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(W=(P=x.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};const ge=["InitialsKo","InitialsEn","Placeholder","Sizes","WithStatus"];export{g as InitialsEn,f as InitialsKo,b as Placeholder,v as Sizes,x as WithStatus,ge as __namedExportsOrder,fe as default};
