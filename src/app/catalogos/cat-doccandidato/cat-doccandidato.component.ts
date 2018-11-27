import { Component, OnInit, Input } from '@angular/core';
import { Catdoccandidato } from 'src/app/model/catdoccandidato.model';
import { DocCandidatoService } from 'src/app/service/cat.doccandidato.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cat-datoscandidato',
  templateUrl: './cat-datoscandidato.component.html',
  providers: [DocCandidatoService]
})
export class CatDoccandidatoComponent implements OnInit {

  angForm: FormGroup;
  arrayAreas: Catdoccandidato[];

  constructor( private doccandidatoService: DocCandidatoService,
    private fb: FormBuilder, private bs: DocCandidatoService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
    }

  ngOnInit() {
    this.doccandidatoService.getAreas().subscribe(
      (data: Catdoccandidato[]) => this.arrayAreas = data
    );
  }
  createForm() {
    this.angForm = this.fb.group({
      cndNombre: ['', Validators.required ],
      cndApellidoPat: ['', Validators.required ],
      cndApellidoMat: ['', Validators.required ],
      cndCalle: ['', Validators.required ],
      cndNumext: ['', Validators.required ],
      cndNumint: ['', Validators.required ],
      cndCodpostal: ['', Validators.required ],
      cndColonia: ['', Validators.required ],
      cndMunicipio: ['', Validators.required ],
      cndEstado: ['', Validators.required ],
      cndPais: ['', Validators.required ],
      cndEdad: ['', Validators.required ],
      cndEstcivil: ['', Validators.required ],
      cndEmail: ['', Validators.required ],
      cndHijos: ['', Validators.required ],
      cndDispoviajar: ['', Validators.required ],
      cndVisa: ['', Validators.required ],
      cndPasaporte: ['', Validators.required ],
      cndTrabaja: ['', Validators.required ],
      cndDisponibildiad: ['', Validators.required ],
      cndDispotrabajo: ['', Validators.required ],
      cndGenero: ['', Validators.required ],

    });
  }

  adddoccandidato(cndNombre, cndApellidoPat, cndApellidoMat, cndCalle, cndNumext , cndNumint, cndCodpostal,
      cndColonia, cndMunicipio, cndEstado, cndPais, cndEdad, cndEstcivil, cndEmail, cndHijos,
      cndDispoviajar, cndVisa, cndPasaporte, cndTrabaja, cndDisponibildiad, cndDispotrabajo, cndGenero) {
    this.bs.adddoccandidato(
      cndNombre,
      cndApellidoPat,
      cndApellidoMat,
      cndCalle, cndNumext , cndNumint, cndCodpostal,
      cndColonia, cndMunicipio, cndEstado, cndPais, cndEdad, cndEstcivil, cndEmail, cndHijos,
      cndDispoviajar, cndVisa, cndPasaporte, cndTrabaja, cndDisponibildiad, cndDispotrabajo, cndGenero);

  }

}

