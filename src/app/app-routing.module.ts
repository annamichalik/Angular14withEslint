import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AngularDataComponent} from "./component/angular-data/angular-data.component";

const routes: Routes = [
  {
    path: 'chart',
    loadChildren: () => import('./component/chart-examples/chart-examples.module').then(m => m.ChartExamplesModule)
  },
  {
    path: '',
    component: AngularDataComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
