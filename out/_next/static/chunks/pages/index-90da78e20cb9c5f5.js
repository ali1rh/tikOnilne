(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{5728:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(8618)}])},8685:function(e,t,i){"use strict";i.r(t);var r=i(5893),a=i(7294),n=(i(5966),i(960),i(5152)),s=i.n(n),l=i(3983),c=i.n(l),o=(i(5675),i(9321)),d=i(1664),u=i.n(d),m=i(2063);function _(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function g(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},r=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),r.forEach((function(t){_(e,t,i[t])}))}return e}var h=s()(Promise.all([i.e(571),i.e(2568)]).then(i.t.bind(i,2568,23)),{loadableGenerated:{webpack:function(){return[2568]}},ssr:!1}),b={autoplayTimeout:4e3,autoplay:!0,smartSpeed:1500,autoplayHoverPause:!0,responsiveClass:!0,responsive:{0:{items:1,nav:!1,dots:!0},600:{items:1,nav:!1,dots:!0},1e3:{items:3}}};t.default=function(){var e,t=function(e,t){var i=e;return(null===i||void 0===i?void 0:i.length)>t&&(i=i.substr(0,t)+"..."),i},i=(0,o.I)(),n=i.GetBlogSliderData,s=i.blogSliderData,l=i.HOST_API_IMG,d=i.lang,_=(0,a.useState)(d),v=(_[0],_[1]);return(0,a.useEffect)((function(){n()}),[]),(0,a.useEffect)((function(){}),[s.loading]),(0,a.useEffect)((function(){v(d)}),[d]),(0,r.jsx)(r.Fragment,{children:s.loading&&(0,r.jsx)("div",{className:c().blogSLider,children:(0,r.jsx)("div",{className:c().container,children:(0,r.jsx)(h,g({},b,{className:"owl-theme owl-blogSlider",nav:!0,dots:!1,items:3,margin:10,loop:!0,navSpeed:1500,navText:["<img src='/img/homePage/sectionBestBrands/slider/navPrev.svg' alt='' />","<img src='/img/homePage/sectionBestBrands/slider/navNext.svg' alt='' />"],children:null===(e=s.data)||void 0===e?void 0:e.map((function(e){var i=e.id,a=e.title,n=e.thumbnail,s=e.date,o=e.type,_=e.title_am,g=e.title_ru;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(u(),{href:"blog"==o?"/singleBlogPage/".concat(i):"/newsSinglePage/".concat(i),children:(0,r.jsxs)("div",{className:c().slide,children:[(0,r.jsx)("img",{className:c().img,alt:"img",src:l+n}),(0,r.jsx)("p",{className:c().description,children:"en"==d?t(a,60):"ru"==d?t(g,65):t(_,60)}),(0,r.jsxs)("div",{className:c().dateBlock,children:[(0,r.jsx)("div",{className:c().calendarIcon,children:(0,r.jsx)("img",{alt:"iconCalendar",src:"/img/homePage/secBlog/calendarIcon.svg"})}),(0,r.jsx)("span",{className:c().date,children:s})]}),(0,r.jsxs)("div",{className:c().hoverBlock,children:[(0,r.jsx)("button",{className:c().button,children:m.I.buttonRead[d]}),(0,r.jsx)("div",{className:c().buttonIcon,children:(0,r.jsx)("img",{alt:"arrRight",src:"/img/homePage/secBlog/arrRight.svg"})})]})]})},i)})}))}))})})})}},2273:function(e,t,i){"use strict";i.r(t);var r=i(4051),a=i.n(r),n=i(5893),s=i(2913),l=i.n(s),c=i(7294),o=i(9669),d=i.n(o),u=i(9321),m=i(2063);function _(e,t,i,r,a,n,s){try{var l=e[n](s),c=l.value}catch(o){return void i(o)}l.done?t(c):Promise.resolve(c).then(r,a)}function g(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function h(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},r=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),r.forEach((function(t){g(e,t,i[t])}))}return e}t.default=function(){var e=(0,u.I)(),t=e.HOST_API,i=e.lang,r=(0,c.useState)(""),s=r[0],o=r[1],g=(0,c.useState)(!1),b=g[0],v=g[1],f=(0,c.useState)({}),x=f[0],j=f[1],p=(0,c.useState)(!1),B=p[0],k=p[1];(0,c.useEffect)((function(){}),[s]);var N=function(){var e,i=(e=a().mark((function e(i){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.preventDefault(),b){e.next=5;break}return j({checked:"checked required"}),k(!1),e.abrupt("return");case 5:if(""!=s){e.next=9;break}return j({email:"email use required"}),k(!1),e.abrupt("return");case 9:if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(String(s))){e.next=15;break}return j({email:"invalid email"}),k(!1),e.abrupt("return");case 15:return r={email:s},e.prev=16,e.next=19,d()({url:t+"subscribe",method:"POST",headers:{"content-type":"application/json"},data:JSON.stringify(r)});case 19:"success"==(n=e.sent).data&&200==n.status?(j({}),o(""),k(!0)):n.data.error&&j(h({},n.data)),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(16),console.log(e.t0);case 26:case"end":return e.stop()}}),e,null,[[16,23]])})),function(){var t=this,i=arguments;return new Promise((function(r,a){var n=e.apply(t,i);function s(e){_(n,r,a,s,l,"next",e)}function l(e){_(n,r,a,s,l,"throw",e)}s(void 0)}))});return function(e){return i.apply(this,arguments)}}();return(0,n.jsx)("div",{className:l().cardSubscribe,children:(0,n.jsxs)("div",{className:l().container,children:[(0,n.jsx)("div",{className:l().cardBackground,style:{backgroundImage:"url(/img/homePage/secCardSubscribe/background.jpg)"}}),(0,n.jsxs)("div",{className:l().cardMain,children:[(0,n.jsx)("div",{className:l().subscribe,children:m.I.CardSubscribeTitle[i]}),(0,n.jsx)("div",{className:l().description,children:m.I.CardSubscribeDescription[i]}),(0,n.jsxs)("form",{className:l().inputBlock,onSubmit:N,children:[(0,n.jsx)("input",{className:l().input,value:s,type:"text",placeholder:m.I.EmailAddress[i],onChange:function(e){return o(e.target.value)}}),(0,n.jsx)("button",{className:l().button,children:(0,n.jsx)("img",{alt:"button",src:"/img/homePage/secCardSubscribe/button.svg"})})]}),(0,n.jsxs)("div",{children:[x.email?(0,n.jsx)("div",{className:l().invalidEmail,children:m.I.wrongEmail[i]}):null,B?(0,n.jsx)("div",{className:l().success,children:m.I.successfullySubscribed[i]}):null]}),(0,n.jsxs)("div",{className:l().accessBlock,children:[(0,n.jsx)("input",{type:"checkbox",className:x.checked?l().notChecked:b,onChange:function(e){return v(e.target.checked)}}),(0,n.jsxs)("div",{className:l().agree,children:[m.I.CardSubscribeAgreeTermsLeft[i],(0,n.jsx)("span",{children:m.I.CardSubscribeAgreeTermsRight[i]})]})]})]})]})})}},8629:function(e,t,i){"use strict";i.r(t);var r=i(5893),a=i(7294),n=(i(5966),i(960),i(5152)),s=i.n(n),l=i(9403),c=i.n(l),o=i(9321),d=i(1664),u=i.n(d);function m(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},r=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),r.forEach((function(t){m(e,t,i[t])}))}return e}var g=s()(Promise.all([i.e(571),i.e(2568)]).then(i.t.bind(i,2568,23)),{loadableGenerated:{webpack:function(){return[2568]}},ssr:!1}),h={autoplayTimeout:4e3,autoplay:!0,smartSpeed:3e3,autoplayHoverPause:!0};t.default=function(){var e=(0,o.I)(),t=e.bestBrandsSlider,i=e.GetBestBrandsSlider,n=e.HOST_API_IMG,s=e.lang,l=(0,a.useState)(s),d=(l[0],l[1]);return(0,a.useEffect)((function(){i()}),[]),(0,a.useEffect)((function(){}),[t.loading]),(0,a.useEffect)((function(){d(s)}),[s]),t.loading&&(0,r.jsx)("div",{className:c().sliderBestBrands,children:(0,r.jsx)(g,_({},h,{className:"owl-carousel owl-theme owl-bestBrands",items:1,margin:10,loop:!0,navText:["<img src='/img/homePage/sectionBestBrands/slider/navPrev.svg' alt='' />","<img src='/img/homePage/sectionBestBrands/slider/navNext.svg' alt='' />"],nav:!0,dots:!0,children:t.loading&&t.data.map((function(e){var t=e.id,i=e.firstImage,a=e.secondImage,l=e.thirthImage,o=e.title,d=e.title_am,m=e.title_ru,_=e.secondTitle,g=e.secondTitle_am,h=e.secondTitle_ru,b=e.thirthTitle,v=e.thirthTitle_am,f=e.thirthTitle_ru,x=e.link,j=e.link_am,p=e.link_ru,B=e.secondLink,k=e.secondLink_am,N=e.secondLink_ru,S=e.thirthLink,P=e.thirthLink_am,I=e.thirthLink_ru;return(0,r.jsxs)("div",{className:c().itemsBlock,children:[(0,r.jsx)("div",{className:c().itemOne,style:{backgroundImage:"url(".concat(n+i,")")},children:x&&(0,r.jsx)(u(),{href:"en"==s?x:"ru"==s?p:j,children:(0,r.jsx)("a",{children:(0,r.jsxs)("div",{className:c().nameBlock,style:{backgroundImage:"url(/img/homePage/sectionBestBrands/slider/nameBlock.svg)"},children:[(0,r.jsx)("div",{className:c().nameBlockTitle,children:"en"==s?o:"ru"==s?m:d}),(0,r.jsx)("div",{className:c().arrRight,children:(0,r.jsx)("img",{alt:"arrow",src:"/img/homePage/sectionBestBrands/slider/arrRight.svg"})})]})})})}),(0,r.jsxs)("div",{className:c().items,children:[(0,r.jsx)("div",{className:c().itemTwo,style:{backgroundImage:"url(".concat(n+a,")")},children:x&&(0,r.jsx)(u(),{href:"en"==s?B:"ru"==s?N:k,children:(0,r.jsx)("a",{children:(0,r.jsxs)("div",{className:c().NameBlock,style:{backgroundImage:"url(/img/homePage/sectionBestBrands/slider/miniNameBlock.svg)"},children:[(0,r.jsx)("div",{className:c().nameBlockTitleTwo,children:"en"==s?_:"ru"==s?h:g}),(0,r.jsx)("div",{className:c().arrRight,children:(0,r.jsx)("img",{alt:"arrow",src:"/img/homePage/sectionBestBrands/slider/arrRight.svg"})})]})})})}),(0,r.jsx)("div",{className:c().itemThree,style:{backgroundImage:"url(".concat(n+l,")")},children:x&&(0,r.jsx)(u(),{href:"en"==s?S:"ru"==s?I:P,children:(0,r.jsx)("a",{children:(0,r.jsxs)("div",{className:c().NameBlock,style:{backgroundImage:"url(/img/homePage/sectionBestBrands/slider/miniNameBlock.svg)"},children:[(0,r.jsx)("div",{className:c().nameBlockTitleThree,children:"en"==s?b:"ru"==s?f:v}),(0,r.jsx)("div",{className:c().arrRight,children:(0,r.jsx)("img",{alt:"arrow",src:"/img/homePage/sectionBestBrands/slider/arrRight.svg"})})]})})})})]})]},t)}))}))})}},7831:function(e,t,i){"use strict";i.r(t);var r=i(5893),a=i(7294),n=(i(5966),i(960),i(5152)),s=i.n(n),l=i(2352),c=i.n(l),o=i(9321),d=i(1664),u=i.n(d);function m(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},r=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),r.forEach((function(t){m(e,t,i[t])}))}return e}var g=s()(Promise.all([i.e(571),i.e(2568)]).then(i.t.bind(i,2568,23)),{loadableGenerated:{webpack:function(){return[2568]}},ssr:!1}),h={autoplayTimeout:4e3,autoplay:!0,smartSpeed:3e3,autoplayHoverPause:!0,responsiveClass:!0,responsive:{0:{items:1,nav:!1,dots:!0},600:{items:1,nav:!1,dots:!0},1e3:{items:2}}};t.default=function(){var e=(0,o.I)(),t=e.GetSpecialOffersSliderData,i=e.specialOffersSliderData,n=e.HOST_API_IMG,s=e.lang;return(0,a.useEffect)((function(){t()}),[]),(0,a.useEffect)((function(){}),[i.loading]),(0,r.jsx)(r.Fragment,{children:i.loading&&(0,r.jsx)("div",{className:c().newsSlider,children:(0,r.jsx)("div",{className:c().container,children:(0,r.jsx)(g,_({},h,{className:".owl-carousel owl-theme owl-newsSlider",nav:!0,dots:!1,items:2,margin:4,loop:!0,navText:["<img src='/img/homePage/sectionBestBrands/slider/navPrev.svg' alt='' />","<img src='/img/homePage/sectionBestBrands/slider/navNext.svg' alt='' />"],children:i.data.map((function(e){var t=e.id,i=e.image,a=e.image_am,l=e.image_ru,o=e.logo,d=e.title,m=e.title_am,_=e.title_ru,g=e.link,h=e.link_am,b=e.link_ru;return(0,r.jsx)(u(),{href:"en"==s?g:"ru"==s?b:h,children:(0,r.jsx)("div",{className:c().item,children:(0,r.jsx)("div",{className:c().background,style:{backgroundImage:"url(".concat("en"==s?n+i:"ru"==s?n+l:n+a,")")},children:(0,r.jsxs)("div",{className:c().logoBlock,children:[(0,r.jsx)("div",{children:(0,r.jsx)("img",{className:c().logo,alt:"logo",src:n+o})}),(0,r.jsx)("div",{className:c().BrandName,children:"en"==s?d:"ru"==s?_:m})]})})})},t)}))}))})})})}},8618:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return D}});var r=i(5893),a=i(9321),n=i(2063),s=i(5152),l=i.n(s),c=i(1664),o=i.n(c),d=i(8685),u=i(7831),m=i(2273),_=i(8629),g=i(7294),h=(i(5966),i(960),i(8519)),b=i.n(h),v=i(4215),f=i.n(v),x=i(5185),j=i.n(x),p=i(5080),B=i.n(p),k=i(334),N=i.n(k),S=i(1317),P=i.n(S),I=i(6969),w=i.n(I),y=i(6066),T=(i(1548),i(3873),i(5675)),O=i.n(T);function C(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function M(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},r=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),r.forEach((function(t){C(e,t,i[t])}))}return e}var A={autoplayTimeout:4e3,autoplay:!0,smartSpeed:1500,center:!0},E={dots:!1,infinite:!0,speed:1e3,slidesToShow:7,slidesToScroll:1,arrows:!1,autoplay:!0,responsive:[{breakpoint:1270,settings:{slidesToShow:1,slidesToScroll:1,initialSlide:2,dots:!1,infinite:!0,speed:1e3}},{breakpoint:900,settings:{slidesToShow:1,slidesToScroll:1,initialSlide:2,dots:!1,infinite:!0,speed:1e3}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,dots:!1,infinite:!0,speed:1e3,centerMode:!0,centerPadding:"99px"}},{breakpoint:300,settings:{slidesToShow:1,slidesToScroll:1,dots:!1,infinite:!0,speed:1e3,centerMode:!0,centerPadding:"79px"}}]},R=l()(Promise.all([i.e(571),i.e(2568)]).then(i.t.bind(i,2568,23)),{loadableGenerated:{webpack:function(){return[2568]}},ssr:!1}),D=!0;t.default=function(e){var t,s,l=e.mainSliderData,c=e.brandsSliderData,h=e.interestedData,v=e.giftCardHomePageData,x=function(e,t){var i=e;return(null===i||void 0===i?void 0:i.length)>t&&(i=i.substr(0,t)),i},p=(0,a.I)(),k=p.HOST_API_IMG,S=p.lang,I=(0,g.useState)(S),T=(I[0],I[1]);(0,g.useEffect)((function(){T(S)}),[S]);var C=i(488);return(0,r.jsxs)("div",{children:[(null===l||void 0===l?void 0:l.loading)&&(0,r.jsx)(R,M({},A,{className:"owl-theme home-owl",items:1,loop:!0,margin:0,navText:["<img src='/img/homePage/sectionMainSlider/nav-prev.svg' alt='' />","<img src='/img/homePage/sectionMainSlider/nav-next.svg' alt='' />"],nav:!0,children:(null===l||void 0===l?void 0:l.loading)&&(null===l||void 0===l||null===(t=l.data)||void 0===t?void 0:t.map((function(e){var t=e.id,i=e.image,a=e.image_am,s=e.image_ru,l=e.title,c=e.title_am,d=e.title_ru,u=e.description,m=e.description_am,_=e.description_ru,g=e.link,h=e.link_am,v=e.link_ru;return(0,r.jsxs)("div",{className:b().itemOne,children:[(0,r.jsx)("div",{className:b().gradient}),(0,r.jsx)("img",{alt:"",className:b().backgroundImage,src:"en"==S?k+i:"ru"==S?k+s:k+a}),(0,r.jsxs)("div",{className:b().blockData,children:[(0,r.jsx)("h2",{className:b().title,children:"en"==S?l:"ru"==S?d:c}),(0,r.jsx)("p",{className:b().info,children:"en"==S?u:"ru"==S?_:m}),g&&v&&h&&(0,r.jsx)(o(),{href:"en"==S?g:"ru"==S?v:h,children:(0,r.jsx)("button",{className:b().button,children:n.I.buttonSeeMore[S]})})]})]},t)})))})),(0,r.jsx)("div",{className:f().brandsSlide,children:(0,r.jsx)("div",{className:f().sliderContainer,children:(0,r.jsx)(y.Z,M({},E,{children:(null===c||void 0===c?void 0:c.loading)&&(null===(s=c.data)||void 0===s?void 0:s.map((function(e){var t=e.id,i=e.image,a=e.link;return(0,r.jsx)(o(),{href:a,children:(0,r.jsx)("div",{className:"itemOne",children:(0,r.jsx)("img",{className:f().brandImg,alt:"brandImg",src:k+i})})},t)})))}))})}),(0,r.jsx)("div",{className:j().bestBrands,children:(0,r.jsxs)("div",{className:j().container,children:[(0,r.jsxs)("div",{className:j().descAndPatter,children:[(0,r.jsx)("div",{className:j().pattern,children:(0,r.jsx)("img",{alt:"pattern",src:"/img/homePage/sectionBestBrands/pattern.svg"})}),(0,r.jsxs)("div",{className:j().descBlock,children:[(0,r.jsx)("div",{className:j().descBlockTitle,children:n.I.homeBestBrandsTitle[S]}),(0,r.jsx)("p",{children:n.I.homeBestBrandsDescription[S]})]})]}),(0,r.jsxs)("div",{className:j().descAndPatterMobile,children:[(0,r.jsxs)("div",{className:j().patternAndTitleMobile,children:[(0,r.jsx)("div",{className:j().patternMobile,children:(0,r.jsx)("img",{alt:"pattern",src:"/img/homePage/sectionBestBrands/pattern.svg"})}),(0,r.jsx)("div",{className:j().mobileTitle,children:n.I.homeBestBrandsTitle[S]})]}),(0,r.jsx)("p",{className:j().descBlockMobile,children:n.I.homeBestBrandsDescription[S]})]}),(0,r.jsx)(_.default,{})]})}),(0,r.jsx)("div",{className:B().yourInterest,children:(0,r.jsxs)("div",{className:B().container,children:[(0,r.jsx)("div",{className:B().question,children:n.I.YourInterestTitle[S]}),(null===h||void 0===h?void 0:h.loading)&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:B().secondBlock,children:[(0,r.jsx)(o(),{href:h.data[2].link,children:(0,r.jsx)("div",{className:B().thirdPic,style:{backgroundImage:"url(".concat(k+h.data[2].image,")")},children:(0,r.jsx)("span",{className:B().title,children:"en"==S?h.data[2].title:"ru"==S?h.data[2].title_ru:h.data[2].title_am})})}),(0,r.jsx)(o(),{href:h.data[3].link,children:(0,r.jsx)("div",{className:B().fourPic,style:{backgroundImage:"url(".concat(k+h.data[3].image,")")},children:(0,r.jsx)("span",{className:B().title,children:"en"==S?h.data[3].title:"ru"==S?h.data[3].title_ru:h.data[3].title_am})})})]}),(0,r.jsxs)("div",{className:B().thirdBlock,children:[(0,r.jsxs)("div",{className:B().fiveAndSixBlock,children:[(0,r.jsx)(o(),{href:h.data[4].link,children:(0,r.jsx)("div",{className:B().fivePic,style:{backgroundImage:"url(".concat(k+h.data[4].image,")")},children:(0,r.jsx)("span",{className:B().title,children:"en"==S?h.data[4].title:"ru"==S?h.data[4].title_ru:h.data[4].title_am})})}),(0,r.jsx)(o(),{href:h.data[5].link,children:(0,r.jsx)("div",{className:B().sixPic,style:{backgroundImage:"url(".concat(k+h.data[5].image,")")},children:(0,r.jsx)("span",{className:B().title,children:"en"==S?h.data[5].title:"ru"==S?h.data[5].title_ru:h.data[5].title_am})})})]}),(0,r.jsx)(o(),{href:h.data[6].link,children:(0,r.jsx)("div",{className:B().sevenPic,style:{backgroundImage:"url(".concat(k+h.data[6].image,")")},children:(0,r.jsx)("span",{className:B().title,children:"en"==S?h.data[6].title:"ru"==S?h.data[6].title_ru:h.data[6].title_am})})})]})]})]})}),(0,r.jsx)("div",{className:N().blog,children:(0,r.jsxs)("div",{className:N().container,children:[(0,r.jsxs)("div",{className:N().titleBlock,children:[(0,r.jsx)("div",{className:N().patternTitle,children:(0,r.jsx)("img",{alt:"pattern",src:"/img/homePage/secBlog/firstPattern.svg"})}),(0,r.jsx)("div",{className:N().title,children:n.I.BlogAndNews[S]}),(0,r.jsx)("div",{className:N().backPattern,children:(0,r.jsx)("img",{alt:"pattern",src:"/img/homePage/secBlog/secondPattern.png",height:900})})]}),(0,r.jsx)(d.default,{})]})}),(null===v||void 0===v?void 0:v.loading)&&(0,r.jsx)("div",{className:P().giftCard,children:(0,r.jsxs)("div",{className:P().container,children:[(0,r.jsx)(o(),{href:"/giftCardPage",children:(0,r.jsxs)("div",{className:P().hoverBlockMobile,children:[(0,r.jsx)("div",{className:P().mobileButton,children:n.I.buttonSeeMore[S]}),(0,r.jsx)("div",{className:P().buttonIconMobile,children:(0,r.jsx)("img",{alt:"arrRight",src:"/img/homePage/secBlog/arrRight.svg"})})]})}),(0,r.jsx)("div",{className:P().pattern,children:(0,r.jsx)(O(),{alt:"pattern",src:"/img/homePage/secBlog/secondPattern.png",width:941,height:750})}),(0,r.jsx)("div",{className:P().giftCardImg,children:(0,r.jsx)(O(),{alt:"giftCard",src:"/img/homePage/secGiftCard/giftCardImgNew.png",width:641,height:748})}),(0,r.jsxs)("div",{className:P().aboutBlock,children:[(0,r.jsxs)("div",{className:P().titleBlock,children:[(0,r.jsx)("h2",{className:P().title,children:n.I.headerMenuGiftCard[S]}),(0,r.jsx)("div",{className:P().secondPattern,children:(0,r.jsx)("img",{alt:"pattern",src:"/img/homePage/secBlog/firstPattern.svg"})})]}),(0,r.jsx)("div",{className:P().descrip,children:C("en"==S?x(v.data.content,425):x("am"==S?v.data.content_am:v.data.content_ru,390))}),(0,r.jsx)(o(),{href:"/giftCardPage",children:(0,r.jsxs)("div",{className:P().hoverBlock,children:[(0,r.jsx)("button",{className:P().button,children:n.I.buttonSeeMore[S]}),(0,r.jsx)("div",{className:P().buttonIcon,children:(0,r.jsx)("img",{alt:"arrRight",src:"/img/homePage/secBlog/arrRight.svg"})})]})})]})]})}),(0,r.jsx)("div",{className:w().news,children:(0,r.jsxs)("div",{className:w().container,children:[(0,r.jsxs)("div",{className:w().titleBlock,children:[(0,r.jsx)("div",{className:w().pattern,children:(0,r.jsx)("img",{alt:"pattern",src:"/img/homePage/secBlog/firstPattern.svg"})}),(0,r.jsx)("div",{className:w().title,children:n.I.headerMenuSpecialOffers[S]})]}),(0,r.jsx)(u.default,{})]})}),(0,r.jsx)(m.default,{})]})}},8519:function(e){e.exports={backgroundImage:"mainSliderHomePage_backgroundImage__yj2aJ",itemOne:"mainSliderHomePage_itemOne__rLrws",gradient:"mainSliderHomePage_gradient__r7Nbm",blockData:"mainSliderHomePage_blockData__NjqvG",name:"mainSliderHomePage_name__jJ4Bp",title:"mainSliderHomePage_title__iQrzj",info:"mainSliderHomePage_info__rwwuD",button:"mainSliderHomePage_button__1SlEL"}},334:function(e){e.exports={blog:"blog_blog__a4eRG",container:"blog_container__o0TdH",titleBlock:"blog_titleBlock__lzyhk",patternTitle:"blog_patternTitle__23PQz",title:"blog_title__5mfZO",backPattern:"blog_backPattern__Kl4WU"}},3983:function(e){e.exports={img:"blogSlider_img__vgCVT",slide:"blogSlider_slide__oersR",description:"blogSlider_description___5aU4",dateBlock:"blogSlider_dateBlock__28Czh",calendarIcon:"blogSlider_calendarIcon__20Jz3",date:"blogSlider_date__PQoUQ",button:"blogSlider_button__ke6YG",buttonIcon:"blogSlider_buttonIcon__ibEA5",buttonIco:"blogSlider_buttonIco__b0iwd",hoverBlock:"blogSlider_hoverBlock__942zV",blogSLider:"blogSlider_blogSLider__r_iUr"}},2913:function(e){e.exports={cardSubscribe:"cardSubscribe_cardSubscribe__8pxoF",container:"cardSubscribe_container__gxa3h",cardBackground:"cardSubscribe_cardBackground__o0fVD",title:"cardSubscribe_title__S0fR9",cardMain:"cardSubscribe_cardMain__Aa4Cy",subscribe:"cardSubscribe_subscribe__MS28c",description:"cardSubscribe_description__U4_RE",inputBlock:"cardSubscribe_inputBlock__OdElF",input:"cardSubscribe_input__f6Ina",button:"cardSubscribe_button__jyquO",accessBlock:"cardSubscribe_accessBlock__GA4FJ",agree:"cardSubscribe_agree__AhY9_",invalidEmail:"cardSubscribe_invalidEmail__aIfA0",checked:"cardSubscribe_checked__gM7I8",notChecked:"cardSubscribe_notChecked___p3Uv",success:"cardSubscribe_success__0QhS_",news:"cardSubscribe_news__RUjkr"}},1317:function(e){e.exports={giftCard:"giftCard_giftCard__6LldC",container:"giftCard_container__MHIDe",aboutBlock:"giftCard_aboutBlock__ZUih7",titleBlock:"giftCard_titleBlock__cVkNN",title:"giftCard_title__38Ox5",descrip:"giftCard_descrip__Oks_w",button:"giftCard_button__vR92c",buttonIcon:"giftCard_buttonIcon__n_Sgx",hoverBlock:"giftCard_hoverBlock__LaXCw",pattern:"giftCard_pattern__rRLFi",hoverBlockMobile:"giftCard_hoverBlockMobile__mM2au",giftCardImg:"giftCard_giftCardImg__V1eRJ",secondPattern:"giftCard_secondPattern__Ua8qW",mobileButton:"giftCard_mobileButton__ijWDK",buttonIconMobile:"giftCard_buttonIconMobile__IQCzQ"}},6969:function(e){e.exports={news:"news_news__64QxG",container:"news_container__YLQkR",titleBlock:"news_titleBlock__jI3kH",title:"news_title__0Z4xT",pattern:"news_pattern__tm_wT"}},2352:function(e){e.exports={newsSlider:"newsSlider_newsSlider__5w3sf",container:"newsSlider_container__YICQZ",newSpecialOffers:"newsSlider_newSpecialOffers__WCaSR",item:"newsSlider_item__FWzqP",background:"newsSlider_background__mtlNz",logoBlock:"newsSlider_logoBlock__5ki_v",BrandName:"newsSlider_BrandName__bENWF",logo:"newsSlider_logo__rvxxF"}},5080:function(e){e.exports={yourInterest:"yourInterest_yourInterest__r7zCG",container:"yourInterest_container__cgSua",question:"yourInterest_question__tzPbt",firstBlock:"yourInterest_firstBlock__iJ_Nf",firstPic:"yourInterest_firstPic__kAAmX",secondPic:"yourInterest_secondPic__P1nwI",secondBlock:"yourInterest_secondBlock__03bnP",thirdPic:"yourInterest_thirdPic__iH0_W",fourPic:"yourInterest_fourPic__Ci4IQ",thirdBlock:"yourInterest_thirdBlock__i_rIW",fivePic:"yourInterest_fivePic__2wXj9",sixPic:"yourInterest_sixPic__n4u6n",sevenPic:"yourInterest_sevenPic__AEnl0",title:"yourInterest_title__HrF2d",fiveAndSixBlock:"yourInterest_fiveAndSixBlock__H7K9g"}},5185:function(e){e.exports={bestBrands:"bestBrands_bestBrands__3T6Fq",container:"bestBrands_container__xgPsP",descAndPatter:"bestBrands_descAndPatter__Tnonr",pattern:"bestBrands_pattern__UbQO8",descBlock:"bestBrands_descBlock__Z4g__",descAndPatterMobile:"bestBrands_descAndPatterMobile__vlgAR",patternAndTitleMobile:"bestBrands_patternAndTitleMobile__R3oWS",patternMobile:"bestBrands_patternMobile__rtHuz",mobileTitle:"bestBrands_mobileTitle__YmO9w",descBlockMobile:"bestBrands_descBlockMobile__qvxkI"}},9403:function(e){e.exports={itemsBlock:"sliderBestBrands_itemsBlock__Zul6J",sliderBestBrands:"sliderBestBrands_sliderBestBrands__NeLA8",itemOne:"sliderBestBrands_itemOne__aeY8Q",arrRight:"sliderBestBrands_arrRight___yQ3v",nameBlock:"sliderBestBrands_nameBlock__b4pMV",nameBlockTitle:"sliderBestBrands_nameBlockTitle__8A0tL",items:"sliderBestBrands_items__uzQbb",itemTwo:"sliderBestBrands_itemTwo__18lSz",NameBlock:"sliderBestBrands_NameBlock__m_ZFf",nameBlockTitleTwo:"sliderBestBrands_nameBlockTitleTwo__r2O2a",itemThree:"sliderBestBrands_itemThree__nPYnb",nameBlockTitleThree:"sliderBestBrands_nameBlockTitleThree__eiTWW"}},4215:function(e){e.exports={brandsSlide:"BrandsSlide_brandsSlide___GEQy",sliderContainer:"BrandsSlide_sliderContainer__Mcrbz",brandImg:"BrandsSlide_brandImg__L674o"}}},function(e){e.O(0,[488,7252,4938,9774,2888,179],(function(){return t=5728,e(e.s=t);var t}));var t=e.O();_N_E=t}]);