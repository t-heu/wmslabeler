if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const f=e=>a(e,t),d={module:{uri:t},exports:n,require:f};s[t]=Promise.all(i.map((e=>d[e]||f(e)))).then((e=>(c(...e),n)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/2170a4aa-e8414143037b0099.js",revision:"gUDXK8KHxtpbTUbNoFuyZ"},{url:"/_next/static/chunks/4bd1b696-0a8f7ce755cd1331.js",revision:"gUDXK8KHxtpbTUbNoFuyZ"},{url:"/_next/static/chunks/517-046d202c25fc55a7.js",revision:"gUDXK8KHxtpbTUbNoFuyZ"},{url:"/_next/static/chunks/691-92074fa149951125.js",revision:"gUDXK8KHxtpbTUbNoFuyZ"},{url:"/_next/static/chunks/app/_not-found/page-e26ad127e9c830f5.js",revision:"gUDXK8KHxtpbTUbNoFuyZ"},{url:"/_next/static/chunks/app/home/page-fd4249c687a24d64.js",revision:"gUDXK8KHxtpbTUbNoFuyZ"},{url:"/_next/static/chunks/app/layout-d33d756a9e88b627.js",revision:"gUDXK8KHxtpbTUbNoFuyZ"},{url:"/_next/static/chunks/app/page-2e1169969abd2732.js",revision:"gUDXK8KHxtpbTUbNoFuyZ"},{url:"/_next/static/chunks/app/tag/page-0c0de7a58d761f62.js",revision:"gUDXK8KHxtpbTUbNoFuyZ"},{url:"/_next/static/chunks/framework-6b27c2b7aa38af2d.js",revision:"gUDXK8KHxtpbTUbNoFuyZ"},{url:"/_next/static/chunks/main-a6be3743245031ae.js",revision:"gUDXK8KHxtpbTUbNoFuyZ"},{url:"/_next/static/chunks/main-app-f56a70757fe49613.js",revision:"gUDXK8KHxtpbTUbNoFuyZ"},{url:"/_next/static/chunks/pages/_app-d23763e3e6c904ff.js",revision:"gUDXK8KHxtpbTUbNoFuyZ"},{url:"/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js",revision:"gUDXK8KHxtpbTUbNoFuyZ"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-03c3410266e73128.js",revision:"gUDXK8KHxtpbTUbNoFuyZ"},{url:"/_next/static/css/110fdb8e5ef50635.css",revision:"110fdb8e5ef50635"},{url:"/_next/static/css/85692c128650d849.css",revision:"85692c128650d849"},{url:"/_next/static/css/c17b86e742e1ca63.css",revision:"c17b86e742e1ca63"},{url:"/_next/static/gUDXK8KHxtpbTUbNoFuyZ/_buildManifest.js",revision:"ccc33171e810f1c50f2074d183586574"},{url:"/_next/static/gUDXK8KHxtpbTUbNoFuyZ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/01b6d16db7cbd96b-s.woff2",revision:"aa5a44ef72b927d17eac76def8c255cf"},{url:"/_next/static/media/025c5221126e4e89-s.woff2",revision:"1d266eb6756cae89abcd598d56bb063e"},{url:"/_next/static/media/0e5e1c6a8db9e432-s.woff2",revision:"f201ef2b6f1307dd8b1ec0c0deffceea"},{url:"/_next/static/media/120a5a1920781bd0-s.p.woff2",revision:"8c4b05d4371467ba1d0bc60839c6dcb9"},{url:"/_next/static/media/2744aa005c8cf586-s.p.woff2",revision:"105daacb4bc4cf86575fb3136360ff4d"},{url:"/_next/static/media/28aa5118b38b86e4-s.woff2",revision:"db5317b009a0dedd66dab31d7889b5f3"},{url:"/_next/static/media/3d5b37c97a405102-s.p.ttf",revision:"e1c6a72876821ec46d655e68b160f2fe"},{url:"/_next/static/media/418bb9d724f84584-s.woff2",revision:"cc9da36658c97547be935851d9d315a8"},{url:"/_next/static/media/483de911b1a0d258-s.woff2",revision:"28502b06e67112e0bf77a784aee917d0"},{url:"/_next/static/media/5693677ef07d9b51-s.woff2",revision:"96b57d1ae0a86dcf7913589b27426343"},{url:"/_next/static/media/569ce4b8f30dc480-s.p.woff2",revision:"ef6cefb32024deac234e82f932a95cbd"},{url:"/_next/static/media/6194a65a1b989dc8-s.woff2",revision:"12f0db351de86c05551dfe886ab6ab55"},{url:"/_next/static/media/6a5d8dc148518b96-s.woff2",revision:"b8cd9bd4d2a44124d4f5a74f79bdc1d2"},{url:"/_next/static/media/6ebb97b5c9fa4e03-s.p.woff2",revision:"39aff03d2a35b1c80f210051f35d4b2b"},{url:"/_next/static/media/747892c23ea88013-s.woff2",revision:"a0761690ccf4441ace5cec893b82d4ab"},{url:"/_next/static/media/7a7012758df5a81e-s.woff2",revision:"26024640d95a44fd98f614d6f4372e4b"},{url:"/_next/static/media/7c16c8204ab29534-s.woff2",revision:"eac32b711872911e7e7c107eb7a7901a"},{url:"/_next/static/media/7f5a4bbe7ec7be95-s.p.woff2",revision:"f44317e60bd99ef9140e4156d3ee26db"},{url:"/_next/static/media/80b1a0e600ca6d83-s.woff2",revision:"584ea11fad4f10a879c8530e7575cbbf"},{url:"/_next/static/media/8720059dfa14a1fe-s.woff2",revision:"1254e937b1635a843bc7bdee51de2aeb"},{url:"/_next/static/media/93f479601ee12b01-s.p.woff2",revision:"da83d5f06d825c5ae65b7cca706cb312"},{url:"/_next/static/media/98a28a5430a3cf7f-s.woff2",revision:"7dada9344a370f25dc1d3b7030da67b6"},{url:"/_next/static/media/b5c08a795ae281ca-s.woff2",revision:"5a3ac9809e02d838b15b80e557435268"},{url:"/_next/static/media/b9472d49e3bc18c3-s.woff2",revision:"8d5ccaf24e104a69a676ef5f4f2e95f2"},{url:"/_next/static/media/ba015fad6dcf6784-s.woff2",revision:"8ea4f719af3312a055caf09f34c89a77"},{url:"/_next/static/media/c898cbfd2f789a8c-s.woff2",revision:"5dcd52bbafd405373cb80552de5f5a96"},{url:"/_next/static/media/d0f96be320385a33-s.woff2",revision:"1a238bfef8b13573198b56363c3bbbb7"},{url:"/_next/static/media/d9e386ae70efc2f0-s.woff2",revision:"5e62d0433ab4fb48f80f72b6a41f07c2"},{url:"/_next/static/media/df2942b6de9d14b5-s.woff2",revision:"47e8ccc33b3dcfbe6d31914569515bf4"},{url:"/_next/static/media/e4f65e35dde2bee1-s.woff2",revision:"d3d2e988fd01f6b60121adc2cba7c541"},{url:"/_next/static/media/e7814bd1d06a39b6-s.woff2",revision:"ee93adb9ee2b722659c8ca1e26db0418"},{url:"/_next/static/media/f1df6186c8d69644-s.woff2",revision:"307c90aaa7d9c628155ee8cb913b8382"},{url:"/_next/static/media/f756da832d8c34d4-s.woff2",revision:"ef6b28a1181a73b788c8669d6ad9adc8"},{url:"/icons/icon-128x128.png",revision:"2bb313ca98f69c11137c7749331ebdf6"},{url:"/icons/icon-144x144.png",revision:"db85b4b427fdb2f9e2a64bc11af1686c"},{url:"/icons/icon-152x152.png",revision:"b3980e0dcbfb58d54604eb96452957b9"},{url:"/icons/icon-192x192.png",revision:"6943b77e3370f3a7bd07ed7424ecff7a"},{url:"/icons/icon-256x256.png",revision:"a5840c314abb0aed4718d2011461dd0d"},{url:"/icons/icon-384x384.png",revision:"1442608215b8beb11098b95ca89227ac"},{url:"/icons/icon-48x48.png",revision:"a41c878098b341a3f2eb024ec8585926"},{url:"/icons/icon-512x512.png",revision:"10df9465ba80822da8d2afe9b11c0f29"},{url:"/icons/icon-72x72.png",revision:"a834dcd7f30838b7680f0fd0a55f4f14"},{url:"/icons/icon-96x96.png",revision:"64c03c4254f5cba795e2d69277337600"},{url:"/icons/screenshot.png",revision:"e1b7ec510b5f4f9535d1400e1fd02318"},{url:"/main.js",revision:"758847e69debc7de3665455dfa0b85f7"},{url:"/manifest.json",revision:"e39f52de7cf0bdf896ad69d8d7d5c8f6"},{url:"/robots.txt",revision:"f71d20196d4caf35b6a670db8c70b03d"},{url:"/service-worker.js",revision:"399cf3c07a2f9ed178c9041e85cc2fe0"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
