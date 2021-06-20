var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(t,o,s)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s,i=(e,t)=>{for(var o in t||(t={}))a.call(t,o)&&n(e,o,t[o]);if(s)for(var o of s(t))r.call(t,o)&&n(e,o,t[o]);return e},l=(e,s)=>t(e,o(s));import{c,a as d,r as u,b as h,m as p,d as m,o as f,g as b,C as g,e as y,f as v,h as _,i as w,j as x,k,l as $,n as C,w as L,v as E,p as P,q as I,t as S,F as B,s as M,u as A,x as V,y as D,z as O,T,A as R,B as H,D as U,E as j,G,H as W,I as N,J as z,K as q,L as K,M as F,N as J,O as Q}from"./vendor.ddcc8ccd.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const s=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,r)=>{const n=new URL(e,s);if(self[t].moduleMap[n])return o(self[t].moduleMap[n]);const i=new Blob([`import * as m from '${n}';`,`${t}.moduleMap['${n}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){r(new Error(`Failed to import: ${e}`)),a(l)},onload(){o(self[t].moduleMap[n]),a(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/assets/");let Y;const X={},Z=function(e,t){if(!t)return e();if(void 0===Y){const e=document.createElement("link").relList;Y=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in X)return;X[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":Y,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))},ee=[{name:"home",path:"/",component:()=>Z((()=>__import__("./home.06871c96.js")),["/assets/home.06871c96.js","/assets/vendor.ddcc8ccd.js"]),meta:{layout:"unset"}},{name:"cmd-generator",path:"/cmd-generators/:name",component:()=>Z((()=>__import__("./cmd-generator.4355f9a7.js")),["/assets/cmd-generator.4355f9a7.js","/assets/cmd-generator.d8242b21.css","/assets/vendor.ddcc8ccd.js"])}],te=c({history:d(),routes:ee}),oe=u(Math.random().toString()),se=()=>{oe.value=Math.random().toString()},ae=h({tableOfContents:{visible:!1,value:[]}});const re=m({locale:"en",fallbackLocale:"en",messages:{en:{Site_title:"CMD Generator",Home:"Home",CMD_Generator:"CMD Generator",Languages:"Languages",Copy:"Copy",Copied:"Copied",Please_select:"Please select",Available:"Available",cmd_generator_page_top_tip:"This tool helps you generate commands based on your selections and you can paste into terminal.",home_cmd_generator_tip:"Generate terminal commands based on your selections.",Contents:"Contents",guide:"guide",usage:"usage",assistant:"assistant"},zh:{Site_title:"命令生成器",Home:"首页",CMD_Generator:"命令生成器",Languages:"语言",Copy:"复制",Copied:"已复制",Please_select:"请选择",Available:"可用的",cmd_generator_page_top_tip:"通过此工具, 您可以输入参数生成命令, 粘贴到终端.",home_cmd_generator_tip:"通过此工具, 您可以输入参数生成命令, 粘贴到终端.",Contents:"目录",guide:"指南",usage:"教程",assistant:"助手"}}});function ne(e,t){const o=f(e,["name","params","query"]);return t===re.global.fallbackLocale?(o.params&&(o.params=i({},o.params),delete o.params.locale),o.name=o.name.replace(/\.i18n$/,"")):(o.params||(o.params={}),o.params.locale=t,o.name.match(/\.i18n$/)||(o.name=o.name+".i18n")),o}const ie="production";var le={ENV:ie,IS_DEVLOPMENT:false,IS_PRODUCTION:true,API_BASE_URL:b().__IS_GENERATED__?"/api":"//localhost:8000/api",API_TIMEOUT:2e4,ANALYTICS_ID:"G-Q5B4QK5XJN"};const ce=g.create({baseURL:le.API_BASE_URL,timeout:le.API_TIMEOUT,withCredentials:!1});var de=x({components:{},setup(e){const t=function(){const e=(e=1920,t=1080)=>({innerWidth:b().innerWidth||e,innerHeight:b().innerHeight||t}),t=u(e()),o=()=>{t.value=e()};return y((()=>{o(),v(window,"resize",o)})),_((()=>{w(window,"resize",o)})),t}(),o=k((()=>t.value.innerWidth<760));return{routeViewKey:oe,reloadRouteView:se,sm:o}},data:()=>({state:ae,cmds:[],sidebarVisible:!1}),async created(){this.cmds=(await ce.get("/cmd_generators_get_all")).data},methods:{switchLocale(e){this.$router.push(ne(this.$route,e))}}});const ue={class:"default-layout fixed w-full h-full flex"},he={class:"flex-grow overflow-auto"},pe={class:"contents-block p-4 border-b-2"},me={class:"text-xl"},fe={class:"list-decimal pl-4 mt-1"},be={class:"main-title text-2xl text-gray-700 mt-32 ml-16"},ge={class:"cmd-list whitespace-normal px-4 mt-4"},ye={class:"mr-1"},ve={class:"flex-shrink-0 py-2 text-center"},_e={class:"shadow rounded text-sm"},we=O("English"),xe=O("简体中文"),ke={class:"main-body flex-grow overflow-auto"},$e={class:"px-4"},Ce=P("div",{class:"py-10 text-center"},null,-1);de.render=function(e,t,o,s,a,r){const n=V("Icon"),i=V("Anchor"),l=V("Popup"),c=V("router-view"),d=V("Btn"),u=D("anchor");return $(),C("div",ue,[L(P("div",{class:["main-sidebar flex-shrink-0 w-72 h-full overflow-hidden font-title flex flex-col",{"fixed bg-white z-10 border-r-2":e.sm}]},[e.sm?($(),C("div",{key:0,class:"text-center p-2 bg-gray-50 pointer",onClick:t[1]||(t[1]=t=>e.sidebarVisible=!1)},[P(n,{name:"arrow_back"})])):I("",!0),P("div",he,[L(P("div",pe,[P("div",me,S(e.$t("Contents")),1),P("ul",fe,[($(!0),C(B,null,M(e.state.tableOfContents.value,(e=>($(),C("li",null,[L(P("a",{class:"text-primary-600 hover:text-primary-800",href:e.url},S(e.text),9,["href"]),[[u]])])))),256))])],512),[[E,e.state.tableOfContents.visible]]),P("div",be,S(e.$t("CMD_Generator")),1),P("div",ge,[P("span",ye,S(e.$t("Available"))+":",1),($(!0),C(B,null,M(e.cmds,(e=>($(),C(i,{class:"inline-block text-primary-600 mr-1 hover:text-primary-800",to:{name:"cmd-generator",params:{name:e}}},{default:A((()=>[O(S(e),1)])),_:2},1032,["to"])))),256))])]),P("div",ve,[P(l,{class:"text-sm text-gray-500",caret:"",menu:"",hover:""},{card:A((()=>[P("div",_e,[P(i,{class:"block py-2 px-3 hover:bg-gray-100",onClick:t[2]||(t[2]=t=>e.switchLocale("en"))},{default:A((()=>[we])),_:1}),P(i,{class:"block py-2 px-3 hover:bg-gray-100",onClick:t[3]||(t[3]=t=>e.switchLocale("zh"))},{default:A((()=>[xe])),_:1})])])),default:A((()=>[O(S(e.$t("Languages")),1)])),_:1})])],2),[[E,!e.sm||e.sidebarVisible]]),P("div",ke,[P("div",$e,[P(c,{key:e.routeViewKey})]),Ce]),e.sm?($(),C(d,{key:0,class:"fixed bottom-5 right-2 roundedbg-white hover:bg-gray-100 text-gray-800 border border-gray-300 pt-0 pb-0 h-10",paddingClass:"px-2",onClick:t[4]||(t[4]=t=>e.sidebarVisible=!e.sidebarVisible)},{default:A((()=>[P(n,{name:"menu"})])),_:1})):I("",!0)])};var Le=x({props:{},data:()=>({locales:re.global.availableLocales.slice()}),computed:{hrefItems(){return this.$route.name?this.locales.map((e=>({locale:e,href:location.origin+this.$router.resolve(ne(this.$route,e)).href}))):[]}},mounted(){const e=()=>{document.documentElement&&document.documentElement.setAttribute("lang",re.global.locale)};e(),this.$watch((()=>re.global.locale),e)}});Le.render=function(e,t,o,s,a,r){return $(),C(T,{to:"head"},[($(!0),C(B,null,M(e.hrefItems,(e=>($(),C("link",{rel:"alternate",href:e.href,hreflang:e.locale},null,8,["href","hreflang"])))),256))])};const Ee=h({title:"",description:"",keywords:"",author:""});try{for(const e of["title",'meta[name="description"]','meta[name="keywords"]','meta[name="author"]']){const t=document.head.querySelector(e);t&&t.remove()}}catch(Ye){}const Pe=Se("title"),Ie=Se("keywords");function Se(e){return(t,o)=>{Ee[e]=t;const s=o||R();if(!s)throw new Error(`HTMLHead use ${e}: the second argument is required when called outside of setup`);_((()=>{Ee[e]===t&&(Ee[e]="")}),s)}}var Be=x({data:()=>({visible:!1,progress:0}),created(){let e=!1;this.$router.afterEach(((t,o,s)=>{e?this.complete():(e=!0,this.$router.beforeEach(((e,t)=>{this.show()})))}))},methods:{show(){clearTimeout(this._tm2);const e=()=>{this.progress<.95&&(this.visible=!0,this._tm=setTimeout((()=>{this.progress+=.05,e()}),200*Math.random()+10))};e()},complete(){clearTimeout(this._tm),this.progress=1,this._tm2=setTimeout((()=>{this.visible=!1}),300)}}});const Me={class:"page-progress-bar relative fixed top-0 w-full left-0"},Ae={class:"overflow-hidden h-1 mb-4 text-xs flex bg-primary-200"};Be.render=function(e,t,o,s,a,r){return e.visible?($(),C(T,{key:0,to:"body"},[P("div",Me,[P("div",Ae,[P("div",{class:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500",style:{width:100*e.progress+"%"}},null,4)])])])):I("",!0)};var Ve=x({components:{default_layout:de,I18n:Le,HTMLHead:function(){return P(T,{to:"head"},{default:()=>[Ee.title&&P("title",null,[Ee.title]),Ee.description&&P("meta",{name:"description",content:Ee.description},null),Ee.keywords&&P("meta",{name:"keywords",content:Ee.keywords},null),Ee.author&&P("meta",{name:"author",content:Ee.author},null)]})},PageProgressBar:Be},data:()=>({routeReady:!1}),computed:{layout(){let{layout:e}=this.$route.meta;return"unset"!==e&&this.routeReady?(e=e||"default",`${e}_layout`):"router-view"}},created(){const e=this.$watch("$route",(()=>{this.routeReady=!0,e()}))}});Ve.render=function(e,t,o,s,a,r){const n=V("I18n"),i=V("HTMLHead"),l=V("PageProgressBar");return $(),C(B,null,[P(n),($(),C(H(e.layout))),P(i),P(l)],64)};const De={mounted(e){v(e,"click",(t=>{const o=e.getAttribute("href");if(null==o?void 0:o.startsWith("#")){let e=document.getElementById(o.substr(1));e||(e=document.getElementsByName(o.substr(1))[0]),e&&null!=e.scrollIntoView&&(t.preventDefault(),e.scrollIntoView({behavior:"smooth"}),history.pushState(null,"",o))}}))}};var Oe=x({props:{name:{type:String},size:{type:Number,default:20}}});const Te={class:"icon inline-flex items-center"},Re=O("​");Oe.render=function(e,t,o,s,a,r){return $(),C("span",Te,[Re,P("span",{class:"icon-icon material-icons",style:{"font-size":e.size+"px"}},S(e.$props.name),5)])};var He=x({inheritAttrs:!1,props:{underline:{type:Boolean}},computed:{isExternal(){const{to:e}=this.$attrs;return Boolean(G(e)&&e.match(/^(http(s)?:)?\/\//))},props(){var e;const t={bind:i({},this.$attrs),is:"a"};if(this.isExternal)t.bind.href=this.$attrs.to;else if(this.$attrs.to){let o=this.$attrs.to;(null==(e=this.$i18n)?void 0:e.locale)&&this.$i18n.locale!==this.$i18n.fallbackLocale&&(o=l(i({},o),{name:o.name+".i18n",params:l(i({},o.params),{locale:this.$i18n.locale})}),t.bind.to=o),"_blank"===this.$attrs.target?t.bind.href=this.$router.resolve(this.$attrs.to).href:t.is="router-link"}return"a"===t.is&&delete t.bind.to,t}}});He.render=function(e,t,o,s,a,r){return $(),C(H(e.props.is),W({class:"anchor cursor-pointer"},e.props.bind,{class:e.underline?"hover:underline focus:underline":"no-underline"}),{default:A((()=>[N(e.$slots,"default")])),_:3},16,["class"])};var Ue=x({components:{Icon:Oe},props:{mode:{type:String,default:"new"},minWidth100:{type:Boolean,default:!1},persistent:{type:Boolean},hover:{type:Boolean},autoOpen:{type:Boolean,default:!0},nowrap:{type:Boolean},space:{type:Number,default:5},caret:{type:Boolean},menu:{type:Boolean},transition:{type:String,default:"fade"}},data:()=>({cardStyle:{},localVisible:!1}),mounted(){this.$watch("localVisible",((e,t)=>{if(e!=t)if(e||(this._showByHover=!1,this._showByClick=!1),e){this._onDocCick=e=>this.onDocumentClick(e),v(document,"click",this._onDocCick,!0),this._onUserInput=e=>{this.localVisible&&this.updateCardPosition()},this.onParentsScroll();const e=["click","mousedown","mouseup","keydown","touchstart","touchend","touchmove","touchcancel","resize","scroll"];this._offUserInput=z([window],e,this._onUserInput),this._offGlobalListner=()=>{w(document,"click",this._onDocCick,!0),this._offUserInput(),this.offParentsScroll()},this.cardStyle={visibility:"hidden"},this.$nextTick((()=>{this.$refs,this.updateCardPosition()}))}else this._offGlobalListner&&(this._offGlobalListner(),this._offGlobalListner=null)}),{immediate:!0})},beforeUnmount(){this._offGlobalListner&&(this._offGlobalListner(),this._offGlobalListner=null)},methods:{show(){this.localVisible=!0},close(){this.localVisible=!1},onDocumentClick(e){const t=e.target,{card:o}=this.$refs;this.$refs.activator!==t&&!q(t,this.$refs.activator)&&(!o||o!==t&&!q(t,o))?(this.persistent||(this.localVisible=!1),this.$emit("click-outside",{nativeEvent:e,vm:this})):this.$emit("click-inside",{nativeEvent:e,vm:this})},onclickActivator(e){this.$emit("click-activator",{nativeEvent:e,vm:this}),this.autoOpen&&(this.hover?this._showByHover?this.localVisible&&(this._showByHover=!1,this._showByClick=!0):(this.localVisible=!this.localVisible,this.localVisible&&(this._showByClick=!0)):this.localVisible=!this.localVisible)},onMouseEnter(e){this.hover&&(this._cancelCloseDelayily(),this.localVisible||(this._showByHover=!0),this.show())},onMouseLeave(e){this.hover&&!this._showByClick&&this._closeDelayily()},_closeDelayily(){this._timeoutID=setTimeout((()=>this.close()),150)},_cancelCloseDelayily(){clearTimeout(this._timeoutID),this._timeoutID=null},onclickCard(e){this.menu&&this.close(),this.$emit("click-card",{nativeEvent:e,vm:this})},updateCardPosition(){this._updateCardPosition()},_updateCardPosition(){const{space:e}=this,t=K(this.$refs.activator),o=this.$refs.activator.offsetWidth,s=this.$refs.activator.offsetHeight,a=t.x+o,r=window.innerWidth-t.x-25,n=t.y,i=window.innerHeight-t.y-s;this.cardStyle={top:`${t.y+s+e}px`,left:`${t.x}px`},this.minWidth100&&(this.cardStyle.minWidth=`${o}px`),this.$nextTick((()=>{const{card:o}=this.$refs;if(!o)return;const{offsetWidth:l,offsetHeight:c}=o,d={};this.minWidth100&&(d.width=`${l}px`);let u={};u.x=r>l||a<l?t.x:a-l,u.y=i>c||n<c?t.y+s+e:t.y-e-c,d.left=`${u.x}px`,d.top=`${u.y}px`,this.cardStyle=d}))},onParentsScroll(){const e=[];let t=this.$refs.activator.parentElement;for(;t;)e.push(t),t=t.parentElement;const o=()=>{this.localVisible&&this.updateCardPosition()};e.forEach((e=>v(e,"scroll",o))),this._offParentsScroll=()=>{e.forEach((e=>w(e,"scroll",o)))}},offParentsScroll(){this._offParentsScroll&&(this._offParentsScroll(),this._offParentsScroll=null)}}});Ue.render=function(e,t,o,s,a,r){const n=V("Icon");return $(),C(B,null,[P("div",W({class:["popup popup-activator cursor-pointer",e.caret?"inline-flex items-center":"inline-block"],ref:"activator",onClick:t[1]||(t[1]=(...t)=>e.onclickActivator&&e.onclickActivator(...t)),onMouseenter:t[2]||(t[2]=(...t)=>e.onMouseEnter&&e.onMouseEnter(...t)),onMouseleave:t[3]||(t[3]=(...t)=>e.onMouseLeave&&e.onMouseLeave(...t))},e.$attrs),[N(e.$slots,"default"),e.caret?($(),C(n,{key:0,class:["caret popup-caret relative transition",{"transform rotate-180":e.localVisible}],name:"arrow_drop_down"},null,8,["class"])):I("",!0)],16),($(),C(T,{to:"body"},[P(F,{name:e.transition},{default:A((()=>["new"!==e.mode||e.localVisible?L(($(),C("div",{key:0,class:["popup-card",[{"popup-card-nowrap":e.nowrap}]],ref:"card",onClick:t[4]||(t[4]=(...t)=>e.onclickCard&&e.onclickCard(...t)),style:e.cardStyle,onMouseenter:t[5]||(t[5]=t=>e._cancelCloseDelayily()),onMouseleave:t[6]||(t[6]=(...t)=>e.onMouseLeave&&e.onMouseLeave(...t))},[N(e.$slots,"card")],38)),[[E,"new"===e.mode||e.localVisible]]):I("",!0)])),_:3},8,["name"])]))],64)};var je=x({components:{Popup:Ue},props:{text:{type:String},space:{type:Number,default:5},mode:{type:String,default:"display"}},data:()=>({visible:!1,innerStyle:{}}),watch:{},methods:{}});const Ge={class:"tool-tip-default"};je.render=function(e,t,o,s,a,r){const n=V("Popup");return $(),C(n,{class:"tool-tip",hover:"",mode:e.mode,space:e.space},{card:A((()=>[P("div",{class:"tool-tip-inner",style:e.innerStyle},[N(e.$slots,"nostyle",{},(()=>[P("div",Ge,[N(e.$slots,"text",{},(()=>[O(S(e.text),1)]))])]))],4)])),default:A((()=>[N(e.$slots,"default")])),_:3},8,["mode","space"])};var We=x({render:()=>P("img",{class:"loading-icon animate-spin",src:"/assets/settings_black_24dp.342fb430.svg"},null)}),Ne=x({components:{LoadingIcon:We}});const ze={class:"loading-mask absolute w-full h-full top-0 left-0 bg-white flex items-center justify-center opacity-70"};Ne.render=function(e,t,o,s,a,r){const n=V("LoadingIcon");return $(),C("div",ze,[P(n,{class:"loading-mask-img"})])};const qe={default:"btn-default bg-white hover:bg-gray-100 text-gray-800 border border-gray-300",primary:"btn-primary bg-primary-500 hover:bg-primary-700 text-white border border-primary-400",warning:"btn-warning bg-warning-500 hover:bg-warning-700 text-white border border-warning-400",danger:"btn-danger bg-danger-500 hover:bg-danger-700 text-white border border-danger-400",success:"btn-success bg-success-500 hover:bg-success-700 text-white border border-success-400"},Ke={default:"bg-transparent hover:bg-gray-400 text-gray-800 hover:text-white border border-gray-400 hover:border-transparent",primary:"bg-transparent hover:bg-primary-500 text-primary-700 hover:text-white border border-primary-500 hover:border-transparent",warning:"bg-transparent hover:bg-warning-500 text-warning-700 hover:text-white border border-warning-500 hover:border-transparent",danger:"bg-transparent hover:bg-danger-500 text-danger-700 hover:text-white border border-danger-500 hover:border-transparent",success:"bg-transparent hover:bg-success-500 text-success-700 hover:text-white border border-success-500 hover:border-transparent"};var Fe=x({components:{Anchor:He,LoadingMask:Ne},inheritAttrs:!1,props:{color:{type:String,default:"default"},outline:{type:Boolean},size:{type:String,default:"md"},to:{},disabled:{type:Boolean},loading:{type:Boolean},square:{type:Boolean},paddingClass:{type:String}},computed:{colorClass(){return this.outline?Ke[this.color]:qe[this.color]},isAnchor(){return Boolean(this.to)},props(){const e={bind:i({},this.$attrs),is:"button"};if(this.isAnchor&&(e.is="Anchor",e.bind.to=this.to),"button"!==e.is||e.type||(e.bind.type="button"),e.bind.onClick&&!e.bind.onClick._stopWhenLoading){const t=e.bind.onClick,o=this;e.bind.onClick=function(...e){if(!o.loading)return t.apply(this,e)},e.bind.onClick._stopWhenLoading=!0}return e}}});Fe.render=function(e,t,o,s,a,r){const n=V("LoadingMask");return $(),C(H(e.props.is),W({class:"btn"},e.props.bind,{class:[e.paddingClass||"px-4 py-2","rounded",{"cursor-not-allowed opacity-60":e.disabled},e.colorClass,{relative:e.loading}],disabled:e.disabled}),{default:A((()=>[N(e.$slots,"default"),e.loading?($(),C(n,{key:0})):I("",!0)])),_:3},16,["class","disabled"])};const Je=Q(Ve);var Qe;!function(e){let t=0;e.afterEach((()=>{if(location.hash){const e=++t;U((()=>{const o=()=>document.getElementById(location.hash.substr(1))||document.getElementsByName(location.hash.substr(1))[0];j((()=>Boolean(o())),60,333).promise.then((()=>{if(e!==t)return;const s=o();setTimeout((()=>{var e;null==(e=s.scrollIntoView)||e.call(s)}),100)}))}))}}))}(te),Je.use(re),(Qe=te).getRoutes().forEach((e=>{if(e.path){const t=`/:locale${e.path}`.replace(/\/$/,""),o=p(e,(e=>{}));o.components=e.components,o.path=t,o.name=`${o.name}.i18n`,Qe.addRoute(o)}})),Qe.afterEach(((e,t,o)=>{if(o)return;const s=e.params.locale||(Array.isArray(re.global.fallbackLocale)?re.global.fallbackLocale[0]:re.global.fallbackLocale);s!==re.global.locale&&(re.global.locale=s)})),ce.interceptors.request.use((function(e){return re.global.locale!==re.global.fallbackLocale&&(e.baseURL=e.baseURL+"/"+re.global.locale),e}),(function(e){return Promise.reject(e)})),function(e){e.directive("anchor",De)}(Je),(e=>{e.component("Icon",Oe),e.component("Anchor",He),e.component("Tooltip",je),e.component("Btn",Fe),e.component("Popup",Ue)})(Je),function(e,t){e.use(J,{config:{id:t}})}(Je,le.ANALYTICS_ID),Je.use(te),Je.mount("#app");export{Oe as _,ce as a,Ie as b,ae as s,Pe as u};
