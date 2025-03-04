import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { GoogleMapsModule } from '@angular/google-maps'; 
import { NguCarouselModule } from '@ngu/carousel'; 
import { LandingService } from './landing.service';
import { LandingComponent } from './landing.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { YearlyComponent } from './yearly/yearly.component';
import { PricingComponent } from './pricing/pricing.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurWorksComponent } from './our-works/our-works.component';
import { FeaturesComponent } from './features/features.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule,
    GoogleMapsModule,
    NguCarouselModule
  ],
  declarations: [
    LandingComponent,
    MonthlyComponent,
    YearlyComponent,
    PricingComponent,
    TestimonialsComponent,
    OurServicesComponent,
    OurWorksComponent,
    FeaturesComponent,
    ContactUsComponent
  ],
  providers: [ 
    LandingService 
  ] 
})
export class LandingModule { }
