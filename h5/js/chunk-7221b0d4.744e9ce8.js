(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7221b0d4"],{"909e":function(t,s,a){},f0c4:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"huoqibao"}},[s("van-nav-bar",{attrs:{title:t.$t("m.three"),fixed:"","left-arrow":""},on:{"click-left":function(s){return t.goto()}}}),s("div",{staticStyle:{height:"46px"}}),s("van-pull-refresh",{attrs:{"loading-text":t.$t("m.cool071"),"loosing-text":t.$t("m.cool069"),"pulling-text":t.$t("m.cool070")},on:{refresh:function(s){return t.refresh()}},model:{value:t.isLoading,callback:function(s){t.isLoading=s},expression:"isLoading"}},[s("div",{staticClass:"card1"},[s("div",{staticClass:"p1"},[s("div",{staticClass:"left"},[s("div",{staticClass:"text"},[t._v(t._s(t.$t("m.ct_span7"))+"（U）")]),s("div",{staticClass:"number"},[t._v(t._s(parseFloat(t.totaluser.usdt||0)))])]),s("div",{staticClass:"right"},[s("div",{staticClass:"text"},[t._v(t._s(t.$t("m.rlb_span18"))+"（U）")]),s("div",{staticClass:"number"},[t._v(t._s(parseFloat(t.totaluser.ribao||0)))])])]),s("div",{staticClass:"p2"},[s("div",{staticClass:"item"},[s("div",{staticClass:"text"},[t._v(t._s(t.$t("m.rlb_span3"))+"(U)")]),s("div",{staticClass:"number"},[t._v(t._s(1e4*t.rate||0))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"text"},[t._v(t._s(t.$t("m.jy_span8")))]),s("div",{staticClass:"number"},[t._v(t._s(100*t.rate)+"%")])]),s("div",{staticClass:"item"},[s("div",{staticClass:"text"},[t._v(t._s(t.$t("m.rlb_span2"))+"(U)")]),s("div",{staticClass:"number"},[t._v(t._s(parseFloat(t.totaluser.ribao_money||0)))])])]),s("div",{staticClass:"p3"},[s("div",{staticClass:"btn",on:{click:function(s){return t.$router.push("/rlbadd")}}},[t._v(t._s(t.$t("m.rlb_span5")))])])]),s("div",{staticClass:"card2"},[s("img",{staticClass:"hudie",attrs:{src:a("9400"),alt:""}}),s("div",{staticClass:"title"},[t._v(t._s(t.$t("m.jf_span2")))]),s("van-list",{attrs:{finished:t.finished},on:{load:t.init},model:{value:t.loading,callback:function(s){t.loading=s},expression:"loading"}},[0!=t.list.length?s("div",{staticClass:"list"},t._l(t.list,(function(i,e){return s("div",{key:e,staticClass:"item"},[s("div",{staticClass:"left"},[s("div",{staticStyle:{"font-size":"0"}},[s("img",{attrs:{src:a("db20"),alt:""}})]),s("div",{staticStyle:{width:"100%","margin-left":"5px"}},[s("div",{staticClass:"flexbet"},[s("div",{staticClass:"shop-name"},[t._v("\n                    "+t._s(t.$t("m.cool107"))+t._s(i.id)+"\n                    \n                  ")]),s("div",{staticClass:"price"},[1==i.type?s("span",[t._v(t._s(parseFloat(i.profit)))]):s("span",[t._v(t._s(parseFloat(i.money)))]),1==i.currency?s("span",[t._v("VND")]):t._e(),2==i.currency?s("span",[t._v("USDT")]):t._e(),3==i.currency?s("span",[t._v(t._s(t.$t("m.cool108")))]):t._e(),4==i.currency?s("span",[t._v(t._s(t.$t("m.cool109")))]):t._e(),1==i.status?s("span",{staticStyle:{color:"red"}},[t._v("转入")]):t._e(),2==i.status?s("span",{staticStyle:{color:"red"}},[t._v("转出")]):t._e()])]),s("div",{staticClass:"flexbet",staticStyle:{"margin-top":"5px"}},[s("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(i.created_at)))]),1==i.status?s("div",{staticClass:"Transferout",on:{click:function(s){return t.Dialogout(i)}}},[t._v("转出")]):t._e()])])])])})),0):s("van-empty")],1)],1)]),s("div",{staticStyle:{height:"80px"}})],1)},e=[],n=a("c24f"),o=a("2241"),l=a("b775"),r={filters:{formatDate:function(t){var s=new Date(1e3*t),a=s.getFullYear(),i=s.getMonth()+1;i=i<10?"0"+i:i;var e=s.getDate();e=e<10?"0"+e:e;var n=s.getHours();n=n<10?"0"+n:n;var o=s.getMinutes();o=o<10?"0"+o:o;var l=s.getSeconds();return l=l<10?"0"+l:l,a+"-"+i+"-"+e+" "+n+":"+o+":"+l}},data:function(){return{isLoading:!1,total_money:"",wait:"",success:"",day_into:"",total_profit:"",income:"",rate:"",list:[],loading:!1,finished:!1,refreshing:!1,page:0,totaluser:{}}},mounted:function(){},methods:{Dialogout:function(t){var s=this;o["a"].confirm({title:this.$t("m.cool183"),message:this.$t("m.cool340"),confirmButtonColor:"#ef0800"}).then((function(){l["a"].post("/promo/ribao/out",{id:t.id},{login:!0}).then((function(t){s.$dialog.success(t.data.msg),s.refresh()})).catch((function(t){console.log(t.data),s.$dialog.error(t.response.data.msg+" "+(t.response.data.data&&t.response.data.data.message||""))}))}))},goto:function(){this.$router.push({path:"/user"})},refresh:function(){this.finished=!1,this.loading=!0,this.page=0,this.list=[],this.init()},onLoad:function(){},init:function(){var t=this;Object(n["I"])({page:this.page}).then((function(s){console.log(s.data.data),t.list=t.list.concat(s.data.data.list),t.totaluser=s.data.data.user,t.page++,t.loading=!1,t.isLoading=!1,t.rate=s.data.data.rate,0==s.data.data.list.length&&(t.finished=!0)})).catch((function(s){t.isLoading=!1,t.finished=!0,t.loading=!1}))}}},c=r,d=(a("ff50"),a("2877")),u=Object(d["a"])(c,i,e,!1,null,"55f06d9a",null);s["default"]=u.exports},ff50:function(t,s,a){"use strict";a("909e")}}]);