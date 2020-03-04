(this["webpackJsonplucas-nemeth-project-5"]=this["webpackJsonplucas-nemeth-project-5"]||[]).push([[0],{16:function(e,a,t){},19:function(e,a,t){e.exports=t(40)},24:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),c=t.n(l),s=(t(24),t(5)),i=t(6),h=t(8),o=t(7),m=t(9),u=t(13),p=t.n(u);p.a.initializeApp({apiKey:"AIzaSyALhgjyO_nxgg9Do-nH9CGwMvOE-9p4FyE",authDomain:"lucas-nemeth-project-5.firebaseapp.com",databaseURL:"https://lucas-nemeth-project-5.firebaseio.com",projectId:"lucas-nemeth-project-5",storageBucket:"lucas-nemeth-project-5.appspot.com",messagingSenderId:"656764515209",appId:"1:656764515209:web:e31e6147109ecfc0502758"});var d=p.a,v=t(18),f=(t(16),function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(h.a)(this,Object(o.a)(a).call(this))).handleImageChange=function(a){e.setState({imgFile:a.target.files[0],imgSrc:URL.createObjectURL(a.target.files[0])}),URL.revokeObjectURL(a.target.files[0])},e.deferred=function(a){e.props.fromPapa(a,e.props.handleFormSubmit)},e.emptyState=function(a){e.props.fromPapa(a,e.state),e.setState({charName:"",charClass:"",charLvl:"",charJournal:"",charInventory:"",imageUrlInput:""})},e.handleChange=function(a){e.setState(Object(v.a)({},a.target.name,a.target.value))},e.state={isHidden:!0},e}return Object(m.a)(a,e),Object(i.a)(a,[{key:"toggleHidden",value:function(){this.setState({isHidden:!this.state.isHidden})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{id:"charForm",action:"submit",onSubmit:this.emptyState,char:this.state.showImage},"  ",r.a.createElement("label",{htmlFor:"charName"},"Name: "),r.a.createElement("input",{type:"text",id:"charName",name:"charName",onChange:this.handleChange,value:this.state.charName}),r.a.createElement("label",{htmlFor:"charClass"},"Class: "),r.a.createElement("input",{type:"text",id:"charClass",name:"charClass",onChange:this.handleChange,value:this.state.charClass}),r.a.createElement("label",{htmlFor:"charLvl"},"Level: "),r.a.createElement("input",{type:"number",id:"charLvl",name:"charLvl",min:"1",max:"20",onChange:this.handleChange,value:this.state.charLvl}),r.a.createElement("label",{htmlFor:"charInventory"},"Inventory: "),r.a.createElement("textarea",{name:"charInventory",id:"charInventory",onChange:this.handleChange,value:this.state.charInventory}),r.a.createElement("label",{htmlFor:"charJournal"},"Current Quest: "),r.a.createElement("textarea",{id:"charJournal",name:"charJournal",onChange:this.handleChange,value:this.state.charJournal}),r.a.createElement("label",{htmlFor:"imageUrlInput"},"Character Portrait URL:"),r.a.createElement("input",{type:"text",name:"imageUrlInput",id:"imageUrlInput",onChange:this.handleChange,value:this.state.imageUrlInput}),r.a.createElement("img",{src:this.state.imgSrc,alt:"",width:"300px"}),r.a.createElement("button",{className:"submit",type:"submit"},"Submit")))}}]),a}(n.Component)),E=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(h.a)(this,Object(o.a)(a).call(this))).state={isHidden:!0,charObject:""},e}return Object(m.a)(a,e),Object(i.a)(a,[{key:"toggleInfoHidden",value:function(){this.setState({isHidden:!this.state.isHidden})}},{key:"render",value:function(){var e=this.props.char[0].name;return r.a.createElement("div",{className:"display"},r.a.createElement("ul",{className:"displayList"},r.a.createElement("li",null,r.a.createElement("h3",null,"Name: ",e.charName)),r.a.createElement("li",null,r.a.createElement("h3",null,"Class: ",e.charClass)),r.a.createElement("li",null,r.a.createElement("h3",null,"Level: ",e.charLvl)),r.a.createElement("li",null,r.a.createElement("h3",null,"Current Quest: ",e.charJournal)),r.a.createElement("li",null,r.a.createElement("h3",null,"Equipment: ",e.charInventory))))}}]),a}(n.Component),C=(t(39),function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(h.a)(this,Object(o.a)(a).call(this))).handleFormSubmit=function(a,t){a.preventDefault();var n=d.database().ref(),r={charName:t.charName,charClass:t.charClass,charLvl:t.charLvl,charJournal:t.charJournal,imageUrlInput:t.imageUrlInput,charInventory:t.charInventory};n.push(r),e.setState({charName:t.charName,charClass:t.charClass,charLvl:t.charLvl,charJournal:t.charJournal,imageUrlInput:t.imageUrlInput,charInventory:t.charInventory})},e.addCharacter=function(e){d.database().ref().child(e).push()},e.showForm=function(a){a.preventDefault(),e.setState({showNewCharForm:!0})},e.displayInfo=function(a){var t=e.state.newCharacter.filter((function(e){return e.key===a}));e.setState({showDisplayInfo:!0,showCharacter:t})},e.removeChar=function(e){d.database().ref().child(e).remove()},e.state={newCharacter:[],charName:"",charClass:"",charLvl:"",imageUrlInput:"",showNewCharForm:!1,showDisplayInfo:!1,test:[]},e}return Object(m.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.database().ref().on("value",(function(a){var t=[],n=a.val();for(var r in n){var l={key:r,name:n[r]};t.push(l)}e.setState({newCharacter:t})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"Adventure Base"))),r.a.createElement("main",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("h2",null,"My Characters"),r.a.createElement("ul",null,r.a.createElement("div",{className:"charContainer"},r.a.createElement("li",null,r.a.createElement("a",{href:""},r.a.createElement("div",{className:"charButtons"},r.a.createElement("button",{className:"newCharButton",onClick:this.showForm},r.a.createElement("i",{className:"fa fa-plus-square"})))))),this.state.newCharacter.map((function(a,t){return r.a.createElement("div",{key:t},r.a.createElement("li",null,r.a.createElement("a",null,r.a.createElement("div",{className:"createdChar"},r.a.createElement("button",{className:"createdCharButton",onClick:function(t){return e.displayInfo(a.key)}},r.a.createElement("div",{className:"imgContain"},r.a.createElement("i",{className:"fa fa-user-circle","font-size":"5rem"}))),r.a.createElement("button",{className:"deleteButton",onClick:function(){e.removeChar(a.key)}},"delete")))))}))),this.state.showDisplayInfo?r.a.createElement(E,{displayParent:this.displayInfo,char:this.state.showCharacter}):null,this.state.showNewCharForm?r.a.createElement(f,{fromPapa:this.handleFormSubmit}):null)))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.b30805a0.chunk.js.map