import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainsearchComponent } from './mainsearch/mainsearch.component';
import { FilterMainComponent } from './filter-main/filter-main.component'
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    MainsearchComponent,
    FilterMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = 'ddangularapp';
}
