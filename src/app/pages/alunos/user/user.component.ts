import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlunoService } from 'app/service/aluno.service';
import { MenuItem } from 'primeng/api';


@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html',
    styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

    checkoutForm
    isLoadingResults: boolean;
    items1: MenuItem[];
    activeItem: MenuItem;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private service: AlunoService
    ) {
        this.checkoutForm = this.formBuilder.group({

            NM_NOME_COMPLETO: '',
            DS_TURMA: '',
            DT_NASCIMENTO: '',
            NR_ANO_LETIVO: '',
            DS_ESCOLA_ANTERIOR: '',
            END_ENDERECO: '',
            NR_ENDERECO: '',
            DS_COMPLEMENTO: '',
            NM_BAIRRO: '',
            NR_CEP: '',
            NM_CIDADE: '',
            SG_ESTADO: '',
            NR_TELEFONE: '',
            DS_EMAIL: '',
            VL_MENSALIDADE: '',
            DS_RG: '',
            DS_COMO_CONHECEU: '',
            QT_SULFITE: '',
            CD_CPF: '',
            DT_DATA_CADASTRO: '',
            ST_STATUS_ALUNO: '',
            NM_PAI: '',
            NR_TEL_PAI: '',
            DS_EMAIL_PAI: '',
            NM_MAE: '',
            NR_TEL_MAE: '',
            DS_EMAIL_MAE: '',
            DS_MODULO1_INICIO: '',
            DS_MODULO1_FIM: '',
            DS_MODULO2_INICIO: '',
            DS_MODULO2_FIM: '',
            DS_MODULO3_INICIO: '',
            DS_MODULO3_FIM: '',
            DS_MODULO4_INICIO: '',
            DS_MODULO4_FIM: '',
            DS_MATH_INICIO: '',
            DS_MATH_FIM: '',
            DS_GEOGRAPH_INICIO: '',
            DS_GEOGRAPH_FIM: '',
            DS_DIA_AULA: '',
            HR_HORARIO_AULA: '',
            GR_NOME_GRUPO: '',
            DT_DATA_VENCIMENTO: '',
            TP_PGTO: ''

        });

    }

    ngOnInit() {
        this.items1 = [
            {label: 'Stats', icon: 'fa fa-fw fa-bar-chart'},
            {label: 'Calendar', icon: 'fa fa-fw fa-calendar'},
            {label: 'Documentation', icon: 'fa fa-fw fa-book'},
            {label: 'Support', icon: 'fa fa-fw fa-support'},
            {label: 'Social', icon: 'fa fa-fw fa-twitter'}
        ];

        this.activeItem = this.items1[0];

    }

    onSubmit(customerData) {
        console.warn('Salvando Aluno', customerData);

        this.service.addAluno(customerData)
            .subscribe((res: any) => {
                alert("Aluno foi cadastrado com sucesso.");

                this.router.navigate(['/list-prestador']);
            }, (err) => {
                console.log(err);
                this.isLoadingResults = false;
            });

        // this.checkoutForm.reset();
    }


}
