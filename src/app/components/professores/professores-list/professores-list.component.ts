import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/service/professor/professor.service';

@Component({
  selector: 'app-professores-list',
  templateUrl: './professores-list.component.html',
  styleUrls: ['./professores-list.component.css']
})
export class ProfessoresListComponent implements OnInit {

  dataSource: any[] = [];
  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf'];

  constructor(private professorService: ProfessorService) { }

  ngOnInit(): void {
    this.professorService.getProfessores().subscribe((data) => {
      // Atribui diretamente os dados à variável dataSource
      this.dataSource = data.map(professor => ({
        id: professor.id,
        nome: professor.nome,
        email: professor.email,
        cpf: professor.cpf
      }));
    });
  }
}
