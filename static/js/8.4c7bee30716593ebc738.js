webpackJsonp([8],{1019:function(e,t,a){var r=a(768);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(556)("4cea94d2",r,!0)},1023:function(e,t,a){a(1019);var r=a(64)(a(761),a(1033),"data-v-e6057db4",null);e.exports=r.exports},1033:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:e.filters}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"姓名"},model:{value:e.filters.name,callback:function(t){e.$set(e.filters,"name",t)},expression:"filters.name"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.getUsers}},[e._v("查询")])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v("新增")])],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.users,"highlight-current-row":"","element-loading-text":"拼命加载中..."},on:{"selection-change":e.selsChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{type:"index",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"sex",label:"性别",width:"100",formatter:e.formatSex,sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"age",label:"年龄",width:"100",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"birth",label:"生日",width:"120",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"addr",label:"地址","min-width":"180",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-button",{attrs:{type:"danger",disabled:0===this.sels.length},on:{click:e.batchRemove}},[e._v("批量删除")]),e._v(" "),a("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next","page-size":15,total:e.total},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:"编辑","close-on-click-modal":!1},model:{value:e.editFormVisible,callback:function(t){e.editFormVisible=t},expression:"editFormVisible"}},[a("el-form",{ref:"editForm",attrs:{model:e.editForm,"label-width":"80px",rules:e.editFormRules}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"性别"}},[a("el-radio-group",{model:{value:e.editForm.sex,callback:function(t){e.$set(e.editForm,"sex",t)},expression:"editForm.sex"}},[a("el-radio",{staticClass:"radio",attrs:{label:1}},[e._v("男")]),e._v(" "),a("el-radio",{staticClass:"radio",attrs:{label:0}},[e._v("女")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"年龄"}},[a("el-input-number",{attrs:{min:0,max:200},model:{value:e.editForm.age,callback:function(t){e.$set(e.editForm,"age",t)},expression:"editForm.age"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"生日"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.editForm.birth,callback:function(t){e.$set(e.editForm,"birth",t)},expression:"editForm.birth"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.editForm.addr,callback:function(t){e.$set(e.editForm,"addr",t)},expression:"editForm.addr"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){e.editFormVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.editLoading},nativeOn:{click:function(t){e.editSubmit(t)}}},[e._v("提交")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"新增","close-on-click-modal":!1},model:{value:e.addFormVisible,callback:function(t){e.addFormVisible=t},expression:"addFormVisible"}},[a("el-form",{ref:"addForm",attrs:{model:e.addForm,"label-width":"80px",rules:e.addFormRules}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"性别"}},[a("el-radio-group",{model:{value:e.addForm.sex,callback:function(t){e.$set(e.addForm,"sex",t)},expression:"addForm.sex"}},[a("el-radio",{staticClass:"radio",attrs:{label:1}},[e._v("男")]),e._v(" "),a("el-radio",{staticClass:"radio",attrs:{label:0}},[e._v("女")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"年龄"}},[a("el-input-number",{attrs:{min:0,max:200},model:{value:e.addForm.age,callback:function(t){e.$set(e.addForm,"age",t)},expression:"addForm.age"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"生日"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.addForm.birth,callback:function(t){e.$set(e.addForm,"birth",t)},expression:"addForm.birth"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.addForm.addr,callback:function(t){e.$set(e.addForm,"addr",t)},expression:"addForm.addr"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){e.addFormVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.addLoading},nativeOn:{click:function(t){e.addSubmit(t)}}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]}},1092:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(222),o=r(i),l=a(609),s=r(l),n=a(221);t.default={data:function(){return{filters:{name:""},users:[],total:0,page:1,listLoading:!1,sels:[],editFormVisible:!1,editLoading:!1,editFormRules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}]},editForm:{id:0,name:"",sex:-1,age:0,birth:"",addr:""},addFormVisible:!1,addLoading:!1,addFormRules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}]},addForm:{name:"",sex:-1,age:0,birth:"",addr:""}}},methods:{formatSex:function(e,t){return 1==e.sex?"男":0==e.sex?"女":"未知"},handleCurrentChange:function(e){this.page=e,this.getUsers()},getUsers:function(){var e=this,t={page:this.page,name:this.filters.name};this.listLoading=!0,(0,n.getUserListPage)(t).then(function(t){e.total=t.data.total,e.users=t.data.users,e.listLoading=!1,console.log(e.users)})},handleDel:function(e,t){var a=this;this.$confirm("确认删除该记录吗?","提示",{type:"warning"}).then(function(){a.listLoading=!0;var e={id:t.id};(0,n.removeUser)(e).then(function(e){a.listLoading=!1,a.$message({message:"删除成功",type:"success"}),a.getUsers()})}).catch(function(){})},handleEdit:function(e,t){this.editFormVisible=!0,this.editForm=(0,o.default)({},t)},handleAdd:function(){this.addFormVisible=!0,this.addForm={name:"",sex:-1,age:0,birth:"",addr:""}},editSubmit:function(){var e=this;this.$refs.editForm.validate(function(t){t&&e.$confirm("确认提交吗？","提示",{}).then(function(){e.editLoading=!0;var t=(0,o.default)({},e.editForm);t.birth=t.birth&&""!=t.birth?s.default.formatDate.format(new Date(t.birth),"yyyy-MM-dd"):"",(0,n.editUser)(t).then(function(t){e.editLoading=!1,e.$message({message:"提交成功",type:"success"}),e.$refs.editForm.resetFields(),e.editFormVisible=!1,e.getUsers()})})})},addSubmit:function(){var e=this;this.$refs.addForm.validate(function(t){t&&e.$confirm("确认提交吗？","提示",{}).then(function(){e.addLoading=!0;var t=(0,o.default)({},e.addForm);t.birth=t.birth&&""!=t.birth?s.default.formatDate.format(new Date(t.birth),"yyyy-MM-dd"):"",(0,n.addUser)(t).then(function(t){e.addLoading=!1,e.$message({message:"提交成功",type:"success"}),e.$refs.addForm.resetFields(),e.addFormVisible=!1,e.getUsers()})})})},selsChange:function(e){this.sels=e},batchRemove:function(){var e=this,t=this.sels.map(function(e){return e.id}).toString();this.$confirm("确认删除选中记录吗？","提示",{type:"warning"}).then(function(){e.listLoading=!0;var a={ids:t};(0,n.batchRemoveUser)(a).then(function(t){e.listLoading=!1,e.$message({message:"删除成功",type:"success"}),e.getUsers()})}).catch(function(){})}},mounted:function(){this.getUsers()}}},1126:function(e,t,a){t=e.exports=a(555)(),t.push([e.i,".toolbar[data-v-a59fc34a]{padding:0}",""])},1155:function(e,t,a){var r=a(1126);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(556)("e817866a",r,!0)},1185:function(e,t,a){a(1155);var r=a(64)(a(1092),a(1221),"data-v-a59fc34a",null);e.exports=r.exports},1221:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:e.filters}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"姓名"},model:{value:e.filters.name,callback:function(t){e.$set(e.filters,"name",t)},expression:"filters.name"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.getUsers}},[e._v("查询")])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v("新增")])],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.users,"highlight-current-row":"","element-loading-text":"拼命加载中..."},on:{"selection-change":e.selsChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{type:"index",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"sex",label:"性别",width:"100",formatter:e.formatSex,sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"age",label:"年龄",width:"100",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"birth",label:"生日",width:"120",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"addr",label:"地址","min-width":"180",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}},[a("el-button",{attrs:{type:"danger",disabled:0===this.sels.length},on:{click:e.batchRemove}},[e._v("批量删除")]),e._v(" "),a("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next","page-size":15,total:e.total},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:"编辑","close-on-click-modal":!1},model:{value:e.editFormVisible,callback:function(t){e.editFormVisible=t},expression:"editFormVisible"}},[a("el-form",{ref:"editForm",attrs:{model:e.editForm,"label-width":"80px",rules:e.editFormRules}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"性别"}},[a("el-radio-group",{model:{value:e.editForm.sex,callback:function(t){e.$set(e.editForm,"sex",t)},expression:"editForm.sex"}},[a("el-radio",{staticClass:"radio",attrs:{label:1}},[e._v("男")]),e._v(" "),a("el-radio",{staticClass:"radio",attrs:{label:0}},[e._v("女")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"年龄"}},[a("el-input-number",{attrs:{min:0,max:200},model:{value:e.editForm.age,callback:function(t){e.$set(e.editForm,"age",t)},expression:"editForm.age"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"生日"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.editForm.birth,callback:function(t){e.$set(e.editForm,"birth",t)},expression:"editForm.birth"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.editForm.addr,callback:function(t){e.$set(e.editForm,"addr",t)},expression:"editForm.addr"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){e.editFormVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.editLoading},nativeOn:{click:function(t){e.editSubmit(t)}}},[e._v("提交")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"新增","close-on-click-modal":!1},model:{value:e.addFormVisible,callback:function(t){e.addFormVisible=t},expression:"addFormVisible"}},[a("el-form",{ref:"addForm",attrs:{model:e.addForm,"label-width":"80px",rules:e.addFormRules}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"性别"}},[a("el-radio-group",{model:{value:e.addForm.sex,callback:function(t){e.$set(e.addForm,"sex",t)},expression:"addForm.sex"}},[a("el-radio",{staticClass:"radio",attrs:{label:1}},[e._v("男")]),e._v(" "),a("el-radio",{staticClass:"radio",attrs:{label:0}},[e._v("女")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"年龄"}},[a("el-input-number",{attrs:{min:0,max:200},model:{value:e.addForm.age,callback:function(t){e.$set(e.addForm,"age",t)},expression:"addForm.age"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"生日"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.addForm.birth,callback:function(t){e.$set(e.addForm,"birth",t)},expression:"addForm.birth"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.addForm.addr,callback:function(t){e.$set(e.addForm,"addr",t)},expression:"addForm.addr"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){e.addFormVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.addLoading},nativeOn:{click:function(t){e.addSubmit(t)}}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]}},590:function(e,t,a){function r(e){return a(i(e))}function i(e){var t=o[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var o={"./views/manager/manager-lists.vue":1185};r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=590},591:function(e,t,a){function r(e){return a(i(e))}function i(e){var t=o[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var o={"./views/manager/manager-login-log.vue":1023};r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=591},609:function(e,t,a){"use strict";function r(e,t){for(var t=t-(e+"").length,a=0;a<t;a++)e="0"+e;return e}Object.defineProperty(t,"__esModule",{value:!0});var i=/([yMdhsm])(\1*)/g;t.default={getQueryStringByName:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),a=window.location.search.substr(1).match(t),r="";return null!=a&&(r=a[2]),t=null,a=null,null==r||""==r||"undefined"==r?"":r},formatDate:{format:function(e,t){return t=t||"yyyy-MM-dd",t.replace(i,function(t){switch(t.charAt(0)){case"y":return r(e.getFullYear(),t.length);case"M":return r(e.getMonth()+1,t.length);case"d":return r(e.getDate(),t.length);case"w":return e.getDay()+1;case"h":return r(e.getHours(),t.length);case"m":return r(e.getMinutes(),t.length);case"s":return r(e.getSeconds(),t.length)}})},parse:function(e,t){var a=t.match(i),r=e.match(/(\d)+/g);if(a.length==r.length){for(var o=new Date(1970,0,1),l=0;l<a.length;l++){var s=parseInt(r[l]);switch(a[l].charAt(0)){case"y":o.setFullYear(s);break;case"M":o.setMonth(s-1);break;case"d":o.setDate(s);break;case"h":o.setHours(s);break;case"m":o.setMinutes(s);break;case"s":o.setSeconds(s)}}return o}return null}}}},761:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(222),o=r(i),l=a(609),s=r(l),n=a(221);t.default={data:function(){return{filters:{name:""},users:[],total:0,page:1,listLoading:!1,sels:[],editFormVisible:!1,editLoading:!1,editFormRules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}]},editForm:{id:0,name:"",sex:-1,age:0,birth:"",addr:""},addFormVisible:!1,addLoading:!1,addFormRules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}]},addForm:{name:"",sex:-1,age:0,birth:"",addr:""}}},methods:{formatSex:function(e,t){return 1==e.sex?"男":0==e.sex?"女":"未知"},handleCurrentChange:function(e){this.page=e,this.getUsers()},getUsers:function(){var e=this,t={page:this.page,name:this.filters.name};this.listLoading=!0,(0,n.getUserListPage)(t).then(function(t){e.total=t.data.total,e.users=t.data.users,e.listLoading=!1,console.log(e.users)})},handleDel:function(e,t){var a=this;this.$confirm("确认删除该记录吗?","提示",{type:"warning"}).then(function(){a.listLoading=!0;var e={id:t.id};(0,n.removeUser)(e).then(function(e){a.listLoading=!1,a.$message({message:"删除成功",type:"success"}),a.getUsers()})}).catch(function(){})},handleEdit:function(e,t){this.editFormVisible=!0,this.editForm=(0,o.default)({},t)},handleAdd:function(){this.addFormVisible=!0,this.addForm={name:"",sex:-1,age:0,birth:"",addr:""}},editSubmit:function(){var e=this;this.$refs.editForm.validate(function(t){t&&e.$confirm("确认提交吗？","提示",{}).then(function(){e.editLoading=!0;var t=(0,o.default)({},e.editForm);t.birth=t.birth&&""!=t.birth?s.default.formatDate.format(new Date(t.birth),"yyyy-MM-dd"):"",(0,n.editUser)(t).then(function(t){e.editLoading=!1,e.$message({message:"提交成功",type:"success"}),e.$refs.editForm.resetFields(),e.editFormVisible=!1,e.getUsers()})})})},addSubmit:function(){var e=this;this.$refs.addForm.validate(function(t){t&&e.$confirm("确认提交吗？","提示",{}).then(function(){e.addLoading=!0;var t=(0,o.default)({},e.addForm);t.birth=t.birth&&""!=t.birth?s.default.formatDate.format(new Date(t.birth),"yyyy-MM-dd"):"",(0,n.addUser)(t).then(function(t){e.addLoading=!1,e.$message({message:"提交成功",type:"success"}),e.$refs.addForm.resetFields(),e.addFormVisible=!1,e.getUsers()})})})},selsChange:function(e){this.sels=e},batchRemove:function(){var e=this,t=this.sels.map(function(e){return e.id}).toString();this.$confirm("确认删除选中记录吗？","提示",{type:"warning"}).then(function(){e.listLoading=!0;var a={ids:t};(0,n.batchRemoveUser)(a).then(function(t){e.listLoading=!1,e.$message({message:"删除成功",type:"success"}),e.getUsers()})}).catch(function(){})}},mounted:function(){this.getUsers()}}},768:function(e,t,a){t=e.exports=a(555)(),t.push([e.i,".toolbar[data-v-e6057db4]{padding:0}",""])}});