(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{"rqL+":function(t,s,a){"use strict";a.r(s);a("f0Wu");var i={data:function(){return{isValid:null,popular:[],browsers:[]}},methods:{determineBrowserIcon:function(t){return{"Android Webview":"android",Chrome:"chrome",Edge:"edge",Firefox:"firefox","Internet Explorer":"internet-explorer",Opera:"opera",Safari:"safari"}[t]||"default"}},mounted:function(){var t=this;axios.get("/api/insights/check").then((function(s){t.isValid="OK"===s.data.data.status,t.isValid&&axios.all([axios.get("/api/insights/popular"),axios.get("/api/insights/browsers")]).then(axios.spread(function(t,s){this.popular=t.data.data,this.browsers=_.map(s.data.data,function(t){return{browser:t.browser,sessions:t.sessions,icon:this.determineBrowserIcon(t.browser)}}.bind(this))}.bind(t)))}))}},r=a("KHd+"),e=Object(r.a)(i,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("portal",{attrs:{to:"title"}},[a("app-title",{attrs:{icon:"chart-bar"}},[t._v("Insight")])],1),t._v(" "),null===t.isValid?a("div",{staticClass:"row"},[a("div",{staticClass:"col md:w-full"},[a("p-card",{staticClass:"text-center"},[a("fa-icon",{staticClass:"fa-spin mr-3",attrs:{icon:["fas","spinner-third"]}}),t._v(" Loading...\n            ")],1)],1)]):t._e(),t._v(" "),!1===t.isValid?a("div",{staticClass:"row"},[a("div",{staticClass:"col md:w-full"},[a("p-card",{staticClass:"text-center"},[a("p",[t._v("Configure your Google Analytic settings to gain insight about your website "),a("fa-icon",{staticClass:"text-emoji",attrs:{icon:["fas","hand-peace"]}})],1),t._v(" "),a("router-link",{staticClass:"button items-center",attrs:{to:"/settings/google_analytics#insights"}},[a("fa-icon",{staticClass:"mr-2 text-sm",attrs:{icon:["fas","cog"]}}),t._v(" Go to settings")],1)],1)],1)]):t._e(),t._v(" "),t.isValid?a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col mb-6 md:w-full"},[a("analytics-overview")],1)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col md:w-1/2"},[a("div",{staticClass:"card"},[a("table",[t._m(0),t._v(" "),a("tbody",t._l(t.popular,(function(s){return a("tr",{key:s.url},[a("td",[a("a",{staticClass:"text-gray-800 hover:text-gray-900 mr-4",attrs:{href:s.url,target:"_blank"}},[a("fa-icon",{attrs:{icon:["fas","arrow-alt-circle-right"]}})],1),t._v("\n\n                                    "+t._s(s.url)+"\n                                ")]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(s.pageViews))])])})),0)])])]),t._v(" "),a("div",{staticClass:"col md:w-1/2"},[a("div",{staticClass:"card"},[a("table",[t._m(1),t._v(" "),a("tbody",t._l(t.browsers,(function(s){return a("tr",{key:s.browser},[a("td",[a("span",{staticClass:"text-gray-800 hover:text-gray-900 mr-4"},["default"==s.icon?a("fa-icon",{staticClass:"fa-fw",attrs:{icon:["far","globe"]}}):a("fa-icon",{staticClass:"fa-fw",attrs:{icon:["fab",s.icon]}})],1),t._v("\n\n                                    "+t._s(s.browser)+"\n                                ")]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(s.sessions))])])})),0)])])])])]):t._e()],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",[s("h2",[this._v("Popular Pages")])]),this._v(" "),s("th",{staticClass:"text-right"},[this._v("Views")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",[s("h2",[this._v("Browsers")])]),this._v(" "),s("th",{staticClass:"text-right"},[this._v("Sessions")])])])}],!1,null,null,null);s.default=e.exports}}]);