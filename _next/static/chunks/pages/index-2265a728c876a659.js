(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5890)}])},5890:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return p},default:function(){return f}});var r,s,a=n(5893),i=n(7294),c=n(6486),o=n(8721),l=n(3686),d=n(1768),h=n(9944),u=n(8010),_=n.n(u);let m=e=>{let{className:t}=e;return(0,a.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{d:"M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"})})},j=e=>{let{allProjects:t,onFiltersChanged:n}=e,[r,s]=(0,i.useState)(""),[o,l]=(0,i.useState)(t.length),d=()=>{let e=r?(0,c.filter)(t,e=>(0,c.includes)(e.title.toLowerCase(),r.toLowerCase())):t;l(e.length),n(e)};(0,i.useEffect)(()=>{d()},[r]);let h=e=>{s(e),d()};return(0,a.jsxs)("div",{className:_().filters,children:[(0,a.jsxs)("div",{className:_().searchBox,children:[(0,a.jsx)("input",{type:"text",placeholder:"Search for projects",onChange:e=>h(e.currentTarget.value)}),(0,a.jsx)(m,{})]}),(0,a.jsx)("span",{className:_().message,children:r?"".concat(o," matching projects"):"".concat(o," total projects")})]})};var g=n(4362),x=n(8625);(r=s||(s={})).PublishedGames="Published Games",r.Shaders="Shaders",r.ComputeShaders="Compute Shaders",r.VisualEffects="Visual Effects",r._3DModelingAnimation="3D Modeling and Animation",r.GameDev="Game Dev";var p=!0;function f(e){let{projects:t}=e,[n,r]=(0,i.useState)(t),u=[s.VisualEffects,s.Shaders,s.ComputeShaders,s._3DModelingAnimation,s.PublishedGames],_=e=>r(e);return(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(o.Z,{}),(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(x.Z,{amount:"2em"}),(0,a.jsx)(h.Z,{children:"Portfolio"}),(0,a.jsx)(x.Z,{amount:"2em"}),(0,a.jsx)(j,{allProjects:t,onFiltersChanged:_}),(0,a.jsx)(x.Z,{amount:"1em"}),u.map(e=>{let t=(0,c.filter)(n,t=>t.category===e);return(0,a.jsx)(g.Z,{title:e.toString(),projects:t,pageSize:8},e)}),(0,a.jsx)(x.Z,{amount:"3.5em"})]})]})}},7543:function(e,t,n){"use strict";var r=n(5893);n(7294);var s=n(4184),a=n.n(s),i=n(343),c=n.n(i);let o=e=>{let{className:t,onClick:n,children:s}=e;return(0,r.jsx)("button",{className:a()(t,c().button),onClick:n,children:s})};t.Z=o},8721:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),s=n(9008),a=n.n(s);function i(e){let t="https://z4gon.github.io",{title:n="Gonzalo Cumini | Portfolio",pathUrl:s,imageUrl:i="/thumbnail.gif",faviconUrl:c="/favicon.ico",description:o="Gonzalo Cumini | Portfolio"}=e,l="".concat(t).concat(s),d="".concat(t).concat(i),h="".concat(t).concat(c);return(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{name:"title",content:n}),(0,r.jsx)("meta",{name:"description",content:o}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:l}),(0,r.jsx)("meta",{property:"og:title",content:n}),(0,r.jsx)("meta",{property:"og:description",content:o}),(0,r.jsx)("meta",{property:"og:image",content:d}),(0,r.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{property:"twitter:url",content:l}),(0,r.jsx)("meta",{property:"twitter:title",content:n}),(0,r.jsx)("meta",{property:"twitter:description",content:o}),(0,r.jsx)("meta",{property:"twitter:image",content:d}),(0,r.jsx)("link",{rel:"icon",href:h}),(0,r.jsx)("link",{rel:"canonical",href:l},"canonical")]})}},8625:function(e,t,n){"use strict";var r=n(5893);let s=e=>{let{amount:t}=e;return(0,r.jsx)("div",{style:{paddingTop:t}})};t.Z=s},6568:function(e,t,n){"use strict";n.d(t,{A:function(){return l}});var r=n(5893),s=n(4184),a=n.n(s),i=n(5143),c=n.n(i);let o=e=>{let{tags:t,secondary:n=!1,dark:s=!1}=e;return(0,r.jsx)("div",{className:c().tags,children:t.map((e,t)=>(0,r.jsx)(l,{secondary:n,dark:s,children:e},t))})},l=e=>{let{children:t,className:n,secondary:s=!1,dark:i=!1}=e;return(0,r.jsx)("span",{className:a()(c().tag,n,{[c().dark]:i,[c().secondary]:s}),children:t})};t.Z=o},2665:function(e,t,n){"use strict";var r=n(5893);let s=e=>{let{className:t}=e;return(0,r.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})};t.Z=s},3686:function(e,t,n){"use strict";var r=n(5893),s=n(4184),a=n.n(s),i=n(2980),c=n.n(i);let o=e=>{let{children:t,className:n,wide:s=!0}=e;return(0,r.jsx)("main",{className:a()(c().container,{[c().wide]:s},{[c().narrow]:!s},n),children:t})};t.Z=o},1768:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(5893),s=n(4184),a=n.n(s),i=n(4839),c=n.n(i),o=n(1664),l=n.n(o),d=n(8209),h=n.n(d);n(7294);var u=n(8984),_=n.n(u);let m=e=>{let{href:t,Icon:n}=e;return(0,r.jsx)("a",{href:t,rel:"noopener noreferrer",target:"_blank",children:(0,r.jsx)(n,{className:_().iconSvg})})};var j=n(2665);let g=e=>{let{className:t}=e;return(0,r.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})},x=[{href:"https://linkedin.com/in/gonzacn",Icon:g},{href:"https://github.com/z4gon",Icon:j.Z}],p=()=>(0,r.jsxs)("nav",{className:h().navbar,children:[(0,r.jsxs)("ul",{className:h().links,children:[(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"/",className:h().titleLink,children:(0,r.jsx)("h1",{className:h().title,children:"Gonzalo Cumini"})})}),(0,r.jsx)("li",{className:h().secondaryLink,children:(0,r.jsx)(l(),{href:"/",children:(0,r.jsx)("h1",{children:"Portfolio"})})}),(0,r.jsx)("li",{className:h().secondaryLink,children:(0,r.jsx)(l(),{href:"/blog",children:(0,r.jsx)("h1",{children:"Blog"})})})]}),(0,r.jsx)("ul",{className:h().icons,children:x.map(e=>(0,r.jsx)("li",{className:h().icon,children:(0,r.jsx)(m,{...e})},e.href))})]});var f=n(4980),v=n.n(f);let N=[{href:"https://linkedin.com/in/gonzacn",Icon:g},{href:"https://github.com/z4gon",Icon:j.Z}],w=()=>(0,r.jsxs)("footer",{className:v().footer,children:[(0,r.jsxs)("p",{children:["\xa9"," ".concat(new Date().getFullYear(),", Gonzalo Cumini")]}),(0,r.jsx)("ul",{className:v().icons,children:N.map(e=>(0,r.jsx)("li",{className:v().icon,children:(0,r.jsx)(m,{...e})},e.href))})]});var y=n(4298),P=n.n(y);let k=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(P(),{id:"google-analytics-setup",src:"https://www.googletagmanager.com/gtag/js?id=G-NPBT98N1FD",strategy:"afterInteractive"}),(0,r.jsx)(P(),{id:"google-analytics",strategy:"afterInteractive",children:"\n                        window.dataLayer = window.dataLayer || [];\n                        function gtag(){dataLayer.push(arguments);}\n                        gtag('js', new Date());\n\n                        gtag('config', 'G-NPBT98N1FD');\n                    "})]}),C=e=>{let{className:t,children:n}=e;return(0,r.jsxs)("div",{className:a()(c().page,t),children:[(0,r.jsx)(k,{}),(0,r.jsx)(p,{}),n,(0,r.jsx)(w,{})]})};var b=C},9944:function(e,t,n){"use strict";var r=n(5893),s=n(5384),a=n.n(s);let i=e=>{let{children:t}=e;return(0,r.jsx)("h1",{className:a().pageTitle,children:t})};t.Z=i},4362:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(5893),s=n(7294),a=n(4936),i=n.n(a),c=n(7543),o=n(1664),l=n.n(o),d=n(7367),h=n.n(d),u=n(6568);let _=e=>{let{id:t,thumbnailUrl:n,title:s,tags:a,technology:i=null}=e;return(0,r.jsx)(l(),{href:"/project/".concat(t),className:h().link,children:(0,r.jsxs)("article",{className:h().card,children:[i&&(0,r.jsx)("img",{className:h().technology,src:"/images/".concat(i,".png"),alt:i}),(0,r.jsx)("div",{className:h().thumbnailContainer,children:(0,r.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:h().thumbnail,children:(0,r.jsx)("source",{src:n,type:"video/mp4"})})}),(0,r.jsxs)("div",{className:h().information,children:[(0,r.jsx)("h2",{className:h().title,children:s}),(0,r.jsx)(u.Z,{dark:!0,tags:a.slice(0,3)})]})]})})},m=e=>{let{title:t,projects:n,pageSize:a=12,pageJump:o=2}=e,[l,d]=(0,s.useState)(0),h=n.length>(l+1)*a,u=()=>{h&&d(e=>e+o)};if(0==n.length)return null;let m=n.slice(0,(l+1)*a);return(0,r.jsxs)("div",{className:i().gridWrapper,children:[t&&(0,r.jsxs)("div",{className:i().titleWrapper,children:[(0,r.jsx)("h2",{className:i().title,children:t}),(0,r.jsx)("span",{className:i().projectCount,children:"".concat(n.length," project").concat(n.length>1?"s":"")})]}),(0,r.jsx)("div",{className:i().grid,children:m.map(e=>(0,r.jsx)(_,{...e},e.id))}),h&&(0,r.jsxs)("div",{className:i().actions,children:[(0,r.jsx)("p",{children:"Showing ".concat(m.length," of ").concat(n.length)}),(0,r.jsx)(c.Z,{onClick:()=>u(),children:"Show More"})]})]})};var j=m},343:function(e){e.exports={button:"Button_button__uOckH"}},8984:function(e){e.exports={iconSvg:"IconLink_iconSvg__kq2nE"}},5143:function(e){e.exports={tags:"Tags_tags__3Bx_D",tag:"Tags_tag__I1Kga",secondary:"Tags_secondary__JW80_",dark:"Tags_dark__irn9E"}},8209:function(e){e.exports={navbar:"NavBar_navbar__W8B89",links:"NavBar_links__s6P8N",titleLink:"NavBar_titleLink__OtPh0",secondaryLink:"NavBar_secondaryLink__TpgXh",icons:"NavBar_icons__Q_6kO",icon:"NavBar_icon__MjYq8",iconSvg:"NavBar_iconSvg__yYGbL"}},2980:function(e){e.exports={container:"Container_container__B4HQR",wide:"Container_wide__dsumm",narrow:"Container_narrow__Miio9"}},4980:function(e){e.exports={footer:"Footer_footer__rEL09",icons:"Footer_icons__IyNdc",icon:"Footer_icon__mhtwE"}},4839:function(e){e.exports={page:"Page_page__0A7TG"}},5384:function(e){e.exports={pageTitle:"PageTitle_pageTitle__mlEZF"}},7367:function(e){e.exports={link:"ProjectCard_link__BnuVN",card:"ProjectCard_card__mhfLy",technology:"ProjectCard_technology__QScYB",thumbnailContainer:"ProjectCard_thumbnailContainer__h46fM",information:"ProjectCard_information__zlPed",title:"ProjectCard_title__BIbrP",subtitle:"ProjectCard_subtitle__4QHhz"}},8010:function(e){e.exports={filters:"ProjectFilters_filters__XtPoD",searchBox:"ProjectFilters_searchBox__Rn7F4",message:"ProjectFilters_message__nRX8A"}},4936:function(e){e.exports={gridWrapper:"ProjectsGrid_gridWrapper__LA_b9",titleWrapper:"ProjectsGrid_titleWrapper__cWrH3",title:"ProjectsGrid_title__3_WiV",projectCount:"ProjectsGrid_projectCount__2KBfW",grid:"ProjectsGrid_grid__xR9VF",actions:"ProjectsGrid_actions__3BsZR"}}},function(e){e.O(0,[662,151,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);