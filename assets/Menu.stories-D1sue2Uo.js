import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./iframe-MAmCZlPP.js";import{t as r}from"./jsx-runtime-DXFqSddf.js";var i=t((()=>{})),a,o,s,c=t((()=>{a=e(n(),1),i(),o=r(),s=({mode:e=`horizontal`,items:t,onClick:n})=>{let[r,i]=(0,a.useState)(),[s,c]=(0,a.useState)(null),l=(e,t=!1)=>{e.disabled||(t||!e.children)&&(i(e.key),n?.(e.key))};return(0,o.jsx)(`ul`,{className:`my-menu my-menu-${e}`,children:t.map(e=>(0,o.jsxs)(`li`,{className:`
                        my-menu-item
                        ${e.disabled?`my-menu-item-disabled`:``}
                        ${!e.children&&r===e.key?`my-menu-item-selected`:``}
                    `,onClick:()=>l(e),onMouseEnter:()=>e.children&&c(e.key),onMouseLeave:()=>c(null),children:[e.label,e.children&&s===e.key&&(0,o.jsx)(`ul`,{className:`my-sub-menu`,children:e.children.map(e=>(0,o.jsx)(`li`,{className:`
                                        my-sub-item
                                        ${e.disabled?`my-sub-item-disabled`:``}
                                        ${r===e.key?`my-menu-item-selected`:``}
                                    `,onClick:()=>l(e,!0),children:e.label},e.key))})]},e.key))})},s.__docgenInfo={description:``,methods:[],displayName:`Menu`,props:{mode:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:``,defaultValue:{value:`'horizontal'`,computed:!1}},items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
    label: string
    key: string
    disabled?: boolean
    children?: MenuItem[]
}`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`key`,value:{name:`string`,required:!0}},{key:`disabled`,value:{name:`boolean`,required:!1}},{key:`children`,value:{name:`Array`,elements:[{name:`MenuItem`}],raw:`MenuItem[]`,required:!1}}]}}],raw:`MenuItem[]`},description:``},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string) => void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`void`}}},description:``}}}})),l,u,d,f;t((()=>{c(),l={title:`Components/Menu`,component:s},u=[{label:`高等数学`,key:`高等数学`},{label:`数据结构`,key:`数据结构`,children:[{label:`看不懂`,key:`看不懂`},{label:`听不懂`,key:`听不懂`},{label:`学不会`,key:`学不会`,disabled:!0}]},{label:`普通物理`,key:`普通物理`},{label:`想不到名字`,key:`想不到名字`,disabled:!0}],d={args:{mode:`horizontal`,items:u}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'horizontal',
    items
  }
}`,...d.parameters?.docs?.source}}},f=[`下拉菜单`]}))();export{f as __namedExportsOrder,l as default,d as 下拉菜单};