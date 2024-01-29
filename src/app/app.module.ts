import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgChartsConfiguration} from 'ng2-charts';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularDataComponent} from './component/angular-data/angular-data.component';
import {MyD3ComponentComponent} from './my-d3-component/my-d3-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularDataComponent,
    MyD3ComponentComponent
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
