"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[2397],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>p});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),g=l(o),h=a,p=g["".concat(c,".").concat(h)]||g[h]||u[h]||i;return o?n.createElement(p,r(r({ref:t},m),{},{components:o})):n.createElement(p,r({ref:t},m))}));function p(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[g]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=o[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},733:(e,t,o)=>{o.d(t,{g:()=>n});const n={lastRelease:{releaseName:"v11",releaseDate:"",blockHeight:"",governanceProposalLink:""},currentRelease:{releaseName:"v12",releaseDate:"",blockHeight:"",governanceProposalLink:"",gaidExecutionOutput:"\u276f gaiad version --long\nname: gaia\nserver_name: gaiad\nversion: v12.0.0\ncommit: 6f8067d76ce30996f83645862153ccfaf5f13dd1\nbuild_tags: netgo,ledger\ngo: go version go1.20.4 darwin/arm64\nbuild_deps:\n- cosmossdk.io/api@v0.2.6\n- cosmossdk.io/core@v0.5.1\n- cosmossdk.io/depinject@v1.0.0-alpha.3\n- cosmossdk.io/errors@v1.0.0\n- filippo.io/edwards25519@v1.0.0-rc.1\n- github.com/99designs/go-keychain@v0.0.0-20191008050251-8e49817e8af4\n- github.com/99designs/keyring@v1.2.1 => github.com/cosmos/keyring@v1.2.0\n- github.com/ChainSafe/go-schnorrkel@v1.0.0\n- github.com/Workiva/go-datastructures@v1.0.53\n- github.com/armon/go-metrics@v0.4.1\n- github.com/beorn7/perks@v1.0.1\n- github.com/bgentry/speakeasy@v0.1.1-0.20220910012023-760eaf8b6816\n- github.com/btcsuite/btcd/btcec/v2@v2.3.2\n- github.com/cenkalti/backoff/v4@v4.1.3\n- github.com/cespare/xxhash/v2@v2.1.2\n- github.com/coinbase/rosetta-sdk-go@v0.7.9\n- github.com/cometbft/cometbft-db@v0.7.0\n- github.com/confio/ics23/go@v0.9.0\n- github.com/cosmos/btcutil@v1.0.4\n- github.com/cosmos/cosmos-db@v0.0.0-20221226095112-f3c38ecb5e32\n- github.com/cosmos/cosmos-proto@v1.0.0-beta.1\n- github.com/cosmos/cosmos-sdk@v0.45.16-ics => github.com/cosmos/cosmos-sdk@v0.45.16-ics-lsm\n- github.com/cosmos/go-bip39@v1.0.0\n- github.com/cosmos/iavl@v0.19.5\n- github.com/cosmos/ibc-apps/middleware/packet-forward-middleware/v4@v4.1.0\n- github.com/cosmos/ibc-go/v4@v4.4.2\n- github.com/cosmos/interchain-security/v2@v2.0.0 => github.com/cosmos/interchain-security/v2@v2.0.0-lsm\n- github.com/cosmos/ledger-cosmos-go@v0.12.2\n- github.com/creachadair/taskgroup@v0.3.2\n- github.com/davecgh/go-spew@v1.1.1\n- github.com/decred/dcrd/dcrec/secp256k1/v4@v4.0.1\n- github.com/desertbit/timer@v0.0.0-20180107155436-c41aec40b27f\n- github.com/dvsekhvalnov/jose2go@v1.5.0\n- github.com/felixge/httpsnoop@v1.0.2\n- github.com/fsnotify/fsnotify@v1.6.0\n- github.com/go-kit/kit@v0.12.0\n- github.com/go-kit/log@v0.2.1\n- github.com/go-logfmt/logfmt@v0.5.1\n- github.com/gogo/gateway@v1.1.0\n- github.com/gogo/protobuf@v1.3.3 => github.com/regen-network/protobuf@v1.3.3-alpha.regen.1\n- github.com/golang/protobuf@v1.5.3\n- github.com/golang/snappy@v0.0.4\n- github.com/google/btree@v1.1.2\n- github.com/google/orderedcode@v0.0.1\n- github.com/gorilla/handlers@v1.5.1\n- github.com/gorilla/mux@v1.8.0\n- github.com/gorilla/websocket@v1.5.0\n- github.com/gravity-devs/liquidity@v1.6.0 => github.com/gravity-devs/liquidity@v1.6.0-forced-withdrawal\n- github.com/grpc-ecosystem/go-grpc-middleware@v1.3.0\n- github.com/grpc-ecosystem/grpc-gateway@v1.16.0\n- github.com/grpc-ecosystem/grpc-gateway/v2@v2.10.2\n- github.com/gtank/merlin@v0.1.1\n- github.com/gtank/ristretto255@v0.1.2\n- github.com/hashicorp/go-immutable-radix@v1.3.1\n- github.com/hashicorp/golang-lru@v0.5.5-0.20210104140557-80c98217689d\n- github.com/hashicorp/hcl@v1.0.0\n- github.com/hdevalence/ed25519consensus@v0.0.0-20220222234857-c00d1f31bab3\n- github.com/iancoleman/orderedmap@v0.2.0\n- github.com/improbable-eng/grpc-web@v0.15.0\n- github.com/klauspost/compress@v1.15.11\n- github.com/lib/pq@v1.10.7\n- github.com/libp2p/go-buffer-pool@v0.1.0\n- github.com/magiconair/properties@v1.8.7\n- github.com/mattn/go-colorable@v0.1.13\n- github.com/mattn/go-isatty@v0.0.17\n- github.com/matttproud/golang_protobuf_extensions@v1.0.2-0.20181231171920-c182affec369\n- github.com/mimoo/StrobeGo@v0.0.0-20210601165009-122bf33a46e0\n- github.com/minio/highwayhash@v1.0.2\n- github.com/mitchellh/mapstructure@v1.5.0\n- github.com/mtibben/percent@v0.2.1\n- github.com/pelletier/go-toml/v2@v2.0.8\n- github.com/pkg/errors@v0.9.1\n- github.com/pmezard/go-difflib@v1.0.0\n- github.com/prometheus/client_golang@v1.14.0\n- github.com/prometheus/client_model@v0.3.0\n- github.com/prometheus/common@v0.37.0\n- github.com/prometheus/procfs@v0.8.0\n- github.com/rakyll/statik@v0.1.7\n- github.com/rcrowley/go-metrics@v0.0.0-20201227073835-cf1acfcdf475\n- github.com/regen-network/cosmos-proto@v0.3.1\n- github.com/rs/cors@v1.8.2\n- github.com/rs/zerolog@v1.27.0\n- github.com/spf13/afero@v1.9.5\n- github.com/spf13/cast@v1.5.1\n- github.com/spf13/cobra@v1.7.0\n- github.com/spf13/jwalterweatherman@v1.1.0\n- github.com/spf13/pflag@v1.0.5\n- github.com/spf13/viper@v1.16.0\n- github.com/stretchr/testify@v1.8.4\n- github.com/subosito/gotenv@v1.4.2\n- github.com/syndtr/goleveldb@v1.0.1-0.20210819022825-2ae1ddf74ef7\n- github.com/tendermint/go-amino@v0.16.0\n- github.com/tendermint/tendermint@v0.34.27 => github.com/cometbft/cometbft@v0.34.29\n- github.com/tendermint/tm-db@v0.6.7\n- github.com/tidwall/btree@v1.5.0\n- github.com/zondax/hid@v0.9.1\n- github.com/zondax/ledger-go@v0.14.1\n- golang.org/x/crypto@v0.11.0\n- golang.org/x/exp@v0.0.0-20221205204356-47842c84f3db\n- golang.org/x/net@v0.12.0\n- golang.org/x/sys@v0.10.0\n- golang.org/x/term@v0.10.0\n- golang.org/x/text@v0.11.0\n- google.golang.org/genproto@v0.0.0-20230410155749-daa745c078e1\n- google.golang.org/grpc@v1.56.2 => google.golang.org/grpc@v1.33.2\n- google.golang.org/protobuf@v1.31.0\n- gopkg.in/ini.v1@v1.67.0\n- gopkg.in/yaml.v2@v2.4.0\n- gopkg.in/yaml.v3@v3.0.1\n- nhooyr.io/websocket@v1.8.6\ncosmos_sdk_version: v0.45.16-ics",golangVersion:"1.20.x"},nextRelease:{releaseName:"v12",releaseDate:"",blockHeight:"",governanceProposalLink:""},proposals:{numberOfValidatorsProp:"https://www.mintscan.io/cosmos/proposals/797"},auth:{MaxMemoCharacters:"512",SigVerifyCostED25519:"590",SigVerifyCostSecp256k1:"1000",TxSigLimit:"7",TxSizeCostPerByte:"10"},bank:{DefaultSendEnabled:!0,SendEnabled:[]},baseapp:{BlockParams:{max_bytes:"200000",max_gas:"40000000"},EvidenceParams:{max_age_duration:"172800000000000",max_age_num_blocks:"1000000",max_bytes:"50000"},ValidatorParams:{pub_key_types:["ed25519"]}},crisis:{ConstantFee:{amount:"1333000000",denom:"uatom"}},distribution:{baseproposerreward:"0.010000000000000000",bonusproposerreward:"0.040000000000000000",communitytax:"0.020000000000000000",withdrawaddrenabled:!0},gov:{depositparams:{max_deposit_period:"1209600000000000",min_deposit:[{amount:"250000000",denom:"uatom"}]},tallyparams:{quorum:"0.400000000000000000",threshold:"0.500000000000000000",veto_threshold:"0.334000000000000000"},votingparams:{voting_period:"1209600000000000"}},liquidity:{CircuitBreakerEnabled:!1,InitPoolCoinMintAmount:"1000000",MaxOrderAmountRatio:"0.100000000000000000",MaxReserveCoinAmount:"0",MinInitDepositAmount:"1000000",PoolCreationFee:[{amount:"40000000",denom:"uatom"}],PoolTypes:[{description:"Standard liquidity pool with pool price function X/Y, ESPM constraint, and two kinds of reserve coins",id:1,max_reserve_coin_num:2,min_reserve_coin_num:2,name:"StandardLiquidityPool"}],SwapFeeRate:"0.003000000000000000",UnitBatchHeight:1,WithdrawFeeRate:"0.000000000000000000"},mint:{BlocksPerYear:"4360000",GoalBonded:"0.670000000000000000",InflationMax:"0.200000000000000000",InflationMin:"0.070000000000000000",InflationRateChange:"1.000000000000000000",MintDenom:"uatom"},slashing:{DowntimeJailDuration:"600000000000",MinSignedPerWindow:"0.050000000000000000",SignedBlocksWindow:"10000",SlashFractionDoubleSign:"0.050000000000000000",SlashFractionDowntime:"0.000100000000000000"},staking:{BondDenom:"uatom",HistoricalEntries:1e4,MaxEntries:7,MaxValidators:180,UnbondingTime:"1814400000000000"},transfer:{ReceiveEnabled:!0,SendEnabled:!0}}},7593:(e,t,o)=>{o.d(t,{v:()=>a});var n=o(7294);const a=e=>{let{data:t={},renderKey:o=(e=>n.createElement("a",{href:`#${e.toLowerCase()}`},n.createElement("code",null,e))),renderValue:a=(e=>e),...i}=e;return n.createElement("table",i,n.createElement("tr",{className:"text-left"},n.createElement("th",{className:"px-5.5"},"Key"),n.createElement("th",{className:"px-5.5"},"Value")),Object.entries(t).map((e=>{let[t,i]=e;return n.createElement("tr",{key:`${t}-${i}`},n.createElement("td",null,o(t)),n.createElement("td",null,n.createElement("code",null,JSON.stringify(a(i)))))})))}},1488:(e,t,o)=>{o.d(t,{nd:()=>a});var n=o(7294);const a=e=>{let{children:t}=e;return n.createElement("code",null,JSON.stringify(t))}},9582:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>m,toc:()=>u});var n=o(7462),a=(o(7294),o(3905)),i=o(7593),r=o(1488),s=o(733);const c={title:"crisis subspace"},l=void 0,m={unversionedId:"governance/proposal-types/params-change/Crisis",id:"governance/proposal-types/params-change/Crisis",title:"crisis subspace",description:"The crisis module is responsible for halting the Cosmos Hub if an invariant is broken. The crisis module has the following parameters:",source:"@site/docs/governance/proposal-types/params-change/Crisis.mdx",sourceDirName:"governance/proposal-types/params-change",slug:"/governance/proposal-types/params-change/Crisis",permalink:"/gaia/governance/proposal-types/params-change/Crisis",draft:!1,tags:[],version:"current",frontMatter:{title:"crisis subspace"},sidebar:"tutorialSidebar",previous:{title:"bank subspace",permalink:"/gaia/governance/proposal-types/params-change/Bank"},next:{title:"distribution subspace",permalink:"/gaia/governance/proposal-types/params-change/Distribution"}},g={},u=[{value:"Governance notes on parameters",id:"governance-notes-on-parameters",level:2},{value:"<code>ConstantFee</code>",id:"constantfee",level:3},{value:"Decreasing the value of <code>ConstantFee</code>",id:"decreasing-the-value-of-constantfee",level:4},{value:"Increasing the value of <code>ConstantFee</code>",id:"increasing-the-value-of-constantfee",level:4},{value:"Notes",id:"notes",level:4}],h={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"crisis")," module is responsible for halting the Cosmos Hub if an invariant is broken. The crisis module has the following parameters:"),(0,a.kt)(i.v,{data:s.g.crisis,mdxType:"KeyValueTable"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"crisis")," module is responsible for halting the blockchain under the circumstance that a blockchain invariant is broken. Invariants can be registered with the application during the application initialization process."),(0,a.kt)("h2",{id:"governance-notes-on-parameters"},"Governance notes on parameters"),(0,a.kt)("h3",{id:"constantfee"},(0,a.kt)("inlineCode",{parentName:"h3"},"ConstantFee")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The amount required to send a message to halt the Cosmos Hub chain if an invariant is broken, in micro-ATOM.")),(0,a.kt)("p",null,"A Cosmos account (address) can send a transaction message that will halt the Cosmos Hub chain if an invariant is broken. An example of this would be if all of the account balances in total did not equal the total supply. This kind of transaction could consume excessive amounts of gas to compute, beyond the maximum allowable block gas limit. ",(0,a.kt)("inlineCode",{parentName:"p"},"ConstantFee")," makes it possible to bypass the gas limit in order to process this transaction, while setting a cost to disincentivize using the function to attack the network. The cost of the transaction is ",(0,a.kt)("inlineCode",{parentName:"p"},"1333000000")," ",(0,a.kt)("inlineCode",{parentName:"p"},"uatom")," (1,333 ATOM) and will effectively not be paid if the chain halts due to a broken invariant (which similar to being refunded). If the invariant is not broken, then ",(0,a.kt)("inlineCode",{parentName:"p"},"ConstantFee")," will be paid. All in Bits has published more information about the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/modules/crisis"},"crisis module here"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"on-chain value: ",(0,a.kt)(r.nd,{children:s.g.crisis.ConstantFee,mdxType:"Var"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cosmoshub-4")," default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1333000000")," ",(0,a.kt)("inlineCode",{parentName:"li"},"uatom")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cosmoshub-3")," default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1333000000")," ",(0,a.kt)("inlineCode",{parentName:"li"},"uatom"))),(0,a.kt)("h4",{id:"decreasing-the-value-of-constantfee"},"Decreasing the value of ",(0,a.kt)("inlineCode",{parentName:"h4"},"ConstantFee")),(0,a.kt)("p",null,"Decreasing the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ConstantFee")," parameter will reduce the cost of checking an invariant. This will likely make it easier to halt the chain if an invariant is actually broken, but it will lower the cost for an attacker to use this function to slow block production."),(0,a.kt)("h4",{id:"increasing-the-value-of-constantfee"},"Increasing the value of ",(0,a.kt)("inlineCode",{parentName:"h4"},"ConstantFee")),(0,a.kt)("p",null,"Increasing the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ConstantFee")," parameter will increase the cost of checking an invariant. This will likely make it more difficult to halt the chain if an invariant is actually broken, but it will increase the cost for an attacker to use this function to slow block production."),(0,a.kt)("h4",{id:"notes"},"Notes"),(0,a.kt)("p",null,"Only registered invariants may be checked with this transaction message. Validators are reportedly performant enough to handle large computations like invariant checks, and the likely outcome of multiple invariant checks would be longer block times. In the code, there is a comment that indicates that the designers were targeting $5000 USD as the required amount of ATOMs to run an invariant check."))}d.isMDXComponent=!0}}]);