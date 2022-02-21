import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FileSelectDirective } from 'ng2-file-upload';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ]
})
export class ClienteModule { }