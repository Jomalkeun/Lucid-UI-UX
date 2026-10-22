import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{within as I,expect as m,userEvent as k,fn as D}from"./index-DH-M5T-F.js";import{d as O,c as t}from"./reference-types-CC3VHbJD.js";import{E as H}from"./EmptyState-C0Hm7Ph2.js";import{C as M}from"./circle-alert-APhB8yGJ.js";import{S as w}from"./search-BiWmW4bk.js";import{I as V}from"./inbox-Prp3UTLK.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DCADjnpI.js";import"./button-BRuq28Bc.js";import"./index-CSKKChMh.js";import"./index-CkIaN0ex.js";import"./loader-circle-Db56uVXG.js";import"./createLucideIcon-Ct87QT5c.js";const _=O([t("shadcn/ui","Empty","https://ui.shadcn.com/docs/components/base/empty"),t("Ant Design","Empty","https://ant.design/components/empty/?amp=1"),t("Atlassian Design System","Empty state","https://atlassian.design/components/empty-state"),t("IBM Carbon Design System","Empty states","https://carbondesignsystem.com/patterns/empty-states-pattern/")]),ee={title:"Molecules/Feedback/EmptyState",component:H,tags:["autodocs","feedback","ref:shadcn-ui","ref:ant-design","ref:atlassian-design-system","ref:ibm-carbon-design-system"],parameters:{references:_},args:{title:"등록된 콘텐츠가 없습니다",description:"새 콘텐츠를 등록해 시작하세요.",icon:e.jsx(V,{}),actionLabel:"콘텐츠 등록",onAction:D()}},a={play:async({canvasElement:j,args:N})=>{const i=I(j);await m(i.getByRole("heading",{name:"등록된 콘텐츠가 없습니다"})).toBeVisible(),await k.click(i.getByRole("button",{name:"콘텐츠 등록"})),await m(N.onAction).toHaveBeenCalledOnce()}},s={args:{title:"검색 결과가 없습니다",description:"검색어나 필터 조건을 바꿔 보세요.",icon:e.jsx(w,{}),actionLabel:"필터 초기화"}},n={args:{title:"불러오지 못했습니다",description:"잠시 후 다시 시도해 주세요.",icon:e.jsx(M,{}),actionLabel:"다시 시도",role:"alert"}},r={args:{density:"compact",actionLabel:void 0}},o={name:"인라인 검색 결과 없음",args:{title:"검색 결과가 없습니다",description:"검색어 또는 필터를 변경해 보세요.",icon:e.jsx(w,{}),align:"start",density:"compact",actionLabel:"필터 초기화"}},c={args:{actionSlot:e.jsx("a",{href:"#guide",className:"underline",children:"사용 안내 보기"})}};var p,l,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('heading', {
      name: '등록된 콘텐츠가 없습니다'
    })).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: '콘텐츠 등록'
    }));
    await expect(args.onAction).toHaveBeenCalledOnce();
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: '검색 결과가 없습니다',
    description: '검색어나 필터 조건을 바꿔 보세요.',
    icon: <Search />,
    actionLabel: '필터 초기화'
  }
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,b,E;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: '불러오지 못했습니다',
    description: '잠시 후 다시 시도해 주세요.',
    icon: <AlertCircle />,
    actionLabel: '다시 시도',
    role: 'alert'
  }
}`,...(E=(b=n.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var h,S,x;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    density: 'compact',
    actionLabel: undefined
  }
}`,...(x=(S=r.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var v,L,R;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '인라인 검색 결과 없음',
  args: {
    title: '검색 결과가 없습니다',
    description: '검색어 또는 필터를 변경해 보세요.',
    icon: <Search />,
    align: 'start',
    density: 'compact',
    actionLabel: '필터 초기화'
  }
}`,...(R=(L=o.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var C,A,B;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    actionSlot: <a href="#guide" className="underline">
        사용 안내 보기
      </a>
  }
}`,...(B=(A=c.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const te=["EmptyList","NoResults","Error","Compact","InlineNoResults","CustomAction"];export{r as Compact,c as CustomAction,a as EmptyList,n as Error,o as InlineNoResults,s as NoResults,te as __namedExportsOrder,ee as default};
