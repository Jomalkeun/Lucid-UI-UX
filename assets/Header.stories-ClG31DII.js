import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as P}from"./utils-DCADjnpI.js";import{d as U}from"./reference-types-4ftiVeOu.js";function x({logoHref:s="/",logoAltText:o="홈으로 이동",showMasthead:l=!0,showSearch:c=!0,isLoggedIn:p=!1,mobileMenuTriggerPortalId:i,desktopMenuPortalId:d,children:h,className:u,...m}){return e.jsxs("div",{className:P("w-full",u),...m,children:[l&&e.jsx("div",{className:"w-full bg-krds-primary-70 text-krds-white",children:e.jsxs("div",{className:"max-w-screen-xl mx-auto px-4 h-8 flex items-center justify-between",children:[e.jsx("span",{className:"text-krds-body-xs",children:"대한민국 정부"}),e.jsxs("div",{className:"flex items-center gap-3 text-krds-body-xs",children:[e.jsx("a",{href:"#",className:"hover:underline",children:"사이트맵"}),e.jsx("span",{className:"text-krds-primary-40",children:"|"}),e.jsx("a",{href:"#",className:"hover:underline",children:"바로가기"})]})]})}),e.jsxs("header",{className:"w-full bg-krds-gray-0 border-b border-krds-gray-20 shadow-sm",children:[e.jsxs("div",{className:"max-w-screen-xl mx-auto px-4",children:[e.jsxs("div",{className:"flex justify-end items-center h-9 border-b border-krds-gray-10 gap-3",children:[e.jsxs("button",{type:"button",className:"text-krds-body-xs text-krds-gray-50 hover:text-krds-gray-90 transition-colors","aria-label":"화면 크기 조절",children:["가",e.jsx("span",{className:"text-krds-primary-50 font-bold",children:"가"}),"가"]}),e.jsx("span",{className:"text-krds-gray-20",children:"|"}),e.jsx("button",{type:"button",className:"text-krds-body-xs text-krds-gray-50 hover:text-krds-gray-90 transition-colors",children:"사용자 지원"})]}),e.jsxs("div",{className:"flex items-center justify-between h-16",children:[e.jsxs("a",{href:s,className:"flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-krds-primary-50 rounded","aria-label":o,children:[e.jsx("div",{className:"w-8 h-8 bg-krds-primary-50 rounded flex items-center justify-center","aria-hidden":"true",children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"})})}),e.jsx("span",{className:"text-krds-title-sm font-bold text-krds-gray-90",children:"다룸 채널"})]}),d&&e.jsx("div",{id:d,className:"flex-1 flex justify-center"}),e.jsxs("nav",{"aria-label":"주 메뉴",className:"flex items-center gap-2",children:[c&&e.jsx("button",{type:"button",className:"p-2 rounded text-krds-gray-50 hover:text-krds-gray-90 hover:bg-krds-gray-10 transition-colors","aria-label":"검색",children:e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})}),p?e.jsx("button",{type:"button",className:"px-3 py-1.5 rounded border border-krds-gray-30 text-krds-body-sm text-krds-gray-70 hover:bg-krds-gray-10 transition-colors",children:"로그아웃"}):e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:"px-3 py-1.5 rounded border border-krds-primary-50 text-krds-body-sm text-krds-primary-base hover:bg-krds-primary-5 transition-colors",children:"로그인"}),e.jsx("button",{type:"button",className:"px-3 py-1.5 rounded bg-krds-primary-50 text-krds-body-sm text-krds-white hover:bg-krds-primary-60 transition-colors",children:"회원가입"})]}),i&&e.jsx("div",{id:i})]})]})]}),h]})]})}x.__docgenInfo={description:"",methods:[],displayName:"Header",props:{logoHref:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'/'",computed:!1}},logoAltText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'홈으로 이동'",computed:!1}},showMasthead:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showSearch:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},isLoggedIn:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},mobileMenuTriggerPortalId:{required:!1,tsType:{name:"string"},description:""},desktopMenuPortalId:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const O=U([{library:"U.S. Web Design System",component:"Header",url:"https://designsystem.digital.gov/components/header/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"GOV.UK Design System",component:"Generic header",url:"https://design-system.service.gov.uk/components/header/",usedFor:["design","accessibility","comparison"],relation:"compared"},{library:"KRDS",component:"Header",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-header--docs",usedFor:["design","behavior","api"],relation:"adapted"},{library:"Bootstrap",component:"Navbar",url:"https://getbootstrap.com/docs/5.3/components/navbar/",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"Navbar",url:"https://flowbite.com/docs/components/navbar/",usedFor:["comparison"],relation:"compared"},{library:"daisyUI",component:"Navbar",url:"https://daisyui.com/components/navbar/",usedFor:["comparison"],relation:"compared"},{library:"Mantine UI",component:"Headers",url:"https://ui.mantine.dev/category/headers/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."},{library:"Quasar",component:"Layout Header and Footer",url:"https://quasar.dev/layout/header-and-footer",usedFor:["comparison"],relation:"compared"}]),E={title:"Organisms/Navigation/Header",component:x,tags:["autodocs","navigation","ref:krds","ref:daisy-ui","ref:flowbite","ref:vuetify","ref:mui","ref:bootstrap","ref:quasar","ref:mantine-ui","ref:govuk","ref:uswds"],parameters:{references:O,layout:"fullscreen",docs:{canvas:{height:"400px"},description:{component:`
## Header

**KRDS 2.0 표준 사이트 헤더** 컴포넌트입니다.
Masthead → Header → 유틸리티 + 브랜딩(내비게이션 포함) 구조로 구성됩니다.

---

### 구성 요소

| 컴포넌트 | 역할 |
|---|---|
| \`Masthead\` | 최상단 마스트헤드(정부 공통 영역) |
| \`Header\` | 헤더 컨테이너 (포털 ID 지정) |
| \`HeaderContainer\` | 내부 레이아웃 래퍼 |
| \`HeaderUtilities\` | 상단 유틸리티 버튼 영역 |
| \`HeaderUtility\` | 개별 유틸리티 항목 래퍼 |
| \`HeaderUtilityDropdown\` | 드롭다운 유틸리티 메뉴 |
| \`Resize\` | 화면 크기 조절 버튼 |
| \`HeaderBranding\` | 로고 영역 (\`logoHref\`, \`logoAltText\`) |
| \`HeaderNavi\` | 검색·로그인·회원가입 버튼 래퍼 (HeaderBranding 슬롯) |
| \`MainMenu\` | 데스크톱/모바일 메가 메뉴 (포털로 Header에 삽입) |

---

### 포털 연결 구조

\`Header\`와 \`MainMenu\`는 동일한 포털 ID 문자열로 연결됩니다.

\`\`\`html
<Header
  mobileMenuTriggerPortalId="krds-header-mobile-trigger"
  desktopMenuPortalId="krds-header-in"
/>
<MainMenu
  mobileTriggerPortalId="krds-header-mobile-trigger"
  desktopPortalId="krds-header-in"
/>
\`\`\`

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | \`<header>\` 랜드마크로 자동 선언됩니다. |
| ✅ | \`HeaderBranding\`의 홈 링크에 \`logoAltText\`가 aria-label로 제공됩니다. |
| ✅ | 내비게이션 영역은 \`<nav aria-label="주 메뉴">\`로 식별됩니다. |
        `}}},argTypes:{logoHref:{control:"text",table:{category:"Branding"}},logoAltText:{control:"text",table:{category:"Branding"}},showMasthead:{control:"boolean",table:{category:"Appearance"}},showSearch:{control:"boolean",table:{category:"Appearance"}},isLoggedIn:{control:"boolean",table:{category:"State"}}},args:{logoHref:"/",logoAltText:"다룸 채널 홈으로 이동",showMasthead:!0,showSearch:!0,isLoggedIn:!1},render:s=>e.jsx(x,{...s,children:s.children??s.label??s.text??void 0})},g={name:"기본 — 비로그인 (Default)",args:{isLoggedIn:!1},parameters:{docs:{canvas:{height:"400px"},description:{story:"**비로그인 상태**의 기본 헤더입니다. 로그인·회원가입 버튼이 표시됩니다."}}}},y={name:"마스트헤드 없음 (Without Masthead)",args:{showMasthead:!1},parameters:{docs:{canvas:{height:"400px"},description:{story:"**Masthead를 제외한** 헤더 단독 표시입니다."}}}},b={render:()=>{const s=({children:t,...n})=>e.jsx("div",{...n,children:t}),o=({children:t,...n})=>e.jsx("div",{...n,children:t}),l=({children:t,...n})=>e.jsx("div",{...n,children:t}),c=({children:t,...n})=>e.jsx("div",{...n,children:t}),p=({children:t,...n})=>e.jsx("div",{...n,children:t}),i=({children:t,...n})=>e.jsx("div",{...n,children:t}),d=({children:t,...n})=>e.jsx("div",{...n,children:t}),h=({children:t,...n})=>e.jsx("div",{...n,children:t}),u=({children:t,...n})=>e.jsx("div",{...n,children:t}),m=({children:t,...n})=>e.jsx("div",{...n,children:t}),v=({children:t,...n})=>e.jsx("div",{...n,children:t});return e.jsxs("div",{style:{minHeight:"400px"},children:[e.jsx(u,{}),e.jsx(x,{mobileMenuTriggerPortalId:"${PORTAL_MOBILE_TRIGGER}",desktopMenuPortalId:"${PORTAL_DESKTOP}",children:e.jsxs(o,{children:[e.jsxs(i,{children:[e.jsx(d,{children:e.jsx(m,{})}),e.jsxs(h,{label:"사용자 지원",children:[e.jsx(v,{children:"인증센터"}),e.jsx(v,{children:"도움말"})]})]}),e.jsx(s,{logoHref:"/",logoAltText:"다룸 채널 홈으로 이동",children:e.jsxs(l,{children:[e.jsx(p,{}),e.jsx(c,{})]})})]})})]})},name:"로그인 상태 (Logged In)",parameters:{docs:{canvas:{height:"400px"},description:{story:"**로그인 상태**의 헤더입니다. 로그인·회원가입 대신 로그아웃 버튼이 표시됩니다."}},controls:{disable:!0}}},H={render:()=>{const s=({children:r,...a})=>e.jsx("div",{...a,children:r}),o=({children:r,...a})=>e.jsx("div",{...a,children:r}),l=({children:r,...a})=>e.jsx("div",{...a,children:r}),c=({children:r,...a})=>e.jsx("div",{...a,children:r}),p=({children:r,...a})=>e.jsx("div",{...a,children:r}),i=({children:r,...a})=>e.jsx("div",{...a,children:r}),d=({children:r,...a})=>e.jsx("div",{...a,children:r}),h=({children:r,...a})=>e.jsx("div",{...a,children:r}),u=({children:r,...a})=>e.jsx("div",{...a,children:r}),m=({children:r,...a})=>e.jsx("div",{...a,children:r}),v=({children:r,...a})=>e.jsx("div",{...a,children:r}),t=({children:r,...a})=>e.jsx("div",{...a,children:r}),n=({children:r,...a})=>e.jsx("div",{...a,children:r});return e.jsxs("div",{style:{minHeight:"700px"},children:[e.jsx(m,{}),e.jsx(x,{mobileMenuTriggerPortalId:"${PORTAL_MOBILE_TRIGGER}",desktopMenuPortalId:"${PORTAL_DESKTOP}",children:e.jsxs(o,{children:[e.jsxs(d,{children:[e.jsx(h,{children:e.jsx(v,{})}),e.jsxs(u,{label:"사용자 지원",children:[e.jsx(t,{children:"인증센터"}),e.jsx(t,{children:"도움말"})]})]}),e.jsx(s,{logoHref:"/",logoAltText:"다룸 채널 홈으로 이동",children:e.jsxs(l,{children:[e.jsx(i,{}),e.jsx(c,{}),e.jsx(p,{})]})})]})}),e.jsx(n,{desktop:desktopMenu,mobile:mobileMenu,mobileTriggerPortalId:"${PORTAL_MOBILE_TRIGGER}",desktopPortalId:"${PORTAL_DESKTOP}"})]})},name:"MainMenu 통합 (With MainMenu)",parameters:{docs:{canvas:{height:"700px"},description:{story:"**MainMenu가 통합된** 전체 헤더 구성입니다. 데스크톱에서는 메가 드롭다운, 모바일에서는 풀스크린 슬라이드 메뉴가 동작합니다."}},controls:{disable:!0}}};var j,f,M;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '기본 — 비로그인 (Default)',
  args: {
    isLoggedIn: false
  } as any,
  parameters: {
    docs: {
      canvas: {
        height: '400px'
      },
      description: {
        story: '**비로그인 상태**의 기본 헤더입니다. 로그인·회원가입 버튼이 표시됩니다.'
      }
    }
  }
}`,...(M=(f=g.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var k,N,I;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '마스트헤드 없음 (Without Masthead)',
  args: {
    showMasthead: false
  } as any,
  parameters: {
    docs: {
      canvas: {
        height: '400px'
      },
      description: {
        story: '**Masthead를 제외한** 헤더 단독 표시입니다.'
      }
    }
  }
}`,...(I=(N=y.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var w,T,R;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const HeaderBranding = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HeaderContainer = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HeaderNavi = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HeaderNaviButtonLogout = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HeaderNaviButtonSearch = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HeaderUtilities = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HeaderUtility = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HeaderUtilityDropdown = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const Masthead = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const Resize = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const DropdownItem = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    return <div style={{
      minHeight: '400px'
    }}>
        <Masthead />
        <Header mobileMenuTriggerPortalId="\${PORTAL_MOBILE_TRIGGER}" desktopMenuPortalId="\${PORTAL_DESKTOP}">
          <HeaderContainer>
            <HeaderUtilities>
              <HeaderUtility>
                <Resize />
              </HeaderUtility>
              <HeaderUtilityDropdown label="사용자 지원">
                <DropdownItem>인증센터</DropdownItem>
                <DropdownItem>도움말</DropdownItem>
              </HeaderUtilityDropdown>
            </HeaderUtilities>
            <HeaderBranding logoHref="/" logoAltText="다룸 채널 홈으로 이동">
              <HeaderNavi>
                <HeaderNaviButtonSearch />
                <HeaderNaviButtonLogout />
              </HeaderNavi>
            </HeaderBranding>
          </HeaderContainer>
        </Header>
      </div>;
  },
  name: '로그인 상태 (Logged In)',
  parameters: {
    docs: {
      canvas: {
        height: '400px'
      },
      description: {
        story: '**로그인 상태**의 헤더입니다. 로그인·회원가입 대신 로그아웃 버튼이 표시됩니다.'
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(R=(T=b.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var L,B,D;H.parameters={...H.parameters,docs:{...(L=H.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const HeaderBranding = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HeaderContainer = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HeaderNavi = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HeaderNaviButtonLogin = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HeaderNaviButtonJoin = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HeaderNaviButtonSearch = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HeaderUtilities = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HeaderUtility = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const HeaderUtilityDropdown = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const Masthead = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const Resize = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const DropdownItem = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    const MainMenu = ({
      children,
      ...p
    }: any) => <div {...p}>{children}</div>;
    return <div style={{
      minHeight: '700px'
    }}>
        <Masthead />
        <Header mobileMenuTriggerPortalId="\${PORTAL_MOBILE_TRIGGER}" desktopMenuPortalId="\${PORTAL_DESKTOP}">
          <HeaderContainer>
            <HeaderUtilities>
              <HeaderUtility>
                <Resize />
              </HeaderUtility>
              <HeaderUtilityDropdown label="사용자 지원">
                <DropdownItem>인증센터</DropdownItem>
                <DropdownItem>도움말</DropdownItem>
              </HeaderUtilityDropdown>
            </HeaderUtilities>
            <HeaderBranding logoHref="/" logoAltText="다룸 채널 홈으로 이동">
              <HeaderNavi>
                <HeaderNaviButtonSearch />
                <HeaderNaviButtonLogin />
                <HeaderNaviButtonJoin />
              </HeaderNavi>
            </HeaderBranding>
          </HeaderContainer>
        </Header>
        <MainMenu desktop={desktopMenu} mobile={mobileMenu} mobileTriggerPortalId="\${PORTAL_MOBILE_TRIGGER}" desktopPortalId="\${PORTAL_DESKTOP}" />
      </div>;
  },
  name: 'MainMenu 통합 (With MainMenu)',
  parameters: {
    docs: {
      canvas: {
        height: '700px'
      },
      description: {
        story: '**MainMenu가 통합된** 전체 헤더 구성입니다. 데스크톱에서는 메가 드롭다운, 모바일에서는 풀스크린 슬라이드 메뉴가 동작합니다.'
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(D=(B=H.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const G=["Default","WithoutMasthead","LoggedIn","WithMainMenu"];export{g as Default,b as LoggedIn,H as WithMainMenu,y as WithoutMasthead,G as __namedExportsOrder,E as default};
