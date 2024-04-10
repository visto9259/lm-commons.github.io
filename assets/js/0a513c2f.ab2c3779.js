"use strict";(self.webpackChunklmc_github_io_docs=self.webpackChunklmc_github_io_docs||[]).push([[8774],{4213:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(4848),i=n(8453);const o={sidebar_position:3},r="Options",l={id:"lmc-user/options",title:"Options",description:"The  LmcUser module has some options to allow you to quickly customize the basic",source:"@site/docs/lmc-user/options.md",sourceDirName:"lmc-user",slug:"/lmc-user/options",permalink:"/docs/lmc-user/options",draft:!1,unlisted:!1,editUrl:"https://github.com/lm-commons/tree/master/docs/lmc-user/options.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"lmcUser",previous:{title:"Installation",permalink:"/docs/lmc-user/installation"},next:{title:"Wiki",permalink:"/docs/category/wiki-1"}},a={},c=[];function u(e){const s={code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"options",children:"Options"}),"\n",(0,t.jsxs)(s.p,{children:["The  LmcUser module has some options to allow you to quickly customize the basic\nfunctionality. After installing LmcUser, copy\n",(0,t.jsx)(s.code,{children:"./vendor/lm-commons/lmc-user/config/lmcuser.global.php.dist"})," to\n",(0,t.jsx)(s.code,{children:"./config/autoload/lmcuser.global.php"})," and change the values as desired."]}),"\n",(0,t.jsx)(s.p,{children:"The following options are available:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"user_entity_class"})," - Name of Entity class to use. Useful for using your own\nentity class instead of the default one provided. Default is\n",(0,t.jsx)(s.code,{children:"LmcUser\\Entity\\User"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"enable_username"})," - Boolean value, enables username field on the\nregistration form. Default is ",(0,t.jsx)(s.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"auth_identity_fields"})," - Array value, specifies which fields a user can\nuse as the 'identity' field when logging in.  Acceptable values: username, email."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"enable_display_name"})," - Boolean value, enables a display name field on the\nregistration form. Default value is ",(0,t.jsx)(s.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"enable_registration"})," - Boolean value, Determines if a user should be\nallowed to register. Default value is ",(0,t.jsx)(s.code,{children:"true"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"login_after_registration"})," - Boolean value, automatically logs the user in\nafter they successfully register. Default value is ",(0,t.jsx)(s.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"use_registration_form_captcha"})," - Boolean value, determines if a captcha should\nbe utilized on the user registration form. Default value is ",(0,t.jsx)(s.code,{children:"true"}),". (Note,\nright now this only utilizes a weak Laminas\\Text\\Figlet CAPTCHA, but I have plans\nto make all Laminas\\Captcha adapters work.)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"login_form_timeout"})," - Integer value, specify the timeout for the CSRF security\nfield of the login form in seconds. Default value is 300 seconds."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"user_form_timeout"})," - Integer value, specify the timeout for the CSRF security\nfield of the registration form in seconds. Default value is 300 seconds."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"use_redirect_parameter_if_present"})," - Boolean value, if a redirect GET\nparameter is specified, the user will be redirected to the specified URL if\nauthentication is successful (if present, a GET parameter will override the\nlogin_redirect_route specified below)."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"login_redirect_route"})," String value, name of a route in the application\nwhich the user will be redirected to after a successful login."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"logout_redirect_route"})," String value, name of a route in the application which\nthe user will be redirected to after logging out."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"password_cost"})," - This should be an integer between 4 and 31. The number\nrepresents the base-2 logarithm of the iteration count used for hashing.\nDefault is ",(0,t.jsx)(s.code,{children:"10"})," (about 10 hashes per second on an i5)."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"enable_user_state"})," - Boolean value, enable user state usage. Should user's\nstate be used in the registration/login process?"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"default_user_state"})," - Integer value, default user state upon registration.\nWhat state user should have upon registration?"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"allowed_login_states"})," - Array value, states which are allowing user to login.\nWhen user tries to login, is his/her state one of the following? Include null if\nyou want user's with no state to login as well."]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var t=n(6540);const i={},o=t.createContext(i);function r(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);