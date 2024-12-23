import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface professor {
  id: number;
  nome: string;
  email: string;
  cpf: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

private apiUrl = 'http://localhost:8080/professor';

   constructor(private http: HttpClient) {}

    getProfessores(): Observable<professor[]> {
     return this.http.get<professor[]>(this.apiUrl);
   }
}
