import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./iframe-BU_7TELo.js";import{t as r}from"./jsx-runtime-DXFqSddf.js";var i=t((()=>{})),a,o,s,c=t((()=>{a=e(n(),1),i(),o=r(),s=({options:e,defaultValue:t=[],bordercolor:n=`#85cff9`,backgroundColor:r=`#b9d9f5`,onChange:i})=>{let[s,c]=(0,a.useState)(t),l=(e,t)=>{if(t)return;let n=s.includes(e)?s.filter(t=>t!==e):[...s,e];c(n),i?.(n)};return(0,o.jsx)(`div`,{className:`my-multiselect`,style:{borderColor:n,backgroundColor:r},children:e.map(e=>(0,o.jsxs)(`label`,{className:`my-multi-item`,children:[(0,o.jsx)(`input`,{type:`checkbox`,className:`my-multi-checkbox`,checked:s.includes(e.value),disabled:e.disabled,onChange:()=>l(e.value,e.disabled)}),(0,o.jsx)(`span`,{className:`my-multi-label`,children:e.label})]},e.value))})},s.__docgenInfo={description:``,methods:[],displayName:`Multiselect`,props:{options:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
    label: string
    value: string
    disabled?: boolean

}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`value`,value:{name:`string`,required:!0}},{key:`disabled`,value:{name:`boolean`,required:!1}}]}}],raw:`Option[]`},description:``},defaultValue:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``,defaultValue:{value:`[]`,computed:!1}},bordercolor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"#85cff9"`,computed:!1}},backgroundColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"#b9d9f5"`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(values: string[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`values`}],return:{name:`void`}}},description:``}}}})),l,u,d;t((()=>{c(),l={title:`Components/Multiselect`,component:s},u={args:{options:[{label:`1`,value:`1`},{label:`2`,value:`2`},{label:`3`,value:`3`,disabled:!0},{label:`4`,value:`4`}],defaultValue:[`1`]}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "1",
      value: "1"
    }, {
      label: "2",
      value: "2"
    }, {
      label: "3",
      value: "3",
      disabled: true
    }, {
      label: "4",
      value: "4"
    }],
    defaultValue: ["1"]
  }
}`,...u.parameters?.docs?.source}}},d=[`基础多选框`]}))();export{d as __namedExportsOrder,l as default,u as 基础多选框};