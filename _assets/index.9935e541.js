import{d6 as e,a as r,r as i,u as o,O as t,F as s,cM as a,dg as n,i as d,o as m,j as l,ad as p,aH as c,aI as f,aJ as j,k as u,w as b,p as x,n as g}from"./index.247b4d5c.js";import"./xlsx.a48e520c.js";import"./index.40b13933.js";import"./index.1c7fa85c.js";import"./Trigger.455696d5.js";import"./omit.c3408158.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.1146322b.js";import"./CheckOutlined.24bcfa51.js";import"./index.abd25a23.js";import"./colors.f2807cc8.js";import"./index.67524836.js";import"./RightOutlined.f62c5ce2.js";import"./index.b4629556.js";import"./types.e649c0d4.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.7125d4e8.js";import"./_baseFor.f4e5f03f.js";import"./index.d9d25bcd.js";import"./index.a172b251.js";import"./index.510f2512.js";import"./index.f0bc60c2.js";import"./UpOutlined.9349b0f9.js";import"./LeftOutlined.850d4c82.js";import"./index.0a240057.js";import"./index.a3477a19.js";import"./index.f5b6f6ca.js";import"./index.855b8b9a.js";import"./index.0eb42b4f.js";import"./zh_CN.0242bd16.js";import{T as E}from"./TableAction.bb21c0f7.js";import"./index.c667da3b.js";import"./CaretDownFilled.141f08ee.js";import"./CheckOutlined.fc1d12c2.js";import"./CloseOutlined.a9ad2298.js";import{s as y}from"./EditTableHeaderIcon.eeba2a97.js";import"./DownOutlined.5d128459.js";import"./FullscreenOutlined.abec5655.js";import"./LeftOutlined.acd998d4.js";import"./functional.45616f15.js";import"./RedoOutlined.cfe96353.js";import"./RightOutlined.3ce10c4b.js";import"./SettingOutlined.10ef9f35.js";import"./useTimeout.08d45835.js";import"./useDebounce.bc3eb614.js";import"./useEventListener.2200551d.js";import"./useBreakpoint.a030ce03.js";import"./useDescription.7b72e95d.js";import"./index.5f2085a7.js";import"./index.04a7b444.js";import"./tsxHelper.907e86d2.js";import"./index.81ea157a.js";import"./index.e5f3b34f.js";import"./useForm.7dd57826.js";import{u as R}from"./index.fa30f249.js";import"./useModalContext.b9557c70.js";import"./domUtils.1dbfb09e.js";import"./useFullScreen.2f66b379.js";import"./uuid.40269c00.js";import"./useWindowSizeFn.cb4f5fb4.js";import"./useExpose.e5b57157.js";import"./index.ad93746f.js";import{u as T}from"./useTable.8408e105.js";import{getColumns as C}from"./data.ab648cea.js";import O from"./DetailModal.d23b9320.js";var D;(D||(D={})).Error="/error";var h=r({name:"ErrorHandler",components:{DetailModal:O,BasicTable:y,TableAction:E},setup(){const r=i(),d=i([]),{t:m}=o(),[l,{setTableData:p}]=T({title:m("sys.errorLog.tableTitle"),columns:C(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[c,{openModal:f}]=R();return t((()=>n.getErrorInfoState),(e=>{s((()=>{p(a(e))}))}),{immediate:!0}),{register:l,registerModal:c,handleDetail:function(e){r.value=e,f(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){d.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:async function(){await e.request({url:D.Error,method:"GET"})},imgListRef:d,rowInfoRef:r,t:m}}});const k={class:"p-4"};h.render=function(e,r,i,o,t,s){const a=d("DetailModal"),n=d("a-button"),E=d("TableAction"),y=d("BasicTable");return m(),l("div",k,[(m(!0),l(p,null,c(e.imgListRef,(e=>f((m(),l("img",{key:e,src:e},null,8,["src"])),[[j,!1]]))),128)),u(a,{info:e.rowInfoRef,onRegister:e.registerModal},null,8,["info","onRegister"]),u(y,{onRegister:e.register,class:"error-handle-table"},{toolbar:b((()=>[u(n,{onClick:e.fireVueError,type:"primary"},{default:b((()=>[x(g(e.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),u(n,{onClick:e.fireResourceError,type:"primary"},{default:b((()=>[x(g(e.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),u(n,{onClick:e.fireAjaxError,type:"primary"},{default:b((()=>[x(g(e.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:b((({record:r})=>[u(E,{actions:[{label:e.t("sys.errorLog.tableActionDesc"),onClick:e.handleDetail.bind(null,r)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default h;