(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f8acdd8"],{"2d06":function(t,i,e){"use strict";e.r(i);var c=function(){var t=this,i=t._self._c;return i("div",{staticClass:"test"},[i("div",{staticStyle:{height:"20%"}}),i("LuckyWheel",{ref:"myLucky",staticClass:"test-myLucky",attrs:{width:t.width,height:t.width,blocks:t.blocks,prizes:t.prizes},on:{end:t.endCallback}}),i("div",{staticClass:"startbtn",on:{click:t.startCallback}})],1)},n=[],s={created:function(){this.blocks=[{padding:"0.46rem",imgs:[{src:e("cece"),width:this.width,height:this.width,rotate:!0}]}];var t=[{id:1,icon:"https://img.iwave.net.cn/bmw/b365029b17e0e1fc972b52080f58cc80.png",title:"iphone15 Pro"},{id:2,icon:"https://img.iwave.net.cn/bmw/bbb9c678305a2f55ce7b285561744596.png",title:"普通红包"},{id:3,icon:"https://img.iwave.net.cn/bmw/9b03fe2dcbb6be8c02ac63ff0927c92f.png",title:"5元话费券"},{id:4,icon:"https://img.iwave.net.cn/bmw/7cffe2c789279a83ef577283535a2c1b.png",title:"每日红包"},{id:5,icon:"https://img.iwave.net.cn/bmw/a3731dd942951974b9be1da171735d82.png",title:"幸运红包"},{id:6,icon:"https://img.iwave.net.cn/bmw/dc3c6e7624f6b8291c82a36b552785f6.png",title:"10元话费券"},{id:7,icon:"https://img.iwave.net.cn/bmw/a6b978fd0064a45ebcd6b649d49714ea.png",title:"惊喜福袋"},{id:8,icon:"https://img.iwave.net.cn/bmw/873a940855c837b4d6622fe8da442b8b.png",title:"谢谢参与"}];this.prizes=t.map((function(t){return{fonts:[{text:t.title,top:"4rem",fontColor:"#FF7002",fontSize:"0.426rem",fontWeight:600,wordWrap:!1,lineHeight:"0.613rem"}],imgs:[{src:t.icon,top:"1.38rem",width:"1.3rem",height:"1.4rem"}]}}))},methods:{startCallback:function(){var t=this;console.log("#@@@@@"),this.$refs.myLucky.play(),setTimeout((function(){var i=0;t.$refs.myLucky.stop(i)}),3e3)},endCallback:function(t){console.log(t)}},computed:{width:function(){return"20rem"}}},a=s,o=(e("8bab"),e("2877")),b=Object(o["a"])(a,c,n,!1,null,"db8cc3ce",null);i["default"]=b.exports},"8bab":function(t,i,e){"use strict";e("b489")},b489:function(t,i,e){},cece:function(t,i,e){t.exports=e.p+"h5/img/circle.2806cb1b.png"}}]);