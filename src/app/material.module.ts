import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

const MATERIAL_MODULES = [
  MatToolbarModule,
]

@NgModule({
  declarations: [],
  imports: [...MATERIAL_MODULES],
  exports:[...MATERIAL_MODULES]
})
export class MaterialModule { }
