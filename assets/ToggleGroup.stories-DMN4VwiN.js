import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-BxXVWNx3.js";import{c as ve}from"./index-Cuo70N6w.js";import{P as _}from"./index-DnJVWBh-.js";import{I as fe,c as se,R as be}from"./index-D95NAxrO.js";import{u as R,c as xe}from"./index-BIfB_hJr.js";import{u as ye}from"./index-DTo5Pt6F.js";import{c as le}from"./index-CkIaN0ex.js";import{c as C}from"./utils-DCADjnpI.js";import{d as he}from"./reference-types-4ftiVeOu.js";import{B as Ge,I as Te}from"./italic-ur5SgAuk.js";import{U as Ne}from"./underline-tKWdHv5C.js";import{L as je}from"./list-CoymnDxL.js";import{c as Ve}from"./createLucideIcon-Ct87QT5c.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BuIYde5q.js";import"./index-DCvtqWl1.js";import"./index-DtBajwEi.js";import"./index-BKM4mA3Z.js";import"./index-D5tP6kvT.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Pe=Ve("grid-3x3",Ie);var ie="Toggle",ne=d.forwardRef((a,r)=>{const{pressed:t,defaultPressed:s,onPressedChange:o,...i}=a,[n,l]=R({prop:t,onChange:o,defaultProp:s??!1,caller:ie});return e.jsx(_.button,{type:"button","aria-pressed":n,"data-state":n?"on":"off","data-disabled":a.disabled?"":void 0,...i,ref:r,onClick:xe(a.onClick,()=>{a.disabled||l(!n)})})});ne.displayName=ie;var f="ToggleGroup",[de]=ve(f,[se]),ue=se(),w=d.forwardRef((a,r)=>{const{type:t,...s}=a;if(t==="single"){const o=s;return e.jsx(ke,{role:"radiogroup",...o,ref:r})}if(t==="multiple"){const o=s;return e.jsx(we,{role:"toolbar",...o,ref:r})}throw new Error(`Missing prop \`type\` expected on \`${f}\``)});w.displayName=f;var[pe,ce]=de(f),ke=d.forwardRef((a,r)=>{const{value:t,defaultValue:s,onValueChange:o=()=>{},...i}=a,[n,l]=R({prop:t,defaultProp:s??"",onChange:o,caller:f});return e.jsx(pe,{scope:a.__scopeToggleGroup,type:"single",value:d.useMemo(()=>n?[n]:[],[n]),onItemActivate:l,onItemDeactivate:d.useCallback(()=>l(""),[l]),children:e.jsx(me,{...i,ref:r})})}),we=d.forwardRef((a,r)=>{const{value:t,defaultValue:s,onValueChange:o=()=>{},...i}=a,[n,l]=R({prop:t,defaultProp:s??[],onChange:o,caller:f}),p=d.useCallback(u=>l((m=[])=>[...m,u]),[l]),x=d.useCallback(u=>l((m=[])=>m.filter(z=>z!==u)),[l]);return e.jsx(pe,{scope:a.__scopeToggleGroup,type:"multiple",value:n,onItemActivate:p,onItemDeactivate:x,children:e.jsx(me,{...i,ref:r})})});w.displayName=f;var[ze,_e]=de(f),me=d.forwardRef((a,r)=>{const{__scopeToggleGroup:t,disabled:s=!1,rovingFocus:o=!0,orientation:i,dir:n,loop:l=!0,...p}=a,x=ue(t),u=ye(n),m={dir:u,...p};return e.jsx(ze,{scope:t,rovingFocus:o,disabled:s,children:o?e.jsx(be,{asChild:!0,...x,orientation:i,dir:u,loop:l,children:e.jsx(_.div,{...m,ref:r})}):e.jsx(_.div,{...m,ref:r})})}),P="ToggleGroupItem",v=d.forwardRef((a,r)=>{const t=ce(P,a.__scopeToggleGroup),s=_e(P,a.__scopeToggleGroup),o=ue(a.__scopeToggleGroup),i=t.value.includes(a.value),n=s.disabled||a.disabled,l={...a,pressed:i,disabled:n},p=d.useRef(null);return s.rovingFocus?e.jsx(fe,{asChild:!0,...o,focusable:!n,active:i,ref:p,children:e.jsx(O,{...l,ref:r})}):e.jsx(O,{...l,ref:r})});v.displayName=P;var O=d.forwardRef((a,r)=>{const{__scopeToggleGroup:t,value:s,...o}=a,i=ce(P,t),n={role:"radio","aria-checked":a.pressed,"aria-pressed":void 0},l=i.type==="single"?n:void 0;return e.jsx(ne,{...l,...o,ref:r,onPressedChange:p=>{p?i.onItemActivate(s):i.onItemDeactivate(s)}})});const Re=le("inline-flex rounded-lg border p-1",{variants:{variant:{soft:"border-transparent bg-krds-gray-10",outline:"border-krds-gray-30 bg-transparent",ghost:"border-transparent bg-transparent",solid:"border-transparent bg-krds-gray-90"},orientation:{horizontal:"flex-row",vertical:"flex-col"}},defaultVariants:{variant:"soft",orientation:"horizontal"}}),y=le(["inline-flex items-center justify-center rounded-md font-semibold transition-colors","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1","disabled:pointer-events-none disabled:opacity-45 data-[state=on]:shadow-krds-sm"].join(" "),{variants:{variant:{soft:"text-krds-gray-60 data-[state=on]:bg-krds-gray-0 data-[state=on]:text-krds-primary-60",outline:"text-krds-gray-60 data-[state=on]:bg-krds-gray-0 data-[state=on]:text-krds-primary-60",ghost:"text-krds-gray-70 hover:bg-krds-gray-5 data-[state=on]:bg-krds-primary-5 data-[state=on]:text-krds-primary-60",solid:"text-krds-gray-40 data-[state=on]:bg-krds-gray-0 data-[state=on]:text-krds-gray-90"},size:{sm:"h-8 px-3 text-krds-body-xs",md:"h-10 px-4 text-krds-body-sm",lg:"h-12 px-5 text-krds-body-md"},fullWidth:{true:"flex-1",false:""}},defaultVariants:{variant:"soft",size:"md",fullWidth:!1}}),S=d.forwardRef(({className:a,variant:r,size:t,fullWidth:s,...o},i)=>e.jsx(v,{ref:i,"data-slot":"toggle-group-item",className:C(y({variant:r,size:t,fullWidth:s}),a),...o}));S.displayName=v.displayName;const k=d.forwardRef(({className:a,variant:r,orientation:t="horizontal",...s},o)=>e.jsx(w,{ref:o,"data-slot":"toggle-group",orientation:t,className:C(Re({variant:r,orientation:t}),a),...s}));k.displayName=w.displayName;k.__docgenInfo={description:"",methods:[],props:{orientation:{defaultValue:{value:"'horizontal'",computed:!1},required:!1}}};S.__docgenInfo={description:"",methods:[],composes:["VariantProps"]};const Ce=[{value:"list",label:"목록"},{value:"grid",label:"그리드"},{value:"calendar",label:"캘린더"}],c=d.forwardRef(({className:a,variant:r,size:t,orientation:s="horizontal",fullWidth:o=!1,type:i="single",options:n=Ce,value:l,defaultValue:p,disabled:x=!1,onValueChange:u,children:m,...z},ge)=>{const A={ref:ge,disabled:x,orientation:s,variant:r,className:C(o&&"w-full",a),...z},M=m??n.map(g=>e.jsx(S,{value:g.value,disabled:x||g.disabled,variant:r,size:t,fullWidth:o,children:g.label},g.value));return i==="multiple"?e.jsx(k,{...A,type:"multiple",value:Array.isArray(l)?l:void 0,defaultValue:Array.isArray(p)?p:void 0,onValueChange:g=>u==null?void 0:u(g),children:M}):e.jsx(k,{...A,type:"single",value:typeof l=="string"?l:void 0,defaultValue:typeof p=="string"?p:void 0,onValueChange:g=>u==null?void 0:u(g),children:M})});c.displayName="ToggleGroup";c.__docgenInfo={description:"",methods:[],displayName:"ToggleGroup",props:{type:{required:!1,tsType:{name:"union",raw:"'single' | 'multiple'",elements:[{name:"literal",value:"'single'"},{name:"literal",value:"'multiple'"}]},description:"",defaultValue:{value:"'single'",computed:!1}},options:{required:!1,tsType:{name:"Array",elements:[{name:"ToggleGroupOption"}],raw:"ToggleGroupOption[]"},description:"",defaultValue:{value:`[
  { value: 'list', label: '목록' },
  { value: 'grid', label: '그리드' },
  { value: 'calendar', label: '캘린더' },
]`,computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},orientation:{defaultValue:{value:"'horizontal'",computed:!1},required:!1},fullWidth:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit","VariantProps","Pick"]};const b=[{value:"list",label:"목록"},{value:"grid",label:"그리드"},{value:"calendar",label:"캘린더"}],Se=he([{library:"Radix UI",component:"Toggle Group",url:"https://www.radix-ui.com/primitives/docs/components/toggle-group",usedFor:["behavior","accessibility","api"],relation:"primitive"},{library:"shadcn/ui",component:"Toggle Group",url:"https://ui.shadcn.com/docs/components/toggle-group",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Button Toggle",url:"https://quasar.dev/vue-components/button-toggle",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Toggle Group",url:"https://base-ui.com/react/components/toggle-group",usedFor:["comparison"],relation:"compared"}]),aa={title:"Molecules/Forms/ToggleGroup",component:c,tags:["autodocs","ref:shadcn-ui","ref:quasar","ref:base-ui","ref:radix-ui"],parameters:{references:Se,layout:"centered",docs:{description:{component:`
## ToggleGroup

Radix ToggleGroup primitive를 KRDS 토큰과 shadcn/ui variant API로 감싼 토글 그룹입니다.
단일 선택은 \`type="single"\`, 복수 선택은 \`type="multiple"\`을 사용합니다.
        `}}},argTypes:{type:{control:"inline-radio",options:["single","multiple"],table:{category:"Behavior"}},variant:{control:"inline-radio",options:["soft","solid","outline","ghost"],table:{category:"Appearance"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},orientation:{control:"inline-radio",options:["horizontal","vertical"],table:{category:"Layout"}},fullWidth:{control:"boolean",table:{category:"Layout"}},disabled:{control:"boolean",table:{category:"State"}},options:{control:"object",table:{category:"Content"}}},args:{type:"single",options:b,defaultValue:"list",variant:"soft",size:"md",orientation:"horizontal",fullWidth:!1,disabled:!1}},h={name:"기본"},G={name:"제어형",render:()=>{const[a,r]=d.useState("grid");return e.jsxs("div",{className:"grid gap-3",children:[e.jsx(c,{value:a,onValueChange:t=>r(String(t||a)),options:b}),e.jsxs("p",{className:"text-krds-body-xs text-krds-gray-60",children:["선택 값: ",a]})]})},parameters:{controls:{disable:!0}}},T={name:"복수 선택",render:()=>e.jsxs(c,{type:"multiple",defaultValue:["bold"],"aria-label":"텍스트 서식",children:[e.jsx(v,{value:"bold","aria-label":"굵게",className:y({variant:"soft",size:"md"}),children:e.jsx(Ge,{className:"size-4"})}),e.jsx(v,{value:"italic","aria-label":"기울임",className:y({variant:"soft",size:"md"}),children:e.jsx(Te,{className:"size-4"})}),e.jsx(v,{value:"underline","aria-label":"밑줄",className:y({variant:"soft",size:"md"}),children:e.jsx(Ne,{className:"size-4"})})]}),parameters:{controls:{disable:!0}}},N={name:"Variant",render:()=>e.jsxs("div",{className:"grid gap-4",children:[e.jsx(c,{variant:"soft",defaultValue:"list",options:b}),e.jsx(c,{variant:"outline",defaultValue:"list",options:b}),e.jsx(c,{variant:"ghost",defaultValue:"list",options:b}),e.jsx(c,{variant:"solid",defaultValue:"list",options:b})]}),parameters:{controls:{disable:!0}}},j={name:"아이콘",render:()=>e.jsxs(c,{defaultValue:"list","aria-label":"보기 방식",children:[e.jsx(v,{value:"list","aria-label":"목록",className:y({variant:"soft",size:"md"}),children:e.jsx(je,{className:"size-4"})}),e.jsx(v,{value:"grid","aria-label":"그리드",className:y({variant:"soft",size:"md"}),children:e.jsx(Pe,{className:"size-4"})})]}),parameters:{controls:{disable:!0}}},V={name:"세로 배치",args:{orientation:"vertical"}},I={name:"전체 너비",render:()=>e.jsx("div",{className:"w-96",children:e.jsx(c,{fullWidth:!0,defaultValue:"list",options:b})}),parameters:{controls:{disable:!0}}};var q,F,E;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '기본'
}`,...(E=(F=h.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var W,B,D;G.parameters={...G.parameters,docs:{...(W=G.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '제어형',
  render: () => {
    const [value, setValue] = React.useState('grid');
    return <div className="grid gap-3">
        <ToggleGroup value={value} onValueChange={nextValue => setValue(String(nextValue || value))} options={viewOptions} />
        <p className="text-krds-body-xs text-krds-gray-60">선택 값: {value}</p>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(D=(B=G.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var L,U,$;T.parameters={...T.parameters,docs:{...(L=T.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '복수 선택',
  render: () => <ToggleGroup type="multiple" defaultValue={['bold']} aria-label="텍스트 서식">
      <ToggleGroupPrimitive.Item value="bold" aria-label="굵게" className={toggleGroupItemVariants({
      variant: 'soft',
      size: 'md'
    })}>
        <Bold className="size-4" />
      </ToggleGroupPrimitive.Item>
      <ToggleGroupPrimitive.Item value="italic" aria-label="기울임" className={toggleGroupItemVariants({
      variant: 'soft',
      size: 'md'
    })}>
        <Italic className="size-4" />
      </ToggleGroupPrimitive.Item>
      <ToggleGroupPrimitive.Item value="underline" aria-label="밑줄" className={toggleGroupItemVariants({
      variant: 'soft',
      size: 'md'
    })}>
        <Underline className="size-4" />
      </ToggleGroupPrimitive.Item>
    </ToggleGroup>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...($=(U=T.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var H,K,Q;N.parameters={...N.parameters,docs:{...(H=N.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Variant',
  render: () => <div className="grid gap-4">
      <ToggleGroup variant="soft" defaultValue="list" options={viewOptions} />
      <ToggleGroup variant="outline" defaultValue="list" options={viewOptions} />
      <ToggleGroup variant="ghost" defaultValue="list" options={viewOptions} />
      <ToggleGroup variant="solid" defaultValue="list" options={viewOptions} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Q=(K=N.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,J,Y;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: '아이콘',
  render: () => <ToggleGroup defaultValue="list" aria-label="보기 방식">
      <ToggleGroupPrimitive.Item value="list" aria-label="목록" className={toggleGroupItemVariants({
      variant: 'soft',
      size: 'md'
    })}>
        <List className="size-4" />
      </ToggleGroupPrimitive.Item>
      <ToggleGroupPrimitive.Item value="grid" aria-label="그리드" className={toggleGroupItemVariants({
      variant: 'soft',
      size: 'md'
    })}>
        <Grid3X3 className="size-4" />
      </ToggleGroupPrimitive.Item>
    </ToggleGroup>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Y=(J=j.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var Z,ee,ae;V.parameters={...V.parameters,docs:{...(Z=V.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: '세로 배치',
  args: {
    orientation: 'vertical'
  }
}`,...(ae=(ee=V.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,te,oe;I.parameters={...I.parameters,docs:{...(re=I.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: '전체 너비',
  render: () => <div className="w-96">
      <ToggleGroup fullWidth defaultValue="list" options={viewOptions} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(oe=(te=I.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};const ra=["Default","Controlled","Multiple","Variants","WithIcons","Vertical","FullWidth"];export{G as Controlled,h as Default,I as FullWidth,T as Multiple,N as Variants,V as Vertical,j as WithIcons,ra as __namedExportsOrder,aa as default};
