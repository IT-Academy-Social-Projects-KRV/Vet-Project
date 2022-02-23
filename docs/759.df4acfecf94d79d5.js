"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[759],{5759:(M,a,r)=>{r.r(a),r.d(a,{VolonteersModule:()=>A});var i=r(6019),s=r(888),p=r(5694),g=r(2663),d=r(86),l=r(1659),u=r(3668),c=r(5299);const m=function(e){return["/volonteers-list",e]};let f=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-volonteers-list-card"]],inputs:{volonteersInfo:"volonteersInfo"},decls:12,vars:8,consts:[[1,"volonteers-card"],[1,"volonteers-card__wrapper",3,"routerLink"],["alt","image of volonteers",1,"volonteers-card__img",3,"src"],[1,"volonteers-card__volonteers-info-container"],[1,"volonteers-card__volonteers-info-name"],[1,"volonteers-card__volonteers-info-item"],[1,"volonteers-info-section__info-wrapper",3,"href"]],template:function(t,o){1&t&&(u.TgZ(0,"mat-card",0),u.TgZ(1,"div",1),u._UZ(2,"img",2),u.qZA(),u.TgZ(3,"mat-card-content",3),u.TgZ(4,"mat-card-subtitle"),u.TgZ(5,"span",4),u._uU(6),u.qZA(),u.qZA(),u.TgZ(7,"mat-card-subtitle"),u.TgZ(8,"span",5),u._uU(9,"E-mail : "),u.TgZ(10,"a",6),u._uU(11),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&t&&(u.xp6(1),u.Q6J("routerLink",u.VKq(6,m,o.volonteersInfo.id)),u.xp6(1),u.MGl("src","../../../../assets/volonteersPictures/volonteer_0",o.volonteersInfo.id,".jpg",u.LSH),u.xp6(4),u.AsE("",o.volonteersInfo.first_name," ",o.volonteersInfo.last_name,""),u.xp6(4),u.s9C("href",o.volonteersInfo.email,u.LSH),u.xp6(1),u.Oqu(o.volonteersInfo.email))},directives:[s.a8,l.rH,s.dn,s.$j],styles:[".volonteers-card[_ngcontent-%COMP%]{background-color:#f0f5f958;border:2px solid #4788b6;display:flex;flex-direction:column;justify-content:center;align-items:center;width:max-content}.volonteers-card[_ngcontent-%COMP%]:hover{border:2px solid #d68427}.volonteers-card__img[_ngcontent-%COMP%]{width:328px;cursor:pointer}.volonteers-card__volonteers-info-item[_ngcontent-%COMP%]{font-weight:bold;color:#000}.volonteers-card__volonteers-info-item[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{color:#4788b6;text-decoration:underline}.volonteers-card__volonteers-info-name[_ngcontent-%COMP%]{margin-top:10px;font-weight:bold;color:#000;font-size:24px}.volonteers-info-section__info-wrapper[_ngcontent-%COMP%]{font-weight:normal}"]}),e})();function v(e,n){if(1&e&&(u.TgZ(0,"li",11),u._UZ(1,"app-volonteers-list-card",12),u.qZA()),2&e){const t=n.$implicit;u.xp6(1),u.Q6J("volonteersInfo",t)}}function x(e,n){if(1&e&&(u.ynx(0),u.YNc(1,v,2,1,"li",10),u.BQk()),2&e){const t=n.ngIf;u.xp6(1),u.Q6J("ngForOf",t)}}let _=(()=>{class e{constructor(t){this.apiServices=t}ngOnInit(){this.volonteersDetailInfo$=this.apiServices.getVolonteersInfo()}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(c.u))},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-volonteers-list"]],decls:15,vars:3,consts:[[1,"volonteers-info-section"],[1,"wrapper"],[1,"volonteers-title"],[1,"volonteers-text"],[1,"volonteers-text-title"],[1,"volonteers-text-message"],[1,"volonteers-list-section"],[1,"volonteers-list-section__container"],[4,"ngIf"],[1,"volonteers-button"],["class","volonteers-list-section__card",4,"ngFor","ngForOf"],[1,"volonteers-list-section__card"],[3,"volonteersInfo"]],template:function(t,o){1&t&&(u.TgZ(0,"section",0),u.TgZ(1,"div",1),u.TgZ(2,"h2",2),u._uU(3,"\u041d\u0430\u0448\u0456 \u0432\u043e\u043b\u043e\u043d\u0442\u0435\u0440\u0438"),u.qZA(),u.TgZ(4,"div",3),u.TgZ(5,"h2",4),u._uU(6," \u0425\u0442\u043e \u0442\u0430\u043a\u0438\u0439 \u0412\u043e\u043b\u043e\u043d\u0442\u0435\u0440? "),u.qZA(),u.TgZ(7,"p",5),u._uU(8," \u042f\u043a\u0449\u043e \u0432\u0438 \u0445\u043e\u0447\u0435\u0442\u0435 \u0434\u043e\u043f\u043e\u043c\u0430\u0433\u0430\u0442\u0438 \u0431\u0435\u0437\u0434\u043e\u043c\u043d\u0438\u043c \u0442\u0432\u0430\u0440\u0438\u043d\u0430\u043c, \u0430\u043b\u0435 \u043d\u0435 \u0437\u043d\u0430\u0454\u0442\u0435, \u044f\u043a \u0446\u0435 \u0437\u0440\u043e\u0431\u0438\u0442\u0438 \u0456 \u0437 \u0447\u043e\u0433\u043e \u043f\u043e\u0447\u0430\u0442\u0438 \u2014 \u0446\u0435\u0439 \u0440\u043e\u0437\u0434\u0456\u043b \u0434\u043b\u044f \u0432\u0430\u0441. \u0412\u0438 \u0430\u043a\u0442\u0438\u0432\u043d\u0430 \u043b\u044e\u0434\u0438\u043d\u0430, \u043b\u044e\u0431\u0438\u0442\u0435 \u0442\u0432\u0430\u0440\u0438\u043d, \u0443 \u0432\u0430\u0441 \u0454 \u0432\u0456\u043b\u044c\u043d\u0438\u0439 \u0447\u0430\u0441 \u0442\u0430 \u0431\u0430\u0436\u0430\u043d\u043d\u044f \u0440\u043e\u0431\u0438\u0442\u0438 \u0434\u043e\u0431\u0440\u0456 \u0442\u0430 \u0432\u0430\u0436\u043b\u0438\u0432\u0456 \u0432\u0447\u0438\u043d\u043a\u0438 \u2013 \u0432\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0442\u0430\u0442\u0438 \u0447\u0430\u0441\u0442\u0438\u043d\u043e\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u0438 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u0438 \u0442\u0430 \u043f\u043e\u0440\u044f\u0442\u0443\u043d\u043a\u0443 \u0431\u0435\u0437\u0434\u043e\u043c\u043d\u0438\u0445 \u0442\u0432\u0430\u0440\u0438\u043d. "),u.qZA(),u.qZA(),u.TgZ(9,"section",6),u.TgZ(10,"ul",7),u.YNc(11,x,2,1,"ng-container",8),u.ALo(12,"async"),u.qZA(),u.qZA(),u.TgZ(13,"button",9),u._uU(14,"\u0421\u0442\u0430\u0442\u0438 \u0432\u043e\u043b\u043e\u043d\u0442\u0435\u0440\u043e\u043c"),u.qZA(),u.qZA(),u.qZA()),2&t&&(u.xp6(11),u.Q6J("ngIf",u.lcZ(12,1,o.volonteersDetailInfo$)))},directives:[i.O5,i.sg,f],pipes:[i.Ov],styles:["*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}.wrapper[_ngcontent-%COMP%]{max-width:1200px;margin:100px auto 0}.volonteers-text-title[_ngcontent-%COMP%]{font-size:26px}.volonteers-text-message[_ngcontent-%COMP%]{font-size:20px;font-weight:400;line-height:1.5}.volonteers-title[_ngcontent-%COMP%]{font-weight:700;padding:15px;border:5px solid #4788b6;font-size:36px;text-align:center;border-radius:15px;max-width:360px;margin:0 auto 15px;color:#4788b6}.volonteers-list-section[_ngcontent-%COMP%]{margin-top:45px}.volonteers-list-section__container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;padding:0;margin:auto}.volonteers-list-section__card[_ngcontent-%COMP%]{flex-basis:30.3333333333%;margin:1.5%}.volonteers-list-section__card[_ngcontent-%COMP%]:hover{transform:translateY(5px);box-shadow:2px 2px 26px #0000004d;cursor:pointer}.volonteer-card[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:5px;background-color:#68a7d4;margin-top:10px}.volonteer-img[_ngcontent-%COMP%]{width:150px;height:150px;border-radius:50%;display:block;margin:0 auto}.volonteer-info-wrapper[_ngcontent-%COMP%]{max-width:85%;font-weight:400;font-size:20px;line-height:1.5;list-style:none}.volonteer-info-name[_ngcontent-%COMP%]{font-weight:600;font-size:24px}.volonteer-info-contact__mail[_ngcontent-%COMP%]{color:#4788b6;text-decoration:underline}.volonteers-button[_ngcontent-%COMP%]{display:block;margin:25px auto;width:280px;height:60px;font-weight:700;font-size:26px;letter-spacing:.5px;cursor:pointer;border:5px solid #4788b6;color:#4788b6;border-radius:12px;background-color:#fff}.volonteers-button[_ngcontent-%COMP%]:hover{color:#d68427;background-color:#fff;border-color:#d68427;transition:.2s}@media (max-width: 500px){.volonteers-title[_ngcontent-%COMP%]{border:4px solid #4788b6;font-size:32px;max-width:320px}.volonteer-card[_ngcontent-%COMP%]{flex-direction:column}.volonteer-img[_ngcontent-%COMP%]{width:250px;height:250px}}@media (max-width: 850px){.volonteer-info-wrapper[_ngcontent-%COMP%]{max-width:73%}.volonteer-img[_ngcontent-%COMP%]{width:200px;height:200px}}"]}),e})();function h(e,n){if(1&e&&(u.TgZ(0,"div",1),u.TgZ(1,"section",2),u.TgZ(2,"div",3),u.TgZ(3,"h2",4),u._uU(4),u.qZA(),u.qZA(),u.TgZ(5,"div",5),u.TgZ(6,"div",6),u.TgZ(7,"div",7),u._UZ(8,"img",8),u.qZA(),u.TgZ(9,"div",9),u.TgZ(10,"p",10),u._uU(11,"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443 : "),u.TgZ(12,"span",11),u.TgZ(13,"a",12),u._uU(14),u.qZA(),u.qZA(),u.qZA(),u.TgZ(15,"p",13),u._uU(16,"E-mail \u0432\u043e\u043b\u043e\u043d\u0442\u0435\u0440\u0430 : "),u.TgZ(17,"span",14),u.TgZ(18,"a",12),u._uU(19),u.qZA(),u.qZA(),u.qZA(),u.TgZ(20,"div",15),u._uU(21),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&e){const t=n.ngIf;u.xp6(4),u.AsE("",t.first_name," ",t.last_name,""),u.xp6(4),u.MGl("src","../../../../assets/volonteersPictures/volonteer_0",t.id,".jpg",u.LSH),u.xp6(5),u.MGl("href","tel:",t.number,"",u.LSH),u.xp6(1),u.Oqu(t.number),u.xp6(4),u.MGl("href","mailto:",t.email,"",u.LSH),u.xp6(1),u.Oqu(t.email),u.xp6(2),u.hij(" ",t.first_name," 44 \u0440\u043e\u043a\u0438. \u0406 \u0432\u0441\u0435 \u0436\u0438\u0442\u0442\u044f \u0442\u0456\u0441\u043d\u043e \u043f\u043e\u0432'\u044f\u0437\u0430\u043d\u043e \u0456\u0437 \u0442\u0432\u0430\u0440\u0438\u043d\u0430\u043c\u0438. \u0426\u0435 \u0430\u0436 \u043d\u0456\u044f\u043a \u043d\u0435 \u0445\u043e\u0431\u0456 \u2013 \u0430 \u043f\u0440\u043e\u0444\u0435\u0441\u0456\u044f, \u0432 \u0432\u0438\u0441\u043e\u043a\u043e \u043f\u0456\u0434\u043d\u044f\u0442\u043e \u043f\u043b\u0430\u043d\u043a\u0443. \u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456 \u0446\u0456 \u0440\u0435\u0433\u0430\u043b\u0456\u0457 \u0432\u0430\u0436\u043a\u043e \u043f\u0435\u0440\u0435\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438. \u041b\u0456\u0446\u0435\u043d\u0437\u043e\u0432\u0430\u043d\u0438\u0439 \u0456\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440-\u0434\u0440\u0435\u0441\u0438\u0440\u0443\u0432\u0430\u043b\u044c\u043d\u0438\u043a \u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u043e\u0433\u043e \u043a\u0456\u043d\u043e\u043b\u043e\u0433\u0456\u0447\u043d\u043e\u0433\u043e \u043e\u0431'\u0454\u0434\u043d\u0430\u043d\u043d\u044f, \u0444\u0456\u0433\u0443\u0440\u0430\u043d\u0442 \u0442\u0430 \u0441\u0443\u0434\u0434\u044f \u0437 \u0440\u043e\u0431\u043e\u0447\u0438\u0445 \u044f\u043a\u043e\u0441\u0442\u0435\u0439, \u0435\u043a\u0441\u043f\u0435\u0440\u0442 \u0437\u0456 \u0441\u043b\u0443\u0436\u0431\u043e\u0432\u0438\u0445 \u0432\u0438\u043f\u0440\u043e\u0431\u0443\u0432\u0430\u043d\u044c \u0441\u043e\u0431\u0430\u043a. ")}}const Z=[{path:"",component:(()=>{class e{constructor(){this.title="Volonteers Page"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-volonteers-page"]],decls:1,vars:0,template:function(t,o){1&t&&u._UZ(0,"app-volonteers-list")},directives:[_],styles:[""]}),e})()},{path:":id",component:(()=>{class e{constructor(t,o){this.apiServices=t,this.Activatedroute=o,this.Activatedroute.paramMap.subscribe(P=>{this.id=P.get("id")})}ngOnInit(){this.volonteersInfo$=this.apiServices.getVolonteersUnitInfo(this.id)}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(c.u),u.Y36(l.gz))},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-volonteers-unit-page"]],decls:2,vars:3,consts:[["class","wrapper",4,"ngIf"],[1,"wrapper"],[1,"volonteers-info-section"],[1,"title-wrapper"],[1,"volonteers-info-section__title"],[1,"content","wrapper"],[1,"main-content"],[1,"volonteers-card__wrapper"],["alt","image of volonteers",1,"volonteers-card__img",3,"src"],[1,"info-wrapper"],[1,"volonteer-number"],[1,"number"],[1,"link",3,"href"],[1,"volonteer-email"],[1,"email"],[1,"content-text"]],template:function(t,o){1&t&&(u.YNc(0,h,22,8,"div",0),u.ALo(1,"async")),2&t&&u.Q6J("ngIf",u.lcZ(1,1,o.volonteersInfo$))},directives:[i.O5],pipes:[i.Ov],styles:["*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}.wrapper[_ngcontent-%COMP%]{max-width:1200px;margin:100px auto 0}.title-wrapper[_ngcontent-%COMP%]{text-align:center}.volonteers-card__img[_ngcontent-%COMP%]{border-radius:10%}.volonteers-info-section__title[_ngcontent-%COMP%]{font-size:36px;font-weight:700}.main-content[_ngcontent-%COMP%]{margin:0 auto 20px;max-width:900px;display:flex;align-items:center;justify-content:space-between;padding:25px}.info-wrapper[_ngcontent-%COMP%]{font-size:24px;max-width:470px}.volonteer-number[_ngcontent-%COMP%]{font-weight:700}.number[_ngcontent-%COMP%]{font-weight:normal}.volonteer-email[_ngcontent-%COMP%]{font-weight:700}.email[_ngcontent-%COMP%]{font-weight:normal}.content-text[_ngcontent-%COMP%]{font-size:20px;margin-bottom:25px}"]}),e})()}];let E=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[l.Bz.forChild(Z)],l.Bz]}),e})(),A=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[i.ez,E,s.QW,p.t,g.ie,d.ot]]}),e})()}}]);