import{a as e,d9 as s,ac as i,h as o,i as r,o as t,j as n,k as a,w as p}from"./index.247b4d5c.js";import"./xlsx.a48e520c.js";import"./index.1c7fa85c.js";import"./Trigger.455696d5.js";import"./omit.c3408158.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.1146322b.js";import"./CheckOutlined.24bcfa51.js";import{s as l}from"./index.abd25a23.js";import"./colors.f2807cc8.js";import"./RightOutlined.f62c5ce2.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.7125d4e8.js";import"./index.d9d25bcd.js";import"./index.a172b251.js";import"./index.f0bc60c2.js";import"./UpOutlined.9349b0f9.js";import"./index.0a240057.js";import"./index.a3477a19.js";import"./index.855b8b9a.js";import"./index.c667da3b.js";import"./useDebounce.bc3eb614.js";import"./useEventListener.2200551d.js";import"./useBreakpoint.a030ce03.js";import{C as d}from"./index.04660b25.js";import"./index.04a7b444.js";import"./tsxHelper.907e86d2.js";import"./index.81ea157a.js";import"./index.e5f3b34f.js";import{u as m}from"./useForm.7dd57826.js";const c=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:o})=>s(i,{placeholder:"请输入",value:e[o],onChange:s=>{e[o]=s.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}];var u=e({components:{BasicForm:l,CollapseContainer:d},setup(){const{createMessage:e}=o(),[s,{setProps:i}]=m({labelWidth:120,schemas:c,actionColOptions:{span:24}});return{register:s,schemas:c,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},setProps:i}}});const f={class:"m-4"};u.render=function(e,s,i,o,l,d){const m=r("a-input"),c=r("BasicForm"),u=r("CollapseContainer");return t(),n("div",f,[a(u,{title:"自定义表单"},{default:p((()=>[a(c,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:p((({model:e,field:s})=>[a(m,{value:e[s],"onUpdate:value":i=>e[s]=i,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit"])])),_:1})])};export default u;