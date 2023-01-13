import{_ as t,r as s,o as i,c,a as e,b as n,w as l,F as d,d as a,e as u}from"./app.1656ed2a.js";const p={},m=e("h1",{id:"transacciones",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#transacciones","aria-hidden":"true"},"#"),a(" Transacciones")],-1),h=a("Los clientes pueden invocar "),_=a("programas"),f=a(" enviando una transacci\xF3n a un cluster. Una transacci\xF3n puede incluir m\xFAltiples instrucciones, cada una de ellas apuntando a un programa diferente. Cuando una transacci\xF3n es enviada, el "),g={href:"https://docs.solana.com/developing/programming-model/runtime",target:"_blank",rel:"noopener noreferrer"},b=a("Runtime"),v=a(" de Solana procesar\xE1 sus instrucciones en orden y de forma at\xF3mica. Si una parte de la transacci\xF3n falla, toda la transacci\xF3n fallar\xE1."),q=u('<h2 id="hechos" tabindex="-1"><a class="header-anchor" href="#hechos" aria-hidden="true">#</a> Hechos</h2><div class="custom-container tip"><p class="custom-container-title">Hoja de hechos</p><ul><li>Las instrucciones son la unidad de operaci\xF3n m\xE1s b\xE1sica en Solana</li><li>Cada instrucci\xF3n contiene: <ul><li>El <code>program_id</code> (id del programa) del programa al que apunta</li><li>Un arreglo de todas <code>accounts</code> (cuentas) donde va a leer o escribir</li><li>Un <code>instruction_data</code> (datos de la instrucci\xF3n) que es un byte array para el programa espec\xEDfico</li></ul></li><li>Varias instrucciones pueden estar contenidas en una Transacci\xF3n</li><li>Cada transacci\xF3n consiste de: <ul><li>Un arreglo de todas <code>accounts</code> (cuentas) donde va a leer o escribir</li><li>Una o m\xE1s <code>instructions</code> (instrucciones)</li><li>Un <code>blockhash</code> (hash de bloque) reciente</li><li>Una o m\xE1s <code>signatures</code> (firmas)</li></ul></li><li>Las instrucciones son procesadas en orden y de forma at\xF3mica</li><li>Si una parte de la transacci\xF3n falla, toda la transacci\xF3n fallar\xE1</li><li>Las transacciones est\xE1n limitadas a un m\xE1ximo de 1232 bytes</li></ul></div><h2 id="un-vistazo-mas-profundo" tabindex="-1"><a class="header-anchor" href="#un-vistazo-mas-profundo" aria-hidden="true">#</a> Un vistazo m\xE1s profundo</h2><p>El Runtime de Solana requiere tanto de instrucciones como de transacciones para especificar una lista de todas las cuentas de las que va a leer o escribir. Al requerir estas cuentas por adelantado, el Runtime de Solana es capaz de paralelizar la ejecuci\xF3n en todas las transacciones.</p><p>Cuando se env\xEDa una transacci\xF3n a un cl\xFAster, el Runtime de Solana procesar\xE1 sus instrucciones en orden y de forma at\xF3mica. Para cada instrucci\xF3n, el programa al que se invoca interpretar\xE1 el arreglo de datos y operar\xE1 en las cuentas especificadas. El programa retornar\xE1 con \xE9xito o un c\xF3digo de error. Si se devuelve un error, toda la transacci\xF3n fallar\xE1 inmediatamente.</p><p>Toda transacci\xF3n que debite de una cuenta o modique sus datos requiere la firma del titular de la cuenta. Cualquier cuenta que se modificar\xE1 ser\xE1 marcada como <code>writable</code>. Una cuenta puede recibir fondos sin el permiso del titular siempre que el pagador del cargo (fee) cubra la renta y las tarifas de transacci\xF3n.</p>',6),k=a("Antes de enviar una transacci\xF3n se debe enviar un "),x={href:"https://docs.solana.com/developing/programming-model/transactions#recent-blockhash",target:"_blank",rel:"noopener noreferrer"},S=a("hash de bloque reciente"),y=a(". El hash de bloque reciente es usado para prevenir duplicados y eliminar transacciones obsoletas. El tiempo m\xE1ximo del hash de bloque reciente de una transacci\xF3n es de 150 bloques, o aproximadamente ~1 minuto 19 segundos al momento de escribir este art\xEDculo."),E=e("h3",{id:"cargos-fees",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cargos-fees","aria-hidden":"true"},"#"),a(" Cargos (fees)")],-1),C=e("p",null,"La red de Solana colecta 2 tipos de cargos:",-1),L={href:"https://docs.solana.com/transaction_fees",target:"_blank",rel:"noopener noreferrer"},U=a("Cargo por transacci\xF3n"),z=a(" para propagar las transacciones (aka \u201Cgas fees\u201D)"),R={href:"https://docs.solana.com/developing/programming-model/accounts#rent",target:"_blank",rel:"noopener noreferrer"},T=a("Cargo por renta"),w=a(" por almacenar datos en la blockchain"),A=e("p",null,[a("En Solana, los cargos son deterministas: no existe el concepto de un mercado de cargos en el que los usuarios puedan pagar tarifas m\xE1s altas para aumentar sus posibilidades de ser incluidos en el siguiente bloque. Al momento de redactar este documento, las tarifas de transacci\xF3n est\xE1n determinadas \xFAnicamente por la cantidad de firmas requeridas (es decir, "),e("code",null,"lamports_per_signature"),a("), no por la cantidad de recursos utilizados. Esto se debe a que actualmente existe un l\xEDmite m\xE1ximo de 1232 bytes en todas las transacciones.")],-1),V=e("p",null,[a("Todas las transacciones requieren al menos una cuenta sea "),e("code",null,"writable"),a(" (escribible) para firmar la transacci\xF3n. Una vez enviada, la cuenta del firmante que se serializa primero ser\xE1 el pagador del cargo (fee). Esta cuenta pagar\xE1 el costo de la transacci\xF3n sin importar si la transacci\xF3n tiene \xE9xito o falla. Si el pagador del cargo no tiene saldo suficiente para pagar la tarifa de transacci\xF3n, la transacci\xF3n se cancelar\xE1.")],-1),j=e("p",null,"Al momento de escribir este art\xEDculo, el validador que produce el bloque cobra el 50% de todas las tarifas de transacci\xF3n, mientras que el 50% restante se quema. Esta estructura funciona para incentivar a los validadores a procesar tantas transacciones como sea posible durante sus espacios en el programa l\xEDder.",-1),N=e("h2",{id:"other-resources",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#other-resources","aria-hidden":"true"},"#"),a(" Other Resources")],-1),B={href:"https://docs.solana.com/developing/programming-model/transactions",target:"_blank",rel:"noopener noreferrer"},F=a("Documentaci\xF3n oficial"),H={href:"https://solana.wiki/docs/solidity-guide/transactions/#solana-transaction-structure",target:"_blank",rel:"noopener noreferrer"},I=a("Estructura de una transacci\xF3n"),J={href:"https://jstarry.notion.site/Transaction-Fees-f09387e6a8d84287aa16a34ecb58e239",target:"_blank",rel:"noopener noreferrer"},P=a("Cargos de una transacci\xF3n por Justin Starry"),D={href:"https://2501babe.github.io/posts/solana101.html",target:"_blank",rel:"noopener noreferrer"},M=a("Introducci\xF3n a Solana por Hana"),O={href:"https://jito-labs.medium.com/solana-validator-101-transaction-processing-90bcdc271143",target:"_blank",rel:"noopener noreferrer"},G=a("Procesamiento de una transacci\xF3n por Jito Labs"),K={href:"https://medium.com/@asmiller1989/solana-transactions-in-depth-1f7f7fe06ac2",target:"_blank",rel:"noopener noreferrer"},Q=a("Transacci\xF3n en Solana en detalle por Alex Miller");function W(X,Y){const r=s("RouterLink"),o=s("ExternalLinkIcon");return i(),c(d,null,[m,e("p",null,[h,n(r,{to:"/es/core-concepts/programs.html"},{default:l(()=>[_]),_:1}),f,e("a",g,[b,n(o)]),v]),q,e("p",null,[k,e("a",x,[S,n(o)]),y]),E,C,e("ul",null,[e("li",null,[e("a",L,[U,n(o)]),z]),e("li",null,[e("a",R,[T,n(o)]),w])]),A,V,j,N,e("ul",null,[e("li",null,[e("a",B,[F,n(o)])]),e("li",null,[e("a",H,[I,n(o)])]),e("li",null,[e("a",J,[P,n(o)])]),e("li",null,[e("a",D,[M,n(o)])]),e("li",null,[e("a",O,[G,n(o)])]),e("li",null,[e("a",K,[Q,n(o)])])])],64)}var $=t(p,[["render",W]]);export{$ as default};