import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../empresa.service';
import { FuncionarioService } from 'src/app/funcionario/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from '../empresa';
import { Funcionario } from 'src/app/funcionario/funcionario';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-funcionario',
  templateUrl: './add-funcionario.component.html',
  styleUrls: ['./add-funcionario.component.css']
})
export class AddFuncionarioComponent implements OnInit {
  id!: number;
  empresa!: Empresa;
  funcionarios: Funcionario[] = [];
  form!: FormGroup;

  constructor(
    public empresaService: EmpresaService,
    public funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['empresaId'];
    this.empresaService.find(this.id).subscribe((data: Empresa) => {
      this.empresa = data;
    });
    this.funcionarioService.getAll().subscribe((data: Funcionario[]) => {
      this.funcionarios = data;
    })

    this.form = new FormGroup({
      doc: new FormControl('', Validators.required)
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
    // this.empresaService.addFuncionario(this.id, this.form.value).subscribe((res: any) => {
    //   this.router.navigateByUrl('empresa/index');
    // })
    this.router.navigateByUrl('empresa/' + this.id + '/edit');
    this.toastr.error("Ocorreu um erro inesperado e o funcionario não foi adicionado", '!Erro');
  }

}
