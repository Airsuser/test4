(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b292ac24"],{5313:function(t,s,a){t.exports=a.p+"h5/img/tasktopad.ed6b8c2b.png"},"676a":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAAG+URWSAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAD6ADAAQAAAABAAAAEAAAAADlhttaAAACjklEQVQoFVVSTUwTURD+5r3d7R/IAkEMpCgYCYZEjIaLJh4NP8GbF0/Gg0ePnvXm1YNH7yZ604iJJw1GjYSEaoKVQvCPlgrW8rPQbbvjvF3a6iSbt++bmW9mvjeAGBenjhHnJwuB5/UaIDSqzA4yDsog5quO/+JDBSBYfQqK6LGvyAN2S41oYdm40kwmXp9gfzEraADnQrpL+YtL0P1Hgb0y+FthSzljI6hns6A2B+pMTpFh4vWpS0DwqsUqf1pdpt7nL6XDiWfVpZVprtRgj54MY6rv56HcuFB3lyww5SgZBx/swDgQdyIiR0vrqhiV4PM2fyxXmDm8kyImtydF6bf7/5Xl/MxoI8g4ouz8ZBHMPfAkOJkwcIn6ZruMfCvB9/Wh2tZ2k0W7olVK15VkRA6lQPEYUK+g/mNL4LpWzXDbgjV8XMY50oRaztKmlCIE+cK/TrpvD6REsDqqb96FDmuoE+QklsNug89jc1zZvdhIoVhqXo1kxkNnA+Q/053w+Laof02+gQYu9X7K0I+Qsu7RkadSP7JDHSbGwXgtUBzb2/DX8pLLchW3OUVxO90HctvBOxsBKesWnZp/QFyYvIGAHxoB/S9fw6EQkxVIJRD8lmXraANqNfCvohAFsE64wiQ6JtqfmA1YlaqD1Uw2KmY60jpcLEPAfgW15VXAk90Uo7gFPdAhb68DkZKE0qCt8SlmS5ANOHImk9C9sqENsw7VV6pKvDkzAr+6ZHxh9T15ZpHdmB41m5wL2zZ3StjQ6egRVcq9HgnGN23kFj4FXmnYBLEnM+77gB9IdS1JlnQgnYiR5ZSpv3uQ3LlSq9fQJYlr506jGtzlWu2sQB2ixw5pKyMi3aGhhcxhWHj8BScNCFiivs0WAAAAAElFTkSuQmCC"},a4ae:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"my-account"},[s("div",{staticClass:"jiangli_top"},[s("img",{attrs:{src:a("07f2")},on:{click:function(s){return t.leftClick()}}}),s("p",{},[t._v("任务中心")])]),s("div",{staticClass:"taskwrapper"},[t._m(0),s("div",{staticClass:"tasklist"},t._l(t.list,(function(e,i){return s("div",{key:i,staticClass:"taskitem"},[s("div",{staticClass:"taskitem-row"},[s("div",{staticClass:"taskitem-cell"},[s("p",[t._v("任务人数")]),s("p",{staticStyle:{color:"red"}},[t._v(t._s(e.people))])]),s("div",{staticClass:"taskitem-cell"},[s("p",[t._v("累积建仓")]),s("p",{staticStyle:{color:"red"}},[t._v(t._s(e.recharges))])]),s("div",{staticClass:"taskitem-cell"},[parseInt(e.crecharge)>=parseInt(e.recharges)&&parseInt(e.cpeople)>=parseInt(e.people)&&1!=e.success?s("span",{staticClass:"task-status-ok",on:{click:function(s){return t.getmoney(e.id)}}},[t._v("领取")]):1==e.success?s("span",{staticClass:"task-status-finish"},[t._v("已领取")]):s("span",{staticClass:"task-status"},[t._v("未达标")])])]),s("div",{staticClass:"taskitem-row"},[s("div",{staticClass:"taskitem-cell"},[s("p",[t._v("当前人数")]),s("p",[t._v(t._s(e.cpeople))])]),s("div",{staticClass:"taskitem-cell"},[s("p",[t._v("当前金额")]),s("p",[t._v(t._s(e.crecharge))])]),s("div",{staticClass:"taskitem-cell"},[s("span",{staticClass:"redbag"},[s("img",{attrs:{src:a("676a")}}),t._v("+"+t._s(e.amount))])])])])})),0)])])},i=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"header"},[s("img",{attrs:{src:a("5313"),width:"100%"}})])}],A=a("f410"),c=a("c24f"),n=a("ed08"),l=a("d399");function r(t,s,a){return s in t?Object.defineProperty(t,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[s]=a,t}var o={name:"UserAccount",components:{Recommend:A["a"]},props:{},data:function(){return{list:[]}},mounted:function(){this.getTasklist()},methods:{leftClick:function(){Object(n["b"])(this,"user")},getTasklist:function(){var t=this;Object(c["j"])().then((function(s){console.info(s,"res"),t.list=s.data.data}),(function(s){t.$dialog.message(s.msg)}))},getmoney:function(t){var s=this;l["a"].loading({message:"领取中...",forbidClick:!0}),Object(c["m"])(r({id:t},"id",t)).then((function(t){"ok"==t.msg&&l["a"].success(t.msg)})).catch((function(t){l["a"].clear(),s.$dialog.error(t.response.data.msg+" "+(t.response.data.data&&t.response.data.data.message||""))}))}}},p=o,u=(a("ef70"),a("2877")),d=Object(u["a"])(p,e,i,!1,null,"4c251e3c",null);s["default"]=d.exports},b062:function(t,s,a){},ef70:function(t,s,a){"use strict";a("b062")}}]);