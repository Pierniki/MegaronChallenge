(this["webpackJsonpmegaron-take-home-challenge"]=this["webpackJsonpmegaron-take-home-challenge"]||[]).push([[0],{12:function(e,t,i){},13:function(e,t,i){},16:function(e,t,i){"use strict";i.r(t);var u=i(1),n=i.n(u),a=i(4),d=i.n(a),r=(i(12),i(13),i(3)),c=i.n(r),s=i(5),o=i(7),l=i(6),b=i.n(l),f=function(e){var t=e.getMonth()+1,i=e.getDate();return"".concat(e.getFullYear(),"-").concat((t>9?"":"0")+t,"-").concat((i>9?"":"0")+i)},m=function(e){return e.reduce((function(e,t){return e+j(t)}),0)},p=function(e){return e.reduce((function(e,t){var i=M(t);return e.durationInMinutes>i.durationInMinutes?e:i}),{durationInMinutes:0})},j=function(e){return e.reduce((function(e,t){return e+t.durationInMinutes}),0)},M=function(e){return e.reduce((function(e,t){return e.durationInMinutes>t.durationInMinutes?e:t}))},I=i(0),h=function(e){var t=e.events,i=e.date;return Object(I.jsxs)("tr",{children:[Object(I.jsx)("td",{children:f(i)}),Object(I.jsx)("td",{children:t.length}),Object(I.jsx)("td",{children:j(t)}),Object(I.jsx)("td",{children:M(t).title})]})},v=function(e){var t=e.calendarEvents,i=e.dates;return Object(I.jsx)("tbody",{children:t.map((function(e,t){return Object(I.jsx)(h,{events:e,date:i[t]},"summary-row-".concat(t))}))})},q=function(e){var t,i=e.calendarEvents;return Object(I.jsx)("tfoot",{children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("td",{children:"Total"}),Object(I.jsx)("td",{children:(t=i,t.reduce((function(e,t){return e+t.length}),0))}),Object(I.jsx)("td",{children:m(i)}),Object(I.jsx)("td",{children:p(i).title})]})})},x=function(){return Object(I.jsx)("thead",{children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{children:"Date"}),Object(I.jsx)("th",{children:"Number of Events"}),Object(I.jsx)("th",{children:"Total duration [min]"}),Object(I.jsx)("th",{children:"Longest event"})]})})},O=function(){var e=Object(u.useState)([]),t=Object(o.a)(e,2),i=t[0],n=t[1],a=Object(u.useRef)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,t=new Date;return Array.from({length:e},(function(e,i){var u=new Date;return u.setDate(t.getDate()+i),u}))}(7)).current,d=function(){var e=Object(s.a)(c.a.mark((function e(t){var i,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.map((function(e){return b()(e)})),e.next=3,Promise.all(i);case 3:u=e.sent,n(u);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){d(a)}),[a]),Object(I.jsxs)("table",{children:[Object(I.jsx)(x,{}),Object(I.jsx)(v,{calendarEvents:i,dates:a}),Object(I.jsx)(q,{calendarEvents:i})]})},g=function(){return Object(I.jsxs)("div",{className:"calendar-summary",children:[Object(I.jsx)("h2",{children:"Calendar summary"}),Object(I.jsx)(O,{})]})};var E=function(){return Object(I.jsx)("div",{className:"App",style:{maxWidth:"1000px",margin:"auto"},children:Object(I.jsx)(g,{})})};d.a.render(Object(I.jsx)(n.a.StrictMode,{children:Object(I.jsx)(E,{})}),document.getElementById("root"))},6:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getCalendarEvents=void 0;var i={0:[{uuid:"03a4341d-3241-4db6-8bad-324409b75557",title:"Velit modi sapiente voluptas.",durationInMinutes:54},{uuid:"05b7a4c3-ade0-4374-86d5-7b9a1a492c97",title:"Eius occaecati ut.",durationInMinutes:164},{uuid:"0af6dc58-f943-46c6-8d9b-6d5e8f6681b6",title:"Totam velit at aut sed asperiores perspiciatis ut magni in.",durationInMinutes:141},{uuid:"ae1bc7ba-0e61-44b0-8e96-28f8bf06c3d4",title:"Beatae dolorem consequatur voluptatem mollitia voluptatem et ipsa aperiam et.",durationInMinutes:145},{uuid:"c1fb90cb-b7d4-41e4-9852-ec7a0a9423a1",title:"Molestiae omnis vero in.",durationInMinutes:161},{uuid:"ee13ae50-09dc-400b-8c20-863a4f8f4a2b",title:"Sapiente omnis rem quasi autem quisquam pariatur.",durationInMinutes:119},{uuid:"c2990496-d07e-4ed7-83ba-27a6d359482d",title:"Ipsam sit et veritatis.",durationInMinutes:173}],1:[{uuid:"212334c7-a24a-45ef-bd19-f36f60fef68e",title:"Blanditiis officia aut sed deserunt tempore consequuntur sed.",durationInMinutes:148},{uuid:"1351ff9a-f254-4b17-88eb-2b9d5df12b0c",title:"Nemo corporis non.",durationInMinutes:29},{uuid:"c45d3ee3-d08b-4dd4-9518-3c46f4d5d526",title:"Accusantium nobis itaque perferendis.",durationInMinutes:20},{uuid:"0d9a879d-0642-4dd1-81b9-a2a3587172f0",title:"Ut totam aut.",durationInMinutes:101},{uuid:"9f8378c0-37c4-47aa-9b86-9b19346a538b",title:"Nostrum vitae similique porro.",durationInMinutes:81}],2:[{uuid:"ac63b211-e562-4099-afcf-ba7cf1342b3b",title:"Quia necessitatibus doloribus eligendi enim dicta quis quos.",durationInMinutes:17},{uuid:"85765557-68ea-49c4-8e26-7813462ecd1b",title:"Ex tenetur qui tempore repellendus nobis est.",durationInMinutes:46},{uuid:"e8f066ec-1145-4e89-a1cb-639cc5a028e1",title:"Tempore excepturi facere voluptates voluptatem et qui at dolorum.",durationInMinutes:43}],3:[{uuid:"0b086494-4265-43e7-b805-f7ff6f81cb06",title:"Nemo est quis eius quos dicta qui qui.",durationInMinutes:128},{uuid:"60a354a5-ee9f-413d-afbb-fed99090ffb2",title:"Officiis laboriosam necessitatibus repellendus est soluta et perspiciatis.",durationInMinutes:45},{uuid:"4d075f89-33ef-4bb4-a313-15c2bb24198e",title:"Unde sint perspiciatis dolore ut labore corrupti consequatur at earum.",durationInMinutes:53},{uuid:"48a88441-663b-4ebf-8e9e-c9c72f9efb21",title:"Ut eligendi dolorem ipsum occaecati accusamus esse est.",durationInMinutes:179},{uuid:"7fb9ddd4-000c-4c5c-8755-5cf2bd2c74fc",title:"Blanditiis illum cum repudiandae illo sed sequi sunt aut fugiat.",durationInMinutes:160},{uuid:"05b460e2-fc43-4598-bc4a-a5edc92b5455",title:"Libero quo eius.",durationInMinutes:152},{uuid:"be36b5ae-f102-4d05-8ab0-a4cabd3848c5",title:"Nesciunt laborum qui.",durationInMinutes:115},{uuid:"0c828aeb-0bfa-4f33-a04c-b6687ba625d8",title:"Nam quibusdam ab nobis ipsa.",durationInMinutes:89}],4:[{uuid:"0ffd3518-85d5-4168-913c-45a9ee20ca76",title:"Aliquam reprehenderit totam fuga incidunt ad veniam fugit quaerat quae.",durationInMinutes:24},{uuid:"fa84e8db-2236-4297-9963-3575dd273036",title:"Reprehenderit occaecati et nostrum atque nam.",durationInMinutes:48},{uuid:"984cded0-d92a-47c7-be65-0096f17b56a8",title:"Accusamus eveniet commodi suscipit sunt rerum eum.",durationInMinutes:170},{uuid:"e6da601a-91f2-4719-8401-3cc7e58eb7fc",title:"Aut architecto labore occaecati.",durationInMinutes:162},{uuid:"1bdb2156-feb7-4d6b-80d9-d1203e0d801c",title:"Itaque sunt dolor molestiae architecto voluptate ad ipsa temporibus.",durationInMinutes:63},{uuid:"7ddbc225-de0f-458e-8baa-08802d5a83b6",title:"Vel praesentium sapiente mollitia.",durationInMinutes:31},{uuid:"2571a19e-6931-43e7-91c3-ee239150b133",title:"Praesentium sit consequuntur qui doloribus id odit dolorem.",durationInMinutes:105}],5:[{uuid:"7adc0c3e-7aef-4e94-b20f-2aa2c280da16",title:"Recusandae numquam consequatur voluptas nesciunt cumque tempora aut ipsam.",durationInMinutes:62},{uuid:"5e537c6f-f836-4f58-8c1f-e1bec5485276",title:"Aperiam magnam quaerat perspiciatis et.",durationInMinutes:24},{uuid:"10f1bd35-a3c4-4612-81a1-e098125874ea",title:"Culpa praesentium dolores qui sint.",durationInMinutes:59},{uuid:"0c7484d5-30bb-4065-8460-320a8128fa22",title:"Dolorem ullam deserunt doloribus.",durationInMinutes:99},{uuid:"52491ca4-e43c-4727-8637-da9f47414731",title:"Velit enim aut aut repellat.",durationInMinutes:112},{uuid:"e91279bb-9413-4b19-b47f-f055d3153c9d",title:"Quisquam qui sint perferendis sint.",durationInMinutes:131},{uuid:"cf619121-f554-4351-b02c-d54be34fb34f",title:"Fugiat rerum eligendi repellendus suscipit.",durationInMinutes:89}],6:[{uuid:"d55a35eb-ddf7-4a53-a2e4-1527af0f76b1",title:"Eligendi quis corrupti praesentium.",durationInMinutes:137},{uuid:"9b4b740d-1284-481e-86ec-9a525c7e0626",title:"Exercitationem eos reiciendis ducimus atque illum repudiandae laborum et consequatur.",durationInMinutes:111},{uuid:"ce206be0-ab13-43ee-9a57-a79f54d230a2",title:"Dolor accusamus velit alias.",durationInMinutes:64},{uuid:"eac37219-ff22-4c9e-b754-a7d0eacf9348",title:"Ullam et saepe cupiditate asperiores id minus.",durationInMinutes:124},{uuid:"f2dfe66a-40c7-433b-8a67-41336ec2844e",title:"Ut libero vel quas molestiae et occaecati dolores itaque.",durationInMinutes:58},{uuid:"60358ccc-6060-49c8-b977-2ce022d96e84",title:"Mollitia nostrum accusantium.",durationInMinutes:35},{uuid:"35a52583-2473-421d-bbe8-5a804f0b483f",title:"Id inventore est unde corrupti ipsum non.",durationInMinutes:21}]};function u(e){var t=e.getDay(),u=i[t];return new Promise((function(e){var t=200*Math.random();setTimeout((function(){return e(u)}),t)}))}t.getCalendarEvents=u,t.default=u}},[[16,1,2]]]);
//# sourceMappingURL=main.f77653fa.chunk.js.map