(this["webpackJsonpbeemz-web"]=this["webpackJsonpbeemz-web"]||[]).push([[37],{1037:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return te}));var n=a(9),r=a(12),i=a.n(r),c=a(21),o=a(5),s=a(1),l=a(741),d=a(743),u=a(744),b=a(507),j=a(960),m=a(875),p=a(910),h=a(862),v=a(863),O=a(864),f=a(865),g=a(742),x=a(884),y=a(745),_=a(7),w=a(135),N=a.n(w),S=a(33),k=a(23),C=a(89),T=a(46),F=a(852),E=a(298),R=a(53),z=a(52),P=a(31),W=a(870),D=a(500),L=a(501),q=a(899),I=a(754),V=a(748),B=a(902),H=a(61),M=a(25),A=a(32),J=a(69),G=a(59),Q=a(19),U=a(95),K=a.n(U),X=a(90),Y=a(91),Z=a.n(Y),$=a(34),ee=a(0);a(65);function te(){var e,t=Object(s.useState)(0),a=Object(o.a)(t,2),r=a[0],w=a[1],U=Object(s.useState)(10),Y=Object(o.a)(U,2),te=Y[0],ae=Y[1],ne=Object(s.useState)(""),re=Object(o.a)(ne,2),ie=re[0],ce=re[1],oe=Object(s.useState)("asc"),se=Object(o.a)(oe,2),le=se[0],de=se[1],ue=Object(s.useState)("name"),be=Object(o.a)(ue,2),je=be[0],me=be[1],pe=Object(s.useState)([]),he=Object(o.a)(pe,2),ve=he[0],Oe=he[1],fe=Object(T.a)(),ge=Object(s.useState)(!0),xe=Object(o.a)(ge,2),ye=xe[0],_e=xe[1],we=Object(R.b)().enqueueSnackbar,Ne=Object(s.useState)(!1),Se=Object(o.a)(Ne,2),ke=Se[0],Ce=Se[1],Te=Object(H.a)(),Fe=Object(W.a)(Te.breakpoints.down("md")),Ee=Object(s.useState)(""),Re=Object(o.a)(Ee,2),ze=Re[0],Pe=Re[1],We=Object(s.useState)(""),De=Object(o.a)(We,2),Le=De[0],qe=De[1],Ie=Object(s.useState)(0),Ve=Object(o.a)(Ie,2),Be=Ve[0],He=Ve[1],Me=Object($.c)((function(e){return e.permissions})),Ae=Object(s.useState)([]),Je=Object(o.a)(Ae,2),Ge=Je[0],Qe=Je[1],Ue=Object(M.g)(),Ke=Object(_.a)(l.a)((function(e){e.theme;return{"&:nth-of-type(odd)":{backgroundColor:"#ffffff"},"&:nth-of-type(even)":{background:"linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), #F4F5F7"},"& td, & th":{border:0}}}));Object(s.useEffect)((function(){var e=[];ve.map((function(t){var a,n={name:(null===t||void 0===t?void 0:t.user)?null===t||void 0===t||null===(a=t.user)||void 0===a?void 0:a.name:"-",message:(null===t||void 0===t?void 0:t.message)?null===t||void 0===t?void 0:t.message:"-",reportType:1==(null===t||void 0===t?void 0:t.reportType)?"Common":2==(null===t||void 0===t?void 0:t.reportType)?"User":3==(null===t||void 0===t?void 0:t.reportType)?"Business":4==(null===t||void 0===t?void 0:t.reportType)?"Group":5==(null===t||void 0===t?void 0:t.reportType)?"Feed":6==(null===t||void 0===t?void 0:t.reportType)?"Event":"Social Media",subject:(null===t||void 0===t?void 0:t.subject)?null===t||void 0===t?void 0:t.subject:"-"};e.push(n)})),Qe(e)}),[ve]);var Xe={data:Ge,headers:[{label:"name",key:"name"},{label:"message",key:"message"},{label:"reportType",key:"reportType"},{label:"subject",key:"subject"}],filename:"beemz-reports.csv"};function Ye(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}function Ze(e,t,a){return $e.apply(this,arguments)}function $e(){return($e=Object(c.a)(i.a.mark((function e(t,a,n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe.get(k.n.getReportList,{params:{type:n,page:t+1,search:a,limit:te}});case 2:return r=e.sent,e.abrupt("return",r.data[0]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var et=Object(S.useQuery)(["reportList",r,ie,Be],(function(){return Ze(r,ie,Be)}),{keepPreviousData:!0}),tt=et.isLoading,at=et.data,nt=et.refetch;Object(s.useEffect)((function(){at&&(Oe(null===at||void 0===at?void 0:at.data),ae(0!=(null===at||void 0===at?void 0:at.metadata.length)?null===at||void 0===at?void 0:at.metadata[0].limit:10)),0!=(null===at||void 0===at?void 0:at.metadata.length)&&1==(null===at||void 0===at?void 0:at.metadata[0].hasMoreData)&&Ze(r+1),setTimeout((function(){_e(!1)}),1800)}),[at]);var rt=function(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}(ve,function(e,t){return"desc"===e?function(e,a){return Ye(e,a,t)}:function(e,a){return-Ye(e,a,t)}}(le,je)),it=function(){Ce(!1)};function ct(){return(ct=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe.delete(k.n.deleteReport+ze);case 2:200==e.sent.status?we("report deleted successfully ",{variant:"success",anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:2e3}):we("something went wrong",{variant:"error",anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:2e3}),Ce(!1),nt();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ot=Q.d().shape({message:Q.e().min(2,"message can set of between 2 and 255 characters!").max(255,"message can set of between 2 and 255 characters!").required("message is required")}),st=Object(G.e)({initialValues:{message:""},validationSchema:ot,onSubmit:function(){var e=Object(c.a)(i.a.mark((function e(t,a){var n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.resetForm,a.setFieldError,r=a.setSubmitting,c={message:t.message,reportId:Le},lt(c),n(),r(!1),nt();case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}),lt=Object(S.useMutation)(function(){var e=Object(c.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe.post(k.n.reportreply,JSON.stringify(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),{onSuccess:function(e){e.data;nt(),we("response send successfully",{variant:"success",anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:2e3}),mt()},onError:function(e){var t,a,n,r,i=e.response.data.errors;(null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message)?we(null===(n=e.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.message,{variant:"error",anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:2e3}):Object.keys(i).forEach((function(e){Ot("message"===e?"message":e,i[e])}))}}).mutateAsync,dt=Object(s.useState)(!1),ut=Object(o.a)(dt,2),bt=ut[0],jt=ut[1],mt=function(){jt(!1)},pt=st.errors,ht=st.touched,vt=(st.setFieldValue,st.handleSubmit),Ot=st.setFieldError,ft=st.getFieldProps;return tt?Object(ee.jsx)(z.a,{}):Object(ee.jsx)(ee.Fragment,{children:ye?Object(ee.jsx)(z.a,{}):Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsxs)("div",{className:"dashboard_header mb-4",children:[Object(ee.jsxs)(d.a,{className:"dashboard_searchbox col-lg-4",children:[Object(ee.jsx)(u.a,{children:Object(ee.jsx)(J.a,{})}),Object(ee.jsx)(b.a,{fullWidth:!0,sx:{flex:1},placeholder:"search user name...",onChange:function(e){return ce(e.target.value.trim()),void Ze(r,ie,Be)}})]}),Object(ee.jsx)("div",{className:"form-group w-25",children:Object(ee.jsx)(j.a,{fullWidth:!0,children:Object(ee.jsxs)(m.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"filter",defaultValue:Be,onChange:function(e){return t=e.target.value,He(t),void nt();var t},children:[Object(ee.jsx)(p.a,{value:"0",children:" all "}),Object(ee.jsx)(p.a,{value:"1",children:" comman "}),Object(ee.jsx)(p.a,{value:"2",children:" user "}),Object(ee.jsx)(p.a,{value:"3",children:" business "}),Object(ee.jsx)(p.a,{value:"4",children:" group "}),Object(ee.jsx)(p.a,{value:"5",children:" post "}),Object(ee.jsx)(p.a,{value:"6",children:" social media "})]})})}),Object(ee.jsxs)(F.a,{direction:"row",className:"d-flex align-items-center",spacing:2,children:[Object(ee.jsx)(P.a,{title:"refresh",placement:"bottom",children:Object(ee.jsx)(E.a,{className:"dashboard_light_bg_icon_btn",children:Object(ee.jsx)(N.a,{style:{fontSize:18,color:"#6200ee"}})})}),"1"==(null===Me||void 0===Me||null===(e=Me.report)||void 0===e?void 0:e.substring(1,2))?Object(ee.jsx)(P.a,{title:"export-report",placement:"bottom",children:Object(ee.jsx)(E.a,{className:"dashboard_light_bg_icon_btn",children:Object(ee.jsx)(X.CSVLink,Object(n.a)(Object(n.a)({},Xe),{},{children:Object(ee.jsx)(Z.a,{style:{fontSize:18,color:"#6200ee"}})}))})}):""]})]}),Object(ee.jsxs)(D.a,{fullScreen:Fe,open:ke,onClose:it,"aria-labelledby":"responsive-dialog-title",children:[Object(ee.jsx)(L.a,{id:"responsive-dialog-title",className:"m-auto",children:"are you sure you want to delete?"}),Object(ee.jsx)(q.a,{}),Object(ee.jsxs)(I.a,{className:"m-auto",children:[Object(ee.jsx)(E.a,{className:"theme_button_view",variant:"contained",autoFocus:!0,onClick:it,children:"cancel"}),Object(ee.jsx)(E.a,{className:"theme_button",variant:"contained",autoFocus:!0,onClick:function(){return ct.apply(this,arguments)},children:"delete"})]})]}),Object(ee.jsxs)(h.a,{children:[Object(ee.jsx)(v.a,{children:Object(ee.jsxs)(O.a,{children:[Object(ee.jsx)(C.a,{headLabel:[{id:"name",label:"user name",alignRight:!1},{id:"message",label:"message",alignRight:!1},{id:"reportType",label:"report type",alignRight:!1},{id:"ticketNumber",label:"ticket number",alignRight:!1},{id:"subject",label:"subject",alignRight:!1},{id:"action",label:"action",alignRight:!1}],rowCount:0!==(null===at||void 0===at?void 0:at.metadata.length)?null===at||void 0===at?void 0:at.metadata[0].total:0,onRequestSort:function(e,t){de(je===t&&"asc"===le?"desc":"asc"),me(t)}}),rt.length>0?Object(ee.jsx)(f.a,{children:rt.map((function(e,t){return Object(ee.jsxs)(Ke,{children:[Object(ee.jsx)(g.a,{component:"th",scope:"row",children:e.user.name&&""!=e.user.name?e.user.name:"-"}),Object(ee.jsx)(g.a,{component:"th",scope:"row",children:e.message}),Object(ee.jsx)(g.a,{component:"th",scope:"row",children:1==e.reportType?"common":2==e.reportType?"user":3==e.reportType?"business":4==e.reportType?"group":5==e.reportType?"feed":6==e.reportType?"event":"social media"}),Object(ee.jsx)(g.a,{component:"th",scope:"row",children:(null===e||void 0===e?void 0:e.ticketNumber)||"-"}),Object(ee.jsx)(g.a,{component:"th",scope:"row",children:e.subject||"-"}),Object(ee.jsx)(g.a,{children:Object(ee.jsxs)(F.a,{direction:"row",spacing:3,children:[Object(ee.jsx)(P.a,{title:"view report details",placement:"bottom",children:Object(ee.jsx)(E.a,{className:"theme_button_view",variant:"contained",onClick:function(t){return a=e,void Ue(A.c.general.reportView,{state:{reportData:a}});var a},children:"view"})}),Object(ee.jsx)(P.a,{title:"report delete",placement:"bottom",children:Object(ee.jsx)(E.a,{className:"invalid_button",variant:"contained",onClick:function(t){return a=e.reportId,Pe(a),void Ce(!0);var a},children:"delete"})}),1!==e.isReply?Object(ee.jsx)(P.a,{title:"user report response",placement:"bottom",children:Object(ee.jsx)(E.a,{className:"theme_button_view",variant:"contained",onClick:function(){return function(e){qe(e.reportId),jt(!0)}(e)},children:"reply"})}):""]})})]},t)}))}):Object(ee.jsx)(f.a,{children:Object(ee.jsx)(l.a,{children:Object(ee.jsx)(g.a,{align:"center",colSpan:5,sx:{py:5},children:Object(ee.jsx)("span",{className:"app_text_16_semibold",children:"no data found"})})})})]})}),Object(ee.jsx)(x.a,{component:"div",rowsPerPageOptions:[10,20,50,100],count:0!=(null===at||void 0===at?void 0:at.metadata.length)?null===at||void 0===at?void 0:at.metadata[0].total:0,rowsPerPage:te,page:r,onPageChange:function(e,t){w(t)},onRowsPerPageChange:function(e){ae(parseInt(e.target.value,10)),w(0),setTimeout((function(){nt()}),500)}})]}),Object(ee.jsx)(V.a,{open:bt,onClose:mt,"aria-labelledby":"child-modal-title","aria-describedby":"child-modal-description",children:Object(ee.jsxs)(y.a,{className:"modal_card modal_lg db_trust_level_modal_box",children:[Object(ee.jsxs)("div",{className:"modal_card_header",children:[Object(ee.jsx)("div",{className:"left_part",children:Object(ee.jsx)("h4",{children:"report response "})}),Object(ee.jsx)("div",{className:"right_part",children:Object(ee.jsx)(E.a,{className:"dashboard_light_bg_icon_btn",onClick:mt,"aria-label":"delete",children:Object(ee.jsx)(K.a,{})})})]}),Object(ee.jsx)("div",{className:"modal_card_body",children:Object(ee.jsx)(G.d,{value:st,children:Object(ee.jsxs)(G.c,{autoComplete:"off",noValidate:!0,onSubmit:vt,children:[Object(ee.jsxs)("div",{className:"row",children:[Object(ee.jsx)("div",{className:"col-12",children:Object(ee.jsx)("div",{className:"user_edit_header mb-4",children:Object(ee.jsx)("h4",{className:"app_text_14_semibold mb-0",children:"report response information"})})}),Object(ee.jsx)("div",{className:"col-lg-12",children:Object(ee.jsx)("div",{className:"form-group mb-4",children:Object(ee.jsx)(B.a,Object(n.a)(Object(n.a)({label:"message",autoComplete:"off",fullWidth:!0,variant:"outlined"},ft("message")),{},{error:Boolean(ht.message&&pt.message),helperText:ht.message&&pt.message}))})})]}),Object(ee.jsx)("div",{className:"col",children:Object(ee.jsx)("div",{className:"col-md-8 m-auto",children:Object(ee.jsx)(E.a,{type:"submit",fullWidth:!0,variant:"contained",className:"my-3 text-lowercase text-white app_bg_primary app_text_16_semibold app_btn_lg",children:"submit"})})})]})})}),Object(ee.jsx)("div",{className:"modal_card_footer"})]})})]})})}},960:function(e,t,a){"use strict";var n=a(2),r=a(14),i=a(1),c=a(4),o=a(219),s=a(22),l=a(49),d=a(360),u=a(195),b=i.forwardRef((function(e,t){var a=e.children,s=e.classes,b=e.className,j=e.color,m=void 0===j?"primary":j,p=e.component,h=void 0===p?"div":p,v=e.disabled,O=void 0!==v&&v,f=e.error,g=void 0!==f&&f,x=e.fullWidth,y=void 0!==x&&x,_=e.focused,w=e.hiddenLabel,N=void 0!==w&&w,S=e.margin,k=void 0===S?"none":S,C=e.required,T=void 0!==C&&C,F=e.size,E=e.variant,R=void 0===E?"standard":E,z=Object(r.a)(e,["children","classes","className","color","component","disabled","error","fullWidth","focused","hiddenLabel","margin","required","size","variant"]),P=i.useState((function(){var e=!1;return a&&i.Children.forEach(a,(function(t){if(Object(d.a)(t,["Input","Select"])){var a=Object(d.a)(t,["Select"])?t.props.input:t;a&&Object(o.a)(a.props)&&(e=!0)}})),e})),W=P[0],D=P[1],L=i.useState((function(){var e=!1;return a&&i.Children.forEach(a,(function(t){Object(d.a)(t,["Input","Select"])&&Object(o.b)(t.props,!0)&&(e=!0)})),e})),q=L[0],I=L[1],V=i.useState(!1),B=V[0],H=V[1],M=void 0!==_?_:B;O&&M&&H(!1);var A=i.useCallback((function(){I(!0)}),[]),J={adornedStart:W,setAdornedStart:D,color:m,disabled:O,error:g,filled:q,focused:M,fullWidth:y,hiddenLabel:N,margin:("small"===F?"dense":void 0)||k,onBlur:function(){H(!1)},onEmpty:i.useCallback((function(){I(!1)}),[]),onFilled:A,onFocus:function(){H(!0)},registerEffect:undefined,required:T,variant:R};return i.createElement(u.a.Provider,{value:J},i.createElement(h,Object(n.a)({className:Object(c.a)(s.root,b,"none"!==k&&s["margin".concat(Object(l.a)(k))],y&&s.fullWidth),ref:t},z),a))}));t.a=Object(s.a)({root:{display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},marginNormal:{marginTop:16,marginBottom:8},marginDense:{marginTop:8,marginBottom:4},fullWidth:{width:"100%"}},{name:"MuiFormControl"})(b)}}]);
//# sourceMappingURL=37.36be8186.chunk.js.map