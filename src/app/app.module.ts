import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './navbar/nav/nav.component';
import { CardComponent } from './card/card/card.component';
import { PropertyListComponent } from './property-list/property-list/property-list.component';
import { HttpClientModule} from '@angular/common/http';
import { HousingService } from './services/housing.service';
import { Route,RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './add-property/add-property/add-property.component';
import { PropertyDetailComponent } from './property-detail/property-detail/property-detail.component';
import { PropertyRentComponent } from './property-rent/property-rent/property-rent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './user/Register/Registration/Registration.component';
import { LoginComponent } from './user/Register/login/Login/Login.component';
import { UserServiceService } from './services/userService.service';


const appRoutes:Routes=[
  {path:'',component: PropertyListComponent},
  {path:'add-property',component:    AddPropertyComponent},
  {path:'rent-property',component:   PropertyRentComponent },
  {path:'property-detail/:id',component:  PropertyDetailComponent  },
  {path:'user-login',component:   LoginComponent },
  {path:'user-registration',component:  RegistrationComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardComponent,
    PropertyListComponent,
    AddPropertyComponent,
   PropertyDetailComponent,
   PropertyRentComponent,
   RegistrationComponent,
   LoginComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [
    HousingService,
    UserServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
