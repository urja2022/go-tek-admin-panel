(this["webpackJsonpbeemz-web"]=this["webpackJsonpbeemz-web"]||[]).push([[10],{1054:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Fe}));var n=a(9),r=a(12),c=a.n(r),i=a(21),o=a(5),s=a(1),l=a(741),u=a(862),d=a(863),j=a(864),b=a(865),p=a(742),m=a(884),h=a(34),x=a(7),v=a(135),f=a.n(v),O=a(33),g=a(23),_=a(89),y=a(46),w=a(52),C=a(852),N=a(356),k=a(90),S=a(91),L=a.n(S),I=a(299),P=a(300),z=a(68),F=a(298),M=a(899),A=a(506),D=a(887),R=a(738),H=a(6),E=a(2),G=a(4),T=a(216),V=a(75),B=a(13),W=a(134),q=a(122);function U(e){return Object(q.a)("MuiListItemAvatar",e)}Object(W.a)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var K=a(0),Q=["className"],Z=Object(x.a)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,"flex-start"===a.alignItems&&t.alignItemsFlexStart]}})((function(e){var t=e.ownerState;return Object(E.a)({minWidth:56,flexShrink:0},"flex-start"===t.alignItems&&{marginTop:8})})),J=s.forwardRef((function(e,t){var a=Object(B.a)({props:e,name:"MuiListItemAvatar"}),n=a.className,r=Object(H.a)(a,Q),c=s.useContext(V.a),i=Object(E.a)({},a,{alignItems:c.alignItems}),o=function(e){var t=e.alignItems,a=e.classes,n={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return Object(T.a)(n,U,a)}(i);return Object(K.jsx)(Z,Object(E.a)({className:Object(G.a)(o.root,n),ownerState:i,ref:t},r))})),X=a(69),Y=a(53),$=a(31),ee=a(95),te=a.n(ee),ae=a(973),ne=a.n(ae),re=a(870),ce=a(891),ie=a(500),oe=a(501),se=a(754),le=a(61),ue=a(914),de=a(60),je=a(51),be=Object(je.a)(Object(K.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),"CloseOutlined"),pe=a(972),me=a.n(pe),he=a(896),xe=a(105),ve=a(868),fe=a(259),Oe=a(971),ge=a.n(Oe),_e=a(869),ye=a(916),we=a.n(ye),Ce=a(917),Ne=a(247),ke=a.n(Ne),Se=function(e){var t=e.placeholder,a=e.onChange,n=e.value;return Object(K.jsxs)(I.a,{className:"map_search_box",children:[Object(K.jsx)(z.c,{sx:{ml:1,flex:1,fontFamily:"Google Sans",lineHeight:1},placeholder:t,inputProps:{"aria-label":t},value:n,onChange:a}),Object(K.jsx)($.a,{title:"search",placement:"bottom",children:Object(K.jsx)(P.a,{type:"submit",sx:{p:"10px",flex:0},"aria-label":"search",children:Object(K.jsx)(ke.a,{})})})]})},Le=a(918),Ie=a.n(Le),Pe=function(e){var t=e.popupFiled,a=e.priviousData,n=e.addressData,r=e.viewMapData,c=e.latData,i=e.longData,l="AIzaSyCI-T5kfFDaBGWiLZPAJXzbQa9v7miTYuE",u=Object(s.useState)(["places"]),d=Object(o.a)(u,1)[0],j=Object(s.useState)(),b=Object(o.a)(j,2),p=b[0],m=b[1],h=Object(s.useState)({}),x=Object(o.a)(h,2),v=x[0],f=(x[1],Object(s.useState)()),O=Object(o.a)(f,2),g=O[0],_=O[1],y=Object(s.useState)(),w=Object(o.a)(y,2),C=w[0],N=w[1],k=Object(s.useState)(a),S=Object(o.a)(k,2),L=S[0],I=S[1],P=Object(s.useState)(),z=Object(o.a)(P,2),M=z[0],A=(z[1],Object(s.useState)()),D=Object(o.a)(A,2),R=D[0],H=(D[1],{lat:g?Number(g):M||-26.204444,lng:C?Number(C):R||28.045556}),E={lat:c?Number(c):-26.204444,lng:i?Number(i):28.045556};return Object(K.jsxs)(Ce.d,{googleMapsApiKey:l,libraries:d,children:[Object(K.jsx)("div",{className:"".concat(t?"col-12":"col-md-8"),children:Object(K.jsx)(F.a,{onClick:function(){return document.getElementById("locationPopup").classList.add("show"),document.body.style.overflow="hidden",void(document.body.style.paddingRight="0px")},fullWidth:!0,className:"app_text_transform app_btn_lg map_select_box",variant:"outlined",children:"select address from map"})}),Object(K.jsx)("section",{id:"locationPopup",className:"location_popup_overlay",children:Object(K.jsxs)("div",{className:"container position-relative",children:[Object(K.jsx)(F.a,{onClick:function(){return document.getElementById("locationPopup").classList.remove("show"),void document.body.removeAttribute("style")},className:"popup_close_btn",variant:"outlined",children:Object(K.jsx)(we.a,{})}),Object(K.jsxs)("div",{className:"location_box position-relative",children:[Object(K.jsx)("div",{className:"location_popup_searchbox_container",children:Object(K.jsx)(Ce.a,{onLoad:function(e){m(e)},onPlaceChanged:function(){if(null!==p){var e=p.getPlace();v.lat=e.geometry.location.lat(),v.lng=e.geometry.location.lng(),v.address=e.formatted_address,I(e.formatted_address),N(v.lng),_(v.lat),setTimeout((function(){return n(v)}),1e3)}},children:Object(K.jsx)(Se,{placeholder:"search address",onChange:function(e){I(e.target.value)},value:L})})}),Object(K.jsx)("div",{className:"location_map",children:Object(K.jsx)(Ce.b,{mapContainerClassName:"w-100 h-100",options:{streetViewControl:!1,scaleControl:!0,mapTypeControl:!1,panControl:!1,zoomControl:!0,rotateControl:!1},keyboardShortcuts:!1,draggable:!0,zoom:13,center:H,onClick:function(e){return function(e){var t=e.latLng.lat().toString(),a=e.latLng.lng().toString();N(a),_(t),Ie.a.setApiKey(l),Ie.a.fromLatLng(t,a).then((function(e){var r=e.results[0].formatted_address;n({lat:t,lng:a,address:r}),I(r)}),(function(e){console.error(e)}))}(e)},children:Object(K.jsx)(Ce.e,{position:{lat:Number(g),lng:Number(C)}},"Location 1")})})]})]})}),r&&r?Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("div",{className:"col-md-8 my-2 d-flex justify-content-center"}),Object(K.jsx)("div",{className:"col-md-8",children:Object(K.jsx)("div",{className:"location_box_map_view",children:Object(K.jsx)("div",{className:"location_map",children:Object(K.jsx)(Ce.b,{mapContainerClassName:"w-100 h-100",options:{streetViewControl:!1,scaleControl:!0,mapTypeControl:!1,panControl:!1,zoomControl:!0,rotateControl:!1},keyboardShortcuts:!1,draggable:!0,zoom:13,center:E,children:Object(K.jsx)(Ce.e,{position:{lat:Number(c||g),lng:Number(i||C)}},"Location 1")})})})})]}):Object(K.jsx)(K.Fragment,{})]})},ze=function(e){var t,a,n=e.onClose,r=e.open,l=e.groupData,u=Object(y.a)(),d=Object(Y.b)().enqueueSnackbar,j=Object(O.useQueryClient)(),b=Object(s.useState)(!1),p=Object(o.a)(b,2),m=p[0],h=p[1],x=Object(s.useState)(!1),v=Object(o.a)(x,2),f=v[0],_=v[1],w=Object(s.useState)(!1),C=Object(o.a)(w,2),N=C[0],k=C[1],S=Object(s.useState)(!1),L=Object(o.a)(S,2),I=L[0],F=L[1],A=Object(s.useState)(!1),D=Object(o.a)(A,2),R=D[0],H=D[1],E=Object(s.useState)(null===l||void 0===l?void 0:l.private),G=Object(o.a)(E,2),T=G[0],V=G[1],B=Object(s.useState)(""),W=Object(o.a)(B,2),q=W[0],U=W[1],Q=Object(s.useState)(""),Z=Object(o.a)(Q,2),J=Z[0],X=Z[1],$=Object(s.useState)(""),ee=Object(o.a)($,2),te=ee[0],ae=ee[1],ne=Object(s.useState)(-26.204444),re=Object(o.a)(ne,2),ce=re[0],se=re[1],le=Object(s.useState)(28.045556),ue=Object(o.a)(le,2),je=ue[0],pe=ue[1],Oe=function(){n(),k(!1),F(!1),H(!1)},ye=function(e){d(e,{variant:"error",anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:2e3})},we=Object(O.useMutation)(function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.post(g.d.uploadImage,t).then((function(e){return e.data})).catch((function(e){return ye("please try again!")}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).mutateAsync;Object(s.useEffect)((function(){l&&(U(null===l||void 0===l?void 0:l.name),V(null===l||void 0===l?void 0:l.private),X(null===l||void 0===l?void 0:l.description),ae(null===l||void 0===l?void 0:l.address),se(l.location.coordinates[0]),pe(l.location.coordinates[1]))}),[l]);var Ce=Object(O.useMutation)(function(){var e=Object(i.a)(c.a.mark((function e(t,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.put(g.d.updateGroup.replace(":groupId",null===l||void 0===l?void 0:l._id),t,{signal:a});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),{onSuccess:function(e){e.res;d("group information successfull",{variant:"success",anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:2e3}),Oe(),j.invalidateQueries(["chatGroupList"])},onError:function(e){ye("please try again!")}}).mutateAsync,Ne=function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={title:q,admin:!0},e.next=3,Ce(t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ke=function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={description:J,admin:!0},e.next=3,Ce(t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Se=function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={geoTag:{name:te,location:{coordinates:[ce,je]}},admin:!0},e.next=4,Ce(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Le=function(){var e=Object(i.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!T){e.next=7;break}return V(!1),t={isPrivate:!1,admin:!0},e.next=5,Ce(t);case 5:e.next=11;break;case 7:return V(!0),a={isPrivate:!0,admin:!0},e.next=11,Ce(a);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ie=function(){var t=Object(i.a)(c.a.mark((function t(a){var n,r,i,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n=a.target.files[0]){t.next=4;break}return t.abrupt("return",!1);case 4:if(!n.type.includes("image")){t.next=16;break}return(r=new FormData).append("image",n),t.next=9,we(r);case 9:if(!(i=t.sent)){t.next=14;break}return o={image:i.image,admin:!0},t.next=14,Ce(o);case 14:t.next=17;break;case 16:d(e.t("only jpg,png,jpeg Images accepted"),{variant:"error",anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:2e3});case 17:t.next=21;break;case 19:t.prev=19,t.t0=t.catch(0);case 21:case"end":return t.stop()}}),t,null,[[0,19]])})));return function(e){return t.apply(this,arguments)}}();return Object(K.jsx)(K.Fragment,{children:Object(K.jsxs)(ie.a,{onClose:Oe,open:r,className:"chat_popup_wrapper",children:[Object(K.jsxs)(oe.a,{className:"".concat(m?"contentScrolling":""," chat_config_popup_header"),children:[Object(K.jsx)(P.a,{className:"chat_config_popup_close_btn",onClick:Oe,children:Object(K.jsx)(be,{style:{color:"#fff"}})}),Object(K.jsxs)("div",{onMouseEnter:function(){return _(!0)},onMouseLeave:function(){return _(!1)},className:"".concat(m?"contentScrolling":""," chat_popup_avatar_wrapper"),children:[Object(K.jsx)(xe.a,{diameter:120,alternateSrc:null===l||void 0===l?void 0:l.name,imgSrc:Object(de.b)(null===l||void 0===l?void 0:l.image,"image")}),Object(K.jsx)(ve.a,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",cursor:"pointer",zIndex:5,background:"rgba(0,0,0,0.8)",height:"100%",width:"100%",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",visibility:f?"visible":"hidden"},children:Object(K.jsxs)(P.a,{sx:{"&:hover":{backgroundColor:"transparent"},p:0,height:"fit-content",width:"fit-content",display:"flex"},component:"label",children:[Object(K.jsx)("input",{hidden:!0,accept:"image/*",type:"file",onChange:function(e){return Ie(e)}}),Object(K.jsx)(ge.a,{style:{fontSize:48,color:"#fff"}})]})})]})]}),Object(K.jsx)(M.a,{onScroll:function(e){var t=e.target.scrollTop;h(t>100)},children:Object(K.jsxs)("div",{className:"mt-5 d-flex flex-column",children:[Object(K.jsx)("div",{className:"chat_config_popup_chatName_container",children:N?Object(K.jsx)(K.Fragment,{children:Object(K.jsx)(z.c,{sx:{paddingInlineStart:2,border:"thin solid gainsboro",borderRadius:"12px"},className:"app_text_16_semibold",fullWidth:!0,value:q,onChange:function(e){U(e.target.value)},endAdornment:Object(K.jsx)(P.a,{sx:{"&:hover":{backgroundColor:"transparent"}},disabled:!q,onClick:Ne,children:Object(K.jsx)(me.a,{})})})}):Object(K.jsxs)("div",{className:"d-flex align-items-center",children:[Object(K.jsx)("h4",{className:"app_text_20_semibold d-flex justify-content-center",children:null!==(t=null===l||void 0===l?void 0:l.name)&&void 0!==t?t:""}),Object(K.jsx)(P.a,{onClick:function(){k(!0)},sx:{"&:hover":{backgroundColor:"transparent"},p:0,marginInlineStart:1.5},children:Object(K.jsx)(fe.a,{w:15,h:15})})]})}),Object(K.jsx)("div",{className:"chat_config_popup_chatName_container mt-3",children:I?Object(K.jsx)(K.Fragment,{children:Object(K.jsx)(z.c,{sx:{paddingInlineStart:2,border:"thin solid gainsboro",borderRadius:"12px"},className:"app_text_16_semibold",fullWidth:!0,value:J,onChange:function(e){return X(e.target.value)},endAdornment:Object(K.jsx)(P.a,{sx:{"&:hover":{backgroundColor:"transparent"}},disabled:!J,onClick:ke,children:Object(K.jsx)(me.a,{})})})}):Object(K.jsxs)("div",{className:"d-flex align-items-center",children:[Object(K.jsx)("h4",{className:"app_text_20_semibold d-flex justify-content-center",children:null!==(a=null===l||void 0===l?void 0:l.description)&&void 0!==a?a:""}),Object(K.jsx)(P.a,{onClick:function(){F(!0)},sx:{"&:hover":{backgroundColor:"transparent"},p:0,marginInlineStart:1.5},children:Object(K.jsx)(fe.a,{w:15,h:15})})]})}),Object(K.jsxs)("div",{className:"mt-4",children:[R?Object(K.jsx)(z.c,{sx:{paddingInlineStart:2,border:"thin solid gainsboro",borderRadius:"12px"},className:"app_text_16_semibold",fullWidth:!0,onChange:function(e){ae(e.target.value)},value:te,endAdornment:Object(K.jsx)(P.a,{sx:{"&:hover":{backgroundColor:"transparent"}},disabled:!te,onClick:function(){return Se()},children:Object(K.jsx)(me.a,{})})}):Object(K.jsx)(K.Fragment,{children:Object(K.jsx)(z.c,{sx:{paddingInlineStart:2,border:"thin solid gainsboro",borderRadius:"12px"},className:"app_text_16_semibold",fullWidth:!0,disabled:!0,value:null===l||void 0===l?void 0:l.address,endAdornment:Object(K.jsx)(P.a,{sx:{"&:hover":{backgroundColor:"transparent"}},onClick:function(){return H(!0)},children:Object(K.jsx)(fe.a,{w:22,h:22})})})}),R?Object(K.jsx)("div",{className:"mt-2",children:Object(K.jsx)(Pe,{label:"test",popupFiled:!0,priviousData:"",addressData:function(e){ae(e.address),se(e.lat),pe(e.lng)},latData:"",longData:""})}):Object(K.jsx)(K.Fragment,{})]}),Object(K.jsx)("div",{className:"mt-3",children:Object(K.jsx)(ve.a,{display:"flex",justifyContent:"space-between",alignItems:"center",children:Object(K.jsx)(he.a,{control:Object(K.jsx)(_e.a,{onChange:Le,checked:T}),label:Object(K.jsx)("span",{className:"app_text_14_semibold",children:"make this group private"})})})})]})})]})})};function Fe(){var e,t=Object(s.useState)(0),a=Object(o.a)(t,2),r=a[0],v=a[1],S=Object(s.useState)(10),H=Object(o.a)(S,2),E=H[0],G=H[1],T=Object(s.useState)("asc"),V=Object(o.a)(T,2),B=V[0],W=V[1],q=Object(s.useState)("name"),U=Object(o.a)(q,2),Q=U[0],Z=U[1],ee=Object(s.useState)(""),ae=Object(o.a)(ee,2),je=ae[0],be=ae[1],pe=Object(s.useState)([]),me=Object(o.a)(pe,2),he=me[0],ve=me[1],fe=Object(s.useState)(!1),Oe=Object(o.a)(fe,2),ge=Oe[0],_e=Oe[1],ye=Object(s.useState)(!1),we=Object(o.a)(ye,2),Ce=we[0],Ne=we[1],ke=Object(s.useState)(!1),Se=Object(o.a)(ke,2),Le=Se[0],Ie=Se[1],Pe=Object(s.useState)(!1),Fe=Object(o.a)(Pe,2),Me=Fe[0],Ae=Fe[1],De=Object(s.useState)([]),Re=Object(o.a)(De,2),He=Re[0],Ee=Re[1],Ge=Object(s.useState)(""),Te=Object(o.a)(Ge,2),Ve=Te[0],Be=Te[1],We=Object(s.useState)(!1),qe=Object(o.a)(We,2),Ue=qe[0],Ke=qe[1],Qe=Object(s.useState)(!1),Ze=Object(o.a)(Qe,2),Je=Ze[0],Xe=Ze[1],Ye=Object(s.useState)([]),$e=Object(o.a)(Ye,2),et=$e[0],tt=$e[1],at=Object(s.useState)(""),nt=Object(o.a)(at,2),rt=nt[0],ct=nt[1],it=Object(s.useState)(""),ot=Object(o.a)(it,2),st=ot[0],lt=ot[1],ut=Object(s.useState)(!1),dt=Object(o.a)(ut,2),jt=dt[0],bt=dt[1],pt=Object(s.useState)(!1),mt=Object(o.a)(pt,2),ht=mt[0],xt=mt[1],vt=Object(s.useState)([]),ft=Object(o.a)(vt,2),Ot=ft[0],gt=ft[1],_t=Object(Y.b)().enqueueSnackbar,yt=Object(h.c)((function(e){return e.permissions})),wt=Object(s.useState)(!0),Ct=Object(o.a)(wt,2),Nt=Ct[0],kt=Ct[1],St=Object(y.a)(),Lt=Object(le.a)(),It=Object(re.a)(Lt.breakpoints.down("md")),Pt=Object(x.a)(l.a)((function(e){e.theme;return{"&:nth-of-type(odd)":{backgroundColor:"#ffffff"},"&:nth-of-type(even)":{background:"linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), #F4F5F7"},"& td, & th":{border:0}}}));function zt(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}function Ft(e,t){return Mt.apply(this,arguments)}function Mt(){return(Mt=Object(i.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,St.get(g.n.getChatGroup,{params:{type:"1",page:t+1,search:a,limit:E}});case 2:return n=e.sent,e.abrupt("return",n.data[0]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var At=Object(O.useQuery)(["chatGroupList",r,je],(function(){return Ft(r,je)}),{keepPreviousData:!0}),Dt=At.isLoading,Rt=At.data,Ht=At.refetch;if(Object(s.useEffect)((function(){Rt&&(ve(null===Rt||void 0===Rt?void 0:Rt.data),G(0!=(null===Rt||void 0===Rt?void 0:Rt.metadata.length)?null===Rt||void 0===Rt?void 0:Rt.metadata[0].limit:10)),0!=(null===Rt||void 0===Rt?void 0:Rt.metadata.length)&&1==(null===Rt||void 0===Rt?void 0:Rt.metadata[0].hasMoreData)&&Ft(r+1),setTimeout((function(){kt(!1)}),1800)}),[Rt]),Object(s.useEffect)((function(){var e=[];he.map((function(t){var a,n=null===t||void 0===t?void 0:t.members.map((function(e){return e.name})).join(" , "),r=null===t||void 0===t?void 0:t.admins.map((function(e){return e.name})).join(" , "),c={name:(null===t||void 0===t?void 0:t.name)?t.name:"-",createdBy:(null===t||void 0===t||null===(a=t.createdBy)||void 0===a?void 0:a.name)||"-",status:!0===t.private?"Private":"Public",groupMember:n||"-",groupAdmin:r||"-",groupActive:t.isActive?"Active group":"Inactive group"};e.push(c)})),gt(e)}),[he]),Dt)return Object(K.jsx)(w.a,{});var Et=function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}(he,function(e,t){return"desc"===e?function(e,a){return zt(e,a,t)}:function(e,a){return-zt(e,a,t)}}(B,Q)),Gt=0===Et.length,Tt=function(){Ie(!1)},Vt=function(){_e(!1)},Bt=function(){Ke(!1)},Wt=function(){Ae(!1)},qt=function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,St.post(g.d.inactiveGroup.replace(":groupid",jt));case 2:200==e.sent.status?_t("change group status successfull",{variant:"success",anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:2e3}):_t("something went wrong",{variant:"error",anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:2e3}),Ht(),Vt();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ut=function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,St.delete(g.d.deleteGroup.replace(":groupid",jt));case 2:200==e.sent.status?_t("group delete successfull",{variant:"success",anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:2e3}):_t("something went wrong",{variant:"error",anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:2e3}),Ht(),Tt();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Kt=function(e){Xe(!1)},Qt=function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,St.delete(g.d.deleteGroupMembers.replace(":groupid",jt).replace(":memberId",ht));case 2:200==e.sent.status?(_t("group member exit successfull",{variant:"success",anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:2e3}),Ht(),Ae(!1),Xe(!1)):_t("please try again!",{variant:"error",anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:2e3});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Zt={data:Ot,headers:[{label:"name",key:"name"},{label:"createdBy",key:"createdBy"},{label:"status",key:"status"},{label:"groupMember",key:"groupMember"},{label:"groupAdmin",key:"groupAdmin"},{label:"groupActive",key:"groupActive"}],filename:"beemz-chat-group.csv"};return Object(K.jsx)(K.Fragment,{children:Nt?Object(K.jsx)(w.a,{}):Object(K.jsxs)(K.Fragment,{children:[Object(K.jsxs)("div",{className:"dashboard_header mb-4",children:[Object(K.jsxs)(I.a,{className:"dashboard_searchbox col-lg-4",children:[Object(K.jsx)(P.a,{children:Object(K.jsx)(X.a,{})}),Object(K.jsx)(z.c,{fullWidth:!0,sx:{flex:1},placeholder:"search users...",onChange:function(e){return be(e.target.value.trim().replace("+","")),void Ft(0,je)}})]}),Object(K.jsxs)(C.a,{direction:"row",className:"d-flex align-items-center",spacing:2,children:["1"==(null===yt||void 0===yt||null===(e=yt.group_chat_admin)||void 0===e?void 0:e.substring(4,5))?Object(K.jsx)($.a,{title:"export-chat-group",placement:"bottom",children:Object(K.jsx)(F.a,{className:"dashboard_light_bg_icon_btn",children:Object(K.jsx)(k.CSVLink,Object(n.a)(Object(n.a)({},Zt),{},{children:Object(K.jsx)(L.a,{style:{fontSize:18,color:"#6200ee"}})}))})}):"",Object(K.jsx)($.a,{title:"refresh",placement:"bottom",children:Object(K.jsx)(F.a,{className:"dashboard_light_bg_icon_btn",children:Object(K.jsx)(f.a,{style:{fontSize:18,color:"#6200ee"}})})})]})]}),Object(K.jsxs)(u.a,{children:[Object(K.jsx)(d.a,{children:Object(K.jsxs)(j.a,{children:[Object(K.jsx)(_.a,{headLabel:[{id:"name",label:"name",alignRight:!1},{id:"createdBy",label:"group created by",alignRight:!1},{id:"status",label:"group status",alignRight:!1},{id:"groupMember",label:"group member",alignRight:!1},{id:"groupAdmin",label:"group admin",alignRight:!1},{id:"groupActive",label:"group active/inactive",alignRight:!1},{id:"action",label:"action",alignRight:!1}],rowCount:0!==(null===Rt||void 0===Rt?void 0:Rt.metadata.length)?null===Rt||void 0===Rt?void 0:Rt.metadata[0].total:0,onRequestSort:function(e,t){W(Q===t&&"asc"===B?"desc":"asc"),Z(t)}}),Object(K.jsx)(b.a,{children:Et.map((function(e,t){var a,n,r,c,i,o,s,l;return Object(K.jsxs)(Pt,{children:[Object(K.jsxs)(p.a,{component:"th",scope:"row",children:[" ",null!==(a=null===e||void 0===e?void 0:e.name)&&void 0!==a?a:"-"]}),Object(K.jsxs)(p.a,{align:"left",children:[" ",null!==(n=null===e||void 0===e||null===(r=e.createdBy)||void 0===r?void 0:r.name)&&void 0!==n?n:"-"]}),Object(K.jsxs)(p.a,{align:"left",children:[" ",!0===e.private?Object(K.jsx)(ce.a,{label:"private",className:"app_status_chip accepted"}):Object(K.jsx)(ce.a,{label:"public",className:"app_status_chip invalid"})]}),Object(K.jsx)(p.a,{children:Object(K.jsx)(C.a,{direction:"row",spacing:3,children:"1"==(null===yt||void 0===yt||null===(c=yt.users)||void 0===c?void 0:c.substring(3,4))&&Object(K.jsx)(F.a,{className:"app_text_12_fw500 app_text_transform app_text_primary theme_button_light",variant:"contained",onClick:function(){return t={groupId:e._id,members:e.members},Ee(null===t||void 0===t?void 0:t.members),bt(null===t||void 0===t?void 0:t.groupId),void Ae(!0);var t},children:"view group members"})})}),Object(K.jsx)(p.a,{children:Object(K.jsx)(C.a,{direction:"row",spacing:3,children:"1"==(null===yt||void 0===yt||null===(i=yt.users)||void 0===i?void 0:i.substring(3,4))?Object(K.jsx)(F.a,{className:"app_text_12_fw500 app_text_transform app_text_primary theme_button_light",variant:"contained",onClick:function(){return t=e.admins,tt(t),void Ke(!0);var t},children:"view group admin"}):Object(K.jsx)(K.Fragment,{})})}),Object(K.jsx)(p.a,{children:Object(K.jsx)(C.a,{direction:"row",spacing:3,children:"1"==(null===yt||void 0===yt||null===(o=yt.users)||void 0===o?void 0:o.substring(3,4))?Object(K.jsx)(F.a,{className:"app_text_12_fw500 app_text_transform app_text_primary theme_button_light",variant:"contained",onClick:function(){return t=e._id,bt(t),void _e(!0);var t},children:(null===e||void 0===e?void 0:e.isActive)?"inactive group":"active group"}):Object(K.jsx)(K.Fragment,{})})}),Object(K.jsx)(p.a,{children:Object(K.jsxs)(C.a,{direction:"row",spacing:3,children:["1"==(null===yt||void 0===yt||null===(s=yt.users)||void 0===s?void 0:s.substring(3,4))?Object(K.jsx)($.a,{title:"edit group info",placement:"bottom",children:Object(K.jsx)(F.a,{sx:{"&:hover":{bgcolor:"transparent"}},variant:"text",className:"user_list_row_btn",onClick:function(){return lt(e),void Ne(!0)},children:Object(K.jsx)(N.a,{})})}):"","1"==(null===yt||void 0===yt||null===(l=yt.users)||void 0===l?void 0:l.substring(2,3))?Object(K.jsx)($.a,{title:"delete group",placement:"bottom",children:Object(K.jsx)(F.a,{variant:"text",className:"user_list_row_btn",onClick:function(){return t=e._id,bt(t),void Ie(!0);var t},children:Object(K.jsx)(ue.a,{})})}):""]})})]},t)}))}),Gt&&Object(K.jsx)(b.a,{children:Object(K.jsx)(l.a,{children:Object(K.jsx)(p.a,{align:"center",colSpan:8,sx:{py:3},children:Object(K.jsx)("span",{className:"app_text_16_semibold",children:"no data found"})})})})]})}),Object(K.jsx)(m.a,{component:"div",rowsPerPageOptions:[10,20,50,100],count:0!=(null===Rt||void 0===Rt?void 0:Rt.metadata.length)?null===Rt||void 0===Rt?void 0:Rt.metadata[0].total:0,rowsPerPage:E,page:r,onPageChange:function(e,t){v(t)},onRowsPerPageChange:function(e){G(parseInt(e.target.value,10)),v(0),setTimeout((function(){Ht()}),500)}})]}),Object(K.jsxs)(ie.a,{fullScreen:It,open:ge,onClose:Vt,"aria-labelledby":"responsive-dialog-title",children:[Object(K.jsx)(oe.a,{id:"responsive-dialog-title",className:"m-auto",children:Object(K.jsx)("h4",{className:"app_text_20_semibold",children:"are you sure status change this group!"})}),Object(K.jsxs)(se.a,{className:"m-auto mb-2",children:[Object(K.jsx)(F.a,{className:"theme_button_view",variant:"contained",autoFocus:!0,onClick:Vt,children:"cancel"}),Object(K.jsx)(F.a,{className:"theme_button",variant:"contained",onClick:function(){return qt()},autoFocus:!0,children:"yes"})]})]}),Object(K.jsxs)(ie.a,{fullScreen:It,open:Me,onClose:Wt,className:"request_popup_wrapper linked_list_popup",children:[Object(K.jsxs)(oe.a,{className:"px-3 pt-0 d-flex justify-content-between",children:[Object(K.jsx)("span",{className:"app_text_20_500 app_text_transform",children:"group member"}),Object(K.jsx)(P.a,{"aria-label":"close",onClick:Wt,sx:{position:"absolute",right:4,top:0,height:"20px",width:"20px",p:1,color:function(e){return e.palette.grey[500]},"&:hover":{backgroundColor:"transparent"}},children:Object(K.jsx)(te.a,{style:{fontSize:20}})})]}),Object(K.jsx)(M.a,{className:"px-0 pb-0",children:He&&He.length>0?Object(K.jsxs)(K.Fragment,{children:[Object(K.jsxs)(I.a,{className:"linking_popup_searchbox mx-3",children:[Object(K.jsx)(P.a,{style:{marginTop:"-2px"},children:Object(K.jsx)(X.a,{})}),Object(K.jsx)(z.c,{sx:{ml:1,flex:1},placeholder:"search",onChange:function(e){Be(e.target.value.trim())}})]}),Object(K.jsx)(A.a,{className:"linkList mt-3 mx-3",sx:{pt:0},children:He.filter((function(e){return null===e||void 0===e?void 0:e.name.toLowerCase().includes(Ve.toLowerCase())})).map((function(e,t){return Object(K.jsxs)(D.a,{className:"",children:[Object(K.jsxs)(R.a,{display:"flex",alignItems:"center",flexGrow:1,children:[Object(K.jsx)(J,{className:"linkList_avatar_container",children:Object(K.jsx)(xe.a,{diameter:40,alternateSrc:null===e||void 0===e?void 0:e.name,imgSrc:Object(de.b)(null===e||void 0===e?void 0:e.image,"image")})}),Object(K.jsx)("h4",{className:"app_text_14_500",children:null===e||void 0===e?void 0:e.name})]}),Object(K.jsx)(R.a,{display:"flex",flexWrap:"nowrap",flexGrow:0,children:Object(K.jsx)($.a,{title:"exit member",placement:"bottom",children:Object(K.jsx)(F.a,{variant:"contained",className:"user_list_card_btn ms-2",onClick:function(){return t=null===e||void 0===e?void 0:e._id,xt(t),Xe(!0),void Ae(!1);var t},children:Object(K.jsx)(ne.a,{style:{color:"#6200EE",fontSize:"20px"}})})})})]},t)}))})]}):Object(K.jsx)(A.a,{className:"linkList mt-3 mx-3",sx:{pt:0},children:Object(K.jsx)(R.a,{display:"flex",alignItems:"center",flexGrow:1,children:Object(K.jsx)("span",{className:"app_text_20_semibold app_text_transform",children:"no group members"})})})})]}),Object(K.jsxs)(ie.a,{fullScreen:It,open:Ue,onClose:Bt,className:"request_popup_wrapper linked_list_popup",children:[Object(K.jsxs)(oe.a,{className:"px-3 pt-0 d-flex justify-content-between",children:[Object(K.jsx)("span",{className:"app_text_20_500 app_text_transform",children:"group admin"}),Object(K.jsx)(P.a,{"aria-label":"close",onClick:Bt,sx:{position:"absolute",right:4,top:0,height:"20px",width:"20px",p:1,color:function(e){return e.palette.grey[500]},"&:hover":{backgroundColor:"transparent"}},children:Object(K.jsx)(te.a,{style:{fontSize:20}})})]}),Object(K.jsx)(M.a,{className:"px-0 pb-0",children:et&&et.length>0?Object(K.jsxs)(K.Fragment,{children:[Object(K.jsxs)(I.a,{className:"linking_popup_searchbox mx-3",children:[Object(K.jsx)(P.a,{style:{marginTop:"-2px"},children:Object(K.jsx)(X.a,{})}),Object(K.jsx)(z.c,{sx:{ml:1,flex:1},placeholder:"search",onChange:function(e){ct(e.target.value.trim())}})]}),Object(K.jsx)(A.a,{className:"linkList mt-3 mx-3",sx:{pt:0},children:et.filter((function(e){return null===e||void 0===e?void 0:e.name.toLowerCase().includes(rt.toLowerCase())})).map((function(e,t){return Object(K.jsx)(D.a,{className:"",children:Object(K.jsxs)(R.a,{display:"flex",alignItems:"center",flexGrow:1,children:[Object(K.jsx)(J,{className:"linkList_avatar_container",children:Object(K.jsx)(xe.a,{diameter:40,alternateSrc:null===e||void 0===e?void 0:e.name,imgSrc:Object(de.b)(null===e||void 0===e?void 0:e.image,"image")})}),Object(K.jsx)("h4",{className:"app_text_14_500",children:null===e||void 0===e?void 0:e.name})]})},t)}))})]}):Object(K.jsx)(A.a,{className:"linkList mt-3 mx-3",sx:{pt:0},children:Object(K.jsx)(R.a,{display:"flex",alignItems:"center",flexGrow:1,children:Object(K.jsx)("span",{className:"app_text_20_semibold app_text_transform",children:"no group admin"})})})})]}),Object(K.jsxs)(ie.a,{fullScreen:It,open:Le,onClose:Tt,"aria-labelledby":"responsive-dialog-title",children:[Object(K.jsx)(oe.a,{id:"responsive-dialog-title",className:"m-auto",children:Object(K.jsx)("h4",{className:"app_text_20_semibold",children:"are you sure delete this group!"})}),Object(K.jsxs)(se.a,{className:"m-auto mb-2",children:[Object(K.jsx)(F.a,{className:"theme_button_view",variant:"contained",autoFocus:!0,onClick:Tt,children:"cancel"}),Object(K.jsx)(F.a,{className:"theme_button",variant:"contained",onClick:function(){return Ut()},autoFocus:!0,children:"yes"})]})]}),Object(K.jsx)(ze,{open:Ce,onClose:function(){Ne(!1)},groupData:st}),Object(K.jsxs)(ie.a,{fullScreen:It,open:Je,onClose:Kt,"aria-labelledby":"responsive-dialog-title",children:[Object(K.jsx)(oe.a,{id:"responsive-dialog-title",className:"m-auto",children:Object(K.jsx)("h4",{className:"app_text_20_semibold",children:"are you sure exit member this group!"})}),Object(K.jsxs)(se.a,{className:"m-auto mb-2",children:[Object(K.jsx)(F.a,{className:"theme_button_view",variant:"contained",autoFocus:!0,onClick:Kt,children:"cancel"}),Object(K.jsx)(F.a,{className:"theme_button",variant:"contained",onClick:function(){return Qt()},autoFocus:!0,children:"yes"})]})]})]})})}},914:function(e,t,a){"use strict";a(1);var n=a(0);t.a=function(){return Object(n.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("path",{d:"M5.625 2.875H5.5C5.56875 2.875 5.625 2.81875 5.625 2.75V2.875H10.375V2.75C10.375 2.81875 10.4312 2.875 10.5 2.875H10.375V4H11.5V2.75C11.5 2.19844 11.0516 1.75 10.5 1.75H5.5C4.94844 1.75 4.5 2.19844 4.5 2.75V4H5.625V2.875ZM13.5 4H2.5C2.22344 4 2 4.22344 2 4.5V5C2 5.06875 2.05625 5.125 2.125 5.125H3.06875L3.45469 13.2969C3.47969 13.8297 3.92031 14.25 4.45312 14.25H11.5469C12.0813 14.25 12.5203 13.8313 12.5453 13.2969L12.9312 5.125H13.875C13.9438 5.125 14 5.06875 14 5V4.5C14 4.22344 13.7766 4 13.5 4Z",fill:"#d40f0f"}),Object(n.jsx)("path",{d:"M11.4266 13.125H4.57344L4.19531 5.125H11.8047L11.4266 13.125Z",fill:"white"})]})}},916:function(e,t,a){"use strict";var n=a(36);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(37)),c=a(0),i=(0,r.default)((0,c.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),"CloseOutlined");t.default=i},918:function(e,t,a){"use strict";var n=a(12);a(508);function r(e,t,a,n,r,c,i){try{var o=e[c](i),s=o.value}catch(e){return void a(e)}o.done?t(s):Promise.resolve(s).then(n,r)}function c(e){return function(){var t=this,a=arguments;return new Promise((function(n,c){var i=e.apply(t,a);function o(e){r(i,n,c,o,s,"next",e)}function s(e){r(i,n,c,o,s,"throw",e)}o(void 0)}))}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=!1,o=null,s="en",l=null,u=null,d="https://maps.googleapis.com/maps/api/geocode/json";function j(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];i&&(t?console.warn(e):console.log(e))}function b(e){return p.apply(this,arguments)}function p(){return(p=c(n.mark((function e(t){var a,r;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).catch((function(){return Promise.reject(new Error("Error fetching data"))}));case 2:return a=e.sent,e.next=5,a.json().catch((function(){return j("Error parsing server response"),Promise.reject(new Error("Error parsing server response"))}));case 5:if("OK"!==(r=e.sent).status){e.next=9;break}return j(r),e.abrupt("return",r);case 9:return j("".concat(r.error_message,".\nServer returned status code ").concat(r.status),!0),e.abrupt("return",Promise.reject(new Error("".concat(r.error_message,".\nServer returned status code ").concat(r.status))));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m={setApiKey:function(e){o=e},setLanguage:function(e){s=e},setRegion:function(e){l=e},setLocationType:function(e){u=e},enableDebug:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];i=e},fromLatLng:function(e,t,a,r,i,p){return c(n.mark((function c(){var m,h;return n.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e&&t){n.next=3;break}return j("Provided coordinates are invalid",!0),n.abrupt("return",Promise.reject(new Error("Provided coordinates are invalid")));case 3:return m="".concat(e,",").concat(t),h="".concat(d,"?latlng=").concat(encodeURIComponent(m)),(a||o)&&(h+="&key=".concat(o=a||o)),(r||s)&&(h+="&language=".concat(s=r||s)),(i||l)&&(l=i||l,h+="&region=".concat(encodeURIComponent(l))),(p||u)&&(u=p||u,h+="&location_type=".concat(encodeURIComponent(u))),n.abrupt("return",b(h));case 9:case"end":return n.stop()}}),c)})))()},fromAddress:function(e,t,a,r){return c(n.mark((function c(){var i;return n.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=3;break}return j("Provided address is invalid",!0),n.abrupt("return",Promise.reject(new Error("Provided address is invalid")));case 3:return i="".concat(d,"?address=").concat(encodeURIComponent(e)),(t||o)&&(i+="&key=".concat(o=t||o)),(a||s)&&(i+="&language=".concat(s=a||s)),(r||l)&&(l=r||l,i+="&region=".concat(encodeURIComponent(l))),n.abrupt("return",b(i));case 8:case"end":return n.stop()}}),c)})))()}};t.default=m},971:function(e,t,a){"use strict";var n=a(36);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(37)),c=a(0),i=(0,r.default)((0,c.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined");t.default=i},972:function(e,t,a){"use strict";var n=a(36);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(37)),c=a(0),i=(0,r.default)((0,c.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.default=i},973:function(e,t,a){"use strict";var n=a(36);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(37)),c=a(0),i=(0,r.default)((0,c.jsx)("path",{d:"M8.65 5.82C9.36 4.72 10.6 4 12 4c2.21 0 4 1.79 4 4 0 1.4-.72 2.64-1.82 3.35L8.65 5.82zM20 17.17c-.02-1.1-.63-2.11-1.61-2.62-.54-.28-1.13-.54-1.77-.76L20 17.17zm1.19 4.02L2.81 2.81 1.39 4.22l8.89 8.89c-1.81.23-3.39.79-4.67 1.45-1 .51-1.61 1.54-1.61 2.66V20h13.17l2.61 2.61 1.41-1.42z"}),"PersonOff");t.default=i}}]);
//# sourceMappingURL=10.a7675d5b.chunk.js.map