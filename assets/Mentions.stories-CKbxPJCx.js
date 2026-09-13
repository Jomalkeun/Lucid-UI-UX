import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-BxXVWNx3.js";import{d as ve}from"./reference-types-4ftiVeOu.js";import{c as V}from"./utils-DCADjnpI.js";import{L as ye}from"./loader-circle-Db56uVXG.js";import{c as be}from"./createLucideIcon-Ct87QT5c.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]],ke=be("at-sign",he),we=[{value:"kiminjun",label:"김민준",description:"프런트엔드 개발자"},{value:"leeseoyeon",label:"이서연",description:"UX 디자이너"},{value:"parkjiho",label:"박지호",description:"프로덕트 매니저"}];function $(i,d,c,n){const o=i.slice(0,d),u=o.lastIndexOf(c);if(u===-1)return null;const m=o.slice(u+c.length);return m.includes(n)||/\n/.test(m)?null:{search:m,prefixIndex:u}}const g=r.forwardRef(({className:i,containerClassName:d,options:c=we,prefix:n="@",split:o=" ",notFoundContent:u="결과 없음",loading:m=!1,rows:ae=3,value:O,defaultValue:re="",placeholder:se,disabled:ne,onChange:x,onValueChange:v,onSelect:j,onKeyDown:M,onBlur:oe,...le},ie)=>{const S=r.useRef(null),T=r.useRef(null),C=O!==void 0,[ce,de]=r.useState(re),[R,p]=r.useState(!1),[L,ue]=r.useState(""),[D,y]=r.useState(0),f=C?O:ce;r.useImperativeHandle(ie,()=>S.current);const l=r.useMemo(()=>{const e=L.toLowerCase();return e?c.filter(t=>t.label.toLowerCase().includes(e)||t.value.toLowerCase().includes(e)):c},[c,L]),E=r.useCallback(e=>{C||de(e),x==null||x(e),v==null||v(e)},[C,x,v]),me=(e,t)=>{const s=$(e,t,n,o);if(!s){p(!1);return}ue(s.search),y(0),p(!0)},pe=e=>{const t=e.target.value;E(t),me(t,e.target.selectionStart??t.length)},I=e=>{const t=S.current;if(!t)return;const s=t.selectionStart??f.length,A=$(f,s,n,o);if(!A)return;const U=f.slice(0,A.prefixIndex),ge=f.slice(s),xe=`${U}${n}${e.value}${o}${ge}`,_=U.length+n.length+e.value.length+o.length;E(xe),j==null||j(e),p(!1),window.requestAnimationFrame(()=>{t.focus(),t.setSelectionRange(_,_)})},fe=e=>{if(M==null||M(e),!(e.defaultPrevented||!R)){if(e.key==="Escape"){e.preventDefault(),p(!1);return}l.length&&(e.key==="ArrowDown"&&(e.preventDefault(),y(t=>(t+1)%l.length)),e.key==="ArrowUp"&&(e.preventDefault(),y(t=>(t-1+l.length)%l.length)),(e.key==="Enter"||e.key==="Tab")&&(e.preventDefault(),I(l[D])))}};return r.useEffect(()=>{const e=t=>{var s;(s=T.current)!=null&&s.contains(t.target)||p(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),a.jsxs("div",{ref:T,className:V("relative w-full",d),children:[a.jsx("textarea",{ref:S,value:f,rows:ae,disabled:ne,placeholder:se??`${n}로 멘션을 입력하세요`,onChange:pe,onKeyDown:fe,onBlur:oe,className:V("min-h-24 w-full rounded-md border border-krds-gray-40 bg-white px-3 py-2 text-sm leading-6 text-krds-gray-90 shadow-sm","placeholder:text-krds-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-krds-primary-50 focus-visible:ring-offset-2","disabled:cursor-not-allowed disabled:bg-krds-gray-5 disabled:text-krds-gray-50",i),...le}),R?a.jsx("div",{className:"absolute left-0 top-[calc(100%+4px)] z-20 max-h-60 min-w-60 overflow-y-auto rounded-md border border-krds-gray-30 bg-white p-1 shadow-lg",children:m?a.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 text-sm text-krds-gray-60",children:[a.jsx(ye,{"aria-hidden":"true",className:"size-4 animate-spin"}),"불러오는 중"]}):l.length===0?a.jsx("div",{className:"px-3 py-2 text-sm text-krds-gray-60",children:u}):l.map((e,t)=>a.jsxs("button",{type:"button",onMouseDown:s=>{s.preventDefault(),I(e)},onMouseEnter:()=>y(t),className:V("flex w-full items-center gap-3 rounded-sm px-3 py-2 text-left text-sm text-krds-gray-80",t===D&&"bg-krds-primary-5 text-krds-primary-70"),children:[a.jsx("span",{className:"flex size-8 shrink-0 items-center justify-center rounded-full bg-krds-primary-10 text-xs font-semibold text-krds-primary-70",children:e.avatar??a.jsx(ke,{"aria-hidden":"true",className:"size-4"})}),a.jsxs("span",{className:"min-w-0",children:[a.jsx("span",{className:"block truncate font-semibold",children:e.label}),e.description?a.jsx("span",{className:"block truncate text-xs text-krds-gray-60",children:e.description}):null]})]},e.value))}):null]})});g.displayName="Mentions";g.__docgenInfo={description:"",methods:[],displayName:"Mentions",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"MentionOption"}],raw:"MentionOption[]"},description:"",defaultValue:{value:`[
  { value: 'kiminjun', label: '김민준', description: '프런트엔드 개발자' },
  { value: 'leeseoyeon', label: '이서연', description: 'UX 디자이너' },
  { value: 'parkjiho', label: '박지호', description: '프로덕트 매니저' },
]`,computed:!1}},prefix:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'@'",computed:!1}},split:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"' '",computed:!1}},notFoundContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'결과 없음'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: MentionOption) => void",signature:{arguments:[{type:{name:"MentionOption"},name:"option"}],return:{name:"void"}}},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:""},rows:{defaultValue:{value:"3",computed:!1},required:!1}},composes:["Omit"]};const q=[{value:"kiminjun",label:"김민준",avatar:"KM",description:"프런트엔드 개발자"},{value:"leeseoyeon",label:"이서연",avatar:"LS",description:"UX 디자이너"},{value:"parkjiho",label:"박지호",avatar:"PJ",description:"프로덕트 매니저"},{value:"choiyujin",label:"최유진",avatar:"CY",description:"백엔드 개발자"},{value:"jangsungmin",label:"장성민",avatar:"JS",description:"DevOps 엔지니어"}],Ne=[{value:"1234",label:"#1234",description:"로그인 버그 수정"},{value:"1235",label:"#1235",description:"UI 컴포넌트 리팩터링"},{value:"1236",label:"#1236",description:"성능 최적화"},{value:"1237",label:"#1237",description:"다크 모드 지원"}],je=ve([{library:"Element Plus",component:"Mention",url:"https://element-plus.org/en-US/component/mentions",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Ant Design",component:"Mentions",url:"https://ant.design/components/mentions/",usedFor:["comparison"],relation:"compared"}]),Re={title:"Molecules/Forms/Mentions",component:g,tags:["autodocs","forms","ref:ant-design","ref:element-plus"],parameters:{references:je,layout:"centered",docs:{description:{component:"특정 prefix 입력 시 옵션 목록을 표시하고 선택한 멘션 토큰을 textarea에 삽입합니다."}}},argTypes:{prefix:{control:"text",table:{category:"Behavior"}},split:{control:"text",table:{category:"Behavior"}},rows:{control:{type:"range",min:2,max:8,step:1},table:{category:"Appearance"}},placeholder:{control:"text",table:{category:"Content"}},loading:{control:"boolean",table:{category:"State"}},disabled:{control:"boolean",table:{category:"State"}}},args:{options:q,prefix:"@",split:" ",rows:3,placeholder:"@로 사용자를 멘션하세요",loading:!1,disabled:!1,containerClassName:"w-[380px]"}},b={name:"기본"},h={name:"제어 상태",render:()=>{const[i,d]=r.useState("이번 작업은 @");return a.jsxs("div",{className:"grid gap-3",children:[a.jsx(g,{containerClassName:"w-[420px]",options:q,value:i,onValueChange:d}),a.jsxs("p",{className:"text-sm text-krds-gray-60",children:["입력값: ",i]})]})},parameters:{controls:{disable:!0}}},k={name:"이슈 참조",args:{prefix:"#",placeholder:"#으로 이슈를 참조하세요",options:Ne}},w={name:"로딩",args:{defaultValue:"@",loading:!0}},N={name:"댓글 입력",render:()=>a.jsxs("div",{className:"grid max-w-lg gap-3",children:[a.jsxs("div",{className:"rounded-md border border-krds-gray-30 bg-krds-gray-5 p-4",children:[a.jsx("p",{className:"text-sm font-semibold text-krds-gray-90",children:"박지호"}),a.jsx("p",{className:"mt-1 text-sm leading-6 text-krds-gray-70",children:"이번 스프린트 목표를 공유했습니다. 담당자를 멘션해 의견을 남겨주세요."})]}),a.jsx(g,{options:q,placeholder:"댓글을 입력하세요. @로 팀원을 태그할 수 있습니다.",rows:2})]}),parameters:{controls:{disable:!0}}};var F,z,B;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '기본'
}`,...(B=(z=b.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var P,H,X;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '제어 상태',
  render: () => {
    const [value, setValue] = useState('이번 작업은 @');
    return <div className="grid gap-3">
        <Mentions containerClassName="w-[420px]" options={teamMembers} value={value} onValueChange={setValue} />
        <p className="text-sm text-krds-gray-60">입력값: {value}</p>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(X=(H=h.parameters)==null?void 0:H.docs)==null?void 0:X.source}}};var J,Y,G;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: '이슈 참조',
  args: {
    prefix: '#',
    placeholder: '#으로 이슈를 참조하세요',
    options: issueOptions
  }
}`,...(G=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var Q,W,Z;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: '로딩',
  args: {
    defaultValue: '@',
    loading: true
  }
}`,...(Z=(W=w.parameters)==null?void 0:W.docs)==null?void 0:Z.source}}};var K,ee,te;N.parameters={...N.parameters,docs:{...(K=N.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: '댓글 입력',
  render: () => <div className="grid max-w-lg gap-3">
      <div className="rounded-md border border-krds-gray-30 bg-krds-gray-5 p-4">
        <p className="text-sm font-semibold text-krds-gray-90">박지호</p>
        <p className="mt-1 text-sm leading-6 text-krds-gray-70">
          이번 스프린트 목표를 공유했습니다. 담당자를 멘션해 의견을 남겨주세요.
        </p>
      </div>
      <Mentions options={teamMembers} placeholder="댓글을 입력하세요. @로 팀원을 태그할 수 있습니다." rows={2} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(te=(ee=N.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const Le=["Default","Controlled","HashMention","Loading","CommentBox"];export{N as CommentBox,h as Controlled,b as Default,k as HashMention,w as Loading,Le as __namedExportsOrder,Re as default};
