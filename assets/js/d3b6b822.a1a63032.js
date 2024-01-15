"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[4853],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return n?o.createElement(m,s(s({ref:t},h),{},{components:n})):o.createElement(m,s({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={title:"The 3 Phases of the Cosmos Hub Mainnet",order:2},s=void 0,i={unversionedId:"roadmap/launch/blog-2-en",id:"roadmap/launch/blog-2-en",title:"The 3 Phases of the Cosmos Hub Mainnet",description:"Post-Mainnet Development Roadmap & Expectations for Users",source:"@site/docs/roadmap/launch/blog-2-en.md",sourceDirName:"roadmap/launch",slug:"/roadmap/launch/blog-2-en",permalink:"/gaia/roadmap/launch/blog-2-en",draft:!1,tags:[],version:"current",frontMatter:{title:"The 3 Phases of the Cosmos Hub Mainnet",order:2},sidebar:"tutorialSidebar",previous:{title:"Cosmos Hub to Launch Mainnet",permalink:"/gaia/roadmap/launch/blog-1-en"},next:{title:"The Cosmos Hub Roadmap",permalink:"/gaia/roadmap/cosmos-hub-roadmap-2.0"}},l={},c=[{value:"Post-Mainnet Development Roadmap &amp; Expectations for Users",id:"post-mainnet-development-roadmap--expectations-for-users",level:2},{value:"State Reversions and Mainnet launch",id:"state-reversions-and-mainnet-launch",level:2}],h={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"post-mainnet-development-roadmap--expectations-for-users"},"Post-Mainnet Development Roadmap & Expectations for Users"),(0,a.kt)("p",null,"The launch of the Cosmos Hub mainnet is expected to happen in phases. Here we outline what to expect in each phase."),(0,a.kt)("h1",{id:"phase-i-network-gains-stability-"},"\ud83d\udea8Phase I: Network Gains Stability \ud83d\udea8"),(0,a.kt)("p",null,"In the first phase, the network is likely to be unstable; it may experience halts or other forms of failure requiring intervention and coordination among Cosmos Hub validators and full node operators to deploy a fix. This type of failure is not unexpected while the network gains stability."),(0,a.kt)("h2",{id:"state-reversions-and-mainnet-launch"},"State Reversions and Mainnet launch"),(0,a.kt)("p",null,"One of the core ideologies around blockchains is immutability. This is the idea that we don't go\nback and edit past state transitions. While this notion of immutability is implemented directly via consensus protocols in the software, it is ultimately upheld by social contract among participants."),(0,a.kt)("p",null,"That said, the technology underlying the Cosmos Hub was intentionally developed to enable low-friction forks and rollbacks. We\u2019ve seen the community practice these techniques numerous times on the test networks. It\u2019s likely they will need to be used on a mainnet as well. Ultimately, they are a countervailing force to the risk of cartel takeover."),(0,a.kt)("p",null,"Reverting state is often seen as highly grievous, as it compromises the network\u2019s economic finality. Hence it should only be used in extreme conditions, as witnessed in the case of Ethereum with the DAO Hard Fork. That said, in the early days of the Cosmos Hub network, transfers will not be active, and hence the severity of state reversions will be reduced, as state transitions will be much less \u201ceconomically final\u201d. If necessary in case of bugs, the state can be exported from a past height and the network restarted, as practiced on the testnets."),(0,a.kt)("p",null,"Once governance chooses to enable transfers, the importance of economic finality must be respected by the network."),(0,a.kt)("p",null,"To summarize, if there are errors or vulnerabilities in the Cosmos Hub in the days before transfers are enabled, users should expect arbitrary state rollbacks even to genesis."),(0,a.kt)("p",null,"Once transfers are enabled, state rollbacks will be much more difficult to justify."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"What this means for developers:")," The Cosmos mainnet launch is the first phase in which fundraiser participants will be working together to operate the software. As a decentralized application developer, you are likely a user of either the ",(0,a.kt)("a",{parentName:"p",href:"https://cosmos.network/docs/"},"Cosmos-SDK framework")," or ",(0,a.kt)("a",{parentName:"p",href:"https://tendermint.com/docs/"},"Tendermint Core"),". The progress of your Cosmos-SDK or Tendermint-based application should be independent of the Cosmos Hub roadmap. However, if your project requires the use of ","[Inter-Blockchain Communication][blog post]",", you must wait until Phase III, or participate in the IBC testnets that will begin shortly."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"What this means for users:")," In this phase, we strongly recommend that you do not arrange to trade Atoms (eg. by legal contract as they will not be transferable yet) as there is the risk of state being reverted."),(0,a.kt)("p",null,"You can, however, safely delegate Atoms to validators in this phase by following the CLI guideline and video tutorial linked below. Of course, in the event of a state reversion, any earned fees and inflation may be lost. Note that only ",(0,a.kt)("inlineCode",{parentName:"p"},"gaiad")," should be used for making transactions. Voyager, the GUI for interacting with the Cosmos Hub, is currently in alpha and undergoing development. A separate announcement will be made once Voyager is safer for use."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../delegators/delegator-guide-cli.md"},"CLI Guide")," \ud83d\udd17"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Watch CLI delegation tutorial:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=ydZw6o6Mzy0"},"Cosmos YouTube")),(0,a.kt)("h1",{id:"phase-ii-transfers-enabled"},"Phase II: Transfers Enabled"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Summary:")," Once mainnet is deemed sufficiently stable, bonded Atom holders will vote to decide whether or not Atom transfers should be enabled. This procedure will happen through on-chain governance."),(0,a.kt)("p",null,"The best way to check on the status of governance proposals is to view them through Cosmos explorers. A list of explorers can be found on the launch page: ",(0,a.kt)("a",{parentName:"p",href:"https://cosmos.network/launch"},"cosmos.network/launch"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"What this means for users:")," If the proposal is accepted and transfers are enabled, then it becomes possible to transfer Atoms."),(0,a.kt)("h1",{id:"phase-iii-ibc-enabled"},"Phase III: IBC Enabled"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Summary:")," In Phase III, the ","[IBC protocol][ibc]"," is released and Atom holders vote via on-chain governance on whether or not to enable it as part of the core module library within the Cosmos-SDK."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"What this means for developers:")," Application-specific blockchains that are built using the Cosmos-SDK or Tendermint BFT will be able to connect to the Hub and interoperate/compose with all of the other blockchains that are connected to it."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"What this means for users:")," You will be able to transfer various tokens and NFTs directly from one IBC-connected chain to another IBC-connected chain without going through a centralized\nthird-party platform."),(0,a.kt)("h1",{id:"housekeeping-for-validators-submitting-a-gentx-for-mainnet"},"Housekeeping for Validators: Submitting a ",(0,a.kt)("inlineCode",{parentName:"h1"},"gentx")," for mainnet"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You should have generated and secured the validator consensus key you are going to be validating under during mainnet."),(0,a.kt)("li",{parentName:"ol"},"Be prepared to sign a transaction under an address in the genesis file either from the fundraiser or Game of Stakes depending on where you received your ATOM allocation."),(0,a.kt)("li",{parentName:"ol"},"We will begin collecting Gentxs for mainnet once the recommended genesis allocations are published.")),(0,a.kt)("h1",{id:"in-closing"},"In Closing"),(0,a.kt)("p",null,"The Cosmos mission is to build bridges to connect all blockchains\u2014to build an Internet of Blockchains. Clearly, we have a long road of development ahead of us. And after mainnet, the real work to a world of deeply integrated token economies is still ahead of us. But as John Fitzgerald Kennedy once said in the face of adversity:"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u201cWe choose to go to the moon...not because they are easy, but because they are hard\u2026.\u201d")),(0,a.kt)("p",null,"To the Moon \ud83d\ude80"),(0,a.kt)("p",null,"[blog post]",": ","[https://blog.cosmos.network/developer-deep-dive-cosmos-ibc-5855aaf183fe][ibc]",": ","[https://docs.cosmos.network/main/ibc/overview.html]"))}d.isMDXComponent=!0}}]);