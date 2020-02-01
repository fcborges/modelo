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
    dataNascimento: string;
    email: string;
    anoLetivo: string;
    escolaAnterior: string;
    endereco: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    telefone: number;
    valorMensalidade: number;
    comoConheceu: string;
    rg: string;
    cpf: number;
    nomePai: string;
    telefonePai: string;
    emailPai: string;
    nomeMae: string;
    telefoneMae: string;
    emailMae: string;
    diaAula: string;
    horaAula: string;
    modulo1Inicio: string;
    modulo1Fim: string;
    modulo2Inicio: string;
    modulo2Fim: string;
    modulo3Inicio: string;
    modulo3Fim: string;
    modulo4Inicio: string;
    modulo4Fim: string;
    moduloMathInicio: string;
    moduloMathFim: string;
    moduloGeographInicio: string;
    moduloGeographFim: string;
    nomeGrupo: string;
    qtSulfite: number;
    tipoPagamento: string;


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
                    DataNascimento: e.payload.doc.data()['DataNascimento'],
                    Email: e.payload.doc.data()['Email'],
                    AnoLetivo: e.payload.doc.data()['AnoLetivo'],
                    EscolaAnterior: e.payload.doc.data()['EscolaAnterior'],
                    Endereco: e.payload.doc.data()['Endereco'],
                    Bairro: e.payload.doc.data()['Bairro'],
                    Cidade: e.payload.doc.data()['Cidade'],
                    Estado: e.payload.doc.data()['Estado'],
                    Cep: e.payload.doc.data()['Cep'],
                    Telefone: e.payload.doc.data()['Telefone'],
                    ValorMensalidade: e.payload.doc.data()['ValorMensalidade'],
                    ComoConheceu: e.payload.doc.data()['ComoConheceu'],
                    Rg: e.payload.doc.data()['Rg'],
                    Cpf: e.payload.doc.data()['Cpf'],
                    NomePai: e.payload.doc.data()['NomePai'],
                    TelefonePai: e.payload.doc.data()['TelefonePai'],
                    EmailPai: e.payload.doc.data()['EmailPai'],
                    NomeMae: e.payload.doc.data()['NomeMae'],
                    TelefoneMae: e.payload.doc.data()['TelefoneMae'],
                    EmailMae: e.payload.doc.data()['EmailMae'],
                    DiaAula: e.payload.doc.data()['DiaAula'],
                    HoraAula: e.payload.doc.data()['HoraAula'],
                    Modulo1Inicio: e.payload.doc.data()['Modulo1Inicio'],
                    Modulo1Fim: e.payload.doc.data()['Modulo1Fim'],
                    Modulo2Inicio: e.payload.doc.data()['Modulo2Inicio'],
                    Modulo2Fim: e.payload.doc.data()['Modulo2Fim'],
                    Modulo3Inicio: e.payload.doc.data()['Modulo3Inicio'],
                    Modulo3Fim: e.payload.doc.data()['Modulo3Fim'],
                    Modulo4Inicio: e.payload.doc.data()['Modulo4Inicio'],
                    Modulo4Fim: e.payload.doc.data()['Modulo4Fim'],
                    ModuloMathInicio: e.payload.doc.data()['ModuloMathInicio'],
                    ModuloMathFim: e.payload.doc.data()['ModuloMathFim'],
                    ModuloGeographInicio: e.payload.doc.data()['ModuloGeographInicio'],
                    ModuloGeographFim: e.payload.doc.data()['ModuloGeographFim'],
                    NomeGrupo: e.payload.doc.data()['NomeGrupo'],
                    QtSulfite: e.payload.doc.data()['QtSulfite'],
                    TipoPagamento: e.payload.doc.data()['TipoPagamento']

                };
            })
            console.log(this.alunos);
        });
    }
    CreateRecord() {
        let record = {};
        record['NomeCompleto'] = this.nomeCompleto;
        record['DataNascimento'] = this.dataNascimento;
        record['Email'] = this.email;
        record['AnoLetivo'] = this.anoLetivo;
        record['EscolaAnterior'] = this.escolaAnterior;
        record['Endereco'] = this.endereco;
        record['Bairro'] = this.bairro;
        record['Cidade'] = this.cidade;
        record['Estado'] = this.estado;
        record['Cep'] = this.cep;
        record['Telefone'] = this.telefone;
        record['ValorMensalidade'] = this.valorMensalidade;
        record['ComoConheceu'] = this.comoConheceu;
        record['Rg'] = this.rg;
        record['Cpf'] = this.cpf;
        record['NomePai'] = this.nomePai;
        record['TelefonePai'] = this.telefonePai;
        record['EmailPai'] = this.emailPai;
        record['NomeMae'] = this.nomeMae;
        record['TelefoneMae'] = this.telefoneMae;
        record['EmailMae'] = this.emailMae;
        record['DiaAula'] = this.diaAula;
        record['HoraAula'] = this.horaAula;
        record['Modulo1Inicio'] = this.modulo1Inicio;
        record['Modulo1Fim'] = this.modulo1Fim;
        record['Modulo2Inicio'] = this.modulo2Inicio;
        record['Modulo2Fim'] = this.modulo2Fim;
        record['Modulo3Inicio'] = this.modulo3Inicio;
        record['Modulo3Fim'] = this.modulo3Fim;
        record['Modulo4Inicio'] = this.modulo4Inicio;
        record['Modulo4Fim'] = this.modulo4Fim;
        record['ModuloMathInicio'] = this.moduloMathInicio;
        record['ModuloMathFim'] = this.moduloMathFim;
        record['ModuloGeographInicio'] = this.moduloGeographInicio;
        record['ModuloGeographFim'] = this.moduloGeographFim;
        record['NomeGrupo'] = this.nomeGrupo;
        record['QtSulfite'] = this.qtSulfite;
        record['TipoPagamento'] = this.tipoPagamento;



        this.alunoService.create_NewAluno(record).then(resp => {
            alert("Aluno(a)  " + this.nomeCompleto + " Cadastrado com sucesso!");
            this.nomeCompleto = "";
            this.dataNascimento = "";
            this.email = "";
            this.anoLetivo = "";
            console.log(resp);

        }).catch(error => {
            alert("Erro ao realizar o cadastro, contate o TI");
            console.log(error);
        });
    }

}
