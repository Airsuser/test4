(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38f7a0cc"],{"20cd":function(t,e,a){"use strict";a("7c94")},"540b":function(t,e,a){t.exports=a.p+"h5/img/lottery-btn.142066ba.png"},"7c94":function(t,e,a){},ac91:function(t,e,a){t.exports=a.p+"h5/img/lotterybg.9dffe3e8.png"},fbb4:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-account"},[e("van-nav-bar",{attrs:{title:t.$t("m.cool116"),fixed:!0,"left-arrow":"",border:!1},on:{"click-left":t.onClickLeft}}),e("div",{staticClass:"lotterywarp"},[e("LuckyWheel",{ref:"myLucky",attrs:{width:"300px",height:"300px",prizes:t.prizes,blocks:t.blocks,buttons:t.buttons,activeStyle:t.activeStyle},on:{start:t.startCallback,end:t.endCallback}})],1),e("div",{staticClass:"guize"},[e("div",{staticClass:"guize-title"},[t._v(t._s(t.$t("m.cool117")))]),e("div",{staticClass:"guize-content"},[t.loglist.length>0?e("div",{staticClass:"zj-list"},t._l(t.loglist,(function(a,o){return e("div",{staticClass:"zj-item"},[e("div",{staticClass:"title"},[t._v(t._s(t.$t("m.cool108"))+"："+t._s(a.integral))]),e("div",{staticClass:"title"},[t._v(t._s(t.$t("m.cool118"))+"："+t._s(a.prize))]),e("div",{staticClass:"title"},[t._v(t._s(t.$t("m.cool086"))+"："+t._s(t.createDate(a.created_at)))])])})),0):e("div",{staticStyle:{color:"#999","text-align":"center"}},[t._v("\n        "+t._s(t.$t("m.nothing"))+"\n      ")])])]),e("div",{staticClass:"guize"},[e("div",{staticClass:"guize-title"},[t._v(t._s(t.$t("m.cool119")))]),e("ul",{staticClass:"guize-content cjgzlist"},[e("li",[t._v(t._s(t.$t("m.cool120")))]),e("li",[t._v(t._s(t.$t("m.cool121")))]),e("li",[t._v(t._s(t.$t("m.cool122")))]),e("li",[t._v(t._s(t.$t("m.cool123")))])])]),e("div",{staticStyle:{height:"70px"}})],1)},s=[],i=a("ed08"),n=a("b775");function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var u={name:"UserAccount",props:{},computed:{createDate:function(){return function(t){var e=new Date(1e3*t),a=(e.getFullYear(),e.getMonth()+1);a=a<10?"0"+a:a;var o=e.getDate();o=o<10?"0"+o:o;var s=e.getHours();s=s<10?"0"+s:s;var i=e.getMinutes();i=i<10?"0"+i:i;var n=e.getSeconds();return n=n<10?"0"+n:n,s+":"+i+":"+n}}},data:function(){return{list:[],loglist:[],blocks:[{padding:"20px",imgs:[{src:a("ac91"),width:"100%",height:"100%"}]}],prizes:[],activeStyle:[{fontColor:"#fff"}],buttons:[{radius:"45%",imgs:[{src:a("540b"),width:"70%",top:"-90%"}]}],defaultStyle:{background:"#b8c5f2"}}},mounted:function(){var t=this;this.loadCjData(),setTimeout((function(){t.loadLogList()}),1500)},methods:{onClickLeft:function(){this.$router.push({path:"/"})},startCallback:function(){var t=this;n["a"].post("/promo/circle/open",{},{login:!0}).then((function(e){console.info(e.data),t.$refs.myLucky.play();for(var a=-1,o=0;o<t.jplist.length;o++){var s=t.jplist[o];s.id==e.data.data.success.id&&(a=o)}-1==a&&t.$dialog.error(t.$t("m.cool124")),t.$refs.myLucky.stop(a)})).catch((function(e){t.$dialog.error(e.response.data.msg+" "+(e.response.data.data&&e.response.data.data.message||""))}))},endCallback:function(t){this.$dialog.success(t.fonts[0].text),this.loadLogList()},loadCjData:function(){var t=this;n["a"].post("/promo/circle/rule",{},{login:!0}).then((function(e){console.log(e.data.data,"奖品");var a=e.data.data.list;a&&0!=a.length&&(a=a.map((function(t){return c(c({},t),{},{lengthLimit:"40%"})}))),t.jplist=a;var o=t.convertData(a);t.prizes=o})).catch((function(e){vm.shows=!1,t.$dialog.error(e.response.data.msg+" "+(e.response.data.data&&e.response.data.data.message||""))}))},convertData:function(t){return t.map((function(t,e){var a=e%2==0?"#fff":"#ffeaa7",o=c({},t);o.text=o.prize+"("+o.price+")",o.top="30%";var s=[o];return{background:a,fonts:s}}))},loadLogList:function(){var t=this;n["a"].post("/promo/circle/log",{page:0},{login:!0}).then((function(e){console.log(e.data,"记录"),t.loglist=e.data.data.list})).catch((function(e){t.$dialog.error(e.response.data.msg+" "+(e.response.data.data&&e.response.data.data.message||""))}))},leftClick:function(){Object(i["b"])(this,"user")}}},d=u,f=(a("20cd"),a("2877")),p=Object(f["a"])(d,o,s,!1,null,"017c53f3",null);e["default"]=p.exports}}]);