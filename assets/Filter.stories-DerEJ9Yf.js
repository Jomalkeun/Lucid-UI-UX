import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-BxXVWNx3.js";import{d as X}from"./reference-types-4ftiVeOu.js";import{c as Y}from"./index-CkIaN0ex.js";import{c as j}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const w=Y(["inline-flex cursor-pointer select-none items-center gap-1 rounded-full border-2 leading-none transition-colors","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2","disabled:pointer-events-none disabled:opacity-40"].join(" "),{variants:{size:{sm:"px-2.5 py-1 text-xs",md:"px-3.5 py-1.5 text-[13px]",lg:"px-[18px] py-2 text-sm"},variant:{outlined:"",filled:"",ghost:""},active:{true:"font-semibold",false:"font-normal"}},compoundVariants:[{variant:"outlined",active:!0,class:"border-krds-primary-50 bg-card text-krds-primary-base"},{variant:"outlined",active:!1,class:"border-border bg-card text-muted-foreground hover:text-foreground"},{variant:"filled",active:!0,class:"border-transparent bg-krds-primary-50 text-primary-foreground hover:bg-krds-primary-60"},{variant:"filled",active:!1,class:"border-transparent bg-muted text-muted-foreground hover:text-foreground"},{variant:"ghost",active:!0,class:"border-transparent bg-krds-primary-10 text-krds-primary-base hover:bg-krds-primary-20"},{variant:"ghost",active:!1,class:"border-transparent bg-transparent text-muted-foreground hover:text-foreground"}],defaultVariants:{size:"md",variant:"outlined",active:!1}}),Z={sm:"gap-1.5",md:"gap-2",lg:"gap-2.5"},l=y.forwardRef(({options:t,value:b,defaultValue:n=[],multiple:x=!1,resetLabel:S="전체",showReset:c=!0,size:o="md",color:a,variant:i="outlined",onChange:h,className:J},M)=>{const U=a?{"--color-krds-primary-50":a,"--color-krds-primary-base":a}:void 0,[K,H]=y.useState(n),d=b??K,F=r=>{let s;r==="__reset__"?s=[]:x?s=d.includes(r)?d.filter(Q=>Q!==r):[...d,r]:s=d.includes(r)?[]:[r],H(s),h==null||h(s)},z=d.length===0;return e.jsxs("div",{ref:M,"data-slot":"filter",style:U,className:j("flex flex-wrap",Z[o],J),children:[c&&e.jsx("button",{type:"button","aria-pressed":z,onClick:()=>F("__reset__"),className:j(w({size:o,variant:i,active:z})),children:S}),t.map(r=>{const s=d.includes(r.value);return e.jsxs("button",{type:"button","aria-pressed":s,onClick:()=>F(r.value),className:j(w({size:o,variant:i,active:s})),children:[r.label,r.count!==void 0&&e.jsxs("span",{className:"text-[0.9em] opacity-70",children:["(",r.count,")"]})]},r.value)})]})});l.displayName="Filter";l.__docgenInfo={description:"",methods:[],displayName:"Filter",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"FilterOption"}],raw:"FilterOption[]"},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},resetLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'전체'",computed:!1}},showReset:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"지정 시 강조색을 오버라이드. 미지정 시 KRDS primary 토큰"},variant:{required:!1,tsType:{name:"union",raw:"'outlined' | 'filled' | 'ghost'",elements:[{name:"literal",value:"'outlined'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'outlined'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const $=X([{library:"daisyUI",component:"Filter",url:"https://daisyui.com/components/filter/",usedFor:["comparison"],relation:"compared"}]),oe={title:"Atoms/Inputs/Filter",component:l,tags:["autodocs","ref:daisy-ui"],parameters:{references:$,docs:{description:{component:"\n## Filter\n\n목록이나 콘텐츠를 필터링하는 체크박스/라디오 기반의 칩 그룹 컴포넌트입니다.\n선택된 항목만 표시하는 클라이언트 사이드 필터링 UI를 간단하게 구성합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `options` | `FilterOption[]` | - | 필터 옵션 목록 |\n| `multiple` | `boolean` | `false` | 다중 선택 허용 |\n| `resetLabel` | `string` | `'전체'` | 초기화 버튼 텍스트 |\n| `showReset` | `boolean` | `true` | 초기화 버튼 표시 |\n| `size` | `'sm'\\|'md'\\|'lg'` | `'md'` | 크기 |\n| `color` | `string` | `'#3b82f6'` | 선택 색상 |\n| `variant` | `'outlined'\\|'filled'\\|'ghost'` | `'outlined'` | 스타일 |\n        "}}},argTypes:{multiple:{control:"boolean",table:{category:"Behavior"}},showReset:{control:"boolean",table:{category:"Behavior"}},size:{control:"select",options:["sm","md","lg"],table:{category:"Appearance"}},color:{control:"color",table:{category:"Appearance"}},variant:{control:"select",options:["outlined","filled","ghost"],table:{category:"Appearance"}}},args:{options:[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"}],multiple:!1,showReset:!0,size:"md",color:"#3b82f6",variant:"outlined"}},u={name:"기본 (단일 선택)",render:t=>e.jsx("div",{style:{padding:"24px",fontFamily:"system-ui"},children:e.jsx(l,{...t})})},p={name:"다중 선택",parameters:{docs:{description:{story:"여러 항목을 동시에 선택할 수 있습니다."}}},render:()=>e.jsx("div",{style:{padding:"24px",fontFamily:"system-ui"},children:e.jsx(l,{multiple:!0,options:[{value:"js",label:"JavaScript"},{value:"ts",label:"TypeScript"},{value:"py",label:"Python"},{value:"go",label:"Go"},{value:"rust",label:"Rust"}],color:"#8b5cf6"})})},m={name:"변형 비교",parameters:{docs:{description:{story:"outlined, filled, ghost 스타일 비교입니다."}}},render:()=>e.jsx("div",{style:{padding:"24px",fontFamily:"system-ui",display:"flex",flexDirection:"column",gap:"20px"},children:["outlined","filled","ghost"].map(t=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"8px",fontWeight:600},children:t}),e.jsx(l,{variant:t,defaultValue:["b"],options:[{value:"a",label:"전자기기"},{value:"b",label:"의류"},{value:"c",label:"식품"},{value:"d",label:"도서"}]})]},t))})},f={name:"크기 변형",parameters:{docs:{description:{story:"sm, md, lg 크기 비교입니다."}}},render:()=>e.jsx("div",{style:{padding:"24px",fontFamily:"system-ui",display:"flex",flexDirection:"column",gap:"20px"},children:["sm","md","lg"].map(t=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"8px"},children:["size: ",t]}),e.jsx(l,{size:t,options:[{value:"a",label:"전체"},{value:"b",label:"인기"},{value:"c",label:"신규"}],defaultValue:["a"]})]},t))})},v={name:"개수 표시",parameters:{docs:{description:{story:"각 필터 옵션 옆에 항목 수를 표시합니다."}}},render:()=>e.jsx("div",{style:{padding:"24px",fontFamily:"system-ui"},children:e.jsx(l,{multiple:!0,options:[{value:"all",label:"전체",count:148},{value:"published",label:"발행됨",count:92},{value:"draft",label:"임시저장",count:36},{value:"archived",label:"보관됨",count:20}],color:"#10b981",variant:"filled"})})};function ee(){const[t,b]=y.useState([]),[n,x]=y.useState([]),c=[{id:1,name:"에어팟 프로",category:"electronics",price:299e3,tag:"new"},{id:2,name:"나이키 운동화",category:"fashion",price:129e3,tag:"sale"},{id:3,name:"아이패드",category:"electronics",price:899e3,tag:"popular"},{id:4,name:"청바지",category:"fashion",price:89e3,tag:"sale"},{id:5,name:"커피 원두",category:"food",price:18e3,tag:"new"},{id:6,name:"프로그래밍 책",category:"books",price:35e3,tag:"popular"}].filter(a=>t.length===0?!0:t.includes(a.category)||t.includes(a.tag)),o=n.length>0&&n[0]==="price_asc"?[...c].sort((a,i)=>a.price-i.price):n[0]==="price_desc"?[...c].sort((a,i)=>i.price-a.price):c;return e.jsxs("div",{style:{fontFamily:"system-ui",maxWidth:"560px"},children:[e.jsxs("div",{style:{marginBottom:"12px"},children:[e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"6px"},children:"카테고리"}),e.jsx(l,{multiple:!0,value:t,onChange:b,options:[{value:"electronics",label:"전자기기",count:2},{value:"fashion",label:"패션",count:2},{value:"food",label:"식품",count:1},{value:"books",label:"도서",count:1},{value:"new",label:"신상품"},{value:"sale",label:"세일"},{value:"popular",label:"인기"}],color:"#3b82f6",size:"sm"})]}),e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"6px"},children:"정렬"}),e.jsx(l,{value:n,onChange:x,options:[{value:"price_asc",label:"가격 낮은순"},{value:"price_desc",label:"가격 높은순"}],showReset:!1,color:"#6b7280",size:"sm",variant:"ghost"})]}),e.jsxs("div",{style:{fontSize:"13px",color:"#6b7280",marginBottom:"8px"},children:[o.length,"개 상품"]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"},children:o.map(a=>e.jsxs("div",{style:{background:"#fff",border:"1px solid #e5e7eb",borderRadius:"10px",padding:"12px"},children:[e.jsx("div",{style:{fontSize:"13px",fontWeight:600,color:"#111",marginBottom:"4px"},children:a.name}),e.jsxs("div",{style:{fontSize:"14px",fontWeight:700,color:"#3b82f6"},children:["₩",a.price.toLocaleString()]}),e.jsx("span",{style:{fontSize:"11px",background:a.tag==="new"?"#dcfce7":a.tag==="sale"?"#fee2e2":"#dbeafe",color:a.tag==="new"?"#166534":a.tag==="sale"?"#991b1b":"#1e40af",padding:"2px 6px",borderRadius:"4px"},children:a.tag})]},a.id))})]})}const g={name:"상품 필터 예시",parameters:{docs:{description:{story:"다중 필터로 상품 목록을 필터링하는 인터랙티브 예시입니다."}}},render:()=>e.jsx(ee,{})};var V,k,T;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '기본 (단일 선택)',
  render: args => <div style={{
    padding: '24px',
    fontFamily: 'system-ui'
  }}>
      <Filter {...args} />
    </div>
}`,...(T=(k=u.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var _,R,B;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: '다중 선택',
  parameters: {
    docs: {
      description: {
        story: '여러 항목을 동시에 선택할 수 있습니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '24px',
    fontFamily: 'system-ui'
  }}>
      <Filter multiple options={[{
      value: 'js',
      label: 'JavaScript'
    }, {
      value: 'ts',
      label: 'TypeScript'
    }, {
      value: 'py',
      label: 'Python'
    }, {
      value: 'go',
      label: 'Go'
    }, {
      value: 'rust',
      label: 'Rust'
    }]} color="#8b5cf6" />
    </div>
}`,...(B=(R=p.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var q,A,D;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '변형 비교',
  parameters: {
    docs: {
      description: {
        story: 'outlined, filled, ghost 스타일 비교입니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '24px',
    fontFamily: 'system-ui',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      {(['outlined', 'filled', 'ghost'] as const).map(variant => <div key={variant}>
          <div style={{
        fontSize: '12px',
        color: '#9ca3af',
        marginBottom: '8px',
        fontWeight: 600
      }}>{variant}</div>
          <Filter variant={variant} defaultValue={['b']} options={[{
        value: 'a',
        label: '전자기기'
      }, {
        value: 'b',
        label: '의류'
      }, {
        value: 'c',
        label: '식품'
      }, {
        value: 'd',
        label: '도서'
      }]} />
        </div>)}
    </div>
}`,...(D=(A=m.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var P,N,W;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '크기 변형',
  parameters: {
    docs: {
      description: {
        story: 'sm, md, lg 크기 비교입니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '24px',
    fontFamily: 'system-ui',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      {(['sm', 'md', 'lg'] as const).map(size => <div key={size}>
          <div style={{
        fontSize: '12px',
        color: '#9ca3af',
        marginBottom: '8px'
      }}>size: {size}</div>
          <Filter size={size} options={[{
        value: 'a',
        label: '전체'
      }, {
        value: 'b',
        label: '인기'
      }, {
        value: 'c',
        label: '신규'
      }]} defaultValue={['a']} />
        </div>)}
    </div>
}`,...(W=(N=f.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var C,I,G;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '개수 표시',
  parameters: {
    docs: {
      description: {
        story: '각 필터 옵션 옆에 항목 수를 표시합니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '24px',
    fontFamily: 'system-ui'
  }}>
      <Filter multiple options={[{
      value: 'all',
      label: '전체',
      count: 148
    }, {
      value: 'published',
      label: '발행됨',
      count: 92
    }, {
      value: 'draft',
      label: '임시저장',
      count: 36
    }, {
      value: 'archived',
      label: '보관됨',
      count: 20
    }]} color="#10b981" variant="filled" />
    </div>
}`,...(G=(I=v.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};var O,E,L;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '상품 필터 예시',
  parameters: {
    docs: {
      description: {
        story: '다중 필터로 상품 목록을 필터링하는 인터랙티브 예시입니다.'
      }
    }
  },
  render: () => <ProductFilterDemo />
}`,...(L=(E=g.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const ie=["Default","Multiple","VariantComparison","SizeVariants","WithCounts","ProductFilter"];export{u as Default,p as Multiple,g as ProductFilter,f as SizeVariants,m as VariantComparison,v as WithCounts,ie as __namedExportsOrder,oe as default};
