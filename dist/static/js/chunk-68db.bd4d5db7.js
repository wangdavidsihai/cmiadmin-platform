(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-68db"],{"2Mtc":function(i,e,t){"use strict";t.r(e);var r=t("QbLZ"),a=t.n(r),o=t("L2JU"),s=t("NLix"),n=t("X4fA"),l={data:function(){return{headers:{Authorization:"Bearer "+Object(n.a)()},dialog:!1,dialogImageUrl:"",dialogVisible:!1,fileList:[],pictures:[]}},computed:a()({},Object(o.b)(["imagesUploadApi"])),methods:{handleSuccess:function(i,e,t){var r=e.uid,a=i.id;this.pictures.push({uid:r,id:a})},handleBeforeRemove:function(i,e){for(var t=0;t<this.pictures.length;t++)if(this.pictures[t].uid===i.uid)return Object(s.a)(this.pictures[t].id).then(function(i){}),!0},handlePictureCardPreview:function(i){this.dialogImageUrl=i.url,this.dialogVisible=!0},doSubmit:function(){this.fileList=[],this.dialogVisible=!1,this.dialogImageUrl="",this.dialog=!1,this.$parent.$parent.init()},handleError:function(i,e,t){var r=JSON.parse(i.message);this.$notify({title:r.message,type:"error",duration:2500})}}},d=(t("bGSn"),t("KHd+")),u=Object(d.a)(l,function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("el-dialog",{attrs:{visible:i.dialog,width:"600px"},on:{"update:visible":function(e){i.dialog=e},close:i.doSubmit}},[t("el-upload",{attrs:{"on-preview":i.handlePictureCardPreview,"before-remove":i.handleBeforeRemove,"on-success":i.handleSuccess,"on-error":i.handleError,headers:i.headers,"file-list":i.fileList,action:i.imagesUploadApi,"list-type":"picture-card"}},[t("i",{staticClass:"el-icon-plus"})]),i._v(" "),t("el-dialog",{attrs:{visible:i.dialogVisible},on:{"update:visible":function(e){i.dialogVisible=e}}},[t("img",{attrs:{src:i.dialogImageUrl,width:"100%",alt:""}})]),i._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:i.doSubmit}},[i._v("确认")])],1)],1)},[],!1,null,"110c81bd",null);u.options.__file="form.vue";e.default=u.exports},NLix:function(i,e,t){"use strict";t.d(e,"a",function(){return a});var r=t("t3Un");function a(i){return Object(r.a)({url:"api/pictures/"+i,method:"delete"})}},"Xf+6":function(i,e,t){},bGSn:function(i,e,t){"use strict";var r=t("Xf+6");t.n(r).a}}]);