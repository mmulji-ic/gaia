"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[5715],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>y});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(a),p=r,y=h["".concat(l,".").concat(p)]||h[p]||d[p]||n;return a?o.createElement(y,i(i({ref:t},u),{},{components:a})):o.createElement(y,i({ref:t},u))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3016:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=a(7462),r=(a(7294),a(3905));const n={title:"Delegator Security",order:3},i=void 0,s={unversionedId:"delegators/delegator-security",id:"delegators/delegator-security",title:"Delegator Security",description:"The launch of any public blockchain is an incredibly exciting time, and it's definitely one that malicious actors may try to take advantage of for their own personal gain. Owning and having access to cryptocurrency can make you a valuable target for an attacker, but there are many things you can do to improve your personal security and reduce or eliminate security risks.",source:"@site/docs/delegators/delegator-security.md",sourceDirName:"delegators",slug:"/delegators/delegator-security",permalink:"/gaia/delegators/delegator-security",draft:!1,tags:[],version:"current",frontMatter:{title:"Delegator Security",order:3},sidebar:"tutorialSidebar",previous:{title:"Delegator Guide (CLI)",permalink:"/gaia/delegators/delegator-guide-cli"},next:{title:"Validators",permalink:"/gaia/validators/"}},l={},c=[{value:"Social Engineering",id:"social-engineering",level:2},{value:"Key Management",id:"key-management",level:2},{value:"Software Vulnerabilities",id:"software-vulnerabilities",level:2},{value:"Verifying Transactions",id:"verifying-transactions",level:2},{value:"Account Security",id:"account-security",level:2},{value:"Supply Chain Attacks",id:"supply-chain-attacks",level:2},{value:"Disclaimer",id:"disclaimer",level:2}],u={toc:c},h="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The launch of any public blockchain is an incredibly exciting time, and it's definitely one that malicious actors may try to take advantage of for their own personal gain. Owning and having access to cryptocurrency can make you a valuable target for an attacker, but there are many things you can do to improve your personal security and reduce or eliminate security risks."),(0,r.kt)("h2",{id:"social-engineering"},"Social Engineering"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Social_engineering_(security)"},"Social engineering")," has existed for about as long as human beings have been on the planet, and in the technical era, it usually takes in the form of  ",(0,r.kt)("a",{parentName:"p",href:"https://ssd.eff.org/en/module/how-avoid-phishing-attacks"},"phishing"),"  or  ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Phishing#Spear_phishing"},"spearphishing")," . Both of these attacks are wildly successful forms of trickery that are responsible for over 95% of account security breaches, and they don't just happen via email: these days, opportunistic and targeted phishing attempts take place  ",(0,r.kt)("a",{parentName:"p",href:"https://www.umass.edu/it/security/phishing-fraudulent-emails-text-messages-phone-calls"},"anywhere that you have an inbox")," . It doesn't matter if you're using Signal, Telegram, SMS, Twitter, or just checking your DMs on forums or social networks, attackers have a  ",(0,r.kt)("a",{parentName:"p",href:"https://jia.sipa.columbia.edu/weaponization-social-media-spear-phishing-and-cyberattacks-democracy"},"plethora of opportunities"),"  to gain foothold in your digital life in effort to separate you from valuable information and assets that you most definitely don't want to lose. If a deal pops up that  ",(0,r.kt)("a",{parentName:"p",href:"https://www.psychologytoday.com/us/blog/mind-in-the-machine/201712/how-fear-is-being-used-manipulate-cryptocurrency-markets"},"sounds too good to be true")," , or a message shows up asking for information that should never, ever be shared with someone else, you can always verify it before engaging with it by navigating to our official website or an official Cosmos communication channel on your own."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Be skeptical of unexpected attachments, or emails that ask you to visit a suspicious or unfamiliar website in the context of blockchains or cryptocurrency.")," An attacker may attempt to lure you to a  ",(0,r.kt)("a",{parentName:"p",href:"https://blog.malwarebytes.com/cybercrime/2013/02/tools-of-the-trade-exploit-kits/"},"compromised site"),"  designed to steal sensitive information from your computer. If you're a Gmail user, test your resilience against the latest email-based phishing tactics  ",(0,r.kt)("a",{parentName:"p",href:"https://phishingquiz.withgoogle.com/"},"here")," .")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Do your due diligence before purchasing ATOM. Neither the Tendermint team nor the Interchain Foundation will be selling ATOM at launch"),", so if you see social media posts or emails advertising a token sale from us, they're not real and should be dismissed immediately. If you're on the hunt for ATOM, make sure that you've researched the seller or exchange to confirm that the tokens are coming from a trustworthy source.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"No one from Cosmos, the Tendermint team or the Interchain Foundation will ever send an email that asks for you to share any kind of account credentials or your 12 words with us"),", and we will always use our official Twitter, Medium, and Github accounts to communicate important news directly to the Cosmos community."))),(0,r.kt)("p",null,"If you receive an email or tweet that sounds too good to be true, is likely to be a scam.  "),(0,r.kt)("h2",{id:"key-management"},"Key Management"),(0,r.kt)("p",null,"The best way to minimize the risk of theft or loss of ATOM is to have a strong storage and backup strategy for your private keys.  The safest way to store your keys is offline,  either in a cryptocurrency wallet or on a device that you never connect to the internet. The best backup strategy for your k yes is to ensure that you have multiple copies of them stored in safe places, and to take specific measures to protect at least one copy of your keys from any kind of natural disaster that is a likely possibility in your part of the world."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To protect your ATOM, do not share your 12 words with anyone.")," The only person who should ever need to know them is you. You do not need to share your private keys if you're delegating ATOM to a validator on the network or to use custodial services. If anyone asks for your key material,"),(0,r.kt)("h2",{id:"software-vulnerabilities"},"Software Vulnerabilities"),(0,r.kt)("p",null,"To protect yourself and ensure you're using the safest code is to use the latest version of software available, and to update immediately (or as soon as you can) after a security advisory is released. This is important for your laptops, mobile devices, cryptocurrency wallets, and anything else that may be linked to your identity or your cryptocurrency."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"To protect your ATOM, you should only download software directly from official sources, and make sure that you're always using the latest, most secure version of ",(0,r.kt)("inlineCode",{parentName:"em"},"gaiad")," when you're doing anything that involves your 12 words"),". The latest versions of ",(0,r.kt)("inlineCode",{parentName:"p"},"Tendermint"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cosmos-SDK"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"gaiad")," will always be available from our official Github repositories."),(0,r.kt)("p",null,"No one from Cosmos, the Tendermint team or the Interchain Foundation will ever send an email that asks for you to download a software attachment  after sending out a security advisory or making a patch available."),(0,r.kt)("h2",{id:"verifying-transactions"},"Verifying Transactions"),(0,r.kt)("p",null,"Be skeptical of technical advice, especially advice that comes from people you do not know in forums and on group chat channels. Familiarize yourself with important commands, especially those that will help you carry out high-risk actions, and consult our official documentation to make sure that you're not being tricked into doing something that will harm you or your validator."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"When sending transactions or doing anything that may spend coins, you should always verify those transactions before hitting send"),". While address strings are long, it is important to visually comparing them in blocks of 4 characters at a time to ensure that you are sending them to the right place rather than into oblivion."),(0,r.kt)("h2",{id:"account-security"},"Account Security"),(0,r.kt)("p",null,"One of the most important things  you can do to protect your cryptocurrency and eliminate risk is to harden all of your critical online accounts. Attackers will try to gain foothold wherever they can, and will use that foothold to pivot from one place to another. Unprotected accounts like email, social media, your Github account, the Cosmos Forum and anything in between could give an attacker an opportunities to gain foothold in your online life."),(0,r.kt)("p",null,"For people who hold cryptocurrency, there are two specific account  security actions that can be taken to eliminate specific risks that come with being part of the blockchain world."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"First, it is important to enable 2-factor authentication everywhere you can, and to make sure that you are using a code generator or ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Universal_2nd_Factor"},"U2F hardware key")," as a second factor.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Second,  be mindful of account recovery methods used to regain access to your most important accounts and make sure that you do not use SMS as a recovery method. If you haven't done so yet, start using an authenticator app or a hardware key immediately for your personal email account and wherever else you manage your tokens, especially if you use online exchanges."))),(0,r.kt)("h2",{id:"supply-chain-attacks"},"Supply Chain Attacks"),(0,r.kt)("p",null,"Whether you're buying a hardware or a hardware wallet, it is important  to purchase whatever you need directly from the supplier or from a trusted source. This is the only way to completely eliminate the risk of a compromised device or chip from stealing your private keys, especially since there are reports of compromised wallets being sold on Amazon and through other popular online marketplaces."),(0,r.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,r.kt)("p",null,'Please note that this is highly experimental software. In these early days, we can expect to have issues, updates, and bugs. The existing tools require advanced technical skills and involve risks which are outside of the control of the Interchain Foundation and/or the Tendermint team (see also the risk section in the Interchain Cosmos Contribution Terms). Any use of this open source Apache 2.0 licensed software is done at your own risk and on a "AS IS" basis, without warranties or conditions of any kind, and any and all liability of the Interchain Foundation and/or the Tendermint team for damages arising in connection to the software is excluded. Please exercise extreme caution!`'))}d.isMDXComponent=!0}}]);