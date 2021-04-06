import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegisterRoutingModule} from './register-routing.module';
import {RegisterComponent} from './register.component';
import {MaterialModule} from '../material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexModule} from '@angular/flex-layout';
import {NgValidatorModule} from '@intersalonica/ng-validator';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexModule,
    NgValidatorModule.forRoot({url: 'http://localhost:8082/api/validation/field'}),
  ],
  providers: [
  ]
})
export class RegisterModule {
}
