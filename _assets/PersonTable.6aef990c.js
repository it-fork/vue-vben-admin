import{a as e,i as t,o as i,j as o,k as n,w as s,p as a}from"./index.247b4d5c.js";import"./xlsx.a48e520c.js";import"./index.40b13933.js";import"./index.1c7fa85c.js";import"./Trigger.455696d5.js";import"./omit.c3408158.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.1146322b.js";import"./CheckOutlined.24bcfa51.js";import"./index.abd25a23.js";import"./colors.f2807cc8.js";import"./index.67524836.js";import"./RightOutlined.f62c5ce2.js";import"./index.b4629556.js";import"./types.e649c0d4.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.7125d4e8.js";import"./_baseFor.f4e5f03f.js";import"./index.d9d25bcd.js";import"./index.a172b251.js";import"./index.510f2512.js";import"./index.f0bc60c2.js";import"./UpOutlined.9349b0f9.js";import"./LeftOutlined.850d4c82.js";import"./index.0a240057.js";import"./index.a3477a19.js";import"./index.f5b6f6ca.js";import"./index.855b8b9a.js";import"./index.0eb42b4f.js";import"./zh_CN.0242bd16.js";import{T as r}from"./TableAction.bb21c0f7.js";import"./index.c667da3b.js";import"./CaretDownFilled.141f08ee.js";import"./CheckOutlined.fc1d12c2.js";import"./CloseOutlined.a9ad2298.js";import{s as d,a as c,r as l}from"./EditTableHeaderIcon.eeba2a97.js";import"./DownOutlined.5d128459.js";import"./FullscreenOutlined.abec5655.js";import"./LeftOutlined.acd998d4.js";import"./functional.45616f15.js";import"./RedoOutlined.cfe96353.js";import"./RightOutlined.3ce10c4b.js";import"./SettingOutlined.10ef9f35.js";import"./useTimeout.08d45835.js";import"./useDebounce.bc3eb614.js";import"./useEventListener.2200551d.js";import"./useBreakpoint.a030ce03.js";import"./index.04a7b444.js";import"./tsxHelper.907e86d2.js";import"./index.81ea157a.js";import"./index.e5f3b34f.js";import"./useForm.7dd57826.js";import"./index.fa30f249.js";import"./useModalContext.b9557c70.js";import"./domUtils.1dbfb09e.js";import"./useFullScreen.2f66b379.js";import"./uuid.40269c00.js";import"./useWindowSizeFn.cb4f5fb4.js";import"./useExpose.e5b57157.js";import"./index.ad93746f.js";import{u as m}from"./useTable.8408e105.js";const p=[{title:"成员姓名",dataIndex:"name",customRender:l({dataIndex:"name",placeholder:"请输入成员姓名"})},{title:"工号",dataIndex:"no",customRender:l({dataIndex:"no",placeholder:"请输入工号"})},{title:"所属部门",dataIndex:"dept",customRender:l({dataIndex:"dept",placeholder:"请输入所属部门"})}],u=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}];var b=e({components:{BasicTable:d,EditTableHeaderIcon:c,TableAction:r},setup(){const[e,{getDataSource:t}]=m({columns:p,showIndexColumn:!1,dataSource:u,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function i(e){e.editable=!0}function o(e){if(e.editable=!1,e.onCancel&&e.onCancel(),e.isNew){const i=t(),o=i.findIndex((t=>t.key===e.key));i.splice(o,1)}}function n(e){e.editable=!1,e.onSubmit&&e.onSubmit()}return{registerTable:e,handleEdit:i,createActions:function(e,t){return e.editable?[{label:"保存",onClick:n.bind(null,e,t)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:o.bind(null,e,t)}}]:[{label:"编辑",onClick:i.bind(null,e)},{label:"删除"}]},handleAdd:function(){t().push({name:"",no:"",dept:"",editable:!0,isNew:!0})},getDataSource:t}}});const j=a("新增成员");b.render=function(e,a,r,d,c,l){const m=t("TableAction"),p=t("BasicTable"),u=t("a-button");return i(),o("div",null,[n(p,{onRegister:e.registerTable},{action:s((({record:t,column:i})=>[n(m,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister"]),n(u,{block:"",class:"mt-5",type:"dashed",onClick:e.handleAdd},{default:s((()=>[j])),_:1},8,["onClick"])])};export default b;