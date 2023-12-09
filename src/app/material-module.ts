import { NgModule } from "@angular/core";
import {MatSidenavModule} from "@angular/material/sidenav"
import {MatIconModule} from "@angular/material/icon"
import {MatButtonModule} from "@angular/material/button"
import {MatListModule} from "@angular/material/list"
import {MatInputModule} from "@angular/material/input"
import {MatSelectModule} from "@angular/material/select"
import {MatAutocompleteModule} from "@angular/material/autocomplete"
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatMenuModule} from "@angular/material/menu"
import {MatBadgeModule} from "@angular/material/badge"

import {MatCardModule} from "@angular/material/card"
import {MatTableModule} from "@angular/material/table"









@NgModule({
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatMenuModule,
    MatBadgeModule,
    MatCardModule,
    MatTableModule

    
    
  ]
  
})
export class MaterialModule { }
