(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5afe7b22"],{"23bf":function(t,e,a){"use strict";var r=a("7aef"),n={getAuth:function(){return r.a.get("/user/getAuth")},findSecondDevProductList:function(){return r.a.get("/product/release/findSecondDevProductList")},queryVersionListByProductCode:function(t){return r.a.get("/sysVersion/queryHaveSpiReleaseVersionListByProductCode",{params:t})},findExistedAppList:function(t){return r.a.get("/app/findExistedAppList",{params:t})},addProductAppInfo:function(t){return r.a.post("/app/addProductAppInfo",t)},getAppBaseInfo:function(t){return r.a.get("/app/getAppBaseInfo",{params:t})},updateProductAppInfo:function(t){return r.a.post("/app/updateProductAppInfo",t)},queryList:function(t){return r.a.get("/spiInstance/queryList",{params:t})},enable:function(t){return r.a.post("/spiInstance/enable",t)},queryOperateLog:function(t){return r.a.get("/spiInstance/queryOperateLog".concat(t))},publishProductApp:function(t){return r.a.post("/app/publishProductApp",null,{params:t,timeout:2e4})},pushTenantList:function(t,e){return r.a.get("/spiInstance/pushTenantList".concat(e),{params:t})},pushTenant:function(t){return r.a.post("/spiInstance/pushTenant",t)},pushTenantRevoke:function(t){return r.a.post("/spiInstance/pushTenantRevoke".concat(t))},survivalCheck:function(t){return r.a.post("/spiInstance/survivalCheck".concat(t))},queryListAll:function(t){return r.a.get("/spiInstance/queryListAll",{params:t})},source:function(t){return r.a.get("/logSearch/spi/source",{params:t})},traceId:function(t){return r.a.get("/logSearch/spi/traceId",{params:t})}};e.a=n},"2f6a":function(t,e,a){},"31c1":function(t,e,a){"use strict";a("bddf")},"3d85":function(t,e,a){"use strict";var r=(a("c5f6"),{name:"Steps",props:{titleList:{type:Array,default:function(){return[]}},active:{type:Number,required:!0}}}),n=(a("e75f"),a("2877")),s=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-steps",{staticClass:"steps",attrs:{active:t.active,"align-center":!0,"finish-status":"success"}},t._l(t.titleList,(function(t,e){return a("el-step",{key:e,attrs:{title:t}})})),1)}),[],!1,null,"443b202a",null);e.a=s.exports},"43b3":function(t,e,a){"use strict";var r={name:"Title",props:{text:{type:String,default:""}}},n=(a("b61a"),a("2877")),s=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("div",{staticClass:"title__icon"}),a("div",{staticClass:"title__text"},[t._v(t._s(t.text))])])}),[],!1,null,"3d118947",null);e.a=s.exports},"9f9e":function(t,e,a){},b61a:function(t,e,a){"use strict";a("2f6a")},bddf:function(t,e,a){},c97a:function(t,e,a){"use strict";a.r(e);var r=(a("7f7f"),a("c7eb")),n=(a("96cf"),a("1da1")),s=a("43b3"),i=a("3d85"),o=a("23bf"),c={name:"CreateSecondaryDevelopmentApp",components:{Title:s.a,Steps:i.a},data:function(){return{env:window.env.buildEnv,id:parseInt(this.$route.params.id),newAppId:null,productCode:this.$route.params.productCode,active:1,titleList:["选择应用类型","填写信息","提交审核"],basicInfoFormData:{sysVersionId:void 0,name:"",remark:"",projectName:""},basicInfoFormRules:{sysVersionId:[{required:!0,message:"请选择应用版本"}],name:[{required:!0,message:"请输入应用名称"},{min:2,max:20,message:"长度在2到20个字符之间"}],remark:[{required:!0,message:"请输入应用描述"},{min:10,max:200,message:"长度在10到200个字符之间"}],projectName:[{required:!0,message:"请输入项目名称"},{pattern:/(^[A-Za-z0-9]+$)|(^[A-Za-z0-9]+[A-Za-z0-9-]*[A-Za-z0-9]+)$/,message:"只允许输入英文字母、数字和“-”，且“-”不能出现在开头或者结尾",trigger:"blur"},{min:2,max:30,message:"长度在2到30个字符之间"}]},selectSysVersionIdLoading:!1,sysVersionOptionList:[],debounceTimer:null,confirmPublishLoading:!1}},methods:{queryVersionListByProductCode:function(){var t=Object(n.a)(Object(r.a)().mark((function t(){var e,a,n=this;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.$route.params.productCode,a={productCode:e},t.next=4,o.a.queryVersionListByProductCode(a).catch((function(t){var e=t.data.message;throw e&&n.$message.error(e),new Error("queryVersionListByProductCode")}));case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),findExistedAppList:function(){var t=Object(n.a)(Object(r.a)().mark((function t(e){var a,n=this;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={name:e,code:e},t.next=5,o.a.findExistedAppList(a).catch((function(t){var e=t.data.message;throw e&&n.$message.error(e),new Error("findExistedAppList")}));case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),addProductAppInfo:function(){var t=Object(n.a)(Object(r.a)().mark((function t(){var e,a,n,s,i,c,u,p,d,l=this;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.id,a=this.productCode,n=e,s=this.basicInfoFormData,i=s.sysVersionId,c=s.name,u=s.remark,p=s.projectName,d={productId:n,productCode:a,sysVersionId:i,name:c,remark:u,projectName:p},t.next=6,o.a.addProductAppInfo(d).catch((function(t){var e=t.data.message;throw e&&l.$message.error(e),new Error("addProductAppInfo")}));case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),reloadSysVersionOptionList:function(){var t=Object(n.a)(Object(r.a)().mark((function t(){var e,a,n=this;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.selectSysVersionIdLoading=!0,t.next=3,this.queryVersionListByProductCode().catch((function(){throw n.selectSysVersionIdLoading=!1,new Error("reloadSysVersionOptionList")}));case 3:e=t.sent,a=e.data.data,this.sysVersionOptionList=a,this.selectSysVersionIdLoading=!1;case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),handleConfirmCreateApp:function(){var t=this;this.$refs.basicInfoForm.validate(function(){var e=Object(n.a)(Object(r.a)().mark((function e(a){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=5;break}clearTimeout(t.debounceTimer),t.debounceTimer=setTimeout(Object(n.a)(Object(r.a)().mark((function e(){var a,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.confirmPublishLoading=!0,e.next=3,t.addProductAppInfo().catch((function(){throw t.confirmPublishLoading=!1,new Error("handleConfirmCreateApp")}));case 3:a=e.sent,n=a.data.data,t.newAppId=n,t.active=2,t.$nextTick((function(){t.confirmPublishLoading=!1}));case 8:case"end":return e.stop()}}),e)}))),300),e.next=6;break;case 5:return e.abrupt("return",!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},created:function(){this.reloadSysVersionOptionList()}},u=c,p=(a("31c1"),a("2877")),d=Object(p.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"create-app"},[a("Title",{attrs:{text:"创建应用"}}),a("Steps",{attrs:{active:t.active,titleList:t.titleList}}),a("div",{directives:[{name:"show",rawName:"v-show",value:1===t.active,expression:"active === 1"}],staticClass:"basic-info-form-wrapper"},[a("el-form",{ref:"basicInfoForm",staticClass:"basic-info-form",attrs:{"label-width":"80px",model:t.basicInfoFormData,rules:t.basicInfoFormRules}},[a("el-form-item",{attrs:{label:"应用版本",prop:"sysVersionId"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择应用版本",loading:t.selectSysVersionIdLoading},model:{value:t.basicInfoFormData.sysVersionId,callback:function(e){t.$set(t.basicInfoFormData,"sysVersionId",e)},expression:"basicInfoFormData.sysVersionId"}},t._l(t.sysVersionOptionList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.versionName,value:t.id}})})),1)],1),a("el-form-item",{attrs:{label:"应用名称",prop:"name"}},[a("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入应用名称，长度在2到20个字符之间"},model:{value:t.basicInfoFormData.name,callback:function(e){t.$set(t.basicInfoFormData,"name","string"==typeof e?e.trim():e)},expression:"basicInfoFormData.name"}})],1),a("el-form-item",{attrs:{label:"应用描述",prop:"remark"}},[a("el-input",{staticStyle:{width:"100%"},attrs:{type:"textarea",resize:"vertical",placeholder:"描述应用的使用对象、功能等信息，长度在10到200个字符之间",rows:2},model:{value:t.basicInfoFormData.remark,callback:function(e){t.$set(t.basicInfoFormData,"remark","string"==typeof e?e.trim():e)},expression:"basicInfoFormData.remark"}})],1),a("el-form-item",{attrs:{label:"项目名称",prop:"projectName"}},[a("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"只允许输入英文字母、数字和“-”，且“-”不能出现在开头或者结尾"},model:{value:t.basicInfoFormData.projectName,callback:function(e){t.$set(t.basicInfoFormData,"projectName","string"==typeof e?e.trim():e)},expression:"basicInfoFormData.projectName"}})],1),a("el-form-item",{attrs:{label:"应用域名"}},["local"===t.env||"devtest"===t.env||"publictest"===t.env?a("el-input",{staticStyle:{width:"100%"},attrs:{value:"测试环境："+t.basicInfoFormData.projectName+"-"+t.productCode+"-test.jdl.com",readonly:!0}}):"uat"===t.env||"prod"===t.env?[a("el-input",{staticStyle:{width:"100%"},attrs:{value:"预发环境："+t.basicInfoFormData.projectName+"-"+t.productCode+"-uat.jdl.com",readonly:!0}}),a("el-input",{staticStyle:{width:"100%","margin-top":"8px"},attrs:{value:"生产环境："+t.basicInfoFormData.projectName+"-"+t.productCode+".jdl.com",readonly:!0}})]:t._e()],2)],1)],1),2===t.active?[t._m(0)]:t._e(),a("div",{staticClass:"button-wrapper"},[1===t.active?[a("el-button",{on:{click:function(e){return t.$router.push({name:"AppManagerCreateApp"})}}},[t._v("上一步")]),a("el-button",{attrs:{type:"primary",loading:t.confirmPublishLoading},on:{click:t.handleConfirmCreateApp}},[t._v("确认创建")])]:2===t.active?a("div",{staticClass:"button-wrapper__inner"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.$router.push({path:"/appManager"})}}},[t._v("返回应用列表")])],1):t._e()],2)],2)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"finish-wrapper"},[a("i",{staticClass:"el-icon-success"}),a("p",{staticClass:"finish-title"},[t._v("应用已提交审核")]),a("p",{staticClass:"finish-tip"},[t._v(" 软件产品负责人审核通过后即可创建成功，您可在京ME或OA查询审批进度。 ")])])}],!1,null,"6d891ba0",null);e.default=d.exports},e75f:function(t,e,a){"use strict";a("9f9e")}}]);