import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{d as i}from"./reference-types-4ftiVeOu.js";function o({children:e,...c}){return n.jsx("div",{...c,children:e})}o.__docgenInfo={description:"",methods:[],displayName:"MegaMenu",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const m=i([{library:"Flowbite",component:"Mega Menu",url:"https://flowbite.com/docs/components/mega-menu/",usedFor:["comparison"],relation:"compared"}]),u={title:"Organisms/Navigation/MegaMenu",component:o,tags:["autodocs","navigation","custom-ui","ref:flowbite"],parameters:{references:m,docs:{description:{component:`
## MegaMenu

**GNB 항목 클릭 시 다단으로 펼쳐지는 대형 드롭다운 메뉴**입니다. 많은 하위 카테고리를 구조적으로 표현합니다.

---

### 언제 사용하나요?

- 쇼핑몰: 상품 카테고리 (의류 > 남성/여성 > 상의/하의 ...)
- 포털: 서비스 전체보기
- 기업 사이트: 솔루션·제품 라인업

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | GNB 버튼에 \`aria-expanded\`, \`aria-haspopup\`을 설정하세요. |
| ✅ | \`Escape\` 키로 닫기가 가능해야 합니다. |
| ✅ | 패널 내 그룹 제목은 \`<h4>\`~\`<h6>\` 시맨틱 태그를 사용하세요. |
        `}}},argTypes:{menus:{description:"상단 메뉴 목록",control:"object",table:{type:{summary:"Array"},category:"Content"}}},args:{menus:[{label:"서비스",groups:[{category:"퍼블리싱",items:["웹 디자인","모바일 앱","인터랙티브 콘텐츠"]},{category:"콘텐츠",items:["카드뉴스","인포그래픽","영상 편집"]},{category:"브랜딩",items:["로고 디자인","BI/CI","가이드라인"]},{category:"기술",items:["프론트엔드","CMS 구축","성능 최적화"]}]},{label:"회사소개",groups:[{category:"회사",items:["연혁","조직도","오시는 길"]},{category:"채용",items:["채용 공고","인재상","복지"]}]}]},render:e=>n.jsx(o,{...e,children:e.children??e.label??e.text??void 0})},t={name:"기본 메가메뉴",parameters:{docs:{description:{story:"상단 메뉴를 클릭하면 메가 패널이 펼쳐집니다."}}}};var r,a,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: '기본 메가메뉴',
  parameters: {
    docs: {
      description: {
        story: '상단 메뉴를 클릭하면 메가 패널이 펼쳐집니다.'
      }
    }
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const l=["Default"];export{t as Default,l as __namedExportsOrder,u as default};
