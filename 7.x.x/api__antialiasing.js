(()=>{"use strict";var e,t={"./examples/api__antialiasing.js":(e,t,n)=>{var o=n("./node_modules/three/build/three.module.js"),i=n("./node_modules/three/examples/jsm/webxr/VRButton.js"),r=n("./node_modules/three/examples/jsm/controls/OrbitControls.js"),a=n("./node_modules/three/examples/jsm/geometries/BoxLineGeometry.js"),s=n("./src/three-mesh-ui.js"),d=n("./examples/assets/fonts/msdf/roboto/regular.json");const l=n.p+"5a41f46a5020bc8f41ff554d0d890ad3.png",c=window.innerWidth,u=window.innerHeight;let p,h,m,w,f=!0;function g(e,t,n,i,r){const a=`\n  fontSmooth: '${r}'\n\n  Three-mesh-ui uses rotated-grid-super-sampling (RGSS) to smooth out the rendering of small characters on low res displays.\n\n  This is especially important in VR. However you can improve performance slightly by disabling it, especially if you only render big texts.`,c=new s.ZP.Text({width:1,height:.9,padding:.05,borderRadius:.05,justifyContent:"center",alignItems:"start",fontFamily:d,fontTexture:l,color:new o.Ilk(16777215),backgroundOpacity:1,backgroundColor:new o.Ilk(0),fontSmooth:r,fontSize:.045,textContent:a});return p.add(c),c.position.set(e,1.5,-4),c.rotation.set(t,n,i),c}function b(){s.ZP.update(),f&&w.target.set(.3*Math.sin(Date.now()/3e3),.3*Math.cos(Date.now()/3e3)+1.5,-4),w.update(),m.render(p,h)}window.addEventListener("load",(function(){p=new o.xsS,p.background=new o.Ilk(5263440),h=new o.cPb(60,c/u,.1,500),h.position.set(0,1.5,0),m=new o.CP7({antialias:!0}),m.setPixelRatio(window.devicePixelRatio),m.setSize(c,u),m.xr.enabled=!0,document.body.appendChild(i.N.createButton(m)),document.body.appendChild(m.domElement),w=new r.z(h,m.domElement),w.addEventListener("start",(()=>f=!1));const e=new o.ejS(new a.d(6,6,12,10,10,20).translate(0,3,0),new o.nls({color:8421504}));p.add(e);const t=g(.6,0,0,0,"antialiased");window.no=t,g(-.6,0,0,0,"none"),m.setAnimationLoop(b)})),window.addEventListener("resize",(function(){h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)}))}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=(t,n,i,r)=>{if(!n){var a=1/0;for(c=0;c<e.length;c++){for(var[n,i,r]=e[c],s=!0,d=0;d<n.length;d++)(!1&r||a>=r)&&Object.keys(o.O).every((e=>o.O[e](n[d])))?n.splice(d--,1):(s=!1,r<a&&(a=r));if(s){e.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,i,r]},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.j="api__antialiasing",(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={api__antialiasing:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var i,r,[a,s,d]=n,l=0;if(a.some((t=>0!==e[t]))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(d)var c=d(o)}for(t&&t(n);l<a.length;l++)r=a[l],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},n=self.webpackChunkthree_mesh_ui=self.webpackChunkthree_mesh_ui||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=o.O(void 0,["chunk_imported-assets","chunk_three-mesh-ui","chunk_vendors"],(()=>o("./examples/api__antialiasing.js")));i=o.O(i)})();