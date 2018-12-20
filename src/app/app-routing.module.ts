import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccomodationComponent } from '../app/components/accomodation/accomodation.component';
import { FoodBeverageComponent } from '../app/components/food-beverage/food-beverage.component';
import { LifestyleComponent } from '../app/components/lifestyle/lifestyle.component';
import { SignupComponent } from '../app/core/auth/signup/signup.component';

const routes: Routes = [
  { 'path': "accomodation", component: AccomodationComponent },
  { 'path': "food-beverage", component: FoodBeverageComponent },
  { 'path': "lifestyle", component: LifestyleComponent },
  { 'path': "signup", component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
