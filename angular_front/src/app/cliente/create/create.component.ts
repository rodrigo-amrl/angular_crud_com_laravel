import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
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
    public clienteService: ClienteService,
    private router: Router,
    private toastr: ToastrService,
  ) { }



  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
      cpf: new FormControl('', [Validators.required, Validators.pattern("[0-9]{11}")]),
      login: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$")]),
      endereco: new FormControl('', Validators.required),
    });
  }
  get f() {
    return this.form.controls;
  }

  submit() {
    this.clienteService.create(this.form.value).subscribe((res: any) => {
      this.router.navigateByUrl('cliente/index');
      this.toastr.success("Cliente Criado",'Sucesso!');

    })
  }

}
