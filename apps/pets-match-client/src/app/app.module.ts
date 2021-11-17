import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PageHomeComponent} from './pages/page-home/page-home.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';

import {PetsModule} from "./pets/pets.module";


@NgModule({
  declarations: [AppComponent, PageHomeComponent],
  imports: [HttpClientModule, BrowserModule, RouterModule, AppRoutingModule, PetsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
