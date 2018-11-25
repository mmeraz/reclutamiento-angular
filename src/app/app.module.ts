import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from './material.congif';
import { NavbarComponent } from './navbar/navbar.component';
import { CatAreaComponent } from './catalogos/cat-area/cat-area.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CreateComponent } from './catalogos/cat-area/create.component';
import { RouterModule, Routes} from '@angular/router';
import { SolicitudRequerimientoComponent } from './solicitud/solicitud-requerimiento.component';
import { SolicitudCandidatoComponent } from './solicitud/solicitud-candidato.component';

const routes: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'clientes', component: CatAreaComponent},
  {path: 'clientes/form', component: CreateComponent},
  {path: 'clientes/form/:id', component: CreateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CatAreaComponent,
    CreateComponent,
    SolicitudRequerimientoComponent,
    SolicitudCandidatoComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterializeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
