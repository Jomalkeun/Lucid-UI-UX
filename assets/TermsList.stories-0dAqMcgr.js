import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as T}from"./utils-DCADjnpI.js";import{E as v}from"./external-link-tAhKjUzZ.js";import"./createLucideIcon-Ct87QT5c.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";const w=[{id:"purpose",heading:"제1조 (목적)",body:"서비스 이용 조건과 절차, 권리와 의무를 명확히 안내합니다."},{id:"scope",heading:"제2조 (적용 범위)",body:"본 약관은 플랫폼에서 제공하는 모든 기능과 제휴 서비스에 적용됩니다."},{id:"responsibility",heading:"제3조 (책임 범위)",body:"이용 중 발생하는 변경, 중단, 제한 사항의 처리 기준을 정의합니다."}];function x({className:f,title:n="서비스 이용약관",description:o,articles:h=w,externalLink:d,externalLabel:N="전문 보기",ordered:k=!0,...L}){const j=k?"ol":"ul";return e.jsxs("section",{className:T("rounded-md border border-krds-gray-30 bg-white p-5",f),...L,children:[e.jsxs("header",{className:"flex flex-wrap items-start justify-between gap-3 border-b border-krds-gray-20 pb-4",children:[e.jsxs("div",{className:"min-w-0",children:[n?e.jsx("h3",{className:"text-base font-semibold text-krds-gray-90",children:n}):null,o?e.jsx("p",{className:"mt-1 text-sm leading-6 text-krds-gray-60",children:o}):null]}),d?e.jsxs("a",{href:d,className:"inline-flex shrink-0 items-center gap-1 rounded-md border border-krds-gray-30 px-3 py-1.5 text-sm font-medium text-krds-gray-70 transition hover:bg-krds-gray-5",children:[N,e.jsx(v,{"aria-hidden":"true",className:"size-3.5"})]}):null]}),e.jsx(j,{className:"mt-4 space-y-4",children:h.map((s,R)=>e.jsxs("li",{className:"rounded-md bg-krds-gray-5 p-4",children:[e.jsx("h4",{className:"text-sm font-semibold text-krds-gray-90",children:s.heading}),e.jsx("p",{className:"mt-2 text-sm leading-6 text-krds-gray-70",children:s.body})]},s.id??R))})]})}x.__docgenInfo={description:"",methods:[],displayName:"TermsList",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'서비스 이용약관'",computed:!1}},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},articles:{required:!1,tsType:{name:"Array",elements:[{name:"TermsArticle"}],raw:"TermsArticle[]"},description:"",defaultValue:{value:`[
  { id: 'purpose', heading: '제1조 (목적)', body: '서비스 이용 조건과 절차, 권리와 의무를 명확히 안내합니다.' },
  { id: 'scope', heading: '제2조 (적용 범위)', body: '본 약관은 플랫폼에서 제공하는 모든 기능과 제휴 서비스에 적용됩니다.' },
  { id: 'responsibility', heading: '제3조 (책임 범위)', body: '이용 중 발생하는 변경, 중단, 제한 사항의 처리 기준을 정의합니다.' },
]`,computed:!1}},externalLink:{required:!1,tsType:{name:"string"},description:""},externalLabel:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'전문 보기'",computed:!1}},ordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}},composes:["Omit"]};const A=[{id:"purpose",heading:"제1조 (목적)",body:"통합 플랫폼에서 제휴 서비스 이용 시 적용되는 조건을 규정합니다."},{id:"provider",heading:"제2조 (제공 주체)",body:"제휴 서비스의 처리 범위와 제공 주체를 진입 전 명확히 안내합니다."},{id:"responsibility",heading:"제3조 (책임 범위)",body:"외부 서비스 이용 중 발생한 사항의 처리 기준을 정의합니다."}],S={title:"Organisms/Data/TermsList",component:x,tags:["autodocs","data"],parameters:{layout:"centered",docs:{description:{component:"약관, 고지, 정책 조항을 읽기 쉬운 목록으로 표시하는 데이터 오거나이즘입니다."}}},argTypes:{title:{control:"text",table:{category:"Content"}},description:{control:"text",table:{category:"Content"}},articles:{control:"object",table:{category:"Data"}},externalLink:{control:"text",table:{category:"Action"}},externalLabel:{control:"text",table:{category:"Action"}},ordered:{control:"boolean",table:{category:"Appearance"}}},args:{title:"외부 서비스 이용 안내",description:"외부 제휴 서비스로 이동하기 전에 확인해야 하는 주요 조항입니다.",articles:A,externalLink:"#",externalLabel:"전체 약관 보기",ordered:!0,className:"w-[620px]"}},r={name:"기본"},t={name:"외부 링크 없음",args:{title:"서비스 이용약관",externalLink:void 0}},a={name:"고지 목록",args:{title:"운영 정책 고지",description:"개별 조항 번호 없이 확인 사항을 나열합니다.",ordered:!1,externalLink:void 0,articles:[{id:"notice-1",heading:"개인정보 처리 안내",body:"수집 항목과 보관 기간은 서비스 화면에서 별도로 고지합니다."},{id:"notice-2",heading:"서비스 변경 안내",body:"중요 기능 변경 시 사전 공지 후 적용합니다."},{id:"notice-3",heading:"문의 채널 안내",body:"이용 중 문의는 고객센터 또는 관리자 문의 채널을 통해 접수합니다."}]}};var i,c,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '기본'
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '외부 링크 없음',
  args: {
    title: '서비스 이용약관',
    externalLink: undefined
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,y,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '고지 목록',
  args: {
    title: '운영 정책 고지',
    description: '개별 조항 번호 없이 확인 사항을 나열합니다.',
    ordered: false,
    externalLink: undefined,
    articles: [{
      id: 'notice-1',
      heading: '개인정보 처리 안내',
      body: '수집 항목과 보관 기간은 서비스 화면에서 별도로 고지합니다.'
    }, {
      id: 'notice-2',
      heading: '서비스 변경 안내',
      body: '중요 기능 변경 시 사전 공지 후 적용합니다.'
    }, {
      id: 'notice-3',
      heading: '문의 채널 안내',
      body: '이용 중 문의는 고객센터 또는 관리자 문의 채널을 통해 접수합니다.'
    }]
  }
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const C=["Default","NoExternalLink","UnorderedNotice"];export{r as Default,t as NoExternalLink,a as UnorderedNotice,C as __namedExportsOrder,S as default};
