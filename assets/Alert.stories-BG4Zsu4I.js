import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./iframe-BU_7TELo.js";import{t as r}from"./jsx-runtime-DXFqSddf.js";var i=t((()=>{})),a,o,s,c=t((()=>{a=e(n(),1),i(),o=r(),s=({type:e,message:t,description:n,closable:r=!1,onClose:i})=>{let[s,c]=(0,a.useState)(!0);return s?(0,o.jsxs)(`div`,{className:`my-alert my-alert-${e}`,children:[(0,o.jsxs)(`div`,{className:`my-alert-content`,children:[(0,o.jsx)(`div`,{className:`my-alert-message`,children:t}),n&&(0,o.jsx)(`div`,{className:`my-alert-description`,children:n})]}),r&&(0,o.jsx)(`button`,{className:`my-alert-close`,onClick:()=>{c(!1),i?.()},children:`×`})]}):null},s.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{type:{required:!0,tsType:{name:`union`,raw:`'success' | 'info' | 'warning' | 'error'`,elements:[{name:`literal`,value:`'success'`},{name:`literal`,value:`'info'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'error'`}]},description:``},message:{required:!0,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},closable:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})),l,u,d,f,p,m,h,g;t((()=>{c(),l={title:`Components/Alert`,component:s},u={args:{type:`success`,message:`成功!`}},d={args:{type:`info`,message:`您收到了一条新消息`}},f={args:{type:`warning`,message:`警告！`}},p={args:{type:`error`,message:`错误！`}},m={args:{type:`success`,message:`提交成功`,description:`您的表单已经成功提交`}},h={args:{type:`info`,message:`可关闭提示`,closable:!0}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success',
    message: '成功!'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    message: '您收到了一条新消息'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    message: '警告！'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'error',
    message: '错误！'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success',
    message: '提交成功',
    description: '您的表单已经成功提交'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    message: '可关闭提示',
    closable: true
  }
}`,...h.parameters?.docs?.source}}},g=[`成功提示`,`信息提示`,`警告提示`,`错误提示`,`可描述`,`可关闭`]}))();export{g as __namedExportsOrder,l as default,d as 信息提示,h as 可关闭,m as 可描述,u as 成功提示,f as 警告提示,p as 错误提示};