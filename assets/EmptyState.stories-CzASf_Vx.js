import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{within as w,expect as c,userEvent as B,fn as A}from"./index-DH-M5T-F.js";import{E as R}from"./EmptyState-BhOSi8Ik.js";import{C as j}from"./circle-alert-APhB8yGJ.js";import{S as N}from"./search-BiWmW4bk.js";import{I as k}from"./inbox-Prp3UTLK.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DCADjnpI.js";import"./button-B_kt0lNs.js";import"./index-DtBajwEi.js";import"./index-CkIaN0ex.js";import"./loader-circle-Db56uVXG.js";import"./createLucideIcon-Ct87QT5c.js";const Q={title:"Molecules/Feedback/EmptyState",component:R,tags:["autodocs"],args:{title:"등록된 콘텐츠가 없습니다",description:"새 콘텐츠를 등록해 시작하세요.",icon:n.jsx(k,{}),actionLabel:"콘텐츠 등록",onAction:A()}},e={play:async({canvasElement:C,args:L})=>{const s=w(C);await c(s.getByRole("heading",{name:"등록된 콘텐츠가 없습니다"})).toBeVisible(),await B.click(s.getByRole("button",{name:"콘텐츠 등록"})),await c(L.onAction).toHaveBeenCalledOnce()}},a={args:{title:"검색 결과가 없습니다",description:"검색어나 필터 조건을 바꿔 보세요.",icon:n.jsx(N,{}),actionLabel:"필터 초기화"}},t={args:{title:"불러오지 못했습니다",description:"잠시 후 다시 시도해 주세요.",icon:n.jsx(j,{}),actionLabel:"다시 시도",role:"alert"}},o={args:{density:"compact",actionLabel:void 0}},r={args:{actionSlot:n.jsx("a",{href:"#guide",className:"underline",children:"사용 안내 보기"})}};var i,m,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,d,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: '검색 결과가 없습니다',
    description: '검색어나 필터 조건을 바꿔 보세요.',
    icon: <Search />,
    actionLabel: '필터 초기화'
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,y,E;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: '불러오지 못했습니다',
    description: '잠시 후 다시 시도해 주세요.',
    icon: <AlertCircle />,
    actionLabel: '다시 시도',
    role: 'alert'
  }
}`,...(E=(y=t.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var b,x,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    density: 'compact',
    actionLabel: undefined
  }
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var v,S,h;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    actionSlot: <a href="#guide" className="underline">사용 안내 보기</a>
  }
}`,...(h=(S=r.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const T=["EmptyList","NoResults","Error","Compact","CustomAction"];export{o as Compact,r as CustomAction,e as EmptyList,t as Error,a as NoResults,T as __namedExportsOrder,Q as default};
