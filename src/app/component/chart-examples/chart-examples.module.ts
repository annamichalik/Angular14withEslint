import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartExamplesRoutingModule } from './chart-examples-routing.module';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import {NgChartsModule} from "ng2-charts";


@NgModule({
  declarations: [
    BarChartComponent
  ],
    imports: [
        CommonModule,
        ChartExamplesRoutingModule,
        NgChartsModule
    ]
})
export class ChartExamplesModule { }
