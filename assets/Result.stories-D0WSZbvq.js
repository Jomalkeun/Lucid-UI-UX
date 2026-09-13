import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{d as x}from"./reference-types-4ftiVeOu.js";import{R as v}from"./Result-ChnA7sLq.js";import"./ResultActions-tHXV7Kte.js";const h=x([{library:"Mantine UI",component:"Error pages",url:"https://ui.mantine.dev/category/error-pages/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."},{library:"Ant Design",component:"Result",url:"https://ant.design/components/result/",usedFor:["comparison"],relation:"compared"}]),C={title:"Templates/Content/Result",component:v,tags:["autodocs","ref:ant-design","ref:mantine-ui"],parameters:{references:h,layout:"centered",docs:{description:{component:`
## Result

작업 완료, 성공, 실패, 오류 등의 결과 상태를 전체 화면으로 표시하는 컴포넌트입니다.
아이콘, 제목, 설명, CTA 버튼으로 구성되며 결제 완료, 404, 서버 오류 페이지 등에 사용합니다.
        `}}},argTypes:{status:{control:"select",options:["success","info","warning","error","404","403","500"],table:{category:"State"}},title:{control:"text",table:{category:"Content"}},subtitle:{control:"text",table:{category:"Content"}},size:{control:"select",options:["sm","md","lg"],table:{category:"Appearance"}},align:{control:"inline-radio",options:["left","center"],table:{category:"Layout"}},bordered:{control:"boolean",table:{category:"Appearance"}},fullHeight:{control:"boolean",table:{category:"Layout"}}},args:{status:"success",title:"작업이 완료되었습니다",subtitle:"요청하신 처리가 정상적으로 완료되었습니다.",size:"md",align:"center",bordered:!0,fullHeight:!1,actions:[{label:"목록으로",variant:"secondary"},{label:"확인",variant:"primary"}]}},e={name:"기본"},t={name:"상태 비교",render:()=>n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(280px, 1fr))",gap:16,width:760},children:["success","info","warning","error","404","500"].map(s=>n.jsx(v,{status:s,title:`${s} 상태`,subtitle:"상태별 아이콘과 색상 톤을 비교합니다.",size:"sm",bordered:!0},s))}),parameters:{controls:{disable:!0}}},r={name:"빈 상태",args:{status:"info",title:"검색 결과가 없습니다",subtitle:"필터 조건을 줄이거나 다른 검색어를 입력해 보세요.",actions:[{label:"필터 초기화",variant:"primary"}]}},a={name:"오류 페이지",args:{status:"500",title:"일시적인 오류가 발생했습니다",subtitle:"잠시 후 다시 시도하거나 계속 문제가 발생하면 관리자에게 문의하세요.",size:"lg",fullHeight:!0,actions:[{label:"새로고침",variant:"primary"},{label:"홈으로",variant:"ghost"}]}};var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '기본'
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '상태 비교',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(280px, 1fr))',
    gap: 16,
    width: 760
  }}>
      {(['success', 'info', 'warning', 'error', '404', '500'] as const).map(status => <Result key={status} status={status} title={\`\${status} 상태\`} subtitle="상태별 아이콘과 색상 톤을 비교합니다." size="sm" bordered />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,d,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '빈 상태',
  args: {
    status: 'info',
    title: '검색 결과가 없습니다',
    subtitle: '필터 조건을 줄이거나 다른 검색어를 입력해 보세요.',
    actions: [{
      label: '필터 초기화',
      variant: 'primary'
    }]
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var b,y,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '오류 페이지',
  args: {
    status: '500',
    title: '일시적인 오류가 발생했습니다',
    subtitle: '잠시 후 다시 시도하거나 계속 문제가 발생하면 관리자에게 문의하세요.',
    size: 'lg',
    fullHeight: true,
    actions: [{
      label: '새로고침',
      variant: 'primary'
    }, {
      label: '홈으로',
      variant: 'ghost'
    }]
  }
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const w=["Default","Statuses","EmptyState","ErrorPage"];export{e as Default,r as EmptyState,a as ErrorPage,t as Statuses,w as __namedExportsOrder,C as default};
