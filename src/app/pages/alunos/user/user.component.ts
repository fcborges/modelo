import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'app/service/aluno.service';
import { Router } from '@angular/router';
import { ToastyService, ToastyConfig } from 'ng2-toasty';


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
    codAluno: number;
    statusAluno: string;
    nomeCompleto: string;
    dataNascimento: string;
    cep: number;
    telefone: number;
    email: string;
    valorMensalidade: any;
    cpf: number;
    tipoPagamento: string;

    constructor(
        private router: Router,
        private alunoService: AlunoService,
        public toasty: ToastyService, 
        public toastyConfig: ToastyConfig
    ) {
        this.toastyConfig.theme = 'bootstrap';
    }

    ngOnInit() {

        this.alunoService.read_Alunos().subscribe(data => {
            this.codAluno = data.length + 1;
            this.statusAluno = "Ativo";

            this.alunos = data.map(e => {
                return {
                    id: e.payload.doc.id,
                    isEdit: false,
                    CodigoAluno: e.payload.doc.data()['CodigoAluno'],
                    StatusAluno: e.payload.doc.data()['StatusAluno'],
                    NomeCompleto: e.payload.doc.data()['NomeCompleto'],
                    DataNascimento: e.payload.doc.data()['DataNascimento'],
                    Email: e.payload.doc.data()['Email'],
                    Telefone: e.payload.doc.data()['Telefone'],
                    ValorMensalidade: e.payload.doc.data()['ValorMensalidade'],
                    Cpf: e.payload.doc.data()['Cpf'],
                    Cep: e.payload.doc.data()['Cep'],
                    TipoPagamento: e.payload.doc.data()['TipoPagamento']
                };
            })
        });
    }
    CreateRecord() {
        let record = {};
        record['CodigoAluno'] = this.codAluno;
        record['StatusAluno'] = this.statusAluno;
        record['NomeCompleto'] = this.nomeCompleto;
        record['DataNascimento'] = this.dataNascimento;
        record['Email'] = this.email;
        record['Cep'] = this.cep;
        record['Telefone'] = this.telefone;
        record['ValorMensalidade'] = this.valorMensalidade;
        record['Cpf'] = this.cpf;
        record['TipoPagamento'] = this.tipoPagamento;


        this.alunoService.create_NewAluno(record).then(resp => {
            this.toasty.success("Aluno(a)  " + this.nomeCompleto + " Cadastrado com sucesso!");
            this.nomeCompleto = "";
            this.dataNascimento = "";
            this.email = "";
            this.cep = null;
            this.telefone = null ;
            this.valorMensalidade = null;
            this.cpf = null;
            this.tipoPagamento = "";

        }).catch(error => {
            this.toasty.error("Erro ao realizar o cadastro, contate o TI");
        });
    }

}
