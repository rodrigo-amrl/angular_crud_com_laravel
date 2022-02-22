import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../empresa.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form!: FormGroup

  constructor(
    public empresaService: EmpresaService,
    private router: Router,
    private toastr: ToastrService

  ) { }



  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      cnpj: new FormControl('', Validators.required),
      endereco: new FormControl('', Validators.required)
    })
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    this.empresaService.create(this.form.value).subscribe((res:any)=>{
      this.router.navigateByUrl('empresa/index');
      this.toastr.success("Empresa Criada",'Sucesso!');

    })
  }

}
