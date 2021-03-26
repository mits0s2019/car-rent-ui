import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';


const MATERIAL_MODULES = [
  MatToolbarModule,
  MatButtonModule
]

@NgModule({
  declarations: [],
  exports:[...MATERIAL_MODULES]
})
export class MaterialModule { }
