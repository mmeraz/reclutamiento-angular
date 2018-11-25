import { MzInputModule, MzValidationModule, MzButtonModule, MzSidenavModule, MzNavbarModule } from 'ngx-materialize';
import { MzIconModule, MzIconMdiModule } from 'ngx-materialize';
import { NgModule } from '@angular/core';
import { MzModalModule } from 'ngx-materialize';
import { MzCollapsibleModule } from 'ngx-materialize';
import { MzSelectModule } from 'ngx-materialize';
import { MzCardModule } from 'ngx-materialize';
import { MzTextareaModule } from 'ngx-materialize';

@NgModule({
  imports: [
    MzInputModule,
    MzValidationModule, MzButtonModule, MzSidenavModule, MzNavbarModule,  MzIconModule, MzIconMdiModule, MzModalModule, MzCollapsibleModule,
    MzSelectModule, MzCardModule, MzTextareaModule
  ],
  exports: [
    MzInputModule,
    MzValidationModule, MzButtonModule, MzSidenavModule, MzNavbarModule,  MzIconModule, MzIconMdiModule, MzModalModule, MzCollapsibleModule,
    MzSelectModule, MzCardModule, MzTextareaModule
  ],
})
export class MaterializeModule { }
