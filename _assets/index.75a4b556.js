import{a as e,s as t,R as s,ad as r,f as n,y as a}from"./index.247b4d5c.js";import{D as i}from"./index.67524836.js";import{M as o}from"./index.b4629556.js";import{g as d}from"./tsxHelper.907e86d2.js";import{I as l}from"./index.81ea157a.js";const m={trigger:{type:[Array],default:()=>["contextmenu"]}};var p=e({name:"Dropdown",props:Object.assign({},m,{dropMenuList:{type:Array,default:()=>[]},selectedKeys:{type:Array,default:()=>[]}}),emits:["menuEvent"],setup(e,{slots:a,emit:m,attrs:p}){const u=t((()=>e.dropMenuList));function c({key:e}){const t=n(u).find((t=>`${t.event}`==`${e}`));m("menuEvent",t)}return()=>s(i,{trigger:e.trigger,...p},{default:()=>s("span",null,d(a)),overlay:()=>s(o,{onClick:c,selectedKeys:e.selectedKeys},(()=>s(r,null,n(u).map((e=>{const{disabled:t,icon:n,text:a,divider:i,event:d}=e;return[s(o.Item,{key:`${d}`,disabled:t},(()=>s(r,null,n&&s(l,{icon:n}),s("span",{class:"ml-1"},a)))),i&&s(o.Divider,{key:`d-${d}`})]})))))})}});a(p);export{p as D};