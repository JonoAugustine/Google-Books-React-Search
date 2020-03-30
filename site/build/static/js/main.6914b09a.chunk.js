(this["webpackJsonpgoogle-books"]=this["webpackJsonpgoogle-books"]||[]).push([[0],{32:function(e,t,n){e.exports=n(61)},60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(28),o=n.n(c),i=n(9),s=n(7),u=n(10),l=function(e){return r.a.createElement("div",{className:"text-input"},r.a.createElement("input",Object.assign({name:e.name,type:"text",required:!0},e)),r.a.createElement("label",{htmlFor:e.name,className:"floating"},r.a.createElement("span",{className:"content-name"},e.name)))},m=n(6),h=n.n(m),p=n(12),f=n(15),d=n(29),v=n(13),E=n.n(v),b=function e(t){var n=t.id,a=t.volumeInfo,r=a.title,c=a.authors,o=void 0===c?[]:c,i=a.description,s=a.imageLinks,u=a.infoLink;Object(f.a)(this,e),this.id=n,this.title=r,this.authors=o,this.description=i,this.image=s?s.thumbnail:null,this.link=u},g=function e(t){var n=t.totalItems,a=void 0===n?0:n,r=t.items,c=void 0===r?[]:r;Object(f.a)(this,e),this.totalItems=a,this.items=c.map((function(e){return new b(e)}))},k={googleApiUri:"https://www.googleapis.com/books/v1/volumes?q=",uid:localStorage.uid||function(){var e=Object(d.a)();return localStorage.uid=e,e}(),search:function(){var e=Object(p.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get(this.googleApiUri+t);case 2:return n=e.sent,e.abrupt("return",new g(n.data));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),getSaved:function(){var e=Object(p.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("/api/"+this.uid);case 2:return t=e.sent,e.abrupt("return",t.data.map((function(e){return new b(e)})));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),save:function(){var e=Object(p.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.put("/api/"+this.uid,t);case 2:e.sent;case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),delete:function(){var e=Object(p.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.delete("/api/".concat(this.uid,"/").concat(t.id));case 2:e.sent;case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},w=function(e){var t=e.book,n=e.saver,a=e.refresh,c=r.a.useState(!1),o=Object(u.a)(c,2),i=o[0],s=o[1],l=t.description?t.description.substr(0,60):"";return l&&(l=l.length<t.description.length?l+"...":l),r.a.createElement("div",{className:"book-card",onClick:function(){return s(!i)}},r.a.createElement("header",null,r.a.createElement("h3",null,t.title)),r.a.createElement("main",null,r.a.createElement("img",{src:t.image,alt:t.title})),r.a.createElement("footer",null,r.a.createElement("div",null,l),r.a.createElement("div",null,"By ",t.authors.reduce((function(e,t){return e+", "+t})))),r.a.createElement("section",{className:"buttons".concat(i?" open":"")},n?r.a.createElement("button",{className:"save",onClick:function(){return k.save(t)}},"Save"):r.a.createElement("button",{className:"delete",onClick:function(){return k.delete(t).then(a)}},"Delete"),r.a.createElement("button",{className:"info",onClick:function(){return window.open(t.link,"_blank")}},"More Info")))},x=function(e){return r.a.createElement("nav",null,r.a.createElement("div",null,r.a.createElement("h1",null,"Book Search")),r.a.createElement("div",null,e.children))},N=function(){var e=r.a.useState([]),t=Object(u.a)(e,2),n=t[0],a=t[1];return r.a.createElement("div",{className:"page search"},r.a.createElement(x,null,r.a.createElement(i.b,{to:"/saved"},"My Books")),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),k.search(e.target[0].value).then((function(e){a(e.items)}))}},r.a.createElement(l,{name:"search"}),r.a.createElement("button",{type:"submit"},"Go")),r.a.createElement("section",{className:"results"},n.map((function(e){return r.a.createElement(w,{key:e.id,book:e,saver:!0})}))))},y=function(){var e=r.a.useState([]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=function(){return k.getSaved().then(a)};return r.a.useEffect((function(){c()}),[]),r.a.createElement("div",{className:"page saved"},r.a.createElement(x,null,r.a.createElement(i.b,{to:"/"},"Search")),r.a.createElement("div",{className:"books"},n.map((function(e){return r.a.createElement(w,{book:e,key:e.id,refresh:c})}))))};var j=function(){return k.search("hentai"),r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(s.a,{exact:!0,path:"/",component:N}),r.a.createElement(s.a,{exact:!0,path:"/saved",component:y})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(60);o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.6914b09a.chunk.js.map