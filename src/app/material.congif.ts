import { MzInputModule, MzValidationModule, MzButtonModule, MzSidenavModule, MzNavbarModule } from 'ngx-materialize';
import { MzIconModule, MzIconMdiModule } from 'ngx-materialize'
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MzInputModule,
    MzValidationModule, MzButtonModule, MzSidenavModule, MzNavbarModule,  MzIconModule, MzIconMdiModule
  ],
  exports: [
    MzInputModule,
    MzValidationModule, MzButtonModule, MzSidenavModule, MzNavbarModule,  MzIconModule, MzIconMdiModule
  ],
})
export class MaterializeModule { }
