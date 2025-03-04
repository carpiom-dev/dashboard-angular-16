import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; 
import { AppSettings } from '../app.settings';
import { Settings } from '../app.settings.model';
import { rotate } from '../theme/utils/app-animation';
import { MenuService } from '../theme/components/menu/menu.service';
import { MatDrawerContent } from '@angular/material/sidenav';
import { SubscriptionsContainer } from '../theme/utils/subscriptions-container';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  animations: [ rotate ],
  providers: [ MenuService ]
})
export class PagesComponent implements OnInit { 
  @ViewChild('sidenav') sidenav: any;  
  @ViewChild('backToTop') backToTop: any;
  @ViewChild('mainContent') mainContent: MatDrawerContent;  
  public settings:Settings;
  public showSidenav:boolean = false;
  public showInfoContent:boolean = false;
  public toggleSearchBar:boolean = false;
  private defaultMenu:string; //declared for return default menu when window resized 
  public menus = ['vertical', 'horizontal'];
  public menuOption:string;
  public menuTypes = ['default', 'compact', 'mini'];
  public menuTypeOption:string;
  subs = new SubscriptionsContainer(); 

  constructor(public appSettings: AppSettings, public router: Router, private menuService: MenuService) {        
    this.settings = this.appSettings.settings;
  }
  
  ngOnInit() { 
    if(window.innerWidth <= 960){
      this.settings.menu = 'vertical';
      this.settings.sidenavIsOpened = false;
      this.settings.sidenavIsPinned = false;
    }
    this.menuOption = this.settings.menu; 
    this.menuTypeOption = this.settings.menuType; 
    this.defaultMenu = this.settings.menu;
  }

  ngAfterViewInit() {
    setTimeout(() => { this.settings.loadingSpinner = false }, 300); 
    this.backToTop.nativeElement.style.display = 'none'; 
    this.subs.add = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.scrollToTop();
      } 
      if(window.innerWidth <= 960){
        this.sidenav.close(); 
      }                
    });
    if(this.settings.menu == "vertical")
      this.menuService.expandActiveSubMenu(this.menuService.getVerticalMenuItems()); 
  }

  ngOnDestroy() {
    this.subs.dispose();
  }

  public toggleSidenav() {
    this.sidenav.toggle();
  }

  public chooseMenu() {
    this.settings.menu = this.menuOption; 
    this.defaultMenu = this.menuOption;
    if(this.menuOption == 'horizontal'){
      this.settings.fixedSidenav = false;
    }
    this.router.navigate(['/']); 
  }

  public chooseMenuType() {
    this.settings.menuType = this.menuTypeOption;
  }

  public changeTheme(theme: string) {
    this.settings.theme = theme;       
  }
  
  public closeInfoContent(showInfoContent: boolean) {
    this.showInfoContent = !showInfoContent;
  }

  @HostListener('window:resize') onWindowResize(): void {
    if (window.innerWidth <= 960) {
      this.settings.sidenavIsOpened = false;
      this.settings.sidenavIsPinned = false;
      this.settings.menu = 'vertical'
    }
    else {
      (this.defaultMenu == 'horizontal') ? this.settings.menu = 'horizontal' : this.settings.menu = 'vertical'
      this.settings.sidenavIsOpened = true;
      this.settings.sidenavIsPinned = true;
    }
  } 

  public scrollToTop() { 
    if (this.settings.fixedHeader && this.settings.fixedSidenav) { 
      this.mainContent.scrollTo({
        behavior: 'smooth',
        top: 0
      });
    } 
    else {
      window.scrollTo({
        behavior: 'smooth',
        top: 0
      })
    } 
  }
  
  public closeSubMenus() {
    if (this.settings.menu == "vertical") {
      this.menuService.closeAllSubMenus();
    }      
  }

  onMainContentScroll(event: any) {
    this.toggleBackToTop(event.target.scrollTop);    
  }

  @HostListener('window:scroll') onWindowScroll(): void {
    this.toggleBackToTop(window.scrollY);
  }

  toggleBackToTop(value: number) {
    value > 300 ? this.backToTop.nativeElement.style.display = 'flex' : this.backToTop.nativeElement.style.display = 'none';
  }

}