(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{79:function(e,a,t){"use strict";t.r(a);var r=t(11),n=t.n(r),c=t(0),i=t.n(c);var o=t(117),l=t(120),s=t(123),u=t(122),d=t(124),m=t(81),j=t(6),b=Object(o.a)({root:{minWidth:275,maxWidth:300,marginBottom:20},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function p(e){var a=e.card,t=b();return Object(j.jsxs)(l.a,{className:t.root,children:[Object(j.jsxs)(u.a,{children:[Object(j.jsx)(m.a,{variant:"h5",component:"h2",children:a.name}),Object(j.jsx)(m.a,{className:t.pos,color:"textSecondary",children:"".concat(a.price," $ ")}),Object(j.jsx)(m.a,{variant:"body2",component:"p",children:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c: ".concat(a.maker)})]}),Object(j.jsx)(s.a,{children:Object(j.jsx)(d.a,{size:"small",children:"Learn More"})})]})}var O=t(19);var g=Object(o.a)({shopContent:{margin:"0 auto",display:"flex",flexWrap:"wrap",justifyContent:"space-between",width:"80%"}},{name:"ShopContent"}),y=Object(O.b)((function(e){return console.log(e.filter),{filter:e.filter}}),null)((function(e){var a=e.filter,t=e.data,r=g();return(t=t.filter((function(e){return(e.category===a.category||"All"===a.category)&&(e.price>=a.minPrice&&e.price<=a.maxPrice||null===a.minPrice)&&e.name.startsWith(a.namePattern)}))).length?Object(j.jsx)("div",{className:r.shopContent,children:t.map((function(e,a){return Object(j.jsx)(p,{card:e},a)}))}):Object(j.jsx)("h3",{className:r.shopContent,children:"\u0422\u043e\u0432\u044b\u0440\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"})})),f=t(14),h=t(15),v=t(128),x=t(129),k=t(126),E=t(130),P=t(125),_="CREATE_FILTER",w="CREATE_PRICE_FILTER",C="CREATE_NAME_PATTERN";var N={currentFilter:function(e){return{type:_,payload:e}}},S=Object(O.b)(null,N)((function(e){var a=e.currentFilter,t=e.data,r=Object(h.a)(new Set(t.map((function(e){return e.category})))),n=i.a.useState("All"),c=Object(f.a)(n,2),o=c[0],l=c[1];return Object(j.jsxs)(E.a,{component:"fieldset",children:[Object(j.jsx)(P.a,{component:"legend",children:"Select Category"}),Object(j.jsxs)(x.a,{"aria-label":"category",name:"category1",value:o,onChange:function(e){l(e.target.value),a(e.target.value)},children:[Object(j.jsx)(k.a,{value:"All",control:Object(j.jsx)(v.a,{}),label:"All"}),r.map((function(e,a){return Object(j.jsx)(k.a,{value:e,control:Object(j.jsx)(v.a,{}),label:e},a)}))]})]})})),T=t(131),A=Object(o.a)({root:{width:300}});function R(e){return"".concat(e," $")}var F={setPriceFilter:function(e){return{type:w,payload:e}}},I=Object(O.b)(null,F)((function(e){var a=e.setPriceFilter,t=e.data,r=Object(h.a)(new Set(t.map((function(e){return e.price})))),n=Math.min.apply(Math,Object(h.a)(r)),c=Math.max.apply(Math,Object(h.a)(r)),o=A(),l=i.a.useState([n,c]),s=Object(f.a)(l,2),u=s[0],b=s[1];return Object(j.jsxs)("div",{className:o.root,children:[Object(j.jsx)(m.a,{id:"range-slider",gutterBottom:!0,children:"Price range"}),Object(j.jsx)(T.a,{min:n,max:c,value:u,onChange:function(e,a){b(a)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",getAriaValueText:R}),Object(j.jsx)(d.a,{variant:"outlined",color:"primary",onClick:function(){a(u)},children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440"})]})})),L=t(127);var M=Object(o.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}})),W={setNamePattern:function(e){return{type:C,payload:e}}},D=Object(O.b)(null,W)((function(e){var a=e.setNamePattern,t=M();return Object(j.jsx)("form",{className:t.root,noValidate:!0,autoComplete:"off",children:Object(j.jsx)(L.a,{id:"standard-basic",label:"Standard",onChange:function(e){a(e.target.value)}})})}));function B(e){var a=e.data,t=V();return Object(j.jsxs)("div",{className:t.filtersWrapper,children:[Object(j.jsx)(S,{data:a}),Object(j.jsx)(D,{}),Object(j.jsx)(I,{data:a})]})}var V=Object(o.a)({filtersWrapper:{display:"flex",justifyContent:"space-around"}},{name:"Filters"}),X=t(26),z=t(30),J={category:"All",minPrice:null,maxPrice:null,namePattern:""},U=Object(X.b)({filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case _:return Object(z.a)(Object(z.a)({},e),{},{category:a.payload});case w:return Object(z.a)(Object(z.a)({},e),{},{minPrice:a.payload[0],maxPrice:a.payload[1]});case C:return Object(z.a)(Object(z.a)({},e),{},{namePattern:a.payload});default:return e}}}),$=[{name:"banana",price:10,id:12314123,category:"fruits",maker:"vitya"},{name:"banana123",price:10,id:123141234,category:"fruits",maker:"vitya"},{name:"apple",price:20,id:1241123,category:"fruits",maker:"vitya"},{name:"strawberry",price:30,id:2654823,category:"fruits",maker:"leejoungsuk"},{name:"pineapple",price:40,id:7863425,category:"fruits",maker:"uskor"},{name:"peach",price:50,id:245393,category:"fruits",maker:"leerlub"},{name:"mango",price:55,id:7634425,category:"fruits",maker:"uskor"},{name:"tomato",price:45,id:67234823,category:"vegetables",maker:"vegin"},{name:"carrot",price:60,id:7867890,category:"vegetables",maker:"vigin"},{name:"cauliflower",price:73,id:6723423,category:"vegetables",maker:"cucs"},{name:"cucumber",price:82,id:78688901,category:"vegetables",maker:"cucs"},{name:"lemonade",price:94,id:6408003,category:"drinks",maker:"juiss"},{name:"yogurt",price:7,id:7813890,category:"drinks",maker:"juiss"},{name:"juice",price:130,id:6430983,category:"drinks",maker:"juiss"},{name:"milk",price:95,id:7821897,category:"drinks",maker:"juiss"},{name:"b",price:10,id:123141231,category:"fruits",maker:"vitya"},{name:"ban",price:10,id:123141232,category:"fruits",maker:"vitya"},{name:"banan",price:10,id:123141233,category:"fruits",maker:"vitya"}],q=Object(X.d)(U,Object(X.c)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),G=Object(j.jsx)(O.a,{store:q,children:Object(j.jsxs)("div",{children:[Object(j.jsx)(B,{data:$}),Object(j.jsx)(y,{data:$})]})});n.a.render(G,document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.9996ae45.chunk.js.map