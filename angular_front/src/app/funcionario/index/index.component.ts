import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import { Funcionario } from '../funcionario';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  funcionarios: Funcionario[] = [];

  constructor(public funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.funcionarioService.getAll().subscribe((data: Funcionario[])=> {
        this.funcionarios = data;
        console.log(this.funcionarios);
      })

  }
  deletePost(id:number){
    this.funcionarioService.delete(id).subscribe(resp =>{
      this.funcionarios = this.funcionarios.filter(item=> item.id !==id);
      console.log('Post deleted successfully!');

    })
  }

}
