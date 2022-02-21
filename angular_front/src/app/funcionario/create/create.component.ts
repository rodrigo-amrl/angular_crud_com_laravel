import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form!: FormGroup

  constructor(
    public funcionarioService: FuncionarioService,
    private router: Router
  ) { }



  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
      cpf: new FormControl('', [Validators.required, Validators.pattern("[0-9]{11}")]),
      login: new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$")]),
      endereco: new FormControl('', Validators.required)
    })
  }
  get f() {
    return this.form.controls;
  }
  submit() {
    this.funcionarioService.create(this.form.value).subscribe((res: any) => {
      this.router.navigateByUrl('funcionario/index');
    })
  }

}
