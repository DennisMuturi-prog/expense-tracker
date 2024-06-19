import { Routes } from '@angular/router';
import { TotalCostComponent } from './components/total-cost/total-cost.component';
import { NecessityIndexComponent } from './components/necessity-index/necessity-index.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'home',component:ExpensesComponent},
    {path:'totalCost',component:TotalCostComponent},
    {path:'necessityIndex',component:NecessityIndexComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'**',component:PageNotFoundComponent}
];
