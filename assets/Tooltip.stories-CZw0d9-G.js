import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{d as we,c as w}from"./reference-types-CC3VHbJD.js";import{r as s}from"./index-BxXVWNx3.js";import{u as Ce,c as C}from"./index-BIfB_hJr.js";import{u as le,d as je}from"./index-CSKKChMh.js";import{c as Ee}from"./index-Cuo70N6w.js";import{P as Pe,D as Re}from"./index-D1FEdIFz.js";import{u as De}from"./index-BKM4mA3Z.js";import{R as Oe,A as ke,a as Ae,c as ce,C as Ie}from"./index-CIv5at7y.js";import{P as pe}from"./index-D_4yO-tZ.js";import{P as de}from"./index-W0uFi8-r.js";import{c as _e}from"./index-CkIaN0ex.js";import{c as Se}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-D5tP6kvT.js";import"./index-BuIYde5q.js";import"./index-DCvtqWl1.js";import"./index-BjCkHmxr.js";var Be=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Le="VisuallyHidden",ue=s.forwardRef((e,r)=>n.jsx(de.span,{...e,ref:r,style:{...Be,...e.style}}));ue.displayName=Le;var ze=ue,[L]=Ee("Tooltip",[ce]),z=ce(),me="TooltipProvider",Ne=700,N="tooltip.open",[He,V]=L(me),fe=e=>{const{__scopeTooltip:r,delayDuration:t=Ne,skipDelayDuration:o=300,disableHoverableContent:a=!1,children:l}=e,c=s.useRef(!0),u=s.useRef(!1),i=s.useRef(0);return s.useEffect(()=>{const d=i.current;return()=>window.clearTimeout(d)},[]),n.jsx(He,{scope:r,isOpenDelayedRef:c,delayDuration:t,onOpen:s.useCallback(()=>{o<=0||(window.clearTimeout(i.current),c.current=!1)},[o]),onClose:s.useCallback(()=>{o<=0||(window.clearTimeout(i.current),i.current=window.setTimeout(()=>c.current=!0,o))},[o]),isPointerInTransitRef:u,onPointerInTransitChange:s.useCallback(d=>{u.current=d},[]),disableHoverableContent:a,children:l})};fe.displayName=me;var D="Tooltip",[Ve,O]=L(D),ve=e=>{const{__scopeTooltip:r,children:t,open:o,defaultOpen:a,onOpenChange:l,disableHoverableContent:c,delayDuration:u}=e,i=V(D,e.__scopeTooltip),d=z(r),[p,m]=s.useState(null),v=De(),f=s.useRef(0),x=c??i.disableHoverableContent,h=u??i.delayDuration,y=s.useRef(!1),[T,g]=Ce({prop:o,defaultProp:a??!1,onChange:F=>{F?(i.onOpen(),document.dispatchEvent(new CustomEvent(N))):i.onClose(),l==null||l(F)},caller:D}),E=s.useMemo(()=>T?y.current?"delayed-open":"instant-open":"closed",[T]),P=s.useCallback(()=>{window.clearTimeout(f.current),f.current=0,y.current=!1,g(!0)},[g]),R=s.useCallback(()=>{window.clearTimeout(f.current),f.current=0,g(!1)},[g]),q=s.useCallback(()=>{window.clearTimeout(f.current),f.current=window.setTimeout(()=>{y.current=!0,g(!0),f.current=0},h)},[h,g]);return s.useEffect(()=>()=>{f.current&&(window.clearTimeout(f.current),f.current=0)},[]),n.jsx(Oe,{...d,children:n.jsx(Ve,{scope:r,contentId:v,open:T,stateAttribute:E,trigger:p,onTriggerChange:m,onTriggerEnter:s.useCallback(()=>{i.isOpenDelayedRef.current?q():P()},[i.isOpenDelayedRef,q,P]),onTriggerLeave:s.useCallback(()=>{x?R():(window.clearTimeout(f.current),f.current=0)},[R,x]),onOpen:P,onClose:R,disableHoverableContent:x,children:t})})};ve.displayName=D;var H="TooltipTrigger",xe=s.forwardRef((e,r)=>{const{__scopeTooltip:t,...o}=e,a=O(H,t),l=V(H,t),c=z(t),u=s.useRef(null),i=le(r,u,a.onTriggerChange),d=s.useRef(!1),p=s.useRef(!1),m=s.useCallback(()=>d.current=!1,[]);return s.useEffect(()=>()=>document.removeEventListener("pointerup",m),[m]),n.jsx(ke,{asChild:!0,...c,children:n.jsx(de.button,{"aria-describedby":a.open?a.contentId:void 0,"data-state":a.stateAttribute,...o,ref:i,onPointerMove:C(e.onPointerMove,v=>{v.pointerType!=="touch"&&!p.current&&!l.isPointerInTransitRef.current&&(a.onTriggerEnter(),p.current=!0)}),onPointerLeave:C(e.onPointerLeave,()=>{a.onTriggerLeave(),p.current=!1}),onPointerDown:C(e.onPointerDown,()=>{a.open&&a.onClose(),d.current=!0,document.addEventListener("pointerup",m,{once:!0})}),onFocus:C(e.onFocus,()=>{d.current||a.onOpen()}),onBlur:C(e.onBlur,a.onClose),onClick:C(e.onClick,a.onClose)})})});xe.displayName=H;var M="TooltipPortal",[Me,qe]=L(M,{forceMount:void 0}),ye=e=>{const{__scopeTooltip:r,forceMount:t,children:o,container:a}=e,l=O(M,r);return n.jsx(Me,{scope:r,forceMount:t,children:n.jsx(pe,{present:t||l.open,children:n.jsx(Pe,{asChild:!0,container:a,children:o})})})};ye.displayName=M;var j="TooltipContent",he=s.forwardRef((e,r)=>{const t=qe(j,e.__scopeTooltip),{forceMount:o=t.forceMount,side:a="top",...l}=e,c=O(j,e.__scopeTooltip);return n.jsx(pe,{present:o||c.open,children:c.disableHoverableContent?n.jsx(ge,{side:a,...l,ref:r}):n.jsx(Fe,{side:a,...l,ref:r})})}),Fe=s.forwardRef((e,r)=>{const t=O(j,e.__scopeTooltip),o=V(j,e.__scopeTooltip),a=s.useRef(null),l=le(r,a),[c,u]=s.useState(null),{trigger:i,onClose:d}=t,p=a.current,{onPointerInTransitChange:m}=o,v=s.useCallback(()=>{u(null),m(!1)},[m]),f=s.useCallback((x,h)=>{const y=x.currentTarget,T={x:x.clientX,y:x.clientY},g=Ye(T,y.getBoundingClientRect()),E=Ke(T,g),P=Qe(h.getBoundingClientRect()),R=$e([...E,...P]);u(R),m(!0)},[m]);return s.useEffect(()=>()=>v(),[v]),s.useEffect(()=>{if(i&&p){const x=y=>f(y,p),h=y=>f(y,i);return i.addEventListener("pointerleave",x),p.addEventListener("pointerleave",h),()=>{i.removeEventListener("pointerleave",x),p.removeEventListener("pointerleave",h)}}},[i,p,f,v]),s.useEffect(()=>{if(c){const x=h=>{const y=h.target,T={x:h.clientX,y:h.clientY},g=(i==null?void 0:i.contains(y))||(p==null?void 0:p.contains(y)),E=!Xe(T,c);g?v():E&&(v(),d())};return document.addEventListener("pointermove",x),()=>document.removeEventListener("pointermove",x)}},[i,p,c,d,v]),n.jsx(ge,{...e,ref:l})}),[Ue,Ge]=L(D,{isInside:!1}),We=je("TooltipContent"),ge=s.forwardRef((e,r)=>{const{__scopeTooltip:t,children:o,"aria-label":a,onEscapeKeyDown:l,onPointerDownOutside:c,...u}=e,i=O(j,t),d=z(t),{onClose:p}=i;return s.useEffect(()=>(document.addEventListener(N,p),()=>document.removeEventListener(N,p)),[p]),s.useEffect(()=>{if(i.trigger){const m=v=>{v.target instanceof Node&&v.target.contains(i.trigger)&&p()};return window.addEventListener("scroll",m,{capture:!0}),()=>window.removeEventListener("scroll",m,{capture:!0})}},[i.trigger,p]),n.jsx(Re,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:c,onFocusOutside:m=>m.preventDefault(),onDismiss:p,children:n.jsxs(Ie,{"data-state":i.stateAttribute,...d,...u,ref:r,style:{...u.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[n.jsx(We,{children:o}),n.jsx(Ue,{scope:t,isInside:!0,children:n.jsx(ze,{id:i.contentId,role:"tooltip",children:a||o})})]})})});he.displayName=j;var be="TooltipArrow",Te=s.forwardRef((e,r)=>{const{__scopeTooltip:t,...o}=e,a=z(t);return Ge(be,t).isInside?null:n.jsx(Ae,{...a,...o,ref:r})});Te.displayName=be;function Ye(e,r){const t=Math.abs(r.top-e.y),o=Math.abs(r.bottom-e.y),a=Math.abs(r.right-e.x),l=Math.abs(r.left-e.x);switch(Math.min(t,o,a,l)){case l:return"left";case a:return"right";case t:return"top";case o:return"bottom";default:throw new Error("unreachable")}}function Ke(e,r,t=5){const o=[];switch(r){case"top":o.push({x:e.x-t,y:e.y+t},{x:e.x+t,y:e.y+t});break;case"bottom":o.push({x:e.x-t,y:e.y-t},{x:e.x+t,y:e.y-t});break;case"left":o.push({x:e.x+t,y:e.y-t},{x:e.x+t,y:e.y+t});break;case"right":o.push({x:e.x-t,y:e.y-t},{x:e.x-t,y:e.y+t});break}return o}function Qe(e){const{top:r,right:t,bottom:o,left:a}=e;return[{x:a,y:r},{x:t,y:r},{x:t,y:o},{x:a,y:o}]}function Xe(e,r){const{x:t,y:o}=e;let a=!1;for(let l=0,c=r.length-1;l<r.length;c=l++){const u=r[l],i=r[c],d=u.x,p=u.y,m=i.x,v=i.y;p>o!=v>o&&t<(m-d)*(o-p)/(v-p)+d&&(a=!a)}return a}function $e(e){const r=e.slice();return r.sort((t,o)=>t.x<o.x?-1:t.x>o.x?1:t.y<o.y?-1:t.y>o.y?1:0),Je(r)}function Je(e){if(e.length<=1)return e.slice();const r=[];for(let o=0;o<e.length;o++){const a=e[o];for(;r.length>=2;){const l=r[r.length-1],c=r[r.length-2];if((l.x-c.x)*(a.y-c.y)>=(l.y-c.y)*(a.x-c.x))r.pop();else break}r.push(a)}r.pop();const t=[];for(let o=e.length-1;o>=0;o--){const a=e[o];for(;t.length>=2;){const l=t[t.length-1],c=t[t.length-2];if((l.x-c.x)*(a.y-c.y)>=(l.y-c.y)*(a.x-c.x))t.pop();else break}t.push(a)}return t.pop(),r.length===1&&t.length===1&&r[0].x===t[0].x&&r[0].y===t[0].y?r:r.concat(t)}var Ze=fe,et=ve,tt=xe,rt=ye,ot=he,nt=Te;const at=_e("z-50 overflow-hidden rounded px-2 py-1 text-krds-body-sm text-krds-white shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",{variants:{variant:{vertical:"bg-krds-gray-90 max-w-xs",horizontal:"bg-krds-gray-90 max-w-xs",box:"bg-krds-gray-90 max-w-sm px-3 py-2 rounded-md"}},defaultVariants:{variant:"vertical"}});function b({children:e,text:r,variant:t="vertical",className:o,delayDuration:a=300,side:l,open:c,defaultOpen:u,onOpenChange:i,disableHoverableContent:d}){const p=t==="horizontal"?"right":"top";return n.jsx(Ze,{delayDuration:a,children:n.jsxs(et,{open:c,defaultOpen:u,onOpenChange:i,disableHoverableContent:d,children:[n.jsx(tt,{asChild:!0,children:e?n.jsx("span",{className:"inline-flex",children:e}):n.jsx("span",{className:"inline-flex cursor-default",children:"?"})}),n.jsx(rt,{children:n.jsxs(ot,{side:l??p,sideOffset:6,className:Se(at({variant:t}),o),children:[r,n.jsx(nt,{className:"fill-krds-gray-90"})]})})]})})}b.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{text:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},delayDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},side:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},disableHoverableContent:{required:!1,tsType:{name:"boolean"},description:""},variant:{defaultValue:{value:"'vertical'",computed:!1},required:!1}}};const st=we([{library:"U.S. Web Design System",component:"Tooltip",url:"https://designsystem.digital.gov/components/tooltip/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"Ark UI",component:"Tooltip",url:"https://ark-ui.com/docs/components/tooltip",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Radix UI",component:"Tooltip",url:"https://www.radix-ui.com/primitives/docs/components/tooltip",usedFor:["behavior","accessibility","api"],relation:"primitive"},{library:"KRDS",component:"Tooltip",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-tooltip--docs",usedFor:["design","behavior","api"],relation:"adapted"},w("Bootstrap","Tooltips","https://getbootstrap.com/docs/5.3/components/tooltips/"),w("Flowbite","Tooltips","https://flowbite.com/docs/components/tooltips/"),w("daisyUI","Tooltip","https://daisyui.com/components/tooltip/"),w("Ant Design","Tooltip","https://ant.design/components/tooltip/"),w("Chakra UI","Tooltip","https://www.chakra-ui.com/docs/components/tooltip"),w("Quasar","Tooltip","https://quasar.dev/vue-components/tooltip"),w("Base UI","Tooltip","https://base-ui.com/react/components/tooltip")]),Et={title:"Atoms/Display/Tooltip",component:b,tags:["autodocs","display","ref:krds","ref:chakra-ui","ref:shadcn-ui","ref:ark-ui","ref:daisy-ui","ref:ant-design","ref:flowbite","ref:vuetify","ref:mui","ref:bootstrap","ref:quasar","ref:base-ui","ref:radix-ui","ref:uswds"],parameters:{references:st,docs:{description:{component:`
## Tooltip

**요소에 마우스를 올리거나 포커스할 때 보조 설명을 팝업으로 표시**하는 컴포넌트입니다.
트리거 요소를 \`default\` 슬롯으로 감싸면 자동으로 hover/focus 동작이 연결됩니다.

---

### variant

| variant | 설명 | 팝업 방향 |
|---|---|---|
| \`vertical\` (기본) | 트리거 위/아래에 표시 | 수직 |
| \`horizontal\` | 트리거 좌/우에 표시 | 수평 |
| \`box\` | 박스형 말풍선 스타일 | 수직 (더 큰 영역) |

> ⚠️ **기본값은 \`'vertical'\`입니다.** 수평 배치가 필요한 경우에만 \`'horizontal'\`을 지정하세요.

---

### 팝업 위치 자동 조정

뷰포트 경계에 가까울 때 위치가 자동으로 반전됩니다.
모바일(768px 이하)에서는 항상 수직 배치로 전환됩니다.

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | 트리거 요소에 \`aria-labelledby\`로 툴팁이 연결됩니다. |
| ✅ | 포커스 시에도 툴팁이 활성화됩니다. |
| ⚠️ | 툴팁에 링크·버튼 등 인터랙티브 요소를 넣지 마세요. 마우스 이동 시 사라집니다. |
| ⚠️ | 중요한 정보는 툴팁에만 의존하지 말고 본문에도 포함하세요. |
        `}}},argTypes:{text:{description:"툴팁에 표시되는 텍스트입니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"''"},category:"Content"}},variant:{description:"툴팁의 표시 스타일과 방향입니다.",control:{type:"select"},options:["vertical","horizontal","box"],table:{type:{summary:"'vertical' | 'horizontal' | 'box'"},defaultValue:{summary:"'vertical'"},category:"Appearance"}},delayDuration:{description:"트리거 후 툴팁을 열기까지의 지연 시간(ms)",control:{type:"number",min:0,max:2e3},table:{type:{summary:"number"},defaultValue:{summary:"300"},category:"Behavior"}},defaultOpen:{description:"처음 렌더링할 때 툴팁을 엽니다. 문서 예시와 QA에 유용합니다.",control:"boolean",table:{type:{summary:"boolean"},category:"State"}}},args:{text:"노출 기간을 설정하세요",variant:"vertical"},render:e=>n.jsx(b,{...e,children:e.children??e.label??e.text??void 0})},k={name:"수직 (Vertical)",args:{text:"고객 상태 기준 자동 정렬됩니다",variant:"vertical"},parameters:{docs:{description:{story:"**기본 variant**입니다. 트리거 위/아래에 팝업이 표시됩니다. 대부분의 경우 `vertical`이 적합합니다."}}}},A={name:"수평 (Horizontal)",args:{text:"노출 기간을 설정하세요",variant:"horizontal"},parameters:{docs:{description:{story:`
**트리거 좌/우에 팝업이 표시**됩니다.
행 내 인라인 요소 옆에 힌트를 표시할 때 수평 배치가 자연스럽습니다.
        `}}}},I={name:"박스 스타일 (Box)",args:{text:"채널별 노출 구좌가 달라집니다",variant:"box"},parameters:{docs:{description:{story:"**박스형 말풍선 스타일**입니다. 텍스트 양이 많거나 시각적으로 더 강조가 필요한 경우에 사용합니다."}}}},_={name:"초기 표시 상태",args:{text:"처음부터 표시되는 도움말입니다",defaultOpen:!0}},S={render:()=>{const e=({children:r,...t})=>n.jsx("div",{...t,children:r});return n.jsxs("div",{style:{padding:"80px 60px",display:"flex",gap:"24px"},children:[n.jsx(b,{text:"검색",variant:"vertical",children:n.jsx(e,{variant:"icon","aria-label":"검색",children:"🔍"})}),n.jsx(b,{text:"알림 설정",variant:"vertical",children:n.jsx(e,{variant:"icon","aria-label":"알림 설정",children:"🔔"})}),n.jsx(b,{text:"프로필",variant:"vertical",children:n.jsx(e,{variant:"icon","aria-label":"프로필",children:"👤"})})]})},name:"아이콘 버튼 위 툴팁 (On Icon Button)",parameters:{docs:{description:{story:`
**아이콘 버튼에 툴팁으로 기능 설명을 보완**합니다.
아이콘만으로 의미가 불명확할 때 Tooltip이 텍스트 레이블 역할을 합니다.

> ⚠️ \`aria-label\`도 함께 제공하면 스크린리더 사용자도 기능을 인식할 수 있습니다.
        `}},controls:{disable:!0}}},B={render:()=>{const e=({children:r,...t})=>n.jsx("div",{...t,children:r});return n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"40px",padding:"80px 60px"},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[n.jsx("span",{style:{fontSize:"11px",color:"#888"},children:"vertical (기본)"}),n.jsx(b,{text:"수직 방향 툴팁",variant:"vertical",children:n.jsx(e,{variant:"secondary",children:"hover me"})})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[n.jsx("span",{style:{fontSize:"11px",color:"#888"},children:"horizontal"}),n.jsx(b,{text:"수평 방향 툴팁",variant:"horizontal",children:n.jsx(e,{variant:"secondary",children:"hover me"})})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[n.jsx("span",{style:{fontSize:"11px",color:"#888"},children:"box"}),n.jsx(b,{text:"박스형 말풍선 스타일",variant:"box",children:n.jsx(e,{variant:"secondary",children:"hover me"})})]})]})},name:"variant 비교 (All Variants)",parameters:{docs:{description:{story:"**3가지 variant를 한 화면에서 비교**합니다. 각 버튼에 마우스를 올려 동작을 확인하세요."}},controls:{disable:!0}}};var U,G,W;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: '수직 (Vertical)',
  args: {
    text: '고객 상태 기준 자동 정렬됩니다',
    variant: 'vertical'
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`**기본 variant**입니다. 트리거 위/아래에 팝업이 표시됩니다. 대부분의 경우 \\\`vertical\\\`이 적합합니다.\`
      }
    }
  }
}`,...(W=(G=k.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var Y,K,Q;A.parameters={...A.parameters,docs:{...(Y=A.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: '수평 (Horizontal)',
  args: {
    text: '노출 기간을 설정하세요',
    variant: 'horizontal'
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`
**트리거 좌/우에 팝업이 표시**됩니다.
행 내 인라인 요소 옆에 힌트를 표시할 때 수평 배치가 자연스럽습니다.
        \`
      }
    }
  }
}`,...(Q=(K=A.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,$,J;I.parameters={...I.parameters,docs:{...(X=I.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: '박스 스타일 (Box)',
  args: {
    text: '채널별 노출 구좌가 달라집니다',
    variant: 'box'
  } as any,
  parameters: {
    docs: {
      description: {
        story: \`**박스형 말풍선 스타일**입니다. 텍스트 양이 많거나 시각적으로 더 강조가 필요한 경우에 사용합니다.\`
      }
    }
  }
}`,...(J=($=I.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var Z,ee,te;_.parameters={..._.parameters,docs:{...(Z=_.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: '초기 표시 상태',
  args: {
    text: '처음부터 표시되는 도움말입니다',
    defaultOpen: true
  } as any
}`,...(te=(ee=_.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,oe,ne;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const Button = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    return <div style={{
      padding: '80px 60px',
      display: 'flex',
      gap: '24px'
    }}>
        <Tooltip text="검색" variant="vertical">
          <Button variant="icon" aria-label="검색">
            🔍
          </Button>
        </Tooltip>
        <Tooltip text="알림 설정" variant="vertical">
          <Button variant="icon" aria-label="알림 설정">
            🔔
          </Button>
        </Tooltip>
        <Tooltip text="프로필" variant="vertical">
          <Button variant="icon" aria-label="프로필">
            👤
          </Button>
        </Tooltip>
      </div>;
  },
  name: '아이콘 버튼 위 툴팁 (On Icon Button)',
  parameters: {
    docs: {
      description: {
        story: \`
**아이콘 버튼에 툴팁으로 기능 설명을 보완**합니다.
아이콘만으로 의미가 불명확할 때 Tooltip이 텍스트 레이블 역할을 합니다.

> ⚠️ \\\`aria-label\\\`도 함께 제공하면 스크린리더 사용자도 기능을 인식할 수 있습니다.
        \`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(ne=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ae,se,ie;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const Button = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '40px',
      padding: '80px 60px'
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }}>
          <span style={{
          fontSize: '11px',
          color: '#888'
        }}>vertical (기본)</span>
          <Tooltip text="수직 방향 툴팁" variant="vertical">
            <Button variant="secondary">hover me</Button>
          </Tooltip>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }}>
          <span style={{
          fontSize: '11px',
          color: '#888'
        }}>horizontal</span>
          <Tooltip text="수평 방향 툴팁" variant="horizontal">
            <Button variant="secondary">hover me</Button>
          </Tooltip>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }}>
          <span style={{
          fontSize: '11px',
          color: '#888'
        }}>box</span>
          <Tooltip text="박스형 말풍선 스타일" variant="box">
            <Button variant="secondary">hover me</Button>
          </Tooltip>
        </div>
      </div>;
  },
  name: 'variant 비교 (All Variants)',
  parameters: {
    docs: {
      description: {
        story: \`**3가지 variant를 한 화면에서 비교**합니다. 각 버튼에 마우스를 올려 동작을 확인하세요.\`
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(ie=(se=B.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};const Pt=["Vertical","Horizontal","Box","InitiallyOpen","OnIconButton","AllVariants"];export{B as AllVariants,I as Box,A as Horizontal,_ as InitiallyOpen,S as OnIconButton,k as Vertical,Pt as __namedExportsOrder,Et as default};
