(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15b77cc5"],{"01fd":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"wrappers"},[a("van-nav-bar",{attrs:{title:t.$t("charge.setup"),fixed:!0,"left-arrow":""},on:{"click-left":t.onClickLeft}}),a("div",{staticStyle:{height:"50px"}}),a("div",{staticClass:"fields",on:{click:function(a){return t.jumpclick(2)}}},[a("div",{staticClass:"text1"},[t._v(t._s(t.$t("charge.identity")))]),1==t.is_auth?a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("div",{staticClass:"text3",staticStyle:{"background-color":"rgba(66,185,131, 0.5)",color:"#fff"}},[t._v(t._s(t.$t("charge.authenticated")))]),a("van-icon",{attrs:{name:"arrow",color:"#999",size:"18"}})],1):t._e(),1!=t.is_auth?a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("div",{staticClass:"text3"},[t._v(t._s(t.$t("charge.unrecognizedname")))]),a("van-icon",{attrs:{name:"arrow",color:"#999",size:"18"}})],1):t._e()]),a("div",{staticClass:"fields",on:{click:function(a){return t.jumpclick(3)}}},[a("div",{staticClass:"text1"},[t._v(t._s(t.$t("charge.passwordange")))]),a("van-icon",{attrs:{name:"arrow",color:"#999",size:"18"}})],1),a("div",{staticClass:"fields",on:{click:function(a){return t.jumpclick(4)}}},[a("div",{staticClass:"text1"},[t._v(t._s(t.$t("charge.transactionpassword")))]),a("van-icon",{attrs:{name:"arrow",color:"#999",size:"18"}})],1),a("div",{staticClass:"fields",on:{click:function(a){return t.jumpclick(5)}}},[a("div",{staticClass:"text1"},[t._v(t._s(t.$t("charge.crapackage")))]),a("van-icon",{attrs:{name:"arrow",color:"#999",size:"18"}})],1),a("div",{staticClass:"fields",on:{click:function(a){return t.jumpclick(6)}}},[a("div",{staticClass:"text1"},[t._v(t._s(t.$t("charge.Privacypolicy")))]),a("van-icon",{attrs:{name:"arrow",color:"#999",size:"18"}})],1),a("div",{staticClass:"fields",on:{click:function(a){return t.jumpclick(7)}}},[a("div",{staticClass:"text1"},[t._v(t._s(t.$t("charge.Useragreement")))]),a("van-icon",{attrs:{name:"arrow",color:"#999",size:"18"}})],1),a("div",{staticClass:"fields"},[a("div",{staticClass:"text1"},[t._v(t._s(t.$t("charge.Versionnumber")))]),a("div",{staticClass:"text2"},[t._v("1.6.1")])]),a("div",{staticClass:"btn",on:{click:function(a){return t.jumpclick(8)}}},[t._v(t._s(t.$t("charge.Logoutlogin")))]),a("div",{staticStyle:{height:"70px"}})],1)},s=[],c=e("ed08"),n=e("c24f"),o={name:"settingsindex",data:function(){return{is_auth:window.localStorage.getItem("is_auth")}},mounted:function(){},methods:{jumpclick:function(t){var a=this;switch(t){case 1:break;case 2:Object(c["b"])(this,"memmber_business");break;case 3:Object(c["b"])(this,"LoginPass");break;case 4:Object(c["b"])(this,"PayPass");break;case 5:Object(c["b"])(this,"bank");break;case 6:Object(c["b"])(this,"privacy?backurl=user");break;case 7:Object(c["b"])(this,"agreement?backurl=user");break;case 8:Object(n["l"])({}).then((function(t){a.$store.commit("LOGOUT");var e=window.localStorage.getItem("zhanghao"),i=window.localStorage.getItem("quhao"),s=window.localStorage.getItem("mima"),c=window.localStorage.getItem("fwq"),n=window.localStorage.getItem("Language");window.localStorage.clear(),window.localStorage.setItem("zhanghao",e),window.localStorage.setItem("quhao",i),window.localStorage.setItem("mima",s),window.localStorage.setItem("fwq",c),window.localStorage.setItem("Language",n),a.$router.push({path:"/login"})}));break}},onClickLeft:function(){Object(c["b"])(this,"user")}}},r=o,l=(e("9939"),e("2877")),u=Object(l["a"])(r,i,s,!1,null,"5867e40c",null);a["default"]=u.exports},3862:function(t,a,e){},9939:function(t,a,e){"use strict";e("3862")}}]);