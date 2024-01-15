"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[3143],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=o,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1728:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(7462),o=(a(7294),a(3905));const r={title:"Ledger Nano Support",order:3},i="Ledger Nano Support",l={unversionedId:"resources/ledger",id:"resources/ledger",title:"Ledger Nano Support",description:"Using a hardware wallet to store your keys greatly improves the security of your crypto assets. The Ledger device acts as an enclave of the seed and private keys, and the process of signing transactions takes place within it. No private information ever leaves the Ledger device. The following is a short tutorial on using the Cosmos Ledger app with the Gaia CLI or the Keplr wallet extension.",source:"@site/docs/resources/ledger.md",sourceDirName:"resources",slug:"/resources/ledger",permalink:"/gaia/resources/ledger",draft:!1,tags:[],version:"current",frontMatter:{title:"Ledger Nano Support",order:3},sidebar:"tutorialSidebar",previous:{title:"HD Wallets",permalink:"/gaia/resources/hd-wallets"},next:{title:"Building Gaia Deterministically",permalink:"/gaia/resources/reproducible-builds"}},s={},d=[{value:"Install the Cosmos Ledger application",id:"install-the-cosmos-ledger-application",level:2},{value:"Keplr + Ledger Nano",id:"keplr--ledger-nano",level:2},{value:"(Optional) Confirm your address",id:"optional-confirm-your-address",level:3},{value:"Gaia CLI + Ledger Nano",id:"gaia-cli--ledger-nano",level:2},{value:"Before you Begin",id:"before-you-begin",level:3},{value:"Add your Ledger key",id:"add-your-ledger-key",level:3},{value:"Confirm your address",id:"confirm-your-address",level:3},{value:"Connect to a full node",id:"connect-to-a-full-node",level:3},{value:"Sign a transaction",id:"sign-a-transaction",level:3},{value:"Receive funds",id:"receive-funds",level:3},{value:"Further documentation",id:"further-documentation",level:3},{value:"The Cosmos Standard Transaction",id:"the-cosmos-standard-transaction",level:2},{value:"Support",id:"support",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ledger-nano-support"},"Ledger Nano Support"),(0,o.kt)("p",null,"Using a hardware wallet to store your keys greatly improves the security of your crypto assets. The Ledger device acts as an enclave of the seed and private keys, and the process of signing transactions takes place within it. No private information ever leaves the Ledger device. The following is a short tutorial on using the Cosmos Ledger app with the Gaia CLI or the ",(0,o.kt)("a",{parentName:"p",href:"https://www.keplr.app/"},"Keplr")," wallet extension."),(0,o.kt)("p",null,"At the core of a Ledger device there is a mnemonic seed phrase that is used to generate private keys. This phrase is generated when you initialize your Ledger. The mnemonic is compatible with Cosmos and can be used to seed new accounts."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Do not lose or share your 24 words with anyone. To prevent theft or loss of funds, it is best to keep multiple copies of your mnemonic stored in safe, secure places. If someone is able to gain access to your mnemonic, they will fully control the accounts associated with them.")),(0,o.kt)("h2",{id:"install-the-cosmos-ledger-application"},"Install the Cosmos Ledger application"),(0,o.kt)("p",null,"Installing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Cosmos")," application on your ledger device is required before you can use either ",(0,o.kt)("a",{parentName:"p",href:"#keplr--ledger-nano"},"Keplr")," or ",(0,o.kt)("a",{parentName:"p",href:"#gaia-cli--ledger-nano"},(0,o.kt)("inlineCode",{parentName:"a"},"gaiad")),". To do so, you need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://www.ledger.com/ledger-live"},"Ledger Live")," on your machine."),(0,o.kt)("li",{parentName:"ol"},"Using Ledger Live, ",(0,o.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360002731113?docs=true"},"update your Ledger Nano S with the latest firmware"),"."),(0,o.kt)("li",{parentName:"ol"},"On the Ledger Live application, navigate to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Manager")," menu .\n",(0,o.kt)("img",{alt:"manager",src:a(8378).Z,width:"2034",height:"1526"})),(0,o.kt)("li",{parentName:"ol"},"Connect your Ledger Nano device and allow Ledger Manager from it."),(0,o.kt)("li",{parentName:"ol"},"On the Ledger Live application, Search for ",(0,o.kt)("inlineCode",{parentName:"li"},"Cosmos"),".\n",(0,o.kt)("img",{alt:"search",src:a(410).Z,width:"2044",height:"1532"})),(0,o.kt)("li",{parentName:"ol"},"Install the Cosmos application by clicking on ",(0,o.kt)("inlineCode",{parentName:"li"},"Install"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To see the ",(0,o.kt)("inlineCode",{parentName:"p"},"Cosmos")," application when you search for it, you might need to activate the ",(0,o.kt)("inlineCode",{parentName:"p"},"Developer Mode"),", located in the Experimental features tab of the Ledger Live application.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Devmode",src:a(8035).Z,width:"2040",height:"1530"})),(0,o.kt)("h2",{id:"keplr--ledger-nano"},"Keplr + Ledger Nano"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note: You need to ",(0,o.kt)("a",{parentName:"strong",href:"#install-the-cosmos-ledger-application"},"install the Cosmos app")," on your Ledger Nano before following this section")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Connect your Ledger device to your computer, unlock it with the PIN and open the Cosmos app."),(0,o.kt)("li",{parentName:"ol"},"Install the ",(0,o.kt)("a",{parentName:"li",href:"https://www.keplr.app/"},"Keplr browser extension"),"."),(0,o.kt)("li",{parentName:"ol"},"Click on the Keplr extension icon and select ",(0,o.kt)("inlineCode",{parentName:"li"},"Import Ledger")," and choose an account name and password."),(0,o.kt)("li",{parentName:"ol"},"Make sure your Ledger device is unlocked and has the Cosmos app open and then follow the instructions on the Keplr pop-up.")),(0,o.kt)("p",null,"That's it! You can now use Keplr with your Ledger Nano S. You can use the ",(0,o.kt)("a",{parentName:"p",href:"https://wallet.keplr.app/#/dashboard"},"Keplr web app")," to get a more detailed overview of your Cosmos account."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note: Each time you will send a transaction, you will need to confirm it on your Ledger device. Indication will be prompted from the Keplr interface")),(0,o.kt)("h3",{id:"optional-confirm-your-address"},"(Optional) Confirm your address"),(0,o.kt)("p",null,"You can double check that Keplr is displaying the correct address directly on your Ledger Nano device. To do so:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Connect your Ledger to your computer and open the Cosmos application on the device."),(0,o.kt)("li",{parentName:"ol"},"Once the Cosmos app is open, click on the right button to access the ",(0,o.kt)("inlineCode",{parentName:"li"},"Show Address")," option."),(0,o.kt)("li",{parentName:"ol"},"Click on both button, then select ",(0,o.kt)("inlineCode",{parentName:"li"},"Account 0")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Index 0"),".")),(0,o.kt)("p",null,"You should now see the same address that is displayed on the Keplr extension."),(0,o.kt)("p",null,"To learn more about using Keplr, we suggest you have a look at their ",(0,o.kt)("a",{parentName:"p",href:"https://keplr.crunch.help"},"support documentation"),"."),(0,o.kt)("p",null,"You can also have a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://support.ledger.com/hc/en-us/articles/4411149814417?docs=true"},"Ledger support page")," for more details."),(0,o.kt)("h2",{id:"gaia-cli--ledger-nano"},"Gaia CLI + Ledger Nano"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note: You need to ",(0,o.kt)("a",{parentName:"strong",href:"#install-the-cosmos-ledger-application"},"install the Cosmos app")," on your Ledger Nano before following this section")),(0,o.kt)("p",null,"The tool used to generate addresses and transactions on the Cosmos Hub network is ",(0,o.kt)("inlineCode",{parentName:"p"},"gaiad"),". Here is how to get started. If using a CLI tool is unfamiliar to you, scroll down and follow instructions for using the Keplr wallet instead."),(0,o.kt)("h3",{id:"before-you-begin"},"Before you Begin"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://golang.org/doc/install"},"Install Golang")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/gaia/getting-started/installation"},"Install Gaia"))),(0,o.kt)("p",null,"Verify that gaiad is installed correctly with the following command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gaiad version --long\n\n\u279c cosmos-sdk: 0.34.3\ngit commit: 67ab0b1e1d1e5b898c8cbdede35ad5196dba01b2\nvendor hash: 0341b356ad7168074391ca7507f40b050e667722\nbuild tags: netgo ledger\ngo version go1.11.5 darwin/amd64\n")),(0,o.kt)("h3",{id:"add-your-ledger-key"},"Add your Ledger key"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connect and unlock your Ledger device."),(0,o.kt)("li",{parentName:"ul"},"Open the Cosmos app on your Ledger."),(0,o.kt)("li",{parentName:"ul"},"Create an account in gaiad from your ledger key.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Be sure to change the ",(0,o.kt)("em",{parentName:"p"},"keyName")," parameter to be a meaningful name. The ",(0,o.kt)("inlineCode",{parentName:"p"},"ledger")," flag tells ",(0,o.kt)("inlineCode",{parentName:"p"},"gaiad")," to use your Ledger to seed the account.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gaiad keys add <keyName> --ledger\n\n\u279c NAME: TYPE: ADDRESS:     PUBKEY:\n<keyName> ledger cosmos1... cosmospub1...\n")),(0,o.kt)("p",null,"Cosmos uses ",(0,o.kt)("a",{parentName:"p",href:"/gaia/resources/hd-wallets"},"HD Wallets"),". This means you can setup many accounts using the same Ledger seed. To create another account from your Ledger device, run (change the integer i to some value >= 0 to choose the account for HD derivation):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gaiad keys add <secondKeyName> --ledger --account <i>\n")),(0,o.kt)("h3",{id:"confirm-your-address"},"Confirm your address"),(0,o.kt)("p",null,"Run this command to display your address on the device. Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"keyName")," you gave your ledger key. The ",(0,o.kt)("inlineCode",{parentName:"p"},"-d")," flag is supported in version ",(0,o.kt)("inlineCode",{parentName:"p"},"1.5.0")," and higher."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gaiad keys show <keyName> -d\n")),(0,o.kt)("p",null,"Confirm that the address displayed on the device matches that displayed when you added the key."),(0,o.kt)("h3",{id:"connect-to-a-full-node"},"Connect to a full node"),(0,o.kt)("p",null,"Next, you need to configure gaiad with the URL of a Cosmos full node and the appropriate ",(0,o.kt)("inlineCode",{parentName:"p"},"chain_id"),". In this example we connect to the public load balanced full node operated by Chorus One on the ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmoshub-2")," chain. But you can point your ",(0,o.kt)("inlineCode",{parentName:"p"},"gaiad")," to any Cosmos full node. Be sure that the ",(0,o.kt)("inlineCode",{parentName:"p"},"chain-id")," is set to the same chain as the full node."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gaiad config node https://cosmos.chorus.one:26657\ngaiad config chain_id cosmoshub-2\n")),(0,o.kt)("p",null,"Test your connection with a query such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gaiad query staking validators\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To run your own full node locally ",(0,o.kt)("a",{parentName:"p",href:"/gaia/hub-tutorials/join-mainnet"},"read more here."),".")),(0,o.kt)("h3",{id:"sign-a-transaction"},"Sign a transaction"),(0,o.kt)("p",null,"You are now ready to start signing and sending transactions. Send a transaction with gaiad using the ",(0,o.kt)("inlineCode",{parentName:"p"},"tx send")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gaiad tx bank send --help # to see all available options.\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Be sure to unlock your device with the PIN and open the Cosmos app before trying to run these commands")),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"keyName")," you set for your Ledger key and gaia will connect with the Cosmos Ledger app to then sign your transaction."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gaiad tx bank send <keyName> <destinationAddress> <amount><denomination>\n")),(0,o.kt)("p",null,"When prompted with ",(0,o.kt)("inlineCode",{parentName:"p"},"confirm transaction before signing"),", Answer ",(0,o.kt)("inlineCode",{parentName:"p"},"Y"),"."),(0,o.kt)("p",null,"Next you will be prompted to review and approve the transaction on your Ledger device. Be sure to inspect the transaction JSON displayed on the screen. You can scroll through each field and each message. Scroll down to read more about the data fields of a standard transaction object."),(0,o.kt)("p",null,"Now, you are all set to start ",(0,o.kt)("a",{parentName:"p",href:"/gaia/delegators/delegator-guide-cli#sending-transactions"},"sending transactions on the network"),"."),(0,o.kt)("h3",{id:"receive-funds"},"Receive funds"),(0,o.kt)("p",null,"To receive funds to the Cosmos account on your Ledger device, retrieve the address for your Ledger account (the ones with ",(0,o.kt)("inlineCode",{parentName:"p"},"TYPE ledger"),") with this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gaiad keys list\n\n\u279c NAME: TYPE: ADDRESS:     PUBKEY:\n<keyName> ledger cosmos1... cosmospub1...\n")),(0,o.kt)("h3",{id:"further-documentation"},"Further documentation"),(0,o.kt)("p",null,"Not sure what ",(0,o.kt)("inlineCode",{parentName:"p"},"gaiad")," can do? Simply run the command without arguments to output documentation for the commands in supports."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"gaiad")," help commands are nested. So ",(0,o.kt)("inlineCode",{parentName:"p"},"$ gaiad")," will output docs for the top level commands (status, config, query, and tx). You can access documentation for sub commands with further help commands."),(0,o.kt)("p",{parentName:"admonition"},"For example, to print the ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," commands:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gaiad query --help\n")),(0,o.kt)("p",{parentName:"admonition"},"Or to print the ",(0,o.kt)("inlineCode",{parentName:"p"},"tx")," (transaction) commands:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gaiad tx --help\n"))),(0,o.kt)("h2",{id:"the-cosmos-standard-transaction"},"The Cosmos Standard Transaction"),(0,o.kt)("p",null,"Transactions in Cosmos embed the ",(0,o.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/cosmos/cosmos-sdk/x/auth#StdTx"},"Standard Transaction type")," from the Cosmos SDK. The Ledger device displays a serialized JSON representation of this object for you to review before signing the transaction. Here are the fields and what they mean:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chain-id"),": The chain to which you are broadcasting the tx, such as the ",(0,o.kt)("inlineCode",{parentName:"li"},"gaia-13003")," testnet or ",(0,o.kt)("inlineCode",{parentName:"li"},"cosmoshub-2"),": mainnet."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"account_number"),": The global id of the sending account assigned when the account receives funds for the first time."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sequence"),": The nonce for this account, incremented with each transaction."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fee"),": JSON object describing the transaction fee, its gas amount and coin denomination"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"memo"),": optional text field used in various ways to tag transactions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"msgs_<index>/<field>"),": The array of messages included in the transaction. Double click to drill down into nested fields of the JSON.")),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("p",null,"For further support, start by looking over the posts in our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.cosmos.network/search?q=ledger"},"forum")),(0,o.kt)("p",null,"Feel welcome to reach out in our ",(0,o.kt)("a",{parentName:"p",href:"https://t.me/cosmosproject"},"Telegram channel")," to ask for help."),(0,o.kt)("p",null,"Here are a few relevant and helpful tutorials from the wonderful Cosmos community:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://catdotfish.medium.com/"},"Catdotfish")," - ",(0,o.kt)("a",{parentName:"li",href:"https://medium.com/chainapsis/how-to-use-keplr-wallet-40afc80907f6"},"How to use the Keplr Wallet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/cryptium"},"Cryptium Labs")," - ",(0,o.kt)("a",{parentName:"li",href:"https://medium.com/cryptium-cosmos/how-to-store-your-cosmos-atoms-on-your-ledger-and-delegate-with-the-command-line-929eb29705f"},"How to store your ATOMS on your Ledger and delegate with the command line"))))}u.isMDXComponent=!0},8035:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ledger-tuto-dev-mode-c4e394fda2491363a287cbf1fc82ab39.png"},8378:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ledger-tuto-manager-f0a3a54c10bfa2405995efaed78536f1.png"},410:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ledger-tuto-search-d4d718ef5efa0fb720af125ef8819fd5.png"}}]);