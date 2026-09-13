import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as t}from"./utils-DCADjnpI.js";import{d as F}from"./reference-types-4ftiVeOu.js";const L={sent:"✓",delivered:"✓✓",read:"✓✓"};function s({message:x,side:U="start",avatar:d,name:b,time:g,status:r,type:i="text",imageSrc:f,duration:v,color:h}){const a=U==="end",z=h?{backgroundColor:h,color:a?"#fff":"#111827"}:{};return e.jsxs("div",{className:t("flex gap-2.5 items-end mb-3",a?"flex-row-reverse":"flex-row"),children:[d&&e.jsx("div",{className:t("w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-base overflow-hidden",a?"bg-krds-primary-20":"bg-krds-gray-20"),"aria-hidden":"true",children:d.startsWith("http")?e.jsx("img",{src:d,alt:b??"",className:"w-full h-full object-cover"}):d}),e.jsxs("div",{className:t("max-w-[70%] flex flex-col gap-0.5",a?"items-end":"items-start"),children:[b&&e.jsx("span",{className:"text-krds-body-xs text-krds-gray-50 font-medium mb-0.5",children:b}),e.jsxs("div",{className:t("text-krds-body-sm leading-relaxed shadow-sm overflow-hidden",i!=="image"&&"px-3.5 py-2.5",a?"bg-krds-primary-50 text-krds-white rounded-[18px_18px_4px_18px]":"bg-krds-gray-10 text-krds-gray-90 rounded-[18px_18px_18px_4px]"),style:z,children:[i==="image"&&f&&e.jsx("img",{src:f,alt:"이미지",className:t("block max-w-[200px]",a?"rounded-[18px_18px_4px_18px]":"rounded-[18px_18px_18px_4px]")}),i==="voice"&&e.jsxs("div",{className:"flex items-center gap-2.5 px-3.5 py-2.5",children:[e.jsx("span",{className:"text-lg","aria-hidden":"true",children:"🎵"}),e.jsx("div",{className:t("flex-1 h-[3px] rounded-full relative",a?"bg-white/40":"bg-krds-gray-30"),role:"progressbar","aria-label":`음성 메시지 ${v??"0:15"}`,children:e.jsx("div",{className:t("absolute left-0 top-0 h-full w-[40%] rounded-full",a?"bg-krds-white":"bg-krds-primary-50")})}),e.jsx("span",{className:"text-krds-body-xs",children:v??"0:15"})]}),i==="text"&&x]}),e.jsxs("div",{className:"flex gap-1 items-center text-krds-body-xs text-krds-gray-40",children:[g&&e.jsx("span",{children:g}),r&&a&&e.jsx("span",{className:t(r==="read"?"text-krds-primary-50":"text-krds-gray-40"),"aria-label":r==="sent"?"전송됨":r==="delivered"?"전달됨":"읽음",children:L[r]})]})]})]})}s.__docgenInfo={description:"",methods:[],displayName:"ChatBubble",props:{message:{required:!0,tsType:{name:"string"},description:""},side:{required:!1,tsType:{name:"union",raw:"'start' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:"",defaultValue:{value:"'start'",computed:!1}},avatar:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},time:{required:!1,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"union",raw:"'sent' | 'delivered' | 'read'",elements:[{name:"literal",value:"'sent'"},{name:"literal",value:"'delivered'"},{name:"literal",value:"'read'"}]},description:""},type:{required:!1,tsType:{name:"union",raw:"'text' | 'image' | 'voice'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'image'"},{name:"literal",value:"'voice'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},imageSrc:{required:!1,tsType:{name:"string"},description:""},duration:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'bubble'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'bubble'"}]},description:""},color:{required:!1,tsType:{name:"string"},description:""}}};const O=F([{library:"daisyUI",component:"Chat bubble",url:"https://daisyui.com/components/chat/",usedFor:["comparison"],relation:"compared"},{library:"Quasar",component:"Chat Message",url:"https://quasar.dev/vue-components/chat",usedFor:["comparison"],relation:"compared"}]),J={title:"Molecules/Display/ChatBubble",component:s,tags:["autodocs","ref:daisy-ui","ref:quasar"],parameters:{references:O,docs:{description:{component:"\n## ChatBubble\n\n채팅 메시지를 말풍선 형태로 표시하는 컴포넌트입니다.\n보낸 사람(end)과 받는 사람(start) 위치를 지원하며 텍스트·음성 메시지 타입을 제공합니다.\n\n---\n\n### Props\n\n| Prop | Type | Default | 설명 |\n|---|---|---|---|\n| `message` | `string` | - | 메시지 내용 |\n| `side` | `'start' \\| 'end'` | `'start'` | 말풍선 위치 |\n| `avatar` | `string` | - | 아바타 이모지 또는 이니셜 |\n| `name` | `string` | - | 발신자 이름 |\n| `time` | `string` | - | 전송 시간 |\n| `status` | `'sent'\\|'delivered'\\|'read'` | - | 메시지 상태 |\n| `type` | `'text'\\|'voice'` | `'text'` | 메시지 유형 |\n        "}}},argTypes:{side:{control:"select",options:["start","end"],table:{category:"Layout"}},type:{control:"select",options:["text","voice"],table:{category:"Content"}},status:{control:"select",options:["sent","delivered","read"],table:{category:"State"}},color:{control:"color",table:{category:"Appearance"}}},args:{message:"안녕하세요! 오늘 저녁 식사 어때요?",side:"start",avatar:"👤",name:"김민준",time:"오후 6:30"}},n={name:"기본",render:x=>e.jsx("div",{style:{padding:"16px",maxWidth:"400px",background:"#f9fafb",borderRadius:"12px"},children:e.jsx(s,{...x})})},o={name:"대화 흐름",parameters:{docs:{description:{story:"실제 대화처럼 양방향 메시지 흐름을 보여줍니다."}}},render:()=>e.jsxs("div",{style:{padding:"16px",maxWidth:"420px",background:"#f9fafb",borderRadius:"12px"},children:[e.jsx(s,{message:"안녕! 오늘 점심 같이 먹을래?",side:"start",avatar:"🧑",name:"이수진",time:"11:30"}),e.jsx(s,{message:"좋아! 뭐 먹고 싶어?",side:"end",avatar:"👤",time:"11:31",status:"read"}),e.jsx(s,{message:"파스타 어때? 근처에 새로 생긴 곳 있던데",side:"start",avatar:"🧑",name:"이수진",time:"11:31"}),e.jsx(s,{message:"완전 좋아 👍 몇 시에 만날까?",side:"end",avatar:"👤",time:"11:33",status:"read"}),e.jsx(s,{message:"12시 반에 1층 로비에서 보자!",side:"start",avatar:"🧑",name:"이수진",time:"11:33"}),e.jsx(s,{message:"알겠어! 그때 봐 😊",side:"end",avatar:"👤",time:"11:34",status:"delivered"})]})},m={name:"상태 변형",parameters:{docs:{description:{story:"sent → delivered → read 상태에 따른 체크 아이콘 변화입니다."}}},render:()=>e.jsxs("div",{style:{padding:"16px",maxWidth:"400px",background:"#f9fafb",borderRadius:"12px"},children:[e.jsx(s,{message:"전송됨 (✓)",side:"end",time:"10:00",status:"sent"}),e.jsx(s,{message:"전달됨 (✓✓ 회색)",side:"end",time:"10:01",status:"delivered"}),e.jsx(s,{message:"읽음 (✓✓ 파란색)",side:"end",time:"10:02",status:"read"})]})},l={name:"음성 메시지",parameters:{docs:{description:{story:"음성 메시지 타입의 버블입니다."}}},render:()=>e.jsxs("div",{style:{padding:"16px",maxWidth:"400px",background:"#f9fafb",borderRadius:"12px"},children:[e.jsx(s,{message:"",type:"voice",duration:"0:23",side:"start",avatar:"👤",name:"박지현",time:"2:15 PM"}),e.jsx(s,{message:"",type:"voice",duration:"1:02",side:"end",time:"2:16 PM",status:"read"}),e.jsx(s,{message:"들었어! 잘 들렸어 👍",side:"start",avatar:"👤",name:"박지현",time:"2:17 PM"})]})},c={name:"그룹 채팅",parameters:{docs:{description:{story:"여러 참여자가 있는 그룹 채팅 UI입니다."}}},render:()=>e.jsxs("div",{style:{padding:"16px",maxWidth:"440px",background:"#f0f2f5",borderRadius:"12px"},children:[e.jsx("div",{style:{textAlign:"center",fontSize:"11px",color:"#9ca3af",marginBottom:"16px"},children:"오늘"}),e.jsx(s,{message:"모두 안녕! 오늘 회의 몇 시지?",side:"start",avatar:"🦊",name:"김도현",time:"9:00"}),e.jsx(s,{message:"오전 10시요!",side:"start",avatar:"🐻",name:"이서연",time:"9:01"}),e.jsx(s,{message:"알겠어요. 회의실 예약했나요?",side:"start",avatar:"🦊",name:"김도현",time:"9:02"}),e.jsx(s,{message:"네, 2층 A실 예약했습니다 ✅",side:"end",time:"9:05",status:"read"}),e.jsx(s,{message:"감사합니다 👏",side:"start",avatar:"🐻",name:"이서연",time:"9:06"})]})},p={name:"색상 변형",parameters:{docs:{description:{story:"다양한 색상의 말풍선입니다."}}},render:()=>e.jsxs("div",{style:{padding:"16px",maxWidth:"420px",background:"#f9fafb",borderRadius:"12px"},children:[e.jsx(s,{message:"Blue (기본)",side:"end",color:"#3b82f6",time:"1:00"}),e.jsx(s,{message:"Green",side:"end",color:"#10b981",time:"1:01"}),e.jsx(s,{message:"Amber",side:"end",color:"#f59e0b",time:"1:02"}),e.jsx(s,{message:"Red",side:"end",color:"#ef4444",time:"1:03"}),e.jsx(s,{message:"Purple",side:"end",color:"#8b5cf6",time:"1:04"})]})},u={name:"아바타 없음 (심플)",parameters:{docs:{description:{story:"아바타 없이 메시지만 표시하는 심플 스타일입니다."}}},render:()=>e.jsxs("div",{style:{padding:"16px",maxWidth:"400px",background:"#fff",borderRadius:"12px",border:"1px solid #e5e7eb"},children:[e.jsx(s,{message:"안녕하세요!",side:"start",time:"10:00"}),e.jsx(s,{message:"네, 안녕하세요 😊",side:"end",time:"10:01",status:"read"}),e.jsx(s,{message:"오늘 날씨가 정말 좋네요.",side:"start",time:"10:02"}),e.jsx(s,{message:"맞아요! 산책하기 딱 좋은 날씨예요.",side:"end",time:"10:03",status:"delivered"})]})};var y,j,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '기본',
  render: args => <div style={{
    padding: '16px',
    maxWidth: '400px',
    background: '#f9fafb',
    borderRadius: '12px'
  }}>
      <ChatBubble {...args} />
    </div>
}`,...(C=(j=n.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var B,k,R;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '대화 흐름',
  parameters: {
    docs: {
      description: {
        story: '실제 대화처럼 양방향 메시지 흐름을 보여줍니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '16px',
    maxWidth: '420px',
    background: '#f9fafb',
    borderRadius: '12px'
  }}>
      <ChatBubble message="안녕! 오늘 점심 같이 먹을래?" side="start" avatar="🧑" name="이수진" time="11:30" />
      <ChatBubble message="좋아! 뭐 먹고 싶어?" side="end" avatar="👤" time="11:31" status="read" />
      <ChatBubble message="파스타 어때? 근처에 새로 생긴 곳 있던데" side="start" avatar="🧑" name="이수진" time="11:31" />
      <ChatBubble message="완전 좋아 👍 몇 시에 만날까?" side="end" avatar="👤" time="11:33" status="read" />
      <ChatBubble message="12시 반에 1층 로비에서 보자!" side="start" avatar="🧑" name="이수진" time="11:33" />
      <ChatBubble message="알겠어! 그때 봐 😊" side="end" avatar="👤" time="11:34" status="delivered" />
    </div>
}`,...(R=(k=o.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var w,N,_;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '상태 변형',
  parameters: {
    docs: {
      description: {
        story: 'sent → delivered → read 상태에 따른 체크 아이콘 변화입니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '16px',
    maxWidth: '400px',
    background: '#f9fafb',
    borderRadius: '12px'
  }}>
      <ChatBubble message="전송됨 (✓)" side="end" time="10:00" status="sent" />
      <ChatBubble message="전달됨 (✓✓ 회색)" side="end" time="10:01" status="delivered" />
      <ChatBubble message="읽음 (✓✓ 파란색)" side="end" time="10:02" status="read" />
    </div>
}`,...(_=(N=m.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var W,q,S;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '음성 메시지',
  parameters: {
    docs: {
      description: {
        story: '음성 메시지 타입의 버블입니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '16px',
    maxWidth: '400px',
    background: '#f9fafb',
    borderRadius: '12px'
  }}>
      <ChatBubble message="" type="voice" duration="0:23" side="start" avatar="👤" name="박지현" time="2:15 PM" />
      <ChatBubble message="" type="voice" duration="1:02" side="end" time="2:16 PM" status="read" />
      <ChatBubble message="들었어! 잘 들렸어 👍" side="start" avatar="👤" name="박지현" time="2:17 PM" />
    </div>
}`,...(S=(q=l.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var T,M,P;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '그룹 채팅',
  parameters: {
    docs: {
      description: {
        story: '여러 참여자가 있는 그룹 채팅 UI입니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '16px',
    maxWidth: '440px',
    background: '#f0f2f5',
    borderRadius: '12px'
  }}>
      <div style={{
      textAlign: 'center',
      fontSize: '11px',
      color: '#9ca3af',
      marginBottom: '16px'
    }}>오늘</div>
      <ChatBubble message="모두 안녕! 오늘 회의 몇 시지?" side="start" avatar="🦊" name="김도현" time="9:00" />
      <ChatBubble message="오전 10시요!" side="start" avatar="🐻" name="이서연" time="9:01" />
      <ChatBubble message="알겠어요. 회의실 예약했나요?" side="start" avatar="🦊" name="김도현" time="9:02" />
      <ChatBubble message="네, 2층 A실 예약했습니다 ✅" side="end" time="9:05" status="read" />
      <ChatBubble message="감사합니다 👏" side="start" avatar="🐻" name="이서연" time="9:06" />
    </div>
}`,...(P=(M=c.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var A,V,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '색상 변형',
  parameters: {
    docs: {
      description: {
        story: '다양한 색상의 말풍선입니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '16px',
    maxWidth: '420px',
    background: '#f9fafb',
    borderRadius: '12px'
  }}>
      <ChatBubble message="Blue (기본)" side="end" color="#3b82f6" time="1:00" />
      <ChatBubble message="Green" side="end" color="#10b981" time="1:01" />
      <ChatBubble message="Amber" side="end" color="#f59e0b" time="1:02" />
      <ChatBubble message="Red" side="end" color="#ef4444" time="1:03" />
      <ChatBubble message="Purple" side="end" color="#8b5cf6" time="1:04" />
    </div>
}`,...(I=(V=p.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var D,G,E;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '아바타 없음 (심플)',
  parameters: {
    docs: {
      description: {
        story: '아바타 없이 메시지만 표시하는 심플 스타일입니다.'
      }
    }
  },
  render: () => <div style={{
    padding: '16px',
    maxWidth: '400px',
    background: '#fff',
    borderRadius: '12px',
    border: '1px solid #e5e7eb'
  }}>
      <ChatBubble message="안녕하세요!" side="start" time="10:00" />
      <ChatBubble message="네, 안녕하세요 😊" side="end" time="10:01" status="read" />
      <ChatBubble message="오늘 날씨가 정말 좋네요." side="start" time="10:02" />
      <ChatBubble message="맞아요! 산책하기 딱 좋은 날씨예요." side="end" time="10:03" status="delivered" />
    </div>
}`,...(E=(G=u.parameters)==null?void 0:G.docs)==null?void 0:E.source}}};const K=["Default","Conversation","StatusVariants","VoiceMessage","GroupChat","ColorVariants","NoAvatar"];export{p as ColorVariants,o as Conversation,n as Default,c as GroupChat,u as NoAvatar,m as StatusVariants,l as VoiceMessage,K as __namedExportsOrder,J as default};
