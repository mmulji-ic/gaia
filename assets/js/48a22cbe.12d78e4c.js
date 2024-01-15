"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[4351],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),c=n,m=d["".concat(l,".").concat(c)]||d[c]||h[c]||o;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2235:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={title:"Cosmos Hub 4, v5-Delta Upgrade Instructions",order:1},i=void 0,s={unversionedId:"migration/cosmoshub-4-v5-delta-upgrade",id:"migration/cosmoshub-4-v5-delta-upgrade",title:"Cosmos Hub 4, v5-Delta Upgrade Instructions",description:"This document describes the steps for validator and full node operators for the successful execution of the Delta Upgrade, which adds the Gravity DEX to the Cosmos Hub.",source:"@site/docs/migration/cosmoshub-4-v5-delta-upgrade.md",sourceDirName:"migration",slug:"/migration/cosmoshub-4-v5-delta-upgrade",permalink:"/gaia/migration/cosmoshub-4-v5-delta-upgrade",draft:!1,tags:[],version:"current",frontMatter:{title:"Cosmos Hub 4, v5-Delta Upgrade Instructions",order:1},sidebar:"tutorialSidebar",previous:{title:"Cosmos Hub 4, Gaia v14 Upgrade",permalink:"/gaia/migration/cosmoshub-4-v14-upgrade"},next:{title:"Cosmos Hub 4, v6-Vega Upgrade Instructions",permalink:"/gaia/migration/cosmoshub-4-v6-vega-upgrade"}},l={},p=[{value:"On-chain governance proposal attains consensus",id:"on-chain-governance-proposal-attains-consensus",level:2},{value:"Upgrade will take place July 12, 2021",id:"upgrade-will-take-place-july-12-2021",level:2},{value:"Chain-id will remain the same",id:"chain-id-will-remain-the-same",level:2},{value:"Preparing for the upgrade",id:"preparing-for-the-upgrade",level:2},{value:"Backups",id:"backups",level:3},{value:"Testing",id:"testing",level:3},{value:"Public testnet",id:"public-testnet",level:3},{value:"Current runtime, cosmoshub-4 (pre-Delta upgrade) is running Gaia v4.2.1",id:"current-runtime-cosmoshub-4-pre-delta-upgrade-is-running-gaia-v421",level:3},{value:"Target runtime, cosmoshub-4 (post-Delta upgrade) will run Gaia v5.0.0",id:"target-runtime-cosmoshub-4-post-delta-upgrade-will-run-gaia-v500",level:3},{value:"Delta upgrade steps",id:"delta-upgrade-steps",level:2},{value:"Upgrade duration",id:"upgrade-duration",level:2},{value:"Rollback plan",id:"rollback-plan",level:2},{value:"Communications",id:"communications",level:2},{value:"Risks",id:"risks",level:2},{value:"FAQ",id:"faq",level:2}],u={toc:p},d="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This document describes the steps for validator and full node operators for the successful execution of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cosmos/gaia/blob/main/docs/roadmap/cosmos-hub-roadmap-2.0.md#Delta-Upgrade"},"Delta Upgrade"),", which adds the ",(0,n.kt)("strong",{parentName:"p"},"Gravity DEX")," to the Cosmos Hub."),(0,n.kt)("p",null,"TOC:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#on-chain-governance-proposal-attains-consensus"},"On-chain governance proposal attains consensus")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#upgrade-will-take-place-july-12-2021"},"Upgrade will take place July 12, 2021")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#chain-id-will-remain-the-same"},"Chain-id will remain the same")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#preparing-for-the-upgrade"},"Preparing for the upgrade"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#backups"},"Backups")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#testing"},"Testing")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#public-testnet"},"Public testnet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#current-runtime-cosmoshub-4-pre-delta-upgrade-is-running-gaia-v421"},"Current runtime, cosmoshub-4 (pre-Delta upgrade) is running Gaia v4.2.1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#target-runtime-cosmoshub-4-post-delta-upgrade-will-run-gaia-v500"},"Target runtime, cosmoshub-4 (post-Delta upgrade) will run Gaia v5.0.0")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#delta-upgrade-steps"},"Delta upgrade steps")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#upgrade-duration"},"Upgrade duration")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#rollback-plan"},"Rollback plan")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#communications"},"Communications")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#risks"},"Risks")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#faq"},"FAQ"))),(0,n.kt)("h2",{id:"on-chain-governance-proposal-attains-consensus"},"On-chain governance proposal attains consensus"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.mintscan.io/cosmos/proposals/51"},"Proposal #51")," is the reference on-chain governance proposal for this upgrade, which has passed with overwhelming community support. Neither core developers nor core funding entities control the governance, and this governance proposal has passed in a ",(0,n.kt)("em",{parentName:"p"},"fully decentralized")," way.  "),(0,n.kt)("h2",{id:"upgrade-will-take-place-july-12-2021"},"Upgrade will take place July 12, 2021"),(0,n.kt)("p",null,"The upgrade will take place at a block height of ",(0,n.kt)("inlineCode",{parentName:"p"},"6910000"),". At current block times (around 7s/block), this block height corresponds approximately to ",(0,n.kt)("inlineCode",{parentName:"p"},"Mon Jul 12 2021 11:00:00 GMT+0000"),". This date/time is approximate as blocks are not generated at a constant interval."),(0,n.kt)("h2",{id:"chain-id-will-remain-the-same"},"Chain-id will remain the same"),(0,n.kt)("p",null,"The chain-id of the network will remain the same, ",(0,n.kt)("inlineCode",{parentName:"p"},"cosmoshub-4"),". This is because an in-place migration of state will take place, i.e., this upgrade does not export any state."),(0,n.kt)("h2",{id:"preparing-for-the-upgrade"},"Preparing for the upgrade"),(0,n.kt)("h3",{id:"backups"},"Backups"),(0,n.kt)("p",null,"Prior to the upgrade, validators are encouraged to take a full data snapshot. Snapshotting depends heavily on infrastructure, but generally this can be done by backing up the ",(0,n.kt)("inlineCode",{parentName:"p"},".gaia")," directory."),(0,n.kt)("p",null,"It is critically important for validator operators to back-up the ",(0,n.kt)("inlineCode",{parentName:"p"},".gaia/data/priv_validator_state.json")," file after stopping the gaiad process. This file is updated every block as your validator participates in consensus rounds. It is a critical file needed to prevent double-signing, in case the upgrade fails and the previous chain needs to be restarted."),(0,n.kt)("h3",{id:"testing"},"Testing"),(0,n.kt)("p",null,"For those validator and full node operators that are interested in ensuring preparedness for the impending upgrade, complete and detailed testing instructions are provided in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/b-harvest/gravity-dex-upgrade-test/"},"gravity-dex-upgrade-test")," Github repository. This repository has been tested by members of the core Cosmos ecosystem, as well as ecosystem partners which include validators, exchanges, and service providers."),(0,n.kt)("h3",{id:"public-testnet"},"Public testnet"),(0,n.kt)("p",null,"Validator and full node operators that wish to test their systems on a public testnet are encouraged to join the Tendermint team's public testnet, described ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/b-harvest/gravity-dex-upgrade-test/#public-testnet-info"},"here"),"."),(0,n.kt)("h3",{id:"current-runtime-cosmoshub-4-pre-delta-upgrade-is-running-gaia-v421"},"Current runtime, cosmoshub-4 (pre-Delta upgrade) is running Gaia v4.2.1"),(0,n.kt)("p",null,"The Cosmos Hub mainnet network, ",(0,n.kt)("inlineCode",{parentName:"p"},"cosmoshub-4"),", is currently running ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cosmos/gaia/releases/tag/v4.2.1"},"Gaia v4.2.1"),". We anticipate that operators who are running earlier versions of Gaia, e.g., v4.2.x, will be able to upgrade successfully; however, this is untested and it is up to operators to ensure that their systems are capable of performing the upgrade."),(0,n.kt)("h3",{id:"target-runtime-cosmoshub-4-post-delta-upgrade-will-run-gaia-v500"},"Target runtime, cosmoshub-4 (post-Delta upgrade) will run Gaia v5.0.0"),(0,n.kt)("p",null,"The Comsos Hub mainnet network, ",(0,n.kt)("inlineCode",{parentName:"p"},"cosmoshub-4"),", will run ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cosmos/gaia/releases/tag/v5.0.0"},"Gaia v5.0.0"),". Operators ",(0,n.kt)("em",{parentName:"p"},"MUST")," use this version post-upgrade to remain connected to the network."),(0,n.kt)("h2",{id:"delta-upgrade-steps"},"Delta upgrade steps"),(0,n.kt)("p",null,"The following steps assume that an operator is running v4.2.1 (running an earlier version is untested). The upgrade has only been tested with v4.2.1 and these instructions follow this prerequisite."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Prior to the upgrade, operators ",(0,n.kt)("em",{parentName:"li"},"MUST")," be running Gaia v4.2.1."),(0,n.kt)("li",{parentName:"ol"},"At the upgrade block height of ",(0,n.kt)("a",{parentName:"li",href:"#Upgrade-will-take-place-July-12,-2021"},"6910000"),", the Gaia software will panic with a message similar to the below:")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'ERR UPGRADE "Gravity-DEX" NEEDED at height: 6910000: v5.0.0-4760cf1f1266accec7a107f440d46d9724c6fd08'),(0,n.kt)("p",{parentName:"blockquote"},'panic: UPGRADE "Gravity-DEX" NEEDED at height: 6910000: v5.0.0-4760cf1f1266accec7a107f440d46d9724c6fd08')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"IMPORTANT: PLEASE WAIT FOR THE BINARY TO HALT ON ITS OWN"),". Do NOT shutdown the node yourself. If the node shuts down before the panic message, start the node and let it run until the panic stops the node for you."),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Important note to all validators: Although the upgrade path is essentially to replace the binary when the software panics and halts at the upgrade height, an important disaster recovery operation is to take a snapshot of your state after the halt and before starting v5.0.0.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cp -r ~/.gaia ./gaia_backup\n")),(0,n.kt)("p",null,"Note: use the home directory relevant to your node's Gaia configuration (if different from ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.gaia"),")."),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Replace the Gaia v4.2.1 binary with the Gaia v5.0.0 binary"),(0,n.kt)("li",{parentName:"ol"},"Start the Gaia v5.0.0 binary using the following command (also applying any additional flags and parameters to the binary needed by the operator, e.g., ",(0,n.kt)("inlineCode",{parentName:"li"},"--home $HOME"),"):")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"gaiad start --x-crisis-skip-assert-invariants")),(0,n.kt)("p",null,"IMPORTANT: The flag ",(0,n.kt)("inlineCode",{parentName:"p"},"--x-crisis-skip-assert-invariants")," is optional and can be used to reduce memory and processing requirements while the in-place ugprade takes place before resuming connecting to the network."),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Wait until 2/3+ of voting power has upgraded for the network to start producing blocks"),(0,n.kt)("li",{parentName:"ol"},"You can use the following commands to check peering status and state:")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"curl -s ",(0,n.kt)("a",{parentName:"p",href:"http://127.0.0.1:26657/net_info"},"http://127.0.0.1:26657/net_info")," | grep n_peers"),(0,n.kt)("p",{parentName:"blockquote"},"curl -s localhost:26657/consensus_state | jq -r .result.round_state.height_vote_set[].prevotes_bit_array")),(0,n.kt)("h2",{id:"upgrade-duration"},"Upgrade duration"),(0,n.kt)("p",null,"The upgrade may take several hours to complete because cosmoshub-4 participants operate globally with differing operating hours and it may take some time for operators to upgrade their binaries and connect to the network."),(0,n.kt)("h2",{id:"rollback-plan"},"Rollback plan"),(0,n.kt)("p",null,"During the network upgrade, core Cosmos teams will be keeping an ever vigilant eye and communicating with operators on the status of their upgrades. During this time, the core teams will listen to operator needs to determine if the upgrade is experiencing unintended challenges. In the event of unexpected challenges, the core teams, after conferring with operators and attaining social consensus, may choose to declare that the upgrade will be skipped."),(0,n.kt)("p",null,"Steps to skip this upgrade proposal are simply to resume the cosmoshub-4 network with the (downgraded) v4.2.1 binary using the following command:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"gaiad start --unsafe-skip-upgrade 6910000")),(0,n.kt)("p",null,"Note: There is no particular need to restore a state snapshot prior to the upgrade height, unless specifically directed by core Cosmos teams."),(0,n.kt)("p",null,"Important: A social consensus decision to skip the upgrade will be based solely on technical merits, thereby respecting and maintaining the decentralized governance process of the upgrade proposal's successful YES vote."),(0,n.kt)("h2",{id:"communications"},"Communications"),(0,n.kt)("p",null,"Operators are encouraged to join the ",(0,n.kt)("inlineCode",{parentName:"p"},"#validators-verified")," channel of the Cosmos Community Discord. This channel is the primary communication tool for operators to ask questions, report upgrade status, report technical issues, and to build social consensus should the need arise. This channel is restricted to known operators and requires verification beforehand - requests to join the ",(0,n.kt)("inlineCode",{parentName:"p"},"#validators-verified")," channel can be sent to the ",(0,n.kt)("inlineCode",{parentName:"p"},"#validators-public")," channel.  "),(0,n.kt)("h2",{id:"risks"},"Risks"),(0,n.kt)("p",null,"As a validator performing the upgrade procedure on your consensus nodes carries a heightened risk of double-signing and being slashed. The most important piece of this procedure is verifying your software version and genesis file hash before starting your validator and signing."),(0,n.kt)("p",null,"The riskiest thing a validator can do is discover that they made a mistake and repeat the upgrade procedure again during the network startup. If you discover a mistake in the process, the best thing to do is wait for the network to start before correcting it."),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"If I am a new operator and I want to join the network, what should I do?")),(0,n.kt)("p",null,"In order to join the cosmoshub-4 network after the Delta upgrade, you have two options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use a post-delta upgrade state snapshot, such as one provided by ",(0,n.kt)("a",{parentName:"li",href:"https://cosmos.quicksync.io/"},"quicksync")," and start a node using the gaia v5.0.0 binary."),(0,n.kt)("li",{parentName:"ul"},"If not using a snapshot, or using a pre-delta upgrade snapshot, sync with the network using the gaia v4.2.1 binary until the upgrade height and panic, then switch the gaia binary for v5.0.0.")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Does the post-Delta upgrade introduce any changes of note?")),(0,n.kt)("p",null,"The core Cosmos SDK and Tendermint dependencies have only their minor versions bumped, so there are no significant changes of note to the API."),(0,n.kt)("p",null,"The only integration points that would be affected would be anything that parses all Cosmos SDK messages. The additional messages are ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Gravity-Devs/liquidity/blob/master/proto/tendermint/liquidity/v1beta1/tx.proto"},"here"),"."),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Is Amino still supported in the post-Delta upgrade?")),(0,n.kt)("p",null,"Amino is still supported. Amino support is still present in the master branch of the Cosmos SDK. No upgrade to remove Amino is currently scheduled."),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Has the Gravity DEX module undergone a professional 3rd-party audit?")),(0,n.kt)("p",null,"Yes, the audit was led by Least Authority, and have released the ",(0,n.kt)("a",{parentName:"p",href:"https://leastauthority.com/blog/audit-of-cosmos-sdk-liquidity-module-for-all-in-bits/"},"audit report"),"."),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},'We have some self-healing node infrastructure in place. If the node starts failing when the chain halts, and we automatically spin up another 4.2.1 node with state from within the past couple of hours, is there a risk of it double signing transactions as it "catches up" to the point where block processing stops?')),(0,n.kt)("p",null,"When the network is halted, there is no risk of double-signing since no blocks are being produced. You only need to ensure that the self-healing infrastructure does not launch multiple validators when the network resumes block production. As well, if any new node is spun up while the chain is halted, live peers will continue to share historical blocks without producing new blocks."))}h.isMDXComponent=!0}}]);