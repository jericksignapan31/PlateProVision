import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material-module';
import { HomeComponent } from './home.component';
import { GuardsComponent } from './pages/guards/guards.component';
import { OwnersComponent } from './pages/owners/owners.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { AdminsComponent } from './pages/admins/admins.component';




@NgModule({
  declarations: [
    HomeComponent,
    ActivitiesComponent,
    GuardsComponent,
    OwnersComponent,
    VehiclesComponent,
    AdminsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
   
  ]
})
export class HomeModule { }
