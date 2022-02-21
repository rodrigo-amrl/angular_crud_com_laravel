import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(public clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getAll().subscribe((data: Cliente[])=> {
        this.clientes = data;
        console.log(this.clientes);
      })

  }
  deletePost(id:number){
    this.clienteService.delete(id).subscribe(resp =>{
      this.clientes = this.clientes.filter(item=> item.id !==id);
      console.log('Post deleted successfully!');

    })
  }

}
