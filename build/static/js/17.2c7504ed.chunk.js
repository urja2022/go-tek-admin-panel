(this["webpackJsonpbeemz-web"]=this["webpackJsonpbeemz-web"]||[]).push([[17],{1034:function(e,t,n){"use strict";n.r(t);var a=n(12),i=n.n(a),r=n(21),s=n(5),c=n(1),l=n(741),o=n(862),u=n(863),d=n(864),j=n(865),b=n(742),h=n(869),p=n(25),f=n(33),x=n(46),O=n(23),m=n(52),g=n(89),v=n(35),_=n.n(v),w=n(7),C=n(298),k=(n(356),n(32)),y=n(31),H=n(852),L=n(53),N=(n(914),n(939)),M=n(940),z=n.n(M),R=n(941),S=n.n(R),V=n(0);t.default=function(){var e=Object(x.a)(),t=Object(c.useState)(!0),n=Object(s.a)(t,2),a=n[0],v=n[1],M=Object(c.useState)(!1),R=Object(s.a)(M,2),F=R[0],A=R[1],D=Object(p.g)(),I=Object(L.b)().enqueueSnackbar,P=Object(c.useState)(!1),Y=Object(s.a)(P,2),B=Y[0],T=Y[1],U=Object(p.f)().state,Z=Object(w.a)(l.a)((function(e){e.theme;return{"&:nth-of-type(odd)":{backgroundColor:"#ffffff"},"&:nth-of-type(even)":{background:"linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), #F4F5F7"},"& td, & th":{border:0}}})),q=Object(f.useQuery)("userSocialList",function(){var t=Object(r.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.signal,t.next=3,e.get(O.l.getUserSocialList+(null===U||void 0===U?void 0:U.User_id),{signal:a}).then((function(e){return e.data[0].data}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{refetchOnWindowFocus:!1}),J=q.data,Q=q.refetch;function W(){return(W=Object(r.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v(!0),t.next=3,e.put(O.l.postInactive+n);case 3:200==t.sent.status?(Q(),I("status change successfully ",{variant:"success",anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:2e3}),setTimeout((function(){v(!1)}),1e3)):(I("something went wrong",{variant:"error",anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:2e3}),v(!1));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(){return(E=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T(!0),A(t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}setTimeout((function(){v(!1)}),2e3);return Object(V.jsx)(V.Fragment,{children:a?Object(V.jsx)(m.a,{}):Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)("div",{className:"dashboard_header mb-4",children:Object(V.jsx)("h4",{className:"app_text_20_semibold mb-0 d-flex align-items-center",children:"user social media posts"})}),Object(V.jsxs)(o.a,{children:[Object(V.jsx)(u.a,{children:Object(V.jsxs)(d.a,{children:[Object(V.jsx)(g.a,{headLabel:[{id:"name",label:"name",alignRight:!1},{id:"address",label:"address",alignRight:!1},{id:"comment",label:"comment",alignRight:!1},{id:"like",label:"like",alignRight:!1},{id:"description",label:"description",alignRight:!1},{id:"visibility",label:"visibility",alignRight:!1},{id:"createdAt",label:"createdAt",alignRight:!1},{id:"action",label:"action",alignRight:!1}]}),(null===J||void 0===J?void 0:J.length)>0?Object(V.jsx)(j.a,{children:0!=J.length&&(null===J||void 0===J?void 0:J.map((function(e){var t,n,a;return Object(V.jsxs)(Z,{children:[Object(V.jsx)(b.a,{component:"th",scope:"row",children:e.userName}),Object(V.jsxs)(b.a,{align:"left",children:[" ",null===e||void 0===e||null===(t=e.address)||void 0===t?void 0:t.name]}),Object(V.jsxs)(b.a,{align:"left",children:[" ",null!==(n=e.totalComments)&&void 0!==n?n:0]}),Object(V.jsxs)(b.a,{align:"left",children:[" ",null!==(a=e.totalLikes)&&void 0!==a?a:0]}),Object(V.jsxs)(b.a,{align:"left",children:[" ",null===e||void 0===e?void 0:e.description]}),"                                                ",Object(V.jsx)(b.a,{align:"left",children:Object(V.jsx)(y.a,{title:"change status",placement:"bottom",children:Object(V.jsx)(h.a,{checked:0===e.isBlockPost,onChange:function(){return function(e){return W.apply(this,arguments)}(e._id)},defaultChecked:!0})})}),Object(V.jsxs)(b.a,{align:"left",children:["  ",_()(null===e||void 0===e?void 0:e.createdAt).format("MMM DD YYYY h:mm A")]}),Object(V.jsx)(b.a,{children:Object(V.jsxs)(H.a,{direction:"row",spacing:3,children:[Object(V.jsx)(y.a,{title:"post report user list",placement:"bottom",children:Object(V.jsx)(C.a,{onClick:function(){return function(e){return E.apply(this,arguments)}(e._id)},variant:"text",className:"user_list_row_btn",children:Object(V.jsx)(z.a,{})})}),Object(V.jsx)(y.a,{title:"users comments",placement:"bottom",children:Object(V.jsx)(C.a,{onClick:function(){return t=e._id,void D(k.c.general.socialComment,{state:{post_id:t}});var t},variant:"text",className:"user_list_row_btn",children:Object(V.jsx)(S.a,{})})})]})})]},e._id)})))}):Object(V.jsx)(j.a,{children:Object(V.jsx)(l.a,{children:Object(V.jsx)(b.a,{align:"center",colSpan:7,sx:{py:5},children:Object(V.jsx)("span",{className:"app_text_16_semibold",children:"no data found"})})})})]})}),Object(V.jsx)(N.a,{newLinkId:F,open:B,onClose:function(e){T(!1),A(!1)}})]})]})})}},914:function(e,t,n){"use strict";n(1);var a=n(0);t.a=function(){return Object(a.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(a.jsx)("path",{d:"M5.625 2.875H5.5C5.56875 2.875 5.625 2.81875 5.625 2.75V2.875H10.375V2.75C10.375 2.81875 10.4312 2.875 10.5 2.875H10.375V4H11.5V2.75C11.5 2.19844 11.0516 1.75 10.5 1.75H5.5C4.94844 1.75 4.5 2.19844 4.5 2.75V4H5.625V2.875ZM13.5 4H2.5C2.22344 4 2 4.22344 2 4.5V5C2 5.06875 2.05625 5.125 2.125 5.125H3.06875L3.45469 13.2969C3.47969 13.8297 3.92031 14.25 4.45312 14.25H11.5469C12.0813 14.25 12.5203 13.8313 12.5453 13.2969L12.9312 5.125H13.875C13.9438 5.125 14 5.06875 14 5V4.5C14 4.22344 13.7766 4 13.5 4Z",fill:"#d40f0f"}),Object(a.jsx)("path",{d:"M11.4266 13.125H4.57344L4.19531 5.125H11.8047L11.4266 13.125Z",fill:"white"})]})}},939:function(e,t,n){"use strict";var a=n(12),i=n.n(a),r=n(21),s=n(5),c=n(1),l=n(506),o=n(501),u=n(500),d=n(300),j=n(95),b=n.n(j),h=n(299),p=n(68),f=n(69),x=n(220),O=n(46),m=n(23),g=n(33),v=n(0);t.a=function(e){var t=e.onClose,n=e.open,a=e.newLinkId,j=Object(c.useState)(""),_=Object(s.a)(j,2),w=_[0],C=_[1],k=Object(O.a)(),y=Object(g.useQuery)("newLinkRequest",function(){var e=Object(r.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.signal,!a){e.next=5;break}return e.next=4,k.get(m.l.reportPostUser+a,{signal:n}).then((function(e){return e.data}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),{refetchOnWindowFocus:!1}),H=y.data,L=y.refetch;return Object(c.useEffect)((function(){a&&L()}),[a]),Object(v.jsxs)(u.a,{onClose:function(){t()},open:n,className:"linking_popup_wrapper",children:[Object(v.jsxs)(o.a,{className:"px-0 pt-0 position-relative",children:[Object(v.jsx)("span",{className:"app_text_20_500",children:"post report user list"}),t?Object(v.jsx)(d.a,{className:"dialog_close_btn","aria-label":"close",onClick:t,sx:{position:"absolute",top:"-10px",right:"-10px",color:function(e){return e.palette.grey[500]}},children:Object(v.jsx)(b.a,{})}):null]}),H&&H.length>0?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(h.a,{className:"linking_popup_searchbox",children:[Object(v.jsx)(d.a,{style:{marginTop:"-2px"},children:Object(v.jsx)(f.a,{})}),Object(v.jsx)(p.c,{sx:{ml:1,flex:1},placeholder:"search",onChange:function(e){C(e.target.value.trim())}})]}),Object(v.jsx)("h4",{className:"app_text_gray app_text_12_fw500 py-3 ps-1",children:"list of users who are post report"}),Object(v.jsx)(l.a,{className:"linkList",sx:{pt:0},children:H.filter((function(e){var t;return null===e||void 0===e||null===(t=e.userName)||void 0===t?void 0:t.toLowerCase().includes(w.toLowerCase())})).map((function(e,t){return Object(v.jsx)(x.a,{userId:null===e||void 0===e?void 0:e.id,userName:null===e||void 0===e?void 0:e.reason,name:e.userName},t)}))})]}):Object(v.jsx)("span",{className:"app_text_20_semibold",children:"no post report user"})]})}},940:function(e,t,n){"use strict";var a=n(36);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(37)),r=n(0),s=(0,i.default)((0,r.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"}),"BlockOutlined");t.default=s},941:function(e,t,n){"use strict";var a=n(36);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(37)),r=n(0),s=(0,i.default)((0,r.jsx)("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM20 4v13.17L18.83 16H4V4h16zM6 12h12v2H6zm0-3h12v2H6zm0-3h12v2H6z"}),"CommentOutlined");t.default=s}}]);
//# sourceMappingURL=17.2c7504ed.chunk.js.map