"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[85],{7979:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(7294),c=n(6010),a=n(6698),l=n(3905),o=n(6845),s=n(571),i=n(941);const m="mdxPageWrapper_eQvw";const u=function(e){const{content:t}=e,{frontMatter:n,metadata:u}=t,{title:d,description:f,wrapperClassName:h,hide_table_of_contents:p}=n,{permalink:v}=u;return r.createElement(a.Z,{title:d,description:f,permalink:v,wrapperClassName:null!=h?h:i.kM.wrapper.mdxPages,pageClassName:i.kM.page.mdxPage},r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,c.Z)("row",m)},r.createElement("div",{className:(0,c.Z)("col",!p&&"col--8")},r.createElement(l.Zo,{components:o.Z},r.createElement(t,null))),!p&&t.toc&&r.createElement("div",{className:"col col--2"},r.createElement(s.Z,{toc:t.toc})))))}},571:(e,t,n)=>{n.d(t,{r:()=>f,Z:()=>h});var r=n(7294),c=n(6010),a=n(941);function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function o(e){let{anchorTopOffset:t}=e;const n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=n.find((e=>l(e).top>=t));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(r))?r:null!=(c=n[n.indexOf(r)-1])?c:null;var c}return n[n.length-1]}function s(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.LU)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const i=function(e){const t=(0,r.useRef)(void 0),n=s();(0,r.useEffect)((()=>{const{linkClassName:r,linkActiveClassName:c}=e;function a(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),a=o({anchorTopOffset:n.current}),l=e.find((e=>a&&a.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){if(n){var r;t.current&&t.current!==e&&(null==(r=t.current)||r.classList.remove(c)),e.classList.add(c),t.current=e}else e.classList.remove(c)}(e,e===l)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,n])},m="tableOfContents_vrFS",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function f(e){let{toc:t,isChild:n}=e;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(f,{isChild:!0,toc:e.children}))))):null}const h=function(e){let{toc:t}=e;return i(d),r.createElement("div",{className:(0,c.Z)(m,"thin-scrollbar")},r.createElement(f,{toc:t}))}}}]);