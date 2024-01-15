"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[1189],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=u(a),g=r,h=s["".concat(l,".").concat(g)]||s[g]||c[g]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:r,o[1]=p;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6744:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const i={title:"Upgrading the Chain",order:6},o=void 0,p={unversionedId:"hub-tutorials/live-upgrade-tutorial",id:"hub-tutorials/live-upgrade-tutorial",title:"Upgrading the Chain",description:"This document demonstrates how a live upgrade can be performed on-chain through a",source:"@site/docs/hub-tutorials/live-upgrade-tutorial.md",sourceDirName:"hub-tutorials",slug:"/hub-tutorials/live-upgrade-tutorial",permalink:"/gaia/hub-tutorials/live-upgrade-tutorial",draft:!1,tags:[],version:"current",frontMatter:{title:"Upgrading the Chain",order:6},sidebar:"tutorialSidebar",previous:{title:"Joining Testnet",permalink:"/gaia/hub-tutorials/join-testnet"},next:{title:"Upgrading Your Node",permalink:"/gaia/hub-tutorials/upgrade-node"}},l={},u=[],d={toc:u},s="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document demonstrates how a live upgrade can be performed on-chain through a\ngovernance process."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the network and trigger upgrade"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# start a gaia application full-node\n$ gaiad start\n\n# set up the cli config\n$ gaiad config chain-id testing\n\n# create an upgrade governance proposal\n$ gaiad tx gov submit-proposal software-upgrade <plan-name> \\\n--title <proposal-title> --description <proposal-description> \\\n--from <name-or-key> --upgrade-height <desired-upgrade-height> --deposit 10000000stake\n\n# once the proposal passes you can query the pending plan\n$ gaiad query upgrade plan\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Performing an upgrade"),(0,r.kt)("p",{parentName:"li"},"Assuming the proposal passes the chain will stop at given upgrade height."),(0,r.kt)("p",{parentName:"li"},"You can stop and start the original binary all you want, but ",(0,r.kt)("strong",{parentName:"p"},"it will refuse to\nrun after the upgrade height"),"."),(0,r.kt)("p",{parentName:"li"},"We need a new binary with the upgrade handler installed. The logs should look\nsomething like:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'E[2019-11-05|12:44:18.913] UPGRADE "<plan-name>" NEEDED at height: <desired-upgrade-height>:       module=main\nE[2019-11-05|12:44:18.914] CONSENSUS FAILURE!!!\n...\n')),(0,r.kt)("p",{parentName:"li"},"Note that the process will hang indefinitely (doesn't exit to avoid restart loops). So, you must\nmanually kill the process and replace it with a new binary. Do so now with ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+C")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"killall gaiad"),"."),(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("inlineCode",{parentName:"p"},"gaia/app/app.go"),", after ",(0,r.kt)("inlineCode",{parentName:"p"},"upgrade.Keeper")," is initialized and set in the app, set the\ncorresponding upgrade ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler")," with the correct ",(0,r.kt)("inlineCode",{parentName:"p"},"<plan-name>"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    app.upgradeKeeper.SetUpgradeHandler("<plan-name>", func(ctx sdk.Context, plan upgrade.Plan) {\n        // custom logic after the network upgrade has been executed\n    })\n')),(0,r.kt)("p",{parentName:"li"},"Note that we panic on any error - this would cause the upgrade to fail if the\nmigration could not be run, and no node would advance - allowing a manual recovery.\nIf we ignored the errors, then we would proceed with an incomplete upgrade and\nhave a very difficult time every recovering the proper state."),(0,r.kt)("p",{parentName:"li"},"Now, compile the new binary and run the upgraded code to complete the upgrade:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# create a new binary of gaia with the added upgrade handler\n$ make install\n\n# Restart the chain using the new binary. You should see the chain resume from\n# the upgrade height:\n# `I[2019-11-05|12:48:15.184] applying upgrade <plan-name> at height: <desired-upgrade-height>      module=main`\n$ gaiad start\n\n# verify there is no pending plan\n$ gaiad query upgrade plan\n\n# verify you can query the block header of the completed upgrade\n$ gaiad query upgrade applied <plan-name>\n")))))}c.isMDXComponent=!0}}]);