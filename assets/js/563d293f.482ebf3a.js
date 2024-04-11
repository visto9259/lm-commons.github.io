"use strict";(self.webpackChunklmc_github_io_docs=self.webpackChunklmc_github_io_docs||[]).push([[5851],{5580:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=t(4848),s=t(8453);const o={sidebar_position:6},r="How to choose which user fields are used during authentication",c={id:"lmc-user/wiki/how-to-choose-which-user-fields-are-used-during-authentication",title:"How to choose which user fields are used during authentication",description:"Task",source:"@site/docs/lmc-user/wiki/how-to-choose-which-user-fields-are-used-during-authentication.md",sourceDirName:"lmc-user/wiki",slug:"/lmc-user/wiki/how-to-choose-which-user-fields-are-used-during-authentication",permalink:"/docs/lmc-user/wiki/how-to-choose-which-user-fields-are-used-during-authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/lm-commons/tree/master/docs/lmc-user/wiki/how-to-choose-which-user-fields-are-used-during-authentication.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"lmcUser",previous:{title:"How to perform a custom action when a new user account is created",permalink:"/docs/lmc-user/wiki/how-to-perform-a-custom-action-when-a-new-user-account-is-created"},next:{title:"How to modify the login and/or registration form timeout",permalink:"/docs/lmc-user/wiki/how-to-modify-the-login-and-or-registration-form-timeout"}},a={},d=[{value:"Task",id:"task",level:2},{value:"Solution",id:"solution",level:2}];function l(e){const i={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"how-to-choose-which-user-fields-are-used-during-authentication",children:"How to choose which user fields are used during authentication"}),"\n",(0,n.jsx)(i.h2,{id:"task",children:"Task"}),"\n",(0,n.jsx)(i.p,{children:"How to specify which fields a user can use as their 'identity' when logging in."}),"\n",(0,n.jsx)(i.h2,{id:"solution",children:"Solution"}),"\n",(0,n.jsxs)(i.p,{children:["The configuration directive ",(0,n.jsx)(i.code,{children:"auth_identity_fields"})," is used to control the fields used to look up user identities stored in LmcUser.  You can configure this directive (via your ",(0,n.jsx)(i.code,{children:"config/autoload/lmcuser.global.php"})," override file) to one of four possible modes:"]}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Authenticate via email address only:"}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-php",children:"'auth_identity_fields' => ['email'],\n"})}),"\n",(0,n.jsxs)(i.ol,{start:"2",children:["\n",(0,n.jsx)(i.li,{children:"Authenticate via username only:"}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-php",children:"'auth_identity_fields' => ['username'],\n"})}),"\n",(0,n.jsxs)(i.ol,{start:"3",children:["\n",(0,n.jsx)(i.li,{children:"Authenticate via both methods, with username field checked first:"}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-php",children:"'auth_identity_fields' => ['username', 'email'],\n"})}),"\n",(0,n.jsxs)(i.ol,{start:"4",children:["\n",(0,n.jsx)(i.li,{children:"Authenticate via both methods, with email address field checked first:"}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-php",children:"'auth_identity_fields' => ['email', 'username'],\n"})})]})}function u(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>c});var n=t(6540);const s={},o=n.createContext(s);function r(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);