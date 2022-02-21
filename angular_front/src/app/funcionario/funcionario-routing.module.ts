import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'funcionario', redirectTo: 'funcionario/index', pathMatch: 'full'},
  { path: 'funcionario/index', component: IndexComponent },
  { path: 'funcionario/create', component: CreateComponent },
  { path: 'funcionario/:funcionarioId/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
