import{a as e,d9 as i,h as s,i as t,o as r,j as a,k as o,w as n}from"./index.247b4d5c.js";import"./xlsx.a48e520c.js";import"./index.1c7fa85c.js";import"./Trigger.455696d5.js";import"./omit.c3408158.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.1146322b.js";import"./CheckOutlined.24bcfa51.js";import{s as m}from"./index.abd25a23.js";import"./colors.f2807cc8.js";import"./RightOutlined.f62c5ce2.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.7125d4e8.js";import"./index.d9d25bcd.js";import"./index.a172b251.js";import"./index.f0bc60c2.js";import"./UpOutlined.9349b0f9.js";import"./index.0a240057.js";import"./index.a3477a19.js";import"./index.855b8b9a.js";import"./index.c667da3b.js";import"./useDebounce.bc3eb614.js";import"./useEventListener.2200551d.js";import"./useBreakpoint.a030ce03.js";import{C as d}from"./index.04660b25.js";import"./index.04a7b444.js";import"./tsxHelper.907e86d2.js";import"./index.81ea157a.js";import"./index.e5f3b34f.js";import{T as l}from"./index.25d2f9a3.js";const p=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:s})=>i(l,{value:e[s],onChange:i=>{e[s]=i}})}];var c=e({components:{BasicForm:m,CollapseContainer:d},setup(){const{createMessage:e}=s();return{schemas:p,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});const u={class:"m-4"};c.render=function(e,i,s,m,d,l){const p=t("BasicForm"),c=t("CollapseContainer");return r(),a("div",u,[o(c,{title:"富文本表单"},{default:n((()=>[o(p,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])};export default c;