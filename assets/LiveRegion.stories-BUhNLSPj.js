import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-BxXVWNx3.js";import{d as R}from"./reference-types-4ftiVeOu.js";import{L as j}from"./live-region-BFV6xFQp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DCADjnpI.js";const V=R([{library:"Cloudscape Design System",component:"Live region",url:"https://cloudscape.design/components/live-region/",usedFor:["behavior","api","accessibility"],relation:"compared",note:"포커스를 이동하지 않는 비동기 상태 공지와 중복 공지 억제 원칙을 참고합니다."},{library:"MDN Web Docs",component:"ARIA live regions",url:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions",usedFor:["behavior","accessibility"],relation:"compared"}]),_={title:"Atoms/Primitives/LiveRegion",component:j,tags:["autodocs","accessibility","ref:cloudscape","ref:mdn-web-components"],parameters:{references:V,docs:{description:{component:"포커스를 옮기지 않고 비동기 결과와 상태 변화를 보조 기술에 전달하는 비시각적 접근성 primitive입니다."}}},argTypes:{politeness:{control:"inline-radio",options:["polite","assertive"],table:{category:"Accessibility",defaultValue:{summary:"polite"}}},atomic:{control:"boolean",table:{category:"Accessibility",defaultValue:{summary:"true"}}},relevant:{control:"select",options:["additions","removals","text","all","additions text"],table:{category:"Accessibility",defaultValue:{summary:"additions text"}}},visuallyHidden:{control:"boolean",table:{category:"Preview",defaultValue:{summary:"true"}}},children:{control:"text",table:{category:"Content"}}},args:{politeness:"polite",atomic:!0,relevant:"additions text",visuallyHidden:!0,children:"저장이 완료되었습니다."}},r={},s={args:{visuallyHidden:!1,className:"rounded-md border border-dashed border-krds-gray-40 px-3 py-2"}},a={args:{politeness:"assertive",visuallyHidden:!1,children:"네트워크 연결이 끊어졌습니다.",className:"rounded-md border border-krds-danger-border bg-krds-danger-surface px-3 py-2"}};function C(){const[n,i]=c.useState(""),[w,H]=c.useState(0),D=()=>{const d=w+1;H(d),i("저장 중입니다."),window.setTimeout(()=>i(`${d}번째 저장이 완료되었습니다.`),600)};return e.jsxs("div",{className:"grid gap-3",children:[e.jsx("button",{type:"button",className:"w-fit rounded-md bg-krds-primary-60 px-4 py-2 text-white",onClick:D,children:"비동기 저장 실행"}),e.jsxs("p",{"aria-hidden":"true",className:"text-krds-body-sm text-krds-gray-70",children:["시각적 상태: ",n||"대기 중"]}),e.jsx(j,{children:n})]})}const t={render:()=>e.jsx(C,{}),parameters:{docs:{description:{story:"포커스를 버튼에 유지한 채 저장 시작과 완료 상태를 순서대로 공지합니다."}}}},o={args:{atomic:!1,relevant:"text",visuallyHidden:!1,children:e.jsxs(e.Fragment,{children:["업로드 진행률 ",e.jsx("strong",{children:"75%"})]}),className:"rounded-md bg-krds-gray-10 px-3 py-2"}};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    visuallyHidden: false,
    className: 'rounded-md border border-dashed border-krds-gray-40 px-3 py-2'
  }
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,v,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    politeness: 'assertive',
    visuallyHidden: false,
    children: '네트워크 연결이 끊어졌습니다.',
    className: 'rounded-md border border-krds-danger-border bg-krds-danger-surface px-3 py-2'
  }
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,h,A;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <AsyncStatusDemo />,
  parameters: {
    docs: {
      description: {
        story: '포커스를 버튼에 유지한 채 저장 시작과 완료 상태를 순서대로 공지합니다.'
      }
    }
  }
}`,...(A=(h=t.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var k,N,S;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    atomic: false,
    relevant: 'text',
    visuallyHidden: false,
    children: <>
        업로드 진행률 <strong>75%</strong>
      </>,
    className: 'rounded-md bg-krds-gray-10 px-3 py-2'
  }
}`,...(S=(N=o.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const I=["Default","VisiblePreview","Assertive","AsyncUpdates","NonAtomic"];export{a as Assertive,t as AsyncUpdates,r as Default,o as NonAtomic,s as VisiblePreview,I as __namedExportsOrder,_ as default};
