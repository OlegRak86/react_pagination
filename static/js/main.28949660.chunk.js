(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,c){},12:function(e,a,c){"use strict";c.r(a);var t=c(5),n=c.n(t),i=c(4),r=c(1);c(10);var l=c(2),s=c.n(l),o=c(0),j=function(e){var a=e.total,c=e.perPage,t=e.currentPage,n=e.onPageChange;var i=function(e,a){for(var c=(e-e%a)/a,t=e%a?c+1:c,n=[],i=1;i<=t;i+=1)n.push(i);return n}(a,c);return Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:s()("page-item",{disabled:1===t}),children:Object(o.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===t,onClick:function(){t>1&&n(t-1)},children:"\xab"})}),i.map((function(e){return Object(o.jsx)("li",{className:s()("page-item","is-info",{active:t===e}),children:Object(o.jsx)("a",{"data-cy":"pageLink",className:"page-link",onClick:function(){n(e)},href:"#1",children:e},e)})})),Object(o.jsx)("li",{className:s()("page-item",{disabled:t===i.length}),children:Object(o.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":"false",onClick:function(){c*t<a&&n(t+1)},children:"\xbb"})})]})},d=function(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}(1,42).map((function(e){return"Item ".concat(e)})),u=function(){var e=Object(r.useState)(5),a=Object(i.a)(e,2),c=a[0],t=a[1],n=Object(r.useState)(1),l=Object(i.a)(n,2),s=l[0],u=l[1];var h,p,b=(h=c,p=s,d.slice(h*p-h,h*p)),m=c*s-c+1,g=m+c-1>42?42:m+c-1;return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Items with Pagination"}),Object(o.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat(m," - ").concat(g," of 42)")}),Object(o.jsxs)("div",{className:"form-group row",children:[Object(o.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(o.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:c,onChange:function(e){t(+e.target.value),u(1)},children:[Object(o.jsx)("option",{value:3,children:"3"}),Object(o.jsx)("option",{value:5,children:"5"}),Object(o.jsx)("option",{value:10,children:"10"}),Object(o.jsx)("option",{value:20,children:"20"})]})}),Object(o.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(o.jsx)(j,{total:d.length,perPage:c,currentPage:s,onPageChange:function(e){u(e)}}),Object(o.jsx)("ul",{children:b.map((function(e){return Object(o.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.28949660.chunk.js.map