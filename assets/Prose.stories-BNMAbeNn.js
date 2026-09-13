import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as z}from"./reference-types-4ftiVeOu.js";const S={sm:{fontSize:"14px",lineHeight:1.625},base:{fontSize:"16px",lineHeight:1.75},lg:{fontSize:"18px",lineHeight:1.7778},xl:{fontSize:"20px",lineHeight:1.8}};function s({children:r,size:b="base",maxWidth:o="65ch",style:f,className:a}){const{fontSize:y,lineHeight:j}=S[b];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
  .lucid-prose { font-family: system-ui; color: #374151; }
  .lucid-prose h1, .lucid-prose h2, .lucid-prose h3, .lucid-prose h4 { color: #111827; font-weight: 700; margin-top: 1.5em; margin-bottom: 0.5em; line-height: 1.2; }
  .lucid-prose h1 { font-size: 2em; }
  .lucid-prose h2 { font-size: 1.5em; border-bottom: 1px solid #e5e7eb; padding-bottom: 0.3em; }
  .lucid-prose h3 { font-size: 1.25em; }
  .lucid-prose h4 { font-size: 1.1em; }
  .lucid-prose p { margin: 0.75em 0; }
  .lucid-prose a { color: #3b82f6; text-decoration: underline; }
  .lucid-prose a:hover { color: #2563eb; }
  .lucid-prose strong { font-weight: 700; color: #111827; }
  .lucid-prose em { font-style: italic; }
  .lucid-prose code { background: #f3f4f6; padding: 0.15em 0.4em; border-radius: 4px; font-family: monospace; font-size: 0.875em; color: #dc2626; }
  .lucid-prose pre { background: #1e293b; padding: 1em 1.25em; border-radius: 8px; overflow-x: auto; margin: 1em 0; }
  .lucid-prose pre code { background: none; color: #e2e8f0; font-size: 0.875em; padding: 0; }
  .lucid-prose blockquote { border-left: 4px solid #e5e7eb; padding-left: 1em; color: #6b7280; margin: 1em 0; font-style: italic; }
  .lucid-prose ul, .lucid-prose ol { padding-left: 1.5em; margin: 0.5em 0; }
  .lucid-prose li { margin: 0.25em 0; }
  .lucid-prose ul li { list-style-type: disc; }
  .lucid-prose ol li { list-style-type: decimal; }
  .lucid-prose hr { border: none; border-top: 1px solid #e5e7eb; margin: 1.5em 0; }
  .lucid-prose img { max-width: 100%; border-radius: 8px; }
  .lucid-prose table { width: 100%; border-collapse: collapse; margin: 1em 0; font-size: 0.9em; }
  .lucid-prose th { background: #f9fafb; font-weight: 600; text-align: left; padding: 8px 12px; border: 1px solid #e5e7eb; }
  .lucid-prose td { padding: 8px 12px; border: 1px solid #e5e7eb; }
  .lucid-prose tr:nth-child(even) td { background: #f9fafb; }
  `}),e.jsx("div",{className:`lucid-prose${a?` ${a}`:""}`,style:{fontSize:y,lineHeight:j,maxWidth:o===!1?void 0:typeof o=="number"?`${o}px`:o,...f},children:r})]})}s.__docgenInfo={description:"",methods:[],displayName:"Prose",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'base' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'base'",computed:!1}},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string | false",elements:[{name:"number"},{name:"string"},{name:"literal",value:"false"}]},description:"",defaultValue:{value:"'65ch'",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const v=z([{library:"U.S. Web Design System",component:"Prose",url:"https://designsystem.digital.gov/components/prose/",usedFor:["design","behavior","accessibility"],relation:"compared"},{library:"Chakra UI",component:"Prose",url:"https://www.chakra-ui.com/docs/components/prose",usedFor:["comparison"],relation:"compared"}]),q={title:"Atoms/Typography/Prose",component:s,tags:["autodocs","typography","ref:chakra-ui","ref:uswds"],parameters:{references:v,layout:"centered",docs:{description:{component:"CMS나 Markdown에서 온 HTML 콘텐츠에 일관된 읽기용 타이포그래피 스타일을 적용합니다."}}},argTypes:{size:{control:"inline-radio",options:["sm","base","lg","xl"],table:{category:"Typography"}},maxWidth:{control:"text",table:{category:"Layout"}}},args:{size:"base",maxWidth:"65ch"}},P=e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"디자인 시스템 문서 작성 원칙"}),e.jsxs("p",{children:["Prose는 긴 문서 콘텐츠에서 ",e.jsx("strong",{children:"제목, 본문, 목록, 코드, 표"}),"의 리듬을 맞추기 위한 typography wrapper입니다."]}),e.jsx("h2",{children:"사용 기준"}),e.jsx("p",{children:"마크다운 렌더러나 CMS 본문처럼 HTML 구조가 외부에서 들어오는 영역에 적용합니다. 컴포넌트 UI 안의 짧은 텍스트에는 더 구체적인 typography atom을 사용합니다."}),e.jsx("pre",{children:e.jsx("code",{children:`<Prose size="base" maxWidth="65ch">
  {content}
</Prose>`})}),e.jsxs("ul",{children:[e.jsx("li",{children:"본문 폭은 읽기 편한 길이로 제한합니다."}),e.jsx("li",{children:"표와 코드 블록은 문서 흐름 안에서 자연스럽게 표시합니다."}),e.jsx("li",{children:"강조 스타일은 정보 구조를 돕는 경우에만 사용합니다."})]}),e.jsx("blockquote",{children:"문서형 콘텐츠는 장식보다 가독성과 구조가 먼저입니다."})]}),t={name:"기본",render:r=>e.jsx(s,{...r,children:P})},i={name:"크기 비교",render:()=>e.jsx("div",{className:"grid gap-8",children:["sm","base","lg","xl"].map(r=>e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("span",{className:"w-fit rounded-sm bg-krds-gray-5 px-2 py-1 font-mono text-xs text-krds-gray-60",children:['size="',r,'"']}),e.jsxs(s,{size:r,maxWidth:"52ch",children:[e.jsx("h2",{children:"제목 예시"}),e.jsxs("p",{children:["이것은 ",e.jsx("strong",{children:r})," 크기의 Prose 예시입니다. 긴 문서의 줄 높이와 문단 간격을 확인합니다."]})]})]},r))}),parameters:{controls:{disable:!0}}},d={name:"풍부한 콘텐츠",render:()=>e.jsxs(s,{maxWidth:"720px",children:[e.jsx("h1",{children:"릴리즈 노트"}),e.jsx("p",{children:"이번 릴리즈는 컴포넌트 API 정리와 Storybook 문서 품질 개선을 포함합니다."}),e.jsx("h2",{children:"변경사항"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"영역"}),e.jsx("th",{children:"내용"}),e.jsx("th",{children:"상태"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Atoms"}),e.jsx("td",{children:"타입 안전 스토리 정리"}),e.jsx("td",{children:"진행 중"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Molecules"}),e.jsx("td",{children:"실제 컴포넌트의 타입 우회 제거"}),e.jsx("td",{children:"완료"})]})]})]}),e.jsx("hr",{}),e.jsxs("p",{children:["자세한 구현 예시는 ",e.jsx("code",{children:"src/components"})," 디렉터리의 각 컴포넌트 문서를 확인합니다."]})]}),parameters:{controls:{disable:!0}}};var n,l,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '기본',
  render: args => <Prose {...args}>{articleContent}</Prose>
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,m,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '크기 비교',
  render: () => <div className="grid gap-8">
      {(['sm', 'base', 'lg', 'xl'] as const).map(size => <div key={size} className="grid gap-2">
          <span className="w-fit rounded-sm bg-krds-gray-5 px-2 py-1 font-mono text-xs text-krds-gray-60">
            size=&quot;{size}&quot;
          </span>
          <Prose size={size} maxWidth="52ch">
            <h2>제목 예시</h2>
            <p>
              이것은 <strong>{size}</strong> 크기의 Prose 예시입니다. 긴 문서의 줄 높이와 문단 간격을
              확인합니다.
            </p>
          </Prose>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(h=(m=i.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,x,g;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '풍부한 콘텐츠',
  render: () => <Prose maxWidth="720px">
      <h1>릴리즈 노트</h1>
      <p>
        이번 릴리즈는 컴포넌트 API 정리와 Storybook 문서 품질 개선을 포함합니다.
      </p>
      <h2>변경사항</h2>
      <table>
        <thead>
          <tr>
            <th>영역</th>
            <th>내용</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Atoms</td>
            <td>타입 안전 스토리 정리</td>
            <td>진행 중</td>
          </tr>
          <tr>
            <td>Molecules</td>
            <td>실제 컴포넌트의 타입 우회 제거</td>
            <td>완료</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <p>
        자세한 구현 예시는 <code>src/components</code> 디렉터리의 각 컴포넌트 문서를 확인합니다.
      </p>
    </Prose>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(g=(x=d.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const N=["Default","SizeVariants","RichContent"];export{t as Default,d as RichContent,i as SizeVariants,N as __namedExportsOrder,q as default};
