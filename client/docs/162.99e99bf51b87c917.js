"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[162],{5299:(A,f,o)=>{o.d(f,{u:()=>y});var U=o(273),v=o(7384),E=o(8260),_=o(3668),V=o(4522),b=o(2924);let i=new class{constructor(){this.reset()}baseUrl(){return this.url+=E.N.apiUrl,this}animal(){return this.url+="/animals",this}filter(c){return this.url+=`/filter//?${c}`,this}vetfilter(c){return this.url+=`/filter/vetfilter/?${c}`,this}vet(){return this.url+="/vet",this}addId(c){return this.url+=`/${c}`,this}services(){return this.url+="/services",this}login(){return this.url+="/login",this}volonteers(){return this.url+="/volunteers",this}countElements(){return this.url+="/countElements",this}getUrl(){let c=this.url;return this.reset(),c}reset(){this.url=""}},y=(()=>{class d{constructor(t,e){this.http=t,this.loginService=e,this.error=new U.x}getAnimalsFilterInfo(t){return this.http.get(i.baseUrl().animal().filter(t).getUrl())}getVetsFilterInfo(t){return this.http.get(i.baseUrl().vet().vetfilter(t).getUrl())}getAnimalsInfo(){return this.http.get(i.baseUrl().animal().getUrl())}getAnimalsUnitInfo(t){return this.http.get(i.baseUrl().animal().addId(t).getUrl())}postNewAnimal(t){return this.http.post(i.baseUrl().animal().getUrl(),t)}putEditAnimal(t){return this.http.put(i.baseUrl().animal().getUrl(),t)}deleteAnimal(t){return this.http.delete(i.baseUrl().animal().addId(t).getUrl())}getCounts(){return this.http.get(i.baseUrl().countElements().getUrl())}getVetDetails(){return this.http.get(i.baseUrl().vet().getUrl())}getVetsUnitInfo(t){return this.http.get(i.baseUrl().vet().addId(t).getUrl())}postNewClinic(t){return this.http.post(i.baseUrl().vet().getUrl(),t)}getVetServices(){return this.http.get(i.baseUrl().services().getUrl())}deleteClinic(t){return this.http.delete(i.baseUrl().vet().addId(t).getUrl())}putUpdateVet(t){return this.http.put(i.baseUrl().vet().getUrl(),t)}getVolonteersInfo(){return this.http.get(i.baseUrl().volonteers().getUrl())}getVolonteersUnitInfo(t){return this.http.get(i.baseUrl().volonteers().addId(t).getUrl())}putEditVolunteer(t){return this.http.put(i.baseUrl().volonteers().getUrl(),t)}deleteVolunteer(t){return this.http.delete(i.baseUrl().volonteers().addId(t).getUrl())}postNewVolunteer(t){return this.http.post(i.baseUrl().volonteers().getUrl(),t)}login(t){return this.http.post(i.baseUrl().login().getUrl(),t).pipe((0,v.b)(({token:e})=>{localStorage.setItem("token",e),this.loginService.setToken(e)}))}}return d.\u0275fac=function(t){return new(t||d)(_.LFG(V.eN),_.LFG(b.r))},d.\u0275prov=_.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},7325:(A,f,o)=>{o.d(f,{o2:()=>E,Ov:()=>i,yy:()=>V,eX:()=>b,k:()=>c,Z9:()=>S});var U=o(273),v=o(3668);class E{}function S(t){return t&&"function"==typeof t.connect}class V{applyChanges(e,s,r,a,h){e.forEachOperation((l,g,p)=>{let n,u;if(null==l.previousIndex){const m=r(l,g,p);n=s.createEmbeddedView(m.templateRef,m.context,m.index),u=1}else null==p?(s.remove(g),u=3):(n=s.get(g),s.move(n,p),u=2);h&&h({context:null==n?void 0:n.context,operation:u,record:l})})}detach(){}}class b{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(e,s,r,a,h){e.forEachOperation((l,g,p)=>{let n,u;null==l.previousIndex?(n=this._insertView(()=>r(l,g,p),p,s,a(l)),u=n?1:0):null==p?(this._detachAndCacheView(g,s),u=3):(n=this._moveView(g,p,s,a(l)),u=2),h&&h({context:null==n?void 0:n.context,operation:u,record:l})})}detach(){for(const e of this._viewCache)e.destroy();this._viewCache=[]}_insertView(e,s,r,a){const h=this._insertViewFromCache(s,r);if(h)return void(h.context.$implicit=a);const l=e();return r.createEmbeddedView(l.templateRef,l.context,l.index)}_detachAndCacheView(e,s){const r=s.detach(e);this._maybeCacheView(r,s)}_moveView(e,s,r,a){const h=r.get(e);return r.move(h,s),h.context.$implicit=a,h}_maybeCacheView(e,s){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(e);else{const r=s.indexOf(e);-1===r?e.destroy():s.remove(r)}}_insertViewFromCache(e,s){const r=this._viewCache.pop();return r&&s.insert(r,e),r||null}}class i{constructor(e=!1,s,r=!0){this._multiple=e,this._emitChanges=r,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new U.x,s&&s.length&&(e?s.forEach(a=>this._markSelected(a)):this._markSelected(s[0]),this._selectedToEmit.length=0)}get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}select(...e){this._verifyValueAssignment(e),e.forEach(s=>this._markSelected(s)),this._emitChangeEvent()}deselect(...e){this._verifyValueAssignment(e),e.forEach(s=>this._unmarkSelected(s)),this._emitChangeEvent()}toggle(e){this.isSelected(e)?this.deselect(e):this.select(e)}clear(){this._unmarkAll(),this._emitChangeEvent()}isSelected(e){return this._selection.has(e)}isEmpty(){return 0===this._selection.size}hasValue(){return!this.isEmpty()}sort(e){this._multiple&&this.selected&&this._selected.sort(e)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(e){this.isSelected(e)||(this._multiple||this._unmarkAll(),this._selection.add(e),this._emitChanges&&this._selectedToEmit.push(e))}_unmarkSelected(e){this.isSelected(e)&&(this._selection.delete(e),this._emitChanges&&this._deselectedToEmit.push(e))}_unmarkAll(){this.isEmpty()||this._selection.forEach(e=>this._unmarkSelected(e))}_verifyValueAssignment(e){}}const c=new v.OlP("_ViewRepeater")}}]);