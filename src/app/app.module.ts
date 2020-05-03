import { DataFilterPipe } from './search-pipe/filter-countries.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { CountriesDetailComponent } from './countries-detail/countries-detail.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountriesDetailComponent,
    DataFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
