import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BarChartComponent} from "./bar-chart/bar-chart.component";
import {PieChartComponent} from "./pie-chart/pie-chart.component";
import {LineChartComponent} from "./line-chart/line-chart.component";
import {GaugeComponent} from "./gauge/gauge.component";

const routes: Routes = [
  {
    path: 'bar',
    component: BarChartComponent
  },
  {
    path: 'pie',
    component: PieChartComponent
  },
  {
    path: 'line',
    component: LineChartComponent
  },
  {
    path: 'gauge',
    component: GaugeComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartExamplesRoutingModule {
}
