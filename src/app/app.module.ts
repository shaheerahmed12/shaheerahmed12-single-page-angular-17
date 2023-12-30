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

const appRoutes:Routes=[
  {path:'',component: PropertyListComponent},
  {path:'add-property',component:    AddPropertyComponent},
  {path:'property-detail/:id',component:   PropertyDetailComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardComponent,
    PropertyListComponent,
    AddPropertyComponent,
   PropertyDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
