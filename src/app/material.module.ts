import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatInputModule
]

@NgModule({
  declarations: [],
  exports:[...MATERIAL_MODULES]
})
export class MaterialModule { }
