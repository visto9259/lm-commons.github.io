"use strict";(self.webpackChunklmc_github_io_docs=self.webpackChunklmc_github_io_docs||[]).push([[6670],{349:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=o(4848),n=o(8453);const s={sidebar_position:4},i="How to store custom form values into your user entity at registration",a={id:"lmc-user/wiki/how-to-store-custom-form-values-into-your-user-entity-at-registration",title:"How to store custom form values into your user entity at registration",description:"Ref, using ZF 2.1.4 at the time this was written",source:"@site/docs/lmc-user/wiki/how-to-store-custom-form-values-into-your-user-entity-at-registration.md",sourceDirName:"lmc-user/wiki",slug:"/lmc-user/wiki/how-to-store-custom-form-values-into-your-user-entity-at-registration",permalink:"/docs/lmc-user/wiki/how-to-store-custom-form-values-into-your-user-entity-at-registration",draft:!1,unlisted:!1,editUrl:"https://github.com/lm-commons/tree/master/docs/lmc-user/wiki/how-to-store-custom-form-values-into-your-user-entity-at-registration.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"lmcUser",previous:{title:"How to modify the form objects used by LmcUser",permalink:"/docs/lmc-user/wiki/how-to-modify-the-form-objects-used-by-lmcuser"},next:{title:"How to perform a custom action when a new user account is created",permalink:"/docs/lmc-user/wiki/how-to-perform-a-custom-action-when-a-new-user-account-is-created"}},c={},u=[];function m(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"how-to-store-custom-form-values-into-your-user-entity-at-registration",children:"How to store custom form values into your user entity at registration"}),"\n",(0,r.jsx)(t.p,{children:"Ref, using ZF 2.1.4 at the time this was written"}),"\n",(0,r.jsxs)(t.p,{children:["A bit of a follow up to:\n",(0,r.jsx)(t.a,{href:"https://github.com/LM-Commons/LmcUser/wiki/How-to-embed-the-login-form-on-another-page",children:"https://github.com/LM-Commons/LmcUser/wiki/How-to-embed-the-login-form-on-another-page"})]}),"\n",(0,r.jsx)(t.p,{children:"In your bootstrap event (hopefully in a custom Module for your user entities and roles and so forth), add this block to your onBootstrap code:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",children:"<?php\npublic function onBootstrap( MVCEvent $e )\n{\n    $eventManager = $e->getApplication()->getEventManager();\n    $em           = $eventManager->getSharedManager();\n\n    // ...\n \n    $lmcServiceEvents = $e->getApplication()->getServiceManager()->get('lmcuser_user_service')->getEventManager();\n\n    // To validate new field\n    $em->attach('LmcUser\\Form\\RegisterFilter','init', function($e) {\n        $filter = $e->getTarget();\n        $filter->add([\n            'name'       => 'favorite_icecream',\n            'required'   => true,\n            'allowEmpty' => false,\n            'filters'    => [['name' => 'StringTrim']],\n            'validators' => [\n                [\n                    'name' => 'NotEmpty',\n                ],\n            ],\n        ]);\n    });\n\n    // Store the field\n    $lmcServiceEvents->attach('register', function($e) {\n        $form = $e->getParam('form');\n        $user = $e->getParam('user');\n            \n        /* @var $user \\FooUser\\Entity\\User */\n        $user->setUsername( $form->get('username')->getValue() );\n        $user->setFavoriteIceCream( $form->get('favorite_icecream')->getValue() );\n    });\n}\n"})})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>a});var r=o(6540);const n={},s=r.createContext(n);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);