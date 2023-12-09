import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material-module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent,
    ActivitiesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class HomeModule { }
