(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{219:function(e,n,t){e.exports=t(444)},226:function(e,n,t){},444:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),o=t(26),r=t.n(o),s=(t(224),t(226),t(16)),l=t(17),c=t(19),u=t(18),m=t(20),d=t(62),p=t(63),g=t(24),h=t.n(g),f=(t(276),t(189)),y=t.n(f),C=t(99),E=t.n(C),S=t(131),b=t.n(S),v=t(203),k=t.n(v),w=t(204),O=t.n(w),A=t(130),P=t.n(A),I=t(141),j=t.n(I),D=t(205),x=t.n(D),T=t(206),U=t.n(T),K=t(207),R=t.n(K),N=t(208),V=t.n(N),W=t(209),M=t.n(W),F=t(210),G=t.n(F),B=t(211),L=t.n(B),H=t(212),q=t.n(H),z=t(213),J=t.n(z),Y=t(214),Q=t.n(Y),Z=t(215),X=t.n(Z),$=t(132),_=t.n($),ee=t(216),ne=t.n(ee),te=t(22),ae=t(37),ie=t.n(ae),oe=t(61),re=t.n(oe),se=t(218),le=t.n(se),ce=t(217),ue=t.n(ce),me=t(78),de=t.n(me),pe=t(190),ge=t.n(pe),he=t(192),fe=t.n(he),ye=t(41),Ce=t.n(ye),Ee=t(10),Se=t.n(Ee),be=t(193),ve=t.n(be),ke=t(194),we=t.n(ke),Oe=t(196),Ae=t.n(Oe),Pe=t(49),Ie=t.n(Pe),je=t(195),De=t.n(je),xe=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e))).openMenu=function(e){var n=e.currentTarget;t.setState({menu:{anchorEl:n}})},t.closeMenu=function(){t.setState({menu:{anchorEl:null}})},t.handleSettingsClick=function(){t.closeMenu(),t.props.onSettingsClick()},t.handleSignOutClick=function(){t.closeMenu(),t.props.onSignOutClick()},t.state={menu:{anchorEl:null}},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.classes,t=e.name,a=e.isSignedIn,o=e.isSigningUp,r=e.isSigningIn,s=e.user,l=this.props,c=l.onSignUpClick,u=l.onSignInClick,m=this.state.menu;return i.a.createElement(ge.a,{color:"primary",position:"static"},i.a.createElement(fe.a,{variant:"regular"},i.a.createElement(Ce.a,{style:{flexGrow:1},color:"inherit",variant:"h6"},t),a&&i.a.createElement(i.a.Fragment,null,i.a.createElement(ve.a,{color:"inherit",onClick:this.openMenu},s.photoURL?i.a.createElement(we.a,{alt:"Avatar",src:s.photoURL}):i.a.createElement(De.a,null)),i.a.createElement(Ae.a,{anchorEl:m.anchorEl,open:Boolean(m.anchorEl),onClose:this.closeMenu},i.a.createElement(Ie.a,{onClick:this.handleSettingsClick},"Settings"),i.a.createElement(Ie.a,{onClick:this.handleSignOutClick},"Sign out"))),!a&&i.a.createElement(i.a.Fragment,null,i.a.createElement(Se.a,{className:n.signUpButton,color:"secondary",disabled:o,variant:"contained",onClick:c},"Sign Up"),i.a.createElement(Se.a,{color:"secondary",disabled:r,variant:"contained",onClick:u},"Sign In"))))}}]),n}(a.Component),Te=Object(te.withStyles)(function(e){return{signUpButton:{marginRight:e.spacing.unit}}})(xe),Ue=function(e){function n(){return Object(s.a)(this,n),Object(c.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.classes,t=e.icon,a=e.title,o=e.description,r=e.button;return i.a.createElement("div",{className:n.center},t,a&&i.a.createElement(Ce.a,{color:"textSecondary",variant:"h4"},a),o&&i.a.createElement(Ce.a,{color:"textSecondary",variant:"subtitle1"},o),r)}}]),n}(a.Component),Ke=Object(te.withStyles)({center:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center"}})(Ue),Re=t(100),Ne=t.n(Re),Ve=function(e){function n(){return Object(s.a)(this,n),Object(c.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(Ke,{icon:i.a.createElement(Ne.a,{className:e.emptyStateIcon,color:"action"}),title:"Home",description:"Use React + Material-UI + Firebase as a starting point for your project.",button:i.a.createElement(re.a,{className:e.button,color:"primary",component:d.b,to:"/something-crazy",variant:"extended"},"Do Something Crazy")})}}]),n}(a.Component),We=Object(te.withStyles)(function(e){return{emptyStateIcon:{fontSize:"".concat(12*e.spacing.unit,"px")},button:{marginTop:"".concat(e.spacing.unit,"px")}}})(Ve),Me=t(199),Fe=t.n(Me),Ge=function(e){function n(){return Object(s.a)(this,n),Object(c.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(Ke,{icon:i.a.createElement(Fe.a,{className:e.emptyStateIcon,color:"action"}),title:"Content Not Found",description:"The requested URL was not found on this server.",button:i.a.createElement(re.a,{className:e.button,color:"primary",component:d.b,to:"/",variant:"extended"},i.a.createElement(Ne.a,{className:e.buttonIcon})," Go Home")})}}]),n}(a.Component),Be=Object(te.withStyles)(function(e){return{emptyStateIcon:{fontSize:"".concat(12*e.spacing.unit,"px")},button:{marginTop:"".concat(e.spacing.unit,"px")},buttonIcon:{marginRight:"".concat(e.spacing.unit,"px")}}})(Ge),Le=t(64),He=t.n(Le),qe=t(30),ze=t.n(qe),Je=t(31),Ye=t.n(Je),Qe=t(32),Ze=t.n(Qe),Xe=t(28),$e=t.n(Xe),_e=t(27),en=t.n(_e),nn=t(42),tn=t.n(nn),an=t(135),on=t.n(an),rn=t(136),sn=t.n(rn),ln=t(137),cn=t.n(ln),un=function(e){function n(){return Object(s.a)(this,n),Object(c.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.classes,t=e.isSigningIn,a=this.props.onAuthProviderClick;return i.a.createElement(i.a.Fragment,null,i.a.createElement(ie.a,{only:"xs"},i.a.createElement(en.a,{className:n.dialogActions},i.a.createElement(Se.a,{className:n.google,disabled:t,variant:"contained",onClick:function(){return a(new h.a.auth.GoogleAuthProvider)}},i.a.createElement(on.a,{className:n.icon}),"Google"),i.a.createElement(Se.a,{className:n.facebook,disabled:t,variant:"contained",onClick:function(){return a(new h.a.auth.FacebookAuthProvider)}},i.a.createElement(sn.a,{className:n.icon}),"Facebook"),i.a.createElement(Se.a,{className:n.twitter,disabled:t,variant:"contained",onClick:function(){return a(new h.a.auth.TwitterAuthProvider)}},i.a.createElement(cn.a,{className:n.icon}),"Twitter"),i.a.createElement(Se.a,{className:n.gitHub,disabled:t,variant:"contained",onClick:function(){return a(new h.a.auth.GithubAuthProvider)}},i.a.createElement(de.a,{className:n.icon}),"GitHub"))),i.a.createElement(ie.a,{only:["sm","md","lg","xl"]},i.a.createElement(en.a,{className:n.dialogActionsMobile},i.a.createElement(Se.a,{className:"".concat(n.google," ").concat(n.buttonMobile),disabled:t,variant:"contained",onClick:function(){return a(new h.a.auth.GoogleAuthProvider)}},i.a.createElement(on.a,{className:n.icon}),"Google"),i.a.createElement(Se.a,{className:"".concat(n.facebook," ").concat(n.buttonMobile),disabled:t,variant:"contained",onClick:function(){return a(new h.a.auth.FacebookAuthProvider)}},i.a.createElement(sn.a,{className:n.icon}),"Facebook"),i.a.createElement(Se.a,{className:"".concat(n.twitter," ").concat(n.buttonMobile),disabled:t,variant:"contained",onClick:function(){return a(new h.a.auth.TwitterAuthProvider)}},i.a.createElement(cn.a,{className:n.icon}),"Twitter"),i.a.createElement(Se.a,{className:"".concat(n.gitHub," ").concat(n.buttonMobile),disabled:t,variant:"contained",onClick:function(){return a(new h.a.auth.GithubAuthProvider)}},i.a.createElement(de.a,{className:n.icon}),"GitHub"))))}}]),n}(a.Component),mn=Object(te.withStyles)(function(e){return{dialogActions:{justifyContent:"center",marginTop:"".concat(2.5*e.spacing.unit,"px"),marginBottom:"".concat(e.spacing.unit,"px")},dialogActionsMobile:{display:"grid",justifyContent:"stretch",marginTop:"".concat(2.5*e.spacing.unit,"px"),marginBottom:"".concat(e.spacing.unit/3,"px")},buttonMobile:{marginBottom:"".concat(1.5*e.spacing.unit,"px")},google:{backgroundColor:"#4285f4",color:"#ffffff"},facebook:{backgroundColor:"#3c5a99",color:"#ffffff"},twitter:{backgroundColor:"#1da1f2",color:"#ffffff"},gitHub:{backgroundColor:"#24292e",color:"#ffffff"},icon:{marginRight:"".concat(e.spacing.unit/2,"px")}}})(un),dn={emailAddress:"",password:"",passwordConfirmation:"",errors:null},pn=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e))).signUp=function(){var e=t.state,n=e.emailAddress,a=e.password,i=e.passwordConfirmation,o=He()({emailAddress:n,password:a,passwordConfirmation:i},{emailAddress:{email:!0,presence:{allowEmpty:!1}},password:{length:{minimum:6},presence:{allowEmpty:!1}},passwordConfirmation:{equality:"password",length:{minimum:6},presence:{allowEmpty:!1}}});o?t.setState({errors:o}):t.setState({errors:null},function(){t.props.signUp(n,a)})},t.handleExited=function(){t.setState(dn)},t.handleKeyPress=function(e){var n=e.key;e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||"Enter"===n&&t.signUp()},t.handleEmailAddressChange=function(e){var n=e.target.value;t.setState({emailAddress:n})},t.handlePasswordChange=function(e){var n=e.target.value;t.setState({password:n})},t.handlePasswordConfirmationChange=function(e){var n=e.target.value;t.setState({passwordConfirmation:n})},t.handleSignUpClick=function(){t.signUp()},t.state=dn,t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.open,t=e.fullScreen,a=e.isSigningUp,o=e.isSigningIn,r=this.props,s=r.onClose,l=r.onAuthProviderClick,c=this.state,u=c.emailAddress,m=c.password,d=c.passwordConfirmation,p=c.errors;return i.a.createElement(ze.a,{open:n,fullScreen:t,onClose:s,onExited:this.handleExited,onKeyPress:this.handleKeyPress},i.a.createElement(Ye.a,null,"Sign up for an account"),i.a.createElement(Ze.a,null,i.a.createElement($e.a,null,"Create an account to access features that are unavailable to users who haven't signed up."),i.a.createElement(mn,{isSigningIn:o,onAuthProviderClick:l}),i.a.createElement("form",null,i.a.createElement(tn.a,{autoComplete:"email",error:!(!p||!p.emailAddress),fullWidth:!0,helperText:p&&p.emailAddress?p.emailAddress[0]:"",label:"E-mail address",margin:"normal",onChange:this.handleEmailAddressChange,required:!0,type:"email",value:u}),i.a.createElement(tn.a,{autoComplete:"new-password",error:!(!p||!p.password),fullWidth:!0,helperText:p&&p.password?p.password[0]:"",label:"Password",margin:"normal",onChange:this.handlePasswordChange,required:!0,type:"password",value:m}),i.a.createElement(tn.a,{autoComplete:"password",error:!(!p||!p.passwordConfirmation),fullWidth:!0,helperText:p&&p.passwordConfirmation?p.passwordConfirmation[0]:"",label:"Password confirmation",margin:"normal",onChange:this.handlePasswordConfirmationChange,required:!0,type:"password",value:d}))),i.a.createElement(en.a,null,i.a.createElement(Se.a,{color:"primary",onClick:s},"Cancel"),i.a.createElement(Se.a,{color:"primary",disabled:!u||!m||!d||a,variant:"contained",onClick:this.handleSignUpClick},"Sign Up")))}}]),n}(a.Component),gn={emailAddress:"",password:"",errors:null},hn=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e))).signIn=function(){var e=t.state,n=e.emailAddress,a=e.password,i=He()({emailAddress:n,password:a},{emailAddress:{email:!0,presence:{allowEmpty:!1}},password:{length:{minimum:6},presence:{allowEmpty:!1}}});i?t.setState({errors:i}):t.setState({errors:null},function(){t.props.signIn(n,a)})},t.handleExited=function(){t.setState(gn)},t.handleKeyPress=function(e){var n=e.key;e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||"Enter"===n&&t.signIn()},t.handleEmailAddressChange=function(e){var n=e.target.value;t.setState({emailAddress:n})},t.handlePasswordChange=function(e){var n=e.target.value;t.setState({password:n})},t.handleSignInClick=function(){t.signIn()},t.state=gn,t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.open,t=e.fullScreen,a=e.isSigningIn,o=this.props,r=o.onClose,s=o.onAuthProviderClick,l=o.onResetPasswordClick,c=this.state,u=c.emailAddress,m=c.password,d=c.errors;return i.a.createElement(ze.a,{open:n,fullScreen:t,onClose:r,onExited:this.handleExited,onKeyPress:this.handleKeyPress},i.a.createElement(Ye.a,null,"Sign in to your account"),i.a.createElement(Ze.a,null,i.a.createElement($e.a,null,"Some features might be unavailable until you sign in. While you're signed in you can manage your account."),i.a.createElement(mn,{isSigningIn:a,onAuthProviderClick:s}),i.a.createElement("form",null,i.a.createElement(tn.a,{autoComplete:"email",error:!(!d||!d.emailAddress),fullWidth:!0,helperText:d&&d.emailAddress?d.emailAddress[0]:"",margin:"normal",onChange:this.handleEmailAddressChange,placeholder:"E-mail address",required:!0,type:"email",value:u}),i.a.createElement(tn.a,{autoComplete:"current-password",error:!(!d||!d.password),fullWidth:!0,helperText:d&&d.password?d.password[0]:"",margin:"normal",onChange:this.handlePasswordChange,placeholder:"Password",required:!0,type:"password",value:m}))),i.a.createElement(en.a,null,i.a.createElement(Se.a,{color:"primary",onClick:r},"Cancel"),i.a.createElement(Se.a,{color:"primary",variant:"outlined",onClick:l},"Reset Password"),i.a.createElement(Se.a,{color:"primary",disabled:!u||!m||a,variant:"contained",onClick:this.handleSignInClick},"Sign In")))}}]),n}(a.Component),fn={emailAddress:"",errors:null},yn=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e))).resetPassword=function(){var e=t.state.emailAddress,n=He()({emailAddress:e},{emailAddress:{email:!0,presence:{allowEmpty:!1}}});n?t.setState({errors:n}):t.setState({errors:null},function(){t.props.resetPassword(e)})},t.handleExited=function(){t.setState(fn)},t.handleKeyPress=function(e){var n=e.key;e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||"Enter"===n&&(e.preventDefault(),t.resetPassword())},t.handleEmailAddressChange=function(e){var n=e.target.value;t.setState({emailAddress:n})},t.handleResetPasswordClick=function(){t.resetPassword()},t.state=fn,t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.open,t=e.isResettingPassword,a=this.props.onClose,o=this.state,r=o.emailAddress,s=o.errors;return i.a.createElement(ze.a,{open:n,onClose:a,onExited:this.handleExited,onKeyPress:this.handleKeyPress},i.a.createElement(Ye.a,null,"Reset your password"),i.a.createElement(Ze.a,null,i.a.createElement($e.a,null,"An e-mail will be sent to your e-mail address containing instructions on how to reset your password."),i.a.createElement("form",null,i.a.createElement(tn.a,{autoComplete:"email",autoFocus:!0,error:!(!s||!s.emailAddress),fullWidth:!0,helperText:s&&s.emailAddress?s.emailAddress[0]:"",margin:"normal",onChange:this.handleEmailAddressChange,placeholder:"E-mail address",required:!0,type:"email",value:r}))),i.a.createElement(en.a,null,i.a.createElement(Se.a,{color:"primary",onClick:a},"Cancel"),i.a.createElement(Se.a,{color:"primary",disabled:!r||t,variant:"contained",onClick:this.handleResetPasswordClick},"Reset Password")))}}]),n}(a.Component),Cn=t(202),En=t.n(Cn),Sn=t(140),bn=t.n(Sn),vn=t(138),kn=t.n(vn),wn=t(133),On=t.n(wn),An=t(77),Pn=t.n(An),In=t(101),jn=t.n(In),Dn=t(103),xn=t.n(Dn),Tn=t(201),Un=t.n(Tn),Kn=t(102),Rn=t.n(Kn),Nn=t(200),Vn=t.n(Nn),Wn=t(139),Mn=t.n(Wn),Fn=function(e){function n(){var e,t;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(i)))).handleKeyPress=function(e){var n=e.key;e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||"Enter"===n&&t.props.onOkClick()},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props.open,n=this.props,t=n.title,a=n.contentText,o=n.cancelText,r=n.okText,s=n.highlightOkButton,l=this.props.onClose,c=this.props,u=c.onCancelClick,m=c.onOkClick;return i.a.createElement(ze.a,{open:e,onClose:l,onKeyPress:this.handleKeyPress},t&&i.a.createElement(Ye.a,null,t),a&&i.a.createElement(Ze.a,null,i.a.createElement($e.a,null,a)),(u||m)&&i.a.createElement(en.a,null,u&&i.a.createElement(Se.a,{color:"primary",onClick:u},o||"Cancel"),m&&i.a.createElement(Se.a,{color:"primary",variant:s&&"contained",onClick:m},r||"OK")))}}]),n}(a.Component),Gn=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e))).openVerifyEmailAddressDialog=function(){t.setState({verifyEmailAddressDialog:{open:!0}})},t.closeVerifyEmailAddressDialog=function(e){t.setState({verifyEmailAddressDialog:{open:!1}},function(){e&&"function"===typeof e&&e()})},t.verifyEmailAddress=function(){t.closeVerifyEmailAddressDialog(function(){t.props.onVerifyEmailAddressClick()})},t.state={verifyEmailAddressDialog:{open:!1}},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.classes,t=e.user,a=e.isVerifyingEmailAddress,o=this.state.verifyEmailAddressDialog;return i.a.createElement(i.a.Fragment,null,i.a.createElement($e.a,{className:n.dialogContentText},"This is a summary of your account. You can manage your account throughout all the settings."),i.a.createElement(On.a,null,i.a.createElement(Pn.a,null,i.a.createElement(jn.a,null,i.a.createElement(Rn.a,{title:"E-mail address"},i.a.createElement(Vn.a,null))),i.a.createElement(xn.a,{primary:t.email,secondary:t.emailVerified?"Verified":"Not verified"}),!t.emailVerified&&i.a.createElement(Un.a,null,i.a.createElement(Se.a,{color:"primary",disabled:a,variant:"contained",onClick:this.openVerifyEmailAddressDialog},"Verify"))),i.a.createElement(Pn.a,null,i.a.createElement(jn.a,null,i.a.createElement(Rn.a,{title:"Signed in"},i.a.createElement(Mn.a,null))),i.a.createElement(xn.a,{primary:"Signed in",secondary:kn()(t.metadata.lastSignInTime).format("LLLL")})),i.a.createElement(Pn.a,null,i.a.createElement(jn.a,null,i.a.createElement(Rn.a,{title:"Signed up"},i.a.createElement(Mn.a,null))),i.a.createElement(xn.a,{primary:"Signed up",secondary:kn()(t.metadata.creationTime).format("LLLL")}))),i.a.createElement(Fn,{open:o.open,title:"Verify e-mail address?",contentText:"An e-mail will be sent to your e-mail address containing instructions on how to verify your e-mail address.",okText:"Verify",highlightOkButton:!0,onClose:this.closeVerifyEmailAddressDialog,onCancelClick:this.closeVerifyEmailAddressDialog,onOkClick:this.verifyEmailAddress}))}}]),n}(a.Component),Bn=Object(te.withStyles)(function(e){return{dialogContentText:{marginTop:"".concat(2*e.spacing.unit,"px")}}})(Gn),Ln=t(80),Hn=t.n(Ln),qn=t(79),zn=t.n(qn),Jn=t(81),Yn=t.n(Jn),Qn=function(e){function n(){return Object(s.a)(this,n),Object(c.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.classes,t=e.colors,a=e.types,o=e.primaryColor,r=e.secondaryColor,s=e.type,l=this.props,c=l.onPrimaryColorChange,u=l.onSecondaryColorChange,m=l.onTypeChange;return i.a.createElement(i.a.Fragment,null,i.a.createElement($e.a,{className:n.dialogContentText},"Customize the look and feel to your own liking. You can reset all changes you've made by clicking Reset."),i.a.createElement(Hn.a,{fullWidth:!0,margin:"normal"},i.a.createElement(zn.a,null,"Primary color"),i.a.createElement(Yn.a,{onChange:c,value:o},t.map(function(e){return i.a.createElement(Ie.a,{key:e.id,value:e.id},e.name)}))),i.a.createElement(Hn.a,{fullWidth:!0,margin:"normal"},i.a.createElement(zn.a,null,"Secondary color"),i.a.createElement(Yn.a,{onChange:u,value:r},t.map(function(e){return i.a.createElement(Ie.a,{key:e.id,value:e.id},e.name)}))),i.a.createElement(Hn.a,{fullWidth:!0,margin:"normal"},i.a.createElement(zn.a,null,"Type"),i.a.createElement(Yn.a,{onChange:m,value:s},a.map(function(e,n){return i.a.createElement(Ie.a,{key:n,value:e},e.charAt(0).toUpperCase()+e.slice(1))}))))}}]),n}(a.Component),Zn=Object(te.withStyles)(function(e){return{dialogContentText:{marginTop:"".concat(2*e.spacing.unit,"px")}}})(Qn),Xn=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e))).handleKeyPress=function(e){var n=e.key;e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||"Enter"===n&&t.props.onClose()},t.changeTab=function(e,n){t.setState({selectedTab:n})},t.state={selectedTab:0},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.classes,t=e.open,a=e.fullScreen,o=e.user,r=e.isVerifyingEmailAddress,s=e.colors,l=e.types,c=e.primaryColor,u=e.secondaryColor,m=e.type,d=this.props,p=d.onClose,g=d.onVerifyEmailAddressClick,h=d.onPrimaryColorChange,f=d.onSecondaryColorChange,y=d.onTypeChange,C=d.onResetClick,E=this.state.selectedTab;return i.a.createElement(ze.a,{open:t,fullScreen:a,onClose:p,onKeyPress:this.handleKeyPress},i.a.createElement(Ye.a,null,"Settings"),i.a.createElement(En.a,{onChange:this.changeTab,value:E,variant:"fullWidth"},i.a.createElement(bn.a,{classes:{label:"light"===m?n.light:n.dark},label:"Account"}),i.a.createElement(bn.a,{classes:{label:"light"===m?n.light:n.dark},label:"Appearance"})),i.a.createElement(Ze.a,null,0===E&&i.a.createElement(Bn,{user:o,isVerifyingEmailAddress:r,onVerifyEmailAddressClick:g}),1===E&&i.a.createElement(Zn,{colors:s,types:l,primaryColor:c,secondaryColor:u,type:m,onPrimaryColorChange:h,onSecondaryColorChange:f,onTypeChange:y})),i.a.createElement(en.a,null,i.a.createElement(Se.a,{color:"primary",onClick:p},"Cancel"),i.a.createElement(Se.a,{color:"primary",variant:"outlined",onClick:function(){setTimeout(C,137.5)}},"Reset"),i.a.createElement(Se.a,{color:"primary",variant:"contained",onClick:p},"OK")))}}]),n}(a.Component),$n=Object(te.withStyles)({light:{color:"#000000"},dark:{color:"#ffffff"}})(Xn),_n=function(e){function n(){var e,t;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(i)))).handleKeyPress=function(e){var n=e.key;e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||"Enter"===n&&t.props.signOut()},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.open,t=e.isSigningOut,a=this.props.signOut,o=this.props.onClose;return i.a.createElement(ze.a,{open:n,onClose:o,onKeyPress:this.handleKeyPress},i.a.createElement(Ye.a,null,"Sign out?"),i.a.createElement(Ze.a,null,i.a.createElement($e.a,null,"While signed out you are unable to manage your profile and conduct other activities that require you to be signed in.")),i.a.createElement(en.a,null,i.a.createElement(Se.a,{color:"primary",onClick:o},"Cancel"),i.a.createElement(Se.a,{color:"primary",disabled:t,variant:"contained",onClick:a},"Sign Out")))}}]),n}(a.Component);h.a.initializeApp({apiKey:"AIzaSyDYZOrZVpXkPQD6J31mb9t2eIIxmGEJK-Q",authDomain:"react-material-ui-firebase.firebaseapp.com",databaseURL:"https://react-material-ui-firebase.firebaseio.com",projectId:"react-material-ui-firebase",storageBucket:"react-material-ui-firebase.appspot.com",messagingSenderId:"552659850812"});var et=[{id:"red",name:"Red",import:E.a},{id:"pink",name:"Pink",import:b.a},{id:"purple",name:"Purple",import:k.a},{id:"deep-purple",name:"Deep Purple",import:O.a},{id:"indigo",name:"Indigo",import:P.a},{id:"blue",name:"Blue",import:j.a},{id:"light-blue",name:"Light Blue",import:x.a},{id:"cyan",name:"Cyan",import:U.a},{id:"teal",name:"Teal",import:R.a},{id:"green",name:"Green",import:V.a},{id:"light-green",name:"Light Green",import:M.a},{id:"lime",name:"Lime",import:G.a},{id:"yellow",name:"Yellow",import:L.a},{id:"amber",name:"Amber",import:q.a},{id:"orange",name:"Orange",import:J.a},{id:"deep-orange",name:"Deep Orange",import:Q.a},{id:"brown",name:"Brown",import:X.a},{id:"gray",name:"Gray",import:_.a},{id:"blue-gray",name:"Blue Gray",import:ne.a}],nt=["light","dark"],tt={primaryColor:"blue",secondaryColor:"red"},at=Object(te.createMuiTheme)({palette:{primary:j.a,secondary:E.a,type:"light"},typography:{useNextVariants:!0}}),it="React + Material-UI + Firebase",ot=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e))).updateTheme=function(e,n){var a=t.state,i=a.primaryColor,o=a.secondaryColor,r=a.type;e.primaryColor||(e.primaryColor=i),e.secondaryColor||(e.secondaryColor=o),e.type||(e.type=r),at=Object(te.createMuiTheme)({palette:{primary:et.find(function(n){return n.id===e.primaryColor}).import,secondary:et.find(function(n){return n.id===e.secondaryColor}).import,type:e.type},typography:{useNextVariants:!0}}),t.setState({primaryColor:e.primaryColor,secondaryColor:e.secondaryColor,type:e.type},function(){n?localStorage.removeItem("theme"):localStorage.setItem("theme",JSON.stringify({primaryColor:e.primaryColor,secondaryColor:e.secondaryColor,type:e.type}))})},t.resetTheme=function(){t.updateTheme({primaryColor:tt.primaryColor,secondaryColor:tt.secondaryColor,type:"light"},!0)},t.changePrimaryColor=function(e){var n=e.target.value;t.updateTheme({primaryColor:n})},t.changeSecondaryColor=function(e){var n=e.target.value;t.updateTheme({secondaryColor:n})},t.changeType=function(e){var n=e.target.value;t.updateTheme({type:n})},t.showSignUpDialog=function(){t.setState({signUpDialog:{open:!0}})},t.closeSignUpDialog=function(e){t.setState({signUpDialog:{open:!1}},function(){e&&"function"===typeof e&&e()})},t.showSignInDialog=function(){t.setState({signInDialog:{open:!0}})},t.closeSignInDialog=function(e){t.setState({signInDialog:{open:!1}},function(){e&&"function"===typeof e&&e()})},t.showResetPasswordDialog=function(){t.setState({resetPasswordDialog:{open:!0}})},t.closeResetPasswordDialog=function(e){t.setState({resetPasswordDialog:{open:!1}},function(){e&&"function"===typeof e&&e()})},t.showSettingsDialog=function(){t.setState({settingsDialog:{open:!0}})},t.closeSettingsDialog=function(e){t.setState({settingsDialog:{open:!1}},function(){e&&"function"===typeof e&&e()})},t.showSignOutDialog=function(){t.setState({signOutDialog:{open:!0}})},t.closeSignOutDialog=function(e){t.setState({signOutDialog:{open:!1}},function(){e&&"function"===typeof e&&e()})},t.openSnackbar=function(e){t.setState({snackbar:{autoHideDuration:2*y()(e).time,message:e,open:!0}})},t.closeSnackbar=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=t.state.snackbar;t.setState({snackbar:{message:e?"":n.message,open:!1}})},t.signUp=function(e,n){t.state.isSignedIn?t.openSnackbar("Signed in users can't sign up"):t.setState({isSigningUp:!0},function(){h.a.auth().createUserWithEmailAndPassword(e,n).then(function(e){t.setState({isSigningUp:!1},function(){t.closeSignUpDialog(function(){var n=e.user.email;t.openSnackbar("Signed up as "+n)})})}).catch(function(e){t.setState({isSigningUp:!1},function(){t.openSnackbar(e.message)})})})},t.signIn=function(e,n){t.state.isSignedIn?t.openSnackbar("Signed in users can't sign in again"):t.setState({isSigningIn:!0},function(){h.a.auth().signInWithEmailAndPassword(e,n).then(function(e){t.setState({isSigningIn:!1},function(){t.closeSignInDialog(function(){var n=e.user,a=n.displayName,i=n.email;t.openSnackbar("Signed in as "+(a||i))})})}).catch(function(e){t.setState({isSigningIn:!1},function(){t.openSnackbar(e.message)})})})},t.signInWithAuthProvider=function(e){e&&!t.state.isSignedIn&&t.setState({isSigningIn:!0},function(){h.a.auth().signInWithPopup(e).then(function(e){t.setState({isSigningIn:!1},function(){t.closeSignInDialog(function(){var n=e.user,a=n.displayName,i=n.email;t.openSnackbar("Signed in as "+(a||i))})})}).catch(function(e){t.setState({isSigningIn:!1},function(){t.openSnackbar(e.message)})})})},t.resetPassword=function(e){t.state.isSignedIn?t.openSnackbar("Signed in users can't reset their password"):t.setState({isResettingPassword:!0},function(){h.a.auth().sendPasswordResetEmail(e).then(function(){t.setState({isResettingPassword:!1},function(){t.closeResetPasswordDialog(function(){t.openSnackbar("Password reset email sent")})})}).catch(function(e){t.setState({isResettingPassword:!1},function(){t.openSnackbar(e.message)})})})},t.verifyEmailAddress=function(){var e=t.state,n=e.isSignedIn,a=e.isVerifyingEmailAddress,i=e.user;n&&!a&&i&&i.sendEmailVerification().then(function(){t.setState({isVerifyingEmailAddress:!0},function(){t.openSnackbar("Password reset e-mail sent")})}).catch(function(e){t.openSnackbar(e.message)})},t.signOut=function(){t.state.isSignedIn?t.setState({isSigningOut:!0},function(){h.a.auth().signOut().then(function(){t.setState({isSigningOut:!1},function(){t.closeSignOutDialog(function(){t.openSnackbar("Signed out")})})}).catch(function(e){t.setState({isSigningOut:!1},function(){t.closeSignOutDialog(function(){t.openSnackbar(e.message)})})})}):t.openSnackbar("Not signed in")},t.state={primaryColor:tt.primaryColor,secondaryColor:tt.secondaryColor,type:"light",isAuthReady:!1,isSigningUp:!1,isSigningIn:!1,isResettingPassword:!1,isSignedIn:!1,isVerifyingEmailAddress:!1,isSigningOut:!1,user:null,signUpDialog:{open:!1},signInDialog:{open:!1},resetPasswordDialog:{open:!1},settingsDialog:{open:!1},signOutDialog:{open:!1},snackbar:{autoHideDuration:0,message:"",open:!1}},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props.classes,n=this.state,t=n.primaryColor,a=n.secondaryColor,o=n.type,r=n.isAuthReady,s=n.isSigningUp,l=n.isSigningIn,c=n.isResettingPassword,u=n.isSignedIn,m=n.isVerifyingEmailAddress,g=n.isSigningOut,h=n.user,f=this.state,y=f.signUpDialog,C=f.signInDialog,E=f.resetPasswordDialog,S=f.settingsDialog,b=f.signOutDialog,v=this.state.snackbar;return r?i.a.createElement(d.a,{basename:"/react-material-ui-firebase"},i.a.createElement(te.MuiThemeProvider,{theme:at},i.a.createElement("div",{style:{minHeight:"100vh",backgroundColor:"dark"===at.palette.type?"#303030":"#fafafa"}},i.a.createElement(Te,{name:it,isSignedIn:u,isSigningUp:s,isSigningIn:l,user:h,onSignUpClick:this.showSignUpDialog,onSignInClick:this.showSignInDialog,onSettingsClick:this.showSettingsDialog,onSignOutClick:this.showSignOutDialog}),u&&i.a.createElement(p.c,null,i.a.createElement(p.a,{path:"/",exact:!0,component:We}),i.a.createElement(p.a,{component:Be})),!u&&i.a.createElement(Ke,{icon:i.a.createElement(ue.a,{className:e.emptyStateIcon,color:"action"}),title:it,description:"The three musketeers, all in one pack in the form of a boilerplate app.",button:i.a.createElement(re.a,{className:e.button,color:"primary",href:"https://github.com/Phoqe/react-material-ui-firebase",rel:"noopener noreferrer",target:"_blank",variant:"extended"},i.a.createElement(de.a,{className:e.buttonIcon}),"GitHub")}),!u&&i.a.createElement(i.a.Fragment,null,i.a.createElement(ie.a,{only:"xs"},i.a.createElement(pn,{open:y.open,isSigningUp:s,isSigningIn:l,signUp:this.signUp,onClose:this.closeSignUpDialog,onAuthProviderClick:this.signInWithAuthProvider})),i.a.createElement(ie.a,{only:["sm","md","lg","xl"]},i.a.createElement(pn,{open:y.open,fullScreen:!0,isSigningUp:s,isSigningIn:l,signUp:this.signUp,onClose:this.closeSignUpDialog,onAuthProviderClick:this.signInWithAuthProvider}))),!u&&i.a.createElement(i.a.Fragment,null,i.a.createElement(ie.a,{only:"xs"},i.a.createElement(hn,{open:C.open,isSigningIn:l,signIn:this.signIn,onClose:this.closeSignInDialog,onAuthProviderClick:this.signInWithAuthProvider,onResetPasswordClick:this.showResetPasswordDialog})),i.a.createElement(ie.a,{only:["sm","md","lg","xl"]},i.a.createElement(hn,{open:C.open,fullScreen:!0,isSigningIn:l,signIn:this.signIn,onClose:this.closeSignInDialog,onAuthProviderClick:this.signInWithAuthProvider,onResetPasswordClick:this.showResetPasswordDialog}))),!u&&i.a.createElement(yn,{open:E.open,isResettingPassword:c,resetPassword:this.resetPassword,onClose:this.closeResetPasswordDialog}),u&&i.a.createElement(i.a.Fragment,null,i.a.createElement(ie.a,{only:"xs"},i.a.createElement($n,{open:S.open,user:h,isVerifyingEmailAddress:m,colors:et,types:nt,primaryColor:t,secondaryColor:a,type:o,onClose:this.closeSettingsDialog,onVerifyEmailAddressClick:this.verifyEmailAddress,onPrimaryColorChange:this.changePrimaryColor,onSecondaryColorChange:this.changeSecondaryColor,onTypeChange:this.changeType,onResetClick:this.resetTheme})),i.a.createElement(ie.a,{only:["sm","md","lg","xl"]},i.a.createElement($n,{open:S.open,fullScreen:!0,user:h,isVerifyingEmailAddress:m,colors:et,types:nt,primaryColor:t,secondaryColor:a,type:o,onClose:this.closeSettingsDialog,onVerifyEmailAddressClick:this.verifyEmailAddress,onPrimaryColorChange:this.changePrimaryColor,onSecondaryColorChange:this.changeSecondaryColor,onTypeChange:this.changeType,onResetClick:this.resetTheme}))),u&&i.a.createElement(_n,{open:b.open,isSigningOut:g,signOut:this.signOut,onClose:this.closeSignOutDialog}),i.a.createElement(le.a,{autoHideDuration:v.autoHideDuration,message:v.message,open:v.open,onClose:this.closeSnackbar})))):null}},{key:"componentDidMount",value:function(){var e=this,n=JSON.parse(localStorage.getItem("theme"));n&&this.updateTheme(n),this.removeAuthObserver=h.a.auth().onAuthStateChanged(function(n){e.setState({isAuthReady:!0,isSignedIn:!!n,user:n})})}},{key:"componentWillUnmount",value:function(){this.removeAuthObserver()}}]),n}(a.Component),rt=Object(te.withStyles)(function(e){return{emptyStateIcon:{fontSize:"".concat(12*e.spacing.unit,"px")},button:{marginTop:"".concat(e.spacing.unit,"px")},buttonIcon:{marginRight:"".concat(e.spacing.unit,"px")}}})(ot);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(rt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[219,2,1]]]);
//# sourceMappingURL=main.68786d9b.chunk.js.map