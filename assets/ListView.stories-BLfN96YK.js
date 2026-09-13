import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as L}from"./index-BxXVWNx3.js";import{d as N}from"./reference-types-4ftiVeOu.js";import{L as I}from"./ListView-B7MYY0g0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DCADjnpI.js";import"./chevron-right-DtG4w6Mo.js";import"./createLucideIcon-Ct87QT5c.js";const o=[{id:"summer-data",title:"여름 데이터 선물",description:"옵션1 홈 배너와 알림톡에 노출되는 캠페인입니다.",meta:"옵션1 · 06.10~06.30 · 클릭 3.4%",status:"success",statusLabel:"노출중"},{id:"coupon",title:"리필 쿠폰 배너",description:"옵션2 쿠폰 영역 예약 콘텐츠입니다.",meta:"옵션2 · 예약 · 06.18 시작",status:"primary",statusLabel:"예약"},{id:"subscription",title:"구독 프로모션",description:"종료된 옵션3 프로모션 아카이브 항목입니다.",meta:"옵션3 · 종료 · 06.30 만료",status:"gray",statusLabel:"종료"}],v=N([{library:"U.S. Web Design System",component:"Collection",url:"https://designsystem.digital.gov/components/collection/",usedFor:["design","behavior","accessibility"],relation:"compared"}]),O={title:"Organisms/Data/ListView",component:I,tags:["autodocs","data","ref:uswds"],parameters:{references:v,layout:"centered",docs:{description:{component:"콘텐츠나 업무 항목을 제목, 설명, 메타 정보, 상태와 함께 세로 목록으로 표시합니다."}}},argTypes:{selectable:{control:"boolean",table:{category:"Behavior"}},selectedId:{control:"text",table:{category:"State"}},emptyText:{control:"text",table:{category:"Content"}}},args:{items:o,selectable:!1,emptyText:"표시할 항목이 없습니다.",className:"w-[520px]"}},e={name:"기본"},t={name:"선택 상태",render:()=>{const[c,f]=L.useState("coupon");return r.jsxs("div",{className:"grid gap-3",children:[r.jsx(I,{className:"w-[520px]",items:o,selectable:!0,selectedId:c,onItemClick:w=>f(w.id)}),r.jsxs("p",{className:"text-sm text-krds-gray-60",children:["선택된 항목: ",c]})]})},parameters:{controls:{disable:!0}}},s={name:"단일 항목",args:{items:[o[0]]}},a={name:"빈 상태",args:{items:[]}};var m,n,i;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '기본'
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var l,d,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '선택 상태',
  render: () => {
    const [selectedId, setSelectedId] = useState<string | number>('coupon');
    return <div className="grid gap-3">
        <ListView className="w-[520px]" items={campaignItems} selectable selectedId={selectedId} onItemClick={item => setSelectedId(item.id)} />
        <p className="text-sm text-krds-gray-60">선택된 항목: {selectedId}</p>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,g,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '단일 항목',
  args: {
    items: [campaignItems[0]]
  }
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,y,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '빈 상태',
  args: {
    items: []
  }
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const R=["Default","Selectable","Single","Empty"];export{e as Default,a as Empty,t as Selectable,s as Single,R as __namedExportsOrder,O as default};
