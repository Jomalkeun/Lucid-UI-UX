import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as n}from"./button-BRuq28Bc.js";import{B}from"./ButtonGroup-5ZHsEam2.js";import{d as y}from"./reference-types-CC3VHbJD.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CSKKChMh.js";import"./index-CkIaN0ex.js";import"./utils-DCADjnpI.js";import"./loader-circle-Db56uVXG.js";import"./createLucideIcon-Ct87QT5c.js";const h=y([{library:"U.S. Web Design System",component:"Button group",url:"https://designsystem.digital.gov/components/button-group/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"Bootstrap",component:"Button group",url:"https://getbootstrap.com/docs/5.3/components/button-group/",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"Button Group",url:"https://flowbite.com/docs/components/button-group/",usedFor:["comparison"],relation:"compared"},{library:"Mantine UI",component:"Split button",url:"https://ui.mantine.dev/category/buttons/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."},{library:"Quasar",component:"Button Group",url:"https://quasar.dev/vue-components/button-group",usedFor:["comparison"],relation:"compared"}]),C={title:"Molecules/Navigation/ButtonGroup",component:B,tags:["autodocs","krds-extended","ref:shadcn-ui","ref:flowbite","ref:mui","ref:bootstrap","ref:quasar","ref:mantine-ui","ref:uswds"],argTypes:{value:{control:"text"},options:{control:"object"}},args:{name:"view-switch",value:"card",options:[{value:"card",label:"카드"},{value:"list",label:"리스트"},{value:"gallery",label:"갤러리"}]},parameters:{references:h,layout:"centered"}},a={name:"보기 전환",args:{defaultValue:"card",options:[{value:"card",label:"카드"},{value:"list",label:"리스트"},{value:"gallery",label:"갤러리"}]}},r={name:"상태 필터",args:{defaultValue:"all",options:[{value:"all",label:"전체"},{value:"active",label:"노출 중"},{value:"reserved",label:"예약"},{value:"ended",label:"종료",disabled:!0}]}},t={name:"세로 방향",args:{name:"정렬",orientation:"vertical",size:"small",defaultValue:"recent",options:[{value:"recent",label:"최신순"},{value:"popular",label:"인기순"},{value:"price",label:"가격순"}]}},o={name:"자식 조합",render:()=>e.jsxs(B,{"aria-label":"문서 작업",children:[e.jsx(n,{size:"small",children:"저장"}),e.jsx(n,{size:"small",variant:"secondary",children:"미리 보기"}),e.jsx(n,{size:"small",variant:"danger",children:"삭제"})]})};var l,s,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '보기 전환',
  args: {
    defaultValue: 'card',
    options: [{
      value: 'card',
      label: '카드'
    }, {
      value: 'list',
      label: '리스트'
    }, {
      value: 'gallery',
      label: '갤러리'
    }]
  }
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var u,c,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '상태 필터',
  args: {
    defaultValue: 'all',
    options: [{
      value: 'all',
      label: '전체'
    }, {
      value: 'active',
      label: '노출 중'
    }, {
      value: 'reserved',
      label: '예약'
    }, {
      value: 'ended',
      label: '종료',
      disabled: true
    }]
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,d,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '세로 방향',
  args: {
    name: '정렬',
    orientation: 'vertical',
    size: 'small',
    defaultValue: 'recent',
    options: [{
      value: 'recent',
      label: '최신순'
    }, {
      value: 'popular',
      label: '인기순'
    }, {
      value: 'price',
      label: '가격순'
    }]
  }
}`,...(b=(d=t.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var v,g,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '자식 조합',
  render: () => <ButtonGroup aria-label="문서 작업">
      <Button size="small">저장</Button>
      <Button size="small" variant="secondary">
        미리 보기
      </Button>
      <Button size="small" variant="danger">
        삭제
      </Button>
    </ButtonGroup>
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const E=["ViewSwitch","StatusFilter","Vertical","Composition"];export{o as Composition,r as StatusFilter,t as Vertical,a as ViewSwitch,E as __namedExportsOrder,C as default};
