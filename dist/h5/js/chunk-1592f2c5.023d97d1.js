(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1592f2c5"],{"708f":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t._self._c;return i("div",{staticClass:"record_page"},[i("van-nav-bar",{attrs:{title:t.$t("charge.cool005"),fixed:!0,"left-arrow":""},on:{"click-left":t.fanhui}}),i("van-pull-refresh",{staticStyle:{height:"calc(100vh - 58px)"},attrs:{"loading-text":t.$t("charge.cool071"),"loosing-text":t.$t("charge.cool069"),"pulling-text":t.$t("charge.cool070")},on:{refresh:function(i){t.page=0,t.list=[],t.finished=!1,t.init()}},model:{value:t.isLoading,callback:function(i){t.isLoading=i},expression:"isLoading"}},[i("div",{staticStyle:{height:"50px"}}),i("van-list",{attrs:{finished:t.finished},on:{load:t.onLoad},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},[t.list.length>0?i("div",t._l(t.list,(function(e,a){return i("div",{key:a,staticStyle:{"background-color":"#ffffff",padding:"10px",display:"flex","align-items":"center","border-radius":"8px",margin:"10px"}},[i("div",{staticStyle:{"font-size":"0"}},[i("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:e.img}})]),i("div",{staticStyle:{width:"100%","margin-left":"10px"}},[i("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("div",{},[t._v(t._s(e.prize))]),i("div",[1==e.type?i("span",[t._v("CNY")]):t._e(),2==e.type?i("span",[t._v("USDT")]):t._e(),3==e.type?i("span",[t._v(t._s(t.$t("m.dj_span5")))]):t._e(),4==e.type?i("span",[t._v(t._s(t.$t("charge.cool013")))]):t._e(),5==e.type?i("span",[t._v(t._s(t.$t("charge.cool003")))]):t._e(),6==e.type?i("span",[t._v(t._s(t.$t("charge.cool013")))]):t._e()])]),i("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("div",[t._v(t._s(t.createDate(e.created_at)))]),i("div",{staticStyle:{"margin-left":"10px",color:"red"}},[t._v("\n                "+t._s(e.price)+"\n              ")])])])])})),0):i("div",[i("van-empty",{attrs:{description:t.$t("charge.nothing")}})],1)]),i("div",{staticStyle:{height:"60px"}})],1)],1)},n=[],s=e("c24f"),c={data:function(){return{list:[],page:0,isLoading:!1,loading:!1,finished:!1}},computed:{createDate:function(){return function(t){var i=new Date(1e3*t),e=i.getFullYear(),a=i.getMonth()+1;a=a<10?"0"+a:a;var n=i.getDate();n=n<10?"0"+n:n;var s=i.getHours();s=s<10?"0"+s:s;var c=i.getMinutes();return c=c<10?"0"+c:c,e+"-"+a+"-"+n+" "+s+":"+c}}},mounted:function(){},methods:{fanhui:function(){this.$router.push({path:"/activity"})},onLoad:function(){var t=this;setTimeout((function(){t.init()}),1e3)},init:function(){var t=this;Object(s["C"])({page:this.page}).then((function(i){var e=i.data.data.list,a=JSON.parse(t.$route.query.voucher);i.data.data.list.length>0?(e.forEach((function(t){a.forEach((function(i){t.jid==i.id&&(i.img.startsWith("https")?t.img=i.img:t.img="https://"+i.img)}))})),t.list=t.list.concat(i.data.data.list),t.page++):t.finished=!0,t.isLoading=!1,t.loading=!1}))}},created:function(){}},o=c,r=(e("cbf6"),e("2877")),l=Object(r["a"])(o,a,n,!1,null,"5b7f9380",null);i["default"]=l.exports},9490:function(t,i,e){},cbf6:function(t,i,e){"use strict";e("9490")}}]);