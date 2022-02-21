import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../empresa.service';
import { Empresa } from '../empresa';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  empresas: Empresa[] = [];

  constructor(public empresaService: EmpresaService) { }

  ngOnInit(): void {
    this.empresaService.getAll().subscribe((data: Empresa[])=> {
        this.empresas = data;
        console.log(this.empresas);
      })

  }
  deletePost(id:number){
    this.empresaService.delete(id).subscribe(resp =>{
      this.empresas = this.empresas.filter(item=> item.id !==id);
      console.log('Post deleted successfully!');

    })
  }

}
