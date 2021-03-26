import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
]

@NgModule({
  declarations: [],
  exports:[...MATERIAL_MODULES]
})
export class MaterialModule { }
