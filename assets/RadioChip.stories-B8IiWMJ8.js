import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as O,r as q}from"./index-BxXVWNx3.js";import{c as L}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const B={small:"text-krds-body-xs px-2.5 py-1",medium:"text-krds-body-sm px-3 py-1.5",large:"text-krds-body-md px-4 py-2"},s=O.forwardRef(function({name:r,value:t,checked:o=!1,disabled:m=!1,size:P="medium",label:p,onChange:u,onValueChange:h,children:g,className:D,..._},E){const A=()=>{m||t===void 0||(u==null||u(t),h==null||h(t))},G=g??p,I=typeof p=="string"?p:typeof g=="string"?g:void 0;return e.jsxs("label",{ref:E,className:L("inline-flex items-center gap-1.5 rounded-full border font-medium cursor-pointer select-none transition-all duration-150",B[P],o?"border-krds-primary-50 bg-krds-primary-10 text-krds-primary-base":"border-krds-gray-30 text-krds-gray-70 hover:border-krds-primary-50",m&&"opacity-50 cursor-not-allowed pointer-events-none",D),"aria-checked":o,..._,children:[e.jsx("input",{type:"radio",name:r,value:t,checked:o,disabled:m,onChange:A,className:"sr-only","aria-label":I}),o&&e.jsx("span",{className:"inline-flex items-center justify-center rounded-full bg-krds-primary-50 flex-shrink-0",style:{width:8,height:8},"aria-hidden":"true"}),e.jsx("span",{children:G})]})});s.__docgenInfo={description:"",methods:[],displayName:"RadioChip",props:{name:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};const M={title:"Atoms/Inputs/Radio/RadioChip",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
## RadioChip

Radio처럼 하나만 선택할 수 있는 칩형 입력입니다.
같은 \`name\`을 가진 RadioChip 그룹에서 하나의 값만 선택하는 정렬, 기간, 보기 방식 선택에 사용합니다.
        `}}},argTypes:{name:{control:"text",table:{category:"Content"}},value:{control:"text",table:{category:"Content"}},checked:{control:"boolean",table:{category:"State"}},disabled:{control:"boolean",table:{category:"State"}},size:{control:"select",options:["small","medium","large"],table:{category:"Appearance"}},label:{control:"text",table:{category:"Content"}}},args:{name:"sort-demo",value:"latest",checked:!1,disabled:!1,size:"medium",label:"최신순"}},i={name:"기본"},d={name:"선택됨",args:{checked:!0}},n={name:"정렬 그룹",render:()=>{const[a,r]=q.useState("latest");return e.jsxs("div",{className:"grid gap-3",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(s,{name:"sort-group",value:"latest",checked:a==="latest",onValueChange:r,children:"최신순"}),e.jsx(s,{name:"sort-group",value:"popular",checked:a==="popular",onValueChange:r,children:"인기순"}),e.jsx(s,{name:"sort-group",value:"views",checked:a==="views",onValueChange:r,children:"조회순"}),e.jsx(s,{name:"sort-group",value:"recommend",checked:a==="recommend",onValueChange:r,children:"추천순"})]}),e.jsxs("p",{className:"text-krds-body-xs text-krds-gray-60",children:["선택 정렬: ",a]})]})},parameters:{controls:{disable:!0}}},l={name:"기간 선택",render:()=>{const[a,r]=q.useState("1m");return e.jsxs("div",{className:"grid gap-3",children:[e.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[e.jsx(s,{size:"small",name:"period",value:"1w",checked:a==="1w",onValueChange:r,children:"1주"}),e.jsx(s,{size:"small",name:"period",value:"1m",checked:a==="1m",onValueChange:r,children:"1개월"}),e.jsx(s,{size:"small",name:"period",value:"3m",checked:a==="3m",onValueChange:r,children:"3개월"}),e.jsx(s,{size:"small",name:"period",value:"6m",checked:a==="6m",onValueChange:r,children:"6개월"}),e.jsx(s,{size:"small",name:"period",value:"1y",checked:a==="1y",onValueChange:r,children:"1년"})]}),e.jsxs("p",{className:"text-krds-body-xs text-krds-gray-60",children:["선택 기간: ",a]})]})},parameters:{controls:{disable:!0}}},c={name:"비활성",args:{label:"추천순",checked:!1,disabled:!0}};var x,y,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '기본'
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,k,C;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '선택됨',
  args: {
    checked: true
  }
}`,...(C=(k=d.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var b,R,j;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '정렬 그룹',
  render: () => {
    const [sort, setSort] = React.useState('latest');
    return <div className="grid gap-3">
        <div className="flex flex-wrap gap-2">
          <RadioChip name="sort-group" value="latest" checked={sort === 'latest'} onValueChange={setSort}>최신순</RadioChip>
          <RadioChip name="sort-group" value="popular" checked={sort === 'popular'} onValueChange={setSort}>인기순</RadioChip>
          <RadioChip name="sort-group" value="views" checked={sort === 'views'} onValueChange={setSort}>조회순</RadioChip>
          <RadioChip name="sort-group" value="recommend" checked={sort === 'recommend'} onValueChange={setSort}>추천순</RadioChip>
        </div>
        <p className="text-krds-body-xs text-krds-gray-60">선택 정렬: {sort}</p>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(j=(R=n.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var S,w,N;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '기간 선택',
  render: () => {
    const [period, setPeriod] = React.useState('1m');
    return <div className="grid gap-3">
        <div className="flex flex-wrap gap-1.5">
          <RadioChip size="small" name="period" value="1w" checked={period === '1w'} onValueChange={setPeriod}>1주</RadioChip>
          <RadioChip size="small" name="period" value="1m" checked={period === '1m'} onValueChange={setPeriod}>1개월</RadioChip>
          <RadioChip size="small" name="period" value="3m" checked={period === '3m'} onValueChange={setPeriod}>3개월</RadioChip>
          <RadioChip size="small" name="period" value="6m" checked={period === '6m'} onValueChange={setPeriod}>6개월</RadioChip>
          <RadioChip size="small" name="period" value="1y" checked={period === '1y'} onValueChange={setPeriod}>1년</RadioChip>
        </div>
        <p className="text-krds-body-xs text-krds-gray-60">선택 기간: {period}</p>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(N=(w=l.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var V,z,T;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '비활성',
  args: {
    label: '추천순',
    checked: false,
    disabled: true
  }
}`,...(T=(z=c.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};const Q=["Default","Checked","SortGroup","PeriodSelector","Disabled"];export{d as Checked,i as Default,c as Disabled,l as PeriodSelector,n as SortGroup,Q as __namedExportsOrder,M as default};
