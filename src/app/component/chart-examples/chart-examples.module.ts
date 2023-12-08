import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChartExamplesRoutingModule} from './chart-examples-routing.module';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {NgChartsModule} from "ng2-charts";
import {PieChartComponent} from './pie-chart/pie-chart.component';
import {MatDividerModule} from "@angular/material/divider";
import { LineChartComponent } from './line-chart/line-chart.component';


@NgModule({
  declarations: [
    BarChartComponent,
    PieChartComponent,
    LineChartComponent
  ],
  imports: [
    CommonModule,
    ChartExamplesRoutingModule,
    NgChartsModule,
    MatDividerModule
  ]
})
export class ChartExamplesModule {
}
