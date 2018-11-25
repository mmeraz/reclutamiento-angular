import { MzInputModule, MzValidationModule, MzButtonModule, MzSidenavModule, MzNavbarModule } from 'ngx-materialize';
import { MzIconModule, MzIconMdiModule } from 'ngx-materialize';
import { NgModule } from '@angular/core';
import { MzModalModule } from 'ngx-materialize'

@NgModule({
  imports: [
    MzInputModule,
    MzValidationModule, MzButtonModule, MzSidenavModule, MzNavbarModule,  MzIconModule, MzIconMdiModule, MzModalModule
  ],
  exports: [
    MzInputModule,
    MzValidationModule, MzButtonModule, MzSidenavModule, MzNavbarModule,  MzIconModule, MzIconMdiModule, MzModalModule
  ],
})
export class MaterializeModule { }
