import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./iframe-MAmCZlPP.js";import{t as r}from"./jsx-runtime-DXFqSddf.js";var i=t((()=>{})),a,o,s,c=t((()=>{a=e(n(),1),i(),o=r(),s=({items:e,defaultActiveKey:t,onChange:n})=>{let[r,i]=(0,a.useState)(t||e[0]?.key),s=(e,t)=>{t||(i(e),n?.(e))},c=e.find(e=>e.key===r)?.content;return(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`div`,{className:`my-tabs`,children:e.map(e=>(0,o.jsx)(`div`,{className:`my-tab
                            ${r===e.key?`my-tab-active`:``}
                            ${e.disabled?`my-tab-disabled`:``}
                        `,onClick:()=>s(e.key,e.disabled),children:e.label},e.key))}),(0,o.jsx)(`div`,{className:`my-tab-content`,children:c})]})},s.__docgenInfo={description:``,methods:[],displayName:`Tabs`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
    label: string
    key: string
    disabled?: boolean
    content: React.ReactNode 
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`key`,value:{name:`string`,required:!0}},{key:`disabled`,value:{name:`boolean`,required:!1}},{key:`content`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}}]}}],raw:`TabItem[]`},description:``},defaultActiveKey:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string) => void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`void`}}},description:``}}}})),l,u,d,f;t((()=>{c(),l=r(),u={title:`Components/Tabs`,component:s},d={args:{items:[{label:`111`,key:`111`,content:(0,l.jsx)(`div`,{children:`111内容`})},{label:`222`,key:`222`,content:(0,l.jsx)(`div`,{children:`222内容`})},{label:`333`,key:`333`,disabled:!0,content:(0,l.jsx)(`div`,{children:`333内容`})},{label:`444`,key:`444`,content:(0,l.jsx)(`div`,{children:`444内容`})}]}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "111",
      key: "111",
      content: <div>111内容</div>
    }, {
      label: "222",
      key: "222",
      content: <div>222内容</div>
    }, {
      label: "333",
      key: "333",
      disabled: true,
      content: <div>333内容</div>
    }, {
      label: "444",
      key: "444",
      content: <div>444内容</div>
    }]
  }
}`,...d.parameters?.docs?.source}}},f=[`基础标签页`]}))();export{f as __namedExportsOrder,u as default,d as 基础标签页};