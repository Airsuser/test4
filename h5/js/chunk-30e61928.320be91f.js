(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30e61928"],{7024:function(t,n,a){},b59c:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t._self._c;return n("div",{staticClass:"signIn"},[n("van-nav-bar",{attrs:{title:t.$t("m.jl_span2"),fixed:"",placeholder:"",border:!1,"left-arrow":""},on:{"click-left":function(n){return t.$router.back()}}}),n("van-pull-refresh",{attrs:{"loading-text":t.$t("m.cool071"),"loosing-text":t.$t("m.cool069"),"pulling-text":t.$t("m.cool070")},on:{refresh:function(n){return t.refresh()}},model:{value:t.isLoading,callback:function(n){t.isLoading=n},expression:"isLoading"}},[n("div",{staticClass:"content"},[n("van-list",{attrs:{finished:t.finished},on:{load:t.onLoad},model:{value:t.loading,callback:function(n){t.loading=n},expression:"loading"}},[0!=t.signInList.length?n("div",t._l(t.signInList,(function(a,e){return n("div",{key:e,staticClass:"item",staticStyle:{"background-color":"#ffffff",padding:"10px",display:"flex","justify-content":"space-between","align-items":"center","border-radius":"5px","margin-bottom":"10px"}},[n("div",{staticClass:"signIn_list"},[n("div",{staticClass:"line-clamp2"},[t._v(t._s(a.goods.title))]),n("div",{staticStyle:{margin:"10px 0"}},[t._v(t._s(t.$t("m.jf_span6"))+"："+t._s(a.count)+" ")]),n("div",[t._v(t._s(t.$t("m.cool125"))+"："+t._s(a.goods.integral)+" ")]),n("div",{staticStyle:{margin:"10px 0"}},[t._v("\n                "+t._s(t.$t("m.cool107"))+"："+t._s(a.oid)+"\n              ")]),n("div",{staticStyle:{margin:"10px 0"}},[t._v("\n                "+t._s(t.$t("m.cool242"))+"："+t._s(t.name)+"\n              ")]),n("div",{staticStyle:{margin:"10px 0"}},[t._v("\n                "+t._s(t.$t("m.cool243"))+"："+t._s(a.address)+"\n              ")]),n("div",[t._v(t._s(t.$t("m.jl_span8"))+"："+t._s(t.createDate(a.created_at)))]),n("div",{staticStyle:{"text-align":"right",color:"#48C27A"}},[10==a.status?n("span",[t._v(t._s(t.$t("m.cool244")))]):t._e(),9==a.status?n("span",[t._v(t._s(t.$t("m.jl_span10")))]):t._e()])])])})),0):n("van-empty",{attrs:{description:t.$t("m.gengduo")}})],1)],1)]),n("div",{staticStyle:{height:"50px"}})],1)},s=[],i=a("b775"),o=a("ed08"),l={name:"",computed:{createDate:function(){return function(t){var n=new Date(1e3*t),a=n.getFullYear(),e=n.getMonth()+1;e=e<10?"0"+e:e;var s=n.getDate();s=s<10?"0"+s:s;var i=n.getHours();i=i<10?"0"+i:i;var o=n.getMinutes();o=o<10?"0"+o:o;var l=n.getSeconds();return l=l<10?"0"+l:l,a+"-"+e+"-"+s+" "+i+":"+o+":"+l}}},data:function(){return{signInList:[],loading:!1,finished:!1,isLoading:!1,name:null,page:0}},mounted:function(){var t=JSON.parse(localStorage.getItem("userInfo123"));this.name=t.realname},methods:{onClickLeft:function(){Object(o["b"])(this,"JfList")},refresh:function(){this.finished=!1,this.loading=!0,this.page=0,this.signInList=[],this.onLoad()},onLoad:function(){var t=this;i["a"].post("/shop/order/log",{page:this.page},{login:!0}).then((function(n){t.page++,console.log(n),t.isLoading=!1,t.loading=!1,t.signInList=t.signInList.concat(n.data.data.list),0==n.data.data.list.length&&(t.finished=!0)})).catch((function(n){console.log(n),t.$dialog.error(n.response.data.msg+" "+(n.response.data.data&&n.response.data.data.message||""))}))}}},r=l,c=(a("c0a3"),a("2877")),d=Object(c["a"])(r,e,s,!1,null,"6279b8c2",null);n["default"]=d.exports},c0a3:function(t,n,a){"use strict";a("7024")}}]);