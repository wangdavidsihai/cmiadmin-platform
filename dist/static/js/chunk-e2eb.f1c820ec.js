(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-e2eb"],{MSNs:function(t,i,e){"use strict";e.d(i,"c",function(){return o}),e.d(i,"e",function(){return r}),e.d(i,"a",function(){return a}),e.d(i,"b",function(){return s}),e.d(i,"d",function(){return l});var n=e("t3Un");function o(){return Object(n.a)({url:"api/qiNiuConfig",method:"get"})}function r(t){return Object(n.a)({url:"api/qiNiuConfig",data:t,method:"put"})}function a(t){return Object(n.a)({url:"api/qiNiuContent/"+t,method:"delete"})}function s(t){return Object(n.a)({url:"api/qiNiuContent/download/"+t,method:"get"})}function l(){return Object(n.a)({url:"api/qiNiuContent/synchronize",method:"post"})}},SB0e:function(t,i,e){"use strict";var n=e("a2of");e.n(n).a},a2of:function(t,i,e){},iUyO:function(t,i,e){"use strict";e.r(i);var n=e("QbLZ"),o=e.n(n),r=e("L2JU"),a=e("MSNs"),s=e("X4fA"),l={data:function(){return{headers:{Authorization:"Bearer "+Object(s.a)()},dialog:!1,dialogImageUrl:"",dialogVisible:!1,fileList:[],files:[]}},computed:o()({},Object(r.b)(["qiNiuUploadApi"])),methods:{handleSuccess:function(t,i,e){var n=i.uid,o=t.id;this.files.push({uid:n,id:o})},handleBeforeRemove:function(t,i){for(var e=0;e<this.files.length;e++)if(this.files[e].uid===t.uid)return Object(a.a)(this.files[e].id).then(function(t){}),!0},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},doSubmit:function(){this.fileList=[],this.dialogVisible=!1,this.dialogImageUrl="",this.dialog=!1,this.$parent.$parent.init()},handleError:function(t,i,e){var n=JSON.parse(t.message);this.$notify({title:n.message,type:"error",duration:2500})}}},u=(e("SB0e"),e("KHd+")),d=Object(u.a)(l,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("el-dialog",{attrs:{visible:t.dialog,width:"500px"},on:{"update:visible":function(i){t.dialog=i},close:t.doSubmit}},[e("el-upload",{staticClass:"upload-demo",attrs:{"before-remove":t.handleBeforeRemove,"on-success":t.handleSuccess,"on-error":t.handleError,"file-list":t.fileList,headers:t.headers,action:t.qiNiuUploadApi,multiple:""}},[e("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),t._v(" "),e("div",{staticClass:"el-upload__tip",staticStyle:{display:"block"},attrs:{slot:"tip"},slot:"tip"},[t._v("请勿上传违法文件，且文件不超过5M")])],1),t._v(" "),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:t.doSubmit}},[t._v("确认")])],1)],1)},[],!1,null,"8addfe0c",null);d.options.__file="form.vue";i.default=d.exports}}]);