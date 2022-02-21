import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../empresa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from '../empresa';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  empresa!: Empresa;
  form!: FormGroup;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public empresaService: EmpresaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['empresaId'];
    this.empresaService.find(this.id).subscribe((data: Empresa) => {
      this.empresa = data;
    });

    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      cnpj: new FormControl('', Validators.required),
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
    this.empresaService.update(this.id, this.form.value).subscribe((res: any) => {
      this.router.navigateByUrl('empresa/index');
    })
  }

}
