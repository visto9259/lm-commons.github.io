"use strict";(self.webpackChunklmc_github_io_docs=self.webpackChunklmc_github_io_docs||[]).push([[8144],{6852:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var n=a(4848),r=a(8453);const t={sidebar_position:4},i=void 0,d={id:"lmc-mail/Usage",title:"Usage",description:"The Mail service can be retrieved from the service manager:",source:"@site/docs/lmc-mail/Usage.md",sourceDirName:"lmc-mail",slug:"/lmc-mail/Usage",permalink:"/docs/lmc-mail/Usage",draft:!1,unlisted:!1,editUrl:"https://github.com/lm-commons/tree/master/docs/lmc-mail/Usage.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"lmcMail",previous:{title:"Configuration",permalink:"/docs/lmc-mail/Configuration"},next:{title:"Advanced Configuration",permalink:"/docs/lmc-mail/advanced-customization"}},l={},c=[{value:"Available methods",id:"available-methods",level:2},{value:"createHtmlMessage",id:"createhtmlmessage",level:3},{value:"createTextMessage",id:"createtextmessage",level:3},{value:"send",id:"send",level:3}];function o(e){const s={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"The Mail service can be retrieved from the service manager:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-php",children:"$messageService = $serviceManager->get(LmcMail\\Service\\MessageService::class);\n"})}),"\n",(0,n.jsx)(s.p,{children:"Basic example to send an HTML email:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-php",children:"$viewModel = new \\Laminas\\View\\Model\\ViewModel();\n$viewModel->setTemplate('mail/html');\n$message = $messageService->createHtmlMessage(\n    ['email' => 'john@example.com', 'name' => 'John'], //from \n    ['email' => 'jane@example.com', 'name' => 'Jane'] //to\n    \"This is the subject line, //subject\n    $viewModel); // View model\n\n$messageService->send($message);\n"})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"'mail/html'"})," template must exist in the application's view template map. The HTML mail renderer will use\na layout template aliased as ",(0,n.jsx)(s.code,{children:"'mail/layout'"})," in the view template map. This is defined in the ",(0,n.jsx)(s.code,{children:"module.config.php"})," file."]}),"\n",(0,n.jsx)(s.h2,{id:"available-methods",children:"Available methods"}),"\n",(0,n.jsx)(s.h3,{id:"createhtmlmessage",children:"createHtmlMessage"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-php",children:" /**\n  * Create an HTML message\n  * @param string|Address|AddressInterface|array|AddressList|Traversable $from\n  * @param string|Address|AddressInterface|array|AddressList|Traversable $to\n  * @param string $subject\n  * @param string|ModelInterface $nameOrModel\n  * @return Message\n  */\ncreateHtmlMessage(string|Address|AddressInterface|array|AddressList|Traversable $from, \n                  string|Address|AddressInterface|array|AddressList|Traversable $to, \n                  string $subject, \n                  string|ModelInterface $nameOrModel): \\Laminas\\Mime\\Message::class\n"})}),"\n",(0,n.jsxs)(s.p,{children:["If ",(0,n.jsx)(s.code,{children:"$nameorModel"})," is a string, it must correspond to the view template to use."]}),"\n",(0,n.jsx)(s.h3,{id:"createtextmessage",children:"createTextMessage"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-php",children:"/**\n * Create a text message\n * @param string|Address|AddressInterface|array|AddressList|Traversable $from\n * @param string|Address|AddressInterface|array|AddressList|Traversable $to\n * @param string $subject\n * @param string|ModelInterface $nameOrModel\n * @return Message\n */\ncreateTextMessage(string|Address|AddressInterface|array|AddressList|Traversable $from, \n                  string|Address|AddressInterface|array|AddressList|Traversable $to, \n                  string $subject, \n                  ModelInterface $nameOrModel): \\Laminas\\Mail\\Message::class\n"})}),"\n",(0,n.jsxs)(s.p,{children:["If ",(0,n.jsx)(s.code,{children:"$nameorModel"})," is a string, it must correspond to the view template to use."]}),"\n",(0,n.jsx)(s.h3,{id:"send",children:"send"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-php",children:"/**\n * Send the message\n * @param Message $message\n */\nsend(Message $message): void\n"})}),"\n",(0,n.jsxs)(s.p,{children:["where ",(0,n.jsx)(s.code,{children:"$message"})," can be any object of type ",(0,n.jsx)(s.code,{children:"\\Laminas\\Mail\\Message"})," not necessarily one created by the above methods."]})]})}function m(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},8453:(e,s,a)=>{a.d(s,{R:()=>i,x:()=>d});var n=a(6540);const r={},t=n.createContext(r);function i(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);