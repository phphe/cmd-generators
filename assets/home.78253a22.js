import{a as t}from"./index.953f4fb9.js";import{x as a,l as e,n as s,p as l,t as r,F as n,s as i,u as o,z as c}from"./vendor.4877b27b.js";const m={class:"home-view"},d={class:"text-center"},p={class:"text-4xl font-title mt-64"},x={class:"text-2xl font-title mt-3"},f={class:"cmd-list whitespace-normal px-4 mt-4"},v=l("span",{class:"mr-1"},"Available:",-1);const _={data:()=>({cmds:[]}),async created(){this.cmds=(await t.get("/cmd_generators_get_all")).data},render:function(t,_,u,h,b,g){const w=a("MetaInfo"),y=a("Anchor");return e(),s(n,null,[l(w,{title:t.$t("Site_title")},null,8,["title"]),l("div",m,[l("div",d,[l("div",p,r(t.$t("CMD_Generator")),1),l("div",x,r(t.$t("home_cmd_generator_tip")),1),l("div",f,[v,(e(!0),s(n,null,i(b.cmds,(t=>(e(),s(y,{class:"inline-block text-primary-600 mr-1 hover:text-primary-800",to:{name:"cmd-generator",params:{name:t}}},{default:o((()=>[c(r(t),1)])),_:2},1032,["to"])))),256))])])])],64)}};export default _;
