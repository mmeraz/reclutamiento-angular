import { Component, OnInit, Input } from '@angular/core';
import { Cattipovacante } from 'src/app/model/cattipovacante.model';
import { TipoVacanteService } from 'src/app/service/cat.tipvacante.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cat-tipovacante',
  templateUrl: './cat-tipovacante.component.html',
  providers: [TipoVacanteService]
})
export class CatTipvacanteComponent implements OnInit {

  angForm: FormGroup;
  arrayAreas: Cattipovacante[];

  constructor( private tipvacanteService: TipoVacanteService,
    private fb: FormBuilder, private bs: TipoVacanteService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
    }

  ngOnInit() {
    this.tipvacanteService.getAreas().subscribe(
      (data: Cattipovacante[]) => this.arrayAreas = data
    );
  }
  createForm() {
    this.angForm = this.fb.group({
      tvaTipo: ['', Validators.required ],
    });
  }

  addtipovacante(tvaTipo) {
    this.bs.addtipovacante(tvaTipo);
  }

}


