(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{109:function(e,a,t){"use strict";t.r(a);var r=t(11),n=t.n(r),c=t(0),i=t.n(c),o=t(12),s=t(87),l=t(170),d=t(114),j=(t(96),t(150)),b=t(32),u=t(5),p=t(158),m=t(112),h=t(171),O=t(159),g=t(113),x=t(18),f=t(59),y=t.n(f),k=t(152),v=t(111),C=t(154),w=t(155),N=t(156),E=t(157),T="CREATE_FILTER",B="CREATE_PRICE_FILTER",P="CREATE_NAME_PATTERN",S="ADD_TO_BASKET",_="DELETE_FROM_BASKET",A="CHANGE_CARD_COUNT";function I(e){return{type:S,payload:e}}function L(e){return{type:_,payload:e}}var W=t(2),F=Object(j.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),width:"50%"},h3:{margin:0},summ:{backgroundColor:"#fdfdd5"}}}));var M={addToBasket:I,deleteFromBasket:L,changeCardCount:function(e){return{type:A,payload:e}}},R=Object(x.b)((function(e){return{basket:e.basket.basket}}),M)((function(e){var a=e.basket,t=e.deleteFromBasket,r=e.changeCardCount,n=F();return a.length?Object(W.jsxs)(k.a,{children:[a.map((function(e,n){return Object(W.jsxs)(v.a,{children:[Object(W.jsx)(C.a,{primary:e.card.name,secondary:"".concat(e.card.price,"$ x ").concat(e.count)}),Object(W.jsxs)(w.a,{children:[Object(W.jsx)(m.a,{edge:"end","aria-label":"comments",onClick:function(){return function(e){if(1!==a[e].count){var n=a[e].count,c={card:a[e].card,count:--n};r([e,c])}else t(e)}(n)},children:Object(W.jsx)(N.a,{})}),Object(W.jsx)(m.a,{edge:"end","aria-label":"comments",onClick:function(){return function(e){var t=a[e].count,n={card:a[e].card,count:++t};r([e,n])}(n)},children:Object(W.jsx)(E.a,{})})]})]},e.card.id)})),Object(W.jsx)(v.a,{className:n.summ,children:Object(W.jsx)(C.a,{primary:"Itog:",secondary:"".concat(function(){var e=0;return a.forEach((function(a){e+=a.count*a.card.price})),e}()," $")})})]}):Object(W.jsx)("h3",{className:n.h3,children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"})})),z=Object(u.a)((function(e){return{badge:{right:-3,top:13,border:"2px solid ".concat(e.palette.background.paper),padding:"0 4px"}}}))(p.a),D=Object(j.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),width:"50%"},shoppingCart:{height:40,width:40},basketWrapper:{margin:"0 10px"}}}));var X=Object(x.b)((function(e){return{basket:e.basket.basket}}),null)((function(e){var a=e.basket,t=D(),r=i.a.useState(!1),n=Object(o.a)(r,2),c=n[0],s=n[1];return Object(W.jsxs)("div",{className:t.basketWrapper,children:[Object(W.jsx)(m.a,{"aria-label":"cart",onClick:function(){s(!0)},children:Object(W.jsx)(z,{badgeContent:a.length||null,color:"secondary",children:Object(W.jsx)(y.a,{className:t.shoppingCart})})}),Object(W.jsx)(h.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:c,onClose:function(){s(!1)},closeAfterTransition:!0,BackdropComponent:O.a,BackdropProps:{timeout:500},children:Object(W.jsx)(g.a,{in:c,children:Object(W.jsxs)("div",{className:t.paper,children:[Object(W.jsx)("h2",{id:"transition-modal-title",children:"Basket"}),Object(W.jsx)(R,{})]})})})]})})),$=t(175),H=t(84),U=t.n(H),V=Object(j.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",width:"40%",height:40},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10}}}));var J={setNamePattern:function(e){return{type:P,payload:e}}},K=Object(x.b)(null,J)((function(e){var a=e.setNamePattern,t=V();return Object(W.jsxs)(d.a,{component:"form",className:t.root,children:[Object(W.jsx)($.a,{className:t.input,placeholder:"Search",onChange:function(e){a(e.target.value)}}),Object(W.jsx)(m.a,{type:"submit",className:t.iconButton,"aria-label":"search",disabled:!0,children:Object(W.jsx)(U.a,{})})]})})),G=t.p+"static/media/harvest.6aaf6395.svg",Y=t(21),q=t(162),Q=t(173),Z=t(161),ee=t(163),ae=t(160);function te(e){var a=e.onChange,t=e.value;return Object(W.jsx)("div",{children:Object(W.jsx)(ae.a,{checked:t,onChange:a,name:"checkedA",inputProps:{"aria-label":"secondary checkbox"}})})}var re=t(86),ne=t.n(re),ce=t(85),ie=t.n(ce),oe=Object(u.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return Object(W.jsx)(Q.a,Object(Y.a)({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),se=Object(u.a)((function(e){return{root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(Z.a),le=Object(j.a)({switcher:{textAlign:"center"}},{name:"Menu"});function de(e){var a=e.onClick,t=le(),r=i.a.useState(null),n=Object(o.a)(r,2),c=n[0],s=n[1];return Object(W.jsxs)("div",{children:[Object(W.jsx)(q.a,{"aria-controls":"customized-menu","aria-haspopup":"true",variant:"contained",color:"primary",onClick:function(e){s(e.currentTarget)},children:"Open Menu"}),Object(W.jsxs)(oe,{id:"customized-menu",anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:function(){s(null)},children:[Object(W.jsxs)(se,{children:[Object(W.jsx)(ee.a,{children:Object(W.jsx)(ie.a,{fontSize:"small"})}),Object(W.jsx)(b.b,{to:"/",color:"primary",children:"Home"})]}),Object(W.jsxs)(se,{children:[Object(W.jsx)(ee.a,{children:Object(W.jsx)(ne.a,{fontSize:"small"})}),Object(W.jsx)(b.b,{to:"/profile",color:"primary",children:"Profile"})]}),Object(W.jsxs)(se,{children:[Object(W.jsx)(ee.a,{children:Object(W.jsx)(y.a,{fontSize:"small"})}),Object(W.jsx)(b.b,{to:"/basket",color:"primary",children:"Basket"})]}),Object(W.jsx)("div",{className:t.switcher,children:Object(W.jsx)(te,{onChange:a})})]})]})}function je(e){var a=e.onClick,t=be();return Object(W.jsx)("div",{className:t.header,children:Object(W.jsxs)("div",{className:t.headerWrapper,children:[Object(W.jsx)(b.b,{to:"/",children:Object(W.jsx)("img",{className:t.logo,src:G})}),Object(W.jsx)(K,{}),Object(W.jsxs)("div",{className:t.menuPlusBasket,children:[Object(W.jsx)(X,{}),Object(W.jsx)(de,{onClick:a})]})]})})}var be=Object(j.a)({header:{background:"linear-gradient(90deg, rgba(241,255,246,1) 0%, rgba(104,233,149,1) 30%, rgba(6,198,60,1) 100%)",height:"13vh"},headerWrapper:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"90%",height:"100%",margin:"0 auto"},logo:{width:"10vh"},menuPlusBasket:{display:"flex",alignItems:"center"}},{name:"Header"}),ue=t(164),pe=t(166),me=t(165),he=t(50),Oe=t(174),ge=Object(j.a)({root:{minWidth:275,maxWidth:300,marginBottom:20,border:"1px solid black"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});var xe={addToBasket:I,deleteFromBasket:L},fe=Object(x.b)((function(e){return{basket:e.basket.basket}}),xe)((function(e){var a=e.basket,t=e.addToBasket,r=e.deleteFromBasket,n=e.card,c=ge(),i=function(e){for(var t=0;t<a.length;t++)if(a[t].card.id===e)return t;return-1};return Object(W.jsxs)(ue.a,{className:c.root,children:[Object(W.jsxs)(me.a,{children:[Object(W.jsx)(Oe.a,{checked:-1!==i(n.id),onChange:function(){var e=i(n.id);-1===e?t({card:n,count:1}):r(e)},color:"primary",inputProps:{"aria-label":"primary checkbox"}}),Object(W.jsx)(he.a,{variant:"h5",component:"h2",children:n.name}),Object(W.jsx)(he.a,{className:c.pos,color:"textSecondary",children:"".concat(n.price," $ ")}),Object(W.jsx)(he.a,{variant:"body2",component:"p",children:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c: ".concat(n.maker)})]}),Object(W.jsx)(pe.a,{children:Object(W.jsx)(q.a,{size:"small",children:"Learn More"})})]})}));var ye=Object(j.a)({shopContent:{margin:"0 auto",display:"flex",flexWrap:"wrap",justifyContent:"space-between",width:"80%"}},{name:"ShopContent"}),ke=Object(x.b)((function(e){return console.log(e),{filter:e.filter}}),null)((function(e){var a=e.filter,t=e.data,r=ye();return(t=t.filter((function(e){return(e.category===a.category||"All"===a.category)&&(e.price>=a.minPrice&&e.price<=a.maxPrice||null===a.minPrice)&&e.name.toLowerCase().startsWith(a.namePattern.toLowerCase())}))).length?Object(W.jsx)("div",{className:r.shopContent,children:t.map((function(e){return Object(W.jsx)(fe,{card:e},e.id)}))}):Object(W.jsx)("h3",{className:r.shopContent,children:"\u0422\u043e\u0432\u044b\u0440\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"})})),ve=t(19),Ce=t(167),we=t(168),Ne=t(176),Ee=t(169),Te=t(172);var Be={currentFilter:function(e){return{type:T,payload:e}}},Pe=Object(x.b)(null,Be)((function(e){var a=e.currentFilter,t=e.data,r=Object(ve.a)(new Set(t.map((function(e){return e.category})))),n=i.a.useState("All"),c=Object(o.a)(n,2),s=c[0],l=c[1];return Object(W.jsxs)(Ce.a,{component:"fieldset",children:[Object(W.jsx)(we.a,{component:"legend",children:"Select Category"}),Object(W.jsxs)(Ne.a,{"aria-label":"category",name:"category1",value:s,onChange:function(e){l(e.target.value),a(e.target.value)},children:[Object(W.jsx)(Ee.a,{value:"All",control:Object(W.jsx)(Te.a,{}),label:"All"}),r.map((function(e,a){return Object(W.jsx)(Ee.a,{value:e,control:Object(W.jsx)(Te.a,{}),label:e},a)}))]})]})})),Se=t(177),_e=Object(j.a)({root:{width:"100%"}});function Ae(e){return"".concat(e," $")}var Ie={setPriceFilter:function(e){return{type:B,payload:e}}},Le=Object(x.b)(null,Ie)((function(e){var a=e.setPriceFilter,t=e.data,r=Object(ve.a)(new Set(t.map((function(e){return e.price})))),n=Math.min.apply(Math,Object(ve.a)(r)),c=Math.max.apply(Math,Object(ve.a)(r)),s=_e(),l=i.a.useState([n,c]),d=Object(o.a)(l,2),j=d[0],b=d[1];return Object(W.jsxs)("div",{className:s.root,children:[Object(W.jsx)(he.a,{id:"range-slider",gutterBottom:!0,children:"Price range"}),Object(W.jsx)(Se.a,{min:n,max:c,value:j,onChange:function(e,a){b(a)},onChangeCommitted:function(){a(j)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",getAriaValueText:Ae})]})})),We=Object(j.a)({filters:{paddingTop:10,minWidth:200,height:"fit-content"},filtersWrapper:{margin:"0 auto",width:"80%"}},{name:"Filters"});function Fe(e){var a=e.data,t=We();return Object(W.jsx)(d.a,{className:t.filters,elevation:3,children:Object(W.jsxs)("div",{className:t.filtersWrapper,children:[Object(W.jsx)(Pe,{data:a}),Object(W.jsx)(Le,{data:a})]})})}var Me=Object(j.a)({body:{},bodyWrapper:{display:"flex",width:"95%",marginTop:15,margin:"0 auto"}},{name:"Body"});function Re(e){var a=e.data,t=Me();return Object(W.jsx)("div",{className:t.body,children:Object(W.jsxs)("div",{className:t.bodyWrapper,children:[Object(W.jsx)(Fe,{data:a}),Object(W.jsx)(ke,{data:a})]})})}var ze=t(15),De=Object(j.a)({basketList:{height:"100vh",width:"60%",margin:"0 auto",padding:15}},{name:"Basket"});function Xe(){var e=De();return Object(W.jsx)(d.a,{className:e.basketList,children:Object(W.jsx)(R,{})})}var $e=t.p+"static/media/cat.b6b2a4f7.jpg",He=Object(j.a)({root:{width:"70%",margin:"0 auto",display:"flex"},userImg:{width:200,height:200,borderRadius:"50%",margin:15}},{name:"Profile"});function Ue(){var e=He();return Object(W.jsxs)(d.a,{className:e.root,children:[Object(W.jsx)("img",{src:$e,className:e.userImg,alt:"cat"}),Object(W.jsxs)("div",{className:e.userInfo,children:[Object(W.jsx)("h2",{children:"\u0421\u043e\u0432\u0435\u0442\u043d\u0438\u043a\u043e\u0432 \u0412\u0438\u043a\u0442\u043e\u0440"}),Object(W.jsx)("h3",{children:"+7927***1104"})]})]})}function Ve(e){var a=e.data,t=Object(c.useState)(!1),r=Object(o.a)(t,2),n=r[0],i=r[1],j=Object(s.a)({palette:{type:n?"dark":"light"}});return Object(W.jsx)(l.a,{theme:j,children:Object(W.jsx)(d.a,{style:{height:"100vh",overflowY:"scroll"},children:Object(W.jsxs)(b.a,{children:[Object(W.jsx)(je,{onClick:function(){return i(!n)}}),Object(W.jsxs)(ze.c,{children:[Object(W.jsx)(ze.a,{path:"/basket",children:Object(W.jsx)(Xe,{})}),Object(W.jsx)(ze.a,{path:"/profile",children:Object(W.jsx)(Ue,{})}),Object(W.jsx)(ze.a,{path:"/",children:Object(W.jsx)(Re,{data:a})})]})]})})})}var Je=t(35),Ke={category:"All",minPrice:null,maxPrice:null,namePattern:""},Ge={basket:[]},Ye=Object(Je.b)({filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case T:return Object(Y.a)(Object(Y.a)({},e),{},{category:a.payload});case B:return Object(Y.a)(Object(Y.a)({},e),{},{minPrice:a.payload[0],maxPrice:a.payload[1]});case P:return Object(Y.a)(Object(Y.a)({},e),{},{namePattern:a.payload});default:return e}},basket:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case S:return Object(Y.a)(Object(Y.a)({},e),{},{basket:e.basket.concat(a.payload)});case _:return Object(Y.a)(Object(Y.a)({},e),{},{basket:e.basket.filter((function(e,t){return t!==a.payload}))});case A:var t=e.basket.splice(a.payload[0]+1,e.basket.length),r=e.basket.splice(0,a.payload[0]),n=a.payload[1];return Object(Y.a)(Object(Y.a)({},e),{},{basket:r.concat(n,t)});default:return e}}}),qe=[{name:"banana",price:10,id:12314123,category:"fruits",maker:"vitya"},{name:"banana123",price:10,id:123141234,category:"fruits",maker:"vitya"},{name:"apple",price:20,id:1241123,category:"fruits",maker:"vitya"},{name:"strawberry",price:30,id:2654823,category:"fruits",maker:"leejoungsuk"},{name:"pineapple",price:40,id:7863425,category:"fruits",maker:"uskor"},{name:"peach",price:50,id:245393,category:"fruits",maker:"leerlub"},{name:"mango",price:55,id:7634425,category:"fruits",maker:"uskor"},{name:"tomato",price:45,id:67234823,category:"vegetables",maker:"vegin"},{name:"carrot",price:60,id:7867890,category:"vegetables",maker:"vigin"},{name:"cauliflower",price:73,id:6723423,category:"vegetables",maker:"cucs"},{name:"cucumber",price:82,id:78688901,category:"vegetables",maker:"cucs"},{name:"lemonade",price:94,id:6408003,category:"drinks",maker:"juiss"},{name:"yogurt",price:7,id:7813890,category:"drinks",maker:"juiss"},{name:"juice",price:130,id:6430983,category:"drinks",maker:"juiss"},{name:"milk",price:95,id:7821897,category:"drinks",maker:"juiss"},{name:"b",price:10,id:123141231,category:"fruits",maker:"vitya"},{name:"ban",price:10,id:123141232,category:"fruits",maker:"vitya"},{name:"banan",price:10,id:123141233,category:"fruits",maker:"vitya"}],Qe=Object(Je.d)(Ye,Object(Je.c)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),Ze=Object(W.jsx)(x.a,{store:Qe,children:Object(W.jsx)(Ve,{data:qe})});n.a.render(Ze,document.getElementById("root"))},96:function(e,a,t){}},[[109,1,2]]]);
//# sourceMappingURL=main.85ac125c.chunk.js.map