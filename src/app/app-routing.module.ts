import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AngularDataComponent} from "./component/angular-data/angular-data.component";
import {MyD3ComponentComponent} from "./my-d3-component/my-d3-component.component";

const routes: Routes = [
  {
    path: 'chart',
    loadChildren: () => import('./component/chart-examples/chart-examples.module').then(m => m.ChartExamplesModule)
  },
  {
    path: '',
    component: AngularDataComponent
  },
  {
    path: 'gauge',
    component: MyD3ComponentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
