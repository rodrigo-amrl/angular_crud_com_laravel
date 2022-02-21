import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { concat, Observable, of, Subject } from 'rxjs';
import { DataService, Person } from '../data.service';
import { catchError, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';




@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  people$!: Observable<Person[]>;
  peopleLoading = false;
  peopleInput$ = new Subject<string>();
  selectedPersons: Person[] = <any>[{ name: 'Karyn Wright' }, { name: 'Other' }];

  form!: FormGroup

  constructor(
    public clienteService: ClienteService,
    private router: Router,
    private dataService: DataService
  ) { }



  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
      cpf: new FormControl('', [Validators.required, Validators.pattern("[0-9]{11}")]),
      login: new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$")]),
      endereco: new FormControl('', Validators.required)
    });
    this.loadPeople();

  }
  get f() {
    return this.form.controls;
  }

  trackByFn(item: Person) {
    return item.id;
  }

  private loadPeople() {
    this.people$ = concat(
      of([]), // default items
      this.peopleInput$.pipe(
        distinctUntilChanged(),
        tap(() => this.peopleLoading = true),
        switchMap(term => this.dataService.getPeople(term).pipe(
          catchError(() => of([])), // empty list on error
          tap(() => this.peopleLoading = false)
        ))
      )
    );
  }
  submit() {
    this.clienteService.create(this.form.value).subscribe((res: any) => {
      this.router.navigateByUrl('cliente/index');
    })
  }

}
