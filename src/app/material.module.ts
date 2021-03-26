import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,

]

@NgModule({
  imports: [...MATERIAL_MODULES],
  declarations: [],
  exports:[...MATERIAL_MODULES]
})
export class MaterialModule { }
