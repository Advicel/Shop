(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{107:function(e,a,r){"use strict";r.r(a);var t=r(11),c=r.n(t),n=r(0),i=r.n(n),A=r(15),s=r(87),l=r(176),o=r(111),d=(r(95),r(151)),g=r(27),j=r(5),m=r(160),b=r(109),u=r(177),h=r(161),p=r(110),x=r(18),C=r(45),O=r.n(C),I=r(153),f=r(155),y=r(156),B=r(157),v=r(158),w=r(159),N="CREATE_FILTER",S="CREATE_PRICE_FILTER",k="CREATE_NAME_PATTERN",E="ADD_TO_BASKET",Q="DELETE_FROM_BASKET",D="CHANGE_CARD_COUNT";function H(e){return{type:E,payload:e}}function P(e){return{type:Q,payload:e}}var W=r(1),R=Object(d.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),width:"50%"},h3:{margin:0},summ:{backgroundColor:"#fdfdd5"}}}));var G={addToBasket:H,deleteFromBasket:P,changeCardCount:function(e){return{type:D,payload:e}}},T=Object(x.b)((function(e){return{basket:e.basket.basket}}),G)((function(e){var a=e.basket,r=e.deleteFromBasket,t=e.changeCardCount,c=R();return a.length?Object(W.jsxs)(I.a,{children:[a.map((function(e,c){return Object(W.jsxs)(f.a,{children:[Object(W.jsx)(y.a,{primary:e.card.name,secondary:"".concat(e.card.price,"$ x ").concat(e.count)}),Object(W.jsxs)(B.a,{children:[Object(W.jsx)(b.a,{edge:"end","aria-label":"comments",onClick:function(){return function(e){if(1!==a[e].count){var c=a[e].count,n={card:a[e].card,count:--c};t([e,n])}else r(e)}(c)},children:Object(W.jsx)(v.a,{})}),Object(W.jsx)(b.a,{edge:"end","aria-label":"comments",onClick:function(){return function(e){var r=a[e].count,c={card:a[e].card,count:++r};t([e,c])}(c)},children:Object(W.jsx)(w.a,{})})]})]},e.card.id)})),Object(W.jsx)(f.a,{className:c.summ,children:Object(W.jsx)(y.a,{primary:"Itog:",secondary:"".concat(function(){var e=0;return a.forEach((function(a){e+=a.count*a.card.price})),e}()," $")})})]}):Object(W.jsx)("h3",{className:c.h3,children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"})})),L=Object(j.a)((function(e){return{badge:{right:-3,top:13,border:"2px solid ".concat(e.palette.background.paper),padding:"0 4px"}}}))(m.a),Y=Object(d.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),width:"50%"},shoppingCart:{height:"4vh",width:"4vh"},basketWrapper:{margin:"0 10px"}}}));var Z=Object(x.b)((function(e){return{basket:e.basket.basket}}),null)((function(e){var a=e.basket,r=Y(),t=i.a.useState(!1),c=Object(A.a)(t,2),n=c[0],s=c[1];return Object(W.jsxs)("div",{className:r.basketWrapper,children:[Object(W.jsx)(b.a,{"aria-label":"cart",onClick:function(){s(!0)},children:Object(W.jsx)(L,{badgeContent:a.length||null,color:"secondary",children:Object(W.jsx)(O.a,{className:r.shoppingCart})})}),Object(W.jsx)(u.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:r.modal,open:n,onClose:function(){s(!1)},closeAfterTransition:!0,BackdropComponent:h.a,BackdropProps:{timeout:500},children:Object(W.jsx)(p.a,{in:n,children:Object(W.jsxs)("div",{className:r.paper,children:[Object(W.jsx)("h2",{id:"transition-modal-title",children:"Basket"}),Object(W.jsx)(T,{})]})})})]})})),U=r(180),M=r(84),F=r.n(M),z=Object(d.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",width:"40%",height:"4vh"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10}}}));var X={setNamePattern:function(e){return{type:k,payload:e}}},V=Object(x.b)(null,X)((function(e){var a=e.setNamePattern,r=z();return Object(W.jsxs)(o.a,{component:"form",className:r.root,children:[Object(W.jsx)(U.a,{className:r.input,placeholder:"Search",onChange:function(e){a(e.target.value)}}),Object(W.jsx)(b.a,{type:"submit",className:r.iconButton,"aria-label":"search",disabled:!0,children:Object(W.jsx)(F.a,{})})]})})),J=r.p+"static/media/harvest.6aaf6395.svg",q=r(164),K=r(181),_=r(163),$=r(85),ee=r.n($),ae=r(86),re=r.n(ae),te=r(162);function ce(e){var a=e.onChange,r=e.value;return Object(W.jsx)("div",{children:Object(W.jsx)(te.a,{checked:r,onChange:a,name:"checkedA",inputProps:{"aria-label":"secondary checkbox"}})})}var ne=r(51),ie=Object(d.a)({list:{width:250},fullList:{width:"auto"},switcher:{textAlign:"center"},buttonMenu:{height:"4vh"},li:{position:"relative"},link:{textDecoration:"none",width:"100%",position:"absolute",textAlign:"center"}},{name:"newMenu"});function Ae(e){var a=e.onClick,r=ie(),t=i.a.useState(!1),c=Object(A.a)(t,2),n=c[0],s=c[1],l=function(e){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&s(e)}};return Object(W.jsxs)("div",{children:[Object(W.jsx)(q.a,{className:r.buttonMenu,"aria-controls":"customized-menu","aria-haspopup":"true",variant:"contained",color:"primary",onClick:l(!0),children:"Open Menu"}),Object(W.jsxs)(K.a,{anchor:"right",open:n,onClose:l(!1),children:[Object(W.jsx)("div",{className:r.list,role:"presentation",onClick:l(!1),onKeyDown:l(!1),children:Object(W.jsxs)(I.a,{children:[Object(W.jsxs)(f.a,{className:r.li,button:!0,children:[Object(W.jsx)(_.a,{children:Object(W.jsx)(ee.a,{fontSize:"small"})}),Object(W.jsx)(g.b,{className:r.link,to:"/profile",color:"primary",children:Object(W.jsx)(ne.a,{color:"textPrimary",children:"Profile"})})]}),Object(W.jsxs)(f.a,{className:r.li,button:!0,children:[Object(W.jsx)(_.a,{children:Object(W.jsx)(re.a,{fontSize:"small"})}),Object(W.jsx)(g.b,{className:r.link,to:"/",color:"primary",children:Object(W.jsx)(ne.a,{color:"textPrimary",children:"Home"})})]}),Object(W.jsxs)(f.a,{className:r.li,button:!0,children:[Object(W.jsx)(_.a,{children:Object(W.jsx)(O.a,{fontSize:"small"})}),Object(W.jsx)(g.b,{className:r.link,to:"/basket",color:"primary",children:Object(W.jsx)(ne.a,{color:"textPrimary",children:"Basket"})})]}),Object(W.jsxs)(f.a,{className:r.li,button:!0,children:[Object(W.jsx)(_.a,{children:Object(W.jsx)(O.a,{fontSize:"small"})}),Object(W.jsx)(g.b,{className:r.link,to:"/Table",color:"primary",children:Object(W.jsx)(ne.a,{color:"textPrimary",children:"table"})})]}),Object(W.jsxs)(f.a,{className:r.li,button:!0,children:[Object(W.jsx)(_.a,{children:Object(W.jsx)(O.a,{fontSize:"small"})}),Object(W.jsx)(g.b,{className:r.link,to:"/Task1",color:"primary",children:Object(W.jsx)(ne.a,{color:"textPrimary",children:"task1"})})]})]})}),Object(W.jsx)("div",{className:r.switcher,children:Object(W.jsx)(ce,{onChange:a})})]})]})}function se(e){var a=e.onClick,r=le();return Object(W.jsx)("div",{className:r.header,children:Object(W.jsxs)("div",{className:r.headerWrapper,children:[Object(W.jsx)(g.b,{to:"/",children:Object(W.jsx)("img",{className:r.logo,src:J})}),Object(W.jsx)(V,{}),Object(W.jsxs)("div",{className:r.menuPlusBasket,children:[Object(W.jsx)(Z,{}),Object(W.jsx)(Ae,{onClick:a})]})]})})}var le=Object(d.a)({header:{background:"linear-gradient(90deg, rgba(241,255,246,1) 0%, rgba(104,233,149,1) 30%, rgba(6,198,60,1) 100%)",height:"13vh"},headerWrapper:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"90%",height:"100%",margin:"0 auto"},logo:{width:"10vh"},menuPlusBasket:{display:"flex",alignItems:"center"}},{name:"Header"}),oe=r(165),de=r(167),ge=r(166),je=r(179),me=Object(d.a)({root:{minWidth:275,maxWidth:300,marginBottom:20},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});var be={addToBasket:H,deleteFromBasket:P},ue=Object(x.b)((function(e){return{basket:e.basket.basket}}),be)((function(e){var a=e.basket,r=e.addToBasket,t=e.deleteFromBasket,c=e.card,n=me(),i=function(e){for(var r=0;r<a.length;r++)if(a[r].card.id===e)return r;return-1};return Object(W.jsxs)(oe.a,{className:n.root,variant:"outlined",children:[Object(W.jsxs)(ge.a,{children:[Object(W.jsx)(je.a,{checked:-1!==i(c.id),onChange:function(){var e=i(c.id);-1===e?r({card:c,count:1}):t(e)},color:"primary",inputProps:{"aria-label":"primary checkbox"}}),Object(W.jsx)(ne.a,{variant:"h5",component:"h2",children:c.name}),Object(W.jsx)(ne.a,{className:n.pos,color:"textSecondary",children:"".concat(c.price," $ ")}),Object(W.jsx)(ne.a,{variant:"body2",component:"p",children:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c: ".concat(c.maker)})]}),Object(W.jsx)(de.a,{children:Object(W.jsx)(q.a,{size:"small",children:"Learn More"})})]})}));var he=Object(d.a)({shopContent:{margin:"0 auto",display:"flex",flexWrap:"wrap",justifyContent:"space-between",width:"80%"}},{name:"ShopContent"}),pe=Object(x.b)((function(e){return{filter:e.filter}}),null)((function(e){var a=e.filter,r=e.data,t=he();return(r=r.filter((function(e){return(e.category===a.category||"All"===a.category)&&(e.price>=a.minPrice&&e.price<=a.maxPrice||null===a.minPrice)&&e.name.toLowerCase().startsWith(a.namePattern.toLowerCase())}))).length?Object(W.jsx)("div",{className:t.shopContent,children:r.map((function(e){return Object(W.jsx)(ue,{card:e},e.id)}))}):Object(W.jsx)("h3",{className:t.shopContent,children:"\u0422\u043e\u0432\u044b\u0440\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"})})),xe=r(20),Ce=r(168),Oe=r(169),Ie=r(182),fe=r(170),ye=r(178);var Be={currentFilter:function(e){return{type:N,payload:e}}},ve=Object(x.b)(null,Be)((function(e){var a=e.currentFilter,r=e.data,t=Object(xe.a)(new Set(r.map((function(e){return e.category})))),c=i.a.useState("All"),n=Object(A.a)(c,2),s=n[0],l=n[1];return Object(W.jsxs)(Ce.a,{component:"fieldset",children:[Object(W.jsx)(Oe.a,{component:"legend",children:"Select Category"}),Object(W.jsxs)(Ie.a,{"aria-label":"category",name:"category1",value:s,onChange:function(e){l(e.target.value),a(e.target.value)},children:[Object(W.jsx)(fe.a,{value:"All",control:Object(W.jsx)(ye.a,{}),label:"All"}),t.map((function(e,a){return Object(W.jsx)(fe.a,{value:e,control:Object(W.jsx)(ye.a,{}),label:e},a)}))]})]})})),we=r(183),Ne=Object(d.a)({root:{width:"100%"}});function Se(e){return"".concat(e," $")}var ke={setPriceFilter:function(e){return{type:S,payload:e}}},Ee=Object(x.b)(null,ke)((function(e){var a=e.setPriceFilter,r=e.data,t=Object(xe.a)(new Set(r.map((function(e){return e.price})))),c=Math.min.apply(Math,Object(xe.a)(t)),n=Math.max.apply(Math,Object(xe.a)(t)),s=Ne(),l=i.a.useState([c,n]),o=Object(A.a)(l,2),d=o[0],g=o[1];return Object(W.jsxs)("div",{className:s.root,children:[Object(W.jsx)(ne.a,{id:"range-slider",gutterBottom:!0,children:"Price range"}),Object(W.jsx)(we.a,{min:c,max:n,value:d,onChange:function(e,a){g(a)},onChangeCommitted:function(){a(d)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",getAriaValueText:Se})]})})),Qe=Object(d.a)({filters:{paddingTop:10,minWidth:200,height:"fit-content"},filtersWrapper:{margin:"0 auto",width:"80%"}},{name:"Filters"});function De(e){var a=e.data,r=Qe();return Object(W.jsx)(o.a,{className:r.filters,elevation:3,children:Object(W.jsxs)("div",{className:r.filtersWrapper,children:[Object(W.jsx)(ve,{data:a}),Object(W.jsx)(Ee,{data:a})]})})}var He=Object(d.a)({body:{},bodyWrapper:{display:"flex",width:"95%",marginTop:15,margin:"0 auto"}},{name:"Body"});function Pe(e){var a=e.data,r=He();return Object(W.jsx)("div",{className:r.body,children:Object(W.jsxs)("div",{className:r.bodyWrapper,children:[Object(W.jsx)(De,{data:a}),Object(W.jsx)(pe,{data:a})]})})}var We=r(14),Re=Object(d.a)({basketList:{height:"100vh",width:"60%",margin:"0 auto",padding:15}},{name:"Basket"});function Ge(){var e=Re();return Object(W.jsx)(o.a,{className:e.basketList,children:Object(W.jsx)(T,{})})}var Te=r.p+"static/media/cat.b6b2a4f7.jpg",Le=Object(d.a)({root:{width:"70%",margin:"0 auto",display:"flex"},userImg:{width:200,height:200,borderRadius:"50%",margin:15}},{name:"Profile"});function Ye(){var e=Le();return Object(W.jsxs)(o.a,{className:e.root,children:[Object(W.jsx)("img",{src:Te,className:e.userImg,alt:"cat"}),Object(W.jsxs)("div",{className:e.userInfo,children:[Object(W.jsx)("h2",{children:"\u0421\u043e\u0432\u0435\u0442\u043d\u0438\u043a\u043e\u0432 \u0412\u0438\u043a\u0442\u043e\u0440"}),Object(W.jsx)("h3",{children:"+7927***1104"})]})]})}var Ze=r(171),Ue=r(175),Me=r(174),Fe=r(172),ze=r(173),Xe=Object(d.a)({table:{},paper:{height:300,width:500,margin:"0 auto",overflow:"scroll"},row:{},th:{position:"absolute"}});function Ve(e,a,r,t,c){return{name:e,calories:a,fat:r,carbs:t,protein:c}}var Je=[Ve("Frozen yoghurt",159,6,24,4),Ve("Ice cream sandwich",237,9,37,4.3),Ve("Eclair",262,16,24,6),Ve("Cupcake",305,3.7,67,4.3),Ve("Gingerbread",356,16,49,3.9),Ve("Frozen yoghurt",159,6,24,4),Ve("Ice cream sandwich",237,9,37,4.3),Ve("Eclair",262,16,24,6),Ve("Cupcake",305,3.7,67,4.3),Ve("Gingerbread",356,16,49,3.9)];function qe(){var e=Xe();return Object(W.jsx)(o.a,{className:e.paper,children:Object(W.jsxs)(Ze.a,{stickyHeader:!0,className:e.table,size:"small","aria-label":"a dense table",children:[Object(W.jsx)(Fe.a,{children:Object(W.jsxs)(ze.a,{children:[Object(W.jsx)(Me.a,{children:"Dessert (100g serving)"}),Object(W.jsx)(Me.a,{align:"right",children:"Calories"}),Object(W.jsx)(Me.a,{align:"right",children:"Fat\xa0(g)"}),Object(W.jsx)(Me.a,{align:"right",children:"Carbs\xa0(g)"}),Object(W.jsx)(Me.a,{align:"right",children:"Protein\xa0(g)"}),Object(W.jsx)(Me.a,{children:"Dessert (100g serving)"}),Object(W.jsx)(Me.a,{align:"right",children:"Calories"}),Object(W.jsx)(Me.a,{align:"right",children:"Fat\xa0(g)"}),Object(W.jsx)(Me.a,{align:"right",children:"Carbs\xa0(g)"}),Object(W.jsx)(Me.a,{align:"right",children:"Protein\xa0(g)"})]})}),Object(W.jsx)(Ue.a,{children:Je.map((function(a){return Object(W.jsxs)(ze.a,{className:e.row,children:[Object(W.jsx)(Me.a,{className:e.th,component:"th",scope:"row",children:a.name}),Object(W.jsx)(Me.a,{align:"right",children:a.calories}),Object(W.jsx)(Me.a,{align:"right",children:a.fat}),Object(W.jsx)(Me.a,{align:"right",children:a.carbs}),Object(W.jsx)(Me.a,{align:"right",children:a.protein}),Object(W.jsx)(Me.a,{align:"right",children:a.calories}),Object(W.jsx)(Me.a,{align:"right",children:a.fat}),Object(W.jsx)(Me.a,{align:"right",children:a.carbs}),Object(W.jsx)(Me.a,{align:"right",children:a.protein}),Object(W.jsx)(Me.a,{align:"right",children:a.protein})]},a.name)}))})]})})}var Ke=r.p+"static/media/Task1Background.1cd053df.png",_e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAHCAYAAAA8sqwkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACCSURBVHgBjY6NDUQADIUfuQFOboFb5TboMYEJGIEJGMEASCewghUsICwgPCIh/l/S9DXva1MDVG2Lz/bGjT65Bq/RmEALA9El3cOdWcDKNeFCeAozm5jJrlQ7EvOCt4NTDZZxo8aRgu03j2pl+l/n5nYBHWz+W9JV9C6eqBH5jnWUDfl6HsmSrBz7AAAAAElFTkSuQmCC",$e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAHCAYAAAA8sqwkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTSURBVHgBfU67DcJAFPOL8qhhg2MDKOhhAzbIHjR5aY6SERiBMSIEUlZJfSfyOK5A+VzixpLt92wghfpqUItJWTRRGlmz4yY4rWd/wl7avp2N87lb3QMZKHbs+TH2Bwf5y5YEPf8FxZGf9jaZxG8LVQh1WiK1OyNxh0vVbyjmwrGoUwlPi7giCv6zDVRhAaS0+fEXUIgrh4InT/wAAAAASUVORK5CYII=",ea=r.p+"static/media/Card1Hover.24178d28.svg",aa=Object(d.a)({card:{width:"6%",position:"relative",flexGrow:"1",borderRadius:12,background:function(e){return e[0]},"&:hover":{backgroundImage:function(e){return"blue"===e[1]?"url(".concat(ea,")"):"url(".concat("data:image/png;base64,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",")")},backgroundRepeat:"no-repeat",backgroundSize:"cover"},color:"white",marginRight:16,overflow:"visible",display:"flex",justifyContent:"center",alignItems:"center"},wrapper:{width:"70%",margin:"0 auto"},overMainSum:{fontFamily:"Inter",color:"#657D95",fontSize:16,marginBottom:10},mainSumWrapper:{display:"flex",alignItems:"center"},differenceWrapper:{display:"flex",color:function(e){return"red"===e[2]?"red":"green"},alignItems:"center"},differenceImg:{margin:0,width:12,height:8,marginRight:5},mainSum:{fontSize:36,fontFamily:"Inter",lineHeight:"1",marginRight:10},mainSumCurr:{fontSize:20},divider:{color:"#657D95",padding:"10px 0px",opacity:"0.36",width:0,height:19},year:{color:"#657D95",fontSize:12},secondarySumWrapper:{display:"flex",alignItems:"baseline"},SecondarySum:{color:"#657D95",fontSize:18,paddingRight:5},secondarySumCurr:{color:"#657D95",fontSize:11},circle:{fontFamily:"Inter",zIndex:"1",display:"flex",justifyContent:"center",alignItems:"center",color:"#657D95",width:64,height:64,borderRadius:"50%",position:"absolute",backgroundColor:"#1F283C",top:"40%",right:-40},operation:{fontSize:30}},{name:"Task1"});function ra(e){var a=e.card,r=function(e,a){e=+e.split(" ").join(""),a=+a.split(" ").join("");var r=[null,null];e>a?(r[1]=Math.trunc(100*(e/a-Math.trunc(e/a))),r[0]="green"):(r[1]=Math.trunc(100*(a/e-Math.trunc(a/e))),r[0]="red");return r}(a.mainSum,a.secondarySum);console.log(r);var t=[a.color,a.background,r[0]],c=aa(t);return Object(W.jsxs)(oe.a,{className:c.card,children:[Object(W.jsxs)(ge.a,{className:c.wrapper,children:[Object(W.jsx)(ne.a,{className:c.overMainSum,children:a.header}),Object(W.jsxs)("div",{className:c.mainSumWrapper,children:[Object(W.jsx)(ne.a,{className:c.mainSum,children:a.mainSum}),Object(W.jsxs)("div",{className:c.differenceWrapper,children:[Object(W.jsx)("img",{className:c.differenceImg,src:"red"===r[0]?_e:$e}),Object(W.jsxs)(ne.a,{children:[" ","".concat("red"===r[0]?"-":"").concat(r[1]," %")]})]})]}),Object(W.jsx)(ne.a,{className:c.mainSumCurr,children:a.currency}),Object(W.jsx)("div",{className:c.divider,children:"|"}),Object(W.jsx)(ne.a,{className:c.year,children:"(".concat(a.year,")")}),Object(W.jsxs)("div",{className:c.secondarySumWrapper,children:[Object(W.jsx)(ne.a,{className:c.SecondarySum,children:a.secondarySum}),Object(W.jsx)(ne.a,{className:c.secondarySumCurr,children:a.secondaryCurrency})]})]}),Object(W.jsx)("div",{className:c.circle,children:Object(W.jsx)(ne.a,{className:c.operation,children:a.operation})})]})}var ta=Object(d.a)({dataWrapper:{},headerWrapper:{display:"flex",alignItems:"center",fontSize:12,color:"#657D95",marginBottom:10},headerImg:{width:18,height:18,marginRight:5},header:{fontSize:12},mainSumWrapper:{display:"flex",alignItems:"baseline"},differenceWrapper:{display:"flex",color:function(e){return"red"===e[0]?"red":"green"},alignItems:"center"},differenceImg:{width:12,height:8,marginRight:5},mainSum:{fontSize:20,fontFamily:"Inter",lineHeight:"1",marginRight:10},mainSumCurr:{fontSize:13,marginRight:5},divider:{border:"1px solid #657D95",opacity:"0.36",width:0,height:8},year:{color:"#657D95",fontSize:11},secondarySumWrapper:{marginTop:7,display:"flex",alignItems:"baseline"},SecondarySum:{color:"#657D95",fontSize:16,paddingRight:5},secondarySumCurr:{color:"#657D95",fontSize:11}},{name:"LargeCardData"});function ca(e){var a=e.data,r=e.currency,t=e.year,c=function(e,a){e=+e.split(" ").join(""),a=+a.split(" ").join("");var r=[null,null];e>a?(r[1]=Math.trunc(100*(e/a-Math.trunc(e/a))),r[0]="green"):(r[1]=Math.trunc(100*(a/e-Math.trunc(a/e))),r[0]="red");return r}(a.mainSum,a.secondarySum);console.log(c);var n="\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u044f\u0435\u0442"===a.header?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGxSURBVHgBrVNNTsJQEJ55Lf7EmPQIxcQ9nEA4AdxATERd1gWyhSUaA+zwZ4En0BvgDcCtJpYj1IUkAn3jm/6FNi26YJJm+t5887353swD2JBhVsCybON7x62ii6aPpIlAbTLo5Kf/ImKCme72QIjj1ATCIQpoJwnF6uKiaZuzLRqTEBUgakvXLd9fHyB/RFhUkCdCqkmiEWNTK+IAAzx2xHKWhFXcfP5VHPaKTqwidXpLOXMdCRvHGEMAxnbO6MakeWWqO0HEYUhSb9iFeuO9kEWmtPZZZs0aGxHRYul6CVJCPwSTWBqI+iiLTEr5yj6X269GRJrAQrDonjfsEX+CNC47k+zx9tAjQkCTvR4PU/wXw50c/GW6n0NTZG7ptgfBSafNjxKS9gyE5Yeb/CSZyHfImSjEOJK2WGgvnm4hSiEQpe5kkXhxci1fGrwF3rezq8+hchXV2uK69rMFs2Rzl+86+ZOoIrb5HPkEJ21qU0h4INV1QDuqMANk8puSAP1QmoqVJMGRuk9LJTnJwcWME1vqN/3RKjm7P3DZ6+Wd2D6skcCDGs4Yd3ZPNSVJsHH7BRx53x3cU99xAAAAAElFTkSuQmCC":"\u043f\u0440\u044f\u043c\u044b\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b"===a.header?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBrZNBTsJQEIZnXgE1xoQjFBP3cALgBHIDcWFkWWOIW1iqMZSdURPLDbyB3ABcuyhHwIUkFvvGmdY2pSlNF0zzOm3fvO/982YKsCPDbROW5Va/9/0O+miGkTRXaMwfb2uLQiABrEq+DUqdZS4gdFDBMA1UyZfejWuuKjQjpU6BaKh9v/10d4wyiLDBIRNC6mqid4nNVCQTEhDQEdvbUkjGed5Xw7Ebyw1FvPuAnZkHEZM5iSGA6l65OtpILZDJZ4KITh4kCeNcx5Jm15pVY9D6168HqjSMoaBprafiy+WjTgwyFAag5/vavCjo5eFkKh4BzRi0CwtABLQQ37v+bBVdeNF3gyxQqZn4ktzWa+OtUqFXbRijy767LALigzYDEMBHrMixa7J4wqMeBhDkDb6kUmayyqVoB89Di1U1Q7l4nteQFDbkgtUMo++YDvrvWlP+KQ0wjirJcy1N0GQ1Fi9aphsXs3Zk2IAfs39aTufgB67s8DhgKygJlEaNekwqe8hFSQN2bn8PH8K+QEPvmAAAAABJRU5ErkJggg==":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFjSURBVHgBrZNNTsJAFMffexCjceMRWhP3cgLhBHgD2Igu6wLclqUak7IjurDewBvgDewB1HKEbiQR7DzfDJbUSRsq4SXNzGTe+/V9/AdgS4ZlF54XH3zupqeYorP05IiwFo2v3WklkAbM6mkARJ3CAMYQCYY2kPKHi6vYme3wKxO1gXmo0rR1f3OI+mPGhrg8MXJXMU+0b2FG+kI7GDpiq6yEMqtnG/m7L+U4AnH/C1mVZtKUniBiWAXSG8QduzQDWnynxyYrBSOoYqxcu0+mtBqhAT3culFR3Hk/nvzhIGuA8wsz/axDtRTWepipnfXfuoj0SDLu8d3Ry7qgXv/dB8ROfrrLHi1qz3pVRE2oYkixLZGVjnqDj1CWtjg0Nh6/tvkcPVmSItVWSjJ/yKnb0W9KAYyyScpdUzGcMLAnQUlpaRbMl23xoxXR7n3BZRC4SWlGNlALNdOYZDLdl6HYgK3bD+rnrHS8SsF5AAAAAElFTkSuQmCC",i=ta(c);return Object(W.jsxs)("div",{className:i.dataWrapper,children:[Object(W.jsxs)("div",{className:i.headerWrapper,children:[Object(W.jsx)("img",{className:i.headerImg,src:n}),Object(W.jsx)(ne.a,{className:i.header,children:a.header})]}),Object(W.jsxs)("div",{className:i.mainSumWrapper,children:[Object(W.jsx)(ne.a,{className:i.mainSum,children:a.mainSum}),Object(W.jsx)(ne.a,{className:i.mainSumCurr,children:r}),Object(W.jsxs)("div",{className:i.differenceWrapper,children:[Object(W.jsx)("img",{className:i.differenceImg,src:"red"===c[0]?_e:$e}),Object(W.jsxs)(ne.a,{children:[" ","".concat("red"===c[0]?"-":"").concat(c[1]," %")]})]})]}),Object(W.jsx)("div",{className:i.divider}),Object(W.jsxs)("div",{className:i.secondarySumWrapper,children:[Object(W.jsx)(ne.a,{className:i.SecondarySum,children:a.secondarySum}),Object(W.jsx)(ne.a,{className:i.secondarySumCurr,children:r}),Object(W.jsx)(ne.a,{className:i.year,children:"(".concat(t,")")})]})]})}var na=Object(d.a)({card:{padding:0,position:"relative",flexGrow:"2",background:function(e){return e.color},color:"white",height:"100%",overflow:"visible",display:"flex",justifyContent:"center",alignItems:"center"},wrapper:{width:"93%",margin:"0 auto"},overMainSum:{fontFamily:"Inter",color:"#657D95",fontSize:16},mainSumWrapper:{display:"flex",alignItems:"center",marginBottom:24},mainSum:{fontSize:36,fontFamily:"Inter",lineHeight:"1",marginRight:10},mainSumCurr:{fontSize:20},cardDataWrapper:{display:"flex",justifyContent:"space-between"}},{name:"LargeCard"});function ia(e){var a=e.card,r=na(a);return Object(W.jsx)(oe.a,{className:r.card,children:Object(W.jsxs)(ge.a,{className:r.wrapper,children:[Object(W.jsx)(ne.a,{className:r.overMainSum,children:a.header}),Object(W.jsxs)("div",{className:r.mainSumWrapper,children:[Object(W.jsx)(ne.a,{className:r.mainSum,children:a.mainSum}),Object(W.jsx)(ne.a,{className:r.mainSumCurr,children:a.currency})]}),Object(W.jsxs)("div",{className:r.cardDataWrapper,children:[Object(W.jsx)(ca,{data:a.part1,currency:a.currency,year:a.year}),Object(W.jsx)(ca,{data:a.part2,currency:a.currency,year:a.year}),Object(W.jsx)(ca,{data:a.part3,currency:a.currency,year:a.year})]})]})})}var Aa=Object(d.a)({paper:{backgroundImage:"url(".concat(Ke,")"),backgroundSize:"100% 100%",height:"50%",maxWidth:1464,maxHeight:440,minWidth:1024,margin:"auto",color:"white",display:"flex",justifyContent:"center",alignItems:"center"},wrapper:{width:"95%",height:"82%"},header:{fontFamily:"Inter",display:"flex",alignItems:"center",fontSize:14,fontWeight:"200"},headerImg:{marginRight:15},cardWrapper:{marginLeft:4,marginTop:40,height:"75%",display:"flex"}},{name:"Task1"}),sa={header:"\u0442\u0430\u0440\u0438\u0444 (2020)",mainSum:"419",currency:"\u0440./\u0435\u0434.",year:2019,secondarySum:"436",secondaryCurrency:"\u0440./\u0435\u0434.",color:"rgba(87, 148, 222, 0.2)",background:"blue",operation:"x"},la={header:"\u043e\u0431\u044a\u0435\u043c \u0440\u0435\u0441\u0443\u0440\u0441\u0430 (2020)",mainSum:"11 292",currency:"\u0434\u043e\u043a.",year:2019,secondarySum:"9 864",secondaryCurrency:"\u0447\u0435\u043b./\u0447.",color:"rgba(78,142,150,0.2)",background:"green",operation:"="},oa={header:"\u0422\u0421\u041e \u043c\u043e\u0434\u0435\u043b\u0438 (2020):",mainSum:"2 663",currency:"\u043c\u043b\u043d. \u0440.",year:2019,part1:{header:"\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u044f\u0435\u0442",mainSum:"2 596",secondarySum:"2 421"},part2:{header:"\u043f\u0440\u044f\u043c\u044b\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b",mainSum:"67",secondarySum:"66"},part3:{header:"\u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442",mainSum:"2 658",secondarySum:"2 705"},color:"rgba(107,117,202,0.2)"};function da(){var e=Aa();return Object(W.jsx)(o.a,{className:e.paper,children:Object(W.jsxs)("div",{className:e.wrapper,children:[Object(W.jsxs)("div",{className:e.header,children:[Object(W.jsx)("img",{className:e.headerImg,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJQSURBVHgB7VZBbtNAFH3fTtkhwgnIDYAT4O5L6koJFSuSE5AbxDlB2xu0K2iDVCfqPjlCOEHNCciCSojEHv6MTYmT2vNNQaJS3sLOOM9/nv/8+W+ALbb4D0ESkrr06/ix9PCoNqODMLLyh/sTvnn8K6D2eGDjW0Wo8z0fjnuZDedAfEDtq2khf+h7fJ3cPvhGT6kbzlECBzY4bn9lVEfi9Er5NcygEKWKENkEyEToiXNv0BM7X404ybu4oZcQoGan0AkHPcoGc8TJqJS+SALETkBv7bVzO4OEpD74Dbixhxs3xGMW5NIACx6T8w6mADOBhNAEbY26qACRiJwgvVOW6hrry5SLSh1qhWcQQlITeSyTfqkADaVO1XDPw78QwVlo8Gf2ZOzcrvpzEXrP575okQgFGHjqwn8hITrFAppHadNxJ+rj63RyoueohFgkomSLrqTddfrqvKnroLwWNkLUvkpoZcsx/R0MIR2OAyRU3iPWodQXCa04E0vqYgf7RkMrPDHPHCNMVnC6Zb8JZxJq9T7xqXkMRe+txISN7vAqhACVRQiEsGFxRyX1ipdvAJX4cHFNrfHZXxVhhFz4HZ7ol6fUU+dk44qdY+0bG5ZOOC1q5wIDW5tcB08Sj/PdYO/oFbZnFev/V8bo8PX+IlhAX5+W2M6zB+oZX+8WQW6kZ14RERXFFbdtY1xaQB5ekUdQO5ya2gD0Dpki5vNFAeSZ+M7rfid7p/CQw0ICvgWwQJwJc0jZTOmcbf0z7olqVp6mdJqN+CxJu1VOUFts8aDwE04+zrwWfp5NAAAAAElFTkSuQmCC"}),"\u0421\u0431\u0435\u0440\u0431\u0430\u043d\u043a \u0431\u0438\u0437\u043d\u0435\u0441 \u041e\u043d\u041b@\u0439\u043d"]}),Object(W.jsxs)("div",{className:e.cardWrapper,children:[Object(W.jsx)(ra,{card:sa}),Object(W.jsx)(ra,{card:la}),Object(W.jsx)(ia,{card:oa})]})]})})}function ga(e){var a=e.data,r=Object(n.useState)(!1),t=Object(A.a)(r,2),c=t[0],i=t[1],d=Object(s.a)({palette:{type:c?"dark":"light"}});return Object(W.jsx)(l.a,{theme:d,children:Object(W.jsx)(o.a,{style:{height:"100vh",overflowY:"scroll"},children:Object(W.jsxs)(g.a,{children:[Object(W.jsx)(se,{onClick:function(){return i(!c)}}),Object(W.jsxs)(We.c,{children:[Object(W.jsx)(We.a,{path:"/Table",children:Object(W.jsx)(qe,{})}),Object(W.jsx)(We.a,{path:"/Task1",children:Object(W.jsx)(da,{})}),Object(W.jsx)(We.a,{path:"/basket",children:Object(W.jsx)(Ge,{})}),Object(W.jsx)(We.a,{path:"/profile",children:Object(W.jsx)(Ye,{})}),Object(W.jsx)(We.a,{path:"/",children:Object(W.jsx)(Pe,{data:a})})]})]})})})}var ja=r(36),ma=r(23),ba={category:"All",minPrice:null,maxPrice:null,namePattern:""},ua={basket:[]},ha=Object(ja.b)({filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ba,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case N:return Object(ma.a)(Object(ma.a)({},e),{},{category:a.payload});case S:return Object(ma.a)(Object(ma.a)({},e),{},{minPrice:a.payload[0],maxPrice:a.payload[1]});case k:return Object(ma.a)(Object(ma.a)({},e),{},{namePattern:a.payload});default:return e}},basket:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ua,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case E:return Object(ma.a)(Object(ma.a)({},e),{},{basket:e.basket.concat(a.payload)});case Q:return Object(ma.a)(Object(ma.a)({},e),{},{basket:e.basket.filter((function(e,r){return r!==a.payload}))});case D:var r=e.basket.splice(a.payload[0]+1,e.basket.length),t=e.basket.splice(0,a.payload[0]),c=a.payload[1];return Object(ma.a)(Object(ma.a)({},e),{},{basket:t.concat(c,r)});default:return e}}}),pa=[{name:"banana",price:10,id:12314123,category:"fruits",maker:"vitya"},{name:"banana123",price:10,id:123141234,category:"fruits",maker:"vitya"},{name:"apple",price:20,id:1241123,category:"fruits",maker:"vitya"},{name:"strawberry",price:30,id:2654823,category:"fruits",maker:"leejoungsuk"},{name:"pineapple",price:40,id:7863425,category:"fruits",maker:"uskor"},{name:"peach",price:50,id:245393,category:"fruits",maker:"leerlub"},{name:"mango",price:55,id:7634425,category:"fruits",maker:"uskor"},{name:"tomato",price:45,id:67234823,category:"vegetables",maker:"vegin"},{name:"carrot",price:60,id:7867890,category:"vegetables",maker:"vigin"},{name:"cauliflower",price:73,id:6723423,category:"vegetables",maker:"cucs"},{name:"cucumber",price:82,id:78688901,category:"vegetables",maker:"cucs"},{name:"lemonade",price:94,id:6408003,category:"drinks",maker:"juiss"},{name:"yogurt",price:7,id:7813890,category:"drinks",maker:"juiss"},{name:"juice",price:130,id:6430983,category:"drinks",maker:"juiss"},{name:"milk",price:95,id:7821897,category:"drinks",maker:"juiss"},{name:"b",price:10,id:123141231,category:"fruits",maker:"vitya"},{name:"ban",price:10,id:123141232,category:"fruits",maker:"vitya"},{name:"banan",price:10,id:123141233,category:"fruits",maker:"vitya"}],xa=Object(ja.d)(ha,Object(ja.c)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),Ca=Object(W.jsx)(x.a,{store:xa,children:Object(W.jsx)(ga,{data:pa})});c.a.render(Ca,document.getElementById("root"))},95:function(e,a,r){}},[[107,1,2]]]);
//# sourceMappingURL=main.6a9594e9.chunk.js.map