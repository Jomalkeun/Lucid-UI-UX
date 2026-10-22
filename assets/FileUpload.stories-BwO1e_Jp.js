import{j as S}from"./jsx-runtime-D_zvdyIk.js";import{F as E}from"./FileUpload-B7lFjhEx.js";import{r as T}from"./index-BxXVWNx3.js";import{within as h,userEvent as r,expect as i}from"./index-DH-M5T-F.js";import"./utils-DCADjnpI.js";import"./_commonjsHelpers-CqkleIqs.js";const q={title:"Molecules/Forms/FileUpload",component:E,tags:["autodocs"],args:{title:"파일 첨부",acceptedFileTypes:[".pdf"],maxFiles:2},parameters:{layout:"padded"}},t={},a={args:{disabled:!0}},s={args:{files:[{id:"1",name:"sample.pdf",size:2e3,type:"application/pdf",status:"completed"}]}},n={render:function(){const[e,p]=T.useState([]);return S.jsx(E,{acceptedFileTypes:[".pdf","image/*"],files:e,onFilesChange:p,onFileUpload:async()=>{}})},play:async({canvasElement:o})=>{const e=h(o),p=o.querySelector('input[type="file"]');await r.upload(p,[new File(["one"],"one.pdf",{type:"application/pdf"}),new File(["two"],"two.pdf",{type:"application/pdf"})]),await i(await e.findAllByText("완료")).toHaveLength(2),await r.click(e.getByRole("button",{name:"one.pdf 삭제"})),await i(e.queryByText("one.pdf")).not.toBeInTheDocument()}};var c,l,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,u,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var y,F,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    files: [{
      id: '1',
      name: 'sample.pdf',
      size: 2000,
      type: 'application/pdf',
      status: 'completed'
    }]
  }
}`,...(w=(F=s.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var g,v,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: function Demo() {
    const [files, setFiles] = useState<UploadFile[]>([]);
    return <FileUpload acceptedFileTypes={['.pdf', 'image/*']} files={files} onFilesChange={setFiles} onFileUpload={async () => {}} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvasElement.querySelector('input[type="file"]') as HTMLInputElement;
    await userEvent.upload(input, [new File(['one'], 'one.pdf', {
      type: 'application/pdf'
    }), new File(['two'], 'two.pdf', {
      type: 'application/pdf'
    })]);
    await expect(await canvas.findAllByText('완료')).toHaveLength(2);
    await userEvent.click(canvas.getByRole('button', {
      name: 'one.pdf 삭제'
    }));
    await expect(canvas.queryByText('one.pdf')).not.toBeInTheDocument();
  }
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const j=["Default","Alternate","AdditionalState","Interactive"];export{s as AdditionalState,a as Alternate,t as Default,n as Interactive,j as __namedExportsOrder,q as default};
