import { AlunoService } from 'app/service/aluno.service';
import { Component, OnInit } from '@angular/core';
import { ToastyService, ToastyConfig } from 'ng2-toasty';

@Component({
  selector: 'app-detalhe-aluno',
  templateUrl: './detalhe-aluno.component.html',
  styleUrls: ['./detalhe-aluno.component.scss']
})

export class DetalheAlunoComponent implements OnInit {

  alunos: any;
  cod: number;
  numAluno: number;
  alunoExiste: boolean;
  alunoSelecionado: any;
  NomeCompleto: string;
  CodigoAluno: number;
  StatusAluno: string;
  Telefone: number;
  Email: string;
  Cep: number;
  ValorMensalidade: number;
  Cpf: number;
  TipoPagamento: any;

  nomeCompleto
  codAluno
  statusAluno
  telefone
  email
  cep
  mensalidade
  cpf
  tipoPgto


  constructor(
    private alunoService: AlunoService,
    public toasty: ToastyService,
    public toastyConfig: ToastyConfig
  ) {
    this.toastyConfig.theme = 'bootstrap';
  }

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

  ConsultaAluno(numAluno) {
    let validacao

    this.alunoService.read_Alunos().subscribe(data => {
      this.alunoSelecionado = data.map(e => {
        console.log('retornoBuscaCodAluno => ', e.payload.doc.data()['CodigoAluno']);
        console.log('numAluno = ', numAluno);
        console.log('validação => ', e.payload.doc.data()['CodigoAluno'] == numAluno);
        validacao = e.payload.doc.data()['CodigoAluno'] == numAluno;

        this.NomeCompleto     = e.payload.doc.data()['NomeCompleto'];
        this.CodigoAluno      = e.payload.doc.data()['CodigoAluno'];
        this.StatusAluno      = e.payload.doc.data()['StatusAluno'];
        this.Telefone         = e.payload.doc.data()['Telefone'];
        this.Email            = e.payload.doc.data()['Email'];
        this.Cep              = e.payload.doc.data()['Cep'];
        this.ValorMensalidade = e.payload.doc.data()['ValorMensalidade'];
        this.Cpf              = e.payload.doc.data()['Cpf'];
        this.TipoPagamento    = e.payload.doc.data()['TipoPagamento'];  

      });

    });

    if (validacao) {

      this.nomeCompleto  = this.NomeCompleto;     
      this.codAluno      = this.CodigoAluno;    
      this.statusAluno   = this.StatusAluno;      
      this.telefone      = this.Telefone;         
      this.email         = this.Email;            
      this.cep           = this.Cep;              
      this.mensalidade   = this.ValorMensalidade;
      this.cpf           = this.Cpf;              
      this.tipoPgto      = this.TipoPagamento;

    } else {
      this.toasty.warning('Aluno não encontrado!');
    }
  }

  /*   this.alunoService.read_Alunos().subscribe(data => {
      this.alunoSelecionado = data.map(e => {
 
        this.alunoExiste = true;
        this.NomeCompleto     = e.payload.doc.data()['NomeCompleto'];
        this.CodigoAluno      = e.payload.doc.data()['CodigoAluno'];
        this.StatusAluno      = e.payload.doc.data()['StatusAluno'];
        this.Telefone         = e.payload.doc.data()['Telefone'];
        this.Email            = e.payload.doc.data()['Email'];
        this.Cep              = e.payload.doc.data()['Cep'];
        this.ValorMensalidade = e.payload.doc.data()['ValorMensalidade'];
        this.Cpf              = e.payload.doc.data()['Cpf'];
        this.TipoPagamento    = e.payload.doc.data()['TipoPagamento'];
 
        for (var i = 0; i < data.length; i++) {
          console.log('numAluno = ', parseInt(numAluno));
          console.log('consulta: ',e.payload.doc.data()['CodigoAluno']);
          let codigo = e.payload.doc.data()['CodigoAluno'];
          console.log("codigo = ", codigo); 
          console.log('consulta =>',codigo == parseInt(numAluno));
 
         if (codigo == parseInt(numAluno)) {
            this.alunoExiste = true;
            this.NomeCompleto = e.payload.doc.data()['NomeCompleto'];
            this.CodigoAluno = e.payload.doc.data()['CodigoAluno'];
            this.StatusAluno = e.payload.doc.data()['StatusAluno'];
            this.Telefone = e.payload.doc.data()['Telefone'];
            this.Email = e.payload.doc.data()['Email'];
            this.Cep = e.payload.doc.data()['Cep'];
            this.ValorMensalidade = e.payload.doc.data()['ValorMensalidade'];
            this.Cpf = e.payload.doc.data()['Cpf'];
            this.TipoPagamento = e.payload.doc.data()['TipoPagamento'];
          } else {
            this.toasty.warning('Aluno não encontrado!');
            this.cod = null;
            this.numAluno = null;
            this.NomeCompleto = "";
            this.CodigoAluno = null;
            this.StatusAluno = "";
            this.Telefone = null;
            this.Email = "";
            this.Cep = null;
            this.ValorMensalidade = null;
            this.Cpf = null;
            this.TipoPagamento = "";
          } 
        }
 
 
      })
    }); */


  limpar() {
    this.cod = null;
    this.numAluno = null;
    this.NomeCompleto = "";
    this.CodigoAluno = null;
    this.StatusAluno = "";
    this.Telefone = null;
    this.Email = "";
    this.Cep = null;
    this.ValorMensalidade = null;
    this.Cpf = null;
    this.TipoPagamento = "";
  }

}
