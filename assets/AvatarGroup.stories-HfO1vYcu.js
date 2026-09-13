import{d as k}from"./reference-types-4ftiVeOu.js";import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{R as G}from"./index-BxXVWNx3.js";import{c as L}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const M={small:{dim:28,fontSize:11,border:2},medium:{dim:36,fontSize:14,border:2},large:{dim:48,fontSize:18,border:3}},p=G.forwardRef(({users:l=[],max:I=4,size:U="medium",overlap:m=!0,className:N,style:V,children:T,...q},$)=>{const{dim:a,fontSize:u,border:f}=M[U],c=l.slice(0,I),r=l.length-c.length;return t.jsxs("div",{ref:$,role:"group","aria-label":`${l.length}명의 참여자`,className:L("flex items-center",N),style:{gap:m?0:4,...V},...q,children:[c.map((e,d)=>t.jsx("div",{title:e.name,"aria-label":e.name,style:{width:a,height:a,borderRadius:"50%",background:e.color??"#6b7280",border:`${f}px solid #fff`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:u,fontWeight:700,color:"#fff",flexShrink:0,marginLeft:m&&d>0?-(a*.3):0,zIndex:c.length-d,position:"relative",overflow:"hidden",userSelect:"none"},children:e.src?t.jsx("img",{src:e.src,alt:e.name,style:{width:"100%",height:"100%",objectFit:"cover"}}):e.initials},e.name+d)),r>0&&t.jsxs("div",{"aria-label":`외 ${r}명`,title:`외 ${r}명`,style:{width:a,height:a,borderRadius:"50%",background:"#e5e7eb",border:`${f}px solid #fff`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:u-2,fontWeight:700,color:"#374151",flexShrink:0,marginLeft:m?-(a*.3):0,position:"relative",userSelect:"none"},children:["+",r]}),T]})});p.displayName="AvatarGroup";p.__docgenInfo={description:"",methods:[],displayName:"AvatarGroup",props:{users:{required:!1,tsType:{name:"Array",elements:[{name:"AvatarUser"}],raw:"AvatarUser[]"},description:"",defaultValue:{value:"[]",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},overlap:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const _=[{name:"홍길동",initials:"홍",color:"#1a73e8"},{name:"이영희",initials:"이",color:"#e91e63"},{name:"박민수",initials:"박",color:"#2e7d32"},{name:"최지은",initials:"최",color:"#f57c00"},{name:"김태현",initials:"김",color:"#6200ea"},{name:"정수연",initials:"정",color:"#00838f"}],C=k([{library:"Mantine UI",component:"User info and controls",url:"https://ui.mantine.dev/category/users/",usedFor:["design","comparison"],relation:"compared",note:"Mantine UI의 대응 패턴과 비교해 로컬 컴포넌트 범위를 정리했습니다."}]),B={title:"Molecules/Data/AvatarGroup",component:p,tags:["autodocs","data","ref:mantine-ui"],parameters:{references:C,docs:{description:{component:"여러 사용자의 아바타를 겹쳐서 또는 나란히 표시하는 공동 작업자 표시 컴포넌트입니다."}}},argTypes:{max:{description:"최대 표시 아바타 수",control:{type:"range",min:1,max:8},table:{type:{summary:"number"},defaultValue:{summary:"4"},category:"Appearance"}},size:{description:"아바타 크기",control:"select",options:["small","medium","large"],table:{type:{summary:"small | medium | large"},defaultValue:{summary:"'medium'"},category:"Appearance"}},overlap:{description:"겹침 효과",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Appearance"}},users:{description:"사용자 목록",control:"object",table:{type:{summary:"AvatarUser[]"},category:"Content"}}},args:{max:4,size:"medium",overlap:!0,users:_}},n={name:"기본 겹침",parameters:{docs:{description:{story:"아바타가 겹쳐서 표시됩니다. 공동 작업자 표시에 활용합니다."}}}},s={name:"나란히",args:{overlap:!1},parameters:{docs:{description:{story:"아바타가 나란히 표시됩니다."}}}},o={name:"소형",args:{size:"small"},parameters:{docs:{description:{story:"테이블 셀과 컴팩트 UI에 사용하는 소형 그룹입니다."}}}},i={name:"대형",args:{size:"large",max:3},parameters:{docs:{description:{story:"헤더와 프로필 영역에 사용하는 대형 그룹입니다."}}}};var g,y,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '기본 겹침',
  parameters: {
    docs: {
      description: {
        story: '아바타가 겹쳐서 표시됩니다. 공동 작업자 표시에 활용합니다.'
      }
    }
  }
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var b,h,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '나란히',
  args: {
    overlap: false
  },
  parameters: {
    docs: {
      description: {
        story: '아바타가 나란히 표시됩니다.'
      }
    }
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,z,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '소형',
  args: {
    size: 'small'
  },
  parameters: {
    docs: {
      description: {
        story: '테이블 셀과 컴팩트 UI에 사용하는 소형 그룹입니다.'
      }
    }
  }
}`,...(A=(z=o.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var R,j,w;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '대형',
  args: {
    size: 'large',
    max: 3
  },
  parameters: {
    docs: {
      description: {
        story: '헤더와 프로필 영역에 사용하는 대형 그룹입니다.'
      }
    }
  }
}`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const H=["Default","NoOverlap","Small","Large"];export{n as Default,i as Large,s as NoOverlap,o as Small,H as __namedExportsOrder,B as default};
