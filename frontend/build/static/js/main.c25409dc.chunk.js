(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{78:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),a=n(46),r=n.n(a),s=n(47),u="csrf-token",d="CSRF-Token";function o(t){var e;return null===(e=document.cookie.split("; ").find((function(e){return(null===e||void 0===e?void 0:e.split("=")[0])===t})))||void 0===e?void 0:e.split("=")[1]}var b=n.n(s).a.create({headers:[{name:d,value:o(u)}].reduce((function(t,e){return e.value&&(t[e.name]=e.value),t}),{})}),j=b,l=n(28),O=n(82),h=n(5),v=n(0);var p=function(t){var e=t.a,n=t.onSubmit,c={a:e?e.a:""};return Object(v.jsx)(h.c,{initialValues:c,validate:function(){return{}},onSubmit:n,children:function(t){var e=t.isSubmitting;return Object(v.jsxs)(h.b,{children:[Object(v.jsx)(h.a,{type:"text",name:"a",placeholder:"A"}),Object(v.jsx)("button",{type:"submit",disabled:e,children:"Submit"})]})}})},f=n(9);var x=function(){var t=Object(l.b)(),e=Object(f.f)(),n=Object(O.a)((function(t){return j.post("/api/v1/as",t)}),{onSuccess:function(){t.invalidateQueries("as")}});return Object(v.jsx)(p,{onSubmit:function(t,c){var i=c.setSubmitting;n.mutate(t),null===i||void 0===i||i(!1),e.push("/as")}})},m=n(81);function g(t){var e=t.a,n=t.handleEdit,c=t.handleDelete,i=t.handleDetail;return Object(v.jsxs)(v.Fragment,{children:[e.a,Object(v.jsx)("br",{}),Object(v.jsx)("button",{type:"button",onClick:function(){return i(e)},children:"detail"}),Object(v.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"edit"}),Object(v.jsx)("button",{type:"button",onClick:function(){return c(e)},children:"delete"})]})}var S=function(){var t,e,n=Object(f.f)(),c=Object(l.b)(),i=Object(m.a)("as",(function(){return j.get("/api/v1/as").then((function(t){return t.data}))})),a=Object(O.a)((function(t){var e=t.id;return j.delete("/api/v1/as/".concat(e))}),{onSuccess:function(){c.invalidateQueries("as")}}),r=function(t){var e=t.id;n.push("/as/update/".concat(e))},s=function(t){var e=t.id;a.mutate({id:e})},u=function(t){var e=t.id;n.push("/as/detail/".concat(e))};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("p",{children:[null===(t=i.data)||void 0===t?void 0:t.length," as"]}),Object(v.jsx)("ul",{children:null===(e=i.data)||void 0===e?void 0:e.map((function(t){return Object(v.jsx)("li",{children:Object(v.jsx)(g,{a:t,handleDelete:s,handleEdit:r,handleDetail:u})},t.id)}))})]})};var y=function(){var t=Object(f.g)().id,e=Object(m.a)(["as",t],(function(){return j.get("/api/v1/as/".concat(t)).then((function(t){return t.data}))})),n=e.data;if(e.isLoading)return Object(v.jsx)("div",{children:"Loading..."});var c=n;return Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:c.a}),Object(v.jsx)("br",{})]})};var C=function(){var t=Object(f.g)().id,e=Object(l.b)(),n=Object(f.f)(),c=Object(m.a)(["as",t],(function(){return j.get("/api/v1/as/".concat(t)).then((function(t){return t.data}))})),i=c.data,a=c.isLoading,r=Object(O.a)((function(e){return j.put("/api/v1/as/".concat(t),e).then((function(t){return t.data}))}),{onSuccess:function(){e.invalidateQueries("as")}});if(a)return Object(v.jsx)("div",{children:"Loading..."});var s=i;return Object(v.jsx)(p,{a:s,onSubmit:function(t,e){var c=e.setSubmitting;r.mutate(t),null===c||void 0===c||c(!1),n.push("/as")}})};var w=function(t){var e=t.b,n=t.onSubmit,c={b:e?e.b:""};return Object(v.jsx)(h.c,{initialValues:c,validate:function(){return{}},onSubmit:n,children:function(t){var e=t.isSubmitting;return Object(v.jsxs)(h.b,{children:[Object(v.jsx)(h.a,{type:"text",name:"b",placeholder:"B"}),Object(v.jsx)("button",{type:"submit",disabled:e,children:"Submit"})]})}})};var k=function(){var t=Object(l.b)(),e=Object(f.f)(),n=Object(O.a)((function(t){return j.post("/api/v1/bs",t)}),{onSuccess:function(){t.invalidateQueries("bs")}});return Object(v.jsx)(w,{onSubmit:function(t,c){var i=c.setSubmitting;n.mutate(t),null===i||void 0===i||i(!1),e.push("/bs")}})};function D(t){var e=t.b,n=t.handleEdit,c=t.handleDelete,i=t.handleDetail;return Object(v.jsxs)(v.Fragment,{children:[e.b,Object(v.jsx)("br",{}),Object(v.jsx)("button",{type:"button",onClick:function(){return i(e)},children:"detail"}),Object(v.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"edit"}),Object(v.jsx)("button",{type:"button",onClick:function(){return c(e)},children:"delete"})]})}var L=function(){var t,e,n=Object(f.f)(),c=Object(l.b)(),i=Object(m.a)("bs",(function(){return j.get("/api/v1/bs").then((function(t){return t.data}))})),a=Object(O.a)((function(t){var e=t.id;return j.delete("/api/v1/bs/".concat(e))}),{onSuccess:function(){c.invalidateQueries("bs")}}),r=function(t){var e=t.id;n.push("/bs/update/".concat(e))},s=function(t){var e=t.id;a.mutate({id:e})},u=function(t){var e=t.id;n.push("/bs/detail/".concat(e))};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("p",{children:[null===(t=i.data)||void 0===t?void 0:t.length," bs"]}),Object(v.jsx)("ul",{children:null===(e=i.data)||void 0===e?void 0:e.map((function(t){return Object(v.jsx)("li",{children:Object(v.jsx)(D,{b:t,handleDelete:s,handleEdit:r,handleDetail:u})},t.id)}))})]})};var Q=function(){var t=Object(f.g)().id,e=Object(m.a)(["bs",t],(function(){return j.get("/api/v1/bs/".concat(t)).then((function(t){return t.data}))})),n=e.data;if(e.isLoading)return Object(v.jsx)("div",{children:"Loading..."});var c=n;return Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:c.b}),Object(v.jsx)("br",{})]})};var E=function(){var t=Object(f.g)().id,e=Object(l.b)(),n=Object(f.f)(),c=Object(m.a)(["bs",t],(function(){return j.get("/api/v1/bs/".concat(t)).then((function(t){return t.data}))})),i=c.data,a=c.isLoading,r=Object(O.a)((function(e){return j.put("/api/v1/bs/".concat(t),e).then((function(t){return t.data}))}),{onSuccess:function(){e.invalidateQueries("bs")}});if(a)return Object(v.jsx)("div",{children:"Loading..."});var s=i;return Object(v.jsx)(w,{b:s,onSubmit:function(t,e){var c=e.setSubmitting;r.mutate(t),null===c||void 0===c||c(!1),n.push("/bs")}})};var F=function(t){var e=t.c,n=t.onSubmit,c={c:e?e.c:""};return Object(v.jsx)(h.c,{initialValues:c,validate:function(){return{}},onSubmit:n,children:function(t){var e=t.isSubmitting;return Object(v.jsxs)(h.b,{children:[Object(v.jsx)(h.a,{type:"text",name:"c",placeholder:"C"}),Object(v.jsx)("button",{type:"submit",disabled:e,children:"Submit"})]})}})};var N=function(){var t=Object(l.b)(),e=Object(f.f)(),n=Object(O.a)((function(t){return j.post("/api/v1/cs",t)}),{onSuccess:function(){t.invalidateQueries("cs")}});return Object(v.jsx)(F,{onSubmit:function(t,c){var i=c.setSubmitting;n.mutate(t),null===i||void 0===i||i(!1),e.push("/cs")}})};function V(t){var e=t.c,n=t.handleEdit,c=t.handleDelete,i=t.handleDetail;return Object(v.jsxs)(v.Fragment,{children:[e.c,Object(v.jsx)("br",{}),Object(v.jsx)("button",{type:"button",onClick:function(){return i(e)},children:"detail"}),Object(v.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"edit"}),Object(v.jsx)("button",{type:"button",onClick:function(){return c(e)},children:"delete"})]})}var H=function(){var t,e,n=Object(f.f)(),c=Object(l.b)(),i=Object(m.a)("cs",(function(){return j.get("/api/v1/cs").then((function(t){return t.data}))})),a=Object(O.a)((function(t){var e=t.id;return j.delete("/api/v1/cs/".concat(e))}),{onSuccess:function(){c.invalidateQueries("cs")}}),r=function(t){var e=t.id;n.push("/cs/update/".concat(e))},s=function(t){var e=t.id;a.mutate({id:e})},u=function(t){var e=t.id;n.push("/cs/detail/".concat(e))};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("p",{children:[null===(t=i.data)||void 0===t?void 0:t.length," cs"]}),Object(v.jsx)("ul",{children:null===(e=i.data)||void 0===e?void 0:e.map((function(t){return Object(v.jsx)("li",{children:Object(v.jsx)(V,{c:t,handleDelete:s,handleEdit:r,handleDetail:u})},t.id)}))})]})};var U=function(){var t=Object(f.g)().id,e=Object(m.a)(["cs",t],(function(){return j.get("/api/v1/cs/".concat(t)).then((function(t){return t.data}))})),n=e.data;if(e.isLoading)return Object(v.jsx)("div",{children:"Loading..."});var c=n;return Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:c.c}),Object(v.jsx)("br",{})]})};var B=function(){var t=Object(f.g)().id,e=Object(l.b)(),n=Object(f.f)(),c=Object(m.a)(["cs",t],(function(){return j.get("/api/v1/cs/".concat(t)).then((function(t){return t.data}))})),i=c.data,a=c.isLoading,r=Object(O.a)((function(e){return j.put("/api/v1/cs/".concat(t),e).then((function(t){return t.data}))}),{onSuccess:function(){e.invalidateQueries("cs")}});if(a)return Object(v.jsx)("div",{children:"Loading..."});var s=i;return Object(v.jsx)(F,{c:s,onSubmit:function(t,e){var c=e.setSubmitting;r.mutate(t),null===c||void 0===c||c(!1),n.push("/cs")}})};var R=function(t){var e=t.d,n=t.onSubmit,c={d:e?e.d:""};return Object(v.jsx)(h.c,{initialValues:c,validate:function(){return{}},onSubmit:n,children:function(t){var e=t.isSubmitting;return Object(v.jsxs)(h.b,{children:[Object(v.jsx)(h.a,{type:"text",name:"d",placeholder:"D"}),Object(v.jsx)("button",{type:"submit",disabled:e,children:"Submit"})]})}})};var A=function(){var t=Object(l.b)(),e=Object(f.f)(),n=Object(O.a)((function(t){return j.post("/api/v1/ds",t)}),{onSuccess:function(){t.invalidateQueries("ds")}});return Object(v.jsx)(R,{onSubmit:function(t,c){var i=c.setSubmitting;n.mutate(t),null===i||void 0===i||i(!1),e.push("/ds")}})};function P(t){var e=t.d,n=t.handleEdit,c=t.handleDelete,i=t.handleDetail;return Object(v.jsxs)(v.Fragment,{children:[e.d,Object(v.jsx)("br",{}),Object(v.jsx)("button",{type:"button",onClick:function(){return i(e)},children:"detail"}),Object(v.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"edit"}),Object(v.jsx)("button",{type:"button",onClick:function(){return c(e)},children:"delete"})]})}var J=function(){var t,e,n=Object(f.f)(),c=Object(l.b)(),i=Object(m.a)("ds",(function(){return j.get("/api/v1/ds").then((function(t){return t.data}))})),a=Object(O.a)((function(t){var e=t.id;return j.delete("/api/v1/ds/".concat(e))}),{onSuccess:function(){c.invalidateQueries("ds")}}),r=function(t){var e=t.id;n.push("/ds/update/".concat(e))},s=function(t){var e=t.id;a.mutate({id:e})},u=function(t){var e=t.id;n.push("/ds/detail/".concat(e))};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("p",{children:[null===(t=i.data)||void 0===t?void 0:t.length," ds"]}),Object(v.jsx)("ul",{children:null===(e=i.data)||void 0===e?void 0:e.map((function(t){return Object(v.jsx)("li",{children:Object(v.jsx)(P,{d:t,handleDelete:s,handleEdit:r,handleDetail:u})},t.id)}))})]})};var I=function(){var t=Object(f.g)().id,e=Object(m.a)(["ds",t],(function(){return j.get("/api/v1/ds/".concat(t)).then((function(t){return t.data}))})),n=e.data;if(e.isLoading)return Object(v.jsx)("div",{children:"Loading..."});var c=n;return Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:c.d}),Object(v.jsx)("br",{})]})};var M=function(){var t=Object(f.g)().id,e=Object(l.b)(),n=Object(f.f)(),c=Object(m.a)(["ds",t],(function(){return j.get("/api/v1/ds/".concat(t)).then((function(t){return t.data}))})),i=c.data,a=c.isLoading,r=Object(O.a)((function(e){return j.put("/api/v1/ds/".concat(t),e).then((function(t){return t.data}))}),{onSuccess:function(){e.invalidateQueries("ds")}});if(a)return Object(v.jsx)("div",{children:"Loading..."});var s=i;return Object(v.jsx)(R,{d:s,onSubmit:function(t,e){var c=e.setSubmitting;r.mutate(t),null===c||void 0===c||c(!1),n.push("/ds")}})};var T=function(t){var e=t.user,n=t.onSubmit,c={username:e?e.username:"",passwordHash:e?e.passwordHash:""};return Object(v.jsx)(h.c,{initialValues:c,validate:function(){return{}},onSubmit:n,children:function(t){var e=t.isSubmitting;return Object(v.jsxs)(h.b,{children:[Object(v.jsx)(h.a,{type:"text",name:"username",placeholder:"Username"}),Object(v.jsx)(h.a,{type:"text",name:"passwordHash",placeholder:"PasswordHash"}),Object(v.jsx)("button",{type:"submit",disabled:e,children:"Submit"})]})}})};var q=function(){var t=Object(l.b)(),e=Object(f.f)(),n=Object(O.a)((function(t){return j.post("/api/v1/users",t)}),{onSuccess:function(){t.invalidateQueries("users")}});return Object(v.jsx)(T,{onSubmit:function(t,c){var i=c.setSubmitting;n.mutate(t),null===i||void 0===i||i(!1),e.push("/users")}})};function z(t){var e=t.user,n=t.handleEdit,c=t.handleDelete,i=t.handleDetail;return Object(v.jsxs)(v.Fragment,{children:[e.username,Object(v.jsx)("br",{}),Object(v.jsx)("button",{type:"button",onClick:function(){return i(e)},children:"detail"}),Object(v.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"edit"}),Object(v.jsx)("button",{type:"button",onClick:function(){return c(e)},children:"delete"})]})}var G=function(){var t,e,n=Object(f.f)(),c=Object(l.b)(),i=Object(m.a)("users",(function(){return j.get("/api/v1/users").then((function(t){return t.data}))})),a=Object(O.a)((function(t){var e=t.id;return j.delete("/api/v1/users/".concat(e))}),{onSuccess:function(){c.invalidateQueries("users")}}),r=function(t){var e=t.id;n.push("/users/update/".concat(e))},s=function(t){var e=t.id;a.mutate({id:e})},u=function(t){var e=t.id;n.push("/users/detail/".concat(e))};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("p",{children:[null===(t=i.data)||void 0===t?void 0:t.length," users"]}),Object(v.jsx)("ul",{children:null===(e=i.data)||void 0===e?void 0:e.map((function(t){return Object(v.jsx)("li",{children:Object(v.jsx)(z,{user:t,handleDelete:s,handleEdit:r,handleDetail:u})},t.id)}))})]})};var K=function(){var t=Object(f.g)().id,e=Object(m.a)(["users",t],(function(){return j.get("/api/v1/users/".concat(t)).then((function(t){return t.data}))})),n=e.data;if(e.isLoading)return Object(v.jsx)("div",{children:"Loading..."});var c=n;return Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:c.username}),Object(v.jsx)("br",{}),Object(v.jsx)("label",{children:c.passwordHash}),Object(v.jsx)("br",{})]})};var W=function(){var t=Object(f.g)().id,e=Object(l.b)(),n=Object(f.f)(),c=Object(m.a)(["users",t],(function(){return j.get("/api/v1/users/".concat(t)).then((function(t){return t.data}))})),i=c.data,a=c.isLoading,r=Object(O.a)((function(e){return j.put("/api/v1/users/".concat(t),e).then((function(t){return t.data}))}),{onSuccess:function(){e.invalidateQueries("users")}});if(a)return Object(v.jsx)("div",{children:"Loading..."});var s=i;return Object(v.jsx)(T,{user:s,onSubmit:function(t,e){var c=e.setSubmitting;r.mutate(t),null===c||void 0===c||c(!1),n.push("/users")}})},X=n(23),Y=n.n(X),Z=n(30),$=n(31);var _=function(){var t=Object(c.useState)(""),e=Object($.a)(t,2),n=e[0],i=e[1],a=Object(f.f)(),r=Object(l.b)(),s=function(t,e){var n=e.setSubmitting;if(t.response&&t.response.data){var c=t.response.data.error;c&&i(c)}null===n||void 0===n||n(!1)},u=function(){var t=Object(Z.a)(Y.a.mark((function t(e,n){var c;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.setSubmitting,t.prev=1,t.next=4,j.post("/auth/login",e);case 4:return null===c||void 0===c||c(!1),t.next=7,r.invalidateQueries("user");case 7:a.push("/"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),s(t.t0,{setSubmitting:c});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}();return Object(v.jsx)(h.c,{initialValues:{username:"",password:""},validate:function(){return{}},onSubmit:u,children:function(t){var e=t.isSubmitting;return Object(v.jsxs)(h.b,{children:[Object(v.jsx)(h.a,{type:"text",name:"username",placeholder:"Username"}),Object(v.jsx)(h.a,{type:"password",name:"password",placeholder:"Password"}),n&&Object(v.jsx)("div",{children:n}),Object(v.jsx)("button",{type:"submit",disabled:e,children:"Login"})]})}})};var tt=function(){var t=Object(c.useState)(""),e=Object($.a)(t,2),n=e[0],i=e[1],a=function(){var t=Object(Z.a)(Y.a.mark((function t(e,n){var c,a;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.setSubmitting,t.prev=1,t.next=4,j.post("/auth/register",e);case 4:null===c||void 0===c||c(!1),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),t.t0.response&&t.t0.response.data&&(a=t.t0.response.data.error)&&i(a),null===c||void 0===c||c(!1);case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}();return Object(v.jsx)(h.c,{initialValues:{username:"",email:"",password:"",passwordConfirm:""},validate:function(){return{}},onSubmit:a,children:function(t){var e=t.isSubmitting;return Object(v.jsxs)(h.b,{children:[Object(v.jsx)(h.a,{type:"text",name:"username",placeholder:"Username"}),Object(v.jsx)(h.a,{type:"text",name:"email",placeholder:"Email"}),Object(v.jsx)(h.a,{type:"password",name:"password",placeholder:"Password"}),Object(v.jsx)(h.a,{type:"password",name:"passwordConfirm",placeholder:"Confirm password"}),n&&Object(v.jsx)("div",{children:n}),Object(v.jsx)("button",{type:"submit",disabled:e,children:"Register"})]})}})},et=n(4);var nt=function(){return Object(m.a)("user",(function(){return j.get("/auth/me")}),{retry:!1}).data,Object(c.useEffect)((function(){o(u)||b.get("/auth/csrf").then((function(){b.defaults.headers[d]=o(u)})).catch((function(t){console.warn("Received error while fetching CSRF token :",t)}))}),[]),Object(v.jsxs)(et.a,{children:[Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{className:"flex",children:[Object(v.jsxs)("li",{children:[Object(v.jsx)(et.b,{to:"/",children:"Home"}),Object(v.jsx)("br",{})]}),Object(v.jsxs)("li",{className:"ml-10",children:[Object(v.jsx)(et.b,{to:"/login",children:"Login"}),Object(v.jsx)("br",{}),Object(v.jsx)(et.b,{to:"/register",children:"Register"}),Object(v.jsx)("br",{})]}),Object(v.jsxs)("li",{className:"ml-10",children:[Object(v.jsx)(et.b,{to:"/as",children:"As"}),Object(v.jsx)("br",{}),Object(v.jsx)(et.b,{to:"/as/create",children:"Create a A"}),Object(v.jsx)("br",{})]}),Object(v.jsxs)("li",{className:"ml-10",children:[Object(v.jsx)(et.b,{to:"/bs",children:"Bs"}),Object(v.jsx)("br",{}),Object(v.jsx)(et.b,{to:"/bs/create",children:"Create a B"}),Object(v.jsx)("br",{})]}),Object(v.jsxs)("li",{className:"ml-10",children:[Object(v.jsx)(et.b,{to:"/cs",children:"Cs"}),Object(v.jsx)("br",{}),Object(v.jsx)(et.b,{to:"/cs/create",children:"Create a C"}),Object(v.jsx)("br",{})]}),Object(v.jsxs)("li",{className:"ml-10",children:[Object(v.jsx)(et.b,{to:"/ds",children:"Ds"}),Object(v.jsx)("br",{}),Object(v.jsx)(et.b,{to:"/ds/create",children:"Create a D"}),Object(v.jsx)("br",{})]}),Object(v.jsxs)("li",{className:"ml-10",children:[Object(v.jsx)(et.b,{to:"/users",children:"Users"}),Object(v.jsx)("br",{}),Object(v.jsx)(et.b,{to:"/users/create",children:"Create a User"}),Object(v.jsx)("br",{})]})]})}),Object(v.jsxs)("main",{children:[Object(v.jsx)(f.a,{path:"/as",children:Object(v.jsx)("h1",{children:"As"})}),Object(v.jsx)(f.a,{path:"/bs",children:Object(v.jsx)("h1",{children:"Bs"})}),Object(v.jsx)(f.a,{path:"/cs",children:Object(v.jsx)("h1",{children:"Cs"})}),Object(v.jsx)(f.a,{path:"/ds",children:Object(v.jsx)("h1",{children:"Ds"})}),Object(v.jsx)(f.a,{path:"/users",children:Object(v.jsx)("h1",{children:"Users"})}),Object(v.jsxs)(f.c,{children:[Object(v.jsx)(f.a,{path:"/as/create",component:x}),Object(v.jsx)(f.a,{path:"/as/update/:id",component:C}),Object(v.jsx)(f.a,{path:"/as/detail/:id",component:y}),Object(v.jsx)(f.a,{path:"/as",component:S}),",",Object(v.jsx)(f.a,{path:"/bs/create",component:k}),Object(v.jsx)(f.a,{path:"/bs/update/:id",component:E}),Object(v.jsx)(f.a,{path:"/bs/detail/:id",component:Q}),Object(v.jsx)(f.a,{path:"/bs",component:L}),",",Object(v.jsx)(f.a,{path:"/cs/create",component:N}),Object(v.jsx)(f.a,{path:"/cs/update/:id",component:B}),Object(v.jsx)(f.a,{path:"/cs/detail/:id",component:U}),Object(v.jsx)(f.a,{path:"/cs",component:H}),",",Object(v.jsx)(f.a,{path:"/ds/create",component:A}),Object(v.jsx)(f.a,{path:"/ds/update/:id",component:M}),Object(v.jsx)(f.a,{path:"/ds/detail/:id",component:I}),Object(v.jsx)(f.a,{path:"/ds",component:J}),",",Object(v.jsx)(f.a,{path:"/users/create",component:q}),Object(v.jsx)(f.a,{path:"/users/update/:id",component:W}),Object(v.jsx)(f.a,{path:"/users/detail/:id",component:K}),Object(v.jsx)(f.a,{path:"/users",component:G}),Object(v.jsx)(f.a,{path:"/login",component:_}),Object(v.jsx)(f.a,{path:"/register",component:tt})]})]})]})},ct=new(n(80).a);r.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(l.a,{client:ct,children:Object(v.jsx)(nt,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.c25409dc.chunk.js.map