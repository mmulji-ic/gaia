"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[5809],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,h=d["".concat(l,".").concat(u)]||d[u]||g[u]||i;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},733:(e,t,n)=>{n.d(t,{g:()=>a});const a={lastRelease:{releaseName:"v11",releaseDate:"",blockHeight:"",governanceProposalLink:""},currentRelease:{releaseName:"v12",releaseDate:"",blockHeight:"",governanceProposalLink:"",gaidExecutionOutput:"\u276f gaiad version --long\nname: gaia\nserver_name: gaiad\nversion: v12.0.0\ncommit: 6f8067d76ce30996f83645862153ccfaf5f13dd1\nbuild_tags: netgo,ledger\ngo: go version go1.20.4 darwin/arm64\nbuild_deps:\n- cosmossdk.io/api@v0.2.6\n- cosmossdk.io/core@v0.5.1\n- cosmossdk.io/depinject@v1.0.0-alpha.3\n- cosmossdk.io/errors@v1.0.0\n- filippo.io/edwards25519@v1.0.0-rc.1\n- github.com/99designs/go-keychain@v0.0.0-20191008050251-8e49817e8af4\n- github.com/99designs/keyring@v1.2.1 => github.com/cosmos/keyring@v1.2.0\n- github.com/ChainSafe/go-schnorrkel@v1.0.0\n- github.com/Workiva/go-datastructures@v1.0.53\n- github.com/armon/go-metrics@v0.4.1\n- github.com/beorn7/perks@v1.0.1\n- github.com/bgentry/speakeasy@v0.1.1-0.20220910012023-760eaf8b6816\n- github.com/btcsuite/btcd/btcec/v2@v2.3.2\n- github.com/cenkalti/backoff/v4@v4.1.3\n- github.com/cespare/xxhash/v2@v2.1.2\n- github.com/coinbase/rosetta-sdk-go@v0.7.9\n- github.com/cometbft/cometbft-db@v0.7.0\n- github.com/confio/ics23/go@v0.9.0\n- github.com/cosmos/btcutil@v1.0.4\n- github.com/cosmos/cosmos-db@v0.0.0-20221226095112-f3c38ecb5e32\n- github.com/cosmos/cosmos-proto@v1.0.0-beta.1\n- github.com/cosmos/cosmos-sdk@v0.45.16-ics => github.com/cosmos/cosmos-sdk@v0.45.16-ics-lsm\n- github.com/cosmos/go-bip39@v1.0.0\n- github.com/cosmos/iavl@v0.19.5\n- github.com/cosmos/ibc-apps/middleware/packet-forward-middleware/v4@v4.1.0\n- github.com/cosmos/ibc-go/v4@v4.4.2\n- github.com/cosmos/interchain-security/v2@v2.0.0 => github.com/cosmos/interchain-security/v2@v2.0.0-lsm\n- github.com/cosmos/ledger-cosmos-go@v0.12.2\n- github.com/creachadair/taskgroup@v0.3.2\n- github.com/davecgh/go-spew@v1.1.1\n- github.com/decred/dcrd/dcrec/secp256k1/v4@v4.0.1\n- github.com/desertbit/timer@v0.0.0-20180107155436-c41aec40b27f\n- github.com/dvsekhvalnov/jose2go@v1.5.0\n- github.com/felixge/httpsnoop@v1.0.2\n- github.com/fsnotify/fsnotify@v1.6.0\n- github.com/go-kit/kit@v0.12.0\n- github.com/go-kit/log@v0.2.1\n- github.com/go-logfmt/logfmt@v0.5.1\n- github.com/gogo/gateway@v1.1.0\n- github.com/gogo/protobuf@v1.3.3 => github.com/regen-network/protobuf@v1.3.3-alpha.regen.1\n- github.com/golang/protobuf@v1.5.3\n- github.com/golang/snappy@v0.0.4\n- github.com/google/btree@v1.1.2\n- github.com/google/orderedcode@v0.0.1\n- github.com/gorilla/handlers@v1.5.1\n- github.com/gorilla/mux@v1.8.0\n- github.com/gorilla/websocket@v1.5.0\n- github.com/gravity-devs/liquidity@v1.6.0 => github.com/gravity-devs/liquidity@v1.6.0-forced-withdrawal\n- github.com/grpc-ecosystem/go-grpc-middleware@v1.3.0\n- github.com/grpc-ecosystem/grpc-gateway@v1.16.0\n- github.com/grpc-ecosystem/grpc-gateway/v2@v2.10.2\n- github.com/gtank/merlin@v0.1.1\n- github.com/gtank/ristretto255@v0.1.2\n- github.com/hashicorp/go-immutable-radix@v1.3.1\n- github.com/hashicorp/golang-lru@v0.5.5-0.20210104140557-80c98217689d\n- github.com/hashicorp/hcl@v1.0.0\n- github.com/hdevalence/ed25519consensus@v0.0.0-20220222234857-c00d1f31bab3\n- github.com/iancoleman/orderedmap@v0.2.0\n- github.com/improbable-eng/grpc-web@v0.15.0\n- github.com/klauspost/compress@v1.15.11\n- github.com/lib/pq@v1.10.7\n- github.com/libp2p/go-buffer-pool@v0.1.0\n- github.com/magiconair/properties@v1.8.7\n- github.com/mattn/go-colorable@v0.1.13\n- github.com/mattn/go-isatty@v0.0.17\n- github.com/matttproud/golang_protobuf_extensions@v1.0.2-0.20181231171920-c182affec369\n- github.com/mimoo/StrobeGo@v0.0.0-20210601165009-122bf33a46e0\n- github.com/minio/highwayhash@v1.0.2\n- github.com/mitchellh/mapstructure@v1.5.0\n- github.com/mtibben/percent@v0.2.1\n- github.com/pelletier/go-toml/v2@v2.0.8\n- github.com/pkg/errors@v0.9.1\n- github.com/pmezard/go-difflib@v1.0.0\n- github.com/prometheus/client_golang@v1.14.0\n- github.com/prometheus/client_model@v0.3.0\n- github.com/prometheus/common@v0.37.0\n- github.com/prometheus/procfs@v0.8.0\n- github.com/rakyll/statik@v0.1.7\n- github.com/rcrowley/go-metrics@v0.0.0-20201227073835-cf1acfcdf475\n- github.com/regen-network/cosmos-proto@v0.3.1\n- github.com/rs/cors@v1.8.2\n- github.com/rs/zerolog@v1.27.0\n- github.com/spf13/afero@v1.9.5\n- github.com/spf13/cast@v1.5.1\n- github.com/spf13/cobra@v1.7.0\n- github.com/spf13/jwalterweatherman@v1.1.0\n- github.com/spf13/pflag@v1.0.5\n- github.com/spf13/viper@v1.16.0\n- github.com/stretchr/testify@v1.8.4\n- github.com/subosito/gotenv@v1.4.2\n- github.com/syndtr/goleveldb@v1.0.1-0.20210819022825-2ae1ddf74ef7\n- github.com/tendermint/go-amino@v0.16.0\n- github.com/tendermint/tendermint@v0.34.27 => github.com/cometbft/cometbft@v0.34.29\n- github.com/tendermint/tm-db@v0.6.7\n- github.com/tidwall/btree@v1.5.0\n- github.com/zondax/hid@v0.9.1\n- github.com/zondax/ledger-go@v0.14.1\n- golang.org/x/crypto@v0.11.0\n- golang.org/x/exp@v0.0.0-20221205204356-47842c84f3db\n- golang.org/x/net@v0.12.0\n- golang.org/x/sys@v0.10.0\n- golang.org/x/term@v0.10.0\n- golang.org/x/text@v0.11.0\n- google.golang.org/genproto@v0.0.0-20230410155749-daa745c078e1\n- google.golang.org/grpc@v1.56.2 => google.golang.org/grpc@v1.33.2\n- google.golang.org/protobuf@v1.31.0\n- gopkg.in/ini.v1@v1.67.0\n- gopkg.in/yaml.v2@v2.4.0\n- gopkg.in/yaml.v3@v3.0.1\n- nhooyr.io/websocket@v1.8.6\ncosmos_sdk_version: v0.45.16-ics",golangVersion:"1.20.x"},nextRelease:{releaseName:"v12",releaseDate:"",blockHeight:"",governanceProposalLink:""},proposals:{numberOfValidatorsProp:"https://www.mintscan.io/cosmos/proposals/797"},auth:{MaxMemoCharacters:"512",SigVerifyCostED25519:"590",SigVerifyCostSecp256k1:"1000",TxSigLimit:"7",TxSizeCostPerByte:"10"},bank:{DefaultSendEnabled:!0,SendEnabled:[]},baseapp:{BlockParams:{max_bytes:"200000",max_gas:"40000000"},EvidenceParams:{max_age_duration:"172800000000000",max_age_num_blocks:"1000000",max_bytes:"50000"},ValidatorParams:{pub_key_types:["ed25519"]}},crisis:{ConstantFee:{amount:"1333000000",denom:"uatom"}},distribution:{baseproposerreward:"0.010000000000000000",bonusproposerreward:"0.040000000000000000",communitytax:"0.020000000000000000",withdrawaddrenabled:!0},gov:{depositparams:{max_deposit_period:"1209600000000000",min_deposit:[{amount:"250000000",denom:"uatom"}]},tallyparams:{quorum:"0.400000000000000000",threshold:"0.500000000000000000",veto_threshold:"0.334000000000000000"},votingparams:{voting_period:"1209600000000000"}},liquidity:{CircuitBreakerEnabled:!1,InitPoolCoinMintAmount:"1000000",MaxOrderAmountRatio:"0.100000000000000000",MaxReserveCoinAmount:"0",MinInitDepositAmount:"1000000",PoolCreationFee:[{amount:"40000000",denom:"uatom"}],PoolTypes:[{description:"Standard liquidity pool with pool price function X/Y, ESPM constraint, and two kinds of reserve coins",id:1,max_reserve_coin_num:2,min_reserve_coin_num:2,name:"StandardLiquidityPool"}],SwapFeeRate:"0.003000000000000000",UnitBatchHeight:1,WithdrawFeeRate:"0.000000000000000000"},mint:{BlocksPerYear:"4360000",GoalBonded:"0.670000000000000000",InflationMax:"0.200000000000000000",InflationMin:"0.070000000000000000",InflationRateChange:"1.000000000000000000",MintDenom:"uatom"},slashing:{DowntimeJailDuration:"600000000000",MinSignedPerWindow:"0.050000000000000000",SignedBlocksWindow:"10000",SlashFractionDoubleSign:"0.050000000000000000",SlashFractionDowntime:"0.000100000000000000"},staking:{BondDenom:"uatom",HistoricalEntries:1e4,MaxEntries:7,MaxValidators:180,UnbondingTime:"1814400000000000"},transfer:{ReceiveEnabled:!0,SendEnabled:!0}}},7593:(e,t,n)=>{n.d(t,{v:()=>o});var a=n(7294);const o=e=>{let{data:t={},renderKey:n=(e=>a.createElement("a",{href:`#${e.toLowerCase()}`},a.createElement("code",null,e))),renderValue:o=(e=>e),...i}=e;return a.createElement("table",i,a.createElement("tr",{className:"text-left"},a.createElement("th",{className:"px-5.5"},"Key"),a.createElement("th",{className:"px-5.5"},"Value")),Object.entries(t).map((e=>{let[t,i]=e;return a.createElement("tr",{key:`${t}-${i}`},a.createElement("td",null,n(t)),a.createElement("td",null,a.createElement("code",null,JSON.stringify(o(i)))))})))}},1488:(e,t,n)=>{n.d(t,{nd:()=>o});var a=n(7294);const o=e=>{let{children:t}=e;return a.createElement("code",null,JSON.stringify(t))}},5376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>m,toc:()=>g});var a=n(7462),o=(n(7294),n(3905)),i=n(7593),r=n(1488),s=n(733);const l={title:"staking subspace"},c=void 0,m={unversionedId:"governance/proposal-types/params-change/Staking",id:"governance/proposal-types/params-change/Staking",title:"staking subspace",description:"The staking module is responsible for the proof of stake (PoS) layer of the Cosmos Hub blockchain. It includes the following parameters:",source:"@site/docs/governance/proposal-types/params-change/Staking.mdx",sourceDirName:"governance/proposal-types/params-change",slug:"/governance/proposal-types/params-change/Staking",permalink:"/gaia/governance/proposal-types/params-change/Staking",draft:!1,tags:[],version:"current",frontMatter:{title:"staking subspace"},sidebar:"tutorialSidebar",previous:{title:"slashing subspace",permalink:"/gaia/governance/proposal-types/params-change/Slashing"},next:{title:"Index of Governable Parameters",permalink:"/gaia/governance/proposal-types/params-change/param-index"}},d={},g=[{value:"Governance notes on parameters",id:"governance-notes-on-parameters",level:2},{value:"<code>UnbondingTime</code>",id:"unbondingtime",level:3},{value:"Decreasing the value of <code>UnbondingTime</code>",id:"decreasing-the-value-of-unbondingtime",level:4},{value:"Increasing the value of <code>UnbondingTime</code>",id:"increasing-the-value-of-unbondingtime",level:4},{value:"Notes",id:"notes",level:4},{value:"<code>MaxValidators</code>",id:"maxvalidators",level:2},{value:"Decreasing the value of <code>MaxValidators</code>",id:"decreasing-the-value-of-maxvalidators",level:4},{value:"Increasing the value of <code>MaxValidators</code>",id:"increasing-the-value-of-maxvalidators",level:4},{value:"Notes",id:"notes-1",level:4},{value:"<code>KeyMaxEntries</code>",id:"keymaxentries",level:3},{value:"Decreasing the value of <code>KeyMaxEntries</code>",id:"decreasing-the-value-of-keymaxentries",level:4},{value:"Increasing the value of <code>KeyMaxEntries</code>",id:"increasing-the-value-of-keymaxentries",level:4},{value:"Notes",id:"notes-2",level:3},{value:"<code>BondDenom</code>",id:"bonddenom",level:3},{value:"Changing the value of <code>BondDenom</code>",id:"changing-the-value-of-bonddenom",level:4},{value:"<code>HistoricalEntries</code>",id:"historicalentries",level:3}],u={toc:g},h="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"staking")," module is responsible for the proof of stake (PoS) layer of the Cosmos Hub blockchain. It includes the following parameters:"),(0,o.kt)(i.v,{data:s.g.staking,mdxType:"KeyValueTable"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"staking")," module is responsible for supporting an advanced Proof of Stake (PoS) system. In this system, holders of the native staking token of the chain can become validators and can delegate tokens to validators, ultimately determining the effective validator set for the system."),(0,o.kt)("h2",{id:"governance-notes-on-parameters"},"Governance notes on parameters"),(0,o.kt)("h3",{id:"unbondingtime"},(0,o.kt)("inlineCode",{parentName:"h3"},"UnbondingTime")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The time duration required for bonded ATOMs to unbond and become transferrable, in nanoseconds.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"on-chain value: ",(0,o.kt)(r.nd,{children:s.g.staking.UnbondingTime,mdxType:"Var"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cosmoshub-4")," default: ",(0,o.kt)("inlineCode",{parentName:"li"},"1814400000000000")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cosmoshub-3")," default: ",(0,o.kt)("inlineCode",{parentName:"li"},"1814400000000000"))),(0,o.kt)("p",null,"In order to participate as a Cosmos Hub validator or delegator, ATOMs must be bonded (also known as staking). Once bonded, ATOMs are locked by the protocol and are no longer transferrable. When ATOM unbonding is initiated, the ",(0,o.kt)("inlineCode",{parentName:"p"},"UnbondingTime")," of 1814400000000000 nanoseconds (21 days) duration must pass before the ATOMs will be unlocked and transferrable."),(0,o.kt)("p",null,'ATOMs are used as a bond when staking. A bond may be slashed (ie. partially destroyed) when a validator has been proven to have broken protocol rules. Why? Primarily as a solution to the "',(0,o.kt)("a",{parentName:"p",href:"https://medium.com/coinmonks/understanding-proof-of-stake-the-nothing-at-stake-theory-1f0d71bc027"},"nothing-at-stake"),'" problem. In the scenario of an accidental or malicious attempt to rewrite history and reverse a transaction, a new chain ("fork") may be created in parallel with the primary chain. Without the risk of losing this bond, the optimal strategy for any validator is to validate blocks on both chains so that the validator gets their reward no matter which fork wins. A bond makes it more likely that the optimal strategy for validators will be to only validate blocks for the true ("canonical") chain.'),(0,o.kt)("p",null,"Why is ",(0,o.kt)("inlineCode",{parentName:"p"},"UnbondingTime")," so long? It can take time to discover that a validator has committed equivocation ie. signed two blocks at the same block height. If a validator commits equivocation and then unbonds before being caught, the protocol can no longer slash (ie. partially destroy) the validator's bond."),(0,o.kt)("h4",{id:"decreasing-the-value-of-unbondingtime"},"Decreasing the value of ",(0,o.kt)("inlineCode",{parentName:"h4"},"UnbondingTime")),(0,o.kt)("p",null,"Decreasing the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"UnbondingTime")," parameter will reduce the time it takes to unbond ATOMs. This will make it less likely for a validator's bond to be slashed after committing equivocation (aka double-signing)."),(0,o.kt)("h4",{id:"increasing-the-value-of-unbondingtime"},"Increasing the value of ",(0,o.kt)("inlineCode",{parentName:"h4"},"UnbondingTime")),(0,o.kt)("p",null,"Increasing the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"UnbondingTime")," parameter will increase the time it takes to unbond ATOMs. This will make it more likely for a validator's bond to be slashed after committing equivocation (aka double-signing)."),(0,o.kt)("h4",{id:"notes"},"Notes"),(0,o.kt)("p",null,"The ability to punish a validator for committing equivocation is associated with the strength of the protocol's security guarantees."),(0,o.kt)("p",null,"1 second is equal to 1,000,000,000 nanoseconds."),(0,o.kt)("h2",{id:"maxvalidators"},(0,o.kt)("inlineCode",{parentName:"h2"},"MaxValidators")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The maximum number of validators that may participate in validating blocks, earning rewards, and governance voting.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"on-chain value: ",(0,o.kt)(r.nd,{children:s.g.staking.MaxValidators,mdxType:"Var"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cosmoshub-4")," default: ",(0,o.kt)("inlineCode",{parentName:"li"},"125")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cosmoshub-3")," default: ",(0,o.kt)("inlineCode",{parentName:"li"},"125"))),(0,o.kt)("p",null,'Validators are ranked by stake-backing based upon the sum of their delegations, and only the top 125 are designated to be active (aka "the active set"). The active set may change any time delegation amounts change. Only active validators may participate in validating blocks, earning rewards, and governance voting. ATOM-holders may participate in staking by delegating their bonded ATOMs to one or more validators in the active set. Delegators may only earn rewards and have their governance votes count if they are delegating to an active validator, the set of which is capped by ',(0,o.kt)("inlineCode",{parentName:"p"},"MaxValidators"),"."),(0,o.kt)("h4",{id:"decreasing-the-value-of-maxvalidators"},"Decreasing the value of ",(0,o.kt)("inlineCode",{parentName:"h4"},"MaxValidators")),(0,o.kt)("p",null,"Decreasing the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"MaxValidators")," parameter will likely reduce the number of validators actively participating in validating blocks, earning rewards, and governance voting for the Cosmos Hub. This may decrease the time it takes to produce each new Cosmos Hub block."),(0,o.kt)("h4",{id:"increasing-the-value-of-maxvalidators"},"Increasing the value of ",(0,o.kt)("inlineCode",{parentName:"h4"},"MaxValidators")),(0,o.kt)("p",null,"Increasing the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"MaxValidators")," parameter will likely increase the number of validators actively participating in validating blocks, earning rewards, and governance voting for the Cosmos Hub. This may increase the time it takes to produce each new Cosmos Hub block."),(0,o.kt)("h4",{id:"notes-1"},"Notes"),(0,o.kt)("p",null,"Prior to ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmoshub-3"),", the Cosmos Hub had a maximum set of 100 active validators. Text-based governance proposal ",(0,o.kt)("a",{parentName:"p",href:"https://cosmoshub-2.bigdipper.live/proposals/10"},"Prop10")," signalled agreement that the active set be increased to 125 validators. Block times were ~6.94 seconds/block with 100 validators, and are now ~7.08 seconds/block with 125 validators."),(0,o.kt)("p",null,"It may be argued that after the Cosmos creators, the validator cohort may be the largest group of contributors to the Cosmos Hub community. Changes to the number of active validator participants may also affect the non-validator contributions to the Cosmos Hub."),(0,o.kt)("h3",{id:"keymaxentries"},(0,o.kt)("inlineCode",{parentName:"h3"},"KeyMaxEntries")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"The maximum number of unbondings between a delegator and validator within the ",(0,o.kt)("a",{parentName:"strong",href:"#UnbondingTime"},"unbonding period"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"A delegator's maximum number of simultaneous redelegations from one validator to another validator within the ",(0,o.kt)("a",{parentName:"strong",href:"#1-UnbondingTime"},"unbonding period"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"on-chain value: ",(0,o.kt)(r.nd,{children:s.g.staking.KeyMaxEntries,mdxType:"Var"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"cosmoshub-4")," default: ",(0,o.kt)("inlineCode",{parentName:"p"},"7"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"cosmoshub-3")," default: ",(0,o.kt)("inlineCode",{parentName:"p"},"7")))),(0,o.kt)("p",null,"Each delegator has a limited number of times that they may unbond ATOM amounts from a unique validator within the ",(0,o.kt)("a",{parentName:"p",href:"#unbondingtime"},"unbonding period"),". Each delegator also has a limited number of times that they may redelegate from one unique validator to another unique validator within the unbonding period. This limit is set by the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"KeyMaxEntries"),", which is currently ",(0,o.kt)("inlineCode",{parentName:"p"},"7"),". To be clear, this limit does not apply to a delegator that is redelegating from one validator to different validators."),(0,o.kt)("h4",{id:"decreasing-the-value-of-keymaxentries"},"Decreasing the value of ",(0,o.kt)("inlineCode",{parentName:"h4"},"KeyMaxEntries")),(0,o.kt)("p",null,"Decreasing the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"KeyMaxEntries")," parameter will, within the unbonding period, decrease the number of times that a delegator may unbond ATOM amounts from a single, unique validator. It will also decrease the number of redelegations a delegator may initiate between two unique validators. Since this activity across many accounts can affect the performance of the Cosmos Hub, decreasing this parameter's value decreases the likelihood of a performance reduction in the network."),(0,o.kt)("h4",{id:"increasing-the-value-of-keymaxentries"},"Increasing the value of ",(0,o.kt)("inlineCode",{parentName:"h4"},"KeyMaxEntries")),(0,o.kt)("p",null,"Increasing the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"KeyMaxEntries")," parameter will, within the unbonding period, increase the number of times that a delegator may unbond ATOM amounts from a single, unique validator. It will also increase the number of redelegations a delegator may initiate between two unique validators. Since this activity across many accounts can affect the performance of the Cosmos Hub, increasing this parameter's value may increase the likelihood of a performance reduction in the network."),(0,o.kt)("h3",{id:"notes-2"},"Notes"),(0,o.kt)("p",null,"Aleksandr (All in Bits; Fission Labs) wrote more about ",(0,o.kt)("inlineCode",{parentName:"p"},"KeyMaxEntries")," ",(0,o.kt)("a",{parentName:"p",href:"https://blog.cosmos.network/re-delegations-in-the-cosmos-hub-7d2f5ea59f56"},"here in this article"),"."),(0,o.kt)("h3",{id:"bonddenom"},(0,o.kt)("inlineCode",{parentName:"h3"},"BondDenom")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The unit and denomination for the asset bonded in the system.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"on-chain value: ",(0,o.kt)(r.nd,{children:s.g.staking.BondDenom,mdxType:"Var"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cosmoshub-4")," default: ",(0,o.kt)("inlineCode",{parentName:"li"},"uatom")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cosmoshub-3")," default: ",(0,o.kt)("inlineCode",{parentName:"li"},"uatom"))),(0,o.kt)("p",null,"When using an asset as a bond on the Cosmos Hub, the unit and denomination of the asset is denoted as the ",(0,o.kt)("inlineCode",{parentName:"p"},"uatom"),", or micro-ATOM, where 1 ATOM is considered 1000000uatom. The protocol doesn't use ATOM for bonds, only uatom."),(0,o.kt)("h4",{id:"changing-the-value-of-bonddenom"},"Changing the value of ",(0,o.kt)("inlineCode",{parentName:"h4"},"BondDenom")),(0,o.kt)("p",null,"Changing the ",(0,o.kt)("inlineCode",{parentName:"p"},"BondDenom")," parameter will make any bond transactions with ",(0,o.kt)("inlineCode",{parentName:"p"},"uatom")," fail and will require the new ",(0,o.kt)("inlineCode",{parentName:"p"},"BondDenom")," parameter string in order for bond transactions to be successful. Changing this parameter is likely to have breaking changes for applications that offer staking and delegation functionality."),(0,o.kt)("h3",{id:"historicalentries"},(0,o.kt)("inlineCode",{parentName:"h3"},"HistoricalEntries")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The number of HistoricalEntries to keep.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"on-chain value: ",(0,o.kt)(r.nd,{children:s.g.staking.HistoricalEntries,mdxType:"Var"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cosmoshub-4")," default: ",(0,o.kt)("inlineCode",{parentName:"li"},"10000")),(0,o.kt)("li",{parentName:"ul"},"Did not exist in ",(0,o.kt)("inlineCode",{parentName:"li"},"cosmoshub-3")," genesis")),(0,o.kt)("p",null,"Read ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/architecture/adr-017-historical-header-module.md"},"ADR-17")," for more on the Historical Header Module."))}p.isMDXComponent=!0}}]);