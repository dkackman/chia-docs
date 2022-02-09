"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[1550],{3905:function(e,t,o){o.d(t,{Zo:function(){return h},kt:function(){return f}});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},h=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(o),f=a,d=u["".concat(l,".").concat(f)]||u[f]||p[f]||n;return o?r.createElement(d,i(i({ref:t},h),{},{components:o})):r.createElement(d,i({ref:t},h))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7906:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return u}});var r=o(7462),a=o(3366),n=(o(7294),o(3905)),i=["components"],s={sidebar_position:2},l="3.2 Proof of Space",c={unversionedId:"03consensus/proof-of-space",id:"03consensus/proof-of-space",isDocsHomePage:!1,title:"3.2 Proof of Space",description:"A Proof of Space protocol is one in which:",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/03consensus/proof-of-space.md",sourceDirName:"03consensus",slug:"/03consensus/proof-of-space",permalink:"/zh/docs/03consensus/proof-of-space",editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/03consensus/proof-of-space.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"3.1 Chia Consensus Introduction",permalink:"/zh/docs/03consensus/consensus_intro"},next:{title:"3.3 VDFs",permalink:"/zh/docs/03consensus/vdfs"}},h=[{value:"Plotting",id:"plotting",children:[]},{value:"Farming",id:"farming",children:[]},{value:"Verifying",id:"verifying",children:[]}],p={toc:h};function u(e){var t=e.components,s=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"32-proof-of-space"},"3.2 Proof of Space"),(0,n.kt)("p",null,"A Proof of Space protocol is one in which:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A Verifier can send a challenge to a Prover."),(0,n.kt)("li",{parentName:"ul"},"The Prover can demonstrate to the Verifier that the Prover is reserving a specific amount of storage space at that precise time.")),(0,n.kt)("p",null,"The Proof of Space protocol has three components: plotting, proving/farming, and verifying. The Proof of Space protocol has three components: plotting, proving/farming, and verifying. For more info, see our ",(0,n.kt)("a",{parentName:"p",href:"https://www.chia.net/assets/Chia_Proof_of_Space_Construction_v1.1.pdf"},"Details of the chiapos specification"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chiapos"},"reference implementation"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"chia-architecture",src:o(4246).Z})),(0,n.kt)("h2",{id:"plotting"},"Plotting"),(0,n.kt)("p",null,"Plotting is the process by which a Prover, who we refer to as a ",(0,n.kt)("em",{parentName:"p"},"farmer"),", initializes a certain amount of space. Plotting is the process by which a Prover, who we refer to as a ",(0,n.kt)("em",{parentName:"p"},"farmer"),", initializes a certain amount of space. To become a farmer, one must have at least 101.4 GiB available to reserve on their computer (the minimum spec is a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/wiki/Raspberry-Pi",title:"Running Chia on a Raspberry Pi 4"},"Raspberry Pi 4"),"). There is no upper limit to the size of a Chia farm. Several farmers have multi-PiB farms. There is no upper limit to the size of a Chia farm. Several farmers have multi-PiB farms."),(0,n.kt)("p",null,"As of Chia 1.2.7, a k32 plot can be created in around five minutes with a high-end machine with 400 GiB of RAM, or six hours with a normal commodity machine, or 12 hours with a slow machine using one CPU core and a few GB of RAM. Opportunities still remain for huge speedups. Furthermore, each plot only needs to be created once; a farmer can farm with the same plots for many years. Opportunities still remain for huge speedups. Furthermore, each plot only needs to be created once; a farmer can farm with the same plots for many years."),(0,n.kt)("p",null,"Plot sizes are determined by a k parameter, where ",(0,n.kt)("inlineCode",{parentName:"p"},"space = 780 * k * pow(2, k - 10)"),", with a minimum k of 32 (101.4 GiB). The Proof of Space construction is based on ",(0,n.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2017/893.pdf",title:"Beyond Hellman's Time-Memory Trade Offs with Applications to Proofs of Space"},"Beyond Hellman"),", but it is nested six times (thereby creating seven tables), and it contains other heuristics to make it practical."),(0,n.kt)("p",null,"Each of the seven tables in a plot is filled with random-looking data that cannot be compressed. Each table has 2^k entries. Each entry in table i contains two pointers to table i-1 (the previous table). Finally, each table-1 entry contains a pair of integers between 0 and 2^k, called \u201cx-values.\u201d A proof of space is a collection of 64 x-values that have a certain mathematical relationship. The actual on-disk structure and the algorithm required to generate it are quite ",(0,n.kt)("a",{parentName:"p",href:"https://www.chia.net/assets/Chia_Proof_of_Space_Construction_v1.1.pdf"},"complicated"),", but this is the general idea."),(0,n.kt)("figure",null,(0,n.kt)("img",{src:"/img/plot.png",alt:"drawing"}),(0,n.kt)("figcaption",null,"Figure 2: Structure of a plot file.",(0,n.kt)("figcaption",null,"Figure 2: Structure of a plot file. The 64 red x-values represent the proof, the 2 green x-values represent the quality."))),(0,n.kt)("p",null,"Once the Prover has initialized 101.4 GiB, they are ready to receive a challenge and create a proof. One attractive property of this scheme is that it is non-interactive unless the farmer chooses ",(0,n.kt)("a",{parentName:"p",href:"/docs/02architecture/p2p-system#pools"},"plot NFT style pooling"),": no registration or online connection is required to create a plot using the original plot format. Nothing hits the blockchain until a reward is won, similar to PoW. For pool portable plots, a farmer only needs a few mojos to create a plot NFT before plotting and then everything has the same characteristics from there."),(0,n.kt)("p",null,"See our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/wiki/FAQ#plotting",title:"Chia plotting FAQ"},"plotting FAQ")," for more info."),(0,n.kt)("h2",{id:"farming"},"Farming"),(0,n.kt)("p",null,"Farming is the process by which a farmer receives a sequence of 256-bit challenges to prove that they have legitimately put aside a defined amount of storage. In response to each challenge, the farmer checks their plots, generates a proof, and submits any winning proofs to the network for verification. In response to each challenge, the farmer checks their plots, generates a proof, and submits any winning proofs to the network for verification."),(0,n.kt)("p",null,"The process of inputting a challenge and outputting a proof involves multiple table lookups. The process of inputting a challenge and outputting a proof involves multiple table lookups. First, the farmer responds to a challenge by reading a pair of values in table 7. These point to two entries in table 6, four entries in table 5, etc. These point to two entries in table 6, four entries in table 5, etc."),(0,n.kt)("p",null,"Finally, the farmer fetches the whole tree of x-values. This requires one disk read for table 7, two for table 6, four for table 5, etc. The whole process thus requires 64 disk reads, which takes approximately 640 ms on a slow HDD with a 10 ms seek time. The amount of data read is small and is independent of plot size."),(0,n.kt)("p",null,"Since most proofs generated by this process are not good enough (as discussed in ",(0,n.kt)("a",{parentName:"p",href:"/docs/03consensus/signage_points_and_infusion_points",title:"Section 3.5: Signage Points and Infusion Points"},"Section 3.5"),') to be submitted to the network for verification, we can optimize this process by only checking one branch of the tree. This branch will return two of the 64 x-values. The position of the x-values will always be consecutive and will depend on the signage point (eg x0 and x1... or x34 and x35). We hash these x-values to produce a random 256-bit "quality string." This is combined with the difficulty and the plot size to generate the required_iterations. If the required_iterations is less than a certain number, the proof can be included in the blockchain. At this point, we look up the whole proof of space. This branch will return two of the 64 x-values. The position of the x-values will always be consecutive and will depend on the signage point (eg x0 and x1... or x34 and x35). We hash these x-values to produce a random 256-bit "quality string." This is combined with the difficulty and the plot size to generate the required_iterations. If the required_iterations is less than a certain number, the proof can be included in the blockchain. At this point, we look up the whole proof of space.'),(0,n.kt)("p",null,"By only looking up one branch to determine the quality string, we can rule out most proofs. By only looking up one branch to determine the quality string, we can rule out most proofs. This optimization requires only around 7 disk seeks and reads, or about 70 ms on a slow hard drive."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"NOTE: Throughout this website, we'll make a simple assumption that a single disk seek requires 10ms. In reality, this is typically 5-10ms, so we're using a conservative estimate.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The 10ms estimate also takes into account the time required to transfer data after the seek. While storage industry specs typically assume that large files are being transferred, this does not hold true for Chia farming, where proof lookups only require a tiny amount of data to be transferred. Therefore, for this website, it's safe to assume the transfer is almost instant.")),(0,n.kt)("p",null,"Chia also uses a further optimization to disqualify a certain proportion of plots from eligibility for each challenge. This is referred to as the ",(0,n.kt)("em",{parentName:"p"},"plot filter"),". The current requirement is that the hash of the plot ID, challenge, and signage point starts with 9 zeros. This excludes 511 out of every 512 plots. The filter hurts everyone equally (except for ",(0,n.kt)("a",{parentName:"p",href:"/docs/03consensus/attacks_and_countermeasures#short-range-replotting-attack",title:"Section 3.14: Short Range Replotting Attack"},"replotting attackers"),"), and is therefore fair. The plot filter is discussed in greater detail in ",(0,n.kt)("a",{parentName:"p",href:"/docs/03consensus/signage_points_and_infusion_points",title:"Section 3.5: Signage Points and Infusion Points"},"Section 3.5"),"."),(0,n.kt)("p",null,"The plot filter effectively reduces the amount of resources required for farming by 512x -- each plot only requires a few disk reads every few minutes. A farmer with 1 PiB of storage (10,000 plots) will only have an average of 20 plots that pass the filter for each challenge. Even if these plots all are stored on slow HDDs, and connected to a single Raspberry Pi, the average time required to respond to each challenge will be less than two seconds. This is well within the limits to avoid missing out on any challenges. A farmer with 1 PiB of storage (10,000 plots) will only have an average of 20 plots that pass the filter for each challenge. Even if these plots all are stored on slow HDDs, and connected to a single Raspberry Pi, the average time required to respond to each challenge will be less than two seconds. This is well within the limits to avoid missing out on any challenges."),(0,n.kt)("p",null,"Each plot file has its own unique private key called a ",(0,n.kt)("em",{parentName:"p"},"plot key"),". The plot ID is generated by hashing the plot public key, the farmer public key, and either the pool public key (for OG plots) or the pool contract puzzle hash (for pooled plots). The requirements for signing a proof of space depend on the type of plots being used. See ",(0,n.kt)("a",{parentName:"p",href:"/docs/09keys/plot_public_keys",title:"Section 9.3: Public Plot Keys"},"Section 9.3")," for details on the keys used for plot construction. The plot ID is generated by hashing the plot public key, the farmer public key, and either the pool public key (for OG plots) or the pool contract puzzle hash (for pooled plots). The requirements for signing a proof of space depend on the type of plots being used. See ",(0,n.kt)("a",{parentName:"p",href:"/docs/09keys/plot_public_keys",title:"Section 9.3: Public Plot Keys"},"Section 9.3")," for details on the keys used for plot construction."),(0,n.kt)("p",null,"In practice, the plot key is a 2/2 BLS aggregate public key between a local key stored in the plot and a key stored by the farmer software. For security and efficiency, a farmer may run on one server using this key and signature scheme. This server can then be connected to one or more harvester machines that store the actual plots. Farming requires the farmer key and the local key, but it does not require the pool key, since the pool\u2019s signature can be cached and reused for many blocks. For security and efficiency, a farmer may run on one server using this key and signature scheme. This server can then be connected to one or more harvester machines that store the actual plots. Farming requires the farmer key and the local key, but it does not require the pool key, since the pool\u2019s signature can be cached and reused for many blocks."),(0,n.kt)("h2",{id:"verifying"},"Verifying"),(0,n.kt)("p",null,"After the farmer has successfully created a proof of space, the proof can be verified by performing a few hashes and making comparisons between the x-values in the proof. Recall that the proof is a list of 64 x-values, where each x-value is k bits long. For a k32 this is 256 bytes (2048 bits), and is therefore very compact. After the farmer has successfully created a proof of space, the proof can be verified by performing a few hashes and making comparisons between the x-values in the proof. Recall that the proof is a list of 64 x-values, where each x-value is k bits long. For a k32 this is 256 bytes (2048 bits), and is therefore very compact. Verification is very fast, but not quite fast enough to be verified in Solidity on Ethereum (something that would enable trustless transfers between chains), since this verification requires blake3 and chacha8 operations."))}u.isMDXComponent=!0},4246:function(e,t,o){t.Z=o.p+"assets/images/pospace-353b68d6b2441a5106c100e48d31b7d8.png"}}]);