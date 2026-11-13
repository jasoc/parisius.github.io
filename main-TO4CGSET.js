import{a as go$1,c as zn$2,i as dn$2,n as Wi$1,o as le$2,s as yt$1,t as Vn$2}from"./chunk-B92ZQsVu.js";import{$ as RE,$n as we$1,A as J$2,An as q$1,At as ag,B as Mn$2,Bn as sr$1,Bt as bn$2,C as G$1,Cn as nr$1,D as IL,Dt as _h,En as ou,Et as _L,F as Kf,Fn as sE,Ft as ay,G as Ny,Gn as tt$2,Gt as dI,H as N,Hn as tE,Ht as ch,I as LE,In as si$2,J as Ol,Jn as uh,Jt as dp,Kn as ua,Kt as dg,Ln as sl,M as Jp,Mn as rE,Nn as rc,Nt as ao$1,O as Ih,On as pe$1,Ot as ad,P as Kc,Pn as re,Pt as ar$1,Q as Ql,Qn as wL,Qt as eh,R as Mg,Rt as be,S as FE,Sn as mh,St as Zf,T as HE,Tt as _E,U as Nh,Ut as ci$2,V as Mt$2,Vn as su,W as Nn$2,Wn as tr$1,X as Pf,Xt as eI,Yn as vI,Yt as dt$2,Zn as w$2,Zt as ec,_n as lg,_t as Wf,an as he$1,ar as yL,at as Sn$2,b as EI,bn as mL,bt as Ye$1,c as Bm,cn as ic,cr as zn$3,ct as TI,d as CI,dt as U$3,en as ep,er as wh,f as CL,ft as UE,g as DI,gn as kl,h as DE,hn as jo$1,ht as Vf,i as Af,in as gh,ir as yE,j as Jf,jn as qf,jt as ai$2,k as Ip,kn as ph,kt as ae$2,l as Bp,lt as TL,m as Ch,mt as Ur,nr as xh,nt as Rf,o as BE,on as hh,or as yv,ot as T,p as Ce$1,pn as jE,pt as Uf,q as Oe$3,qn as ug,qt as dh,r as A,rn as ft$2,rr as xi$2,rt as Rs,s as Bf,sn as hn$2,sr as zg,st as TE,t as $$2,tn as fh,tr as wo$1,u as CE,un as ip,ut as Th,v as Dh,vt as Xf,w as Gf,wn as oc,wt as Zo,x as Eh,xt as Yr,y as Dp,yn as lt$4,yt as Xp,zn as so$1,zt as bh}from"./chunk-Bp7w4L2G.js";var Nt$2=/* @__PURE__ */ new WeakMap;var V$1=(()=>{class n{_appRef;_injector=w$2(re);_environmentInjector=w$2(pe$1);load(t){let e=this._appRef=this._appRef||this._injector.get(ci$2),a=Nt$2.get(e);a||(a={loaders:/* @__PURE__ */ new Set,refs:[]},Nt$2.set(e,a),e.onDestroy(()=>{Nt$2.get(e)?.refs.forEach(i=>i.destroy()),Nt$2.delete(e)})),a.loaders.has(t)||(a.loaders.add(t),a.refs.push(TL(t,{environmentInjector:this._environmentInjector})))}static ɵfac=function(e){return new(e||n)};static ɵprov=sr$1({token:n,factory:n.ɵfac})}return n})();var zt$1=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=tE({type:n,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(e,a){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return n})();var wt$1;function xn$1(){if(wt$1===void 0&&(wt$1=null,typeof window<`u`)){let n=window;if(n.trustedTypes!==void 0)try{wt$1=n.trustedTypes.createPolicy(`angular#components`,{createHTML:o=>o})}catch(o){console.error(o)}}return wt$1}function W$1(n){return xn$1()?.createHTML(n)||n}function De$1(n,o,t){n.innerHTML=W$1(t.sanitize(q$1.HTML,o)||``)}function Fe$1(n){return Error(`Unable to find icon with the name "${n}"`)}function Sn$1(){return Error(`Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.`)}function Re$2(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function Oe$2(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var R=class{url;svgText;options;svgElement=null;constructor(o,t,e){this.url=o,this.svgText=t,this.options=e}};var Le$1=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=/* @__PURE__ */ new Map;_iconSetConfigs=/* @__PURE__ */ new Map;_cachedIconsByUrl=/* @__PURE__ */ new Map;_inProgressUrlFetches=/* @__PURE__ */ new Map;_fontCssClassesByAlias=/* @__PURE__ */ new Map;_resolvers=[];_defaultFontSetClass;constructor(t,e,a,i){this._httpClient=t,this._sanitizer=e,this._errorHandler=i,this._document=a}addSvgIcon(t,e,a){return this.addSvgIconInNamespace(``,t,e,a)}addSvgIconLiteral(t,e,a){return this.addSvgIconLiteralInNamespace(``,t,e,a)}addSvgIconInNamespace(t,e,a,i){return this._addSvgIconConfig(t,e,new R(a,null,i))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,a,i){let r=this._sanitizer.sanitize(q$1.HTML,a);if(!r)throw Oe$2(a);let c=W$1(r);return this._addSvgIconConfig(t,e,new R(``,c,i))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace(``,t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace(``,t,e)}addSvgIconSetInNamespace(t,e,a){return this._addSvgIconSetConfig(t,new R(e,null,a))}addSvgIconSetLiteralInNamespace(t,e,a){let i=this._sanitizer.sanitize(q$1.HTML,e);if(!i)throw Oe$2(e);let r=W$1(i);return this._addSvgIconSetConfig(t,new R(``,r,a))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass??=wn$1(this._document),this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(q$1.RESOURCE_URL,t);if(!e)throw Re$2(t);let a=this._cachedIconsByUrl.get(e);return a?Jp(Et$1(a)):this._loadSvgIconFromConfig(new R(t,null)).pipe(Nh(i=>this._cachedIconsByUrl.set(e,i)),dt$2(i=>Et$1(i)))}getNamedSvgIcon(t,e=``){let a=Pe$2(e,t),i=this._svgIconConfigs.get(a);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(e,t),i)return this._svgIconConfigs.set(a,i),this._getSvgFromConfig(i);let r=this._iconSetConfigs.get(e);return r?this._getSvgFromIconSetConfigs(t,r):Xp(Fe$1(a))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?Jp(Et$1(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(dt$2(e=>Et$1(e)))}_getSvgFromIconSetConfigs(t,e){let a=this._extractIconWithNameFromAnySet(t,e);if(a)return Jp(a);let i=e.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(Kc(c=>{let h=`Loading icon set URL: ${this._sanitizer.sanitize(q$1.RESOURCE_URL,r.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(h)),Jp(null)})));return dh(i).pipe(dt$2(()=>{let r=this._extractIconWithNameFromAnySet(t,e);if(!r)throw Fe$1(t);return r}))}_extractIconWithNameFromAnySet(t,e){for(let a=e.length-1;a>=0;a--){let i=e[a];if(i.svgText&&i.svgText.toString().indexOf(t)>-1){let r=this._svgElementFromConfig(i),c=this._extractSvgIconFromSet(r,t,i.options);if(c)return c}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(Nh(e=>t.svgText=e),dt$2(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?Jp(null):this._fetchIcon(t).pipe(Nh(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,a){let i=t.querySelector(`[id="${e}"]`);if(!i)return null;let r=i.cloneNode(!0);if(r.removeAttribute(`id`),r.nodeName.toLowerCase()===`svg`)return this._setSvgAttributes(r,a);if(r.nodeName.toLowerCase()===`symbol`)return this._setSvgAttributes(this._toSvgElement(r),a);let c=this._svgElementFromString(W$1(`<svg></svg>`));return c.appendChild(r),this._setSvgAttributes(c,a)}_svgElementFromString(t){let e=this._document.createElement(`DIV`);e.innerHTML=t;let a=e.querySelector(`svg`);if(!a)throw Error(`<svg> tag not found`);return a}_toSvgElement(t){let e=this._svgElementFromString(W$1(`<svg></svg>`)),a=t.attributes;for(let i=0;i<a.length;i++){let{name:r,value:c}=a[i],d=r.toLowerCase();d!==`id`&&!d.startsWith(`on`)&&e.setAttribute(r,c)}for(let i=0;i<t.childNodes.length;i++)t.childNodes[i].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[i].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute(`fit`,``),t.setAttribute(`height`,`100%`),t.setAttribute(`width`,`100%`),t.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),t.setAttribute(`focusable`,`false`),e&&e.viewBox&&t.setAttribute(`viewBox`,e.viewBox),t}_fetchIcon(t){let{url:e,options:a}=t,i=a?.withCredentials??!1;if(!this._httpClient)throw Sn$1();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let r=this._sanitizer.sanitize(q$1.RESOURCE_URL,e);if(!r)throw Re$2(e);let c=this._inProgressUrlFetches.get(r);if(c)return c;let d=this._httpClient.get(r,{responseType:`text`,withCredentials:i}).pipe(dt$2(h=>W$1(h)),Eh(()=>this._inProgressUrlFetches.delete(r)),wh());return this._inProgressUrlFetches.set(r,d),d}_addSvgIconConfig(t,e,a){return this._svgIconConfigs.set(Pe$2(t,e),a),this}_addSvgIconSetConfig(t,e){let a=this._iconSetConfigs.get(t);return a?a.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let a=0;a<this._resolvers.length;a++){let i=this._resolvers[a](e,t);if(i)return Nn$1(i)?new R(i.url,null,i.options):new R(i,null)}}static ɵfac=function(e){return new(e||n)(Ce$1(Vn$2,8),Ce$1(zn$2),Ce$1(zn$3,8),Ce$1(Ye$1))};static ɵprov=ae$2({token:n,factory:n.ɵfac,providedIn:`root`})}return n})();function Et$1(n){return n.cloneNode(!0)}function Pe$2(n,o){return n+`:`+o}function Nn$1(n){return!!(n.url&&n.options)}function wn$1(n){let o=null,t=!1;return n.fonts&&typeof n.fonts.forEach==`function`&&n.fonts.forEach(e=>{let a=e.family.replace(/['"]/g,``).trim().toLowerCase();(a===`material icons`||a.startsWith(`material icons `))&&(t=!0),a.startsWith(`material symbols rounded`)?o=`rounded`:a.startsWith(`material symbols sharp`)?o=`sharp`:a.startsWith(`material symbols`)&&(o=`outlined`)}),[o&&!t?`material-symbols-${o}`:`material-icons`,`mat-ligature-font`]}var En$1=new A(`cdk-dir-doc`,{providedIn:`root`,factory:()=>w$2(zn$3)});var In$1=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function ze$1(n){let o=n?.toLowerCase()||``;return o===`auto`&&typeof navigator<`u`&&navigator?.language?In$1.test(navigator.language)?`rtl`:`ltr`:o===`rtl`?`rtl`:`ltr`}var Mn$1=(()=>{class n{get value(){return this.valueSignal()}valueSignal=wo$1(`ltr`);change=new Oe$3;constructor(){let t=w$2(En$1,{optional:!0});if(t){let e=t.body?t.body.dir:null,a=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(ze$1(e||a||`ltr`))}}ngOnDestroy(){this.change.complete()}static ɵfac=function(e){return new(e||n)};static ɵprov=sr$1({token:n,factory:n.ɵfac})}return n})();var X$2=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=rE({type:n});static ɵinj=sl({})}return n})();var An$1=new A(`MAT_ICON_DEFAULT_OPTIONS`);var kn$1=new A(`mat-icon-location`,{providedIn:`root`,factory:()=>{let n=w$2(zn$3),o=n?n.location:null;return{getPathname:()=>o?o.pathname+o.search:``}}});var Be$1=[`clip-path`,`color-profile`,`src`,`cursor`,`fill`,`filter`,`marker`,`marker-start`,`marker-mid`,`marker-end`,`mask`,`stroke`];var Cn$1=Be$1.map(n=>`[${n}]`).join(`, `);var Tn$1=/^url\(['"]?#(.*?)['"]?\)$/;var Ta=(()=>{class n{_elementRef=w$2(ar$1);_iconRegistry=w$2(Le$1);_location=w$2(kn$1);_errorHandler=w$2(Ye$1);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=G$1.EMPTY;constructor(){let t=w$2(new Dp(`aria-hidden`),{optional:!0}),e=w$2(An$1,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute(`aria-hidden`,`true`)}_splitIconName(t){if(!t)return[``,``];let e=t.split(`:`);switch(e.length){case 1:return[``,e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let a=t.childNodes[e];(a.nodeType!==1||a.nodeName.toLowerCase()===`svg`)&&a.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(a=>a.length>0);this._previousFontSetClass.forEach(a=>t.classList.remove(a)),e.forEach(a=>t.classList.add(a)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes(`mat-ligature-font`)&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t==`string`?t.trim().split(` `)[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences,a=t.startsWith(`//`)?`/.${t}`:t;e&&e.forEach((i,r)=>{i.forEach(c=>{r.setAttribute(c.name,`url('${a}#${c.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(Cn$1),a=this._elementsWithExternalReferences=this._elementsWithExternalReferences||/* @__PURE__ */ new Map;for(let i=0;i<e.length;i++)Be$1.forEach(r=>{let c=e[i],d=c.getAttribute(r),h=d?d.match(Tn$1):null;if(h){let u=a.get(c);u||(u=[],a.set(c,u)),u.push({name:r,value:h[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,a]=this._splitIconName(t);e&&(this._svgNamespace=e),a&&(this._svgName=a),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(a,e).pipe(xi$2(1)).subscribe(i=>this._setSvgElement(i),i=>{let r=`Error retrieving icon ${e}:${a}! ${i.message}`;this._errorHandler.handleError(new Error(r))})}}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){return tE({type:n,selectors:[[`mat-icon`]],hostAttrs:[`role`,`img`,1,`mat-icon`,`notranslate`],hostVars:10,hostBindings:function(a,i){a&2&&(Uf(`data-mat-icon-type`,i._usingFontIcon()?`font`:`svg`)(`data-mat-icon-name`,i._svgName||i.fontIcon)(`data-mat-icon-namespace`,i._svgNamespace||i.fontSet)(`fontIcon`,i._usingFontIcon()?i.fontIcon:null),eI(i.color?`mat-`+i.color:``),ip(`mat-icon-inline`,i.inline)(`mat-icon-no-color`,i.color!==`primary`&&i.color!==`accent`&&i.color!==`warn`))},inputs:{color:`color`,inline:[2,`inline`,`inline`,wL],svgIcon:`svgIcon`,fontSet:`fontSet`,fontIcon:`fontIcon`},exportAs:[`matIcon`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(a,i){a&1&&(FE(),jE(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})})()}return n})();var Da=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=rE({type:n});static ɵinj=sl({imports:[X$2]})}return n})();function ot$3(n){return n.buttons===0||n.detail===0}function it$3(n){let o=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!o&&o.identifier===-1&&(o.radiusX==null||o.radiusX===1)&&(o.radiusY==null||o.radiusY===1)}var Bt$1;function Ue$1(){if(Bt$1==null){let n=typeof document<`u`?document.head:null;Bt$1=!!(n&&(n.createShadowRoot||n.attachShadow))}return Bt$1}function Ut$1(n){if(Ue$1()){let o=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&o instanceof ShadowRoot)return o}return null}function k(n){if(n.composedPath)try{return n.composedPath()[0]}catch{}return n.target}var jt$1;try{jt$1=typeof Intl<`u`&&Intl.v8BreakIterator}catch{jt$1=!1}var x=(()=>{class n{_platformId=w$2(lg);isBrowser=this._platformId?Wi$1(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||jt$1)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(e){return new(e||n)};static ɵprov=sr$1({token:n,factory:n.ɵfac})}return n})();var rt$2;function je$1(){if(rt$2==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>rt$2=!0}))}finally{rt$2=rt$2||!1}return rt$2}function J$1(n){return je$1()?n:!!n.capture}function Dn$1(n,o=0){return He$1(n)?Number(n):arguments.length===2?o:0}function He$1(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function U$2(n){return n instanceof ar$1?n.nativeElement:n}var Ve$1=new A(`cdk-input-modality-detector-options`);var We$1={ignoreKeys:[18,17,224,91,16]};var Ke=650;var Ht$1={passive:!0,capture:!0};var $e$1=(()=>{class n{_platform=w$2(x);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new bn$2(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=k(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<Ke||(this._modality.next(ot$3(t)?`keyboard`:`mouse`),this._mostRecentTarget=k(t))};_onTouchstart=t=>{if(it$3(t)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=k(t)};constructor(){let t=w$2(be),e=w$2(zn$3),a=w$2(Ve$1,{optional:!0});if(this._options=$$2($$2({},We$1),a),this.modalityDetected=this._modality.pipe(Ch(1)),this.modalityChanged=this.modalityDetected.pipe(mh()),this._platform.isBrowser){let i=w$2(nr$1).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[i.listen(e,`keydown`,this._onKeydown,Ht$1),i.listen(e,`mousedown`,this._onMousedown,Ht$1),i.listen(e,`touchstart`,this._onTouchstart,Ht$1)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static ɵfac=function(e){return new(e||n)};static ɵprov=sr$1({token:n,factory:n.ɵfac})}return n})();var st$2=(function(n){return n[n.IMMEDIATE=0]=`IMMEDIATE`,n[n.EVENTUAL=1]=`EVENTUAL`,n})(st$2||{});var Ze=new A(`cdk-focus-monitor-default-options`);var It$1=J$1({passive:!0,capture:!0});var Vt$1=(()=>{class n{_ngZone=w$2(be);_platform=w$2(x);_inputModalityDetector=w$2($e$1);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=/* @__PURE__ */ new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=/* @__PURE__ */ new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=w$2(zn$3);_stopInputModalityDetector=new J$2;constructor(){let t=w$2(Ze,{optional:!0});this._detectionMode=t?.detectionMode||st$2.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=k(t);for(let a=e;a;a=a.parentElement)t.type===`focus`?this._onFocus(t,a):this._onBlur(t,a)};monitor(t,e=!1){let a=U$2(t);if(!this._platform.isBrowser||a.nodeType!==1)return Jp();let i=Ut$1(a)||this._document,r=this._elementInfo.get(a);if(r)return e&&(r.checkChildren=!0),r.subject;let c={checkChildren:e,subject:new J$2,rootNode:i};return this._elementInfo.set(a,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(t){let e=U$2(t),a=this._elementInfo.get(e);a&&(a.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(a))}focusVia(t,e,a){let i=U$2(t);i===this._document.activeElement?this._getClosestElementsInfo(i).forEach(([c,d])=>this._originChanged(c,e,d)):(this._setOrigin(e),typeof i.focus==`function`&&i.focus(a))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?`mouse`:`program`}_shouldBeAttributedToTouch(t){return this._detectionMode===st$2.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle(`cdk-focused`,!!e),t.classList.toggle(`cdk-touch-focused`,e===`touch`),t.classList.toggle(`cdk-keyboard-focused`,e===`keyboard`),t.classList.toggle(`cdk-mouse-focused`,e===`mouse`),t.classList.toggle(`cdk-program-focused`,e===`program`)}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t===`touch`&&e,this._detectionMode===st$2.IMMEDIATE){clearTimeout(this._originTimeoutId);let a=this._originFromTouchInteraction?Ke:1;this._originTimeoutId=setTimeout(()=>this._origin=null,a)}})}_onFocus(t,e){let a=this._elementInfo.get(e),i=k(t);!a||!a.checkChildren&&e!==i||this._originChanged(e,this._getFocusOrigin(i),a)}_onBlur(t,e){let a=this._elementInfo.get(e);!a||a.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(a,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,a=this._rootNodeFocusListenerCount.get(e)||0;a||this._ngZone.runOutsideAngular(()=>{e.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,It$1),e.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,It$1)}),this._rootNodeFocusListenerCount.set(e,a+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(_h(this._stopInputModalityDetector)).subscribe(i=>{this._setOrigin(i,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let a=this._rootNodeFocusListenerCount.get(e);a>1?this._rootNodeFocusListenerCount.set(e,a-1):(e.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,It$1),e.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,It$1),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,a){this._setClasses(t,e),this._emitOrigin(a,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((a,i)=>{(i===t||a.checkChildren&&i.contains(t))&&e.push([i,a])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:a}=this._inputModalityDetector;if(a!==`mouse`||!e||e===t||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`||t.disabled)return!1;let i=t.labels;if(i){for(let r=0;r<i.length;r++)if(i[r].contains(e))return!0}return!1}static ɵfac=function(e){return new(e||n)};static ɵprov=sr$1({token:n,factory:n.ɵfac})}return n})();function Wt$2(n){return Array.isArray(n)?n:[n]}var Ge$1=/* @__PURE__ */ new Set;var K;var Mt$1=(()=>{class n{_platform=w$2(x);_nonce=w$2(dg,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Rn$1}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&Fn$1(t,this._nonce),this._matchMedia(t)}static ɵfac=function(e){return new(e||n)};static ɵprov=sr$1({token:n,factory:n.ɵfac})}return n})();function Fn$1(n,o){if(!Ge$1.has(n))try{K||(K=document.createElement(`style`),o&&K.setAttribute(`nonce`,o),K.setAttribute(`type`,`text/css`),document.head.appendChild(K)),K.sheet&&(K.sheet.insertRule(`@media ${n.replace(/[{}]/g,``)} {body{ }}`,0),Ge$1.add(n))}catch(t){console.error(t)}}function Rn$1(n){return{matches:n===`all`||n===``,media:n,addListener:()=>{},removeListener:()=>{}}}var Kt$2=(()=>{class n{_mediaMatcher=w$2(Mt$1);_zone=w$2(be);_queries=/* @__PURE__ */ new Map;_destroySubject=new J$2;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return Ye(Wt$2(t)).some(a=>this._registerQuery(a).mql.matches)}observe(t){let a=Ye(Wt$2(t)).map(r=>this._registerQuery(r).observable),i=ch(a);return i=Ur(i.pipe(xi$2(1)),i.pipe(Ch(1),gh(0))),i.pipe(dt$2(r=>{let c={matches:!1,breakpoints:{}};return r.forEach(({matches:d,query:h})=>{c.matches=c.matches||d,c.breakpoints[h]=d}),c}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let e=this._mediaMatcher.matchMedia(t),i={observable:new T(r=>{let c=d=>this._zone.run(()=>r.next(d));return e.addListener(c),()=>{e.removeListener(c)}}).pipe(bh(e),dt$2(({matches:r})=>({query:t,matches:r})),_h(this._destroySubject)),mql:e};return this._queries.set(t,i),i}static ɵfac=function(e){return new(e||n)};static ɵprov=sr$1({token:n,factory:n.ɵfac})}return n})();function Ye(n){return n.map(o=>o.split(`,`)).reduce((o,t)=>o.concat(t)).map(o=>o.trim())}var On$1=(()=>{class n{create(t){return typeof MutationObserver>`u`?null:new MutationObserver(t)}static ɵfac=function(e){return new(e||n)};static ɵprov=sr$1({token:n,factory:n.ɵfac})}return n})();var qe$2=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=rE({type:n});static ɵinj=sl({providers:[On$1]})}return n})();var Je=new A(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var tn$1=new A(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var Pn$1=0;var Ln$1=(()=>{class n{_ngZone=w$2(be);_defaultOptions=w$2(tn$1,{optional:!0});_liveElement;_document=w$2(zn$3);_sanitizer=w$2(zn$2);_previousTimeout;_currentPromise;_currentResolve;constructor(){let t=w$2(Je,{optional:!0});this._liveElement=t||this._createLiveElement()}announce(t,...e){let a=this._defaultOptions,i,r;return e.length===1&&typeof e[0]==`number`?r=e[0]:[i,r]=e,this.clear(),clearTimeout(this._previousTimeout),i||(i=a&&a.politeness?a.politeness:`polite`),r==null&&a&&(r=a.duration),this._liveElement.setAttribute(`aria-live`,i),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!t||typeof t==`string`?this._liveElement.textContent=t:De$1(this._liveElement,t,this._sanitizer),typeof r==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),r)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t=`cdk-live-announcer-element`,e=this._document.getElementsByClassName(t),a=this._document.createElement(`div`);for(let i=0;i<e.length;i++)e[i].remove();return a.classList.add(t),a.classList.add(`cdk-visually-hidden`),a.setAttribute(`aria-atomic`,`true`),a.setAttribute(`aria-live`,`polite`),a.id=`cdk-live-announcer-${Pn$1++}`,this._document.body.appendChild(a),a}_exposeAnnouncerToModals(t){let e=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let a=0;a<e.length;a++){let i=e[a],r=i.getAttribute(`aria-owns`);r?r.indexOf(t)===-1&&i.setAttribute(`aria-owns`,r+` `+t):i.setAttribute(`aria-owns`,t)}}static ɵfac=function(e){return new(e||n)};static ɵprov=sr$1({token:n,factory:n.ɵfac})}return n})();var j$2=(function(n){return n[n.NONE=0]=`NONE`,n[n.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,n[n.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,n})(j$2||{});var Qe$1=`cdk-high-contrast-black-on-white`;var Xe=`cdk-high-contrast-white-on-black`;var $t$1=`cdk-high-contrast-active`;var en$1=(()=>{class n{_platform=w$2(x);_hasCheckedHighContrastMode=!1;_document=w$2(zn$3);_breakpointSubscription;constructor(){this._breakpointSubscription=w$2(Kt$2).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return j$2.NONE;let t=this._document.createElement(`div`);t.style.backgroundColor=`rgb(1,2,3)`,t.style.position=`absolute`,this._document.body.appendChild(t);let e=this._document.defaultView||window,a=e&&e.getComputedStyle?e.getComputedStyle(t):null,i=(a&&a.backgroundColor||``).replace(/ /g,``);switch(t.remove(),i){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return j$2.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return j$2.BLACK_ON_WHITE}return j$2.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove($t$1,Qe$1,Xe),this._hasCheckedHighContrastMode=!0;let e=this.getHighContrastMode();e===j$2.BLACK_ON_WHITE?t.add($t$1,Qe$1):e===j$2.WHITE_ON_BLACK&&t.add($t$1,Xe)}}static ɵfac=function(e){return new(e||n)};static ɵprov=sr$1({token:n,factory:n.ɵfac})}return n})();var zn$1=(()=>{class n{constructor(){w$2(en$1)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(e){return new(e||n)};static ɵmod=rE({type:n});static ɵinj=sl({imports:[qe$2]})}return n})();var Bn$1=200;var At$1=class{_letterKeyStream=new J$2;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new J$2;selectedItem=this._selectedItem;constructor(o,t){let e=typeof t?.debounceInterval==`number`?t.debounceInterval:Bn$1;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(o),this._setupKeyHandler(e)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(o){this._selectedItemIndex=o}setItems(o){this._items=o}handleKey(o){let t=o.keyCode;o.key&&o.key.length===1?this._letterKeyStream.next(o.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(o){this._letterKeyStream.pipe(Nh(t=>this._pressedLetters.push(t)),gh(o),Sn$2(()=>this._pressedLetters.length>0),dt$2(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(t=>{for(let e=1;e<this._items.length+1;e++){let a=(this._selectedItemIndex+e)%this._items.length,i=this._items[a];if(!this._skipPredicateFn?.(i)&&i.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(i);break}}this._pressedLetters=[]})}};function nn$1(n,...o){return o.length?o.some(t=>n[t]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var kt=class{_items;_activeItemIndex=wo$1(-1);_activeItem=wo$1(null);_wrap=!1;_typeaheadSubscription=G$1.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=o=>o.disabled;constructor(o,t){this._items=o,o instanceof jo$1?this._itemChangesSubscription=o.changes.subscribe(e=>this._itemsChanged(e.toArray())):Rs(o)&&(this._effectRef=su(()=>this._itemsChanged(o()),{injector:t}))}tabOut=new J$2;change=new J$2;skipPredicate(o){return this._skipPredicateFn=o,this}withWrap(o=!0){return this._wrap=o,this}withVerticalOrientation(o=!0){return this._vertical=o,this}withHorizontalOrientation(o){return this._horizontal=o,this}withAllowedModifierKeys(o){return this._allowedModifierKeys=o,this}withTypeAhead(o=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new At$1(t,{debounceInterval:typeof o==`number`?o:void 0,skipPredicate:e=>this._skipPredicateFn(e)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(e=>{this.setActiveItem(e)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(o=!0){return this._homeAndEnd=o,this}withPageUpDown(o=!0,t=10){return this._pageUpAndDown={enabled:o,delta:t},this}setActiveItem(o){let t=this._activeItem();this.updateActiveItem(o),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(o){let t=o.keyCode,a=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(i=>!o[i]||this._allowedModifierKeys.indexOf(i)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&a){this.setNextItemActive();break}else return;case 38:if(this._vertical&&a){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&a){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&a){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&a){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&a){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&a){let i=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(i>0?i:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&a){let i=this._activeItemIndex()+this._pageUpAndDown.delta,r=this._getItemsArray().length;this._setActiveItemByIndex(i<r?i:r-1,-1);break}else return;default:(a||nn$1(o,`shiftKey`))&&this._typeahead?.handleKey(o);return}this._typeahead?.reset(),o.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(o){let t=this._getItemsArray(),e=typeof o==`number`?o:t.indexOf(o),a=t[e];this._activeItem.set(a??null),this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(o){this._wrap?this._setActiveInWrapMode(o):this._setActiveInDefaultMode(o)}_setActiveInWrapMode(o){let t=this._getItemsArray();for(let e=1;e<=t.length;e++){let a=(this._activeItemIndex()+o*e+t.length)%t.length,i=t[a];if(!this._skipPredicateFn(i)){this.setActiveItem(a);return}}}_setActiveInDefaultMode(o){this._setActiveItemByIndex(this._activeItemIndex()+o,o)}_setActiveItemByIndex(o,t){let e=this._getItemsArray();if(e[o]){for(;this._skipPredicateFn(e[o]);)if(o+=t,!e[o])return;this.setActiveItem(o)}}_getItemsArray(){return Rs(this._items)?this._items():this._items instanceof jo$1?this._items.toArray():this._items}_itemsChanged(o){this._typeahead?.setItems(o);let t=this._activeItem();if(t){let e=o.indexOf(t);e>-1&&e!==this._activeItemIndex()&&(this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e))}}};var Zt$2=class extends kt{_origin=`program`;setFocusOrigin(o){return this._origin=o,this}setActiveItem(o){super.setActiveItem(o),this.activeItem&&this.activeItem.focus(this._origin)}};var an$1=/* @__PURE__ */ new Map;var Gt$2=class n{_appId=w$2(ou);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(o,t=!1){this._appId!==`ng`&&(o+=this._appId);let e=an$1.get(o);return e===void 0?e=0:e++,an$1.set(o,e),`${o}${t?n._infix+`-`:``}${e}`}static ɵfac=function(t){return new(t||n)};static ɵprov=sr$1({token:n,factory:n.ɵfac})};var rn$1=` `;function Un$1(n,o,t){let e=Tt$1(n,o);t=t.trim(),!e.some(a=>a.trim()===t)&&(e.push(t),n.setAttribute(o,e.join(rn$1)))}function jn$1(n,o,t){let e=Tt$1(n,o);t=t.trim();let a=e.filter(i=>i!==t);a.length?n.setAttribute(o,a.join(rn$1)):n.removeAttribute(o)}function Tt$1(n,o){return n.getAttribute(o)?.match(/\S+/g)??[]}var sn$1=`cdk-describedby-message`;var Ct$1=`cdk-describedby-host`;var qt$1=0;var pi$1=(()=>{class n{_platform=w$2(x);_document=w$2(zn$3);_messageRegistry=/* @__PURE__ */ new Map;_messagesContainer=null;_id=`${qt$1++}`;constructor(){w$2(V$1).load(zt$1),this._id=w$2(ou)+`-`+qt$1++}describe(t,e,a){if(!this._canBeDescribed(t,e))return;let i=Yt$2(e,a);typeof e!=`string`?(on$1(e,this._id),this._messageRegistry.set(i,{messageElement:e,referenceCount:0})):this._messageRegistry.has(i)||this._createMessageElement(e,a),this._isElementDescribedByMessage(t,i)||this._addMessageReference(t,i)}removeDescription(t,e,a){if(!e||!this._isElementNode(t))return;let i=Yt$2(e,a);if(this._isElementDescribedByMessage(t,i)&&this._removeMessageReference(t,i),typeof e==`string`){let r=this._messageRegistry.get(i);r&&r.referenceCount===0&&this._deleteMessageElement(i)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let t=this._document.querySelectorAll(`[${Ct$1}="${this._id}"]`);for(let e=0;e<t.length;e++)this._removeCdkDescribedByReferenceIds(t[e]),t[e].removeAttribute(Ct$1);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(t,e){let a=this._document.createElement(`div`);on$1(a,this._id),a.textContent=t,e&&a.setAttribute(`role`,e),this._createMessagesContainer(),this._messagesContainer.appendChild(a),this._messageRegistry.set(Yt$2(t,e),{messageElement:a,referenceCount:0})}_deleteMessageElement(t){this._messageRegistry.get(t)?.messageElement?.remove(),this._messageRegistry.delete(t)}_createMessagesContainer(){if(this._messagesContainer)return;let t=`cdk-describedby-message-container`,e=this._document.querySelectorAll(`.${t}[platform="server"]`);for(let i=0;i<e.length;i++)e[i].remove();let a=this._document.createElement(`div`);a.style.visibility=`hidden`,a.classList.add(t),a.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||a.setAttribute(`platform`,`server`),this._document.body.appendChild(a),this._messagesContainer=a}_removeCdkDescribedByReferenceIds(t){let e=Tt$1(t,`aria-describedby`).filter(a=>a.indexOf(sn$1)!=0);t.setAttribute(`aria-describedby`,e.join(` `))}_addMessageReference(t,e){let a=this._messageRegistry.get(e);Un$1(t,`aria-describedby`,a.messageElement.id),t.setAttribute(Ct$1,this._id),a.referenceCount++}_removeMessageReference(t,e){let a=this._messageRegistry.get(e);a.referenceCount--,jn$1(t,`aria-describedby`,a.messageElement.id),t.removeAttribute(Ct$1)}_isElementDescribedByMessage(t,e){let a=Tt$1(t,`aria-describedby`),i=this._messageRegistry.get(e),r=i&&i.messageElement.id;return!!r&&a.indexOf(r)!=-1}_canBeDescribed(t,e){if(!this._isElementNode(t))return!1;if(e&&typeof e==`object`)return!0;let a=e==null?``:`${e}`.trim(),i=t.getAttribute(`aria-label`);return a?!i||i.trim()!==a:!1}_isElementNode(t){return t.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(e){return new(e||n)};static ɵprov=sr$1({token:n,factory:n.ɵfac})}return n})();function Yt$2(n,o){return typeof n==`string`?`${o||``}/${n}`:n}function on$1(n,o){n.id||(n.id=`${sn$1}-${o}-${qt$1++}`)}var $$1;function xi$1(){if($$1==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return $$1=!1,$$1;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)$$1=!0;else{let n=Element.prototype.scrollTo;n?$$1=!/\{\s*\[native code\]\s*\}/.test(n.toString()):$$1=!1}}return $$1}function Ni$1(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var Ci$1={XSmall:`(max-width: 599.98px)`,Small:`(min-width: 600px) and (max-width: 959.98px)`,Medium:`(min-width: 960px) and (max-width: 1279.98px)`,Large:`(min-width: 1280px) and (max-width: 1919.98px)`,XLarge:`(min-width: 1920px)`,Handset:`(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)`,Tablet:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,Web:`(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)`,HandsetPortrait:`(max-width: 599.98px) and (orientation: portrait)`,TabletPortrait:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)`,WebPortrait:`(min-width: 840px) and (orientation: portrait)`,HandsetLandscape:`(max-width: 959.98px) and (orientation: landscape)`,TabletLandscape:`(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,WebLandscape:`(min-width: 1280px) and (orientation: landscape)`};var Hn$1=new A(`MATERIAL_ANIMATIONS`);var cn$1=null;function Vn$1(){return w$2(Hn$1,{optional:!0})?.animationsDisabled||w$2(ug,{optional:!0})===`NoopAnimations`?`di-disabled`:(cn$1??=w$2(Mt$1).matchMedia(`(prefers-reduced-motion)`).matches,cn$1?`reduced-motion`:`enabled`)}function tt$1(){return Vn$1()!==`enabled`}function Pi$1(n){return n==null?``:typeof n==`string`?n:`${n}px`}function zi$1(n){return n!=null&&`${n}`!=`false`}var w$1=(function(n){return n[n.FADING_IN=0]=`FADING_IN`,n[n.VISIBLE=1]=`VISIBLE`,n[n.FADING_OUT=2]=`FADING_OUT`,n[n.HIDDEN=3]=`HIDDEN`,n})(w$1||{});var Qt$2=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=w$1.HIDDEN;constructor(o,t,e,a=!1){this._renderer=o,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=a}fadeOut(){this._renderer.fadeOutRipple(this)}};var mn$1=J$1({passive:!0,capture:!0});var Xt$2=class{_events=/* @__PURE__ */ new Map;addHandler(o,t,e,a){let i=this._events.get(t);if(i){let r=i.get(e);r?r.add(a):i.set(e,/* @__PURE__ */ new Set([a]))}else this._events.set(t,/* @__PURE__ */ new Map([[e,/* @__PURE__ */ new Set([a])]])),o.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,mn$1)})}removeHandler(o,t,e){let a=this._events.get(o);if(!a)return;let i=a.get(t);i&&(i.delete(e),i.size===0&&a.delete(t),a.size===0&&(this._events.delete(o),document.removeEventListener(o,this._delegateEventHandler,mn$1)))}_delegateEventHandler=o=>{let t=k(o);t&&this._events.get(o.type)?.forEach((e,a)=>{(a===t||a.contains(t))&&e.forEach(i=>i.handleEvent(o))})}};var ct$3={enterDuration:225,exitDuration:150};var Wn$1=800;var dn$1=J$1({passive:!0,capture:!0});var ln$1=[`mousedown`,`touchstart`];var un$1=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var Kn$1=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=tE({type:n,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(e,a){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return n})();var mt$1=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=/* @__PURE__ */ new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Xt$2;constructor(o,t,e,a,i){this._target=o,this._ngZone=t,this._platform=a,a.isBrowser&&(this._containerElement=U$2(e)),i&&i.get(V$1).load(Kn$1)}fadeInRipple(o,t,e={}){let a=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=$$2($$2({},ct$3),e.animation);e.centered&&(o=a.left+a.width/2,t=a.top+a.height/2);let r=e.radius||$n$1(o,t,a),c=o-a.left,d=t-a.top,h=i.enterDuration,u=document.createElement(`div`);u.classList.add(`mat-ripple-element`),u.style.left=`${c-r}px`,u.style.top=`${d-r}px`,u.style.height=`${r*2}px`,u.style.width=`${r*2}px`,e.color!=null&&(u.style.backgroundColor=e.color),u.style.transitionDuration=`${h}ms`,this._containerElement.appendChild(u);let ne=window.getComputedStyle(u),_n=ne.transitionProperty,ae=ne.transitionDuration,Ft=_n===`none`||ae===`0s`||ae===`0s, 0s`||a.width===0&&a.height===0,H=new Qt$2(this,u,e,Ft);u.style.transform=`scale3d(1, 1, 1)`,H.state=w$1.FADING_IN,e.persistent||(this._mostRecentTransientRipple=H);let ut=null;return!Ft&&(h||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let oe=()=>{ut&&(ut.fallbackTimer=null),clearTimeout(ie),this._finishRippleTransition(H)},Rt=()=>this._destroyRipple(H),ie=setTimeout(Rt,h+100);u.addEventListener(`transitionend`,oe),u.addEventListener(`transitioncancel`,Rt),ut={onTransitionEnd:oe,onTransitionCancel:Rt,fallbackTimer:ie}}),this._activeRipples.set(H,ut),(Ft||!h)&&this._finishRippleTransition(H),H}fadeOutRipple(o){if(o.state===w$1.FADING_OUT||o.state===w$1.HIDDEN)return;let t=o.element,e=$$2($$2({},ct$3),o.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity=`0`,o.state=w$1.FADING_OUT,(o._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(o)}fadeOutAll(){this._getActiveRipples().forEach(o=>o.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(o=>{o.config.persistent||o.fadeOut()})}setupTriggerEvents(o){let t=U$2(o);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,ln$1.forEach(e=>{n._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(o){o.type===`mousedown`?this._onMousedown(o):o.type===`touchstart`?this._onTouchStart(o):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{un$1.forEach(t=>{this._triggerElement.addEventListener(t,this,dn$1)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(o){o.state===w$1.FADING_IN?this._startFadeOutTransition(o):o.state===w$1.FADING_OUT&&this._destroyRipple(o)}_startFadeOutTransition(o){let t=o===this._mostRecentTransientRipple,{persistent:e}=o.config;o.state=w$1.VISIBLE,!e&&(!t||!this._isPointerDown)&&o.fadeOut()}_destroyRipple(o){let t=this._activeRipples.get(o)??null;this._activeRipples.delete(o),this._activeRipples.size||(this._containerRect=null),o===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),o.state=w$1.HIDDEN,t!==null&&(o.element.removeEventListener(`transitionend`,t.onTransitionEnd),o.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),o.element.remove()}_onMousedown(o){let t=ot$3(o),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Wn$1;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(o.clientX,o.clientY,this._target.rippleConfig))}_onTouchStart(o){if(!this._target.rippleDisabled&&!it$3(o)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=o.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(o=>{let t=o.state===w$1.VISIBLE||o.config.terminateOnPointerUp&&o.state===w$1.FADING_IN;!o.config.persistent&&t&&o.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let o=this._triggerElement;o&&(ln$1.forEach(t=>n._eventManager.removeHandler(t,o,this)),this._pointerUpEventsRegistered&&(un$1.forEach(t=>o.removeEventListener(t,this,dn$1)),this._pointerUpEventsRegistered=!1))}};function $n$1(n,o,t){let e=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),a=Math.max(Math.abs(o-t.top),Math.abs(o-t.bottom));return Math.sqrt(e*e+a*a)}var Jt$2=new A(`mat-ripple-global-options`);var Qi$1=(()=>{class n{_elementRef=w$2(ar$1);_animationsDisabled=tt$1();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=w$2(be),e=w$2(x),a=w$2(Jt$2,{optional:!0}),i=w$2(re);this._globalOptions=a||{},this._rippleRenderer=new mt$1(this,t,this._elementRef,e,i)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:$$2($$2($$2({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,e=0,a){return typeof t==`number`?this._rippleRenderer.fadeInRipple(t,e,$$2($$2({},this.rippleConfig),a)):this._rippleRenderer.fadeInRipple(0,0,$$2($$2({},this.rippleConfig),t))}static ɵfac=function(e){return new(e||n)};static ɵdir=sE({type:n,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(e,a){e&2&&ip(`mat-ripple-unbounded`,a.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return n})();var Zn={capture:!0};var Gn$1=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var te=`mat-ripple-loader-uninitialized`;var ee=`mat-ripple-loader-class-name`;var bn$1=`mat-ripple-loader-centered`;var Dt$1=`mat-ripple-loader-disabled`;var pn$1=(()=>{class n{_document=w$2(zn$3);_animationsDisabled=tt$1();_globalRippleOptions=w$2(Jt$2,{optional:!0});_platform=w$2(x);_ngZone=w$2(be);_injector=w$2(re);_eventCleanups;_hosts=/* @__PURE__ */ new Map;constructor(){let t=w$2(nr$1).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Gn$1.map(e=>t.listen(this._document,e,this._onInteraction,Zn)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(te,this._globalRippleOptions?.namespace??``),(e.className||!t.hasAttribute(ee))&&t.setAttribute(ee,e.className||``),e.centered&&t.setAttribute(bn$1,``),e.disabled&&t.setAttribute(Dt$1,``)}setDisabled(t,e){let a=this._hosts.get(t);a?(a.target.rippleDisabled=e,!e&&!a.hasSetUpEvents&&(a.hasSetUpEvents=!0,a.renderer.setupTriggerEvents(t))):e?t.setAttribute(Dt$1,``):t.removeAttribute(Dt$1)}_onInteraction=t=>{let e=k(t);if(e instanceof HTMLElement){let a=e.closest(`[${te}="${this._globalRippleOptions?.namespace??``}"]`);a&&this._createRipple(a)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let e=this._document.createElement(`span`);e.classList.add(`mat-ripple`,t.getAttribute(ee)),t.append(e);let a=this._globalRippleOptions,i=this._animationsDisabled?0:a?.animation?.enterDuration??ct$3.enterDuration,r=this._animationsDisabled?0:a?.animation?.exitDuration??ct$3.exitDuration,c={rippleDisabled:this._animationsDisabled||a?.disabled||t.hasAttribute(Dt$1),rippleConfig:{centered:t.hasAttribute(bn$1),terminateOnPointerUp:a?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:r}}},d=new mt$1(c,this._ngZone,e,this._platform,this._injector),h=!c.rippleDisabled;h&&d.setupTriggerEvents(t),this._hosts.set(t,{target:c,renderer:d,hasSetUpEvents:h}),t.removeAttribute(te)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(e){return new(e||n)};static ɵprov=sr$1({token:n,factory:n.ɵfac})}return n})();var fn$1=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=tE({type:n,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(e,a){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return n})();var Yn$1=new A(`MAT_BUTTON_CONFIG`);function hn$1(n){return n==null?void 0:CL(n)}var dt$1=(()=>{class n{_elementRef=w$2(ar$1);_ngZone=w$2(be);_animationsDisabled=tt$1();_config=w$2(Yn$1,{optional:!0});_focusMonitor=w$2(Vt$1);_cleanupClick;_renderer=w$2(ua);_rippleLoader=w$2(pn$1);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=yL(!1,{transform:wL});constructor(){w$2(V$1).load(fn$1);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(e){return new(e||n)};static ɵdir=sE({type:n,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(e,a){e&2&&(Uf(`disabled`,a._getDisabledAttribute())(`aria-disabled`,a._getAriaDisabled())(`tabindex`,a._getTabIndex()),eI(a.color?`mat-`+a.color:``),ip(`mat-mdc-button-progress-indicator-shown`,a.showProgress())(`mat-mdc-button-disabled`,a.disabled)(`mat-mdc-button-disabled-interactive`,a.disabledInteractive)(`mat-unthemed`,!a.color)(`_mat-animation-noopable`,a._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,wL],disabled:[2,`disabled`,`disabled`,wL],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,wL],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,wL],tabIndex:[2,`tabIndex`,`tabIndex`,hn$1],_tabindex:[2,`tabindex`,`_tabindex`,hn$1],showProgress:[1,`showProgress`]}})}return n})();var qn$1=(()=>{class n extends dt$1{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`*`,[[``,`progressIndicator`,``]]],e=[`*`,`[progressIndicator]`];function a(i,r){i&1&&(oc(0,`div`,1),jE(1,1),ic())}return tE({type:n,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[Pf],ngContentSelectors:e,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(r,c){r&1&&(FE(t),qf(0,`span`,0),jE(1),DE(2,a,2,0,`div`,1),qf(3,`span`,2)(4,`span`,3)),r&2&&(Ny(2),CE(c.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return n})();var vn$1=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=rE({type:n});static ɵinj=sl({imports:[X$2]})}return n})();var gn$1=/* @__PURE__ */ new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var kr=(()=>{class n extends dt$1{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=Qn$1(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,a=this._appearance?gn$1.get(this._appearance):null,i=gn$1.get(t);a&&e.remove(...a),e.add(...i),this._appearance=t}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],e=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function a(i,r){i&1&&(oc(0,`div`,2),jE(1,3),ic())}return tE({type:n,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[Pf],ngContentSelectors:e,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(r,c){r&1&&(FE(t),qf(0,`span`,0),jE(1),oc(2,`span`,1),jE(3,1),ic(),jE(4,2),DE(5,a,2,0,`div`,2),qf(6,`span`,3)(7,`span`,4)),r&2&&(ip(`mdc-button__ripple`,!c._isFab)(`mdc-fab__ripple`,c._isFab),Ny(5),CE(c.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded,
.material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return n})();function Qn$1(n){return n.hasAttribute(`mat-raised-button`)?`elevated`:n.hasAttribute(`mat-stroked-button`)?`outlined`:n.hasAttribute(`mat-flat-button`)?`filled`:n.hasAttribute(`mat-button`)?`text`:null}var yn$1=new A(`mat-mdc-fab-default-options`,{providedIn:`root`,factory:()=>lt$3});var lt$3={color:`accent`};var Cr$1=(()=>{class n extends dt$1{_options=w$2(yn$1,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||lt$3,this.color=this._options.color||lt$3.color}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],e=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function a(i,r){i&1&&(oc(0,`div`,2),jE(1,3),ic())}return tE({type:n,selectors:[[`button`,`mat-fab`,``],[`a`,`mat-fab`,``],[`button`,`matFab`,``],[`a`,`matFab`,``]],hostAttrs:[1,`mdc-fab`,`mat-mdc-fab-base`,`mat-mdc-fab`],hostVars:4,hostBindings:function(r,c){r&2&&ip(`mdc-fab--extended`,c.extended)(`mat-mdc-extended-fab`,c.extended)},inputs:{extended:[2,`extended`,`extended`,wL]},exportAs:[`matButton`,`matAnchor`],features:[Pf],ngContentSelectors:e,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(r,c){r&1&&(FE(t),qf(0,`span`,0),jE(1),oc(2,`span`,1),jE(3,1),ic(),jE(4,2),DE(5,a,2,0,`div`,2),qf(6,`span`,3)(7,`span`,4)),r&2&&(ip(`mdc-button__ripple`,!c._isFab)(`mdc-fab__ripple`,c._isFab),Ny(5),CE(c.showProgress()?5:-1))},styles:[`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon,
.mat-mdc-fab-base .material-icons,
.mat-mdc-fab-base .material-symbols-outlined,
.mat-mdc-fab-base .material-symbols-rounded,
.mat-mdc-fab-base .material-symbols-sharp {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
  border-radius: calc(var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--%NS%mat-fab-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large));
  color: var(--%NS%mat-fab-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--%NS%mat-fab-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--%NS%mat-fab-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-touch-target-size, 48px);
  display: var(--%NS%mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--%NS%mat-fab-small-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium));
  color: var(--%NS%mat-fab-small-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-small-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--%NS%mat-fab-small-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--%NS%mat-fab-small-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-small-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab .mat-focus-indicator::before {
  border-radius: calc(var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-small-touch-target-size, 48px);
  display: var(--%NS%mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--%NS%mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-small-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--%NS%mat-fab-extended-container-elevation-shadow, var(--%NS%mat-sys-level3));
  height: var(--%NS%mat-fab-extended-container-height, 56px);
  border-radius: var(--%NS%mat-fab-extended-container-shape, var(--%NS%mat-sys-corner-large));
  font-family: var(--%NS%mat-fab-extended-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-fab-extended-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-fab-extended-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-fab-extended-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--%NS%mat-fab-extended-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--%NS%mat-fab-extended-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-extended-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-symbols-outlined, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-symbols-rounded, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-symbols-sharp,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons,
.mat-mdc-extended-fab > .material-symbols-outlined,
.mat-mdc-extended-fab > .material-symbols-rounded,
.mat-mdc-extended-fab > .material-symbols-sharp {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab .mdc-button__label + .material-symbols-outlined,
.mat-mdc-extended-fab .mdc-button__label + .material-symbols-rounded,
.mat-mdc-extended-fab .mdc-button__label + .material-symbols-sharp, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons, [dir=rtl] .mat-mdc-extended-fab > .material-symbols-outlined, [dir=rtl] .mat-mdc-extended-fab > .material-symbols-rounded, [dir=rtl] .mat-mdc-extended-fab > .material-symbols-sharp {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  margin-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`],encapsulation:2})})()}return n})();var Tr=(()=>{class n extends dt$1{_options=w$2(yn$1,{optional:!0});_isFab=!0;constructor(){super(),this._options=this._options||lt$3,this.color=this._options.color||lt$3.color}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],e=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function a(i,r){i&1&&(oc(0,`div`,2),jE(1,3),ic())}return tE({type:n,selectors:[[`button`,`mat-mini-fab`,``],[`a`,`mat-mini-fab`,``],[`button`,`matMiniFab`,``],[`a`,`matMiniFab`,``]],hostAttrs:[1,`mdc-fab`,`mat-mdc-fab-base`,`mdc-fab--mini`,`mat-mdc-mini-fab`],exportAs:[`matButton`,`matAnchor`],features:[Pf],ngContentSelectors:e,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(r,c){r&1&&(FE(t),qf(0,`span`,0),jE(1),oc(2,`span`,1),jE(3,1),ic(),jE(4,2),DE(5,a,2,0,`div`,2),qf(6,`span`,3)(7,`span`,4)),r&2&&(ip(`mdc-button__ripple`,!c._isFab)(`mdc-fab__ripple`,c._isFab),Ny(5),CE(c.showProgress()?5:-1))},styles:[`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon,
.mat-mdc-fab-base .material-icons,
.mat-mdc-fab-base .material-symbols-outlined,
.mat-mdc-fab-base .material-symbols-rounded,
.mat-mdc-fab-base .material-symbols-sharp {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
  border-radius: calc(var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--%NS%mat-fab-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large));
  color: var(--%NS%mat-fab-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--%NS%mat-fab-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--%NS%mat-fab-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-touch-target-size, 48px);
  display: var(--%NS%mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--%NS%mat-fab-small-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium));
  color: var(--%NS%mat-fab-small-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-small-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--%NS%mat-fab-small-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--%NS%mat-fab-small-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-small-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab .mat-focus-indicator::before {
  border-radius: calc(var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-small-touch-target-size, 48px);
  display: var(--%NS%mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--%NS%mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-small-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--%NS%mat-fab-extended-container-elevation-shadow, var(--%NS%mat-sys-level3));
  height: var(--%NS%mat-fab-extended-container-height, 56px);
  border-radius: var(--%NS%mat-fab-extended-container-shape, var(--%NS%mat-sys-corner-large));
  font-family: var(--%NS%mat-fab-extended-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-fab-extended-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-fab-extended-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-fab-extended-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--%NS%mat-fab-extended-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--%NS%mat-fab-extended-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-extended-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-symbols-outlined, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-symbols-rounded, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-symbols-sharp,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons,
.mat-mdc-extended-fab > .material-symbols-outlined,
.mat-mdc-extended-fab > .material-symbols-rounded,
.mat-mdc-extended-fab > .material-symbols-sharp {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab .mdc-button__label + .material-symbols-outlined,
.mat-mdc-extended-fab .mdc-button__label + .material-symbols-rounded,
.mat-mdc-extended-fab .mdc-button__label + .material-symbols-sharp, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons, [dir=rtl] .mat-mdc-extended-fab > .material-symbols-outlined, [dir=rtl] .mat-mdc-extended-fab > .material-symbols-rounded, [dir=rtl] .mat-mdc-extended-fab > .material-symbols-sharp {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  margin-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`],encapsulation:2})})()}return n})();var Dr=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=rE({type:n});static ɵinj=sl({imports:[vn$1,X$2]})}return n})();var se$1=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}};var qe$1=class extends se$1{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(i,e,t,n,r,s){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=n,this.bindings=r||null,this.directives=s||null}};var X$1=class extends se$1{templateRef;viewContainerRef;context;injector;constructor(i,e,t,n){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=n}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}};var Qe=class extends se$1{element;constructor(i){super(),this.element=i instanceof ar$1?i.nativeElement:i}};var we=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof qe$1)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof X$1)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof Qe)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var ae$1=class extends we{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,n=t.get(hn$2,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:n,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,n=i.injector||this._defaultInjector||re.NULL,r=n.get(pe$1,t.injector);e=TL(i.component,{elementInjector:n,environmentInjector:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0,directives:i.directives||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(n=>this.outletElement.appendChild(n)),t.detectChanges(),this.setDisposeFn(()=>{let n=e.indexOf(t);n!==-1&&e.remove(n)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment(`dom-portal`);e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var Si$1=(()=>{class o extends we{_moduleRef=w$2(hn$2,{optional:!0});_document=w$2(zn$3);_viewContainerRef=w$2(ai$2);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new Oe$3;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,n=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return t!==this._viewContainerRef&&this._insertContent(n.hostView.rootNodes[0]),super.setDisposeFn(()=>n.destroy()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let n=this._document.createComment(`dom-portal`);e.setAttachedHost(this),t.parentNode.insertBefore(n,t),this._insertContent(t),this._attachedPortal=e,super.setDisposeFn(()=>n.parentNode?.replaceChild(t,n))};_insertContent(e){let t=this._viewContainerRef.element.nativeElement;t.nodeType===t.ELEMENT_NODE?t.appendChild(e):t.parentNode?.insertBefore(e,t)}static ɵfac=(()=>{let e;return function(n){return(e||(e=zg(o)))(n||o)}})();static ɵdir=sE({type:o,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[Pf]})}return o})();var Bt=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=rE({type:o});static ɵinj=sl({})}return o})();var si$1=20;var ce$1=(()=>{class o{_ngZone=w$2(be);_platform=w$2(x);_renderer=w$2(nr$1).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new J$2;_scrolledCount=0;scrollContainers=/* @__PURE__ */ new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=si$1){return this._platform.isBrowser?new T(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let n=e>0?this._scrolled.pipe(ph(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Jp()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let n=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(Sn$2(r=>!r||n.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((n,r)=>{this._targetContainsElement(r,e)&&t.push(r)}),t}_targetContainsElement(e,t){let n=U$2(t),r=e.getElementRef().nativeElement;do if(n==r)return!0;while(n=n.parentElement);return!1}static ɵfac=function(t){return new(t||o)};static ɵprov=sr$1({token:o,factory:o.ɵfac})}return o})();var ai$1=20;var V=(()=>{class o{_platform=w$2(x);_listeners;_viewportSize=null;_change=new J$2;_document=w$2(zn$3);constructor(){let e=w$2(be),t=w$2(nr$1).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let n=r=>this._change.next(r);this._listeners=[t.listen(`window`,`resize`,n),t.listen(`window`,`orientationchange`,n)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:n}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+n,right:e.left+t,height:n,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),n=e.documentElement,r=n.getBoundingClientRect();return{top:-r.top||e.body?.scrollTop||t.scrollY||n.scrollTop||0,left:-r.left||e.body?.scrollLeft||t.scrollX||n.scrollLeft||0}}change(e=ai$1){return e>0?this._change.pipe(ph(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static ɵfac=function(t){return new(t||o)};static ɵprov=sr$1({token:o,factory:o.ɵfac})}return o})();var le$1=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=rE({type:o});static ɵinj=sl({})}return o})();var tt=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=rE({type:o});static ɵinj=sl({imports:[X$2,le$1,X$2,le$1]})}return o})();var Nt$1=xi$1();function jt(o){return new ke$1(o.get(V),o.get(zn$3))}var ke$1=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||``,this._previousHTMLStyles.top=i.style.top||``,i.style.left=Pi$1(-this._previousScrollPosition.left),i.style.top=Pi$1(-this._previousScrollPosition.top),i.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,n=e.style,r=t.scrollBehavior||``,s=n.scrollBehavior||``;this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove(`cdk-global-scrollblock`),Nt$1&&(t.scrollBehavior=n.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Nt$1&&(t.scrollBehavior=r,n.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function Ut(o,i){return new Se$1(o.get(ce$1),o.get(be),o.get(V),i)}var Se$1=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,n){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=n}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(Sn$2(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var de$1=class{enable(){}disable(){}attach(){}};function nt$2(o,i){return i.some(e=>{let t=o.bottom<e.top,n=o.top>e.bottom,r=o.right<e.left,s=o.left>e.right;return t||n||r||s})}function Lt(o,i){return i.some(e=>{let t=o.top<e.top,n=o.bottom>e.bottom,r=o.left<e.left,s=o.right>e.right;return t||n||r||s})}function Pe$1(o,i){return new xe$1(o.get(ce$1),o.get(V),o.get(be),i)}var xe$1=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,n){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=n}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:n}=this._viewportRuler.getViewportSize();nt$2(e,[{width:t,height:n,bottom:n,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var Zt$1=(()=>{class o{_injector=w$2(re);noop=()=>new de$1;close=e=>Ut(this._injector,e);block=()=>jt(this._injector);reposition=e=>Pe$1(this._injector,e);static ɵfac=function(t){return new(t||o)};static ɵprov=sr$1({token:o,factory:o.ɵfac})}return o})();var j$1=class{positionStrategy;scrollStrategy=new de$1;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var Me=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var Gt$1=(()=>{class o{_attachedOverlays=[];_document=w$2(zn$3);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,n){return n.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static ɵfac=function(t){return new(t||o)};static ɵprov=sr$1({token:o,factory:o.ɵfac})}return o})();var Kt$1=(()=>{class o extends Gt$1{_ngZone=w$2(be);_renderer=w$2(nr$1).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let n=t.length-1;n>-1;n--){let r=t[n];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static ɵfac=function(t){return new(t||o)};static ɵprov=sr$1({token:o,factory:o.ɵfac})}return o})();var $t=(()=>{class o extends Gt$1{_platform=w$2(x);_ngZone=w$2(be);_renderer=w$2(nr$1).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,n={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(t,`pointerdown`,this._pointerDownListener,n),r.listen(t,`click`,this._clickListener,n),r.listen(t,`auxclick`,this._clickListener,n),r.listen(t,`contextmenu`,this._clickListener,n)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=k(e)};_clickListener=e=>{let t=k(e),n=e.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let s=r.length-1;s>-1;s--){let a=r[s],l=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,l))){if(zt(a.overlayElement,t)||zt(a.overlayElement,n))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static ɵfac=function(t){return new(t||o)};static ɵprov=sr$1({token:o,factory:o.ɵfac})}return o})();function zt(o,i){let e=typeof ShadowRoot<`u`&&ShadowRoot,t=i;for(;t;){if(t===o)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var qt=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵcmp=tE({type:o,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(t,n){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return o})();var Qt$1=(()=>{class o{_platform=w$2(x);_containerElement;_document=w$2(zn$3);_styleLoader=w$2(V$1);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e=`cdk-overlay-container`;if(this._platform.isBrowser||Ni$1()){let n=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<n.length;r++)n[r].remove()}let t=this._document.createElement(`div`);t.classList.add(e),Ni$1()?t.setAttribute(`platform`,`test`):this._platform.isBrowser||t.setAttribute(`platform`,`server`),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(qt)}static ɵfac=function(t){return new(t||o)};static ɵprov=sr$1({token:o,factory:o.ɵfac})}return o})();var ot$2=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,n){this._renderer=e,this._ngZone=t,this.element=i.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=e.listen(this.element,`click`,n)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents=`none`,i.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function rt$1(o){return o&&o.nodeType===1}var it$2=wo$1([]);var Oe$1=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new J$2;_attachments=new J$2;_detachments=new J$2;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new J$2;_outsidePointerEvents=new J$2;_afterNextRenderRef;constructor(i,e,t,n,r,s,a,l,h,d=!1,u,m){this._portalOutlet=i,this._host=e,this._pane=t,this._config=n,this._ngZone=r,this._keyboardDispatcher=s,this._document=a,this._location=l,this._outsideClickDispatcher=h,this._animationsDisabled=d,this._injector=u,this._renderer=m,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),Ip(()=>{it$2.update(t=>t.includes(this)?t:[...t,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=ay(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation===`pop-state`){let t=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>t.unsubscribe()}else this._config.disposeOnNavigation===`url-change`&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof e?.onDestroy==`function`&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),Ip(()=>{it$2.update(e=>e.filter(t=>t!==this))}),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,Ip(()=>{it$2.update(e=>e.filter(t=>t!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=$$2($$2({},this._config),i),this._updateElementSize()}setDirection(i){this._config=U$3($$2({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i==`string`?i:i.value:`ltr`}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=Pi$1(this._config.width),i.height=Pi$1(this._config.height),i.minWidth=Pi$1(this._config.minWidth),i.minHeight=Pi$1(this._config.minHeight),i.maxWidth=Pi$1(this._config.maxWidth),i.maxHeight=Pi$1(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?``:`none`}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;rt$1(i)?i.after(this._host):i?.type===`parent`?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new ot$2(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let n=Wt$2(e||[]).filter(r=>!!r);n.length&&(t?i.classList.add(...n):i.classList.remove(...n))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=ay(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}};var Wt$1=`cdk-overlay-connected-position-bounding-box`;var li$1=/([A-Za-z%]+)$/;function Ee(o,i){return new Re$1(i,o.get(V),o.get(zn$3),o.get(x),o.get(Qt$1))}var Re$1=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new J$2;_resizeSubscription=G$1.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,n,r){this._viewportRuler=e,this._document=t,this._platform=n,this._overlayContainer=r,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(Wt$1),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,n=this._containerRect,r=[],s;for(let a of this._preferredPositions){let l=this._getOriginPoint(i,n,a),h=this._getOverlayPoint(l,e,a),d=this._getOverlayFit(h,e,t,a);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,l);return}if(this._canFitWithFlexibleDimensions(d,h,t)){r.push({position:a,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,a)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:h,originPoint:l,position:a,overlayRect:e})}if(r.length){let a=null,l=-1;for(let h of r){let d=h.boundingBoxRect.width*h.boundingBoxRect.height*(h.position.weight||1);d>l&&(l=d,a=h)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&F$1(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Wt$1),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof ar$1?this._origin.nativeElement:rt$1(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let n;if(t.originX==`center`)n=i.left+i.width/2;else{let s=this._isRtl()?i.right:i.left,a=this._isRtl()?i.left:i.right;n=t.originX==`start`?s:a}e.left<0&&(n-=e.left);let r;return t.originY==`center`?r=i.top+i.height/2:r=t.originY==`top`?i.top:i.bottom,e.top<0&&(r-=e.top),{x:n,y:r}}_getOverlayPoint(i,e,t){let n;t.overlayX==`center`?n=-e.width/2:t.overlayX===`start`?n=this._isRtl()?-e.width:0:n=this._isRtl()?0:-e.width;let r;return t.overlayY==`center`?r=-e.height/2:r=t.overlayY==`top`?0:-e.height,{x:i.x+n,y:i.y+r}}_getOverlayFit(i,e,t,n){let r=Yt$1(e),{x:s,y:a}=i,l=this._getOffset(n,`x`),h=this._getOffset(n,`y`);l&&(s+=l),h&&(a+=h);let d=0-s,u=s+r.width-t.width,m=0-a,f=a+r.height-t.height,_=this._subtractOverflows(r.width,d,u),w=this._subtractOverflows(r.height,m,f),dt=_*w;return{visibleArea:dt,isCompletelyWithinViewport:r.width*r.height===dt,fitsInViewportVertically:w===r.height,fitsInViewportHorizontally:_==r.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let n=t.bottom-e.y,r=t.right-e.x,s=Ht(this._overlayRef.getConfig().minHeight),a=Ht(this._overlayRef.getConfig().minWidth),l=i.fitsInViewportVertically||s!=null&&s<=n,h=i.fitsInViewportHorizontally||a!=null&&a<=r;return l&&h}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let n=Yt$1(e),r=this._viewportRect,s=Math.max(i.x+n.width-r.width,0),a=Math.max(i.y+n.height-r.height,0),l=Math.max(r.top-t.top-i.y,0),h=Math.max(r.left-t.left-i.x,0),d=0,u=0;return n.width<=r.width?d=h||-s:d=i.x<this._getViewportMarginStart()?r.left-t.left-i.x:0,n.height<=r.height?u=l||-a:u=i.y<this._getViewportMarginTop()?r.top-t.top-i.y:0,this._previousPushAmount={x:d,y:u},{x:i.x+d,y:i.y+u}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!ci$1(this._lastScrollVisibility,t)){let n=new Me(i,t);this._positionChanges.next(n)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,n=i.overlayY;i.overlayX===`center`?t=`center`:this._isRtl()?t=i.overlayX===`start`?`right`:`left`:t=i.overlayX===`start`?`left`:`right`;for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${t} ${n}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,n=this._isRtl(),r,s,a;if(e.overlayY===`top`)s=i.y,r=t.height-s+this._getViewportMarginBottom();else if(e.overlayY===`bottom`)a=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=t.height-a+this._getViewportMarginTop();else{let f=Math.min(t.bottom-i.y+t.top,i.y),_=this._lastBoundingBoxSize.height;r=f*2,s=i.y-f,r>_&&!this._isInitialRender&&!this._growAfterOpen&&(s=i.y-_/2)}let l=e.overlayX===`start`&&!n||e.overlayX===`end`&&n,h=e.overlayX===`end`&&!n||e.overlayX===`start`&&n,d,u,m;if(h)m=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=i.x-this._getViewportMarginStart();else if(l)u=i.x,d=t.right-i.x-this._getViewportMarginEnd();else{let f=Math.min(t.right-i.x+t.left,i.x),_=this._lastBoundingBoxSize.width;d=f*2,u=i.x-f,d>_&&!this._isInitialRender&&!this._growAfterOpen&&(u=i.x-_/2)}return{top:s,left:u,bottom:a,right:m,width:d,height:r}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let n={};if(this._hasExactPosition())n.top=n.left=`0`,n.bottom=n.right=`auto`,n.maxHeight=n.maxWidth=``,n.width=n.height=`100%`;else{let r=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;n.width=Pi$1(t.width),n.height=Pi$1(t.height),n.top=Pi$1(t.top)||`auto`,n.bottom=Pi$1(t.bottom)||`auto`,n.left=Pi$1(t.left)||`auto`,n.right=Pi$1(t.right)||`auto`,e.overlayX===`center`?n.alignItems=`center`:n.alignItems=e.overlayX===`end`?`flex-end`:`flex-start`,e.overlayY===`center`?n.justifyContent=`center`:n.justifyContent=e.overlayY===`bottom`?`flex-end`:`flex-start`,r&&(n.maxHeight=Pi$1(r)),s&&(n.maxWidth=Pi$1(s))}this._lastBoundingBoxSize=t,F$1(this._boundingBox.style,n)}_resetBoundingBoxStyles(){F$1(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){F$1(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(i,e){let t={},n=this._hasExactPosition(),r=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(n){let d=this._viewportRuler.getViewportScrollPosition();F$1(t,this._getExactOverlayY(e,i,d)),F$1(t,this._getExactOverlayX(e,i,d))}else t.position=`static`;let a=``,l=this._getOffset(e,`x`),h=this._getOffset(e,`y`);l&&(a+=`translateX(${l}px) `),h&&(a+=`translateY(${h}px)`),t.transform=a.trim(),s.maxHeight&&(n?t.maxHeight=Pi$1(s.maxHeight):r&&(t.maxHeight=``)),s.maxWidth&&(n?t.maxWidth=Pi$1(s.maxWidth):r&&(t.maxWidth=``)),F$1(this._pane.style,t)}_getExactOverlayY(i,e,t){let n={top:``,bottom:``},r=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t)),i.overlayY===`bottom`)n.bottom=`${this._document.documentElement.clientHeight-(r.y+this._overlayRect.height)}px`;else n.top=Pi$1(r.y);return n}_getExactOverlayX(i,e,t){let n={left:``,right:``},r=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t));let s;if(this._isRtl()?s=i.overlayX===`end`?`left`:`right`:s=i.overlayX===`end`?`right`:`left`,s===`right`)n.right=`${this._document.documentElement.clientWidth-(r.x+this._overlayRect.width)}px`;else n.left=Pi$1(r.x);return n}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(n=>n.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Lt(i,t),isOriginOutsideView:nt$2(i,t),isOverlayClipped:Lt(e,t),isOverlayOutsideView:nt$2(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,n)=>t-Math.max(n,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e===`x`?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&Wt$2(i).forEach(e=>{e!==``&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof ar$1)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,e=this._overlayContainer.getContainerElement();i&&(e.style.display=`block`);let t=e.getBoundingClientRect();return i&&(e.style.display=``),t}};function F$1(o,i){for(let e in i)Object.hasOwn(i,e)&&(o[e]=i[e]);return o}function Ht(o){if(typeof o!=`number`&&o!=null){let[i,e]=o.split(li$1);return!e||e===`px`?parseFloat(i):null}return o||null}function Yt$1(o){return{top:Math.floor(o.top),right:Math.floor(o.right),bottom:Math.floor(o.bottom),left:Math.floor(o.left),width:Math.floor(o.width),height:Math.floor(o.height)}}function ci$1(o,i){return o===i?!0:o.isOriginClipped===i.isOriginClipped&&o.isOriginOutsideView===i.isOriginOutsideView&&o.isOverlayClipped===i.isOverlayClipped&&o.isOverlayOutsideView===i.isOverlayOutsideView}var Xt$1=`cdk-global-overlay-wrapper`;function Jt$1(o){return new De}var De=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(Xt$1),this._isDisposed=!1}top(i=``){return this._bottomOffset=``,this._topOffset=i,this._alignItems=`flex-start`,this}left(i=``){return this._xOffset=i,this._xPosition=`left`,this}bottom(i=``){return this._topOffset=``,this._bottomOffset=i,this._alignItems=`flex-end`,this}right(i=``){return this._xOffset=i,this._xPosition=`right`,this}start(i=``){return this._xOffset=i,this._xPosition=`start`,this}end(i=``){return this._xOffset=i,this._xPosition=`end`,this}width(i=``){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=``){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=``){return this.left(i),this._xPosition=`center`,this}centerVertically(i=``){return this.top(i),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,{width:n,height:r,maxWidth:s,maxHeight:a}=this._overlayRef.getConfig(),l=(n===`100%`||n===`100vw`)&&(!s||s===`100%`||s===`100vw`),h=(r===`100%`||r===`100vh`)&&(!a||a===`100%`||a===`100vh`),d=this._xPosition,u=this._xOffset,m=this._overlayRef.getConfig().direction===`rtl`,f=``,_=``,w=``;l?w=`flex-start`:d===`center`?(w=`center`,m?_=u:f=u):m?d===`left`||d===`end`?(w=`flex-end`,f=u):(d===`right`||d===`start`)&&(w=`flex-start`,_=u):d===`left`||d===`start`?(w=`flex-start`,f=u):(d===`right`||d===`end`)&&(w=`flex-end`,_=u),i.position=this._cssPosition,i.marginLeft=l?`0`:f,i.marginTop=h?`0`:this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=l?`0`:_,e.justifyContent=w,e.alignItems=h?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(Xt$1),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position=``,this._overlayRef=null,this._isDisposed=!0}};var ei=(()=>{class o{_injector=w$2(re);global(){return Jt$1()}flexibleConnectedTo(e){return Ee(this._injector,e)}static ɵfac=function(t){return new(t||o)};static ɵprov=sr$1({token:o,factory:o.ɵfac})}return o})();var ti$1=new A(`OVERLAY_DEFAULT_CONFIG`);function Ie(o,i){o.get(V$1).load(qt);let e=o.get(Qt$1),t=o.get(zn$3),n=o.get(Gt$2),r=o.get(ci$2),s=o.get(Mn$1),a=o.get(ua,null,{optional:!0})||o.get(nr$1).createRenderer(null,null),l=new j$1(i),h=o.get(ti$1,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||s.value,!t.body||!(`showPopover`in t.body)?l.usePopover=!1:l.usePopover=i?.usePopover??h;let d=t.createElement(`div`),u=t.createElement(`div`);d.id=n.getId(`cdk-overlay-`),d.classList.add(`cdk-overlay-pane`),u.appendChild(d),l.usePopover&&(u.setAttribute(`popover`,`manual`),u.classList.add(`cdk-overlay-popover`));let m=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return rt$1(m)?m.after(u):m?.type===`parent`?m.element.appendChild(u):e.getContainerElement().appendChild(u),new Oe$1(new ae$1(d,r,o),u,d,l,o.get(be),o.get(Kt$1),t,o.get(yt$1),o.get($t),i?.disableAnimations??o.get(ug,null,{optional:!0})===`NoopAnimations`,o.get(pe$1),a)}var ii$1=(()=>{class o{scrollStrategies=w$2(Zt$1);_positionBuilder=w$2(ei);_injector=w$2(re);create(e){return Ie(this._injector,e)}position(){return this._positionBuilder}static ɵfac=function(t){return new(t||o)};static ɵprov=sr$1({token:o,factory:o.ɵfac})}return o})();var st$1=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=rE({type:o});static ɵinj=sl({providers:[ii$1],imports:[X$2,Bt,tt,tt]})}return o})();var ct$2=new A(`MAT_MENU_PANEL`);var lt$2=(()=>{class o{_isAnchor;_elementRef=w$2(ar$1);_document=w$2(zn$3);_focusMonitor=w$2(Vt$1);_parentMenu=w$2(ct$2,{optional:!0});_changeDetectorRef=w$2(IL);role=`menuitem`;disabled=!1;disabledInteractive=!1;disableRipple=!1;_hovered=new J$2;_focused=new J$2;_highlighted=!1;_triggersSubmenu=!1;constructor(){w$2(V$1).load(fn$1),this._parentMenu?.addItem?.(this),this._isAnchor=this._elementRef.nativeElement.tagName===`A`}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled&&!this.disabledInteractive?`-1`:`0`}_getAriaDisabled(){return this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabled(){return this.disabledInteractive||!this.disabled?null:!0}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp`);for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||o)};static ɵcmp=(function(){let e=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`],t=[`mat-icon, [matMenuItemIcon]`,`*`];function n(r,s){r&1&&(Ql(),Zo(0,`svg`,2),Gf(1,`polygon`,3),rc())}return tE({type:o,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:12,hostBindings:function(s,a){s&1&&Kf(`click`,function(h){return a._checkDisabled(h)})(`mouseenter`,function(){return a._handleMouseEnter()}),s&2&&(Uf(`role`,a.role)(`tabindex`,a._getTabIndex())(`aria-disabled`,a._getAriaDisabled())(`disabled`,a._getDisabled()),ip(`mat-mdc-menu-item-highlighted`,a._highlighted)(`mat-mdc-menu-item-submenu-trigger`,a._triggersSubmenu)(`mat-mdc-menu-item-disabled`,a.disabled)(`mat-mdc-menu-item-disabled-interactive`,a.disabledInteractive))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,wL],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,wL],disableRipple:[2,`disableRipple`,`disableRipple`,wL]},exportAs:[`matMenuItem`],ngContentSelectors:t,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(s,a){s&1&&(FE(e),jE(0),Zo(1,`span`,0),jE(2,1),rc(),Gf(3,`div`,1),DE(4,n,2,0,`svg`,2)),s&2&&(Ny(3),Wf(`matRippleDisabled`,a.disableRipple||a.disabled)(`matRippleTrigger`,a._getHostElement()),Ny(),CE(a._triggersSubmenu?4:-1))},dependencies:[Qi$1],encapsulation:2})})()}return o})();var fi$1=new A(`MatMenuContent`);var gi$1=new A(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var at$1=`_mat-menu-enter`;var Te=`_mat-menu-exit`;var Ae=(()=>{class o{_elementRef=w$2(ar$1);_changeDetectorRef=w$2(IL);_injector=w$2(re);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=tt$1();_allItems;_directDescendantItems=new jo$1;_classList={};_panelAnimationState=`void`;_animationDone=new J$2;_isAnimating=wo$1(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n=$$2({},this._classList);t&&t.length&&t.split(` `).forEach(r=>{n[r]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(r=>{n[r]=!0}),this._elementRef.nativeElement.className=``),this._classList=n}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new Oe$3;close=this.closed;panelId=w$2(Gt$2).getId(`mat-menu-panel-`);constructor(){let e=w$2(gi$1);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Zt$2(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd().skipPredicate(e=>e.disabled&&!e.disabledInteractive),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(bh(this._directDescendantItems),Th(e=>fh(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let n=e.toArray(),r=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[r]&&!n[r].disabled?t.setActiveItem(r):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(bh(this._directDescendantItems),Th(t=>fh(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:nn$1(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&n.setFocusOrigin(`keyboard`),n.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=ay(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=U$3($$2({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===Te;(t||e===at$1)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===at$1||e===Te)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Te),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?at$1:Te)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(bh(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||o)};static ɵcmp=(function(){let e=[`*`];function t(n,r){if(n&1){let s=RE();oc(0,`div`,0),Jf(`click`,function(){Ol(s);let l=LE();return kl(l.closed.emit(`click`))})(`animationstart`,function(l){Ol(s);let h=LE();return kl(h._onAnimationStart(l.animationName))})(`animationend`,function(l){Ol(s);let h=LE();return kl(h._onAnimationDone(l.animationName))})(`animationcancel`,function(l){Ol(s);let h=LE();return kl(h._onAnimationDone(l.animationName))}),oc(1,`div`,1),jE(2),ic()()}if(n&2){let s=LE();eI(s._classList),ip(`mat-menu-panel-animations-disabled`,s._animationsDisabled)(`mat-menu-panel-exit-animation`,s._panelAnimationState===`void`)(`mat-menu-panel-animating`,s._isAnimating()),Zf(`id`,s.panelId),Uf(`aria-label`,s.ariaLabel||null)(`aria-labelledby`,s.ariaLabelledby||null)(`aria-describedby`,s.ariaDescribedby||null)}}return tE({type:o,selectors:[[`mat-menu`]],contentQueries:function(r,s,a){if(r&1&&Xf(a,fi$1,5)(a,lt$2,5)(a,lt$2,4),r&2){let l;HE(l=BE())&&(s.lazyContent=l.first),HE(l=BE())&&(s._allItems=l),HE(l=BE())&&(s.items=l)}},viewQuery:function(r,s){if(r&1&&ep(tr$1,5),r&2){let a;HE(a=BE())&&(s.templateRef=a.first)}},hostVars:3,hostBindings:function(r,s){r&2&&Uf(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,wL],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,n=>n==null?null:wL(n)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[vI([{provide:ct$2,useExisting:o}])],ngContentSelectors:e,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(r,s){r&1&&(FE(),Vf(0,t,3,12,`ng-template`))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled], .mat-mdc-menu-item.mat-mdc-menu-item-disabled {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after, .mat-mdc-menu-item.mat-mdc-menu-item-disabled::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})})()}return o})();var _i$1=new A(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let o=w$2(re);return()=>Pe$1(o)}});var U$1=/* @__PURE__ */ new WeakMap;var vi$1=(()=>{class o{_canHaveBackdrop;_element=w$2(ar$1);_viewContainerRef=w$2(ai$2);_menuItemInstance=w$2(lt$2,{optional:!0,self:!0});_dir=w$2(Mn$1,{optional:!0});_focusMonitor=w$2(Vt$1);_ngZone=w$2(be);_injector=w$2(re);_scrollStrategy=w$2(_i$1);_changeDetectorRef=w$2(IL);_animationsDisabled=tt$1();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=G$1.EMPTY;_menuCloseSubscription=G$1.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=w$2(ct$2,{optional:!0});this._parentMaterialMenu=t instanceof Ae?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&U$1.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=U$1.get(t);U$1.set(t,this),n&&n!==this&&n._closeMenu();let r=this._createOverlay(t),s=r.getConfig(),a=s.positionStrategy;this._setPosition(t,a),this._canHaveBackdrop?s.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:s.hasBackdrop=t.hasBackdrop??!1,r.hasAttached()||(r.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof Ae&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(_h(t.close)).subscribe(()=>{a.withLockedPosition(!1).reapplyLastPosition(),a.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof Ae&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(xi$2(1)).subscribe(()=>{t.detach(),U$1.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&U$1.delete(n),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Ie(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof Ae&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new j$1({positionStrategy:Ee(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let r=n.connectionPair.overlayX===`start`?`after`:`before`,s=n.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(r,s)})})}_setPosition(e,t){let[n,r]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[s,a]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[l,h]=[s,a],[d,u]=[n,r],m=0;if(this._triggersSubmenu()){if(u=n=e.xPosition===`before`?`start`:`end`,r=d=n===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let f=this._parentMaterialMenu.items.first;this._parentInnerPadding=f?f._getHostElement().offsetTop:0}m=s===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(l=s===`top`?`bottom`:`top`,h=a===`top`?`bottom`:`top`);t.withPositions([{originX:n,originY:l,overlayX:d,overlayY:s,offsetY:m},{originX:r,originY:l,overlayX:u,overlayY:s,offsetY:m},{originX:n,originY:h,overlayX:d,overlayY:a,offsetY:-m},{originX:r,originY:h,overlayX:u,overlayY:a,offsetY:-m}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:Jp(),r=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Sn$2(s=>this._menuOpen&&s!==this._menuItemInstance)):Jp();return fh(e,n,r,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new X$1(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return U$1.get(e)===this}_triggerIsAriaDisabled(){return wL(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){yv()};static ɵdir=sE({type:o})}return o})();var _o=(()=>{class o extends vi$1{_cleanupTouchstart;_hoverSubscription=G$1.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new Oe$3;onMenuOpen=this.menuOpened;menuClosed=new Oe$3;onMenuClose=this.menuClosed;constructor(){super(!0);let e=w$2(ua);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{it$3(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){ot$3(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||o)};static ɵdir=sE({type:o,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,n){t&1&&Kf(`click`,function(s){return n._handleClick(s)})(`mousedown`,function(s){return n._handleMousedown(s)})(`keydown`,function(s){return n._handleKeydown(s)}),t&2&&Uf(`aria-haspopup`,n.menu?`menu`:null)(`aria-expanded`,n.menuOpen)(`aria-controls`,n.menuOpen?n.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[Pf]})}return o})();var vo$1=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=rE({type:o});static ɵinj=sl({imports:[vn$1,st$1,X$2,le$1]})}return o})();var f=`primary`;var He=Symbol(`RouteTitle`);var Yt=class{params;constructor(n){this.params=n||{}}has(n){return Object.hasOwn(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function oe(t){return new Yt(t)}function Vt(t,n,e){for(let r=0;r<t.length;r++){let i=t[r],o=n[r];if(i[0]===`:`)e[i.substring(1)]=o;else if(i!==o.path)return!1}return!0}function sn(t,n,e){let r=e.path.split(`/`),i=r.indexOf(`**`);if(i===-1){if(r.length>t.length||e.pathMatch===`full`&&(n.hasChildren()||r.length<t.length))return null;let s={},u=t.slice(0,r.length);return Vt(r,u,s)?{consumed:u,posParams:s}:null}if(i!==r.lastIndexOf(`**`))return null;let o=r.slice(0,i),a=r.slice(i+1);if(o.length+a.length>t.length||e.pathMatch===`full`&&n.hasChildren()&&e.path!==`**`)return null;let c={};return!Vt(o,t.slice(0,o.length),c)||!Vt(a,t.slice(t.length-a.length),c)?null:{consumed:t,posParams:c}}function ct$1(t){return new Promise((n,e)=>{t.pipe(Ih()).subscribe({next:r=>n(r),error:r=>e(r)})})}function ti(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!F(t[e],n[e]))return!1;return!0}function F(t,n){let e=t?Zt(t):void 0,r=n?Zt(n):void 0;if(!e||!r||e.length!=r.length)return!1;let i;for(let o=0;o<e.length;o++)if(i=e[o],!cn(t[i],n[i]))return!1;return!0}function Zt(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function cn(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),r=[...n].sort();return e.every((i,o)=>r[o]===i)}else return t===n}function ri(t){return t.length>0?t[t.length-1]:null}function Be(t){return eh(t)?t:ec(t)?we$1(Promise.resolve(t)):Jp(t)}function un(t){return eh(t)?ct$1(t):Promise.resolve(t)}var ni={exact:dn,subset:hn};var ln={exact:ii,subset:oi,ignored:()=>!0};var dr={paths:`exact`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`exact`};var pe={paths:`subset`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`subset`};function hr(t,n,e){let r=t instanceof E?t:n.parseUrl(t);return CI(()=>ut$1(n.lastSuccessfulNavigation()?.finalUrl??new E,r,e))}function ut$1(t,n,e){let r=$$2($$2({},pe),e||{});return ni[r.paths](t.root,n.root,r.matrixParams)&&ln[r.queryParams](t.queryParams,n.queryParams)&&!(r.fragment===`exact`&&t.fragment!==n.fragment)}function ii(t,n){return F(t,n)}function dn(t,n,e){if(!ie(t.segments,n.segments)||!ot$1(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let r in n.children)if(!t.children[r]||!dn(t.children[r],n.children[r],e))return!1;return!0}function oi(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>cn(t[e],n[e]))}function hn(t,n,e){return fn(t,n,n.segments,e)}function fn(t,n,e,r){if(t.segments.length>e.length){let i=t.segments.slice(0,e.length);return!(!ie(i,e)||n.hasChildren()||!ot$1(i,e,r))}else if(t.segments.length===e.length){if(!ie(t.segments,e)||!ot$1(t.segments,e,r))return!1;for(let i in n.children)if(!t.children[i]||!hn(t.children[i],n.children[i],r))return!1;return!0}else{let i=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!ie(t.segments,i)||!ot$1(t.segments,i,r)||!t.children[f]?!1:fn(t.children[f],n,o,r)}}function ot$1(t,n,e){return n.every((r,i)=>ln[e](t[i].parameters,r.parameters))}var E=class{root;queryParams;fragment;_queryParamMap;constructor(n=new m([],{}),e={},r=null){this.root=n,this.queryParams=e,this.fragment=r}get queryParamMap(){return this._queryParamMap??=oe(this.queryParams),this._queryParamMap}toString(){return ui.serialize(this)}};var m=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return at(this)}};var Y=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=oe(this.parameters),this._parameterMap}toString(){return gn(this)}};function ai(t,n){return ie(t,n)&&t.every((e,r)=>F(e.parameters,n[r].parameters))}function ie(t,n){return t.length!==n.length?!1:t.every((e,r)=>e.path===n[r].path)}function si(t,n){let e=[];return Object.entries(t.children).forEach(([r,i])=>{r===f&&(e=e.concat(n(i,r)))}),Object.entries(t.children).forEach(([r,i])=>{r!==f&&(e=e.concat(n(i,r)))}),e}var Re=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=sr$1({token:t,factory:()=>new Z})}return t})();var Z=class{parse(n){let e=new Xt(n);return new E(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${le(n.root,!0)}`;ci(e)&&(e=`/`);let r=fi(n.queryParams),i=typeof n.fragment==`string`?`#${di(n.fragment)}`:``;return`${e}${r}${i}`}};var Xr=`http://fake`;function ci(t){try{let n=new URL(t,Xr);return n.origin!==Xr||n.pathname.startsWith(`//`)}catch{return!0}}var ui=new Z;function at(t){return t.segments.map(n=>gn(n)).join(`/`)}function le(t,n){if(!t.hasChildren())return at(t);if(n){let e=t.children[f]?le(t.children[f],!1):``,r=[];return Object.entries(t.children).forEach(([i,o])=>{i!==f&&r.push(`${i}:${le(o,!1)}`)}),r.length>0?`${e}(${r.join(`//`)})`:e}else{if(Object.keys(t.children).length===1&&t.children[f]!=null)return`${at(t)}/${le(t.children[f],!1)}`;let e=si(t,(r,i)=>i===f?[li(le(t.children[f],!1))]:[`${i}:${le(r,!1)}`]);return`${at(t)}/(${e.join(`//`)})`}}function li(t){return t.replace(vn,n=>n.replace(/:/g,`%3A`))}function pn(t){return encodeURIComponent(t).replace(/%40/g,`@`).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`)}function nt$1(t){return pn(t).replace(/%3B/gi,`;`)}function di(t){return encodeURI(t)}function Jt(t){return pn(t).replace(/\(/g,`%28`).replace(/\)/g,`%29`).replace(/%26/gi,`&`)}function st(t){return decodeURIComponent(t)}function en(t){return st(t.replace(/\+/g,`%20`))}function gn(t){return`${Jt(t.path)}${hi(t.parameters)}`}function hi(t){return Object.entries(t).map(([n,e])=>`;${Jt(n)}=${Jt(e)}`).join(``)}function fi(t){let n=Object.entries(t).map(([e,r])=>Array.isArray(r)?r.map(i=>`${nt$1(e)}=${nt$1(i)}`).join(`&`):`${nt$1(e)}=${nt$1(r)}`).filter(e=>e);return n.length?`?${n.join(`&`)}`:``}var Gt=1073741824;function lt$1(t,n,e){Number(n)>=32&&!Object.hasOwn(t,Gt)&&(t[Gt]=e,delete t[Gt]),t[n]=e}var vn=/^[^\/()?;#]+/;function Wt(t){let n=t.match(vn);return n?n[0]:``}var pi=/^[^\/()?;=#]+/;function gi(t){let n=t.match(pi);return n?n[0]:``}var vi=/^[^=?&#]+/;function mi(t){let n=t.match(vi);return n?n[0]:``}var yi=/^[^&#]+/;function Ri(t){let n=t.match(yi);return n?n[0]:``}var Xt=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional(`/`););return this.remaining===``||this.peekStartsWith(`?`)||this.peekStartsWith(`#`)?new m([],{}):new m([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional(`?`))do this.parseQueryParam(n);while(this.consumeOptional(`&`));return n}parseFragment(){return this.consumeOptional(`#`)?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new N(4010,!1);if(this.remaining===``)return{};this.consumeOptional(`/`);let e=[];for(this.peekStartsWith(`(`)||e.push(this.parseSegment());this.peekStartsWith(`/`)&&!this.peekStartsWith(`//`)&&!this.peekStartsWith(`/(`);)this.capture(`/`),e.push(this.parseSegment());let r={};this.peekStartsWith(`/(`)&&(this.capture(`/`),r=this.parseParens(!0,n));let i={};return this.peekStartsWith(`(`)&&(i=this.parseParens(!1,n)),(e.length>0||Object.keys(r).length>0)&&(i[f]=new m(e,r)),i}parseSegment(){let n=Wt(this.remaining);if(n===``&&this.peekStartsWith(`;`))throw new N(4009,!1);return this.capture(n),new Y(st(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(`;`);)this.parseParam(n);return n}parseParam(n){let e=gi(this.remaining);if(!e)return;this.capture(e);let r=``;if(this.consumeOptional(`=`)){let i=Wt(this.remaining);i&&(r=i,this.capture(r))}lt$1(n,st(e),st(r))}parseQueryParam(n){let e=mi(this.remaining);if(!e)return;this.capture(e);let r=``;if(this.consumeOptional(`=`)){let a=Ri(this.remaining);a&&(r=a,this.capture(r))}let i=en(e),o=en(r);if(Object.hasOwn(n,i)){let a=n[i];Array.isArray(a)||(a=[a],n[i]=a),a.push(o)}else n[i]=o}parseParens(n,e){let r=Object.create(null);for(this.capture(`(`);!this.consumeOptional(`)`)&&this.remaining.length>0;){let i=Wt(this.remaining),o=this.remaining[i.length];if(o!==`/`&&o!==`)`&&o!==`;`)throw new N(4010,!1);let a;i.indexOf(`:`)>-1?(a=i.slice(0,i.indexOf(`:`)),this.capture(a),this.capture(`:`)):n&&(a=f);let c=this.parseChildren(e+1),s=Object.keys(c).length===1&&c[f]?c[f]:new m([],c);lt$1(r,a??f,s),this.consumeOptional(`//`)}return r}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new N(4011,!1)}};function mn(t){return t.segments.length>0?new m([],{[f]:t}):t}function yn(t){let n=Object.create(null);for(let[r,i]of Object.entries(t.children)){let o=yn(i);if(r===f&&o.segments.length===0&&o.hasChildren())for(let[a,c]of Object.entries(o.children))lt$1(n,a,c);else(o.segments.length>0||o.hasChildren())&&lt$1(n,r,o)}return Si(new m(t.segments,n))}function Si(t){if(t.numberOfChildren===1&&t.children[f]){let n=t.children[f];return new m(t.segments.concat(n.segments),n.children)}return t}function J(t){return t instanceof E}function Rn(t,n,e=null,r=null,i=new Z){return Cn(Sn(t),n,e,r,i)}function Sn(t){let n;function e(o){let a={};for(let s of o.children){let u=e(s);a[s.outlet]=u}let c=new m(o.url,a);return o===t&&(n=c),c}let i=mn(e(t.root));return n??i}function Cn(t,n,e,r,i){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return Qt(o,o,o,e,r,i);let a=Ci(n);if(a.toRoot())return Qt(o,o,new m([],{}),e,r,i);let c=wi(a,o,t),s=c.processChildren?_e(c.segmentGroup,c.index,a.commands):bn(c.segmentGroup,c.index,a.commands);return Qt(o,c.segmentGroup,s,e,r,i)}function dt(t){return typeof t==`object`&&t!=null&&!t.outlets&&!t.segmentPath}function Le(t){return typeof t==`object`&&t!=null&&t.outlets}function tn(t,n,e){t||=`ɵ`;let r=new E;return r.queryParams={[t]:n},e.parse(e.serialize(r)).queryParams[t]}function Qt(t,n,e,r,i,o){let a={};for(let[u,l]of Object.entries(r??{}))l!=null&&(a[u]=Array.isArray(l)?l.map(v=>tn(u,v,o)):tn(u,l,o));let c;t===n?c=e:c=wn(t,n,e);return new E(mn(yn(c)),a,i)}function wn(t,n,e){let r=Object.create(null);return Object.entries(t.children).forEach(([i,o])=>{o===n?r[i]=e:r[i]=wn(o,n,e)}),new m(t.segments,r)}var ht=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,r){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=r,n&&r.length>0&&dt(r[0]))throw new N(4003,!1);let i=r.find(Le);if(i&&i!==ri(r))throw new N(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]==`/`}};function Ci(t){if(typeof t[0]==`string`&&t.length===1&&t[0]===`/`)return new ht(!0,0,t);let n=0,e=!1,r=t.reduce((i,o,a)=>{if(typeof o==`object`&&o!=null){if(o.outlets){let c={};return Object.entries(o.outlets).forEach(([s,u])=>{c[s]=typeof u==`string`?u.split(`/`):u}),[...i,{outlets:c}]}if(o.segmentPath)return[...i,o.segmentPath]}return typeof o!=`string`?[...i,o]:a===0?(o.split(`/`).forEach((c,s)=>{s==0&&c===`.`||(s==0&&c===``?e=!0:c===`..`?n++:c!=``&&i.push(c))}),i):[...i,o]},[]);return new ht(e,n,r)}var he=class{segmentGroup;processChildren;index;constructor(n,e,r){this.segmentGroup=n,this.processChildren=e,this.index=r}};function wi(t,n,e){if(t.isAbsolute)return new he(n,!0,0);if(!e)return new he(n,!1,NaN);if(e.parent===null)return new he(e,!0,0);let r=dt(t.commands[0])?0:1;return bi(e,e.segments.length-1+r,t.numberOfDoubleDots)}function bi(t,n,e){let r=t,i=n,o=e;for(;o>i;){if(o-=i,r=r.parent,!r)throw new N(4005,!1);i=r.segments.length}return new he(r,!1,i-o)}function Ii(t){return Le(t[0])?t[0].outlets:{[f]:t}}function bn(t,n,e){if(t??=new m([],{}),t.segments.length===0&&t.hasChildren())return _e(t,n,e);let r=Mi(t,n,e),i=e.slice(r.commandIndex);if(r.match&&r.pathIndex<t.segments.length){let o=new m(t.segments.slice(0,r.pathIndex),{});return o.children[f]=new m(t.segments.slice(r.pathIndex),t.children),_e(o,0,i)}else return r.match&&i.length===0?new m(t.segments,{}):r.match&&!t.hasChildren()?er(t,n,e):r.match?_e(t,0,i):er(t,n,e)}function _e(t,n,e){if(e.length===0)return new m(t.segments,{});{let r=Ii(e),i=Object.create(null);if(Object.keys(r).some(o=>o!==f)&&t.children[f]&&t.numberOfChildren===1&&t.children[f].segments.length===0){let o=_e(t.children[f],n,e);return new m(t.segments,o.children)}return Object.entries(r).forEach(([o,a])=>{typeof a==`string`&&(a=[a]),a!==null&&(i[o]=bn(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{r[o]===void 0&&(i[o]=a)}),new m(t.segments,i)}}function Mi(t,n,e){let r=0,i=n,o={match:!1,pathIndex:0,commandIndex:0};for(;i<t.segments.length;){if(r>=e.length)return o;let a=t.segments[i],c=e[r];if(Le(c))break;let s=`${c}`,u=r<e.length-1?e[r+1]:null;if(i>0&&s===void 0)break;if(s&&u&&typeof u==`object`&&u.outlets===void 0){if(!nn(s,u,a))return o;r+=2}else{if(!nn(s,{},a))return o;r++}i++}return{match:!0,pathIndex:i,commandIndex:r}}function er(t,n,e){let r=t.segments.slice(0,n),i=0;for(;i<e.length;){let o=e[i];if(Le(o))return new m(r,Ei(o.outlets));if(i===0&&dt(e[0])){let s=t.segments[n];r.push(new Y(s.path,rn(e[0]))),i++;continue}let a=Le(o)?o.outlets[f]:`${o}`,c=i<e.length-1?e[i+1]:null;a&&c&&dt(c)?(r.push(new Y(a,rn(c))),i+=2):(r.push(new Y(a,{})),i++)}return new m(r,{})}function Ei(t){let n={};return Object.entries(t).forEach(([e,r])=>{typeof r==`string`&&(r=[r]),r!==null&&(n[e]=er(new m([],{}),0,r))}),n}function rn(t){let n={};return Object.entries(t).forEach(([e,r])=>n[e]=`${r}`),n}function nn(t,n,e){return t==e.path&&F(n,e.parameters)}var ft$1=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new ae(this.rootInjector)}resetChildren(){this.children=new ae(this.rootInjector)}};var ae=(()=>{class t{rootInjector;contexts=/* @__PURE__ */ new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,r){let i=this.getOrCreateContext(e);i.outlet=r,this.contexts.set(e,i)}onChildOutletDestroyed(e){let r=this.getContext(e);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=/* @__PURE__ */ new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let r=this.getContext(e);return r||(r=new ft$1(this.rootInjector),this.contexts.set(e,r)),r}getContext(e){return this.contexts.get(e)||null}static ɵfac=function(r){return new(r||t)(Ce$1(pe$1))};static ɵprov=ae$2({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var pt=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=tr(n,this._root);return e?e.children.map(r=>r.value):[]}firstChild(n){let e=tr(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=rr(n,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==n)}pathFromRoot(n){return rr(n,this._root).map(e=>e.value)}};function tr(t,n){if(t===n.value)return n;for(let e of n.children){let r=tr(t,e);if(r)return r}return null}function rr(t,n){if(t===n.value)return[n];for(let e of n.children){let r=rr(t,e);if(r.length)return r.unshift(n),r}return[]}var M$1=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function de(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var je=class extends pt{snapshot;constructor(n,e){super(n),this.snapshot=e,pr(this,n)}toString(){return this.snapshot.toString()}};function In(t,n){let e=Ai(t,n),r=new bn$2([new Y(``,{})]),i=new bn$2({}),o=new bn$2({}),s=new G(r,i,new bn$2({}),new bn$2(``),o,f,t,e.root);return s.snapshot=e.root,new je(new M$1(s,[]),e)}function Ai(t,n){return new xe(``,new M$1(new ge([],{},{},``,{},f,t,null,{},n),[]))}var G=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(n,e,r,i,o,a,c,s){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=r,this.fragmentSubject=i,this.dataSubject=o,this.outlet=a,this.component=c,this._futureSnapshot=s,this.title=this.dataSubject?.pipe(dt$2(u=>u[He]))??Jp(void 0),this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(dt$2(n=>oe(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(dt$2(n=>oe(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(n){this._futureSnapshot=n,this.pending?.set(!0)}};var Ti=`always`;function fr(t,n,e){let r,{routeConfig:i}=t;return n!==null&&(e===`always`||i?.path===``||!n.component&&!n.routeConfig?.loadComponent)?r={params:Object.keys(t.params).length===0?n.params:Object.freeze($$2($$2({},n.params),t.params)),data:Object.freeze($$2($$2({},n.data),t.data)),resolve:$$2($$2($$2($$2({},t.data),n.data),i?.data),t._resolvedData)}:r={params:Object.freeze($$2({},t.params)),data:Object.freeze($$2({},t.data)),resolve:$$2($$2({},t.data),t._resolvedData??{})},i&&En(i)&&(r.resolve[He]=i.title),r}var ge=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[He]}constructor(n,e,r,i,o,a,c,s,u,l){this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o,this.outlet=a,this.component=c,this.routeConfig=s,this._resolve=u,this._environmentInjector=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=oe(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=oe(this.queryParams),this._queryParamMap}toString(){return`Route(url:'${this.url.map(r=>r.toString()).join(`/`)}', path:'${this.routeConfig?this.routeConfig.path:``}')`}};var xe=class extends pt{url;constructor(n,e){super(e),this.url=n,pr(this,e)}toString(){return Mn(this._root)}};function pr(t,n){n.value._routerState=t,n.children.forEach(e=>pr(t,e))}function Mn(t){let n=t.children.length>0?` { ${t.children.map(Mn).join(`, `)} } `:``;return`${t.value}${n}`}function Kt(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,F(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),F(n.params,e.params)||t.paramsSubject.next(e.params),ti(n.url,e.url)||t.urlSubject.next(e.url),F(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function nr(t,n){let e=F(t.params,n.params)&&ai(t.url,n.url),r=!t.parent!=!n.parent;return e&&!r&&(!t.parent||nr(t.parent,n.parent))}function En(t){return typeof t.title==`string`||t.title===null}var An=new A(``);var gr=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=f;activateEvents=new Oe$3;deactivateEvents=new Oe$3;attachEvents=new Oe$3;detachEvents=new Oe$3;routerOutletData=yL();parentContexts=w$2(ae);location=w$2(ai$2);changeDetector=w$2(IL);inputBinder=w$2(Ve,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:r,previousValue:i}=e.name;if(r)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new N(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new N(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new N(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,r){this.activated=e,this._activatedRoute=r,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.inputBinder?.unsubscribeFromRouteData(this),this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,r){if(this.isActivated)throw new N(4013,!1);this._activatedRoute=e;let i=this.location,a=e.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,s=new ir(e,c,i.injector,this.routerOutletData);this.activated=i.createComponent(a,{index:i.length,injector:s,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.activateEvents.emit(this.activated.instance)}static ɵfac=function(r){return new(r||t)};static ɵdir=sE({type:t,selectors:[[`router-outlet`]],inputs:{name:`name`,routerOutletData:[1,`routerOutletData`]},outputs:{activateEvents:`activate`,deactivateEvents:`deactivate`,attachEvents:`attach`,detachEvents:`detach`},exportAs:[`outlet`],features:[Mg]})}return t})();var ir=class{route;childContexts;parent;outletData;constructor(n,e,r,i){this.route=n,this.childContexts=e,this.parent=r,this.outletData=i}get(n,e){return n===G?this.route:n===ae?this.childContexts:n===An?this.outletData:this.parent.get(n,e)}};var Ve=new A(``);var Tn=(()=>{class t{options;feature;outletDataSubscriptions=/* @__PURE__ */ new Map;outletSeenKeys=/* @__PURE__ */ new Map;outletEffects=/* @__PURE__ */ new Map;constructor(e,r=null){this.options=e,this.feature=r,this.options.queryParams??=!0}bindActivatedRouteToOutletComponent(e,r){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e,r)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e),this.outletSeenKeys.delete(e),this.outletEffects.get(e)?.forEach(r=>r.destroy()),this.outletEffects.delete(e)}subscribeToRouteData(e,r){let{activatedRoute:i}=e,o=[],a=[];if(this.feature?.createResourceOutletBindingEffects&&e.activatedComponentRef){let{handledKeys:s,createdEffects:u}=this.feature.createResourceOutletBindingEffects(e.activatedComponentRef,i);o.push(...u),a=s}o.length>0&&this.outletEffects.set(e,o);let c=ch([this.options.queryParams?i.queryParams:Jp({}),i.params,i.data]).pipe(Th(([s,u,l],v)=>(l=$$2($$2($$2($$2({},s),u),l),i.resources),v===0?Jp(l):Promise.resolve(l)))).subscribe(s=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(e);return}let u=_L(i.component);if(!u){this.unsubscribeFromRouteData(e);return}let l=this.outletSeenKeys.get(e);l||(l=/* @__PURE__ */ new Set,this.outletSeenKeys.set(e,l));for(let p of Object.keys(s))l.add(p);let v=this.options.unmatchedInputBehavior??`alwaysUndefined`;for(let{templateName:p}of u.inputs){if(a.includes(p))continue;let y=s[p];(y!==void 0||v===`alwaysUndefined`||l.has(p))&&e.activatedComponentRef.setInput(p,y)}});this.outletDataSubscriptions.set(e,c)}static ɵfac=function(r){yv()};static ɵprov=ae$2({token:t,factory:t.ɵfac})}return t})();var vr=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵcmp=tE({type:t,selectors:[[`ng-component`]],exportAs:[`emptyRouterOutlet`],decls:1,vars:0,template:function(r,i){r&1&&Gf(0,`router-outlet`)},dependencies:[gr],encapsulation:2,changeDetection:1})}return t})();function mr(t){let n=t.children&&t.children.map(mr),e=n?U$3($$2({},t),{children:n}):$$2({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==f&&(e.component=vr),e}var Ue=`imperative`;var w=(function(t){return t[t.NavigationStart=0]=`NavigationStart`,t[t.NavigationEnd=1]=`NavigationEnd`,t[t.NavigationCancel=2]=`NavigationCancel`,t[t.NavigationError=3]=`NavigationError`,t[t.RoutesRecognized=4]=`RoutesRecognized`,t[t.ResolveStart=5]=`ResolveStart`,t[t.ResolveEnd=6]=`ResolveEnd`,t[t.GuardsCheckStart=7]=`GuardsCheckStart`,t[t.GuardsCheckEnd=8]=`GuardsCheckEnd`,t[t.RouteConfigLoadStart=9]=`RouteConfigLoadStart`,t[t.RouteConfigLoadEnd=10]=`RouteConfigLoadEnd`,t[t.ChildActivationStart=11]=`ChildActivationStart`,t[t.ChildActivationEnd=12]=`ChildActivationEnd`,t[t.ActivationStart=13]=`ActivationStart`,t[t.ActivationEnd=14]=`ActivationEnd`,t[t.Scroll=15]=`Scroll`,t[t.NavigationSkipped=16]=`NavigationSkipped`,t})(w||{});var U=class{id;url;constructor(n,e){this.id=n,this.url=e}};var se=class extends U{type=w.NavigationStart;navigationTrigger;restoredState;constructor(n,e,r=`imperative`,i=null){super(n,e),this.navigationTrigger=r,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}};var $=class extends U{urlAfterRedirects;type=w.NavigationEnd;constructor(n,e,r){super(n,e),this.urlAfterRedirects=r}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}};var b=(function(t){return t[t.Redirect=0]=`Redirect`,t[t.SupersededByNewNavigation=1]=`SupersededByNewNavigation`,t[t.NoDataFromResolver=2]=`NoDataFromResolver`,t[t.GuardRejected=3]=`GuardRejected`,t[t.Aborted=4]=`Aborted`,t})(b||{});var ke=(function(t){return t[t.IgnoredSameUrlNavigation=0]=`IgnoredSameUrlNavigation`,t[t.IgnoredByUrlHandlingStrategy=1]=`IgnoredByUrlHandlingStrategy`,t})(ke||{});var j=class extends U{reason;code;type=w.NavigationCancel;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Dn(t){return t instanceof j&&(t.code===b.Redirect||t.code===b.SupersededByNewNavigation)}var W=class extends U{reason;code;type=w.NavigationSkipped;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}};var ce=class extends U{error;target;type=w.NavigationError;constructor(n,e,r,i){super(n,e),this.error=r,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}};var $e=class extends U{urlAfterRedirects;state;type=w.RoutesRecognized;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var gt=class extends U{urlAfterRedirects;state;type=w.GuardsCheckStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var vt$1=class extends U{urlAfterRedirects;state;shouldActivate;type=w.GuardsCheckEnd;constructor(n,e,r,i,o){super(n,e),this.urlAfterRedirects=r,this.state=i,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}};var mt=class extends U{urlAfterRedirects;state;type=w.ResolveStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var yt=class extends U{urlAfterRedirects;state;type=w.ResolveEnd;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var Rt=class{route;type=w.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}};var St=class{route;type=w.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}};var Ct=class{snapshot;type=w.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var wt=class{snapshot;type=w.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var bt=class{snapshot;type=w.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var It=class{snapshot;type=w.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var ve=class{};var ze=class{};var me=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function Di(t){return!(t instanceof ve)&&!(t instanceof me)&&!(t instanceof ze)}function Ni(t,n,e){let r=/* @__PURE__ */ new Set;return{newlyCreatedRoutes:r,state:new je(qe(t,n._root,e?e._root:void 0,r),n)}}function qe(t,n,e,r){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._setPending(n.value);return new M$1(i,_i(t,n,e,r))}else{if(t.shouldAttach(n.value)){let a=t.retrieve(n.value);if(a!==null){let c=a.route;return c.value._setPending(n.value),c.children=n.children.map(s=>qe(t,s,void 0,r)),c}}let i=Ui(n.value);i._setPending(n.value),r.add(i);return new M$1(i,n.children.map(a=>qe(t,a,void 0,r)))}}function _i(t,n,e,r){return n.children.map(i=>{for(let o of e.children)if(t.shouldReuseRoute(i.value,o.value.snapshot))return qe(t,i,o,r);return qe(t,i,void 0,r)})}function Ui(t){return new G(new bn$2(t.url),new bn$2(t.params),new bn$2(t.queryParams),new bn$2(t.fragment),new bn$2(t.data),t.outlet,t.component,t)}var X=class t extends Error{redirectTo;navigationBehaviorOptions;constructor(n,e){super(),this.redirectTo=n,this.navigationBehaviorOptions=e,Object.setPrototypeOf(this,t.prototype)}};var Nn=`ngNavigationCancelingError`;function Oe(t,n){let{redirectTo:e,navigationBehaviorOptions:r}=J(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,i=_n(!1,b.Redirect);return i.url=e,i.navigationBehaviorOptions=r,i}function _n(t,n){let e=/* @__PURE__ */ new Error(`NavigationCancelingError: ${t||``}`);return e[Nn]=!0,e.cancellationCode=n,e}function Oi(t){return Un(t)&&J(t.url)}function Un(t){return!!t&&t[Nn]}var or=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,r,i,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=r,this.forwardEvent=i,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,r,n),Kt(this.futureState.root),this.activateChildRoutes(e,r,n)}deactivateChildRoutes(n,e,r){let i=de(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,i[a],r),delete i[a]}),Object.values(i).forEach(o=>{this.deactivateRouteAndItsChildren(o,r)})}deactivateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(i===o)if(i.component){let a=r.getContext(i.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,r);else o&&this.deactivateRouteAndItsChildren(e,r)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=de(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);if(r&&r.outlet){let a=r.outlet.detach(),c=r.children.contexts;r.resetChildren(),this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:c})}}deactivateRouteAndOutlet(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=de(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null),n.value._localInjector?.destroy()}activateChildRoutes(n,e,r){let i=de(e);n.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],r),this.forwardEvent(new It(o.value.snapshot))}),n.children.length&&this.forwardEvent(new wt(n.value.snapshot))}activateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(Kt(i),i===o)if(i.component){let a=r.getOrCreateContext(i.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,r);else if(i.component){let a=r.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let c=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),a.children.onOutletReAttached(c.contexts),a.attachRef=c.componentRef,a.route=c.route.value,a.outlet&&a.outlet.attach(c.componentRef,c.route.value),Kt(c.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=i,a.outlet&&a.outlet.activateWith(i,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,r)}};var Mt=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}};var fe=class{component;route;constructor(n,e){this.component=n,this.route=e}};function Pi(t,n,e){let r=t._root;return Ne(r,n?n._root:null,e,[r.value])}function Li(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function Se(t,n){let e=Symbol(),r=n.get(t,e);return r===e?typeof t==`function`&&!xh(t)?t:n.get(t):r}function Ne(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=de(n);return t.children.forEach(a=>{ji(a,o[a.value.outlet],e,r.concat([a.value]),i),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,c])=>Pe(c,e.getContext(a),e,i)),i}function ji(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,c=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let s=xi(a,o,o.routeConfig.runGuardsAndResolvers);s?i.canActivateChecks.push(new Mt(r)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Ne(t,n,c?c.children:null,r,i):Ne(t,n,e,r,i),s&&c&&c.outlet&&c.outlet.isActivated&&i.canDeactivateChecks.push(new fe(c.outlet.component,a))}else a&&Pe(n,c,e,i),i.canActivateChecks.push(new Mt(r)),o.component?Ne(t,null,c?c.children:null,r,i):Ne(t,null,e,r,i);return i}function xi(t,n,e){if(typeof e==`function`)return ao$1(n._environmentInjector,()=>e(t,n));switch(e){case`pathParamsChange`:return!ie(t.url,n.url);case`pathParamsOrQueryParamsChange`:return!ie(t.url,n.url)||!F(t.queryParams,n.queryParams);case`always`:return!0;case`paramsOrQueryParamsChange`:return!nr(t,n)||!F(t.queryParams,n.queryParams);default:return!nr(t,n)}}function Pe(t,n,e,r){let i=de(t),o=t.value;Object.entries(i).forEach(([a,c])=>{o.component?n?Pe(c,n.children.getContext(a),n.children,r):Pe(c,null,null,r):Pe(c,e?e.getContext(a):null,e,r)}),o.component?n&&n.outlet&&n.outlet.isActivated?r.canDeactivateChecks.push(new fe(n.outlet.component,o)):r.canDeactivateChecks.push(new fe(null,o)):r.canDeactivateChecks.push(new fe(null,o))}function Ge(t){return typeof t==`function`}function ki(t){return typeof t==`boolean`}function $i(t){return t&&Ge(t.canLoad)}function zi(t){return t&&Ge(t.canActivate)}function qi(t){return t&&Ge(t.canActivateChild)}function Fi(t){return t&&Ge(t.canDeactivate)}function Hi(t){return t&&Ge(t.canMatch)}function On(t){return t instanceof Nn$2||t?.name===`EmptyError`}var it$1=Symbol(`INITIAL_VALUE`);function ye(){return Th(t=>ch(t.map(n=>n.pipe(xi$2(1),Kc(e=>{if(e instanceof X)return Jp(e);throw e}),bh(it$1)))).pipe(dt$2(n=>{for(let e of n)if(e!==!0){if(e===it$1)return it$1;if(e===!1||Bi(e))return e}return!0}),Sn$2(n=>n!==it$1),xi$2(1)))}function Bi(t){return J(t)||t instanceof X}function Pn(t){return new T(n=>{if(t.aborted){n.next(),n.complete();return}let e=()=>{n.next(),n.complete()};return t.addEventListener(`abort`,e),()=>t.removeEventListener(`abort`,e)})}function Ln(t){return _h(Pn(t))}function Vi(t){return ft$2(n=>{let{targetSnapshot:e,currentSnapshot:r,guards:{canActivateChecks:i,canDeactivateChecks:o}}=n;return o.length===0&&i.length===0?Jp(U$3($$2({},n),{guardsResult:!0})):Gi(o,e,r).pipe(ft$2(a=>a&&ki(a)?Wi(e,i,t):Jp(a)),dt$2(a=>U$3($$2({},n),{guardsResult:a})))})}function Gi(t,n,e){return we$1(t).pipe(ft$2(r=>Ji(r.component,r.route,e,n)),Ih(r=>r!==!0,!0))}function Wi(t,n,e){return we$1(n).pipe(hh(r=>Ur(Ki(r.route.parent,e),Qi(r.route,e),Zi(t,r.path),Yi(t,r.route))),Ih(r=>r!==!0,!0))}function Qi(t,n){return t!==null&&n&&n(new bt(t)),Jp(!0)}function Ki(t,n){return t!==null&&n&&n(new Ct(t)),Jp(!0)}function Yi(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return Jp(!0);let r=e.map(i=>uh(()=>{let o=n._environmentInjector,a=Se(i,o);return Be(zi(a)?a.canActivate(n,t):ao$1(o,()=>a(n,t))).pipe(Ih())}));return Jp(r).pipe(ye())}function Zi(t,n){let e=n[n.length-1],i=n.slice(0,n.length-1).reverse().map(o=>Li(o)).filter(o=>o!==null).map(o=>uh(()=>{let a=o.guards.map(c=>{let s=o.node._environmentInjector,u=Se(c,s);return Be(qi(u)?u.canActivateChild(e,t):ao$1(s,()=>u(e,t))).pipe(Ih())});return Jp(a).pipe(ye())}));return Jp(i).pipe(ye())}function Ji(t,n,e,r){let i=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!i||i.length===0)return Jp(!0);let o=i.map(a=>{let c=n._environmentInjector,s=Se(a,c);return yr(()=>Fi(s)?s.canDeactivate(t,n,e,r):ao$1(c,()=>s(t,n,e,r))).pipe(Ih())});return Jp(o).pipe(ye())}function Xi(t,n,e,r,i){let o=n.canLoad;if(o===void 0||o.length===0)return Jp(!0);let a=o.map(c=>{let s=Se(c,t),u=yr(()=>$i(s)?s.canLoad(n,e):ao$1(t,()=>s(n,e)));return i?u.pipe(Ln(i)):u});return Jp(a).pipe(ye(),jn(r))}function yr(t){try{return Be(t())}catch(n){return new T(e=>e.error(n))}}function jn(t){return Bp(Nh(n=>{if(typeof n!=`boolean`)throw Oe(t,n)}),dt$2(n=>n===!0))}function eo(t,n,e,r,i,o){let a=n.canMatch;if(!a||a.length===0)return Jp(!0);let c=a.map(s=>{let u=Se(s,t);return yr(()=>Hi(u)?u.canMatch(n,e,i):ao$1(t,()=>u(n,e,i))).pipe(Ln(o))});return Jp(c).pipe(ye(),jn(r))}var q=class t extends Error{name=`NoMatch`;segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}};var Fe=class t extends Error{urlTree;name=`AbsoluteRedirect`;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function to(t){throw new N(4e3,!1)}function ro(t){throw _n(!1,b.GuardRejected)}var ar=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let r=[],i=e.root;for(;;){if(r=r.concat(i.segments),i.numberOfChildren===0)return r;if(i.numberOfChildren>1||!i.children[f])throw to(`${n.redirectTo}`);i=i.children[f]}}async applyRedirectCommands(n,e,r,i,o){let a=await no(e,i,o);if(a instanceof E)throw new Fe(a);let c=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,r);if(a[0]===`/`)throw new Fe(c);return c}applyRedirectCreateUrlTree(n,e,r,i){return new E(this.createSegmentGroup(n,e.root,r,i),this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let r={};return Object.entries(n).forEach(([i,o])=>{if(typeof o==`string`&&o[0]===`:`){let c=o.substring(1);r[i]=e[c]}else r[i]=o}),r}createSegmentGroup(n,e,r,i){let o=this.createSegments(n,e.segments,r,i),a=Object.create(null);return Object.entries(e.children).forEach(([c,s])=>{a[c]=this.createSegmentGroup(n,s,r,i)}),new m(o,a)}createSegments(n,e,r,i){return e.map(o=>o.path[0]===`:`?this.findPosParam(n,o,i):this.findOrReturn(o,r))}findPosParam(n,e,r){let i=r[e.path.substring(1)];if(!i)throw new N(4001,!1);return i}findOrReturn(n,e){let r=0;for(let i of e){if(i.path===n.path)return e.splice(r),i;r++}return n}};function no(t,n,e){if(typeof t==`string`)return Promise.resolve(t);let r=t;return ct$1(Be(ao$1(e,()=>r(n))))}function io(t,n){return t.providers&&!t._injector&&(t._injector=Rf(t.providers,n,`Route: ${t.path}`)),t._injector??n}function H(t){return t.outlet||f}function oo(t,n){let e=t.filter(r=>H(r)===n);return e.push(...t.filter(r=>H(r)!==n)),e}var sr={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function xn(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function ao(t,n,e,r,i,o,a){let c=kn(t,n,e);if(!c.matched)return Jp(c);let s=xn(o(c));return r=io(n,r),eo(r,n,e,i,s,a).pipe(dt$2(u=>u===!0?c:$$2({},sr)))}function kn(t,n,e){if(n.path===``)return n.pathMatch===`full`&&(t.hasChildren()||e.length>0)?$$2({},sr):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(n.matcher||sn)(e,t,n);if(!i)return $$2({},sr);let o={};Object.entries(i.posParams??{}).forEach(([c,s])=>{o[c]=s.path});let a=i.consumed.length>0?$$2($$2({},o),i.consumed[i.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:a,positionalParamSegments:i.posParams??{}}}function on(t,n,e,r){return e.length>0&&uo(t,e,r)?{segmentGroup:new m(n,co(r,new m(e,t.children))),slicedSegments:[]}:e.length===0&&lo(t,e,r)?{segmentGroup:new m(t.segments,so(t,e,r,t.children)),slicedSegments:e}:{segmentGroup:new m(t.segments,t.children),slicedSegments:e}}function so(t,n,e,r){let i={};for(let o of e)if(At(t,n,o)&&!r[H(o)]){let a=new m([],{});i[H(o)]=a}return $$2($$2({},r),i)}function co(t,n){let e={};e[f]=n;for(let r of t)if(r.path===``&&H(r)!==f){let i=new m([],{});e[H(r)]=i}return e}function uo(t,n,e){return e.some(r=>At(t,n,r)&&H(r)!==f)}function lo(t,n,e){return e.some(r=>At(t,n,r))}function At(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch===`full`?!1:e.path===``}function ho(t,n,e){return n.length===0&&!t.hasChildren()}var cr=class{};async function fo(t,n,e,r,i,o,a,c){return new ur(t,n,e,r,i,a,o,c).recognize()}var po=31;var ur=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;queryParams;constructor(n,e,r,i,o,a,c,s){this.injector=n,this.configLoader=e,this.rootComponentType=r,this.config=i,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=c,this.abortSignal=s,this.applyRedirects=new ar(this.urlSerializer,this.urlTree),this.queryParams=Object.freeze($$2({},this.urlTree.queryParams))}noMatchError(n){return new N(4002,`'${n.segmentGroup}'`)}async recognize(){let n=on(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:r}=await this.match(n),o=new xe(``,new M$1(r,e)),a=Rn(r,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new ge([],Object.freeze({}),this.queryParams,this.urlTree.fragment,Object.freeze({}),f,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,f,e),rootSnapshot:e}}catch(r){if(r instanceof Fe)return this.absoluteRedirectCount++,this.absoluteRedirectCount>po&&(this.allowRedirects=!1),this.urlTree=r.urlTree,this.queryParams=Object.freeze($$2({},this.urlTree.queryParams)),this.match(r.urlTree.root);throw r instanceof q?this.noMatchError(r):r}}async processSegmentGroup(n,e,r,i,o){if(r.segments.length===0&&r.hasChildren())return this.processChildren(n,e,r,o);let a=await this.processSegment(n,e,r,r.segments,i,!0,o);return a instanceof M$1?[a]:[]}async processChildren(n,e,r,i){let o=[];for(let s of Object.keys(r.children))s===`primary`?o.unshift(s):o.push(s);let a=[];for(let s of o){let u=r.children[s],l=oo(e,s),v=await this.processSegment(n,l,u,u.segments,s,!0,i);v instanceof M$1&&a.push(v)}let c=$n(a);return go(c),c}async processSegment(n,e,r,i,o,a,c){for(let s of e)try{return await this.processSegmentAgainstRoute(s._injector??n,e,s,r,i,o,a,c)}catch(u){if(u instanceof q||On(u))continue;throw u}if(ho(r,i))return new cr;throw new q(r)}async processSegmentAgainstRoute(n,e,r,i,o,a,c,s){if(H(r)!==a&&(a===f||!At(i,o,r)||!r.children?.length&&!r.loadChildren||o.length===0&&!i.hasChildren()))throw new q(i);if(r.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,i,r,o,a,s);if(this.allowRedirects&&c)return this.expandSegmentAgainstRouteUsingRedirect(n,i,e,r,o,a,s);throw new q(i)}async expandSegmentAgainstRouteUsingRedirect(n,e,r,i,o,a,c){let{matched:s,parameters:u,consumedSegments:l,positionalParamSegments:v,remainingSegments:p}=kn(e,i,o);if(!s)throw new q(e);let y=this.createSnapshot(n,i,o,u,c);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let x=await this.applyRedirects.applyRedirectCommands(l,i.redirectTo,v,xn(y),n),B=await this.applyRedirects.lineralizeSegments(i,x);return this.processSegment(n,r,e,B.concat(p),a,!1,c)}createSnapshot(n,e,r,i,o){let a=new ge(r,i,this.queryParams,this.urlTree.fragment,yo(e),H(e),e.component??e._loadedComponent??null,e,Ro(e),n),c=fr(a,o,this.paramsInheritanceStrategy);return a.params=c.params,a.data=c.data,a}async matchSegmentAgainstRoute(n,e,r,i,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let c=ee=>this.createSnapshot(n,r,ee.consumedSegments,ee.parameters,a),s=await ct$1(ao(e,r,i,n,this.urlSerializer,c,this.abortSignal));if(r.path===`**`&&(e.children={}),!s?.matched)throw new q(e);n=r._injector??n;let{routes:u}=await this.getChildConfig(n,r,i),l=r._loadedInjector??n,{parameters:v,consumedSegments:p,remainingSegments:y}=s,x=this.createSnapshot(n,r,p,v,a),B=H(r)===o,{segmentGroup:we,slicedSegments:be}=B?on(e,p,y,u):{segmentGroup:e,slicedSegments:y};if(B&&be.length===0&&we.hasChildren())return new M$1(x,await this.processChildren(l,u,we,x));if(B&&u.length===0&&be.length===0)return new M$1(x,[]);let Ie=await this.processSegment(l,u,we,be,B?f:o,!0,x);if(!B&&!(Ie instanceof M$1))throw new q(e);return new M$1(x,Ie instanceof M$1?[Ie]:[])}async getChildConfig(n,e,r){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await ct$1(Xi(n,e,r,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw ro(e)}return{routes:[],injector:n}}};function go(t){t.sort((n,e)=>n.value.outlet===f?-1:e.value.outlet===f?1:n.value.outlet.localeCompare(e.value.outlet))}function vo(t){let n=t.value.routeConfig;return n&&n.path===``}function $n(t){let n=[],e=/* @__PURE__ */ new Set;for(let i of t){if(!vo(i)){n.push(i);continue}let o=n.find(a=>i.value.routeConfig===a.value.routeConfig);o!==void 0?(o.children.push(...i.children),e.add(o)):n.push(i)}for(let i of e){let o=$n(i.children);n.push(new M$1(i.value,o))}let r=n.filter(i=>!e.has(i));return mo(r),r}function mo(t){let n=Object.create(null);t.forEach(e=>{let r=n[e.value.outlet];if(r){r.url.map(a=>a.toString()).join(`/`);e.value.url.map(a=>a.toString()).join(`/`);throw new N(4006,!1)}n[e.value.outlet]=e.value})}function yo(t){return t.data||{}}function Ro(t){return t.resolve||{}}function So(t,n,e,r,i,o,a){return ft$2(async c=>{let{state:s,tree:u}=await fo(t,n,e,r,c.extractedUrl,i,o,a);return U$3($$2({},c),{targetSnapshot:s,urlAfterRedirects:u})})}function Co(t){return ft$2(n=>{let{targetSnapshot:e,guards:{canActivateChecks:r}}=n;if(!r.length)return Jp(n);let i=new Set(r.map(c=>c.route)),o=/* @__PURE__ */ new Set;for(let c of i)if(!o.has(c))for(let s of zn(c))o.add(s);let a=0;return we$1(o).pipe(hh(c=>i.has(c)?wo(c,e,t):(c.data=fr(c,c.parent,t).resolve,Jp(void 0))),Nh(()=>a++),Dh(1),ft$2(c=>a===o.size?Jp(n):lt$4))})}function zn(t){return[t,...t.children.map(e=>zn(e)).flat()]}function wo(t,n,e){let r=t.routeConfig,i=t._resolve;return r?.title!==void 0&&!En(r)&&(i[He]=r.title),uh(()=>(t.data=fr(t,t.parent,e).resolve,bo(i,t,n).pipe(dt$2(o=>(t._resolvedData=o,t.data=$$2($$2({},t.data),o),null)))))}function bo(t,n,e){let r=Zt(t);if(r.length===0)return Jp({});let i={};return we$1(r).pipe(ft$2(o=>Io(t[o],n,e).pipe(Ih(),Nh(a=>{if(a instanceof X)throw Oe(new Z,a);i[o]=a}))),Dh(1),dt$2(()=>i),Kc(o=>On(o)?lt$4:Xp(o)))}function Io(t,n,e){let r=n._environmentInjector,i=Se(t,r);return Be(i.resolve?i.resolve(n,e):ao$1(r,()=>i(n,e)))}var Rr=new A(``);function lr(t){return Th(n=>{let e=t(n);return e?we$1(e).pipe(dt$2(()=>n)):Jp(n)})}var Sr=(()=>{class t{buildTitle(e){let r,i=e.root;for(;i!==void 0;)r=this.getResolvedTitleForRoute(i)??r,i=i.children.find(o=>o.outlet===f);return r}getResolvedTitleForRoute(e){return e.data[He]}static ɵfac=function(r){return new(r||t)};static ɵprov=sr$1({token:t,factory:()=>w$2(qn)})}return t})();var qn=(()=>{class t extends Sr{title;constructor(e){super(),this.title=e}updateTitle(e){let r=this.buildTitle(e);r!==void 0&&this.title.setTitle(r)}static ɵfac=function(r){return new(r||t)(Ce$1(go$1))};static ɵprov=ae$2({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Ce=new A(``,{factory:()=>({})});var We=new A(``);var Fn=(()=>{class t{componentLoaders=/* @__PURE__ */ new WeakMap;childrenLoaders=/* @__PURE__ */ new WeakMap;onLoadStartListener;onLoadEndListener;compiler=w$2(DI);async loadComponent(e,r){if(this.componentLoaders.get(r))return this.componentLoaders.get(r);if(r._loadedComponent)return Promise.resolve(r._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(r);let i=(async()=>{try{let o=await un(ao$1(e,()=>r.loadComponent())),a=await Bn(mL(o));return this.onLoadEndListener&&this.onLoadEndListener(r),r._loadedComponent=a,a}finally{this.componentLoaders.delete(r)}})();return this.componentLoaders.set(r,i),i}loadChildren(e,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Promise.resolve({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let i=(async()=>{try{let o=await Hn(r,this.compiler,e,this.onLoadEndListener);return r._loadedRoutes=o.routes,r._loadedInjector=o.injector,r._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(r)}})();return this.childrenLoaders.set(r,i),i}static ɵfac=function(r){return new(r||t)};static ɵprov=sr$1({token:t,factory:t.ɵfac})}return t})();async function Hn(t,n,e,r){let i=await un(ao$1(e,()=>t.loadChildren())),o=await Bn(mL(i)),a;o instanceof Af||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),r&&r(t);let c,s,l;return Array.isArray(a)?s=a:(c=a.create(e).injector,l=a,s=c.get(We,[],{optional:!0,self:!0}).flat()),{routes:s.map(mr),injector:c,factory:l}}async function Bn(t){return t}var Tt=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=sr$1({token:t,factory:()=>w$2(Mo)})}return t})();var Mo=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,r){return e}static ɵfac=function(r){return new(r||t)};static ɵprov=sr$1({token:t,factory:t.ɵfac})}return t})();var Vn=new A(``);var Eo=()=>{};var Gn=new A(``);var Wn=(()=>{class t{currentNavigation=wo$1(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=wo$1(null);events=new J$2;transitionAbortWithErrorSubject=new J$2;configLoader=w$2(Fn);environmentInjector=w$2(pe$1);destroyRef=w$2(he$1);urlSerializer=w$2(Re);rootContexts=w$2(ae);location=w$2(yt$1);inputBindingEnabled=w$2(Ve,{optional:!0})!==null;titleStrategy=w$2(Sr);options=w$2(Ce,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||Ti;urlHandlingStrategy=w$2(Tt);createViewTransition=w$2(Vn,{optional:!0});navigationErrorHandler=w$2(Gn,{optional:!0});routerResourcesFeature=w$2(Rr,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Jp(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=i=>this.events.next(new Rt(i)),r=i=>this.events.next(new St(i));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let r=++this.navigationId;Ip(()=>{this.transitions?.next(U$3($$2({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:r,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new bn$2(null),this.transitions.pipe(Sn$2(r=>r!==null),Th(r=>{let i=!0,o=!1,a=new AbortController,c=()=>!o&&this.currentTransition?.id===r.id;return Jp(r).pipe(Th(s=>{if(this.navigationId>r.id)return this.cancelNavigationTransition(r,``,b.SupersededByNewNavigation),lt$4;this.currentTransition=r;let u=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl==`string`?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:u?U$3($$2({},u),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let l=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),v=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!l&&v!==`reload`)return this.events.next(new W(s.id,this.urlSerializer.serialize(s.rawUrl),``,ke.IgnoredSameUrlNavigation)),s.resolve(!1),lt$4;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return Jp(s).pipe(Th(p=>(this.events.next(new se(p.id,this.urlSerializer.serialize(p.extractedUrl),p.source,p.restoredState)),p.id!==this.navigationId?lt$4:Promise.resolve(p))),So(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),Nh(p=>{r.targetSnapshot=p.targetSnapshot,r.urlAfterRedirects=p.urlAfterRedirects,this.currentNavigation.update(y=>(y.finalUrl=p.urlAfterRedirects,y)),this.events.next(new ze)}),Th(p=>we$1(r.routesRecognizeHandler.deferredHandle??Jp(void 0)).pipe(dt$2(()=>p))),Nh(()=>{let p=new $e(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(p)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:p,extractedUrl:y,source:x,restoredState:B,extras:we}=s,be=new se(p,this.urlSerializer.serialize(y),x,B);this.events.next(be);let Ie=In(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=r=U$3($$2({},s),{targetSnapshot:Ie,urlAfterRedirects:y,extras:U$3($$2({},we),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(ee=>(ee.finalUrl=y,ee)),Jp(r)}else return this.events.next(new W(s.id,this.urlSerializer.serialize(s.extractedUrl),``,ke.IgnoredByUrlHandlingStrategy)),s.resolve(!1),lt$4}),dt$2(s=>{let u=new gt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(u),this.currentTransition=r=U$3($$2({},s),{guards:Pi(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),r}),Vi(s=>this.events.next(s)),Th(s=>{if(r.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!=`boolean`)throw Oe(this.urlSerializer,s.guardsResult);let u=new vt$1(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(u),!c())return lt$4;if(!s.guardsResult)return this.cancelNavigationTransition(s,``,b.GuardRejected),lt$4;if(s.guards.canActivateChecks.length===0)return Jp(s);let l=new mt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(l),!c())return lt$4;let v=!1;return Jp(s).pipe(Co(this.paramsInheritanceStrategy),Nh({next:()=>{v=!0;let p=new yt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(p)},complete:()=>{v||this.cancelNavigationTransition(s,``,b.NoDataFromResolver)}}))}),lr(s=>{let u=v=>{let p=[];if(v.routeConfig?._loadedComponent)v.component=v.routeConfig?._loadedComponent;else if(v.routeConfig?.loadComponent){let y=v._environmentInjector;p.push(this.configLoader.loadComponent(y,v.routeConfig).then(x=>{v.component=x}))}for(let y of v.children)p.push(...u(y));return p},l=u(s.targetSnapshot.root);return l.length===0?Jp(s):we$1(Promise.all(l).then(()=>s))}),Th(s=>{let{newlyCreatedRoutes:u,state:l}=Ni(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);return this.currentTransition=r=s=U$3($$2({},s),{targetRouterState:l,newlyCreatedRoutes:u}),this.currentNavigation.update(v=>(v.targetRouterState=l,v)),Jp(s)}),this.routerResourcesFeature?.setupAndRunResources(a.signal)??(s=>s),lr(()=>this.afterPreactivation()),Th(()=>{let{currentSnapshot:s,targetSnapshot:u}=r,l=this.createViewTransition?.(this.environmentInjector,s.root,u.root,r.hasUAVisualTransition);return l?we$1(l).pipe(dt$2(()=>r)):Jp(r)}),xi$2(1),Th(s=>{i=!1,this.events.next(new ve);let u=r.beforeActivateHandler.deferredHandle;return u?we$1(u.then(()=>s)):Jp(s)}),Nh(s=>{new or(e.routeReuseStrategy,r.targetRouterState,r.currentRouterState,u=>this.events.next(u),this.inputBindingEnabled).activate(this.rootContexts),s.newlyCreatedRoutes?.clear(),c()&&(Qn(s.targetRouterState),o=!0,this.currentNavigation.update(u=>(u.abort=Eo,u)),this.lastSuccessfulNavigation.set(Ip(this.currentNavigation)),this.events.next(new $(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),_h(Pn(a.signal).pipe(Sn$2(()=>!o&&i),Nh(()=>{this.cancelNavigationTransition(r,a.signal.reason+``,b.Aborted)}))),Nh({complete:()=>{o=!0}}),_h(this.transitionAbortWithErrorSubject.pipe(Nh(s=>{throw s}))),Eh(()=>{a.abort(),o||this.cancelNavigationTransition(r,``,b.SupersededByNewNavigation),this.currentTransition?.id===r.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Kc(s=>{if(o=!0,an(r),this.destroyed)return r.resolve(!1),lt$4;if(s instanceof X&&(s=Oe(this.urlSerializer,s)),Un(s))this.events.next(new j(r.id,this.urlSerializer.serialize(r.extractedUrl),s.message,s.cancellationCode)),Oi(s)?this.events.next(new me(s.url,s.navigationBehaviorOptions)):r.resolve(!1);else{let u=new ce(r.id,this.urlSerializer.serialize(r.extractedUrl),s,r.targetSnapshot??void 0);try{let l=ao$1(this.environmentInjector,()=>this.navigationErrorHandler?.(u));if(l instanceof X){let{message:v,cancellationCode:p}=Oe(this.urlSerializer,l);this.events.next(new j(r.id,this.urlSerializer.serialize(r.extractedUrl),v,p)),this.events.next(new me(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(u),s}catch(l){this.options.resolveNavigationPromiseOnError?r.resolve(!1):r.reject(l)}}return lt$4}))}))}cancelNavigationTransition(e,r,i){an(e);let o=new j(e.id,this.urlSerializer.serialize(e.extractedUrl),r,i);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=Ip(this.currentNavigation),i=r?.targetBrowserUrl??r?.extractedUrl;return e.toString()!==i?.toString()&&!r?.extras.skipLocationChange}static ɵfac=function(r){return new(r||t)};static ɵprov=sr$1({token:t,factory:t.ɵfac})}return t})();function Ao(t){return t!==Ue}function an(t){for(let n of t.newlyCreatedRoutes??[])n._localInjector?.destroy(),n._localInjector=void 0;Qn(t.targetRouterState)}function Qn(t){if(!t)return;let n=e=>{e.value.pending?.set(!1),e.children.forEach(n)};n(t._root)}var Kn=new A(``);var Yn=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=sr$1({token:t,factory:()=>w$2(To)})}return t})();var Et=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}};var To=(()=>{class t extends Et{static ɵfac=function(r){return new(r||t)};static ɵprov=sr$1({token:t,factory:t.ɵfac})}return t})();var Dt=(()=>{class t{urlSerializer=w$2(Re);options=w$2(Ce,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||`replace`;location=w$2(yt$1);urlHandlingStrategy=w$2(Tt);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;currentUrlTree=new E;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:r,targetBrowserUrl:i}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,r):r,a=i??o;return a instanceof E?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{ɵrouterUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:r,initialUrl:i}){r&&e?(this.currentUrlTree=r,this.rawUrlTree=this.urlHandlingStrategy.merge(r,i),this.routerState=e):this.rawUrlTree=i}routerState=In(null,w$2(pe$1));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static ɵfac=function(r){return new(r||t)};static ɵprov=sr$1({token:t,factory:()=>w$2(Do)})}return t})();var Do=(()=>{class t extends Dt{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!==`computed`?this.currentPageId:this.restoredState()?.ɵrouterPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(r=>{r.type===`popstate`&&setTimeout(()=>{e(r.url,r.state,`popstate`,{replaceUrl:!0},r.hasUAVisualTransition)})})}handleRouterEvent(e,r){e instanceof se?this.updateStateMemento():e instanceof W?this.commitTransition(r):e instanceof $e?this.urlUpdateStrategy===`eager`&&(r.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof ve?(this.commitTransition(r),this.urlUpdateStrategy===`deferred`&&!r.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof j?Dn(e)?e.code===b.Redirect&&this.routerState===r.targetRouterState&&this.resetInternalState(r):this.restoreHistory(r):e instanceof ce?this.restoreHistory(r,!0):e instanceof $&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,r){let{extras:i,id:o}=r,{replaceUrl:a,state:c}=i;if(this.location.isCurrentPathEqualTo(e)||a){let s=this.browserPageId,u=$$2($$2({},c),this.generateNgRouterState(o,s,r));this.location.replaceState(e,``,u)}else{let s=$$2($$2({},c),this.generateNgRouterState(o,this.browserPageId+1,r));this.location.go(e,``,s)}}restoreHistory(e,r=!1){if(this.canceledNavigationResolution===`computed`){let i=this.browserPageId,o=this.currentPageId-i;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution===`replace`&&(r&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),``,this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,r,i){return this.canceledNavigationResolution===`computed`?$$2({navigationId:e,ɵrouterPageId:r},this.routerUrlState(i)):$$2({navigationId:e},this.routerUrlState(i))}static ɵfac=function(r){return new(r||t)};static ɵprov=sr$1({token:t,factory:t.ɵfac})}return t})();function Cr(t,n){t.events.pipe(Sn$2(e=>e instanceof $||e instanceof j||e instanceof ce||e instanceof W),dt$2(e=>e instanceof $||e instanceof W?0:(e instanceof j?e.code===b.Redirect||e.code===b.SupersededByNewNavigation:!1)?2:1),Sn$2(e=>e!==2),xi$2(1)).subscribe(()=>{n()})}var ue=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=w$2(yE);stateManager=w$2(Dt);options=w$2(Ce,{optional:!0})||{};pendingTasks=w$2(Mt$2);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;navigationTransitions=w$2(Wn);urlSerializer=w$2(Re);location=w$2(yt$1);urlHandlingStrategy=w$2(Tt);injector=w$2(pe$1);_events=new J$2;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=w$2(Yn);injectorCleanup=w$2(Kn,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||`ignore`;config=w$2(We,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!w$2(Ve,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new G$1;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(r=>{try{let i=this.navigationTransitions.currentTransition,o=Ip(this.navigationTransitions.currentNavigation);if(i!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof j&&r.code!==b.Redirect&&r.code!==b.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof $)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(r instanceof me){let a=r.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(r.url,i.currentRawUrl),s=$$2({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy===`eager`||Ao(i.source)},a);this.scheduleNavigation(c,Ue,null,s,i.hasUAVisualTransition,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}Di(r)&&this._events.next(r)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ue,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,r,i,o,a)=>{this.navigateToSyncWithBrowser(e,i,r,o,a)})}navigateToSyncWithBrowser(e,r,i,o,a){let c=i?.navigationId?i:null,s=i?.ɵrouterUrl??e;if(i?.ɵrouterUrl&&(o=U$3($$2({},o),{browserUrl:e})),i){let l=$$2({},i);delete l.navigationId,delete l.ɵrouterPageId,delete l.ɵrouterUrl,Object.keys(l).length!==0&&(o.state=l)}let u=this.parseUrl(s);this.scheduleNavigation(u,r,c,o,a).catch(l=>{this.disposed||this.injector.get(tt$2)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Ip(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(mr),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,r={}){let{relativeTo:i,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:s}=r,u=s?this.currentUrlTree.fragment:a,l=null;switch(c??this.options.defaultQueryParamsHandling){case`merge`:l=$$2($$2({},this.currentUrlTree.queryParams),o);break;case`preserve`:l=this.currentUrlTree.queryParams;break;default:l=o||null}let v;try{v=Sn(i?i.snapshot:this.routerState.snapshot.root)}catch{(typeof e[0]!=`string`||e[0][0]!==`/`)&&(e=[]),v=this.currentUrlTree.root}return Cn(v,e,l,u??null,this.urlSerializer)}navigateByUrl(e,r={skipLocationChange:!1}){let i=J(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(o,Ue,null,r)}navigate(e,r={skipLocationChange:!1}){return No(e),this.navigateByUrl(this.createUrlTree(e,r),r)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Yr(4018,!1)),this.urlSerializer.parse(`/`)}}isActive(e,r){let i;if(r===!0?i=$$2({},dr):r===!1?i=$$2({},pe):i=$$2($$2({},pe),r),J(e))return ut$1(this.currentUrlTree,e,i);let o=this.parseUrl(e);return ut$1(this.currentUrlTree,o,i)}scheduleNavigation(e,r,i,o,a,c){if(this.disposed)return Promise.resolve(!1);let s,u,l;c?(s=c.resolve,u=c.reject,l=c.promise):l=new Promise((p,y)=>{s=p,u=y});let v=this.pendingTasks.add();return Cr(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(v))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,hasUAVisualTransition:a,resolve:s,reject:u,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static ɵfac=function(r){return new(r||t)};static ɵprov=sr$1({token:t,factory:t.ɵfac})}return t})();function No(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new N(4008,!1)}var Uo=(()=>{class t{router=w$2(ue);stateManager=w$2(Dt);fragment=wo$1(``);queryParams=wo$1({});path=wo$1(``);serializer=w$2(Re);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof $&&this.updateState()})}updateState(){let{fragment:e,root:r,queryParams:i}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(i),this.path.set(this.serializer.serialize(new E(r)))}static ɵfac=function(r){return new(r||t)};static ɵprov=sr$1({token:t,factory:t.ɵfac})}return t})();var Nt=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=w$2(new Dp(`href`),{optional:!0});reactiveHref=TI(()=>{if(!this.isAnchorElement)return this.hrefAttributeValue;this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r===`preserve`||r===`merge`;return(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams(),this.computeHref(this.createUrlTree())});get href(){return Ip(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return Ip(this._target)}_target=wo$1(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return Ip(this._queryParams)}_queryParams=wo$1(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return Ip(this._fragment)}_fragment=wo$1(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return Ip(this._queryParamsHandling)}_queryParamsHandling=wo$1(void 0);set state(e){this._state.set(e)}get state(){return Ip(this._state)}_state=wo$1(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return Ip(this._info)}_info=wo$1(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return Ip(this._relativeTo)}_relativeTo=wo$1(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return Ip(this._preserveFragment)}_preserveFragment=wo$1(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return Ip(this._skipLocationChange)}_skipLocationChange=wo$1(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return Ip(this._replaceUrl)}_replaceUrl=wo$1(!1);browserUrl=yL(void 0);isAnchorElement;onChanges=new J$2;applicationErrorHandler=w$2(tt$2);options=w$2(Ce,{optional:!0});reactiveRouterState=w$2(Uo);constructor(e,r,i,o,a,c){this.router=e,this.route=r,this.tabIndexAttribute=i,this.renderer=o,this.el=a,this.locationStrategy=c;let s=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=s===`a`||s===`area`||!!(typeof customElements==`object`&&customElements.get(s)?.observedAttributes?.includes?.(`href`))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue(`tabindex`,e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=wo$1(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(J(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl(`0`))}onClick(e,r,i,o,a){let c=this.urlTree;if(c===null||this.isAnchorElement&&(e!==0||r||i||o||a||typeof this.target==`string`&&this.target!=`_self`))return!0;let s=this.browserUrl(),u=$$2({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},s!==void 0&&{browserUrl:s});return this.router.navigateByUrl(c,u)?.catch(l=>{this.applicationErrorHandler(l)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,r){let i=this.renderer,o=this.el.nativeElement;r!==null?i.setAttribute(o,e,r):i.removeAttribute(o,e)}createUrlTree(){let e=this.routerLinkInput();return e===null||!this.router.createUrlTree?null:J(e)?e:this.router.createUrlTree(e,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})}get urlTree(){return Ip(()=>this.createUrlTree())}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??``:null}static ɵfac=function(r){return new(r||t)(si$2(ue),si$2(G),ad(`tabindex`),si$2(ua),si$2(ar$1),si$2(le$2))};static ɵdir=sE({type:t,selectors:[[``,`routerLink`,``]],hostVars:2,hostBindings:function(r,i){r&1&&Kf(`click`,function(a){return i.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),r&2&&Uf(`href`,i.reactiveHref(),Bm)(`target`,i._target())},inputs:{target:`target`,queryParams:`queryParams`,fragment:`fragment`,queryParamsHandling:`queryParamsHandling`,state:`state`,info:`info`,relativeTo:`relativeTo`,preserveFragment:[2,`preserveFragment`,`preserveFragment`,wL],skipLocationChange:[2,`skipLocationChange`,`skipLocationChange`,wL],replaceUrl:[2,`replaceUrl`,`replaceUrl`,wL],browserUrl:[1,`browserUrl`],routerLink:`routerLink`},features:[Mg]})}return t})();var Oo=(()=>{class t{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new Oe$3;link=w$2(Nt,{optional:!0});constructor(e,r,i,o){this.router=e,this.element=r,this.renderer=i,this.cdr=o,this.routerEventsSubscription=e.events.subscribe(a=>{a instanceof $&&this.update()})}ngAfterContentInit(){Jp(this.links.changes,Jp(null)).pipe(Mn$2()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(r=>!!r).map(r=>r.onChanges);this.linkInputChangesSubscription=we$1(e).pipe(Mn$2()).subscribe(r=>{this._isActive!==this.isLinkActive(this.router)(r)&&this.update()})}set routerLinkActive(e){let r=e==null?[]:(Array.isArray(e)?e:e.split(` `)).filter(i=>!!i);for(let i of this.classes)r.includes(i)||this.renderer.removeClass(this.element.nativeElement,i);this.classes=r}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||this.routerLinkActiveOptions===null&&!this._isActive||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(r=>{e?this.renderer.addClass(this.element.nativeElement,r):this.renderer.removeClass(this.element.nativeElement,r)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,`aria-current`,this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,`aria-current`),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let r=this.routerLinkActiveOptions;if(r===null)return()=>!1;let i;return r===void 0?i=$$2({},pe):Po(r)?i=r:r.exact??!1?i=$$2({},dr):i=$$2({},pe),o=>{let a=o.urlTree;return a?Ip(hr(a,e,i)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static ɵfac=function(r){return new(r||t)(si$2(ue),si$2(ar$1),si$2(ua),si$2(IL))};static ɵdir=sE({type:t,selectors:[[``,`routerLinkActive`,``]],contentQueries:function(r,i,o){if(r&1&&Xf(o,Nt,5),r&2){let a;HE(a=BE())&&(i.links=a)}},inputs:{routerLinkActiveOptions:`routerLinkActiveOptions`,ariaCurrentWhenActive:`ariaCurrentWhenActive`,routerLinkActive:`routerLinkActive`},outputs:{isActiveChange:`isActiveChange`},exportAs:[`routerLinkActive`],features:[Mg]})}return t})();function Po(t){let n=t;return!!(n.paths||n.matrixParams||n.queryParams||n.fragment)}var Lo=new A(``);function jo(t,...n){return so$1([{provide:We,multi:!0,useValue:t},{provide:G,useFactory:xo},{provide:Bf,multi:!0,useFactory:$o},n.map(e=>e.ɵproviders)])}function xo(){return w$2(ue).routerState.root}function ko(t,n){return{ɵkind:t,ɵproviders:n}}function $o(){let t=w$2(re);return n=>{let e=t.get(ci$2);if(n!==e.components[0])return;let r=t.get(ue),i=t.get(zo);t.get(qo)===1&&r.initialNavigation(),t.get(Fo,null,{optional:!0})?.setUpPreloading(),t.get(Lo,null,{optional:!0})?.init(),r.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var zo=new A(``,{factory:()=>new J$2});var qo=new A(``,{factory:()=>1});var Fo=new A(``);function Ho(t={}){return ko(8,[{provide:Ve,useFactory:()=>new Tn(t,w$2(Rr,{optional:!0}))}])}var ps=[{path:`nuke-sim`,title:`Nuke Sim 3D`,description:`Drop a nuclear weapon anywhere on a photorealistic 3D globe and watch the blast radii and the mushroom cloud, to scale.`,icon:`crisis_alert`,load:()=>import(`./chunk-a3bw4CB0.js`).then(t=>t.Nuke)},{path:`page-tester`,title:`Page Tester`,description:`A live terminal log of everything your browser lets a page see you do: moves, clicks, keys, scrolls, copy/paste, drops, focus…`,icon:`terminal`,load:()=>import(`./chunk-Br5-m0PO.js`).then(t=>t.PageTester)},{path:`pong`,title:`Pong`,description:`Two players, one keyboard. W/S on the left, arrow keys on the right. First to 7.`,icon:`sports_esports`,load:()=>import(`./chunk-DR6JIlUa.js`).then(t=>t.Pong)}];var et=[{path:``,title:`parisius.dev`,loadComponent:()=>import(`./chunk-CgQGqX9D.js`).then(t=>t.Landing)},{path:`apps`,title:`Apps · parisius.dev`,loadComponent:()=>import(`./chunk-C59T-9ZQ.js`).then(t=>t.Apps)},...ps.map(t=>({path:t.path,title:`${t.title} \xB7 parisius.dev`,loadComponent:t.load??(()=>import(`./chunk-CGo67_BT.js`).then(l=>l.FrameApp)),data:{app:t}})),{path:`**`,redirectTo:``}];var ot={providers:[ag(),jo(et,Ho())]};var ct=(()=>{class t{static ɵfac=function(o){return new(o||t)};static ɵdir=sE({type:t,selectors:[[`mat-toolbar-row`]],hostAttrs:[1,`mat-toolbar-row`],exportAs:[`matToolbarRow`]})}return t})();var rt=(()=>{class t{_elementRef=w$2(ar$1);_platform=w$2(x);_document=w$2(zn$3);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static ɵfac=function(o){return new(o||t)};static ɵcmp=(function(){let e=[`*`,[[`mat-toolbar-row`]]];return tE({type:t,selectors:[[`mat-toolbar`]],contentQueries:function(s,m,mt){if(s&1&&Xf(mt,ct,5),s&2){let _;HE(_=BE())&&(m._toolbarRows=_)}},hostAttrs:[1,`mat-toolbar`],hostVars:6,hostBindings:function(s,m){s&2&&(eI(m.color?`mat-`+m.color:``),ip(`mat-toolbar-multiple-rows`,m._toolbarRows.length>0)(`mat-toolbar-single-row`,m._toolbarRows.length===0))},inputs:{color:`color`},exportAs:[`matToolbar`],ngContentSelectors:[`*`,`mat-toolbar-row`],decls:2,vars:0,template:function(s,m){s&1&&(FE(e),jE(0),jE(1,1))},styles:[`.mat-toolbar {
  background: var(--%NS%mat-toolbar-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--%NS%mat-toolbar-title-text-font, var(--%NS%mat-sys-title-large-font));
  font-size: var(--%NS%mat-toolbar-title-text-size, var(--%NS%mat-sys-title-large-size));
  line-height: var(--%NS%mat-toolbar-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-weight: var(--%NS%mat-toolbar-title-text-weight, var(--%NS%mat-sys-title-large-weight));
  letter-spacing: var(--%NS%mat-toolbar-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
  --%NS%mat-button-outlined-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})})()}return t})();var nt=(()=>{class t{static ɵfac=function(o){return new(o||t)};static ɵmod=rE({type:t});static ɵinj=sl({imports:[X$2]})}return t})();var it=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=zi$1(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=zi$1(e)}_inset=!1;static ɵfac=function(o){return new(o||t)};static ɵcmp=tE({type:t,selectors:[[`mat-divider`]],hostAttrs:[`role`,`separator`,1,`mat-divider`],hostVars:7,hostBindings:function(o,r){o&2&&(Uf(`aria-orientation`,r.vertical?`vertical`:`horizontal`),ip(`mat-divider-vertical`,r.vertical)(`mat-divider-horizontal`,!r.vertical)(`mat-divider-inset`,r.inset))},inputs:{vertical:`vertical`,inset:`inset`},decls:0,vars:0,template:function(o,r){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-top-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-right-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2})}return t})();var lt=(()=>{class t{static ɵfac=function(o){return new(o||t)};static ɵmod=rE({type:t});static ɵinj=sl({imports:[X$2]})}return t})();var ut=()=>({exact:!0});var ft=(t,l)=>l.path;function vt(t,l){if(t&1&&(Zo(0,`a`,8)(1,`mat-icon`),dI(2),rc(),Zo(3,`span`),dI(4),rc()()),t&2){let e=l.$implicit;Wf(`routerLink`,`/`+e.path),Ny(2),dp(e.icon),Ny(2),dp(e.title)}}var M=class t{apps=ps;constructor(){w$2(Le$1).setDefaultFontSetClass(`material-symbols-outlined`)}static ɵfac=function(e){return new(e||t)};static ɵcmp=tE({type:t,selectors:[[`app-root`]],decls:24,vars:3,consts:[[`appsMenu`,`matMenu`],[1,`bar`],[`routerLink`,`/`,1,`brand`],[1,`spacer`],[`mat-button`,``,`routerLink`,`/`,`routerLinkActive`,`active`,3,`routerLinkActiveOptions`],[`mat-button`,``,3,`matMenuTriggerFor`],[`iconPositionEnd`,``],[`xPosition`,`before`],[`mat-menu-item`,``,3,`routerLink`],[`mat-menu-item`,``,`routerLink`,`/apps`]],template:function(e,o){if(e&1&&(Zo(0,`mat-toolbar`,1)(1,`a`,2),dI(2,`parisius`),Zo(3,`span`),dI(4,`.dev`),rc()(),Gf(5,`span`,3),Zo(6,`a`,4),dI(7,`Home`),rc(),Zo(8,`button`,5),dI(9,` Apps `),Zo(10,`mat-icon`,6),dI(11,`expand_more`),rc()(),Zo(12,`mat-menu`,7,0),TE(14,vt,5,3,`a`,8,ft),Gf(16,`mat-divider`),Zo(17,`a`,9)(18,`mat-icon`),dI(19,`apps`),rc(),Zo(20,`span`),dI(21,`All apps`),rc()()()(),Zo(22,`main`),Gf(23,`router-outlet`),rc()),e&2){let r=UE(13);Ny(6),Wf(`routerLinkActiveOptions`,EI(2,ut)),Ny(2),Wf(`matMenuTriggerFor`,r),Ny(6),_E(o.apps)}},dependencies:[gr,Nt,Oo,nt,rt,Dr,kr,Da,Ta,vo$1,Ae,lt$2,_o,lt,it],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;height:100dvh}.bar[_ngcontent-%COMP%]{flex:none;height:48px;padding:0 12px 0 20px;background:#0b0c0e;border-bottom:1px solid rgba(255,255,255,.08);color:#eceff1;gap:4px}.brand[_ngcontent-%COMP%]{color:inherit;text-decoration:none;font-weight:500;font-size:16px;letter-spacing:.3px}.brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#78ff78}.spacer[_ngcontent-%COMP%]{flex:1}.active[_ngcontent-%COMP%]{color:#78ff78}main[_ngcontent-%COMP%]{flex:1;min-height:0;overflow:auto;position:relative}`]})};dn$2(M,ot).catch(t=>console.error(t));export{Mt$1 as A,nn$1 as B,Dn$1 as C,Kt$2 as D,Jt$2 as E,Vn$1 as F,w$1 as G,qn$1 as H,Vt$1 as I,zn$1 as J,x as K,X$2 as L,Ta as M,Tr as N,Ln$1 as O,V$1 as P,fn$1 as R,Da as S,Gt$2 as T,tt$1 as U,pi$1 as V,vn$1 as W,st$1 as _,Ee as a,Ci$1 as b,Pe$1 as c,_o as d,ce$1 as f,qe$1 as g,lt$2 as h,Bt as i,Qi$1 as j,Mn$1 as k,Si$1 as l,le$1 as m,ps as n,Ie as o,j$1 as p,zi$1 as q,Ae as r,Jt$1 as s,Nt as t,X$1 as u,vo$1 as v,Dr as w,Cr$1 as x,we as y,kr as z};