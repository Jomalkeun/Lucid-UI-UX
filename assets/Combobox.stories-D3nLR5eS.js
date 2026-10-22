import{j as w}from"./jsx-runtime-D_zvdyIk.js";import{r as O}from"./index-BxXVWNx3.js";import{d as q}from"./reference-types-CC3VHbJD.js";import{S as E}from"./searchable-select-BDuY8AXs.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DCADjnpI.js";import"./search-BiWmW4bk.js";import"./createLucideIcon-Ct87QT5c.js";import"./x-DsL683-u.js";import"./chevron-down-D49U3Rzo.js";import"./check-CvnDgXMx.js";function u({options:a=[],value:o,defaultValue:D,onValueChange:i,...I}){return w.jsx(E,{...I,options:a,value:o===void 0?void 0:a.find(e=>e.value===o)??null,defaultValue:a.find(e=>e.value===D)??null,onValueChange:e=>{e&&(i==null||i(e.value,e))}})}u.__docgenInfo={description:"@deprecated Prefer molecules/forms/SearchableSelect for new object-value integrations.",methods:[],displayName:"Combobox",props:{value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string, option: ComboboxOption) => void",signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"SearchableOption"},name:"option"}],return:{name:"void"}}},description:""},options:{defaultValue:{value:"[]",computed:!1},required:!1}},composes:["Omit"]};const F=q([{library:"Ark UI",component:"Combobox",url:"https://ark-ui.com/docs/components/combobox",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"shadcn/ui",component:"Combobox",url:"https://ui.shadcn.com/docs/components/combobox",usedFor:["comparison"],relation:"compared"},{library:"Open UI",component:"Combobox Explainer",url:"https://open-ui.org/components/combobox.explainer/",usedFor:["behavior","accessibility","comparison"],relation:"compared"},{library:"WAI-ARIA Authoring Practices Guide",component:"Combobox Pattern",url:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/",usedFor:["behavior","accessibility"],relation:"compared"}]),c=[{label:"서울특별시",value:"seoul"},{label:"부산광역시",value:"busan"},{label:"대구광역시",value:"daegu"},{label:"광주광역시",value:"gwangju"},{label:"대전광역시",value:"daejeon"},{label:"제주특별자치도",value:"jeju"}],z={title:"Atoms/Inputs/Combobox",component:u,tags:["autodocs","inputs","ref:shadcn-ui","ref:ark-ui","ref:open-ui","ref:w3c-aria-apg"],parameters:{references:F,layout:"centered",docs:{description:{component:"입력으로 옵션을 검색하고 하나의 값을 선택하는 콤보박스 컴포넌트입니다."}}},argTypes:{label:{control:"text",table:{category:"Content"}},placeholder:{control:"text",table:{category:"Content"}},hint:{control:"text",table:{category:"Content"}},emptyMessage:{control:"text",table:{category:"Content"}},disabled:{control:"boolean",table:{category:"State"}}},args:{label:"지역",placeholder:"지역을 검색하세요",hint:"",emptyMessage:"일치하는 지역이 없습니다.",disabled:!1,options:c}},r={name:"기본"},t={name:"초기값",args:{defaultValue:"seoul"}},n={name:"제어 상태",render:()=>{const[a,o]=O.useState("jeju");return w.jsx(u,{label:"배송 지역",options:c,value:a,onValueChange:o,hint:`선택값: ${a}`})},parameters:{controls:{disable:!0}}},s={name:"비활성 옵션",args:{options:[...c,{label:"세종특별자치시",value:"sejong",disabled:!0}]}},l={name:"비활성화",args:{disabled:!0,defaultValue:"busan"}};var m,p,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '기본'
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var b,g,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '초기값',
  args: {
    defaultValue: 'seoul'
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,x,h;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '제어 상태',
  render: () => {
    const [value, setValue] = useState('jeju');
    return <Combobox label="배송 지역" options={options} value={value} onValueChange={setValue} hint={\`선택값: \${value}\`} />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var y,j,C;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '비활성 옵션',
  args: {
    options: [...options, {
      label: '세종특별자치시',
      value: 'sejong',
      disabled: true
    }]
  }
}`,...(C=(j=s.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var S,V,A;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '비활성화',
  args: {
    disabled: true,
    defaultValue: 'busan'
  }
}`,...(A=(V=l.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};const B=["Default","WithDefaultValue","Controlled","DisabledOption","Disabled"];export{n as Controlled,r as Default,l as Disabled,s as DisabledOption,t as WithDefaultValue,B as __namedExportsOrder,z as default};
