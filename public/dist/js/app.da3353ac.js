(function(e){function t(t){for(var a,r,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0a3153":"3865f2c2","chunk-2d0aa7b8":"0a4f81ac","chunk-2d0c19d5":"59a98083","chunk-2d0c7374":"df2491bf","chunk-2d0cf2b2":"068a9e3e","chunk-2d0cfa15":"75dd0b02","chunk-2d0d6376":"74912b5c","chunk-2d21b867":"d4bb0564","chunk-2d22d746":"474f3c1e","chunk-3ae0d7fc":"166d12c4","chunk-868b1ebc":"6457c8aa"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-868b1ebc":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d0a3153":"31d6cfe0","chunk-2d0aa7b8":"31d6cfe0","chunk-2d0c19d5":"31d6cfe0","chunk-2d0c7374":"31d6cfe0","chunk-2d0cf2b2":"31d6cfe0","chunk-2d0cfa15":"31d6cfe0","chunk-2d0d6376":"31d6cfe0","chunk-2d21b867":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-3ae0d7fc":"31d6cfe0","chunk-868b1ebc":"56ecfed1"}[e]+".css",o=u.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],f.parentNode.removeChild(f),n(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("4de4"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n(e.layout,{tag:"component"},[n("router-view")],1)],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grey darken-1 empty-layout"},[n("router-view")],1)},i=[],u={name:"emptyLayout"},s=u,l=n("2877"),d=Object(l["a"])(s,c,i,!1,null,"0a41cf6e",null),f=d.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-main-layout"},[n("navbar",{on:{click:function(t){e.isOpen=!e.isOpen}}}),n("sidebar",{model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}}),n("main",{staticClass:"app-content",class:{full:!e.isOpen}},[n("div",{staticClass:"app-page"},[n("router-view")],1)]),n("div",{staticClass:"fixed-action-btn"},[n("router-link",{staticClass:"btn-floating btn-large blue",attrs:{to:"/record"}},[n("i",{staticClass:"large material-icons"},[e._v("add")])])],1)],1)},h=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar orange lighten-1"},[n("div",{staticClass:"nav-wrapper"},[n("div",{staticClass:"navbar-left"},[n("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.$emit("click")}}},[n("i",{staticClass:"material-icons black-text"},[e._v("dehaze")])]),n("span",{staticClass:"black-text"},[e._v(e._s(e._f("date")(e.date,"datetime")))])]),n("ul",{staticClass:"right hide-on-small-and-down"},[n("li",[n("a",{ref:"dropdown",staticClass:"dropdown-trigger black-text",attrs:{href:"#","data-target":"dropdown"}},[e._v(" "+e._s(e.USER_NAME)+" "),n("i",{staticClass:"material-icons right"},[e._v("arrow_drop_down")])]),n("ul",{staticClass:"dropdown-content",attrs:{id:"dropdown"}},[n("li",{staticClass:"divider",attrs:{tabindex:"-1"}}),n("li",[n("a",{staticClass:"black-text",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[n("i",{staticClass:"material-icons"},[e._v("assignment_return")]),e._v("Выйти ")])])])])])])])},b=[],v=n("5530"),g=n("2f62"),y={name:"navbar",computed:Object(v["a"])({},Object(g["c"])(["USER_NAME"])),data:function(){return{date:new Date,interval:null,dropdown:null}},methods:{logout:function(){localStorage.removeItem("auth-token"),this.$router.push("/login?message=logout")}},mounted:function(){var e=this;this.interval=setInterval((function(){e.date=new Date}),1e3),this.dropdown=M.Dropdown.init(this.$refs.dropdown)},beforeDestroy:function(){clearInterval(this.interval),this.dropdown&&this.dropdown.destroy&&this.dropdown.destroy()}},k=y,w=Object(l["a"])(k,m,b,!1,null,"4bb93452",null),_=w.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"sidenav app-sidenav",class:{open:e.value}},e._l(e.NAME_TITLES.pages,(function(t){return n("router-link",{key:t.url,attrs:{to:t.url,tag:"li","active-class":"active",exact:t.exact}},[n("a",{staticClass:"waves-effect waves-orange pointer",attrs:{href:"#"}},[e._v(e._s(t.title))])])})),1)},O=[],S={props:["value"],name:"sidebar",computed:Object(v["a"])({},Object(g["c"])(["NAME_TITLES"])),methods:Object(v["a"])({},Object(g["b"])(["GET_TITLES_PAGE"])),mounted:function(){this.GET_TITLES_PAGE()}},C=S,T=Object(l["a"])(C,E,O,!1,null,"1e6ccdec",null),j=T.exports,x={name:"mainLayout",data:function(){return{isOpen:!0}},components:{navbar:_,sidebar:j}},A=x,I=Object(l["a"])(A,p,h,!1,null,"10cd09b9",null),L=I.exports,N={computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}},components:{emptyLayout:f,mainLayout:L}},D=N,P=(n("5c0b"),Object(l["a"])(D,r,o,!1,null,null,null)),R=P.exports,$=n("f3e7"),U=n("9483");Object(U["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("b0c0"),n("d3b7"),n("ac1f"),n("5319"),n("498a");var B=n("8c4f"),G=n("14b7"),q=n.n(G);a["a"].use(B["a"]);var F=[{path:"/",name:"Home",meta:{layout:"main"},component:function(){return n.e("chunk-2d0cfa15").then(n.bind(null,"6511"))}},{path:"/regulations",name:"regulations",meta:{layout:"main"},component:function(){return n.e("chunk-2d0d6376").then(n.bind(null,"7238"))}},{path:"/request",name:"request",meta:{layout:"main"},component:function(){return n.e("chunk-2d0c19d5").then(n.bind(null,"4795"))}},{path:"/contacts",name:"contacts",meta:{layout:"main"},component:function(){return n.e("chunk-2d21b867").then(n.bind(null,"bfc0"))}},{path:"/timetable",name:"timetable",meta:{layout:"main"},component:function(){return n.e("chunk-2d0cf2b2").then(n.bind(null,"6321"))}},{path:"/feedbacks",name:"feedbacks",meta:{layout:"main"},component:function(){return n.e("chunk-2d0a3153").then(n.bind(null,"0151"))}},{path:"/record",name:"record",meta:{layout:"main"},component:function(){return n.e("chunk-2d0c7374").then(n.bind(null,"5058"))}},{path:"/aboutus",name:"about",meta:{layout:"main"},component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/media",name:"media",meta:{layout:"main"},component:function(){return n.e("chunk-2d0aa7b8").then(n.bind(null,"10cf"))}},{path:"/login",name:"login",meta:{layout:"empty"},component:function(){return n.e("chunk-868b1ebc").then(n.bind(null,"dd7b"))}},{path:"/register",name:"register",meta:{layout:"empty"},component:function(){return n.e("chunk-3ae0d7fc").then(n.bind(null,"7803"))}}],z=new B["a"]({mode:"history",base:"/",routes:F});z.beforeEach((function(e,t,n){var a="",r="",o=localStorage.getItem("auth-token");if(o){o=o.replace("Bearer","");var c=q.a.decode(o.trim(),{complete:!0});a=c.payload.exp,r=Math.floor(Date.now()/1e3)}"login"!==e.name&&r>=a?(localStorage.clear(),n("/login?message=error")):n()}));var H=z;n("6885"),n("caad"),n("2532");function J(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"date",n={};return t.includes("date")&&(n.day="2-digit",n.month="long",n.year="numeric"),t.includes("time")&&(n.hour="2-digit",n.minute="2-digit",n.second="2-digit"),new Intl.DateTimeFormat("ru-RU",n).format(new Date(e))}var K={install:function(e,t){e.prototype.$message=function(e){M.toast({html:e})},e.prototype.$error=function(e){M.toast({html:"[Ошибка]: ".concat(e)})}}},Q=(n("96cf"),n("1da1")),V=n("bc3a"),W=n.n(V),X=function(){return W.a.create({baseURL:"http://localhost:5000",headers:{get:{Authorization:localStorage.getItem("auth-token")}}})},Y={actions:{login:function(e,t){return Object(Q["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.dispatch,e.commit,a=t.email,r=t.password,n.prev=2,n.abrupt("return",X().post("/api/auth/login",{email:a,password:r}));case 6:n.prev=6,n.t0=n["catch"](2),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[2,6]])})))()}}};a["a"].use(g["a"]);var Z=new g["a"].Store({state:{sidebar:[],user:""},mutations:{SIDE_BAR_TITLES:function(e,t){e.sidebar=t.data},USER:function(e,t){e.user=t}},actions:{GET_TITLES_PAGE:function(e){var t=e.commit;X().get("/api",{Authorization:localStorage.getItem("auth-token")}).then((function(e){return t("SIDE_BAR_TITLES",e),e})).catch((function(e){return console.log(e)}))},GET_USER:function(e,t){var n=e.commit;n("USER",t)}},getters:{NAME_TITLES:function(e){return e.sidebar},USER_NAME:function(e){return e.user}},modules:{auth:Y}});a["a"].config.productionTip=!1,a["a"].filter("date",J),a["a"].use($["a"]),a["a"].use(K),new a["a"]({router:H,store:Z,render:function(e){return e(R)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.da3353ac.js.map