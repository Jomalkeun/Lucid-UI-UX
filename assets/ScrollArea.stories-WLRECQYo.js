import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as q}from"./reference-types-4ftiVeOu.js";function n({children:r,height:a=260,width:o="100%",orientation:t="vertical",padded:y=!0,bordered:v=!0,shadow:A=!1,scrollbarColor:S="#94a3b8",background:w="#fff",style:x}){const k=t==="horizontal"||t==="both"?"auto":"hidden",j=t==="vertical"||t==="both"?"auto":"hidden";return e.jsx("div",{style:{width:o,height:a,overflowX:k,overflowY:j,padding:y?16:0,border:v?"1px solid #e5e7eb":void 0,borderRadius:10,boxShadow:A?"0 10px 30px rgba(15, 23, 42, 0.12)":void 0,background:w,color:"#111827",fontFamily:"system-ui, sans-serif",scrollbarColor:`${S} transparent`,scrollbarWidth:"thin",...x},children:r})}n.__docgenInfo={description:"",methods:[],displayName:"ScrollArea",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"260",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"'100%'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal' | 'both'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"},{name:"literal",value:"'both'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},padded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},shadow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},scrollbarColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#94a3b8'",computed:!1}},background:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#fff'",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const C=q([{library:"Ark UI",component:"Scroll Area",url:"https://ark-ui.com/docs/components/scroll-area",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Chakra UI",component:"Scroll Area",url:"https://www.chakra-ui.com/docs/components/scroll-area",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Scroll Area",url:"https://quasar.dev/vue-components/scroll-area",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Scroll Area",url:"https://base-ui.com/react/components/scroll-area",usedFor:["comparison"],relation:"compared"}]),T=Array.from({length:14},(r,a)=>`콘텐츠 블록 ${a+1}: 스크롤 영역은 제한된 높이 안에서 긴 목록, 로그, 도움말 문서, 테이블 미리보기를 안정적으로 표시합니다.`),V={title:"Layout/Primitives/ScrollArea",component:n,tags:["autodocs","ref:chakra-ui","ref:shadcn-ui","ref:ark-ui","ref:mui","ref:quasar","ref:base-ui"],parameters:{references:C,layout:"centered",docs:{description:{component:`
## ScrollArea

커스텀 스타일의 스크롤바를 가진 스크롤 가능한 영역 컴포넌트입니다.
기본 OS 스크롤바 대신 디자인 시스템과 일관된 스크롤바를 제공합니다.
        `}}},argTypes:{height:{control:"text",table:{category:"Layout"}},width:{control:"text",table:{category:"Layout"}},orientation:{control:"inline-radio",options:["vertical","horizontal","both"],table:{category:"Behavior"}},padded:{control:"boolean",table:{category:"Appearance"}},bordered:{control:"boolean",table:{category:"Appearance"}},shadow:{control:"boolean",table:{category:"Appearance"}},scrollbarColor:{control:"color",table:{category:"Appearance"}},background:{control:"color",table:{category:"Appearance"}}},args:{height:260,width:420,orientation:"vertical",padded:!0,bordered:!0,shadow:!1,scrollbarColor:"#94a3b8",background:"#ffffff"},render:r=>e.jsx(n,{...r,children:e.jsx("div",{style:{display:"grid",gap:12},children:T.map(a=>e.jsx("p",{style:{margin:0,lineHeight:1.6,color:"#374151"},children:a},a))})})},l={name:"기본"},s={name:"가로 스크롤",args:{orientation:"horizontal",height:180,width:460},render:r=>e.jsx(n,{...r,children:e.jsx("div",{style:{display:"grid",gridAutoFlow:"column",gridAutoColumns:180,gap:12,width:980},children:Array.from({length:6},(a,o)=>e.jsxs("div",{style:{height:120,borderRadius:8,background:"#f1f5f9",display:"grid",placeItems:"center",fontWeight:700},children:["Card ",o+1]},o))})})},i={name:"로그 뷰",args:{height:220,width:520,padded:!1,background:"#0f172a",scrollbarColor:"#38bdf8"},render:r=>e.jsx(n,{...r,children:e.jsx("pre",{style:{margin:0,padding:16,color:"#dbeafe",fontSize:12,lineHeight:1.7},children:Array.from({length:18},(a,o)=>`[${String(o+1).padStart(2,"0")}:00] sync task completed in ${120+o*8}ms`).join(`
`)})})};var d,c,p;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '기본'
}`,...(p=(c=l.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,m,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '가로 스크롤',
  args: {
    orientation: 'horizontal',
    height: 180,
    width: 460
  },
  render: args => <ScrollArea {...args}>
      <div style={{
      display: 'grid',
      gridAutoFlow: 'column',
      gridAutoColumns: 180,
      gap: 12,
      width: 980
    }}>
        {Array.from({
        length: 6
      }, (_, index) => <div key={index} style={{
        height: 120,
        borderRadius: 8,
        background: '#f1f5f9',
        display: 'grid',
        placeItems: 'center',
        fontWeight: 700
      }}>Card {index + 1}</div>)}
      </div>
    </ScrollArea>
}`,...(f=(m=s.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,h,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '로그 뷰',
  args: {
    height: 220,
    width: 520,
    padded: false,
    background: '#0f172a',
    scrollbarColor: '#38bdf8'
  },
  render: args => <ScrollArea {...args}>
      <pre style={{
      margin: 0,
      padding: 16,
      color: '#dbeafe',
      fontSize: 12,
      lineHeight: 1.7
    }}>
        {Array.from({
        length: 18
      }, (_, i) => \`[\${String(i + 1).padStart(2, '0')}:00] sync task completed in \${120 + i * 8}ms\`).join('\\n')}
      </pre>
    </ScrollArea>
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const F=["Default","Horizontal","DenseLog"];export{l as Default,i as DenseLog,s as Horizontal,F as __namedExportsOrder,V as default};
