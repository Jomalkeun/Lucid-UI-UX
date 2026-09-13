import{j as d}from"./jsx-runtime-D_zvdyIk.js";function o({children:e,...m}){return d.jsx("div",{...m,children:e})}o.__docgenInfo={description:"",methods:[],displayName:"ProductInfoBlock",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const u={title:"Organisms/Content/ProductInfoBlock",component:o,tags:["autodocs","content","custom-ui"],parameters:{docs:{description:{component:`
## ProductInfoBlock

**상품 상세 정보·가격·구매 버튼**을 묶은 상품 정보 유기체입니다. 이커머스 상품 상세 페이지의 핵심 영역입니다.

---

### 구성 요소

| 영역 | 내용 |
|---|---|
| 배지 | 할인·신규·베스트 등 강조 태그 |
| 제목·부제목 | 상품명과 모델/브랜드 정보 |
| 평점·리뷰 수 | 별점 + 리뷰 카운트 |
| 가격 | 원가·할인가·할인율 |
| 색상 선택 | 색상 스와치 |
| 수량 조절 | +/- 스테퍼 |
| 액션 | 구매·장바구니·찜하기 |

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | 색상 버튼에 \`aria-label\`로 색상명을 명시하세요. |
| ✅ | 할인가·원가 모두를 읽을 수 있도록 \`aria-label\`을 보완하세요. |
        `}}},argTypes:{name:{description:"상품명",control:"text",table:{type:{summary:"string"},category:"Content"}},subtitle:{description:"부제목",control:"text",table:{type:{summary:"string"},category:"Content"}},price:{description:"판매가",control:"text",table:{type:{summary:"string"},category:"Content"}},originalPrice:{description:"원가",control:"text",table:{type:{summary:"string"},category:"Content"}},discountRate:{description:"할인율",control:"number",table:{type:{summary:"number"},category:"Content"}},rating:{description:"평점",control:"number",table:{type:{summary:"number"},category:"Content"}},reviewCount:{description:"리뷰 수",control:"number",table:{type:{summary:"number"},category:"Content"}},colors:{description:"색상 목록",control:"object",table:{type:{summary:"string[]"},category:"Content"}},badges:{description:"배지 목록",control:"object",table:{type:{summary:"Array"},category:"Content"}}},args:{name:"에코 텀블러 500ml",subtitle:"다루 퍼블리싱 리빙 컬렉션",price:"₩28,000",originalPrice:"₩35,000",discountRate:20,rating:4.3,reviewCount:128,colors:["#1a73e8","#e91e63","#2e7d32","#333"],badges:[{label:"베스트",bg:"#fff3e0",color:"#e65100"},{label:"20% 할인",bg:"#fce4e4",color:"#d32f2f"}]},render:e=>d.jsx(o,{...e,children:e.children??e.label??e.text??void 0})},t={name:"기본 상품 정보",parameters:{docs:{description:{story:"배지·평점·가격·색상·수량·구매 액션이 포함된 상품 정보 블록입니다."}}}},r={name:"할인 없음",args:{originalPrice:"",discountRate:null,badges:[],price:"₩28,000"},parameters:{docs:{description:{story:"할인 없는 정가 상품 표시입니다."}}}};var n,a,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '기본 상품 정보',
  parameters: {
    docs: {
      description: {
        story: '배지·평점·가격·색상·수량·구매 액션이 포함된 상품 정보 블록입니다.'
      }
    }
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var c,i,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '할인 없음',
  args: {
    originalPrice: '',
    discountRate: null,
    badges: [],
    price: '₩28,000'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '할인 없는 정가 상품 표시입니다.'
      }
    }
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const y=["Default","NoDiscount"];export{t as Default,r as NoDiscount,y as __namedExportsOrder,u as default};
