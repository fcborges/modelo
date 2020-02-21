import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarioComponent } from 'app/pages/calendario/calendario.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserComponent } from 'app/pages/alunos/user/user.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { MatListModule, MatToolbarModule, MatInputModule, MatPaginatorModule, MatTabsModule, MatIconModule } from '@angular/material';
import { TabAlunoComponent } from 'app/pages/alunos/tab-aluno/tab-aluno.component';
import { ListAlunoComponent } from 'app/pages/alunos/list-aluno/list-aluno.component';

import { CpfCnpjModule } from 'ng2-cpf-cnpj';
import { NgxMaskModule } from 'ngx-mask';
import { ToastyModule } from 'ng2-toasty';
import { DetalheAlunoComponent } from 'app/pages/alunos/detalhe-aluno/detalhe-aluno.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    TabMenuModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatIconModule,
    MatTabsModule,
    CpfCnpjModule ,
    NgxMaskModule.forRoot(),
    ToastyModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    CalendarioComponent,
    TabAlunoComponent,
    ListAlunoComponent,
    DetalheAlunoComponent
  ],
  exports: [
    UserComponent,
    ListAlunoComponent
  ]
})

export class AdminLayoutModule {}
