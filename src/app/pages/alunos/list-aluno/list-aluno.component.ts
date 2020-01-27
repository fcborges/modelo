import { Component, OnInit, ViewChild } from '@angular/core';
import { AlunoService } from 'app/service/aluno.service';
import { firestore } from 'firebase';

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
          NomeCompleto: e.payload.doc.data()['NomeCompleto'],
          Telefone: e.payload.doc.data()['Telefone'],
          Email: e.payload.doc.data()['Email'],
        };
      })
      console.log(this.alunos);
    });
  }

  EditRecord(record) {
    console.log("record",record);
    record.isEdit = true;
    record.NomeCompleto= record.NomeCompleto;
    record.Telefone = record.Telefone;
    record.Email = record.Email;
  }

  UpdateRecord(recordRow) {
    console.log("recordRow",recordRow);
    let record = {};
    record['NomeCompleto'] = recordRow.NomeCompleto;
    record['Telefone'] = recordRow.Telefone;
    record['Email'] = recordRow.Email;
    this.alunoService.update_Aluno(recordRow.id, record);
    console.log("recordRow", recordRow);
    recordRow.isEdit = false;

  }

}
