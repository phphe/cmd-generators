System.register(["./index-legacy.a1c3bfff.js","./vendor-legacy.fbd811cc.js"],(function(t){"use strict";var e,a,s,c,n,r,i,l,o,d,m;return{setters:[function(t){e=t.u,a=t.a},function(t){s=t.x,c=t.l,n=t.n,r=t.p,i=t.t,l=t.F,o=t.s,d=t.u,m=t.z}],execute:function(){const u={class:"home-view"},f={class:"text-center"},x={class:"text-4xl font-title mt-64"},v={class:"text-2xl font-title mt-3"},_={class:"cmd-list whitespace-normal px-4 mt-4"},g=r("span",{class:"mr-1"},"Available:",-1);t("default",{data:()=>({cmds:[]}),async created(){e(this.$t("Site_title"),this),this.cmds=(await a.get("/cmd_generators_get_all")).data}}).render=function(t,e,a,h,p,y){const b=s("Anchor");return c(),n("div",u,[r("div",f,[r("div",x,i(t.$t("CMD_Generator")),1),r("div",v,i(t.$t("home_cmd_generator_tip")),1),r("div",_,[g,(c(!0),n(l,null,o(p.cmds,(t=>(c(),n(b,{class:"inline-block text-primary-600 mr-1 hover:text-primary-800",to:{name:"cmd-generator",params:{name:t}}},{default:d((()=>[m(i(t),1)])),_:2},1032,["to"])))),256))])])])}}}}));