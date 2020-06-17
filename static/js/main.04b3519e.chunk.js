(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(21)},17:function(e,t,a){},18:function(e){e.exports={}},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),s=(a(17),a(6)),o=a(10),i=a(1),u=a(2),m=a(4),h=a(3),d=a(5),p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleSearchInput=function(e){a.setState({searchInput:e.target.value})},a.state={searchInput:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search"},r.a.createElement("div",{className:"page-header"},r.a.createElement("h4",{className:"text-left"},"Search Bookings")),r.a.createElement("div",{className:"row search-wrapper"},r.a.createElement("div",{className:"col"},r.a.createElement("form",{className:"form-group search-box",onSubmit:function(t){e.props.search(t,e.state.searchInput)}},r.a.createElement("label",{htmlFor:"customerName"},"Customer name"),r.a.createElement("div",{className:"search-row"},r.a.createElement("input",{value:this.state.searchInput,type:"text",id:"customerName",className:"form-control",placeholder:"Customer Id",onChange:this.handleSearchInput}),r.a.createElement(b,null))))))}}]),t}(n.Component),b=function(){return r.a.createElement("button",{className:"btn btn-primary"},"Search IDs")},f=p,g=(a(18),a(7)),E=a.n(g),k=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=Math.random();return r.a.createElement("div",{class:"form-group row"},r.a.createElement("label",{htmlFor:e,className:"col-sm-2 col-form-label"},this.props.label,":"),r.a.createElement("div",{class:"col-sm-10"},r.a.createElement("input",{id:e,type:this.props.type,required:!0,value:this.props.value,onChange:this.props.onChange})))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={results:a.props.results,ascending:!0,sortingField:""},a.compare=function(e,t,n){var r=a.state.ascending,c=0;return e[n]<t[n]?c=-1:e[n]>t[n]&&(c=1),c*(r?1:-1)},a.handleClick=function(e){a.setState(function(t){var n=e!==t.sortingField||!t.ascending;return{sortingField:e,ascending:n,results:t.results.sort(function(t,n){return a.compare(t,n,e)})}})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("table",null,r.a.createElement("tr",{className:"table table-bordered"},r.a.createElement("th",{onClick:function(){return e.handleClick("id")}},"Id"),r.a.createElement("th",{onClick:function(){return e.handleClick("title")}},"Title"),r.a.createElement("th",{onClick:function(){return e.handleClick("firstName")}},"First name"),r.a.createElement("th",{onClick:function(){return e.handleClick("surname")}},"Surname"),r.a.createElement("th",{onClick:function(){return e.handleClick("email")}},"Email"),r.a.createElement("th",{onClick:function(){return e.handleClick("roomId")}},"Room id"),r.a.createElement("th",{onClick:function(){return e.handleClick("checkInDate")}},"Check-in"),r.a.createElement("th",{onClick:function(){return e.handleClick("checkOutDate")}},"Check-out"),r.a.createElement("th",null,"Total stay")),this.state.results.map(function(e){var t=E()(e.checkOutDate),a=E()(e.checkInDate);console.log("DateA",t),console.log("DateA",a);var n=t.diff(a,"days");return r.a.createElement(O,{booking:e,total:n})}))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={isHighlighted:!1},a.highlight=function(){a.setState(function(e){return{isHighlighted:!e.isHighlighted}})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e="table table-bordered ".concat(this.state.isHighlighted?"table-primary":"");return r.a.createElement("tr",{className:e,onClick:this.highlight},r.a.createElement("td",null,this.props.booking.id),r.a.createElement("td",null,this.props.booking.title),r.a.createElement("td",null,this.props.booking.firstName),r.a.createElement("td",null,this.props.booking.surname),r.a.createElement("td",null,this.props.booking.email),r.a.createElement("td",null,this.props.booking.roomId),r.a.createElement("td",null,this.props.booking.checkInDate),r.a.createElement("td",null,this.props.booking.checkOutDate),r.a.createElement("td",null,this.props.total))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).search=function(e,t){e.preventDefault(),console.log(t)},a.newCustomer=function(e){e.preventDefault(),a.setState(function(e){return{bookings:[].concat(Object(o.a)(e.bookings),[{firstName:e.firstName,surname:e.surname,title:e.title,email:e.email,roomId:e.roomId,checkInDate:e.checkInDate,checkOutDate:e.checkOutDate,id:e.bookings[e.bookings.length-1].id+1}]),firstName:"",surname:"",title:"",email:"",roomId:"",checkInDate:"",checkOutDate:""}})},a.state={bookings:null,errorMessage:null,firstName:"",surname:"",title:"",email:"",roomId:"",checkInDate:"",checkOutDate:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:4000/bookings").then(function(e){return 200===e.status?e.json():Promise.reject(e)}).then(function(t){e.setState({bookings:t})}).catch(function(t){return t.json().then(function(t){return e.setState({errorMessage:t.error})})})}},{key:"render",value:function(){var e,t=this;return r.a.createElement("div",{className:"App-content"},r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.newCustomer},r.a.createElement(k,{label:"First name",value:this.state.firstName,type:"text",onChange:function(e){return t.setState({firstName:e.target.value})}}),r.a.createElement(k,{label:"Surname",required:!0,value:this.state.surname,type:"text",onChange:function(e){return t.setState({surname:e.target.value})}}),r.a.createElement(k,{label:"Title",required:!0,value:this.state.title,onChange:function(e){return t.setState({title:e.target.value})}}),r.a.createElement(k,{label:"Email",required:!0,value:this.state.email,onChange:function(e){return t.setState({email:e.target.value})}}),r.a.createElement(k,{label:"Room Id",required:!0,value:this.state.roomId,onChange:function(e){return t.setState({roomId:e.target.value})}}),r.a.createElement(k,{label:"Check In Date",type:"date",required:!0,value:this.state.checkInDate,onChange:function(e){return t.setState({checkInDate:e.target.value})}}),r.a.createElement(k,(e={label:"Check Out Date",required:!0,type:"date"},Object(s.a)(e,"required",!0),Object(s.a)(e,"value",this.state.checkOutDate),Object(s.a)(e,"onChange",function(e){return t.setState({checkOutDate:e.target.value})}),e)),r.a.createElement("button",null,"Submit")),r.a.createElement(f,{search:this.search}),null!==this.state.errorMessage?this.state.errorMessage:null==this.state.bookings?"Loading...":r.a.createElement(v,{results:this.state.bookings})))}}]),t}(n.Component),N=(a(20),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={count:0,orders:0},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"orderList"},r.a.createElement("h3",null,"Restaurant Orders"),r.a.createElement("ul",null,r.a.createElement(y,{orderType:"Pizza"}),r.a.createElement(y,{orderType:"Salads"})))}}]),t}(n.Component)),C=function(e){return r.a.createElement("button",{className:"btn btn-primary",onClick:e.order},"Add")},y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).AddOrder=function(){a.setState(function(e){return{orders:e.orders+1}})},a.state={orders:0},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("li",null,this.props.orderType,": ",this.state.orders," ",r.a.createElement(C,{order:this.AddOrder}))}}]),t}(n.Component),D=N,I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).tick=function(){a.setState({date:new Date})},a.state={date:new Date},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.timer=setTimeout(this.tick,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return r.a.createElement("div",{className:"clock"},this.state.date.toLocaleTimeString())}}]),t}(n.Component),w=function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement("h4",null,"CYF Hotel"),r.a.createElement("img",{className:"App-logo",src:"https://image.flaticon.com/icons/svg/139/139899.svg"}))},S=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"https://images.unsplash.com/photo-1531152369337-1d0b0b9ef20d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",className:"card-img-top"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("a",{href:"https://peoplemakeglasgow.com/",className:"btn btn-primary",target:"blank"},"Glasgow")))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"https://www.visitmanchester.com/imageresizer/?image=%2Fdmsimgs%2Fchristmas-markets-at-albert-square_1__441639496.jpg&action=ProductDetailFullWidth2",className:"card-img-top"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("a",{href:"https://www.visitmanchester.com/",className:"btn btn-primary",target:"blank"},"Manchester")))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg",className:"card-img-top"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("a",{href:"https://www.visitlondon.com/",className:"btn btn-primary",target:"blank"},"London"))))))},F=["123 Fake Street, London, E1 4UD","hello@fakehotel.com","0123 456789"],A=function(e){e.data;return r.a.createElement("div",{className:"footer"},r.a.createElement("ul",null,F.map(function(e,t){return r.a.createElement("li",{key:e+t},e)})))},q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,null),r.a.createElement(I,null),r.a.createElement(S,null),r.a.createElement(j,null),r.a.createElement(D,null),r.a.createElement(A,{address:F}))};l.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.04b3519e.chunk.js.map