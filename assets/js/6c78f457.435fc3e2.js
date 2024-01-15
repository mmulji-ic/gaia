"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[9115],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>g});var o=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,o,t=function(e,a){if(null==e)return{};var n,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=o.createContext({}),c=function(e){var a=o.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=c(e.components);return o.createElement(l.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},m=o.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=t,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?o.createElement(g,i(i({ref:a},d),{},{components:n})):o.createElement(g,i({ref:a},d))}));function g(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[p]="string"==typeof e?e:t,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9629:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),t=(n(7294),n(3905));const r={title:"Instrucciones de actualizaci\xf3n del Cosmos Hub 3",order:2},i=void 0,s={unversionedId:"migration/cosmoshub-3/cosmoshub-3[ES_es]",id:"migration/cosmoshub-3/cosmoshub-3[ES_es]",title:"Instrucciones de actualizaci\xf3n del Cosmos Hub 3",description:"El siguiente documento describe los pasos necesarios que deben seguir los operadores de un full node para actualizar de cosmoshub-3 a cosmoshub-4. El equipo de Tendermint publicar\xe1 un archivo g\xe9nesis oficial actualizado, pero se recomienda que los validadores ejecuten las siguientes instrucciones para verificar el archivo g\xe9nesis resultante.",source:"@site/docs/migration/cosmoshub-3/cosmoshub-3[ES_es].md",sourceDirName:"migration/cosmoshub-3",slug:"/migration/cosmoshub-3/cosmoshub-3[ES_es]",permalink:"/gaia/migration/cosmoshub-3/cosmoshub-3[ES_es]",draft:!1,tags:[],version:"current",frontMatter:{title:"Instrucciones de actualizaci\xf3n del Cosmos Hub 3",order:2},sidebar:"tutorialSidebar",previous:{title:"Cosmos Hub 3 Upgrade",permalink:"/gaia/migration/cosmoshub-3/"},next:{title:"\ucf54\uc2a4\ubaa8\uc2a4 \ud5c8\ube0c 3 \uc5c5\uadf8\ub808\uc774\ub4dc \ub9e4\ub274\uc5bc",permalink:"/gaia/migration/cosmoshub-3/cosmoshub-3[KR_kr]"}},l={},c=[{value:"Preliminares",id:"preliminares",level:2},{value:"Principales actualizaciones",id:"principales-actualizaciones",level:2},{value:"Riesgos",id:"riesgos",level:2},{value:"Recuperaci\xf3n",id:"recuperaci\xf3n",level:2},{value:"Procedimiento de actualizaci\xf3n",id:"procedimiento-de-actualizaci\xf3n",level:2},{value:"Notas para los proveedores de servicios",id:"notas-para-los-proveedores-de-servicios",level:2}],d={toc:c},p="wrapper";function u(e){let{components:a,...n}=e;return(0,t.kt)(p,(0,o.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"El siguiente documento describe los pasos necesarios que deben seguir los operadores de un full node para actualizar de ",(0,t.kt)("inlineCode",{parentName:"p"},"cosmoshub-3")," a ",(0,t.kt)("inlineCode",{parentName:"p"},"cosmoshub-4"),". El equipo de Tendermint publicar\xe1 un archivo g\xe9nesis oficial actualizado, pero se recomienda que los validadores ejecuten las siguientes instrucciones para verificar el archivo g\xe9nesis resultante."),(0,t.kt)("p",null,"Existe un amplio consenso social en torno a la ",(0,t.kt)("inlineCode",{parentName:"p"},"propuesta de actualizaci\xf3n del Cosmos Hub 4")," sobre el ",(0,t.kt)("inlineCode",{parentName:"p"},"cosmoshub-3"),". Siguiendo las propuestas #",(0,t.kt)("a",{parentName:"p",href:"https://www.mintscan.io/cosmos/proposals/27"},"27"),", #",(0,t.kt)("a",{parentName:"p",href:"https://www.mintscan.io/cosmos/proposals/35"},"35")," y #",(0,t.kt)("a",{parentName:"p",href:"https://www.mintscan.io/cosmos/proposals/36"},"36"),". Se indica que el procedimiento de actualizaci\xf3n debe realizarse el ",(0,t.kt)("inlineCode",{parentName:"p"},"18 de febrero de 2021 a las 06:00 UTC"),"."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#migraciones"},"Migraciones")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#preliminares"},"Preliminares")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#principales-actualizaciones"},"Principales actualizaciones")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#riesgos"},"Riesgos")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#recuperaci%C3%B3n"},"Recuperaci\xf3n")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#procedimiento-de-actualizaci%C3%B3n"},"Procedimiento de actualizaci\xf3n")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#notas-para-los-proveedores-de-servicios"},"Notas para los proveedores de servicios"))),(0,t.kt)("h1",{id:"migraciones"},"Migraciones"),(0,t.kt)("p",null,"Estos cap\xedtulos contienen todas las gu\xedas de migraci\xf3n para actualizar tu aplicaci\xf3n y m\xf3dulos a Cosmos v0.40 Stargate."),(0,t.kt)("p",null,"Si tienes un explorador de bloques, un monedero, un exchange, un validador o cualquier otro servicio (por ejemplo, un proveedor de custodia) que dependa del Cosmos Hub o del ecosistema Cosmos, deber\xe1s prestar atenci\xf3n, porque esta actualizaci\xf3n implicar\xe1 cambios sustanciales."),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/migrations/app_and_modules.md"},"Migraci\xf3n de aplicaciones y m\xf3dulos")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/migrations/chain-upgrade-guide-040.md"},"Gu\xeda de actualizaci\xf3n de la cadena a v0.41")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/migrations/rest.md"},"Migraci\xf3n de endpoints REST")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("a",{parentName:"li",href:"https://github.com/cosmos/gaia/blob/main/docs/migration/breaking_changes.md"},"Recopilaci\xf3n de modificaciones de ruptura de los registros de cambios")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("a",{parentName:"li",href:"https://figment.io/resources/cosmos-stargate-upgrade-overview/#ibc"},"Comunicaci\xf3n entre cadenas de bloques (IBC) - transacciones entre cadenas")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("a",{parentName:"li",href:"https://figment.io/resources/cosmos-stargate-upgrade-overview/#proto"},"Migraci\xf3n de Protobuf - rendimiento de la cadena de bloques y aceleraci\xf3n del desarrollo")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("a",{parentName:"li",href:"https://figment.io/resources/cosmos-stargate-upgrade-overview/#sync"},"Sincronizaci\xf3n de estados - minutos para sincronizar nuevos nodos")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("a",{parentName:"li",href:"https://figment.io/resources/cosmos-stargate-upgrade-overview/#light"},"Clientes ligeros con todas las funciones")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("a",{parentName:"li",href:"https://figment.io/resources/cosmos-stargate-upgrade-overview/#upgrade"},"M\xf3dulo de actualizaci\xf3n de la cadena - automatizaci\xf3n de la actualizaci\xf3n"))),(0,t.kt)("p",null,"Si quieres probar el procedimiento antes de que se produzca la actualizaci\xf3n el 18 de febrero, consulta este ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/cosmos/gaia/issues/569#issuecomment-767910963"},"post")," en relaci\xf3n a ello."),(0,t.kt)("h2",{id:"preliminares"},"Preliminares"),(0,t.kt)("p",null,"Se han producido muchos cambios en el SDK de Cosmos y en la aplicaci\xf3n Gaia desde la \xfaltima gran actualizaci\xf3n (",(0,t.kt)("inlineCode",{parentName:"p"},"cosmoshub-3"),"). Estos cambios consisten principalmente en muchas nuevas caracter\xedsticas, cambios de protocolo y cambios estructurales de la aplicaci\xf3n que favorecen la ergonom\xeda del desarrollador y el desarrollo de la aplicaci\xf3n."),(0,t.kt)("p",null,"En primer lugar, se habilitar\xe1 ",(0,t.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/ibc/overview.html"},"IBC")," siguiendo los ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ics#ibc-quick-references"},"est\xe1ndares de Interchain"),". Esta actualizaci\xf3n viene con varias mejoras en la eficiencia, la sincronizaci\xf3n de nodos y las siguientes actualizaciones de la cadena de bloques. M\xe1s detalles en el ",(0,t.kt)("a",{parentName:"p",href:"https://stargate.cosmos.network/"},"sitio web de Stargate"),"."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"La aplicaci\xf3n ",(0,t.kt)("a",{parentName:"strong",href:"https://github.com/cosmos/gaia"},"Gaia")," v4.0.0 es lo que los operadores de nodos actualizar\xe1n y ejecutar\xe1n en esta pr\xf3xima gran actualizaci\xf3n"),". Tras la versi\xf3n v0.41.0 del SDK de Cosmos y la v0.34.3 de Tendermint."),(0,t.kt)("h2",{id:"principales-actualizaciones"},"Principales actualizaciones"),(0,t.kt)("p",null,"Hay muchas caracter\xedsticas y cambios notables en la pr\xf3xima versi\xf3n del SDK. Muchos de ellos se discuten a de forma general ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/cosmos/stargate"},"aqu\xed"),"."),(0,t.kt)("p",null,"Algunos de los principales cambios que hay que tener en cuenta a la hora de actualizar como desarrollador o cliente son los siguientes:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Protocol Buffers"),": Inicialmente el SDK de Cosmos utilizaba ",(0,t.kt)("em",{parentName:"li"},"codecs")," de Amino para casi toda la codificaci\xf3n y decodificaci\xf3n. En esta versi\xf3n se ha integrado una importante actualizaci\xf3n de los Protocol Buffers. Se espera que con los Protocol Buffers las aplicaciones ganen en velocidad, legibilidad, conveniencia e interoperabilidad con muchos lenguajes de programaci\xf3n. Para m\xe1s informaci\xf3n consulta ",(0,t.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/migrations/app_and_modules.md#protocol-buffers"},"aqu\xed"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"CLI"),": El CLI y el commando de full node para la cadena de bloques estaban separados en las versiones anteriores del SDK de Cosmos. Esto dio lugar a dos binarios, ",(0,t.kt)("inlineCode",{parentName:"li"},"gaiad")," y ",(0,t.kt)("inlineCode",{parentName:"li"},"gaiacli"),", que estaban separados y pod\xedan utilizarse para diferentes interacciones con la cadena de bloques. Ambos se han fusionado en un solo comando ",(0,t.kt)("inlineCode",{parentName:"li"},"gaiad")," que ahora soporta los comandos que antes soportaba el ",(0,t.kt)("inlineCode",{parentName:"li"},"gaiacli"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Configuraci\xf3n del nodo"),": Anteriormente los datos de la cadena de bloques y la configuraci\xf3n de los nodos se almacenaban en ",(0,t.kt)("inlineCode",{parentName:"li"},"~/.gaia/"),", ahora residir\xe1n en ",(0,t.kt)("inlineCode",{parentName:"li"},"~/.gaia/"),", si utilizas scripts que hacen uso de la configuraci\xf3n o de los datos de la cadena de bloques, aseg\xfarate de actualizar la ruta.")),(0,t.kt)("h2",{id:"riesgos"},"Riesgos"),(0,t.kt)("p",null,"Como validador, realizar el procedimiento de actualizaci\xf3n en sus nodos de consenso conlleva un mayor riesgo de de doble firma y de ser penalizado. La parte m\xe1s importante de este procedimiento es verificar su versi\xf3n del software y el hash del archivo g\xe9nesis antes de iniciar el validador y firmar."),(0,t.kt)("p",null,"Lo m\xe1s arriesgado que puede hacer un validador es descubrir que ha cometido un error y volver a repetir el procedimiento de actualizaci\xf3n durante el arranque de la red. Si descubre un error en el proceso, lo mejor es esperar a que la red se inicie antes de corregirlo. Si la red se detiene y ha comenzado con un archivo de g\xe9nesis diferente al esperado, busque el asesoramiento de un desarrollador de Tendermint antes de reiniciar su validador."),(0,t.kt)("h2",{id:"recuperaci\xf3n"},"Recuperaci\xf3n"),(0,t.kt)("p",null,"Antes de exportar el estado de ",(0,t.kt)("inlineCode",{parentName:"p"},"cosmoshub-3"),", se recomienda a los validadores que tomen una instant\xe1nea completa de los datos a la altura de la exportaci\xf3n antes de proceder. La toma de snapshots depende en gran medida de la infraestructura, pero en general se puede hacer una copia de seguridad del directorio ",(0,t.kt)("inlineCode",{parentName:"p"},".gaia"),"."),(0,t.kt)("p",null,"Es muy importante hacer una copia de seguridad del archivo ",(0,t.kt)("inlineCode",{parentName:"p"},".gaia/data/priv_validator_state.json")," despu\xe9s de detener el proceso de gaiad. Este archivo se actualiza en cada bloque cuando tu validador participa en las rondas de consenso. Es un archivo cr\xedtico necesario para evitar la doble firma, en caso de que la actualizaci\xf3n falle y sea necesario reiniciar la cadena anterior."),(0,t.kt)("p",null,"En el caso de que la actualizaci\xf3n no tenga \xe9xito, los validadores y operadores deben volver a actualizar a\ngaia v2.0.15 con v0.37.15 del ",(0,t.kt)("em",{parentName:"p"},"Cosmos SDK")," y restaurar a su \xfaltimo snapshot antes de reiniciar sus nodos."),(0,t.kt)("h2",{id:"procedimiento-de-actualizaci\xf3n"},"Procedimiento de actualizaci\xf3n"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Nota"),": Se asume que actualmente est\xe1 operando un nodo completo ejecutando gaia v2.0.15 con v0.37.15 del ",(0,t.kt)("em",{parentName:"p"},"Cosmos SDK"),"."),(0,t.kt)("p",null,"El hash de la versi\xf3n/commit de Gaia v2.0.15: ",(0,t.kt)("inlineCode",{parentName:"p"},"89cf7e6fc166eaabf47ad2755c443d455feda02e")),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Compruebe que est\xe1 ejecutando la versi\xf3n correcta (v2.0.15) de ",(0,t.kt)("em",{parentName:"p"},"gaiad"),":"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"$ gaiad version --long\nname: gaia\nserver_name: gaiad\nclient_name: gaiacli\nversion: 2.0.15\ncommit: 89cf7e6fc166eaabf47ad2755c443d455feda02e\nbuild_tags: netgo,ledger\ngo: go version go1.15 darwin/amd64\n"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Aseg\xfarese de que su cadena se detiene en la fecha y hora correctas:\n18 de febrero de 2021 a las 06:00 UTC es en segundos UNIX: ",(0,t.kt)("inlineCode",{parentName:"p"},"1613628000")),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"perl -i -pe 's/^halt-time =.*/halt-time = 1613628000/' ~/.gaia/config/app.toml\n"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Despu\xe9s de que la cadena se haya detenido, haz una copia de seguridad de tu directorio ",(0,t.kt)("inlineCode",{parentName:"p"},".gaia"),"."),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"mv ~/.gaia ./gaiad_backup\n")),(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"NOTA"),": Se recomienda a los validadores y operadores que tomen una instant\xe1nea completa de los datos a la altura de la exportaci\xf3n antes de proceder en caso de que la actualizaci\xf3n no vaya seg\xfan lo previsto o si no se pone en l\xednea suficiente poder de voto en un tiempo determinado y acordado. En tal caso, la cadena volver\xe1 a funcionar con ",(0,t.kt)("inlineCode",{parentName:"p"},"cosmoshub-3"),". Consulte ",(0,t.kt)("a",{parentName:"p",href:"#recuperaci%C3%B3n"},"Recuperaci\xf3n")," para saber c\xf3mo proceder.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Exportar el estado existente de ",(0,t.kt)("inlineCode",{parentName:"p"},"cosmoshub-3"),":"),(0,t.kt)("p",{parentName:"li"}," Antes de exportar el estado a trav\xe9s del siguiente comando, el binario ",(0,t.kt)("inlineCode",{parentName:"p"},"gaiad")," debe estar detenido. Como validador, puedes ver la \xfaltima altura del bloque creado en el ",(0,t.kt)("inlineCode",{parentName:"p"},"~/.gaia/config/data/priv_validator_state.json")," -o que ahora reside en ",(0,t.kt)("inlineCode",{parentName:"p"},"gaiad_backup")," cuando hiciste una copia de seguridad como en el \xfaltimo paso- y obtenerla con"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"cat ~/.gaia/config/data/priv_validator_state.json | jq '.height'\n")),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"gaiad export --for-zero-height --height=<height> > cosmoshub_3_genesis_export.json\n")),(0,t.kt)("p",{parentName:"li"},(0,t.kt)("em",{parentName:"p"},"esto puede llevar un tiempo, puede esperar una hora para este paso"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Verifique el SHA256 del archivo g\xe9nesis exportado (ordenado):"),(0,t.kt)("p",{parentName:"li"}," Compara este valor con otros validadores / operadores de nodos completos de la red.\nEn el futuro ser\xe1 importante que todas las partes puedan crear la misma exportaci\xf3n de archivos g\xe9nesis."),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"$ jq -S -c -M '' cosmoshub_3_genesis_export.json | shasum -a 256\n[SHA256_VALUE]  cosmoshub_3_genesis_export.json\n"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"En este punto, ya tiene un estado de g\xe9nesis exportado v\xe1lido. Todos los pasos posteriores requieren ahora v4.0.0 de ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/cosmos/gaia"},"Gaia"),".\nCompruebe el hash de su g\xe9nesis con otros compa\xf1eros (otros validadores) en las salas de chat."),(0,t.kt)("p",{parentName:"li"},"   ",(0,t.kt)("strong",{parentName:"p"},"NOTA"),": Go ",(0,t.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"1.15+")," es necesario!"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/cosmos/gaia.git && cd gaia && git checkout v4.0.0; make install\n"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Verifique que est\xe1 ejecutando la versi\xf3n correcta (v4.0.0) de ",(0,t.kt)("em",{parentName:"p"},"Gaia"),":"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"$ gaiad version --long\nname: gaia\nserver_name: gaiad\nversion: 4.0.0\ncommit: 2bb04266266586468271c4ab322367acbf41188f\nbuild_tags: netgo,ledger\ngo: go version go1.15 darwin/amd64\nbuild_deps:\n...\n")),(0,t.kt)("p",{parentName:"li"},"El hash y versi\xf3n/commit de Gaia v4.0.0: ",(0,t.kt)("inlineCode",{parentName:"p"},"2bb04266266586468271c4ab322367acbf41188f"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Migrar el estado exportado de la versi\xf3n actual v2.0.15 a la nueva versi\xf3n v4.0.0:"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"gaiad migrate cosmoshub_3_genesis_export.json --chain-id=cosmoshub-4 --initial-height [last_cosmoshub-3_block+1] > genesis.json\n")),(0,t.kt)("p",{parentName:"li"},"Esto migrar\xe1 nuestro estado exportado del archivo ",(0,t.kt)("inlineCode",{parentName:"p"},"genesis.json")," requerido para iniciar el cosmoshub-4.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Verifique el SHA256 del JSON final del g\xe9nesis:"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"$ jq -S -c -M '' genesis.json | shasum -a 256\n[SHA256_VALUE]  genesis.json\n")),(0,t.kt)("p",{parentName:"li"},"Compare este valor con otros validadores / operadores de nodos de la red.\nEs importante que cada parte pueda reproducir el mismo archivo genesis.json de los pasos correspondientes.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Reinicio del estado:"),(0,t.kt)("p",{parentName:"li"}," ",(0,t.kt)("strong",{parentName:"p"},"NOTA"),": Aseg\xfarese de tener una copia de seguridad completa de su nodo antes de proceder con este paso.\nConsulte ",(0,t.kt)("a",{parentName:"p",href:"#recuperaci%C3%B3n"},"Recuperaci\xf3n")," para obtener detalles sobre c\xf3mo proceder."),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"gaiad unsafe-reset-all\n"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Mueve el nuevo ",(0,t.kt)("inlineCode",{parentName:"p"},"genesis.json")," a tu directorio ",(0,t.kt)("inlineCode",{parentName:"p"},".gaia/config/"),"."),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"cp genesis.json ~/.gaia/config/\n"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Inicie su blockchain"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"gaiad start\n")),(0,t.kt)("p",{parentName:"li"},"Las auditor\xedas automatizadas del estado de g\xe9nesis pueden durar entre 30 y 120 minutos utilizando el m\xf3dulo de crisis. Esto se puede desactivar mediante\n",(0,t.kt)("inlineCode",{parentName:"p"},"gaiad start --x-crisis-skip-assert-invariants"),"."))),(0,t.kt)("h2",{id:"notas-para-los-proveedores-de-servicios"},"Notas para los proveedores de servicios"),(0,t.kt)("h1",{id:"servidor-rest"},"Servidor REST"),(0,t.kt)("p",null,"En caso de que hayas estado ejecutando el servidor REST con el comando ",(0,t.kt)("inlineCode",{parentName:"p"},"gaiacli rest-server")," previamente, ejecutar este comando ya no ser\xe1 necesario. El servidor API est\xe1 ahora en proceso con el demonio y puede ser activado/desactivado por la configuraci\xf3n de la API en su ",(0,t.kt)("inlineCode",{parentName:"p"},".gaia/config/app.toml"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"[api]\n# Enable define si la API del servidor debe estar habilitada.\nenable = false\n# Swagger define si la documentaci\xf3n swagger debe registrarse autom\xe1ticamente.\nswagger = false\n")),(0,t.kt)("p",null,"El ajuste ",(0,t.kt)("inlineCode",{parentName:"p"},"swagger")," se refiere a la activaci\xf3n/desactivaci\xf3n de la API de documentos swagger, es decir, el punto final de la API /swagger/."),(0,t.kt)("h1",{id:"configuraci\xf3n-grpc"},"Configuraci\xf3n gRPC"),(0,t.kt)("p",null,"Configuraci\xf3n gRPC en tu ",(0,t.kt)("inlineCode",{parentName:"p"},".gaia/config/app.toml")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},'[grpc]\n# Enable define si el servidor gRPC debe estar habilitado.\nenable = true\n# Address define la direcci\xf3n del servidor gRPC a la que se vincula.\naddress = "0.0.0.0:9090"\n')),(0,t.kt)("h1",{id:"state-sync"},"State Sync"),(0,t.kt)("p",null,"Configuraci\xf3n de State Sync en tu ",(0,t.kt)("inlineCode",{parentName:"p"},".gaia/config/app.toml")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"# State sync o las instant\xe1neas de sincronizaci\xf3n de estado permiten que otros nodos \n# se unan r\xe1pidamente a la red sin reproducir los bloques hist\xf3ricos, descargando y \n# aplicando en su lugar una instant\xe1nea del estado de la aplicaci\xf3n a una altura determinada.\n[state-sync]\n# snapshot-interval especifica el intervalo de bloques en el que se toman instant\xe1neas \n# de sincronizaci\xf3n de estado local (0 para deshabilitar). Debe ser un m\xfaltiplo de \n# pruning-keep-every.\nsnapshot-interval = 0\n# snapshot-keep-recent especifica el n\xfamero de instant\xe1neas recientes a conservar y servir \n# (0 para conservar todas).\nsnapshot-keep-recent = 2\n")))}u.isMDXComponent=!0}}]);