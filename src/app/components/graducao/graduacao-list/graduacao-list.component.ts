import { Component, OnInit } from '@angular/core';
import { Graduacao, GraduacaoService } from 'src/app/service/graduacao/graduacao.service';

@Component({
  selector: 'app-graduacao-list',
  templateUrl: './graduacao-list.component.html',
  styleUrls: ['./graduacao-list.component.css']
})
export class GraduacaoListComponent implements OnInit {

  graduacoes: Graduacao[] = [];

  constructor(private graduacaoService : GraduacaoService) { }

  ngOnInit(): void {
    this.graduacaoService.getGraduacoes().subscribe(
      (data) => {
        this.graduacoes = data;  // Armazenar as graduações retornadas pela API
      },
      (error) => {
        console.error('Erro ao buscar graduações:', error);
      }
    );
  }

}
