import {CarComponent} from './car/car.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {MaterialModule} from './material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CarCollectionComponent} from './car-collection/car-collection.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {AddButtonComponent} from './shared/add-button/add-button.component';
import {NgSecurityModule} from '@intersalonica/ng-security';
import {JwtHelperService, JwtModule, JWT_OPTIONS} from '@auth0/angular-jwt';
import {NgValidatorModule} from '@intersalonica/ng-validator';
import {NgDynamicTableModule} from '@intersalonica/ng-dynamic-table';
import {NgButtonModule} from '@intersalonica/ng-button';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    CarComponent,
    CarCollectionComponent,
    PageNotFoundComponent,
    AddButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    NgSecurityModule.forRoot({
      storageType: 'localStorage',
      jwtTokenName: 'CAR-SHOP-TOKEN',
      userDetailsName: 'USER_DETAILS_NAME'
    }),
    JwtModule,
    NgValidatorModule.forRoot({url: '/api/validation/field'}),
    NgDynamicTableModule.forRoot({path: 'assets/columnDefinitionFolder'}),
    NgButtonModule,
    MatTooltipModule
  ],
  providers: [
    {
      provide: JWT_OPTIONS, useValue: JWT_OPTIONS
    },
    JwtHelperService,
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {
}
