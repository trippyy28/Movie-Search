(this["webpackJsonpmovie-search"]=this["webpackJsonpmovie-search"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(5),s=c.n(r),i=(c(15),c(6)),l=c(7),o=c(10),u=c(9),j=(c(16),c(3)),d=c.n(j),h=c(8),b=c(4),m=c(0);function p(e){var t=e.movie;return Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(t.poster_path),alt:t.title+" poster"}),Object(m.jsxs)("div",{className:"card--content",children:[Object(m.jsx)("h3",{className:"card--title",children:t.title}),Object(m.jsx)("p",{children:Object(m.jsxs)("small",{children:["RELEASE DATE: ",t.release_date]})}),Object(m.jsx)("p",{children:Object(m.jsxs)("small",{children:["RATING: ",t.vote_average]})}),Object(m.jsx)("p",{className:"card--desc",children:t.overview})]})]},t.id)}var v=function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)([]),s=Object(b.a)(r,2),i=s[0],l=s[1],o=function(){var e=Object(h.a)(d.a.mark((function e(t){var a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a="https://api.themoviedb.org/3/search/movie?api_key=6a979c4fff5df7488a1565dfc0c4a8ea&language=en-US&query=".concat(c,"&page=1&include_adult=false"),e.prev=2,e.next=5,fetch(a);case 5:return n=e.sent,e.next=8,n.json();case 8:r=e.sent,l(r.results),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[Object(m.jsxs)("form",{className:"form",onSubmit:o,children:[Object(m.jsx)("label",{htmlFor:"query",className:"label",children:"Movie Name"}),Object(m.jsx)("input",{className:"input",type:"text",name:"query",placeholder:"i.e. Jurassic Park",value:c,onChange:function(e){return n(e.target.value)}}),Object(m.jsx)("button",{className:"button",type:"submit",children:"Search"})]}),Object(m.jsx)("div",{className:"card-list",children:i.filter((function(e){return e.poster_path})).map((function(e){return Object(m.jsx)(p,{movie:e},e.id)}))})]})},f=function(e){Object(o.a)(c,e);var t=Object(u.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{className:"title",children:"The Movie Search"}),Object(m.jsx)(v,{})]})}}]),c}(n.a.Component),O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};s.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root")),O()}},[[19,1,2]]]);
//# sourceMappingURL=main.b92619b2.chunk.js.map