import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'empresa', redirectTo: 'empresa/index', pathMatch: 'full'},
  { path: 'empresa/index', component: IndexComponent },
  { path: 'empresa/create', component: CreateComponent },
  { path: 'empresa/:empresaId/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }
