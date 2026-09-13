import{j as f}from"./jsx-runtime-D_zvdyIk.js";import{F as n}from"./Footer-cUmj_5XA.js";import{d as k}from"./reference-types-4ftiVeOu.js";import"./index-BxXVWNx3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-DCADjnpI.js";const g=k([{library:"U.S. Web Design System",component:"Footer",url:"https://designsystem.digital.gov/components/footer/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"GOV.UK Design System",component:"GOV.UK footer",url:"https://design-system.service.gov.uk/components/footer/",usedFor:["design","accessibility","comparison"],relation:"compared"},{library:"KRDS",component:"Footer",url:"https://www.krds.go.kr/storybook/react/?path=/docs/components-footer--docs",usedFor:["design","behavior","api"],relation:"adapted"},{library:"Flowbite",component:"Footer",url:"https://flowbite.com/docs/components/footer/",usedFor:["comparison"],relation:"compared"},{library:"daisyUI",component:"Footer",url:"https://daisyui.com/components/footer/",usedFor:["comparison"],relation:"compared"},{library:"Mantine UI",component:"Footers",url:"https://ui.mantine.dev/category/footers/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."},{library:"Quasar",component:"Layout Header and Footer",url:"https://quasar.dev/layout/header-and-footer",usedFor:["comparison"],relation:"compared"}]),F={title:"Organisms/Navigation/Footer",component:n,tags:["autodocs","navigation","ref:krds","ref:daisy-ui","ref:flowbite","ref:vuetify","ref:quasar","ref:mantine-ui","ref:govuk","ref:uswds"],parameters:{references:g,layout:"fullscreen",docs:{description:{component:"\n## Footer\n\n**KRDS 2.0 표준 사이트 푸터** 컴포넌트입니다.\n단일 `<Footer>` 컴포넌트에 모든 props를 직접 전달하여 사용합니다.\n\n---\n\n### Props\n\n| Prop | 타입 | 설명 |\n|---|---|---|\n| `address` | `string` | 기관 주소 |\n| `contacts` | `{ title, description }[]` | 연락처 목록 (전화·팩스 등) |\n| `links` | `{ text, href, target? }[]` | 관련 링크 목록 |\n| `socialLinks` | `{ platform, label?, href }[]` | SNS 링크 (`platform`: instagram / youtube / x / facebook / blog 등) |\n| `quickLinks` | `{ title, onClick? }[]` | 빠른 링크 버튼 |\n| `bottomLinks` | `{ text, href, isHighlighted? }[]` | 개인정보처리방침 등 하단 정책 링크 |\n| `copyright` | `string` | 저작권 문구 |\n| `identifierText` | `string` | 하단 기관 식별 문구 |\n| `hideQuickLinks` | `boolean` | 빠른 링크 영역 숨김 |\n| `hideIdentifier` | `boolean` | 식별자 영역 숨김 |\n| `defaultLinkTarget` | `'_blank' \\| '_self'` | 링크 기본 타깃 |\n\n---\n\n### 접근성(A11y) 가이드\n\n| 체크 | 항목 |\n|---|---|\n| ✅ | `<footer>` 랜드마크로 자동 선언됩니다. |\n| ✅ | 외부 링크에는 새 창 열림을 aria-label로 안내합니다. |\n        "}}},argTypes:{address:{control:"text",table:{category:"MainContent"}},contacts:{control:"object",table:{category:"MainContent"}},links:{control:"object",table:{category:"MainContent"}},socialLinks:{control:"object",table:{category:"MainContent"}},quickLinks:{control:"object",table:{category:"QuickLinks"}},hideQuickLinks:{control:"boolean",table:{category:"QuickLinks"}},copyright:{control:"text",table:{category:"Bottom"}},identifierText:{control:"text",table:{category:"Bottom"}},bottomLinks:{control:"object",table:{category:"Bottom"}},hideIdentifier:{control:"boolean",table:{category:"Bottom"}},defaultLinkTarget:{control:{type:"select"},options:["_self","_blank"],table:{category:"Options"}}},args:{address:"(26464) 강원특별자치도 원주시 건강로 32(반곡동) 국민건강보험공단",contacts:[{title:"대표전화 1577-1000",description:"(유료, 평일 09시~18시)"},{title:"해외이용 82-33-811-2001",description:"(유료, 평일 09시~18시)"}],links:[{text:"찾아오시는 길",href:"#"},{text:"이용안내",href:"#"},{text:"직원검색",href:"#"}],socialLinks:[{platform:"instagram",href:"#"},{platform:"youtube",href:"#"},{platform:"x",href:"#"},{platform:"facebook",href:"#"},{platform:"blog",href:"#"}],quickLinks:[{title:"관련사이트1"},{title:"관련사이트2"},{title:"관련사이트3"},{title:"관련사이트4"}],bottomLinks:[{text:"개인정보처리방침",href:"#",isHighlighted:!0},{text:"저작권 정책",href:"#"},{text:"웹 접근성 품질인증 마크 획득",href:"#"}],copyright:"© 2023 National Health Insurance Service. All rights reserved.",identifierText:"이 누리집은 보건복지부 산하기관 누리집입니다.",defaultLinkTarget:"_self",hideQuickLinks:!1,hideIdentifier:!1},render:e=>f.jsx(n,{...e,children:e.children??e.label??e.text??void 0})},t={name:"기본 (Default)",parameters:{docs:{description:{story:"**빠른 링크·기관 정보·SNS·저작권이 모두 포함된 기본 푸터**입니다."}}}},o={name:"심플 (Simple)",args:{quickLinks:[],hideQuickLinks:!0,socialLinks:[]},parameters:{docs:{description:{story:"**빠른 링크·SNS 없이 기관 정보와 저작권만 포함한 푸터**입니다."}}}},r={name:"최소형 (Minimal)",args:{address:void 0,contacts:[],links:[],socialLinks:[],quickLinks:[],hideQuickLinks:!0,bottomLinks:[],identifierText:void 0,hideIdentifier:!0,copyright:"Copyright © 2026 Components Channel."},parameters:{docs:{description:{story:"**저작권 표시만 있는 최소형 푸터**입니다. 관리자 페이지나 내부 도구에 사용합니다."}},controls:{disable:!0}}};var i,s,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '기본 (Default)',
  parameters: {
    docs: {
      description: {
        story: '**빠른 링크·기관 정보·SNS·저작권이 모두 포함된 기본 푸터**입니다.'
      }
    }
  }
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var c,l,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '심플 (Simple)',
  args: {
    quickLinks: [],
    hideQuickLinks: true,
    socialLinks: []
  } as any,
  parameters: {
    docs: {
      description: {
        story: '**빠른 링크·SNS 없이 기관 정보와 저작권만 포함한 푸터**입니다.'
      }
    }
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '최소형 (Minimal)',
  args: {
    address: undefined,
    contacts: [],
    links: [],
    socialLinks: [],
    quickLinks: [],
    hideQuickLinks: true,
    bottomLinks: [],
    identifierText: undefined,
    hideIdentifier: true,
    copyright: 'Copyright © 2026 Components Channel.'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '**저작권 표시만 있는 최소형 푸터**입니다. 관리자 페이지나 내부 도구에 사용합니다.'
      }
    },
    controls: {
      disable: true
    }
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const v=["Default","Simple","Minimal"];export{t as Default,r as Minimal,o as Simple,v as __namedExportsOrder,F as default};
