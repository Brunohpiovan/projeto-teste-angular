import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface posGraduacao {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
}

@Injectable({
  providedIn: 'root'
})
export class PosgradService {

  private apiUrl = 'http://localhost:8080/posGraduacao';

   constructor(private http: HttpClient) {}

    getGraduacoes(): Observable<posGraduacao[]> {
     return this.http.get<posGraduacao[]>(this.apiUrl);
   }
}
