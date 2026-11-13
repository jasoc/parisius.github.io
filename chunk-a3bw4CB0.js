import{A as Mt$1,B as nn,C as Dn$1,D as Kt,E as Jt,F as Vn,G as w,H as qn$1,I as Vt,J as zn$1,K as x,L as X,M as Ta$1,N as Tr,O as Ln$1,P as V,R as fn,S as Da,T as Gt$1,U as tt,V as pi$1,W as vn,_ as st,a as Ee,b as Ci$1,c as Pe,d as _o,f as ce,g as qe$1,h as lt,i as Bt$1,j as Qi$1,k as Mn,l as Si$1,m as le,o as Ie,p as j,q as zi$1,r as Ae,s as Jt$1,u as X$1,v as vo,w as Dr,x as Cr,y as we,z as kr}from"./main-TO4CGSET.js";import{r as Xt}from"./chunk-B92ZQsVu.js";import{$ as RE,A as J,Bn as sr,Ct as Zl,D as IL,Dt as _h,E as II,F as Kf,Fn as sE,Ft as ay,G as Ny,Gt as dI,Hn as tE,I as LE,It as bE,J as Ol,Jt as dp,Kn as ua$1,Ln as sl,Lt as bL,M as Jp,Mn as rE,N as Jr,Nn as rc,Pn as re,Pt as ar,Q as Ql,Qn as wL,Rt as be,S as FE,T as HE,Tn as op,Tt as _E,Un as tp,Vt as cc,Wn as tr,X as Pf,Xn as vL,Xt as eI,Yn as vI,Z as Qf,Zn as w$1,_t as Wf,an as he,cn as ic,cr as zn$2,d as CI,dt as U,en as ep,f as CL,ft as UE,gn as kl,h as DE,j as Jf,jt as ai$1,mn as jf,n as $E,o as BE,pn as jE,pt as Uf,q as Oe,r as A,st as TE,t as $,tr as wo,u as CE,un as ip,vt as Xf,w as Gf,wn as oc,wt as Zo,y as Dp}from"./chunk-Bp7w4L2G.js";var nt=class{_multiple;_emitChanges;compareWith;_selection=/* @__PURE__ */ new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new J;bulk={select:n=>this._select(n),deselect:n=>this._deselect(n),setSelection:n=>this._setSelection(n)};constructor(n=!1,e,t=!0,i){this._multiple=n,this._emitChanges=t,this.compareWith=i,e&&e.length&&(n?e.forEach(a=>this._markSelected(a)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){return this._select(n)}deselect(...n){return this._deselect(n)}setSelection(...n){return this._setSelection(n)}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_select(n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n.map(a=>this._getConcreteValue(a)));n.forEach(a=>this._markSelected(a)),e.filter(a=>!t.has(this._getConcreteValue(a,t))).forEach(a=>this._unmarkSelected(a));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n}else return n}};var Ct=new A(``);var Rn=(()=>{class s{_animationsDisabled=tt();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(t){return new(t||s)};static ɵcmp=tE({type:s,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(t,i){t&2&&ip(`mat-pseudo-checkbox-indeterminate`,i.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,i.state===`checked`)(`mat-pseudo-checkbox-disabled`,i.disabled)(`mat-pseudo-checkbox-minimal`,i.appearance===`minimal`)(`mat-pseudo-checkbox-full`,i.appearance===`full`)(`_mat-animation-noopable`,i._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(t,i){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return s})();var Pn=new A(`MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS`,{providedIn:`root`,factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})});var On=new A(`MatButtonToggleGroup`);var pi={provide:Ct,useExisting:Jr(()=>Ft),multi:!0};var xt=class{source;value;constructor(n,e){this.source=n,this.value=e}};var Ft=(()=>{class s{_changeDetector=w$1(IL);_dir=w$1(Mn,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=w$1(Gt$1).getId(`mat-button-toggle-group-`);vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(t=>t.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new Oe;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}change=new Oe;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=w$1(Pn,{optional:!0});this.appearance=e&&e.appearance?e.appearance:`standard`,this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new nt(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||nn(e))return;let i=e.target.id,a=this._buttonToggles.toArray().findIndex(o=>o.buttonId===i),r=null;switch(e.keyCode){case 32:case 13:r=this._buttonToggles.get(a)||null;break;case 38:r=this._getNextButton(a,-1);break;case 37:r=this._getNextButton(a,this.dir===`ltr`?-1:1);break;case 40:r=this._getNextButton(a,1);break;case 39:r=this._getNextButton(a,this.dir===`ltr`?1:-1);break;default:return}r&&(e.preventDefault(),r._onButtonClick(),r.focus())}_emitChangeEvent(e){let t=new xt(e,this.value);this._rawValue=t.value,this._controlValueAccessorChangeFn(t.value),this.change.emit(t)}_syncButtonToggle(e,t,i=!1,a=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?t?this._selectionModel.select(e):this._selectionModel.deselect(e):a=!0,a?Promise.resolve().then(()=>this._updateModelValue(e,i)):this._updateModelValue(e,i)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>`u`?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(t=>e.value!=null&&t===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let t=this._buttonToggles.get(e);if(!t.disabled){t.tabIndex=0;break}}}_getNextButton(e,t){let i=this._buttonToggles;for(let a=1;a<=i.length;a++){let r=(e+t*a+i.length)%i.length,o=i.get(r);if(o&&!o.disabled)return o}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let t=this._buttonToggles.toArray();if(this.multiple&&e?(this._clearSelection(),e.forEach(i=>this._selectValue(i,t))):(this._clearSelection(),this._selectValue(e,t)),!this.multiple&&t.every(i=>i.tabIndex===-1)){for(let i of t)if(!i.disabled){i.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,t){for(let i of t)if(i.value===e){i.checked=!0,this._selectionModel.select(i),this.multiple||(i.tabIndex=0);break}}_updateModelValue(e,t){t&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static ɵfac=function(t){return new(t||s)};static ɵdir=sE({type:s,selectors:[[`mat-button-toggle-group`]],contentQueries:function(t,i,a){if(t&1&&Xf(a,kt,5),t&2){let r;HE(r=BE())&&(i._buttonToggles=r)}},hostAttrs:[1,`mat-button-toggle-group`],hostVars:6,hostBindings:function(t,i){t&1&&Kf(`keydown`,function(r){return i._keydown(r)}),t&2&&(Uf(`role`,i.multiple?`group`:`radiogroup`)(`aria-disabled`,i.disabled),ip(`mat-button-toggle-vertical`,i.vertical)(`mat-button-toggle-group-appearance-standard`,i.appearance===`standard`))},inputs:{appearance:`appearance`,name:`name`,vertical:[2,`vertical`,`vertical`,wL],value:`value`,multiple:[2,`multiple`,`multiple`,wL],disabled:[2,`disabled`,`disabled`,wL],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,wL],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,wL],hideMultipleSelectionIndicator:[2,`hideMultipleSelectionIndicator`,`hideMultipleSelectionIndicator`,wL]},outputs:{valueChange:`valueChange`,change:`change`},exportAs:[`matButtonToggleGroup`],features:[vI([pi,{provide:On,useExisting:s}])]})}return s})();var kt=(()=>{class s{_changeDetectorRef=w$1(IL);_elementRef=w$1(ar);_focusMonitor=w$1(Vt);_idGenerator=w$1(Gt$1);_animationDisabled=tt();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new Oe;constructor(){w$1(V).load(fn);let e=w$1(On,{optional:!0}),t=w$1(new Dp(`tabindex`),{optional:!0})||``,i=w$1(Pn,{optional:!0});this._tabIndex=wo(parseInt(t)||0),this.buttonToggleGroup=e,this._appearance=i&&i.appearance?i.appearance:`standard`,this._disabledInteractive=i?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId(`mat-button-toggle-`),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add(`mat-button-toggle-animations-enabled`),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let t=this.buttonToggleGroup._buttonToggles.find(i=>i.tabIndex===0);t&&(t.tabIndex=-1),this.tabIndex=0}this.change.emit(new xt(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static ɵfac=function(t){return new(t||s)};static ɵcmp=(function(){let e=[`button`],t=[`*`];function i(a,r){if(a&1&&(Zo(0,`div`,2),Gf(1,`mat-pseudo-checkbox`,6),rc()),a&2){let o=LE();Ny(),Wf(`disabled`,o.disabled)}}return tE({type:s,selectors:[[`mat-button-toggle`]],viewQuery:function(r,o){if(r&1&&ep(e,5),r&2){let l;HE(l=BE())&&(o._buttonElement=l.first)}},hostAttrs:[`role`,`presentation`,1,`mat-button-toggle`],hostVars:14,hostBindings:function(r,o){r&1&&Kf(`focus`,function(){return o.focus()}),r&2&&(Uf(`aria-label`,null)(`aria-labelledby`,null)(`id`,o.id)(`name`,null),ip(`mat-button-toggle-standalone`,!o.buttonToggleGroup)(`mat-button-toggle-checked`,o.checked)(`mat-button-toggle-disabled`,o.disabled)(`mat-button-toggle-disabled-interactive`,o.disabledInteractive)(`mat-button-toggle-appearance-standard`,o.appearance===`standard`))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],id:`id`,name:`name`,value:`value`,tabIndex:`tabIndex`,disableRipple:[2,`disableRipple`,`disableRipple`,wL],appearance:`appearance`,checked:[2,`checked`,`checked`,wL],disabled:[2,`disabled`,`disabled`,wL],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,wL]},outputs:{change:`change`},exportAs:[`matButtonToggle`],ngContentSelectors:t,decls:7,vars:13,consts:[[`button`,``],[`type`,`button`,1,`mat-button-toggle-button`,`mat-focus-indicator`,3,`click`,`id`,`disabled`],[1,`mat-button-toggle-checkbox-wrapper`],[1,`mat-button-toggle-label-content`],[1,`mat-button-toggle-focus-overlay`],[`matRipple`,``,1,`mat-button-toggle-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,3,`disabled`]],template:function(r,o){if(r&1&&(FE(),Zo(0,`button`,1,0),Kf(`click`,function(){return o._onButtonClick()}),DE(2,i,2,1,`div`,2),Zo(3,`span`,3),jE(4),rc()(),Gf(5,`span`,4)(6,`span`,5)),r&2){let l=UE(1);Wf(`id`,o.buttonId)(`disabled`,o.disabled&&!o.disabledInteractive||null),Uf(`role`,o.isSingleSelector()?`radio`:`button`)(`tabindex`,o.disabled&&!o.disabledInteractive?-1:o.tabIndex)(`aria-pressed`,o.isSingleSelector()?null:o.checked)(`aria-checked`,o.isSingleSelector()?o.checked:null)(`name`,o._getButtonName())(`aria-label`,o.ariaLabel)(`aria-labelledby`,o.ariaLabelledby)(`aria-disabled`,o.disabled&&o.disabledInteractive?`true`:null),Ny(2),CE(o.buttonToggleGroup&&(!o.buttonToggleGroup.multiple&&!o.buttonToggleGroup.hideSingleSelectionIndicator||o.buttonToggleGroup.multiple&&!o.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),Ny(4),Wf(`matRippleTrigger`,l)(`matRippleDisabled`,o.disableRipple||o.disabled)}},dependencies:[Qi$1,Rn],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--%NS%mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--%NS%mat-button-toggle-legacy-text-color);
  font-family: var(--%NS%mat-button-toggle-legacy-label-text-font);
  font-size: var(--%NS%mat-button-toggle-legacy-label-text-size);
  line-height: var(--%NS%mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--%NS%mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--%NS%mat-button-toggle-legacy-label-text-tracking);
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-state-background-color);
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--%NS%mat-button-toggle-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-button-toggle-background-color, transparent);
  font-family: var(--%NS%mat-button-toggle-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-toggle-label-text-size, var(--%NS%mat-sys-label-large-size));
  line-height: var(--%NS%mat-button-toggle-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-weight: var(--%NS%mat-button-toggle-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-button-toggle-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-toggle-selected-state-background-color, var(--%NS%mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--%NS%mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--%NS%mat-button-toggle-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--%NS%mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--%NS%mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--%NS%mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
`],encapsulation:2})})()}return s})();var Dn=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵmod=rE({type:s});static ɵinj=sl({imports:[vn,kt,X]})}return s})();var fi=new A(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:Fn})});var Fn=100;var _i=10;var Bn=(()=>{class s{_elementRef=w$1(ar);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=w$1(fi),t=Vn(),i=this._elementRef.nativeElement;this._noopAnimations=t===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=i.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&t===`reduced-motion`&&i.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Fn;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-_i)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(t){return new(t||s)};static ɵcmp=(function(){let e=[`determinateSpinner`];function t(i,a){if(i&1&&(Ql(),Zo(0,`svg`,11),Gf(1,`circle`,12),rc()),i&2){let r=LE();Uf(`viewBox`,r._viewBox()),Ny(),op(`stroke-dasharray`,r._strokeCircumference(),`px`)(`stroke-dashoffset`,r._strokeCircumference()/2,`px`)(`stroke-width`,r._circleStrokeWidth(),`%`),Uf(`r`,r._circleRadius())}}return tE({type:s,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(a,r){if(a&1&&ep(e,5),a&2){let o;HE(o=BE())&&(r._determinateCircle=o.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(a,r){a&2&&(Uf(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,r.mode===`determinate`?r.value:null)(`mode`,r.mode),eI(`mat-`+r.color),op(`width`,r.diameter,`px`)(`height`,r.diameter,`px`)(`--%NS%mat-progress-spinner-size`,r.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,r.diameter+`px`),ip(`_mat-animation-noopable`,r._noopAnimations)(`mdc-circular-progress--indeterminate`,r.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,CL],diameter:[2,`diameter`,`diameter`,CL],strokeWidth:[2,`strokeWidth`,`strokeWidth`,CL]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(a,r){if(a&1&&(jf(0,t,2,8,`ng-template`,null,0,II),Zo(2,`div`,2,1),Ql(),Zo(4,`svg`,3),Gf(5,`circle`,4),rc()(),Zl(),Zo(6,`div`,5)(7,`div`,6)(8,`div`,7),Qf(9,8),rc(),Zo(10,`div`,9),Qf(11,8),rc(),Zo(12,`div`,10),Qf(13,8),rc()()()),a&2){let o=UE(1);Ny(4),Uf(`viewBox`,r._viewBox()),Ny(),op(`stroke-dasharray`,r._strokeCircumference(),`px`)(`stroke-dashoffset`,r._strokeDashOffset(),`px`)(`stroke-width`,r._circleStrokeWidth(),`%`),Uf(`r`,r._circleRadius()),Ny(4),Wf(`ngTemplateOutlet`,o),Ny(2),Wf(`ngTemplateOutlet`,o),Ny(2),Wf(`ngTemplateOutlet`,o)}},dependencies:[Xt],styles:[`.mat-mdc-progress-spinner {
  --%NS%mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--%NS%mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --%NS%mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--%NS%mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--%NS%mat-progress-spinner-active-indicator-color, var(--%NS%mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2})})()}return s})();var Ln=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵmod=rE({type:s});static ɵinj=sl({imports:[X]})}return s})();var N=(function(s){return s[s.START=1]=`START`,s[s.END=2]=`END`,s})(N||{});var qe=(function(s){return s[s.ACTIVE=0]=`ACTIVE`,s[s.INACTIVE=1]=`INACTIVE`,s})(qe||{});var Bt=new A(`_MatSlider`);var zn=new A(`_MatSliderThumb`);var vi=new A(`_MatSliderRangeThumb`);var Un=new A(`_MatSliderVisualThumb`);var yi=(()=>{class s{_cdr=w$1(IL);_ngZone=w$1(be);_slider=w$1(Bt);_renderer=w$1(ua$1);_listenerCleanups;discrete=!1;thumbPosition;valueIndicatorText;_ripple;_knob;_valueIndicatorContainer;_sliderInput;_sliderInputEl;_hoverRippleRef;_focusRippleRef;_activeRippleRef;_isHovered=!1;_isActive=!1;_isValueIndicatorVisible=!1;_hostElement=w$1(ar).nativeElement;_platform=w$1(x);ngAfterViewInit(){let e=this._slider._getInput(this.thumbPosition);e&&(this._ripple.radius=24,this._sliderInput=e,this._sliderInputEl=this._sliderInput._hostElement,this._ngZone.runOutsideAngular(()=>{let t=this._sliderInputEl,i=this._renderer;this._listenerCleanups=[i.listen(t,`pointermove`,this._onPointerMove),i.listen(t,`pointerdown`,this._onDragStart),i.listen(t,`pointerup`,this._onDragEnd),i.listen(t,`pointerleave`,this._onMouseLeave),i.listen(t,`focus`,this._onFocus),i.listen(t,`blur`,this._onBlur)]}))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e())}_onPointerMove=e=>{if(this._sliderInput._isFocused)return;let t=this._hostElement.getBoundingClientRect(),i=this._slider._isCursorOnSliderThumb(e,t);this._isHovered=i,i?this._showHoverRipple():this._hideRipple(this._hoverRippleRef)};_onMouseLeave=()=>{this._isHovered=!1,this._hideRipple(this._hoverRippleRef)};_onFocus=()=>{this._hideRipple(this._hoverRippleRef),this._showFocusRipple(),this._hostElement.classList.add(`mdc-slider__thumb--focused`)};_onBlur=()=>{this._isActive||this._hideRipple(this._focusRippleRef),this._isHovered&&this._showHoverRipple(),this._hostElement.classList.remove(`mdc-slider__thumb--focused`)};_onDragStart=e=>{e.button===0&&(this._isActive=!0,this._showActiveRipple())};_onDragEnd=()=>{this._isActive=!1,this._hideRipple(this._activeRippleRef),this._sliderInput._isFocused||this._hideRipple(this._focusRippleRef),this._platform.SAFARI&&this._showHoverRipple()};_showHoverRipple(){this._isShowingRipple(this._hoverRippleRef)||(this._hoverRippleRef=this._showRipple({enterDuration:0,exitDuration:0}),this._hoverRippleRef?.element.classList.add(`mat-mdc-slider-hover-ripple`))}_showFocusRipple(){this._isShowingRipple(this._focusRippleRef)||(this._focusRippleRef=this._showRipple({enterDuration:0,exitDuration:0},!0),this._focusRippleRef?.element.classList.add(`mat-mdc-slider-focus-ripple`))}_showActiveRipple(){this._isShowingRipple(this._activeRippleRef)||(this._activeRippleRef=this._showRipple({enterDuration:225,exitDuration:400}),this._activeRippleRef?.element.classList.add(`mat-mdc-slider-active-ripple`))}_isShowingRipple(e){return e?.state===w.FADING_IN||e?.state===w.VISIBLE}_showRipple(e,t){if(!this._slider.disabled&&(this._showValueIndicator(),this._slider._isRange&&this._slider._getThumb(this.thumbPosition===N.START?N.END:N.START)._showValueIndicator(),!(this._slider._globalRippleOptions?.disabled&&!t)))return this._ripple.launch({animation:this._slider._noopAnimations?{enterDuration:0,exitDuration:0}:e,centered:!0,persistent:!0})}_hideRipple(e){if(e?.fadeOut(),this._isShowingAnyRipple())return;this._slider._isRange||this._hideValueIndicator();let t=this._getSibling();t._isShowingAnyRipple()||(this._hideValueIndicator(),t._hideValueIndicator())}_showValueIndicator(){this._hostElement.classList.add(`mdc-slider__thumb--with-indicator`)}_hideValueIndicator(){this._hostElement.classList.remove(`mdc-slider__thumb--with-indicator`)}_getSibling(){return this._slider._getThumb(this.thumbPosition===N.START?N.END:N.START)}_getValueIndicatorContainer(){return this._valueIndicatorContainer?.nativeElement}_getKnob(){return this._knob.nativeElement}_isShowingAnyRipple(){return this._isShowingRipple(this._hoverRippleRef)||this._isShowingRipple(this._focusRippleRef)||this._isShowingRipple(this._activeRippleRef)}static ɵfac=function(t){return new(t||s)};static ɵcmp=(function(){let e=[`knob`],t=[`valueIndicatorContainer`];function i(a,r){if(a&1&&(Zo(0,`div`,2,1)(2,`div`,5)(3,`span`,6),dI(4),rc()()()),a&2){let o=LE();Ny(4),dp(o.valueIndicatorText)}}return tE({type:s,selectors:[[`mat-slider-visual-thumb`]],viewQuery:function(r,o){if(r&1&&ep(Qi$1,5)(e,5)(t,5),r&2){let l;HE(l=BE())&&(o._ripple=l.first),HE(l=BE())&&(o._knob=l.first),HE(l=BE())&&(o._valueIndicatorContainer=l.first)}},hostAttrs:[1,`mdc-slider__thumb`,`mat-mdc-slider-visual-thumb`],inputs:{discrete:`discrete`,thumbPosition:`thumbPosition`,valueIndicatorText:`valueIndicatorText`},features:[vI([{provide:Un,useExisting:s}])],decls:4,vars:2,consts:[[`knob`,``],[`valueIndicatorContainer`,``],[1,`mdc-slider__value-indicator-container`],[1,`mdc-slider__thumb-knob`],[`matRipple`,``,1,`mat-focus-indicator`,3,`matRippleDisabled`],[1,`mdc-slider__value-indicator`],[1,`mdc-slider__value-indicator-text`]],template:function(r,o){r&1&&(DE(0,i,5,1,`div`,2),Gf(1,`div`,3,0)(3,`div`,4)),r&2&&(CE(o.discrete?0:-1),Ny(3),Wf(`matRippleDisabled`,!0))},dependencies:[Qi$1],styles:[`.mat-mdc-slider-visual-thumb .mat-ripple {
  height: 100%;
  width: 100%;
}

.mat-mdc-slider .mdc-slider__tick-marks {
  justify-content: start;
}
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,
.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive {
  position: absolute;
  left: 2px;
}
`],encapsulation:2})})()}return s})();var Gn=(()=>{class s{_ngZone=w$1(be);_cdr=w$1(IL);_elementRef=w$1(ar);_dir=w$1(Mn,{optional:!0});_globalRippleOptions=w$1(Jt,{optional:!0});_trackActive;_thumbs;_input;_inputs;get disabled(){return this._disabled}set disabled(e){this._disabled=e;let t=this._getInput(N.END),i=this._getInput(N.START);t&&(t.disabled=this._disabled),i&&(i.disabled=this._disabled)}_disabled=!1;get discrete(){return this._discrete}set discrete(e){this._discrete=e,this._updateValueIndicatorUIs()}_discrete=!1;get showTickMarks(){return this._showTickMarks}set showTickMarks(e){this._showTickMarks=e,this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI())}_showTickMarks=!1;get min(){return this._min}set min(e){let t=e==null||isNaN(e)?this._min:e;this._min!==t&&this._updateMin(t)}_min=0;color;disableRipple=!1;_updateMin(e){let t=this._min;this._min=e,this._isRange?this._updateMinRange({old:t,new:e}):this._updateMinNonRange(e),this._onMinMaxOrStepChange()}_updateMinRange(e){let t=this._getInput(N.END),i=this._getInput(N.START),a=t.value,r=i.value;i.min=e.new,t.min=Math.max(e.new,i.value),i.max=Math.min(t.max,t.value),i._updateWidthInactive(),t._updateWidthInactive(),e.new<e.old?this._onTranslateXChangeBySideEffect(t,i):this._onTranslateXChangeBySideEffect(i,t),a!==t.value&&this._onValueChange(t),r!==i.value&&this._onValueChange(i)}_updateMinNonRange(e){let t=this._getInput(N.END);if(t){let i=t.value;t.min=e,t._updateThumbUIByValue(),this._updateTrackUI(t),i!==t.value&&this._onValueChange(t)}}get max(){return this._max}set max(e){let t=e==null||isNaN(e)?this._max:e;this._max!==t&&this._updateMax(t)}_max=100;_updateMax(e){let t=this._max;this._max=e,this._isRange?this._updateMaxRange({old:t,new:e}):this._updateMaxNonRange(e),this._onMinMaxOrStepChange()}_updateMaxRange(e){let t=this._getInput(N.END),i=this._getInput(N.START),a=t.value,r=i.value;t.max=e.new,i.max=Math.min(e.new,t.value),t.min=i.value,t._updateWidthInactive(),i._updateWidthInactive(),e.new>e.old?this._onTranslateXChangeBySideEffect(i,t):this._onTranslateXChangeBySideEffect(t,i),a!==t.value&&this._onValueChange(t),r!==i.value&&this._onValueChange(i)}_updateMaxNonRange(e){let t=this._getInput(N.END);if(t){let i=t.value;t.max=e,t._updateThumbUIByValue(),this._updateTrackUI(t),i!==t.value&&this._onValueChange(t)}}get step(){return this._step}set step(e){let t=isNaN(e)?this._step:e;this._step!==t&&this._updateStep(t)}_step=1;_updateStep(e){this._step=e,this._isRange?this._updateStepRange():this._updateStepNonRange(),this._onMinMaxOrStepChange()}_updateStepRange(){let e=this._getInput(N.END),t=this._getInput(N.START),i=e.value,a=t.value,r=t.value;e.min=this._min,t.max=this._max,e.step=this._step,t.step=this._step,this._platform.SAFARI&&(e.value=e.value,t.value=t.value),e.min=Math.max(this._min,t.value),t.max=Math.min(this._max,e.value),t._updateWidthInactive(),e._updateWidthInactive(),e.value<r?this._onTranslateXChangeBySideEffect(t,e):this._onTranslateXChangeBySideEffect(e,t),i!==e.value&&this._onValueChange(e),a!==t.value&&this._onValueChange(t)}_updateStepNonRange(){let e=this._getInput(N.END);if(e){let t=e.value;e.step=this._step,this._platform.SAFARI&&(e.value=e.value),e._updateThumbUIByValue(),t!==e.value&&this._onValueChange(e)}}displayWith=e=>`${e}`;_tickMarks=[];_noopAnimations=tt();_resizeObserver=null;_cachedWidth;_cachedLeft;_rippleRadius=24;startValueIndicatorText=``;endValueIndicatorText=``;_endThumbTransform;_startThumbTransform;_isRange=!1;_isRtl=CI(()=>this._dir?.valueSignal()===`rtl`);_hasViewInitialized=!1;_tickMarkTrackWidth=0;_hasAnimation=!1;_resizeTimer=null;_platform=w$1(x);constructor(){w$1(V).load(fn);let e=this._isRtl();bL(()=>{let t=this._isRtl();t!==e&&(e=t,this._isRange?this._onDirChangeRange():this._onDirChangeNonRange(),this._updateTickMarkUI())})}_knobRadius=8;_inputPadding;ngAfterViewInit(){this._platform.isBrowser&&this._updateDimensions();let e=this._getInput(N.END),t=this._getInput(N.START);this._isRange=!!e&&!!t,this._cdr.detectChanges();let i=this._getThumb(N.END);this._rippleRadius=i._ripple.radius,this._inputPadding=this._rippleRadius-this._knobRadius,this._isRange?this._initUIRange(e,t):this._initUINonRange(e),this._updateTrackUI(e),this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._observeHostResize(),this._cdr.detectChanges()}_initUINonRange(e){e.initProps(),e.initUI(),this._updateValueIndicatorUI(e),this._hasViewInitialized=!0,e._updateThumbUIByValue()}_initUIRange(e,t){e.initProps(),e.initUI(),t.initProps(),t.initUI(),e._updateMinMax(),t._updateMinMax(),e._updateStaticStyles(),t._updateStaticStyles(),this._updateValueIndicatorUIs(),this._hasViewInitialized=!0,e._updateThumbUIByValue(),t._updateThumbUIByValue()}ngOnDestroy(){this._resizeObserver?.disconnect(),this._resizeObserver=null}_onDirChangeRange(){let e=this._getInput(N.END),t=this._getInput(N.START);e._setIsLeftThumb(),t._setIsLeftThumb(),e.translateX=e._calcTranslateXByValue(),t.translateX=t._calcTranslateXByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateWidthInactive(),t._updateWidthInactive(),e._updateThumbUIByValue(),t._updateThumbUIByValue()}_onDirChangeNonRange(){this._getInput(N.END)._updateThumbUIByValue()}_observeHostResize(){typeof ResizeObserver>`u`||!ResizeObserver||this._ngZone.runOutsideAngular(()=>{this._resizeObserver=new ResizeObserver(()=>{this._isActive()||(this._resizeTimer&&clearTimeout(this._resizeTimer),this._onResize())}),this._resizeObserver.observe(this._elementRef.nativeElement)})}_isActive(){return this._getThumb(N.START)._isActive||this._getThumb(N.END)._isActive}_getValue(e=N.END){let t=this._getInput(e);return t?t.value:this.min}_skipUpdate(){return!!(this._getInput(N.START)?._skipUIUpdate||this._getInput(N.END)?._skipUIUpdate)}_updateDimensions(){this._cachedWidth=this._elementRef.nativeElement.offsetWidth,this._cachedLeft=this._elementRef.nativeElement.getBoundingClientRect().left}_setTrackActiveStyles(e){let t=this._trackActive.nativeElement.style;t.left=e.left,t.right=e.right,t.transformOrigin=e.transformOrigin,t.transform=e.transform}_calcTickMarkTransform(e){let t=e*(this._tickMarkTrackWidth/(this._tickMarks.length-1));return`translateX(${this._isRtl()?this._cachedWidth-6-t:t}px)`}_onTranslateXChange(e){this._hasViewInitialized&&(this._updateThumbUI(e),this._updateTrackUI(e),this._updateOverlappingThumbUI(e))}_onTranslateXChangeBySideEffect(e,t){this._hasViewInitialized&&(e._updateThumbUIByValue(),t._updateThumbUIByValue())}_onValueChange(e){this._hasViewInitialized&&(this._updateValueIndicatorUI(e),this._updateTickMarkUI(),this._cdr.detectChanges())}_onMinMaxOrStepChange(){this._hasViewInitialized&&(this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.markForCheck())}_onResize(){if(this._hasViewInitialized){if(this._updateDimensions(),this._isRange){let e=this._getInput(N.END),t=this._getInput(N.START);e._updateThumbUIByValue(),t._updateThumbUIByValue(),e._updateStaticStyles(),t._updateStaticStyles(),e._updateMinMax(),t._updateMinMax(),e._updateWidthInactive(),t._updateWidthInactive()}else{let e=this._getInput(N.END);e&&e._updateThumbUIByValue()}this._updateTickMarkUI(),this._updateTickMarkTrackUI(),this._cdr.detectChanges()}}_thumbsOverlap=!1;_areThumbsOverlapping(){let e=this._getInput(N.START),t=this._getInput(N.END);return!e||!t?!1:t.translateX-e.translateX<20}_updateOverlappingThumbClassNames(e){let t=e.getSibling(),i=this._getThumb(e.thumbPosition);this._getThumb(t.thumbPosition)._hostElement.classList.remove(`mdc-slider__thumb--top`),i._hostElement.classList.toggle(`mdc-slider__thumb--top`,this._thumbsOverlap)}_updateOverlappingThumbUI(e){!this._isRange||this._skipUpdate()||this._thumbsOverlap!==this._areThumbsOverlapping()&&(this._thumbsOverlap=!this._thumbsOverlap,this._updateOverlappingThumbClassNames(e))}_updateThumbUI(e){if(this._skipUpdate())return;let t=this._getThumb(e.thumbPosition===N.END?N.END:N.START);t._hostElement.style.transform=`translateX(${e.translateX}px)`}_updateValueIndicatorUI(e){if(this._skipUpdate())return;let t=this.displayWith(e.value);if(this._hasViewInitialized?e._valuetext.set(t):e._hostElement.setAttribute(`aria-valuetext`,t),this.discrete){e.thumbPosition===N.START?this.startValueIndicatorText=t:this.endValueIndicatorText=t;let i=this._getThumb(e.thumbPosition);t.length<3?i._hostElement.classList.add(`mdc-slider__thumb--short-value`):i._hostElement.classList.remove(`mdc-slider__thumb--short-value`)}}_updateValueIndicatorUIs(){let e=this._getInput(N.END),t=this._getInput(N.START);e&&this._updateValueIndicatorUI(e),t&&this._updateValueIndicatorUI(t)}_updateTickMarkTrackUI(){if(!this.showTickMarks||this._skipUpdate())return;let e=this._step&&this._step>0?this._step:1,i=(Math.floor(this.max/e)*e-this.min)/(this.max-this.min);this._tickMarkTrackWidth=(this._cachedWidth-6)*i}_updateTrackUI(e){this._skipUpdate()||(this._isRange?this._updateTrackUIRange(e):this._updateTrackUINonRange(e))}_updateTrackUIRange(e){let t=e.getSibling();if(!t||!this._cachedWidth)return;let i=Math.abs(t.translateX-e.translateX)/this._cachedWidth;e._isLeftThumb&&this._cachedWidth?this._setTrackActiveStyles({left:`auto`,right:`${this._cachedWidth-t.translateX}px`,transformOrigin:`right`,transform:`scaleX(${i})`}):this._setTrackActiveStyles({left:`${t.translateX}px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${i})`})}_updateTrackUINonRange(e){this._isRtl()?this._setTrackActiveStyles({left:`auto`,right:`0px`,transformOrigin:`right`,transform:`scaleX(${1-e.fillPercentage})`}):this._setTrackActiveStyles({left:`0px`,right:`auto`,transformOrigin:`left`,transform:`scaleX(${e.fillPercentage})`})}_updateTickMarkUI(){if(!this.showTickMarks||!this._cachedWidth||this.step===void 0||this.min===void 0||this.max===void 0)return;let e=this.step>0?this.step:1;this._isRange?this._updateTickMarkUIRange(e):this._updateTickMarkUINonRange(e)}_updateTickMarkUINonRange(e){let t=this._getValue(),i=Math.max(Math.round((t-this.min)/e),0)+1,a=Math.max(Math.round((this.max-t)/e),0)-1;this._isRtl()?i++:a++,this._tickMarks=Array(i).fill(qe.ACTIVE).concat(Array(a).fill(qe.INACTIVE))}_updateTickMarkUIRange(e){let t=this._getValue(),i=this._getValue(N.START),a=Math.max(Math.round((i-this.min)/e),0),r=Math.max(Math.round((t-i)/e)+1,0),o=Math.max(Math.round((this.max-t)/e),0);this._tickMarks=Array(a).fill(qe.INACTIVE).concat(Array(r).fill(qe.ACTIVE),Array(o).fill(qe.INACTIVE))}_getInput(e){if(e===N.END&&this._input)return this._input;if(this._inputs?.length)return e===N.START?this._inputs.first:this._inputs.last}_getThumb(e){return e===N.END?this._thumbs?.last:this._thumbs?.first}_setTransition(e){this._hasAnimation=!this._platform.IOS&&e&&!this._noopAnimations,this._elementRef.nativeElement.classList.toggle(`mat-mdc-slider-with-animation`,this._hasAnimation)}_isCursorOnSliderThumb(e,t){let i=t.width/2,a=t.x+i,r=t.y+i,o=e.clientX-a,l=e.clientY-r;return Math.pow(o,2)+Math.pow(l,2)<Math.pow(i,2)}static ɵfac=function(t){return new(t||s)};static ɵcmp=(function(){let e=[`trackActive`],t=[`*`];function i(l,d){if(l&1&&Gf(0,`div`),l&2){let u=d.$implicit,c=d.$index,p=LE(3);eI(u===0?`mdc-slider__tick-mark--active`:`mdc-slider__tick-mark--inactive`),op(`transform`,p._calcTickMarkTransform(c))}}function a(l,d){if(l&1&&TE(0,i,1,4,`div`,8,bE),l&2){let u=LE(2);_E(u._tickMarks)}}function r(l,d){if(l&1&&(Zo(0,`div`,6,1),DE(2,a,2,0),rc()),l&2){let u=LE();Ny(2),CE(u._cachedWidth?2:-1)}}function o(l,d){if(l&1&&Gf(0,`mat-slider-visual-thumb`,7),l&2){let u=LE();Wf(`discrete`,u.discrete)(`thumbPosition`,1)(`valueIndicatorText`,u.startValueIndicatorText)}}return tE({type:s,selectors:[[`mat-slider`]],contentQueries:function(d,u,c){if(d&1&&Xf(c,zn,5)(c,vi,4),d&2){let p;HE(p=BE())&&(u._input=p.first),HE(p=BE())&&(u._inputs=p)}},viewQuery:function(d,u){if(d&1&&ep(e,5)(Un,5),d&2){let c;HE(c=BE())&&(u._trackActive=c.first),HE(c=BE())&&(u._thumbs=c)}},hostAttrs:[1,`mat-mdc-slider`,`mdc-slider`],hostVars:12,hostBindings:function(d,u){d&2&&(eI(`mat-`+(u.color||`primary`)),ip(`mdc-slider--range`,u._isRange)(`mdc-slider--disabled`,u.disabled)(`mdc-slider--discrete`,u.discrete)(`mdc-slider--tick-marks`,u.showTickMarks)(`_mat-animation-noopable`,u._noopAnimations))},inputs:{disabled:[2,`disabled`,`disabled`,wL],discrete:[2,`discrete`,`discrete`,wL],showTickMarks:[2,`showTickMarks`,`showTickMarks`,wL],min:[2,`min`,`min`,CL],color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,wL],max:[2,`max`,`max`,CL],step:[2,`step`,`step`,CL],displayWith:`displayWith`},exportAs:[`matSlider`],features:[vI([{provide:Bt,useExisting:s}])],ngContentSelectors:t,decls:9,vars:5,consts:[[`trackActive`,``],[`tickMarkContainer`,``],[1,`mdc-slider__track`],[1,`mdc-slider__track--inactive`],[1,`mdc-slider__track--active`],[1,`mdc-slider__track--active_fill`],[1,`mdc-slider__tick-marks`],[3,`discrete`,`thumbPosition`,`valueIndicatorText`],[3,`class`,`transform`]],template:function(d,u){d&1&&(FE(),jE(0),Zo(1,`div`,2),Gf(2,`div`,3),Zo(3,`div`,4),Gf(4,`div`,5,0),rc(),DE(6,r,3,1,`div`,6),rc(),DE(7,o,1,3,`mat-slider-visual-thumb`,7),Gf(8,`mat-slider-visual-thumb`,7)),d&2&&(Ny(6),CE(u.showTickMarks?6:-1),Ny(),CE(u._isRange?7:-1),Ny(),Wf(`discrete`,u.discrete)(`thumbPosition`,2)(`valueIndicatorText`,u.endValueIndicatorText))},dependencies:[yi],styles:[`.mdc-slider__track {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  pointer-events: none;
  height: var(--%NS%mat-slider-inactive-track-height, 4px);
}

.mdc-slider__track--active,
.mdc-slider__track--inactive {
  display: flex;
  height: 100%;
  position: absolute;
  width: 100%;
}

.mdc-slider__track--active {
  overflow: hidden;
  border-radius: var(--%NS%mat-slider-active-track-shape, var(--%NS%mat-sys-corner-full));
  height: var(--%NS%mat-slider-active-track-height, 4px);
  top: calc((var(--%NS%mat-slider-inactive-track-height, 4px) - var(--%NS%mat-slider-active-track-height, 4px)) / 2);
}

.mdc-slider__track--active_fill {
  border-top-style: solid;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: relative;
  transform-origin: left;
  transition: transform 80ms ease;
  border-color: var(--%NS%mat-slider-active-track-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-slider-active-track-height, 4px);
}
.mdc-slider--disabled .mdc-slider__track--active_fill {
  border-color: var(--%NS%mat-slider-disabled-active-track-color, var(--%NS%mat-sys-on-surface));
}
[dir=rtl] .mdc-slider__track--active_fill {
  -webkit-transform-origin: right;
  transform-origin: right;
}

.mdc-slider__track--inactive {
  left: 0;
  top: 0;
  opacity: 0.24;
  background-color: var(--%NS%mat-slider-inactive-track-color, var(--%NS%mat-sys-surface-variant));
  height: var(--%NS%mat-slider-inactive-track-height, 4px);
  border-radius: var(--%NS%mat-slider-inactive-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-slider--disabled .mdc-slider__track--inactive {
  background-color: var(--%NS%mat-slider-disabled-inactive-track-color, var(--%NS%mat-sys-on-surface));
  opacity: 0.24;
}
.mdc-slider__track--%NS%inactive::before {
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
@media (forced-colors: active) {
  .mdc-slider__track--%NS%inactive::before {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-container {
  bottom: 44px;
  left: 50%;
  pointer-events: none;
  position: absolute;
  transform: var(--%NS%mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg));
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container {
  pointer-events: auto;
}

.mdc-slider__value-indicator {
  display: flex;
  align-items: center;
  transform: scale(0);
  transform-origin: var(--%NS%mat-slider-value-indicator-transform-origin, 0 28px);
  transition: transform 100ms cubic-bezier(0.4, 0, 1, 1);
  word-break: normal;
  background-color: var(--%NS%mat-slider-label-container-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-slider-label-label-text-color, var(--%NS%mat-sys-on-primary));
  width: var(--%NS%mat-slider-value-indicator-width, 28px);
  height: var(--%NS%mat-slider-value-indicator-height, 28px);
  padding: var(--%NS%mat-slider-value-indicator-padding, 0);
  opacity: var(--%NS%mat-slider-value-indicator-opacity, 1);
  border-radius: var(--%NS%mat-slider-value-indicator-border-radius, 50% 50% 50% 0);
}
.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator {
  transition: transform 100ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale(1);
}
.mdc-slider__value-indicator::before {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid;
  bottom: -5px;
  content: "";
  height: 0;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 0;
  display: var(--%NS%mat-slider-value-indicator-caret-display, none);
  border-top-color: var(--%NS%mat-slider-label-container-color, var(--%NS%mat-sys-primary));
}
.mdc-slider__value-indicator::after {
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
@media (forced-colors: active) {
  .mdc-slider__value-indicator::after {
    border-color: CanvasText;
  }
}

.mdc-slider__value-indicator-text {
  text-align: center;
  width: var(--%NS%mat-slider-value-indicator-width, 28px);
  transform: var(--%NS%mat-slider-value-indicator-text-transform, rotate(45deg));
  font-family: var(--%NS%mat-slider-label-label-text-font, var(--%NS%mat-sys-label-medium-font));
  font-size: var(--%NS%mat-slider-label-label-text-size, var(--%NS%mat-sys-label-medium-size));
  font-weight: var(--%NS%mat-slider-label-label-text-weight, var(--%NS%mat-sys-label-medium-weight));
  line-height: var(--%NS%mat-slider-label-label-text-line-height, var(--%NS%mat-sys-label-medium-line-height));
  letter-spacing: var(--%NS%mat-slider-label-label-text-tracking, var(--%NS%mat-sys-label-medium-tracking));
}

.mdc-slider__thumb {
  -webkit-user-select: none;
  user-select: none;
  display: flex;
  left: -24px;
  outline: none;
  position: absolute;
  height: 48px;
  width: 48px;
  pointer-events: none;
}
.mdc-slider--discrete .mdc-slider__thumb {
  transition: transform 80ms ease;
}
.mdc-slider--disabled .mdc-slider__thumb {
  pointer-events: none;
}

.mdc-slider__thumb--top {
  z-index: 1;
}

.mdc-slider__thumb-knob {
  position: absolute;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-style: solid;
  width: var(--%NS%mat-slider-handle-width, 20px);
  height: var(--%NS%mat-slider-handle-height, 20px);
  border-width: calc(var(--%NS%mat-slider-handle-height, 20px) / 2) calc(var(--%NS%mat-slider-handle-width, 20px) / 2);
  box-shadow: var(--%NS%mat-slider-handle-elevation, var(--%NS%mat-sys-level1));
  background-color: var(--%NS%mat-slider-handle-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-slider-handle-color, var(--%NS%mat-sys-primary));
  border-radius: var(--%NS%mat-slider-handle-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-slider__thumb:hover .mdc-slider__thumb-knob {
  background-color: var(--%NS%mat-slider-hover-handle-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-slider-hover-handle-color, var(--%NS%mat-sys-primary));
}
.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  background-color: var(--%NS%mat-slider-focus-handle-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-slider-focus-handle-color, var(--%NS%mat-sys-primary));
}
.mdc-slider--disabled .mdc-slider__thumb-knob {
  background-color: var(--%NS%mat-slider-disabled-handle-color, var(--%NS%mat-sys-on-surface));
  border-color: var(--%NS%mat-slider-disabled-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-slider__thumb--top .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob {
  border: solid 1px #fff;
  box-sizing: content-box;
  border-color: var(--%NS%mat-slider-with-overlap-handle-outline-color, var(--%NS%mat-sys-on-primary));
  border-width: var(--%NS%mat-slider-with-overlap-handle-outline-width, 1px);
}

.mdc-slider__tick-marks {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 0 1px;
  position: absolute;
  width: 100%;
}

.mdc-slider__tick-mark--active,
.mdc-slider__tick-mark--inactive {
  width: var(--%NS%mat-slider-with-tick-marks-container-size, 2px);
  height: var(--%NS%mat-slider-with-tick-marks-container-size, 2px);
  border-radius: var(--%NS%mat-slider-with-tick-marks-container-shape, var(--%NS%mat-sys-corner-full));
}

.mdc-slider__tick-mark--inactive {
  opacity: var(--%NS%mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--%NS%mat-slider-with-tick-marks-inactive-container-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-slider--disabled .mdc-slider__tick-mark--inactive {
  opacity: var(--%NS%mat-slider-with-tick-marks-inactive-container-opacity, 0.38);
  background-color: var(--%NS%mat-slider-with-tick-marks-disabled-container-color, var(--%NS%mat-sys-on-surface));
}

.mdc-slider__tick-mark--active {
  opacity: var(--%NS%mat-slider-with-tick-marks-active-container-opacity, 0.38);
  background-color: var(--%NS%mat-slider-with-tick-marks-active-container-color, var(--%NS%mat-sys-on-primary));
}

.mdc-slider__input {
  cursor: pointer;
  left: 2px;
  margin: 0;
  height: 44px;
  opacity: 0;
  position: absolute;
  top: 2px;
  width: 44px;
  box-sizing: content-box;
}
.mdc-slider__input.mat-mdc-slider-input-no-pointer-events {
  pointer-events: none;
}
.mdc-slider__input.mat-slider__right-input {
  left: auto;
  right: 0;
}

.mat-mdc-slider {
  display: inline-block;
  box-sizing: border-box;
  outline: none;
  vertical-align: middle;
  cursor: pointer;
  height: 48px;
  margin: 0 8px;
  position: relative;
  touch-action: pan-y;
  width: auto;
  min-width: 112px;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-slider.mdc-slider--disabled {
  cursor: auto;
  opacity: 0.38;
}
.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input {
  cursor: auto;
}
.mat-mdc-slider .mdc-slider__thumb,
.mat-mdc-slider .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,
.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill {
  transition-duration: 0ms;
}
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,
.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {
  transition-duration: 80ms;
}
.mat-mdc-slider .mat-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-slider-ripple-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple {
  background-color: var(--%NS%mat-slider-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-primary) 5%, transparent));
}
.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,
.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple {
  background-color: var(--%NS%mat-slider-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-primary) 20%, transparent));
}
.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb, .mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,
.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator {
  transition: none;
}
.mat-mdc-slider .mat-focus-indicator::before {
  border-radius: 50%;
}

.mdc-slider__thumb--focused .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return s})();var Ci={provide:Ct,useExisting:Jr(()=>Lt),multi:!0};var Lt=(()=>{class s{_ngZone=w$1(be);_elementRef=w$1(ar);_cdr=w$1(IL);_slider=w$1(Bt);_platform=w$1(x);_listenerCleanups;get value(){return CL(this._hostElement.value,0)}set value(e){e===null&&(e=this._getDefaultValue()),e=isNaN(e)?0:e;let t=e+``;if(!this._hasSetInitialValue){this._initialValue=t;return}this._isActive||this._setValue(t)}_setValue(e){this._hostElement.value=e,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges(),this._slider._cdr.markForCheck()}valueChange=new Oe;dragStart=new Oe;dragEnd=new Oe;get translateX(){return this._slider.min>=this._slider.max?(this._translateX=this._tickMarkOffset,this._translateX):(this._translateX===void 0&&(this._translateX=this._calcTranslateXByValue()),this._translateX)}set translateX(e){this._translateX=e}_translateX;thumbPosition=N.END;get min(){return CL(this._hostElement.min,0)}set min(e){this._hostElement.min=e+``,this._cdr.detectChanges()}get max(){return CL(this._hostElement.max,0)}set max(e){this._hostElement.max=e+``,this._cdr.detectChanges()}get step(){return CL(this._hostElement.step,0)}set step(e){this._hostElement.step=e+``,this._cdr.detectChanges()}get disabled(){return wL(this._hostElement.disabled)}set disabled(e){this._hostElement.disabled=e,this._cdr.detectChanges(),this._slider.disabled!==this.disabled&&(this._slider.disabled=this.disabled)}get percentage(){return this._slider.min>=this._slider.max?this._slider._isRtl()?1:0:(this.value-this._slider.min)/(this._slider.max-this._slider.min)}get fillPercentage(){return this._slider._cachedWidth?this._translateX===0?0:this.translateX/this._slider._cachedWidth:this._slider._isRtl()?1:0}_hostElement=this._elementRef.nativeElement;_valuetext=wo(``);_knobRadius=8;_tickMarkOffset=3;_isActive=!1;_isFocused=!1;_setIsFocused(e){this._isFocused=e}_hasSetInitialValue=!1;_initialValue;_formControl;_destroyed=new J;_skipUIUpdate=!1;_onChangeFn;_onTouchedFn=()=>{};_isControlInitialized=!1;constructor(){let e=w$1(ua$1);this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[e.listen(this._hostElement,`pointerdown`,this._onPointerDown.bind(this)),e.listen(this._hostElement,`pointermove`,this._onPointerMove.bind(this)),e.listen(this._hostElement,`pointerup`,this._onPointerUp.bind(this))]})}ngOnDestroy(){this._listenerCleanups.forEach(e=>e()),this._destroyed.next(),this._destroyed.complete(),this.dragStart.complete(),this.dragEnd.complete()}initProps(){this._updateWidthInactive(),this.disabled!==this._slider.disabled&&(this._slider.disabled=!0),this.step=this._slider.step,this.min=this._slider.min,this.max=this._slider.max,this._initValue()}initUI(){this._updateThumbUIByValue()}_initValue(){this._hasSetInitialValue=!0,this._initialValue===void 0?this.value=this._getDefaultValue():(this._hostElement.value=this._initialValue,this._updateThumbUIByValue(),this._slider._onValueChange(this),this._cdr.detectChanges())}_getDefaultValue(){return this.min}_onBlur(){this._setIsFocused(!1),this._onTouchedFn()}_onFocus(){this._slider._setTransition(!1),this._slider._updateTrackUI(this),this._setIsFocused(!0)}_onChange(){this.valueChange.emit(this.value),this._isActive&&this._updateThumbUIByValue({withAnimation:!0})}_onInput(){this._onChangeFn?.(this.value),(this._slider.step||!this._isActive)&&this._updateThumbUIByValue({withAnimation:!this._isActive}),this._slider._onValueChange(this)}_onNgControlValueChange(){(!this._isActive||!this._isFocused)&&(this._slider._onValueChange(this),this._updateThumbUIByValue()),this._slider.disabled=this._formControl.disabled}_onPointerDown(e){if(!(this.disabled||e.button!==0)){if(this._platform.IOS){let t=this._slider._isCursorOnSliderThumb(e,this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());this._isActive=t,this._updateWidthActive(),this._slider._updateDimensions();return}this._isActive=!0,this._setIsFocused(!0),this._updateWidthActive(),this._slider._updateDimensions(),this._slider.step||this._updateThumbUIByPointerEvent(e,{withAnimation:!0}),this.disabled||(this._handleValueCorrection(e),this.dragStart.emit({source:this,parent:this._slider,value:this.value}))}}_handleValueCorrection(e){this._skipUIUpdate=!0,setTimeout(()=>{this._skipUIUpdate=!1,this._fixValue(e)},0)}_fixValue(e){let t=e.clientX-this._slider._cachedLeft,i=this._slider._cachedWidth,a=this._slider.step===0?1:this._slider.step,r=Math.floor((this._slider.max-this._slider.min)/a),o=this._slider._isRtl()?1-t/i:t/i,d=Math.round(o*r)/r*(this._slider.max-this._slider.min)+this._slider.min,u=Math.round(d/a)*a;if(u===this.value){this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation});return}this.value=u,this.valueChange.emit(this.value),this._onChangeFn?.(this.value),this._slider._onValueChange(this),this._slider.step>0?this._updateThumbUIByValue():this._updateThumbUIByPointerEvent(e,{withAnimation:this._slider._hasAnimation})}_onPointerMove(e){!this._slider.step&&this._isActive&&this._updateThumbUIByPointerEvent(e)}_onPointerUp(){this._isActive&&(this._isActive=!1,this._platform.SAFARI&&this._setIsFocused(!1),this.dragEnd.emit({source:this,parent:this._slider,value:this.value}),setTimeout(()=>this._updateWidthInactive(),this._platform.IOS?10:0))}_clamp(e){let t=this._tickMarkOffset,i=this._slider._cachedWidth-this._tickMarkOffset;return Math.max(Math.min(e,i),t)}_calcTranslateXByValue(){return this._slider._isRtl()?(1-this.percentage)*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset:this.percentage*(this._slider._cachedWidth-this._tickMarkOffset*2)+this._tickMarkOffset}_calcTranslateXByPointerEvent(e){return e.clientX-this._slider._cachedLeft}_updateWidthActive(){}_updateWidthInactive(){this._hostElement.style.padding=`0 ${this._slider._inputPadding}px`,this._hostElement.style.width=`calc(100% + ${this._slider._inputPadding-this._tickMarkOffset*2}px)`,this._hostElement.style.left=`-${this._slider._rippleRadius-this._tickMarkOffset}px`}_updateThumbUIByValue(e){this.translateX=this._clamp(this._calcTranslateXByValue()),this._updateThumbUI(e)}_updateThumbUIByPointerEvent(e,t){this.translateX=this._clamp(this._calcTranslateXByPointerEvent(e)),this._updateThumbUI(t)}_updateThumbUI(e){this._slider._setTransition(!!e?.withAnimation),this._slider._onTranslateXChange(this)}writeValue(e){(this._isControlInitialized||e!==null)&&(this.value=e)}registerOnChange(e){this._onChangeFn=e,this._isControlInitialized=!0}registerOnTouched(e){this._onTouchedFn=e}setDisabledState(e){this.disabled=e}focus(){this._hostElement.focus()}blur(){this._hostElement.blur()}static ɵfac=function(t){return new(t||s)};static ɵdir=sE({type:s,selectors:[[`input`,`matSliderThumb`,``]],hostAttrs:[`type`,`range`,1,`mdc-slider__input`],hostVars:1,hostBindings:function(t,i){t&1&&Kf(`change`,function(){return i._onChange()})(`input`,function(){return i._onInput()})(`blur`,function(){return i._onBlur()})(`focus`,function(){return i._onFocus()}),t&2&&Uf(`aria-valuetext`,i._valuetext())},inputs:{value:[2,`value`,`value`,CL]},outputs:{valueChange:`valueChange`,dragStart:`dragStart`,dragEnd:`dragEnd`},exportAs:[`matSliderThumb`],features:[vI([Ci,{provide:zn,useExisting:s}])]})}return s})();var Wn=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵmod=rE({type:s});static ɵinj=sl({imports:[vn,X]})}return s})();var ki=Math.pow(2,31)-1;var it=class{_overlayRef;instance;containerInstance;_afterDismissed=new J;_afterOpened=new J;_onAction=new J;_durationTimeoutId;_dismissedByAction=!1;constructor(n,e){this._overlayRef=e,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,ki))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}};var jn=new A(`MatSnackBarData`);var $e=class{politeness=`polite`;announcementMessage=``;viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition=`center`;verticalPosition=`bottom`};var Mi=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵdir=sE({type:s,selectors:[[``,`matSnackBarLabel`,``]],hostAttrs:[1,`mat-mdc-snack-bar-label`,`mdc-snackbar__label`]})}return s})();var wi=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵdir=sE({type:s,selectors:[[``,`matSnackBarActions`,``]],hostAttrs:[1,`mat-mdc-snack-bar-actions`,`mdc-snackbar__actions`]})}return s})();var Si=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵdir=sE({type:s,selectors:[[``,`matSnackBarAction`,``]],hostAttrs:[1,`mat-mdc-snack-bar-action`,`mdc-snackbar__action`]})}return s})();var Hn=(()=>{class s{snackBarRef=w$1(it);data=w$1(jn);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static ɵfac=function(t){return new(t||s)};static ɵcmp=(function(){function e(t,i){if(t&1){let a=RE();Zo(0,`div`,1)(1,`button`,2),Kf(`click`,function(){Ol(a);let o=LE();return kl(o.action())}),dI(2),rc()()}if(t&2){let a=LE();Ny(2),cc(` `,a.data.action,` `)}}return tE({type:s,selectors:[[`simple-snack-bar`]],hostAttrs:[1,`mat-mdc-simple-snack-bar`],exportAs:[`matSnackBar`],decls:3,vars:2,consts:[[`matSnackBarLabel`,``],[`matSnackBarActions`,``],[`matButton`,``,`matSnackBarAction`,``,3,`click`]],template:function(i,a){i&1&&(Zo(0,`div`,0),dI(1),rc(),DE(2,e,3,1,`div`,1)),i&2&&(Ny(),cc(` `,a.data.message,`
`),Ny(),CE(a.hasAction?2:-1))},dependencies:[kr,Mi,wi,Si],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})})()}return s})();var zt=`_mat-snack-bar-enter`;var Ut=`_mat-snack-bar-exit`;var Ti=(()=>{class s extends we{_ngZone=w$1(be);_elementRef=w$1(ar);_changeDetectorRef=w$1(IL);_platform=w$1(x);_animationsDisabled=tt();snackBarConfig=w$1($e);_document=w$1(zn$2);_trackedModals=/* @__PURE__ */ new Set;_enterFallback;_exitFallback;_injector=w$1(re);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new J;_onExit=new J;_onEnter=new J;_animationState=`void`;_live;_label;_role;_liveElementId=w$1(Gt$1).getId(`mat-snack-bar-container-live-`);constructor(){super();let e=this.snackBarConfig;e.politeness===`assertive`&&!e.announcementMessage?this._live=`assertive`:e.politeness===`off`?this._live=`off`:this._live=`polite`,this._platform.FIREFOX&&(this._live===`polite`&&(this._role=`status`),this._live===`assertive`&&(this._role=`alert`))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===Ut?this._completeExit():e===zt&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?ay(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(zt)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-snack-bar-fallback-visible`),this.onAnimationEnd(zt)},200)))}exit(){return this._destroyed?Jp(void 0):(this._ngZone.run(()=>{this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute(`mat-exit`,``),clearTimeout(this._announceTimeoutId),this._animationsDisabled?ay(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Ut)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Ut),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(r=>e.classList.add(r)):e.classList.add(t)),this._exposeToModals();let i=this._label.nativeElement,a=`mdc-snackbar__label`;i.classList.toggle(a,!i.querySelector(`.${a}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let i=0;i<t.length;i++){let a=t[i],r=a.getAttribute(`aria-owns`);this._trackedModals.add(a),r?r.indexOf(e)===-1&&a.setAttribute(`aria-owns`,r+` `+e):a.setAttribute(`aria-owns`,e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute(`aria-owns`);if(t){let i=t.replace(this._liveElementId,``).trim();i.length>0?e.setAttribute(`aria-owns`,i):e.removeAttribute(`aria-owns`)}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector(`[aria-hidden]`),i=e.querySelector(`[aria-live]`);if(t&&i){let a=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(a=document.activeElement),t.removeAttribute(`aria-hidden`),i.appendChild(t),a?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static ɵfac=function(t){return new(t||s)};static ɵcmp=(function(){let e=[`label`];function t(i,a){}return tE({type:s,selectors:[[`mat-snack-bar-container`]],viewQuery:function(a,r){if(a&1&&ep(Si$1,7)(e,7),a&2){let o;HE(o=BE())&&(r._portalOutlet=o.first),HE(o=BE())&&(r._label=o.first)}},hostAttrs:[1,`mdc-snackbar`,`mat-mdc-snack-bar-container`],hostVars:6,hostBindings:function(a,r){a&1&&Kf(`animationend`,function(l){return r.onAnimationEnd(l.animationName)})(`animationcancel`,function(l){return r.onAnimationEnd(l.animationName)}),a&2&&ip(`mat-snack-bar-container-enter`,r._animationState===`visible`)(`mat-snack-bar-container-exit`,r._animationState===`hidden`)(`mat-snack-bar-container-animations-enabled`,!r._animationsDisabled)},features:[Pf],decls:6,vars:3,consts:[[`label`,``],[1,`mdc-snackbar__surface`,`mat-mdc-snackbar-surface`],[1,`mat-mdc-snack-bar-label`],[`aria-hidden`,`true`],[`cdkPortalOutlet`,``]],template:function(a,r){a&1&&(Zo(0,`div`,1)(1,`div`,2,0)(3,`div`,3),jf(4,t,0,0,`ng-template`,4),rc(),Gf(5,`div`),rc()()),a&2&&(Ny(5),Uf(`aria-live`,r._live)(`role`,r._role)(`id`,r._liveElementId))},dependencies:[Si$1],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})})()}return s})();var Ai=new A(`mat-snack-bar-default-options`,{providedIn:`root`,factory:()=>new $e});var Gt=(()=>{class s{_live=w$1(Ln$1);_injector=w$1(re);_breakpointObserver=w$1(Kt);_parentSnackBar=w$1(s,{optional:!0,skipSelf:!0});_defaultConfig=w$1(Ai);_animationsDisabled=tt();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Hn;snackBarContainerComponent=Ti;handsetCssClass=`mat-mdc-snack-bar-handset`;get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t=``,i){let a=$($({},this._defaultConfig),i);return a.data={message:e,action:t},a.announcementMessage===e&&(a.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,a)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let i=t&&t.viewContainerRef&&t.viewContainerRef.injector,a=re.create({parent:i||this._injector,providers:[{provide:$e,useValue:t}]}),r=new qe$1(this.snackBarContainerComponent,t.viewContainerRef,a),o=e.attach(r);return o.instance.snackBarConfig=t,o.instance}_attach(e,t){let i=$($($({},new $e),this._defaultConfig),t),a=this._createOverlay(i),r=this._attachSnackBarContainer(a,i),o=new it(r,a);if(e instanceof tr){let l=new X$1(e,null,{$implicit:i.data,snackBarRef:o});o.instance=r.attachTemplatePortal(l)}else{let l=this._createInjector(i,o),d=new qe$1(e,void 0,l);o.instance=r.attachComponentPortal(d).instance}return this._breakpointObserver.observe(Ci$1.HandsetPortrait).pipe(_h(a.detachments())).subscribe(l=>{a.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),i.announcementMessage&&r._onAnnounce.subscribe(()=>{this._live.announce(i.announcementMessage,i.politeness)}),this._animateSnackBar(o,i),this._openedSnackBarRef=o,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new j;t.direction=e.direction;let i=Jt$1(this._injector),a=e.direction===`rtl`,r=e.horizontalPosition===`left`||e.horizontalPosition===`start`&&!a||e.horizontalPosition===`end`&&a,o=!r&&e.horizontalPosition!==`center`;return r?i.left(`0`):o?i.right(`0`):i.centerHorizontally(),e.verticalPosition===`top`?i.top(`0`):i.bottom(`0`),t.positionStrategy=i,t.disableAnimations=this._animationsDisabled,Ie(this._injector,t)}_createInjector(e,t){let i=e&&e.viewContainerRef&&e.viewContainerRef.injector;return re.create({parent:i||this._injector,providers:[{provide:it,useValue:t},{provide:jn,useValue:e.data}]})}static ɵfac=function(t){return new(t||s)};static ɵprov=sr({token:s,factory:s.ɵfac})}return s})();var qn=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵmod=rE({type:s});static ɵinj=sl({providers:[Gt],imports:[st,Bt$1,Dr,Hn,X]})}return s})();var Ii=20;var Ni=new A(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let s=w$1(re);return()=>Pe(s,{scrollThrottle:Ii})}});var Vi=new A(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var $n=`tooltip-panel`;var Ri={passive:!0};var Pi=8;var Oi=8;var Di=24;var Fi=200;var Wt=(()=>{class s{_elementRef=w$1(ar);_ngZone=w$1(be);_platform=w$1(x);_ariaDescriber=w$1(pi$1);_focusMonitor=w$1(Vt);_dir=w$1(Mn);_injector=w$1(re);_viewContainerRef=w$1(ai$1);_mediaMatcher=w$1(Mt$1);_document=w$1(zn$2);_renderer=w$1(ua$1);_animationsDisabled=tt();_defaultOptions=w$1(Vi,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Xn;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=zi$1(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=zi$1(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Dn$1(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Dn$1(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new J;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Pi}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(_h(this._destroyed)).subscribe(e=>{e?e===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,`tooltip`),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(t);this._detach(),this._portal=this._portal||new qe$1(this._tooltipComponent,this._viewContainerRef);let a=this._tooltipInstance=i.attach(this._portal).instance;a._triggerElement=this._elementRef.nativeElement,a._mouseLeaveHideDelay=this._hideDelay,a.afterHidden().pipe(_h(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),a.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let r=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&r._origin instanceof ar)return this._overlayRef;this._detach()}let t=this._injector.get(ce).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${$n}`,a=Ee(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation(`global`);return a.positionChanges.pipe(_h(this._destroyed)).subscribe(r=>{this._updateCurrentPositionClass(r.connectionPair),this._tooltipInstance&&r.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Ie(this._injector,{direction:this._dir,positionStrategy:a,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(Ni)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(_h(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(_h(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(_h(this._destroyed)).subscribe(r=>{r.preventDefault(),r.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(_h(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,i=this._getOrigin(),a=this._getOverlayPosition();t.withPositions([this._addOffset($($({},i.main),a.main)),this._addOffset($($({},i.fallback),a.fallback))])}_addOffset(e){let t=Oi,i=!this._dir||this._dir.value==`ltr`;return e.originY===`top`?e.offsetY=-t:e.originY===`bottom`?e.offsetY=t:e.originX===`start`?e.offsetX=i?-t:t:e.originX===`end`&&(e.offsetX=i?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,i;t==`above`||t==`below`?i={originX:`center`,originY:t==`above`?`top`:`bottom`}:t==`before`||t==`left`&&e||t==`right`&&!e?i={originX:`start`,originY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(i={originX:`end`,originY:`center`});let{x:a,y:r}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:a,originY:r}}}_getOverlayPosition(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,i;t==`above`?i={overlayX:`center`,overlayY:`bottom`}:t==`below`?i={overlayX:`center`,overlayY:`top`}:t==`before`||t==`left`&&e||t==`right`&&!e?i={overlayX:`end`,overlayY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(i={overlayX:`start`,overlayY:`center`});let{x:a,y:r}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:a,overlayY:r}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),ay(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position===`above`||this.position===`below`?t===`top`?t=`bottom`:t===`bottom`&&(t=`top`):e===`end`?e=`start`:e===`start`&&(e=`end`),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:i,originY:a}=e,r;if(t===`center`?this._dir&&this._dir.value===`rtl`?r=i===`end`?`left`:`right`:r=i===`start`?`left`:`right`:r=t===`bottom`&&a===`top`?`above`:`below`,r!==this._currentPosition){let o=this._overlayRef;if(o){let l=`${this._cssClassPrefix}-${$n}-`;o.removePanelClass(l+this._currentPosition),o.addPanelClass(l+r)}this._currentPosition=r}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,e=>{let t=e.targetTouches?.[0],i=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let a=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??a)})):this._addListener(`mouseenter`,e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener(`wheel`,e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),i=this._elementRef.nativeElement;t!==i&&!i.contains(t)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,e),this._addListener(`touchcancel`,e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,Ri))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e==`function`?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!==`off`){let t=this._elementRef.nativeElement,i=t.style;(e===`on`||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`)&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect=`none`),(e===`on`||!t.draggable)&&(i.webkitUserDrag=`none`),i.touchAction=`none`,i.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,`tooltip`),this._isDestroyed||ay({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type===`keydown`?this._isTooltipVisible()&&e.keyCode===27&&!nn(e):!0;static ɵfac=function(t){return new(t||s)};static ɵdir=sE({type:s,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(t,i){t&2&&ip(`mat-mdc-tooltip-disabled`,i.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return s})();var Xn=(()=>{class s{_changeDetectorRef=w$1(IL);_elementRef=w$1(ar);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=tt();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new J;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>Di&&e.width>=Fi}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,i=this._showAnimation,a=this._hideAnimation;if(t.classList.remove(e?a:i),t.classList.add(e?i:a),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let r=getComputedStyle(t);(r.getPropertyValue(`animation-duration`)===`0s`||r.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(e))}static ɵfac=function(t){return new(t||s)};static ɵcmp=(function(){let e=[`tooltip`];return tE({type:s,selectors:[[`mat-tooltip-component`]],viewQuery:function(i,a){if(i&1&&ep(e,7),i&2){let r;HE(r=BE())&&(a._tooltip=r.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(i,a){i&1&&Kf(`mouseleave`,function(o){return a._handleMouseLeave(o)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(i,a){i&1&&(oc(0,`div`,1,0),Jf(`animationend`,function(o){return a._handleAnimationEnd(o)}),oc(2,`div`,2),dI(3),ic()()),i&2&&(eI(a.tooltipClass),ip(`mdc-tooltip--multiline`,a._isMultiline),Ny(3),dp(a.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
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
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})})()}return s})();var Yn=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵmod=rE({type:s});static ɵinj=sl({imports:[zn$1,st,X,le]})}return s})();var Qn=`https://cdn.jsdelivr.net/npm/cesium@1.146.0/Build/Cesium/`;var Zn=null;function Kn(){let s=window;return s.Cesium?Promise.resolve(s.Cesium):Zn??=new Promise((n,e)=>{let t=document.createElement(`link`);t.rel=`stylesheet`,t.href=Qn+`Widgets/widgets.css`,document.head.appendChild(t);let i=document.createElement(`script`);i.src=Qn+`Cesium.js`,i.onload=()=>n(s.Cesium),i.onerror=()=>{Zn=null,e(/* @__PURE__ */ new Error(`Cesium non caricato`))},document.head.appendChild(i)})}var Mt=(s,n)=>n.map(e=>U($({},e),{group:s}));var wt=[...Mt(`Nuclear`,[{id:`davy`,name:`Davy Crockett`,icon:`💣`,kind:`nuke`,W:.02,air:!1,desc:`The smallest nuke ever built, fired from a recoilless rifle.`},{id:`littleboy`,name:`Little Boy`,icon:`💣`,kind:`nuke`,W:15,air:!0,desc:`Hiroshima, 6 August 1945.`},{id:`fatman`,name:`Fat Man`,icon:`💣`,kind:`nuke`,W:21,air:!0,desc:`Nagasaki, 9 August 1945.`},{id:`w76`,name:`W76-1`,icon:`☢️`,kind:`nuke`,W:90,air:!0,desc:`Trident II submarine warhead.`},{id:`w87`,name:`W87`,icon:`☢️`,kind:`nuke`,W:300,air:!0,desc:`Minuteman III warhead.`},{id:`w88`,name:`W88`,icon:`☢️`,kind:`nuke`,W:475,air:!0,desc:`Heavy Trident II warhead.`},{id:`b83`,name:`B83`,icon:`☢️`,kind:`nuke`,W:1200,air:!0,desc:`The most powerful bomb in the US arsenal.`},{id:`ivymike`,name:`Ivy Mike`,icon:`🍄`,kind:`nuke`,W:10400,air:!1,desc:`First hydrogen bomb, Enewetak 1952.`},{id:`bravo`,name:`Castle Bravo`,icon:`🍄`,kind:`nuke`,W:15e3,air:!1,desc:`Largest US test, Bikini Atoll 1954.`},{id:`sadm`,name:`W54 SADM`,icon:`🎒`,kind:`nuke`,W:.01,air:!1,desc:`Backpack nuke for special forces.`},{id:`castleromeo`,name:`Castle Romeo`,icon:`🍄`,kind:`nuke`,W:11e3,air:!1,desc:`Runaway thermonuclear test, 1954.`},{id:`b41`,name:`B41`,icon:`☢️`,kind:`nuke`,W:25e3,air:!0,desc:`Biggest US bomb ever deployed.`},{id:`tsar`,name:`Tsar Bomba`,icon:`👑`,kind:`nuke`,W:5e4,air:!0,desc:`The most powerful explosion ever, 1961.`}]),...Mt(`Missiles & guns`,[{id:`cruise`,name:`Cruise missile`,icon:`🛩️`,kind:`cruise`,W:45e-5,air:!1,desc:`Comes in low from behind you (or from your silo in launch mode). Conventional warhead.`},{id:`railgun`,name:`Railgun`,icon:`⚡`,kind:`railgun`,W:.003,air:!1,desc:`Place up to 4 turrets: they fire Mach 7 slugs on their own within 15 km.`},{id:`fpv`,name:`FPV drone`,icon:`🛸`,kind:`cruise`,W:1e-6,air:!1,desc:`Kamikaze drone, 1 kg: takes a bite out of a wall.`},{id:`rpg`,name:`RPG-7`,icon:`🎯`,kind:`cruise`,W:2e-6,air:!1,desc:`Shoulder-fired rocket.`},{id:`javelin`,name:`Javelin`,icon:`🎯`,kind:`cruise`,W:9e-6,air:!1,desc:`Top-attack anti-tank missile.`},{id:`hellfire`,name:`Hellfire`,icon:`🎯`,kind:`cruise`,W:9e-6,air:!1,desc:`Small drone-launched anti-tank missile.`},{id:`gmlrs`,name:`GMLRS rocket`,icon:`🚀`,kind:`cruise`,W:9e-5,air:!1,desc:`Guided artillery rocket, 90 kg warhead.`},{id:`brahmos`,name:`BrahMos`,icon:`🚀`,kind:`cruise`,W:3e-4,air:!1,desc:`Supersonic cruise missile.`},{id:`stormshadow`,name:`Storm Shadow`,icon:`🛩️`,kind:`cruise`,W:45e-5,air:!1,desc:`Stealthy air-launched cruise missile.`},{id:`kalibr`,name:`Kalibr`,icon:`🛩️`,kind:`cruise`,W:5e-4,air:!1,desc:`Ship-launched cruise missile.`},{id:`gbu57`,name:`GBU-57 MOP`,icon:`🔩`,kind:`cruise`,W:.0024,air:!1,desc:`14 t bunker buster.`},{id:`moab`,name:`MOAB`,icon:`💥`,kind:`cruise`,W:.011,air:!1,desc:`Mother Of All Bombs, 11 t of explosive.`},{id:`foab`,name:`FOAB`,icon:`💥`,kind:`cruise`,W:.044,air:!1,desc:`Father Of All Bombs, thermobaric.`},{id:`iskander`,name:`Iskander-M`,icon:`🚀`,kind:`icbm`,W:50,air:!0,desc:`Short-range ballistic missile, nuclear warhead.`},{id:`hwasong`,name:`Hwasong-17`,icon:`🚀`,kind:`icbm`,W:300,air:!0,desc:`North Korean ICBM.`},{id:`sarmat`,name:`RS-28 Sarmat`,icon:`🚀`,kind:`icbm`,W:750,air:!0,desc:`Heavy ICBM, one of its warheads.`},{id:`df41`,name:`DF-41`,icon:`🚀`,kind:`icbm`,W:1e3,air:!0,desc:`Chinese road-mobile ICBM.`},{id:`poseidon`,name:`Poseidon`,icon:`🌊`,kind:`icbm`,W:2e3,air:!1,desc:`Nuclear torpedo drone, surface burst.`},{id:`carpet`,name:`Carpet bomb`,icon:`✈️`,kind:`carpet`,W:3e-4,air:!1,desc:`Click start and end of a line: three bombers lay bombs along it.`}]),...Mt(`From space`,[{id:`rod`,name:`Rod from God`,icon:`🛰️`,kind:`rod`,W:.012,air:!1,desc:`A tungsten rod dropped from orbit.`},{id:`chelyabinsk`,name:`Chelyabinsk`,icon:`🌠`,kind:`asteroid`,W:450,air:!0,hob:25e3,size:20,desc:`20 m meteor that exploded high over Russia in 2013.`},{id:`tunguska`,name:`Tunguska`,icon:`☄️`,kind:`asteroid`,W:12e3,air:!0,hob:8e3,size:50,desc:`50 m asteroid that flattened the taiga in 1908.`},{id:`km1`,name:`1 km asteroid`,icon:`🪨`,kind:`asteroid`,W:7e7,air:!1,size:1e3,desc:`Regional extinction event.`},{id:`apophis`,name:`Apophis`,icon:`🪨`,kind:`asteroid`,W:12e5,air:!1,size:370,desc:`370 m asteroid that will pass very close in 2029.`},{id:`dino`,name:`Chicxulub`,icon:`🦖`,kind:`asteroid`,W:1e11,air:!1,size:1e4,desc:`10 km of rock. Ask the dinosaurs.`}]),...Mt(`Weird`,[{id:`ufo`,name:`UFO`,icon:`🛸`,kind:`ufo`,W:0,air:!1,desc:`A saucer parks over the target and slowly beams people up.`},{id:`duck`,name:`Giant duck`,icon:`🦆`,kind:`duck`,W:0,air:!1,desc:`250 m of yellow rubber. Squeak.`},{id:`wind`,name:`Wind`,icon:`🌬️`,kind:`wind`,W:0,air:!1,desc:`Click to blow the mushroom clouds away: a gust blows toward where you point, over all you can see.`}])];var at=s=>s.kind===`nuke`||s.kind===`icbm`||s.kind===`cruise`;var Jn=[...new Set(wt.map(s=>s.group))].map(s=>({name:s,tools:wt.filter(n=>n.group===s)}));function Ve(s){return s>=1e6?(s/1e6).toLocaleString(`en-US`,{maximumFractionDigits:0})+` Gt`:s>=1e3?(s/1e3).toLocaleString(`en-US`,{maximumFractionDigits:1})+` Mt`:s>=1?s+` kt`:s>=.001?Math.round(s*1e3)+` t`:Math.round(s*1e6)+` kg`}var I=(s,n,e)=>s+(n-s)*e;var ge=s=>Math.max(0,Math.min(1,s));var R=(s,n,e)=>{let t=ge((e-s)/(n-s));return t*t*(3-2*t)};var St=Math.log10;var Li=[[0,3.5],[St(15),8.5],[2,13],[3,21],[4,38],[St(5e4),64]];var zi=[[0,.8],[St(15),2.5],[2,4.5],[3,10],[4,25],[St(5e4),47]];var Xe=5e6;function ei(s,n){let e=Math.log10(n);if(e<=s[0][0])return s[0][1]*Math.pow(n/Math.pow(10,s[0][0]),.3);for(let o=0;o<s.length-1;o++){let[l,d]=s[o],[u,c]=s[o+1];if(e<=u){let p=(e-l)/(u-l);return Math.exp(Math.log(d)+p*(Math.log(c)-Math.log(d)))}}let[t,i]=s[s.length-2],[a,r]=s[s.length-1];return r*Math.pow(10,(e-a)*Math.log10(r/i)/(a-t))}function Ye(s,n,e){let t=Math.cbrt(s),i=n?1:.7,a=n?1:.75,r={W:s,air:n,r20:Math.min(Xe,280*t*i),r5:Math.min(Xe,650*t*i),r1:Math.min(Xe,1700*t*i),rth:Math.min(Xe,630*Math.pow(s,.41)*a),rrad:Math.min(Xe,720*Math.pow(s,.19)),hob:e??(n?235*t:0),H:Math.min(1e5,ei(Li,s)*1e3),Rcap:Math.min(9e5,ei(zi,s)*1e3),tmax:Math.min(8,.25*Math.pow(s,.3)),Trise:Math.min(900,220*Math.pow(s,.07)),crater:n?0:30*Math.pow(s,.294)};return r.Rfb=Math.min(70*Math.pow(s,.4)*(n?1:1.26),r.Rcap*.5,3e5),r.tglow=2.5*r.tmax+1,r.Rstem=.17*r.Rcap,r.shockBoost=Math.max(1,Math.cbrt(s/5e4)),r}function Ui(){let n=document.createElement(`canvas`);n.width=n.height=256;let e=n.getContext(`2d`),t=e.createImageData(256,256),i=32,a=[],r=11,o=()=>(r=r*16807%2147483647)/2147483647;for(let u=0;u<1024;u++)a.push(o());let l=(u,c)=>{let p=Math.floor(u),v=Math.floor(c),b=u-p,S=c-v,k=b*b*(3-2*b),m=S*S*(3-2*S),x=(_,y)=>a[(y%i+i)%i*i+(_%i+i)%i];return(x(p,v)*(1-k)+x(p+1,v)*k)*(1-m)+(x(p,v+1)*(1-k)+x(p+1,v+1)*k)*m},d=(u,c)=>{let p=.5,v=1,b=0;for(let S=0;S<5;S++)b+=p*l(u*v,c*v),p*=.5,v*=2.03;return b};for(let u=0;u<256;u++)for(let c=0;c<256;c++){let p=c/256*4,v=u/256*4,b=d(p,v),S=d(p+7.3,v+2.1),k=c/256-.5,m=u/256-.5,x=Math.sqrt(k*k+m*m)*2,_=Math.max(0,1-x),y=Math.max(0,Math.min(1,(b*1.35-.25)*_*_*1.8)),A=Math.round(222+33*S),E=(u*256+c)*4;t.data[E]=t.data[E+1]=t.data[E+2]=A,t.data[E+3]=Math.round(y*255)}return e.putImageData(t,0,0),n}function Gi(){let n=document.createElement(`canvas`);n.width=n.height=128;let e=n.getContext(`2d`),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,`rgba(255,255,255,1)`),t.addColorStop(.18,`rgba(255,255,255,.9)`),t.addColorStop(.45,`rgba(255,255,255,.25)`),t.addColorStop(1,`rgba(255,255,255,0)`),e.fillStyle=t,e.fillRect(0,0,128,128),n}function Wi(){let s=document.createElement(`canvas`);s.width=s.height=64;let n=s.getContext(`2d`);return n.fillStyle=`#d9dee6`,n.strokeStyle=`#1b1f24`,n.lineWidth=2,n.beginPath(),n.moveTo(32,4),n.lineTo(36,22),n.lineTo(60,38),n.lineTo(60,42),n.lineTo(36,36),n.lineTo(35,50),n.lineTo(44,58),n.lineTo(44,61),n.lineTo(32,57),n.lineTo(20,61),n.lineTo(20,58),n.lineTo(29,50),n.lineTo(28,36),n.lineTo(4,42),n.lineTo(4,38),n.lineTo(28,22),n.closePath(),n.fill(),n.stroke(),s}function ji(){let s=document.createElement(`canvas`);s.width=s.height=64;let n=s.getContext(`2d`);return n.fillStyle=`rgba(77,208,225,.25)`,n.beginPath(),n.arc(32,32,30,0,7),n.fill(),n.fillStyle=`#1b1f24`,n.strokeStyle=`#4dd0e1`,n.lineWidth=3,n.beginPath(),n.arc(32,32,16,0,7),n.fill(),n.stroke(),n.fillStyle=`#4dd0e1`,n.font=`bold 20px system-ui`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`⚡`,32,33),s}function Hi(){let s=document.createElement(`canvas`);s.width=256,s.height=128;let n=s.getContext(`2d`),e=n.createRadialGradient(128,92,4,128,92,60);e.addColorStop(0,`rgba(170,255,190,.9)`),e.addColorStop(1,`rgba(170,255,190,0)`),n.fillStyle=e,n.fillRect(0,50,256,78);let t=n.createRadialGradient(118,42,4,128,56,46);t.addColorStop(0,`rgba(230,255,255,.95)`),t.addColorStop(.6,`rgba(120,220,235,.75)`),t.addColorStop(1,`rgba(40,110,140,.8)`),n.fillStyle=t,n.beginPath(),n.ellipse(128,62,44,36,0,Math.PI,0),n.fill();let i=n.createLinearGradient(0,56,0,92);i.addColorStop(0,`#e9edf2`),i.addColorStop(.45,`#9aa3ad`),i.addColorStop(1,`#4a5058`),n.fillStyle=i,n.beginPath(),n.ellipse(128,72,122,20,0,0,Math.PI*2),n.fill(),n.strokeStyle=`rgba(0,0,0,.35)`,n.lineWidth=2,n.stroke();for(let a=0;a<9;a++){let r=30+a*24.5,o=74+Math.sin(a/8*Math.PI)*6;n.fillStyle=[`#ffef6b`,`#7dffb0`,`#ff6bd5`][a%3],n.beginPath(),n.arc(r,o,5,0,Math.PI*2),n.fill()}return s}function qi(){let s=document.createElement(`canvas`);s.width=s.height=64;let n=s.getContext(`2d`),e=7,t=()=>(e=e*16807%2147483647)/2147483647;n.beginPath();for(let a=0;a<9;a++){let r=a/9*Math.PI*2+t()*.4,o=18+t()*12;n[a?`lineTo`:`moveTo`](32+o*Math.cos(r),32+o*Math.sin(r))}n.closePath();let i=n.createLinearGradient(10,10,54,54);return i.addColorStop(0,`#8d8378`),i.addColorStop(1,`#3b3530`),n.fillStyle=i,n.fill(),n.strokeStyle=`rgba(25,22,20,.9)`,n.lineWidth=2.5,n.stroke(),s}function $i(){let s=document.createElement(`canvas`);s.width=16,s.height=32;let n=s.getContext(`2d`);return n.fillStyle=`#f2f2f2`,n.strokeStyle=`#f2f2f2`,n.lineWidth=2.4,n.lineCap=`round`,n.beginPath(),n.arc(8,5,3.6,0,Math.PI*2),n.fill(),n.beginPath(),n.moveTo(8,9),n.lineTo(8,20),n.moveTo(8,12),n.lineTo(2,7),n.moveTo(8,12),n.lineTo(14,7),n.moveTo(8,20),n.lineTo(3,30),n.moveTo(8,20),n.lineTo(13,30),n.stroke(),s}var ai=s=>Math.min(.4*s,3e4);function ti(s){let n=$({},s);return n.crater=s.air?.8*s.Rfb*(1-R(1.5*s.Rfb,6*s.Rfb,s.hob)):2.5*s.crater,n.r20=s.r5,n.r5=Math.min(Xe,.8*s.r1),n.r1=Math.max(s.r1,1.1*n.r5),n}function ri(s){return s.crater>0||s.hob>=s.Rfb?0:Math.min(6,.01*s.Rfb)*(1-s.hob/s.Rfb)}function Xi(s,n,e){if(!(e>0))return 0;let t=n.crater;if(t<=0){let c=ri(n);return c?-c*e*(1-R(0,n.Rfb,s)):0}let i=s/t;if(i>2.5)return 0;let a=ai(t),r=R(5e3,15e3,t),o=i<1?-a*Math.min(1,(1-i*i)*I(1,1.6,r)):0,l=.08*a*Math.exp(-(((i-1)/.3)**2)),d=.03*a*R(.7,1,i)*(1-R(1,2.5,i)),u=r*.18*a*Math.exp(-((i/.12)**2));return(o+l+d+u)*e}function Yi(s){let n=0,e=0,t=0,i=0,a=0,r=0,o=0,l=0,d=0;for(let b of s)n++,e+=b.x,t+=b.y,i+=b.h,a+=b.x*b.x,r+=b.y*b.y,o+=b.x*b.y,l+=b.x*b.h,d+=b.y*b.h;let u=[[n,e,t],[e,a,o],[t,o,r]],c=[i,l,d],p=b=>b[0][0]*(b[1][1]*b[2][2]-b[1][2]*b[2][1])-b[0][1]*(b[1][0]*b[2][2]-b[1][2]*b[2][0])+b[0][2]*(b[1][0]*b[2][1]-b[1][1]*b[2][0]),v=p(u);return Math.abs(v)<1e-9?[i/Math.max(n,1),0,0]:[0,1,2].map(b=>p(u.map((S,k)=>S.map((m,x)=>x===b?c[k]:m)))/v)}function Qi(s){let n=s,e=null;for(let t=0;t<5&&n.length>=4;t++){e=Yi(n);let i=e,a=n.filter(r=>r.h<=i[0]+i[1]*r.x+i[2]*r.y+1.5);if(a.length<4||a.length===n.length)break;n=a}return e}function jt(s,n,e,t){let i=(a,r,o)=>{let l=new Float32Array(n*n);for(let d=0;d<n;d++)for(let u=0;u<n;u++){let c=t?t===Math.min?1/0:-1/0:0,p=0;for(let v=-e;v<=e;v++){let b=u+v*r,S=d+v*o;if(b<0||S<0||b>=n||S>=n)continue;let k=a[S*n+b];t?c=t(c,k):c+=k,p++}l[d*n+u]=t?c:c/p}return l};return i(i(s,1,0),0,1)}var ni=`
  float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
  float vn(vec2 p);
  // damage reaches further along some directions than others: lobed, not a compass circle
  float warpD(vec2 xy, float d, float R, float seed) {
    return d * (1.0 + 0.34 * (vn(xy / (0.22 * R + 1.0) + seed) - 0.5) + 0.14 * (vn(xy / (0.07 * R + 1.0) + seed * 1.7) - 0.5));
  }
  float vn(vec2 p) {
    vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + 1.0), f.x), f.y);
  }
  // vertical offset (m) of the original surface at blast-local xy; must match craterZ() in engine.ts (minus noise)
  float craterZ(vec2 xy, float R, float crv, float seed, float Rfb, float hob) {
    float d = length(xy);
    if (R <= 0.0) {
      if (hob >= Rfb || d > Rfb) return 0.0;
      return -min(6.0, 0.01 * Rfb) * (1.0 - hob / Rfb) * crv * (1.0 - smoothstep(0.0, Rfb, d));
    }
    float r = d / R * (1.0 + 0.16 * (vn(xy / (0.5 * R) + seed * 2.3) - 0.5)); // lobed rim
    if (r > 2.5) return 0.0;
    float Dp = min(0.4 * R, 30000.0), big = smoothstep(5000.0, 15000.0, R);
    float bowl = r < 1.0 ? -Dp * min(1.0, (1.0 - r * r) * mix(1.0, 1.6, big)) : 0.0;
    float rim = 0.08 * Dp * exp(-pow((r - 1.0) / 0.3, 2.0));
    float ej = 0.03 * Dp * smoothstep(0.7, 1.0, r) * (1.0 - smoothstep(1.0, 2.5, r));
    float peak = big * 0.18 * Dp * exp(-pow(r / 0.12, 2.0));
    // lumpy rim and floor: two octaves of noise in crater units, seeded per blast
    vec2 q = xy / R + seed;
    float n = (vn(q * 3.0) - 0.5) + 0.4 * (vn(q * 11.0) - 0.5);
    float lump = 0.12 * Dp * n * (1.0 - smoothstep(1.3, 2.5, r)) * smoothstep(0.0, 0.5, r + big);
    return (bowl + rim + ej + peak + lump) * crv;
  }
  // global damage map (equirectangular, ~20 km texels): r scorch, g cumulative stress (32 per unit), b crater depth (log)
  vec2 lonLat(vec3 pEC) { vec3 w = (czm_inverseView * vec4(pEC, 1.0)).xyz; return vec2(atan(w.y, w.x), asin(clamp(w.z / length(w), -1.0, 1.0))); }
  // cubic B-spline from 4 bilinear taps: a Tsar's scorch is ~1 texel wide, bilinear would draw it as a square
  vec4 dmgAt(vec2 ll) {
    vec2 sz = vec2(2048.0, 1024.0), uv = vec2(ll.x / 6.2831853 + 0.5, ll.y / 3.1415927 + 0.5) * sz - 0.5;
    vec2 i = floor(uv), f = uv - i, f2 = f * f, f3 = f2 * f;
    vec2 w0 = (1.0 - 3.0 * f + 3.0 * f2 - f3) / 6.0, w1 = (4.0 - 6.0 * f2 + 3.0 * f3) / 6.0, w2 = (1.0 + 3.0 * f + 3.0 * f2 - 3.0 * f3) / 6.0, w3 = f3 / 6.0;
    vec2 g0 = w0 + w1, g1 = w2 + w3, h0 = (i - 0.5 + w1 / g0) / sz, h1 = (i + 1.5 + w3 / g1) / sz;
    return g0.y * (g0.x * texture(u_map, vec2(h0.x, h0.y)) + g1.x * texture(u_map, vec2(h1.x, h0.y)))
         + g1.y * (g0.x * texture(u_map, vec2(h0.x, h1.y)) + g1.x * texture(u_map, vec2(h1.x, h1.y)));
  }
  // metres on a plane tangent-ish to the globe: good to ~1 m, plenty for >= 100 m crack cells and 20 km fissures
  vec2 globeXY(vec2 ll) { return vec2(ll.x * cos(ll.y), ll.y) * 6371000.0; }
  // ground sinks where stress > 6, km deep, carved by ridged noise into fissures (>= 20 km wavelength)
  float subsidence(float st, vec2 g) {
    if (st <= 6.0) return 0.0;
    // long wavelengths only: coarse and fine LOD tiles meet with few shared vertices, shorter ones open seams
    float r1 = 1.0 - abs(2.0 * vn(g / 30000.0) - 1.0), r2 = 1.0 - abs(2.0 * vn(g / 60000.0 + 7.7) - 1.0);
    float ridge = pow(max(r1, 0.8 * r2), 3.0);
    return 5000.0 * smoothstep(6.0, 8.0, st) * mix(0.3, 1.8, ridge);
  }
  // distance (cell units) to the nearest Voronoi cell border (F2-F1 style, exact border distance)
  // (loop bounds come from a uniform so the compiler cannot unroll 4 calls x 34 iterations into the shader)
  float vorEdge(vec2 x) {
    vec2 n = floor(x), f = fract(x), mr = vec2(0.0), mg = vec2(0.0);
    float md = 8.0;
    int k1 = int(u_one), k2 = 2 * k1;
    for (int j = -k1; j <= k1; j++) for (int i = -k1; i <= k1; i++) {
      vec2 g = vec2(float(i), float(j)), r = g + vec2(h21(n + g), h21(n + g + 19.19)) - f;
      float d = dot(r, r); if (d < md) { md = d; mr = r; mg = g; }
    }
    md = 8.0;
    for (int j = -k2; j <= k2; j++) for (int i = -k2; i <= k2; i++) {
      vec2 g = mg + vec2(float(i), float(j)), r = g + vec2(h21(n + g), h21(n + g + 19.19)) - f;
      if (dot(mr - r, mr - r) > 1e-5) md = min(md, dot(0.5 * (mr + r), normalize(r - mr)));
    }
    return md;
  }
  // a line of half-width w (m) at distance dist (m); thinner than a pixel (px m) it fades instead of shimmering
  float crackLine(float dist, float w, float px) { return w <= 0.0 ? 0.0 : (1.0 - smoothstep(w, w + px, dist)) * clamp(w / px, 0.0, 1.0); }
  // major fissures stay at least ~a pixel wide from far away (so they still read from 50 km), dimmed by coverage
  float fissure(float dist, float w, float px) { if (w <= 0.0) return 0.0; float W = max(w, 0.75 * px); return (1.0 - smoothstep(W, W + px, dist)) * clamp(2.5 * w / px, 0.0, 1.0); }
  // bare-earth height (m, relative to the blast origin) from the 4x4 atlas of 64x64 per-blast heightmaps;
  // float textures are not linearly filterable everywhere: NEAREST + manual bilinear
  float hmFetch(int k, ivec2 g) { g = clamp(g, ivec2(0), ivec2(63)); return texelFetch(u_hm, ivec2((k % 4) * 64, (k / 4) * 64) + g, 0).r; }
  float bareEarth(vec2 xy, float idx, float S) {
    vec2 g = clamp((xy / S * 0.5 + 0.5) * 63.0, 0.0, 63.0);
    vec2 f = fract(g); ivec2 i = ivec2(floor(g)); int k = int(idx);
    return mix(mix(hmFetch(k, i), hmFetch(k, i + ivec2(1, 0)), f.x), mix(hmFetch(k, i + ivec2(0, 1)), hmFetch(k, i + ivec2(1, 1)), f.x), f.y);
  }
`;var Zi=`
  void cfx(vec3 pEC, mat4 M, vec4 a, vec4 b, vec4 dd, vec4 e, inout vec4 best, inout vec3 bestEC, inout vec2 bestXY) {
    if (a.y <= 0.0 || e.x < 0.0) return;
    vec3 l = (M * vec4(pEC, 1.0)).xyz;
    float d = length(l.xy);
    if (d > a.z || d > e.y) return;
    float h = l.z + d * d / (2.0 * 6371000.0);
    float above = h - bareEarth(l.xy, e.x, e.y) - 3.0;
    if (dd.x < 0.0) return; // a hit on a wall: only its own bite, no column collapse // the estimate runs a few metres low: spare the streets
    if (above <= 0.0) return;
    float terrain = 1.0 - smoothstep(250.0, 400.0, above); // hundreds of metres "above ground" is a hill, not a tower
    float gz = bareEarth(l.xy, e.x, e.y);
    float s = 1.0 - smoothstep(a.y, a.z, warpD(l.xy, d, a.z, dd.w) + 2.5 * max(0.0, gz)); // lobed, shielded by rises
    // "blocks" are smooth ~35 m noise cells, not a hard hash: a building split between two cells would otherwise
    // keep one half standing and drag the other down into a stretched curtain
    vec2 q = l.xy / 35.0 + dd.w;
    float nb = vn(q), nb2 = vn(q + 17.3), nb3 = vn(q * 0.6 + 41.7);
    float Lt = max(60.0, 0.25 * a.y);
    // e.z: the front as far as collapse knows. Fades out 12-25 km from the camera: buildings are sub-pixel there,
    // and squashing coarse LOD tiles opens seams against their finer neighbours
    float prog = smoothstep(0.0, Lt, e.z - d - nb3 * Lt * 0.6) * terrain * (1.0 - smoothstep(12000.0, 25000.0, length(pEC)));
    if (prog <= 0.0) return;
    float Rfb = max((b.w - e.w) / 3.0, 1.0);
    float vap = e.w < Rfb ? 1.0 - smoothstep(0.5 * Rfb, 0.65 * Rfb, d) : 0.0; // vaporised: nothing left, no rubble
    float down = max(vap, smoothstep(-0.07, 0.07, s * 1.1 - 0.05 - nb));      // pancaked (s = 1 inside r20: all of it)
    float keep = mix(mix(1.0, 0.6, s * nb2), mix(0.06, 0.18, nb2), down) * (1.0 - vap);
    float w = (1.0 - keep) * prog;
    if (w <= best.x) return;
    float rub = (1.0 - vap) * vn(l.xy / 7.0 + dd.w) * min(0.15 * above, 4.0);
    float dz = (above * keep + rub * (1.0 - keep) - above) * prog;
    vec2 lean = normalize(l.xy + 0.001) * above * s * 0.12 * nb2 * prog * (1.0 - down); // away from the blast
    best = vec4(w, above, d < b.x ? 1.0 : 0.0, 0.0);
    bestEC = transpose(mat3(M)) * vec3(lean, dz);
    bestXY = l.xy;
  }
`;var ii=null;function Ki(s,n){ii=n;let e=Object.getPrototypeOf(s.root);if(e.__nukePad||typeof e.updateVisibility!=`function`||!Cesium.TileOrientedBoundingBox)return;e.__nukePad=!0;let t=e.updateVisibility;e.updateVisibility=function(i){return ii?.padTile(this),t.apply(this,arguments)}}function Ji(){let s=Cesium.ImageryPipelineStage;if(!s||typeof s._createImageryUniforms!=`function`)return!1;if(s.__nukeLive)return!0;s.__nukeLive=!0;let n=s._createImageryUniforms;return s._createImageryUniforms=function(e){let t=n.apply(this,arguments);return e.forEach((i,a)=>{let r=i.imageryLayer?.__liveAlpha;r&&t.imageryTextureAlpha&&Object.defineProperty(t.imageryTextureAlpha,a,{get:r,enumerable:!0,configurable:!0})}),t},!0}var Tt=class{viewer;scene;camera;cv;disposers=[];ev;tool;armed=!1;chain=!1;soundOn=!0;showRings=!0;labelsOn=!1;sunHour=14;blasts=[];blastId=0;slots=new Array(16).fill(null);bShader;puffs;puffPool=[];cols;particles=[];flyers=[];ducks=[];turrets=[];bombs=[];base=null;lineStart=null;rubber=null;mouseWorld=null;FLASH=0;WARM=0;day=1;tint=[1,1,1];stats={count:0,area:0,cloud:0};shake={amp:0,t:0,v:0,h:0};keys=/* @__PURE__ */ new Set;drag=null;tileset=null;labGlobe=null;labTiles=null;puffTex=Ui();glowTex=Gi();jetTex=Wi();turretTex=ji();ufoTex=Hi();personTex=$i();chunkTex=qi();chunks=[];actx=null;master=null;noiseBuf=null;lastSmallSound=0;geocoder;constructor(n,e,t){this.ev=t,this.tool=e;let i=this.viewer=new Cesium.Viewer(n,{baseLayer:!1,geocoder:!1,animation:!1,timeline:!1,baseLayerPicker:!1,homeButton:!1,sceneModePicker:!1,navigationHelpButton:!1,fullscreenButton:!1,infoBox:!1,selectionIndicator:!1,msaaSamples:2,requestRenderMode:!0,maximumRenderTimeChange:1/0});i.useBrowserRecommendedResolution=!0;let a=this.scene=i.scene,r=this.camera=i.camera;this.cv=a.canvas,i.clock.shouldAnimate=!1,a.atmosphere.dynamicLighting=Cesium.DynamicAtmosphereLightingType.SUNLIGHT,i.imageryLayers.addImageryProvider(new Cesium.UrlTemplateImageryProvider({url:`https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}`,maximumLevel:19,credit:`Esri`})),a.globe.show=!0,r.setView({destination:Cesium.Cartesian3.fromDegrees(9.175,45.43,2500),orientation:{heading:Cesium.Math.toRadians(20),pitch:Cesium.Math.toRadians(-35),roll:0}}),this.geocoder=new Cesium.IonGeocoderService({scene:a,geocodeProviderType:Cesium.IonGeocodeProviderType.GOOGLE}),this.labLive=Ji(),this.ensureLabels(),this.setupShader(),this.setupPost(),this.puffs=a.primitives.add(new Cesium.BillboardCollection({blendOption:Cesium.BlendOption.TRANSLUCENT}));let o=()=>a.primitives.add(new Cesium.BillboardCollection({blendOption:Cesium.BlendOption.TRANSLUCENT}));this.cols={puff:o(),glow:o(),jet:o(),misc:o(),ufo:o(),person:o(),chunk:o()},this.setupControls(),this.loadGoogle();let l=performance.now(),d=()=>{let p=performance.now(),v=Math.min(.1,(p-l)/1e3);l=p,this.frame(v)};a.preRender.addEventListener(d),this.disposers.push(()=>a.preRender.removeEventListener(d));let u=0,c=()=>{this.needsFrames()?a.requestRender():l=performance.now(),u=requestAnimationFrame(c)};u=requestAnimationFrame(c),this.disposers.push(()=>cancelAnimationFrame(u))}needsFrames(){return this.blasts.some(n=>n.t<n.E.Trise*3||!n.heard)||this.flyers.length>0||this.particles.length>0||this.chunks.length>0||this.bombs.length>0||this.planes.length>0||this.turrets.length>0||this.ufos.length>0||this.ducks.some(n=>!n.rest)||this.shake.amp>0||this.keys.size>0||this.recentering||this.zoomPending!==0||this.FLASH>.001||this.jobs.length>0||this.atlasDirty||this.mapDirty||this.gusts.length>0||this.blasts.some(n=>n.heat>0)||this.armed&&this.hoverRest&&!this.hoverRest.done}poke(){this.scene?.requestRender()}dispose(){this.disposers.forEach(n=>n()),this.actx&&this.actx.close(),this.viewer.destroy()}async loadGoogle(n=1){try{let e=await Cesium.createGooglePhotorealistic3DTileset({onlyUsingWithGoogleGeocoder:!0});if(this.viewer.isDestroyed())return;e.enableCollision=!0,e.customShader=this.bShader,Ki(e,this),this.scene.primitives.add(e),this.scene.globe.show=!1,this.tileset=e,this.setLabels(this.labelsOn),this.ev.status(``)}catch(e){if(this.viewer.isDestroyed())return;this.scene.globe.show=!0;let t=String(e.statusCode||e.message||e).includes(`429`);if(this.ev.status(t?`Google 3D is busy (shared trial token), retrying\u2026 (${n})`:`Google 3D unavailable: a Cesium ion token is needed.`),t&&n<20){let i=setTimeout(()=>this.loadGoogle(n+1),8e3);this.disposers.push(()=>clearTimeout(i))}}}padGen=1;padOf(n){let e=n.X,t=e.crater,i=Math.min(.4*t,3e4),a=ri(e),r=t>0?{reach:2.5*t,down:i*1.1,side:.15*i+5}:{reach:e.Rfb,down:a,side:0};return n.hm&&(r.reach=Math.max(r.reach,e.r5),r.side=Math.max(r.side,40)),n.bite&&(r.side=Math.max(r.side,1.2*i)),r}padTile(n){if(n.__pg===this.padGen)return;n.__pg=this.padGen;let e=Cesium.Cartesian3,t=Cesium.Matrix3;for(let i of[`_boundingVolume`,`_contentBoundingVolume`]){let a=n[i];if(!(a instanceof Cesium.TileOrientedBoundingBox))continue;let r=a.__o||(a.__o=Cesium.OrientedBoundingBox.clone(a.boundingVolume)),o=new e,l=r.halfAxes,d=Cesium.BoundingSphere.fromOrientedBoundingBox(r),u=0,c=!1;for(let v of this.blasts){let b=this.padOf(v);!b.down&&!b.side||e.distance(d.center,v.groundPos)>b.reach+d.radius||(e.add(o,e.multiplyByScalar(v.up,-b.down,new e),o),u=Math.max(u,b.side),c=!0)}if(this.maxStress>6){let v=Cesium.Cartographic.fromCartesian(d.center),b=v&&Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(d.center,new e),S=!v||d.radius>1e6?this.maxStress:this.stressAt(v);if(v&&d.radius>15e3&&d.radius<=1e6){let k=d.radius/6371e3;for(let[m,x]of[[k,0],[-k,0],[0,k],[0,-k]])S=Math.max(S,this.stressAt(new Cesium.Cartographic(v.longitude+x/Math.max(Math.cos(v.latitude),.05),v.latitude+m)))}S>6&&(v&&b?e.add(o,e.multiplyByScalar(b,-5e3*R(6,8,S)*1.8,new e),o):u=Math.max(u,9e3),c=!0)}if(!c&&!a.__padded)continue;let p=new t;for(let v=0;v<3;v++){let b=t.getColumn(l,v,new e),S=e.magnitude(b)||1,k=e.divideByScalar(b,S,new e);t.setColumn(p,v,e.multiplyByScalar(k,S+Math.abs(e.dot(o,k))/2+u,new e),p)}a.update(e.add(r.center,e.multiplyByScalar(o,.5,new e),new e),p),a.__padded=c}}deformAt(n){let e=0;for(let t of this.blasts){let i=Cesium.Matrix4.multiplyByPoint(t.invEnu,n,this._sc||(this._sc=new Cesium.Cartesian3));t.bite||(e+=Xi(Math.hypot(i.x,i.y),t.X,t.crv))}return this.maxStress>6&&(e-=this.subsAt(Cesium.Cartographic.fromCartesian(n))),Math.max(e,-6e4)}surfaceHeight(n){let e=this.sampleH(n);if(e===void 0)return;let t=Cesium.Cartographic.toCartesian(new Cesium.Cartographic(n.longitude,n.latitude,e));for(let i of this.blasts){if(!i.hm)continue;let a=i.X,r=Cesium.Matrix4.multiplyByPoint(i.invEnu,t,new Cesium.Cartesian3),o=Math.hypot(r.x,r.y);if(o>a.r5||o>i.hmS)continue;let l=this.hmAt(i,r.x,r.y)+i.h0+3,d=e-l;if(d<=0||d>400)continue;let u=R(0,Math.max(60,.25*a.r20),i.cshock-o);e=l+d*(1-.88*(1-R(a.r20,a.r5,o))*u)}return e+this.deformAt(t)}MW=2048;MH=1024;mStress=/* @__PURE__ */ new Float32Array(2097152);mScorch=/* @__PURE__ */ new Float32Array(2097152);mCrater=/* @__PURE__ */ new Float32Array(2097152);mBytes=/* @__PURE__ */ new Uint8Array(8388608);mapDirty=!1;lastMap=0;maxStress=0;mapUniform(){let n=Cesium.TextureMinificationFilter.LINEAR,e=Cesium.TextureMagnificationFilter.LINEAR;return new Cesium.TextureUniform({typedArray:this.mBytes,width:this.MW,height:this.MH,pixelFormat:Cesium.PixelFormat.RGBA,pixelDatatype:Cesium.PixelDatatype.UNSIGNED_BYTE,repeat:!0,minificationFilter:n,magnificationFilter:e})}splat(n){let e=n.X,t=this.MW,i=this.MH,a=6371e3,r=Cesium.Cartographic.fromCartesian(n.origin),o=r.latitude,l=r.longitude,d=e.crater,u=ai(d),c=e.r1/a,p=Math.min(Math.PI,c/Math.max(Math.cos(o),.02)),v=Math.max(0,Math.floor(((o-c)/Math.PI+.5)*i)),b=Math.min(i-1,Math.floor(((o+c)/Math.PI+.5)*i)),S=Math.floor(((l-p)/(2*Math.PI)+.5)*t),k=Math.floor(((l+p)/(2*Math.PI)+.5)*t),m=2*Math.PI*a/t>.5*e.r20?4:1,x=Math.sin(o),_=Math.cos(o);for(let y=v;y<=b;y++)for(let A=S;A<=Math.min(k,S+t-1);A++){let E=(A%t+t)%t,f=0,V=0,D=0;for(let j=0;j<m;j++)for(let Q=0;Q<m;Q++){let be=((y+(j+.5)/m)/i-.5)*Math.PI,Ae=((A+(Q+.5)/m)/t-.5)*2*Math.PI,ue=a*Math.acos(Math.min(1,x*Math.sin(be)+_*Math.cos(be)*Math.cos(Ae-l)));f+=1-R(e.r20,e.r1,ue),V+=Math.max(1-R(.7*e.r5,e.r5,ue),.5*(1-R(.85*e.rth,e.rth,ue))),d>0&&ue<d&&(D+=u*(1-(ue/d)**2))}let F=m*m,B=y*t+E;this.mStress[B]+=f/F,this.mScorch[B]=Math.max(this.mScorch[B],V/F),this.mCrater[B]=Math.max(this.mCrater[B],D/F),this.maxStress=Math.max(this.maxStress,this.mStress[B]);let Z=B*4,ce=this.mBytes;ce[Z]=Math.min(255,Math.round(this.mScorch[B]*255)),ce[Z+1]=Math.min(255,Math.round(this.mStress[B]*32)),ce[Z+2]=this.mCrater[B]>0?Math.min(255,Math.round(Math.log2(1+this.mCrater[B])/Math.log2(60001)*255)):0,ce[Z+3]=255}this.mapDirty=!0,this.padGen++,this.bShader.setUniform(`u_mapOn`,1)}stressAt(n){let e=this.MW,t=this.MH,i=(n.longitude/(2*Math.PI)+.5)*e-.5,a=(n.latitude/Math.PI+.5)*t-.5,r=Math.floor(i),o=Math.max(0,Math.min(t-2,Math.floor(a))),l=i-r,d=Math.max(0,Math.min(1,a-o)),u=(c,p)=>this.mBytes[(p*e+(c%e+e)%e)*4+1]/32;return I(I(u(r,o),u(r+1,o),l),I(u(r,o+1),u(r+1,o+1),l),d)}subsAt(n){if(this.maxStress<=6||!n)return 0;let e=this.stressAt(n);return e<=6?0:5e3*R(6,8,e)*.75}atlas=/* @__PURE__ */ new Float32Array(262144);atlasDirty=!1;lastAtlas=0;terrainP=null;jobs=[];atlasUniform(){let n=Cesium.TextureMinificationFilter.NEAREST,e=Cesium.TextureMagnificationFilter.NEAREST;return new Cesium.TextureUniform({typedArray:this.atlas,width:256,height:256,pixelFormat:Cesium.PixelFormat.RGBA,pixelDatatype:Cesium.PixelDatatype.FLOAT,minificationFilter:n,magnificationFilter:e})}runJobs(){let n=performance.now();if(this.jobs.length){let e=this.hideForSampling();try{for(;this.jobs.length&&performance.now()-n<8;){let t=this.jobs[0]();if(t===`wait`)break;t&&this.jobs.shift()}}finally{e()}}this.mapDirty&&performance.now()-this.lastMap>250&&(this.mapDirty=!1,this.lastMap=performance.now(),this.bShader.setUniform(`u_map`,this.mapUniform())),this.atlasDirty&&performance.now()-this.lastAtlas>250&&(this.atlasDirty=!1,this.lastAtlas=performance.now(),this.bShader.setUniform(`u_hm`,this.atlasUniform()))}sampleH(n){let e=this.hideForSampling();try{return this.scene.sampleHeight(n,this.viewer.entities.values)}catch{return}finally{e()}}hiding=!1;hideForSampling(){if(this.hiding)return()=>{};let n=this.scene.primitives,e=[];for(let t=0;t<n.length;t++){let i=n.get(t);i!==this.tileset&&i.show&&(i.show=!1,e.push(i))}return this.hiding=!0,()=>{e.forEach(t=>t.show=!0),this.hiding=!1}}preps=[];hmSize(n){return Math.min(3e4,Math.max(300,1.1*ti(n).r5))}prepHeightmap(n,e){if(!this.tileset)return null;let t=Cesium.Cartesian3,i=64,a=this.preps.find(k=>!k.dead&&k.S>=e*.9&&k.S<=e*2&&t.distance(k.origin,n)<.03*e);if(a)return a;let r=Cesium.Transforms.eastNorthUpToFixedFrame(n),o=Cesium.Cartographic.fromCartesian(n),l=o.height,d={origin:t.clone(n),S:e,h0:l,ready:!1,waiters:[],dead:!1},u=(k,m)=>Cesium.Cartographic.fromCartesian(Cesium.Matrix4.multiplyByPoint(r,new t(k,m,0),new t)),c=k=>new Promise(m=>{let x=k.map(()=>null),_=0,y=0;this.jobs.push(()=>{if(d.dead)return m(x),!0;if(!this.tileset.tilesLoaded&&(y||=performance.now())&&performance.now()-y<3e3)return`wait`;let[A,E]=k[_],f=this.sampleH(u(A,E));return f!==void 0&&(x[_]={x:A,y:E,h:f-l}),++_>=k.length?(m(x),!0):!1})}),p=[];for(let k=0;k<i;k++)for(let m=0;m<i;m++)p.push(u(-e+2*e*m/63,-e+2*e*k/63));let v=Math.max(0,Math.min(13,Math.round(Math.log2(20037508*Math.max(.2,Math.cos(o.latitude))/(64*(2*e/63))))));d.dtmP=(this.terrainP||=Cesium.createWorldTerrainAsync().catch(()=>null)).then(k=>k&&!d.dead?Cesium.sampleTerrain(k,v,p):null).then(k=>{if(!k||!k.every(x=>Number.isFinite(x.height)))return null;let m=Math.max(1,Math.min(6,Math.round(250/(2*e/63))));return jt(jt(jt(Float32Array.from(k,x=>x.height-l),i,m,Math.min),i,m,Math.max),i,Math.max(1,m>>1),null)}).catch(()=>null);let b=(k,m,x)=>{let _=Math.max(0,Math.min(62.999,(m/e*.5+.5)*63)),y=Math.max(0,Math.min(62.999,(x/e*.5+.5)*63)),A=Math.floor(_),E=Math.floor(y),f=_-A,V=y-E,D=(F,B)=>k[B*i+F];return I(I(D(A,E),D(A+1,E),f),I(D(A,E+1),D(A+1,E+1),f),V)},S=this.preps.find(k=>!k.dead&&k.calP&&k.calOk!==!1&&t.distance(k.origin,n)<Math.max(5e3,2*e));if(S)d.calP=S.calP;else{let k=[];for(let m=0;m<12;m++){let x=.7*e*Math.sqrt((m+.5)/12),_=m*2.39996;for(let y=0;y<4;y++){let A=Math.random()*6.283,E=30*Math.sqrt(Math.random());k.push([x*Math.cos(_)+E*Math.cos(A),x*Math.sin(_)+E*Math.sin(A)])}}d.calP=Promise.all([d.dtmP,c(k)]).then(([m,x])=>{if(!m)return null;let _=[];for(let V=0;V<12;V++){let D=x.slice(V*4,V*4+4).filter(Boolean);if(D.length){let F=D.reduce((B,Z)=>Z.h<B.h?Z:B);_.push(F.h-b(m,F.x,F.y))}}if(_.sort((V,D)=>V-D),_.length<3)return null;let y=_.length>=4?_[Math.floor(_.length*.75)]-_[Math.floor(_.length*.25)]:0,A=_[_.length>>1],E=x.filter(Boolean);if(Math.abs(A)>150)return null;let f=E.length?E.filter(V=>V.h-b(m,V.x,V.y)-A>6).length/E.length:.3;return{off:A,margin:Math.min(12,.75*y),res:_,urban:f}})}for(Promise.all([d.dtmP,d.calP]).then(async([k,m])=>{if(d.calOk=!!m,d.dead)return;let x=/* @__PURE__ */ new Float32Array(4096);if(k){let _=m||{off:0,margin:8};for(let y=0;y<4096;y++)x[y]=k[y]+_.off+_.margin;d.src=m?`terrain`:`terrain-uncal`,d.res=_.res,d.margin=_.margin,d.urban=_.urban??.3}else{let _=[];for(let A=0;A<7;A++)for(let E=0;E<7;E++)_.push([e*.85*(E/3-1),e*.85*(A/3-1)]);let y=Qi((await c(_)).filter(Boolean));for(let A=0;A<i;A++)for(let E=0;E<i;E++){let f=-e+2*e*E/63,V=-e+2*e*A/63;x[A*i+E]=y?y[0]+y[1]*f+y[2]*V:0}d.src=y?`plane`:`flat`}d.hm=x,d.ready=!0,d.waiters.forEach(_=>!_.dead&&this.applyPrep(_,d)),d.waiters=[]}),this.preps.push(d);this.preps.filter(k=>k.ready).length>4;)this.preps.splice(this.preps.findIndex(k=>k.ready),1);return d}prepFor(n,e){!this.tileset||!n||!(e.W>0)||![`nuke`,`asteroid`,`rod`,`icbm`].includes(e.kind)||this.prepHeightmap(n,this.hmSize(Ye(e.W,e.air,e.hob)))}startHeightmap(n){if(!this.tileset)return;n.hmS=this.hmSize(n.E),n.hm=null;let e=this.prepHeightmap(n.origin,n.hmS);e&&(n.hmS=e.S,n.prep=e,e.ready?this.applyPrep(n,e):e.waiters.push(n))}applyPrep(n,e){let t=Cesium.Cartographic.fromCartesian(n.origin).height,i=e.h0-t;n.hm=i?e.hm.map(r=>r+i):e.hm,n.h0=t,n.hmS=e.S;let a=n.hm[2080]-(e.margin||0);if(Math.abs(a)>150){let r=Cesium.Cartesian3,o=r.multiplyByScalar(n.up,a,new r);r.add(n.origin,o,n.origin),r.add(n.groundPos,o,n.groundPos),n.enu=Cesium.Transforms.eastNorthUpToFixedFrame(n.groundPos),n.enuO=null,n.invEnu=Cesium.Matrix4.inverseTransformation(Cesium.Transforms.eastNorthUpToFixedFrame(n.origin),new Cesium.Matrix4),n.hm=n.hm.map(l=>l-a),n.h0+=a,n.reanchored=a}n.hmSrc=e.src,n.hmRes=e.res,n.hmMargin=e.margin,n.urban=e.urban??.3,this.padGen++,this.writeAtlas(n)}writeAtlas(n){if(!n.hm||n.slot<0)return;let e=n.slot%4,t=Math.floor(n.slot/4);for(let i=0;i<64;i++)for(let a=0;a<64;a++)this.atlas[((t*64+i)*256+e*64+a)*4]=n.hm[i*64+a];this.atlasDirty=!0,this.poke()}hmAt(n,e,t){let a=n.hmS,r=Math.max(0,Math.min(62.999,(e/a*.5+.5)*63)),o=Math.max(0,Math.min(62.999,(t/a*.5+.5)*63)),l=Math.floor(r),d=Math.floor(o),u=r-l,c=o-d,p=(v,b)=>n.hm[b*64+v];return I(I(p(l,d),p(l+1,d),u),I(p(l,d+1),p(l+1,d+1),u),c)}MAX=16;setupShader(){let n=Cesium.UniformType,e={},t=``;for(let[i,a,r]of[[`sM`,`mat4`,`u_m`],[`sA`,`vec4`,`u_a`],[`sB`,`vec4`,`u_b`],[`sD`,`vec4`,`u_d`],[`sE`,`vec4`,`u_e`]]){t+=`${a} ${i}(int i) {`;for(let o=0;o<this.MAX-1;o++)t+=` if (i == ${o}) return ${r}${o};`;t+=` return ${r}${this.MAX-1}; }
`}for(let i=0;i<this.MAX;i++)e[`u_m`+i]={type:n.MAT4,value:new Cesium.Matrix4},e[`u_a`+i]={type:n.VEC4,value:new Cesium.Cartesian4},e[`u_b`+i]={type:n.VEC4,value:new Cesium.Cartesian4(0,0,0,1)},e[`u_d`+i]={type:n.VEC4,value:new Cesium.Cartesian4},e[`u_e`+i]={type:n.VEC4,value:new Cesium.Cartesian4};e.u_n={type:n.FLOAT,value:0},e.u_one={type:n.FLOAT,value:1},e.u_mapOn={type:n.FLOAT,value:0},e.u_hm={type:n.SAMPLER_2D,value:this.atlasUniform()},e.u_map={type:n.SAMPLER_2D,value:this.mapUniform()},e.u_rings={type:n.FLOAT,value:this.showRings?1:0},this.bShader=new Cesium.CustomShader({uniforms:e,varyings:{v_col:Cesium.VaryingType.VEC4,v_rxy:Cesium.VaryingType.VEC2},vertexShaderText:t+ni+Zi+`
      // displacement of one blast, in eye coordinates (summed over blasts, then taken back to model space)
      vec3 vfx(vec3 pEC, mat4 M, vec4 a, vec4 b, vec4 dd, vec4 e) {
        if (a.y <= 0.0 || dd.y <= 0.0) return vec3(0.0);
        vec3 l = (M * vec4(pEC, 1.0)).xyz;
        float R = abs(dd.x);
        float z = craterZ(l.xy, R, dd.y, dd.w, max((b.w - e.w) / 3.0, 1.0), e.w);
        // dd.x < 0: the frame's z is the hit surface's normal (a wall): bite only what is near it, not the
        // whole column behind (the far facade, other floors)
        if (dd.x < 0.0) z *= 1.0 - smoothstep(0.5 * R, 1.1 * R, abs(l.z + 0.3 * R));
        return z == 0.0 ? vec3(0.0) : transpose(mat3(M)) * vec3(0.0, 0.0, z);
      }
      void vertexMain(VertexInput vsInput, inout czm_modelVertexOutput vsOutput) {
        vec3 pEC = (czm_modelView * vec4(vsOutput.positionMC, 1.0)).xyz;
        vec3 dEC = vec3(0.0);
        vec4 best = vec4(0.0); vec3 bestEC = vec3(0.0); vec2 bestXY = vec2(0.0);
        int n = int(u_n);
        for (int i = 0; i < n; i++) {
          mat4 M = sM(i); vec4 a = sA(i), b = sB(i), dd = sD(i), e = sE(i);
          dEC += vfx(pEC, M, a, b, dd, e);
          cfx(pEC, M, a, b, dd, e, best, bestEC, bestXY);
        }
        // overlapping craters add up; never deeper than ~60 km
        float sub = 0.0;
        if (u_mapOn > 0.0) {
          vec2 ll = lonLat(pEC);
          sub = subsidence(dmgAt(ll).g * 255.0 / 32.0, globeXY(ll));
          dEC -= normalize(pEC - czm_view[3].xyz) * sub; // czm_view[3]: the Earth's centre in eye coordinates
        }
        float L = length(dEC);
        if (L > 60000.0) dEC *= 60000.0 / L;
        v_col = vec4(best.xyz, sub); v_rxy = bestXY;
        vsOutput.positionMC += mat3(czm_inverseModelView) * (dEC + bestEC);
      }`,fragmentShaderText:t+ni+`
      void fx(vec3 pEC, vec3 nEC, mat4 M, vec4 a, vec4 b, vec4 dd, vec4 e, vec3 tint, inout czm_modelMaterial m,
              inout vec4 ck, inout vec4 ck2, inout vec2 ckXY, inout vec3 ckUp) {
        if (a.y <= 0.0) return;
        vec3 l = (M * vec4(pEC, 1.0)).xyz;
        // dd.x < 0 (a wall bite): the frame's z is the wall's normal, NOT the vertical. length(l.xy) would ignore the
        // distance along that normal and paint an endless strip of scorch and cracks across the ground behind the
        // wall: there everything is measured in 3D, a sphere around the hit
        float d = dd.x < 0.0 ? length(l) : length(l.xy), maxR = a.w * 1.15;
        if (d > maxR * 1.05) return;
        ck2.z = max(ck2.z, 1.0 - smoothstep(0.9 * a.w, 1.1 * a.w, d)); // this slot draws its own scar out to r1
        float d0 = d;
        d = warpD(l.xy, d, a.z, dd.w);
        // thermal shadows: what faces away from the fireball is not scorched (the Hiroshima shadows)
        float Rfb0 = max((b.w - e.w) / 3.0, 1.0);
        vec3 nL = normalize(mat3(M) * nEC), toF = normalize(vec3(0.0, 0.0, e.w + 0.3 * Rfb0) - l);
        float lit = mix(0.2, 1.0, smoothstep(-0.05, 0.3, dot(nL, toF)));
        // blast darkening behind the front (as before)
        float lim = min(a.x, a.z);
        float k = (1.0 - smoothstep(lim * 0.85, lim, d)) * mix(0.55, 0.9, 1.0 - smoothstep(a.y * 0.7, a.y * 1.2, d));
        m.diffuse = mix(m.diffuse, vec3(0.1, 0.08, 0.065) * tint, k);
        // the old ground decal, now on the tiles themselves (a classification volume cannot reach a crater floor)
        float Rfb = max((b.w - e.w) / 3.0, 1.0), burn = b.y;
        float scorch = lit * burn * (0.45 * (1.0 - smoothstep(Rfb * 0.8, Rfb * 3.0, d)) + 0.2 * (1.0 - smoothstep(b.x * 0.85, b.x, d)));
        m.diffuse = mix(m.diffuse, vec3(0.07, 0.05, 0.035) * tint, clamp(scorch, 0.0, 0.95));
        float R = abs(dd.x);
        if (R > 0.0 && dd.y > 0.0 && d0 < R * 2.5) {
          float r = d0 / R * (1.0 + 0.16 * (vn(l.xy / (0.5 * R) + dd.w * 2.3) - 0.5)), crv = dd.y;
          vec2 q = l.xy / R + dd.w;
          float n = vn(q * 3.0), n2 = vn(q * 18.0);
          float ej = crv * 0.45 * smoothstep(0.95, 1.1, r) * (1.0 - smoothstep(1.2, 2.5, r + 0.3 * (n - 0.5)));
          m.diffuse = mix(m.diffuse, vec3(0.17, 0.145, 0.115) * tint * (0.75 + 0.5 * n2), ej);
          float rim = crv * smoothstep(0.8, 1.0, r) * (1.0 - smoothstep(1.0, 1.35, r));
          m.diffuse = mix(m.diffuse, vec3(0.24, 0.2, 0.155) * tint * (0.8 + 0.4 * n), rim * 0.7);
          // the bowl: dark vitrified glass with a faint sheen, glowing while hot
          float bowl = crv * (1.0 - smoothstep(0.85, 1.0, r));
          ck2.w = max(ck2.w, max(bowl, rim)); // the crater wins over rubble tint (drawn after this loop)
          vec3 glass = mix(vec3(0.022, 0.02, 0.024), vec3(0.07, 0.065, 0.07), n2 * n2) * tint;
          m.diffuse = mix(m.diffuse, glass, bowl * 0.95);
          float heat = dd.z * bowl * (1.0 - smoothstep(0.3, 0.95, r));
          m.diffuse += vec3(1.0, 0.36, 0.08) * heat * (0.35 + 0.9 * smoothstep(0.45, 0.8, vn(q * 7.0)));
        }
        // shock ring travelling outward (ring toggle)
        float sh = a.x / maxR;
        if (u_rings > 0.0 && sh > 0.001) {
          float rr = d / maxR;
          float ring = smoothstep(sh - 0.035, sh, rr) * (1.0 - smoothstep(sh, sh + 0.006, rr)) * (1.0 - smoothstep(0.75, 1.0, sh));
          m.diffuse = mix(m.diffuse, vec3(1.0, 0.8, 0.55), ring * 0.5);
          m.diffuse += vec3(1.0, 0.7, 0.4) * ring * 0.25;
        }
        m.diffuse += vec3(1.0, 0.55, 0.2) * b.z * lit / (1.0 + pow(d / b.w, 2.0));
        // ground cracks: strongest from the crater rim out to r20, gone by r5; ground bursts far more than air bursts.
        // Only the strongest blast's field is kept (its precise local frame also carries the shared crack web).
        float gf = R > 0.0 ? 1.0 : 0.35 * (1.0 - smoothstep(Rfb, 4.0 * Rfb, e.w));
        float ci = gf * (1.0 - smoothstep(a.y, a.z, d)) * smoothstep(d, d + 0.1 * a.y + 1.0, a.x);
        if (dd.x < 0.0) ci = 0.0; // radial / concentric ground cracks make no sense in a wall's frame
        if (ci > ck.x) {
          float ang = atan(l.y, l.x) / 6.2832 + 0.5, wl = vn(l.xy / (0.15 * a.y + 1.0) + dd.w);
          // radial cracks: hashed angular sectors (domain-warped), each running out to its own length
          float ns = floor(10.0 + 14.0 * h21(vec2(dd.w, 3.7))), sec = ang * ns + 0.35 * (wl - 0.5);
          float rLen = mix(0.45, 1.0, h21(vec2(floor(sec + 0.5), dd.w))) * a.y, r0 = R > 0.0 ? 0.9 * R : 0.15 * a.y;
          float wRad = clamp(0.02 * max(R, 0.1 * a.y), 0.4, 40.0) * (1.0 - smoothstep(0.6 * rLen, rLen, d)) * step(r0, d);
          // concentric arcs at multiples of the crater radius (or of r20 for air bursts)
          float sp = R > 0.0 ? 0.55 * R : 0.18 * a.y, rq = (d - r0) / sp + 0.4 * (wl - 0.5);
          float wCon = 0.7 * clamp(0.02 * max(R, 0.1 * a.y), 0.4, 40.0) * step(0.5, vn(vec2(ang * 9.0, floor(rq + 0.5)) + dd.w)) * step(r0, d) * (1.0 - smoothstep(0.5 * a.y, a.y, d));
          ck = vec4(ci, dd.z, wRad, wCon);
          ck2 = vec4(abs(fract(sec + 0.5) - 0.5) / ns * 6.2832 * d, abs(fract(rq + 0.5) - 0.5) * sp, ck2.z, ck2.w);
          ckXY = l.xy; ckUp = transpose(mat3(M)) * vec3(0.0, 0.0, 1.0);
        }
      }
      // NB: Google tiles are unlit, and the unlit path ignores material.emissive: glows are added to diffuse
      void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {
        vec3 p = fsInput.attributes.positionWC, pEC = fsInput.attributes.positionEC;
        // per-pixel day/night: the sun lights half the globe, with a soft terminator and a warm golden band
        float sd = dot(normalize(p), czm_sunDirectionWC);
        float day = smoothstep(-0.10, 0.12, sd);
        float golden = day * (1.0 - smoothstep(0.04, 0.38, sd));
        vec3 tint = mix(vec3(0.09, 0.12, 0.21), vec3(1.0), day) * mix(vec3(1.0), vec3(1.14, 0.86, 0.66), golden);
        material.diffuse *= tint;
        // derivatives up here, in uniform control flow: metres per pixel and the surface normal (tiles have none)
        vec3 dpx = dFdx(pEC), dpy = dFdy(pEC);
        float px = max(max(length(dpx), length(dpy)), 1e-3);
        vec3 nEC = normalize(cross(dpx, dpy));
        if (dot(nEC, -pEC) < 0.0) nEC = -nEC; // what we see faces us: the outward normal
        vec4 ck = vec4(0.0), ck2 = vec4(0.0); vec2 ckXY = vec2(0.0); vec3 ckUp = vec3(0.0, 0.0, 1.0);
        int n = int(u_n);
        for (int i = 0; i < n; i++) fx(pEC, nEC, sM(i), sA(i), sB(i), sD(i), sE(i), tint, material, ck, ck2, ckXY, ckUp);
        // collapsed buildings: the stretched photo turns into rubble (burnt in the fire zone); soot on standing walls
        float col = v_col.x, abv = v_col.y, fire = v_col.z;
        if (col > 0.02) {
          float r = vn(v_rxy / 2.5) * 0.6 + vn(v_rxy / 0.7) * 0.4;
          vec3 rub = mix(vec3(0.34, 0.31, 0.28), vec3(0.17, 0.15, 0.13), r) * mix(1.0, 0.5, fire);
          material.diffuse = mix(material.diffuse, rub * tint, smoothstep(0.25, 0.7, col) * smoothstep(0.5, 2.5, abv) * 0.9 * (1.0 - smoothstep(4.0, 20.0, px)) * (1.0 - ck2.w));
        }
        material.diffuse *= 1.0 - 0.45 * fire * smoothstep(3.0, 10.0, abv) * (1.0 - smoothstep(0.1, 0.4, col));
        // the global damage map: old scars no slot draws (weighted by 1 - slot coverage), and cumulative stress
        vec2 ll = vec2(0.0), gxy = vec2(0.0); vec4 dm = vec4(0.0);
        if (u_mapOn > 0.0) { ll = lonLat(pEC); dm = dmgAt(ll); gxy = globeXY(ll); }
        float far = 1.0 - ck2.z;
        vec3 upEC = normalize(pEC - czm_view[3].xyz);
        float lvl = smoothstep(0.55, 0.85, abs(dot(nEC, upEC)));
        material.diffuse = mix(material.diffuse, vec3(0.07, 0.055, 0.04) * tint, 0.85 * dm.r * far);
        float cdep = exp2(dm.b * log2(60001.0)) - 1.0;
        material.diffuse = mix(material.diffuse, vec3(0.03, 0.028, 0.03) * tint, smoothstep(5.0, 300.0, cdep) * far);
        float st = dm.g * 255.0 / 32.0;
        if (st > 2.0) { // > 2: cracks appear; > 4: they widen and glow, for good
          float I = smoothstep(2.0, 4.0, st), hot = smoothstep(4.0, 6.0, st);
          float e1 = vorEdge(gxy / 1500.0) * 1500.0, w1 = mix(1.0, 7.0, I) * (1.0 + hot) * step(0.6 - 0.25 * I, vn(gxy / 4000.0 + 1.7));
          float e2 = vorEdge(gxy / 150.0 + 3.3) * 150.0, w2 = mix(0.3, 1.5, I) * step(0.55, vn(gxy / 500.0));
          float big = fissure(e1, w1, px) * lvl, small = crackLine(e2, w2, px) * lvl;
          float halo = crackLine(e1, w1 * 2.2, px) * lvl;
          material.diffuse *= 1.0 - 0.4 * halo * I;
          material.diffuse = mix(material.diffuse, vec3(0.012, 0.01, 0.009), max(big, small) * I);
          material.diffuse += vec3(1.0, 0.33, 0.06) * hot * (0.9 * big + 0.1 * halo); // only the big fissures glow
        }
        // the floor of the deepest subsidence: a crust over glowing magma
        float sub = v_col.w;
        if (sub > 1200.0) {
          float mg = smoothstep(1200.0, 5000.0, sub), n = vn(gxy / 2500.0), n2 = vn(gxy / 600.0 + 1.3);
          material.diffuse = mix(material.diffuse, vec3(0.06, 0.03, 0.025) * mix(0.6, 1.2, n2) * tint, mg);
          material.diffuse += vec3(1.0, 0.3, 0.04) * mg * (0.08 + 1.1 * smoothstep(0.62, 0.85, n) * smoothstep(0.35, 0.7, n2));
        }
        // cracks: a broken Voronoi web (~60 m and ~8 m cells) plus the blast's radial and concentric cracks.
        // Dark core, wider inner shadow, glowing while hot. Ground and rubble only: never on walls or standing roofs.
        if (ck.x > 0.01) {
          float level = smoothstep(0.55, 0.85, abs(dot(nEC, ckUp)));
          float grd = clamp((1.0 - smoothstep(1.0, 4.0, abv)) + smoothstep(0.4, 0.8, col), 0.0, 1.0);
          float I = ck.x, k = I * level * grd;
          if (k > 0.01) {
            float e1 = vorEdge(ckXY / 60.0) * 60.0, w1 = mix(0.15, 1.1, I) * step(1.0 - 0.45 * I, vn(ckXY / 140.0 + 5.1));
            float e2 = vorEdge(ckXY / 8.0 + 7.3) * 8.0, w2 = 0.18 * smoothstep(0.45, 0.85, I) * step(0.45, vn(ckXY / 25.0 + 2.2));
            float core = max(max(crackLine(e1, w1, px), crackLine(e2, w2, px)), max(fissure(ck2.x, ck.z, px), fissure(ck2.y, ck.w, px)));
            float halo = max(max(crackLine(e1, w1 * 2.0, px), crackLine(e2, w2 * 2.0, px)), max(crackLine(ck2.x, ck.z * 2.2, px), crackLine(ck2.y, ck.w * 2.2, px)));
            material.diffuse *= 1.0 - 0.5 * halo * k;
            material.diffuse = mix(material.diffuse, vec3(0.012, 0.01, 0.009), core * k);
            material.diffuse += vec3(1.0, 0.36, 0.07) * pow(ck.y, 1.5) * k * (1.4 * core + 0.2 * halo); // the glow fades before the heat
          }
        }
      }`})}setupPost(){this.scene.postProcessStages.add(new Cesium.PostProcessStage({fragmentShader:`
        uniform sampler2D colorTexture; uniform float u_flash; uniform float u_warm;
        in vec2 v_textureCoordinates;
        void main() {
          vec3 c = texture(colorTexture, v_textureCoordinates).rgb;
          c *= vec3(1.0 + 0.45 * u_warm, 1.0 + 0.18 * u_warm, 1.0 - 0.1 * u_warm);
          // gentle cinematic grade: a bit of saturation and contrast, teal shadows / warm highlights
          float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
          c = mix(vec3(l), c, 1.1);
          c = (c - 0.5) * 1.07 + 0.5;
          c += vec3(-0.012, 0.004, 0.022) * (1.0 - l) + vec3(0.022, 0.008, -0.016) * l;
          vec2 uv = v_textureCoordinates - 0.5;
          c *= mix(0.68, 1.0, smoothstep(0.85, 0.2, length(uv * vec2(1.15, 1.0))));
          out_FragColor = vec4(mix(c, vec3(1.0, 0.98, 0.93), u_flash), 1.0);
        }`,uniforms:{u_flash:()=>this.FLASH,u_warm:()=>this.WARM}}))}pickWorld(n){let e=this.scene,t=e.pickPositionSupported?e.pickPosition(n):void 0;return!Cesium.defined(t)&&e.globe.show&&(t=e.globe.pick(this.camera.getPickRay(n),e)),Cesium.defined(t)||(t=this.camera.pickEllipsoid(n)),t}navPick(n){let e=this.scene,t=Cesium.Cartesian3,i=this.camera.getPickRay(n);if(!i)return;let a=o=>{if(!o)return!1;let l=t.subtract(o,i.origin,new t),d=t.dot(l,i.direction);return d<=0?!1:t.distance(o,t.add(i.origin,t.multiplyByScalar(i.direction,d,new t),new t))<Math.max(3,.01*d)},r=e.pickPositionSupported?e.pickPosition(n):void 0;if(a(r))return r;if(this.tileset){let o=this.hideForSampling();try{let l=e.pickFromRay(i,this.viewer.entities.values);if(l&&a(l.position))return l.position}catch{}finally{o()}}return this.camera.pickEllipsoid(n)||r}centerPoint(){return this.pickWorld(new Cesium.Cartesian2(this.cv.clientWidth/2,this.cv.clientHeight/2))}setupControls(){let{scene:n,camera:e,cv:t}=this,i=Cesium.Cartesian3,a=n.screenSpaceCameraController,r=Cesium.CameraEventType,o=Cesium.KeyboardEventModifier;a.rotateEventTypes=r.LEFT_DRAG,a.translateEventTypes=r.LEFT_DRAG,a.zoomEventTypes=[r.PINCH],a.enableTilt=!1,a.lookEventTypes=[{eventType:r.LEFT_DRAG,modifier:o.CTRL}],a.minimumZoomDistance=15,a.maximumZoomDistance=25e6,a.enableCollisionDetection=!0,this.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);let l=(m,x,_,y)=>{m.addEventListener(x,_,y),this.disposers.push(()=>m.removeEventListener(x,_,y))};l(t,`contextmenu`,m=>m.preventDefault()),l(t,`wheel`,m=>{m.preventDefault();let x=t.getBoundingClientRect(),_=new Cesium.Cartesian2(m.clientX-x.left,m.clientY-x.top),y=m.deltaMode===1?m.deltaY*40:m.deltaY,A=this.navPick(_)||e.pickEllipsoid(new Cesium.Cartesian2(t.clientWidth/2,t.clientHeight/2));if(!A){let E=Cesium.Cartographic.fromCartesian(e.positionWC);E.height=0,A=Cesium.Cartographic.toCartesian(E)}this.zoomTarget=A,this.zoomPending=Cesium.Math.clamp((this.zoomPending||0)+y*.0016,-1.2,1.2),y>0&&(performance.now()>this.zoomOutUntil&&(this.recenterHeading=e.heading),this.zoomOutUntil=performance.now()+300),this.poke()},{passive:!1}),l(t,`mousedown`,m=>{m.button===1&&m.preventDefault()});let d=m=>{let x=t.getBoundingClientRect();return new Cesium.Cartesian2(m.clientX-x.left,m.clientY-x.top)};l(t,`pointerdown`,m=>{let x=m.button===1||m.button===0&&m.shiftKey?`tilt`:m.button===2?`zoom`:null;if(!x)return;let _=this.navPick(d(m));if(!_)return;let y={mode:x,P:_,up:Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(_,new i),last:d(m),start:d(m)};if(this.zoomPending=0,x===`tilt`){y.pos0=i.clone(e.positionWC),y.dir0=i.clone(e.directionWC),y.up0=i.clone(e.upWC),y.v0=i.subtract(y.pos0,_,new i);let A=i.magnitude(y.v0);y.el0=Math.asin(Cesium.Math.clamp(i.dot(y.v0,y.up)/A,-1,1));let E=i.cross(y.up,y.v0,new i);y.axis=i.magnitude(E)>1e-6*A?i.normalize(E,E):i.negate(e.rightWC,new i),y.p0=e.pitch,y.h0alt=Cesium.Cartographic.fromCartesian(e.positionWC).height;let f=Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(y.pos0,new i);y.minDn=Math.min(-Math.sin(Cesium.Math.toRadians(89.6)),i.dot(y.dir0,f)-1e-6),y.rollTol=Math.max(.02,Math.abs(i.dot(e.rightWC,f))+.01),y.elOk=y.el0}this.drag=y;try{t.setPointerCapture(m.pointerId)}catch{}}),l(t,`pointermove`,m=>{let x=d(m);this.armed&&!this.drag&&(this.hoverPx=x,this.poke());let _=this.drag;if(!_)return;x.x-_.last.x;let A=x.y-_.last.y;if(_.last=x,_.mode===`zoom`){let Q=i.distance(e.positionWC,_.P),be=Cesium.Math.clamp(Q*Math.exp(-A*.006),20,3e7);e.move(i.normalize(i.subtract(_.P,e.positionWC,new i),new i),Q-be);return}let E=Q=>Math.sign(Q)*Math.max(0,Math.abs(Q)-10),f=E(x.x-_.start.x),V=E(x.y-_.start.y),D=this.maxPitch(_.h0alt),F=Math.max(Cesium.Math.toRadians(3),_.el0-Math.max(0,D-_.p0)),B=Cesium.Math.toRadians(89.5),Z=Cesium.Math.clamp(_.el0+V*(Math.PI/t.clientHeight),Math.min(F,_.el0),Math.max(B,_.el0)),ce=f*(2*Math.PI/t.clientWidth),j=this.orbitPose(_,Z,ce);if(j)_.elOk=Z;else{let Q=_.elOk??_.el0,be=Z,Ae=this.orbitPose(_,Q,ce);for(let ue=0;ue<16&&Ae;ue++){let Pe=(Q+be)/2,Ue=this.orbitPose(_,Pe,ce);Ue?(Q=Pe,Ae=Ue):be=Pe}j=Ae,j&&(_.elOk=Q)}j&&(e.lookAtTransform(Cesium.Matrix4.IDENTITY),i.clone(j.pos,e.position),i.clone(j.dir,e.direction),i.clone(j.up,e.up),i.cross(j.dir,j.up,e.right))}),l(t,`pointerup`,()=>this.drag=null),l(t,`pointercancel`,()=>this.drag=null);let p=new Cesium.ScreenSpaceEventHandler(t);this.disposers.push(()=>p.destroy());let v=null,b=null;p.setInputAction(m=>{v=Cesium.Cartesian2.clone(m.position)},Cesium.ScreenSpaceEventType.LEFT_DOWN);let S=m=>x=>{if(!this.armed||!v||Cesium.Cartesian2.distance(v,x.position)>4)return;let _=Cesium.Cartesian2.clone(x.position);clearTimeout(b),b=setTimeout(()=>{let y=this.pickWorld(_);y&&this.act(y,m)},250)};p.setInputAction(S(!1),Cesium.ScreenSpaceEventType.LEFT_CLICK),p.setInputAction(S(!0),Cesium.ScreenSpaceEventType.LEFT_CLICK,Cesium.KeyboardEventModifier.ALT),p.setInputAction(m=>{clearTimeout(b);let x=this.pickWorld(m.position);x&&e.flyTo({destination:i.lerp(e.positionWC,x,.5,new i),orientation:{heading:e.heading,pitch:e.pitch,roll:0},duration:.6})},Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK),this.disposers.push(()=>clearTimeout(b));let k=m=>m&&(m.tagName===`INPUT`||m.tagName===`SELECT`||m.tagName===`TEXTAREA`);l(document,`keydown`,m=>{if(k(m.target))return;let x=m.key.toLowerCase();x===`n`&&this.northUp(),x===`u`&&this.topDown(),x===`r`&&this.reset(),this.keys.add(m.key),(m.key.startsWith(`Arrow`)||m.key.startsWith(`Page`))&&m.preventDefault()}),l(document,`keyup`,m=>this.keys.delete(m.key)),l(window,`blur`,()=>this.keys.clear())}orbitPose(n,e,t){let i=Cesium.Cartesian3,a=Cesium.Quaternion.multiply(Cesium.Quaternion.fromAxisAngle(n.up,-t),Cesium.Quaternion.fromAxisAngle(n.axis,n.el0-e),new Cesium.Quaternion),r=Cesium.Matrix3.fromQuaternion(a),o=y=>Cesium.Matrix3.multiplyByVector(r,y,new i),l=i.add(n.P,o(n.v0),new i),d=o(n.dir0),u=o(n.up0),c=i.normalize(i.subtract(n.P,l,new i),new i),p=Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(l,new i),v=i.cross(d,u,new i),b=i.cross(c,v,new i),S=i.dot(v,p),k=i.dot(b,p),m=i.dot(c,v)*i.dot(c,p),x=S-m,_=Math.hypot(x,k);if(_>1e-9&&Math.abs(m/_)<=1){let y=Math.atan2(k,x),A=Math.acos(-m/_),E=V=>Cesium.Matrix3.fromQuaternion(Cesium.Quaternion.fromAxisAngle(c,V)),f=null;for(let V of[y+A,y-A]){let D=Cesium.Math.negativePiToPi(V),F=E(D),B=Cesium.Matrix3.multiplyByVector(F,u,new i);i.dot(B,p)>0&&(!f||Math.abs(D)<Math.abs(f.t))&&(f={t:D,M:F,up2:B})}f&&Math.abs(f.t)<1.2&&(Cesium.Matrix3.multiplyByVector(f.M,d,d),i.clone(f.up2,u))}return i.dot(d,p)<n.minDn||i.dot(u,p)<-1e-4||Math.abs(i.dot(i.cross(d,u,new i),p))>n.rollTol?null:{pos:l,dir:d,up:u}}keepUpright(){let n=this.camera;if(this.drag||n._currentFlight)return;let e=Cesium.Math.negativePiToPi(n.roll);Math.abs(e)<Math.PI/2||n.setView({orientation:{heading:n.heading+Math.PI,pitch:Math.max(n.pitch,Cesium.Math.toRadians(-89.5)),roll:0}})}flyAround(n,e){let t=this.centerPoint(),i=this.camera;if(!t){i.flyTo({destination:i.positionWC,orientation:{heading:n,pitch:Math.min(e,-.8),roll:0},duration:.6});return}i.flyToBoundingSphere(new Cesium.BoundingSphere(t,0),{offset:new Cesium.HeadingPitchRange(n,e,Cesium.Cartesian3.distance(i.positionWC,t)),duration:.6})}northUp(){this.flyAround(0,this.camera.pitch)}topDown(){this.flyAround(this.camera.heading,Cesium.Math.toRadians(-89.5))}zoomOutUntil=0;recenterHeading=null;zoomPending=0;zoomTarget=null;applyZoom(n){if(!this.zoomPending||!this.zoomTarget)return;let e=Cesium.Cartesian3,t=this.camera,i=this.zoomPending*Math.min(1,n*20);this.zoomPending-=i,Math.abs(this.zoomPending)<.002&&(this.zoomPending=0);let a=this.zoomTarget,r=e.subtract(t.positionWC,a,new e),o=e.magnitude(r),l=Cesium.Math.clamp(o*Math.exp(i),20,4e7),d=e.add(a,e.multiplyByScalar(r,l/o,new e),new e),u=b=>e.add(a,e.multiplyByScalar(r,b/o,new e),new e),c=b=>Cesium.Cartographic.fromCartesian(u(b)).height;if(l>o&&c(l)>25e6){let b=o,S=l;for(let k=0;k<20;k++){let m=(b+S)/2;c(m)>25e6?S=m:b=m}l=b,d=u(l),this.zoomPending=0}let p=Cesium.Cartographic.fromCartesian(d),v=this.floorAt(p);if(p.height<v){this.zoomPending=0;return}t.setView({destination:d,orientation:{heading:t.heading,pitch:t.pitch,roll:t.roll}})}floorC=null;floorAt(n){let e=this.floorC,t=performance.now();if(e&&t-e.t<400&&Math.abs(e.lon-n.longitude)<2e-5&&Math.abs(e.lat-n.latitude)<2e-5)return e.h;if(n.height>3e3+(e?e.h:0))return-1/0;let i=(this.surfaceHeight(n)??this.deformAt(Cesium.Cartographic.toCartesian(new Cesium.Cartographic(n.longitude,n.latitude,0))))+15;return this.floorC={t,lon:n.longitude,lat:n.latitude,h:i},i}handleKeys(n){let{keys:e,camera:t}=this,i=Cesium.Cartesian3;if(!e.size)return;let a=Math.max(Cesium.Cartographic.fromCartesian(t.positionWC).height,50)*.9*n;if(e.has(`Shift`)){let r=0,o=0;e.has(`ArrowLeft`)&&(r-=1.2*n),e.has(`ArrowRight`)&&(r+=1.2*n),e.has(`ArrowUp`)&&(o+=.8*n),e.has(`ArrowDown`)&&(o-=.8*n);let l=(r||o)&&this.centerPoint();l&&(t.lookAt(l,new Cesium.HeadingPitchRange(t.heading+r,Cesium.Math.clamp(t.pitch+o,Cesium.Math.toRadians(-89.5),-.02),i.distance(t.positionWC,l))),t.lookAtTransform(Cesium.Matrix4.IDENTITY))}else{let r=Cesium.Transforms.eastNorthUpToFixedFrame(t.positionWC),o=i.fromCartesian4(Cesium.Matrix4.getColumn(r,0,new Cesium.Cartesian4)),l=i.fromCartesian4(Cesium.Matrix4.getColumn(r,1,new Cesium.Cartesian4)),d=Math.sin(t.heading),u=Math.cos(t.heading),c=(b,S,k,m)=>i.add(i.multiplyByScalar(b,S,new i),i.multiplyByScalar(k,m,new i),new i),p=c(l,u,o,d),v=c(o,u,l,-d);e.has(`ArrowUp`)&&t.move(p,a),e.has(`ArrowDown`)&&t.move(p,-a),e.has(`ArrowRight`)&&t.move(v,a),e.has(`ArrowLeft`)&&t.move(v,-a)}(e.has(`PageUp`)||e.has(`+`)||e.has(`=`))&&t.zoomIn(a*1.5),(e.has(`PageDown`)||e.has(`-`))&&t.zoomOut(a*1.5)}setTool(n){this.tool=n,this.cancelLine(),this.updateHint()}setArmed(n){this.armed=n,this.cv.style.cursor=n?`crosshair`:``,n||(this.cancelLine(),this.hover=null),this.updateHint()}setChain(n){this.chain=n}setSound(n){this.soundOn=n,n&&this.audio()}setRings(n){this.showRings=n;for(let e of this.blasts)e.entities.forEach(t=>t.show=n),e.groundMat&&(e.groundMat.uniforms.rings=n?1:0);this.bShader.setUniform(`u_rings`,n?1:0),this.poke()}removeBase(){this.base&&(this.viewer.entities.remove(this.base.entity),this.base=null,this.poke())}reset(){let n=Cesium.Cartographic.fromCartesian(this.camera.positionWC),e=Cesium.Math.clamp(n.height,1500,2e7);this.drag=null,this.camera.flyTo({destination:Cesium.Cartesian3.fromRadians(n.longitude,n.latitude,e),orientation:{heading:0,pitch:Cesium.Math.toRadians(-89.5),roll:0},duration:.8})}setLabels(n){this.labelsOn=n,this.ensureLabels(),this.labGlobe&&(this.labGlobe.show=n),this.tileset&&!this.labLive&&(this.labTiles&&(this.tileset.imageryLayers.remove(this.labTiles),this.labTiles=null),n&&(this.labTiles=this.tileset.imageryLayers.addImageryProvider(this.labProvider()))),this.poke()}labLive=!1;labProvider(){return new Cesium.UrlTemplateImageryProvider({url:`https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}`,maximumLevel:19,credit:`Esri World Boundaries and Places`})}ensureLabels(){if(this.labGlobe||(this.labGlobe=this.viewer.imageryLayers.addImageryProvider(this.labProvider()),this.labGlobe.show=this.labelsOn),this.tileset&&!this.labTiles&&this.labLive){let n=this.tileset.imageryLayers.addImageryProvider(this.labProvider());n.alpha=.999,n.__liveAlpha=()=>this.labelsOn?1:0,this.labTiles=n}}setSunHour(n){this.sunHour=n,this.poke()}async search(n){try{let e=await this.geocoder.geocode(n,Cesium.GeocodeType.SEARCH);return e.length?(this.camera.flyTo({destination:e[0].destination,duration:2}),!0):!1}catch{return!1}}clear(){[...this.blasts].forEach(n=>this.removeBlast(n)),this.slots.fill(null),this.slotsN=0,this.bShader.setUniform(`u_n`,0),this.jobs=[],this.atlas.fill(0),this.atlasDirty=!0,this.preps.forEach(n=>n.dead=!0),this.preps=[],this.mStress.fill(0),this.mScorch.fill(0),this.mCrater.fill(0),this.mBytes.fill(0),this.maxStress=0,this.mapDirty=!0,this.bShader.setUniform(`u_mapOn`,0),this.flyers.forEach(n=>{this.rm(n.head),n.entity&&this.viewer.entities.remove(n.entity)}),this.flyers=[],this.particles.forEach(n=>this.rm(n.b)),this.particles=[],this.chunks.forEach(n=>this.rm(n.b)),this.chunks=[],this.ducks.forEach(n=>{n.model&&this.scene.primitives.remove(n.model),n.bb&&this.rm(n.bb)}),this.ducks=[],this.turrets.forEach(n=>this.removeTurret(n)),this.turrets=[],this.planes.forEach(n=>{this.removeShape(n.shape),this.rm(n.strobe)}),this.planes=[],this.bombs.forEach(n=>this.rm(n.b)),this.bombs=[],this.ufos.forEach(n=>this.removeUfo(n)),this.ufos=[],this.removeBase(),this.cancelLine(),this.FLASH=this.WARM=0,this.updateHint(),this.poke()}view(){let n=Cesium.Cartographic.fromCartesian(this.camera.positionWC),e=this.camera;return{lon:Cesium.Math.toDegrees(n.longitude),lat:Cesium.Math.toDegrees(n.latitude),h:n.height,heading:e.heading,pitch:e.pitch,roll:e.roll}}thumbnail(){return new Promise(n=>{let e=()=>{this.scene.postRender.removeEventListener(e);let t=this.cv,i=320,a=180,r=document.createElement(`canvas`);r.width=i,r.height=a;let o=t.width/t.height,l=o>i/a?t.height*i/a:t.width,d=o>i/a?t.height:t.width*a/i;r.getContext(`2d`).drawImage(t,(t.width-l)/2,(t.height-d)/2,l,d,0,0,i,a),n(r.toDataURL(`image/jpeg`,.72))};this.scene.postRender.addEventListener(e)})}teleport(n){this.camera.setView({destination:Cesium.Cartesian3.fromDegrees(n.lon,n.lat,n.h),orientation:{heading:n.heading,pitch:n.pitch,roll:n.roll}})}updateHint(){let n=this.tool.kind;if(!this.armed)return this.ev.hint(`Press D or ARM, then click the map`);if(n===`carpet`)return this.ev.hint(this.lineStart?`Click the end of the line`:`Click the start of the bombing line`);if(this.silo)return this.ev.hint(this.base?`Click a target · Alt+click moves the silo`:`Launch mode: click where to place your silo`);if(n===`railgun`)return this.ev.hint(`Click to place a turret (${this.turrets.length}/4)`);if(n===`ufo`)return this.ev.hint(`Click to summon a UFO (${this.ufos.length}/4)`);if(n===`wind`)return this.ev.hint(`Click where the wind should blow · Esc to disarm`);this.ev.hint(`Click the map · Esc to disarm`)}act(n,e){let t=this.tool;if(this.audio(),this.poke(),t.kind===`wind`)return this.blowWind(n);if(t.kind===`carpet`){if(!this.lineStart)return this.startLine(n);let i=this.lineStart;return this.cancelLine(),this.updateHint(),this.carpetBomb(i,n,t)}return this.silo?!this.base||e?this.setBase(n):t.kind===`cruise`?this.fireCruise(n,t):this.launch(n,t):this.deliver(n,t)}deliver(n,e){switch(e.kind){case`duck`:return this.dropDuck(n);case`ufo`:return this.spawnUfo(n);case`asteroid`:case`rod`:return this.fireFromSky(n,e);case`cruise`:return this.silo?this.smallBoom(n,2.2*Math.cbrt(e.W/45e-5)):this.fireCruise(n,e);case`railgun`:return this.placeTurret(n);default:return this.detonate(n,e)}}audio(){if(!this.soundOn)return null;if(!this.actx){let n=this.actx=new(window.AudioContext||window.webkitAudioContext),e=n.createDynamicsCompressor();e.threshold.value=-16,e.ratio.value=6,this.master=n.createGain(),this.master.gain.value=.9,this.master.connect(e),e.connect(n.destination);let t=n.sampleRate*8;this.noiseBuf=n.createBuffer(1,t,n.sampleRate);let i=this.noiseBuf.getChannelData(0),a=0;for(let r=0;r<t;r++){let o=Math.random()*2-1;a=(a+.02*o)/1.02,i[r]=a*3.5}}return this.actx.state===`suspended`&&this.actx.resume(),this.actx}noise(n){let e=n.createBufferSource();return e.buffer=this.noiseBuf,e.loop=!0,e.loopStart=Math.random()*6,e}env(n,e,t,i,a){n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(t,e+i),n.gain.exponentialRampToValueAtTime(1e-4,e+i+a)}boom(n,e,t){let i=this.audio();if(!i)return;let a=i.currentTime+.02,r=i.createGain();if(r.gain.value=n,r.connect(this.master),t<.7){let o=this.noise(i),l=i.createBiquadFilter(),d=i.createGain();l.type=`highpass`,l.frequency.value=900,o.connect(l),l.connect(d),d.connect(r),this.env(d,a,.9*(1-t),.004,.35),o.start(a),o.stop(a+.5)}{let o=this.noise(i),l=i.createBiquadFilter(),d=i.createGain();l.type=`lowpass`,l.frequency.setValueAtTime(I(2600,500,t),a),l.frequency.exponentialRampToValueAtTime(70,a+e*.6),o.connect(l),l.connect(d),d.connect(r),this.env(d,a,1.4,.015,e*.7),o.start(a),o.stop(a+e)}{let o=i.createOscillator(),l=i.createGain();o.type=`sine`,o.frequency.setValueAtTime(62,a),o.frequency.exponentialRampToValueAtTime(24,a+e*.5),o.connect(l),l.connect(r),this.env(l,a,1.2,.02,e*.5),o.start(a),o.stop(a+e)}if(e>1.5){let o=this.noise(i),l=i.createBiquadFilter(),d=i.createGain();l.type=`lowpass`,l.frequency.value=140,o.connect(l),l.connect(d),d.connect(r),d.gain.setValueAtTime(1e-4,a),d.gain.exponentialRampToValueAtTime(.9,a+.4),d.gain.exponentialRampToValueAtTime(1e-4,a+e*2),o.start(a),o.stop(a+e*2+.1)}}smallBoomSound(n){let e=performance.now();if(e-this.lastSmallSound<60)return;this.lastSmallSound=e;let i=ge(Cesium.Cartesian3.distance(this.camera.positionWC,n)/2e4);this.boom(.55*(1-i*.7),.9,i)}whoosh(n,e=1){let t=this.audio();if(!t)return;let i=t.currentTime,a=this.noise(t),r=t.createBiquadFilter(),o=t.createGain();r.type=`bandpass`,r.Q.value=1.4,r.frequency.setValueAtTime(300*e,i),r.frequency.exponentialRampToValueAtTime(2400*e,i+n),o.gain.setValueAtTime(1e-4,i),o.gain.exponentialRampToValueAtTime(.5,i+n*.85),o.gain.exponentialRampToValueAtTime(1e-4,i+n+.1),a.connect(r),r.connect(o),o.connect(this.master),a.start(i),a.stop(i+n+.2)}zap(){let n=this.audio();if(!n)return;let e=n.currentTime,t=n.createOscillator(),i=n.createGain();t.type=`sawtooth`,t.frequency.setValueAtTime(2400,e),t.frequency.exponentialRampToValueAtTime(140,e+.18),t.connect(i),i.connect(this.master),this.env(i,e,.25,.003,.2),t.start(e),t.stop(e+.25)}squeak(){let n=this.audio();if(!n)return;let e=n.currentTime,t=n.createOscillator(),i=n.createOscillator(),a=n.createGain(),r=n.createGain();t.type=`triangle`,t.frequency.setValueAtTime(700,e),t.frequency.linearRampToValueAtTime(1500,e+.09),t.frequency.linearRampToValueAtTime(900,e+.28),i.frequency.value=32,a.gain.value=60,i.connect(a),a.connect(t.frequency),t.connect(r),r.connect(this.master),this.env(r,e,.45,.01,.3),t.start(e),i.start(e),t.stop(e+.35),i.stop(e+.35)}chime(){let n=this.audio();if(!n)return;let e=n.currentTime;[880,1320,1760].forEach((t,i)=>{let a=n.createOscillator(),r=n.createGain();a.type=`sine`,a.frequency.value=t,a.connect(r),r.connect(this.master),this.env(r,e+i*.08,.18,.01,.6),a.start(e+i*.08),a.stop(e+i*.08+.7)})}addShake(n){let e=this.shake;e.amp=Math.max(e.amp*Math.exp(-e.t*2.2),n),e.t=0}applyShake(n){let e=this.shake,t=this.camera;if((e.v||e.h)&&(t.lookRight(-e.h),t.lookUp(-e.v),e.v=e.h=0),e.amp<=0||this.drag)return;e.t+=n;let i=e.amp*Math.exp(-e.t*2.2);if(i<5e-5){e.amp=0;return}e.v=(Math.random()-.5)*i,e.h=(Math.random()-.5)*i,t.pitch<-1.5&&(e.v=0),t.lookUp(e.v),t.lookRight(e.h)}updateSun(){let n=this.camera.pickEllipsoid(new Cesium.Cartesian2(this.cv.clientWidth/2,this.cv.clientHeight/2))||this.camera.positionWC;if(this.sunHour!==this.sunHourSet){this.sunHourSet=this.sunHour;let e=/* @__PURE__ */ new Date;e.setUTCHours(0,0,0,0),this.viewer.clock.currentTime=Cesium.JulianDate.fromDate(new Date(e.getTime()+this.sunHour*36e5));let t=this.viewer.clock.currentTime,i=Cesium.Cartesian3,a=Cesium.Simon1994PlanetaryPositions.computeSunPositionInEarthInertialFrame(t,new i),r=Cesium.Transforms.computeIcrfToFixedMatrix(t)||Cesium.Transforms.computeTemeToPseudoFixedMatrix(t);this.sunDir=i.normalize(Cesium.Matrix3.multiplyByVector(r,a,a),a)}this.tint=this.tintAt(n)}sunDir=new Cesium.Cartesian3(1,0,0);sunHourSet;tintAt(n){let e=Cesium.Cartesian3.dot(Cesium.Cartesian3.normalize(n,new Cesium.Cartesian3),this.sunDir),t=R(-.1,.12,e),i=t*(1-R(.04,.38,e)),a=[.09,.12,.21],r=[0,1,2].map(o=>I(a[o],1,t)*I(1,[1.14,.86,.66][o],i));return r.day=t,r}setSlot(n,e){let t=this.bShader;t.setUniform(`u_m`+n,e?Cesium.Matrix4.multiply(e.invEnu,this.camera.inverseViewMatrix,new Cesium.Matrix4):new Cesium.Matrix4),t.setUniform(`u_a`+n,e?new Cesium.Cartesian4(e.shock,e.X.r20,e.X.r5,e.X.r1):new Cesium.Cartesian4),t.setUniform(`u_b`+n,e?new Cesium.Cartesian4(e.E.rth,e.burn,e.glowB,e.E.Rfb*3+e.E.hob):new Cesium.Cartesian4(0,0,0,1)),t.setUniform(`u_d`+n,e?new Cesium.Cartesian4(e.bite?-e.X.crater:e.X.crater,e.crv,e.heat,e.seed):new Cesium.Cartesian4),t.setUniform(`u_e`+n,e?new Cesium.Cartesian4(e.hm?e.slot:-1,e.hmS||0,e.cshock,e.E.hob):new Cesium.Cartesian4(-1,0,0,0))}surfNormal(n){let e=Cesium.Cartesian3,t=Cesium.SceneTransforms.worldToWindowCoordinates(this.scene,n);if(!t||!this.scene.pickPositionSupported)return null;let i=(u,c)=>this.scene.pickPosition(new Cesium.Cartesian2(t.x+u,t.y+c)),a=i(-3,0),r=i(3,0),o=i(0,-3),l=i(0,3);if(!a||!r||!o||!l)return null;let d=e.cross(e.subtract(r,a,new e),e.subtract(l,o,new e),new e);return e.magnitude(d)<1e-9?null:(e.normalize(d,d),e.dot(d,e.subtract(this.camera.positionWC,n,new e))<0&&e.negate(d,d),d)}retire(n){n.retired||(n.retired=!0,n.entities.forEach(e=>this.viewer.entities.remove(e)),n.entities=[],n.ground&&(this.scene.primitives.remove(n.ground),n.ground=null,n.groundMat=null))}animating(n){return n.t<n.E.Trise*3||!n.heard||n.heat>0}schedule(n=!1){let e=Cesium.Cartesian3,t=this.camera,i=this.MAX;if(!n&&!this.blasts.length)return;let a=t.pickEllipsoid(new Cesium.Cartesian2(this.cv.clientWidth/2,this.cv.clientHeight/2))||t.positionWC,r=this.cv.clientHeight/(2*Math.tan((t.frustum.fovy||1)/2)),o=c=>{let p=c.X.r1,v=e.distance(t.positionWC,c.groundPos);if(p/Math.max(v-p,1)*r<2)return 1/0;let b=Math.max(0,e.distance(a,c.groundPos)-p)/p;return this.animating(c)&&(b=b*.3-(c.t<c.E.Trise?2:1)),c.slot>=0&&(b-=.25+.3*Math.abs(b)),b},l=this.blasts.map(c=>[o(c),c]).filter(c=>c[0]<1/0).sort((c,p)=>c[0]-p[0]).slice(0,i).map(c=>c[1]),d=new Set(l);for(let c=0;c<i;c++){let p=this.slots[c];p&&!d.has(p)&&(p.slot=-1,this.slots[c]=null)}for(let c of l){if(c.slot>=0)continue;let p=this.slots.indexOf(null);if(p<0)break;this.slots[p]=c,c.slot=p,this.writeAtlas(c)}for(let c=0;c<i;c++)this.setSlot(c,this.slots[c]);let u=0;for(let c=0;c<i;c++)this.slots[c]&&(u=c+1);u!==this.slotsN&&(this.slotsN=u,this.bShader.setUniform(`u_n`,u))}slotsN=-1;removeBlast(n){n.dead=!0,n.ground&&this.scene.primitives.remove(n.ground),n.entities.forEach(e=>this.viewer.entities.remove(e)),n.slot>=0&&(this.slots[n.slot]=null,this.setSlot(n.slot,null),n.slot=-1),this.blasts=this.blasts.filter(e=>e!==n),this.padGen++}makePuffs(n,e){let t=[],i=Math.random,a=l=>Math.max(8,Math.round(l*e)),r=()=>{let l,d,u;do l=i()*2-1,d=i()*2-1,u=i()*2-1;while(l*l+d*d+u*u>1);return{ux:l,uy:d,uz:u}},o=(l,d,u)=>{for(let c=0,p=a(d);c<p;c++)t.push(Object.assign({type:l,th:i()*Math.PI*2,ph:i()*Math.PI*2,r1:i(),r2:i(),r3:i(),r4:i(),rot:i()*Math.PI*2},u&&u(c,p)))};return o(`torus`,440),o(`fill`,140,r),o(`core`,60,r),o(`stem`,260,(l,d)=>({r1:(l+i())/d})),o(`shock`,110),n.air&&n.hob>0&&o(`wilson`,80,()=>({el:Math.pow(i(),.7)*1.3-.15})),n.air||o(`dust`,100),this.tileset&&o(`rubble`,150),t}detonate(n,e,t={}){let i=Cesium.Cartesian3,a=i.clone(n),r=Ye(e.W,e.air,e.hob);t.mini&&(r.Trise=12);let o=-1,l=Cesium.Transforms.eastNorthUpToFixedFrame(a),d=(m,x,_,y)=>Cesium.Matrix4.multiplyByPoint(c.enu,i.fromElements(m,x,_,y||new i),y||new i),u=t.gen||0,c={E:r,w:e,slot:o,id:++this.blastId,groundPos:a,enu:l,local:d,cloudA:1,t:0,real:0,shock:0,burn:0,glowB:0,entities:[],rings:{},up:Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(a,new i),puffs:t.mini?[]:this.makePuffs(r,u?.55:1),heard:!!t.mini,gen:u,children:[],mini:!!t.mini};c.root=t.root||c;let p=this.deformAt(a);if(c.origin=i.add(a,i.multiplyByScalar(c.up,-p,new i),new i),c.invEnu=Cesium.Matrix4.inverseTransformation(Cesium.Transforms.eastNorthUpToFixedFrame(c.origin),new Cesium.Matrix4),c.crv=0,c.heat=1,c.seed=Math.random()*97,c.cshock=0,c.X=ti(r),t.mini){let m=e.W*1e6/92,x=3*Math.cbrt(m);c.X.crater=x;let _=this.surfNormal(a);if(_&&i.dot(_,c.up)<.7){c.bite=!0,c.origin=i.clone(a);let y=i.cross(c.up,_,new i);i.magnitude(y)<1e-6&&(y=new i(1,0,0)),i.normalize(y,y);let A=i.cross(_,y,new i),E=new Cesium.Matrix4(y.x,A.x,_.x,a.x,y.y,A.y,_.y,a.y,y.z,A.z,_.z,a.z,0,0,0,1);c.invEnu=Cesium.Matrix4.inverseTransformation(E,new Cesium.Matrix4)}c.noCollapse=c.bite||m<300,c.noCollapse&&(c.X.r20=1.5*x,c.X.r5=3*x,c.X.r1=3.5*x)}c.maxR=r.r1*1.15,this.tileset||(c.groundMat=new Cesium.Material({fabric:{uniforms:{shock:0,glow:0,burn:0,rings:this.showRings?1:0,rth:r.rth/c.maxR,rfb:r.Rfb/c.maxR,cr:r.crater/c.maxR,crv:0},source:`
        czm_material czm_getMaterial(czm_materialInput mi) {
          czm_material m = czm_getDefaultMaterial(mi);
          float r = length(mi.st - 0.5) * 2.0;
          float ring = shock > 0.001 ? smoothstep(shock - 0.035, shock, r) * (1.0 - smoothstep(shock, shock + 0.006, r)) : 0.0;
          ring *= (1.0 - smoothstep(0.75, 1.0, shock)) * rings;
          float g = glow * exp(-pow(r / max(rfb * 3.0, 0.005), 2.0));
          float scorch = burn * (0.45 * (1.0 - smoothstep(rfb * 0.8, rfb * 3.0, r)) + 0.2 * (1.0 - smoothstep(rth * 0.85, rth, r)));
          float crater = cr > 0.0 ? crv * (1.0 - smoothstep(cr * 0.85, cr, r)) : 0.0;
          float rim = cr > 0.0 ? crv * smoothstep(cr * 0.8, cr, r) * (1.0 - smoothstep(cr, cr * 1.35, r)) : 0.0;
          vec3 base = mix(vec3(0.07, 0.05, 0.035), vec3(0.03, 0.025, 0.02), crater);
          base = mix(base, vec3(0.36, 0.29, 0.21), rim);
          m.diffuse = mix(base, vec3(1.0, 0.8, 0.55), clamp(ring + g, 0.0, 1.0));
          m.emission = vec3(1.0, 0.7, 0.4) * (ring * 0.5 + g);
          m.alpha = clamp(max(scorch, max(crater * 0.92, rim * 0.75)) + ring * 0.5 + g, 0.0, 0.95);
          return m;
        }`}})),c.groundMat&&(c.ground=this.scene.primitives.add(new Cesium.GroundPrimitive({geometryInstances:new Cesium.GeometryInstance({geometry:new Cesium.EllipseGeometry({center:a,semiMajorAxis:c.maxR,semiMinorAxis:c.maxR})}),appearance:new Cesium.MaterialAppearance({material:c.groundMat,translucent:!0,flat:!0}),asynchronous:!1}))),this.blasts.push(c),this.padGen++;let v=this.blasts.filter(m=>!m.mini),b=t.mini?null:v[v.length-1-this.MAX];if(b&&this.retire(b),c.noCollapse||this.startHeightmap(c),this.schedule(!0),t.mini)return c;if(this.chain&&u<2){for(let m=0,x=u===0?3:2;m<x;m++)c.children.push({dist:r.r5*(1.3+Math.random()*1.4),a:Math.random()*Math.PI*2,W:e.W*(.35+Math.random()*.3)});for(let m of c.children)this.prepFor(c.local(m.dist*Math.cos(m.a),m.dist*Math.sin(m.a),0),U($({},e),{W:m.W}))}let S=this.stats;S.count++,S.area+=Math.PI*(r.r5/1e3)**2,S.cloud=Math.max(S.cloud,r.H),this.ev.stats($({},S));let k=m=>this.ev.unlock(m);return k(`first`),r.H>8848&&k(`everest`),r.H>=99e3&&k(`karman`),[`tsar`,`dino`,`rod`].includes(e.id)&&k(e.id),this.blasts.filter(m=>!m.retired).length>=6&&k(`six`),S.area>=1e3&&k(`area`),c.root.chainCount=(c.root.chainCount||0)+1,c.root.chainCount>=9&&k(`chain`),c}addRing(n,e,t,i){if(n.rings[e])return;n.rings[e]=!0;let a=[];for(let r=0;r<=160;r++){let o=r/160*Math.PI*2;a.push(n.local(t*Math.cos(o),t*Math.sin(o),0))}n.entities.push(this.viewer.entities.add({show:this.showRings,polyline:{positions:a,clampToGround:!0,width:5,material:this.hiMat(i)}}))}hiMat(n,e=!1){let t=Cesium.Color.fromCssColorString(n);return e?new Cesium.PolylineDashMaterialProperty({color:t,gapColor:Cesium.Color.BLACK.withAlpha(.85),dashLength:16}):new Cesium.PolylineOutlineMaterialProperty({color:t,outlineColor:Cesium.Color.BLACK,outlineWidth:1.6})}geom(n,e){let t=n.E,i=t.Rfb*Math.pow(ge(e/t.tmax),.4),a=Math.min(e/t.Trise,1),r=1-Math.pow(1-a,2.5),o=Math.min(t.Rcap*.6,t.H*.42),l=I(i*1.8,o,r),d=I(t.hob+i*.9,t.H,r),u=1+.12*Math.min(1.5,Math.max(0,e/t.Trise-1)),c=Math.max(i,I(i,t.Rcap,Math.pow(r,1.15)))*u,p=Math.max(0,d-l*.75)*Math.pow(ge((e-2*t.tmax)/(t.Trise*.5)),.8),v=Math.max(t.Rstem*(.35+.65*r),i*.3);return{Rf:i,u:a,thick:l,top:d,zc:d-l/2,Rc:c,stemTop:p,Rstem:v,omega:-(.09*(1-a)+.012)}}cloudItems(n,e,t){let i=n.E,a=n.t,r=this.geom(n,a),o=Math.exp(-a/i.tglow),l=Math.exp(-a/(i.tglow*3)),d=a/i.tglow,u;if(d<.25)u=[1,.96,.82];else if(d<.7){let f=(d-.25)/.45;u=[1,I(.96,.55,f),I(.82,.18,f)]}else{let f=ge((d-.7)/1.3);u=[I(1,.55,f),I(.55,.16,f),I(.18,.06,f)]}let c=ge(a/(i.Trise*.35)),p=[.24,.27,.36];n.tn=this.tintAt(n.groundPos);let v=n.tn.map((f,V)=>Math.max(f,p[V])),b=[I(.62,.95,c)*v[0],I(.42,.93,c)*v[1],I(.3,.91,c)*v[2]],S=r.zc-r.thick/2,k=this.camera.positionWC,m=R(0,.03,a),x=this.dtReal,_=performance.now()/1e3,y=this.gusts.length?this.gusts.map(f=>{let V=Cesium.Matrix4.multiplyByPoint(n.invEnu,f.P,new Cesium.Cartesian3),D=Cesium.Matrix4.multiplyByPointAsVector(n.invEnu,f.dir,new Cesium.Cartesian3),F=Math.hypot(D.x,D.y)||1;return{x:V.x,y:V.y,dx:D.x/F,dy:D.y/F,U:f.U*f.env,R:f.R}}):null,A=t.length,E=1-n.tn.day;for(let f of n.puffs){let V,D,F,B,Z=1,ce=0,j,Q=b,be=0;if(f.type===`torus`){f.ph+=e*r.omega*(.7+.6*f.r4);let ae=r.Rc*(.58+.1*f.r1)+r.Rc*.36*(.75+.4*f.r2)*Math.cos(f.ph);V=ae*Math.cos(f.th),D=ae*Math.sin(f.th),F=r.zc+r.thick*.45*Math.sin(f.ph),B=r.Rc*(.6+.35*f.r3),Z=.4+.6*ge((F-S)/r.thick),ce=.75,be=Math.max(0,-Math.sin(f.ph)),j=.42*m}else if(f.type===`fill`)V=r.Rc*.55*f.ux,D=r.Rc*.55*f.uy,F=r.zc+r.thick*.35*f.uz,B=r.Rc*(.75+.3*f.r3),Z=.5+.45*ge((F-S)/r.thick),ce=1,j=.4*m;else if(f.type===`core`){if(j=.7*Math.exp(-a/(i.tglow*1.4)),j<.01)continue;let O=r.Rf*.5;V=O*f.ux,D=O*f.uy,F=r.zc+O*f.uz,B=r.Rf*(1+.5*f.r3)+1,ce=1}else if(f.type===`stem`){let O=f.r1;if(F=O*Math.max(r.top-r.thick*.6,0),F>r.stemTop||r.stemTop<=0)continue;let H=r.Rstem*(.55+.45*O*O);O>.8&&(H+=(O-.8)/.2*r.Rc*.28);let ae=f.th+a*.03,rt=H*.35*f.r2;V=rt*Math.cos(ae),D=rt*Math.sin(ae),B=H*2.7+r.Rstem*.4,Z=.55+.35*O,Q=[I(.5,.72,c)*v[0],I(.42,.66,c)*v[1],I(.34,.6,c)*v[2]],j=.38*R(0,.08*r.stemTop+1,r.stemTop-F)}else if(f.type===`shock`){let O=n.shock*(.96+.06*f.r1);if(O<i.Rfb||n.shock>i.r1)continue;V=O*Math.cos(f.th),D=O*Math.sin(f.th);let H=Math.min(i.r5*.08,400)+i.Rfb*.1;F=f.r2*H,B=H*2.2+O*.04,Z=.85,Q=[.74*v[0],.66*v[1],.56*v[2]],j=.3*(1-R(i.r20,i.r1,n.shock))}else if(f.type===`rubble`){let O=i.Rfb+(i.r5-i.Rfb)*Math.sqrt(f.r1);if(n.shock<O)continue;let H=R(O,O+.12*i.r5,n.shock),ae=30+.02*i.r5;V=O*Math.cos(f.th),D=O*Math.sin(f.th),F=f.r2*ae*(1+H),B=Math.max(60,.07*i.r5)*(.7+.6*f.r3)*(1+.8*H),Z=.92,Q=[.66*v[0],.6*v[1],.53*v[2]],j=.26*H*(1-.45*R(0,1,(n.shock-O)/(.6*i.r5)))*(1-R(i.Trise*.8,i.Trise*2.6,a))*(1-.6*R(i.r20,i.r5,O))}else if(f.type===`wilson`){let O=a-i.tmax*.6;if(O<0||O>i.tmax*4+2.5)continue;let H=Math.min(n.shock,i.r20*1.4),ae=f.el;if(V=H*Math.cos(ae)*Math.cos(f.th),D=H*Math.cos(ae)*Math.sin(f.th),F=i.hob+H*Math.sin(ae)*.75,F<0)continue;B=H*.32,Q=[.97*v[0],.97*v[1],v[2]],j=.32*R(0,.3,O)*(1-R(i.tmax*2,i.tmax*4+2.5,O))}else{let O=Math.min(n.shock,i.r20*1.2),H=r.Rstem*.9*R(0,i.Trise*.3,a)+50;if(O<10)continue;let ae=O*Math.sqrt(f.r1);V=ae*Math.cos(f.th),D=ae*Math.sin(f.th),F=f.r2*H,B=H*1.8+O*.15,Z=.9,Q=[.78*v[0],.7*v[1],.62*v[2]],j=.2*(1-R(i.Trise*.4,i.Trise*1.1,a))}if(y&&x){let O=0,H=0,ae=V+(f.wx||0),rt=D+(f.wy||0),Ht=Math.pow(Math.max(F,50)/Math.max(.5*i.H,500),.25);for(let fe of y){let At=1-R(.6*fe.R,1.5*fe.R,Math.hypot(ae-fe.x,rt-fe.y));At>0&&(O+=fe.dx*fe.U*At*Ht,H+=fe.dy*fe.U*At*Ht)}let Ge=Math.hypot(O,H);if(Ge>0){let fe=.3*Ge*Math.sin(_*.9+f.th*7+f.r2*13);f.wx=(f.wx||0)+(O-H/Ge*fe)*x,f.wy=(f.wy||0)+(H+O/Ge*fe)*x,f.wz=(f.wz||0)+.05*Ge*(f.r3-.4)*x,f.ws=(f.ws||0)+.6*Ge*x/Math.max(B,50),n.blown=!0}}if(f.wx&&(V+=f.wx,D+=f.wy,F+=f.wz||0),f.ws&&(B*=1+f.ws,j/=(1+f.ws)*(1+f.ws)),j*=n.cloudA,B<.5||j<=.005)continue;let Ae=n.local(V,D,F,new Cesium.Cartesian3),ue=ge(ce*o),Pe=be*l*(.6+.6*E),Ue=.95+.1*f.r4;t.push({pos:Ae,d:Cesium.Cartesian3.distanceSquared(Ae,k),alpha:j,size:B,rot:f.rot,r:Math.min(1,(I(Q[0]*Z,u[0],ue)+Pe)*Ue),g:Math.min(1,(I(Q[1]*Z,u[1],ue)+Pe*.45)*Ue),b:Math.min(1,(I(Q[2]*Z,u[2],ue)+Pe*.12)*Ue)})}n.blown&&t.length===A&&(n.puffs=[])}gusts=[];dtReal=0;blowWind(n){let e=Cesium.Cartesian3,t=this.camera,i=Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(n,new e),a=d=>e.subtract(d,e.multiplyByScalar(i,e.dot(d,i),new e),d),r=a(e.subtract(n,t.positionWC,new e));e.magnitude(r)<.001*e.distance(n,t.positionWC)&&(r=a(e.clone(t.upWC))),e.normalize(r,r);let o=Cesium.Math.clamp(.8*e.distance(t.positionWC,n),2e3,6e5);this.gusts.push({P:e.clone(n),dir:r,R:o,U:o/2.5,t:0,dur:5,env:0}),this.whoosh(1.8,.5);let l=Cesium.Transforms.eastNorthUpToFixedFrame(n);for(let d=0;d<16;d++){let u=Math.random()*6.283,c=.45*o*Math.sqrt(Math.random()),p=Cesium.Matrix4.multiplyByPoint(l,new e(c*Math.cos(u),c*Math.sin(u),.02*o+Math.random()*.12*o),new e);this.spawn(p,{s0:.03*o,s1:.09*o,life:2.5+Math.random()*1.5,c0:[.82,.8,.76],c1:[.8,.79,.77],a0:.22,vel:e.multiplyByScalar(r,.15*o,new e)})}}updateGusts(n){this.dtReal=n;for(let e of this.gusts)e.t+=n,e.env=R(0,.4,e.t)*(1-R(e.dur-1.5,e.dur,e.t));this.gusts=this.gusts.filter(e=>e.t<e.dur)}windAt(n){let e=Cesium.Cartesian3,t=null;for(let i of this.gusts){let a=1-R(.6*i.R,1.5*i.R,e.distance(n,i.P));a<=0||(t=e.add(t||new e,e.multiplyByScalar(i.dir,i.U*i.env*a,new e),t||new e))}return t}updateBlast(n,e){let t=n.E;n.real+=e;let i=n.t>t.Trise*1.3?1:1+11*R(.8,4.5,n.real),a=n.t>t.Trise*3?0:e*i;n.t+=a;let r=n.t,o=n.shock;n.shock<n.maxR*1.2&&(n.shock+=340*t.shockBoost*(1+2.5*t.Rfb/Math.max(n.shock,t.Rfb))*a),n.hm&&(n.cshock=Math.min(n.shock,n.cshock+Math.max(n.shock-o,n.X.r5/1.5*e))),n.dtSim=a,this.spawnChunks(n);let l=Math.exp(-r/t.tglow),d=1-(n.tn?n.tn.day:1);n.flash=r<.04?1:.95*Math.exp(-(r-.04)/(.12+.35*t.tmax)),n.warm=.6*l*(1+d),n.mini&&(n.flash=n.warm=0),n.burn=R(0,t.tmax,r),n.glowB=1.6*l*(1+1.5*d),n.crv=R(t.tmax*.5,t.tmax*3+1,r);let u=Math.min(1,R(0,1.5,n.real)*1.2)*Math.exp(-n.real/20);if(n.heat=n.real>2&&u<.01?0:u,!n.splatted&&(n.shock>=t.r1||!this.animating(n))&&(n.splatted=!0,this.tileset&&this.splat(n)),n.blown&&!this.gusts.length&&n.puffs.length&&(n.cloudA=Math.max(0,n.cloudA-e/2),n.cloudA||(n.puffs=[])),n.retired&&n.puffs.length&&(n.cloudA=Math.max(0,n.cloudA-e/8),n.cloudA||(n.puffs=[])),n.groundMat){let c=n.groundMat.uniforms;c.shock=n.shock/n.maxR,c.glow=Math.min(.9,1.2*l),c.burn=R(0,t.tmax*2,r),c.crv=n.crv}if(n.mini||this.addRing(n,`fb`,t.Rfb,`#ffd84a`),n.mini||r>t.tmax&&(this.addRing(n,`rad`,t.rrad,`#55dd66`),this.addRing(n,`th`,t.rth,`#ffb84d`)),!n.mini&&n.shock>t.r20&&this.addRing(n,`p20`,t.r20,`#ff3030`),!n.mini&&n.shock>t.r5&&this.addRing(n,`p5`,t.r5,`#ff8a2a`),!n.mini&&n.shock>t.r1&&this.addRing(n,`p1`,t.r1,`#7fb2ff`),!n.heard){let c=Cesium.Cartesian3.distance(this.camera.positionWC,n.local(0,0,t.hob));if(n.shock>=c||r*340*t.shockBoost>=c){n.heard=!0;let p=c/Math.max(t.r1,1);this.boom(Math.min(1,.25+.9/(1+p*.8))*(n.gen?.6:1),Math.min(14,2.2+Math.log10(t.W+1)*1.6),ge(p/6)),this.addShake(Math.min(.03,.012/(.3+p))*(n.gen?.6:1))}}for(let c of n.children){if(c.done||n.shock<c.dist)continue;c.done=!0;let p=Cesium.Cartographic.fromCartesian(n.local(c.dist*Math.cos(c.a),c.dist*Math.sin(c.a),0));p.height=this.surfaceHeight(p)??Cesium.Cartographic.fromCartesian(n.groundPos).height,this.detonate(Cesium.Cartographic.toCartesian(p),U($({},n.w),{W:c.W,id:void 0}),{gen:n.gen+1,root:n.root})}}spawn(n,e){let t=this.bb(null,e.glow?`glow`:`puff`,{sizeInMeters:!0,position:n,width:e.s0,height:e.s0,rotation:Math.random()*6.28});this.particles.push({b:t,pos:Cesium.Cartesian3.clone(n),age:0,life:e.life,s0:e.s0,s1:e.s1,c0:e.c0,c1:e.c1,a0:e.a0??.55,vel:e.vel,lit:e.glow})}updateParticles(n){let e=this.tint;for(let t=this.particles.length-1;t>=0;t--){let i=this.particles[t];i.age+=n;let a=i.age/i.life;if(a>=1){this.rm(i.b),this.particles.splice(t,1);continue}if(i.vel&&(Cesium.Cartesian3.add(i.pos,Cesium.Cartesian3.multiplyByScalar(i.vel,n,new Cesium.Cartesian3),i.pos),i.b.position=i.pos),this.gusts.length){let l=this.windAt(i.pos);l&&(Cesium.Cartesian3.add(i.pos,Cesium.Cartesian3.multiplyByScalar(l,n,l),i.pos),i.b.position=i.pos)}i.b.width=i.b.height=I(i.s0,i.s1,Math.sqrt(a));let r=i.lit?[1,1,1]:e,o=i.lit?a:1-Math.pow(1-a,4);i.b.color=new Cesium.Color(I(i.c0[0],i.c1[0]*r[0],o),I(i.c0[1],i.c1[1]*r[1],o),I(i.c0[2],i.c1[2]*r[2],o),i.a0*(1-a)*Math.min(1,i.age*8))}}spawnChunks(n){if(!this.tileset||!n.hm||n.retired)return;let e=n.X,t=Cesium.Cartesian3,i=Math.max(n.chunkR||0,.3*e.Rfb),a=Math.min(n.cshock,e.r5);if(a<=i)return;n.chunkR=a;let r=this.camera.positionWC;if(t.distance(r,n.groundPos)>3*e.r5+2e3||this.chunks.length>=600)return;let l=Math.PI*(a*a-i*i)/1e6,d=this.cv.clientHeight/(2*Math.tan((this.camera.frustum.fovy||1)/2)),u=Math.min(40,600-this.chunks.length,Math.round(l*60*(n.urban??.3)+Math.random()));for(n.enuO||(n.enuO=Cesium.Transforms.eastNorthUpToFixedFrame(n.origin));u>0;u--){let c=Math.random()*6.2832,p=Math.sqrt(i*i+Math.random()*(a*a-i*i)),v=p*Math.cos(c),b=p*Math.sin(c),S=3+12*Math.random()**2,k=Cesium.Matrix4.multiplyByPoint(n.enuO,new t(v,b,this.hmAt(n,v,b)+6+Math.random()*25),new t);if(S/Math.max(t.distance(r,k),1)*d<1)continue;let m=1-.6*R(e.r20,e.r5,p),x=(30+80*Math.random())*m,_=15+40*Math.random(),y=Cesium.Matrix4.multiplyByPointAsVector(n.enuO,new t(x*Math.cos(c),x*Math.sin(c),_),new t),A=this.bb(null,`chunk`,{sizeInMeters:!0,position:k,width:S,height:S*(.6+.5*Math.random()),rotation:Math.random()*6.28});this.chunks.push({b:A,pos:k,vel:y,D:n,size:S,spin:(Math.random()-.5)*8,bounced:!1,rest:0})}}updateChunks(n){if(!this.chunks.length)return;let e=Cesium.Cartesian3,t=this.tint,i=new e,a=new e;for(let r=this.chunks.length-1;r>=0;r--){let o=this.chunks[r],l=o.D;if(o.rest>0){o.rest+=n;let c=1-R(4,10,o.rest);if(c<=0){this.rm(o.b),this.chunks.splice(r,1);continue}o.b.color=new Cesium.Color(t[0],t[1],t[2],c);continue}e.add(o.vel,e.multiplyByScalar(l.up,-9.81*n,a),o.vel),e.add(o.pos,e.multiplyByScalar(o.vel,n,a),o.pos),o.b.position=o.pos,o.b.rotation+=o.spin*n,Cesium.Matrix4.multiplyByPoint(l.invEnu,o.pos,i);let d=(l.hm?this.hmAt(l,i.x,i.y):0)+this.deformAt(o.pos)+o.size*.3;if(i.z>d)continue;let u=e.dot(o.vel,l.up);o.bounced?(o.rest=.001,o.vel=new e):(o.bounced=!0,e.add(e.multiplyByScalar(o.vel,.35,o.vel),e.multiplyByScalar(l.up,-u*.35*1.6,a),o.vel),o.spin*=.5,Math.random()<.35&&this.spawn(e.clone(o.pos),{s0:o.size*1.2,s1:o.size*5,life:2.2,c0:[.62,.57,.5],c1:[.55,.5,.45],a0:.35}))}}launchFlyer(n){let e=this.bb(null,n.image||`glow`,{sizeInMeters:!n.headPixels,position:n.path(0),width:n.headPixels||n.headSize,height:n.headPixels||n.headSize,color:n.headColor,alignedAxis:Cesium.Cartesian3.ZERO}),t=U($({},n),{t:0,head:e,acc:0,size:n.headPixels||n.headSize});return this.flyers.push(t),t}updateFlyers(n){for(let e of[...this.flyers]){e.t+=n;let t=Math.min(1,e.t/e.dur),i=e.path(t);if(e.head.position=i,e.orient){let a=e.path(Math.min(1,t+.002)),r=Cesium.Cartesian3.subtract(a,i,new Cesium.Cartesian3);Cesium.Cartesian3.magnitude(r)>0&&(e.head.alignedAxis=Cesium.Cartesian3.normalize(r,r))}else e.head.width=e.head.height=e.size*(.85+Math.random()*.3);if(e.onStep&&e.onStep(t,i),e.trail)for(e.acc+=n;e.acc>e.trail.every;)e.acc-=e.trail.every,this.spawn(e.path(Math.max(0,t-.003*Math.random())),{s0:e.trail.size*.4,s1:e.trail.size*(1.4+Math.random()),life:e.trail.life,c0:e.trail.c0,c1:e.trail.c1,a0:e.trail.a0});t>=1&&(this.rm(e.head),e.entity&&this.viewer.entities.remove(e.entity),this.flyers=this.flyers.filter(a=>a!==e),e.onArrive&&e.onArrive())}}smallBoom(n,e=1){e*=2.2;let t=Cesium.Cartesian3,i=Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(n,new t);this.spawn(n,{glow:!0,s0:30*e,s1:140*e,life:.35,c0:[1,.95,.8],c1:[1,.6,.2],a0:1});for(let o=0;o<6;o++){let l=t.multiplyByScalar(i,(6+Math.random()*10)*e,new t);this.spawn(n,{s0:20*e,s1:(70+Math.random()*50)*e,life:2.5+Math.random()*3,c0:[1,.6,.25],c1:[.22,.2,.19],a0:.7,vel:l})}let a=Cesium.Transforms.eastNorthUpToFixedFrame(n);for(let o=0;o<6;o++){let l=o/6*Math.PI*2+Math.random();this.spawn(Cesium.Matrix4.multiplyByPoint(a,new t(Math.cos(l)*25*e,Math.sin(l)*25*e,5),new t),{s0:20*e,s1:80*e,life:3,c0:[.7,.62,.52],c1:[.6,.55,.5],a0:.4})}this.smallBoomSound(n),this.tileset&&this.detonate(n,{id:`mini`,kind:`mini`,W:.0039*(e/2.2)**3,air:!1},{mini:!0});let r=t.distance(this.camera.positionWC,n);r<2e3*e&&this.addShake(.001*e*(1-r/(2e3*e)))}groundAt(n,e){return n.height=this.surfaceHeight(n)??e,Cesium.Cartographic.toCartesian(n)}fireFromSky(n,e){this.prepFor(n,e);let t=Cesium.Cartesian3,i=Ye(e.W,e.air,e.hob),a=Cesium.Transforms.eastNorthUpToFixedFrame(n),r=(S,k,m)=>Cesium.Matrix4.multiplyByPoint(a,new t(S,k,m),new t),o=e.kind===`rod`,l=Math.random()*Math.PI*2,d=Cesium.Math.toRadians(o?84:25+Math.random()*20),u=o?8e4:Math.max(12e4,(e.size||50)*40),c=[0,0,i.hob],p=[u*Math.cos(d)*Math.cos(l),u*Math.cos(d)*Math.sin(l),i.hob+u*Math.sin(d)],v=o?120:Math.max(500,(e.size||50)*12),b=o?.9:2.4;this.whoosh(b,o?1.8:.7),this.launchFlyer({path:S=>r(I(p[0],c[0],S),I(p[1],c[1],S),I(p[2],c[2],S)),dur:b,headSize:v*1.6,headColor:o?new Cesium.Color(.8,.9,1,1):new Cesium.Color(1,.85,.6,1),trail:{size:v,life:o?1.2:5,c0:o?[.85,.92,1]:[1,.7,.35],c1:[.42,.4,.38],every:o?.012:.018,a0:.55},onArrive:()=>this.detonate(n,e)})}makeShape(n){let e=Cesium.PerInstanceColorAppearance.VERTEX_FORMAT;return n.map(t=>{let i=t.geom===`box`?Cesium.BoxGeometry.fromDimensions({dimensions:new Cesium.Cartesian3(...t.size),vertexFormat:e}):t.geom===`ellipsoid`?new Cesium.EllipsoidGeometry({radii:new Cesium.Cartesian3(...t.size),vertexFormat:e,stackPartitions:16,slicePartitions:24}):new Cesium.CylinderGeometry({length:t.size.length,topRadius:t.size.top,bottomRadius:t.size.bottom,vertexFormat:e,slices:16}),a=Cesium.Color.fromCssColorString(t.color).withAlpha(t.alpha??1);return{prim:this.scene.primitives.add(new Cesium.Primitive({geometryInstances:new Cesium.GeometryInstance({geometry:i,attributes:{color:Cesium.ColorGeometryInstanceAttribute.fromColor(a)}}),appearance:new Cesium.PerInstanceColorAppearance({translucent:a.alpha<1,closed:!0}),asynchronous:!1})),at:t.at||[0,0,0]}})}poseShape(n,e){for(let t of n)t.prim.modelMatrix=Cesium.Matrix4.multiply(e,Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(...t.at)),new Cesium.Matrix4)}removeShape(n){n.forEach(e=>this.scene.primitives.remove(e.prim))}frameAt(n,e=0){return Cesium.Transforms.headingPitchRollToFixedFrame(n,new Cesium.HeadingPitchRoll(e,0,0))}launchMode=!1;get silo(){return this.launchMode&&at(this.tool)}setLaunchMode(n){this.launchMode=n,n||this.removeBase(),this.updateHint(),this.poke()}setBase(n){this.base&&this.viewer.entities.remove(this.base.entity);let e=Cesium.Color.fromCssColorString(`#ffd23f`);this.base={pos:Cesium.Cartesian3.clone(n),entity:this.viewer.entities.add({position:n,point:{pixelSize:13,color:e,outlineColor:Cesium.Color.BLACK,outlineWidth:3,disableDepthTestDistance:Number.POSITIVE_INFINITY},label:{text:`SILO`,font:`700 12px Roboto, system-ui`,pixelOffset:new Cesium.Cartesian2(0,-20),fillColor:e,outlineColor:Cesium.Color.BLACK,outlineWidth:4,style:Cesium.LabelStyle.FILL_AND_OUTLINE,disableDepthTestDistance:Number.POSITIVE_INFINITY}})},this.updateHint()}geoPath(n,e,t){let i=Cesium.Cartographic.fromCartesian(n),a=Cesium.Cartographic.fromCartesian(e),r=new Cesium.EllipsoidGeodesic(i,a);return{path:l=>{let d=r.interpolateUsingFraction(l);return d.height=I(i.height,a.height,l)+t(l,r.surfaceDistance),Cesium.Cartographic.toCartesian(d)},dist:r.surfaceDistance}}ballistic(n,e){return this.geoPath(n,e,(t,i)=>(Math.min(12e5,i*.22)+Math.min(15e3,2e3+i*.3))*4*t*(1-t))}launch(n,e){this.prepFor(n,e);let{path:t,dist:i}=this.ballistic(this.base.pos,n),a=[];for(let d=0;d<=120;d++)a.push(t(d/120));let r=this.viewer.entities.add({polyline:{positions:a,width:3,material:this.hiMat(`#ffd23f`,!0),depthFailMaterial:this.hiMat(`#ffd23f`,!0)}}),o=2.5+5.5*Math.min(1,i/9e6),l=Math.max(120,Math.min(12e4,i*.012));this.whoosh(Math.min(2.5,o),1.2),this.launchFlyer({path:t,dur:o,headPixels:20,headColor:new Cesium.Color(1,.75,.4,1),entity:r,trail:{size:l,life:4,c0:[1,.85,.6],c1:[.85,.85,.85],every:.025,a0:.55},onArrive:()=>{this.deliver(n,e),i>=55e5&&this.ev.unlock(`icbm`)}})}fireCruise(n,e){let t=Cesium.Cartesian3,i=Cesium.Transforms.eastNorthUpToFixedFrame(n),a;if(this.silo&&this.base)a=this.base.pos;else{let d=this.camera.heading+Math.PI+(Math.random()-.5)*.5,u=25e3;a=Cesium.Matrix4.multiplyByPoint(i,new t(Math.sin(d)*u,Math.cos(d)*u,0),new t)}let{path:r,dist:o}=this.geoPath(a,n,(d,u)=>300*R(0,Math.min(.08,2e3/u),d)*(1-R(1-Math.min(.08,2e3/u),1,d))),l=Cesium.Math.clamp(o/2500,2,14);this.whoosh(Math.min(2,l),1.6),this.launchFlyer({path:r,dur:l,headPixels:12,headColor:new Cesium.Color(1,.85,.55,1),trail:{size:Math.max(40,Math.min(3e3,o*.004)),life:2.5,c0:[1,.95,.85],c1:[.8,.8,.8],every:.03,a0:.4},onArrive:()=>{this.smallBoom(n,2.2*Math.cbrt(e.W/45e-5)),this.ev.unlock(`cruise`)}})}placeTurret(n){this.turrets.length>=4&&this.removeTurret(this.turrets.shift());let e=this.makeShape([{geom:`cylinder`,size:{length:4,top:5,bottom:6},at:[0,0,2],color:`#3c434c`},{geom:`box`,size:[7,5,3],at:[0,0,5.5],color:`#6b7682`},{geom:`box`,size:[16,.8,.8],at:[8,-1.2,6.2],color:`#2fd3e6`},{geom:`box`,size:[16,.8,.8],at:[8,1.2,6.2],color:`#2fd3e6`}]),t={pos:Cesium.Cartesian3.clone(n),shape:e,cool:.6,aim:Math.random()*6.28};this.poseShape(e,this.frameAt(n,t.aim));t.entity=this.viewer.entities.add({position:n,point:{pixelSize:9,color:Cesium.Color.fromCssColorString(`#2fd3e6`),outlineColor:Cesium.Color.BLACK,outlineWidth:3,disableDepthTestDistance:Number.POSITIVE_INFINITY}}),this.turrets.push(t),this.ev.unlock(`railgun`),this.updateHint()}removeTurret(n){this.removeShape(n.shape),this.viewer.entities.remove(n.entity)}updateTurrets(n){let e=Cesium.Cartesian3;for(let t of this.turrets){if(t.cool-=n,t.cool>0)continue;t.cool=.9+Math.random()*.8;let i=Cesium.Transforms.eastNorthUpToFixedFrame(t.pos),a=Math.random()*Math.PI*2,r=3e3+Math.random()*12e3;t.aim=Math.PI/2-a,this.poseShape(t.shape,this.frameAt(t.pos,t.aim-Math.PI/2));let o=Cesium.Cartographic.fromCartesian(Cesium.Matrix4.multiplyByPoint(i,new e(Math.cos(a)*r,Math.sin(a)*r,0),new e)),l=this.groundAt(o,Cesium.Cartographic.fromCartesian(t.pos).height),d=Cesium.Matrix4.multiplyByPoint(i,new e(Math.cos(a)*16,Math.sin(a)*16,6),new e);this.spawn(d,{glow:!0,s0:20,s1:70,life:.2,c0:[.7,.95,1],c1:[.4,.8,1],a0:1}),this.zap();let{path:u}=this.geoPath(d,l,(c,p)=>p*.04*4*c*(1-c));this.launchFlyer({path:u,dur:.35+r/25e3,headPixels:9,headColor:new Cesium.Color(.75,.97,1,1),trail:{size:40,life:.8,c0:[.7,.95,1],c1:[.6,.75,.85],every:.008,a0:.6},onArrive:()=>this.smallBoom(l,1.6)})}}planes=[];startLine(n){this.lineStart=Cesium.Cartesian3.clone(n),this.hover=Cesium.Cartesian3.clone(n),this.rubber=this.viewer.entities.add({polyline:{positions:new Cesium.CallbackProperty(()=>this.liftedLine(this.lineStart,this.hover||this.lineStart),!1),width:4,material:this.hiMat(`#ffd23f`,!0),depthFailMaterial:this.hiMat(`#ffd23f`,!0)}}),this.updateHint()}liftedLine(n,e){let t=Cesium.Cartographic.fromCartesian(n),i=Cesium.Cartographic.fromCartesian(e),a=[];for(let r=0;r<=24;r++){let o=r/24;a.push(Cesium.Cartesian3.fromRadians(I(t.longitude,i.longitude,o),I(t.latitude,i.latitude,o),I(t.height,i.height,o)+4))}return a}cancelLine(){this.rubber&&this.viewer.entities.remove(this.rubber),this.rubber=null,this.lineStart=null}makeBomber(){return this.makeShape([{geom:`ellipsoid`,size:[24,2.4,2.6],at:[0,0,0],color:`#2c3238`},{geom:`box`,size:[9,56,.9],at:[1,0,.4],color:`#22272c`},{geom:`box`,size:[5,18,.7],at:[-20,0,1.2],color:`#22272c`},{geom:`box`,size:[6,.7,8],at:[-20,0,4.5],color:`#1b1f23`},{geom:`cylinder`,size:{length:5,top:1.1,bottom:1.1},at:[3,-12,-1.6],color:`#59616b`},{geom:`cylinder`,size:{length:5,top:1.1,bottom:1.1},at:[3,12,-1.6],color:`#59616b`}])}carpetBomb(n,e,t){let i=Cesium.Cartographic.fromCartesian(n),a=Cesium.Cartographic.fromCartesian(e),r=new Cesium.EllipsoidGeodesic(i,a),o=Math.max(200,r.surfaceDistance),l=Cesium.Math.clamp(o*.12,120,9e3),d=Math.max(i.height,a.height)+l,u=Math.max(2500,l*5),c=o+2*u,p=(x,_)=>{let y=(x-u)/o,A=r.interpolateUsingFraction(Math.max(-u/o,Math.min(1+u/o,y))),E=r.startHeading+(r.endHeading-r.startHeading)*ge(y),f=Cesium.Cartographic.toCartesian(new Cesium.Cartographic(A.longitude,A.latitude,d)),V=Cesium.Transforms.eastNorthUpToFixedFrame(f);return{pos:Cesium.Matrix4.multiplyByPoint(V,new Cesium.Cartesian3(Math.cos(E)*_,-Math.sin(E)*_,0),new Cesium.Cartesian3),hd:E}},b=c/Cesium.Math.clamp(o/6,160,900),S=Math.max(60,o/30),k=Math.max(90,Math.min(400,o*.03));this.whoosh(Math.min(4,b*.4),.5),this.ev.unlock(`carpet`);let m=a.height;[-k,0,k].forEach((x,_)=>{let y=this.makeBomber(),A=this.bb(null,`glow`,{sizeInMeters:!1,width:16,height:16,color:new Cesium.Color(1,.15,.15,1),disableDepthTestDistance:5e3});this.planes.push({shape:y,strobe:A,t:-_*.35,dur:b,total:c,fly:p,side:x,nextDrop:u+_%2*S*.5,lead:u,len:o,spacing:S,w:t,lastH:m,trailAcc:0})})}updatePlanes(n){for(let e=this.planes.length-1;e>=0;e--){let t=this.planes[e];t.t+=n;let i=ge(t.t/t.dur),a=i*t.total,{pos:r,hd:o}=t.fly(a,t.side);this.poseShape(t.shape,this.frameAt(r,o-Math.PI/2)),t.strobe.position=r;let l=Math.floor(t.t*2.5)%2===0;for(t.strobe.color=l?new Cesium.Color(1,.15,.15,1):new Cesium.Color(1,1,1,.9),t.trailAcc+=n;t.trailAcc>.05;)t.trailAcc-=.05,this.spawn(r,{s0:10,s1:55,life:7,c0:[1,1,1],c1:[.95,.95,.97],a0:.7});for(;a>=t.nextDrop&&t.nextDrop<=t.lead+t.len;){let d=t.fly(t.nextDrop,t.side).pos,u=Cesium.Cartographic.fromCartesian(d);this.dropBomb(d,this.groundAt(new Cesium.Cartographic(u.longitude,u.latitude,0),t.lastH),t.w),t.nextDrop+=t.spacing}i>=1&&(this.removeShape(t.shape),this.rm(t.strobe),this.planes.splice(e,1))}}dropBomb(n,e,t){let i=this.bb(null,`glow`,{sizeInMeters:!1,width:6,height:6,position:n,color:new Cesium.Color(.05,.05,.05,1)}),a=Math.sqrt(2*Math.max(50,Cesium.Cartesian3.distance(n,e))/9.81)*.5;this.bombs.push({b:i,from:n,to:e,t:0,dur:Math.max(.8,a),w:t})}updateBombs(n){for(let e=this.bombs.length-1;e>=0;e--){let t=this.bombs[e];t.t+=n;let i=Math.min(1,t.t/t.dur);t.b.position=Cesium.Cartesian3.lerp(t.from,t.to,i*i,new Cesium.Cartesian3),i>=1&&(this.rm(t.b),this.bombs.splice(e,1),this.smallBoom(t.to,1.3))}}ufos=[];abducted=0;spawnUfo(n){this.ufos.length>=4&&this.removeUfo(this.ufos.shift());let e=Cesium.Transforms.eastNorthUpToFixedFrame(n),t=110,i=24,a=Math.random()*Math.PI*2,r=[{geom:`ellipsoid`,size:[16,16,2.6],at:[0,0,0],color:`#c3cad2`},{geom:`ellipsoid`,size:[11,11,1.6],at:[0,0,-1.4],color:`#5f6873`},{geom:`ellipsoid`,size:[6,6,4.8],at:[0,0,2.2],color:`#7fe9ff`,alpha:.75},{geom:`ellipsoid`,size:[5,5,.6],at:[0,0,-2.9],color:`#9dffb7`}];for(let l=0;l<10;l++){let d=l/10*Math.PI*2;r.push({geom:`ellipsoid`,size:[.8,.8,.8],at:[Math.cos(d)*15.6,Math.sin(d)*15.6,-.2],color:[`#ffe14d`,`#59ff9a`,`#ff5fd2`][l%3]})}let o={enu:e,target:Cesium.Cartesian3.clone(n),hover:t,beamR:i,t:0,arrive:3.2,beam:null,people:[],spawn:0,spin:0,from:[Math.cos(a)*6e3,Math.sin(a)*6e3,3500],shape:this.makeShape(r),marker:this.viewer.entities.add({position:n,point:{pixelSize:8,color:Cesium.Color.fromCssColorString(`#59ff9a`),outlineColor:Cesium.Color.BLACK,outlineWidth:3,disableDepthTestDistance:Number.POSITIVE_INFINITY}})};this.ufos.push(o),this.theremin(),this.updateHint()}removeUfo(n){this.removeShape(n.shape),n.beam&&this.viewer.entities.remove(n.beam),this.viewer.entities.remove(n.marker),n.people.forEach(e=>this.removeShape(e.shape))}makePerson(){let n=[`#e53935`,`#1e88e5`,`#43a047`,`#fdd835`,`#8e24aa`,`#fb8c00`,`#eceff1`][Math.floor(Math.random()*7)];return this.makeShape([{geom:`cylinder`,size:{length:.85,top:.12,bottom:.15},at:[0,0,.42],color:`#37474f`},{geom:`cylinder`,size:{length:.65,top:.22,bottom:.18},at:[0,0,1.15],color:n},{geom:`ellipsoid`,size:[.12,.12,.14],at:[0,0,1.63],color:`#f1c27d`}])}updateUfos(n){let e=Cesium.Cartesian3;for(let t of this.ufos){t.t+=n,t.spin+=n*.8;let i=R(0,t.arrive,t.t),a=1.5*Math.sin(t.t*1.6),r=I(t.from[0],0,i),o=I(t.from[1],0,i),l=I(t.from[2],t.hover,i)+a*i,d=Cesium.Matrix4.multiplyByPoint(t.enu,new e(r,o,l),new e);if(this.poseShape(t.shape,this.frameAt(d,t.spin)),!(t.t<t.arrive)){if(t.beam||(t.beam=this.viewer.entities.add({position:Cesium.Matrix4.multiplyByPoint(t.enu,new e(0,0,(t.hover-3)/2),new e),cylinder:{length:t.hover-3,topRadius:6,bottomRadius:t.beamR,material:Cesium.Color.fromCssColorString(`#a8ffbf`).withAlpha(.2),outline:!0,outlineColor:Cesium.Color.fromCssColorString(`#59ff9a`).withAlpha(.6),numberOfVerticalLines:12}}),this.ev.unlock(`ufo`)),t.spawn-=n,t.spawn<=0&&t.people.length<40){t.spawn=.35+Math.random()*.4;let u=Math.sqrt(Math.random())*t.beamR*.85,c=Math.random()*Math.PI*2;t.people.push({r:u,th:c,z:0,v:.6,spin:(Math.random()<.5?-1:1)*(.4+Math.random()*.5),tumble:Math.random()*6,shape:this.makePerson()})}for(let u=t.people.length-1;u>=0;u--){let c=t.people[u];c.v=Math.min(9,c.v+1.2*n),c.z+=c.v*n,c.th+=c.spin*n,c.tumble+=n;let p=c.z/t.hover,v=c.r*(1-.8*p),b=Cesium.Matrix4.multiplyByPoint(t.enu,new e(v*Math.cos(c.th),v*Math.sin(c.th),c.z),new e),S=Cesium.Transforms.headingPitchRollToFixedFrame(b,new Cesium.HeadingPitchRoll(c.th,Math.sin(c.tumble)*.6*p,Math.cos(c.tumble*.8)*.8*p));this.poseShape(c.shape,S),c.z>=t.hover-6&&(this.removeShape(c.shape),t.people.splice(u,1),this.abducted++,this.ev.abducted(this.abducted))}}}}theremin(){let n=this.audio();if(!n)return;let e=n.currentTime,t=n.createOscillator(),i=n.createOscillator(),a=n.createGain(),r=n.createGain();t.type=`sine`,t.frequency.setValueAtTime(420,e),t.frequency.exponentialRampToValueAtTime(980,e+.9),t.frequency.exponentialRampToValueAtTime(610,e+2.2),i.frequency.value=6,a.gain.value=22,i.connect(a),a.connect(t.frequency),t.connect(r),r.connect(this.master),this.env(r,e,.16,.25,2.4),t.start(e),i.start(e),t.stop(e+2.8),i.stop(e+2.8)}hover=null;hoverRest=null;previewEnts=null;previewRadii(){let n=this.tool;if([`nuke`,`asteroid`,`rod`].includes(n.kind)){let e=Ye(n.W,n.air,n.hob);return[[e.r20,`#ff3b30`],[e.r5,`#ff9500`],[e.r1,`#4fc3ff`]]}return n.kind===`cruise`?[[60,`#ff9500`]]:n.kind===`railgun`?[[15e3,`#2fd3e6`],[3e3,`#2fd3e6`]]:n.kind===`ufo`?[[24,`#59ff9a`]]:n.kind===`duck`?[[130,`#ffd23f`]]:[]}ensurePreview(){if(this.previewEnts)return;let n=e=>this.viewer.entities.add({show:!1,polyline:{positions:new Cesium.CallbackProperty(()=>this.ringAt(e),!1),width:4,material:new Cesium.PolylineOutlineMaterialProperty({color:new Cesium.CallbackProperty(()=>Cesium.Color.fromCssColorString((this.previewRadii()[e]||[0,`#fff`])[1]),!1),outlineColor:Cesium.Color.BLACK,outlineWidth:1.6}),depthFailMaterial:new Cesium.PolylineOutlineMaterialProperty({color:Cesium.Color.WHITE.withAlpha(.55),outlineColor:Cesium.Color.BLACK.withAlpha(.55),outlineWidth:1})}});this.previewEnts={rings:[n(0),n(1),n(2)],dot:this.viewer.entities.add({show:!1,position:new Cesium.CallbackProperty(()=>this.hover,!1),point:{pixelSize:10,color:Cesium.Color.fromCssColorString(`#ffd23f`),outlineColor:Cesium.Color.BLACK,outlineWidth:3,disableDepthTestDistance:Number.POSITIVE_INFINITY}}),arc:this.viewer.entities.add({show:!1,polyline:{positions:new Cesium.CallbackProperty(()=>this.arcPreview(),!1),width:3,material:this.hiMat(`#ffd23f`,!0),depthFailMaterial:this.hiMat(`#ffd23f`,!0)}})}}ringAt(n){let e=this.previewRadii()[n];if(!e||!this.hover)return[];let t=e[0],i=Cesium.Cartographic.fromCartesian(this.hover),a=Cesium.Transforms.eastNorthUpToFixedFrame(this.hover),r=[];for(let o=0;o<=96;o++){let l=o/96*Math.PI*2,d=Cesium.Cartographic.fromCartesian(Cesium.Matrix4.multiplyByPoint(a,new Cesium.Cartesian3(Math.cos(l)*t,Math.sin(l)*t,0),new Cesium.Cartesian3));r.push(Cesium.Cartesian3.fromRadians(d.longitude,d.latitude,i.height+4))}return r}arcPreview(){if(!this.base||!this.hover)return[];let{path:n}=this.ballistic(this.base.pos,this.hover),e=[];for(let t=0;t<=60;t++)e.push(n(t/60));return e}updatePreview(){this.ensurePreview();let n=this.armed&&!!this.hover&&!this.drag,e=this.previewRadii();this.previewEnts.rings.forEach((t,i)=>t.show=n&&i<e.length),this.previewEnts.dot.show=n,this.previewEnts.arc.show=n&&this.silo&&!!this.base}async dropDuck(n){let e=Cesium.Cartesian3,t=Cesium.Transforms.eastNorthUpToFixedFrame(n),i=250,a={enu:t,z:2600,v:0,bounces:0,squash:1,yaw:Math.random()*Math.PI*2,scale:1,rest:!1};this.whoosh(1.6,1.4);try{let r=await Cesium.Model.fromGltfAsync({url:`https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/Duck/glTF-Binary/Duck.glb`,modelMatrix:Cesium.Matrix4.multiply(t,Cesium.Matrix4.fromTranslation(new e(0,0,2600)),new Cesium.Matrix4)});this.scene.primitives.add(r),await new Promise((o,l)=>{r.readyEvent.addEventListener(o),setTimeout(()=>l(/* @__PURE__ */ new Error(`timeout`)),15e3)}),a.scale=i/(r.boundingSphere.radius*2),r.minimumPixelSize=40,a.model=r}catch{let r=document.createElement(`canvas`);r.width=r.height=128;let o=r.getContext(`2d`);o.font=`100px serif`,o.textAlign=`center`,o.textBaseline=`middle`,o.fillText(`🦆`,64,70),a.bb=this.cols.misc.add({image:r,sizeInMeters:!0,width:i,height:i,position:n,verticalOrigin:Cesium.VerticalOrigin.BOTTOM})}this.ducks.push(a),this.ev.unlock(`duck`)}updateDucks(n){let e=Cesium.Cartesian3;for(let t of this.ducks){if(!t.rest&&(t.v-=2200*n,t.z+=t.v*n,t.z<=0)){if(t.z=0,this.squeak(),t.bounces===0){for(let r=0;r<24;r++){let o=r/24*Math.PI*2;this.spawn(Cesium.Matrix4.multiplyByPoint(t.enu,new e(Math.cos(o)*140,Math.sin(o)*140,20),new e),{s0:60,s1:260,life:2.5,c0:[.75,.68,.58],c1:[.6,.55,.5],a0:.5})}this.addShake(.004)}t.bounces<3?(t.v=Math.abs(t.v)*.42,t.bounces++,t.squash=.6):(t.rest=!0,t.v=0)}t.squash+=(1-t.squash)*Math.min(1,n*9),t.rest||(t.yaw+=n*.6);let i=t.scale*(1+(1-t.squash)*.5),a=t.scale*t.squash;if(t.model){let r=Cesium.Matrix4.multiply(t.enu,Cesium.Matrix4.fromTranslation(new e(0,0,t.z)),new Cesium.Matrix4);Cesium.Matrix4.multiply(r,Cesium.Matrix4.fromRotation(Cesium.Matrix3.fromRotationZ(t.yaw)),r),Cesium.Matrix4.multiply(r,Cesium.Matrix4.fromScale(new e(i,i,a)),r),t.model.modelMatrix=r}else t.bb&&(t.bb.position=Cesium.Matrix4.multiplyByPoint(t.enu,new e(0,0,t.z),new e))}}bb(n,e,t){let i=(n||this.cols[e]).add(t);return i.setImage(e,{puff:this.puffTex,glow:this.glowTex,jet:this.jetTex,ufo:this.ufoTex,person:this.personTex,chunk:this.chunkTex}[e]),i}rm(n){n._billboardCollection?.remove(n)}noDepth(n){n._rsTranslucent&&n._rsTranslucent.depthMask&&(n._rsTranslucent=Cesium.RenderState.fromCache({depthTest:{enabled:!0,func:Cesium.DepthFunction.LESS_OR_EQUAL},depthMask:!1,blending:Cesium.BlendingState.ALPHA_BLEND}))}recentering=!1;recenter(n){if(this.recentering=!1,this.drag)return;let e=this.camera,t=Cesium.Cartographic.fromCartesian(e.positionWC).height,i=performance.now()<=this.zoomOutUntil,a=this.maxPitch(t),r=null,o=4;if(e.pitch>a+.003&&(r=a),i){let d=R(15e4,25e5,t),u=I(e.pitch,Cesium.Math.toRadians(-88),d);d>0&&u<e.pitch-.002&&(r=Math.min(r??u,u),o=3*Math.max(d,.3))}if(r===null)return;this.recentering=!0;let l=Math.min(1,n*o);e.setView({orientation:{heading:i?this.recenterHeading??e.heading:e.heading,pitch:e.pitch+(r-e.pitch)*l,roll:0}})}maxPitch(n){return-Cesium.Math.toRadians(I(1,86,R(12e4,6e6,n)))}lastHeading=999;frame(n){this.applyShake(n),this.handleKeys(n),this.keepUpright(),this.applyZoom(n),this.recenter(n),this.updateSun(),this.runJobs(),this.tileset&&(this.tileset.enableCollision=!(this.blasts.length&&this.deformAt(this.camera.positionWC)<-10));let e=Cesium.Math.toDegrees(this.camera.heading);if(Math.abs(e-this.lastHeading)>.5&&(this.lastHeading=e,this.ev.heading(e)),this.noDepth(this.puffs),Object.values(this.cols).forEach(l=>this.noDepth(l)),this.updateGusts(n),this.updateFlyers(n),this.updateBombs(n),this.updateParticles(n),this.updateChunks(n),this.updateDucks(n),this.updateTurrets(n),this.updateUfos(n),this.updatePlanes(n),this.hoverPx&&this.armed){let l=this.pickWorld(this.hoverPx);l&&(this.hover=l),this.hoverPx=null}if(this.armed&&this.hover&&this.tileset&&!this.silo&&!this.lineStart){let l=this.hoverRest;!l||Cesium.Cartesian3.distance(l.p,this.hover)>25?this.hoverRest={p:Cesium.Cartesian3.clone(this.hover),t:performance.now(),done:!1}:!l.done&&performance.now()-l.t>350&&(l.done=!0,this.prepFor(l.p,this.tool))}this.updatePreview();let t=[],i=0,a=0;for(let l of[...this.blasts])l.done||(this.updateBlast(l,n),this.cloudItems(l,l.dtSim,t),i=Math.max(i,l.flash),a=Math.max(a,l.warm),l.retired&&!l.puffs.length&&!this.animating(l)&&(l.done=!0));this.FLASH=i,this.WARM=a,this.schedule(),t.sort((l,d)=>d.d-l.d);let r=this.puffPool;for(;r.length<t.length;)r.push(this.bb(this.puffs,`puff`,{sizeInMeters:!0,width:1,height:1,show:!1}));let o=new Cesium.Color;for(let l=0;l<r.length;l++){let d=r[l],u=t[l];if(!u){d.show&&(d.show=!1);continue}d.show=!0,d.position=u.pos,d.width=d.height=u.size,d.rotation=u.rot,o.red=u.r,o.green=u.g,o.blue=u.b,o.alpha=u.alpha,d.color=o}}};var ea=[`map`];var ta=[`file`];var na=(s,n)=>n.name;var si=(s,n)=>n.id;var ia=(s,n)=>n[0];function aa(s,n){s&1&&(Zo(0,`div`,9),Gf(1,`mat-spinner`,24),Zo(2,`span`),dI(3,`Loading the globe…`),rc()())}function ra(s,n){if(s&1){let e=RE();Zo(0,`div`,55),Kf(`click`,function(){Ol(e);let i=LE(2);return kl(i.panelOpen.set(!1))}),rc()}}function oa(s,n){if(s&1){let e=RE();Zo(0,`div`,56),Kf(`click`,function(){Ol(e);let i=LE(2);return kl(i.panelOpen.set(!1))}),rc()}}function sa(s,n){if(s&1&&(Zo(0,`span`,57)(1,`mat-icon`),dI(2,`rocket_launch`),rc(),dI(3),rc()),s&2){let e=LE(2);ip(`on`,e.has(`launch`)),Ny(3),dp(e.has(`launch`)?`From silo`:`Silo-ready`)}}function la(s,n){s&1&&(Zo(0,`span`,40)(1,`mat-icon`),dI(2,`block`),rc(),dI(3,`No silo`),rc())}function ca(s,n){if(s&1&&(Zo(0,`mat-icon`,66),dI(1,`rocket_launch`),rc()),s&2){let e=LE(4);ip(`on`,e.has(`launch`))}}function da(s,n){if(s&1&&(Zo(0,`span`,65),dI(1),rc()),s&2){let e=LE().$implicit,t=LE(3);Ny(),dp(t.fmtW(e.W))}}function ua(s,n){if(s&1){let e=RE();Zo(0,`button`,61),Kf(`click`,function(){let i=Ol(e).$implicit,a=LE(3);return kl(a.pick(i))}),DE(1,ca,2,2,`mat-icon`,62),Zo(2,`span`,63),dI(3),rc(),Zo(4,`span`,64),dI(5),rc(),DE(6,da,2,1,`span`,65),rc()}if(s&2){let e=n.$implicit,t=LE(3);ip(`sel`,e.id===t.tool().id)(`nosilo`,t.has(`launch`)&&!t.canSilo(e)),Wf(`matTooltip`,e.desc+(t.canSilo(e)?` · Can be launched from a silo.`:``)),Ny(),CE(t.canSilo(e)?1:-1),Ny(2),dp(e.icon),Ny(2),dp(e.name),Ny(),CE(e.W?6:-1)}}function ma(s,n){if(s&1&&(Zo(0,`div`,58),dI(1),rc(),Zo(2,`div`,59),TE(3,ua,7,9,`button`,60,si),rc()),s&2){let e=n.$implicit;Ny(),dp(e.name),Ny(2),_E(e.tools)}}function ha(s,n){if(s&1){let e=RE();Zo(0,`div`,67)(1,`button`,68),Kf(`click`,function(){Ol(e);let i=LE(2);return kl(i.toggleArmed())}),Zo(2,`mat-icon`),dI(3),rc(),dI(4),rc(),Zo(5,`button`,69),Kf(`click`,function(){Ol(e);let i=LE(2);return kl(i.clear())}),Zo(6,`mat-icon`),dI(7,`delete_sweep`),rc()()(),Zo(8,`div`,70),dI(9),rc()}if(s&2){let e=LE(2);Ny(),ip(`armed`,e.armed()),Ny(2),dp(e.armed()?`gps_fixed`:`gps_not_fixed`),Ny(),cc(``,e.armed()?`Armed`:`Arm`,` `),Ny(5),dp(e.hint())}}function pa(s,n){if(s&1){let e=RE();Zo(0,`button`,71),Kf(`click`,function(){Ol(e);let i=LE(2);return kl(i.clear())}),Zo(1,`mat-icon`),dI(2,`delete_sweep`),rc(),dI(3,`Clear everything`),rc()}}function ga(s,n){if(s&1){let e=RE();DE(0,ra,1,0,`div`,25),Zo(1,`section`,26),DE(2,oa,1,0,`div`,27),Zo(3,`header`)(4,`span`,28),dI(5,`Nuke Sim`),rc(),Gf(6,`span`,29),Zo(7,`button`,30),Kf(`click`,function(){Ol(e);let i=LE();return kl(i.showInfo.set(!i.showInfo()))}),Zo(8,`mat-icon`),dI(9,`info`),rc()(),Zo(10,`button`,31),Kf(`click`,function(){Ol(e);let i=LE();return kl(i.panelOpen.set(!1))}),Zo(11,`mat-icon`),dI(12),rc()()(),Zo(13,`label`,32)(14,`mat-icon`),dI(15,`search`),rc(),Zo(16,`input`,33,3),Kf(`keydown.enter`,function(){Ol(e);let i=UE(17),a=LE();return kl(a.search(i))}),rc()(),Zo(18,`div`,34)(19,`span`,35),dI(20),rc(),Zo(21,`div`,36)(22,`div`,37),dI(23),rc(),Zo(24,`div`,38),dI(25),rc()(),DE(26,sa,4,3,`span`,39)(27,la,4,0,`span`,40),rc(),Zo(28,`p`,41),dI(29),rc(),Zo(30,`div`,42),TE(31,ma,5,1,null,null,na),rc(),Zo(33,`div`,43)(34,`mat-button-toggle-group`,44),Kf(`change`,function(i){Ol(e);let a=LE();return kl(a.setOpts(i.value))}),Zo(35,`mat-button-toggle`,45)(36,`mat-icon`),dI(37,`rocket_launch`),rc()(),Zo(38,`mat-button-toggle`,46)(39,`mat-icon`),dI(40,`link`),rc()(),Zo(41,`mat-button-toggle`,47)(42,`mat-icon`),dI(43,`track_changes`),rc()(),Zo(44,`mat-button-toggle`,48)(45,`mat-icon`),dI(46,`map`),rc()(),Zo(47,`mat-button-toggle`,49)(48,`mat-icon`),dI(49),rc()()()(),Zo(50,`div`,50)(51,`mat-icon`),dI(52),rc(),Zo(53,`mat-slider`,51)(54,`input`,52),Kf(`input`,function(i){Ol(e);let a=LE();return kl(a.setSun(+i.target.value))}),rc()(),Zo(55,`span`,53),dI(56),rc()(),DE(57,ha,10,5)(58,pa,4,0,`button`,54),rc()}if(s&2){let e=LE();CE(e.mobile()?0:-1),Ny(2),CE(e.mobile()?2:-1),Ny(8),Wf(`matTooltip`,e.mobile()?`Close`:`Collapse`),Ny(2),dp(e.mobile()?`expand_more`:`left_panel_close`),Ny(8),dp(e.tool().icon),Ny(3),dp(e.tool().name),Ny(2),dp(e.toolMeta()),Ny(),CE(e.canSilo(e.tool())?26:e.has(`launch`)?27:-1),Ny(3),dp(e.tool().desc),Ny(2),_E(e.groups),Ny(3),Wf(`value`,e.opts()),Ny(),ip(`idle`,e.has(`launch`)&&!e.canSilo(e.tool())),Wf(`matTooltip`,e.launchTip()),Ny(14),dp(e.has(`sound`)?`volume_up`:`volume_off`),Ny(3),dp(e.sunIcon()),Ny(2),Wf(`value`,e.sunHour()),Ny(2),dp(e.sunLabel()),Ny(),CE(e.mobile()?58:57)}}function fa(s,n){if(s&1){let e=RE();Zo(0,`button`,72),Kf(`click`,function(){Ol(e);let i=LE();return kl(i.panelOpen.set(!0))}),Zo(1,`span`,73),dI(2),rc(),dI(3),rc()}if(s&2){let e=LE();Ny(2),dp(e.tool().icon),Ny(),cc(``,e.tool().name,` `)}}function _a(s,n){if(s&1){let e=RE();Zo(0,`div`,11)(1,`button`,74),Kf(`click`,function(){Ol(e);let i=LE();return kl(i.panelOpen.set(!0))}),Zo(2,`span`,73),dI(3),rc(),dI(4),rc(),Gf(5,`span`,29),Zo(6,`button`,75),Kf(`click`,function(){Ol(e);let i=LE();return kl(i.togglePlaces())}),Zo(7,`mat-icon`),dI(8,`bookmarks`),rc()(),Zo(9,`button`,76),Kf(`click`,function(){Ol(e);let i=LE();return kl(i.toggleArmed())}),Zo(10,`mat-icon`),dI(11),rc()()()}if(s&2){let e=LE();Ny(3),dp(e.tool().icon),Ny(),dp(e.tool().name),Ny(5),ip(`armed`,e.armed()),Ny(2),dp(e.armed()?`gps_fixed`:`gps_not_fixed`)}}function ba(s,n){if(s&1&&(Zo(0,`div`,13),dI(1),rc()),s&2){let e=LE();Ny(),dp(e.hint())}}function va(s,n){if(s&1&&(Zo(0,`div`,14),dI(1),rc()),s&2){let e=LE();Ny(),dp(e.statLine())}}function ya(s,n){if(s&1&&(Zo(0,`div`,15)(1,`mat-icon`),dI(2,`person_raised_hand`),rc(),dI(3),rc()),s&2){let e=LE();Ny(3),dp(e.abducted())}}function Ca(s,n){if(s&1&&(Zo(0,`div`,16)(1,`mat-icon`),dI(2,`info`),rc(),dI(3),rc()),s&2){let e=LE();Ny(3),dp(e.status())}}function xa(s,n){if(s&1){let e=RE();Zo(0,`div`,18)(1,`button`,77),Kf(`click`,function(){Ol(e);let i=LE();return kl(i.togglePlaces())}),Zo(2,`mat-icon`),dI(3),rc(),dI(4),rc(),Zo(5,`button`,78)(6,`mat-icon`),dI(7,`more_vert`),rc()()()}if(s&2){let e=LE(),t=UE(18);Ny(3),dp(e.placesOpen()?`expand_more`:`expand_less`),Ny(),cc(`Places (`,e.places().length,`) `),Ny(),Wf(`matMenuTriggerFor`,t)}}function ka(s,n){if(s&1&&(Zo(0,`button`,79)(1,`mat-icon`),dI(2,`more_vert`),rc()()),s&2){LE(2);let e=UE(18);Wf(`matMenuTriggerFor`,e)}}function Ma(s,n){if(s&1&&Gf(0,`img`,84),s&2){let e=LE().$implicit;Wf(`src`,e.thumb)}}function wa(s,n){s&1&&(Zo(0,`mat-icon`,85),dI(1,`landscape`),rc())}function Sa(s,n){if(s&1){let e=RE();Zo(0,`button`,83),Kf(`click`,function(){let i=Ol(e).$implicit,a=LE(2);return kl(a.go(i))}),DE(1,Ma,1,1,`img`,84)(2,wa,2,0,`mat-icon`,85),Zo(3,`span`,86),dI(4),rc(),Zo(5,`span`,87),Kf(`click`,function(i){let a=Ol(e).$implicit,r=LE(2);return kl(r.remove(a,i))}),Zo(6,`mat-icon`),dI(7,`close`),rc()()()}if(s&2){let e=n.$implicit;Wf(`matTooltip`,`Teleport to `+e.name),Ny(),CE(e.thumb?1:2),Ny(3),dp(e.name)}}function Ta(s,n){if(s&1){let e=RE();Zo(0,`div`,81)(1,`input`,88,4),Kf(`keydown.enter`,function(){Ol(e);let i=UE(2),a=LE(2);return kl(a.confirmSave(i))}),rc(),Zo(3,`button`,89),Kf(`click`,function(){Ol(e);let i=UE(2),a=LE(2);return kl(a.confirmSave(i))}),Zo(4,`mat-icon`),dI(5,`check`),rc()(),Zo(6,`button`,89),Kf(`click`,function(){Ol(e);let i=LE(2);return kl(i.saving.set(!1))}),Zo(7,`mat-icon`),dI(8,`close`),rc()()()}}function Aa(s,n){if(s&1){let e=RE();Zo(0,`button`,90),Kf(`click`,function(){Ol(e);let i=LE(2);return kl(i.saving.set(!0))}),Zo(1,`mat-icon`),dI(2,`add_location_alt`),rc(),Zo(3,`span`),dI(4,`Save view`),rc()()}}function Ea(s,n){if(s&1&&(Zo(0,`div`,19),DE(1,ka,3,1,`button`,79),TE(2,Sa,8,3,`button`,80,si),DE(4,Ta,9,0,`div`,81)(5,Aa,5,0,`button`,82),rc()),s&2){let e=LE();Ny(),CE(e.mobile()?1:-1),Ny(),_E(e.places()),Ny(2),CE(e.saving()?4:5)}}function Ia(s,n){if(s&1&&(Zo(0,`div`,91)(1,`span`),Gf(2,`i`),dI(3),rc(),Zo(4,`b`),dI(5),rc()()),s&2){let e=n.$implicit,t=LE(2);Ny(2),op(`background`,e[2]),Ny(),dp(e[0]),Ny(2),dp(t.km(e[1]))}}function Na(s,n){if(s&1){let e=RE();Zo(0,`section`,22)(1,`header`)(2,`span`,28),dI(3),rc(),Gf(4,`span`,29),Zo(5,`button`,89),Kf(`click`,function(){Ol(e);let i=LE();return kl(i.showInfo.set(!1))}),Zo(6,`mat-icon`),dI(7,`close`),rc()()(),TE(8,Ia,6,4,`div`,91,ia),Zo(10,`h4`),dI(11,`Controls`),rc(),Zo(12,`p`),dI(13,`Drag pan · Wheel / right-drag zoom · Middle-drag or Shift+drag rotate & tilt · Ctrl+drag look around · Double-click zoom in`),rc(),Zo(14,`p`)(15,`kbd`),dI(16,`D`),rc(),dI(17,` arm · `),Zo(18,`kbd`),dI(19,`M`),rc(),dI(20,` launch mode · `),Zo(21,`kbd`),dI(22,`K`),rc(),dI(23,` chain · `),Zo(24,`kbd`),dI(25,`L`),rc(),dI(26,` labels · `),Zo(27,`kbd`),dI(28,`Esc`),rc(),dI(29,` disarm · `),Zo(30,`kbd`),dI(31,`N`),rc(),dI(32,` north · `),Zo(33,`kbd`),dI(34,`U`),rc(),dI(35,` top-down · `),Zo(36,`kbd`),dI(37,`R`),rc(),dI(38,` reset`),rc(),Zo(39,`p`,92),dI(40,`Radii from Glasstone & Dolan scaling (like NUKEMAP). Asteroids and weird stuff: numbers for fun.`),rc(),Zo(41,`label`,93)(42,`mat-icon`),dI(43,`key`),rc(),Zo(44,`input`,94,5),Kf(`keydown.enter`,function(){Ol(e);let i=UE(45),a=LE();return kl(a.saveToken(i.value))}),rc()()()}if(s&2){let e=LE();Ny(3),dp(e.radii().length?e.tool().name:`Info`),Ny(5),_E(e.radii()),Ny(36),Wf(`value`,e.token())}}function Va(s,n){if(s&1){let e=RE();Zo(0,`button`,95),Kf(`click`,function(){Ol(e);let i=LE();return kl(i.reset())}),Ql(),Zo(1,`svg`,96),Gf(2,`path`,97)(3,`path`,98),rc()()}if(s&2){let e=LE();Ny(),op(`transform`,`rotate(`+-e.heading()+`deg)`)}}var Re={get(s,n){try{let e=localStorage.getItem(s);return e?JSON.parse(e):n}catch{return n}},set(s,n){try{localStorage.setItem(s,JSON.stringify(n))}catch{}}};var oi=class s{mapEl=vL.required(`map`);fileEl=vL.required(`file`);snack=w$1(Gt);engine;groups=Jn;fmtW=Ve;canSilo=at;launchTip=CI(()=>{let n=this.tool();return this.opts().includes(`launch`)?at(n)?`Launching from your silo (M)`:`Silo on, but ${n.name} cannot be fired from it: it is used directly`:`Launch from a silo (M): bombs, missiles and nukes only`});loading=wo(!0);mobile=wo(matchMedia(`(max-width: 760px)`).matches);panelOpen=wo(!matchMedia(`(max-width: 760px)`).matches);tool=wo(wt.find(n=>n.id===`littleboy`));armed=wo(!1);opts=wo([`rings`,...Re.get(`nsSound`,!0)?[`sound`]:[]]);sunHour=wo(Math.round(((/* @__PURE__ */ new Date()).getUTCHours()+(/* @__PURE__ */ new Date()).getUTCMinutes()/60)*4)/4);hint=wo(``);status=wo(``);stats=wo({count:0,area:0,cloud:0});abducted=wo(0);heading=wo(0);places=wo(Re.get(`nsPlaces`,[]));placesOpen=wo(Re.get(`nsPlacesOpen`,!1));saving=wo(!1);teleporting=wo(!1);showInfo=wo(!1);token=wo(Re.get(`ionTokenRaw`,``));toolMeta=CI(()=>{let n=this.tool();switch(n.kind){case`duck`:return`rubber · squeak`;case`ufo`:return`tractor beam`;case`wind`:return`gust · clears the clouds`;case`railgun`:return`${Ve(n.W)}/shot \xB7 auto`;case`carpet`:return`${Ve(n.W)} bombs \xB7 3 bombers`;case`cruise`:return`${Ve(n.W)} \xB7 conventional`;case`asteroid`:return`${Ve(n.W)} \xB7 ${n.air?`airburst`:`impact`}`;case`rod`:return`${Ve(n.W)} \xB7 kinetic`;default:return`${Ve(n.W)} \xB7 ${n.air?`airburst`:`surface`}`}});radii=CI(()=>{let n=this.tool();if(![`nuke`,`asteroid`,`rod`].includes(n.kind))return[];let e=Ye(n.W,n.air,n.hob);return[[`Fireball`,e.Rfb,`#ffd84a`],[`Radiation 500 rem`,e.rrad,`#55dd66`],[`20 psi · total destruction`,e.r20,`#ff3b30`],[`5 psi · buildings collapse`,e.r5,`#ff9500`],[`3rd-degree burns`,e.rth,`#ffb84d`],[`1 psi · windows shatter`,e.r1,`#4fc3ff`],[`Cloud top`,e.H,`#e6e9ee`]]});sunLabel=CI(()=>{let n=this.sunHour(),e=Math.floor(n),t=Math.round((n-e)*60);return`${String(e%24).padStart(2,`0`)}:${String(t).padStart(2,`0`)} UTC`});sunIcon=CI(()=>`light_mode`);statLine=CI(()=>{let n=this.stats();return`${n.count} blasts \xB7 ${Math.round(n.area).toLocaleString(`en-US`)} km\xB2 \xB7 ${(n.cloud/1e3).toFixed(1)} km`});constructor(){let n=w$1(he);ay(async()=>{try{let a=await Kn();this.token()&&(a.Ion.defaultAccessToken=this.token()),this.engine=new Tt(this.mapEl().nativeElement,this.tool(),{stats:r=>this.stats.set(r),toast:(r,o)=>this.toast(`${r}  ${o}`),unlock:()=>{},hint:r=>this.hint.set(r),status:r=>this.status.set(r),heading:r=>this.heading.set(r),abducted:r=>this.abducted.set(r)}),this.applyOpts(this.opts(),[]),this.engine.setSunHour(this.sunHour()),this.engine.setArmed(!1),this.loading.set(!1)}catch{this.status.set(`Could not load the 3D engine (CesiumJS). Check your connection.`)}});let e=matchMedia(`(max-width: 760px)`),t=()=>{this.mobile.set(e.matches),this.panelOpen.set(!e.matches)};e.addEventListener(`change`,t);let i=a=>{let r=a.target;if(r&&(r.tagName===`INPUT`||r.tagName===`TEXTAREA`))return;let o=a.key.toLowerCase(),l=d=>this.setOpts(this.opts().includes(d)?this.opts().filter(u=>u!==d):[...this.opts(),d]);o===`d`?this.toggleArmed():o===`k`?l(`chain`):o===`l`?l(`labels`):o===`m`?l(`launch`):o===`escape`&&(this.setArmed(!1),this.saving.set(!1))};document.addEventListener(`keydown`,i),n.onDestroy(()=>{document.removeEventListener(`keydown`,i),e.removeEventListener(`change`,t),this.engine?.dispose()})}pick(n){this.tool.set(n),this.engine?.setTool(n),this.armed()||this.setArmed(!0),this.mobile()&&this.panelOpen.set(!1)}setArmed(n){this.armed.set(n),this.engine?.setArmed(n)}toggleArmed(){this.setArmed(!this.armed())}setOpts(n){let e=this.opts();this.opts.set(n),this.applyOpts(n,e)}applyOpts(n,e){let t=this.engine;if(!t)return;let i=a=>n.includes(a)!==e.includes(a)||!e.length;i(`chain`)&&t.setChain(n.includes(`chain`)),i(`sound`)&&(t.setSound(n.includes(`sound`)),Re.set(`nsSound`,n.includes(`sound`))),i(`rings`)&&t.setRings(n.includes(`rings`)),i(`labels`)&&t.setLabels(n.includes(`labels`)),i(`launch`)&&(t.setLaunchMode(n.includes(`launch`)),n.includes(`launch`)&&!this.armed()&&this.setArmed(!0))}has(n){return this.opts().includes(n)}clear(){this.engine?.clear()}setSun(n){this.sunHour.set(n),this.engine?.setSunHour(n)}reset(){this.engine?.reset()}async search(n){let e=n.value.trim();e.length<2||!this.engine||(await this.engine.search(e)?(n.blur(),this.mobile()&&this.panelOpen.set(!1)):this.toast(`No results for \u201C${e}\u201D`))}togglePlaces(){this.placesOpen.update(n=>!n),Re.set(`nsPlacesOpen`,this.placesOpen())}async confirmSave(n){if(!this.engine)return;let e=n.value.trim()||`Place ${this.places().length+1}`,t=this.engine.view();this.engine.poke?.();let i=await this.engine.thumbnail();this.setPlaces([...this.places(),{id:Date.now().toString(36),name:e,view:t,thumb:i}]),this.saving.set(!1),this.toast(`\u{1F4CD}  Saved \u201C${e}\u201D`)}go(n){this.engine&&(this.teleporting.set(!0),setTimeout(()=>{this.engine.teleport(n.view),setTimeout(()=>this.teleporting.set(!1),120)},180))}remove(n,e){e.stopPropagation(),this.setPlaces(this.places().filter(t=>t.id!==n.id))}setPlaces(n){this.places.set(n),Re.set(`nsPlaces`,n)}exportPlaces(){let n=new Blob([JSON.stringify({app:`nuke-sim`,version:1,places:this.places()},null,2)],{type:`application/json`}),e=document.createElement(`a`);e.href=URL.createObjectURL(n),e.download=`nuke-sim-places.json`,e.click(),setTimeout(()=>URL.revokeObjectURL(e.href),2e3)}importPlaces(){this.fileEl().nativeElement.click()}async onImport(n){let e=n.files?.[0];if(n.value=``,!!e)try{let t=JSON.parse(await e.text()),i=(Array.isArray(t)?t:t.places||[]).filter(o=>o&&o.view&&typeof o.view.lon==`number`),a=new Set(this.places().map(o=>o.id)),r=i.filter(o=>!a.has(o.id)).map(o=>({id:o.id||Math.random().toString(36).slice(2),name:String(o.name||`Place`),view:o.view,thumb:o.thumb||``}));this.setPlaces([...this.places(),...r]),this.placesOpen.set(!0),this.toast(`\u{1F4E5}  Imported ${r.length} place${r.length===1?``:`s`}`)}catch{this.toast(`That file is not a valid places export`)}}toast(n){this.snack.open(n,void 0,{duration:3e3,verticalPosition:`top`,horizontalPosition:`center`})}saveToken(n){Re.set(`ionTokenRaw`,n.trim()),location.reload()}km(n){return n<1e3?Math.round(n)+` m`:(n/1e3).toLocaleString(`en-US`,{maximumFractionDigits:n<1e4?2:0})+` km`}static ɵfac=function(e){return new(e||s)};static ɵcmp=tE({type:s,selectors:[[`app-nuke`]],viewQuery:function(e,t){e&1&&tp(t.mapEl,ea,5)(t.fileEl,ta,5),e&2&&$E(2)},hostVars:2,hostBindings:function(e,t){e&2&&ip(`mobile`,t.mobile())},decls:29,vars:16,consts:[[`map`,``],[`file`,``],[`placesMenu`,`matMenu`],[`q`,``],[`nm`,``],[`tk`,``],[1,`map`],[1,`tp-fade`],[`type`,`file`,`accept`,`application/json,.json`,`hidden`,``,3,`change`],[1,`loading`],[`mat-fab`,``,`extended`,``,1,`open-panel`],[1,`bottom-bar`],[1,`topbar`],[1,`pill`,`hint-pill`],[`matTooltip`,`Blasts · area flattened (5 psi) · tallest cloud`,1,`pill`],[`matTooltip`,`People beamed up`,1,`pill`],[1,`pill`,`status`],[1,`places`],[1,`places-head`],[1,`strip`],[`mat-menu-item`,``,3,`click`,`disabled`],[`mat-menu-item`,``,3,`click`],[1,`info`],[`mat-mini-fab`,``,`matTooltip`,`Reset view (R)`,`matTooltipPosition`,`left`,1,`reset`],[`diameter`,`26`],[1,`scrim`],[1,`panel`],[1,`handle`],[1,`title`],[1,`spacer`],[`mat-icon-button`,``,`matTooltip`,`Info & controls`,1,`sm`,3,`click`],[`mat-icon-button`,``,1,`sm`,3,`click`,`matTooltip`],[1,`search`],[`type`,`text`,`placeholder`,`Search a place`,`autocomplete`,`off`,`spellcheck`,`false`,3,`keydown.enter`],[1,`selected`],[1,`sel-ico`],[1,`sel-text`],[1,`sel-name`],[1,`sel-meta`],[`matTooltip`,`Can be fired from a silo (launch mode, M)`,1,`silo-chip`,3,`on`],[`matTooltip`,`This tool cannot be fired from a silo: it is used directly`,1,`silo-chip`,`off`],[1,`sel-desc`],[1,`tools`],[1,`opts`],[`multiple`,``,`hideMultipleSelectionIndicator`,``,`aria-label`,`Options`,3,`change`,`value`],[`value`,`launch`,3,`matTooltip`],[`value`,`chain`,`matTooltip`,`Chain reaction (K)`],[`value`,`rings`,`matTooltip`,`Damage radii`],[`value`,`labels`,`matTooltip`,`Borders & names (L)`],[`value`,`sound`,`matTooltip`,`Sound`],[1,`sun`],[`min`,`0`,`max`,`24`,`step`,`0.25`],[`matSliderThumb`,``,3,`input`,`value`],[1,`time`],[`mat-stroked-button`,``,1,`clear-m`],[1,`scrim`,3,`click`],[1,`handle`,3,`click`],[`matTooltip`,`Can be fired from a silo (launch mode, M)`,1,`silo-chip`],[1,`group`],[1,`grid`],[`type`,`button`,`matTooltipShowDelay`,`500`,1,`card`,3,`sel`,`nosilo`,`matTooltip`],[`type`,`button`,`matTooltipShowDelay`,`500`,1,`card`,3,`click`,`matTooltip`],[1,`silo-badge`,3,`on`],[1,`ico`],[1,`name`],[1,`y`],[1,`silo-badge`],[1,`actions`],[`mat-flat-button`,``,`matTooltip`,`Arm / disarm (D)`,1,`arm`,3,`click`],[`mat-icon-button`,``,`matTooltip`,`Clear everything`,1,`tonal`,3,`click`],[1,`hint`],[`mat-stroked-button`,``,1,`clear-m`,3,`click`],[`mat-fab`,``,`extended`,``,1,`open-panel`,3,`click`],[1,`fab-ico`],[`mat-flat-button`,``,1,`tonal-btn`,3,`click`],[`mat-icon-button`,``,`matTooltip`,`Places`,1,`tonal`,3,`click`],[`mat-fab`,``,1,`arm-fab`,3,`click`],[`mat-button`,``,1,`places-toggle`,3,`click`],[`mat-icon-button`,``,`matTooltip`,`Import / export`,1,`sm`,3,`matMenuTriggerFor`],[`mat-icon-button`,``,1,`sm`,3,`matMenuTriggerFor`],[`type`,`button`,1,`place`,3,`matTooltip`],[1,`save-form`],[`type`,`button`,1,`place`,`add`],[`type`,`button`,1,`place`,3,`click`,`matTooltip`],[`alt`,``,3,`src`],[1,`noimg`],[1,`pl-name`],[`matTooltip`,`Delete`,1,`del`,3,`click`],[`type`,`text`,`placeholder`,`Place name`,`autofocus`,``,3,`keydown.enter`],[`mat-icon-button`,``,1,`sm`,3,`click`],[`type`,`button`,1,`place`,`add`,3,`click`],[1,`r`],[1,`muted`],[1,`search`,`token`],[`type`,`text`,`placeholder`,`Cesium ion token (only if the map stops loading)`,3,`keydown.enter`,`value`],[`mat-mini-fab`,``,`matTooltip`,`Reset view (R)`,`matTooltipPosition`,`left`,1,`reset`,3,`click`],[`viewBox`,`0 0 34 34`],[`d`,`M17 3 L21.5 17 L12.5 17 Z`,`fill`,`#ff5f4a`],[`d`,`M17 31 L21.5 17 L12.5 17 Z`,`fill`,`currentColor`]],template:function(e,t){if(e&1){let i=RE();Gf(0,`div`,6,0)(2,`div`,7),Zo(3,`input`,8,1),Kf(`change`,function(){Ol(i);let r=UE(4);return kl(t.onImport(r))}),rc(),DE(5,aa,4,0,`div`,9),DE(6,ga,59,18)(7,fa,4,2,`button`,10),DE(8,_a,12,5,`div`,11),Zo(9,`div`,12),DE(10,ba,2,1,`div`,13),DE(11,va,2,1,`div`,14),DE(12,ya,4,1,`div`,15),rc(),DE(13,Ca,4,1,`div`,16),Zo(14,`div`,17),DE(15,xa,8,3,`div`,18),DE(16,Ea,6,2,`div`,19),rc(),Zo(17,`mat-menu`,null,2)(19,`button`,20),Kf(`click`,function(){return t.exportPlaces()}),Zo(20,`mat-icon`),dI(21,`download`),rc(),dI(22,`Export JSON`),rc(),Zo(23,`button`,21),Kf(`click`,function(){return t.importPlaces()}),Zo(24,`mat-icon`),dI(25,`upload`),rc(),dI(26,`Import JSON`),rc()(),DE(27,Na,46,2,`section`,22),DE(28,Va,4,2,`button`,23)}e&2&&(Ny(2),ip(`on`,t.teleporting()),Ny(3),CE(t.loading()?5:-1),Ny(),CE(t.panelOpen()?6:t.mobile()?-1:7),Ny(2),CE(t.mobile()&&!t.panelOpen()?8:-1),Ny(2),CE(t.armed()&&t.mobile()?10:-1),Ny(),CE(t.stats().count&&!t.mobile()?11:-1),Ny(),CE(t.abducted()?12:-1),Ny(),CE(t.status()?13:-1),Ny(),ip(`open`,t.placesOpen()),Ny(),CE(t.mobile()?-1:15),Ny(),CE(t.placesOpen()?16:-1),Ny(3),Wf(`disabled`,!t.places().length),Ny(8),CE(t.showInfo()?27:-1),Ny(),CE(t.mobile()&&t.panelOpen()?-1:28))},dependencies:[Da,Ta$1,Dr,kr,Tr,qn$1,Cr,Dn,Ft,kt,vo,Ae,lt,_o,Ln,Bn,Wn,Gn,Lt,qn,Yn,Wt],styles:[`[_nghost-%COMP%]{--%NS%surface: color-mix(in srgb, var(--%NS%mat-sys-surface-container) 86%, transparent);--%NS%surface-hi: var(--%NS%mat-sys-surface-container-high);--%NS%r: 16px;position:relative;display:block;height:100%;overflow:hidden;background:#05070a;color:var(--%NS%mat-sys-on-surface);font:var(--%NS%mat-sys-body-medium);--%NS%mat-button-toggle-height: 36px;--%NS%mat-icon-button-state-layer-size: 36px;--%NS%mat-slider-active-track-height: 4px;--%NS%mat-slider-inactive-track-height: 4px}.map[_ngcontent-%COMP%]{position:absolute;inset:0}[_nghost-%COMP%]     .cesium-viewer-bottom{opacity:.4;left:auto;right:64px;bottom:4px;transform:scale(.85);transform-origin:right bottom}mat-icon[_ngcontent-%COMP%]{font-size:20px;width:20px;height:20px;line-height:1;display:inline-flex;align-items:center;justify-content:center}[_nghost-%COMP%]     .mat-icon{line-height:1!important;display:inline-flex!important;align-items:center;justify-content:center;vertical-align:middle}[_nghost-%COMP%]     .mat-button-toggle-button{height:36px;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]     .mat-button-toggle-label-content{display:inline-flex;align-items:center;justify-content:center;line-height:1!important;padding:0 8px}[_nghost-%COMP%]     .mat-mdc-icon-button{display:inline-flex;align-items:center;justify-content:center}[_nghost-%COMP%]     .mdc-button__label{display:inline-flex;align-items:center;gap:6px}[_nghost-%COMP%]     .mat-mdc-button .mat-icon, [_nghost-%COMP%]     .mat-mdc-unelevated-button .mat-icon, [_nghost-%COMP%]     .mat-mdc-outlined-button .mat-icon{margin:0}.spacer[_ngcontent-%COMP%]{flex:1}.sm[_ngcontent-%COMP%]{--%NS%mat-icon-button-state-layer-size: 32px;--%NS%mat-icon-button-icon-size: 18px;width:32px;height:32px;padding:0}.sm[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}.tonal[_ngcontent-%COMP%]{background:var(--%NS%mat-sys-secondary-container);color:var(--%NS%mat-sys-on-secondary-container)}.info[_ngcontent-%COMP%], .save-form[_ngcontent-%COMP%], .place[_ngcontent-%COMP%], .places-head[_ngcontent-%COMP%], .pill[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%]{background:var(--%NS%surface);-webkit-backdrop-filter:blur(18px) saturate(1.3);backdrop-filter:blur(18px) saturate(1.3);border:1px solid color-mix(in srgb,var(--%NS%mat-sys-outline-variant) 60%,transparent);border-radius:var(--%NS%r);box-shadow:var(--%NS%mat-sys-level3)}.panel[_ngcontent-%COMP%]{position:absolute;z-index:10;top:10px;left:10px;width:268px;max-height:calc(100% - 20px);padding:10px 10px 12px;display:flex;flex-direction:column;gap:8px}header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:2px;padding-left:4px}header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-medium);letter-spacing:-.01em}.search[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;height:38px;padding:0 14px;border-radius:999px;background:var(--%NS%mat-sys-surface-container-highest);color:var(--%NS%mat-sys-on-surface-variant)}.search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex:1;min-width:0;border:0;outline:none;background:none;color:var(--%NS%mat-sys-on-surface);font:var(--%NS%mat-sys-body-medium)}.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:var(--%NS%mat-sys-on-surface-variant)}.search[_ngcontent-%COMP%]:focus-within{outline:2px solid var(--%NS%mat-sys-primary)}.selected[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:2px 4px 0}.selected[_ngcontent-%COMP%]   .sel-ico[_ngcontent-%COMP%]{flex:none;width:40px;height:40px;display:grid;place-items:center;font-size:22px;border-radius:12px;background:var(--%NS%mat-sys-primary-container)}.selected[_ngcontent-%COMP%]   .sel-name[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-small)}.selected[_ngcontent-%COMP%]   .sel-meta[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-label-small);color:var(--%NS%mat-sys-primary)}.selected[_ngcontent-%COMP%]   .sel-text[_ngcontent-%COMP%]{flex:1;min-width:0}.silo-chip[_ngcontent-%COMP%]{flex:none;display:inline-flex;align-items:center;gap:3px;padding:2px 8px 2px 5px;border-radius:999px;font:var(--%NS%mat-sys-label-small);border:1px solid var(--%NS%mat-sys-outline-variant);color:var(--%NS%mat-sys-on-surface-variant)}.silo-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px}.silo-chip.on[_ngcontent-%COMP%]{background:#ffd23f;border-color:#ffd23f;color:#1b1f24}.silo-chip.off[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error);border-color:currentColor}.sel-desc[_ngcontent-%COMP%]{margin:-2px 4px 0;font:var(--%NS%mat-sys-body-small);color:var(--%NS%mat-sys-on-surface-variant);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.tools[_ngcontent-%COMP%]{flex:1 1 auto;min-height:120px;max-height:42vh;overflow-y:auto;margin:0 -4px;padding:0 4px 2px;scrollbar-width:thin}.tools[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-label-small);color:var(--%NS%mat-sys-on-surface-variant);text-transform:uppercase;letter-spacing:.08em;margin:8px 2px 4px}.tools[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]:first-child{margin-top:0}.tools[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}.card[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;min-height:72px;padding:8px 4px 6px;border:1px solid transparent;border-radius:12px;background:var(--%NS%surface-hi);color:var(--%NS%mat-sys-on-surface);cursor:pointer;overflow:hidden;transition:background .15s,border-color .15s,transform .12s}.card[_ngcontent-%COMP%]   .ico[_ngcontent-%COMP%]{font-size:24px;line-height:1.15}.card[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-label-small);font-weight:500;text-align:center;line-height:1.2}.card[_ngcontent-%COMP%]   .y[_ngcontent-%COMP%]{font:10px/1.2 ui-monospace,Consolas,monospace;color:var(--%NS%mat-sys-on-surface-variant)}.card[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;background:currentColor;opacity:0;transition:opacity .15s}.card[_ngcontent-%COMP%]:hover:after{opacity:.06}.card[_ngcontent-%COMP%]:active{transform:scale(.97)}.card[_ngcontent-%COMP%]   .silo-badge[_ngcontent-%COMP%]{position:absolute;top:3px;right:3px;font-size:12px;width:12px;height:12px;opacity:.45}.card[_ngcontent-%COMP%]   .silo-badge.on[_ngcontent-%COMP%]{opacity:1;color:#e0a800}.card.nosilo[_ngcontent-%COMP%]{opacity:.45;filter:grayscale(.7)}.card.nosilo.sel[_ngcontent-%COMP%]{opacity:.8}.card.sel[_ngcontent-%COMP%]{background:var(--%NS%mat-sys-primary-container);color:var(--%NS%mat-sys-on-primary-container);border-color:var(--%NS%mat-sys-primary)}.card.sel[_ngcontent-%COMP%]   .y[_ngcontent-%COMP%]{color:inherit;opacity:.8}.opts[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]{width:100%;border-radius:999px}.opts[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]{flex:1}.opts[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}.opts[_ngcontent-%COMP%]   mat-button-toggle.idle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{opacity:.4}.sun[_ngcontent-%COMP%]{display:flex;align-items:center;gap:2px;padding:0 2px}.sun[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-tertiary);font-size:18px;width:18px;height:18px}.sun[_ngcontent-%COMP%]   mat-slider[_ngcontent-%COMP%]{flex:1;min-width:0}.sun[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-label-medium);width:64px;text-align:right;white-space:nowrap}.actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.actions[_ngcontent-%COMP%]   .arm[_ngcontent-%COMP%]{flex:1;height:40px;border-radius:999px}.armed[_ngcontent-%COMP%]{--%NS%mat-button-filled-container-color: var(--%NS%mat-sys-error);--%NS%mat-button-filled-label-text-color: var(--%NS%mat-sys-on-error);--%NS%mat-fab-container-color: var(--%NS%mat-sys-error);--%NS%mat-fab-foreground-color: var(--%NS%mat-sys-on-error);animation:_ngcontent-%COMP%_pulse 1.6s infinite}@keyframes _ngcontent-%COMP%_pulse{0%,to{box-shadow:0 0 color-mix(in srgb,var(--%NS%mat-sys-error) 45%,transparent)}50%{box-shadow:0 0 0 7px transparent}}.hint[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-label-small);color:var(--%NS%mat-sys-on-surface-variant);text-align:center;min-height:14px}.clear-m[_ngcontent-%COMP%]{width:100%}.open-panel[_ngcontent-%COMP%]{position:absolute;z-index:10;top:10px;left:10px}.fab-ico[_ngcontent-%COMP%]{font-size:20px;margin-right:8px}.topbar[_ngcontent-%COMP%]{position:absolute;z-index:10;top:10px;right:10px;display:flex;gap:6px;align-items:center;max-width:calc(100% - 300px)}.pill[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px;height:32px;padding:0 12px;border-radius:999px;font:var(--%NS%mat-sys-label-medium);white-space:nowrap}.pill[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;color:var(--%NS%mat-sys-primary)}.status[_ngcontent-%COMP%]{position:absolute;z-index:12;left:50%;bottom:120px;transform:translate(-50%);color:var(--%NS%mat-sys-tertiary);white-space:normal;height:auto;padding:8px 14px;max-width:80%}.places[_ngcontent-%COMP%]{position:absolute;z-index:10;left:290px;right:64px;bottom:10px;display:flex;flex-direction:column;align-items:flex-start;gap:6px;pointer-events:none}.places[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{pointer-events:auto}.places-head[_ngcontent-%COMP%]{display:flex;align-items:center;border-radius:999px;padding:0 2px 0 0}.places-head[_ngcontent-%COMP%]   .places-toggle[_ngcontent-%COMP%]{height:32px}.strip[_ngcontent-%COMP%]{display:flex;align-items:flex-end;gap:8px;max-width:100%;overflow-x:auto;padding:2px;scrollbar-width:thin}.place[_ngcontent-%COMP%]{position:relative;flex:none;width:136px;height:84px;padding:0;overflow:hidden;border-radius:12px;cursor:pointer;color:var(--%NS%mat-sys-on-surface);transition:transform .15s,border-color .15s}.place[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block}.place[_ngcontent-%COMP%]   .noimg[_ngcontent-%COMP%]{margin:22px auto 0;display:block;opacity:.6}.place[_ngcontent-%COMP%]   .pl-name[_ngcontent-%COMP%]{position:absolute;inset:auto 0 0;padding:16px 10px 6px;font:var(--%NS%mat-sys-label-medium);color:#fff;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background:linear-gradient(transparent,#000c)}.place[_ngcontent-%COMP%]   .del[_ngcontent-%COMP%]{position:absolute;top:4px;right:4px;width:22px;height:22px;display:grid;place-items:center;border-radius:50%;background:#0009;color:#fff;opacity:0;transition:opacity .15s}.place[_ngcontent-%COMP%]   .del[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:14px;width:14px;height:14px}.place[_ngcontent-%COMP%]:hover{transform:translateY(-2px);border-color:var(--%NS%mat-sys-primary)}.place[_ngcontent-%COMP%]:hover   .del[_ngcontent-%COMP%]{opacity:1}.place.add[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;border-style:dashed;color:var(--%NS%mat-sys-primary);font:var(--%NS%mat-sys-label-medium)}.save-form[_ngcontent-%COMP%]{flex:none;display:flex;align-items:center;gap:2px;height:84px;padding:0 8px 0 12px;border-radius:12px}.save-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:170px;height:36px;padding:0 12px;border-radius:999px;border:0;outline:2px solid var(--%NS%mat-sys-primary);background:var(--%NS%mat-sys-surface-container-highest);color:var(--%NS%mat-sys-on-surface);font:var(--%NS%mat-sys-body-medium)}.info[_ngcontent-%COMP%]{position:absolute;z-index:12;top:10px;left:288px;width:320px;max-height:calc(100% - 20px);overflow-y:auto;padding:10px 14px 14px;font:var(--%NS%mat-sys-body-small)}.info[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{padding:0 0 6px}.info[_ngcontent-%COMP%]   .r[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:8px;padding:4px 0;border-bottom:1px solid var(--%NS%mat-sys-outline-variant)}.info[_ngcontent-%COMP%]   .r[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:inline-block;width:9px;height:9px;border-radius:50%;margin-right:8px;outline:1.5px solid #000}.info[_ngcontent-%COMP%]   .r[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-label-large)}.info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-small);margin:12px 0 2px}.info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:6px 0;line-height:1.6;color:var(--%NS%mat-sys-on-surface-variant)}.info[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%]{opacity:.8}.info[_ngcontent-%COMP%]   kbd[_ngcontent-%COMP%]{font:11px ui-monospace,Consolas,monospace;border:1px solid var(--%NS%mat-sys-outline-variant);border-radius:4px;padding:0 4px;color:var(--%NS%mat-sys-on-surface)}.info[_ngcontent-%COMP%]   .token[_ngcontent-%COMP%]{margin-top:10px}.reset[_ngcontent-%COMP%]{position:absolute;z-index:10;right:12px;bottom:14px}.reset[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:26px;height:26px}.loading[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:5;display:flex;gap:12px;align-items:center;justify-content:center;color:var(--%NS%mat-sys-on-surface-variant)}.tp-fade[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:20;background:#000;opacity:0;pointer-events:none;transition:opacity .18s}.tp-fade.on[_ngcontent-%COMP%]{opacity:1}.scrim[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:9;background:#00000059}.mobile[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]{inset:auto 0 0;width:auto;max-height:72%;border-radius:24px 24px 0 0;padding:6px 12px calc(14px + env(safe-area-inset-bottom));animation:_ngcontent-%COMP%_up .22s cubic-bezier(.2,.9,.3,1)}.mobile[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]   .tools[_ngcontent-%COMP%]{max-height:none}.mobile[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}.mobile[_nghost-%COMP%]   .sel-desc[_ngcontent-%COMP%]{display:none}.mobile[_nghost-%COMP%]     .cesium-viewer-bottom{bottom:calc(64px + env(safe-area-inset-bottom));left:6px;right:auto;transform:scale(.7);transform-origin:left bottom}.mobile[_nghost-%COMP%]   .handle[_ngcontent-%COMP%]{width:36px;height:4px;border-radius:2px;background:var(--%NS%mat-sys-outline);margin:4px auto 2px;cursor:pointer}.mobile[_nghost-%COMP%]   .bottom-bar[_ngcontent-%COMP%]{position:absolute;z-index:10;left:10px;right:10px;bottom:calc(10px + env(safe-area-inset-bottom));display:flex;align-items:center;gap:8px}.mobile[_nghost-%COMP%]   .bottom-bar[_ngcontent-%COMP%]   .tonal-btn[_ngcontent-%COMP%]{--%NS%mat-button-filled-container-color: var(--%NS%surface);--%NS%mat-button-filled-label-text-color: var(--%NS%mat-sys-on-surface);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);height:44px;border-radius:999px;max-width:55%}.mobile[_nghost-%COMP%]   .reset[_ngcontent-%COMP%]{bottom:auto;top:52px}.mobile[_nghost-%COMP%]   .topbar[_ngcontent-%COMP%]{left:10px;right:10px;max-width:none;justify-content:flex-end}.mobile[_nghost-%COMP%]   .hint-pill[_ngcontent-%COMP%]{max-width:100%;overflow:hidden;text-overflow:ellipsis}.mobile[_nghost-%COMP%]   .places[_ngcontent-%COMP%]{left:10px;right:10px;bottom:calc(66px + env(safe-area-inset-bottom))}.mobile[_nghost-%COMP%]   .place[_ngcontent-%COMP%], .mobile[_nghost-%COMP%]   .save-form[_ngcontent-%COMP%]{height:70px}.mobile[_nghost-%COMP%]   .place[_ngcontent-%COMP%]{width:112px}.mobile[_nghost-%COMP%]   .info[_ngcontent-%COMP%]{left:10px;right:10px;width:auto;top:50px;max-height:70%}.mobile[_nghost-%COMP%]   .status[_ngcontent-%COMP%]{bottom:calc(80px + env(safe-area-inset-bottom))}@keyframes _ngcontent-%COMP%_up{0%{transform:translateY(40%);opacity:0}}`]})};export{oi as Nuke};