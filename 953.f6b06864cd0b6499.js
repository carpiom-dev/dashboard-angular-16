"use strict";(self.webpackChunkdashboard_angular_16=self.webpackChunkdashboard_angular_16||[]).push([[953],{9953:(J,f,r)=>{r.r(f),r.d(f,{LoginModule:()=>S,routes:()=>p});var g=r(4755),l=r(6873),e=r(9401),c=r(3784),h=r(8955),t=r(2223),v=r(6211),u=r(1576),d=r(1728),Z=r(430),T=r(8097),i=r(9114),I=r(2214),A=r(877),x=r(5779);function U(n,o){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Email is required"),t.qZA())}function y(n,o){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Invalid email address"),t.qZA())}function C(n,o){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Password is required"),t.qZA())}function L(n,o){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Password isn't long enough, minimum of 6 characters"),t.qZA())}const p=[{path:"",component:(()=>{const o=class{constructor(m,s,a){this.appSettings=m,this.fb=s,this.router=a,this.settings=this.appSettings.settings,this.form=this.fb.group({email:[null,e.kI.compose([e.kI.required,h.L])],password:[null,e.kI.compose([e.kI.required,e.kI.minLength(6)])],rememberMe:!1})}onSubmit(m){this.form.valid&&this.router.navigate(["/"])}ngAfterViewInit(){setTimeout(()=>{this.settings.loadingSpinner=!1})}};let n=o;return o.\u0275fac=function(s){return new(s||o)(t.Y36(v.d),t.Y36(e.QS),t.Y36(l.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:27,vars:11,consts:[[1,"h-100"],["fxLayout","row","fxLayoutAlign","center center",1,"h-100"],["fxFlex","90","fxFlex.gt-sm","30","fxFlex.sm","60",1,"mat-elevation-z6",3,"formGroup","ngSubmit"],[3,"icon","title","hideBreadcrumb","hasBgImage"],[1,"p-3"],["mat-button","","routerLink","/register","color","accent",1,"w-100"],[1,"w-100"],["matPrefix","",1,"secondary-text-color"],["matInput","","formControlName","email"],[4,"ngIf"],["matInput","","formControlName","password","type","password"],["formControlName","rememberMe",1,"my-2"],["mat-raised-button","","color","primary","type","submit",1,"mat-elevation-z6","w-100","mt-3"]],template:function(s,a){1&s&&(t.TgZ(0,"mat-sidenav-container",0)(1,"div",1)(2,"form",2),t.NdJ("ngSubmit",function(){return a.onSubmit(a.form.value)}),t._UZ(3,"app-content-header",3),t.TgZ(4,"div",4)(5,"a",5),t._uU(6,"Don't have an account? Sign up now!"),t.qZA(),t.TgZ(7,"mat-form-field",6)(8,"mat-label"),t._uU(9,"Email"),t.qZA(),t.TgZ(10,"mat-icon",7),t._uU(11,"mail"),t.qZA(),t._UZ(12,"input",8),t.YNc(13,U,2,0,"mat-error",9),t.YNc(14,y,2,0,"mat-error",9),t.qZA(),t.TgZ(15,"mat-form-field",6)(16,"mat-label"),t._uU(17,"Password"),t.qZA(),t.TgZ(18,"mat-icon",7),t._uU(19,"lock"),t.qZA(),t._UZ(20,"input",10),t.YNc(21,C,2,0,"mat-error",9),t.YNc(22,L,2,0,"mat-error",9),t.qZA(),t.TgZ(23,"mat-slide-toggle",11),t._uU(24,"Keep me signed in"),t.qZA(),t.TgZ(25,"button",12),t._uU(26,"SIGN IN"),t.qZA()()()()()),2&s&&(t.xp6(2),t.Q6J("formGroup",a.form),t.xp6(1),t.Tol("py-4"),t.Q6J("icon","exit_to_app")("title","Login")("hideBreadcrumb",!0)("hasBgImage",!0),t.xp6(10),t.Q6J("ngIf",null==a.form.controls.email.errors?null:a.form.controls.email.errors.required),t.xp6(1),t.Q6J("ngIf",a.form.controls.email.hasError("invalidEmail")),t.xp6(7),t.Q6J("ngIf",null==a.form.controls.password.errors?null:a.form.controls.password.errors.required),t.xp6(1),t.Q6J("ngIf",a.form.controls.password.hasError("minlength")))},dependencies:[g.O5,l.rH,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u,u.xw,u.Wh,u.yH,d.zs,d.lW,Z.Hw,T.Nt,i.KE,i.hX,i.TO,i.qo,I.TM,A.Rr,x.e],encapsulation:2}),n})(),pathMatch:"full"}];let S=(()=>{const o=class{};let n=o;return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.ez,l.Bz.forChild(p),e.u5,e.UX,c.m]}),n})()}}]);