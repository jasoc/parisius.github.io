import{L as X,M as Ta,S as Da,n as ps,t as Nt,w as Dr,z as kr}from"./main-TO4CGSET.js";import"./chunk-B92ZQsVu.js";import{Fn as sE,G as Ny,Gt as dI,Hn as tE,Jt as dp,Ln as sl,Mn as rE,Nn as rc,S as FE,Tt as _E,Vt as cc,Zn as w,_t as Wf,cn as ic,pn as jE,r as A,st as TE,un as ip,wn as oc,wt as Zo}from"./chunk-Bp7w4L2G.js";var H=new A(`MAT_CARD_CONFIG`);var E=(()=>{class t{appearance;constructor(){let a=w(H,{optional:!0});this.appearance=a?.appearance||`raised`}static ɵfac=function(e){return new(e||t)};static ɵcmp=(function(){return tE({type:t,selectors:[[`mat-card`]],hostAttrs:[1,`mat-mdc-card`,`mdc-card`],hostVars:8,hostBindings:function(m,d){m&2&&ip(`mat-mdc-card-outlined`,d.appearance===`outlined`)(`mdc-card--outlined`,d.appearance===`outlined`)(`mat-mdc-card-filled`,d.appearance===`filled`)(`mdc-card--filled`,d.appearance===`filled`)},inputs:{appearance:`appearance`},exportAs:[`matCard`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(m,d){m&1&&(FE(),jE(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-elevated-container-elevation, var(--%NS%mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--%NS%mat-card-outlined-container-color, var(--%NS%mat-sys-surface));
  border-radius: var(--%NS%mat-card-outlined-container-shape, var(--%NS%mat-sys-corner-medium));
  border-width: var(--%NS%mat-card-outlined-outline-width, 1px);
  border-color: var(--%NS%mat-card-outlined-outline-color, var(--%NS%mat-sys-outline-variant));
  box-shadow: var(--%NS%mat-card-outlined-container-elevation, var(--%NS%mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--%NS%mat-card-filled-container-color, var(--%NS%mat-sys-surface-container-highest));
  border-radius: var(--%NS%mat-card-filled-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-filled-container-elevation, var(--%NS%mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--%NS%mat-card-subtitle-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-card-subtitle-text-font, var(--%NS%mat-sys-title-medium-font));
  line-height: var(--%NS%mat-card-subtitle-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  font-size: var(--%NS%mat-card-subtitle-text-size, var(--%NS%mat-sys-title-medium-size));
  letter-spacing: var(--%NS%mat-card-subtitle-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
  font-weight: var(--%NS%mat-card-subtitle-text-weight, var(--%NS%mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})})()}return t})();var F=(()=>{class t{static ɵfac=function(e){return new(e||t)};static ɵdir=sE({type:t,selectors:[[`mat-card-title`],[``,`mat-card-title`,``],[``,`matCardTitle`,``]],hostAttrs:[1,`mat-mdc-card-title`]})}return t})();var j=(()=>{class t{static ɵfac=function(e){return new(e||t)};static ɵdir=sE({type:t,selectors:[[`mat-card-content`]],hostAttrs:[1,`mat-mdc-card-content`]})}return t})();var L=(()=>{class t{static ɵfac=function(e){return new(e||t)};static ɵdir=sE({type:t,selectors:[[`mat-card-subtitle`],[``,`mat-card-subtitle`,``],[``,`matCardSubtitle`,``]],hostAttrs:[1,`mat-mdc-card-subtitle`]})}return t})();var P=(()=>{class t{align=`start`;static ɵfac=function(e){return new(e||t)};static ɵdir=sE({type:t,selectors:[[`mat-card-actions`]],hostAttrs:[1,`mat-mdc-card-actions`,`mdc-card__actions`],hostVars:2,hostBindings:function(e,m){e&2&&ip(`mat-mdc-card-actions-align-end`,m.align===`end`)},inputs:{align:`align`},exportAs:[`matCardActions`]})}return t})();var R=(()=>{class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=(function(){let a=[[[``,`mat-card-avatar`,``],[``,`matCardAvatar`,``]],[[`mat-card-title`],[`mat-card-subtitle`],[``,`mat-card-title`,``],[``,`mat-card-subtitle`,``],[``,`matCardTitle`,``],[``,`matCardSubtitle`,``]],`*`];return tE({type:t,selectors:[[`mat-card-header`]],hostAttrs:[1,`mat-mdc-card-header`],ngContentSelectors:[`[mat-card-avatar], [matCardAvatar]`,`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,`*`],decls:4,vars:0,consts:[[1,`mat-mdc-card-header-text`]],template:function(d,J){d&1&&(FE(a),jE(0),oc(1,`div`,0),jE(2,1),ic(),jE(3,2))},encapsulation:2})})()}return t})();var V=(()=>{class t{static ɵfac=function(e){return new(e||t)};static ɵdir=sE({type:t,selectors:[[``,`mat-card-avatar`,``],[``,`matCardAvatar`,``]],hostAttrs:[1,`mat-mdc-card-avatar`]})}return t})();var B=(()=>{class t{static ɵfac=function(e){return new(e||t)};static ɵmod=rE({type:t});static ɵinj=sl({imports:[X]})}return t})();var $=(t,l)=>l.path;function q(t,l){if(t&1&&(Zo(0,`mat-card`,1)(1,`mat-card-header`)(2,`mat-icon`,2),dI(3),rc(),Zo(4,`mat-card-title`),dI(5),rc(),Zo(6,`mat-card-subtitle`),dI(7),rc()(),Zo(8,`mat-card-content`)(9,`p`),dI(10),rc()(),Zo(11,`mat-card-actions`,3)(12,`a`,4),dI(13,`Open`),rc()()()),t&2){let a=l.$implicit;Ny(3),dp(a.icon),Ny(2),dp(a.title),Ny(2),cc(`/`,a.path),Ny(3),dp(a.description),Ny(2),Wf(`routerLink`,`/`+a.path)}}var O=class t{apps=ps;static ɵfac=function(a){return new(a||t)};static ɵcmp=tE({type:t,selectors:[[`app-apps`]],decls:5,vars:0,consts:[[1,`grid`],[`appearance`,`outlined`],[`mat-card-avatar`,``],[`align`,`end`],[`mat-flat-button`,``,3,`routerLink`]],template:function(a,e){a&1&&(Zo(0,`h1`),dI(1,`Apps`),rc(),Zo(2,`div`,0),TE(3,q,14,5,`mat-card`,1,$),rc()),a&2&&(Ny(3),_E(e.apps))},dependencies:[Nt,B,E,P,V,j,R,L,F,Dr,kr,Da,Ta],styles:[`[_nghost-%COMP%]{display:block;max-width:1080px;margin:0 auto;padding:32px 20px}h1[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-headline-medium);margin:0 0 24px}.grid[_ngcontent-%COMP%]{display:grid;gap:16px;grid-template-columns:repeat(auto-fill,minmax(280px,1fr))}mat-icon[mat-card-avatar][_ngcontent-%COMP%]{display:grid;place-items:center;font-size:28px;color:var(--%NS%mat-sys-primary)}p[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant)}`]})};export{O as Apps};