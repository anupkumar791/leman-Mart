import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '@component/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ValidationDirective } from '@directives/validation.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MaterialModule } from '../app/material.module';
import { AccomodationComponent } from './components/accomodation/accomodation.component';
import { RoomsComponent } from './components/accomodation/rooms/rooms.component';
import { FoodBeverageComponent } from './components/food-beverage/food-beverage.component';
import { RestaurantComponent } from './components/food-beverage/restaurant/restaurant.component';
import { BarsComponent } from './components/food-beverage/bars/bars.component';
import { LifestyleComponent } from './components/lifestyle/lifestyle.component';
import { WelnessAndSpaComponent } from './components/lifestyle/welness-and-spa/welness-and-spa.component';
import { ResortActivitiesComponent } from './components/lifestyle/resort-activities/resort-activities.component';
import { ExperiencesComponent } from './components/lifestyle/experiences/experiences.component';
import { ExcursionsComponent } from './components/lifestyle/excursions/excursions.component';
import { SignupComponent } from './core/auth/signup/signup.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ValidationDirective,
    AccomodationComponent,
    RoomsComponent,
    FoodBeverageComponent,
    RestaurantComponent,
    BarsComponent,
    LifestyleComponent,
    WelnessAndSpaComponent,
    ResortActivitiesComponent,
    ExperiencesComponent,
    ExcursionsComponent,
    SignupComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
