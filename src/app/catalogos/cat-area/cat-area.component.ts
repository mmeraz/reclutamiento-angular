import { Component, OnInit, Input } from '@angular/core';
import { Catarea } from 'src/app/model/catarea.model';
import { AreaService } from 'src/app/service/cat.area.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cat-area',
  templateUrl: './cat-area.component.html',
  providers: [AreaService]
})
export class CatAreaComponent implements OnInit {
  angForm: FormGroup;
  arrayAreas: Catarea[];

  constructor( private areaService: AreaService,
    private fb: FormBuilder, private bs: AreaService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
    }

  ngOnInit() {
    this.areaService.getAreas().subscribe(
      (data: Catarea[]) => this.arrayAreas = data
    );
  }
  createForm() {
    this.angForm = this.fb.group({
      arnTipo: ['', Validators.required ]
    });
  }

  addarea(arnTipo) {
    this.bs.addarea(arnTipo);
  }
  deleteBusiness(id) {
    this.bs.deleteBusiness(id).subscribe(res => {
      console.log('Deleted');
    });
  }

}
