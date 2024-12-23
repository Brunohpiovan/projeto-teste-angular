import { Component, OnInit } from '@angular/core';
import { PosgradService, posGraduacao } from 'src/app/service/posgraduacao/posgrad.service';

@Component({
  selector: 'app-posgrad-list',
  templateUrl: './posgrad-list.component.html',
  styleUrls: ['./posgrad-list.component.css']
})
export class PosgradListComponent implements OnInit {

  graduacoes: posGraduacao[] = [];

  constructor(private posgraduacaoService : PosgradService) { }

  ngOnInit(): void {
    this.posgraduacaoService.getGraduacoes().subscribe(
      (data) => {
        this.graduacoes = data;  // Armazenar as graduações retornadas pela API
      },
      (error) => {
        console.error('Erro ao buscar graduações:', error);
      }
    );
  }

}
