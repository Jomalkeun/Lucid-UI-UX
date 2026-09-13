import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{r as D}from"./index-BxXVWNx3.js";import{c}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const m=[{key:"web",label:"웹"},{key:"app",label:"앱"},{key:"csr",label:"상담"},{key:"kiosk",label:"키오스크"}];function u({initialSelected:a=["web","app"],onChange:t,className:B,...E}){const[s,y]=D.useState(a),p=s.length===m.length,G=()=>{const e=p?[]:m.map(r=>r.key);y(e),t==null||t(e)},T=e=>{const r=s.includes(e)?s.filter(_=>_!==e):[...s,e];y(r),t==null||t(r)};return d.jsxs("div",{role:"group","aria-label":"채널 선택",className:c("flex flex-wrap items-center gap-2",B),...E,children:[d.jsx("button",{type:"button","aria-pressed":p,onClick:G,className:c("inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-krds-body-sm font-semibold transition-colors",p?"border-krds-primary-50 bg-krds-primary-50 text-krds-white":"border-krds-gray-30 bg-krds-gray-0 text-krds-gray-70 hover:border-krds-primary-50 hover:text-krds-primary-base"),children:"전체 채널"}),m.map(e=>{const r=s.includes(e.key);return d.jsx("button",{type:"button","aria-pressed":r,onClick:()=>T(e.key),className:c("inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-krds-body-sm font-medium transition-colors",r?"border-krds-primary-40 bg-krds-primary-10 text-krds-primary-base":"border-krds-gray-20 bg-krds-gray-0 text-krds-gray-50 hover:border-krds-primary-30 hover:text-krds-primary-base"),children:e.label},e.key)})]})}u.__docgenInfo={description:"",methods:[],displayName:"ChannelBadgeGroup",props:{initialSelected:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"['web', 'app']",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(selected: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selected"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const V={title:"Molecules/Navigation/ChannelBadgeGroup",component:u,tags:["autodocs","navigation","custom-ui"],parameters:{docs:{description:{component:`
## ChannelBadgeGroup

**전시 콘텐츠를 노출할 채널을 다중 선택**하는 분자 컴포넌트입니다.
"전체 채널" 버튼은 모두 선택/해제를 토글합니다.
시스템 운영 정책 연관: **3.1 (채널 구분)·3.7 (통합 플랫폼)**.

---

### Props

| Prop | Type | Default | 설명 |
|---|---|---|---|
| \`initialSelected\` | \`string[]\` | \`['web','app']\` | 초기 선택 채널 키 배열 |

---

### 채널 키 목록

| key | 표시명 |
|---|---|
| \`web\` | 웹 (옵션1 웹) |
| \`app\` | 앱 (옵션1 앱) |
| \`csr\` | 상담 (고객센터) |
| \`kiosk\` | 키오스크 |

---

### 접근성(A11y)

- \`role="group"\`으로 묶어 채널 선택 영역임을 명시합니다.
- 각 버튼에 \`aria-pressed\`로 선택 여부를 전달합니다.
- "전체 채널" 버튼은 모두 선택 시 \`aria-pressed="true"\`가 됩니다.
        `}}},argTypes:{initialSelected:{description:"초기 선택 채널 key 배열",control:"object",table:{type:{summary:"string[]"},defaultValue:{summary:"['web','app']"},category:"State"}}},args:{initialSelected:["web","app"]},render:a=>d.jsx(u,{...a,children:a.children??a.label??a.text??void 0})},n={name:"기본 (웹·앱 선택)",args:{initialSelected:["web","app"]}},i={name:"전체 채널 선택",args:{initialSelected:["web","app","csr","kiosk"]}},o={name:"선택 없음",args:{initialSelected:[]}},l={name:"단일 채널 (앱만)",args:{initialSelected:["app"]}};var g,b,k;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '기본 (웹·앱 선택)',
  args: {
    initialSelected: ['web', 'app']
  } as any
}`,...(k=(b=n.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var S,x,f;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '전체 채널 선택',
  args: {
    initialSelected: ['web', 'app', 'csr', 'kiosk']
  } as any
}`,...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var w,v,h;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '선택 없음',
  args: {
    initialSelected: []
  } as any
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var N,A,j;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '단일 채널 (앱만)',
  args: {
    initialSelected: ['app']
  } as any
}`,...(j=(A=l.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};const H=["Default","AllSelected","NoneSelected","SingleChannel"];export{i as AllSelected,n as Default,o as NoneSelected,l as SingleChannel,H as __namedExportsOrder,V as default};
