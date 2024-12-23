import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Graduacao {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
}

@Injectable({
  providedIn: 'root'
})
export class GraduacaoService {

  private apiUrl = 'http://localhost:8080/graduacao';

  constructor(private http: HttpClient) {}

   getGraduacoes(): Observable<Graduacao[]> {
    return this.http.get<Graduacao[]>(this.apiUrl);
  }
}
