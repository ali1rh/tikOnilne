(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7975],{1980:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/howToGetToMall",function(){return a(9693)}])},2273:function(e,r,a){"use strict";a.r(r);var c=a(4051),n=a.n(c),t=a(5893),s=a(2913),i=a.n(s),u=a(7294),d=a(9669),l=a.n(d),o=a(9321),b=a(2063);function _(e,r,a,c,n,t,s){try{var i=e[t](s),u=i.value}catch(d){return void a(d)}i.done?r(u):Promise.resolve(u).then(c,n)}function h(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function f(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{},c=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(c=c.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),c.forEach((function(r){h(e,r,a[r])}))}return e}r.default=function(){var e=(0,o.I)(),r=e.HOST_API,a=e.lang,c=(0,u.useState)(""),s=c[0],d=c[1],h=(0,u.useState)(!1),p=h[0],m=h[1],v=(0,u.useState)({}),g=v[0],x=v[1],S=(0,u.useState)(!1),j=S[0],k=S[1];(0,u.useEffect)((function(){}),[s]);var N=function(){var e,a=(e=n().mark((function e(a){var c,t;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),p){e.next=5;break}return x({checked:"checked required"}),k(!1),e.abrupt("return");case 5:if(""!=s){e.next=9;break}return x({email:"email use required"}),k(!1),e.abrupt("return");case 9:if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(String(s))){e.next=15;break}return x({email:"invalid email"}),k(!1),e.abrupt("return");case 15:return c={email:s},e.prev=16,e.next=19,l()({url:r+"subscribe",method:"POST",headers:{"content-type":"application/json"},data:JSON.stringify(c)});case 19:"success"==(t=e.sent).data&&200==t.status?(x({}),d(""),k(!0)):t.data.error&&x(f({},t.data)),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(16),console.log(e.t0);case 26:case"end":return e.stop()}}),e,null,[[16,23]])})),function(){var r=this,a=arguments;return new Promise((function(c,n){var t=e.apply(r,a);function s(e){_(t,c,n,s,i,"next",e)}function i(e){_(t,c,n,s,i,"throw",e)}s(void 0)}))});return function(e){return a.apply(this,arguments)}}();return(0,t.jsx)("div",{className:i().cardSubscribe,children:(0,t.jsxs)("div",{className:i().container,children:[(0,t.jsx)("div",{className:i().cardBackground,style:{backgroundImage:"url(/img/homePage/secCardSubscribe/background.jpg)"}}),(0,t.jsxs)("div",{className:i().cardMain,children:[(0,t.jsx)("div",{className:i().subscribe,children:b.I.CardSubscribeTitle[a]}),(0,t.jsx)("div",{className:i().description,children:b.I.CardSubscribeDescription[a]}),(0,t.jsxs)("form",{className:i().inputBlock,onSubmit:N,children:[(0,t.jsx)("input",{className:i().input,value:s,type:"text",placeholder:b.I.EmailAddress[a],onChange:function(e){return d(e.target.value)}}),(0,t.jsx)("button",{className:i().button,children:(0,t.jsx)("img",{alt:"button",src:"/img/homePage/secCardSubscribe/button.svg"})})]}),(0,t.jsxs)("div",{children:[g.email?(0,t.jsx)("div",{className:i().invalidEmail,children:b.I.wrongEmail[a]}):null,j?(0,t.jsx)("div",{className:i().success,children:b.I.successfullySubscribed[a]}):null]}),(0,t.jsxs)("div",{className:i().accessBlock,children:[(0,t.jsx)("input",{type:"checkbox",className:g.checked?i().notChecked:p,onChange:function(e){return m(e.target.checked)}}),(0,t.jsxs)("div",{className:i().agree,children:[b.I.CardSubscribeAgreeTermsLeft[a],(0,t.jsx)("span",{children:b.I.CardSubscribeAgreeTermsRight[a]})]})]})]})]})})}},9693:function(e,r,a){"use strict";a.r(r);var c=a(5893),n=a(712),t=a(4322),s=a(625),i=a(2273);r.default=function(){return(0,c.jsxs)("div",{children:[(0,c.jsx)(s.default,{}),(0,c.jsx)(t.default,{}),(0,c.jsx)(n.default,{}),(0,c.jsx)(i.default,{})]})}},625:function(e,r,a){"use strict";a.r(r);var c=a(5893),n=a(531),t=a.n(n),s=a(5675),i=a.n(s),u=a(2063),d=a(9321);r.default=function(){var e=(0,d.I)().lang;return(0,c.jsx)("div",{className:t().secMain,children:(0,c.jsx)("div",{className:t().container,children:(0,c.jsxs)("div",{className:t().background,style:{backgroundImage:"url(/img/howToGetToMall/secMain/background.jpg)"},children:[(0,c.jsx)("div",{className:t().gradientt}),(0,c.jsxs)("div",{className:t().patternAndTitle,children:[(0,c.jsx)("div",{className:t().pattern,children:(0,c.jsx)(i(),{alt:"pattern",src:"/img/howToGetToMall/secMain/pattern.svg",width:170,height:170})}),(0,c.jsx)("div",{className:t().title,children:u.I.mainHeaderHowToGetToMall[e]})]})]})})})}},2913:function(e){e.exports={cardSubscribe:"cardSubscribe_cardSubscribe__8pxoF",container:"cardSubscribe_container__gxa3h",cardBackground:"cardSubscribe_cardBackground__o0fVD",title:"cardSubscribe_title__S0fR9",cardMain:"cardSubscribe_cardMain__Aa4Cy",subscribe:"cardSubscribe_subscribe__MS28c",description:"cardSubscribe_description__U4_RE",inputBlock:"cardSubscribe_inputBlock__OdElF",input:"cardSubscribe_input__f6Ina",button:"cardSubscribe_button__jyquO",accessBlock:"cardSubscribe_accessBlock__GA4FJ",agree:"cardSubscribe_agree__AhY9_",invalidEmail:"cardSubscribe_invalidEmail__aIfA0",checked:"cardSubscribe_checked__gM7I8",notChecked:"cardSubscribe_notChecked___p3Uv",success:"cardSubscribe_success__0QhS_",news:"cardSubscribe_news__RUjkr"}},531:function(e){e.exports={secMain:"secMain_secMain__WHrEW",gradientt:"secMain_gradientt__KChQd",background:"secMain_background__7hhwJ",patternAndTitle:"secMain_patternAndTitle__sp_Lu",title:"secMain_title__SCj0V",pattern:"secMain_pattern__91s_V"}}},function(e){e.O(0,[712,4322,9774,2888,179],(function(){return r=1980,e(e.s=r);var r}));var r=e.O();_N_E=r}]);