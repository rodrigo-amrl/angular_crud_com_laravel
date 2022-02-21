import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';



const URL = 'http://localhost:3000/upload';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'image'
  });


  form!: FormGroup

  constructor(
    public clienteService: ClienteService,
    private router: Router,
    private toastr: ToastrService,
    private http: HttpClient
  ) { }



  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
      cpf: new FormControl('', [Validators.required, Validators.pattern("[0-9]{11}")]),
      login: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$")]),
      endereco: new FormControl('', Validators.required),
      file: new FormControl('', [Validators.required]),
      fileSource: new FormControl('', [Validators.required])
    });

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, status: any) => {
      console.log('Uploaded File Details:', item);
      this.toastr.success('File successfully uploaded!');
    };

  }
  get f() {
    return this.form.controls;
  }

  onFileChange(event:any) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({
        fileSource: file
      });
    }
  } 
  submit() {
    this.clienteService.create(this.form.value).subscribe((res: any) => {
      this.router.navigateByUrl('cliente/index');
    })
  }

}
