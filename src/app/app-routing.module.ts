import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDataComponent } from './account-data/account-data.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: 'accounts', component: TableComponent },
  { path: '', redirectTo: 'accounts', pathMatch: 'full' },
  { path: 'accounts/:id', component: AccountDataComponent },
  { path: '**/**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
