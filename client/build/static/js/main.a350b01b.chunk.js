(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{1:function(e,t,a){e.exports={wrapper:"game_store_wrapper__aKhyn",game_page_wrapper:"game_store_game_page_wrapper__247qZ",logo:"game_store_logo__2wk_c",game_page_logo:"game_store_game_page_logo__3mdDN",button:"game_store_button__2845F",post_button:"game_store_post_button__F-cU0",content_button:"game_store_content_button__2kt0r",Link:"game_store_Link__30cfI",sidebar:"game_store_sidebar__1LyvX",sidebar_links:"game_store_sidebar_links__chLhF",main_content:"game_store_main_content__2J9-n",description_content:"game_store_description_content__2aREC",thumbnail:"game_store_thumbnail__39ikr",game_section:"game_store_game_section__1OlyM",left_section:"game_store_left_section__1cpfZ",right_section:"game_store_right_section__3W4Zt",game_page_thumbnail:"game_store_game_page_thumbnail__2rvtE",recommended_content:"game_store_recommended_content__3uMCm"}},23:function(e,t,a){e.exports=a(53)},28:function(e,t,a){},29:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),m=(a(28),a(29),a(2)),u=a(3),o=a(5),i=a.n(o),s=a(1),E=a.n(s),b=a(6),g=a.n(b),_=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),o=Object(u.a)(c,2),s=o[0],b=o[1],_=Object(n.useState)([]),p=Object(u.a)(_,2),d=p[0],f=p[1],h=Object(n.useState)(""),v=Object(u.a)(h,2),O=v[0],j=v[1],S=Object(n.useState)(!0),k=Object(u.a)(S,2),C=k[0],N=k[1],y=Object(n.useState)(!1),w=Object(u.a)(y,2),x=w[0],G=w[1],L=Object(n.useState)(!1),A=Object(u.a)(L,2),P=A[0],R=A[1],F=Object(n.useState)(!1),D=Object(u.a)(F,2),U=D[0],I=D[1],M=Object(n.useState)("All Games"),W=Object(u.a)(M,2),X=W[0],T=W[1],$=Object(n.useState)("User"),J=Object(u.a)($,2),Z=J[0],B=J[1];Object(n.useEffect)((function(){i.a.get("http://localhost:8000/api/games").then((function(e){r(e.data),b(e.data)})).catch((function(e){return console.log(e)}))}),[]);var H=function(e){T(e),I(!0),N(!1),G(!1),R(!1),r(s.filter((function(t){return t.genre===e})))};return l.a.createElement("div",{className:E.a.wrapper},l.a.createElement(m.a,{to:"/"},l.a.createElement("img",{className:E.a.logo,src:g.a,alt:"GameStore Logo"})),l.a.createElement("h1",{style:{paddingRight:"300px"}},X),l.a.createElement("input",{style:{marginLeft:"140px"},onChange:function(e){return j((t=e).target.value),void f(s.filter((function(e){return function(e,t){if(e.length>0){for(var a=0;a<e.length;a++)if(e[a].toLowerCase()!==t[a].toLowerCase())return!1;return!0}return!1}(t.target.value,e.title)})));var t},type:"text",placeholder:"Find games"}),l.a.createElement("button",{className:E.a.button,onClick:function(){var e=null;s.map((function(t){O.toLowerCase()!==t.title.toLowerCase()||(e=t)})),null!==e&&Object(m.c)("/game/"+e._id)}},"Search"),l.a.createElement("label",null,"User Type: "),l.a.createElement("select",{onChange:function(e){return B(e.target.value)},value:Z},l.a.createElement("option",{value:"User"},"User"),l.a.createElement("option",{value:"Admin"},"Admin")),l.a.createElement("br",null),l.a.createElement("br",null),d.length>0?d.map((function(e,t){return l.a.createElement(m.a,{className:E.a.Link,key:t,to:"/game/"+e._id},e.title," ",l.a.createElement("img",{style:{height:"50px",width:"50px"},src:e.image_url,alt:e.title}))})):"",l.a.createElement("div",{className:E.a.sidebar},l.a.createElement("h3",null,"Genre"),l.a.createElement(m.a,{className:E.a.sidebar_links,onClick:function(){return T("All Games"),I(!1),N(!0),G(!1),R(!1),void r(s)},to:"/"},"All Games"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(m.a,{className:E.a.sidebar_links,onClick:function(){return H("Action Adventure")},to:"/"},"Action Adventure"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(m.a,{className:E.a.sidebar_links,onClick:function(){return H("First Person Shooter")},to:"/"},"First Person Shooter (FPS)"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(m.a,{className:E.a.sidebar_links,onClick:function(){return H("Survival Horror")},to:"/"},"Survival Horror"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(m.a,{className:E.a.sidebar_links,onClick:function(){return H("Fighting")},to:"/"},"Fighting"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(m.a,{className:E.a.sidebar_links,onClick:function(){return H("Racing")},to:"/"},"Racing"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(m.a,{className:E.a.sidebar_links,onClick:function(){return H("Sports")},to:"/"},"Sports"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(m.a,{className:E.a.sidebar_links,onClick:function(){return H("Strategy")},to:"/"},"Strategy"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(m.a,{className:E.a.sidebar_links,onClick:function(){return H("Role Playing Game (RPG)")},to:"/"},"Role Playing Game (RPG)"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(m.a,{className:E.a.sidebar_links,onClick:function(){return H("Simulation")},to:"/"},"Simulation"),l.a.createElement("br",null)),l.a.createElement("div",{className:E.a.main_content},C?a.map((function(e,t){return t<8?l.a.createElement("div",{key:t},l.a.createElement(m.a,{to:"/game/"+e._id},l.a.createElement("img",{className:E.a.thumbnail,src:e.image_url,alt:e.title})),"Admin"===Z?l.a.createElement(l.a.Fragment,null," ",l.a.createElement("br",null),l.a.createElement("button",{className:E.a.content_button,onClick:function(){return Object(m.c)("/game/"+e._id+"/edit")}},"Edit"),l.a.createElement("br",null),l.a.createElement("br",null)):""):""})):"",x?a.map((function(e,t){return t>=8&&t<16?l.a.createElement("div",{key:t},l.a.createElement(m.a,{to:"/game/"+e._id},l.a.createElement("img",{className:E.a.thumbnail,src:e.image_url,alt:e.title})),"Admin"===Z?l.a.createElement(l.a.Fragment,null," ",l.a.createElement("br",null),l.a.createElement("button",{className:E.a.content_button,onClick:function(){return Object(m.c)("/game/"+e._id+"/edit")}},"Edit"),l.a.createElement("br",null),l.a.createElement("br",null)):""):""})):"",P?a.map((function(e,t){return t>=16?l.a.createElement("div",{key:t},l.a.createElement(m.a,{to:"/game/"+e._id},l.a.createElement("img",{className:E.a.thumbnail,src:e.image_url,alt:e.title})),"Admin"===Z?l.a.createElement(l.a.Fragment,null," ",l.a.createElement("br",null),l.a.createElement("button",{className:E.a.content_button,onClick:function(){return Object(m.c)("/game/"+e._id+"/edit")}},"Edit"),l.a.createElement("br",null),l.a.createElement("br",null)):""):""})):"",U?a.map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement(m.a,{to:"/game/"+e._id},l.a.createElement("img",{className:E.a.thumbnail,src:e.image_url,alt:e.title})),"Admin"===Z?l.a.createElement(l.a.Fragment,null," ",l.a.createElement("br",null),l.a.createElement("button",{className:E.a.content_button,onClick:function(){return t=e._id,void i.a.delete("http://localhost:8000/api/game/"+t).then((function(){r(a.filter((function(e){return e._id!==t}))),b(s.filter((function(e){return e._id!==t})))})).catch((function(e){return console.log(e)}));var t}},"Delete")," "," | ",l.a.createElement("button",{className:E.a.content_button,onClick:function(){return Object(m.c)("/game/"+e._id+"/edit")}},"Edit"),l.a.createElement("br",null),l.a.createElement("br",null)):"")})):""),"All Games"===X?l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{onClick:function(){N(!0),G(!1),R(!1),I(!1)},to:"/"},"1")," "," | ",l.a.createElement(m.a,{onClick:function(){G(!0),N(!1),R(!1),I(!1)},to:"/"},"2")," "," | ",l.a.createElement(m.a,{onClick:function(){R(!0),N(!1),G(!1),I(!1)},to:"/"},"3")):"",l.a.createElement("h6",null,"Created by Vardges Gharibyan"))},p=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(u.a)(c,2),s=o[0],b=o[1],_=Object(n.useState)(""),p=Object(u.a)(_,2),d=p[0],f=p[1],h=Object(n.useState)(""),v=Object(u.a)(h,2),O=v[0],j=v[1],S=Object(n.useState)(""),k=Object(u.a)(S,2),C=k[0],N=k[1],y=Object(n.useState)(""),w=Object(u.a)(y,2),x=w[0],G=w[1],L=Object(n.useState)([]),A=Object(u.a)(L,2),P=A[0],R=A[1];return l.a.createElement("div",{className:E.a.wrapper},l.a.createElement(m.a,{to:"/"},l.a.createElement("img",{className:E.a.logo,src:g.a,alt:"GameStore Logo"})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h1",null,"Create Game"),P.map((function(e,t){return l.a.createElement("p",{key:t,style:{color:"red"}},e)})),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),R([]),i.a.post("http://localhost:8000/api/game",{title:a,genre:s,price:d,description:O,image_url:C,image_url2:x}).then((function(){return Object(m.c)("/")})).catch((function(e){var t=[];console.log(e.response.data.errors);var a=e.response.data.errors;for(var n in a)t.push(a[n].properties.message);R(t)}))}},l.a.createElement("p",null,l.a.createElement("label",null,"Title: "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",value:a,onChange:function(e){return r(e.target.value)}})),l.a.createElement("p",null,l.a.createElement("label",null,"Genre: "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",value:s,onChange:function(e){return b(e.target.value)}})),l.a.createElement("p",null,l.a.createElement("label",null,"Price: "),l.a.createElement("br",null),"$",l.a.createElement("input",{type:"text",value:d,onChange:function(e){return f(e.target.value)}})),l.a.createElement("p",null,l.a.createElement("label",null,"Description: "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",value:O,onChange:function(e){return j(e.target.value)}})),l.a.createElement("p",null,l.a.createElement("label",null,"Image URL (PS4): "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",value:C,onChange:function(e){return N(e.target.value)}})),l.a.createElement("p",null,l.a.createElement("label",null,"Image URL (Xbox One): "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",value:x,onChange:function(e){return G(e.target.value)}})),l.a.createElement("button",{className:E.a.content_button},"Add Game")))},d=a(22),f=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)("PlayStation 4"),s=Object(u.a)(o,2),b=s[0],_=s[1],p=Object(n.useState)([]),f=Object(u.a)(p,2),h=f[0],v=f[1],O=Object(n.useState)(""),j=Object(u.a)(O,2),S=j[0],k=j[1],C=Object(n.useState)([]),N=Object(u.a)(C,2),y=N[0],w=N[1];return Object(n.useEffect)((function(){i.a.get("http://localhost:8000/api/game/"+e.id).then((function(e){return c(e.data)}))}),[e.id]),Object(n.useEffect)((function(){i.a.get("http://localhost:8000/api/games").then((function(e){return v(e.data)}))}),[]),l.a.createElement("div",{className:E.a.game_page_wrapper},l.a.createElement(m.a,{to:"/"},l.a.createElement("img",{className:E.a.game_page_logo,src:g.a,alt:"GameStore Logo"})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:E.a.game_section},l.a.createElement("div",{className:E.a.left_section},l.a.createElement("img",{className:E.a.game_page_thumbnail,src:"PlayStation 4"===b?r.image_url:r.image_url2,alt:r.title}),l.a.createElement("br",null)),l.a.createElement("div",{className:E.a.right_section},l.a.createElement("h1",null,r.title),l.a.createElement("h2",null,l.a.createElement("label",null,"Platform: "),l.a.createElement("br",null),l.a.createElement("select",{onChange:function(e){return _(e.target.value)},name:"platform",value:b},l.a.createElement("option",{value:"PlayStation 4"},"PlayStation 4"),l.a.createElement("option",{value:"Xbox One"},"Xbox One")),l.a.createElement("br",null)),l.a.createElement("h2",null,r.genre),l.a.createElement("p",null,"$",r.price))),l.a.createElement("div",{className:E.a.description_content},l.a.createElement("h2",null,"DETAILS"),l.a.createElement("p",null,r.description)),l.a.createElement("h2",null,"RECOMMENDED GAMES"),l.a.createElement("div",{className:E.a.recommended_content},h.map((function(e,t){return r.title!==e.title&&r.genre===e.genre?l.a.createElement("div",{key:t},l.a.createElement(m.a,{to:"/game/"+e._id},l.a.createElement("img",{className:E.a.thumbnail,src:e.image_url,alt:e.title}))):""}))),l.a.createElement("h2",null,"REVIEWS"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),w([].concat(Object(d.a)(y),[S]))}},l.a.createElement("label",null,"Write a Review"),l.a.createElement("br",null),l.a.createElement("textarea",{onChange:function(e){return k(e.target.value)},name:"review",id:"",cols:"143",rows:"5"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{className:E.a.post_button},"Post Review"),l.a.createElement("br",null),l.a.createElement("br",null)),y.map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("h3",null,"Review #",t+1),l.a.createElement("p",null,e))})))},h=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(""),s=Object(u.a)(o,2),b=s[0],_=s[1],p=Object(n.useState)(""),d=Object(u.a)(p,2),f=d[0],h=d[1],v=Object(n.useState)(""),O=Object(u.a)(v,2),j=O[0],S=O[1],k=Object(n.useState)(""),C=Object(u.a)(k,2),N=C[0],y=C[1],w=Object(n.useState)(""),x=Object(u.a)(w,2),G=x[0],L=x[1],A=Object(n.useState)([]),P=Object(u.a)(A,2),R=P[0],F=P[1];Object(n.useEffect)((function(){i.a.get("http://localhost:8000/api/game/"+e.id).then((function(e){c(e.data.title),_(e.data.genre),h(e.data.price),S(e.data.description),y(e.data.image_url),L(e.data.image_url2)}))}),[e.id]);return l.a.createElement("div",{className:E.a.wrapper},l.a.createElement(m.a,{to:"/"},l.a.createElement("img",{className:E.a.logo,src:g.a,alt:"GameStore Logo"})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h1",null,"Edit Game"),R.map((function(e,t){return l.a.createElement("p",{key:t,style:{color:"red"}},e)})),l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),F([]),i.a.put("http://localhost:8000/api/game/"+e.id,{title:r,genre:b,price:f,description:j,image_url:N,image_url2:G}).then((function(){return Object(m.c)("/")})).catch((function(e){var t=[],a=e.response.data.errors;for(var n in a)t.push(a[n].message);F(t)}))}},l.a.createElement("p",null,l.a.createElement("label",null,"Title: "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",value:r,onChange:function(e){return c(e.target.value)}})),l.a.createElement("p",null,l.a.createElement("label",null,"Genre: "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",value:b,onChange:function(e){return _(e.target.value)}})),l.a.createElement("p",null,l.a.createElement("label",null,"Price: "),l.a.createElement("br",null),"$",l.a.createElement("input",{type:"text",value:f,onChange:function(e){return h(e.target.value)}})),l.a.createElement("p",null,l.a.createElement("label",null,"Description: "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",value:j,onChange:function(e){return S(e.target.value)}})),l.a.createElement("p",null,l.a.createElement("label",null,"Image URL (PS4): "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",value:N,onChange:function(e){return y(e.target.value)}})),l.a.createElement("p",null,l.a.createElement("label",null,"Image URL (Xbox One): "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",value:G,onChange:function(e){return L(e.target.value)}})),l.a.createElement("button",{className:E.a.content_button},"Update Game")))};var v=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(m.b,null,l.a.createElement(_,{path:"/"}),l.a.createElement(p,{path:"/game/new"}),l.a.createElement(f,{path:"/game/:id"}),l.a.createElement(h,{path:"/game/:id/edit"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a.p+"static/media/GameStoreLogo.50c94bac.jpg"}},[[23,1,2]]]);
//# sourceMappingURL=main.a350b01b.chunk.js.map