"use strict";(self.webpackChunkdashboard_angular_16=self.webpackChunkdashboard_angular_16||[]).push([[778],{4778:(W,g,e)=>{e.r(g),e.d(g,{DynamicMenuModule:()=>P,routes:()=>b});var f=e(4755),M=e(6873),s=e(9401),C=e(3784),L=e(8372),v=e(4571),U=e(6529),t=e(2223);let Z=(()=>{const o=class{constructor(i,a,n){this.componentFactoryResolver=i,this.applicationRef=a,this.injector=n}addNewMenuItem(i,a,n){const u=new U.v(a[a.length-1].id+1,n.title,n.routerLink,n.href,n.icon,n.target,n.hasSubMenu,parseInt(n.parentId));a.push(u);let A=a.filter(X=>X.id==u.parentId)[0];A&&(A.hasSubMenu=!0);const h=this.componentFactoryResolver.resolveComponentFactory(i).create(this.injector);this.applicationRef.attachView(h.hostView);let I=h.instance;I.menuItems=a,I.menuParentId=0;const E=h.hostView.rootNodes[0],p=document.getElementById("vertical-menu");p&&p.replaceChild(E,p.children[0])}};let r=o;return o.\u0275fac=function(a){return new(a||o)(t.LFG(t._Vd),t.LFG(t.z2F),t.LFG(t.zs3))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),r})();var S=e(2359),x=e(3823),N=e(6211),V=e(2342),c=e(1576),F=e(1217),J=e(1728),y=e(6012),B=e(1292),Q=e(430),Y=e(8097),d=e(9114),T=e(4867),k=e(787),q=e(3649),D=e(5779);function G(r,o){1&r&&(t.TgZ(0,"mat-error"),t._uU(1,"Menu title is required"),t.qZA())}function O(r,o){1&r&&(t.TgZ(0,"mat-error"),t._uU(1,"Menu title isn't long enough, minimum of 3 characters"),t.qZA())}function R(r,o){if(1&r&&(t.TgZ(0,"mat-option",17)(1,"mat-icon"),t._uU(2),t.qZA(),t._uU(3),t.qZA()),2&r){const l=o.$implicit;t.Q6J("value",l),t.xp6(2),t.Oqu(l),t.xp6(1),t.hij("",l," ")}}function j(r,o){1&r&&(t.TgZ(0,"mat-error"),t._uU(1,"Routerlink or href is required"),t.qZA())}function H(r,o){1&r&&(t.TgZ(0,"mat-error"),t._uU(1,"Href or routerlink is required"),t.qZA())}function z(r,o){if(1&r&&(t.TgZ(0,"mat-option",17),t._uU(1),t.qZA()),2&r){const l=o.$implicit;t.Q6J("value",l.id),t.xp6(1),t.hij(" ",l.title," ")}}const b=[{path:"",component:(()=>{const o=class{constructor(i,a,n,m,u){this.appSettings=i,this.formBuilder=a,this.snackBar=n,this.menuService=m,this.dynamicMenuService=u,this.icons=["home","person","card_travel","delete","event","favorite","help"],this.settings=this.appSettings.settings,this.menuItems=this.menuService.getVerticalMenuItems()}ngOnInit(){this.form=this.formBuilder.group({title:["",s.kI.compose([s.kI.required,s.kI.minLength(3)])],icon:null,routerLink:["",s.kI.required],href:["",s.kI.required],target:null,hasSubMenu:!1,parentId:0})}ngAfterViewInit(){this.form.valueChanges.pipe((0,L.b)(500)).subscribe(i=>{i.routerLink&&""!=i.routerLink?(this.form.controls.href.setValue(null),this.form.controls.href.disable(),this.form.controls.href.clearValidators(),this.form.controls.target.setValue(null),this.form.controls.target.disable()):(this.form.controls.href.enable(),this.form.controls.href.setValidators([s.kI.required]),this.form.controls.target.enable()),this.form.controls.href.updateValueAndValidity(),i.href&&""!=i.href?(this.form.controls.routerLink.setValue(null),this.form.controls.routerLink.disable(),this.form.controls.routerLink.clearValidators(),this.form.controls.hasSubMenu.setValue(!1),this.form.controls.hasSubMenu.disable()):(this.form.controls.routerLink.enable(),this.form.controls.routerLink.setValidators([s.kI.required]),this.form.controls.hasSubMenu.enable()),this.form.controls.routerLink.updateValueAndValidity()})}onSubmit(i){this.form.valid&&(this.dynamicMenuService.addNewMenuItem(S.y,this.menuItems,i),this.snackBar.open("New menu item added successfully!","",{duration:2e3}),this.form.reset({hasSubMenu:!1,parentId:0}))}};let r=o;return o.\u0275fac=function(a){return new(a||o)(t.Y36(N.d),t.Y36(s.QS),t.Y36(V.ux),t.Y36(v.h),t.Y36(Z))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-dynamic-menu"]],hostVars:1,hostBindings:function(a,n){2&a&&t.d8E("@blockTransition",void 0)},features:[t._Bn([Z,v.h])],decls:44,vars:15,consts:[[3,"icon","title","desc","hideBreadcrumb","hasBgImage"],["fxLayout","row wrap","fxLayoutAlign","center",1,"p-2"],["fxFlex","100","fxFlex.gt-sm","50","fxFlex.sm","60",1,"p-2"],[1,"block"],[3,"formGroup","ngSubmit"],[1,"w-100"],["matInput","","formControlName","title"],[4,"ngIf"],["formControlName","icon"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","routerLink","matTooltip","e.g. /dashboard","matTooltipPosition","after"],["formControlName","hasSubMenu"],["matInput","","formControlName","href","matTooltip","e.g. http://themeseason.com","matTooltipPosition","after"],["formControlName","target"],["value","_blank"],["value","_self",1,"mx-2"],["formControlName","parentId"],[3,"value"],["fxLayout","row","fxLayoutAlign","center"],["mat-raised-button","","color","primary","type","submit",3,"disabled"]],template:function(a,n){1&a&&(t._UZ(0,"app-content-header",0),t.TgZ(1,"div",1)(2,"div",2)(3,"mat-card",3)(4,"mat-card-content")(5,"form",4),t.NdJ("ngSubmit",function(){return n.onSubmit(n.form.value)}),t.TgZ(6,"mat-form-field",5)(7,"mat-label"),t._uU(8,"Title"),t.qZA(),t._UZ(9,"input",6),t.YNc(10,G,2,0,"mat-error",7),t.YNc(11,O,2,0,"mat-error",7),t.qZA(),t.TgZ(12,"mat-form-field",5)(13,"mat-label"),t._uU(14,"Icon"),t.qZA(),t.TgZ(15,"mat-select",8),t.YNc(16,R,4,3,"mat-option",9),t.qZA()(),t.TgZ(17,"mat-form-field",5)(18,"mat-label"),t._uU(19,"RouterLink"),t.qZA(),t._UZ(20,"input",10),t.YNc(21,j,2,0,"mat-error",7),t.qZA(),t.TgZ(22,"mat-checkbox",11),t._uU(23,"Has sub menu"),t.qZA(),t.TgZ(24,"mat-form-field",5)(25,"mat-label"),t._uU(26,"Href"),t.qZA(),t._UZ(27,"input",12),t.YNc(28,H,2,0,"mat-error",7),t.qZA(),t.TgZ(29,"mat-radio-group",13)(30,"mat-radio-button",14),t._uU(31,"_blank"),t.qZA(),t.TgZ(32,"mat-radio-button",15),t._uU(33,"_self"),t.qZA()(),t.TgZ(34,"mat-form-field",5)(35,"mat-label"),t._uU(36,"Parent menu"),t.qZA(),t.TgZ(37,"mat-select",16)(38,"mat-option",17),t._uU(39,"-- Select Parent Menu --"),t.qZA(),t.YNc(40,z,2,2,"mat-option",9),t.qZA()(),t.TgZ(41,"div",18)(42,"button",19),t._uU(43,"Add New Menu Item"),t.qZA()()()()()()()),2&a&&(t.Tol("pb-4"),t.Q6J("icon","format_list_bulleted")("title","Dynamic menu")("desc","Create and add menu items dynamically using following approach.")("hideBreadcrumb",!1)("hasBgImage",!0),t.xp6(5),t.Q6J("formGroup",n.form),t.xp6(5),t.Q6J("ngIf",null==n.form.controls.title.errors?null:n.form.controls.title.errors.required),t.xp6(1),t.Q6J("ngIf",n.form.controls.title.hasError("minlength")),t.xp6(5),t.Q6J("ngForOf",n.icons),t.xp6(5),t.Q6J("ngIf",null==n.form.controls.routerLink.errors?null:n.form.controls.routerLink.errors.required),t.xp6(7),t.Q6J("ngIf",null==n.form.controls.href.errors?null:n.form.controls.href.errors.required),t.xp6(12),t.Q6J("ngForOf",n.menuItems),t.xp6(2),t.Q6J("disabled",!n.form.valid))},dependencies:[f.sg,f.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,c.xw,c.Wh,c.yH,F.ey,J.lW,y.a8,y.dn,B.oG,Q.Hw,Y.Nt,d.KE,d.hX,d.TO,T.VQ,T.U0,k.gD,q.gM,D.e],encapsulation:2,data:{animation:[x.Gm]}}),r})(),pathMatch:"full"}];let P=(()=>{const o=class{};let r=o;return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[f.ez,s.u5,s.UX,M.Bz.forChild(b),C.m]}),r})()}}]);