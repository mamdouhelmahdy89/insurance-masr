import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus/aboutus.component';
import { CarsInsuranceComponent } from './components/cars_insurance/cars-insurance/cars-insurance.component';
import { HomeComponent } from './components/home/home/home.component';
import { PersonInsuranceComponent } from './components/person_insurance/person-insurance/person-insurance.component';
import { RegisterComponent } from './components/register/register/register.component';
import { SecuringFacilitiesComponent } from './components/securing_facilities/securing-facilities/securing-facilities.component';

const routes: Routes = [

  {path:"cars_insurance",component:CarsInsuranceComponent},
  {path:"securing_facilities",component:SecuringFacilitiesComponent},
  {path:"person_insurance",component:PersonInsuranceComponent},
  {path:"register",component:RegisterComponent},
  {path:"aboutus",component:AboutusComponent},


  {path:"**",component:HomeComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
