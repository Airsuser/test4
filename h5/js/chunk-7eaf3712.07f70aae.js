(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7eaf3712"],{4607:function(e,t,i){"use strict";i("5b9d")},"5b9d":function(e,t,i){},6997:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"reader"},[t("van-nav-bar",{attrs:{title:"扫一扫",fixed:"",border:!1,"left-arrow":""},on:{"click-left":function(t){return e.leftClick("/user")}}}),t("canvas",{ref:"canvas",staticClass:"canvas"}),t("div",{staticStyle:{height:"70px"}})],1)},n=[],s=i("ecec"),o=i.n(s),r=(i("ef21"),{name:"Reader",data:function(){return{timer:null,result:"",isAnimation:!0,audio:Object,video:Object,cvsele:Object,canvas:Object}},mounted:function(){this.video=document.createElement("video"),this.cvsele=this.$refs.canvas,this.canvas=this.cvsele.getContext("2d"),this.media()},methods:{leftClick:function(){this.$router.push({path:"/transfer"})},draw:function(e,t){this.canvas.beginPath(),this.canvas.moveTo(e.x,e.y),this.canvas.lineTo(t.x,t.y),this.canvas.lineWidth=3,this.canvas.strokeStyle="red",this.canvas.stroke()},cance:function(){var e=this;this.isAnimation=!1,cancelAnimationFrame(this.timer),setTimeout((function(){e.cvsele.style.display="none"}),1e3)},sweep:function(){var e=this;if(this.video.readyState===this.video.HAVE_ENOUGH_DATA){var t=this.video,i=t.videoWidth,a=t.videoHeight;this.cvsele.width=i,this.cvsele.height=a,this.canvas.drawImage(this.video,0,0,i,a);try{var n=this.canvas.getImageData(0,0,i,a),s=o()(n.data,n.width,n.height,{inversionAttempts:"dontInvert"});if(s){var r=s.location;this.draw(r.topLeftCorner,r.topRightCorner),this.draw(r.topRightCorner,r.bottomRightCorner),this.draw(r.bottomRightCorner,r.bottomLeftCorner),this.draw(r.bottomLeftCorner,r.topLeftCorner),this.result!=s.data&&(this.$router.push({path:"/transfer",query:{tid:s.data}}),this.cance())}else console.error("识别失败，请检查二维码是否正确！")}catch(c){console.error("识别失败，请检查二维码是否正确！",c)}}this.isAnimation&&(this.timer=requestAnimationFrame((function(){e.sweep()})))},media:function(){var e=this;this.isAnimation=!0,this.cvsele.style.display="block",navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,navigator.mediaDevices?navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}).then((function(t){e.video.srcObject=t,e.video.setAttribute("playsinline",!0),e.video.setAttribute("webkit-playsinline",!0),e.video.addEventListener("loadedmetadata",(function(){e.video.play(),e.sweep()}))})).catch((function(t){e.cance(),alert("对不起：未识别到扫描设备!"),console.log(t.code+"："+t.name+"，"+t.message)})):navigator.getUserMedia?navigator.getUserMedia({video:{facingMode:"environment"}},(function(t){e.video.srcObject=t,e.video.setAttribute("playsinline",!0),e.video.setAttribute("webkit-playsinline",!0),e.video.addEventListener("loadedmetadata",(function(){e.video.play(),e.sweep()}))}),(function(t){e.cance(),alert("对不起：未识别到扫描设备!"),console.log(t.code+"："+t.name+"，"+t.message)})):navigator.userAgent.toLowerCase().match(/chrome/)&&location.origin.indexOf("https://")<0?console.log("获取浏览器录音功能，因安全性问题，需要在localhost 或 127.0.0.1 或 https 下才能获取权限！"):(this.cance(),alert("对不起：未识别到扫描设备!"))}}}),c=r,d=(i("4607"),i("2877")),v=Object(d["a"])(c,a,n,!1,null,null,null);t["default"]=v.exports}}]);