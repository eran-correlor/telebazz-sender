(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){},22:function(e,t,a){e.exports=a(40)},27:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/color-picker.0fc36b2a.png"},35:function(e,t,a){},37:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(19),c=a.n(o),r=(a(27),a(2)),i=a(3),l=a(5),u=a(4),m=a(6),p=a(7),h=(a(12),a(41)),d=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).click=a.click.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"click",value:function(){this.props.history.location.pathname.includes("IconPage")?this.props.history.goBack():this.props.history.location.pathname.includes("NewMessage")||this.props.history.location.pathname.includes("EditMessage")?this.props.history.replace("/"):this.props.history.goBack()}},{key:"render",value:function(){var e="";switch(this.props.pageName){case"HomePage":e="Telebuzz";break;case"NewMessage":e="\u05d4\u05d5\u05d3\u05e2\u05d4 \u05d7\u05d3\u05e9\u05d4";break;case"EditMessage":e="\u05e2\u05e8\u05d9\u05db\u05ea \u05d4\u05d5\u05d3\u05e2\u05d4";break;case"IconPage":e="\u05d1\u05d7\u05d9\u05e8\u05ea \u05d0\u05d9\u05d9\u05e7\u05d5\u05df";break;case"SendPage":e="\u05e9\u05d5\u05dc\u05d7 \u05d4\u05d5\u05d3\u05e2\u05d4";break;default:e=""}return void 0===this.props.history?s.a.createElement("div",null,s.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark sidebarNavigation"},s.a.createElement("a",{className:"navbar-brand",href:"#"},e))):s.a.createElement("div",null,s.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark sidebarNavigation"},s.a.createElement("div",{className:"navbar-brand",href:"#"},e),s.a.createElement("button",{className:"navbar-toggler leftNavbarToggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",null,s.a.createElement("div",{onClick:this.click,className:"text-light"},s.a.createElement("i",{className:"fas fa-arrow-left"}))))))}}]),t}(n.Component),g={"\u05d1\u05e2\u05dc\u05d9 \u05d7\u05d9\u05d9\u05dd":["cat","dog","horse"],"\u05e1\u05db\u05e0\u05d5\u05ea":["fire","bolt","ghost"],"\u05d3\u05ea":["cross","menorah","pray","bible"],"\u05e8\u05e4\u05d5\u05d0\u05d4":["pills","cannabis","capsules"],"\u05d0\u05d5\u05db\u05dc":["lemon","drumstick-bite","cookie"],"\u05d0\u05e0\u05e9\u05d9\u05dd":["user-injured","user-tie","blind"],"\u05de\u05e7\u05d5\u05de\u05d5\u05ea":["university","church","hospital","home"],"\u05d7\u05e4\u05e6\u05d9\u05dd":["toilet-paper","bed","basketball-ball","microscope"]},b=a(21),f=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).filterCategory=function(e){var t=e.target.checked,n=e.target.id,s=a.props.categoryFilter;if(t&&!s.includes(n))a.props.updateCategoryFilter(Object(b.a)(a.props.categoryFilter).concat([n]));else{var o=s.findIndex(function(e){return e===n});if(o<0)return;var c=a.props.categoryFilter;c.splice(o,1),a.props.updateCategoryFilter(c)}console.log("category: ",a.props.category)},a.checkedCategory=function(){return!!a.props.categoryFilter.includes(a.props.category)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"custom-control custom-checkbox dropdown-item"},this.checkedCategory()?s.a.createElement("input",{type:"checkbox",id:this.props.category,className:"custom-control-input",onChange:this.filterCategory,checked:!0}):s.a.createElement("input",{type:"checkbox",id:this.props.category,className:"custom-control-input",onChange:this.filterCategory}),s.a.createElement("label",{className:"custom-control-label pull-right",htmlFor:this.props.category},s.a.createElement("p",{className:"icon-name",htmlFor:this.props.category},this.props.category)))}}]),t}(n.Component),v=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("button",{onClick:this.props.setIcon,id:this.props.category,type:"button",className:"btn btn-default iconButton"},s.a.createElement("i",{className:"fas fa-"+this.props.iconimage+" fa-3x"}))}}]),t}(n.Component),y=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"checkCategoryFilter",value:function(){var e=this,t=function(t){return g[t].map(function(a,n){return s.a.createElement(v,{key:n,iconimage:a,category:t,setIcon:function(){return e.props.setIcon(a)},saveNewIcon:function(){return e.props.saveNewIcon()}})})};return 0===this.props.categoryFilter.length?Object.keys(g).map(t):this.props.categoryFilter.map(t)}},{key:"render",value:function(){return s.a.createElement("div",null,this.checkCategoryFilter())}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).updateCategoryFilter=function(e){a.setState({categoryFilter:e}),console.log("categoryFilter: ",e),console.log("iconsObj: ",g)},a.state={categoryFilter:[],chosenIcon:"",showMenu:!1},a.setIcon=a.setIcon.bind(Object(p.a)(Object(p.a)(a))),a.saveNewIcon=a.saveNewIcon.bind(Object(p.a)(Object(p.a)(a))),a.showMenu=a.showMenu.bind(Object(p.a)(Object(p.a)(a))),a.closeMenu=a.closeMenu.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"saveNewIcon",value:function(){var e=this.props.match.params.id?"EditMessage":"NewMessage",t=localStorage.getItem(e),a=JSON.parse(t);""==a&&(a={}),""!=this.state.chosenIcon&&(a.icon=this.state.chosenIcon),localStorage.setItem(e,JSON.stringify(a)),this.setIcon(""),console.log("icon page"+localStorage.getItem(e))}},{key:"setIcon",value:function(e){this.setState({chosenIcon:e})}},{key:"showMenu",value:function(e){var t=this;e.preventDefault(),this.setState({showMenu:!0},function(){document.addEventListener("click",t.closeMenu)})}},{key:"closeMenu",value:function(e){var t=this;this.dropdownMenu.contains(e.target)||this.setState({showMenu:!1},function(){document.removeEventListener("click",t.closeMenu)})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(d,{pageName:"IconPage",history:this.props.history}),s.a.createElement("div",{className:"container"},s.a.createElement("h3",null,"\u05d0\u05d9\u05d6\u05d4 \u05d0\u05d9\u05d9\u05e7\u05d5\u05df \u05ea\u05e8\u05e6\u05d5 \u05dc\u05d4\u05e6\u05d9\u05d2?"),s.a.createElement("div",{className:"dropdown show text-center"},s.a.createElement("div",null,s.a.createElement("button",{className:"btn btn-secondary dropdown-toggle ",id:"dropdownFilterIcon",onClick:this.showMenu},"\u05e1\u05e0\u05df/\u05d9"),this.state.showMenu?s.a.createElement("div",{className:"dropdown-filter-menu",ref:function(t){e.dropdownMenu=t}},Object.keys(g).map(function(t,a){return s.a.createElement(f,{key:a,categoryFilter:e.state.categoryFilter,updateCategoryFilter:e.updateCategoryFilter,category:t})})):null)),s.a.createElement("br",null),s.a.createElement("div",{className:"scrollIcons"},s.a.createElement(y,{categoryFilter:this.state.categoryFilter,setIcon:this.setIcon,saveNewIcon:this.saveNewIcon})),s.a.createElement("br",null),s.a.createElement(h.a,{to:"".concat(this.props.match.params.id?"/EditMessage/".concat(this.props.match.params.id):"/NewMessage")},s.a.createElement("button",{type:"button",className:"btn btn-info btn-lg btn-block",onClick:this.saveNewIcon},"\u05d4\u05de\u05e9\u05da"))))}}]),t}(n.Component),O=a(44),k=a(43),N=(a(15),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={showMenu:!1},a.showMenu=a.showMenu.bind(Object(p.a)(Object(p.a)(a))),a.closeMenu=a.closeMenu.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"showMenu",value:function(e){var t=this;e.preventDefault(),this.setState({showMenu:!0},function(){document.addEventListener("click",t.closeMenu)})}},{key:"closeMenu",value:function(){var e=this;this.setState({showMenu:!1},function(){document.removeEventListener("click",e.closeMenu)})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("button",{onClick:this.showMenu,className:"btn btn-secondary dropdown-toggle",type:"button"}),this.state.showMenu?s.a.createElement("div",{className:"dropdown-message-menu"},s.a.createElement(h.a,{to:"/EditMessage/".concat(this.props.itemID)},s.a.createElement("button",{onClick:function(){return e.props.editmessage(e.props.itemID)},className:"dropdown-item btn btn-primary"},"\u05e2\u05e8\u05d5\u05da/\u05d9")),s.a.createElement("button",{onClick:function(t){return e.props.deletemessage(t,e.props.itemID,e.props.isFav)},className:"dropdown-item btn btn-primary"},"\u05de\u05d7\u05e7/\u05d9"),this.props.isFav?s.a.createElement("button",{onClick:function(t){return e.props.changelocation(t,e.props.itemID,e.props.isFav)},className:"dropdown-item btn btn-primary"},"\u05d4\u05e1\u05e8/\u05d9 \u05de\u05de\u05d5\u05e2\u05d3\u05e4\u05d9\u05dd"):s.a.createElement("button",{onClick:function(t){return e.props.changelocation(t,e.props.itemID,e.props.isFav)},className:"dropdown-item btn btn-primary"},"\u05d4\u05d5\u05e1\u05e3/\u05d9 \u05dc\u05de\u05d5\u05e2\u05d3\u05e4\u05d9\u05dd")):null)}}]),t}(n.Component)),j=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"list-group"},s.a.createElement(h.a,{to:"/SendPage/".concat(this.props.itemID),onClick:function(){return e.props.sendMessage(e.props.itemID)}},s.a.createElement("div",{className:"list-group-item list-group-item-action flex-column align-items-start"},s.a.createElement("div",{className:"message-container d-flex w-100 justify-content-between"},s.a.createElement("i",{style:{color:this.props.color},className:"fas fa-"+this.props.icon+" fa-3x"}),s.a.createElement("h4",{className:"mb-3 message-text"},this.props.header," "),s.a.createElement(N,{itemID:this.props.itemID,deletemessage:this.props.deletemessage,editmessage:this.props.editmessage,isFav:this.props.isFav,changelocation:this.props.changelocation})))))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).sendMessage=function(e){var t={};a.state.messages.map(function(a){a.itemID===e&&(t=Object.assign({},a))}),localStorage.setItem("SendMessage",JSON.stringify(t))},a.state={messages:""},a.deletemessage=a.deletemessage.bind(Object(p.a)(Object(p.a)(a))),a.editmessage=a.editmessage.bind(Object(p.a)(Object(p.a)(a))),a.changelocation=a.changelocation.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("messages");if(e){var t=JSON.parse(e),a=Object.keys(t).map(function(e){return t[e]});this.setState({messages:a})}localStorage.setItem("EditMessage",JSON.stringify("")),localStorage.setItem("NewMessage",JSON.stringify({})),localStorage.setItem("SendMessage",JSON.stringify(""))}},{key:"deletemessage",value:function(e,t,a){e.preventDefault();var n=this.state.messages,s=[];n.map(function(e){e.itemID!==t&&s.push(e)}),localStorage.setItem("messages",JSON.stringify(s)),this.setState({messages:s})}},{key:"editmessage",value:function(e){var t={};this.state.messages.map(function(a){a.itemID===e&&(t=Object.assign({},a))}),localStorage.setItem("EditMessage",JSON.stringify(t))}},{key:"changelocation",value:function(e,t,a){e.preventDefault();var n=this.state.messages,s=[];n.map(function(e){s.push(e),e.itemID===t&&(s[s.length-1].isFav=!a)}),localStorage.setItem("messages",JSON.stringify(s)),this.setState({messages:s})}},{key:"render",value:function(){var e=this,t=[],a=[];return Object.keys(this.state.messages).forEach(function(n){var o=e.state.messages[n],c=s.a.createElement(j,{key:n,isFav:o.isFav,itemID:o.itemID,header:o.header,icon:o.icon,color:o.color,deletemessage:e.deletemessage,editmessage:e.editmessage,changelocation:e.changelocation,sendMessage:e.sendMessage});o.isFav?t.push(c):a.push(c)}),s.a.createElement("div",{style:{textAlign:"right"}},s.a.createElement(d,{pageName:"HomePage"}),t[0]||a[0]?null:s.a.createElement(h.a,{to:"/NewMessage"},s.a.createElement("button",{type:"button",className:"new-message-btn"},s.a.createElement("i",{className:"fas fa-plus"}))),t[0]?s.a.createElement("div",null,s.a.createElement("p",{className:"main-title-messages"}," \u05de\u05d5\u05e2\u05d3\u05e4\u05d9\u05dd "),s.a.createElement("div",{style:{textAlign:"center"}},t)):s.a.createElement("div",null),a[0]?s.a.createElement("div",null,s.a.createElement("p",{className:"main-title-messages"}," \u05d4\u05d4\u05d5\u05d3\u05e2\u05d5\u05ea \u05e9\u05dc\u05d9 "),s.a.createElement("div",{style:{textAlign:"center"}},a)):s.a.createElement("div",null),s.a.createElement("div",{className:"container"},s.a.createElement(h.a,{to:"/NewMessage"},s.a.createElement("button",{type:"button",className:"btn btn-secondary btn-lg fixed-bottom btn-block"},"\u05d4\u05d5\u05e1\u05e3/\u05d9 \u05d4\u05d5\u05d3\u05e2\u05d4"))))}}]),t}(n.Component),I=a(17),M=(a(16),[{colorclass:"dark",colorvalue:"#343a40"},{colorclass:"primary",colorvalue:"#007bff"},{colorclass:"success",colorvalue:"#28a745"},{colorclass:"info",colorvalue:"#17a2b8"},{colorclass:"warning",colorvalue:"#ffc107"},{colorclass:"danger",colorvalue:"#dc3545"}]),S=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"colors"},M.map(function(t,a){return s.a.createElement(x,{key:a,colorclass:t.colorclass,colorvalue:t.colorvalue,onclicker:function(){return e.props.updatecolor(t.colorvalue)}})}))}}]),t}(n.Component),x=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("button",{id:"color",type:"button",onClick:this.props.onclicker,className:"btn btn-circle btn-"+this.props.colorclass})}}]),t}(n.Component),C=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"custom-control custom-checkbox"},s.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"defaultUnchecked",checked:this.props.favbutt,onChange:this.props.onChange}),s.a.createElement("label",{className:"custom-control-label pull-right",htmlFor:"defaultUnchecked"},s.a.createElement("p",{className:"add-to-favorites-lable"},"\u05d4\u05d5\u05e1\u05e4\u05d4 \u05dc\u05de\u05d5\u05e2\u05d3\u05e4\u05d9\u05dd:")))}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).updateStorage=function(){console.log("update storage"),a.updateLocalStorage()},a.updateLocalStorage=function(){var e={header:a.state.header,color:a.state.color,isFav:a.state.isFav,icon:a.state.icon,itemID:a.state.itemID};localStorage.setItem(a.state.key,JSON.stringify(e))},a.updateInfoEvent=function(e,t){a.setState(Object(I.a)({},e,t.target.value))},a.updateInfoValue=function(e,t){a.setState(Object(I.a)({},e,t))},a.addtofavorite=function(){a.setState({isFav:!a.state.isFav})},a.saveMessageData=function(){var e="messages",t={header:a.state.header,isFav:a.state.isFav,itemID:a.state.itemID,icon:a.state.icon,color:a.state.color},n=[],s=[],o=localStorage.getItem(e);if(o){var c=JSON.parse(o);n=Object.keys(c).map(function(e){return c[e]})}var r=a.state.messageExists;n.map(function(e){e.header===a.state.header&&"NewMessage"===a.state.key&&(r=!0,a.setState({messageExists:r}))}),r?alert("\u05d4\u05d5\u05d3\u05e2\u05d4 \u05d6\u05d5 \u05db\u05d1\u05e8 \u05e7\u05d9\u05d9\u05de\u05ea \u05d1\u05de\u05e2\u05e8\u05db\u05ea"):a.props.match.params.id?(n.map(function(e){e.itemID==a.props.match.params.id?s.push(t):s.push(e)}),localStorage.setItem(e,JSON.stringify(s))):(n.push(t),localStorage.setItem(e,JSON.stringify(n)))},a.state={header:"",color:"null",isFav:!1,icon:"ghost",favatfirst:!1,itemID:Date.now(),key:"",messageExists:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e="NewMessage";this.props.match.params.id&&(e="EditMessage");var t=localStorage.getItem(e);if(t){var a=JSON.parse(t);this.setState({header:a.header,color:a.color,isFav:a.isFav||this.state.isFav,icon:a.icon||this.state.icon,favatfirst:a.isFav,itemID:this.props.match.params.id?this.props.match.params.id:Date.now(),key:e})}}},{key:"componentDidMount",value:function(){window.addEventListener("beforeunload",this.updateStorage)}},{key:"componentWillUnmount",value:function(){this.updateStorage(),window.removeEventListener("beforeunload",this.updateStorage)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(d,{pageName:this.state.key,history:this.props.history}),s.a.createElement("div",{className:"container"},s.a.createElement("label",{htmlFor:"message-title text-right"},"\u05d4\u05d4\u05d5\u05d3\u05e2\u05d4:"),s.a.createElement("input",{type:"text",onChange:function(t){return e.updateInfoEvent("header",t)},className:"form-control",id:"message-title",placeholder:"\u05d4\u05db\u05e0\u05e1/\u05d9 \u05d4\u05d5\u05d3\u05e2\u05d4",value:this.state.header,maxLength:"30"}),s.a.createElement("small",{className:"form-text text-muted"},"\u05e2\u05dc \u05d4\u05d4\u05d5\u05d3\u05e2\u05d4 \u05dc\u05d4\u05d9\u05d5\u05ea \u05e7\u05e6\u05e8\u05d4 \u05d5\u05ea\u05de\u05e6\u05d9\u05ea\u05d9\u05ea."),s.a.createElement("br",null),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-11 text-center"},s.a.createElement("i",{style:{color:this.state.color},className:"fas fa-"+this.state.icon+" fa-5x pull-left"}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(h.a,{to:"/".concat(this.state.key,"/IconPage").concat("EditMessage"===this.state.key?"/"+this.state.itemID:"")},s.a.createElement("button",{type:"button",className:"btn btn-info "},s.a.createElement("i",{className:"fas fa-pencil-alt"}),"\u05e9\u05e0\u05d4/\u05d9 \u05d0\u05d9\u05d9\u05e7\u05d5\u05df")))),s.a.createElement("div",{className:"colors-container"},s.a.createElement(S,{updatecolor:function(t){return e.updateInfoValue("color",t)}}),s.a.createElement("div",{className:"color-picker-container"},s.a.createElement("img",{id:"color-picker-img",src:a(34)}),s.a.createElement("input",{id:"color-picker",className:"btn-circle",value:this.state.color,onChange:function(t){return e.updateInfoEvent("color",t)},type:"color"}))),s.a.createElement("small",{className:"form-text text-muted text-center "},"\u05d1\u05d9\u05db\u05d5\u05dc\u05ea\u05da \u05dc\u05d1\u05d7\u05d5\u05e8 \u05d1\u05e6\u05d1\u05e2 \u05de\u05d5\u05db\u05df \u05de\u05e8\u05d0\u05e9 \u05d0\u05d5 \u05dc\u05d7\u05d9\u05dc\u05d5\u05e4\u05d9\u05df \u05dc\u05d1\u05d7\u05d5\u05e8 \u05e6\u05d1\u05e2 \u05de\u05d5\u05ea\u05d0\u05dd \u05d0\u05d9\u05e9\u05d9\u05ea."),s.a.createElement("br",null),s.a.createElement(C,{favbutt:this.state.isFav,onChange:this.addtofavorite})),this.state.header?s.a.createElement(h.a,{to:"/"},s.a.createElement("button",{type:"submit",className:"submit-message-button btn btn-secondary btn-lg btn-block fixed-bottom",onClick:this.saveMessageData},"NewMessage"===this.state.key?"\u05d4\u05d5\u05e1\u05e3/\u05d9":"\u05e2\u05d3\u05db\u05df/\u05d9")):s.a.createElement("button",{disabled:!0,type:"submit",className:"submit-message-button btn btn-secondary btn-lg btn-block fixed-bottom"},"NewMessage"===this.state.key?"\u05d4\u05d5\u05e1\u05e3/\u05d9":"\u05e2\u05d3\u05db\u05df/\u05d9"))}}]),t}(n.Component),D={"!":"-.-.--",'"':".-..-.",$:"...-..-","&":".-...","'":".----.","(":"-.--.",")":"-.--.-","+":".-.-.",",":"--..--","-":"-....-",".":".-.-.-","/":"-..-.",0:"-----",1:".----",2:"..---",3:"...--",4:"....-",5:".....",6:"-....",7:"--...",8:"---..",9:"----.",":":"---...",";":"-.-.-.","=":"-...-","?":"..--..","@":".--.-.",_:"..--.-",A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--.."," ":" "},J=.07*10,P=3*J,L=.09*10,A=J,T=.1,U=[],B=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).toneChar=function(e,t){var n;"."===t?n=J:"-"===t&&(n=P),a.osc.start(e),a.osc.stop(e+n)},a.stopMorse=function(){U=[]},a.textToMorse=function(){var e=a.state.textInput.toUpperCase();console.log("messageUpper: ",e);for(var t=0;t<e.length;t++)U.push(D[e[t]]),U.push(" ");console.log("codeArray: ",U)},a.generateSequence=function(){for(var e=T,t=0;t<U.length;t++){var n=U[t];if(" "===n)e+=A;else for(var s=0;s<n.length;s++){var o=n[s];switch(o){case".":a.toneChar(e,o),e+=J;break;case"-":a.toneChar(e,o),e+=P;break;default:console.log("Unexpected character in morse code message",o)}e+=L}}},a.playMorseSequence=function(){a.stopMorse(),a.textToMorse(),a.generateSequence()},a.state={textInput:a.props.header},a.osc=new window.Tone.Oscillator(8e3,"sine").toMaster(),console.log("osc",a.osc),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.playMorseSequence(),s.a.createElement("div",null)}}]),t}(n.Component),W=(a(35),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={header:"",color:"null",icon:"ghost"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e="";if(this.props.match.params.id){e="SendMessage";var t=localStorage.getItem(e);if(t){var a=JSON.parse(t);this.setState({header:a.header,color:a.color,icon:a.icon||this.state.icon})}}}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(d,{pageName:"SendPage",history:this.props.history}),s.a.createElement("div",{className:"message-info-container"},s.a.createElement("i",{style:{color:this.state.color},className:"fas fa-"+this.state.icon+" fa-3x",id:"message-icon"}),s.a.createElement("h4",{className:"mb-3",id:"send-message-text"},this.state.header," ")),s.a.createElement("div",{className:"loading-spinner"},s.a.createElement("i",{className:"fa fa-spinner fa-spin"})),s.a.createElement(B,{header:this.state.header}))}}]),t}(n.Component)),q=(a(37),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(O.a,null,s.a.createElement(k.a,{exact:!0,path:"/",component:w}),s.a.createElement(k.a,{exact:!0,path:"/NewMessage",component:F}),s.a.createElement(k.a,{exact:!0,path:"/NewMessage/IconPage",component:E}),s.a.createElement(k.a,{exact:!0,path:"/EditMessage/:id",component:F}),s.a.createElement(k.a,{exact:!0,path:"/EditMessage/IconPage/:id",component:E}),s.a.createElement(k.a,{exact:!0,path:"/SendPage/:id",component:W})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(42);c.a.render(s.a.createElement(H.a,null,s.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.340c7e0f.chunk.js.map