(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(5562)}])},5562:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return y},default:function(){return Z}});var r=n(5893),s=n(6566),a=n.n(s),o=n(4184),i=n.n(o),c=n(1664),l=n.n(c),u=n(2801),h=n.n(u),m=n(6653),_=n(7850),g=n(8674);let d=e=>{let{isHero:t=!1,title:n,coverImageUrl:s,date:a,excerpt:o,author:c,slug:u}=e;return(0,r.jsxs)("section",{className:i()(h().postPreview,{[h().hero]:t}),children:[(0,r.jsx)(_.Z,{title:n,imageUrl:s,slug:u,className:h().picture}),(0,r.jsxs)("div",{className:h().info,children:[(0,r.jsx)("h3",{className:h().title,children:(0,r.jsx)(l(),{as:"/blog/".concat(u),href:"/blog/[slug]",children:n})}),(0,r.jsxs)("div",{className:h().authorAndDate,children:[(0,r.jsx)(m.Z,{name:c.name,pictureUrl:c.pictureUrl}),(0,r.jsx)(g.Z,{dateString:a})]}),(0,r.jsx)("p",{className:h().excerpt,children:o})]})]})},x=e=>{let{posts:t}=e;return(0,r.jsxs)("section",{className:a().morePosts,children:[(0,r.jsx)("h2",{className:a().title,children:"More Posts"}),(0,r.jsx)("div",{className:a().grid,children:t.map(e=>(0,r.jsx)(d,{title:e.title,coverImageUrl:e.coverImageUrl,date:e.date,author:e.author,slug:e.slug,excerpt:e.excerpt},e.slug))})]})};var p=n(8721),j=n(3686),v=n(1768),f=n(9944),N=n(8625),w=n(4015),P=n.n(w),y=!0;function Z(e){let{allPosts:t}=e,n=t[0],s=t.slice(1);return(0,r.jsxs)(v.Z,{className:P().blog,children:[(0,r.jsx)(p.Z,{title:"Gonzalo Cumini | Blog",description:"Gonzalo Cumini | Blog",pathUrl:"/blog"}),(0,r.jsxs)(j.Z,{children:[(0,r.jsx)(N.Z,{amount:"2em"}),(0,r.jsx)(f.Z,{children:"Blog"}),(0,r.jsx)(N.Z,{amount:"2em"}),n&&(0,r.jsx)(d,{isHero:!0,title:n.title,coverImageUrl:n.coverImageUrl,date:n.date,author:n.author,slug:n.slug,excerpt:n.excerpt}),s.length>0&&(0,r.jsx)(x,{posts:s}),(0,r.jsx)(N.Z,{amount:"6em"})]})]})}},8721:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893),s=n(9008),a=n.n(s);function o(e){let t="https://z4gon.github.io",{title:n="Gonzalo Cumini | Portfolio",pathUrl:s,imageUrl:o="/thumbnail.gif",faviconUrl:i="/favicon.ico",description:c="Gonzalo Cumini | Portfolio"}=e,l="".concat(t).concat(s),u="".concat(t).concat(o),h="".concat(t).concat(i);return(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{name:"title",content:n}),(0,r.jsx)("meta",{name:"description",content:c}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:l}),(0,r.jsx)("meta",{property:"og:title",content:n}),(0,r.jsx)("meta",{property:"og:description",content:c}),(0,r.jsx)("meta",{property:"og:image",content:u}),(0,r.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{property:"twitter:url",content:l}),(0,r.jsx)("meta",{property:"twitter:title",content:n}),(0,r.jsx)("meta",{property:"twitter:description",content:c}),(0,r.jsx)("meta",{property:"twitter:image",content:u}),(0,r.jsx)("link",{rel:"icon",href:h}),(0,r.jsx)("link",{rel:"canonical",href:l},"canonical")]})}},8625:function(e,t,n){"use strict";var r=n(5893);let s=e=>{let{amount:t}=e;return(0,r.jsx)("div",{style:{paddingTop:t}})};t.Z=s},6653:function(e,t,n){"use strict";var r=n(5893),s=n(2774),a=n.n(s);let o=e=>{let{name:t,pictureUrl:n}=e;return(0,r.jsxs)("div",{className:a().avatar,children:[(0,r.jsx)("img",{src:n,alt:t}),(0,r.jsx)("div",{className:a().name,children:t})]})};t.Z=o},7850:function(e,t,n){"use strict";var r=n(5893),s=n(4184),a=n.n(s),o=n(1664),i=n.n(o),c=n(8334),l=n.n(c);let u=e=>{let{title:t,imageUrl:n,imageSourceUrl:s=null,slug:o,className:c}=e,u=(0,r.jsx)("img",{src:n,alt:"Cover Image for ".concat(t)});return(0,r.jsxs)("div",{className:a()(l().coverImage,c),children:[o?(0,r.jsx)(i(),{as:"/blog/".concat(o),href:"/blog/[slug]","aria-label":t,children:u}):u,s&&(0,r.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:"Image Source \uD83D\uDD17"})]})};t.Z=u},8674:function(e,t,n){"use strict";var r=n(5893),s=n(8420),a=n(6159),o=n(4425),i=n.n(o);let c=e=>{let{dateString:t}=e,n=(0,s.Z)(t);return(0,r.jsx)("time",{className:i().dateFormatter,dateTime:t,children:(0,a.Z)(n,"LLLL	d, yyyy")})};t.Z=c},2665:function(e,t,n){"use strict";var r=n(5893);let s=e=>{let{className:t}=e;return(0,r.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})};t.Z=s},3686:function(e,t,n){"use strict";var r=n(5893),s=n(4184),a=n.n(s),o=n(2980),i=n.n(o);let c=e=>{let{children:t,className:n,wide:s=!0}=e;return(0,r.jsx)("main",{className:a()(i().container,{[i().wide]:s},{[i().narrow]:!s},n),children:t})};t.Z=c},1768:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(5893),s=n(4184),a=n.n(s),o=n(4839),i=n.n(o),c=n(1664),l=n.n(c),u=n(8209),h=n.n(u);n(7294);var m=n(8984),_=n.n(m);let g=e=>{let{href:t,Icon:n}=e;return(0,r.jsx)("a",{href:t,rel:"noopener noreferrer",target:"_blank",children:(0,r.jsx)(n,{className:_().iconSvg})})};var d=n(2665);let x=e=>{let{className:t}=e;return(0,r.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})},p=[{href:"https://linkedin.com/in/gonzacn",Icon:x},{href:"https://github.com/z4gon",Icon:d.Z}],j=()=>(0,r.jsxs)("nav",{className:h().navbar,children:[(0,r.jsxs)("ul",{className:h().links,children:[(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"/",className:h().titleLink,children:(0,r.jsx)("h1",{className:h().title,children:"Gonzalo Cumini"})})}),(0,r.jsx)("li",{className:h().secondaryLink,children:(0,r.jsx)(l(),{href:"/",children:(0,r.jsx)("h1",{children:"Portfolio"})})}),(0,r.jsx)("li",{className:h().secondaryLink,children:(0,r.jsx)(l(),{href:"/blog",children:(0,r.jsx)("h1",{children:"Blog"})})})]}),(0,r.jsx)("ul",{className:h().icons,children:p.map(e=>(0,r.jsx)("li",{className:h().icon,children:(0,r.jsx)(g,{...e})},e.href))})]});var v=n(4980),f=n.n(v);let N=[{href:"https://linkedin.com/in/gonzacn",Icon:x},{href:"https://github.com/z4gon",Icon:d.Z}],w=()=>(0,r.jsxs)("footer",{className:f().footer,children:[(0,r.jsxs)("p",{children:["\xa9"," ".concat(new Date().getFullYear(),", Gonzalo Cumini")]}),(0,r.jsx)("ul",{className:f().icons,children:N.map(e=>(0,r.jsx)("li",{className:f().icon,children:(0,r.jsx)(g,{...e})},e.href))})]});var P=n(4298),y=n.n(P);let Z=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y(),{id:"google-analytics-setup",src:"https://www.googletagmanager.com/gtag/js?id=G-NPBT98N1FD",strategy:"afterInteractive"}),(0,r.jsx)(y(),{id:"google-analytics",strategy:"afterInteractive",children:"\n                        window.dataLayer = window.dataLayer || [];\n                        function gtag(){dataLayer.push(arguments);}\n                        gtag('js', new Date());\n\n                        gtag('config', 'G-NPBT98N1FD');\n                    "})]}),b=e=>{let{className:t,children:n}=e;return(0,r.jsxs)("div",{className:a()(i().page,t),children:[(0,r.jsx)(Z,{}),(0,r.jsx)(j,{}),n,(0,r.jsx)(w,{})]})};var k=b},9944:function(e,t,n){"use strict";var r=n(5893),s=n(5384),a=n.n(s);let o=e=>{let{children:t}=e;return(0,r.jsx)("h1",{className:a().pageTitle,children:t})};t.Z=o},8984:function(e){e.exports={iconSvg:"IconLink_iconSvg__kq2nE"}},2774:function(e){e.exports={avatar:"Avatar_avatar__G9F0L",name:"Avatar_name__yGpBe"}},8334:function(e){e.exports={coverImage:"CoverImage_coverImage__lFFCh"}},4425:function(e){e.exports={dateFormatter:"DateFormatter_dateFormatter__UBCZJ"}},6566:function(e){e.exports={morePosts:"MorePosts_morePosts__3aXXx",title:"MorePosts_title__QHuYr",grid:"MorePosts_grid__ksJaH"}},2801:function(e){e.exports={postPreview:"PostPreview_postPreview__Pu6TC",title:"PostPreview_title__10tAo",hero:"PostPreview_hero__1LtL5",info:"PostPreview_info__yqHuP",picture:"PostPreview_picture__7sPgV",authorAndDate:"PostPreview_authorAndDate__VvA1l"}},8209:function(e){e.exports={navbar:"NavBar_navbar__W8B89",links:"NavBar_links__s6P8N",titleLink:"NavBar_titleLink__OtPh0",secondaryLink:"NavBar_secondaryLink__TpgXh",icons:"NavBar_icons__Q_6kO",icon:"NavBar_icon__MjYq8",iconSvg:"NavBar_iconSvg__yYGbL"}},2980:function(e){e.exports={container:"Container_container__B4HQR",wide:"Container_wide__dsumm",narrow:"Container_narrow__Miio9"}},4980:function(e){e.exports={footer:"Footer_footer__rEL09",icons:"Footer_icons__IyNdc",icon:"Footer_icon__mhtwE"}},4839:function(e){e.exports={page:"Page_page__0A7TG"}},5384:function(e){e.exports={pageTitle:"PageTitle_pageTitle__mlEZF"}},4015:function(e){e.exports={blog:"Blog_blog__RrqTL"}}},function(e){e.O(0,[151,358,774,888,179],function(){return e(e.s=7801)}),_N_E=e.O()}]);