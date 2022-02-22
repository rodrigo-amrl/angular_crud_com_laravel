import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../empresa.service';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from '../empresa';
import { Cliente } from 'src/app/cliente/cliente';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {
  id!: number;
  empresa!: Empresa;
  clientes: Cliente[] = [];
  form!: FormGroup;


  constructor(
    public empresaService: EmpresaService,
    public clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['empresaId'];
    this.empresaService.find(this.id).subscribe((data: Empresa) => {
      this.empresa = data;
    });
    this.clienteService.getAll().subscribe((data: Cliente[]) => {
      this.clientes = data;
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
    // this.empresaService.addCliente(this.id, this.form.value).subscribe((res: any) => {
    //   this.router.navigateByUrl('empresa/index');
    // })
    this.router.navigateByUrl('empresa/' + this.id + '/edit');
    this.toastr.error("Ocorreu um erro inesperado e o cliente não foi adicionado", '!Erro');
  }


}
