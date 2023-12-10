import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { GuardsComponent } from './pages/guards/guards.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { AdminsComponent } from './pages/admins/admins.component';
import { OwnersComponent } from './pages/owners/owners.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'activities',
        title: 'Activities',
        component: ActivitiesComponent
      },
       {
        path: 'guards',
        title: 'Guards',
        component: GuardsComponent
       },
       {
        path: 'owners',
        title: 'Owners',
        component: OwnersComponent
       },
       {
        path: 'vehicles',
        title: 'Vihicles',
        component: VehiclesComponent
       },
       {
        path: 'admins',
        title: 'Admins',
        component: AdminsComponent
       },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
