import { HistoryComponent } from './pages/history/history.component';
import { ResultsComponent } from './pages/results/results.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from
'@angular/router';

const routes: Routes = [
  {path: "", pathMatch: "full", component: HomeComponent},
  {path: "search", component: ResultsComponent},
  {path: "history", component: HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
