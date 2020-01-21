import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TabMenuModule} from 'primeng/tabmenu';
import {TabViewModule} from 'primeng/tabview';

import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    TabMenuModule,
    TabViewModule,
    MatTabsModule
  ]
})
export class UserModule { }
