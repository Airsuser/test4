(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72d42d80"],{"1fb2":function(t,i,e){"use strict";e("40b3")},"40b3":function(t,i,e){},a684:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t._self._c;return i("div",{staticClass:"detacon"},[i("van-nav-bar",{attrs:{title:t.$t("m.cool224"),fixed:!0,"left-arrow":""},on:{"click-left":t.fanhui}}),i("div",{staticStyle:{height:"50px"}}),i("div",{staticStyle:{"background-color":"#f4f9fc","border-radius":"5px"}},[i("div",{staticClass:"register_block"},[i("div",[t._v(t._s(t.obj.title))]),i("div",{staticStyle:{color:"red"}},[t._v("\n        "+t._s(parseFloat((100*t.obj.rate).toFixed(4)))+"%\n      ")])]),i("div",{staticClass:"register_block"},[i("div",[t._v("\n        "+t._s(t.$t("m.yq_span0"))+"\n      ")]),i("div",[t._v(t._s(t.invite))])]),i("div",{staticClass:"register_block"},[i("div",[t._v(t._s(t.$t("m.tz_span4")))]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.money,expression:"money"}],staticStyle:{"text-align":"right"},domProps:{value:t.money},on:{input:function(i){i.target.composing||(t.money=i.target.value)}}})]),i("div",{staticClass:"register_block"},[i("div",[t._v(t._s(t.$t("m.cool231")))]),i("div",{staticStyle:{color:"#18b867"}},[t._v("\n        USDT\n        ")])]),i("div",{staticClass:"register_block"},[i("div",[t._v("\n        "+t._s(t.$t("m.yh_span7"))+"\n      ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],staticStyle:{"text-align":"right"},attrs:{type:"password",placeholder:t.$t("m.cool002")},domProps:{value:t.pwd},on:{input:function(i){i.target.composing||(t.pwd=i.target.value)}}})])]),i("div",{staticClass:"register_submit",on:{click:function(i){return t.registerReset()}}},[t._v("\n    "+t._s(t.$t("m.tijiao"))+"\n  ")]),i("div",{staticStyle:{height:"60px",width:"100%"}})],1)},o=[],s=e("c24f"),a={name:"GoodsPay",data:function(){return{obj:{},invite:null,pwd:null,money:null,currency:2,area:window.localStorage.getItem("quhao")}},mounted:function(){var t=JSON.parse(this.$route.query.obj);console.log(t),this.money=t.project.min,this.obj=t.project,this.invite=t.invite},methods:{fanhui:function(){this.$router.push({path:"/initiationdetails?id="+this.invite+"&obj="+JSON.stringify(this.obj)})},registerReset:function(){var t=this,i={invite:this.invite,pwd:this.pwd,money:this.money,currency:this.currency};console.log(i);var e=this.$Message.loading({content:"Loading...",duration:0});Object(s["Q"])(i).then((function(i){t.$dialog.message(i.data.msg),setTimeout(e,10),setTimeout((function(){t.$router.back()}),2e3)})).catch((function(t){setTimeout(e,10)}))}}},r=a,c=(e("1fb2"),e("2877")),l=Object(c["a"])(r,n,o,!1,null,"0c595b90",null);i["default"]=l.exports}}]);