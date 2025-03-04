"use strict";(self.webpackChunkdashboard_angular_16=self.webpackChunkdashboard_angular_16||[]).push([[228],{2228:(he,C,c)=>{c.r(C),c.d(C,{FormControlsModule:()=>se,routes:()=>Q});var g=c(4755),B=c(6873),i=c(9401),q=c(441),O=c(3784),D=c(8675),E=c(4004),e=c(2223),h=c(6211),s=c(1576),k=c(8995),v=c(1217),m=c(6012),T=c(8097),u=c(9114),f=c(5779);function V(o,a){if(1&o&&(e.TgZ(0,"mat-option",9),e._uU(1),e.qZA()),2&o){const d=a.$implicit;e.Q6J("value",d),e.xp6(1),e.hij(" ",d," ")}}function Y(o,a){if(1&o&&(e.TgZ(0,"mat-option",9),e._uU(1),e.qZA()),2&o){const d=a.$implicit;e.Q6J("value",d),e.xp6(1),e.hij(" ",d," ")}}let z=(()=>{const a=class{constructor(l){this.appSettings=l,this.myControl=new i.p4,this.options=["One","Two","Three"],this.filteredControl=new i.p4,this.settings=this.appSettings.settings}ngOnInit(){this.filteredOptions=this.filteredControl.valueChanges.pipe((0,D.O)(""),(0,E.U)(l=>this._filter(l||"")))}_filter(l){const n=l.toLowerCase();return this.options.filter(t=>t.toLowerCase().includes(n))}};let o=a;return a.\u0275fac=function(n){return new(n||a)(e.Y36(h.d))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-autocomplete"]],decls:31,vars:14,consts:[[3,"icon","title","hideBreadcrumb","hasBgImage"],["fxLayout","column","fxLayout.gt-sm","row wrap",1,"p-2"],["fxFlex","50",1,"p-2"],["fxLayoutAlign","center"],["fxLayoutAlign","center",1,"pt-3"],["type","text","placeholder","Pick one","matInput","",3,"formControl","matAutocomplete"],["simpleAuto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["auto","matAutocomplete"],[3,"value"]],template:function(n,t){if(1&n&&(e._UZ(0,"app-content-header",0),e.TgZ(1,"div",1)(2,"div",2)(3,"mat-card")(4,"mat-card-header",3)(5,"mat-card-title"),e._uU(6,"Simple autocomplete"),e.qZA()(),e.TgZ(7,"mat-card-content",4)(8,"form")(9,"mat-form-field")(10,"mat-label"),e._uU(11,"Number"),e.qZA(),e._UZ(12,"input",5),e.TgZ(13,"mat-autocomplete",null,6),e.YNc(15,V,2,2,"mat-option",7),e.qZA()()()()()(),e.TgZ(16,"div",2)(17,"mat-card")(18,"mat-card-header",3)(19,"mat-card-title"),e._uU(20,"Filter autocomplete"),e.qZA()(),e.TgZ(21,"mat-card-content",4)(22,"form")(23,"mat-form-field")(24,"mat-label"),e._uU(25,"Number"),e.qZA(),e._UZ(26,"input",5),e.TgZ(27,"mat-autocomplete",null,8),e.YNc(29,Y,2,2,"mat-option",7),e.ALo(30,"async"),e.qZA()()()()()()()),2&n){const p=e.MAs(14),r=e.MAs(28);e.Tol("pb-4"),e.Q6J("icon","short_text")("title","Autocomplete")("hideBreadcrumb",!1)("hasBgImage",!0),e.xp6(12),e.Q6J("formControl",t.myControl)("matAutocomplete",p),e.xp6(3),e.Q6J("ngForOf",t.options),e.xp6(11),e.Q6J("formControl",t.filteredControl)("matAutocomplete",r),e.xp6(3),e.Q6J("ngForOf",e.lcZ(30,12,t.filteredOptions))}},dependencies:[g.sg,i._Y,i.Fj,i.JJ,i.JL,i.F,i.oH,s.xw,s.Wh,s.yH,k.XC,v.ey,k.ZL,m.a8,m.dn,m.dk,m.n5,T.Nt,u.KE,u.hX,f.e,g.Ov],encapsulation:2}),o})();var A=c(1292),b=c(3630),Z=c(4867);let P=(()=>{const a=class{constructor(l){this.appSettings=l,this.checked=!1,this.indeterminate=!1,this.labelPosition="after",this.disabled=!1,this.settings=this.appSettings.settings}};let o=a;return a.\u0275fac=function(n){return new(n||a)(e.Y36(h.d))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-checkbox"]],decls:30,vars:14,consts:[[3,"icon","title","hideBreadcrumb","hasBgImage"],["fxLayout","column",1,"p-2"],[1,"p-2"],[1,"pt-3"],[1,"py-1"],[1,"mx-1",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],["value","after",1,"mx-1"],["value","before",1,"mx-1"],[1,"py-2"],[3,"ngModel","indeterminate","labelPosition","disabled","ngModelChange","indeterminateChange"]],template:function(n,t){1&n&&(e._UZ(0,"app-content-header",0),e.TgZ(1,"div",1)(2,"div",2)(3,"mat-card")(4,"mat-card-header")(5,"mat-card-title"),e._uU(6,"Checkbox configuration"),e.qZA()(),e.TgZ(7,"mat-card-content",3)(8,"section",4)(9,"mat-checkbox",5),e.NdJ("ngModelChange",function(r){return t.checked=r}),e._uU(10,"Checked"),e.qZA(),e.TgZ(11,"mat-checkbox",5),e.NdJ("ngModelChange",function(r){return t.indeterminate=r}),e._uU(12,"Indeterminate"),e.qZA()(),e.TgZ(13,"section",4)(14,"label"),e._uU(15,"Label position:"),e.qZA(),e.TgZ(16,"mat-radio-group",6),e.NdJ("ngModelChange",function(r){return t.labelPosition=r}),e.TgZ(17,"mat-radio-button",7),e._uU(18,"After"),e.qZA(),e.TgZ(19,"mat-radio-button",8),e._uU(20,"Before"),e.qZA()()(),e.TgZ(21,"section",4)(22,"mat-checkbox",6),e.NdJ("ngModelChange",function(r){return t.disabled=r}),e._uU(23,"Disabled"),e.qZA()(),e._UZ(24,"mat-divider"),e.TgZ(25,"h2",9),e._uU(26,"Result"),e.qZA(),e.TgZ(27,"section",4)(28,"mat-checkbox",10),e.NdJ("ngModelChange",function(r){return t.checked=r})("indeterminateChange",function(r){return t.indeterminate=r}),e._uU(29," I'm a checkbox "),e.qZA()()()()()()),2&n&&(e.Tol("pb-4"),e.Q6J("icon","check_box")("title","Checkbox")("hideBreadcrumb",!1)("hasBgImage",!0),e.xp6(9),e.Q6J("ngModel",t.checked),e.xp6(2),e.Q6J("ngModel",t.indeterminate),e.xp6(5),e.Q6J("ngModel",t.labelPosition),e.xp6(6),e.Q6J("ngModel",t.disabled),e.xp6(6),e.Q6J("ngModel",t.checked)("indeterminate",t.indeterminate)("labelPosition",t.labelPosition)("disabled",t.disabled))},dependencies:[i.JJ,i.On,s.xw,m.a8,m.dn,m.dk,m.n5,A.oG,b.d,Z.VQ,Z.U0,f.e],encapsulation:2}),o})();var J=c(1728),U=c(8280);function R(o,a){if(1&o&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&o){const d=a.$implicit;e.xp6(1),e.Oqu(d)}}let j=(()=>{const a=class{constructor(l){this.appSettings=l,this.startDate=new Date(1990,0,1),this.minDate=new Date(2010,0,1),this.maxDate=new Date(2020,0,1),this.myFilter=n=>{const t=(n||new Date).getDay();return 0!==t&&6!==t},this.events=[],this.settings=this.appSettings.settings}addEvent(l,n){this.events.push(`${l}: ${n.value}`)}};let o=a;return a.\u0275fac=function(n){return new(n||a)(e.Y36(h.d))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-datepicker"]],decls:104,vars:30,consts:[[3,"icon","title","hideBreadcrumb","hasBgImage"],["fxLayout","column","fxLayout.gt-sm","row wrap",1,"p-2"],["fxFlex","50",1,"p-2"],["fxLayoutAlign","center"],["fxLayoutAlign","center",1,"pt-3"],["matInput","","placeholder","Choose a date",3,"matDatepicker"],["matSuffix","",3,"for"],["picker1",""],["startView","year",3,"startAt"],["picker2",""],[1,"example-full-width"],["matInput","","placeholder","Choose a date",3,"min","max","matDatepicker"],["picker3",""],["matInput","","placeholder","Choose a date",3,"matDatepickerFilter","matDatepicker"],["picker4",""],["fxLayout","column","fxLayoutAlign","center center",1,"pt-3"],["matInput","","placeholder","Input & change events",3,"matDatepicker","dateInput","dateChange"],["picker5",""],[1,"w-100","mat-elevation-z4","p-1","events-list"],["pointerEventsMethod","scrollbar"],[4,"ngFor","ngForOf"],["matInput","","placeholder","Completely disabled","disabled","",3,"matDatepicker"],["dp1",""],["matInput","","placeholder","Popup disabled",3,"matDatepicker"],["matSuffix","","disabled","",3,"for"],["dp2",""],["matInput","","placeholder","Input disabled","disabled","",3,"matDatepicker"],["disabled","false"],["dp3",""],["touchUi","true"],["picker6",""],["fxLayoutAlign","center start",1,"pt-3"],["picker7",""],["mat-raised-button","",1,"ml-3","mt-2",3,"click"]],template:function(n,t){if(1&n){const p=e.EpF();e._UZ(0,"app-content-header",0),e.TgZ(1,"div",1)(2,"div",2)(3,"mat-card")(4,"mat-card-header",3)(5,"mat-card-title"),e._uU(6,"Basic datepicker"),e.qZA()(),e.TgZ(7,"mat-card-content",4)(8,"mat-form-field"),e._UZ(9,"input",5)(10,"mat-datepicker-toggle",6)(11,"mat-datepicker",null,7),e.qZA()()()(),e.TgZ(13,"div",2)(14,"mat-card")(15,"mat-card-header",3)(16,"mat-card-title"),e._uU(17,"Datepicker start date"),e.qZA()(),e.TgZ(18,"mat-card-content",4)(19,"mat-form-field"),e._UZ(20,"input",5)(21,"mat-datepicker-toggle",6)(22,"mat-datepicker",8,9),e.qZA()()()(),e.TgZ(24,"div",2)(25,"mat-card")(26,"mat-card-header",3)(27,"mat-card-title"),e._uU(28,"Datepicker with min & max validation"),e.qZA()(),e.TgZ(29,"mat-card-content",4)(30,"mat-form-field",10),e._UZ(31,"input",11)(32,"mat-datepicker-toggle",6)(33,"mat-datepicker",null,12),e.qZA()()()(),e.TgZ(35,"div",2)(36,"mat-card")(37,"mat-card-header",3)(38,"mat-card-title"),e._uU(39,"Datepicker with filter validation"),e.qZA()(),e.TgZ(40,"mat-card-content",4)(41,"mat-form-field",10),e._UZ(42,"input",13)(43,"mat-datepicker-toggle",6)(44,"mat-datepicker",null,14),e.qZA()()()(),e.TgZ(46,"div",2)(47,"mat-card")(48,"mat-card-header",3)(49,"mat-card-title"),e._uU(50,"Datepicker input and change events"),e.qZA()(),e.TgZ(51,"mat-card-content",15)(52,"mat-form-field")(53,"input",16),e.NdJ("dateInput",function(_){return t.addEvent("input",_)})("dateChange",function(_){return t.addEvent("change",_)}),e.qZA(),e._UZ(54,"mat-datepicker-toggle",6)(55,"mat-datepicker",null,17),e.qZA(),e.TgZ(57,"div",18)(58,"ng-scrollbar",19),e.YNc(59,R,2,1,"div",20),e.qZA()()()()(),e.TgZ(60,"div",2)(61,"mat-card")(62,"mat-card-header",3)(63,"mat-card-title"),e._uU(64,"Disabled datepicker"),e.qZA()(),e.TgZ(65,"mat-card-content",15)(66,"mat-form-field"),e._UZ(67,"input",21)(68,"mat-datepicker-toggle",6)(69,"mat-datepicker",null,22),e.qZA(),e.TgZ(71,"mat-form-field"),e._UZ(72,"input",23)(73,"mat-datepicker-toggle",24)(74,"mat-datepicker",null,25),e.qZA(),e.TgZ(76,"mat-form-field"),e._UZ(77,"input",26)(78,"mat-datepicker-toggle",6)(79,"mat-datepicker",27,28),e.qZA()()()(),e.TgZ(81,"div",2)(82,"mat-card")(83,"mat-card-header",3)(84,"mat-card-title"),e._uU(85,"Datepicker touch UI"),e.qZA()(),e.TgZ(86,"mat-card-content",4)(87,"mat-form-field"),e._UZ(88,"input",5)(89,"mat-datepicker-toggle",6)(90,"mat-datepicker",29,30),e.qZA()()()(),e.TgZ(92,"div",2)(93,"mat-card")(94,"mat-card-header",3)(95,"mat-card-title"),e._uU(96,"Datepicker open method"),e.qZA()(),e.TgZ(97,"mat-card-content",31)(98,"mat-form-field"),e._UZ(99,"input",5)(100,"mat-datepicker",null,32),e.qZA(),e.TgZ(102,"button",33),e.NdJ("click",function(){e.CHM(p);const _=e.MAs(101);return e.KtG(_.open())}),e._uU(103,"Open"),e.qZA()()()()()}if(2&n){const p=e.MAs(12),r=e.MAs(23),_=e.MAs(34),S=e.MAs(45),I=e.MAs(56),w=e.MAs(70),F=e.MAs(75),L=e.MAs(80),N=e.MAs(91),ge=e.MAs(101);e.Tol("pb-4"),e.Q6J("icon","today")("title","Datepicker")("hideBreadcrumb",!1)("hasBgImage",!0),e.xp6(9),e.Q6J("matDatepicker",p),e.xp6(1),e.Q6J("for",p),e.xp6(10),e.Q6J("matDatepicker",r),e.xp6(1),e.Q6J("for",r),e.xp6(1),e.Q6J("startAt",t.startDate),e.xp6(9),e.Q6J("min",t.minDate)("max",t.maxDate)("matDatepicker",_),e.xp6(1),e.Q6J("for",_),e.xp6(10),e.Q6J("matDatepickerFilter",t.myFilter)("matDatepicker",S),e.xp6(1),e.Q6J("for",S),e.xp6(10),e.Q6J("matDatepicker",I),e.xp6(1),e.Q6J("for",I),e.xp6(5),e.Q6J("ngForOf",t.events),e.xp6(8),e.Q6J("matDatepicker",w),e.xp6(1),e.Q6J("for",w),e.xp6(4),e.Q6J("matDatepicker",F),e.xp6(1),e.Q6J("for",F),e.xp6(4),e.Q6J("matDatepicker",L),e.xp6(1),e.Q6J("for",L),e.xp6(10),e.Q6J("matDatepicker",N),e.xp6(1),e.Q6J("for",N),e.xp6(10),e.Q6J("matDatepicker",ge)}},dependencies:[g.sg,q.KC,s.xw,s.Wh,s.yH,J.lW,m.a8,m.dn,m.dk,m.n5,U.Mq,U.hl,U.nW,T.Nt,u.KE,u.R9,f.e],styles:[".events-list[_ngcontent-%COMP%]{height:148px}"]}),o})();var M=c(430),x=c(787);function X(o,a){if(1&o&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&o){const d=e.oxw();e.xp6(1),e.Oqu(d.getErrorMessage())}}function G(o,a){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Min size: 10px"),e.qZA())}let H=(()=>{const a=class{constructor(l,n){this.appSettings=l,this.formBuilder=n,this.email=new i.p4("",[i.kI.required,i.kI.email]),this.hide=!0,this.settings=this.appSettings.settings}ngOnInit(){this.options=this.formBuilder.group({hideRequired:!1,floatLabel:"auto"}),this.themingForm=this.formBuilder.group({color:"primary",fontSize:[16,i.kI.min(10)]})}getErrorMessage(){return this.email.hasError("required")?"You must enter a value":this.email.hasError("email")?"Not a valid email":""}getFontSize(){return Math.max(10,this.themingForm.value.fontSize)}};let o=a;return a.\u0275fac=function(n){return new(n||a)(e.Y36(h.d),e.Y36(i.QS))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-form-field"]],decls:120,vars:24,consts:[[3,"icon","title","hideBreadcrumb","hasBgImage"],["fxLayout","column",1,"p-2"],[1,"p-2"],["fxLayoutAlign","center"],["fxLayout","column","fxLayoutAlign","center",1,"pt-3"],["matInput",""],["value","option1"],["value","option2"],["value","option3"],[3,"formGroup"],["formControlName","hideRequired"],[1,"py-1"],["formControlName","floatLabel"],["value","auto",1,"mx-1"],["value","always",1,"mx-1"],["value","never",1,"mx-1"],[3,"hideRequiredMarker","floatLabel"],["matInput","","placeholder","Simple placeholder","required",""],["required",""],["value","option"],["hintLabel","Max 10 characters"],["matInput","","maxlength","10","placeholder","Enter some input"],["input",""],["align","end"],["placeholder","Select me"],["matInput","","placeholder","Enter your email","required","",3,"formControl"],[4,"ngIf"],["matInput","","placeholder","Enter your password",3,"type"],["matSuffix","",3,"click"],["matInput","","placeholder","Amount","type","number"],["matTextPrefix",""],["matTextSuffix",""],[1,"pt-3"],["fxLayout","column","fxLayoutAlign","center",3,"formGroup"],[3,"color"],["placeholder","Color","formControlName","color"],["value","primary"],["value","accent"],["value","warn"],["matInput","","type","number","placeholder","Font size (px)","formControlName","fontSize","min","10"]],template:function(n,t){if(1&n&&(e._UZ(0,"app-content-header",0),e.TgZ(1,"div",1)(2,"div",2)(3,"mat-card")(4,"mat-card-header",3)(5,"mat-card-title"),e._uU(6,"Simple form field"),e.qZA()(),e.TgZ(7,"mat-card-content",4)(8,"mat-form-field")(9,"mat-label"),e._uU(10,"Input"),e.qZA(),e._UZ(11,"input",5),e.qZA(),e.TgZ(12,"mat-form-field")(13,"mat-label"),e._uU(14,"Textarea"),e.qZA(),e._UZ(15,"textarea",5),e.qZA(),e.TgZ(16,"mat-form-field")(17,"mat-label"),e._uU(18,"Select"),e.qZA(),e.TgZ(19,"mat-select")(20,"mat-option",6),e._uU(21,"Option 1"),e.qZA(),e.TgZ(22,"mat-option",7),e._uU(23,"Option 2"),e.qZA(),e.TgZ(24,"mat-option",8),e._uU(25,"Option 3"),e.qZA()()()()()(),e.TgZ(26,"div",2)(27,"mat-card")(28,"mat-card-header",3)(29,"mat-card-title"),e._uU(30,"Form field with placeholder"),e.qZA()(),e.TgZ(31,"mat-card-content",4)(32,"form",9)(33,"mat-checkbox",10),e._uU(34,"Hide required marker"),e.qZA(),e.TgZ(35,"div",11)(36,"label"),e._uU(37,"Float label: "),e.qZA(),e.TgZ(38,"mat-radio-group",12)(39,"mat-radio-button",13),e._uU(40,"Auto"),e.qZA(),e.TgZ(41,"mat-radio-button",14),e._uU(42,"Always"),e.qZA(),e.TgZ(43,"mat-radio-button",15),e._uU(44,"Never"),e.qZA()()()(),e.TgZ(45,"mat-form-field",16),e._UZ(46,"input",17),e.qZA(),e.TgZ(47,"mat-form-field",16)(48,"mat-select",18)(49,"mat-option"),e._uU(50,"-- None --"),e.qZA(),e.TgZ(51,"mat-option",19),e._uU(52,"Option"),e.qZA()(),e.TgZ(53,"mat-label")(54,"mat-icon"),e._uU(55,"favorite"),e.qZA(),e.TgZ(56,"b"),e._uU(57," Fancy"),e.qZA(),e.TgZ(58,"i"),e._uU(59," label"),e.qZA()()()()()(),e.TgZ(60,"div",2)(61,"mat-card")(62,"mat-card-header",3)(63,"mat-card-title"),e._uU(64,"Form field with hints"),e.qZA()(),e.TgZ(65,"mat-card-content",4)(66,"mat-form-field",20),e._UZ(67,"input",21,22),e.TgZ(69,"mat-hint",23),e._uU(70),e.qZA()(),e.TgZ(71,"mat-form-field")(72,"mat-select",24)(73,"mat-option",19),e._uU(74,"Option"),e.qZA()(),e.TgZ(75,"mat-hint",23),e._uU(76,"Here's the dropdown arrow ^"),e.qZA()()()()(),e.TgZ(77,"div",2)(78,"mat-card")(79,"mat-card-header",3)(80,"mat-card-title"),e._uU(81,"Form field with error messages"),e.qZA()(),e.TgZ(82,"mat-card-content",4)(83,"mat-form-field"),e._UZ(84,"input",25),e.YNc(85,X,2,1,"mat-error",26),e.qZA()()()(),e.TgZ(86,"div",2)(87,"mat-card")(88,"mat-card-header",3)(89,"mat-card-title"),e._uU(90,"Form field with prefix & suffix"),e.qZA()(),e.TgZ(91,"mat-card-content",4)(92,"mat-form-field"),e._UZ(93,"input",27),e.TgZ(94,"mat-icon",28),e.NdJ("click",function(){return t.hide=!t.hide}),e._uU(95),e.qZA()(),e.TgZ(96,"mat-form-field"),e._UZ(97,"input",29),e.TgZ(98,"span",30),e._uU(99,"$\xa0"),e.qZA(),e.TgZ(100,"span",31),e._uU(101,".00"),e.qZA()()()()(),e.TgZ(102,"div",2)(103,"mat-card")(104,"mat-card-header",3)(105,"mat-card-title"),e._uU(106,"Form field theming"),e.qZA()(),e.TgZ(107,"mat-card-content",32)(108,"form",33)(109,"mat-form-field",34)(110,"mat-select",35)(111,"mat-option",36),e._uU(112,"Primary"),e.qZA(),e.TgZ(113,"mat-option",37),e._uU(114,"Accent"),e.qZA(),e.TgZ(115,"mat-option",38),e._uU(116,"Warn"),e.qZA()()(),e.TgZ(117,"mat-form-field",34),e._UZ(118,"input",39),e.YNc(119,G,2,0,"mat-error",26),e.qZA()()()()()()),2&n){const p=e.MAs(68);let r;e.Tol("pb-4"),e.Q6J("icon","view_stream")("title","Form field")("hideBreadcrumb",!1)("hasBgImage",!0),e.xp6(32),e.Q6J("formGroup",t.options),e.xp6(13),e.Q6J("hideRequiredMarker",t.options.value.hideRequired)("floatLabel",t.options.value.floatLabel),e.xp6(2),e.Q6J("hideRequiredMarker",t.options.value.hideRequired)("floatLabel",t.options.value.floatLabel),e.xp6(23),e.hij("",p.value&&p.value.length||0,"/10"),e.xp6(14),e.Q6J("formControl",t.email),e.xp6(1),e.Q6J("ngIf",t.email.invalid),e.xp6(8),e.Q6J("type",t.hide?"password":"text"),e.xp6(2),e.Oqu(t.hide?"visibility":"visibility_off"),e.xp6(2),e.Udp("text-align","right"),e.xp6(11),e.Udp("font-size",t.getFontSize(),"px"),e.Q6J("formGroup",t.themingForm),e.xp6(1),e.Q6J("color",t.themingForm.value.color),e.xp6(8),e.Q6J("color",t.themingForm.value.color),e.xp6(2),e.Q6J("ngIf",null==(r=t.themingForm.get("fontSize"))?null:r.invalid)}},dependencies:[g.O5,i._Y,i.Fj,i.wV,i.JJ,i.JL,i.Q7,i.qQ,i.oH,i.sg,i.u,s.xw,s.Wh,v.ey,m.a8,m.dn,m.dk,m.n5,A.oG,M.Hw,T.Nt,u.KE,u.hX,u.bx,u.TO,u.qo,u.R9,Z.VQ,Z.U0,x.gD,f.e],encapsulation:2}),o})();function W(o,a){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Please enter a valid email address"),e.qZA())}function $(o,a){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Email is "),e.TgZ(2,"strong"),e._uU(3,"required"),e.qZA()())}function K(o,a){if(1&o){const d=e.EpF();e.TgZ(0,"button",30),e.NdJ("click",function(){e.CHM(d);const n=e.oxw();return e.KtG(n.value="")}),e.TgZ(1,"mat-icon"),e._uU(2,"close"),e.qZA()()}}let ee=(()=>{const a=class{constructor(l){this.appSettings=l,this.emailFormControl=new i.p4("",[i.kI.required,i.kI.email]),this.matcher=new te,this.value="Clear me",this.settings=this.appSettings.settings}};let o=a;return a.\u0275fac=function(n){return new(n||a)(e.Y36(h.d))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-input"]],decls:89,vars:13,consts:[[3,"icon","title","hideBreadcrumb","hasBgImage"],["fxLayout","column",1,"p-2"],[1,"p-2"],["fxLayoutAlign","center"],[1,"pt-3"],["fxLayout","column","fxLayoutAlign","center"],["matInput","","value","Sushi"],["matInput",""],["matInput","",3,"formControl","errorStateMatcher"],[4,"ngIf"],["fxLayout","column","fxLayoutAlign","center",1,"pt-3"],["matInput","","matTextareaAutosize","","matAutosizeMinRows","2","matAutosizeMaxRows","5"],[1,"example-form-field"],["matInput","","type","text",3,"ngModel","ngModelChange"],["matSuffix","","mat-icon-button","",3,"click",4,"ngIf"],["matInput","","placeholder","Company (disabled)","disabled","","value","Google"],["cellspacing","0",1,"w-100"],[1,"pr-2"],[1,"w-100"],["matInput","","placeholder","First name"],[1,"pl-2"],["matInput","","placeholder","Long Last Name That Will Be Truncated"],["matInput","","placeholder","Address"],["matInput","","placeholder","Address 2"],["matInput","","placeholder","City"],[1,"px-3"],["matInput","","placeholder","State"],["matInput","","maxlength","5","placeholder","Postal Code","value","94043"],["postalCode",""],["align","end"],["matSuffix","","mat-icon-button","",3,"click"]],template:function(n,t){if(1&n&&(e._UZ(0,"app-content-header",0),e.TgZ(1,"div",1)(2,"div",2)(3,"mat-card")(4,"mat-card-header",3)(5,"mat-card-title"),e._uU(6,"Basic Inputs"),e.qZA()(),e.TgZ(7,"mat-card-content",4)(8,"form",5)(9,"mat-form-field")(10,"mat-label"),e._uU(11,"Favorite food"),e.qZA(),e._UZ(12,"input",6),e.qZA(),e.TgZ(13,"mat-form-field")(14,"mat-label"),e._uU(15,"Leave a comment"),e.qZA(),e._UZ(16,"textarea",7),e.qZA()()()()(),e.TgZ(17,"div",2)(18,"mat-card")(19,"mat-card-header",3)(20,"mat-card-title"),e._uU(21,"Input with a custom ErrorStateMatcher"),e.qZA()(),e.TgZ(22,"mat-card-content",4)(23,"form",5)(24,"mat-form-field")(25,"mat-label"),e._uU(26,"Email"),e.qZA(),e._UZ(27,"input",8),e.TgZ(28,"mat-hint"),e._uU(29,"Errors appear instantly!"),e.qZA(),e.YNc(30,W,2,0,"mat-error",9),e.YNc(31,$,4,0,"mat-error",9),e.qZA()()()()(),e.TgZ(32,"div",2)(33,"mat-card")(34,"mat-card-header",3)(35,"mat-card-title"),e._uU(36,"Auto-resizing textarea"),e.qZA()(),e.TgZ(37,"mat-card-content",10)(38,"mat-form-field")(39,"mat-label"),e._uU(40,"Autosize textarea"),e.qZA(),e._UZ(41,"textarea",11),e.qZA()()()(),e.TgZ(42,"div",2)(43,"mat-card")(44,"mat-card-header",3)(45,"mat-card-title"),e._uU(46,"Input with a clear button"),e.qZA()(),e.TgZ(47,"mat-card-content",10)(48,"mat-form-field",12)(49,"mat-label"),e._uU(50,"Clearable input"),e.qZA(),e.TgZ(51,"input",13),e.NdJ("ngModelChange",function(r){return t.value=r}),e.qZA(),e.YNc(52,K,3,0,"button",14),e.qZA()()()(),e.TgZ(53,"div",2)(54,"mat-card")(55,"mat-card-header",3)(56,"mat-card-title"),e._uU(57,"Inputs in a form"),e.qZA()(),e.TgZ(58,"mat-card-content",4)(59,"form",5)(60,"mat-form-field"),e._UZ(61,"input",15),e.qZA(),e.TgZ(62,"table",16)(63,"tr")(64,"td",17)(65,"mat-form-field",18),e._UZ(66,"input",19),e.qZA()(),e.TgZ(67,"td",20)(68,"mat-form-field",18),e._UZ(69,"input",21),e.qZA()()()(),e.TgZ(70,"mat-form-field",18)(71,"textarea",22),e._uU(72,"1600 Amphitheatre Pkwy"),e.qZA()(),e.TgZ(73,"mat-form-field",18),e._UZ(74,"textarea",23),e.qZA(),e.TgZ(75,"table",16)(76,"tr")(77,"td")(78,"mat-form-field",18),e._UZ(79,"input",24),e.qZA()(),e.TgZ(80,"td",25)(81,"mat-form-field",18),e._UZ(82,"input",26),e.qZA()(),e.TgZ(83,"td")(84,"mat-form-field",18),e._UZ(85,"input",27,28),e.TgZ(87,"mat-hint",29),e._uU(88),e.qZA()()()()()()()()()()),2&n){const p=e.MAs(86);e.Tol("pb-4"),e.Q6J("icon","input")("title","Inputs")("hideBreadcrumb",!1)("hasBgImage",!0),e.xp6(27),e.Q6J("formControl",t.emailFormControl)("errorStateMatcher",t.matcher),e.xp6(3),e.Q6J("ngIf",t.emailFormControl.hasError("email")&&!t.emailFormControl.hasError("required")),e.xp6(1),e.Q6J("ngIf",t.emailFormControl.hasError("required")),e.xp6(20),e.Q6J("ngModel",t.value),e.xp6(1),e.Q6J("ngIf",t.value),e.xp6(36),e.hij("",p.value.length," / 5")}},dependencies:[g.O5,i._Y,i.Fj,i.JJ,i.JL,i.On,i.F,i.oH,s.xw,s.Wh,J.RK,m.a8,m.dn,m.dk,m.n5,M.Hw,T.Nt,u.KE,u.hX,u.bx,u.TO,u.R9,f.e],encapsulation:2}),o})();class te{isErrorState(a,d){return!!(a&&a.invalid&&(a.dirty||a.touched||d&&d.submitted))}}function ae(o,a){if(1&o&&(e.TgZ(0,"mat-radio-button",9),e._uU(1),e.qZA()),2&o){const d=a.$implicit;e.Q6J("value",d),e.xp6(1),e.hij(" ",d," ")}}let oe=(()=>{const a=class{constructor(l){this.appSettings=l,this.seasons=["Winter","Spring","Summer","Autumn"],this.settings=this.appSettings.settings}};let o=a;return a.\u0275fac=function(n){return new(n||a)(e.Y36(h.d))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-radio-button"]],decls:25,vars:9,consts:[[3,"icon","title","hideBreadcrumb","hasBgImage"],["fxLayout","column",1,"p-2"],[1,"p-2"],[1,"pt-3"],["value","1",1,"mx-1"],["value","2",1,"mx-1"],["fxLayout","column","fxLayoutAlign","center",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"py-1"],[3,"value"]],template:function(n,t){1&n&&(e._UZ(0,"app-content-header",0),e.TgZ(1,"div",1)(2,"div",2)(3,"mat-card")(4,"mat-card-header")(5,"mat-card-title"),e._uU(6,"Basic radios"),e.qZA()(),e.TgZ(7,"mat-card-content",3)(8,"mat-radio-group")(9,"mat-radio-button",4),e._uU(10,"Option 1"),e.qZA(),e.TgZ(11,"mat-radio-button",5),e._uU(12,"Option 2"),e.qZA()()()()(),e.TgZ(13,"div",2)(14,"mat-card")(15,"mat-card-header")(16,"mat-card-title"),e._uU(17,"Radios with ngModel"),e.qZA()(),e.TgZ(18,"mat-card-content",3)(19,"mat-radio-group",6),e.NdJ("ngModelChange",function(r){return t.favoriteSeason=r}),e.YNc(20,ae,2,2,"mat-radio-button",7),e.qZA(),e.TgZ(21,"div",8),e._uU(22,"Your favorite season is: "),e.TgZ(23,"b"),e._uU(24),e.qZA()()()()()()),2&n&&(e.Tol("pb-4"),e.Q6J("icon","radio_button_checked")("title","Radio button")("hideBreadcrumb",!1)("hasBgImage",!0),e.xp6(19),e.Q6J("ngModel",t.favoriteSeason),e.xp6(1),e.Q6J("ngForOf",t.seasons),e.xp6(4),e.hij(" ",t.favoriteSeason," "))},dependencies:[g.sg,i.JJ,i.On,s.xw,s.Wh,m.a8,m.dn,m.dk,m.n5,Z.VQ,Z.U0,f.e],encapsulation:2}),o})();function ne(o,a){if(1&o&&(e.TgZ(0,"mat-option",11),e._uU(1),e.qZA()),2&o){const d=a.$implicit;e.Q6J("value",d.value),e.xp6(1),e.hij(" ",d.viewValue," ")}}function ie(o,a){if(1&o&&(e.TgZ(0,"mat-option",11),e._uU(1),e.qZA()),2&o){const d=a.$implicit;e.Q6J("value",d.value),e.xp6(1),e.hij(" ",d.viewValue," ")}}function re(o,a){if(1&o&&(e.TgZ(0,"mat-optgroup",12),e.YNc(1,ie,2,2,"mat-option",5),e.qZA()),2&o){const d=a.$implicit;e.Q6J("label",d.name)("disabled",d.disabled),e.xp6(1),e.Q6J("ngForOf",d.pokemon)}}function le(o,a){if(1&o&&(e.TgZ(0,"mat-option",11),e._uU(1),e.qZA()),2&o){const d=a.$implicit;e.Q6J("value",d),e.xp6(1),e.Oqu(d)}}function me(o,a){if(1&o&&(e.TgZ(0,"small"),e._uU(1),e.qZA()),2&o){const d=e.oxw();e.xp6(1),e.hij(" (+",d.toppings2.value.length-1," others) ")}}function de(o,a){if(1&o&&(e.TgZ(0,"mat-option",11),e._uU(1),e.qZA()),2&o){const d=a.$implicit;e.Q6J("value",d),e.xp6(1),e.Oqu(d)}}let pe=(()=>{const a=class{constructor(l){this.appSettings=l,this.foods=[{value:"steak-0",viewValue:"Steak"},{value:"pizza-1",viewValue:"Pizza"},{value:"tacos-2",viewValue:"Tacos"}],this.pokemonControl=new i.p4,this.pokemonGroups=[{name:"Grass",pokemon:[{value:"bulbasaur-0",viewValue:"Bulbasaur"},{value:"oddish-1",viewValue:"Oddish"},{value:"bellsprout-2",viewValue:"Bellsprout"}]},{name:"Water",pokemon:[{value:"squirtle-3",viewValue:"Squirtle"},{value:"psyduck-4",viewValue:"Psyduck"},{value:"horsea-5",viewValue:"Horsea"}]},{name:"Fire",disabled:!0,pokemon:[{value:"charmander-6",viewValue:"Charmander"},{value:"vulpix-7",viewValue:"Vulpix"},{value:"flareon-8",viewValue:"Flareon"}]},{name:"Psychic",pokemon:[{value:"mew-9",viewValue:"Mew"},{value:"mewtwo-10",viewValue:"Mewtwo"}]}],this.toppings=new i.p4,this.toppingList=["Extra cheese","Mushroom","Onion","Pepperoni","Sausage","Tomato"],this.toppings2=new i.p4,this.toppingList2=["Extra cheese","Mushroom","Onion","Pepperoni","Sausage","Tomato"],this.settings=this.appSettings.settings}};let o=a;return a.\u0275fac=function(n){return new(n||a)(e.Y36(h.d))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-select"]],decls:47,vars:17,consts:[[3,"icon","title","hideBreadcrumb","hasBgImage"],["fxLayout","column",1,"p-2"],[1,"p-2"],[1,"pt-3"],["placeholder","Favorite food","name","food",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"py-1"],["placeholder","Pokemon",3,"formControl"],[3,"label","disabled",4,"ngFor","ngForOf"],["placeholder","Toppings","multiple","",3,"formControl"],[4,"ngIf"],[3,"value"],[3,"label","disabled"]],template:function(n,t){1&n&&(e._UZ(0,"app-content-header",0),e.TgZ(1,"div",1)(2,"div",2)(3,"mat-card")(4,"mat-card-header")(5,"mat-card-title"),e._uU(6,"Basic select"),e.qZA()(),e.TgZ(7,"mat-card-content",3)(8,"mat-form-field")(9,"mat-select",4),e.NdJ("ngModelChange",function(r){return t.selectedValue=r}),e.YNc(10,ne,2,2,"mat-option",5),e.qZA()(),e.TgZ(11,"p",6),e._uU(12," Selected value: "),e.TgZ(13,"b"),e._uU(14),e.qZA()()()()(),e.TgZ(15,"div",2)(16,"mat-card")(17,"mat-card-header")(18,"mat-card-title"),e._uU(19,"Select with option groups"),e.qZA()(),e.TgZ(20,"mat-card-content",3)(21,"mat-form-field")(22,"mat-select",7)(23,"mat-option"),e._uU(24,"-- None --"),e.qZA(),e.YNc(25,re,2,3,"mat-optgroup",8),e.qZA()()()()(),e.TgZ(26,"div",2)(27,"mat-card")(28,"mat-card-header")(29,"mat-card-title"),e._uU(30,"Select with multiple selection"),e.qZA()(),e.TgZ(31,"mat-card-content",3)(32,"mat-form-field")(33,"mat-select",9),e.YNc(34,le,2,2,"mat-option",5),e.qZA()()()()(),e.TgZ(35,"div",2)(36,"mat-card")(37,"mat-card-header")(38,"mat-card-title"),e._uU(39,"Select with custom trigger text"),e.qZA()(),e.TgZ(40,"mat-card-content",3)(41,"mat-form-field")(42,"mat-select",9)(43,"mat-select-trigger"),e._uU(44),e.YNc(45,me,2,1,"small",10),e.qZA(),e.YNc(46,de,2,2,"mat-option",5),e.qZA()()()()()()),2&n&&(e.Tol("pb-4"),e.Q6J("icon","playlist_add_check")("title","Select")("hideBreadcrumb",!1)("hasBgImage",!0),e.xp6(9),e.Q6J("ngModel",t.selectedValue),e.xp6(1),e.Q6J("ngForOf",t.foods),e.xp6(4),e.Oqu(t.selectedValue),e.xp6(8),e.Q6J("formControl",t.pokemonControl),e.xp6(3),e.Q6J("ngForOf",t.pokemonGroups),e.xp6(8),e.Q6J("formControl",t.toppings),e.xp6(1),e.Q6J("ngForOf",t.toppingList),e.xp6(8),e.Q6J("formControl",t.toppings2),e.xp6(2),e.hij(" ",t.toppings2.value?t.toppings2.value[0]:""," "),e.xp6(1),e.Q6J("ngIf",(null==t.toppings2.value?null:t.toppings2.value.length)>1),e.xp6(1),e.Q6J("ngForOf",t.toppingList2))},dependencies:[g.sg,g.O5,i.JJ,i.On,i.oH,s.xw,v.ey,v.Nv,m.a8,m.dn,m.dk,m.n5,u.KE,x.gD,x.$L,f.e],encapsulation:2}),o})();var y=c(533);let ce=(()=>{const a=class{constructor(l){this.appSettings=l,this.disabled=!1,this.max=100,this.min=0,this.showTicks=!1,this.step=1,this.thumbLabel=!1,this.value=0,this.settings=this.appSettings.settings}};let o=a;return a.\u0275fac=function(n){return new(n||a)(e.Y36(h.d))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-slider"]],decls:44,vars:21,consts:[[3,"icon","title","hideBreadcrumb","hasBgImage"],["fxLayout","column",1,"p-2"],[1,"p-2"],[1,"pt-3"],[1,"py-1"],["appearance","fill",1,"mr-3"],["matInput","","type","number",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],[1,"py-3"],["fxLayoutAlign","space-between",1,"custom-slider"],["id","example-name-label"],[1,"custom-slider",3,"disabled","max","min","step","discrete","showTickMarks"],["matSliderThumb","",3,"ngModel","ngModelChange"]],template:function(n,t){1&n&&(e._UZ(0,"app-content-header",0),e.TgZ(1,"div",1)(2,"div",2)(3,"mat-card")(4,"mat-card-header")(5,"mat-card-title"),e._uU(6,"Slider configuration"),e.qZA()(),e.TgZ(7,"mat-card-content",3)(8,"section",4)(9,"mat-form-field",5)(10,"mat-label"),e._uU(11,"Value"),e.qZA(),e.TgZ(12,"input",6),e.NdJ("ngModelChange",function(r){return t.value=r}),e.qZA()(),e.TgZ(13,"mat-form-field",5)(14,"mat-label"),e._uU(15,"Min value"),e.qZA(),e.TgZ(16,"input",6),e.NdJ("ngModelChange",function(r){return t.min=r}),e.qZA()(),e.TgZ(17,"mat-form-field",5)(18,"mat-label"),e._uU(19,"Max value"),e.qZA(),e.TgZ(20,"input",6),e.NdJ("ngModelChange",function(r){return t.max=r}),e.qZA()(),e.TgZ(21,"mat-form-field",5)(22,"mat-label"),e._uU(23,"Step size"),e.qZA(),e.TgZ(24,"input",6),e.NdJ("ngModelChange",function(r){return t.step=r}),e.qZA()()(),e.TgZ(25,"section",4)(26,"mat-checkbox",7),e.NdJ("ngModelChange",function(r){return t.showTicks=r}),e._uU(27,"Show ticks"),e.qZA()(),e.TgZ(28,"section",4)(29,"mat-checkbox",7),e.NdJ("ngModelChange",function(r){return t.thumbLabel=r}),e._uU(30,"Show thumb label"),e.qZA()(),e.TgZ(31,"section",4)(32,"mat-checkbox",7),e.NdJ("ngModelChange",function(r){return t.disabled=r}),e._uU(33,"Disabled"),e.qZA()(),e._UZ(34,"mat-divider"),e.TgZ(35,"h2",8),e._uU(36,"Result"),e.qZA(),e.TgZ(37,"div",9)(38,"label",10),e._uU(39,"Value"),e.qZA(),e.TgZ(40,"label"),e._uU(41),e.qZA()(),e.TgZ(42,"mat-slider",11)(43,"input",12),e.NdJ("ngModelChange",function(r){return t.value=r}),e.qZA()()()()()()),2&n&&(e.Tol("pb-4"),e.Q6J("icon","tune")("title","Slider")("hideBreadcrumb",!1)("hasBgImage",!0),e.xp6(12),e.Q6J("ngModel",t.value),e.xp6(4),e.Q6J("ngModel",t.min),e.xp6(4),e.Q6J("ngModel",t.max),e.xp6(4),e.Q6J("ngModel",t.step),e.xp6(2),e.Q6J("ngModel",t.showTicks),e.xp6(3),e.Q6J("ngModel",t.thumbLabel),e.xp6(3),e.Q6J("ngModel",t.disabled),e.xp6(9),e.Oqu(t.value),e.xp6(1),e.Q6J("disabled",t.disabled)("max",t.max)("min",t.min)("step",t.step)("discrete",t.thumbLabel)("showTickMarks",t.showTicks),e.xp6(1),e.Q6J("ngModel",t.value))},dependencies:[i.Fj,i.wV,i.JJ,i.On,s.xw,s.Wh,m.a8,m.dn,m.dk,m.n5,A.oG,T.Nt,u.KE,u.hX,b.d,y.pH,y.$5,f.e],styles:[".custom-slider[_ngcontent-%COMP%]{width:250px}"]}),o})();var ue=c(877);const Q=[{path:"",redirectTo:"autocomplete",pathMatch:"full"},{path:"autocomplete",component:z,data:{breadcrumb:"Autocomplete"}},{path:"checkbox",component:P,data:{breadcrumb:"Checkbox"}},{path:"datepicker",component:j,data:{breadcrumb:"Datepicker"}},{path:"form-field",component:H,data:{breadcrumb:"Form Field"}},{path:"input",component:ee,data:{breadcrumb:"Input"}},{path:"radio-button",component:oe,data:{breadcrumb:"Radio Button"}},{path:"select",component:pe,data:{breadcrumb:"Select"}},{path:"slider",component:ce,data:{breadcrumb:"Slider"}},{path:"slide-toggle",component:(()=>{const a=class{constructor(l){this.appSettings=l,this.color="accent",this.checked=!1,this.disabled=!1,this.settings=this.appSettings.settings}};let o=a;return a.\u0275fac=function(n){return new(n||a)(e.Y36(h.d))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-slide-toggle"]],decls:29,vars:12,consts:[[3,"icon","title","hideBreadcrumb","hasBgImage"],["fxLayout","column",1,"p-2"],[1,"p-2"],[1,"pt-3"],[1,"py-1"],[3,"ngModel","ngModelChange"],["value","primary",1,"mx-1"],["value","accent",1,"mx-1"],["value","warn",1,"mx-1"],[1,"py-3"],[3,"color","checked","disabled"]],template:function(n,t){1&n&&(e._UZ(0,"app-content-header",0),e.TgZ(1,"div",1)(2,"div",2)(3,"mat-card")(4,"mat-card-header")(5,"mat-card-title"),e._uU(6,"Slide-toggle configuration"),e.qZA()(),e.TgZ(7,"mat-card-content",3)(8,"section",4)(9,"label"),e._uU(10,"Color:"),e.qZA(),e.TgZ(11,"mat-radio-group",5),e.NdJ("ngModelChange",function(r){return t.color=r}),e.TgZ(12,"mat-radio-button",6),e._uU(13,"Primary"),e.qZA(),e.TgZ(14,"mat-radio-button",7),e._uU(15,"Accent"),e.qZA(),e.TgZ(16,"mat-radio-button",8),e._uU(17,"Warn"),e.qZA()()(),e.TgZ(18,"section",4)(19,"mat-checkbox",5),e.NdJ("ngModelChange",function(r){return t.checked=r}),e._uU(20,"Checked"),e.qZA()(),e.TgZ(21,"section",4)(22,"mat-checkbox",5),e.NdJ("ngModelChange",function(r){return t.disabled=r}),e._uU(23,"Disabled"),e.qZA()(),e._UZ(24,"mat-divider"),e.TgZ(25,"h2",9),e._uU(26,"Result"),e.qZA(),e.TgZ(27,"mat-slide-toggle",10),e._uU(28," Slide me! "),e.qZA()()()()()),2&n&&(e.Tol("pb-4"),e.Q6J("icon","star_half")("title","Slide toggle")("hideBreadcrumb",!1)("hasBgImage",!0),e.xp6(11),e.Q6J("ngModel",t.color),e.xp6(8),e.Q6J("ngModel",t.checked),e.xp6(3),e.Q6J("ngModel",t.disabled),e.xp6(5),e.Q6J("color",t.color)("checked",t.checked)("disabled",t.disabled))},dependencies:[i.JJ,i.On,s.xw,m.a8,m.dn,m.dk,m.n5,A.oG,b.d,Z.VQ,Z.U0,ue.Rr,f.e],encapsulation:2}),o})(),data:{breadcrumb:"Slide Toggle"}}];let se=(()=>{const a=class{};let o=a;return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[g.ez,B.Bz.forChild(Q),i.u5,i.UX,q.kb,O.m]}),o})()}}]);