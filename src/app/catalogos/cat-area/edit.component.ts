import { Component, OnInit } from '@angular/core';
import { AreaService } from 'src/app/service/cat.area.service';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  angForm: FormGroup;
  area: any = {};
  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: AreaService,
    private fb: FormBuilder) {
      this.createForm();
     }

     createForm() {
      this.angForm = this.fb.group({
        arnIdarean: ['', Validators.required ]
        });
      }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.area = res;
      });
    });
  }
  updateBusiness(arnTipo) {
    this.route.params.subscribe(params => {
       this.bs.updateBusiness(arnTipo, params['id']);
       this.router.navigate(['Area']);
    });
 }


}
