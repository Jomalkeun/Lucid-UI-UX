import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as D}from"./index-BxXVWNx3.js";import{C as r}from"./checkbox-BOrDudnk.js";import{c as x}from"./utils-DCADjnpI.js";import{d as E}from"./reference-types-4ftiVeOu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DtBajwEi.js";import"./index-Cuo70N6w.js";import"./index-BIfB_hJr.js";import"./index-D63pzw-_.js";import"./index-BjCkHmxr.js";import"./index-D_4yO-tZ.js";import"./index-DnJVWBh-.js";import"./index-BuIYde5q.js";import"./index-DCvtqWl1.js";import"./index-CkIaN0ex.js";import"./loader-circle-Db56uVXG.js";import"./createLucideIcon-Ct87QT5c.js";import"./check-CvnDgXMx.js";const t=D.forwardRef(({className:s,type:m="column",disabled:l,label:a,legend:o,helperText:c,children:O,...L},_)=>{const b=o??a;return e.jsxs("fieldset",{ref:_,disabled:l,className:x("m-0 flex gap-3 border-0 p-0",m==="column"?"flex-col":"flex-row flex-wrap",s),...L,children:[b&&e.jsx("legend",{className:x("mb-1 text-krds-body-md font-medium text-krds-gray-90",l&&"text-krds-gray-40"),children:b}),O,c?e.jsx("p",{className:"text-krds-body-xs text-krds-gray-50",children:c}):null]})});t.displayName="CheckboxGroup";t.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{type:{required:!1,tsType:{name:"union",raw:"'column' | 'row'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'row'"}]},description:"",defaultValue:{value:"'column'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},legend:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},helperText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const B=E([{library:"Bootstrap",component:"Checks and radios",url:"https://getbootstrap.com/docs/5.3/forms/checks-radios/",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Option Group",url:"https://quasar.dev/vue-components/option-group",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Checkbox Group",url:"https://base-ui.com/react/components/checkbox-group",usedFor:["comparison"],relation:"compared"}]),te={title:"Molecules/Forms/CheckboxGroup",component:t,tags:["ref:bootstrap","autodocs","ref:quasar","ref:base-ui"],parameters:{references:B,docs:{description:{component:`
## CheckboxGroup

복수 선택이 가능한 Checkbox 묶음입니다.
\`fieldset\`과 \`legend\`를 사용해 관련 체크박스를 의미적으로 그룹화합니다.
        `}}},argTypes:{type:{control:"select",options:["column","row"],table:{category:"Layout"}},disabled:{control:"boolean",table:{category:"State"}},label:{control:"text",table:{category:"Content"}},legend:{control:"text",table:{category:"Content"}},helperText:{control:"text",table:{category:"Content"}}},args:{legend:"알림 유형",type:"column",disabled:!1}};function F(){return e.jsxs(e.Fragment,{children:[e.jsx(r,{value:"news",label:"공지사항",defaultChecked:!0}),e.jsx(r,{value:"update",label:"업데이트 소식"}),e.jsx(r,{value:"event",label:"이벤트/프로모션",defaultChecked:!0}),e.jsx(r,{value:"tip",label:"서비스 팁"})]})}const n={name:"기본",render:s=>e.jsx(t,{...s,children:e.jsx(F,{})})},d={name:"가로 배치",render:()=>e.jsxs(t,{type:"row",legend:"관심 카테고리",children:[e.jsx(r,{value:"product",label:"상품"}),e.jsx(r,{value:"benefit",label:"혜택"}),e.jsx(r,{value:"event",label:"이벤트"})]})},p={name:"비활성",render:()=>e.jsx(t,{legend:"알림 유형",disabled:!0,helperText:"권한이 없어 변경할 수 없습니다.",children:e.jsx(F,{})})},i={name:"제어형",render:()=>{const[s,m]=D.useState(["news","event"]),l=a=>{m(o=>o.includes(a)?o.filter(c=>c!==a):[...o,a])};return e.jsxs("div",{className:"grid gap-3",children:[e.jsx(t,{legend:"알림 유형",children:[["news","공지사항"],["update","업데이트 소식"],["event","이벤트/프로모션"],["tip","서비스 팁"]].map(([a,o])=>e.jsx(r,{value:a,label:o,checked:s.includes(a),onCheckedChange:()=>l(a)},a))}),e.jsxs("p",{className:"text-krds-body-xs text-krds-gray-60",children:["선택 항목: ",s.join(", ")||"없음"]})]})},parameters:{controls:{disable:!0}}},u={name:"일부 항목 비활성",render:()=>e.jsxs(t,{legend:"알림 유형",children:[e.jsx(r,{value:"news",label:"공지사항 (필수 수신)",checked:!0}),e.jsx(r,{value:"update",label:"업데이트 소식"}),e.jsx(r,{value:"event",label:"이벤트/프로모션 (미지원)",disabled:!0}),e.jsx(r,{value:"tip",label:"서비스 팁"})]})};var h,g,k;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '기본',
  render: args => <CheckboxGroup {...args}>
      <NotificationOptions />
    </CheckboxGroup>
}`,...(k=(g=n.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var f,v,C;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '가로 배치',
  render: () => <CheckboxGroup type="row" legend="관심 카테고리">
      <Checkbox value="product" label="상품" />
      <Checkbox value="benefit" label="혜택" />
      <Checkbox value="event" label="이벤트" />
    </CheckboxGroup>
}`,...(C=(v=d.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var y,j,w;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '비활성',
  render: () => <CheckboxGroup legend="알림 유형" disabled helperText="권한이 없어 변경할 수 없습니다.">
      <NotificationOptions />
    </CheckboxGroup>
}`,...(w=(j=p.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var R,N,G;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '제어형',
  render: () => {
    const [selected, setSelected] = React.useState(['news', 'event']);
    const toggle = (value: string) => {
      setSelected(current => current.includes(value) ? current.filter(item => item !== value) : [...current, value]);
    };
    return <div className="grid gap-3">
        <CheckboxGroup legend="알림 유형">
          {[['news', '공지사항'], ['update', '업데이트 소식'], ['event', '이벤트/프로모션'], ['tip', '서비스 팁']].map(([value, label]) => <Checkbox key={value} value={value} label={label} checked={selected.includes(value)} onCheckedChange={() => toggle(value)} />)}
        </CheckboxGroup>
        <p className="text-krds-body-xs text-krds-gray-60">선택 항목: {selected.join(', ') || '없음'}</p>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(G=(N=i.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var S,T,q;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '일부 항목 비활성',
  render: () => <CheckboxGroup legend="알림 유형">
      <Checkbox value="news" label="공지사항 (필수 수신)" checked />
      <Checkbox value="update" label="업데이트 소식" />
      <Checkbox value="event" label="이벤트/프로모션 (미지원)" disabled />
      <Checkbox value="tip" label="서비스 팁" />
    </CheckboxGroup>
}`,...(q=(T=u.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};const oe=["Default","RowLayout","Disabled","Controlled","PartialDisabled"];export{i as Controlled,n as Default,p as Disabled,u as PartialDisabled,d as RowLayout,oe as __namedExportsOrder,te as default};
