(this.webpackJsonppedal_board_frontend=this.webpackJsonppedal_board_frontend||[]).push([[0],{12:function(e,t,a){e.exports=a(19)},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(11),r=a.n(s),i=(a(17),a(9)),o=a(2),d=a.n(o),c=a(7),h=a(3),u=a(4),p=a(1),m=a(5),g=a(6),b=a(8),v=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={artists:n.props.artists,name:n.props.artist.name,band:n.props.artist.band,image:n.props.artist.image,wiki:n.props.artist.wiki,pedals:[]},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n.handleCheckChange=n.handleCheckChange.bind(Object(p.a)(n)),n}return Object(u.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.id,e.target.value))}},{key:"handleCheckChange",value:function(e){for(var t=document.getElementById("myform").querySelectorAll('input[type="checkbox"]'),a=[],n=0;n<t.length;n++)t[n].checked&&a.push(t[n].value),this.setState({pedals:[].concat(a)});return console.log(a),a}},{key:"handleSubmit",value:function(){var e=Object(c.a)(d.a.mark((function e(t){var a,n,l,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t.id),e.next=4,fetch("http://localhost:8000/api/artist/".concat(t.id,"/"),{method:"PUT",body:JSON.stringify({name:this.state.name,band:this.state.band,image:this.state.image,wiki:this.state.wiki,pedals:this.state.pedals}),headers:{"Content-Type":"application/json"}});case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,console.log(n),l=this.state.artists.findIndex((function(e){return e.id===t.id})),(s=Object(i.a)(this.props.artists))[l].name=n.name,s[l].band=n.band,s[l].image=n.image,s[l].wiki=n.wiki,s[l].pedals=n.pedals,this.props.handleUpdate(s),this.props.toggleUpdateForm(),window.location.reload(!1),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),console.error(e.t0);case 24:case"end":return e.stop()}}),e,this,[[0,21]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{id:"myform",onSubmit:function(t){t.preventDefault(),e.handleSubmit(e.props.artist)}},l.a.createElement("input",{type:"text",id:"name",value:this.state.name,onChange:this.handleChange}),l.a.createElement("input",{type:"text",id:"band",value:this.state.band,onChange:this.handleChange}),l.a.createElement("input",{type:"text",id:"image",value:this.state.image,onChange:this.handleChange}),l.a.createElement("input",{type:"text",id:"wiki",value:this.state.wiki,onChange:this.handleChange}),this.props.availablePedals.map((function(t,a){return l.a.createElement("div",{key:a},l.a.createElement("label",{htmlFor:t[a]},t.model),l.a.createElement("input",{id:"".concat(t[a]),type:"checkbox",value:t.id,onChange:e.handleCheckChange}))})),l.a.createElement("input",{className:"form-control btn btn-outline-success",type:"submit"})))}}]),a}(n.Component),f=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={artist:n.props.artist,artistsPedals:[],toggleShowPedals:!1,showUpdate:!1},n.getArtistsPedals=n.getArtistsPedals.bind(Object(p.a)(n)),n.toggleShow=n.toggleShow.bind(Object(p.a)(n)),n.toggleUpdateForm=n.toggleUpdateForm.bind(Object(p.a)(n)),n}return Object(u.a)(a,[{key:"getArtistsPedals",value:function(){for(var e=this,t=[],a=this.props.artist.pedals,n=function(n){e.props.availablePedals.map((function(e){e.id===a[n]&&t.push(e)}))},l=0;l<a.length;l++)n(l);this.setState({artistsPedals:[].concat(t)})}},{key:"toggleShow",value:function(){this.setState({toggleShowPedals:!this.state.toggleShowPedals})}},{key:"toggleUpdateForm",value:function(){this.setState({showUpdate:!this.state.showUpdate})}},{key:"componentDidMount",value:function(){this.getArtistsPedals()}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"card"},l.a.createElement("img",{className:"card-img-top",src:this.props.artist.image,alt:"artist"}),l.a.createElement("h2",{className:"card-header"},this.props.artist.name),l.a.createElement("h3",null,this.props.artist.band),l.a.createElement("a",{href:this.props.artist.wiki,target:"_blank",rel:"noopener noreferrer"},"More Info"),l.a.createElement("h3",{className:"show-hide",onClick:function(){return e.toggleShow()}},this.state.toggleShowPedals?"Hide Pedal Board":"Show Pedal Board"),this.state.toggleShowPedals?l.a.createElement("div",{className:"pedal-group"},this.state.artistsPedals.map((function(e){return l.a.createElement("div",{className:"pedal-container"},l.a.createElement("div",null,l.a.createElement("h5",null,"Model: ",e.model),l.a.createElement("h6",null,"Brand: ",e.brand)),l.a.createElement("img",{className:"pedal-image",src:e.image,alt:"pedal"}))}))):null,l.a.createElement("div",{className:"button-group"},l.a.createElement("button",{className:"btn btn-warning",onClick:function(){e.toggleUpdateForm()}},"UPDATE"),l.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.props.deleteArtist(e.props.artist.id)}},"DELETE")),this.state.showUpdate?l.a.createElement(v,{toggleUpdateForm:this.toggleUpdateForm,artist:this.props.artist,handleUpdate:this.props.handleUpdate,artists:this.props.artists,artistsPedals:this.state.artistsPedals,availablePedals:this.props.availablePedals}):null))}}]),a}(n.Component),P=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement("h1",null,"Pedal Board"))}}]),a}(n.Component),k=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={name:"",band:"",image:"",wiki:"",pedals:[{}]},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleCheckChange=n.handleCheckChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(u.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.id,e.target.value))}},{key:"handleCheckChange",value:function(e){for(var t=document.getElementById("myform").querySelectorAll('input[type="checkbox"]'),a=[],n=0;n<t.length;n++)t[n].checked&&a.push(t[n].value),this.setState({pedals:[].concat(a)});return console.log(a),a}},{key:"handleSubmit",value:function(){var e=Object(c.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch("http://localhost:8000/api/artist/",{method:"POST",body:JSON.stringify({name:this.state.name,band:this.state.band,image:this.state.image,wiki:this.state.wiki,pedals:this.state.pedals}),headers:{"Content-Type":"application/json"}});case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,console.log(n),this.props.handleAddArtist(n),this.props.toggleNewForm(),this.state={name:"",band:"",image:"",wiki:""},e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.error(e.t0);case 17:case"end":return e.stop()}}),e,this,[[1,14]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{id:"myform",onSubmit:this.handleSubmit},l.a.createElement("input",{type:"text",id:"name",placeholder:"Name",onChange:this.handleChange}),l.a.createElement("input",{type:"text",id:"band",placeholder:"Band",onChange:this.handleChange}),l.a.createElement("input",{type:"text",id:"image",placeholder:"Image URL",onChange:this.handleChange}),l.a.createElement("input",{type:"text",id:"wiki",placeholder:"Wiki URL",onChange:this.handleChange}),this.props.availablePedals.map((function(t,a){return l.a.createElement("div",{key:a},l.a.createElement("label",{htmlFor:t[a]},t.model),l.a.createElement("input",{id:"".concat(t[a]),type:"checkbox",value:t.id,onChange:e.handleCheckChange}))})),l.a.createElement("input",{className:"form-control btn btn-outline-success",type:"submit"})))}}]),a}(n.Component),w=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={model:"",band:"",image:""},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(u.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.id,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(c.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch("http://localhost:8000/api/pedal/",{method:"POST",body:JSON.stringify({model:this.state.model,brand:this.state.brand,image:this.state.image}),headers:{"Content-Type":"application/json"}});case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,console.log(n),this.props.handleAddPedal(n),this.props.toggleNewPedalForm(),this.state={model:"",brand:"",image:""},e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.error(e.t0);case 17:case"end":return e.stop()}}),e,this,[[1,14]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("form",{id:"pedalform",onSubmit:this.handleSubmit},l.a.createElement("input",{type:"text",id:"model",placeholder:"Model",onChange:this.handleChange}),l.a.createElement("input",{type:"text",id:"brand",placeholder:"Brand",onChange:this.handleChange}),l.a.createElement("input",{type:"text",id:"image",placeholder:"Image URL",onChange:this.handleChange}),l.a.createElement("input",{className:"form-control btn btn-outline-success",type:"submit"}))}}]),a}(n.Component),y=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={pedals:n.props.availablePedals,model:n.props.pedal.model,brand:n.props.pedal.brand,image:n.props.pedal.image},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(u.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.id,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(c.a)(d.a.mark((function e(t){var a,n,l,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,fetch("http://localhost:8000/api/pedal/".concat(t.id,"/"),{method:"PUT",body:JSON.stringify({model:this.state.model,brand:this.state.brand,image:this.state.image}),headers:{"Content-Type":"application/json"}});case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,console.log(n),l=this.state.pedals.findIndex((function(e){return e.id===t.id})),(s=Object(i.a)(this.state.pedals))[l].model=n.model,s[l].brand=n.brand,s[l].image=n.image,this.props.updatePedal(s),console.log(s),this.props.toggleUpdatePedalForm(),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),console.error(e.t0);case 22:case"end":return e.stop()}}),e,this,[[1,19]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{id:"pedalUpdateform",onSubmit:function(t){t.preventDefault(),e.handleSubmit(e.props.pedal)}},l.a.createElement("input",{type:"text",id:"model",value:this.state.model,onChange:this.handleChange}),l.a.createElement("input",{type:"text",id:"brand",value:this.state.brand,onChange:this.handleChange}),l.a.createElement("input",{type:"text",id:"image",value:this.state.image,onChange:this.handleChange}),l.a.createElement("input",{className:"form-control btn btn-outline-success",type:"submit"})))}}]),a}(n.Component),E=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={showUpdatePedal:!1},n.toggleUpdatePedalForm=n.toggleUpdatePedalForm.bind(Object(p.a)(n)),n}return Object(u.a)(a,[{key:"toggleUpdatePedalForm",value:function(){this.setState({showUpdatePedal:!this.state.showUpdatePedal})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"card pedal"},l.a.createElement("div",null,l.a.createElement("h6",{className:"card-header"},this.props.pedal.model)),l.a.createElement("img",{className:"pedal-image",src:this.props.pedal.image,alt:"pedal"}),l.a.createElement("div",{className:"button-group"},l.a.createElement("button",{className:"btn btn-warning",onClick:function(){e.toggleUpdatePedalForm()}},"UPDATE"),l.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.props.deletePedal(e.props.pedal.id)}},"DELETE")),this.state.showUpdatePedal?l.a.createElement(y,{pedal:this.props.pedal,toggleUpdatePedalForm:this.toggleUpdatePedalForm,availablePedals:this.props.availablePedals,updatePedal:this.props.updatePedal}):null)}}]),a}(n.Component),j=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={newPedal:!1},n.toggleNewPedalForm=n.toggleNewPedalForm.bind(Object(p.a)(n)),n}return Object(u.a)(a,[{key:"toggleNewPedalForm",value:function(){this.setState({newPedal:!this.state.newPedal})}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"pedal-list"},this.props.availablePedals.map((function(t,a){return l.a.createElement(E,{key:a,pedal:t,deletePedal:e.props.deletePedal,toggleUpdatePedalForm:e.toggleUpdatePedalForm,updatePedal:e.props.updatePedal,availablePedals:e.props.availablePedals})}))),l.a.createElement("button",{id:"add-new",className:"btn btn-success",onClick:function(){e.toggleNewPedalForm()}},"Add new Pedal"),this.state.newPedal?l.a.createElement(w,{handleAddPedal:this.props.handleAddPedal,toggleNewPedalForm:this.toggleNewPedalForm}):null)}}]),a}(n.Component),O=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={artists:[],pedals:[],showPedals:!1,availablePedals:[],newArtist:!1},n.getArtists=n.getArtists.bind(Object(p.a)(n)),n.handleAddArtist=n.handleAddArtist.bind(Object(p.a)(n)),n.handleUpdate=n.handleUpdate.bind(Object(p.a)(n)),n.toggleNewForm=n.toggleNewForm.bind(Object(p.a)(n)),n.deleteArtist=n.deleteArtist.bind(Object(p.a)(n)),n.getPedals=n.getPedals.bind(Object(p.a)(n)),n.toggleShowPedals=n.toggleShowPedals.bind(Object(p.a)(n)),n.handleAddPedal=n.handleAddPedal.bind(Object(p.a)(n)),n.deletePedal=n.deletePedal.bind(Object(p.a)(n)),n.updatePedal=n.updatePedal.bind(Object(p.a)(n)),n}return Object(u.a)(a,[{key:"getArtists",value:function(){var e=Object(c.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:8000/api/artist");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({artists:a}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"getPedals",value:function(){var e=Object(c.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:8000/api/pedal");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({availablePedals:a}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"toggleNewForm",value:function(){this.setState({newArtist:!this.state.newArtist})}},{key:"toggleShowPedals",value:function(){this.setState({showPedals:!this.state.showPedals})}},{key:"handleAddArtist",value:function(e){console.log(e);var t=[].concat(Object(i.a)(this.state.artists),[e]);this.setState({artists:t})}},{key:"handleAddPedal",value:function(e){console.log(e);var t=[].concat(Object(i.a)(this.state.availablePedals),[e]);this.setState({availablePedals:t})}},{key:"handleUpdate",value:function(e){this.setState({artists:e}),console.log(e)}},{key:"updatePedal",value:function(e){this.setState({availablePedals:e}),console.log(e)}},{key:"deleteArtist",value:function(){var e=Object(c.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:8000/api/artist/".concat(t),{method:"DELETE"});case 3:e.sent,this.setState((function(e){return{artists:e.artists.filter((function(e){return e.id!==t}))}})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"deletePedal",value:function(){var e=Object(c.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:8000/api/pedal/".concat(t),{method:"DELETE"});case 3:e.sent,this.setState((function(e){return{availablePedals:e.availablePedals.filter((function(e){return e.id!==t}))}})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getArtists(),this.getPedals()}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(P,null),l.a.createElement("button",{id:"add-new",className:"btn btn-success",onClick:function(){e.toggleNewForm()}},"Add new Artist"),this.state.newArtist?l.a.createElement(k,{availablePedals:this.state.availablePedals,handleAddArtist:this.handleAddArtist,toggleNewForm:this.toggleNewForm}):null,l.a.createElement("h2",{onClick:this.toggleShowPedals},"All Pedals"),this.state.showPedals?l.a.createElement(j,{deletePedal:this.deletePedal,handleAddPedal:this.handleAddPedal,availablePedals:this.state.availablePedals,updatePedal:this.updatePedal}):null,l.a.createElement("div",null,l.a.createElement("div",{className:"artist-container"},this.state.artists.map((function(t,a){return l.a.createElement(f,{key:a,artist:t,artists:e.state.artists,deleteArtist:e.deleteArtist,availablePedals:e.state.availablePedals,handleUpdate:e.handleUpdate})})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.ab21e081.chunk.js.map