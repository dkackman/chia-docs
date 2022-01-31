"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[1556],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return f}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(a),f=o,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||r;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8298:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return p}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],s={sidebar_position:15},l="3.15 Analysis",c={unversionedId:"03consensus/analysis",id:"03consensus/analysis",isDocsHomePage:!1,title:"3.15 Analysis",description:"Safety",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/03consensus/analysis.md",sourceDirName:"03consensus",slug:"/03consensus/analysis",permalink:"/zh/docs/03consensus/analysis",editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/03consensus/analysis.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"3.14 Relevant Attacks and Countermeasures",permalink:"/zh/docs/03consensus/attacks_and_countermeasures"},next:{title:"4.1 Coins, Puzzles and Solutions",permalink:"/zh/docs/04coin-set-model/what-is-a-coin"}},h=[{value:"Safety",id:"safety",children:[]},{value:"Liveness",id:"liveness",children:[]},{value:"Comparison to Nakamoto PoW",id:"comparison-to-nakamoto-pow",children:[]},{value:"Comparison to Proof of Stake",id:"comparison-to-proof-of-stake",children:[]},{value:"Comparison to BFT consensus algorithms",id:"comparison-to-bft-consensus-algorithms",children:[]}],u={toc:h};function p(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"315-analysis"},"3.15 Analysis"),(0,r.kt)("h2",{id:"safety"},"Safety"),(0,r.kt)("p",null,"The safety of Chia's consensus is similar to that of other Nakamoto consensus algorithms like Bitcoin. There is no guaranteed finality, but the more confirmations a transaction has, the safer it is. There is no guaranteed finality, but the more confirmations a transaction has, the safer it is."),(0,r.kt)("p",null,"A transaction needs a certain number of confirmations for a receiver to assume that it cannot be re-orged, under the < 42.7% (",(0,r.kt)("em",{parentName:"p"}," vdf advantage) colluding assumption. A transaction needs a certain number of confirmations for a receiver to assume that it cannot be re-orged, under the < 46% (")," vdf advantage) colluding assumption. Since farmers can theoretically sign multiple blocks at the same height, more ",(0,r.kt)("em",{parentName:"p"},"confirmations")," should be used in Chia than in Bitcoin. However, Chia doesn't require anywhere near as much ",(0,r.kt)("em",{parentName:"p"},"clock time")," as Bitcoin for a transaction to be considered safe. However, Chia doesn't require anywhere near as much ",(0,r.kt)("em",{parentName:"p"},"clock time")," as Bitcoin for a transaction to be considered safe."),(0,r.kt)("p",null,"In Chia, there are two main reasons to wait for a certain number of confirmations:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To be confident there won't be a chain re-org. To be confident there won't be a chain re-org. As discussed in ",(0,r.kt)("a",{parentName:"p",href:"/docs/03consensus/foliage",title:"Section 3.10: Foliage"},"Section 3.10"),", a small re-org is a natural occurrence in blockchains, though rare in Chia."),(0,r.kt)("p",{parentName:"li"},"To be confident that there won't be a chain re-org, you should wait for six blocks to be created (around two minutes after the first confirmation).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Just in case there is a foliage re-org attack, as described in ",(0,r.kt)("a",{parentName:"p",href:"/docs/03consensus/attacks_and_countermeasures#farmer-bribe-foliage-re-org-attack",title:"Section 3.14: Relevant Attacks and Countermeasures"},"Section 3.14"),". This type of attack would require an attacker to discover the identity of -- and successfully bribe -- a large and consecutive number of anonymous block winners. This attack would be difficult to pull off, so it is expected to be extremely rare, if it is ever even attempted. This type of attack would require an attacker to discover the identity of -- and successfully bribe -- a large and consecutive number of anonymous block winners. This attack would be difficult to pull off, so it is expected to be extremely rare, if it is ever even attempted."),(0,r.kt)("p",{parentName:"li"},"If you want to be nearly certain that even a successful foliage re-org attack won't reverse your transaction, you should wait for 32 blocks to be created (around ten minutes after the first confirmation)."))),(0,r.kt)("p",null,"It's worth noting that the 54% requirement only pertains to ",(0,r.kt)("em",{parentName:"p"},"non-colluding")," space, rather than ",(0,r.kt)("em",{parentName:"p"},"honest")," farming space. Profit-seeking farmers gain very little by deviating from the protocol. Profit-seeking farmers gain very little by deviating from the protocol."),(0,r.kt)("p",null,"There is the added assumption that at least one fast timelord must be connected to the non-colluding portion of the network, and that the attacker's timelord is not significantly faster. Chia plans to release and open source an ASIC timelord, which should ensure that it is extremely difficult to obtain a significantly faster timelord. Chia plans to release and open source an ASIC timelord, which should ensure that it is extremely difficult to obtain a significantly faster timelord."),(0,r.kt)("h2",{id:"liveness"},"Liveness"),(0,r.kt)("p",null,"The liveness of the Chia consensus system is one of its greatest strengths. The liveness of the Chia consensus system is one of its greatest strengths. Like Bitcoin, the Chia system continues advancing even when a majority of the space goes offline. Unlike bitcoin, though, the system does not slow down significantly when this happens, since not all blocks are transaction blocks. Therefore transaction throughput does not drop significantly if many participants go offline. Unlike bitcoin, though, the system does not slow down significantly when this happens, since not all blocks are transaction blocks. Therefore transaction throughput does not drop significantly if many participants go offline."),(0,r.kt)("p",null,"The network will continue to advance even if only one farmer is online, although there will be many empty slots, since a transaction block can only be created if it\u2019s below the sub-slot iterations threshold."),(0,r.kt)("p",null,"Of course, in the event of a long-term network split, the effects are that one chain must be chosen, so there can be large re-orgs in this case. The network will automatically choose the heavier chain, similar to PoW. The network will automatically choose the heavier chain, similar to PoW."),(0,r.kt)("h2",{id:"comparison-to-nakamoto-pow"},"Comparison to Nakamoto PoW"),(0,r.kt)("p",null,'("+" means a pro for Chia)'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"(+) Different resources. (+) Different resources. PoSpace is ASIC-resistant and therefore anyone can participate in farming."),(0,r.kt)("li",{parentName:"ul"},"(+) Hopefully more decentralized. (+) Hopefully more decentralized. (Analysis in mainnet's first year shows this to be the case.)"),(0,r.kt)("li",{parentName:"ul"},"(+) Easy merge farming. Other cryptocurrencies can use the same format, and everyone can share the space (assuming their farming computers have sufficient disk space and memory). (+) Easy merge farming. Other cryptocurrencies can use the same format, and everyone can share the space (assuming their farming computers have sufficient disk space and memory). (Note that the blockchain with the largest netspace will probably be the only secure one, since the farmers can attack smaller ones. This is especially true of blockchains with less than 50% of the top chain's netspace -- the remaining farmers who have not joined the smaller chain could collude to join, and attack, that chain.) This is especially true of blockchains with less than 50% of the top chain's netspace -- the remaining farmers who have not joined the smaller chain could collude to join, and attack, that chain.)"),(0,r.kt)("li",{parentName:"ul"},"(+) Minimum energy used, since only a few nodes run VDFs, and these are not parallelized. Very low marginal cost to farm. Very low marginal cost to farm."),(0,r.kt)("li",{parentName:"ul"},"(+) More consistent transaction block times (targeted average is one per 46.875 seconds, as discussed in ",(0,r.kt)("a",{parentName:"li",href:"/docs/03consensus/foliage",title:"Section 3.10: Foliage"},"Section 3.10"),")."),(0,r.kt)("li",{parentName:"ul"},"(+) Less susceptible to selfish mining attacks."),(0,r.kt)("li",{parentName:"ul"},"(+) Smaller orphan rates and forks, since blocks can be included in parallel."),(0,r.kt)("li",{parentName:"ul"},"(+) Continues to advance at nearly the same rate when space decreases, since only around 1/3 of blocks include transactions. PoW Nakamoto Consensus slows down linearly when hashrate drops. PoW Nakamoto Consensus slows down linearly when hashrate drops.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"(-) Drawback of more potential attackers (large companies). (-) Drawback of more potential attackers (large companies). Hardware is general purpose, and therefore attackers could switch between farming, attacking, and using for data storage."),(0,r.kt)("li",{parentName:"ul"},"(-) If an attacker acquires a significantly faster VDF, they could gain a space advantage."),(0,r.kt)("li",{parentName:"ul"},"(-) More complexity due to sub slots and VDFs, potentially more cryptographic assumptions.")),(0,r.kt)("h2",{id:"comparison-to-proof-of-stake"},"Comparison to Proof of Stake"),(0,r.kt)("p",null,'Chia\'s consensus algorithm could also be used for Proof of Stake, where the space farmers are replaced by stakers who own coins in the system. The benefit would be the ability to slash (delete people\u2019s stake), and farmers would have \u201cskin in the game\u201d, but there are some concerns if Proof of Stake is used. ("+" means benefit for using space vs stake). The benefit would be the ability to slash (delete people\u2019s stake), and farmers would have \u201cskin in the game\u201d, but there are some concerns if Proof of Stake is used. ("+" means benefit for using space vs stake).'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'(+) An attacker can transfer their stake to someone else, but fork the chain right before their stake is transferred. In this alternate chain, the attacker still has all of their stake, and can therefore advance the chain. (+) An attacker can transfer their stake to someone else, but fork the chain right before their stake is transferred. In this alternate chain, the attacker still has all of their stake, and can therefore advance the chain. The "nothing at stake" issue is different in PoS than in PoSpace since creating a PoSpace requires a physical resource (hard drive space), while creating a PoS only requires a key.'),(0,r.kt)("li",{parentName:"ul"},"(+) An attacker can guarantee their share of the whole monetary supply, by staking their rewards (the rich get richer), since the total number of coins is limited."),(0,r.kt)("li",{parentName:"ul"},"(+) There might be situations where the attacker can grind on many different ways to transfer stake. Perhaps this can be mitigated by requiring a long period before stake becomes active. Perhaps this can be mitigated by requiring a long period before stake becomes active."),(0,r.kt)("li",{parentName:"ul"},"(+) Registration is required, you cannot participate in proof of stake until you sign up. This reduces privacy and scalability (how many people can stake). This reduces privacy and scalability (how many people can stake)."),(0,r.kt)("li",{parentName:"ul"},"(+) Higher barrier to entry: security deposits and slashing make it difficult for small users to participate. Slashing can be a huge risk for participants in the network. Centralized custodians lead to a less distributed set of participants. Slashing can be a huge risk for participants in the network. Centralized custodians lead to a less distributed set of participants."),(0,r.kt)("li",{parentName:"ul"},"(+) Some assumptions are required to perform light client syncs in Proof of Stake. Source: ",(0,r.kt)("a",{parentName:"li",href:"https://eprint.iacr.org/2019/226.pdf"},"Flyclient white paper"),". Source: ",(0,r.kt)("a",{parentName:"li",href:"https://eprint.iacr.org/2019/226.pdf"},"Flyclient white paper"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"(-) Skin in the game: with PoS, the consensus can slash people\u2019s stake, and also requires some investment into the system (exposure to price). In Proof of Space, hard drives can be used for other purposes and there is no ability to \u201cslash\u201d people's hardware. In Proof of Space, hard drives can be used for other purposes and there is no ability to \u201cslash\u201d people's hardware.")),(0,r.kt)("h2",{id:"comparison-to-bft-consensus-algorithms"},"Comparison to BFT consensus algorithms"),(0,r.kt)("p",null,"Proof of Space could also be used as a Sybil-resistant mechanism in order to bootstrap a Byzantine consensus (k-agreement) system. Filecoin, and many Proof of Stake systems use aspects of Byzantine consensus. Filecoin, and many Proof of Stake systems use aspects of Byzantine consensus."),(0,r.kt)("p",null,'The pros and cons of using Chia Nakamoto Consensus vs Byzantine consensus, which vary from algorithm to algorithm ("+" means a pro for Chia):'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"(+) Much simpler."),(0,r.kt)("li",{parentName:"ul"},"(+) No registration requirement."),(0,r.kt)("li",{parentName:"ul"},"(+) No scalability requirement (scales to millions of farmers)."),(0,r.kt)("li",{parentName:"ul"},"(+) More censorship resistant. (+) More censorship resistant. As long as a small portion of the farming space does not censor, eventually you can get into the blockchain."),(0,r.kt)("li",{parentName:"ul"},"(+) No liveness requirements, potentially fewer network assumptions."),(0,r.kt)("li",{parentName:"ul"},"(+) Fully objective (A node can compare chain 1 and chain 2, and immediately know which one is heavier). No need for checkpoints with \u2154 consensus. No need for checkpoints with \u2154 consensus."),(0,r.kt)("li",{parentName:"ul"},"(+) Better light client support. (+) Better light client support. See the ",(0,r.kt)("a",{parentName:"li",href:"https://eprint.iacr.org/2019/226.pdf"},"Flyclient white paper")," for more info.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"(-) No finality, only probabilistic."),(0,r.kt)("li",{parentName:"ul"},"(-) Need to wait longer for transaction confirmations (related to no finality)."),(0,r.kt)("li",{parentName:"ul"},"(-) Less consistent block times and transaction throughput.")))}p.isMDXComponent=!0}}]);