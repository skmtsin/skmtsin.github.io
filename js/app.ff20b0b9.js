(function(e){function t(t){for(var s,r,o=t[0],c=t[1],u=t[2],m=0,h=[];m<o.length;m++)r=o[m],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&h.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(h.length)h.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(s=!1)}s&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},i={app:0},a=[];function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0863":function(e,t,n){},1761:function(e,t,n){},"1bb4":function(e,t,n){"use strict";n("0863")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{style:{backgroundImage:"url("+e.backImage+")"},attrs:{id:"container"}},[n("SettingMenu"),e._v(" "),n("Clock"),e._v(" "),n("Weather"),e._v(" "),n("div",{staticClass:"bottomSet"},[n("DateTime"),e._v(" "),n("SunRS")],1)],1)])},a=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("p",{staticClass:"time",domProps:{innerHTML:e._s(e.time)}}),n("p",{staticClass:"sec"},[e._v(e._s(e.nowsec))])])])},o=[],c=(n("fb6a"),n("99af"),{data:function(){return{time:"",nowsec:""}},created:function(){var e=this;setInterval(e.getTime,500)},methods:{getTime:function(){var e=new Date,t=("0"+e.getHours()).slice(-2),n=("0"+e.getMinutes()).slice(-2),s=("0"+e.getSeconds()).slice(-2);this.time="".concat(t,"<span>:</span>").concat(n),this.nowsec=s}}}),u=c,l=(n("b075"),n("2877")),m=Object(l["a"])(u,r,o,!1,null,"6aad77eb",null),h=m.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v(e._s(e.DateTime))])])},f=[],g={data:function(){return{DateTime:""}},created:function(){this.getTime();var e=this;setInterval(e.getTime,500)},methods:{getTime:function(){var e=new Date,t=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],n=e.getDay(),s=e.getMonth()+1,i=e.getDate();this.DateTime="".concat(s,"/").concat(i," ").concat(t[n])}}},p=g,v=(n("1bb4"),Object(l["a"])(p,d,f,!1,null,"b69c0c0a",null)),T=v.exports,b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{attrs:{id:"setBtn"},on:{click:function(t){e.activeBtn=!e.activeBtn}}},[s("img",{attrs:{src:n("5de8"),alt:"setting"}})]),s("transition",{attrs:{name:"menu"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.activeBtn,expression:"activeBtn"}],staticClass:"settingMenu"},[s("ul",[s("li",{staticClass:"acTitle"},[s("button",{staticClass:"acTrigger",class:e.open,attrs:{type:"button"},on:{click:function(t){return e.acToggle("1")}}},[e._v("地域：大阪")]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.open.indexOf("1")>=0,expression:"open.indexOf('1') >= 0"}],staticClass:"acTarget"},[s("transition",{attrs:{name:"content"}},[s("div",{staticClass:"content"},[s("p",[e._v("設定")])])])],1)]),s("transition",{attrs:{name:"title"}},[s("li",{staticClass:"acTitle"},[s("button",{staticClass:"acTrigger",class:e.open,attrs:{type:"button"},on:{click:function(t){return e.acToggle("2")}}},[e._v("表示項目")]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.open.indexOf("2")>=0,expression:"open.indexOf('2') >= 0"}],staticClass:"acTarget"},[s("div",{staticClass:"content"},[s("p",[e._v("表示項目")])])])])]),s("li",{staticClass:"acTitle"},[s("button",{staticClass:"acTrigger",class:{"state-open":e.open},attrs:{type:"button"},on:{click:function(t){return e.acToggle("3")}}},[e._v("文字色")]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.open.indexOf("3")>=0,expression:"open.indexOf('3') >= 0"}],staticClass:"acTarget"},[s("div",{staticClass:"content"},[s("p",[e._v("文字色")])])])]),s("li",{staticClass:"acTitle"},[s("button",{staticClass:"acTrigger",class:{"state-open":e.open},attrs:{type:"button"},on:{click:function(t){return e.acToggle("4")}}},[e._v("保存した設定")]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.open.indexOf("4")>=0,expression:"open.indexOf('4') >= 0"}],staticClass:"acTarget"},[s("div",{staticClass:"content"},[s("p",[e._v("保存した設定")])])])])],1)])])],1)},w=[],y=(n("4de4"),n("d3b7"),{data:function(){return{activeBtn:"",open:[]}},methods:{acToggle:function(e){this.open.indexOf(e)>=0?this.open=this.open.filter((function(t){return t!==e})):this.open.push(e)}}}),x=y,S=(n("a558"),Object(l["a"])(x,b,w,!1,null,"10bb7a90",null)),_=S.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{attrs:{id:"yohos"}},e._l(e.limitCount,(function(t,s){return n("li",{key:s,staticClass:"yoho"},[n("p",[e._v(e._s(e.createTime(t.dt)))]),n("p",{domProps:{innerHTML:e._s(e.createIcon(t.weather[0].main,t.dt))}}),n("p",[e._v(e._s(e.createTemp(t.temp)))])])})),0)},C=[],k={data:function(){return{}},computed:{hourlyItems:function(){return this.$store.state.hourlyItems},limitCount:function(){return this.hourlyItems.slice(0,-24)},sunsetTime:function(){return this.$store.state.sunsetTime},sunriseTime:function(){return this.$store.state.sunriseTime},nextSunriseTime:function(){return this.$store.state.nextSunriseTime}},methods:{createTime:function(e){var t=new Date(1e3*e);return t.toLocaleTimeString("ja-JP").slice(0,-3)},createTemp:function(e){var t=Math.floor(e);return"".concat(t,"°")},createIcon:function(e,t){return"Clouds"==e?this.sunriseTime>t||this.sunsetTime<t&&this.nextSunriseTime>t?'<img src="./weatherIcons/night-clouds.svg" alt="曇り">':'<img src="./weatherIcons/Clouds.svg" alt="曇り">':"Clear"==e?this.sunriseTime>t||this.sunsetTime<t&&this.nextSunriseTime>t?'<img src="./weatherIcons/night-clear.svg" alt="晴れ">':'<img src="./weatherIcons/Clear.svg" alt="晴れ">':"Rain"==e||"Drizzle"==e?'<img src="./weatherIcons/Rain.svg" alt="雨">':"Thunderstorm"==e?'<img src="./weatherIcons/Thunderstorm.svg" alt="雷雨">':"Snow"==e?'<img src="./weatherIcons/Snow.svg" alt="雪">':'<img src="./weatherIcons/Atmosphere.svg" alt="その他">'}},mounted:function(){this.$store.dispatch("getHourlyWeatherData")}},I=k,D=(n("58b6"),Object(l["a"])(I,j,C,!1,null,"4a0ea26a",null)),O=D.exports,$=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"sunrs"}},[e.sunset?s("img",{attrs:{src:n("8dd6"),alt:"日没"}}):s("img",{attrs:{src:n("ff5e"),alt:"日の出"}}),s("p",[e._v(e._s(e.sunRSTime))])])},M=[],W={data:function(){return{sunset:"",sunRSTime:""}},created:function(){var e=this;setInterval(e.getRSTime,500)},computed:{sunsetTime:function(){return this.$store.state.sunsetTime},sunriseTime:function(){return this.$store.state.sunriseTime},nextSunriseTime:function(){return this.$store.state.nextSunriseTime}},methods:{getRSTime:function(){var e=new Date,t=e.getTime(),n=Math.floor(t/1e3);if(this.sunsetTime-n<0){var s=new Date(1e3*this.nextSunriseTime);this.sunRSTime=s.toLocaleTimeString("ja-JP").slice(0,-3),this.sunset=!1}else if(n>this.sunriseTime){var i=new Date(1e3*this.sunsetTime);this.sunRSTime=i.toLocaleTimeString("ja-JP").slice(0,-3),this.sunset=!0}else{var a=new Date(1e3*this.sunriseTime);this.sunRSTime=a.toLocaleTimeString("ja-JP").slice(0,-3),this.sunset=!1}}}},P=W,R=(n("836f"),Object(l["a"])(P,$,M,!1,null,"31c8b95b",null)),N=R.exports,H={name:"App",data:function(){return{index:["1","2","3","4","5"]}},computed:{currentItems:function(){return this.$store.state.currentItems},hourlyItems:function(){return this.$store.state.hourlyItems},sunsetTime:function(){return this.$store.state.sunsetTime},sunriseTime:function(){return this.$store.state.sunriseTime},nextSunriseTime:function(){return this.$store.state.nextSunriseTime},backImage:function(){var e=Math.floor(Math.random()*this.index.length),t=this.sunsetTime,n=this.sunriseTime,s=this.nextSunriseTime,i="";try{i=this.currentItems.weather[0].main}catch(r){}var a=this.currentItems.dt;return a>=n-1800&&a<=n+1800?'"./back-images/sunrise/sunrise'.concat(e,'.jpg"'):a>n+1800&&a<t-1800?"Clouds"===i?'"./back-images/daytime/clouds/clouds'.concat(e,'.jpg"'):"Clear"===i?'"./back-images/daytime/clear/clear'.concat(e,'.jpg"'):"Rain"===i?'"./back-images/daytime/rain/rain'.concat(e,'.jpg"'):"Snow"===i?'"./back-images/daytime/snow/snow'.concat(e,'.jpg"'):"Thunderstorm"===i?'"./back-images/daytime/thunderstorm/thunderstorm'.concat(e,'.jpg"'):"./back-images/daytime/fog.jpg":a>=t-1800&&a<=t+1800?'"./back-images/sunset/sunset'.concat(e,'.jpg"'):a>t+1800&&(a<s||a<n-1800)?"Clouds"===i?'"./back-images/night/clouds/night-clouds'.concat(e,'.jpg"'):"Clear"===i?'"./back-images/night/clear/night-clear'.concat(e,'.jpg"'):"Rain"===i?'"./back-images/night/rain/night-rain'.concat(e,'.jpg"'):"Snow"===i?'"./back-images/night/snow/night-snow'.concat(e,'.jpg"'):"Thunderstorm"===i?'"./back-images/night/thunderstorm/night-thunderstorm'.concat(e,'.jpg"'):"./back-images/daytime/night-fog.jpg":"./back-images/other.jpg"}},methods:{},mounted:function(){this.$store.dispatch("getCurrentWeatherData"),this.$store.dispatch("getHourlyWeatherData"),this.$store.dispatch("getDailyWeatherData")},components:{Clock:h,DateTime:T,SettingMenu:_,Weather:O,SunRS:N}},B=H,E=(n("034f"),Object(l["a"])(B,i,a,!1,null,null,null)),J=E.exports,L=n("2f62"),A=n("bc3a"),F=n.n(A);s["a"].use(L["a"]);var z=new L["a"].Store({state:{currentItems:[],hourlyItems:[],sunsetTime:[],sunriseTime:[],nextSunriseTime:[]},getters:{},mutations:{setCurrentWeatherData:function(e,t){e.currentItems=t},setHourlyWeatherData:function(e,t){e.hourlyItems=t},setSunsetTime:function(e,t){e.sunsetTime=t},setSunriseTime:function(e,t){e.sunriseTime=t},setNextSunriseTime:function(e,t){e.nextSunriseTime=t}},actions:{getCurrentWeatherData:function(e){var t=e.commit;return F.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=34.40&lon=135.31&units=metric&exclude=minutely,hourly,daily,alerts&appid=b6941b0f378debcf43eaacabc690b3be&lang=ja").then((function(e){t("setCurrentWeatherData",e.data.current)}))},getHourlyWeatherData:function(e){var t=e.commit;return F.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=34.40&lon=135.31&units=metric&exclude=current,minutely,daily,alerts&appid=b6941b0f378debcf43eaacabc690b3be&lang=ja").then((function(e){t("setHourlyWeatherData",e.data.hourly)}))},getDailyWeatherData:function(e){var t=e.commit;return F.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=34.40&lon=135.31&units=metric&exclude=current,minutely,hourly,alerts&appid=b6941b0f378debcf43eaacabc690b3be&lang=ja").then((function(e){t("setSunsetTime",e.data.daily[0].sunset),t("setSunriseTime",e.data.daily[0].sunrise),t("setNextSunriseTime",e.data.daily[1].sunrise)}))}},modules:{}}),q=n("9483");Object(q["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),s["a"].config.productionTip=!1,new s["a"]({vuex:L["a"],axios:F.a,store:z,render:function(e){return e(J)}}).$mount("#app")},"58b6":function(e,t,n){"use strict";n("9137")},"5de8":function(e,t,n){e.exports=n.p+"img/setting.768966c5.svg"},8123:function(e,t,n){},"836f":function(e,t,n){"use strict";n("1761")},"85ec":function(e,t,n){},"8dd6":function(e,t,n){e.exports=n.p+"img/sunset.6fca9891.svg"},"90a6":function(e,t,n){},9137:function(e,t,n){},a558:function(e,t,n){"use strict";n("8123")},b075:function(e,t,n){"use strict";n("90a6")},ff5e:function(e,t,n){e.exports=n.p+"img/sunrise.2ab139c3.svg"}});
//# sourceMappingURL=app.ff20b0b9.js.map