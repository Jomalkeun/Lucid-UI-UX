import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-BxXVWNx3.js";import{d as ye}from"./reference-types-4ftiVeOu.js";import{c as I}from"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const H=(t,s,o)=>Math.min(Math.max(t,s),o),be=(t,s)=>Math.round(t/s)*s,f=d.forwardRef(({className:t,value:s,defaultValue:o=0,min:n=0,max:i=360,step:b=1,size:m=120,trackColor:Z="var(--krds-color-light-primary-10)",thumbColor:V="var(--krds-primary-base)",disabled:u=!1,showValue:D=!0,label:g,onChange:x,onValueChange:h,...ee},re)=>{const M=d.useRef(null),N=s!==void 0,[te,ae]=d.useState(o),l=H(N?s:te,n,i),a=m/2,c=m/2-12,S=(i===n?0:(l-n)/(i-n))*360,q=(l-90)*Math.PI/180,se=a+c*Math.cos(q),ne=a+c*Math.sin(q),$=(S-90)*Math.PI/180,oe=a+c*Math.cos($),le=a+c*Math.sin($),ce=a,ie=a-c,ue=S>180?1:0,p=d.useCallback(e=>{const y=H(be(e,b),n,i);N||ae(y),x==null||x(y),h==null||h(y)},[N,i,n,x,h,b]),P=d.useCallback((e,y)=>{var R;const T=(R=M.current)==null?void 0:R.getBoundingClientRect();if(!T)return l;const fe=e-T.left-a,ge=y-T.top-a;let C=Math.atan2(ge,fe)*180/Math.PI+90;return C<0&&(C+=360),C},[a,l]),de=e=>{u||(e.currentTarget.setPointerCapture(e.pointerId),p(P(e.clientX,e.clientY)))},me=e=>{u||!e.currentTarget.hasPointerCapture(e.pointerId)||p(P(e.clientX,e.clientY))},pe=e=>{u||((e.key==="ArrowRight"||e.key==="ArrowUp")&&(e.preventDefault(),p(l+b)),(e.key==="ArrowLeft"||e.key==="ArrowDown")&&(e.preventDefault(),p(l-b)),e.key==="Home"&&(e.preventDefault(),p(n)),e.key==="End"&&(e.preventDefault(),p(i)))};return r.jsxs("div",{ref:re,role:"slider","aria-label":typeof g=="string"?g:"각도 선택","aria-valuemin":n,"aria-valuemax":i,"aria-valuenow":l,"aria-disabled":u||void 0,tabIndex:u?-1:0,onKeyDown:pe,className:I("inline-flex select-none flex-col items-center gap-2 text-krds-gray-90",u&&"opacity-50",t),...ee,children:[r.jsxs("svg",{ref:M,width:m,height:m,viewBox:`0 0 ${m} ${m}`,className:I(u?"cursor-not-allowed":"cursor-pointer touch-none"),onPointerDown:de,onPointerMove:me,children:[r.jsx("circle",{cx:a,cy:a,r:c,fill:"none",stroke:Z,strokeWidth:4}),S>0?r.jsx("path",{d:`M ${ce} ${ie} A ${c} ${c} 0 ${ue} 1 ${oe} ${le}`,fill:"none",stroke:V,strokeLinecap:"round",strokeWidth:4}):null,r.jsx("circle",{cx:se,cy:ne,r:8,fill:V,stroke:"var(--static-white)",strokeWidth:2,className:"drop-shadow"}),r.jsx("circle",{cx:a,cy:a,r:3,fill:V,opacity:.4})]}),D||g?r.jsxs("div",{className:"grid justify-items-center gap-0.5",children:[g?r.jsx("span",{className:"text-xs font-medium text-krds-gray-60",children:g}):null,D?r.jsxs("span",{className:"font-mono text-sm font-semibold tabular-nums",children:[l,"°"]}):null]}):null]})});f.displayName="AngleSlider";f.__docgenInfo={description:"",methods:[],displayName:"AngleSlider",props:{value:{required:!1,tsType:{name:"number"},description:""},defaultValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"360",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"120",computed:!1}},trackColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'var(--krds-color-light-primary-10)'",computed:!1}},thumbColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'var(--krds-primary-base)'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showValue:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const xe=ye([{library:"Ark UI",component:"Angle Slider",url:"https://ark-ui.com/docs/components/angle-slider",usedFor:["behavior","accessibility","api"],relation:"compared"}]),Ve={title:"Atoms/Inputs/Slider/AngleSlider",component:f,tags:["autodocs","ref:ark-ui"],parameters:{references:xe,layout:"centered",docs:{description:{component:"원형 트랙에서 각도 값을 선택하는 pointer 및 keyboard 지원 입력 컴포넌트입니다."}}},argTypes:{value:{control:{type:"range",min:0,max:360,step:1},table:{category:"State"}},defaultValue:{control:{type:"range",min:0,max:360,step:1},table:{category:"State"}},min:{control:"number",table:{category:"Behavior"}},max:{control:"number",table:{category:"Behavior"}},step:{control:"select",options:[1,5,10,15,30,45,90],table:{category:"Behavior"}},size:{control:{type:"range",min:72,max:220,step:4},table:{category:"Appearance"}},trackColor:{control:"color",table:{category:"Appearance"}},thumbColor:{control:"color",table:{category:"Appearance"}},disabled:{control:"boolean",table:{category:"State"}},showValue:{control:"boolean",table:{category:"Display"}},label:{control:"text",table:{category:"Content"}}},args:{defaultValue:45,min:0,max:360,step:1,size:128,trackColor:"#d8e5fd",thumbColor:"#256ef4",disabled:!1,showValue:!0,label:"각도"}},v={name:"기본"},k={name:"제어 상태",render:()=>{const[t,s]=d.useState(90),o=[0,45,90,180,270];return r.jsxs("div",{className:"grid justify-items-center gap-4",children:[r.jsx(f,{value:t,size:144,label:"회전 각도",onValueChange:s}),r.jsx("div",{className:"flex flex-wrap justify-center gap-2",children:o.map(n=>r.jsxs("button",{type:"button",onClick:()=>s(n),className:"rounded-md border border-krds-gray-30 px-3 py-1.5 text-sm font-medium text-krds-gray-70 hover:bg-krds-gray-5",children:[n,"°"]},n))})]})},parameters:{controls:{disable:!0}}},j={name:"색조 선택",render:()=>{const[t,s]=d.useState(210),o=`hsl(${t}, 80%, 50%)`;return r.jsxs("div",{className:"grid justify-items-center gap-4",children:[r.jsx(f,{value:t,size:144,thumbColor:o,label:"Hue",onValueChange:s}),r.jsx("div",{className:"size-16 rounded-full border border-krds-gray-30 shadow-sm",style:{backgroundColor:o}}),r.jsx("p",{className:"font-mono text-sm text-krds-gray-60",children:o})]})},parameters:{controls:{disable:!0}}},w={name:"스텝",render:()=>r.jsx("div",{className:"flex flex-wrap items-center justify-center gap-6",children:[1,15,45,90].map(t=>r.jsx(f,{defaultValue:t*2,step:t,size:112,label:`${t}° step`},t))}),parameters:{controls:{disable:!0}}},A={name:"비활성",args:{disabled:!0,defaultValue:120}};var z,B,X;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '기본'
}`,...(X=(B=v.parameters)==null?void 0:B.docs)==null?void 0:X.source}}};var Y,E,_;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: '제어 상태',
  render: () => {
    const [angle, setAngle] = useState(90);
    const presets = [0, 45, 90, 180, 270];
    return <div className="grid justify-items-center gap-4">
        <AngleSlider value={angle} size={144} label="회전 각도" onValueChange={setAngle} />
        <div className="flex flex-wrap justify-center gap-2">
          {presets.map(preset => <button key={preset} type="button" onClick={() => setAngle(preset)} className="rounded-md border border-krds-gray-30 px-3 py-1.5 text-sm font-medium text-krds-gray-70 hover:bg-krds-gray-5">
              {preset}°
            </button>)}
        </div>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(_=(E=k.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var W,F,K;j.parameters={...j.parameters,docs:{...(W=j.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '색조 선택',
  render: () => {
    const [hue, setHue] = useState(210);
    const color = \`hsl(\${hue}, 80%, 50%)\`;
    return <div className="grid justify-items-center gap-4">
        <AngleSlider value={hue} size={144} thumbColor={color} label="Hue" onValueChange={setHue} />
        <div className="size-16 rounded-full border border-krds-gray-30 shadow-sm" style={{
        backgroundColor: color
      }} />
        <p className="font-mono text-sm text-krds-gray-60">{color}</p>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(K=(F=j.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var L,O,U;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '스텝',
  render: () => <div className="flex flex-wrap items-center justify-center gap-6">
      {[1, 15, 45, 90].map(step => <AngleSlider key={step} defaultValue={step * 2} step={step} size={112} label={\`\${step}° step\`} />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(U=(O=w.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var G,J,Q;A.parameters={...A.parameters,docs:{...(G=A.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '비활성',
  args: {
    disabled: true,
    defaultValue: 120
  }
}`,...(Q=(J=A.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const Ne=["Default","Controlled","HuePicker","StepVariants","Disabled"];export{k as Controlled,v as Default,A as Disabled,j as HuePicker,w as StepVariants,Ne as __namedExportsOrder,Ve as default};
