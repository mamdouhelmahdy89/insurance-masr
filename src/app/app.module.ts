import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start/start.component';
import { HomeComponent } from './components/home/home/home.component';
import { CarsInsuranceComponent } from './components/cars_insurance/cars-insurance/cars-insurance.component';
import { SecuringFacilitiesComponent } from './components/securing_facilities/securing-facilities/securing-facilities.component';
import { PersonInsuranceComponent } from './components/person_insurance/person-insurance/person-insurance.component';
import { RegisterComponent } from './components/register/register/register.component';
import { AboutusComponent } from './components/aboutus/aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    HomeComponent,
    CarsInsuranceComponent,
    SecuringFacilitiesComponent,
    PersonInsuranceComponent,
    RegisterComponent,
    AboutusComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
