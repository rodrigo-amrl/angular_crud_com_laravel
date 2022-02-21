import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClienteModule } from './cliente/cliente.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { EmpresaModule } from './empresa/empresa.module';

import { InputMaskModule } from '@ngneat/input-mask';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';

import { ToastrModule } from 'ngx-toastr';






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgSelectModule,
    AppRoutingModule,
    ClienteModule,
    FuncionarioModule,
    EmpresaModule,
    HttpClientModule,
    InputMaskModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

