(this.webpackJsonpreceiptkeeperfrontend=this.webpackJsonpreceiptkeeperfrontend||[]).push([[0],{129:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),i=a(26),l=a.n(i),r=(a(67),a(18)),s=a(19),o=a(7),h=a(24),u=a(23),p=a(29),m=(a(49),a(15)),d=a(16),g=a(30),E=a.n(g),b=(a(50),function(){return fetch("".concat("","/receipts")).then((function(e){return e.json()}))}),f=function(e){return fetch("".concat("","/receipts/add"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))},v=function(e){return fetch("".concat("","/receipts/").concat(e),{method:"DELETE"}).then((function(e){return e.json()}))},y=function(e,t){return fetch("".concat("","/receipts/").concat(e),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()}))},C=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={receipt_id:e.receipt._id,name:e.receipt.name,description:e.receipt.description,image_url:e.receipt.image_url,price:e.receipt.price,purchase_date:new Date(e.receipt.purchase_date),editMode:!1},n.switchMode=n.switchMode.bind(Object(o.a)(n)),n.saveReceipt=n.saveReceipt.bind(Object(o.a)(n)),n.handleChange=n.handleChange.bind(Object(o.a)(n)),n.handleDateChange=n.handleDateChange.bind(Object(o.a)(n)),n.deleteReceipt=n.deleteReceipt.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"switchMode",value:function(){this.setState({editMode:!this.state.editMode})}},{key:"deleteReceipt",value:function(){var e=this;window.confirm("Are you sure you want to permanently delete ".concat(this.state.name,"?"))&&v(this.state.receipt_id).then((function(t){console.log("Successfully deleted!"),e.props.fetchReceipts()})).catch((function(e){console.log("Error with deleting receipt")}))}},{key:"saveReceipt",value:function(){var e=this;this.switchMode(),y(this.state.receipt_id,{name:this.state.name,description:this.state.description,image_url:this.state.image_url,price:this.state.price,purchase_date:this.state.purchase_date}).then((function(t){console.log("Successfully updated!"),e.props.fetchReceipts()})).catch((function(e){console.log("Error with updating receipt")}))}},{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleDateChange",value:function(e){this.setState({purchase_date:e})}},{key:"render",value:function(){return c.a.createElement("div",{className:"receiptContainer"},c.a.createElement("h1",null,this.state.name),c.a.createElement("div",{className:"actions"},c.a.createElement("span",{id:"save",hidden:!this.state.editMode,role:"img","aria-label":"save",onClick:this.saveReceipt},c.a.createElement(m.a,{className:"icon",icon:d.a})),c.a.createElement("span",{hidden:this.state.editMode,role:"img","aria-label":"edit",onClick:this.switchMode},c.a.createElement(m.a,{className:"icon",icon:d.b})),c.a.createElement("span",null,c.a.createElement("a",{href:this.state.image_url,target:"_blank",rel:"noopener noreferrer"},c.a.createElement(m.a,{className:"icon",icon:d.c}))),c.a.createElement("span",{id:"delete",role:"img","aria-label":"delete",onClick:this.deleteReceipt},c.a.createElement(m.a,{className:"icon",icon:d.d}))),c.a.createElement("div",{hidden:this.state.editMode,className:"receiptDetails"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("b",null,"Name:")," ",this.state.name),c.a.createElement("li",null,c.a.createElement("b",null,"Description:")," ",this.state.description),c.a.createElement("li",null,c.a.createElement("b",null,"Price:")," \xa3",this.state.price),c.a.createElement("li",null,c.a.createElement("b",null,"Purchase Date:")," ",this.state.purchase_date.toLocaleDateString("en-GB")))),c.a.createElement("div",{hidden:!this.state.editMode,className:"receiptDetails"},c.a.createElement("form",null,c.a.createElement("label",null,c.a.createElement("b",null,"Name:")," "),c.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange})," ",c.a.createElement("br",null),c.a.createElement("label",null,c.a.createElement("b",null,"Description:")," "),c.a.createElement("input",{type:"text",name:"description",value:this.state.description,onChange:this.handleChange}),c.a.createElement("br",null),c.a.createElement("label",null,c.a.createElement("b",null,"Price:")," "),c.a.createElement("input",{type:"text",name:"price",value:this.state.price,onChange:this.handleChange})," ",c.a.createElement("br",null),c.a.createElement("label",null,c.a.createElement("b",null,"Image Url:")," "),c.a.createElement("input",{type:"text",name:"image_url",value:this.state.image_url,onChange:this.handleChange})," ",c.a.createElement("br",null),c.a.createElement("label",null,c.a.createElement("b",null,"Purchase Date:")," "),c.a.createElement(E.a,{dateFormat:"dd/MM/yyyy",selected:this.state.purchase_date,onChange:this.handleDateChange}))))}}]),a}(c.a.Component),R=(a(129),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={name:"Untitled Receipt",description:"",price:0,image_url:"",purchase_date:new Date},n.handleChange=n.handleChange.bind(Object(o.a)(n)),n.handleDateChange=n.handleDateChange.bind(Object(o.a)(n)),n.saveReceipt=n.saveReceipt.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"saveReceipt",value:function(){var e=this;f({name:this.state.name,description:this.state.description,image_url:this.state.image_url,price:this.state.price,purchase_date:this.state.purchase_date}).then((function(t){console.log("Successfully saved!"),e.props.fetchReceipts(),e.props.newReceiptToggle()})).catch((function(e){console.log(e),console.log("Failed to save receipt")}))}},{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleDateChange",value:function(e){this.setState({purchase_date:e})}},{key:"render",value:function(){return c.a.createElement("div",{className:"receiptContainer"},c.a.createElement("h1",null,this.state.name),c.a.createElement("div",{className:"actions"},c.a.createElement("span",{id:"save",role:"img","aria-label":"save",onClick:this.saveReceipt},c.a.createElement(m.a,{className:"icon",icon:d.a}))),c.a.createElement("div",{className:"receiptDetails"},c.a.createElement("form",null,c.a.createElement("label",null,c.a.createElement("b",null,"Name:")," "),c.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange})," ",c.a.createElement("br",null),c.a.createElement("label",null,c.a.createElement("b",null,"Description:")," "),c.a.createElement("input",{type:"text",name:"description",value:this.state.description,onChange:this.handleChange}),c.a.createElement("br",null),c.a.createElement("label",null,c.a.createElement("b",null,"Price:")," "),c.a.createElement("input",{type:"text",name:"price",value:this.state.price,onChange:this.handleChange})," ",c.a.createElement("br",null),c.a.createElement("label",null,c.a.createElement("b",null,"Image Url:")," "),c.a.createElement("input",{type:"text",name:"image_url",value:this.state.image_url,onChange:this.handleChange})," ",c.a.createElement("br",null),c.a.createElement("label",null,c.a.createElement("b",null,"Purchase Date:")," "),c.a.createElement(E.a,{dateFormat:"dd/MM/yyyy",selected:this.state.purchase_date,onChange:this.handleDateChange}))))}}]),a}(c.a.Component)),w=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={loaded:!1,newReceipt:!1,receipts:[]},n.fetchReceipts=n.fetchReceipts.bind(Object(o.a)(n)),n.newReceiptToggle=n.newReceiptToggle.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"fetchReceipts",value:function(){var e=this;b().then((function(t){e.setState({receipts:t.sort((function(e,t){return new Date(t.purchase_date)-new Date(e.purchase_date)}))})}))}},{key:"newReceiptToggle",value:function(){this.setState({newReceipt:!this.state.newReceipt})}},{key:"componentDidMount",value:function(){this.fetchReceipts()}},{key:"render",value:function(){var e=this,t=this.state.receipts.map((function(t){return c.a.createElement(C,{key:t._id,receipt:t,fetchReceipts:e.fetchReceipts})}));return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Receipt Keeper ",c.a.createElement("span",{role:"img","aria-label":"Receipt"},"\ud83e\uddfe")," "),c.a.createElement("nav",null,c.a.createElement("button",{type:"button",className:"navButton",onClick:this.newReceiptToggle},"New Receipt"),c.a.createElement("button",{type:"button",className:"navButton"},"About")),this.state.newReceipt?c.a.createElement(R,{newReceiptToggle:this.newReceiptToggle,fetchReceipts:this.fetchReceipts}):null,t)}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},49:function(e,t,a){},62:function(e,t,a){e.exports=a(131)},67:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.df663412.chunk.js.map