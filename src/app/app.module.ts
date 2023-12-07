import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgChartsModule, NgChartsConfiguration} from 'ng2-charts';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { AngularDataComponent } from './component/angular-data/angular-data.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [

    {provide: NgChartsConfiguration, useValue: {generateColors: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
