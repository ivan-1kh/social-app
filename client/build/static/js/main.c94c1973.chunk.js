(this["webpackJsonplang-switch"]=this["webpackJsonplang-switch"]||[]).push([[0],[,,,,,,,,,,,function(e,i,t){"use strict";(function(e){var n=t(0),s=t.n(n),o=(t(58),t(9)),a=t.n(o);i.a=function(i){var t={borderRadius:"9999px",width:30*i.size+"px",height:30*i.size+"px",border:i.border?"gray 1px solid":""};return s.a.createElement("img",{src:a.a.join(e,"content","user",i.user_id+".jpg"),style:t,alt:"userImage"})}}).call(this,"/")},,,,,,,,,,,,,,,,,,,,function(e,i,t){"use strict";(function(e){t.d(i,"a",(function(){return o}));var n=t(9),s=t.n(n),o=function(i){return s.a.join(e,"content","post",i+".jpg")}}).call(this,"/")},function(e,i,t){e.exports=t(80)},,,,,function(e,i,t){},function(e,i,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,i,t){},,,,,,,,,,,,,,,,,function(e,i,t){},function(e,i,t){},function(e,i,t){},,,,,,function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){"use strict";t.r(i);var n=t(0),s=t.n(n),o=t(28),a=t.n(o),r=(t(37),t(1)),d=t(6),c=t(8),u=(t(38),t(39),[{id:1,name:"Ivan Dnepropetrivisk",username:"dnepro",website:"",bio:"Shit!",email:"ivan@gmail.com",number:"0506596859",gender:!0},{id:2,name:"Romeo Korey",username:"koreyroameo",website:"romeokorey.net",bio:"Nice dick bro!",email:"korey@gmail.com",number:"0504596859",gender:!0},{id:3,name:"Sonia Gucci",username:"gucc",website:"gucci.com",bio:"eeiuhjegbvr!",email:"sonya@gmail.com",number:"0506546859",gender:!1},{id:4,name:"M7emmad",username:"7emmad",website:"5ara.net",bio:"okololol!",email:"7amad@gmail.com",number:"0506596856",gender:!0},{id:5,name:"Khadija Johnson",username:"5adej",website:"m7md.net",bio:"rgterhntrf",email:"lol@gmail.com",number:"0506595539",gender:!1}]),l=t(13),m=t.n(l),p=function(e){var i=null;return u.forEach((function(t){e===t.id&&(i=t.username)})),i},v=function(){return m.a.get("".concat("","/api/usersvalidation"))},_=function(e,i){return m.a.post("".concat("","/api/authenticate"),{email:e,password:i,withCredentials:!0})},w=function(e,i,t,n){return m.a.post("".concat("","/api/register"),{firstName:e,lastName:i,email:t,password:n,withCredentials:!0})},h=function(e){return m.a.get("".concat("","/api/loguser"),{headers:{token:e}})},g=[{id:1,post_id:1,user_id:1},{id:2,post_id:2,user_id:1},{id:3,post_id:3,user_id:1},{id:4,post_id:4,user_id:1},{id:5,post_id:5,user_id:1},{id:6,post_id:6,user_id:1},{id:7,post_id:5,user_id:2},{id:8,post_id:4,user_id:2},{id:9,post_id:4,user_id:3},{id:10,post_id:5,user_id:4},{id:11,post_id:1,user_id:5},{id:12,post_id:6,user_id:2}],f=function(e){var i=[];return g.forEach((function(t){t.user_id===e&&i.push(t.post_id)})),i},b=function(e,i){},k=function(e,i){},E=function(e){var i=0;return g.forEach((function(t){t.post_id===e&&i++})),i},y=[{id:1,post_id:1,user_id:1},{id:2,post_id:2,user_id:1},{id:3,post_id:3,user_id:1},{id:4,post_id:4,user_id:1},{id:5,post_id:5,user_id:1},{id:6,post_id:6,user_id:1},{id:7,post_id:5,user_id:2},{id:8,post_id:4,user_id:2},{id:9,post_id:4,user_id:3},{id:10,post_id:5,user_id:4},{id:11,post_id:1,user_id:5},{id:12,post_id:6,user_id:2}],C=function(e){var i=[];return y.forEach((function(t){t.user_id===e&&i.push(t.post_id)})),i},L=function(e,i){},x=function(e,i){},M=[{id:1,follower_id:1,user_id:1},{id:2,follower_id:2,user_id:1},{id:3,follower_id:3,user_id:1},{id:4,follower_id:4,user_id:1},{id:5,follower_id:5,user_id:1},{id:6,follower_id:6,user_id:1},{id:7,follower_id:5,user_id:2},{id:8,follower_id:4,user_id:2},{id:9,follower_id:4,user_id:3},{id:10,follower_id:5,user_id:4},{id:11,follower_id:1,user_id:5},{id:12,follower_id:6,user_id:2}],U=function(e){var i=[];return M.forEach((function(t){t.follower_id===e&&i.push(t.user_id)})),i},N=(t(56),[{id:1,user_id:1,views:42,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12},{id:1,user_id:1,views:4124512,caption:"Check out this meme!!"},{id:2,user_id:1,views:52345,caption:"Like and subscribe"},{id:3,user_id:2,views:2314},{id:4,user_id:3,views:1,caption:"lol posting more soon, stay tuned!\n        More on my other account:\n        @memehacker"},{id:5,user_id:4,views:1432,caption:"lmfao"},{id:6,user_id:5,views:12}]),S=function(e){var i=[];return N.forEach((function(t){e.forEach((function(e){t.user_id===e&&i.push(t)}))})),i},z=(t(57),t(9),t(11)),j="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z",F="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",I="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",B="M17.56 28C17.9 27.68 18.08 27.5 18.12 27.46C16.16 25.18 14.98 22.22 14.98 19C14.98 11.82 20.8 6 27.98 6C35.16 6 40.98 11.82 40.98 19C40.98 26.18 35.16 32 27.98 32C24.76 32 21.8 30.82 19.52 28.86C19.48 28.9 19.3 29.08 18.98 29.42L18.98 31L8.98 40.98L6 38L15.98 28L17.56 28ZM36.98 19C36.98 14.02 32.96 10 27.98 10C23 10 18.98 14.02 18.98 19C18.98 23.98 23 28 27.98 28C32.96 28 36.98 23.98 36.98 19Z",O="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",P="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z",R="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z",V="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",A="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",H="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",T="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",W="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",q="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z",D="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z",J=function(e){return s.a.createElement("div",{className:"navContainer"},s.a.createElement(d.b,{to:"/"},s.a.createElement("svg",{viewBox:"0 0 24 24",fill:"black",className:"navIcon"},s.a.createElement("path",{d:"/"===window.location.pathname?F:j}))),s.a.createElement(d.b,{to:"/search"},s.a.createElement("svg",{viewBox:"/search"===window.location.pathname?"0 0 48 48":"0 0 24 24",fill:"black",className:"navIcon"},s.a.createElement("path",{d:"/search"===window.location.pathname?B:I}))),s.a.createElement(d.b,{to:"/createpost"},s.a.createElement("svg",{viewBox:"0 0 24 24",fill:"black",className:"navIcon"},s.a.createElement("path",{d:"/createpost"===window.location.pathname?P:O}))),s.a.createElement(d.b,{to:"/activity"},s.a.createElement("svg",{viewBox:"0 0 24 24",fill:"black",className:"navIcon"},s.a.createElement("path",{d:"/activity"===window.location.pathname?V:R}))),s.a.createElement(d.b,{to:"/profile"},e.loggedUser?s.a.createElement(z.a,{user_id:e.loggedUser.id,size:.85}):s.a.createElement("svg",{viewBox:"0 0 24 24",fill:"black",className:"navIcon"},s.a.createElement("path",{d:"/profile"===window.location.pathname?H:A}))))},K=(t(64),t(65),t(31)),Z=function(e){var i=s.a.useState([]),t=Object(r.a)(i,2),n=t[0],o=t[1];return s.a.useEffect((function(){o(Object(K.a)(e.post_id))}),[e.post_id]),n?s.a.createElement("img",{src:n||null,alt:"content",className:"contentCanvas"}):s.a.createElement(s.a.Fragment,null)},G=(t(66),function(e){var i=s.a.useState(!1),t=Object(r.a)(i,2),n=t[0],o=t[1],a=s.a.useState(!1),d=Object(r.a)(a,2),c=d[0],u=d[1];s.a.useEffect((function(){e.loggedUser.likes.includes(e.post_id)&&o(!0),e.loggedUser.bookmarks.includes(e.post_id)&&u(!0)}),[e.loggedUser.bookmarks,e.loggedUser.likes,e.post_id]);return s.a.createElement("div",{className:"actionsContainer"},s.a.createElement("svg",{viewBox:"0 0 24 24",fill:n?"rgb(248, 96, 96)":"black",className:"actionIcon",onClick:function(){n?(o(!1),b(e.loggedUser.id,e.post_id)):(o(!0),k(e.loggedUser.id,e.post_id))}},s.a.createElement("path",{d:n?V:R})),s.a.createElement("svg",{viewBox:"0 0 24 24",fill:"black",className:"actionIcon shareIcon",onClick:function(){}},s.a.createElement("path",{d:W})),s.a.createElement("svg",{viewBox:"0 0 24 24",fill:"black",className:"actionIcon bookmarkIcon",onClick:function(){c?(u(!1),L(e.loggedUser.id,e.post_id)):(u(!0),x(e.loggedUser.id,e.post_id))}},s.a.createElement("path",{d:c?D:q})))}),Y=(t(67),function(e){var i=s.a.useState(null),t=Object(r.a)(i,2),n=t[0],o=t[1];return s.a.useEffect((function(){o(e.post.views.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))}),[e.post.views]),n&&s.a.createElement("span",{className:"textLabelBold unselectableText"},n+("1"!==n?" views":" view"))}),$=(t(68),function(e){var i=s.a.useState(null),t=Object(r.a)(i,2),n=t[0],o=t[1];return s.a.useEffect((function(){o(E(e.post.id).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))}),[e.post.id]),n&&s.a.createElement("span",{className:"textLabelBold unselectableText"},n+("1"!==n?" likes":" like"))}),Q=(t(69),[{id:1,post_id:1,user_id:1,text:"Yessir!"},{id:2,post_id:2,user_id:1,text:"Nosir!"},{id:3,post_id:3,user_id:1,text:"haha nice image lol xd"},{id:4,post_id:4,user_id:1,text:"nice dog dm me ;)."},{id:5,post_id:5,user_id:1,text:"xd xd xd"},{id:6,post_id:6,user_id:1,text:"random comment xd"},{id:7,post_id:5,user_id:2,text:"fredfgesbw"},{id:8,post_id:4,user_id:2,text:"im a camgirl come"},{id:9,post_id:4,user_id:3,text:"edfedrhug"},{id:10,post_id:5,user_id:4,text:"yea man"},{id:11,post_id:1,user_id:5,text:"great dogs"},{id:12,post_id:6,user_id:2,text:"xd xd lol"}]),X=function(e){var i=[];return Q.forEach((function(t){t.post_id===e&&i.push(t)})),i},ee=function(e,i,t){},ie=(t(70),function(e){return s.a.createElement("div",{className:"postComment"},s.a.createElement(z.a,{loggedUser:e.loggedUser,size:.9,user_id:e.loggedUser.id}),s.a.createElement("input",{type:"text",id:"commentTextBox"+e.post_id,className:"commentTextBox",placeholder:"Add a comment...",autocomplete:"off",onChange:function(i){var t=document.getElementById("postButton"+e.post_id);""===i.target.value?t.classList.add("textLabelBlueFaded"):t.classList.remove("textLabelBlueFaded")},onSubmit:function(e){return e.preventDefault()}}),s.a.createElement("span",{id:"postButton"+e.post_id,className:"textLabelBlue textLabelBlueFaded",onClick:function(i){var t=document.getElementById("commentTextBox"+e.post_id);""!==t.value&&t.value&&(ee(e.loggedUser.id,e.post_id,t.value),t.value="",i.target.classList.add("textLabelBlueFaded"))}},"Post"))}),te=function(e){var i=s.a.useState(null),t=Object(r.a)(i,2),n=t[0],o=t[1];return s.a.useEffect((function(){o(X(e.post_id))}),[e.post_id]),n?s.a.createElement(s.a.Fragment,null,s.a.createElement(d.b,{className:"commentsLink",to:{pathname:"/comments",state:{comments:n}}},s.a.createElement("span",{className:"textLabelFaded unselectableText"},1===n.length?"View comment":"View all "+n.length+" comments")),s.a.createElement(ie,{loggedUser:e.loggedUser,post_id:e.post_id})):s.a.createElement(s.a.Fragment,null)},ne=(t(71),function(e){return s.a.createElement("div",{className:"commentContainer"},s.a.createElement("span",{className:"textLabelBold"},e.username)," ",s.a.createElement("span",{className:"textLabel"},e.text))}),se=function(e){var i=s.a.useState(null),t=Object(r.a)(i,2),n=t[0],o=t[1];return s.a.useEffect((function(){o(p(e.post.user_id))}),[e.post.user_id]),s.a.createElement("div",{className:"postContainer"},s.a.createElement("div",{className:"postHeader"},s.a.createElement("div",{className:"userInfo"},s.a.createElement(z.a,{user_id:e.post.user_id,size:1}),n?s.a.createElement("span",{className:"username"},n):s.a.createElement(s.a.Fragment,null)),s.a.createElement("svg",{viewBox:"0 0 24 24",fill:"black",className:"menuIcon"},s.a.createElement("path",{d:T}))),s.a.createElement("hr",{className:"lineSeparator"}),s.a.createElement(Z,{post_id:e.post.id,loggedUser:e.loggedUser}),s.a.createElement("div",{className:"utilsContainer"},s.a.createElement(G,{post_id:e.post.id,loggedUser:e.loggedUser}),s.a.createElement(Y,{post:e.post,loggedUser:e.loggedUser}),s.a.createElement($,{post:e.post,loggedUser:e.loggedUser}),e.post.caption?s.a.createElement(ne,{user_id:e.post.user_id,username:n,text:e.post.caption,loggedUser:e.loggedUser}):s.a.createElement(s.a.Fragment,null),s.a.createElement(te,{post_id:e.post.id,loggedUser:e.loggedUser})))},oe=function(e){var i=s.a.useState([]),t=Object(r.a)(i,2),n=t[0],o=t[1];return s.a.useEffect((function(){e.loggedUser?o(S(e.loggedUser.follows)):localStorage.getItem("auth")||(window.location.href="/login")}),[e.loggedUser]),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"feedContainer"},n.slice(0,10).map((function(i){return s.a.createElement(se,{key:i.id,post:i,loggedUser:e.loggedUser})}))),s.a.createElement(J,{loggedUser:e.loggedUser}))},ae=(t(72),function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("span",null,"Component!"),s.a.createElement(J,{loggedUser:e.loggedUser}))}),re=(t(73),function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("span",null,"Component!"))}),de=(t(74),function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("span",null,"Component!"),s.a.createElement(J,{loggedUser:e.loggedUser}))}),ce=(t(75),function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("span",null,"Component!"),s.a.createElement(J,{loggedUser:e.loggedUser}))}),ue=(t(76),function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("span",null,"Component!"),s.a.createElement(J,{loggedUser:e.loggedUser}))}),le=(t(77),function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("span",null,"Component!"))}),me=(t(78),function(e){var i=Object(c.f)();return s.a.createElement("span",null,i.state.comments[0].text)}),pe=function(e){var i=s.a.useState(null),t=Object(r.a)(i,2),n=t[0],o=t[1];s.a.useEffect((function(){v().then((function(e){var i={};Object.keys(e.data).forEach((function(t){return i[t]=new RegExp(e.data[t].split("/")[1],e.data[t].split("/")[2])})),o(i)}))}),[]);return s.a.createElement(s.a.Fragment,null,s.a.createElement("form",{className:"inputForm",onSubmit:function(e){e.preventDefault();var i=document.querySelector("#registerFirstName"),t=document.querySelector("#registerLastName"),s=document.querySelector("#registerEmail"),o=document.querySelector("#registerPassword"),a=document.querySelector("#registerConfirmPassword");n&&(n.firstName.test(i.value)&&n.lastName.test(t.value)&&n.email.test(s.value)&&n.password.test(o.value)&&o.value===a.value?w(i.value,t.value,s.value,o.value).then((function(e){"fail"===e.data?alert("Registration failed"):(localStorage.setItem("auth",e.data),alert("Registered successfully"),window.location.href="/")})).catch((function(e){alert("Registration failed")})):alert("Client-Side Validation: Check the fields"))}},s.a.createElement("input",{className:"singleInputField",id:"registerFirstName",type:"text",placeholder:"First Name"}),s.a.createElement("input",{className:"singleInputField",id:"registerLastName",type:"text",placeholder:"Last Name"}),s.a.createElement("input",{className:"singleInputField",id:"registerEmail",type:"email",placeholder:"Email"}),s.a.createElement("input",{className:"singleInputField",id:"registerPassword",type:"password",placeholder:"Password"}),s.a.createElement("input",{className:"singleInputField",id:"registerConfirmPassword",type:"password",placeholder:"Confirm Password"}),s.a.createElement("input",{type:"submit",value:"Register"})))},ve=(t(79),function(e){return s.a.createElement("form",{className:"inputForm",onSubmit:function(e){e.preventDefault();var i=document.querySelector("#loginEmail"),t=document.querySelector("#loginPassword");i.value&&t.value&&_(i.value,t.value).then((function(e){localStorage.setItem("auth",e.data),alert("Successfully logged in."),window.location.href="/"})).catch((function(e){alert("Credentials do not match.")}))}},s.a.createElement("input",{className:"singleInputField",id:"loginEmail",type:"Email",placeholder:"Email"}),s.a.createElement("input",{className:"singleInputField",id:"loginPassword",type:"Password",placeholder:"Password"}),s.a.createElement("input",{type:"submit",value:"Login"}))}),_e=function(e){var i=s.a.useState(null),t=Object(r.a)(i,2),n=t[0],o=t[1];return s.a.useEffect((function(){localStorage.getItem("auth")?h(localStorage.getItem("auth")).then((function(e){var i=e.data;i.likes=f(i.id),i.bookmarks=C(i.id),i.follows=U(i.id),o(i)})):o(null)}),[]),s.a.createElement("div",{className:"App"},s.a.createElement(d.a,null,s.a.createElement(c.c,{className:"App"},s.a.createElement(c.a,{exact:!0,path:"/",render:function(){return s.a.createElement(oe,Object.assign({},e,{loggedUser:n}))}}),s.a.createElement(c.a,{path:"/register",component:function(){return s.a.createElement(pe,{loggedUser:n})}}),s.a.createElement(c.a,{path:"/login",component:function(){return s.a.createElement(ve,{loggedUser:n})}}),s.a.createElement(c.a,{path:"/search",component:function(){return s.a.createElement(ae,Object.assign({},e,{loggedUser:n}))}}),s.a.createElement(c.a,{path:"/createpost",component:function(){return s.a.createElement(de,Object.assign({},e,{loggedUser:n}))}}),s.a.createElement(c.a,{path:"/activity",component:function(){return s.a.createElement(ce,Object.assign({},e,{loggedUser:n}))}}),s.a.createElement(c.a,{path:"/profile",component:function(){return s.a.createElement(ue,Object.assign({},e,{loggedUser:n}))}}),s.a.createElement(c.a,{path:"/edit-profile",component:function(){return s.a.createElement(le,Object.assign({},e,{loggedUser:n}))}}),s.a.createElement(c.a,{path:"/comments",component:function(){return s.a.createElement(me,Object.assign({},e,{loggedUser:n}))}}),s.a.createElement(c.a,{path:"/post/:id",component:function(){return s.a.createElement(re,Object.assign({},e,{loggedUser:n}))}}))))},we=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function he(e,i){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),i&&i.onUpdate&&i.onUpdate(e)):(console.log("Content is cached for offline use."),i&&i.onSuccess&&i.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(_e,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var i="".concat("","/service-worker.js");we?(!function(e,i){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):he(e,i)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(i,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):he(i,e)}))}}()}],[[32,1,2]]]);
//# sourceMappingURL=main.c94c1973.chunk.js.map