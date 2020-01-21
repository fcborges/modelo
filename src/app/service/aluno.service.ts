import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http: HttpClient) { }


  private url = "http://localhost:3000/alunos/";
  id: number;
  

  addAluno(form: NgForm): Observable<NgForm> {
    console.log("form",form)
    return this.http.post<NgForm>(this.url, form);
  }





}
