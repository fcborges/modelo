import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'app/service/aluno.service';
import { Router } from '@angular/router';


@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html',
    styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

    checkoutForm
    isLoadingResults: boolean;
    alunos: any;
    nomeCompleto: string;
    telefone: number;
    email: string;


    constructor(
        private router: Router,
        private alunoService: AlunoService
    ) {


    }

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
    CreateRecord() {
        let record = {};
        record['NomeCompleto'] = this.nomeCompleto;
        record['Telefone'] = this.telefone;
        record['Email'] = this.email;
        this.alunoService.create_NewAluno(record).then(resp => {
            alert("Aluno(a)  " + this.nomeCompleto + " Cadastrado com sucesso!");
            this.nomeCompleto = "";
            this.telefone = undefined;
            this.email = "";
            console.log(resp);
            
        })
            .catch(error => {
                console.log(error);
            });
    }

}
