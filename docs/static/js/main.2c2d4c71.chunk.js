(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{184:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),i=n(21),s=n.n(i),o=n(2),u=n(15),l=n(9),j=function(e){var t=e.setCategoria,n=Object(r.useState)(""),a=Object(o.a)(n,2),c=a[0],i=a[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),c.trim().length>2&&(t((function(e){return[c].concat(Object(u.a)(e))})),i(""))},children:Object(l.jsxs)("div",{className:"col-md-3",children:[Object(l.jsx)("label",{className:"text-info",children:"Categoria"}),Object(l.jsx)("input",{type:"text",className:"form-control",value:c,onChange:function(e){var t=e.target;i(t.value)},placeholder:"Ingrese una categoria"})]})})})},d=n(88),p=n(1),m=n(100),f=n(29),b=n.n(f),x=n(34),h=function(){var e=Object(x.a)(b.a.mark((function e(t){var n,a,r,c,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=vZNEp8dhcwgQo0breI4CW6VmrSjMZoV7"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=n(187),g=n(188),v=(n(111),function(e){e.id;var t=e.title,n=e.url,a=O.a.Meta;return Object(l.jsx)(O.a,{className:"animate__animated animate__zoomInUp",hoverable:!0,cover:Object(l.jsx)(g.a,{src:n,alt:t}),children:Object(l.jsx)(a,{title:t})})}),y=m.a.div(a||(a=Object(d.a)(["\n    .titulo{\n        display: flex;\n        justify-content: center;\n    }\n    .contenido{\n        display: grid;\n        grid-template-columns: repeat(auto-fit, 18rem);\n        justify-content: center;\n        grid-gap: 25px;\n    }\n\n    .contenedor{\n        display: flex;\n        justify-content: center;\n\n        .spinner-grow{\n            width: 5rem;\n            height: 5rem;\n        }\n    }\n"]))),N=function(e){var t=e.categoria,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(o.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){!function(){var t=Object(x.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(e);case 2:n=t.sent,c({data:n,loading:!1});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e]),a}(t),a=n.data,c=n.loading;return Object(l.jsxs)(y,{children:[Object(l.jsx)("div",{color:"red",className:"titulo mt-3 animate__animated animate__zoomInUp",children:Object(l.jsx)("h2",{className:"text-info",children:t})}),c&&Object(l.jsx)("div",{className:"contenedor",children:Object(l.jsx)("div",{className:"spinner-grow text-info",role:"status",children:Object(l.jsx)("span",{className:"sr-only",children:"Loading..."})})}),Object(l.jsx)("div",{className:"contenido",children:a&&a.map((function(e){return Object(l.jsx)(v,Object(p.a)({},e),e.id)}))})]})},w=function(){var e=Object(r.useState)(["One Punch"]),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"text-info ml-3 mt-3",children:"GifExpertApp"}),Object(l.jsx)(j,{setCategoria:a}),n&&n.map((function(e){return Object(l.jsx)(N,{categoria:e},e)}))]})};var _=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(w,{})})};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(_,{})}),document.getElementById("root"))}},[[184,1,2]]]);
//# sourceMappingURL=main.2c2d4c71.chunk.js.map