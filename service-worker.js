if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,n,l)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const a={uri:location.origin+i.slice(1)};return Promise.all(n.map((i=>{switch(i){case"exports":return r;case"module":return a;default:return e(i)}}))).then((e=>{const i=l(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-543be79b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"edit-member-information.html",revision:"e20751e50a5f5a501d5fc1475da691a3"},{url:"fill-out-a-report.html",revision:"fca3a109c2412cad9a0383ad1035c900"},{url:"images/06a33de54d0972a7f563.png",revision:null},{url:"images/0fd1cc486baccea891bb.png",revision:null},{url:"images/1c60657dab65b45d627d.png",revision:null},{url:"images/2fc56e42637fde866ebd.png",revision:null},{url:"images/320d779d1aecd489be06.png",revision:null},{url:"images/5e62b639388cc73e5f59.png",revision:null},{url:"images/6eaaba8e35e71c7a7fab.png",revision:null},{url:"images/71068da9ae537995ef61.png",revision:null},{url:"images/7ddf74e8a4de38f4fb93.png",revision:null},{url:"images/819b599f51bb3b6cc2af.png",revision:null},{url:"images/829a244dddc942a9e708.png",revision:null},{url:"images/896225e4f9f737a83f44.png",revision:null},{url:"images/8aac4147c0c3f10c8c40.png",revision:null},{url:"images/8d1725e720e3268b4d08.png",revision:null},{url:"images/91f3c5cb62dc09a66f0a.png",revision:null},{url:"images/9930cbc81e56038a7fe7.png",revision:null},{url:"images/9dbf432728dbaf0e4b31.png",revision:null},{url:"images/a13ca5de0db1a95c500f.png",revision:null},{url:"images/a2dd8599989182853199.png",revision:null},{url:"images/a696eda2cd9afa7cb068.png",revision:null},{url:"images/bea2fd609cc24bf0c04e.png",revision:null},{url:"images/c9a33996c37dc04fbc13.png",revision:null},{url:"images/d23403f9ebfda30b354f.png",revision:null},{url:"images/d47524016ace70297603.png",revision:null},{url:"images/e1e820c2ab9988b52de9.png",revision:null},{url:"images/e793976196585a81c9c8.png",revision:null},{url:"images/f8fe83346d47659a90e0.png",revision:null},{url:"index.html",revision:"53dcf2f1772534a019e7b82b221d9c93"},{url:"invite-your-team.html",revision:"1c126a5c33c3391c89a69053b1271d86"},{url:"main.js",revision:"6d59f59818b66a3eae8fa5f3c3291e24"},{url:"main.js.LICENSE.txt",revision:"3b7f4e8a53825a16477ab68bc59f07d8"},{url:"my-company.html",revision:"7923295a0a6fb6eaa8b37013449659ca"},{url:"my-reports.html",revision:"38bffe004ec63c79bce79a97f7ef7870"},{url:"team-members.html",revision:"79ad762fdb192972964f9cd14e4e0148"},{url:"team-reports.html",revision:"ea14b37780d9ff8371a6b99e5f04f972"},{url:"weekly-report-history.html",revision:"3a525ca2c5fd168703048d073cd13d18"}],{})}));