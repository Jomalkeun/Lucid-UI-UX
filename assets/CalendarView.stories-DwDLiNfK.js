import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-BxXVWNx3.js";import{c as b}from"./utils-DCADjnpI.js";import{C as U}from"./chevron-left-CMQDJVKp.js";import{C as W}from"./chevron-right-DtG4w6Mo.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-Ct87QT5c.js";const X=["일","월","화","수","목","금","토"];function g(t){return new Date(t.getFullYear(),t.getMonth(),1)}function M(t,r){return new Date(t.getFullYear(),t.getMonth()+r,1)}function C(t){const r=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0");return`${r}-${n}-${o}`}function Z(t){const r=g(t),n=new Date(r);return n.setDate(r.getDate()-r.getDay()),Array.from({length:42},(o,h)=>{const d=new Date(n);return d.setDate(n.getDate()+h),d})}function v({className:t,month:r,defaultMonth:n=new Date,events:o=[],today:h=new Date,locale:d="ko-KR",onMonthChange:x,onSelectDate:f,...O}){const w=r!==void 0,[A,Y]=y.useState(g(n)),l=g(w?r:A),Q=Z(l),B=C(h),G=y.useMemo(()=>o.reduce((a,s)=>(a[s.date]=[...a[s.date]??[],s],a),{}),[o]),N=a=>{const s=g(a);w||Y(s),x==null||x(s)},H=new Intl.DateTimeFormat(d,{year:"numeric",month:"long"}).format(l);return e.jsxs("div",{className:b("overflow-hidden rounded-md border border-krds-gray-30 bg-white text-krds-gray-90",t),...O,children:[e.jsxs("header",{className:"flex items-center justify-between gap-3 border-b border-krds-gray-20 px-4 py-3",children:[e.jsx("button",{type:"button","aria-label":"이전 달",onClick:()=>N(M(l,-1)),className:"inline-flex size-8 items-center justify-center rounded-sm text-krds-gray-60 hover:bg-krds-gray-5 hover:text-krds-gray-90",children:e.jsx(U,{"aria-hidden":"true",className:"size-4"})}),e.jsx("h2",{className:"text-base font-semibold",children:H}),e.jsx("button",{type:"button","aria-label":"다음 달",onClick:()=>N(M(l,1)),className:"inline-flex size-8 items-center justify-center rounded-sm text-krds-gray-60 hover:bg-krds-gray-5 hover:text-krds-gray-90",children:e.jsx(W,{"aria-hidden":"true",className:"size-4"})})]}),e.jsx("div",{className:"grid grid-cols-7 border-b border-krds-gray-20 bg-krds-gray-5",children:X.map(a=>e.jsx("div",{className:"px-2 py-2 text-center text-xs font-semibold text-krds-gray-60",children:a},a))}),e.jsx("div",{className:"grid grid-cols-7",children:Q.map(a=>{const s=C(a),J=a.getMonth()===l.getMonth(),j=s===B,i=G[s]??[];return e.jsxs("button",{type:"button","aria-label":new Intl.DateTimeFormat(d,{dateStyle:"long"}).format(a),onClick:()=>f==null?void 0:f(a),className:b("min-h-24 border-b border-r border-krds-gray-20 p-2 text-left align-top transition hover:bg-krds-gray-5",!J&&"bg-krds-gray-5/60 text-krds-gray-40",j&&"bg-krds-primary-5"),children:[e.jsx("span",{className:b("inline-flex size-6 items-center justify-center rounded-full text-xs font-semibold",j?"bg-krds-primary-50 text-white":"text-krds-gray-70"),children:a.getDate()}),i.length>0?e.jsxs("span",{className:"mt-2 grid gap-1",children:[i.slice(0,2).map((D,P)=>e.jsx("span",{className:"truncate rounded-sm px-1.5 py-0.5 text-xs font-medium text-white",style:{backgroundColor:D.color??"#256ef4"},children:D.title},D.id??`${s}-${P}`)),i.length>2?e.jsxs("span",{className:"text-xs text-krds-gray-50",children:["+",i.length-2,"개"]}):null]}):null]},s)})})]})}v.__docgenInfo={description:"",methods:[],displayName:"CalendarView",props:{month:{required:!1,tsType:{name:"Date"},description:""},defaultMonth:{required:!1,tsType:{name:"Date"},description:"",defaultValue:{value:"new Date()",computed:!1}},events:{required:!1,tsType:{name:"Array",elements:[{name:"CalendarEvent"}],raw:"CalendarEvent[]"},description:"",defaultValue:{value:"[]",computed:!1}},today:{required:!1,tsType:{name:"Date"},description:"",defaultValue:{value:"new Date()",computed:!1}},locale:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'ko-KR'",computed:!1}},onMonthChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(month: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"month"}],return:{name:"void"}}},description:""},onSelectDate:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const L=new Date(2026,6,1),k=[{id:"review",date:"2026-07-03",title:"디자인 리뷰",color:"#256ef4"},{id:"sprint",date:"2026-07-07",title:"스프린트 시작",color:"#008a1e"},{id:"deploy",date:"2026-07-15",title:"배포 예정",color:"#b75c00"},{id:"meeting",date:"2026-07-20",title:"전체 회의",color:"#16408d"},{id:"qa",date:"2026-07-25",title:"디자인 QA",color:"#d50136"}],de={title:"Organisms/Data/CalendarView",component:v,tags:["autodocs","data"],parameters:{layout:"centered",docs:{description:{component:"월간 달력 형태로 일정을 표시하고 날짜 선택 및 월 이동을 지원하는 data organism입니다."}}},argTypes:{locale:{control:"text",table:{category:"Locale"}}},args:{defaultMonth:L,today:new Date(2026,6,10),events:k,locale:"ko-KR",className:"w-[760px]"}},c={name:"기본"},m={name:"이벤트 없음",args:{events:[]}},u={name:"제어 월",render:()=>{const[t,r]=y.useState(L),[n,o]=y.useState(null);return e.jsxs("div",{className:"grid gap-3",children:[e.jsx(v,{className:"w-[760px]",month:t,today:new Date(2026,6,10),events:k,onMonthChange:r,onSelectDate:o}),e.jsxs("p",{className:"text-sm text-krds-gray-60",children:["선택한 날짜: ",n?n.toLocaleDateString("ko-KR"):"없음"]})]})},parameters:{controls:{disable:!0}}},p={name:"많은 이벤트",args:{events:[...k,{id:"extra-1",date:"2026-07-15",title:"검수 회의",color:"#555555"},{id:"extra-2",date:"2026-07-15",title:"공지 발행",color:"#008a1e"}]}};var S,T,E;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '기본'
}`,...(E=(T=c.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var q,K,V;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '이벤트 없음',
  args: {
    events: []
  }
}`,...(V=(K=m.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var R,z,F;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '제어 월',
  render: () => {
    const [month, setMonth] = useState(baseMonth);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    return <div className="grid gap-3">
        <CalendarView className="w-[760px]" month={month} today={new Date(2026, 6, 10)} events={events} onMonthChange={setMonth} onSelectDate={setSelectedDate} />
        <p className="text-sm text-krds-gray-60">
          선택한 날짜: {selectedDate ? selectedDate.toLocaleDateString('ko-KR') : '없음'}
        </p>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(F=(z=u.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var _,$,I;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: '많은 이벤트',
  args: {
    events: [...events, {
      id: 'extra-1',
      date: '2026-07-15',
      title: '검수 회의',
      color: '#555555'
    }, {
      id: 'extra-2',
      date: '2026-07-15',
      title: '공지 발행',
      color: '#008a1e'
    }]
  }
}`,...(I=($=p.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};const le=["Default","NoEvents","ControlledMonth","DenseEvents"];export{u as ControlledMonth,c as Default,p as DenseEvents,m as NoEvents,le as __namedExportsOrder,de as default};
