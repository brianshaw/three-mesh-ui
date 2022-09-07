(()=>{"use strict";var e,t={"./examples/ex__toggle_button_htm.js":(e,t,s)=>{var n=s("./node_modules/three/build/three.module.js"),i=s("./node_modules/three/examples/jsm/webxr/VRButton.js"),r=s("./node_modules/three/examples/jsm/geometries/BoxLineGeometry.js"),a=s("./node_modules/three/examples/jsm/controls/OrbitControls.js"),o=s("./src/three-mesh-ui.js");const l=/((?:")([^"]*)(?:"))/g,c=/([ >~+]*)([^+>~ ]+)/g,h=/^[ >~+]+/,d=/(#)([\w_-]+)/,u=/(\.)([\w_-]+)/g,_=/(:)([A-z0-9\-_]*)/g,m=/^[^#\.:\[]*/g,p=/(\[([^\]]*)\])/g,g=/([^*~$^=]+)(([*~$^]?=)(.*))?/;class b{constructor(e,t=null){this._type=e,this._value=t}get type(){return this._type}get value(){return this._value}}class f extends b{constructor(e){super("attribute"),this._value=[];for(let t=0;t<e.length;t++)this._value.push(new v(e[t]))}get value(){return this._value}}class v{constructor(e){const t=(e=e.substring(1,e.length-1)).match(g);this.name=t[1],this.operator=t[3]||"!==",this.value=t[4]?function(e){e[0]!==e[e.length-1]||'"'!==e[0]&&"'"!==e[0]||(e=e.substring(1,e.length-1));return e}(t[4]):void 0}}class y extends b{constructor(e,t){super(e),this._value=[];for(let e=0;e<t.length;e++)this._value.push(t[e].substring(1))}get value(){return this._value}}class w{constructor(e){const t=e.match(h);this._query=e,this._combinator=t?t[0].trim():null,this._conditions=function(e){const t=[],s=e.match(p);s&&t.push(new f(s));const n=(e=e.replace(p,"")).match(d);n&&t.push(new b("id",n[2]));const i=e.match(u);i&&t.push(new y("class",i));const r=e.match(_);r&&t.push(new y("pseudoClass",r));const a=e.replace(h,"").match(m,"");a&&a[0]&&t.push(new b("tag",a[0]));return t}(e.replace(h,""))}get conditions(){return this._conditions}get combinator(){return this._combinator}get query(){return this._query}match(e){return this._conditions.every((t=>{switch(t.type){case"id":return e.elementID===t.value;case"class":return e.classList.containsEvery(t.value);case"pseudoClass":return e.pseudoClassList.containsEvery(t.value);case"tag":return e.tagName===t.value;case"attribute":return e.attributes.matchEvery(t.value);default:return console.warn(`CSSQuerySegment::match() - '${t.type}' is not implemented!`),!0}}))}}class x extends Array{constructor(...e){super(...e)}match(e){const t=this[this.length-1];if(!t.match(e))return!1;if(1===this.length)return!0;const s=[];let n=e;for(;n.parentUI;)s.push(n.parentUI),n=n.parentUI;if(0===s.length)return!1;let i=e,r=null;for(let e=this.length-2;e>=0;e--){const n=this[e];if(0===s.length)return!1;if(r=s.shift(),t.combinator&&""!==t.combinator){if(">"===t.combinator){if(!n.match(r))return!1;i=r}else if("~"===t.combinator||"+"===t.combinator){const e=r.childrenUIs.indexOf(i);let s;s="~"===t.combinator?r.childrenUIs.slice(e+1):r.childrenUIs.slice(e+1,e+2);for(let e=0;e<s.length;e++)if(n.match(s[e])){i=r;break}}}else{for(;!n.match(r);){if(0===s.length)return!1;if(s.length<e+1)return!1;r=s.shift()}i=r}}return!0}static build(e){const t=e.matchAll(l),s=e.split("");for(const e of t)for(let t=0;t<e[1].length;t++)s[e.index+t]="_";const n=s.join("").matchAll(c);if(!n)return[];const i=[];for(const e of n)i.push(e.index);i.push(e.length);const r=new x;for(let t=0;t<i.length-1;t++)r.push(new w(e.substring(i[t],i[t+1])));return r}}class k{constructor(e,t,s=null){this._query=x.build(e),this._specificity=function(e){e instanceof x||(e=x.build(e));let t=0;for(let s=0;s<e.length;s++){const n=e[s];for(let e=0;e<n.conditions.length;e++){const s=n.conditions[e];switch(s.type){case"id":t+=1e4;break;case"class":case"pseudoClass":case"attribute":t+=100*s.value.length;break;default:t+=1}}}return t}(this._query),this._order=0,this._styles={};for(let e=0;e<t.length;e++){const i=t[e];let r=t[i];if(r.match(/rem|px|em/g)&&(r=parseFloat(r.replace(/rem|px|em/g,""))),-1!==i.indexOf("color"))if(0===r.indexOf("rgba")){const e=r.match(/([\d\.]+)/g);if(4===e.length){let s=i.replace("color","opacity");"opacity"===s&&(s="fontOpacity"),t[s]&&""!==t[s]||(this._styles[C(s)]=parseFloat(e[3]))}r=new n.Ilk(`rgb(${e[0]},${e[1]},${e[2]})`)}else r=new n.Ilk(r);let a=C(i);s&&s[a]&&(a=s[a]),this._styles[a]=r}this._enabled=!0}get enabled(){return this._enabled}set enabled(e){this._enabled=e}get query(){return this._query}get specificity(){return this._specificity}get order(){return this._order}set order(e){this._order=e}get styles(){return this._styles}}function C(e){return e.replace(/-./g,(e=>e[1].toUpperCase()))}class E{constructor(e){this._condition=e,this._rules=[],this._matchMediaQuery=window.matchMedia(e)}addRule(e){this._rules.push(e)}init(e){this._callback=e,this._matchMediaQuery.addEventListener("change",this.handleMatchMediaChanges),this._matchMediaQuery.matches||this.disableRules()}enableRules(){for(const e of this._rules)e.enabled=!0}disableRules(){for(const e of this._rules)e.enabled=!1}handleMatchMediaChanges=e=>{e.matches?this.enableRules():this.disableRules(),this._callback()}}var S=s("./src/components/core/UpdateManager.js");class P{constructor(e,...t){this._callback=e,this._tokens=[...t]}clear(){this._tokens=[],this._callback()}contains=e=>-1!==this._tokens.indexOf(e);containsAll=(...e)=>e.every(this.contains);containsEvery=e=>e.every(this.contains);toggle(e){this.contains(e)?this.remove(e):this.add(e)}add(...e){for(const t of e)this.contains(t)||(this._tokens.push(t),this._callback())}remove(...e){for(const t of e){const e=this._tokens.indexOf(t);-1!==e&&(this._tokens.splice(e,1),this._callback())}}toString(e){return this._tokens.length?e+this._tokens.join(e):""}dispose(){this.containsEvery=null,this.containsAll=null,this._callback=null,this._tokens=null}}class j{constructor(e,t={}){this._callback=e,this._map=new Map;for(const e in t)this.set(e,t[e])}clear(){this._map.clear()}set(e,t=null){void 0===t&&this.remove(e),this._map.set(e,t),this._callback()}get(e){return this._map.get(e)}remove(e){return this._callback(),this._map.delete(e)}has(e){return this._map.has(e)}toString(){let e="";const t=this._map.entries();for(const[s,n]of t)e+=n?`[${s}="${n}"]`:`[${s}]`;return e}match=e=>{const t=e.name,s=e.value,n=e.operator;let i;switch(n){case"=":return i=this._map.get(t),i&&i===s;case"^=":return i=this._map.get(t),i&&i.startsWith(s);case"*=":return i=this._map.get(t),i&&i.includes(s);case"$=":return i=this._map.get(t),i&&i.endsWith(s);case"!==":return this._map.has(t);default:console.warn(`NamedMap::match() - The provided operator '${n}' is not implemented`)}};matchEvery=e=>e.every(this.match);dispose(){this._callback=!1,this._map.clear(),this._map=null,this._map=null}}var L=s("./src/elements/html/properties/StylePropertyWrapper.js"),O=s("./src/elements/html/properties/StyleComputedPropertyWrapper.js");class I extends o.FV{constructor(e,t){const s=t.tagName;if(delete t.tagName,!s)throw new Error("HyperThreeMesh::Element - Requires a tagName property.");super(e,t),this._elementID=null,this._classList=new P(me),this._pseudoClassList=new P(me),this._attributes=new j(me),this._tagName=s,this._styles=new L.Z(this),this._computedStyles=new O.Z(this)}set elementID(e){this._elementID=e,me()}get elementID(){return this._elementID}get tagName(){return this._tagName}get attributes(){return this._attributes}get style(){return this._styles}get computedStyle(){return this._computedStyles}setAttribute(e,t=null){this._attributes.set(e,t)}getAttribute(e){return this._attributes.get(e)}hasAttribute(e){return this._attributes.has(e)}removeAttribute(e){this._attributes.remove(e)}get classList(){return this._classList}get pseudoClassList(){return this._pseudoClassList}copyAttributes(){let e=this._tagName;return this._elementID&&(e+=`#${this._elementID}`),e+=this._classList.toString("."),e+=this._attributes.toString(),e+=this._pseudoClassList.toString(":"),e}pasteAttributes(e){e instanceof w||(e=new w(e)),this._elementID=null,this._classList.clear(),this._pseudoClassList.clear(),this._attributes.clear();for(let t=0;t<e.conditions.length;t++){const s=e.conditions[t];switch(s.type){case"tag":""===this._tagName&&(this._tagName=s.value);continue;case"id":this._elementID=s.value;continue;case"class":for(let e=0;e<s.value.length;e++)this._classList.add(s.value[e]);continue;case"pseudoClass":for(let e=0;e<s.value.length;e++)this._pseudoClassList.add(s.value[e]);continue;case"attribute":for(let e=0;e<s.value.length;e++){const t=s.value[e];this._attributes.set(t.name,t.value)}}}return this}activatePseudoState(e){"hover"!==e&&"disabled"!==e&&this.hasAttribute("disabled")||this._pseudoClassList.add(e)}deactivatePseudoState(e){this._pseudoClassList.remove(e)}togglePseudoState(e){this._pseudoClassList.toggle(e)}hasPseudoState(e){return this._pseudoClassList.contains(e)}querySelectorAll(e){return X(e,this)}clear(){return this._styles.dispose(),this._styles=null,this._computedStyles.dispose(),this._computedStyles=null,super.clear()}}var A=s("./src/elements/basic/BoxElement.js");class T extends I{constructor(e={},t={}){A.Z.definePropertiesValues(e,t),super(e,t),A.Z.init(this)}bindBackgroundMeshProperties(){this._bounds._size=this._backgroundMesh.scale,this._bounds._needsProcess=!0}unbindBackgroundMeshProperties(){this._bounds._size=new n.Pa4(1,1,1),this._bounds._needsProcess=!0}}var N=s("./src/elements/basic/TextElement.js"),M=s("./src/elements/basic/InlineElement.js");class H extends I{constructor(e={}){const t={};M.Z.definePropertiesValues(t,e),super(t,e),M.Z.init(this)}add(e){const t=[];for(let e=0;e<arguments.length;e++){const s=arguments[e];!s.isUI||s.isInline?(t.push(s),s.position.z=.005):console.warn("Block element can only contain Box elements.",s)}return super.add(...t)}_rebuildParentUI=()=>{super._rebuildParentUI(),this._layouter._needsUpdate=!0};set textContent(e){this._textContent.value=e}get textContent(){return this._textContent._value}set invertAlpha(e){this._invertAlpha.value=e}get invertAlpha(){return this._invertAlpha._value}}class B extends T{constructor(e={}){const t={};N.Z.definePropertiesValues(t,e),super(t,e),N.Z.init(this)}add(e){const t=[];let s=!1;for(let e=0;e<arguments.length;e++){const n=arguments[e];!n.isUI||n.isInline?(n.isInline&&(s=!0),t.push(n)):console.warn("Block element can only contain Box elements.",n)}return t.length>0&&super.add(...t),s&&(this._layouter._needsProcess=!0),this}set textContent(e){for(let e=this.children.length-1;e>=0;e--){const t=this.children[e];t.isUI&&(this.remove(t),t.clear())}e&&this.add(new H({tagName:"anonymous-span",textContent:e}))}get textContent(){return super.textContent}set invertAlpha(e){this._invertAlpha.value=e}get invertAlpha(){return this._invertAlpha._value}get lines(){return this._layouter._value}}var U=s("./src/elements/basic/BlockElement.js");class z extends T{constructor(e={}){const t={};U.Z.definePropertiesValues(t,e),super(t,e),U.Z.init(this)}add(e){const t=[];for(let e=0;e<arguments.length;e++){const s=arguments[e];!s.isUI||s.isBox?t.push(s):console.warn("Block element can only contain Box elements.",s)}return super.add(...t)}}class R{hoveredElementHasChanged(e){throw new Error("Abstract method need to be implemented.")}selectedElementHasChanged(e){throw new Error("Abstract method need to be implemented.")}clicked(e){throw new Error("Abstract method need to be implemented.")}}class D extends R{constructor(e){super(),this._keyboard=e,this._texts=[]}bindText(e){this._texts.push(e)}unbindText(e){const t=this._texts.indexOf(e);-1!==t&&this._texts.splice(t,1)}clicked(e){if(-1!==this._keyboard.keys.indexOf(e))if(e.info.command)switch(e.info.command){case"switch":this._keyboard.setNextPanel();break;case"switch-set":this._keyboard.setNextCharset();break;case"enter":for(let e=0;e<this._texts.length;e++){const t=this._texts[e];t.set({textContent:t.textContent+"\n"})}break;case"space":for(let e=0;e<this._texts.length;e++){const t=this._texts[e];t.set({textContent:t.textContent+" "})}break;case"backspace":for(let e=0;e<this._texts.length;e++){const t=this._texts[e];t.textContent.length&&t.set({textContent:t.textContent.substring(0,t.textContent.length-1)||""})}break;case"capslock":e.togglePseudoState("checked"),this._keyboard.toggleCase()}else if(e.info.input)for(let t=0;t<this._texts.length;t++){const s=this._texts[t];s.set({textContent:s.textContent+e.info.input})}}hoveredElementHasChanged(e){}selectedElementHasChanged(e){}}const $=new n.dpR;class W extends o.gO{constructor(e={}){W.ensureOptions(e),super(),W.make(this,e)}_buildPanel(){const e=new o.gO({});return e.charset=0,e}_buildKey(e,t){return new o.xv({name:e})}_buildBlock(){return new o.gO({})}_buildKeyInline(e,t){return new o.gF({name:e})}_buildKeyInlineBlock(e,t){return new o.ol({name:e})}static ensureOptions(e){e.width||(e.width=1),e.height||(e.height=.4),e.margin||(e.margin=.003),e.padding||(e.padding=.01)}static make(e,t){if(e.currentPanel=0,e.isLowerCase=!0,e._layout=null,t.autoDetectLayout&&t.availableLayouts&&t.availableLayouts.length>0){const s=navigator.language;let n=null;s&&(n=t.availableLayouts.find((e=>-1!==e.locales.indexOf(s)))),e._layout=n}e._layout||(e._layout=t.layout),e.charsetCount=e._layout.charsetCount,e.keys=[],({panels:e.panels,keys:e.keys}=W.build(e,e._layout,t)),e.add(e.panels[0]),e._interactiveListener=new D(e),Object.defineProperty(e,"interactiveListener",{get:()=>e._interactiveListener});for(const t of e.keys)t._clicked=F;Object.defineProperty(e,"interactiveObjects",{get:()=>e.keys}),e.setNextPanel=W._setNextPanel.bind(e),e.setNextCharset=W._setNextCharset.bind(e),e.toggleCase=W._toggleCase.bind(e)}static build(e,t,s){const n=[],i=[];for(let r=0;r<t.keys.length;r++){const a=t.keys[r],o=s.height/a.length-2*s.margin,l=e._buildPanel();l.set({boxSizing:"border-box",width:s.width+2*s.padding,height:s.height+2*s.padding,offset:.001,padding:s.padding,fontFamily:s.fontFamily,fontTexture:s.fontTexture,backgroundColor:s.backgroundColor,backgroundOpacity:s.backgroundOpacity}),l.charset=0,n.push(l);for(let t=0;t<a.length;t++){const n=a[t],r=e._buildBlock();r.set({width:s.width,height:o,margin:s.margin,flexDirection:"row",justifyContent:"center"}),l.add(r);for(let t=0;t<n.length;t++){const a=n[t],c=a.chars[l.charset].lowerCase||a.chars[l.charset].icon||"und",h=e._buildKey(c,a);h.set({boxSizing:"border-box",width:s.width*a.width-2*s.margin,height:o,margin:s.margin,alignItems:"center",textAlign:"center",backgroundColor:0,backgroundOpacity:.8}),i.push(h),r.add(h),h.type="Key",h.info=a,h.info.input=c,h.panel=l;let d=null;if("enter"===c&&s.enterTexture||"capslock"===c&&s.shiftTexture||"backspace"===c&&s.backspaceTexture){const t=(()=>{switch(c){case"backspace":return s.backspaceTexture;case"enter":return s.enterTexture;case"capslock":return s.shiftTexture;default:console.warn("There is no icon image for this key")}})();$.load(t,(t=>{d=e._buildKeyInlineBlock(c,a),d.raycast=K,d.set({width:.65*o,height:.65*o,backgroundSize:"contain",backgroundImage:t,backgroundColor:16777215}),h.add(d)}))}else d=e._buildKeyInline(c,a),d.raycast=K,d.set({textContent:c}),h.add(d)}}}return{panels:n,keys:i}}static _setNextPanel(){this.panels.forEach((e=>{this.remove(e)})),this.currentPanel=(this.currentPanel+1)%this.panels.length,this.add(this.panels[this.currentPanel])}static _setNextCharset(){this.panels[this.currentPanel].charset=(this.panels[this.currentPanel].charset+1)%this.charsetCount,this.keys.forEach((e=>{if(!this.panels[this.currentPanel].getObjectById(e.id))return;const t=e.info.chars[e.panel.charset]||e.info.chars[0];let s=this.isLowerCase||!t.upperCase?t.lowerCase:t.upperCase;if(s||(s=t.icon),!e._children._inlines.length)return;const n=e._children._inlines[0];n.isInlineBlock||(e.info.input=s,n.set({textContent:s}))}))}static _toggleCase(){this.isLowerCase=!this.isLowerCase,this.keys.forEach((e=>{const t=e.info.chars[e.panel.charset]||e.info.chars[0];let s=this.isLowerCase||!t.upperCase?t.lowerCase:t.upperCase;if(s||(s=t.icon),!e._children._inlines.length)return;const n=e._children._inlines[0];n.isInlineBlock||(e.info.input=s,n.set({textContent:s}))}))}}function K(){}function F(){}class V extends z{constructor(e){W.ensureOptions(e),super({tagName:"keyboard"}),W.make(this,e);const t=["enter","shift","backspace"];for(let e=0;e<this.keys.length;e++){const s=this.keys[e];-1!==t.indexOf(s.info.input)?s.setAttribute("type","icon"):s.setAttribute("type","char")}}_buildPanel(){const e=new ue("div",{tagName:"panel"});return e.charset=0,e}_buildBlock(){return ue("div")}_buildKey(e,t){const s=ue("button",{tagName:"key",name:e});return s.setAttribute("input",e),s}_buildKeyInline(e,t){return ue("span",{tagName:"anonymous-span",name:e})}_buildKeyInlineBlock(e,t){return ue("icon",{name:e})}}class Z extends I{constructor(e={}){const t={};o.ol.definePropertiesValues(t,e),super(t,e),o.ol.init(this)}clear(){for(const e of this._inlines._value)e.clear();return super.clear()}bindBackgroundMeshProperties(){this._bounds._size=this._backgroundMesh.scale,this._bounds._needsUpdate=!0}unbindBackgroundMeshProperties(){this._bounds._size=new n.Pa4(1,1,1),this._bounds._needsUpdate=!0}add(e){const t=[];for(let e=0;e<arguments.length;e++){const s=arguments[e];s.isUI?console.warn("ThreeMeshUI::InlineBlockElement cannot contains UI Elements.",s):(t.push(s),s.position.z=.005)}return super.add(...t)}}class q extends B{constructor(e={}){const t=e.value?e.value:"";super(e),this.setAttribute("value",t)}set value(e){this.setAttribute("value",e)}get value(){return this.getAttribute("value")}set disabled(e){e?(this.setAttribute("disabled",null),this.activatePseudoState("disabled")):(this.removeAttribute("disabled"),this.deactivatePseudoState("disabled"))}get disabled(){return this.hasAttribute("disabled")}}const G={};class J{constructor(e){this._name=e,this._elements=[],G[e]=this}add(e){-1===this._elements.indexOf(e)&&this._elements.push(e)}remove(e){const t=this._elements.indexOf(e);-1!==t&&this._elements.splice(t,1)}}class Q extends q{constructor(e={}){const t=e.group?e.group:"default";let s=null;e.textContent&&(s=e.textContent,delete e.textContent),super(e),this.setAttribute("type","toggle"),this._group=function(e,t=!1){return!G[e]&&t?new J(e):G[e]}(t,!0),this._group.add(this),this._ascent=new Z({tagName:"ascent",borderRadius:.015,borderWidth:.008,borderColor:16711833,backgroundColor:0,margin:.01}),this._label=new H({tagName:"label"}),this.add(this._ascent,this._label),s&&(this.textContent=s)}clear(){return this._group.remove(this),super.clear()}_clicked(e){this.hasAttribute("checked")?(this.removeAttribute("checked"),this.deactivatePseudoState("checked")):(this.setAttribute("checked",null),this.activatePseudoState("checked")),this.dispatchEvent({type:"change",value:this.getAttribute("value")}),e.type="click",this.dispatchEvent(e)}set checked(e){this.setAttribute("checked",null)}get checked(){return this.hasAttribute("checked")}set textContent(e){this._label.textContent=e}get textContent(){return this._label.textContent}get label(){return this._label}}function X(e,t=null){e instanceof x||(e=x.build(e)),t||(t=S.Z.elements),Array.isArray(t)||(t=[t]);let s=[];for(let n=0;n<t.length;n++)s=s.concat(Y(t[n],e));for(let e=s.length-1;e>=0;e--){s.indexOf(s[e])!==e&&s.splice(e,1)}return s}function Y(e,t,s=!0){let n=[];if(s)for(let s=0;s<e._children._uis.length;s++)n=n.concat(Y(e._children._uis[s],t));if(t[0].match(e)){if(1===t.length)return n.push(e),n;const s=t.slice(1);if(s&&""!==s)if(s[0].combinator&&""!==s[0].combinator)if(">"===s[0].combinator)for(let t=0;t<e._children._uis.length;t++)n=n.concat(Y(e._children._uis[t],s,!1));else{if(!e._parent._value||"~"!==s[0].combinator&&"+"!==s[0].combinator)throw new Error(`UIDocument::querySelectorAll() - The provided css combinator('${s[0].combinator}') is not implemented`);{const t=e._parent._value,i=t._children._uis.indexOf(e);let r;r="~"===s[0].combinator?t._children._uis.slice(i+1):t._children._uis.slice(i+1,i+2);for(let e=0;e<r.length;e++)n=n.concat(Y(r[e],s,!1))}}else for(let t=0;t<e._children._uis.length;t++)n=n.concat(Y(e._children._uis[t],s))}return n}let ee=[],te=[],se=[],ne="three-mesh-ui";function ie(e="three-mesh-ui",t=!1){if(ne=e,t&&document){for(let e=0;e<se.length;e++){let t=se[e];t.disconnect(),t=null}se=[],function(e){const t=new MutationObserver(re);t.observe(e,{childList:!0,subtree:!0}),se.push(t)}(document.documentElement);const t=document.querySelectorAll(`link[media="${e}"],style[media="${e}"]`);for(let e=0;e<t.length;e++)oe(t[e])}if(ee=[],te=[],document&&document.styleSheets){for(const t of document.styleSheets)if(t.media.mediaText===e){const{rules:e,conditions:s}=de(t.cssRules);ee=ee.concat(e),te=te.concat(s)}for(let e=0;e<ee.length;e++)ee[e].order=e;ee.sort(ce);for(const e of te)e.init((()=>{_e=!0}))}le()}function re(e){let t=!1;e.forEach((function(e){for(let s=0;s<e.addedNodes.length;s++)ae(e.addedNodes[s])&&(t=!0);for(let s=0;s<e.removedNodes.length;s++)ae(e.removedNodes[s])&&(t=!0)})),t&&ie(!0)}function ae(e){return"LINK"===e.tagName||"STYLE"===e.tagName&&e.getAttribute("media")===ne}function oe(e){const t=new MutationObserver((function(e){ie(ne,!0)}));t.observe(e,{attributes:!0,childList:!0,subtree:!0,characterData:!0,characterDataOldValue:!0}),se.push(t)}function le(){for(const e of ee){if(!e.enabled)continue;const t=X(e.query);for(const s of t)s.set(e.styles)}}function ce(e,t){return e.specificity<t.specificity?-1:e.specificity>t.specificity?1:e.order<t.order?-1:e.order>t.order?1:0}const he={rx:"offset",offsetDistance:"offset"};function de(e,t=null){let s=[],n=null,i=[];t&&""!==t&&(n=new E(t),i.push(n));for(let r=0;r<e.length;r++){const a=e[r];if(a.selectorText){const e=new k(a.selectorText,a.style,he);s.push(e),n&&n.addRule(e)}else if(a.conditionText){let e=t;e&&""!==e?e+=` and ${a.conditionText}`:e=a.conditionText;const{rules:n,conditions:r}=de(a.cssRules,e);s=s.concat(n),i=i.concat(r)}}return{rules:s,conditions:i}}function ue(e,t={}){switch(t.tagName||(t.tagName=e),e.toLowerCase().replace(/\d/g,"")){case"p":case"h":case"label":return new B(t);case"button":return new q(t);case"toggle":return t.tagName="button",new Q(t);case"div":case"li":case"footer":case"header":return new z(t);case"span":case"em":case"strong":case"sup":case"sub":case"small":case"link":return new H(t);case"icon":return new Z(t);case"keyboard":return new V(t);default:throw new Error("HyperTextMesh::createElement() - The provided tagname is not implemented")}}let _e=!0;function me(){_e=!0}var pe=s("./examples/assets/fonts/msdf/roboto/regular.json");const ge=s.p+"5a41f46a5020bc8f41ff554d0d890ad3.png",be={type:"hover"};class fe{constructor(e,t,s,i=null){this._camera=e,this._scene=t,this._renderer=s,this._vrControl=i,this._raycaster=new n.iMs,this._listeners=[],this._objectsToTest=[],this._target=null,this._mouse=null,this._selectState=!1,this._lastHoveredElement=null,this._lastSelectedElement=null}addListener(e){-1===this._listeners.indexOf(e)&&this._listeners.push(e)}removeListener(e){const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}start(e=null){if(this._target)throw new Error("InteractiveRaycaster::start() - is already started. Aborted.");e=e||window,this._target=e,this._mouse=new n.FM8,this._mouse.x=this._mouse.y=null,e.addEventListener("pointermove",this._pointerMove),e.addEventListener("pointerdown",this._selectStart),e.addEventListener("pointerup",this._selectEnd),e.addEventListener("touchstart",this._touchMove),e.addEventListener("touchend",this._touchEnd),this._vrControl&&(this._vrControl.controllers[0].addEventListener("selectstart",this._selectStart),this._vrControl.controllers[0].addEventListener("selectend",this._selectEnd))}_selectStart=()=>{this._selectState=!0};_selectEnd=()=>{this._click(),this._selectState=!1};_pointerMove=e=>{this._mouse.x=e.clientX/this._target.innerWidth*2-1,this._mouse.y=-e.clientY/this._target.innerHeight*2+1};_touchMove=e=>{this._selectStart(),this._mouse.x=e.touches[0].clientX/this._target.innerWidth*2-1,this._mouse.y=-e.touches[0].clientY/this._target.innerHeight*2+1};_touchEnd=e=>{this._selectEnd(),this._mouse.x=null,this._mouse.y=null};_setHoveredElement(e){this._lastHoveredElement&&this._lastHoveredElement.isUI&&this._lastHoveredElement.deactivatePseudoState("hover"),this._lastHoveredElement=e,null!==this._lastHoveredElement&&this._lastHoveredElement.isUI&&(this._lastHoveredElement.activatePseudoState("hover"),this._lastHoveredElement.dispatchEvent(be));for(let e=0;e<this._listeners.length;e++)this._listeners[e].hoveredElementHasChanged(this._lastHoveredElement)}_setSelectedElement(e){this._lastSelectedElement&&this._lastSelectedElement.isUI&&this._lastSelectedElement.deactivatePseudoState("active"),this._lastSelectedElement=e,null!==this._lastSelectedElement&&this._lastSelectedElement.isUI&&this._lastSelectedElement.activatePseudoState("active");for(let e=0;e<this._listeners.length;e++)this._listeners[e].selectedElementHasChanged(this._lastSelectedElement)}_click(){if(this._lastSelectedElement){this._lastSelectedElement._clicked(this._lastIntersectObject);for(let e=0;e<this._listeners.length;e++)this._listeners[e].clicked(this._lastSelectedElement)}}addObject(e){for(let e=0;e<arguments.length;e++){const t=arguments[e];let s;t.interactiveListener&&this.addListener(t.interactiveListener),s=t.interactiveObjects?t.interactiveObjects:[t];for(let e=0;e<s.length;e++){const t=s[e];t._clicked||(t._clicked=this._elementClicked),this._objectsToTest.push(t)}}}removeObject(e){for(let e=0;e<arguments.length;e++){const t=arguments[e];t.interactiveListener&&this.removeListener(t.interactiveListener);let s=[t];t.interactiveObjects&&(s=[...t.interactiveObjects]);for(let e=0;e<s.length;e++){const t=s[e],n=this._objectsToTest.indexOf(t);-1!==n&&this._objectsToTest.splice(n,1)}}}update(){let e;if(this._renderer.xr.isPresenting&&this._vrControl?(this._vrControl.setFromController(0,this._raycaster.ray),e=this._raycast(),e&&this._vrControl.setPointerAt(0,e.point)):null!==this._mouse.x&&null!==this._mouse.y&&(this._raycaster.setFromCamera(this._mouse,this._camera),e=this._raycast()),e){const t=e.object;this._lastIntersectObject=e,this._lastHoveredElement!==t&&this._setHoveredElement(t),this._selectState?this._lastSelectedElement!==t&&this._setSelectedElement(t):null!==this._lastSelectedElement&&this._setSelectedElement(null)}else null!==this._lastSelectedElement&&this._setSelectedElement(null),null!==this._lastHoveredElement&&this._setHoveredElement(null)}set camera(e){this._camera=e}get camera(){return this._camera}_raycast(){return this._objectsToTest.reduce(((e,t)=>{if(!this._scene.getObjectById(t.id))return e;const s=this._raycaster.intersectObject(t,!0);return s[0]&&(!e||s[0].distance<e.distance)?(s[0].object=t,s[0]):e}),null)}_elementClicked(e){delete e.object,e.type="click",this.dispatchEvent(e)}}class ve extends R{constructor(e,t="crosshair"){super(),this._cursor=t,this._htmlElement=e,this._lastValue="inherit"}hoveredElementHasChanged(e){null!==e&&"inherit"===this._lastValue?(this._htmlElement.style.cursor=this._cursor,this._lastValue=this._cursor):null===e&&"inherit"!==this._lastValue&&(this._htmlElement.style.cursor="inherit",this._lastValue="inherit")}selectedElementHasChanged(e){}clicked(e){}}var ye=s("./node_modules/three/examples/jsm/webxr/XRControllerModelFactory.js");function we(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),s=t.createLinearGradient(0,0,64,0);return s.addColorStop(0,"black"),s.addColorStop(1,"white"),t.fillStyle=s,t.fillRect(0,0,64,64),e}function xe(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d");return t.beginPath(),t.arc(32,32,29,0,2*Math.PI),t.lineWidth=5,t.stroke(),t.fillStyle="white",t.fill(),e}let ke,Ce,Ee,Se,Pe,je,Le,Oe,Ie,Ae;const Te=[];function Ne(){o.ZP.update(),Se.update(),je.update(),_e&&(le(),_e=!1),Le.rotation.z+=.01,Le.rotation.y+=.01,Ee.render(ke,Ce)}!function(e,t="three-mesh-ui"){const s=document.createElement("style");s.setAttribute("media",t),s.textContent=e,document.head.appendChild(s)}('\n\n:root{\n\n\tbackground-color : rgba(0,0,0,0.75);\n\tpadding: 0.05rem 0.125rem;\n\tborder-radius: 0.2rem 0.02rem 0.2rem 0.02rem;\n\talign-items: start;\n\n}\n\nbutton[type="toggle"]{\n\n\tfont-size: 0.055rem;\n\n\twidth : 0.5rem;\n\tmargin: 0.01rem;\n\n\tborder-radius: 0.02rem;\n\n\ttext-align: left;\n\trx: 0.005rem;\n\n}\n\nbutton[type="toggle"] ascent {\n\n\trx : 0;\n\tbackground-color : rgba(0,0,0,0.05);\n\tborder-width: 0.01rem;\n\tborder-color: rgba(255,255,255,.9);\n\n}\n\nbutton[type="toggle"]:hover ascent{\n\n\trx : 0.025rem;\n\n}\n\nbutton[type="toggle"]:disabled {\n\n\tcolor: rgba( 255,255,255,0.5);\n\n}\n\nbutton[type="toggle"]:disabled ascent {\n\n\tborder-color: rgba( 128,128,128,0.5);\n\n}\n\nbutton[type="toggle"]:disabled:hover ascent {\n\n\trx : 0.015rem;\n\n}\n\nbutton[type="toggle"]:active ascent {\n\n\trx : 0.01rem;\n\n}\n\nbutton[type="toggle"]:checked ascent {\n\n\tbackground-color : rgba(0,225,128,.85);\n\n}\n\nbutton[type="toggle"]:checked:hover ascent {\n\nbackground-color : rgba(0,225,128,.99);\n\n}\n\n'),window.addEventListener("load",(function(){ke=new n.xsS,ke.background=new n.Ilk(5263440),Ce=new n.cPb(75,window.innerWidth/window.innerHeight,.1,1e3),Ee=new n.CP7({antialias:!0}),Ee.setPixelRatio(window.devicePixelRatio),Ee.setSize(window.innerWidth,window.innerHeight),Ee.outputEncoding=n.knz,Ee.xr.enabled=!0,document.body.appendChild(i.N.createButton(Ee)),document.body.appendChild(Ee.domElement),Se=new a.z(Ce,Ee.domElement),Ce.position.set(0,1.6,0),Se.target=new n.Pa4(0,1,-1.8);const e=new n.ejS(new r.d(6,6,6,10,10,10).translate(0,3,0),new n.nls({color:8421504})),t=new n.Kj0(new n.DvJ(6,6,6,10,10,10).translate(0,3,0),new n.vBJ({side:n._Li}));ke.add(e),Te.push(t);const s=function(e){e||(e={});const t=e.x||2,s=e.y||10,i=e.z||-2,r=e.width||10,a=e.near||.1,o=e.far||30,l=e.bias||-0,c=e.resolution||2048,h=e.color||16777215,d=e.intensity||1,u=e.useHelpers||!1,_=e.castShadow||!0,m=new n.Ox3(h,d);m.position.set(t,s,i),m.castShadow=_;const p=r/2;if(m.shadow.camera.left=-p,m.shadow.camera.right=p,m.shadow.camera.top=p,m.shadow.camera.bottom=-p,m.shadow.camera.near=a,m.shadow.camera.far=o,m.shadow.mapSize.width=c,m.shadow.mapSize.height=c,m.shadow.bias=l,m.helpers=new n.ZAu,u){const e=new n.cBI(m,5),t=new n.Rki(m.shadow.camera);m.helpers.add(e,t)}return m}({z:10,width:6,bias:-1e-4,intensity:1.8});ke.add(s),Pe=function(e){const t=[],s=[],i=new ye.i,r=new n.vBJ({color:16777215,alphaMap:new n.ROQ(we()),transparent:!0}),a=new n.DvJ(.004,.004,.35);a.translate(0,0,-.15);const o=a.attributes.uv;for(let e=0;e<o.count;e++){let t=o.getX(e),s=o.getY(e);[t,s]=(()=>{switch(e){case 0:case 2:case 5:case 7:case 10:case 11:case 12:case 13:return[1,1];default:return[0,0]}})(),o.setXY(e,t,s)}const l=new n.Kj0(a,r);l.renderOrder=1/0;const c=new n.xeV({map:new n.ROQ(xe()),sizeAttenuation:!1,depthTest:!1}),h=new n.jyi(c);h.scale.set(.015,.015,1),h.renderOrder=1/0;const d=e.xr.getController(0),u=e.xr.getController(1);d.name="controller-right",u.name="controller-left";const _=e.xr.getControllerGrip(0),m=e.xr.getControllerGrip(1);d&&t.push(d),u&&t.push(u),_&&s.push(_),m&&s.push(m),t.forEach((e=>{const t=l.clone(),s=h.clone();e.add(t,s),e.ray=t,e.point=s})),s.forEach((e=>{e.add(i.createControllerModel(e))}));const p=new n.yGw;return{controllers:t,controllerGrips:s,setFromController:function(e,s){const n=t[e];p.identity().extractRotation(n.matrixWorld),s.origin.setFromMatrixPosition(n.matrixWorld),s.direction.set(0,0,-1).applyMatrix4(p)},setPointerAt:function(e,s){const n=t[e],i=n.worldToLocal(s);n.point.position.copy(i),n.point.visible=!0}}}(Ee),ke.add(Pe.controllerGrips[0],Pe.controllers[0]),je=new fe(Ce,ke,Ee,Pe),je.start();const o=new ve(Ee.domElement,"pointer");je.addListener(o),Le=new n.ZAu,Le.position.set(-.5,1.25,-1.2),ke.add(Le),Oe=new n.Kj0(new n.cJO(.3,1),new n.Wid({color:4055908})),Ie=new n.Kj0(new n.DvJ(.45,.45,.45),new n.Wid({color:6569443})),Ae=new n.Kj0(new n.b_z(.22,.5,10).translate(0,.425,0),new n.Wid({color:14892366})),Oe.visible=Ie.visible=Ae.visible=!1,Le.add(Oe,Ie,Ae),function(){const e=ue("div");e.style.borderRadius=.11,e.style.justifyContent="center",e.style.flexDirection="column",e.style.padding="0.02 0.05",e.set({fontFamily:pe,fontTexture:ge,fontSize:.07}),e.position.set(.5,1.25,-1.2),e.rotation.x=-.55,ke.add(e);const t=ue("toggle",{name:"sphere",textContent:"Show sphere"});t.addEventListener("change",(e=>{Oe.visible=t.checked}));const s=ue("toggle");s.set({name:"disabled"}),s.disabled=!0,s.textContent="Disabled toggle";const n=ue("toggle",{name:"Icosahedron",textContent:"Show Icosahedron"});n.addEventListener("change",(e=>{Ae.visible=e.target.checked}));const i=ue("toggle",{name:"Icosahedron",textContent:"Show box"});i.addEventListener("change",(e=>{Ie.visible=i.checked}));const r=ue("toggle",{name:"flat",textContent:"Flatshading"});r.addEventListener("change",(e=>{Oe.material.flatShading=Ie.material.flatShading=Ae.material.flatShading=e.target.checked,Oe.material.needsUpdate=Ie.material.needsUpdate=Ae.material.needsUpdate=!0}));const a=ue("toggle",{name:"wire",textContent:"Wireframe"});a.addEventListener("change",(e=>{Oe.material.wireframe=Ie.material.wireframe=Ae.material.wireframe=e.target.checked})),e.add(t,s,n,i,r,a),je.addObject(t,s,n,i,r,a)}(),ie(),Ee.setAnimationLoop(Ne)})),window.addEventListener("resize",(function(){Ce.aspect=window.innerWidth/window.innerHeight,Ce.updateProjectionMatrix(),Ee.setSize(window.innerWidth,window.innerHeight)}))}},s={};function n(e){var i=s[e];if(void 0!==i)return i.exports;var r=s[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,s,i,r)=>{if(!s){var a=1/0;for(h=0;h<e.length;h++){for(var[s,i,r]=e[h],o=!0,l=0;l<s.length;l++)(!1&r||a>=r)&&Object.keys(n.O).every((e=>n.O[e](s[l])))?s.splice(l--,1):(o=!1,r<a&&(a=r));if(o){e.splice(h--,1);var c=i();void 0!==c&&(t=c)}}return t}r=r||0;for(var h=e.length;h>0&&e[h-1][2]>r;h--)e[h]=e[h-1];e[h]=[s,i,r]},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j="ex__toggle_button_htm",(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var s=t.getElementsByTagName("script");s.length&&(e=s[s.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={ex__toggle_button_htm:0};n.O.j=t=>0===e[t];var t=(t,s)=>{var i,r,[a,o,l]=s,c=0;if(a.some((t=>0!==e[t]))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(l)var h=l(n)}for(t&&t(s);c<a.length;c++)r=a[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(h)},s=self.webpackChunkthree_mesh_ui=self.webpackChunkthree_mesh_ui||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var i=n.O(void 0,["chunk_imported-assets","chunk_three-mesh-ui","chunk_vendors"],(()=>n("./examples/ex__toggle_button_htm.js")));i=n.O(i)})();