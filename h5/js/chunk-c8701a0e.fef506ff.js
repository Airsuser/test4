(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c8701a0e"],{"1e80":function(t,s,a){},"3fda":function(t,s,a){"use strict";a("1e80")},"6c98":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"wd"},[s("div",{staticClass:"jiangli_top"},[s("img",{attrs:{src:a("f9fc")},on:{click:function(s){return t.leftClick()}}})]),s("div",{staticClass:"wd-content"},[s("div",{staticClass:"wd-head"}),s("div",{staticClass:"q-list-warp"},[s("div",{staticClass:"q-list"},t._l(t.qlist,(function(a,e){return s("div",{key:e,staticClass:"q-item"},[s("div",{staticClass:"q-item-no"},[s("div",{staticClass:"title"},[t._v("Q"+t._s(e+1))]),a.result?s("div",{staticClass:"result"},[t._v("答题结果："),1==a.result.result?s("span",{staticStyle:{color:"green"}},[t._v("正确")]):s("span",{staticStyle:{color:"red"}},[t._v("错误")])]):t._e()]),s("div",{staticClass:"q-item-title"},[t._v("\n                "+t._s(a.title)+"\n              ")]),s("div",{staticClass:"q-item-answer"},t._l(a.answers,(function(a,e){return s("div",{staticClass:"q-item-abcd"},[t._v(t._s(t.abcd[e])+"."+t._s(a))])})),0),s("div",{staticClass:"q-dtbtn",on:{click:function(s){return t.showanswers(a)}}},[t._v("答题")])])})),0),t._m(0)])]),s("van-dialog",{attrs:{title:"答题","show-cancel-button":""},on:{confirm:t.confirm_answer},model:{value:t.showanswer,callback:function(s){t.showanswer=s},expression:"showanswer"}},[t.currt_answer?s("div",{staticClass:"qa-item"},[s("div",{staticClass:"qa-item-title"},[t._v("\n                "+t._s(t.currt_answer.title)+"\n              ")]),s("div",{staticClass:"qa-item-answer"},t._l(t.currt_answer.answers,(function(a,e){return s("div",{staticClass:"qa-item-abcd"},[s("van-checkbox-group",{model:{value:t.currt_checked,callback:function(s){t.currt_checked=s},expression:"currt_checked"}},[s("van-checkbox",{attrs:{name:t.abcd[e]}},[t._v(t._s(t.abcd[e])+"."+t._s(a))])],1)],1)})),0)]):t._e()])],1)},i=[function(){var t=this,s=t._self._c;return s("ul",{staticClass:"guize"},[s("li",[t._v("活动面向本平台所有会员，同一会员（包括不限于手机号码、身份证号等）最多可获得1次答题机会。")]),s("li",[t._v("新会员在注册成功实名后，每个人均会获得一次答题机会。")]),s("li",[t._v("每次机会可答十道题。")]),s("li",[t._v("每答对1题，可以获得1元的红包奖励。")]),s("li",[t._v("红包将自动返入您的账户余额里。")]),s("li",[t._v("由于会员填写信息不正确，导致红包无法正常发放的，将视为弃权。")]),s("li",[t._v("针对恶意答题客户，本平台有权取消其活动资格。")]),s("li",[t._v("本活动内容版权及活动解释权归平台所有。")])])}],n=a("ed08"),c=a("c24f"),r=a("d399"),l=(a("b775"),{data:function(){return{showanswer:!1,page:1,refreshing:!1,finished:!1,qlist:[],abcd:["A","B","C","D","E","F","G"],currt_answer:null,currt_checked:[]}},mounted:function(){},created:function(){console.info("this.loadLogList()"),this.loadLogList()},methods:{leftClick:function(){Object(n["b"])(this,"user")},loadLogList:function(){var t=this;Object(c["k"])({page:this.page}).then((function(s){if(t.page=t.page+1,console.log("-------------------------请求数据",t.refreshing),t.refreshing&&(t.qlist=[],t.refreshing=!1),"ok"==s.data.msg){for(var a=[],e=0;e<s.data.data.list.length;e++){for(var i=s.data.data.list[e],n=null,c=0;c<s.data.data.logs.length;c++){var r=s.data.data.logs[c];r.qid==i.id&&(n={result:r.result,status:r.status})}a.push({id:i.id,title:i.title,answers:i.abcd.split("\r\n").slice(0,-1),result:n})}t.qlist=a,t.loading=!1,s.data.data.list.length<10&&(t.finished=!0)}})).catch((function(s){vm.shows=!1,t.$dialog.error(s.response.data.msg+" "+(s.response.data.data&&s.response.data.data.message||""))}))},showanswers:function(t){this.showanswer=!0,this.currt_checked=[],this.currt_answer=t},confirm_answer:function(){var t=this;r["a"].loading({message:"加载中...",forbidClick:!0}),Object(c["P"])({qid:this.currt_answer.id,answer:this.currt_checked.sort().join("-").toLowerCase()}).then((function(s){r["a"].clear(),"OK"==s.data.msg&&(r["a"].success("答题成功"),t.page=1,t.loadLogList())})).catch((function(s){return r["a"].clear(),t.$dialog.error(s.response.data.msg+" "+(s.response.data.data&&s.response.data.data.message||"")),!1}))}},components:{}}),o=l,d=(a("3fda"),a("2877")),u=Object(d["a"])(o,e,i,!1,null,"534a855b",null);s["default"]=u.exports}}]);