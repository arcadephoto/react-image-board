(this["webpackJsonpreact-image-board"]=this["webpackJsonpreact-image-board"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(8),s=a.n(c),r=(a(15),a(9)),o=a(10),u=a(3),d=a(4),m=a(2),j=a(6),b=a(5),l=(a(16),a(17),a(0)),h=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={images:[{image:"https://cdn.shopify.com/s/files/1/0546/1817/files/1_grande.jpg?v=1510086340",caption:"Mid Century sofa"},{image:"https://hivemodern.com/public_resources/eames-lounge-chair-ottoman-charles-and-ray-eames-herman-miller-1.jpg",caption:"Herman Miller Eames Chair"}]},n.addImage=n.addImage.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"addImage",value:function(e){var t=Object(o.a)(this.state.images);t.push(e),this.setState({images:t})}},{key:"render",value:function(){return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Furniture You Can't Afford"})}),Object(l.jsx)("div",{id:"submitRow",className:"row d-flex justify-content-center",children:Object(l.jsx)(p,{addImage:this.props.addImage})}),Object(l.jsx)("div",{className:"row d-flex justify-content-center",children:Object(l.jsx)("div",{className:"col-auto",children:Object(l.jsx)(O,{addImage:this.addImage,images:this.state.images})})})]})}}]),a}(n.Component),p=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={image:"",caption:""},n.doSubmit=n.doSubmit.bind(Object(m.a)(n)),n.doInput=n.doInput.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"doSubmit",value:function(e){e.preventDefault(),this.props.addImage(this.state),this.setState({image:""}),this.setState({caption:""})}},{key:"doInput",value:function(e){this.setState(Object(r.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return Object(l.jsxs)("form",{className:"form-group",onSubmit:this.doSubmit,children:[Object(l.jsx)("input",{className:"form-control",placeholder:"Enter Image URL",name:"image",type:"text",id:"img-text",value:this.state.image,onChange:this.doInput,required:!0}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{className:"form-control",placeholder:"Enter Image Caption",name:"caption",type:"text",id:"cap-text",value:this.state.caption,onChange:this.doInput,required:!0}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{className:"btn btn-success",id:"submitButton",type:"submit",children:"Submit Image"})]})}}]),a}(n.Component),g=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.images.map((function(e,t){return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{src:e.image,alt:"bigthing"}),Object(l.jsxs)("p",{children:[" ",e.caption]})]},t)}));return Object(l.jsx)("ul",{children:e})}}]),a}(n.Component),O=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)(g,{images:this.props.images})})}}]),a}(n.Component),f=h,v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),c(e),s(e)}))};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),v()}},[[19,1,2]]]);
//# sourceMappingURL=main.d8e4b17d.chunk.js.map