(function(e){function t(t){for(var n,c,o=t[0],u=t[1],i=t[2],l=0,g=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&g.push(a[c][0]),a[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(t);while(g.length)g.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},s=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var p=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"25b9":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a={class:"chat-input"};function s(e,t,r,s,c,o){var u=Object(n["k"])("ChatBox");return Object(n["g"])(),Object(n["c"])("div",null,[Object(n["f"])(u,{messages:e.messages},null,8,["messages"]),Object(n["d"])("div",a,[Object(n["n"])(Object(n["d"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.message=t}),onKeyup:t[1]||(t[1]=Object(n["o"])((function(){return o.sendMessage&&o.sendMessage.apply(o,arguments)}),["enter"]))},null,544),[[n["m"],e.message]]),Object(n["d"])("button",{onClick:t[2]||(t[2]=function(){return o.sendMessage&&o.sendMessage.apply(o,arguments)})},"Send")])])}var c=r("1da1"),o=r("2909"),u=(r("96cf"),r("ac1f"),r("466d"),r("d81d"),r("fb6a"),r("b0c0"),{class:"container"}),i=Object(n["e"])(" YodaBot "),p={class:"chat-box-list-container"},l={class:"chat-bot-list"};function g(e,t,r,a,s,c){var o=Object(n["k"])("Message");return Object(n["g"])(),Object(n["c"])("section",u,[i,Object(n["d"])("div",p,[Object(n["d"])("ul",l,[(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["j"])(r.messages,(function(e,t){return Object(n["g"])(),Object(n["c"])("li",{class:"message",key:t},[Object(n["f"])(o,{message:e,author:e.author},null,8,["message","author"])])})),128))])])])}var h={key:0},f={key:1};function b(e,t,r,a,s,c){return Object(n["g"])(),Object(n["c"])("div",null,[Object(n["d"])("p",null,[Object(n["d"])("span",null,[Object(n["d"])("strong",null,Object(n["l"])(r.author)+": ",1),Array.isArray(r.message.text)?(Object(n["g"])(),Object(n["c"])("ul",h,[(Object(n["g"])(!0),Object(n["c"])(n["a"],null,Object(n["j"])(r.message.text,(function(e,t){return Object(n["g"])(),Object(n["c"])("li",{key:t},Object(n["l"])(e),1)})),128))])):(Object(n["g"])(),Object(n["c"])("ul",f,[Object(n["d"])("li",null,Object(n["l"])(r.message.text),1)]))])])])}var m={name:"Message",props:{author:String,message:Object}},v=r("6b0d"),d=r.n(v);const O=d()(m,[["render",b]]);var j=O,w={name:"ChatBox",props:{messages:Object},components:{Message:j}};r("862a");const x=d()(w,[["render",g],["__scopeId","data-v-0bd03821"]]);var y=x,M=r("bc3a"),k=r.n(M),R=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("https://cw-quotes.herokuapp.com/api/quotes/random");case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("http://localhost:3000/start");case 3:return t=e.sent,C(),e.abrupt("return",t);case 8:e.prev=8,e.t0=e["catch"](0),console.error("Error: 0.1 ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=setInterval(Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("http://localhost:3000/refresh");case 2:return t=e.sent,console.log(t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)}))),12e4),e.abrupt("return",t);case 5:e.prev=5,e.t0=e["catch"](0),console.error("Error: 0.2 ",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={},e.prev=1,r["message"]=t,e.next=5,k.a.post("http://localhost:3000/message",r);case 5:return n=e.sent,console.log(n),e.abrupt("return",n);case 10:return e.prev=10,e.t0=e["catch"](1),console.error("Error: 0.3 ",e.t0),a={message:"Your message, I have not received"},e.abrupt("return",{data:a});case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();T("hello");var _=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("http://localhost:3000/characters");case 3:return t=e.sent,e.abrupt("return",t.data[0]);case 7:return e.prev=7,e.t0=e["catch"](0),console.error("Error: 0.4 ",e.t0),r=[{title:"Master Yoda will be back"}],e.abrupt("return",r);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("http://localhost:3000/movies");case 3:return t=e.sent,e.abrupt("return",t.data[0]);case 7:return e.prev=7,e.t0=e["catch"](0),console.error("Error: 0.5 ",e.t0),r=[{title:"Master Yoda is away. After the tone, leave a message."}],e.abrupt("return",r);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),Y={getQuote:R,getCharacters:_,getMovies:P,refreshToken:C,startConversation:S,sendMessage:T},E={name:"App",data:function(){return{message:"",messages:[]}},created:function(){var e,t=this.openStorage();t&&(e=this.messages).push.apply(e,Object(o["a"])(t));Y.startConversation()},methods:{openStorage:function(){return JSON.parse(sessionStorage.getItem("messages"))},saveStorage:function(){sessionStorage.setItem("messages",JSON.stringify(this.messages))},updateStorage:function(){var e=this.openStorage();e||(e={}),e=this.messages,this.saveStorage(e)},pushToMessage:function(e,t){this.messages.push({text:e,author:t}),this.updateStorage()},checkForce:function(e){return!!e.match(/\b(force)\b/gi)},sendMessage:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.message.length){t.next=2;break}return t.abrupt("return");case 2:e.pushToMessage(e.message,"Me"),e.checkForce(e.message)?e.getmovieList():e.receiveMessage(e.message),e.message="";case 5:case"end":return t.stop()}}),t)})))()},receiveMessage:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Y.sendMessage(e).then((function(e){console.log(e);var r=e.data["message"];t.pushToMessage(r,"Master Yoda")}));case 2:case"end":return r.stop()}}),r)})))()},getCharacters:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Y.getCharacters().then((function(t){console.log(t);var r=t.slice(1,10).map((function(e){return e.name}));e.pushToMessage(r,"Master Yoda")}));case 2:case"end":return t.stop()}}),t)})))()},getmovieList:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Y.getMovies().then((function(t){console.log(t);var r=t.map((function(e){return e.title}));e.pushToMessage(r,"Master Yoda")}));case 2:case"end":return t.stop()}}),t)})))()}},components:{ChatBox:y}};r("a458");const I=d()(E,[["render",s]]);var A=I;Object(n["b"])(A).mount("#app")},"862a":function(e,t,r){"use strict";r("ce2e")},a458:function(e,t,r){"use strict";r("25b9")},ce2e:function(e,t,r){}});
//# sourceMappingURL=app.f0fea38a.js.map