"use strict";(self.webpackChunklm_commons=self.webpackChunklm_commons||[]).push([[2940],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"Requirements and Installation"},l="Requirements and Installation",i={unversionedId:"lmc-rbac/installtion",id:"lmc-rbac/installtion",title:"Requirements and Installation",description:"Requirements",source:"@site/docs/lmc-rbac/02-installtion.md",sourceDirName:"lmc-rbac",slug:"/lmc-rbac/installtion",permalink:"/docs/lmc-rbac/installtion",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Requirements and Installation"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/lmc-rbac/introduction"},next:{title:"LmcCors",permalink:"/docs/category/lmccors"}},c={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"requirements-and-installation"},"Requirements and Installation"),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PHP 7.3 or higher")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"LmcRbac only officially supports installation through Composer. For Composer documentation, please refer to\n",(0,o.kt)("a",{parentName:"p",href:"http://getcomposer.org/"},"getcomposer.org"),"."),(0,o.kt)("p",null,"Install the module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ composer require lm-commons/lmc-rbac:^1.1\n")),(0,o.kt)("p",null,"Enable the module by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"LmcRbac")," key to your ",(0,o.kt)("inlineCode",{parentName:"p"},"application.config.php")," file. Customize the module by copy-pasting\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"config.global.php")," file to your ",(0,o.kt)("inlineCode",{parentName:"p"},"config/autoload")," folder."),(0,o.kt)("p",null,"You can also find some Doctrine entities in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/LM-Commons/LmcRbac/tree/master/data"},"data")," folder that will help you to more quickly take advantage\nof LmcRbac."))}m.isMDXComponent=!0}}]);