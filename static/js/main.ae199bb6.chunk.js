(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{115:function(e,a,t){},116:function(e,a,t){},117:function(e,a,t){"use strict";t.r(a);var r=t(12),c=t.n(r),n=t(0),A=t.n(n),i=t(11),s=t(90),o=t(167),l=t(121),d=t(42),m=t(15),g=t(147),j=t(6),u=t(156),b=t(119),h=t(168),p=t(157),C=t(120),I=t(19),O=t(61),x=t.n(O),f=t(149),B=t(151),y=t(152),v=t(153),w=t(154),S=t(155),N="CREATE_FILTER",E="CREATE_PRICE_FILTER",k="CREATE_NAME_PATTERN",Q="ADD_TO_BASKET",D="DELETE_FROM_BASKET",H="CHANGE_CARD_COUNT",R=function(e){return{type:k,payload:e}},W=function(e){return{type:N,payload:e}},P=function(e){return{type:E,payload:e}},G=function(e){return{type:Q,payload:e}},T=function(e){return{type:D,payload:e}},L=function(e){return{type:H,payload:e}},Y=t(1),Z=Object(g.a)({h3:{margin:0},summ:{backgroundColor:"#fdfdd5"}},{name:"BasketList"});function U(){var e=Z(),a=Object(I.c)((function(e){return e.basket.basket})),t=Object(I.b)();return a.length?Object(Y.jsxs)(f.a,{children:[a.map((function(e,r){return Object(Y.jsxs)(B.a,{children:[Object(Y.jsx)(y.a,{primary:e.card.name,secondary:"".concat(e.card.price,"$ x ").concat(e.count)}),Object(Y.jsxs)(v.a,{children:[Object(Y.jsx)(b.a,{edge:"end","aria-label":"comments",onClick:function(){var e;1!==a[e=r].count?t(L([e,-1])):t(T(e))},children:Object(Y.jsx)(w.a,{})}),Object(Y.jsx)(b.a,{edge:"end","aria-label":"comments",onClick:function(){t(L([r,1]))},children:Object(Y.jsx)(S.a,{})})]})]},e.card.id)})),Object(Y.jsx)(B.a,{className:e.summ,children:Object(Y.jsx)(y.a,{primary:"Itog:",secondary:"".concat(a.reduce((function(e,a){return e+a.count*a.card.price}),0)," $")})})]}):Object(Y.jsx)("h3",{className:e.h3,children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"})}var M=Object(j.a)((function(e){return{badge:{right:-3,top:13,border:"2px solid ".concat(e.palette.background.paper),padding:"0 4px"}}}))(u.a),z=Object(g.a)((function(e){return{badge:{right:-3,top:13,border:"2px solid ".concat(e.palette.background.paper),padding:"0 4px"},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),width:"50%"},shoppingCart:{fontSize:35},basketWrapper:{margin:"0 10px"}}}));function X(){var e=Object(I.c)((function(e){return e.basket.basket})),a=z(),t=A.a.useState(!1),r=Object(i.a)(t,2),c=r[0],n=r[1];return Object(Y.jsxs)("div",{className:a.basketWrapper,children:[Object(Y.jsx)(b.a,{"aria-label":"cart",onClick:function(){n(!0)},children:Object(Y.jsx)(M,{badgeContent:e.length||null,color:"secondary",children:Object(Y.jsx)(x.a,{className:a.shoppingCart})})}),Object(Y.jsx)(h.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:a.modal,open:c,onClose:function(){n(!1)},closeAfterTransition:!0,BackdropComponent:p.a,BackdropProps:{timeout:500},children:Object(Y.jsx)(C.a,{in:c,children:Object(Y.jsxs)("div",{className:a.paper,children:[Object(Y.jsx)("h2",{id:"transition-modal-title",children:"Basket"}),Object(Y.jsx)(U,{})]})})})]})}var F=t(171),V=t(86),J=t.n(V),q=Object(g.a)({root:{padding:"2px 4px",display:"flex",alignItems:"center",width:"40%",height:35},input:{marginLeft:10,flex:1},iconButton:{padding:10}},{name:"Search"});function K(){var e=q(),a=Object(n.useState)(""),t=Object(i.a)(a,2),r=t[0],c=t[1],A=Object(I.b)();var s=_((function(e){c(e.target.value)}));return Object(n.useEffect)((function(){A(R(r))}),[r]),Object(Y.jsxs)(l.a,{className:e.root,children:[Object(Y.jsx)(F.a,{className:e.input,placeholder:"Search",svalue:r,onChange:s}),Object(Y.jsx)(b.a,{type:"submit",className:e.iconButton,"aria-label":"search",disabled:!0,children:Object(Y.jsx)(J.a,{})})]})}var _=function(e){var a;return function(){var t=arguments,r=this,c=function(){e.apply(r,t)};clearTimeout(a),a=setTimeout(c,300)}},$=t.p+"static/media/harvest.6aaf6395.svg",ee=t(159),ae=t(50),te=t(160),re=t(172),ce=t(71),ne=t.n(ce),Ae=t(87),ie=t.n(Ae),se=t(158);function oe(e){var a=e.onChange,t=Object(n.useState)(!1),r=Object(i.a)(t,2),c=r[0],A=r[1];return Object(Y.jsx)("div",{children:Object(Y.jsx)(se.a,{checked:c,onChange:function(){a(),A(!c)},name:"checkedA",inputProps:{"aria-label":"secondary checkbox"}})})}var le=Object(g.a)({list:{width:250},switcher:{textAlign:"center"},buttonMenu:{height:35},li:{position:"relative"},link:{textDecoration:"none",width:"100%",position:"absolute",textAlign:"center"}},{name:"Menu"});function de(e){var a=e.onClick,t=le(),r=A.a.useState(!1),c=Object(i.a)(r,2),n=c[0],s=c[1],o=function(e){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&s(e)}},l=[{path:"/profile",name:"Profile",icon:"personIcon"},{path:"/",name:"Home",icon:"home"},{path:"/basket",name:"Basket",icon:"shoppingCart"},{path:"/Table",name:"Table",icon:""},{path:"/Task1",name:"Task1",icon:""}],m=function(e){switch(e){case"personIcon":return Object(Y.jsx)(ne.a,{fontSize:"small"});case"home":return Object(Y.jsx)(ie.a,{fontSize:"small"});case"shoppingCart":return Object(Y.jsx)(x.a,{fontSize:"small"});default:return Object(Y.jsx)(ne.a,{fontSize:"small"})}};return Object(Y.jsxs)("div",{children:[Object(Y.jsx)(te.a,{className:t.buttonMenu,"aria-controls":"customized-menu","aria-haspopup":"true",variant:"contained",color:"primary",onClick:o(!0),children:"Open Menu"}),Object(Y.jsxs)(re.a,{anchor:"right",open:n,onClose:o(!1),children:[Object(Y.jsx)("div",{className:t.list,role:"presentation",onClick:o(!1),onKeyDown:o(!1),children:Object(Y.jsx)(f.a,{children:l.map((function(e){return Object(Y.jsxs)(B.a,{className:t.li,button:!0,children:[Object(Y.jsx)(ee.a,{children:m(e.icon)}),Object(Y.jsx)(d.b,{className:t.link,to:e.path,color:"primary",children:Object(Y.jsx)(ae.a,{color:"textPrimary",children:e.name})})]},e.name)}))})}),Object(Y.jsx)("div",{className:t.switcher,children:Object(Y.jsx)(oe,{onChange:a})})]})]})}var me=Object(g.a)({header:{background:"linear-gradient(90deg, rgba(241,255,246,1) 0%, rgba(104,233,149,1) 30%, rgba(6,198,60,1) 100%)",height:110},headerWrapper:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"90%",height:"100%",margin:"0 auto"},logo:{width:80},menuPlusBasket:{display:"flex",alignItems:"center"}},{name:"Header"});function ge(e){var a=e.onClick,t=me();return Object(Y.jsx)("div",{className:t.header,children:Object(Y.jsxs)("div",{className:t.headerWrapper,children:[Object(Y.jsx)(d.b,{to:"/",children:Object(Y.jsx)("img",{className:t.logo,src:$})}),Object(Y.jsx)(K,{}),Object(Y.jsxs)("div",{className:t.menuPlusBasket,children:[Object(Y.jsx)(X,{}),Object(Y.jsx)(de,{onClick:a})]})]})})}var je=t(17),ue=t(161),be=t(162),he=t(170),pe=t(163),Ce=Object(g.a)({root:{minWidth:275,maxWidth:300,marginBottom:20,marginRight:"20px"},pos:{marginBottom:12}},{name:"SimpleCard"}),Ie=A.a.memo((function(e){var a=e.card,t=e.indexInBasket,r=Ce(),c=Object(I.b)();return Object(Y.jsxs)(ue.a,{className:r.root,variant:"outlined",children:[Object(Y.jsxs)(be.a,{children:[Object(Y.jsx)(he.a,{checked:-1!==t,onChange:function(){c(-1===t?G({card:a,count:1}):T(t))},color:"primary",inputProps:{"aria-label":"primary checkbox"}}),Object(Y.jsx)(ae.a,{variant:"h5",component:"h2",children:a.name}),Object(Y.jsx)(ae.a,{className:r.pos,color:"textSecondary",children:"".concat(a.price," $ ")}),Object(Y.jsx)(ae.a,{variant:"body2",component:"p",children:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c: ".concat(a.maker)})]}),Object(Y.jsx)(pe.a,{children:Object(Y.jsx)(te.a,{size:"small",children:"Learn More"})})]})})),Oe=Object(g.a)({shopContent:{margin:"0 auto",width:"70%"},cards:{margin:"0 auto",display:"flex",flexWrap:"wrap",justifyContent:"flex-start"}},{name:"ShopContent"});function xe(e){var a=e.data,t=Object(I.c)((function(e){return e.basket.basket})),r=Object(I.c)((function(e){return e.filter})),c=Oe(),n=Object(je.a)(a).filter((function(e){return function(e){return e.category===r.category||"All"===r.category}(e)&&function(e){return e.price>=r.minPrice&&e.price<=r.maxPrice||null===r.maxPrice}(e)&&function(e){return e.name.toLowerCase().includes(r.namePattern.toLowerCase())}(e)}));return n.length?Object(Y.jsx)("div",{className:c.shopContent,children:Object(Y.jsx)("div",{className:c.cards,children:n.map((function(e){return Object(Y.jsx)(Ie,{card:e,indexInBasket:(a=e.id,t.findIndex((function(e){return e.card.id===a})))},e.id);var a}))})}):Object(Y.jsx)("h3",{className:c.shopContent,children:"\u0422\u043e\u0432\u0430\u0440\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"})}var fe=t(3),Be=t.n(fe),ye=t(164),ve=t(165),we=t(173),Se=t(166),Ne=t(169);function Ee(e){var a=e.data,t=Object(I.b)(),r=Object(je.a)(new Set(a.map((function(e){return e.category})))),c=A.a.useState("All"),n=Object(i.a)(c,2),s=n[0],o=n[1];return Object(Y.jsxs)(ye.a,{component:"fieldset",children:[Object(Y.jsx)(ve.a,{component:"legend",children:"Select Category"}),Object(Y.jsxs)(we.a,{"aria-label":"category",name:"category1",value:s,onChange:function(e){o(e.target.value),t(W(e.target.value))},children:[Object(Y.jsx)(Se.a,{value:"All",control:Object(Y.jsx)(Ne.a,{}),label:"All"}),r.map((function(e,a){return Object(Y.jsx)(Se.a,{value:e,control:Object(Y.jsx)(Ne.a,{}),label:e},a)}))]})]})}var ke=t(174);function Qe(e){return"".concat(e," $")}function De(e){var a=e.data,t=Object(I.b)(),r=Object(je.a)(new Set(a.map((function(e){return e.price})))),c=Math.max.apply(Math,Object(je.a)(r)),n=A.a.useState([0,c]),s=Object(i.a)(n,2),o=s[0],l=s[1];return Object(Y.jsxs)("div",{children:[Object(Y.jsx)(ae.a,{id:"range-slider",gutterBottom:!0,children:"Price range"}),Object(Y.jsx)(ke.a,{min:0,max:c,value:o,onChange:function(e,a){l(a)},onChangeCommitted:function(){t(P(o))},valueLabelDisplay:"auto","aria-labelledby":"range-slider",getAriaValueText:Qe})]})}var He=Object(g.a)({filters:{paddingTop:10,minWidth:200,height:"fit-content"},filtersWrapper:{margin:"0 auto",width:"80%"}},{name:"Filters"});function Re(e){var a=e.data,t=He();return Object(Y.jsx)(l.a,{className:t.filters,elevation:3,children:Object(Y.jsxs)("div",{className:t.filtersWrapper,children:[Object(Y.jsx)(Ee,{data:a}),Object(Y.jsx)(De,{data:a})]})})}Re.propTypes={data:Be.a.array};var We=Object(g.a)({bodyWrapper:{display:"flex",width:"95%",marginTop:15,margin:"0 auto"}},{name:"Body"});function Pe(e){var a=e.data,t=We();return Object(Y.jsx)("div",{className:t.body,children:Object(Y.jsxs)("div",{className:t.bodyWrapper,children:[Object(Y.jsx)(Re,{data:a}),Object(Y.jsx)(xe,{data:a})]})})}var Ge=Object(g.a)({basketList:{height:"100vh",width:"60%",margin:"0 auto",padding:15}},{name:"Basket"});function Te(){var e=Ge();return Object(Y.jsx)(l.a,{className:e.basketList,children:Object(Y.jsx)(U,{})})}var Le=t.p+"static/media/cat.b6b2a4f7.jpg",Ye=Object(g.a)({root:{width:"70%",margin:"0 auto",display:"flex"},userImg:{width:200,height:200,borderRadius:"50%",margin:15}},{name:"Profile"});function Ze(){var e=Ye();return Object(Y.jsxs)(l.a,{className:e.root,children:[Object(Y.jsx)("img",{src:Le,className:e.userImg,alt:"cat"}),Object(Y.jsxs)("div",{className:e.userInfo,children:[Object(Y.jsx)("h2",{children:"\u0421\u043e\u0432\u0435\u0442\u043d\u0438\u043a\u043e\u0432 \u0412\u0438\u043a\u0442\u043e\u0440"}),Object(Y.jsx)("h3",{children:"+7927***1104"})]})]})}var Ue=t(88),Me=(t(115),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJQSURBVHgB7VZBbtNAFH3fTtkhwgnIDYAT4O5L6koJFSuSE5AbxDlB2xu0K2iDVCfqPjlCOEHNCciCSojEHv6MTYmT2vNNQaJS3sLOOM9/nv/8+W+ALbb4D0ESkrr06/ix9PCoNqODMLLyh/sTvnn8K6D2eGDjW0Wo8z0fjnuZDedAfEDtq2khf+h7fJ3cPvhGT6kbzlECBzY4bn9lVEfi9Er5NcygEKWKENkEyEToiXNv0BM7X404ybu4oZcQoGan0AkHPcoGc8TJqJS+SALETkBv7bVzO4OEpD74Dbixhxs3xGMW5NIACx6T8w6mADOBhNAEbY26qACRiJwgvVOW6hrry5SLSh1qhWcQQlITeSyTfqkADaVO1XDPw78QwVlo8Gf2ZOzcrvpzEXrP575okQgFGHjqwn8hITrFAppHadNxJ+rj63RyoueohFgkomSLrqTddfrqvKnroLwWNkLUvkpoZcsx/R0MIR2OAyRU3iPWodQXCa04E0vqYgf7RkMrPDHPHCNMVnC6Zb8JZxJq9T7xqXkMRe+txISN7vAqhACVRQiEsGFxRyX1ipdvAJX4cHFNrfHZXxVhhFz4HZ7ol6fUU+dk44qdY+0bG5ZOOC1q5wIDW5tcB08Sj/PdYO/oFbZnFev/V8bo8PX+IlhAX5+W2M6zB+oZX+8WQW6kZ14RERXFFbdtY1xaQB5ekUdQO5ya2gD0Dpki5vNFAeSZ+M7rfid7p/CQw0ICvgWwQJwJc0jZTOmcbf0z7olqVp6mdJqN+CxJu1VOUFts8aDwE04+zrwWfp5NAAAAAElFTkSuQmCC"),ze=Object(g.a)({stickyColumn:{position:"sticky",left:0,backgroundColor:"#657D95"},stickyColumnH:{position:"sticky",zIndex:3,left:0},table:{width:"100%"}},{name:"Table"});function Xe(e){var a=e.data,t=Object(n.useState)(!1),r=Object(i.a)(t,2),c=r[0],A=r[1],s=ze();function o(){console.log(function(){var e=[],a=document.querySelectorAll("#th"),t=document.querySelectorAll("#td"),r=0,c=function(){var c={};a.forEach((function(e){c[e.textContent]=t[r].textContent,r++})),e.push(c)};for(;r<t.length;)c();return e}())}var d=a.map((function(e){return Object(Y.jsxs)("tr",{className:s.tr,children:[Object(Y.jsx)("td",{id:"td",className:s.stickyColumn,children:e.name}),Object(Y.jsx)("td",{id:"td",children:Object(Y.jsx)("div",{style:{height:"100%"},contentEditable:c,suppressContentEditableWarning:!0,children:e.price})}),Object(Y.jsx)("td",{id:"td",children:e.id}),Object(Y.jsx)("td",{id:"td",children:e.category}),Object(Y.jsx)("td",{id:"td",children:e.maker})]},e.id)}));return Object(Y.jsxs)(l.a,{children:[Object(Y.jsx)(Ue.a,{trackXProps:{style:{height:10,bottom:-10,display:"block"}},thumbXProps:{style:{background:"rgba(31, 142, 250, 0.4)",height:10,borderRadius:2}},trackYProps:{style:{width:10,right:-10}},thumbYProps:{style:{backgroundImage:"url(".concat(Me,")"),backgroundSize:"contain",width:10,borderRadius:2}},style:{width:"35%",height:500,margin:"0 auto"},children:Object(Y.jsxs)("table",{className:s.table,children:[Object(Y.jsx)("thead",{children:Object(Y.jsxs)("tr",{children:[Object(Y.jsx)("th",{id:"th",className:s.stickyColumnH,children:"name"}),Object(Y.jsx)("th",{id:"th",children:"price"}),Object(Y.jsx)("th",{id:"th",children:"id"}),Object(Y.jsx)("th",{id:"th",children:"category"}),Object(Y.jsx)("th",{id:"th",children:"maker"})]})}),Object(Y.jsx)("tbody",{children:d})]})}),Object(Y.jsx)("button",{disabled:c,onClick:function(){A(!0)},children:"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0446\u0435\u043d\u0443"}),Object(Y.jsx)("button",{disabled:!c,onClick:function(){A(!1)},children:"\u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(Y.jsx)("button",{onClick:function(){return o()},children:"getData"})]})}var Fe=t.p+"static/media/Task1Background.1cd053df.png",Ve="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAHCAYAAAA8sqwkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACCSURBVHgBjY6NDUQADIUfuQFOboFb5TboMYEJGIEJGMEASCewghUsICwgPCIh/l/S9DXva1MDVG2Lz/bGjT65Bq/RmEALA9El3cOdWcDKNeFCeAozm5jJrlQ7EvOCt4NTDZZxo8aRgu03j2pl+l/n5nYBHWz+W9JV9C6eqBH5jnWUDfl6HsmSrBz7AAAAAElFTkSuQmCC",Je="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAHCAYAAAA8sqwkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTSURBVHgBfU67DcJAFPOL8qhhg2MDKOhhAzbIHjR5aY6SERiBMSIEUlZJfSfyOK5A+VzixpLt92wghfpqUItJWTRRGlmz4yY4rWd/wl7avp2N87lb3QMZKHbs+TH2Bwf5y5YEPf8FxZGf9jaZxG8LVQh1WiK1OyNxh0vVbyjmwrGoUwlPi7giCv6zDVRhAaS0+fEXUIgrh4InT/wAAAAASUVORK5CYII=",qe=t.p+"static/media/Card1Hover.24178d28.svg",Ke=Object(g.a)({card:{width:"6%",position:"relative",flexGrow:"1",borderRadius:12,transition:"all 1s ease",background:function(e){return e[0]},"&:hover":{backgroundImage:function(e){return"blue"===e[1]?"url(".concat(qe,")"):"url(".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEKCAYAAAD96YsAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAeGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAAqACAAQAAAABAAABAKADAAQAAAABAAABCgAAAACRqOdZAAAACXBIWXMAAAsTAAALEwEAmpwYAAACaGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI2NjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4yNTY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KBmlaxQAAC6xJREFUeAHt3e9u4ugZhnETCJBkZzqq1NPqCXU/7ud+rLonsAfXlapOMpuEv1m/UZlxCAhsArbf52dpNEnmNfi+7sdXgBDP4O///NdLYUMAgWgEflmMlr+MoqWWFwEEXgn8PFoMv16BgQACMQkMBoN/EEDM7qVGIBH4QgAGAYHABAggcPmiI0AAZgCBwAQIIHD5oiNAAGYAgcAECCBw+aIjQABmAIHABAggcPmiI0AAZgCBwAQIIHD5oiNAAGYAgcAECCBw+aIjQABmAIHABAggcPmiI0AAZgCBwAQIIHD5oiNAAGYAgcAECCBw+aIjQABmAIHABAggcPmiI0AAZgCBwAQIIHD5oiNAAGYAgcAECCBw+aIjQABmAIHABAggcPmiI0AAZgCBwAQIIHD5oiNAAGYAgcAECCBw+aIjQABmAIHABAggcPmiI0AAZgCBwAQIIHD5oiNAAGYAgcAECCBw+aIjQABmAIHABAggcPmiI0AAZgCBwAQIIHD5oiNAAGYAgcAECCBw+aIjQABmAIHABAggcPmiI0AAZgCBwAQIIHD5oiNAAGYAgcAECCBw+aIjQABmAIHABAggcPmiI0AAZgCBwAQIIHD5oiNAAGYAgcAECCBw+aIjQABmAIHABAggcPmiI0AAZgCBwAQIIHD5oiNAAGYAgcAECCBw+aIjQABmAIHABAggcPmiI0AAZgCBwAQIIHD5oiNAAGYAgcAECCBw+aIjQABmAIHABAggcPmiI0AAZgCBwAQIIHD5oiNAAGYAgcAECCBw+aIjQABmAIHABAggcPmiI0AAZgCBwAQIIHD5oiNAAGYAgcAECCBw+aIjQABmAIHABAggcPmiI0AAZgCBwAQIIHD5oiNAAGYAgcAECCBw+aIjQABmAIHABAggcPmiI0AAZgCBwAQIIHD5oiNAAGYAgcAECCBw+aIjQABmAIHABAggcPmiI0AAZgCBwAQIIHD5oiNAAGYAgcAECCBw+aIjQABmAIHABAggcPmiI0AAZgCBwAQIIHD5oiNAAGYAgcAECCBw+aIjQABmAIHABAggcPmiI0AAZgCBwAQIIHD5oiNAAGYAgcAECCBw+aIjQABmAIHABAggcPmiI0AAZgCBwAQIIHD5oiNAAGYAgcAECCBw+aIjQABmAIHABAggcPmiI0AAZgCBwAQIIHD5oiNAAGYAgcAECCBw+aIjQABmAIHABAggcPmiI0AAZgCBwAQIIHD5oiNAAGYAgcAECCBw+aIjQABmAIHABAggcPmiI0AAZgCBwAQIIHD5oiNAAGYAgcAECCBw+aIjQABmAIHABAggcPmiI0AAZgCBwAQIIHD5oiNAAGYAgcAECCBw+aIjQABmAIHABAggcPmiI0AAZgCBwAQIIHD5oiNAAGYAgcAECCBw+aIjQABmAIHABAggcPmiI0AAZgCBwAQIIHD5oiNAAGYAgcAECCBw+aIjMIIAgS4RGAwGxafptLidjIvRVbe/Py1Wq+KP2bz8MyteXl66hPHoYyGAo1FZeG4Cw/KE/9vnT50/8TccrofD4svtTfHTdFL8fv9QrNbrzT/15u9uK7Y3GB3oRxD4691db07+at70SCUd+75tNLwqpuPrYjIaFekRzr6tjXUeAexrw9cvSiCdHJPr/o5jOvaUYbZcvuE2Lb8+Lr/+ug2L4no0fH3asP2Uoa11HgG8qcsnbRHo88m/YTYdjzcfvv59VX63/37y//9f0teSKKpbm+sIoNqEj1sj0PUX/I4BM9x6dL/v4f5Vh9a9VdExKa1B4IIEnubzIr3avtlG5Qtv6cXC7W1RPvReX+iV+HT/d5PJ9iHU+HzLAHv3PP+69yT3Hox/QACB3AgQQG6NyoNADQIEUAOWpQjkRoAAcmtUHgRqECCAGrAsRSA3AgSQW6PyIFCDAAHUgGUpArkRIIDcGpUHgRoECKAGLEsRyI0AAeTWqDwI1CBAADVgWYpAbgQIILdG5UGgBgECqAHLUgRyI0AAuTUqDwI1CBBADViWIpAbAQLIrVF5EKhBgABqwLIUgdwIEEBujWaeZ73n0tv9vCp/+2URQPsdOIIaBNJlv1aVS4Slq+suy8+3r7Jb4yZDL3VNwND19zP8snwUsCpP/HTFvPSd38nfvEcCaM7Oni0SSCe9h/2nF+ApwOkM3QICvSVAAL2tzoEjcDoBAjidoVtAoLcECKC31TlwBE4nQACnM3QLCPSWAAH0tjoHjsDpBAjgdIZuAYHeEiCA3lbnwBE4nQABnM7QLSDQWwIE0NvqHDgCpxMggNMZugUEekuAAHpbnQNH4HQCBHA6Q7eAQG8JEEBvq3PgCJxOwK8Dn87QLZyRwNVgUAyvuvV9algeUy4bAeTSZKY5JtfXxSS7bMdeyeD867ql1uyKFuhYAvPl6tilnV2XrlRU3dYv651XK1qsurOOAKqN+bg1Ao/zeWv3/VF3/MfsbYbyokXF82L55uYXpegWlWsapn9sc52nAG/q8UlbBNLFPr89Pxc/TadtHcJJ9/vwPCtWW48A0g2mk331vC4G5esG6TJmKeeura11BLCrDV9rhcD/Hp9eT5DPNzet3H/TO00n/9fHx727v570e0786k5trCOAagM+bp3A/dNzkR5Kf5pOiuvRsPXj2XcA63V5efLyO/7TfFHMlm8f5u/bp4tfJ4AuthL8mNKJlR4N2M5PwIuA52fsHhDoLAGPADpbTdwDm4xGxXQ8LkblG4DSG4G6us3LF/jSC5e7XvyrHnOX8xBAtSkft07gy+1t+ZOAfrz1Z3I9en2tIr1ucf+0+ylL1/N4CtD6yDuADYHPN9PenPybY05/p+P+Symu7a0PeQhguzWft0Igvd+/bz/+q4JKP7VIP+vfbH3JQwCbxvzdKoGb8j3/fd/uJuPvEfqShwC+V+aDNgmMO/wz/2O5jIc/3rfQlzxeBDy2XetaITAv32SzrLx3/qp8qrDr14PTmkv9N+HpGKYNH7E8l7/zUH078LCUxq6fdFwqDwG0Mtbu9FgC6Uds1d+yG5XPswc73lab1lVPrGNvv8m6H9/n6++djrGa5/V1g1Io21tacwmhvb/n7SPxOQIIZEuAALKtVjAEDhMggMOMrEAgWwIEkG21giFwmAABHGZkBQLZEiCAbKsVDIHDBAjgMCMrEMiWAAFkW61gCBwmQACHGVmBQLYECCDbagVD4DABAjjMyAoEsiVAANlWKxgChwkQwGFGViCQLQECyLZawRA4TIAADjOyAoFsCRBAttUKhsBhAgRwmJEVHSKw7yIZu//LzQ4d+J5D2Zdnz/IP/zIBfDhSN3hOAunKP9snza6vnfMYPvK2V+UVgtrM45JgH9mm27oIgfRfaafr6G3+y+0kgL5u6eSv5llf8NJmiRkB9HVyAh93OmnSd85ctjbzeAqQyxTJgUADAgTQAJpdEMiFAAHk0qQcCDQgQAANoNkFgVwIEEAuTcqBQAMCBNAAml0QyIUAAeTSpBwINCBAAA2g2QWBXAgQQC5NyoFAAwIE0ACaXRDIhQAB5NKkHAg0IEAADaDZBYFcCBBALk3KgUADAgTQAJpdEMiFAAHk0qQcCDQg4HoADaDZ5XIEbsbj4uZyd3f2e7qdTM5+H3XuwCOAOrSsPRuBdQYX+FhVrlHSlzwEcLaRdsN1CDzNF3WWd3LtbPEjQ1/yEEAnRyneQc2Wy2K2/HEC9Y3AsryW33NFAH3JQwB9m7SMj/e/3x6LdCL1bUvH/Pv9w7vD7kMeLwK+q80X2iKQru77n6/3xW35wt/dZFxcj7o9nunEf5zNiofn2btLeyeGfcjTbcJtTaL7bY1AevHsW3lSpT85bF3P4ylADlMmAwINCRBAQ3B2QyAHAgSQQ4syINCQAAE0BGc3BHIgQAA5tCgDAg0JEEBDcHZDIAcCBJBDizIg0JAAATQEZzcEciBAADm0KAMCTQi8FA8E0AScfRDIgcCg+DcB5FCkDAjUJDAYvPy6XL789icp1yWQpngoPAAAAABJRU5ErkJggg==",")")},backgroundRepeat:"no-repeat",backgroundSize:"cover"},color:"white",marginRight:16,overflow:"visible",display:"flex",justifyContent:"center",alignItems:"center"},wrapper:{width:"70%",margin:"0 auto"},overMainSum:{fontFamily:"Inter",color:"#657D95",fontSize:16,marginBottom:10},mainSumWrapper:{display:"flex",alignItems:"center"},differenceWrapper:{display:"flex",color:function(e){return e[2]<0?"red":"green"},alignItems:"center"},differenceImg:{margin:0,width:12,height:8,marginRight:5},mainSum:{fontSize:36,fontFamily:"Inter",lineHeight:"1",marginRight:10},mainSumCurr:{fontSize:20},divider:{color:"#657D95",padding:"10px 0px",opacity:"0.36",width:0,height:19},year:{color:"#657D95",fontSize:12},secondarySumWrapper:{display:"flex",alignItems:"baseline"},SecondarySum:{color:"#657D95",fontSize:18,paddingRight:5},secondarySumCurr:{color:"#657D95",fontSize:11},circle:{fontFamily:"Inter",zIndex:"1",display:"flex",justifyContent:"center",alignItems:"center",color:"#657D95",width:64,height:64,borderRadius:"50%",position:"absolute",backgroundColor:"#1F283C",top:"40%",right:-40},operation:{fontSize:30}},{name:"Task1"});function _e(e){var a=e.card,t=function(e,a){e=+e.split(" ").join(""),a=+a.split(" ").join("");var t=null;t=e>a?Math.trunc(100*(e/a-Math.trunc(e/a))):-1*Math.trunc(100*(a/e-Math.trunc(a/e)));return t}(a.mainSum,a.secondarySum),r=[a.color,a.background,t],c=Ke(r);return Object(Y.jsxs)(ue.a,{className:c.card,children:[Object(Y.jsxs)(be.a,{className:c.wrapper,children:[Object(Y.jsx)(ae.a,{className:c.overMainSum,children:a.header}),Object(Y.jsxs)("div",{className:c.mainSumWrapper,children:[Object(Y.jsx)(ae.a,{className:c.mainSum,children:a.mainSum}),Object(Y.jsxs)("div",{className:c.differenceWrapper,children:[Object(Y.jsx)("img",{className:c.differenceImg,src:t<0?Ve:Je}),Object(Y.jsx)(ae.a,{children:"".concat(t," %")})]})]}),Object(Y.jsx)(ae.a,{className:c.mainSumCurr,children:a.currency}),Object(Y.jsx)("div",{className:c.divider,children:"|"}),Object(Y.jsx)(ae.a,{className:c.year,children:"(".concat(a.year,")")}),Object(Y.jsxs)("div",{className:c.secondarySumWrapper,children:[Object(Y.jsx)(ae.a,{className:c.SecondarySum,children:a.secondarySum}),Object(Y.jsx)(ae.a,{className:c.secondarySumCurr,children:a.secondaryCurrency})]})]}),Object(Y.jsx)("div",{className:c.circle,children:Object(Y.jsx)(ae.a,{className:c.operation,children:a.operation})})]})}var $e=Object(g.a)({headerWrapper:{display:"flex",alignItems:"center",fontSize:12,color:"#657D95",marginBottom:10},headerImg:{width:18,height:18,marginRight:5},header:{fontSize:12},mainSumWrapper:{display:"flex",alignItems:"baseline"},differenceWrapper:{display:"flex",color:function(e){return e<0?"red":"green"},alignItems:"center"},differenceImg:{width:12,height:8,marginRight:5},mainSum:{fontSize:20,fontFamily:"Inter",lineHeight:"1",marginRight:10},mainSumCurr:{fontSize:13,marginRight:5},divider:{border:"1px solid #657D95",opacity:"0.36",width:0,height:8},year:{color:"#657D95",fontSize:11},secondarySumWrapper:{marginTop:7,display:"flex",alignItems:"baseline"},SecondarySum:{color:"#657D95",fontSize:16,paddingRight:5},secondarySumCurr:{color:"#657D95",fontSize:11}},{name:"LargeCardData"});function ea(e){var a=e.data,t=e.currency,r=e.year,c=function(e,a){e=+e.split(" ").join(""),a=+a.split(" ").join("");var t=null;t=e>a?Math.trunc(100*(e/a-Math.trunc(e/a))):-1*Math.trunc(100*(a/e-Math.trunc(a/e)));return t}(a.mainSum,a.secondarySum),n=$e(c);return Object(Y.jsxs)("div",{children:[Object(Y.jsxs)("div",{className:n.headerWrapper,children:[Object(Y.jsx)("img",{className:n.headerImg,src:function(){switch(a.header){case"\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u044f\u0435\u0442":return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGxSURBVHgBrVNNTsJQEJ55Lf7EmPQIxcQ9nEA4AdxATERd1gWyhSUaA+zwZ4En0BvgDcCtJpYj1IUkAn3jm/6FNi26YJJm+t5887353swD2JBhVsCybON7x62ii6aPpIlAbTLo5Kf/ImKCme72QIjj1ATCIQpoJwnF6uKiaZuzLRqTEBUgakvXLd9fHyB/RFhUkCdCqkmiEWNTK+IAAzx2xHKWhFXcfP5VHPaKTqwidXpLOXMdCRvHGEMAxnbO6MakeWWqO0HEYUhSb9iFeuO9kEWmtPZZZs0aGxHRYul6CVJCPwSTWBqI+iiLTEr5yj6X269GRJrAQrDonjfsEX+CNC47k+zx9tAjQkCTvR4PU/wXw50c/GW6n0NTZG7ptgfBSafNjxKS9gyE5Yeb/CSZyHfImSjEOJK2WGgvnm4hSiEQpe5kkXhxci1fGrwF3rezq8+hchXV2uK69rMFs2Rzl+86+ZOoIrb5HPkEJ21qU0h4INV1QDuqMANk8puSAP1QmoqVJMGRuk9LJTnJwcWME1vqN/3RKjm7P3DZ6+Wd2D6skcCDGs4Yd3ZPNSVJsHH7BRx53x3cU99xAAAAAElFTkSuQmCC";case"\u043f\u0440\u044f\u043c\u044b\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b":return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBrZNBTsJQEIZnXgE1xoQjFBP3cALgBHIDcWFkWWOIW1iqMZSdURPLDbyB3ABcuyhHwIUkFvvGmdY2pSlNF0zzOm3fvO/982YKsCPDbROW5Va/9/0O+miGkTRXaMwfb2uLQiABrEq+DUqdZS4gdFDBMA1UyZfejWuuKjQjpU6BaKh9v/10d4wyiLDBIRNC6mqid4nNVCQTEhDQEdvbUkjGed5Xw7Ebyw1FvPuAnZkHEZM5iSGA6l65OtpILZDJZ4KITh4kCeNcx5Jm15pVY9D6168HqjSMoaBprafiy+WjTgwyFAag5/vavCjo5eFkKh4BzRi0CwtABLQQ37v+bBVdeNF3gyxQqZn4ktzWa+OtUqFXbRijy767LALigzYDEMBHrMixa7J4wqMeBhDkDb6kUmayyqVoB89Di1U1Q7l4nteQFDbkgtUMo++YDvrvWlP+KQ0wjirJcy1N0GQ1Fi9aphsXs3Zk2IAfs39aTufgB67s8DhgKygJlEaNekwqe8hFSQN2bn8PH8K+QEPvmAAAAABJRU5ErkJggg==";default:return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFjSURBVHgBrZNNTsJAFMffexCjceMRWhP3cgLhBHgD2Igu6wLclqUak7IjurDewBvgDewB1HKEbiQR7DzfDJbUSRsq4SXNzGTe+/V9/AdgS4ZlF54XH3zupqeYorP05IiwFo2v3WklkAbM6mkARJ3CAMYQCYY2kPKHi6vYme3wKxO1gXmo0rR1f3OI+mPGhrg8MXJXMU+0b2FG+kI7GDpiq6yEMqtnG/m7L+U4AnH/C1mVZtKUniBiWAXSG8QduzQDWnynxyYrBSOoYqxcu0+mtBqhAT3culFR3Hk/nvzhIGuA8wsz/axDtRTWepipnfXfuoj0SDLu8d3Ry7qgXv/dB8ROfrrLHi1qz3pVRE2oYkixLZGVjnqDj1CWtjg0Nh6/tvkcPVmSItVWSjJ/yKnb0W9KAYyyScpdUzGcMLAnQUlpaRbMl23xoxXR7n3BZRC4SWlGNlALNdOYZDLdl6HYgK3bD+rnrHS8SsF5AAAAAElFTkSuQmCC"}}()}),Object(Y.jsx)(ae.a,{className:n.header,children:a.header})]}),Object(Y.jsxs)("div",{className:n.mainSumWrapper,children:[Object(Y.jsx)(ae.a,{className:n.mainSum,children:a.mainSum}),Object(Y.jsx)(ae.a,{className:n.mainSumCurr,children:t}),Object(Y.jsxs)("div",{className:n.differenceWrapper,children:[Object(Y.jsx)("img",{className:n.differenceImg,src:c<0?Ve:Je}),Object(Y.jsxs)(ae.a,{children:[" ","".concat(c," %")]})]})]}),Object(Y.jsx)("div",{className:n.divider}),Object(Y.jsxs)("div",{className:n.secondarySumWrapper,children:[Object(Y.jsx)(ae.a,{className:n.SecondarySum,children:a.secondarySum}),Object(Y.jsx)(ae.a,{className:n.secondarySumCurr,children:t}),Object(Y.jsx)(ae.a,{className:n.year,children:"(".concat(r,")")})]})]})}var aa=Object(g.a)({card:{padding:0,position:"relative",flexGrow:"2",background:function(e){return e.color},color:"white",height:"100%",overflow:"visible",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:12},wrapper:{width:"93%",margin:"0 auto"},overMainSum:{fontFamily:"Inter",color:"#657D95",fontSize:16},mainSumWrapper:{display:"flex",alignItems:"center",marginBottom:24},mainSum:{fontSize:36,fontFamily:"Inter",lineHeight:"1",marginRight:10},mainSumCurr:{fontSize:20},cardDataWrapper:{display:"flex",justifyContent:"space-between"}},{name:"LargeCard"});function ta(e){var a=e.card,t=aa(a);return Object(Y.jsx)(ue.a,{className:t.card,children:Object(Y.jsxs)(be.a,{className:t.wrapper,children:[Object(Y.jsx)(ae.a,{className:t.overMainSum,children:a.header}),Object(Y.jsxs)("div",{className:t.mainSumWrapper,children:[Object(Y.jsx)(ae.a,{className:t.mainSum,children:a.mainSum}),Object(Y.jsx)(ae.a,{className:t.mainSumCurr,children:a.currency})]}),Object(Y.jsx)("div",{className:t.cardDataWrapper,children:[a.part1,a.part2,a.part3].map((function(e){return Object(Y.jsx)(ea,{data:e,currency:a.currency,year:a.year},e.header)}))})]})})}var ra=Object(g.a)({paper:{backgroundImage:"url(".concat(Fe,")"),backgroundSize:"100% 100%",height:"50%",maxWidth:1464,maxHeight:440,minWidth:1024,margin:"auto",color:"white",display:"flex",justifyContent:"center",alignItems:"center"},wrapper:{width:"95%",height:"82%"},header:{fontFamily:"Inter",display:"flex",alignItems:"center",fontSize:14,fontWeight:"200"},headerImg:{marginRight:15},cardWrapper:{marginLeft:4,marginTop:40,height:"75%",display:"flex"}},{name:"Task1"}),ca={header:"\u0442\u0430\u0440\u0438\u0444 (2020)",mainSum:"419",currency:"\u0440./\u0435\u0434.",year:2019,secondarySum:"436",secondaryCurrency:"\u0440./\u0435\u0434.",color:"rgba(87, 148, 222, 0.2)",background:"blue",operation:"x"},na={header:"\u043e\u0431\u044a\u0435\u043c \u0440\u0435\u0441\u0443\u0440\u0441\u0430 (2020)",mainSum:"11 292",currency:"\u0434\u043e\u043a.",year:2019,secondarySum:"9 864",secondaryCurrency:"\u0447\u0435\u043b./\u0447.",color:"rgba(78,142,150,0.2)",background:"green",operation:"="},Aa={header:"\u0422\u0421\u041e \u043c\u043e\u0434\u0435\u043b\u0438 (2020):",mainSum:"2 663",currency:"\u043c\u043b\u043d. \u0440.",year:2019,part1:{header:"\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u044f\u0435\u0442",mainSum:"2 596",secondarySum:"2 421"},part2:{header:"\u043f\u0440\u044f\u043c\u044b\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b",mainSum:"67",secondarySum:"66"},part3:{header:"\u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442",mainSum:"2 658",secondarySum:"2 705"},color:"rgba(107,117,202,0.2)"};function ia(){var e=ra();return Object(Y.jsx)(l.a,{className:e.paper,children:Object(Y.jsxs)("div",{className:e.wrapper,children:[Object(Y.jsxs)("div",{className:e.header,children:[Object(Y.jsx)("img",{className:e.headerImg,src:Me}),"\u0421\u0431\u0435\u0440\u0431\u0430\u043d\u043a \u0431\u0438\u0437\u043d\u0435\u0441 \u041e\u043d\u041b@\u0439\u043d"]}),Object(Y.jsxs)("div",{className:e.cardWrapper,children:[Object(Y.jsx)(_e,{card:ca}),Object(Y.jsx)(_e,{card:na}),Object(Y.jsx)(ta,{card:Aa})]})]})})}t(116);function sa(e){var a=e.data,t=Object(n.useState)(!1),r=Object(i.a)(t,2),c=r[0],A=r[1],g=Object(s.a)({palette:{type:c?"dark":"light"}});return Object(Y.jsx)(o.a,{theme:g,children:Object(Y.jsx)(l.a,{style:{height:"100vh",overflowY:"scroll"},children:Object(Y.jsxs)(d.a,{children:[Object(Y.jsx)(ge,{onClick:function(){return A(!c)}}),Object(Y.jsxs)(m.c,{children:[Object(Y.jsx)(m.a,{path:"/Table",children:Object(Y.jsx)(Xe,{data:a})}),Object(Y.jsx)(m.a,{path:"/Task1",children:Object(Y.jsx)(ia,{})}),Object(Y.jsx)(m.a,{path:"/basket",children:Object(Y.jsx)(Te,{})}),Object(Y.jsx)(m.a,{path:"/profile",children:Object(Y.jsx)(Ze,{})}),Object(Y.jsx)(m.a,{path:"/",children:Object(Y.jsx)(Pe,{data:a})})]})]})})})}var oa=t(35),la=t(23),da={category:"All",minPrice:0,maxPrice:null,namePattern:""},ma={basket:[]},ga=Object(oa.b)({filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:da,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case N:return Object(la.a)(Object(la.a)({},e),{},{category:a.payload});case E:return Object(la.a)(Object(la.a)({},e),{},{minPrice:a.payload[0],maxPrice:a.payload[1]});case k:return Object(la.a)(Object(la.a)({},e),{},{namePattern:a.payload});default:return e}},basket:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ma,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case Q:return Object(la.a)(Object(la.a)({},e),{},{basket:e.basket.concat(a.payload)});case D:return Object(la.a)(Object(la.a)({},e),{},{basket:e.basket.filter((function(e,t){return t!==a.payload}))});case H:var t=Object(je.a)(e.basket);return t[0].count+=a.payload[1],Object(la.a)(Object(la.a)({},e),{},{basket:t});default:return e}}}),ja=[{name:"banana",price:10,id:12314123,category:"fruits",maker:"vitya"},{name:"banana123",price:10,id:123141234,category:"fruits",maker:"vitya"},{name:"apple",price:20,id:1241123,category:"fruits",maker:"vitya"},{name:"strawberry",price:30,id:2654823,category:"fruits",maker:"leejoungsuk"},{name:"pineapple",price:40,id:7863425,category:"fruits",maker:"uskor"},{name:"peach",price:50,id:245393,category:"fruits",maker:"leerlub"},{name:"mango",price:55,id:7634425,category:"fruits",maker:"uskor"},{name:"tomato",price:45,id:67234823,category:"vegetables",maker:"vegin"},{name:"carrot",price:60,id:7867890,category:"vegetables",maker:"vigin"},{name:"cauliflower",price:73,id:6723423,category:"vegetables",maker:"cucs"},{name:"cucumber",price:82,id:78688901,category:"vegetables",maker:"cucs"},{name:"lemonade",price:94,id:6408003,category:"drinks",maker:"juiss"},{name:"yogurt",price:7,id:7813890,category:"drinks",maker:"juiss"},{name:"juice",price:130,id:6430983,category:"drinks",maker:"juiss"},{name:"milk",price:95,id:7821897,category:"drinks",maker:"juiss"},{name:"b",price:10,id:123141231,category:"fruits",maker:"vitya"},{name:"ban",price:10,id:123141232,category:"fruits",maker:"vitya"},{name:"banan",price:10,id:123141233,category:"fruits",maker:"vitya"}],ua=Object(oa.d)(ga,Object(oa.c)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),ba=Object(Y.jsx)(I.a,{store:ua,children:Object(Y.jsx)(sa,{data:ja})});c.a.render(ba,document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.ae199bb6.chunk.js.map