(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6083],{8537:function(e,l,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/singleBlogPage/[single]",function(){return s(986)}])},2273:function(e,l,s){"use strict";s.r(l);var i=s(4051),a=s.n(i),n=s(5893),t=s(2913),o=s.n(t),c=s(7294),r=s(9669),d=s.n(r),g=s(9321),_=s(2063);function u(e,l,s,i,a,n,t){try{var o=e[n](t),c=o.value}catch(r){return void s(r)}o.done?l(c):Promise.resolve(c).then(i,a)}function h(e,l,s){return l in e?Object.defineProperty(e,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[l]=s,e}function b(e){for(var l=1;l<arguments.length;l++){var s=null!=arguments[l]?arguments[l]:{},i=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),i.forEach((function(l){h(e,l,s[l])}))}return e}l.default=function(){var e=(0,g.I)(),l=e.HOST_API,s=e.lang,i=(0,c.useState)(""),t=i[0],r=i[1],h=(0,c.useState)(!1),v=h[0],m=h[1],x=(0,c.useState)({}),B=x[0],j=x[1],f=(0,c.useState)(!1),p=f[0],k=f[1];(0,c.useEffect)((function(){}),[t]);var N=function(){var e,s=(e=a().mark((function e(s){var i,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.preventDefault(),v){e.next=5;break}return j({checked:"checked required"}),k(!1),e.abrupt("return");case 5:if(""!=t){e.next=9;break}return j({email:"email use required"}),k(!1),e.abrupt("return");case 9:if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(String(t))){e.next=15;break}return j({email:"invalid email"}),k(!1),e.abrupt("return");case 15:return i={email:t},e.prev=16,e.next=19,d()({url:l+"subscribe",method:"POST",headers:{"content-type":"application/json"},data:JSON.stringify(i)});case 19:"success"==(n=e.sent).data&&200==n.status?(j({}),r(""),k(!0)):n.data.error&&j(b({},n.data)),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(16),console.log(e.t0);case 26:case"end":return e.stop()}}),e,null,[[16,23]])})),function(){var l=this,s=arguments;return new Promise((function(i,a){var n=e.apply(l,s);function t(e){u(n,i,a,t,o,"next",e)}function o(e){u(n,i,a,t,o,"throw",e)}t(void 0)}))});return function(e){return s.apply(this,arguments)}}();return(0,n.jsx)("div",{className:o().cardSubscribe,children:(0,n.jsxs)("div",{className:o().container,children:[(0,n.jsx)("div",{className:o().cardBackground,style:{backgroundImage:"url(/img/homePage/secCardSubscribe/background.jpg)"}}),(0,n.jsxs)("div",{className:o().cardMain,children:[(0,n.jsx)("div",{className:o().subscribe,children:_.I.CardSubscribeTitle[s]}),(0,n.jsx)("div",{className:o().description,children:_.I.CardSubscribeDescription[s]}),(0,n.jsxs)("form",{className:o().inputBlock,onSubmit:N,children:[(0,n.jsx)("input",{className:o().input,value:t,type:"text",placeholder:_.I.EmailAddress[s],onChange:function(e){return r(e.target.value)}}),(0,n.jsx)("button",{className:o().button,children:(0,n.jsx)("img",{alt:"button",src:"/img/homePage/secCardSubscribe/button.svg"})})]}),(0,n.jsxs)("div",{children:[B.email?(0,n.jsx)("div",{className:o().invalidEmail,children:_.I.wrongEmail[s]}):null,p?(0,n.jsx)("div",{className:o().success,children:_.I.successfullySubscribed[s]}):null]}),(0,n.jsxs)("div",{className:o().accessBlock,children:[(0,n.jsx)("input",{type:"checkbox",className:B.checked?o().notChecked:v,onChange:function(e){return m(e.target.checked)}}),(0,n.jsxs)("div",{className:o().agree,children:[_.I.CardSubscribeAgreeTermsLeft[s],(0,n.jsx)("span",{children:_.I.CardSubscribeAgreeTermsRight[s]})]})]})]})]})})}},986:function(e,l,s){"use strict";s.r(l);var i=s(4051),a=s.n(i),n=s(5893),t=s(632),o=s.n(t),c=s(1664),r=s.n(c),d=s(5675),g=s.n(d),_=s(7294),u=s(9669),h=s.n(u),b=s(9321),v=s(1163),m=s(5264),x=s(647),B=s(2273),j=s(1818),f=s(2063);function p(e,l,s,i,a,n,t){try{var o=e[n](t),c=o.value}catch(r){return void s(r)}o.done?l(c):Promise.resolve(c).then(i,a)}l.default=function(){var e,l,i,t,c,d,u,k,N,w,P,S,C,I,M,y,O,T,A,E,F,R,L,D,G=function(e){return e.split("\n").map((function(e){return(0,n.jsx)("p",{children:e},e)}))},H=(s(488),(0,b.I)()),W=H.HOST_API,z=H.HOST_API_IMG,U=H.lang,q=(0,v.useRouter)(),Z=q.query.single,J=(0,_.useState)({data:{},loading:!1}),V=J[0],X=J[1];(0,_.useEffect)((function(){K(Z)}),[Z]);var K=function(){var e,l=(e=a().mark((function e(l){var s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h()({url:W+"blog/".concat(l),method:"GET"});case 3:s=e.sent,Object.keys(s.data).length&&200==s.status&&X({data:s.data,loading:!0}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var l=this,s=arguments;return new Promise((function(i,a){var n=e.apply(l,s);function t(e){p(n,i,a,t,o,"next",e)}function o(e){p(n,i,a,t,o,"throw",e)}t(void 0)}))});return function(e){return l.apply(this,arguments)}}();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x.default,{data:V.data.blog}),V.loading&&(0,n.jsxs)("div",{className:o().singleBlogs,children:[(0,n.jsxs)("div",{className:o().SecBlogFirst,children:[(0,n.jsxs)("div",{className:o().container,children:[(0,n.jsx)("div",{className:o().goBackBlock,children:(0,n.jsx)(r(),{href:"/blogPage",children:(0,n.jsx)("a",{children:(0,n.jsxs)("div",{className:o().forHover,children:[(0,n.jsx)("div",{className:o().arrow,children:(0,n.jsx)(g(),{alt:"arrow",width:32,height:18,src:"/img/singleBlogPage/secBlog/Rarrow.svg"})}),(0,n.jsx)("div",{className:o().goBack,children:f.I.buttonBack[U]})]})})})}),(0,n.jsx)("div",{className:o().title,children:"en"==U?V.loading&&(null===(e=V.data.blog)||void 0===e?void 0:e.title):"ru"==U?V.loading&&(null===(l=V.data.blog)||void 0===l?void 0:l.title_ru):V.loading&&(null===(i=V.data.blog)||void 0===i?void 0:i.title_am)}),(0,n.jsxs)("div",{className:o().dateBlock,children:[(0,n.jsx)("div",{children:(0,n.jsx)("img",{alt:"calendarIcon",src:"/img/singleBlogPage/secBlog/calendarIcon.svg"})}),(0,n.jsx)("div",{className:o().date,children:null===(t=V.data.blog)||void 0===t?void 0:t.date})]})]}),(0,n.jsxs)("div",{className:o().contents,children:[(0,n.jsx)("div",{className:o().leftContent,children:"en"==U?V.loading&&G(null===(c=V.data.blog)||void 0===c?void 0:c.content):"ru"==U?V.loading&&G(null===(d=V.data.blog)||void 0===d?void 0:d.content_ru):V.loading&&G(null===(u=V.data.blog)||void 0===u?void 0:u.content_am)}),(0,n.jsx)("div",{className:o().RightContent,children:(0,n.jsx)("img",{src:z+(null===(k=V.data.blog)||void 0===k?void 0:k.image1),alt:"BlogImg"})})]})]}),(0,n.jsxs)("div",{className:o().secPics,children:[(0,n.jsxs)("div",{className:o().LeftPicsContainer,children:[(0,n.jsx)("div",{className:o().LeftPicsContainerFirst,children:(0,n.jsx)("img",{src:z+(null===(N=V.data.blog)||void 0===N?void 0:N.image2),alt:"leftVerticalPic"})}),(0,n.jsxs)("div",{className:o().LeftPicsContainerSecond,children:[(0,n.jsx)("img",{src:z+(null===(w=V.data.blog)||void 0===w?void 0:w.image3),alt:"rightTopPic"}),(0,n.jsx)("img",{src:z+(null===(P=V.data.blog)||void 0===P?void 0:P.image4),alt:"rightBottomPic"})]})]}),(0,n.jsx)("div",{className:o().RightPicsContainer,children:(0,n.jsx)("img",{src:z+(null===(S=V.data.blog)||void 0===S?void 0:S.image5),alt:"RightPicsVectors"})})]}),(0,n.jsxs)("div",{className:o().containerTrendColors,children:[(0,n.jsxs)("div",{className:o().titleBlock,children:[(0,n.jsx)("div",{className:o().title,children:"en"==U?V.loading&&(null===(C=V.data.blog)||void 0===C?void 0:C.secondTitle):"ru"==U?V.loading&&(null===(I=V.data.blog)||void 0===I?void 0:I.secondTitle_ru):V.loading&&(null===(M=V.data.blog)||void 0===M?void 0:M.secondTitle_am)}),(0,n.jsx)("div",{className:o().description,children:"en"==U?V.loading&&G(null===(y=V.data.blog)||void 0===y?void 0:y.secondContent):"ru"==U?V.loading&&G(null===(O=V.data.blog)||void 0===O?void 0:O.secondContent_ru):V.loading&&G(null===(T=V.data.blog)||void 0===T?void 0:T.secondContent_am)})]}),(0,n.jsxs)("div",{className:o().collageBlock,children:[(0,n.jsxs)("div",{className:o().collagePics,children:[(0,n.jsxs)("div",{className:o().TopCollageBlock,children:[(0,n.jsx)("img",{src:z+(null===(A=V.data.blog)||void 0===A?void 0:A.image6),alt:"leftCollage"}),(0,n.jsx)("img",{src:z+(null===(E=V.data.blog)||void 0===E?void 0:E.image7),alt:"topRightCollage"})]}),(0,n.jsx)("div",{className:o().bottomCollageBlock,children:(0,n.jsx)("img",{src:z+(null===(F=V.data.blog)||void 0===F?void 0:F.image8),alt:"bottomCollage"})})]}),(0,n.jsx)("div",{className:o().descrip,children:"en"==U?V.loading&&G(null===(R=V.data.blog)||void 0===R?void 0:R.thirdContent):"ru"==U?V.loading&&G(null===(L=V.data.blog)||void 0===L?void 0:L.thirdContent_ru):V.loading&&G(null===(D=V.data.blog)||void 0===D?void 0:D.thirdContent_am)})]})]}),(0,n.jsxs)("div",{className:o().SecBlogSecond,children:[(0,n.jsx)("div",{className:o().line}),(0,n.jsx)("div",{}),(0,n.jsxs)("div",{className:o().shareBlock,children:[(0,n.jsx)("div",{className:o().share,children:f.I.ShareWithFriends[U]}),(0,n.jsx)("div",{className:o().Facebook,children:(0,n.jsx)(j.Dk,{url:"https://www.test.weflex.am"+q.asPath,children:(0,n.jsx)(j.Vq,{size:33,round:!0})})}),(0,n.jsx)("div",{children:(0,n.jsx)(j.B,{url:"https://www.test.weflex.am"+q.asPath,children:(0,n.jsx)(j.Zm,{size:33,round:!0})})}),(0,n.jsx)("div",{children:(0,n.jsx)(j.r2,{url:"https://www.test.weflex.am/"+q.asPath,children:(0,n.jsx)(j.pA,{size:33,round:!0})})})]})]})]}),(0,n.jsx)(m.default,{related:V.data.related,loading:V.loading}),(0,n.jsx)(B.default,{})]})}},5264:function(e,l,s){"use strict";s.r(l);var i=s(5893),a=s(6723),n=s.n(a),t=s(9321),o=s(1664),c=s.n(o),r=(s(5966),s(960),s(5152)),d=s.n(r),g=s(2063);function _(e,l,s){return l in e?Object.defineProperty(e,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[l]=s,e}function u(e){for(var l=1;l<arguments.length;l++){var s=null!=arguments[l]?arguments[l]:{},i=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),i.forEach((function(l){_(e,l,s[l])}))}return e}var h=d()(Promise.all([s.e(571),s.e(2568)]).then(s.t.bind(s,2568,23)),{loadableGenerated:{webpack:function(){return[2568]}},ssr:!1}),b={autoplayTimeout:3e3,autoplay:!0,smartSpeed:2e3,dots:!0,items:1};l.default=function(e){var l=e.related,s=(e.loading,function(e,l){var s=e;return(null===s||void 0===s?void 0:s.length)>l&&(s=s.substr(0,l)+"..."),s}),a=(0,t.I)(),o=a.HOST_API_IMG,r=a.lang;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:n().OtherBlogs,children:(null===l||void 0===l?void 0:l.length)?(0,i.jsxs)("div",{className:n().container,children:[(0,i.jsx)("div",{className:n().title,children:g.I.otherBlogs[r]}),(0,i.jsx)("div",{className:n().blogContainer,children:l.map((function(e){var l=e.id,a=e.thumbnail,t=e.title,d=e.title_am,_=e.title_ru,u=e.date;return(0,i.jsx)(c(),{href:"/singleBlogPage/".concat(l),children:(0,i.jsx)("a",{children:(0,i.jsxs)("div",{className:n().blogs,children:[(0,i.jsx)("div",{children:(0,i.jsx)("img",{className:n().img,alt:"blogImg",src:o+a})}),(0,i.jsx)("div",{className:n().description,children:s("en"==r?t:"ru"==r?_:d,79)}),(0,i.jsxs)("div",{className:n().dateBlock,children:[(0,i.jsx)("div",{children:(0,i.jsx)("img",{alt:"calendarIcon",src:"/img/singleBlogPage/otherBlogs/calendarIcon.svg"})}),(0,i.jsx)("div",{className:n().date,children:u})]}),(0,i.jsxs)("div",{className:n().btnBlock,children:[(0,i.jsx)("button",{className:n().button,children:g.I.buttonRead[r]}),(0,i.jsx)("div",{className:n().arrow,children:(0,i.jsx)("img",{alt:"arrow",src:"/img/singleBlogPage/otherBlogs/arrow.svg"})})]})]})})},l)}))}),(0,i.jsx)("div",{className:n().mobileContainer,children:(0,i.jsx)(h,u({},b,{className:"owl-theme owl-specialOfferMobileBlogSingle",nav:!1,dots:!0,loop:!0,margin:10,children:null===l||void 0===l?void 0:l.map((function(e){var l=e.id,s=e.title,a=e.thumbnail,t=e.date;return(0,i.jsx)(c(),{href:"/singleBlogPage/".concat(l),children:(0,i.jsx)("a",{children:(0,i.jsxs)("div",{className:n().blogsMobile,children:[(0,i.jsx)("div",{children:(0,i.jsx)("img",{className:n().imgMobile,alt:"blogImg",src:o+a})}),(0,i.jsx)("div",{className:n().descriptionMobile,children:s}),(0,i.jsxs)("div",{className:n().dateBlockMobile,children:[(0,i.jsx)("div",{children:(0,i.jsx)("img",{alt:"calendarIcon",src:"/img/singleBlogPage/otherBlogs/calendarIcon.svg"})}),(0,i.jsx)("div",{className:n().dateMobile,children:t})]}),(0,i.jsxs)("div",{className:n().btnBlockMobile,children:[(0,i.jsx)("button",{className:n().buttonMobile,children:g.I.buttonRead[r]}),(0,i.jsx)("div",{className:n().arrowMobile,children:(0,i.jsx)("img",{alt:"arrow",src:"/img/singleBlogPage/otherBlogs/arrow.svg"})})]})]})})},l)}))}))})]}):null})})}},647:function(e,l,s){"use strict";s.r(l);var i=s(5893),a=s(3648),n=s.n(a),t=s(5675),o=s.n(t),c=s(9321),r=s(2063);l.default=function(e){var l=e.data,s=(0,c.I)(),a=s.HOST_API_IMG,t=s.lang;return(0,i.jsx)(i.Fragment,{children:l&&(0,i.jsx)("div",{className:n().secMain,children:(0,i.jsx)("div",{className:n().container,children:(0,i.jsxs)("div",{className:n().background,style:{backgroundImage:"url(".concat(a+l.coverPhoto,")")},children:[(0,i.jsx)("div",{className:n().gradientt}),(0,i.jsxs)("div",{className:n().patternAndTitle,children:[(0,i.jsx)("div",{className:n().pattern,children:(0,i.jsx)(o(),{alt:"pattern",src:"/img/singleBlogPage/secMain/pattern.svg",width:170,height:170})}),(0,i.jsx)("div",{className:n().title,children:r.I.headerMenuBlog[t]})]})]})})})})}},2913:function(e){e.exports={cardSubscribe:"cardSubscribe_cardSubscribe__8pxoF",container:"cardSubscribe_container__gxa3h",cardBackground:"cardSubscribe_cardBackground__o0fVD",title:"cardSubscribe_title__S0fR9",cardMain:"cardSubscribe_cardMain__Aa4Cy",subscribe:"cardSubscribe_subscribe__MS28c",description:"cardSubscribe_description__U4_RE",inputBlock:"cardSubscribe_inputBlock__OdElF",input:"cardSubscribe_input__f6Ina",button:"cardSubscribe_button__jyquO",accessBlock:"cardSubscribe_accessBlock__GA4FJ",agree:"cardSubscribe_agree__AhY9_",invalidEmail:"cardSubscribe_invalidEmail__aIfA0",checked:"cardSubscribe_checked__gM7I8",notChecked:"cardSubscribe_notChecked___p3Uv",success:"cardSubscribe_success__0QhS_",news:"cardSubscribe_news__RUjkr"}},6723:function(e){e.exports={OtherBlogs:"otherBlogs_OtherBlogs__n2bEo",container:"otherBlogs_container__fEWKf",title:"otherBlogs_title__K3E_K",blogContainer:"otherBlogs_blogContainer__yU4Yj",blogs:"otherBlogs_blogs__VV1lu",description:"otherBlogs_description__kTs2k",dateBlock:"otherBlogs_dateBlock__ETxwW",date:"otherBlogs_date__TwGZA",btnBlock:"otherBlogs_btnBlock__xQqXs",button:"otherBlogs_button__E4d6M",arrow:"otherBlogs_arrow__Ed6dW",img:"otherBlogs_img__o1dSb",mobileContainer:"otherBlogs_mobileContainer__GNC5c",blogsMobile:"otherBlogs_blogsMobile__NvT2r",descriptionMobile:"otherBlogs_descriptionMobile__gxvP5",dateBlockMobile:"otherBlogs_dateBlockMobile__1lopo",dateMobile:"otherBlogs_dateMobile__xyPic",btnBlockMobile:"otherBlogs_btnBlockMobile__hPFYB",buttonMobile:"otherBlogs_buttonMobile__0hgUW",arrowMobile:"otherBlogs_arrowMobile__eHJVz",imgMobile:"otherBlogs_imgMobile__biLDb"}},632:function(e){e.exports={singleBlogs:"secBlog_singleBlogs__DXouR",SecBlogFirst:"secBlog_SecBlogFirst__I71XI",contents:"secBlog_contents__UQifg",leftContent:"secBlog_leftContent__xUEuJ",RightContent:"secBlog_RightContent__IPo_X",secPics:"secBlog_secPics__jhxdW",LeftPicsContainer:"secBlog_LeftPicsContainer__GvD66",LeftPicsContainerFirst:"secBlog_LeftPicsContainerFirst__lJxqP",LeftPicsContainerSecond:"secBlog_LeftPicsContainerSecond__uUufw",RightPicsContainer:"secBlog_RightPicsContainer__OJdEj",SecBlogSecond:"secBlog_SecBlogSecond__xGDm4",container:"secBlog_container__ngFra",goBackBlock:"secBlog_goBackBlock__t_y9d",goBack:"secBlog_goBack__EE5ro",forHover:"secBlog_forHover__noG_k",arrow:"secBlog_arrow__6izqL",title:"secBlog_title__bN4k3",blogImg:"secBlog_blogImg__a__Ij",dateBlock:"secBlog_dateBlock__DBWcw",date:"secBlog_date__6CZOL",descripAndImg:"secBlog_descripAndImg__FHf9F",collage:"secBlog_collage__vaCFI",content:"secBlog_content__TjYai",line:"secBlog_line__WwOOA",shareBlock:"secBlog_shareBlock__YIw5i",share:"secBlog_share__XXlHa",containerTrendColors:"secBlog_containerTrendColors__51Qu_",titleBlock:"secBlog_titleBlock__zTVRD",description:"secBlog_description__vsZWD",collageBlock:"secBlog_collageBlock__B7F8U",collagePics:"secBlog_collagePics__qP10R",TopCollageBlock:"secBlog_TopCollageBlock__K10GZ",bottomCollageBlock:"secBlog_bottomCollageBlock__d0tJ8",descrip:"secBlog_descrip__R4hsL",network:"secBlog_network__W1mfe",SecBlog:"secBlog_SecBlog__WwTNc"}},3648:function(e){e.exports={secMain:"secMain_secMain__AJaL4",gradientt:"secMain_gradientt__Ualgo",background:"secMain_background__2zMHw",patternAndTitle:"secMain_patternAndTitle__3IArD",title:"secMain_title__AiFCu",pattern:"secMain_pattern__KAbNZ"}}},function(e){e.O(0,[488,7252,1818,9774,2888,179],(function(){return l=8537,e(e.s=l);var l}));var l=e.O();_N_E=l}]);