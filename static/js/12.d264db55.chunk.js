(this["webpackJsonpreact-teach"]=this["webpackJsonpreact-teach"]||[]).push([[12],{308:function(e,a,n){"use strict";n.r(a);var t=n(18),r=n(310),s=n(312),o=n(130),l=n(0),c=n.n(l),i=n(19),u=n(65),m=n(5);function p(){var e=Object(t.a)(["\n  text-align: center;\n  margin-bottom: 30px;\n"]);return p=function(){return e},e}function d(){var e=Object(t.a)(["\n  max-width: 600px;\n  margin: 30px auto;\n  box-shadow: 2px 2px 4px 0 rgba(0,0,0,0.2);\n  border-radius: 4px;\n  padding: 20px;\n"]);return d=function(){return e},e}var g=i.a.div(d()),f=i.a.h1(p()),b={labelCol:{span:6},wrapperCol:{span:15}},h={wrapperCol:{offset:6,span:18}};a.default=function(){var e=Object(u.a)().AuthStore,a=Object(m.f)();return c.a.createElement(g,null,c.a.createElement(f,null,"\u6ce8\u518c"),c.a.createElement(r.a,Object.assign({},b,{name:"basic",onFinish:function(n){console.log("11"),console.log("Success:",n),e.setUsername(n.username),e.setPassword(n.password),e.register().then((function(){console.log("\u6ce8\u518c\u6210\u529f"),a.push("/")})).catch((function(){console.log("\u6ce8\u518c\u5931\u8d25")}))},onFinishFailed:function(e){console.log("Failed:",e)}}),c.a.createElement(r.a.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"},{validator:function(e,a){return/\W/.test(a)?Promise.reject("\u53ea\u80fd\u662f\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf"):a.length<4||a.length>10?Promise.reject("\u957f\u5ea6\u4e3a4~10\u4e2a\u5b57\u7b26"):Promise.resolve()}}]},c.a.createElement(s.a,null)),c.a.createElement(r.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"},{min:6,message:"\u6700\u5c11\u8f93\u51656\u4e2a\u5b57\u7b26\u957f\u5ea6"},{max:12,message:"\u6700\u5927\u8f93\u516512\u4e2a\u5b57\u7b26\u957f\u5ea6"}]},c.a.createElement(s.a.Password,null)),c.a.createElement(r.a.Item,{label:"\u786e\u8ba4\u5bc6\u7801",name:"confirmPassword",rules:[{required:!0,message:"\u8bf7\u786e\u8ba4\u5bc6\u7801"},function(e){var a=e.getFieldValue;return{validator:function(e,n){return a("password")===n?Promise.resolve():Promise.reject("\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4")}}}]},c.a.createElement(s.a.Password,null)),c.a.createElement(r.a.Item,h,c.a.createElement(o.a,{type:"primary",htmlType:"submit"},"\u63d0\u4ea4"))))}}}]);
//# sourceMappingURL=12.d264db55.chunk.js.map