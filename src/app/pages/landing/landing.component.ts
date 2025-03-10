import { Component, ViewEncapsulation } from '@angular/core'; 
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { LandingService } from './landing.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None 
})
export class LandingComponent {
  public menuItems;  
  public settings: Settings;  
  constructor(public appSettings:AppSettings, private landingService:LandingService) {
    this.settings = this.appSettings.settings; 
  }

  ngOnInit(){
    this.menuItems = this.landingService.getMenuItems();    
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.settings.loadingSpinner = false; 
    }); 
  }
  
  scrollToSection(id: string): void {  
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.offsetTop;
      const container = document.querySelector('.landing-container .mat-drawer-content');
      if (container instanceof HTMLElement) {
        container.scrollTo({
          top: elementPosition - 2,
          behavior: "smooth"
        });
      }
    }
  }
  
}