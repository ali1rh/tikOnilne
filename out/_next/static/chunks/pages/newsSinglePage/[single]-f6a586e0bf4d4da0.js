(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7946],{5141:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/newsSinglePage/[single]",function(){return a(307)}])},2273:function(e,t,a){"use strict";a.r(t);var s=a(4051),r=a.n(s),n=a(5893),i=a(2913),c=a.n(i),l=a(7294),o=a(9669),d=a.n(o),u=a(9321),_=a(2063);function h(e,t,a,s,r,n,i){try{var c=e[n](i),l=c.value}catch(o){return void a(o)}c.done?t(l):Promise.resolve(l).then(s,r)}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),s.forEach((function(t){g(e,t,a[t])}))}return e}t.default=function(){var e=(0,u.I)(),t=e.HOST_API,a=e.lang,s=(0,l.useState)(""),i=s[0],o=s[1],g=(0,l.useState)(!1),m=g[0],v=g[1],x=(0,l.useState)({}),w=x[0],j=x[1],N=(0,l.useState)(!1),f=N[0],p=N[1];(0,l.useEffect)((function(){}),[i]);var k=function(){var e,a=(e=r().mark((function e(a){var s,n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),m){e.next=5;break}return j({checked:"checked required"}),p(!1),e.abrupt("return");case 5:if(""!=i){e.next=9;break}return j({email:"email use required"}),p(!1),e.abrupt("return");case 9:if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(String(i))){e.next=15;break}return j({email:"invalid email"}),p(!1),e.abrupt("return");case 15:return s={email:i},e.prev=16,e.next=19,d()({url:t+"subscribe",method:"POST",headers:{"content-type":"application/json"},data:JSON.stringify(s)});case 19:"success"==(n=e.sent).data&&200==n.status?(j({}),o(""),p(!0)):n.data.error&&j(b({},n.data)),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(16),console.log(e.t0);case 26:case"end":return e.stop()}}),e,null,[[16,23]])})),function(){var t=this,a=arguments;return new Promise((function(s,r){var n=e.apply(t,a);function i(e){h(n,s,r,i,c,"next",e)}function c(e){h(n,s,r,i,c,"throw",e)}i(void 0)}))});return function(e){return a.apply(this,arguments)}}();return(0,n.jsx)("div",{className:c().cardSubscribe,children:(0,n.jsxs)("div",{className:c().container,children:[(0,n.jsx)("div",{className:c().cardBackground,style:{backgroundImage:"url(/img/homePage/secCardSubscribe/background.jpg)"}}),(0,n.jsxs)("div",{className:c().cardMain,children:[(0,n.jsx)("div",{className:c().subscribe,children:_.I.CardSubscribeTitle[a]}),(0,n.jsx)("div",{className:c().description,children:_.I.CardSubscribeDescription[a]}),(0,n.jsxs)("form",{className:c().inputBlock,onSubmit:k,children:[(0,n.jsx)("input",{className:c().input,value:i,type:"text",placeholder:_.I.EmailAddress[a],onChange:function(e){return o(e.target.value)}}),(0,n.jsx)("button",{className:c().button,children:(0,n.jsx)("img",{alt:"button",src:"/img/homePage/secCardSubscribe/button.svg"})})]}),(0,n.jsxs)("div",{children:[w.email?(0,n.jsx)("div",{className:c().invalidEmail,children:_.I.wrongEmail[a]}):null,f?(0,n.jsx)("div",{className:c().success,children:_.I.successfullySubscribed[a]}):null]}),(0,n.jsxs)("div",{className:c().accessBlock,children:[(0,n.jsx)("input",{type:"checkbox",className:w.checked?c().notChecked:m,onChange:function(e){return v(e.target.checked)}}),(0,n.jsxs)("div",{className:c().agree,children:[_.I.CardSubscribeAgreeTermsLeft[a],(0,n.jsx)("span",{children:_.I.CardSubscribeAgreeTermsRight[a]})]})]})]})]})})}},13:function(e,t,a){"use strict";a.r(t);var s=a(5893),r=a(2458),n=a.n(r),i=a(5675),c=a.n(i),l=a(9321),o=a(2063);t.default=function(){var e=(0,l.I)().lang;return(0,s.jsx)("div",{className:n().secMain,children:(0,s.jsx)("div",{className:n().container,children:(0,s.jsxs)("div",{className:n().background,style:{backgroundImage:"url(/img/newsSinglePage/secMain/background.jpeg)"},children:[(0,s.jsx)("div",{className:n().gradientt}),(0,s.jsxs)("div",{className:n().patternAndTitle,children:[(0,s.jsx)("div",{className:n().pattern,children:(0,s.jsx)(c(),{alt:"pattern",src:"/img/newsSinglePage/secMain/pattern.svg",width:170,height:170})}),(0,s.jsx)("div",{className:n().title,children:o.I.NewsPageCategoryNews[e]})]})]})})})}},307:function(e,t,a){"use strict";a.r(t);var s=a(4051),r=a.n(s),n=a(5893),i=a(5675),c=a.n(i),l=a(1200),o=a.n(l),d=a(1664),u=a.n(d),_=a(3086),h=a(9321),g=a(7294),b=a(1163),m=a(9669),v=a.n(m),x=a(2273),w=a(13),j=a(1818),N=a(2063);function f(e,t,a,s,r,n,i){try{var c=e[n](i),l=c.value}catch(o){return void a(o)}c.done?t(l):Promise.resolve(l).then(s,r)}t.default=function(){var e,t,s,i,l,d=a(488),m=(0,h.I)(),p=m.HOST_API,k=(m.HOST_API_IMG,m.lang),P=(0,b.useRouter)();console.log(P.asPath,"router");var S=P.query.single,B=(0,g.useState)({data:{},loading:!1}),M=B[0],y=B[1];(0,g.useEffect)((function(){O(S)}),[S]);var O=function(){var e,t=(e=r().mark((function e(t){var a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v()({url:p+"news/".concat(t),method:"GET"});case 3:a=e.sent,console.log(a,"datanaaa"),Object.keys(a.data).length&&200==a.status&&y({data:a.data,loading:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})),function(){var t=this,a=arguments;return new Promise((function(s,r){var n=e.apply(t,a);function i(e){f(n,s,r,i,c,"next",e)}function c(e){f(n,s,r,i,c,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(w.default,{}),M.loading&&(0,n.jsx)("div",{className:o().SinglePage,children:(0,n.jsx)("div",{className:o().container,children:(0,n.jsxs)("div",{className:o().singlePageBlock,children:[(0,n.jsx)("div",{className:o().GoBackBlock,children:(0,n.jsx)(u(),{href:"/newsPage",children:(0,n.jsx)("a",{children:(0,n.jsxs)("div",{className:o().forHover,children:[(0,n.jsx)("div",{className:o().arrow,children:(0,n.jsx)(c(),{alt:"arrow",src:"/img/newsSinglePage/singlePage/Rarrow.svg"})}),(0,n.jsx)("div",{className:o().goBack,children:N.I.buttonBack[k]})]})})})}),(0,n.jsx)("div",{className:o().title,children:"en"==k?null===(e=M.data)||void 0===e?void 0:e.news.title:"ru"==k?null===(t=M.data)||void 0===t?void 0:t.news.title_ru:null===(s=M.data)||void 0===s?void 0:s.news.title_am}),(0,n.jsxs)("div",{className:o().dateBlock,children:[(0,n.jsx)("div",{children:(0,n.jsx)(c(),{alt:"calendarIcon",src:"/img/newsSinglePage/singlePage/calendarIcon.svg"})}),(0,n.jsx)("div",{className:o().date,children:null===(i=M.data)||void 0===i?void 0:i.news.date})]}),(0,n.jsx)("div",{className:o().descrip,children:d("en"==k?M.data.news.content:"ru"==k?M.data.news.content_ru:M.data.news.content_am)}),(0,n.jsx)("div",{className:o().bottomline}),(0,n.jsxs)("div",{className:o().shareBlock,children:[(0,n.jsx)("div",{className:o().share,children:N.I.ShareWithFriends[k]}),(0,n.jsx)("div",{className:o().Facebook,children:(0,n.jsx)(j.Dk,{url:"https://www.test.weflex.am"+P.asPath,children:(0,n.jsx)(j.Vq,{size:33,round:!0})})}),(0,n.jsx)("div",{children:(0,n.jsx)(j.B,{url:"https://www.test.weflex.am"+P.asPath,children:(0,n.jsx)(j.Zm,{size:33,round:!0})})}),(0,n.jsx)("div",{children:(0,n.jsx)(j.r2,{url:"https://www.test.weflex.am/"+P.asPath,children:(0,n.jsx)(j.pA,{size:33,round:!0})})})]}),(0,n.jsx)(_.default,{related:null===(l=M.data)||void 0===l?void 0:l.related,loading:M.loading})]})})}),(0,n.jsx)(x.default,{})]})}},3086:function(e,t,a){"use strict";a.r(t);var s=a(5893),r=a(2128),n=a.n(r),i=a(9321),c=(a(5966),a(960),a(5152)),l=a.n(c),o=a(1664),d=a.n(o),u=a(2063);function _(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),s.forEach((function(t){_(e,t,a[t])}))}return e}var g=l()(Promise.all([a.e(571),a.e(2568)]).then(a.t.bind(a,2568,23)),{loadableGenerated:{webpack:function(){return[2568]}},ssr:!1}),b={autoplayTimeout:3e3,autoplay:!0,smartSpeed:2e3,dots:!0,items:1};t.default=function(e){var t=e.related,a=e.loading,r=(0,i.I)(),c=r.HOST_API_IMG,l=r.lang;return(0,s.jsx)(s.Fragment,{children:a&&t&&(0,s.jsx)("div",{className:n().OtherNews,children:(0,s.jsxs)("div",{className:n().container,children:[(0,s.jsx)("div",{className:n().titleBlock,children:(0,s.jsx)("div",{className:n().title,children:u.I.otherNews[l]})}),(0,s.jsx)("div",{className:n().fixedNewsBlock,children:(0,s.jsx)("div",{className:n().fixedNewsContainer,children:null===t||void 0===t?void 0:t.map((function(e){var t=e.id,a=e.title,r=e.title_am,i=e.title_ru,o=e.thumbnail,_=e.date;return(0,s.jsx)(d(),{href:"/newsSinglePage/".concat(t),children:(0,s.jsx)("a",{children:(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:n().Block,children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{className:n().shop,alt:"background",src:c+o})}),(0,s.jsx)("div",{className:n().forPattern,children:(0,s.jsxs)("div",{className:n().bottomBlock,children:[(0,s.jsxs)("div",{className:n().descrip,children:["en"==l?a:"ru"==l?i:r," "]}),(0,s.jsxs)("div",{className:n().dateBlock,children:[(0,s.jsx)("div",{className:n().calendar,children:(0,s.jsx)("img",{alt:"calendar",src:"/img/newsSinglePage/otherNews/calendar.svg"})}),(0,s.jsx)("div",{className:n().date,children:_})]}),(0,s.jsxs)("div",{className:n().btnBlock,children:[(0,s.jsx)("button",{className:n().button,children:u.I.buttonSeeMore[l]}),(0,s.jsx)("div",{className:n().arrow,children:(0,s.jsx)("img",{alt:"arrow",src:"/img/newsSinglePage/otherNews/arrow.svg"})})]}),(0,s.jsx)("div",{className:n().leftPattern,children:(0,s.jsx)("img",{alt:"leftPattern",src:"/img/newsSinglePage/otherNews/leftPattern.svg"})}),(0,s.jsx)("div",{className:n().rightPattern,children:(0,s.jsx)("img",{alt:"rightPattern",src:"/img/newsSinglePage/otherNews/rightPattern.svg"})})]})})]})})})},t)}))})}),(0,s.jsx)("div",{className:n().mobileContainer,children:(0,s.jsx)(g,h({},b,{className:"owl-theme owl-specialOfferMobileNewsSingle",nav:!1,dots:!0,loop:!0,margin:0,children:null===t||void 0===t?void 0:t.map((function(e){var t=e.id,a=e.title,r=e.title_am,i=e.title_ru,o=e.thumbnail,_=e.date;return(0,s.jsx)(d(),{href:"/newsSinglePage/".concat(t),children:(0,s.jsx)("a",{children:(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:n().BlockMobile,children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{className:n().shopMobile,alt:"background",src:c+o})}),(0,s.jsx)("div",{className:n().forPatternMobile,children:(0,s.jsxs)("div",{className:n().bottomBlockMobile,children:[(0,s.jsxs)("div",{className:n().descripMobile,children:["en"==l?a:"ru"==l?i:r," "]}),(0,s.jsxs)("div",{className:n().dateBlockMobile,children:[(0,s.jsx)("div",{className:n().calendarMobile,children:(0,s.jsx)("img",{alt:"calendar",src:"/img/newsSinglePage/otherNews/calendar.svg"})}),(0,s.jsx)("div",{className:n().dateMobile,children:_})]}),(0,s.jsxs)("div",{className:n().btnBlockMobile,children:[(0,s.jsx)("button",{className:n().buttonMobile,children:u.I.buttonSeeMore[l]}),(0,s.jsx)("div",{className:n().arrowMobile,children:(0,s.jsx)("img",{alt:"arrow",src:"/img/newsSinglePage/otherNews/arrow.svg"})})]}),(0,s.jsx)("div",{className:n().leftPatternMobile,children:(0,s.jsx)("img",{alt:"leftPattern",src:"/img/newsSinglePage/otherNews/leftPattern.svg"})}),(0,s.jsx)("div",{className:n().rightPatternMobile,children:(0,s.jsx)("img",{alt:"rightPattern",src:"/img/newsSinglePage/otherNews/rightPattern.svg"})})]})})]})})})},t)}))}))})]})})})}},2913:function(e){e.exports={cardSubscribe:"cardSubscribe_cardSubscribe__8pxoF",container:"cardSubscribe_container__gxa3h",cardBackground:"cardSubscribe_cardBackground__o0fVD",title:"cardSubscribe_title__S0fR9",cardMain:"cardSubscribe_cardMain__Aa4Cy",subscribe:"cardSubscribe_subscribe__MS28c",description:"cardSubscribe_description__U4_RE",inputBlock:"cardSubscribe_inputBlock__OdElF",input:"cardSubscribe_input__f6Ina",button:"cardSubscribe_button__jyquO",accessBlock:"cardSubscribe_accessBlock__GA4FJ",agree:"cardSubscribe_agree__AhY9_",invalidEmail:"cardSubscribe_invalidEmail__aIfA0",checked:"cardSubscribe_checked__gM7I8",notChecked:"cardSubscribe_notChecked___p3Uv",success:"cardSubscribe_success__0QhS_",news:"cardSubscribe_news__RUjkr"}},2128:function(e){e.exports={container:"otherNews_container__mKdB2",titleBlock:"otherNews_titleBlock__mzDgt",title:"otherNews_title__EQatu",fixedNewsBlock:"otherNews_fixedNewsBlock__Kt_8T",fixedNewsContainer:"otherNews_fixedNewsContainer__hBxvq",Block:"otherNews_Block__VFG1g",bottomBlock:"otherNews_bottomBlock__T96C8",dateBlock:"otherNews_dateBlock__9toIk",descrip:"otherNews_descrip__45AOM",date:"otherNews_date__PG_vh",shop:"otherNews_shop__POQTU",btnBlock:"otherNews_btnBlock__htwU_",button:"otherNews_button__O0F2S",arrow:"otherNews_arrow__iFWAj",leftPattern:"otherNews_leftPattern__QzH09",rightPattern:"otherNews_rightPattern__dh3HE",forPattern:"otherNews_forPattern__rrC9B",mobileContainer:"otherNews_mobileContainer__mTfhP",BlockMobile:"otherNews_BlockMobile__SoX_W",bottomBlockMobile:"otherNews_bottomBlockMobile__IMbjF",dateBlockMobile:"otherNews_dateBlockMobile__egkTX",descripMobile:"otherNews_descripMobile__yqoIq",dateMobile:"otherNews_dateMobile__JC4h1",shopMobile:"otherNews_shopMobile__V9CZw",btnBlockMobile:"otherNews_btnBlockMobile__AtlXr",buttonMobile:"otherNews_buttonMobile__BMjwC",arrowMobile:"otherNews_arrowMobile__TBbvC",leftPatternMobile:"otherNews_leftPatternMobile__svLhH",rightPatternMobile:"otherNews_rightPatternMobile__LKfET",forPatternMobile:"otherNews_forPatternMobile__XpjlO"}},2458:function(e){e.exports={secMain:"secMain_secMain__k_ceX",gradientt:"secMain_gradientt__VEUN0",background:"secMain_background__xoDo_",patternAndTitle:"secMain_patternAndTitle__JOlo0",title:"secMain_title____Jcd",pattern:"secMain_pattern__ztgYn"}},1200:function(e){e.exports={SinglePage:"singlePage_SinglePage__F1oYq",container:"singlePage_container__1o0tp",GoBackBlock:"singlePage_GoBackBlock__J88Lm",goBack:"singlePage_goBack__1QYzA",forHover:"singlePage_forHover__wXs9D",arrow:"singlePage_arrow__USEdC",descrip:"singlePage_descrip__zFJxl",singlePageBlock:"singlePage_singlePageBlock__LlNw2",title:"singlePage_title__RqEqb",dateBlock:"singlePage_dateBlock__KrERb",date:"singlePage_date__ZZ8eA",shop:"singlePage_shop__UW_RZ",bottomline:"singlePage_bottomline__E9xzK",shareBlock:"singlePage_shareBlock__MR7yV",share:"singlePage_share__l7acp"}}},function(e){e.O(0,[488,7252,1818,9774,2888,179],(function(){return t=5141,e(e.s=t);var t}));var t=e.O();_N_E=t}]);