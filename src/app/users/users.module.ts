import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './users.component';
import {MaterialModule} from '../material.module';
import {NgDynamicTableModule} from '@intersalonica/ng-dynamic-table';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    HttpClientModule,
    NgDynamicTableModule.forRoot({path: 'assets/columnDefinitionFolder'}),
    FlexLayoutModule,
  ]
})
export class UsersModule {
}
