import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartExamplesRoutingModule } from './chart-examples-routing.module';
import { BarChartComponent } from './bar-chart/bar-chart.component';


@NgModule({
  declarations: [
    BarChartComponent
  ],
  imports: [
    CommonModule,
    ChartExamplesRoutingModule
  ]
})
export class ChartExamplesModule { }
