import{j as e}from"./jsx-runtime-D_zvdyIk.js";function o({brandSlot:d,groups:c=[],legalLinks:m=[],socialSlot:u,newsletterSlot:l,copyright:p,layout:f="columns"}){return e.jsxs("footer",{className:"border-t border-krds-gray-20 bg-krds-gray-5",children:[e.jsxs("div",{className:`mx-auto grid max-w-screen-xl gap-8 px-5 py-12 ${f==="columns"?"md:grid-cols-[1.3fr_repeat(4,1fr)]":"md:grid-cols-[1fr_2fr]"}`,children:[e.jsxs("div",{children:[d,l?e.jsx("div",{className:"mt-6",children:l}):null]}),c.map(r=>e.jsxs("section",{children:[e.jsx("h2",{className:"text-sm font-bold",children:r.title}),e.jsx("ul",{className:"mt-4 space-y-2",children:r.links.map(a=>e.jsx("li",{children:e.jsx("a",{className:"text-sm text-krds-gray-60 hover:underline",href:a.href,children:a.label})},a.label))})]},r.title))]}),e.jsx("div",{className:"border-t border-krds-gray-20",children:e.jsxs("div",{className:"mx-auto flex max-w-screen-xl flex-col gap-3 px-5 py-4 text-xs text-krds-gray-60 md:flex-row md:items-center md:justify-between",children:[e.jsx("div",{className:"flex flex-wrap gap-3",children:m.map(r=>e.jsx("a",{href:r.href,className:"hover:underline",children:r.label},r.label))}),u,e.jsx("span",{children:p})]})})]})}o.__docgenInfo={description:"",methods:[],displayName:"SiteFooter",props:{brandSlot:{required:!1,tsType:{name:"ReactNode"},description:""},groups:{required:!1,tsType:{name:"Array",elements:[{name:"SiteFooterGroup"}],raw:"SiteFooterGroup[]"},description:"",defaultValue:{value:"[]",computed:!1}},legalLinks:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; href: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]}}],raw:"{ label: string; href: string }[]"},description:"",defaultValue:{value:"[]",computed:!1}},socialSlot:{required:!1,tsType:{name:"ReactNode"},description:""},newsletterSlot:{required:!1,tsType:{name:"ReactNode"},description:""},copyright:{required:!1,tsType:{name:"ReactNode"},description:""},layout:{required:!1,tsType:{name:"union",raw:"'compact' | 'columns'",elements:[{name:"literal",value:"'compact'"},{name:"literal",value:"'columns'"}]},description:"",defaultValue:{value:"'columns'",computed:!1}}}};const h={title:"Organisms/Navigation/SiteFooter",component:o,parameters:{layout:"fullscreen"}},s={args:{brandSlot:e.jsx("strong",{children:"SITE"}),groups:[{title:"둘러보기",links:[{label:"소개",href:"#"},{label:"소식",href:"#"}]},{title:"지원",links:[{label:"도움말",href:"#"}]}],legalLinks:[{label:"이용약관",href:"#"}],copyright:"© 2026 Site"}};var t,n,i;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    brandSlot: <strong>SITE</strong>,
    groups: [{
      title: '둘러보기',
      links: [{
        label: '소개',
        href: '#'
      }, {
        label: '소식',
        href: '#'
      }]
    }, {
      title: '지원',
      links: [{
        label: '도움말',
        href: '#'
      }]
    }],
    legalLinks: [{
      label: '이용약관',
      href: '#'
    }],
    copyright: '© 2026 Site'
  }
}`,...(i=(n=s.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const g=["Columns"];export{s as Columns,g as __namedExportsOrder,h as default};
