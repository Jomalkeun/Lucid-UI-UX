import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as A}from"./index-BxXVWNx3.js";import{d as C}from"./reference-types-4ftiVeOu.js";import{R as r}from"./RadioGroup-C-XoJIpr.js";import{R as a}from"./Radio-C0pTWAzv.js";import"./_commonjsHelpers-CqkleIqs.js";import"./radio-group-KAscZpEI.js";import"./index-BIfB_hJr.js";import"./index-Cuo70N6w.js";import"./index-DtBajwEi.js";import"./index-DnJVWBh-.js";import"./index-BuIYde5q.js";import"./index-DCvtqWl1.js";import"./index-D95NAxrO.js";import"./index-DTo5Pt6F.js";import"./index-BKM4mA3Z.js";import"./index-D5tP6kvT.js";import"./index-BjCkHmxr.js";import"./index-D63pzw-_.js";import"./index-D_4yO-tZ.js";import"./index-CkIaN0ex.js";import"./utils-DCADjnpI.js";const I=C([{library:"Bootstrap",component:"Checks and radios",url:"https://getbootstrap.com/docs/5.3/forms/checks-radios/",usedFor:["comparison"],relation:"compared"},{library:"KRDS",component:"Radio",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-radio--docs",usedFor:["design","behavior","api"],relation:"adapted"},{library:"Ant Design",component:"Radio",url:"https://ant.design/components/radio/",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Radio",url:"https://quasar.dev/vue-components/radio",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Radio",url:"https://base-ui.com/react/components/radio",usedFor:["comparison"],relation:"compared"}]),ee={title:"Atoms/Inputs/Radio/Radio",component:a,tags:["ref:bootstrap","autodocs","ref:ant-design","ref:quasar","ref:base-ui"],parameters:{references:I,docs:{description:{component:`
## Radio

Radix RadioGroup item을 KRDS 토큰과 shadcn/ui 스타일의 ref-forwarding API로 감싼 라디오 항목입니다.
단독 사용보다는 \`RadioGroup\` 안에서 사용합니다.
        `}}},argTypes:{value:{control:"text",table:{category:"Content"}},label:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},size:{control:"select",options:["medium","large"],table:{category:"Appearance"}},disabled:{control:"boolean",table:{category:"State"}}},args:{value:"immediate",label:"즉시 배포",size:"medium",disabled:!1},render:o=>e.jsxs(r,{defaultValue:String(o.value),type:"row",children:[e.jsx(a,{...o}),e.jsx(a,{value:"reserved",label:"예약 배포"})]})},t={name:"기본"},s={name:"가로 배치",render:()=>e.jsxs(r,{name:"deploy",defaultValue:"immediate",type:"row",children:[e.jsx(a,{value:"immediate",label:"즉시 배포"}),e.jsx(a,{value:"reserved",label:"예약 배포"})]}),parameters:{controls:{disable:!0}}},l={name:"세로 배치",render:()=>e.jsxs(r,{name:"channel",defaultValue:"tworld",column:!0,children:[e.jsx(a,{value:"tworld",label:"옵션1"}),e.jsx(a,{value:"tmembership",label:"옵션2"}),e.jsx(a,{value:"tuniverse",label:"옵션3"})]}),parameters:{controls:{disable:!0}}},i={name:"설명 포함",render:()=>e.jsxs(r,{name:"plan",defaultValue:"basic",column:!0,children:[e.jsx(a,{value:"basic",label:"기본 플랜",description:"기본 기능을 제공합니다."}),e.jsx(a,{value:"pro",label:"프로 플랜",description:"고급 분석과 API 연동을 포함합니다."}),e.jsx(a,{value:"enterprise",label:"엔터프라이즈",description:"전담 매니저와 SLA를 제공합니다."})]}),parameters:{controls:{disable:!0}}},d={name:"제어형",render:()=>{const[o,D]=A.useState("immediate");return e.jsxs("div",{className:"grid gap-3",children:[e.jsxs(r,{name:"deploy-controlled",value:o,onValueChange:D,type:"row",children:[e.jsx(a,{value:"immediate",label:"즉시 배포"}),e.jsx(a,{value:"reserved",label:"예약 배포"})]}),e.jsxs("p",{className:"text-krds-body-xs text-krds-gray-60",children:["선택 값: ",o]})]})},parameters:{controls:{disable:!0}}},n={name:"비활성 항목",render:()=>e.jsxs(r,{name:"channel-disabled",defaultValue:"tworld",type:"row",children:[e.jsx(a,{value:"tworld",label:"옵션1"}),e.jsx(a,{value:"tmembership",label:"옵션2"}),e.jsx(a,{value:"tuniverse",label:"옵션3",disabled:!0,description:"준비 중"})]}),parameters:{controls:{disable:!0}}};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '기본'
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,b,v;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '가로 배치',
  render: () => <RadioGroup name="deploy" defaultValue="immediate" type="row">
      <Radio value="immediate" label="즉시 배포" />
      <Radio value="reserved" label="예약 배포" />
    </RadioGroup>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var R,x,g;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '세로 배치',
  render: () => <RadioGroup name="channel" defaultValue="tworld" column>
      <Radio value="tworld" label="옵션1" />
      <Radio value="tmembership" label="옵션2" />
      <Radio value="tuniverse" label="옵션3" />
    </RadioGroup>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,f,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '설명 포함',
  render: () => <RadioGroup name="plan" defaultValue="basic" column>
      <Radio value="basic" label="기본 플랜" description="기본 기능을 제공합니다." />
      <Radio value="pro" label="프로 플랜" description="고급 분석과 API 연동을 포함합니다." />
      <Radio value="enterprise" label="엔터프라이즈" description="전담 매니저와 SLA를 제공합니다." />
    </RadioGroup>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var j,w,V;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '제어형',
  render: () => {
    const [value, setValue] = React.useState('immediate');
    return <div className="grid gap-3">
        <RadioGroup name="deploy-controlled" value={value} onValueChange={setValue} type="row">
          <Radio value="immediate" label="즉시 배포" />
          <Radio value="reserved" label="예약 배포" />
        </RadioGroup>
        <p className="text-krds-body-xs text-krds-gray-60">선택 값: {value}</p>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(V=(w=d.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var S,G,k;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '비활성 항목',
  render: () => <RadioGroup name="channel-disabled" defaultValue="tworld" type="row">
      <Radio value="tworld" label="옵션1" />
      <Radio value="tmembership" label="옵션2" />
      <Radio value="tuniverse" label="옵션3" disabled description="준비 중" />
    </RadioGroup>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(k=(G=n.parameters)==null?void 0:G.docs)==null?void 0:k.source}}};const ae=["Default","Horizontal","Vertical","WithDescription","Controlled","DisabledItem"];export{d as Controlled,t as Default,n as DisabledItem,s as Horizontal,l as Vertical,i as WithDescription,ae as __namedExportsOrder,ee as default};
