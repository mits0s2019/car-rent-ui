import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegisterRoutingModule} from './register-routing.module';
import {RegisterComponent} from './register.component';
import {MaterialModule} from '../material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexModule} from '@angular/flex-layout';
import {NgValidatorModule} from '@intersalonica/ng-validator';
import {NgInputModule} from '@intersalonica/ng-input';
import {NgButtonModule} from '@intersalonica/ng-button';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexModule,
    NgInputModule,
    NgButtonModule,
    NgValidatorModule,
  ],
  providers: [
  ]
})
export class RegisterModule {
}
