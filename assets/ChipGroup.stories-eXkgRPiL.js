import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-BxXVWNx3.js";import{c as V}from"./utils-DCADjnpI.js";import{C as Y}from"./Chip-DraJAJI6.js";import{C as ee}from"./check-CvnDgXMx.js";import{c as d}from"./createLucideIcon-Ct87QT5c.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CkIaN0ex.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],se=d("book-open",ae);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],le=d("dumbbell",te);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["path",{d:"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",key:"1pdavp"}],["path",{d:"M20.054 15.987H3.946",key:"14rxg9"}]],ne=d("laptop",re);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]],oe=d("shirt",ie);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],ce=d("utensils",de),ue=[{label:"전체",value:"all"},{label:"접수",value:"received"},{label:"검토 중",value:"review"},{label:"완료",value:"done"}],me={outlined:"",filled:"data-[selected=false]:bg-krds-gray-5 data-[selected=false]:border-transparent",elevated:"shadow-sm data-[selected=false]:bg-white"};function i({className:s,items:o=ue,value:r,defaultValue:b,multiple:t=!1,variant:O="outlined",size:P="md",status:B="default",column:F=!1,disabled:h=!1,ariaLabel:R="칩 선택",onChange:x,onValueChange:y,...Q}){const U=b??(t?[]:""),k=r!==void 0,[Z,J]=f.useState(U),n=k?r:Z,K=a=>Array.isArray(n)?n.includes(a):n===a,j=a=>{k||J(a),x==null||x(a),y==null||y(a)},W=a=>{if(!(h||a.disabled)){if(t){const l=Array.isArray(n)?n:[],c=l.includes(a.value)?l.filter(X=>X!==a.value):[...l,a.value];j(c);return}j(n===a.value?"":a.value)}};return e.jsx("div",{role:t?"group":"radiogroup","aria-label":R,"aria-disabled":h||void 0,className:V("flex flex-wrap gap-2",F&&"flex-col items-start",s),...Q,children:o.map(a=>{const l=K(a.value),c=h||a.disabled;return e.jsxs(Y,{role:t?"checkbox":"radio","aria-checked":l,"data-selected":l,disabled:c,selected:l,size:P,status:B,onClick:()=>W(a),className:V(me[O],c&&"pointer-events-none"),children:[a.icon?e.jsx("span",{"aria-hidden":"true",children:a.icon}):null,a.label,t&&l?e.jsx(ee,{"aria-hidden":"true",className:"size-3.5"}):null]},a.value)})})}i.__docgenInfo={description:"",methods:[],displayName:"ChipGroup",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"ChipItem"}],raw:"ChipItem[]"},description:"",defaultValue:{value:`[
  { label: '전체', value: 'all' },
  { label: '접수', value: 'received' },
  { label: '검토 중', value: 'review' },
  { label: '완료', value: 'done' },
]`,computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'outlined' | 'filled' | 'elevated'",elements:[{name:"literal",value:"'outlined'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'elevated'"}]},description:"",defaultValue:{value:"'outlined'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'danger' | 'info'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},column:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'칩 선택'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const N=[{label:"전자기기",value:"electronics",icon:e.jsx(ne,{className:"size-3.5"})},{label:"의류",value:"clothing",icon:e.jsx(oe,{className:"size-3.5"})},{label:"음식",value:"food",icon:e.jsx(ce,{className:"size-3.5"})},{label:"도서",value:"books",icon:e.jsx(se,{className:"size-3.5"})},{label:"스포츠",value:"sports",icon:e.jsx(le,{className:"size-3.5"})}],H=[{label:"React",value:"react"},{label:"TypeScript",value:"ts"},{label:"CSS",value:"css"},{label:"GraphQL",value:"graphql"},{label:"Node.js",value:"node"},{label:"Docker",value:"docker",disabled:!0}],Ne={title:"Atoms/Display/ChipGroup",component:i,tags:["autodocs","display"],parameters:{layout:"centered",docs:{description:{component:"여러 Chip을 묶어 단일 또는 다중 선택을 제공하는 선택형 display atom입니다."}}},argTypes:{multiple:{control:"boolean",table:{category:"Behavior"}},variant:{control:"inline-radio",options:["outlined","filled","elevated"],table:{category:"Appearance"}},size:{control:"inline-radio",options:["sm","md","lg"],table:{category:"Appearance"}},status:{control:"select",options:["default","success","warning","danger","info"],table:{category:"Appearance"}},column:{control:"boolean",table:{category:"Layout"}},disabled:{control:"boolean",table:{category:"State"}}},args:{items:N,defaultValue:"electronics",multiple:!1,variant:"outlined",size:"md",status:"default",column:!1,disabled:!1}},u={name:"기본"},m={name:"다중 선택",render:()=>{const[s,o]=f.useState(["react","ts"]);return e.jsxs("div",{className:"grid gap-3",children:[e.jsx(i,{items:H,multiple:!0,value:s,onValueChange:r=>o(r)}),e.jsxs("p",{className:"text-sm text-krds-gray-60",children:["선택: ",s.length>0?s.join(", "):"없음"]})]})},parameters:{controls:{disable:!0}}},p={name:"스타일 비교",render:()=>e.jsx("div",{className:"grid gap-4",children:["outlined","filled","elevated"].map(s=>e.jsxs("div",{className:"grid gap-2",children:[e.jsx("p",{className:"text-xs font-semibold uppercase text-krds-gray-60",children:s}),e.jsx(i,{items:N.slice(0,3),defaultValue:"electronics",variant:s})]},s))}),parameters:{controls:{disable:!0}}},g={name:"필터 예시",render:()=>{const[s,o]=f.useState([]),[r,b]=f.useState("");return e.jsxs("div",{className:"grid max-w-md gap-4",children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-krds-gray-90",children:"카테고리"}),e.jsx(i,{items:N,multiple:!0,value:s,onValueChange:t=>o(t)})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-krds-gray-90",children:"가격대"}),e.jsx(i,{items:[{label:"~1만원",value:"under-1"},{label:"1~5만원",value:"1-5"},{label:"5~10만원",value:"5-10"},{label:"10만원~",value:"over-10"}],value:r,status:"success",onValueChange:t=>b(t)})]}),e.jsxs("p",{className:"text-sm text-krds-gray-60",children:["카테고리: ",s.join(", ")||"전체"," / 가격: ",r||"전체"]})]})},parameters:{controls:{disable:!0}}},v={name:"비활성",args:{items:H,multiple:!0,defaultValue:["react"]}};var w,C,S;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '기본'
}`,...(S=(C=u.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var q,z,A;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '다중 선택',
  render: () => {
    const [selected, setSelected] = useState<string[]>(['react', 'ts']);
    return <div className="grid gap-3">
        <ChipGroup items={tags} multiple value={selected} onValueChange={nextValue => setSelected(nextValue as string[])} />
        <p className="text-sm text-krds-gray-60">선택: {selected.length > 0 ? selected.join(', ') : '없음'}</p>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(A=(z=m.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var T,_,M;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '스타일 비교',
  render: () => <div className="grid gap-4">
      {(['outlined', 'filled', 'elevated'] as const).map(variant => <div key={variant} className="grid gap-2">
          <p className="text-xs font-semibold uppercase text-krds-gray-60">{variant}</p>
          <ChipGroup items={categories.slice(0, 3)} defaultValue="electronics" variant={variant} />
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(M=(_=p.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var D,G,I;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '필터 예시',
  render: () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [price, setPrice] = useState('');
    return <div className="grid max-w-md gap-4">
        <div className="grid gap-2">
          <h3 className="text-sm font-semibold text-krds-gray-90">카테고리</h3>
          <ChipGroup items={categories} multiple value={selectedCategories} onValueChange={nextValue => setSelectedCategories(nextValue as string[])} />
        </div>
        <div className="grid gap-2">
          <h3 className="text-sm font-semibold text-krds-gray-90">가격대</h3>
          <ChipGroup items={[{
          label: '~1만원',
          value: 'under-1'
        }, {
          label: '1~5만원',
          value: '1-5'
        }, {
          label: '5~10만원',
          value: '5-10'
        }, {
          label: '10만원~',
          value: 'over-10'
        }]} value={price} status="success" onValueChange={nextValue => setPrice(nextValue as string)} />
        </div>
        <p className="text-sm text-krds-gray-60">
          카테고리: {selectedCategories.join(', ') || '전체'} / 가격: {price || '전체'}
        </p>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(I=(G=g.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var L,E,$;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '비활성',
  args: {
    items: tags,
    multiple: true,
    defaultValue: ['react']
  }
}`,...($=(E=v.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};const ke=["Default","Multiple","Variants","FilterExample","Disabled"];export{u as Default,v as Disabled,g as FilterExample,m as Multiple,p as Variants,ke as __namedExportsOrder,Ne as default};
