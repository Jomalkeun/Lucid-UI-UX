import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-BxXVWNx3.js";import{d as fe}from"./reference-types-4ftiVeOu.js";import{c as p}from"./utils-DCADjnpI.js";import{I as ye}from"./input-CyTVhyid.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CkIaN0ex.js";const t=l.forwardRef(({options:i,value:u,defaultValue:m="",placeholder:c="검색...",disabled:q=!1,clearable:ne=!0,label:E,helperText:de,error:S=!1,errorText:ce,onChange:n,onInputChange:o,noOptionsText:pe="옵션 없음",maxItems:ue=8},me)=>{const[xe,W]=l.useState(m),[x,d]=l.useState(!1),[b,f]=l.useState(-1),R=l.useRef(null),F=l.useId(),O=l.useId(),N=u!==void 0?u:xe,y=i.filter(r=>r.label.toLowerCase().includes(N.toLowerCase())).slice(0,ue);l.useEffect(()=>{const r=s=>{var U;(U=R.current)!=null&&U.contains(s.target)||d(!1)};return document.addEventListener("mousedown",r),()=>document.removeEventListener("mousedown",r)},[]);const M=r=>{r.disabled||(W(r.label),d(!1),n==null||n(r.value),o==null||o(r.label))},be=r=>{if(!x&&r.key==="ArrowDown"){d(!0);return}r.key==="ArrowDown"&&f(s=>Math.min(s+1,y.length-1)),r.key==="ArrowUp"&&f(s=>Math.max(s-1,0)),r.key==="Enter"&&b>=0&&M(y[b]),r.key==="Escape"&&d(!1)},k=S?ce:de;return e.jsxs("div",{ref:R,className:"relative w-full",children:[E&&e.jsx("label",{htmlFor:F,className:"mb-1 block text-krds-body-sm font-medium text-foreground",children:E}),e.jsxs("div",{className:"relative flex items-center",children:[e.jsx(ye,{ref:me,id:F,size:"medium",value:N,placeholder:c,disabled:q,onChange:r=>{W(r.target.value),o==null||o(r.target.value),d(!0),f(-1)},onFocus:()=>d(!0),onKeyDown:be,className:"pr-14","aria-expanded":x,"aria-autocomplete":"list","aria-invalid":S||void 0,"aria-describedby":k?O:void 0,role:"combobox"}),ne&&N&&!q&&e.jsx("button",{type:"button",onClick:()=>{W(""),n==null||n(""),o==null||o("")},className:p("absolute right-8 rounded px-1 text-krds-body-md text-muted-foreground transition-colors","hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"),"aria-label":"지우기",children:"✕"}),e.jsx("span",{"aria-hidden":"true",className:p("pointer-events-none absolute right-3 select-none text-krds-body-xs text-muted-foreground transition-transform",x&&"rotate-180"),children:"▼"})]}),x&&e.jsx("div",{role:"listbox",className:p("absolute inset-x-0 top-full z-[200] mt-1 max-h-60 overflow-y-auto","rounded-lg border border-border bg-card shadow-lg"),children:y.length===0?e.jsx("div",{className:"px-4 py-3 text-center text-krds-body-sm text-muted-foreground",children:pe}):y.map((r,s)=>e.jsxs("div",{role:"option","aria-selected":s===b,"aria-disabled":r.disabled||void 0,onMouseDown:()=>M(r),onMouseEnter:()=>f(s),className:p("flex flex-col px-4 py-2 text-krds-body-sm",r.disabled?"cursor-not-allowed text-muted-foreground opacity-60":"cursor-pointer text-foreground",s===b&&!r.disabled&&"bg-accent text-accent-foreground"),children:[e.jsx("span",{children:r.label}),r.description&&e.jsx("span",{className:"text-krds-body-xs text-muted-foreground",children:r.description})]},r.value))}),k&&e.jsx("p",{id:O,className:p("mt-1 text-krds-body-xs",S?"text-destructive":"text-muted-foreground"),children:k})]})});t.displayName="Autocomplete";t.__docgenInfo={description:"",methods:[],displayName:"Autocomplete",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"AutocompleteOption"}],raw:"AutocompleteOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'검색...'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},clearable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},multiple:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},errorText:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},onInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: string) => void",signature:{arguments:[{type:{name:"string"},name:"input"}],return:{name:"void"}}},description:""},noOptionsText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'옵션 없음'",computed:!1}},maxItems:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}}}};const a=[{label:"대한민국",value:"KR",description:"서울"},{label:"미국",value:"US",description:"Washington D.C."},{label:"일본",value:"JP",description:"도쿄"},{label:"중국",value:"CN",description:"베이징"},{label:"독일",value:"DE",description:"베를린"},{label:"프랑스",value:"FR",description:"파리"},{label:"영국",value:"GB",description:"런던"},{label:"캐나다",value:"CA",description:"오타와"},{label:"호주",value:"AU",description:"캔버라"},{label:"브라질",value:"BR",description:"브라질리아"},{label:"인도",value:"IN",description:"뉴델리"},{label:"러시아",value:"RU",description:"모스크바"}],V=[{label:"React",value:"react"},{label:"Vue.js",value:"vue"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"},{label:"Next.js",value:"nextjs"},{label:"Nuxt.js",value:"nuxtjs"},{label:"Remix",value:"remix"},{label:"SvelteKit",value:"sveltekit"},{label:"Astro",value:"astro"}],ve=fe([{library:"Mantine UI",component:"Autocomplete async data",url:"https://ui.mantine.dev/category/inputs/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."},{library:"Ant Design",component:"AutoComplete",url:"https://ant.design/components/auto-complete/",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Autocomplete",url:"https://base-ui.com/react/components/autocomplete",usedFor:["comparison"],relation:"compared"}]),We={title:"Molecules/Forms/Autocomplete",component:t,tags:["autodocs","ref:vuetify","ref:mui","ref:ant-design","ref:base-ui","ref:mantine-ui"],parameters:{references:ve,docs:{description:{component:"\n## Autocomplete\n\n입력값에 따라 옵션 목록을 필터링하여 보여주는 자동완성 입력 컴포넌트입니다.\n기존 목록에서만 선택 가능하며, 입력 중 일치하는 항목을 드롭다운으로 제안합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `options` | `AutocompleteOption[]` | `[]` | 옵션 목록 |\n| `value` | `string` | - | 제어 값 |\n| `placeholder` | `string` | `'검색...'` | 플레이스홀더 |\n| `disabled` | `boolean` | `false` | 비활성화 |\n| `clearable` | `boolean` | `true` | 지우기 버튼 |\n| `label` | `string` | - | 레이블 |\n| `error` | `boolean` | `false` | 에러 상태 |\n| `onChange` | `(value: string) => void` | - | 변경 콜백 |\n        "}}},argTypes:{placeholder:{control:"text",description:"플레이스홀더",table:{category:"Content"}},disabled:{control:"boolean",description:"비활성화",table:{category:"State"}},clearable:{control:"boolean",description:"지우기 버튼",table:{category:"Appearance"}},label:{control:"text",description:"레이블",table:{category:"Content"}},error:{control:"boolean",description:"에러 상태",table:{category:"State"}},errorText:{control:"text",description:"에러 메시지",table:{category:"Content"}},helperText:{control:"text",description:"도움말",table:{category:"Content"}},noOptionsText:{control:"text",description:"옵션 없을 때 텍스트",table:{category:"Content"}},maxItems:{control:{type:"number",min:1,max:20},description:"최대 표시 항목 수",table:{category:"Behavior"}}},args:{options:a,placeholder:"국가 검색...",disabled:!1,clearable:!0,noOptionsText:"옵션 없음",maxItems:8}},v={name:"기본",parameters:{docs:{description:{story:"기본 자동완성 입력입니다. 텍스트를 입력하면 필터링된 목록이 나타납니다."}}},render:i=>e.jsx("div",{style:{maxWidth:"300px",padding:"16px"},children:e.jsx(t,{...i})})},g={name:"레이블 + 도움말",parameters:{docs:{description:{story:"레이블과 도움말 텍스트를 가진 자동완성 입력입니다."}}},render:()=>e.jsxs("div",{style:{maxWidth:"300px",padding:"16px",display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(t,{options:a,label:"국가",helperText:"거주 국가를 선택하세요.",placeholder:"국가 검색..."}),e.jsx(t,{options:V,label:"프레임워크",helperText:"사용하는 프레임워크를 선택하세요.",placeholder:"프레임워크 검색..."})]})},h={name:"설명 있는 옵션",parameters:{docs:{description:{story:"각 옵션에 부가 설명이 있는 자동완성입니다."}}},render:()=>e.jsx("div",{style:{maxWidth:"300px",padding:"16px"},children:e.jsx(t,{options:a,label:"국가 선택",placeholder:"국가 검색...",helperText:"수도가 함께 표시됩니다."})})},j={name:"에러 상태",parameters:{docs:{description:{story:"유효성 검사 실패 시 에러 상태입니다."}}},render:()=>e.jsx("div",{style:{maxWidth:"300px",padding:"16px"},children:e.jsx(t,{options:a,label:"국가",error:!0,errorText:"올바른 국가를 선택해주세요.",placeholder:"국가 검색..."})})},T={name:"비활성화",parameters:{docs:{description:{story:"비활성화 상태의 자동완성입니다."}}},render:()=>e.jsxs("div",{style:{maxWidth:"300px",padding:"16px",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{options:a,label:"비활성화 (빈 값)",disabled:!0,placeholder:"비활성화됨"}),e.jsx(t,{options:a,label:"비활성화 (선택 있음)",disabled:!0,defaultValue:"대한민국"})]})};function ge(){var m;const[i,u]=l.useState("");return e.jsxs("div",{style:{maxWidth:"300px",padding:"16px",fontFamily:"system-ui"},children:[e.jsx(t,{options:V,label:"프레임워크",value:i,onChange:c=>u(c),placeholder:"프레임워크 검색..."}),i&&e.jsxs("div",{style:{marginTop:"12px",padding:"10px 14px",background:"#eff6ff",borderRadius:"8px",fontSize:"13px",color:"#1d4ed8"},children:["선택됨: ",e.jsx("strong",{children:((m=V.find(c=>c.value===i))==null?void 0:m.label)??i})]})]})}const A={name:"제어 컴포넌트",parameters:{docs:{description:{story:"외부 상태로 제어되는 자동완성입니다."}}},render:()=>e.jsx(ge,{})},w={name:"지우기 버튼 없음",parameters:{docs:{description:{story:"지우기(X) 버튼이 없는 자동완성입니다."}}},render:()=>e.jsx("div",{style:{maxWidth:"300px",padding:"16px"},children:e.jsx(t,{options:a,clearable:!1,label:"국가 (지우기 없음)",placeholder:"국가 검색..."})})},D={name:"전체 변형 모아보기",parameters:{docs:{description:{story:"모든 변형을 한눈에 볼 수 있습니다."}}},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px",padding:"16px",fontFamily:"system-ui",maxWidth:"660px"},children:[e.jsx(t,{options:a,label:"기본",placeholder:"검색..."}),e.jsx(t,{options:a,label:"도움말",helperText:"국가를 선택하세요",placeholder:"검색..."}),e.jsx(t,{options:a,label:"에러",error:!0,errorText:"필수 항목입니다",placeholder:"검색..."}),e.jsx(t,{options:a,label:"비활성화",disabled:!0,placeholder:"비활성화됨"}),e.jsx(t,{options:a,label:"지우기 없음",clearable:!1,placeholder:"검색..."}),e.jsx(t,{options:a,label:"최대 4개 표시",maxItems:4,placeholder:"검색..."})]})};var L,B,I;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '기본',
  parameters: {
    docs: {
      description: {
        story: '기본 자동완성 입력입니다. 텍스트를 입력하면 필터링된 목록이 나타납니다.'
      }
    }
  },
  render: args => <div style={{
    maxWidth: '300px',
    padding: '16px'
  }}>
      <Autocomplete {...args} />
    </div>
}`,...(I=(B=v.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var K,P,_;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: '레이블 + 도움말',
  parameters: {
    docs: {
      description: {
        story: '레이블과 도움말 텍스트를 가진 자동완성 입력입니다.'
      }
    }
  },
  render: () => <div style={{
    maxWidth: '300px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <Autocomplete options={countries} label="국가" helperText="거주 국가를 선택하세요." placeholder="국가 검색..." />
      <Autocomplete options={frameworks} label="프레임워크" helperText="사용하는 프레임워크를 선택하세요." placeholder="프레임워크 검색..." />
    </div>
}`,...(_=(P=g.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var z,C,X;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '설명 있는 옵션',
  parameters: {
    docs: {
      description: {
        story: '각 옵션에 부가 설명이 있는 자동완성입니다.'
      }
    }
  },
  render: () => <div style={{
    maxWidth: '300px',
    padding: '16px'
  }}>
      <Autocomplete options={countries} label="국가 선택" placeholder="국가 검색..." helperText="수도가 함께 표시됩니다." />
    </div>
}`,...(X=(C=h.parameters)==null?void 0:C.docs)==null?void 0:X.source}}};var G,H,J;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '에러 상태',
  parameters: {
    docs: {
      description: {
        story: '유효성 검사 실패 시 에러 상태입니다.'
      }
    }
  },
  render: () => <div style={{
    maxWidth: '300px',
    padding: '16px'
  }}>
      <Autocomplete options={countries} label="국가" error errorText="올바른 국가를 선택해주세요." placeholder="국가 검색..." />
    </div>
}`,...(J=(H=j.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,Y,Z;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: '비활성화',
  parameters: {
    docs: {
      description: {
        story: '비활성화 상태의 자동완성입니다.'
      }
    }
  },
  render: () => <div style={{
    maxWidth: '300px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Autocomplete options={countries} label="비활성화 (빈 값)" disabled placeholder="비활성화됨" />
      <Autocomplete options={countries} label="비활성화 (선택 있음)" disabled defaultValue="대한민국" />
    </div>
}`,...(Z=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;A.parameters={...A.parameters,docs:{...($=A.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: '제어 컴포넌트',
  parameters: {
    docs: {
      description: {
        story: '외부 상태로 제어되는 자동완성입니다.'
      }
    }
  },
  render: () => <ControlledDemo />
}`,...(re=(ee=A.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,ae,oe;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: '지우기 버튼 없음',
  parameters: {
    docs: {
      description: {
        story: '지우기(X) 버튼이 없는 자동완성입니다.'
      }
    }
  },
  render: () => <div style={{
    maxWidth: '300px',
    padding: '16px'
  }}>
      <Autocomplete options={countries} clearable={false} label="국가 (지우기 없음)" placeholder="국가 검색..." />
    </div>
}`,...(oe=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,le,ie;D.parameters={...D.parameters,docs:{...(se=D.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: '전체 변형 모아보기',
  parameters: {
    docs: {
      description: {
        story: '모든 변형을 한눈에 볼 수 있습니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px',
    padding: '16px',
    fontFamily: 'system-ui',
    maxWidth: '660px'
  }}>
      <Autocomplete options={countries} label="기본" placeholder="검색..." />
      <Autocomplete options={countries} label="도움말" helperText="국가를 선택하세요" placeholder="검색..." />
      <Autocomplete options={countries} label="에러" error errorText="필수 항목입니다" placeholder="검색..." />
      <Autocomplete options={countries} label="비활성화" disabled placeholder="비활성화됨" />
      <Autocomplete options={countries} label="지우기 없음" clearable={false} placeholder="검색..." />
      <Autocomplete options={countries} label="최대 4개 표시" maxItems={4} placeholder="검색..." />
    </div>
}`,...(ie=(le=D.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};const Ne=["Default","WithLabel","WithDescriptions","ErrorState","Disabled","Controlled","NoClearable","AllVariants"];export{D as AllVariants,A as Controlled,v as Default,T as Disabled,j as ErrorState,w as NoClearable,h as WithDescriptions,g as WithLabel,Ne as __namedExportsOrder,We as default};
