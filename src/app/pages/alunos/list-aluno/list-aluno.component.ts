import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'app/service/aluno.service';


@Component({
  selector: 'app-list-aluno',
  templateUrl: './list-aluno.component.html',
  styleUrls: ['./list-aluno.component.scss']
})

export class ListAlunoComponent implements OnInit {

  alunos: any;
  alunoDetalhe: any;
  nomeCompleto: string;
  telefone: number;
  email: string;
  headElements = ['ID', 'Nome', 'Telefone', 'Email', 'Acao'];

  constructor(private alunoService: AlunoService) { }


  ngOnInit() {

    this.alunoService.read_Alunos().subscribe(data => {
      this.alunos = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          CodigoAluno: e.payload.doc.data()['CodigoAluno'],
          NomeCompleto: e.payload.doc.data()['NomeCompleto'],
          Telefone: e.payload.doc.data()['Telefone'],
          Email: e.payload.doc.data()['Email'],
        };
      })
    });
  }

  EditRecord(record) {

    record.isEdit = true;
    record.NomeCompleto = record.NomeCompleto;
    record.Telefone = record.Telefone;
    record.Email = record.Email;
  }

  UpdateRecord(recordRow) {

    let record = {};
    record['NomeCompleto'] = recordRow.NomeCompleto;
    record['Telefone'] = recordRow.Telefone;
    record['Email'] = recordRow.Email;
    this.alunoService.update_Aluno(recordRow.id, record);
    recordRow.isEdit = false;

  }

  detalheAluno(aluno) {
    console.log('aluno =>', aluno);
  }


}
