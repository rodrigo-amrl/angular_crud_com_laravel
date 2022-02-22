import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Funcionario } from '../funcionario';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  funcionario!: Funcionario;
  form!: FormGroup;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService

  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['funcionarioId'];
    this.funcionarioService.find(this.id).subscribe((data: Funcionario) => {

      this.funcionario = data;

    });

    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      senha: new FormControl(''),
      cpf: new FormControl('', [Validators.required, Validators.pattern("[0-9]{11}")]),
      login: new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$")]),
      endereco: new FormControl('', Validators.required)
    });
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  get f() {
    return this.form.controls;
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  submit() {
    console.log(this.form.value);
    this.funcionarioService.update(this.id, this.form.value).subscribe((res: any) => {
      this.router.navigateByUrl('funcionario/index');
      this.toastr.success("Funcionário Editado",'Sucesso!');

    })
  }

}
