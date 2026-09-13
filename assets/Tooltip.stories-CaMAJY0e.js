import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{d as ye}from"./reference-types-4ftiVeOu.js";import{r as i}from"./index-BxXVWNx3.js";import{u as he,c as w}from"./index-BIfB_hJr.js";import{u as oe,b as ge}from"./index-DtBajwEi.js";import{c as be}from"./index-Cuo70N6w.js";import{P as Te,D as we}from"./index-v38HoRc1.js";import{u as Ce}from"./index-BKM4mA3Z.js";import{R as je,A as Ee,a as Pe,c as ne,C as Re}from"./index-ghHoRoo1.js";import{P as ae}from"./index-D_4yO-tZ.js";import{P as ie}from"./index-DnJVWBh-.js";import{c as De}from"./index-CkIaN0ex.js";import{c as ke}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-D5tP6kvT.js";import"./index-BuIYde5q.js";import"./index-DCvtqWl1.js";import"./index-BjCkHmxr.js";var Ae=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),_e="VisuallyHidden",se=i.forwardRef((e,r)=>n.jsx(ie.span,{...e,ref:r,style:{...Ae,...e.style}}));se.displayName=_e;var Ie=se,[O]=be("Tooltip",[ne]),B=ne(),le="TooltipProvider",Se=700,L="tooltip.open",[Oe,N]=O(le),ce=e=>{const{__scopeTooltip:r,delayDuration:t=Se,skipDelayDuration:o=300,disableHoverableContent:a=!1,children:l}=e,c=i.useRef(!0),v=i.useRef(!1),s=i.useRef(0);return i.useEffect(()=>{const d=s.current;return()=>window.clearTimeout(d)},[]),n.jsx(Oe,{scope:r,isOpenDelayedRef:c,delayDuration:t,onOpen:i.useCallback(()=>{o<=0||(window.clearTimeout(s.current),c.current=!1)},[o]),onClose:i.useCallback(()=>{o<=0||(window.clearTimeout(s.current),s.current=window.setTimeout(()=>c.current=!0,o))},[o]),isPointerInTransitRef:v,onPointerInTransitChange:i.useCallback(d=>{v.current=d},[]),disableHoverableContent:a,children:l})};ce.displayName=le;var R="Tooltip",[Be,D]=O(R),pe=e=>{const{__scopeTooltip:r,children:t,open:o,defaultOpen:a,onOpenChange:l,disableHoverableContent:c,delayDuration:v}=e,s=N(R,e.__scopeTooltip),d=B(r),[p,u]=i.useState(null),f=Ce(),m=i.useRef(0),x=c??s.disableHoverableContent,h=v??s.delayDuration,y=i.useRef(!1),[T,g]=he({prop:o,defaultProp:a??!1,onChange:V=>{V?(s.onOpen(),document.dispatchEvent(new CustomEvent(L))):s.onClose(),l==null||l(V)},caller:R}),j=i.useMemo(()=>T?y.current?"delayed-open":"instant-open":"closed",[T]),E=i.useCallback(()=>{window.clearTimeout(m.current),m.current=0,y.current=!1,g(!0)},[g]),P=i.useCallback(()=>{window.clearTimeout(m.current),m.current=0,g(!1)},[g]),M=i.useCallback(()=>{window.clearTimeout(m.current),m.current=window.setTimeout(()=>{y.current=!0,g(!0),m.current=0},h)},[h,g]);return i.useEffect(()=>()=>{m.current&&(window.clearTimeout(m.current),m.current=0)},[]),n.jsx(je,{...d,children:n.jsx(Be,{scope:r,contentId:f,open:T,stateAttribute:j,trigger:p,onTriggerChange:u,onTriggerEnter:i.useCallback(()=>{s.isOpenDelayedRef.current?M():E()},[s.isOpenDelayedRef,M,E]),onTriggerLeave:i.useCallback(()=>{x?P():(window.clearTimeout(m.current),m.current=0)},[P,x]),onOpen:E,onClose:P,disableHoverableContent:x,children:t})})};pe.displayName=R;var z="TooltipTrigger",de=i.forwardRef((e,r)=>{const{__scopeTooltip:t,...o}=e,a=D(z,t),l=N(z,t),c=B(t),v=i.useRef(null),s=oe(r,v,a.onTriggerChange),d=i.useRef(!1),p=i.useRef(!1),u=i.useCallback(()=>d.current=!1,[]);return i.useEffect(()=>()=>document.removeEventListener("pointerup",u),[u]),n.jsx(Ee,{asChild:!0,...c,children:n.jsx(ie.button,{"aria-describedby":a.open?a.contentId:void 0,"data-state":a.stateAttribute,...o,ref:s,onPointerMove:w(e.onPointerMove,f=>{f.pointerType!=="touch"&&!p.current&&!l.isPointerInTransitRef.current&&(a.onTriggerEnter(),p.current=!0)}),onPointerLeave:w(e.onPointerLeave,()=>{a.onTriggerLeave(),p.current=!1}),onPointerDown:w(e.onPointerDown,()=>{a.open&&a.onClose(),d.current=!0,document.addEventListener("pointerup",u,{once:!0})}),onFocus:w(e.onFocus,()=>{d.current||a.onOpen()}),onBlur:w(e.onBlur,a.onClose),onClick:w(e.onClick,a.onClose)})})});de.displayName=z;var H="TooltipPortal",[Le,ze]=O(H,{forceMount:void 0}),ue=e=>{const{__scopeTooltip:r,forceMount:t,children:o,container:a}=e,l=D(H,r);return n.jsx(Le,{scope:r,forceMount:t,children:n.jsx(ae,{present:t||l.open,children:n.jsx(Te,{asChild:!0,container:a,children:o})})})};ue.displayName=H;var C="TooltipContent",me=i.forwardRef((e,r)=>{const t=ze(C,e.__scopeTooltip),{forceMount:o=t.forceMount,side:a="top",...l}=e,c=D(C,e.__scopeTooltip);return n.jsx(ae,{present:o||c.open,children:c.disableHoverableContent?n.jsx(fe,{side:a,...l,ref:r}):n.jsx(Ne,{side:a,...l,ref:r})})}),Ne=i.forwardRef((e,r)=>{const t=D(C,e.__scopeTooltip),o=N(C,e.__scopeTooltip),a=i.useRef(null),l=oe(r,a),[c,v]=i.useState(null),{trigger:s,onClose:d}=t,p=a.current,{onPointerInTransitChange:u}=o,f=i.useCallback(()=>{v(null),u(!1)},[u]),m=i.useCallback((x,h)=>{const y=x.currentTarget,T={x:x.clientX,y:x.clientY},g=Fe(T,y.getBoundingClientRect()),j=Ue(T,g),E=qe(h.getBoundingClientRect()),P=We([...j,...E]);v(P),u(!0)},[u]);return i.useEffect(()=>()=>f(),[f]),i.useEffect(()=>{if(s&&p){const x=y=>m(y,p),h=y=>m(y,s);return s.addEventListener("pointerleave",x),p.addEventListener("pointerleave",h),()=>{s.removeEventListener("pointerleave",x),p.removeEventListener("pointerleave",h)}}},[s,p,m,f]),i.useEffect(()=>{if(c){const x=h=>{const y=h.target,T={x:h.clientX,y:h.clientY},g=(s==null?void 0:s.contains(y))||(p==null?void 0:p.contains(y)),j=!Ge(T,c);g?f():j&&(f(),d())};return document.addEventListener("pointermove",x),()=>document.removeEventListener("pointermove",x)}},[s,p,c,d,f]),n.jsx(fe,{...e,ref:l})}),[He,Me]=O(R,{isInside:!1}),Ve=ge("TooltipContent"),fe=i.forwardRef((e,r)=>{const{__scopeTooltip:t,children:o,"aria-label":a,onEscapeKeyDown:l,onPointerDownOutside:c,...v}=e,s=D(C,t),d=B(t),{onClose:p}=s;return i.useEffect(()=>(document.addEventListener(L,p),()=>document.removeEventListener(L,p)),[p]),i.useEffect(()=>{if(s.trigger){const u=f=>{f.target instanceof Node&&f.target.contains(s.trigger)&&p()};return window.addEventListener("scroll",u,{capture:!0}),()=>window.removeEventListener("scroll",u,{capture:!0})}},[s.trigger,p]),n.jsx(we,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:c,onFocusOutside:u=>u.preventDefault(),onDismiss:p,children:n.jsxs(Re,{"data-state":s.stateAttribute,...d,...v,ref:r,style:{...v.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[n.jsx(Ve,{children:o}),n.jsx(He,{scope:t,isInside:!0,children:n.jsx(Ie,{id:s.contentId,role:"tooltip",children:a||o})})]})})});me.displayName=C;var ve="TooltipArrow",xe=i.forwardRef((e,r)=>{const{__scopeTooltip:t,...o}=e,a=B(t);return Me(ve,t).isInside?null:n.jsx(Pe,{...a,...o,ref:r})});xe.displayName=ve;function Fe(e,r){const t=Math.abs(r.top-e.y),o=Math.abs(r.bottom-e.y),a=Math.abs(r.right-e.x),l=Math.abs(r.left-e.x);switch(Math.min(t,o,a,l)){case l:return"left";case a:return"right";case t:return"top";case o:return"bottom";default:throw new Error("unreachable")}}function Ue(e,r,t=5){const o=[];switch(r){case"top":o.push({x:e.x-t,y:e.y+t},{x:e.x+t,y:e.y+t});break;case"bottom":o.push({x:e.x-t,y:e.y-t},{x:e.x+t,y:e.y-t});break;case"left":o.push({x:e.x+t,y:e.y-t},{x:e.x+t,y:e.y+t});break;case"right":o.push({x:e.x-t,y:e.y-t},{x:e.x-t,y:e.y+t});break}return o}function qe(e){const{top:r,right:t,bottom:o,left:a}=e;return[{x:a,y:r},{x:t,y:r},{x:t,y:o},{x:a,y:o}]}function Ge(e,r){const{x:t,y:o}=e;let a=!1;for(let l=0,c=r.length-1;l<r.length;c=l++){const v=r[l],s=r[c],d=v.x,p=v.y,u=s.x,f=s.y;p>o!=f>o&&t<(u-d)*(o-p)/(f-p)+d&&(a=!a)}return a}function We(e){const r=e.slice();return r.sort((t,o)=>t.x<o.x?-1:t.x>o.x?1:t.y<o.y?-1:t.y>o.y?1:0),Ye(r)}function Ye(e){if(e.length<=1)return e.slice();const r=[];for(let o=0;o<e.length;o++){const a=e[o];for(;r.length>=2;){const l=r[r.length-1],c=r[r.length-2];if((l.x-c.x)*(a.y-c.y)>=(l.y-c.y)*(a.x-c.x))r.pop();else break}r.push(a)}r.pop();const t=[];for(let o=e.length-1;o>=0;o--){const a=e[o];for(;t.length>=2;){const l=t[t.length-1],c=t[t.length-2];if((l.x-c.x)*(a.y-c.y)>=(l.y-c.y)*(a.x-c.x))t.pop();else break}t.push(a)}return t.pop(),r.length===1&&t.length===1&&r[0].x===t[0].x&&r[0].y===t[0].y?r:r.concat(t)}var Ke=ce,Xe=pe,$e=de,Qe=ue,Je=me,Ze=xe;const et=De("z-50 overflow-hidden rounded px-2 py-1 text-krds-body-sm text-krds-white shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",{variants:{variant:{vertical:"bg-krds-gray-90 max-w-xs",horizontal:"bg-krds-gray-90 max-w-xs",box:"bg-krds-gray-90 max-w-sm px-3 py-2 rounded-md"}},defaultVariants:{variant:"vertical"}});function b({children:e,text:r,variant:t="vertical",className:o,delayDuration:a=300,side:l}){const c=t==="horizontal"?"right":"top";return n.jsx(Ke,{delayDuration:a,children:n.jsxs(Xe,{children:[n.jsx($e,{asChild:!0,children:e?n.jsx("span",{className:"inline-flex",children:e}):n.jsx("span",{className:"inline-flex cursor-default",children:"?"})}),n.jsx(Qe,{children:n.jsxs(Je,{side:l??c,sideOffset:6,className:ke(et({variant:t}),o),children:[r,n.jsx(Ze,{className:"fill-krds-gray-90"})]})})]})})}b.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{text:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},delayDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},side:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:""},variant:{defaultValue:{value:"'vertical'",computed:!1},required:!1}}};const tt=ye([{library:"U.S. Web Design System",component:"Tooltip",url:"https://designsystem.digital.gov/components/tooltip/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"Ark UI",component:"Tooltip",url:"https://ark-ui.com/docs/components/tooltip",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Radix UI",component:"Tooltip",url:"https://www.radix-ui.com/primitives/docs/components/tooltip",usedFor:["behavior","accessibility","api"],relation:"primitive"},{library:"KRDS",component:"Tooltip",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-tooltip--docs",usedFor:["design","behavior","api"],relation:"adapted"},{library:"Bootstrap",component:"Tooltips",url:"https://getbootstrap.com/docs/5.3/components/tooltips/",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"Tooltips",url:"https://flowbite.com/docs/components/tooltips/",usedFor:["comparison"],relation:"compared"},{library:"daisyUI",component:"Tooltip",url:"https://daisyui.com/components/tooltip/",usedFor:["comparison"],relation:"compared"},{library:"Ant Design",component:"Tooltip",url:"https://ant.design/components/tooltip/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Tooltip",url:"https://www.chakra-ui.com/docs/components/tooltip",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Tooltip",url:"https://quasar.dev/vue-components/tooltip",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Tooltip",url:"https://base-ui.com/react/components/tooltip",usedFor:["comparison"],relation:"compared"}]),bt={title:"Atoms/Display/Tooltip",component:b,tags:["autodocs","display","ref:krds","ref:chakra-ui","ref:shadcn-ui","ref:ark-ui","ref:daisy-ui","ref:ant-design","ref:flowbite","ref:vuetify","ref:mui","ref:bootstrap","ref:quasar","ref:base-ui","ref:radix-ui","ref:uswds"],parameters:{references:tt,docs:{description:{component:`
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
        `}}},argTypes:{text:{description:"툴팁에 표시되는 텍스트입니다.",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"''"},category:"Content"}},variant:{description:"툴팁의 표시 스타일과 방향입니다.",control:{type:"select"},options:["vertical","horizontal","box"],table:{type:{summary:"'vertical' | 'horizontal' | 'box'"},defaultValue:{summary:"'vertical'"},category:"Appearance"}}},args:{text:"노출 기간을 설정하세요",variant:"vertical"},render:e=>n.jsx(b,{...e,children:e.children??e.label??e.text??void 0})},k={name:"수직 (Vertical)",args:{text:"고객 상태 기준 자동 정렬됩니다",variant:"vertical"},parameters:{docs:{description:{story:"**기본 variant**입니다. 트리거 위/아래에 팝업이 표시됩니다. 대부분의 경우 `vertical`이 적합합니다."}}}},A={name:"수평 (Horizontal)",args:{text:"노출 기간을 설정하세요",variant:"horizontal"},parameters:{docs:{description:{story:`
**트리거 좌/우에 팝업이 표시**됩니다.
행 내 인라인 요소 옆에 힌트를 표시할 때 수평 배치가 자연스럽습니다.
        `}}}},_={name:"박스 스타일 (Box)",args:{text:"채널별 노출 구좌가 달라집니다",variant:"box"},parameters:{docs:{description:{story:"**박스형 말풍선 스타일**입니다. 텍스트 양이 많거나 시각적으로 더 강조가 필요한 경우에 사용합니다."}}}},I={render:()=>{const e=({children:r,...t})=>n.jsx("div",{...t,children:r});return n.jsxs("div",{style:{padding:"80px 60px",display:"flex",gap:"24px"},children:[n.jsx(b,{text:"검색",variant:"vertical",children:n.jsx(e,{variant:"icon","aria-label":"검색",children:"🔍"})}),n.jsx(b,{text:"알림 설정",variant:"vertical",children:n.jsx(e,{variant:"icon","aria-label":"알림 설정",children:"🔔"})}),n.jsx(b,{text:"프로필",variant:"vertical",children:n.jsx(e,{variant:"icon","aria-label":"프로필",children:"👤"})})]})},name:"아이콘 버튼 위 툴팁 (On Icon Button)",parameters:{docs:{description:{story:`
**아이콘 버튼에 툴팁으로 기능 설명을 보완**합니다.
아이콘만으로 의미가 불명확할 때 Tooltip이 텍스트 레이블 역할을 합니다.

> ⚠️ \`aria-label\`도 함께 제공하면 스크린리더 사용자도 기능을 인식할 수 있습니다.
        `}},controls:{disable:!0}}},S={render:()=>{const e=({children:r,...t})=>n.jsx("div",{...t,children:r});return n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"40px",padding:"80px 60px"},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[n.jsx("span",{style:{fontSize:"11px",color:"#888"},children:"vertical (기본)"}),n.jsx(b,{text:"수직 방향 툴팁",variant:"vertical",children:n.jsx(e,{variant:"secondary",children:"hover me"})})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[n.jsx("span",{style:{fontSize:"11px",color:"#888"},children:"horizontal"}),n.jsx(b,{text:"수평 방향 툴팁",variant:"horizontal",children:n.jsx(e,{variant:"secondary",children:"hover me"})})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[n.jsx("span",{style:{fontSize:"11px",color:"#888"},children:"box"}),n.jsx(b,{text:"박스형 말풍선 스타일",variant:"box",children:n.jsx(e,{variant:"secondary",children:"hover me"})})]})]})},name:"variant 비교 (All Variants)",parameters:{docs:{description:{story:"**3가지 variant를 한 화면에서 비교**합니다. 각 버튼에 마우스를 올려 동작을 확인하세요."}},controls:{disable:!0}}};var F,U,q;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(q=(U=k.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var G,W,Y;A.parameters={...A.parameters,docs:{...(G=A.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Y=(W=A.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var K,X,$;_.parameters={..._.parameters,docs:{...(K=_.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...($=(X=_.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var Q,J,Z;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
          <Button variant="icon" aria-label="검색">🔍</Button>
        </Tooltip>
        <Tooltip text="알림 설정" variant="vertical">
          <Button variant="icon" aria-label="알림 설정">🔔</Button>
        </Tooltip>
        <Tooltip text="프로필" variant="vertical">
          <Button variant="icon" aria-label="프로필">👤</Button>
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
}`,...(Z=(J=I.parameters)==null?void 0:J.docs)==null?void 0:Z.source}}};var ee,te,re;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(te=S.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const Tt=["Vertical","Horizontal","Box","OnIconButton","AllVariants"];export{S as AllVariants,_ as Box,A as Horizontal,I as OnIconButton,k as Vertical,Tt as __namedExportsOrder,bt as default};
