import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as A}from"./reference-types-4ftiVeOu.js";import{r as D}from"./index-BxXVWNx3.js";import{c as C}from"./index-CkIaN0ex.js";import{c as I}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const M=C("w-full overflow-hidden rounded-full bg-krds-gray-20",{variants:{size:{small:"h-1",medium:"h-2",large:"h-4"}},defaultVariants:{size:"medium"}}),U=C("h-full rounded-full transition-all duration-300 ease-in-out",{variants:{color:{primary:"bg-krds-primary-50",success:"bg-krds-success-base",warning:"bg-krds-warning-base",danger:"bg-krds-danger-base"}},defaultVariants:{color:"primary"}}),c=D.forwardRef(({className:s,size:P,color:V,value:F=0,min:r=0,max:p=100,label:l,...T},q)=>{const d=p>r?p:r+100,m=Math.min(d,Math.max(r,F)),u=(m-r)/(d-r)*100;return e.jsxs("div",{ref:q,className:I("w-full",s),...T,children:[l&&e.jsxs("div",{className:"mb-1 flex items-center justify-between",children:[e.jsx("span",{className:"text-krds-body-sm text-krds-gray-70",children:l}),e.jsxs("span",{className:"text-krds-body-sm text-krds-gray-70",children:[Math.round(u),"%"]})]}),e.jsx("div",{role:"progressbar","aria-valuenow":m,"aria-valuemin":r,"aria-valuemax":d,"aria-label":l??"진행률",className:M({size:P}),children:e.jsx("div",{className:U({color:V}),style:{width:`${u}%`}})})]})});c.displayName="ProgressBar";c.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit","VariantProps"]};const L=A([{library:"Base UI",component:"Meter",url:"https://base-ui.com/react/components/meter",usedFor:["comparison"],relation:"compared"},{library:"Ark UI",component:"Progress - Linear",url:"https://ark-ui.com/docs/components/progress-linear",usedFor:["behavior","accessibility","api"],relation:"compared"},{library:"Bootstrap",component:"Progress",url:"https://getbootstrap.com/docs/5.3/components/progress/",usedFor:["comparison"],relation:"compared"},{library:"Flowbite",component:"Progress",url:"https://flowbite.com/docs/components/progress/",usedFor:["comparison"],relation:"compared"},{library:"daisyUI",component:"Progress",url:"https://daisyui.com/components/progress/",usedFor:["comparison"],relation:"compared"},{library:"Ant Design",component:"Progress",url:"https://ant.design/components/progress/",usedFor:["comparison"],relation:"compared"},{library:"Chakra UI",component:"Progress",url:"https://www.chakra-ui.com/docs/components/progress",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Linear Progress",url:"https://quasar.dev/vue-components/linear-progress",usedFor:["comparison"],relation:"compared"},{library:"Base UI",component:"Progress",url:"https://base-ui.com/react/components/progress",usedFor:["comparison"],relation:"compared"}]),H={title:"Atoms/Display/ProgressBar",component:c,tags:["autodocs","display","custom-ui","ref:chakra-ui","ref:shadcn-ui","ref:ark-ui","ref:daisy-ui","ref:ant-design","ref:flowbite","ref:vuetify","ref:mui","ref:bootstrap","ref:quasar","ref:base-ui"],parameters:{references:L,docs:{description:{component:`
## ProgressBar

**진행 상태나 완료 비율을 시각적으로 표현**하는 바(bar) 컴포넌트입니다.

---

### 언제 사용하나요?

| 용도 | 예시 |
|---|---|
| 파일 업로드 진행률 | 업로드 중 % 표시 |
| 단계별 완료 현황 | 온보딩 5단계 중 3단계 완료 |
| 목표 달성률 | 목표 대비 현재 수치 |
| 용량 사용률 | 저장 공간 사용량 |

---

### 접근성(A11y) 가이드

| 체크 | 항목 |
|---|---|
| ✅ | \`role="progressbar"\`를 설정하세요. |
| ✅ | \`aria-valuenow\`, \`aria-valuemin\`, \`aria-valuemax\`를 모두 제공하세요. |
| ✅ | \`aria-label\` 또는 연결된 \`<label>\`로 목적을 설명하세요. |
        `}}},argTypes:{value:{description:"현재 진행 값 (0~100)",control:{type:"range",min:0,max:100},table:{type:{summary:"number"},defaultValue:{summary:"60"},category:"State"}},size:{description:"바 높이",control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"'small' | 'medium' | 'large'"},defaultValue:{summary:"'medium'"},category:"Appearance"}},color:{description:"진행 바 색상",control:{type:"select"},options:["primary","success","warning","danger"],table:{type:{summary:"'primary' | 'success' | 'warning' | 'danger'"},defaultValue:{summary:"'primary'"},category:"Appearance"}},label:{description:"레이블 텍스트",control:"text",table:{type:{summary:"string"},category:"Content"}}},args:{value:60,size:"medium",color:"primary",label:"업로드 진행률"},render:s=>e.jsx(c,{...s,children:s.children??s.label??s.text??void 0})},a={name:"기본 진행 바",parameters:{docs:{description:{story:"레이블과 퍼센트 값을 함께 표시하는 기본 진행 바입니다."}}}},o={name:"완료 (100%)",args:{value:100,color:"success",label:"처리 완료"},parameters:{docs:{description:{story:"작업이 완료된 상태의 진행 바입니다."}}}},t={name:"낮은 진행률 (20%)",args:{value:20,color:"warning",label:"목표 달성률"},parameters:{docs:{description:{story:"달성률이 낮은 경고 상태입니다."}}}},n={name:"얇은 바",args:{size:"small",value:45,label:""},parameters:{docs:{description:{story:"공간이 협소한 영역에서 사용하는 얇은 진행 바입니다."}}}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"360px",padding:"16px"},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"12px",color:"#555",marginBottom:"4px"},children:[e.jsx("span",{children:"완료"}),e.jsx("span",{children:"100%"})]}),e.jsx("div",{className:"custom-ui-progress medium",children:e.jsx("div",{className:"custom-ui-progress__bar success",style:{width:"100%"}})})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"12px",color:"#555",marginBottom:"4px"},children:[e.jsx("span",{children:"진행 중"}),e.jsx("span",{children:"65%"})]}),e.jsx("div",{className:"custom-ui-progress medium",children:e.jsx("div",{className:"custom-ui-progress__bar primary",style:{width:"65%"}})})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"12px",color:"#555",marginBottom:"4px"},children:[e.jsx("span",{children:"주의"}),e.jsx("span",{children:"30%"})]}),e.jsx("div",{className:"custom-ui-progress medium",children:e.jsx("div",{className:"custom-ui-progress__bar warning",style:{width:"30%"}})})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"12px",color:"#555",marginBottom:"4px"},children:[e.jsx("span",{children:"위험"}),e.jsx("span",{children:"10%"})]}),e.jsx("div",{className:"custom-ui-progress medium",children:e.jsx("div",{className:"custom-ui-progress__bar danger",style:{width:"10%"}})})]})]}),name:"상태별 색상",parameters:{controls:{disable:!0},docs:{description:{story:"상태별 색상을 활용한 진행 바 패턴 모음입니다."}}}};var y,g,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '기본 진행 바',
  parameters: {
    docs: {
      description: {
        story: '레이블과 퍼센트 값을 함께 표시하는 기본 진행 바입니다.'
      }
    }
  }
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,f,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '완료 (100%)',
  args: {
    value: 100,
    color: 'success',
    label: '처리 완료'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '작업이 완료된 상태의 진행 바입니다.'
      }
    }
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,j,w;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '낮은 진행률 (20%)',
  args: {
    value: 20,
    color: 'warning',
    label: '목표 달성률'
  } as any,
  parameters: {
    docs: {
      description: {
        story: '달성률이 낮은 경고 상태입니다.'
      }
    }
  }
}`,...(w=(j=t.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var N,_,k;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '얇은 바',
  args: {
    size: 'small',
    value: 45,
    label: ''
  } as any,
  parameters: {
    docs: {
      description: {
        story: '공간이 협소한 영역에서 사용하는 얇은 진행 바입니다.'
      }
    }
  }
}`,...(k=(_=n.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var B,S,z;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '360px',
    padding: '16px'
  }}>
        <div>
          <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '12px',
        color: '#555',
        marginBottom: '4px'
      }}><span>완료</span><span>100%</span></div>
          <div className="custom-ui-progress medium"><div className="custom-ui-progress__bar success" style={{
          width: '100%'
        }}></div></div>
        </div>
        <div>
          <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '12px',
        color: '#555',
        marginBottom: '4px'
      }}><span>진행 중</span><span>65%</span></div>
          <div className="custom-ui-progress medium"><div className="custom-ui-progress__bar primary" style={{
          width: '65%'
        }}></div></div>
        </div>
        <div>
          <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '12px',
        color: '#555',
        marginBottom: '4px'
      }}><span>주의</span><span>30%</span></div>
          <div className="custom-ui-progress medium"><div className="custom-ui-progress__bar warning" style={{
          width: '30%'
        }}></div></div>
        </div>
        <div>
          <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '12px',
        color: '#555',
        marginBottom: '4px'
      }}><span>위험</span><span>10%</span></div>
          <div className="custom-ui-progress medium"><div className="custom-ui-progress__bar danger" style={{
          width: '10%'
        }}></div></div>
        </div>
      </div>,
  name: '상태별 색상',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: '상태별 색상을 활용한 진행 바 패턴 모음입니다.'
      }
    }
  }
}`,...(z=(S=i.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};const J=["Default","Complete","Low","Thin","StatusColors"];export{o as Complete,a as Default,t as Low,i as StatusColors,n as Thin,J as __namedExportsOrder,H as default};
